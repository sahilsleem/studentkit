import { tools } from '../data/registry';

export interface SearchItem {
  s: string;  // slug
  t: string;  // title
  c: string;  // category
  sc: string; // subcategory
  a: string[]; // aliases
  k: string[]; // keywords
}

export interface IndexedItem extends SearchItem {
  titleNorm: string;
  allPhrases: string[];
  allWords: string[];
  categoryWords: string[];
}

export const normalize = (str: string) => str ? str.toLowerCase().trim().replace(/\s+/g, ' ') : '';
export const getWords = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean);

export function getRawSearchIndex(): SearchItem[] {
  return tools.map(tool => ({
    s: tool.slug,
    t: tool.title,
    c: tool.category,
    sc: tool.subcategory || '',
    a: tool.aliases || [],
    k: tool.keywords || []
  }));
}

export function buildIndex(items: SearchItem[]): IndexedItem[] {
  return items.map(item => {
    const titleNorm = normalize(item.t);
    const titleWords = getWords(item.t);
    const slugNorm = normalize(item.s.replace(/-/g, ' '));
    const slugWords = getWords(item.s);
    const categoryNorm = normalize(item.c);
    const categoryWords = getWords(item.c);
    const aliases = (item.a || []).map(normalize);
    const keywords = (item.k || []).map(normalize);

    const allPhrases = [titleNorm, slugNorm, ...aliases, ...keywords];
    const allWords = [...titleWords, ...slugWords, ...aliases.flatMap(getWords), ...keywords.flatMap(getWords)];

    return {
      ...item,
      titleNorm,
      allPhrases,
      allWords,
      categoryWords
    };
  });
}

export function searchTools(query: string, indexedItems: IndexedItem[]): { s: string; t: string }[] {
  const normQ = normalize(query);
  if (!normQ) return [];

  const qWords = getWords(normQ);
  const results: { s: string; t: string; score: number }[] = [];

  for (const item of indexedItems) {
    let isMatch = false;
    let score = 0;

    // 1. Exact or prefix match on title
    if (item.titleNorm.startsWith(normQ)) {
      isMatch = true;
      score += 200;
    } else if (item.titleNorm.includes(normQ)) {
      if (normQ.length <= 3) {
        if (item.allWords.some(w => w.startsWith(normQ) || w === normQ)) {
          isMatch = true;
          score += 150;
        }
      } else {
        isMatch = true;
        score += 120;
      }
    }

    // 2. Keyword / Alias / Phrase match
    if (!isMatch) {
      for (const phrase of item.allPhrases) {
        if (phrase.includes(normQ)) {
          if (normQ.length <= 3) {
            if (item.allWords.some(w => w.startsWith(normQ) || w === normQ)) {
              isMatch = true;
              score += 100;
              break;
            }
          } else {
            isMatch = true;
            score += 90;
            break;
          }
        }
      }
    }

    // 3. Multi-word query check (e.g. "student loan", "monthly emi")
    if (!isMatch && qWords.length > 1) {
      const allPresent = qWords.every(qw =>
        item.allWords.some(w => w.startsWith(qw) || w === qw) ||
        item.allPhrases.some(p => p.includes(qw))
      );
      if (allPresent) {
        isMatch = true;
        score += 80;
      }
    }

    // 4. Category match
    if (!isMatch) {
      if (item.categoryWords.some(w => w === normQ || (normQ.length >= 4 && w.startsWith(normQ)))) {
        isMatch = true;
        score += 30;
      }
    }

    if (isMatch) {
      results.push({ s: item.s, t: item.t, score });
    }
  }

  results.sort((a, b) => b.score - a.score || a.t.length - b.t.length);
  return results.slice(0, 10).map(r => ({ s: r.s, t: r.t }));
}

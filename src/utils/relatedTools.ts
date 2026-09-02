import { tools, type Tool } from '../data/registry';

export function getRelatedTools(currentTool: Tool, limit = 3): Tool[] {
  const scoredTools = tools
    .filter(t => t.id !== currentTool.id)
    .map(t => {
      let score = 0;
      
      // Explicit related via aliases or explicit array (if added to registry)
      if (currentTool.related && currentTool.related.includes(t.id)) score += 50;
      if (t.related && t.related.includes(currentTool.id)) score += 50;
      
      // Same subcategory
      if (currentTool.subcategory && t.subcategory === currentTool.subcategory) score += 20;
      
      // Same category
      if (t.category === currentTool.category) score += 5;
      
      // Keyword overlap
      if (currentTool.keywords && t.keywords) {
        const overlap = currentTool.keywords.filter(k => t.keywords!.includes(k)).length;
        score += overlap * 2;
      }
      
      // Title overlap (simple heuristic)
      const words = currentTool.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      const targetTitle = t.title.toLowerCase();
      for (const w of words) {
        if (targetTitle.includes(w)) score += 1;
      }
      
      return { tool: t, score };
    })
    .filter(t => t.score > 0);
    
  return scoredTools
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(st => st.tool);
}

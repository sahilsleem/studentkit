const fs = require('fs');
const file = 'src/data/registry.ts';
let content = fs.readFileSync(file, 'utf8');

// Find tools array
let startIdx = content.indexOf('export const tools: Tool[] = [');
if (startIdx === -1) process.exit(1);

const preamble = content.substring(0, startIdx);
let toolsStr = content.substring(startIdx + 'export const tools: Tool[] = ['.length);
let endIdx = toolsStr.lastIndexOf('];');
let postamble = toolsStr.substring(endIdx + 2);
toolsStr = toolsStr.substring(0, endIdx);

// It's technically JS object literals inside an array.
// To deduplicate properly without writing a full AST parser, we'll split by `{ id:`
const chunks = toolsStr.split(/(?=\s*\{\s*id:\s*["'])/);

const seen = new Set();
const cleanChunks = [];

for (const chunk of chunks) {
  if (!chunk.trim()) {
     cleanChunks.push(chunk);
     continue;
  }
  const match = chunk.match(/id:\s*["']([^"']+)["']/);
  if (match) {
    const id = match[1];
    if (seen.has(id)) {
       console.log("Removing duplicate:", id);
       continue; 
    }
    seen.add(id);
    
    // Also fix missing category if any
    let cleanedChunk = chunk;
    if (!cleanedChunk.includes('category:')) {
       console.log("Fixing missing category for:", id);
       // Add category at the end before the last closing brace
       cleanedChunk = cleanedChunk.replace(/\s*\}\s*,?\s*$/, ', category: "Student Utilities", subcategory: "General" },\n');
    }
    
    cleanChunks.push(cleanedChunk);
  } else {
    cleanChunks.push(chunk);
  }
}

const finalContent = preamble + 'export const tools: Tool[] = [' + cleanChunks.join('') + '];\n' + postamble;
fs.writeFileSync(file, finalContent, 'utf8');
console.log("Deduplication and category fix complete.");

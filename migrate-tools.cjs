const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'tools');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove imports block at top
  content = content.replace(/---\n([\s\S]*?)\n---/, '');

  // Remove <Layout ...> and </Layout>
  content = content.replace(/<Layout[^>]*>/, '');
  content = content.replace(/<\/Layout>/, '');

  // Remove <div class="max-w-4xl mx-auto"> ... </div>
  content = content.replace(/<div class="max-w-4xl mx-auto">\s*/, '');
  
  // Remove Header
  content = content.replace(/<!-- Header -->[\s\S]*?<!-- Calculator Interface -->/, '<!-- Calculator Interface -->');
  
  // Remove Related Tools (stop before script tag)
  content = content.replace(/<!-- Related Tools -->[\s\S]*?(?=<\/div>\s*<script>|<\/div>\s*$|<script>|$)/, '');
  
  // Remove the final </div> that matched max-w-4xl
  // It's the last </div> before <script>
  content = content.replace(/<\/div>\s*(?=<script>|$)/, '');

  // Clean up multiple blank lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(filePath, content.trim() + '\n', 'utf-8');
  console.log(`Migrated ${file}`);
}

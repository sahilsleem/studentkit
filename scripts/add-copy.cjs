const fs = require('fs');

let content = fs.readFileSync('src/components/tools/cgpa-to-percentage.astro', 'utf8');
if (!content.includes('copy-btn')) {
  content = content.replace(
    '<div class="text-5xl font-bold text-gray-900 mb-4" id="result-value">--%</div>',
    `<div class="flex items-center justify-center gap-3 mb-4">
              <div class="text-5xl font-bold text-gray-900" id="result-value">--%</div>
              <button type="button" class="copy-btn p-2 text-gray-400 hover:text-emerald-600 transition-colors" title="Copy result" data-target="result-value">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </button>
            </div>`
  );
  content = content.replace(
    "document.addEventListener('astro:page-load', initCalculator);",
    `
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const targetId = btn.getAttribute('data-target');
    const text = document.getElementById(targetId)?.textContent;
    if (text && text !== '--%' && text !== '--') {
      navigator.clipboard.writeText(text).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
        setTimeout(() => { btn.innerHTML = originalHtml; }, 2000);
      });
    }
  });
  
  document.addEventListener('astro:page-load', initCalculator);`
  );
  fs.writeFileSync('src/components/tools/cgpa-to-percentage.astro', content);
}

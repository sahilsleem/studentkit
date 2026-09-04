const fs = require('fs');
let text = fs.readFileSync('src/components/tools/ChemicalFormulaCalculator.astro', 'utf8');

// Normalize line endings for replacement
text = text.replace(/\r\n/g, '\n');

text = text.replace(
`      container.querySelector('.chem-reset-btn')?.addEventListener('click', () => { form.reset(); resultSec?.classList.add('hidden'); errBox?.classList.add('hidden'); });
        form.addEventListener('submit', (e) => {
      container.querySelector('.chem-reset-btn')?.addEventListener('click', () => {
        form.reset();
        resultSec?.classList.add('hidden');
        errBox?.classList.add('hidden');
      });
        e.preventDefault();`,
`      container.querySelector('.chem-reset-btn')?.addEventListener('click', () => {
        form.reset();
        resultSec?.classList.add('hidden');
        errBox?.classList.add('hidden');
      });
      form.addEventListener('submit', (e) => {
        e.preventDefault();`
);

fs.writeFileSync('src/components/tools/ChemicalFormulaCalculator.astro', text);

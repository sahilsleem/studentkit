const fs = require('fs');

// 1. Fix UnitAwareCalculator
let content = fs.readFileSync('src/components/tools/UnitAwareCalculator.astro', 'utf8');
content = content.replace(
  '<div class="pt-4">\r\n        <button type="submit" class="w-full bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">\r\n          Calculate\r\n        </button>\r\n      </div>',
  `<div class="flex flex-col sm:flex-row gap-4 pt-4">
        <button type="submit" class="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
          Calculate
        </button>
        <button type="reset" class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors unit-calc-reset-btn">
          Reset
        </button>
      </div>`
);
content = content.replace(
  '<div class="pt-4">\n        <button type="submit" class="w-full bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">\n          Calculate\n        </button>\n      </div>',
  `<div class="flex flex-col sm:flex-row gap-4 pt-4">
        <button type="submit" class="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
          Calculate
        </button>
        <button type="reset" class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors unit-calc-reset-btn">
          Reset
        </button>
      </div>`
);
content = content.replace(
  "outSelect.addEventListener('change', updateOutput);\r\n        }",
  `outSelect.addEventListener('change', updateOutput);\r\n        }\r\n        container.querySelector('.unit-calc-reset-btn')?.addEventListener('click', () => { form.reset(); resultSection?.classList.add('hidden'); errBox?.classList.add('hidden'); });`
);
content = content.replace(
  "outSelect.addEventListener('change', updateOutput);\n        }",
  `outSelect.addEventListener('change', updateOutput);\n        }\n        container.querySelector('.unit-calc-reset-btn')?.addEventListener('click', () => { form.reset(); resultSection?.classList.add('hidden'); errBox?.classList.add('hidden'); });`
);
fs.writeFileSync('src/components/tools/UnitAwareCalculator.astro', content);

// 2. Fix ChemicalFormulaCalculator
content = fs.readFileSync('src/components/tools/ChemicalFormulaCalculator.astro', 'utf8');
content = content.replace(
  'class="form-input flex-1 p-4 text-lg font-mono border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 placeholder-gray-400"',
  'class="chem-input flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors sm:text-lg font-mono placeholder-gray-400"'
);
content = content.replace(
  '<button type="submit" class="bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors shadow-sm">\r\n            Calculate\r\n          </button>',
  `<button type="submit" class="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors shadow-sm">
            Calculate
          </button>
          <button type="button" class="chem-reset-btn px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
            Reset
          </button>`
);
content = content.replace(
  '<button type="submit" class="bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors shadow-sm">\n            Calculate\n          </button>',
  `<button type="submit" class="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors shadow-sm">
            Calculate
          </button>
          <button type="button" class="chem-reset-btn px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
            Reset
          </button>`
);
content = content.replace(
  "const input = container.querySelector('.form-input') as HTMLInputElement;",
  "const input = container.querySelector('.chem-input') as HTMLInputElement;"
);
content = content.replace(
  "form.addEventListener('submit', (e) => {",
  `container.querySelector('.chem-reset-btn')?.addEventListener('click', () => { form.reset(); resultSec?.classList.add('hidden'); errBox?.classList.add('hidden'); });\r\n        form.addEventListener('submit', (e) => {`
);
fs.writeFileSync('src/components/tools/ChemicalFormulaCalculator.astro', content);

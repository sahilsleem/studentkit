const fs = require('fs');
const files = [
  'age-calculator.astro',
  'attendance-calculator.astro',
  'average-calculator.astro',
  'classes-to-miss.astro',
  'percentage-calculator.astro',
  'percentage-change.astro',
  'random-number.astro',
  'ratio-calculator.astro',
  'required-attendance.astro',
  'required-marks.astro'
];
files.forEach(f => {
  const p = 'src/components/tools/' + f;
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');
  
  // Inject error box before result-section if not present
  if (!content.includes('id="error-box"')) {
     content = content.replace(/(<div id="result-section")/g, '<div id="error-box" class="hidden mt-6 bg-red-50 text-red-700 p-4 rounded-lg text-sm font-medium border border-red-100"></div>\n        $1');
  }
  
  // Replace alert("...") with error box logic
  content = content.replace(/alert\((['"`])(.*?)\1\);/g, (match, quote, msg) => {
    return `const errBox = document.getElementById('error-box');\n        if (errBox) {\n          errBox.textContent = ${quote}${msg}${quote};\n          errBox.classList.remove('hidden');\n        }\n        return;`;
  });
  
  // Also on reset, hide the error box
  content = content.replace(/(form\.reset\(\);)/g, '$1\n      document.getElementById(\'error-box\')?.classList.add(\'hidden\');');
  
  // And hide error box on submit start
  content = content.replace(/(e\.preventDefault\(\);)/g, '$1\n      document.getElementById(\'error-box\')?.classList.add(\'hidden\');');
  
  fs.writeFileSync(p, content, 'utf8');
});
console.log('Replaced alerts with inline error boxes in 10 files.');

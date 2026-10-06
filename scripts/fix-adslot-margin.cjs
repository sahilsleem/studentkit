const fs = require('fs');

let c = fs.readFileSync('src/components/AdSlot.astro', 'utf8');

c = c.replace(
  '<div class={`ad-wrapper flex justify-center items-center mx-auto my-8 ${dimensionClasses} ${className}`}>',
  '<div class={`ad-wrapper flex justify-center items-center mx-auto ${className || \'my-8\'} ${dimensionClasses}`}>'
);

fs.writeFileSync('src/components/AdSlot.astro', c);

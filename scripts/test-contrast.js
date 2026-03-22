import contrast from 'get-contrast';

const palette = {
  light: {
    bg: '#f8f9fa',
    text: '#2d2d2d',
    muted: '#5a5a5a',
    earth: '#7a6a53', // Darkened version
    green: '#5a6a54'
  },
  dark: {
    bg: '#1c1b19',
    text: '#f2e8cf',
    muted: '#bcb196',
    earth: '#d4a373',
    green: '#c4d1c0'
  }
};

let errors = 0;

function check(name, foreground, background, ratio = 4.5) {
  const c = contrast.ratio(foreground, background);
  const score = contrast.score(foreground, background);
  const pass = c >= ratio;
  
  console.log(`${name}: ${foreground} on ${background}`);
  console.log(`  Ratio: ${c.toFixed(2)} | Score: ${score} | ${pass ? '✅ PASS' : '❌ FAIL'}`);
  
  if (!pass) errors++;
}

console.log('--- WCAG 2.1 AA Contrast Check (Adjusted) ---');

console.log('\n[ LIGHT MODE ]');
check('Normal Text', palette.light.text, palette.light.bg);
check('Muted Text', palette.light.muted, palette.light.bg);
check('Earth Accent (Normal Text)', palette.light.earth, palette.light.bg, 4.5);
check('Green Accent (Normal Text)', palette.light.green, palette.light.bg, 4.5);

console.log('\n[ DARK MODE ]');
check('Normal Text', palette.dark.text, palette.dark.bg);
check('Muted Text', palette.dark.muted, palette.dark.bg);
check('Earth Accent', palette.dark.earth, palette.dark.bg);
check('Green Accent', palette.dark.green, palette.dark.bg);

if (errors > 0) {
  process.exit(1);
}

process.stdout.write('    hello from spinner1.js...');
// Added intervals since after the start each animation repeats in 800ms.
setTimeout(() => {
  setInterval(() => {
    process.stdout.write('\r|   ');
  }, 800);
}, 100);

setTimeout(() => {
  setInterval(() => {
    process.stdout.write('\r/   ');
  }, 800);
}, 300);

setTimeout(() => {
  setInterval(() => {
    process.stdout.write('\r-   ');
  }, 800);
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  setInterval(() => {
    process.stdout.write('\r\\   ');
  }, 800);
}, 700);

// ... fill in the rest yourself ...
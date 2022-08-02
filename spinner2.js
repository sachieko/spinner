const spinner = () => {
  let animation = ['|', '/', '-', '\\'], delay = 100;
  for (const char of animation) {
    setTimeout(() => {
      setInterval(() => {
        process.stdout.write(`\r${char}   `);
      }, 800);
    }, delay += 200);
  }
};
spinner();
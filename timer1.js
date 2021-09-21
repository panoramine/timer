let arg = process.argv.slice(2);

if (arg.length > 0) {
  for (let elem of arg) {
    if (typeof Number(elem) == "number" && Number(elem) >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * elem);
    }
  }
}

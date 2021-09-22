let stdin = process.openStdin(); 
let tty =  require('tty');
let readline = require('readline');

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY)
  process.stdin.setRawMode(true);

stdin.on('keypress', function (chunk, key) {
  if (key && key.name == 'b') {
    process.stdout.write('\x07')
  }
  if (key && (key.name == '1' || key.name == '2' || key.name == '3' || key.name == '4' || key.name == '5' || key.name == '6' || key.name == '7' || key.name == '8' || key.name == '9') ) {
    process.stdout.write(`setting timer for ${key.name} seconds...\n`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * Number(key.name));
  }
  if (key && key.ctrl && key.name == 'c') {
    process.exit();
  } 
  });
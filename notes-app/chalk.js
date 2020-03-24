const chalk = require("chalk");

const log = console.log;

const red = chalk.red;
const greenBold = chalk.green.bold;
const greenBoldInverse = chalk.green.bold.inverse;

const msg = getNotes();
console.log(msg);

log(red("Warning!"));
log(greenBold("Success!"));
log(greenBoldInverse("Success!"));

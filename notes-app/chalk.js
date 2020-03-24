const chalk = require("chalk");

const log = console.log;

const red = chalk.red;
const greenBold = chalk.green.bold;
const greenBoldInverse = chalk.green.bold.inverse;
const greedBackground = chalk.green.inverse;
const redBackground = chalk.red.inverse;

// log(red("Warning!"));
// log(greenBold("Success!"));
// log(greenBoldInverse("Success!"));

module.exports = {
	greenBold: greenBold,
	log: log,
	greedBackground: greedBackground,
	redBackground: redBackground
};

const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customise yargs version
yargs.version("3.3.1");

// Create add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string"
		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: "string"
		}
	},
	handler: function(argv) {
		console.log("Title: " + argv.title);
		console.log("Body: " + argv.body);
	}
});

// Create remove command
yargs.command({
	command: "remove",
	describe: "Remove a note",
	handler: function() {
		console.log("Removing the note");
	}
});

yargs.command({
	command: "read",
	describe: "read a note",
	handler: function() {
		console.log("Reading the note");
	}
});

yargs.command({
	command: "list",
	describe: "List a note",
	handler: function() {
		console.log("Listing out all notes");
	}
});

yargs.parse();

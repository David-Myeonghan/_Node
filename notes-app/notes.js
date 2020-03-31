const fs = require("fs");
const chalk = require("chalk");

// const getNotes = () => "Your notes...";

const addNote = (title, body) => {
	const notes = loadNotes();
	// const duplicateNotes = notes.filter(note => note.title === title); // look through from the first item to the last item
	const duplicateNote = notes.find(note => note.title === title); // finish looking through the item when found item.

	debugger;

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.green.inverse("New note added!"));
	} else {
		console.log(chalk.red.inverse("Note title already exist!"));
	}
};

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

// Instead of poping out one object, re-save objects without the note to delete!
const removeNote = title => {
	const notes = loadNotes();
	const notesToKeep = notes.filter(note => note.title !== title);

	if (notes.length === notesToKeep.length) {
		console.log(chalk.red.inverse("No note found!"));
		// chalk.log(chalk.redBackground("No note found!"));
	} else {
		saveNotes(notesToKeep);
		console.log(chalk.green.inverse("Note removed!"));
		// chalk.log(chalk.greedBackground("Note removed!"));
	}

	// const filter = note => note.title === title;
	// const noteIndex = notes.findIndex(filter);
};

const listNotes = () => {
	const notes = loadNotes();

	console.log(chalk.green.inverse("Your notes: "));
	// note: you do not need to name the function.
	notes.forEach(note => {
		// note: not for'e'ach!!!
		console.log(note.title);
	});

	// console.log(noteTitle);
	// console.log(noteTitle());
};

const readNote = title => {
	const notes = loadNotes();
	const noteFound = notes.find(note => note.title === title);

	if (!noteFound) {
		console.log(chalk.red.inverse("No note found."));
	} else {
		console.log(chalk.inverse(title));
		console.log(noteFound.body);
	}
};

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
};

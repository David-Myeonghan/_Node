// const square = function(x) {
// 	return x * x;
// };

// const square = x => {
// 	return x * x;
// };

// const square = x => x * x;

// console.log(square(3));

// Arrow function doesn't bind with 'this'
const event = {
	name: "No gathering",
	guestList: ["David", "Hayden", "Tommy"],
	printGuestList() {
		// function directly on an object.
		// this syntax is not arrow. work with 'this'.
		console.log("Guest list for " + this.name);

		// to access to the parent's 'this', use arrow function
		this.guestList.forEach(guest => {
			console.log(guest + " is attending " + this.name);
		});
	}
};

event.printGuestList();

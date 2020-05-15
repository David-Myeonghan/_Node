const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a < 0 || b < 0) {
				return reject("Numbers must be non-negative");
			}
			resolve(a + b);
		}, 2000);
	});
};

const doWork = async () => {
	// before async: undefiend / after: Promise { undefined }
	// async function always return Promise that is fulfilled with the value the developer choose to return from the function.

	const sum = await add(1, -99); // looks synchronous but perform asynchronous tasks
	const sum2 = await add(sum, 50); // runs in order even though asynchronous things are hapening behind the scenes.
	const sum3 = await add(sum2, -3); // easy to understand // easy to access to its scope.

	return sum3;
};

doWork()
	.then((result) => {
		console.log("result", result);
	})
	.catch((e) => {
		console.log("e:", e);
	});
// console.log(doWork());

const doWorkPromise = new Promise((resolve, reject) => {
	// 'new Promise' happens behind the scenes.

	setTimeout(() => {
		reject("Things went wrong!");
		resolve([7, 4, 1]);
	}, 2000);
});

doWorkPromise
	.then((result) => {
		console.log("Success!", result);
	})
	.catch((error) => {
		console.log("Error!", error);
	});

//                             fulfiled
//                           /
// Promise   -- pending -->
//                           \
//                             rejected

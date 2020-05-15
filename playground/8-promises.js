// const doWorkPromise = new Promise((resolve, reject) => {
// 	// 'new Promise' happens behind the scenes.

// 	setTimeout(() => {
// 		reject("Things went wrong!");
// 		resolve([7, 4, 1]);
// 	}, 2000);
// });

// a single asynchromous opertaion
// doWorkPromise
// 	.then((result) => {
// 		console.log("Success!", result);
// 	})
// 	.catch((error) => {
// 		console.log("Error!", error);
// 	});

//                             fulfiled
//                           /
// Promise   -- pending -->
//                           \
//                             rejected

const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
		}, 2000);
	});
};

// Promise chaining in a wrong, nested way.
// add(1, 2)
// 	.then((sum) => {
// 		console.log(sum);
// 		add(sum, 5)
// 			.then((sum2) => {
// 				console.log(sum2);
// 			})
// 			.catch((e) => {
// 				console.log(e);
// 			});
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// Promise chaining in a right way. // not nested.
add(1, 1)
	.then((sum) => {
		// first 'then' call runs when the first 'add' promise is fulfilled.
		console.log(sum);
		return add(sum, 4); // End the promise and then call other promise
	})
	.then((sum2) => {
		// each working with different promise
		console.log(sum2);
	})
	.catch((e) => {
		console.log(e);
	});

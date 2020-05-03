// Object property shorthand

const name = "David";
const userAge = 27;
const user = {
	name, // shorthnad syntax. original -> name: name,
	age: userAge,
	location: "Brisbane",
};

console.log(user);

// Object Destructuring

const product = {
	label: "My notebook",
	price: 10,
	stock: 100,
	salePrice: undefined,
};

// const label = product.label; // => if you see like this(product.label), you can refactor it.
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5 } = product; // rating default value.

// console.log(productLabel);
// console.log(stock);
// console.log(rating); // undefined

const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
};

transaction("order", product);

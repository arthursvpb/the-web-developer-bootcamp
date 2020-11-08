// Using the NPM package
var faker = require('faker');

// Plus: storing the product names in a array, rather than only console.loggin them.
var storeItems = [];

// Random name

for(var i=0;i<=10;i++){

	var randomProduct = faker.commerce.productName();
	var randomPrice = faker.commerce.price();

	storeItems.push(randomProduct);
	storeItems.push(randomPrice);

}

console.log(storeItems);

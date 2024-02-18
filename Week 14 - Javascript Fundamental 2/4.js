const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
];

let maxValue = { name: "", price: 0 };
let minValue = { name: "", price: Number.MAX_VALUE };

for (let item of products) {
    if (item.price > maxValue.price) {
        maxValue = item;
    }
    if (item.price < minValue.price) {
        minValue = item;
    }

}

console.log(`The product with maximum ammount is ${maxValue.name} which is priced at Rs. ${maxValue.price}`);
console.log(`The product with minimum ammount is ${minValue.name} which is priced at Rs. ${minValue.price}`);
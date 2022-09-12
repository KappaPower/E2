let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
]);

// console.log(fruits)

for (let el of fruits){
    console.log(`Ключ — ${el[0]}, значение — ${el[1]}`)
}

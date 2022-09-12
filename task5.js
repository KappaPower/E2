function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const arrSize = getRandomInt(11)
const arr = []
for (let i = 0; i < arrSize; i++){
    arr[i] = Math.round(Math.random() * 100)
}

console.log("Длина массива: " + arr.length + "\nЭлементы массива: ")

arr.forEach(el => console.log(el + " "))

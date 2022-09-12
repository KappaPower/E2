const arrSize = 10
const arr = []
for (let i = 0; i < arrSize; i++){
    arr[i] = Math.round(Math.random() * 10)
}

console.log("Длина массива: " + arr.length + "\nЭлементы массива: ")

arr.forEach(el => console.log(el + " "))

const allEqual = array => array.every(val => val === array[0])

console.log(allEqual(arr))
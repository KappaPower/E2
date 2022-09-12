let arr = ['a', null, -4, 8, 0, 15, 10, 16, 23, 42, 0, '+', NaN];
console.log("Длина массива: " + arr.length + "\nЭлементы массива: ")

arr.forEach(el => console.log(el + " "))

let oddNumbers = 0
let evenNumbers = 0
let zero = 0
let another = 0
for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i]) || arr[i] == null){
        another+= 1
    }
    else if( arr[i] % 2 === 1 && arr[i] !== 0){
        oddNumbers+= 1
    }
    else if(arr[i] % 2 === 0 && arr[i] !== 0 ){
        evenNumbers+= 1
    }
    else if (arr[i] === 0) {
        zero += 1
    }
}
console.log(`Нечётных: ${oddNumbers}\nЧётных: ${evenNumbers}\nНулевых: ${zero}\nДругих: ${another}`)


let str = prompt('слово')

function reverse(s){
    return s.split("").reverse().join("");
}

console.log(reverse(str))
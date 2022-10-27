//Задание №6

const arr = [1, 2, 2, 3, 4, 5, 6, 7];


let isEqual = true
const reference = arr[0]

for (let item of arr) {
    if ( item !== reference){
        isEqual = false
    }
}

console.log(isEqual)




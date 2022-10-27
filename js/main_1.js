//Задание №1
const arr = [2, 3, 3, 4, 5, 0, 0,];
let evenNumbers = 0
let oddNumbers = 0
let zero = 0

arr.forEach((item)=>{
    claim(item)
})    

function claim(item) {
    if (item !== 0) {
        if (item % 2 == 0) {
            evenNumbers++
        } else{
            oddNumbers++
        }
    }else {
        zero++
    }   
}

console.log(`Чётные: ${evenNumbers}, Нечётные: ${oddNumbers}, Нули: ${zero}`)


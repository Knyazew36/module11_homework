
const value = prompt('Введите число');
let num = + value;
if (num <= 1000) {
    if (num > 2) {
        isPrime(num);       
    }else console.log('Данные не верны');
} else {
    console.log('Данные не верны');
}

function isPrime(b) {   
    for (let i = 2; i < b; i++) {
        if (b % i === 0) {           
           console.log("Число составное"); 
           break
        }else{
            console.log("Число простое");
        }       
    }
}



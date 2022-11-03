//Задание №2
const inputValue = prompt('Введите число');
const b = +inputValue;

function func(a) {    
    if (a <= 1000 && a !== 0 && a !== 1) {
        for (let index = 2; index < a; index++) {       
            if (a % index === 0) {              
               return console.log('Число не простое')
            }else{
                console.log('Число простое')
            }     
        }       
    } else if (a === 1) {
        console.log('Наименьшее натуральное число')
    } else {
        console.log('Данные неверны')
    }  
}
func(b)

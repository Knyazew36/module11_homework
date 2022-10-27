//Задание №2
 let a = 'a'
 let type = typeof a
 if (type === 'number') {
    alert(`${a} - число`)
 } else if(type === 'string'){
    alert(`${a} - строка`)
 }else if(type === 'boolean'){
    alert(`${a} - логический тип`)
 }else{
    alert('Тип x не определён')
 }

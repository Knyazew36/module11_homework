// Задание 8
const myMap = new Map()

myMap.set(32, '3232')
myMap.set('a', 1)
myMap.set('b', 2)


for (const i of myMap.keys()) {
    console.log(`Ключ: ${i}`)
  
}

for (const i of myMap.values()) {
    console.log(`Значение: ${i}`)
}


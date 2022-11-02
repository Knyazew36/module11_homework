//Задание №4

function func(a,b) {
    setInterval(() => {
        if (a !== b+1) {            
            console.log(a)
            a++
        }
    }, 1000);
}
func(5, 15)
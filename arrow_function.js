function sum() {
    const x = 3
    const y = 4
    console.log(x + y)
}

sum() //return 7
// hoist

sum2()
function sum2() {
    const x = 3
    const y = 4
    console.log(x * y) //return 12

}


//3rd way to create function
const sum3 = function sum3() {
    const x = 3
    const y = 4
    console.log(y - x) //return 1
}
sum3()

//Arrow functions

const sum4 = () => {
    const x = 12
    const y = 4
    console.log(x / y) //return 3
}
sum4()
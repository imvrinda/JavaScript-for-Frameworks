
// const bike ={
//     name:"maruti",
//     speed: 110,
//     intro:()=> {
//         console.log(`Bike Details : Name ${this.name} and Speed ${this.speed}`)
//     }
// }

// bike.intro() 

function Print(text) {
    console.log(`${text}`)
}
//1. class created name as Bike
// class Bike{
//     constructor(){
//         this.color="red",
//         this.speed=130
//     }
//     //this refer to the object 
//  intro:()=>{
//         Print(`Bike color is ${this.color}`)
//     }
// }
// //object created as maruti and honda
// const maruti = new Bike()
// const honda = new Bike()

// Print(maruti.color)
// Print(honda.speed)

//2. dynamic values for object

// class created name as Bike
class Bike{
    constructor(color,speed){
        this.color= color,
        this.speed=speed
    }
    //this refer to the object 
    intro(){
        Print(`Bike color is ${this.color}`)
    }
}
//object created as maruti and honda
const maruti = new Bike("red",123)
const honda = new Bike("black",123)

honda.intro()

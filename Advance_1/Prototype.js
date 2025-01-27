// let myName = "kicha     "
// let myStudy = "Engg       "

// console.log(myName.trueLength);

let myHeros = ['thor', 'spidy']

let heroPower = {
    thor: 'hammer',
    spidy: 'sling',

    getSpidyPower: function(){
        console.log(`spidy power is ${this.spidy}`);
        
    }
}
// creating obj methode using prototype 

Object.prototype.kicha = function(){
    console.log(`kicha is present in all object`);
}

Array.prototype.heykicha = function(){
    console.log(`kicha says hello`);
    
}

heroPower.kicha()
//heroPower.heykicha() //arr method can't access by obj
// these method apply only on arr
myHeros.heykicha()
myHeros.kicha()

// INHERITANCE 
const user = {
    name: 'krishna',
    email: 'email@com'
}

const Father = {
    bike: true
}

const Mother = {
    car: false
}

const son = {
    cycle: true,
    // prototyple inheritance 
    __proto__: Mother
}

Father.__proto__ = user // old syntax

// modern syntax
Object.setPrototypeOf(son, Father)

let anotherUser = "kicha     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}
anotherUser.trueLength()
'krishna'.trueLength()
'hi'.trueLength()


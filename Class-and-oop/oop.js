// Object Literals
const kicha = {
    username: 'kicha',
    password: 123,
    isLogged: true,

    getDetail: function(){
        console.log(`username ${this.username}`);
        // this used for current context 
        console.log(this);
    }
}
console.log(kicha.username);
console.log(kicha.getDetail());
console.log(this);

// new - constructor function (allow to create obj literal from current obj)

// WHEN WE USE NEW KEYWORD BELOW STEPS OCCURES
// 1- create empty obj(instance)
// 2- constructor function call (take all arguments pack them)
// 3- arguments injected into .this
// 4- return val to function
function user(username, age, logged){
    this.username = username
    this.age = age
    this.logged = logged

    return this
}
// const userOne = user('kicha',22,true)
// const userTwo = user('krish',25,false)

//console.log(userOne); // when we create userTwo it override values of userOne to overcome use new keyword

const userOne = new user('kicha',22,true)
const userTwo = new user('krish',25,false)
console.log(userOne.constructor); // constructor default method provide REFERENCE of it's self i.e user

// console.log(userOne);

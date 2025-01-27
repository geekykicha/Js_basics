// ES6

// class allow direct method creation or function 

// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}xyz`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const kicha = new user('krishna', 'kicha@com', 123)
// console.log(kicha.encryptPassword());
// console.log(kicha.changeUsername());

// Behind the scene

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
     return `${this.password}xyz`
}

user.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const kicha = new user('krishna', 'kicha@com', 123)
console.log(kicha.encryptPassword());
console.log(kicha.changeUsername());
class User{
    constructor(username){
        this.username = username
    }
    userFun(){
        console.log(`fun in user ${this.username}`);
    }
}
class parent extends User{
    constructor(username, email, password){
        //The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        super(username)
        this.email = email
        this.password = password
    }
    parentFun(){
        console.log(`fun in parent ${this.username}`);
    }
}

const kicha = new parent('krish', 'k@com', 123)
kicha.userFun()
kicha.parentFun()

const krishna = new User('k')
krishna.userFun()

console.log(krishna instanceof User); // T
console.log(kicha instanceof parent); // T
console.log(kicha instanceof User); // T
console.log(krishna instanceof parent); // F

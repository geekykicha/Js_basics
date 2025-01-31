class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
// if we use same arguments we get ERROR: Maximum call stack size exceeded
// use new instance _email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}kicha`
    }
    set password(value){
        this._password = value
    }
}
const kicha = new User('k', 'km@com', 123)
console.log(kicha.password);

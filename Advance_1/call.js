// call - passing current exection context to another function
function setUser(username){
    this.username = username
    console.log("called");
    
}
// here username refering from setUser
function newUser(username, email, password){
    setUser.call(this, username)
    this.email = email
    this.password = password
}

const userVal = new newUser('kicha', 'kmu@com', 123)
console.log(userVal);

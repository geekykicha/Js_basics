// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db call, network call, cryptograpy
    setTimeout(function(){
        console.log("async task completed");
        resolve()
    },1000)
})
// then - used to connect with resolve
promiseOne.then(function(){
    console.log("promise consumed");
    
})
// another way 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("task 3");
        // setting val to verify the connection b/w resolve & then 
        resolve({username: "kicha", email: "kmudhale@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "kicha", email: "new@gmail.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// .then chaining to get inner val from resolve 
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => console.log(username))
.catch((error) => console.log(error)) // handle error
// this line execute irrespective condition
.finally(() => console.log("the promise either resolved or rejected"))

// handle error with async await 
const promiseFive =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: 123})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

// async await - wait to execute or throw error disadv - cant directly handle errors
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// with fetch 
async function getUserDetail(){
   try {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    // response takes time to convert string to json so use await 
    const data = await response.json()
    console.log(data);
   } catch (error) {
    console.log(error);
   }
}
getUserDetail()

// above method with then & catch 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
})
.catch((error) => {console.log(error)})
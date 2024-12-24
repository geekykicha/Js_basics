const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "orange") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "black") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "brown") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id
        }
    })
})
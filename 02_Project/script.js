const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height <= 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    else if(weight <= 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (weight / ((height*height) / 10000).toFixed(2))
        results.innerHTML = `<span>${bmi}</span>`
    // show result
    let Message = '';

    if (bmi < 18.6) {
        Message = 'Under Weight'
    }
    
    else if (bmi >= 18.6 && bmi <= 24.9) {
        Message = 'Normal Range'

    }
    else {
        Message = 'Over Weight'
    }
    results.innerHTML += `<p>${Message}</p>`
}
});
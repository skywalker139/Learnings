const form = document.querySelector('form');

// this use case will give empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
    e.preventDefault();    //isse server pe request nahi jayegi

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height<0 || isNaN(height) ){
        results.innerHTML = 'Please enter a valid height';
    } else if(weight === '' || weight<0 || isNaN(weight) ){
        results.innerHTML = 'Please enter a valid weight';
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});

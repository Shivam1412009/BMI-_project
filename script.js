const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const resultElement = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        resultElement.innerHTML = 'Please provide a valid height';
        
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        resultElement.innerHTML = 'Please provide a valid weight';
    } 
    else {
        const bmi = (weight / ((height * height))).toFixed(2);
        resultElement.innerHTML = `<span>${bmi}</span>`;
        if(bmi<=18.6){
            resultElement.innerHTML=`You are under weight ${bmi}`
        }
        if(bmi>=18.6 && bmi<=24.9){
            resultElement.innerHTML=`You are normal weight ${bmi}`
        }
        if(bmi>24.9){
            resultElement.innerHTML=`You are over weight weight ${bmi}`
        }
    }
});

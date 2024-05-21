const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#Weight').value);
  const result = document.querySelector('.result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerText = `pleae enter valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerText = `pleae enter valid Weight`;
  }

  
  const wResult = document.querySelector("#weight-result")
  const re = weight / ((height / 100)*2);
  const results =  Math.round(re)
  result.innerHTML = results;

  if(results <= 16) {
    wResult.innerText = `Server Thinness`
  } else if (results == 16 || results == 17){
    wResult.innerText = `Moderate Thinness`
  } else if (results => 19){
    wResult.innerText = `Mild Thinness`
  } else if (results => 25){
    wResult.innerText = `Normal`
  } else if (results > 30){
    wResult.innerText = `Overweight`
  } else if (results > 35 ){
    wResult.innerText = `Obese class I`
  } else if (results > 40){
    wResult.innerText = `Obese class II`
  } else if (results == 40 ){
    wResult.innerText = `Obese class III`
  }

});

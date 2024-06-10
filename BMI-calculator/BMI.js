const body  = document.querySelector('body')
let button = document.querySelector('button')
button.addEventListener('click',function(e){
  
 let h = parseInt(document.querySelector('.height').value)
  let w= parseInt(document.querySelector('.weight').value)
  let result = document.querySelector('.output')
  console.log("sdfdf")
  if(h === '' || w === '' || h<0 || w<0 || isNaN(h) || isNaN(w)){
    result.innerHTML = "please give a valid height or weight";
  }
  else{
   const bmi =  (w/((h*h)/10000)).toFixed(2)
   result.innerHTML = ` we have your BMI: ${bmi}`;

  }
  //show the result
})
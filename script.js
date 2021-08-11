const number = document.getElementById("number");
let counter = 0;
let percentage = 12;
let score = 437 - 437 * percentage / 100;
let r = document.querySelector(':root');

function myFunction_set() {
  r.style.setProperty('--score', score);
}

myFunction_set();

setInterval(()=> {
    if(counter >= percentage){
        clearInterval();
    } else{
        counter++;
        number.innerText = counter + "%"
    }
   
},2000/percentage)
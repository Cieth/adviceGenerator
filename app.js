import 'regenerator-runtime/runtime';
import axios from 'axios';

let main = document.querySelector('.main-advice')
let btn = document.querySelector('.btn')
function getAdvice() {
    axios.get('https://api.adviceslip.com/advice')
    .then(function(response) {
        main.innerHTML = 
        `
        <h1>Advice #${response.data.slip.id}</h1>
        <br>
        
        <p>${response.data.slip.advice.replace(/[^\w\s]/gi, '')}</p>
        `
    }).catch(function(err){
        console.log(err);
      });
}
getAdvice()
btn.addEventListener('click', function(events){
    getAdvice()
})

function getAdviceById(id) {
    axios.get(`https://api.adviceslip.com/advice/${id}`)
    .then(function(response) {
        console.log(response.data.slip.advice)
        main.innerHTML = 
        `   
        <h1>Advice #${response.data.slip.id}</h1>
        <br>
        <br>
        
        <p>${response.data.slip.advice.replace(/[^\w\s]/gi, '')}</p>
        `
    }).catch(function(err){
        main.innerHTML = 
        `   
        <h1>Advice ???</h1>
        <br>
        
        <p>This advice has not been written yet</p>
        `
      });
}


let search  = document.querySelector(".search")
let input = document.querySelector(".field")

search.addEventListener("click", function () {
    getAdviceById(input.value)
})




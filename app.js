import 'regenerator-runtime/runtime';
import axios from 'axios';

let main = document.querySelector('.main-advice')
let btn = document.querySelector('.btn')
function getAdvice() {
    axios.get('https://api.adviceslip.com/advice')
    .then(function(response) {
        console.log (response.data.slip.advice)
        main.innerHTML = `<p>${response.data.slip.advice.replace(/[^\w\s]/gi, '')}</p>`
    }).catch(function(err){
        console.log(err);
      });
}
getAdvice()
btn.addEventListener('click', function(events){
    getAdvice()
})






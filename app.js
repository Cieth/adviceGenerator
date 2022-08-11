import 'regenerator-runtime/runtime';
import axios from 'axios';

let main = document.querySelector('.main-advice')
function getAdvice() {
    axios.get('https://api.adviceslip.com/advice')
    .then(function(response) {
        console.log (response.data.slip.advice)
        main.innerHTML = response.data.slip.advice
    }).catch(function(err){
        console.log(err);
      });
}

getAdvice()





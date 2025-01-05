const clock = document.querySelector('#clock');

//setInterval((){}, 1000);  //1000ms = 1s

//********************important */

setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString(); 
}, 1000);  
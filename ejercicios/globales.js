let i=0;
let intervalo= setInterval(function(){
    console.log('hola');
    if(i===3){
        clearInterval(intervalo);
    }
    i++;
},1000);
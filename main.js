let EnPound = document.getElementById('EnPound');
let egPound = document.getElementById('EGPound');

EnPound.onkeyup=function(){


    egPound.value =  EnPound.value * 22.68 ; 
    
}


egPound.onkeyup=function(){


    EnPound.value =  egPound.value / 22.68 ; 
    
}
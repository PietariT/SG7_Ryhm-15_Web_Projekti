/// <reference path="jquery-3.6.0.min.js" /> 

// Index sivun arvonta napit
let sivut = [
    'THvisa.html',
    'PTvisa.html',
    'muistipeli.html',
    'matikka_visa.html',
    'KJvisa2.html'
];

let sivut2 = [
    'KJvisa.html',
    'PTvisa.html',
    'PTristikko.html',
    'muistipeli.html',
    'matikka_visa.html',
    'KJvisa2.html'
];

$(function () {
    $("#arvo1").on("click", function(){
        let sivu = Math.floor(Math.random(sivut) * 5);
        window.open(sivut[sivu]);
    });
    $(function () {
        $("#arvo2").on("click", function(){
            let sivu = Math.floor(Math.random(sivut2) * 6);
            window.open(sivut2[sivu]);
        });
    
    }); 
    
}); 

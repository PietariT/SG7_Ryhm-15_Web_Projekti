/// <reference path="jquery-3.6.0.min.js" /> 

let sivut = [
    'THvisa.html',
    'PTvisa.html',
    'muistipeli.html'];

let sivut2 = [
    'KJvisa.html',
    'PTvisa.html',
    'PTristikko.html',
    'muistipeli.html'
];

$(function () {
    $("#arvo1").on("click", function(){
        let sivu = Math.floor(Math.random(sivut) * 3);
        window.open(sivut[sivu]);
    });
    $(function () {
        $("#arvo2").on("click", function(){
            let sivu = Math.floor(Math.random(sivut2) * 4);
            window.open(sivut2[sivu]);
        });
    
    }); 
    
}); 

/// <reference path="jquery-3.6.0.min.js" /> 

function eteneminen() {
    let elem = document.getElementById("aikajana");   
    var width = 0;
    var id = setInterval(frame, 250);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
    } 

    let oikein = {
        correct : 0
    };

$(function(){


    $("[name=pelaajalle]").on("click", function(){
           $("[name=pelaajalle]").addClass("piilota");
            $(".pelaajalle").removeClass("piilota");
            $(".painikkeet").removeClass("piilota");

    $("[name=jatkane]").on("click", function(){
        $(".pelaajalle").addClass("piilota");
        $(".painikkeet").addClass("piilota");
        $(".visa1").removeClass("piilota");

    }); 
    $(".elukka").on("click", function(){
        $(this).parent().addClass("selected");

        let name_atribuutti = $(this).attr("name");
        let valinta = "[name=" + name_atribuutti +"]";
        $(valinta).prop("disabled", true);

        let vastaus = Number($(this).val());
        if (vastaus === 1) {
            document.getElementById('oikein').innerHTML = ++oikein.correct;
            $(this).parent().addClass("right");
        } else {

            $(this).parent().addClass("wrong");

            let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
            $(oikea_vastaus).parent().addClass("right");
        }
    });
    $("[name=seuraava1]").on("click", function(){
        $(".visa1").addClass("piilota");
        $(".visa2").removeClass("piilota");

    }); 

    $(".elukka2").on("click", function(){
        $(this).parent().addClass("selected");

        let name_atribuutti = $(this).attr("name");
        let valinta = "[name=" + name_atribuutti +"]";
        $(valinta).prop("disabled", true);

        let vastaus = Number($(this).val());
        if (vastaus === 1) {
            document.getElementById('oikein').innerHTML = ++oikein.correct;
            $(this).parent().addClass("right");
        } else {

            $(this).parent().addClass("wrong");

            let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
            $(oikea_vastaus).parent().addClass("right");
        }
    });
    $("[name=seuraava2]").on("click", function(){
        $(".visa2").addClass("piilota");
        $(".visa3").removeClass("piilota");

    }); 
    
    $(".elukka3").on("click", function(){
        $(this).parent().addClass("selected");

        let name_atribuutti = $(this).attr("name");
        let valinta = "[name=" + name_atribuutti +"]";
        $(valinta).prop("disabled", true);

        let vastaus = Number($(this).val());
        if (vastaus === 1) {
            document.getElementById('oikein').innerHTML = ++oikein.correct;
            $(this).parent().addClass("right");
        } else {

            $(this).parent().addClass("wrong");

            let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
            $(oikea_vastaus).parent().addClass("right");
        }
    });
    $("[name=seuraava3]").on("click", function(){
        $(".visa3").addClass("piilota");
        $(".visa4").removeClass("piilota");

    }); 
    
    $(".elukka4").on("click", function(){
        $(this).parent().addClass("selected");

        let name_atribuutti = $(this).attr("name");
        let valinta = "[name=" + name_atribuutti +"]";
        $(valinta).prop("disabled", true);

        let vastaus = Number($(this).val());
        if (vastaus === 1) {
            document.getElementById('oikein').innerHTML = ++oikein.correct;
            $(this).parent().addClass("right");
        } else {

            $(this).parent().addClass("wrong");

            let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
            $(oikea_vastaus).parent().addClass("right");
        }
    });

    $("[name=seuraava4]").on("click", function(){
        $(".visa4").addClass("piilota");
        $(".visa5").removeClass("piilota");

    }); 
    $(".elukka5").on("click", function(){
        $(this).parent().addClass("selected");

        let name_atribuutti = $(this).attr("name");
        let valinta = "[name=" + name_atribuutti +"]";
        $(valinta).prop("disabled", true);

        let vastaus = Number($(this).val());
        if (vastaus === 1) {
            document.getElementById('oikein').innerHTML = ++oikein.correct;
            $(this).parent().addClass("right");
        } else {

            $(this).parent().addClass("wrong");

            let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
            $(oikea_vastaus).parent().addClass("right");
        }
    });

    $("[name=tarkista]").on("click", function(){
        $(".visa5").addClass("piilota");
        $(".tulos").removeClass("piilota");

    }); 


    $("[name=uudestaan]").on("click", function(){
        location.reload();
    });

    });
});

/// <reference path="jquery-3.6.0.min.js" /> 


let result = 0; 
 

// document ready function
$(function () {

    

    /* Piilotetaan alussa kaikki kysymykset  */
    $("[name=kysymys1]").hide();
    $("[name=kysymys2]").hide();
    $("[name=kysymys3]").hide();
    $("[name=kysymys4]").hide();
    $("[name=kysymys5]").hide();
    $("[name=tuloksia]").hide();


    /* Aloita napista ensimäinen kysymys esiin  */
    $("#aloitus").on("click", function(){
        $("[name=infoja]").hide(1000);
        $("[name=aloitusnapukka]").hide(500);
        $("[name=kysymys1]").slideDown(1000);
        
      });

      $("#vastataan1").on("click", function () {
        let valinta = Number($("[name=kys1]:checked").val());
        if (valinta === 3) {
            $("#right1").html("Vastauksesi on oikein!");
        } else {
            $("#wrong1").html("Vastauksesi on väärin.");
        } 
    });
    


    /* Kysymys 2 esiin */
    $("#seu1").on("click", function(){
      $("[name=kysymys1]").hide(500);
      $("[name=kysymys2]").slideDown(1000);
      });

      $("#vastataan2").on("click", function () {
        let valinta = Number($("[name=kys2]:checked").val());
        if (valinta === 2) {
            $("#right2").html("Vastauksesi on oikein!");
        } else {
            $("#wrong2").html("Vastauksesi on väärin.");
        }
    });


    /* Kysymys 3 esiin */
    $("#seu2").on("click", function(){
      $("[name=kysymys2]").hide(500);
      $("[name=kysymys3]").slideDown(1000);
      });

      $("#vastataan3").on("click", function () {
        let valinta = Number($("[name=kys3]:checked").val());
        if (valinta === 1) {
            $("#right3").html("Vastauksesi on oikein!");
        } else {
            $("#wrong3").html("Vastauksesi on väärin.");
        }
    });

    /* Kysymys 4 esiin */
    $("#seu3").on("click", function(){
      $("[name=kysymys3]").hide(500);
      $("[name=kysymys4]").slideDown(1000);
      });

      $("#vastataan4").on("click", function () {
        let valinta = Number($("[name=kys4]:checked").val());
        if (valinta === 3) {
            $("#right4").html("Vastauksesi on oikein!");
        } else {
            $("#wrong4").html("Vastauksesi on väärin.");
        }
    });

    /* Kysymys 5 esiin */
    $("#seu4").on("click", function(){
      $("[name=kysymys4]").hide(500);
      $("[name=kysymys5]").slideDown(1000);
      });

      $("#vastataan5").on("click", function () {
        let valinta = Number($("[name=kys5]:checked").val());
        if (valinta === 3) {
            $("#right5").html("Vastauksesi on oikein!");
        } else {
            $("#wrong5").html("Vastauksesi on väärin.");
        }
    });

    /* Pisteesi ruutu esiin */
    $("#tulokset5").on("click", function(){
      $("[name=kysymys5]").hide(500);
      $("[name=tuloksia]").slideDown(1000);

      $("#tulokset5").prop("disabled", true);
      let kysymys1 = Number($("[name=kys1]:checked").val());
      let kysymys2 = Number($("[name=kys2]:checked").val());
      let kysymys3 = Number($("[name=kys3]:checked").val());
      let kysymys4 = Number($("[name=kys4]:checked").val());
      let kysymys5 = Number($("[name=kys5]:checked").val());
    
      if (kysymys1 === 3) {
          result++
      }
      if (kysymys2 === 2) {
          result++
      }
      if (kysymys3 === 1) {
          result++
      }
      if (kysymys4 === 3) {
          result++
      }
      if (kysymys5 === 3) {
          result++
      }
      $("[name=tuloksia]").show(100);
      result = $("#pisteesi").html( "Pisteesi:  " + result + " /5");
      
      
    
    });

     
    

    
      
});
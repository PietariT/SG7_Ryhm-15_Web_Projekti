/// <reference path="jquery-3.6.0.min.js" /> 




// document ready function
$(function () {

    

    
    $("[name=kysymys1]").hide();
    $("[name=kysymys2]").hide();
    $("[name=kysymys3]").hide();
    $("[name=kysymys4]").hide();
    $("[name=kysymys5]").hide();


    $("#aloitus").on("click", function () {
        $("[name=kysymys1]").show(500);       
            
    });
    
    $("#seu1").on("click", function () {
        $("[name=kysymys2]").show(500);       
            
    });

    $("#seu2").on("click", function () {
        $("[name=kysymys3]").show(500);       
            
    });

    $("#seu3").on("click", function () {
        $("[name=kysymys4]").show(500);       
            
    });

    $("#seu4").on("click", function () {
        $("[name=kysymys5]").show(500);       
            
    });




});
    
    


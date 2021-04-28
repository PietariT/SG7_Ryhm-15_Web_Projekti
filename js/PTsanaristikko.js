/// <reference path="jquery-3.6.0.min.js" /> 
/*
* Your name: Pietari Tanner
*/

// Globaali muuttuja pisteille
let pisteet = [14];

$(function () {
    $("#vastaa").on("click", function(){
        $("#piste").removeClass("disabled");
        // 1. kysymys
        let v1_1 = $("#1_1v_8_1p").val();
        let v1_2 = $("#1_2v").val();
        let v1_3 = $("#1_3v").val();
        let v1_4 = $("#1_4v").val();
        let v1_5 = $("#1_5v_10_1p").val();
        let v1_6 = $("#1_6v").val();
        let v1_7 = $("#1_7v").val();
        let v1_8 = $("#1_8v").val();
        let v1_9 = $("#1_9v_13_1p").val();
       
        
        let sana1_v = v1_1 + v1_2 + v1_3 + v1_4 + v1_5 + v1_6 + v1_7 + v1_8 + v1_9;
        
        if (sana1_v === "sharpener") {
            $(".1_pysty").addClass("oikein");
        } else {
            $(".1_pysty").addClass("väärin");
            pisteet--
        }
        $(".1_pysty").on("focusin", function(){
            $(".1_pysty").removeClass("väärin");
            $(".1_pysty").removeClass("oikein");
        });

        // 2. kysymys
        let v2_1 = $("#2_1v_8_3p").val();
        let v2_2 = $("#2_2v").val();
        let v2_3 = $("#2_3v_9_1p").val();
      
        let sana2_v = v2_1 + v2_2 + v2_3;
        
        if (sana2_v === "rat") {
            $(".2_pysty").addClass("oikein");
        } else {
            $(".2_pysty").addClass("väärin");
            pisteet--
        }
        $(".2_pysty").on("focusin", function(){
            $(".2_pysty").removeClass("väärin");
            $(".2_pysty").removeClass("oikein");
        });

        //3. Kysymys
        let v3_1 = $("#3_1v_10_4p").val();
        let v3_2 = $("#3_2v").val();
        let v3_3 = $("#3_3v_12_1p").val();
        let v3_4 = $("#3_4v").val();
        let v3_5 = $("#3_5v_13_4p").val();
        let v3_6 = $("#3_6v").val();
        
        let sana3_v = v3_1 + v3_2 + v3_3 + v3_4 + v3_5 + v3_6;
        
        if (sana3_v === "pepper") {
            $(".3_pysty").addClass("oikein");
        } else {
            $(".3_pysty").addClass("väärin");
            pisteet--
        }
        $(".3_pysty").on("focusin", function(){
            $(".3_pysty").removeClass("väärin");
            $(".3_pysty").removeClass("oikein");
        });

        //4. Kysymys
        let v4_1 = $("#4_1v_9_4p").val();
        let v4_2 = $("#4_2v").val();
        let v4_3 = $("#4_3v_10_6p").val();
        let v4_4 = $("#4_4v_11_1p").val();
        let v4_5 = $("#4_5v_12_3p").val();
        
        let sana4_v = v4_1 + v4_2 + v4_3 + v4_4 + v4_5;
        
        if (sana4_v === "cheap") {
            $(".4_pysty").addClass("oikein");
            
        } else {
            $(".4_pysty").addClass("väärin");
            pisteet--
        }
        $(".4_pysty").on("focusin", function(){
            $(".4_pysty").removeClass("väärin");
            $(".4_pysty").removeClass("oikein");
        });

        //5. Kysymys
        let v5_1 = $("#5_1v").val();
        let v5_2 = $("#5_2v_11_3p").val();
        let v5_3 = $("#5_3v_12_5p").val();
        let v5_4 = $("#5_4v").val();
        
        let sana5_v = v5_1 + v5_2 + v5_3 + v5_4;
        
        if (sana5_v === "card") {
            $(".5_pysty").addClass("oikein");
        } else {
            $(".5_pysty").addClass("väärin");
            pisteet--
        }
        $(".5_pysty").on("focusin", function(){
            $(".5_pysty").removeClass("väärin");
            $(".5_pysty").removeClass("oikein");
        });

        //6. Kysymys
        let v6_1 = $("#6_1v_8_9p").val();
        let v6_2 = $("#6_2v").val();
        let v6_3 = $("#6_3v_9_7p").val();
        let v6_4 = $("#6_4v").val();
        

        let sana6_v = v6_1 + v6_2 + v6_3 + v6_4;
        
        if (sana6_v === "rare") {
            $(".6_pysty").addClass("oikein");
            
        } else {
            $(".6_pysty").addClass("väärin");
            pisteet--
        }
        $(".6_pysty").on("focusin", function(){
            $(".6_pysty").removeClass("väärin");
            $(".6_pysty").removeClass("oikein");
        });

        //7. Kysymys
        let v7_1 = $("#7_1v").val();
        let v7_2 = $("#7_2v_11_5p").val();
        let v7_3 = $("#7_3v").val();
        let v7_4 = $("#7_4v").val();
        let v7_5 = $("#7_5v").val();
        let v7_6 = $("#7_6v_14_5p").val();
        
        let sana7_v = v7_1 + v7_2 + v7_3 + v7_4 + v7_5 + v7_6;
        
        if (sana7_v === "online") {
            $(".7_pysty").addClass("oikein");
            
        } else {
            $(".7_pysty").addClass("väärin");
            pisteet--
        }
        $(".7_pysty").on("focusin", function(){
            $(".7_pysty").removeClass("väärin");
            $(".7_pysty").removeClass("oikein");
        });

        //8. Kysymys
        let p8_1 = $("#1_1v_8_1p").val();
        let p8_2 = $("#8_2p").val();
        let p8_3 = $("#2_1v_8_3p").val();
        let p8_4 = $("#8_4p").val();
        let p8_5 = $("#8_5p").val();
        let p8_6 = $("#8_6p").val();
        let p8_7 = $("#8_7p").val();
        let p8_8 = $("#8_8p").val();
        let p8_9 = $("#6_1v_8_9p").val();
        let p8_10 = $("#8_10p").val();
        
        let sana8_p = p8_1 + p8_2 + p8_3 + p8_4 + p8_5 + p8_6 + p8_7 + p8_8 + p8_9 + p8_10;
        
        if (sana8_p === "strawberry") {
            $(".8_vaaka").addClass("oikein");
            
        } else {
            $(".8_vaaka").addClass("väärin");
            pisteet--
        }
        $(".8_vaaka").on("focusin", function(){
            $(".8_vaaka").removeClass("väärin");
            $(".8_vaaka").removeClass("oikein");
        });

        //9. Kysymys
        let p9_1 = $("#2_3v_9_1p").val();
        let p9_2 = $("#9_2p").val();
        let p9_3 = $("#9_3p").val();
        let p9_4 = $("#4_1v_9_4p").val();
        let p9_5 = $("#9_5p").val();
        let p9_6 = $("#9_6p").val();
        let p9_7 = $("#6_3v_9_7p").val();
        
        let sana9_p = p9_1 + p9_2 + p9_3 + p9_4 + p9_5 + p9_6 + p9_7;
        
        if (sana9_p === "teacher") {
            $(".9_vaaka").addClass("oikein");
            
        } else {
            $(".9_vaaka").addClass("väärin");
            pisteet--
        }
        $(".9_vaaka").on("focusin", function(){
            $(".9_vaaka").removeClass("väärin");
            $(".9_vaaka").removeClass("oikein");
        });

        //10. Kysymys
        let p10_1 = $("#1_5v_10_1p").val();
        let p10_2 = $("#10_2p").val();
        let p10_3 = $("#10_3p").val();
        let p10_4 = $("#3_1v_10_4p").val();
        let p10_5 = $("#10_5p").val();
        let p10_6 = $("#4_3v_10_6p").val();
        
        let sana10_p = p10_1 + p10_2 + p10_3 + p10_4 + p10_5 + p10_6;
        
        if (sana10_p === "purple") {
            $(".10_vaaka").addClass("oikein");
          
        } else {
            $(".10_vaaka").addClass("väärin");
            pisteet--
        }
        $(".10_vaaka").on("focusin", function(){
            $(".10_vaaka").removeClass("väärin");
            $(".10_vaaka").removeClass("oikein");
        });

        //11. Kysymys
        let p11_1 = $("#4_4v_11_1p").val();
        let p11_2 = $("#11_2p").val();
        let p11_3 = $("#5_2v_11_3p").val();
        let p11_4 = $("#11_4p").val();
        let p11_5 = $("#7_2v_11_5p").val();
        
        let sana11_p = p11_1 + p11_2 + p11_3 + p11_4 + p11_5;
        
        if (sana11_p === "again") {
            $(".11_vaaka").addClass("oikein");
            
        } else {
            $(".11_vaaka").addClass("väärin");
            pisteet--
        }
        $(".11_vaaka").on("focusin", function(){
            $(".11_vaaka").removeClass("väärin");
            $(".11_vaaka").removeClass("oikein");
        });

        //12. Kysymys
        let p12_1 = $("#3_3v_12_1p").val();
        let p12_2 = $("#12_2p").val();
        let p12_3 = $("#4_5v_12_3p").val();
        let p12_4 = $("#12_4p").val();
        let p12_5 = $("#5_3v_12_5p").val();
        
        let sana12_p = p12_1 + p12_2 + p12_3 + p12_4 + p12_5;
        
        if (sana12_p === "paper") {
            $(".12_vaaka").addClass("oikein");
           
        } else {
            $(".12_vaaka").addClass("väärin");
            pisteet--
        }
        $(".12_vaaka").on("focusin", function(){
            $(".12_vaaka").removeClass("väärin");
            $(".12_vaaka").removeClass("oikein");
        });

        //13. Kysymys
        let p13_1 = $("#1_9v_13_1p").val();
        let p13_2 = $("#13_2p").val();
        let p13_3 = $("#13_3p").val();
        let p13_4 = $("#3_5v_13_4p").val();
        let p13_5 = $("#13_5p").val();
        
        let sana13_p = p13_1 + p13_2 + p13_3 + p13_4 + p13_5;
        
        if (sana13_p === "rules") {
            $(".13_vaaka").addClass("oikein");
            
        } else {
            $(".13_vaaka").addClass("väärin");
            pisteet--
        }
        $(".13_vaaka").on("focusin", function(){
            $(".13_vaaka").removeClass("väärin");
            $(".13_vaaka").removeClass("oikein");
        });

        //14. Kysymys
        let p14_1 = $("#14_1p").val();
        let p14_2 = $("#14_2p").val();
        let p14_3 = $("#14_3p").val();
        let p14_4 = $("#14_4p").val();
        let p14_5 = $("#7_6v_14_5p").val();
        
        let sana14_p = p14_1 + p14_2 + p14_3 + p14_4 + p14_5;
        
        if (sana14_p === "apple") {
            $(".14_vaaka").addClass("oikein");
            
        } else {
            $(".14_vaaka").addClass("väärin");
            pisteet--
        }
        $(".14_vaaka").on("focusin", function(){
            $(".14_vaaka").removeClass("väärin");
            $(".14_vaaka").removeClass("oikein");
        });
        

    });
    $("#piste").on("click", function(){
        $("#pisteet").html(pisteet);
        //$("#piste").prop("disabled", true);
        $("#kys1").html("SHARPENER");
        $("#kys2").html("RAT");
        $("#kys3").html("PEPPER");
        $("#kys4").html("CHEAP");
        $("#kys5").html("CARD");
        $("#kys6").html("RARE");
        $("#kys7").html("MINUTE");
        $("#kys8").html("STRAWBERRY");
        $("#kys9").html("TEACHER");
        $("#kys10").html("PURPLE");
        $("#kys11").html("AWAY");
        $("#kys12").html("PAPER");
        $("#kys13").html("RULES");
        $("#kys14").html("APPLE");
    });
});
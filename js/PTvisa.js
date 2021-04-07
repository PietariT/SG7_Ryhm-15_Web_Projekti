/// <reference path="jquery-3.6.0.min.js" /> 
/*
* Your name: Pietari Tanner
*/

// document ready function
$(function () {
    //Tänneppä sitä koodia sitten

    //Piilottaa kysymykset, vastaukset ja napit
    $("[name=kys1]").hide();
    $("[name=kys2]").hide();
    $("[name=kys3]").hide();
    $("[name=kys4]").hide();
    $("[name=kys5]").hide();


    //Aloittaa visan
    $("#aloita").on("click", function () {
        //Tuo esille ensimmäisen kysymyksen
        $("[name=kys1]").show();

        //Asettaa vastausajan ja näyttää paljon aikaa on jäljellä
        let secondsBetweenActions = 10;
        let secondsRemaining = secondsBetweenActions;
        setInterval(function () {
            $("#aikaa1").html("Aikaa jäljellä: " + secondsRemaining);
            secondsRemaining--;
            //Jos aika menee nolliin, tarkistaa onko vastaus oikein vai
            //väärin. Tulostaa tarvittavan vastauksen.
            if (secondsRemaining <= 0) {
                let valinta = Number($("[name=kysymys1]:checked").val());
                if (valinta === 3) {
                    $("#oikein1").html("Vastauksesi on oikein, hienoa!");
                } else {
                    $("#vaarin1").html("Valitettavasti vastauksesi on väärin.");
                }
                //Lukitsee vastaus vaihtoehdot ja piilottaa jäljellä olevan ajan
                $("[name=kysymys1]").attr("disabled", true);
                $("#aikaa1").hide();

            }
            //Jos painat vastaa painiketta, tarkistaa onko vastaus oikein vai
            //väärin. Tulostaa tarvittavan vastauksen. 
            $("#vastaa1").on("click", function () {
                let valinta = Number($("[name=kysymys1]:checked").val());
                if (valinta === 3) {
                    $("#oikein1").html("Vastauksesi on oikein, hienoa!");
                } else {
                    $("#vaarin1").html("Valitettavasti vastauksesi on väärin.");
                }
                //Lukitsee vastaus vaihtoehdot ja piilottaa jäljellä olevan ajan
                $("[name=kysymys1]").attr("disabled", true);
                $("#aikaa1").hide();

            });

        }, 1000);

        //Tuo painikkeella esiin seuraavan kysymyksen, alla oleva koodi 
        //tekee asettaa 2.kysymykselle samat toiminnat kuin edellä
        $("#seuraava1").on("click", function () {
            $("[name=kys2]").show();

            let secondsBetweenActions = 10;
            let secondsRemaining = secondsBetweenActions;

            setInterval(function () {
                $("#aikaa2").html("Aikaa jäljellä: " + secondsRemaining);
                secondsRemaining--;
                if (secondsRemaining <= 0) {
                    $("[name=kysymys2]").attr("disabled", true);
                    let valinta = Number($("[name=kysymys2]:checked").val());
                    if (valinta === 4) {     
                        $("#oikein2").html("Vastauksesi on oikein, hienoa!");
                    } else {
                        $("#vaarin2").html("Valitettavasti vastauksesi on väärin.");
                    }
                    $("#aikaa2").hide();

                }
                $("#vastaa2").on("click", function () {
                    let valinta = Number($("[name=kysymys2]:checked").val());
                    if (valinta === 4) {
                        $("#oikein2").html("Vastauksesi on oikein, hienoa!");
                    } else {
                        $("#vaarin2").html("Valitettavasti vastauksesi on väärin.");
                    }
                    $("[name=kysymys2]").attr("disabled", true);
                    $("#aikaa2").hide();
                });

            }, 1000);

            $("#seuraava2").on("click", function () {
                $("[name=kys3]").show();
    
                let secondsBetweenActions = 10;
                let secondsRemaining = secondsBetweenActions;

                setInterval(function () {
                    $("#aikaa3").html("Aikaa jäljellä: " + secondsRemaining);
                    secondsRemaining--;
                    if (secondsRemaining <= 0) {
                        $("[name=kysymys3]").attr("disabled", true);
                        let valinta = Number($("[name=kysymys3]:checked").val());
                        if (valinta === 2) {
                            $("#oikein3").html("Vastauksesi on oikein, hienoa!");
                        } else {
                            $("#vaarin3").html("Valitettavasti vastauksesi on väärin.");
                        }
                        $("#aikaa3").hide();
    
                    }
                    $("#vastaa3").on("click", function () {
                        let valinta = Number($("[name=kysymys3]:checked").val());
                        if (valinta === 2) {
                            $("#oikein3").html("Vastauksesi on oikein, hienoa!");
                        } else {
                            $("#vaarin3").html("Valitettavasti vastauksesi on väärin.");
                        }
                        $("[name=kysymys3]").attr("disabled", true);
                        $("#aikaa3").hide();
                    });
    
                }, 1000);

                $("#seuraava3").on("click", function () {
                    //Tuo kysymykset ja vastaukset esille
                    $("[name=kys4]").show();
        
                    let secondsBetweenActions = 10;
                    let secondsRemaining = secondsBetweenActions;

                    setInterval(function () {
                        $("#aikaa4").html("Aikaa jäljellä: " + secondsRemaining);
                        secondsRemaining--;
                        if (secondsRemaining <= 0) {
                            $("[name=kysymys4]").attr("disabled", true);
                            let valinta = Number($("[name=kysymys4]:checked").val());
                            if (valinta === 5) {
                                $("#oikein4").html("Vastauksesi on oikein, hienoa!");
                            } else {
                                $("#vaarin4").html("Valitettavasti vastauksesi on väärin.");
                            }
                            $("#aikaa4").hide();
        
                        }
                        $("#vastaa4").on("click", function () {
                            let valinta = Number($("[name=kysymys4]:checked").val());
                            if (valinta === 5) {
                                $("#oikein4").html("Vastauksesi on oikein, hienoa!");
                            } else {
                                $("#vaarin4").html("Valitettavasti vastauksesi on väärin.");
                            }
                            $("[name=kysymys4]").attr("disabled", true);
                            $("#aikaa4").hide();
                        });
        
                    }, 1000);

                    $("#seuraava4").on("click", function () {
                        $("[name=kys5]").show();
            
                        let secondsBetweenActions = 10;
                        let secondsRemaining = secondsBetweenActions;

                        setInterval(function () {
                            $("#aikaa5").html("Aikaa jäljellä: " + secondsRemaining);
                            secondsRemaining--;
                            if (secondsRemaining <= 0) {
                                $("[name=kysymys5]").attr("disabled", true);
                                let valinta = Number($("[name=kysymys5]:checked").val());
                                if (valinta === 3) {
                                    $("#oikein5").html("Vastauksesi on oikein, hienoa!");
                                } else {
                                    
                                    $("#vaarin5").html("Valitettavasti vastauksesi on väärin.");
                                }
                                $("#aikaa5").hide();
                            }

                            $("#vastaa5").on("click", function () {
                                let valinta = Number($("[name=kysymys5]:checked").val());
                                if (valinta === 3) { 
                                    $("#oikein5").html("Vastauksesi on oikein, hienoa!");
                                } else {
                                    $("#vaarin5").html("Valitettavasti vastauksesi on väärin.");
                                }
                                $("[name=kysymys5]").attr("disabled", true);
                                $("#aikaa5").hide();
                            });
            
                        }, 1000);
                    });
                });       
        });
    });

    });

    //lataa sivun uudelleen uutta testiä varten
    $(document).ready(function () {
        $("#uusi").click(function () {
            location.reload(true);
        });
    });

});
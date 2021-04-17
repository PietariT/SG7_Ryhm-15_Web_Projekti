/// <reference path="jquery-3.6.0.min.js" /> 
/*
* Your name: Pietari Tanner
*/

// document ready function
$(function () {

    // Globaalimuuttuja pisteille    
    let pisteet = [0];

    //Piilottaa kysymykset, vastaukset ja napit
    $("[name=kys1]").hide();
    $("[name=kys2]").hide();
    $("[name=kys3]").hide();
    $("[name=kys4]").hide();
    $("[name=kys5]").hide();
    $("[name=kys6]").hide();

    //Piilottaa oikein/väärin iconit
    $("[name=vas1]").hide();
    $("[name=vas2]").hide();
    $("[name=vas3]").hide();
    $("[name=vas4]").hide();
    $("[name=vas5]").hide();

    //Aloittaa visan
    $("#aloita").on("click", function () {
        //Tuo esille ensimmäisen kysymyksen
        $("[name=kys1]").show(1000);

        //Asettaa vastausajan ja näyttää paljon aikaa on jäljellä
        let secondsBetweenActions = 30;
        let secondsRemaining = secondsBetweenActions;

        setInterval(function () {
            $("#aikaa1").html("Aikaa jäljellä: " + secondsRemaining);
            secondsRemaining--;
            //Jos aika menee nolliin, tarkistaa onko vastaus oikein vai
            //väärin. Tulostaa tarvittavan vastauksen.
            if (secondsRemaining <= -2) {
                let valinta = Number($("[name=kysymys1]:checked").val());
                if (valinta === 3) {
                    $("#oikein1").html("Vastauksesi on oikein, hienoa!");
                } else {
                    $("#vaarin1").html("Valitettavasti vastauksesi on väärin.");
                }
                //Lukitsee vastaus vaihtoehdot ja piilottaa jäljellä olevan ajan
                $("[name=kysymys1]").prop("disabled", true);
                $("[name=vas1]").show(2000);
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
                $("[name=kysymys1]").prop("disabled", true);
                $("[name=vas1]").show(2000);
                $("#aikaa1").hide();
            });
        }, 1000);

        //Tuo painikkeella esiin seuraavan kysymyksen, alla oleva koodi 
        //tekee asettaa 2.kysymykselle samat toiminnat kuin edellä
        $("#seuraava1").on("click", function () {
            $("[name=kys2]").show(1000);

            let secondsBetweenActions = 30;
            let secondsRemaining = secondsBetweenActions;

            setInterval(function () {
                $("#aikaa2").html("Aikaa jäljellä: " + secondsRemaining);
                secondsRemaining--;
                if (secondsRemaining <= -2) {
                    $("[name=kysymys2]").prop("disabled", true);
                    let valinta = Number($("[name=kysymys2]:checked").val());
                    if (valinta === 4) {

                        $("#oikein2").html("Vastauksesi on oikein, hienoa!");
                    } else {
                        $("#vaarin2").html("Valitettavasti vastauksesi on väärin.");
                    }
                    $("[name=kysymys2]").prop("disabled", true);
                    $("[name=vas2]").show(2000);
                    $("#aikaa2").hide();

                }
                $("#vastaa2").on("click", function () {
                    let valinta = Number($("[name=kysymys2]:checked").val());
                    if (valinta === 4) {

                        $("#oikein2").html("Vastauksesi on oikein, hienoa!");
                    } else {
                        $("#vaarin2").html("Valitettavasti vastauksesi on väärin.");
                    }
                    $("[name=kysymys2]").prop("disabled", true);
                    $("[name=vas2]").show(2000);
                    $("#aikaa2").hide();
                });
            }, 1000);
            //Kysymys 3 esille
            $("#seuraava2").on("click", function () {
                $("[name=kys3]").show(1000);

                let secondsBetweenActions = 30;
                let secondsRemaining = secondsBetweenActions;

                setInterval(function () {
                    $("#aikaa3").html("Aikaa jäljellä: " + secondsRemaining);
                    secondsRemaining--;
                    if (secondsRemaining <= -2) {
                        $("[name=kysymys3]").prop("disabled", true);
                        let valinta = Number($("[name=kysymys3]:checked").val());
                        if (valinta === 2) {

                            $("#oikein3").html("Vastauksesi on oikein, hienoa!");
                        } else {
                            $("#vaarin3").html("Valitettavasti vastauksesi on väärin.");
                        }
                        $("[name=kysymys3]").prop("disabled", true);
                        $("[name=vas3]").show(2000);
                        $("#aikaa3").hide();

                    }
                    $("#vastaa3").on("click", function () {
                        let valinta = Number($("[name=kysymys3]:checked").val());
                        if (valinta === 2) {

                            $("#oikein3").html("Vastauksesi on oikein, hienoa!");
                        } else {
                            $("#vaarin3").html("Valitettavasti vastauksesi on väärin.");
                        }
                        $("[name=kysymys3]").prop("disabled", true);
                        $("[name=vas3]").show(2000);
                        $("#aikaa3").hide();
                    });

                }, 1000);
                //Kysymys 4 esille
                $("#seuraava3").on("click", function () {
                    $("[name=kys4]").show(1000);

                    let secondsBetweenActions = 30;
                    let secondsRemaining = secondsBetweenActions;

                    setInterval(function () {
                        $("#aikaa4").html("Aikaa jäljellä: " + secondsRemaining);
                        secondsRemaining--;
                        if (secondsRemaining <= -2) {
                            $("[name=kysymys4]").prop("disabled", true);
                            let valinta = Number($("[name=kysymys4]:checked").val());
                            if (valinta === 5) {

                                $("#oikein4").html("Vastauksesi on oikein, hienoa!");
                            } else {
                                $("#vaarin4").html("Valitettavasti vastauksesi on väärin.");
                            }
                            $("[name=kysymys4]").prop("disabled", true);
                            $("[name=vas4]").show(2000);
                            $("#aikaa4").hide();

                        }
                        $("#vastaa4").on("click", function () {
                            let valinta = Number($("[name=kysymys4]:checked").val());
                            if (valinta === 5) {
                                $("#oikein4").html("Vastauksesi on oikein, hienoa!");
                            } else {
                                $("#vaarin4").html("Valitettavasti vastauksesi on väärin.");
                            }
                            $("[name=kysymys4]").prop("disabled", true);
                            $("[name=vas4]").show(2000);
                            $("#aikaa4").hide();
                        });
                    }, 1000);
                    //Kysymys 5 esille
                    $("#seuraava4").on("click", function () {
                        $("[name=kys5]").show(1000);
                        let secondsBetweenActions = 30;
                        let secondsRemaining = secondsBetweenActions;

                        setInterval(function () {
                            $("#aikaa5").html("Aikaa jäljellä: " + secondsRemaining);
                            secondsRemaining--;
                            if (secondsRemaining <= -2) {
                                $("[name=kysymys5]").prop("disabled", true);
                                let valinta = Number($("[name=kysymys5]:checked").val());
                                if (valinta === 3) {

                                    $("#oikein5").html("Vastauksesi on oikein, hienoa!");
                                } else {

                                    $("#vaarin5").html("Valitettavasti vastauksesi on väärin.");
                                }
                                $("[name=kysymys5]").prop("disabled", true);
                                $("[name=vas5]").show(2000);
                                $("#aikaa5").hide();
                            }
                            $("#vastaa5").on("click", function () {
                                let valinta = Number($("[name=kysymys5]:checked").val());
                                if (valinta === 3) {
                                    $("#oikein5").html("Vastauksesi on oikein, hienoa!");
                                } else {
                                    $("#vaarin5").html("Valitettavasti vastauksesi on väärin.");
                                }
                                $("[name=kysymys5]").prop("disabled", true);
                                $("[name=vas5]").show(2000);
                                $("#aikaa5").hide();
                            });
                        }, 1000);
                    });
                });
            });
        });
    });

    //lataa sivun uudelleen uutta testiä varten
    $("#uusi").on("click", function () {
        location.reload();
    });

    //laskee pisteet ja tulostaa
    $("#seuraava5").on("click", function () {
        //Lukitsee piste painikkeen
        $("#seuraava5").prop("disabled", true);
        let kys1 = Number($("[name=kysymys1]:checked").val());
        let kys2 = Number($("[name=kysymys2]:checked").val());
        let kys3 = Number($("[name=kysymys3]:checked").val());
        let kys4 = Number($("[name=kysymys4]:checked").val());
        let kys5 = Number($("[name=kysymys5]:checked").val());
        if (kys1 === 3) {
            pisteet++
        }
        if (kys2 === 4) {
            pisteet++
        }
        if (kys3 === 2) {
            pisteet++
        }
        if (kys4 === 5) {
            pisteet++
        }
        if (kys5 === 3) {
            pisteet++
        }
        $("[name=kys6]").show(2000);
        $("#pisteet").html(pisteet + " /5");
    });
    //vihjeet
    $(".fa").on("click", function () {
        $(this).parent().next().slideToggle(2000, function () {
            let paikka = $(this).prev().children().first();
            if (paikka.hasClass("fa-minus-circle")) {
                paikka.removeClass("fa-minus-circle").addClass("fa-question-circle");
            } else {
                paikka.removeClass("fa-question-circle").addClass("fa-minus-circle");
            }
        });
    });
});
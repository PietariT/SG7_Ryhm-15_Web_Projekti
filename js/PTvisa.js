/// <reference path="jquery-3.6.0.min.js" /> 
/* 
    Created on : 01.04.2021
    Author     : Pietari Tanner
*/

// document ready function
$(function () {

    // Globaalimuuttuja pisteille    
    let pisteet = [0];

    //Piilottaa kysymykset, vastaukset ja napit
    $("#kys1").hide();
    $("#kys2").hide();
    $("#kys3").hide();
    $("#kys4").hide();
    $("#kys5").hide();
    $("#kys6").hide();

    //Piilottaa oikein/väärin iconit
    $(".vas1").hide();
    $(".vas2").hide();
    $(".vas3").hide();
    $(".vas4").hide();
    $(".vas5").hide();

    //Aloittaa visan
    $("#aloita").on("click", function () {
        //Tuo esille ensimmäisen kysymyksen
        $("#kys1").show(1000);

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
                $(".vas1").show(2000);
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
                $(".vas1").show(2000);
                $("#aikaa1").hide();
            });
        }, 1000);

        //Tuo painikkeella esiin seuraavan kysymyksen, alla oleva koodi 
        //tekee 2.kysymykselle samat toiminnat kuin edellä
        $("#seuraava1").on("click", function () {
            $("#kys2").show(1000);

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
                    $(".vas2").show(2000);
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
                    $(".vas2").show(2000);
                    $("#aikaa2").hide();
                });
            }, 1000);

            //Kysymys 3 esille
            $("#seuraava2").on("click", function () {
                $("#kys3").show(1000);

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
                        $(".vas3").show(2000);
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
                        $(".vas3").show(2000);
                        $("#aikaa3").hide();
                    });

                }, 1000);

                //Kysymys 4 esille
                $("#seuraava3").on("click", function () {
                    $("#kys4").show(1000);

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
                            $(".vas4").show(2000);
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
                            $(".vas4").show(2000);
                            $("#aikaa4").hide();
                        });
                    }, 1000);

                    //Kysymys 5 esille
                    $("#seuraava4").on("click", function () {
                        $("#kys5").show(1000);

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
                                $(".vas5").show(2000);
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
                                $(".vas5").show(2000);
                                $("#aikaa5").hide();
                            });
                        }, 1000);
                    });
                });
            });
        });
    });

    //lataa sivun uudelleen
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
        $("#kys6").show(2000);
        //Animoitu pisteiden paljastus
        pisteet = $("#pisteet").html(pisteet + " /5");
        pisteet.animate({ fontSize: '0px' }, "slow");
        pisteet.animate({ fontSize: '40px' }, "slow");
        pisteet.animate({ fontSize: '10px' }, "slow");
        pisteet.animate({ fontSize: '70px' }, "slow");
        pisteet.animate({ fontSize: '20px' }, "slow");
        pisteet.animate({ fontSize: '100px' }, "slow");
        pisteet.animate({ fontSize: '30px' }, "slow");
        pisteet.animate({ fontSize: '130px' }, "slow");
        pisteet.animate({ deg: 720, }, {
            duration: 2000, step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        }
        );
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
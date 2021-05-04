
// Author: Roni Junttila

function modal1() {
    let myModal = new bootstrap.Modal(document.getElementById('congratulations'), { backdrop: "static" })
    myModal.show();
    return;
}

$('#congratulations').on('show.bs.modal', function () {
    $('.modal .modal-dialog').attr('class', 'modal-dialog animate__animated animate__zoomInDown');
})
$('#congratulations').on('hide.bs.modal', function () {
    $('.modal .modal-dialog').attr('class', 'modal-dialog animate__animated animate__zoomOutLeft');
})

//muuttujat
let pinkka = document.getElementById("korttiPakka");
let parit1 = document.getElementsByClassName("match");
let card = document.getElementsByClassName("card");
let cards = [...card];
let avatutKortit = [];
let parit = 0;
let totalAukastujenMäärä = 0;

//sekoittaminen
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

//kortin aukasu
let NäytäKortti = function () {
    $(this).children().removeClass("invisible")
    $(this).attr("style", "background-color: #028dff")
    $(this).toggleClass("disabled")
};

for (let i = 0; i < cards.length; i++) {
    card = cards[i];
    $(card).on("click", NäytäKortti);
    $(card).on("click", KortinAukaisu);
    $(card).on("click", congratulations);
};

document.body.onload = startGame();

//pelin aloitus ja korttien varsinainen sekeoitus
function startGame() {
    $(card).removeClass("invisible")
    avatutKortit = [];
    cards = shuffle(cards);
    for (let i = 0; i < cards.length; i++) {
        pinkka.innerHTML = "";
        [].forEach.call(cards, function (item) {
            pinkka.appendChild(item);
        });

    }

}

//kortin parin tarkistus, kortin taustanvärit ja animaatiot
function KortinAukaisu() {
    $(this).addClass("animate__animated animate__bounceIn")
    totalAukastujenMäärä++
    $("#siirrot").html(totalAukastujenMäärä)
    avatutKortit.push(this);
    let lenght = avatutKortit.length;
    if (lenght === 2) {
        if (avatutKortit[0].type === avatutKortit[1].type) {
            $(avatutKortit[0]).addClass("match", "disable").prop("disabled", true).attr("style", "background-color: #00e727;");
            $(avatutKortit[1]).addClass("match", "disable").prop("disabled", true).attr("style", "background-color: #00e727;");
            avatutKortit = [];
            parit++
        } else {
            $(avatutKortit[0]).attr("style", "background-color: #e2043b;");
            $(avatutKortit[1]).attr("style", "background-color: #e2043b;");
            Array.prototype.filter.call(cards, function (card) {
                $(card).addClass("disabled", true)
            });
            setTimeout(function () {
                $(avatutKortit[0]).removeAttr("style")
                $(avatutKortit[1]).removeAttr("style")
                $(".card").removeClass("animate__animated animate__bounceIn")
                $(avatutKortit[1]).children().addClass("invisible")
                $(avatutKortit[0]).children().addClass("invisible")
                Array.prototype.filter.call(cards, function (card) {
                    $(card).removeClass("disabled", false)
                    $(".match").prop("disabled", false);
                    for (let i = 0; i < 8; i++) {
                        $(".match").addClass("disabled", true);
                    }
                });
                avatutKortit = [];
            }, 500);
        }
    }
};

//modal ikkunaan tähdet
function congratulations() {
    if (parit === 8) {
        modal1()
        if (totalAukastujenMäärä <= 20) {
            $("#tähti1").addClass("fa fa-star")
            $("#tähti2").addClass("fa fa-star")
            $("#tähti3").addClass("fa fa-star")
            $("#tähti4").addClass("fa fa-star")
            $("#tähti5").addClass("fa fa-star")
        }

        else if (totalAukastujenMäärä <= 23) {
            $("#tähti1").addClass("fa fa-star")
            $("#tähti2").addClass("fa fa-star")
            $("#tähti3").addClass("fa fa-star")
            $("#tähti4").addClass("fa fa-star")
            $("#tähti5").addClass("fa fa-star-half")
        }

        else if (totalAukastujenMäärä <= 25) {
            $("#tähti1").addClass("fa fa-star")
            $("#tähti2").addClass("fa fa-star")
            $("#tähti3").addClass("fa fa-star")
            $("#tähti4").addClass("fa fa-star")
        }

        else if (totalAukastujenMäärä <= 27) {
            $("#tähti1").addClass("fa fa-star")
            $("#tähti2").addClass("fa fa-star")
            $("#tähti3").addClass("fa fa-star")
            $("#tähti4").addClass("fa fa-star-half")
        }

        else if (totalAukastujenMäärä <= 30) {
            $("#tähti1").addClass("fa fa-star")
            $("#tähti2").addClass("fa fa-star")
            $("#tähti3").addClass("fa fa-star")
        }

        else if (totalAukastujenMäärä <= 33) {
            $("#tähti1").addClass("fa fa-star")
            $("#tähti2").addClass("fa fa-star")
            $("#tähti3").addClass("fa fa-star-half")
        }

        else if (totalAukastujenMäärä <= 35) {
            $("#tähti1").addClass("fa fa-star")
            $("#tähti2").addClass("fa fa-star")
        }

        else if (totalAukastujenMäärä <= 37) {
            $("#tähti1").addClass("fa fa-star")
            $("#tähti2").addClass("fa fa-star-half")
        }

        else {
            $("#tähti1").addClass("fa fa-star");
        }

    };
}


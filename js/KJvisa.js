/// <reference path="jquery-3.6.0.min.js" />
//Globaali muuttuja, johon pusketaan oikeat vastaukset
let oikein = [0];

//aluksi piilotetaan säännöt sekä pisteiden tulostus
$('.saannot').hide();
$('.tuloste').hide();

// document ready function
$(function () {
  //Jos sääntö nappia painaa, avataan ja piilotetaan säännöt
  $('#saannot').on('click', function () {
    $('.saannot').toggle();
  });

  //Ensimäisen kysymyksen button click.
  $('#tarkista').on('click', function () {


    //tehdään vastauksesta muuttuja
    let yksi = $('#vastaus1').val();

    //tarkistetaan ensin, onko käyttäjä antanut vastauksen
    if (yksi === "") {

        //Jos ei, pyydetään pelaajaa täyttämään jotakin kenttään
        $('#oikein').html("Ole hyvä ja vastaa jotain kysymykseen");
        
    }

    //Tarkistetaan onko muuttuja sama kuin alla olevat mahdollisuudet
    else if (yksi === 'koira' || yksi === 'KOIRA' || yksi === 'Koira') {

    //Poistetaan käytöstä mahdollisuus muuttaa vastausta
    $('#vastaus1').prop('disabled', true);
    //piilotetaan tarkista nappi
    $('#tarkista').hide();

      //jos teksti on kirjoitettu jollakin edellisistä tavoista, tulostetaan kuva koirasta sekä oikein teksti
      $('#oikein').html(
        'Oikein!' + '<p>' + "<img src='img/koira.jpg' class='img-fluid'/>" + '</p>'
      );
      
      //Jos vastaus on oikein, pusketaan oikea vastaus globaaliin muuttujaan
      $('#oigein').html(oikein++);
    } else {
    //Poistetaan käytöstä mahdollisuus muuttaa vastausta
    $('#vastaus1').prop('disabled', true);
      //Jos vastaus väärin, ei tulosteta kuvaa ja ilmoitus, että vastaus on väärin
      $('#oikein').html('Valitettavasti vastauksesi oli väärä');
          //piilotetaan tarkista nappi
    $('#tarkista').hide();
    }

  });

  //Tekee saman kuin edellinen funktio
  $('#tarkista2').on('click', function () {

    let yksi = $('#vastaus2').val();
    if (yksi === "") {
        $('#oikein2').html("Ole hyvä ja vastaa jotain kysymykseen");
    }

    else if (yksi === 'joutsen' || yksi === 'JOUTSEN' || yksi === 'Joutsen') {
        $('#vastaus2').prop('disabled', true);
      
        //Ainoa ero, että tällä kertaa oikeasta vastauksesta printataan joutsen kuva
      $('#oikein2').html(
        'Oikein!' + '<p>' + "<img src='img/joutsen.jpg' class='img-fluid'/>" + '</p>'
      );
      $('#tarkista2').hide();
      $('#oigein').html(oikein++);
    } else {
        $('#vastaus2').prop('disabled', true);
      $('#oikein2').html('Valitettavasti vastauksesi oli väärä');
      $('#tarkista2').hide();
    }

  });
  //Tekee saman kuin edellinen funktio
  $('#tarkista3').on('click', function () {

    let yksi = $('#vastaus3').val();

    if (yksi === "") {
        $('#oikein3').html("Ole hyvä ja vastaa jotain kysymykseen");
    }
    else if (yksi === 'jääkarhu' || yksi === 'JÄÄKARHU' || yksi === 'Jääkarhu') {
        $('#vastaus3').prop('disabled', true);
      //Ainoa ero, että tällä kertaa oikeasta vastauksesta printataan jääkarhun kuva
      $('#oigein').html(oikein++);
      $('#oikein3').html(
        'Oikein!' + '<p>' + "<img src='img/isbjorn.jpg' class='img-fluid' />" + '</p>'
      );
      $('#tarkista3').hide();
    } else {
      $('#vastaus3').prop('disabled', true);
      $('#oikein3').html('Valitettavasti vastauksesi oli väärä');
      $('#tarkista3').hide();
    }

  });
  //Tekee saman kuin edellinen funktio
  $('#tarkista4').on('click', function () {
    let yksi = $('#vastaus4').val();

    if (yksi === "") {
        $('#oikein4').html("Ole hyvä ja vastaa jotain kysymykseen");
    } else if (yksi === 'kissa' || yksi === 'KISSA' || yksi === 'Kissa') {
      //Ainoa ero, että tällä kertaa oikeasta vastauksesta printataan kissan kuva
      $('#vastaus4').prop('disabled', true);
      $('#oikein4').html(
        'Oikein!' + '<p>' + "<img src='img/kissa.jpg' class='img-fluid'/>" + '</p>'
      );
      $('#tarkista4').hide();
      $('#oigein').html(oikein++);
    } else {
      $('#vastaus4').prop('disabled', true);
      $('#oikein4').html('Valitettavasti vastauksesi oli väärä');
      $('#tarkista4').hide();
    }
    $('#tarkista4').hide();
  });
  //Tekee saman kuin edellinen funktio
  $('#tarkista5').on('click', function () {

    let yksi = $('#vastaus5').val();

    if (yksi === "") {
        $('#oikein5').html("Ole hyvä ja vastaa jotain kysymykseen");
    } else if (yksi === 'pöllö' || yksi === 'PÖLLÖ' || yksi === 'Pöllö') {
      //Ainoa ero, että tällä kertaa oikeasta vastauksesta printataan pöllön kuva

      $('#oikein5').html(
        'Oikein!' + '<p>' + "<img src='img/uggla.jpg' class='img-fluid' />" + '</p>'
      );
      $('#oigein').html(oikein++);
      $('#vastaus5').prop('disabled', true);
      $('#tarkista5').hide();

    } else {
      $('#oikein5').html('Valitettavasti vastauksesi oli väärä');
      $('#vastaus5').prop('disabled', true);
      $('#tarkista5').hide();
    }

  });
  //Näytä pisteet button click funktio
  $('#pisteet').on('click', function () {

    //näyttää html puolelta nyt tulokset, jotka piilotettiin alussa.
    $('.tuloste').show();

    //Tarkistetaan onko oikeita vastauksia alle tai tasan yksi.
    if (oikein <= 1) {
      //jos on, tulostetaan vain valittelu teksti
      $('#tyhja').html(
        'Valitettavasti oikeiden vastauksiesi määrä ei riittänyt palkintoon, yritä uudestaan!'
      );
    }
    //Jos oikeita vastauksia on kaksi, saa yhden tulostuskuvan
    if (oikein === 2) {
      $('.palkinto0').addClass('piilota');
      $('.palkinto1').removeClass('piilota');
      $('#tyhja').html(
        'Paina kuvaa saadaksesi täysikokoisen kuvan tulostettavaksi.'
      );
      $('#oigein').html("Ei hätää! Et saanut aivan kaikkia oikein! Mutta kaksi oli silti oikein, tässä sinulle tulostuskuva!");
    
    }
    //Jos oikeita vastauksia on oikein kolme tai neljä, saa toisen tulostuskuvan
    if (oikein === 3 || oikein === 4) {
      $('.palkinto0').addClass('piilota');
      $('.palkinto1').addClass('piilota');
      $('.palkinto2').removeClass('piilota');
      $('#tyhja').html(
        'Paina kuvaa saadaksesi täysikokoisen kuvan tulostettavaksi.'
      );
      $('#oigein').html("Ei ihan! Mutta älä lannistu, sait silti yli kaksi oikein! Pelaa uudestaan");
    }
    
    //Jos vastaukset ovat kaikki oikein, saa palkinnoksi kolme eri kuvaa tulostettavaksi,
    //kaksi niistä ovat olleet mahdollista saada, kun oikeita vastauksia on ollut vähemmän kuin viisi,
    //mutta viimeisen tulostuskuvan saa vain, jos kaikki vastaukset ovat oikein.
    if (oikein === 5) {
      $('.palkinto1').removeClass('piilota');
      $('.palkinto2').removeClass('piilota');
      $('.palkinto3').removeClass('piilota');
      $('#tyhja').html(
        'Paina kuvia saadaksesi täysikokoiset kuvat tulostettavaksi.'
      );
      $('#oigein').html("Mahtavaa! Sait täydet pisteet! Täydet 5 pistettä!");
    }
  });

  $('[name=uudestaan]').on('click', function () {
    location.reload();
  });
});

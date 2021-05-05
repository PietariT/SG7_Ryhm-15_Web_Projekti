/// <reference path="jquery-3.6.0.min.js" />
//Globaali muuttuja, johon pusketaan oikeat vastaukset
let oikein = [1];

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
    //Poistetaan käytöstä mahdollisuus muuttaa vastausta
    $('#vastaus1').prop('disabled', true);

    //tehdään vastauksesta muuttuja
    let yksi = $('#vastaus1').val();

    //Tarkistetaan onko muuttuja sama kuin alla olevat mahdollisuudet
    if (yksi === 'koira' || yksi === 'KOIRA' || yksi === 'Koira') {
      //jos teksti on kirjoitettu jollakin edellisistä tavoista, tulostetaan kuva koirasta sekä oikein teksti
      $('#oikein').html(
        'Oikein!' + '<p>' + "<img src='img/koira.jpg' />" + '</p>'
      );
      //Jos vastaus on oikein, pusketaan oikea vastaus globaaliin muuttujaan
      $('#oigein').html(oikein++);
    } else {
      //Jos vastaus väärin, ei tulosteta kuvaa ja ilmoitus, että vastaus on väärin
      $('#oikein').html('Valitettavasti vastauksesi oli väärä');
    }

    //piilotetaan tarkista nappi
    $('#tarkista').hide();
  });

  //Tekee saman kuin edellinen funktio
  $('#tarkista2').on('click', function () {
    $('#vastaus2').prop('disabled', true);
    let yksi = $('#vastaus2').val();

    if (yksi === 'joutsen' || yksi === 'JOUTSEN' || yksi === 'Joutsen') {
      //Ainoa ero, että tällä kertaa oikeasta vastauksesta printataan joutsen kuva
      $('#oikein2').html(
        'Oikein!' + '<p>' + "<img src='img/joutsen.jpg' />" + '</p>'
      );

      $('#oigein').html(oikein++);
    } else {
      $('#oikein2').html('Valitettavasti vastauksesi oli väärä');
    }
    $('#tarkista2').hide();
  });
  //Tekee saman kuin edellinen funktio
  $('#tarkista3').on('click', function () {
    $('#vastaus3').prop('disabled', true);
    let yksi = $('#vastaus3').val();

    if (yksi === 'jääkarhu' || yksi === 'JÄÄKARHU' || yksi === 'Jääkarhu') {
      //Ainoa ero, että tällä kertaa oikeasta vastauksesta printataan jääkarhun kuva
      $('#oikein3').html(
        'Oikein!' + '<p>' + "<img src='img/isbjorn.jpg' />" + '</p>'
      );
      $('#oigein').html(oikein++);
    } else {
      $('#oikein3').html('Valitettavasti vastauksesi oli väärä');
    }
    $('#tarkista3').hide();
  });
  //Tekee saman kuin edellinen funktio
  $('#tarkista4').on('click', function () {
    $('#vastaus4').prop('disabled', true);
    let yksi = $('#vastaus4').val();

    if (yksi === 'kissa' || yksi === 'KISSA' || yksi === 'Kissa') {
      //Ainoa ero, että tällä kertaa oikeasta vastauksesta printataan kissan kuva

      $('#oikein4').html(
        'Oikein!' + '<p>' + "<img src='img/kissa.jpg' />" + '</p>'
      );
      $('#oigein').html(oikein++);
    } else {
      $('#oikein4').html('Valitettavasti vastauksesi oli väärä');
    }
    $('#tarkista4').hide();
  });
  //Tekee saman kuin edellinen funktio
  $('#tarkista5').on('click', function () {
    $('#vastaus5').prop('disabled', true);
    let yksi = $('#vastaus5').val();

    if (yksi === 'pöllö' || yksi === 'PÖLLÖ' || yksi === 'Pöllö') {
      //Ainoa ero, että tällä kertaa oikeasta vastauksesta printataan pöllön kuva

      $('#oikein5').html(
        'Oikein!' + '<p>' + "<img src='img/uggla.jpg' />" + '</p>'
      );
      $('#oigein').html(oikein++);
    } else {
      $('#oikein5').html('Valitettavasti vastauksesi oli väärä');
    }
    $('#tarkista5').hide();
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
    }
    //Jos oikeita vastauksia on kolme, saa eri tulostuskuvan
    if (oikein === 3) {
      $('.palkinto0').addClass('piilota');
      $('.palkinto1').addClass('piilota');
      $('.palkinto2').removeClass('piilota');
      $('#tyhja').html(
        'Paina kuvaa saadaksesi täysikokoisen kuvan tulostettavaksi.'
      );
    }
    //Jos vastaukset ovat kaikki oikein, saa palkinnoksi kolme eri kuvaa tulostettavaksi,
    //kaksi niistä ovat olleet mahdollista saada, kun oikeita vastauksia on ollut vähemmän kuin viisi,
    //mutta viimeisen tulostuskuvan saa vain, jos kaikki vastaukset ovat oikein.
    if (oikein > 4) {
      $('.palkinto1').removeClass('piilota');
      $('.palkinto2').removeClass('piilota');
      $('.palkinto3').removeClass('piilota');
      $('#tyhja').html(
        'Paina kuvia saadaksesi täysikokoiset kuvat tulostettavaksi.'
      );
    }
  });

  $('[name=uudestaan]').on('click', function () {
    location.reload();
  });
});

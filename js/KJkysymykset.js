let vastaukset = {
  correct: 0
}
//Function ready
$(function(){
// kun painetaan kertaa näppäintä
  $(".kertaa").on("click", function(){

    //Lisätään alku diville class piilota, joka piilottaa kyseisen divin
    $(".alku").addClass("piilota");
    //Sama tehdään myös kertaa buttonille
    $(".kertaa").addClass("piilota");
    //Kertaus diviltä poistetaan piilota class, joka tuo sen esille.
    $("#kertaus").removeClass("piilota");
    //Poistetaan myös aloitus buttonilta piilota class ja tuodaan esille. 
    $(".aloitetaan").removeClass("piilota");
}); 

//Aloita näppäimen funktio
  $(".aloitetaan").on("click", function(){

    //Piilotetaan kertaus div kuten edellisessä
    $("#kertaus").addClass("piilota");
    //Piilotetaan myös aloitus näppäin
    $(".aloitetaan").addClass("piilota");
    //Tuodaan esille ensimmäiset kysymykset ja näppäin poistamalla kaikilta piilota class.
    $(".eka").removeClass("piilota");
    $(".yksi").removeClass("piilota");
    $(".seuraava1").removeClass("piilota");
}); 
 
//Ekan kysymyksen tapahtuma, kun valitaan vastaus
$(".eka1").on("click", function(){

  //Tehdään käyttäjän valitemasta vastauksesta numero muuttuja
  let vastaus = Number($(this).val());

  //poistetaan mahdollisuus vaihtaa vastausta
  $(vastaus).prop("disabled", true);

//Lähdetään tarkistamaan käyttäjän vastausta
  if (vastaus === 1) {
    $(this).parent().addClass("right");
      //oikein, pusketaan vastaus globaaliin muuttujaan
      document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;

      //Oikeaan vastaukseen lisätään vihreä reunaväri

  } else {
      //väärin, tulostetaan punainen reunus valitun vastauksen ympäri
      $(this).parent().addClass("wrong");

      //tarkistetaan oikea vastaus
      let nimi = $(this).attr("name");
      //Etsitään HTML puolelta nimien perusteella vaihtoehdoista, etsitään kohta, jossa value on 1 
      let oikea_vastaus = "[name=" + nimi +"][value=1]";

      //Korostetaan oikea vastaus 
      $(oikea_vastaus).parent().addClass("right");
  }
}); 

//Seuraava button click tapahtuma
  $(".seuraava1").on("click", function(){
    //Tuodaan uusi kysymys ja kuva esille.
    $(".seuraava2").removeClass("piilota")
    //Piilotetaan hide komennolla edellinen kysymys
    $(".eka").hide();
    $(".yksi").hide();
    $(".seuraava1").hide();
    //Jälleen tuodaan esille kysymykset ja kuva
    $(".kaks").removeClass("piilota");
    $(".toka").removeClass("piilota");
}); 

$(".toka2").on("click", function(){
   //Tehdään käyttäjän valitemasta vastauksesta numero muuttuja
   let vastaus = Number($(this).val());

   //poistetaan mahdollisuus vaihtaa vastausta
   $(vastaus).prop("disabled", true);
 
 //Lähdetään tarkistamaan käyttäjän vastausta
   if (vastaus === 1) {
       //oikein, pusketaan vastaus globaaliin muuttujaan
       document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
 
       //Oikeaan vastaukseen lisätään vihreä reunaväri
       $(this).parent().addClass("right");
   } else {
       //väärin, tulostetaan punainen reunus valitun vastauksen ympäri
       $(this).parent().addClass("wrong");
 
       //tarkistetaan oikea vastaus
       let nimi = $(this).attr("name");
       //Etsitään HTML puolelta nimien perusteella vaihtoehdoista, etsitään kohta, jossa value on 1 
       let oikea_vastaus = "[name=" + nimi +"][value=1]";
 
       //Korostetaan oikea vastaus 
       $(oikea_vastaus).parent().addClass("right");
   }
 
});

//Button tapahtuma
  $(".seuraava2").on("click", function(){
    //jälleen piilotetaan edelliset kysymys, button ja kuva
    $(".seuraava2").hide();
    $(".toka").hide();
    $(".kaks").hide();

    //Tuodaan esille seuraava kuva, kysymys ja painike
    $(".seuraava3").removeClass("piilota");
    $(".kolme").removeClass("piilota");
    $(".kolome").removeClass("piilota");
}); 
$(".kolmas").on("click", function(){
   //Tehdään käyttäjän valitemasta vastauksesta numero muuttuja
   let vastaus = Number($(this).val());

   //poistetaan mahdollisuus vaihtaa vastausta
   $(vastaus).prop("disabled", true);
 
 //Lähdetään tarkistamaan käyttäjän vastausta
   if (vastaus === 1) {
       //oikein, pusketaan vastaus globaaliin muuttujaan
       document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
 
       //Oikeaan vastaukseen lisätään vihreä reunaväri
       $(this).parent().addClass("right");
   } else {
       //väärin, tulostetaan punainen reunus valitun vastauksen ympäri
       $(this).parent().addClass("wrong");
 
       //tarkistetaan oikea vastaus
       let nimi = $(this).attr("name");
       //Etsitään HTML puolelta nimien perusteella vaihtoehdoista, etsitään kohta, jossa value on 1 
       let oikea_vastaus = "[name=" + nimi +"][value=1]";
 
       //Korostetaan oikea vastaus 
       $(oikea_vastaus).parent().addClass("right");
   }
 

});
//Jälleen button click tapahtuma
  $(".seuraava3").on("click", function(){
    //Piilotetaan jälleen edelliset kysymykset, kuva ja button
    $(".seuraava3").hide();
    $(".kolme").hide();
    $(".kolome").hide();
//Tuodaan uudet esille
    $(".seuraava4").removeClass("piilota");
    $(".nelja").removeClass("piilota");
    $(".nelkku").removeClass("piilota");
}); 
$(".neljas").on("click", function(){
  //Tehdään käyttäjän valitemasta vastauksesta numero muuttuja
  let vastaus = Number($(this).val());

  //poistetaan mahdollisuus vaihtaa vastausta
  $(vastaus).prop("disabled", true);

//Lähdetään tarkistamaan käyttäjän vastausta
  if (vastaus === 1) {
      //oikein, pusketaan vastaus globaaliin muuttujaan
      document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;

      //Oikeaan vastaukseen lisätään vihreä reunaväri
      $(this).parent().addClass("right");
  } else {
      //väärin, tulostetaan punainen reunus valitun vastauksen ympäri
      $(this).parent().addClass("wrong");

      //tarkistetaan oikea vastaus
      let nimi = $(this).attr("name");
      //Etsitään HTML puolelta nimien perusteella vaihtoehdoista, etsitään kohta, jossa value on 1 
      let oikea_vastaus = "[name=" + nimi +"][value=1]";

      //Korostetaan oikea vastaus 
      $(oikea_vastaus).parent().addClass("right");
  }

});
//Jälleen button click tapahtuma
  $(".seuraava4").on("click", function(){
        //Piilotetaan jälleen edelliset kysymykset, kuva ja button
    $(".seuraava3").hide();
    $(".nelja").hide();
    $(".nelkku").hide();
    //Tuodaan uudet esille
    $(".seuraava5").removeClass("piilota");
    $(".viisi").removeClass("piilota");
    $(".viikku").removeClass("piilota");
}); 
$(".viides").on("click", function(){
   //Tehdään käyttäjän valitemasta vastauksesta numero muuttuja
   let vastaus = Number($(this).val());

   //poistetaan mahdollisuus vaihtaa vastausta
   $(vastaus).prop("disabled", true);
 
 //Lähdetään tarkistamaan käyttäjän vastausta
   if (vastaus === 1) {
       //oikein, pusketaan vastaus globaaliin muuttujaan
       document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
 
       //Oikeaan vastaukseen lisätään vihreä reunaväri
       $(this).parent().addClass("right");
   } else {
       //väärin, tulostetaan punainen reunus valitun vastauksen ympäri
       $(this).parent().addClass("wrong");
 
       //tarkistetaan oikea vastaus
       let nimi = $(this).attr("name");
       //Etsitään HTML puolelta nimien perusteella vaihtoehdoista, etsitään kohta, jossa value on 1 
       let oikea_vastaus = "[name=" + nimi +"][value=1]";
 
       //Korostetaan oikea vastaus 
       $(oikea_vastaus).parent().addClass("right");
   }
 
});
 //Button click tapahtuma
  $(".seuraava5").on("click", function(){
    //Piilotetaan edelliset
    $(".seuraava4").hide();
    $(".viisi").hide();
    $(".viikku").hide();
    //Tuodaan uudet esille
    $(".seuraava6").removeClass("piilota");
    $(".kuusi").removeClass("piilota");
    $(".kuus").removeClass("piilota");
}); 
$(".kuudes").on("click", function(){
   //Tehdään käyttäjän valitemasta vastauksesta numero muuttuja
   let vastaus = Number($(this).val());

   //poistetaan mahdollisuus vaihtaa vastausta
   $(vastaus).prop("disabled", true);
 
 //Lähdetään tarkistamaan käyttäjän vastausta
   if (vastaus === 1) {
       //oikein, pusketaan vastaus globaaliin muuttujaan
       document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
 
       //Oikeaan vastaukseen lisätään vihreä reunaväri
       $(this).parent().addClass("right");
   } else {
       //väärin, tulostetaan punainen reunus valitun vastauksen ympäri
       $(this).parent().addClass("wrong");
 
       //tarkistetaan oikea vastaus
       let nimi = $(this).attr("name");
       //Etsitään HTML puolelta nimien perusteella vaihtoehdoista, etsitään kohta, jossa value on 1 
       let oikea_vastaus = "[name=" + nimi +"][value=1]";
 
       //Korostetaan oikea vastaus 
       $(oikea_vastaus).parent().addClass("right");
   }
 
});
//Button click tapahtuma
$(".seuraava6").on("click", function(){
  //Piilotetaan taas kaikki edelliset
  $(".seuraava5").hide();
  $(".kuusi").hide();
  $(".kuus").hide();
  //Tuodaan esille loppupisteet, sekä buttonit uudestaan ja lopeta pelaaminen. 
  $(".uudestaan").removeClass("piilota");
  $(".btn").removeClass("piilota");
  $(".seitseman").removeClass("piilota");
});
//Uudestaan button click tapahtuma
    $(".uudestaan").on("click", function(){
      //lataa pelin uudestaan. 
        location.reload();
    });
  });
let vastaukset = {
  correct: 0
}

$(function(){

  $(".kertaa").on("click", function(){
    $(".alku").addClass("piilota");
    $(".kertaa").addClass("piilota");
    $("#kertaus").removeClass("piilota");
    $(".aloitetaan").removeClass("piilota");
}); 

  $(".aloitetaan").on("click", function(){
    $("#kertaus").addClass("piilota");
    $(".aloitetaan").addClass("piilota");
    $(".eka").removeClass("piilota");
    $(".yksi").removeClass("piilota");
    $(".seuraava1").removeClass("piilota");
}); 

$(".eka1").on("click", function(){
  $(this).parent().addClass("selected");

  let name_atribuutti = $(this).attr("name");
  let valinta = "[name=" + name_atribuutti +"]";
  $(valinta).prop("disabled", true);

  let vastaus = Number($(this).val());
  if (vastaus === 1) {
      document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
      $(this).parent().addClass("right");
  } else {

      $(this).parent().addClass("wrong");

      let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
      $(oikea_vastaus).parent().addClass("right");
  }

}); 
  $(".seuraava1").on("click", function(){
    $(".seuraava2").removeClass("piilota")
    $(".eka").hide();
    $(".yksi").hide();
    $(".seuraava1").hide();
    $(".kaks").removeClass("piilota");
    $(".toka").removeClass("piilota");
}); 

$(".toka2").on("click", function(){
  $(this).parent().addClass("selected");

  let name_atribuutti = $(this).attr("name");
  let valinta = "[name=" + name_atribuutti +"]";
  $(valinta).prop("disabled", true);

  let vastaus = Number($(this).val());
  if (vastaus === 1) {
      document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
      $(this).parent().addClass("right");
  } else {

      $(this).parent().addClass("wrong");

      let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
      $(oikea_vastaus).parent().addClass("right");
  }
});


  $(".seuraava2").on("click", function(){
    $(".seuraava2").hide();
    $(".toka").hide();
    $(".kaks").hide();
    $(".seuraava3").removeClass("piilota");
    $(".kolme").removeClass("piilota");
    $(".kolome").removeClass("piilota");
}); 
$(".kolmas").on("click", function(){
  $(this).parent().addClass("selected");

  let name_atribuutti = $(this).attr("name");
  let valinta = "[name=" + name_atribuutti +"]";
  $(valinta).prop("disabled", true);

  let vastaus = Number($(this).val());
  if (vastaus === 1) {
      document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
      $(this).parent().addClass("right");
  } else {

      $(this).parent().addClass("wrong");

      let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
      $(oikea_vastaus).parent().addClass("right");
  }

});
  $(".seuraava3").on("click", function(){
    $(".seuraava3").hide();
    $(".kolme").hide();
    $(".kolome").hide();
    $(".seuraava4").removeClass("piilota");
    $(".nelja").removeClass("piilota");
    $(".nelkku").removeClass("piilota");
}); 
$(".neljas").on("click", function(){
  $(this).parent().addClass("selected");

  let name_atribuutti = $(this).attr("name");
  let valinta = "[name=" + name_atribuutti +"]";
  $(valinta).prop("disabled", true);

  let vastaus = Number($(this).val());
  if (vastaus === 1) {
      document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
      $(this).parent().addClass("right");
  } else {

      $(this).parent().addClass("wrong");

      let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
      $(oikea_vastaus).parent().addClass("right");
  }
});
  $(".seuraava4").on("click", function(){
    $(".seuraava3").hide();
    $(".nelja").hide();
    $(".nelkku").hide();
    $(".seuraava5").removeClass("piilota");
    $(".viisi").removeClass("piilota");
    $(".viikku").removeClass("piilota");
}); 
$(".viides").on("click", function(){
  $(this).parent().addClass("selected");

  let name_atribuutti = $(this).attr("name");
  let valinta = "[name=" + name_atribuutti +"]";
  $(valinta).prop("disabled", true);

  let vastaus = Number($(this).val());
  if (vastaus === 1) {
      document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
      $(this).parent().addClass("right");
  } else {

      $(this).parent().addClass("wrong");

      let oikea_vastaus = "[name=" + name_atribuutti +"][value=1]";
      $(oikea_vastaus).parent().addClass("right");
  }
});

  $(".seuraava5").on("click", function(){
    $(".seuraava4").hide();
    $(".viisi").hide();
    $(".viikku").hide();
    $(".seuraava6").removeClass("piilota");
    $(".kuusi").removeClass("piilota");
    $(".kuus").removeClass("piilota");
}); 
$(".kuudes").on("click", function(){
  $(this).parent().addClass("selected");

  let name_atribuutti = $(this).attr("name");
  let valinta = "[name=" + name_atribuutti +"]";
  $(valinta).prop("disabled", true);

  let vastaus = Number($(this).val());
  if (vastaus === 1) {
      document.getElementById('vastaukset').innerHTML = ++vastaukset.correct;
      $(this).parent().addClass("right");
  } else {

      $(this).parent().addClass("wrong");

  }
});
$(".seuraava6").on("click", function(){
  $(".seuraava5").hide();
  $(".kuusi").hide();
  $(".kuus").hide();
  $(".uudestaan").removeClass("piilota");
  $(".btn").removeClass("piilota");
  $(".seitseman").removeClass("piilota");
});
    $(".uudestaan").on("click", function(){
        location.reload();
    });
  });

$(document).ready(function(){
  localStorage.clear();

  var array_hastag = [];

  function procesarHg (h){
    if (array_hastag.length == 0) {
      array_hastag.push(h);
      localStorage.setItem(h, 1);
    } else{
      for (var i = 0; i < array_hastag.length; i++) {
        if (!array_hastag.includes(h)) {

          array_hastag.push(h);
          localStorage.setItem(h, 1);
        } else {
          //Si el hastag ya se encuentra debera sumar +1 para
          //saber cuales son los mas repetidos

        }
      } //fin for

    }
  }//fin funcion procesar hastag

function presentarDatos(){
  var res = "";
  for (var i = 0; i < array_hastag.length; i++) {
    res += "#" + array_hastag[i] + " ";
  }
  return res;
}

 $("#input").keypress(function(e){
   if (e.which == 13) {
     var hastag = $("#input").val();
     procesarHg(hastag);
    $("#input").val("");
    $(".resultados").html(presentarDatos());
   }
 });


});// ------ Fin document.ready --------

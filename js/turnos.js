
function cargarResultado() {
    var opcionSeleccionada = document.getElementById("opciones").value;
    var resultadoEmbed = document.getElementById("resultadoEmbed");
  
    if (opcionSeleccionada === "opcion1") {
      resultadoEmbed.innerHTML = '<iframe src="https://sibelius90.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframesibelius90" style="width:100%;height:1000px;border:0px;background-color:transparent;" frameborder="0" allowtransparency="true"></iframe><script>window.addEventListener && window.addEventListener("message", function(event){if (event.origin === "https://sibelius90.youcanbook.me"){document.getElementById("ycbmiframesibelius90").style.height = event.data + "px";}}, false);</script>';
    } else if (opcionSeleccionada === "opcion2")
    resultadoEmbed.innerHTML = '<iframe src="https://dra-weigandt.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframedra-weigandt" style="width:100%;height:1000px;border:0px;background-color:transparent;" frameborder="0" allowtransparency="true"></iframe><script>window.addEventListener && window.addEventListener("message", function(event){if (event.origin === "https://dra-weigandt.youcanbook.me"){document.getElementById("ycbmiframedra-weigandt").style.height = event.data + "px";}}, false);</script>'
    
    
    else {
      resultadoEmbed.innerHTML = "";
    }
  }
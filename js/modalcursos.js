$(function () {
$("#dialog").dialog({
modal: true,
autoOpen: false
});
$('#boton-modalcursos')
.button()
.click(function () { 
$("#dialog").dialog("open"); 
});
});




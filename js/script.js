$(document).ready(function(){

    // Scroll Animado
    $(" header a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
    // Slider
    
   
    // Menu

     $(".btn-nav-mob").click(function() {
        $('.nav-mob').slideToggle(300);
        $('.icono').toggleClass('fa-bars');
        $('.icono').toggleClass('fa-times');
      
    });
    //Nosotros
    
    // Modales
    
    
});
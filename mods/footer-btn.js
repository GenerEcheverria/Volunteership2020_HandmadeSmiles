var elem =document.getElementById(test);
$('.footer-section').click(function(){
    if ($(window).width()<=684){
        $(this).children('.btn-footer').slideToggle();
    }
    

});

addEventListener("resize", function() {
    if ($(window).width()>684) {
      $('.btn-footer').show();
    }
  })

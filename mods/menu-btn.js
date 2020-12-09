$(document).ready(main);

var contador = 1;
 
function main () {
	$('.menu-btn').click(function(){
		if (contador == 1) {
			$('.nav-menu').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.nav-menu').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
    });
    
}
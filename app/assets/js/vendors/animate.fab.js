/*
	animate.fab 1.1
	- Ajoute une classe lorsque l'élément apparait dans l'écran.
	exemple: $('.shit-à-animer').animatefab();
*/
$.fn.animatefab = function() {
	$(window).scrollTop(1);
	acitem = $(this);
	acclass = 'animate';
	$(window).on('scroll', function () {
		acitem.each(function(){
			var acscrollTop = $(window).scrollTop();
			var acwinheight = $(window).height();
			var acoffset = $(this).offset().top;
			var acheight = $(this).outerHeight();
			acscrollTop = acscrollTop + acwinheight;
		
			if(acscrollTop > acoffset){
				$(this).addClass(acclass);
			} 
			else {
				$(this).removeClass(acclass);
			}
		});
	});
}
$( document ).ready(function() {
	
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
		var the_id = $(this).attr("href");
		$('html, body').animate({  
				scrollTop:$(the_id).offset().top 
		}, 1000);  
		return false;  
	});
	
	$(".toggler a").click(function(event) {
		$(".toggle").removeClass("visible");
		$(".toggler li").removeClass("active");
		$(this).parent().addClass("active");
		tog_var = event.target.id;
		console.log(tog_var);
		$("#toggle_" + tog_var).addClass("visible");
	});
	
	
	$(".toggle_coord").click(function(event) {
		$(".toggler li a").eq(3).trigger("click");
	});
	
	$(".toggle_gaston").click(function(event) {
		$(".toggler li a").eq(0).trigger("click");
	});

	$(".toggler li a").eq(0).trigger("click");
	
	$("#toggle_menu, .mobile-menu a").click(function() {
		$('.mobile-menu').slideToggle();
		console.log("test");
	});
	
	$("#syn-form").click(function() {
		$(".syn-text").removeClass("visible");
		$(".syn-form").addClass("visible");
	});
	
	$("#syn-text").click(function() {
		$(".syn-form").removeClass("visible");
		$(".syn-text").addClass("visible");
	});
	
});
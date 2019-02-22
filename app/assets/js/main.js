$(window).load(function() {
	
	$('body').addClass('transition');
	
	bannerIconAnimation();
	bannerTextAnimation();
	
	setTimeout(function() { 
		$('.banner-title, .banner-logo, .banner-icon, .banner-link').addClass('animate');
	}, 800);
	
	setTimeout(function() { 
		$('body').addClass('loaded');
	}, 2000);
	
});

$(document).ready(function() {
	
	banner();
	
	main();
	
	var headerScreenPos = $('.box').position().top;
	var headerMobilePos = $('main').position().top;
	
	menuMobileBackground();
	
	//productLink();
	
	hoverAnimation($('.produits-item, .recettes-item, .button.w-hover, .cta, .cartlink, .featured_produits-item'));
	
	$('.burger').click(function(){
    
    $('html').toggleClass('overflow');
    
    $('.burger, .menu-mobile, .overlay, .header-mobile').toggleClass('active');
    
    menuMobileBackground();
    
  });
  
  
  //Links
  
  $('a[href^="#"]').on('click', function (e) {
	  
    e.preventDefault();
    
    $(document).off("scroll");
    
    $('a').each(function () {
	    
      $(this).removeClass('active');
      
    });
    
    $(this).addClass('active');
  
    var target = this.hash;
    var menu = target;
    $target = $(target);
    
    $('html, body').stop().animate({  
      'scrollTop': $target.offset().top+2
    }, 800, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
    
  });
  
  $("a[target!='_blank']:not([href^='#'])[href!='']").click(function(e) {
	  
	  var lelink = $(this).attr('href');
	  
	  console.log(lelink);
	  
	  if (lelink != undefined && lelink != false) {
		  
		  e.preventDefault();

			$('body').addClass('transition-out');
		 
	    setTimeout(function () {
	      location.href = lelink;
	      $('body').addClass('transition-out-end');
	    }, 1000);
	    
	  }
	  
  });
  
  $('.points-de-vente-item').on('click', function () {
  
	  $('html, body').animate({
		  scrollTop: $(".map").offset().top-$('header').height()
		}, 1000);
		
	});
  
  //Slides
  
  $('.slides-list-image').slick({
	  arrows: false,
	  asNavFor: '.slides-list-nav'
  });
  
  $('.slides-list-nav').slick({
	  arrows: false,
	  slidesToShow: 4,
		slidesToScroll: 1,
	  asNavFor: '.slides-list-image',
	  focusOnSelect: true,
	  responsive: [
	    {
	      breakpoint: 1280,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
    ]
  });
	
	$('.slides-list-image').on('afterChange', function(event, slick, currentSlide, nextSlide) {
	  console.log(currentSlide);
	  currentSlideContent = currentSlide+1;
	  $('.slide-item-content').removeClass('active');
	  $('.slide-item-content:nth-child('+currentSlideContent+')').addClass('active');
	});
	
	$('.slide-item-content').click(function() {
		$('.slides-list-image').slick('slickGoTo', $(this).index());;
		$('.slides-list-nav').slick('slickGoTo', $(this).index());
	});
	
	//Featured produits
	
	$('.featured_produits-list').slick({
	  infinite: true,
	  centerMode: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 1000,
	  prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
	});
	
	//Scroll
	
	$(window).scroll(function() {
		
		headerFixed($('.header-screen'));
		headerFixed($('.header-mobile'));
		
	});
	
	
	//Resize

	$(window).resize(function() {
		
		banner();
		
		main();
		
		menuMobile();
		
		menuMobileBackground();
		
		$('html').removeClass('overflow');
    
    $('.burger, .menu-mobile, .overlay, .header-mobile').removeClass('active');
		
	});
	
});

$(window).load(function() {
	
	menuMobile();
	
});


//Scroll

$(window).scroll(function() {
	
	onScroll();
	menuMobile();
	
});





//Functions

function menuMobile() {
		
	headerH = $('.header-mobile').outerHeight();
	
	$('.menu-mobile').css('marginTop', headerH);
	
}

function onScroll(event){
	
  var scrollPos = $(document).scrollTop();
  
  $('.sub-menu').each(function () {
  	
  	var submenu = $(this);
  	
	  submenu.children('li').each(function () {
		  
	    var currLink = $(this);
	    var refElement = $(currLink.children('a').attr("href"));
	    
	    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
		    
	      submenu.children('li').removeClass("active");
	      currLink.addClass("active");
	      
	    }
	    
	    else{
		    
	      currLink.removeClass("active");
	      
	    }
	    
	  });
	
	});
  
}

function headerFixed(header) {
	
	var hinitpos = $('.box').position().top;
	
	var scrollPos = $(document).scrollTop();
	
	didScroll = true;
  
  if(scrollPos > hinitpos) {
	  
    header.addClass('fixed');
    $('.menu-mobile').addClass('fixed');
    
  }
  else {
	  
    header.removeClass('fixed');
    $('.menu-mobile').removeClass('fixed');
    
  }
	
}

function menuMobileBackground() {
	
	var menuMobileHeight = $('.menu-mobile').height();
	var menuMobileUlHeight = $('.menu-mobile ul').height();
	
	$('.menu-mobile-background').height((menuMobileHeight/2)-(menuMobileUlHeight/2)+1);
	
}

function main() {
		
	if($(window).width() >= 1025) {
		
		headerH = $('.header-screen').outerHeight();
		
		$('main').css('paddingTop', headerH);
		
	}
	else if($(window).width() >= 769) {
		
		headerH = $('.header-screen').outerHeight();
		
		$('main').css('paddingTop', headerH);
		
	}
	else {
		
		headerH = $('.header-mobile').outerHeight();
		
		$('main').css('paddingTop', headerH);
		
	}
	
}

function productLink() {
	
	$('[class*=\'productlink-\']').each(function() {
		
		var productLink = $(this);
		var snipcartDatas = $('.snipcart-add-item').data();
		
		productLink.addClass('snipcart-add-item');
		
		$.each(snipcartDatas, function(name, value) {
			name = name.substring(4);
		  productLink.attr('data-item-'+name, value);
		  
		});

	});
	
}

function banner() {
	
	if($(window).width() >= 1025) {
		
		headerH = $('.header-screen').outerHeight();
		
		$('.banner').css('minHeight', 'calc(100vh - '+headerH+'px)');
		
	}
	else if($(window).width() >= 769) {
		
		headerH = $('.header-screen').outerHeight();
		
		$('.banner').css('minHeight', 'calc(100vh - '+headerH+'px)');
		
	}
	else {
		
		headerH = $('.header-mobile').outerHeight();
		
		$('.banner').css('minHeight', 'calc(100vh)');
		
	}
	
}

function hoverAnimation(dis) {
	
	dis.hover(function() {
		//$(this).find('.hover-video').remove();
		if(!$(this).find('.hover-video').length) {
			//$(this).children('.hover').stop().html('<video class="hover-video" autoplay="" loop="" muted><source src="http://' + location.host + '/kwecocktails/app/assets/images/hover-video.mp4"></video>');
			$(this).children('.hover').stop().html('<video class="hover-video" autoplay="" loop="" muted><source src="http://' + location.host + '/assets/images/hover-video.mp4"></video>');	
		}
	},
	function() {
		
	});
	
}

function bannerIconAnimation() {
	if($('.banner-icon .turbulence, .banner-icon-mobile .turbulence').length) {
		$({scale:$('.banner-icon .turbulence, .banner-icon-mobile .turbulence').attr('scale')})
    .animate(
    {scale: 0},
    {duration:3000,step:function(now){$('.banner-icon .turbulence, .banner-icon-mobile .turbulence').attr('scale', now);}});
	}
}


function bannerTextAnimation() {
	$('.banner-title div').each(function (index) {
    var characters = $(this).text().split("");
    
    $this = $(this);
    $this.empty();
    $.each(characters, function (i, el) {
      if(el == " ") {
        $this.append(" ");
      }
      else {
        $this.append("<span>" + el + "</span>");
      }
    });

  });
}


// Snipcart

//Snipcart.execute('config', 'show_continue_shopping', true);

Snipcart.subscribe('item.removed', function (item) {
   console.log(item);
});

Snipcart.subscribe('cart.ready', function (data) {
	
	itemadd = 0;
	
	snipcartCount(itemadd);
	
});

Snipcart.subscribe('item.adding', function (ev, item, items) {
  
  itemadd = 1;
  
  snipcartCount(itemadd);
    
});

Snipcart.subscribe('cart.closed', function() {
	
	itemadd = 0;
	
	snipcartCount(itemadd);
	
});

function snipcartCount(itemadd) {	
  
  var cart = Snipcart.api.cart.get();
  
  var cartitems = Snipcart.api.items.all();
  
  console.log(cartitems);
  
  var cartquantity = 0;
  
  for (i = 0; i < cartitems.length; i++) {
  	
  	cartquantity = cartquantity+cartitems[i].quantity;
  	 
  }
  
  cartquantity = cartquantity+itemadd;
  
  if(cartquantity == 0) {
	  $('.snipcart-count').hide();
  }
  else {
	  $('.snipcart-count').show();
  }
  $('.snipcart-count').text(cartquantity);
	
}

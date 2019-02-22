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

(function($) {

    /*
     *  render_map
     *
     *  This function will render a Google Map onto the selected jQuery element
     *
     *  @type	function
     *  @date	8/11/2013
     *  @since	4.3.0
     *
     *  @param	$el (jQuery element)
     *  @return	n/a
     */

    function render_map( $el ) {

        // var
        var $markers = $el.find('.marker');
        var styles = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];

        // vars
        var args = {
            scrollwheel : false,
            styles      : styles,
            zoom		: 17,
            center		: new google.maps.LatLng(0, 0),
            disableDefaultUI: true,
            mapTypeId	: google.maps.MapTypeId.ROADMAP
        };

        // create map
        var map = new google.maps.Map( $el[0], args);
				var i = 0;
        // add a markers reference
        map.markers = [];
				
        // add markers
        $markers.each(function(){

            add_marker( $(this), map, i );
            i++;

        });

        // center map
        center_map( map );

    }

    /*
     *  add_marker
     *
     *  This function will add a marker to the selected Google Map
     *
     *  @type	function
     *  @date	8/11/2013
     *  @since	4.3.0
     *
     *  @param	$marker (jQuery element)
     *  @param	map (Google Map object)
     *  @return	n/a
     */

    function add_marker( $marker, map, i ) {

        // var
        var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
        
        if($(window).width() <= 800) {
	      	//var myIcon = new google.maps.MarkerImage("http://" + location.host + "/kwecocktails/app/assets/images/marker.png", null, null, null, new google.maps.Size(25,37));
	      	var myIcon = new google.maps.MarkerImage("http://" + location.host + "/assets/images/marker.png", null, null, null, new google.maps.Size(25,37));
	      }  
	      else {
		      //var myIcon = new google.maps.MarkerImage("http://" + location.host + "/kwecocktails/app/assets/images/marker.png", null, null, null, new google.maps.Size(49,77));
		      var myIcon = new google.maps.MarkerImage("http://" + location.host + "/assets/images/marker.png", null, null, null, new google.maps.Size(49,77));
	      }
        
        
        
        // create marker
        var marker = new google.maps.Marker({
            position	: latlng,
            map			: map,
            icon : myIcon
        });
				
				$('[data-markerid="'+i+'"]').attr('data-length', map.markers.length);
				
        // add to array
        map.markers.push( marker );				
				
        // if marker contains HTML, add it to an infoWindow
        if( $marker.html() )
        {
            // create info window
            var infowindow = new google.maps.InfoWindow({
                content		: $marker.html()
            });

            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {

                infowindow.open( map, marker );

            });
            
             $('.points-de-vente-item').on('click', function () {
				
							infowindow.close();
							
							console.log(map.markers[$(this).data('markerid')]);
							
			        google.maps.event.trigger(map.markers[$(this).data('length')], 'click');
				      
				    });
				    
        }

    }

    /*
     *  center_map
     *
     *  This function will center the map, showing all markers attached to this map
     *
     *  @type	function
     *  @date	8/11/2013
     *  @since	4.3.0
     *
     *  @param	map (Google Map object)
     *  @return	n/a
     */

    function center_map( map ) {

        // vars
        var bounds = new google.maps.LatLngBounds();

        // loop through all markers and create bounds
        $.each( map.markers, function( i, marker ){

            var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

            bounds.extend( latlng );

        });

        // only 1 marker?
        if( map.markers.length == 1 )
        {
            // set center of map
            map.setCenter( bounds.getCenter() );
            map.setZoom( 15 );
        }
        else
        {
            // fit to bounds
            map.fitBounds( bounds );
        }

    }

    /*
     *  document ready
     *
     *  This function will render each map when the document is ready (page has loaded)
     *
     *  @type	function
     *  @date	8/11/2013
     *  @since	5.0.0
     *
     *  @param	n/a
     *  @return	n/a
     */

    $(document).ready(function(){

        $('.map').each(function(){
            render_map( $(this) );
        });

    });

})(jQuery);
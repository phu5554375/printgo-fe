$(document).ready(function(){
$('#bannerCarousel').owlCarousel({
    loop:true,
    margin:10,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
$('#productCarousel').owlCarousel({
    loop:true,
 
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});
$('#productCarousel-designpage').owlCarousel({
    loop:true,
    margin:10,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
$('#productCarousel1').owlCarousel({
    loop:true,
    margin:10,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});


	// Home Carousel
  $("#homeBannerCarousel.owl-carousel").owlCarousel({
  	items: 1,
  	margin: 0,
  	loop: false,
  	center: false,
  	mouseDrag: true,
  	touchDrag: true,
  	pullDrag: true,
  	freeDrag: true,
  	stagePadding: 0,
  	nav: true,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  	navElement: 'div',
  	dots: true,
  	dotsEach: true,
  	dotData: false,
  	rewind: true,
  	autoplay: true,
  	autoplayTimeout: 40000,
  	autoplayHoverPause: false,
  });
$("#bannerCarousel.owl-carousel.show-04-items, #newsCarousel.owl-carousel.show-04-items").owlCarousel({
    items: 3,
    margin: 0,
    loop: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    navElement: 'div',
    dots: false,
    rewind: true,
    autoplay: false,
  });
  $("#productCarousel-designpage.owl-carousel.show-05-items, #productCarousel.owl-carousel.show-04-items, #newsCarousel.owl-carousel.show-04-items").owlCarousel({
    items: 4,
    margin: 0,
    loop: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    navElement: 'div',
    dots: false,
    rewind: true,
    autoplay: false,
  });
  
  $("#productCarousel.owl-carousel.show-05-items,product-dx, #singleProductPhotoCarousel.owl-carousel.show-04-items").owlCarousel({
    items: 5,
    margin: 0,
    loop: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    navElement: 'div',
    dots: false,
    rewind: true,
    autoplay: false,
  });


  // Number Input restyle
  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });


});
// --
  // product photo album
  $('.sp_product-photo_single-thumbnail').click(function(e){
    e.preventDefault();
    $('.sp_product-photo_single-thumbnail').removeClass('active');
    $(this).addClass('active');

    var dataPhotoView = $(this).find('img').attr('data-photo-view');
    $('#spProductPhotoView').attr('src',dataPhotoView);
  })





  // slick
  // -------------------------
  var itemSlickOptions = { 
    accessibility: true,          // Enables tabbing and arrow key navigation
    adaptiveHeight: false,        // Enables adaptive height for single slide horizontal carousels
    autoplay: false,              // Enables Autoplay
    // autoplaySpeed: 3000
    arrow: true,                  // Prev/Next Arrows
    // asNavFor: #id,
    // appendArrows: $(element),  // Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
    // appendDots: $(element),    // Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-chevron-right"></i></button>',
    centerMode: false,            // Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
    // centerPadding: '50px',     // Side padding when in center mode (px or %)
    cssEase: 'ease-in-out',       // CSS3 Animation Easing
    // customPaging: n/a
    dots: false,                  // Show dot indicators
    dotsClass: 'slick-dots',      // Class for slide indicator dots container ('slick-dots')
    draggable: true,              // Enable mouse dragging
    fade: false,                  // Enable fade
    focusOnSelect: false,         // Enable focus on selected element (click)
    easing: 'linear',             // Add easing for jQuery animate. Use with easing libraries or default easing methods
    // edgeFriction
    infinite: false,              // Infinite loop sliding
    initialSlide: 0,              // Slide to start on
    // lazyLoad: 
    mobileFirst: false,           // Responsive settings use mobile first calculation
    pauseOnFocus: false,          // Pause Autoplay On Focus
    pauseOnHover: false,          // Pause Autoplay On Hover
    pauseOnDotsHover: false,      // Pause Autoplay when a dot is hovered
    // respondTo: 
    // responsive: 
    rows: 1,                      // Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
    // slide                      // Element query to use as slide
    // slidesPerRow: 
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    swipe: true,                  // Enable swiping
    swipeToSlide: true,          // Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
    touchMove: true,             // Enable slide motion with touch
    touchThreshold: 10,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    rtl: false,
    waitForAnimate: true,
    zindex: 999
  };

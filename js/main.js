$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});



// CARD JS

$(function() {
	$('.material-card > .mc-btn-action').click(function () {
		 var card = $(this).parent('.material-card');
		 var icon = $(this).children('i');
		 icon.addClass('fa-spin-fast');

		 if (card.hasClass('mc-active')) {
			  card.removeClass('mc-active');

			  window.setTimeout(function() {
					icon
						 .removeClass('fa-arrow-left')
						 .removeClass('fa-spin-fast')
						 .addClass('fa-bars');

			  }, 800);
		 } else {
			  card.addClass('mc-active');

			  window.setTimeout(function() {
					icon
						 .removeClass('fa-bars')
						 .removeClass('fa-spin-fast')
						 .addClass('fa-arrow-left');

			  }, 800);
		 }
	});
});

// PRODUCTS JS

// (function ($) {
// 	$(function () {
 
 
// 	  $(window).on('scroll', function () {
// 		 fnOnScroll();
// 	  });
 
// 	  $(window).on('resize', function () {
// 		 fnOnResize();
// 	  });
 
 
// 	  var agTimeline = $('.js-timeline'),
// 		 agTimelineLine = $('.js-timeline_line'),
// 		 agTimelineLineProgress = $('.js-timeline_line-progress'),
// 		 agTimelinePoint = $('.js-timeline-card_point-box'),
// 		 agTimelineItem = $('.js-timeline_item'),
// 		 agOuterHeight = $(window).outerHeight(),
// 		 agHeight = $(window).height(),
// 		 f = -1,
// 		 agFlag = false;
 
// 	  function fnOnScroll() {
// 		 agPosY = $(window).scrollTop();
 
// 		 fnUpdateFrame();
// 	  }
 
// 	  function fnOnResize() {
// 		 agPosY = $(window).scrollTop();
// 		 agHeight = $(window).height();
 
// 		 fnUpdateFrame();
// 	  }
 
// 	  function fnUpdateWindow() {
// 		 agFlag = false;
 
// 		 agTimelineLine.css({
// 			top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
// 			bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
// 		 });
 
// 		 f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
// 	  }
 
// 	  function fnUpdateProgress() {
// 		 var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
 
// 		 i = agTop + agPosY - $(window).scrollTop();
// 		 a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
// 		 n = agPosY - a + agOuterHeight / 2;
// 		 i <= agPosY + agOuterHeight / 2 && (n = i - a);
// 		 agTimelineLineProgress.css({height: n + "px"});
 
// 		 agTimelineItem.each(function () {
// 			var agTop = $(this).find(agTimelinePoint).offset().top;
 
// 			(agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
// 		 })
// 	  }
 
// 	  function fnUpdateFrame() {
// 		 agFlag || requestAnimationFrame(fnUpdateWindow);
// 		 agFlag = true;
// 	  }
 
 
// 	});
//  })(jQuery);
 

//  timeline2 js

var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


// TIMELINE 3 JS
(function($) {
	$.fn.timeline = function() {
	  var selectors = {
		 id: $(this),
		 item: $(this).find(".timeline-item"),
		 activeClass: "timeline-item--active",
		 img: ".timeline__img"
	  };
	  selectors.item.eq(0).addClass(selectors.activeClass);
	  selectors.id.css(
		 "background-image",
		 "url(" +
			selectors.item
			  .first()
			  .find(selectors.img)
			  .attr("src") +
			")"
	  );
	  var itemLength = selectors.item.length;
		$(window).scroll(function () {
			var max, min;
			var pos = $(this).scrollTop();
			// console.log(pos);
			selectors.item.each(function (i) {
				min = $(this).offset().top;
				
				max = $(this).height() + $(this).offset().top;
				
				var that = $(this);
				if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
					selectors.item.removeClass(selectors.activeClass);
					selectors.id.css(
						"background-image",
						"url(" +
						selectors.item
							.last()
							.find(selectors.img)
							.attr("src") +
						")"
					);
					selectors.item.last().addClass(selectors.activeClass);
				} else if (pos <= max - 400 && pos >= min) {
					selectors.id.css(
						"background-image",
						"url(" +
						$(this)
							.find(selectors.img)
							.attr("src") +
						")"
					);
					selectors.item.removeClass(selectors.activeClass);
					$(this).addClass(selectors.activeClass);
				}
			});
		});
	};
 })(jQuery);
 
 $("#timeline-1").timeline();
 

//  ACCESSORIES JS
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

// ACCESSORIES SECTION MAIN PAGE
(function () {
	"use strict";
 
	// define variables
	var items = document.querySelectorAll(".timeline2 li");
 
	// check if an element is in viewport
	// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
	  var rect = el.getBoundingClientRect();
	  return (
		 rect.top >= 0 &&
		 rect.left >= 0 &&
		 rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		 rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}
 
	function callbackFunc() {
	  for (var i = 0; i < items.length; i++) {
		 if (isElementInViewport(items[i])) {
			items[i].classList.add("in-view");
		 }
	  }
	}
 
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
 })();
 


//  NAVIGATION HANDLER
function navigateTo(_page){
	switch (_page) {
		case 'products':
			window.location.href = "products.html"
			break;
		case 'support':
			window.location.href = "support-page.html"
		break;
		case 'faq':
			window.location.href = "faq.html"
		break;
		case 'warranty':
			window.location.href = "product-warranty.html"
		break;
		case 'privacy':
			window.location.href = "privacy-policy.html"
		break;	
		default:
			window.location.href = "index.html"
			break;
	}
}

function goToLink(_serviceLink){
	switch(_serviceLink) { 
		case 'requestService':
			window.open('https://docs.google.com/forms/d/e/1FAIpQLScjefX_0WwOaYKrzFmMFoOXeHxYrdiUCvIv91VzOcvVs63PQw/viewform')
			break;
		case 'productRegistration':
			window.open('https://docs.google.com/forms/d/e/1FAIpQLSd-ECQiAsGneiIInl34gfdV37XG8zF1TqvXIHMTMCkcpPmXNw/viewform')
			break;
		case 'facebook':
			window.open('https://www.facebook.com/CBKPHILPIPPINES')
			break;  
		case 'instagram':
			window.open('https://www.instagram.com/cbk_pressurewasher/')
			break;
		case 'macolay':
			window.open('https://www.facebook.com/squeakywatermarksremover')
			break;  
		case 'dalliance':
			window.open('https://www.facebook.com/wearedetailalliance')
			break; 
		default:
			// code block
	}
}

function backtotop(_elementId){
	var elementTop = $('#'+ _elementId).offset().top;
	var elementBottom = elementTop + $('#'+ _elementId).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	var isinview = elementBottom > viewportTop && elementTop < viewportBottom

	if (isinview) {
		$('#floatingBtn').hide();
	}
	else {
		$('#floatingBtn').show();
	}
}
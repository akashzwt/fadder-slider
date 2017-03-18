$(function () {
    
    'use strict';
	
	
	$.fn.CarouselFade = function (options) {
		// Default settings
        var settings = $.extend({
            desktopItem : 8,
			tabletItem : 6,
			bigMobileItem : 4,
			mobileItem : 2,
			tabletScreen : 1024,
			bigMobileScreen : 768,
			mobileScreen : 640,
			autoplayTime : 5000
        },options);
		
		var $this = $(this);
		
		var $outer_class = $this.addClass('CarouselFade');
			
		function wrapEvery(num, wrapper) {
			
			var items = $this.find('.single');
			
			num = num || items.length;
			
			wrapper = wrapper || $('<div/>', {
				"class": "fade-outer"
			});
			var itemsToWrap = [];
			var parentClass = wrapper.attr('class');

			items.parent('.' + parentClass).children().unwrap();

			while (items.length > 0) {
				itemsToWrap.push(items.splice(0, num));
			}
			
			itemsToWrap.forEach(function (arr) {
				$(arr).wrapAll(wrapper);
			});
									
			return items;
		};
		
		function widthCount(perWidth) {
			$this.find('.single').css({
				"width": (100/perWidth)+ '%'
			});
			$this.find('.fade-outer').first().addClass('active').fadeIn();
			return this;
		}
				
		
		function wrapItems() {
			
			if($(window).width() <= settings.mobileScreen){
				wrapEvery(settings.mobileItem);
				widthCount(settings.mobileItem);
			}
			else if($(window).width() > settings.mobileScreen && $(window).width() <= settings.bigMobileScreen){
				wrapEvery(settings.bigMobileItem);
				widthCount(settings.bigMobileItem);
			}
			else if($(window).width() > settings.bigMobileScreen && $(window).width() <= settings.tabletScreen){
				wrapEvery(settings.tabletItem);
				widthCount(settings.tabletItem);
			}
			else if($(window).width() > settings.tabletScreen && $(window).width() <= 5000){
				wrapEvery(settings.desktopItem); 
				widthCount(settings.desktopItem);
			}		
			
		}
		
		wrapItems(); //fire on document ready
		
		var windowWidth = $(window).width();
		var lightbox_resize = false;
		$(window).resize(function() {
			if ($(window).width() != windowWidth) {

				// Update the window width for next time
				windowWidth = $(window).width();

				// Do stuff here
				if (lightbox_resize)
					clearTimeout(lightbox_resize);
				lightbox_resize = setTimeout(function() {
					console.log('resize');
					wrapItems()
				}, 200);
			}
			
		});

		
		/*----------------------------------------------------------------*/
		
		function ul_height(){
			var my_height = $this.find('.fade-outer.active').height();
			$this.find('.main-slider').css('height',my_height);	
		}
		setTimeout(function(){
			ul_height();
		},50)		
				
		var timer;
		
		function start_interval(){
			timer = setInterval(function(){
				next_move();
				ul_height();
			}, settings.autoplayTime); 
		}

		function next_move(){
			if($this.find('.fade-outer:last').hasClass('active')){
				$this.find('.fade-outer.active').removeClass('active');
				$this.find('.fade-outer:first').addClass('active');
			} else {
				$this.find('.fade-outer.active').removeClass('active').next('.fade-outer').addClass('active'); 
			}
			if($this.find('.dots span:last').hasClass('active')){
				$this.find('.dots span.active').removeClass('active');
				$this.find('.dots span:first').addClass('active');
			} else {
				$this.find('.dots span.active').removeClass('active').next('.dots span').addClass('active'); 
			}
			ul_height();
			clearInterval(timer);
			start_interval()
		}
		function prev_move(){
			if($this.find('.fade-outer:first').hasClass('active')){
				$this.find('.fade-outer.active').removeClass('active');
				$this.find('.fade-outer:last').addClass('active');
			} else {
				$this.find('.fade-outer.active').removeClass('active').prev('.fade-outer').addClass('active'); 
			}
			if($this.find('.dots span:first').hasClass('active')){
				$this.find('.dots span.active').removeClass('active');
				$this.find('.dots span:last').addClass('active');
			} else {
				$this.find('.dots span.active').removeClass('active').prev('.dots span').addClass('active'); 
			}
			ul_height();
			clearInterval(timer);
			start_interval()
		}

		start_interval();

		
		
		function sliderDots() {
			$this.find( ".dots" ).empty();
			var items = $this.find('.single');
			var all_length = $this.find('.fade-outer').length;
			
			for(var dot_length = 0; dot_length < all_length; dot_length++) {
				var dot_length_new = dot_length + 1
				$this.find( ".dots" ).append( '<span>'+ dot_length_new +'</span>' );
			}
			
			$this.find( ".dots span:first" ).addClass('active');
			
			return this;
		};
		sliderDots();
		
		var lightbox_resize2 = false;
		var windowWidth2 = $(window).width();
		$(window).resize(function() {
			if ($(window).width() != windowWidth2) {

				// Update the window width for next time
				windowWidth2 = $(window).width();

				// Do stuff here
				if (lightbox_resize2)
					clearTimeout(lightbox_resize2);
				lightbox_resize2 = setTimeout(function() {
					sliderDots();
					ul_height();
					$this.find( ".dots span").on('click', function(event){
						event.preventDefault();
						var dot_num = $(this).index();
						$(this).addClass('active').siblings().removeClass('active');
						$this.find('.fade-outer').eq(dot_num).addClass('active').siblings().removeClass('active');

						clearInterval(timer);
						start_interval();
					});
					
				}, 500);
			}
		});
		
		$this.find( ".dots span").on('click', function(event){
		
			event.preventDefault();
			var dot_num = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$this.find('.fade-outer').eq(dot_num).addClass('active').siblings().removeClass('active');

			clearInterval(timer);
			start_interval();
		});

		
		/*----------------------------------------------------------------*/
		
		$this.find('.arrows .right-arrow').click(function(){
			next_move()
		})
		$this.find('.arrows .left-arrow').click(function(){
			prev_move()
		});
		
		var count=0;
		var swipe_blocks = $this.find(".fade-outer");
		
		swipe_blocks.swipe( {
			//Single swipe handler for left swipes
			swipeLeft:function(event, direction, distance, duration, fingerCount) {
			  next_move()
			},
			//Default is 75px, set to 0 for demo so any distance triggers swipe
			threshold:0
		});
		
		swipe_blocks.swipe( {
			//Single swipe handler for left swipes
			swipeLeft:function(event, direction, distance, duration, fingerCount) {
			  next_move()
			},
			//Default is 75px, set to 0 for demo so any distance triggers swipe
			threshold:0
		});
		
		
		$('.CarouselFade img').on('mousedown', function(e) {
			e.preventDefault();
		});
		
	};
	
});
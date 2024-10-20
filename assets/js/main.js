(function ($) {
	"use strict";

	// Select 
	$('select').niceSelect();

	// Banner Slider Js
	var sliderswiper = new Swiper('.slider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		effect: "slide",
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		pagination: {
			el: ".slider-pagination",
			clickable: true,
		},
	});


	// Shop Slider Js
		var shopswiper = new Swiper('.shopslider-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 6,
		spaceBetween: 25,
		centereMode: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// cat-toggle
	$(".tp-cat-toggle").on("click", function () {
		$('.category-menu').slideToggle(500);
	});

	////////////////////////////////////////////////////
	// 22. Slider Js
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {

			$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Minute</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Second</p></span>'));
		});
	});


})(jQuery)
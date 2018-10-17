$(function() {
    if ($('.landingpage-slider-1 .owl-carousel').length) {
		$('.landingpage-slider-1 .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            padding: 0,
            margin: 0,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: false,
			dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
			autoplayHoverPause: true,
			callbacks: true,
			responsive: {
				768: {
					nav: true
				}
			}
        });
    }

});
// $(document).ready(function(){
//     $('.active-banner-carousel').owlCarousel({
//         center: true,
//         items:1,
//         loop:true
//     })
//     $('.next-trigger').click(function() {
//         $(".active-banner-carousel").trigger('next.owl.carousel');
//     })
//         // Go to the previous item
//     $('.prev-trigger').click(function() {
//         $(".active-banner-carousel").trigger('prev.owl.carousel');
//     });

// })

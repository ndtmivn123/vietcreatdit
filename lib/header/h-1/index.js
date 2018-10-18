function CCHeader1() {
	$('.canhcam-header-1 .navbar-toggler').on("click", function () {
		$('.canhcam-header-1').toggleClass('expand')
	});
};

$(function () {
	CCHeader1();
})

$(window).resize(function () {
	$('.canhcam-header-1').removeClass('expand')
})
// 	$(document).ready(function() {
// 		$('a[href*=#]').bind('click', function(e) {
// 				e.preventDefault(); // prevent hard jump, the default behavior

// 				var target = $(this).attr("href"); // Set the target as variable

// 				// perform animated scrolling by getting top-position of target-element and set it as scroll target
// 				$('html, body .canhcam-header-1').stop().animate({
// 						scrollTop: $(target).offset().top
// 				}, 600, function() {
// 						location.hash = target; //attach the hash (#jumptarget) to the pageurl
// 				});

// 				return false;
// 		});
// });

// $(window).scroll(function() {
// 		var scrollDistance = $(window).scrollTop();

// 		// Show/hide menu on scroll
// 		//if (scrollDistance >= 850) {
// 		//		$('nav').fadeIn("fast");
// 		//} else {
// 		//		$('nav').fadeOut("fast");
// 		//}
	
// 		// Assign active class to nav links while scolling
// 		$('section').each(function(i) {
// 				if ($(this).position().top <= scrollDistance) {
// 						$('.nav__item a.nav__link.active').removeClass('active');
// 						$('.nav__item a').eq(i).addClass('active');
// 				}
// 		});
// }).scroll();
	
// 	///
// 	$(window).resize(function () {
// 		selectChangeToList();
// 	});
// $('li a').click(function(e) {
// 	e.preventDefault();
// 	$('a').removeClass('active');
// 	$(this).addClass('active');
// });
$(document).ready(function(){
	$('ul li a').click(function(){
	  $('li a').removeClass("active");
	  $(this).addClass("active");
  });
});
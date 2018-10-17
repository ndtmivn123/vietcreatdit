function CCForm3() {
	$('.landingpage-form-3 .validator').validator().on('submit', function (e) {
		if (e.isDefaultPrevented()) {
		} else {
			$(this)[0].reset();
		}
	})
};

$(function() {
    CCForm3();
})

$(window).resize(function() {})

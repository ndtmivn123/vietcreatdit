function CCFooter9() {
	var nem = $('.landingpage-footer-9 .landingpage-sub').height()
	$('.landingpage-footer-9').css({
		"margin-top": nem/2 + 'px',
		"padding-top": nem/2 + 'px'
	})
};

$(function() {
    CCFooter9();
})

$(document).ready(function () {
	CCFooter9()
});

$(window).resize(function() {
	CCFooter9();
})

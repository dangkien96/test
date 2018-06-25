$(document).ready(function () {
	var fixCover = function () { 
		var widthContent = $('.news-content img').width();
		$(".new-content-cover").width(widthContent);
	}
	$(window).resize(function() {
	   fixCover();
	});
	fixCover();
	$('#myCarousel').carousel({
	    interval: 3000
	});
});
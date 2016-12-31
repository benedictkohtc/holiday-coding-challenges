$(function () {
	var buffer;
	var timeoutID;

	$('img').css({
		'position': 'absolute',
	});
	$(window).mousemove(function ( event ) {
		clearTimeout(timeoutID);
		if (event.pageX < buffer) {
			timeoutID = setTimeout(function () {
				$('img').attr('src', 'http://i.imgur.com/jsnHvC2.jpg');
				$('img').animate({
					'top': event.pageY - 50,
					'left': event.pageX + 20
				}, 800);
			}, 50);

		} else {
			timeoutID = setTimeout(function () {
				$('img').attr('src', 'http://i.imgur.com/jywm5jz.jpg');
				$('img').animate({
					'top': event.pageY - 50,
					'left': event.pageX - 120
				}, 800);
			}, 50);
		}
		buffer = event.pageX;
	});

}); // JQuery ready ends

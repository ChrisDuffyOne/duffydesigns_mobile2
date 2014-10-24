$(document).ready( function() {
	console.log("javascript on");

	//Mouse Appearance & Disappearance

	$(".intro").on("mouseenter", "#mouseHole", function () {
		$('#mouseHole').attr('src','images/mouseHoleMouse.png');
	});

	$(".intro").on("mouseleave", "#mouseHole", function () {
		$('#mouseHole').attr('src','images/mouseHole.png');
	});

	//Nav Bar Scrolling
	
	$('a[href^="#"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top }, 500);
          return false;
    });

});

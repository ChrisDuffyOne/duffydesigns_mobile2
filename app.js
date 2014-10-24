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

	// Screen Size Alert Check

    droidScreenSize = $(window).width();
	if($(window).width() >= 480) {
            // if larger or equal to 480
            alert("Window is larger than 480, the size is " + $(window).width());
        } else {
            // if smaller
            alert("Window is smaller than 480, the size is " + $(window).width());
    };

});

requirejs.config({
    baseUrl : '/scripts',
    paths : {
    	'jquery' : "//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min",
    	'text' : "text" 
    }
});

define(	'Main',
		[	"jquery", 
			"text!static/me.html", 
			"text!static/education.html",
			"text!static/contactinfo.html", 
			"text!static/currentjob.html",
			"text!static/jobhistory.html", 
			"text!static/socials.html"
		], 
		function($, me, education, contactinfo, currentjob, jobhistory, socials){
			var Main; 

			$('#me').html(me);
			$('#education').html(education);
			$('#contactinfo').html(contactinfo);
			$('#currentjob').html(currentjob);
			$('#jobhistory').html(jobhistory);
			$('#socialnetwork').html(socials);

			$(window).scroll(function () { 
				var top = $(window).scrollTop();
				if(top > 0) {
					$('header').attr('id', 'scrolled');
				}else{
					$('header').attr('id', 'unscrolled');
			    	$('#navlist li').attr('class', 'unclicked');
				}

				var elements = ['#me', '#education', '#contactinfo', '#currentjob', '#jobhistory', '#socialnetwork'];
				for(var i=0; i<elements.length; i++){
					var anchor = $(elements[i]);
					console.log(anchor);
					var height = $(anchor).height();
					var distance = $(anchor).position().top - 50;
					var color = $(anchor).attr('class');
					console.log(i + ": " + distance);
					console.log("TOP: " + (top));
					console.log("HEIGHT: " + (distance+height));
					console.log(color);
					console.log((((distance+height) >= top) && (distance <= (top+50))) && color != 'clicked');
					if((((distance+height-50) >= top) && (distance <= (top+50))) && color != 'clicked'){
						$('li a[href^="'+ elements[i] +'"]').parent().attr('class', 'clicked');
					}else{
						$('li a[href^="'+ elements[i] +'"]').parent().attr('class', 'unclicked');
					}
				}
		    });

		    $('a').click(function () {
			    $('#navlist li').attr('class', 'unclicked');

		    	var anchor = $(this).attr('href');
		    	console.log('CLICKED: ' + anchor);
				$('html, body').animate({
					scrollTop: $(anchor).offset().top - 50
				}, 500);

				$('#navlist li a[href^="'+ anchor +'"]').parent().attr('class', 'clicked');

			    return true;
			});

			return Main;
});

require(["Main"], function(){
	console.log('Main initialized');
});
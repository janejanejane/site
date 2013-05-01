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
			"text!static/socials.html", 
			"text!static/workout.html",
			"text!static/hearts.html", 
			"text!static/site.html"
		], 
		function($, me, education, contactinfo, currentjob, jobhistory, socials, workout, hearts, site){
			var Main; 
			var activeSection = window.location.hash;

			var myfunc = function(){
				var top = $(window).scrollTop();
				if(top > 0) {
					$('header').attr('id', 'scrolled');
				}else{
					$('header').attr('id', 'unscrolled');
			    	$('#navlist li').attr('class', 'unclicked');
				}
			}

			var gotoSection = function(anchor){
				if(anchor.indexOf('#') > -1){
		    		if($.inArray(anchor, elements) > -1){
			    		$('#navlist li').attr('class', 'unclicked');

				    	console.log('CLICKED: ' + anchor);
						$('html, body').animate({
							scrollTop: $(anchor).offset().top - 50
						}, 500);
		    		}
					
					$('#navlist li a[href^="'+ anchor +'"]').parent().attr('class', 'clicked');
				}
			}

			$('#me').html(me);
			$('#education').html(education);
			$('#contactinfo').html(contactinfo);
			$('#currentjob').html(currentjob);
			$('#jobhistory').html(jobhistory);
			$('#socialnetwork').html(socials);
			$('#workout').prepend(workout);
			$('#hearts').html(hearts);
			$('#site').html(site);

			var elements = ['#me', '#education', '#contactinfo', '#currentjob', '#jobhistory', 
							'#socialnetwork', '#workout', '#hearts', '#site'];
				
			

			$(window).scroll(function () { 
				

				myfunc();
				
				for(var i=0; i<elements.length; i++){
					var top = $(window).scrollTop();
					var	element = elements[i]
					var anchor = $(element);
					//console.log(anchor);
					var height = $(anchor).height();
					var distance = $(anchor).position().top - 150;
					var color = $(anchor).attr('class');

					if((((distance+height-50) >= top) && (distance <= (top+50)))){//} && color != 'clicked'){
						$('li a[href^="'+ element +'"]').parent().attr('class', 'clicked');
					}else{
						$('li a[href^="'+ element +'"]').parent().attr('class', 'unclicked');
					}
				}
		    });

		    $('a').click(function () {
		    	var anchor = $(this).attr('href');

		    	gotoSection(anchor);
		    		
			    return true;
			});

			$(document).ready(function(){
				console.log("inside document.ready");
				$(window).ready(function(){
					if(activeSection){
						gotoSection(activeSection);
						//$(document).scrollTop($(activeSection).offset().top - 50);
						//$('#navlist li a[href^="'+ activeSection +'"]').parent().attr('class', 'clicked');	

						console.log("HASH: " + activeSection);
						myfunc();
					}else{
						console.log("no section");
					}	
				});
			});

			return Main;
});

require(["Main"], function(){
	console.log('Main initialized');
});
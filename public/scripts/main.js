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

			return Main;
});

require(["Main"], function(){
	console.log('Main initialized');
});
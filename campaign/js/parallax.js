$(document).ready(function() {
	
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.aldermanB').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.researchB').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#research').offset().top
    	}, 	1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.studentB').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#student').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.preservationB').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#preservation').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.donorB').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#donors').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.historyB').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#history').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });

	$('a.howtogiveB').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#howtogive').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });

    
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#alderman').css('top',(0-(scrolled*.0))+'px');
	$('#research').css('top',(0-(scrolled*.0))+'px');
	$('#student').css('top',(0-(scrolled*.0))+'px');
	$('#preservation').css('top',(0-(scrolled*.0))+'px');
	$('#donors').css('top',(0-(scrolled*.0))+'px');
	$('#history').css('top',(0-(scrolled*.0))+'px');
	$('#howtogive').css('top',(0-(scrolled*.0))+'px');
}

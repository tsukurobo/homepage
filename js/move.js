﻿$(window).on('load resize',function() {
	var nav = $('#nav')
	var space = $('#space'),
	offset = space.offset();
	$(window).scroll(function () {
	  if($(window).scrollTop() > offset.top) {
	    nav.addClass('fixed');
	  } else {
	    nav.removeClass('fixed');
	  }
	});
});

$(window).on('load',function(){
			$('.wf-hannari_1').fadeIn(1500);		
	});
	
$(window).on('load',function(){
			$('.wf-hannari_2').delay(1000).hide(function(){
				$('.wf-hannari_2').fadeIn(1500);
				});	
	});
	
	
	
	

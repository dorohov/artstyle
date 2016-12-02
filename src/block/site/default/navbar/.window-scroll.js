var topPos = $(document).scrollTop();		
var snb = $('.navbar-site.index');
if(snb.hasClass('scroll-sidebar')) {
	if(topPos < 500) {
		snb.removeClass('scroll-sidebar');
	} 
} else {
	if(topPos > 500) {
		snb.addClass('scroll-sidebar');
	}
}	
if(snb.hasClass('opacity')) {
	if(topPos < 200) {
		snb.removeClass('opacity');
	}
} else {
	if(topPos > 200) {
		snb.addClass('opacity');
	}
}	
if(snb.hasClass('fixed')) {
	if(topPos < 400) {
		snb.removeClass('fixed');
	}
} else {
	if(topPos > 400) {
		snb.addClass('fixed');
	}
}
var topPos = $(document).scrollTop(),
	snb = $('.filter-panel'),
	h_navbar = $('.navbar-site').outerHeight(true), 
	h_heading = $('.heading-site').outerHeight(true), 
	h_fixed = h_navbar + h_heading + 50,
	h_fixed_200 = h_navbar + h_heading + 200,
	h_fixed_250 = h_navbar + h_heading + 200;
if(snb.hasClass('fixed')) {
	if(topPos < h_fixed_200) {
		snb.removeClass('fixed');
	} 
} else {
	if(topPos > h_fixed_200) {
		snb.addClass('fixed');
	}
};
if(snb.hasClass('opacity')) {
	if(topPos < h_fixed) {
		snb.removeClass('opacity');
	} 
} else {
	if(topPos > h_fixed) {
		snb.addClass('opacity');
	}
}	
if(snb.hasClass('scroll')) {
	if(topPos < h_fixed_250) {
		snb.removeClass('scroll');
	} 
} else {
	if(topPos > h_fixed_250) {
		snb.addClass('scroll');
	}
}	
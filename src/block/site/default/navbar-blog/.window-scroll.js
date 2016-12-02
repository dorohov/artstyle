var topPos = $(document).scrollTop(),
	snb = $('._nbb__block-inner'),
	h_navbar = $('.navbar-site').outerHeight(true), 
	h_blog = $('.blog-item.__index').outerHeight(true), 
	h_fixed = h_navbar + h_blog + 50;
if(snb.hasClass('fixed')) {
	if(topPos < h_fixed) {
		snb.removeClass('fixed');
	} 
} else {
	if(topPos > h_fixed) {
		snb.addClass('fixed');
	}
}	
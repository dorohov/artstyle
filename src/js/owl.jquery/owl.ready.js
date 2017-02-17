'use strict';
$(function() {
	//index
	$('._ipc__list').owlCarousel({
		margin: 20,
		items:8,	
		navText: [],
		nav: false,
		dots: false,
		responsive: {
			0:{
				items:3,
				dots: true,
			},
			767:{
				items:8,
			}
		}
	});	
});
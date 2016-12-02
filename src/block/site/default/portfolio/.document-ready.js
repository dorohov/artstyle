$('._czr__block-hover').on('mousemove', function(event){
	$(this).closest(".portfolio-item").addClass('onhover');	 
});
$('._czr__block-hover').on('mouseout', function(event){
	$(this).closest(".portfolio-item").removeClass('onhover');	
});
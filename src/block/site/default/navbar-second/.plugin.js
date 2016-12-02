(function() {
	"use strict";
	$(window).load(function(){		
		$("[data-toggle-rnav]").click(function() {
			var toggle_el = $(this).data("toggle-rnav"); 
			$(toggle_el).toggleClass("open");
			$(".navbar-site").toggleClass("navbar-site-right-open");
		});
	});
})();
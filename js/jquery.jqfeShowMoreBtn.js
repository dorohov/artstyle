/*
jquery-плагин
*/ 
(function($){
	
	
	var defaults = {
		plugin:{
			name:'jqfeShowMoreBtn',
			version:'0.1',
			mod_date:'06/05/2016 09:25'
		},
		class:{
			btn:'jqfeShowMoreBtn-btn',
			visible:'jqfeShowMoreBtn-visible',
			hidden:'jqfeShowMoreBtn-hidden',
		},
		options:{
			container:'.container',
			items:'.item',
			display:'block',
			count:5,
			css_hidden:{
				opacity:0,
			},
			css_visible:{
				opacity:1,
			},
			animation_time:5000,
		},
	};
	
	var methods={
		
		init:function(params){
			
			var ss = window.sessionStorage || null;
			
			var options = $.extend({}, defaults.options, params);
			this.data(defaults.plugin.name, options);
				
			// доступ к объекту через $(this)
			/*
			options = {
				
			}
			*/
			var el = $(this);
			if(el.hasClass(defaults.class.btn)) {
				el.off('click.jqfeShowMoreBtn');
			}
			
			var cont = $(options.container);
			var item_list = cont.find(options.items);
			
			item_list
				.removeClass(defaults.class.visible)
				.addClass(defaults.class.hidden)
				.css(options.css_hidden)
				.css({display:'none'})
				;
			
			if(ss) {
				
				var _ids = ss.getItem('jqfeShowMoreBtn.ids');
				
				if(_ids) {
					
					var _ids_arr = _ids.split(',');
					
					for(var _i = 0; _i < _ids_arr.length; _i++) {
						
						var _id = _ids_arr[_i];
						
						item_list
							.filter('[data-post-id="' + _id + '"]')
								
								.css({'display':options.display})
								.animate(options.css_visible, options.animation_time, function() {
									// Animation complete.
									$(this)
										.removeClass(defaults.class.hidden)
										.addClass(defaults.class.visible)
									;
								})
								;
						
					}
					
				}
				
			}
			
			el
				.data(defaults.plugin.name, options)
				.addClass(defaults.class.btn)
				;
			
			el.on('click.jqfeShowMoreBtn', function(event){
				event.preventDefault();
				
				var _ids = ss.getItem('jqfeShowMoreBtn.ids') || '';
				_ids = _ids.split(',');
				
				var to_show = item_list.filter('.' + defaults.class.hidden);
				
				if(to_show.size() > options.count) {
					
				} else {
					el.animate({
						opacity:0,
					}, options.animation_time, function() {
						// Animation complete.
						el
							.removeClass(defaults.class.btn)
							.empty()
							.remove();
					});
				}
				
				var __anim_el = function(i) {
					
					var item = to_show.eq(i);
					
					_ids.push(item.attr('data-post-id'));
					ss.setItem('jqfeShowMoreBtn.ids', _ids.join(','));
					
					item
						.css({'display':options.display})
						.animate(options.css_visible, options.animation_time, function() {
							// Animation complete.
							item
								.removeClass(defaults.class.hidden)
								.addClass(defaults.class.visible)
							;
						})
						;
					
				}
				
				for(var i = 0; i < options.count; i++) {
					
					__anim_el(i);
					
				}
				
			});
			
			return this;
		}
		
	};
	
	$.fn.jqfeShowMoreBtn = function(method){
		if(methods[method]) {
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		} else if(typeof method==='object' || !method) {
			return methods.init.apply(this,arguments);
		} else {
			$.error('Метод '+method+' в плагине не найден!');
		}
	};
	
})(jQuery);
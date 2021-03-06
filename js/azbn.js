$(function(){
	
	(function(){
		
		var id = parseInt($(document.body).attr('data-post-id') || 0);
		
		$('.navbar .navbar-nav a[data-post-id="' + id + '"]').closest('li').addClass('active');
		
	})();
	
	(function(){
		
		var smbtn = $('.azbn-jqfeShowMoreBtn-btn');
		
		smbtn
			.jqfeShowMoreBtn({
				container:'.azbn-jqfeShowMoreBtn-container',
				items:'.azbn-jqfeShowMoreBtn-item',
				display:'block',
				count:9,
				css_hidden:{
					opacity:0,
				},
				css_visible:{
					opacity:1,
				},
				animation_time:700,
			})
			.trigger('click')
		;
		
		if($('.portfolio-page-content').length) {
			
			var ss = window.sessionStorage || null;
			
			if(ss) {
				
				$('html, body').animate({
					scrollTop : parseInt(ss.getItem('portfolio.scroll_pos') || 0) + 'px',
				}, 350);
				
				$(window).on('scroll',function(event){
					
					ss.setItem('portfolio.scroll_pos', $(document).scrollTop());
					
				});
				
			}
			
		}
		
		/*
		var _pos = parseInt(ss.set('azbn.portfolio.scrollTop') || 0);
		
		console.log('On start azbn.portfolio.scrollTop', _pos);
		
		if(_pos) {
			
			$('html, body').animate({
				scrollTop : _pos,
			}, 350);
			
		} else {
			
			$('.azbn-jqfeShowMoreBtn-btn')
				
				.on('click.azbn', function(event){
					event.preventDefault();
					
					var btn = $(this);
					
					var pos = btn.offset().top;
					ss.set('azbn.portfolio.scrollTop', pos);
					
					console.log('On click azbn.portfolio.scrollTop', pos);
					
				})
				
				.jqfeShowMoreBtn({
					container:'.azbn-jqfeShowMoreBtn-container',
					items:'.azbn-jqfeShowMoreBtn-item',
					display:'block',
					count:9,
					css_hidden:{
						opacity:0,
					},
					css_visible:{
						opacity:1,
					},
					animation_time:700,
				})
				.trigger('click')
			;
			
		}
		*/
		
	})();
	
	/*
	(function(){
		
		if($('.portfolio-page-content').length) {
			
			setTimeout(function(){
				
				var ss = new jsSessionStorage();
				
				var btn = $('.azbn-jqfeShowMoreBtn-btn');
				
				var pos = parseInt(ss.get('azbn.portfolio.scrollTop')) || 0;
				
				var b_pos = btn.offset().top;
				
				while(b_pos < pos) {
					
					$('html, body').animate({
						scrollTop : b_pos,
					}, 111);
					btn.trigger('click');
					
					b_pos = btn.offset().top;
					
				}
				
				btn.data('calc-scroll', true)
				
			}, 300);
			
		}
		
	})();
	*/
	
	(function(){
		
		var ls = new jsLocalStorage();
		var o = ls.s2obj('portfolio.likes');
		
		if(o) {
			
			$('.portfolio-item-page-content .azbn-project-like-btn')
				.each(function(index){
					
					var btn = $(this);
					var post_id = parseInt(btn.attr('data-post-id') || 0);
					
					if(o[post_id]) {
						
						btn.addClass('is-active');
						
					}
					
				})
			;
			
		} else {
			
			ls.obj2s('portfolio.likes', {});
			
		}
		
	})();
	
	(function(){
		
		var ls = new jsLocalStorage();
		
		$('.portfolio-item-page-content .azbn-project-like-btn')
			.on('click.azbn', function(event){
				event.stopPropagation();
				event.preventDefault();
				
				var btn = $(this);
				var post_id = parseInt(btn.attr('data-post-id') || 0);
				
				var liked = btn.hasClass('is-active');
				var change = 0;
				
				if(liked) {
					
					$('.portfolio-item-page-content .azbn-project-like-btn').removeClass('is-active');//btn.removeClass('is-active');
					change = -1;
					
				} else {
					
					$('.portfolio-item-page-content .azbn-project-like-btn').addClass('is-active');//btn.addClass('is-active');
					change = 1;
					
				}
				
				$.post('/wp-admin/admin-ajax.php',
					{
						'action' : 'azbnajax_call',
						'method' : 'portfolio/like',
						'change' : change,
						'post_id' : post_id,
						'type' : 'json',
					},
					function(data){
						//console.warn(data);
						
						data = JSON.parse(data);
						
						if(data.response && data.response.data && data.response.data.item) {
							
							var item = data.response.data.item;
							
							var _count = $('.portfolio-item-page-content .azbn-project-like-btn').find('._count');//btn.find('._count');
							
							if(_count.length == 0) {
								_count = $('<span/>', {
										class : '_count',
								});
								_count.appendTo($('.portfolio-item-page-content .azbn-project-like-btn'));//btn
							}
							
							_count.html(item.like_count);
							
							var o = ls.s2obj('portfolio.likes');
							
							if(o[item.post_id]) {
								if(change == 1) {
									
								} else {
									delete o[item.post_id];
								}
							} else {
								if(change == 1) {
									o[item.post_id] = 1;
								} else {
									
								}
							}
							
							ls.obj2s('portfolio.likes', o);
							
						} else {
							console.warn('fail');
						}
						
					}
				);
				
			})
		;
		
	})();
	
	(function(){
		
		$(document.body).on('submit.azbn', '.azbn-form__default', {}, function(event){
			event.preventDefault();
			
			//var btn = $(this);
			var form = $(this);//btn.closest('form');
			var modal = form.closest('.modal');
			
			var sform = form.serialize();
			
			var params = $.extend({}, {
				'action' : 'azbnajax_call',
				'method' : 'form/save',
				'type' : 'json',
				'form' : sform,
			});
			
			$.post('/wp-admin/admin-ajax.php', params, function(data){
				
				form.trigger('reset');
				
				data = JSON.parse(data);
				
				$('#modal-finalFormModal-result .form-save-result').html(data.response.data.item.title);
				
				if(modal.length) {
					modal.modal('hide');
				}
				
				$('#modal-finalFormModal-result').modal('show');
				
			});
			
		});
		
		/*
		$(document.body).on('click.azbn', '.finalPanelModal', {}, function(event){
			event.preventDefault();
			
			var btn = $(this);
			var form = btn.closest('form');
			//var modal = btn.closest('.modal');
			
			var form_s = form.serialize();
			
			var params = $.extend({}, {
				'action' : 'azbnajax_call',
				'method' : 'form/save',
				'type' : 'json',
				'form' : form_s,
			});
			
			$.post('/wp-admin/admin-ajax.php', params, function(data){
				
				form.trigger('reset');
				
				data = JSON.parse(data);
				
				$('#modal-finalFormModal-result .form-save-result').html(data.response.data.item.title);
				
				//modal.modal('hide');
				
				$('#modal-finalFormModal-result').modal('show');
				
			});
			
		});
		*/
		
	})();
	
	(function(){
		/*
		$(document.body).on('mousedown', 'img', {}, function(event){
			event.preventDefault();
			if(event.button == 0){
				//Левая кнопка мыши
			} else if(event.button == 1){
				//Колесо
			} else if(event.button == 2){
				//Правая кнопка мыши
				//event.stopPropagation();
			}
			
		});
		
		window.oncontextmenu = (function(e){
			return false;
		});
		*/
	})();
	
});
(function(){
	var cols = $('._azbn_cols ._azbn_col');
	var item_list = $('._azbn_item-list');
	var items = item_list.find('._azbn_item');

	items.each(function(index){
		
		var item = $(this);
		var acol = cols.eq(0);
		//var _min = acol.height();
		var _min = 1000000;
		cols.each(function(_index){
			var col = $(this);
			var _h = col.height();
			if(_h < _min) {
				_min = _h;
				acol = col;
			}
			//alert(_h);
		});
		acol.append(item.detach());
		//.appendTo(acol);
		
	});

	cols.each(function(_index){
		$(this).find('._azbn_item').hide();
			//.eq(0).fadeIn('fast').end()
			//.eq(1).fadeIn('fast').end()
			//.eq(2).fadeIn('fast').end()
			//.eq(3).fadeIn('fast').end()
			//.eq(4).fadeIn('fast').end()
	});

	item_list.empty().remove();

	$(document.body).on('click', '._azbn_show-more-post', function(event){
		event.preventDefault();
		
		cols.each(function(_index){
			$(this).find('._azbn_item:hidden')
				.eq(0).fadeIn('fast').end()
				.eq(1).fadeIn('fast').end()
				.eq(2).fadeIn('fast').end()
				;
		});
		
		var _h = $('._azbn_cols ._azbn_item:hidden');
		if(_h.size() == 0) {
			$(this).parent().empty().remove();
		}
	});
	$('._azbn_show-more-post').trigger('click');

	/*
	$(document.body).on('submit', '.review-modal form', function(event){
		event.preventDefault();
		
		$.post('/wp-admin/admin-ajax.php',
			$(this).serialize(),
			function(data){
				$(this).trigger('reset');
				$('.review-modal input[name="phone"]').val('');
				console.log(data);
				$('.review-modal button.close[type="button"]').trigger('click');
			}
		);
		
		return false;
	});*/
} )();
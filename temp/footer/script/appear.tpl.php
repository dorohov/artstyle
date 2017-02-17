<?

?>
<script src="<?=$this->path('js');?>/jquery.appear.js" ></script>
<script>
	$(function(){
		
		$('.azbn-jqfeShowMoreBtn-btn').appear();
		
		$(document.body).on('appear', '.azbn-jqfeShowMoreBtn-btn', function(event, affected) {
			//alert(1);
			var block = $(this);
			
			block.trigger('click');
			
		});
		
	});
</script>
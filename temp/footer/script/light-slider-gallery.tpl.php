<?

?>
<link rel="stylesheet" type="text/css" href="<?=$this->path('css');?>/lightslider.css" />
<link rel="stylesheet" type="text/css" href="<?=$this->path('css');?>/lightgallery.css" />
<script type="text/javascript">
	$(document).ready(function() {
		
		var slides = $('#imageGallery').eq(0).find('._pipc__slider-item');
		
		$(document.body).on('azbn.setSliderCounters', null, {}, function(event, number, all){
			
			$('.azbn-project-slide-number').html(number);
			$('.azbn-project-slide-all').html(all);
			
		});		
		$('#imageGallery').css({
			opacity : 0,
		});
		if(window.location.hash == '#3d') {
			$('#imageGallery [data-image-type="photos"]').empty().remove();
		} else if(window.location.hash == '#photos') {
			$('#imageGallery [data-image-type="3d"]').empty().remove();
		}
		$('#imageGallery').css({
			opacity : 1,
		});
		
		$('#imageGallery').lightSlider({
			gallery:true,
			item:1,
			//loop:true,
			thumbItem:5,
			slideMargin:0,
			thumbMargin: 20,
			galleryMargin: 0, 
			enableDrag: false,
			currentPagerPosition:'middle',
			//adaptiveHeight:true,
			
			onSliderLoad: function(el) {
				el.lightGallery({
					selector: '#imageGallery .lslide',
					//showThumbByDefault: false,
					//height:'auto',
					download: false,
					//thumbContHeight : 50,
				});
				if (!device.mobile()) {							
					$("._pipc__cols-note").prependTo($(".lSSlideOuter"));
					$("._pipc__soc-block").prependTo($(".lSSlideWrapper"));
					$("._pipc__count-block").appendTo($(".lSSlideWrapper"));
				}; 
			}, 	  
			responsive : [
				{
					breakpoint:767,
					settings: {
						thumbItem:4
					}
				},
				{
					breakpoint:475,
					settings: {
						thumbItem:2
					}
				}
			]
		}); 
		
		$('.lSAction .lSPrev, .lSAction .lSNext').on('click', function(event){
			
			var active = slides.filter('.active');
			
			$(document.body).trigger('azbn.setSliderCounters',[slides.index(active) + 1, slides.length]);
			
		});
		
		$('.lSAction .lSPrev').trigger('click');
		
		$(window).trigger('resize');
		
	});
</script>
<!-- light Slider -->
<script src="<?=$this->path('plugins');?>/lightSlider/js/lightslider.min.js"></script>
<!-- light Gallery -->
<script src="<?=$this->path('plugins');?>/lightGallery/js/lightgallery.js"></script>
<script src="<?=$this->path('plugins');?>/lightGallery/js/lg-thumbnail.js"></script>
<script src="<?=$this->path('plugins');?>/lightGallery/js/lg-zoom.js"></script>
<?

$class_mod = '';

if($this->post['id'] == 9 || is_single()) {
	$class_mod = $class_mod . ' include-navbar-blog ';
}

?>

	
		<footer class="footer-site <?=$class_mod;?> ">
			<div class="container">
				<div class="row _fs__row">
					<div class="cols _fs__copyright-cols">
						&copy; 2014-2016. Студия дизайна Ирины Корчевой. Все права защищены.
					</div>
					
					<div class="cols _fs__contacts-cols">
						<div class="row _fs__contacts-row">
							<div class="cols">
								<div class="_fs__address _fs__icon"><?=contact('adr');?></div>
							</div>
							<div class="cols">
								<a href="tel:+<?=phone(contact('phone'));?>" class="_fs__phone _fs__icon"><?=contact('phone');?></a>
							</div>
							<div class="cols">
								<a href="mailto:<?=contact('email');?>" class="_fs__mailto _fs__icon"><?=contact('email');?></a>
							</div>

						</div>
					</div>
					<div class="cols _fs__dorohovdesign-cols">
						<div class="row _fs__dorohovdesign-row"> 
							<div class="cols">
								<div>Создание сайта</div>
							</div>
							<div class="cols">
								<div class="_fs__dorohovdesign__logo">
									<a href="http://www.dorohovdesign.ru/" target="_blank">
										<svg class="icon-svg icon-dorohovdesign" role="img">
											<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#dorohovdesign"></use>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	
	</div>
	
	<?
	//uslugi
	if($this->post['id'] == 7870) {
		$this->tpl('_/modals/order', array());
	}

	//otzyivyi
	if($this->post['id'] == 7879) {		
		$this->tpl('_/modals/reviews', array());
	}

	//kontaktyi
	if($this->post['id'] == 7) {
		$this->tpl('_/modals/question', array());
	}
	?>
	
	<?
	if($this->post['id'] == 7881) {
	
		$items = new WP_Query(array(
			'post_type' => 'azbnelement',
			'posts_per_page' => -1,
			'tax_query' => array(
				array(
					'taxonomy'	=>		'azbnelement_taxonomies',
					'field'		=>		'slug',
					'terms'		=>		array('vakansii'),
				)
			),
			'orderby' => 'menu_order',
			'order' => 'ASC',
		));
		
		while($items->have_posts()) {
			$items->the_post();
			
			$id = get_the_ID();

			$this->tpl('_/modals/vacancies', array());			
		}
		wp_reset_postdata();
		
	}
	?>
	
</div>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<script src="<?=$this->path('js');?>/jquery.min.js" ></script>
<script src="<?=$this->path('js');?>/bootstrap.min.js" ></script>
<script src="<?=$this->path('js');?>/jquery.bootstrap-autohidingnavbar.min.js" ></script>
<script src="<?=$this->path('js');?>/device.min.js" ></script>
<script src="<?=$this->path('js');?>/jsLocalStorage.js" ></script>
<script src="<?=$this->path('js');?>/jquery.jqfeShowMoreBtn.js" ></script>

<script src="<?=$this->path('js');?>/document-ready.js" ></script>

<script src="<?=$this->path('js');?>/azbn.js" ></script>
<script src="<?=$this->path('js');?>/svg4everybody.min.js" ></script>
<script>svg4everybody();</script>
<?
	//index
	if($this->post['id'] == 1) {
		$this->tpl('_/script/validationEngine', array());
		$this->tpl('_/script/owl', array());
	}
	//portfolio
	if($this->post['id'] == 5) {
		$this->tpl('_/script/appear', array());
	}
	//uslugi
	if($this->post['id'] == 7870) {
		$this->tpl('_/script/validationEngine', array());
	}
	//otzyivyi
	if($this->post['id'] == 7879) {
		$this->tpl('_/script/validationEngine', array());
	}
	//kontaktyi
	if($this->post['id'] == 7) {		
		$this->tpl('_/script/2gisMap', array());
		$this->tpl('_/script/validationEngine', array());
	}

	if(is_single() && get_post_type($this->post['id']) == 'post') {
		$this->tpl('_/script/lightgallery', array());

	} elseif(get_post_type($this->post['id']) == 'project') {
		//portfolio-item
		$this->tpl('_/script/validationEngine', array());
		$this->tpl('_/script/scrollbar', array());
		$this->tpl('_/script/light-slider-gallery', array());

	} elseif($this->post['id'] == 7888) {
		//steps
		$this->tpl('_/script/lightgallery-thumb', array());

	} elseif($this->post['id'] == 0) {
		$this->tpl('_/script/lightgallery', array());

	} elseif(is_tax(array('photocats'))) {
		//portfolio-tags
		$this->tpl('_/script/response', array());
		$this->tpl('_/script/lightgallery-tags', array());

	} elseif($this->post['id'] == 7881) {
		//o-nas
		$this->tpl('_/script/lightgallery-video', array());

	}
?>

<div class="modal fade" id="modal-finalFormModal-result" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog _rms__dialog">
		<div class="modal-content _rms__content">
			<div class="modal-body _rms__body" >
				<button type="button" class="btn-site btn-close modal-btn-close" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-block _rms__block">		
					<h3 class="modal-title _rms__title">Сообщение принято</h3>
					
					<div class="_vms__text-block form-site__note form-save-result " ></div>
					
				</div>
			</div>
		</div>
	</div>
</div>

<?
wp_footer();
?>

</body>
</html> 
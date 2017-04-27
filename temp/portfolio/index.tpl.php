<?
$__prefix = '_ppc__';

$projects = new WP_Query(array(
	'post_type' => 'project',
	'posts_per_page' => -1,
));

?>

<div class="container">
	
	<div class="portfolio-page-content content-block second"> 
		<h1 class="heading-site">Портфолио</h1>
		
		
		<?
		$this->tpl('portfolio/filter', array());
		?>
		
		
		<div class="row <?=$__prefix;?>row azbn-jqfeShowMoreBtn-container ">
			
			<?
			while($projects->have_posts()) {
				$projects->the_post();
				$id = get_the_ID();
				$link = l($id);
				$title = t($id);
				$preview = get_the_excerpt($id);
				$img = $this->Imgs->postImg($id, '600x380');
				if($img == '') {
					$img = 'http://placehold.it/600x380';
				}
				$tags = get_the_terms($id, 'photocats');
				
				$year = get_field('year', $id);
				//$size = get_field('size', $id);
				$town = get_field('town', $id);
				
				$_p_3d = get_field('3d', $id);
				$_p_photos = get_field('photos', $id);
				$_p_process = get_field('process', $id);
				
				if(is_array($_p_photos) && count($_p_photos)) {
					$link = l($id) . '?projectpart=photos';
				} else if(is_array($_p_3d) && count($_p_3d)) {
					$link = l($id) . '?projectpart=3d';
				} else if(is_array($_p_process) && count($_p_process)) {
					$link = l($id) . '?projectpart=process';
				}
				
			?>
			
			<div class="cols <?=$__prefix;?>cols azbn-jqfeShowMoreBtn-item " data-post-id="<?=$id;?>" >
				<div class="portfolio-item _czr__block-hover">
					<div class="portfolio-item__inner">
						<div class="portfolio-item__preview">
							<div class="portfolio-item__preview-inner" style="background-image: url(<?=$img;?>)"></div>
						</div>
						<div class="portfolio-item__note">
							<a href="<?=$link;?>" class="portfolio-item__link"></a>
							<div class="portfolio-item__note-top">
								<h3 class="portfolio-item__heading">
									<a href="<?=$link;?>">
										<?=$title;?>
									</a>
								</h3>
								<div class="portfolio-item__year">
									<?if($town != ''){?><?=$town;?><?}?>
									<?if($town != '' && $year != ''){?>, <?}?>
									<?if($year != ''){?><?=$year;?> <span>год</span><?}?>
								</div>
								
								<?
								if(count($tags)) {
								?>
								<!--<div class="portfolio-item__tags"> 
								<?
									foreach($tags as $tag){
										//if($tag->taxonomy == 'photocats'){
											$_link = get_category_link($tag->term_id);
											?>
									<a href="<?=$_link;?>" class="tags-item <?=get_field('bg-color', $tag);?> "><?=$tag->name;?></a>
											<?
										//}
									}
								?>
								</div>-->
								<?
								}
								?>
								
							</div>	
							<div class="portfolio-item__note-bottom">
								
								<?
								if(is_array($_p_3d) && count($_p_3d)) {
								?>
								<a href="<?=l($id);?>?projectpart=3d" class="btn-site btn-3d">Проект</a>
								<?
								}
								?>
								
								<?
								if(is_array($_p_photos) && count($_p_photos)) {
								?>
								<a href="<?=l($id);?>?projectpart=photos" class="btn-site btn-3d" >Реализация</a>
								<?
								}
								?>
								
								<?
								if(is_array($_p_process) && count($_p_process)) {
								?>
								<a href="<?=l($id);?>?projectpart=process" class="btn-site btn-3d" >Ход работ</a>
								<?
								}
								?>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<?
			}
			wp_reset_postdata();
			?>
			
		</div>
		<div class="<?=$__prefix;?>btn-block">
			<button type="button" class="btn-site btn-more btn-outline-blue azbn-jqfeShowMoreBtn-btn ">Загрузить больше работ</button>
		</div>
		
		
		<?
		$this->tpl('portfolio/tags', array());
		?>
		
		
	</div>
	
</div>
<?

$wpq = new WP_Query;

$__prefix = '_ptpc__';



$project_arr = array();
$project_list = $wpq->query(array(
	'post_type' => 'project',
	'posts_per_page' => -1,
));
if(count($project_list)) {
	foreach($project_list as $p) {
		$project_arr[$p->ID] = get_field('3d', $p->ID);
	}
}
//var_dump($project_arr);



$category = get_queried_object();

//$projects = array();
//$project_photos = array();
$photos = array();

while(have_posts()) {
	the_post();
	$id = get_the_ID();
	
	//echo get_post_type($id) . '<br />';
	
	switch(get_post_type($id)) {
		
		/*
		case 'project': {
			$projects[$id] = get_post($id);
			$project_photos[$id] = array();//array_merge(get_field('photos', $id), get_field('3d', $id));
			
			
			$__photos = array();//get_field('photos', $id);
			$__3d = get_field('3d', $id);
			
			if(count($__photos)) {
				foreach($__photos as $item) {
					$project_photos[$id][] = $item;
				}
			}
			if(count($__3d)) {
				foreach($__3d as $item) {
					$project_photos[$id][] = $item;
				}
			}
		}
		break;
		*/
		
		case 'photo': {
			//$photos[$id] = get_post($id);
			////$project_photos[$id][] = get_post($id);
			
			if(count($project_arr)) {
				foreach($project_arr as $p_id => $p_arr) {
					if(in_array($id, $p_arr)) {
						$photos[$id] = get_post($id);
						$photos[$id]->project_id = $p_id;
					}
				}
			}
			
		}
		break;
		
		default : {
			
		}
		break;
		
	}
	
}
wp_reset_postdata();

krsort($photos);

//shuffle($project_photos);

/*
if(count($photos)) {
	foreach($photos as $id => $p) {
		foreach($project_photos as $_id => $_photos) {
			
			//shuffle($project_photos[$_id]);
			
			if(in_array($id, $_photos)) {
				$photos[$id]->project_id = $_id;
			}
		}
	}
}
*/

//var_dump($project_photos);

?>

<div class="container">
	
	<div class="portfolio-item-page-content content-block second"> 
		<h1 class="heading-site"><?=$category->name;?></h1>
		
		<?
		if(count($photos)) {
		?>
		<div class="<?=$__prefix;?>slider" data-debug-photos-count="<?=count($photos);?>" >
			<div class="<?=$__prefix;?>slider-inner" id="imageGallery">
		<?
			foreach($photos as $p) {
				if(1) {
				//if($p->project_id) {
					//$img_md = $this->Imgs->postImg($p->ID, '1595x600');
					//$img_full = $this->Imgs->postImg($p->ID, '1595x600');
					//$img_x = $img_md;//'600x380';
					$img_thumb = 	$this->Imgs->postImg($p->ID, '200x150');
					$img_xs = 		$this->Imgs->postImg($p->ID, '9999x500');
					$img_sm = 		$this->Imgs->postImg($p->ID, '9999x675');
					$img_screen = 	$this->Imgs->postImg($p->ID, 'full');
					
				?>
				
				<div class="<?=$__prefix;?>slider-item" data-thumb="<?=$img_thumb;?>" data-src="<?=$img_screen;?>" data-post-id="<?=$p->ID;?>" >
					<img src="<?=$img_screen;?>" alt="">
					<!--<img src="<?=$img_xs;?>" data-src-0="<?=$img_xs;?>" data-src-768="<?=$img_sm;?>" data-src-1025="<?=$img_screen;?>" alt="<?=get_field('alt', $id);?>" />-->
					<a href="<?=l($p->project_id);?>?projectpart=3d" class="<?=$__prefix;?>slider-item-btn btn-site btn-blue-opacity btn-project _azbn__btn-project">Перейти к проекту</a>
				</div>
				
				<?
				}
			}
		?>
			</div>
		</div>
		<?
		}
		?>
		
		<?
		$this->tpl('portfolio/tags', array());
		?>
		
		
	</div>
	
</div>
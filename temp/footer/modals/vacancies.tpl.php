<?

?>
<div class="modal fade" id="modal-vacancies-item-<?=$id;?>" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog _vms__dialog">
		<div class="modal-content _vms__content">
			<div class="modal-body _vms__body" >
				<button type="button" class="btn-site btn-close modal-btn-close" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-block _vms__block">		
					<h3 class="modal-title _vms__title"><?=t($id);?></h3>
					<? if(get_field('salary', $id) != ''):?>
					<div class="_vms__cost">
						<?=get_field('salary', $id);?> руб.
					</div>
					<?endif;?>
					<div class="_vms__text-block">
						<?=c($id);?>
					</div>
					<button type="button" class="btn-site btn-vacancies btn-blue getModal" data-toggle="modal" data-target="#modal-vacancies-order-<?=$id;?>">Откликнуться</button>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="modal-vacancies-order-<?=$id;?>" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog _rms__dialog">
		<div class="modal-content _rms__content">
			<div class="modal-body _rms__body" >
				<button type="button" class="btn-site btn-close modal-btn-close" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-block _rms__block">		
					<h3 class="modal-title _rms__title">Откликнуться на вакансию!</h3>
					
					<form action="/formsave/" method="POST" class="form-site contacts-form"> 
						<input type="hidden" name="vac" value="<?=t($id);?>" />
						<div class="form-site__note ">Заполните форму и мы свяжимся с вами в ближайшее время.</div>
						<div class="row _rms__row">
							<div class="cols _rms__cols">
								<div class="_rms__input icon icon-user">
									<input type="text" name="name" class="_frs__form-control form-control validate[required]" id="f[name]" placeholder="Ваше имя">
								</div>	
							</div>
							<div class="cols _rms__cols">
								<div class="_rms__input icon icon-tel">
									<input type="text" name="phone" class="_frs__form-control form-control validate[required]" id="f[email]" placeholder="Ваш e-mail или телефон">
								</div>	
							</div>
							<div class="cols _rms__cols">
								<div class="_rms__input _rms__btn">
									<button type="submit" class="btn-site btn-blue btn-submit finalFormModal">Отправить</button>
								</div>	
							</div>
						</div>
					</form> 
					
				</div>
			</div>
		</div>
	</div>
</div>
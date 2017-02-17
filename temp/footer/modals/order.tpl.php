<?

?>
<div class="modal fade" id="modal-order" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog _rms__dialog">
		<div class="modal-content _rms__content">
			<div class="modal-body _rms__body" >
				<button type="button" class="btn-site btn-close modal-btn-close" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-block _rms__block">		
					<h3 class="modal-title _rms__title">Оставить заявку!</h3>
					
					<form action="/formsave/" method="POST" class="form-site contacts-form"> 
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
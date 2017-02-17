<?

?>
<script src="<?=$this->path('js');?>/validationEngine.jquery/jquery.validationEngine.min.js" ></script>
<script src="<?=$this->path('js');?>/validationEngine.jquery/jquery.validationEngine-ru.min.js" ></script>
<script>		
  	$(document).ready(function () {
		$("form.form-site").validationEngine(
			'attach', {
				promptPosition : "bottomLeft"
			}
		);
	});
</script>
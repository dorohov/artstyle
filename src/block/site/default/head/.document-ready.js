$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
$('.project-step-panel__item-note ul').addClass('ul-site');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('.navbar-project a[href="'+url+'"]').parent().addClass('active'); 
$('.tabs-block a[href="'+url+'"]').parent().addClass('active'); 
$('._ipc__carousel .item').eq(0).addClass('active');
$('._adpc__carousel .item').eq(0).addClass('active');
$('._ipc__carousel').carousel({
    interval : false
});

$('.text-block table').addClass('table table-bordered');
$('.text-block .table.table-bordered').parent().addClass('table-responsive');
$('.text-block img').parent().addClass('_tb__img'); 
$('.getModal').click(function(event){
	event.preventDefault();
	var btn = $(this);
	var trg = btn.attr('data-target') || '';
	btn.closest('.modal').modal('hide');
	setTimeout(function() {$(trg).modal('show');}, 500)
	//return false;
});
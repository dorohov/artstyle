$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$("._czr__block-hover").on("mousemove",function(o){$(this).closest(".blog-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(o){$(this).closest(".blog-item").removeClass("onhover")});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".project-step-panel__item-note ul").addClass("ul-site");var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('.navbar-project a[href="'+url+'"]').parent().addClass("active"),$('.tabs-block a[href="'+url+'"]').parent().addClass("active"),$("._ipc__carousel .item").eq(0).addClass("active"),$("._adpc__carousel .item").eq(0).addClass("active"),$("._ipc__carousel").carousel({interval:!1}),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none"}),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title=this.title}}),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"}),retinajs(),$("._gpc__owl").owlCarousel({loop:!0,autoplay:!0,items:1,nav:!0,autoplayHoverPause:!0,animateOut:"slideOutUp",animateIn:"slideInUp"});

$("._czr__block-hover").on("mousemove",function(o){$(this).closest(".portfolio-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(o){$(this).closest(".portfolio-item").removeClass("onhover")});
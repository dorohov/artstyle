$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
!function(){var e=$("._azbn_cols ._azbn_col"),n=$("._azbn_item-list"),t=n.find("._azbn_item");t.each(function(n){var t=$(this),a=e.eq(0),i=1e6;e.each(function(e){var n=$(this),t=n.height();t<i&&(i=t,a=n)}),a.append(t.detach())}),e.each(function(e){$(this).find("._azbn_item").hide()}),n.empty().remove(),$(document.body).on("click","._azbn_show-more-post",function(n){n.preventDefault(),e.each(function(e){$(this).find("._azbn_item:hidden").eq(0).fadeIn("fast").end().eq(1).fadeIn("fast").end().eq(2).fadeIn("fast").end()});var t=$("._azbn_cols ._azbn_item:hidden");0==t.size()&&$(this).parent().empty().remove()}),$("._azbn_show-more-post").trigger("click")}();
$("._czr__block-hover").on("mousemove",function(o){$(this).closest(".blog-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(o){$(this).closest(".blog-item").removeClass("onhover")});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".project-step-panel__item-note ul").addClass("ul-site");var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('.navbar-project a[href="'+url+'"]').parent().addClass("active"),$('.tabs-block a[href="'+url+'"]').parent().addClass("active"),$("._ipc__carousel .item").eq(0).addClass("active"),$("._adpc__carousel .item").eq(0).addClass("active"),$("._ipc__carousel").carousel({interval:!1}),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"}),$("._ipc__list").owlCarousel({margin:20,items:8,navText:[],nav:!1,dots:!1,responsive:{0:{items:3,dots:!0},767:{items:8}}});

$("._czr__block-hover").on("mousemove",function(o){$(this).closest(".portfolio-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(o){$(this).closest(".portfolio-item").removeClass("onhover")});
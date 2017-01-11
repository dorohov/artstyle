'use strict';


window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}


function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isLG()&&(n="lg"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t.default.push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var r=0;r<e.__resizefunctions[n.type].default.length;r++){var t=e.__resizefunctions[n.type].default[r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery);
!function(){"use strict";$(window).load(function(){$("[data-toggle-nav]").click(function(){var a=$(this).data("toggle-nav");$(a).toggleClass("open-sidebar")}),$("[data-collapse-nav]").click(function(){var a=$(this).data("collapse-nav");$(a).toggleClass("open")}),$("[data-body]").click(function(){var a=$(this).data("body");$(a).toggleClass("open-navbar")})})}();
!function(){"use strict";$(window).load(function(){$("[data-toggle-rnav]").click(function(){var t=$(this).data("toggle-rnav");$(t).toggleClass("open"),$(".navbar-site").toggleClass("navbar-site-right-open")})})}();


$(function() {
	
	/*
	Создание триггеров на элементы, в основном, на body
	*/
	$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init");var e=(new Date).getTime();$(document.body).attr("data-created_at",e)}),$(document.body).on("fecss.window.unload",null,{},function(o,e){console.log("body trigger:fecss.window.unload: "+JSON.stringify(e))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,e){console.log("body trigger:fecss.keydown: "+JSON.stringify(e))}),$(document.body).on("DOMSubtreeModified",null,{},function(o,e){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(o){-o.originalEvent.deltaY||o.originalEvent.detail||o.originalEvent.wheelDelta});
$(document.body).on("click.fecss.page-loader.close-loader",".page-loader .close-loader",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.page-loader.close-loader"),$(".page-loader").removeClass("active")});
	
	
	/*
	Событие смены класса body
	*/
	$(document.body).on('changeClass', null, {} ,function(event, event_action){
		// event_action = add || remove || toggle
		
		$(function(){});
	});
	
	
	/*
	События смены класса у любого элемента
	*/
		
	
	
	/*
	Основная логика сайта
	*/
	$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(document.body).on("click.fecss",".page-loader.active ._czr__preloader-process-container ._czr__preloader-process-level",function(e){e.preventDefault(),$(".page-loader").data("window-can-close-it",!0).data("counter-can-close-it",!0).trigger("fecss.can-close-it")}),$(document.body).on("fecss.can-close-it",".page-loader",function(e){e.preventDefault(),$(this).data("counter-can-close-it")&&$(this).data("window-can-close-it")&&$(this).removeClass("active")}),$(window).load(function(e){$(".page-loader").data("window-can-close-it",!0).trigger("fecss.can-close-it"),$(".page-loader ._czr__preloader-process-container ._czr__preloader-process-level").data("fast-page-loading",!0)}),$(function(){var e=$(".page-loader.active"),a=$("._czr__preloader-process-container ._czr__preloader-process-level",e).eq(0);if(a.size()){var o=0;a.css({width:o+"%"}).attr("data-pos",o);var t=setInterval(function(){var e=Math.random();e>.5&&o<99?(o++,$("._azbn__preloader-percent").text(o),a.data("fast-page-loading")&&(o+=5),a.css({width:o+"%"}).attr("data-pos",o)):o>98&&(clearInterval(t),$(".page-loader").data("counter-can-close-it",!0).trigger("fecss.can-close-it"))},42)}});
$("._czr__block-hover").on("mousemove",function(o){$(this).closest(".blog-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(o){$(this).closest(".blog-item").removeClass("onhover")});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".project-step-panel__item-note ul").addClass("ul-site");var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('.navbar-project a[href="'+url+'"]').parent().addClass("active"),$('.tabs-block a[href="'+url+'"]').parent().addClass("active"),$("._ipc__carousel .item").eq(0).addClass("active"),$("._adpc__carousel .item").eq(0).addClass("active"),$("._ipc__carousel").carousel({interval:!1}),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"}),$("._ipc__list").owlCarousel({margin:20,items:8,navText:[],nav:!1,dots:!1,responsive:{0:{items:3,dots:!0},767:{items:8}}}),$(".getModal").click(function(a){a.preventDefault();var e=$(this),t=e.attr("data-target")||"";e.closest(".modal").modal("hide"),setTimeout(function(){$(t).modal("show")},500)});

$("._czr__block-hover").on("mousemove",function(o){$(this).closest(".portfolio-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(o){$(this).closest(".portfolio-item").removeClass("onhover")});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});
!function(){var e=$("._azbn_cols ._azbn_col"),n=$("._azbn_item-list"),t=n.find("._azbn_item");t.each(function(n){var t=$(this),a=e.eq(0),i=1e6;e.each(function(e){var n=$(this),t=n.height();t<i&&(i=t,a=n)}),a.append(t.detach())}),e.each(function(e){$(this).find("._azbn_item").hide()}),n.empty().remove(),$(document.body).on("click","._azbn_show-more-post",function(n){n.preventDefault(),e.each(function(e){$(this).find("._azbn_item:hidden").eq(0).fadeIn("fast").end().eq(1).fadeIn("fast").end().eq(2).fadeIn("fast").end()});var t=$("._azbn_cols ._azbn_item:hidden");0==t.size()&&$(this).parent().empty().remove()}),$("._azbn_show-more-post").trigger("click")}();
	
	
	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		$(function(){var s={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},w={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},i="window-width",d="window-height",h=$(window).outerWidth(!0),m=$(window).outerHeight(!0),a=$("html body").eq(0);h<s.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-xs"),h>s.sm.min&&h<s.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-sm"),h>s.md.min&&h<s.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-md"),h>s.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),i="window-width-lg"),m<w.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-xs"),m>w.sm.min&&m<w.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-sm"),m>w.md.min&&m<w.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-md"),m>w.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),d="window-height-lg"),$("html body").eq(0).addClass(i).addClass(d)});
var h_window=$(window).height(),w_window=$(window).width(),h_navbar=$(".navbar-site").outerHeight(!0),h_header=$(".header-site").outerHeight(!0),h_heading=$(".heading-site").outerHeight(!0),w_news_preview=$(".news-item__preview").outerWidth(!0),h_news_block=$(".news-block").outerHeight(!0),h_footer=$(".footer-site").outerHeight(!0),h_content_index=h_window-h_navbar,h_content_scroller=h_window-h_navbar-h_footer,h_content_scroller_sm=h_window-h_header-h_footer-100,h_map=h_window-h_navbar-h_footer-h_heading,h_team=h_window-h_footer,h_content=h_window-h_navbar-h_footer;device.tablet()&&($("._msp__block .scroller").mCustomScrollbar(),$(".index-page-content").css("min-height",h_content_index),$(".content-block.second").css("min-height",h_content_scroller_sm),$("._adpc__row").css("min-height",h_content_scroller_sm),$("._gpc__preview-cols").css("max-width",w_window)),device.mobile()?$(".second-page").css("min-height",h_window):($("._adpc__carousel").carousel({interval:!1}),$(".twoGIS-map__block").css("height",h_map)),device.mobile()||device.tablet()?($(".navbar").addClass("navbar-fixed-top"),$(".owl-slider ul").owlCarousel({margin:0,loop:!0,items:1,navText:[],smartSpeed:500,autoplayTimeout:1e4,nav:!0,dots:!1})):($(".content-block.second").css("min-height",h_content_scroller),$(".scroller").mCustomScrollbar(),$("._atpc__heading").prependTo($("._atpc__tab-pane-cols-right")),$(".error-page-content").css("height",h_content_scroller)),$(".navbar-fixed-top").autoHidingNavbar(),$(".news-item__preview a").css("height",w_news_preview);
	}).trigger('resize');
	
	
	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		var topPos=$(document).scrollTop(),snb=$(".filter-panel"),h_navbar=$(".navbar-site").outerHeight(!0),h_heading=$(".heading-site").outerHeight(!0),h_fixed=h_navbar+h_heading+50,h_fixed_200=h_navbar+h_heading+200,h_fixed_250=h_navbar+h_heading+200;snb.hasClass("fixed")?topPos<h_fixed_200&&snb.removeClass("fixed"):topPos>h_fixed_200&&snb.addClass("fixed"),snb.hasClass("opacity")?topPos<h_fixed&&snb.removeClass("opacity"):topPos>h_fixed&&snb.addClass("opacity"),snb.hasClass("scroll")?topPos<h_fixed_250&&snb.removeClass("scroll"):topPos>h_fixed_250&&snb.addClass("scroll");
var topPos=$(document).scrollTop(),snb=$(".navbar-site.scroll");snb.hasClass("scroll-navbar")?topPos<500&&snb.removeClass("scroll-navbar"):topPos>500&&snb.addClass("scroll-navbar"),snb.hasClass("opacity")?topPos<200&&snb.removeClass("opacity"):topPos>200&&snb.addClass("opacity"),snb.hasClass("fixed")?topPos<400&&snb.removeClass("fixed"):topPos>400&&snb.addClass("fixed");
var topPos=$(document).scrollTop(),snb=$("._nbb__block-inner"),h_navbar=$(".navbar-site").outerHeight(!0),h_blog=$(".blog-item.__index").outerHeight(!0),h_fixed=h_navbar+h_blog+50;snb.hasClass("fixed")?topPos<h_fixed&&snb.removeClass("fixed"):topPos>h_fixed&&snb.addClass("fixed");

	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	
	/*
	Событие инициализации fecss
	*/
	$(document.body).trigger('fecss.init');
	
	
});
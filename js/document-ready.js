"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var s="noname";return e.isXS()?s="xs":e.isSM()?s="sm":e.isMD()?s="md":e.isLG()&&(s="lg"),s},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var s="noname";return e.isPortrait()?s="portrait":e.isLandscape()&&(s="landscape"),s},e.is=function(s){return s==e.screenIs()||s==e.orientationIs()},e.onResize=function(s,o){if(s.type){var t=e.__resizefunctions[s.type];s.orientation?t[s.orientation].push(o):t.default.push(o)}},e.resizeCall=function(s){if(s.type){if(e.__resizefunctions[s.type].default)for(var o=0;o<e.__resizefunctions[s.type].default.length;o++){var t=e.__resizefunctions[s.type].default[o];t(s)}if(e.__resizefunctions[s.type][s.orientation])for(var o=0;o<e.__resizefunctions[s.type][s.orientation].length;o++){var t=e.__resizefunctions[s.type][s.orientation][o];t(s)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,s,o,t,i){console.log("Error FECSS: "+s+":"+o+":"+t+": "+JSON.stringify(e)+"\n"+JSON.stringify(i))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var s=jQuery.fn.addClass,o=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var o=s.apply(this,arguments);return e(this).trigger("changeClass",["add"]),o},e.fn.removeClass=function(){var s=o.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),s},e.fn.toggleClass=function(){var s=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),s}}(jQuery),!function(){$(window).load(function(){$("[data-toggle-nav]").click(function(){var e=$(this).data("toggle-nav");$(e).toggleClass("open-sidebar")}),$("[data-collapse-nav]").click(function(){var e=$(this).data("collapse-nav");$(e).toggleClass("open")}),$("[data-body]").click(function(){var e=$(this).data("body");$(e).toggleClass("open-navbar")})})}(),!function(){$(window).load(function(){$("[data-toggle-rnav]").click(function(){var e=$(this).data("toggle-rnav");$(e).toggleClass("open"),$(".navbar-site").toggleClass("navbar-site-right-open")})})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var s=(new Date).getTime();$(document.body).attr("data-created_at",s)}),$(document.body).on("fecss.window.unload",null,{},function(e,s){console.log("body trigger:fecss.window.unload: "+JSON.stringify(s))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,s){console.log("body trigger:fecss.keydown: "+JSON.stringify(s))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,s){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),$(document.body).on("changeClass",null,{},function(e,s){$(function(){})}),$(function(){var e="noname-browser",s=navigator.userAgent.toLowerCase();s.indexOf("msie")!=-1&&(e="msie"),s.indexOf("trident")!=-1&&(e="msie"),s.indexOf("konqueror")!=-1&&(e="konqueror"),s.indexOf("firefox")!=-1&&(e="firefox"),s.indexOf("safari")!=-1&&(e="safari"),s.indexOf("chrome")!=-1&&(e="chrome"),s.indexOf("chromium")!=-1&&(e="chromium"),s.indexOf("opera")!=-1&&(e="opera"),s.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),$("._czr__block-hover").on("mousemove",function(e){$(this).closest(".blog-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(e){$(this).closest(".blog-item").removeClass("onhover")}),$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".project-step-panel__item-note ul").addClass("ul-site");var e=window.location.pathname;$('.navbar-nav a[href="'+e+'"]').parent().addClass("active"),$('.navbar-project a[href="'+e+'"]').parent().addClass("active"),$('.tabs-block a[href="'+e+'"]').parent().addClass("active"),$("._ipc__carousel .item").eq(0).addClass("active"),$("._adpc__carousel .item").eq(0).addClass("active"),$("._ipc__carousel").carousel({interval:!1}),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"}),$("._ipc__list").owlCarousel({margin:20,items:8,navText:[],nav:!1,dots:!1,responsive:{0:{items:3,dots:!0},767:{items:8}}}),$(".getModal").click(function(e){e.preventDefault();var s=$(this),o=s.attr("data-target")||"";s.closest(".modal").modal("hide"),setTimeout(function(){$(o).modal("show")},500)}),$("._czr__block-hover").on("mousemove",function(e){$(this).closest(".portfolio-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(e){$(this).closest(".portfolio-item").removeClass("onhover")}),$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var s=$(this),o=$(s.attr("href")).eq(0),t=parseInt(s.attr("data-scrollto-diff"))||0,i=parseInt(s.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:o.offset().top+t},i)}),!function(){var e=$("._azbn_cols ._azbn_col"),s=$("._azbn_item-list"),o=s.find("._azbn_item");o.each(function(s){var o=$(this),t=e.eq(0),i=1e6;e.each(function(e){var s=$(this),o=s.height();o<i&&(i=o,t=s)}),t.append(o.detach())}),e.each(function(e){$(this).find("._azbn_item").hide()}),s.empty().remove(),$(document.body).on("click","._azbn_show-more-post",function(s){s.preventDefault(),e.each(function(e){$(this).find("._azbn_item:hidden").eq(0).fadeIn("fast").end().eq(1).fadeIn("fast").end().eq(2).fadeIn("fast").end()});var o=$("._azbn_cols ._azbn_item:hidden");0==o.size()&&$(this).parent().empty().remove()}),$("._azbn_show-more-post").trigger("click")}(),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},o="window-width",t="window-height",i=$(window).outerWidth(!0),n=$(window).outerHeight(!0),a=$("html body").eq(0);i<e.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),o="window-width-xs"),i>e.sm.min&&i<e.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),o="window-width-sm"),i>e.md.min&&i<e.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),o="window-width-md"),i>e.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),o="window-width-lg"),n<s.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),t="window-height-xs"),n>s.sm.min&&n<s.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),t="window-height-sm"),n>s.md.min&&n<s.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),t="window-height-md"),n>s.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),t="window-height-lg"),$("html body").eq(0).addClass(o).addClass(t)});var s=$(window).height(),o=$(window).width(),t=$(".navbar-site").outerHeight(!0),i=$(".header-site").outerHeight(!0),n=$(".heading-site").outerHeight(!0),a=$(".news-item__preview").outerWidth(!0),r=($(".news-block").outerHeight(!0),$(".footer-site").outerHeight(!0)),l=s-t,d=s-t-r,c=s-i-r-100,h=s-t-r-n;device.tablet()&&($("._msp__block .scroller").mCustomScrollbar(),$(".index-page-content").css("min-height",l),$(".content-block.second").css("min-height",c),$("._adpc__row").css("min-height",c),$("._gpc__preview-cols").css("max-width",o)),device.mobile()?$(".second-page").css("min-height",s):($("._adpc__carousel").carousel({interval:!1}),$(".twoGIS-map__block").css("height",h)),device.mobile()||device.tablet()?($(".navbar").addClass("navbar-fixed-top"),$(".owl-slider ul").owlCarousel({margin:0,loop:!0,items:1,navText:[],smartSpeed:500,autoplayTimeout:1e4,nav:!0,dots:!1})):($(".content-block.second").css("min-height",d),$(".scroller").mCustomScrollbar(),$("._atpc__heading").prependTo($("._atpc__tab-pane-cols-right")),$(".error-page-content").css("height",d)),$(".navbar-fixed-top").autoHidingNavbar(),$(".news-item__preview a").css("height",a)}).trigger("resize"),$(window).on("scroll",function(e){var s=$(document).scrollTop(),o=$(".filter-panel"),t=$(".navbar-site").outerHeight(!0),i=$(".heading-site").outerHeight(!0),n=t+i+50,a=t+i+200,r=t+i+200;o.hasClass("fixed")?s<a&&o.removeClass("fixed"):s>a&&o.addClass("fixed"),o.hasClass("opacity")?s<n&&o.removeClass("opacity"):s>n&&o.addClass("opacity"),o.hasClass("scroll")?s<r&&o.removeClass("scroll"):s>r&&o.addClass("scroll");var s=$(document).scrollTop(),o=$(".navbar-site.scroll");o.hasClass("scroll-navbar")?s<500&&o.removeClass("scroll-navbar"):s>500&&o.addClass("scroll-navbar"),o.hasClass("opacity")?s<200&&o.removeClass("opacity"):s>200&&o.addClass("opacity"),o.hasClass("fixed")?s<400&&o.removeClass("fixed"):s>400&&o.addClass("fixed");var s=$(document).scrollTop(),o=$("._nbb__block-inner"),t=$(".navbar-site").outerHeight(!0),l=$(".blog-item.__index").outerHeight(!0),n=t+l+50;o.hasClass("fixed")?s<n&&o.removeClass("fixed"):s>n&&o.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});
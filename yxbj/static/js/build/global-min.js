!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){b.exports=function(){"use strict";var a,b,c=window.navigator.userAgent,d={};return c.match(/(iPhone)/)?a="iPhone":c.match(/(iPad)/)?a="iPad":c.match(/(iPod)/)?a="iPod":c.match(/(BlackBerry|BB10)/)?a="BlackBerry":c.match(/(IEMobile)/)?a="WindowsMobile":c.match(/(Android)/)?a="Android":c.match(/(Macintosh)/)?a="Macintosh":c.match(/(Windows)/)?a="Windows":c.match(/(Linux)/)&&(a="Linux"),c.indexOf("OPR")>0||c.indexOf("Opera")>0?b="Opera":c.indexOf("Chrome")>0?b="Chrome":c.indexOf("Firefox")>0?b="Firefox":c.indexOf("Safari")>0?b="Safari":c.indexOf("MSIE")>0&&(b="IE"),d={device:a,browser:b}}},{}],2:[function(a,b,c){var c=b.exports=function(a){"use strict";a||(a={}),"string"==typeof a&&(a={cookie:a}),void 0===a.cookie&&(a.cookie="");var b={};return b.get=function(b){for(var c=a.cookie.split(/;\s*/),d=0;d<c.length;d++){var e=c[d].split("="),f=unescape(e[0]);if(f===b)return unescape(e[1])}},b.set=function(b,c,d){d||(d={});var e=escape(b)+"="+escape(c);return d.expires&&(e+="; expires="+d.expires),d.domain&&(e+="; domain="+d.domain),d.path&&(e+="; path="+escape(d.path)),a.cookie=e,e},b};if("undefined"!=typeof document){var d=c(document);c.get=d.get,c.set=d.set}},{}],3:[function(a,b,c){$.easing.jswing=$.easing.swing,$.extend($.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return $.easing[$.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-$.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?.5*$.easing.easeInBounce(a,2*b,0,d,e)+c:.5*$.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}})},{}],4:[function(a,b,c){var c=b.exports=function(a){a||(a={}),"string"==typeof a&&(a={cookie:a}),void 0===a.cookie&&(a.cookie="");var b={};return b.get=function(b){for(var c=a.cookie.split(/;\s*/),d=0;d<c.length;d++){var e=c[d].split("="),f=unescape(e[0]);if(f===b)return unescape(e[1])}},b.set=function(b,c,d){d||(d={});var e=escape(b)+"="+escape(c);return d.expires&&(e+="; expires="+d.expires),d.path&&(e+="; path="+escape(d.path)),a.cookie=e,e},b};if("undefined"!=typeof document){var d=c(document);c.get=d.get,c.set=d.set}},{}],5:[function(a,b,c){!function(b){"use strict";var c,d,e,f,g=b("body").attr("data-country"),h=b("body").attr("data-lang"),i=a("./is-eu"),j=a("./cookie"),k=j.get("cookiebanner");i(g)&&void 0===k&&("en"!==h&&"ja"!==h?(f="/intl/"+h+"/content/eu-cookie-banner.json",e="/intl/"+h):"ja"===h?(f="/intl/jp/content/eu-cookie-banner.json",e="/intl/jp"):(f="/content/eu-cookie-banner.json",e=""),b.ajax({type:"POST",url:f,dataType:"json",cache:!1,async:!1,success:function(a){c=a[0].banner_localizable,d=a[0].link,c=c.replace("{{link}}",'<a href="'+e+d+'">').replace("{{/link}}","</a>"),b("body").prepend('<div class="eu-cookie-banner"><div class="row"><span class="close-banner">Close</span>'+c+"</div></div>").fadeIn(),j.set("cookiebanner",!0,365),b(".close-banner").on("click",function(){b(".eu-cookie-banner").hide()})}}))}(jQuery)},{"./cookie":4,"./is-eu":9}],6:[function(a,b,c){!function(a){"use strict";a("body").on("click",".click_tracking",function(){var b=a(this).attr("data-action"),c=a(this).attr("data-label");void 0===b&&(b="click");var d=a(this).attr("data-category");void 0===d?ga("send","event","Click Event",b,c):ga("send","event",d,b,c)}),a(".exit_tracking").on("click",function(){var b=a(this).attr("data-action"),c=a(this).attr("data-label");void 0===b&&(b="Exit"),ga("send","event","Exit Links",b,c)}),a(".download_tracking").on("click",function(){var b=a(this).attr("data-action"),c=a(this).attr("data-label");void 0===b&&(b="Download"),ga("send","event","Exit Links",b,c)}),a(".promo_tracking").on("click",function(){var b=a(this).attr("data-action"),c=a(this).attr("data-label");void 0===b&&(b=c),ga("send","event","Promo Click",b,c)}),a(".webinar_tracking").on("click",function(){var b=a(this).attr("data-action"),c=a(this).attr("data-label"),d=a(this).attr("href");d=d.replace("http://",""),d=d.replace("pages.evernote.com/",""),void 0===b&&(b="Webinar"),void 0===c&&(c=""),ga("send","event","Exit Links",b,c+" "+d)}),a(".download_app_tracking").on("click",function(){var b=a(this).attr("data-action"),c=a(this).attr("href");c=c.replace("/./download/get.php?file=",""),ga("send","event","Exit Links",b,c)}),a(".a-b-click-event").on("click",function(){var b=a(this).attr("data-category"),c=a(this).attr("data-action"),d=a(this).attr("data-label");ga("send","event",b,c,d)}),a(".continue-ab-click").on("click",function(){var b=a(this).attr("data-category"),c=a(this).attr("data-action"),d=a(this).attr("data-label");ga("set","dimension8","1"),ga("send","event",b,c,d)}),a("#premium-video").on("click",function(){ga("send","event","Click Event","Video Click","Premium Video")})}(jQuery)},{}],7:[function(a,b,c){!function(a){"use strict";function b(){f.addClass(h),g.css("display","block"),setTimeout(function(){g.addClass(h),a("body").css({overflow:"hidden"})},1)}function c(){f.removeClass(h),g.removeClass(h),a("body").css({overflow:"scroll"}),setTimeout(function(){g.css("display","none")},200)}var d=a(".js-global-menu-open"),e=a(".js-global-menu-close"),f=a(".js-global-menu-container"),g=a(".js-global-menu"),h="mobile-visible";d.on("click",b),e.on("click",c)}(jQuery)},{}],8:[function(a,b,c){!function(b){"use strict";function c(a){l=b(window).width()<=768}function d(){if(m===!1?(b(".drawer-nav a").attr("tabindex",1).focus(),b("#header-menu").hide(),b(".cta").hide()):(b("#content h1").attr("tabindex",0).focus(),b("#header-menu").show(),b(".cta").show()),l===!1)m===!1?(b(".drawer-nav").show().animate({right:"-100px"},{duration:"500",easing:"easeOutSine"}),m=!0):(b(".drawer-nav").animate({right:k},{duration:"500",easing:"easeInSine"}).hide(),m=!1);else{var a=b(window).width();m===!1?(b(".container").css({overflow:"hidden"}),b(".drawer-nav").css({width:a,right:"0"}).fadeIn(),b("footer").hide(),m=!0):(b(".drawer-nav").fadeOut().promise().done(function(){b(".drawer-nav").css({right:k})}),b(".container").css({overflow:"auto"}),b("footer").show(),m=!1)}}function e(a){b.ajax({type:"POST",url:"https://evernote.com/products/download_info.php",dataType:"json",data:{deviceType:a,productType:"evernote",language:i},cache:!1,success:function(a){b(".download").attr("href",a.download_link)}})}var f,g,h,i=b("body").attr("data-lang"),j=!1,k="-50%",l=!1,m=!1,n=a("./cookie");window.svgCSS=window.svgCSS?window.svgCSS:"global-svg.css",b("body").hasClass("china_site")&&(j=!0),"en"!==i&&j!==!0||(i=""),j===!1&&window.location.href.indexOf("local")<-1&&(f=window.location.href.indexOf("stage")>-1?"https://stage.evernote.com/CorpSiteUserVerification.action":"https://www.evernote.com/CorpSiteUserVerification.action",b.ajax({type:"POST",url:f,dataType:"json",cache:!1,xhrFields:{withCredentials:!0},success:function(a){g=a.loggedIn,h=a.userType,g===!0&&n.set("type",h,"path=/")}}));var o=a("device-detect")();"Android"!==o.device&&"iPhone"!==o.device&&"iPod"!==o.device||b(".js-sign-in-menu").remove(),c(),b(window).bind("resize",c);var p=navigator.userAgent,q={ios:p.match(/(iPhone|iPod|iPad)/),iphone:p.match(/(iPhone)/),ipad:p.match(/(iPad)/),ipod:p.match(/(iPod)/),blackberry:p.match(/(BlackBerry|BB10)/),android:p.match(/Android/),mac:p.match(/Macintosh/),windows:p.match(/Windows/)};b(".download").length>0&&(q.android?e("android"):q.ipad?e("ipad"):q.ipod?e("ipod"):q.iphone?e("iphone"):q.blackberry&&e("blackberry")),b("#header-menu, .drawer-nav .close").on("click",function(){return d(),!1}),b("body").on("keydown",function(a){27===a.keyCode&&m===!0&&d()}),b("html").click(function(){m===!0&&d()}),b(".drawer-nav").click(function(a){a.stopPropagation()}),b(".js-download-cta").on("click",function(){n.set("download",!0)})}(jQuery)},{"./cookie":4,"device-detect":1}],9:[function(a,b,c){b.exports=function(a){var b=["TR","CH","BE","AT","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IS","IT","LV","LT","LU","MT","NL","NO","PL","PT","RO","SK","SI","ES","SE","UK"];return $.inArray(a,b)>-1}},{}],10:[function(a,b,c){!function(a){"use strict";function b(a){var b=window.location.pathname;b=b.replace(/^\/intl\/.*?\//,"/"),b=b.replace(/^\//,a),b+=window.location.search,b+=window.location.hash,b.indexOf("index2")!==-1&&(b=b.replace(new RegExp("index2","g"),"index")),b.indexOf("index3")!==-1&&(b=b.replace(new RegExp("index3","g"),"index")),"/"===a&&""===window.location.search&&(b+="?noredirect"),document.cookie="canredirect="+escape(b)+"; path=/",window.location.href=b}function c(){a("#language_picker2").appendTo(".miscellaneous"),a(".help-translate").insertAfter(".preferred-language")}c(),a(".preferred-language").on("click",function(){a(".language-dropdown").hasClass("expanded")?a(".language-dropdown").hide().removeClass("expanded"):a(".language-dropdown").show().addClass("expanded")}),a(".language-item").on("click",function(){var c=a(this).data("value");return c&&b(c),!0})}(jQuery)},{}],11:[function(a,b,c){!function(b){"use strict";var c,d,e,f,g,h,i=b("body").attr("data-lang"),j=encodeURI(document.URL),k=a("mmm-cookies"),l=k.get("stage");"en"!==i&&"ja"!==i?(d="/intl/"+i+"/content/internal-stage-message.json",e="/intl/"+i):"ja"===i?(d="/intl/jp/content/internal-stage-message.json",e="/intl/jp"):(d="/content/internal-stage-message.json",e=""),b("body").on("click",".close-stage-message",function(){b(".stage-message").slideUp(),k.set("stage",!0,365)}),window.location.href.indexOf("stage")>-1&&void 0===l&&(j=j.replace("stage-corp.",""),b.ajax({type:"POST",url:d,dataType:"json",cache:!1,async:!1,success:function(a){c=a[0].heading_localizable,f=a[0].content_localizable,g=a[0].close_localizable,h='<div class="stage-message"><h2>'+c+"</h2>";for(var d=0;d<f.length;d++)h+="<p>"+f[d]+"</p>";h=h.replace("{{link}}evernote.com{{/link}}",'<a href="'+j+'">'+j+"</a>"),h+='<a href="#" class="close-stage-message">'+g+"</a></div>",b("body").prepend(h).fadeIn()}}))}(jQuery)},{"mmm-cookies":2}],12:[function(a,b,c){document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||document.write('<link rel="stylesheet" type="text/css" href="/media/css/'+svgCSS+'">')},{}]},{},[6,10,3,8,7,5,11,12]);
webpackJsonp([36],{138:function(e,n,t){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}t(139),t(142);var i=t(137),r=c(i),o=t(150),a=c(o),u=t(151),s=c(u),l=t(155),d=c(l),v=t(52);t(102)(v),t(172)(v),r.default.use(a.default);var f=new a.default({routes:s.default,linkActiveClass:"active"});f.beforeEach(function(e,n,t){v("#dashboard-app > div > main").nyOverlay({title:"LOADING",target:"#dashboard-app > div > main"}),t()}),f.afterEach(function(){v("#dashboard-app > div > main").nyOverlay("hide")});new r.default({el:"#app",router:f,render:function(e){return e(d.default)}})},139:function(e,n,t){"use strict";t(140)},140:function(e,n){throw new Error('Module build failed: ModuleBuildError: Module build failed: \n  color: $table-caption-color;\n        ^\n      Undefined variable: "$table-caption-color".\n      in /home/travis/build/vemex/Nicety/node_modules/bootstrap/scss/_reboot.scss (line 293, column 10)\n    at runLoaders (/home/travis/build/vemex/Nicety/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /home/travis/build/vemex/Nicety/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/travis/build/vemex/Nicety/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/home/travis/build/vemex/Nicety/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/home/travis/build/vemex/Nicety/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/home/travis/build/vemex/Nicety/node_modules/neo-async/async.js:7974:18)\n    at options.error (/home/travis/build/vemex/Nicety/node_modules/node-sass/lib/index.js:294:32)')},142:function(e,n,t){"use strict";t(143)},143:function(e,n,t){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(n,t,c){return t&&e(n.prototype,t),c&&e(n,c),n}}(),u=t(52),s=c(u),l=t(144),d=c(l),v=t(145),f=c(v);t(146);var p=function(e){var n="nyOverlay",t="ny.overlay",c=e.fn[n],u={target:"",title:"",displayIcon:!0,iconType:""},s={OverlayButton:'button[data-role="overlay"]'},l={target:"string",title:"string",displayIcon:"boolean",iconType:"string"},v={CLICK_DATA_API:"click.ny.overlay.data-api",SHOW:"show.ny.overlay",HIDDEN:"hide.ny.overlay"},p={Overlay_Warp:"overlay-warp",Overlay_div_id:"overlay-div-",Overlay_div:"overlay-div"},h=function(){function c(e,n){i(this,c),this._element=e,this._config=this._getConfig(n)}return a(c,[{key:"_getConfig",value:function(e){return e=o({},u,e),d.default.typeCheckConfig(n,e,l),e}},{key:"_getIconTemplate",value:function(e){switch(e){case"rotating-plane":return'<div class="sk-rotating-plane"></div>';case"double-bounce":return'<div class="sk-double-bounce"> <div class="sk-child sk-double-bounce1"></div> <div class="sk-child sk-double-bounce2"></div> </div>';case"wave":return'<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div> <div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';case"wandering-cubes":return'<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';case"pulse":return'<div class="sk-spinner sk-spinner-pulse"></div>';case"chasing-dots":return'<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';case"three-bounce":return'<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';case"circle":return'<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div> <div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div> <div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div> </div>';case"cube-grid":return'<div class="sk-cube-grid"> <div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';case"fading-circle":return'<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';case"folding-cube":return'<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>';default:return'<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div> <div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>'}}},{key:"_loadbox",value:function(e){if(e.data("ny.overlay.template"))return null;var n=this._config.displayIcon?'<span class="overlay-icon"> '+this._getIconTemplate(this._config.iconType)+"  </span>":"";return e.data("ny.overlay.template",'<div class="overlay-content">'+n+'<h4 class="overlay-title">'+this._config.title+"</h4><div>"),null}},{key:"show",value:function(n){var t=e(this._config.target),c=p.Overlay_div_id+f.default.uID()+f.default.uID()+"-"+f.default.uID(),i=e('<div id="'+c+'" class="'+p.Overlay_div+'"></div>');n.prop("disabled",!0).data("ny.overlay.id",c),t.addClass(p.Overlay_Warp),i.appendTo(t).html(n.data("ny.overlay.template"));var r=e.Event(v.SHOW);n.trigger(r)}},{key:"hide",value:function(n){var t=e("#"+n.data("ny.overlay.id")),c=e(this._config.target);t.length&&(n.prop("disabled",!1),c.removeClass(p.Overlay_Warp),t.hide().remove());var i=e.Event(v.HIDDEN);n.trigger(i)}},{key:"dispose",value:function(){e.removeData(this._element,t),e.removeData(this._element,"ny.overlay.id"),e.removeData(this._element,"ny.overlay.template"),this._element=null,this._config=null}}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){void 0===n&&(n={});var i=e(this),o=i.data(t);(!o||"object"===(void 0===n?"undefined":r(n))&&n)&&(o&&(o.hide(i),o.dispose()),i.attr("data-target")&&(n.target=i.attr("data-target")),o=new c(i,n),i.data(t,o),o._loadbox(i),o.show(i)),"string"==typeof n&&o[n](i)})}},{key:"Version",get:function(){return"0.0.1"}}]),c}();return e(document).on(v.CLICK_DATA_API,s.OverlayButton,function(){var n={title:e(this).attr("overlay-title"),iconType:void 0==e(this).attr("overlay-icon-type")?"":e(this).attr("overlay-icon-type"),displayIcon:void 0===e(this).attr("overlay-display-icon")||"true"==e(this).attr("overlay-display-icon")};e(this).nyOverlay(n)}),e.fn[n]=h._jQueryInterface,e.fn[n].Constructor=h,e.fn[n].noConflict=function(){return e.fn[n]=c,h._jQueryInterface},h}(s.default);n.default=p},145:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=t(52),i=function(e){return e&&e.__esModule?e:{default:e}}(c),r=function(e){return{uID:function(){return(65536*(1+Math.random())|0).toString(16).substring(1)}}}(i.default);n.default=r},146:function(e,n){},151:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=t(152),i=function(e){return e&&e.__esModule?e:{default:e}}(c),r=function(e){return t.e(8).then(function(){return e(t(380))}.bind(null,t)).catch(t.oe)},o=function(e){return t.e(10).then(function(){return e(t(381))}.bind(null,t)).catch(t.oe)},a=function(e){return t.e(7).then(function(){return e(t(382))}.bind(null,t)).catch(t.oe)},u=function(e){return t.e(33).then(function(){return e(t(383))}.bind(null,t)).catch(t.oe)},s=function(e){return t.e(32).then(function(){return e(t(384))}.bind(null,t)).catch(t.oe)},l=function(e){return t.e(31).then(function(){return e(t(385))}.bind(null,t)).catch(t.oe)},d=function(e){return t.e(30).then(function(){return e(t(386))}.bind(null,t)).catch(t.oe)},v=function(e){return t.e(27).then(function(){return e(t(387))}.bind(null,t)).catch(t.oe)},f=function(e){return t.e(6).then(function(){return e(t(388))}.bind(null,t)).catch(t.oe)},p=function(e){return t.e(22).then(function(){return e(t(389))}.bind(null,t)).catch(t.oe)},h=function(e){return t.e(24).then(function(){return e(t(390))}.bind(null,t)).catch(t.oe)},b=function(e){return t.e(1).then(function(){return e(t(391))}.bind(null,t)).catch(t.oe)},k=function(e){return t.e(29).then(function(){return e(t(392))}.bind(null,t)).catch(t.oe)},y=function(e){return t.e(28).then(function(){return e(t(393))}.bind(null,t)).catch(t.oe)},m=function(e){return t.e(26).then(function(){return e(t(394))}.bind(null,t)).catch(t.oe)},_=function(e){return t.e(25).then(function(){return e(t(395))}.bind(null,t)).catch(t.oe)},g=function(e){return t.e(23).then(function(){return e(t(396))}.bind(null,t)).catch(t.oe)},O=function(e){return t.e(21).then(function(){return e(t(397))}.bind(null,t)).catch(t.oe)},w=function(e){return t.e(20).then(function(){return e(t(398))}.bind(null,t)).catch(t.oe)},j=function(e){return t.e(19).then(function(){return e(t(399))}.bind(null,t)).catch(t.oe)},I=function(e){return t.e(18).then(function(){return e(t(400))}.bind(null,t)).catch(t.oe)},M=function(e){return t.e(5).then(function(){return e(t(401))}.bind(null,t)).catch(t.oe)},P=function(e){return t.e(3).then(function(){return e(t(402))}.bind(null,t)).catch(t.oe)},x=function(e){return t.e(13).then(function(){return e(t(403))}.bind(null,t)).catch(t.oe)},D=function(e){return t.e(15).then(function(){return e(t(404))}.bind(null,t)).catch(t.oe)},C=function(e){return t.e(14).then(function(){return e(t(405))}.bind(null,t)).catch(t.oe)},N=function(e){return t.e(2).then(function(){return e(t(406))}.bind(null,t)).catch(t.oe)},E=function(e){return t.e(12).then(function(){return e(t(407))}.bind(null,t)).catch(t.oe)},S=function(e){return t.e(17).then(function(){return e(t(408))}.bind(null,t)).catch(t.oe)},T=function(e){return t.e(16).then(function(){return e(t(409))}.bind(null,t)).catch(t.oe)},A=function(e){return t.e(11).then(function(){return e(t(379))}.bind(null,t)).catch(t.oe)},L=function(e){return t.e(0).then(function(){return e(t(410))}.bind(null,t)).catch(t.oe)},B=function(e){return t.e(9).then(function(){return e(t(411))}.bind(null,t)).catch(t.oe)},R=function(e){return t.e(4).then(function(){return e(t(412))}.bind(null,t)).catch(t.oe)},G=[{path:"/Home",component:i.default},{path:"/ThemeColor",component:r},{path:"/Alerts",component:a},{path:"/About",component:o},{path:"/Badges",component:u},{path:"/Button",component:l},{path:"/ButtonGroup",component:d},{path:"/Form",component:v},{path:"/Popovers",component:f},{path:"/Navbar",component:p},{path:"/ListGroup",component:h},{path:"/Card",component:b},{path:"/Collapse",component:k},{path:"/Dropdown",component:y},{path:"/InputGroup",component:m},{path:"/Jumbotron",component:_},{path:"/Modal",component:g},{path:"/Pagination",component:w},{path:"/Navs",component:O},{path:"/Progress",component:j},{path:"/Scrollspy",component:I},{path:"/Tooltips",component:M},{path:"/Grid",component:P},{path:"/Breadcrumb",component:s},{path:"/IconsThemify",component:x},{path:"/PremiumLine",component:D},{path:"/PremiumSolid",component:C},{path:"/UtilsDemo",component:N},{path:"/DataTable",component:S},{path:"/Reboot",component:T},{path:"/Display",component:A},{path:"/AgGrid",component:L},{path:"/ECharts",component:B},{path:"/Metismenu",component:R},{path:"/Flex",component:E}];n.default=G},152:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=t(96),i=t.n(c);for(var r in c)"default"!==r&&function(e){t.d(n,e,function(){return c[e]})}(r);var o=t(153),a=t(42),u=a(i.a,o.a,!1,null,null,null);u.options.__file="webapp/app/pages/Home.vue",n.default=u.exports},155:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=t(97),i=t.n(c);for(var r in c)"default"!==r&&function(e){t.d(n,e,function(){return c[e]})}(r);var o=t(171),a=t(42),u=a(i.a,o.a,!1,null,null,null);u.options.__file="webapp/app/components/app.dashboard.vue",n.default=u.exports},156:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=t(98),i=t.n(c);for(var r in c)"default"!==r&&function(e){t.d(n,e,function(){return c[e]})}(r);var o=t(158),a=t(42),u=a(i.a,o.a,!1,null,null,null);u.options.__file="webapp/app/components/app.footer.vue",n.default=u.exports},157:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c="0.0.1-SNAPSHOT",i=!0,r="";c="v0.0.3",i=!1,r="undefined";n.VERSION=c,n.DEBUG_INFO_ENABLED=i,n.SERVER_API_URL=r},159:function(e,n,t){"use strict";function c(e){u||t(160)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(99),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);var a=t(162),u=!1,s=t(42),l=c,d=s(r.a,a.a,!1,l,"data-v-29684d16",null);d.options.__file="webapp/app/components/app.header.bar.vue",n.default=d.exports},163:function(e,n,t){"use strict";function c(e){u||t(164)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(100),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);var a=t(166),u=!1,s=t(42),l=c,d=s(r.a,a.a,!1,l,"data-v-6bc2429c",null);d.options.__file="webapp/app/components/app.nav.header.vue",n.default=d.exports},167:function(e,n,t){"use strict";function c(e){u||t(168)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(101),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);var a=t(170),u=!1,s=t(42),l=c,d=s(r.a,a.a,!1,l,"data-v-5d46856f",null);d.options.__file="webapp/app/components/app.nav.vue",n.default=d.exports},52:function(e,n){e.exports=window.jQuery}},[138]);
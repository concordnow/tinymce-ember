"use strict"
define("dummy/app",["exports","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,o){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=f(e)
if(t){var r=f(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return a(this,n)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(r,Ember.Application)
var n=c(r)
function r(){var e
i(this,r)
for(var u=arguments.length,c=new Array(u),a=0;a<u;a++)c[a]=arguments[a]
return s(l(e=n.call.apply(n,[this].concat(c))),"modulePrefix",o.default.modulePrefix),s(l(e),"podModulePrefix",o.default.podModulePrefix),s(l(e),"Resolver",t.default),e}return r}()
e.default=d,(0,n.default)(d,o.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/code-block",["exports","ember-prism/components/code-block"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/code-inline",["exports","ember-prism/components/code-inline"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/code-snippet",["exports","ember-concord-doc/components/code-snippet"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/disabled-example",["exports","@glimmer/component"],(function(e,t){var n,o,r,i
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n,o){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(o):void 0})}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=m(e)
if(t){var r=m(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return d(this,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n,o,r){var i={}
return Object.keys(o).forEach((function(e){i[e]=o[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,o){return o(e,t,n)||n}),i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=Ember.HTMLBars.template({id:"VlHS2iCR",block:'{"symbols":[],"statements":[[11,"button"],[24,0,"bg-gray-800 hover:bg-black text-white py-2 px-4 no-underline rounded"],[24,4,"button"],[4,[38,0],["click",[32,0,["toggleDisabled"]]],null],[12],[2,"Toggle disabled"],[13],[2,"\\n\\n"],[11,"textarea"],[4,[38,1],null,[["disabled","content"],[[32,0,["disabled"]],"Read-only content"]]],[12],[13],[2,"\\n"]],"hasEval":false,"upvars":["on","editor"]}',moduleName:"dummy/components/disabled-example.hbs"}),v=(n=Ember._tracked,o=Ember._action,r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(u,e)
var t,n,o,r=s(u)
function u(){var e
a(this,u)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return c(p(e=r.call.apply(r,[this].concat(n))),"disabled",i,p(e)),e}return t=u,(n=[{key:"toggleDisabled",value:function(){this.disabled=!this.disabled}}])&&l(t.prototype,n),o&&l(t,o),u}(t.default),i=y(r.prototype,"disabled",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),y(r.prototype,"toggleDisabled",[o],Object.getOwnPropertyDescriptor(r.prototype,"toggleDisabled"),r.prototype),r)
e.default=v,Ember._setComponentTemplate(b,v)})),define("dummy/components/hero-header",["exports","ember-concord-doc/components/hero-header"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/inline-example",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"6aHUsAx6",block:'{"symbols":[],"statements":[[11,"div"],[24,3,"my-editor"],[4,[38,1],null,[["config","content"],[[30,[36,0],null,[["inline"],[true]]],"Click on me to edit"]]],[12],[13],[2,"\\n"]],"hasEval":false,"upvars":["hash","editor"]}',moduleName:"dummy/components/inline-example.hbs"}),n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})),define("dummy/components/navbar",["exports","ember-concord-doc/components/navbar"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/sidebar-entry",["exports","ember-concord-doc/components/sidebar-entry"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/sidebar-nav",["exports","ember-concord-doc/components/sidebar-nav"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/simple-example",["exports","@glimmer/component"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=a(e)
if(t){var r=a(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=Ember.HTMLBars.template({id:"wPWKxTpy",block:'{"symbols":[],"statements":[[1,[32,0,["content"]]],[2,"\\n"],[11,"textarea"],[24,3,"my-editor"],[4,[38,2],null,[["content","onEditorContentChange"],[[32,0,["content"]],[30,[36,1],[[30,[36,0],[[32,0,["content"]]],null]],null]]]],[12],[13],[2,"\\n"]],"hasEval":false,"upvars":["mut","fn","editor"]}',moduleName:"dummy/components/simple-example.hbs"}),s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(n,e)
var t=i(n)
function n(){var e
o(this,n)
for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u]
return l(c(e=t.call.apply(t,[this].concat(i))),"content","<p>Hello World</p>"),e}return n}(t.default)
e.default=s,Ember._setComponentTemplate(f,s)})),define("dummy/helpers/get-code-snippet",["exports","ember-code-snippet/helpers/get-code-snippet"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default)}}
e.default=n})),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,r=t.default.exportApplicationGlobal
o="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var o={name:"export-application-global",initialize:n}
e.default=o})),define("dummy/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/editor",["exports","tinymce-ember/modifiers/editor"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/router",["exports","dummy/config/environment"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=a(e)
if(t){var r=a(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(u,Ember.Router)
var n=i(u)
function u(){var e
o(this,u)
for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a]
return l(c(e=n.call.apply(n,[this].concat(i))),"location",t.default.locationType),l(c(e),"rootURL",t.default.rootURL),e}return u}()
e.default=f,f.map((function(){this.route("docs",(function(){this.route("usage"),this.route("examples"),this.route("modifiers",(function(){this.route("editor")}))})),this.route("not-found",{path:"/*path"})}))})),define("dummy/routes/docs/examples",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=c(e)
if(t){var r=c(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(i,Ember.Route)
var t=r(i)
function i(){var e
n(this,i)
for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c]
return a(u(e=t.call.apply(t,[this].concat(r))),"order",2),a(u(e),"title","Examples"),e}return i}()
e.default=l})),define("dummy/routes/docs/index",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=c(e)
if(t){var r=c(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(i,Ember.Route)
var t=r(i)
function i(){var e
n(this,i)
for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c]
return a(u(e=t.call.apply(t,[this].concat(r))),"order",0),a(u(e),"title","Introduction"),e}return i}()
e.default=l})),define("dummy/routes/docs/modifiers",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=c(e)
if(t){var r=c(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(i,Ember.Route)
var t=r(i)
function i(){var e
n(this,i)
for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c]
return a(u(e=t.call.apply(t,[this].concat(r))),"order",1/0),a(u(e),"title","Modifiers"),a(u(e),"disabled",!0),e}return i}()
e.default=l})),define("dummy/routes/docs/modifiers/editor",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=c(e)
if(t){var r=c(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(i,Ember.Route)
var t=r(i)
function i(){var e
n(this,i)
for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c]
return a(u(e=t.call.apply(t,[this].concat(r))),"title","{{editor}}"),a(u(e),"order",0),e}return i}()
e.default=l})),define("dummy/routes/docs/usage",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,o=c(e)
if(t){var r=c(this).constructor
n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments)
return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?u(e):n}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(i,Ember.Route)
var t=r(i)
function i(){var e
n(this,i)
for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c]
return a(u(e=t.call.apply(t,[this].concat(r))),"order",1),a(u(e),"title","Usage"),e}return i}()
e.default=l})),define("dummy/services/introspection",["exports","ember-concord-doc/services/introspection"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"AMV5g58w",block:'{"symbols":[],"statements":[[1,[30,[36,0],["Tinymce Ember"],null]],[2,"\\n\\n"],[8,"navbar",[],[["@addonName","@repo"],["Tinymce","https://github.com/concordnow/tinymce-ember"]],null],[2,"\\n\\n"],[1,[30,[36,2],[[30,[36,1],null,null]],null]]],"hasEval":false,"upvars":["page-title","-outlet","component"]}',moduleName:"dummy/templates/application.hbs"})
e.default=t}))
define("dummy/templates/docs",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Fax6PqzO",block:'{"symbols":[],"statements":[[1,[30,[36,0],["Documentation"],null]],[2,"\\n\\n"],[10,"div"],[14,0,"px-4 mx-auto lg:px-6 max-w-screen-2xl"],[12],[2,"\\n  "],[10,"div"],[14,0,"relative lg:flex"],[12],[2,"\\n    "],[8,"sidebar-nav",[],[[],[]],null],[2,"\\n\\n    "],[10,"article"],[14,0,"flex-1 w-full min-w-0 px-0 py-12 lg:px-4"],[12],[2,"\\n      "],[1,[30,[36,2],[[30,[36,1],null,null]],null]],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["page-title","-outlet","component"]}',moduleName:"dummy/templates/docs.hbs"})
e.default=t})),define("dummy/templates/docs/examples",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"v0YDAlgo",block:'{"symbols":[],"statements":[[1,[30,[36,0],["Examples"],null]],[2,"\\n\\n"],[10,"div"],[14,0,"prose max-w-none"],[12],[10,"h1"],[12],[10,"a"],[14,1,"simple-editor"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#simple-editor"],[12],[13],[2,"Simple editor"],[13],[2,"\\n"],[10,"p"],[12],[2,"Place the "],[10,"code"],[12],[1,[34,1]],[13],[2," modifier on any "],[10,"code"],[12],[2,"div"],[13],[2,", "],[10,"code"],[12],[2,"textarea"],[13],[2," to create a TinyMCE editor instance."],[13],[2,"\\n"],[10,"p"],[12],[2,"Based on action up / data down principle, you can update your content."],[13],[2,"\\n"],[13],[2,"\\n\\n"],[10,"p"],[14,0,"py-10"],[12],[2,"\\n  "],[8,"simple-example",[],[[],[]],null],[2,"\\n"],[13],[2,"\\n\\n"],[10,"p"],[12],[2,"\\n  "],[8,"code-snippet",[],[["@name"],["simple-example.hbs"]],null],[2,"\\n"],[13],[2,"\\n\\n"],[10,"br"],[12],[13],[2,"\\n\\n"],[10,"div"],[14,0,"prose max-w-none"],[12],[10,"h1"],[12],[10,"a"],[14,1,"configure-editor"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#configure-editor"],[12],[13],[2,"Configure editor"],[13],[2,"\\n"],[10,"p"],[12],[2,"You can pass "],[10,"a"],[14,6,"https://www.tiny.cloud/docs/configure/"],[12],[2,"TinyMCE config"],[13],[2," object to your editor instance."],[13],[2,"\\n"],[13],[2,"\\n\\n"],[10,"p"],[14,0,"py-10"],[12],[2,"\\n  "],[8,"inline-example",[],[[],[]],null],[2,"\\n"],[13],[2,"\\n\\n"],[10,"p"],[12],[2,"\\n  "],[8,"code-snippet",[],[["@name"],["inline-example.hbs"]],null],[2,"\\n"],[13],[2,"\\n\\n"],[10,"br"],[12],[13],[2,"\\n\\n"],[10,"div"],[14,0,"prose max-w-none"],[12],[10,"h1"],[12],[10,"a"],[14,1,"disabled-state"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#disabled-state"],[12],[13],[2,"Disabled State"],[13],[2,"\\n"],[10,"p"],[12],[2,"You can turn on/off TinyMCE read-only mode dynamically."],[13],[2,"\\n"],[13],[2,"\\n\\n"],[10,"p"],[14,0,"py-10"],[12],[2,"\\n  "],[8,"disabled-example",[],[[],[]],null],[2,"\\n"],[13],[2,"\\n\\n"],[10,"p"],[12],[2,"\\n  "],[8,"code-snippet",[],[["@name"],["disabled-example.hbs"]],null],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["page-title","editor"]}',moduleName:"dummy/templates/docs/examples.hbs"})
e.default=t})),define("dummy/templates/docs/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"gexeVBGW",block:'{"symbols":[],"statements":[[1,[30,[36,0],["Introduction"],null]],[2,"\\n\\n"],[10,"div"],[14,0,"prose max-w-none"],[12],[10,"h1"],[12],[10,"a"],[14,1,"motivation"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#motivation"],[12],[13],[2,"Motivation"],[13],[2,"\\n"],[10,"p"],[12],[2,"This addon is inspired by official TinyMCE React plugin "],[10,"a"],[14,6,"https://github.com/tinymce/tinymce-react"],[12],[2,"tinymce-react"],[13],[2,"."],[13],[2,"\\n"],[10,"p"],[12],[2,"Its goal is to be a standard, drop-in solution for the ember community."],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["page-title"]}',moduleName:"dummy/templates/docs/index.hbs"})
e.default=t})),define("dummy/templates/docs/modifiers",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"rJR7mYTi",block:'{"symbols":[],"statements":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],"hasEval":false,"upvars":["-outlet","component"]}',moduleName:"dummy/templates/docs/modifiers.hbs"})
e.default=t})),define("dummy/templates/docs/modifiers/editor",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"EKOWfPoz",block:'{"symbols":[],"statements":[[1,[30,[36,0],["Editor"],null]],[2,"\\n\\n"],[10,"div"],[14,0,"prose max-w-none"],[12],[10,"h1"],[12],[10,"a"],[14,1,"lcub"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#lcub"],[12],[13],[2,"{{editor}}"],[13],[2,"\\n"],[10,"h2"],[12],[10,"a"],[14,1,"api"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#api"],[12],[13],[2,"API"],[13],[2,"\\n"],[10,"p"],[12],[10,"b"],[12],[2,"customEvents"],[13],[2,": "],[10,"em"],[12],[2,"Array"],[13],[13],[2,"\\n"],[10,"p"],[12],[2,"Defaults to "],[10,"code"],[12],[2,"[]"],[13],[2,"."],[13],[2,"\\n"],[10,"p"],[12],[2,"List of events given to the editor"],[13],[2,"\\n"],[10,"p"],[12],[2,"Type of event should be"],[13],[2,"\\n"],[10,"pre"],[12],[10,"code"],[14,0,"language-js"],[12],[2,"{\\n    name: string,\\n    handler: function\\n}\\n"],[13],[13],[2,"\\n"],[10,"p"],[12],[10,"b"],[12],[2,"content"],[13],[2,": "],[10,"em"],[12],[2,"String"],[13],[13],[2,"\\n"],[10,"p"],[12],[2,"Defaults to "],[10,"code"],[12],[2,"\'\'"],[13],[2,"."],[13],[2,"\\n"],[10,"p"],[12],[2,"A given string to be set as editor\'s content"],[13],[2,"\\n"],[10,"p"],[12],[10,"b"],[12],[2,"onEditorContentChange"],[13],[2,": "],[10,"em"],[12],[2,"String"],[13],[13],[2,"\\n"],[10,"p"],[12],[2,"Defaults to "],[10,"code"],[12],[2,"\'change keyup setcontent\'"],[13],[2,"."],[13],[2,"\\n"],[10,"p"],[12],[2,"Each of those events will call an "],[10,"code"],[12],[2,"onEditorContentChange"],[13],[2," function if given as parameter"],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["page-title"]}',moduleName:"dummy/templates/docs/modifiers/editor.hbs"})
e.default=t})),define("dummy/templates/docs/usage",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"flzLbsMc",block:'{"symbols":[],"statements":[[1,[30,[36,0],["Usage"],null]],[2,"\\n\\n"],[10,"div"],[14,0,"prose max-w-none"],[12],[10,"h2"],[12],[10,"a"],[14,1,"compatibility"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#compatibility"],[12],[13],[2,"Compatibility"],[13],[2,"\\n"],[10,"p"],[12],[2,"This addon is tested on "],[10,"b"],[12],[2,"Ember.js v3.16"],[13],[2," and above."],[13],[2,"\\n"],[10,"h2"],[12],[10,"a"],[14,1,"installation"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#installation"],[12],[13],[2,"Installation"],[13],[2,"\\n"],[10,"pre"],[12],[10,"code"],[12],[2,"ember install tinymce-ember\\n"],[13],[13],[2,"\\n"],[10,"p"],[12],[10,"b"],[12],[2,"Note:"],[13],[2," The addon is designed in such way that it is the responsability of the application to provide the TinyMCE module."],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["page-title"]}',moduleName:"dummy/templates/docs/usage.hbs"})
e.default=t})),define("dummy/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"r8Y7CtKc",block:'{"symbols":[],"statements":[[8,"hero-header",[],[["@addonName","@addonDescription"],["Tinymce","TinyMCE Ember addon"]],null],[2,"\\n\\n"],[10,"div"],[14,0,"px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8"],[12],[2,"\\n"],[10,"div"],[14,0,"prose max-w-none"],[12],[10,"h1"],[12],[10,"a"],[14,1,"introduction"],[14,0,"anchor"],[14,"aria-hidden","true"],[14,6,"#introduction"],[12],[13],[2,"Introduction"],[13],[2,"\\n"],[10,"p"],[12],[2,"Ember CLI addon that helps you integrate "],[10,"a"],[14,6,"https://www.tiny.cloud/docs/"],[14,"target","_blank"],[14,"rel","noopener noreferrer"],[12],[10,"b"],[12],[2,"TinyMCE"],[13],[13],[2," editor into your application."],[13],[2,"\\n"],[13],[2,"\\n  "],[10,"br"],[12],[13],[2,"\\n\\n  "],[11,"textarea"],[4,[38,0],null,null],[12],[13],[2,"\\n\\n  "],[10,"br"],[12],[13],[2,"\\n  "],[10,"aside"],[14,0,"flex items-center rounded-sm bg-gray-50 p-2"],[12],[2,"\\n    "],[10,"em"],[12],[2,"\\n      This addon is provided by  \\n    "],[13],[2,"\\n    "],[10,"a"],[14,6,"https://concordnow.com"],[12],[2,"\\n      "],[10,"img"],[14,"width","100"],[14,"src","https://www.concordnow.com/wp-content/themes/concord/layoutImg/concord_logo-grey.svg"],[14,"alt","Concord"],[12],[13],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"my-12 text-right"],[12],[2,"\\n    "],[8,"link-to",[[24,0,"bg-gray-800 hover:bg-black text-white py-2 px-4 no-underline rounded"]],[["@route"],["docs"]],[["default"],[{"statements":[[2,"\\n      Read the docs →\\n    "]],"parameters":[]}]]],[2,"\\n  "],[13],[2,"\\n"],[13]],"hasEval":false,"upvars":["editor"]}',moduleName:"dummy/templates/index.hbs"})
e.default=t})),define("dummy/utils/compare-by",["exports","ember-concord-doc/utils/compare-by"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/utils/is-equal-route",["exports","ember-concord-doc/utils/is-equal-route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})

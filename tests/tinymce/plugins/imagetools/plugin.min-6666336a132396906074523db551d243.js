!function(){"use strict"
function e(e){var t=e
return{get:function(){return t},set:function(e){t=e}}}function t(e){return null!=e}function n(){}function r(e){return function(){return e}}function o(e){return e}function i(){return d}function a(e){return n=typeof(t=e),"array"==(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n)
var t,n}var u,c=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=tinymce.util.Tools.resolve("tinymce.util.Tools"),f=r(!(u="function")),l=r(!0),d={fold:function(e,t){return e()},isSome:f,isNone:l,getOr:o,getOrThunk:m,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:r(null),getOrUndefined:r(void 0),or:o,orThunk:m,map:i,each:n,bind:i,exists:f,forall:l,filter:function(){return d},toArray:function(){return[]},toString:r("none()")}
function m(e){return e()}var h=function(e){function t(){return i}function n(t){return t(e)}var o=r(e),i={fold:function(t,n){return n(e)},isSome:l,isNone:f,getOr:o,getOrThunk:o,getOrDie:o,getOrNull:o,getOrUndefined:o,or:t,orThunk:t,map:function(t){return h(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?i:d},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return i},g={some:h,none:i,from:function(e){return null==e?d:h(e)}},p={},v={exports:p}
function y(e,t){return R(document.createElement("canvas"),e,t)}function w(e){var t=y(e.width,e.height)
return I(t).drawImage(e,0,0),t}function b(e){return new x((function(t,n){function r(){i.removeEventListener("load",a),i.removeEventListener("error",u)}var o=URL.createObjectURL(e),i=new Image,a=function(){r(),t(i)},u=function(){r(),n("Unable to load data of type "+e.type+": "+o)}
i.addEventListener("load",a),i.addEventListener("error",u),i.src=o,i.complete&&setTimeout(a,0)}))}function _(e,t,n){return t=t||"image/png",function(e){return typeof e===u}(HTMLCanvasElement.prototype.toBlob)?new x((function(r,o){e.toBlob((function(e){e?r(e):o()}),t,n)})):A(e.toDataURL(t,n))}function E(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}function T(e,t){return function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return g.some(i)
if(n(i,r))break}return g.none()}(e,t,f)}!function(){var e=this,t=function(){var e,t,n,r={exports:{}}
function o(){}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,i._immediateFn((function(){var n,r=1===e._state?t.onFulfilled:t.onRejected
if(null!==r){try{n=r(e._value)}catch(n){return void c(t.promise,n)}u(t.promise,n)}else(1===e._state?u:c)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if(t instanceof i)return e._state=3,e._value=t,void s(e)
if("function"==typeof n)return void l((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,s(e)}catch(t){c(e,t)}var r,o}function c(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t])
e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1
try{e((function(e){n||(n=!0,u(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return
n=!0,c(t,e)}}e=r,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=setTimeout,i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o)
return a(this,new f(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e)
return new i((function(e,n){if(0===t.length)return e([])
for(var r=t.length,o=0;o<t.length;o++)!function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then
if("function"==typeof u)return u.call(a,(function(e){o(i,e)}),n),0}t[i]=a,0==--r&&e(t)}catch(a){n(a)}}(o,t[o])}))},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},e.exports?e.exports=i:t.Promise||(t.Promise=i)
var d=r.exports
return{boltExport:("undefined"!=typeof window?window:Function("return this;")()).Promise||d}}
"object"==typeof p&&void 0!==v?v.exports=t():(e="undefined"!=typeof globalThis?globalThis:e||self).EphoxContactWrapper=t()}()
var x=v.exports.boltExport,I=function(e){return e.getContext("2d")},R=function(e,t,n){return e.width=t,e.height=n,e},U=function(e){return new x((function(t,n){var r=new XMLHttpRequest
r.open("GET",e,!0),r.responseType="blob",r.onload=function(){200===this.status&&t(this.response)},r.onerror=function(){var e
n(0===this.status?((e=new Error("No access to download image")).code=18,e.name="SecurityError",e):new Error("Error "+this.status+" downloading image"))},r.send()}))},A=function(e){return new x((function(t,n){(function(){var t=e.split(","),n=/data:([^;]+)/.exec(t[0])
if(!n)return g.none()
for(var r=n[1],o=t[1],i=atob(o),a=i.length,u=Math.ceil(a/1024),c=new Array(u),s=0;s<u;++s){for(var f=1024*s,l=Math.min(1024+f,a),d=new Array(l-f),m=f,h=0;m<l;++h,++m)d[h]=i[m].charCodeAt(0)
c[s]=new Uint8Array(d)}return g.some(new Blob(c,{type:r}))})().fold((function(){n("uri is not base64: "+e)}),t)}))},j=b,S=Array.prototype.indexOf,M=Object.keys
function P(e,t,n){function o(t,n){return e.then((function(e){return e.toDataURL(t||"image/png",n)}))}return{getType:r(t.type),toBlob:function(){return x.resolve(t)},toDataURL:r(n),toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(t,n){return e.then((function(e){return _(e,t,n)}))},toAdjustedDataURL:o,toAdjustedBase64:function(e,t){return o(e,t).then((function(e){return e.split(",")[1]}))},toCanvas:function(){return e.then(w)}}}function O(e,t){return _(e,t).then((function(t){return P(x.resolve(e),t,e.toDataURL())}))}function L(e,t){void 0===t&&(t=2)
var n=Math.pow(10,t),r=Math.round(e*n)
return Math.ceil(r/n)}function k(e,t,n){return void 0===n&&(n=!1),new x((function(r){var o=new XMLHttpRequest
o.onreadystatechange=function(){4===o.readyState&&r({status:o.status,blob:o.response})},o.open("GET",e,!0),o.withCredentials=n,function(e){for(var t,n=M(e),r=0,i=n.length;r<i;r++){var a=n[r]
t=e[a],o.setRequestHeader(a,t)}}(t),o.responseType="blob",o.send()}))}function C(e){var t,n=(t=e,"ImageProxy HTTP error: "+T(q,(function(e){return t===e.code})).fold(r("Unknown ImageProxy error"),(function(e){return e.message})))
return x.reject(n)}function F(e){return T(W,(function(t){return t.type===e})).fold(r("Unknown service error"),(function(e){return e.message}))}function B(e){return e<200||300<=e}function N(e,n){var r,o,i,a={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":n}
return k((o=n,i=-1===(r=e).indexOf("?")?"?":"&",/[?&]apiKey=/.test(r)?r:r+i+"apiKey="+encodeURIComponent(o)),a).then((function(e){return B(e.status)?(r=e.status,"application/json"!==(null==(o=e.blob)?void 0:o.type)||400!==r&&403!==r&&404!==r&&500!==r?C(r):(n=o,new x((function(e,t){var r=new FileReader
r.onload=function(){e(r.result)},r.onerror=function(e){t(e)},r.readAsText(n)})).then((function(e){var n=function(e){return"ImageProxy Service error: "+function(e){try{return g.some(JSON.parse(e))}catch(e){return g.none()}}(e).bind((function(e){return n=function(e,n){return t(e)?e[n]:void 0},r=e,E(["error","type"],(function(e,t){r=n(r,e)})),o=r,g.from(o).map(F)
var n,r,o})).getOr("Invalid JSON in service error message")}(e)
return x.reject(n)})))):x.resolve(e.blob)
var n,r,o}))}function D(e,t,n){return void 0===n&&(n=!1),t?N(e,t):k(e,{},n).then((function(e){return B(e.status)?C(e.status):x.resolve(e.blob)}))}function H(e){return t=e,new x((function(e){var n=new FileReader
n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})).then((function(t){return P(b(e).then((function(e){(function(e){URL.revokeObjectURL(e.src)})(e)
var t=y(e.naturalWidth||e.width,e.naturalHeight||e.height)
return I(t).drawImage(e,0,0),t})),e,t)}))
var t}function z(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}}!function(e){if(!a(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
E(e,(function(r,o){var i=M(r)
if(1!==i.length)throw new Error("one and only one name per case")
var u=i[0],c=r[u]
if(void 0!==n[u])throw new Error("duplicate key detected:"+u)
if("cata"===u)throw new Error("cannot have a case named cata (sorry)")
if(!a(c))throw new Error("case arguments must be an array")
t.push(u),n[u]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var i=n.length
if(i!==c.length)throw new Error("Wrong number of arguments to case "+u+". Expected "+c.length+" ("+c+"), got "+i)
return{fold:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(t.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+t.length)
return t[o].apply(null,n)},match:function(e){var r=M(e)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
if(!function(e){for(var t,n=0,o=e.length;n<o;++n)if(!0!==(t=e[n],function(e,t){return-1<S.call(e,t)}(r,t)))return
return 1}(t))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return e[u].apply(null,n)},log:function(e){console.log(e,{constructors:t,constructor:u,params:n})}}}}))}([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}])
var q=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],W=[{type:"not_found",message:"Failed to load image."},{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],$={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return z(n.childNodes[0])},fromTag:function(e,t){return z((t||document).createElement(e))},fromText:function(e,t){return z((t||document).createTextNode(e))},fromDom:z,fromPoint:function(e,t,n){return g.from(e.dom.elementFromPoint(t,n)).map(z)}}
function V(e){return e.getParam("imagetools_proxy")}function G(e){function t(e){return/^[0-9\.]+px$/.test(e)}var n=e.style.width,r=e.style.height
return n||r?t(n)&&t(r)?{w:parseInt(n,10),h:parseInt(r,10)}:null:(n=e.width,r=e.height,n&&r?{w:parseInt(n,10),h:parseInt(r,10)}:null)}function J(e){return{w:e.naturalWidth,h:e.naturalHeight}}function K(e){return t=$.fromDom(e),"img",n=function(e){return function(t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}("img")},T(t.dom.childNodes,(function(e){return n($.fromDom(e))})).map($.fromDom)
var t,n}function X(e,t){return e.dom.is(t,"figure")}function Q(e,t){return e.dom.is(t,"img:not([data-mce-object],[data-mce-placeholder])")}function Y(e,n){function r(n){return Q(e,n)&&(he(e,n)||ge(e,n)||t(V(e)))}return X(e,n)?K(n).bind((function(e){return r(e.dom)?g.some(e.dom):g.none()})):r(n)?g.some(n):g.none()}function Z(e,t){e.notificationManager.open({text:t,type:"error"})}function ee(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image")
return null!==n&&X(e,n)?K(n):Q(e,t)?g.some($.fromDom(t)):g.none()}function te(e,n,r){var o=n.match(/(?:\/|^)(([^\/\?]+)\.(?:[a-z0-9.]+))(?:\?|$)/i)
return t(o)?e.dom.encode(o[r]):null}function ne(e,t){if(ge(e,t))return D(t.src,null,(n=t,-1!==s.inArray(e.getParam("imagetools_credentials_hosts",[],"string[]"),new de(n.src).host)))
var n,r
if(he(e,t))return(0===(r=t.src).indexOf("data:")?A:U)(r)
var o=V(e)
return D(o+(-1===o.indexOf("?")?"?":"&")+"url="+encodeURIComponent(t.src),e.getParam("api_key",e.getParam("imagetools_api_key","","string"),"string"),!1)}function re(e,t){var n,r,o=e.editorUpload.blobCache.getByUri(t.src)
return o?le.resolve(o.blob()):(n=e,r=t,g.from(n.getParam("imagetools_fetch_image",null,"function")).fold((function(){return ne(n,r)}),(function(e){return e(r)})))}function oe(e){fe.clearTimeout(e.get())}function ie(e,n,r,o,i,a,u){return r.toBlob().then((function(c){var s,f,l,d=e.editorUpload.blobCache,m=a.src,h=n.type===c.type
return e.getParam("images_reuse_filename",!1,"boolean")&&(f=t(l=d.getByUri(m))?(m=l.uri(),s=l.name(),l.filename()):(s=te(e,m,2),te(e,m,1))),l=d.create({id:"imagetools"+me++,blob:c,base64:r.toBase64(),uri:m,name:s,filename:h?f:void 0}),d.add(l),e.undoManager.transact((function(){var t=function(){var n,r,u
e.$(a).off("load",t),e.nodeChanged(),o?e.editorUpload.uploadImagesAuto():(oe(i),n=e,r=i,u=fe.setEditorTimeout(n,(function(){n.editorUpload.uploadImagesAuto()}),n.getParam("images_upload_timeout",3e4,"number")),r.set(u))}
e.$(a).on("load",t),u&&e.$(a).attr({width:u.w,height:u.h}),e.$(a).attr({src:l.blobUri()}).removeAttr("data-mce-src")})),l}))}function ae(e,t,n,r){return function(){return ee(e).fold((function(){Z(e,"Could not find selected image")}),(function(o){return e._scanForImages().then((function(){return re(e,o.dom)})).then((function(i){return H(i).then(n).then((function(n){return ie(e,i,n,!1,t,o.dom,r)}))})).catch((function(t){Z(e,t)}))}))}}function ue(e,t,n){return function(){var r=ee(e).map((function(e){var t=G(e.dom)
return t?{w:t.h,h:t.w}:null})).getOrNull()
return ae(e,t,(function(e){return r=n,(t=e).toCanvas().then((function(e){return function(e,t,n){var r=(n<0?360+n:n)*Math.PI/180,o=e.width,i=e.height,a=Math.sin(r),u=Math.cos(r),c=L(Math.abs(o*u)+Math.abs(i*a)),s=L(Math.abs(o*a)+Math.abs(i*u)),f=y(c,s),l=I(f)
return l.translate(c/2,s/2),l.rotate(r),l.drawImage(e,-o/2,-i/2),O(f,t)}(e,t.getType(),r)}))
var t,r}),r)()}}function ce(e,t,n){return function(){return ae(e,t,(function(e){return r=n,(t=e).toCanvas().then((function(e){return function(e,t,n){var r=y(e.width,e.height),o=I(r)
return"v"===n?(o.scale(1,-1),o.drawImage(e,0,-r.height)):(o.scale(-1,1),o.drawImage(e,-r.width,0)),O(r,t)}(e,t.getType(),r)}))
var t,r}))()}}function se(e,t){return function(){var r=ee(e),o=r.map((function(e){return J(e.dom)}))
r.each((function(i){Y(e,i.dom).each((function(a){re(e,i.dom).then((function(i){var a={blob:i,url:URL.createObjectURL(i)}
e.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:a}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(n){var i=n.getData().imagetools.blob
r.each((function(n){o.each((function(r){var o,a,u,c,s
o=e,a=t,u=n.dom,c=r,j(s=i).then((function(e){var t,n,r,o,i=J(e)
return c.w===i.w&&c.h===i.h||G(u)&&(t=u,(n=i)&&(r=t.style.width,o=t.style.height,(r||o)&&(t.style.width=n.w+"px",t.style.height=n.h+"px",t.removeAttribute("data-mce-style")),r=t.width,o=t.height,(r||o)&&(t.setAttribute("width",String(n.w)),t.setAttribute("height",String(n.h))))),URL.revokeObjectURL(e.src),s})).then(H).then((function(e){return ie(o,s,e,!0,a,u)}))}))})),n.close()},onCancel:n,onAction:function(e,t){switch(t.name){case"save-state":t.value?e.enable("save"):e.disable("save")
break
case"disable":e.disable("save"),e.disable("cancel")
break
case"enable":e.enable("cancel")}}})}))}))}))}}"undefined"!=typeof window||Function("return this;")()
var fe=tinymce.util.Tools.resolve("tinymce.util.Delay"),le=tinymce.util.Tools.resolve("tinymce.util.Promise"),de=tinymce.util.Tools.resolve("tinymce.util.URI"),me=0,he=function(e,t){var n=t.src
return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new de(n).host===e.documentBaseURI.host},ge=function(e,t){return-1!==s.inArray(e.getParam("imagetools_cors_hosts",[],"string[]"),new de(t.src).host)}
c.add("imagetools",(function(t){var n,r,o,i,a=e(0),u=e(null),c=t
s.each({mceImageRotateLeft:ue(c,a,-90),mceImageRotateRight:ue(c,a,90),mceImageFlipVertical:ce(c,a,"v"),mceImageFlipHorizontal:ce(c,a,"h"),mceEditImage:se(c,a)},(function(e,t){c.addCommand(t,e)})),function(e){function t(t){return function(){return e.execCommand(t)}}function n(){return ee(e).exists((function(t){return Y(e,t.dom).isSome()}))}function r(e){function t(t){return e.setDisabled(!t)}return t(n()),o=o.concat([t]),function(){o=function(e){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
i!==t&&n.push(i)}return n}(o)}}var o=[]
e.on("NodeChange",(function(){var e=n()
E(o,(function(t){return t(e)}))})),e.ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:t("mceImageRotateLeft"),onSetup:r}),e.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:t("mceImageRotateRight"),onSetup:r}),e.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:t("mceImageFlipVertical"),onSetup:r}),e.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:t("mceImageFlipHorizontal"),onSetup:r}),e.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:t("mceEditImage"),onSetup:r}),e.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image",onAction:t("mceImage")}),e.ui.registry.addContextMenu("imagetools",{update:function(n){return Y(e,n).map((function(e){return{text:"Edit image",icon:"edit-image",onAction:t("mceEditImage")}})).toArray()}})}(t),(n=t).ui.registry.addContextToolbar("imagetools",{items:n.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions"),predicate:function(e){return Y(n,e).isSome()},position:"node",scope:"node"}),o=a,i=u,(r=t).on("NodeChange",(function(e){var t=i.get(),n=Y(r,e.element)
t&&!n.exists((function(e){return t.src===e.src}))&&(oe(o),r.editorUpload.uploadImagesAuto(),i.set(null)),n.each(i.set)}))}))}()

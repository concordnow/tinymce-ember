(function(){"use strict"
var t,n,e,r,o=function(t){var n=t
return{get:function(){return n},set:function(t){n=t}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=tinymce.util.Tools.resolve("tinymce.util.Tools"),a=function(){},c=function(t){return function(){return t}},f=c(!1),s=c(!0),l=function(){return d},d=(t=function(t){return t.isNone()},{fold:function(t,n){return t()},is:f,isSome:f,isNone:s,getOr:e=function(t){return t},getOrThunk:n=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(void 0),or:e,orThunk:n,map:l,each:a,bind:l,exists:f,forall:s,filter:l,equals:t,equals_:t,toArray:function(){return[]},toString:c("none()")}),m=function(t){var n=c(t),e=function(){return o},r=function(n){return n(t)},o={fold:function(n,e){return e(t)},is:function(n){return t===n},isSome:s,isNone:f,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:e,orThunk:e,map:function(n){return m(n(t))},each:function(n){n(t)},bind:r,exists:r,forall:r,filter:function(n){return n(t)?o:d},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(n){return n.is(t)},equals_:function(n,e){return n.fold(f,(function(n){return e(t,n)}))}}
return o},h={some:m,none:l,from:function(t){return null==t?d:m(t)}},g=(r="function",function(t){return typeof t===r})
function v(t,n){return w(document.createElement("canvas"),t,n)}function p(t){var n=v(t.width,t.height)
return y(n).drawImage(t,0,0),n}function y(t){return t.getContext("2d")}function w(t,n,e){return t.width=n,t.height=e,t}var b=window.Promise?window.Promise:function(){var t=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof t)throw new TypeError("not a function")
this._state=null,this._value=null,this._deferreds=[],s(t,r(u,this),r(a,this))},n=window,e=t.immediateFn||"function"==typeof n.setImmediate&&n.setImmediate||function(t){setTimeout(t,1)}
function r(t,n){return function(){return t.apply(n,arguments)}}var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}
function i(t){var n=this
null!==this._state?e((function(){var e=n._state?t.onFulfilled:t.onRejected
if(null!==e){var r
try{r=e(n._value)}catch(o){return void t.reject(o)}t.resolve(r)}else(n._state?t.resolve:t.reject)(n._value)})):this._deferreds.push(t)}function u(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if("function"==typeof n)return void s(r(n,t),r(u,this),r(a,this))}this._state=!0,this._value=t,c.call(this)}catch(e){a.call(this,e)}}function a(t){this._state=!1,this._value=t,c.call(this)}function c(){for(var t=0,n=this._deferreds;t<n.length;t++){var e=n[t]
i.call(this,e)}this._deferreds=[]}function f(t,n,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof n?n:null,this.resolve=e,this.reject=r}function s(t,n,e){var r=!1
try{t((function(t){r||(r=!0,n(t))}),(function(t){r||(r=!0,e(t))}))}catch(o){if(r)return
r=!0,e(o)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.then=function(n,e){var r=this
return new t((function(t,o){i.call(r,new f(n,e,t,o))}))},t.all=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e]
var r=Array.prototype.slice.call(1===n.length&&o(n[0])?n[0]:n)
return new t((function(t,n){if(0===r.length)return t([])
var e=r.length
function o(i,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var a=u.then
if("function"==typeof a)return void a.call(u,(function(t){o(i,t)}),n)}r[i]=u,0==--e&&t(r)}catch(c){n(c)}}for(var i=0;i<r.length;i++)o(i,r[i])}))},t.resolve=function(n){return n&&"object"==typeof n&&n.constructor===t?n:new t((function(t){t(n)}))},t.reject=function(n){return new t((function(t,e){e(n)}))},t.race=function(n){return new t((function(t,e){for(var r=0,o=n;r<o.length;r++){o[r].then(t,e)}}))},t}()
function I(t){var n,e=t.src
return 0===e.indexOf("data:")?_(e):(n=e,new b((function(t,e){var r=new XMLHttpRequest
r.open("GET",n,!0),r.responseType="blob",r.onload=function(){200===this.status&&t(this.response)},r.onerror=function(){var t=this,n=function(){var t=new Error("No access to download image")
return t.code=18,t.name="SecurityError",t},r=function(){return new Error("Error "+t.status+" downloading image")}
e(0===this.status?n():r())},r.send()})))}function T(t){return new b((function(n,e){var r=URL.createObjectURL(t),o=new Image,i=function(){o.removeEventListener("load",u),o.removeEventListener("error",a)}
function u(){i(),n(o)}function a(){i(),e("Unable to load data of type "+t.type+": "+r)}o.addEventListener("load",u),o.addEventListener("error",a),o.src=r,o.complete&&u()}))}function _(t){return new b((function(n,e){(function(t){var n=t.split(","),e=/data:([^;]+)/.exec(n[0])
if(!e)return h.none()
for(var r=e[1],o=n[1],i=1024,u=atob(o),a=u.length,c=Math.ceil(a/i),f=new Array(c),s=0;s<c;++s){for(var l=s*i,d=Math.min(l+i,a),m=new Array(d-l),g=l,v=0;g<d;++v,++g)m[v]=u[g].charCodeAt(0)
f[s]=new Uint8Array(m)}return h.some(new Blob(f,{type:r}))})(t).fold((function(){e("uri is not base64: "+t)}),n)}))}function R(t,n,e){return n=n||"image/png",g(HTMLCanvasElement.prototype.toBlob)?new b((function(r,o){t.toBlob((function(t){t?r(t):o()}),n,e)})):_(t.toDataURL(n,e))}function U(t){return T(t).then((function(t){(function(t){URL.revokeObjectURL(t.src)})(t)
var n=v(function(t){return t.naturalWidth||t.width}(t),function(t){return t.naturalHeight||t.height}(t))
return y(n).drawImage(t,0,0),n}))}var A=function(t,n){return function(t,n,e){for(var r=0,o=t.length;r<o;r++){var i=t[r]
if(n(i,r))return h.some(i)
if(e(i,r))break}return h.none()}(t,n,f)}
function E(t,n,e){var r=n.type
function o(n,e){return t.then((function(t){return function(t,n,e){return n=n||"image/png",t.toDataURL(n,e)}(t,n,e)}))}return{getType:c(r),toBlob:function(){return b.resolve(n)},toDataURL:c(e),toBase64:function(){return e.split(",")[1]},toAdjustedBlob:function(n,e){return t.then((function(t){return R(t,n,e)}))},toAdjustedDataURL:o,toAdjustedBase64:function(t,n){return o(t,n).then((function(t){return t.split(",")[1]}))},toCanvas:function(){return t.then(p)}}}function j(t){return function(t){return new b((function(n){var e=new FileReader
e.onloadend=function(){n(e.result)},e.readAsDataURL(t)}))}(t).then((function(n){return E(U(t),t,n)}))}function x(t,n){return R(t,n).then((function(n){return E(b.resolve(t),n,t.toDataURL())}))}function L(t,n){return t.toCanvas().then((function(e){return function(t,n,e){var r=v(t.width,t.height),o=y(r),i=0,u=0
90!==(e=e<0?360+e:e)&&270!==e||w(r,r.height,r.width)
90!==e&&180!==e||(i=r.width)
270!==e&&180!==e||(u=r.height)
return o.translate(i,u),o.rotate(e*Math.PI/180),o.drawImage(t,0,0),x(r,n)}(e,t.getType(),n)}))}function k(t,n){return t.toCanvas().then((function(e){return function(t,n,e){var r=v(t.width,t.height),o=y(r)
"v"===e?(o.scale(1,-1),o.drawImage(t,0,-r.height)):(o.scale(-1,1),o.drawImage(t,-r.width,0))
return x(r,n)}(e,t.getType(),n)}))}var C=Object.keys,O=function(t,n,e){return void 0===e&&(e=!1),new b((function(r){var o=new XMLHttpRequest
o.onreadystatechange=function(){4===o.readyState&&r({status:o.status,blob:o.response})},o.open("GET",t,!0),o.withCredentials=e,function(t,n){for(var e=C(t),r=0,o=e.length;r<o;r++){var i=e[r]
n(t[i],i)}}(n,(function(t,n){o.setRequestHeader(n,t)})),o.responseType="blob",o.send()}))},P=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],S=[{type:"not_found",message:"Failed to load image."},{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],M=function(t){var n=function(t){return"ImageProxy HTTP error: "+A(P,(function(n){return t===n.code})).fold(c("Unknown ImageProxy error"),(function(t){return t.message}))}(t)
return b.reject(n)},B=function(t){return A(S,(function(n){return n.type===t})).fold(c("Unknown service error"),(function(t){return t.message}))},N=function(t){return"ImageProxy Service error: "+function(t){try{return h.some(JSON.parse(t))}catch(n){return h.none()}}(t).bind((function(t){return(n=t,e=["error","type"],r=function(t,n){return null==t?void 0:t[n]},o=n,function(t,n){for(var e=0,r=t.length;e<r;e++)n(t[e],e)}(e,(function(t){o=r(o,t)})),i=o,h.from(i)).map(B)
var n,e,r,o,i})).getOr("Invalid JSON in service error message")},D=function(t){return function(t){return new b((function(n,e){var r=new FileReader
r.onload=function(){n(r.result)},r.onerror=function(t){e(t)},r.readAsText(t)}))}(t).then((function(t){var n=N(t)
return b.reject(n)}))},F=function(t){return t<200||t>=300},H=function(t,n){var e={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":n}
return O(function(t,n){var e=-1===t.indexOf("?")?"?":"&"
return/[?&]apiKey=/.test(t)?t:t+e+"apiKey="+encodeURIComponent(n)}(t,n),e).then((function(t){return F(t.status)?(n=t.status,e=t.blob,function(t,n){return"application/json"===(null==n?void 0:n.type)&&(400===t||403===t||404===t||500===t)}(n,e)?D(e):M(n)):b.resolve(t.blob)
var n,e}))},q=function(t,n,e){return void 0===e&&(e=!1),n?H(t,n):function(t,n){return O(t,{},n).then((function(t){return F(t.status)?M(t.status):b.resolve(t.blob)}))}(t,e)},z=function(t){return j(t)},$=function(t){if(null==t)throw new Error("Node cannot be null or undefined")
return{dom:t}},G={fromHtml:function(t,n){var e=(n||document).createElement("div")
if(e.innerHTML=t,!e.hasChildNodes()||e.childNodes.length>1)throw console.error("HTML does not have a single root node",t),new Error("HTML must have a single root node")
return $(e.childNodes[0])},fromTag:function(t,n){var e=(n||document).createElement(t)
return $(e)},fromText:function(t,n){var e=(n||document).createTextNode(t)
return $(e)},fromDom:$,fromPoint:function(t,n,e){return h.from(t.dom.elementFromPoint(n,e)).map($)}},J=("undefined"!=typeof window?window:Function("return this;")(),function(t,n){return function(t,n){return A(t.dom.childNodes,(function(t){return n(G.fromDom(t))})).map(G.fromDom)}(t,(function(t){return function(t,n){var e=t.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(n)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(n)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(n)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(n)
throw new Error("Browser lacks native selectors")}(t,n)}))}),K=tinymce.util.Tools.resolve("tinymce.util.Delay"),V=tinymce.util.Tools.resolve("tinymce.util.Promise"),W=tinymce.util.Tools.resolve("tinymce.util.URI"),X=function(t){return t.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions")},Q=function(t){return t.getParam("imagetools_proxy")}
function Y(t){var n,e
function r(t){return/^[0-9\.]+px$/.test(t)}return n=t.style.width,e=t.style.height,n||e?r(n)&&r(e)?{w:parseInt(n,10),h:parseInt(e,10)}:null:(n=t.width,e=t.height,n&&e?{w:parseInt(n,10),h:parseInt(e,10)}:null)}function Z(t){return{w:t.naturalWidth,h:t.naturalHeight}}var tt=0,nt=function(t){return J(G.fromDom(t),"img")},et=function(t,n){return t.dom.is(n,"figure")},rt=function(t,n){var e=function(n){return function(n){return t.dom.is(n,"img:not([data-mce-object],[data-mce-placeholder])")}(n)&&(ut(t,n)||at(t,n)||Q(t))}
return et(t,n)?nt(n).map((function(t){return e(t.dom)?h.some(t.dom):h.none()})):e(n)?h.some(n):h.none()},ot=function(t,n){t.notificationManager.open({text:n,type:"error"})},it=function(t){var n=t.selection.getNode()
return et(t,n)?nt(n):h.some(G.fromDom(n))},ut=function(t,n){var e=n.src
return 0===e.indexOf("data:")||0===e.indexOf("blob:")||new W(e).host===t.documentBaseURI.host},at=function(t,n){return-1!==u.inArray(function(t){return t.getParam("imagetools_cors_hosts",[],"string[]")}(t),new W(n.src).host)},ct=function(t,n){if(at(t,n))return q(n.src,null,function(t,n){return-1!==u.inArray(function(t){return t.getParam("imagetools_credentials_hosts",[],"string[]")}(t),new W(n.src).host)}(t,n))
if(!ut(t,n)){var e=Q(t),r=e+(-1===e.indexOf("?")?"?":"&")+"url="+encodeURIComponent(n.src),o=function(t){return t.getParam("api_key",t.getParam("imagetools_api_key","","string"),"string")}(t)
return q(r,o,!1)}return I(n)},ft=function(t,n){return function(t){return h.from(t.getParam("imagetools_fetch_image",null,"function"))}(t).fold((function(){return ct(t,n)}),(function(t){return t(n)}))},st=function(t,n){var e=t.editorUpload.blobCache.getByUri(n.src)
return e?V.resolve(e.blob()):ft(t,n)},lt=function(t){K.clearTimeout(t.get())},dt=function(t,n,e,r,o,i){return n.toBlob().then((function(u){var a,c,f,s=t.editorUpload.blobCache
return a=o.src,function(t){return t.getParam("images_reuse_filename",!1,"boolean")}(t)&&((f=s.getByUri(a))?(a=f.uri(),c=f.name()):c=function(t,n){var e=n.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i)
return e?t.dom.encode(e[1]):null}(t,a)),f=s.create({id:"imagetools"+tt++,blob:u,base64:n.toBase64(),uri:a,name:c}),s.add(f),t.undoManager.transact((function(){t.$(o).on("load",(function n(){t.$(o).off("load",n),t.nodeChanged(),e?t.editorUpload.uploadImagesAuto():(lt(r),function(t,n){var e=K.setEditorTimeout(t,(function(){t.editorUpload.uploadImagesAuto()}),function(t){return t.getParam("images_upload_timeout",3e4,"number")}(t))
n.set(e)}(t,r))})),i&&t.$(o).attr({width:i.w,height:i.h}),t.$(o).attr({src:f.blobUri()}).removeAttr("data-mce-src")})),f}))},mt=function(t,n,e,r){return function(){return it(t).fold((function(){ot(t,"Could not find selected image")}),(function(o){return t._scanForImages().then((function(){return st(t,o.dom)})).then(z).then(e).then((function(e){return dt(t,e,!1,n,o.dom,r)}),(function(n){ot(t,n)}))}))}},ht=function(t,n,e){return function(){var r=it(t).fold((function(){return null}),(function(t){var n=Y(t.dom)
return n?{w:n.h,h:n.w}:null}))
return mt(t,n,(function(t){return function(t,n){return L(t,n)}(t,e)}),r)()}},gt=function(t,n,e){return function(){return mt(t,n,(function(t){return function(t,n){return k(t,n)}(t,e)}))()}},vt=function(t,n,e,r,o){return function(t){return T(t)}(o).then((function(t){var n=Z(t)
return r.w===n.w&&r.h===n.h||Y(e)&&function(t,n){var e,r
n&&(e=t.style.width,r=t.style.height,(e||r)&&(t.style.width=n.w+"px",t.style.height=n.h+"px",t.removeAttribute("data-mce-style")),e=t.width,r=t.height,(e||r)&&(t.setAttribute("width",n.w),t.setAttribute("height",n.h)))}(e,n),URL.revokeObjectURL(t.src),o})).then(z).then((function(r){return dt(t,r,!0,n,e)}),(function(){}))},pt=function(t,n){return function(){var e=it(t),r=e.map((function(t){return Z(t.dom)}))
it(t).each((function(o){rt(t,o.dom).each((function(i){st(t,o.dom).then((function(o){var i=function(t){return{blob:t,url:URL.createObjectURL(t)}}(o)
t.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:i}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(o){var i=o.getData().imagetools.blob
e.each((function(e){r.each((function(r){vt(t,n,e.dom,r,i)}))})),o.close()},onCancel:function(){},onAction:function(t,n){switch(n.name){case"save-state":n.value?t.enable("save"):t.disable("save")
break
case"disable":t.disable("save"),t.disable("cancel")
break
case"enable":t.enable("cancel")}}})}))}))}))}}
i.add("imagetools",(function(t){var n=o(0),e=o(null);(function(t,n){u.each({mceImageRotateLeft:ht(t,n,-90),mceImageRotateRight:ht(t,n,90),mceImageFlipVertical:gt(t,n,"v"),mceImageFlipHorizontal:gt(t,n,"h"),mceEditImage:pt(t,n)},(function(n,e){t.addCommand(e,n)}))})(t,n),function(t){var n=function(n){return function(){return t.execCommand(n)}}
t.ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:n("mceImageRotateLeft")}),t.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:n("mceImageRotateRight")}),t.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:n("mceImageFlipVertical")}),t.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:n("mceImageFlipHorizontal")}),t.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:n("mceEditImage"),onSetup:function(n){var e=function(){it(t).each((function(e){var r=rt(t,e.dom).isNone()
n.setDisabled(r)}))}
return t.on("NodeChange",e),function(){t.off("NodeChange",e)}}}),t.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image",onAction:n("mceImage")}),t.ui.registry.addContextMenu("imagetools",{update:function(e){return rt(t,e).fold((function(){return[]}),(function(t){return[{text:"Edit image",icon:"edit-image",onAction:n("mceEditImage")}]}))}})}(t),function(t){t.ui.registry.addContextToolbar("imagetools",{items:X(t),predicate:function(n){return rt(t,n).isSome()},position:"node",scope:"node"})}(t),function(t,n,e){t.on("NodeChange",(function(r){var o=e.get()
o&&o.src!==r.element.src&&(lt(n),t.editorUpload.uploadImagesAuto(),e.set(null)),rt(t,r.element).each(e.set)}))}(t,n,e)}))})()

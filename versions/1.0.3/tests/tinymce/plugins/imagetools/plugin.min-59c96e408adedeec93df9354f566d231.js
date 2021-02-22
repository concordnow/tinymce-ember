!function(){"use strict"
var t,e,n,r=function(t){var e=t
return{get:function(){return e},set:function(t){e=t}}},o=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),u=function(t){return function(){return t}},a=u(!1),c=u(!0),s=function(){return f},f=(t=function(t){return t.isNone()},{fold:function(t,e){return t()},is:a,isSome:a,isNone:c,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(void 0),or:n,orThunk:e,map:s,each:function(){},bind:s,exists:a,forall:c,filter:s,equals:t,equals_:t,toArray:function(){return[]},toString:u("none()")}),l=function(t){var e=u(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:c,isNone:a,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return l(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:f},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(a,(function(e){return n(t,e)}))}}
return o},d={some:l,none:s,from:function(t){return null==t?f:l(t)}},h=("function",function(t){return"function"==typeof t})
function m(t,e){return p(document.createElement("canvas"),t,e)}function g(t){var e=m(t.width,t.height)
return v(e).drawImage(t,0,0),e}function v(t){return t.getContext("2d")}function p(t,e,n){return t.width=e,t.height=n,t}var y,w,b,I,_=window.Promise?window.Promise:(y=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof t)throw new TypeError("not a function")
this._state=null,this._value=null,this._deferreds=[],E(t,R(U,this),R(A,this))},w=window,b=y.immediateFn||"function"==typeof w.setImmediate&&w.setImmediate||function(t){setTimeout(t,1)},I=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},y.prototype.catch=function(t){return this.then(null,t)},y.prototype.then=function(t,e){var n=this
return new y((function(r,o){T.call(n,new x(t,e,r,o))}))},y.all=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n=Array.prototype.slice.call(1===t.length&&I(t[0])?t[0]:t)
return new y((function(t,e){if(0===n.length)return t([])
for(var r=n.length,o=0;o<n.length;o++)!function o(i,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var a=u.then
if("function"==typeof a)return void a.call(u,(function(t){o(i,t)}),e)}n[i]=u,0==--r&&t(n)}catch(c){e(c)}}(o,n[o])}))},y.resolve=function(t){return t&&"object"==typeof t&&t.constructor===y?t:new y((function(e){e(t)}))},y.reject=function(t){return new y((function(e,n){n(t)}))},y.race=function(t){return new y((function(e,n){for(var r=0,o=t;r<o.length;r++)o[r].then(e,n)}))},y)
function R(t,e){return function(){return t.apply(e,arguments)}}function T(t){var e=this
null!==this._state?b((function(){var r,o=e._state?t.onFulfilled:t.onRejected
if(null!==o){try{r=o(e._value)}catch(n){return void t.reject(n)}t.resolve(r)}else(e._state?t.resolve:t.reject)(e._value)})):this._deferreds.push(t)}function U(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then
if("function"==typeof e)return void E(R(e,t),R(U,this),R(A,this))}this._state=!0,this._value=t,j.call(this)}catch(n){A.call(this,n)}}function A(t){this._state=!1,this._value=t,j.call(this)}function j(){for(var t=0,e=this._deferreds;t<e.length;t++){var n=e[t]
T.call(this,n)}this._deferreds=[]}function x(t,e,n,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=r}function E(t,e,n){var r=!1
try{t((function(t){r||(r=!0,e(t))}),(function(t){r||(r=!0,n(t))}))}catch(o){if(r)return
r=!0,n(o)}}function k(t){return new _((function(e,n){var r=URL.createObjectURL(t),o=new Image,i=function(){o.removeEventListener("load",u),o.removeEventListener("error",a)}
function u(){i(),e(o)}function a(){i(),n("Unable to load data of type "+t.type+": "+r)}o.addEventListener("load",u),o.addEventListener("error",a),o.src=r,o.complete&&u()}))}function O(t){return new _((function(e,n){(function(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0])
if(!n)return d.none()
for(var r=n[1],o=e[1],i=atob(o),u=i.length,a=Math.ceil(u/1024),c=new Array(a),s=0;s<a;++s){for(var f=1024*s,l=Math.min(1024+f,u),h=new Array(l-f),m=f,g=0;m<l;++g,++m)h[g]=i[m].charCodeAt(0)
c[s]=new Uint8Array(h)}return d.some(new Blob(c,{type:r}))})(t).fold((function(){n("uri is not base64: "+t)}),e)}))}function C(t,e,n){return e=e||"image/png",h(HTMLCanvasElement.prototype.toBlob)?new _((function(r,o){t.toBlob((function(t){t?r(t):o()}),e,n)})):O(t.toDataURL(e,n))}var L=k,P=function(t){var e,n=t.src
return 0===n.indexOf("data:")?O(n):(e=n,new _((function(t,n){var r=new XMLHttpRequest
r.open("GET",e,!0),r.responseType="blob",r.onload=function(){200===this.status&&t(this.response)},r.onerror=function(){var t
n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+this.status+" downloading image"))},r.send()})))},S=function(t,e){return function(t,e,n){for(var r=0,o=t.length;r<o;r++){var i=t[r]
if(e(i,r))return d.some(i)
if(n(i,r))break}return d.none()}(t,e,a)}
function B(t,e,n){var r=e.type
function o(e,n){return t.then((function(t){return o=n,r=(r=e)||"image/png",t.toDataURL(r,o)
var r,o}))}return{getType:u(r),toBlob:function(){return _.resolve(e)},toDataURL:u(n),toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(e,n){return t.then((function(t){return C(t,e,n)}))},toAdjustedDataURL:o,toAdjustedBase64:function(t,e){return o(t,e).then((function(t){return t.split(",")[1]}))},toCanvas:function(){return t.then(g)}}}function M(t,e){return C(t,e).then((function(e){return B(_.resolve(t),e,t.toDataURL())}))}var F=function(t,e){return t.toCanvas().then((function(n){return function(t,e,n){var r=m(t.width,t.height),o=v(r)
return"v"===n?(o.scale(1,-1),o.drawImage(t,0,-r.height)):(o.scale(-1,1),o.drawImage(t,-r.width,0)),M(r,e)}(n,t.getType(),e)}))},N=function(t,e){return t.toCanvas().then((function(n){return function(t,e,n){var r=m(t.width,t.height),o=v(r),i=0,u=0
return 90!==(n=n<0?360+n:n)&&270!==n||p(r,r.height,r.width),90!==n&&180!==n||(i=r.width),270!==n&&180!==n||(u=r.height),o.translate(i,u),o.rotate(n*Math.PI/180),o.drawImage(t,0,0),M(r,e)}(n,t.getType(),e)}))},D=Object.keys,q=function(t,e,n){return void 0===n&&(n=!1),new _((function(r){var o=new XMLHttpRequest
o.onreadystatechange=function(){4===o.readyState&&r({status:o.status,blob:o.response})},o.open("GET",t,!0),o.withCredentials=n,function(t,e){for(var n=D(t),r=0,o=n.length;r<o;r++){var i=n[r]
e(t[i],i)}}(e,(function(t,e){o.setRequestHeader(e,t)})),o.responseType="blob",o.send()}))},H=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],z=[{type:"not_found",message:"Failed to load image."},{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],$=function(t){var e,n=(e=t,"ImageProxy HTTP error: "+S(H,(function(t){return e===t.code})).fold(u("Unknown ImageProxy error"),(function(t){return t.message})))
return _.reject(n)},G=function(t){return S(z,(function(e){return e.type===t})).fold(u("Unknown service error"),(function(t){return t.message}))},J=function(t){return"ImageProxy Service error: "+function(t){try{return d.some(JSON.parse(t))}catch(e){return d.none()}}(t).bind((function(t){return function(t,e){var n,r,o=(n=function(t,e){return function(t){return!(null===(e=t)||void 0===e)
var e}(t)?t[e]:void 0},r=t,function(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n])}(e,(function(t){r=n(r,t)})),r)
return d.from(o)}(t,["error","type"]).map(G)})).getOr("Invalid JSON in service error message")},K=function(t){return t<200||300<=t},V=function(t,e){var n,r,o,i={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e}
return q((r=e,o=-1===(n=t).indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)?n:n+o+"apiKey="+encodeURIComponent(r)),i).then((function(t){return K(t.status)?(r=e=t.status,"application/json"!==(null==(o=n=t.blob)?void 0:o.type)||400!==r&&403!==r&&404!==r&&500!==r?$(e):function(t){return e=t,new _((function(t,n){var r=new FileReader
r.onload=function(){t(r.result)},r.onerror=function(t){n(t)},r.readAsText(e)})).then((function(t){var e=J(t)
return _.reject(e)}))
var e}(n)):_.resolve(t.blob)
var e,n,r,o}))},W=function(t,e,n){return void 0===n&&(n=!1),e?V(t,e):q(t,{},n).then((function(t){return K(t.status)?$(t.status):_.resolve(t.blob)}))},X=function(t){return e=t,new _((function(t){var n=new FileReader
n.onloadend=function(){t(n.result)},n.readAsDataURL(e)})).then((function(e){return B(function(t){return k(t).then((function(t){var e
e=t,URL.revokeObjectURL(e.src)
var n,r,o=m((r=t).naturalWidth||r.width,(n=t).naturalHeight||n.height)
return v(o).drawImage(t,0,0),o}))}(t),t,e)}))
var e},Q=function(t){if(null==t)throw new Error("Node cannot be null or undefined")
return{dom:t}},Y=Q,Z=("undefined"!=typeof window||Function("return this;")(),function(t,e){return n=function(t){return function(t,e){var n=t.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(e)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")}(t,e)},S(t.dom.childNodes,(function(t){return n(Y(t))})).map(Y)
var n}),tt=tinymce.util.Tools.resolve("tinymce.util.Delay"),et=tinymce.util.Tools.resolve("tinymce.util.Promise"),nt=tinymce.util.Tools.resolve("tinymce.util.URI"),rt=function(t){return t.getParam("imagetools_proxy")}
function ot(t){var e,n
function r(t){return/^[0-9\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?r(e)&&r(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)}function it(t){return{w:t.naturalWidth,h:t.naturalHeight}}var ut=0,at=function(t){return Z(Y(t),"img")},ct=function(t,e){return t.dom.is(e,"figure")},st=function(t,e){var n=function(e){return n=e,t.dom.is(n,"img:not([data-mce-object],[data-mce-placeholder])")&&(dt(t,e)||ht(t,e)||rt(t))
var n}
return ct(t,e)?at(e).map((function(t){return n(t.dom)?d.some(t.dom):d.none()})):n(e)?d.some(e):d.none()},ft=function(t,e){t.notificationManager.open({text:e,type:"error"})},lt=function(t){var e=t.selection.getNode()
return ct(t,e)?at(e):d.some(Y(e))},dt=function(t,e){var n=e.src
return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new nt(n).host===t.documentBaseURI.host},ht=function(t,e){return-1!==i.inArray(t.getParam("imagetools_cors_hosts",[],"string[]"),new nt(e.src).host)},mt=function(t,e){return n=t,d.from(n.getParam("imagetools_fetch_image",null,"function")).fold((function(){return function(t,e){if(ht(t,e))return W(e.src,null,(n=t,r=e,-1!==i.inArray(n.getParam("imagetools_credentials_hosts",[],"string[]"),new nt(r.src).host)))
var n,r,o
if(dt(t,e))return P(e)
var u=rt(t),a=u+(-1===u.indexOf("?")?"?":"&")+"url="+encodeURIComponent(e.src),c=(o=t).getParam("api_key",o.getParam("imagetools_api_key","","string"),"string")
return W(a,c,!1)}(t,e)}),(function(t){return t(e)}))
var n},gt=function(t,e){var n=t.editorUpload.blobCache.getByUri(e.src)
return n?et.resolve(n.blob()):mt(t,e)},vt=function(t){tt.clearTimeout(t.get())},pt=function(t,e,n,r,o,i){return e.toBlob().then((function(u){var a,c,s,f,l=t.editorUpload.blobCache,d=o.src
return t.getParam("images_reuse_filename",!1,"boolean")&&(a=(c=l.getByUri(d))?(d=c.uri(),c.name()):(s=t,(f=d.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?s.dom.encode(f[1]):null)),c=l.create({id:"imagetools"+ut++,blob:u,base64:e.toBase64(),uri:d,name:a}),l.add(c),t.undoManager.transact((function(){t.$(o).on("load",(function e(){var i,u,a
t.$(o).off("load",e),t.nodeChanged(),n?t.editorUpload.uploadImagesAuto():(vt(r),i=t,u=r,a=tt.setEditorTimeout(i,(function(){i.editorUpload.uploadImagesAuto()}),i.getParam("images_upload_timeout",3e4,"number")),u.set(a))})),i&&t.$(o).attr({width:i.w,height:i.h}),t.$(o).attr({src:c.blobUri()}).removeAttr("data-mce-src")})),c}))},yt=function(t,e,n,r){return function(){return lt(t).fold((function(){ft(t,"Could not find selected image")}),(function(o){return t._scanForImages().then((function(){return gt(t,o.dom)})).then(X).then(n).then((function(n){return pt(t,n,!1,e,o.dom,r)}),(function(e){ft(t,e)}))}))}},wt=function(t,e,n){return function(){var r=lt(t).fold((function(){return null}),(function(t){var e=ot(t.dom)
return e?{w:e.h,h:e.w}:null}))
return yt(t,e,(function(t){return N(t,n)}),r)()}},bt=function(t,e,n){return function(){return yt(t,e,(function(t){return F(t,n)}))()}},It=function(t,e){return function(){var n=lt(t),r=n.map((function(t){return it(t.dom)}))
lt(t).each((function(o){st(t,o.dom).each((function(i){gt(t,o.dom).then((function(o){var i,u={blob:i=o,url:URL.createObjectURL(i)}
t.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:u}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(o){var i=o.getData().imagetools.blob
n.each((function(n){r.each((function(r){(function(t,e,n,r,o){L(o).then((function(t){var e,i,u,a,c=it(t)
return r.w===c.w&&r.h===c.h||ot(n)&&(e=n,(i=c)&&(u=e.style.width,a=e.style.height,(u||a)&&(e.style.width=i.w+"px",e.style.height=i.h+"px",e.removeAttribute("data-mce-style")),u=e.width,a=e.height,(u||a)&&(e.setAttribute("width",i.w),e.setAttribute("height",i.h)))),URL.revokeObjectURL(t.src),o})).then(X).then((function(r){return pt(t,r,!0,e,n)}),(function(){}))})(t,e,n.dom,r,i)}))})),o.close()},onCancel:function(){},onAction:function(t,e){switch(e.name){case"save-state":e.value?t.enable("save"):t.disable("save")
break
case"disable":t.disable("save"),t.disable("cancel")
break
case"enable":t.enable("cancel")}}})}))}))}))}}
o.add("imagetools",(function(t){var e,n,o,u,a,c,s,f,l=r(0),d=r(null)
e=t,n=l,i.each({mceImageRotateLeft:wt(e,n,-90),mceImageRotateRight:wt(e,n,90),mceImageFlipVertical:bt(e,n,"v"),mceImageFlipHorizontal:bt(e,n,"h"),mceEditImage:It(e,n)},(function(t,n){e.addCommand(n,t)})),u=function(t){return function(){return o.execCommand(t)}},(o=t).ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:u("mceImageRotateLeft")}),o.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:u("mceImageRotateRight")}),o.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:u("mceImageFlipVertical")}),o.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:u("mceImageFlipHorizontal")}),o.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:u("mceEditImage"),onSetup:function(t){var e=function(){lt(o).each((function(e){var n=st(o,e.dom).isNone()
t.setDisabled(n)}))}
return o.on("NodeChange",e),function(){o.off("NodeChange",e)}}}),o.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image",onAction:u("mceImage")}),o.ui.registry.addContextMenu("imagetools",{update:function(t){return st(o,t).fold((function(){return[]}),(function(t){return[{text:"Edit image",icon:"edit-image",onAction:u("mceEditImage")}]}))}}),(a=t).ui.registry.addContextToolbar("imagetools",{items:a.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions"),predicate:function(t){return st(a,t).isSome()},position:"node",scope:"node"}),s=l,f=d,(c=t).on("NodeChange",(function(t){var e=f.get()
e&&e.src!==t.element.src&&(vt(s),c.editorUpload.uploadImagesAuto(),f.set(null)),st(c,t.element).each(f.set)}))}))}()

!function(){"use strict"
var t,e,n,r,o,i,u,a,c,s=function(t){var e=t
return{get:function(){return e},set:function(t){e=t}}},f=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=tinymce.util.Tools.resolve("tinymce.util.Tools"),d=function(){},m=function(t){return function(){return t}},h=m(!1),g=m(!0),v=function(){return p},p=(t=function(t){return t.isNone()},{fold:function(t,e){return t()},is:h,isSome:h,isNone:g,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:m(null),getOrUndefined:m(void 0),or:n,orThunk:e,map:v,each:d,bind:v,exists:h,forall:g,filter:v,equals:t,equals_:t,toArray:function(){return[]},toString:m("none()")}),y=function(t){var e=m(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:g,isNone:h,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return y(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:p},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(h,(function(e){return n(t,e)}))}}
return o},w={some:y,none:v,from:function(t){return null==t?p:y(t)}},b=function(t){return!(null===(e=t)||void 0===e)
var e},I=("function",function(t){return"function"==typeof t}),_=function(t,e){return U(document.createElement("canvas"),t,e)},R=function(t){var e=_(t.width,t.height)
return T(e).drawImage(t,0,0),e},T=function(t){return t.getContext("2d")},U=function(t,e,n){return t.width=e,t.height=n,t},A=window.Promise?window.Promise:(r=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof t)throw new TypeError("not a function")
this._state=null,this._value=null,this._deferreds=[],c(t,u(j,this),u(E,this))},o=window,i=r.immediateFn||"function"==typeof o.setImmediate&&o.setImmediate||function(t){return setTimeout(t,1)},u=function(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t.apply(e,n)}},a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},c=function(t,e,n){var r=!1
try{t((function(t){r||(r=!0,e(t))}),(function(t){r||(r=!0,n(t))}))}catch(o){if(r)return
r=!0,n(o)}},r.prototype.catch=function(t){return this.then(null,t)},r.prototype.then=function(t,e){var n=this
return new r((function(r,o){x.call(n,new O(t,e,r,o))}))},r.all=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
var n=Array.prototype.slice.call(1===t.length&&a(t[0])?t[0]:t)
return new r((function(t,e){if(0===n.length)return t([])
for(var r=n.length,o=function(i,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var a=u.then
if("function"==typeof a)return void a.call(u,(function(t){o(i,t)}),e)}n[i]=u,0==--r&&t(n)}catch(c){e(c)}},i=0;i<n.length;i++)o(i,n[i])}))},r.resolve=function(t){return t&&"object"==typeof t&&t.constructor===r?t:new r((function(e){e(t)}))},r.reject=function(t){return new r((function(e,n){n(t)}))},r.race=function(t){return new r((function(e,n){for(var r=0,o=t;r<o.length;r++)o[r].then(e,n)}))},r)
function x(t){var e=this
null!==this._state?i((function(){var r,o=e._state?t.onFulfilled:t.onRejected
if(null!==o){try{r=o(e._value)}catch(n){return void t.reject(n)}t.resolve(r)}else(e._state?t.resolve:t.reject)(e._value)})):this._deferreds.push(t)}function j(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then
if("function"==typeof e)return void c(u(e,t),u(j,this),u(E,this))}this._state=!0,this._value=t,k.call(this)}catch(n){E.call(this,n)}}function E(t){this._state=!1,this._value=t,k.call(this)}function k(){for(var t=0,e=this._deferreds;t<e.length;t++){var n=e[t]
x.call(this,n)}this._deferreds=[]}function O(t,e,n,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=r}var C=function(t){return new A((function(e,n){var r=URL.createObjectURL(t),o=new Image,i=function(){o.removeEventListener("load",u),o.removeEventListener("error",a)},u=function(){i(),e(o)},a=function(){i(),n("Unable to load data of type "+t.type+": "+r)}
o.addEventListener("load",u),o.addEventListener("error",a),o.src=r,o.complete&&setTimeout(u,0)}))},L=function(t){return new A((function(e,n){var r=new XMLHttpRequest
r.open("GET",t,!0),r.responseType="blob",r.onload=function(){200===this.status&&e(this.response)},r.onerror=function(){var t
n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+this.status+" downloading image"))},r.send()}))},S=function(t){return new A((function(e,n){(function(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0])
if(!n)return w.none()
for(var r=n[1],o=e[1],i=atob(o),u=i.length,a=Math.ceil(u/1024),c=new Array(a),s=0;s<a;++s){for(var f=1024*s,l=Math.min(1024+f,u),d=new Array(l-f),m=f,h=0;m<l;++h,++m)d[h]=i[m].charCodeAt(0)
c[s]=new Uint8Array(d)}return w.some(new Blob(c,{type:r}))})(t).fold((function(){n("uri is not base64: "+t)}),e)}))},P=function(t,e,n){return e=e||"image/png",I(HTMLCanvasElement.prototype.toBlob)?new A((function(r,o){t.toBlob((function(t){t?r(t):o()}),e,n)})):S(t.toDataURL(e,n))},B=function(t){URL.revokeObjectURL(t.src)},M=C,F=function(t){return(0===(e=t.src).indexOf("data:")?S:L)(e)
var e},N=function(t,e){return function(t,e,n){for(var r=0,o=t.length;r<o;r++){var i=t[r]
if(e(i,r))return w.some(i)
if(n(i,r))break}return w.none()}(t,e,h)},D=function(t,e,n){var r=e.type,o=m(r),i=m(n),u=function(e,n){return t.then((function(t){return o=n,r=(r=e)||"image/png",t.toDataURL(r,o)
var r,o}))}
return{getType:o,toBlob:function(){return A.resolve(e)},toDataURL:i,toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(e,n){return t.then((function(t){return P(t,e,n)}))},toAdjustedDataURL:u,toAdjustedBase64:function(t,e){return u(t,e).then((function(t){return t.split(",")[1]}))},toCanvas:function(){return t.then(R)}}},q=function(t,e){return P(t,e).then((function(e){return D(A.resolve(t),e,t.toDataURL())}))},H=function(t,e){return r=e,(n=t).toCanvas().then((function(t){return function(t,e,n){var r=_(t.width,t.height),o=T(r)
return"v"===n?(o.scale(1,-1),o.drawImage(t,0,-r.height)):(o.scale(-1,1),o.drawImage(t,-r.width,0)),q(r,e)}(t,n.getType(),r)}))
var n,r},z=function(t,e){return r=e,(n=t).toCanvas().then((function(t){return function(t,e,n){var r=_(t.width,t.height),o=T(r),i=0,u=0
return 90!==(n=n<0?360+n:n)&&270!==n||U(r,r.height,r.width),90!==n&&180!==n||(i=r.width),270!==n&&180!==n||(u=r.height),o.translate(i,u),o.rotate(n*Math.PI/180),o.drawImage(t,0,0),q(r,e)}(t,n.getType(),r)}))
var n,r},$=Object.keys,G=function(t,e,n){return void 0===n&&(n=!1),new A((function(r){var o=new XMLHttpRequest
o.onreadystatechange=function(){4===o.readyState&&r({status:o.status,blob:o.response})},o.open("GET",t,!0),o.withCredentials=n,function(t,e){for(var n=$(t),r=0,o=n.length;r<o;r++){var i=n[r]
e(t[i],i)}}(e,(function(t,e){o.setRequestHeader(e,t)})),o.responseType="blob",o.send()}))},J=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],K=[{type:"not_found",message:"Failed to load image."},{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],V=function(t){var e,n=(e=t,"ImageProxy HTTP error: "+N(J,(function(t){return e===t.code})).fold(m("Unknown ImageProxy error"),(function(t){return t.message})))
return A.reject(n)},W=function(t){return N(K,(function(e){return e.type===t})).fold(m("Unknown service error"),(function(t){return t.message}))},X=function(t){return"ImageProxy Service error: "+function(t){try{return w.some(JSON.parse(t))}catch(e){return w.none()}}(t).bind((function(t){return function(t,e){var n,r,o=(n=function(t,e){return b(t)?t[e]:void 0},r=t,function(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n])}(e,(function(t){r=n(r,t)})),r)
return w.from(o)}(t,["error","type"]).map(W)})).getOr("Invalid JSON in service error message")},Q=function(t){return t<200||300<=t},Y=function(t,e){var n,r,o,i={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e}
return G((r=e,o=-1===(n=t).indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)?n:n+o+"apiKey="+encodeURIComponent(r)),i).then((function(t){return Q(t.status)?(r=e=t.status,"application/json"!==(null==(o=n=t.blob)?void 0:o.type)||400!==r&&403!==r&&404!==r&&500!==r?V(e):function(t){return e=t,new A((function(t,n){var r=new FileReader
r.onload=function(){t(r.result)},r.onerror=function(t){n(t)},r.readAsText(e)})).then((function(t){var e=X(t)
return A.reject(e)}))
var e}(n)):A.resolve(t.blob)
var e,n,r,o}))},Z=function(t,e,n){return void 0===n&&(n=!1),e?Y(t,e):G(t,{},n).then((function(t){return Q(t.status)?V(t.status):A.resolve(t.blob)}))},tt=function(t){return e=t,new A((function(t){var n=new FileReader
n.onloadend=function(){t(n.result)},n.readAsDataURL(e)})).then((function(e){return D(function(t){return C(t).then((function(t){B(t)
var e,n,r=_((n=t).naturalWidth||n.width,(e=t).naturalHeight||e.height)
return T(r).drawImage(t,0,0),r}))}(t),t,e)}))
var e},et=function(t){if(null==t)throw new Error("Node cannot be null or undefined")
return{dom:t}},nt=et,rt=("undefined"!=typeof window||Function("return this;")(),function(t,e){return n=function(t){return function(t,e){var n=t.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(e)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")}(t,e)},N(t.dom.childNodes,(function(t){return n(nt(t))})).map(nt)
var n}),ot=tinymce.util.Tools.resolve("tinymce.util.Delay"),it=tinymce.util.Tools.resolve("tinymce.util.Promise"),ut=tinymce.util.Tools.resolve("tinymce.util.URI"),at=function(t){return t.getParam("imagetools_proxy")},ct=function(t){var e=function(t){return/^[0-9\.]+px$/.test(t)},n=t.style.width,r=t.style.height
return n||r?e(n)&&e(r)?{w:parseInt(n,10),h:parseInt(r,10)}:null:(n=t.width,r=t.height,n&&r?{w:parseInt(n,10),h:parseInt(r,10)}:null)},st=function(t){return{w:t.naturalWidth,h:t.naturalHeight}},ft=0,lt=function(t){return rt(nt(t),"img")},dt=function(t,e){return t.dom.is(e,"figure")},mt=function(t,e){return t.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")},ht=function(t,e){var n=function(e){return mt(t,e)&&(yt(t,e)||wt(t,e)||b(at(t)))}
return dt(t,e)?lt(e).bind((function(t){return n(t.dom)?w.some(t.dom):w.none()})):n(e)?w.some(e):w.none()},gt=function(t,e){t.notificationManager.open({text:e,type:"error"})},vt=function(t){var e=t.selection.getNode(),n=t.dom.getParent(e,"figure.image")
return null!==n&&dt(t,n)?lt(n):mt(t,e)?w.some(nt(e)):w.none()},pt=function(t,e,n){var r=e.match(/(?:\/|^)(([^\/\?]+)\.(?:[a-z0-9.]+))(?:\?|$)/i)
return b(r)?t.dom.encode(r[n]):null},yt=function(t,e){var n=e.src
return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new ut(n).host===t.documentBaseURI.host},wt=function(t,e){return-1!==l.inArray(t.getParam("imagetools_cors_hosts",[],"string[]"),new ut(e.src).host)},bt=function(t,e){return n=t,w.from(n.getParam("imagetools_fetch_image",null,"function")).fold((function(){return function(t,e){if(wt(t,e))return Z(e.src,null,(n=t,r=e,-1!==l.inArray(n.getParam("imagetools_credentials_hosts",[],"string[]"),new ut(r.src).host)))
var n,r,o
if(yt(t,e))return F(e)
var i=at(t),u=i+(-1===i.indexOf("?")?"?":"&")+"url="+encodeURIComponent(e.src),a=(o=t).getParam("api_key",o.getParam("imagetools_api_key","","string"),"string")
return Z(u,a,!1)}(t,e)}),(function(t){return t(e)}))
var n},It=function(t,e){var n=t.editorUpload.blobCache.getByUri(e.src)
return n?it.resolve(n.blob()):bt(t,e)},_t=function(t){ot.clearTimeout(t.get())},Rt=function(t,e,n,r,o,i,u){return n.toBlob().then((function(a){var c,s,f,l=t.editorUpload.blobCache,d=i.src,m=e.type===a.type
return t.getParam("images_reuse_filename",!1,"boolean")&&(f=l.getByUri(d),s=b(f)?(d=f.uri(),c=f.name(),f.filename()):(c=pt(t,d,2),pt(t,d,1))),f=l.create({id:"imagetools"+ft++,blob:a,base64:n.toBase64(),uri:d,name:c,filename:m?s:void 0}),l.add(f),t.undoManager.transact((function(){var e=function(){var n,u,a
t.$(i).off("load",e),t.nodeChanged(),r?t.editorUpload.uploadImagesAuto():(_t(o),n=t,u=o,a=ot.setEditorTimeout(n,(function(){n.editorUpload.uploadImagesAuto()}),n.getParam("images_upload_timeout",3e4,"number")),u.set(a))}
t.$(i).on("load",e),u&&t.$(i).attr({width:u.w,height:u.h}),t.$(i).attr({src:f.blobUri()}).removeAttr("data-mce-src")})),f}))},Tt=function(t,e,n,r){return function(){return vt(t).fold((function(){gt(t,"Could not find selected image")}),(function(o){return t._scanForImages().then((function(){return It(t,o.dom)})).then((function(i){return tt(i).then(n).then((function(n){return Rt(t,i,n,!1,e,o.dom,r)}))})).catch((function(e){gt(t,e)}))}))}},Ut=function(t,e,n){return function(){var r=vt(t).fold((function(){return null}),(function(t){var e=ct(t.dom)
return e?{w:e.h,h:e.w}:null}))
return Tt(t,e,(function(t){return z(t,n)}),r)()}},At=function(t,e,n){return function(){return Tt(t,e,(function(t){return H(t,n)}))()}},xt=function(t,e){return function(){var n=vt(t),r=n.map((function(t){return st(t.dom)}))
n.each((function(o){ht(t,o.dom).each((function(i){It(t,o.dom).then((function(o){var i,u={blob:i=o,url:URL.createObjectURL(i)}
t.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:u}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(o){var i=o.getData().imagetools.blob
n.each((function(n){r.each((function(r){(function(t,e,n,r,o){M(o).then((function(t){var e,i,u,a,c=st(t)
return r.w===c.w&&r.h===c.h||ct(n)&&(e=n,(i=c)&&(u=e.style.width,a=e.style.height,(u||a)&&(e.style.width=i.w+"px",e.style.height=i.h+"px",e.removeAttribute("data-mce-style")),u=e.width,a=e.height,(u||a)&&(e.setAttribute("width",String(i.w)),e.setAttribute("height",String(i.h))))),URL.revokeObjectURL(t.src),o})).then(tt).then((function(r){return Rt(t,o,r,!0,e,n)}))})(t,e,n.dom,r,i)}))})),o.close()},onCancel:d,onAction:function(t,e){switch(e.name){case"save-state":e.value?t.enable("save"):t.disable("save")
break
case"disable":t.disable("save"),t.disable("cancel")
break
case"enable":t.enable("cancel")}}})}))}))}))}}
f.add("imagetools",(function(t){var e,n,r,o,i,u,a,c,f=s(0),d=s(null)
e=t,n=f,l.each({mceImageRotateLeft:Ut(e,n,-90),mceImageRotateRight:Ut(e,n,90),mceImageFlipVertical:At(e,n,"v"),mceImageFlipHorizontal:At(e,n,"h"),mceEditImage:xt(e,n)},(function(t,n){e.addCommand(n,t)})),o=function(t){return function(){return r.execCommand(t)}},(r=t).ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:o("mceImageRotateLeft")}),r.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:o("mceImageRotateRight")}),r.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:o("mceImageFlipVertical")}),r.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:o("mceImageFlipHorizontal")}),r.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:o("mceEditImage"),onSetup:function(t){var e=function(){var e=vt(r).forall((function(t){return ht(r,t.dom).isNone()}))
t.setDisabled(e)}
return r.on("NodeChange",e),function(){r.off("NodeChange",e)}}}),r.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image",onAction:o("mceImage")}),r.ui.registry.addContextMenu("imagetools",{update:function(t){return ht(r,t).fold((function(){return[]}),(function(t){return[{text:"Edit image",icon:"edit-image",onAction:o("mceEditImage")}]}))}}),(i=t).ui.registry.addContextToolbar("imagetools",{items:i.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions"),predicate:function(t){return ht(i,t).isSome()},position:"node",scope:"node"}),a=f,c=d,(u=t).on("NodeChange",(function(t){var e=c.get(),n=ht(u,t.element)
e&&!n.exists((function(t){return e.src===t.src}))&&(_t(a),u.editorUpload.uploadImagesAuto(),c.set(null)),n.each(c.set)}))}))}()

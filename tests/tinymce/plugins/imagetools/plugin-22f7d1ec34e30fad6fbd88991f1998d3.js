(function(){"use strict"
var t,n,e,r=function(t){var n=t
return{get:function(){return n},set:function(t){n=t}}},o=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),u=(t="array",function(n){return r=typeof(e=n),(null===e?"null":"object"===r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===t
var e,r}),a=function(t){return!function(t){return null==t}(t)},c=function(t){return function(n){return typeof n===t}}("function"),f=function(){},s=function(t){return function(){return t}},l=function(t){return t},d=s(!1),m=s(!0),h=function(){return g},g={fold:function(t,n){return t()},isSome:d,isNone:m,getOr:e=l,getOrThunk:n=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:e,orThunk:n,map:h,each:f,bind:h,exists:d,forall:m,filter:function(){return h()},toArray:function(){return[]},toString:s("none()")},p=function(t){var n=s(t),e=function(){return o},r=function(n){return n(t)},o={fold:function(n,e){return e(t)},isSome:m,isNone:d,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:e,orThunk:e,map:function(n){return p(n(t))},each:function(n){n(t)},bind:r,exists:r,forall:r,filter:function(n){return n(t)?o:g},toArray:function(){return[t]},toString:function(){return"some("+t+")"}}
return o},v={some:p,none:h,from:function(t){return null==t?g:p(t)}},y={},w={exports:y};(function(t,n,e,r){(function(r,o){"object"==typeof n&&void 0!==e?e.exports=o():"function"==typeof t&&t.amd?t(o):(r="undefined"!=typeof globalThis?globalThis:r||self).EphoxContactWrapper=o()})(this,(function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={exports:{}};(function(n){(function(t){var e=setTimeout
function r(){}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof t)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(t,this)}function i(t,n){for(;3===t._state;)t=t._value
0!==t._state?(t._handled=!0,o._immediateFn((function(){var e=1===t._state?n.onFulfilled:n.onRejected
if(null!==e){var r
try{r=e(t._value)}catch(o){return void a(n.promise,o)}u(n.promise,r)}else(1===t._state?u:a)(n.promise,t._value)}))):t._deferreds.push(n)}function u(t,n){try{if(n===t)throw new TypeError("A promise cannot be resolved with itself.")
if(n&&("object"==typeof n||"function"==typeof n)){var e=n.then
if(n instanceof o)return t._state=3,t._value=n,void c(t)
if("function"==typeof e)return void s((r=e,i=n,function(){r.apply(i,arguments)}),t)}t._state=1,t._value=n,c(t)}catch(u){a(t,u)}var r,i}function a(t,n){t._state=2,t._value=n,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&o._immediateFn((function(){t._handled||o._unhandledRejectionFn(t._value)}))
for(var n=0,e=t._deferreds.length;n<e;n++)i(t,t._deferreds[n])
t._deferreds=null}function f(t,n,e){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof n?n:null,this.promise=e}function s(t,n){var e=!1
try{t((function(t){e||(e=!0,u(n,t))}),(function(t){e||(e=!0,a(n,t))}))}catch(r){if(e)return
e=!0,a(n,r)}}o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,n){var e=new this.constructor(r)
return i(this,new f(t,n,e)),e},o.all=function(t){var n=Array.prototype.slice.call(t)
return new o((function(t,e){if(0===n.length)return t([])
var r=n.length
function o(i,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var a=u.then
if("function"==typeof a)return void a.call(u,(function(t){o(i,t)}),e)}n[i]=u,0==--r&&t(n)}catch(c){e(c)}}for(var i=0;i<n.length;i++)o(i,n[i])}))},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o((function(n){n(t)}))},o.reject=function(t){return new o((function(n,e){e(t)}))},o.race=function(t){return new o((function(n,e){for(var r=0,o=t.length;r<o;r++)t[r].then(n,e)}))},o._immediateFn="function"==typeof setImmediate?function(t){setImmediate(t)}:function(t){e(t,0)},o._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},o._setImmediateFn=function(t){o._immediateFn=t},o._setUnhandledRejectionFn=function(t){o._unhandledRejectionFn=t},n.exports?n.exports=o:t.Promise||(t.Promise=o)})(t)})(n)
var e=n.exports
return{boltExport:("undefined"!=typeof window?window:Function("return this;")()).Promise||e}}))})(void 0,y,w)
var b=w.exports.boltExport,_=function(t,n){return x(document.createElement("canvas"),t,n)},E=function(t){var n=_(t.width,t.height)
return T(n).drawImage(t,0,0),n},T=function(t){return t.getContext("2d")},x=function(t,n,e){return t.width=n,t.height=e,t},I=function(t){return new b((function(n,e){var r=URL.createObjectURL(t),o=new Image,i=function(){o.removeEventListener("load",u),o.removeEventListener("error",a)},u=function(){i(),n(o)},a=function(){i(),e("Unable to load data of type "+t.type+": "+r)}
o.addEventListener("load",u),o.addEventListener("error",a),o.src=r,o.complete&&setTimeout(u,0)}))},R=function(t){return new b((function(n,e){var r=new XMLHttpRequest
r.open("GET",t,!0),r.responseType="blob",r.onload=function(){200===this.status&&n(this.response)},r.onerror=function(){var t,n=this
e(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+n.status+" downloading image"))},r.send()}))},U=function(t){return new b((function(n,e){(function(t){var n=t.split(","),e=/data:([^;]+)/.exec(n[0])
if(!e)return v.none()
for(var r=e[1],o=n[1],i=1024,u=atob(o),a=u.length,c=Math.ceil(a/i),f=new Array(c),s=0;s<c;++s){for(var l=s*i,d=Math.min(l+i,a),m=new Array(d-l),h=l,g=0;h<d;++g,++h)m[g]=u[h].charCodeAt(0)
f[s]=new Uint8Array(m)}return v.some(new Blob(f,{type:r}))})(t).fold((function(){e("uri is not base64: "+t)}),n)}))},A=function(t,n,e){return n=n||"image/png",c(HTMLCanvasElement.prototype.toBlob)?new b((function(r,o){t.toBlob((function(t){t?r(t):o()}),n,e)})):U(t.toDataURL(n,e))},j=function(t){URL.revokeObjectURL(t.src)},S=function(t){return function(t){var n=t.src
return 0===n.indexOf("data:")?U(n):R(n)}(t)},M=Array.prototype.indexOf,P=function(t,n){return e=t,r=n,M.call(e,r)>-1
var e,r},O=function(t,n){for(var e=0,r=t.length;e<r;e++){n(t[e],e)}},L=function(t,n){return function(t,n,e){for(var r=0,o=t.length;r<o;r++){var i=t[r]
if(n(i,r))return v.some(i)
if(e(i,r))break}return v.none()}(t,n,d)},k=function(t,n){for(var e=0,r=t.length;e<r;++e){if(!0!==n(t[e],e))return!1}return!0},C=Object.keys;(function(t){if(!u(t))throw new Error("cases must be an array")
if(0===t.length)throw new Error("there must be at least one case")
var n=[],e={}
O(t,(function(r,o){var i=C(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],c=r[a]
if(void 0!==e[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!u(c))throw new Error("case arguments must be an array")
n.push(a),e[a]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var i=e.length
if(i!==c.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+c.length+" ("+c+"), got "+i)
var u=function(t){var r=C(t)
if(n.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+n.join(",")+"\nActual: "+r.join(","))
if(!k(n,(function(t){return P(r,t)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+n.join(", "))
return t[a].apply(null,e)}
return{fold:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
if(n.length!==t.length)throw new Error("Wrong number of arguments to fold. Expected "+t.length+", got "+n.length)
var i=n[o]
return i.apply(null,e)},match:u,log:function(t){console.log(t,{constructors:n,constructor:a,params:e})}}}}))})([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}])
var F=function(t,n,e){var r=n.type,o=s(r),i=s(e),u=function(n,e){return t.then((function(t){return function(t,n,e){return n=n||"image/png",t.toDataURL(n,e)}(t,n,e)}))}
return{getType:o,toBlob:function(){return b.resolve(n)},toDataURL:i,toBase64:function(){return e.split(",")[1]},toAdjustedBlob:function(n,e){return t.then((function(t){return A(t,n,e)}))},toAdjustedDataURL:u,toAdjustedBase64:function(t,n){return u(t,n).then((function(t){return t.split(",")[1]}))},toCanvas:function(){return t.then(E)}}},B=function(t){return function(t){return new b((function(n){var e=new FileReader
e.onloadend=function(){n(e.result)},e.readAsDataURL(t)}))}(t).then((function(n){return F(function(t){return I(t).then((function(t){j(t)
var n=_(function(t){return t.naturalWidth||t.width}(t),function(t){return t.naturalHeight||t.height}(t))
return T(n).drawImage(t,0,0),n}))}(t),t,n)}))},N=function(t,n){return A(t,n).then((function(n){return F(b.resolve(t),n,t.toDataURL())}))},D=function(t,n){void 0===n&&(n=2)
var e=Math.pow(10,n),r=Math.round(t*e)
return Math.ceil(r/e)},H=function(t,n,e){var r=(e<0?360+e:e)*Math.PI/180,o=t.width,i=t.height,u=Math.sin(r),a=Math.cos(r),c=D(Math.abs(o*a)+Math.abs(i*u)),f=D(Math.abs(o*u)+Math.abs(i*a)),s=_(c,f),l=T(s)
return l.translate(c/2,f/2),l.rotate(r),l.drawImage(t,-o/2,-i/2),N(s,n)},z=function(t,n,e){var r=_(t.width,t.height),o=T(r)
return"v"===e?(o.scale(1,-1),o.drawImage(t,0,-r.height)):(o.scale(-1,1),o.drawImage(t,-r.width,0)),N(r,n)},q=function(t,n){return function(t,n){return t.toCanvas().then((function(e){return z(e,t.getType(),n)}))}(t,n)},W=function(t,n){return function(t,n){return t.toCanvas().then((function(e){return H(e,t.getType(),n)}))}(t,n)},$=function(t,n,e){return void 0===e&&(e=!1),new b((function(r){var o=new XMLHttpRequest
o.onreadystatechange=function(){4===o.readyState&&r({status:o.status,blob:o.response})},o.open("GET",t,!0),o.withCredentials=e,function(t,n){for(var e=C(t),r=0,o=e.length;r<o;r++){var i=e[r]
n(t[i],i)}}(n,(function(t,n){o.setRequestHeader(n,t)})),o.responseType="blob",o.send()}))},V=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],G=[{type:"not_found",message:"Failed to load image."},{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],J=function(t,n){var e,r,o=(e=function(t,n){return a(t)?t[n]:void 0},r=t,O(n,(function(t,n){r=e(r,t,n)})),r)
return v.from(o)},K=function(t){var n=function(t){return"ImageProxy HTTP error: "+L(V,(function(n){return t===n.code})).fold(s("Unknown ImageProxy error"),(function(t){return t.message}))}(t)
return b.reject(n)},X=function(t){return L(G,(function(n){return n.type===t})).fold(s("Unknown service error"),(function(t){return t.message}))},Q=function(t){return"ImageProxy Service error: "+function(t){try{return v.some(JSON.parse(t))}catch(n){return v.none()}}(t).bind((function(t){return J(t,["error","type"]).map(X)})).getOr("Invalid JSON in service error message")},Y=function(t){return function(t){return new b((function(n,e){var r=new FileReader
r.onload=function(){n(r.result)},r.onerror=function(t){e(t)},r.readAsText(t)}))}(t).then((function(t){var n=Q(t)
return b.reject(n)}))},Z=function(t){return t<200||t>=300},tt=function(t,n){var e={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":n}
return $(function(t,n){var e=-1===t.indexOf("?")?"?":"&"
return/[?&]apiKey=/.test(t)?t:t+e+"apiKey="+encodeURIComponent(n)}(t,n),e).then((function(t){return Z(t.status)?(n=t.status,e=t.blob,function(t,n){return"application/json"===(null==n?void 0:n.type)&&(400===t||403===t||404===t||500===t)}(n,e)?Y(e):K(n)):b.resolve(t.blob)
var n,e}))},nt=function(t,n,e){return void 0===e&&(e=!1),n?tt(t,n):function(t,n){return $(t,{},n).then((function(t){return Z(t.status)?K(t.status):b.resolve(t.blob)}))}(t,e)},et=function(t){return B(t)},rt=function(t){if(null==t)throw new Error("Node cannot be null or undefined")
return{dom:t}},ot={fromHtml:function(t,n){var e=(n||document).createElement("div")
if(e.innerHTML=t,!e.hasChildNodes()||e.childNodes.length>1)throw console.error("HTML does not have a single root node",t),new Error("HTML must have a single root node")
return rt(e.childNodes[0])},fromTag:function(t,n){var e=(n||document).createElement(t)
return rt(e)},fromText:function(t,n){var e=(n||document).createTextNode(t)
return rt(e)},fromDom:rt,fromPoint:function(t,n,e){return v.from(t.dom.elementFromPoint(n,e)).map(rt)}}
"undefined"!=typeof window?window:Function("return this;")()
var it=function(t,n){return function(t,n){return L(t.dom.childNodes,(function(t){return n(ot.fromDom(t))})).map(ot.fromDom)}(t,(function(t){return function(t,n){var e=t.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(n)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(n)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(n)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(n)
throw new Error("Browser lacks native selectors")}(t,n)}))},ut=tinymce.util.Tools.resolve("tinymce.util.Delay"),at=tinymce.util.Tools.resolve("tinymce.util.Promise"),ct=tinymce.util.Tools.resolve("tinymce.util.URI"),ft=function(t){return t.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions")},st=function(t){return t.getParam("imagetools_proxy")},lt=function(t){var n,e,r=function(t){return/^[0-9\.]+px$/.test(t)}
return n=t.style.width,e=t.style.height,n||e?r(n)&&r(e)?{w:parseInt(n,10),h:parseInt(e,10)}:null:(n=t.width,e=t.height,n&&e?{w:parseInt(n,10),h:parseInt(e,10)}:null)},dt=function(t){return{w:t.naturalWidth,h:t.naturalHeight}},mt=0,ht=function(t){return it(ot.fromDom(t),"img")},gt=function(t,n){return t.dom.is(n,"figure")},pt=function(t,n){return t.dom.is(n,"img:not([data-mce-object],[data-mce-placeholder])")},vt=function(t,n){var e=function(n){return pt(t,n)&&(_t(t,n)||Et(t,n)||a(st(t)))}
return gt(t,n)?ht(n).bind((function(t){return e(t.dom)?v.some(t.dom):v.none()})):e(n)?v.some(n):v.none()},yt=function(t,n){t.notificationManager.open({text:n,type:"error"})},wt=function(t){var n=t.selection.getNode(),e=t.dom.getParent(n,"figure.image")
return null!==e&&gt(t,e)?ht(e):pt(t,n)?v.some(ot.fromDom(n)):v.none()},bt=function(t,n,e){var r=n.match(/(?:\/|^)(([^\/\?]+)\.(?:[a-z0-9.]+))(?:\?|$)/i)
return a(r)?t.dom.encode(r[e]):null},_t=function(t,n){var e=n.src
return 0===e.indexOf("data:")||0===e.indexOf("blob:")||new ct(e).host===t.documentBaseURI.host},Et=function(t,n){return-1!==i.inArray(function(t){return t.getParam("imagetools_cors_hosts",[],"string[]")}(t),new ct(n.src).host)},Tt=function(t,n){if(Et(t,n))return nt(n.src,null,function(t,n){return-1!==i.inArray(function(t){return t.getParam("imagetools_credentials_hosts",[],"string[]")}(t),new ct(n.src).host)}(t,n))
if(!_t(t,n)){var e=st(t),r=e+(-1===e.indexOf("?")?"?":"&")+"url="+encodeURIComponent(n.src),o=function(t){return t.getParam("api_key",t.getParam("imagetools_api_key","","string"),"string")}(t)
return nt(r,o,!1)}return S(n)},xt=function(t,n){return function(t){return v.from(t.getParam("imagetools_fetch_image",null,"function"))}(t).fold((function(){return Tt(t,n)}),(function(t){return t(n)}))},It=function(t,n){var e=t.editorUpload.blobCache.getByUri(n.src)
return e?at.resolve(e.blob()):xt(t,n)},Rt=function(t){ut.clearTimeout(t.get())},Ut=function(t,n,e,r,o,i,u){return e.toBlob().then((function(c){var f,s,l,d,m=t.editorUpload.blobCache
f=i.src
var h=n.type===c.type
return function(t){return t.getParam("images_reuse_filename",!1,"boolean")}(t)&&(d=m.getByUri(f),a(d)?(f=d.uri(),s=d.name(),l=d.filename()):(s=bt(t,f,2),l=bt(t,f,1))),d=m.create({id:"imagetools"+mt++,blob:c,base64:e.toBase64(),uri:f,name:s,filename:h?l:void 0}),m.add(d),t.undoManager.transact((function(){var n=function(){t.$(i).off("load",n),t.nodeChanged(),r?t.editorUpload.uploadImagesAuto():(Rt(o),function(t,n){var e=ut.setEditorTimeout(t,(function(){t.editorUpload.uploadImagesAuto()}),function(t){return t.getParam("images_upload_timeout",3e4,"number")}(t))
n.set(e)}(t,o))}
t.$(i).on("load",n),u&&t.$(i).attr({width:u.w,height:u.h}),t.$(i).attr({src:d.blobUri()}).removeAttr("data-mce-src")})),d}))},At=function(t,n,e,r){return function(){return wt(t).fold((function(){yt(t,"Could not find selected image")}),(function(o){return t._scanForImages().then((function(){return It(t,o.dom)})).then((function(i){return et(i).then(e).then((function(e){return Ut(t,i,e,!1,n,o.dom,r)}))})).catch((function(n){yt(t,n)}))}))}},jt=function(t,n,e){return function(){var r=wt(t).map((function(t){var n=lt(t.dom)
return n?{w:n.h,h:n.w}:null})).getOrNull()
return At(t,n,(function(t){return W(t,e)}),r)()}},St=function(t,n,e){return function(){return At(t,n,(function(t){return q(t,e)}))()}},Mt=function(t,n,e,r,o){return function(t){return I(t)}(o).then((function(t){var n=dt(t)
return r.w===n.w&&r.h===n.h||lt(e)&&function(t,n){var e,r
n&&(e=t.style.width,r=t.style.height,(e||r)&&(t.style.width=n.w+"px",t.style.height=n.h+"px",t.removeAttribute("data-mce-style")),e=t.width,r=t.height,(e||r)&&(t.setAttribute("width",String(n.w)),t.setAttribute("height",String(n.h))))}(e,n),URL.revokeObjectURL(t.src),o})).then(et).then((function(r){return Ut(t,o,r,!0,n,e)}))},Pt=function(t,n){return function(){var e=wt(t),r=e.map((function(t){return dt(t.dom)}))
e.each((function(o){vt(t,o.dom).each((function(i){It(t,o.dom).then((function(o){var i=function(t){return{blob:t,url:URL.createObjectURL(t)}}(o)
t.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:i}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(o){var i=o.getData().imagetools.blob
e.each((function(e){r.each((function(r){Mt(t,n,e.dom,r,i)}))})),o.close()},onCancel:f,onAction:function(t,n){switch(n.name){case"save-state":n.value?t.enable("save"):t.disable("save")
break
case"disable":t.disable("save"),t.disable("cancel")
break
case"enable":t.enable("cancel")}}})}))}))}))}}
o.add("imagetools",(function(t){var n=r(0),e=r(null);(function(t,n){i.each({mceImageRotateLeft:jt(t,n,-90),mceImageRotateRight:jt(t,n,90),mceImageFlipVertical:St(t,n,"v"),mceImageFlipHorizontal:St(t,n,"h"),mceEditImage:Pt(t,n)},(function(n,e){t.addCommand(e,n)}))})(t,n),function(t){var n=[],e=function(n){return function(){return t.execCommand(n)}},r=function(){return wt(t).exists((function(n){return vt(t,n.dom).isSome()}))},o=function(t){var e=function(n){return t.setDisabled(!n)}
return e(r()),n=n.concat([e]),function(){n=function(t,n){for(var e=[],r=0,o=t.length;r<o;r++){var i=t[r]
n(i,r)&&e.push(i)}return e}(n,(function(t){return t!==e}))}}
t.on("NodeChange",(function(){var t=r()
O(n,(function(n){return n(t)}))})),t.ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:e("mceImageRotateLeft"),onSetup:o}),t.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:e("mceImageRotateRight"),onSetup:o}),t.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:e("mceImageFlipVertical"),onSetup:o}),t.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:e("mceImageFlipHorizontal"),onSetup:o}),t.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:e("mceEditImage"),onSetup:o}),t.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image",onAction:e("mceImage")}),t.ui.registry.addContextMenu("imagetools",{update:function(n){return vt(t,n).map((function(t){return{text:"Edit image",icon:"edit-image",onAction:e("mceEditImage")}})).toArray()}})}(t),function(t){t.ui.registry.addContextToolbar("imagetools",{items:ft(t),predicate:function(n){return vt(t,n).isSome()},position:"node",scope:"node"})}(t),function(t,n,e){t.on("NodeChange",(function(r){var o=e.get(),i=vt(t,r.element)
o&&!i.exists((function(t){return o.src===t.src}))&&(Rt(n),t.editorUpload.uploadImagesAuto(),e.set(null)),i.each(e.set)}))}(t,n,e)}))})()

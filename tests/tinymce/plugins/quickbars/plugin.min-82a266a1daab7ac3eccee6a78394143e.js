!function(){"use strict"
function e(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}}function t(e){return function(t){return typeof t===e}}function n(e){return function(){return e}}function r(e){return e}function o(){return p}var i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=0,c=tinymce.util.Tools.resolve("tinymce.util.Promise"),a=tinymce.util.Tools.resolve("tinymce.Env"),l=tinymce.util.Tools.resolve("tinymce.util.Delay"),s=e("string"),d=e("object"),f=e("array"),m=t("boolean"),g=t("function"),v=n(!1),h=n(!void 0),p={fold:function(e,t){return e()},isSome:v,isNone:h,getOr:r,getOrThunk:b,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:n(null),getOrUndefined:n(void 0),or:r,orThunk:b,map:o,each:function(){},bind:o,exists:v,forall:h,filter:function(){return p},toArray:function(){return[]},toString:n("none()")}
function b(e){return e()}var y=function(e){function t(){return i}function r(t){return t(e)}var o=n(e),i={fold:function(t,n){return n(e)},isSome:h,isNone:v,getOr:o,getOrThunk:o,getOrDie:o,getOrNull:o,getOrUndefined:o,or:t,orThunk:t,map:function(t){return y(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?i:p},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return i},k={some:y,none:o,from:function(e){return null==e?p:y(e)}}
function w(e,t,n,r,o){return e(n,r)?k.some(n):g(o)&&o(n)?k.none():t(n,r,o)}function T(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}function E(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}}var N={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return E(n.childNodes[0])},fromTag:function(e,t){return E((t||document).createElement(e))},fromText:function(e,t){return E((t||document).createTextNode(e))},fromDom:E,fromPoint:function(e,t,n){return k.from(e.dom.elementFromPoint(t,n)).map(E)}}
function M(e,t,n){for(var r=e.dom,o=g(n)?n:v;r.parentNode;){r=r.parentNode
var i=N.fromDom(r)
if(t(i))return k.some(i)
if(o(i))break}return k.none()}function S(e,t,n){return M(e,(function(e){return T(e,t)}),n)}"undefined"!=typeof window||Function("return this;")()
var C,O=(C=s,function(e,t,n){return function(){if(!C(n))throw new Error("Default value doesn't match requested type.")}(),function(e,t){if(f(e)||d(e))throw new Error("expected a string but found: "+e)
return undefined===e?t:m(e)?!1===e?"":t:e}(e.getParam(t,n),n)})
i.add("quickbars",(function(e){var t,n;(function(e){e.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:function(){var t=e
new c((function(e){var n=document.createElement("input")
n.type="file",n.accept="image/*",n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.opacity="0.001",document.body.appendChild(n),n.addEventListener("change",(function(t){e(Array.prototype.slice.call(t.target.files))}))
var r=function(o){function i(){e([]),n.parentNode.removeChild(n)}a.os.isAndroid()&&"remove"!==o.type?l.setEditorTimeout(t,i,0):i(),t.off("focusin remove",r)}
t.on("focusin remove",r),n.click()})).then((function(t){var n,r
0<t.length&&(n=t[0],r=n,new c((function(e){var t=new FileReader
t.onloadend=function(){e(t.result.split(",")[1])},t.readAsDataURL(r)})).then((function(t){var r,o,i,c,a,l
o=t,i=n,l=(a=(r=e).editorUpload.blobCache).create((c=(new Date).getTime(),"mceu_"+Math.floor(1e9*Math.random())+ ++u+String(c)),i,o),a.add(l),r.insertContent(r.dom.createHTML("img",{src:l.blobUri()}))})))}))}}),e.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:function(){var t,n;(t=e).plugins.table?t.plugins.table.insertTable(2,2):(n=t).undoManager.transact((function(){n.insertContent(function(){var e='<table data-mce-id="mce" style="width: 100%">'
e+="<tbody>"
for(var t=0;t<2;t++){e+="<tr>"
for(var n=0;n<2;n++)e+="<td><br></td>"
e+="</tr>"}return(e+="</tbody>")+"</table>"}())
var e=n.dom.select("*[data-mce-id]")[0]
e.removeAttribute("data-mce-id")
var t=n.dom.select("td,th",e)
n.selection.setCursorLocation(t[0],0)}))}})})(e),0<(n=O(t=e,"quickbars_insert_toolbar","quickimage quicktable")).trim().length&&t.ui.registry.addContextToolbar("quickblock",{predicate:function(e){function n(e){return e.dom===t.getBody()}var r=N.fromDom(e),o=t.schema.getTextBlockElements()
return w(T,S,r,"table",n).fold((function(){return w((function(e,t){return t(e)}),M,r,(function(e){return e.dom.nodeName.toLowerCase()in o&&t.dom.isEmpty(e.dom)}),n).isSome()}),v)},items:n,position:"line",scope:"editor"}),function(e){function t(e){return"IMG"===e.nodeName||"FIGURE"===e.nodeName&&/image/i.test(e.className)}var n=O(e,"quickbars_image_toolbar","alignleft aligncenter alignright")
0<n.trim().length&&e.ui.registry.addContextToolbar("imageselection",{predicate:t,items:n,position:"node"})
var r=O(e,"quickbars_selection_toolbar","bold italic | quicklink h2 h3 blockquote")
0<r.trim().length&&e.ui.registry.addContextToolbar("textselection",{predicate:function(n){return!t(n)&&!e.selection.isCollapsed()&&"false"!==e.dom.getContentEditableParent(n)},items:r,position:"selection",scope:"editor"})}(e)}))}()

!function(){"use strict"
var t,e,n,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=0,i=tinymce.util.Tools.resolve("tinymce.util.Promise"),u=tinymce.util.Tools.resolve("tinymce.Env"),c=tinymce.util.Tools.resolve("tinymce.util.Delay"),a=function(t){t.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:function(){var e
e=t,new i((function(t){var n=document.createElement("input")
n.type="file",n.accept="image/*",n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.opacity="0.001",document.body.appendChild(n),n.addEventListener("change",(function(e){t(Array.prototype.slice.call(e.target.files))}))
var r=function(o){var i=function(){t([]),n.parentNode.removeChild(n)}
u.os.isAndroid()&&"remove"!==o.type?c.setEditorTimeout(e,i,0):i(),e.off("focusin remove",r)}
e.on("focusin remove",r),n.click()})).then((function(e){var n,r
0<e.length&&(n=e[0],r=n,new i((function(t){var e=new FileReader
e.onloadend=function(){t(e.result.split(",")[1])},e.readAsDataURL(r)})).then((function(e){(function(t,e,n){var r,i=t.editorUpload.blobCache,u=i.create((r=(new Date).getTime(),"mceu_"+Math.floor(1e9*Math.random())+ ++o+String(r)),n,e)
i.add(u),t.insertContent(t.dom.createHTML("img",{src:u.blobUri()}))})(t,e,n)})))}))}}),t.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:function(){var e,n,r,o
n=2,(e=t).plugins.table?e.plugins.table.insertTable(2,n):(2,o=n,(r=e).undoManager.transact((function(){r.insertContent(function(t,e){var n,r,o='<table data-mce-id="mce" style="width: 100%">'
for(o+="<tbody>",r=0;r<e;r++){for(o+="<tr>",n=0;n<2;n++)o+="<td><br></td>"
o+="</tr>"}return(o+="</tbody>")+"</table>"}(0,o))
var t=r.dom.select("*[data-mce-id]")[0]
t.removeAttribute("data-mce-id")
var e=r.dom.select("td,th",t)
r.selection.setCursorLocation(e[0],0)})))}})},l=function(t){return function(){return t}},s=l(!1),f=l(!0),d=function(){return m},m=(t=function(t){return t.isNone()},{fold:function(t,e){return t()},is:s,isSome:s,isNone:f,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(void 0),or:n,orThunk:e,map:d,each:function(){},bind:d,exists:s,forall:f,filter:d,equals:t,equals_:t,toArray:function(){return[]},toString:l("none()")}),g=function(t){var e=l(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:f,isNone:s,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return g(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:m},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(s,(function(e){return n(t,e)}))}}
return o},b={some:g,none:d,from:function(t){return null==t?m:g(t)}},p=function(t){return function(e){return r=typeof(n=e),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===t
var n,r}},y=function(t){return function(e){return typeof e===t}},v=p("string"),h=p("object"),k=p("array"),w=y("boolean"),T=(void 0,function(t){return undefined===t}),q=y("function")
function S(t,e,n,r,o){return t(n,r)?b.some(n):q(o)&&o(n)?b.none():e(n,r,o)}var E,N=function(t){if(null==t)throw new Error("Node cannot be null or undefined")
return{dom:t}},O=N,C=function(t,e){var n=t.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(e)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")},M=("undefined"!=typeof window||Function("return this;")(),function(t,e,n){for(var r=t.dom,o=q(n)?n:s;r.parentNode;){r=r.parentNode
var i=O(r)
if(e(i))return b.some(i)
if(o(i))break}return b.none()}),A=function(t,e,n){return M(t,(function(t){return C(t,e)}),n)},x=(E=v,function(t,e,n){return function(t,e){if(!e(t))throw new Error("Default value doesn't match requested type.")}(n,E),function(t,e){if(k(t)||h(t))throw new Error("expected a string but found: "+t)
return T(t)?e:w(t)?!1===t?"":e:t}(t.getParam(e,n),n)})
r.add("quickbars",(function(t){a(t),function(t){var e=x(t,"quickbars_insert_toolbar","quickimage quicktable")
0<e.trim().length&&t.ui.registry.addContextToolbar("quickblock",{predicate:function(e){var n=O(e),r=t.schema.getTextBlockElements(),o=function(e){return e.dom===t.getBody()}
return S(C,A,n,"table",o).fold((function(){return S((function(t,e){return e(t)}),M,n,(function(e){return e.dom.nodeName.toLowerCase()in r&&t.dom.isEmpty(e.dom)}),o).isSome()}),(function(){return!1}))},items:e,position:"line",scope:"editor"})}(t),function(t){var e=function(t){return"IMG"===t.nodeName||"FIGURE"===t.nodeName&&/image/i.test(t.className)},n=x(t,"quickbars_image_toolbar","alignleft aligncenter alignright")
0<n.trim().length&&t.ui.registry.addContextToolbar("imageselection",{predicate:e,items:n,position:"node"})
var r=x(t,"quickbars_selection_toolbar","bold italic | quicklink h2 h3 blockquote")
0<r.trim().length&&t.ui.registry.addContextToolbar("textselection",{predicate:function(n){return!e(n)&&!t.selection.isCollapsed()&&(r=n,"false"!==t.dom.getContentEditableParent(r))
var r},items:r,position:"selection",scope:"editor"})}(t)}))}()
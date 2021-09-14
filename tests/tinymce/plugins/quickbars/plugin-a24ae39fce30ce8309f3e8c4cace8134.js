(function(){"use strict"
var t,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=0,r=function(t,e,r){var o,i,u=t.editorUpload.blobCache,c=u.create((o="mceu",i=(new Date).getTime(),o+"_"+Math.floor(1e9*Math.random())+ ++n+String(i)),r,e)
u.add(c),t.insertContent(t.dom.createHTML("img",{src:c.blobUri()}))},o=tinymce.util.Tools.resolve("tinymce.util.Promise"),i=tinymce.util.Tools.resolve("tinymce.Env"),u=tinymce.util.Tools.resolve("tinymce.util.Delay"),c=function(t){t.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:function(){(function(t){return new o((function(e){var n=document.createElement("input")
n.type="file",n.accept="image/*",n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.opacity="0.001",document.body.appendChild(n),n.addEventListener("change",(function(t){e(Array.prototype.slice.call(t.target.files))}))
var r=function(o){var c=function(){e([]),n.parentNode.removeChild(n)}
i.os.isAndroid()&&"remove"!==o.type?u.setEditorTimeout(t,c,0):c(),t.off("focusin remove",r)}
t.on("focusin remove",r),n.click()}))})(t).then((function(e){if(e.length>0){var n=e[0];(i=n,new o((function(t){var e=new FileReader
e.onloadend=function(){t(e.result.split(",")[1])},e.readAsDataURL(i)}))).then((function(e){r(t,e,n)}))}var i}))}}),t.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:function(){(function(t,e,n){t.plugins.table?t.plugins.table.insertTable(e,n):function(t,e,n){t.undoManager.transact((function(){t.insertContent(function(t,e){var n,r,o
for(o='<table data-mce-id="mce" style="width: 100%">',o+="<tbody>",r=0;r<e;r++){for(o+="<tr>",n=0;n<t;n++)o+="<td><br></td>"
o+="</tr>"}return(o+="</tbody>")+"</table>"}(e,n))
var r=function(t){return t.dom.select("*[data-mce-id]")[0]}(t)
r.removeAttribute("data-mce-id")
var o=t.dom.select("td,th",r)
t.selection.setCursorLocation(o[0],0)}))}(t,e,n)})(t,2,2)}})},a=function(){},l=function(t){return function(){return t}},f=l(!1),s=l(!0),d=function(){return m},m=function(){var t=function(t){return t.isNone()},e=function(t){return t()},n=function(t){return t}
return{fold:function(t,e){return t()},is:f,isSome:f,isNone:s,getOr:n,getOrThunk:e,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(void 0),or:n,orThunk:e,map:d,each:a,bind:d,exists:f,forall:s,filter:d,equals:t,equals_:t,toArray:function(){return[]},toString:l("none()")}}(),g=function(t){var e=l(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:s,isNone:f,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return g(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:m},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(f,(function(e){return n(t,e)}))}}
return o},v={some:g,none:d,from:function(t){return null==t?m:g(t)}},h=function(t){return function(e){return r=typeof(n=e),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===t
var n,r}},p=function(t){return function(e){return typeof e===t}},b=h("string"),y=h("object"),w=h("array"),k=p("boolean"),T=(t=void 0,function(e){return t===e}),N=p("function")
function q(t,e,n,r,o){return t(n,r)?v.some(n):N(o)&&o(n)?v.none():e(n,r,o)}var E,M=function(t){if(null==t)throw new Error("Node cannot be null or undefined")
return{dom:t}},S={fromHtml:function(t,e){var n=(e||document).createElement("div")
if(n.innerHTML=t,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",t),new Error("HTML must have a single root node")
return M(n.childNodes[0])},fromTag:function(t,e){var n=(e||document).createElement(t)
return M(n)},fromText:function(t,e){var n=(e||document).createTextNode(t)
return M(n)},fromDom:M,fromPoint:function(t,e,n){return v.from(t.dom.elementFromPoint(e,n)).map(M)}},C=function(t,e){var n=t.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(e)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")},O=("undefined"!=typeof window?window:Function("return this;")(),function(t,e,n){for(var r=t.dom,o=N(n)?n:f;r.parentNode;){r=r.parentNode
var i=S.fromDom(r)
if(e(i))return v.some(i)
if(o(i))break}return v.none()}),x=function(t,e,n){return O(t,(function(t){return C(t,e)}),n)},A=(E=b,function(t,e,n){return function(t,e){if(e(t))return!0
throw new Error("Default value doesn't match requested type.")}(n,E),function(t,e){if(w(t)||y(t))throw new Error("expected a string but found: "+t)
return T(t)?e:k(t)?!1===t?"":e:t}(t.getParam(e,n),n)}),D=function(t){var e=function(t){return A(t,"quickbars_insert_toolbar","quickimage quicktable")}(t)
e.trim().length>0&&t.ui.registry.addContextToolbar("quickblock",{predicate:function(e){var n=S.fromDom(e),r=t.schema.getTextBlockElements(),o=function(e){return e.dom===t.getBody()}
return function(t,e,n){return q((function(t,e){return C(t,e)}),x,t,e,n)}(n,"table",o).fold((function(){return function(t,e,n){return q((function(t,e){return e(t)}),O,t,e,n)}(n,(function(e){return e.dom.nodeName.toLowerCase()in r&&t.dom.isEmpty(e.dom)}),o).isSome()}),f)},items:e,position:"line",scope:"editor"})},_=function(t){var e=function(t){return"IMG"===t.nodeName||"FIGURE"===t.nodeName&&/image/i.test(t.className)},n=function(t){return A(t,"quickbars_image_toolbar","alignleft aligncenter alignright")}(t)
n.trim().length>0&&t.ui.registry.addContextToolbar("imageselection",{predicate:e,items:n,position:"node"})
var r=function(t){return A(t,"quickbars_selection_toolbar","bold italic | quicklink h2 h3 blockquote")}(t)
r.trim().length>0&&t.ui.registry.addContextToolbar("textselection",{predicate:function(n){return!e(n)&&!t.selection.isCollapsed()&&function(e){return"false"!==t.dom.getContentEditableParent(e)}(n)},items:r,position:"selection",scope:"editor"})}
e.add("quickbars",(function(t){c(t),D(t),_(t)}))})()

(function(){"use strict"
var t,n=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=0,r=function(t,n,r){var o,i,u=t.editorUpload.blobCache,c=u.create((o="mceu",i=(new Date).getTime(),o+"_"+Math.floor(1e9*Math.random())+ ++e+String(i)),r,n)
u.add(c),t.insertContent(t.dom.createHTML("img",{src:c.blobUri()}))},o=tinymce.util.Tools.resolve("tinymce.util.Promise"),i=tinymce.util.Tools.resolve("tinymce.Env"),u=tinymce.util.Tools.resolve("tinymce.util.Delay"),c=function(t){t.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:function(){(function(t){return new o((function(n){var e=document.createElement("input")
e.type="file",e.accept="image/*",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.opacity="0.001",document.body.appendChild(e),e.addEventListener("change",(function(t){n(Array.prototype.slice.call(t.target.files))}))
var r=function(o){var c=function(){n([]),e.parentNode.removeChild(e)}
i.os.isAndroid()&&"remove"!==o.type?u.setEditorTimeout(t,c,0):c(),t.off("focusin remove",r)}
t.on("focusin remove",r),e.click()}))})(t).then((function(n){if(n.length>0){var e=n[0];(i=e,new o((function(t){var n=new FileReader
n.onloadend=function(){t(n.result.split(",")[1])},n.readAsDataURL(i)}))).then((function(n){r(t,n,e)}))}var i}))}}),t.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:function(){(function(t,n,e){t.plugins.table?t.plugins.table.insertTable(n,e):function(t,n,e){t.undoManager.transact((function(){t.insertContent(function(t,n){var e,r,o
for(o='<table data-mce-id="mce" style="width: 100%">',o+="<tbody>",r=0;r<n;r++){for(o+="<tr>",e=0;e<t;e++)o+="<td><br></td>"
o+="</tr>"}return(o+="</tbody>")+"</table>"}(n,e))
var r=function(t){return t.dom.select("*[data-mce-id]")[0]}(t)
r.removeAttribute("data-mce-id")
var o=t.dom.select("td,th",r)
t.selection.setCursorLocation(o[0],0)}))}(t,n,e)})(t,2,2)}})},a=function(){},l=function(t){return function(){return t}},f=l(!1),s=l(!0),d=function(){return m},m=function(){var t=function(t){return t.isNone()},n=function(t){return t()},e=function(t){return t}
return{fold:function(t,n){return t()},is:f,isSome:f,isNone:s,getOr:e,getOrThunk:n,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(void 0),or:e,orThunk:n,map:d,each:a,bind:d,exists:f,forall:s,filter:d,equals:t,equals_:t,toArray:function(){return[]},toString:l("none()")}}(),g=function(t){var n=l(t),e=function(){return o},r=function(n){return n(t)},o={fold:function(n,e){return e(t)},is:function(n){return t===n},isSome:s,isNone:f,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:e,orThunk:e,map:function(n){return g(n(t))},each:function(n){n(t)},bind:r,exists:r,forall:r,filter:function(n){return n(t)?o:m},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(n){return n.is(t)},equals_:function(n,e){return n.fold(f,(function(n){return e(t,n)}))}}
return o},v={some:g,none:d,from:function(t){return null==t?m:g(t)}},h=function(t){return function(n){return r=typeof(e=n),(null===e?"null":"object"===r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===t
var e,r}},p=function(t){return function(n){return typeof n===t}},b=h("string"),y=h("object"),w=h("array"),k=p("boolean"),T=(t=void 0,function(n){return t===n}),N=p("function")
function q(t,n,e,r,o){return t(e,r)?v.some(e):N(o)&&o(e)?v.none():n(e,r,o)}var E,M=function(t){if(null==t)throw new Error("Node cannot be null or undefined")
return{dom:t}},S={fromHtml:function(t,n){var e=(n||document).createElement("div")
if(e.innerHTML=t,!e.hasChildNodes()||e.childNodes.length>1)throw console.error("HTML does not have a single root node",t),new Error("HTML must have a single root node")
return M(e.childNodes[0])},fromTag:function(t,n){var e=(n||document).createElement(t)
return M(e)},fromText:function(t,n){var e=(n||document).createTextNode(t)
return M(e)},fromDom:M,fromPoint:function(t,n,e){return v.from(t.dom.elementFromPoint(n,e)).map(M)}},C=function(t,n){var e=t.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(n)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(n)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(n)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(n)
throw new Error("Browser lacks native selectors")},O=("undefined"!=typeof window?window:Function("return this;")(),function(t,n,e){for(var r=t.dom,o=N(e)?e:f;r.parentNode;){r=r.parentNode
var i=S.fromDom(r)
if(n(i))return v.some(i)
if(o(i))break}return v.none()}),x=function(t,n,e){return O(t,(function(t){return C(t,n)}),e)},A=(E=b,function(t,n,e){return function(t,n){if(n(t))return!0
throw new Error("Default value doesn't match requested type.")}(e,E),function(t,n){if(w(t)||y(t))throw new Error("expected a string but found: "+t)
return T(t)?n:k(t)?!1===t?"":n:t}(t.getParam(n,e),e)}),D=function(t){var n=function(t){return A(t,"quickbars_insert_toolbar","quickimage quicktable")}(t)
n.trim().length>0&&t.ui.registry.addContextToolbar("quickblock",{predicate:function(n){var e=S.fromDom(n),r=t.schema.getTextBlockElements(),o=function(n){return n.dom===t.getBody()}
return function(t,n,e){return q((function(t,n){return C(t,n)}),x,t,n,e)}(e,"table",o).fold((function(){return function(t,n,e){return q((function(t,n){return n(t)}),O,t,n,e)}(e,(function(n){return n.dom.nodeName.toLowerCase()in r&&t.dom.isEmpty(n.dom)}),o).isSome()}),(function(){return!1}))},items:n,position:"line",scope:"editor"})},_=function(t){var n=function(t){return"IMG"===t.nodeName||"FIGURE"===t.nodeName&&/image/i.test(t.className)},e=function(t){return A(t,"quickbars_image_toolbar","alignleft aligncenter alignright")}(t)
e.trim().length>0&&t.ui.registry.addContextToolbar("imageselection",{predicate:n,items:e,position:"node"})
var r=function(t){return A(t,"quickbars_selection_toolbar","bold italic | quicklink h2 h3 blockquote")}(t)
r.trim().length>0&&t.ui.registry.addContextToolbar("textselection",{predicate:function(e){return!n(e)&&!t.selection.isCollapsed()&&function(n){return"false"!==t.dom.getContentEditableParent(n)}(e)},items:r,position:"selection",scope:"editor"})}
n.add("quickbars",(function(t){c(t),D(t),_(t)}))})()
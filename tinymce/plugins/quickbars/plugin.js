(function(){"use strict"
var t,e,n,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=0,i=function(t,e,n){var r,i,u=t.editorUpload.blobCache,c=u.create((r="mceu",i=(new Date).getTime(),r+"_"+Math.floor(1e9*Math.random())+ ++o+String(i)),n,e)
u.add(c),t.insertContent(t.dom.createHTML("img",{src:c.blobUri()}))},u=tinymce.util.Tools.resolve("tinymce.util.Promise"),c=tinymce.util.Tools.resolve("tinymce.Env"),a=tinymce.util.Tools.resolve("tinymce.util.Delay"),l=function(t){t.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:function(){(function(t){return new u((function(e){var n=document.createElement("input")
n.type="file",n.accept="image/*",n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.opacity="0.001",document.body.appendChild(n),n.addEventListener("change",(function(t){e(Array.prototype.slice.call(t.target.files))}))
var r=function(o){var i=function(){e([]),n.parentNode.removeChild(n)}
c.os.isAndroid()&&"remove"!==o.type?a.setEditorTimeout(t,i,0):i(),t.off("focusin remove",r)}
t.on("focusin remove",r),n.click()}))})(t).then((function(e){if(e.length>0){var n=e[0];(r=n,new u((function(t){var e=new FileReader
e.onloadend=function(){t(e.result.split(",")[1])},e.readAsDataURL(r)}))).then((function(e){i(t,e,n)}))}var r}))}}),t.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:function(){(function(t,e,n){t.plugins.table?t.plugins.table.insertTable(e,n):function(t,e,n){t.undoManager.transact((function(){t.insertContent(function(t,e){var n='<table data-mce-id="mce" style="width: 100%">'
n+="<tbody>"
for(var r=0;r<e;r++){n+="<tr>"
for(var o=0;o<t;o++)n+="<td><br></td>"
n+="</tr>"}return(n+="</tbody>")+"</table>"}(e,n))
var r=function(t){return t.dom.select("*[data-mce-id]")[0]}(t)
r.removeAttribute("data-mce-id")
var o=t.dom.select("td,th",r)
t.selection.setCursorLocation(o[0],0)}))}(t,e,n)})(t,2,2)}})},f=function(t){return function(e){return r=typeof(n=e),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===t
var n,r}},s=function(t){return function(e){return typeof e===t}},d=f("string"),m=f("object"),g=f("array"),v=s("boolean"),h=(t=void 0,function(e){return t===e}),p=s("function"),b=function(){},y=function(t){return function(){return t}},w=function(t){return t},k=y(!1),T=y(!0),E=function(){return N},N={fold:function(t,e){return t()},isSome:k,isNone:T,getOr:n=w,getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:y(null),getOrUndefined:y(void 0),or:n,orThunk:e,map:E,each:b,bind:E,exists:k,forall:T,filter:function(){return E()},toArray:function(){return[]},toString:y("none()")},M=function(t){var e=y(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},isSome:T,isNone:k,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return M(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:N},toArray:function(){return[t]},toString:function(){return"some("+t+")"}}
return o},S={some:M,none:E,from:function(t){return null==t?N:M(t)}}
function C(t,e,n,r,o){return t(n,r)?S.some(n):p(o)&&o(n)?S.none():e(n,r,o)}var O=function(t){if(null==t)throw new Error("Node cannot be null or undefined")
return{dom:t}},q={fromHtml:function(t,e){var n=(e||document).createElement("div")
if(n.innerHTML=t,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",t),new Error("HTML must have a single root node")
return O(n.childNodes[0])},fromTag:function(t,e){var n=(e||document).createElement(t)
return O(n)},fromText:function(t,e){var n=(e||document).createTextNode(t)
return O(n)},fromDom:O,fromPoint:function(t,e,n){return S.from(t.dom.elementFromPoint(e,n)).map(O)}},x=function(t,e){var n=t.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(e)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")}
"undefined"!=typeof window?window:Function("return this;")()
var A,D=function(t,e,n){for(var r=t.dom,o=p(n)?n:k;r.parentNode;){r=r.parentNode
var i=q.fromDom(r)
if(e(i))return S.some(i)
if(o(i))break}return S.none()},L=function(t,e,n){return D(t,(function(t){return x(t,e)}),n)},P=(A=d,function(t,e,n){return function(t,e){if(e(t))return!0
throw new Error("Default value doesn't match requested type.")}(n,A),function(t,e){if(g(t)||m(t))throw new Error("expected a string but found: "+t)
return h(t)?e:v(t)?!1===t?"":e:t}(t.getParam(e,n),n)}),_=function(t){var e=function(t){return P(t,"quickbars_insert_toolbar","quickimage quicktable")}(t)
e.trim().length>0&&t.ui.registry.addContextToolbar("quickblock",{predicate:function(e){var n=q.fromDom(e),r=t.schema.getTextBlockElements(),o=function(e){return e.dom===t.getBody()}
return function(t,e,n){return C((function(t,e){return x(t,e)}),L,t,e,n)}(n,"table",o).fold((function(){return function(t,e,n){return C((function(t,e){return e(t)}),D,t,e,n)}(n,(function(e){return e.dom.nodeName.toLowerCase()in r&&t.dom.isEmpty(e.dom)}),o).isSome()}),k)},items:e,position:"line",scope:"editor"})},U=function(t){var e=function(t){return"IMG"===t.nodeName||"FIGURE"===t.nodeName&&/image/i.test(t.className)},n=function(t){return P(t,"quickbars_image_toolbar","alignleft aligncenter alignright")}(t)
n.trim().length>0&&t.ui.registry.addContextToolbar("imageselection",{predicate:e,items:n,position:"node"})
var r=function(t){return P(t,"quickbars_selection_toolbar","bold italic | quicklink h2 h3 blockquote")}(t)
r.trim().length>0&&t.ui.registry.addContextToolbar("textselection",{predicate:function(n){return!e(n)&&!t.selection.isCollapsed()&&function(e){return"false"!==t.dom.getContentEditableParent(e)}(n)},items:r,position:"selection",scope:"editor"})}
r.add("quickbars",(function(t){l(t),_(t),U(t)}))})()

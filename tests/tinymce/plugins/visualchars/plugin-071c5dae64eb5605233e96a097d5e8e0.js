(function(){"use strict"
var n,t,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(n){return function(t){return typeof t===n}},e=function(n){return function(t){return o=typeof(r=t),(null===r?"null":"object"===o&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"===o&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":o)===n
var r,o}}("string"),u=o("boolean"),i=o("number"),c=function(){},a=function(n){return function(){return n}},f=function(n){return n},s=a(!1),l=a(!0),d=function(){return m},m={fold:function(n,t){return n()},isSome:s,isNone:l,getOr:t=f,getOrThunk:n=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(void 0),or:t,orThunk:n,map:d,each:c,bind:d,exists:s,forall:l,filter:function(){return d()},toArray:function(){return[]},toString:a("none()")},v=function(n){var t=a(n),r=function(){return e},o=function(t){return t(n)},e={fold:function(t,r){return r(n)},isSome:l,isNone:s,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:function(t){return v(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?e:m},toArray:function(){return[n]},toString:function(){return"some("+n+")"}}
return e},g=function(n){return null==n?m:v(n)},h=function(n,t){for(var r=0,o=n.length;r<o;r++){t(n[r],r)}},p=Object.keys,y=function(n,t){for(var r=p(n),o=0,e=r.length;o<e;o++){var u=r[o]
t(n[u],u)}}
"undefined"!=typeof window?window:Function("return this;")()
var b,w=function(n){return n.dom.nodeValue},T=(b=3,function(n){return function(n){return n.dom.nodeType}(n)===b}),k=function(n,t,r){(function(n,t,r){if(!(e(r)||u(r)||i(r)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",r,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,r+"")})(n.dom,t,r)},N=function(n,t){n.dom.removeAttribute(t)},A=function(n,t){var r=function(n,t){var r=n.dom.getAttribute(t)
return null===r?void 0:r}(n,t)
return void 0===r||""===r?[]:r.split(" ")},O=function(n){return void 0!==n.dom.classList},C=function(n,t){return function(n,t,r){var o=A(n,t).concat([r])
return k(n,t,o.join(" ")),!0}(n,"class",t)},S=function(n,t){return function(n,t,r){var o=function(n,t){for(var r=[],o=0,e=n.length;o<e;o++){var u=n[o]
t(u,o)&&r.push(u)}return r}(A(n,t),(function(n){return n!==r}))
return o.length>0?k(n,t,o.join(" ")):N(n,t),!1}(n,"class",t)},D=function(n){0===(O(n)?n.dom.classList:function(n){return A(n,"class")}(n)).length&&N(n,"class")},E=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},L={fromHtml:function(n,t){var r=(t||document).createElement("div")
if(r.innerHTML=n,!r.hasChildNodes()||r.childNodes.length>1)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return E(r.childNodes[0])},fromTag:function(n,t){var r=(t||document).createElement(n)
return E(r)},fromText:function(n,t){var r=(t||document).createTextNode(n)
return E(r)},fromDom:E,fromPoint:function(n,t,r){return g(n.dom.elementFromPoint(t,r)).map(E)}},x={" ":"nbsp","­":"shy"},B=function(n,t){var r=""
return y(n,(function(n,t){r+=t})),new RegExp("["+r+"]",t?"g":"")},P=B(x),V=B(x,!0),j=function(n){var t=""
return y(n,(function(n){t&&(t+=","),t+="span.mce-"+n})),t}(x),M="mce-nbsp",H=function(n){return'<span data-mce-bogus="1" class="mce-'+x[n]+'">'+n+"</span>"},_=function(n){var t=w(n)
return T(n)&&void 0!==t&&P.test(t)},F=function(n,t){var r=[],o=function(n,t){for(var r=n.length,o=new Array(r),e=0;e<r;e++){var u=n[e]
o[e]=t(u,e)}return o}(n.dom.childNodes,L.fromDom)
return h(o,(function(n){t(n)&&(r=r.concat([n])),r=r.concat(F(n,t))})),r},I=function(n){return"span"===n.nodeName.toLowerCase()&&n.classList.contains("mce-nbsp-wrap")},U=function(n,t){var r=F(L.fromDom(t),_)
h(r,(function(t){var r,o,e=t.dom.parentNode
if(I(e))r=L.fromDom(e),o=M,O(r)?r.dom.classList.add(o):C(r,o)
else{for(var u=n.dom.encode(w(t)).replace(V,H),i=n.dom.create("div",null,u),c=void 0;c=i.lastChild;)n.dom.insertAfter(c,t.dom)
n.dom.remove(t.dom)}}))},K=function(n,t){var r=n.dom.select(j,t)
h(r,(function(t){var r,o
I(t)?(r=L.fromDom(t),o=M,O(r)?r.dom.classList.remove(o):S(r,o),D(r)):n.dom.remove(t,!0)}))},R=function(n){var t=n.getBody(),r=n.selection.getBookmark(),o=function(n,t){for(;n.parentNode;){if(n.parentNode===t)return n
n=n.parentNode}}(n.selection.getNode(),t)
K(n,o=void 0!==o?o:t),U(n,o),n.selection.moveToBookmark(r)},q=function(n,t){(function(n,t){n.fire("VisualChars",{state:t})})(n,t.get())
var r=n.getBody()
!0===t.get()?U(n,r):K(n,r)},z=function(n,t){n.addCommand("mceVisualChars",(function(){(function(n,t){t.set(!t.get())
var r=n.selection.getBookmark()
q(n,t),n.selection.moveToBookmark(r)})(n,t)}))},G=tinymce.util.Tools.resolve("tinymce.util.Delay"),J=function(n,t){return function(r){r.setActive(t.get())
var o=function(n){return r.setActive(n.state)}
return n.on("VisualChars",o),function(){return n.off("VisualChars",o)}}}
r.add("visualchars",(function(n){var t=function(n){var t=n
return{get:function(){return t},set:function(n){t=n}}}(function(n){return n.getParam("visualchars_default_state",!1)}(n))
return z(n,t),function(n,t){var r=function(){return n.execCommand("mceVisualChars")}
n.ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"visualchars",onAction:r,onSetup:J(n,t)}),n.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",icon:"visualchars",onAction:r,onSetup:J(n,t)})}(n,t),function(n,t){var r=G.debounce((function(){R(n)}),300);(function(n){return!1!==n.getParam("forced_root_block")})(n)&&n.on("keydown",(function(o){!0===t.get()&&(13===o.keyCode?R(n):r())})),n.on("remove",r.stop)}(n,t),function(n,t){n.on("init",(function(){q(n,t)}))}(n,t),function(n){return{isEnabled:function(){return n.get()}}}(t)}))})()

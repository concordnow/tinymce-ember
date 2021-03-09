(function(){"use strict"
var n,t,r,o,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){},i=function(n){return function(){return n}},c=i(!1),a=i(!0),f=function(){return s},s=(n=function(n){return n.isNone()},{fold:function(n,t){return n()},is:c,isSome:c,isNone:a,getOr:r=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:r,orThunk:t,map:f,each:u,bind:f,exists:c,forall:a,filter:f,equals:n,equals_:n,toArray:function(){return[]},toString:i("none()")}),l=function(n){var t=i(n),r=function(){return e},o=function(t){return t(n)},e={fold:function(t,r){return r(n)},is:function(t){return n===t},isSome:a,isNone:c,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:function(t){return l(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?e:s},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,r){return t.fold(c,(function(t){return r(n,t)}))}}
return e},d=function(n){return null==n?s:l(n)},m=function(n){return function(t){return typeof t===n}},v=function(n){return function(t){return o=typeof(r=t),(null===r?"null":"object"===o&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"===o&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":o)===n
var r,o}}("string"),g=m("boolean"),h=m("number"),p=function(n,t){for(var r=0,o=n.length;r<o;r++){t(n[r],r)}},y=Object.keys,b=function(n,t){for(var r=y(n),o=0,e=r.length;o<e;o++){var u=r[o]
t(n[u],u)}},w=("undefined"!=typeof window?window:Function("return this;")(),function(n){return n.dom.nodeValue}),N=(o=3,function(n){return function(n){return n.dom.nodeType}(n)===o}),T=function(n,t,r){(function(n,t,r){if(!(v(r)||g(r)||h(r)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",r,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,r+"")})(n.dom,t,r)},k=function(n,t){n.dom.removeAttribute(t)},A=function(n,t){var r=function(n,t){var r=n.dom.getAttribute(t)
return null===r?void 0:r}(n,t)
return void 0===r||""===r?[]:r.split(" ")},O=function(n){return void 0!==n.dom.classList},C=function(n,t){return function(n,t,r){var o=A(n,t).concat([r])
return T(n,t,o.join(" ")),!0}(n,"class",t)},S=function(n,t){return function(n,t,r){var o=function(n,t){for(var r=[],o=0,e=n.length;o<e;o++){var u=n[o]
t(u,o)&&r.push(u)}return r}(A(n,t),(function(n){return n!==r}))
return o.length>0?T(n,t,o.join(" ")):k(n,t),!1}(n,"class",t)},D=function(n){0===(O(n)?n.dom.classList:function(n){return A(n,"class")}(n)).length&&k(n,"class")},E=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},L={fromHtml:function(n,t){var r=(t||document).createElement("div")
if(r.innerHTML=n,!r.hasChildNodes()||r.childNodes.length>1)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return E(r.childNodes[0])},fromTag:function(n,t){var r=(t||document).createElement(n)
return E(r)},fromText:function(n,t){var r=(t||document).createTextNode(n)
return E(r)},fromDom:E,fromPoint:function(n,t,r){return d(n.dom.elementFromPoint(t,r)).map(E)}},x={" ":"nbsp","­":"shy"},V=function(n,t){var r=""
return b(n,(function(n,t){r+=t})),new RegExp("["+r+"]",t?"g":"")},B=V(x),P=V(x,!0),_=function(n){var t=""
return b(n,(function(n){t&&(t+=","),t+="span.mce-"+n})),t}(x),j="mce-nbsp",M=function(n){return'<span data-mce-bogus="1" class="mce-'+x[n]+'">'+n+"</span>"},q=function(n){var t=w(n)
return N(n)&&void 0!==t&&B.test(t)},H=function(n,t){var r=[],o=function(n,t){for(var r=n.length,o=new Array(r),e=0;e<r;e++){var u=n[e]
o[e]=t(u,e)}return o}(n.dom.childNodes,L.fromDom)
return p(o,(function(n){t(n)&&(r=r.concat([n])),r=r.concat(H(n,t))})),r},F=function(n){return"span"===n.nodeName.toLowerCase()&&n.classList.contains("mce-nbsp-wrap")},I=function(n,t){var r=H(L.fromDom(t),q)
p(r,(function(t){var r,o,e=t.dom.parentNode
if(F(e))r=L.fromDom(e),o=j,O(r)?r.dom.classList.add(o):C(r,o)
else{for(var u=n.dom.encode(w(t)).replace(P,M),i=n.dom.create("div",null,u),c=void 0;c=i.lastChild;)n.dom.insertAfter(c,t.dom)
n.dom.remove(t.dom)}}))},U=function(n,t){var r=n.dom.select(_,t)
p(r,(function(t){var r,o
F(t)?(r=L.fromDom(t),o=j,O(r)?r.dom.classList.remove(o):S(r,o),D(r)):n.dom.remove(t,!0)}))},K=function(n){var t=n.getBody(),r=n.selection.getBookmark(),o=function(n,t){for(;n.parentNode;){if(n.parentNode===t)return n
n=n.parentNode}}(n.selection.getNode(),t)
U(n,o=void 0!==o?o:t),I(n,o),n.selection.moveToBookmark(r)},R=function(n,t){(function(n,t){n.fire("VisualChars",{state:t})})(n,t.get())
var r=n.getBody()
!0===t.get()?I(n,r):U(n,r)},z=function(n,t){n.addCommand("mceVisualChars",(function(){(function(n,t){t.set(!t.get())
var r=n.selection.getBookmark()
R(n,t),n.selection.moveToBookmark(r)})(n,t)}))},G=tinymce.util.Tools.resolve("tinymce.util.Delay"),J=function(n,t){return function(r){r.setActive(t.get())
var o=function(n){return r.setActive(n.state)}
return n.on("VisualChars",o),function(){return n.off("VisualChars",o)}}}
e.add("visualchars",(function(n){var t=function(n){var t=n
return{get:function(){return t},set:function(n){t=n}}}(function(n){return n.getParam("visualchars_default_state",!1)}(n))
return z(n,t),function(n,t){n.ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"visualchars",onAction:function(){return n.execCommand("mceVisualChars")},onSetup:J(n,t)}),n.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",icon:"visualchars",onAction:function(){return n.execCommand("mceVisualChars")},onSetup:J(n,t)})}(n,t),function(n,t){var r=G.debounce((function(){K(n)}),300);(function(n){return!1!==n.getParam("forced_root_block")})(n)&&n.on("keydown",(function(o){!0===t.get()&&(13===o.keyCode?K(n):r())})),n.on("remove",r.stop)}(n,t),function(n,t){n.on("init",(function(){R(n,t)}))}(n,t),function(n){return{isEnabled:function(){return n.get()}}}(t)}))})()

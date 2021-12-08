(function(){"use strict"
var n,t,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(n){return function(t){return typeof t===n}},e=function(n){return function(t){return o=typeof(r=t),(null===r?"null":"object"===o&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"===o&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":o)===n
var r,o}}("string"),u=o("boolean"),i=o("function"),c=o("number"),f=function(){},l=function(n){return function(){return n}},a=function(n){return n},m=l(!1),d=l(!0),s=function(){return g},g={fold:function(n,t){return n()},isSome:m,isNone:d,getOr:t=a,getOrThunk:n=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(void 0),or:t,orThunk:n,map:s,each:f,bind:s,exists:m,forall:d,filter:function(){return s()},toArray:function(){return[]},toString:l("none()")},h=function(n){var t=l(n),r=function(){return e},o=function(t){return t(n)},e={fold:function(t,r){return r(n)},isSome:d,isNone:m,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:function(t){return h(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?e:g},toArray:function(){return[n]},toString:function(){return"some("+n+")"}}
return e},v={some:h,none:s,from:function(n){return null==n?g:h(n)}},p=function(n,t){for(var r=0,o=n.length;r<o;r++){t(n[r],r)}},y=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},w={fromHtml:function(n,t){var r=(t||document).createElement("div")
if(r.innerHTML=n,!r.hasChildNodes()||r.childNodes.length>1)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return y(r.childNodes[0])},fromTag:function(n,t){var r=(t||document).createElement(n)
return y(r)},fromText:function(n,t){var r=(t||document).createTextNode(n)
return y(r)},fromDom:y,fromPoint:function(n,t,r){return v.from(n.dom.elementFromPoint(t,r)).map(y)}},D=function(n,t){var r=n.dom
if(1!==r.nodeType)return!1
var o=r
if(void 0!==o.matches)return o.matches(t)
if(void 0!==o.msMatchesSelector)return o.msMatchesSelector(t)
if(void 0!==o.webkitMatchesSelector)return o.webkitMatchesSelector(t)
if(void 0!==o.mozMatchesSelector)return o.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}
"undefined"!=typeof window?window:Function("return this;")()
var N,T=function(n){return function(t){return function(n){return n.dom.nodeType}(t)===n}},S=T(1),b=T(3),O=T(9),A=T(11),C=function(n){return function(n,t){for(var r=n.length,o=new Array(r),e=0;e<r;e++){var u=n[e]
o[e]=t(u,e)}return o}(n.dom.childNodes,w.fromDom)},M=function(n,t,r){(function(n,t,r){if(!(e(r)||u(r)||c(r)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",r,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,r+"")})(n.dom,t,r)},k=function(n,t){n.dom.removeAttribute(t)},E=i(Element.prototype.attachShadow)&&i(Node.prototype.getRootNode)?function(n){return w.fromDom(n.dom.getRootNode())}:function(n){return O(n)?n:(t=n,w.fromDom(t.dom.ownerDocument))
var t},L=function(n){var t,r=E(n)
return A(t=r)&&null!=t.dom.host?v.some(r):v.none()},P=function(n){return w.fromDom(n.dom.host)},R=function(n){var t=b(n)?n.dom.parentNode:n.dom
if(null==t||null===t.ownerDocument)return!1
var r,o,e=t.ownerDocument
return L(w.fromDom(t)).fold((function(){return e.body.contains(t)}),(r=R,o=P,function(n){return r(o(n))}))},x=function(n,t,r){return function(n,t,r){for(var o=n.dom,e=i(r)?r:m;o.parentNode;){o=o.parentNode
var u=w.fromDom(o)
if(t(u))return v.some(u)
if(e(u))break}return v.none()}(n,(function(n){return D(n,t)}),r)},B=function(n,t){return function(n){return void 0!==n.style&&i(n.style.getPropertyValue)}(n)?n.style.getPropertyValue(t):""},H=function(n){return"rtl"===function(n,t){var r=n.dom,o=window.getComputedStyle(r).getPropertyValue(t)
return""!==o||R(n)?o:B(r,t)}(n,"direction")?"rtl":"ltr"},V=function(n,t){return function(n,t){return function(n,t){for(var r=[],o=0,e=n.length;o<e;o++){var u=n[o]
t(u,o)&&r.push(u)}return r}(C(n),t)}(n,(function(n){return D(n,t)}))},j=function(n){return function(n){return v.from(n.dom.parentNode).map(w.fromDom)}(n).filter(S)},z=(N="li",function(n){return S(n)&&n.dom.nodeName.toLowerCase()===N}),F=function(n,t){var r=n.selection.getSelectedBlocks()
r.length>0&&(p(r,(function(n){var r=w.fromDom(n),o=z(r),e=function(n,t){return(t?x(n,"ol,ul"):v.some(n)).getOr(n)}(r,o)
j(e).each((function(n){if(H(n)!==t?M(e,"dir",t):H(e)!==t&&k(e,"dir"),o){var r=V(e,"li[dir]")
p(r,(function(n){return k(n,"dir")}))}}))})),n.nodeChanged())},U=function(n,t){return function(r){var o=function(n){var o=w.fromDom(n.element)
r.setActive(H(o)===t)}
return n.on("NodeChange",o),function(){return n.off("NodeChange",o)}}}
r.add("directionality",(function(n){(function(n){n.addCommand("mceDirectionLTR",(function(){F(n,"ltr")})),n.addCommand("mceDirectionRTL",(function(){F(n,"rtl")}))})(n),function(n){n.ui.registry.addToggleButton("ltr",{tooltip:"Left to right",icon:"ltr",onAction:function(){return n.execCommand("mceDirectionLTR")},onSetup:U(n,"ltr")}),n.ui.registry.addToggleButton("rtl",{tooltip:"Right to left",icon:"rtl",onAction:function(){return n.execCommand("mceDirectionRTL")},onSetup:U(n,"rtl")})}(n)}))})()
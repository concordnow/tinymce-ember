!function(){"use strict"
function n(n){return function(t){return typeof t===n}}function t(n){return function(){return n}}function r(n){return n}function o(){return m}var e,u=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=n("boolean"),c=n("function"),f=n("number"),l=t(!(e="string")),a=t(!0),m={fold:function(n,t){return n()},isSome:l,isNone:a,getOr:r,getOrThunk:d,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:t(null),getOrUndefined:t(void 0),or:r,orThunk:d,map:o,each:function(){},bind:o,exists:l,forall:a,filter:function(){return m},toArray:function(){return[]},toString:t("none()")}
function d(n){return n()}function s(n,t){for(var r=0,o=n.length;r<o;r++)t(n[r],r)}function g(n,t){var r=n.dom
if(1!==r.nodeType)return!1
var o=r
if(void 0!==o.matches)return o.matches(t)
if(void 0!==o.msMatchesSelector)return o.msMatchesSelector(t)
if(void 0!==o.webkitMatchesSelector)return o.webkitMatchesSelector(t)
if(void 0!==o.mozMatchesSelector)return o.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}function h(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}}var v=function(n){function r(){return u}function o(t){return t(n)}var e=t(n),u={fold:function(t,r){return r(n)},isSome:a,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:r,orThunk:r,map:function(t){return v(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?u:m},toArray:function(){return[n]},toString:function(){return"some("+n+")"}}
return u},p={some:v,none:o,from:function(n){return null==n?m:v(n)}},y={fromHtml:function(n,t){var r=(t||document).createElement("div")
if(r.innerHTML=n,!r.hasChildNodes()||1<r.childNodes.length)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return h(r.childNodes[0])},fromTag:function(n,t){return h((t||document).createElement(n))},fromText:function(n,t){return h((t||document).createTextNode(n))},fromDom:h,fromPoint:function(n,t,r){return p.from(n.dom.elementFromPoint(t,r)).map(h)}}
function w(n){return function(t){return t.dom.nodeType===n}}function D(n,t,r){!function(n,t,r){if(!(function(n){return r=typeof(t=n),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===e
var t,r}(r)||i(r)||f(r)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",r,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,r+"")}(n.dom,t,r)}function N(n,t){n.dom.removeAttribute(t)}function T(n){return y.fromDom(n.dom.host)}function S(n){return"rtl"===(r="direction",o=(t=n).dom,""!==(e=window.getComputedStyle(o).getPropertyValue(r))||L(t)?e:P(o,r))?"rtl":"ltr"
var t,r,o,e}function b(n,t){var r=n.selection.getSelectedBlocks()
0<r.length&&(s(r,(function(n){var r,o=y.fromDom(n),e=function(n){return A(n)&&"li"===n.dom.nodeName.toLowerCase()}(o),u=(r=o,(e?function(n,t,r){return function(r){for(var o=n.dom,e=c(r)?r:l;o.parentNode;){o=o.parentNode
var u=y.fromDom(o)
if(g(u,t))return p.some(u)
if(e(u))break}return p.none()}(r)}(r,"ol,ul"):p.some(r)).getOr(r))
p.from(u.dom.parentNode).map(y.fromDom).filter(A).each((function(n){S(n)!==t?D(u,"dir",t):S(u)!==t&&N(u,"dir"),e&&s(function(n,t){return r=function(n){return g(n,t)},function(n,t){for(var r=[],o=0,e=n.length;o<e;o++){var u=n[o]
t(u,o)&&r.push(u)}return r}(function(n,t){for(var r=n.length,o=new Array(r),e=0;e<r;e++){var u=n[e]
o[e]=t(u,e)}return o}(n.dom.childNodes,y.fromDom),r)
var r}(u,"li[dir]"),(function(n){return N(n,"dir"),0}))}))})),n.nodeChanged())}function O(n,t){return function(r){function o(n){var o=y.fromDom(n.element)
r.setActive(S(o)===t)}return n.on("NodeChange",o),function(){return n.off("NodeChange",o)}}}"undefined"!=typeof window||Function("return this;")()
var A=w(1),C=w(3),M=w(9),k=w(11),E=c(Element.prototype.attachShadow)&&c(Node.prototype.getRootNode)?function(n){return y.fromDom(n.dom.getRootNode())}:function(n){return M(n)?n:y.fromDom(n.dom.ownerDocument)},L=function(n){var t=C(n)?n.dom.parentNode:n.dom
if(null==t||null===t.ownerDocument)return!1
var r,o,e,u,i,c=t.ownerDocument
return e=y.fromDom(t),i=E(e),(k(u=i)&&null!=u.dom.host?p.some(i):p.none()).fold((function(){return c.body.contains(t)}),(r=L,o=T,function(n){return r(o(n))}))},P=function(n,t){return void 0!==n.style&&c(n.style.getPropertyValue)?n.style.getPropertyValue(t):""}
u.add("directionality",(function(n){var t,r;(t=n).addCommand("mceDirectionLTR",(function(){b(t,"ltr")})),t.addCommand("mceDirectionRTL",(function(){b(t,"rtl")})),(r=n).ui.registry.addToggleButton("ltr",{tooltip:"Left to right",icon:"ltr",onAction:function(){return r.execCommand("mceDirectionLTR")},onSetup:O(r,"ltr")}),r.ui.registry.addToggleButton("rtl",{tooltip:"Right to left",icon:"rtl",onAction:function(){return r.execCommand("mceDirectionRTL")},onSetup:O(r,"rtl")})}))}()

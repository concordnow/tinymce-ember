!function(){"use strict"
function n(n){return function(t){return typeof t===n}}function t(n){return function(){return n}}function e(n){return n}function o(){return f}var r,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=n("boolean"),c=n("number"),a=t(!(r="string")),s=t(!0),f={fold:function(n,t){return n()},isSome:a,isNone:s,getOr:e,getOrThunk:l,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:t(null),getOrUndefined:t(void 0),or:e,orThunk:l,map:o,each:function(){},bind:o,exists:a,forall:s,filter:function(){return f},toArray:function(){return[]},toString:t("none()")}
function l(n){return n()}function d(n,t){for(var e=0,o=n.length;e<o;e++)t(n[e],e)}function m(n,t){for(var e=g(n),o=0,r=e.length;o<r;o++){var i=e[o]
t(n[i],i)}}var v=function(n){function e(){return i}function o(t){return t(n)}var r=t(n),i={fold:function(t,e){return e(n)},isSome:s,isNone:a,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(t){return v(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?i:f},toArray:function(){return[n]},toString:function(){return"some("+n+")"}}
return i},g=Object.keys
function h(n){return n.dom.nodeValue}function p(n,t,e){!function(n,t,e){if(!(function(n){return e=typeof(t=n),(null===t?"null":"object"==e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e)===r
var t,e}(e)||u(e)||c(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,e+"")}(n.dom,t,e)}function y(n,t){n.dom.removeAttribute(t)}function b(n,t){var e,o=null===(e=n.dom.getAttribute(t))?void 0:e
return void 0===o||""===o?[]:o.split(" ")}function w(n){return void 0!==n.dom.classList}function T(n,t){var e=""
return m(n,(function(n,t){e+=t})),new RegExp("["+e+"]",t?"g":"")}function k(n){return'<span data-mce-bogus="1" class="mce-'+V[n]+'">'+n+"</span>"}function N(n){var t=h(n)
return B(n)&&void 0!==t&&j.test(t)}function A(n){return"span"===n.nodeName.toLowerCase()&&n.classList.contains("mce-nbsp-wrap")}function O(n,t){d(F(P.fromDom(t),N),(function(t){var e,o,r,i,u,c=t.dom.parentNode
if(A(c))e=P.fromDom(c),o=_,w(e)?e.dom.classList.add(o):(i=o,u=b(r=e,"class").concat([i]),p(r,"class",u.join(" ")))
else{for(var a,s=n.dom.encode(h(t)).replace(M,k),f=n.dom.create("div",null,s);a=f.lastChild;)n.dom.insertAfter(a,t.dom)
n.dom.remove(t.dom)}}))}function C(n,t){d(n.dom.select(H,t),(function(t){var e,o,r
A(t)?(e=P.fromDom(t),o=_,w(e)?e.dom.classList.remove(o):function(n,t){return o=t,0<(r=function(n){for(var t=[],e=0,r=n.length;e<r;e++){var i=n[e]
i!==o&&t.push(i)}return t}(b(e=n,"class"))).length?p(e,"class",r.join(" ")):y(e,"class"),0
var e,o,r}(e,o),0===(w(r=e)?r.dom.classList:b(r,"class")).length&&y(r,"class")):n.dom.remove(t,!0)}))}function S(n){var t=n.getBody(),e=n.selection.getBookmark(),o=function(n,t){for(;n.parentNode;){if(n.parentNode===t)return n
n=n.parentNode}}(n.selection.getNode(),t)
C(n,o=void 0!==o?o:t),O(n,o),n.selection.moveToBookmark(e)}function D(n,t){var e=n,o=t.get()
e.fire("VisualChars",{state:o})
var r=n.getBody();(!0===t.get()?O:C)(n,r)}function E(n,t){return function(e){function o(n){return e.setActive(n.state)}return e.setActive(t.get()),n.on("VisualChars",o),function(){return n.off("VisualChars",o)}}}function L(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}}"undefined"!=typeof window||Function("return this;")()
var x,B=function(n){return 3===n.dom.nodeType},P={fromHtml:function(n,t){var e=(t||document).createElement("div")
if(e.innerHTML=n,!e.hasChildNodes()||1<e.childNodes.length)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return L(e.childNodes[0])},fromTag:function(n,t){return L((t||document).createElement(n))},fromText:function(n,t){return L((t||document).createTextNode(n))},fromDom:L,fromPoint:function(n,t,e){return(null==(o=n.dom.elementFromPoint(t,e))?f:v(o)).map(L)
var o}},V={" ":"nbsp","­":"shy"},j=T(V),M=T(V,!0),H=(x="",m(V,(function(n){x&&(x+=","),x+="span.mce-"+n})),x),_="mce-nbsp",F=function(n,t){var e=[]
return d(function(n,t){for(var e=n.length,o=new Array(e),r=0;r<e;r++){var i=n[r]
o[r]=t(i,r)}return o}(n.dom.childNodes,P.fromDom),(function(n){e=(e=t(n)?e.concat([n]):e).concat(F(n,t))})),e},I=tinymce.util.Tools.resolve("tinymce.util.Delay")
i.add("visualchars",(function(n){var t,e,o,r,i,u,c,a,s,f,l=(t=n.getParam("visualchars_default_state",!1),e=t,{get:function(){return e},set:function(n){e=n}})
function d(){return o.execCommand("mceVisualChars")}return function(n,t){n.addCommand("mceVisualChars",(function(){!function(n,t){t.set(!t.get())
var e=n.selection.getBookmark()
D(n,t),n.selection.moveToBookmark(e)}(n,t)}))}(n,l),(o=n).ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"visualchars",onAction:d,onSetup:E(o,r=l)}),o.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",icon:"visualchars",onAction:d,onSetup:E(o,r)}),i=n,u=l,c=I.debounce((function(){S(i)}),300),!1!==i.getParam("forced_root_block")&&i.on("keydown",(function(n){!0===u.get()&&(13===n.keyCode?S(i):c())})),i.on("remove",c.stop),s=l,(a=n).on("init",(function(){D(a,s)})),f=l,{isEnabled:function(){return f.get()}}}))}()

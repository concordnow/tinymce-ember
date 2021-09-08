!function(){"use strict"
var n,t,e,o,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(n){return function(){return n}},u=i(!1),c=i(!0),a=function(){return s},s=(n=function(n){return n.isNone()},{fold:function(n,t){return n()},is:u,isSome:u,isNone:c,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:e,orThunk:t,map:a,each:function(){},bind:a,exists:u,forall:c,filter:a,equals:n,equals_:n,toArray:function(){return[]},toString:i("none()")}),l=function(n){return function(t){return typeof t===n}},f=("string",function(n){return e=typeof(t=n),"string"===(null===t?"null":"object"==e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e)
var t,e}),d=l("boolean"),m=l("number"),v=function(n,t){for(var e=0,o=n.length;e<o;e++)t(n[e],e)},g=Object.keys,h=function(n,t){for(var e=g(n),o=0,r=e.length;o<r;o++){var i=e[o]
t(n[i],i)}},p=("undefined"!=typeof window||Function("return this;")(),function(n){return n.dom.nodeValue}),y=(3,function(n){return 3===n.dom.nodeType}),b=function(n,t,e){!function(n,t,e){if(!(f(e)||d(e)||m(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,e+"")}(n.dom,t,e)},w=function(n,t){n.dom.removeAttribute(t)},k=function(n,t){var e,o,r=(e=t,null===(o=n.dom.getAttribute(e))?void 0:o)
return void 0===r||""===r?[]:r.split(" ")},A=function(n){return void 0!==n.dom.classList},C=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},N=C,O={" ":"nbsp","­":"shy"},T=function(n,t){var e=""
return h(n,(function(n,t){e+=t})),new RegExp("["+e+"]",t?"g":"")},S=T(O),V=T(O,!0),B=(o="",h(O,(function(n){o&&(o+=","),o+="span.mce-"+n})),o),E="mce-nbsp",L=function(n){return'<span data-mce-bogus="1" class="mce-'+O[n]+'">'+n+"</span>"},j=function(n){var t=p(n)
return y(n)&&void 0!==t&&S.test(t)},x=function(n,t){var e=[],o=function(n,t){for(var e=n.length,o=new Array(e),r=0;r<e;r++){var i=n[r]
o[r]=t(i,r)}return o}(n.dom.childNodes,N)
return v(o,(function(n){t(n)&&(e=e.concat([n])),e=e.concat(x(n,t))})),e},P=function(n){return"span"===n.nodeName.toLowerCase()&&n.classList.contains("mce-nbsp-wrap")},_=function(n,t){var e=x(N(t),j)
v(e,(function(t){var e,o,r=t.dom.parentNode
if(P(r))e=N(r),o=E,A(e)?e.dom.classList.add(o):function(n,t){return o=t,r=k(e=n,"class").concat([o]),b(e,"class",r.join(" ")),!0
var e,o,r}(e,o)
else{for(var i=n.dom.encode(p(t)).replace(V,L),u=n.dom.create("div",null,i),c=void 0;c=u.lastChild;)n.dom.insertAfter(c,t.dom)
n.dom.remove(t.dom)}}))},D=function(n,t){var e=n.dom.select(B,t)
v(e,(function(t){var e,o
P(t)?(e=N(t),o=E,A(e)?e.dom.classList.remove(o):function(n,t){return r=t,0<(i=function(n,t){for(var e=[],o=0,r=n.length;o<r;o++){var i=n[o]
t(i)&&e.push(i)}return e}(k(e=n,o="class"),(function(n){return n!==r}))).length?b(e,o,i.join(" ")):w(e,o),!1
var e,o,r,i}(e,o),function(n){0===(A(n)?n.dom.classList:k(n,"class")).length&&w(n,"class")}(e)):n.dom.remove(t,!0)}))},q=function(n){var t=n.getBody(),e=n.selection.getBookmark(),o=void 0!==(o=function(n,t){for(;n.parentNode;){if(n.parentNode===t)return n
n=n.parentNode}}(n.selection.getNode(),t))?o:t
D(n,o),_(n,o),n.selection.moveToBookmark(e)},I=function(n,t){var e,o
e=n,o=t.get(),e.fire("VisualChars",{state:o})
var r=n.getBody();(!0===t.get()?_:D)(n,r)},M=tinymce.util.Tools.resolve("tinymce.util.Delay"),F=function(n,t){return function(e){e.setActive(t.get())
var o=function(n){return e.setActive(n.state)}
return n.on("VisualChars",o),function(){return n.off("VisualChars",o)}}}
r.add("visualchars",(function(n){var t,e,o,r,i,u,c,a,s,l,f=(t=n.getParam("visualchars_default_state",!1),e=t,{get:function(){return e},set:function(n){e=n}})
return function(n,t){n.addCommand("mceVisualChars",(function(){!function(n,t){t.set(!t.get())
var e=n.selection.getBookmark()
I(n,t),n.selection.moveToBookmark(e)}(n,t)}))}(n,f),r=f,(o=n).ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"visualchars",onAction:function(){return o.execCommand("mceVisualChars")},onSetup:F(o,r)}),o.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",icon:"visualchars",onAction:function(){return o.execCommand("mceVisualChars")},onSetup:F(o,r)}),i=n,u=f,c=M.debounce((function(){q(i)}),300),!1!==i.getParam("forced_root_block")&&i.on("keydown",(function(n){!0===u.get()&&(13===n.keyCode?q(i):c())})),i.on("remove",c.stop),s=f,(a=n).on("init",(function(){I(a,s)})),l=f,{isEnabled:function(){return l.get()}}}))}()
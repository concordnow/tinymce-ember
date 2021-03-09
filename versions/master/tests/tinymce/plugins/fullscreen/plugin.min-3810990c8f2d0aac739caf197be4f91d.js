!function(){"use strict"
var n,e,t,r=function(n){var e=n
return{get:function(){return e},set:function(n){e=n}}},o=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){},i=function(n){return function(){return n}},c=i(!1),l=i(!0),f=function(){return a},a=(n=function(n){return n.isNone()},{fold:function(n,e){return n()},is:c,isSome:c,isNone:l,getOr:t=function(n){return n},getOrThunk:e=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:t,orThunk:e,map:f,each:u,bind:f,exists:c,forall:l,filter:f,equals:n,equals_:n,toArray:function(){return[]},toString:i("none()")}),s=function(n){var e=i(n),t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:l,isNone:c,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return s(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?o:a},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(c,(function(e){return t(n,e)}))}}
return o},d={some:s,none:f,from:function(n){return null==n?a:s(n)}},m=function(){return n=function(n){return n.unbind()},e=r(d.none()),t=function(){return e.get().each(n)},{clear:function(){t(),e.set(d.none())},isSet:function(){return e.get().isSome()},set:function(n){t(),e.set(d.some(n))}}
var n,e,t},h=function(n){return function(e){return r=typeof(t=e),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===n
var t,r}},v=function(n){return function(e){return typeof e===n}},g=h("string"),p=h("array"),y=v("boolean"),w=function(n){return!(null===(e=n)||void 0===e)
var e},b=v("function"),S=v("number"),E=Array.prototype.push,F=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var u=n[o]
r[o]=e(u,o)}return r},T=function(n,e){for(var t=0,r=n.length;t<r;t++)e(n[t],t)},x=function(n,e){for(var t=[],r=0,o=n.length;r<o;r++){var u=n[r]
e(u,r)&&t.push(u)}return t},k=Object.keys,O=function(n){return void 0!==n.style&&b(n.style.getPropertyValue)},A=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},C=A,M=("undefined"!=typeof window||Function("return this;")(),function(n){return function(e){return e.dom.nodeType===n}}),N=M(1),P=M(3),q=M(9),D=M(11),L=function(n,e){var t=n.dom
if(1!==t.nodeType)return!1
var r=t
if(void 0!==r.matches)return r.matches(e)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")},H=function(n){return C(n.dom.ownerDocument)},R=function(n){return F(n.dom.childNodes,C)},V=b(Element.prototype.attachShadow)&&b(Node.prototype.getRootNode),W=i(V),B=V?function(n){return C(n.dom.getRootNode())}:function(n){return q(n)?n:H(n)},j=function(n){var e=B(n)
return D(e)?d.some(e):d.none()},z=function(n){return C(n.dom.host)},I=function(n){var e=P(n)?n.dom.parentNode:n.dom
if(null==e||null===e.ownerDocument)return!1
var t,r,o=e.ownerDocument
return j(C(e)).fold((function(){return o.body.contains(e)}),(t=I,r=z,function(n){return t(r(n))}))},U=function(n,e){var t=n.dom.getAttribute(e)
return null===t?void 0:t},_=function(n,e){n.dom.removeAttribute(e)},K=function(n,e){var t=n.dom
!function(n,e){for(var t=k(n),r=0,o=t.length;r<o;r++){var u=t[r]
e(n[u],u)}}(e,(function(n,e){!function(n,e,t){if(!g(t))throw console.error("Invalid call to CSS.set. Property ",e,":: Value ",t,":: Element ",n),new Error("CSS value must be a string: "+t)
O(n)&&n.style.setProperty(e,t)}(t,e,n)}))},X=function(n){var e,t,r=C(function(n){if(W()&&w(n.target)){var e=C(n.target)
if(N(e)&&function(n){return w(n.dom.shadowRoot)}(e)&&n.composed&&n.composedPath){var t=n.composedPath()
if(t)return function(n){return e=n,0<e.length?d.some(e[0]):d.none()
var e}(t)}}return d.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(e=u,t=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return e(t.apply(null,n))})
return{target:r,x:n.clientX,y:n.clientY,stop:o,prevent:u,kill:i,raw:n}},Y=function(n,e,t,r){n.dom.removeEventListener(e,t,r)},G=l,J=function(n,e,t){return function(n,e,t,r,o){var u,i,c=(u=t,i=r,function(n){u(n)&&i(X(n))})
return n.dom.addEventListener(e,c,o),{unbind:function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t]
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
var o=e.concat(t)
return n.apply(null,o)}}(Y,n,e,c,o)}}(n,e,G,t,!1)},Q=function(n,e){return{left:n,top:e,translate:function(t,r){return Q(n+t,e+r)}}},Z=Q,$=function(n){var e=void 0===n?window:n
return d.from(e.visualViewport)},nn=function(n,e,t,r){return{x:n,y:e,width:t,height:r,right:n+t,bottom:e+r}},en=function(n){var e,t,r,o,u=void 0===n?window:n,i=u.document,c=(r=(t=void 0!==(e=C(i))?e.dom:document).body.scrollLeft||t.documentElement.scrollLeft,o=t.body.scrollTop||t.documentElement.scrollTop,Z(r,o))
return $(u).fold((function(){var n=u.document.documentElement,e=n.clientWidth,t=n.clientHeight
return nn(c.left,c.top,e,t)}),(function(n){return nn(Math.max(n.pageLeft,c.left),Math.max(n.pageTop,c.top),n.width,n.height)}))},tn=function(n,e,t){return $(t).map((function(t){var r=function(n){return e(X(n))}
return t.addEventListener(n,r),{unbind:function(){return t.removeEventListener(n,r)}}})).getOrThunk((function(){return{unbind:u}}))},rn=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),on=tinymce.util.Tools.resolve("tinymce.Env"),un=tinymce.util.Tools.resolve("tinymce.util.Delay"),cn=function(n,e){n.fire("FullscreenStateChanged",{state:e})},ln=function(n){return n.getParam("fullscreen_native",!1,"boolean")},fn=function(n){return n.dom===(void 0!==(e=H(n).dom).fullscreenElement?e.fullscreenElement:void 0!==e.msFullscreenElement?e.msFullscreenElement:void 0!==e.webkitFullscreenElement?e.webkitFullscreenElement:null)
var e},an=function(n,e,t){return x(function(n,e){for(var t=b(e)?e:c,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var u=r.parentNode,i=C(u)
if(o.push(i),!0===t(i))break
r=u}return o}(n,t),e)},sn=function(n,e){return t=function(n){return L(n,e)},x(function(n){var e
return e=n,d.from(e.dom.parentNode).map(C).map(R).map((function(e){return x(e,(function(e){return t=e,n.dom!==t.dom
var t}))})).getOr([])}(n),t)
var t},dn="data-ephox-mobile-fullscreen-style",mn="position:absolute!important;",hn="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",vn=on.os.isAndroid(),gn=function(n){var e,t,r,o,u=(t="background-color",r=(e=n).dom,""!==(o=window.getComputedStyle(r).getPropertyValue(t))||I(e)?o:function(n,e){return O(n)?n.style.getPropertyValue(e):""}(r,t))
return void 0!==u&&""!==u?"background-color:"+u+"!important":"background-color:rgb(255,255,255)!important;"},pn=function(n,e,t){var r=function(e){return function(t){var r=U(t,"style"),o=void 0===r?"no-styles":r.trim()
o!==e&&(function(n,e,t){!function(n,e,t){if(!(g(t)||y(t)||S(t)))throw console.error("Invalid call to Attribute.set. Key ",e,":: Value ",t,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(e,t+"")}(n.dom,e,t)}(t,dn,o),K(t,n.parseStyle(e)))}},o=("*",an(e,(function(n){return L(n,"*")}),undefined)),u=function(n,e){return function(n){for(var e=[],t=0,r=n.length;t<r;++t){if(!p(n[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+n)
E.apply(e,n[t])}return e}(F(n,e))}(o,(function(n){return sn(n,"*:not(.tox-silver-sink)")})),i=gn(t)
T(u,r("display:none!important;")),T(o,r(mn+hn+i)),r((!0===vn?"":mn)+hn+i)(e)},yn=rn.DOM,wn=$().fold((function(){return{bind:u,unbind:u}}),(function(n){var e,t=(e=r(d.none()),{clear:function(){return e.set(d.none())},set:function(n){return e.set(d.some(n))},isSet:function(){return e.get().isSome()},on:function(n){return e.get().each(n)}}),o=m(),u=m(),i=un.throttle((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.requestAnimationFrame((function(){t.on((function(e){return K(e,{top:n.offsetTop+"px",left:n.offsetLeft+"px",height:n.height+"px",width:n.width+"px"})}))}))}),50)
return{bind:function(n){t.set(n),i(),o.set(tn("resize",i)),u.set(tn("scroll",i))},unbind:function(){t.on((function(){o.clear(),u.clear()})),t.clear()}}})),bn=function(n,e){var t,r,o,u,i,c,l=document.body,f=document.documentElement,a=n.getContainer(),s=C(a),m=function(n){var e=C(n.getElement())
return j(e).map(z).getOrThunk((function(){return function(n){var e=n.dom.body
if(null==e)throw new Error("Body is not available yet")
return C(e)}(H(e))}))}(n),h=e.get(),v=C(n.getBody()),g=on.deviceType.isTouch(),p=a.style,y=n.iframeElement.style,w=function(n){n(l,"tox-fullscreen"),n(f,"tox-fullscreen"),n(a,"tox-fullscreen"),j(s).map((function(n){return z(n).dom})).each((function(e){n(e,"tox-fullscreen"),n(e,"tox-shadowhost")}))},b=function(){var t,r
g&&(t=n.dom,r=function(n){return e=n,1!==(t=r=document).nodeType&&9!==t.nodeType&&11!==t.nodeType||0===t.childElementCount?[]:F(r.querySelectorAll(e),C)
var e,t,r}("["+dn+"]"),T(r,(function(n){var e=U(n,dn)
"no-styles"!==e?K(n,t.parseStyle(e)):_(n,"style"),_(n,dn)}))),w(yn.removeClass),wn.unbind(),d.from(e.get()).each((function(n){return n.fullscreenChangeHandler.unbind()}))}
h?(h.fullscreenChangeHandler.unbind(),ln(n)&&fn(m)&&((u=H(m).dom).exitFullscreen?u.exitFullscreen():u.msExitFullscreen?u.msExitFullscreen():u.webkitCancelFullScreen&&u.webkitCancelFullScreen()),y.width=h.iframeWidth,y.height=h.iframeHeight,p.width=h.containerWidth,p.height=h.containerHeight,p.top=h.containerTop,p.left=h.containerLeft,o=h.scrollPos,window.scrollTo(o.x,o.y),e.set(null),cn(n,!1),b(),n.off("remove",b)):(t=J(H(m),void 0!==document.fullscreenElement?"fullscreenchange":void 0!==document.msFullscreenElement?"MSFullscreenChange":void 0!==document.webkitFullscreenElement?"webkitfullscreenchange":"fullscreenchange",(function(t){ln(n)&&(fn(m)||null===e.get()||bn(n,e))})),r={scrollPos:{x:(c=en(window)).x,y:c.y},containerWidth:p.width,containerHeight:p.height,containerTop:p.top,containerLeft:p.left,iframeWidth:y.width,iframeHeight:y.height,fullscreenChangeHandler:t},g&&pn(n.dom,s,v),y.width=y.height="100%",p.width=p.height="",w(yn.addClass),wn.bind(s),n.on("remove",b),e.set(r),ln(n)&&((i=m.dom).requestFullscreen?i.requestFullscreen():i.msRequestFullscreen?i.msRequestFullscreen():i.webkitRequestFullScreen&&i.webkitRequestFullScreen()),cn(n,!0))},Sn=function(n,e){return function(t){t.setActive(null!==e.get())
var r=function(n){return t.setActive(n.state)}
return n.on("FullscreenStateChanged",r),function(){return n.off("FullscreenStateChanged",r)}}}
o.add("fullscreen",(function(n){var e,t,o,u,i=r(null)
return n.inline||(t=i,(e=n).addCommand("mceFullScreen",(function(){bn(e,t)})),u=i,(o=n).ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",icon:"fullscreen",shortcut:"Meta+Shift+F",onAction:function(){return o.execCommand("mceFullScreen")},onSetup:Sn(o,u)}),o.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:function(){return o.execCommand("mceFullScreen")},onSetup:Sn(o,u)}),n.addShortcut("Meta+Shift+F","","mceFullScreen")),function(n){return{isFullscreen:function(){return null!==n.get()}}}(i)}))}()

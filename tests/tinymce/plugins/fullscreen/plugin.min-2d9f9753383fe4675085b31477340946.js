!function(){"use strict"
var n,e,t,r=function(n){var e=n
return{get:function(){return e},set:function(n){e=n}}},o=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){},i=function(n){return function(){return n}},l=i(!1),c=i(!0),a=function(){return f},f=(n=function(n){return n.isNone()},{fold:function(n,e){return n()},is:l,isSome:l,isNone:c,getOr:t=function(n){return n},getOrThunk:e=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:t,orThunk:e,map:a,each:u,bind:a,exists:l,forall:c,filter:a,equals:n,equals_:n,toArray:function(){return[]},toString:i("none()")}),s=function(n){var e=i(n),t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:c,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return s(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?o:f},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(l,(function(e){return t(n,e)}))}}
return o},d={some:s,none:a,from:function(n){return null==n?f:s(n)}},m=function(){return n=function(n){return n.unbind()},e=r(d.none()),t=function(){return e.get().each(n)},{clear:function(){t(),e.set(d.none())},isSet:function(){return e.get().isSome()},set:function(n){t(),e.set(d.some(n))}}
var n,e,t},h=function(n){return function(e){return r=typeof(t=e),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===n
var t,r}},v=function(n){return function(e){return typeof e===n}},g=h("string"),p=h("array"),y=v("boolean"),w=function(n){return!(null===(e=n)||void 0===e)
var e},b=v("function"),S=v("number"),E=Array.prototype.push,F=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var u=n[o]
r[o]=e(u,o)}return r},x=function(n,e){for(var t=0,r=n.length;t<r;t++)e(n[t],t)},T=function(n,e){for(var t=[],r=0,o=n.length;r<o;r++){var u=n[r]
e(u,r)&&t.push(u)}return t},k=Object.keys,C=function(n){return void 0!==n.style&&b(n.style.getPropertyValue)},O=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},A=O,M=("undefined"!=typeof window||Function("return this;")(),function(n){return function(e){return e.dom.nodeType===n}}),N=M(1),P=M(3),q=M(9),D=M(11),L=function(n,e){var t=n.dom
if(1!==t.nodeType)return!1
var r=t
if(void 0!==r.matches)return r.matches(e)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")},H=function(n){return A(n.dom.ownerDocument)},R=function(n){return F(n.dom.childNodes,A)},V=b(Element.prototype.attachShadow)&&b(Node.prototype.getRootNode),W=i(V),B=V?function(n){return A(n.dom.getRootNode())}:function(n){return q(n)?n:H(n)},j=function(n){var e=B(n)
return D(e)?d.some(e):d.none()},z=function(n){return A(n.dom.host)},I=function(n){return w(n.dom.shadowRoot)},U=function(n){var e=P(n)?n.dom.parentNode:n.dom
if(null==e||null===e.ownerDocument)return!1
var t,r,o=e.ownerDocument
return j(A(e)).fold((function(){return o.body.contains(e)}),(t=U,r=z,function(n){return t(r(n))}))},_=function(n,e){var t=n.dom.getAttribute(e)
return null===t?void 0:t},K=function(n,e){n.dom.removeAttribute(e)},X=function(n,e){var t=n.dom
!function(n,e){for(var t=k(n),r=0,o=t.length;r<o;r++){var u=t[r]
e(n[u],u)}}(e,(function(n,e){!function(n,e,t){if(!g(t))throw console.error("Invalid call to CSS.set. Property ",e,":: Value ",t,":: Element ",n),new Error("CSS value must be a string: "+t)
C(n)&&n.style.setProperty(e,t)}(t,e,n)}))},Y=function(n){var e,t,r=A(function(n){if(W()&&w(n.target)){var e=A(n.target)
if(N(e)&&I(e)&&n.composed&&n.composedPath){var t=n.composedPath()
if(t)return 0===(r=t).length?d.none():d.some(r[0])}}var r
return d.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(e=u,t=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return e(t.apply(null,n))})
return{target:r,x:n.clientX,y:n.clientY,stop:o,prevent:u,kill:i,raw:n}},G=function(n,e,t,r){n.dom.removeEventListener(e,t,r)},J=c,Q=function(n,e,t){return function(n,e,t,r,o){var u,i,l=(u=t,i=r,function(n){u(n)&&i(Y(n))})
return n.dom.addEventListener(e,l,o),{unbind:function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t]
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
var o=e.concat(t)
return n.apply(null,o)}}(G,n,e,l,o)}}(n,e,J,t,!1)},Z=function(n,e){return{left:n,top:e,translate:function(t,r){return Z(n+t,e+r)}}},$=Z,nn=function(n){var e=void 0===n?window:n
return d.from(e.visualViewport)},en=function(n,e,t,r){return{x:n,y:e,width:t,height:r,right:n+t,bottom:e+r}},tn=function(n){var e,t,r,o,u=void 0===n?window:n,i=u.document,l=(r=(t=void 0!==(e=A(i))?e.dom:document).body.scrollLeft||t.documentElement.scrollLeft,o=t.body.scrollTop||t.documentElement.scrollTop,$(r,o))
return nn(u).fold((function(){var n=u.document.documentElement,e=n.clientWidth,t=n.clientHeight
return en(l.left,l.top,e,t)}),(function(n){return en(Math.max(n.pageLeft,l.left),Math.max(n.pageTop,l.top),n.width,n.height)}))},rn=function(n,e,t){return nn(t).map((function(t){var r=function(n){return e(Y(n))}
return t.addEventListener(n,r),{unbind:function(){return t.removeEventListener(n,r)}}})).getOrThunk((function(){return{unbind:u}}))},on=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),un=tinymce.util.Tools.resolve("tinymce.Env"),ln=tinymce.util.Tools.resolve("tinymce.util.Delay"),cn=function(n,e){n.fire("FullscreenStateChanged",{state:e})},an=function(n){return n.getParam("fullscreen_native",!1,"boolean")},fn=function(n){return n.dom===(void 0!==(e=H(n).dom).fullscreenElement?e.fullscreenElement:void 0!==e.msFullscreenElement?e.msFullscreenElement:void 0!==e.webkitFullscreenElement?e.webkitFullscreenElement:null)
var e},sn=function(n,e,t){return T(function(n,e){for(var t=b(e)?e:l,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var u=r.parentNode,i=A(u)
if(o.push(i),!0===t(i))break
r=u}return o}(n,t),e)},dn=function(n,e){return t=function(n){return L(n,e)},T(function(n){var e
return e=n,d.from(e.dom.parentNode).map(A).map(R).map((function(e){return T(e,(function(e){return t=e,n.dom!==t.dom
var t}))})).getOr([])}(n),t)
var t},mn="data-ephox-mobile-fullscreen-style",hn="position:absolute!important;",vn="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",gn=un.os.isAndroid(),pn=function(n){var e,t,r,o,u=(t="background-color",r=(e=n).dom,""!==(o=window.getComputedStyle(r).getPropertyValue(t))||U(e)?o:function(n,e){return C(n)?n.style.getPropertyValue(e):""}(r,t))
return void 0!==u&&""!==u?"background-color:"+u+"!important":"background-color:rgb(255,255,255)!important;"},yn=function(n,e,t){var r=function(e){return function(t){var r=_(t,"style"),o=void 0===r?"no-styles":r.trim()
o!==e&&(function(n,e,t){!function(n,e,t){if(!(g(t)||y(t)||S(t)))throw console.error("Invalid call to Attribute.set. Key ",e,":: Value ",t,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(e,t+"")}(n.dom,e,t)}(t,mn,o),X(t,n.parseStyle(e)))}},o=("*",sn(e,(function(n){return L(n,"*")}),undefined)),u=function(n,e){return function(n){for(var e=[],t=0,r=n.length;t<r;++t){if(!p(n[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+n)
E.apply(e,n[t])}return e}(F(n,e))}(o,(function(n){return dn(n,"*:not(.tox-silver-sink)")})),i=pn(t)
x(u,r("display:none!important;")),x(o,r(hn+vn+i)),r((!0===gn?"":hn)+vn+i)(e)},wn=on.DOM,bn=nn().fold((function(){return{bind:u,unbind:u}}),(function(n){var e,t=(e=r(d.none()),{clear:function(){return e.set(d.none())},set:function(n){return e.set(d.some(n))},isSet:function(){return e.get().isSome()},on:function(n){return e.get().each(n)}}),o=m(),u=m(),i=ln.throttle((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.requestAnimationFrame((function(){t.on((function(e){return X(e,{top:n.offsetTop+"px",left:n.offsetLeft+"px",height:n.height+"px",width:n.width+"px"})}))}))}),50)
return{bind:function(n){t.set(n),i(),o.set(rn("resize",i)),u.set(rn("scroll",i))},unbind:function(){t.on((function(){o.clear(),u.clear()})),t.clear()}}})),Sn=function(n,e){var t,r,o,u,i,l,c=document.body,a=document.documentElement,f=n.getContainer(),s=A(f),m=function(n){var e=A(n.getElement())
return j(e).map(z).getOrThunk((function(){return function(n){var e=n.dom.body
if(null==e)throw new Error("Body is not available yet")
return A(e)}(H(e))}))}(n),h=e.get(),v=A(n.getBody()),g=un.deviceType.isTouch(),p=f.style,y=n.iframeElement.style,w=function(){var t,r
g&&(t=n.dom,r=function(n){return e=n,1!==(t=r=document).nodeType&&9!==t.nodeType&&11!==t.nodeType||0===t.childElementCount?[]:F(r.querySelectorAll(e),A)
var e,t,r}("["+mn+"]"),x(r,(function(n){var e=_(n,mn)
"no-styles"!==e?X(n,t.parseStyle(e)):K(n,"style"),K(n,mn)}))),wn.removeClass(c,"tox-fullscreen"),wn.removeClass(a,"tox-fullscreen"),wn.removeClass(f,"tox-fullscreen"),bn.unbind(),d.from(e.get()).each((function(n){return n.fullscreenChangeHandler.unbind()}))}
h?(h.fullscreenChangeHandler.unbind(),an(n)&&fn(m)&&((u=H(m).dom).exitFullscreen?u.exitFullscreen():u.msExitFullscreen?u.msExitFullscreen():u.webkitCancelFullScreen&&u.webkitCancelFullScreen()),y.width=h.iframeWidth,y.height=h.iframeHeight,p.width=h.containerWidth,p.height=h.containerHeight,p.top=h.containerTop,p.left=h.containerLeft,o=h.scrollPos,window.scrollTo(o.x,o.y),e.set(null),cn(n,!1),w(),n.off("remove",w)):(t=Q(H(m),void 0!==document.fullscreenElement?"fullscreenchange":void 0!==document.msFullscreenElement?"MSFullscreenChange":void 0!==document.webkitFullscreenElement?"webkitfullscreenchange":"fullscreenchange",(function(t){an(n)&&(fn(m)||null===e.get()||Sn(n,e))})),r={scrollPos:{x:(l=tn(window)).x,y:l.y},containerWidth:p.width,containerHeight:p.height,containerTop:p.top,containerLeft:p.left,iframeWidth:y.width,iframeHeight:y.height,fullscreenChangeHandler:t},g&&yn(n.dom,s,v),y.width=y.height="100%",p.width=p.height="",wn.addClass(c,"tox-fullscreen"),wn.addClass(a,"tox-fullscreen"),wn.addClass(f,"tox-fullscreen"),bn.bind(s),n.on("remove",w),e.set(r),an(n)&&((i=m.dom).requestFullscreen?i.requestFullscreen():i.msRequestFullscreen?i.msRequestFullscreen():i.webkitRequestFullScreen&&i.webkitRequestFullScreen()),cn(n,!0))},En=function(n,e){return function(t){t.setActive(null!==e.get())
var r=function(n){return t.setActive(n.state)}
return n.on("FullscreenStateChanged",r),function(){return n.off("FullscreenStateChanged",r)}}}
o.add("fullscreen",(function(n){var e,t,o,u,i=r(null)
return n.inline||(t=i,(e=n).addCommand("mceFullScreen",(function(){Sn(e,t)})),u=i,(o=n).ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",icon:"fullscreen",shortcut:"Meta+Shift+F",onAction:function(){return o.execCommand("mceFullScreen")},onSetup:En(o,u)}),o.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:function(){return o.execCommand("mceFullScreen")},onSetup:En(o,u)}),n.addShortcut("Meta+Shift+F","","mceFullScreen")),function(n){return{isFullscreen:function(){return null!==n.get()}}}(i)}))}()

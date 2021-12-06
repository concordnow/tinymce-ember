(function(){"use strict"
var n=function(n){var e=n
return{get:function(){return e},set:function(n){e=n}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=function(n){return{isFullscreen:function(){return null!==n.get()}}},t=function(n){return function(e){return t=typeof(r=e),(null===r?"null":"object"===t&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":t)===n
var r,t}},o=function(n){return function(e){return typeof e===n}},i=t("string"),u=t("array"),c=o("boolean"),a=function(n){return!function(n){return null==n}(n)},s=o("function"),f=o("number"),l=function(){},m=function(n){return function(){return n}},d=function(n){return n}
function v(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r]
return function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t]
var o=e.concat(r)
return n.apply(null,o)}}var h,g,p=m(!1),w=m(!0),y=function(){return b},b={fold:function(n,e){return n()},isSome:p,isNone:w,getOr:g=d,getOrThunk:h=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:m(null),getOrUndefined:m(void 0),or:g,orThunk:h,map:y,each:l,bind:y,exists:p,forall:w,filter:function(){return y()},toArray:function(){return[]},toString:m("none()")},S=function(n){var e=m(n),r=function(){return o},t=function(e){return e(n)},o={fold:function(e,r){return r(n)},isSome:w,isNone:p,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:r,orThunk:r,map:function(e){return S(e(n))},each:function(e){e(n)},bind:t,exists:t,forall:t,filter:function(e){return e(n)?o:b},toArray:function(){return[n]},toString:function(){return"some("+n+")"}}
return o},x={some:S,none:y,from:function(n){return null==n?b:S(n)}},E=function(){return(E=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}).apply(this,arguments)},O=function(e){var r=n(x.none()),t=function(){return r.get().each(e)}
return{clear:function(){t(),r.set(x.none())},isSet:function(){return r.get().isSome()},get:function(){return r.get()},set:function(n){t(),r.set(x.some(n))}}},F=function(){return O((function(n){return n.unbind()}))},T=Array.prototype.push,k=function(n,e){for(var r=n.length,t=new Array(r),o=0;o<r;o++){var i=n[o]
t[o]=e(i,o)}return t},D=function(n,e){for(var r=0,t=n.length;r<t;r++){e(n[r],r)}},C=function(n,e){for(var r=[],t=0,o=n.length;t<o;t++){var i=n[t]
e(i,t)&&r.push(i)}return r},A=function(n,e){return function(n,e,r){for(var t=0,o=n.length;t<o;t++){var i=n[t]
if(e(i,t))return x.some(i)
if(r(i,t))break}return x.none()}(n,e,p)},R=function(n,e){return function(n){for(var e=[],r=0,t=n.length;r<t;++r){if(!u(n[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+n)
T.apply(e,n[r])}return e}(k(n,e))},L=function(n){return function(n,e){return e>=0&&e<n.length?x.some(n[e]):x.none()}(n,0)},P=Object.keys,M=function(n,e){return-1!==n.indexOf(e)},N=function(n){return void 0!==n.style&&s(n.style.getPropertyValue)},H=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},W={fromHtml:function(n,e){var r=(e||document).createElement("div")
if(r.innerHTML=n,!r.hasChildNodes()||r.childNodes.length>1)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return H(r.childNodes[0])},fromTag:function(n,e){var r=(e||document).createElement(n)
return H(r)},fromText:function(n,e){var r=(e||document).createTextNode(n)
return H(r)},fromDom:H,fromPoint:function(n,e,r){return x.from(n.dom.elementFromPoint(e,r)).map(H)}}
"undefined"!=typeof window?window:Function("return this;")()
var q=function(n){return function(e){return function(n){return n.dom.nodeType}(e)===n}},I=q(1),j=q(3),B=q(9),V=q(11),X=function(){return _(0,0)},_=function(n,e){return{major:n,minor:e}},z={nu:_,detect:function(n,e){var r=String(e).toLowerCase()
return 0===n.length?X():function(n,e){var r=function(n,e){for(var r=0;r<n.length;r++){var t=n[r]
if(t.test(e))return t}}(n,e)
if(!r)return{major:0,minor:0}
var t=function(n){return Number(e.replace(r,"$"+n))}
return _(t(1),t(2))}(n,r)},unknown:X},U=function(n,e){return function(n,e){for(var r=0;r<n.length;r++){var t=e(n[r],r)
if(t.isSome())return t}return x.none()}(e.brands,(function(e){var r=e.brand.toLowerCase()
return A(n,(function(n){var e
return r===(null===(e=n.brand)||void 0===e?void 0:e.toLowerCase())})).map((function(n){return{current:n.name,version:z.nu(parseInt(e.version,10),0)}}))}))},$=function(n,e){var r=String(e).toLowerCase()
return A(n,(function(n){return n.search(r)}))},K=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Y=function(n){return function(e){return M(e,n)}},G=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return M(n,"edge/")&&M(n,"chrome")&&M(n,"safari")&&M(n,"applewebkit")}},{name:"Chrome",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,K],search:function(n){return M(n,"chrome")&&!M(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return M(n,"msie")||M(n,"trident")}},{name:"Opera",versionRegexes:[K,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Y("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Y("firefox")},{name:"Safari",versionRegexes:[K,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(M(n,"safari")||M(n,"mobile/"))&&M(n,"applewebkit")}}],J=[{name:"Windows",search:Y("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return M(n,"iphone")||M(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Y("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Y("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Y("linux"),versionRegexes:[]},{name:"Solaris",search:Y("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Y("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:Y("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Q={browsers:m(G),oses:m(J)},Z="Edge",nn="Chrome",en="Opera",rn="Firefox",tn="Safari",on=function(n){var e=n.current,r=n.version,t=function(n){return function(){return e===n}}
return{current:e,version:r,isEdge:t(Z),isChrome:t(nn),isIE:t("IE"),isOpera:t(en),isFirefox:t(rn),isSafari:t(tn)}},un={unknown:function(){return on({current:void 0,version:z.unknown()})},nu:on,edge:m(Z),chrome:m(nn),ie:m("IE"),opera:m(en),firefox:m(rn),safari:m(tn)},cn="Windows",an="Android",sn="Linux",fn="Solaris",ln="FreeBSD",mn="ChromeOS",dn=function(n){var e=n.current,r=n.version,t=function(n){return function(){return e===n}}
return{current:e,version:r,isWindows:t(cn),isiOS:t("iOS"),isAndroid:t(an),isOSX:t("OSX"),isLinux:t(sn),isSolaris:t(fn),isFreeBSD:t(ln),isChromeOS:t(mn)}},vn={unknown:function(){return dn({current:void 0,version:z.unknown()})},nu:dn,windows:m(cn),ios:m("iOS"),android:m(an),linux:m(sn),osx:m("OSX"),solaris:m(fn),freebsd:m(ln),chromeos:m(mn)},hn=function(n,e,r){var t=Q.browsers(),o=Q.oses(),i=e.bind((function(n){return U(t,n)})).orThunk((function(){return function(n,e){return $(n,e).map((function(n){var r=z.detect(n.versionRegexes,e)
return{current:n.name,version:r}}))}(t,n)})).fold(un.unknown,un.nu),u=function(n,e){return $(n,e).map((function(n){var r=z.detect(n.versionRegexes,e)
return{current:n.name,version:r}}))}(o,n).fold(vn.unknown,vn.nu),c=function(n,e,r,t){var o=n.isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!o,u=n.isiOS()||n.isAndroid(),c=u||t("(pointer:coarse)"),a=o||!i&&u&&t("(min-device-width:768px)"),s=i||u&&!a,f=e.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),l=!s&&!a&&!f
return{isiPad:m(o),isiPhone:m(i),isTablet:m(a),isPhone:m(s),isTouch:m(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:m(f),isDesktop:m(l)}}(u,i,n,r)
return{browser:i,os:u,deviceType:c}},gn=function(n){return window.matchMedia(n).matches},pn=function(n){var e,r=!1
return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o]
return r||(r=!0,e=n.apply(null,t)),e}}((function(){return hn(navigator.userAgent,x.from(navigator.userAgentData),gn)})),wn=function(n,e){var r=n.dom
if(1!==r.nodeType)return!1
var t=r
if(void 0!==t.matches)return t.matches(e)
if(void 0!==t.msMatchesSelector)return t.msMatchesSelector(e)
if(void 0!==t.webkitMatchesSelector)return t.webkitMatchesSelector(e)
if(void 0!==t.mozMatchesSelector)return t.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")},yn=function(n){return W.fromDom(n.dom.ownerDocument)},bn=function(n){return function(n){return x.from(n.dom.parentNode).map(W.fromDom)}(n).map(Sn).map((function(e){return C(e,(function(e){return r=e,!(n.dom===r.dom)
var r}))})).getOr([])},Sn=function(n){return k(n.dom.childNodes,W.fromDom)},xn=s(Element.prototype.attachShadow)&&s(Node.prototype.getRootNode),En=m(xn),On=xn?function(n){return W.fromDom(n.dom.getRootNode())}:function(n){return B(n)?n:yn(n)},Fn=function(n){var e,r=On(n)
return V(e=r)&&a(e.dom.host)?x.some(r):x.none()},Tn=function(n){return W.fromDom(n.dom.host)},kn=function(n){return a(n.dom.shadowRoot)},Dn=function(n){var e=j(n)?n.dom.parentNode:n.dom
if(null==e||null===e.ownerDocument)return!1
var r,t,o=e.ownerDocument
return Fn(W.fromDom(e)).fold((function(){return o.body.contains(e)}),(r=Dn,t=Tn,function(n){return r(t(n))}))},Cn=function(n,e,r){(function(n,e,r){if(!(i(r)||c(r)||f(r)))throw console.error("Invalid call to Attribute.set. Key ",e,":: Value ",r,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(e,r+"")})(n.dom,e,r)},An=function(n,e){var r=n.dom.getAttribute(e)
return null===r?void 0:r},Rn=function(n,e){n.dom.removeAttribute(e)},Ln=function(n,e){var r=n.dom;(function(n,e){for(var r=P(n),t=0,o=r.length;t<o;t++){var i=r[t]
e(n[i],i)}})(e,(function(n,e){(function(n,e,r){if(!i(r))throw console.error("Invalid call to CSS.set. Property ",e,":: Value ",r,":: Element ",n),new Error("CSS value must be a string: "+r)
N(n)&&n.style.setProperty(e,r)})(r,e,n)}))},Pn=function(n,e){return N(n)?n.style.getPropertyValue(e):""},Mn=function(n){var e,r,t=W.fromDom(function(n){if(En()&&a(n.target)){var e=W.fromDom(n.target)
if(I(e)&&kn(e)&&n.composed&&n.composedPath){var r=n.composedPath()
if(r)return L(r)}}return x.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},i=function(){return n.preventDefault()},u=(e=i,r=o,function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]
return e(r.apply(null,n))})
return function(n,e,r,t,o,i,u){return{target:n,x:e,y:r,stop:t,prevent:o,kill:i,raw:u}}(t,n.clientX,n.clientY,o,i,u,n)},Nn=function(n,e,r,t,o){var i=function(n,e){return function(r){n(r)&&e(Mn(r))}}(r,t)
return n.dom.addEventListener(e,i,o),{unbind:v(Hn,n,e,i,o)}},Hn=function(n,e,r,t){n.dom.removeEventListener(e,r,t)},Wn=w,qn=function(n,e,r){return function(n,e,r,t){return Nn(n,e,r,t,!1)}(n,e,Wn,r)},In=function(n,e){return{left:n,top:e,translate:function(r,t){return In(n+r,e+t)}}},jn=In,Bn=function(n){var e=void 0===n?window:n
return pn().browser.isFirefox()?x.none():x.from(e.visualViewport)},Vn=function(n,e,r,t){return{x:n,y:e,width:r,height:t,right:n+r,bottom:e+t}},Xn=function(n){var e=void 0===n?window:n,r=e.document,t=function(n){var e=void 0!==n?n.dom:document,r=e.body.scrollLeft||e.documentElement.scrollLeft,t=e.body.scrollTop||e.documentElement.scrollTop
return jn(r,t)}(W.fromDom(r))
return Bn(e).fold((function(){var n=e.document.documentElement,r=n.clientWidth,o=n.clientHeight
return Vn(t.left,t.top,r,o)}),(function(n){return Vn(Math.max(n.pageLeft,t.left),Math.max(n.pageTop,t.top),n.width,n.height)}))},_n=function(n,e,r){return Bn(r).map((function(r){var t=function(n){return e(Mn(n))}
return r.addEventListener(n,t),{unbind:function(){return r.removeEventListener(n,t)}}})).getOrThunk((function(){return{unbind:l}}))},zn=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Un=tinymce.util.Tools.resolve("tinymce.Env"),$n=tinymce.util.Tools.resolve("tinymce.util.Delay"),Kn=function(n,e){n.fire("FullscreenStateChanged",{state:e})},Yn=function(n){return n.getParam("fullscreen_native",!1,"boolean")},Gn=function(n){var e=W.fromDom(n.getElement())
return Fn(e).map(Tn).getOrThunk((function(){return function(n){var e=n.dom.body
if(null==e)throw new Error("Body is not available yet")
return W.fromDom(e)}(yn(e))}))},Jn=function(n){return n.dom===(void 0!==(e=yn(n).dom).fullscreenElement?e.fullscreenElement:void 0!==e.msFullscreenElement?e.msFullscreenElement:void 0!==e.webkitFullscreenElement?e.webkitFullscreenElement:null)
var e},Qn=function(n,e,r){return C(function(n,e){for(var r=s(e)?e:p,t=n.dom,o=[];null!==t.parentNode&&void 0!==t.parentNode;){var i=t.parentNode,u=W.fromDom(i)
if(o.push(u),!0===r(u))break
t=i}return o}(n,r),e)},Zn=function(n){return function(n,e){var r,t=void 0===e?document:e.dom
return 1!==(r=t).nodeType&&9!==r.nodeType&&11!==r.nodeType||0===r.childElementCount?[]:k(t.querySelectorAll(n),W.fromDom)}(n)},ne=function(n,e,r){return Qn(n,(function(n){return wn(n,e)}),r)},ee=function(n,e){return function(n,e){return C(bn(n),e)}(n,(function(n){return wn(n,e)}))},re="data-ephox-mobile-fullscreen-style",te="position:absolute!important;",oe="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",ie=Un.os.isAndroid(),ue=function(n){var e=function(n,e){var r=n.dom,t=window.getComputedStyle(r).getPropertyValue(e)
return""!==t||Dn(n)?t:Pn(r,e)}(n,"background-color")
return void 0!==e&&""!==e?"background-color:"+e+"!important":"background-color:rgb(255,255,255)!important;"},ce=zn.DOM,ae=Bn().fold((function(){return{bind:l,unbind:l}}),(function(n){var e,r=(e=O(l),E(E({},e),{on:function(n){return e.get().each(n)}})),t=F(),o=F(),i=$n.throttle((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,window.requestAnimationFrame((function(){r.on((function(e){return Ln(e,{top:n.offsetTop+"px",left:n.offsetLeft+"px",height:n.height+"px",width:n.width+"px"})}))}))}),50)
return{bind:function(n){r.set(n),i(),t.set(_n("resize",i)),o.set(_n("scroll",i))},unbind:function(){r.on((function(){t.clear(),o.clear()})),r.clear()}}})),se=function(n,e){var r,t,o,i,u=document.body,c=document.documentElement,a=n.getContainer(),s=W.fromDom(a),f=Gn(n),l=e.get(),m=W.fromDom(n.getBody()),d=Un.deviceType.isTouch(),v=a.style,h=n.iframeElement.style,g=function(n){n(u,"tox-fullscreen"),n(c,"tox-fullscreen"),n(a,"tox-fullscreen"),Fn(s).map((function(n){return Tn(n).dom})).each((function(e){n(e,"tox-fullscreen"),n(e,"tox-shadowhost")}))},p=function(){var r,t
d&&(r=n.dom,t=Zn("["+re+"]"),D(t,(function(n){var e=An(n,re)
"no-styles"!==e?Ln(n,r.parseStyle(e)):Rn(n,"style"),Rn(n,re)}))),g(ce.removeClass),ae.unbind(),x.from(e.get()).each((function(n){return n.fullscreenChangeHandler.unbind()}))}
if(l)l.fullscreenChangeHandler.unbind(),Yn(n)&&Jn(f)&&(t=yn(f),(o=t.dom).exitFullscreen?o.exitFullscreen():o.msExitFullscreen?o.msExitFullscreen():o.webkitCancelFullScreen&&o.webkitCancelFullScreen()),h.width=l.iframeWidth,h.height=l.iframeHeight,v.width=l.containerWidth,v.height=l.containerHeight,v.top=l.containerTop,v.left=l.containerLeft,r=l.scrollPos,window.scrollTo(r.x,r.y),e.set(null),Kn(n,!1),p(),n.off("remove",p)
else{var w=qn(yn(f),void 0!==document.fullscreenElement?"fullscreenchange":void 0!==document.msFullscreenElement?"MSFullscreenChange":void 0!==document.webkitFullscreenElement?"webkitfullscreenchange":"fullscreenchange",(function(r){Yn(n)&&(Jn(f)||null===e.get()||se(n,e))})),y={scrollPos:Xn(window),containerWidth:v.width,containerHeight:v.height,containerTop:v.top,containerLeft:v.left,iframeWidth:h.width,iframeHeight:h.height,fullscreenChangeHandler:w}
d&&function(n,e,r){var t=function(e){return function(r){var t=An(r,"style"),o=void 0===t?"no-styles":t.trim()
o!==e&&(Cn(r,re,o),Ln(r,n.parseStyle(e)))}},o=ne(e,"*"),i=R(o,(function(n){return ee(n,"*:not(.tox-silver-sink)")})),u=ue(r)
D(i,t("display:none!important;")),D(o,t(te+oe+u)),t((!0===ie?"":te)+oe+u)(e)}(n.dom,s,m),h.width=h.height="100%",v.width=v.height="",g(ce.addClass),ae.bind(s),n.on("remove",p),e.set(y),Yn(n)&&((i=f.dom).requestFullscreen?i.requestFullscreen():i.msRequestFullscreen?i.msRequestFullscreen():i.webkitRequestFullScreen&&i.webkitRequestFullScreen()),Kn(n,!0)}},fe=function(n,e){return function(r){r.setActive(null!==e.get())
var t=function(n){return r.setActive(n.state)}
return n.on("FullscreenStateChanged",t),function(){return n.off("FullscreenStateChanged",t)}}}
e.add("fullscreen",(function(e){var t=n(null)
return e.inline||(function(n,e){n.addCommand("mceFullScreen",(function(){se(n,e)}))}(e,t),function(n,e){var r=function(){return n.execCommand("mceFullScreen")}
n.ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",icon:"fullscreen",shortcut:"Meta+Shift+F",onAction:r,onSetup:fe(n,e)}),n.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:r,onSetup:fe(n,e)})}(e,t),e.addShortcut("Meta+Shift+F","","mceFullScreen")),r(t)}))})()

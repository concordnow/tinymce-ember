!function(){"use strict"
var e=function(e){if(null===e)return"null"
if(void 0===e)return"undefined"
var t=typeof e
return"object"==t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t},t=function(e){return{eq:e}},n=t((function(e,t){return e===t})),r=function(e){return t((function(t,n){if(t.length!==n.length)return!1
for(var r=t.length,o=0;o<r;o++)if(!e.eq(t[o],n[o]))return!1
return!0}))},o=function(e,n){return o=r(e),i=function(e){return t=e,r=n,Array.prototype.slice.call(t).sort(r)
var t,r},t((function(e,t){return o.eq(i(e),i(t))}))
var o,i},i=function(e){return t((function(t,r){var i=Object.keys(t),a=Object.keys(r)
if(!o(n).eq(i,a))return!1
for(var u=i.length,s=0;s<u;s++){var c=i[s]
if(!e.eq(t[c],r[c]))return!1}return!0}))},a=t((function(t,n){if(t===n)return!0
var o=e(t)
return o===e(n)&&(-1!==["undefined","boolean","number","string","function","xml","null"].indexOf(o)?t===n:"array"===o?r(a).eq(t,n):"object"===o&&i(a).eq(t,n))})),u=function(){},s=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return e(t.apply(null,n))}},c=function(e){return function(){return e}},l=function(e){return e}
function f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var o=t.concat(n)
return e.apply(null,o)}}var d,m,p,g=function(e){return function(t){return!e(t)}},h=function(e){return function(){throw new Error(e)}},v=function(e){return e()},y=function(e){e()},b=c(!1),C=c(!0),w=function(){return x},x=(d=function(e){return e.isNone()},{fold:function(e,t){return e()},is:b,isSome:b,isNone:C,getOr:p=function(e){return e},getOrThunk:m=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(void 0),or:p,orThunk:m,map:w,each:u,bind:w,exists:b,forall:C,filter:w,equals:d,equals_:d,toArray:function(){return[]},toString:c("none()")}),S=function(e){var t=c(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:C,isNone:b,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return S(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:x},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(b,(function(t){return n(e,t)}))}}
return o},N={some:S,none:w,from:function(e){return null==e?x:S(e)}},E=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},k=function(e){return function(t){return typeof t===e}},_=function(e){return function(t){return e===t}},A=E("string"),R=E("object"),T=E("array"),O=_(null),B=k("boolean"),P=_(void 0),D=function(e){return null==e},L=function(e){return!D(e)},I=k("function"),M=k("number"),F=Array.prototype.slice,U=Array.prototype.indexOf,z=Array.prototype.push,j=function(e,t){return U.call(e,t)},H=function(e,t){return-1<j(e,t)},V=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0
return!1},q=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},$=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},W=function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n)},K=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n},X=function(e,t,n){return W(e,(function(e){n=t(n,e)})),n},Y=function(e,t,n){return $(e,(function(e){n=t(n,e)})),n},G=function(e,t){return function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return N.some(i)
if(n(i,r))break}return N.none()}(e,t,b)},J=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return N.some(n)
return N.none()},Q=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!T(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
z.apply(t,e[n])}return t}(q(e,t))},Z=function(e,t){for(var n=0,r=e.length;n<r;++n)if(!0!==t(e[n],n))return!1
return!0},ee=function(e){var t=F.call(e,0)
return t.reverse(),t},te=function(e,t){return K(e,(function(e){return!H(t,e)}))},ne=function(e,t){return 0<=t&&t<e.length?N.some(e[t]):N.none()},re=function(e){return ne(e,0)},oe=function(e){return ne(e,e.length-1)},ie=I(Array.from)?Array.from:function(e){return F.call(e)},ae=Object.keys,ue=Object.hasOwnProperty,se=function(e,t){for(var n=ae(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}},ce=function(e,t){return le(e,(function(e,n){return{k:n,v:t(e,n)}}))},le=function(e,t){var n={}
return se(e,(function(e,r){var o=t(e,r)
n[o.k]=o.v})),n},fe=function(e){return function(t,n){e[n]=t}},de=function(e,t,n,r){return se(e,(function(e,o){(t(e,o)?n:r)(e,o)})),{}},me=function(e,t){var n={},r={}
return de(e,t,fe(n),fe(r)),{t:n,f:r}},pe=function(e,t){var n={}
return de(e,t,fe(n),u),n},ge=function(e,t){return he(e,t)?N.from(e[t]):N.none()},he=function(e,t){return ue.call(e,t)},ve=function(e,t){return he(e,t)&&void 0!==e[t]&&null!==e[t]},ye=Array.isArray,be=function(e,t,n){var r,o
if(!e)return!1
if(n=n||e,void 0!==e.length){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return!1}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return!1
return!0},Ce=function(e,t){var n=[]
return be(e,(function(r,o){n.push(t(r,o,e))})),n},we=function(e,t){var n=[]
return be(e,(function(r,o){t&&!t(r,o,e)||n.push(r)})),n},xe=function(e,t){if(e)for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},Se=function(e,t,n,r){for(var o=P(n)?e[0]:n,i=0;i<e.length;i++)o=t.call(r,o,e[i],i)
return o},Ne=function(e,t,n){for(var r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r
return-1},Ee=function(e){return e[e.length-1]},ke=function(){return(ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function _e(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),o=0
for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a]
return r}var Ae,Re,Te,Oe,Be,Pe,De=function(){return Le(0,0)},Le=function(e,t){return{major:e,minor:t}},Ie=function(e,t){var n=String(t).toLowerCase()
return 0===e.length?De():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,t)
if(!n)return{major:0,minor:0}
var r=function(e){return Number(t.replace(n,"$"+e))}
return Le(r(1),r(2))}(e,n)},Me=De,Fe=function(e,t){var n=String(t).toLowerCase()
return G(e,(function(e){return e.search(n)}))},Ue=function(e,t){return-1!==e.indexOf(t)},ze=function(e,t){return n=e,0,""===(r=t)||n.length>=r.length&&n.substr(0,0+r.length)===r
var n,r},je=function(e){return function(t){return t.replace(e,"")}},He=je(/^\s+|\s+$/g),Ve=je(/^\s+/g),qe=je(/\s+$/g),$e=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,We=function(e){return function(t){return Ue(t,e)}},Ke=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Ue(e,"edge/")&&Ue(e,"chrome")&&Ue(e,"safari")&&Ue(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,$e],search:function(e){return Ue(e,"chrome")&&!Ue(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Ue(e,"msie")||Ue(e,"trident")}},{name:"Opera",versionRegexes:[$e,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:We("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:We("firefox")},{name:"Safari",versionRegexes:[$e,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Ue(e,"safari")||Ue(e,"mobile/"))&&Ue(e,"applewebkit")}}],Xe=[{name:"Windows",search:We("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Ue(e,"iphone")||Ue(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:We("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:We("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:We("linux"),versionRegexes:[]},{name:"Solaris",search:We("sunos"),versionRegexes:[]},{name:"FreeBSD",search:We("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:We("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Ye={browsers:c(Ke),oses:c(Xe)},Ge="Firefox",Je=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isEdge:r("Edge"),isChrome:r("Chrome"),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r(Ge),isSafari:r("Safari")}},Qe=function(){return Je({current:void 0,version:Me()})},Ze=Je,et=(c("Edge"),c("Chrome"),c("IE"),c("Opera"),c(Ge),c("Safari"),"Windows"),tt="Android",nt="Solaris",rt="FreeBSD",ot="ChromeOS",it=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isWindows:r(et),isiOS:r("iOS"),isAndroid:r(tt),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(nt),isFreeBSD:r(rt),isChromeOS:r(ot)}},at=function(){return it({current:void 0,version:Me()})},ut=it,st=(c(et),c("iOS"),c(tt),c("Linux"),c("OSX"),c(nt),c(rt),c(ot),function(e,t){var n,r,o,i,a,u,s,l,f,d,m,p,g=Ye.browsers(),h=Ye.oses(),v=function(e,t){return Fe(e,t).map((function(e){var n=Ie(e.versionRegexes,t)
return{current:e.name,version:n}}))}(g,e).fold(Qe,Ze),y=function(e,t){return Fe(e,t).map((function(e){var n=Ie(e.versionRegexes,t)
return{current:e.name,version:n}}))}(h,e).fold(at,ut)
return{browser:v,os:y,deviceType:(r=v,o=e,i=t,a=(n=y).isiOS()&&!0===/ipad/i.test(o),u=n.isiOS()&&!a,s=n.isiOS()||n.isAndroid(),l=s||i("(pointer:coarse)"),f=a||!u&&s&&i("(min-device-width:768px)"),d=u||s&&!f,m=r.isSafari()&&n.isiOS()&&!1===/safari/i.test(o),p=!d&&!f&&!m,{isiPad:c(a),isiPhone:c(u),isTablet:c(f),isPhone:c(d),isTouch:c(l),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:c(m),isDesktop:c(p)})}}),ct=function(e){return window.matchMedia(e).matches},lt=(Te=!(Ae=function(){return st(navigator.userAgent,ct)}),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return Te||(Te=!0,Re=Ae.apply(null,e)),Re}),ft=function(){return lt()},dt=navigator.userAgent,mt=ft(),pt=mt.browser,gt=mt.os,ht=mt.deviceType,vt=/WebKit/.test(dt)&&!pt.isEdge(),yt="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,bt=-1!==dt.indexOf("Windows Phone"),Ct={opera:pt.isOpera(),webkit:vt,ie:!(!pt.isIE()&&!pt.isEdge())&&pt.version.major,gecko:pt.isFirefox(),mac:gt.isOSX()||gt.isiOS(),iOS:ht.isiPad()||ht.isiPhone(),android:gt.isAndroid(),contentEditable:!0,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:!0,range:window.getSelection&&"Range"in window,documentMode:pt.isIE()?document.documentMode||7:10,fileApi:yt,ceFalse:!0,cacheSuffix:null,container:null,experimentalShadowDom:!1,canHaveCSP:!pt.isIE(),desktop:ht.isDesktop(),windowsPhone:bt,browser:{current:pt.current,version:pt.version,isChrome:pt.isChrome,isEdge:pt.isEdge,isFirefox:pt.isFirefox,isIE:pt.isIE,isOpera:pt.isOpera,isSafari:pt.isSafari},os:{current:gt.current,version:gt.version,isAndroid:gt.isAndroid,isChromeOS:gt.isChromeOS,isFreeBSD:gt.isFreeBSD,isiOS:gt.isiOS,isLinux:gt.isLinux,isOSX:gt.isOSX,isSolaris:gt.isSolaris,isWindows:gt.isWindows},deviceType:{isDesktop:ht.isDesktop,isiPad:ht.isiPad,isiPhone:ht.isiPhone,isPhone:ht.isPhone,isTablet:ht.isTablet,isTouch:ht.isTouch,isWebView:ht.isWebView}},wt=/^\s*|\s*$/g,xt=function(e){return null==e?"":(""+e).replace(wt,"")},St=function(e,t){return t?!("array"!==t||!ye(e))||typeof e===t:void 0!==e},Nt=function(e,t,n,r){r=r||this,e&&(n&&(e=e[n]),be(e,(function(e,o){return!1!==t.call(r,e,o,n)&&void Nt(e,t,n,r)})))},Et={trim:xt,isArray:ye,is:St,toArray:function(e){if(ye(e))return e
for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n]
return t},makeMap:function(e,t,n){var r
for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={}
return n},each:be,map:Ce,grep:we,inArray:xe,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=0;r<t.length;r++){var o,i=t[r]
for(var a in i)!i.hasOwnProperty(a)||void 0!==(o=i[a])&&(e[a]=o)}return e},create:function(e,t,n){var r,o,i,a=this,s=0,c=(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],l=a.createNS(e[3].replace(/\.\w+$/,""),n)
if(!l[c]){if("static"===e[2])return l[c]=t,void(this.onCreate&&this.onCreate(e[2],e[3],l[c]))
t[c]||(t[c]=u,s=1),l[c]=t[c],a.extend(l[c].prototype,t),e[5]&&(r=a.resolve(e[5]).prototype,o=e[5].match(/\.(\w+)$/i)[1],i=l[c],l[c]=s?function(){return r[o].apply(this,arguments)}:function(){return this.parent=r[o],i.apply(this,arguments)},l[c].prototype[c]=l[c],a.each(r,(function(e,t){l[c].prototype[t]=r[t]})),a.each(t,(function(e,t){r[t]?l[c].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==c&&(l[c].prototype[t]=e)}))),a.each(t.static,(function(e,t){l[c][t]=e}))}},walk:Nt,createNS:function(e,t){var n,r
for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r]
return t},resolve:function(e,t){var n,r
for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||St(e,"array")?e:Ce(e.split(t||","),xt)},_addCacheSuffix:function(e){var t=Ct.cacheSuffix
return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},kt=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},_t=function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return kt(n.childNodes[0])},At=function(e,t){var n=(t||document).createElement(e)
return kt(n)},Rt=function(e,t){var n=(t||document).createTextNode(e)
return kt(n)},Tt=kt,Ot=function(e,t){for(var n=[],r=function(e){return n.push(e),t(e)},o=t(e);(o=o.bind(r)).isSome(););return n},Bt=function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},Pt=function(e){return 1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount},Dt=function(e,t){return e.dom===t.dom},Lt=function(e,t){return ft().browser.isIE()?function(e,t){return n=e.dom,r=t.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(n.compareDocumentPosition(r)&o)
var n,r,o}(e,t):(n=t,(r=e.dom)!==(o=n.dom)&&r.contains(o))
var n,r,o},It=("undefined"!=typeof window||Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Mt=function(e){return e.dom.nodeType},Ft=function(e){return function(t){return Mt(t)===e}},Ut=Ft(1),zt=Ft(3),jt=Ft(9),Ht=Ft(11),Vt=function(e){return Tt(e.dom.ownerDocument)},qt=function(e){return jt(e)?e:Vt(e)},$t=function(e){return Tt(qt(e).dom.defaultView)},Wt=function(e){return N.from(e.dom.parentNode).map(Tt)},Kt=function(e){return N.from(e.dom.previousSibling).map(Tt)},Xt=function(e){return N.from(e.dom.nextSibling).map(Tt)},Yt=function(e){return ee(Ot(e,Kt))},Gt=function(e){return Ot(e,Xt)},Jt=function(e){return q(e.dom.childNodes,Tt)},Qt=function(e,t){var n=e.dom.childNodes
return N.from(n[t]).map(Tt)},Zt=function(e){return Qt(e,0)},en=function(e){return Qt(e,e.dom.childNodes.length-1)},tn=function(e){return Ht(e)&&L(e.dom.host)},nn=I(Element.prototype.attachShadow)&&I(Node.prototype.getRootNode),rn=c(nn),on=nn?function(e){return Tt(e.dom.getRootNode())}:qt,an=function(e){return tn(e)?e:function(e){var t=e.dom.head
if(null==t)throw new Error("Head is not available yet")
return Tt(t)}(qt(e))},un=function(e){return Tt(e.dom.host)},sn=function(e,t){Wt(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},cn=function(e,t){Xt(e).fold((function(){Wt(e).each((function(e){fn(e,t)}))}),(function(e){sn(e,t)}))},ln=function(e,t){Zt(e).fold((function(){fn(e,t)}),(function(n){e.dom.insertBefore(t.dom,n.dom)}))},fn=function(e,t){e.dom.appendChild(t.dom)},dn=function(e,t){$(t,(function(t){fn(e,t)}))},mn=function(e){e.dom.textContent="",$(Jt(e),(function(e){pn(e)}))},pn=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},gn=function(e){var t,n=Jt(e)
0<n.length&&(t=e,$(n,(function(e){sn(t,e)}))),pn(e)},hn=function(e){var t=zt(e)?e.dom.parentNode:e.dom
if(null==t||null===t.ownerDocument)return!1
var n,r,o,i,a=t.ownerDocument
return o=Tt(t),i=on(o),(tn(i)?N.some(i):N.none()).fold((function(){return a.body.contains(t)}),(n=hn,r=un,function(e){return n(r(e))}))},vn=function(e,t){return{left:e,top:t,translate:function(n,r){return vn(e+n,t+r)}}},yn=vn,bn=function(e,t){return void 0!==e?e:void 0!==t?t:0},Cn=function(e){var t,n=e.dom,r=n.ownerDocument.body
return r===n?yn(r.offsetLeft,r.offsetTop):hn(e)?(t=n.getBoundingClientRect(),yn(t.left,t.top)):yn(0,0)},wn=function(e){var t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop
return yn(n,r)},xn=function(e,t,n){var r=(void 0!==n?n.dom:document).defaultView
r&&r.scrollTo(e,t)},Sn=function(e,t){ft().browser.isSafari()&&I(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)},Nn=function(e,t,n,r){return{x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}},En=function(e){var t,n,r=void 0===e?window:e,o=r.document,i=wn(Tt(o))
return n=void 0===(t=r)?window:t,N.from(n.visualViewport).fold((function(){var e=r.document.documentElement,t=e.clientWidth,n=e.clientHeight
return Nn(i.left,i.top,t,n)}),(function(e){return Nn(Math.max(e.pageLeft,i.left),Math.max(e.pageTop,i.top),e.width,e.height)}))},kn=function(e){return function(t){return!!t&&t.nodeType===e}},_n=function(e){return!!e&&!Object.getPrototypeOf(e)},An=kn(1),Rn=function(e){var t=e.map((function(e){return e.toLowerCase()}))
return function(e){if(e&&e.nodeName){var n=e.nodeName.toLowerCase()
return H(t,n)}return!1}},Tn=function(e,t){var n=t.toLowerCase().split(" ")
return function(t){var r
if(An(t))for(r=0;r<n.length;r++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
if((o?o.getPropertyValue(e):null)===n[r])return!0}return!1}},On=function(e){return function(t){return An(t)&&t.hasAttribute(e)}},Bn=function(e){return An(e)&&e.hasAttribute("data-mce-bogus")},Pn=function(e){return An(e)&&"TABLE"===e.tagName},Dn=function(e){return function(t){if(An(t)){if(t.contentEditable===e)return!0
if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}},Ln=Rn(["textarea","input"]),In=kn(3),Mn=kn(8),Fn=kn(9),Un=kn(11),zn=Rn(["br"]),jn=Rn(["img"]),Hn=Dn("true"),Vn=Dn("false"),qn=Rn(["td","th"]),$n=Rn(["video","audio","object","embed"]),Wn=function(e){return void 0!==e.style&&I(e.style.getPropertyValue)},Kn=function(e,t,n){if(!(A(n)||B(n)||M(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")},Xn=function(e,t,n){Kn(e.dom,t,n)},Yn=function(e,t){var n=e.dom
se(t,(function(e,t){Kn(n,t,e)}))},Gn=function(e,t){var n=e.dom.getAttribute(t)
return null===n?void 0:n},Jn=function(e,t){return N.from(Gn(e,t))},Qn=function(e,t){e.dom.removeAttribute(t)},Zn=function(e,t){var n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t)
return""!==r||hn(e)?r:er(n,t)},er=function(e,t){return Wn(e)?e.style.getPropertyValue(t):""},tr=function(e,t){var n=e.dom,r=er(n,t)
return N.from(r).filter((function(e){return 0<e.length}))},nr=function(e){var t={},n=e.dom
if(Wn(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r)
t[o]=n.style[o]}return t},rr=ft().browser,or=function(e){return G(e,Ut)},ir=function(e,t){return e.children&&H(e.children,t)},ar={},ur={exports:ar}
Oe=void 0,Be=ar,Pe=ur,function(e){"object"==typeof Be&&void 0!==Pe?Pe.exports=e():"function"==typeof Oe&&Oe.amd?Oe([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=e()}((function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s=!1
if(!u&&s)return s(a,!0)
if(i)return i(a,!0)
var c=new Error("Cannot find module '"+a+"'")
throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}}
t[a][0].call(l.exports,(function(e){return o(t[a][1][e]||e)}),l,l.exports,e,t,n,r)}return n[a].exports}for(var i=!1,a=0;a<r.length;a++)o(r[a])
return o}({1:[function(e,t,n){var r,o,i=t.exports={}
function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0)
if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0)
try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(e){o=u}}()
var c,l=[],f=!1,d=-1
function m(){f&&c&&(f=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!f){var e=s(m)
f=!0
for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run()
d=-1,t=l.length}c=null,f=!1,function(e){if(o===clearTimeout)return clearTimeout(e)
if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e)
try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1)
if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
l.push(new g(e,t)),1!==l.length||f||s(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(e,t,n){(function(e){function n(){}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(e,this)}function o(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,r._immediateFn((function(){var n,r=1===e._state?t.onFulfilled:t.onRejected
if(null!==r){try{n=r(e._value)}catch(l){return void a(t.promise,l)}i(t.promise,n)}else(1===e._state?i:a)(t.promise,e._value)}))):e._deferreds.push(t)}function i(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if(t instanceof r)return e._state=3,e._value=t,void u(e)
if("function"==typeof n)return void c((o=n,s=t,function(){o.apply(s,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(i){a(e,i)}var o,s}function a(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&r._immediateFn((function(){e._handled||r._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t])
e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function c(e,t){var r=!1
try{e((function(e){r||(r=!0,i(t,e))}),(function(e){r||(r=!0,a(t,e))}))}catch(n){if(r)return
r=!0,a(t,n)}}var l
l=setTimeout,r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var r=new this.constructor(n)
return o(this,new s(e,t,r)),r},r.all=function(e){var t=Array.prototype.slice.call(e)
return new r((function(e,r){if(0===t.length)return e([])
for(var o=t.length,i=0;i<t.length;i++)!function i(a,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var s=u.then
if("function"==typeof s)return void s.call(u,(function(e){i(a,e)}),r)}t[a]=u,0==--o&&e(t)}catch(n){r(n)}}(i,t[i])}))},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r((function(t){t(e)}))},r.reject=function(e){return new r((function(t,n){n(e)}))},r.race=function(e){return new r((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},r._immediateFn="function"==typeof e?function(t){e(t)}:function(e){l(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e},void 0!==t&&t.exports?t.exports=r:this.Promise||(this.Promise=r)}).call(this,e("timers").setImmediate)},{timers:3}],3:[function(e,t,n){(function(t,r){var o=e("process/browser.js").nextTick,i=Function.prototype.apply,a=Array.prototype.slice,u={},s=0
function c(e,t){this._id=e,this._clearFn=t}n.setTimeout=function(){return new c(i.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new c(i.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
0<=t&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n.setImmediate="function"==typeof t?t:function(e){var t=s++,r=!(arguments.length<2)&&a.call(arguments,1)
return u[t]=!0,o((function(){u[t]&&(r?e.apply(null,r):e.call(null),n.clearImmediate(t))})),t},n.clearImmediate="function"==typeof r?r:function(e){delete u[e]}}).call(this,e("timers").setImmediate,e("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(e,t,n){var r=e("promise-polyfill"),o="undefined"!=typeof window?window:Function("return this;")()
t.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)}))
var sr=ur.exports.boltExport,cr=function(e){var t=N.none(),n=[],r=function(e){o()?i(e):n.push(e)},o=function(){return t.isSome()},i=function(e){t.each((function(t){setTimeout((function(){e(t)}),0)}))}
return e((function(e){o()||(t=N.some(e),function(e){$(e,i)}(n),n=[])})),{get:r,map:function(e){return cr((function(t){r((function(n){t(e(n))}))}))},isReady:o}},lr={nu:cr,pure:function(e){return cr((function(t){t(e)}))}},fr=function(e){setTimeout((function(){throw e}),0)},dr=function(e){var t=function(t){e().then(t,fr)}
return{map:function(t){return dr((function(){return e().then(t)}))},bind:function(t){return dr((function(){return e().then((function(e){return t(e).toPromise()}))}))},anonBind:function(t){return dr((function(){return e().then((function(){return t.toPromise()}))}))},toLazy:function(){return lr.nu(t)},toCached:function(){var t=null
return dr((function(){return null===t&&(t=e()),t}))},toPromise:e,get:t}},mr=function(e){return dr((function(){return new sr(e)}))},pr=function(e){return{is:function(t){return e===t},isValue:C,isError:b,getOr:c(e),getOrThunk:c(e),getOrDie:c(e),or:function(t){return pr(e)},orThunk:function(t){return pr(e)},fold:function(t,n){return n(e)},map:function(t){return pr(t(e))},mapError:function(t){return pr(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOptional:function(){return N.some(e)}}},gr=function(e){return{is:b,isValue:b,isError:C,getOr:l,getOrThunk:function(e){return e()},getOrDie:function(){return h(String(e))()},or:function(e){return e},orThunk:function(e){return e()},fold:function(t,n){return t(e)},map:function(t){return gr(e)},mapError:function(t){return gr(t(e))},each:u,bind:function(t){return gr(e)},exists:b,forall:C,toOptional:N.none}},hr={value:pr,error:gr,fromOption:function(e,t){return e.fold((function(){return gr(t)}),pr)}},vr=function(e){if(!T(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
return $(e,(function(r,o){var i=ae(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],u=r[a]
if(void 0!==n[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!T(u))throw new Error("case arguments must be an array")
t.push(a),n[a]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var i=n.length
if(i!==u.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+u.length+" ("+u+"), got "+i)
return{fold:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(t.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+t.length)
return t[o].apply(null,n)},match:function(e){var r=ae(e)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
if(!Z(t,(function(e){return H(r,e)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return e[a].apply(null,n)},log:function(e){console.log(e,{constructors:t,constructor:a,params:n})}}}})),n},yr=(vr([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(e){return e.fold(l,l)})
function br(e,t,n,r,o){return e(n,r)?N.some(n):I(o)&&o(n)?N.none():t(n,r,o)}var Cr,wr,xr,Sr,Nr,Er,kr=function(e,t,n){for(var r=e.dom,o=I(n)?n:b;r.parentNode;){r=r.parentNode
var i=Tt(r)
if(t(i))return N.some(i)
if(o(i))break}return N.none()},_r=function(e,t,n){return br((function(e,t){return t(e)}),kr,e,t,n)},Ar=function(e,t,n){return kr(e,(function(e){return Bt(e,t)}),n)},Rr=function(e,t){return n=t,o=void 0===(r=e)?document:r.dom,Pt(o)?N.none():N.from(o.querySelector(n)).map(Tt)
var n,r,o},Tr=function(e,t,n){return br(Bt,Ar,e,t,n)},Or=window.Promise?window.Promise:(Cr=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
e.apply(t,n)}},wr=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Sr=(xr=function(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=null,this._value=null,this._deferreds=[],Nr(e,Cr(Pr,this),Cr(Dr,this))}).immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){return setTimeout(e,1)},Nr=function(e,t,n){var r=!1
try{e((function(e){r||(r=!0,t(e))}),(function(e){r||(r=!0,n(e))}))}catch(l){if(r)return
r=!0,n(l)}},xr.prototype.catch=function(e){return this.then(null,e)},xr.prototype.then=function(e,t){var n=this
return new xr((function(r,o){Br.call(n,new Ir(e,t,r,o))}))},xr.all=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r=Array.prototype.slice.call(1===t.length&&wr(t[0])?t[0]:t)
return new xr((function(t,n){if(0===r.length)return t([])
for(var o=r.length,i=function(a,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var s=u.then
if("function"==typeof s)return void s.call(u,(function(e){i(a,e)}),n)}r[a]=u,0==--o&&t(r)}catch(e){n(e)}},a=0;a<r.length;a++)i(a,r[a])}))},xr.resolve=function(e){return e&&"object"==typeof e&&e.constructor===xr?e:new xr((function(t){t(e)}))},xr.reject=function(e){return new xr((function(t,n){n(e)}))},xr.race=function(e){return new xr((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},xr)
function Br(e){var t=this
null!==this._state?Sr((function(){var n,r=t._state?e.onFulfilled:e.onRejected
if(null!==r){try{n=r(t._value)}catch(m){return void e.reject(m)}e.resolve(n)}else(t._state?e.resolve:e.reject)(t._value)})):this._deferreds.push(e)}function Pr(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.")
if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then
if("function"==typeof t)return void Nr(Cr(t,e),Cr(Pr,this),Cr(Dr,this))}this._state=!0,this._value=e,Lr.call(this)}catch(m){Dr.call(this,m)}}function Dr(e){this._state=!1,this._value=e,Lr.call(this)}function Lr(){for(var e=0,t=this._deferreds.length;e<t;e++)Br.call(this,this._deferreds[e])
this._deferreds=null}function Ir(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}var Mr,Fr=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},Ur=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},zr=function(e,t){var n,r=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
clearTimeout(n),n=Fr((function(){e.apply(this,r)}),t)}
return r.stop=function(){clearTimeout(n)},r},jr={requestAnimationFrame:function(e,t){Er?Er.then(e):Er=new Or((function(e){!function(e,t){for(var n=window.requestAnimationFrame,r=["ms","moz","webkit"],o=0;o<r.length&&!n;o++)n=window[r[o]+"RequestAnimationFrame"];(n=n||function(e){window.setTimeout(e,0)})(e,t)}(e,t=t||document.body)})).then(e)},setTimeout:Fr,setInterval:Ur,setEditorTimeout:function(e,t,n){return Fr((function(){e.removed||t()}),n)},setEditorInterval:function(e,t,n){var r=Ur((function(){e.removed?clearInterval(r):t()}),n)
return r},debounce:zr,throttle:zr,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}},Hr=function(e,t){void 0===t&&(t={})
var n=0,r={},o=Tt(e),i=qt(o),a=t.maxLoadTime||5e3,u=function(u,s,c){var l,f=Et._addCacheSuffix(u),d=ge(r,f).getOrThunk((function(){return{id:"mce-u"+n++,passed:[],failed:[],count:0}}));(r[f]=d).count++
var m,p,g,h=function(e,t){for(var n=e.length;n--;)e[n]()
d.status=t,d.passed=[],d.failed=[],l&&(l.onload=null,l.onerror=null,l=null)},v=function(){return h(d.passed,2)},y=function(){return h(d.failed,3)},b=function(){var t
t=b,function(){for(var t=e.styleSheets,n=t.length;n--;){var r=t[n].ownerNode
if(r&&r.id===l.id)return v(),1}}()||(Date.now()-p<a?jr.setTimeout(t):y())}
s&&d.passed.push(s),c&&d.failed.push(c),1!==d.status&&(2!==d.status?3!==d.status?(d.status=1,m=At("link",i.dom),Yn(m,{rel:"stylesheet",type:"text/css",id:d.id}),p=Date.now(),t.contentCssCors&&Xn(m,"crossOrigin","anonymous"),t.referrerPolicy&&Xn(m,"referrerpolicy",t.referrerPolicy),(l=m.dom).onload=b,l.onerror=y,g=m,fn(an(o),g),Xn(m,"href",f)):y():v())},l=function(e){return mr((function(t){u(e,s(t,c(hr.value(e))),s(t,c(hr.error(e))))}))},f=function(e){var t=Et._addCacheSuffix(e)
ge(r,t).each((function(e){var n,i
0==--e.count&&(delete r[t],n=e.id,i=an(o),Rr(i,"#"+n).each(pn))}))}
return{load:u,loadAll:function(e,t,n){(function(e,t){return t((function(t){var n=[],r=0
0===e.length?t([]):$(e,(function(o,i){var a
o.get((a=i,function(o){n[a]=o,++r>=e.length&&t(n)}))}))}))})(q(e,l),mr).get((function(e){var r=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a)?n:r).push(a)}return{pass:n,fail:r}}(e,(function(e){return e.isValue()}))
0<r.fail.length?n(r.fail.map(yr)):t(r.pass.map(yr))}))},unload:f,unloadAll:function(e){$(e,(function(e){f(e)}))},_setReferrerPolicy:function(e){t.referrerPolicy=e}}},Vr=(Mr=new WeakMap,{forElement:function(e,t){var n=on(e).dom
return N.from(Mr.get(n)).getOrThunk((function(){var e=Hr(n,t)
return Mr.set(n,e),e}))}}),qr=($r.prototype.current=function(){return this.node},$r.prototype.next=function(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node},$r.prototype.prev=function(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node},$r.prototype.prev2=function(e){return this.node=this.findPreviousNode(this.node,"lastChild","previousSibling",e),this.node},$r.prototype.findSibling=function(e,t,n,r){var o,i
if(e){if(!r&&e[t])return e[t]
if(e!==this.rootNode){if(o=e[n])return o
for(i=e.parentNode;i&&i!==this.rootNode;i=i.parentNode)if(o=i[n])return o}}},$r.prototype.findPreviousNode=function(e,t,n,r){var o,i,a
if(e){if(o=e[n],this.rootNode&&o===this.rootNode)return
if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a
return o}if((i=e.parentNode)&&i!==this.rootNode)return i}},$r)
function $r(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}var Wr=function(e){var t
return function(n){return(t=t||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r]
n[String(i)]=t(i,r)}return n}(e,C)).hasOwnProperty(It(n))}},Kr=Wr(["h1","h2","h3","h4","h5","h6"]),Xr=Wr(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),Yr=function(e){return Ut(e)&&!Xr(e)},Gr=function(e){return Ut(e)&&"br"===It(e)},Jr=Wr(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),Qr=Wr(["ul","ol","dl"]),Zr=Wr(["li","dd","dt"]),eo=Wr(["thead","tbody","tfoot"]),to=Wr(["td","th"]),no=Wr(["pre","script","textarea","style"]),ro=" ",oo="\ufeff",io=function(e){return"\ufeff"===e},ao=function(e){return e.replace(/\uFEFF/g,"")},uo=An,so=In,co=function(e){return so(e)&&(e=e.parentNode),uo(e)&&e.hasAttribute("data-mce-caret")},lo=function(e){return so(e)&&io(e.data)},fo=function(e){return co(e)||lo(e)},mo=function(e){return e.firstChild!==e.lastChild||!zn(e.firstChild)},po=function(e){var t=e.container()
return!!In(t)&&(t.data.charAt(e.offset())===oo||e.isAtStart()&&lo(t.previousSibling))},go=function(e){var t=e.container()
return!!In(t)&&(t.data.charAt(e.offset()-1)===oo||e.isAtEnd()&&lo(t.nextSibling))},ho=function(e){return so(e)&&e.data[0]===oo},vo=function(e){return so(e)&&e.data[e.data.length-1]===oo},yo=function(e){return e&&e.hasAttribute("data-mce-caret")?(n=(t=e.getElementsByTagName("br"))[t.length-1],Bn(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null
var t,n},bo=Hn,Co=Vn,wo=zn,xo=In,So=Rn(["script","style","textarea"]),No=Rn(["img","input","textarea","hr","iframe","video","audio","object","embed"]),Eo=Rn(["table"]),ko=fo,_o=function(e){return!ko(e)&&(xo(e)?!So(e.parentNode):No(e)||wo(e)||Eo(e)||Ao(e))},Ao=function(e){return!1===(An(t=e)&&"true"===t.getAttribute("unselectable"))&&Co(e)
var t},Ro=function(e,t){return _o(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(Ao(e))return!1
if(bo(e))return!0}return!0}(e,t)},To=/^[ \t\r\n]*$/,Oo=function(e){return To.test(e)},Bo=function(e,t){return _o(e)&&!1===(o=t,In(r=e)&&Oo(r.data)&&!1===function(e,t){var n,r,o=Tt(t)
return n=Tt(e),r=f(Dt,o),Ar(n,"pre,code",r).isSome()}(r,o))||An(n=e)&&"A"===n.nodeName&&!n.hasAttribute("href")&&(n.hasAttribute("name")||n.hasAttribute("id"))||Po(e)
var n,r,o},Po=On("data-mce-bookmark"),Do=On("data-mce-bogus"),Lo=("data-mce-bogus","all",function(e){return An(e)&&"all"===e.getAttribute("data-mce-bogus")}),Io=function(e,t){return void 0===t&&(t=!0),function(e,t){var n,r=0
if(Bo(e,e))return!1
if(!(n=e.firstChild))return!0
var o=new qr(n,e)
do{if(t){if(Lo(n)){n=o.next(!0)
continue}if(Do(n)){n=o.next()
continue}}if(zn(n))r++,n=o.next()
else{if(Bo(n,e))return!1
n=o.next()}}while(n)
return r<=1}(e.dom,t)},Mo=function(e,t){return L(e)&&(Bo(e,t)||Yr(Tt(e)))},Fo=function(e){return"span"===e.nodeName.toLowerCase()&&"bookmark"===e.getAttribute("data-mce-type")},Uo=function(e,t,n){var r=n||t
if(An(t)&&Fo(t))return t
for(var o,i,a,u=t.childNodes,s=u.length-1;0<=s;s--)Uo(e,u[s],r)
return!An(t)||1===(o=t.childNodes).length&&Fo(o[0])&&t.parentNode.insertBefore(o[0],t),Un(a=t)||Fn(a)||Bo(t,r)||An(i=t)&&0<i.childNodes.length||function(e,t){return In(e)&&0<e.data.length&&(o=new qr(n=e,r=t).prev(!1),i=new qr(n,r).next(!1),a=P(o)||Mo(o,r),u=P(i)||Mo(i,r),a&&u)
var n,r,o,i,a,u}(t,r)||e.remove(t),t},zo=Et.makeMap,jo=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Ho=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Vo=/[<>&\"\']/g,qo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,$o={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},Wo={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},Ko={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},Xo=function(e,t){var n,r,o,i={}
if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),Wo[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r)
return i}},Yo=Xo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),Go=function(e,t){return e.replace(t?jo:Ho,(function(e){return Wo[e]||e}))},Jo=function(e,t){return e.replace(t?jo:Ho,(function(e){return 1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":Wo[e]||"&#"+e.charCodeAt(0)+";"}))},Qo=function(e,t,n){return n=n||Yo,e.replace(t?jo:Ho,(function(e){return Wo[e]||n[e]||e}))},Zo={encodeRaw:Go,encodeAllRaw:function(e){return(""+e).replace(Vo,(function(e){return Wo[e]||e}))},encodeNumeric:Jo,encodeNamed:Qo,getEncodeFunc:function(e,t){var n=Xo(t)||Yo,r=zo(e.replace(/\+/g,","))
return r.named&&r.numeric?function(e,t){return e.replace(t?jo:Ho,(function(e){return void 0!==Wo[e]?Wo[e]:void 0!==n[e]?n[e]:1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"}))}:r.named?t?function(e,t){return Qo(e,t,n)}:Qo:r.numeric?Jo:Go},decode:function(e){return e.replace(qo,(function(e,t){return t?65535<(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):$o[t]||String.fromCharCode(t):Ko[e]||Yo[e]||(n=e,(r=At("div").dom).innerHTML=n,r.textContent||r.innerText||n)
var n,r}))}},ei={},ti={},ni=Et.makeMap,ri=Et.each,oi=Et.extend,ii=Et.explode,ai=Et.inArray,ui=function(e,t){return(e=Et.trim(e))?e.split(t||" "):[]},si=function(e,t){var n
return e&&(n={},"string"==typeof e&&(e={"*":e}),ri(e,(function(e,r){n[r]=n[r.toUpperCase()]=("map"===t?ni:ii)(e,/[, ]/)}))),n},ci=function(e){var t,n,r,o,i,a,u,s,c,l,f={},d={},m=[],p={},g={},h=function(t,n,r){var o=e[t]
return o?o=ni(o,/[, ]/,ni(o.toUpperCase(),/[, ]/)):(o=ei[t])||(o=ni(n," ",ni(n.toUpperCase()," ")),o=oi(o,r),ei[t]=o),o},v=(t=(e=e||{}).schema,s={},c=function(e,t,r){var o,i,a=function(e,t){for(var n={},r=0,o=e.length;r<o;r++)n[e[r]]=t||{}
return n}
t=t||"","string"==typeof(r=r||[])&&(r=ui(r))
for(var u=ui(e),c=u.length;c--;)i={attributes:a(o=ui([n,t].join(" "))),attributesOrder:o,children:a(r,ti)},s[u[c]]=i},l=function(e,t){for(var n,r,o,i=ui(e),a=i.length,u=ui(t);a--;)for(n=s[i[a]],r=0,o=u.length;r<o;r++)n.attributes[u[r]]={},n.attributesOrder.push(u[r])},ei[t]?ei[t]:(n="id accesskey class dir lang style tabindex title role",r="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",o="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==t&&(n+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",r+=" article aside details dialog figure main header footer hgroup section nav",o+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==t&&(n+=" xml:lang",o=[o,u="acronym applet basefont big font strike tt"].join(" "),ri(ui(u),(function(e){c(e,"",o)})),r=[r,a="center dir isindex noframes"].join(" "),i=[r,o].join(" "),ri(ui(a),(function(e){c(e,"",i)}))),i=i||[r,o].join(" "),c("html","manifest","head body"),c("head","","base command link meta noscript script style title"),c("title hr noscript br"),c("base","href target"),c("link","href rel media hreflang type sizes hreflang"),c("meta","name http-equiv content charset"),c("style","media type scoped"),c("script","src async defer type charset"),c("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",i),c("address dt dd div caption","",i),c("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",o),c("blockquote","cite",i),c("ol","reversed start type","li"),c("ul","","li"),c("li","value",i),c("dl","","dt dd"),c("a","href target rel media hreflang type",o),c("q","cite",o),c("ins del","cite datetime",i),c("img","src sizes srcset alt usemap ismap width height"),c("iframe","src name width height",i),c("embed","src type width height"),c("object","data type typemustmatch name usemap form width height",[i,"param"].join(" ")),c("param","name value"),c("map","name",[i,"area"].join(" ")),c("area","alt coords shape href target rel media hreflang type"),c("table","border","caption colgroup thead tfoot tbody tr"+("html4"===t?" col":"")),c("colgroup","span","col"),c("col","span"),c("tbody thead tfoot","","tr"),c("tr","","td th"),c("td","colspan rowspan headers",i),c("th","colspan rowspan headers scope abbr",i),c("form","accept-charset action autocomplete enctype method name novalidate target",i),c("fieldset","disabled form name",[i,"legend"].join(" ")),c("label","form for",o),c("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),c("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===t?i:o),c("select","disabled form multiple name required size","option optgroup"),c("optgroup","disabled label","option"),c("option","disabled label selected value"),c("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),c("menu","type label",[i,"li"].join(" ")),c("noscript","",i),"html4"!==t&&(c("wbr"),c("ruby","",[o,"rt rp"].join(" ")),c("figcaption","",i),c("mark rt rp summary bdi","",o),c("canvas","width height",i),c("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[i,"track source"].join(" ")),c("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[i,"track source"].join(" ")),c("picture","","img source"),c("source","src srcset type media sizes"),c("track","kind src srclang label default"),c("datalist","",[o,"option"].join(" ")),c("article section nav aside main header footer","",i),c("hgroup","","h1 h2 h3 h4 h5 h6"),c("figure","",[i,"figcaption"].join(" ")),c("time","datetime",o),c("dialog","open",i),c("command","type label icon disabled checked radiogroup command"),c("output","for form name",o),c("progress","value max",o),c("meter","value min max low high optimum",o),c("details","open",[i,"summary"].join(" ")),c("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==t&&(l("script","language xml:space"),l("style","xml:space"),l("object","declare classid code codebase codetype archive standby align border hspace vspace"),l("embed","align name hspace vspace"),l("param","valuetype type"),l("a","charset name rev shape coords"),l("br","clear"),l("applet","codebase archive code object alt name width height align hspace vspace"),l("img","name longdesc align border hspace vspace"),l("iframe","longdesc frameborder marginwidth marginheight scrolling align"),l("font basefont","size color face"),l("input","usemap align"),l("select"),l("textarea"),l("h1 h2 h3 h4 h5 h6 div p legend caption","align"),l("ul","type compact"),l("li","type"),l("ol dl menu dir","compact"),l("pre","width xml:space"),l("hr","align noshade size width"),l("isindex","prompt"),l("table","summary width frame rules cellspacing cellpadding align bgcolor"),l("col","width align char charoff valign"),l("colgroup","width align char charoff valign"),l("thead","align char charoff valign"),l("tr","align char charoff valign bgcolor"),l("th","axis align char charoff valign nowrap bgcolor width height"),l("form","accept"),l("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),l("tfoot","align char charoff valign"),l("tbody","align char charoff valign"),l("area","nohref"),l("body","background bgcolor text link vlink alink")),"html4"!==t&&(l("input button select textarea","autofocus"),l("input textarea","placeholder"),l("a","download"),l("link script img","crossorigin"),l("img","loading"),l("iframe","sandbox seamless allowfullscreen loading")),ri(ui("a form meter progress dfn"),(function(e){s[e]&&delete s[e].children[e]})),delete s.caption.children.table,delete s.script,ei[t]=s))
!1===e.verify_html&&(e.valid_elements="*[*]")
var y=si(e.valid_styles),b=si(e.invalid_styles,"map"),C=si(e.valid_classes,"map"),w=h("whitespace_elements","pre script noscript style textarea video audio iframe object code"),x=h("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),S=h("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),N=h("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),E="td th iframe video audio object script code",k=h("non_empty_elements",E+" pre",S),_=h("move_caret_before_on_enter_elements",E+" table",S),A=h("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),R=h("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",A),T=h("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
ri((e.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),(function(e){g[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var O=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},B=function(e){var t,n,r,o,i,a,u,s,c,l,d,p,g,h,v,y,b,C,w=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,x=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,S=/[*?+]/
if(e){var N=ui(e,",")
for(f["@"]&&(y=f["@"].attributes,b=f["@"].attributesOrder),t=0,n=N.length;t<n;t++)if(i=w.exec(N[t])){if(h=i[1],c=i[2],v=i[3],s=i[5],a={attributes:p={},attributesOrder:g=[]},"#"===h&&(a.paddEmpty=!0),"-"===h&&(a.removeEmpty=!0),"!"===i[4]&&(a.removeEmptyAttrs=!0),y&&(se(y,(function(e,t){p[t]=e})),g.push.apply(g,b)),s)for(r=0,o=(s=ui(s,"|")).length;r<o;r++)if(i=x.exec(s[r])){if(u={},d=i[1],l=i[2].replace(/[\\:]:/g,":"),h=i[3],C=i[4],"!"===d&&(a.attributesRequired=a.attributesRequired||[],a.attributesRequired.push(l),u.required=!0),"-"===d){delete p[l],g.splice(ai(g,l),1)
continue}h&&("="===h&&(a.attributesDefault=a.attributesDefault||[],a.attributesDefault.push({name:l,value:C}),u.defaultValue=C),":"===h&&(a.attributesForced=a.attributesForced||[],a.attributesForced.push({name:l,value:C}),u.forcedValue=C),"<"===h&&(u.validValues=ni(C,"?"))),S.test(l)?(a.attributePatterns=a.attributePatterns||[],u.pattern=O(l),a.attributePatterns.push(u)):(p[l]||g.push(l),p[l]=u)}y||"@"!==c||(y=p,b=g),v&&(a.outputName=c,f[v]=a),S.test(c)?(a.pattern=O(c),m.push(a)):f[c]=a}}},P=function(e){f={},m=[],B(e),ri(v,(function(e,t){d[t]=e.children}))},D=function(e){var t=/^(~)?(.+)$/
e&&(ei.text_block_elements=ei.block_elements=null,ri(ui(e,","),(function(e){var n,r=t.exec(e),o="~"===r[1],i=o?"span":"div",a=r[2]
d[a]=d[i],p[a]=i,o||(R[a.toUpperCase()]={},R[a]={}),f[a]||(n=f[i],delete(n=oi({},n)).removeEmptyAttrs,delete n.removeEmpty,f[a]=n),ri(d,(function(e,t){e[i]&&(d[t]=e=oi({},d[t]),e[a]=e[i])}))})))},L=function(t){var n=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/
ei[e.schema]=null,t&&ri(ui(t,","),(function(e){var t,r,o=n.exec(e)
o&&(r=o[1],t=r?d[o[2]]:d[o[2]]={"#comment":{}},t=d[o[2]],ri(ui(o[3],"|"),(function(e){"-"===r?delete t[e]:t[e]={}})))}))},I=function(e){var t,n=f[e]
if(n)return n
for(t=m.length;t--;)if((n=m[t]).pattern.test(e))return n}
return e.valid_elements?P(e.valid_elements):(ri(v,(function(e,t){f[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},d[t]=e.children})),"html5"!==e.schema&&ri(ui("strong/b em/i"),(function(e){var t=ui(e,"/")
f[t[1]].outputName=t[0]})),ri(ui("ol ul sub sup blockquote span font a table tbody strong em b i"),(function(e){f[e]&&(f[e].removeEmpty=!0)})),ri(ui("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(function(e){f[e].paddEmpty=!0})),ri(ui("span"),(function(e){f[e].removeEmptyAttrs=!0}))),D(e.custom_elements),L(e.valid_children),B(e.extended_valid_elements),L("+ol[ul|ol],+ul[ul|ol]"),ri({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},(function(e,t){f[t]&&(f[t].parentsRequired=ui(e))})),e.invalid_elements&&ri(ii(e.invalid_elements),(function(e){f[e]&&delete f[e]})),I("span")||B("span[!data-mce-type|*]"),{children:d,elements:f,getValidStyles:function(){return y},getValidClasses:function(){return C},getBlockElements:function(){return R},getInvalidStyles:function(){return b},getShortEndedElements:function(){return S},getTextBlockElements:function(){return A},getTextInlineElements:function(){return T},getBoolAttrs:function(){return N},getElementRule:I,getSelfClosingElements:function(){return x},getNonEmptyElements:function(){return k},getMoveCaretBeforeOnEnterElements:function(){return _},getWhiteSpaceElements:function(){return w},getSpecialElements:function(){return g},isValidChild:function(e,t){var n=d[e.toLowerCase()]
return!(!n||!n[t.toLowerCase()])},isValid:function(e,t){var n,r,o=I(e)
if(o){if(!t)return!0
if(o.attributes[t])return!0
if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return p},addValidElements:B,setValidElements:P,addCustomElements:D,addValidChildren:L}},li=function(e,t,n,r){var o=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e}
return"#"+o(t)+o(n)+o(r)},fi=function(e,t){var n,r,o=this,i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,a=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,u=/\s*([^:]+):\s*([^;]+);?/g,s=/\s+$/,c={},l="\ufeff"
e=e||{},t&&(n=t.getValidStyles(),r=t.getInvalidStyles())
for(var f="\\\" \\' \\; \\: ; : \ufeff".split(" "),d=0;d<f.length;d++)c[f[d]]=l+d,c[l+d]=f[d]
return{toHex:function(e){return e.replace(i,li)},parse:function(t){var n,r,f,m,p,g,h,v={},y=e.url_converter,b=e.url_converter_scope||o,C=function(e,t,n){var r=v[e+"-top"+t]
if(r){var o=v[e+"-right"+t]
if(o){var i=v[e+"-bottom"+t]
if(i){var a=v[e+"-left"+t]
if(a){var u=[r,o,i,a]
for(d=u.length-1;d--&&u[d]===u[d+1];);-1<d&&n||(v[e+t]=-1===d?u[0]:u.join(" "),delete v[e+"-top"+t],delete v[e+"-right"+t],delete v[e+"-bottom"+t],delete v[e+"-left"+t])}}}}},w=function(e){var t,n=v[e]
if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return!1
return v[e]=n[0],!0}},x=function(e){return m=!0,c[e]},S=function(e,t){return m&&(e=e.replace(/\uFEFF[0-9]/g,(function(e){return c[e]}))),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e},N=function(e){return String.fromCharCode(parseInt(e.slice(1),16))},E=function(e){return e.replace(/\\[0-9a-f]+/gi,N)},k=function(t,n,r,o,i,a){if(i=i||a)return"'"+(i=S(i)).replace(/\'/g,"\\'")+"'"
if(n=S(n||r||o),!e.allow_script_urls){var u=n.replace(/[\s\r\n]+/g,"")
if(/(java|vb)script:/i.test(u))return""
if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(u))return""}return y&&(n=y.call(b,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}
if(t){for(t=(t=t.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,x).replace(/\"[^\"]+\"|\'[^\']+\'/g,(function(e){return e.replace(/[;:]/g,x)}));n=u.exec(t);)if(u.lastIndex=n.index+n[0].length,r=n[1].replace(s,"").toLowerCase(),f=n[2].replace(s,""),r&&f){if(r=E(r),f=E(f),-1!==r.indexOf(l)||-1!==r.indexOf('"'))continue
if(!e.allow_script_urls&&("behavior"===r||/expression\s*\(|\/\*|\*\//.test(f)))continue
"font-weight"===r&&"700"===f?f="bold":"color"!==r&&"background-color"!==r||(f=f.toLowerCase()),f=(f=f.replace(i,li)).replace(a,k),v[r]=m?S(f,!0):f}C("border","",!0),C("border","-width"),C("border","-color"),C("border","-style"),C("padding",""),C("margin",""),"border",g="border-style",h="border-color",w(p="border-width")&&w(g)&&w(h)&&(v.border=v[p]+" "+v[g]+" "+v[h],delete v[p],delete v[g],delete v[h]),"medium none"===v.border&&delete v.border,"none"===v["border-image"]&&delete v["border-image"]}return v},serialize:function(e,t){var o="",i=function(t){var r,i=n[t]
if(i)for(var a=0,u=i.length;a<u;a++)t=i[a],(r=e[t])&&(o+=(0<o.length?" ":"")+t+": "+r+";")}
return t&&n?(i("*"),i(t)):se(e,(function(e,n){var i,a,u
!e||r&&(i=n,a=t,(u=r["*"])&&u[i]||(u=r[a])&&u[i])||(o+=(0<o.length?" ":"")+n+": "+e+";")})),o}}},di=/^(?:mouse|contextmenu)|click/,mi={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1,mozPressure:1},pi=b,gi=C,hi=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},vi=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},yi=function(e,t){var n,r,o,i,a,u,s=t||{}
for(n in e)mi[n]||(s[n]=e[n])
return s.target||(s.target=s.srcElement||document),s.composedPath&&(s.composedPath=function(){return e.composedPath()}),e&&(a=e,di.test(a.type))&&void 0===e.pageX&&void 0!==e.clientX&&(o=(r=s.target.ownerDocument||document).documentElement,i=r.body,s.pageX=e.clientX+(o&&o.scrollLeft||i&&i.scrollLeft||0)-(o&&o.clientLeft||i&&i.clientLeft||0),s.pageY=e.clientY+(o&&o.scrollTop||i&&i.scrollTop||0)-(o&&o.clientTop||i&&i.clientTop||0)),s.preventDefault=function(){s.defaultPrevented=!0,s.isDefaultPrevented=gi,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},s.stopPropagation=function(){s.cancelBubble=!0,s.isPropagationStopped=gi,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},!(s.stopImmediatePropagation=function(){s.isImmediatePropagationStopped=gi,s.stopPropagation()})==((u=s).isDefaultPrevented===gi||u.isDefaultPrevented===pi)&&(s.isDefaultPrevented=!0===s.defaultPrevented?gi:pi,s.isPropagationStopped=!0===s.cancelBubble?gi:pi,s.isImmediatePropagationStopped=pi),void 0===s.metaKey&&(s.metaKey=!1),s},bi=(Ci.prototype.bind=function(e,t,n,r){var o,i,a,u,s,c,l=this,f=window,d=function(e){l.executeHandlers(yi(e||f.event),o)}
if(e&&3!==e.nodeType&&8!==e.nodeType){e[l.expando]?o=e[l.expando]:(o=l.count++,e[l.expando]=o,l.events[o]={}),r=r||e
for(var m=t.split(" "),p=m.length;p--;)s=d,u=c=!1,"DOMContentLoaded"===(a=m[p])&&(a="ready"),l.domLoaded&&"ready"===a&&"complete"===e.readyState?n.call(r,yi({type:a})):(l.hasMouseEnterLeave||(u=l.mouseEnterLeave[a])&&(s=function(e){var t=e.currentTarget,n=e.relatedTarget
if(n&&t.contains)n=t.contains(n)
else for(;n&&n!==t;)n=n.parentNode
n||((e=yi(e||f.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,l.executeHandlers(e,o))}),l.hasFocusIn||"focusin"!==a&&"focusout"!==a||(c=!0,u="focusin"===a?"focus":"blur",s=function(e){(e=yi(e||f.event)).type="focus"===e.type?"focusin":"focusout",l.executeHandlers(e,o)}),(i=l.events[o][a])?"ready"===a&&l.domLoaded?n(yi({type:a})):i.push({func:n,scope:r}):(l.events[o][a]=i=[{func:n,scope:r}],i.fakeName=u,i.capture=c,i.nativeHandler=s,"ready"===a?function(e,t,n){var r,o=e.document,i={type:"ready"}
n.domLoaded?t(i):(r=function(){vi(e,"DOMContentLoaded",r),vi(e,"load",r),n.domLoaded||(n.domLoaded=!0,t(i)),e=null},"complete"===o.readyState||"interactive"===o.readyState&&o.body?r():hi(e,"DOMContentLoaded",r),n.domLoaded||hi(e,"load",r))}(e,s,l):hi(e,u||a,s,c)))
return e=i=null,n}},Ci.prototype.unbind=function(e,t,n){var r,o,i
if(!e||3===e.nodeType||8===e.nodeType)return this
var a=e[this.expando]
if(a){if(i=this.events[a],t){for(var u,s,c,l,f=t.split(" "),d=f.length;d--;)if(l=i[o=f[d]]){if(n)for(r=l.length;r--;)l[r].func===n&&(u=l.nativeHandler,s=l.fakeName,c=l.capture,(l=l.slice(0,r).concat(l.slice(r+1))).nativeHandler=u,l.fakeName=s,l.capture=c,i[o]=l)
n&&0!==l.length||(delete i[o],vi(e,l.fakeName||o,l.nativeHandler,l.capture))}}else se(i,(function(t,n){vi(e,t.fakeName||n,t.nativeHandler,t.capture)})),i={}
for(o in i)if(he(i,o))return this
delete this.events[a]
try{delete e[this.expando]}catch(h){e[this.expando]=null}}return this},Ci.prototype.fire=function(e,t,n){var r
if(!e||3===e.nodeType||8===e.nodeType)return this
var o=yi(null,n)
for(o.type=t,o.target=e;(r=e[this.expando])&&this.executeHandlers(o,r),(e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow)&&!o.isPropagationStopped(););return this},Ci.prototype.clean=function(e){var t,n
if(!e||3===e.nodeType||8===e.nodeType)return this
if(e[this.expando]&&this.unbind(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(this.unbind(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[this.expando]&&this.unbind(e)
return this},Ci.prototype.destroy=function(){this.events={}},Ci.prototype.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1},Ci.prototype.executeHandlers=function(e,t){var n=this.events[t],r=n&&n[e.type]
if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o]
if(a&&!1===a.func.call(a.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}},Ci.Event=new Ci,Ci)
function Ci(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}var wi,xi,Si,Ni,Ei,ki,_i,Ai,Ri,Ti,Oi,Bi,Pi,Di,Li,Ii,Mi,Fi="sizzle"+-new Date,Ui=window.document,zi=0,ji=0,Hi=Ca(),Vi=Ca(),qi=Ca(),$i=function(e,t){return e===t&&(Ti=!0),0},Wi="undefined",Ki={}.hasOwnProperty,Xi=[],Yi=Xi.pop,Gi=Xi.push,Ji=Xi.push,Qi=Xi.slice,Zi=Xi.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t
return-1},ea="[\\x20\\t\\r\\n\\f]",ta="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",na="\\["+ea+"*("+ta+")(?:"+ea+"*([*^$|!~]?=)"+ea+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ta+"))|)"+ea+"*\\]",ra=":("+ta+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+na+")*)|.*)\\)|)",oa=new RegExp("^"+ea+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ea+"+$","g"),ia=new RegExp("^"+ea+"*,"+ea+"*"),aa=new RegExp("^"+ea+"*([>+~]|"+ea+")"+ea+"*"),ua=new RegExp("="+ea+"*([^\\]'\"]*?)"+ea+"*\\]","g"),sa=new RegExp(ra),ca=new RegExp("^"+ta+"$"),la={ID:new RegExp("^#("+ta+")"),CLASS:new RegExp("^\\.("+ta+")"),TAG:new RegExp("^("+ta+"|[*])"),ATTR:new RegExp("^"+na),PSEUDO:new RegExp("^"+ra),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ea+"*(even|odd|(([+-]|)(\\d*)n|)"+ea+"*(?:([+-]|)"+ea+"*(\\d+)|))"+ea+"*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^"+ea+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ea+"*((?:-\\d)?\\d*)"+ea+"*\\)|)(?=[^-]|$)","i")},fa=/^(?:input|select|textarea|button)$/i,da=/^h\d$/i,ma=/^[^{]+\{\s*\[native \w/,pa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ga=/[+~]/,ha=/'|\\/g,va=new RegExp("\\\\([\\da-f]{1,6}"+ea+"?|("+ea+")|.)","ig"),ya=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)}
try{Ji.apply(Xi=Qi.call(Ui.childNodes),Ui.childNodes),Xi[Ui.childNodes.length].nodeType}catch(ZS){Ji={apply:Xi.length?function(e,t){Gi.apply(e,Qi.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var ba=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m
if((t?t.ownerDocument||t:Ui)!==Bi&&Oi(t),n=n||[],!e||"string"!=typeof e)return n
if(1!==(u=(t=t||Bi).nodeType)&&9!==u)return[]
if(Di&&!r){if(o=pa.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n
if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&Mi(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return Ji.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&wi.getElementsByClassName)return Ji.apply(n,t.getElementsByClassName(a)),n}if(wi.qsa&&(!Li||!Li.test(e))){if(f=l=Fi,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(c=Ei(e),(l=t.getAttribute("id"))?f=l.replace(ha,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",s=c.length;s--;)c[s]=f+ka(c[s])
d=ga.test(e)&&Na(t.parentNode)||t,m=c.join(",")}if(m)try{return Ji.apply(n,d.querySelectorAll(m)),n}catch(v){}finally{l||t.removeAttribute("id")}}}return _i(e.replace(oa,"$1"),t,n,r)}
function Ca(){var e=[]
return function t(n,r){return e.push(n+" ")>xi.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function wa(e){return e[Fi]=!0,e}function xa(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function Sa(e){return wa((function(t){return t=+t,wa((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function Na(e){return e&&typeof e.getElementsByTagName!=Wi&&e}function Ea(){}function ka(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function _a(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=ji++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,s,c=[zi,i]
if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if((u=(s=t[Fi]||(t[Fi]={}))[r])&&u[0]===zi&&u[1]===i)return c[2]=u[2]
if((s[r]=c)[2]=e(t,n,a))return!0}}}function Aa(e){return 1<e.length?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1
return!0}:e[0]}function Ra(e,t,n,r,o){for(var i,a=[],u=0,s=e.length,c=null!=t;u<s;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),c&&t.push(u)))
return a}function Ta(e,t,n,r,o,i){return r&&!r[Fi]&&(r=Ta(r)),o&&!o[Fi]&&(o=Ta(o,i)),wa((function(i,a,u,s){var c,l,f,d=[],m=[],p=a.length,g=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)ba(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),h=!e||!i&&t?g:Ra(g,d,e,u,s),v=n?o||(i?e:p||r)?[]:a:h
if(n&&n(h,v,u,s),r)for(c=Ra(v,m),r(c,[],u,s),l=c.length;l--;)(f=c[l])&&(v[m[l]]=!(h[m[l]]=f))
if(i){if(o||e){if(o){for(c=[],l=v.length;l--;)(f=v[l])&&c.push(h[l]=f)
o(null,v=[],c,s)}for(l=v.length;l--;)(f=v[l])&&-1<(c=o?Zi.call(i,f):d[l])&&(i[c]=!(a[c]=f))}}else v=Ra(v===a?v.splice(p,v.length):v),o?o(null,a,v,s):Ji.apply(a,v)}))}wi=ba.support={},Ni=ba.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},Oi=ba.setDocument=function(e){var t,n=e?e.ownerDocument||e:Ui,r=n.defaultView
return n!==Bi&&9===n.nodeType&&n.documentElement?(Pi=(Bi=n).documentElement,Di=!Ni(n),r&&r!==function(e){try{return e.top}catch(t){}return null}(r)&&(r.addEventListener?r.addEventListener("unload",(function(){Oi()}),!1):r.attachEvent&&r.attachEvent("onunload",(function(){Oi()}))),wi.attributes=!0,wi.getElementsByTagName=!0,wi.getElementsByClassName=ma.test(n.getElementsByClassName),wi.getById=!0,xi.find.ID=function(e,t){if(typeof t.getElementById!=Wi&&Di){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},xi.filter.ID=function(e){var t=e.replace(va,ya)
return function(e){return e.getAttribute("id")===t}},xi.find.TAG=wi.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!=Wi)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e)
if("*"!==e)return i
for(;n=i[o++];)1===n.nodeType&&r.push(n)
return r},xi.find.CLASS=wi.getElementsByClassName&&function(e,t){if(Di)return t.getElementsByClassName(e)},Ii=[],Li=[],wi.disconnectedMatch=!0,Li=Li.length&&new RegExp(Li.join("|")),Ii=Ii.length&&new RegExp(Ii.join("|")),t=ma.test(Pi.compareDocumentPosition),Mi=t||ma.test(Pi.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},$i=t?function(e,t){if(e===t)return Ti=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!wi.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===Ui&&Mi(Ui,e)?-1:t===n||t.ownerDocument===Ui&&Mi(Ui,t)?1:Ri?Zi.call(Ri,e)-Zi.call(Ri,t):0:4&r?-1:1)}:function(e,t){if(e===t)return Ti=!0,0
var r,o=0,i=e.parentNode,a=t.parentNode,u=[e],s=[t]
if(!i||!a)return e===n?-1:t===n?1:i?-1:a?1:Ri?Zi.call(Ri,e)-Zi.call(Ri,t):0
if(i===a)return xa(e,t)
for(r=e;r=r.parentNode;)u.unshift(r)
for(r=t;r=r.parentNode;)s.unshift(r)
for(;u[o]===s[o];)o++
return o?xa(u[o],s[o]):u[o]===Ui?-1:s[o]===Ui?1:0},n):Bi},ba.matches=function(e,t){return ba(e,null,null,t)},ba.matchesSelector=function(e,t){if((e.ownerDocument||e)!==Bi&&Oi(e),t=t.replace(ua,"='$1']"),wi.matchesSelector&&Di&&(!Ii||!Ii.test(t))&&(!Li||!Li.test(t)))try{var n=(void 0).call(e,t)
if(n||wi.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(ZS){}return 0<ba(t,Bi,null,[e]).length},ba.contains=function(e,t){return(e.ownerDocument||e)!==Bi&&Oi(e),Mi(e,t)},ba.attr=function(e,t){(e.ownerDocument||e)!==Bi&&Oi(e)
var n=xi.attrHandle[t.toLowerCase()],r=n&&Ki.call(xi.attrHandle,t.toLowerCase())?n(e,t,!Di):void 0
return void 0!==r?r:wi.attributes||!Di?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},ba.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ba.uniqueSort=function(e){var t,n=[],r=0,o=0
if(Ti=!wi.detectDuplicates,Ri=!wi.sortStable&&e.slice(0),e.sort($i),Ti){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)e.splice(n[r],1)}return Ri=null,e},Si=ba.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=Si(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=Si(t)
return n},(xi=ba.selectors={cacheLength:50,createPseudo:wa,match:la,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(va,ya),e[3]=(e[3]||e[4]||e[5]||"").replace(va,ya),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ba.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ba.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return la.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&sa.test(n)&&(t=Ei(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(va,ya).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Hi[e+" "]
return t||(t=new RegExp("(^|"+ea+")"+e+"("+ea+"|$)"))&&Hi(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!=Wi&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=ba.attr(r,e)
return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&-1<o.indexOf(n):"$="===t?n&&o.slice(-n.length)===n:"~="===t?-1<(" "+o+" ").indexOf(n):"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,s){var c,l,f,d,m,p,g=i!=a?"nextSibling":"previousSibling",h=t.parentNode,v=u&&t.nodeName.toLowerCase(),y=!s&&!u
if(h){if(i){for(;g;){for(f=t;f=f[g];)if(u?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1
p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?h.firstChild:h.lastChild],a&&y){for(m=(c=(l=h[Fi]||(h[Fi]={}))[e]||[])[0]===zi&&c[1],d=c[0]===zi&&c[2],f=m&&h.childNodes[m];f=++m&&f&&f[g]||(d=m=0)||p.pop();)if(1===f.nodeType&&++d&&f===t){l[e]=[zi,m,d]
break}}else if(y&&(c=(t[Fi]||(t[Fi]={}))[e])&&c[0]===zi)d=c[1]
else for(;(f=++m&&f&&f[g]||(d=m=0)||p.pop())&&((u?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++d||(y&&((f[Fi]||(f[Fi]={}))[e]=[zi,d]),f!==t)););return(d-=o)===r||d%r==0&&0<=d/r}}},PSEUDO:function(e,t){var n,r=xi.pseudos[e]||xi.setFilters[e.toLowerCase()]||ba.error("unsupported pseudo: "+e)
return r[Fi]?r(t):1<r.length?(n=[e,e,"",t],xi.setFilters.hasOwnProperty(e.toLowerCase())?wa((function(e,n){for(var o,i=r(e,t),a=i.length;a--;)e[o=Zi.call(e,i[a])]=!(n[o]=i[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:wa((function(e){var t=[],n=[],r=ki(e.replace(oa,"$1"))
return r[Fi]?wa((function(e,t,n,o){for(var i,a=r(e,null,o,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}})),has:wa((function(e){return function(t){return 0<ba(e,t).length}})),contains:wa((function(e){return e=e.replace(va,ya),function(t){return-1<(t.textContent||t.innerText||Si(t)).indexOf(e)}})),lang:wa((function(e){return ca.test(e||"")||ba.error("unsupported lang: "+e),e=e.replace(va,ya).toLowerCase(),function(t){var n
do{if(n=Di?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===Pi},focus:function(e){return e===Bi.activeElement&&(!Bi.hasFocus||Bi.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!xi.pseudos.empty(e)},header:function(e){return da.test(e.nodeName)},input:function(e){return fa.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:Sa((function(){return[0]})),last:Sa((function(e,t){return[t-1]})),eq:Sa((function(e,t,n){return[n<0?n+t:n]})),even:Sa((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:Sa((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:Sa((function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r)
return e})),gt:Sa((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=xi.pseudos.eq,$(["radio","checkbox","file","password","image"],(function(e){var t
xi.pseudos[e]=(t=e,function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t})})),$(["submit","reset"],(function(e){var t
xi.pseudos[e]=(t=e,function(e){var n=e.nodeName.toLowerCase()
return("input"===n||"button"===n)&&e.type===t})})),Ea.prototype=xi.filters=xi.pseudos,xi.setFilters=new Ea,Ei=ba.tokenize=function(e,t){var n,r,o,i,a,u,s,c=Vi[e+" "]
if(c)return t?0:c.slice(0)
for(a=e,u=[],s=xi.preFilter;a;){for(i in n&&!(r=ia.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=aa.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(oa," ")}),a=a.slice(n.length)),xi.filter)xi.filter.hasOwnProperty(i)&&(!(r=la[i].exec(a))||s[i]&&!(r=s[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length)))
if(!n)break}return t?a.length:a?ba.error(e):Vi(e,u).slice(0)},ki=ba.compile=function(e,t){var n,r,o,i,a,u,s=[],c=[],l=qi[e+" "]
if(!l){for(n=(t=t||Ei(e)).length;n--;)(l=function e(t){for(var n,r,o,i=t.length,a=xi.relative[t[0].type],u=a||xi.relative[" "],s=a?1:0,c=_a((function(e){return e===n}),u,!0),l=_a((function(e){return-1<Zi.call(n,e)}),u,!0),f=[function(e,t,r){var o=!a&&(r||t!==Ai)||((n=t).nodeType?c:l)(e,t,r)
return n=null,o}];s<i;s++)if(r=xi.relative[t[s].type])f=[_a(Aa(f),r)]
else{if((r=xi.filter[t[s].type].apply(null,t[s].matches))[Fi]){for(o=++s;o<i&&!xi.relative[t[o].type];o++);return Ta(1<s&&Aa(f),1<s&&ka(t.slice(0,s-1).concat({value:" "===t[s-2].type?"*":""})).replace(oa,"$1"),r,s<o&&e(t.slice(s,o)),o<i&&e(t=t.slice(o)),o<i&&ka(t))}f.push(r)}return Aa(f)}(t[n]))[Fi]?s.push(l):c.push(l);(l=qi(e,(r=c,i=0<(o=s).length,a=0<r.length,u=function(e,t,n,u,s){var c,l,f,d=0,m="0",p=e&&[],g=[],h=Ai,v=e||a&&xi.find.TAG("*",s),y=zi+=null==h?1:Math.random()||.1,b=v.length
for(s&&(Ai=t!==Bi&&t);m!==b&&null!=(c=v[m]);m++){if(a&&c){for(l=0;f=r[l++];)if(f(c,t,n)){u.push(c)
break}s&&(zi=y)}i&&((c=!f&&c)&&d--,e&&p.push(c))}if(d+=m,i&&m!==d){for(l=0;f=o[l++];)f(p,g,t,n)
if(e){if(0<d)for(;m--;)p[m]||g[m]||(g[m]=Yi.call(u))
g=Ra(g)}Ji.apply(u,g),s&&!e&&0<g.length&&1<d+o.length&&ba.uniqueSort(u)}return s&&(zi=y,Ai=h),p},i?wa(u):u))).selector=e}return l},_i=ba.select=function(e,t,n,r){var o,i,a,u,s,c="function"==typeof e&&e,l=!r&&Ei(e=c.selector||e)
if(n=n||[],1===l.length){if(2<(i=l[0]=l[0].slice(0)).length&&"ID"===(a=i[0]).type&&wi.getById&&9===t.nodeType&&Di&&xi.relative[i[1].type]){if(!(t=(xi.find.ID(a.matches[0].replace(va,ya),t)||[])[0]))return n
c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=la.needsContext.test(e)?0:i.length;o--&&(a=i[o],!xi.relative[u=a.type]);)if((s=xi.find[u])&&(r=s(a.matches[0].replace(va,ya),ga.test(i[0].type)&&Na(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&ka(i)))return Ji.apply(n,r),n
break}}return(c||ki(e,l))(r,t,!Di,n,ga.test(e)&&Na(t.parentNode)||t),n},wi.sortStable=Fi.split("").sort($i).join("")===Fi,wi.detectDuplicates=!!Ti,Oi(),wi.sortDetached=!0
var Oa=document,Ba=Array.prototype.push,Pa=Array.prototype.slice,Da=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,La=bi.Event,Ia=Et.makeMap("children,contents,next,prev"),Ma=function(e){return void 0!==e},Fa=function(e){return"string"==typeof e},Ua=function(e,t){var n,r=(t=t||Oa).createElement("div"),o=t.createDocumentFragment()
for(r.innerHTML=e;n=r.firstChild;)o.appendChild(n)
return o},za=function(e,t,n,r){var o
if(Fa(t))t=Ua(t,eu(e[0]))
else if(t.length&&!t.nodeType){if(t=ou.makeArray(t),r)for(o=t.length-1;0<=o;o--)za(e,t[o],n,r)
else for(o=0;o<t.length;o++)za(e,t[o],n,r)
return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t)
return e},ja=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},Ha=function(e,t,n){var r,o
return t=ou(t)[0],e.each((function(){n&&r===this.parentNode||(r=this.parentNode,o=t.cloneNode(!1),this.parentNode.insertBefore(o,this)),o.appendChild(this)})),e},Va=Et.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),qa=Et.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),$a={for:"htmlFor",class:"className",readonly:"readOnly"},Wa={float:"cssFloat"},Ka={},Xa={},Ya=function(e,t){return new ou.fn.init(e,t)},Ga=/^\s*|\s*$/g,Ja=function(e){return null==e?"":(""+e).replace(Ga,"")},Qa=function(e,t){var n,r,o,i
if(e)if(void 0===(n=e.length)){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},Za=function(e,t){var n=[]
return Qa(e,(function(e,r){t(r,e)&&n.push(r)})),n},eu=function(e){return e?9===e.nodeType?e:e.ownerDocument:Oa}
Ya.fn=Ya.prototype={constructor:Ya,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this
if(!e)return o
if(e.nodeType)return o.context=o[0]=e,o.length=1,o
if(t&&t.nodeType)o.context=t
else{if(t)return ou(e).attr(t)
o.context=t=document}if(Fa(e)){if(!(n="<"===(o.selector=e).charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:Da.exec(e)))return ou(t).find(e)
if(n[1])for(r=Ua(e,eu(t)).firstChild;r;)Ba.call(o,r),r=r.nextSibling
else{if(!(r=eu(t).getElementById(n[2])))return o
if(r.id!==n[2])return o.find(e)
o.length=1,o[0]=r}}else this.add(e,!1)
return o},toArray:function(){return Et.toArray(this)},add:function(e,t){var n,r
if(Fa(e))return this.add(ou(e))
if(!1!==t)for(n=ou.unique(this.toArray().concat(ou.makeArray(e))),this.length=n.length,r=0;r<n.length;r++)this[r]=n[r]
else Ba.apply(this,ou.makeArray(e))
return this},attr:function(e,t){var n,r=this
if("object"==typeof e)Qa(e,(function(e,t){r.attr(e,t)}))
else{if(!Ma(t)){if(r[0]&&1===r[0].nodeType){if((n=Ka[e])&&n.get)return n.get(r[0],e)
if(qa[e])return r.prop(e)?e:void 0
null===(t=r[0].getAttribute(e,2))&&(t=void 0)}return t}this.each((function(){var n
if(1===this.nodeType){if((n=Ka[e])&&n.set)return void n.set(this,t)
null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}}))}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this
if("object"==typeof(e=$a[e]||e))Qa(e,(function(e,t){n.prop(e,t)}))
else{if(!Ma(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t
this.each((function(){1===this.nodeType&&(this[e]=t)}))}return n},css:function(e,t){var n,r,o=this,a=function(e){return e.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()}))},u=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e}))}
if("object"==typeof e)Qa(e,(function(e,t){o.css(e,t)}))
else if(Ma(t))e=a(e),"number"!=typeof t||Va[e]||(t=t.toString()+"px"),o.each((function(){var n=this.style
if((r=Xa[e])&&r.set)r.set(this,t)
else{try{this.style[Wa[e]||e]=t}catch(a){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(u(e)):n.removeAttribute(e))}}))
else{if(n=o[0],(r=Xa[e])&&r.get)return r.get(n)
if(!n.ownerDocument.defaultView)return n.currentStyle?n.currentStyle[a(e)]:""
try{return n.ownerDocument.defaultView.getComputedStyle(n,null).getPropertyValue(u(e))}catch(i){return}}return o},remove:function(){for(var e,t=this.length;t--;)e=this[t],La.clean(e),e.parentNode&&e.parentNode.removeChild(e)
return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild)
return this},html:function(e){var t
if(Ma(e)){t=this.length
try{for(;t--;)this[t].innerHTML=e}catch(m){ou(this[t]).empty().append(e)}return this}return this[0]?this[0].innerHTML:""},text:function(e){var t
if(Ma(e)){for(t=this.length;t--;)"innerText"in this[t]?this[t].innerText=e:this[0].textContent=e
return this}return this[0]?this[0].innerText||this[0].textContent:""},append:function(){return za(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)}))},prepend:function(){return za(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)}),!0)},before:function(){return this[0]&&this[0].parentNode?za(this,arguments,(function(e){this.parentNode.insertBefore(e,this)})):this},after:function(){return this[0]&&this[0].parentNode?za(this,arguments,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}),!0):this},appendTo:function(e){return ou(e).append(this),this},prependTo:function(e){return ou(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return Ha(this,e)},wrapAll:function(e){return Ha(this,e,!0)},wrapInner:function(e){return this.each((function(){ou(this).contents().wrapAll(e)})),this},unwrap:function(){return this.parent().each((function(){ou(this).replaceWith(this.childNodes)}))},clone:function(){var e=[]
return this.each((function(){e.push(this.cloneNode(!0))})),ou(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this
return"string"!=typeof e||(-1!==e.indexOf(" ")?Qa(e.split(" "),(function(){n.toggleClass(this,t)})):n.each((function(n,r){var o,i=ja(r,e)
i!==t&&(o=r.className,i?r.className=Ja((" "+o+" ").replace(" "+e+" "," ")):r.className+=o?" "+e:e)}))),n},hasClass:function(e){return ja(this[0],e)},each:function(e){return Qa(this,e)},on:function(e,t){return this.each((function(){La.bind(this,e,t)}))},off:function(e,t){return this.each((function(){La.unbind(this,e,t)}))},trigger:function(e){return this.each((function(){"object"==typeof e?La.fire(this,e.type,e):La.fire(this,e)}))},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return ou(Pa.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){for(var t=[],n=0,r=this.length;n<r;n++)ou.find(e,this[n],t)
return ou(t)},filter:function(e){return ou("function"==typeof e?Za(this.toArray(),(function(t,n){return e(n,t)})):ou.filter(e,this.toArray()))},closest:function(e){var t=[]
return e instanceof ou&&(e=e[0]),this.each((function(n,r){for(;r;){if("string"==typeof e&&ou(r).is(e)){t.push(r)
break}if(r===e){t.push(r)
break}r=r.parentNode}})),ou(t)},offset:function(e){var t,n,r,o,i=0,a=0
return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:Ba,sort:Array.prototype.sort,splice:Array.prototype.splice},Et.extend(Ya,{extend:Et.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:Et.toArray(e)
var t},inArray:function(e,t){var n
if(t.indexOf)return t.indexOf(e)
for(n=t.length;n--;)if(t[n]===e)return n
return-1},isArray:Et.isArray,each:Qa,trim:Ja,grep:Za,find:ba,expr:ba.selectors,unique:ba.uniqueSort,text:ba.getText,contains:ba.contains,filter:function(e,t,n){var r=t.length
for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1)
return 1===t.length?ou.find.matchesSelector(t[0],e)?[t[0]]:[]:ou.find.matches(e,t)}})
var tu=function(e,t,n){var r=[],o=e[t]
for("string"!=typeof n&&n instanceof ou&&(n=n[0]);o&&9!==o.nodeType;){if(void 0!==n){if(o===n)break
if("string"==typeof n&&ou(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},nu=function(e,t,n,r){var o=[]
for(r instanceof ou&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(void 0!==r){if(e===r)break
if("string"==typeof r&&ou(e).is(r))break}o.push(e)}return o},ru=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e
return null}
Qa({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return tu(e,"parentNode")},next:function(e){return ru(e,"nextSibling",1)},prev:function(e){return ru(e,"previousSibling",1)},children:function(e){return nu(e.firstChild,"nextSibling",1)},contents:function(e){return Et.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},(function(e,t){Ya.fn[e]=function(n){var r=[]
this.each((function(){var e=t.call(r,this,n,r)
e&&(ou.isArray(e)?r.push.apply(r,e):r.push(e))})),1<this.length&&(Ia[e]||(r=ou.unique(r)),0===e.indexOf("parents")&&(r=r.reverse()))
var o=ou(r)
return n?o.filter(n):o}})),Qa({parentsUntil:function(e,t){return tu(e,"parentNode",t)},nextUntil:function(e,t){return nu(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return nu(e,"previousSibling",1,t).slice(1)}},(function(e,t){Ya.fn[e]=function(n,r){var o=[]
this.each((function(){var e=t.call(o,this,n,o)
e&&(ou.isArray(e)?o.push.apply(o,e):o.push(e))})),1<this.length&&(o=ou.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse()))
var i=ou(o)
return r?i.filter(r):i}})),Ya.fn.is=function(e){return!!e&&0<this.filter(e).length},Ya.fn.init.prototype=Ya.fn,Ya.overrideDefaults=function(e){var t,n=function(r,o){return t=t||e(),0===arguments.length&&(r=t.element),o=o||t.context,new n.fn.init(r,o)}
return ou.extend(n,this),n},Ya.attrHooks=Ka,Ya.cssHooks=Xa
var ou=Ya,iu=Et.each,au=Et.grep,uu=Ct.ie,su=/^([a-z0-9],?)+$/i,cu=function(e,t){var n=t.attr("style"),r=(r=e.serialize(e.parse(n),t[0].nodeName))||null
t.attr("data-mce-style",r)},lu=function(e,t){var n,r,o=0
if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r)
return o},fu=function(e,t){void 0===t&&(t={})
var n,r,o,i,a,s,c={},l=window,f={},d=0,m=Vr.forElement(Tt(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),p=[],g=t.schema?t.schema:ci({}),h=fi({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),v=t.ownEvents?new bi:bi.Event,y=g.getBlockElements(),b=ou.overrideDefaults((function(){return{context:e,element:Y.getRoot()}})),C=function(t){return t&&e&&A(t)?e.getElementById(t):t},w=function(e){return b("string"==typeof e?C(e):e)},x=function(e,t,n){var r,o,i=w(e)
return i.length&&(o=(r=G[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},S=function(e){var t=C(e)
return t?t.attributes:[]},N=function(e,n,r){""===r&&(r=null)
var o,i=w(e),a=i.attr(n)
i.length&&((o=G[n])&&o.set?o.set(i,r,n):i.attr(n,r),a!==r&&t.onSetAttrib&&t.onSetAttrib({attrElm:i,attrName:n,attrValue:r}))},E=function(){return t.root_element||e.body},k=function(t,n){return function(e,t,n){var r,o,i,a=0,u=0,s=e.ownerDocument
if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===Zn(Tt(e),"position"))return{x:a=(o=t.getBoundingClientRect()).left+(s.documentElement.scrollLeft||e.scrollLeft)-s.documentElement.clientLeft,y:u=o.top+(s.documentElement.scrollTop||e.scrollTop)-s.documentElement.clientTop}
for(r=t;r&&r!==n&&r.nodeType&&!ir(r,n);)a+=r.offsetLeft||0,u+=r.offsetTop||0,r=r.offsetParent
for(r=t.parentNode;r&&r!==n&&r.nodeType&&!ir(r,n);)a-=r.scrollLeft||0,u-=r.scrollTop||0,r=r.parentNode
u+=(i=Tt(t),rr.isFirefox()&&"table"===It(i)?or(Jt(i)).filter((function(e){return"caption"===It(e)})).bind((function(e){return or(Gt(e)).map((function(t){var n=t.dom.offsetTop,r=e.dom.offsetTop,o=e.dom.offsetHeight
return n<=r?-o:0}))})).getOr(0):0)}return{x:a,y:u}}(e.body,C(t),n)},_=function(e,t,n){var r=w(e)
return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()})))&&(t=Ct.browser.isIE()?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:void 0)},R=function(e){var t,n
return e=C(e),t=_(e,"width"),n=_(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},T=function(e,t){if(!e)return!1
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(su.test(t)){for(var n=t.toLowerCase().split(/,/),r=e.nodeName.toLowerCase(),o=n.length-1;0<=o;o--)if(n[o]===r)return!0
return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e]
return 0<ba(t,i[0].ownerDocument||i[0],null,i).length},O=function(e,t,n,r){var o,i=[],a=C(e)
for(r=void 0===r,n=n||("BODY"!==E().nodeName?E().parentNode:null),Et.is(t,"string")&&(t="*"===(o=t)?function(e){return 1===e.nodeType}:function(e){return T(e,o)});a&&!(a===n||D(a.nodeType)||Fn(a)||Un(a));){if(!t||"function"==typeof t&&t(a)){if(!r)return[a]
i.push(a)}a=a.parentNode}return r?i:null},B=function(e,t,n){var r=t
if(e)for("string"==typeof t&&(r=function(e){return T(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e
return null},P=function(e,t,n){var r,o="string"==typeof e?C(e):e
if(!o)return!1
if(Et.isArray(o)&&(o.length||0===o.length))return r=[],iu(o,(function(e,o){e&&r.push(t.call(n,"string"==typeof e?C(e):e,o))})),r
var i=n||this
return t.call(i,o)},L=function(e,t){w(e).each((function(e,n){iu(t,(function(e,t){N(n,t,e)}))}))},I=function(e,t){var r=w(e)
uu?r.each((function(e,r){if(!1!==r.canHaveHTML){for(;r.firstChild;)r.removeChild(r.firstChild)
try{r.innerHTML="<br>"+t,r.removeChild(r.firstChild)}catch(n){ou("<div></div>").html("<br>"+t).contents().slice(1).appendTo(r)}return t}})):r.html(t)},M=function(t,n,r,o,i){return P(t,(function(t){var a="string"==typeof n?e.createElement(n):n
return L(a,r),o&&("string"!=typeof o&&o.nodeType?a.appendChild(o):"string"==typeof o&&I(a,o)),i?a:t.appendChild(a)}))},F=function(t,n,r){return M(e.createElement(t),t,n,r,!0)},U=Zo.encodeAllRaw,z=function(e,t){var n=w(e)
return t?n.each((function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)})).remove():n.remove(),1<n.length?n.toArray():n[0]},j=function(e,t,n){w(e).toggleClass(t,n).each((function(){""===this.className&&ou(this).attr("class",null)}))},H=function(e,t,n){return P(t,(function(t){return Et.is(t,"array")&&(e=e.cloneNode(!0)),n&&iu(au(t.childNodes),(function(t){e.appendChild(t)})),t.parentNode.replaceChild(e,t)}))},V=function(e){if(An(e)){var t="a"===e.nodeName.toLowerCase()&&!x(e,"href")&&x(e,"id")
if(x(e,"name")||x(e,"data-mce-bookmark")||t)return!0}return!1},q=function(){return e.createRange()},W=function(n,r,o,i){if(Et.isArray(n)){for(var a=n.length,u=[];a--;)u[a]=W(n[a],r,o,i)
return u}return!t.collect||n!==e&&n!==l||p.push([n,r,o,i]),v.bind(n,r,o,i||Y)},K=function(t,n,r){if(Et.isArray(t)){for(var o=t.length,i=[];o--;)i[o]=K(t[o],n,r)
return i}if(0<p.length&&(t===e||t===l))for(o=p.length;o--;){var a=p[o]
t!==a[0]||n&&n!==a[1]||r&&r!==a[2]||v.unbind(a[0],a[1],a[2])}return v.unbind(t,n,r)},X=function(e){if(e&&An(e)){var t=e.getAttribute("data-mce-contenteditable")
return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},Y={doc:e,settings:t,win:l,files:f,stdMode:!0,boxModel:!0,styleSheetLoader:m,boundEvents:p,styles:h,schema:g,events:v,isBlock:function(e){if("string"==typeof e)return!!y[e]
if(e){var t=e.nodeType
if(t)return!(1!==t||!y[e.nodeName])}return!1},$:b,$$:w,root:null,clone:function(t,n){if(!uu||1!==t.nodeType||n)return t.cloneNode(n)
var r=e.createElement(t.nodeName)
return iu(S(t),(function(e){N(r,e.nodeName,x(t,e.nodeName))})),r},getRoot:E,getViewPort:function(e){var t=En(e)
return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:function(e){e=C(e)
var t=k(e),n=R(e)
return{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:R,getParent:function(e,t,n){var r=O(e,t,n,!1)
return r&&0<r.length?r[0]:null},getParents:O,get:C,getNext:function(e,t){return B(e,t,"nextSibling")},getPrev:function(e,t){return B(e,t,"previousSibling")},select:function(n,r){return ba(n,C(r)||t.root_element||e,[])},is:T,add:M,create:F,createHTML:function(e,t,n){var r,o=""
for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&void 0!==t[r]&&(o+=" "+r+'="'+U(t[r])+'"')
return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(t){var n,r=e.createElement("div"),o=e.createDocumentFragment()
for(o.appendChild(r),t&&(r.innerHTML=t);n=r.firstChild;)o.appendChild(n)
return o.removeChild(r),o},remove:z,setStyle:function(e,n,r){var o=A(n)?w(e).css(n,r):w(e).css(n)
t.update_styles&&cu(h,o)},getStyle:_,setStyles:function(e,n){var r=w(e).css(n)
t.update_styles&&cu(h,r)},removeAllAttribs:function(e){return P(e,(function(e){for(var t=e.attributes,n=t.length-1;0<=n;n--)e.removeAttributeNode(t.item(n))}))},setAttrib:N,setAttribs:L,getAttrib:x,getPos:k,parseStyle:function(e){return h.parse(e)},serializeStyle:function(e,t){return h.serialize(e,t)},addStyle:function(t){var n,r
if(Y!==fu.DOM&&e===document){if(c[t])return
c[t]=!0}(r=e.getElementById("mceDefaultStyles"))||((r=e.createElement("style")).id="mceDefaultStyles",r.type="text/css",(n=e.getElementsByTagName("head")[0]).firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r)),r.styleSheet?r.styleSheet.cssText+=t:r.appendChild(e.createTextNode(t))},loadCSS:function(e){$((e=e||"").split(","),(function(e){f[e]=!0,m.load(e,u)}))},addClass:function(e,t){w(e).addClass(t)},removeClass:function(e,t){j(e,t,!1)},hasClass:function(e,t){return w(e).hasClass(t)},toggleClass:j,show:function(e){w(e).show()},hide:function(e){w(e).hide()},isHidden:function(e){return"none"===w(e).css("display")},uniqueId:function(e){return(e||"mce_")+d++},setHTML:I,getOuterHTML:function(e){var t="string"==typeof e?C(e):e
return An(t)?t.outerHTML:ou("<div></div>").append(ou(t).clone()).html()},setOuterHTML:function(e,t){w(e).each((function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}z(ou(this).html(t),!0)}))},decode:Zo.decode,encode:U,insertAfter:function(e,t){var n=C(t)
return P(e,(function(e){var t=n.parentNode,r=n.nextSibling
return r?t.insertBefore(e,r):t.appendChild(e),e}))},replace:H,rename:function(e,t){var n
return e.nodeName!==t.toUpperCase()&&(n=F(t),iu(S(e),(function(t){N(n,t.nodeName,x(e,t.nodeName))})),H(n,e,!0)),n||e},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode
if(r===n)break
r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return h.toHex(Et.trim(e))},run:P,getAttribs:S,isEmpty:function(e,t){var n,r,o=0
if(V(e))return!1
if(e=e.firstChild){var i=new qr(e,e.parentNode),a=g?g.getWhiteSpaceElements():{}
t=t||(g?g.getNonEmptyElements():null)
do{if(n=e.nodeType,An(e)){var u=e.getAttribute("data-mce-bogus")
if(u){e=i.next("all"===u)
continue}if(r=e.nodeName.toLowerCase(),t&&t[r]){if("br"!==r)return!1
o++,e=i.next()
continue}if(V(e))return!1}if(8===n)return!1
if(3===n&&!Oo(e.nodeValue))return!1
if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&Oo(e.nodeValue))return!1
e=i.next()}while(e)}return o<=1},createRng:q,nodeIndex:lu,split:function(e,t,n){var r,o,i,a=q()
if(e&&t)return a.setStart(e.parentNode,lu(e)),a.setEnd(t.parentNode,lu(t)),r=a.extractContents(),(a=q()).setStart(t.parentNode,lu(t)+1),a.setEnd(e.parentNode,lu(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(Uo(Y,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(Uo(Y,o),e),z(e),n||t},bind:W,unbind:K,fire:function(e,t,n){return v.fire(e,t,n)},getContentEditable:X,getContentEditableParent:function(e){for(var t=E(),n=null;e&&e!==t&&null===(n=X(e));e=e.parentNode);return n},destroy:function(){if(0<p.length)for(var e=p.length;e--;){var t=p[e]
v.unbind(t[0],t[1],t[2])}se(f,(function(e,t){m.unload(t),delete f[t]})),ba.setDocument&&ba.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0
e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}},G=(n=h,o=function(){return Y},a={set:function(e,t,n){r.url_converter&&(t=r.url_converter.call(r.url_converter_scope||o(),t,n,e[0])),e.attr("data-mce-"+n,t).attr(n,t)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},s={style:{set:function(e,t){null===t||"object"!=typeof t?(i&&e.attr("data-mce-style",t),null!==t&&"string"==typeof t?(e.removeAttr("style"),e.css(n.parse(t))):e.attr("style",t)):e.css(t)},get:function(e){var t=e.attr("data-mce-style")||e.attr("style")
return n.serialize(n.parse(t),e[0].nodeName)}}},(i=(r=t).keep_values)&&(s.href=s.src=a),s)
return Y}
fu.DOM=fu(document),fu.nodeIndex=lu
var du=fu.DOM,mu=Et.each,pu=Et.grep,gu=(hu.prototype._setReferrerPolicy=function(e){this.settings.referrerPolicy=e},hu.prototype.loadScript=function(e,t,n){var r=du,o=function(){r.remove(i),a&&(a.onerror=a.onload=a=null)},i=r.uniqueId(),a=document.createElement("script")
a.id=i,a.type="text/javascript",a.src=Et._addCacheSuffix(e),this.settings.referrerPolicy&&r.setAttrib(a,"referrerpolicy",this.settings.referrerPolicy),a.onload=function(){o(),t()},a.onerror=function(){o(),I(n)?n():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(a)},hu.prototype.isDone=function(e){return 2===this.states[e]},hu.prototype.markDone=function(e){this.states[e]=2},hu.prototype.add=function(e,t,n,r){var o=this.states[e]
this.queue.push(e),void 0===o&&(this.states[e]=0),t&&(this.scriptLoadedCallbacks[e]||(this.scriptLoadedCallbacks[e]=[]),this.scriptLoadedCallbacks[e].push({success:t,failure:r,scope:n||this}))},hu.prototype.load=function(e,t,n,r){return this.add(e,t,n,r)},hu.prototype.remove=function(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]},hu.prototype.loadQueue=function(e,t,n){this.loadScripts(this.queue,e,t,n)},hu.prototype.loadScripts=function(e,t,n,r){var o=this,i=[],a=function(e,t){mu(o.scriptLoadedCallbacks[t],(function(t){I(t[e])&&t[e].call(t.scope)})),o.scriptLoadedCallbacks[t]=void 0}
o.queueLoadedCallbacks.push({success:t,failure:r,scope:n||this})
var u=function(){var t,n=pu(e)
e.length=0,mu(n,(function(e){2!==o.states[e]?3!==o.states[e]?1!==o.states[e]&&(o.states[e]=1,o.loading++,o.loadScript(e,(function(){o.states[e]=2,o.loading--,a("success",e),u()}),(function(){o.states[e]=3,o.loading--,i.push(e),a("failure",e),u()}))):a("failure",e):a("success",e)})),o.loading||(t=o.queueLoadedCallbacks.slice(0),o.queueLoadedCallbacks.length=0,mu(t,(function(e){0===i.length?I(e.success)&&e.success.call(e.scope):I(e.failure)&&e.failure.call(e.scope,i)})))}
u()},hu.ScriptLoader=new hu,hu)
function hu(e){void 0===e&&(e={}),this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=0,this.settings=e}var vu=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},yu={},bu=vu("en"),Cu=function(){return ge(yu,bu.get())},wu={getData:function(){return ce(yu,(function(e){return ke({},e)}))},setCode:function(e){e&&bu.set(e)},getCode:function(){return bu.get()},add:function(e,t){var n=yu[e]
n||(yu[e]=n={}),se(t,(function(e,t){n[t.toLowerCase()]=e}))},translate:function(e){var t,n,r=Cu().getOr({}),o=function(e){return I(e)?Object.prototype.toString.call(e):i(e)?"":""+e},i=function(e){return""===e||null==e},a=function(e){var t=o(e)
return ge(r,t.toLowerCase()).map(o).getOr(t)},u=function(e){return e.replace(/{context:\w+}$/,"")}
if(i(e))return""
if(R(t=e)&&he(t,"raw"))return o(e.raw)
if(T(n=e)&&1<n.length){var s=e.slice(1)
return u(a(e[0]).replace(/\{([0-9]+)\}/g,(function(e,t){return he(s,t)?o(s[t]):e})))}return u(a(e))},isRtl:function(){return Cu().bind((function(e){return ge(e,"_dir")})).exists((function(e){return"rtl"===e}))},hasCode:function(e){return he(yu,e)}},xu=function(){var e=[],t={},n={},r=[],o=function(e,t){var n=K(r,(function(n){return n.name===e&&n.state===t}))
$(n,(function(e){return e.callback()}))},i=function(e){var t
return n[e]&&(t=n[e].dependencies),t||[]},a=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},u=function(e,r,s,c,l){var f,d
t[e]||(0!==(f="string"==typeof r?r:r.prefix+r.resource+r.suffix).indexOf("/")&&-1===f.indexOf("://")&&(f=xu.baseURL+"/"+f),t[e]=f.substring(0,f.lastIndexOf("/")),d=function(){var t,n,l,f
o(e,"loaded"),t=r,n=s,l=c,f=i(e),$(f,(function(e){var n=a(t,e)
u(n.resource,n,void 0,void 0)})),n&&(l?n.call(l):n.call(gu))},n[e]?d():gu.ScriptLoader.add(f,d,c,l))},s=function(e,o,i){void 0===i&&(i="added"),he(n,e)&&"added"===i||he(t,e)&&"loaded"===i?o():r.push({name:e,state:i,callback:o})}
return{items:e,urls:t,lookup:n,_listeners:r,get:function(e){return n[e]?n[e].instance:void 0},dependencies:i,requireLangPack:function(e,n){!1!==xu.languageLoad&&s(e,(function(){var r=wu.getCode()
!r||n&&-1===(","+(n||"")+",").indexOf(","+r+",")||gu.ScriptLoader.add(t[e]+"/langs/"+r+".js")}),"loaded")},add:function(t,r,i){var a=r
return e.push(a),n[t]={instance:a,dependencies:i},o(t,"added"),a},remove:function(e){delete t[e],delete n[e]},createUrl:a,addComponents:function(e,n){var r=t[e]
$(n,(function(e){gu.ScriptLoader.add(r+"/"+e)}))},load:u,waitFor:s}}
xu.languageLoad=!0,xu.baseURL="",xu.PluginManager=xu(),xu.ThemeManager=xu()
var Su=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null===n&&(n=setTimeout((function(){e.apply(null,r),n=null}),t))}}},Nu=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null!==n&&clearTimeout(n),n=setTimeout((function(){e.apply(null,r),n=null}),t)}}},Eu=function(e,t){var n=Gn(e,t)
return void 0===n||""===n?[]:n.split(" ")},ku=function(e){return void 0!==e.dom.classList},_u=function(e,t){ku(e)?e.dom.classList.add(t):function(e,t){return r=t,o=Eu(n=e,"class").concat([r]),Xn(n,"class",o.join(" ")),!0
var n,r,o}(e,t)},Au=function(e,t){return ku(e)&&e.dom.classList.contains(t)},Ru=function(e,t){var n=[]
return $(Jt(e),(function(e){t(e)&&(n=n.concat([e])),n=n.concat(Ru(e,t))})),n},Tu=function(e,t){return n=t,o=void 0===(r=e)?document:r.dom,Pt(o)?[]:q(o.querySelectorAll(n),Tt)
var n,r,o},Ou=c("mce-annotation"),Bu=c("data-mce-annotation"),Pu=c("data-mce-annotation-uid"),Du=function(e,t){var n=e.selection.getRng(),r=Tt(n.startContainer),o=Tt(e.getBody()),i=t.fold((function(){return"."+Ou()}),(function(e){return"["+Bu()+'="'+e+'"]'})),a=Qt(r,n.startOffset).getOr(r),u=Tr(a,i,(function(e){return Dt(e,o)})),s=function(e,t){return n=t,(r=e.dom)&&r.hasAttribute&&r.hasAttribute(n)?N.some(Gn(e,t)):N.none()
var n,r}
return u.bind((function(t){return s(t,""+Pu()).bind((function(n){return s(t,""+Bu()).map((function(t){var r=Lu(e,n)
return{uid:n,name:t,elements:r}}))}))}))},Lu=function(e,t){var n=Tt(e.getBody())
return Tu(n,"["+Pu()+'="'+t+'"]')},Iu=0,Mu=function(e){var t=(new Date).getTime()
return e+"_"+Math.floor(1e9*Math.random())+ ++Iu+String(t)},Fu=function(e,t){var n,r,o=Vt(e).dom,i=Tt(o.createDocumentFragment()),a=(n=t,(r=(o||document).createElement("div")).innerHTML=n,Jt(Tt(r)))
dn(i,a),mn(e),fn(e,i)},Uu=function(e,t){return Tt(e.dom.cloneNode(t))},zu=function(e){return Uu(e,!1)},ju=function(e){return Uu(e,!0)},Hu=function(e,t,n){void 0===n&&(n=b)
var r=new qr(e,t),o=function(e){for(var t;(t=r[e]())&&!In(t)&&!n(t););return N.from(t).filter(In)}
return{current:function(){return N.from(r.current()).filter(In)},next:function(){return o("next")},prev:function(){return o("prev")},prev2:function(){return o("prev2")}}},Vu=function(e,t){var n=t||function(t){return e.isBlock(t)||zn(t)||Vn(t)},r=function(e,t,n,o){if(In(e)){var i=o(e,t,e.data)
if(-1!==i)return N.some({container:e,offset:i})}return n().bind((function(e){return r(e.container,e.offset,n,o)}))}
return{backwards:function(e,t,o,i){var a=Hu(e,i,n)
return r(e,t,(function(){return a.prev().map((function(e){return{container:e,offset:e.length}}))}),o).getOrNull()},forwards:function(e,t,o,i){var a=Hu(e,i,n)
return r(e,t,(function(){return a.next().map((function(e){return{container:e,offset:0}}))}),o).getOrNull()}}},qu=function(e,t,n){return e.isSome()&&t.isSome()?N.some(n(e.getOrDie(),t.getOrDie())):N.none()},$u=Math.round,Wu=function(e){return e?{left:$u(e.left),top:$u(e.top),bottom:$u(e.bottom),right:$u(e.right),width:$u(e.width),height:$u(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},Ku=function(e,t){return e=Wu(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},Xu=function(e,t,n){return 0<=e&&e<=Math.min(t.height,n.height)/2},Yu=function(e,t){var n=Math.min(t.height/2,e.height/2)
return e.bottom-n<t.top||!(e.top>t.bottom)&&Xu(t.top-e.bottom,e,t)},Gu=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&Xu(t.bottom-e.top,e,t)},Ju=function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom},Qu=function(e){var t=e.startContainer,n=e.startOffset
return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},Zu=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},es=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"),ts=function(e){return"string"==typeof e&&768<=e.charCodeAt(0)&&es.test(e)},ns=An,rs=_o,os=Tn("display","block table"),is=Tn("float","left right"),as=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1
return!0}}(ns,rs,g(is)),us=g(Tn("white-space","pre pre-line pre-wrap")),ss=In,cs=zn,ls=fu.nodeIndex,fs=Zu,ds=function(e){return"createRange"in e?e.createRange():fu.DOM.createRng()},ms=function(e){return e&&/[\r\n\t ]/.test(e)},ps=function(e){return!!e.setStart&&!!e.setEnd},gs=function(e){var t,n=e.startContainer,r=e.startOffset
return!!(ms(e.toString())&&us(n.parentNode)&&In(n)&&(t=n.data,ms(t[r-1])||ms(t[r+1])))},hs=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},vs=function(e){var t=e.getClientRects(),n=0<t.length?Wu(t[0]):Wu(e.getBoundingClientRect())
return!ps(e)&&cs(e)&&hs(n)?function(e){var t=e.ownerDocument,n=ds(t),r=t.createTextNode(ro),o=e.parentNode
o.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1)
var i=Wu(n.getBoundingClientRect())
return o.removeChild(r),i}(e):hs(n)&&ps(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset
if(t===n&&In(n)&&0===r&&1===o){var i=e.cloneRange()
return i.setEndAfter(n),vs(i)}return null}(e):n},ys=function(e,t){var n=Ku(e,t)
return n.width=1,n.right=n.left+1,n},bs=function(e,t,n){var r=function(){return n=n||function(e){var t,n,r=[],o=function(e){var t,n
0!==e.height&&(0<r.length&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=ds(e.ownerDocument)
if(t<e.data.length){if(ts(e.data[t]))return r
if(ts(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!gs(n)))return o(ys(vs(n),!1)),r}0<t&&(n.setStart(e,t-1),n.setEnd(e,t),gs(n)||o(ys(vs(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),gs(n)||o(ys(vs(n),!0)))}
if(ss(e.container()))return i(e.container(),e.offset()),r
if(ns(e.container()))if(e.isAtEnd())n=fs(e.container(),e.offset()),ss(n)&&i(n,n.data.length),as(n)&&!cs(n)&&o(ys(vs(n),!1))
else{if(n=fs(e.container(),e.offset()),ss(n)&&i(n,0),as(n)&&e.isAtEnd())return o(ys(vs(n),!1)),r
t=fs(e.container(),e.offset()-1),as(t)&&!cs(t)&&(!os(t)&&!os(n)&&as(n)||o(ys(vs(t),!1))),as(n)&&o(ys(vs(n),!0))}return r}(bs(e,t))}
return{container:c(e),offset:c(t),toRange:function(){var n=ds(e.ownerDocument)
return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:r,isVisible:function(){return 0<r().length},isAtStart:function(){return ss(e),0===t},isAtEnd:function(){return ss(e)?t>=e.data.length:t>=e.childNodes.length},isEqual:function(n){return n&&e===n.container()&&t===n.offset()},getNode:function(n){return fs(e,n?t-1:t)}}}
bs.fromRangeStart=function(e){return bs(e.startContainer,e.startOffset)},bs.fromRangeEnd=function(e){return bs(e.endContainer,e.endOffset)},bs.after=function(e){return bs(e.parentNode,ls(e)+1)},bs.before=function(e){return bs(e.parentNode,ls(e))},bs.isAbove=function(e,t){return qu(re(t.getClientRects()),oe(e.getClientRects()),Yu).getOr(!1)},bs.isBelow=function(e,t){return qu(oe(t.getClientRects()),re(e.getClientRects()),Gu).getOr(!1)},bs.isAtStart=function(e){return!!e&&e.isAtStart()},bs.isAtEnd=function(e){return!!e&&e.isAtEnd()},bs.isTextPosition=function(e){return!!e&&In(e.container())},bs.isElementPosition=function(e){return!1===bs.isTextPosition(e)}
var Cs,ws,xs=function(e,t){In(t)&&0===t.data.length&&e.remove(t)},Ss=function(e,t,n){var r,o,i,a,u,s,c
Un(n)?(i=e,a=t,u=n,s=N.from(u.firstChild),c=N.from(u.lastChild),a.insertNode(u),s.each((function(e){return xs(i,e.previousSibling)})),c.each((function(e){return xs(i,e.nextSibling)}))):(r=e,o=n,t.insertNode(o),xs(r,o.previousSibling),xs(r,o.nextSibling))},Ns=In,Es=Bn,ks=fu.nodeIndex,_s=function(e){var t=e.parentNode
return Es(t)?_s(t):t},As=function(e){return e?Se(e.childNodes,(function(e,t){return Es(t)&&"BR"!==t.nodeName?e=e.concat(As(t)):e.push(t),e}),[]):[]},Rs=function(e){return function(t){return e===t}},Ts=function(e){return(Ns(e)?"text()":e.nodeName.toLowerCase())+"["+function(e){var t=As(_s(e)),n=Ne(t,Rs(e),e)
t=t.slice(0,n+1)
var r=Se(t,(function(e,n,r){return Ns(n)&&Ns(t[r-1])&&e++,e}),0)
return t=we(t,Rn([e.nodeName])),(n=Ne(t,Rs(e),e))-r}(e)+"]"},Os=function(e,t){var n,r,o,i=[],a=t.container(),u=t.offset()
return Ns(a)?n=function(e,t){for(;(e=e.previousSibling)&&Ns(e);)t+=e.data.length
return t}(a,u):(u>=(r=a.childNodes).length?(n="after",u=r.length-1):n="before",a=r[u]),i.push(Ts(a)),o=function(e,t,n){var r=[]
for(t=t.parentNode;t!==e;t=t.parentNode)r.push(t)
return r}(e,a),o=we(o,g(Bn)),(i=i.concat(Ce(o,Ts))).reverse().join("/")+","+n},Bs=function(e,t){if(!t)return null
var n=t.split(","),r=n[0].split("/"),o=1<n.length?n[1]:"before",i=Se(r,(function(e,t){var n,r,o,i,a=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
return a?("text()"===a[1]&&(a[1]="#text"),n=e,r=a[1],o=parseInt(a[2],10),i=As(n),i=we(i,(function(e,t){return!Ns(e)||!Ns(i[t-1])})),(i=we(i,Rn([r])))[o]):null}),e)
return i?Ns(i)?function(e,t){for(var n,r=e,o=0;Ns(r);){if(n=r.data.length,o<=t&&t<=o+n){e=r,t-=o
break}if(!Ns(r.nextSibling)){e=r,t=n
break}o+=n,r=r.nextSibling}return Ns(e)&&t>e.data.length&&(t=e.data.length),bs(e,t)}(i,parseInt(o,10)):(o="after"===o?ks(i)+1:ks(i),bs(i.parentNode,o)):null},Ps=Vn,Ds=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],s=[],c=0,l=e.getRoot()
for(In(a)?s.push(n?function(e,t,n){for(var r=e(t.data.slice(0,n)).length,o=t.previousSibling;o&&In(o);o=o.previousSibling)r+=e(o.data).length
return r}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(c=1,u=Math.max(0,i.length-1)),s.push(e.nodeIndex(i[u],n)+c));a&&a!==l;a=a.parentNode)s.push(e.nodeIndex(a,n))
return s},Ls=function(e,t,n){var r=0
return Et.each(e.select(t),(function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++})),r},Is=function(e,t){var n,r=t?"start":"end",o=e[r+"Container"],i=e[r+"Offset"]
An(o)&&"TR"===o.nodeName&&(o=(n=o.childNodes)[Math.min(t?i:i-1,n.length-1)])&&(i=t?0:o.childNodes.length,e["set"+(t?"Start":"End")](o,i))},Ms=function(e){return Is(e,!0),Is(e,!1),e},Fs=function(e,t){var n
if(An(e)&&(e=Zu(e,t),Ps(e)))return e
if(fo(e)){if(In(e)&&co(e)&&(e=e.parentNode),n=e.previousSibling,Ps(n))return n
if(n=e.nextSibling,Ps(n))return n}},Us=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng()
if(Ps(r)||"IMG"===o)return{name:o,index:Ls(n.dom,o,r)}
var a,u,s,c,l,f,d,m=Fs((a=i).startContainer,a.startOffset)||Fs(a.endContainer,a.endOffset)
return m?{name:o=m.tagName,index:Ls(n.dom,o,m)}:(u=e,c=t,l=i,f=(s=n).dom,(d={}).start=Ds(f,u,c,l,!0),s.isCollapsed()||(d.end=Ds(f,u,c,l,!1)),d)},zs=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},js=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName
if("IMG"===u)return{name:u,index:Ls(n,u,a)}
var s,c=Ms(r.cloneRange())
i||(c.collapse(!1),s=zs(n,o+"_end",t),Ss(n,c,s)),(r=Ms(r)).collapse(!0)
var l=zs(n,o+"_start",t)
return Ss(n,r,l),e.moveToBookmark({id:o,keep:!0}),{id:o}},Hs=f(Us,l,!0),Vs=fu.DOM,qs=function(e,t,n){var r=e.getParam(t,n)
if(-1===r.indexOf("="))return r
var o=e.getParam(t,"","hash")
return o.hasOwnProperty(e.id)?o[e.id]:n},$s=function(e){return e.getParam("content_security_policy","")},Ws=function(e){if(e.getParam("force_p_newlines",!1))return"p"
var t=e.getParam("forced_root_block","p")
return!1===t?"":!0===t?"p":t},Ks=function(e){return e.getParam("forced_root_block_attrs",{})},Xs=function(e){return e.getParam("automatic_uploads",!0,"boolean")},Ys=function(e){return e.getParam("icons","","string")},Gs=function(e){return e.getParam("referrer_policy","","string")},Js=function(e){return e.getParam("language","en","string")},Qs=function(e){return e.getParam("indent_use_margin",!1)},Zs=function(e){var t=e.getParam("font_css",[])
return T(t)?t:q(t.split(","),He)},ec=function(e){var t=e.getParam("object_resizing")
return!1!==t&&!Ct.iOS&&(A(t)?t:"table,img,figure.image,div,video,iframe")},tc=function(e){return e.getParam("event_root")},nc=function(e){return e.getParam("theme")},rc=function(e){return!1!==e.getParam("inline_boundaries")},oc=function(e){return e.getParam("plugins","","string")},ic=An,ac=In,uc=function(e){var t=e.parentNode
t&&t.removeChild(e)},sc=function(e){var t=ao(e)
return{count:e.length-t.length,text:t}},cc=function(e){for(var t;-1!==(t=e.data.lastIndexOf(oo));)e.deleteData(t,1)},lc=function(e,t){return mc(e),t},fc=function(e,t){var n,r,o=t.container(),i=(n=ie(o.childNodes),(-1===(r=j(n,e))?N.none():N.some(r)).map((function(e){return e<t.offset()?bs(o,t.offset()-1):t})).getOr(t))
return mc(e),i},dc=function(e,t){return bs.isTextPosition(t)?function(e,t){return ac(e)&&t.container()===e?(r=t,o=sc((n=e).data.substr(0,r.offset())),i=sc(n.data.substr(r.offset())),0<(o.text+i.text).length?(cc(n),bs(n,r.offset()-o.count)):r):lc(e,t)
var n,r,o,i}(e,t):(n=e,((r=t).container()===n.parentNode?fc:lc)(n,r))
var n,r},mc=function(e){ic(e)&&fo(e)&&(mo(e)?e.removeAttribute("data-mce-caret"):uc(e)),ac(e)&&(cc(e),0===e.data.length&&uc(e))},pc=ft().browser,gc=Vn,hc=$n,vc=qn,yc=function(e,t,n){var r,o,i,a,u=Ku(t.getBoundingClientRect(),n),s="BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,e.scrollTop||r.scrollTop):(a=e.getBoundingClientRect(),o=e.scrollLeft-a.left,e.scrollTop-a.top)
return u.left+=o,u.right+=o,u.top+=s,u.bottom+=s,u.width=1,0<(i=t.offsetWidth-t.clientWidth)&&(n&&(i*=-1),u.left+=i,u.right+=i),u},bc=function(e,t,n,r){var o,i,a=vu(N.none()),u=Ws(e),s=0<u.length?u:"p",c=function(){!function(e){for(var t=Tu(Tt(e),"*[contentEditable=false],video,audio,embed,object"),n=0;n<t.length;n++){var r,o=t[n].dom,i=o.previousSibling
vo(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(r.length-1,1)),i=o.nextSibling,ho(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(0,1))}}(t),i&&(mc(i),i=null),a.get().each((function(e){ou(e.caret).remove(),a.set(N.none())})),o&&(jr.clearInterval(o),o=null)},l=function(){o=jr.setInterval((function(){r()?ou("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden"):ou("div.mce-visual-caret",t).addClass("mce-visual-caret-hidden")}),500)}
return{show:function(e,r){var o,u
if(c(),vc(r))return null
if(!n(r))return i=function(e,t){var n,r=e.ownerDocument.createTextNode(oo),o=e.parentNode
if(t){if(n=e.previousSibling,so(n)){if(fo(n))return n
if(vo(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,so(n)){if(fo(n))return n
if(ho(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(r,e),u=r.ownerDocument.createRange(),wc(i.nextSibling)?(u.setStart(i,0),u.setEnd(i,0)):(u.setStart(i,1),u.setEnd(i,1)),u
i=function(e,t,n){var r,o=t.ownerDocument.createElement(e)
o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(((r=document.createElement("br")).setAttribute("data-mce-bogus","1"),r))
var i=t.parentNode
return n?i.insertBefore(o,t):t.nextSibling?i.insertBefore(o,t.nextSibling):i.appendChild(o),o}(s,r,e),o=yc(t,r,e),ou(i).css("top",o.top)
var f=ou('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(o).appendTo(t)[0]
return a.set(N.some({caret:f,element:r,before:e})),a.get().each((function(t){e&&ou(t.caret).addClass("mce-visual-caret-before")})),l(),(u=r.ownerDocument.createRange()).setStart(i,0),u.setEnd(i,0),u},hide:c,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){a.get().each((function(e){var n=yc(t,e.element,e.before)
ou(e.caret).css(ke({},n))}))},destroy:function(){return jr.clearInterval(o)}}},Cc=function(){return pc.isIE()||pc.isEdge()||pc.isFirefox()},wc=function(e){return gc(e)||hc(e)},xc=function(e){return wc(e)||Pn(e)&&Cc()},Sc=Vn,Nc=$n,Ec=Tn("display","block table table-cell table-caption list-item"),kc=fo,_c=co,Ac=An,Rc=_o,Tc=function(e,t){for(var n;n=e(t);)if(!_c(n))return n
return null},Oc=function(e,t,n,r,o){var i=new qr(e,r),a=Sc(e)||_c(e)
if(t<0){if(a&&n(e=Tc(i.prev.bind(i),!0)))return e
for(;e=Tc(i.prev.bind(i),o);)if(n(e))return e}if(0<t){if(a&&n(e=Tc(i.next.bind(i),!0)))return e
for(;e=Tc(i.next.bind(i),o);)if(n(e))return e}return null},Bc=function(e,t){for(;e&&e!==t;){if(Ec(e))return e
e=e.parentNode}return null},Pc=function(e,t,n){return Bc(e.container(),n)===Bc(t.container(),n)},Dc=function(e,t){if(!t)return null
var n=t.container(),r=t.offset()
return Ac(n)?n.childNodes[r+e]:null},Lc=function(e,t){var n=t.ownerDocument.createRange()
return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},Ic=function(e,t,n){for(var r,o,i,a=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[a],kc(r)&&(r=r[a]),Sc(r)||Nc(r)){if(i=n,Bc(r,o=t)===Bc(i,o))return r
break}if(Rc(r))break
n=n.parentNode}return null},Mc=f(Lc,!0),Fc=f(Lc,!1),Uc=function(e,t,n){var r,o,i=f(Ic,!0,t),a=f(Ic,!1,t),u=n.startContainer,s=n.startOffset
if(co(u)){if(Ac(u)||(u=u.parentNode),"before"===(o=u.getAttribute("data-mce-caret"))&&(r=u.nextSibling,xc(r)))return Mc(r)
if("after"===o&&(r=u.previousSibling,xc(r)))return Fc(r)}if(!n.collapsed)return n
if(In(u)){if(kc(u)){if(1===e){if(r=a(u))return Mc(r)
if(r=i(u))return Fc(r)}if(-1===e){if(r=i(u))return Fc(r)
if(r=a(u))return Mc(r)}return n}if(vo(u)&&s>=u.data.length-1)return 1===e&&(r=a(u))?Mc(r):n
if(ho(u)&&s<=1)return-1===e&&(r=i(u))?Fc(r):n
if(s===u.data.length)return(r=a(u))?Mc(r):n
if(0===s)return(r=i(u))?Fc(r):n}return n},zc=function(e,t){return N.from(Dc(e?0:-1,t)).filter(Sc)},jc=function(e,t,n){var r=Uc(e,t,n)
return-1===e?bs.fromRangeStart(r):bs.fromRangeEnd(r)},Hc=function(e){return N.from(e.getNode()).map(Tt)},Vc=function(e,t){for(;t=e(t);)if(t.isVisible())return t
return t},qc=function(e,t){var n=Pc(e,t)
return!(n||!zn(e.getNode()))||n};(ws=Cs=Cs||{})[ws.Backwards=-1]="Backwards",ws[ws.Forwards=1]="Forwards"
var $c,Wc,Kc=Vn,Xc=In,Yc=An,Gc=zn,Jc=_o,Qc=function(e){return No(e)||!!Ao(t=e)&&!0!==Y(ie(t.getElementsByTagName("*")),(function(e,t){return e||bo(t)}),!1)
var t},Zc=Ro,el=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},tl=function(e,t){if(0<e){if(Jc(t.previousSibling)&&!Xc(t.previousSibling))return bs.before(t)
if(Xc(t))return bs(t,0)}if(e<0){if(Jc(t.nextSibling)&&!Xc(t.nextSibling))return bs.after(t)
if(Xc(t))return bs(t,t.data.length)}return e<0&&!Gc(t)?bs.after(t):bs.before(t)},nl=function(e,t,n){var r,o,i,a
if(!Yc(n)||!t)return null
if(t.isEqual(bs.after(n))&&n.lastChild){if(a=bs.after(n.lastChild),e<0&&Jc(n.lastChild)&&Yc(n.lastChild))return Gc(n.lastChild)?bs.before(n.lastChild):a}else a=t
var u,s,c,l=a.container(),f=a.offset()
if(Xc(l)){if(e<0&&0<f)return bs(l,--f)
if(0<e&&f<l.length)return bs(l,++f)
r=l}else{if(e<0&&0<f&&(o=el(l,f-1),Jc(o)))return!Qc(o)&&(i=Oc(o,e,Zc,o))?Xc(i)?bs(i,i.data.length):bs.after(i):Xc(o)?bs(o,o.data.length):bs.before(o)
if(0<e&&f<l.childNodes.length&&(o=el(l,f),Jc(o)))return Gc(o)?(u=n,(c=(s=o).nextSibling)&&Jc(c)?Xc(c)?bs(c,0):bs.before(c):nl(Cs.Forwards,bs.after(s),u)):!Qc(o)&&(i=Oc(o,e,Zc,o))?Xc(i)?bs(i,0):bs.before(i):Xc(o)?bs(o,0):bs.after(o)
r=o||a.getNode()}if((0<e&&a.isAtEnd()||e<0&&a.isAtStart())&&(r=Oc(r,e,C,n,!0),Zc(r,n)))return tl(e,r)
o=Oc(r,e,Zc,n)
var d=Ee(K(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode
return n}(l,n),Kc))
return!d||o&&d.contains(o)?o?tl(e,o):null:a=0<e?bs.after(d):bs.before(d)},rl=function(e){return{next:function(t){return nl(Cs.Forwards,t,e)},prev:function(t){return nl(Cs.Backwards,t,e)}}},ol=function(e){return bs.isTextPosition(e)?0===e.offset():_o(e.getNode())},il=function(e){if(bs.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return _o(e.getNode(!0))},al=function(e,t){return!bs.isTextPosition(e)&&!bs.isTextPosition(t)&&e.getNode()===t.getNode(!0)},ul=function(e,t,n){var r=rl(t)
return N.from(e?r.next(n):r.prev(n))},sl=function(e,t,n){return ul(e,t,n).bind((function(r){return Pc(n,r,t)&&function(e,t,n){return e?!al(t,n)&&(r=t,!(!bs.isTextPosition(r)&&zn(r.getNode())))&&il(t)&&ol(n):!al(n,t)&&ol(t)&&il(n)
var r}(e,n,r)?ul(e,t,r):N.some(r)}))},cl=function(e,t,n,r){return sl(e,t,n).bind((function(n){return r(n)?cl(e,t,n,r):N.some(n)}))},ll=function(e,t){var n,r,o,i,a,u=e?t.firstChild:t.lastChild
return In(u)?N.some(bs(u,e?0:u.data.length)):u?_o(u)?N.some(e?bs.before(u):zn(a=u)?bs.before(a):bs.after(a)):(r=t,o=u,i=(n=e)?bs.before(o):bs.after(o),ul(n,r,i)):N.none()},fl=f(ul,!0),dl=f(ul,!1),ml=f(ll,!0),pl=f(ll,!1),gl="_mce_caret",hl=function(e){return An(e)&&e.id===gl},vl=function(e,t){for(;t&&t!==e;){if(t.id===gl)return t
t=t.parentNode}return null},yl=function(e,t){return An(t)&&e.isBlock(t)&&!t.innerHTML&&!Ct.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t},bl=function(e,t,n){return!(!1!==t.hasChildNodes()||!vl(e,t)||(o=n,i=(r=t).ownerDocument.createTextNode(oo),r.appendChild(i),o.setStart(i,0),o.setEnd(i,0),0))
var r,o,i},Cl=function(e,t,n,r){var o,i,a,u,s=n[t?"start":"end"],c=e.getRoot()
if(s){for(a=s[0],i=c,o=s.length-1;1<=o;o--){if(u=i.childNodes,bl(c,i,r))return!0
if(s[o]>u.length-1)return!!bl(c,i,r)||function(e,t){return pl(e).fold(b,(function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0}))}(i,r)
i=u[s[o]]}3===i.nodeType&&(a=Math.min(s[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(s[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},wl=function(e){return In(e)&&0<e.data.length},xl=function(e,t,n){var r,o,i,a,u,s,c=e.get(n.id+"_"+t),l=n.keep
if(c){if(r=c.parentNode,o="start"===t?l?c.hasChildNodes()?(r=c.firstChild,1):wl(c.nextSibling)?(r=c.nextSibling,0):wl(c.previousSibling)?(r=c.previousSibling,c.previousSibling.data.length):(r=c.parentNode,e.nodeIndex(c)+1):e.nodeIndex(c):l?c.hasChildNodes()?(r=c.firstChild,1):wl(c.previousSibling)?(r=c.previousSibling,c.previousSibling.data.length):(r=c.parentNode,e.nodeIndex(c)):e.nodeIndex(c),u=r,s=o,!l){for(a=c.previousSibling,i=c.nextSibling,Et.each(Et.grep(c.childNodes),(function(e){In(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));c=e.get(n.id+"_"+t);)e.remove(c,!0)
a&&i&&a.nodeType===i.nodeType&&In(a)&&!Ct.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,s=o)}return N.some(bs(u,s))}return N.none()},Sl=function(e,t,n){return 2===t?Us(ao,n,e):3===t?(o=(r=e).getRng(),{start:Os(r.dom.getRoot(),bs.fromRangeStart(o)),end:Os(r.dom.getRoot(),bs.fromRangeEnd(o))}):t?{rng:e.getRng()}:js(e,!1)
var r,o},Nl=function(e,t){(function(e,t){var n,r,o,i,a,u,s,c,l,f,d,m,p,g,h=e.dom
if(t){if(g=t,Et.isArray(g.start))return m=t,p=(d=h).createRng(),Cl(d,!0,m,p)&&Cl(d,!1,m,p)?N.some(p):N.none()
if(A(t.start))return N.some((c=t,l=(s=h).createRng(),f=Bs(s.getRoot(),c.start),l.setStart(f.container(),f.offset()),f=Bs(s.getRoot(),c.end),l.setEnd(f.container(),f.offset()),l))
if(t.hasOwnProperty("id"))return a=xl(o=h,"start",i=t),u=xl(o,"end",i),qu(a,u.or(a),(function(e,t){var n=o.createRng()
return n.setStart(yl(o,e.container()),e.offset()),n.setEnd(yl(o,t.container()),t.offset()),n}))
if(t.hasOwnProperty("name"))return n=h,r=t,N.from(n.select(r.name)[r.index]).map((function(e){var t=n.createRng()
return t.selectNode(e),t}))
if(t.hasOwnProperty("rng"))return N.some(t.rng)}return N.none()})(e,t).each((function(t){e.setRng(t)}))},El=function(e){return An(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},kl=(ro,function(e){return" "===e}),_l=function(e){return""!==e&&-1!==" \f\n\r\t\v".indexOf(e)},Al=function(e){return!_l(e)&&!kl(e)},Rl=function(e){return!!e.nodeType},Tl=function(e,t,n){var r,o,i,a,u=n.startOffset,s=n.startContainer
if(!(n.startContainer===n.endContainer&&(a=n.startContainer.childNodes[n.startOffset])&&/^(IMG)$/.test(a.nodeName)||1!==s.nodeType))for(u<(i=s.childNodes).length?(s=i[u],r=new qr(s,e.getParent(s,e.isBlock))):(s=i[i.length-1],(r=new qr(s,e.getParent(s,e.isBlock))).next(!0)),o=r.current();o;o=r.next())if(3===o.nodeType&&!Dl(o))return n.setStart(o,0),void t.setRng(n)},Ol=function(e,t,n){if(e){var r=t?"nextSibling":"previousSibling"
for(e=n?e:e[r];e;e=e[r])if(1===e.nodeType||!Dl(e))return e}},Bl=function(e,t){return Rl(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},Pl=function(e,t,n){return e.schema.isValidChild(t,n)},Dl=function(e,t){if(void 0===t&&(t=!1),L(e)&&In(e)){var n=t?e.data.replace(/ /g," "):e.data
return Oo(n)}return!1},Ll=function(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,(function(e,n){return t[n]||e}))),e},Il=function(e,t){return e=""+((e=e||"").nodeName||e),t=""+((t=t||"").nodeName||t),e.toLowerCase()===t.toLowerCase()},Ml=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},Fl=function(e,t,n){return Ml(e,e.getStyle(t,n),n)},Ul=function(e,t){var n
return e.getParent(t,(function(t){return(n=e.getStyle(t,"text-decoration"))&&"none"!==n})),n},zl=function(e,t,n){return e.getParents(t,n,e.getRoot())},jl=function(e,t,n){var r=["inline","block","selector","attributes","styles","classes"],o=function(e){return pe(e,(function(e,t){return V(r,(function(e){return e===t}))}))}
return V(e.formatter.get(t),(function(t){var r=o(t)
return V(e.formatter.get(n),(function(e){var t,n,u,s=o(e)
return t=r,n=s,void 0===u&&(u=a),i(u).eq(t,n)}))}))},Hl=function(e){return ve(e,"block")},Vl=function(e){return ve(e,"selector")},ql=function(e){return ve(e,"inline")},$l=El,Wl=zl,Kl=Dl,Xl=Bl,Yl=function(e,t){for(var n=t;n;){if(An(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t
n=n.parentNode}return t},Gl=function(e,t,n,r){for(var o=t.data,i=n;e?0<=i:i<o.length;e?i--:i++)if(r(o.charAt(i)))return e?i+1:i
return-1},Jl=function(e,t,n){return Gl(e,t,n,(function(e){return kl(e)||_l(e)}))},Ql=function(e,t,n){return Gl(e,t,n,Al)},Zl=function(e,t,n,r,o,i){var a,u=e.getParent(n,e.isBlock)||t,s=function(t,n,r){var i=Vu(e),s=o?i.backwards:i.forwards
return N.from(s(t,n,(function(e,t){return $l(e.parentNode)?-1:r(o,a=e,t)}),u))}
return s(n,r,Jl).bind((function(e){return i?s(e.container,e.offset+(o?-1:0),Ql):N.some(e)})).orThunk((function(){return a?N.some({container:a,offset:o?0:a.length}):N.none()}))},ef=function(e,t,n,r,o){In(r)&&0===r.nodeValue.length&&r[o]&&(r=r[o])
for(var i=Wl(e,r),a=0;a<i.length;a++)for(var u=0;u<t.length;u++){var s=t[u]
if((!("collapsed"in s)||s.collapsed===n.collapsed)&&e.is(i[a],s.selector))return i[a]}return r},tf=function(e,t,n,r){var o,i,a=e.dom,u=a.getRoot()
if(t[0].wrapper||(i=a.getParent(n,t[0].block,u)),i||(o=a.getParent(n,"LI,TD,TH"),i=a.getParent(In(n)?n.parentNode:n,(function(t){return t!==u&&Xl(e,t)}),o)),i&&t[0].wrapper&&(i=Wl(a,i,"ul,ol").reverse()[0]||i),!i)for(i=n;i[r]&&!a.isBlock(i[r])&&(i=i[r],!Il(i,"br")););return i||n},nf=function(e,t,n,r){var o=n.parentNode
return!L(n[r])&&(!(o!==t&&!D(o)&&!e.isBlock(o))||nf(e,t,o,r))},rf=function(e,t,n,r,o){var i,a,u=n,s=o?"previousSibling":"nextSibling",c=e.getRoot()
if(In(n)&&!Kl(n)&&(o?0<r:r<n.data.length))return n
for(;;){if(!t[0].block_expand&&e.isBlock(u))return u
for(i=u[s];i;i=i[s]){var l=In(i)&&!nf(e,c,i,s)
if(!$l(i)&&(!zn(a=i)||!a.getAttribute("data-mce-bogus")||a.nextSibling)&&!Kl(i,l))return u}if(u===c||u.parentNode===c){n=u
break}u=u.parentNode}return n},of=function(e){return $l(e.parentNode)||$l(e)},af=function(e,t,n,r){void 0===r&&(r=!1)
var o=t.startContainer,i=t.startOffset,a=t.endContainer,u=t.endOffset,s=e.dom
return An(o)&&o.hasChildNodes()&&(o=Zu(o,i),In(o)&&(i=0)),An(a)&&a.hasChildNodes()&&(a=Zu(a,t.collapsed?u:u-1),In(a)&&(u=a.nodeValue.length)),o=Yl(s,o),a=Yl(s,a),of(o)&&(o=$l(o)?o:o.parentNode,o=t.collapsed?o.previousSibling||o:o.nextSibling||o,In(o)&&(i=t.collapsed?o.length:0)),of(a)&&(a=$l(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,In(a)&&(u=t.collapsed?0:a.length)),t.collapsed&&(Zl(s,e.getBody(),o,i,!0,r).each((function(e){var t=e.container,n=e.offset
o=t,i=n})),Zl(s,e.getBody(),a,u,!1,r).each((function(e){var t=e.container,n=e.offset
a=t,u=n}))),(n[0].inline||n[0].block_expand)&&(n[0].inline&&In(o)&&0!==i||(o=rf(s,n,o,i,!0)),n[0].inline&&In(a)&&u!==a.nodeValue.length||(a=rf(s,n,a,u,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(o=ef(s,n,t,o,"previousSibling"),a=ef(s,n,t,a,"nextSibling")),(n[0].block||n[0].selector)&&(o=tf(e,n,o,"previousSibling"),a=tf(e,n,a,"nextSibling"),n[0].block&&(s.isBlock(o)||(o=rf(s,n,o,i,!0)),s.isBlock(a)||(a=rf(s,n,a,u,!1)))),An(o)&&(i=s.nodeIndex(o),o=o.parentNode),An(a)&&(u=s.nodeIndex(a)+1,a=a.parentNode),{startContainer:o,startOffset:i,endContainer:a,endOffset:u}},uf=function(e,t){var n=e.childNodes
return t>=n.length?t=n.length-1:t<0&&(t=0),n[t]||e},sf=function(e,t,n){var r=t.startContainer,o=t.startOffset,i=t.endContainer,a=t.endOffset,u=function(e){var t=e[0]
return 3===t.nodeType&&t===r&&o>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===a&&0<e.length&&t===i&&3===t.nodeType&&e.splice(e.length-1,1),e},s=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e)
return r},c=function(e,t){do{if(e.parentNode===t)return e
e=e.parentNode}while(e)},l=function(e,t,r){for(var o=r?"nextSibling":"previousSibling",i=e,a=i.parentNode;i&&i!==t;i=a){a=i.parentNode
var c=s(i===e?i:i[o],o)
c.length&&(r||c.reverse(),n(u(c)))}}
if(1===r.nodeType&&r.hasChildNodes()&&(r=uf(r,o)),1===i.nodeType&&i.hasChildNodes()&&(i=uf(i,a-1)),r===i)return n(u([r]))
for(var f=e.findCommonAncestor(r,i),d=r;d;d=d.parentNode){if(d===i)return l(r,f,!0)
if(d===f)break}for(d=i;d;d=d.parentNode){if(d===r)return l(i,f)
if(d===f)break}var m=c(r,f)||r,p=c(i,f)||i
l(r,m,!0)
var g=s(m===r?m:m.nextSibling,"nextSibling",p===i?p.nextSibling:p)
g.length&&n(u(g)),l(i,p)},cf=function(e){var t=[]
if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n))
return t},lf=function(e,t){var n=Tu(t,"td[data-mce-selected],th[data-mce-selected]")
return 0<n.length?n:function(e){return K(Q(e,(function(e){var t=Qu(e)
return t?[Tt(t)]:[]})),to)}(e)},ff=function(e){return lf(cf(e.selection.getSel()),Tt(e.getBody()))},df=function(e){return Zt(e).fold(c([e]),(function(t){return[e].concat(df(t))}))},mf=function(e){return en(e).fold(c([e]),(function(t){return"br"===It(t)?Kt(t).map((function(t){return[e].concat(mf(t))})).getOr([]):[e].concat(mf(t))}))},pf=function(e,t){return qu((a=(i=t).startContainer,u=i.startOffset,In(a)?0===u?N.some(Tt(a)):N.none():N.from(a.childNodes[u]).map(Tt)),(r=(n=t).endContainer,o=n.endOffset,In(r)?o===r.data.length?N.some(Tt(r)):N.none():N.from(r.childNodes[o-1]).map(Tt)),(function(t,n){var r=G(df(e),f(Dt,t)),o=G(mf(e),f(Dt,n))
return r.isSome()&&o.isSome()})).getOr(!1)
var n,r,o,i,a,u},gf=function(e,t,n,r){var o=n,i=new qr(n,o),a=pe(e.schema.getMoveCaretBeforeOnEnterElements(),(function(e,t){return!H(["td","th","table"],t.toLowerCase())}))
do{if(In(n)&&0!==Et.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length))
if(a[n.nodeName])return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n))}while(n=r?i.next():i.prev())
"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},hf=function(e){var t=e.selection.getSel()
return t&&0<t.rangeCount},vf=function(e,t){var n=ff(e)
0<n.length?$(n,(function(n){var r=n.dom,o=e.dom.createRng()
o.setStartBefore(r),o.setEndAfter(r),t(o,!0)})):t(e.selection.getRng(),!1)},yf=function(e,t,n){var r=js(e,t)
n(r),e.moveToBookmark(r)},bf=($c=zt,"text",{get:function(e){if(!$c(e))throw new Error("Can only get text value of a text node")
return Wc(e).getOr("")},getOption:Wc=function(e){return $c(e)?N.from(e.dom.nodeValue):N.none()},set:function(e,t){if(!$c(e))throw new Error("Can only set raw text value of a text node")
e.dom.nodeValue=t}}),Cf=function(e){return bf.get(e)},wf=function(e,t,n,r){var o=t.uid,i=void 0===o?Mu("mce-annotation"):o,a=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),u=At("span",e)
_u(u,Ou()),Xn(u,""+Pu(),i),Xn(u,""+Bu(),n)
var s,c=r(i,a),l=c.attributes,f=void 0===l?{}:l,d=c.classes,m=void 0===d?[]:d
return Yn(u,f),s=u,$(m,(function(e){_u(s,e)})),u},xf=function(e,t,n,r,o){var i=[],a=wf(e.getDoc(),o,n,r),u=vu(N.none()),s=function(){u.set(N.none())},c=function(e){$(e,l)},l=function(t){var n,r
switch(function(e,t,n,r){return Wt(t).fold((function(){return"skipping"}),(function(o){return"br"===r||zt(a=t)&&Cf(a)===oo?"valid":Ut(i=t)&&Au(i,Ou())?"existing":hl(t.dom)?"caret":Pl(e,n,r)&&Pl(e,It(o),n)?"valid":"invalid-child"
var i,a}))}(e,t,"span",It(t))){case"invalid-child":s()
var o=Jt(t)
c(o),s()
break
case"valid":var l=u.get().getOrThunk((function(){var e=zu(a)
return i.push(e),u.set(N.some(e)),e}))
sn(n=t,r=l),fn(r,n)}}
return sf(e.dom,t,(function(e){var t
s(),t=q(e,Tt),c(t)})),i},Sf=function(e){var t,n=(t={},{register:function(e,n){t[e]={name:e,settings:n}},lookup:function(e){return t.hasOwnProperty(e)?N.from(t[e]).map((function(e){return e.settings})):N.none()}});(function(e,t){e.on("init",(function(){e.serializer.addNodeFilter("span",(function(e){$(e,(function(e){var n
n=e,N.from(n.attr(Bu())).bind(t.lookup).each((function(t){!1===t.persistent&&e.unwrap()}))}))}))}))})(e,n)
var r=function(e,t){var n=vu({}),r=function(e,t){o(e,(function(e){return t(e),e}))},o=function(e,t){var r=n.get(),o=t(r.hasOwnProperty(e)?r[e]:{listeners:[],previous:vu(N.none())})
r[e]=o,n.set(r)},i=Nu((function(){var t,i,a=n.get(),u=(t=ae(a),(i=F.call(t,0)).sort(void 0),i)
$(u,(function(t){o(t,(function(n){var o=n.previous.get()
return Du(e,N.some(t)).fold((function(){var e
o.isSome()&&(r(e=t,(function(t){$(t.listeners,(function(t){return t(!1,e)}))})),n.previous.set(N.none()))}),(function(e){var t,i,a,u=e.uid,s=e.name,c=e.elements
o.is(u)||(i=u,a=c,r(t=s,(function(e){$(e.listeners,(function(e){return e(!0,t,{uid:i,nodes:q(a,(function(e){return e.dom}))})}))})),n.previous.set(N.some(u)))})),{previous:n.previous,listeners:n.listeners}}))}))}),30)
return e.on("remove",(function(){i.cancel()})),e.on("NodeChange",(function(){i.throttle()})),{addListener:function(e,t){o(e,(function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}}))}}}(e)
return{register:function(e,t){n.register(e,t)},annotate:function(t,r){n.lookup(t).each((function(n){(function(e,t,n,r){e.undoManager.transact((function(){var o,i,a,u,s=e.selection,c=s.getRng(),l=0<ff(e).length
c.collapsed&&!l&&(a=af(o=e,i=c,[{inline:!0}]),i.setStart(a.startContainer,a.startOffset),i.setEnd(a.endContainer,a.endOffset),o.selection.setRng(i)),s.getRng().collapsed&&!l?(u=wf(e.getDoc(),r,t,n.decorate),Fu(u,ro),s.getRng().insertNode(u.dom),s.select(u.dom)):yf(s,!1,(function(){vf(e,(function(o){xf(e,o,t,n.decorate,r)}))}))}))})(e,t,n,r)}))},annotationChanged:function(e,t){r.addListener(e,t)},remove:function(t){Du(e,N.some(t)).each((function(e){var t=e.elements
$(t,gn)}))},getAll:function(t){var n,r,o,i,a=(n=t,r=Tt(e.getBody()),o=Tu(r,"["+Bu()+'="'+n+'"]'),i={},$(o,(function(e){var t=Gn(e,Pu()),n=i.hasOwnProperty(t)?i[t]:[]
i[t]=n.concat([e])})),i)
return ce(a,(function(e){return q(e,(function(e){return e.dom}))}))}}},Nf=function(e){return{getBookmark:f(Sl,e),moveToBookmark:f(Nl,e)}}
Nf.isBookmarkNode=El
var Ef=function(e,t){for(;t&&t!==e;){if(Hn(t)||Vn(t))return t
t=t.parentNode}return null},kf=function(e,t,n){if(n.collapsed)return!1
if(Ct.browser.isIE()&&n.startOffset===n.endOffset-1&&n.startContainer===n.endContainer){var r=n.startContainer.childNodes[n.startOffset]
if(An(r))return V(r.getClientRects(),(function(n){return Ju(n,e,t)}))}return V(n.getClientRects(),(function(n){return Ju(n,e,t)}))},_f=function(e,t,n){return e.fire(t,n)},Af={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||Af.metaKeyPressed(e)},metaKeyPressed:function(e){return Ct.mac?e.metaKey:e.ctrlKey&&!e.altKey}},Rf=Vn,Tf=function(e,t){var n,r,o,i,a,u,s,c,l,f,m,p,g,h,v,y="data-mce-selected",b=t.dom,C=Et.each,w=t.getDoc(),x=document,S=Math.abs,N=Math.round,E=t.getBody(),k={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},_=function(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))},A=function(e){return $n(e)||b.hasClass(e,"mce-preview-object")},R=function(e){var n=e.target
!function(e,t){if("longpress"!==e.type&&0!==e.type.indexOf("touch"))return _(e.target)&&!kf(e.clientX,e.clientY,t)
var n=e.touches[0]
return _(e.target)&&!kf(n.clientX,n.clientY,t)}(e,t.selection.getRng())||e.isDefaultPrevented()||t.selection.select(n)},T=function(e){return b.is(e,"figure.image")?[e.querySelector("img")]:b.hasClass(e,"mce-preview-object")&&L(e.firstElementChild)?[e,e.firstElementChild]:[e]},O=function(e){var n=ec(t)
return!!n&&"false"!==e.getAttribute("data-mce-resize")&&e!==t.getBody()&&(b.hasClass(e,"mce-preview-object")?Bt(Tt(e.firstElementChild),n):Bt(Tt(e),n))},B=function(e,n,r){var o
L(r)&&(o=T(e),$(o,(function(e){e.style[n]||!t.schema.isValid(e.nodeName.toLowerCase(),n)?b.setStyle(e,n,r):b.setAttrib(e,n,""+r)})))},P=function(e,t,n){B(e,"width",t),B(e,"height",n)},D=function(e){var a,d,y,C,w,x,k,R=e.screenX-u,T=e.screenY-s
p=R*i[2]+c,g=T*i[3]+l,p=p<5?5:p,g=g<5?5:g,((_(n)||A(n))&&!1!==t.getParam("resize_img_proportional",!0,"boolean")?!Af.modifierPressed(e):Af.modifierPressed(e))&&(S(R)>S(T)?(g=N(p*f),p=N(g/f)):(p=N(g/f),g=N(p*f))),P(r,p,g),a=0<(a=i.startPos.x+R)?a:0,d=0<(d=i.startPos.y+T)?d:0,b.setStyles(o,{left:a,top:d,display:"block"}),o.innerHTML=p+" &times; "+g,i[2]<0&&r.clientWidth<=p&&b.setStyle(r,"left",void 0+(c-p)),i[3]<0&&r.clientHeight<=g&&b.setStyle(r,"top",void 0+(l-g)),(R=E.scrollWidth-h)+(T=E.scrollHeight-v)!=0&&b.setStyles(o,{left:a-R,top:d-T}),m||(y=t,C=n,w=c,x=l,k="corner-"+i.name,y.fire("ObjectResizeStart",{target:C,width:w,height:x,origin:k}),m=!0)},I=function(){var e,u,s,c,l,f=m
m=!1,f&&(B(n,"width",p),B(n,"height",g)),b.unbind(w,"mousemove",D),b.unbind(w,"mouseup",I),x!==w&&(b.unbind(x,"mousemove",D),b.unbind(x,"mouseup",I)),b.remove(r),b.remove(o),b.remove(a),M(n),f&&(e=t,u=n,s=p,c=g,l="corner-"+i.name,e.fire("ObjectResized",{target:u,width:s,height:c,origin:l}),b.setAttrib(n,"style",b.getAttrib(n,"style"))),t.nodeChanged()},M=function(e){j()
var d=b.getPos(e,E),m=d.x,S=d.y,N=e.getBoundingClientRect(),_=N.width||N.right-N.left,R=N.height||N.bottom-N.top
n!==e&&(F(),n=e,p=g=0)
var B=t.fire("ObjectSelected",{target:e}),L=b.getAttrib(n,y,"1")
O(e)&&!B.isDefaultPrevented()?C(k,(function(e,t){var d=b.get("mceResizeHandle"+t)
d&&b.remove(d),d=b.add(E,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),11===Ct.ie&&(d.contentEditable=!1),b.bind(d,"mousedown",(function(d){d.stopImmediatePropagation(),d.preventDefault(),function(d){var p,g=T(n)[0]
u=d.screenX,s=d.screenY,c=g.clientWidth,l=g.clientHeight,f=l/c,(i=e).name=t,i.startPos={x:_*e[0]+m,y:R*e[1]+S},h=E.scrollWidth,v=E.scrollHeight,a=b.add(E,"div",{class:"mce-resize-backdrop"}),b.setStyles(a,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"}),r=A(p=n)?b.create("img",{src:Ct.transparentSrc}):p.cloneNode(!0),b.addClass(r,"mce-clonedresizable"),b.setAttrib(r,"data-mce-bogus","all"),r.contentEditable="false",b.setStyles(r,{left:m,top:S,margin:0}),P(r,_,R),r.removeAttribute(y),E.appendChild(r),b.bind(w,"mousemove",D),b.bind(w,"mouseup",I),x!==w&&(b.bind(x,"mousemove",D),b.bind(x,"mouseup",I)),o=b.add(E,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},c+" &times; "+l)}(d)})),e.elm=d,b.setStyles(d,{left:_*e[0]+m-d.offsetWidth/2,top:R*e[1]+S-d.offsetHeight/2})})):F(),b.getAttrib(n,y)||n.setAttribute(y,L)},F=function(){j(),n&&n.removeAttribute(y),se(k,(function(e,t){var n=b.get("mceResizeHandle"+t)
n&&(b.unbind(n),b.remove(n))}))},U=function(n){var r,o=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)}
m||t.removed||(C(b.select("img[data-mce-selected],hr[data-mce-selected]"),(function(e){e.removeAttribute(y)})),r="mousedown"===n.type?n.target:e.getNode(),o(r=b.$(r).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0],E)&&(H(),o(e.getStart(!0),r)&&o(e.getEnd(!0),r))?M(r):F())},z=function(e){return Rf(Ef(t.getBody(),e))},j=function(){se(k,(function(e){e.elm&&(b.unbind(e.elm),delete e.elm)}))},H=function(){try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(d){}}
return t.on("init",(function(){var e
H(),(Ct.browser.isIE()||Ct.browser.isEdge())&&(t.on("mousedown click",(function(e){var n=e.target,r=n.nodeName
m||!/^(TABLE|IMG|HR)$/.test(r)||z(n)||(2!==e.button&&t.selection.select(n,"TABLE"===r),"mousedown"===e.type&&t.nodeChanged())})),e=function(e){var n=function(e){jr.setEditorTimeout(t,(function(){return t.selection.select(e)}))}
if(z(e.target)||$n(e.target))return e.preventDefault(),void n(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&n(e.target))},b.bind(E,"mscontrolselect",e),t.on("remove",(function(){return b.unbind(E,"mscontrolselect",e)})))
var r=jr.throttle((function(e){t.composing||U(e)}))
t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",r),t.on("keyup compositionend",(function(e){n&&"TABLE"===n.nodeName&&r(e)})),t.on("hide blur",F),t.on("contextmenu longpress",R,!0)})),t.on("remove",j),{isResizable:O,showResizeRect:M,hideResizeRect:F,updateResizeRect:U,destroy:function(){n=r=a=null}}},Of=function(e){return Hn(e)||Vn(e)},Bf=function(e,t,n){var r,i,a,u,s,c=n
if(c.caretPositionFromPoint)(i=c.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(i.offsetNode,i.offset),r.collapse(!0))
else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t)
else if(c.body.createTextRange){r=c.body.createTextRange()
try{r.moveToPoint(e,t),r.collapse(!0)}catch(o){r=function(e,t,n){var r,o=n.elementFromPoint(e,t),i=n.body.createTextRange()
if(o&&"HTML"!==o.tagName||(o=n.body),i.moveToElementText(o),0<(r=(r=Et.toArray(i.getClientRects())).sort((function(e,n){return(e=Math.abs(Math.max(e.top-t,e.bottom-t)))-Math.abs(Math.max(n.top-t,n.bottom-t))}))).length){t=(r[0].bottom+r[0].top)/2
try{return i.moveToPoint(e,t),i.collapse(!0),i}catch(u){}}return null}(e,t,n)}return a=r,u=n.body,s=a&&a.parentElement?a.parentElement():null,Vn(function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(s,u,Of))?null:a}return r},Pf=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},Df=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(e,t,n)},Lf=function(e){return e&&"TABLE"===e.nodeName},If=function(e,t,n){for(var r=new qr(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(zn(t))return!0},Mf=function(e,t,n,r,o){var i,a,u=e.getRoot(),s=e.schema.getNonEmptyElements(),c=e.getParent(o.parentNode,e.isBlock)||u
if(r&&zn(o)&&t&&e.isEmpty(c))return N.some(bs(o.parentNode,e.nodeIndex(o)))
for(var l,f,d=new qr(o,c);a=d[r?"prev":"next"]();){if("false"===e.getContentEditableParent(a)||(f=u,fo(l=a)&&!1===Df(l,f,hl)))return N.none()
if(In(a)&&0<a.nodeValue.length)return!1===function(e,t,n){return Df(e,t,(function(e){return"A"===e.nodeName}))}(a,u)?N.some(bs(a,r?a.nodeValue.length:0)):N.none()
if(e.isBlock(a)||s[a.nodeName.toLowerCase()])return N.none()
i=a}return n&&i?N.some(bs(i,0)):N.none()},Ff=function(e,t,n,r){var o,i,a,u=e.getRoot(),s=!1,c=r[(n?"start":"end")+"Container"],l=r[(n?"start":"end")+"Offset"],f=An(c)&&l===c.childNodes.length,d=e.schema.getNonEmptyElements(),m=n
if(fo(c))return N.none()
if(An(c)&&l>c.childNodes.length-1&&(m=!1),Fn(c)&&(c=u,l=0),c===u){if(m&&(o=c.childNodes[0<l?l-1:0])){if(fo(o))return N.none()
if(d[o.nodeName]||Lf(o))return N.none()}if(c.hasChildNodes()){if(l=Math.min(!m&&0<l?l-1:l,c.childNodes.length-1),c=c.childNodes[l],l=In(c)&&f?c.data.length:0,!t&&c===u.lastChild&&Lf(c))return N.none()
if(function(e,t){for(;t&&t!==e;){if(Vn(t))return!0
t=t.parentNode}return!1}(u,c)||fo(c))return N.none()
if(c.hasChildNodes()&&!1===Lf(c)){var p=new qr(o=c,u)
do{if(Vn(o)||fo(o)){s=!1
break}if(In(o)&&0<o.nodeValue.length){l=m?0:o.nodeValue.length,c=o,s=!0
break}if(d[o.nodeName.toLowerCase()]&&(!(i=o)||!/^(TD|TH|CAPTION)$/.test(i.nodeName))){l=e.nodeIndex(o),c=o.parentNode,m||l++,s=!0
break}}while(o=m?p.next():p.prev())}}}return t&&(In(c)&&0===l&&Mf(e,f,t,!0,c).each((function(e){c=e.container(),l=e.offset(),s=!0})),An(c)&&(!(o=(o=c.childNodes[l])||c.childNodes[l-1])||!zn(o)||("A",(a=o).previousSibling&&"A"===a.previousSibling.nodeName)||If(e,o,!1)||If(e,o,!0)||Mf(e,f,t,!0,o).each((function(e){c=e.container(),l=e.offset(),s=!0})))),m&&!t&&In(c)&&l===c.nodeValue.length&&Mf(e,f,t,!1,c).each((function(e){c=e.container(),l=e.offset(),s=!0})),s?N.some(bs(c,l)):N.none()},Uf=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=bs.fromRangeStart(t)
return Ff(e,n,!0,r).each((function(e){n&&bs.isAbove(o,e)||r.setStart(e.container(),e.offset())})),n||Ff(e,n,!1,r).each((function(e){r.setEnd(e.container(),e.offset())})),n&&r.collapse(!0),Pf(t,r)?N.none():N.some(r)},zf=function(e,t){return e.splitText(t)},jf=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset
return t===r&&In(t)?0<n&&n<t.nodeValue.length&&(t=(r=zf(t,n)).previousSibling,n<o?(t=r=zf(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(In(t)&&0<n&&n<t.nodeValue.length&&(t=zf(t,n),n=0),In(r)&&0<o&&o<r.nodeValue.length&&(o=(r=zf(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}},Hf=function(e){return{walk:function(t,n){return sf(e,t,n)},split:jf,normalize:function(t){return Uf(e,t).fold(b,(function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0}))}}}
Hf.compareRanges=Pf,Hf.getCaretRangeFromPoint=Bf,Hf.getSelectedNode=Qu,Hf.getNode=Zu
var Vf,qf,$f,Wf,Kf,Xf=(Vf="height",qf=function(e){var t=e.dom
return hn(e)?t.getBoundingClientRect().height:t.offsetHeight},{set:function(e,t){if(!M(t)&&!t.match(/^[0-9]+$/))throw new Error(Vf+".set accepts only positive integer values. Value was "+t)
var n=e.dom
Wn(n)&&(n.style[Vf]=t+"px")},get:$f=function(e){var t=qf(e)
if(t<=0||null===t){var n=Zn(e,Vf)
return parseFloat(n)||0}return t},getOuter:$f,aggregate:Wf=function(e,t){return Y(t,(function(t,n){var r=Zn(e,n),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)},max:function(e,t,n){var r=Wf(e,n)
return r<t?t-r:0}}),Yf=function(e,t){return e.view(t).fold(c([]),(function(t){var n=e.owner(t),r=Yf(e,n)
return[t].concat(r)}))},Gf=Object.freeze({__proto__:null,view:function(e){var t
return(e.dom===document?N.none():N.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(Tt)},owner:qt}),Jf=function(e){return"textarea"===It(e)},Qf=function(e,t){var n,r=function(e){var t=e.dom.ownerDocument,n=t.body,r=t.defaultView,o=t.documentElement
if(n===e.dom)return yn(n.offsetLeft,n.offsetTop)
var i=bn(null==r?void 0:r.pageYOffset,o.scrollTop),a=bn(null==r?void 0:r.pageXOffset,o.scrollLeft),u=bn(o.clientTop,n.clientTop),s=bn(o.clientLeft,n.clientLeft)
return Cn(e).translate(a-s,i-u)}(e),o=(n=e,Xf.get(n))
return{element:e,bottom:r.top+o,height:o,pos:r,cleanup:t}},Zf=function(e,t,n,r){rd(e,(function(o,i){return td(e,t,n,r)}),n)},ed=function(e,t,n,r,o){var i,a,u={elm:r.element.dom,alignToTop:o}
i=u,e.fire("ScrollIntoView",i).isDefaultPrevented()||(n(t,wn(t).top,r,o),a=u,e.fire("AfterScrollIntoView",a))},td=function(e,t,n,r){var o=Tt(e.getBody()),i=Tt(e.getDoc())
o.dom.offsetWidth
var a=function(e,t){var n=function(e,t){var n=Jt(e)
if(0===n.length||Jf(e))return{element:e,offset:t}
if(t<n.length&&!Jf(n[t]))return{element:n[t],offset:0}
var r=n[n.length-1]
return Jf(r)?{element:e,offset:t}:"img"===It(r)?{element:r,offset:1}:zt(r)?{element:r,offset:Cf(r).length}:{element:r,offset:Jt(r).length}}(e,t),r=_t('<span data-mce-bogus="all">\ufeff</span>')
return sn(n.element,r),Qf(r,(function(){return pn(r)}))}(Tt(n.startContainer),n.startOffset)
ed(e,i,t,a,r),a.cleanup()},nd=function(e,t,n,r){var o=Tt(e.getDoc())
ed(e,o,n,Qf(Tt(t),u),r)},rd=function(e,t,n){var r=n.startContainer,o=n.startOffset,i=n.endContainer,a=n.endOffset
t(Tt(r),Tt(i))
var u=e.dom.createRng()
u.setStart(r,o),u.setEnd(i,a),e.selection.setRng(n)},od=function(e,t,n,r){var o,i=e.pos
n?xn(i.left,i.top,r):(o=i.top-t+e.height,xn(i.left,o,r))},id=function(e,t,n,r,o){var i=n+t,a=r.pos.top,u=r.bottom,s=n<=u-a
a<t?od(r,n,!1!==o,e):i<a?od(r,n,s?!1!==o:!0===o,e):i<u&&!s&&od(r,n,!0===o,e)},ad=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
id(e,t,o,n,r)},ud=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
id(e,t,o,n,r)
var i=function(e){var t,n,r,o=Tt(document),i=wn(o),a=(t=e,r=(n=Gf).owner(t),Yf(n,r)),u=Cn(e),s=X(a,(function(e,t){var n=Cn(t)
return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0})
return yn(s.left+u.left+i.left,s.top+u.top+i.top)}(n.element),a=En(window)
i.top<a.y?Sn(n.element,!1!==r):i.top>a.bottom&&Sn(n.element,!0===r)},sd=function(e,t,n){return Zf(e,ad,t,n)},cd=function(e,t,n){return nd(e,t,ad,n)},ld=function(e,t,n){return Zf(e,ud,t,n)},fd=function(e,t,n){return nd(e,t,ud,n)},dd=function(e,t,n){(e.inline?sd:ld)(e,t,n)},md=function(e){var t=on(e).dom
return e.dom===t.activeElement},pd=function(e){return void 0===e&&(e=Tt(document)),N.from(e.dom.activeElement).map(Tt)},gd=vr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),hd=(gd.before,gd.on,gd.after,vr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}])),vd=(hd.domRange,hd.relative,hd.exact,function(e,t,n,r){return{start:e,soffset:t,finish:n,foffset:r}}),yd=ft().browser,bd=function(e,t){var n=zt(t)?Cf(t).length:Jt(t).length+1
return n<e?n:e<0?0:e},Cd=function(e){return vd(e.start,bd(e.soffset,e.start),e.finish,bd(e.foffset,e.finish))},wd=function(e,t){return!_n(t.dom)&&(Lt(e,t)||Dt(e,t))},xd=function(e){return function(t){return wd(e,t.start)&&wd(e,t.finish)}},Sd=function(e){return!0===e.inline||yd.isIE()},Nd=function(e){return vd(Tt(e.startContainer),e.startOffset,Tt(e.endContainer),e.endOffset)},Ed=function(e){var t=document.createRange()
try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),N.some(t)}catch(m){return N.none()}},kd=function(e){var t=Sd(e)?function(e){var t
return((t=$t(e).dom.getSelection())&&0!==t.rangeCount?N.from(t.getRangeAt(0)):N.none()).map(Nd).filter(xd(e))}(Tt(e.getBody())):N.none()
e.bookmark=t.isSome()?t:e.bookmark},_d=function(e){return(e.bookmark?e.bookmark:N.none()).bind((function(t){return n=Tt(e.getBody()),r=t,N.from(r).filter(xd(n)).map(Cd)
var n,r})).bind(Ed)},Ad={isEditorUIElement:function(e){var t=e.className.toString()
return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},Rd=function(e){var t=Su((function(){kd(e)}),0)
e.on("init",(function(){var n,r,o
e.inline&&(n=e,r=t,o=function(){r.throttle()},fu.DOM.bind(document,"mouseup",o),n.on("remove",(function(){fu.DOM.unbind(document,"mouseup",o)}))),function(e,t){var n,r
ft().browser.isIE()?(r=e).on("focusout",(function(){kd(r)})):(n=t,e.on("mouseup touchend",(function(e){n.throttle()}))),e.on("keyup NodeChange",(function(t){var n
"nodechange"===(n=t).type&&n.selectionChange||kd(e)}))}(e,t)})),e.on("remove",(function(){t.cancel()}))},Td=fu.DOM,Od=function(e,t){var n=e.getParam("custom_ui_selector","","string")
return null!==Td.getParent(t,(function(t){return Ad.isEditorUIElement(t)||!!n&&e.dom.is(t,n)}))},Bd=function(e,t){var n=t.editor
Rd(n),n.on("focusin",(function(){var t=e.focusedEditor
t!==n&&(t&&t.fire("blur",{focusedEditor:n}),e.setActive(n),(e.focusedEditor=n).fire("focus",{blurredEditor:t}),n.focus(!0))})),n.on("focusout",(function(){jr.setEditorTimeout(n,(function(){var t=e.focusedEditor
Od(n,function(t){try{var n=on(Tt(t.getElement()))
return pd(n).fold((function(){return document.body}),(function(e){return e.dom}))}catch(e){return document.body}}(n))||t!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),Kf||(Kf=function(t){var n=e.activeEditor
n&&function(e){if(rn()&&L(e.target)){var t=Tt(e.target)
if(Ut(t)&&function(e){return L(e.dom.shadowRoot)}(t)&&e.composed&&e.composedPath){var n=e.composedPath()
if(n)return re(n)}}return N.from(e.target)}(t).each((function(t){t.ownerDocument===document&&(t===document.body||Od(n,t)||e.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))}))},Td.bind(document,"focusin",Kf))},Pd=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(Td.unbind(document,"focusin",Kf),Kf=null)},Dd=function(e,t){(function(e,t){return((n=t).collapsed?N.from(Zu(n.startContainer,n.startOffset)).map(Tt):N.none()).bind((function(t){return eo(t)?N.some(t):!1===Lt(e,t)?N.some(e):N.none()}))
var n})(Tt(e.getBody()),t).bind((function(e){return ml(e.dom)})).fold((function(){e.selection.normalize()}),(function(t){return e.selection.setRng(t.toRange())}))},Ld=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},Id=function(e){return e.inline?(n=e.getBody())&&function(e){return md(e)||pd(on(t=e)).filter((function(e){return t.dom.contains(e.dom)})).isSome()
var t}(Tt(n)):(t=e).iframeElement&&md(Tt(t.iframeElement))
var t,n},Md=function(e){var t=e.selection,n=e.getBody(),r=t.getRng()
e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===Id(e)&&_d(e).each((function(t){e.selection.setRng(t),r=t}))
var o,i,a=(o=e,i=t.getNode(),o.dom.getParent(i,(function(e){return"true"===o.dom.getContentEditable(e)})))
if(e.$.contains(n,a))return Ld(a),Dd(e,r),void Fd(e)
e.inline||(Ct.opera||Ld(n),e.getWin().focus()),(Ct.gecko||e.inline)&&(Ld(n),Dd(e,r)),Fd(e)},Fd=function(e){return e.editorManager.setActive(e)},Ud=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset
return N.from(i).map(Tt).map((function(e){return r&&t.collapsed?e:Qt(e,o(e,a)).getOr(e)})).bind((function(e){return Ut(e)?N.some(e):Wt(e).filter(Ut)})).map((function(e){return e.dom})).getOr(e)},zd=function(e,t,n){return Ud(e,t,!0,n,(function(e,t){return Math.min(e.dom.childNodes.length,t)}))},jd=function(e,t,n){return Ud(e,t,!1,n,(function(e,t){return 0<t?t-1:t}))},Hd=function(e,t){for(var n=e;e&&In(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling
return e||n},Vd=function(e,t){return q(t,(function(t){var n=e.fire("GetSelectionRange",{range:t})
return n.range!==t?n.range:t}))},qd={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},$d=function(e,t,n){var r=n?"lastChild":"firstChild",o=n?"prev":"next"
if(e[r])return e[r]
if(e!==t){var i=e[o]
if(i)return i
for(var a=e.parent;a&&a!==t;a=a.parent)if(i=a[o])return i}},Wd=function(e){var t="a"===e.name&&!e.attr("href")&&e.attr("id")
return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t},Kd=(Xd.create=function(e,t){var n=new Xd(e,qd[e]||1)
return t&&se(t,(function(e,t){n.attr(t,e)})),n},Xd.prototype.replace=function(e){return e.parent&&e.remove(),this.insert(e,this),this.remove(),this},Xd.prototype.attr=function(e,t){var n,r=this
if("string"!=typeof e)return null!=e&&se(e,(function(e,t){r.attr(t,e)})),r
if(n=r.attributes){if(void 0===t)return n.map[e]
if(null===t){if(e in n.map){delete n.map[e]
for(var o=n.length;o--;)if(n[o].name===e)return n.splice(o,1),r}return r}if(e in n.map){for(o=n.length;o--;)if(n[o].name===e){n[o].value=t
break}}else n.push({name:e,value:t})
return n.map[e]=t,r}},Xd.prototype.clone=function(){var e,t=new Xd(this.name,this.type)
if(e=this.attributes){var n=[]
n.map={}
for(var r=0,o=e.length;r<o;r++){var i=e[r]
"id"!==i.name&&(n[n.length]={name:i.name,value:i.value},n.map[i.name]=i.value)}t.attributes=n}return t.value=this.value,t.shortEnded=this.shortEnded,t},Xd.prototype.wrap=function(e){return this.parent.insert(e,this),e.append(this),this},Xd.prototype.unwrap=function(){for(var e=this.firstChild;e;){var t=e.next
this.insert(e,this,!0),e=t}this.remove()},Xd.prototype.remove=function(){var e=this.parent,t=this.next,n=this.prev
return e&&(e.firstChild===this?(e.firstChild=t)&&(t.prev=null):n.next=t,e.lastChild===this?(e.lastChild=n)&&(n.next=null):t.prev=n,this.parent=this.next=this.prev=null),this},Xd.prototype.append=function(e){e.parent&&e.remove()
var t=this.lastChild
return t?((t.next=e).prev=t,this.lastChild=e):this.lastChild=this.firstChild=e,e.parent=this,e},Xd.prototype.insert=function(e,t,n){e.parent&&e.remove()
var r=t.parent||this
return n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,(e.next=t).prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,(e.prev=t).next=e),e.parent=r,e},Xd.prototype.getAll=function(e){for(var t=[],n=this.firstChild;n;n=$d(n,this))n.name===e&&t.push(n)
return t},Xd.prototype.empty=function(){if(this.firstChild){for(var e=[],t=this.firstChild;t;t=$d(t,this))e.push(t)
for(var n=e.length;n--;)(t=e[n]).parent=t.firstChild=t.lastChild=t.next=t.prev=null}return this.firstChild=this.lastChild=null,this},Xd.prototype.isEmpty=function(e,t,n){void 0===t&&(t={})
var r=this.firstChild
if(Wd(this))return!1
if(r)do{if(1===r.type){if(r.attr("data-mce-bogus"))continue
if(e[r.name])return!1
if(Wd(r))return!1}if(8===r.type)return!1
if(3===r.type&&!function(e){if(Oo(e.value)){var t=e.parent
return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)}}(r))return!1
if(3===r.type&&r.parent&&t[r.parent.name]&&Oo(r.value))return!1
if(n&&n(r))return!1}while(r=$d(r,this))
return!0},Xd.prototype.walk=function(e){return $d(this,null,e)},Xd)
function Xd(e,t){this.name=e,1===(this.type=t)&&(this.attributes=[],this.attributes.map={})}var Yd=function(e,t){return e.replace(t.re,(function(e){return ge(t.uris,e).getOr(e)}))},Gd=["img","video"],Jd=function(e,t,n){return!e.allow_html_data_urls&&(/^data:image\//i.test(t)?(r=e.allow_svg_data_urls,o=n,!(D(r)?H(Gd,o):r)&&/^data:image\/svg\+xml/i.test(t)):/^data:/i.test(t))
var r,o},Qd=function(e,t,n){var r,o,i=1,a=e.getShortEndedElements(),u=/<([!?\/])?([A-Za-z0-9\-_:.]+)(\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g
for(u.lastIndex=r=n;o=u.exec(t);){if(r=u.lastIndex,"/"===o[1])i--
else if(!o[1]){if(o[2]in a)continue
i++}if(0===i)break}return r},Zd=function(e,t){void 0===t&&(t=ci()),!1!==(e=e||{}).fix_self_closing&&(e.fix_self_closing=!0)
var n=e.comment?e.comment:u,r=e.cdata?e.cdata:u,o=e.text?e.text:u,i=e.start?e.start:u,a=e.end?e.end:u,s=e.pi?e.pi:u,c=e.doctype?e.doctype:u
return{parse:function(u,l){void 0===l&&(l="html"),function(u,l){void 0===l&&(l="html")
for(var f,d,m,p,g,h,v,y,b,C,w,x,S,N,E,k,_,A,R,T=u.html,O=0,B=[],P=0,D=Zo.decode,L=Et.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),I=/((java|vb)script|mhtml):/i,M="html"===l?0:1,F=function(e){for(var t,n=B.length;n--&&B[n].name!==e;);if(0<=n){for(t=B.length-1;n<=t;t--)(e=B[t]).valid&&a(e.name)
B.length=n}},U=function(e,t){return o(Yd(e,u),t)},z=function(t){""!==t&&(">"===t.charAt(0)&&(t=" "+t),e.allow_conditional_comments||"[if"!==t.substr(0,3).toLowerCase()||(t=" "+t),n(Yd(t,u)))},j=function(e,t){var n=e||"",r=!ze(n,"--"),o=function(e,t,n){void 0===n&&(n=0)
var r=e.toLowerCase()
if(-1!==r.indexOf("[if ",n)&&(u=n,/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))){var o=r.indexOf("[endif]",n)
return r.indexOf(">",o)}if(t){var i=r.indexOf(">",n)
return-1!==i?i:r.length}var a=/--!?>/g
a.lastIndex=n
var u,s=a.exec(e)
return s?s.index+s[0].length:r.length}(T,r,t)
return e=T.substr(t,o-t),z(r?n+e:e),o+1},H=function(t,n,r,o,i){var a,s,c,l
if(c=(n=n.toLowerCase())in K?n:D(r||o||i||""),r=Yd(c,u),X&&!y&&0==(0===(l=n).indexOf("data-")||0===l.indexOf("aria-"))){if(!(a=N[n])&&E){for(s=E.length;s--&&!(a=E[s]).pattern.test(n););-1===s&&(a=null)}if(!a)return
if(a.validValues&&!(r in a.validValues))return}if(L[n]&&!e.allow_script_urls){var f=r.replace(/[\s\u0000-\u001F]+/g,"")
try{f=decodeURIComponent(f)}catch(x){f=unescape(f)}if(I.test(f))return
if(Jd(e,f,t))return}y&&(n in L||0===n.indexOf("on"))||(p.map[n]=r,p.push({name:n,value:r}))},V=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))","g"),q=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,$=t.getShortEndedElements(),W=e.self_closing_elements||t.getSelfClosingElements(),K=t.getBoolAttrs(),X=e.validate,Y=e.remove_internals,G=e.fix_self_closing,J=t.getSpecialElements(),Q=T+">";f=V.exec(Q);){var Z=f[0]
if(O<f.index&&U(D(T.substr(O,f.index-O))),d=f[7])":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),F(d)
else if(d=f[8]){if(f.index+Z.length>T.length){U(D(T.substr(f.index))),O=f.index+Z.length
continue}":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),b=d in $,G&&W[d]&&0<B.length&&B[B.length-1].name===d&&F(d)
var ee=function(e,t){var n=e.exec(t)
if(n){var r=n[1],o=n[2]
return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null}(q,f[9])
if(null!==ee){if("all"===ee){O=Qd(t,T,V.lastIndex),V.lastIndex=O
continue}w=!1}if(!X||(C=t.getElementRule(d))){if(w=!0,X&&(N=C.attributes,E=C.attributePatterns),(S=f[9])?((y=-1!==S.indexOf("data-mce-type"))&&Y&&(w=!1),(p=[]).map={},S.replace(q,(function(e,t,n,r,o){return H(d,t,n,r,o),""}))):(p=[]).map={},X&&!y){if(k=C.attributesRequired,_=C.attributesDefault,A=C.attributesForced,C.removeEmptyAttrs&&!p.length&&(w=!1),A)for(g=A.length;g--;)v=(x=A[g]).name,"{$uid}"===(R=x.value)&&(R="mce_"+P++),p.map[v]=R,p.push({name:v,value:R})
if(_)for(g=_.length;g--;)(v=(x=_[g]).name)in p.map||("{$uid}"===(R=x.value)&&(R="mce_"+P++),p.map[v]=R,p.push({name:v,value:R}))
if(k){for(g=k.length;g--&&!(k[g]in p.map););-1===g&&(w=!1)}if(x=p.map["data-mce-bogus"]){if("all"===x){O=Qd(t,T,V.lastIndex),V.lastIndex=O
continue}w=!1}}w&&i(d,p,b)}else w=!1
if(m=J[d]){m.lastIndex=O=f.index+Z.length,O=(f=m.exec(T))?(w&&(h=T.substr(O,f.index-O)),f.index+f[0].length):(h=T.substr(O),T.length),w&&(0<h.length&&U(h,!0),a(d)),V.lastIndex=O
continue}b||(S&&S.indexOf("/")===S.length-1?w&&a(d):B.push({name:d,valid:w}))}else if(d=f[1])z(d)
else if(d=f[2]){if(!(1==M||e.preserve_cdata||0<B.length&&t.isValidChild(B[B.length-1].name,"#cdata"))){O=j("",f.index+2),V.lastIndex=O
continue}r(d)}else if(d=f[3])c(d)
else{if((d=f[4])||"<!"===Z){O=j(d,f.index+Z.length),V.lastIndex=O
continue}if(d=f[5]){if(1!=M){O=j("?",f.index+2),V.lastIndex=O
continue}s(d,f[6])}}O=f.index+Z.length}for(O<T.length&&U(D(T.substr(O))),g=B.length-1;0<=g;g--)(d=B[g]).valid&&a(d.name)}(function(e){for(var t,n=/data:[^;]+;base64,([a-z0-9\+\/=]+)/gi,r=[],o={},i=Mu("img"),a=0,u=0;t=n.exec(e);){var s=t[0],c=i+"_"+u++
o[c]=s,a<t.index&&r.push(e.substr(a,t.index-a)),r.push(c),a=t.index+s.length}var l=new RegExp(i+"_[0-9]+","g")
return 0===a?{prefix:i,uris:o,html:e,re:l}:(a<e.length&&r.push(e.substr(a)),{prefix:i,uris:o,html:r.join(""),re:l})}(u),l)}}}
Zd.findEndTag=Qd
var em,tm=function(e,t){var n,r,o,i,a,u,s,c=t,l=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,f=e.schema
a=e.getTempAttrs(),u=c,s=new RegExp(["\\s?("+a.join("|")+')="[^"]+"'].join("|"),"gi"),c=u.replace(s,"")
for(var d=f.getShortEndedElements();i=l.exec(c);)r=l.lastIndex,o=i[0].length,n=d[i[1]]?r:Zd.findEndTag(f,c,r),c=c.substring(0,r-o)+c.substring(n),l.lastIndex=r-o
return ao(c)},nm=tm,rm=Et.each,om=function(e){return{compare:function(t,n){if(t.nodeName!==n.nodeName)return!1
var r=function(t){var n={}
return rm(e.getAttribs(t),(function(r){var o=r.nodeName.toLowerCase()
0!==o.indexOf("_")&&"style"!==o&&0!==o.indexOf("data-")&&(n[o]=e.getAttrib(t,o))})),n},o=function(e,t){var n,r
for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1
if(e[r]!==n)return!1
delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1
return!0}
return!(!o(r(t),r(n))||!o(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))||El(t)||El(n))}}},im=Et.makeMap,am=function(e){var t=[],n=(e=e||{}).indent,r=im(e.indent_before||""),o=im(e.indent_after||""),i=Zo.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="html"===e.element_format
return{start:function(e,u,s){var c,l,f,d
if(n&&r[e]&&0<t.length&&0<(d=t[t.length-1]).length&&"\n"!==d&&t.push("\n"),t.push("<",e),u)for(c=0,l=u.length;c<l;c++)f=u[c],t.push(" ",f.name,'="',i(f.value,!0),'"')
t[t.length]=!s||a?">":" />",s&&n&&o[e]&&0<t.length&&0<(d=t[t.length-1]).length&&"\n"!==d&&t.push("\n")},end:function(e){var r
t.push("</",e,">"),n&&o[e]&&0<t.length&&0<(r=t[t.length-1]).length&&"\n"!==r&&t.push("\n")},text:function(e,n){0<e.length&&(t[t.length]=n?e:i(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,r){r?t.push("<?",e," ",i(r),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}},um=function(e,t){void 0===t&&(t=ci())
var n=am(e)
return(e=e||{}).validate=!("validate"in e)||e.validate,{serialize:function(r){var o=e.validate,i={3:function(e){n.text(e.value,e.raw)},8:function(e){n.comment(e.value)},7:function(e){n.pi(e.name,e.value)},10:function(e){n.doctype(e.value)},4:function(e){n.cdata(e.value)},11:function(e){if(e=e.firstChild)for(;a(e),e=e.next;);}}
n.reset()
var a=function(e){var r,u,s,c,l,f,d,m,p,g=i[e.type]
if(g)g(e)
else{if(r=e.name,u=e.shortEnded,s=e.attributes,o&&s&&1<s.length&&((f=[]).map={},p=t.getElementRule(e.name))){for(d=0,m=p.attributesOrder.length;d<m;d++)(c=p.attributesOrder[d])in s.map&&(l=s.map[c],f.map[c]=l,f.push({name:c,value:l}))
for(d=0,m=s.length;d<m;d++)(c=s[d].name)in f.map||(l=s.map[c],f.map[c]=l,f.push({name:c,value:l}))
s=f}if(n.start(e.name,s,u),!u){if(e=e.firstChild)for(;a(e),e=e.next;);n.end(r)}}}
return 1!==r.type||e.inner?i[11](r):a(r),n.getContent()}}},sm=function(e,t,n){return N.from(n.container()).filter(In).exists((function(r){var o=e?0:-1
return t(r.data.charAt(n.offset()+o))}))},cm=f(sm,!0,_l),lm=f(sm,!1,_l),fm=function(e){var t=e.container()
return In(t)&&(0===t.data.length||io(t.data)&&Nf.isBookmarkNode(t.parentNode))},dm=function(e,t){return function(n){return N.from(Dc(e?0:-1,n)).filter(t).isSome()}},mm=function(e){return jn(e)&&"block"===Zn(Tt(e),"display")},pm=function(e){return Vn(e)&&!(An(t=e)&&"all"===t.getAttribute("data-mce-bogus"))
var t},gm=dm(!0,mm),hm=dm(!1,mm),vm=dm(!0,$n),ym=dm(!1,$n),bm=dm(!0,Pn),Cm=dm(!1,Pn),wm=dm(!0,pm),xm=dm(!1,pm),Sm=function(e){mn(e),fn(e,_t('<br data-mce-bogus="1">'))},Nm=function(e){en(e).each((function(t){Kt(t).each((function(n){Xr(e)&&Gr(t)&&Xr(n)&&pn(t)}))}))},Em=function(e,t){return function(e,t,n){return Lt(t,e)?function(e,t){for(var n=I(t)?t:b,r=e.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,a=Tt(i)
if(o.push(a),!0===n(a))break
r=i}return o}(e,(function(e){return n(e)||Dt(e,t)})).slice(0,-1):[]}(e,t,b)},km=function(e,t){return[e].concat(Em(e,t))},_m=function(e,t,n){return cl(e,t,n,fm)},Am=function(e,t){return G(km(Tt(t.container()),e),Xr)},Rm=function(e,t,n){return _m(e,t.dom,n).forall((function(e){return Am(t,n).fold((function(){return!1===Pc(e,n,t.dom)}),(function(r){return!1===Pc(e,n,t.dom)&&Lt(r,Tt(e.container()))}))}))},Tm=function(e,t,n){return Am(t,n).fold((function(){return _m(e,t.dom,n).forall((function(e){return!1===Pc(e,n,t.dom)}))}),(function(t){return _m(e,t.dom,n).isNone()}))},Om=f(Tm,!1),Bm=f(Tm,!0),Pm=f(Rm,!1),Dm=f(Rm,!0),Lm=function(e){return Hc(e).exists(Gr)},Im=function(e,t,n){var r=K(km(Tt(n.container()),t),Xr),o=re(r).getOr(t)
return ul(e,o.dom,n).filter(Lm)},Mm=function(e,t){return Hc(t).exists(Gr)||Im(!0,e,t).isSome()},Fm=function(e,t){return n=t,N.from(n.getNode(!0)).map(Tt).exists(Gr)||Im(!1,e,t).isSome()
var n},Um=f(Im,!1),zm=f(Im,!0),jm=function(e){return bs.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},Hm=function(e,t){var n=K(km(Tt(t.container()),e),Xr)
return re(n).getOr(e)},Vm=function(e,t){return jm(t)?lm(t):lm(t)||dl(Hm(e,t).dom,t).exists(lm)},qm=function(e,t){return jm(t)?cm(t):cm(t)||fl(Hm(e,t).dom,t).exists(cm)},$m=function(e){return Hc(e).bind((function(e){return _r(e,Ut)})).exists((function(e){return t=Zn(e,"white-space"),H(["pre","pre-wrap"],t)
var t}))},Wm=function(e,t){return!$m(t)&&(Om(e,t)||Pm(e,t)||Fm(e,t)||Vm(e,t))},Km=function(e,t){return!$m(t)&&(Bm(e,t)||Dm(e,t)||Mm(e,t)||qm(e,t))},Xm=function(e,t){return Wm(e,t)||Km(e,(r=(n=t).container(),o=n.offset(),In(r)&&o<r.data.length?bs(r,o+1):n))
var n,r,o},Ym=function(e,t){return kl(e.charAt(t))},Gm=function(e){var t=e.container()
return In(t)&&Ue(t.data,ro)},Jm=function(e,t){return N.some(t).filter(Gm).bind((function(t){var n,r,o,i,a,u,s,c,l=t.container()
return a=e,s=(u=l).data,c=bs(u,0),Ym(s,0)&&!Xm(a,c)&&(u.data=" "+s.slice(1),1)||function(e){var t,n=e.data,r=(t=n.split(""),q(t,(function(e,n){return kl(e)&&0<n&&n<t.length-1&&Al(t[n-1])&&Al(t[n+1])?" ":e})).join(""))
return r!==n&&(e.data=r,!0)}(l)||(n=e,o=(r=l).data,i=bs(r,o.length-1),Ym(o,o.length-1)&&!Xm(n,i)&&(r.data=o.slice(0,-1)+" ",1))?N.some(t):N.none()}))},Qm=function(e){var t=Tt(e.getBody())
e.selection.isCollapsed()&&Jm(t,bs.fromRangeStart(e.selection.getRng())).each((function(t){e.selection.setRng(t.toRange())}))},Zm=function(e,t,n){var r,o,i,a,u,s,c,l
0!==n&&(r=Tt(e),o=kr(r,Xr).getOr(r),i=e.data.slice(t,t+n),a=t+n>=e.data.length&&Km(o,bs(e,e.data.length)),u=0===t&&Wm(o,bs(e,0)),e.replaceData(t,n,(c=u,l=a,Y(s=i,(function(e,t){return _l(t)||kl(t)?e.previousCharIsSpace||""===e.str&&c||e.str.length===s.length-1&&l?{previousCharIsSpace:!1,str:e.str+ro}:{previousCharIsSpace:!0,str:e.str+" "}:{previousCharIsSpace:!1,str:e.str+t}}),{previousCharIsSpace:!1,str:""}).str)))},ep=function(e,t){var n=e.data.slice(t),r=n.length-Ve(n).length
return Zm(e,t,r)},tp=function(e,t){var n=e.data.slice(0,t),r=n.length-qe(n).length
return Zm(e,t-r,r)},np=function(e,t,n,r){void 0===r&&(r=!0)
var o=qe(e.data).length,i=r?e:t,a=r?t:e
return r?i.appendData(a.data):i.insertData(0,a.data),pn(Tt(a)),n&&ep(i,o),i},rp=function(e,t){return r=e,o=(n=t).container(),i=n.offset(),!1===bs.isTextPosition(n)&&o===r.parentNode&&i>bs.before(r).offset()?bs(t.container(),t.offset()-1):t
var n,r,o,i},op=function(e){return _o(e.previousSibling)?N.some((t=e.previousSibling,In(t)?bs(t,t.data.length):bs.after(t))):e.previousSibling?pl(e.previousSibling):N.none()
var t},ip=function(e){return _o(e.nextSibling)?N.some((t=e.nextSibling,In(t)?bs(t,0):bs.before(t))):e.nextSibling?ml(e.nextSibling):N.none()
var t},ap=function(e,t){return op(t).orThunk((function(){return ip(t)})).orThunk((function(){return n=e,r=t,o=bs.before(r.previousSibling?r.previousSibling:r.parentNode),dl(n,o).fold((function(){return fl(n,bs.after(r))}),N.some)
var n,r,o}))},up=function(e,t){return ip(t).orThunk((function(){return op(t)})).orThunk((function(){return r=t,fl(n=e,bs.after(r)).fold((function(){return dl(n,bs.before(r))}),N.some)
var n,r}))},sp=function(e,t,n){return(e?up:ap)(t,n).map(f(rp,n))},cp=function(e,t,n){n.fold((function(){e.focus()}),(function(n){e.selection.setRng(n.toRange(),t)}))},lp=function(e,t){return t&&he(e.schema.getBlockElements(),It(t))},fp=function(e){if(Io(e)){var t=_t('<br data-mce-bogus="1">')
return mn(e),fn(e,t),N.some(bs.before(t.dom))}return N.none()},dp=function(e,t,n,r){void 0===r&&(r=!0)
var o,i,a=sp(t,e.getBody(),n.dom),u=kr(n,f(lp,e),(o=e.getBody(),function(e){return e.dom===o})),s=function(e,t,n){var r,o,i,a,u=Kt(e).filter(zt),s=Xt(e).filter(zt)
return pn(e),o=s,i=t,a=function(e,t,r){var o=e.dom,i=t.dom,a=o.data.length
return np(o,i,n),r.container()===i?bs(o,a):r},((r=u).isSome()&&o.isSome()&&i.isSome()?N.some(a(r.getOrDie(),o.getOrDie(),i.getOrDie())):N.none()).orThunk((function(){return n&&(u.each((function(e){return tp(e.dom,e.dom.length)})),s.each((function(e){return ep(e.dom,0)}))),t}))}(n,a,(i=n,he(e.schema.getTextInlineElements(),It(i))))
e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):u.bind(fp).fold((function(){r&&cp(e,t,s)}),(function(n){r&&cp(e,t,N.some(n))}))},mp=function(e,t){return{start:e,end:t}},pp=vr([{removeTable:["element"]},{emptyCells:["cells"]},{deleteCellSelection:["rng","cell"]}]),gp=function(e,t){return Tr(Tt(e),"td,th",t)},hp=function(e,t){return Ar(e,"table",t)},vp=function(e){return!Dt(e.start,e.end)},yp=function(e,t){return hp(e.start,t).bind((function(n){return hp(e.end,t).bind((function(e){return t=Dt(n,e),r=n,t?N.some(r):N.none()
var t,r}))}))},bp=function(e){return Tu(e,"td,th")},Cp=function(e,t){return yp(t,e).isSome()},wp=function(e,t,n){return e.filter((function(e){return vp(e)&&Cp(n,e)})).orThunk((function(){return function(e,t){var n=gp(t.startContainer,e),r=gp(t.endContainer,e)
return t.collapsed?N.none():qu(n,r,mp).fold((function(){return n.fold((function(){return r.bind((function(t){return hp(t,e).bind((function(e){return re(bp(e)).map((function(e){return mp(e,t)}))}))}))}),(function(t){return hp(t,e).bind((function(e){return oe(bp(e)).map((function(e){return mp(t,e)}))}))}))}),(function(t){return Cp(e,t)?N.none():(r=e,hp((n=t).start,r).bind((function(e){return oe(bp(e)).map((function(e){return mp(n.start,e)}))})))
var n,r}))}(n,t)})).bind((function(e){return yp(t=e,n).map((function(e){return{rng:t,table:e,cells:bp(e)}}))
var t}))},xp=function(e,t){return J(e,(function(e){return Dt(e,t)}))},Sp=function(e){return qu(xp((t=e).cells,t.rng.start),xp(t.cells,t.rng.end),(function(e,n){return t.cells.slice(e,n+1)})).map((function(t){var n=e.cells
return t.length===n.length?pp.removeTable(e.table):pp.emptyCells(t)}))
var t},Np=function(e,t){var n,r,o,i,a,u=(n=e,function(e){return Dt(n,e)}),s=(o=u,i=gp((r=t).startContainer,o),a=gp(r.endContainer,o),qu(i,a,mp))
return function(e,t,n){return e.filter((function(e){return o=n,!vp(r=e)&&yp(r,o).exists((function(e){var t=e.dom.rows
return 1===t.length&&1===t[0].cells.length}))&&pf(e.start,t)
var r,o})).map((function(e){return e.start}))}(s,t,u).map((function(e){return pp.deleteCellSelection(t,e)})).orThunk((function(){return wp(s,t,u).bind(Sp)}))},Ep=function(e){var t
return(8===Mt(t=e)||"#comment"===It(t)?Kt:en)(e).bind(Ep).orThunk((function(){return N.some(e)}))},kp=function(e,t){return $(t,Sm),e.selection.setCursorLocation(t[0].dom,0),!0},_p=function(e,t,n){t.deleteContents()
var r,o,i=Ep(n).getOr(n),a=Tt(e.dom.getParent(i.dom,e.dom.isBlock))
return Io(a)&&(Sm(a),e.selection.setCursorLocation(a.dom,0)),Dt(n,a)||(r=Wt(a).is(n)?[]:Wt(o=a).map(Jt).map((function(e){return K(e,(function(e){return!Dt(o,e)}))})).getOr([]),$(r.concat(Jt(n)),(function(e){Dt(e,a)||Lt(e,a)||pn(e)}))),!0},Ap=function(e,t){return dp(e,!1,t),!0},Rp=function(e,t){return G(km(t,e),to)},Tp=function(e,t){return G(km(t,e),(function(e){return"caption"===It(e)}))},Op=function(e,t){return Sm(t),e.selection.setCursorLocation(t.dom,0),N.some(!0)},Bp=function(e,t){return(e?bm:Cm)(t)},Pp=function(e,t,n){var r=Tt(e.getBody())
return Tp(r,n).fold((function(){return function(e,t,n,r){var o=bs.fromRangeStart(e.selection.getRng())
return Rp(n,r).bind((function(r){return Io(r)?Op(e,r):(i=n,a=r,u=o,sl(t,e.getBody(),u).bind((function(e){return Rp(i,Tt(e.getNode())).map((function(e){return!1===Dt(e,a)}))})))
var i,a,u})).getOr(!1)}(e,t,r,n)||(o=e,i=t,a=bs.fromRangeStart(o.selection.getRng()),Bp(i,a)||ul(i,o.getBody(),a).exists((function(e){return Bp(i,e)})))
var o,i,a}),(function(n){return o=e,i=t,a=r,u=n,s=bs.fromRangeStart(o.selection.getRng()),(Io(u)?Op(o,u):function(e,t,n,r,o){return sl(n,e.getBody(),o).bind((function(i){return s=n,c=o,l=i,ml((u=r).dom).bind((function(e){return pl(u.dom).map((function(t){return s?c.isEqual(e)&&l.isEqual(t):c.isEqual(t)&&l.isEqual(e)}))})).getOr(!0)?Op(e,r):(a=r,Tp(t,Tt(i.getNode())).map((function(e){return!1===Dt(e,a)})))
var a,u,s,c,l})).or(N.some(!0))}(o,a,i,u,s)).getOr(!1)
var o,i,a,u,s}))},Dp=function(e,t){var n,r,o,i,a,u=Tt(e.selection.getStart(!0)),s=ff(e)
return e.selection.isCollapsed()&&0===s.length?Pp(e,t,u):(r=u,o=Tt((n=e).getBody()),i=n.selection.getRng(),0!==(a=ff(n)).length?kp(n,a):function(e,t,n,r){return Tp(t,r).fold((function(){return r=e,Np(t,n).map((function(e){return e.fold(f(Ap,r),f(kp,r),f(_p,r))}))
var r}),(function(t){return Op(e,t)})).getOr(!1)}(n,o,i,r))},Lp=function(e){return e.collapsed?e:function(e){var t=bs.fromRangeStart(e),n=bs.fromRangeEnd(e),r=e.commonAncestorContainer
return ul(!1,r,n).map((function(o){return!Pc(t,n,r)&&Pc(t,o,r)?(i=t.container(),a=t.offset(),u=o.container(),s=o.offset(),(c=document.createRange()).setStart(i,a),c.setEnd(u,s),c):e
var i,a,u,s,c})).getOr(e)}(e)},Ip=function(e,t){var n,r,o,i=t.firstChild,a=t.lastChild
return i&&"meta"===i.name&&(i=i.next),a&&"mce_marker"===a.attr("id")&&(a=a.prev),r=a,o=(n=e).getNonEmptyElements(),r&&(r.isEmpty(o)||function(e,t){var n,r
return e.getBlockElements()[t.name]&&(r=t).firstChild&&r.firstChild===r.lastChild&&("br"===(n=t.firstChild).name||n.value===ro)}(n,r))&&(a=a.prev),!(!i||i!==a||"ul"!==i.name&&"ol"!==i.name)},Mp=function(e){return 0<e.length&&(!(t=e[e.length-1]).firstChild||function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&((t=e.firstChild).data===ro||zn(t))
var t}(t))?e.slice(0,-1):e
var t},Fp=function(e,t){var n=e.getParent(t,e.isBlock)
return n&&"LI"===n.nodeName?n:null},Up=function(e,t){var n=bs.after(e),r=rl(t).prev(n)
return r?r.toRange():null},zp=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,p,g,h,v,y,b,C,w,x,S=(o=t,i=r,c=e.serialize(i),u=(a=o.createFragment(c)).firstChild,s=a.lastChild,u&&"META"===u.nodeName&&u.parentNode.removeChild(u),s&&"mce_marker"===s.id&&s.parentNode.removeChild(s),a),N=Fp(t,n.startContainer),E=Mp((l=S.firstChild,Et.grep(l.childNodes,(function(e){return"LI"===e.nodeName})))),k=t.getRoot(),_=function(e){var r=bs.fromRangeStart(n),o=rl(t.getRoot()),i=1===e?o.prev(r):o.next(r)
return!i||Fp(t,i.getNode())!==N}
return _(1)?function(e,t,n){var r,o,i,a,u=e.parentNode
return Et.each(t,(function(t){u.insertBefore(t,e)})),r=e,o=n,i=bs.before(r),(a=rl(o).next(i))?a.toRange():null}(N,E,k):_(2)?(f=N,d=E,m=k,t.insertAfter(d.reverse(),f),Up(d[0],m)):(g=E,h=k,v=p=N,b=(y=n).cloneRange(),C=y.cloneRange(),b.setStartBefore(v),C.setEndAfter(v),w=[b.cloneContents(),C.cloneContents()],(x=p.parentNode).insertBefore(w[0],p),Et.each(g,(function(e){x.insertBefore(e,p)})),x.insertBefore(w[1],p),x.removeChild(p),Up(g[g.length-1],h))},jp=qn,Hp=function(e,t,n){var r,o,i,a,u,s,c,l,f,d=e.selection,m=e.dom;/^ | $/.test(t)&&(s=m,c=d.getRng(),l=t,f=Tt(s.getRoot()),l=Wm(f,bs.fromRangeStart(c))?l.replace(/^ /,"&nbsp;"):l.replace(/^&nbsp;/," "),t=l=Km(f,bs.fromRangeEnd(c))?l.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):l.replace(/&nbsp;(<br( \/)?>)?$/," "))
var p=e.parser,g=n.merge,h=um({validate:e.getParam("validate")},e.schema),v='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',y={content:t,format:"html",selection:!0,paste:n.paste}
if((y=e.fire("BeforeSetContent",y)).isDefaultPrevented())e.fire("SetContent",{content:y.content,format:"html",selection:!0,paste:n.paste})
else{-1===(t=y.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,v)
var b,C,w=(a=d.getRng()).startContainer||(a.parentElement?a.parentElement():null),x=e.getBody()
w===x&&d.isCollapsed()&&m.isBlock(x.firstChild)&&(b=e,(C=x.firstChild)&&!b.schema.getShortEndedElements()[C.nodeName])&&m.isEmpty(x.firstChild)&&((a=m.createRng()).setStart(x.firstChild,0),a.setEnd(x.firstChild,0),d.setRng(a)),d.isCollapsed()||function(e){var t=e.dom,n=Lp(e.selection.getRng())
e.selection.setRng(n)
var r,o,i=t.getParent(n.startContainer,jp)
r=n,null!==(o=i)&&o===t.getParent(r.endContainer,jp)&&pf(Tt(o),r)?_p(e,n,Tt(i)):e.getDoc().execCommand("Delete",!1,null)}(e)
var S,E,k,_,A,R,T,O,B,P,D,L,I,M,F={context:(r=d.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0},U=p.parse(t,F)
if(!0===n.paste&&Ip(e.schema,U)&&Fp(m,r))return a=zp(h,m,d.getRng(),U),d.setRng(a),void e.fire("SetContent",y)
if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(U),"mce_marker"===(u=U.lastChild).attr("id"))for(u=(i=u).prev;u;u=u.walk(!0))if(3===u.type||!m.isBlock(u.name)){e.schema.isValidChild(u.parent.name,"span")&&u.parent.insert(i,u,"br"===u.name)
break}if(e._selectionOverrides.showBlockCaretContainer(r),F.invalid){for(e.selection.setContent(v),r=d.getNode(),o=e.getBody(),9===r.nodeType?r=u=o:u=r;u!==o;)u=(r=u).parentNode
t=r===o?o.innerHTML:m.getOuterHTML(r),t=h.serialize(p.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,(function(){return h.serialize(U)})))),r===o?m.setHTML(o,t):m.setOuterHTML(r,t)}else S=e,E=t=h.serialize(U),"all"===(k=r).getAttribute("data-mce-bogus")?k.parentNode.insertBefore(S.dom.createFragment(E),k):(_=k.firstChild,A=k.lastChild,!_||_===A&&"BR"===_.nodeName?S.dom.setHTML(k,E):S.selection.setContent(E))
T=g,P=(R=e).schema.getTextInlineElements(),D=R.dom,T&&(O=R.getBody(),B=om(D),Et.each(D.select("*[data-mce-fragment]"),(function(e){for(var t=e.parentNode;t&&t!==O;t=t.parentNode)P[e.nodeName.toLowerCase()]&&B.compare(t,e)&&D.remove(e,!0)}))),function(e,t){var n,r,o=e.dom,i=e.selection
if(t){i.scrollIntoView(t)
var a=function(t){for(var n=e.getBody();t&&t!==n;t=t.parentNode)if("false"===o.getContentEditable(t))return t
return null}(t)
if(a)return o.remove(t),i.select(a)
var u=o.createRng(),s=t.previousSibling
s&&3===s.nodeType?(u.setStart(s,s.nodeValue.length),Ct.ie||(r=t.nextSibling)&&3===r.nodeType&&(s.appendData(r.data),r.parentNode.removeChild(r))):(u.setStartBefore(t),u.setEndBefore(t))
var c=o.getParent(t,o.isBlock)
o.remove(t),c&&o.isEmpty(c)&&(e.$(c).empty(),u.setStart(c,0),u.setEnd(c,0),jp(c)||c.getAttribute("data-mce-fragment")||!(n=function(t){var n=bs.fromRangeStart(t)
if(n=rl(e.getBody()).next(n))return n.toRange()}(u))?o.add(c,o.create("br",{"data-mce-bogus":"1"})):(u=n,o.remove(c))),i.setRng(u)}}(e,m.get("mce_marker")),L=e.getBody(),Et.each(L.getElementsByTagName("*"),(function(e){e.removeAttribute("data-mce-fragment")})),I=m,M=d.getStart(),N.from(I.getParent(M,"td,th")).map(Tt).each(Nm),e.fire("SetContent",y),e.addVisual()}},Vp=function(e,t){t(e),e.firstChild&&Vp(e.firstChild,t),e.next&&Vp(e.next,t)},qp=function(e){return e instanceof Kd},$p=function(e,t){var n
e.dom.setHTML(e.getBody(),t),Id(n=e)&&ml(n.getBody()).each((function(e){var t=e.getNode(),r=Pn(t)?ml(t).getOr(e):e
n.selection.setRng(r.toRange())}))},Wp=function(e,t,n){return n.format=n.format?n.format:"html",n.set=!0,n.content=qp(t)?"":t,n.no_events||e.fire("BeforeSetContent",n),qp(t)||(t=n.content),N.from(e.getBody()).fold(c(t),(function(r){return qp(t)?function(e,t,n,r){(function(e,t,n){var r=function(e,t,n){var r={},o={},i=[]
for(var a in n.firstChild&&Vp(n.firstChild,(function(n){$(e,(function(e){e.name===n.name&&(r[e.name]?r[e.name].nodes.push(n):r[e.name]={filter:e,nodes:[n]})})),$(t,(function(e){"string"==typeof n.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(n):o[e.name]={filter:e,nodes:[n]})}))})),r)r.hasOwnProperty(a)&&i.push(r[a])
for(var u in o)o.hasOwnProperty(u)&&i.push(o[u])
return i}(e,t,n)
$(r,(function(e){$(e.filter.callbacks,(function(t){t(e.nodes,e.filter.name,{})}))}))})(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n)
var o=um({validate:e.validate},e.schema).serialize(n)
return r.content=no(Tt(t))?o:Et.trim(o),$p(e,r.content),r.no_events||e.fire("SetContent",r),n}(e,r,t,n):(o=e,i=r,u=n,0===(a=t).length||/^\s+$/.test(a)?(c='<br data-mce-bogus="1">',"TABLE"===i.nodeName?a="<tr><td>"+c+"</td></tr>":/^(UL|OL)$/.test(i.nodeName)&&(a="<li>"+c+"</li>"),a=(s=Ws(o))&&o.schema.isValidChild(i.nodeName.toLowerCase(),s.toLowerCase())?(a=c,o.dom.createHTML(s,Ks(o),a)):a||'<br data-mce-bogus="1">',$p(o,a),o.fire("SetContent",u)):("raw"!==u.format&&(a=um({validate:o.validate},o.schema).serialize(o.parser.parse(a,{isRootContent:!0,insert:!0}))),u.content=no(Tt(i))?a:Et.trim(a),$p(o,u.content),u.no_events||o.fire("SetContent",u)),u.content)
var o,i,a,u,s,c}))},Kp=function(e,t){return r=t,((o=(n=e).dom).parentNode?function(e,t){return G(e.dom.childNodes,(function(e){return t(Tt(e))})).map(Tt)}(Tt(o.parentNode),(function(e){return!Dt(n,e)&&r(e)})):N.none()).isSome()
var n,r,o},Xp=function(e){return I(e)?e:b},Yp=function(e,t,n){var r=t(e),o=Xp(n)
return r.orThunk((function(){return o(e)?N.none():function(e,t,n){for(var r=e.dom,o=Xp(n);r.parentNode;){r=r.parentNode
var i=Tt(r),a=t(i)
if(a.isSome())return a
if(o(i))break}return N.none()}(e,t,o)}))},Gp=Il,Jp=function(e,t,n){var r=e.formatter.get(n)
if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0
return!1},Qp=function(e,t,n,r){var o=e.dom.getRoot()
return t!==o&&(t=e.dom.getParent(t,(function(t){return!!Jp(e,t,n)||t.parentNode===o||!!tg(e,t,n,r,!0)})),tg(e,t,n,r))},Zp=function(e,t,n){return!!Gp(t,n.inline)||!!Gp(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0)},eg=function(e,t,n,r,o,i){var a,u,s,c=n[r]
if(n.onmatch)return n.onmatch(t,n,r)
if(c)if(void 0===c.length){for(a in c)if(c.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):Fl(e,t,a),o&&!u&&!n.exact)return
if((!o||n.exact)&&!Gp(u,Ml(e,Ll(c[a],i),a)))return}}else for(s=0;s<c.length;s++)if("attributes"===r?e.getAttrib(t,c[s]):Fl(e,t,c[s]))return n
return n},tg=function(e,t,n,r,o){var i,a,u,s,c=e.formatter.get(n),l=e.dom
if(c&&t)for(a=0;a<c.length;a++)if(i=c[a],Zp(e.dom,t,i)&&eg(l,t,i,"attributes",o,r)&&eg(l,t,i,"styles",o,r)){if(s=i.classes)for(u=0;u<s.length;u++)if(!e.dom.hasClass(t,s[u]))return
return i}},ng=function(e,t,n,r){if(r)return Qp(e,r,t,n)
if(r=e.selection.getNode(),Qp(e,r,t,n))return!0
var o=e.selection.getStart()
return!(o===r||!Qp(e,o,t,n))},rg=function(e,t,n){return Y(n,(function(n,r){var o,i=(o=r,V(e.formatter.get(o),(function(e){var t=function(e){return 1<e.length&&"%"===e.charAt(0)}
return V(["styles","attributes"],(function(n){return ge(e,n).exists((function(e){var n=T(e)?e:function(e){return t=[],se(e,(function(e,n){t.push(e)})),t
var t}(e)
return V(n,t)}))}))})))
return e.formatter.matchNode(t,r,{},i)?n.concat([r]):n}),[])},og=oo,ig="_mce_caret",ag=function(e){return 0<function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==og||1<e.childNodes.length)return[]
1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length},ug=function(e){if(e){var t=new qr(e,e)
for(e=t.current();e;e=t.next())if(In(e))return e}return null},sg=function(e){var t=At("span")
return Yn(t,{id:ig,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&fn(t,Rt(og)),t},cg=function(e,t,n){void 0===n&&(n=!0)
var r,o,i,a,u,s,c,l,f=e.dom,d=e.selection
ag(t)?dp(e,!1,Tt(t),n):(r=d.getRng(),o=f.getParent(t,f.isBlock),i=r.startContainer,a=r.startOffset,u=r.endContainer,s=r.endOffset,(l=ug(t))&&l.nodeValue.charAt(0)===og&&l.deleteData(0,1),c=l,f.remove(t,!0),i===c&&0<a&&r.setStart(c,a-1),u===c&&0<s&&r.setEnd(c,s-1),o&&f.isEmpty(o)&&Sm(Tt(o)),d.setRng(r))},lg=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(t)cg(e,t,n)
else if(!(t=vl(e.getBody(),o.getStart())))for(;t=r.get(ig);)cg(e,t,!1)},fg=function(e,t){return e.appendChild(t),t},dg=function(e,t){var n=X(e,(function(e,t){return fg(e,t.cloneNode(!1))}),t)
return fg(n,n.ownerDocument.createTextNode(og))},mg=function(e,t,n,r){var o,i,a,u,s,c,l,d,m,p,g,h,v,y=e.dom,b=e.selection,C=[],w=b.getRng(),x=w.startContainer,S=w.startOffset,E=x
for(3===x.nodeType&&(S!==x.nodeValue.length&&(o=!0),E=E.parentNode);E;){if(tg(e,E,t,n,r)){i=E
break}E.nextSibling&&(o=!0),C.push(E),E=E.parentNode}i&&(o?(a=b.getBookmark(),w.collapse(!0),u=af(e,w,e.formatter.get(t),!0),u=jf(u),e.formatter.remove(t,n,u,r),b.moveToBookmark(a)):(s=vl(e.getBody(),i),p=c=sg(!1).dom,g=null!==s?s:i,(v=(h=(m=e).dom).getParent(g,f(Bl,m)))&&h.isEmpty(v)?g.parentNode.replaceChild(p,g):(function(e){var t=Tu(e,"br"),n=K(function(e){for(var t=[],n=e.dom;n;)t.push(Tt(n)),n=n.lastChild
return t}(e).slice(-1),Gr)
t.length===n.length&&$(n,pn)}(Tt(g)),h.isEmpty(g)?g.parentNode.replaceChild(p,g):h.insertAfter(p,g)),l=function(e,t,n,r,o,i){var a=e.formatter,u=e.dom,s=K(ae(a.get()),(function(e){return e!==r&&!Ue(e,"removeformat")})),c=rg(e,n,s)
if(0<K(c,(function(t){return!jl(e,t,r)})).length){var l=n.cloneNode(!1)
return u.add(t,l),a.remove(r,o,l,i),u.remove(l),N.some(l)}return N.none()}(e,c,i,t,n,r),d=dg(C.concat(l.toArray()),c),cg(e,s,!1),b.setCursorLocation(d,1),y.isEmpty(i)&&y.remove(i)))},pg=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(It(t))&&!hl(t.dom)&&!Bn(t.dom)},gg={},hg=we,vg=be
em=function(e){var t,n=e.selection.getRng(),r=Rn(["pre"])
n.collapsed||(t=e.selection.getSelectedBlocks(),vg(hg(hg(t,r),(function(e){return r(e.previousSibling)&&-1!==xe(t,e.previousSibling)})),(function(e){var t,n
t=e.previousSibling,ou(n=e).remove(),ou(t).append("<br><br>").append(n.childNodes)})))},gg["pre"]||(gg.pre=[]),gg.pre.push(em)
var yg,bg,Cg,wg,xg=Et.each,Sg=function(e){return An(e)&&!El(e)&&!hl(e)&&!Bn(e)},Ng=function(e,t){for(var n=e;n;n=n[t]){if(In(n)&&0!==n.nodeValue.length)return e
if(An(n)&&!El(n))return n}return e},Eg=function(e,t,n){var r,o,i=om(e)
if(t&&n&&(t=Ng(t,"previousSibling"),n=Ng(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)r=(o=r).nextSibling,t.appendChild(o)
return e.remove(n),Et.each(Et.grep(n.childNodes),(function(e){t.appendChild(e)})),t}return n},kg=function(e,t,n,r){var o
r&&!1!==t.merge_siblings&&(o=Eg(e,Ol(r),r),Eg(e,o,Ol(o,!0)))},_g=function(e,t,n){xg(e.childNodes,(function(e){Sg(e)&&(t(e)&&n(e),e.hasChildNodes()&&_g(e,t,n))}))},Ag=function(e,t){return function(n){return!(!n||!Fl(e,n,t))}},Rg=function(e,t,n){return function(r){var o,i
e.setStyle(r,t,n),""===r.getAttribute("style")&&r.removeAttribute("style"),o=e,"SPAN"===(i=r).nodeName&&0===o.getAttribs(i).length&&o.remove(i,!0)}},Tg=vr([{keep:[]},{rename:["name"]},{removed:[]}]),Og=/^(src|href|style)$/,Bg=Et.each,Pg=Il,Dg=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},Lg=function(e,t,n){var r,o=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"]
return An(o)&&(r=o.childNodes.length-1,!n&&i&&i--,o=o.childNodes[r<i?r:i]),In(o)&&n&&i>=o.nodeValue.length&&(o=new qr(o,e.getBody()).next()||o),In(o)&&!n&&0===i&&(o=new qr(o,e.getBody()).prev()||o),o},Ig=function(e,t){var n=t?"firstChild":"lastChild"
if(/^(TR|TH|TD)$/.test(e.nodeName)&&e[n]){var r=e[n]
return"TR"===e.nodeName&&r[n]||r}return e},Mg=function(e,t,n,r){var o=e.create(n,r)
return t.parentNode.insertBefore(o,t),o.appendChild(t),o},Fg=function(e,t,n,r,o){var i=Tt(t),a=Tt(e.create(r,o)),u=(n?Gt:Yt)(i)
return dn(a,u),n?(sn(i,a),ln(a,i)):(cn(i,a),fn(a,i)),a.dom},Ug=function(e,t,n,r){return!(t=Ol(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},zg=function(e,t,n,r,o){var i,a,u,s,c,l=e.dom
if(u=l,!(Pg(s=r,(c=t).inline)||Pg(s,c.block)||c.selector&&An(s)&&u.is(s,c.selector)||(a=r,t.links&&"A"===a.nodeName)))return Tg.keep()
var f,d,m,p,g,h,v,y=r
if(t.inline&&"all"===t.remove&&T(t.preserve_attributes)){var b=K(l.getAttribs(y),(function(e){return H(t.preserve_attributes,e.name.toLowerCase())}))
if(l.removeAllAttribs(y),$(b,(function(e){return l.setAttrib(y,e.name,e.value)})),0<b.length)return Tg.rename("span")}if("all"!==t.remove){Bg(t.styles,(function(e,r){e=Ml(l,Ll(e,n),r+""),M(r)&&(r=e,o=null),!t.remove_similar&&o&&!Pg(Fl(l,o,r),e)||l.setStyle(y,r,""),i=!0})),i&&""===l.getAttrib(y,"style")&&(y.removeAttribute("style"),y.removeAttribute("data-mce-style")),Bg(t.attributes,(function(e,r){var i
if(e=Ll(e,n),M(r)&&(r=e,o=null),t.remove_similar||!o||Pg(l.getAttrib(o,r),e)){if("class"===r&&(e=l.getAttrib(y,r))&&(i="",$(e.split(/\s+/),(function(e){/mce\-\w+/.test(e)&&(i+=(i?" ":"")+e)})),i))return void l.setAttrib(y,r,i)
"class"===r&&y.removeAttribute("className"),Og.test(r)&&y.removeAttribute("data-mce-"+r),y.removeAttribute(r)}})),Bg(t.classes,(function(e){e=Ll(e,n),o&&!l.hasClass(o,e)||l.removeClass(y,e)}))
for(var C=l.getAttribs(y),w=0;w<C.length;w++){var x=C[w].nodeName
if(0!==x.indexOf("_")&&0!==x.indexOf("data-"))return Tg.keep()}}return"none"!==t.remove?(f=e,m=t,g=(d=y).parentNode,h=f.dom,v=Ws(f),m.block&&(v?g===h.getRoot()&&(m.list_block&&Pg(d,m.list_block)||$(ie(d.childNodes),(function(e){Pl(f,v,e.nodeName.toLowerCase())?p?p.appendChild(e):(p=Mg(h,e,v),h.setAttribs(p,f.settings.forced_root_block_attrs)):p=0}))):h.isBlock(d)&&!h.isBlock(g)&&(Ug(h,d,!1)||Ug(h,d.firstChild,!0,!0)||d.insertBefore(h.create("br"),d.firstChild),Ug(h,d,!0)||Ug(h,d.lastChild,!1,!0)||d.appendChild(h.create("br")))),m.selector&&m.inline&&!Pg(m.inline,d)||h.remove(d,!0),Tg.removed()):Tg.keep()},jg=function(e,t,n,r,o){return zg(e,t,n,r,o).fold(b,(function(t){return e.dom.rename(r,t),!0}),C)},Hg=function(e,t,n,r,o){var i,a=e.formatter.get(t),u=a[0],s=!0,l=e.dom,f=e.selection,d=function(r){var i,s,l,f,d,m,p=(s=r,l=t,f=n,d=o,$(zl((i=e).dom,s.parentNode).reverse(),(function(e){var t
m||"_start"===e.id||"_end"===e.id||(t=tg(i,e,l,f,d))&&!1!==t.split&&(m=e)})),m)
return function(e,t,n,r,o,i,a,u){var s,l,f,d=e.dom
if(n){for(var m=n.parentNode,p=r.parentNode;p&&p!==m;p=p.parentNode){s=d.clone(p,!1)
for(var g=0;g<t.length&&null!==(s=function(e,t,n,r){return zg(e,t,n,r,r).fold(c(r),(function(t){return e.dom.createFragment().appendChild(r),e.dom.rename(r,t)}),c(null))}(e,t[g],u,s));g++);s&&(l&&s.appendChild(l),f=f||s,l=s)}!i||a.mixed&&d.isBlock(n)||(r=d.split(n,r)),l&&(o.parentNode.insertBefore(l,o),f.appendChild(o),a.inline&&kg(d,a,0,l))}return r}(e,a,p,r,r,!0,u,n)},m=function(t){var r,o
An(t)&&l.getContentEditable(t)&&(r=s,s="true"===l.getContentEditable(t),o=!0)
var i=ie(t.childNodes)
if(s&&!o)for(var c=0;c<a.length&&!jg(e,a[c],n,t,t);c++);if(u.deep&&i.length){for(c=0;c<i.length;c++)m(i[c])
o&&(s=r)}},p=function(e){var t,n=l.get(e?"_start":"_end"),r=n[e?"firstChild":"lastChild"]
return El(t=r)&&An(t)&&("_start"===t.id||"_end"===t.id)&&(r=r[e?"firstChild":"lastChild"]),In(r)&&0===r.data.length&&(r=e?n.previousSibling||n.nextSibling:n.nextSibling||n.previousSibling),l.remove(n,!0),r},g=function(t){var n,r,o=af(e,t,a,t.collapsed)
if(u.split){if(o=jf(o),(n=Lg(e,o,!0))!==(r=Lg(e,o))){if(n=Ig(n,!0),r=Ig(r,!1),Dg(l,n,r)){var i=N.from(n.firstChild).getOr(n)
return d(Fg(l,i,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void p(!0)}if(Dg(l,r,n))return i=N.from(r.lastChild).getOr(r),d(Fg(l,i,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void p(!1)
n=Mg(l,n,"span",{id:"_start","data-mce-type":"bookmark"}),r=Mg(l,r,"span",{id:"_end","data-mce-type":"bookmark"})
var s=l.createRng()
s.setStartAfter(n),s.setEndBefore(r),sf(l,s,(function(e){$(e,(function(e){El(e)||El(e.parentNode)||d(e)}))})),d(n),d(r),n=p(!0),r=p()}else n=r=d(n)
o.startContainer=n.parentNode?n.parentNode:n,o.startOffset=l.nodeIndex(n),o.endContainer=r.parentNode?r.parentNode:r,o.endOffset=l.nodeIndex(r)+1}sf(l,o,(function(t){$(t,(function(t){m(t),$(["underline","line-through","overline"],(function(n){An(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&Ul(l,t.parentNode)===n&&jg(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))}))}))}
if(r)Rl(r)?((i=l.createRng()).setStartBefore(r),i.setEndAfter(r),g(i)):g(r)
else if("false"!==l.getContentEditable(f.getNode()))f.isCollapsed()&&u.inline&&!ff(e).length?mg(e,t,n,o):(yf(f,!0,(function(){vf(e,g)})),u.inline&&ng(e,t,n,f.getStart())&&Tl(l,f,f.getRng()),e.nodeChanged())
else{r=f.getNode()
for(var h=0;h<a.length&&(!a[h].ceFalseOverride||!jg(e,a[h],n,r,r));h++);}},Vg=Et.each,qg=Et.each,$g=ve,Wg=function(e,t,n,r){var o,i,a,u,s=e.formatter.get(t),c=s[0],l=!r&&e.selection.isCollapsed(),f=e.dom,d=e.selection,m=function(e,t){var o
t=t||c,e&&(t.onformat&&t.onformat(e,t,n,r),qg(t.styles,(function(t,r){f.setStyle(e,r,Ll(t,n))})),!t.styles||(o=f.getAttrib(e,"style"))&&f.setAttrib(e,"data-mce-style",o),qg(t.attributes,(function(t,r){f.setAttrib(e,r,Ll(t,n))})),qg(t.classes,(function(t){t=Ll(t,n),f.hasClass(e,t)||f.addClass(e,t)})))},p=function(e,t){var n=!1
return!!Vl(c)&&(qg(e,(function(e){if(!("collapsed"in e)||e.collapsed===l)return f.is(t,e.selector)&&!hl(t)?(m(t,e),!(n=!0)):void 0})),n)},g=function(r,o,i,a){var u=[],l=!0,f=c.inline||c.block,d=r.create(f)
m(d),sf(r,o,(function(o){var i,g=function(o){var h=!1,v=l,y=o.nodeName.toLowerCase(),b=o.parentNode.nodeName.toLowerCase()
if(An(o)&&r.getContentEditable(o)&&(v=l,l="true"===r.getContentEditable(o),h=!0),zn(o)&&!function(e,t,n,r){if(e.getParam("format_empty_lines",!1,"boolean")&&ql(t)){var o=ke(ke({},e.schema.getTextBlockElements()),{td:{},th:{},li:{},dt:{},dd:{},figcaption:{},caption:{},details:{},summary:{}}),i=Kp(Tt(n),(function(e){return hl(e.dom)}))
return ve(o,r)&&Io(Tt(n.parentNode),!1)&&!i}return!1}(e,c,o,b))return i=null,void(Hl(c)&&r.remove(o))
if(c.wrapper&&tg(e,o,t,n))i=null
else{if(l&&!h&&Hl(c)&&!c.wrapper&&Bl(e,y)&&Pl(e,b,f)){var C=r.rename(o,f)
return m(C),u.push(C),void(i=null)}if(Vl(c)){var w=p(s,o)
if(!$g(c,"inline")||w)return void(i=null)}!l||h||!Pl(e,f,y)||!Pl(e,b,f)||!a&&3===o.nodeType&&1===o.nodeValue.length&&65279===o.nodeValue.charCodeAt(0)||hl(o)||$g(c,"inline")&&r.isBlock(o)?(i=null,qg(Et.grep(o.childNodes),g),h&&(l=v),i=null):(i||(i=r.clone(d,!1),o.parentNode.insertBefore(i,o),u.push(i)),i.appendChild(o))}}
qg(o,g)})),!0===c.links&&qg(u,(function(e){var t=function(e){"A"===e.nodeName&&m(e,c),qg(Et.grep(e.childNodes),t)}
t(e)})),qg(u,(function(o){var i,a,l,f,d,p,g,h,v,y,b,C,w,x,S,N,E,k,_,A,R=(i=0,qg(o.childNodes,(function(e){var t
L(t=e)&&In(t)&&0===t.length||El(e)||i++})),i)
!(1<u.length)&&r.isBlock(o)||0!==R?(ql(c)||c.wrapper)&&(c.exact||1!==R||((A=function(e){var t=!1
return qg(e.childNodes,(function(e){if((n=e)&&1===n.nodeType&&!El(n)&&!hl(n)&&!Bn(n))return t=e,!1
var n})),t}(k=o))&&!El(A)&&Zp(r,A,c)&&(_=r.clone(A,!1),m(_),r.replace(_,k,!0),r.remove(A,!0)),o=_||k),function(e,t,n,r){Vg(t,(function(t){var o,i,a,u
Vg(e.dom.select(t.inline,r),(function(r){Sg(r)&&jg(e,t,n,r,t.exact?r:null)})),o=e.dom,a=r,(i=t).clear_child_styles&&(u=i.links?"*:not(a)":"*",xg(o.select(u,a),(function(e){Sg(e)&&xg(i.styles,(function(t,n){o.setStyle(e,n,"")}))})))}))}(e,s,n,o),x=c,S=t,N=n,tg(w=e,(E=o).parentNode,S,N)&&jg(w,x,N,E)||x.merge_with_parents&&w.dom.getParent(E.parentNode,(function(e){if(tg(w,e,S,N))return jg(w,x,N,E),!0})),v=r,b=n,C=o,(y=c).styles&&y.styles.backgroundColor&&_g(C,Ag(v,"fontSize"),Rg(v,"backgroundColor",Ll(y.styles.backgroundColor,b))),d=r,g=o,h=function(e){var t
1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=Ul(d,e.parentNode),d.getStyle(e,"color")&&t?d.setStyle(e,"text-decoration",t):d.getStyle(e,"text-decoration")===t&&d.setStyle(e,"text-decoration",null))},(p=c).styles&&(p.styles.color||p.styles.textDecoration)&&(Et.walk(g,h,"childNodes"),h(g)),a=r,f=o,"sub"!==(l=c).inline&&"sup"!==l.inline||(_g(f,Ag(a,"fontSize"),Rg(a,"fontSize","")),a.remove(a.select("sup"===l.inline?"sub":"sup",f),!0)),kg(r,c,0,o)):r.remove(o,!0)}))}
if("false"!==f.getContentEditable(d.getNode()))c&&(r?Rl(r)?p(s,r)||((o=f.createRng()).setStartBefore(r),o.setEndAfter(r),g(f,af(e,o,s),0,!0)):g(f,r,0,!0):l&&ql(c)&&!ff(e).length?function(e,t,n){var r,o=e.selection,i=o.getRng(),a=i.startOffset,u=i.startContainer.nodeValue,s=vl(e.getBody(),o.getStart())
s&&(r=ug(s))
var c,l,f,d,m=/[^\s\u00a0\u00ad\u200b\ufeff]/
u&&0<a&&a<u.length&&m.test(u.charAt(a))&&m.test(u.charAt(a-1))?(c=o.getBookmark(),i.collapse(!0),l=af(e,i,e.formatter.get(t)),l=jf(l),e.formatter.apply(t,n,l),o.moveToBookmark(c)):(s&&r.nodeValue===og||(f=e.getDoc(),d=sg(!0).dom,r=(s=f.importNode(d,!0)).firstChild,i.insertNode(s),a=1),e.formatter.apply(t,n,s),o.setCursorLocation(r,a))}(e,t,n):(i=d.getNode(),a=s[0],e.settings.forced_root_block||!a.defaultBlock||f.getParent(i,f.isBlock)||Wg(e,a.defaultBlock),d.setRng(Lp(d.getRng())),yf(d,!0,(function(t){vf(e,(function(t,n){var r=n?t:af(e,t,s)
g(f,r)}))})),Tl(f,d,d.getRng()),e.nodeChanged()),u=e,vg(gg[t],(function(e){e(u)})))
else{r=d.getNode()
for(var h=0,v=s.length;h<v;h++){var y=s[h]
if(y.ceFalseOverride&&Vl(y)&&f.is(r,y.selector))return void m(r,y)}}},Kg=function(e,t,n,r){return me(e,(function(e,o){return!!he(t,o)||($(e,(function(e){e(!1,{node:n,format:o,parents:r})})),!1)})).t},Xg=function(e,t,n,r,o){var i,a,u,s,c,l,f,d
return null===t.get()&&(a=e,u=vu({}),(i=t).set({}),a.on("NodeChange",(function(e){(function(e,t,n,r){var o=ae(n.get()),i={},a={},u=K(zl(e.dom,t),(function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}))
se(r,(function(t,n){Et.each(u,(function(r){return e.formatter.matchNode(r,n,{},t.similar)?(-1===o.indexOf(n)&&($(t.callbacks,(function(e){e(!0,{node:r,format:n,parents:u})})),i[n]=t.callbacks),a[n]=t.callbacks,!1):!Jp(e,r,n)&&void 0}))}))
var s=Kg(n.get(),a,t,u)
n.set(ke(ke({},i),s))})(a,e.element,u,i.get())}))),c=n,l=r,f=o,d=(s=t).get(),$(c.split(","),(function(e){d[e]||(d[e]={similar:f,callbacks:[]}),d[e].callbacks.push(l)})),s.set(d),{unbind:function(){return o=n,i=r,a=(e=t).get(),$(o.split(","),(function(e){a[e].callbacks=K(a[e].callbacks,(function(e){return e!==i})),0===a[e].callbacks.length&&delete a[e]})),void e.set(a)
var e,o,i,a}}},Yg=function(e,t){var n=(t||document).createDocumentFragment()
return $(e,(function(e){n.appendChild(e.dom)})),Tt(n)},Gg=function(e,t,n){return{element:e,width:t,rows:n}},Jg=function(e,t){return{element:e,cells:t}},Qg=function(e,t){var n=parseInt(Gn(e,t),10)
return isNaN(n)?1:n},Zg=function(e){return Y(e,(function(e,t){return t.cells.length>e?t.cells.length:e}),0)},eh=function(e,t){for(var n=e.rows,r=0;r<n.length;r++)for(var o=n[r].cells,i=0;i<o.length;i++)if(Dt(o[i],t))return N.some({x:i,y:r})
return N.none()},th=function(e,t,n,r,o){for(var i=[],a=e.rows,u=n;u<=o;u++){var s=a[u].cells,c=t<r?s.slice(t,r+1):s.slice(r,t+1)
i.push(Jg(a[u].element,c))}return i},nh=function(e){return n=q((t=e).rows,(function(e){var t=q(e.cells,(function(e){var t=ju(e)
return Qn(t,"colspan"),Qn(t,"rowspan"),t})),n=zu(e.element)
return dn(n,t),n})),r=zu(t.element),o=At("tbody"),dn(o,n),fn(r,o),r
var t,n,r,o},rh=function(e,t){return G(e,(function(e){return"li"===It(e)&&pf(e,t)})).fold(c([]),(function(t){return G(e,(function(e){return"ul"===It(e)||"ol"===It(e)})).map((function(e){var t=At(It(e))
return function(e,t){var n=e.dom
se(t,(function(e,t){!function(e,t,n){if(!A(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
Wn(e)&&e.style.setProperty(t,n)}(n,t,e)}))}(t,pe(nr(e),(function(e,t){return ze(t,"list-style")}))),[At("li"),t]})).getOr([])}))},oh=function(){return Yg([])},ih=function(e,t){return n=Tt(t.cloneContents()),r=function(e,t){var n,r=Tt(t.commonAncestorContainer),o=km(r,e),i=K(o,(function(e){return Yr(e)||Kr(e)})),a=rh(o,t),u=i.concat(a.length?a:Zr(n=r)?Wt(n).filter(Qr).fold(c([]),(function(e){return[n,e]})):Qr(n)?[n]:[])
return q(u,zu)}(e,t),o=Y(r,(function(e,t){return fn(t,e),t}),n),0<r.length?Yg([o]):o
var n,r,o},ah=function(e,t){return n=e,r=t[0],Ar(r,"table",f(Dt,n)).bind((function(e){var n=t[0],r=t[t.length-1]
return function(e,t,n){return eh(e,t).bind((function(t){return eh(e,n).map((function(n){return r=e,i=n,a=(o=t).x,u=o.y,s=i.x,l=u<(c=i.y)?th(r,a,u,s,c):th(r,a,c,s,u),Gg(r.element,Zg(l),l)
var r,o,i,a,u,s,c,l}))}))}(function(e){var t=Gg(zu(e),0,[])
return $(Tu(e,"tr"),(function(e,n){$(Tu(e,"td,th"),(function(r,o){!function(e,t,n,r,o){for(var i=Qg(o,"rowspan"),a=Qg(o,"colspan"),u=e.rows,s=n;s<n+i;s++){u[s]||(u[s]=Jg(ju(r),[]))
for(var c=t;c<t+a;c++)u[s].cells[c]=s===n&&c===t?o:zu(o)}}(t,function(e,t,n){for(;r=t,o=n,((i=e.rows)[o]?i[o].cells:[])[r];)t++
var r,o,i
return t}(t,o,n),n,e,r)}))})),Gg(t.element,Zg(t.rows),t.rows)}(e),n,r).map((function(e){return Yg([nh(e)])}))})).getOrThunk(oh)
var n,r},uh=function(e,t){return 0<=t&&t<e.length&&_l(e.charAt(t))},sh=function(e,t){var n=ao(e.innerText)
return t?n.replace(/^[ \f\n\r\t\v]+/,""):n},ch=function(e,t,n){if(void 0===n&&(n={}),n.get=!0,n.format=t,n.selection=!0,(n=e.fire("BeforeGetContent",n)).isDefaultPrevented())return e.fire("GetContent",n),n.content
if("text"===n.format)return function(e){return N.from(e.selection.getRng()).map((function(t){var n=N.from(e.dom.getParent(t.commonAncestorContainer,e.dom.isBlock)),r=e.getBody(),o=n.map((function(e){return e.nodeName})).getOr("div").toLowerCase(),i=Ct.browser.isIE()&&"pre"!==o,a=e.dom.add(r,o,{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},t.cloneContents()),u=sh(a,i),s=ao(a.textContent)
if(e.dom.remove(a),uh(s,0)||uh(s,s.length-1)){var c=n.getOr(r),l=sh(c,i),f=l.indexOf(u)
return-1===f?u:(uh(l,f-1)?" ":"")+u+(uh(l,f+u.length)?" ":"")}return u})).getOr("")}(e)
n.getInner=!0
var r,o,i,a,u,s,c,l=(o=n,i=(r=e).selection.getRng(),a=r.dom.create("body"),u=r.selection.getSel(),s=Vd(r,cf(u)),(c=o.contextual?function(e,t){var n,r,o=lf(t,e)
return 0<o.length?ah(e,o):(n=e,0<(r=t).length&&r[0].collapsed?oh():ih(n,r[0]))}(Tt(r.getBody()),s).dom:i.cloneContents())&&a.appendChild(c),r.selection.serializer.serialize(a,o))
return"tree"===n.format?l:(n.content=e.selection.isCollapsed()?"":l,e.fire("GetContent",n),n.content)},lh=function(e){return An(e)?e.outerHTML:In(e)?Zo.encodeRaw(e.data,!1):Mn(e)?"\x3c!--"+e.data+"--\x3e":""},fh=function(e,t){var n=0
$(e,(function(e){var r,o,i
0===e[0]?n++:1===e[0]?(function(e,t,n){var r,o=function(e){var t,n=document.createElement("div"),r=document.createDocumentFragment()
for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t)
return r}(t)
e.hasChildNodes()&&n<e.childNodes.length?(r=e.childNodes[n]).parentNode.insertBefore(o,r):e.appendChild(o)}(t,e[1],n),n++):2===e[0]&&(o=n,(r=t).hasChildNodes()&&o<r.childNodes.length&&(i=r.childNodes[o]).parentNode.removeChild(i))}))},dh=vu(N.none()),mh=function(e){var t,n=(t=e.getBody(),K(q(ie(t.childNodes),lh),(function(e){return 0<e.length}))),r=Q(n,(function(t){var n=tm(e.serializer,t)
return 0<n.length?[n]:[]})),o=r.join("")
return-1!==o.indexOf("</iframe>")?{type:"fragmented",fragments:r,content:"",bookmark:null,beforeBookmark:null}:{type:"complete",fragments:null,content:o,bookmark:null,beforeBookmark:null}},ph=function(e,t,n){"fragmented"===t.type?function(e,t){var n,r,o,i,a,u,s,c,l,f=q(ie(t.childNodes),lh)
fh((r=e,o=(n=f).length+r.length+2,i=new Array(o),a=new Array(o),u=function(e,t,o,i,a){var s=c(e,t,o,i)
if(null===s||s.start===t&&s.diag===t-i||s.end===e&&s.diag===e-o)for(var l=e,f=o;l<t||f<i;)l<t&&f<i&&n[l]===r[f]?(a.push([0,n[l]]),++l,++f):i-o<t-e?(a.push([2,n[l]]),++l):(a.push([1,r[f]]),++f)
else{u(e,s.start,o,s.start-s.diag,a)
for(var d=s.start;d<s.end;++d)a.push([0,n[d]])
u(s.end,t,s.end-s.diag,i,a)}},s=function(e,t,o,i){for(var a=e;a-t<i&&a<o&&n[a]===r[a-t];)++a
return{start:e,end:a,diag:t}},c=function(e,t,o,u){var c=t-e,l=u-o
if(0==c||0==l)return null
var f,d,m,p,g,h=c-l,v=l+c,y=(v%2==0?v:1+v)/2
for(i[1+y]=e,a[1+y]=t+1,f=0;f<=y;++f){for(d=-f;d<=f;d+=2){for(m=d+y,d===-f||d!==f&&i[m-1]<i[m+1]?i[m]=i[m+1]:i[m]=i[m-1]+1,g=(p=i[m])-e+o-d;p<t&&g<u&&n[p]===r[g];)i[m]=++p,++g
if(h%2!=0&&h-f<=d&&d<=h+f&&a[m-h]<=i[m])return s(a[m-h],d+e-o,t,u)}for(d=h-f;d<=h+f;d+=2){for(m=d+y-h,d===h-f||d!==h+f&&a[m+1]<=a[m-1]?a[m]=a[m+1]-1:a[m]=a[m-1],g=(p=a[m]-1)-e+o-d;e<=p&&o<=g&&n[p]===r[g];)a[m]=p--,g--
if(h%2==0&&-f<=d&&d<=f&&a[m]<=i[m+h])return s(a[m],d+e-o,t,u)}}},l=[],u(0,n.length,0,r.length,l),l),t)}(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},gh=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},hh=function(e){var t=At("body",dh.get().getOrThunk((function(){var e=document.implementation.createHTMLDocument("undo")
return dh.set(N.some(e)),e})))
return Fu(t,gh(e)),$(Tu(t,"*[data-mce-bogus]"),gn),t.dom.innerHTML},vh=function(e,t){return!(!e||!t)&&(r=t,gh(e)===gh(r)||(n=t,hh(e)===hh(n)))
var n,r},yh=function(e){return 0===e.get()},bh=function(e,t,n){yh(n)&&(e.typing=t)},Ch=function(e,t){e.typing&&(bh(e,!1,t),e.add())},wh=function(e){return{undoManager:{beforeChange:function(t,n){return r=e,o=n,void(yh(t)&&o.set(N.some(Hs(r.selection))))
var r,o},addUndoLevel:function(t,n,r,o,i,a){return function(e,t,n,r,o,i,a){var u=mh(e)
if(i=i||{},i=Et.extend(i,u),!1===yh(r)||e.removed)return null
var s=t.data[n.get()]
if(e.fire("BeforeAddUndo",{level:i,lastLevel:s,originalEvent:a}).isDefaultPrevented())return null
if(s&&vh(s,i))return null
t.data[n.get()]&&o.get().each((function(e){t.data[n.get()].beforeBookmark=e}))
var c=e.getParam("custom_undo_redo_levels",0,"number")
if(c&&t.data.length>c){for(var l=0;l<t.data.length-1;l++)t.data[l]=t.data[l+1]
t.data.length--,n.set(t.data.length)}i.bookmark=Hs(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(i),n.set(t.data.length-1)
var f={level:i,lastLevel:s,originalEvent:a}
return 0<n.get()?(e.setDirty(!0),e.fire("AddUndo",f),e.fire("change",f)):e.fire("AddUndo",f),i}(e,t,n,r,o,i,a)},undo:function(t,n,r){return o=e,a=n,u=r,(i=t).typing&&(i.add(),i.typing=!1,bh(i,!1,a)),0<u.get()&&(u.set(u.get()-1),s=i.data[u.get()],ph(o,s,!0),o.setDirty(!0),o.fire("Undo",{level:s})),s
var o,i,a,u,s},redo:function(t,n){return r=e,i=n,(o=t).get()<i.length-1&&(o.set(o.get()+1),a=i[o.get()],ph(r,a,!1),r.setDirty(!0),r.fire("Redo",{level:a})),a
var r,o,i,a},clear:function(t,n){return r=e,i=n,(o=t).data=[],i.set(0),o.typing=!1,void r.fire("ClearUndos")
var r,o,i},reset:function(e){return(t=e).clear(),void t.add()
var t},hasUndo:function(t,n){return r=e,o=t,0<n.get()||o.typing&&o.data[0]&&!vh(mh(r),o.data[0])
var r,o},hasRedo:function(e,t){return n=e,t.get()<n.data.length-1&&!n.typing
var n},transact:function(e,t,n){return o=n,Ch(r=e,t),r.beforeChange(),r.ignore(o),r.add()
var r,o},ignore:function(e,t){try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}},extra:function(t,n,r,o){return i=e,u=n,s=r,c=o,void((a=t).transact(s)&&(l=a.data[u.get()].bookmark,f=a.data[u.get()-1],ph(i,f,!0),a.transact(c)&&(a.data[u.get()-1].beforeBookmark=l)))
var i,a,u,s,c,l,f}},formatter:{match:function(t,n,r){return ng(e,t,n,r)},matchAll:function(t,n){return o=t,i=n,a=[],u={},s=(r=e).selection.getStart(),r.dom.getParent(s,(function(e){for(var t=0;t<o.length;t++){var n=o[t]
!u[n]&&tg(r,e,n,i)&&(u[n]=!0,a.push(n))}}),r.dom.getRoot()),a
var r,o,i,a,u,s},matchNode:function(t,n,r,o){return tg(e,t,n,r,o)},canApply:function(t){return function(e,t){var n,r,o,i,a,u=e.formatter.get(t),s=e.dom
if(u)for(n=e.selection.getStart(),r=zl(s,n),i=u.length-1;0<=i;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0
for(o=r.length-1;0<=o;o--)if(s.is(r[o],a))return!0}return!1}(e,t)},closest:function(t){return function(e,t){var n=function(t){return Dt(t,Tt(e.getBody()))}
return N.from(e.selection.getStart(!0)).bind((function(r){return Yp(Tt(r),(function(n){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n])
if(r.isSome())return r}return N.none()}(t,(function(t){return r=t,tg(e,n.dom,r)?N.some(r):N.none()
var r}))}),n)})).getOrNull()}(e,t)},apply:function(t,n,r){return Wg(e,t,n,r)},remove:function(t,n,r,o){return Hg(e,t,n,r,o)},toggle:function(t,n,r){return i=t,a=n,u=r,s=(o=e).formatter.get(i),void(!ng(o,i,a,u)||"toggle"in s[0]&&!s[0].toggle?Wg:Hg)(o,i,a,u)
var o,i,a,u,s},formatChanged:function(t,n,r,o){return Xg(e,t,n,r,o)}},editor:{getContent:function(t,n){return r=e,o=t,i=n,N.from(r.getBody()).fold(c("tree"===o.format?new Kd("body",11):""),(function(e){return function(e,t,n,r){var o,i,a,u,s
return t.format=n,t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),o="raw"===t.format?Et.trim(nm(e.serializer,r.innerHTML)):"text"===t.format?e.dom.isEmpty(r)?"":ao(r.innerText||r.textContent):"tree"===t.format?e.serializer.serialize(r,t):(a=(i=e).serializer.serialize(r,t),u=Ws(i),s=new RegExp("^(<"+u+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+u+">[\r\n]*|<br \\/>[\r\n]*)$"),a.replace(s,"")),H(["text","tree"],t.format)||no(Tt(r))?t.content=o:t.content=Et.trim(o),t.no_events||e.fire("GetContent",t),t.content}(r,o,i,e)}))
var r,o,i},setContent:function(t,n){return Wp(e,t,n)},insertContent:function(t,n){return Hp(e,t,n)},addVisual:function(t){return r=t,o=(n=e).dom,i=L(r)?r:n.getBody(),P(n.hasVisual)&&(n.hasVisual=n.getParam("visual",!0,"boolean")),$(o.select("table,a",i),(function(e){switch(e.nodeName){case"TABLE":var t=n.getParam("visual_table_class","mce-item-table","string"),r=o.getAttrib(e,"border")
r&&"0"!==r||!n.hasVisual?o.removeClass(e,t):o.addClass(e,t)
break
case"A":var i,a
o.getAttrib(e,"href")||(i=o.getAttrib(e,"name")||e.id,a=n.getParam("visual_anchor_class","mce-item-anchor","string"),i&&n.hasVisual?o.addClass(e,a):o.removeClass(e,a))}})),void n.fire("VisualAid",{element:r,hasVisual:n.hasVisual})
var n,r,o,i}},selection:{getContent:function(t,n){return ch(e,t,n)}},raw:{getModel:function(){return N.none()}}}},xh=function(e){return he(e.plugins,"rtc")},Sh=function(e){return e.rtcInstance?e.rtcInstance:wh(e)},Nh=function(e){var t=e.rtcInstance
if(t)return t
throw new Error("Failed to get RTC instance not yet initialized.")},Eh=function(e){return 0===e.dom.length?(pn(e),N.none()):N.some(e)},kh=function(e,t,n,r){e.bind((function(e){return(r?tp:ep)(e.dom,r?e.dom.length:0),t.filter(zt).map((function(t){return o=t,i=n,a=r,u=e.dom,s=o.dom,c=a?u.length:s.length,void(a?(np(u,s,!1,!a),i.setStart(s,c)):(np(s,u,!1,!a),i.setEnd(s,c)))
var o,i,a,u,s,c}))})).orThunk((function(){var e
return(e=r,t.filter((function(e){return Nf.isBookmarkNode(e.dom)})).bind(e?Xt:Kt).or(t).filter(zt)).map((function(e){return n=r,void Wt(t=e).each((function(e){var r=t.dom
n&&Wm(e,bs(r,0))?ep(r,0):!n&&Km(e,bs(r,r.length))&&tp(r,r.length)}))
var t,n}))}))},_h=function(e,t,n){var r
e&&e.hasOwnProperty(t)&&(0===(r=K(e[t],(function(e){return e!==n}))).length?delete e[t]:e[t]=r)},Ah=function(e){return!!e.select},Rh=function(e){return!(!e||!e.ownerDocument)&&Lt(Tt(e.ownerDocument),Tt(e))},Th=function(e,t,n,r){var o,i,a,u,s,c,l=function(e,t){return s||(s={},c={},u.on("NodeChange",(function(e){var t=e.element,n=a.getParents(t,null,a.getRoot()),r={}
Et.each(s,(function(e,t){Et.each(n,(function(o){if(a.is(o,t))return c[t]||(Et.each(e,(function(e){e(!0,{node:o,selector:t,parents:n})})),c[t]=e),r[t]=e,!1}))})),Et.each(c,(function(e,o){r[o]||(delete c[o],Et.each(e,(function(e){e(!1,{node:t,selector:o,parents:n})})))}))}))),s[e]||(s[e]=[]),s[e].push(t),{unbind:function(){_h(s,e,t),_h(c,e,t)}}},f=function(e,t){return function(e,t,n){void 0===n&&(n={})
var r,o,i=(r=t,ke(ke({format:"html"},n),{set:!0,selection:!0,content:r}))
i.no_events||!(i=e.fire("BeforeSetContent",i)).isDefaultPrevented()?(n.content=function(e,t){if("raw"===t.format)return t.content
var n=e.selection.getRng(),r=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),o=r?{context:r.nodeName.toLowerCase()}:{},i=e.parser.parse(t.content,ke(ke({isRootContent:!0,forced_root_block:!1},o),t))
return um({validate:e.validate},e.schema).serialize(i)}(e,i),function(e,t){var n=N.from(t.firstChild).map(Tt),r=N.from(t.lastChild).map(Tt)
e.deleteContents(),e.insertNode(t)
var o=n.bind(Kt).filter(zt).bind(Eh),i=r.bind(Xt).filter(zt).bind(Eh)
kh(o,n,e,!0),kh(i,r,e,!1),e.collapse(!1)}(o=e.selection.getRng(),o.createContextualFragment(n.content)),e.selection.setRng(o),dd(e,o),i.no_events||e.fire("SetContent",i)):e.fire("SetContent",i)}(r,e,t)},d=function(e){var t=p()
t.collapse(!!e),g(t)},m=function(){return t.getSelection?t.getSelection():t.document.selection},p=function(){var n,a,u,c=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(c){return-1}},l=t.document
if(void 0!==r.bookmark&&!1===Id(r)){var f=_d(r)
if(f.isSome())return f.map((function(e){return Vd(r,[e])[0]})).getOr(l.createRange())}try{(n=m())&&!_n(n.anchorNode)&&(a=0<n.rangeCount?n.getRangeAt(0):n.createRange?n.createRange():l.createRange(),a=Vd(r,[a])[0])}catch(s){}return(a=a||(l.createRange?l.createRange():l.body.createTextRange())).setStart&&9===a.startContainer.nodeType&&a.collapsed&&(u=e.getRoot(),a.setStart(u,0),a.setEnd(u,0)),o&&i&&(0===c(a.START_TO_START,a,o)&&0===c(a.END_TO_END,a,o)?a=i:i=o=null),a},g=function(e,t){var n
if((a=e)&&(Ah(a)||Rh(a.startContainer)&&Rh(a.endContainer))){var a,u=Ah(e)?e:null
if(u){i=null
try{u.select()}catch(s){}}else{var c=m()
if(e=r.fire("SetSelectionRange",{range:e,forward:t}).range,c){i=e
try{c.removeAllRanges(),c.addRange(e)}catch(s){}!1===t&&c.extend&&(c.collapse(e.endContainer,e.endOffset),c.extend(e.startContainer,e.startOffset)),o=0<c.rangeCount?c.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!c.setBaseAndExtent||Ct.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset])&&"IMG"===n.tagName&&(c.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),c.anchorNode===e.startContainer&&c.focusNode===e.endContainer||c.setBaseAndExtent(n,0,n,1)),r.fire("AfterSetSelectionRange",{range:e,forward:t})}}},h=function(){var t=m(),n=null==t?void 0:t.anchorNode,r=null==t?void 0:t.focusNode
if(!t||!n||!r||_n(n)||_n(r))return!0
var o=e.createRng()
o.setStart(n,t.anchorOffset),o.collapse(!0)
var i=e.createRng()
return i.setStart(r,t.focusOffset),i.collapse(!0),o.compareBoundaryPoints(o.START_TO_START,i)<=0},v={bookmarkManager:null,controlSelection:null,dom:a=e,win:t,serializer:n,editor:u=r,collapse:d,setCursorLocation:function(t,n){var o=e.createRng()
L(t)&&L(n)?(o.setStart(t,n),o.setEnd(t,n),g(o),d(!1)):(gf(e,o,r.getBody(),!0),g(o))},getContent:function(e){return function(e,t){var n,r
return void 0===t&&(t={}),n=t.format?t.format:"html",r=t,Nh(e).selection.getContent(n,r)}(r,e)},setContent:f,getBookmark:function(e,t){return y.getBookmark(e,t)},moveToBookmark:function(e){return y.moveToBookmark(e)},select:function(t,n){var r,o,i
return r=e,o=t,i=n,N.from(o).map((function(e){var t=r.nodeIndex(e),n=r.createRng()
return n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),i&&(gf(r,n,e,!0),gf(r,n,e,!1)),n})).each(g),t},isCollapsed:function(){var e=p(),t=m()
return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:h,setNode:function(t){return f(e.getOuterHTML(t)),t},getNode:function(){return function(e,t){var n,r
if(!t)return e
n=t.startContainer,r=t.endContainer
var o=t.startOffset,i=t.endOffset,a=t.commonAncestorContainer
return!t.collapsed&&(n===r&&i-o<2&&n.hasChildNodes()&&(a=n.childNodes[o]),3===n.nodeType&&3===r.nodeType&&(n=n.length===o?Hd(n.nextSibling,!0):n.parentNode,r=0===i?Hd(r.previousSibling,!1):r.parentNode,n&&n===r))?n:a&&3===a.nodeType?a.parentNode:a}(r.getBody(),p())},getSel:m,setRng:g,getRng:p,getStart:function(e){return zd(r.getBody(),p(),e)},getEnd:function(e){return jd(r.getBody(),p(),e)},getSelectedBlocks:function(t,n){return function(e,t,n,r){var o,i=[],a=e.getRoot()
if(n=e.getParent(n||zd(a,t,t.collapsed),e.isBlock),r=e.getParent(r||jd(a,t,t.collapsed),e.isBlock),n&&n!==a&&i.push(n),n&&r&&n!==r)for(var u=new qr(o=n,a);(o=u.next())&&o!==r;)e.isBlock(o)&&i.push(o)
return r&&n!==r&&r!==a&&i.push(r),i}(e,p(),t,n)},normalize:function(){var t=p(),n=m()
if(1<cf(n).length||!hf(r))return t
var o=Uf(e,t)
return o.each((function(e){g(e,h())})),o.getOr(t)},selectorChanged:function(e,t){return l(e,t),v},selectorChangedWithUnbind:l,getScrollContainer:function(){for(var t,n=e.getRoot();n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n
break}n=n.parentNode}return t},scrollIntoView:function(e,t){return o=e,i=t,void((n=r).inline?cd:fd)(n,o,i)
var n,o,i},placeCaretAt:function(e,t){return g(Bf(e,t,r.getDoc()))},getBoundingClientRect:function(){var e=p()
return e.collapsed?bs.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){t=o=i=null,b.destroy()}},y=Nf(v),b=Tf(v,r)
return v.bookmarkManager=y,v.controlSelection=b,v},Oh=function(e,t){var n,r=fi()
t.convert_fonts_to_spans&&function(e,t,n){e.addNodeFilter("font",(function(e){$(e,(function(e){var r,o=t.parse(e.attr("style")),i=e.attr("color"),a=e.attr("face"),u=e.attr("size")
i&&(o.color=i),a&&(o["font-family"]=a),u&&(o["font-size"]=n[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",t.serialize(o)),r=e,$(["color","face","size"],(function(e){r.attr(e,null)}))}))}))}(e,r,Et.explode(t.font_size_legacy_values)),n=r,e.addNodeFilter("strike",(function(e){$(e,(function(e){var t=n.parse(e.attr("style"))
t["text-decoration"]="line-through",e.name="span",e.attr("style",n.serialize(t))}))}))},Bh=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},Ph=function(e,t){var n
try{n=atob(t)}catch(ZS){return N.none()}for(var r=new Uint8Array(n.length),o=0;o<r.length;o++)r[o]=n.charCodeAt(o)
return N.some(new Blob([r],{type:e}))},Dh=function(e){return 0===e.indexOf("blob:")?(t=e,new Or((function(e,r){var o=function(){r("Cannot convert "+t+" to Blob. Resource might not exist or is inaccessible.")}
try{var i=new XMLHttpRequest
i.open("GET",t,!0),i.responseType="blob",i.onload=function(){200===i.status?e(i.response):o()},i.onerror=o,i.send()}catch(n){o()}}))):0===e.indexOf("data:")?(n=e,new Or((function(e){var t=Bh(n),r=t.type,o=t.data
Ph(r,o).fold((function(){return e(new Blob([]))}),e)}))):null
var t,n},Lh=0,Ih=function(e){return(e||"blobid")+Lh++},Mh=function(e,t){var n={}
return{findAll:function(r,o){o=o||C
var i,a=K((i=r)?ie(i.getElementsByTagName("img")):[],(function(t){var n=t.src
return Ct.fileApi&&!t.hasAttribute("data-mce-bogus")&&!t.hasAttribute("data-mce-placeholder")&&n&&n!==Ct.transparentSrc&&(0===n.indexOf("blob:")?!e.isUploaded(n)&&o(t):0===n.indexOf("data:")&&o(t))})),u=q(a,(function(e){if(void 0!==n[e.src])return new Or((function(t){n[e.src].then((function(n){return"string"==typeof n?n:void t({image:e,blobInfo:n.blobInfo})}))}))
var r=new Or((function(n,r){(function(e,t,n,r){var o,i,a,u,s
0!==t.src.indexOf("blob:")?(i=(o=Bh(t.src)).data,a=o.type,u=i,(s=e.getByData(u,a))?n({image:t,blobInfo:s}):Dh(t.src).then((function(r){s=e.create(Ih(),r,u),e.add(s),n({image:t,blobInfo:s})}),(function(e){r(e)}))):(s=e.getByUri(t.src))?n({image:t,blobInfo:s}):Dh(t.src).then((function(r){var o
o=r,new Or((function(e){var t=new FileReader
t.onloadend=function(){e(t.result)},t.readAsDataURL(o)})).then((function(o){u=Bh(o).data,s=e.create(Ih(),r,u),e.add(s),n({image:t,blobInfo:s})}))}),(function(e){r(e)}))})(t,e,n,r)})).then((function(e){return delete n[e.image.src],e})).catch((function(t){return delete n[e.src],t}))
return n[e.src]=r}))
return Or.all(u)}}},Fh=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new Kd("br",1)).shortEnded=!0:r.empty().append(new Kd("#text",3)).value=ro},Uh=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},zh=function(e,t,n,r){return r.isEmpty(t,n,(function(t){return n=t,(r=e.getElementRule(n.name))&&r.paddEmpty
var n,r}))},jh=function(e,t){var n=e.schema
t.remove_trailing_brs&&e.addNodeFilter("br",(function(e,r,o){var i,a,u,s,c,l,f,d,m=e.length,p=Et.extend({},n.getBlockElements()),g=n.getNonEmptyElements(),h=n.getWhiteSpaceElements()
for(p.body=1,i=0;i<m;i++)if(u=(a=e[i]).parent,p[a.parent.name]&&a===u.lastChild){for(c=a.prev;c;){if("span"!==(l=c.name)||"bookmark"!==c.attr("data-mce-type")){"br"===l&&(a=null)
break}c=c.prev}a&&(a.remove(),zh(n,g,h,u)&&(f=n.getElementRule(u.name))&&(f.removeEmpty?u.remove():f.paddEmpty&&Fh(t,o,p,u)))}else{for(s=a;u&&u.firstChild===s&&u.lastChild===s&&!p[(s=u).name];)u=u.parent
s===u&&!0!==t.padd_empty_with_br&&((d=new Kd("#text",3)).value=ro,a.replace(d))}})),e.addAttributeFilter("href",(function(e){var n,r,o=e.length
if(!t.allow_unsafe_link_target)for(;o--;){var i=e[o]
"a"===i.name&&"_blank"===i.attr("target")&&i.attr("rel",(r=(n=i.attr("rel"))?Et.trim(n):"",/\b(noopener)\b/g.test(r)?r:r.split(" ").filter((function(e){return 0<e.length})).concat(["noopener"]).sort().join(" ")))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href"))for(r=o.parent,t=o.lastChild;n=t.prev,r.insert(t,o),t=n;);})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(function(e){for(var t,n,r,o=e.length;o--;)"ul"!==(r=(n=e[o]).parent).name&&"ol"!==r.name||(n.prev&&"li"===n.prev.name?n.prev.append(n):((t=new Kd("li",1)).attr("style","list-style-type: none"),n.wrap(t)))})),t.validate&&n.getValidClasses()&&e.addAttributeFilter("class",(function(e){for(var t,r,o,i,a,u,s,c=e.length,l=n.getValidClasses();c--;){for(r=(t=e[c]).attr("class").split(" "),a="",o=0;o<r.length;o++)i=r[o],s=!1,(u=l["*"])&&u[i]&&(s=!0),u=l[t.name],!s&&u&&u[i]&&(s=!0),s&&(a&&(a+=" "),a+=i)
a.length||(a=null),t.attr("class",a)}})),function(e,t){var n=t.blob_cache,r=function(e){var r,o,i=e.attr("src");(r=e).attr("src")===Ct.transparentSrc||r.attr("data-mce-placeholder")||e.attr("data-mce-bogus")||((o=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(i))?N.some({type:o[1],data:decodeURIComponent(o[2])}):N.none()).filter((function(){return function(e,t){if(t.images_dataimg_filter){var n=new Image
return n.src=e.attr("src"),se(e.attributes.map,(function(e,t){n.setAttribute(t,e)})),t.images_dataimg_filter(n)}return!0}(e,t)})).bind((function(e){var t=e.type,r=e.data
return N.from(n.getByData(r,t)).orThunk((function(){return Ph(t,r).map((function(e){var t=n.create(Ih(),e,r)
return n.add(t),t}))}))})).each((function(t){e.attr("src",t.blobUri())}))}
n&&e.addAttributeFilter("src",(function(e){return $(e,r)}))}(e,t)},Hh=Et.makeMap,Vh=Et.each,qh=Et.explode,$h=Et.extend,Wh=function(e,t){void 0===t&&(t=ci())
var n={},r=[],o={},i={};(e=e||{}).validate=!("validate"in e)||e.validate,e.root_name=e.root_name||"body"
var a,u,s=function(e){var t,a,u=e.name
u in n&&((a=o[u])?a.push(e):o[u]=[e]),t=r.length
for(;t--;)(u=r[t].name)in e.attributes.map&&((a=i[u])?a.push(e):i[u]=[e])
return e},c={schema:t,addAttributeFilter:function(e,t){Vh(qh(e),(function(e){for(var n=0;n<r.length;n++)if(r[n].name===e)return void r[n].callbacks.push(t)
r.push({name:e,callbacks:[t]})}))},getAttributeFilters:function(){return[].concat(r)},addNodeFilter:function(e,t){Vh(qh(e),(function(e){var r=n[e]
r||(n[e]=r=[]),r.push(t)}))},getNodeFilters:function(){var e=[]
for(var t in n)n.hasOwnProperty(t)&&e.push({name:t,callbacks:n[t]})
return e},filterNode:s,parse:function(a,u){var c,l,f,d,m,p,g,h,v=[]
u=u||{},o={},i={}
var y,b=$h(Hh("script,style,head,html,body,title,meta,param"),t.getBlockElements()),C=t.getNonEmptyElements(),w=t.children,x=e.validate,S=!1===(y="forced_root_block"in u?u.forced_root_block:e.forced_root_block)?"":!0===y?"p":y,N=t.getWhiteSpaceElements(),E=/^[ \t\r\n]+/,k=/[ \t\r\n]+$/,_=/[ \t\r\n]+/g,A=/^[ \t\r\n]+$/,R=N.hasOwnProperty(u.context)||N.hasOwnProperty(e.root_name),T=function(e,t){var r,i=new Kd(e,t)
return e in n&&((r=o[e])?r.push(i):o[e]=[i]),i},O=function(e){for(var n,r,o,i=t.getBlockElements(),a=e.prev;a&&3===a.type;){if(0<(r=a.value.replace(k,"")).length)return void(a.value=r)
if(n=a.next){if(3===n.type&&n.value.length){a=a.prev
continue}if(!i[n.name]&&"script"!==n.name&&"style"!==n.name){a=a.prev
continue}}o=a.prev,a.remove(),a=o}},B=Zd({validate:x,allow_html_data_urls:e.allow_html_data_urls,allow_svg_data_urls:e.allow_svg_data_urls,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,preserve_cdata:e.preserve_cdata,self_closing_elements:function(e){var t,n={}
for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t])
return n}(t.getSelfClosingElements()),cdata:function(e){h.append(T("#cdata",4)).value=e},text:function(e,t){var n,r
R||(e=e.replace(_," "),(r=h.lastChild)&&(b[r.name]||"br"===r.name)&&(e=e.replace(E,""))),0!==e.length&&((n=T("#text",3)).raw=!!t,h.append(n).value=e)},comment:function(e){h.append(T("#comment",8)).value=e},pi:function(e,t){h.append(T(e,7)).value=t,O(h)},doctype:function(e){h.append(T("#doctype",10)).value=e,O(h)},start:function(e,n,o){var a,u,s,c,l=x?t.getElementRule(e):{}
if(l){for((a=T(l.outputName||e,1)).attributes=n,a.shortEnded=o,h.append(a),(c=w[h.name])&&w[a.name]&&!c[a.name]&&v.push(a),u=r.length;u--;)(s=r[u].name)in n.map&&((p=i[s])?p.push(a):i[s]=[a])
b[e]&&O(a),o||(h=a),!R&&N[e]&&(R=!0)}},end:function(n){var r,o,i,a,s,c=x?t.getElementRule(n):{}
if(c){if(b[n]&&!R){if((r=h.firstChild)&&3===r.type)if(0<(o=r.value.replace(E,"")).length)r.value=o,r=r.next
else for(i=r.next,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.next,0!==o.length&&!A.test(o)||(r.remove(),r=i),r=i
if((r=h.lastChild)&&3===r.type)if(0<(o=r.value.replace(k,"")).length)r.value=o,r=r.prev
else for(i=r.prev,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.prev,0!==o.length&&!A.test(o)||(r.remove(),r=i),r=i}if(R&&N[n]&&(R=!1),c.removeEmpty&&zh(t,C,N,h))return a=h.parent,b[h.name]?h.empty().remove():h.unwrap(),void(h=a)
c.paddEmpty&&(Uh(s=h,"#text")&&s.firstChild.value===ro||zh(t,C,N,h))&&Fh(e,u,b,h),h=h.parent}}},t),P=h=new Kd(u.context||e.root_name,11)
if(B.parse(a,u.format),x&&v.length&&(u.context?u.invalid=!0:function(e){for(var n,r,o,i,a,u,c,l,f,d,m=Hh("tr,td,th,tbody,thead,tfoot,table"),p=t.getNonEmptyElements(),g=t.getWhiteSpaceElements(),h=t.getTextBlockElements(),v=t.getSpecialElements(),y=0;y<e.length;y++)if((n=e[y]).parent&&!n.fixed)if(h[n.name]&&"li"===n.parent.name){for(f=n.next;f&&h[f.name];)f.name="li",f.fixed=!0,n.parent.insert(f,n.parent),f=f.next
n.unwrap(n)}else{for(o=[n],r=n.parent;r&&!t.isValidChild(r.name,n.name)&&!m[r.name];r=r.parent)o.push(r)
if(r&&1<o.length){for(o.reverse(),i=a=s(o[0].clone()),l=0;l<o.length-1;l++){for(t.isValidChild(a.name,o[l].name)?(u=s(o[l].clone()),a.append(u)):u=a,c=o[l].firstChild;c&&c!==o[l+1];)d=c.next,u.append(c),c=d
a=u}zh(t,p,g,i)?r.insert(n,o[0],!0):(r.insert(i,o[0],!0),r.insert(n,i)),r=o[0],(zh(t,p,g,r)||Uh(r,"br"))&&r.empty().remove()}else if(n.parent){if("li"===n.name){if((f=n.prev)&&("ul"===f.name||"ol"===f.name)){f.append(n)
continue}if((f=n.next)&&("ul"===f.name||"ol"===f.name)){f.insert(n,f.firstChild,!0)
continue}n.wrap(s(new Kd("ul",1)))
continue}t.isValidChild(n.parent.name,"div")&&t.isValidChild("div",n.name)?n.wrap(s(new Kd("div",1))):v[n.name]?n.empty().remove():n.unwrap()}}}(v)),S&&("body"===P.name||u.isRootContent)&&function(){var n,r,o=P.firstChild,i=function(e){e&&((o=e.firstChild)&&3===o.type&&(o.value=o.value.replace(E,"")),(o=e.lastChild)&&3===o.type&&(o.value=o.value.replace(k,"")))}
if(t.isValidChild(P.name,S.toLowerCase())){for(;o;)n=o.next,3===o.type||1===o.type&&"p"!==o.name&&!b[o.name]&&!o.attr("data-mce-type")?(r||((r=T(S,1)).attr(e.forced_root_block_attrs),P.insert(r,o)),r.append(o)):(i(r),r=null),o=n
i(r)}}(),!u.invalid){for(g in o)if(o.hasOwnProperty(g)){for(p=n[g],d=(c=o[g]).length;d--;)c[d].parent||c.splice(d,1)
for(l=0,f=p.length;l<f;l++)p[l](c,g,u)}for(l=0,f=r.length;l<f;l++)if((p=r[l]).name in i){for(d=(c=i[p.name]).length;d--;)c[d].parent||c.splice(d,1)
for(d=0,m=p.callbacks.length;d<m;d++)p.callbacks[d](c,p.name,u)}}return P}}
return jh(c,e),a=c,(u=e).inline_styles&&Oh(a,u),c},Kh=function(e,t,n){-1===Et.inArray(t,n)&&(e.addAttributeFilter(n,(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),t.push(n))},Xh=function(e,t){var n=["data-mce-selected"],r=t&&t.dom?t.dom:fu.DOM,o=t&&t.schema?t.schema:ci(e)
e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
var i,a,u,s=Wh(e,o)
return a=e,u=r,(i=s).addAttributeFilter("data-mce-tabindex",(function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attr("data-mce-tabindex")),n.attr(t,null)})),i.addAttributeFilter("src,href,style",(function(e,t){for(var n,r,o=e.length,i="data-mce-"+t,s=a.url_converter,c=a.url_converter_scope;o--;)void 0!==(r=(n=e[o]).attr(i))?(n.attr(t,0<r.length?r:null),n.attr(i,null)):(r=n.attr(t),"style"===t?r=u.serializeStyle(u.parseStyle(r),n.name):s&&(r=s.call(c,r,t,n.name)),n.attr(t,0<r.length?r:null))})),i.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",0<n.length?n:null))})),i.addAttributeFilter("data-mce-type",(function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attr("data-mce-type")||n.cleanup||(N.from(r.firstChild).exists((function(e){return!io(e.value)}))?r.unwrap():r.remove())})),i.addNodeFilter("noscript",(function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=Zo.decode(t.value))})),i.addNodeFilter("script,style",(function(e,t){for(var n,r,o,i=e.length,u=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};i--;)r=(n=e[i]).firstChild?n.firstChild.value:"","script"===t?((o=n.attr("type"))&&n.attr("type","mce-no/type"===o?null:o.replace(/^mce\-/,"")),"xhtml"===a.element_format&&0<r.length&&(n.firstChild.value="// <![CDATA[\n"+u(r)+"\n// ]]>")):"xhtml"===a.element_format&&0<r.length&&(n.firstChild.value="\x3c!--\n"+u(r)+"\n--\x3e")})),i.addNodeFilter("#comment",(function(e){for(var t,n=e.length;n--;)t=e[n],a.preserve_cdata&&0===t.value.indexOf("[CDATA[")?(t.name="#cdata",t.type=4,t.value=u.decode(t.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===t.value.indexOf("mce:protected ")&&(t.name="#text",t.type=3,t.raw=!0,t.value=unescape(t.value).substr(14))})),i.addNodeFilter("xml:namespace,input",(function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||n.attr("type")||n.attr("type","text"))})),i.addAttributeFilter("data-mce-type",(function(e){$(e,(function(e){"format-caret"===e.attr("data-mce-type")&&(e.isEmpty(i.schema.getNonEmptyElements())?e.remove():e.unwrap())}))})),i.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),{schema:o,addNodeFilter:s.addNodeFilter,addAttributeFilter:s.addAttributeFilter,serialize:function(n,i){void 0===i&&(i={})
var a,u,c,l,f,d,m,p,g,h,v,y,b=ke({format:"html"},i),C=function(e,t,n){return o=n,(r=e)&&r.hasEventListeners("PreProcess")&&!o.no_events?function(e,t,n){var r,o,i=e.dom
t=t.cloneNode(!0)
var a,u,s=document.implementation
return s.createHTMLDocument&&(r=s.createHTMLDocument(""),Et.each("BODY"===t.nodeName?t.childNodes:[t],(function(e){r.body.appendChild(r.importNode(e,!0))})),t="BODY"!==t.nodeName?r.body.firstChild:r.body,o=i.doc,i.doc=r),a=e,u=ke(ke({},n),{node:t}),a.fire("PreProcess",u),o&&(i.doc=o),t}(e,t,n):t
var r,o}(t,n,b),w=(a=r,u=C,l=ao((c=b).getInner?u.innerHTML:a.getOuterHTML(u)),c.selection||no(Tt(u))?l:Et.trim(l)),x=(f=s,d=w,v=(m=b).selection?ke({forced_root_block:!1},m):m,!(g=function(e){return e&&"br"===e.name})(h=(y=f.parse(d,v)).lastChild)||g(p=h.prev)&&(h.remove(),p.remove()),y)
return"tree"===b.format?x:function(e,t,n,r,o){var i,a,u,s,c,l
return a=e,i=r,s=um(t,n).serialize(i),(u=o).no_events||!a?s:(c=a,l=ke(ke({},u),{content:s}),c.fire("PostProcess",l).content)}(t,e,o,x,b)},addRules:function(e){o.addValidElements(e)},setRules:function(e){o.setValidElements(e)},addTempAttr:f(Kh,s,n),getTempAttrs:c(n),getNodeFilters:s.getNodeFilters,getAttributeFilters:s.getAttributeFilters}},Yh=function(e,t){var n=Xh(e,t)
return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters}},Gh=function(e,t,n){return void 0===n&&(n={}),r=t,o=n,Sh(e).editor.setContent(r,o)
var r,o},Jh=fu.DOM,Qh=function(e){return N.from(e).each((function(e){return e.destroy()}))},Zh=Object.prototype.hasOwnProperty,ev=(yg=function(e,t){return R(e)&&R(t)?ev(e,t):t},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var o=e[r]
for(var i in o)Zh.call(o,i)&&(n[i]=yg(n[i],o[i]))}return n}),tv=ft().deviceType,nv=tv.isTouch(),rv=tv.isPhone(),ov=tv.isTablet(),iv=["lists","autolink","autosave"],av={table_grid:!1,object_resizing:!1,resize:!1},uv=function(e){var t=T(e)?e.join(" "):e,n=q(A(t)?t.split(" "):[],He)
return K(n,(function(e){return 0<e.length}))},sv=function(e,t){return e.sections().hasOwnProperty(t)},cv=function(e,t){return ge(e,"toolbar_mode").orThunk((function(){return ge(e,"toolbar_drawer").map((function(e){return!1===e?"wrap":e}))})).getOr(t)},lv=function(e,t,n,r){var o,i,a=uv(n.forced_plugins),u=uv(r.plugins),s=sv(o=t,"mobile")?o.sections().mobile:{},c=function(e,t,n,r){return e&&(a=i="mobile",u=(o=t).sections(),sv(o,i)&&u[i].theme===a)?K(r,f(H,iv)):e&&sv(t,"mobile")?r:n
var o,i,a,u}(e,t,u,s.plugins?uv(s.plugins):u),l=(i=c,[].concat(uv(a)).concat(uv(i)))
if(Ct.browser.isIE()&&H(l,"rtc"))throw new Error("RTC plugin is not supported on IE 11.")
return Et.extend(r,{plugins:l.join(" ")})},fv=function(e,t,n,r,o){var i,a,u,s,l,f,d=e?{mobile:(i=o.mobile||{},a=t,u={resize:!1,toolbar_mode:cv(i,"scrolling"),toolbar_sticky:!1},ke(ke(ke({},av),u),a?{menubar:!1}:{}))}:{},m=function(e,t){var n,r,o=me(t,(function(t,n){return H(e,n)}))
return n=o.t,r=o.f,{sections:c(n),settings:c(r)}}(["mobile"],ev(d,o)),p=Et.extend(n,r,m.settings(),e&&sv(m,"mobile")?function(e,t,n){void 0===n&&(n={})
var r=e.sections(),o=r.hasOwnProperty(t)?r[t]:{}
return Et.extend({},n,o)}(m,"mobile"):{},{validate:!0,external_plugins:(s=r,l=m.settings(),f=l.external_plugins?l.external_plugins:{},s&&s.external_plugins?Et.extend({},s.external_plugins,f):f)})
return lv(e,m,r,p)},dv=function(e,t,n){return N.from(t.settings[n]).filter(e)},mv=(bg={},{add:function(e,t){bg[e]=t},get:function(e){return bg[e]?bg[e]:{icons:{}}},has:function(e){return he(bg,e)}}),pv=function(e,t){return t.dom[e]},gv=function(e,t){return parseInt(Zn(t,e),10)},hv=f(pv,"clientWidth"),vv=f(pv,"clientHeight"),yv=f(gv,"margin-top"),bv=f(gv,"margin-left"),Cv=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,m=Tt(e.getBody()),p=e.inline?m:Tt(qt(m).dom.documentElement),g=(r=e.inline,i=t,a=n,u=(o=p).dom.getBoundingClientRect(),{x:i-(r?u.left+o.dom.clientLeft+bv(o):0),y:a-(r?u.top+o.dom.clientTop+yv(o):0)})
return c=g.x,l=g.y,f=hv(s=p),d=vv(s),0<=c&&0<=l&&c<=f&&l<=d},wv=function(e){var t,n=[],r=function(){var t,n=e.theme
return n&&n.getNotificationManagerImpl?n.getNotificationManagerImpl():{open:t=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:t,reposition:t,getArgs:t}},o=function(){return N.from(n[0])},i=function(){0<n.length&&r().reposition(n)},a=function(e){J(n,(function(t){return t===e})).each((function(e){n.splice(e,1)}))},u=function(t,u){if(void 0===u&&(u=!0),!e.removed&&function(e){var t
return t=e.inline?e.getBody():e.getContentAreaContainer(),N.from(t).map(Tt).map(hn).getOr(!1)}(e))return u&&e.fire("BeforeOpenNotification",{notification:t}),G(n,(function(e){return n=r().getArgs(e),o=t,!(n.type!==o.type||n.text!==o.text||n.progressBar||n.timeout||o.progressBar||o.timeout)
var n,o})).getOrThunk((function(){e.editorManager.setActive(e)
var u,s=r().open(t,(function(){a(s),i(),o().fold((function(){return e.focus()}),(function(e){return Tt(e.getEl()).dom.focus()}))}))
return u=s,n.push(u),i(),e.fire("OpenNotification",ke({},s)),s}))}
return(t=e).on("SkinLoaded",(function(){var e=t.getParam("service_message")
e&&u({text:e,type:"warning",timeout:0},!1)})),t.on("ResizeEditor ResizeWindow NodeChange",(function(){jr.requestAnimationFrame(i)})),t.on("remove",(function(){$(n.slice(),(function(e){r().close(e)}))})),{open:u,close:function(){o().each((function(e){r().close(e),a(e),i()}))},getNotifications:function(){return n}}},xv=xu.PluginManager,Sv=xu.ThemeManager,Nv=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getWindowManagerImpl?n.getWindowManagerImpl():{open:t=function(){throw new Error("Theme did not provide a WindowManager implementation.")},openUrl:t,alert:t,confirm:t,close:t,getParams:t,setParams:t}},r=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t?t.apply(e,n):void 0}},o=function(n){var r
r=n,e.fire("CloseWindow",{dialog:r}),0===(t=K(t,(function(e){return e!==n}))).length&&e.focus()},i=function(n){e.editorManager.setActive(e),kd(e)
var r=n()
return function(n){var r
t.push(n),r=n,e.fire("OpenWindow",{dialog:r})}(r),r}
return e.on("remove",(function(){$(t,(function(e){n().close(e)}))})),{open:function(e,t){return i((function(){return n().open(e,t,o)}))},openUrl:function(e){return i((function(){return n().openUrl(e,o)}))},alert:function(e,t,o){var i=n()
i.alert(e,r(o||i,t))},confirm:function(e,t,o){var i=n()
i.confirm(e,r(o||i,t))},close:function(){N.from(t[t.length-1]).each((function(e){n().close(e),o(e)}))}}},Ev=function(e,t){e.notificationManager.open({type:"error",text:t})},kv=function(e,t){e._skinLoaded?Ev(e,t):e.on("SkinLoaded",(function(){Ev(e,t)}))},_v=function(e,t,n){_f(e,t,{message:n}),console.error(n)},Av=function(e,t,n){return n?"Failed to load "+e+": "+n+" from url "+t:"Failed to load "+e+" url: "+t},Rv=function(e,t,n){_v(e,"PluginLoadError",Av("plugin",t,n))},Tv=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=window.console
r&&(r.error?r.error.apply(r,_e([e],t)):r.log.apply(r,_e([e],t)))},Ov=function(e,t){var n=e.editorManager.baseURL+"/skins/content",r="content"+e.editorManager.suffix+".css",o=!0===e.inline
return q(t,(function(t){return/^[a-z0-9\-]+$/i.test(t)&&!o?n+"/"+t+"/"+r:e.documentBaseURI.toAbsolute(t)}))},Bv=function(e){var t
e.contentCSS=e.contentCSS.concat(function(e){return Ov(e,(n=(t=e).getParam("content_css"),A(n)?q(n.split(","),He):T(n)?n:!1===n||t.inline?[]:["default"]))
var t,n}(e),Ov(t=e,Zs(t)))},Pv=function(){var e={},t=function(e,t){return{status:e,resultUri:t}},n=function(t){return t in e}
return{hasBlobUri:n,getResultUri:function(t){var n=e[t]
return n?n.resultUri:null},isPending:function(t){return!!n(t)&&1===e[t].status},isUploaded:function(t){return!!n(t)&&2===e[t].status},markPending:function(n){e[n]=t(1,null)},markUploaded:function(n,r){e[n]=t(2,r)},removeFailed:function(t){delete e[t]},destroy:function(){e={}}}},Dv=0,Lv=function(e){return e+Dv+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t())
var t},Iv=function(e,t){var n={},r=function(e,n,r,o){var i=new XMLHttpRequest
i.open("POST",t.url),i.withCredentials=t.credentials,i.upload.onprogress=function(e){o(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,o,a
i.status<200||300<=i.status?r("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?n((o=t.basePath,a=e.location,o?o.replace(/\/$/,"")+"/"+a.replace(/^\//,""):a)):r("Invalid JSON: "+i.responseText)}
var a=new FormData
a.append("file",e.blob(),e.filename()),i.send(a)},o=function(e,t){return{url:t,blobInfo:e,status:!0}},i=function(e,t,n){return{url:"",blobInfo:e,status:!1,error:{message:t,options:n}}},a=function(e,t){Et.each(n[e],(function(e){e(t)})),delete n[e]}
return!1===I(t.handler)&&(t.handler=r),{upload:function(u,s){return t.url||t.handler!==r?function(r,u){return r=Et.grep(r,(function(t){return!e.isUploaded(t.blobUri())})),Or.all(Et.map(r,(function(r){return e.isPending(r.blobUri())?(f=r.blobUri(),new Or((function(e){n[f]=n[f]||[],n[f].push(e)}))):(s=r,c=t.handler,l=u,e.markPending(s.blobUri()),new Or((function(t){var n
try{var u=function(){n&&n.close()}
c(s,(function(n){u(),e.markUploaded(s.blobUri(),n),a(s.blobUri(),o(s,n)),t(o(s,n))}),(function(n,r){var o=r||{}
u(),e.removeFailed(s.blobUri()),a(s.blobUri(),i(s,n,o)),t(i(s,n,o))}),(function(e){e<0||100<e||N.from(n).orThunk((function(){return N.from(l).map(v)})).each((function(t){(n=t).progressBar.value(e)}))}))}catch(r){t(i(s,r.message,{}))}})))
var s,c,l,f})))}(u,s):new Or((function(e){e([])}))}}},Mv=function(e){return function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})}},Fv=function(e,t){return Iv(t,{url:e.getParam("images_upload_url","","string"),basePath:e.getParam("images_upload_base_path","","string"),credentials:e.getParam("images_upload_credentials",!1,"boolean"),handler:e.getParam("images_upload_handler",null,"function")})},Uv=function(e){var t,n,r,o,i,a,u=(t=[],n=function(e){if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
var t=e.id||Lv("blobid"),n=e.name||t,r=e.blob
return{id:c(t),name:c(n),filename:c(e.filename||n+"."+({"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png","image/apng":"apng","image/avif":"avif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff"}[r.type.toLowerCase()]||"dat")),blob:c(r),base64:c(e.base64),blobUri:c(e.blobUri||URL.createObjectURL(r)),uri:c(e.uri)}},{create:function(e,t,r,o,i){if(A(e))return n({id:e,name:o,filename:i,blob:t,base64:r})
if(R(e))return n(e)
throw new Error("Unknown input type")},add:function(e){o(e.id())||t.push(e)},get:o=function(e){return r((function(t){return t.id()===e}))},getByUri:function(e){return r((function(t){return t.blobUri()===e}))},getByData:function(e,t){return r((function(n){return n.base64()===e&&n.blob().type===t}))},findFirst:r=function(e){return G(t,e).getOrUndefined()},removeByUri:function(e){t=K(t,(function(t){return t.blobUri()!==e||void URL.revokeObjectURL(t.blobUri())}))},destroy:function(){$(t,(function(e){URL.revokeObjectURL(e.blobUri())})),t=[]}}),s=Pv(),l=[],f=function(e){var t=vu(null)
return e.on("change AddUndo",(function(e){t.set(ke({},e.level))})),{fireIfChanged:function(){var n=e.undoManager.data
oe(n).filter((function(e){return!vh(t.get(),e)})).each((function(t){e.setDirty(!0),e.fire("change",{level:t,lastLevel:ne(n,n.length-2).getOrNull()})}))}}}(e),d=function(t){return function(n){return e.selection?t(n):[]}},m=function(e,t,n){for(var r=0;-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1),-1!==r;);return e},p=function(e,t,n){var r='src="'+n+'"'+(n===Ct.transparentSrc?' data-mce-placeholder="1"':"")
return e=m(e,'src="'+t+'"',r),m(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},g=function(t,n){$(e.undoManager.data,(function(e){"fragmented"===e.type?e.fragments=q(e.fragments,(function(e){return p(e,t,n)})):e.content=p(e.content,t,n)}))},h=function(t){return i=i||Fv(e,s),b().then(d((function(n){var r=q(n,(function(e){return e.blobInfo}))
return i.upload(r,Mv(e)).then(d((function(r){var o=[],i=q(r,(function(t,r){var i,a,s=n[r].blobInfo,c=n[r].image
return t.status&&e.getParam("images_replace_blob_uris",!0,"boolean")?(u.removeByUri(c.src),function(t,n){var r,o=e.convertURL(n,"src")
g(t.src,n),e.$(t).attr({src:e.getParam("images_reuse_filename",!1,"boolean")?(r=n)+(-1===r.indexOf("?")?"?":"&")+(new Date).getTime():n,"data-mce-src":o})}(c,t.url)):t.error&&(t.error.options.remove&&(g(c.getAttribute("src"),Ct.transparentSrc),o.push(c)),i=e,a=t.error.message,kv(i,wu.translate(["Failed to upload image: {0}",a]))),{element:c,status:t.status,uploadUri:t.url,blobInfo:s}}))
return 0<i.length&&f.fireIfChanged(),0<o.length&&(xh(e)?console.error("Removing images on failed uploads is currently unsupported for RTC"):e.undoManager.transact((function(){$(o,(function(t){e.dom.remove(t),u.removeByUri(t.src)}))}))),t&&t(i),i})))})))},v=function(t){if(Xs(e))return h(t)},y=function(t){return!1!==Z(l,(function(e){return e(t)}))&&(0!==t.getAttribute("src").indexOf("data:")||e.getParam("images_dataimg_filter",C,"function")(t))},b=function(){return(a=a||Mh(s,u)).findAll(e.getBody(),y).then(d((function(t){return t=K(t,(function(t){return"string"!=typeof t||void kv(e,t)})),$(t,(function(e){g(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),t})))},w=function(t){return t.replace(/src="(blob:[^"]+)"/g,(function(t,n){var r=s.getResultUri(n)
if(r)return'src="'+r+'"'
var o=u.getByUri(n)
return(o=o||Y(e.editorManager.get(),(function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)}),null))?'src="data:'+o.blob().type+";base64,"+o.base64()+'"':t}))}
return e.on("SetContent",(function(){(Xs(e)?v:b)()})),e.on("RawSaveContent",(function(e){e.content=w(e.content)})),e.on("GetContent",(function(e){e.source_view||"raw"===e.format||"tree"===e.format||(e.content=w(e.content))})),e.on("PostRender",(function(){e.parser.addNodeFilter("img",(function(e){$(e,(function(e){var t,n=e.attr("src")
u.getByUri(n)||(t=s.getResultUri(n))&&e.attr("src",t)}))}))})),{blobCache:u,addFilter:function(e){l.push(e)},uploadImages:h,uploadImagesAuto:v,scanForImages:b,destroy:function(){u.destroy(),s.destroy(),a=i=null}}},zv=Et.each,jv=fu.DOM,Hv=function(e,t){var n,r,o,i=t&&t.schema||ci({}),a=function(e){r="string"==typeof e?{name:e,classes:[],attrs:{}}:e
var t,n,o=jv.create(r.name)
return t=o,(n=r).classes.length&&jv.addClass(t,n.classes.join(" ")),jv.setAttribs(t,n.attrs),o},u=function(e,t,n){var r,o,s,c,l,f,d,m=0<t.length&&t[0],p=m&&m.name,g=(c=p,l="string"!=typeof(s=e)?s.nodeName.toLowerCase():s,!(!(d=(f=i.getElementRule(l))&&f.parentsRequired)||!d.length)&&(c&&-1!==Et.inArray(d,c)?c:d[0]))
if(g)p===g?(o=t[0],t=t.slice(1)):o=g
else if(m)o=t[0],t=t.slice(1)
else if(!n)return e
return o&&(r=a(o)).appendChild(e),n&&(r||(r=jv.create("div")).appendChild(e),Et.each(n,(function(t){var n=a(t)
r.insertBefore(n,e)}))),u(r,t,o&&o.siblings)}
return e&&e.length?(r=e[0],n=a(r),(o=jv.create("div")).appendChild(u(n,e.slice(1),r.siblings)),o):""},Vv=function(e){var t,n={classes:[],attrs:{}}
return"*"!==(e=n.selector=Et.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,(function(e,t,r,o,i){switch(t){case"#":n.attrs.id=r
break
case".":n.classes.push(r)
break
case":":-1!==Et.inArray("checked disabled enabled read-only required".split(" "),r)&&(n.attrs[r]=r)}var a
return"["!==o||(a=i.match(/([\w\-]+)(?:\=\"([^\"]+))?/))&&(n.attrs[a[1]]=a[2]),""}))),n.name=t||"div",n},qv=function(e,t){var n,r,o,i="",a=(o=e.getParam("preview_styles","font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),A(o)?o:"")
if(""===a)return""
var u=function(e){return e.replace(/%(\w+)/g,"")}
if("string"==typeof t){if(!(t=e.formatter.get(t)))return
t=t[0]}if("preview"in t){var s=ge(t,"preview")
if(s.is(!1))return""
a=s.getOr(a)}n=t.block||t.inline||"span"
var c,l=(c=t.selector)&&"string"==typeof c?(c=(c=c.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Et.map(c.split(/(?:>|\s+(?![^\[\]]+\]))/),(function(e){var t=Et.map(e.split(/(?:~\+|~|\+)/),Vv),n=t.pop()
return t.length&&(n.siblings=t),n})).reverse()):[],f=l.length?(l[0].name||(l[0].name=n),n=t.selector,Hv(l,e)):Hv([n],e),d=jv.select(n,f)[0]||f.firstChild
return zv(t.styles,(function(e,t){var n=u(e)
n&&jv.setStyle(d,t,n)})),zv(t.attributes,(function(e,t){var n=u(e)
n&&jv.setAttrib(d,t,n)})),zv(t.classes,(function(e){var t=u(e)
jv.hasClass(d,t)||jv.addClass(d,t)})),e.fire("PreviewFormats"),jv.setStyles(f,{position:"absolute",left:-65535}),e.getBody().appendChild(f),r=jv.getStyle(e.getBody(),"fontSize",!0),r=/px$/.test(r)?parseInt(r,10):0,zv(a.split(" "),(function(t){var n=jv.getStyle(d,t,!0)
if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=jv.getStyle(e.getBody(),t,!0),"#ffffff"===jv.toHex(n).toLowerCase())||"color"===t&&"#000000"===jv.toHex(n).toLowerCase())){if("font-size"===t&&/em|%$/.test(n)){if(0===r)return
n=parseFloat(n)/(/%$/.test(n)?100:1)*r+"px"}"border"===t&&n&&(i+="padding:0 2px;"),i+=t+":"+n+";"}})),e.fire("AfterPreviewFormats"),jv.remove(f),i},$v=function(e){var t=function(e){var t,n,r={},o=function(e,t){e&&("string"!=typeof e?Et.each(e,(function(e,t){o(t,e)})):(T(t)||(t=[t]),Et.each(t,(function(e){void 0===e.deep&&(e.deep=!e.selector),void 0===e.split&&(e.split=!e.selector||e.inline),void 0===e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))})),r[e]=t))}
return o((t=e.dom,n={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all",preserve_attributes:["class","style"]},{inline:"s",remove:"all",preserve_attributes:["class","style"]}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",defaultBlock:"p",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(e,t,n){return An(e)&&e.hasAttribute("href")},onformat:function(e,n,r){Et.each(r,(function(n,r){t.setAttrib(e,r,n)}))}},removeformat:[{selector:"b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]},Et.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),(function(e){n[e]={block:e,remove:"all"}})),n)),o(e.getParam("formats")),{get:function(e){return e?r[e]:r},has:function(e){return he(r,e)},register:o,unregister:function(e){return e&&r[e]&&delete r[e],r}}}(e),n=vu(null)
return function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t])
e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])}(e),function(e){e.on("mouseup keydown",(function(t){var n,r,o,i
n=e,r=t.keyCode,o=n.selection,i=n.getBody(),lg(n,null,!1),8!==r&&46!==r||!o.isCollapsed()||o.getStart().innerHTML!==og||lg(n,vl(i,o.getStart())),37!==r&&39!==r||lg(n,vl(i,o.getStart()))}))}(e),{get:t.get,has:t.has,register:t.register,unregister:t.unregister,apply:function(t,n,r){var o,i,a
o=t,i=n,a=r,Nh(e).formatter.apply(o,i,a)},remove:function(t,n,r,o){var i,a,u,s
i=t,a=n,u=r,s=o,Nh(e).formatter.remove(i,a,u,s)},toggle:function(t,n,r){var o,i,a
o=t,i=n,a=r,Nh(e).formatter.toggle(o,i,a)},match:function(t,n,r){return o=t,i=n,a=r,Nh(e).formatter.match(o,i,a)
var o,i,a},closest:function(t){return n=t,Nh(e).formatter.closest(n)
var n},matchAll:function(t,n){return r=t,o=n,Nh(e).formatter.matchAll(r,o)
var r,o},matchNode:function(t,n,r,o){return i=t,a=n,u=r,s=o,Nh(e).formatter.matchNode(i,a,u,s)
var i,a,u,s},canApply:function(t){return n=t,Nh(e).formatter.canApply(n)
var n},formatChanged:function(t,r,o){return i=n,a=t,u=r,void 0===(s=o)&&(s=!1),Nh(e).formatter.formatChanged(i,a,u,s)
var i,a,u,s},getCssText:f(qv,e)}},Wv=function(e){var t,n=vu(N.none()),r=vu(0),o=vu(0),i={data:[],typing:!1,beforeChange:function(){var t,o
t=r,o=n,Nh(e).undoManager.beforeChange(t,o)},add:function(t,a){return u=i,s=o,c=r,l=n,f=t,d=a,Nh(e).undoManager.addUndoLevel(u,s,c,l,f,d)
var u,s,c,l,f,d},undo:function(){return t=i,n=r,a=o,Nh(e).undoManager.undo(t,n,a)
var t,n,a},redo:function(){return t=e,n=o,r=i.data,Nh(t).undoManager.redo(n,r)
var t,n,r},clear:function(){var t,n
t=i,n=o,Nh(e).undoManager.clear(t,n)},reset:function(){var t
t=i,Nh(e).undoManager.reset(t)},hasUndo:function(){return t=i,n=o,Nh(e).undoManager.hasUndo(t,n)
var t,n},hasRedo:function(){return t=i,n=o,Nh(e).undoManager.hasRedo(t,n)
var t,n},transact:function(t){return n=i,o=r,a=t,Nh(e).undoManager.transact(n,o,a)
var n,o,a},ignore:function(t){var n,o
n=r,o=t,Nh(e).undoManager.ignore(n,o)},extra:function(t,n){var r,a,u,s
r=i,a=o,u=t,s=n,Nh(e).undoManager.extra(r,a,u,s)}}
return xh(e)||function(e,t,n){var r=vu(!1),o=function(e){bh(t,!1,n),t.add({},e)}
e.on("init",(function(){t.add()})),e.on("BeforeExecCommand",(function(e){var r=e.command.toLowerCase()
"undo"!==r&&"redo"!==r&&"mcerepaint"!==r&&(Ch(t,n),t.beforeChange())})),e.on("ExecCommand",(function(e){var t=e.command.toLowerCase()
"undo"!==t&&"redo"!==t&&"mcerepaint"!==t&&o(e)})),e.on("ObjectResizeStart cut",(function(){t.beforeChange()})),e.on("SaveContent ObjectResized blur",o),e.on("dragend",o),e.on("keyup",(function(n){var i=n.keyCode
n.isDefaultPrevented()||((33<=i&&i<=36||37<=i&&i<=40||45===i||n.ctrlKey)&&(o(),e.nodeChanged()),46!==i&&8!==i||e.nodeChanged(),r.get()&&t.typing&&!1===vh(mh(e),t.data[0])&&(!1===e.isDirty()&&(e.setDirty(!0),e.fire("change",{level:t.data[0],lastLevel:null})),e.fire("TypingUndo"),r.set(!1),e.nodeChanged()))})),e.on("keydown",(function(e){var i,a=e.keyCode
e.isDefaultPrevented()||(33<=a&&a<=36||37<=a&&a<=40||45===a?t.typing&&o(e):(i=e.ctrlKey&&!e.altKey||e.metaKey,!(a<16||20<a)||224===a||91===a||t.typing||i||(t.beforeChange(),bh(t,!0,n),t.add({},e),r.set(!0))))})),e.on("mousedown",(function(e){t.typing&&o(e)})),e.on("input",(function(e){var t,n
e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(n=e).inputType&&null===n.data||"insertFromPaste"===(t=e).inputType||"insertFromDrop"===t.inputType)&&o(e)})),e.on("AddUndo Undo Redo ClearUndos",(function(t){t.isDefaultPrevented()||e.nodeChanged()}))}(e,i,r),(t=e).addShortcut("meta+z","","Undo"),t.addShortcut("meta+y,meta+shift+z","","Redo"),i},Kv=[9,27,Af.HOME,Af.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,Af.DOWN,Af.UP,Af.LEFT,Af.RIGHT].concat(Ct.browser.isFirefox()?[224]:[]),Xv="data-mce-placeholder",Yv=function(e){return"keydown"===e.type||"keyup"===e.type},Gv=function(e){var t=e.keyCode
return t===Af.BACKSPACE||t===Af.DELETE},Jv=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,Qv=function(e,t){return Bt(Tt(t),e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string"))},Zv=function(e,t,n){var r,o,i,a=(r=e,o=t,i=n,K(fu.DOM.getParents(i.container(),"*",o),r))
return N.from(a[a.length-1])},ey=function(e,t){if(!t)return t
var n=t.container(),r=t.offset()
return e?lo(n)?In(n.nextSibling)?bs(n.nextSibling,0):bs.after(n):po(t)?bs(n,r+1):t:lo(n)?In(n.previousSibling)?bs(n.previousSibling,n.previousSibling.data.length):bs.before(n):go(t)?bs(n,r-1):t},ty=f(ey,!0),ny=f(ey,!1),ry=function(e,t){return Lt(e,t)?_r(t,(function(e){return Jr(e)||Zr(e)}),(n=e,function(e){return Dt(n,Tt(e.dom.parentNode))})):N.none()
var n},oy=function(e){var t,n,r
e.dom.isEmpty(e.getBody())&&(e.setContent(""),r=(n=(t=e).getBody()).firstChild&&t.dom.isBlock(n.firstChild)?n.firstChild:n,t.selection.setCursorLocation(r,0))},iy=function(e,t){return{from:e,to:t}},ay=function(e,t){var n=Tt(e),r=Tt(t.container())
return ry(n,r).map((function(e){return{block:e,position:t}}))},uy=function(e){var t,n=(t=Jt(e),J(t,Xr).fold((function(){return t}),(function(e){return t.slice(0,e)})))
return $(n,pn),n},sy=function(e,t){var n=km(t,e)
return G(n.reverse(),(function(e){return Io(e)})).each(pn)},cy=function(e,t,n,r){if(Io(n))return Sm(n),ml(n.dom)
0===K(Yt(r),(function(e){return!Io(e)})).length&&Io(t)&&sn(r,At("br"))
var o=dl(n.dom,bs.before(r.dom))
return $(uy(t),(function(e){sn(r,e)})),sy(e,t),o},ly=function(e,t,n){if(Io(n))return pn(n),Io(t)&&Sm(t),ml(t.dom)
var r=pl(n.dom)
return $(uy(t),(function(e){fn(n,e)})),sy(e,t),r},fy=function(e,t){ll(e,t.dom).map((function(e){return e.getNode()})).map(Tt).filter(Gr).each(pn)},dy=function(e,t,n){return fy(!0,t),fy(!1,n),function(e,t){return Lt(t,e)?(n=km(e,t),N.from(n[n.length-1])):N.none()
var n}(t,n).fold(f(ly,e,t,n),f(cy,e,t,n))},my=function(e,t,n,r){return t?dy(e,r,n):dy(e,n,r)},py=function(e,t){var n,r,o,i=Tt(e.getBody()),a=(n=i.dom,r=t,((o=e.selection.getRng()).collapsed?function(e,t,n){var r=ay(e,bs.fromRangeStart(n)),o=r.bind((function(n){return ul(t,e,n.position).bind((function(n){return ay(e,n).map((function(n){return r=e,o=t,zn((i=n).position.getNode())&&!1===Io(i.block)?ll(!1,i.block.dom).bind((function(e){return e.isEqual(i.position)?ul(o,r,e).bind((function(e){return ay(r,e)})):N.some(i)})).getOr(i):i
var r,o,i}))}))}))
return qu(r,o,iy).filter((function(e){return!1===Dt((r=e).from.block,r.to.block)&&Wt((n=e).from.block).bind((function(e){return Wt(n.to.block).filter((function(t){return Dt(e,t)}))})).isSome()&&!1===Vn((t=e).from.block.dom)&&!1===Vn(t.to.block.dom)
var t,n,r}))}(n,r,o):N.none()).bind((function(e){return my(i,t,e.from.block,e.to.block)})))
return a.each((function(t){e.selection.setRng(t.toRange())})),a.isSome()},gy=function(e,t){var n=Tt(t),r=f(Dt,e)
return kr(n,to,r).isSome()},hy=function(e){var t,n,r,o,i=Tt(e.getBody())
return function(e,t){var n,r,o=dl(e.dom,bs.fromRangeStart(t)).isNone(),i=fl(e.dom,bs.fromRangeEnd(t)).isNone()
return!(gy(n=e,(r=t).startContainer)||gy(n,r.endContainer))&&o&&i}(i,e.selection.getRng())?((o=e).setContent(""),o.selection.setCursorLocation(),!0):(t=i,n=e.selection,r=n.getRng(),qu(ry(t,Tt(r.startContainer)),ry(t,Tt(r.endContainer)),(function(e,o){return!1===Dt(e,o)&&(r.deleteContents(),my(t,!0,e,o).each((function(e){n.setRng(e.toRange())})),!0)})).getOr(!1))},vy=function(e,t){return!e.selection.isCollapsed()&&hy(e)},yy=Hn,by=Vn,Cy=function(e,t,n,r,o){return N.from(t._selectionOverrides.showCaret(e,n,r,o))},wy=function(e,t){var n,r
return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?N.none():N.some(((r=(n=t).ownerDocument.createRange()).selectNode(n),r))},xy=function(e,t,n){var r=Uc(1,e.getBody(),t),o=bs.fromRangeStart(r),i=o.getNode()
if(wc(i))return Cy(1,e,i,!o.isAtEnd(),!1)
var a=o.getNode(!0)
if(wc(a))return Cy(1,e,a,!1,!1)
var u=e.dom.getParent(o.getNode(),(function(e){return by(e)||yy(e)}))
return wc(u)?Cy(1,e,u,!1,n):N.none()},Sy=function(e,t,n){return t.collapsed?xy(e,t,n).getOr(t):t},Ny=function(e){return wm(e)||vm(e)},Ey=function(e){return xm(e)||ym(e)},ky=function(e,t,n,r,o,i){var a,u
return Cy(r,e,i.getNode(!o),o,!0).each((function(n){var r
t.collapsed?(r=t.cloneRange(),o?r.setEnd(n.startContainer,n.startOffset):r.setStart(n.endContainer,n.endOffset),r.deleteContents()):t.deleteContents(),e.selection.setRng(n)})),a=e.dom,In(u=n)&&0===u.data.length&&a.remove(u),!0},_y=function(e,t){var n=e.selection.getRng()
if(!In(n.commonAncestorContainer))return!1
var r=t?Cs.Forwards:Cs.Backwards,o=rl(e.getBody()),i=f(Vc,t?o.next:o.prev),a=t?Ny:Ey,u=jc(r,e.getBody(),n),s=ey(t,i(u))
if(!s||!qc(u,s))return!1
if(a(s))return ky(e,n,u.getNode(),r,t,s)
var c=i(s)
return!!(c&&a(c)&&qc(s,c))&&ky(e,n,u.getNode(),r,t,c)},Ay=vr([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),Ry=function(e,t,n){return ul(t,e,n).bind((function(r){return c=r.getNode(),to(Tt(c))||Zr(Tt(c))?N.none():(o=e,u=r,s=function(e){return Yr(Tt(e))&&!Pc(a,u,o)},zc(!(i=t),a=n).fold((function(){return zc(i,u).fold(b,s)}),s)?N.none():t&&Vn(r.getNode())||!1===t&&Vn(r.getNode(!0))?function(e,t,n,r){var o=r.getNode(!1===t)
return ry(Tt(e),Tt(n.getNode())).map((function(e){return Io(e)?Ay.remove(e.dom):Ay.moveToElement(o)})).orThunk((function(){return N.some(Ay.moveToElement(o))}))}(e,t,n,r):t&&xm(n)||!1===t&&wm(n)?N.some(Ay.moveToPosition(r)):N.none())
var o,i,a,u,s,c}))},Ty=function(e,t){return N.from(Ef(e.getBody(),t))},Oy=function(e,t){var n=e.selection.getNode()
return Ty(e,n).filter(Vn).fold((function(){return n=e.getBody(),r=t,o=e.selection.getRng(),i=Uc(r?1:-1,n,o),a=bs.fromRangeStart(i),u=Tt(n),(!1===r&&xm(a)?N.some(Ay.remove(a.getNode(!0))):r&&wm(a)?N.some(Ay.remove(a.getNode())):!1===r&&wm(a)&&Fm(u,a)?Um(u,a).map((function(e){return Ay.remove(e.getNode())})):r&&xm(a)&&Mm(u,a)?zm(u,a).map((function(e){return Ay.remove(e.getNode())})):function(e,t,n){return i=t,a=n.getNode(!1===i),u=i?"after":"before",An(a)&&a.getAttribute("data-mce-caret")===u?(r=t,o=n.getNode(!1===t),(r&&Vn(o.nextSibling)?N.some(Ay.moveToElement(o.nextSibling)):!1===r&&Vn(o.previousSibling)?N.some(Ay.moveToElement(o.previousSibling)):N.none()).fold((function(){return Ry(e,t,n)}),N.some)):Ry(e,t,n).bind((function(t){return r=e,o=n,t.fold((function(e){return N.some(Ay.remove(e))}),(function(e){return N.some(Ay.moveToElement(e))}),(function(e){return Pc(o,e,r)?N.none():N.some(Ay.moveToPosition(e))}))
var r,o}))
var r,o,i,a,u}(n,r,a)).exists((function(n){return n.fold((function(e){return a._selectionOverrides.hideFakeCaret(),dp(a,u,Tt(e)),!0}),(i=u=t,function(e){var t=i?bs.before(e):bs.after(e)
return o.selection.setRng(t.toRange()),!0}),(r=o=a=e,function(e){return r.selection.setRng(e.toRange()),!0}))
var r,o,i,a,u}))
var n,r,o,i,a,u}),C)},By=function(e,t){var n=e.selection.getNode()
return!!Vn(n)&&Ty(e,n.parentNode).filter(Vn).fold((function(){var n
return n=Tt(e.getBody()),$(Tu(n,".mce-offscreen-selection"),pn),dp(e,t,Tt(e.selection.getNode())),oy(e),!0}),C)},Py=function(e){var t,n=e.dom,r=e.selection,o=Ef(e.getBody(),r.getNode())
return Hn(o)&&n.isBlock(o)&&n.isEmpty(o)&&(t=n.create("br",{"data-mce-bogus":"1"}),n.setHTML(o,""),o.appendChild(t),r.setRng(bs.before(t).toRange())),!0},Dy=function(e,t){return(e.selection.isCollapsed()?Oy:By)(e,t)},Ly=function(e,t){return!!e.selection.isCollapsed()&&(n=e,r=t,o=bs.fromRangeStart(n.selection.getRng()),ul(r,n.getBody(),o).filter((function(e){return(r?gm:hm)(e)})).bind((function(e){return N.from(Dc(r?0:-1,e))})).exists((function(e){return n.selection.select(e),!0})))
var n,r,o},Iy=In,My=function(e){return Iy(e)&&e.data[0]===oo},Fy=function(e){return Iy(e)&&e.data[e.data.length-1]===oo},Uy=function(e){return e.ownerDocument.createTextNode(oo)},zy=function(e,t){return(e?function(e){if(Iy(e.previousSibling))return Fy(e.previousSibling)||e.previousSibling.appendData(oo),e.previousSibling
if(Iy(e))return My(e)||e.insertData(0,oo),e
var t=Uy(e)
return e.parentNode.insertBefore(t,e),t}:function(e){if(Iy(e.nextSibling))return My(e.nextSibling)||e.nextSibling.insertData(0,oo),e.nextSibling
if(Iy(e))return Fy(e)||e.appendData(oo),e
var t=Uy(e)
return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t})(t)},jy=f(zy,!0),Hy=f(zy,!1),Vy=function(e,t){return In(e.container())?zy(t,e.container()):zy(t,e.getNode())},qy=function(e,t){var n=t.get()
return n&&e.container()===n&&lo(n)},$y=function(e,t){return t.fold((function(t){mc(e.get())
var n=jy(t)
return e.set(n),N.some(bs(n,n.length-1))}),(function(t){return ml(t).map((function(t){if(qy(t,e))return bs(e.get(),1)
mc(e.get())
var n=Vy(t,!0)
return e.set(n),bs(n,1)}))}),(function(t){return pl(t).map((function(t){if(qy(t,e))return bs(e.get(),e.get().length-1)
mc(e.get())
var n=Vy(t,!1)
return e.set(n),bs(n,n.length-1)}))}),(function(t){mc(e.get())
var n=Hy(t)
return e.set(n),N.some(bs(n,1))}))},Wy=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t)
if(r.isSome())return r}return N.none()},Ky=vr([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),Xy=function(e,t){return Bc(t,e)||e},Yy=function(e,t,n){var r=ty(n),o=Xy(t,r.container())
return Zv(e,o,r).fold((function(){return fl(o,r).bind(f(Zv,e,o)).map((function(e){return Ky.before(e)}))}),N.none)},Gy=function(e,t){return null===vl(e,t)},Jy=function(e,t,n){return Zv(e,t,n).filter(f(Gy,t))},Qy=function(e,t,n){var r=ny(n)
return Jy(e,t,r).bind((function(e){return dl(e,r).isNone()?N.some(Ky.start(e)):N.none()}))},Zy=function(e,t,n){var r=ty(n)
return Jy(e,t,r).bind((function(e){return fl(e,r).isNone()?N.some(Ky.end(e)):N.none()}))},eb=function(e,t,n){var r=ny(n),o=Xy(t,r.container())
return Zv(e,o,r).fold((function(){return dl(o,r).bind(f(Zv,e,o)).map((function(e){return Ky.after(e)}))}),N.none)},tb=function(e){return!1===function(e){return"rtl"===fu.DOM.getStyle(e,"direction",!0)||(t=e.textContent,Jv.test(t))
var t}(rb(e))},nb=function(e,t,n){return Wy([Yy,Qy,Zy,eb],[e,t,n]).filter(tb)},rb=function(e){return e.fold(l,l,l,l)},ob=function(e){return e.fold(c("before"),c("start"),c("end"),c("after"))},ib=function(e){return e.fold(Ky.before,Ky.before,Ky.after,Ky.after)},ab=function(e){return e.fold(Ky.start,Ky.start,Ky.end,Ky.end)},ub=function(e,t,n,r,o,i){return qu(Zv(t,n,r),Zv(t,n,o),(function(t,r){return t!==r&&(a=r,u=Bc(t,o=n),s=Bc(a,o),u&&u===s)?Ky.after(e?t:r):i
var o,a,u,s})).getOr(i)},sb=function(e,t){return e.fold(C,(function(e){return r=t,!(ob(n=e)===ob(r)&&rb(n)===rb(r))
var n,r}))},cb=function(e,t){return e?t.fold(s(N.some,Ky.start),N.none,s(N.some,Ky.after),N.none):t.fold(N.none,s(N.some,Ky.before),N.none,s(N.some,Ky.end))},lb=function(e,t,n,r){var o=ey(e,r),i=nb(t,n,o)
return nb(t,n,o).bind(f(cb,e)).orThunk((function(){return a=t,u=n,s=i,c=ey(o=e,r),ul(o,u,c).map(f(ey,o)).fold((function(){return s.map(ib)}),(function(e){return nb(a,u,e).map(f(ub,o,a,u,c,e)).filter(f(sb,s))})).filter(tb)
var o,a,u,s,c}))},fb=(f(lb,!1),f(lb,!0),function(e,t,n){var r=e?1:-1
return t.setRng(bs(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0}),db=function(e,t){var n=e.dom.createRng()
n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},mb=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},pb=function(e,t,n){return $y(t,n).map((function(t){return db(e,t),n}))},gb=function(e,t,n){return!!rc(e)&&(o=t,i=n,a=(r=e).getBody(),u=bs.fromRangeStart(r.selection.getRng()),s=f(Qv,r),lb(i,s,a,u).bind((function(e){return pb(r,o,e)})).isSome())
var r,o,i,a,u,s},hb=function(e,t,n){return!!rc(t)&&function(e,t){var n=t.selection.getRng(),r=e?bs.fromRangeEnd(n):bs.fromRangeStart(n)
return!!I(t.selection.getSel().modify)&&(e&&po(r)?fb(!0,t.selection,r):!(e||!go(r))&&fb(!1,t.selection,r))}(e,t)},vb=function(e){var t=vu(null),n=f(Qv,e)
return e.on("NodeChange",(function(r){var o,i,a,u,s,c,l,d,m,p,g
!rc(e)||Ct.browser.isIE()&&r.initial||(c=n,l=e.dom,d=r.parents,m=q(Tu(Tt(l.getRoot()),'*[data-mce-selected="inline-boundary"]'),(function(e){return e.dom})),p=K(m,c),g=K(d,c),$(te(p,g),f(mb,!1)),$(te(g,p),f(mb,!0)),function(e,t){var n,r
e.selection.isCollapsed()&&!0!==e.composing&&t.get()&&(n=bs.fromRangeStart(e.selection.getRng()),bs.isTextPosition(n)&&!1===(po(r=n)||go(r))&&(db(e,dc(t.get(),n)),t.set(null)))}(e,t),o=n,i=e,a=t,u=r.parents,i.selection.isCollapsed()&&(s=K(u,o),$(s,(function(e){var t=bs.fromRangeStart(i.selection.getRng())
nb(o,i.getBody(),t).bind((function(e){return pb(i,a,e)}))}))))})),t},yb=f(hb,!0),bb=f(hb,!1),Cb=function(e,t){return function(n){return $y(t,n).exists((function(t){return db(e,t),!0}))}},wb=function(e,t,n,r){var o=e.getBody(),i=f(Qv,e)
e.undoManager.ignore((function(){var a,u,s
e.selection.setRng((a=n,u=r,(s=document.createRange()).setStart(a.container(),a.offset()),s.setEnd(u.container(),u.offset()),s)),e.execCommand("Delete"),nb(i,o,bs.fromRangeStart(e.selection.getRng())).map(ab).map(Cb(e,t))})),e.nodeChanged()},xb=function(e,t,n){if(e.selection.isCollapsed()&&rc(e)){var r=bs.fromRangeStart(e.selection.getRng())
return function(e,t,n,r){var o,i,a=(o=e.getBody(),i=r.container(),Bc(i,o)||o),u=f(Qv,e),s=nb(u,a,r)
return s.bind((function(e){return n?e.fold(c(N.some(ab(e))),N.none,c(N.some(ib(e))),N.none):e.fold(N.none,c(N.some(ib(e))),N.none,c(N.some(ab(e))))})).map(Cb(e,t)).getOrThunk((function(){var o=sl(n,a,r),i=o.bind((function(e){return nb(u,a,e)}))
return qu(s,i,(function(){return Zv(u,a,r).exists((function(t){return!!qu(ml(r=t),pl(r),(function(e,t){var n=ey(!0,e),o=ey(!1,t)
return fl(r,n).forall((function(e){return e.isEqual(o)}))})).getOr(!0)&&(dp(e,n,Tt(t)),!0)
var r}))})).orThunk((function(){return i.bind((function(i){return o.map((function(o){return n?wb(e,t,r,o):wb(e,t,o,r),!0}))}))})).getOr(!1)}))}(e,t,n,r)}return!1},Sb=function(e){return 1===Jt(e).length},Nb=function(e,t){var n,r=Tt(e.getBody()),o=Tt(e.selection.getStart()),i=K((n=km(o,r),J(n,Xr).fold(c(n),(function(e){return n.slice(0,e)}))),Sb)
return oe(i).exists((function(n){var r,o,a,u,s=bs.fromRangeStart(e.selection.getRng())
return o=t,a=s,u=n.dom,!(!qu(ml(u),pl(u),(function(e,t){var n=ey(!0,e),r=ey(!1,t),i=ey(!1,a)
return o?fl(u,i).exists((function(e){return e.isEqual(r)&&a.isEqual(n)})):dl(u,i).exists((function(e){return e.isEqual(n)&&a.isEqual(r)}))})).getOr(!0)||hl((r=n).dom)&&ag(r.dom)||(function(e,t,n,r){var o,i,a,u,s,c=f(pg,t),l=q(K(r,c),(function(e){return e.dom}))
0===l.length?dp(t,e,n):(i=n.dom,a=l,u=sg(!1),s=dg(a,u.dom),sn(Tt(i),u),pn(Tt(i)),o=bs(s,0),t.selection.setRng(o.toRange()))}(t,e,n,i),0))}))},Eb=function(e,t){return!!e.selection.isCollapsed()&&Nb(e,t)},kb=function(e,t,n){return e._selectionOverrides.hideFakeCaret(),dp(e,t,Tt(n)),!0},_b=function(e,t){return e.selection.isCollapsed()?(i=e,u=(a=t)?vm:ym,s=a?Cs.Forwards:Cs.Backwards,c=jc(s,i.getBody(),i.selection.getRng()),u(c)?kb(i,a,c.getNode(!a)):N.from(ey(a,c)).filter((function(e){return u(e)&&qc(c,e)})).exists((function(e){return kb(i,a,e.getNode(!a))}))):(r=t,o=(n=e).selection.getNode(),!!$n(o)&&kb(n,r,o))
var n,r,o,i,a,u,s,c},Ab=function(e){var t=parseInt(e,10)
return isNaN(t)?0:t},Rb=function(e,t){return(e||"table"===It(t)?"margin":"padding")+("rtl"===Zn(t,"direction")?"-right":"-left")},Tb=function(e){var t,n=Bb(e)
return!e.mode.isReadOnly()&&(1<n.length||(t=e,Z(n,(function(e){var n=Rb(Qs(t),e),r=tr(e,n).map(Ab).getOr(0)
return"false"!==t.dom.getContentEditable(e.dom)&&0<r}))))},Ob=function(e){return Qr(e)||Zr(e)},Bb=function(e){return K(q(e.selection.getSelectedBlocks(),Tt),(function(e){return!Ob(e)&&!Wt(e).map(Ob).getOr(!1)&&_r(e,(function(e){return Hn(e.dom)||Vn(e.dom)})).exists((function(e){return Hn(e.dom)}))}))},Pb=function(e,t){var n=e.dom,r=e.selection,o=e.formatter,i=e.getParam("indentation","40px","string"),a=/[a-z%]+$/i.exec(i)[0],u=parseInt(i,10),s=Qs(e),c=Ws(e)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||""!==c||n.getParent(r.getNode(),n.isBlock)||o.apply("div"),$(Bb(e),(function(e){var r,o,i,c,l,f,d,m
r=n,o=t,i=s,c=u,l=a,f=e.dom,m=Rb(i,Tt(f)),"outdent"===o?(d=Math.max(0,Ab(f.style[m])-c),r.setStyle(f,m,d?d+l:"")):(d=Ab(f.style[m])+c+l,r.setStyle(f,m,d))}))},Db=function(e,t){if(e.selection.isCollapsed()&&Tb(e)){var n=e.dom,r=e.selection.getRng(),o=bs.fromRangeStart(r),i=n.getParent(r.startContainer,n.isBlock)
if(null!==i&&Om(Tt(i),o))return Pb(e,"outdent"),!0}return!1},Lb=function(e,t){e.getDoc().execCommand(t,!1,null)},Ib=function(e){return void 0===e.touches||1!==e.touches.length?N.none():N.some(e.touches[0])},Mb=function(e,t){return e.hasOwnProperty(t.nodeName)},Fb=function(e){var t,n,r,o=e.dom,i=e.selection,a=e.schema,u=a.getBlockElements(),s=i.getStart(),c=e.getBody(),l=Ws(e)
if(s&&An(s)&&l){var f=c.nodeName.toLowerCase()
if(a.isValidChild(f,l.toLowerCase())&&(d=u,m=c,!V(Em(Tt(s),Tt(m)),(function(e){return Mb(d,e.dom)})))){var d,m,p,g,h=i.getRng(),v=h.startContainer,y=h.startOffset,b=h.endContainer,C=h.endOffset,w=Id(e)
for(s=c.firstChild;s;)if(p=u,In(g=s)||An(g)&&!Mb(p,g)&&!El(g)){if(function(e,t){if(In(t)){if(0===t.nodeValue.length)return!0
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||Mb(e,t.nextSibling)))return!0}return!1}(u,s)){s=(n=s).nextSibling,o.remove(n)
continue}t||(t=o.create(l,Ks(e)),s.parentNode.insertBefore(t,s),r=!0),s=(n=s).nextSibling,t.appendChild(n)}else t=null,s=s.nextSibling
r&&w&&(h.setStart(v,y),h.setEnd(b,C),i.setRng(h),e.nodeChanged())}}},Ub=function(e,t){var n
t.hasAttribute("data-mce-caret")&&(yo(t),(n=e).selection.setRng(n.selection.getRng()),e.selection.scrollIntoView(t))},zb=function(e,t){var n=Rr(Tt(e.getBody()),"*[data-mce-caret]").fold(c(null),(function(e){return e.dom}))
if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void Ub(e,n)):void(mo(n)&&(Ub(e,n),e.undoManager.add()))};(wg=Cg=Cg||{})[wg.Br=0]="Br",wg[wg.Block=1]="Block",wg[wg.Wrap=2]="Wrap",wg[wg.Eol=3]="Eol"
var jb,Hb,Vb=function(e,t){return e===Cs.Backwards?ee(t):t},qb=function(e,t,n,r){for(var o,i,a,u,s,c,l=rl(n),f=r,d=[];f&&(s=l,c=f,o=t===Cs.Forwards?s.next(c):s.prev(c));){if(zn(o.getNode(!1)))return t===Cs.Forwards?{positions:Vb(t,d).concat([o]),breakType:Cg.Br,breakAt:N.some(o)}:{positions:Vb(t,d),breakType:Cg.Br,breakAt:N.some(o)}
if(o.isVisible()){if(e(f,o)){var m=(i=t,a=f,zn((u=o).getNode(i===Cs.Forwards))?Cg.Br:!1===Pc(a,u)?Cg.Block:Cg.Wrap)
return{positions:Vb(t,d),breakType:m,breakAt:N.some(o)}}d.push(o),f=o}else f=o}return{positions:Vb(t,d),breakType:Cg.Eol,breakAt:N.none()}},$b=function(e,t,n,r){return t(n,r).breakAt.map((function(r){var o=t(n,r).positions
return e===Cs.Backwards?o.concat(r):[r].concat(o)})).getOr([])},Wb=function(e,t){return Y(e,(function(e,n){return e.fold((function(){return N.some(n)}),(function(r){return qu(re(r.getClientRects()),re(n.getClientRects()),(function(e,o){var i=Math.abs(t-e.left)
return Math.abs(t-o.left)<=i?n:r})).or(e)}))}),N.none())},Kb=function(e,t){return re(t.getClientRects()).bind((function(t){return Wb(e,t.left)}))},Xb=f(qb,bs.isAbove,-1),Yb=f(qb,bs.isBelow,1),Gb=f($b,-1,Xb),Jb=f($b,1,Yb),Qb=function(e){var t=function(t){return q(t,(function(t){return(t=Wu(t)).node=e,t}))}
if(An(e))return t(e.getClientRects())
if(In(e)){var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}},Zb=function(e){return Q(e,Qb)};(Hb=jb=jb||{})[Hb.Up=-1]="Up",Hb[Hb.Down=1]="Down"
var eC=function(e,t,n,r,o,i){var a=0,u=[],s=function(r){var i,s,l=Zb([r])
for(-1===e&&(l=l.reverse()),i=0;i<l.length;i++)if(s=l[i],!n(s,c)){if(0<u.length&&t(s,Ee(u))&&a++,s.line=a,o(s))return!0
u.push(s)}},c=Ee(i.getClientRects())
if(!c)return u
var l=i.getNode()
return s(l),function(e,t,n,r){for(;r=Oc(r,e,Ro,t);)if(n(r))return}(e,r,s,l),u},tC=f(eC,jb.Up,Yu,Gu),nC=f(eC,jb.Down,Gu,Yu),rC=function(e){return function(t){return n=e,t.line>n
var n}},oC=function(e){return function(t){return n=e,t.line===n
var n}},iC=Vn,aC=Oc,uC=function(e,t){return Math.abs(e.left-t)},sC=function(e,t){return Math.abs(e.right-t)},cC=function(e,t){return e>=t.left&&e<=t.right},lC=function(e,t){return e>=t.top&&e<=t.bottom},fC=function(e,t){return Se(e,(function(e,n){var r=Math.min(uC(e,t),sC(e,t)),o=Math.min(uC(n,t),sC(n,t))
return cC(t,n)||!cC(t,e)&&(o===r&&iC(n.node)||o<r)?n:e}))},dC=function(e,t,n,r,o){var i=aC(r,e,Ro,t,!o)
do{if(!i||n(i))return}while(i=aC(i,e,Ro,t))},mC=function(e,t){e.selection.setRng(t),dd(e,e.selection.getRng())},pC=function(e,t,n){return N.some(Sy(e,t,n))},gC=function(e,t,n,r,o,i){var a=t===Cs.Forwards,u=rl(e.getBody()),s=f(Vc,a?u.next:u.prev),c=a?r:o
if(!n.collapsed){var l=Qu(n)
if(i(l))return Cy(t,e,l,t===Cs.Backwards,!1)}var d=jc(t,e.getBody(),n)
if(c(d))return wy(e,d.getNode(!a))
var m=ey(a,s(d)),p=co(n.startContainer)
if(!m)return p?N.some(n):N.none()
if(c(m))return Cy(t,e,m.getNode(!a),a,!1)
var g=s(m)
return g&&c(g)&&qc(m,g)?Cy(t,e,g.getNode(!a),a,!1):p?pC(e,m.toRange(),!1):N.none()},hC=function(e,t,n,r,o,i){var a=jc(t,e.getBody(),n),u=Ee(a.getClientRects()),s=t===jb.Down
if(!u)return N.none()
var c,l=(s?nC:tC)(e.getBody(),rC(1),a),f=K(l,oC(1)),d=u.left,m=fC(f,d)
if(m&&i(m.node)){var p=Math.abs(d-m.left),g=Math.abs(d-m.right)
return Cy(t,e,m.node,p<g,!1)}if(c=r(a)?a.getNode():o(a)?a.getNode(!0):Qu(n)){var h=function(e,t,n,r){var o,i,a,u,s=rl(t),c=[],l=0,f=function(e){return Ee(e.getClientRects())},d=1===e?(o=s.next,i=Gu,a=Yu,bs.after(r)):(o=s.prev,i=Yu,a=Gu,bs.before(r)),m=f(d)
do{if(d.isVisible()&&!a(u=f(d),m)){if(0<c.length&&i(u,Ee(c))&&l++,(u=Wu(u)).position=d,u.line=l,n(u))return c
c.push(u)}}while(d=o(d))
return c}(t,e.getBody(),rC(1),c),v=fC(K(h,oC(1)),d)
if(v)return pC(e,v.position.toRange(),!1)
if(v=Ee(K(h,oC(0))))return pC(e,v.position.toRange(),!1)}return 0===f.length?vC(e,s).filter(s?o:r).map((function(t){return Sy(e,t.toRange(),!1)})):N.none()},vC=function(e,t){var n=e.selection.getRng(),r=e.getBody()
if(t){var o=bs.fromRangeEnd(n),i=Yb(r,o)
return oe(i.positions)}return o=bs.fromRangeStart(n),i=Xb(r,o),re(i.positions)},yC=function(e,t,n){return vC(e,t).filter(n).exists((function(t){return e.selection.setRng(t.toRange()),!0}))},bC=Vn,CC=function(e,t,n){var r,o,i=rl(e.getBody()),a=f(Vc,1===t?i.next:i.prev)
if(n.collapsed&&""!==Ws(e)){var u,s=e.dom.getParent(n.startContainer,"PRE")
if(!s)return
a(bs.fromRangeStart(n))||(o=(r=e).dom.create(Ws(r)),(!Ct.ie||11<=Ct.ie)&&(o.innerHTML='<br data-mce-bogus="1">'),u=o,1===t?e.$(s).after(u):e.$(s).before(u),e.selection.select(u,!0),e.selection.collapse())}},wC=function(e,t){return function(e,t){var n=t?Cs.Forwards:Cs.Backwards,r=e.selection.getRng()
return gC(e,n,r,wm,xm,bC).orThunk((function(){return CC(e,n,r),N.none()}))}(e,t).exists((function(t){return mC(e,t),!0}))},xC=function(e,t){return function(e,t){var n=t?1:-1,r=e.selection.getRng()
return hC(e,n,r,(function(e){return wm(e)||bm(e)}),(function(e){return xm(e)||Cm(e)}),bC).orThunk((function(){return CC(e,n,r),N.none()}))}(e,t).exists((function(t){return mC(e,t),!0}))},SC=function(e,t){return yC(e,t,t?xm:wm)},NC=function(e){return H(["figcaption"],It(e))},EC=function(e){var t=document.createRange()
return t.setStartBefore(e.dom),t.setEndBefore(e.dom),t},kC=function(e,t,n){(n?fn:ln)(e,t)},_C=function(e,t){var n,r,o=Tt(e.getBody()),i=bs.fromRangeStart(e.selection.getRng()),a=Ws(e),u=Ks(e)
return n=i,r=f(Dt,o),_r(Tt(n.container()),Xr,r).filter(NC).exists((function(){if(function(e,t,n){return t?(o=e.dom,Yb(o,n).breakAt.isNone()):(r=e.dom,Xb(r,n).breakAt.isNone())
var r,o}(o,t,i)){var n=function(e,t,n,r){return""===t?(c=e,l=r,f=At("br"),kC(c,f,l),EC(f)):(o=e,i=r,a=n,u=At(t),s=At("br"),Yn(u,a),fn(u,s),kC(o,u,i),EC(s))
var o,i,a,u,s,c,l,f}(o,a,u,t)
return e.selection.setRng(n),!0}return!1}))},AC=function(e,t){return!!e.selection.isCollapsed()&&_C(e,t)},RC=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){return e.apply(null,t)}},TC=function(e,t){return G(function(e,t){return Q(q(e,(function(e){return ke({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:u},e)})),(function(e){return n=e,(r=t).keyCode===n.keyCode&&r.shiftKey===n.shiftKey&&r.altKey===n.altKey&&r.ctrlKey===n.ctrlKey&&r.metaKey===n.metaKey?[e]:[]
var n,r}))}(e,t),(function(e){return e.action()}))},OC=function(e,t){var n=t?Cs.Forwards:Cs.Backwards,r=e.selection.getRng()
return gC(e,n,r,vm,ym,$n).exists((function(t){return mC(e,t),!0}))},BC=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return hC(e,n,r,vm,ym,$n).exists((function(t){return mC(e,t),!0}))},PC=function(e,t){return yC(e,t,t?ym:vm)},DC=function(e,t,n,r,o){var i,a,u=Tu(Tt(n),"td,th,caption").map((function(e){return e.dom})),s=K(function(e,t){return Q(t,(function(t){var n,r,o=(r=-1,{left:(n=Wu(t.getBoundingClientRect())).left-r,top:n.top-r,right:n.right+-2,bottom:n.bottom+-2,width:n.width+r,height:n.height+r})
return[{x:o.left,y:e(o),cell:t},{x:o.right,y:e(o),cell:t}]}))}(e,u),(function(e){return t(e,o)}))
return i=r,a=o,Y(s,(function(e,t){return e.fold((function(){return N.some(t)}),(function(e){var n=Math.sqrt(Math.abs(e.x-i)+Math.abs(e.y-a)),r=Math.sqrt(Math.abs(t.x-i)+Math.abs(t.y-a))
return N.some(r<n?t:e)}))}),N.none()).map((function(e){return e.cell}))},LC=f(DC,(function(e){return e.bottom}),(function(e,t){return e.y<t})),IC=f(DC,(function(e){return e.top}),(function(e,t){return e.y>t})),MC=function(e,t,n){var r,o,i,a,u=e(t,n)
return(a=u).breakType===Cg.Wrap&&0===a.positions.length||!zn(n.getNode())&&(i=u).breakType===Cg.Br&&1===i.positions.length?(r=e,o=t,!u.breakAt.exists((function(e){return r(o,e).breakAt.isSome()}))):u.breakAt.isNone()},FC=f(MC,Xb),UC=f(MC,Yb),zC=function(e,t,n,r){var o,i,a,u,s=e.selection.getRng(),c=t?1:-1
return!(!Cc()||(o=t,i=s,a=n,u=bs.fromRangeStart(i),!ll(!o,a).exists((function(e){return e.isEqual(u)})))||(Cy(c,e,n,!t,!1).each((function(t){mC(e,t)})),0))},jC=function(e,t,n){var r=function(e,t){var n=t.getNode(e)
return An(n)&&"TABLE"===n.nodeName?N.some(n):N.none()}(!!t,n),o=!1===t
r.fold((function(){return mC(e,n.toRange())}),(function(r){return ll(o,e.getBody()).filter((function(e){return e.isEqual(n)})).fold((function(){return mC(e,n.toRange())}),(function(o){return i=t,u=r,s=n,void((c=Ws(a=e))?a.undoManager.transact((function(){var e=At(c)
Yn(e,Ks(a)),fn(e,At("br")),(i?cn:sn)(Tt(u),e)
var t=a.dom.createRng()
t.setStart(e.dom,0),t.setEnd(e.dom,0),mC(a,t)})):mC(a,s.toRange()))
var i,a,u,s,c}))}))},HC=function(e,t,n,r){var o,i,a,u,s,c,l=e.selection.getRng(),f=bs.fromRangeStart(l),d=e.getBody()
if(!t&&FC(r,f)){var m=(u=d,function(e,t){return re(t.getClientRects()).bind((function(t){return LC(e,t.left,t.top)})).bind((function(e){return Kb(pl(n=e).map((function(e){return Xb(n,e).positions.concat(e)})).getOr([]),t)
var n}))}(s=n,c=f).orThunk((function(){return re(c.getClientRects()).bind((function(e){return Wb(Gb(u,bs.before(s)),e.left)}))})).getOr(bs.before(s)))
return jC(e,t,m),!0}return!(!t||!UC(r,f))&&(o=d,m=function(e,t){return oe(t.getClientRects()).bind((function(t){return IC(e,t.left,t.top)})).bind((function(e){return Kb(ml(n=e).map((function(e){return[e].concat(Yb(n,e).positions)})).getOr([]),t)
var n}))}(i=n,a=f).orThunk((function(){return re(a.getClientRects()).bind((function(e){return Wb(Jb(o,bs.after(i)),e.left)}))})).getOr(bs.after(i)),jC(e,t,m),!0)},VC=function(e,t,n){return N.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((function(r){return N.from(e.dom.getParent(r,"table")).map((function(o){return n(e,t,o,r)}))})).getOr(!1)},qC=function(e,t){return VC(e,t,zC)},$C=function(e,t){return VC(e,t,HC)},WC=function(e,t){var n,r,o=t,i=e.dom,a=e.schema.getMoveCaretBeforeOnEnterElements()
if(t){!/^(LI|DT|DD)$/.test(t.nodeName)||(r=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}(t.firstChild))&&/^(UL|OL|DL)$/.test(r.nodeName)&&t.insertBefore(i.doc.createTextNode(ro),t.firstChild)
var u=i.createRng()
if(t.normalize(),t.hasChildNodes()){for(var s=new qr(t,t);n=s.current();){if(In(n)){u.setStart(n,0),u.setEnd(n,0)
break}if(a[n.nodeName.toLowerCase()]){u.setStartBefore(n),u.setEndBefore(n)
break}o=n,n=s.next()}n||(u.setStart(o,0),u.setEnd(o,0))}else zn(t)?t.nextSibling&&i.isBlock(t.nextSibling)?(u.setStartBefore(t),u.setEndBefore(t)):(u.setStartAfter(t),u.setEndAfter(t)):(u.setStart(t,0),u.setEnd(t,0))
e.selection.setRng(u),dd(e,u)}},KC=function(e){return N.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},XC=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},YC=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},GC=function(e){var t=e.parentNode
return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},JC=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!An(r);)r=r[n?"nextSibling":"previousSibling"]
return r===t},QC=function(e){e.innerHTML='<br data-mce-bogus="1">'},ZC=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},ew=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},tw=function(e,t,n){return!1===In(t)?n:e?1===n&&t.data.charAt(n-1)===oo?0:n:n===t.data.length-1&&t.data.charAt(n)===oo?t.data.length:n},nw=function(e,t){for(var n,r=e.getRoot(),o=t;o!==r&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(n=o),o=o.parentNode
return o!==r?n:r},rw=function(e,t){var n=Ws(e)
n&&n.toLowerCase()===t.tagName.toLowerCase()&&function(e,t,n){var r=e.dom
N.from(n.style).map(r.parseStyle).each((function(e){var n=nr(Tt(t)),o=ke(ke({},n),e)
r.setStyles(t,o)}))
var o=N.from(n.class).map((function(e){return e.split(/\s+/)})),i=N.from(t.className).map((function(e){return K(e.split(/\s+/),(function(e){return""!==e}))}))
qu(o,i,(function(e,n){var o=K(n,(function(t){return!H(e,t)})),i=_e(e,o)
r.setAttrib(t,"class",i.join(" "))}))
var a=["style","class"],u=pe(n,(function(e,t){return!H(a,t)}))
r.setAttribs(t,u)}(e,t,Ks(e))},ow=function(e,t){var n,r,o,i,a,u,s,c,l,f=e.dom,d=e.schema,m=d.getNonEmptyElements(),p=e.selection.getRng(),g=function(t){var n,o=r,a=d.getTextInlineElements(),u=t||"TABLE"===c||"HR"===c?f.create(t||S):i.cloneNode(!1),s=u
if(!1===e.getParam("keep_styles",!0))f.setAttrib(u,"style",null),f.setAttrib(u,"class",null)
else do{if(a[o.nodeName]){if(hl(o)||El(o))continue
n=o.cloneNode(!1),f.setAttrib(n,"id",""),u.hasChildNodes()?n.appendChild(u.firstChild):s=n,u.appendChild(n)}}while((o=o.parentNode)&&o!==N)
return rw(e,u),QC(s),u},h=function(e){var t,n,a=tw(e,r,o)
if(In(r)&&(e?0<a:a<r.nodeValue.length))return!1
if(r.parentNode===i&&l&&!e)return!0
if(e&&An(r)&&r===i.firstChild)return!0
if(ZC(r,"TABLE")||ZC(r,"HR"))return l&&!e||!l&&e
var u=new qr(r,i)
for(In(r)&&(e&&0===a?u.prev():e||a!==r.nodeValue.length||u.next());t=u.current();){if(An(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),m[n]&&"br"!==n))return!1}else if(In(t)&&!Oo(t.nodeValue))return!1
e?u.prev():u.next()}return!0},v=function(){a=/^(H[1-6]|PRE|FIGURE)$/.test(c)&&"HGROUP"!==C?g(S):g(),e.getParam("end_container_on_empty_block",!1)&&ew(f,s)&&f.isEmpty(i)?a=f.split(s,i):f.insertAfter(a,i),WC(e,a)}
Uf(f,p).each((function(e){p.setStart(e.startContainer,e.startOffset),p.setEnd(e.endContainer,e.endOffset)})),r=p.startContainer,o=p.startOffset,S=Ws(e)
var y=!(!t||!t.shiftKey),b=!(!t||!t.ctrlKey)
An(r)&&r.hasChildNodes()&&(l=o>r.childNodes.length-1,r=r.childNodes[Math.min(o,r.childNodes.length-1)]||r,o=l&&In(r)?r.nodeValue.length:0)
var C,w,x,S,N=nw(f,r)
N&&((S&&!y||!S&&y)&&(r=function(e,t,n,r,o){var i,a,u,s,c,l,f=t||"P",d=e.dom,m=nw(d,r),p=d.getParent(r,d.isBlock)
if(!p||!ew(d,p)){if(c=(p=p||m)===e.getBody()||(l=p)&&/^(TD|TH|CAPTION)$/.test(l.nodeName)?p.nodeName.toLowerCase():p.parentNode.nodeName.toLowerCase(),!p.hasChildNodes())return i=d.create(f),rw(e,i),p.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i
for(u=r;u.parentNode!==p;)u=u.parentNode
for(;u&&!d.isBlock(u);)u=(a=u).previousSibling
if(a&&e.schema.isValidChild(c,f.toLowerCase())){for(i=d.create(f),rw(e,i),a.parentNode.insertBefore(i,a),u=a;u&&!d.isBlock(u);)s=u.nextSibling,i.appendChild(u),u=s
n.setStart(r,o),n.setEnd(r,o)}}return r}(e,S,p,r,o)),i=f.getParent(r,f.isBlock),s=i?f.getParent(i.parentNode,f.isBlock):null,c=i?i.nodeName.toUpperCase():"","LI"!==(C=s?s.nodeName.toUpperCase():"")||b||(s=(i=s).parentNode,c=C),/^(LI|DT|DD)$/.test(c)&&f.isEmpty(i)?function(e,t,n,r,o){var i,a,u,s,c,l,f,d,m=e.dom,p=e.selection.getRng()
n!==e.getBody()&&(YC(i=n)&&YC(i.parentNode)&&(o="LI"),a=o?t(o):m.create("BR"),JC(n,r,!0)&&JC(n,r,!1)?XC(n,"LI")?(u=GC(n),m.insertAfter(a,u),(null===(d=(f=n).parentNode)||void 0===d?void 0:d.firstChild)===f?m.remove(u):m.remove(n)):m.replace(a,n):(JC(n,r,!0)?XC(n,"LI")?(m.insertAfter(a,GC(n)),a.appendChild(m.doc.createTextNode(" ")),a.appendChild(n)):n.parentNode.insertBefore(a,n):JC(n,r,!1)?m.insertAfter(a,GC(n)):(n=GC(n),(s=p.cloneRange()).setStartAfter(r),s.setEndAfter(n),c=s.extractContents(),"LI"===o&&(l=c).firstChild&&"LI"===l.firstChild.nodeName?(a=c.firstChild,m.insertAfter(c,n)):(m.insertAfter(c,n),m.insertAfter(a,n))),m.remove(r)),WC(e,a))}(e,g,s,i,S):S&&i===e.getBody()||(S=S||"P",co(i)?(a=yo(i),f.isEmpty(i)&&QC(i),rw(e,a),WC(e,a)):h()?v():h(!0)?(a=i.parentNode.insertBefore(g(),i),WC(e,ZC(i,"HR")?a:i)):((x=(w=p).cloneRange()).setStart(w.startContainer,tw(!0,w.startContainer,w.startOffset)),x.setEnd(w.endContainer,tw(!1,w.endContainer,w.endOffset)),(n=x.cloneRange()).setEndAfter(i),u=n.extractContents(),$(Ru(Tt(u),zt),(function(e){var t=e.dom
t.nodeValue=ao(t.nodeValue)})),function(e){for(;In(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;);}(u),a=u.firstChild,f.insertAfter(u,i),function(e,t,n){var r,o,i,a=n,u=[]
if(a){for(;a=a.firstChild;){if(e.isBlock(a))return
An(a)&&!t[a.nodeName.toLowerCase()]&&u.push(a)}for(r=u.length;r--;)!(a=u[r]).hasChildNodes()||a.firstChild===a.lastChild&&""===a.firstChild.nodeValue?e.remove(a):(o=e,(i=a)&&"A"===i.nodeName&&o.isEmpty(i)&&e.remove(a))}}(f,m,a),function(e,t){t.normalize()
var n=t.lastChild
n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")}(f,i),f.isEmpty(i)&&QC(i),a.normalize(),f.isEmpty(a)?(f.remove(a),v()):(rw(e,a),WC(e,a))),f.setAttrib(a,"id",""),e.fire("NewBlock",{newBlock:a})))},iw=function(e,t,n){var r=e.dom.createRng()
n?(r.setStartBefore(t),r.setEndBefore(t)):(r.setStartAfter(t),r.setEndAfter(t)),e.selection.setRng(r),dd(e,r)},aw=function(e,t){var n=At("br")
sn(Tt(t),n),e.undoManager.add()},uw=function(e,t){sw(e.getBody(),t)||cn(Tt(t),At("br"))
var n=At("br")
cn(Tt(t),n),iw(e,n.dom,!1),e.undoManager.add()},sw=function(e,t){return n=bs.after(t),!!zn(n.getNode())||fl(e,bs.after(t)).map((function(e){return zn(e.getNode())})).getOr(!1)
var n},cw=function(e){return e&&"A"===e.nodeName&&"href"in e},lw=function(e){return e.fold(b,cw,cw,b)},fw=function(e,t){t.fold(u,f(aw,e),f(uw,e),u)},dw=function(e,t){var n,r,o,i=(r=f(Qv,n=e),o=bs.fromRangeStart(n.selection.getRng()),nb(r,n.getBody(),o).filter(lw))
i.isSome()?i.each(f(fw,e)):function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng()
Uf(i,a).each((function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)}))
var u,s=a.startOffset,c=a.startContainer
1===c.nodeType&&c.hasChildNodes()&&(u=s>c.childNodes.length-1,c=c.childNodes[Math.min(s,c.childNodes.length-1)]||c,s=u&&3===c.nodeType?c.nodeValue.length:0)
var l=i.getParent(c,i.isBlock),f=l?i.getParent(l.parentNode,i.isBlock):null,d=f?f.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey)
"LI"!==d||m||(l=f),c&&3===c.nodeType&&s>=c.nodeValue.length&&!function(e,t,n){for(var r,o=new qr(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||0<r.length)return!0}(e.schema,c,l)&&(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0),n=i.create("br"),Ss(i,a,n),iw(e,n,r),e.undoManager.add()}(e,t)},mw=function(e,t){return KC(e).filter((function(e){return 0<t.length&&Bt(Tt(e),t)})).isSome()},pw=vr([{br:[]},{block:[]},{none:[]}]),gw=function(e,t){return mw(n=e,n.getParam("no_newline_selector",""))
var n},hw=function(e){return function(t,n){return""===Ws(t)===e}},vw=function(e){return function(t,n){return KC(t).filter((function(e){return Zr(Tt(e))})).isSome()===e}},yw=function(e,t){return function(n,r){return KC(n).fold(c(""),(function(e){return e.nodeName.toUpperCase()}))===e.toUpperCase()===t}},bw=function(e){return yw("pre",e)},Cw=function(e){return function(t,n){return t.getParam("br_in_pre",!0)===e}},ww=function(e,t){return mw(n=e,n.getParam("br_newline_selector",".mce-toc h2,figcaption,caption"))
var n},xw=function(e,t){return t},Sw=function(e){var t=Ws(e),n=function(e,t){for(var n,r=e.getRoot(),o=t;o!==r&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(n=o),o=o.parentNode
return o!==r?n:r}(e.dom,e.selection.getStart())
return n&&e.schema.isValidChild(n.nodeName,t||"P")},Nw=function(e,t){return function(n,r){return Y(e,(function(e,t){return e&&t(n,r)}),!0)?N.some(t):N.none()}},Ew=function(e,t){(function(e,t){return Wy([Nw([gw],pw.none()),Nw([yw("summary",!0)],pw.br()),Nw([bw(!0),Cw(!1),xw],pw.br()),Nw([bw(!0),Cw(!1)],pw.block()),Nw([bw(!0),Cw(!0),xw],pw.block()),Nw([bw(!0),Cw(!0)],pw.br()),Nw([vw(!0),xw],pw.br()),Nw([vw(!0)],pw.block()),Nw([hw(!0),xw,Sw],pw.block()),Nw([hw(!0)],pw.br()),Nw([ww],pw.br()),Nw([hw(!1),xw],pw.br()),Nw([Sw],pw.block())],[e,!(!t||!t.shiftKey)]).getOr(pw.none())})(e,t).fold((function(){dw(e,t)}),(function(){ow(e,t)}),u)},kw=ft().browser,_w=function(e,t){var n=t.container(),r=t.offset()
return In(n)?(n.insertData(r,e),N.some(bs(n,r+e.length))):Hc(t).map((function(n){var r=Rt(e)
return(t.isAtEnd()?cn:sn)(n,r),bs(r.dom,e.length)}))},Aw=f(_w,ro),Rw=f(_w," "),Tw=function(e,t){return function(n){return r=e,(!$m(o=n)&&(function(e,t){return r=t,dl(e.dom,r).isNone()||(n=t,fl(e.dom,n).isNone())||Om(e,t)||Bm(e,t)||Fm(e,t)||Mm(e,t)
var n,r}(r,o)||Vm(r,o)||qm(r,o))?Aw:Rw)(t)
var r,o}},Ow=function(e){var t,n,r=bs.fromRangeStart(e.selection.getRng()),o=Tt(e.getBody())
if(e.selection.isCollapsed()){var i=f(Qv,e),a=bs.fromRangeStart(e.selection.getRng())
return nb(i,e.getBody(),a).bind((n=o,function(e){return e.fold((function(e){return dl(n.dom,bs.before(e))}),(function(e){return ml(e)}),(function(e){return pl(e)}),(function(e){return fl(n.dom,bs.after(e))}))})).bind(Tw(o,r)).exists((t=e,function(e){return t.selection.setRng(e.toRange()),t.nodeChanged(),!0}))}return!1},Bw=function(e){var t,n=vb(e)
return(t=e).on("keyup compositionstart",f(zb,t)),function(e,t){e.on("keydown",(function(n){var r,o,i,a
!1===n.isDefaultPrevented()&&(r=e,o=t,i=n,a=ft().os,TC([{keyCode:Af.RIGHT,action:RC(wC,r,!0)},{keyCode:Af.LEFT,action:RC(wC,r,!1)},{keyCode:Af.UP,action:RC(xC,r,!1)},{keyCode:Af.DOWN,action:RC(xC,r,!0)},{keyCode:Af.RIGHT,action:RC(qC,r,!0)},{keyCode:Af.LEFT,action:RC(qC,r,!1)},{keyCode:Af.UP,action:RC($C,r,!1)},{keyCode:Af.DOWN,action:RC($C,r,!0)},{keyCode:Af.RIGHT,action:RC(OC,r,!0)},{keyCode:Af.LEFT,action:RC(OC,r,!1)},{keyCode:Af.UP,action:RC(BC,r,!1)},{keyCode:Af.DOWN,action:RC(BC,r,!0)},{keyCode:Af.RIGHT,action:RC(gb,r,o,!0)},{keyCode:Af.LEFT,action:RC(gb,r,o,!1)},{keyCode:Af.RIGHT,ctrlKey:!a.isOSX(),altKey:a.isOSX(),action:RC(yb,r,o)},{keyCode:Af.LEFT,ctrlKey:!a.isOSX(),altKey:a.isOSX(),action:RC(bb,r,o)},{keyCode:Af.UP,action:RC(AC,r,!1)},{keyCode:Af.DOWN,action:RC(AC,r,!0)}],i).each((function(e){i.preventDefault()})))}))}(e,n),function(e,t){e.on("keydown",(function(n){var r,o,i
!1===n.isDefaultPrevented()&&(r=e,o=t,i=n,TC([{keyCode:Af.BACKSPACE,action:RC(Db,r,!1)},{keyCode:Af.BACKSPACE,action:RC(Dy,r,!1)},{keyCode:Af.DELETE,action:RC(Dy,r,!0)},{keyCode:Af.BACKSPACE,action:RC(_y,r,!1)},{keyCode:Af.DELETE,action:RC(_y,r,!0)},{keyCode:Af.BACKSPACE,action:RC(xb,r,o,!1)},{keyCode:Af.DELETE,action:RC(xb,r,o,!0)},{keyCode:Af.BACKSPACE,action:RC(Dp,r,!1)},{keyCode:Af.DELETE,action:RC(Dp,r,!0)},{keyCode:Af.BACKSPACE,action:RC(Ly,r,!1)},{keyCode:Af.DELETE,action:RC(Ly,r,!0)},{keyCode:Af.BACKSPACE,action:RC(_b,r,!1)},{keyCode:Af.DELETE,action:RC(_b,r,!0)},{keyCode:Af.BACKSPACE,action:RC(vy,r,!1)},{keyCode:Af.DELETE,action:RC(vy,r,!0)},{keyCode:Af.BACKSPACE,action:RC(py,r,!1)},{keyCode:Af.DELETE,action:RC(py,r,!0)},{keyCode:Af.BACKSPACE,action:RC(Eb,r,!1)},{keyCode:Af.DELETE,action:RC(Eb,r,!0)}],i).each((function(e){i.preventDefault()})))})),e.on("keyup",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,TC([{keyCode:Af.BACKSPACE,action:RC(Py,n)},{keyCode:Af.DELETE,action:RC(Py,n)}],r))}))}(e,n),function(e){e.on("keydown",(function(t){var n,r,o
t.keyCode===Af.ENTER&&(n=e,(r=t).isDefaultPrevented()||(r.preventDefault(),(o=n.undoManager).typing&&(o.typing=!1,o.add()),n.undoManager.transact((function(){!1===n.selection.isCollapsed()&&n.execCommand("Delete"),Ew(n,r)}))))}))}(e),function(e){e.on("keydown",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,TC([{keyCode:Af.SPACEBAR,action:RC(Ow,n)}],r).each((function(e){r.preventDefault()})))}))}(e),function(e){var t,n
t=e,n=Su((function(){t.composing||Qm(t)}),0),kw.isIE()&&(t.on("keypress",(function(e){n.throttle()})),t.on("remove",(function(e){n.cancel()}))),e.on("input",(function(t){!1===t.isComposing&&Qm(e)}))}(e),function(e){e.on("keydown",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,TC([{keyCode:Af.END,action:RC(SC,n,!0)},{keyCode:Af.HOME,action:RC(SC,n,!1)},{keyCode:Af.END,action:RC(PC,n,!0)},{keyCode:Af.HOME,action:RC(PC,n,!1)}],r).each((function(e){r.preventDefault()})))}))}(e),n},Pw=(Dw.prototype.nodeChanged=function(e){var t,n,r,o=this.editor.selection
this.editor.initialized&&o&&!this.editor.getParam("disable_nodechange")&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),(t=o.getStart(!0)||r).ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(t,r)||(t=r),n=[],this.editor.dom.getParent(t,(function(e){return e===r||void n.push(e)})),(e=e||{}).element=t,e.parents=n,this.editor.fire("NodeChange",e))},Dw.prototype.isSameElementPath=function(e){var t,n=this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)
if(n.length===this.lastPath.length){for(t=n.length;0<=t&&n[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=n,!0}return this.lastPath=n,!1},Dw)
function Dw(e){var t
this.lastPath=[],this.editor=e
var n=this
"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(function(n){var r=e.selection.getRng(),o={startContainer:r.startContainer,startOffset:r.startOffset,endContainer:r.endContainer,endOffset:r.endOffset}
"nodechange"!==n.type&&Pf(o,t)||e.fire("SelectionChange"),t=o})),e.on("contextmenu",(function(){e.fire("SelectionChange")})),e.on("SelectionChange",(function(){var t=e.selection.getStart(!0)
!t||!Ct.range&&e.selection.isCollapsed()||hf(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(function(t){!t.isDefaultPrevented()&&hf(e)&&("IMG"===e.selection.getNode().nodeName?jr.setEditorTimeout(e,(function(){e.nodeChanged()})):e.nodeChanged())}))}var Lw=function(e){return An(e)&&Jr(Tt(e))},Iw=function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView
return{top:t.top+o.pageYOffset-r.clientTop,left:t.left+o.pageXOffset-r.clientLeft}},Mw=function(e,t){return n=(u=e).inline?Iw(u.getBody()):{left:0,top:0},a=(i=e).getBody(),r=i.inline?{left:a.scrollLeft,top:a.scrollTop}:{left:0,top:0},{pageX:(o=function(e,t){if(t.target.ownerDocument===e.getDoc())return{left:t.pageX,top:t.pageY}
var n,r,o,i,a,u=Iw(e.getContentAreaContainer()),s=(r=(n=e).getBody(),o=n.getDoc().documentElement,i={left:r.scrollLeft,top:r.scrollTop},a={left:r.scrollLeft||o.scrollLeft,top:r.scrollTop||o.scrollTop},n.inline?i:a)
return{left:t.pageX-u.left+s.left,top:t.pageY-u.top+s.top}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top}
var n,r,o,i,a,u},Fw=Vn,Uw=Hn,zw=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},jw=function(e){e.on((function(e){zw(e.ghost)})),e.clear()},Hw=function(e){var t,n,r,o=(t=vu(N.none()),{clear:function(){return t.set(N.none())},set:function(e){return t.set(N.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}}),i=fu.DOM,a=document,u=function(e,t){return function(n){var r,o,i,a,u,s
0===n.button&&(r=G(t.dom.getParents(n.target),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0
return!1}}(Fw,Uw)).getOr(null),u=t.getBody(),Fw(s=r)&&s!==u&&(o=t.dom.getPos(r),i=t.getBody(),a=t.getDoc().documentElement,e.set({element:r,dragging:!1,screenX:n.screenX,screenY:n.screenY,maxX:(t.inline?i.scrollWidth:a.offsetWidth)-2,maxY:(t.inline?i.scrollHeight:a.offsetHeight)-2,relX:n.pageX-o.x,relY:n.pageY-o.y,width:r.offsetWidth,height:r.offsetHeight,ghost:function(e,t,n,r){var o=e.dom,i=t.cloneNode(!0)
o.setStyles(i,{width:n,height:r}),o.setAttrib(i,"data-mce-selected",null)
var a=o.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
return o.setStyles(a,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),o.setStyles(i,{margin:0,boxSizing:"border-box"}),a.appendChild(i),a}(t,r,r.offsetWidth,r.offsetHeight)})))}}(o,e),s=function(e,t){var n=jr.throttle((function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0)
return t.on("remove",n.stop),function(r){return e.on((function(e){var o,i,a,u,s,c,l,f,d,m,p,g,h,v=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY))
if(!e.dragging&&10<v){if(t.fire("dragstart",{target:e.element}).isDefaultPrevented())return
e.dragging=!0,t.focus()}e.dragging&&(g=e,o={pageX:(h=Mw(t,r)).pageX-g.relX,pageY:h.pageY+5},m=e.ghost,p=t.getBody(),m.parentNode!==p&&p.appendChild(m),i=e.ghost,a=o,u=e.width,s=e.height,c=e.maxX,l=e.maxY,d=f=0,i.style.left=a.pageX+"px",i.style.top=a.pageY+"px",a.pageX+u>c&&(f=a.pageX+u-c),a.pageY+s>l&&(d=a.pageY+s-l),i.style.width=u-f+"px",i.style.height=s-d+"px",n(r.clientX,r.clientY))}))}}(o,e),c=function(e,t){return function(n){e.on((function(e){var r,o,i,a,u,s
e.dragging&&((a=3===(s=(i=t).selection.getSel().getRangeAt(0).startContainer).nodeType?s.parentNode:s)===(u=e.element)||i.dom.isChildOf(a,u)||Fw(a)||((o=e.element.cloneNode(!0)).removeAttribute("data-mce-selected"),r=o,t.fire("drop",{clientX:n.clientX,clientY:n.clientY}).isDefaultPrevented()||t.undoManager.transact((function(){zw(e.element),t.insertContent(t.dom.getOuterHTML(r)),t._selectionOverrides.hideFakeCaret()}))))})),jw(e)}}(o,e),l=(n=o,function(){n.on((function(e){e.dragging&&r.fire("dragend")})),jw(n)});(r=e).on("mousedown",u),e.on("mousemove",s),e.on("mouseup",c),i.bind(a,"mousemove",s),i.bind(a,"mouseup",l),e.on("remove",(function(){i.unbind(a,"mousemove",s),i.unbind(a,"mouseup",l)}))},Vw=Hn,qw=Vn,$w=function(e,t){return Ef(e.getBody(),t)},Ww=function(e){var t,n=e.selection,r=e.dom,o=r.isBlock,i=e.getBody(),a=bc(e,i,o,(function(){return Id(e)})),u="sel-"+r.uniqueId(),s="data-mce-selected",c=function(e){return e!==i&&(qw(e)||$n(e))&&r.isChildOf(e,i)},l=function(e){e&&n.setRng(e)},d=n.getRng,m=function(t,r,o,i){return void 0===i&&(i=!0),e.fire("ShowCaret",{target:r,direction:t,before:o}).isDefaultPrevented()?null:(i&&n.scrollIntoView(r,-1===t),a.show(o,r))},p=function(e){return fo(e)||ho(e)||vo(e)},g=function(e){return p(e.startContainer)||p(e.endContainer)},h=function(o){var i=o.cloneNode(!0),a=e.fire("ObjectSelected",{target:o,targetClone:i})
if(a.isDefaultPrevented())return null
var c=function(t,o,i){var a=e.$,s=Rr(Tt(e.getBody()),"#"+u).fold((function(){return a([])}),(function(e){return a([e.dom])}))
0===s.length&&(s=a('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",u)).appendTo(e.getBody())
var c=r.createRng()
o===i&&Ct.ie?(s.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(o),c.setStartAfter(s[0].firstChild.firstChild),c.setEndAfter(o)):(s.empty().append(ro).append(o).append(ro),c.setStart(s[0].firstChild,1),c.setEnd(s[0].lastChild,0)),s.css({top:r.getPos(t,e.getBody()).y}),s[0].focus()
var l=n.getSel()
return l.removeAllRanges(),l.addRange(c),c}(o,a.targetClone,i),l=Tt(o)
return $(Tu(Tt(e.getBody()),"*[data-mce-selected]"),(function(e){Dt(l,e)||Qn(e,s)})),r.getAttrib(o,s)||o.setAttribute(s,"1"),t=o,b(),c},v=function(e,t){if(!e)return null
if(e.collapsed){if(!g(e)){var n=t?1:-1,o=jc(n,i,e),a=o.getNode(!t)
if(xc(a))return m(n,a,!!t&&!o.isAtEnd(),!1)
var u=o.getNode(t)
if(xc(u))return m(n,u,!t&&!o.isAtEnd(),!1)}return null}var s=e.startContainer,l=e.startOffset,f=e.endOffset
if(3===s.nodeType&&0===l&&qw(s.parentNode)&&(s=s.parentNode,l=r.nodeIndex(s),s=s.parentNode),1!==s.nodeType)return null
if(f===l+1&&s===e.endContainer){var d=s.childNodes[l]
if(c(d))return h(d)}return null},y=function(){t&&t.removeAttribute(s),Rr(Tt(e.getBody()),"#"+u).each(pn),t=null},b=function(){a.hide()}
return Ct.ceFalse&&function(){e.on("mouseup",(function(t){var n=d()
n.collapsed&&Cv(e,t.clientX,t.clientY)&&xy(e,n,!1).each(l)})),e.on("click",(function(t){var o=$w(e,t.target)
o&&(qw(o)&&(t.preventDefault(),e.focus()),Vw(o)&&r.isChildOf(o,n.getNode())&&y())})),e.on("blur NewBlock",y),e.on("ResizeWindow FullscreenStateChanged",a.reposition)
var s,p,h,C=function(t,n){var i,a,u=r.getParent(t,o),s=r.getParent(n,o)
return!(!u||t===s||!r.isChildOf(u,s)||!1!==qw($w(e,u)))||u&&(i=u,a=s,!(r.getParent(i,o)===r.getParent(a,o)))&&function(e){var t=rl(e)
if(!e.firstChild)return!1
var n,r=bs.before(e.firstChild),o=t.next(r)
return o&&!(wm(n=o)||xm(n)||vm(n)||ym(n))}(u)}
e.on("tap",(function(t){var n=t.target,r=$w(e,n)
qw(r)?(t.preventDefault(),wy(e,r).each(v)):c(n)&&wy(e,n).each(v)}),!0),e.on("mousedown",(function(t){var o,a,u,s=t.target
s!==i&&"HTML"!==s.nodeName&&!r.isChildOf(s,i)||!1===Cv(e,t.clientX,t.clientY)||((o=$w(e,s))?qw(o)?(t.preventDefault(),wy(e,o).each(v)):(y(),Vw(o)&&t.shiftKey||kf(t.clientX,t.clientY,n.getRng())||(b(),n.placeCaretAt(t.clientX,t.clientY))):c(s)?wy(e,s).each(v):!1===xc(s)&&(y(),b(),(a=function(e,t,n){var r,o,i=Zb(K(ie(e.getElementsByTagName("*")),xc)),a=K(i,f(lC,n))
if(u=fC(a,t)){var u,s=!Pn(u.node)&&!$n(u.node)
if((u=fC(function(e,t,n){void 0===n&&(n=!0)
var r=[],o=function(e,n){var o=K(Zb([n]),(function(n){return!e(n,t)}))
return r=r.concat(o),0===o.length}
return r.push(t),dC(jb.Up,e,f(o,Yu),t.node,n),dC(jb.Down,e,f(o,Gu),t.node,n),r}(e,u,s),t))&&xc(u.node))return o=t,{node:(r=u).node,before:uC(r,o)<sC(r,o)}}return null}(i,t.clientX,t.clientY))&&(C(s,a.node)||(t.preventDefault(),u=m(1,a.node,a.before,!1),e.getBody().focus(),l(u)))))})),e.on("keypress",(function(e){Af.modifierPressed(e)||qw(n.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(function(e){var n=e.range
if(t){if(!t.parentNode)return void(t=null);(n=n.cloneRange()).selectNode(t),e.range=n}})),e.on("SetSelectionRange",(function(t){t.range=function(t){var n=e.schema.getShortEndedElements(),o=r.createRng(),i=t.startContainer,a=t.startOffset,u=t.endContainer,s=t.endOffset
return he(n,i.nodeName.toLowerCase())?0===a?o.setStartBefore(i):o.setStartAfter(i):o.setStart(i,a),he(n,u.nodeName.toLowerCase())?0===s?o.setEndBefore(u):o.setEndAfter(u):o.setEnd(u,s),o}(t.range)
var n=v(t.range,t.forward)
n&&(t.range=n)})),e.on("AfterSetSelectionRange",(function(e){var t,n=e.range,o=n.startContainer.parentNode
g(n)||"mcepastebin"===o.id||b(),t=o,r.hasClass(t,"mce-offscreen-selection")||y()})),e.on("copy",(function(e){var t,n,o=e.clipboardData
e.isDefaultPrevented()||!e.clipboardData||Ct.ie||(t=(n=r.get(u))?n.getElementsByTagName("*")[0]:n)&&(e.preventDefault(),o.clearData(),o.setData("text/html",t.outerHTML),o.setData("text/plain",t.outerText||t.innerText))})),function(e){var t,n,r,o,i
Hw(e),(t=e).on("drop",(function(e){var n=void 0!==e.clientX?t.getDoc().elementFromPoint(e.clientX,e.clientY):null
!Fw(n)&&"false"!==t.dom.getContentEditableParent(n)||e.preventDefault()})),e.getParam("block_unsupported_drop",!0,"boolean")&&(r=function(e){var t
e.isDefaultPrevented()||(t=e.dataTransfer)&&(H(t.types,"Files")||0<t.files.length)&&(e.preventDefault(),"drop"===e.type&&kv(n,"Dropped file type is not supported"))},o=function(e){Od(n,e.target)&&r(e)},i=function(){var e=fu.DOM,t=n.dom,i=document,a=n.inline?n.getBody():n.getDoc(),u=["drop","dragover"]
$(u,(function(n){e.bind(i,n,o),t.bind(a,n,r)})),n.on("remove",(function(){$(u,(function(n){e.unbind(i,n,o),t.unbind(a,n,r)}))}))},(n=e).on("init",(function(){jr.setEditorTimeout(n,i,0)})))}(e),p=Su((function(){var e,t
s.removed||!s.getBody().contains(document.activeElement)||(e=s.selection.getRng()).collapsed&&(t=Sy(s,e,!1),s.selection.setRng(t))}),0),(s=e).on("focus",(function(){p.throttle()})),s.on("blur",(function(){p.cancel()})),(h=e).on("init",(function(){h.on("focusin",(function(e){var t,n,r=e.target
$n(r)&&(t=Ef(h.getBody(),r),n=Vn(t)?t:r,h.selection.getNode()!==n&&wy(h,n).each((function(e){return h.selection.setRng(e)})))}))}))}(),{showCaret:m,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(yo(e),l(d()),n.scrollIntoView(e))},hideFakeCaret:b,destroy:function(){a.destroy(),t=null}}},Kw=fu.DOM,Xw=function(e){return pe(e,(function(e){return!1===P(e)}))},Yw=function(e){var t,n=e.settings,r=e.editorUpload.blobCache
return Xw({allow_conditional_comments:n.allow_conditional_comments,allow_html_data_urls:n.allow_html_data_urls,allow_svg_data_urls:n.allow_svg_data_urls,allow_html_in_named_anchor:n.allow_html_in_named_anchor,allow_script_urls:n.allow_script_urls,allow_unsafe_link_target:n.allow_unsafe_link_target,convert_fonts_to_spans:n.convert_fonts_to_spans,fix_list_elements:n.fix_list_elements,font_size_legacy_values:n.font_size_legacy_values,forced_root_block:n.forced_root_block,forced_root_block_attrs:n.forced_root_block_attrs,padd_empty_with_br:n.padd_empty_with_br,preserve_cdata:n.preserve_cdata,remove_trailing_brs:n.remove_trailing_brs,inline_styles:n.inline_styles,root_name:(t=e).inline?t.getElement().nodeName.toLowerCase():void 0,validate:!0,blob_cache:r,images_dataimg_filter:n.images_dataimg_filter})},Gw=function(e){var t
e.bindPendingEventDelegates(),e.initialized=!0,e.fire("Init"),e.focus(!0),function(e){var t=e.dom.getRoot()
e.inline||hf(e)&&e.selection.getStart(!0)!==t||ml(t).each((function(t){var n,r,o,i,a=t.getNode(),u=Pn(a)?ml(a).getOr(t):t
Ct.browser.isIE()?(n=e,r=u.toRange(),o=Tt(n.getBody()),i=(Sd(n)?N.from(r):N.none()).map(Nd).filter(xd(o)),n.bookmark=i.isSome()?i:n.bookmark):e.selection.setRng(u.toRange())}))}(e),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),(t=e).settings.auto_focus&&jr.setEditorTimeout(t,(function(){var e=!0===t.settings.auto_focus?t:t.editorManager.get(t.settings.auto_focus)
e.destroyed||e.focus()}),100)},Jw=function(e){return e.inline?e.ui.styleSheetLoader:e.dom.styleSheetLoader},Qw=function(e,t){var n=e.settings,r=e.getDoc(),o=e.getBody()
n.browser_spellcheck||n.gecko_spellcheck||(r.body.spellcheck=!1,Kw.setAttrib(o,"spellcheck","false")),e.quirks=function(e){var t,n,r,o=Et.each,i=Af.BACKSPACE,a=Af.DELETE,s=e.dom,c=e.selection,l=e.parser,f=Ct.gecko,d=Ct.ie,m=Ct.webkit,p="data:text/mce-internal,",g=d?"Text":"URL",h=function(t,r){try{e.getDoc().execCommand(t,!1,r)}catch(n){}},v=function(e){return e.isDefaultPrevented()},y=function(){e.shortcuts.add("meta+a",null,"SelectAll")},b=function(){e.on("keydown",(function(e){if(!v(e)&&e.keyCode===i&&c.isCollapsed()&&0===c.getRng().startOffset){var t=c.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))},C=function(){e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(function(t){var n
if("HTML"===t.target.nodeName){if(11<Ct.ie)return void e.getBody().focus()
n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged()}})))},w=u
return e.on("keydown",(function(t){var n
if(!v(t)&&t.keyCode===Af.BACKSPACE){var r=(n=c.getRng()).startContainer,o=n.startOffset,i=s.getRoot(),a=r
if(n.collapsed&&0===o){for(;a&&a.parentNode&&a.parentNode.firstChild===a&&a.parentNode!==i;)a=a.parentNode
"BLOCKQUOTE"===a.tagName&&(e.formatter.toggle("blockquote",null,a),(n=s.createRng()).setStart(r,0),n.setEnd(r,0),c.setRng(n))}}})),t=function(e){var t=s.create("body"),n=e.cloneContents()
return t.appendChild(n),c.serializer.serialize(t,{format:"html"})},e.on("keydown",(function(n){var r,o,u,c,l,f=n.keyCode
if(!v(n)&&(f===a||f===i)){if(r=e.selection.isCollapsed(),o=e.getBody(),r&&!s.isEmpty(o))return
if(!r&&(u=e.selection.getRng(),c=t(u),(l=s.createRng()).selectNode(e.getBody()),c!==t(l)))return
n.preventDefault(),e.setContent(""),o.firstChild&&s.isBlock(o.firstChild)?e.selection.setCursorLocation(o.firstChild,0):e.selection.setCursorLocation(o,0),e.nodeChanged()}})),Ct.windowsPhone||e.on("keyup focusin mouseup",(function(e){Af.modifierPressed(e)||c.normalize()}),!0),m&&(e.inline||s.bind(e.getDoc(),"mousedown mouseup",(function(t){var n
if(t.target===e.getDoc().documentElement)if(n=c.getRng(),e.getBody().focus(),"mousedown"===t.type){if(fo(n.startContainer))return
c.placeCaretAt(t.clientX,t.clientY)}else c.setRng(n)})),e.on("click",(function(t){var n=t.target;/^(IMG|HR)$/.test(n.nodeName)&&"false"!==s.getContentEditableParent(n)&&(t.preventDefault(),e.selection.select(n),e.nodeChanged()),"A"===n.nodeName&&s.hasClass(n,"mce-item-anchor")&&(t.preventDefault(),c.select(n))})),Ws(e)&&e.on("init",(function(){h("DefaultParagraphSeparator",Ws(e))})),e.on("init",(function(){e.dom.bind(e.getBody(),"submit",(function(e){e.preventDefault()}))})),b(),l.addNodeFilter("br",(function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),Ct.iOS?(e.inline||e.on("keydown",(function(){document.activeElement===document.body&&e.getWin().focus()})),C(),e.on("click",(function(e){var t=e.target
do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):y()),11<=Ct.ie&&(C(),b()),Ct.ie&&(y(),h("AutoUrlDetect",!1),e.on("dragstart",(function(t){var n,r,o;(n=t).dataTransfer&&(e.selection.isCollapsed()&&"IMG"===n.target.tagName&&c.select(n.target),0<(r=e.selection.getContent()).length&&(o=p+escape(e.id)+","+escape(r),n.dataTransfer.setData(g,o)))})),e.on("drop",(function(t){var n,r,o,i,a
v(t)||(n=(i=t).dataTransfer&&(a=i.dataTransfer.getData(g))&&0<=a.indexOf(p)?(a=a.substr(p.length).split(","),{id:unescape(a[0]),html:unescape(a[1])}):null)&&n.id!==e.id&&(t.preventDefault(),r=Bf(t.x,t.y,e.getDoc()),c.setRng(r),o=n.html,e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",!1,{content:o,internal:!0}):e.execCommand("mceInsertContent",!1,o))}))),f&&(e.on("keydown",(function(t){if(!v(t)&&t.keyCode===i){if(!e.getBody().getElementsByTagName("hr").length)return
if(c.isCollapsed()&&0===c.getRng().startOffset){var n=c.getNode(),r=n.previousSibling
if("HR"===n.nodeName)return s.remove(n),void t.preventDefault()
r&&r.nodeName&&"hr"===r.nodeName.toLowerCase()&&(s.remove(r),t.preventDefault())}}})),Range.prototype.getClientRects||e.on("mousedown",(function(t){var n
v(t)||"HTML"!==t.target.nodeName||((n=e.getBody()).blur(),jr.setEditorTimeout(e,(function(){n.focus()})))})),n=function(){var t=s.getAttribs(c.getStart().cloneNode(!1))
return function(){var n=c.getStart()
n!==e.getBody()&&(s.setAttrib(n,"style",null),o(t,(function(e){n.setAttributeNode(e.cloneNode(!0))})))}},r=function(){return!c.isCollapsed()&&s.getParent(c.getStart(),s.isBlock)!==s.getParent(c.getEnd(),s.isBlock)},e.on("keypress",(function(t){var o
if(!v(t)&&(8===t.keyCode||46===t.keyCode)&&r())return o=n(),e.getDoc().execCommand("delete",!1,null),o(),t.preventDefault(),!1})),s.bind(e.getDoc(),"cut",(function(t){var o
!v(t)&&r()&&(o=n(),jr.setEditorTimeout(e,(function(){o()})))})),e.getParam("readonly")||e.on("BeforeExecCommand mousedown",(function(){h("StyleWithCSS",!1),h("enableInlineTableEditing",!1),ec(e)||h("enableObjectResizing",!1)})),e.on("SetContent ExecCommand",(function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(s.select("a"),(function(e){var t=e.parentNode,n=s.getRoot()
if(t.lastChild===e){for(;t&&!s.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return
t=t.parentNode}s.add(t,"br",{"data-mce-bogus":1})}}))})),e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),Ct.mac&&e.on("keydown",(function(t){!Af.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))})),b()),{refreshContentEditable:w,isHidden:function(){if(!f||e.removed)return!1
var t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}}}(e),e.fire("PostRender")
var i,a,s,c,l,f,d=e.getParam("directionality",wu.isRtl()?"rtl":void 0)
void 0!==d&&(o.dir=d),n.protect&&e.on("BeforeSetContent",(function(e){Et.each(n.protect,(function(t){e.content=e.content.replace(t,(function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"}))}))})),e.on("SetContent",(function(){e.addVisual(e.getBody())})),!1===t&&e.load({initial:!0,format:"html"}),e.startContent=e.getContent({format:"raw"}),e.on("compositionstart compositionend",(function(t){e.composing="compositionstart"===t.type})),0<e.contentStyles.length&&(i="",Et.each(e.contentStyles,(function(e){i+=e+"\r\n"})),e.dom.addStyle(i)),function(e,t){var n,r,o,i,a=Jw(e),u=Zs(e),s=function(){a.unloadAll(t),e.inline||e.ui.styleSheetLoader.unloadAll(u)},c=function(){e.removed?s():(e.on("remove",s),Gw(e))}
Or.all((n=e,r=t,o=u,i=[new Or((function(e,t){return Jw(n).loadAll(r,e,t)}))],n.inline?i:i.concat([new Or((function(e,t){return n.ui.styleSheetLoader.loadAll(o,e,t)}))]))).then(c).catch(c)}(e,e.contentCSS),n.content_style&&(a=e,s=n.content_style,c=Tt(a.getBody()),l=an(on(c)),f=At("style"),Xn(f,"type","text/css"),fn(f,Rt(s)),fn(l,f),a.on("remove",(function(){pn(f)})))},Zw=function(e,t){var n=e.settings,r=e.getElement(),o=e.getDoc()
n.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline||(o.open(),o.write(e.iframeHTML),o.close()),e.inline&&(Kw.addClass(r,"mce-content-body"),e.contentDocument=o=document,e.contentWindow=window,e.bodyElement=r,e.contentAreaContainer=r)
var i,a,s,l,d=e.getBody()
d.disabled=!0,e.readonly=!!n.readonly,e.readonly||(e.inline&&"static"===Kw.getStyle(d,"position",!0)&&(d.style.position="relative"),d.contentEditable=e.getParam("content_editable_state",!0)),d.disabled=!1,e.editorUpload=Uv(e),e.schema=ci(n),e.dom=fu(o,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,hex_colors:n.force_hex_style_colors,update_styles:!0,root_element:e.inline?e.getBody():null,collect:function(){return e.inline},schema:e.schema,contentCssCors:e.getParam("content_css_cors",!1,"boolean"),referrerPolicy:Gs(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}}),e.parser=((a=Wh(Yw(i=e),i.schema)).addAttributeFilter("src,href,style,tabindex",(function(e,t){for(var n,r,o=e.length,a=i.dom,u="data-mce-"+t;o--;)if((r=(n=e[o]).attr(t))&&!n.attr(u)){if(0===r.indexOf("data:")||0===r.indexOf("blob:"))continue
"style"===t?((r=a.serializeStyle(a.parseStyle(r),n.name)).length||(r=null),n.attr(u,r),n.attr(t,r)):"tabindex"===t?(n.attr(u,r),n.attr(t,null)):n.attr(u,i.convertURL(r,t,n.name))}})),a.addNodeFilter("script",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("type")||"no/type"
0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}})),i.settings.preserve_cdata&&a.addNodeFilter("#cdata",(function(e){for(var t=e.length;t--;){var n=e[t]
n.type=8,n.name="#comment",n.value="[CDATA["+i.dom.encode(n.value)+"]]"}})),a.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(function(e){for(var t=e.length,n=i.schema.getNonEmptyElements();t--;){var r=e[t]
r.isEmpty(n)&&0===r.getAll("br").length&&(r.append(new Kd("br",1)).shortEnded=!0)}})),a),e.serializer=Yh((l=(s=e).settings,ke(ke({},Yw(s)),Xw({url_converter:l.url_converter,url_converter_scope:l.url_converter_scope,element_format:l.element_format,entities:l.entities,entity_encoding:l.entity_encoding,indent:l.indent,indent_after:l.indent_after,indent_before:l.indent_before,block_elements:l.block_elements,boolean_attributes:l.boolean_attributes,custom_elements:l.custom_elements,extended_valid_elements:l.extended_valid_elements,invalid_elements:l.invalid_elements,invalid_styles:l.invalid_styles,move_caret_before_on_enter_elements:l.move_caret_before_on_enter_elements,non_empty_elements:l.non_empty_elements,schema:l.schema,self_closing_elements:l.self_closing_elements,short_ended_elements:l.short_ended_elements,special:l.special,text_block_elements:l.text_block_elements,text_inline_elements:l.text_inline_elements,valid_children:l.valid_children,valid_classes:l.valid_classes,valid_elements:l.valid_elements,valid_styles:l.valid_styles,verify_html:l.verify_html,whitespace_elements:l.whitespace_elements}))),e),e.selection=Th(e.dom,e.getWin(),e.serializer,e),e.annotator=Sf(e),e.formatter=$v(e),e.undoManager=Wv(e),e._nodeChangeDispatcher=new Pw(e),e._selectionOverrides=Ww(e),function(e){var t=vu(N.none()),n=vu(!1),r=Nu((function(t){e.fire("longpress",ke(ke({},t),{type:"longpress"})),n.set(!0)}),400)
e.on("touchstart",(function(e){Ib(e).each((function(o){r.cancel()
var i={x:o.clientX,y:o.clientY,target:e.target}
r.throttle(e),n.set(!1),t.set(N.some(i))}))}),!0),e.on("touchmove",(function(o){r.cancel(),Ib(o).each((function(r){t.get().each((function(o){var i,a,u,s
i=r,a=o,u=Math.abs(i.clientX-a.x),s=Math.abs(i.clientY-a.y),(5<u||5<s)&&(t.set(N.none()),n.set(!1),e.fire("longpresscancel"))}))}))}),!0),e.on("touchend touchcancel",(function(o){r.cancel(),"touchcancel"!==o.type&&t.get().filter((function(e){return e.target.isEqualNode(o.target)})).each((function(){n.get()?o.preventDefault():e.fire("tap",ke(ke({},o),{type:"tap"}))}))}),!0)}(e),function(e){var t,n;(t=e).on("click",(function(e){t.dom.getParent(e.target,"details")&&e.preventDefault()})),(n=e).parser.addNodeFilter("details",(function(e){$(e,(function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),n.serializer.addNodeFilter("details",(function(e){$(e,(function(e){var t=e.attr("data-mce-open")
e.attr("open",A(t)?t:null),e.attr("data-mce-open",null)}))}))}(e),xh(e)||function(e){e.on("click",(function(t){var n,r,o,i,a
3<=t.detail&&(o=(n=e).selection.getRng(),i=bs.fromRangeStart(o),a=bs.fromRangeEnd(o),bs.isElementPosition(i)&&(r=i.container(),Lw(r)&&ml(r).each((function(e){return o.setStart(e.container(),e.offset())}))),bs.isElementPosition(a)&&(r=i.container(),Lw(r)&&pl(r).each((function(e){return o.setEnd(e.container(),e.offset())}))),n.selection.setRng(Lp(o)))}))}(e)
var m,p,g=xh(m=e)?vu(null):Bw(m);(function(e,t){e.addCommand("delete",(function(){var n,r
r=t,Db(n=e)||Dy(n,!1)||_y(n,!1)||xb(n,r,!1)||py(n,!1)||Dp(n)||Ly(n,!1)||_b(n,!1)||vy(n)||Eb(n,!1)||(Lb(n,"Delete"),oy(n))})),e.addCommand("forwardDelete",(function(){var n,r
r=t,Dy(n=e,!0)||_y(n,!0)||xb(n,r,!0)||py(n,!0)||Dp(n)||Ly(n,!0)||_b(n,!0)||vy(n)||Eb(n,!0)||Lb(n,"ForwardDelete")}))})(e,g),Ws(p=e)&&p.on("NodeChange",f(Fb,p)),function(e){var t,n=e.dom,r=Ws(e),o=(t=e).getParam("placeholder",Vs.getAttrib(t.getElement(),"placeholder"),"string"),i=function(t,a){var u,s,c,l
!function(e){if(Yv(e)){var t=e.keyCode
return!Gv(e)&&(Af.metaKeyPressed(e)||e.altKey||112<=t&&t<=123||H(Kv,t))}return!1}(t)&&(u=e.getBody(),s=!(Yv(c=t)&&!(Gv(c)||"keyup"===c.type&&229===c.keyCode))&&function(e,t,n){if(Io(Tt(t),!1)){var r=""===n,o=t.firstElementChild
return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&(r?!e.isBlock(o):n===o.nodeName.toLowerCase())}return!1}(n,u,r),""!==n.getAttrib(u,Xv)===s&&!a||(n.setAttrib(u,Xv,s?o:null),n.setAttrib(u,"aria-placeholder",s?o:null),l=s,e.fire("PlaceholderToggle",{state:l}),e.on(s?"keydown":"keyup",i),e.off(s?"keyup":"keydown",i)))}
o&&e.on("init",(function(t){i(t,!0),e.on("change SetContent ExecCommand",i),e.on("paste",(function(t){return jr.setEditorTimeout(e,(function(){return i(t)}))}))}))}(e),e.fire("PreInit"),function(e){var t=e
return ge(e.plugins,"rtc").fold((function(){return t.rtcInstance=wh(e),N.none()}),(function(e){return N.some(e.setup().then((function(e){var n,r,o,i,a,s,c,l
return t.rtcInstance=(r=function(e){return R(e)?e:{}},o=h("Unimplemented feature for rtc"),i=(n=e).undoManager,a=n.formatter,s=n.editor,c=n.selection,l=n.raw,{undoManager:{beforeChange:u,addUndoLevel:o,undo:function(){return i.undo()},redo:function(){return i.redo()},clear:function(){return i.clear()},reset:function(){return i.reset()},hasUndo:function(){return i.hasUndo()},hasRedo:function(){return i.hasRedo()},transact:function(e,t,n){return i.transact(n)},ignore:function(e,t){return i.ignore(t)},extra:function(e,t,n,r){return i.extra(n,r)}},formatter:{match:function(e,t,n){return a.match(e,r(t))},matchAll:o,matchNode:o,canApply:function(e){return a.canApply(e)},closest:function(e){return a.closest(e)},apply:function(e,t,n){return a.apply(e,r(t))},remove:function(e,t,n,o){return a.remove(e,r(t))},toggle:function(e,t,n){return a.toggle(e,r(t))},formatChanged:function(e,t,n,r){return a.formatChanged(t,n,r)}},editor:{getContent:function(e,t){return s.getContent(e)},setContent:function(e,t){return s.setContent(e,t)},insertContent:function(e,t){return s.insertContent(e)},addVisual:u},selection:{getContent:function(e,t){return c.getContent(t)}},raw:{getModel:function(){return N.some(l.getRawModel())}}}),e.rtc.isRemote}),(function(e){var n,r
return t.rtcInstance=(n=c(null),r=c(""),{undoManager:{beforeChange:u,addUndoLevel:n,undo:n,redo:n,clear:u,reset:u,hasUndo:b,hasRedo:b,transact:n,ignore:u,extra:u},formatter:{match:b,matchAll:c([]),matchNode:b,canApply:b,closest:r,apply:u,remove:u,toggle:u,formatChanged:c({unbind:u})},editor:{getContent:r,setContent:r,insertContent:u,addVisual:u},selection:{getContent:r},raw:{getModel:c(N.none())}}),Or.reject(e)})))}))}(e).fold((function(){Qw(e,!1)}),(function(t){e.setProgressState(!0),t.then((function(t){e.setProgressState(!1),Qw(e,t)}),(function(t){e.notificationManager.open({type:"error",text:String(t)}),Qw(e,!0)}))}))},ex=fu.DOM,tx=function(e,t){var n,r,o,i,a=e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),u=(n=e.id,r=a,t.height,o=e.getParam("iframe_attrs",{}),i=At("iframe"),Yn(i,o),Yn(i,{id:n+"_ifr",frameBorder:"0",allowTransparency:"true",title:r}),_u(i,"tox-edit-area__iframe"),i.dom)
u.onload=function(){u.onload=null,e.fire("load")}
var s=function(e,t){if(document.domain!==window.location.hostname&&Ct.browser.isIE()){var n=Lv("mce")
e[n]=function(){Zw(e)}
var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()"
return ex.setAttrib(t,"src",r),!0}return!1}(e,u)
return e.contentAreaContainer=t.iframeContainer,e.iframeElement=u,e.iframeHTML=function(e){var t=e.getParam("doctype","<!DOCTYPE html>")+"<html><head>"
e.getParam("document_base_url","")!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
var n=qs(e,"body_id","tinymce"),r=qs(e,"body_class","")
return $s(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+$s(e)+'" />'),t+'</head><body id="'+n+'" class="mce-content-body '+r+'" data-id="'+e.id+'"><br></body></html>'}(e),ex.add(t.iframeContainer,u),s},nx=fu.DOM,rx=function(e,t,n){var r=xv.get(n),o=xv.urls[n]||e.documentBaseUrl.replace(/\/$/,"")
if(n=Et.trim(n),r&&-1===Et.inArray(t,n)){if(Et.each(xv.dependencies(n),(function(n){rx(e,t,n)})),e.plugins[n])return
try{var i=new r(e,o,e.$);(e.plugins[n]=i).init&&(i.init(e,o),t.push(n))}catch(ZS){!function(e,t,n){var r=wu.translate(["Failed to initialize plugin: {0}",t])
_f(e,"PluginLoadError",{message:r}),Tv(r,n),kv(e,r)}(e,n,ZS)}}},ox=function(e){return e.replace(/^\-/,"")},ix=function(e){return{editorContainer:e,iframeContainer:e,api:{}}},ax=function(e){var t,n,r,o=e.getElement()
return e.orgDisplay=o.style.display,A(nc(e))?e.theme.renderUI():I(nc(e))?(n=(t=e).getElement(),(r=nc(t)(t,n)).editorContainer.nodeType&&(r.editorContainer.id=r.editorContainer.id||t.id+"_parent"),r.iframeContainer&&r.iframeContainer.nodeType&&(r.iframeContainer.id=r.iframeContainer.id||t.id+"_iframecontainer"),r.height=r.iframeHeight?r.iframeHeight:n.offsetHeight,r):function(e){var t,n,r=e.getElement()
return e.inline?ix(null):(t=r,n=nx.create("div"),nx.insertAfter(n,t),ix(n))}(e)},ux=function(e){var t,n,r,o,i,a,s,c,l
e.fire("ScriptsLoaded"),t=e,n=Et.trim(Ys(t)),r=t.ui.registry.getAll().icons,o=ke(ke({},mv.get("default").icons),mv.get(n).icons),se(o,(function(e,n){he(r,n)||t.ui.registry.addIcon(n,e)})),s=nc(i=e),A(s)?(i.settings.theme=ox(s),a=Sv.get(s),i.theme=new a(i,Sv.urls[s]),i.theme.init&&i.theme.init(i,Sv.urls[s]||i.documentBaseUrl.replace(/\/$/,""),i.$)):i.theme={},c=e,l=[],Et.each(oc(c).split(/[ ,]/),(function(e){rx(c,l,ox(e))}))
var f,d,m,p=ax(e)
f=e,d=N.from(p.api).getOr({}),m={show:N.from(d.show).getOr(u),hide:N.from(d.hide).getOr(u),disable:N.from(d.disable).getOr(u),isDisabled:N.from(d.isDisabled).getOr(b),enable:function(){f.mode.isReadOnly()||N.from(d.enable).map(y)}},f.ui=ke(ke({},f.ui),m)
var g,h,v,C={editorContainer:p.editorContainer,iframeContainer:p.iframeContainer}
return e.editorContainer=C.editorContainer?C.editorContainer:null,Bv(e),e.inline?Zw(e):(v=tx(g=e,h=C),h.editorContainer&&(ex.get(h.editorContainer).style.display=g.orgDisplay,g.hidden=ex.isHidden(h.editorContainer)),g.getElement().style.display="none",ex.setAttrib(g.id,"aria-hidden","true"),void(v||Zw(g)))},sx=fu.DOM,cx=function(e){return"-"===e.charAt(0)},lx=function(e,t,n){return N.from(t).filter((function(e){return 0<e.length&&!mv.has(e)})).map((function(t){return{url:e.editorManager.baseURL+"/icons/"+t+"/icons"+n+".js",name:N.some(t)}}))},fx=function(e,t){var n,r,o,i,a,s,c=gu.ScriptLoader
n=c,o=t,i=function(){var n,r;(function(e,t){var n,r=Js(t),o=t.getParam("language_url","","string")
!1===wu.hasCode(r)&&"en"!==r&&(n=""!==o?o:t.editorManager.baseURL+"/langs/"+r+".js",e.add(n,u,void 0,(function(){_v(t,"LanguageLoadError",Av("language",n,r))})))})(c,e),function(e,t,n){var r,o=lx(t,"default",n),i=(r=t,N.from(r.getParam("icons_url","","string")).filter((function(e){return 0<e.length})).map((function(e){return{url:e,name:N.none()}})).orThunk((function(){return lx(t,Ys(t),"")})))
$(function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n)
return t}([o,i]),(function(n){e.add(n.url,u,void 0,(function(){var e,r,o
e=t,r=n.url,o=n.name.getOrUndefined(),_v(e,"IconsLoadError",Av("icons",r,o))}))}))}(c,e,t),n=e,r=t,Et.each(n.getParam("external_plugins"),(function(e,t){xv.load(t,e,u,void 0,(function(){Rv(n,e,t)})),n.settings.plugins+=" "+t})),Et.each(oc(n).split(/[ ,]/),(function(e){var t,o;(e=Et.trim(e))&&!xv.urls[e]&&(cx(e)?(e=e.substr(1,e.length),t=xv.dependencies(e),Et.each(t,(function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+r+".js"},o=xv.createUrl(t,e)
xv.load(o.resource,o,u,void 0,(function(){Rv(n,o.prefix+o.resource+o.suffix,o.resource)}))}))):(o={prefix:"plugins/",resource:e,suffix:"/plugin"+r+".js"},xv.load(e,o,u,void 0,(function(){Rv(n,o.prefix+o.resource+o.suffix,e)}))))})),c.loadQueue((function(){e.removed||ux(e)}),e,(function(){e.removed||ux(e)}))},s=nc(r=e),A(s)?(cx(s)||Sv.urls.hasOwnProperty(s)||((a=r.getParam("theme_url"))?Sv.load(s,r.documentBaseURI.toAbsolute(a)):Sv.load(s,"themes/"+s+"/theme"+o+".js")),n.loadQueue((function(){Sv.waitFor(s,i)}))):i()},dx={"font-size":"size","font-family":"face"},mx=function(e){return function(t,n){return N.from(n).map(Tt).filter(Ut).bind((function(n){return function(e,t,n){return Yp(Tt(n),(function(t){return tr(n=t,e).orThunk((function(){return"font"===It(n)?ge(dx,e).bind((function(e){return Jn(n,e)})):N.none()}))
var n}),(function(e){return Dt(Tt(t),e)}))}(e,t,n.dom).or((r=e,o=n.dom,N.from(fu.DOM.getStyle(o,r,!0))))
var r,o})).getOr("")}},px=mx("font-size"),gx=s((function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}),mx("font-family")),hx=function(e){return ml(e.getBody()).map((function(e){var t=e.container()
return In(t)?t.parentNode:t}))},vx=function(e,t){return n=e,N.from(n.selection.getRng()).bind((function(e){var t=n.getBody()
return e.startContainer===t&&0===e.startOffset?N.none():N.from(n.selection.getStart(!0))})).orThunk(f(hx,e)).map(Tt).filter(Ut).map(t)
var n},yx=function(e,t){if(/^[0-9.]+$/.test(t)){var n=parseInt(t,10)
if(1<=n&&n<=7){var r=(a=e,Et.explode(a.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large"))),o=(i=e,Et.explode(i.getParam("font_size_classes","")))
return o?o[n-1]||t:r[n-1]||t}return t}return t
var i,a},bx=Et.each,Cx=Et.map,wx=Et.inArray,xx=(Sx.prototype.execCommand=function(e,t,n,r){var i,a,u=!1,s=this
if(!s.editor.removed){if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus?(a=s.editor,_d(a).each((function(e){return a.selection.setRng(e)}))):s.editor.focus(),(r=s.editor.fire("BeforeExecCommand",{command:e,ui:t,value:n})).isDefaultPrevented())return!1
var c=e.toLowerCase()
if(i=s.commands.exec[c])return i(c,t,n),s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
if(bx(this.editor.plugins,(function(r){if(r.execCommand&&r.execCommand(e,t,n))return s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!(u=!0)})),u)return u
if(s.editor.theme&&s.editor.theme.execCommand&&s.editor.theme.execCommand(e,t,n))return s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
try{u=s.editor.getDoc().execCommand(e,t,n)}catch(o){}return!!u&&(s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0)}},Sx.prototype.queryCommandState=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.state[e])return t(e)
try{return this.editor.getDoc().queryCommandState(e)}catch(m){}return!1}},Sx.prototype.queryCommandValue=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.value[e])return t(e)
try{return this.editor.getDoc().queryCommandValue(e)}catch(m){}}},Sx.prototype.addCommands=function(e,t){void 0===t&&(t="exec")
var n=this
bx(e,(function(e,r){bx(r.toLowerCase().split(","),(function(r){n.commands[t][r]=e}))}))},Sx.prototype.addCommand=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.exec[e]=function(e,o,i,a){return t.call(n||r.editor,o,i,a)}},Sx.prototype.queryCommandSupported=function(e){if(e=e.toLowerCase(),this.commands.exec[e])return!0
try{return this.editor.getDoc().queryCommandSupported(e)}catch(t){}return!1},Sx.prototype.addQueryStateHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.state[e]=function(){return t.call(n||r.editor)}},Sx.prototype.addQueryValueHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.value[e]=function(){return t.call(n||r.editor)}},Sx.prototype.hasCustomCommand=function(e){return e=e.toLowerCase(),!!this.commands.exec[e]},Sx.prototype.execNativeCommand=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=null),this.editor.getDoc().execCommand(e,t,n)},Sx.prototype.isFormatMatch=function(e){return this.editor.formatter.match(e)},Sx.prototype.toggleFormat=function(e,t){this.editor.formatter.toggle(e,t?{value:t}:void 0),this.editor.nodeChanged()},Sx.prototype.storeSelection=function(e){this.selectionBookmark=this.editor.selection.getBookmark(e)},Sx.prototype.restoreSelection=function(){this.editor.selection.moveToBookmark(this.selectionBookmark)},Sx.prototype.setupCommands=function(e){var t=this
this.addCommands({"mceResetDesignMode,mceBeginUndoLevel":u,"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},"Cut,Copy,Paste":function(n){var r,o,i=e.getDoc()
try{t.execNativeCommand(n)}catch(l){r=!0}"paste"!==n||i.queryCommandEnabled(n)||(r=!0),!r&&i.queryCommandSupported(n)||(o=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."),Ct.mac&&(o=o.replace(/Ctrl\+/g,"⌘+")),e.notificationManager.open({text:o,type:"error"}))},unlink:function(){var t
e.selection.isCollapsed()?(t=e.dom.getParent(e.selection.getStart(),"a"))&&e.dom.remove(t,!0):e.formatter.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(n){var r=n.substring(7)
"full"===r&&(r="justify"),bx("left,center,right,justify".split(","),(function(t){r!==t&&e.formatter.remove("align"+t)})),"none"!==r&&t.toggleFormat("align"+r)},"InsertUnorderedList,InsertOrderedList":function(n){var r
t.execNativeCommand(n)
var o=e.dom.getParent(e.selection.getNode(),"ol,ul")
o&&(r=o.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName)&&(t.storeSelection(),e.dom.split(r,o),t.restoreSelection()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){t.toggleFormat(e)},"ForeColor,HiliteColor":function(e,n,r){t.toggleFormat(e,r)},FontName:function(t,n,r){(function(e,t){var n,r=yx(e,t)
e.formatter.toggle("fontname",{value:(n=r.split(/\s*,\s*/),q(n,(function(e){return-1===e.indexOf(" ")||ze(e,'"')||ze(e,"'")?e:"'"+e+"'"})).join(","))}),e.nodeChanged()})(e,r)},FontSize:function(t,n,r){var o,i
i=r,(o=e).formatter.toggle("fontsize",{value:yx(o,i)}),o.nodeChanged()},LineHeight:function(t,n,r){var o,i
i=r,(o=e).undoManager.transact((function(){o.formatter.toggle("lineheight",{value:String(i)}),o.nodeChanged()}))},RemoveFormat:function(t){e.formatter.remove(t)},mceBlockQuote:function(){t.toggleFormat("blockquote")},FormatBlock:function(e,n,r){return t.toggleFormat(r||"p")},mceCleanup:function(){var t=e.selection.getBookmark()
e.setContent(e.getContent()),e.selection.moveToBookmark(t)},mceRemoveNode:function(n,r,o){var i=o||e.selection.getNode()
i!==e.getBody()&&(t.storeSelection(),e.dom.remove(i,!0),t.restoreSelection())},mceSelectNodeDepth:function(t,n,r){var o=0
e.dom.getParent(e.selection.getNode(),(function(t){if(1===t.nodeType&&o++===r)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:function(t,n,r){e.selection.select(r)},mceInsertContent:function(t,n,r){(function(e,t){var n,r,o,i,a="string"!=typeof(n=t)?(r=Et.extend({paste:n.paste,data:{paste:n.paste}},n),{content:n.content,details:r}):{content:n,details:{}}
o=a.content,i=a.details,Sh(e).editor.insertContent(o,i)})(e,r)},mceInsertRawHTML:function(t,n,r){e.selection.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,(function(){return r})))},mceInsertNewLine:function(t,n,r){Ew(e,r)},mceToggleFormat:function(e,n,r){t.toggleFormat(r)},mceSetContent:function(t,n,r){e.setContent(r)},"Indent,Outdent":function(t){Pb(e,t)},mceRepaint:u,InsertHorizontalRule:function(){e.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual,e.addVisual()},mceReplaceContent:function(t,n,r){e.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceInsertLink:function(t,n,r){"string"==typeof r&&(r={href:r})
var o=e.dom.getParent(e.selection.getNode(),"a")
r.href=r.href.replace(/ /g,"%20"),o&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,o)},selectAll:function(){var t,n=e.dom.getParent(e.selection.getStart(),Hn)
n&&((t=e.dom.createRng()).selectNodeContents(n),e.selection.setRng(t))},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,n,r){return dw(e,r),!0}})
var n=function(t){return function(){var n=e.selection,r=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks(),o=Cx(r,(function(n){return!!e.formatter.matchNode(n,t)}))
return-1!==wx(o,!0)}}
t.addCommands({JustifyLeft:n("alignleft"),JustifyCenter:n("aligncenter"),JustifyRight:n("alignright"),JustifyFull:n("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return t.isFormatMatch(e)},mceBlockQuote:function(){return t.isFormatMatch("blockquote")},Outdent:function(){return Tb(e)},"InsertUnorderedList,InsertOrderedList":function(t){var n=e.dom.getParent(e.selection.getNode(),"ul,ol")
return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state"),t.addCommands({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}}),t.addQueryValueHandler("FontName",(function(){return vx(t=e,(function(e){return gx(t.getBody(),e.dom)})).getOr("")
var t}),this),t.addQueryValueHandler("FontSize",(function(){return vx(t=e,(function(e){return px(t.getBody(),e.dom)})).getOr("")
var t}),this),t.addQueryValueHandler("LineHeight",(function(){return vx(t=e,(function(e){var n=Tt(t.getBody())
return Yp(e,(function(e){return tr(e,"line-height")}),f(Dt,n)).getOrThunk((function(){var t=parseFloat(Zn(e,"line-height")),n=parseFloat(Zn(e,"font-size"))
return String(t/n)}))})).getOr("")
var t}),this)},Sx)
function Sx(e){this.commands={state:{},exec:{},value:{}},this.editor=e,this.setupCommands(e)}var Nx="data-mce-contenteditable",Ex=function(e,t,n){var r,o
Au(e,t)&&!1===n?(o=t,ku(r=e)?r.dom.classList.remove(o):function(e,t){return o=t,0<(i=K(Eu(n=e,r="class"),(function(e){return e!==o}))).length?Xn(n,r,i.join(" ")):Qn(n,r),!1
var n,r,o,i}(r,o),function(e){0===(ku(e)?e.dom.classList:Eu(e,"class")).length&&Qn(e,"class")}(r)):n&&_u(e,t)},kx=function(t,n,r){try{t.getDoc().execCommand(n,!1,String(r))}catch(e){}},_x=function(e,t){e.dom.contentEditable=t?"true":"false"},Ax=function(e,t){var n,r,o,i=Tt(e.getBody())
Ex(i,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),o=e,N.from(o.selection.getNode()).each((function(e){e.removeAttribute("data-mce-selected")})),e.readonly=!0,_x(i,!1),$(Tu(i,'*[contenteditable="true"]'),(function(e){Xn(e,Nx,"true"),_x(e,!1)}))):(e.readonly=!1,_x(i,!0),$(Tu(i,"*["+Nx+'="true"]'),(function(e){Qn(e,Nx),_x(e,!0)})),kx(e,"StyleWithCSS",!1),kx(e,"enableInlineTableEditing",!1),kx(e,"enableObjectResizing",!1),(Id(r=e)||function(e){var t=on(Tt(e.getElement()))
return pd(t).filter((function(t){return!(void 0!==(n=t.dom.classList)&&(n.contains("tox-edit-area")||n.contains("tox-edit-area__iframe")||n.contains("mce-content-body")))&&Od(e,t.dom)
var n})).isSome()}(r))&&e.focus(),(n=e).selection.setRng(n.selection.getRng()),e.nodeChanged())},Rx=function(e){return e.readonly},Tx=function(e){e.parser.addAttributeFilter("contenteditable",(function(t){Rx(e)&&$(t,(function(e){e.attr(Nx,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(Nx,(function(t){Rx(e)&&$(t,(function(e){e.attr("contenteditable",e.attr(Nx))}))})),e.serializer.addTempAttr(Nx)},Ox=Et.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," "),Bx=(Px.isNative=function(e){return!!Ox[e.toLowerCase()]},Px.prototype.fire=function(e,t){var n=e.toLowerCase(),r=t||{}
r.type=n,r.target||(r.target=this.scope),r.preventDefault||(r.preventDefault=function(){r.isDefaultPrevented=C},r.stopPropagation=function(){r.isPropagationStopped=C},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=C},r.isDefaultPrevented=b,r.isPropagationStopped=b,r.isImmediatePropagationStopped=b),this.settings.beforeFire&&this.settings.beforeFire(r)
var o=this.bindings[n]
if(o)for(var i=0,a=o.length;i<a;i++){var u=o[i]
if(u.once&&this.off(n,u.func),r.isImmediatePropagationStopped())return r.stopPropagation(),r
if(!1===u.func.call(this.scope,r))return r.preventDefault(),r}return r},Px.prototype.on=function(e,t,n,r){if(!1===t&&(t=b),t){var o={func:t}
r&&Et.extend(o,r)
for(var i=e.toLowerCase().split(" "),a=i.length;a--;){var u=i[a],s=this.bindings[u]
s||(s=this.bindings[u]=[],this.toggleEvent(u,!0)),n?s.unshift(o):s.push(o)}}return this},Px.prototype.off=function(e,t){var n=this
if(e)for(var r=e.toLowerCase().split(" "),o=r.length;o--;){var i=r[o],a=this.bindings[i]
if(!i)return se(this.bindings,(function(e,t){n.toggleEvent(t,!1),delete n.bindings[t]})),this
if(a){if(t)for(var u=a.length;u--;)a[u].func===t&&(a=a.slice(0,u).concat(a.slice(u+1)),this.bindings[i]=a)
else a.length=0
a.length||(this.toggleEvent(e,!1),delete this.bindings[i])}}else se(this.bindings,(function(e,t){n.toggleEvent(t,!1)})),this.bindings={}
return this},Px.prototype.once=function(e,t,n){return this.on(e,t,n,{once:!0})},Px.prototype.has=function(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)},Px)
function Px(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||b}var Dx,Lx=function(e){return e._eventDispatcher||(e._eventDispatcher=new Bx({scope:e,toggleEvent:function(t,n){Bx.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher},Ix={fire:function(e,t,n){if(this.removed&&"remove"!==e&&"detach"!==e)return t
var r=Lx(this).fire(e,t)
if(!1!==n&&this.parent)for(var o=this.parent();o&&!r.isPropagationStopped();)o.fire(e,r,!1),o=o.parent()
return r},on:function(e,t,n){return Lx(this).on(e,t,n)},off:function(e,t){return Lx(this).off(e,t)},once:function(e,t){return Lx(this).once(e,t)},hasEventListeners:function(e){return Lx(this).has(e)}},Mx=fu.DOM,Fx=function(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
var n=tc(e)
return n?(e.eventRoot||(e.eventRoot=Mx.select(n)[0]),e.eventRoot):e.getBody()},Ux=function(e,t,n){var r;(r=e).hidden||Rx(r)?Rx(e)&&function(e,t){var n,r
"click"!==t.type||Af.metaKeyPressed(t)||(n=Tt(t.target),r=e,Tr(n,"a",(function(e){return Dt(e,Tt(r.getBody()))})).bind((function(e){return Jn(e,"href")})).each((function(n){var r,o,i,a
t.preventDefault(),/^#/.test(n)?(r=e.dom.select(n+',[name="'+(ze(o=n,"#")?(i=o,a="#".length,i.substring(a)):o)+'"]')).length&&e.selection.scrollIntoView(r[0],!0):window.open(n,"_blank","rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")})))}(e,n):e.fire(t,n)},zx=function(e,t){var n
if(e.delegates||(e.delegates={}),!e.delegates[t]&&!e.removed){var r=Fx(e,t)
if(tc(e)){if(Dx||(Dx={},e.editorManager.on("removeEditor",(function(){e.editorManager.activeEditor||Dx&&(se(Dx,(function(t,n){e.dom.unbind(Fx(e,n))})),Dx=null)}))),Dx[t])return
n=function(n){for(var r=n.target,o=e.editorManager.get(),i=o.length;i--;){var a=o[i].getBody()
a!==r&&!Mx.isChildOf(r,a)||Ux(o[i],t,n)}},Dx[t]=n,Mx.bind(r,t,n)}else n=function(n){Ux(e,t,n)},Mx.bind(r,t,n),e.delegates[t]=n}},jx=ke(ke({},Ix),{bindPendingEventDelegates:function(){var e=this
Et.each(e._pendingNativeEvents,(function(t){zx(e,t)}))},toggleNativeEvent:function(e,t){var n=this
"focus"!==e&&"blur"!==e&&(t?n.initialized?zx(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(Fx(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t=e.getBody(),n=e.dom
e.delegates&&(se(e.delegates,(function(t,n){e.dom.unbind(Fx(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}}),Hx=["design","readonly"],Vx=function(e,t,n,r){var o,i=n[t.get()],a=n[r]
try{a.activate()}catch(ZS){return void console.error("problem while activating editor mode "+r+":",ZS)}i.deactivate(),i.editorReadOnly!==a.editorReadOnly&&Ax(e,a.editorReadOnly),t.set(r),o=r,e.fire("SwitchMode",{mode:o})},qx=Et.each,$x=Et.explode,Wx={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},Kx=Et.makeMap("alt,ctrl,shift,meta,access"),Xx=function(e){var t,n={}
qx($x(e.toLowerCase(),"+"),(function(e){e in Kx?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=Wx[e]||e.toUpperCase().charCodeAt(0))}))
var r=[n.keyCode]
for(t in Kx)n[t]?r.push(t):n[t]=!1
return n.id=r.join(","),n.access&&(n.alt=!0,Ct.mac?n.ctrl=!0:n.shift=!0),n.meta&&(Ct.mac?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n},Yx=(Gx.prototype.add=function(e,t,n,r){var o=this,i=o.normalizeCommandFunc(n)
return qx($x(Et.trim(e)),(function(e){var n=o.createShortcut(e,t,i,r)
o.shortcuts[n.id]=n})),!0},Gx.prototype.remove=function(e){var t=this.createShortcut(e)
return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)},Gx.prototype.normalizeCommandFunc=function(e){var t=this,n=e
return"string"==typeof n?function(){t.editor.execCommand(n,!1,null)}:Et.isArray(n)?function(){t.editor.execCommand(n[0],n[1],n[2])}:n},Gx.prototype.createShortcut=function(e,t,n,r){var o=Et.map($x(e,">"),Xx)
return o[o.length-1]=Et.extend(o[o.length-1],{func:n,scope:r||this.editor}),Et.extend(o[0],{desc:this.editor.translate(t),subpatterns:o.slice(1)})},Gx.prototype.hasModifier=function(e){return e.altKey||e.ctrlKey||e.metaKey},Gx.prototype.isFunctionKey=function(e){return"keydown"===e.type&&112<=e.keyCode&&e.keyCode<=123},Gx.prototype.matchShortcut=function(e,t){return!!t&&t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&t.alt===e.altKey&&t.shift===e.shiftKey&&!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0)},Gx.prototype.executeShortcutAction=function(e){return e.func?e.func.call(e.scope):null},Gx)
function Gx(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e
var t=this
e.on("keyup keypress keydown",(function(e){!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(qx(t.shortcuts,(function(n){if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}var Jx=function(){var e,t,n,r,o,i,a,u,s=(t={},n={},r={},o={},i={},a={},{addButton:(u=function(e,t){return function(n,r){return e[n.toLowerCase()]=ke(ke({},r),{type:t})}})(e={},"button"),addGroupToolbarButton:u(e,"grouptoolbarbutton"),addToggleButton:u(e,"togglebutton"),addMenuButton:u(e,"menubutton"),addSplitButton:u(e,"splitbutton"),addMenuItem:u(t,"menuitem"),addNestedMenuItem:u(t,"nestedmenuitem"),addToggleMenuItem:u(t,"togglemenuitem"),addAutocompleter:u(n,"autocompleter"),addContextMenu:u(o,"contextmenu"),addContextToolbar:u(i,"contexttoolbar"),addContextForm:u(i,"contextform"),addSidebar:u(a,"sidebar"),addIcon:function(e,t){return r[e.toLowerCase()]=t},getAll:function(){return{buttons:e,menuItems:t,icons:r,popups:n,contextMenus:o,contextToolbars:i,sidebars:a}}})
return{addAutocompleter:s.addAutocompleter,addButton:s.addButton,addContextForm:s.addContextForm,addContextMenu:s.addContextMenu,addContextToolbar:s.addContextToolbar,addIcon:s.addIcon,addMenuButton:s.addMenuButton,addMenuItem:s.addMenuItem,addNestedMenuItem:s.addNestedMenuItem,addSidebar:s.addSidebar,addSplitButton:s.addSplitButton,addToggleButton:s.addToggleButton,addGroupToolbarButton:s.addGroupToolbarButton,addToggleMenuItem:s.addToggleMenuItem,getAll:s.getAll}},Qx=Et.each,Zx=Et.trim,eS="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),tS={ftp:21,http:80,https:443,mailto:25},nS=(rS.parseDataUri=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},rS.getDocumentBaseUrl=function(e){var t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname
return/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t},rS.prototype.setPath=function(e){var t=/^(.*?)\/?(\w+)?$/.exec(e)
this.path=t[0],this.directory=t[1],this.file=t[2],this.source="",this.getURI()},rS.prototype.toRelative=function(e){var t
if("./"===e)return e
var n=new rS(e,{base_uri:this})
if("mce_host"!==n.host&&this.host!==n.host&&n.host||this.port!==n.port||this.protocol!==n.protocol&&""!==n.protocol)return n.getURI()
var r=this.getURI(),o=n.getURI()
return r===o||"/"===r.charAt(r.length-1)&&r.substr(0,r.length-1)===o?r:(t=this.toRelPath(this.path,n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),t)},rS.prototype.toAbsolute=function(e,t){var n=new rS(e,{base_uri:this})
return n.getURI(t&&this.isSameOrigin(n))},rS.prototype.isSameOrigin=function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0
var t=tS[this.protocol]
if(t&&(this.port||t)==(e.port||t))return!0}return!1},rS.prototype.toRelPath=function(e,t){var n,r,o=0,i="",a=e.substring(0,e.lastIndexOf("/")).split("/"),u=t.split("/")
if(a.length>=u.length)for(n=0,r=a.length;n<r;n++)if(n>=u.length||a[n]!==u[n]){o=n+1
break}if(a.length<u.length)for(n=0,r=u.length;n<r;n++)if(n>=a.length||a[n]!==u[n]){o=n+1
break}if(1===o)return t
for(n=0,r=a.length-(o-1);n<r;n++)i+="../"
for(n=o-1,r=u.length;n<r;n++)i+=n!==o-1?"/"+u[n]:u[n]
return i},rS.prototype.toAbsPath=function(e,t){var n,r,o=0,i=[],a=/\/$/.test(t)?"/":"",u=e.split("/"),s=t.split("/")
for(Qx(u,(function(e){e&&i.push(e)})),u=i,n=s.length-1,i=[];0<=n;n--)0!==s[n].length&&"."!==s[n]&&(".."!==s[n]?0<o?o--:i.push(s[n]):o++)
return 0!==(r=(n=u.length-o)<=0?ee(i).join("/"):u.slice(0,n).join("/")+"/"+ee(i).join("/")).indexOf("/")&&(r="/"+r),a&&r.lastIndexOf("/")!==r.length-1&&(r+=a),r},rS.prototype.getURI=function(e){var t
return void 0===e&&(e=!1),this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source},rS)
function rS(e,t){e=Zx(e),this.settings=t||{}
var n,r,o,i,a=this.settings.base_uri,u=this;/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e)?u.source=e:(n=0===e.indexOf("//"),0!==e.indexOf("/")||n||(e=(a&&a.protocol||"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(r=this.settings.base_uri?this.settings.base_uri.path:new rS(document.location.href).directory,e=this.settings.base_uri&&""==this.settings.base_uri.protocol?"//mce_host"+u.toAbsPath(r,e):(o=/([^#?]*)([#?]?.*)/.exec(e),(a&&a.protocol||"http")+"://mce_host"+u.toAbsPath(r,o[1])+o[2])),e=e.replace(/@@/g,"(mce_at)"),i=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),Qx(eS,(function(e,t){var n=(n=i[t])&&n.replace(/\(mce_at\)/g,"@@")
u[e]=n})),a&&(u.protocol||(u.protocol=a.protocol),u.userInfo||(u.userInfo=a.userInfo),u.port||"mce_host"!==u.host||(u.port=a.port),u.host&&"mce_host"!==u.host||(u.host=a.host),u.source=""),n&&(u.protocol=""))}var oS=fu.DOM,iS=Et.extend,aS=Et.each,uS=Et.resolve,sS=Ct.ie,cS=(lS.prototype.render=function(){(function(e){var t=e.id
wu.setCode(Js(e))
var n,r,o,i,a,u=function(){sx.unbind(window,"ready",u),e.render()}
bi.Event.domLoaded?e.getElement()&&Ct.contentEditable&&(n=Tt(e.getElement()),r=Y(n.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{}),e.on("remove",(function(){W(n.dom.attributes,(function(e){return Qn(n,e.name),0})),Yn(n,r)})),e.ui.styleSheetLoader=(o=n,i=e,Vr.forElement(o,{contentCssCors:i.getParam("content_css_cors"),referrerPolicy:Gs(i)})),e.getParam("inline")?e.inline=!0:(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden"),(a=e.getElement().form||sx.getParent(t,"form"))&&(e.formElement=a,e.getParam("hidden_input")&&!Ln(e.getElement())&&(sx.insertAfter(sx.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=function(t){e.fire(t.type,t)},sx.bind(a,"submit reset",e.formEventDelegate),e.on("reset",(function(){e.resetContent()})),!e.getParam("submit_patch")||a.submit.nodeType||a.submit.length||a._mceOldSubmit||(a._mceOldSubmit=a.submit,a.submit=function(){return e.editorManager.triggerSave(),e.setDirty(!1),a._mceOldSubmit(a)})),e.windowManager=Nv(e),e.notificationManager=wv(e),"xml"===e.getParam("encoding")&&e.on("GetContent",(function(e){e.save&&(e.content=sx.encode(e.content))})),e.getParam("add_form_submit_trigger")&&e.on("submit",(function(){e.initialized&&e.save()})),e.getParam("add_unload_trigger")&&(e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),fx(e,e.suffix)):sx.bind(window,"ready",u)})(this)},lS.prototype.focus=function(e){var t
t=e,this.removed||(t?Fd:Md)(this)},lS.prototype.hasFocus=function(){return Id(this)},lS.prototype.execCallback=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r,o=this.settings[e]
if(o)return this.callbackLookup&&(r=this.callbackLookup[e])&&(o=r.func,r=r.scope),"string"==typeof o&&(r=(r=o.replace(/\.\w+$/,""))?uS(r):0,o=uS(o),this.callbackLookup=this.callbackLookup||{},this.callbackLookup[e]={func:o,scope:r}),o.apply(r||this,t)},lS.prototype.translate=function(e){return wu.translate(e)},lS.prototype.getParam=function(e,t,n){return function(e,t,n,r){var o,i,a,u=t in e.settings?e.settings[t]:n
return"hash"===r?(a={},"string"==typeof(i=u)?$(0<i.indexOf("=")?i.split(/[;,](?![^=;,]*(?:[;,]|$))/):i.split(","),(function(e){var t=e.split("=")
1<t.length?a[Et.trim(t[0])]=Et.trim(t[1]):a[Et.trim(t[0])]=Et.trim(t[0])})):a=i,a):"string"===r?dv(A,e,t).getOr(n):"number"===r?dv(M,e,t).getOr(n):"boolean"===r?dv(B,e,t).getOr(n):"object"===r?dv(R,e,t).getOr(n):"array"===r?dv(T,e,t).getOr(n):"string[]"===r?dv((o=A,function(e){return T(e)&&Z(e,o)}),e,t).getOr(n):"function"===r?dv(I,e,t).getOr(n):u}(this,e,t,n)},lS.prototype.hasPlugin=function(e,t){return!(!H(oc(this).split(/[ ,]/),e)||t&&void 0===xv.get(e))},lS.prototype.nodeChanged=function(e){this._nodeChangeDispatcher.nodeChanged(e)},lS.prototype.addCommand=function(e,t,n){this.editorCommands.addCommand(e,t,n)},lS.prototype.addQueryStateHandler=function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},lS.prototype.addQueryValueHandler=function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},lS.prototype.addShortcut=function(e,t,n,r){this.shortcuts.add(e,t,n,r)},lS.prototype.execCommand=function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},lS.prototype.queryCommandState=function(e){return this.editorCommands.queryCommandState(e)},lS.prototype.queryCommandValue=function(e){return this.editorCommands.queryCommandValue(e)},lS.prototype.queryCommandSupported=function(e){return this.editorCommands.queryCommandSupported(e)},lS.prototype.show=function(){this.hidden&&(this.hidden=!1,this.inline?this.getBody().contentEditable="true":(oS.show(this.getContainer()),oS.hide(this.id)),this.load(),this.fire("show"))},lS.prototype.hide=function(){var e=this,t=e.getDoc()
e.hidden||(sS&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(oS.hide(e.getContainer()),oS.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},lS.prototype.isHidden=function(){return!!this.hidden},lS.prototype.setProgressState=function(e,t){this.fire("ProgressState",{state:e,time:t})},lS.prototype.load=function(e){var t=this.getElement()
if(this.removed)return""
if(t){(e=e||{}).load=!0
var n=Ln(t)?t.value:t.innerHTML,r=this.setContent(n,e)
return e.element=t,e.no_events||this.fire("LoadContent",e),e.element=t=null,r}},lS.prototype.save=function(e){var t,n,r=this,o=r.getElement()
if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,Ln(o)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=oS.getParent(r.id,"form"))&&aS(n.elements,(function(e){if(e.name===r.id)return e.value=t,!1}))),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},lS.prototype.setContent=function(e,t){return Gh(this,e,t)},lS.prototype.getContent=function(e){return function(e,t){var n,r
return void 0===t&&(t={}),n=t,r=t.format?t.format:"html",Sh(e).editor.getContent(n,r)}(this,e)},lS.prototype.insertContent=function(e,t){t&&(e=iS({content:e},t)),this.execCommand("mceInsertContent",!1,e)},lS.prototype.resetContent=function(e){void 0===e?Gh(this,this.startContent,{format:"raw"}):Gh(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()},lS.prototype.isDirty=function(){return!this.isNotDirty},lS.prototype.setDirty=function(e){var t=!this.isNotDirty
this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},lS.prototype.getContainer=function(){return this.container||(this.container=oS.get(this.editorContainer||this.id+"_parent")),this.container},lS.prototype.getContentAreaContainer=function(){return this.contentAreaContainer},lS.prototype.getElement=function(){return this.targetElm||(this.targetElm=oS.get(this.id)),this.targetElm},lS.prototype.getWin=function(){var e
return this.contentWindow||(e=this.iframeElement)&&(this.contentWindow=e.contentWindow),this.contentWindow},lS.prototype.getDoc=function(){var e
return this.contentDocument||(e=this.getWin())&&(this.contentDocument=e.document),this.contentDocument},lS.prototype.getBody=function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},lS.prototype.convertURL=function(e,t,n){var r=this.settings
return r.urlconverter_callback?this.execCallback("urlconverter_callback",e,n,!0,t):!r.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:r.relative_urls?this.documentBaseURI.toRelative(e):e=this.documentBaseURI.toAbsolute(e,r.remove_script_host)},lS.prototype.addVisual=function(e){(function(e,t){return n=t,Nh(e).editor.addVisual(n)
var n})(this,e)},lS.prototype.remove=function(){(function(e){var t,n,r,o,i
e.removed||(t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement(),r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&Jh.remove(o.nextSibling),e.fire("remove"),e.editorManager.remove(e),!e.inline&&r&&(i=e,Jh.setStyle(i.id,"display",i.orgDisplay)),e.fire("detach"),Jh.remove(e.getContainer()),Qh(t),Qh(n),e.destroy())})(this)},lS.prototype.destroy=function(e){(function(e,t){var n,r,o,i=e.selection,a=e.dom
e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),Qh(i),Qh(a)),(r=(n=e).formElement)&&(r._mceOldSubmit&&(r.submit=r._mceOldSubmit,r._mceOldSubmit=null),Jh.unbind(r,"submit reset",n.formEventDelegate)),(o=e).contentAreaContainer=o.formElement=o.container=o.editorContainer=null,o.bodyElement=o.contentDocument=o.contentWindow=null,o.iframeElement=o.targetElm=null,o.selection&&(o.selection=o.selection.win=o.selection.dom=o.selection.dom.doc=null),e.destroyed=!0):e.remove())})(this,e)},lS.prototype.uploadImages=function(e){return this.editorUpload.uploadImages(e)},lS.prototype._scanForImages=function(){return this.editorUpload.scanForImages()},lS.prototype.addButton=function(){throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")},lS.prototype.addSidebar=function(){throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")},lS.prototype.addMenuItem=function(){throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")},lS.prototype.addContextToolbar=function(){throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")},lS)
function lS(e,t,n){var r=this
this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,iS(this,jx),this.settings=function(e,t,n,r,o){var i,a,u,s,c=(i=n,a=nv,u=e,s={id:t,theme:"silver",toolbar_mode:cv(o,"floating"),plugins:"",document_base_url:i,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,inline_styles:!0,convert_fonts_to_spans:!0,indent:!0,indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:u.convertURL,url_converter_scope:u},ke(ke({},s),a?av:{}))
return fv(rv||ov,rv,c,r,o)}(this,e,this.documentBaseUrl,n.defaultSettings,t),this.settings.suffix&&(n.suffix=this.settings.suffix),this.suffix=n.suffix,this.settings.base_url&&n._setBaseUrl(this.settings.base_url),this.baseUri=n.baseURI,this.settings.referrer_policy&&(gu.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),fu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),xu.languageLoad=this.settings.language_load,xu.baseURL=n.baseURL,this.id=e,this.setDirty(!1),this.documentBaseURI=new nS(this.settings.document_base_url,{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=!!this.settings.inline,this.shortcuts=new Yx(this),this.editorCommands=new xx(this),this.settings.cache_suffix&&(Ct.cacheSuffix=this.settings.cache_suffix.replace(/^[\?\&]+/,"")),this.ui={registry:Jx(),styleSheetLoader:void 0,show:u,hide:u,enable:u,disable:u,isDisabled:b}
var o=function(e){var t,n,r=vu("design"),o=vu({design:{activate:u,deactivate:u,editorReadOnly:!1},readonly:{activate:u,deactivate:u,editorReadOnly:!0}})
return(t=e).serializer?Tx(t):t.on("PreInit",(function(){Tx(t)})),(n=e).on("ShowCaret",(function(e){Rx(n)&&e.preventDefault()})),n.on("ObjectSelected",(function(e){Rx(n)&&e.preventDefault()})),{isReadOnly:function(){return Rx(e)},set:function(t){return function(e,t,n,r){if(r!==n.get()){if(!he(t,r))throw new Error("Editor mode '"+r+"' is invalid")
e.initialized?Vx(e,n,t,r):e.on("init",(function(){return Vx(e,n,t,r)}))}}(e,o.get(),r,t)},get:function(){return r.get()},register:function(e,t){o.set(function(e,t,n){var r
if(H(Hx,t))throw new Error("Cannot override default mode "+t)
return ke(ke({},e),((r={})[t]=ke(ke({},n),{deactivate:function(){try{n.deactivate()}catch(ZS){console.error("problem while deactivating editor mode "+t+":",ZS)}}}),r))}(o.get(),e,t))}}}(this)
this.mode=o,this.setMode=o.set,n.fire("SetupEditor",{editor:this}),this.execCallback("setup",this),this.$=ou.overrideDefaults((function(){return{context:r.inline?r.getBody():r.getDoc(),element:r.getBody()}}))}var fS,dS=fu.DOM,mS=Et.explode,pS=Et.each,gS=Et.extend,hS=0,vS=!1,yS=[],bS=[],CS=function(e){var t=e.type
pS(NS.get(),(function(n){switch(t){case"scroll":n.fire("ScrollWindow",e)
break
case"resize":n.fire("ResizeWindow",e)}}))},wS=function(e){e!==vS&&(e?ou(window).on("resize scroll",CS):ou(window).off("resize scroll",CS),vS=e)},xS=function(e){var t=bS
delete yS[e.id]
for(var n=0;n<yS.length;n++)if(yS[n]===e){yS.splice(n,1)
break}return bS=K(bS,(function(t){return e!==t})),NS.activeEditor===e&&(NS.activeEditor=0<bS.length?bS[0]:null),NS.focusedEditor===e&&(NS.focusedEditor=null),t.length!==bS.length},SS="CSS1Compat"!==document.compatMode,NS=ke(ke({},Ix),{baseURI:null,baseURL:null,defaultSettings:{},documentBaseURL:null,suffix:null,$:ou,majorVersion:"5",minorVersion:"7.1",releaseDate:"2021-03-17",editors:yS,i18n:wu,activeEditor:null,focusedEditor:null,settings:{},setup:function(){var e,t="",n=nS.getDocumentBaseUrl(document.location);/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/"))
var r,o=window.tinymce||window.tinyMCEPreInit
if(o)e=o.base||o.baseURL,t=o.suffix
else{for(var i,a=document.getElementsByTagName("script"),u=0;u<a.length;u++)if(""!==(i=a[u].src||"")){var s=i.substring(i.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)){-1!==s.indexOf(".min")&&(t=".min"),e=i.substring(0,i.lastIndexOf("/"))
break}}!e&&document.currentScript&&(-1!==(i=document.currentScript.src).indexOf(".min")&&(t=".min"),e=i.substring(0,i.lastIndexOf("/")))}this.baseURL=new nS(n).toAbsolute(e),this.documentBaseURL=n,this.baseURI=new nS(this.baseURL),this.suffix=t,(r=this).on("AddEditor",f(Bd,r)),r.on("RemoveEditor",f(Pd,r))},overrideDefaults:function(e){var t=e.base_url
t&&this._setBaseUrl(t)
var n=e.suffix
e.suffix&&(this.suffix=n)
var r=(this.defaultSettings=e).plugin_base_urls
void 0!==r&&se(r,(function(e,t){xu.PluginManager.urls[t]=e}))},init:function(e){var t,n=this,r=Et.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," "),o=function(e){var t=e.id
return t||(t=ge(e,"name").filter((function(e){return!dS.get(e)})).getOrThunk(dS.uniqueId),e.setAttribute("id",t)),t},i=function(e,t){return t.constructor===RegExp?t.test(e.className):dS.hasClass(e,t)},a=function(e){t=e},u=function(){var t,s=0,c=[],l=function(e,r,o){var i=new cS(e,r,n)
c.push(i),i.on("init",(function(){++s===t.length&&a(c)})),i.targetElm=i.targetElm||o,i.render()}
dS.unbind(window,"ready",u),function(t){var r=e.onpageload
r&&r.apply(n,[])}(),t=ou.unique(function(e){var t=[]
if(Ct.browser.isIE()&&Ct.browser.version.major<11)return Tv("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[]
if(SS)return Tv("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]
if(e.types)return pS(e.types,(function(e){t=t.concat(dS.select(e.selector))})),t
if(e.selector)return dS.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":var n=e.elements||""
0<n.length&&pS(mS(n),(function(e){var n=dS.get(e)
n?t.push(n):pS(document.forms,(function(n){pS(n.elements,(function(n){n.name===e&&(e="mce_editor_"+hS++,dS.setAttrib(n,"id",e),t.push(n))}))}))}))
break
case"textareas":case"specific_textareas":pS(dS.select("textarea"),(function(n){e.editor_deselector&&i(n,e.editor_deselector)||e.editor_selector&&!i(n,e.editor_selector)||t.push(n)}))}return t}(e)),e.types?pS(e.types,(function(n){Et.each(t,(function(t){return!dS.is(t,n.selector)||(l(o(t),gS({},e,n),t),!1)}))})):(Et.each(t,(function(e){var t;(t=n.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(xS(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)})),0===(t=Et.grep(t,(function(e){return!n.get(e.id)}))).length?a([]):pS(t,(function(t){var n
n=t,e.inline&&n.tagName.toLowerCase()in r?Tv("Could not initialize inline editor on invalid inline target element",t):l(o(t),e,t)})))}
return n.settings=e,dS.bind(window,"ready",u),new Or((function(e){t?e(t):a=function(t){e(t)}}))},get:function(e){return 0===arguments.length?bS.slice(0):A(e)?G(bS,(function(t){return t.id===e})).getOr(null):M(e)&&bS[e]?bS[e]:null},add:function(e){var t=this
return yS[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(yS[e.id]=e),yS.push(e),bS.push(e)),wS(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),fS||(fS=function(e){var n=t.fire("BeforeUnload")
if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",fS))),e},createEditor:function(e,t){return this.add(new cS(e,t,this))},remove:function(e){var t,n,r=this
if(e){if(!A(e))return n=e,O(r.get(n.id))?null:(xS(n)&&r.fire("RemoveEditor",{editor:n}),0===bS.length&&window.removeEventListener("beforeunload",fS),n.remove(),wS(0<bS.length),n)
pS(dS.select(e),(function(e){(n=r.get(e.id))&&r.remove(n)}))}else for(t=bS.length-1;0<=t;t--)r.remove(bS[t])},execCommand:function(e,t,n){var r=this.get(n)
switch(e){case"mceAddEditor":return this.get(n)||new cS(n,this.settings,this).render(),!0
case"mceRemoveEditor":return r&&r.remove(),!0
case"mceToggleEditor":return r?(r.isHidden()?r.show():r.hide(),!0):(this.execCommand("mceAddEditor",!1,n),!0)}return!!this.activeEditor&&this.activeEditor.execCommand(e,t,n)},triggerSave:function(){pS(bS,(function(e){e.save()}))},addI18n:function(e,t){wu.add(e,t)},translate:function(e){return wu.translate(e)},setActive:function(e){var t=this.activeEditor
this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl:function(e){this.baseURL=new nS(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new nS(this.baseURL)}})
NS.setup()
var ES,kS,_S,AS,RS=Math.min,TS=Math.max,OS=Math.round,BS=function(e,t,n){var r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,s=t.h,c=(n||"").split("")
return"b"===c[0]&&(o+=s),"r"===c[1]&&(r+=u),"c"===c[0]&&(o+=OS(s/2)),"c"===c[1]&&(r+=OS(u/2)),"b"===c[3]&&(o-=a),"r"===c[4]&&(r-=i),"c"===c[3]&&(o-=OS(a/2)),"c"===c[4]&&(r-=OS(i/2)),PS(r,o,i,a)},PS=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},DS={inflate:function(e,t,n){return PS(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:BS,findBestRelativePosition:function(e,t,n,r){for(var o,i=0;i<r.length;i++)if((o=BS(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i]
return null},intersect:function(e,t){var n=TS(e.x,t.x),r=TS(e.y,t.y),o=RS(e.x+e.w,t.x+t.w),i=RS(e.y+e.h,t.y+t.h)
return o-n<0||i-r<0?null:PS(n,r,o-n,i-r)},clamp:function(e,t,n){var r=e.x,o=e.y,i=e.x+e.w,a=e.y+e.h,u=t.x+t.w,s=t.y+t.h,c=TS(0,t.x-r),l=TS(0,t.y-o),f=TS(0,i-u),d=TS(0,a-s)
return r+=c,o+=l,n&&(i+=c,a+=l,r-=f,o-=d),PS(r,o,(i-=f)-r,(a-=d)-o)},create:PS,fromClientRect:function(e){return PS(e.left,e.top,e.width,e.height)}},LS=(ES={},kS={},{load:function(e,t){var n='Script at URL "'+t+'" failed to load',r='Script at URL "'+t+"\" did not call `tinymce.Resource.add('"+e+"', data)` within 1 second"
if(void 0!==ES[e])return ES[e]
var o=new Or((function(o,i){var a=function(e,t,n){void 0===n&&(n=1e3)
var r=!1,o=null,i=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
r||(r=!0,null!==o&&(clearTimeout(o),o=null),e.apply(null,t))}},a=i(e),u=i(t)
return{start:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
r||null!==o||(o=setTimeout((function(){return u.apply(null,e)}),n))},resolve:a,reject:u}}(o,i)
kS[e]=a.resolve,gu.ScriptLoader.loadScript(t,(function(){return a.start(r)}),(function(){return a.reject(n)}))}))
return ES[e]=o},add:function(e,t){void 0!==kS[e]&&(kS[e](t),delete kS[e]),ES[e]=Or.resolve(t)}}),IS=Et.each,MS=Et.extend,FS=function(){}
FS.extend=_S=function(e){var t=this.prototype,n=function(){var e,t,n
if(!AS&&(this.init&&this.init.apply(this,arguments),t=this.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(this,arguments)},r=function(){return this}
AS=!0
var o=new this
return AS=!1,e.Mixins&&(IS(e.Mixins,(function(t){for(var n in t)"init"!==n&&(e[n]=t[n])})),t.Mixins&&(e.Mixins=t.Mixins.concat(e.Mixins))),e.Methods&&IS(e.Methods.split(","),(function(t){e[t]=r})),e.Properties&&IS(e.Properties.split(","),(function(t){var n="_"+t
e[t]=function(e){return void 0!==e?(this[n]=e,this):this[n]}})),e.Statics&&IS(e.Statics,(function(e,t){n[t]=e})),e.Defaults&&t.Defaults&&(e.Defaults=MS({},t.Defaults,e.Defaults)),se(e,(function(e,n){var r,i
"function"==typeof e&&t[n]?o[n]=(r=n,i=e,function(){var e=this._super
this._super=t[r]
var n=i.apply(this,arguments)
return this._super=e,n}):o[n]=e})),n.prototype=o,(n.constructor=n).extend=_S,n}
var US=Math.min,zS=Math.max,jS=Math.round,HS={serialize:function(e){var t=JSON.stringify(e)
return A(t)?t.replace(/[\u0080-\uFFFF]/g,(function(e){var t=e.charCodeAt(0).toString(16)
return"\\u"+"0000".substring(t.length)+t})):t},parse:function(e){try{return JSON.parse(e)}catch(t){}}},VS={callbacks:{},count:0,send:function(e){var t=this,n=fu.DOM,r=void 0!==e.count?e.count:t.count,o="tinymce_jsonp_"+r
t.callbacks[r]=function(i){n.remove(o),delete t.callbacks[r],e.callback(i)},n.add(n.doc.body,"script",{id:o,src:e.url,type:"text/javascript"}),t.count++}},qS=ke(ke({},Ix),{send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||1e4<n++?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,1e4<n?"TIMED_OUT":"GENERAL",t,e),t=null):jr.setTimeout(r,10)}
if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",qS.fire("beforeInitialize",{settings:e}),(t=new XMLHttpRequest).overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&Et.each(e.requestheaders,(function(e){t.setRequestHeader(e.key,e.value)})),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=qS.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r()
jr.setTimeout(r,10)}}),$S=Et.extend,WS=(KS.sendRPC=function(e){return(new KS).send(e)},KS.prototype.send=function(e){var t=e.error,n=e.success,r=$S(this.settings,e)
r.success=function(e,o){void 0===(e=HS.parse(e))&&(e={error:"JSON Parse error."}),e.error?t.call(r.error_scope||r.scope,e.error,o):n.call(r.success_scope||r.scope,e.result)},r.error=function(e,n){t&&t.call(r.error_scope||r.scope,e,n)},r.data=HS.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params}),r.content_type="application/json",qS.send(r)},KS)
function KS(e){this.settings=$S({},e),this.count=0}try{var XS,YS="__storage_test__";(XS=window.localStorage).setItem(YS,YS),XS.removeItem(YS)}catch(ZS){XS=function(){return e={},t=[],n={getItem:function(t){return e[t]||null},setItem:function(n,r){t.push(n),e[n]=String(r)},key:function(e){return t[e]},removeItem:function(n){t=t.filter((function(e){return e===n})),delete e[n]},clear:function(){t=[],e={}},length:0},Object.defineProperty(n,"length",{get:function(){return t.length},configurable:!1,enumerable:!1}),n
var e,t,n}()}var GS,JS={geom:{Rect:DS},util:{Promise:Or,Delay:jr,Tools:Et,VK:Af,URI:nS,Class:FS,EventDispatcher:Bx,Observable:Ix,I18n:wu,XHR:qS,JSON:HS,JSONRequest:WS,JSONP:VS,LocalStorage:XS,Color:function(e){var t={},n=0,r=0,o=0,i=function(e){var i
return"object"==typeof e?"r"in e?(n=e.r,r=e.g,o=e.b):"v"in e&&function(e,t,i){if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,i=parseInt(i,10)/100,t=zS(0,US(t,1)),i=zS(0,US(i,1)),0!==t){var a=e/60,u=i*t,s=u*(1-Math.abs(a%2-1)),c=i-u
switch(Math.floor(a)){case 0:n=u,r=s,o=0
break
case 1:n=s,r=u,o=0
break
case 2:n=0,r=u,o=s
break
case 3:n=0,r=s,o=u
break
case 4:n=s,r=0,o=u
break
case 5:n=u,r=0,o=s
break
default:n=r=o=0}n=jS(255*(n+c)),r=jS(255*(r+c)),o=jS(255*(o+c))}else n=r=o=jS(255*i)}(e.h,e.s,e.v):(i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(n=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10)):(i=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16)):(i=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(n=parseInt(i[1]+i[1],16),r=parseInt(i[2]+i[2],16),o=parseInt(i[3]+i[3],16)),n=n<0?0:255<n?255:n,r=r<0?0:255<r?255:r,o=o<0?0:255<o?255:o,t}
return e&&i(e),t.toRgb=function(){return{r:n,g:r,b:o}},t.toHsv=function(){return e=n,t=r,i=o,u=0,(s=US(e/=255,US(t/=255,i/=255)))===(c=zS(e,zS(t,i)))?{h:0,s:0,v:100*(u=s)}:(a=(c-s)/c,{h:jS(60*((e===s?3:i===s?1:5)-(e===s?t-i:i===s?e-t:i-e)/((u=c)-s))),s:jS(100*a),v:jS(100*u)})
var e,t,i,a,u,s,c},t.toHex=function(){var e=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e}
return"#"+e(n)+e(r)+e(o)},t.parse=i,t},ImageUploader:function(e){var t=Pv(),n=Fv(e,t)
return{upload:function(t,r){return void 0===r&&(r=!0),n.upload(t,r?Mv(e):void 0)}}}},dom:{EventUtils:bi,Sizzle:ba,DomQuery:ou,TreeWalker:qr,TextSeeker:Vu,DOMUtils:fu,ScriptLoader:gu,RangeUtils:Hf,Serializer:Yh,StyleSheetLoader:Hr,ControlSelection:Tf,BookmarkManager:Nf,Selection:Th,Event:bi.Event},html:{Styles:fi,Entities:Zo,Node:Kd,Schema:ci,SaxParser:Zd,DomParser:Wh,Writer:am,Serializer:um},Env:Ct,AddOnManager:xu,Annotator:Sf,Formatter:$v,UndoManager:Wv,EditorCommands:xx,WindowManager:Nv,NotificationManager:wv,EditorObservable:jx,Shortcuts:Yx,Editor:cS,FocusManager:Ad,EditorManager:NS,DOM:fu.DOM,ScriptLoader:gu.ScriptLoader,PluginManager:xv,ThemeManager:Sv,IconManager:mv,Resource:LS,trim:Et.trim,isArray:Et.isArray,is:Et.is,toArray:Et.toArray,makeMap:Et.makeMap,each:Et.each,map:Et.map,grep:Et.grep,inArray:Et.inArray,extend:Et.extend,create:Et.create,walk:Et.walk,createNS:Et.createNS,resolve:Et.resolve,explode:Et.explode,_addCacheSuffix:Et._addCacheSuffix,isOpera:Ct.opera,isWebKit:Ct.webkit,isIE:Ct.ie,isGecko:Ct.gecko,isMac:Ct.mac},QS=Et.extend(NS,JS)
GS=QS,window.tinymce=GS,window.tinyMCE=GS,function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(QS)}()

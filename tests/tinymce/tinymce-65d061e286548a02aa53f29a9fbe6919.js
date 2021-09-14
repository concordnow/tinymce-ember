(function(){"use strict"
var e=function(e){if(null===e)return"null"
if(void 0===e)return"undefined"
var t=typeof e
return"object"===t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t},t=function(e){return{eq:e}},n=t((function(e,t){return e===t})),r=function(e){return t((function(t,n){if(t.length!==n.length)return!1
for(var r=t.length,o=0;o<r;o++)if(!e.eq(t[o],n[o]))return!1
return!0}))},o=function(e,n){return function(e,n){return t((function(t,r){return e.eq(n(t),n(r))}))}(r(e),(function(e){return function(e,t){return Array.prototype.slice.call(e).sort(t)}(e,n)}))},i=function(e){return t((function(t,r){var i=Object.keys(t),a=Object.keys(r)
if(!o(n).eq(i,a))return!1
for(var u=i.length,c=0;c<u;c++){var s=i[c]
if(!e.eq(t[s],r[s]))return!1}return!0}))},a=t((function(t,n){if(t===n)return!0
var o=e(t)
return o===e(n)&&(function(e){return-1!==["undefined","boolean","number","string","function","xml","null"].indexOf(e)}(o)?t===n:"array"===o?r(a).eq(t,n):"object"===o&&i(a).eq(t,n))})),u=function(){},c=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return e(t.apply(null,n))}},s=function(e){return function(){return e}},f=function(e){return e}
function l(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var o=t.concat(n)
return e.apply(null,o)}}var d=function(e){return function(t){return!e(t)}},m=function(e){return function(){throw new Error(e)}},p=function(e){return e()},g=function(e){e()},h=s(!1),v=s(!0),y=function(){return b},b=function(){var e=function(e){return e.isNone()},t=function(e){return e()},n=function(e){return e}
return{fold:function(e,t){return e()},is:h,isSome:h,isNone:v,getOr:n,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:n,orThunk:t,map:y,each:u,bind:y,exists:h,forall:v,filter:y,equals:e,equals_:e,toArray:function(){return[]},toString:s("none()")}}(),C=function(e){var t=s(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:v,isNone:h,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return C(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:b},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(h,(function(t){return n(e,t)}))}}
return o},w={some:C,none:y,from:function(e){return null==e?b:C(e)}},x=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},S=function(e){return function(t){return typeof t===e}},N=function(e){return function(t){return e===t}},E=x("string"),k=x("object"),_=x("array"),A=N(null),R=S("boolean"),T=N(void 0),D=function(e){return null==e},O=function(e){return!D(e)},B=S("function"),P=S("number"),L=Array.prototype.slice,I=Array.prototype.indexOf,M=Array.prototype.push,F=function(e,t){return I.call(e,t)},U=function(e,t){return F(e,t)>-1},z=function(e,t){for(var n=0,r=e.length;n<r;n++){if(t(e[n],n))return!0}return!1},j=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},H=function(e,t){for(var n=0,r=e.length;n<r;n++){t(e[n],n)}},V=function(e,t){for(var n=e.length-1;n>=0;n--){t(e[n],n)}},q=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n},$=function(e,t,n){return V(e,(function(e){n=t(n,e)})),n},W=function(e,t,n){return H(e,(function(e){n=t(n,e)})),n},K=function(e,t){return function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return w.some(i)
if(n(i,r))break}return w.none()}(e,t,h)},X=function(e,t){for(var n=0,r=e.length;n<r;n++){if(t(e[n],n))return w.some(n)}return w.none()},Y=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!_(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
M.apply(t,e[n])}return t}(j(e,t))},G=function(e,t){for(var n=0,r=e.length;n<r;++n){if(!0!==t(e[n],n))return!1}return!0},J=function(e){var t=L.call(e,0)
return t.reverse(),t},Q=function(e,t){return q(e,(function(e){return!U(t,e)}))},Z=function(e,t){return t>=0&&t<e.length?w.some(e[t]):w.none()},ee=function(e){return Z(e,0)},te=function(e){return Z(e,e.length-1)},ne=B(Array.from)?Array.from:function(e){return L.call(e)},re=Object.keys,oe=Object.hasOwnProperty,ie=function(e,t){for(var n=re(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}},ae=function(e,t){return ue(e,(function(e,n){return{k:n,v:t(e,n)}}))},ue=function(e,t){var n={}
return ie(e,(function(e,r){var o=t(e,r)
n[o.k]=o.v})),n},ce=function(e){return function(t,n){e[n]=t}},se=function(e,t,n,r){return ie(e,(function(e,o){(t(e,o)?n:r)(e,o)})),{}},fe=function(e,t){var n={},r={}
return se(e,t,ce(n),ce(r)),{t:n,f:r}},le=function(e,t){var n={}
return se(e,t,ce(n),u),n},de=function(e){return function(e,t){var n=[]
return ie(e,(function(e,r){n.push(t(e,r))})),n}(e,(function(e){return e}))},me=function(e,t){return pe(e,t)?w.from(e[t]):w.none()},pe=function(e,t){return oe.call(e,t)},ge=function(e,t){return pe(e,t)&&void 0!==e[t]&&null!==e[t]},he=Array.isArray,ve=function(e,t,n){var r,o
if(!e)return!1
if(n=n||e,void 0!==e.length){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return!1}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return!1
return!0},ye=function(e,t){var n=[]
return ve(e,(function(r,o){n.push(t(r,o,e))})),n},be=function(e,t){var n=[]
return ve(e,(function(r,o){t&&!t(r,o,e)||n.push(r)})),n},Ce=function(e,t){if(e)for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},we=function(e,t,n,r){for(var o=T(n)?e[0]:n,i=0;i<e.length;i++)o=t.call(r,o,e[i],i)
return o},xe=function(e,t,n){var r,o
for(r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r
return-1},Se=function(e){return e[e.length-1]},Ne=function(){return(Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function Ee(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),o=0
for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a]
return r}var ke=function(){return _e(0,0)},_e=function(e,t){return{major:e,minor:t}},Ae={nu:_e,detect:function(e,t){var n=String(t).toLowerCase()
return 0===e.length?ke():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,t)
if(!n)return{major:0,minor:0}
var r=function(e){return Number(t.replace(n,"$"+e))}
return _e(r(1),r(2))}(e,n)},unknown:ke},Re=function(e,t){var n=String(t).toLowerCase()
return K(e,(function(e){return e.search(n)}))},Te=function(e,t){return Re(e,t).map((function(e){var n=Ae.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))},De=function(e,t){return Re(e,t).map((function(e){var n=Ae.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))},Oe=function(e,t){return-1!==e.indexOf(t)},Be=function(e,t){return function(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t}(e,t,0)},Pe=function(e){return function(t){return t.replace(e,"")}},Le=Pe(/^\s+|\s+$/g),Ie=Pe(/^\s+/g),Me=Pe(/\s+$/g),Fe=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Ue=function(e){return function(t){return Oe(t,e)}},ze=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Oe(e,"edge/")&&Oe(e,"chrome")&&Oe(e,"safari")&&Oe(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Fe],search:function(e){return Oe(e,"chrome")&&!Oe(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Oe(e,"msie")||Oe(e,"trident")}},{name:"Opera",versionRegexes:[Fe,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Ue("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Ue("firefox")},{name:"Safari",versionRegexes:[Fe,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Oe(e,"safari")||Oe(e,"mobile/"))&&Oe(e,"applewebkit")}}],je=[{name:"Windows",search:Ue("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Oe(e,"iphone")||Oe(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Ue("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Ue("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Ue("linux"),versionRegexes:[]},{name:"Solaris",search:Ue("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Ue("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:Ue("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],He={browsers:s(ze),oses:s(je)},Ve="Edge",qe="Chrome",$e="Opera",We="Firefox",Ke="Safari",Xe=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isEdge:r(Ve),isChrome:r(qe),isIE:r("IE"),isOpera:r($e),isFirefox:r(We),isSafari:r(Ke)}},Ye={unknown:function(){return Xe({current:void 0,version:Ae.unknown()})},nu:Xe,edge:s(Ve),chrome:s(qe),ie:s("IE"),opera:s($e),firefox:s(We),safari:s(Ke)},Ge="Windows",Je="Android",Qe="Linux",Ze="Solaris",et="FreeBSD",tt="ChromeOS",nt=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isWindows:r(Ge),isiOS:r("iOS"),isAndroid:r(Je),isOSX:r("OSX"),isLinux:r(Qe),isSolaris:r(Ze),isFreeBSD:r(et),isChromeOS:r(tt)}},rt={unknown:function(){return nt({current:void 0,version:Ae.unknown()})},nu:nt,windows:s(Ge),ios:s("iOS"),android:s(Je),linux:s(Qe),osx:s("OSX"),solaris:s(Ze),freebsd:s(et),chromeos:s(tt)},ot=function(e,t){var n=He.browsers(),r=He.oses(),o=Te(n,e).fold(Ye.unknown,Ye.nu),i=De(r,e).fold(rt.unknown,rt.nu),a=function(e,t,n,r){var o=e.isiOS()&&!0===/ipad/i.test(n),i=e.isiOS()&&!o,a=e.isiOS()||e.isAndroid(),u=a||r("(pointer:coarse)"),c=o||!i&&a&&r("(min-device-width:768px)"),f=i||a&&!c,l=t.isSafari()&&e.isiOS()&&!1===/safari/i.test(n),d=!f&&!c&&!l
return{isiPad:s(o),isiPhone:s(i),isTablet:s(c),isPhone:s(f),isTouch:s(u),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:s(l),isDesktop:s(d)}}(i,o,e,t)
return{browser:o,os:i,deviceType:a}},it=function(e){return window.matchMedia(e).matches},at=function(e){var t,n=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return n||(n=!0,t=e.apply(null,r)),t}}((function(){return ot(navigator.userAgent,it)})),ut=function(){return at()},ct=navigator.userAgent,st=ut(),ft=st.browser,lt=st.os,dt=st.deviceType,mt=/WebKit/.test(ct)&&!ft.isEdge(),pt="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,gt=-1!==ct.indexOf("Windows Phone"),ht={opera:ft.isOpera(),webkit:mt,ie:!(!ft.isIE()&&!ft.isEdge())&&ft.version.major,gecko:ft.isFirefox(),mac:lt.isOSX()||lt.isiOS(),iOS:dt.isiPad()||dt.isiPhone(),android:lt.isAndroid(),contentEditable:!0,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:!0,range:window.getSelection&&"Range"in window,documentMode:ft.isIE()?document.documentMode||7:10,fileApi:pt,ceFalse:!0,cacheSuffix:null,container:null,experimentalShadowDom:!1,canHaveCSP:!ft.isIE(),desktop:dt.isDesktop(),windowsPhone:gt,browser:{current:ft.current,version:ft.version,isChrome:ft.isChrome,isEdge:ft.isEdge,isFirefox:ft.isFirefox,isIE:ft.isIE,isOpera:ft.isOpera,isSafari:ft.isSafari},os:{current:lt.current,version:lt.version,isAndroid:lt.isAndroid,isChromeOS:lt.isChromeOS,isFreeBSD:lt.isFreeBSD,isiOS:lt.isiOS,isLinux:lt.isLinux,isOSX:lt.isOSX,isSolaris:lt.isSolaris,isWindows:lt.isWindows},deviceType:{isDesktop:dt.isDesktop,isiPad:dt.isiPad,isiPhone:dt.isiPhone,isPhone:dt.isPhone,isTablet:dt.isTablet,isTouch:dt.isTouch,isWebView:dt.isWebView}},vt=/^\s*|\s*$/g,yt=function(e){return null==e?"":(""+e).replace(vt,"")},bt=function(e,t){return t?!("array"!==t||!he(e))||typeof e===t:void 0!==e},Ct=function(e,t,n,r){r=r||this,e&&(n&&(e=e[n]),ve(e,(function(e,o){if(!1===t.call(r,e,o,n))return!1
Ct(e,t,n,r)})))},wt={trim:yt,isArray:he,is:bt,toArray:function(e){if(he(e))return e
for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n]
return t},makeMap:function(e,t,n){var r
for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={}
return n},each:ve,map:ye,grep:be,inArray:Ce,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=0;r<t.length;r++){var o=t[r]
for(var i in o)if(o.hasOwnProperty(i)){var a=o[i]
void 0!==a&&(e[i]=a)}}return e},create:function(e,t,n){var r,o,i,a=this,c=0,s=(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],f=a.createNS(e[3].replace(/\.\w+$/,""),n)
if(!f[s]){if("static"===e[2])return f[s]=t,void(this.onCreate&&this.onCreate(e[2],e[3],f[s]))
t[s]||(t[s]=u,c=1),f[s]=t[s],a.extend(f[s].prototype,t),e[5]&&(r=a.resolve(e[5]).prototype,o=e[5].match(/\.(\w+)$/i)[1],i=f[s],f[s]=c?function(){return r[o].apply(this,arguments)}:function(){return this.parent=r[o],i.apply(this,arguments)},f[s].prototype[s]=f[s],a.each(r,(function(e,t){f[s].prototype[t]=r[t]})),a.each(t,(function(e,t){r[t]?f[s].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==s&&(f[s].prototype[t]=e)}))),a.each(t.static,(function(e,t){f[s][t]=e}))}},walk:Ct,createNS:function(e,t){var n,r
for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r]
return t},resolve:function(e,t){var n,r
for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||bt(e,"array")?e:ye(e.split(t||","),yt)},_addCacheSuffix:function(e){var t=ht.cacheSuffix
return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},xt=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},St={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return xt(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e)
return xt(n)},fromText:function(e,t){var n=(t||document).createTextNode(e)
return xt(n)},fromDom:xt,fromPoint:function(e,t,n){return w.from(e.dom.elementFromPoint(t,n)).map(xt)}},Nt=function(e,t){var n=[],r=function(e){return n.push(e),t(e)},o=t(e)
do{o=o.bind(r)}while(o.isSome())
return n},Et=function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},kt=function(e){return 1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount},_t=function(e,t){return e.dom===t.dom},At=function(e,t){return n=e.dom,r=t.dom,function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)}(n,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var n,r},Rt=function(e,t){return ut().browser.isIE()?At(e,t):function(e,t){var n=e.dom,r=t.dom
return n!==r&&n.contains(r)}(e,t)},Tt=("undefined"!=typeof window?window:Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Dt=function(e){return e.dom.nodeType},Ot=function(e){return function(t){return Dt(t)===e}},Bt=Ot(1),Pt=Ot(3),Lt=Ot(9),It=Ot(11),Mt=function(e){return St.fromDom(e.dom.ownerDocument)},Ft=function(e){return Lt(e)?e:Mt(e)},Ut=function(e){return St.fromDom(Ft(e).dom.defaultView)},zt=function(e){return w.from(e.dom.parentNode).map(St.fromDom)},jt=function(e){return w.from(e.dom.previousSibling).map(St.fromDom)},Ht=function(e){return w.from(e.dom.nextSibling).map(St.fromDom)},Vt=function(e){return J(Nt(e,jt))},qt=function(e){return Nt(e,Ht)},$t=function(e){return j(e.dom.childNodes,St.fromDom)},Wt=function(e,t){var n=e.dom.childNodes
return w.from(n[t]).map(St.fromDom)},Kt=function(e){return Wt(e,0)},Xt=function(e){return Wt(e,e.dom.childNodes.length-1)},Yt=function(e){return It(e)&&O(e.dom.host)},Gt=B(Element.prototype.attachShadow)&&B(Node.prototype.getRootNode),Jt=s(Gt),Qt=Gt?function(e){return St.fromDom(e.dom.getRootNode())}:Ft,Zt=function(e){return Yt(e)?e:function(e){var t=e.dom.head
if(null==t)throw new Error("Head is not available yet")
return St.fromDom(t)}(Ft(e))},en=function(e){return St.fromDom(e.dom.host)},tn=function(e){return O(e.dom.shadowRoot)},nn=function(e,t){zt(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},rn=function(e,t){Ht(e).fold((function(){zt(e).each((function(e){an(e,t)}))}),(function(e){nn(e,t)}))},on=function(e,t){Kt(e).fold((function(){an(e,t)}),(function(n){e.dom.insertBefore(t.dom,n.dom)}))},an=function(e,t){e.dom.appendChild(t.dom)},un=function(e,t){H(t,(function(t){an(e,t)}))},cn=function(e){e.dom.textContent="",H($t(e),(function(e){sn(e)}))},sn=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},fn=function(e){var t,n=$t(e)
n.length>0&&(t=e,H(n,(function(e){nn(t,e)}))),sn(e)},ln=function(e){var t=Pt(e)?e.dom.parentNode:e.dom
if(null==t||null===t.ownerDocument)return!1
var n,r,o=t.ownerDocument
return function(e){var t=Qt(e)
return Yt(t)?w.some(t):w.none()}(St.fromDom(t)).fold((function(){return o.body.contains(t)}),(n=ln,r=en,function(e){return n(r(e))}))},dn=function(e,t){return{left:e,top:t,translate:function(n,r){return dn(e+n,t+r)}}},mn=dn,pn=function(e,t){return void 0!==e?e:void 0!==t?t:0},gn=function(e){var t=e.dom,n=t.ownerDocument.body
return n===t?mn(n.offsetLeft,n.offsetTop):ln(e)?function(e){var t=e.getBoundingClientRect()
return mn(t.left,t.top)}(t):mn(0,0)},hn=function(e){var t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop
return mn(n,r)},vn=function(e,t,n){var r=(void 0!==n?n.dom:document).defaultView
r&&r.scrollTo(e,t)},yn=function(e,t){ut().browser.isSafari()&&B(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)},bn=function(e,t,n,r){return{x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}},Cn=function(e){var t=void 0===e?window:e,n=t.document,r=hn(St.fromDom(n))
return function(e){var t=void 0===e?window:e
return w.from(t.visualViewport)}(t).fold((function(){var e=t.document.documentElement,n=e.clientWidth,o=e.clientHeight
return bn(r.left,r.top,n,o)}),(function(e){return bn(Math.max(e.pageLeft,r.left),Math.max(e.pageTop,r.top),e.width,e.height)}))},wn=function(e){return function(t){return!!t&&t.nodeType===e}},xn=function(e){return!!e&&!Object.getPrototypeOf(e)},Sn=wn(1),Nn=function(e){var t=e.map((function(e){return e.toLowerCase()}))
return function(e){if(e&&e.nodeName){var n=e.nodeName.toLowerCase()
return U(t,n)}return!1}},En=function(e,t){var n=t.toLowerCase().split(" ")
return function(t){var r
if(Sn(t))for(r=0;r<n.length;r++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
if((o?o.getPropertyValue(e):null)===n[r])return!0}return!1}},kn=function(e){return function(t){return Sn(t)&&t.hasAttribute(e)}},_n=function(e){return Sn(e)&&e.hasAttribute("data-mce-bogus")},An=function(e){return Sn(e)&&"TABLE"===e.tagName},Rn=function(e){return function(t){if(Sn(t)){if(t.contentEditable===e)return!0
if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}},Tn=Nn(["textarea","input"]),Dn=wn(3),On=wn(8),Bn=wn(9),Pn=wn(11),Ln=Nn(["br"]),In=Nn(["img"]),Mn=Rn("true"),Fn=Rn("false"),Un=Nn(["td","th"]),zn=Nn(["video","audio","object","embed"]),jn=function(e){return void 0!==e.style&&B(e.style.getPropertyValue)},Hn=function(e,t,n){if(!(E(n)||R(n)||P(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")},Vn=function(e,t,n){Hn(e.dom,t,n)},qn=function(e,t){var n=e.dom
ie(t,(function(e,t){Hn(n,t,e)}))},$n=function(e,t){var n=e.dom.getAttribute(t)
return null===n?void 0:n},Wn=function(e,t){return w.from($n(e,t))},Kn=function(e,t){e.dom.removeAttribute(t)},Xn=function(e,t){var n=e.dom
ie(t,(function(e,t){(function(e,t,n){if(!E(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
jn(e)&&e.style.setProperty(t,n)})(n,t,e)}))},Yn=function(e,t){var n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t)
return""!==r||ln(e)?r:Gn(n,t)},Gn=function(e,t){return jn(e)?e.style.getPropertyValue(t):""},Jn=function(e,t){var n=e.dom,r=Gn(n,t)
return w.from(r).filter((function(e){return e.length>0}))},Qn=function(e){var t={},n=e.dom
if(jn(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r)
t[o]=n.style[o]}return t},Zn=ut().browser,er=function(e){return K(e,Bt)},tr=function(e,t){return e.children&&U(e.children,t)},nr=function(e,t,n){var r,o,i=0,a=0,u=e.ownerDocument
if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===Yn(St.fromDom(e),"position"))return{x:i=(o=t.getBoundingClientRect()).left+(u.documentElement.scrollLeft||e.scrollLeft)-u.documentElement.clientLeft,y:a=o.top+(u.documentElement.scrollTop||e.scrollTop)-u.documentElement.clientTop}
for(r=t;r&&r!==n&&r.nodeType&&!tr(r,n);)i+=r.offsetLeft||0,a+=r.offsetTop||0,r=r.offsetParent
for(r=t.parentNode;r&&r!==n&&r.nodeType&&!tr(r,n);)i-=r.scrollLeft||0,a-=r.scrollTop||0,r=r.parentNode
a+=function(e){return Zn.isFirefox()&&"table"===Tt(e)?er($t(e)).filter((function(e){return"caption"===Tt(e)})).bind((function(e){return er(qt(e)).map((function(t){var n=t.dom.offsetTop,r=e.dom.offsetTop,o=e.dom.offsetHeight
return n<=r?-o:0}))})).getOr(0):0}(St.fromDom(t))}return{x:i,y:a}},rr={},or={exports:rr};(function(e,t,n,r){(function(r){if("object"==typeof t&&void 0!==n)n.exports=r()
else if("function"==typeof e&&e.amd)e([],r)
else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=r()}})((function(){return function e(t,n,o){function i(u,c){if(!n[u]){if(!t[u]){var s="function"==typeof r&&r
if(!c&&s)return s(u,!0)
if(a)return a(u,!0)
var f=new Error("Cannot find module '"+u+"'")
throw f.code="MODULE_NOT_FOUND",f}var l=n[u]={exports:{}}
t[u][0].call(l.exports,(function(e){return i(t[u][1][e]||e)}),l,l.exports,e,t,n,o)}return n[u].exports}for(var a="function"==typeof r&&r,u=0;u<o.length;u++)i(o[u])
return i}({1:[function(e,t,n){var r,o,i=t.exports={}
function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0)
if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0)
try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}(function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(e){o=u}})()
var s,f=[],l=!1,d=-1
function m(){l&&s&&(l=!1,s.length?f=s.concat(f):d=-1,f.length&&p())}function p(){if(!l){var e=c(m)
l=!0
for(var t=f.length;t;){for(s=f,f=[];++d<t;)s&&s[d].run()
d=-1,t=f.length}s=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e)
if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e)
try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
f.push(new g(e,t)),1!==f.length||l||c(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(e,t,n){(function(e){(function(n){var r=setTimeout
function o(){}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(o){return void c(t.promise,o)}u(t.promise,r)}else(1===e._state?u:c)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if(t instanceof i)return e._state=3,e._value=t,void s(e)
if("function"==typeof n)return void l((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,s(e)}catch(a){c(e,a)}var r,o}function c(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t])
e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1
try{e((function(e){n||(n=!0,u(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(r){if(n)return
n=!0,c(t,r)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o)
return a(this,new f(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e)
return new i((function(e,n){if(0===t.length)return e([])
var r=t.length
function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then
if("function"==typeof u)return void u.call(a,(function(e){o(i,e)}),n)}t[i]=a,0==--r&&e(t)}catch(c){n(c)}}for(var i=0;i<t.length;i++)o(i,t[i])}))},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},i._immediateFn="function"==typeof e?function(t){e(t)}:function(e){r(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)})(this)}).call(this,e("timers").setImmediate)},{timers:3}],3:[function(e,t,n){(function(t,r){var o=e("process/browser.js").nextTick,i=Function.prototype.apply,a=Array.prototype.slice,u={},c=0
function s(e,t){this._id=e,this._clearFn=t}n.setTimeout=function(){return new s(i.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new s(i.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n.setImmediate="function"==typeof t?t:function(e){var t=c++,r=!(arguments.length<2)&&a.call(arguments,1)
return u[t]=!0,o((function(){u[t]&&(r?e.apply(null,r):e.call(null),n.clearImmediate(t))})),t},n.clearImmediate="function"==typeof r?r:function(e){delete u[e]}}).call(this,e("timers").setImmediate,e("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(e,t,n){var r=e("promise-polyfill"),o="undefined"!=typeof window?window:Function("return this;")()
t.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)}))})(void 0,rr,or,void 0)
var ir=or.exports.boltExport,ar=function(e){var t=w.none(),n=[],r=function(e){o()?a(e):n.push(e)},o=function(){return t.isSome()},i=function(e){H(e,a)},a=function(e){t.each((function(t){setTimeout((function(){e(t)}),0)}))}
return e((function(e){o()||(t=w.some(e),i(n),n=[])})),{get:r,map:function(e){return ar((function(t){r((function(n){t(e(n))}))}))},isReady:o}},ur={nu:ar,pure:function(e){return ar((function(t){t(e)}))}},cr=function(e){setTimeout((function(){throw e}),0)},sr=function(e){var t=function(t){e().then(t,cr)}
return{map:function(t){return sr((function(){return e().then(t)}))},bind:function(t){return sr((function(){return e().then((function(e){return t(e).toPromise()}))}))},anonBind:function(t){return sr((function(){return e().then((function(){return t.toPromise()}))}))},toLazy:function(){return ur.nu(t)},toCached:function(){var t=null
return sr((function(){return null===t&&(t=e()),t}))},toPromise:e,get:t}},fr=function(e){return sr((function(){return new ir(e)}))},lr=function(e,t){return t((function(t){var n=[],r=0
0===e.length?t([]):H(e,(function(o,i){o.get(function(o){return function(i){n[o]=i,++r>=e.length&&t(n)}}(i))}))}))},dr=function(e){return{is:function(t){return e===t},isValue:v,isError:h,getOr:s(e),getOrThunk:s(e),getOrDie:s(e),or:function(t){return dr(e)},orThunk:function(t){return dr(e)},fold:function(t,n){return n(e)},map:function(t){return dr(t(e))},mapError:function(t){return dr(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOptional:function(){return w.some(e)}}},mr=function(e){return{is:h,isValue:h,isError:v,getOr:f,getOrThunk:function(e){return e()},getOrDie:function(){return m(String(e))()},or:function(e){return e},orThunk:function(e){return e()},fold:function(t,n){return t(e)},map:function(t){return mr(e)},mapError:function(t){return mr(t(e))},each:u,bind:function(t){return mr(e)},exists:h,forall:v,toOptional:w.none}},pr={value:dr,error:mr,fromOption:function(e,t){return e.fold((function(){return mr(t)}),dr)}},gr=function(e){if(!_(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
return H(e,(function(r,o){var i=re(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],u=r[a]
if(void 0!==n[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!_(u))throw new Error("case arguments must be an array")
t.push(a),n[a]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var i=n.length
if(i!==u.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+u.length+" ("+u+"), got "+i)
var c=function(e){var r=re(e)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
if(!G(t,(function(e){return U(r,e)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return e[a].apply(null,n)}
return{fold:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(t.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+t.length)
var i=t[o]
return i.apply(null,n)},match:c,log:function(e){console.log(e,{constructors:t,constructor:a,params:n})}}}})),n},hr=(gr([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(e){return e.fold(f,f)})
function vr(e,t,n,r,o){return e(n,r)?w.some(n):B(o)&&o(n)?w.none():t(n,r,o)}var yr,br,Cr,wr,xr,Sr,Nr,Er,kr,_r,Ar,Rr,Tr,Dr,Or,Br,Pr,Lr,Ir,Mr,Fr=function(e,t,n){for(var r=e.dom,o=B(n)?n:h;r.parentNode;){r=r.parentNode
var i=St.fromDom(r)
if(t(i))return w.some(i)
if(o(i))break}return w.none()},Ur=function(e,t,n){return vr((function(e,t){return t(e)}),Fr,e,t,n)},zr=function(e,t){return K(e.dom.childNodes,(function(e){return t(St.fromDom(e))})).map(St.fromDom)},jr=function(e,t,n){return Fr(e,(function(e){return Et(e,t)}),n)},Hr=function(e,t){return function(e,t){var n=void 0===t?document:t.dom
return kt(n)?w.none():w.from(n.querySelector(e)).map(St.fromDom)}(t,e)},Vr=function(e,t,n){return vr((function(e,t){return Et(e,t)}),jr,e,t,n)},qr=window.Promise?window.Promise:function(){var e=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
e.apply(t,n)}},t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},n=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof t)throw new TypeError("not a function")
this._state=null,this._value=null,this._deferreds=[],s(t,e(i,this),e(a,this))},r=n.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){return setTimeout(e,1)}
function o(e){var t=this
null!==this._state?r((function(){var n=t._state?e.onFulfilled:e.onRejected
if(null!==n){var r
try{r=n(t._value)}catch(o){return void e.reject(o)}e.resolve(r)}else(t._state?e.resolve:e.reject)(t._value)})):this._deferreds.push(e)}function i(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if("function"==typeof n)return void s(e(n,t),e(i,this),e(a,this))}this._state=!0,this._value=t,u.call(this)}catch(r){a.call(this,r)}}function a(e){this._state=!1,this._value=e,u.call(this)}function u(){for(var e=0,t=this._deferreds.length;e<t;e++)o.call(this,this._deferreds[e])
this._deferreds=null}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}var s=function(e,t,n){var r=!1
try{e((function(e){r||(r=!0,t(e))}),(function(e){r||(r=!0,n(e))}))}catch(o){if(r)return
r=!0,n(o)}}
return n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var r=this
return new n((function(n,i){o.call(r,new c(e,t,n,i))}))},n.all=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o=Array.prototype.slice.call(1===e.length&&t(e[0])?e[0]:e)
return new n((function(e,t){if(0===o.length)return e([])
for(var n=o.length,r=function(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then
if("function"==typeof u)return void u.call(a,(function(e){r(i,e)}),t)}o[i]=a,0==--n&&e(o)}catch(c){t(c)}},i=0;i<o.length;i++)r(i,o[i])}))},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,n){n(e)}))},n.race=function(e){return new n((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},n}(),$r=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},Wr=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},Kr=function(e,t){var n,r=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
clearTimeout(n),n=$r((function(){e.apply(this,r)}),t)}
return r.stop=function(){clearTimeout(n)},r},Xr={requestAnimationFrame:function(e,t){yr?yr.then(e):yr=new qr((function(e){t||(t=document.body),function(e,t){for(var n=window.requestAnimationFrame,r=["ms","moz","webkit"],o=0;o<r.length&&!n;o++)n=window[r[o]+"RequestAnimationFrame"]
n||(n=function(e){window.setTimeout(e,0)}),n(e,t)}(e,t)})).then(e)},setTimeout:$r,setInterval:Wr,setEditorTimeout:function(e,t,n){return $r((function(){e.removed||t()}),n)},setEditorInterval:function(e,t,n){var r=Wr((function(){e.removed?clearInterval(r):t()}),n)
return r},debounce:Kr,throttle:Kr,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}},Yr=function(e,t){void 0===t&&(t={})
var n=0,r={},o=St.fromDom(e),i=Ft(o),a=t.maxLoadTime||5e3,u=function(u,c,s){var f,l=wt._addCacheSuffix(u),d=function(e){return me(r,e).getOrThunk((function(){return{id:"mce-u"+n++,passed:[],failed:[],count:0}}))}(l)
r[l]=d,d.count++
var m=function(e,t){for(var n=e.length;n--;)e[n]()
d.status=t,d.passed=[],d.failed=[],f&&(f.onload=null,f.onerror=null,f=null)},p=function(){return m(d.passed,2)},g=function(){return m(d.failed,3)},h=function(){var t
t=h,function(){for(var t=e.styleSheets,n=t.length;n--;){var r=t[n].ownerNode
if(r&&r.id===f.id)return p(),!0}return!1}()||(Date.now()-b<a?Xr.setTimeout(t):g())}
if(c&&d.passed.push(c),s&&d.failed.push(s),1!==d.status)if(2!==d.status)if(3!==d.status){d.status=1
var v=St.fromTag("link",i.dom)
qn(v,{rel:"stylesheet",type:"text/css",id:d.id})
var y,b=Date.now()
t.contentCssCors&&Vn(v,"crossOrigin","anonymous"),t.referrerPolicy&&Vn(v,"referrerpolicy",t.referrerPolicy),(f=v.dom).onload=h,f.onerror=g,y=v,an(Zt(o),y),Vn(v,"href",l)}else g()
else p()},f=function(e){return fr((function(t){u(e,c(t,s(pr.value(e))),c(t,s(pr.error(e))))}))},l=function(e){var t=wt._addCacheSuffix(e)
me(r,t).each((function(e){var n,i
0===--e.count&&(delete r[t],n=e.id,i=Zt(o),Hr(i,"#"+n).each(sn))}))}
return{load:u,loadAll:function(e,t,n){var r;(r=j(e,f),lr(r,fr)).get((function(e){var r=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a,o)?n:r).push(a)}return{pass:n,fail:r}}(e,(function(e){return e.isValue()}))
r.fail.length>0?n(r.fail.map(hr)):t(r.pass.map(hr))}))},unload:l,unloadAll:function(e){H(e,(function(e){l(e)}))},_setReferrerPolicy:function(e){t.referrerPolicy=e}}},Gr=function(){var e=new WeakMap
return{forElement:function(t,n){var r=Qt(t).dom
return w.from(e.get(r)).getOrThunk((function(){var t=Yr(r,n)
return e.set(r,t),t}))}}}(),Jr=function(){function e(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}return e.prototype.current=function(){return this.node},e.prototype.next=function(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node},e.prototype.prev=function(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node},e.prototype.prev2=function(e){return this.node=this.findPreviousNode(this.node,"lastChild","previousSibling",e),this.node},e.prototype.findSibling=function(e,t,n,r){var o,i
if(e){if(!r&&e[t])return e[t]
if(e!==this.rootNode){if(o=e[n])return o
for(i=e.parentNode;i&&i!==this.rootNode;i=i.parentNode)if(o=i[n])return o}}},e.prototype.findPreviousNode=function(e,t,n,r){var o,i,a
if(e){if(o=e[n],this.rootNode&&o===this.rootNode)return
if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a
return o}if((i=e.parentNode)&&i!==this.rootNode)return i}},e}(),Qr=function(e){var t
return function(n){return(t=t||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r]
n[String(i)]=t(i,r)}return n}(e,v)).hasOwnProperty(Tt(n))}},Zr=Qr(["h1","h2","h3","h4","h5","h6"]),eo=Qr(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),to=function(e){return Bt(e)&&!eo(e)},no=function(e){return Bt(e)&&"br"===Tt(e)},ro=Qr(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),oo=Qr(["ul","ol","dl"]),io=Qr(["li","dd","dt"]),ao=Qr(["thead","tbody","tfoot"]),uo=Qr(["td","th"]),co=Qr(["pre","script","textarea","style"]),so=" ",fo="\ufeff",lo=function(e){return"\ufeff"===e},mo=function(e){return e.replace(/\uFEFF/g,"")},po=Sn,go=Dn,ho=function(e){return go(e)&&(e=e.parentNode),po(e)&&e.hasAttribute("data-mce-caret")},vo=function(e){return go(e)&&lo(e.data)},yo=function(e){return ho(e)||vo(e)},bo=function(e){return e.firstChild!==e.lastChild||!Ln(e.firstChild)},Co=function(e){var t=e.container()
return!!Dn(t)&&(t.data.charAt(e.offset())===fo||e.isAtStart()&&vo(t.previousSibling))},wo=function(e){var t=e.container()
return!!Dn(t)&&(t.data.charAt(e.offset()-1)===fo||e.isAtEnd()&&vo(t.nextSibling))},xo=function(e,t,n){var r,o=t.ownerDocument.createElement(e)
o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(((r=document.createElement("br")).setAttribute("data-mce-bogus","1"),r))
var i=t.parentNode
return n?i.insertBefore(o,t):t.nextSibling?i.insertBefore(o,t.nextSibling):i.appendChild(o),o},So=function(e){return go(e)&&e.data[0]===fo},No=function(e){return go(e)&&e.data[e.data.length-1]===fo},Eo=function(e){return e&&e.hasAttribute("data-mce-caret")?(t=e.getElementsByTagName("br"),n=t[t.length-1],_n(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null
var t,n},ko=Mn,_o=Fn,Ao=Ln,Ro=Dn,To=Nn(["script","style","textarea"]),Do=Nn(["img","input","textarea","hr","iframe","video","audio","object","embed"]),Oo=Nn(["table"]),Bo=yo,Po=function(e){return!Bo(e)&&(Ro(e)?!To(e.parentNode):Do(e)||Ao(e)||Oo(e)||Lo(e))},Lo=function(e){return!1===function(e){return Sn(e)&&"true"===e.getAttribute("unselectable")}(e)&&_o(e)},Io=function(e,t){return Po(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(Lo(e))return!1
if(ko(e))return!0}return!0}(e,t)},Mo=/^[ \t\r\n]*$/,Fo=function(e){return Mo.test(e)},Uo=function(e,t){var n,r,o,i=St.fromDom(t),a=St.fromDom(e)
return n=a,r="pre,code",o=l(_t,i),jr(n,r,o).isSome()},zo=function(e,t){return Po(e)&&!1===function(e,t){return Dn(e)&&Fo(e.data)&&!1===Uo(e,t)}(e,t)||function(e){return Sn(e)&&"A"===e.nodeName&&!e.hasAttribute("href")&&(e.hasAttribute("name")||e.hasAttribute("id"))}(e)||jo(e)},jo=kn("data-mce-bookmark"),Ho=kn("data-mce-bogus"),Vo=(br="data-mce-bogus",Cr="all",function(e){return Sn(e)&&e.getAttribute(br)===Cr}),qo=function(e,t){return void 0===t&&(t=!0),function(e,t){var n,r=0
if(zo(e,e))return!1
if(!(n=e.firstChild))return!0
var o=new Jr(n,e)
do{if(t){if(Vo(n)){n=o.next(!0)
continue}if(Ho(n)){n=o.next()
continue}}if(Ln(n))r++,n=o.next()
else{if(zo(n,e))return!1
n=o.next()}}while(n)
return r<=1}(e.dom,t)},$o=function(e,t){return O(e)&&(zo(e,t)||to(St.fromDom(e)))},Wo=function(e){return function(e){return"span"===e.nodeName.toLowerCase()}(e)&&"bookmark"===e.getAttribute("data-mce-type")},Ko=function(e,t){return Dn(e)&&e.data.length>0&&function(e,t){var n=new Jr(e,t).prev(!1),r=new Jr(e,t).next(!1),o=T(n)||$o(n,t),i=T(r)||$o(r,t)
return o&&i}(e,t)},Xo=function(e,t,n){var r=n||t
if(Sn(t)&&Wo(t))return t
for(var o=t.childNodes,i=o.length-1;i>=0;i--)Xo(e,o[i],r)
if(Sn(t)){var a=t.childNodes
1===a.length&&Wo(a[0])&&t.parentNode.insertBefore(a[0],t)}return function(e){return Pn(e)||Bn(e)}(t)||zo(t,r)||function(e){return!!Sn(e)&&e.childNodes.length>0}(t)||Ko(t,r)||e.remove(t),t},Yo=wt.makeMap,Go=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Jo=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Qo=/[<>&\"\']/g,Zo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,ei={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},ti={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},ni={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},ri=function(e,t){var n,r,o,i={}
if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),ti[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r)
return i}},oi=ri("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),ii=function(e,t){return e.replace(t?Go:Jo,(function(e){return ti[e]||e}))},ai=function(e,t){return e.replace(t?Go:Jo,(function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":ti[e]||"&#"+e.charCodeAt(0)+";"}))},ui=function(e,t,n){return n=n||oi,e.replace(t?Go:Jo,(function(e){return ti[e]||n[e]||e}))},ci={encodeRaw:ii,encodeAllRaw:function(e){return(""+e).replace(Qo,(function(e){return ti[e]||e}))},encodeNumeric:ai,encodeNamed:ui,getEncodeFunc:function(e,t){var n=ri(t)||oi,r=Yo(e.replace(/\+/g,","))
return r.named&&r.numeric?function(e,t){return e.replace(t?Go:Jo,(function(e){return void 0!==ti[e]?ti[e]:void 0!==n[e]?n[e]:e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"}))}:r.named?t?function(e,t){return ui(e,t,n)}:ui:r.numeric?ai:ii},decode:function(e){return e.replace(Zo,(function(e,t){return t?(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))>65535?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):ei[t]||String.fromCharCode(t):ni[e]||oi[e]||function(e){var t=St.fromTag("div").dom
return t.innerHTML=e,t.textContent||t.innerText||e}(e)}))}},si={},fi={},li=wt.makeMap,di=wt.each,mi=wt.extend,pi=wt.explode,gi=wt.inArray,hi=function(e,t){return(e=wt.trim(e))?e.split(t||" "):[]},vi=function(e,t){var n
return e&&(n={},"string"==typeof e&&(e={"*":e}),di(e,(function(e,r){n[r]=n[r.toUpperCase()]="map"===t?li(e,/[, ]/):pi(e,/[, ]/)}))),n},yi=function(e){var t={},n={},r=[],o={},i={},a=function(t,n,r){var o=e[t]
return o?o=li(o,/[, ]/,li(o.toUpperCase(),/[, ]/)):(o=si[t])||(o=li(n," ",li(n.toUpperCase()," ")),o=mi(o,r),si[t]=o),o},u=function(e){var t,n,r,o,i,a,u={},c=function(e,n,r){var o,i,a,c=function(e,t){var n,r,o={}
for(n=0,r=e.length;n<r;n++)o[e[n]]=t||{}
return o}
n=n||"","string"==typeof(r=r||[])&&(r=hi(r))
var s=hi(e)
for(o=s.length;o--;)a={attributes:c(i=hi([t,n].join(" "))),attributesOrder:i,children:c(r,fi)},u[s[o]]=a},s=function(e,t){var n,r,o,i,a=hi(e)
n=a.length
for(var c=hi(t);n--;)for(r=u[a[n]],o=0,i=c.length;o<i;o++)r.attributes[c[o]]={},r.attributesOrder.push(c[o])}
if(si[e])return si[e]
if(t="id accesskey class dir lang style tabindex title role",n="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",r="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(t+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",n+=" article aside details dialog figure main header footer hgroup section nav",r+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(t+=" xml:lang",r=[r,a="acronym applet basefont big font strike tt"].join(" "),di(hi(a),(function(e){c(e,"",r)})),n=[n,i="center dir isindex noframes"].join(" "),o=[n,r].join(" "),di(hi(i),(function(e){c(e,"",o)}))),o=o||[n,r].join(" "),c("html","manifest","head body"),c("head","","base command link meta noscript script style title"),c("title hr noscript br"),c("base","href target"),c("link","href rel media hreflang type sizes hreflang"),c("meta","name http-equiv content charset"),c("style","media type scoped"),c("script","src async defer type charset"),c("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",o),c("address dt dd div caption","",o),c("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",r),c("blockquote","cite",o),c("ol","reversed start type","li"),c("ul","","li"),c("li","value",o),c("dl","","dt dd"),c("a","href target rel media hreflang type",r),c("q","cite",r),c("ins del","cite datetime",o),c("img","src sizes srcset alt usemap ismap width height"),c("iframe","src name width height",o),c("embed","src type width height"),c("object","data type typemustmatch name usemap form width height",[o,"param"].join(" ")),c("param","name value"),c("map","name",[o,"area"].join(" ")),c("area","alt coords shape href target rel media hreflang type"),c("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),c("colgroup","span","col"),c("col","span"),c("tbody thead tfoot","","tr"),c("tr","","td th"),c("td","colspan rowspan headers",o),c("th","colspan rowspan headers scope abbr",o),c("form","accept-charset action autocomplete enctype method name novalidate target",o),c("fieldset","disabled form name",[o,"legend"].join(" ")),c("label","form for",r),c("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),c("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?o:r),c("select","disabled form multiple name required size","option optgroup"),c("optgroup","disabled label","option"),c("option","disabled label selected value"),c("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),c("menu","type label",[o,"li"].join(" ")),c("noscript","",o),"html4"!==e&&(c("wbr"),c("ruby","",[r,"rt rp"].join(" ")),c("figcaption","",o),c("mark rt rp summary bdi","",r),c("canvas","width height",o),c("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[o,"track source"].join(" ")),c("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[o,"track source"].join(" ")),c("picture","","img source"),c("source","src srcset type media sizes"),c("track","kind src srclang label default"),c("datalist","",[r,"option"].join(" ")),c("article section nav aside main header footer","",o),c("hgroup","","h1 h2 h3 h4 h5 h6"),c("figure","",[o,"figcaption"].join(" ")),c("time","datetime",r),c("dialog","open",o),c("command","type label icon disabled checked radiogroup command"),c("output","for form name",r),c("progress","value max",r),c("meter","value min max low high optimum",r),c("details","open",[o,"summary"].join(" ")),c("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e){s("script","language xml:space"),s("style","xml:space"),s("object","declare classid code codebase codetype archive standby align border hspace vspace"),s("embed","align name hspace vspace"),s("param","valuetype type"),s("a","charset name rev shape coords"),s("br","clear"),s("applet","codebase archive code object alt name width height align hspace vspace"),s("img","name longdesc align border hspace vspace"),s("iframe","longdesc frameborder marginwidth marginheight scrolling align"),s("font basefont","size color face"),s("input","usemap align"),s("select"),s("textarea"),s("h1 h2 h3 h4 h5 h6 div p legend caption","align"),s("ul","type compact"),s("li","type"),s("ol dl menu dir","compact"),s("pre","width xml:space"),s("hr","align noshade size width"),s("isindex","prompt"),s("table","summary width frame rules cellspacing cellpadding align bgcolor"),s("col","width align char charoff valign"),s("colgroup","width align char charoff valign"),s("thead","align char charoff valign"),s("tr","align char charoff valign bgcolor"),s("th","axis align char charoff valign nowrap bgcolor width height"),s("form","accept"),s("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),s("tfoot","align char charoff valign")
s("tbody","align char charoff valign"),s("area","nohref"),s("body","background bgcolor text link vlink alink")}return"html4"!==e&&(s("input button select textarea","autofocus"),s("input textarea","placeholder"),s("a","download"),s("link script img","crossorigin"),s("img","loading"),s("iframe","sandbox seamless allowfullscreen loading")),di(hi("a form meter progress dfn"),(function(e){u[e]&&delete u[e].children[e]})),delete u.caption.children.table,delete u.script,si[e]=u,u}((e=e||{}).schema)
!1===e.verify_html&&(e.valid_elements="*[*]")
var c=vi(e.valid_styles),s=vi(e.invalid_styles,"map"),f=vi(e.valid_classes,"map"),l=a("whitespace_elements","pre script noscript style textarea video audio iframe object code"),d=a("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),m=a("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),p=a("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),g="td th iframe video audio object script code",h=a("non_empty_elements",g+" pre",m),v=a("move_caret_before_on_enter_elements",g+" table",m),y=a("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),b=a("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",y),C=a("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
di((e.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),(function(e){i[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var w=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},x=function(e){var n,o,i,a,u,c,s,f,l,d,m,p,g,h,v,y,b,C,x=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,S=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,N=/[*?+]/
if(e){var E=hi(e,",")
for(t["@"]&&(y=t["@"].attributes,b=t["@"].attributesOrder),n=0,o=E.length;n<o;n++)if(u=x.exec(E[n])){if(h=u[1],l=u[2],v=u[3],f=u[5],c={attributes:p={},attributesOrder:g=[]},"#"===h&&(c.paddEmpty=!0),"-"===h&&(c.removeEmpty=!0),"!"===u[4]&&(c.removeEmptyAttrs=!0),y&&(ie(y,(function(e,t){p[t]=e})),g.push.apply(g,b)),f)for(i=0,a=(f=hi(f,"|")).length;i<a;i++)if(u=S.exec(f[i])){if(s={},m=u[1],d=u[2].replace(/[\\:]:/g,":"),h=u[3],C=u[4],"!"===m&&(c.attributesRequired=c.attributesRequired||[],c.attributesRequired.push(d),s.required=!0),"-"===m){delete p[d],g.splice(gi(g,d),1)
continue}h&&("="===h&&(c.attributesDefault=c.attributesDefault||[],c.attributesDefault.push({name:d,value:C}),s.defaultValue=C),":"===h&&(c.attributesForced=c.attributesForced||[],c.attributesForced.push({name:d,value:C}),s.forcedValue=C),"<"===h&&(s.validValues=li(C,"?"))),N.test(d)?(c.attributePatterns=c.attributePatterns||[],s.pattern=w(d),c.attributePatterns.push(s)):(p[d]||g.push(d),p[d]=s)}y||"@"!==l||(y=p,b=g),v&&(c.outputName=l,t[v]=c),N.test(l)?(c.pattern=w(l),r.push(c)):t[l]=c}}},S=function(e){t={},r=[],x(e),di(u,(function(e,t){n[t]=e.children}))},N=function(e){var r=/^(~)?(.+)$/
e&&(si.text_block_elements=si.block_elements=null,di(hi(e,","),(function(e){var i=r.exec(e),a="~"===i[1],u=a?"span":"div",c=i[2]
if(n[c]=n[u],o[c]=u,a||(b[c.toUpperCase()]={},b[c]={}),!t[c]){var s=t[u]
delete(s=mi({},s)).removeEmptyAttrs,delete s.removeEmpty,t[c]=s}di(n,(function(e,t){e[u]&&(n[t]=e=mi({},n[t]),e[c]=e[u])}))})))},E=function(t){var r=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/
si[e.schema]=null,t&&di(hi(t,","),(function(e){var t,o,i=r.exec(e)
i&&(o=i[1],t=o?n[i[2]]:n[i[2]]={"#comment":{}},t=n[i[2]],di(hi(i[3],"|"),(function(e){"-"===o?delete t[e]:t[e]={}})))}))},k=function(e){var n,o=t[e]
if(o)return o
for(n=r.length;n--;)if((o=r[n]).pattern.test(e))return o}
e.valid_elements?S(e.valid_elements):(di(u,(function(e,r){t[r]={attributes:e.attributes,attributesOrder:e.attributesOrder},n[r]=e.children})),"html5"!==e.schema&&di(hi("strong/b em/i"),(function(e){var n=hi(e,"/")
t[n[1]].outputName=n[0]})),di(hi("ol ul sub sup blockquote span font a table tbody strong em b i"),(function(e){t[e]&&(t[e].removeEmpty=!0)})),di(hi("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(function(e){t[e].paddEmpty=!0})),di(hi("span"),(function(e){t[e].removeEmptyAttrs=!0}))),N(e.custom_elements),E(e.valid_children),x(e.extended_valid_elements),E("+ol[ul|ol],+ul[ul|ol]"),di({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},(function(e,n){t[n]&&(t[n].parentsRequired=hi(e))})),e.invalid_elements&&di(pi(e.invalid_elements),(function(e){t[e]&&delete t[e]})),k("span")||x("span[!data-mce-type|*]")
return{children:n,elements:t,getValidStyles:function(){return c},getValidClasses:function(){return f},getBlockElements:function(){return b},getInvalidStyles:function(){return s},getShortEndedElements:function(){return m},getTextBlockElements:function(){return y},getTextInlineElements:function(){return C},getBoolAttrs:function(){return p},getElementRule:k,getSelfClosingElements:function(){return d},getNonEmptyElements:function(){return h},getMoveCaretBeforeOnEnterElements:function(){return v},getWhiteSpaceElements:function(){return l},getSpecialElements:function(){return i},isValidChild:function(e,t){var r=n[e.toLowerCase()]
return!(!r||!r[t.toLowerCase()])},isValid:function(e,t){var n,r,o=k(e)
if(o){if(!t)return!0
if(o.attributes[t])return!0
if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return o},addValidElements:x,setValidElements:S,addCustomElements:N,addValidChildren:E}},bi=function(e,t,n,r){var o=function(e){return(e=parseInt(e,10).toString(16)).length>1?e:"0"+e}
return"#"+o(t)+o(n)+o(r)},Ci=function(e,t){var n,r,o,i=this,a=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,u=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,c=/\s*([^:]+):\s*([^;]+);?/g,s=/\s+$/,f={},l="\ufeff"
e=e||{},t&&(r=t.getValidStyles(),o=t.getInvalidStyles())
var d="\\\" \\' \\; \\: ; : \ufeff".split(" ")
for(n=0;n<d.length;n++)f[d[n]]=l+n,f[l+n]=d[n]
return{toHex:function(e){return e.replace(a,bi)},parse:function(t){var r,o,d,m,p,g,h,v,y={},b=e.url_converter,C=e.url_converter_scope||i,w=function(e,t,r){var o=y[e+"-top"+t]
if(o){var i=y[e+"-right"+t]
if(i){var a=y[e+"-bottom"+t]
if(a){var u=y[e+"-left"+t]
if(u){var c=[o,i,a,u]
for(n=c.length-1;n--&&c[n]===c[n+1];);n>-1&&r||(y[e+t]=-1===n?c[0]:c.join(" "),delete y[e+"-top"+t],delete y[e+"-right"+t],delete y[e+"-bottom"+t],delete y[e+"-left"+t])}}}}},x=function(e){var t,n=y[e]
if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return!1
return y[e]=n[0],!0}},S=function(e){return m=!0,f[e]},N=function(e,t){return m&&(e=e.replace(/\uFEFF[0-9]/g,(function(e){return f[e]}))),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e},E=function(e){return String.fromCharCode(parseInt(e.slice(1),16))},k=function(e){return e.replace(/\\[0-9a-f]+/gi,E)},_=function(t,n,r,o,i,a){if(i=i||a)return"'"+(i=N(i)).replace(/\'/g,"\\'")+"'"
if(n=N(n||r||o),!e.allow_script_urls){var u=n.replace(/[\s\r\n]+/g,"")
if(/(java|vb)script:/i.test(u))return""
if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(u))return""}return b&&(n=b.call(C,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}
if(t){for(t=(t=t.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,S).replace(/\"[^\"]+\"|\'[^\']+\'/g,(function(e){return e.replace(/[;:]/g,S)}));r=c.exec(t);)if(c.lastIndex=r.index+r[0].length,o=r[1].replace(s,"").toLowerCase(),d=r[2].replace(s,""),o&&d){if(o=k(o),d=k(d),-1!==o.indexOf(l)||-1!==o.indexOf('"'))continue
if(!e.allow_script_urls&&("behavior"===o||/expression\s*\(|\/\*|\*\//.test(d)))continue
"font-weight"===o&&"700"===d?d="bold":"color"!==o&&"background-color"!==o||(d=d.toLowerCase()),d=(d=d.replace(a,bi)).replace(u,_),y[o]=m?N(d,!0):d}w("border","",!0),w("border","-width"),w("border","-color"),w("border","-style"),w("padding",""),w("margin",""),p="border",h="border-style",v="border-color",x(g="border-width")&&x(h)&&x(v)&&(y[p]=y[g]+" "+y[h]+" "+y[v],delete y[g],delete y[h],delete y[v]),"medium none"===y.border&&delete y.border,"none"===y["border-image"]&&delete y["border-image"]}return y},serialize:function(e,t){var n="",i=function(t){var o,i=r[t]
if(i)for(var a=0,u=i.length;a<u;a++)t=i[a],(o=e[t])&&(n+=(n.length>0?" ":"")+t+": "+o+";")}
return t&&r?(i("*"),i(t)):ie(e,(function(e,r){!e||o&&!function(e,t){var n=o["*"]
return!(n&&n[e]||(n=o[t])&&n[e])}(r,t)||(n+=(n.length>0?" ":"")+r+": "+e+";")})),n}}},wi=/^(?:mouse|contextmenu)|click/,xi={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1,mozPressure:1},Si=h,Ni=v,Ei=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},ki=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},_i=function(e,t){var n,r=t||{}
for(n in e)xi[n]||(r[n]=e[n])
if(r.target||(r.target=r.srcElement||document),r.composedPath&&(r.composedPath=function(){return e.composedPath()}),e&&function(e){return wi.test(e.type)}(e)&&void 0===e.pageX&&void 0!==e.clientX){var o=r.target.ownerDocument||document,i=o.documentElement,a=o.body
r.pageX=e.clientX+(i&&i.scrollLeft||a&&a.scrollLeft||0)-(i&&i.clientLeft||a&&a.clientLeft||0),r.pageY=e.clientY+(i&&i.scrollTop||a&&a.scrollTop||0)-(i&&i.clientTop||a&&a.clientTop||0)}return r.preventDefault=function(){r.defaultPrevented=!0,r.isDefaultPrevented=Ni,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},r.stopPropagation=function(){r.cancelBubble=!0,r.isPropagationStopped=Ni,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=Ni,r.stopPropagation()},!1===function(e){return e.isDefaultPrevented===Ni||e.isDefaultPrevented===Si}(r)&&(r.isDefaultPrevented=!0===r.defaultPrevented?Ni:Si,r.isPropagationStopped=!0===r.cancelBubble?Ni:Si,r.isImmediatePropagationStopped=Si),void 0===r.metaKey&&(r.metaKey=!1),r},Ai=function(e,t,n){var r=e.document,o={type:"ready"}
if(n.domLoaded)t(o)
else{var i=function(){ki(e,"DOMContentLoaded",i),ki(e,"load",i),n.domLoaded||(n.domLoaded=!0,t(o)),e=null}
"complete"===r.readyState||"interactive"===r.readyState&&r.body?i():Ei(e,"DOMContentLoaded",i),n.domLoaded||Ei(e,"load",i)}},Ri=function(){function e(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}return e.prototype.bind=function(e,t,n,r){var o,i,a,u,c,s,f,l=this,d=window,m=function(e){l.executeHandlers(_i(e||d.event),o)}
if(e&&3!==e.nodeType&&8!==e.nodeType){e[l.expando]?o=e[l.expando]:(o=l.count++,e[l.expando]=o,l.events[o]={}),r=r||e
var p=t.split(" ")
for(a=p.length;a--;)s=m,c=f=!1,"DOMContentLoaded"===(u=p[a])&&(u="ready"),l.domLoaded&&"ready"===u&&"complete"===e.readyState?n.call(r,_i({type:u})):(l.hasMouseEnterLeave||(c=l.mouseEnterLeave[u])&&(s=function(e){var t=e.currentTarget,n=e.relatedTarget
if(n&&t.contains)n=t.contains(n)
else for(;n&&n!==t;)n=n.parentNode
n||((e=_i(e||d.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,l.executeHandlers(e,o))}),l.hasFocusIn||"focusin"!==u&&"focusout"!==u||(f=!0,c="focusin"===u?"focus":"blur",s=function(e){(e=_i(e||d.event)).type="focus"===e.type?"focusin":"focusout",l.executeHandlers(e,o)}),(i=l.events[o][u])?"ready"===u&&l.domLoaded?n(_i({type:u})):i.push({func:n,scope:r}):(l.events[o][u]=i=[{func:n,scope:r}],i.fakeName=c,i.capture=f,i.nativeHandler=s,"ready"===u?Ai(e,s,l):Ei(e,c||u,s,f)))
return e=i=null,n}},e.prototype.unbind=function(e,t,n){var r,o,i,a,u
if(!e||3===e.nodeType||8===e.nodeType)return this
var c=e[this.expando]
if(c){if(u=this.events[c],t){var s=t.split(" ")
for(o=s.length;o--;)if(r=u[a=s[o]]){if(n)for(i=r.length;i--;)if(r[i].func===n){var f=r.nativeHandler,l=r.fakeName,d=r.capture;(r=r.slice(0,i).concat(r.slice(i+1))).nativeHandler=f,r.fakeName=l,r.capture=d,u[a]=r}n&&0!==r.length||(delete u[a],ki(e,r.fakeName||a,r.nativeHandler,r.capture))}}else ie(u,(function(t,n){ki(e,t.fakeName||n,t.nativeHandler,t.capture)})),u={}
for(a in u)if(pe(u,a))return this
delete this.events[c]
try{delete e[this.expando]}catch(m){e[this.expando]=null}}return this},e.prototype.fire=function(e,t,n){var r
if(!e||3===e.nodeType||8===e.nodeType)return this
var o=_i(null,n)
o.type=t,o.target=e
do{(r=e[this.expando])&&this.executeHandlers(o,r),e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow}while(e&&!o.isPropagationStopped())
return this},e.prototype.clean=function(e){var t,n
if(!e||3===e.nodeType||8===e.nodeType)return this
if(e[this.expando]&&this.unbind(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(this.unbind(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[this.expando]&&this.unbind(e)
return this},e.prototype.destroy=function(){this.events={}},e.prototype.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1},e.prototype.executeHandlers=function(e,t){var n=this.events[t],r=n&&n[e.type]
if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o]
if(a&&!1===a.func.call(a.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}},e.Event=new e,e}(),Ti="sizzle"+-new Date,Di=window.document,Oi=0,Bi=0,Pi=ma(),Li=ma(),Ii=ma(),Mi=function(e,t){return e===t&&(Tr=!0),0},Fi="undefined",Ui=1<<31,zi={}.hasOwnProperty,ji=[],Hi=ji.pop,Vi=ji.push,qi=ji.push,$i=ji.slice,Wi=ji.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t
return-1},Ki="[\\x20\\t\\r\\n\\f]",Xi="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Yi="\\[[\\x20\\t\\r\\n\\f]*("+Xi+")(?:"+Ki+"*([*^$|!~]?=)"+Ki+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+Xi+"))|)"+Ki+"*\\]",Gi=":("+Xi+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+Yi+")*)|.*)\\)|)",Ji=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),Qi=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),Zi=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),ea=new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]","g"),ta=new RegExp(Gi),na=new RegExp("^"+Xi+"$"),ra={ID:new RegExp("^#("+Xi+")"),CLASS:new RegExp("^\\.("+Xi+")"),TAG:new RegExp("^("+Xi+"|[*])"),ATTR:new RegExp("^"+Yi),PSEUDO:new RegExp("^"+Gi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,ia=/^h\d$/i,aa=/^[^{]+\{\s*\[native \w/,ua=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ca=/[+~]/,sa=/'|\\/g,fa=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig"),la=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)}
try{qi.apply(ji=$i.call(Di.childNodes),Di.childNodes),ji[Di.childNodes.length].nodeType}catch(fk){qi={apply:ji.length?function(e,t){Vi.apply(e,$i.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var da=function(e,t,n,r){var o,i,a,u,c,s,f,l,d,m
if((t?t.ownerDocument||t:Di)!==Or&&Dr(t),n=n||[],!e||"string"!=typeof e)return n
if(1!==(u=(t=t||Or).nodeType)&&9!==u)return[]
if(Pr&&!r){if(o=ua.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n
if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&Mr(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return qi.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&wr.getElementsByClassName)return qi.apply(n,t.getElementsByClassName(a)),n}if(wr.qsa&&(!Lr||!Lr.test(e))){if(l=f=Ti,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(s=Er(e),(f=t.getAttribute("id"))?l=f.replace(sa,"\\$&"):t.setAttribute("id",l),l="[id='"+l+"'] ",c=s.length;c--;)s[c]=l+ba(s[c])
d=ca.test(e)&&va(t.parentNode)||t,m=s.join(",")}if(m)try{return qi.apply(n,d.querySelectorAll(m)),n}catch(p){}finally{f||t.removeAttribute("id")}}}return _r(e.replace(Ji,"$1"),t,n,r)}
function ma(){var e=[]
return function t(n,r){return e.push(n+" ")>xr.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function pa(e){return e[Ti]=!0,e}function ga(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Ui)-(~e.sourceIndex||Ui)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function ha(e){return pa((function(t){return t=+t,pa((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function va(e){return e&&typeof e.getElementsByTagName!==Fi&&e}function ya(){}function ba(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function Ca(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=Bi++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,c,s=[Oi,i]
if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if((u=(c=t[Ti]||(t[Ti]={}))[r])&&u[0]===Oi&&u[1]===i)return s[2]=u[2]
if(c[r]=s,s[2]=e(t,n,a))return!0}}}function wa(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1
return!0}:e[0]}function xa(e,t,n,r,o){for(var i,a=[],u=0,c=e.length,s=null!=t;u<c;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),s&&t.push(u)))
return a}function Sa(e,t,n,r,o,i){return r&&!r[Ti]&&(r=Sa(r)),o&&!o[Ti]&&(o=Sa(o,i)),pa((function(i,a,u,c){var s,f,l,d=[],m=[],p=a.length,g=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)da(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),h=!e||!i&&t?g:xa(g,d,e,u,c),v=n?o||(i?e:p||r)?[]:a:h
if(n&&n(h,v,u,c),r)for(s=xa(v,m),r(s,[],u,c),f=s.length;f--;)(l=s[f])&&(v[m[f]]=!(h[m[f]]=l))
if(i){if(o||e){if(o){for(s=[],f=v.length;f--;)(l=v[f])&&s.push(h[f]=l)
o(null,v=[],s,c)}for(f=v.length;f--;)(l=v[f])&&(s=o?Wi.call(i,l):d[f])>-1&&(i[s]=!(a[s]=l))}}else v=xa(v===a?v.splice(p,v.length):v),o?o(null,a,v,c):qi.apply(a,v)}))}function Na(e){for(var t,n,r,o=e.length,i=xr.relative[e[0].type],a=i||xr.relative[" "],u=i?1:0,c=Ca((function(e){return e===t}),a,!0),s=Ca((function(e){return Wi.call(t,e)>-1}),a,!0),f=[function(e,n,r){var o=!i&&(r||n!==Ar)||((t=n).nodeType?c(e,n,r):s(e,n,r))
return t=null,o}];u<o;u++)if(n=xr.relative[e[u].type])f=[Ca(wa(f),n)]
else{if((n=xr.filter[e[u].type].apply(null,e[u].matches))[Ti]){for(r=++u;r<o&&!xr.relative[e[r].type];r++);return Sa(u>1&&wa(f),u>1&&ba(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(Ji,"$1"),n,u<r&&Na(e.slice(u,r)),r<o&&Na(e=e.slice(r)),r<o&&ba(e))}f.push(n)}return wa(f)}wr=da.support={},Nr=da.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},Dr=da.setDocument=function(e){var t,n=e?e.ownerDocument||e:Di,r=n.defaultView
return n!==Or&&9===n.nodeType&&n.documentElement?(Or=n,Br=n.documentElement,Pr=!Nr(n),r&&r!==function(e){try{return e.top}catch(t){}return null}(r)&&(r.addEventListener?r.addEventListener("unload",(function(){Dr()}),!1):r.attachEvent&&r.attachEvent("onunload",(function(){Dr()}))),wr.attributes=!0,wr.getElementsByTagName=!0,wr.getElementsByClassName=aa.test(n.getElementsByClassName),wr.getById=!0,xr.find.ID=function(e,t){if(typeof t.getElementById!==Fi&&Pr){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},xr.filter.ID=function(e){var t=e.replace(fa,la)
return function(e){return e.getAttribute("id")===t}},xr.find.TAG=wr.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Fi)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e)
if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n)
return r}return i},xr.find.CLASS=wr.getElementsByClassName&&function(e,t){if(Pr)return t.getElementsByClassName(e)},Ir=[],Lr=[],wr.disconnectedMatch=!0,Lr=Lr.length&&new RegExp(Lr.join("|")),Ir=Ir.length&&new RegExp(Ir.join("|")),t=aa.test(Br.compareDocumentPosition),Mr=t||aa.test(Br.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},Mi=t?function(e,t){if(e===t)return Tr=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!wr.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===Di&&Mr(Di,e)?-1:t===n||t.ownerDocument===Di&&Mr(Di,t)?1:Rr?Wi.call(Rr,e)-Wi.call(Rr,t):0:4&r?-1:1)}:function(e,t){if(e===t)return Tr=!0,0
var r,o=0,i=e.parentNode,a=t.parentNode,u=[e],c=[t]
if(!i||!a)return e===n?-1:t===n?1:i?-1:a?1:Rr?Wi.call(Rr,e)-Wi.call(Rr,t):0
if(i===a)return ga(e,t)
for(r=e;r=r.parentNode;)u.unshift(r)
for(r=t;r=r.parentNode;)c.unshift(r)
for(;u[o]===c[o];)o++
return o?ga(u[o],c[o]):u[o]===Di?-1:c[o]===Di?1:0},n):Or},da.matches=function(e,t){return da(e,null,null,t)},da.matchesSelector=function(e,t){if((e.ownerDocument||e)!==Or&&Dr(e),t=t.replace(ea,"='$1']"),wr.matchesSelector&&Pr&&(!Ir||!Ir.test(t))&&(!Lr||!Lr.test(t)))try{var n=undefined.call(e,t)
if(n||wr.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(fk){}return da(t,Or,null,[e]).length>0},da.contains=function(e,t){return(e.ownerDocument||e)!==Or&&Dr(e),Mr(e,t)},da.attr=function(e,t){(e.ownerDocument||e)!==Or&&Dr(e)
var n=xr.attrHandle[t.toLowerCase()],r=n&&zi.call(xr.attrHandle,t.toLowerCase())?n(e,t,!Pr):void 0
return void 0!==r?r:wr.attributes||!Pr?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},da.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},da.uniqueSort=function(e){var t,n=[],r=0,o=0
if(Tr=!wr.detectDuplicates,Rr=!wr.sortStable&&e.slice(0),e.sort(Mi),Tr){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)e.splice(n[r],1)}return Rr=null,e},Sr=da.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=Sr(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=Sr(t)
return n},(xr=da.selectors={cacheLength:50,createPseudo:pa,match:ra,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(fa,la),e[3]=(e[3]||e[4]||e[5]||"").replace(fa,la),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||da.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&da.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return ra.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ta.test(n)&&(t=Er(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(fa,la).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Pi[e+" "]
return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+Ki+"|$)"))&&Pi(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Fi&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=da.attr(r,e)
return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,c){var s,f,l,d,m,p,g=i!==a?"nextSibling":"previousSibling",h=t.parentNode,v=u&&t.nodeName.toLowerCase(),y=!c&&!u
if(h){if(i){for(;g;){for(l=t;l=l[g];)if(u?l.nodeName.toLowerCase()===v:1===l.nodeType)return!1
p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?h.firstChild:h.lastChild],a&&y){for(m=(s=(f=h[Ti]||(h[Ti]={}))[e]||[])[0]===Oi&&s[1],d=s[0]===Oi&&s[2],l=m&&h.childNodes[m];l=++m&&l&&l[g]||(d=m=0)||p.pop();)if(1===l.nodeType&&++d&&l===t){f[e]=[Oi,m,d]
break}}else if(y&&(s=(t[Ti]||(t[Ti]={}))[e])&&s[0]===Oi)d=s[1]
else for(;(l=++m&&l&&l[g]||(d=m=0)||p.pop())&&((u?l.nodeName.toLowerCase()!==v:1!==l.nodeType)||!++d||(y&&((l[Ti]||(l[Ti]={}))[e]=[Oi,d]),l!==t)););return(d-=o)===r||d%r==0&&d/r>=0}}},PSEUDO:function(e,t){var n,r=xr.pseudos[e]||xr.setFilters[e.toLowerCase()]||da.error("unsupported pseudo: "+e)
return r[Ti]?r(t):r.length>1?(n=[e,e,"",t],xr.setFilters.hasOwnProperty(e.toLowerCase())?pa((function(e,n){for(var o,i=r(e,t),a=i.length;a--;)e[o=Wi.call(e,i[a])]=!(n[o]=i[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:pa((function(e){var t=[],n=[],r=kr(e.replace(Ji,"$1"))
return r[Ti]?pa((function(e,t,n,o){for(var i,a=r(e,null,o,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}})),has:pa((function(e){return function(t){return da(e,t).length>0}})),contains:pa((function(e){return e=e.replace(fa,la),function(t){return(t.textContent||t.innerText||Sr(t)).indexOf(e)>-1}})),lang:pa((function(e){return na.test(e||"")||da.error("unsupported lang: "+e),e=e.replace(fa,la).toLowerCase(),function(t){var n
do{if(n=Pr?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===Br},focus:function(e){return e===Or.activeElement&&(!Or.hasFocus||Or.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!xr.pseudos.empty(e)},header:function(e){return ia.test(e.nodeName)},input:function(e){return oa.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ha((function(){return[0]})),last:ha((function(e,t){return[t-1]})),eq:ha((function(e,t,n){return[n<0?n+t:n]})),even:ha((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:ha((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:ha((function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r)
return e})),gt:ha((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=xr.pseudos.eq,H(["radio","checkbox","file","password","image"],(function(e){xr.pseudos[e]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(e)})),H(["submit","reset"],(function(e){xr.pseudos[e]=function(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}(e)})),ya.prototype=xr.filters=xr.pseudos,xr.setFilters=new ya,Er=da.tokenize=function(e,t){var n,r,o,i,a,u,c,s=Li[e+" "]
if(s)return t?0:s.slice(0)
for(a=e,u=[],c=xr.preFilter;a;){for(i in n&&!(r=Qi.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=Zi.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(Ji," ")}),a=a.slice(n.length)),xr.filter)xr.filter.hasOwnProperty(i)&&(!(r=ra[i].exec(a))||c[i]&&!(r=c[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length)))
if(!n)break}return t?a.length:a?da.error(e):Li(e,u).slice(0)},kr=da.compile=function(e,t){var n,r=[],o=[],i=Ii[e+" "]
if(!i){for(t||(t=Er(e)),n=t.length;n--;)(i=Na(t[n]))[Ti]?r.push(i):o.push(i);(i=Ii(e,function(e,t){var n=t.length>0,r=e.length>0,o=function(o,i,a,u,c){var s,f,l,d=0,m="0",p=o&&[],g=[],h=Ar,v=o||r&&xr.find.TAG("*",c),y=Oi+=null==h?1:Math.random()||.1,b=v.length
for(c&&(Ar=i!==Or&&i);m!==b&&null!=(s=v[m]);m++){if(r&&s){for(f=0;l=e[f++];)if(l(s,i,a)){u.push(s)
break}c&&(Oi=y)}n&&((s=!l&&s)&&d--,o&&p.push(s))}if(d+=m,n&&m!==d){for(f=0;l=t[f++];)l(p,g,i,a)
if(o){if(d>0)for(;m--;)p[m]||g[m]||(g[m]=Hi.call(u))
g=xa(g)}qi.apply(u,g),c&&!o&&g.length>0&&d+t.length>1&&da.uniqueSort(u)}return c&&(Oi=y,Ar=h),p}
return n?pa(o):o}(o,r))).selector=e}return i},_r=da.select=function(e,t,n,r){var o,i,a,u,c,s="function"==typeof e&&e,f=!r&&Er(e=s.selector||e)
if(n=n||[],1===f.length){if((i=f[0]=f[0].slice(0)).length>2&&"ID"===(a=i[0]).type&&wr.getById&&9===t.nodeType&&Pr&&xr.relative[i[1].type]){if(!(t=(xr.find.ID(a.matches[0].replace(fa,la),t)||[])[0]))return n
s&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=ra.needsContext.test(e)?0:i.length;o--&&(a=i[o],!xr.relative[u=a.type]);)if((c=xr.find[u])&&(r=c(a.matches[0].replace(fa,la),ca.test(i[0].type)&&va(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&ba(i)))return qi.apply(n,r),n
break}}return(s||kr(e,f))(r,t,!Pr,n,ca.test(e)&&va(t.parentNode)||t),n},wr.sortStable=Ti.split("").sort(Mi).join("")===Ti,wr.detectDuplicates=!!Tr,Dr(),wr.sortDetached=!0
var Ea=document,ka=Array.prototype.push,_a=Array.prototype.slice,Aa=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,Ra=Ri.Event,Ta=wt.makeMap("children,contents,next,prev"),Da=function(e){return void 0!==e},Oa=function(e){return"string"==typeof e},Ba=function(e,t){var n,r=(t=t||Ea).createElement("div"),o=t.createDocumentFragment()
for(r.innerHTML=e;n=r.firstChild;)o.appendChild(n)
return o},Pa=function(e,t,n,r){var o
if(Oa(t))t=Ba(t,Xa(e[0]))
else if(t.length&&!t.nodeType){if(t=Qa.makeArray(t),r)for(o=t.length-1;o>=0;o--)Pa(e,t[o],n,r)
else for(o=0;o<t.length;o++)Pa(e,t[o],n,r)
return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t)
return e},La=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},Ia=function(e,t,n){var r,o
return t=Qa(t)[0],e.each((function(){var e=this
n&&r===e.parentNode||(r=e.parentNode,o=t.cloneNode(!1),e.parentNode.insertBefore(o,e)),o.appendChild(e)})),e},Ma=wt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),Fa=wt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),Ua={for:"htmlFor",class:"className",readonly:"readOnly"},za={float:"cssFloat"},ja={},Ha={},Va=function(e,t){return new Qa.fn.init(e,t)},qa=/^\s*|\s*$/g,$a=function(e){return null==e?"":(""+e).replace(qa,"")},Wa=function(e,t){var n,r,o,i
if(e)if(void 0===(n=e.length)){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},Ka=function(e,t){var n=[]
return Wa(e,(function(e,r){t(r,e)&&n.push(r)})),n},Xa=function(e){return e?9===e.nodeType?e:e.ownerDocument:Ea}
Va.fn=Va.prototype={constructor:Va,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this
if(!e)return o
if(e.nodeType)return o.context=o[0]=e,o.length=1,o
if(t&&t.nodeType)o.context=t
else{if(t)return Qa(e).attr(t)
o.context=t=document}if(Oa(e)){if(o.selector=e,!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:Aa.exec(e)))return Qa(t).find(e)
if(n[1])for(r=Ba(e,Xa(t)).firstChild;r;)ka.call(o,r),r=r.nextSibling
else{if(!(r=Xa(t).getElementById(n[2])))return o
if(r.id!==n[2])return o.find(e)
o.length=1,o[0]=r}}else this.add(e,!1)
return o},toArray:function(){return wt.toArray(this)},add:function(e,t){var n,r,o=this
if(Oa(e))return o.add(Qa(e))
if(!1!==t)for(n=Qa.unique(o.toArray().concat(Qa.makeArray(e))),o.length=n.length,r=0;r<n.length;r++)o[r]=n[r]
else ka.apply(o,Qa.makeArray(e))
return o},attr:function(e,t){var n,r=this
if("object"==typeof e)Wa(e,(function(e,t){r.attr(e,t)}))
else{if(!Da(t)){if(r[0]&&1===r[0].nodeType){if((n=ja[e])&&n.get)return n.get(r[0],e)
if(Fa[e])return r.prop(e)?e:void 0
null===(t=r[0].getAttribute(e,2))&&(t=void 0)}return t}this.each((function(){var n
if(1===this.nodeType){if((n=ja[e])&&n.set)return void n.set(this,t)
null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}}))}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this
if("object"==typeof(e=Ua[e]||e))Wa(e,(function(e,t){n.prop(e,t)}))
else{if(!Da(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t
this.each((function(){1===this.nodeType&&(this[e]=t)}))}return n},css:function(e,t){var n,r,o=this,i=function(e){return e.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()}))},a=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e}))}
if("object"==typeof e)Wa(e,(function(e,t){o.css(e,t)}))
else if(Da(t))e=i(e),"number"!=typeof t||Ma[e]||(t=t.toString()+"px"),o.each((function(){var n=this.style
if((r=Ha[e])&&r.set)r.set(this,t)
else{try{this.style[za[e]||e]=t}catch(o){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(a(e)):n.removeAttribute(e))}}))
else{if(n=o[0],(r=Ha[e])&&r.get)return r.get(n)
if(!n.ownerDocument.defaultView)return n.currentStyle?n.currentStyle[i(e)]:""
try{return n.ownerDocument.defaultView.getComputedStyle(n,null).getPropertyValue(a(e))}catch(u){return}}return o},remove:function(){for(var e,t=this.length;t--;)e=this[t],Ra.clean(e),e.parentNode&&e.parentNode.removeChild(e)
return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild)
return this},html:function(e){var t,n=this
if(Da(e)){t=n.length
try{for(;t--;)n[t].innerHTML=e}catch(r){Qa(n[t]).empty().append(e)}return n}return n[0]?n[0].innerHTML:""},text:function(e){var t,n=this
if(Da(e)){for(t=n.length;t--;)"innerText"in n[t]?n[t].innerText=e:n[0].textContent=e
return n}return n[0]?n[0].innerText||n[0].textContent:""},append:function(){return Pa(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)}))},prepend:function(){return Pa(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)}),!0)},before:function(){var e=this
return e[0]&&e[0].parentNode?Pa(e,arguments,(function(e){this.parentNode.insertBefore(e,this)})):e},after:function(){var e=this
return e[0]&&e[0].parentNode?Pa(e,arguments,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}),!0):e},appendTo:function(e){return Qa(e).append(this),this},prependTo:function(e){return Qa(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return Ia(this,e)},wrapAll:function(e){return Ia(this,e,!0)},wrapInner:function(e){return this.each((function(){Qa(this).contents().wrapAll(e)})),this},unwrap:function(){return this.parent().each((function(){Qa(this).replaceWith(this.childNodes)}))},clone:function(){var e=[]
return this.each((function(){e.push(this.cloneNode(!0))})),Qa(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this
return"string"!=typeof e||(-1!==e.indexOf(" ")?Wa(e.split(" "),(function(){n.toggleClass(this,t)})):n.each((function(n,r){var o=La(r,e)
if(o!==t){var i=r.className
o?r.className=$a((" "+i+" ").replace(" "+e+" "," ")):r.className+=i?" "+e:e}}))),n},hasClass:function(e){return La(this[0],e)},each:function(e){return Wa(this,e)},on:function(e,t){return this.each((function(){Ra.bind(this,e,t)}))},off:function(e,t){return this.each((function(){Ra.unbind(this,e,t)}))},trigger:function(e){return this.each((function(){"object"==typeof e?Ra.fire(this,e.type,e):Ra.fire(this,e)}))},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return Qa(_a.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[]
for(t=0,n=this.length;t<n;t++)Qa.find(e,this[t],r)
return Qa(r)},filter:function(e){return Qa("function"==typeof e?Ka(this.toArray(),(function(t,n){return e(n,t)})):Qa.filter(e,this.toArray()))},closest:function(e){var t=[]
return e instanceof Qa&&(e=e[0]),this.each((function(n,r){for(;r;){if("string"==typeof e&&Qa(r).is(e)){t.push(r)
break}if(r===e){t.push(r)
break}r=r.parentNode}})),Qa(t)},offset:function(e){var t,n,r,o,i=0,a=0
return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:ka,sort:Array.prototype.sort,splice:Array.prototype.splice},wt.extend(Va,{extend:wt.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:wt.toArray(e)
var t},inArray:function(e,t){var n
if(t.indexOf)return t.indexOf(e)
for(n=t.length;n--;)if(t[n]===e)return n
return-1},isArray:wt.isArray,each:Wa,trim:$a,grep:Ka,find:da,expr:da.selectors,unique:da.uniqueSort,text:da.getText,contains:da.contains,filter:function(e,t,n){var r=t.length
for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1)
return t=1===t.length?Qa.find.matchesSelector(t[0],e)?[t[0]]:[]:Qa.find.matches(e,t)}})
var Ya=function(e,t,n){var r=[],o=e[t]
for("string"!=typeof n&&n instanceof Qa&&(n=n[0]);o&&9!==o.nodeType;){if(void 0!==n){if(o===n)break
if("string"==typeof n&&Qa(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},Ga=function(e,t,n,r){var o=[]
for(r instanceof Qa&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(void 0!==r){if(e===r)break
if("string"==typeof r&&Qa(e).is(r))break}o.push(e)}return o},Ja=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e
return null}
Wa({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return Ya(e,"parentNode")},next:function(e){return Ja(e,"nextSibling",1)},prev:function(e){return Ja(e,"previousSibling",1)},children:function(e){return Ga(e.firstChild,"nextSibling",1)},contents:function(e){return wt.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},(function(e,t){Va.fn[e]=function(n){var r=[]
this.each((function(){var e=t.call(r,this,n,r)
e&&(Qa.isArray(e)?r.push.apply(r,e):r.push(e))})),this.length>1&&(Ta[e]||(r=Qa.unique(r)),0===e.indexOf("parents")&&(r=r.reverse()))
var o=Qa(r)
return n?o.filter(n):o}})),Wa({parentsUntil:function(e,t){return Ya(e,"parentNode",t)},nextUntil:function(e,t){return Ga(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return Ga(e,"previousSibling",1,t).slice(1)}},(function(e,t){Va.fn[e]=function(n,r){var o=[]
this.each((function(){var e=t.call(o,this,n,o)
e&&(Qa.isArray(e)?o.push.apply(o,e):o.push(e))})),this.length>1&&(o=Qa.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse()))
var i=Qa(o)
return r?i.filter(r):i}})),Va.fn.is=function(e){return!!e&&this.filter(e).length>0},Va.fn.init.prototype=Va.fn,Va.overrideDefaults=function(e){var t,n=function(r,o){return t=t||e(),0===arguments.length&&(r=t.element),o||(o=t.context),new n.fn.init(r,o)}
return Qa.extend(n,this),n},Va.attrHooks=ja,Va.cssHooks=Ha
var Qa=Va,Za=wt.each,eu=wt.grep,tu=ht.ie,nu=/^([a-z0-9],?)+$/i,ru=function(e,t){var n=t.attr("style"),r=e.serialize(e.parse(n),t[0].nodeName)
r||(r=null),t.attr("data-mce-style",r)},ou=function(e,t){var n,r,o=0
if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r)
return o},iu=function(e,t){void 0===t&&(t={})
var n={},r=window,o={},i=0,a=Gr.forElement(St.fromDom(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),c=[],s=t.schema?t.schema:yi({}),f=Ci({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),l=t.ownEvents?new Ri:Ri.Event,d=s.getBlockElements(),m=Qa.overrideDefaults((function(){return{context:e,element:V.getRoot()}})),p=function(t){return t&&e&&E(t)?e.getElementById(t):t},g=function(e){return m("string"==typeof e?p(e):e)},h=function(e,t,n){var r,o,i=g(e)
return i.length&&(o=(r=q[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},v=function(e){var t=p(e)
return t?t.attributes:[]},y=function(e,n,r){""===r&&(r=null)
var o=g(e),i=o.attr(n)
if(o.length){var a=q[n]
a&&a.set?a.set(o,r,n):o.attr(n,r),i!==r&&t.onSetAttrib&&t.onSetAttrib({attrElm:o,attrName:n,attrValue:r})}},b=function(){return t.root_element||e.body},C=function(t,n){return nr(e.body,p(t),n)},w=function(e,t,n){var r=g(e)
return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()})))&&(t=ht.browser.isIE()?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:void 0)},x=function(e){var t,n
return e=p(e),t=w(e,"width"),n=w(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},S=function(e,t){var n
if(!e)return!1
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(nu.test(t)){var r=t.toLowerCase().split(/,/),o=e.nodeName.toLowerCase()
for(n=r.length-1;n>=0;n--)if(r[n]===o)return!0
return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e]
return da(t,i[0].ownerDocument||i[0],null,i).length>0},N=function(e,t,n,r){var o,i=[],a=p(e)
for(r=void 0===r,n=n||("BODY"!==b().nodeName?b().parentNode:null),wt.is(t,"string")&&(o=t,t="*"===t?function(e){return 1===e.nodeType}:function(e){return S(e,o)});a&&!(a===n||D(a.nodeType)||Bn(a)||Pn(a));){if(!t||"function"==typeof t&&t(a)){if(!r)return[a]
i.push(a)}a=a.parentNode}return r?i:null},k=function(e,t,n){var r=t
if(e)for("string"==typeof t&&(r=function(e){return S(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e
return null},_=function(e,t,n){var r,o="string"==typeof e?p(e):e
if(!o)return!1
if(wt.isArray(o)&&(o.length||0===o.length))return r=[],Za(o,(function(e,o){e&&r.push(t.call(n,"string"==typeof e?p(e):e,o))})),r
var i=n||this
return t.call(i,o)},A=function(e,t){g(e).each((function(e,n){Za(t,(function(e,t){y(n,t,e)}))}))},R=function(e,t){var n=g(e)
tu?n.each((function(e,n){if(!1!==n.canHaveHTML){for(;n.firstChild;)n.removeChild(n.firstChild)
try{n.innerHTML="<br>"+t,n.removeChild(n.firstChild)}catch(r){Qa("<div></div>").html("<br>"+t).contents().slice(1).appendTo(n)}return t}})):n.html(t)},T=function(t,n,r,o,i){return _(t,(function(t){var a="string"==typeof n?e.createElement(n):n
return A(a,r),o&&("string"!=typeof o&&o.nodeType?a.appendChild(o):"string"==typeof o&&R(a,o)),i?a:t.appendChild(a)}))},O=function(t,n,r){return T(e.createElement(t),t,n,r,!0)},B=ci.encodeAllRaw,P=function(e,t){var n=g(e)
return t?n.each((function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)})).remove():n.remove(),n.length>1?n.toArray():n[0]},L=function(e,t,n){g(e).toggleClass(t,n).each((function(){""===this.className&&Qa(this).attr("class",null)}))},I=function(e,t,n){return _(t,(function(t){return wt.is(t,"array")&&(e=e.cloneNode(!0)),n&&Za(eu(t.childNodes),(function(t){e.appendChild(t)})),t.parentNode.replaceChild(e,t)}))},M=function(e){if(Sn(e)){var t="a"===e.nodeName.toLowerCase()&&!h(e,"href")&&h(e,"id")
if(h(e,"name")||h(e,"data-mce-bookmark")||t)return!0}return!1},F=function(){return e.createRange()},U=function(n,o,i,a){if(wt.isArray(n)){for(var u=n.length,s=[];u--;)s[u]=U(n[u],o,i,a)
return s}return!t.collect||n!==e&&n!==r||c.push([n,o,i,a]),l.bind(n,o,i,a||V)},z=function(t,n,o){if(wt.isArray(t)){for(var i=t.length,a=[];i--;)a[i]=z(t[i],n,o)
return a}if(c.length>0&&(t===e||t===r))for(i=c.length;i--;){var u=c[i]
t!==u[0]||n&&n!==u[1]||o&&o!==u[2]||l.unbind(u[0],u[1],u[2])}return l.unbind(t,n,o)},j=function(e){if(e&&Sn(e)){var t=e.getAttribute("data-mce-contenteditable")
return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},V={doc:e,settings:t,win:r,files:o,stdMode:!0,boxModel:!0,styleSheetLoader:a,boundEvents:c,styles:f,schema:s,events:l,isBlock:function(e){if("string"==typeof e)return!!d[e]
if(e){var t=e.nodeType
if(t)return!(1!==t||!d[e.nodeName])}return!1},$:m,$$:g,root:null,clone:function(t,n){if(!tu||1!==t.nodeType||n)return t.cloneNode(n)
var r=e.createElement(t.nodeName)
return Za(v(t),(function(e){y(r,e.nodeName,h(t,e.nodeName))})),r},getRoot:b,getViewPort:function(e){var t=Cn(e)
return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:function(e){e=p(e)
var t=C(e),n=x(e)
return{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:x,getParent:function(e,t,n){var r=N(e,t,n,!1)
return r&&r.length>0?r[0]:null},getParents:N,get:p,getNext:function(e,t){return k(e,t,"nextSibling")},getPrev:function(e,t){return k(e,t,"previousSibling")},select:function(n,r){return da(n,p(r)||t.root_element||e,[])},is:S,add:T,create:O,createHTML:function(e,t,n){var r,o=""
for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&void 0!==t[r]&&(o+=" "+r+'="'+B(t[r])+'"')
return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(t){var n,r=e.createElement("div"),o=e.createDocumentFragment()
for(o.appendChild(r),t&&(r.innerHTML=t);n=r.firstChild;)o.appendChild(n)
return o.removeChild(r),o},remove:P,setStyle:function(e,n,r){var o=E(n)?g(e).css(n,r):g(e).css(n)
t.update_styles&&ru(f,o)},getStyle:w,setStyles:function(e,n){var r=g(e).css(n)
t.update_styles&&ru(f,r)},removeAllAttribs:function(e){return _(e,(function(e){var t,n=e.attributes
for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))}))},setAttrib:y,setAttribs:A,getAttrib:h,getPos:C,parseStyle:function(e){return f.parse(e)},serializeStyle:function(e,t){return f.serialize(e,t)},addStyle:function(t){var r,o
if(V!==iu.DOM&&e===document){if(n[t])return
n[t]=!0}(o=e.getElementById("mceDefaultStyles"))||((o=e.createElement("style")).id="mceDefaultStyles",o.type="text/css",(r=e.getElementsByTagName("head")[0]).firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),o.styleSheet?o.styleSheet.cssText+=t:o.appendChild(e.createTextNode(t))},loadCSS:function(e){e||(e=""),H(e.split(","),(function(e){o[e]=!0,a.load(e,u)}))},addClass:function(e,t){g(e).addClass(t)},removeClass:function(e,t){L(e,t,!1)},hasClass:function(e,t){return g(e).hasClass(t)},toggleClass:L,show:function(e){g(e).show()},hide:function(e){g(e).hide()},isHidden:function(e){return"none"===g(e).css("display")},uniqueId:function(e){return(e||"mce_")+i++},setHTML:R,getOuterHTML:function(e){var t="string"==typeof e?p(e):e
return Sn(t)?t.outerHTML:Qa("<div></div>").append(Qa(t).clone()).html()},setOuterHTML:function(e,t){g(e).each((function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}P(Qa(this).html(t),!0)}))},decode:ci.decode,encode:B,insertAfter:function(e,t){var n=p(t)
return _(e,(function(e){var t=n.parentNode,r=n.nextSibling
return r?t.insertBefore(e,r):t.appendChild(e),e}))},replace:I,rename:function(e,t){var n
return e.nodeName!==t.toUpperCase()&&(n=O(t),Za(v(e),(function(t){y(n,t.nodeName,h(e,t.nodeName))})),I(n,e,!0)),n||e},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode
if(r===n)break
r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return f.toHex(wt.trim(e))},run:_,getAttribs:v,isEmpty:function(e,t){var n,r,o=0
if(M(e))return!1
if(e=e.firstChild){var i=new Jr(e,e.parentNode),a=s?s.getWhiteSpaceElements():{}
t=t||(s?s.getNonEmptyElements():null)
do{if(n=e.nodeType,Sn(e)){var u=e.getAttribute("data-mce-bogus")
if(u){e=i.next("all"===u)
continue}if(r=e.nodeName.toLowerCase(),t&&t[r]){if("br"===r){o++,e=i.next()
continue}return!1}if(M(e))return!1}if(8===n)return!1
if(3===n&&!Fo(e.nodeValue))return!1
if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&Fo(e.nodeValue))return!1
e=i.next()}while(e)}return o<=1},createRng:F,nodeIndex:ou,split:function(e,t,n){var r,o,i,a=F()
if(e&&t)return a.setStart(e.parentNode,ou(e)),a.setEnd(t.parentNode,ou(t)),r=a.extractContents(),(a=F()).setStart(t.parentNode,ou(t)+1),a.setEnd(e.parentNode,ou(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(Xo(V,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(Xo(V,o),e),P(e),n||t},bind:U,unbind:z,fire:function(e,t,n){return l.fire(e,t,n)},getContentEditable:j,getContentEditableParent:function(e){for(var t=b(),n=null;e&&e!==t&&null===(n=j(e));e=e.parentNode);return n},destroy:function(){if(c.length>0)for(var e=c.length;e--;){var t=c[e]
l.unbind(t[0],t[1],t[2])}ie(o,(function(e,t){a.unload(t),delete o[t]})),da.setDocument&&da.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0
e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}},q=function(e,t,n){var r=t.keep_values,o={set:function(e,r,o){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||n(),r,o,e[0])),e.attr("data-mce-"+o,r).attr(o,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},i={style:{set:function(t,n){null===n||"object"!=typeof n?(r&&t.attr("data-mce-style",n),null!==n&&"string"==typeof n?(t.removeAttr("style"),t.css(e.parse(n))):t.attr("style",n)):t.css(n)},get:function(t){var n=t.attr("data-mce-style")||t.attr("style")
return e.serialize(e.parse(n),t[0].nodeName)}}}
return r&&(i.href=i.src=o),i}(f,t,(function(){return V}))
return V}
iu.DOM=iu(document),iu.nodeIndex=ou
var au=iu.DOM,uu=wt.each,cu=wt.grep,su=function(){function e(e){void 0===e&&(e={}),this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=0,this.settings=e}return e.prototype._setReferrerPolicy=function(e){this.settings.referrerPolicy=e},e.prototype.loadScript=function(e,t,n){var r,o=au,i=function(){o.remove(a),r&&(r.onerror=r.onload=r=null)},a=o.uniqueId();(r=document.createElement("script")).id=a,r.type="text/javascript",r.src=wt._addCacheSuffix(e),this.settings.referrerPolicy&&o.setAttrib(r,"referrerpolicy",this.settings.referrerPolicy),r.onload=function(){i(),t()},r.onerror=function(){i(),B(n)?n():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(r)},e.prototype.isDone=function(e){return 2===this.states[e]},e.prototype.markDone=function(e){this.states[e]=2},e.prototype.add=function(e,t,n,r){var o=this.states[e]
this.queue.push(e),void 0===o&&(this.states[e]=0),t&&(this.scriptLoadedCallbacks[e]||(this.scriptLoadedCallbacks[e]=[]),this.scriptLoadedCallbacks[e].push({success:t,failure:r,scope:n||this}))},e.prototype.load=function(e,t,n,r){return this.add(e,t,n,r)},e.prototype.remove=function(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]},e.prototype.loadQueue=function(e,t,n){this.loadScripts(this.queue,e,t,n)},e.prototype.loadScripts=function(e,t,n,r){var o=this,i=[],a=function(e,t){uu(o.scriptLoadedCallbacks[t],(function(t){B(t[e])&&t[e].call(t.scope)})),o.scriptLoadedCallbacks[t]=void 0}
o.queueLoadedCallbacks.push({success:t,failure:r,scope:n||this})
var u=function(){var t=cu(e)
if(e.length=0,uu(t,(function(e){2!==o.states[e]?3!==o.states[e]?1!==o.states[e]&&(o.states[e]=1,o.loading++,o.loadScript(e,(function(){o.states[e]=2,o.loading--,a("success",e),u()}),(function(){o.states[e]=3,o.loading--,i.push(e),a("failure",e),u()}))):a("failure",e):a("success",e)})),!o.loading){var n=o.queueLoadedCallbacks.slice(0)
o.queueLoadedCallbacks.length=0,uu(n,(function(e){0===i.length?B(e.success)&&e.success.call(e.scope):B(e.failure)&&e.failure.call(e.scope,i)}))}}
u()},e.ScriptLoader=new e,e}(),fu=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},lu={},du=fu("en"),mu=function(){return me(lu,du.get())},pu={getData:function(){return ae(lu,(function(e){return Ne({},e)}))},setCode:function(e){e&&du.set(e)},getCode:function(){return du.get()},add:function(e,t){var n=lu[e]
n||(lu[e]=n={}),ie(t,(function(e,t){n[t.toLowerCase()]=e}))},translate:function(e){var t,n=mu().getOr({}),r=function(e){return B(e)?Object.prototype.toString.call(e):o(e)?"":""+e},o=function(e){return""===e||null==e},i=function(e){var t=r(e)
return me(n,t.toLowerCase()).map(r).getOr(t)},a=function(e){return e.replace(/{context:\w+}$/,"")}
if(o(e))return""
if(k(t=e)&&pe(t,"raw"))return r(e.raw)
if(function(e){return _(e)&&e.length>1}(e)){var u=e.slice(1)
return a(i(e[0]).replace(/\{([0-9]+)\}/g,(function(e,t){return pe(u,t)?r(u[t]):e})))}return a(i(e))},isRtl:function(){return mu().bind((function(e){return me(e,"_dir")})).exists((function(e){return"rtl"===e}))},hasCode:function(e){return pe(lu,e)}},gu=function(){var e=[],t={},n={},r=[],o=function(e,t){var n=q(r,(function(n){return n.name===e&&n.state===t}))
H(n,(function(e){return e.callback()}))},i=function(e){var t
return n[e]&&(t=n[e].dependencies),t||[]},a=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},u=function(e,r,c,s,f){if(!t[e]){var l="string"==typeof r?r:r.prefix+r.resource+r.suffix
0!==l.indexOf("/")&&-1===l.indexOf("://")&&(l=gu.baseURL+"/"+l),t[e]=l.substring(0,l.lastIndexOf("/"))
var d=function(){o(e,"loaded"),function(e,t,n,r){var o=i(e)
H(o,(function(e){var n=a(t,e)
u(n.resource,n,void 0,void 0)})),n&&(r?n.call(r):n.call(su))}(e,r,c,s)}
n[e]?d():su.ScriptLoader.add(l,d,s,f)}},c=function(e,o,i){void 0===i&&(i="added"),pe(n,e)&&"added"===i||pe(t,e)&&"loaded"===i?o():r.push({name:e,state:i,callback:o})}
return{items:e,urls:t,lookup:n,_listeners:r,get:function(e){if(n[e])return n[e].instance},dependencies:i,requireLangPack:function(e,n){!1!==gu.languageLoad&&c(e,(function(){var r=pu.getCode()
!r||n&&-1===(","+(n||"")+",").indexOf(","+r+",")||su.ScriptLoader.add(t[e]+"/langs/"+r+".js")}),"loaded")},add:function(t,r,i){var a=r
return e.push(a),n[t]={instance:a,dependencies:i},o(t,"added"),a},remove:function(e){delete t[e],delete n[e]},createUrl:a,addComponents:function(e,n){var r=t[e]
H(n,(function(e){su.ScriptLoader.add(r+"/"+e)}))},load:u,waitFor:c}}
gu.languageLoad=!0,gu.baseURL="",gu.PluginManager=gu(),gu.ThemeManager=gu()
var hu=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null===n&&(n=setTimeout((function(){e.apply(null,r),n=null}),t))}}},vu=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null!==n&&clearTimeout(n),n=setTimeout((function(){e.apply(null,r),n=null}),t)}}},yu=function(e,t){var n=$n(e,t)
return void 0===n||""===n?[]:n.split(" ")},bu=function(e){return void 0!==e.dom.classList},Cu=function(e,t){return function(e,t,n){var r=yu(e,t).concat([n])
return Vn(e,t,r.join(" ")),!0}(e,"class",t)},wu=function(e,t){return function(e,t,n){var r=q(yu(e,t),(function(e){return e!==n}))
return r.length>0?Vn(e,t,r.join(" ")):Kn(e,t),!1}(e,"class",t)},xu=function(e,t){bu(e)?e.dom.classList.add(t):Cu(e,t)},Su=function(e){0===(bu(e)?e.dom.classList:function(e){return yu(e,"class")}(e)).length&&Kn(e,"class")},Nu=function(e,t){return bu(e)&&e.dom.classList.contains(t)},Eu=function(e,t){var n=[]
return H($t(e),(function(e){t(e)&&(n=n.concat([e])),n=n.concat(Eu(e,t))})),n},ku=function(e,t){return function(e,t){var n=void 0===t?document:t.dom
return kt(n)?[]:j(n.querySelectorAll(e),St.fromDom)}(t,e)},_u=s("mce-annotation"),Au=s("data-mce-annotation"),Ru=s("data-mce-annotation-uid"),Tu=function(e,t){var n=e.selection.getRng(),r=St.fromDom(n.startContainer),o=St.fromDom(e.getBody()),i=t.fold((function(){return"."+_u()}),(function(e){return"["+Au()+'="'+e+'"]'})),a=Wt(r,n.startOffset).getOr(r),u=Vr(a,i,(function(e){return _t(e,o)})),c=function(e,t){return function(e,t){var n=e.dom
return!(!n||!n.hasAttribute)&&n.hasAttribute(t)}(e,t)?w.some($n(e,t)):w.none()}
return u.bind((function(t){return c(t,""+Ru()).bind((function(n){return c(t,""+Au()).map((function(t){var r=Du(e,n)
return{uid:n,name:t,elements:r}}))}))}))},Du=function(e,t){var n=St.fromDom(e.getBody())
return ku(n,"["+Ru()+'="'+t+'"]')},Ou=function(e,t){var n=fu({}),r=function(e,t){o(e,(function(e){return t(e),e}))},o=function(e,t){var r=n.get(),o=t(r.hasOwnProperty(e)?r[e]:{listeners:[],previous:fu(w.none())})
r[e]=o,n.set(r)},i=vu((function(){var t,i,a,u=n.get(),c=(t=re(u),(a=L.call(t,0)).sort(i),a)
H(c,(function(t){o(t,(function(n){var o=n.previous.get()
return Tu(e,w.some(t)).fold((function(){o.isSome()&&(function(e){r(e,(function(t){H(t.listeners,(function(t){return t(!1,e)}))}))}(t),n.previous.set(w.none()))}),(function(e){var t=e.uid,i=e.name,a=e.elements
o.is(t)||(function(e,t,n){r(e,(function(r){H(r.listeners,(function(r){return r(!0,e,{uid:t,nodes:j(n,(function(e){return e.dom}))})}))}))}(i,t,a),n.previous.set(w.some(t)))})),{previous:n.previous,listeners:n.listeners}}))}))}),30)
e.on("remove",(function(){i.cancel()})),e.on("NodeChange",(function(){i.throttle()}))
return{addListener:function(e,t){o(e,(function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}}))}}},Bu=function(e,t){e.on("init",(function(){e.serializer.addNodeFilter("span",(function(e){H(e,(function(e){(function(e){return w.from(e.attr(Au())).bind(t.lookup)})(e).each((function(t){!1===t.persistent&&e.unwrap()}))}))}))}))},Pu=0,Lu=function(e){var t=(new Date).getTime()
return e+"_"+Math.floor(1e9*Math.random())+ ++Pu+String(t)},Iu=function(e,t){var n,r,o=Mt(e).dom,i=St.fromDom(o.createDocumentFragment()),a=(n=t,(r=(o||document).createElement("div")).innerHTML=n,$t(St.fromDom(r)))
un(i,a),cn(e),an(e,i)},Mu=function(e,t){return St.fromDom(e.dom.cloneNode(t))},Fu=function(e){return Mu(e,!1)},Uu=function(e){return Mu(e,!0)},zu=function(e,t,n){void 0===n&&(n=h)
var r=new Jr(e,t),o=function(e){var t
do{t=r[e]()}while(t&&!Dn(t)&&!n(t))
return w.from(t).filter(Dn)}
return{current:function(){return w.from(r.current()).filter(Dn)},next:function(){return o("next")},prev:function(){return o("prev")},prev2:function(){return o("prev2")}}},ju=function(e,t){var n=t||function(t){return e.isBlock(t)||Ln(t)||Fn(t)},r=function(e,t,n,o){if(Dn(e)){var i=o(e,t,e.data)
if(-1!==i)return w.some({container:e,offset:i})}return n().bind((function(e){return r(e.container,e.offset,n,o)}))}
return{backwards:function(e,t,o,i){var a=zu(e,i,n)
return r(e,t,(function(){return a.prev().map((function(e){return{container:e,offset:e.length}}))}),o).getOrNull()},forwards:function(e,t,o,i){var a=zu(e,i,n)
return r(e,t,(function(){return a.next().map((function(e){return{container:e,offset:0}}))}),o).getOrNull()}}},Hu=function(e,t,n){return e.isSome()&&t.isSome()?w.some(n(e.getOrDie(),t.getOrDie())):w.none()},Vu=Math.round,qu=function(e){return e?{left:Vu(e.left),top:Vu(e.top),bottom:Vu(e.bottom),right:Vu(e.right),width:Vu(e.width),height:Vu(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},$u=function(e,t){return e=qu(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},Wu=function(e,t,n){return e>=0&&e<=Math.min(t.height,n.height)/2},Ku=function(e,t){var n=Math.min(t.height/2,e.height/2)
return e.bottom-n<t.top||!(e.top>t.bottom)&&Wu(t.top-e.bottom,e,t)},Xu=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&Wu(t.bottom-e.top,e,t)},Yu=function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom},Gu=function(e){var t=e.startContainer,n=e.startOffset
return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},Ju=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},Qu=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"),Zu=function(e){return"string"==typeof e&&e.charCodeAt(0)>=768&&Qu.test(e)},ec=Sn,tc=Po,nc=En("display","block table"),rc=En("float","left right"),oc=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1
return!0}}(ec,tc,d(rc)),ic=d(En("white-space","pre pre-line pre-wrap")),ac=Dn,uc=Ln,cc=iu.nodeIndex,sc=Ju,fc=function(e){return"createRange"in e?e.createRange():iu.DOM.createRng()},lc=function(e){return e&&/[\r\n\t ]/.test(e)},dc=function(e){return!!e.setStart&&!!e.setEnd},mc=function(e){var t,n=e.startContainer,r=e.startOffset
return!!(lc(e.toString())&&ic(n.parentNode)&&Dn(n)&&(t=n.data,lc(t[r-1])||lc(t[r+1])))},pc=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},gc=function(e){var t,n=e.getClientRects()
return t=n.length>0?qu(n[0]):qu(e.getBoundingClientRect()),!dc(e)&&uc(e)&&pc(t)?function(e){var t=e.ownerDocument,n=fc(t),r=t.createTextNode(so),o=e.parentNode
o.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1)
var i=qu(n.getBoundingClientRect())
return o.removeChild(r),i}(e):pc(t)&&dc(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset
if(t===n&&Dn(n)&&0===r&&1===o){var i=e.cloneRange()
return i.setEndAfter(n),gc(i)}return null}(e):t},hc=function(e,t){var n=$u(e,t)
return n.width=1,n.right=n.left+1,n},vc=function(e){var t,n,r=[],o=function(e){var t,n
0!==e.height&&(r.length>0&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=fc(e.ownerDocument)
if(t<e.data.length){if(Zu(e.data[t]))return r
if(Zu(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!mc(n)))return o(hc(gc(n),!1)),r}t>0&&(n.setStart(e,t-1),n.setEnd(e,t),mc(n)||o(hc(gc(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),mc(n)||o(hc(gc(n),!0)))}
if(ac(e.container()))return i(e.container(),e.offset()),r
if(ec(e.container()))if(e.isAtEnd())n=sc(e.container(),e.offset()),ac(n)&&i(n,n.data.length),oc(n)&&!uc(n)&&o(hc(gc(n),!1))
else{if(n=sc(e.container(),e.offset()),ac(n)&&i(n,0),oc(n)&&e.isAtEnd())return o(hc(gc(n),!1)),r
t=sc(e.container(),e.offset()-1),oc(t)&&!uc(t)&&(nc(t)||nc(n)||!oc(n))&&o(hc(gc(t),!1)),oc(n)&&o(hc(gc(n),!0))}return r},yc=function(e,t,n){var r=function(){return n||(n=vc(yc(e,t))),n}
return{container:s(e),offset:s(t),toRange:function(){var n=fc(e.ownerDocument)
return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:r,isVisible:function(){return r().length>0},isAtStart:function(){return ac(e),0===t},isAtEnd:function(){return ac(e)?t>=e.data.length:t>=e.childNodes.length},isEqual:function(n){return n&&e===n.container()&&t===n.offset()},getNode:function(n){return sc(e,n?t-1:t)}}}
yc.fromRangeStart=function(e){return yc(e.startContainer,e.startOffset)},yc.fromRangeEnd=function(e){return yc(e.endContainer,e.endOffset)},yc.after=function(e){return yc(e.parentNode,cc(e)+1)},yc.before=function(e){return yc(e.parentNode,cc(e))},yc.isAbove=function(e,t){return Hu(ee(t.getClientRects()),te(e.getClientRects()),Ku).getOr(!1)},yc.isBelow=function(e,t){return Hu(te(t.getClientRects()),ee(e.getClientRects()),Xu).getOr(!1)},yc.isAtStart=function(e){return!!e&&e.isAtStart()},yc.isAtEnd=function(e){return!!e&&e.isAtEnd()},yc.isTextPosition=function(e){return!!e&&Dn(e.container())},yc.isElementPosition=function(e){return!1===yc.isTextPosition(e)}
var bc,Cc=function(e,t){Dn(t)&&0===t.data.length&&e.remove(t)},wc=function(e,t,n){Pn(n)?function(e,t,n){var r=w.from(n.firstChild),o=w.from(n.lastChild)
t.insertNode(n),r.each((function(t){return Cc(e,t.previousSibling)})),o.each((function(t){return Cc(e,t.nextSibling)}))}(e,t,n):function(e,t,n){t.insertNode(n),Cc(e,n.previousSibling),Cc(e,n.nextSibling)}(e,t,n)},xc=Dn,Sc=_n,Nc=iu.nodeIndex,Ec=function(e){var t=e.parentNode
return Sc(t)?Ec(t):t},kc=function(e){return e?we(e.childNodes,(function(e,t){return Sc(t)&&"BR"!==t.nodeName?e=e.concat(kc(t)):e.push(t),e}),[]):[]},_c=function(e){return function(t){return e===t}},Ac=function(e){return(xc(e)?"text()":e.nodeName.toLowerCase())+"["+function(e){var t,n
t=kc(Ec(e)),n=xe(t,_c(e),e),t=t.slice(0,n+1)
var r=we(t,(function(e,n,r){return xc(n)&&xc(t[r-1])&&e++,e}),0)
return t=be(t,Nn([e.nodeName])),(n=xe(t,_c(e),e))-r}(e)+"]"},Rc=function(e,t){var n,r,o,i,a,u=[]
return n=t.container(),r=t.offset(),xc(n)?o=function(e,t){for(;(e=e.previousSibling)&&xc(e);)t+=e.data.length
return t}(n,r):(r>=(i=n.childNodes).length?(o="after",r=i.length-1):o="before",n=i[r]),u.push(Ac(n)),a=function(e,t,n){var r=[]
for(t=t.parentNode;!(t===e||n&&n(t));t=t.parentNode)r.push(t)
return r}(e,n),a=be(a,d(_n)),(u=u.concat(ye(a,(function(e){return Ac(e)})))).reverse().join("/")+","+o},Tc=function(e,t){var n
if(!t)return null
var r=t.split(","),o=r[0].split("/")
n=r.length>1?r[1]:"before"
var i=we(o,(function(e,t){var n=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
return n?("text()"===n[1]&&(n[1]="#text"),function(e,t,n){var r=kc(e)
return r=be(r,(function(e,t){return!xc(e)||!xc(r[t-1])})),(r=be(r,Nn([t])))[n]}(e,n[1],parseInt(n[2],10))):null}),e)
return i?xc(i)?function(e,t){for(var n,r=e,o=0;xc(r);){if(n=r.data.length,t>=o&&t<=o+n){e=r,t-=o
break}if(!xc(r.nextSibling)){e=r,t=n
break}o+=n,r=r.nextSibling}return xc(e)&&t>e.data.length&&(t=e.data.length),yc(e,t)}(i,parseInt(n,10)):(n="after"===n?Nc(i)+1:Nc(i),yc(i.parentNode,n)):null},Dc=Fn,Oc=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],c=[],s=0,f=e.getRoot()
for(Dn(a)?c.push(n?function(e,t,n){var r,o
for(o=e(t.data.slice(0,n)).length,r=t.previousSibling;r&&Dn(r);r=r.previousSibling)o+=e(r.data).length
return o}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(s=1,u=Math.max(0,i.length-1)),c.push(e.nodeIndex(i[u],n)+s));a&&a!==f;a=a.parentNode)c.push(e.nodeIndex(a,n))
return c},Bc=function(e,t,n){var r=0
return wt.each(e.select(t),(function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++})),r},Pc=function(e,t){var n,r,o,i=t?"start":"end"
n=e[i+"Container"],r=e[i+"Offset"],Sn(n)&&"TR"===n.nodeName&&(n=(o=n.childNodes)[Math.min(t?r:r-1,o.length-1)])&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r))},Lc=function(e){return Pc(e,!0),Pc(e,!1),e},Ic=function(e,t){var n
if(Sn(e)&&(e=Ju(e,t),Dc(e)))return e
if(yo(e)){if(Dn(e)&&ho(e)&&(e=e.parentNode),n=e.previousSibling,Dc(n))return n
if(n=e.nextSibling,Dc(n))return n}},Mc=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng()
if(Dc(r)||"IMG"===o)return{name:o,index:Bc(n.dom,o,r)}
var a=function(e){return Ic(e.startContainer,e.startOffset)||Ic(e.endContainer,e.endOffset)}(i)
return a?{name:o=a.tagName,index:Bc(n.dom,o,a)}:function(e,t,n,r){var o=t.dom,i={}
return i.start=Oc(o,e,n,r,!0),t.isCollapsed()||(i.end=Oc(o,e,n,r,!1)),i}(e,n,t,i)},Fc=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},Uc=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName
if("IMG"===u)return{name:u,index:Bc(n,u,a)}
var c=Lc(r.cloneRange())
if(!i){c.collapse(!1)
var s=Fc(n,o+"_end",t)
wc(n,c,s)}(r=Lc(r)).collapse(!0)
var f=Fc(n,o+"_start",t)
return wc(n,r,f),e.moveToBookmark({id:o,keep:!0}),{id:o}},zc=function(e,t,n){return 2===t?Mc(mo,n,e):3===t?function(e){var t=e.getRng()
return{start:Rc(e.dom.getRoot(),yc.fromRangeStart(t)),end:Rc(e.dom.getRoot(),yc.fromRangeEnd(t))}}(e):t?function(e){return{rng:e.getRng()}}(e):Uc(e,!1)},jc=l(Mc,f,!0),Hc=iu.DOM,Vc=function(e,t,n){var r=e.getParam(t,n)
if(-1!==r.indexOf("=")){var o=e.getParam(t,"","hash")
return o.hasOwnProperty(e.id)?o[e.id]:n}return r},qc=function(e){return e.getParam("content_security_policy","")},$c=function(e){if(e.getParam("force_p_newlines",!1))return"p"
var t=e.getParam("forced_root_block","p")
return!1===t?"":!0===t?"p":t},Wc=function(e){return e.getParam("forced_root_block_attrs",{})},Kc=function(e){return e.getParam("automatic_uploads",!0,"boolean")},Xc=function(e){return e.getParam("images_reuse_filename",!1,"boolean")},Yc=function(e){return e.getParam("icons","","string")},Gc=function(e){return e.getParam("images_upload_url","","string")},Jc=function(e){return e.getParam("images_upload_base_path","","string")},Qc=function(e){return e.getParam("images_upload_credentials",!1,"boolean")},Zc=function(e){return e.getParam("images_upload_handler",null,"function")},es=function(e){return e.getParam("content_css_cors",!1,"boolean")},ts=function(e){return e.getParam("referrer_policy","","string")},ns=function(e){return e.getParam("language","en","string")},rs=function(e){return e.getParam("indent_use_margin",!1)},os=function(e){var t=e.getParam("font_css",[])
return _(t)?t:j(t.split(","),Le)},is=function(e){var t=e.getParam("object_resizing")
return!1!==t&&!ht.iOS&&(E(t)?t:"table,img,figure.image,div,video,iframe")},as=function(e){return e.getParam("event_root")},us=function(e){return e.getParam("theme")},cs=function(e){return e.getParam("validate")},ss=function(e){return!1!==e.getParam("inline_boundaries")},fs=function(e){return e.getParam("content_css_cors")},ls=function(e){return e.getParam("plugins","","string")},ds=Sn,ms=Dn,ps=function(e){var t=e.parentNode
t&&t.removeChild(e)},gs=function(e){var t=mo(e)
return{count:e.length-t.length,text:t}},hs=function(e){for(var t;-1!==(t=e.data.lastIndexOf(fo));)e.deleteData(t,1)},vs=function(e,t){return ws(e),t},ys=function(e,t){var n=t.container(),r=function(e,t){var n=F(e,t)
return-1===n?w.none():w.some(n)}(ne(n.childNodes),e).map((function(e){return e<t.offset()?yc(n,t.offset()-1):t})).getOr(t)
return ws(e),r},bs=function(e,t){return ms(e)&&t.container()===e?function(e,t){var n=gs(e.data.substr(0,t.offset())),r=gs(e.data.substr(t.offset()))
return(n.text+r.text).length>0?(hs(e),yc(e,t.offset()-n.count)):t}(e,t):vs(e,t)},Cs=function(e,t){return yc.isTextPosition(t)?bs(e,t):function(e,t){return t.container()===e.parentNode?ys(e,t):vs(e,t)}(e,t)},ws=function(e){ds(e)&&yo(e)&&(bo(e)?e.removeAttribute("data-mce-caret"):ps(e)),ms(e)&&(hs(e),0===e.data.length&&ps(e))},xs=ut().browser,Ss=Fn,Ns=zn,Es=Un,ks=function(e,t,n){var r,o,i,a,u,c=$u(t.getBoundingClientRect(),n)
return"BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,i=e.scrollTop||r.scrollTop):(u=e.getBoundingClientRect(),o=e.scrollLeft-u.left,i=e.scrollTop-u.top),c.left+=o,c.right+=o,c.top+=i,c.bottom+=i,c.width=1,(a=t.offsetWidth-t.clientWidth)>0&&(n&&(a*=-1),c.left+=a,c.right+=a),c},_s=function(e,t,n,r){var o,i,a=fu(w.none()),u=$c(e),c=u.length>0?u:"p",s=function(){(function(e){for(var t=ku(St.fromDom(e),"*[contentEditable=false],video,audio,embed,object"),n=0;n<t.length;n++){var r,o=t[n].dom,i=o.previousSibling
No(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(r.length-1,1)),i=o.nextSibling,So(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(0,1))}})(t),i&&(ws(i),i=null),a.get().each((function(e){Qa(e.caret).remove(),a.set(w.none())})),o&&(Xr.clearInterval(o),o=null)},f=function(){o=Xr.setInterval((function(){r()?Qa("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden"):Qa("div.mce-visual-caret",t).addClass("mce-visual-caret-hidden")}),500)}
return{show:function(e,r){var o,u
if(s(),Es(r))return null
if(!n(r))return i=function(e,t){var n,r=e.ownerDocument.createTextNode(fo),o=e.parentNode
if(t){if(n=e.previousSibling,go(n)){if(yo(n))return n
if(No(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,go(n)){if(yo(n))return n
if(So(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(r,e),u=r.ownerDocument.createRange(),Rs(i.nextSibling)?(u.setStart(i,0),u.setEnd(i,0)):(u.setStart(i,1),u.setEnd(i,1)),u
i=xo(c,r,e),o=ks(t,r,e),Qa(i).css("top",o.top)
var l=Qa('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(o).appendTo(t)[0]
return a.set(w.some({caret:l,element:r,before:e})),a.get().each((function(t){e&&Qa(t.caret).addClass("mce-visual-caret-before")})),f(),(u=r.ownerDocument.createRange()).setStart(i,0),u.setEnd(i,0),u},hide:s,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){a.get().each((function(e){var n=ks(t,e.element,e.before)
Qa(e.caret).css(Ne({},n))}))},destroy:function(){return Xr.clearInterval(o)}}},As=function(){return xs.isIE()||xs.isEdge()||xs.isFirefox()},Rs=function(e){return Ss(e)||Ns(e)},Ts=function(e){return Rs(e)||An(e)&&As()},Ds=Fn,Os=zn,Bs=En("display","block table table-cell table-caption list-item"),Ps=yo,Ls=ho,Is=Sn,Ms=Po,Fs=function(e){return e>0},Us=function(e){return e<0},zs=function(e,t){for(var n;n=e(t);)if(!Ls(n))return n
return null},js=function(e,t,n,r,o){var i=new Jr(e,r),a=Ds(e)||Ls(e)
if(Us(t)){if(a&&n(e=zs(i.prev.bind(i),!0)))return e
for(;e=zs(i.prev.bind(i),o);)if(n(e))return e}if(Fs(t)){if(a&&n(e=zs(i.next.bind(i),!0)))return e
for(;e=zs(i.next.bind(i),o);)if(n(e))return e}return null},Hs=function(e,t){for(;e&&e!==t;){if(Bs(e))return e
e=e.parentNode}return null},Vs=function(e,t,n){return Hs(e.container(),n)===Hs(t.container(),n)},qs=function(e,t){if(!t)return null
var n=t.container(),r=t.offset()
return Is(n)?n.childNodes[r+e]:null},$s=function(e,t){var n=t.ownerDocument.createRange()
return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},Ws=function(e,t,n){return Hs(t,e)===Hs(n,e)},Ks=function(e,t,n){var r,o
for(o=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[o],Ps(r)&&(r=r[o]),Ds(r)||Os(r)){if(Ws(t,r,n))return r
break}if(Ms(r))break
n=n.parentNode}return null},Xs=l($s,!0),Ys=l($s,!1),Gs=function(e,t,n){var r,o,i,a=l(Ks,!0,t),u=l(Ks,!1,t)
o=n.startContainer
var c=n.startOffset
if(ho(o)){if(Is(o)||(o=o.parentNode),"before"===(i=o.getAttribute("data-mce-caret"))&&(r=o.nextSibling,Ts(r)))return Xs(r)
if("after"===i&&(r=o.previousSibling,Ts(r)))return Ys(r)}if(!n.collapsed)return n
if(Dn(o)){if(Ps(o)){if(1===e){if(r=u(o))return Xs(r)
if(r=a(o))return Ys(r)}if(-1===e){if(r=a(o))return Ys(r)
if(r=u(o))return Xs(r)}return n}if(No(o)&&c>=o.data.length-1)return 1===e&&(r=u(o))?Xs(r):n
if(So(o)&&c<=1)return-1===e&&(r=a(o))?Ys(r):n
if(c===o.data.length)return(r=u(o))?Xs(r):n
if(0===c)return(r=a(o))?Ys(r):n}return n},Js=function(e,t){return w.from(qs(e?0:-1,t)).filter(Ds)},Qs=function(e,t,n){var r=Gs(e,t,n)
return-1===e?yc.fromRangeStart(r):yc.fromRangeEnd(r)},Zs=function(e){return w.from(e.getNode()).map(St.fromDom)},ef=function(e,t){for(;t=e(t);)if(t.isVisible())return t
return t},tf=function(e,t){var n=Vs(e,t)
return!(n||!Ln(e.getNode()))||n};(function(e){e[e.Backwards=-1]="Backwards",e[e.Forwards=1]="Forwards"})(bc||(bc={}))
var nf,rf=Fn,of=Dn,af=Sn,uf=Ln,cf=Po,sf=function(e){return Do(e)||function(e){return!!Lo(e)&&!0!==W(ne(e.getElementsByTagName("*")),(function(e,t){return e||ko(t)}),!1)}(e)},ff=Io,lf=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},df=function(e,t){if(Fs(e)){if(cf(t.previousSibling)&&!of(t.previousSibling))return yc.before(t)
if(of(t))return yc(t,0)}if(Us(e)){if(cf(t.nextSibling)&&!of(t.nextSibling))return yc.after(t)
if(of(t))return yc(t,t.data.length)}return Us(e)?uf(t)?yc.before(t):yc.after(t):yc.before(t)},mf=function(e,t,n){var r,o,i,a
if(!af(n)||!t)return null
if(t.isEqual(yc.after(n))&&n.lastChild){if(a=yc.after(n.lastChild),Us(e)&&cf(n.lastChild)&&af(n.lastChild))return uf(n.lastChild)?yc.before(n.lastChild):a}else a=t
var u=a.container(),c=a.offset()
if(of(u)){if(Us(e)&&c>0)return yc(u,--c)
if(Fs(e)&&c<u.length)return yc(u,++c)
r=u}else{if(Us(e)&&c>0&&(o=lf(u,c-1),cf(o)))return!sf(o)&&(i=js(o,e,ff,o))?of(i)?yc(i,i.data.length):yc.after(i):of(o)?yc(o,o.data.length):yc.before(o)
if(Fs(e)&&c<u.childNodes.length&&(o=lf(u,c),cf(o)))return uf(o)?function(e,t){var n=t.nextSibling
return n&&cf(n)?of(n)?yc(n,0):yc.before(n):mf(bc.Forwards,yc.after(t),e)}(n,o):!sf(o)&&(i=js(o,e,ff,o))?of(i)?yc(i,0):yc.before(i):of(o)?yc(o,0):yc.after(o)
r=o||a.getNode()}if((Fs(e)&&a.isAtEnd()||Us(e)&&a.isAtStart())&&(r=js(r,e,v,n,!0),ff(r,n)))return df(e,r)
o=js(r,e,ff,n)
var s=Se(q(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode
return n}(u,n),rf))
return!s||o&&s.contains(o)?o?df(e,o):null:a=Fs(e)?yc.after(s):yc.before(s)},pf=function(e){return{next:function(t){return mf(bc.Forwards,t,e)},prev:function(t){return mf(bc.Backwards,t,e)}}},gf=function(e){return yc.isTextPosition(e)?0===e.offset():Po(e.getNode())},hf=function(e){if(yc.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return Po(e.getNode(!0))},vf=function(e,t){return!yc.isTextPosition(e)&&!yc.isTextPosition(t)&&e.getNode()===t.getNode(!0)},yf=function(e,t,n){return e?!vf(t,n)&&(r=t,!(!yc.isTextPosition(r)&&Ln(r.getNode())))&&hf(t)&&gf(n):!vf(n,t)&&gf(t)&&hf(n)
var r},bf=function(e,t,n){var r=pf(t)
return w.from(e?r.next(n):r.prev(n))},Cf=function(e,t,n){return bf(e,t,n).bind((function(r){return Vs(n,r,t)&&yf(e,n,r)?bf(e,t,r):w.some(r)}))},wf=function(e,t,n,r){return Cf(e,t,n).bind((function(n){return r(n)?wf(e,t,n,r):w.some(n)}))},xf=function(e,t){var n,r=e?t.firstChild:t.lastChild
return Dn(r)?w.some(yc(r,e?0:r.data.length)):r?Po(r)?w.some(e?yc.before(r):Ln(n=r)?yc.before(n):yc.after(n)):function(e,t,n){var r=e?yc.before(n):yc.after(n)
return bf(e,t,r)}(e,t,r):w.none()},Sf=l(bf,!0),Nf=l(bf,!1),Ef=l(xf,!0),kf=l(xf,!1),_f="_mce_caret",Af=function(e){return Sn(e)&&e.id===_f},Rf=function(e,t){for(;t&&t!==e;){if(t.id===_f)return t
t=t.parentNode}return null},Tf=function(e,t){return Sn(t)&&e.isBlock(t)&&!t.innerHTML&&!ht.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t},Df=function(e,t){return kf(e).fold(h,(function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0}))},Of=function(e,t,n){return!(!function(e){return!1===e.hasChildNodes()}(t)||!Rf(e,t))&&(function(e,t){var n=e.ownerDocument.createTextNode(fo)
e.appendChild(n),t.setStart(n,0),t.setEnd(n,0)}(t,n),!0)},Bf=function(e,t,n,r){var o,i,a,u,c=n[t?"start":"end"],s=e.getRoot()
if(c){for(a=c[0],i=s,o=c.length-1;o>=1;o--){if(u=i.childNodes,Of(s,i,r))return!0
if(c[o]>u.length-1)return!!Of(s,i,r)||Df(i,r)
i=u[c[o]]}3===i.nodeType&&(a=Math.min(c[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(c[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},Pf=function(e){return Dn(e)&&e.data.length>0},Lf=function(e,t,n){var r,o,i,a,u,c,s=e.get(n.id+"_"+t),f=n.keep
if(s){if(r=s.parentNode,"start"===t?(f?s.hasChildNodes()?(r=s.firstChild,o=1):Pf(s.nextSibling)?(r=s.nextSibling,o=0):Pf(s.previousSibling)?(r=s.previousSibling,o=s.previousSibling.data.length):(r=s.parentNode,o=e.nodeIndex(s)+1):o=e.nodeIndex(s),u=r,c=o):(f?s.hasChildNodes()?(r=s.firstChild,o=1):Pf(s.previousSibling)?(r=s.previousSibling,o=s.previousSibling.data.length):(r=s.parentNode,o=e.nodeIndex(s)):o=e.nodeIndex(s),u=r,c=o),!f){for(a=s.previousSibling,i=s.nextSibling,wt.each(wt.grep(s.childNodes),(function(e){Dn(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));s=e.get(n.id+"_"+t);)e.remove(s,!0)
a&&i&&a.nodeType===i.nodeType&&Dn(a)&&!ht.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,c=o)}return w.some(yc(u,c))}return w.none()},If=function(e,t){var n=e.dom
if(t){if(function(e){return wt.isArray(e.start)}(t))return function(e,t){var n=e.createRng()
return Bf(e,!0,t,n)&&Bf(e,!1,t,n)?w.some(n):w.none()}(n,t)
if(function(e){return E(e.start)}(t))return w.some(function(e,t){var n,r=e.createRng()
return n=Tc(e.getRoot(),t.start),r.setStart(n.container(),n.offset()),n=Tc(e.getRoot(),t.end),r.setEnd(n.container(),n.offset()),r}(n,t))
if(function(e){return e.hasOwnProperty("id")}(t))return function(e,t){var n=Lf(e,"start",t),r=Lf(e,"end",t)
return Hu(n,r.or(n),(function(t,n){var r=e.createRng()
return r.setStart(Tf(e,t.container()),t.offset()),r.setEnd(Tf(e,n.container()),n.offset()),r}))}(n,t)
if(function(e){return e.hasOwnProperty("name")}(t))return function(e,t){return w.from(e.select(t.name)[t.index]).map((function(t){var n=e.createRng()
return n.selectNode(t),n}))}(n,t)
if(function(e){return e.hasOwnProperty("rng")}(t))return w.some(t.rng)}return w.none()},Mf=function(e,t,n){return zc(e,t,n)},Ff=function(e,t){If(e,t).each((function(t){e.setRng(t)}))},Uf=function(e){return Sn(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},zf=(nf=so,function(e){return nf===e}),jf=function(e){return""!==e&&-1!==" \f\n\r\t\v".indexOf(e)},Hf=function(e){return!jf(e)&&!zf(e)},Vf=function(e){return!!e.nodeType},qf=function(e,t,n){var r,o,i,a=n.startOffset,u=n.startContainer
if((n.startContainer!==n.endContainer||!function(e){return e&&/^(IMG)$/.test(e.nodeName)}(n.startContainer.childNodes[n.startOffset]))&&1===u.nodeType)for(a<(i=u.childNodes).length?(u=i[a],r=new Jr(u,e.getParent(u,e.isBlock))):(u=i[i.length-1],(r=new Jr(u,e.getParent(u,e.isBlock))).next(!0)),o=r.current();o;o=r.next())if(3===o.nodeType&&!Xf(o))return n.setStart(o,0),void t.setRng(n)},$f=function(e,t,n){if(e){var r=t?"nextSibling":"previousSibling"
for(e=n?e:e[r];e;e=e[r])if(1===e.nodeType||!Xf(e))return e}},Wf=function(e,t){return Vf(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},Kf=function(e,t,n){return e.schema.isValidChild(t,n)},Xf=function(e,t){if(void 0===t&&(t=!1),O(e)&&Dn(e)){var n=t?e.data.replace(/ /g," "):e.data
return Fo(n)}return!1},Yf=function(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,(function(e,n){return t[n]||e}))),e},Gf=function(e,t){return t=t||"",e=""+((e=e||"").nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()===t.toLowerCase()},Jf=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},Qf=function(e,t,n){return Jf(e,e.getStyle(t,n),n)},Zf=function(e,t){var n
return e.getParent(t,(function(t){return(n=e.getStyle(t,"text-decoration"))&&"none"!==n})),n},el=function(e,t,n){return e.getParents(t,n,e.getRoot())},tl=function(e,t,n){var r=["inline","block","selector","attributes","styles","classes"],o=function(e){return le(e,(function(e,t){return z(r,(function(e){return e===t}))}))}
return z(e.formatter.get(t),(function(t){var r=o(t)
return z(e.formatter.get(n),(function(e){var t=o(e)
return function(e,t,n){return void 0===n&&(n=a),i(n).eq(e,t)}(r,t)}))}))},nl=function(e){return ge(e,"block")},rl=function(e){return ge(e,"selector")},ol=function(e){return ge(e,"inline")},il=Uf,al=el,ul=Xf,cl=Wf,sl=function(e,t){for(var n=t;n;){if(Sn(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t
n=n.parentNode}return t},fl=function(e,t,n,r){for(var o=t.data,i=n;e?i>=0:i<o.length;e?i--:i++)if(r(o.charAt(i)))return e?i+1:i
return-1},ll=function(e,t,n){return fl(e,t,n,(function(e){return zf(e)||jf(e)}))},dl=function(e,t,n){return fl(e,t,n,Hf)},ml=function(e,t,n,r,o,i){var a,u=e.getParent(n,e.isBlock)||t,c=function(t,n,r){var i=ju(e),c=o?i.backwards:i.forwards
return w.from(c(t,n,(function(e,t){return il(e.parentNode)?-1:(a=e,r(o,e,t))}),u))}
return c(n,r,ll).bind((function(e){return i?c(e.container,e.offset+(o?-1:0),dl):w.some(e)})).orThunk((function(){return a?w.some({container:a,offset:o?0:a.length}):w.none()}))},pl=function(e,t,n,r,o){Dn(r)&&0===r.nodeValue.length&&r[o]&&(r=r[o])
for(var i=al(e,r),a=0;a<i.length;a++)for(var u=0;u<t.length;u++){var c=t[u]
if((!("collapsed"in c)||c.collapsed===n.collapsed)&&e.is(i[a],c.selector))return i[a]}return r},gl=function(e,t,n,r){var o,i=e.dom,a=i.getRoot()
if(t[0].wrapper||(o=i.getParent(n,t[0].block,a)),!o){var u=i.getParent(n,"LI,TD,TH")
o=i.getParent(Dn(n)?n.parentNode:n,(function(t){return t!==a&&cl(e,t)}),u)}if(o&&t[0].wrapper&&(o=al(i,o,"ul,ol").reverse()[0]||o),!o)for(o=n;o[r]&&!i.isBlock(o[r])&&(o=o[r],!Gf(o,"br")););return o||n},hl=function(e,t,n,r){var o=n.parentNode
return!O(n[r])&&(!(o!==t&&!D(o)&&!e.isBlock(o))||hl(e,t,o,r))},vl=function(e,t,n,r,o){var i,a,u=n,c=o?"previousSibling":"nextSibling",s=e.getRoot()
if(Dn(n)&&!ul(n)&&(o?r>0:r<n.data.length))return n
for(;;){if(!t[0].block_expand&&e.isBlock(u))return u
for(i=u[c];i;i=i[c]){var f=Dn(i)&&!hl(e,s,i,c)
if(!il(i)&&(!Ln(a=i)||!a.getAttribute("data-mce-bogus")||a.nextSibling)&&!ul(i,f))return u}if(u===s||u.parentNode===s){n=u
break}u=u.parentNode}return n},yl=function(e){return il(e.parentNode)||il(e)},bl=function(e,t,n,r){void 0===r&&(r=!1)
var o=t.startContainer,i=t.startOffset,a=t.endContainer,u=t.endOffset,c=e.dom;(Sn(o)&&o.hasChildNodes()&&(o=Ju(o,i),Dn(o)&&(i=0)),Sn(a)&&a.hasChildNodes()&&(a=Ju(a,t.collapsed?u:u-1),Dn(a)&&(u=a.nodeValue.length)),o=sl(c,o),a=sl(c,a),yl(o)&&(o=il(o)?o:o.parentNode,o=t.collapsed?o.previousSibling||o:o.nextSibling||o,Dn(o)&&(i=t.collapsed?o.length:0)),yl(a)&&(a=il(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,Dn(a)&&(u=t.collapsed?0:a.length)),t.collapsed)&&(ml(c,e.getBody(),o,i,!0,r).each((function(e){var t=e.container,n=e.offset
o=t,i=n})),ml(c,e.getBody(),a,u,!1,r).each((function(e){var t=e.container,n=e.offset
a=t,u=n})))
return(n[0].inline||n[0].block_expand)&&(n[0].inline&&Dn(o)&&0!==i||(o=vl(c,n,o,i,!0)),n[0].inline&&Dn(a)&&u!==a.nodeValue.length||(a=vl(c,n,a,u,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(o=pl(c,n,t,o,"previousSibling"),a=pl(c,n,t,a,"nextSibling")),(n[0].block||n[0].selector)&&(o=gl(e,n,o,"previousSibling"),a=gl(e,n,a,"nextSibling"),n[0].block&&(c.isBlock(o)||(o=vl(c,n,o,i,!0)),c.isBlock(a)||(a=vl(c,n,a,u,!1)))),Sn(o)&&(i=c.nodeIndex(o),o=o.parentNode),Sn(a)&&(u=c.nodeIndex(a)+1,a=a.parentNode),{startContainer:o,startOffset:i,endContainer:a,endOffset:u}},Cl=function(e,t){var n=e.childNodes
return t>=n.length?t=n.length-1:t<0&&(t=0),n[t]||e},wl=function(e,t,n){var r=t.startContainer,o=t.startOffset,i=t.endContainer,a=t.endOffset,u=function(e){var t
return 3===(t=e[0]).nodeType&&t===r&&o>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===a&&e.length>0&&t===i&&3===t.nodeType&&e.splice(e.length-1,1),e},c=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e)
return r},s=function(e,t){do{if(e.parentNode===t)return e
e=e.parentNode}while(e)},f=function(e,t,r){for(var o=r?"nextSibling":"previousSibling",i=e,a=i.parentNode;i&&i!==t;i=a){a=i.parentNode
var s=c(i===e?i:i[o],o)
s.length&&(r||s.reverse(),n(u(s)))}}
if(1===r.nodeType&&r.hasChildNodes()&&(r=Cl(r,o)),1===i.nodeType&&i.hasChildNodes()&&(i=Cl(i,a-1)),r===i)return n(u([r]))
for(var l=e.findCommonAncestor(r,i),d=r;d;d=d.parentNode){if(d===i)return f(r,l,!0)
if(d===l)break}for(d=i;d;d=d.parentNode){if(d===r)return f(i,l)
if(d===l)break}var m=s(r,l)||r,p=s(i,l)||i
f(r,m,!0)
var g=c(m===r?m:m.nextSibling,"nextSibling",p===i?p.nextSibling:p)
g.length&&n(u(g)),f(i,p)},xl=function(e){var t=[]
if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n))
return t},Sl=function(e){return q(function(e){return Y(e,(function(e){var t=Gu(e)
return t?[St.fromDom(t)]:[]}))}(e),uo)},Nl=function(e,t){var n=ku(t,"td[data-mce-selected],th[data-mce-selected]")
return n.length>0?n:Sl(e)},El=function(e){return Nl(xl(e.selection.getSel()),St.fromDom(e.getBody()))},kl=function(e){return Kt(e).fold(s([e]),(function(t){return[e].concat(kl(t))}))},_l=function(e){return Xt(e).fold(s([e]),(function(t){return"br"===Tt(t)?jt(t).map((function(t){return[e].concat(_l(t))})).getOr([]):[e].concat(_l(t))}))},Al=function(e,t){return Hu(function(e){var t=e.startContainer,n=e.startOffset
return Dn(t)?0===n?w.some(St.fromDom(t)):w.none():w.from(t.childNodes[n]).map(St.fromDom)}(t),function(e){var t=e.endContainer,n=e.endOffset
return Dn(t)?n===t.data.length?w.some(St.fromDom(t)):w.none():w.from(t.childNodes[n-1]).map(St.fromDom)}(t),(function(t,n){var r=K(kl(e),l(_t,t)),o=K(_l(e),l(_t,n))
return r.isSome()&&o.isSome()})).getOr(!1)},Rl=function(e,t,n,r){var o=n,i=new Jr(n,o),a=le(e.schema.getMoveCaretBeforeOnEnterElements(),(function(e,t){return!U(["td","th","table"],t.toLowerCase())}))
do{if(Dn(n)&&0!==wt.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length))
if(a[n.nodeName])return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n))}while(n=r?i.next():i.prev())
"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},Tl=function(e){var t=e.selection.getSel()
return t&&t.rangeCount>0},Dl=function(e,t){var n=El(e)
n.length>0?H(n,(function(n){var r=n.dom,o=e.dom.createRng()
o.setStartBefore(r),o.setEndAfter(r),t(o,!0)})):t(e.selection.getRng(),!1)},Ol=function(e,t,n){var r=Uc(e,t)
n(r),e.moveToBookmark(r)},Bl=function(e,t){var n=function(t){return e(t)?w.from(t.dom.nodeValue):w.none()}
return{get:function(r){if(!e(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return n(r).getOr("")},getOption:n,set:function(n,r){if(!e(n))throw new Error("Can only set raw "+t+" value of a "+t+" node")
n.dom.nodeValue=r}}}(Pt,"text"),Pl=function(e){return Bl.get(e)},Ll=function(e,t,n,r){return zt(t).fold((function(){return"skipping"}),(function(o){return"br"===r||function(e){return Pt(e)&&Pl(e)===fo}(t)?"valid":function(e){return Bt(e)&&Nu(e,_u())}(t)?"existing":Af(t.dom)?"caret":Kf(e,n,r)&&Kf(e,Tt(o),n)?"valid":"invalid-child"}))},Il=function(e,t,n,r){var o=t.uid,i=void 0===o?Lu("mce-annotation"):o,a=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),u=St.fromTag("span",e)
xu(u,_u()),Vn(u,""+Ru(),i),Vn(u,""+Au(),n)
var c=r(i,a),s=c.attributes,f=void 0===s?{}:s,l=c.classes,d=void 0===l?[]:l
return qn(u,f),function(e,t){H(t,(function(t){xu(e,t)}))}(u,d),u},Ml=function(e,t,n,r,o){var i=[],a=Il(e.getDoc(),o,n,r),u=fu(w.none()),c=function(){u.set(w.none())},s=function(e){H(e,f)},f=function(t){switch(Ll(e,t,"span",Tt(t))){case"invalid-child":c()
var n=$t(t)
s(n),c()
break
case"valid":(function(e,t){nn(e,t),an(t,e)})(t,u.get().getOrThunk((function(){var e=Fu(a)
return i.push(e),u.set(w.some(e)),e})))}}
return wl(e.dom,t,(function(e){c(),function(e){var t=j(e,St.fromDom)
s(t)}(e)})),i},Fl=function(e,t,n,r){e.undoManager.transact((function(){var o=e.selection,i=o.getRng(),a=El(e).length>0
if(i.collapsed&&!a&&function(e,t){var n=bl(e,t,[{inline:!0}])
t.setStart(n.startContainer,n.startOffset),t.setEnd(n.endContainer,n.endOffset),e.selection.setRng(t)}(e,i),o.getRng().collapsed&&!a){var u=Il(e.getDoc(),r,t,n.decorate)
Iu(u,so),o.getRng().insertNode(u.dom),o.select(u.dom)}else Ol(o,!1,(function(){Dl(e,(function(o){Ml(e,o,t,n.decorate,r)}))}))}))},Ul=function(e){var t,n=(t={},{register:function(e,n){t[e]={name:e,settings:n}},lookup:function(e){return t.hasOwnProperty(e)?w.from(t[e]).map((function(e){return e.settings})):w.none()}})
Bu(e,n)
var r=Ou(e)
return{register:function(e,t){n.register(e,t)},annotate:function(t,r){n.lookup(t).each((function(n){Fl(e,t,n,r)}))},annotationChanged:function(e,t){r.addListener(e,t)},remove:function(t){Tu(e,w.some(t)).each((function(e){var t=e.elements
H(t,fn)}))},getAll:function(t){var n=function(e,t){var n=St.fromDom(e.getBody()),r=ku(n,"["+Au()+'="'+t+'"]'),o={}
return H(r,(function(e){var t=$n(e,Ru()),n=o.hasOwnProperty(t)?o[t]:[]
o[t]=n.concat([e])})),o}(e,t)
return ae(n,(function(e){return j(e,(function(e){return e.dom}))}))}}},zl=function(e){return{getBookmark:l(Mf,e),moveToBookmark:l(Ff,e)}}
zl.isBookmarkNode=Uf
var jl=function(e,t){for(;t&&t!==e;){if(Mn(t)||Fn(t))return t
t=t.parentNode}return null},Hl=function(e,t,n){if(n.collapsed)return!1
if(ht.browser.isIE()&&n.startOffset===n.endOffset-1&&n.startContainer===n.endContainer){var r=n.startContainer.childNodes[n.startOffset]
if(Sn(r))return z(r.getClientRects(),(function(n){return Yu(n,e,t)}))}return z(n.getClientRects(),(function(n){return Yu(n,e,t)}))},Vl=function(e,t,n){return e.fire(t,n)},ql={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||ql.metaKeyPressed(e)},metaKeyPressed:function(e){return ht.mac?e.metaKey:e.ctrlKey&&!e.altKey}},$l=Fn,Wl=function(e,t){var n,r,o,i,a,u,c,s,f,l,d,m,p,g,h,v="data-mce-selected",y=t.dom,b=wt.each,C=t.getDoc(),w=document,x=Math.abs,S=Math.round,N=t.getBody(),E={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},k=function(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))},_=function(e){return zn(e)||y.hasClass(e,"mce-preview-object")},A=function(e){var n=e.target;(function(e,t){if("longpress"===e.type||0===e.type.indexOf("touch")){var n=e.touches[0]
return k(e.target)&&!Hl(n.clientX,n.clientY,t)}return k(e.target)&&!Hl(e.clientX,e.clientY,t)})(e,t.selection.getRng())&&!e.isDefaultPrevented()&&t.selection.select(n)},R=function(e){return y.is(e,"figure.image")?[e.querySelector("img")]:y.hasClass(e,"mce-preview-object")&&O(e.firstElementChild)?[e,e.firstElementChild]:[e]},T=function(e){var n=is(t)
return!!n&&("false"!==e.getAttribute("data-mce-resize")&&(e!==t.getBody()&&(y.hasClass(e,"mce-preview-object")?Et(St.fromDom(e.firstElementChild),n):Et(St.fromDom(e),n))))},D=function(e,n,r){if(O(r)){var o=R(e)
H(o,(function(e){e.style[n]||!t.schema.isValid(e.nodeName.toLowerCase(),n)?y.setStyle(e,n,r):y.setAttrib(e,n,""+r)}))}},B=function(e,t,n){D(e,"width",t),D(e,"height",n)},P=function(e){var a,v,b,C
a=e.screenX-u,v=e.screenY-c,m=a*i[2]+s,p=v*i[3]+f,m=m<5?5:m,p=p<5?5:p,((k(n)||_(n))&&!1!==function(e){return e.getParam("resize_img_proportional",!0,"boolean")}(t)?!ql.modifierPressed(e):ql.modifierPressed(e))&&(x(a)>x(v)?(p=S(m*l),m=S(p/l)):(m=S(p/l),p=S(m*l))),B(r,m,p),b=(b=i.startPos.x+a)>0?b:0,C=(C=i.startPos.y+v)>0?C:0,y.setStyles(o,{left:b,top:C,display:"block"}),o.innerHTML=m+" &times; "+p,i[2]<0&&r.clientWidth<=m&&y.setStyle(r,"left",undefined+(s-m)),i[3]<0&&r.clientHeight<=p&&y.setStyle(r,"top",undefined+(f-p)),(a=N.scrollWidth-g)+(v=N.scrollHeight-h)!==0&&y.setStyles(o,{left:b-a,top:C-v}),d||(function(e,t,n,r,o){e.fire("ObjectResizeStart",{target:t,width:n,height:r,origin:o})}(t,n,s,f,"corner-"+i.name),d=!0)},L=function(){var e=d
d=!1,e&&(D(n,"width",m),D(n,"height",p)),y.unbind(C,"mousemove",P),y.unbind(C,"mouseup",L),w!==C&&(y.unbind(w,"mousemove",P),y.unbind(w,"mouseup",L)),y.remove(r),y.remove(o),y.remove(a),I(n),e&&(function(e,t,n,r,o){e.fire("ObjectResized",{target:t,width:n,height:r,origin:o})}(t,n,m,p,"corner-"+i.name),y.setAttrib(n,"style",y.getAttrib(n,"style"))),t.nodeChanged()},I=function(e){z()
var d=y.getPos(e,N),x=d.x,S=d.y,k=e.getBoundingClientRect(),A=k.width||k.right-k.left,D=k.height||k.bottom-k.top
n!==e&&(M(),n=e,m=p=0)
var O=t.fire("ObjectSelected",{target:e}),I=y.getAttrib(n,v,"1")
T(e)&&!O.isDefaultPrevented()?b(E,(function(e,t){var d,m=function(d){var m,p=R(n)[0]
u=d.screenX,c=d.screenY,s=p.clientWidth,f=p.clientHeight,l=f/s,(i=e).name=t,i.startPos={x:A*e[0]+x,y:D*e[1]+S},g=N.scrollWidth,h=N.scrollHeight,a=y.add(N,"div",{class:"mce-resize-backdrop"}),y.setStyles(a,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"}),r=_(m=n)?y.create("img",{src:ht.transparentSrc}):m.cloneNode(!0),y.addClass(r,"mce-clonedresizable"),y.setAttrib(r,"data-mce-bogus","all"),r.contentEditable="false",y.setStyles(r,{left:x,top:S,margin:0}),B(r,A,D),r.removeAttribute(v),N.appendChild(r),y.bind(C,"mousemove",P),y.bind(C,"mouseup",L),w!==C&&(y.bind(w,"mousemove",P),y.bind(w,"mouseup",L)),o=y.add(N,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},s+" &times; "+f)};(d=y.get("mceResizeHandle"+t))&&y.remove(d),d=y.add(N,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),11===ht.ie&&(d.contentEditable=!1),y.bind(d,"mousedown",(function(e){e.stopImmediatePropagation(),e.preventDefault(),m(e)})),e.elm=d,y.setStyles(d,{left:A*e[0]+x-d.offsetWidth/2,top:D*e[1]+S-d.offsetHeight/2})})):M(),y.getAttrib(n,v)||n.setAttribute(v,I)},M=function(){z(),n&&n.removeAttribute(v),ie(E,(function(e,t){var n=y.get("mceResizeHandle"+t)
n&&(y.unbind(n),y.remove(n))}))},F=function(n){var r,o=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)}
d||t.removed||(b(y.select("img[data-mce-selected],hr[data-mce-selected]"),(function(e){e.removeAttribute(v)})),r="mousedown"===n.type?n.target:e.getNode(),o(r=y.$(r).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0],N)&&(j(),o(e.getStart(!0),r)&&o(e.getEnd(!0),r))?I(r):M())},U=function(e){return $l(jl(t.getBody(),e))},z=function(){ie(E,(function(e){e.elm&&(y.unbind(e.elm),delete e.elm)}))},j=function(){try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(e){}}
t.on("init",(function(){if(j(),ht.browser.isIE()||ht.browser.isEdge()){t.on("mousedown click",(function(e){var n=e.target,r=n.nodeName
d||!/^(TABLE|IMG|HR)$/.test(r)||U(n)||(2!==e.button&&t.selection.select(n,"TABLE"===r),"mousedown"===e.type&&t.nodeChanged())}))
var e=function(e){var n=function(e){Xr.setEditorTimeout(t,(function(){return t.selection.select(e)}))}
if(U(e.target)||zn(e.target))return e.preventDefault(),void n(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&n(e.target))}
y.bind(N,"mscontrolselect",e),t.on("remove",(function(){return y.unbind(N,"mscontrolselect",e)}))}var r=Xr.throttle((function(e){t.composing||F(e)}))
t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",r),t.on("keyup compositionend",(function(e){n&&"TABLE"===n.nodeName&&r(e)})),t.on("hide blur",M),t.on("contextmenu longpress",A,!0)})),t.on("remove",z)
return{isResizable:T,showResizeRect:I,hideResizeRect:M,updateResizeRect:F,destroy:function(){n=r=a=null}}},Kl=function(e){return Mn(e)||Fn(e)},Xl=function(e,t,n){var r,o,i=n
if(i.caretPositionFromPoint)(o=i.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(o.offsetNode,o.offset),r.collapse(!0))
else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t)
else if(i.body.createTextRange){r=i.body.createTextRange()
try{r.moveToPoint(e,t),r.collapse(!0)}catch(a){r=function(e,t,n){var r,o=n.elementFromPoint(e,t),i=n.body.createTextRange()
if(o&&"HTML"!==o.tagName||(o=n.body),i.moveToElementText(o),(r=(r=wt.toArray(i.getClientRects())).sort((function(e,n){return(e=Math.abs(Math.max(e.top-t,e.bottom-t)))-Math.abs(Math.max(n.top-t,n.bottom-t))}))).length>0){t=(r[0].bottom+r[0].top)/2
try{return i.moveToPoint(e,t),i.collapse(!0),i}catch(a){}}return null}(e,t,n)}return function(e,t){var n=e&&e.parentElement?e.parentElement():null
return Fn(function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(n,t,Kl))?null:e}(r,n.body)}return r},Yl=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},Gl=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(e,t,n)},Jl=function(e,t,n){return Gl(e,t,(function(e){return e.nodeName===n}))},Ql=function(e){return e&&"TABLE"===e.nodeName},Zl=function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)},ed=function(e,t){return yo(e)&&!1===Gl(e,t,Af)},td=function(e,t,n){for(var r=new Jr(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(Ln(t))return!0},nd=function(e,t,n,r,o){var i,a,u=e.getRoot(),c=e.schema.getNonEmptyElements(),s=e.getParent(o.parentNode,e.isBlock)||u
if(r&&Ln(o)&&t&&e.isEmpty(s))return w.some(yc(o.parentNode,e.nodeIndex(o)))
for(var f=new Jr(o,s);a=f[r?"prev":"next"]();){if("false"===e.getContentEditableParent(a)||ed(a,u))return w.none()
if(Dn(a)&&a.nodeValue.length>0)return!1===Jl(a,u,"A")?w.some(yc(a,r?a.nodeValue.length:0)):w.none()
if(e.isBlock(a)||c[a.nodeName.toLowerCase()])return w.none()
i=a}return n&&i?w.some(yc(i,0)):w.none()},rd=function(e,t,n,r){var o,i,a,u,c=e.getRoot(),s=!1
o=r[(n?"start":"end")+"Container"],i=r[(n?"start":"end")+"Offset"]
var f=Sn(o)&&i===o.childNodes.length,l=e.schema.getNonEmptyElements()
if(u=n,yo(o))return w.none()
if(Sn(o)&&i>o.childNodes.length-1&&(u=!1),Bn(o)&&(o=c,i=0),o===c){if(u&&(a=o.childNodes[i>0?i-1:0])){if(yo(a))return w.none()
if(l[a.nodeName]||Ql(a))return w.none()}if(o.hasChildNodes()){if(i=Math.min(!u&&i>0?i-1:i,o.childNodes.length-1),o=o.childNodes[i],i=Dn(o)&&f?o.data.length:0,!t&&o===c.lastChild&&Ql(o))return w.none()
if(function(e,t){for(;t&&t!==e;){if(Fn(t))return!0
t=t.parentNode}return!1}(c,o)||yo(o))return w.none()
if(o.hasChildNodes()&&!1===Ql(o)){a=o
var d=new Jr(o,c)
do{if(Fn(a)||yo(a)){s=!1
break}if(Dn(a)&&a.nodeValue.length>0){i=u?0:a.nodeValue.length,o=a,s=!0
break}if(l[a.nodeName.toLowerCase()]&&!Zl(a)){i=e.nodeIndex(a),o=a.parentNode,u||i++,s=!0
break}}while(a=u?d.next():d.prev())}}}return t&&(Dn(o)&&0===i&&nd(e,f,t,!0,o).each((function(e){o=e.container(),i=e.offset(),s=!0})),Sn(o)&&((a=o.childNodes[i])||(a=o.childNodes[i-1]),!a||!Ln(a)||function(e,t){return e.previousSibling&&e.previousSibling.nodeName===t}(a,"A")||td(e,a,!1)||td(e,a,!0)||nd(e,f,t,!0,a).each((function(e){o=e.container(),i=e.offset(),s=!0})))),u&&!t&&Dn(o)&&i===o.nodeValue.length&&nd(e,f,t,!1,o).each((function(e){o=e.container(),i=e.offset(),s=!0})),s?w.some(yc(o,i)):w.none()},od=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=yc.fromRangeStart(t)
return rd(e,n,!0,r).each((function(e){n&&yc.isAbove(o,e)||r.setStart(e.container(),e.offset())})),n||rd(e,n,!1,r).each((function(e){r.setEnd(e.container(),e.offset())})),n&&r.collapse(!0),Yl(t,r)?w.none():w.some(r)},id=function(e,t){return e.splitText(t)},ad=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset
return t===r&&Dn(t)?n>0&&n<t.nodeValue.length&&(t=(r=id(t,n)).previousSibling,o>n?(t=r=id(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(Dn(t)&&n>0&&n<t.nodeValue.length&&(t=id(t,n),n=0),Dn(r)&&o>0&&o<r.nodeValue.length&&(o=(r=id(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}},ud=function(e){return{walk:function(t,n){return wl(e,t,n)},split:ad,normalize:function(t){return od(e,t).fold(h,(function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0}))}}}
ud.compareRanges=Yl,ud.getCaretRangeFromPoint=Xl,ud.getSelectedNode=Gu,ud.getNode=Ju
var cd,sd=function(e,t){var n=function(n){var r=t(n)
if(r<=0||null===r){var o=Yn(n,e)
return parseFloat(o)||0}return r},r=function(e,t){return W(t,(function(t,n){var r=Yn(e,n),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,n){if(!P(n)&&!n.match(/^[0-9]+$/))throw new Error(e+".set accepts only positive integer values. Value was "+n)
var r=t.dom
jn(r)&&(r.style[e]=n+"px")},get:n,getOuter:n,aggregate:r,max:function(e,t,n){var o=r(e,n)
return t>o?t-o:0}}}("height",(function(e){var t=e.dom
return ln(e)?t.getBoundingClientRect().height:t.offsetHeight})),fd=function(e,t){return e.view(t).fold(s([]),(function(t){var n=e.owner(t),r=fd(e,n)
return[t].concat(r)}))},ld=Object.freeze({__proto__:null,view:function(e){var t
return(e.dom===document?w.none():w.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(St.fromDom)},owner:function(e){return Ft(e)}}),dd=function(e){var t=St.fromDom(document),n=hn(t),r=function(e,t){var n=t.owner(e)
return fd(t,n)}(e,ld),o=gn(e),i=$(r,(function(e,t){var n=gn(t)
return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0})
return mn(i.left+o.left+n.left,i.top+o.top+n.top)},md=function(e){return"textarea"===Tt(e)},pd=function(e,t){var n=function(e){var t=e.dom.ownerDocument,n=t.body,r=t.defaultView,o=t.documentElement
if(n===e.dom)return mn(n.offsetLeft,n.offsetTop)
var i=pn(null==r?void 0:r.pageYOffset,o.scrollTop),a=pn(null==r?void 0:r.pageXOffset,o.scrollLeft),u=pn(o.clientTop,n.clientTop),c=pn(o.clientLeft,n.clientLeft)
return gn(e).translate(a-c,i-u)}(e),r=function(e){return sd.get(e)}(e)
return{element:e,bottom:n.top+r,height:r,pos:n,cleanup:t}},gd=function(e,t){var n=function(e,t){var n=$t(e)
if(0===n.length||md(e))return{element:e,offset:t}
if(t<n.length&&!md(n[t]))return{element:n[t],offset:0}
var r=n[n.length-1]
return md(r)?{element:e,offset:t}:"img"===Tt(r)?{element:r,offset:1}:Pt(r)?{element:r,offset:Pl(r).length}:{element:r,offset:$t(r).length}}(e,t),r=St.fromHtml('<span data-mce-bogus="all">\ufeff</span>')
return nn(n.element,r),pd(r,(function(){return sn(r)}))},hd=function(e,t,n,r){Cd(e,(function(o,i){return yd(e,t,n,r)}),n)},vd=function(e,t,n,r,o){var i={elm:r.element.dom,alignToTop:o};(function(e,t){return e.fire("ScrollIntoView",t).isDefaultPrevented()})(e,i)||(n(t,hn(t).top,r,o),function(e,t){e.fire("AfterScrollIntoView",t)}(e,i))},yd=function(e,t,n,r){var o=St.fromDom(e.getBody()),i=St.fromDom(e.getDoc())
o.dom.offsetWidth
var a=gd(St.fromDom(n.startContainer),n.startOffset)
vd(e,i,t,a,r),a.cleanup()},bd=function(e,t,n,r){var o=St.fromDom(e.getDoc())
vd(e,o,n,function(e){return pd(St.fromDom(e),u)}(t),r)},Cd=function(e,t,n){var r=n.startContainer,o=n.startOffset,i=n.endContainer,a=n.endOffset
t(St.fromDom(r),St.fromDom(i))
var u=e.dom.createRng()
u.setStart(r,o),u.setEnd(i,a),e.selection.setRng(n)},wd=function(e,t,n,r){var o=e.pos
if(n)vn(o.left,o.top,r)
else{var i=o.top-t+e.height
vn(o.left,i,r)}},xd=function(e,t,n,r,o){var i=n+t,a=r.pos.top,u=r.bottom,c=u-a>=n
if(a<t)wd(r,n,!1!==o,e)
else if(a>i){wd(r,n,c?!1!==o:!0===o,e)}else u>i&&!c&&wd(r,n,!0===o,e)},Sd=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
xd(e,t,o,n,r)},Nd=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
xd(e,t,o,n,r)
var i=dd(n.element),a=Cn(window)
i.top<a.y?yn(n.element,!1!==r):i.top>a.bottom&&yn(n.element,!0===r)},Ed=function(e,t,n){return hd(e,Sd,t,n)},kd=function(e,t,n){return bd(e,t,Sd,n)},_d=function(e,t,n){return hd(e,Nd,t,n)},Ad=function(e,t,n){return bd(e,t,Nd,n)},Rd=function(e,t,n){(e.inline?Ed:_d)(e,t,n)},Td=function(e){var t=Qt(e).dom
return e.dom===t.activeElement},Dd=function(e){return void 0===e&&(e=St.fromDom(document)),w.from(e.dom.activeElement).map(St.fromDom)},Od=function(e,t,n,r){return{start:e,soffset:t,finish:n,foffset:r}},Bd=gr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Pd=(Bd.before,Bd.on,Bd.after,function(e){return e.fold(f,f,f)}),Ld=gr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),Id={domRange:Ld.domRange,relative:Ld.relative,exact:Ld.exact,exactFromRange:function(e){return Ld.exact(e.start,e.soffset,e.finish,e.foffset)},getWin:function(e){var t=function(e){return e.match({domRange:function(e){return St.fromDom(e.startContainer)},relative:function(e,t){return Pd(e)},exact:function(e,t,n,r){return e}})}(e)
return Ut(t)},range:Od},Md=ut().browser,Fd=function(e,t){var n=Pt(t)?Pl(t).length:$t(t).length+1
return e>n?n:e<0?0:e},Ud=function(e){return Id.range(e.start,Fd(e.soffset,e.start),e.finish,Fd(e.foffset,e.finish))},zd=function(e,t){return!xn(t.dom)&&(Rt(e,t)||_t(e,t))},jd=function(e){return function(t){return zd(e,t.start)&&zd(e,t.finish)}},Hd=function(e){return!0===e.inline||Md.isIE()},Vd=function(e){return Id.range(St.fromDom(e.startContainer),e.startOffset,St.fromDom(e.endContainer),e.endOffset)},qd=function(e){return function(e){var t=e.getSelection()
return(t&&0!==t.rangeCount?w.from(t.getRangeAt(0)):w.none()).map(Vd)}(Ut(e).dom).filter(jd(e))},$d=function(e){var t=document.createRange()
try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),w.some(t)}catch(n){return w.none()}},Wd=function(e){var t=Hd(e)?qd(St.fromDom(e.getBody())):w.none()
e.bookmark=t.isSome()?t:e.bookmark},Kd=function(e){return(e.bookmark?e.bookmark:w.none()).bind((function(t){return function(e,t){return w.from(t).filter(jd(e)).map(Ud)}(St.fromDom(e.getBody()),t)})).bind($d)},Xd={isEditorUIElement:function(e){var t=e.className.toString()
return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},Yd=function(e,t){ut().browser.isIE()?function(e){e.on("focusout",(function(){Wd(e)}))}(e):function(e,t){e.on("mouseup touchend",(function(e){t.throttle()}))}(e,t),e.on("keyup NodeChange",(function(t){(function(e){return"nodechange"===e.type&&e.selectionChange})(t)||Wd(e)}))},Gd=function(e){var t=hu((function(){Wd(e)}),0)
e.on("init",(function(){e.inline&&function(e,t){var n=function(){t.throttle()}
iu.DOM.bind(document,"mouseup",n),e.on("remove",(function(){iu.DOM.unbind(document,"mouseup",n)}))}(e,t),Yd(e,t)})),e.on("remove",(function(){t.cancel()}))},Jd=iu.DOM,Qd=function(e,t){var n=function(e){return e.getParam("custom_ui_selector","","string")}(e)
return null!==Jd.getParent(t,(function(t){return function(e){return Xd.isEditorUIElement(e)}(t)||!!n&&e.dom.is(t,n)}))},Zd=function(e,t){var n=t.editor
Gd(n),n.on("focusin",(function(){var t=e.focusedEditor
t!==n&&(t&&t.fire("blur",{focusedEditor:n}),e.setActive(n),e.focusedEditor=n,n.fire("focus",{blurredEditor:t}),n.focus(!0))})),n.on("focusout",(function(){Xr.setEditorTimeout(n,(function(){var t=e.focusedEditor
Qd(n,function(e){try{var t=Qt(St.fromDom(e.getElement()))
return Dd(t).fold((function(){return document.body}),(function(e){return e.dom}))}catch(n){return document.body}}(n))||t!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),cd||(cd=function(t){var n=e.activeEditor
n&&function(e){if(Jt()&&O(e.target)){var t=St.fromDom(e.target)
if(Bt(t)&&tn(t)&&e.composed&&e.composedPath){var n=e.composedPath()
if(n)return ee(n)}}return w.from(e.target)}(t).each((function(t){t.ownerDocument===document&&(t===document.body||Qd(n,t)||e.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))}))},Jd.bind(document,"focusin",cd))},em=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(Jd.unbind(document,"focusin",cd),cd=null)},tm=function(e,t){return function(e){return e.collapsed?w.from(Ju(e.startContainer,e.startOffset)).map(St.fromDom):w.none()}(t).bind((function(t){return ao(t)?w.some(t):!1===Rt(e,t)?w.some(e):w.none()}))},nm=function(e,t){tm(St.fromDom(e.getBody()),t).bind((function(e){return Ef(e.dom)})).fold((function(){e.selection.normalize()}),(function(t){return e.selection.setRng(t.toRange())}))},rm=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},om=function(e){return Td(e)||(t=e,Dd(Qt(t)).filter((function(e){return t.dom.contains(e.dom)}))).isSome()
var t},im=function(e){return e.inline?function(e){var t=e.getBody()
return t&&om(St.fromDom(t))}(e):function(e){return e.iframeElement&&Td(St.fromDom(e.iframeElement))}(e)},am=function(e){return im(e)||function(e){var t=Qt(St.fromDom(e.getElement()))
return Dd(t).filter((function(t){return!(void 0!==(n=t.dom.classList)&&(n.contains("tox-edit-area")||n.contains("tox-edit-area__iframe")||n.contains("mce-content-body")))&&Qd(e,t.dom)
var n})).isSome()}(e)},um=function(e){return e.editorManager.setActive(e)},cm=function(e,t){e.removed||(t?um(e):function(e){var t=e.selection,n=e.getBody(),r=t.getRng()
e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===im(e)&&Kd(e).each((function(t){e.selection.setRng(t),r=t}))
var o=function(e,t){return e.dom.getParent(t,(function(t){return"true"===e.dom.getContentEditable(t)}))}(e,t.getNode())
if(e.$.contains(n,o))return rm(o),nm(e,r),void um(e)
e.inline||(ht.opera||rm(n),e.getWin().focus()),(ht.gecko||e.inline)&&(rm(n),nm(e,r)),um(e)}(e))},sm=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset
return w.from(i).map(St.fromDom).map((function(e){return r&&t.collapsed?e:Wt(e,o(e,a)).getOr(e)})).bind((function(e){return Bt(e)?w.some(e):zt(e).filter(Bt)})).map((function(e){return e.dom})).getOr(e)},fm=function(e,t,n){return sm(e,t,!0,n,(function(e,t){return Math.min(e.dom.childNodes.length,t)}))},lm=function(e,t,n){return sm(e,t,!1,n,(function(e,t){return t>0?t-1:t}))},dm=function(e,t){for(var n=e;e&&Dn(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling
return e||n},mm=function(e,t){return j(t,(function(t){var n=e.fire("GetSelectionRange",{range:t})
return n.range!==t?n.range:t}))},pm={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},gm=function(e,t,n){var r=n?"lastChild":"firstChild",o=n?"prev":"next"
if(e[r])return e[r]
if(e!==t){var i=e[o]
if(i)return i
for(var a=e.parent;a&&a!==t;a=a.parent)if(i=a[o])return i}},hm=function(e){if(!Fo(e.value))return!1
var t=e.parent
return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)},vm=function(e){var t="a"===e.name&&!e.attr("href")&&e.attr("id")
return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t},ym=function(){function e(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}return e.create=function(t,n){var r=new e(t,pm[t]||1)
return n&&ie(n,(function(e,t){r.attr(t,e)})),r},e.prototype.replace=function(e){var t=this
return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},e.prototype.attr=function(e,t){var n,r=this
if("string"!=typeof e)return null!=e&&ie(e,(function(e,t){r.attr(t,e)})),r
if(n=r.attributes){if(void 0!==t){if(null===t){if(e in n.map){delete n.map[e]
for(var o=n.length;o--;)if(n[o].name===e)return n.splice(o,1),r}return r}if(e in n.map){for(o=n.length;o--;)if(n[o].name===e){n[o].value=t
break}}else n.push({name:e,value:t})
return n.map[e]=t,r}return n.map[e]}},e.prototype.clone=function(){var t,n=this,r=new e(n.name,n.type)
if(t=n.attributes){var o=[]
o.map={}
for(var i=0,a=t.length;i<a;i++){var u=t[i]
"id"!==u.name&&(o[o.length]={name:u.name,value:u.value},o.map[u.name]=u.value)}r.attributes=o}return r.value=n.value,r.shortEnded=n.shortEnded,r},e.prototype.wrap=function(e){var t=this
return t.parent.insert(e,t),e.append(t),t},e.prototype.unwrap=function(){for(var e=this,t=e.firstChild;t;){var n=t.next
e.insert(t,e,!0),t=n}e.remove()},e.prototype.remove=function(){var e=this,t=e.parent,n=e.next,r=e.prev
return t&&(t.firstChild===e?(t.firstChild=n,n&&(n.prev=null)):r.next=n,t.lastChild===e?(t.lastChild=r,r&&(r.next=null)):n.prev=r,e.parent=e.next=e.prev=null),e},e.prototype.append=function(e){var t=this
e.parent&&e.remove()
var n=t.lastChild
return n?(n.next=e,e.prev=n,t.lastChild=e):t.lastChild=t.firstChild=e,e.parent=t,e},e.prototype.insert=function(e,t,n){e.parent&&e.remove()
var r=t.parent||this
return n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=r,e},e.prototype.getAll=function(e){for(var t=[],n=this.firstChild;n;n=gm(n,this))n.name===e&&t.push(n)
return t},e.prototype.empty=function(){var e=this
if(e.firstChild){for(var t=[],n=e.firstChild;n;n=gm(n,e))t.push(n)
for(var r=t.length;r--;){(n=t[r]).parent=n.firstChild=n.lastChild=n.next=n.prev=null}}return e.firstChild=e.lastChild=null,e},e.prototype.isEmpty=function(e,t,n){void 0===t&&(t={})
var r=this,o=r.firstChild
if(vm(r))return!1
if(o)do{if(1===o.type){if(o.attr("data-mce-bogus"))continue
if(e[o.name])return!1
if(vm(o))return!1}if(8===o.type)return!1
if(3===o.type&&!hm(o))return!1
if(3===o.type&&o.parent&&t[o.parent.name]&&Fo(o.value))return!1
if(n&&n(o))return!1}while(o=gm(o,r))
return!0},e.prototype.walk=function(e){return gm(this,null,e)},e}(),bm=function(e,t){return e.replace(t.re,(function(e){return me(t.uris,e).getOr(e)}))},Cm=["img","video"],wm=function(e,t,n){return!e.allow_html_data_urls&&(/^data:image\//i.test(t)?function(e,t){return!(D(e)?U(Cm,t):e)}(e.allow_svg_data_urls,n)&&/^data:image\/svg\+xml/i.test(t):/^data:/i.test(t))},xm=function(e,t,n){var r,o,i=1,a=e.getShortEndedElements(),u=/<([!?\/])?([A-Za-z0-9\-_:.]+)(\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g
for(u.lastIndex=r=n;o=u.exec(t);){if(r=u.lastIndex,"/"===o[1])i--
else if(!o[1]){if(o[2]in a)continue
i++}if(0===i)break}return r},Sm=function(e,t){var n=e.exec(t)
if(n){var r=n[1],o=n[2]
return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null},Nm=function(e,t){void 0===t&&(t=yi()),!1!==(e=e||{}).fix_self_closing&&(e.fix_self_closing=!0)
var n=e.comment?e.comment:u,r=e.cdata?e.cdata:u,o=e.text?e.text:u,i=e.start?e.start:u,a=e.end?e.end:u,c=e.pi?e.pi:u,s=e.doctype?e.doctype:u,f=function(u,f){void 0===f&&(f="html")
for(var l,d,m,p,g,h,v,y,b,C,w,x,S,N,E,k,_,A,R,T=u.html,D=0,O=[],B=0,P=ci.decode,L=wt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),I=/((java|vb)script|mhtml):/i,M="html"===f?0:1,F=function(e){var t,n
for(t=O.length;t--&&O[t].name!==e;);if(t>=0){for(n=O.length-1;n>=t;n--)(e=O[n]).valid&&a(e.name)
O.length=t}},U=function(e,t){return o(bm(e,u),t)},z=function(t){""!==t&&(">"===t.charAt(0)&&(t=" "+t),e.allow_conditional_comments||"[if"!==t.substr(0,3).toLowerCase()||(t=" "+t),n(bm(t,u)))},j=function(e,t){var n=e||"",r=!Be(n,"--"),o=function(e,t,n){void 0===n&&(n=0)
var r=e.toLowerCase()
if(-1!==r.indexOf("[if ",n)&&function(e,t){return/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t))}(r,n)){var o=r.indexOf("[endif]",n)
return r.indexOf(">",o)}if(t){var i=r.indexOf(">",n)
return-1!==i?i:r.length}var a=/--!?>/g
a.lastIndex=n
var u=a.exec(e)
return u?u.index+u[0].length:r.length}(T,r,t)
return e=T.substr(t,o-t),z(r?n+e:e),o+1},H=function(t,n,r,o,i){var a,c
if(r=function(e){return bm(e,u)}((n=n.toLowerCase())in K?n:P(r||o||i||"")),X&&!y&&!1===function(e){return 0===e.indexOf("data-")||0===e.indexOf("aria-")}(n)){if(!(a=N[n])&&E){for(c=E.length;c--&&!(a=E[c]).pattern.test(n););-1===c&&(a=null)}if(!a)return
if(a.validValues&&!(r in a.validValues))return}if(L[n]&&!e.allow_script_urls){var s=r.replace(/[\s\u0000-\u001F]+/g,"")
try{s=decodeURIComponent(s)}catch(f){s=unescape(s)}if(I.test(s))return
if(wm(e,s,t))return}y&&(n in L||0===n.indexOf("on"))||(p.map[n]=r,p.push({name:n,value:r}))},V=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))","g"),q=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,$=t.getShortEndedElements(),W=e.self_closing_elements||t.getSelfClosingElements(),K=t.getBoolAttrs(),X=e.validate,Y=e.remove_internals,G=e.fix_self_closing,J=t.getSpecialElements(),Q=T+">";l=V.exec(Q);){var Z=l[0]
if(D<l.index&&U(P(T.substr(D,l.index-D))),d=l[7])":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),F(d)
else if(d=l[8]){if(l.index+Z.length>T.length){U(P(T.substr(l.index))),D=l.index+Z.length
continue}":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),b=d in $,G&&W[d]&&O.length>0&&O[O.length-1].name===d&&F(d)
var ee=Sm(q,l[9])
if(null!==ee){if("all"===ee){D=xm(t,T,V.lastIndex),V.lastIndex=D
continue}w=!1}if(!X||(C=t.getElementRule(d))){if(w=!0,X&&(N=C.attributes,E=C.attributePatterns),(S=l[9])?((y=-1!==S.indexOf("data-mce-type"))&&Y&&(w=!1),(p=[]).map={},S.replace(q,(function(e,t,n,r,o){return H(d,t,n,r,o),""}))):(p=[]).map={},X&&!y){if(k=C.attributesRequired,_=C.attributesDefault,A=C.attributesForced,C.removeEmptyAttrs&&!p.length&&(w=!1),A)for(g=A.length;g--;)v=(x=A[g]).name,"{$uid}"===(R=x.value)&&(R="mce_"+B++),p.map[v]=R,p.push({name:v,value:R})
if(_)for(g=_.length;g--;)(v=(x=_[g]).name)in p.map||("{$uid}"===(R=x.value)&&(R="mce_"+B++),p.map[v]=R,p.push({name:v,value:R}))
if(k){for(g=k.length;g--&&!(k[g]in p.map););-1===g&&(w=!1)}if(x=p.map["data-mce-bogus"]){if("all"===x){D=xm(t,T,V.lastIndex),V.lastIndex=D
continue}w=!1}}w&&i(d,p,b)}else w=!1
if(m=J[d]){m.lastIndex=D=l.index+Z.length,(l=m.exec(T))?(w&&(h=T.substr(D,l.index-D)),D=l.index+l[0].length):(h=T.substr(D),D=T.length),w&&(h.length>0&&U(h,!0),a(d)),V.lastIndex=D
continue}b||(S&&S.indexOf("/")===S.length-1?w&&a(d):O.push({name:d,valid:w}))}else if(d=l[1])z(d)
else if(d=l[2]){if(!(1===M||e.preserve_cdata||O.length>0&&t.isValidChild(O[O.length-1].name,"#cdata"))){D=j("",l.index+2),V.lastIndex=D
continue}r(d)}else if(d=l[3])s(d)
else{if((d=l[4])||"<!"===Z){D=j(d,l.index+Z.length),V.lastIndex=D
continue}if(d=l[5]){if(1!==M){D=j("?",l.index+2),V.lastIndex=D
continue}c(d,l[6])}}D=l.index+Z.length}for(D<T.length&&U(P(T.substr(D))),g=O.length-1;g>=0;g--)(d=O[g]).valid&&a(d.name)}
return{parse:function(e,t){void 0===t&&(t="html"),f(function(e){for(var t,n=/data:[^;]+;base64,([a-z0-9\+\/=]+)/gi,r=[],o={},i=Lu("img"),a=0,u=0;t=n.exec(e);){var c=t[0],s=i+"_"+u++
o[s]=c,a<t.index&&r.push(e.substr(a,t.index-a)),r.push(s),a=t.index+c.length}var f=new RegExp(i+"_[0-9]+","g")
return 0===a?{prefix:i,uris:o,html:e,re:f}:(a<e.length&&r.push(e.substr(a)),{prefix:i,uris:o,html:r.join(""),re:f})}(e),t)}}}
Nm.findEndTag=xm
var Em=function(e,t){var n,r,o,i,a=t,u=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,c=e.schema
a=function(e,t){var n=new RegExp(["\\s?("+e.join("|")+')="[^"]+"'].join("|"),"gi")
return t.replace(n,"")}(e.getTempAttrs(),a)
for(var s=c.getShortEndedElements();i=u.exec(a);)r=u.lastIndex,o=i[0].length,n=s[i[1]]?r:Nm.findEndTag(c,a,r),a=a.substring(0,r-o)+a.substring(n),u.lastIndex=r-o
return mo(a)},km=Em,_m=function(e,t,n,r){var o
return t.format=n,t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),o="raw"===t.format?wt.trim(km(e.serializer,r.innerHTML)):"text"===t.format?e.dom.isEmpty(r)?"":mo(r.innerText||r.textContent):"tree"===t.format?e.serializer.serialize(r,t):function(e,t){var n=$c(e),r=new RegExp("^(<"+n+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+n+">[\r\n]*|<br \\/>[\r\n]*)$")
return t.replace(r,"")}(e,e.serializer.serialize(r,t)),U(["text","tree"],t.format)||co(St.fromDom(r))?t.content=o:t.content=wt.trim(o),t.no_events||e.fire("GetContent",t),t.content},Am=wt.each,Rm=function(e){return{compare:function(t,n){if(t.nodeName!==n.nodeName)return!1
var r=function(t){var n={}
return Am(e.getAttribs(t),(function(r){var o=r.nodeName.toLowerCase()
0!==o.indexOf("_")&&"style"!==o&&0!==o.indexOf("data-")&&(n[o]=e.getAttrib(t,o))})),n},o=function(e,t){var n,r
for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1
if(e[r]!==n)return!1
delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1
return!0}
return!!o(r(t),r(n))&&(!!o(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))&&(!Uf(t)&&!Uf(n)))}}},Tm=wt.makeMap,Dm=function(e){var t=[],n=(e=e||{}).indent,r=Tm(e.indent_before||""),o=Tm(e.indent_after||""),i=ci.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="html"===e.element_format
return{start:function(e,u,c){var s,f,l,d
if(n&&r[e]&&t.length>0&&(d=t[t.length-1]).length>0&&"\n"!==d&&t.push("\n"),t.push("<",e),u)for(s=0,f=u.length;s<f;s++)l=u[s],t.push(" ",l.name,'="',i(l.value,!0),'"')
t[t.length]=!c||a?">":" />",c&&n&&o[e]&&t.length>0&&(d=t[t.length-1]).length>0&&"\n"!==d&&t.push("\n")},end:function(e){var r
t.push("</",e,">"),n&&o[e]&&t.length>0&&(r=t[t.length-1]).length>0&&"\n"!==r&&t.push("\n")},text:function(e,n){e.length>0&&(t[t.length]=n?e:i(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,r){r?t.push("<?",e," ",i(r),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}},Om=function(e,t){void 0===t&&(t=yi())
var n=Dm(e);(e=e||{}).validate=!("validate"in e)||e.validate
return{serialize:function(r){var o=e.validate,i={3:function(e){n.text(e.value,e.raw)},8:function(e){n.comment(e.value)},7:function(e){n.pi(e.name,e.value)},10:function(e){n.doctype(e.value)},4:function(e){n.cdata(e.value)},11:function(e){if(e=e.firstChild)do{a(e)}while(e=e.next)}}
n.reset()
var a=function(e){var r,u,c,s,f,l,d,m,p,g=i[e.type]
if(g)g(e)
else{if(r=e.name,u=e.shortEnded,c=e.attributes,o&&c&&c.length>1&&((l=[]).map={},p=t.getElementRule(e.name))){for(d=0,m=p.attributesOrder.length;d<m;d++)(s=p.attributesOrder[d])in c.map&&(f=c.map[s],l.map[s]=f,l.push({name:s,value:f}))
for(d=0,m=c.length;d<m;d++)(s=c[d].name)in l.map||(f=c.map[s],l.map[s]=f,l.push({name:s,value:f}))
c=l}if(n.start(e.name,c,u),!u){if(e=e.firstChild)do{a(e)}while(e=e.next)
n.end(r)}}}
return 1!==r.type||e.inner?i[11](r):a(r),n.getContent()}}},Bm=function(e,t,n){return w.from(n.container()).filter(Dn).exists((function(r){var o=e?0:-1
return t(r.data.charAt(n.offset()+o))}))},Pm=l(Bm,!0,jf),Lm=l(Bm,!1,jf),Im=function(e){var t=e.container()
return Dn(t)&&(0===t.data.length||lo(t.data)&&zl.isBookmarkNode(t.parentNode))},Mm=function(e,t){return function(n){return w.from(qs(e?0:-1,n)).filter(t).isSome()}},Fm=function(e){return In(e)&&"block"===Yn(St.fromDom(e),"display")},Um=function(e){return Fn(e)&&!function(e){return Sn(e)&&"all"===e.getAttribute("data-mce-bogus")}(e)},zm=Mm(!0,Fm),jm=Mm(!1,Fm),Hm=Mm(!0,zn),Vm=Mm(!1,zn),qm=Mm(!0,An),$m=Mm(!1,An),Wm=Mm(!0,Um),Km=Mm(!1,Um),Xm=function(e){var t=ku(e,"br"),n=q(function(e){for(var t=[],n=e.dom;n;)t.push(St.fromDom(n)),n=n.lastChild
return t}(e).slice(-1),no)
t.length===n.length&&H(n,sn)},Ym=function(e){cn(e),an(e,St.fromHtml('<br data-mce-bogus="1">'))},Gm=function(e){Xt(e).each((function(t){jt(t).each((function(n){eo(e)&&no(t)&&eo(n)&&sn(t)}))}))},Jm=function(e,t,n){return Rt(t,e)?function(e,t){for(var n=B(t)?t:h,r=e.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,a=St.fromDom(i)
if(o.push(a),!0===n(a))break
r=i}return o}(e,(function(e){return n(e)||_t(e,t)})).slice(0,-1):[]},Qm=function(e,t){return Jm(e,t,h)},Zm=function(e,t){return[e].concat(Qm(e,t))},ep=function(e,t,n){return wf(e,t,n,Im)},tp=function(e,t){return K(Zm(St.fromDom(t.container()),e),eo)},np=function(e,t,n){return ep(e,t.dom,n).forall((function(e){return tp(t,n).fold((function(){return!1===Vs(e,n,t.dom)}),(function(r){return!1===Vs(e,n,t.dom)&&Rt(r,St.fromDom(e.container()))}))}))},rp=function(e,t,n){return tp(t,n).fold((function(){return ep(e,t.dom,n).forall((function(e){return!1===Vs(e,n,t.dom)}))}),(function(t){return ep(e,t.dom,n).isNone()}))},op=l(rp,!1),ip=l(rp,!0),ap=l(np,!1),up=l(np,!0),cp=function(e){return Zs(e).exists(no)},sp=function(e,t,n){var r=q(Zm(St.fromDom(n.container()),t),eo),o=ee(r).getOr(t)
return bf(e,o.dom,n).filter(cp)},fp=function(e,t){return Zs(t).exists(no)||sp(!0,e,t).isSome()},lp=function(e,t){return function(e){return w.from(e.getNode(!0)).map(St.fromDom)}(t).exists(no)||sp(!1,e,t).isSome()},dp=l(sp,!1),mp=l(sp,!0),pp=function(e){return yc.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},gp=function(e,t){var n=q(Zm(St.fromDom(t.container()),e),eo)
return ee(n).getOr(e)},hp=function(e,t){return pp(t)?Lm(t):Lm(t)||Nf(gp(e,t).dom,t).exists(Lm)},vp=function(e,t){return pp(t)?Pm(t):Pm(t)||Sf(gp(e,t).dom,t).exists(Pm)},yp=function(e){return Zs(e).bind((function(e){return Ur(e,Bt)})).exists((function(e){return function(e){return U(["pre","pre-wrap"],e)}(Yn(e,"white-space"))}))},bp=function(e,t){return function(e,t){return Nf(e.dom,t).isNone()}(e,t)||function(e,t){return Sf(e.dom,t).isNone()}(e,t)||op(e,t)||ip(e,t)||lp(e,t)||fp(e,t)},Cp=function(e,t){return!yp(t)&&(op(e,t)||ap(e,t)||lp(e,t)||hp(e,t))},wp=function(e,t){return!yp(t)&&(ip(e,t)||up(e,t)||fp(e,t)||vp(e,t))},xp=function(e,t){return Cp(e,t)||wp(e,function(e){var t=e.container(),n=e.offset()
return Dn(t)&&n<t.data.length?yc(t,n+1):e}(t))},Sp=function(e,t){return zf(e.charAt(t))},Np=function(e){var t=e.container()
return Dn(t)&&Oe(t.data,so)},Ep=function(e){var t=e.data,n=function(e){var t=e.split("")
return j(t,(function(e,n){return zf(e)&&n>0&&n<t.length-1&&Hf(t[n-1])&&Hf(t[n+1])?" ":e})).join("")}(t)
return n!==t&&(e.data=n,!0)},kp=function(e,t){return w.some(t).filter(Np).bind((function(t){var n=t.container()
return function(e,t){var n=t.data,r=yc(t,0)
return!(!Sp(n,0)||xp(e,r)||(t.data=" "+n.slice(1),0))}(e,n)||Ep(n)||function(e,t){var n=t.data,r=yc(t,n.length-1)
return!(!Sp(n,n.length-1)||xp(e,r)||(t.data=n.slice(0,-1)+" ",0))}(e,n)?w.some(t):w.none()}))},_p=function(e){var t=St.fromDom(e.getBody())
e.selection.isCollapsed()&&kp(t,yc.fromRangeStart(e.selection.getRng())).each((function(t){e.selection.setRng(t.toRange())}))},Ap=function(e,t,n){if(0!==n){var r=St.fromDom(e),o=Fr(r,eo).getOr(r),i=e.data.slice(t,t+n),a=t+n>=e.data.length&&wp(o,yc(e,e.data.length)),u=0===t&&Cp(o,yc(e,0))
e.replaceData(t,n,function(e,t,n){return W(e,(function(r,o){return jf(o)||zf(o)?r.previousCharIsSpace||""===r.str&&t||r.str.length===e.length-1&&n?{previousCharIsSpace:!1,str:r.str+so}:{previousCharIsSpace:!0,str:r.str+" "}:{previousCharIsSpace:!1,str:r.str+o}}),{previousCharIsSpace:!1,str:""}).str}(i,u,a))}},Rp=function(e,t){var n=e.data.slice(t),r=n.length-Ie(n).length
return Ap(e,t,r)},Tp=function(e,t){var n=e.data.slice(0,t),r=n.length-Me(n).length
return Ap(e,t-r,r)},Dp=function(e,t,n,r){void 0===r&&(r=!0)
var o=Me(e.data).length,i=r?e:t,a=r?t:e
return r?i.appendData(a.data):i.insertData(0,a.data),sn(St.fromDom(a)),n&&Rp(i,o),i},Op=function(e,t){return function(e,t){var n=e.container(),r=e.offset()
return!1===yc.isTextPosition(e)&&n===t.parentNode&&r>yc.before(t).offset()}(t,e)?yc(t.container(),t.offset()-1):t},Bp=function(e){return Po(e.previousSibling)?w.some((t=e.previousSibling,Dn(t)?yc(t,t.data.length):yc.after(t))):e.previousSibling?kf(e.previousSibling):w.none()
var t},Pp=function(e){return Po(e.nextSibling)?w.some((t=e.nextSibling,Dn(t)?yc(t,0):yc.before(t))):e.nextSibling?Ef(e.nextSibling):w.none()
var t},Lp=function(e,t){return Bp(t).orThunk((function(){return Pp(t)})).orThunk((function(){return function(e,t){var n=yc.before(t.previousSibling?t.previousSibling:t.parentNode)
return Nf(e,n).fold((function(){return Sf(e,yc.after(t))}),w.some)}(e,t)}))},Ip=function(e,t){return Pp(t).orThunk((function(){return Bp(t)})).orThunk((function(){return function(e,t){return Sf(e,yc.after(t)).fold((function(){return Nf(e,yc.before(t))}),w.some)}(e,t)}))},Mp=function(e,t,n){return function(e,t,n){return e?Ip(t,n):Lp(t,n)}(e,t,n).map(l(Op,n))},Fp=function(e,t,n){n.fold((function(){e.focus()}),(function(n){e.selection.setRng(n.toRange(),t)}))},Up=function(e,t){return t&&pe(e.schema.getBlockElements(),Tt(t))},zp=function(e){if(qo(e)){var t=St.fromHtml('<br data-mce-bogus="1">')
return cn(e),an(e,t),w.some(yc.before(t.dom))}return w.none()},jp=function(e,t,n){var r,o,i,a,u=jt(e).filter(Pt),c=Ht(e).filter(Pt)
return sn(e),(r=u,o=c,i=t,a=function(e,t,r){var o=e.dom,i=t.dom,a=o.data.length
return Dp(o,i,n),r.container()===i?yc(o,a):r},r.isSome()&&o.isSome()&&i.isSome()?w.some(a(r.getOrDie(),o.getOrDie(),i.getOrDie())):w.none()).orThunk((function(){return n&&(u.each((function(e){return Tp(e.dom,e.dom.length)})),c.each((function(e){return Rp(e.dom,0)}))),t}))},Hp=function(e,t,n,r){void 0===r&&(r=!0)
var o,i=Mp(t,e.getBody(),n.dom),a=Fr(n,l(Up,e),(o=e.getBody(),function(e){return e.dom===o})),u=jp(n,i,function(e,t){return pe(e.schema.getTextInlineElements(),Tt(t))}(e,n))
e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):a.bind(zp).fold((function(){r&&Fp(e,t,u)}),(function(n){r&&Fp(e,t,w.some(n))}))},Vp=function(e,t){return{start:e,end:t}},qp=gr([{removeTable:["element"]},{emptyCells:["cells"]},{deleteCellSelection:["rng","cell"]}]),$p=function(e,t){return Vr(St.fromDom(e),"td,th",t)},Wp=function(e,t){return jr(e,"table",t)},Kp=function(e){return!_t(e.start,e.end)},Xp=function(e,t){return Wp(e.start,t).bind((function(n){return Wp(e.end,t).bind((function(e){return t=_t(n,e),r=n,t?w.some(r):w.none()
var t,r}))}))},Yp=function(e){return ku(e,"td,th")},Gp=function(e,t){var n=$p(t.startContainer,e),r=$p(t.endContainer,e)
return t.collapsed?w.none():Hu(n,r,Vp).fold((function(){return n.fold((function(){return r.bind((function(t){return Wp(t,e).bind((function(e){return ee(Yp(e)).map((function(e){return Vp(e,t)}))}))}))}),(function(t){return Wp(t,e).bind((function(e){return te(Yp(e)).map((function(e){return Vp(t,e)}))}))}))}),(function(t){return Jp(e,t)?w.none():function(e,t){return Wp(e.start,t).bind((function(t){return te(Yp(t)).map((function(t){return Vp(e.start,t)}))}))}(t,e)}))},Jp=function(e,t){return Xp(t,e).isSome()},Qp=function(e,t,n){return e.filter((function(e){return Kp(e)&&Jp(n,e)})).orThunk((function(){return Gp(n,t)})).bind((function(e){return function(e,t){return Xp(e,t).map((function(t){return function(e,t,n){return{rng:e,table:t,cells:n}}(e,t,Yp(t))}))}(e,n)}))},Zp=function(e,t){return X(e,(function(e){return _t(e,t)}))},eg=function(e,t,n){return e.filter((function(e){return function(e,t){return!Kp(e)&&Xp(e,t).exists((function(e){var t=e.dom.rows
return 1===t.length&&1===t[0].cells.length}))}(e,n)&&Al(e.start,t)})).map((function(e){return e.start}))},tg=function(e){return function(e){return Hu(Zp(e.cells,e.rng.start),Zp(e.cells,e.rng.end),(function(t,n){return e.cells.slice(t,n+1)}))}(e).map((function(t){var n=e.cells
return t.length===n.length?qp.removeTable(e.table):qp.emptyCells(t)}))},ng=function(e,t){var n=function(e){return function(t){return _t(e,t)}}(e),r=function(e,t){var n=$p(e.startContainer,t),r=$p(e.endContainer,t)
return Hu(n,r,Vp)}(t,n)
return eg(r,t,n).map((function(e){return qp.deleteCellSelection(t,e)})).orThunk((function(){return Qp(r,t,n).bind(tg)}))},rg=function(e){var t
return(8===Dt(t=e)||"#comment"===Tt(t)?jt(e):Xt(e)).bind(rg).orThunk((function(){return w.some(e)}))},og=function(e,t){return H(t,Ym),e.selection.setCursorLocation(t[0].dom,0),!0},ig=function(e,t,n){t.deleteContents()
var r,o=rg(n).getOr(n),i=St.fromDom(e.dom.getParent(o.dom,e.dom.isBlock))
if(qo(i)&&(Ym(i),e.selection.setCursorLocation(i.dom,0)),!_t(n,i)){var a=zt(i).is(n)?[]:zt(r=i).map($t).map((function(e){return q(e,(function(e){return!_t(r,e)}))})).getOr([])
H(a.concat($t(n)),(function(e){_t(e,i)||Rt(e,i)||sn(e)}))}return!0},ag=function(e,t){return Hp(e,!1,t),!0},ug=function(e,t,n,r){return sg(t,r).fold((function(){return function(e,t,n){return ng(t,n).map((function(t){return t.fold(l(ag,e),l(og,e),l(ig,e))}))}(e,t,n)}),(function(t){return function(e,t){return fg(e,t)}(e,t)})).getOr(!1)},cg=function(e,t){return K(Zm(t,e),uo)},sg=function(e,t){return K(Zm(t,e),(function(e){return"caption"===Tt(e)}))},fg=function(e,t){return Ym(t),e.selection.setCursorLocation(t.dom,0),w.some(!0)},lg=function(e,t,n,r,o){return Cf(n,e.getBody(),o).bind((function(i){return function(e,t,n,r){return Ef(e.dom).bind((function(o){return kf(e.dom).map((function(e){return t?n.isEqual(o)&&r.isEqual(e):n.isEqual(e)&&r.isEqual(o)}))})).getOr(!0)}(r,n,o,i)?function(e,t){return fg(e,t)}(e,r):function(e,t,n){return sg(e,St.fromDom(n.getNode())).map((function(e){return!1===_t(e,t)}))}(t,r,i)})).or(w.some(!0))},dg=function(e,t,n,r){var o=yc.fromRangeStart(e.selection.getRng())
return cg(n,r).bind((function(r){return qo(r)?fg(e,r):function(e,t,n,r,o){return Cf(n,e.getBody(),o).bind((function(e){return cg(t,St.fromDom(e.getNode())).map((function(e){return!1===_t(e,r)}))}))}(e,n,t,r,o)})).getOr(!1)},mg=function(e,t){return e?qm(t):$m(t)},pg=function(e,t,n){var r=St.fromDom(e.getBody())
return sg(r,n).fold((function(){return dg(e,t,r,n)||function(e,t){var n=yc.fromRangeStart(e.selection.getRng())
return mg(t,n)||bf(t,e.getBody(),n).exists((function(e){return mg(t,e)}))}(e,t)}),(function(n){return function(e,t,n,r){var o=yc.fromRangeStart(e.selection.getRng())
return qo(r)?fg(e,r):lg(e,n,t,r,o)}(e,t,r,n).getOr(!1)}))},gg=function(e,t){var n=St.fromDom(e.selection.getStart(!0)),r=El(e)
return e.selection.isCollapsed()&&0===r.length?pg(e,t,n):function(e,t){var n=St.fromDom(e.getBody()),r=e.selection.getRng(),o=El(e)
return 0!==o.length?og(e,o):ug(e,n,r,t)}(e,n)},hg=function(e){var t=yc.fromRangeStart(e),n=yc.fromRangeEnd(e),r=e.commonAncestorContainer
return bf(!1,r,n).map((function(o){return!Vs(t,n,r)&&Vs(t,o,r)?function(e,t,n,r){var o=document.createRange()
return o.setStart(e,t),o.setEnd(n,r),o}(t.container(),t.offset(),o.container(),o.offset()):e})).getOr(e)},vg=function(e){return e.collapsed?e:hg(e)},yg=function(e,t){return e.getBlockElements()[t.name]&&function(e){return e.firstChild&&e.firstChild===e.lastChild}(t)&&function(e){return"br"===e.name||e.value===so}(t.firstChild)},bg=function(e,t){var n=t.firstChild,r=t.lastChild
return n&&"meta"===n.name&&(n=n.next),r&&"mce_marker"===r.attr("id")&&(r=r.prev),function(e,t){var n=e.getNonEmptyElements()
return t&&(t.isEmpty(n)||yg(e,t))}(e,r)&&(r=r.prev),!(!n||n!==r)&&("ul"===n.name||"ol"===n.name)},Cg=function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&function(e){return e.data===so||Ln(e)}(e.firstChild)},wg=function(e){return e.length>0&&(!(t=e[e.length-1]).firstChild||Cg(t))?e.slice(0,-1):e
var t},xg=function(e,t){var n=e.getParent(t,e.isBlock)
return n&&"LI"===n.nodeName?n:null},Sg=function(e,t){var n=yc.after(e),r=pf(t).prev(n)
return r?r.toRange():null},Ng=function(e,t,n){var r=e.parentNode
return wt.each(t,(function(t){r.insertBefore(t,e)})),function(e,t){var n=yc.before(e),r=pf(t).next(n)
return r?r.toRange():null}(e,n)},Eg=function(e,t,n,r){var o,i=function(e,t,n){var r=t.serialize(n)
return function(e){var t=e.firstChild,n=e.lastChild
return t&&"META"===t.nodeName&&t.parentNode.removeChild(t),n&&"mce_marker"===n.id&&n.parentNode.removeChild(n),e}(e.createFragment(r))}(t,e,r),a=xg(t,n.startContainer),u=wg((o=i.firstChild,wt.grep(o.childNodes,(function(e){return"LI"===e.nodeName})))),c=t.getRoot(),s=function(e){var r=yc.fromRangeStart(n),o=pf(t.getRoot()),i=1===e?o.prev(r):o.next(r)
return!i||xg(t,i.getNode())!==a}
return s(1)?Ng(a,u,c):s(2)?function(e,t,n,r){return r.insertAfter(t.reverse(),e),Sg(t[0],n)}(a,u,c,t):function(e,t,n,r){var o=function(e,t){var n=t.cloneRange(),r=t.cloneRange()
return n.setStartBefore(e),r.setEndAfter(e),[n.cloneContents(),r.cloneContents()]}(e,r),i=e.parentNode
return i.insertBefore(o[0],e),wt.each(t,(function(t){i.insertBefore(t,e)})),i.insertBefore(o[1],e),i.removeChild(e),Sg(t[t.length-1],n)}(a,u,c,n)},kg=Un,_g=function(e){var t=e.dom,n=vg(e.selection.getRng())
e.selection.setRng(n)
var r=t.getParent(n.startContainer,kg)
!function(e,t,n){return null!==n&&n===e.getParent(t.endContainer,kg)&&Al(St.fromDom(n),t)}(t,n,r)?e.getDoc().execCommand("Delete",!1,null):ig(e,n,St.fromDom(r))},Ag=function(e,t,n){var r,o,i,a,u,c,s=e.selection,f=e.dom;/^ | $/.test(t)&&(t=function(e,t,n){var r=St.fromDom(e.getRoot())
return n=Cp(r,yc.fromRangeStart(t))?n.replace(/^ /,"&nbsp;"):n.replace(/^&nbsp;/," "),wp(r,yc.fromRangeEnd(t))?n.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):n.replace(/&nbsp;(<br( \/)?>)?$/," ")}(f,s.getRng(),t))
var l=e.parser,d=n.merge,m=Om({validate:cs(e)},e.schema),p='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>'
if(i={content:t,format:"html",selection:!0,paste:n.paste},(i=e.fire("BeforeSetContent",i)).isDefaultPrevented())e.fire("SetContent",{content:i.content,format:"html",selection:!0,paste:n.paste})
else{-1===(t=i.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,p)
var g=(u=s.getRng()).startContainer||(u.parentElement?u.parentElement():null),h=e.getBody()
g===h&&s.isCollapsed()&&f.isBlock(h.firstChild)&&function(e,t){return t&&!e.schema.getShortEndedElements()[t.nodeName]}(e,h.firstChild)&&f.isEmpty(h.firstChild)&&((u=f.createRng()).setStart(h.firstChild,0),u.setEnd(h.firstChild,0),s.setRng(u)),s.isCollapsed()||_g(e)
var v,y={context:(r=s.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0},b=l.parse(t,y)
if(!0===n.paste&&bg(e.schema,b)&&function(e,t){return!!xg(e,t)}(f,r))return u=Eg(m,f,s.getRng(),b),s.setRng(u),void e.fire("SetContent",i)
if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(b),"mce_marker"===(c=b.lastChild).attr("id"))for(a=c,c=c.prev;c;c=c.walk(!0))if(3===c.type||!f.isBlock(c.name)){e.schema.isValidChild(c.parent.name,"span")&&c.parent.insert(a,c,"br"===c.name)
break}if(e._selectionOverrides.showBlockCaretContainer(r),y.invalid){for(e.selection.setContent(p),r=s.getNode(),o=e.getBody(),9===r.nodeType?r=c=o:c=r;c!==o;)r=c,c=c.parentNode
t=r===o?o.innerHTML:f.getOuterHTML(r),t=m.serialize(l.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,(function(){return m.serialize(b)})))),r===o?f.setHTML(o,t):f.setOuterHTML(r,t)}else(function(e,t,n){if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n)
else{var r=n.firstChild,o=n.lastChild
!r||r===o&&"BR"===r.nodeName?e.dom.setHTML(n,t):e.selection.setContent(t)}})(e,t=m.serialize(b),r);(function(e,t){var n=e.schema.getTextInlineElements(),r=e.dom
if(t){var o=e.getBody(),i=Rm(r)
wt.each(r.select("*[data-mce-fragment]"),(function(e){for(var t=e.parentNode;t&&t!==o;t=t.parentNode)n[e.nodeName.toLowerCase()]&&i.compare(t,e)&&r.remove(e,!0)}))}})(e,d),function(e,t){var n,r,o=e.dom,i=e.selection
if(t){i.scrollIntoView(t)
var a=function(t){for(var n=e.getBody();t&&t!==n;t=t.parentNode)if("false"===o.getContentEditable(t))return t
return null}(t)
if(a)return o.remove(t),void i.select(a)
var u=o.createRng(),c=t.previousSibling
c&&3===c.nodeType?(u.setStart(c,c.nodeValue.length),ht.ie||(r=t.nextSibling)&&3===r.nodeType&&(c.appendData(r.data),r.parentNode.removeChild(r))):(u.setStartBefore(t),u.setEndBefore(t))
var s=o.getParent(t,o.isBlock)
o.remove(t),s&&o.isEmpty(s)&&(e.$(s).empty(),u.setStart(s,0),u.setEnd(s,0),kg(s)||function(e){return!!e.getAttribute("data-mce-fragment")}(s)||!(n=function(t){var n=yc.fromRangeStart(t)
if(n=pf(e.getBody()).next(n))return n.toRange()}(u))?o.add(s,o.create("br",{"data-mce-bogus":"1"})):(u=n,o.remove(s))),i.setRng(u)}}(e,f.get("mce_marker")),v=e.getBody(),wt.each(v.getElementsByTagName("*"),(function(e){e.removeAttribute("data-mce-fragment")})),function(e,t){w.from(e.getParent(t,"td,th")).map(St.fromDom).each(Gm)}(f,s.getStart()),e.fire("SetContent",i),e.addVisual()}},Rg=function(e,t){t(e),e.firstChild&&Rg(e.firstChild,t),e.next&&Rg(e.next,t)},Tg=function(e,t,n){var r=function(e,t,n){var r={},o={},i=[]
for(var a in n.firstChild&&Rg(n.firstChild,(function(n){H(e,(function(e){e.name===n.name&&(r[e.name]?r[e.name].nodes.push(n):r[e.name]={filter:e,nodes:[n]})})),H(t,(function(e){"string"==typeof n.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(n):o[e.name]={filter:e,nodes:[n]})}))})),r)r.hasOwnProperty(a)&&i.push(r[a])
for(var u in o)o.hasOwnProperty(u)&&i.push(o[u])
return i}(e,t,n)
H(r,(function(e){H(e.filter.callbacks,(function(t){t(e.nodes,e.filter.name,{})}))}))},Dg=function(e){return e instanceof ym},Og=function(e,t){e.dom.setHTML(e.getBody(),t),function(e){im(e)&&Ef(e.getBody()).each((function(t){var n=t.getNode(),r=An(n)?Ef(n).getOr(t):t
e.selection.setRng(r.toRange())}))}(e)},Bg=function(e,t,n){return n.format=n.format?n.format:"html",n.set=!0,n.content=Dg(t)?"":t,n.no_events||e.fire("BeforeSetContent",n),Dg(t)||(t=n.content),w.from(e.getBody()).fold(s(t),(function(r){return Dg(t)?function(e,t,n,r){Tg(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n)
var o=Om({validate:e.validate},e.schema).serialize(n)
return r.content=co(St.fromDom(t))?o:wt.trim(o),Og(e,r.content),r.no_events||e.fire("SetContent",r),n}(e,r,t,n):function(e,t,n,r){var o,i
return 0===n.length||/^\s+$/.test(n)?(i='<br data-mce-bogus="1">',"TABLE"===t.nodeName?n="<tr><td>"+i+"</td></tr>":/^(UL|OL)$/.test(t.nodeName)&&(n="<li>"+i+"</li>"),(o=$c(e))&&e.schema.isValidChild(t.nodeName.toLowerCase(),o.toLowerCase())?(n=i,n=e.dom.createHTML(o,Wc(e),n)):n||(n='<br data-mce-bogus="1">'),Og(e,n),e.fire("SetContent",r)):("raw"!==r.format&&(n=Om({validate:e.validate},e.schema).serialize(e.parser.parse(n,{isRootContent:!0,insert:!0}))),r.content=co(St.fromDom(t))?n:wt.trim(n),Og(e,r.content),r.no_events||e.fire("SetContent",r)),r.content}(e,r,t,n)}))},Pg=function(e,t){return function(e,t){var n=e.dom
return n.parentNode?zr(St.fromDom(n.parentNode),(function(n){return!_t(e,n)&&t(n)})):w.none()}(e,t).isSome()},Lg=function(e){return B(e)?e:h},Ig=function(e,t,n){var r=t(e),o=Lg(n)
return r.orThunk((function(){return o(e)?w.none():function(e,t,n){for(var r=e.dom,o=Lg(n);r.parentNode;){r=r.parentNode
var i=St.fromDom(r),a=t(i)
if(a.isSome())return a
if(o(i))break}return w.none()}(e,t,o)}))},Mg=Gf,Fg=function(e,t,n){var r=e.formatter.get(n)
if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0
return!1},Ug=function(e,t,n,r){var o=e.dom.getRoot()
return t!==o&&(t=e.dom.getParent(t,(function(t){return!!Fg(e,t,n)||(t.parentNode===o||!!Hg(e,t,n,r,!0))})),Hg(e,t,n,r))},zg=function(e,t,n){return!!Mg(t,n.inline)||(!!Mg(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0))},jg=function(e,t,n,r,o,i){var a,u,c,s=n[r]
if(n.onmatch)return n.onmatch(t,n,r)
if(s)if(void 0===s.length){for(a in s)if(s.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):Qf(e,t,a),o&&!u&&!n.exact)return
if((!o||n.exact)&&!Mg(u,Jf(e,Yf(s[a],i),a)))return}}else for(c=0;c<s.length;c++)if("attributes"===r?e.getAttrib(t,s[c]):Qf(e,t,s[c]))return n
return n},Hg=function(e,t,n,r,o){var i,a,u,c,s=e.formatter.get(n),f=e.dom
if(s&&t)for(a=0;a<s.length;a++)if(i=s[a],zg(e.dom,t,i)&&jg(f,t,i,"attributes",o,r)&&jg(f,t,i,"styles",o,r)){if(c=i.classes)for(u=0;u<c.length;u++)if(!e.dom.hasClass(t,c[u]))return
return i}},Vg=function(e,t,n,r){if(r)return Ug(e,r,t,n)
if(r=e.selection.getNode(),Ug(e,r,t,n))return!0
var o=e.selection.getStart()
return!(o===r||!Ug(e,o,t,n))},qg=function(e,t){var n=function(t){return _t(t,St.fromDom(e.getBody()))}
return w.from(e.selection.getStart(!0)).bind((function(r){return Ig(St.fromDom(r),(function(n){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n)
if(r.isSome())return r}return w.none()}(t,(function(t){return function(t,n){return Hg(e,t.dom,n)?w.some(n):w.none()}(n,t)}))}),n)})).getOrNull()},$g=function(e,t,n){return W(n,(function(n,r){var o=function(e,t){return z(e.formatter.get(t),(function(e){var t=function(e){return e.length>1&&"%"===e.charAt(0)}
return z(["styles","attributes"],(function(n){return me(e,n).exists((function(e){var n=_(e)?e:de(e)
return z(n,t)}))}))}))}(e,r)
return e.formatter.matchNode(t,r,{},o)?n.concat([r]):n}),[])},Wg=fo,Kg="_mce_caret",Xg=function(e){return function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==Wg||e.childNodes.length>1)return[]
1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length>0},Yg=function(e){if(e){var t=new Jr(e,e)
for(e=t.current();e;e=t.next())if(Dn(e))return e}return null},Gg=function(e){var t=St.fromTag("span")
return qn(t,{id:Kg,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&an(t,St.fromText(Wg)),t},Jg=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(Xg(t))Hp(e,!1,St.fromDom(t),n)
else{var i=o.getRng(),a=r.getParent(t,r.isBlock),u=i.startContainer,c=i.startOffset,s=i.endContainer,f=i.endOffset,l=function(e){var t=Yg(e)
return t&&t.nodeValue.charAt(0)===Wg&&t.deleteData(0,1),t}(t)
r.remove(t,!0),u===l&&c>0&&i.setStart(l,c-1),s===l&&f>0&&i.setEnd(l,f-1),a&&r.isEmpty(a)&&Ym(St.fromDom(a)),o.setRng(i)}},Qg=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(t)Jg(e,t,n)
else if(!(t=Rf(e.getBody(),o.getStart())))for(;t=r.get(Kg);)Jg(e,t,!1)},Zg=function(e,t){return e.appendChild(t),t},eh=function(e,t){var n=$(e,(function(e,t){return Zg(e,t.cloneNode(!1))}),t)
return Zg(n,n.ownerDocument.createTextNode(Wg))},th=function(e,t,n,r){var o,i,a,u=e.dom,c=e.selection,s=[],f=c.getRng(),d=f.startContainer,m=f.startOffset
for(i=d,3===d.nodeType&&(m!==d.nodeValue.length&&(o=!0),i=i.parentNode);i;){if(Hg(e,i,t,n,r)){a=i
break}i.nextSibling&&(o=!0),s.push(i),i=i.parentNode}if(a)if(o){var p=c.getBookmark()
f.collapse(!0)
var g=bl(e,f,e.formatter.get(t),!0)
g=ad(g),e.formatter.remove(t,n,g,r),c.moveToBookmark(p)}else{var h=Rf(e.getBody(),a),v=Gg(!1).dom;(function(e,t,n){var r=e.dom,o=r.getParent(n,l(Wf,e))
o&&r.isEmpty(o)?n.parentNode.replaceChild(t,n):(Xm(St.fromDom(n)),r.isEmpty(n)?n.parentNode.replaceChild(t,n):r.insertAfter(t,n))})(e,v,null!==h?h:a)
var y=function(e,t,n,r,o,i){var a=e.formatter,u=e.dom,c=q(re(a.get()),(function(e){return e!==r&&!Oe(e,"removeformat")})),s=$g(e,n,c)
if(q(s,(function(t){return!tl(e,t,r)})).length>0){var f=n.cloneNode(!1)
return u.add(t,f),a.remove(r,o,f,i),u.remove(f),w.some(f)}return w.none()}(e,v,a,t,n,r),b=eh(s.concat(y.toArray()),v)
Jg(e,h,!1),c.setCursorLocation(b,1),u.isEmpty(a)&&u.remove(a)}},nh=function(e){e.on("mouseup keydown",(function(t){(function(e,t){var n=e.selection,r=e.getBody()
Qg(e,null,!1),8!==t&&46!==t||!n.isCollapsed()||n.getStart().innerHTML!==Wg||Qg(e,Rf(r,n.getStart())),37!==t&&39!==t||Qg(e,Rf(r,n.getStart()))})(e,t.keyCode)}))},rh=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(Tt(t))&&!Af(t.dom)&&!_n(t.dom)},oh={},ih=be,ah=ve;(function(e,t){oh[e]||(oh[e]=[]),oh[e].push(t)})("pre",(function(e){var t,n=e.selection.getRng(),r=Nn(["pre"])
n.collapsed||(t=e.selection.getSelectedBlocks(),ah(ih(ih(t,r),(function(e){return r(e.previousSibling)&&-1!==Ce(t,e.previousSibling)})),(function(e){var t,n
t=e.previousSibling,Qa(n=e).remove(),Qa(t).append("<br><br>").append(n.childNodes)})))}))
var uh=wt.each,ch=function(e){return Sn(e)&&!Uf(e)&&!Af(e)&&!_n(e)},sh=function(e,t){var n
for(n=e;n;n=n[t]){if(Dn(n)&&0!==n.nodeValue.length)return e
if(Sn(n)&&!Uf(n))return n}return e},fh=function(e,t,n){var r,o,i=Rm(e)
if(t&&n&&(t=sh(t,"previousSibling"),n=sh(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)o=r,r=r.nextSibling,t.appendChild(o)
return e.remove(n),wt.each(wt.grep(n.childNodes),(function(e){t.appendChild(e)})),t}return n},lh=function(e,t,n,r){if(r&&!1!==t.merge_siblings){var o=fh(e,$f(r),r)
fh(e,o,$f(o,!0))}},dh=function(e,t,n){uh(e.childNodes,(function(e){ch(e)&&(t(e)&&n(e),e.hasChildNodes()&&dh(e,t,n))}))},mh=function(e,t){return function(n){return!(!n||!Qf(e,n,t))}},ph=function(e,t,n){return function(r){e.setStyle(r,t,n),""===r.getAttribute("style")&&r.removeAttribute("style"),function(e,t){"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,!0)}(e,r)}},gh=gr([{keep:[]},{rename:["name"]},{removed:[]}]),hh=/^(src|href|style)$/,vh=wt.each,yh=Gf,bh=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},Ch=function(e,t,n){var r,o
if(r=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],Sn(r)){var i=r.childNodes.length-1
!n&&o&&o--,r=r.childNodes[o>i?i:o]}return Dn(r)&&n&&o>=r.nodeValue.length&&(r=new Jr(r,e.getBody()).next()||r),Dn(r)&&!n&&0===o&&(r=new Jr(r,e.getBody()).prev()||r),r},wh=function(e,t){var n=t?"firstChild":"lastChild"
if(function(e){return/^(TR|TH|TD)$/.test(e.nodeName)}(e)&&e[n]){var r=e[n]
return"TR"===e.nodeName&&r[n]||r}return e},xh=function(e,t,n,r){var o=e.create(n,r)
return t.parentNode.insertBefore(o,t),o.appendChild(t),o},Sh=function(e,t,n,r,o){var i=St.fromDom(t),a=St.fromDom(e.create(r,o)),u=n?qt(i):Vt(i)
return un(a,u),n?(nn(i,a),on(a,i)):(rn(i,a),an(a,i)),a.dom},Nh=function(e,t,n,r){return!(t=$f(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},Eh=function(e,t,n,r,o){var i,a=e.dom
if(!function(e,t,n){return!!yh(t,n.inline)||!!yh(t,n.block)||(n.selector?Sn(t)&&e.is(t,n.selector):void 0)}(a,r,t)&&!function(e,t){return t.links&&"A"===e.nodeName}(r,t))return gh.keep()
var u=r
if(t.inline&&"all"===t.remove&&_(t.preserve_attributes)){var c=q(a.getAttribs(u),(function(e){return U(t.preserve_attributes,e.name.toLowerCase())}))
if(a.removeAllAttribs(u),H(c,(function(e){return a.setAttrib(u,e.name,e.value)})),c.length>0)return gh.rename("span")}if("all"!==t.remove){vh(t.styles,(function(e,r){e=Jf(a,Yf(e,n),r+""),P(r)&&(r=e,o=null),(t.remove_similar||!o||yh(Qf(a,o,r),e))&&a.setStyle(u,r,""),i=!0})),i&&""===a.getAttrib(u,"style")&&(u.removeAttribute("style"),u.removeAttribute("data-mce-style")),vh(t.attributes,(function(e,r){var i
if(e=Yf(e,n),P(r)&&(r=e,o=null),t.remove_similar||!o||yh(a.getAttrib(o,r),e)){if("class"===r&&(e=a.getAttrib(u,r))&&(i="",H(e.split(/\s+/),(function(e){/mce\-\w+/.test(e)&&(i+=(i?" ":"")+e)})),i))return void a.setAttrib(u,r,i)
"class"===r&&u.removeAttribute("className"),hh.test(r)&&u.removeAttribute("data-mce-"+r),u.removeAttribute(r)}})),vh(t.classes,(function(e){e=Yf(e,n),o&&!a.hasClass(o,e)||a.removeClass(u,e)}))
for(var s=a.getAttribs(u),f=0;f<s.length;f++){var l=s[f].nodeName
if(0!==l.indexOf("_")&&0!==l.indexOf("data-"))return gh.keep()}}return"none"!==t.remove?(function(e,t,n){var r,o=t.parentNode,i=e.dom,a=$c(e)
n.block&&(a?o===i.getRoot()&&(n.list_block&&yh(t,n.list_block)||H(ne(t.childNodes),(function(t){Kf(e,a,t.nodeName.toLowerCase())?r?r.appendChild(t):(r=xh(i,t,a),i.setAttribs(r,e.settings.forced_root_block_attrs)):r=0}))):i.isBlock(t)&&!i.isBlock(o)&&(Nh(i,t,!1)||Nh(i,t.firstChild,!0,!0)||t.insertBefore(i.create("br"),t.firstChild),Nh(i,t,!0)||Nh(i,t.lastChild,!1,!0)||t.appendChild(i.create("br")))),n.selector&&n.inline&&!yh(n.inline,t)||i.remove(t,!0)}(e,u,t),gh.removed()):gh.keep()},kh=function(e,t,n,r,o){return Eh(e,t,n,r,o).fold(h,(function(t){return e.dom.rename(r,t),!0}),v)},_h=function(e,t,n,r){return Eh(e,t,n,r,r).fold(s(r),(function(t){return e.dom.createFragment().appendChild(r),e.dom.rename(r,t)}),s(null))},Ah=function(e,t,n,r,o){var i=e.formatter.get(t),a=i[0],u=!0,c=e.dom,s=e.selection,f=function(r){var u=function(e,t,n,r,o){var i
return H(el(e.dom,t.parentNode).reverse(),(function(t){if(!i&&"_start"!==t.id&&"_end"!==t.id){var a=Hg(e,t,n,r,o)
a&&!1!==a.split&&(i=t)}})),i}(e,r,t,n,o)
return function(e,t,n,r,o,i,a,u){var c,s,f,l=e.dom
if(n){for(var d=n.parentNode,m=r.parentNode;m&&m!==d;m=m.parentNode){c=l.clone(m,!1)
for(var p=0;p<t.length&&null!==(c=_h(e,t[p],u,c));p++);c&&(s&&c.appendChild(s),f||(f=c),s=c)}!i||a.mixed&&l.isBlock(n)||(r=l.split(n,r)),s&&(o.parentNode.insertBefore(s,o),f.appendChild(o),a.inline&&lh(l,a,0,s))}return r}(e,i,u,r,r,!0,a,n)},l=function(t){var r,o
Sn(t)&&c.getContentEditable(t)&&(r=u,u="true"===c.getContentEditable(t),o=!0)
var s=ne(t.childNodes)
if(u&&!o)for(var f=0;f<i.length&&!kh(e,i[f],n,t,t);f++);if(a.deep&&s.length){for(f=0;f<s.length;f++)l(s[f])
o&&(u=r)}},d=function(e){var t=c.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"]
return function(e){return Uf(e)&&Sn(e)&&("_start"===e.id||"_end"===e.id)}(n)&&(n=n[e?"firstChild":"lastChild"]),Dn(n)&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),c.remove(t,!0),n},m=function(t){var n,r,o=bl(e,t,i,t.collapsed)
if(a.split){if(o=ad(o),(n=Ch(e,o,!0))!==(r=Ch(e,o))){if(n=wh(n,!0),r=wh(r,!1),bh(c,n,r)){var u=w.from(n.firstChild).getOr(n)
return f(Sh(c,u,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void d(!0)}if(bh(c,r,n)){u=w.from(r.lastChild).getOr(r)
return f(Sh(c,u,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void d(!1)}n=xh(c,n,"span",{id:"_start","data-mce-type":"bookmark"}),r=xh(c,r,"span",{id:"_end","data-mce-type":"bookmark"})
var s=c.createRng()
s.setStartAfter(n),s.setEndBefore(r),wl(c,s,(function(e){H(e,(function(e){Uf(e)||Uf(e.parentNode)||f(e)}))})),f(n),f(r),n=d(!0),r=d()}else n=r=f(n)
o.startContainer=n.parentNode?n.parentNode:n,o.startOffset=c.nodeIndex(n),o.endContainer=r.parentNode?r.parentNode:r,o.endOffset=c.nodeIndex(r)+1}wl(c,o,(function(t){H(t,(function(t){l(t)
H(["underline","line-through","overline"],(function(n){Sn(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&Zf(c,t.parentNode)===n&&kh(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))}))}))}
if(r)if(Vf(r)){var p=c.createRng()
p.setStartBefore(r),p.setEndAfter(r),m(p)}else m(r)
else if("false"!==c.getContentEditable(s.getNode()))s.isCollapsed()&&a.inline&&!El(e).length?th(e,t,n,o):(Ol(s,!0,(function(){Dl(e,m)})),a.inline&&Vg(e,t,n,s.getStart())&&qf(c,s,s.getRng()),e.nodeChanged())
else{r=s.getNode()
for(var g=0;g<i.length&&(!i[g].ceFalseOverride||!kh(e,i[g],n,r,r));g++);}},Rh=wt.each,Th=function(e,t,n,r){Rh(t,(function(t){Rh(e.dom.select(t.inline,r),(function(r){ch(r)&&kh(e,t,n,r,t.exact?r:null)})),function(e,t,n){if(t.clear_child_styles){var r=t.links?"*:not(a)":"*"
uh(e.select(r,n),(function(n){ch(n)&&uh(t.styles,(function(t,r){e.setStyle(n,r,"")}))}))}}(e.dom,t,r)}))},Dh=wt.each,Oh=function(e,t){return ge(e,t)},Bh=function(e,t,n,r){var o=e.formatter.get(t),i=o[0],a=!r&&e.selection.isCollapsed(),u=e.dom,c=e.selection,s=function(e,t){if(t=t||i,e){if(t.onformat&&t.onformat(e,t,n,r),Dh(t.styles,(function(t,r){u.setStyle(e,r,Yf(t,n))})),t.styles){var o=u.getAttrib(e,"style")
o&&u.setAttrib(e,"data-mce-style",o)}Dh(t.attributes,(function(t,r){u.setAttrib(e,r,Yf(t,n))})),Dh(t.classes,(function(t){t=Yf(t,n),u.hasClass(e,t)||u.addClass(e,t)}))}},f=function(e,t){var n=!1
return!!rl(i)&&(Dh(e,(function(e){if(!("collapsed"in e)||e.collapsed===a)return u.is(t,e.selector)&&!Af(t)?(s(t,e),n=!0,!1):void 0})),n)},l=function(r,a,u,c){var l=[],d=!0,m=i.inline||i.block,p=r.create(m)
s(p),wl(r,a,(function(a){var u,g=function(a){var h=!1,v=d,y=a.nodeName.toLowerCase(),b=a.parentNode.nodeName.toLowerCase()
if(Sn(a)&&r.getContentEditable(a)&&(v=d,d="true"===r.getContentEditable(a),h=!0),Ln(a)&&!function(e,t,n,r){if(function(e){return e.getParam("format_empty_lines",!1,"boolean")}(e)&&ol(t)){var o=Ne(Ne({},e.schema.getTextBlockElements()),{td:{},th:{},li:{},dt:{},dd:{},figcaption:{},caption:{},details:{},summary:{}}),i=Pg(St.fromDom(n),(function(e){return Af(e.dom)}))
return ge(o,r)&&qo(St.fromDom(n.parentNode),!1)&&!i}return!1}(e,i,a,b))return u=null,void(nl(i)&&r.remove(a))
if(i.wrapper&&Hg(e,a,t,n))u=null
else{if(d&&!h&&nl(i)&&!i.wrapper&&Wf(e,y)&&Kf(e,b,m)){var C=r.rename(a,m)
return s(C),l.push(C),void(u=null)}if(rl(i)){var w=f(o,a)
if(!Oh(i,"inline")||w)return void(u=null)}!d||h||!Kf(e,m,y)||!Kf(e,b,m)||!c&&3===a.nodeType&&1===a.nodeValue.length&&65279===a.nodeValue.charCodeAt(0)||Af(a)||Oh(i,"inline")&&r.isBlock(a)?(u=null,Dh(wt.grep(a.childNodes),g),h&&(d=v),u=null):(u||(u=r.clone(p,!1),a.parentNode.insertBefore(u,a),l.push(u)),u.appendChild(a))}}
Dh(a,g)})),!0===i.links&&Dh(l,(function(e){var t=function(e){"A"===e.nodeName&&s(e,i),Dh(wt.grep(e.childNodes),t)}
t(e)})),Dh(l,(function(a){var u=function(e){var t=!1
return Dh(e.childNodes,(function(e){if(function(e){return e&&1===e.nodeType&&!Uf(e)&&!Af(e)&&!_n(e)}(e))return t=e,!1})),t},c=function(e){var t=0
return Dh(e.childNodes,(function(e){(function(e){return O(e)&&Dn(e)&&0===e.length})(e)||Uf(e)||t++})),t}(a)
!(l.length>1)&&r.isBlock(a)||0!==c?(ol(i)||i.wrapper)&&(i.exact||1!==c||(a=function(e){var t,n=u(e)
return n&&!Uf(n)&&zg(r,n,i)&&(t=r.clone(n,!1),s(t),r.replace(t,e,!0),r.remove(n,!0)),t||e}(a)),Th(e,o,n,a),function(e,t,n,r,o){Hg(e,o.parentNode,n,r)&&kh(e,t,r,o)||t.merge_with_parents&&e.dom.getParent(o.parentNode,(function(i){if(Hg(e,i,n,r))return kh(e,t,r,o),!0}))}(e,i,t,n,a),function(e,t,n,r){t.styles&&t.styles.backgroundColor&&dh(r,mh(e,"fontSize"),ph(e,"backgroundColor",Yf(t.styles.backgroundColor,n)))}(r,i,n,a),function(e,t,n,r){var o=function(t){if(1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType){var n=Zf(e,t.parentNode)
e.getStyle(t,"color")&&n?e.setStyle(t,"text-decoration",n):e.getStyle(t,"text-decoration")===n&&e.setStyle(t,"text-decoration",null)}}
t.styles&&(t.styles.color||t.styles.textDecoration)&&(wt.walk(r,o,"childNodes"),o(r))}(r,i,0,a),function(e,t,n,r){"sub"!==t.inline&&"sup"!==t.inline||(dh(r,mh(e,"fontSize"),ph(e,"fontSize","")),e.remove(e.select("sup"===t.inline?"sub":"sup",r),!0))}(r,i,0,a),lh(r,i,0,a)):r.remove(a,!0)}))}
if("false"!==u.getContentEditable(c.getNode())){if(i){if(r)if(Vf(r)){if(!f(o,r)){var d=u.createRng()
d.setStartBefore(r),d.setEndAfter(r),l(u,bl(e,d,o),0,!0)}}else l(u,r,0,!0)
else if(a&&ol(i)&&!El(e).length)(function(e,t,n){var r,o,i=e.selection,a=i.getRng(),u=a.startOffset,c=a.startContainer.nodeValue;(r=Rf(e.getBody(),i.getStart()))&&(o=Yg(r))
var s,f,l=/[^\s\u00a0\u00ad\u200b\ufeff]/
if(c&&u>0&&u<c.length&&l.test(c.charAt(u))&&l.test(c.charAt(u-1))){var d=i.getBookmark()
a.collapse(!0)
var m=bl(e,a,e.formatter.get(t))
m=ad(m),e.formatter.apply(t,n,m),i.moveToBookmark(d)}else r&&o.nodeValue===Wg||(s=e.getDoc(),f=Gg(!0).dom,o=(r=s.importNode(f,!0)).firstChild,a.insertNode(r),u=1),e.formatter.apply(t,n,r),i.setCursorLocation(o,u)})(e,t,n)
else{var m=c.getNode(),p=o[0]
e.settings.forced_root_block||!p.defaultBlock||u.getParent(m,u.isBlock)||Bh(e,p.defaultBlock),c.setRng(vg(c.getRng())),Ol(c,!0,(function(t){Dl(e,(function(t,n){var r=n?t:bl(e,t,o)
l(u,r)}))})),qf(u,c,c.getRng()),e.nodeChanged()}(function(e,t){ah(oh[e],(function(e){e(t)}))})(t,e)}}else{r=c.getNode()
for(var g=0,h=o.length;g<h;g++){var v=o[g]
if(v.ceFalseOverride&&rl(v)&&u.is(r,v.selector))return void s(r,v)}}},Ph=function(e,t,n,r){var o=re(n.get()),i={},a={},u=q(el(e.dom,t),(function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}))
ie(r,(function(t,n){wt.each(u,(function(r){return e.formatter.matchNode(r,n,{},t.similar)?(-1===o.indexOf(n)&&(H(t.callbacks,(function(e){e(!0,{node:r,format:n,parents:u})})),i[n]=t.callbacks),a[n]=t.callbacks,!1):!Fg(e,r,n)&&void 0}))}))
var c=Lh(n.get(),a,t,u)
n.set(Ne(Ne({},i),c))},Lh=function(e,t,n,r){return fe(e,(function(e,o){return!!pe(t,o)||(H(e,(function(e){e(!1,{node:n,format:o,parents:r})})),!1)})).t},Ih=function(e,t,n,r,o){return null===t.get()&&function(e,t){var n=fu({})
e.set({}),t.on("NodeChange",(function(r){Ph(t,r.element,n,e.get())}))}(t,e),function(e,t,n,r){var o=e.get()
H(t.split(","),(function(e){o[e]||(o[e]={similar:r,callbacks:[]}),o[e].callbacks.push(n)})),e.set(o)}(t,n,r,o),{unbind:function(){return function(e,t,n){var r=e.get()
H(t.split(","),(function(e){r[e].callbacks=q(r[e].callbacks,(function(e){return e!==n})),0===r[e].callbacks.length&&delete r[e]})),e.set(r)}(t,n,r)}}},Mh=function(e,t){var n=(t||document).createDocumentFragment()
return H(e,(function(e){n.appendChild(e.dom)})),St.fromDom(n)},Fh=function(e,t,n){return{element:e,width:t,rows:n}},Uh=function(e,t){return{element:e,cells:t}},zh=function(e,t){return{x:e,y:t}},jh=function(e,t){var n=parseInt($n(e,t),10)
return isNaN(n)?1:n},Hh=function(e,t,n){var r=e.rows
return!!(r[n]?r[n].cells:[])[t]},Vh=function(e){return W(e,(function(e,t){return t.cells.length>e?t.cells.length:e}),0)},qh=function(e,t){for(var n=e.rows,r=0;r<n.length;r++)for(var o=n[r].cells,i=0;i<o.length;i++)if(_t(o[i],t))return w.some(zh(i,r))
return w.none()},$h=function(e,t,n,r,o){for(var i=[],a=e.rows,u=n;u<=o;u++){var c=a[u].cells,s=t<r?c.slice(t,r+1):c.slice(r,t+1)
i.push(Uh(a[u].element,s))}return i},Wh=function(e){var t=Fh(Fu(e),0,[])
return H(ku(e,"tr"),(function(e,n){H(ku(e,"td,th"),(function(r,o){(function(e,t,n,r,o){for(var i=jh(o,"rowspan"),a=jh(o,"colspan"),u=e.rows,c=n;c<n+i;c++){u[c]||(u[c]=Uh(Uu(r),[]))
for(var s=t;s<t+a;s++)u[c].cells[s]=c===n&&s===t?o:Fu(o)}})(t,function(e,t,n){for(;Hh(e,t,n);)t++
return t}(t,o,n),n,e,r)}))})),Fh(t.element,Vh(t.rows),t.rows)},Kh=function(e){return function(e,t){var n=Fu(e.element),r=St.fromTag("tbody")
return un(r,t),an(n,r),n}(e,function(e){return j(e.rows,(function(e){var t=j(e.cells,(function(e){var t=Uu(e)
return Kn(t,"colspan"),Kn(t,"rowspan"),t})),n=Fu(e.element)
return un(n,t),n}))}(e))},Xh=function(e,t,n){return qh(e,t).bind((function(t){return qh(e,n).map((function(n){return function(e,t,n){var r=t.x,o=t.y,i=n.x,a=n.y,u=o<a?$h(e,r,o,i,a):$h(e,r,a,i,o)
return Fh(e.element,Vh(u),u)}(e,t,n)}))}))},Yh=function(e,t){return K(e,(function(e){return"li"===Tt(e)&&Al(e,t)})).fold(s([]),(function(t){return function(e){return K(e,(function(e){return"ul"===Tt(e)||"ol"===Tt(e)}))}(e).map((function(e){var t=St.fromTag(Tt(e)),n=le(Qn(e),(function(e,t){return Be(t,"list-style")}))
return Xn(t,n),[St.fromTag("li"),t]})).getOr([])}))},Gh=function(e,t){var n=St.fromDom(t.commonAncestorContainer),r=Zm(n,e),o=q(r,(function(e){return to(e)||Zr(e)})),i=Yh(r,t),a=o.concat(i.length?i:function(e){return io(e)?zt(e).filter(oo).fold(s([]),(function(t){return[e,t]})):oo(e)?[e]:[]}(n))
return j(a,Fu)},Jh=function(){return Mh([])},Qh=function(e,t){return n=St.fromDom(t.cloneContents()),r=Gh(e,t),o=W(r,(function(e,t){return an(t,e),t}),n),r.length>0?Mh([o]):o
var n,r,o},Zh=function(e,t){return(n=e,r=t[0],jr(r,"table",l(_t,n))).bind((function(e){var n=t[0],r=t[t.length-1],o=Wh(e)
return Xh(o,n,r).map((function(e){return Mh([Kh(e)])}))})).getOrThunk(Jh)
var n,r},ev=function(e,t){var n=Nl(t,e)
return n.length>0?Zh(e,n):function(e,t){return t.length>0&&t[0].collapsed?Jh():Qh(e,t[0])}(e,t)},tv=function(e,t){return t>=0&&t<e.length&&jf(e.charAt(t))},nv=function(e,t){var n=mo(e.innerText)
return t?function(e){return e.replace(/^[ \f\n\r\t\v]+/,"")}(n):n},rv=function(e,t,n){if(void 0===n&&(n={}),n.get=!0,n.format=t,n.selection=!0,(n=e.fire("BeforeGetContent",n)).isDefaultPrevented())return e.fire("GetContent",n),n.content
if("text"===n.format)return function(e){return w.from(e.selection.getRng()).map((function(t){var n=w.from(e.dom.getParent(t.commonAncestorContainer,e.dom.isBlock)),r=e.getBody(),o=function(e){return e.map((function(e){return e.nodeName})).getOr("div").toLowerCase()}(n),i=ht.browser.isIE()&&"pre"!==o,a=e.dom.add(r,o,{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},t.cloneContents()),u=nv(a,i),c=mo(a.textContent)
if(e.dom.remove(a),tv(c,0)||tv(c,c.length-1)){var s=n.getOr(r),f=nv(s,i),l=f.indexOf(u)
return-1===l?u:(tv(f,l-1)?" ":"")+u+(tv(f,l+u.length)?" ":"")}return u})).getOr("")}(e)
n.getInner=!0
var r=function(e,t){var n=e.selection.getRng(),r=e.dom.create("body"),o=e.selection.getSel(),i=mm(e,xl(o)),a=t.contextual?ev(St.fromDom(e.getBody()),i).dom:n.cloneContents()
return a&&r.appendChild(a),e.selection.serializer.serialize(r,t)}(e,n)
return"tree"===n.format?r:(n.content=e.selection.isCollapsed()?"":r,e.fire("GetContent",n),n.content)},ov=function(e){return Sn(e)?e.outerHTML:Dn(e)?ci.encodeRaw(e.data,!1):On(e)?"\x3c!--"+e.data+"--\x3e":""},iv=function(e,t,n){var r=function(e){var t,n=document.createElement("div"),r=document.createDocumentFragment()
for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t)
return r}(t)
if(e.hasChildNodes()&&n<e.childNodes.length){var o=e.childNodes[n]
o.parentNode.insertBefore(r,o)}else e.appendChild(r)},av=function(e,t){var n,r,o,i,a,u,c,s,f,l=j(ne(t.childNodes),ov)
return function(e,t){var n=0
H(e,(function(e){0===e[0]?n++:1===e[0]?(iv(t,e[1],n),n++):2===e[0]&&function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var n=e.childNodes[t]
n.parentNode.removeChild(n)}}(t,n)}))}((r=e,o=(n=l).length+r.length+2,i=new Array(o),a=new Array(o),u=function(e,t,o,i,a){var c=s(e,t,o,i)
if(null===c||c.start===t&&c.diag===t-i||c.end===e&&c.diag===e-o)for(var f=e,l=o;f<t||l<i;)f<t&&l<i&&n[f]===r[l]?(a.push([0,n[f]]),++f,++l):t-e>i-o?(a.push([2,n[f]]),++f):(a.push([1,r[l]]),++l)
else{u(e,c.start,o,c.start-c.diag,a)
for(var d=c.start;d<c.end;++d)a.push([0,n[d]])
u(c.end,t,c.end-c.diag,i,a)}},c=function(e,t,o,i){for(var a=e;a-t<i&&a<o&&n[a]===r[a-t];)++a
return function(e,t,n){return{start:e,end:t,diag:n}}(e,a,t)},s=function(e,t,o,u){var s=t-e,f=u-o
if(0===s||0===f)return null
var l,d,m,p,g,h=s-f,v=f+s,y=(v%2==0?v:v+1)/2
for(i[1+y]=e,a[1+y]=t+1,l=0;l<=y;++l){for(d=-l;d<=l;d+=2){for(m=d+y,d===-l||d!==l&&i[m-1]<i[m+1]?i[m]=i[m+1]:i[m]=i[m-1]+1,g=(p=i[m])-e+o-d;p<t&&g<u&&n[p]===r[g];)i[m]=++p,++g
if(h%2!=0&&h-l<=d&&d<=h+l&&a[m-h]<=i[m])return c(a[m-h],d+e-o,t,u)}for(d=h-l;d<=h+l;d+=2){for(m=d+y-h,d===h-l||d!==h+l&&a[m+1]<=a[m-1]?a[m]=a[m+1]-1:a[m]=a[m-1],g=(p=a[m]-1)-e+o-d;p>=e&&g>=o&&n[p]===r[g];)a[m]=p--,g--
if(h%2==0&&-l<=d&&d<=l&&a[m]<=i[m+h])return c(a[m],d+e-o,t,u)}}},f=[],u(0,n.length,0,r.length,f),f),t),t},uv=fu(w.none()),cv=function(e){var t,n=(t=e.getBody(),q(j(ne(t.childNodes),ov),(function(e){return e.length>0}))),r=Y(n,(function(t){var n=Em(e.serializer,t)
return n.length>0?[n]:[]})),o=r.join("")
return-1!==o.indexOf("</iframe>")?function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}}(r):function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}}(o)},sv=function(e,t,n){"fragmented"===t.type?av(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},fv=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},lv=function(e){var t=St.fromTag("body",uv.get().getOrThunk((function(){var e=document.implementation.createHTMLDocument("undo")
return uv.set(w.some(e)),e})))
return Iu(t,fv(e)),H(ku(t,"*[data-mce-bogus]"),fn),t.dom.innerHTML},dv=function(e,t){return!(!e||!t)&&(!!function(e,t){return fv(e)===fv(t)}(e,t)||function(e,t){return lv(e)===lv(t)}(e,t))},mv=function(e){return 0===e.get()},pv=function(e,t,n){mv(n)&&(e.typing=t)},gv=function(e,t){e.typing&&(pv(e,!1,t),e.add())},hv=function(e){return{undoManager:{beforeChange:function(t,n){return function(e,t,n){mv(t)&&n.set(w.some(jc(e.selection)))}(e,t,n)},addUndoLevel:function(t,n,r,o,i,a){return function(e,t,n,r,o,i,a){var u=cv(e)
if(i=i||{},i=wt.extend(i,u),!1===mv(r)||e.removed)return null
var c=t.data[n.get()]
if(e.fire("BeforeAddUndo",{level:i,lastLevel:c,originalEvent:a}).isDefaultPrevented())return null
if(c&&dv(c,i))return null
t.data[n.get()]&&o.get().each((function(e){t.data[n.get()].beforeBookmark=e}))
var s=function(e){return e.getParam("custom_undo_redo_levels",0,"number")}(e)
if(s&&t.data.length>s){for(var f=0;f<t.data.length-1;f++)t.data[f]=t.data[f+1]
t.data.length--,n.set(t.data.length)}i.bookmark=jc(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(i),n.set(t.data.length-1)
var l={level:i,lastLevel:c,originalEvent:a}
return n.get()>0?(e.setDirty(!0),e.fire("AddUndo",l),e.fire("change",l)):e.fire("AddUndo",l),i}(e,t,n,r,o,i,a)},undo:function(t,n,r){return function(e,t,n,r){var o
return t.typing&&(t.add(),t.typing=!1,pv(t,!1,n)),r.get()>0&&(r.set(r.get()-1),o=t.data[r.get()],sv(e,o,!0),e.setDirty(!0),e.fire("Undo",{level:o})),o}(e,t,n,r)},redo:function(t,n){return function(e,t,n){var r
return t.get()<n.length-1&&(t.set(t.get()+1),r=n[t.get()],sv(e,r,!1),e.setDirty(!0),e.fire("Redo",{level:r})),r}(e,t,n)},clear:function(t,n){return function(e,t,n){t.data=[],n.set(0),t.typing=!1,e.fire("ClearUndos")}(e,t,n)},reset:function(e){return function(e){e.clear(),e.add()}(e)},hasUndo:function(t,n){return function(e,t,n){return n.get()>0||t.typing&&t.data[0]&&!dv(cv(e),t.data[0])}(e,t,n)},hasRedo:function(e,t){return function(e,t){return t.get()<e.data.length-1&&!e.typing}(e,t)},transact:function(e,t,n){return function(e,t,n){return gv(e,t),e.beforeChange(),e.ignore(n),e.add()}(e,t,n)},ignore:function(e,t){return function(e,t){try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}}(e,t)},extra:function(t,n,r,o){return function(e,t,n,r,o){if(t.transact(r)){var i=t.data[n.get()].bookmark,a=t.data[n.get()-1]
sv(e,a,!0),t.transact(o)&&(t.data[n.get()-1].beforeBookmark=i)}}(e,t,n,r,o)}},formatter:{match:function(t,n,r){return Vg(e,t,n,r)},matchAll:function(t,n){return function(e,t,n){var r=[],o={},i=e.selection.getStart()
return e.dom.getParent(i,(function(i){for(var a=0;a<t.length;a++){var u=t[a]
!o[u]&&Hg(e,i,u,n)&&(o[u]=!0,r.push(u))}}),e.dom.getRoot()),r}(e,t,n)},matchNode:function(t,n,r,o){return Hg(e,t,n,r,o)},canApply:function(t){return function(e,t){var n,r,o,i,a,u=e.formatter.get(t),c=e.dom
if(u)for(n=e.selection.getStart(),r=el(c,n),i=u.length-1;i>=0;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0
for(o=r.length-1;o>=0;o--)if(c.is(r[o],a))return!0}return!1}(e,t)},closest:function(t){return qg(e,t)},apply:function(t,n,r){return Bh(e,t,n,r)},remove:function(t,n,r,o){return Ah(e,t,n,r,o)},toggle:function(t,n,r){return function(e,t,n,r){var o=e.formatter.get(t)
!Vg(e,t,n,r)||"toggle"in o[0]&&!o[0].toggle?Bh(e,t,n,r):Ah(e,t,n,r)}(e,t,n,r)},formatChanged:function(t,n,r,o){return Ih(e,t,n,r,o)}},editor:{getContent:function(t,n){return function(e,t,n){return w.from(e.getBody()).fold(s("tree"===t.format?new ym("body",11):""),(function(r){return _m(e,t,n,r)}))}(e,t,n)},setContent:function(t,n){return Bg(e,t,n)},insertContent:function(t,n){return Ag(e,t,n)},addVisual:function(t){return function(e,t){var n=e.dom,r=O(t)?t:e.getBody()
T(e.hasVisual)&&(e.hasVisual=function(e){return e.getParam("visual",!0,"boolean")}(e)),H(n.select("table,a",r),(function(t){switch(t.nodeName){case"TABLE":var r=function(e){return e.getParam("visual_table_class","mce-item-table","string")}(e),o=n.getAttrib(t,"border")
o&&"0"!==o||!e.hasVisual?n.removeClass(t,r):n.addClass(t,r)
break
case"A":if(!n.getAttrib(t,"href")){var i=n.getAttrib(t,"name")||t.id,a=function(e){return e.getParam("visual_anchor_class","mce-item-anchor","string")}(e)
i&&e.hasVisual?n.addClass(t,a):n.removeClass(t,a)}}})),e.fire("VisualAid",{element:t,hasVisual:e.hasVisual})}(e,t)}},selection:{getContent:function(t,n){return rv(e,t,n)}},raw:{getModel:function(){return w.none()}}}},vv=function(e){return pe(e.plugins,"rtc")},yv=function(e){var t=e
return me(e.plugins,"rtc").fold((function(){return t.rtcInstance=hv(e),w.none()}),(function(e){return w.some(e.setup().then((function(e){return t.rtcInstance=function(e){var t=function(e){return k(e)?e:{}},n=m("Unimplemented feature for rtc"),r=e.undoManager,o=e.formatter,i=e.editor,a=e.selection,c=e.raw
return{undoManager:{beforeChange:u,addUndoLevel:n,undo:function(){return r.undo()},redo:function(){return r.redo()},clear:function(){return r.clear()},reset:function(){return r.reset()},hasUndo:function(){return r.hasUndo()},hasRedo:function(){return r.hasRedo()},transact:function(e,t,n){return r.transact(n)},ignore:function(e,t){return r.ignore(t)},extra:function(e,t,n,o){return r.extra(n,o)}},formatter:{match:function(e,n,r){return o.match(e,t(n))},matchAll:n,matchNode:n,canApply:function(e){return o.canApply(e)},closest:function(e){return o.closest(e)},apply:function(e,n,r){return o.apply(e,t(n))},remove:function(e,n,r,i){return o.remove(e,t(n))},toggle:function(e,n,r){return o.toggle(e,t(n))},formatChanged:function(e,t,n,r){return o.formatChanged(t,n,r)}},editor:{getContent:function(e,t){return i.getContent(e)},setContent:function(e,t){return i.setContent(e,t)},insertContent:function(e,t){return i.insertContent(e)},addVisual:u},selection:{getContent:function(e,t){return a.getContent(t)}},raw:{getModel:function(){return w.some(c.getRawModel())}}}}(e),e.rtc.isRemote}),(function(e){return t.rtcInstance=function(){var e=s(null),t=s("")
return{undoManager:{beforeChange:u,addUndoLevel:e,undo:e,redo:e,clear:u,reset:u,hasUndo:h,hasRedo:h,transact:e,ignore:u,extra:u},formatter:{match:h,matchAll:s([]),matchNode:h,canApply:h,closest:t,apply:u,remove:u,toggle:u,formatChanged:s({unbind:u})},editor:{getContent:t,setContent:t,insertContent:u,addVisual:u},selection:{getContent:t},raw:{getModel:s(w.none())}}}(),qr.reject(e)})))}))},bv=function(e){return e.rtcInstance?e.rtcInstance:hv(e)},Cv=function(e){var t=e.rtcInstance
if(t)return t
throw new Error("Failed to get RTC instance not yet initialized.")},wv=function(e,t){return void 0===t&&(t={}),function(e,t,n){return Cv(e).selection.getContent(t,n)}(e,t.format?t.format:"html",t)},xv=function(e){return 0===e.dom.length?(sn(e),w.none()):w.some(e)},Sv=function(e,t,n,r){e.bind((function(e){return(r?Tp:Rp)(e.dom,r?e.dom.length:0),t.filter(Pt).map((function(t){return function(e,t,n,r){var o=e.dom,i=t.dom,a=r?o.length:i.length
r?(Dp(o,i,!1,!r),n.setStart(i,a)):(Dp(i,o,!1,!r),n.setEnd(i,a))}(e,t,n,r)}))})).orThunk((function(){return function(e,t){return e.filter((function(e){return zl.isBookmarkNode(e.dom)})).bind(t?Ht:jt)}(t,r).or(t).filter(Pt).map((function(e){return function(e,t){zt(e).each((function(n){var r=e.dom
t&&Cp(n,yc(r,0))?Rp(r,0):!t&&wp(n,yc(r,r.length))&&Tp(r,r.length)}))}(e,r)}))}))},Nv=function(e,t,n){void 0===n&&(n={})
var r=function(e,t){return Ne(Ne({format:"html"},e),{set:!0,selection:!0,content:t})}(n,t)
if(r.no_events||!(r=e.fire("BeforeSetContent",r)).isDefaultPrevented()){n.content=function(e,t){if("raw"!==t.format){var n=e.selection.getRng(),r=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),o=r?{context:r.nodeName.toLowerCase()}:{},i=e.parser.parse(t.content,Ne(Ne({isRootContent:!0,forced_root_block:!1},o),t))
return Om({validate:e.validate},e.schema).serialize(i)}return t.content}(e,r)
var o=e.selection.getRng();(function(e,t){var n=w.from(t.firstChild).map(St.fromDom),r=w.from(t.lastChild).map(St.fromDom)
e.deleteContents(),e.insertNode(t)
var o=n.bind(jt).filter(Pt).bind(xv),i=r.bind(Ht).filter(Pt).bind(xv)
Sv(o,n,e,!0),Sv(i,r,e,!1),e.collapse(!1)})(o,o.createContextualFragment(n.content)),e.selection.setRng(o),Rd(e,o),r.no_events||e.fire("SetContent",r)}else e.fire("SetContent",r)},Ev=function(e,t,n){if(e&&e.hasOwnProperty(t)){var r=q(e[t],(function(e){return e!==n}))
0===r.length?delete e[t]:e[t]=r}}
var kv,_v,Av=function(e){return!!e.select},Rv=function(e){return!(!e||!e.ownerDocument)&&Rt(St.fromDom(e.ownerDocument),St.fromDom(e))},Tv=function(e,t,n,r){var o,i,a=function(e,t){var n,r
return{selectorChangedWithUnbind:function(o,i){return n||(n={},r={},t.on("NodeChange",(function(t){var o=t.element,i=e.getParents(o,null,e.getRoot()),a={}
wt.each(n,(function(t,n){wt.each(i,(function(o){if(e.is(o,n))return r[n]||(wt.each(t,(function(e){e(!0,{node:o,selector:n,parents:i})})),r[n]=t),a[n]=t,!1}))})),wt.each(r,(function(e,t){a[t]||(delete r[t],wt.each(e,(function(e){e(!1,{node:o,selector:t,parents:i})})))}))}))),n[o]||(n[o]=[]),n[o].push(i),{unbind:function(){Ev(n,o,i),Ev(r,o,i)}}}}}(e,r).selectorChangedWithUnbind,u=function(e,t){return Nv(r,e,t)},c=function(e){var t=f()
t.collapse(!!e),l(t)},s=function(){return t.getSelection?t.getSelection():t.document.selection},f=function(){var n,a,u,c=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}},f=t.document
if(void 0!==r.bookmark&&!1===im(r)){var l=Kd(r)
if(l.isSome())return l.map((function(e){return mm(r,[e])[0]})).getOr(f.createRange())}try{(n=s())&&!xn(n.anchorNode)&&(a=n.rangeCount>0?n.getRangeAt(0):n.createRange?n.createRange():f.createRange(),a=mm(r,[a])[0])}catch(d){}return a||(a=f.createRange?f.createRange():f.body.createTextRange()),a.setStart&&9===a.startContainer.nodeType&&a.collapsed&&(u=e.getRoot(),a.setStart(u,0),a.setEnd(u,0)),o&&i&&(0===c(a.START_TO_START,a,o)&&0===c(a.END_TO_END,a,o)?a=i:(o=null,i=null)),a},l=function(e,t){var n
if(function(e){return!!e&&(!!Av(e)||Rv(e.startContainer)&&Rv(e.endContainer))}(e)){var a=Av(e)?e:null
if(a){i=null
try{a.select()}catch(c){}}else{var u=s()
if(e=r.fire("SetSelectionRange",{range:e,forward:t}).range,u){i=e
try{u.removeAllRanges(),u.addRange(e)}catch(c){}!1===t&&u.extend&&(u.collapse(e.endContainer,e.endOffset),u.extend(e.startContainer,e.startOffset)),o=u.rangeCount>0?u.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!u.setBaseAndExtent||ht.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset])&&"IMG"===n.tagName&&(u.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),u.anchorNode===e.startContainer&&u.focusNode===e.endContainer||u.setBaseAndExtent(n,0,n,1)),r.fire("AfterSetSelectionRange",{range:e,forward:t})}}},d=function(){var t=s(),n=null==t?void 0:t.anchorNode,r=null==t?void 0:t.focusNode
if(!t||!n||!r||xn(n)||xn(r))return!0
var o=e.createRng()
o.setStart(n,t.anchorOffset),o.collapse(!0)
var i=e.createRng()
return i.setStart(r,t.focusOffset),i.collapse(!0),o.compareBoundaryPoints(o.START_TO_START,i)<=0},m={bookmarkManager:null,controlSelection:null,dom:e,win:t,serializer:n,editor:r,collapse:c,setCursorLocation:function(t,n){var o=e.createRng()
O(t)&&O(n)?(o.setStart(t,n),o.setEnd(t,n),l(o),c(!1)):(Rl(e,o,r.getBody(),!0),l(o))},getContent:function(e){return wv(r,e)},setContent:u,getBookmark:function(e,t){return p.getBookmark(e,t)},moveToBookmark:function(e){return p.moveToBookmark(e)},select:function(t,n){return function(e,t,n){return w.from(t).map((function(t){var r=e.nodeIndex(t),o=e.createRng()
return o.setStart(t.parentNode,r),o.setEnd(t.parentNode,r+1),n&&(Rl(e,o,t,!0),Rl(e,o,t,!1)),o}))}(e,t,n).each(l),t},isCollapsed:function(){var e=f(),t=s()
return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:d,setNode:function(t){return u(e.getOuterHTML(t)),t},getNode:function(){return function(e,t){var n,r,o
if(!t)return e
r=t.startContainer,o=t.endContainer
var i=t.startOffset,a=t.endOffset
return n=t.commonAncestorContainer,!t.collapsed&&(r===o&&a-i<2&&r.hasChildNodes()&&(n=r.childNodes[i]),3===r.nodeType&&3===o.nodeType&&(r=r.length===i?dm(r.nextSibling,!0):r.parentNode,o=0===a?dm(o.previousSibling,!1):o.parentNode,r&&r===o))?r:n&&3===n.nodeType?n.parentNode:n}(r.getBody(),f())},getSel:s,setRng:l,getRng:f,getStart:function(e){return fm(r.getBody(),f(),e)},getEnd:function(e){return lm(r.getBody(),f(),e)},getSelectedBlocks:function(t,n){return function(e,t,n,r){var o,i=[],a=e.getRoot()
if(n=e.getParent(n||fm(a,t,t.collapsed),e.isBlock),r=e.getParent(r||lm(a,t,t.collapsed),e.isBlock),n&&n!==a&&i.push(n),n&&r&&n!==r){o=n
for(var u=new Jr(n,a);(o=u.next())&&o!==r;)e.isBlock(o)&&i.push(o)}return r&&n!==r&&r!==a&&i.push(r),i}(e,f(),t,n)},normalize:function(){var t=f(),n=s()
if(!(xl(n).length>1)&&Tl(r)){var o=od(e,t)
return o.each((function(e){l(e,d())})),o.getOr(t)}return t},selectorChanged:function(e,t){return a(e,t),m},selectorChangedWithUnbind:a,getScrollContainer:function(){for(var t,n=e.getRoot();n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n
break}n=n.parentNode}return t},scrollIntoView:function(e,t){return function(e,t,n){(e.inline?kd:Ad)(e,t,n)}(r,e,t)},placeCaretAt:function(e,t){return l(Xl(e,t,r.getDoc()))},getBoundingClientRect:function(){var e=f()
return e.collapsed?yc.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){t=o=i=null,g.destroy()}},p=zl(m),g=Wl(m,r)
return m.bookmarkManager=p,m.controlSelection=g,m},Dv=function(e,t,n){e.addNodeFilter("font",(function(e){H(e,(function(e){var r=t.parse(e.attr("style")),o=e.attr("color"),i=e.attr("face"),a=e.attr("size")
o&&(r.color=o),i&&(r["font-family"]=i),a&&(r["font-size"]=n[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",t.serialize(r)),function(e,t){H(t,(function(t){e.attr(t,null)}))}(e,["color","face","size"])}))}))},Ov=function(e,t){var n=Ci()
t.convert_fonts_to_spans&&Dv(e,n,wt.explode(t.font_size_legacy_values)),function(e,t){e.addNodeFilter("strike",(function(e){H(e,(function(e){var n=t.parse(e.attr("style"))
n["text-decoration"]="line-through",e.name="span",e.attr("style",t.serialize(n))}))}))}(e,n)},Bv=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},Pv=function(e,t){var n
try{n=atob(t)}catch(fk){return w.none()}for(var r=new Uint8Array(n.length),o=0;o<r.length;o++)r[o]=n.charCodeAt(o)
return w.some(new Blob([r],{type:e}))},Lv=function(e){return 0===e.indexOf("blob:")?function(e){return new qr((function(t,n){var r=function(){n("Cannot convert "+e+" to Blob. Resource might not exist or is inaccessible.")}
try{var o=new XMLHttpRequest
o.open("GET",e,!0),o.responseType="blob",o.onload=function(){200===o.status?t(o.response):r()},o.onerror=r,o.send()}catch(i){r()}}))}(e):0===e.indexOf("data:")?(t=e,new qr((function(e){var n=Bv(t),r=n.type,o=n.data
Pv(r,o).fold((function(){return e(new Blob([]))}),e)}))):null
var t},Iv=0,Mv=function(e){return(e||"blobid")+Iv++},Fv=function(e,t,n,r){var o,i
if(0!==t.src.indexOf("blob:")){var a=Bv(t.src),u=a.data,c=a.type
o=u,(i=e.getByData(o,c))?n({image:t,blobInfo:i}):Lv(t.src).then((function(r){i=e.create(Mv(),r,o),e.add(i),n({image:t,blobInfo:i})}),(function(e){r(e)}))}else(i=e.getByUri(t.src))?n({image:t,blobInfo:i}):Lv(t.src).then((function(r){(function(e){return new qr((function(t){var n=new FileReader
n.onloadend=function(){t(n.result)},n.readAsDataURL(e)}))})(r).then((function(a){o=Bv(a).data,i=e.create(Mv(),r,o),e.add(i),n({image:t,blobInfo:i})}))}),(function(e){r(e)}))},Uv=function(e,t){var n={}
return{findAll:function(r,o){o||(o=v)
var i=q(function(e){return e?ne(e.getElementsByTagName("img")):[]}(r),(function(t){var n=t.src
return!!ht.fileApi&&(!t.hasAttribute("data-mce-bogus")&&(!t.hasAttribute("data-mce-placeholder")&&(!(!n||n===ht.transparentSrc)&&(0===n.indexOf("blob:")?!e.isUploaded(n)&&o(t):0===n.indexOf("data:")&&o(t)))))})),a=j(i,(function(e){if(void 0!==n[e.src])return new qr((function(t){n[e.src].then((function(n){if("string"==typeof n)return n
t({image:e,blobInfo:n.blobInfo})}))}))
var r=new qr((function(n,r){Fv(t,e,n,r)})).then((function(e){return delete n[e.image.src],e})).catch((function(t){return delete n[e.src],t}))
return n[e.src]=r,r}))
return qr.all(a)}}},zv=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new ym("br",1)).shortEnded=!0:r.empty().append(new ym("#text",3)).value=so},jv=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Hv=function(e,t,n,r){return r.isEmpty(t,n,(function(t){return function(e,t){var n=e.getElementRule(t.name)
return n&&n.paddEmpty}(e,t)}))},Vv=function(e,t){var n=t.blob_cache,r=function(e){var r=e.attr("src");(function(e){return e.attr("src")===ht.transparentSrc||e.attr("data-mce-placeholder")})(e)||function(e){return e.attr("data-mce-bogus")}(e)||function(e){var t=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(e)
return t?w.some({type:t[1],data:decodeURIComponent(t[2])}):w.none()}(r).filter((function(){return function(e,t){if(t.images_dataimg_filter){var n=new Image
return n.src=e.attr("src"),ie(e.attributes.map,(function(e,t){n.setAttribute(t,e)})),t.images_dataimg_filter(n)}return!0}(e,t)})).bind((function(e){var t=e.type,r=e.data
return w.from(n.getByData(r,t)).orThunk((function(){return Pv(t,r).map((function(e){var t=n.create(Mv(),e,r)
return n.add(t),t}))}))})).each((function(t){e.attr("src",t.blobUri())}))}
n&&e.addAttributeFilter("src",(function(e){return H(e,r)}))},qv=wt.makeMap,$v=wt.each,Wv=wt.explode,Kv=wt.extend,Xv=function(e,t){void 0===t&&(t=yi())
var n={},r=[],o={},i={};(e=e||{}).validate=!("validate"in e)||e.validate,e.root_name=e.root_name||"body"
var a=function(e){var t,a,u;(a=e.name)in n&&((u=o[a])?u.push(e):o[a]=[e]),t=r.length
for(;t--;)(a=r[t].name)in e.attributes.map&&((u=i[a])?u.push(e):i[a]=[e])
return e},u={schema:t,addAttributeFilter:function(e,t){$v(Wv(e),(function(e){var n
for(n=0;n<r.length;n++)if(r[n].name===e)return void r[n].callbacks.push(t)
r.push({name:e,callbacks:[t]})}))},getAttributeFilters:function(){return[].concat(r)},addNodeFilter:function(e,t){$v(Wv(e),(function(e){var r=n[e]
r||(n[e]=r=[]),r.push(t)}))},getNodeFilters:function(){var e=[]
for(var t in n)n.hasOwnProperty(t)&&e.push({name:t,callbacks:n[t]})
return e},filterNode:a,parse:function(u,c){var s,f,l,d,m,p,g,h,v,y=[]
c=c||{},o={},i={}
var b=Kv(qv("script,style,head,html,body,title,meta,param"),t.getBlockElements()),C=t.getNonEmptyElements(),w=t.children,x=e.validate,S=function(e){return!1===e?"":!0===e?"p":e}("forced_root_block"in c?c.forced_root_block:e.forced_root_block),N=t.getWhiteSpaceElements(),E=/^[ \t\r\n]+/,k=/[ \t\r\n]+$/,_=/[ \t\r\n]+/g,A=/^[ \t\r\n]+$/
h=N.hasOwnProperty(c.context)||N.hasOwnProperty(e.root_name)
var R=function(e,t){var r,i=new ym(e,t)
return e in n&&((r=o[e])?r.push(i):o[e]=[i]),i},T=function(e){var n,r,o,i,a=t.getBlockElements()
for(n=e.prev;n&&3===n.type;){if((o=n.value.replace(k,"")).length>0)return void(n.value=o)
if(r=n.next){if(3===r.type&&r.value.length){n=n.prev
continue}if(!a[r.name]&&"script"!==r.name&&"style"!==r.name){n=n.prev
continue}}i=n.prev,n.remove(),n=i}},D=Nm({validate:x,allow_html_data_urls:e.allow_html_data_urls,allow_svg_data_urls:e.allow_svg_data_urls,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,preserve_cdata:e.preserve_cdata,self_closing_elements:function(e){var t,n={}
for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t])
return n}(t.getSelfClosingElements()),cdata:function(e){v.append(R("#cdata",4)).value=e},text:function(e,t){var n
h||(e=e.replace(_," "),function(e,t){return e&&(t[e.name]||"br"===e.name)}(v.lastChild,b)&&(e=e.replace(E,""))),0!==e.length&&((n=R("#text",3)).raw=!!t,v.append(n).value=e)},comment:function(e){v.append(R("#comment",8)).value=e},pi:function(e,t){v.append(R(e,7)).value=t,T(v)},doctype:function(e){v.append(R("#doctype",10)).value=e,T(v)},start:function(e,n,o){var a,u,c,s,f=x?t.getElementRule(e):{}
if(f){for((a=R(f.outputName||e,1)).attributes=n,a.shortEnded=o,v.append(a),(s=w[v.name])&&w[a.name]&&!s[a.name]&&y.push(a),u=r.length;u--;)(c=r[u].name)in n.map&&((p=i[c])?p.push(a):i[c]=[a])
b[e]&&T(a),o||(v=a),!h&&N[e]&&(h=!0)}},end:function(n){var r,o,i,a,u=x?t.getElementRule(n):{}
if(u){if(b[n]&&!h){if((r=v.firstChild)&&3===r.type)if((o=r.value.replace(E,"")).length>0)r.value=o,r=r.next
else for(i=r.next,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.next,(0===o.length||A.test(o))&&(r.remove(),r=i),r=i
if((r=v.lastChild)&&3===r.type)if((o=r.value.replace(k,"")).length>0)r.value=o,r=r.prev
else for(i=r.prev,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.prev,(0===o.length||A.test(o))&&(r.remove(),r=i),r=i}if(h&&N[n]&&(h=!1),u.removeEmpty&&Hv(t,C,N,v))return a=v.parent,b[v.name]?v.empty().remove():v.unwrap(),void(v=a)
u.paddEmpty&&(function(e){return jv(e,"#text")&&e.firstChild.value===so}(v)||Hv(t,C,N,v))&&zv(e,c,b,v),v=v.parent}}},t),O=v=new ym(c.context||e.root_name,11)
if(D.parse(u,c.format),x&&y.length&&(c.context?c.invalid=!0:function(e){var n,r,o,i,u,c,s,f,l,d,m,p=qv("tr,td,th,tbody,thead,tfoot,table"),g=t.getNonEmptyElements(),h=t.getWhiteSpaceElements(),v=t.getTextBlockElements(),y=t.getSpecialElements()
for(n=0;n<e.length;n++)if((r=e[n]).parent&&!r.fixed)if(v[r.name]&&"li"===r.parent.name){for(d=r.next;d&&v[d.name];)d.name="li",d.fixed=!0,r.parent.insert(d,r.parent),d=d.next
r.unwrap(r)}else{for(i=[r],o=r.parent;o&&!t.isValidChild(o.name,r.name)&&!p[o.name];o=o.parent)i.push(o)
if(o&&i.length>1){for(i.reverse(),u=c=a(i[0].clone()),l=0;l<i.length-1;l++){for(t.isValidChild(c.name,i[l].name)?(s=a(i[l].clone()),c.append(s)):s=c,f=i[l].firstChild;f&&f!==i[l+1];)m=f.next,s.append(f),f=m
c=s}Hv(t,g,h,u)?o.insert(r,i[0],!0):(o.insert(u,i[0],!0),o.insert(r,u)),o=i[0],(Hv(t,g,h,o)||jv(o,"br"))&&o.empty().remove()}else if(r.parent){if("li"===r.name){if((d=r.prev)&&("ul"===d.name||"ol"===d.name)){d.append(r)
continue}if((d=r.next)&&("ul"===d.name||"ol"===d.name)){d.insert(r,d.firstChild,!0)
continue}r.wrap(a(new ym("ul",1)))
continue}t.isValidChild(r.parent.name,"div")&&t.isValidChild("div",r.name)?r.wrap(a(new ym("div",1))):y[r.name]?r.empty().remove():r.unwrap()}}}(y)),S&&("body"===O.name||c.isRootContent)&&function(){var n,r,o=O.firstChild,i=function(e){e&&((o=e.firstChild)&&3===o.type&&(o.value=o.value.replace(E,"")),(o=e.lastChild)&&3===o.type&&(o.value=o.value.replace(k,"")))}
if(t.isValidChild(O.name,S.toLowerCase())){for(;o;)n=o.next,3===o.type||1===o.type&&"p"!==o.name&&!b[o.name]&&!o.attr("data-mce-type")?(r||((r=R(S,1)).attr(e.forced_root_block_attrs),O.insert(r,o)),r.append(o)):(i(r),r=null),o=n
i(r)}}(),!c.invalid){for(g in o)if(o.hasOwnProperty(g)){for(p=n[g],d=(s=o[g]).length;d--;)s[d].parent||s.splice(d,1)
for(f=0,l=p.length;f<l;f++)p[f](s,g,c)}for(f=0,l=r.length;f<l;f++)if((p=r[f]).name in i){for(d=(s=i[p.name]).length;d--;)s[d].parent||s.splice(d,1)
for(d=0,m=p.callbacks.length;d<m;d++)p.callbacks[d](s,p.name,c)}}return O}}
return function(e,t){var n=e.schema
t.remove_trailing_brs&&e.addNodeFilter("br",(function(e,r,o){var i,a,u,c,s,f,l,d,m=e.length,p=wt.extend({},n.getBlockElements()),g=n.getNonEmptyElements(),h=n.getWhiteSpaceElements()
for(p.body=1,i=0;i<m;i++)if(u=(a=e[i]).parent,p[a.parent.name]&&a===u.lastChild){for(s=a.prev;s;){if("span"!==(f=s.name)||"bookmark"!==s.attr("data-mce-type")){"br"===f&&(a=null)
break}s=s.prev}a&&(a.remove(),Hv(n,g,h,u)&&(l=n.getElementRule(u.name))&&(l.removeEmpty?u.remove():l.paddEmpty&&zv(t,o,p,u)))}else{for(c=a;u&&u.firstChild===c&&u.lastChild===c&&(c=u,!p[u.name]);)u=u.parent
c===u&&!0!==t.padd_empty_with_br&&((d=new ym("#text",3)).value=so,a.replace(d))}})),e.addAttributeFilter("href",(function(e){var n,r,o=e.length
if(!t.allow_unsafe_link_target)for(;o--;){var i=e[o]
"a"===i.name&&"_blank"===i.attr("target")&&i.attr("rel",(r=void 0,r=(n=i.attr("rel"))?wt.trim(n):"",/\b(noopener)\b/g.test(r)?r:function(e){return e.split(" ").filter((function(e){return e.length>0})).concat(["noopener"]).sort().join(" ")}(r)))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href")){r=o.parent,t=o.lastChild
do{n=t.prev,r.insert(t,o),t=n}while(t)}})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(function(e){for(var t,n,r=e.length;r--;)if("ul"===(n=(t=e[r]).parent).name||"ol"===n.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t)
else{var o=new ym("li",1)
o.attr("style","list-style-type: none"),t.wrap(o)}})),t.validate&&n.getValidClasses()&&e.addAttributeFilter("class",(function(e){for(var t,r,o,i,a,u,c,s=e.length,f=n.getValidClasses();s--;){for(r=(t=e[s]).attr("class").split(" "),a="",o=0;o<r.length;o++)i=r[o],c=!1,(u=f["*"])&&u[i]&&(c=!0),u=f[t.name],!c&&u&&u[i]&&(c=!0),c&&(a&&(a+=" "),a+=i)
a.length||(a=null),t.attr("class",a)}})),Vv(e,t)}(u,e),function(e,t){t.inline_styles&&Ov(e,t)}(u,e),u},Yv=function(e,t,n){return function(e,t){return e&&e.hasEventListeners("PreProcess")&&!t.no_events}(e,n)?function(e,t,n){var r,o,i=e.dom
t=t.cloneNode(!0)
var a=document.implementation
return a.createHTMLDocument&&(r=a.createHTMLDocument(""),wt.each("BODY"===t.nodeName?t.childNodes:[t],(function(e){r.body.appendChild(r.importNode(e,!0))})),t="BODY"!==t.nodeName?r.body.firstChild:r.body,o=i.doc,i.doc=r),function(e,t){e.fire("PreProcess",t)}(e,Ne(Ne({},n),{node:t})),o&&(i.doc=o),t}(e,t,n):t},Gv=function(e,t,n){-1===wt.inArray(t,n)&&(e.addAttributeFilter(n,(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),t.push(n))},Jv=function(e,t,n,r,o){return function(e,t,n){return!t.no_events&&e?function(e,t){return e.fire("PostProcess",t)}(e,Ne(Ne({},t),{content:n})).content:n}(e,o,function(e,t,n){return Om(e,t).serialize(n)}(t,n,r))},Qv=function(e,t){var n=["data-mce-selected"],r=t&&t.dom?t.dom:iu.DOM,o=t&&t.schema?t.schema:yi(e)
e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
var i=Xv(e,o);(function(e,t,n){e.addAttributeFilter("data-mce-tabindex",(function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attr("data-mce-tabindex")),n.attr(t,null)})),e.addAttributeFilter("src,href,style",(function(e,r){for(var o,i,a=e.length,u="data-mce-"+r,c=t.url_converter,s=t.url_converter_scope;a--;)void 0!==(i=(o=e[a]).attr(u))?(o.attr(r,i.length>0?i:null),o.attr(u,null)):(i=o.attr(r),"style"===r?i=n.serializeStyle(n.parseStyle(i),o.name):c&&(i=c.call(s,i,r,o.name)),o.attr(r,i.length>0?i:null))})),e.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",n.length>0?n:null))})),e.addAttributeFilter("data-mce-type",(function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attr("data-mce-type")||n.cleanup||(w.from(r.firstChild).exists((function(e){return!lo(e.value)}))?r.unwrap():r.remove())})),e.addNodeFilter("noscript",(function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=ci.decode(t.value))})),e.addNodeFilter("script,style",(function(e,n){for(var r,o,i,a=e.length,u=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};a--;)o=(r=e[a]).firstChild?r.firstChild.value:"","script"===n?((i=r.attr("type"))&&r.attr("type","mce-no/type"===i?null:i.replace(/^mce\-/,"")),"xhtml"===t.element_format&&o.length>0&&(r.firstChild.value="// <![CDATA[\n"+u(o)+"\n// ]]>")):"xhtml"===t.element_format&&o.length>0&&(r.firstChild.value="\x3c!--\n"+u(o)+"\n--\x3e")})),e.addNodeFilter("#comment",(function(e){for(var r,o=e.length;o--;)r=e[o],t.preserve_cdata&&0===r.value.indexOf("[CDATA[")?(r.name="#cdata",r.type=4,r.value=n.decode(r.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===r.value.indexOf("mce:protected ")&&(r.name="#text",r.type=3,r.raw=!0,r.value=unescape(r.value).substr(14))})),e.addNodeFilter("xml:namespace,input",(function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||n.attr("type")||n.attr("type","text"))})),e.addAttributeFilter("data-mce-type",(function(t){H(t,(function(t){"format-caret"===t.attr("data-mce-type")&&(t.isEmpty(e.schema.getNonEmptyElements())?t.remove():t.unwrap())}))})),e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}))})(i,e,r)
return{schema:o,addNodeFilter:i.addNodeFilter,addAttributeFilter:i.addAttributeFilter,serialize:function(n,a){void 0===a&&(a={})
var u=Ne({format:"html"},a),c=Yv(t,n,u),s=function(e,t,n){var r=mo(n.getInner?t.innerHTML:e.getOuterHTML(t))
return n.selection||co(St.fromDom(t))?r:wt.trim(r)}(r,c,u),f=function(e,t,n){var r=n.selection?Ne({forced_root_block:!1},n):n,o=e.parse(t,r)
return function(e){var t=function(e){return e&&"br"===e.name},n=e.lastChild
if(t(n)){var r=n.prev
t(r)&&(n.remove(),r.remove())}}(o),o}(i,s,u)
return"tree"===u.format?f:Jv(t,e,o,f,u)},addRules:function(e){o.addValidElements(e)},setRules:function(e){o.setValidElements(e)},addTempAttr:l(Gv,i,n),getTempAttrs:s(n),getNodeFilters:i.getNodeFilters,getAttributeFilters:i.getAttributeFilters}},Zv=function(e,t){var n=Qv(e,t)
return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters}},ey=function(e,t){return void 0===t&&(t={}),function(e,t,n){return bv(e).editor.getContent(t,n)}(e,t,t.format?t.format:"html")},ty=function(e,t,n){return void 0===n&&(n={}),function(e,t,n){return bv(e).editor.setContent(t,n)}(e,t,n)},ny=iu.DOM,ry=function(e){return w.from(e).each((function(e){return e.destroy()}))},oy=function(e){if(!e.removed){var t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement()
r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&ny.remove(o.nextSibling),function(e){e.fire("remove")}(e),e.editorManager.remove(e),!e.inline&&r&&function(e){ny.setStyle(e.id,"display",e.orgDisplay)}(e),function(e){e.fire("detach")}(e),ny.remove(e.getContainer()),ry(t),ry(n),e.destroy()}},iy=function(e,t){var n=e.selection,r=e.dom
e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),ry(n),ry(r)),function(e){var t=e.formElement
t&&(t._mceOldSubmit&&(t.submit=t._mceOldSubmit,t._mceOldSubmit=null),ny.unbind(t,"submit reset",e.formEventDelegate))}(e),function(e){e.contentAreaContainer=e.formElement=e.container=e.editorContainer=null,e.bodyElement=e.contentDocument=e.contentWindow=null,e.iframeElement=e.targetElm=null,e.selection&&(e.selection=e.selection.win=e.selection.dom=e.selection.dom.doc=null)}(e),e.destroyed=!0):e.remove())},ay=Object.prototype.hasOwnProperty,uy=(kv=function(e,t){return k(e)&&k(t)?uy(e,t):t},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var o=e[r]
for(var i in o)ay.call(o,i)&&(n[i]=kv(n[i],o[i]))}return n}),cy=ut().deviceType,sy=cy.isTouch(),fy=cy.isPhone(),ly=cy.isTablet(),dy=["lists","autolink","autosave"],my={table_grid:!1,object_resizing:!1,resize:!1},py=function(e){var t=_(e)?e.join(" "):e,n=j(E(t)?t.split(" "):[],Le)
return q(n,(function(e){return e.length>0}))},gy=function(e,t){var n=fe(t,(function(t,n){return U(e,n)}))
return function(e,t){return{sections:s(e),settings:s(t)}}(n.t,n.f)},hy=function(e,t){return e.sections().hasOwnProperty(t)},vy=function(e,t){return me(e,"toolbar_mode").orThunk((function(){return me(e,"toolbar_drawer").map((function(e){return!1===e?"wrap":e}))})).getOr(t)},yy=function(e,t){var n={resize:!1,toolbar_mode:vy(e,"scrolling"),toolbar_sticky:!1}
return Ne(Ne(Ne({},my),n),t?{menubar:!1}:{})},by=function(e,t){var n=t.external_plugins?t.external_plugins:{}
return e&&e.external_plugins?wt.extend({},e.external_plugins,n):n},Cy=function(e,t,n,r){return e&&function(e,t,n){var r=e.sections()
return hy(e,t)&&r[t].theme===n}(t,"mobile","mobile")?q(r,l(U,dy)):e&&hy(t,"mobile")?r:n},wy=function(e,t,n,r){var o=py(n.forced_plugins),i=py(r.plugins),a=function(e,t){return hy(e,t)?e.sections()[t]:{}}(t,"mobile"),u=a.plugins?py(a.plugins):i,c=function(e,t){return[].concat(py(e)).concat(py(t))}(o,Cy(e,t,i,u))
if(ht.browser.isIE()&&U(c,"rtc"))throw new Error("RTC plugin is not supported on IE 11.")
return wt.extend(r,{plugins:c.join(" ")})},xy=function(e,t,n,r,o){var i=e?{mobile:yy(o.mobile||{},t)}:{},a=gy(["mobile"],uy(i,o)),u=wt.extend(n,r,a.settings(),function(e,t){return e&&hy(t,"mobile")}(e,a)?function(e,t,n){void 0===n&&(n={})
var r=e.sections(),o=r.hasOwnProperty(t)?r[t]:{}
return wt.extend({},n,o)}(a,"mobile"):{},{validate:!0,external_plugins:by(r,a.settings())})
return wy(e,a,r,u)},Sy=function(e,t,n,r,o){var i=function(e,t,n,r,o){var i={id:t,theme:"silver",toolbar_mode:vy(e,"floating"),plugins:"",document_base_url:n,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,inline_styles:!0,convert_fonts_to_spans:!0,indent:!0,indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:o.convertURL,url_converter_scope:o}
return Ne(Ne({},i),r?my:{})}(o,t,n,sy,e)
return xy(fy||ly,fy,i,r,o)},Ny=function(e,t,n){return w.from(t.settings[n]).filter(e)},Ey=function(e,t,n,r){var o,i=t in e.settings?e.settings[t]:n
return"hash"===r?function(e){var t={}
return"string"==typeof e?H(e.indexOf("=")>0?e.split(/[;,](?![^=;,]*(?:[;,]|$))/):e.split(","),(function(e){var n=e.split("=")
n.length>1?t[wt.trim(n[0])]=wt.trim(n[1]):t[wt.trim(n[0])]=wt.trim(n[0])})):t=e,t}(i):"string"===r?Ny(E,e,t).getOr(n):"number"===r?Ny(P,e,t).getOr(n):"boolean"===r?Ny(R,e,t).getOr(n):"object"===r?Ny(k,e,t).getOr(n):"array"===r?Ny(_,e,t).getOr(n):"string[]"===r?Ny((o=E,function(e){return _(e)&&G(e,o)}),e,t).getOr(n):"function"===r?Ny(B,e,t).getOr(n):i},ky=(_v={},{add:function(e,t){_v[e]=t},get:function(e){return _v[e]?_v[e]:{icons:{}}},has:function(e){return pe(_v,e)}}),_y=function(e,t){return t.dom[e]},Ay=function(e,t){return parseInt(Yn(t,e),10)},Ry=l(_y,"clientWidth"),Ty=l(_y,"clientHeight"),Dy=l(Ay,"margin-top"),Oy=l(Ay,"margin-left"),By=function(e,t,n){var r,o=St.fromDom(e.getBody()),i=e.inline?o:(r=o,St.fromDom(Ft(r).dom.documentElement)),a=function(e,t,n,r){var o=function(e){return e.dom.getBoundingClientRect()}(t)
return{x:n-(e?o.left+t.dom.clientLeft+Oy(t):0),y:r-(e?o.top+t.dom.clientTop+Dy(t):0)}}(e.inline,i,t,n)
return function(e,t,n){var r=Ry(e),o=Ty(e)
return t>=0&&n>=0&&t<=r&&n<=o}(i,a.x,a.y)},Py=function(e){var t,n=e.inline?e.getBody():e.getContentAreaContainer()
return(t=n,w.from(t).map(St.fromDom)).map(ln).getOr(!1)},Ly=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getNotificationManagerImpl?n.getNotificationManagerImpl():{open:t=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:t,reposition:t,getArgs:t}},r=function(){return w.from(t[0])},o=function(){t.length>0&&n().reposition(t)},i=function(e){X(t,(function(t){return t===e})).each((function(e){t.splice(e,1)}))},a=function(a,u){if(void 0===u&&(u=!0),!e.removed&&Py(e))return u&&e.fire("BeforeOpenNotification",{notification:a}),K(t,(function(e){return t=n().getArgs(e),r=a,!(t.type!==r.type||t.text!==r.text||t.progressBar||t.timeout||r.progressBar||r.timeout)
var t,r})).getOrThunk((function(){e.editorManager.setActive(e)
var u=n().open(a,(function(){i(u),o(),r().fold((function(){return e.focus()}),(function(e){return St.fromDom(e.getEl()).dom.focus()}))}))
return function(e){t.push(e)}(u),o(),e.fire("OpenNotification",Ne({},u)),u}))}
return function(e){e.on("SkinLoaded",(function(){var t=function(e){return e.getParam("service_message")}(e)
t&&a({text:t,type:"warning",timeout:0},!1)})),e.on("ResizeEditor ResizeWindow NodeChange",(function(){Xr.requestAnimationFrame(o)})),e.on("remove",(function(){H(t.slice(),(function(e){n().close(e)}))}))}(e),{open:a,close:function(){r().each((function(e){n().close(e),i(e),o()}))},getNotifications:function(){return t}}},Iy=gu.PluginManager,My=gu.ThemeManager
var Fy,Uy=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getWindowManagerImpl?n.getWindowManagerImpl():{open:t=function(){throw new Error("Theme did not provide a WindowManager implementation.")},openUrl:t,alert:t,confirm:t,close:t,getParams:t,setParams:t}},r=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t?t.apply(e,n):void 0}},o=function(n){t.push(n),function(t){e.fire("OpenWindow",{dialog:t})}(n)},i=function(n){(function(t){e.fire("CloseWindow",{dialog:t})})(n),0===(t=q(t,(function(e){return e!==n}))).length&&e.focus()},a=function(t){e.editorManager.setActive(e),Wd(e)
var n=t()
return o(n),n}
return e.on("remove",(function(){H(t,(function(e){n().close(e)}))})),{open:function(e,t){return a((function(){return n().open(e,t,i)}))},openUrl:function(e){return a((function(){return n().openUrl(e,i)}))},alert:function(e,t,o){var i=n()
i.alert(e,r(o||i,t))},confirm:function(e,t,o){var i=n()
i.confirm(e,r(o||i,t))},close:function(){w.from(t[t.length-1]).each((function(e){n().close(e),i(e)}))}}},zy=function(e,t){e.notificationManager.open({type:"error",text:t})},jy=function(e,t){e._skinLoaded?zy(e,t):e.on("SkinLoaded",(function(){zy(e,t)}))},Hy=function(e,t,n){Vl(e,t,{message:n}),console.error(n)},Vy=function(e,t,n){return n?"Failed to load "+e+": "+n+" from url "+t:"Failed to load "+e+" url: "+t},qy=function(e,t,n){Hy(e,"PluginLoadError",Vy("plugin",t,n))},$y=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=window.console
r&&(r.error?r.error.apply(r,Ee([e],t)):r.log.apply(r,Ee([e],t)))},Wy=function(e){return Ky(e,function(e){var t=e.getParam("content_css")
return E(t)?j(t.split(","),Le):_(t)?t:!1===t||e.inline?[]:["default"]}(e))},Ky=function(e,t){var n=e.editorManager.baseURL+"/skins/content",r="content"+e.editorManager.suffix+".css",o=!0===e.inline
return j(t,(function(t){return function(e){return/^[a-z0-9\-]+$/i.test(e)}(t)&&!o?n+"/"+t+"/"+r:e.documentBaseURI.toAbsolute(t)}))},Xy=function(e){e.contentCSS=e.contentCSS.concat(Wy(e),function(e){return Ky(e,os(e))}(e))},Yy=function(){var e={},t=function(e,t){return{status:e,resultUri:t}},n=function(t){return t in e}
return{hasBlobUri:n,getResultUri:function(t){var n=e[t]
return n?n.resultUri:null},isPending:function(t){return!!n(t)&&1===e[t].status},isUploaded:function(t){return!!n(t)&&2===e[t].status},markPending:function(n){e[n]=t(1,null)},markUploaded:function(n,r){e[n]=t(2,r)},removeFailed:function(t){delete e[t]},destroy:function(){e={}}}},Gy=0,Jy=function(e){return e+Gy+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t())
var t},Qy=function(e,t){var n={},r=function(e,n,r,o){var i=new XMLHttpRequest
i.open("POST",t.url),i.withCredentials=t.credentials,i.upload.onprogress=function(e){o(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){if(i.status<200||i.status>=300)r("HTTP Error: "+i.status)
else{var e,o,a=JSON.parse(i.responseText)
if(a&&"string"==typeof a.location)n((e=t.basePath,o=a.location,e?e.replace(/\/$/,"")+"/"+o.replace(/^\//,""):o))
else r("Invalid JSON: "+i.responseText)}}
var a=new FormData
a.append("file",e.blob(),e.filename()),i.send(a)},o=function(e,t){return{url:t,blobInfo:e,status:!0}},i=function(e,t,n){return{url:"",blobInfo:e,status:!1,error:{message:t,options:n}}},a=function(e,t){wt.each(n[e],(function(e){e(t)})),delete n[e]},u=function(r,u){return r=wt.grep(r,(function(t){return!e.isUploaded(t.blobUri())})),qr.all(wt.map(r,(function(r){return e.isPending(r.blobUri())?function(e){var t=e.blobUri()
return new qr((function(e){n[t]=n[t]||[],n[t].push(e)}))}(r):function(t,n,r){return e.markPending(t.blobUri()),new qr((function(u){var c
try{var s=function(){c&&c.close()}
n(t,(function(n){s(),e.markUploaded(t.blobUri(),n),a(t.blobUri(),o(t,n)),u(o(t,n))}),(function(n,r){var o=r||{}
s(),e.removeFailed(t.blobUri()),a(t.blobUri(),i(t,n,o)),u(i(t,n,o))}),(function(e){e<0||e>100||w.from(c).orThunk((function(){return w.from(r).map(p)})).each((function(t){c=t,t.progressBar.value(e)}))}))}catch(f){u(i(t,f.message,{}))}}))}(r,t.handler,u)})))}
return!1===B(t.handler)&&(t.handler=r),{upload:function(e,n){return t.url||t.handler!==r?u(e,n):new qr((function(e){e([])}))}}},Zy=function(e){return function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})}},eb=function(e,t){return Qy(t,{url:Gc(e),basePath:Jc(e),credentials:Qc(e),handler:Zc(e)})},tb=function(e){var t,n,r=function(){var e=[],t=function(e){if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
var t,n=e.id||Jy("blobid"),r=e.name||n,o=e.blob
return{id:s(n),name:s(r),filename:s(e.filename||r+"."+(t=o.type,{"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png","image/apng":"apng","image/avif":"avif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff"}[t.toLowerCase()]||"dat")),blob:s(o),base64:s(e.base64),blobUri:s(e.blobUri||URL.createObjectURL(o)),uri:s(e.uri)}},n=function(t){return K(e,t).getOrUndefined()},r=function(e){return n((function(t){return t.id()===e}))}
return{create:function(e,n,r,o,i){if(E(e))return t({id:e,name:o,filename:i,blob:n,base64:r})
if(k(e))return t(e)
throw new Error("Unknown input type")},add:function(t){r(t.id())||e.push(t)},get:r,getByUri:function(e){return n((function(t){return t.blobUri()===e}))},getByData:function(e,t){return n((function(n){return n.base64()===e&&n.blob().type===t}))},findFirst:n,removeByUri:function(t){e=q(e,(function(e){return e.blobUri()!==t||(URL.revokeObjectURL(e.blobUri()),!1)}))},destroy:function(){H(e,(function(e){URL.revokeObjectURL(e.blobUri())})),e=[]}}}(),o=Yy(),i=[],a=function(e){var t=fu(null)
return e.on("change AddUndo",(function(e){t.set(Ne({},e.level))})),{fireIfChanged:function(){var n=e.undoManager.data
te(n).filter((function(e){return!dv(t.get(),e)})).each((function(t){e.setDirty(!0),e.fire("change",{level:t,lastLevel:Z(n,n.length-2).getOrNull()})}))}}}(e),u=function(t){return function(n){return e.selection?t(n):[]}},c=function(e,t,n){var r=0
do{-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1)}while(-1!==r)
return e},f=function(e,t,n){var r='src="'+n+'"'+(n===ht.transparentSrc?' data-mce-placeholder="1"':"")
return e=c(e,'src="'+t+'"',r),e=c(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},l=function(t,n){H(e.undoManager.data,(function(e){"fragmented"===e.type?e.fragments=j(e.fragments,(function(e){return f(e,t,n)})):e.content=f(e.content,t,n)}))},d=function(n){return t||(t=eb(e,o)),g().then(u((function(o){var i=j(o,(function(e){return e.blobInfo}))
return t.upload(i,Zy(e)).then(u((function(t){var i=[],u=j(t,(function(t,n){var a=o[n].blobInfo,u=o[n].image
return t.status&&function(e){return e.getParam("images_replace_blob_uris",!0,"boolean")}(e)?(r.removeByUri(u.src),function(t,n){var r,o=e.convertURL(n,"src")
l(t.src,n),e.$(t).attr({src:Xc(e)?(r=n,r+(-1===r.indexOf("?")?"?":"&")+(new Date).getTime()):n,"data-mce-src":o})}(u,t.url)):t.error&&(t.error.options.remove&&(l(u.getAttribute("src"),ht.transparentSrc),i.push(u)),function(e,t){jy(e,pu.translate(["Failed to upload image: {0}",t]))}(e,t.error.message)),{element:u,status:t.status,uploadUri:t.url,blobInfo:a}}))
return u.length>0&&a.fireIfChanged(),i.length>0&&(vv(e)?console.error("Removing images on failed uploads is currently unsupported for RTC"):e.undoManager.transact((function(){H(i,(function(t){e.dom.remove(t),r.removeByUri(t.src)}))}))),n&&n(u),u})))})))},m=function(t){if(Kc(e))return d(t)},p=function(t){return!1!==G(i,(function(e){return e(t)}))&&(0!==t.getAttribute("src").indexOf("data:")||function(e){return e.getParam("images_dataimg_filter",v,"function")}(e)(t))},g=function(){return n||(n=Uv(o,r)),n.findAll(e.getBody(),p).then(u((function(t){return t=q(t,(function(t){return"string"!=typeof t||(jy(e,t),!1)})),H(t,(function(e){l(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),t})))},h=function(t){return t.replace(/src="(blob:[^"]+)"/g,(function(t,n){var i=o.getResultUri(n)
if(i)return'src="'+i+'"'
var a=r.getByUri(n)
return a||(a=W(e.editorManager.get(),(function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)}),null)),a?'src="data:'+a.blob().type+";base64,"+a.base64()+'"':t}))}
return e.on("SetContent",(function(){Kc(e)?m():g()})),e.on("RawSaveContent",(function(e){e.content=h(e.content)})),e.on("GetContent",(function(e){e.source_view||"raw"===e.format||"tree"===e.format||(e.content=h(e.content))})),e.on("PostRender",(function(){e.parser.addNodeFilter("img",(function(e){H(e,(function(e){var t=e.attr("src")
if(!r.getByUri(t)){var n=o.getResultUri(t)
n&&e.attr("src",n)}}))}))})),{blobCache:r,addFilter:function(e){i.push(e)},uploadImages:d,uploadImagesAuto:m,scanForImages:g,destroy:function(){r.destroy(),o.destroy(),n=t=null}}},nb=function(e){var t={},n=function(e,r){e&&("string"!=typeof e?wt.each(e,(function(e,t){n(t,e)})):(_(r)||(r=[r]),wt.each(r,(function(e){void 0===e.deep&&(e.deep=!e.selector),void 0===e.split&&(e.split=!e.selector||e.inline),void 0===e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))})),t[e]=r))}
return n(function(e){var t={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all",preserve_attributes:["class","style"]},{inline:"s",remove:"all",preserve_attributes:["class","style"]}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",defaultBlock:"p",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(e,t,n){return Sn(e)&&e.hasAttribute("href")},onformat:function(t,n,r){wt.each(r,(function(n,r){e.setAttrib(t,r,n)}))}},removeformat:[{selector:"b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}
return wt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),(function(e){t[e]={block:e,remove:"all"}})),t}(e.dom)),n(function(e){return e.getParam("formats")}(e)),{get:function(e){return e?t[e]:t},has:function(e){return pe(t,e)},register:n,unregister:function(e){return e&&t[e]&&delete t[e],t}}},rb=wt.each,ob=iu.DOM,ib=function(e,t){var n,r,o,i=t&&t.schema||yi({}),a=function(e){r="string"==typeof e?{name:e,classes:[],attrs:{}}:e
var t=ob.create(r.name)
return function(e,t){t.classes.length&&ob.addClass(e,t.classes.join(" ")),ob.setAttribs(e,t.attrs)}(t,r),t},u=function(e,t,n){var r,o,c=t.length>0&&t[0],s=c&&c.name,f=function(e,t){var n="string"!=typeof e?e.nodeName.toLowerCase():e,r=i.getElementRule(n),o=r&&r.parentsRequired
return!(!o||!o.length)&&(t&&-1!==wt.inArray(o,t)?t:o[0])}(e,s)
if(f)s===f?(o=t[0],t=t.slice(1)):o=f
else if(c)o=t[0],t=t.slice(1)
else if(!n)return e
return o&&(r=a(o)).appendChild(e),n&&(r||(r=ob.create("div")).appendChild(e),wt.each(n,(function(t){var n=a(t)
r.insertBefore(n,e)}))),u(r,t,o&&o.siblings)}
return e&&e.length?(r=e[0],n=a(r),(o=ob.create("div")).appendChild(u(n,e.slice(1),r.siblings)),o):""},ab=function(e){var t,n={classes:[],attrs:{}}
return"*"!==(e=n.selector=wt.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,(function(e,t,r,o,i){switch(t){case"#":n.attrs.id=r
break
case".":n.classes.push(r)
break
case":":-1!==wt.inArray("checked disabled enabled read-only required".split(" "),r)&&(n.attrs[r]=r)}if("["===o){var a=i.match(/([\w\-]+)(?:\=\"([^\"]+))?/)
a&&(n.attrs[a[1]]=a[2])}return""}))),n.name=t||"div",n},ub=function(e,t){var n,r,o,i="",a=function(e){var t=e.getParam("preview_styles","font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow")
return E(t)?t:""}(e)
if(""===a)return""
var u=function(e){return e.replace(/%(\w+)/g,"")}
if("string"==typeof t){if(!(t=e.formatter.get(t)))return
t=t[0]}if("preview"in t){var c=me(t,"preview")
if(c.is(!1))return""
a=c.getOr(a)}n=t.block||t.inline||"span"
var s,f=(s=t.selector)&&"string"==typeof s?(s=(s=s.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),wt.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/),(function(e){var t=wt.map(e.split(/(?:~\+|~|\+)/),ab),n=t.pop()
return t.length&&(n.siblings=t),n})).reverse()):[]
f.length?(f[0].name||(f[0].name=n),n=t.selector,r=ib(f,e)):r=ib([n],e)
var l=ob.select(n,r)[0]||r.firstChild
return rb(t.styles,(function(e,t){var n=u(e)
n&&ob.setStyle(l,t,n)})),rb(t.attributes,(function(e,t){var n=u(e)
n&&ob.setAttrib(l,t,n)})),rb(t.classes,(function(e){var t=u(e)
ob.hasClass(l,t)||ob.addClass(l,t)})),e.fire("PreviewFormats"),ob.setStyles(r,{position:"absolute",left:-65535}),e.getBody().appendChild(r),o=ob.getStyle(e.getBody(),"fontSize",!0),o=/px$/.test(o)?parseInt(o,10):0,rb(a.split(" "),(function(t){var n=ob.getStyle(l,t,!0)
if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=ob.getStyle(e.getBody(),t,!0),"#ffffff"===ob.toHex(n).toLowerCase())||"color"===t&&"#000000"===ob.toHex(n).toLowerCase())){if("font-size"===t&&/em|%$/.test(n)){if(0===o)return
n=parseFloat(n)/(/%$/.test(n)?100:1)*o+"px"}"border"===t&&n&&(i+="padding:0 2px;"),i+=t+":"+n+";"}})),e.fire("AfterPreviewFormats"),ob.remove(r),i},cb=function(e){var t=nb(e),n=fu(null)
return function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t])
e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])}(e),nh(e),{get:t.get,has:t.has,register:t.register,unregister:t.unregister,apply:function(t,n,r){(function(e,t,n,r){Cv(e).formatter.apply(t,n,r)})(e,t,n,r)},remove:function(t,n,r,o){(function(e,t,n,r,o){Cv(e).formatter.remove(t,n,r,o)})(e,t,n,r,o)},toggle:function(t,n,r){(function(e,t,n,r){Cv(e).formatter.toggle(t,n,r)})(e,t,n,r)},match:function(t,n,r){return function(e,t,n,r){return Cv(e).formatter.match(t,n,r)}(e,t,n,r)},closest:function(t){return function(e,t){return Cv(e).formatter.closest(t)}(e,t)},matchAll:function(t,n){return function(e,t,n){return Cv(e).formatter.matchAll(t,n)}(e,t,n)},matchNode:function(t,n,r,o){return function(e,t,n,r,o){return Cv(e).formatter.matchNode(t,n,r,o)}(e,t,n,r,o)},canApply:function(t){return function(e,t){return Cv(e).formatter.canApply(t)}(e,t)},formatChanged:function(t,r,o){return function(e,t,n,r,o){return void 0===o&&(o=!1),Cv(e).formatter.formatChanged(t,n,r,o)}(e,n,t,r,o)},getCssText:l(ub,e)}},sb=function(e){var t=fu(w.none()),n=fu(0),r=fu(0),o={data:[],typing:!1,beforeChange:function(){(function(e,t,n){Cv(e).undoManager.beforeChange(t,n)})(e,n,t)},add:function(i,a){return function(e,t,n,r,o,i,a){return Cv(e).undoManager.addUndoLevel(t,n,r,o,i,a)}(e,o,r,n,t,i,a)},undo:function(){return function(e,t,n,r){return Cv(e).undoManager.undo(t,n,r)}(e,o,n,r)},redo:function(){return function(e,t,n){return Cv(e).undoManager.redo(t,n)}(e,r,o.data)},clear:function(){(function(e,t,n){Cv(e).undoManager.clear(t,n)})(e,o,r)},reset:function(){(function(e,t){Cv(e).undoManager.reset(t)})(e,o)},hasUndo:function(){return function(e,t,n){return Cv(e).undoManager.hasUndo(t,n)}(e,o,r)},hasRedo:function(){return function(e,t,n){return Cv(e).undoManager.hasRedo(t,n)}(e,o,r)},transact:function(t){return function(e,t,n,r){return Cv(e).undoManager.transact(t,n,r)}(e,o,n,t)},ignore:function(t){(function(e,t,n){Cv(e).undoManager.ignore(t,n)})(e,n,t)},extra:function(t,n){(function(e,t,n,r,o){Cv(e).undoManager.extra(t,n,r,o)})(e,o,r,t,n)}}
return vv(e)||function(e,t,n){var r=fu(!1),o=function(e){pv(t,!1,n),t.add({},e)}
e.on("init",(function(){t.add()})),e.on("BeforeExecCommand",(function(e){var r=e.command.toLowerCase()
"undo"!==r&&"redo"!==r&&"mcerepaint"!==r&&(gv(t,n),t.beforeChange())})),e.on("ExecCommand",(function(e){var t=e.command.toLowerCase()
"undo"!==t&&"redo"!==t&&"mcerepaint"!==t&&o(e)})),e.on("ObjectResizeStart cut",(function(){t.beforeChange()})),e.on("SaveContent ObjectResized blur",o),e.on("dragend",o),e.on("keyup",(function(n){var i=n.keyCode
n.isDefaultPrevented()||((i>=33&&i<=36||i>=37&&i<=40||45===i||n.ctrlKey)&&(o(),e.nodeChanged()),46!==i&&8!==i||e.nodeChanged(),r.get()&&t.typing&&!1===dv(cv(e),t.data[0])&&(!1===e.isDirty()&&(e.setDirty(!0),e.fire("change",{level:t.data[0],lastLevel:null})),e.fire("TypingUndo"),r.set(!1),e.nodeChanged()))})),e.on("keydown",(function(e){var i=e.keyCode
if(!e.isDefaultPrevented())if(i>=33&&i<=36||i>=37&&i<=40||45===i)t.typing&&o(e)
else{var a=e.ctrlKey&&!e.altKey||e.metaKey
!(i<16||i>20)||224===i||91===i||t.typing||a||(t.beforeChange(),pv(t,!0,n),t.add({},e),r.set(!0))}})),e.on("mousedown",(function(e){t.typing&&o(e)})),e.on("input",(function(e){var t
e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(t=e).inputType&&null===t.data||function(e){return"insertFromPaste"===e.inputType||"insertFromDrop"===e.inputType}(e))&&o(e)})),e.on("AddUndo Undo Redo ClearUndos",(function(t){t.isDefaultPrevented()||e.nodeChanged()}))}(e,o,n),function(e){e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo")}(e),o},fb=[9,27,ql.HOME,ql.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,ql.DOWN,ql.UP,ql.LEFT,ql.RIGHT].concat(ht.browser.isFirefox()?[224]:[]),lb="data-mce-placeholder",db=function(e){return"keydown"===e.type||"keyup"===e.type},mb=function(e){var t=e.keyCode
return t===ql.BACKSPACE||t===ql.DELETE},pb=function(e){var t=e.dom,n=$c(e),r=function(e){return e.getParam("placeholder",Hc.getAttrib(e.getElement(),"placeholder"),"string")}(e),o=function(i,a){if(!function(e){if(db(e)){var t=e.keyCode
return!mb(e)&&(ql.metaKeyPressed(e)||e.altKey||t>=112&&t<=123||U(fb,t))}return!1}(i)){var u=e.getBody(),c=!function(e){return db(e)&&!(mb(e)||"keyup"===e.type&&229===e.keyCode)}(i)&&function(e,t,n){if(qo(St.fromDom(t),!1)){var r=""===n,o=t.firstElementChild
return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&(r?!e.isBlock(o):n===o.nodeName.toLowerCase())}return!1}(t,u,n);(""!==t.getAttrib(u,lb)!==c||a)&&(t.setAttrib(u,lb,c?r:null),t.setAttrib(u,"aria-placeholder",c?r:null),function(e,t){e.fire("PlaceholderToggle",{state:t})}(e,c),e.on(c?"keydown":"keyup",o),e.off(c?"keyup":"keydown",o))}}
r&&e.on("init",(function(t){o(t,!0),e.on("change SetContent ExecCommand",o),e.on("paste",(function(t){return Xr.setEditorTimeout(e,(function(){return o(t)}))}))}))},gb=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,hb=function(e,t){return Et(St.fromDom(t),function(e){return e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string")}(e))},vb=function(e){return"rtl"===iu.DOM.getStyle(e,"direction",!0)||(t=e.textContent,gb.test(t))
var t},yb=function(e,t,n){var r=function(e,t,n){return q(iu.DOM.getParents(n.container(),"*",t),e)}(e,t,n)
return w.from(r[r.length-1])},bb=function(e,t){if(!t)return t
var n=t.container(),r=t.offset()
return e?vo(n)?Dn(n.nextSibling)?yc(n.nextSibling,0):yc.after(n):Co(t)?yc(n,r+1):t:vo(n)?Dn(n.previousSibling)?yc(n.previousSibling,n.previousSibling.data.length):yc.before(n):wo(t)?yc(n,r-1):t},Cb=l(bb,!0),wb=l(bb,!1),xb=function(e,t){return Rt(e,t)?Ur(t,(function(e){return ro(e)||io(e)}),function(e){return function(t){return _t(e,St.fromDom(t.dom.parentNode))}}(e)):w.none()},Sb=function(e){e.dom.isEmpty(e.getBody())&&(e.setContent(""),function(e){var t=e.getBody(),n=t.firstChild&&e.dom.isBlock(t.firstChild)?t.firstChild:t
e.selection.setCursorLocation(n,0)}(e))},Nb=function(e,t){return{from:e,to:t}},Eb=function(e,t){var n=St.fromDom(e),r=St.fromDom(t.container())
return xb(n,r).map((function(e){return function(e,t){return{block:e,position:t}}(e,t)}))},kb=function(e,t,n){var r=Eb(e,yc.fromRangeStart(n)),o=r.bind((function(n){return bf(t,e,n.position).bind((function(n){return Eb(e,n).map((function(n){return function(e,t,n){return Ln(n.position.getNode())&&!1===qo(n.block)?xf(!1,n.block.dom).bind((function(r){return r.isEqual(n.position)?bf(t,e,r).bind((function(t){return Eb(e,t)})):w.some(n)})).getOr(n):n}(e,t,n)}))}))}))
return Hu(r,o,Nb).filter((function(e){return function(e){return!1===_t(e.from.block,e.to.block)}(e)&&function(e){return zt(e.from.block).bind((function(t){return zt(e.to.block).filter((function(e){return _t(t,e)}))})).isSome()}(e)&&function(e){return!1===Fn(e.from.block.dom)&&!1===Fn(e.to.block.dom)}(e)}))},_b=function(e){var t=$t(e)
return X(t,eo).fold((function(){return t}),(function(e){return t.slice(0,e)}))},Ab=function(e){var t=_b(e)
return H(t,sn),t},Rb=function(e,t){var n=Zm(t,e)
return K(n.reverse(),(function(e){return qo(e)})).each(sn)},Tb=function(e,t,n,r){if(qo(n))return Ym(n),Ef(n.dom)
0===q(Vt(r),(function(e){return!qo(e)})).length&&qo(t)&&nn(r,St.fromTag("br"))
var o=Nf(n.dom,yc.before(r.dom))
return H(Ab(t),(function(e){nn(r,e)})),Rb(e,t),o},Db=function(e,t,n){if(qo(n))return sn(n),qo(t)&&Ym(t),Ef(t.dom)
var r=kf(n.dom)
return H(Ab(t),(function(e){an(n,e)})),Rb(e,t),r},Ob=function(e,t){return Rt(t,e)?function(e,t){var n=Zm(t,e)
return w.from(n[n.length-1])}(t,e):w.none()},Bb=function(e,t){xf(e,t.dom).map((function(e){return e.getNode()})).map(St.fromDom).filter(no).each(sn)},Pb=function(e,t,n){return Bb(!0,t),Bb(!1,n),Ob(t,n).fold(l(Db,e,t,n),l(Tb,e,t,n))},Lb=function(e,t,n,r){return t?Pb(e,r,n):Pb(e,n,r)},Ib=function(e,t){var n=St.fromDom(e.getBody()),r=function(e,t,n){return n.collapsed?kb(e,t,n):w.none()}(n.dom,t,e.selection.getRng()).bind((function(e){return Lb(n,t,e.from.block,e.to.block)}))
return r.each((function(t){e.selection.setRng(t.toRange())})),r.isSome()},Mb=function(e,t){var n=St.fromDom(t),r=l(_t,e)
return Fr(n,uo,r).isSome()},Fb=function(e,t){var n=Nf(e.dom,yc.fromRangeStart(t)).isNone(),r=Sf(e.dom,yc.fromRangeEnd(t)).isNone()
return!function(e,t){return Mb(e,t.startContainer)||Mb(e,t.endContainer)}(e,t)&&n&&r},Ub=function(e){var t=St.fromDom(e.getBody()),n=e.selection.getRng()
return Fb(t,n)?function(e){return e.setContent(""),e.selection.setCursorLocation(),!0}(e):function(e,t){var n=t.getRng()
return Hu(xb(e,St.fromDom(n.startContainer)),xb(e,St.fromDom(n.endContainer)),(function(r,o){return!1===_t(r,o)&&(n.deleteContents(),Lb(e,!0,r,o).each((function(e){t.setRng(e.toRange())})),!0)})).getOr(!1)}(t,e.selection)},zb=function(e,t){return!e.selection.isCollapsed()&&Ub(e)},jb=Mn,Hb=Fn,Vb=function(e,t,n,r,o){return w.from(t._selectionOverrides.showCaret(e,n,r,o))},qb=function(e,t){return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?w.none():w.some(function(e){var t=e.ownerDocument.createRange()
return t.selectNode(e),t}(t))},$b=function(e,t,n){var r=Gs(1,e.getBody(),t),o=yc.fromRangeStart(r),i=o.getNode()
if(Rs(i))return Vb(1,e,i,!o.isAtEnd(),!1)
var a=o.getNode(!0)
if(Rs(a))return Vb(1,e,a,!1,!1)
var u=e.dom.getParent(o.getNode(),(function(e){return Hb(e)||jb(e)}))
return Rs(u)?Vb(1,e,u,!1,n):w.none()},Wb=function(e,t,n){return t.collapsed?$b(e,t,n).getOr(t):t},Kb=function(e){return Wm(e)||Hm(e)},Xb=function(e){return Km(e)||Vm(e)},Yb=function(e,t,n,r,o,i){return Vb(r,e,i.getNode(!o),o,!0).each((function(n){if(t.collapsed){var r=t.cloneRange()
o?r.setEnd(n.startContainer,n.startOffset):r.setStart(n.endContainer,n.endOffset),r.deleteContents()}else t.deleteContents()
e.selection.setRng(n)})),function(e,t){Dn(t)&&0===t.data.length&&e.remove(t)}(e.dom,n),!0},Gb=function(e,t){return function(e,t){var n=e.selection.getRng()
if(!Dn(n.commonAncestorContainer))return!1
var r=t?bc.Forwards:bc.Backwards,o=pf(e.getBody()),i=l(ef,t?o.next:o.prev),a=t?Kb:Xb,u=Qs(r,e.getBody(),n),c=bb(t,i(u))
if(!c||!tf(u,c))return!1
if(a(c))return Yb(e,n,u.getNode(),r,t,c)
var s=i(c)
return!!(s&&a(s)&&tf(c,s))&&Yb(e,n,u.getNode(),r,t,s)}(e,t)},Jb=gr([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),Qb=function(e,t,n,r){var o=r.getNode(!1===t)
return xb(St.fromDom(e),St.fromDom(n.getNode())).map((function(e){return qo(e)?Jb.remove(e.dom):Jb.moveToElement(o)})).orThunk((function(){return w.some(Jb.moveToElement(o))}))},Zb=function(e,t,n){return bf(t,e,n).bind((function(r){return o=r.getNode(),uo(St.fromDom(o))||io(St.fromDom(o))||function(e,t,n,r){var o=function(t){return to(St.fromDom(t))&&!Vs(n,r,e)}
return Js(!t,n).fold((function(){return Js(t,r).fold(h,o)}),o)}(e,t,n,r)?w.none():t&&Fn(r.getNode())||!1===t&&Fn(r.getNode(!0))?Qb(e,t,n,r):t&&Km(n)||!1===t&&Wm(n)?w.some(Jb.moveToPosition(r)):w.none()
var o}))},eC=function(e,t,n){return function(e,t){var n=t.getNode(!1===e),r=e?"after":"before"
return Sn(n)&&n.getAttribute("data-mce-caret")===r}(t,n)?function(e,t){return e&&Fn(t.nextSibling)?w.some(Jb.moveToElement(t.nextSibling)):!1===e&&Fn(t.previousSibling)?w.some(Jb.moveToElement(t.previousSibling)):w.none()}(t,n.getNode(!1===t)).fold((function(){return Zb(e,t,n)}),w.some):Zb(e,t,n).bind((function(t){return function(e,t,n){return n.fold((function(e){return w.some(Jb.remove(e))}),(function(e){return w.some(Jb.moveToElement(e))}),(function(n){return Vs(t,n,e)?w.none():w.some(Jb.moveToPosition(n))}))}(e,n,t)}))},tC=function(e,t){return w.from(jl(e.getBody(),t))},nC=function(e,t){var n=e.selection.getNode()
return tC(e,n).filter(Fn).fold((function(){return function(e,t,n){var r=Gs(t?1:-1,e,n),o=yc.fromRangeStart(r),i=St.fromDom(e)
return!1===t&&Km(o)?w.some(Jb.remove(o.getNode(!0))):t&&Wm(o)?w.some(Jb.remove(o.getNode())):!1===t&&Wm(o)&&lp(i,o)?dp(i,o).map((function(e){return Jb.remove(e.getNode())})):t&&Km(o)&&fp(i,o)?mp(i,o).map((function(e){return Jb.remove(e.getNode())})):eC(e,t,o)}(e.getBody(),t,e.selection.getRng()).exists((function(n){return n.fold(function(e,t){return function(n){return e._selectionOverrides.hideFakeCaret(),Hp(e,t,St.fromDom(n)),!0}}(e,t),function(e,t){return function(n){var r=t?yc.before(n):yc.after(n)
return e.selection.setRng(r.toRange()),!0}}(e,t),function(e){return function(t){return e.selection.setRng(t.toRange()),!0}}(e))}))}),v)},rC=function(e,t){var n=e.selection.getNode()
return!!Fn(n)&&tC(e,n.parentNode).filter(Fn).fold((function(){var n
return n=St.fromDom(e.getBody()),H(ku(n,".mce-offscreen-selection"),sn),Hp(e,t,St.fromDom(e.selection.getNode())),Sb(e),!0}),v)},oC=function(e){var t=e.dom,n=e.selection,r=jl(e.getBody(),n.getNode())
if(Mn(r)&&t.isBlock(r)&&t.isEmpty(r)){var o=t.create("br",{"data-mce-bogus":"1"})
t.setHTML(r,""),r.appendChild(o),n.setRng(yc.before(o).toRange())}return!0},iC=function(e,t){return e.selection.isCollapsed()?nC(e,t):rC(e,t)},aC=function(e,t){return!!e.selection.isCollapsed()&&function(e,t){var n=yc.fromRangeStart(e.selection.getRng())
return bf(t,e.getBody(),n).filter((function(e){return t?zm(e):jm(e)})).bind((function(e){return w.from(qs(t?0:-1,e))})).exists((function(t){return e.selection.select(t),!0}))}(e,t)},uC=Dn,cC=function(e){return uC(e)&&e.data[0]===fo},sC=function(e){return uC(e)&&e.data[e.data.length-1]===fo},fC=function(e){return e.ownerDocument.createTextNode(fo)},lC=function(e,t){return e?function(e){if(uC(e.previousSibling))return sC(e.previousSibling)||e.previousSibling.appendData(fo),e.previousSibling
if(uC(e))return cC(e)||e.insertData(0,fo),e
var t=fC(e)
return e.parentNode.insertBefore(t,e),t}(t):function(e){if(uC(e.nextSibling))return cC(e.nextSibling)||e.nextSibling.insertData(0,fo),e.nextSibling
if(uC(e))return sC(e)||e.appendData(fo),e
var t=fC(e)
return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t}(t)},dC=l(lC,!0),mC=l(lC,!1),pC=function(e,t){return Dn(e.container())?lC(t,e.container()):lC(t,e.getNode())},gC=function(e,t){var n=t.get()
return n&&e.container()===n&&vo(n)},hC=function(e,t){return t.fold((function(t){ws(e.get())
var n=dC(t)
return e.set(n),w.some(yc(n,n.length-1))}),(function(t){return Ef(t).map((function(t){if(gC(t,e))return yc(e.get(),1)
ws(e.get())
var n=pC(t,!0)
return e.set(n),yc(n,1)}))}),(function(t){return kf(t).map((function(t){if(gC(t,e))return yc(e.get(),e.get().length-1)
ws(e.get())
var n=pC(t,!1)
return e.set(n),yc(n,n.length-1)}))}),(function(t){ws(e.get())
var n=mC(t)
return e.set(n),w.some(yc(n,1))}))},vC=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t)
if(r.isSome())return r}return w.none()},yC=gr([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),bC=function(e,t){var n=Hs(t,e)
return n||e},CC=function(e,t,n){var r=Cb(n),o=bC(t,r.container())
return yb(e,o,r).fold((function(){return Sf(o,r).bind(l(yb,e,o)).map((function(e){return yC.before(e)}))}),w.none)},wC=function(e,t){return null===Rf(e,t)},xC=function(e,t,n){return yb(e,t,n).filter(l(wC,t))},SC=function(e,t,n){var r=wb(n)
return xC(e,t,r).bind((function(e){return Nf(e,r).isNone()?w.some(yC.start(e)):w.none()}))},NC=function(e,t,n){var r=Cb(n)
return xC(e,t,r).bind((function(e){return Sf(e,r).isNone()?w.some(yC.end(e)):w.none()}))},EC=function(e,t,n){var r=wb(n),o=bC(t,r.container())
return yb(e,o,r).fold((function(){return Nf(o,r).bind(l(yb,e,o)).map((function(e){return yC.after(e)}))}),w.none)},kC=function(e){return!1===vb(AC(e))},_C=function(e,t,n){return vC([CC,SC,NC,EC],[e,t,n]).filter(kC)},AC=function(e){return e.fold(f,f,f,f)},RC=function(e){return e.fold(s("before"),s("start"),s("end"),s("after"))},TC=function(e){return e.fold(yC.before,yC.before,yC.after,yC.after)},DC=function(e){return e.fold(yC.start,yC.start,yC.end,yC.end)},OC=function(e,t,n,r,o,i){return Hu(yb(t,n,r),yb(t,n,o),(function(t,r){return t!==r&&function(e,t,n){var r=Hs(t,e),o=Hs(n,e)
return r&&r===o}(n,t,r)?yC.after(e?t:r):i})).getOr(i)},BC=function(e,t){return e.fold(v,(function(e){return r=t,!(RC(n=e)===RC(r)&&AC(n)===AC(r))
var n,r}))},PC=function(e,t){return e?t.fold(c(w.some,yC.start),w.none,c(w.some,yC.after),w.none):t.fold(w.none,c(w.some,yC.before),w.none,c(w.some,yC.end))},LC=function(e,t,n,r){var o=bb(e,r),i=_C(t,n,o)
return _C(t,n,o).bind(l(PC,e)).orThunk((function(){return function(e,t,n,r,o){var i=bb(e,o)
return bf(e,n,i).map(l(bb,e)).fold((function(){return r.map(TC)}),(function(o){return _C(t,n,o).map(l(OC,e,t,n,i,o)).filter(l(BC,r))})).filter(kC)}(e,t,n,i,r)}))},IC=(l(LC,!1),l(LC,!0),function(e,t,n){var r=e?1:-1
return t.setRng(yc(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0}),MC=function(e,t){var n=t.selection.getRng(),r=e?yc.fromRangeEnd(n):yc.fromRangeStart(n)
return!!function(e){return B(e.selection.getSel().modify)}(t)&&(e&&Co(r)?IC(!0,t.selection,r):!(e||!wo(r))&&IC(!1,t.selection,r))},FC=function(e,t){var n=e.dom.createRng()
n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},UC=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},zC=function(e,t,n){return hC(t,n).map((function(t){return FC(e,t),n}))},jC=function(e,t){if(e.selection.isCollapsed()&&!0!==e.composing&&t.get()){var n=yc.fromRangeStart(e.selection.getRng())
yc.isTextPosition(n)&&!1===function(e){return Co(e)||wo(e)}(n)&&(FC(e,Cs(t.get(),n)),t.set(null))}},HC=function(e,t,n){return!!ss(e)&&function(e,t,n){var r=e.getBody(),o=yc.fromRangeStart(e.selection.getRng()),i=l(hb,e)
return LC(n,i,r,o).bind((function(n){return zC(e,t,n)}))}(e,t,n).isSome()},VC=function(e,t,n){return!!ss(t)&&MC(e,t)},qC=function(e){var t=fu(null),n=l(hb,e)
return e.on("NodeChange",(function(r){!ss(e)||ht.browser.isIE()&&r.initial||(function(e,t,n){var r=j(ku(St.fromDom(t.getRoot()),'*[data-mce-selected="inline-boundary"]'),(function(e){return e.dom})),o=q(r,e),i=q(n,e)
H(Q(o,i),l(UC,!1)),H(Q(i,o),l(UC,!0))}(n,e.dom,r.parents),jC(e,t),function(e,t,n,r){if(t.selection.isCollapsed()){var o=q(r,e)
H(o,(function(r){var o=yc.fromRangeStart(t.selection.getRng())
_C(e,t.getBody(),o).bind((function(e){return zC(t,n,e)}))}))}}(n,e,t,r.parents))})),t},$C=l(VC,!0),WC=l(VC,!1),KC=function(e,t){return function(n){return hC(t,n).exists((function(t){return FC(e,t),!0}))}},XC=function(e,t,n,r){var o=e.getBody(),i=l(hb,e)
e.undoManager.ignore((function(){e.selection.setRng(function(e,t){var n=document.createRange()
return n.setStart(e.container(),e.offset()),n.setEnd(t.container(),t.offset()),n}(n,r)),e.execCommand("Delete"),_C(i,o,yc.fromRangeStart(e.selection.getRng())).map(DC).map(KC(e,t))})),e.nodeChanged()},YC=function(e,t,n,r){var o=function(e,t){return Hs(t,e)||e}(e.getBody(),r.container()),i=l(hb,e),a=_C(i,o,r)
return a.bind((function(e){return n?e.fold(s(w.some(DC(e))),w.none,s(w.some(TC(e))),w.none):e.fold(w.none,s(w.some(TC(e))),w.none,s(w.some(DC(e))))})).map(KC(e,t)).getOrThunk((function(){var u=Cf(n,o,r),c=u.bind((function(e){return _C(i,o,e)}))
return Hu(a,c,(function(){return yb(i,o,r).exists((function(t){return!!function(e){return Hu(Ef(e),kf(e),(function(t,n){var r=bb(!0,t),o=bb(!1,n)
return Sf(e,r).forall((function(e){return e.isEqual(o)}))})).getOr(!0)}(t)&&(Hp(e,n,St.fromDom(t)),!0)}))})).orThunk((function(){return c.bind((function(o){return u.map((function(o){return n?XC(e,t,r,o):XC(e,t,o,r),!0}))}))})).getOr(!1)}))},GC=function(e,t,n){if(e.selection.isCollapsed()&&ss(e)){var r=yc.fromRangeStart(e.selection.getRng())
return YC(e,t,n,r)}return!1},JC=function(e){return 1===$t(e).length},QC=function(e,t,n,r){var o=l(rh,t),i=j(q(r,o),(function(e){return e.dom}))
if(0===i.length)Hp(t,e,n)
else{var a=function(e,t){var n=Gg(!1),r=eh(t,n.dom)
return nn(St.fromDom(e),n),sn(St.fromDom(e)),yc(r,0)}(n.dom,i)
t.selection.setRng(a.toRange())}},ZC=function(e,t){var n=St.fromDom(e.getBody()),r=St.fromDom(e.selection.getStart()),o=q(function(e,t){var n=Zm(t,e)
return X(n,eo).fold(s(n),(function(e){return n.slice(0,e)}))}(n,r),JC)
return te(o).exists((function(n){var r,i=yc.fromRangeStart(e.selection.getRng())
return!(!function(e,t,n){return Hu(Ef(n),kf(n),(function(r,o){var i=bb(!0,r),a=bb(!1,o),u=bb(!1,t)
return e?Sf(n,u).exists((function(e){return e.isEqual(a)&&t.isEqual(i)})):Nf(n,u).exists((function(e){return e.isEqual(i)&&t.isEqual(a)}))})).getOr(!0)}(t,i,n.dom)||(r=n,Af(r.dom)&&Xg(r.dom)))&&(QC(t,e,n,o),!0)}))},ew=function(e,t){return!!e.selection.isCollapsed()&&ZC(e,t)},tw=function(e,t,n){return e._selectionOverrides.hideFakeCaret(),Hp(e,t,St.fromDom(n)),!0},nw=function(e,t){return e.selection.isCollapsed()?function(e,t){var n=t?Hm:Vm,r=t?bc.Forwards:bc.Backwards,o=Qs(r,e.getBody(),e.selection.getRng())
return n(o)?tw(e,t,o.getNode(!t)):w.from(bb(t,o)).filter((function(e){return n(e)&&tf(o,e)})).exists((function(n){return tw(e,t,n.getNode(!t))}))}(e,t):function(e,t){var n=e.selection.getNode()
return!!zn(n)&&tw(e,t,n)}(e,t)},rw=function(e){var t=parseInt(e,10)
return isNaN(t)?0:t},ow=function(e,t){return(e||"table"===Tt(t)?"margin":"padding")+("rtl"===Yn(t,"direction")?"-right":"-left")},iw=function(e){var t=uw(e)
return!e.mode.isReadOnly()&&(t.length>1||function(e,t){return G(t,(function(t){var n=ow(rs(e),t),r=Jn(t,n).map(rw).getOr(0)
return"false"!==e.dom.getContentEditable(t.dom)&&r>0}))}(e,t))},aw=function(e){return oo(e)||io(e)},uw=function(e){return q(j(e.selection.getSelectedBlocks(),St.fromDom),(function(e){return!aw(e)&&!function(e){return zt(e).map(aw).getOr(!1)}(e)&&Ur(e,(function(e){return Mn(e.dom)||Fn(e.dom)})).exists((function(e){return Mn(e.dom)}))}))},cw=function(e,t){var n=e.dom,r=e.selection,o=e.formatter,i=function(e){return e.getParam("indentation","40px","string")}(e),a=/[a-z%]+$/i.exec(i)[0],u=parseInt(i,10),c=rs(e),s=$c(e)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||""!==s||n.getParent(r.getNode(),n.isBlock)||o.apply("div"),H(uw(e),(function(e){(function(e,t,n,r,o,i){var a=ow(n,St.fromDom(i))
if("outdent"===t){var u=Math.max(0,rw(i.style[a])-r)
e.setStyle(i,a,u?u+o:"")}else u=rw(i.style[a])+r+o,e.setStyle(i,a,u)})(n,t,c,u,a,e.dom)}))},sw=function(e,t){if(e.selection.isCollapsed()&&iw(e)){var n=e.dom,r=e.selection.getRng(),o=yc.fromRangeStart(r),i=n.getParent(r.startContainer,n.isBlock)
if(null!==i&&op(St.fromDom(i),o))return cw(e,"outdent"),!0}return!1},fw=function(e,t){e.getDoc().execCommand(t,!1,null)},lw=function(e,t){e.addCommand("delete",(function(){(function(e,t){sw(e)||iC(e,!1)||Gb(e,!1)||GC(e,t,!1)||Ib(e,!1)||gg(e)||aC(e,!1)||nw(e,!1)||zb(e)||ew(e,!1)||(fw(e,"Delete"),Sb(e))})(e,t)})),e.addCommand("forwardDelete",(function(){(function(e,t){iC(e,!0)||Gb(e,!0)||GC(e,t,!0)||Ib(e,!0)||gg(e)||aC(e,!0)||nw(e,!0)||zb(e)||ew(e,!0)||fw(e,"ForwardDelete")})(e,t)}))},dw=function(e){return void 0===e.touches||1!==e.touches.length?w.none():w.some(e.touches[0])},mw=function(e){var t=fu(w.none()),n=fu(!1),r=vu((function(t){e.fire("longpress",Ne(Ne({},t),{type:"longpress"})),n.set(!0)}),400)
e.on("touchstart",(function(e){dw(e).each((function(o){r.cancel()
var i={x:o.clientX,y:o.clientY,target:e.target}
r.throttle(e),n.set(!1),t.set(w.some(i))}))}),!0),e.on("touchmove",(function(o){r.cancel(),dw(o).each((function(r){t.get().each((function(o){(function(e,t){var n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y)
return n>5||r>5})(r,o)&&(t.set(w.none()),n.set(!1),e.fire("longpresscancel"))}))}))}),!0),e.on("touchend touchcancel",(function(o){r.cancel(),"touchcancel"!==o.type&&t.get().filter((function(e){return e.target.isEqualNode(o.target)})).each((function(){n.get()?o.preventDefault():e.fire("tap",Ne(Ne({},o),{type:"tap"}))}))}),!0)},pw=function(e,t){return e.hasOwnProperty(t.nodeName)},gw=function(e,t){return!!Dn(t)||!!Sn(t)&&(!pw(e,t)&&!Uf(t))},hw=function(e,t){if(Dn(t)){if(0===t.nodeValue.length)return!0
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||pw(e,t.nextSibling)))return!0}return!1},vw=function(e){var t,n,r,o=e.dom,i=e.selection,a=e.schema,u=a.getBlockElements(),c=i.getStart(),s=e.getBody(),f=$c(e)
if(c&&Sn(c)&&f){var l=s.nodeName.toLowerCase()
if(a.isValidChild(l,f.toLowerCase())&&!function(e,t,n){return z(Qm(St.fromDom(n),St.fromDom(t)),(function(t){return pw(e,t.dom)}))}(u,s,c)){var d=i.getRng(),m=d.startContainer,p=d.startOffset,g=d.endContainer,h=d.endOffset,v=im(e)
for(c=s.firstChild;c;)if(gw(u,c)){if(hw(u,c)){n=c,c=c.nextSibling,o.remove(n)
continue}t||(t=o.create(f,Wc(e)),c.parentNode.insertBefore(t,c),r=!0),n=c,c=c.nextSibling,t.appendChild(n)}else t=null,c=c.nextSibling
r&&v&&(d.setStart(m,p),d.setEnd(g,h),i.setRng(d),e.nodeChanged())}}},yw=function(e,t){t.hasAttribute("data-mce-caret")&&(Eo(t),function(e){e.selection.setRng(e.selection.getRng())}(e),e.selection.scrollIntoView(t))},bw=function(e,t){var n=function(e){return Hr(St.fromDom(e.getBody()),"*[data-mce-caret]").fold(s(null),(function(e){return e.dom}))}(e)
if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void yw(e,n)):void(bo(n)&&(yw(e,n),e.undoManager.add()))};(function(e){e[e.Br=0]="Br",e[e.Block=1]="Block",e[e.Wrap=2]="Wrap",e[e.Eol=3]="Eol"})(Fy||(Fy={}))
var Cw,ww=function(e,t){return e===bc.Backwards?J(t):t},xw=function(e,t,n){return e===bc.Forwards?t.next(n):t.prev(n)},Sw=function(e,t,n,r){return Ln(r.getNode(t===bc.Forwards))?Fy.Br:!1===Vs(n,r)?Fy.Block:Fy.Wrap},Nw=function(e,t,n,r){for(var o,i=pf(n),a=r,u=[];a&&(o=xw(t,i,a));){if(Ln(o.getNode(!1)))return t===bc.Forwards?{positions:ww(t,u).concat([o]),breakType:Fy.Br,breakAt:w.some(o)}:{positions:ww(t,u),breakType:Fy.Br,breakAt:w.some(o)}
if(o.isVisible()){if(e(a,o)){var c=Sw(0,t,a,o)
return{positions:ww(t,u),breakType:c,breakAt:w.some(o)}}u.push(o),a=o}else a=o}return{positions:ww(t,u),breakType:Fy.Eol,breakAt:w.none()}},Ew=function(e,t,n,r){return t(n,r).breakAt.map((function(r){var o=t(n,r).positions
return e===bc.Backwards?o.concat(r):[r].concat(o)})).getOr([])},kw=function(e,t){return W(e,(function(e,n){return e.fold((function(){return w.some(n)}),(function(r){return Hu(ee(r.getClientRects()),ee(n.getClientRects()),(function(e,o){var i=Math.abs(t-e.left)
return Math.abs(t-o.left)<=i?n:r})).or(e)}))}),w.none())},_w=function(e,t){return ee(t.getClientRects()).bind((function(t){return kw(e,t.left)}))},Aw=l(Nw,yc.isAbove,-1),Rw=l(Nw,yc.isBelow,1),Tw=l(Ew,-1,Aw),Dw=l(Ew,1,Rw),Ow=function(e){var t=function(t){return j(t,(function(t){return(t=qu(t)).node=e,t}))}
if(Sn(e))return t(e.getClientRects())
if(Dn(e)){var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}},Bw=function(e){return Y(e,Ow)};(function(e){e[e.Up=-1]="Up",e[e.Down=1]="Down"})(Cw||(Cw={}))
var Pw,Lw,Iw=function(e,t,n,r,o,i){var a=0,u=[],c=function(r){var i,c,f
for(f=Bw([r]),-1===e&&(f=f.reverse()),i=0;i<f.length;i++)if(c=f[i],!n(c,s)){if(u.length>0&&t(c,Se(u))&&a++,c.line=a,o(c))return!0
u.push(c)}},s=Se(i.getClientRects())
if(!s)return u
var f=i.getNode()
return c(f),function(e,t,n,r){for(;r=js(r,e,Io,t);)if(n(r))return}(e,r,c,f),u},Mw=l(Iw,Cw.Up,Ku,Xu),Fw=l(Iw,Cw.Down,Xu,Ku),Uw=function(e){return function(t){return function(e,t){return t.line>e}(e,t)}},zw=function(e){return function(t){return function(e,t){return t.line===e}(e,t)}},jw=Fn,Hw=js,Vw=function(e,t){return Math.abs(e.left-t)},qw=function(e,t){return Math.abs(e.right-t)},$w=function(e,t){return e>=t.left&&e<=t.right},Ww=function(e,t){return e>=t.top&&e<=t.bottom},Kw=function(e,t){return we(e,(function(e,n){var r=Math.min(Vw(e,t),qw(e,t)),o=Math.min(Vw(n,t),qw(n,t))
return $w(t,n)?n:$w(t,e)?e:o===r&&jw(n.node)||o<r?n:e}))},Xw=function(e,t,n,r,o){var i=Hw(r,e,Io,t,!o)
do{if(!i||n(i))return}while(i=Hw(i,e,Io,t))},Yw=function(e,t,n){var r=Bw(function(e){return q(ne(e.getElementsByTagName("*")),Ts)}(e)),o=q(r,l(Ww,n)),i=Kw(o,t)
if(i){var a=!An(i.node)&&!zn(i.node)
if((i=Kw(function(e,t,n){void 0===n&&(n=!0)
var r=[],o=function(e,n){var o=q(Bw([n]),(function(n){return!e(n,t)}))
return r=r.concat(o),0===o.length}
return r.push(t),Xw(Cw.Up,e,l(o,Ku),t.node,n),Xw(Cw.Down,e,l(o,Xu),t.node,n),r}(e,i,a),t))&&Ts(i.node))return function(e,t){return{node:e.node,before:Vw(e,t)<qw(e,t)}}(i,t)}return null},Gw=function(e,t){e.selection.setRng(t),Rd(e,e.selection.getRng())},Jw=function(e,t,n){return w.some(Wb(e,t,n))},Qw=function(e,t,n,r,o,i){var a=t===bc.Forwards,u=pf(e.getBody()),c=l(ef,a?u.next:u.prev),s=a?r:o
if(!n.collapsed){var f=Gu(n)
if(i(f))return Vb(t,e,f,t===bc.Backwards,!1)}var d=Qs(t,e.getBody(),n)
if(s(d))return qb(e,d.getNode(!a))
var m=bb(a,c(d)),p=function(e){return ho(e.startContainer)}(n)
if(!m)return p?w.some(n):w.none()
if(s(m))return Vb(t,e,m.getNode(!a),a,!1)
var g=c(m)
return g&&s(g)&&tf(m,g)?Vb(t,e,g.getNode(!a),a,!1):p?Jw(e,m.toRange(),!1):w.none()},Zw=function(e,t,n,r,o,i){var a=Qs(t,e.getBody(),n),u=Se(a.getClientRects()),c=t===Cw.Down
if(!u)return w.none()
var s,f=(c?Fw:Mw)(e.getBody(),Uw(1),a),l=q(f,zw(1)),d=u.left,m=Kw(l,d)
if(m&&i(m.node)){var p=Math.abs(d-m.left),g=Math.abs(d-m.right)
return Vb(t,e,m.node,p<g,!1)}if(s=r(a)?a.getNode():o(a)?a.getNode(!0):Gu(n)){var h=function(e,t,n,r){var o,i,a,u,c,s=pf(t),f=[],l=0,d=function(e){return Se(e.getClientRects())}
1===e?(o=s.next,i=Xu,a=Ku,u=yc.after(r)):(o=s.prev,i=Ku,a=Xu,u=yc.before(r))
var m=d(u)
do{if(u.isVisible()&&!a(c=d(u),m)){if(f.length>0&&i(c,Se(f))&&l++,(c=qu(c)).position=u,c.line=l,n(c))return f
f.push(c)}}while(u=o(u))
return f}(t,e.getBody(),Uw(1),s),v=Kw(q(h,zw(1)),d)
if(v)return Jw(e,v.position.toRange(),!1)
if(v=Se(q(h,zw(0))))return Jw(e,v.position.toRange(),!1)}return 0===l.length?ex(e,c).filter(c?o:r).map((function(t){return Wb(e,t.toRange(),!1)})):w.none()},ex=function(e,t){var n=e.selection.getRng(),r=e.getBody()
if(t){var o=yc.fromRangeEnd(n),i=Rw(r,o)
return te(i.positions)}o=yc.fromRangeStart(n),i=Aw(r,o)
return ee(i.positions)},tx=function(e,t,n){return ex(e,t).filter(n).exists((function(t){return e.selection.setRng(t.toRange()),!0}))},nx=Fn,rx=function(e,t,n){var r=pf(e.getBody()),o=l(ef,1===t?r.next:r.prev)
if(n.collapsed&&function(e){return""!==$c(e)}(e)){var i=e.dom.getParent(n.startContainer,"PRE")
if(!i)return
if(!o(yc.fromRangeStart(n))){var a=function(e){var t=e.dom.create($c(e))
return(!ht.ie||ht.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">'),t}(e)
1===t?e.$(i).after(a):e.$(i).before(a),e.selection.select(a,!0),e.selection.collapse()}}},ox=function(e,t){var n=t?bc.Forwards:bc.Backwards,r=e.selection.getRng()
return function(e,t,n){return Qw(t,e,n,Wm,Km,nx)}(n,e,r).orThunk((function(){return rx(e,n,r),w.none()}))},ix=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return function(e,t,n){return Zw(t,e,n,(function(e){return Wm(e)||qm(e)}),(function(e){return Km(e)||$m(e)}),nx)}(n,e,r).orThunk((function(){return rx(e,n,r),w.none()}))},ax=function(e,t){return ox(e,t).exists((function(t){return Gw(e,t),!0}))},ux=function(e,t){return ix(e,t).exists((function(t){return Gw(e,t),!0}))},cx=function(e,t){return tx(e,t,t?Km:Wm)},sx=function(e){return U(["figcaption"],Tt(e))},fx=function(e){var t=document.createRange()
return t.setStartBefore(e.dom),t.setEndBefore(e.dom),t},lx=function(e,t,n){n?an(e,t):on(e,t)},dx=function(e,t,n,r){return""===t?function(e,t){var n=St.fromTag("br")
return lx(e,n,t),fx(n)}(e,r):function(e,t,n,r){var o=St.fromTag(n),i=St.fromTag("br")
return qn(o,r),an(o,i),lx(e,o,t),fx(i)}(e,r,t,n)},mx=function(e,t,n){return t?function(e,t){return Rw(e,t).breakAt.isNone()}(e.dom,n):function(e,t){return Aw(e,t).breakAt.isNone()}(e.dom,n)},px=function(e,t){var n=St.fromDom(e.getBody()),r=yc.fromRangeStart(e.selection.getRng()),o=$c(e),i=Wc(e)
return function(e,t){var n=l(_t,t)
return Ur(St.fromDom(e.container()),eo,n).filter(sx)}(r,n).exists((function(){if(mx(n,t,r)){var a=dx(n,o,i,t)
return e.selection.setRng(a),!0}return!1}))},gx=function(e,t){return!!e.selection.isCollapsed()&&px(e,t)},hx=function(e,t){return Y(function(e){return j(e,(function(e){return Ne({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:u},e)}))}(e),(function(e){return function(e,t){return t.keyCode===e.keyCode&&t.shiftKey===e.shiftKey&&t.altKey===e.altKey&&t.ctrlKey===e.ctrlKey&&t.metaKey===e.metaKey}(e,t)?[e]:[]}))},vx=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){return e.apply(null,t)}},yx=function(e,t){return K(hx(e,t),(function(e){return e.action()}))},bx=function(e,t){var n=t?bc.Forwards:bc.Backwards,r=e.selection.getRng()
return Qw(e,n,r,Hm,Vm,zn).exists((function(t){return Gw(e,t),!0}))},Cx=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return Zw(e,n,r,Hm,Vm,zn).exists((function(t){return Gw(e,t),!0}))},wx=function(e,t){return tx(e,t,t?Vm:Hm)},xx=function(e,t,n,r,o){var i=ku(St.fromDom(n),"td,th,caption").map((function(e){return e.dom}))
return function(e,t,n){return W(e,(function(e,r){return e.fold((function(){return w.some(r)}),(function(e){var o=Math.sqrt(Math.abs(e.x-t)+Math.abs(e.y-n)),i=Math.sqrt(Math.abs(r.x-t)+Math.abs(r.y-n))
return w.some(i<o?r:e)}))}),w.none())}(q(function(e,t){return Y(t,(function(t){var n=function(e,t){return{left:e.left-t,top:e.top-t,right:e.right+2*t,bottom:e.bottom+2*t,width:e.width+t,height:e.height+t}}(qu(t.getBoundingClientRect()),-1)
return[{x:n.left,y:e(n),cell:t},{x:n.right,y:e(n),cell:t}]}))}(e,i),(function(e){return t(e,o)})),r,o).map((function(e){return e.cell}))},Sx=l(xx,(function(e){return e.bottom}),(function(e,t){return e.y<t})),Nx=l(xx,(function(e){return e.top}),(function(e,t){return e.y>t})),Ex=function(e,t){return ee(t.getClientRects()).bind((function(t){return Sx(e,t.left,t.top)})).bind((function(e){return _w(kf(n=e).map((function(e){return Aw(n,e).positions.concat(e)})).getOr([]),t)
var n}))},kx=function(e,t){return te(t.getClientRects()).bind((function(t){return Nx(e,t.left,t.top)})).bind((function(e){return _w(Ef(n=e).map((function(e){return[e].concat(Rw(n,e).positions)})).getOr([]),t)
var n}))},_x=function(e,t,n){var r=e(t,n)
return function(e){return e.breakType===Fy.Wrap&&0===e.positions.length}(r)||!Ln(n.getNode())&&function(e){return e.breakType===Fy.Br&&1===e.positions.length}(r)?!function(e,t,n){return n.breakAt.exists((function(n){return e(t,n).breakAt.isSome()}))}(e,t,r):r.breakAt.isNone()},Ax=l(_x,Aw),Rx=l(_x,Rw),Tx=function(e,t,n,r){var o=e.selection.getRng(),i=t?1:-1
return!(!As()||!function(e,t,n){var r=yc.fromRangeStart(t)
return xf(!e,n).exists((function(e){return e.isEqual(r)}))}(t,o,n))&&(Vb(i,e,n,!t,!1).each((function(t){Gw(e,t)})),!0)},Dx=function(e,t){var n=t.getNode(e)
return Sn(n)&&"TABLE"===n.nodeName?w.some(n):w.none()},Ox=function(e,t,n){var r=Dx(!!t,n),o=!1===t
r.fold((function(){return Gw(e,n.toRange())}),(function(r){return xf(o,e.getBody()).filter((function(e){return e.isEqual(n)})).fold((function(){return Gw(e,n.toRange())}),(function(o){return function(e,t,n,r){var o=$c(t)
o?t.undoManager.transact((function(){var r=St.fromTag(o)
qn(r,Wc(t)),an(r,St.fromTag("br")),e?rn(St.fromDom(n),r):nn(St.fromDom(n),r)
var i=t.dom.createRng()
i.setStart(r.dom,0),i.setEnd(r.dom,0),Gw(t,i)})):Gw(t,r.toRange())}(t,e,r,n)}))}))},Bx=function(e,t,n,r){var o=e.selection.getRng(),i=yc.fromRangeStart(o),a=e.getBody()
if(!t&&Ax(r,i)){var u=function(e,t,n){return Ex(t,n).orThunk((function(){return ee(n.getClientRects()).bind((function(n){return kw(Tw(e,yc.before(t)),n.left)}))})).getOr(yc.before(t))}(a,n,i)
return Ox(e,t,u),!0}if(t&&Rx(r,i)){u=function(e,t,n){return kx(t,n).orThunk((function(){return ee(n.getClientRects()).bind((function(n){return kw(Dw(e,yc.after(t)),n.left)}))})).getOr(yc.after(t))}(a,n,i)
return Ox(e,t,u),!0}return!1},Px=function(e,t,n){return w.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((function(r){return w.from(e.dom.getParent(r,"table")).map((function(o){return n(e,t,o,r)}))})).getOr(!1)},Lx=function(e,t){return Px(e,t,Tx)},Ix=function(e,t){return Px(e,t,Bx)},Mx=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){var r=ut().os
yx([{keyCode:ql.RIGHT,action:vx(ax,e,!0)},{keyCode:ql.LEFT,action:vx(ax,e,!1)},{keyCode:ql.UP,action:vx(ux,e,!1)},{keyCode:ql.DOWN,action:vx(ux,e,!0)},{keyCode:ql.RIGHT,action:vx(Lx,e,!0)},{keyCode:ql.LEFT,action:vx(Lx,e,!1)},{keyCode:ql.UP,action:vx(Ix,e,!1)},{keyCode:ql.DOWN,action:vx(Ix,e,!0)},{keyCode:ql.RIGHT,action:vx(bx,e,!0)},{keyCode:ql.LEFT,action:vx(bx,e,!1)},{keyCode:ql.UP,action:vx(Cx,e,!1)},{keyCode:ql.DOWN,action:vx(Cx,e,!0)},{keyCode:ql.RIGHT,action:vx(HC,e,t,!0)},{keyCode:ql.LEFT,action:vx(HC,e,t,!1)},{keyCode:ql.RIGHT,ctrlKey:!r.isOSX(),altKey:r.isOSX(),action:vx($C,e,t)},{keyCode:ql.LEFT,ctrlKey:!r.isOSX(),altKey:r.isOSX(),action:vx(WC,e,t)},{keyCode:ql.UP,action:vx(gx,e,!1)},{keyCode:ql.DOWN,action:vx(gx,e,!0)}],n).each((function(e){n.preventDefault()}))}(e,t,n)}))},Fx=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){yx([{keyCode:ql.BACKSPACE,action:vx(sw,e,!1)},{keyCode:ql.BACKSPACE,action:vx(iC,e,!1)},{keyCode:ql.DELETE,action:vx(iC,e,!0)},{keyCode:ql.BACKSPACE,action:vx(Gb,e,!1)},{keyCode:ql.DELETE,action:vx(Gb,e,!0)},{keyCode:ql.BACKSPACE,action:vx(GC,e,t,!1)},{keyCode:ql.DELETE,action:vx(GC,e,t,!0)},{keyCode:ql.BACKSPACE,action:vx(gg,e,!1)},{keyCode:ql.DELETE,action:vx(gg,e,!0)},{keyCode:ql.BACKSPACE,action:vx(aC,e,!1)},{keyCode:ql.DELETE,action:vx(aC,e,!0)},{keyCode:ql.BACKSPACE,action:vx(nw,e,!1)},{keyCode:ql.DELETE,action:vx(nw,e,!0)},{keyCode:ql.BACKSPACE,action:vx(zb,e,!1)},{keyCode:ql.DELETE,action:vx(zb,e,!0)},{keyCode:ql.BACKSPACE,action:vx(Ib,e,!1)},{keyCode:ql.DELETE,action:vx(Ib,e,!0)},{keyCode:ql.BACKSPACE,action:vx(ew,e,!1)},{keyCode:ql.DELETE,action:vx(ew,e,!0)}],n).each((function(e){n.preventDefault()}))}(e,t,n)})),e.on("keyup",(function(t){!1===t.isDefaultPrevented()&&function(e,t){yx([{keyCode:ql.BACKSPACE,action:vx(oC,e)},{keyCode:ql.DELETE,action:vx(oC,e)}],t)}(e,t)}))},Ux=function(e,t){var n,r=t,o=e.dom,i=e.schema.getMoveCaretBeforeOnEnterElements()
if(t){if(/^(LI|DT|DD)$/.test(t.nodeName)){var a=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}(t.firstChild)
a&&/^(UL|OL|DL)$/.test(a.nodeName)&&t.insertBefore(o.doc.createTextNode(so),t.firstChild)}var u=o.createRng()
if(t.normalize(),t.hasChildNodes()){for(var c=new Jr(t,t);n=c.current();){if(Dn(n)){u.setStart(n,0),u.setEnd(n,0)
break}if(i[n.nodeName.toLowerCase()]){u.setStartBefore(n),u.setEndBefore(n)
break}r=n,n=c.next()}n||(u.setStart(r,0),u.setEnd(r,0))}else Ln(t)?t.nextSibling&&o.isBlock(t.nextSibling)?(u.setStartBefore(t),u.setEndBefore(t)):(u.setStartAfter(t),u.setEndAfter(t)):(u.setStart(t,0),u.setEnd(t,0))
e.selection.setRng(u),Rd(e,u)}},zx=function(e){return w.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},jx=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},Hx=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},Vx=function(e){var t=e.parentNode
return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},qx=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!Sn(r);)r=r[n?"nextSibling":"previousSibling"]
return r===t},$x=function(e,t,n,r,o){var i=e.dom,a=e.selection.getRng()
if(n!==e.getBody()){var u
Hx(u=n)&&Hx(u.parentNode)&&(o="LI")
var c=o?t(o):i.create("BR")
if(qx(n,r,!0)&&qx(n,r,!1))if(jx(n,"LI")){var s=Vx(n)
i.insertAfter(c,s),!function(e){var t
return(null===(t=e.parentNode)||void 0===t?void 0:t.firstChild)===e}(n)?i.remove(n):i.remove(s)}else i.replace(c,n)
else if(qx(n,r,!0))jx(n,"LI")?(i.insertAfter(c,Vx(n)),c.appendChild(i.doc.createTextNode(" ")),c.appendChild(n)):n.parentNode.insertBefore(c,n),i.remove(r)
else if(qx(n,r,!1))i.insertAfter(c,Vx(n)),i.remove(r)
else{n=Vx(n)
var f=a.cloneRange()
f.setStartAfter(r),f.setEndAfter(n)
var l=f.extractContents()
"LI"===o&&function(e,t){return e.firstChild&&e.firstChild.nodeName===t}(l,"LI")?(c=l.firstChild,i.insertAfter(l,n)):(i.insertAfter(l,n),i.insertAfter(c,n)),i.remove(r)}Ux(e,c)}},Wx=function(e,t){return t&&"A"===t.nodeName&&e.isEmpty(t)},Kx=function(e){e.innerHTML='<br data-mce-bogus="1">'},Xx=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},Yx=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},Gx=function(e,t,n){return!1===Dn(t)?n:e?1===n&&t.data.charAt(n-1)===fo?0:n:n===t.data.length-1&&t.data.charAt(n)===fo?t.data.length:n},Jx=function(e,t){var n,r,o=e.getRoot()
for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode
return n!==o?r:o},Qx=function(e,t){var n=$c(e)
n&&n.toLowerCase()===t.tagName.toLowerCase()&&function(e,t,n){var r=e.dom
w.from(n.style).map(r.parseStyle).each((function(e){var n=Qn(St.fromDom(t)),o=Ne(Ne({},n),e)
r.setStyles(t,o)}))
var o=w.from(n.class).map((function(e){return e.split(/\s+/)})),i=w.from(t.className).map((function(e){return q(e.split(/\s+/),(function(e){return""!==e}))}))
Hu(o,i,(function(e,n){var o=q(n,(function(t){return!U(e,t)})),i=Ee(e,o)
r.setAttrib(t,"class",i.join(" "))}))
var a=["style","class"],u=le(n,(function(e,t){return!U(a,t)}))
r.setAttribs(t,u)}(e,t,Wc(e))},Zx=function(e,t){var n,r,o,i,a,u,c,s,f,l,d=e.dom,m=e.schema,p=m.getNonEmptyElements(),g=e.selection.getRng(),h=function(t){var n,o,a,u=r,c=m.getTextInlineElements()
if(a=n=t||"TABLE"===s||"HR"===s?d.create(t||f):i.cloneNode(!1),!1===function(e){return e.getParam("keep_styles",!0)}(e))d.setAttrib(n,"style",null),d.setAttrib(n,"class",null)
else do{if(c[u.nodeName]){if(Af(u)||Uf(u))continue
o=u.cloneNode(!1),d.setAttrib(o,"id",""),n.hasChildNodes()?(o.appendChild(n.firstChild),n.appendChild(o)):(a=o,n.appendChild(o))}}while((u=u.parentNode)&&u!==w)
return Qx(e,n),Kx(a),n},v=function(e){var t,n,a=Gx(e,r,o)
if(Dn(r)&&(e?a>0:a<r.nodeValue.length))return!1
if(r.parentNode===i&&l&&!e)return!0
if(e&&Sn(r)&&r===i.firstChild)return!0
if(Xx(r,"TABLE")||Xx(r,"HR"))return l&&!e||!l&&e
var u=new Jr(r,i)
for(Dn(r)&&(e&&0===a?u.prev():e||a!==r.nodeValue.length||u.next());t=u.current();){if(Sn(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),p[n]&&"br"!==n))return!1}else if(Dn(t)&&!Fo(t.nodeValue))return!1
e?u.prev():u.next()}return!0},y=function(){a=/^(H[1-6]|PRE|FIGURE)$/.test(s)&&"HGROUP"!==x?h(f):h(),function(e){return e.getParam("end_container_on_empty_block",!1)}(e)&&Yx(d,c)&&d.isEmpty(i)?a=d.split(c,i):d.insertAfter(a,i),Ux(e,a)}
od(d,g).each((function(e){g.setStart(e.startContainer,e.startOffset),g.setEnd(e.endContainer,e.endOffset)})),r=g.startContainer,o=g.startOffset,f=$c(e)
var b=!(!t||!t.shiftKey),C=!(!t||!t.ctrlKey)
Sn(r)&&r.hasChildNodes()&&(l=o>r.childNodes.length-1,r=r.childNodes[Math.min(o,r.childNodes.length-1)]||r,o=l&&Dn(r)?r.nodeValue.length:0)
var w=Jx(d,r)
if(w){(f&&!b||!f&&b)&&(r=function(e,t,n,r,o){var i,a,u,c,s,f,l=t||"P",d=e.dom,m=Jx(d,r)
if(!(a=d.getParent(r,d.isBlock))||!Yx(d,a)){if(f=(a=a||m)===e.getBody()||function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}(a)?a.nodeName.toLowerCase():a.parentNode.nodeName.toLowerCase(),!a.hasChildNodes())return i=d.create(l),Qx(e,i),a.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i
for(c=r;c.parentNode!==a;)c=c.parentNode
for(;c&&!d.isBlock(c);)u=c,c=c.previousSibling
if(u&&e.schema.isValidChild(f,l.toLowerCase())){for(i=d.create(l),Qx(e,i),u.parentNode.insertBefore(i,u),c=u;c&&!d.isBlock(c);)s=c.nextSibling,i.appendChild(c),c=s
n.setStart(r,o),n.setEnd(r,o)}}return r}(e,f,g,r,o)),i=d.getParent(r,d.isBlock),c=i?d.getParent(i.parentNode,d.isBlock):null,s=i?i.nodeName.toUpperCase():""
var x=c?c.nodeName.toUpperCase():""
"LI"!==x||C||(i=c,c=c.parentNode,s=x),/^(LI|DT|DD)$/.test(s)&&d.isEmpty(i)?$x(e,h,c,i,f):f&&i===e.getBody()||(f=f||"P",ho(i)?(a=Eo(i),d.isEmpty(i)&&Kx(i),Qx(e,a),Ux(e,a)):v()?y():v(!0)?(a=i.parentNode.insertBefore(h(),i),Ux(e,Xx(i,"HR")?a:i)):((n=function(e){var t=e.cloneRange()
return t.setStart(e.startContainer,Gx(!0,e.startContainer,e.startOffset)),t.setEnd(e.endContainer,Gx(!1,e.endContainer,e.endOffset)),t}(g).cloneRange()).setEndAfter(i),function(e){H(Eu(St.fromDom(e),Pt),(function(e){var t=e.dom
t.nodeValue=mo(t.nodeValue)}))}(u=n.extractContents()),function(e){do{Dn(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild}while(e)}(u),a=u.firstChild,d.insertAfter(u,i),function(e,t,n){var r,o=n,i=[]
if(o){for(;o=o.firstChild;){if(e.isBlock(o))return
Sn(o)&&!t[o.nodeName.toLowerCase()]&&i.push(o)}for(r=i.length;r--;)(!(o=i[r]).hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue||Wx(e,o))&&e.remove(o)}}(d,p,a),function(e,t){t.normalize()
var n=t.lastChild
n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")}(d,i),d.isEmpty(i)&&Kx(i),a.normalize(),d.isEmpty(a)?(d.remove(a),y()):(Qx(e,a),Ux(e,a))),d.setAttrib(a,"id",""),e.fire("NewBlock",{newBlock:a}))}},eS=function(e,t,n){var r=e.dom.createRng()
n?(r.setStartBefore(t),r.setEndBefore(t)):(r.setStartAfter(t),r.setEndAfter(t)),e.selection.setRng(r),Rd(e,r)},tS=function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng()
od(i,a).each((function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)}))
var u=a.startOffset,c=a.startContainer
if(1===c.nodeType&&c.hasChildNodes()){var s=u>c.childNodes.length-1
c=c.childNodes[Math.min(u,c.childNodes.length-1)]||c,u=s&&3===c.nodeType?c.nodeValue.length:0}var f=i.getParent(c,i.isBlock),l=f?i.getParent(f.parentNode,i.isBlock):null,d=l?l.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey)
"LI"!==d||m||(f=l),c&&3===c.nodeType&&u>=c.nodeValue.length&&(function(e,t,n){for(var r,o=new Jr(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||r.length>0)return!0}(e.schema,c,f)||(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0)),n=i.create("br"),wc(i,a,n),eS(e,n,r),e.undoManager.add()},nS=function(e,t){var n=St.fromTag("br")
nn(St.fromDom(t),n),e.undoManager.add()},rS=function(e,t){oS(e.getBody(),t)||rn(St.fromDom(t),St.fromTag("br"))
var n=St.fromTag("br")
rn(St.fromDom(t),n),eS(e,n.dom,!1),e.undoManager.add()},oS=function(e,t){return n=yc.after(t),!!Ln(n.getNode())||Sf(e,yc.after(t)).map((function(e){return Ln(e.getNode())})).getOr(!1)
var n},iS=function(e){return e&&"A"===e.nodeName&&"href"in e},aS=function(e){return e.fold(h,iS,iS,h)},uS=function(e,t){t.fold(u,l(nS,e),l(rS,e),u)},cS=function(e,t){var n=function(e){var t=l(hb,e),n=yc.fromRangeStart(e.selection.getRng())
return _C(t,e.getBody(),n).filter(aS)}(e)
n.isSome()?n.each(l(uS,e)):tS(e,t)},sS=function(e,t){return zx(e).filter((function(e){return t.length>0&&Et(St.fromDom(e),t)})).isSome()},fS=gr([{br:[]},{block:[]},{none:[]}]),lS=function(e,t){return function(e){return sS(e,function(e){return e.getParam("no_newline_selector","")}(e))}(e)},dS=function(e){return function(t,n){return""===$c(t)===e}},mS=function(e){return function(t,n){return function(e){return zx(e).filter((function(e){return io(St.fromDom(e))})).isSome()}(t)===e}},pS=function(e,t){return function(n,r){return function(e){return zx(e).fold(s(""),(function(e){return e.nodeName.toUpperCase()}))}(n)===e.toUpperCase()===t}},gS=function(e){return pS("pre",e)},hS=function(e){return function(t,n){return function(e){return e.getParam("br_in_pre",!0)}(t)===e}},vS=function(e,t){return function(e){return sS(e,function(e){return e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption")}(e))}(e)},yS=function(e,t){return t},bS=function(e){var t=$c(e),n=function(e,t){var n,r,o=e.getRoot()
for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode
return n!==o?r:o}(e.dom,e.selection.getStart())
return n&&e.schema.isValidChild(n.nodeName,t||"P")},CS=function(e,t){return function(n,r){return W(e,(function(e,t){return e&&t(n,r)}),!0)?w.some(t):w.none()}},wS=function(e,t){(function(e,t){return vC([CS([lS],fS.none()),CS([pS("summary",!0)],fS.br()),CS([gS(!0),hS(!1),yS],fS.br()),CS([gS(!0),hS(!1)],fS.block()),CS([gS(!0),hS(!0),yS],fS.block()),CS([gS(!0),hS(!0)],fS.br()),CS([mS(!0),yS],fS.br()),CS([mS(!0)],fS.block()),CS([dS(!0),yS,bS],fS.block()),CS([dS(!0)],fS.br()),CS([vS],fS.br()),CS([dS(!1),yS],fS.br()),CS([bS],fS.block())],[e,!(!t||!t.shiftKey)]).getOr(fS.none())})(e,t).fold((function(){cS(e,t)}),(function(){Zx(e,t)}),u)},xS=function(e){e.on("keydown",(function(t){t.keyCode===ql.ENTER&&function(e,t){var n
t.isDefaultPrevented()||(t.preventDefault(),(n=e.undoManager).typing&&(n.typing=!1,n.add()),e.undoManager.transact((function(){!1===e.selection.isCollapsed()&&e.execCommand("Delete"),wS(e,t)})))}(e,t)}))},SS=function(e){e.on("keydown",(function(t){!1===t.isDefaultPrevented()&&function(e,t){yx([{keyCode:ql.END,action:vx(cx,e,!0)},{keyCode:ql.HOME,action:vx(cx,e,!1)},{keyCode:ql.END,action:vx(wx,e,!0)},{keyCode:ql.HOME,action:vx(wx,e,!1)}],t).each((function(e){t.preventDefault()}))}(e,t)}))},NS=ut().browser,ES=function(e){(function(e){var t=hu((function(){e.composing||_p(e)}),0)
NS.isIE()&&(e.on("keypress",(function(e){t.throttle()})),e.on("remove",(function(e){t.cancel()})))})(e),e.on("input",(function(t){!1===t.isComposing&&_p(e)}))},kS=function(e,t){var n=t.container(),r=t.offset()
return Dn(n)?(n.insertData(r,e),w.some(yc(n,r+e.length))):Zs(t).map((function(n){var r=St.fromText(e)
return t.isAtEnd()?rn(n,r):nn(n,r),yc(r.dom,e.length)}))},_S=l(kS,so),AS=l(kS," "),RS=function(e,t){return function(n){return function(e,t){return!yp(t)&&(bp(e,t)||hp(e,t)||vp(e,t))}(e,n)?_S(t):AS(t)}},TS=function(e){var t=yc.fromRangeStart(e.selection.getRng()),n=St.fromDom(e.getBody())
if(e.selection.isCollapsed()){var r=l(hb,e),o=yc.fromRangeStart(e.selection.getRng())
return _C(r,e.getBody(),o).bind(function(e){return function(t){return t.fold((function(t){return Nf(e.dom,yc.before(t))}),(function(e){return Ef(e)}),(function(e){return kf(e)}),(function(t){return Sf(e.dom,yc.after(t))}))}}(n)).bind(RS(n,t)).exists(function(e){return function(t){return e.selection.setRng(t.toRange()),e.nodeChanged(),!0}}(e))}return!1},DS=function(e){e.on("keydown",(function(t){!1===t.isDefaultPrevented()&&function(e,t){yx([{keyCode:ql.SPACEBAR,action:vx(TS,e)}],t).each((function(e){t.preventDefault()}))}(e,t)}))},OS=function(e){var t=qC(e)
return function(e){e.on("keyup compositionstart",l(bw,e))}(e),Mx(e,t),Fx(e,t),xS(e),DS(e),ES(e),SS(e),t},BS=function(){function e(e){var t
this.lastPath=[],this.editor=e
var n=this
"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(function(n){var r=e.selection.getRng(),o={startContainer:r.startContainer,startOffset:r.startOffset,endContainer:r.endContainer,endOffset:r.endOffset}
"nodechange"!==n.type&&Yl(o,t)||e.fire("SelectionChange"),t=o})),e.on("contextmenu",(function(){e.fire("SelectionChange")})),e.on("SelectionChange",(function(){var t=e.selection.getStart(!0)
!t||!ht.range&&e.selection.isCollapsed()||Tl(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(function(t){!t.isDefaultPrevented()&&Tl(e)&&("IMG"===e.selection.getNode().nodeName?Xr.setEditorTimeout(e,(function(){e.nodeChanged()})):e.nodeChanged())}))}return e.prototype.nodeChanged=function(e){var t,n,r,o=this.editor.selection
this.editor.initialized&&o&&!this.editor.getParam("disable_nodechange")&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),(t=o.getStart(!0)||r).ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(t,r)||(t=r),n=[],this.editor.dom.getParent(t,(function(e){if(e===r)return!0
n.push(e)})),(e=e||{}).element=t,e.parents=n,this.editor.fire("NodeChange",e))},e.prototype.isSameElementPath=function(e){var t,n=this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)
if(n.length===this.lastPath.length){for(t=n.length;t>=0&&n[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=n,!0}return this.lastPath=n,!1},e}(),PS=function(e){(function(e){e.on("click",(function(t){e.dom.getParent(t.target,"details")&&t.preventDefault()}))})(e),function(e){e.parser.addNodeFilter("details",(function(e){H(e,(function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),e.serializer.addNodeFilter("details",(function(e){H(e,(function(e){var t=e.attr("data-mce-open")
e.attr("open",E(t)?t:null),e.attr("data-mce-open",null)}))}))}(e)},LS=function(e){return Sn(e)&&ro(St.fromDom(e))},IS=function(e){e.on("click",(function(t){t.detail>=3&&function(e){var t=e.selection.getRng(),n=yc.fromRangeStart(t),r=yc.fromRangeEnd(t)
if(yc.isElementPosition(n)){var o=n.container()
LS(o)&&Ef(o).each((function(e){return t.setStart(e.container(),e.offset())}))}yc.isElementPosition(r)&&(o=n.container(),LS(o)&&kf(o).each((function(e){return t.setEnd(e.container(),e.offset())})))
e.selection.setRng(vg(t))}(e)}))},MS=function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView
return{top:t.top+o.pageYOffset-r.clientTop,left:t.left+o.pageXOffset-r.clientLeft}},FS=function(e,t){return n=function(e){return e.inline?MS(e.getBody()):{left:0,top:0}}(e),r=function(e){var t=e.getBody()
return e.inline?{left:t.scrollLeft,top:t.scrollTop}:{left:0,top:0}}(e),{pageX:(o=function(e,t){if(t.target.ownerDocument!==e.getDoc()){var n=MS(e.getContentAreaContainer()),r=function(e){var t=e.getBody(),n=e.getDoc().documentElement,r={left:t.scrollLeft,top:t.scrollTop},o={left:t.scrollLeft||n.scrollLeft,top:t.scrollTop||n.scrollTop}
return e.inline?r:o}(e)
return{left:t.pageX-n.left+r.left,top:t.pageY-n.top+r.top}}return{left:t.pageX,top:t.pageY}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top}
var n,r,o},US=Fn,zS=Mn,jS=function(e,t,n,r){var o=e.dom,i=t.cloneNode(!0)
o.setStyles(i,{width:n,height:r}),o.setAttrib(i,"data-mce-selected",null)
var a=o.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
return o.setStyles(a,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),o.setStyles(i,{margin:0,boxSizing:"border-box"}),a.appendChild(i),a},HS=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},VS=function(e,t){return function(n){if(function(e){return 0===e.button}(n)){var r=K(t.dom.getParents(n.target),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0
return!1}}(US,zS)).getOr(null)
if(u=t.getBody(),US(c=r)&&c!==u){var o=t.dom.getPos(r),i=t.getBody(),a=t.getDoc().documentElement
e.set({element:r,dragging:!1,screenX:n.screenX,screenY:n.screenY,maxX:(t.inline?i.scrollWidth:a.offsetWidth)-2,maxY:(t.inline?i.scrollHeight:a.offsetHeight)-2,relX:n.pageX-o.x,relY:n.pageY-o.y,width:r.offsetWidth,height:r.offsetHeight,ghost:jS(t,r,r.offsetWidth,r.offsetHeight)})}}var u,c}},qS=function(e,t){return function(n){e.on((function(e){if(e.dragging&&function(e,t,n){return t!==n&&!e.dom.isChildOf(t,n)&&!US(t)}(t,(a=t.selection,3===(u=a.getSel().getRangeAt(0).startContainer).nodeType?u.parentNode:u),e.element)){var r=(o=e.element,(i=o.cloneNode(!0)).removeAttribute("data-mce-selected"),i)
t.fire("drop",{clientX:n.clientX,clientY:n.clientY}).isDefaultPrevented()||t.undoManager.transact((function(){HS(e.element),t.insertContent(t.dom.getOuterHTML(r)),t._selectionOverrides.hideFakeCaret()}))}var o,i,a,u})),$S(e)}},$S=function(e){e.on((function(e){HS(e.ghost)})),e.clear()},WS=function(e){var t,n=(t=fu(w.none()),{clear:function(){return t.set(w.none())},set:function(e){return t.set(w.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}}),r=iu.DOM,o=document,i=VS(n,e),a=function(e,t){var n=Xr.throttle((function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0)
return t.on("remove",n.stop),function(r){return e.on((function(e){var o,i,a=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY))
if(!e.dragging&&a>10){if(t.fire("dragstart",{target:e.element}).isDefaultPrevented())return
e.dragging=!0,t.focus()}if(e.dragging){var u=function(e,t){return{pageX:t.pageX-e.relX,pageY:t.pageY+5}}(e,FS(t,r))
o=e.ghost,i=t.getBody(),o.parentNode!==i&&i.appendChild(o),function(e,t,n,r,o,i){var a=0,u=0
e.style.left=t.pageX+"px",e.style.top=t.pageY+"px",t.pageX+n>o&&(a=t.pageX+n-o),t.pageY+r>i&&(u=t.pageY+r-i),e.style.width=n-a+"px",e.style.height=r-u+"px"}(e.ghost,u,e.width,e.height,e.maxX,e.maxY),n(r.clientX,r.clientY)}}))}}(n,e),u=qS(n,e),c=function(e,t){return function(){e.on((function(e){e.dragging&&t.fire("dragend")})),$S(e)}}(n,e)
e.on("mousedown",i),e.on("mousemove",a),e.on("mouseup",u),r.bind(o,"mousemove",a),r.bind(o,"mouseup",c),e.on("remove",(function(){r.unbind(o,"mousemove",a),r.unbind(o,"mouseup",c)}))},KS=function(e){WS(e),function(e){e.on("drop",(function(t){var n=void 0!==t.clientX?e.getDoc().elementFromPoint(t.clientX,t.clientY):null;(US(n)||"false"===e.dom.getContentEditableParent(n))&&t.preventDefault()}))}(e),function(e){return e.getParam("block_unsupported_drop",!0,"boolean")}(e)&&function(e){var t=function(t){if(!t.isDefaultPrevented()){var n=t.dataTransfer
n&&(U(n.types,"Files")||n.files.length>0)&&(t.preventDefault(),"drop"===t.type&&jy(e,"Dropped file type is not supported"))}},n=function(n){Qd(e,n.target)&&t(n)},r=function(){var r=iu.DOM,o=e.dom,i=document,a=e.inline?e.getBody():e.getDoc(),u=["drop","dragover"]
H(u,(function(e){r.bind(i,e,n),o.bind(a,e,t)})),e.on("remove",(function(){H(u,(function(e){r.unbind(i,e,n),o.unbind(a,e,t)}))}))}
e.on("init",(function(){Xr.setEditorTimeout(e,r,0)}))}(e)},XS=Mn,YS=Fn,GS=function(e,t){return jl(e.getBody(),t)},JS=function(e){var t,n=e.selection,r=e.dom,o=r.isBlock,i=e.getBody(),a=_s(e,i,o,(function(){return im(e)})),u="sel-"+r.uniqueId(),c="data-mce-selected",s=function(e){return e!==i&&(YS(e)||zn(e))&&r.isChildOf(e,i)},f=function(e){e&&n.setRng(e)},l=n.getRng,d=function(t,r,o,i){return void 0===i&&(i=!0),e.fire("ShowCaret",{target:r,direction:t,before:o}).isDefaultPrevented()?null:(i&&n.scrollIntoView(r,-1===t),a.show(o,r))},m=function(e){return yo(e)||So(e)||No(e)},p=function(e){return m(e.startContainer)||m(e.endContainer)},g=function(t){var n=e.schema.getShortEndedElements(),o=r.createRng(),i=t.startContainer,a=t.startOffset,u=t.endContainer,c=t.endOffset
return pe(n,i.nodeName.toLowerCase())?0===a?o.setStartBefore(i):o.setStartAfter(i):o.setStart(i,a),pe(n,u.nodeName.toLowerCase())?0===c?o.setEndBefore(u):o.setEndAfter(u):o.setEnd(u,c),o},h=function(o){var i=o.cloneNode(!0),a=e.fire("ObjectSelected",{target:o,targetClone:i})
if(a.isDefaultPrevented())return null
var s=function(t,o,i){var a=e.$,c=Hr(St.fromDom(e.getBody()),"#"+u).fold((function(){return a([])}),(function(e){return a([e.dom])}))
0===c.length&&(c=a('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",u)).appendTo(e.getBody())
var s=r.createRng()
o===i&&ht.ie?(c.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(o),s.setStartAfter(c[0].firstChild.firstChild),s.setEndAfter(o)):(c.empty().append(so).append(o).append(so),s.setStart(c[0].firstChild,1),s.setEnd(c[0].lastChild,0)),c.css({top:r.getPos(t,e.getBody()).y}),c[0].focus()
var f=n.getSel()
return f.removeAllRanges(),f.addRange(s),s}(o,a.targetClone,i),f=St.fromDom(o)
return H(ku(St.fromDom(e.getBody()),"*[data-mce-selected]"),(function(e){_t(f,e)||Kn(e,c)})),r.getAttrib(o,c)||o.setAttribute(c,"1"),t=o,b(),s},v=function(e,t){if(!e)return null
if(e.collapsed){if(!p(e)){var n=t?1:-1,o=Qs(n,i,e),a=o.getNode(!t)
if(Ts(a))return d(n,a,!!t&&!o.isAtEnd(),!1)
var u=o.getNode(t)
if(Ts(u))return d(n,u,!t&&!o.isAtEnd(),!1)}return null}var c=e.startContainer,f=e.startOffset,l=e.endOffset
if(3===c.nodeType&&0===f&&YS(c.parentNode)&&(c=c.parentNode,f=r.nodeIndex(c),c=c.parentNode),1!==c.nodeType)return null
if(l===f+1&&c===e.endContainer){var m=c.childNodes[f]
if(s(m))return h(m)}return null},y=function(){t&&t.removeAttribute(c),Hr(St.fromDom(e.getBody()),"#"+u).each(sn),t=null},b=function(){a.hide()}
return ht.ceFalse&&function(){e.on("mouseup",(function(t){var n=l()
n.collapsed&&By(e,t.clientX,t.clientY)&&$b(e,n,!1).each(f)})),e.on("click",(function(t){var o=GS(e,t.target)
o&&(YS(o)&&(t.preventDefault(),e.focus()),XS(o)&&r.isChildOf(o,n.getNode())&&y())})),e.on("blur NewBlock",y),e.on("ResizeWindow FullscreenStateChanged",a.reposition)
var c=function(e){var t=pf(e)
if(!e.firstChild)return!1
var n,r=yc.before(e.firstChild),o=t.next(r)
return o&&!(Wm(n=o)||Km(n)||Hm(n)||Vm(n))},m=function(t,n){var i,a,u=r.getParent(t,o),s=r.getParent(n,o)
return!(!u||t===s||!r.isChildOf(u,s)||!1!==YS(GS(e,u)))||u&&(i=u,a=s,!(r.getParent(i,o)===r.getParent(a,o)))&&c(u)}
e.on("tap",(function(t){var n=t.target,r=GS(e,n)
YS(r)?(t.preventDefault(),qb(e,r).each(v)):s(n)&&qb(e,n).each(v)}),!0),e.on("mousedown",(function(t){var o=t.target
if((o===i||"HTML"===o.nodeName||r.isChildOf(o,i))&&!1!==By(e,t.clientX,t.clientY)){var a=GS(e,o)
if(a)YS(a)?(t.preventDefault(),qb(e,a).each(v)):(y(),XS(a)&&t.shiftKey||Hl(t.clientX,t.clientY,n.getRng())||(b(),n.placeCaretAt(t.clientX,t.clientY)))
else if(s(o))qb(e,o).each(v)
else if(!1===Ts(o)){y(),b()
var u=Yw(i,t.clientX,t.clientY)
if(u&&!m(o,u.node)){t.preventDefault()
var c=d(1,u.node,u.before,!1)
e.getBody().focus(),f(c)}}}})),e.on("keypress",(function(e){ql.modifierPressed(e)||YS(n.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(function(e){var n=e.range
if(t){if(!t.parentNode)return void(t=null);(n=n.cloneRange()).selectNode(t),e.range=n}})),e.on("SetSelectionRange",(function(e){e.range=g(e.range)
var t=v(e.range,e.forward)
t&&(e.range=t)})),e.on("AfterSetSelectionRange",(function(e){var t,n=e.range,o=n.startContainer.parentNode
p(n)||"mcepastebin"===o.id||b(),t=o,r.hasClass(t,"mce-offscreen-selection")||y()})),e.on("copy",(function(e){var t,n=e.clipboardData
if(!e.isDefaultPrevented()&&e.clipboardData&&!ht.ie){var o=(t=r.get(u))?t.getElementsByTagName("*")[0]:t
o&&(e.preventDefault(),n.clearData(),n.setData("text/html",o.outerHTML),n.setData("text/plain",o.outerText||o.innerText))}})),KS(e),function(e){var t=hu((function(){if(!e.removed&&e.getBody().contains(document.activeElement)){var t=e.selection.getRng()
if(t.collapsed){var n=Wb(e,t,!1)
e.selection.setRng(n)}}}),0)
e.on("focus",(function(){t.throttle()})),e.on("blur",(function(){t.cancel()}))}(e),function(e){e.on("init",(function(){e.on("focusin",(function(t){var n=t.target
if(zn(n)){var r=jl(e.getBody(),n),o=Fn(r)?r:n
e.selection.getNode()!==o&&qb(e,o).each((function(t){return e.selection.setRng(t)}))}}))}))}(e)}(),{showCaret:d,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(Eo(e),f(l()),n.scrollIntoView(e))},hideFakeCaret:b,destroy:function(){a.destroy(),t=null}}},QS=function(e){var t,n,r,o=wt.each,i=ql.BACKSPACE,a=ql.DELETE,c=e.dom,s=e.selection,f=e.parser,l=ht.gecko,d=ht.ie,m=ht.webkit,p="data:text/mce-internal,",g=d?"Text":"URL",h=function(t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}},v=function(e){return e.isDefaultPrevented()},y=function(){e.shortcuts.add("meta+a",null,"SelectAll")},b=function(){e.on("keydown",(function(e){if(!v(e)&&e.keyCode===i&&s.isCollapsed()&&0===s.getRng().startOffset){var t=s.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))},C=function(){e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(function(t){var n
if("HTML"===t.target.nodeName){if(ht.ie>11)return void e.getBody().focus()
n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged()}})))},w=u
return e.on("keydown",(function(t){var n,r
if(!v(t)&&t.keyCode===ql.BACKSPACE){var o=(n=s.getRng()).startContainer,i=n.startOffset,a=c.getRoot()
if(r=o,n.collapsed&&0===i){for(;r&&r.parentNode&&r.parentNode.firstChild===r&&r.parentNode!==a;)r=r.parentNode
"BLOCKQUOTE"===r.tagName&&(e.formatter.toggle("blockquote",null,r),(n=c.createRng()).setStart(o,0),n.setEnd(o,0),s.setRng(n))}}})),t=function(e){var t=c.create("body"),n=e.cloneContents()
return t.appendChild(n),s.serializer.serialize(t,{format:"html"})},e.on("keydown",(function(n){var r,o,u=n.keyCode
if(!v(n)&&(u===a||u===i)){if(r=e.selection.isCollapsed(),o=e.getBody(),r&&!c.isEmpty(o))return
if(!r&&!function(n){var r=t(n),o=c.createRng()
return o.selectNode(e.getBody()),r===t(o)}(e.selection.getRng()))return
n.preventDefault(),e.setContent(""),o.firstChild&&c.isBlock(o.firstChild)?e.selection.setCursorLocation(o.firstChild,0):e.selection.setCursorLocation(o,0),e.nodeChanged()}})),ht.windowsPhone||e.on("keyup focusin mouseup",(function(e){ql.modifierPressed(e)||s.normalize()}),!0),m&&(e.inline||c.bind(e.getDoc(),"mousedown mouseup",(function(t){var n
if(t.target===e.getDoc().documentElement)if(n=s.getRng(),e.getBody().focus(),"mousedown"===t.type){if(yo(n.startContainer))return
s.placeCaretAt(t.clientX,t.clientY)}else s.setRng(n)})),e.on("click",(function(t){var n=t.target;/^(IMG|HR)$/.test(n.nodeName)&&"false"!==c.getContentEditableParent(n)&&(t.preventDefault(),e.selection.select(n),e.nodeChanged()),"A"===n.nodeName&&c.hasClass(n,"mce-item-anchor")&&(t.preventDefault(),s.select(n))})),$c(e)&&e.on("init",(function(){h("DefaultParagraphSeparator",$c(e))})),e.on("init",(function(){e.dom.bind(e.getBody(),"submit",(function(e){e.preventDefault()}))})),b(),f.addNodeFilter("br",(function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),ht.iOS?(e.inline||e.on("keydown",(function(){document.activeElement===document.body&&e.getWin().focus()})),C(),e.on("click",(function(e){var t=e.target
do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):y()),ht.ie>=11&&(C(),b()),ht.ie&&(y(),h("AutoUrlDetect",!1),e.on("dragstart",(function(t){(function(t){var n,r
t.dataTransfer&&(e.selection.isCollapsed()&&"IMG"===t.target.tagName&&s.select(t.target),(n=e.selection.getContent()).length>0&&(r=p+escape(e.id)+","+escape(n),t.dataTransfer.setData(g,r)))})(t)})),e.on("drop",(function(t){if(!v(t)){var n=function(e){var t
return e.dataTransfer&&(t=e.dataTransfer.getData(g))&&t.indexOf(p)>=0?(t=t.substr(p.length).split(","),{id:unescape(t[0]),html:unescape(t[1])}):null}(t)
if(n&&n.id!==e.id){t.preventDefault()
var r=Xl(t.x,t.y,e.getDoc())
s.setRng(r),o=n.html,i=!0,e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",!1,{content:o,internal:i}):e.execCommand("mceInsertContent",!1,o)}}var o,i}))),l&&(e.on("keydown",(function(t){if(!v(t)&&t.keyCode===i){if(!e.getBody().getElementsByTagName("hr").length)return
if(s.isCollapsed()&&0===s.getRng().startOffset){var n=s.getNode(),r=n.previousSibling
if("HR"===n.nodeName)return c.remove(n),void t.preventDefault()
r&&r.nodeName&&"hr"===r.nodeName.toLowerCase()&&(c.remove(r),t.preventDefault())}}})),Range.prototype.getClientRects||e.on("mousedown",(function(t){if(!v(t)&&"HTML"===t.target.nodeName){var n=e.getBody()
n.blur(),Xr.setEditorTimeout(e,(function(){n.focus()}))}})),n=function(){var t=c.getAttribs(s.getStart().cloneNode(!1))
return function(){var n=s.getStart()
n!==e.getBody()&&(c.setAttrib(n,"style",null),o(t,(function(e){n.setAttributeNode(e.cloneNode(!0))})))}},r=function(){return!s.isCollapsed()&&c.getParent(s.getStart(),c.isBlock)!==c.getParent(s.getEnd(),c.isBlock)},e.on("keypress",(function(t){var o
if(!v(t)&&(8===t.keyCode||46===t.keyCode)&&r())return o=n(),e.getDoc().execCommand("delete",!1,null),o(),t.preventDefault(),!1})),c.bind(e.getDoc(),"cut",(function(t){var o
!v(t)&&r()&&(o=n(),Xr.setEditorTimeout(e,(function(){o()})))})),function(e){return e.getParam("readonly")}(e)||e.on("BeforeExecCommand mousedown",(function(){h("StyleWithCSS",!1),h("enableInlineTableEditing",!1),is(e)||h("enableObjectResizing",!1)})),e.on("SetContent ExecCommand",(function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(c.select("a"),(function(e){var t=e.parentNode,n=c.getRoot()
if(t.lastChild===e){for(;t&&!c.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return
t=t.parentNode}c.add(t,"br",{"data-mce-bogus":1})}}))})),e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),ht.mac&&e.on("keydown",(function(t){!ql.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))})),b()),{refreshContentEditable:w,isHidden:function(){if(!l||e.removed)return!1
var t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}}},ZS=iu.DOM,eN=function(e){return e.inline?e.getElement().nodeName.toLowerCase():void 0},tN=function(e){return le(e,(function(e){return!1===T(e)}))},nN=function(e){var t=e.settings,n=e.editorUpload.blobCache
return tN({allow_conditional_comments:t.allow_conditional_comments,allow_html_data_urls:t.allow_html_data_urls,allow_svg_data_urls:t.allow_svg_data_urls,allow_html_in_named_anchor:t.allow_html_in_named_anchor,allow_script_urls:t.allow_script_urls,allow_unsafe_link_target:t.allow_unsafe_link_target,convert_fonts_to_spans:t.convert_fonts_to_spans,fix_list_elements:t.fix_list_elements,font_size_legacy_values:t.font_size_legacy_values,forced_root_block:t.forced_root_block,forced_root_block_attrs:t.forced_root_block_attrs,padd_empty_with_br:t.padd_empty_with_br,preserve_cdata:t.preserve_cdata,remove_trailing_brs:t.remove_trailing_brs,inline_styles:t.inline_styles,root_name:eN(e),validate:!0,blob_cache:n,images_dataimg_filter:t.images_dataimg_filter})},rN=function(e){var t=e.dom.getRoot()
e.inline||Tl(e)&&e.selection.getStart(!0)!==t||Ef(t).each((function(t){var n=t.getNode(),r=An(n)?Ef(n).getOr(t):t
ht.browser.isIE()?function(e,t){var n=St.fromDom(e.getBody()),r=(Hd(e)?w.from(t):w.none()).map(Vd).filter(jd(n))
e.bookmark=r.isSome()?r:e.bookmark}(e,r.toRange()):e.selection.setRng(r.toRange())}))},oN=function(e){e.bindPendingEventDelegates(),e.initialized=!0,function(e){e.fire("Init")}(e),e.focus(!0),rN(e),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),function(e){e.settings.auto_focus&&Xr.setEditorTimeout(e,(function(){var t;(t=!0===e.settings.auto_focus?e:e.editorManager.get(e.settings.auto_focus)).destroyed||t.focus()}),100)}(e)},iN=function(e){return e.inline?e.ui.styleSheetLoader:e.dom.styleSheetLoader},aN=function(e,t){var n=iN(e),r=os(e),o=function(){n.unloadAll(t),e.inline||e.ui.styleSheetLoader.unloadAll(r)},i=function(){e.removed?o():(e.on("remove",o),oN(e))}
qr.all(function(e,t,n){var r=[new qr((function(n,r){return iN(e).loadAll(t,n,r)}))]
return e.inline?r:r.concat([new qr((function(t,r){return e.ui.styleSheetLoader.loadAll(n,t,r)}))])}(e,t,r)).then(i).catch(i)},uN=function(e,t){var n=e.settings,r=e.getDoc(),o=e.getBody()
n.browser_spellcheck||n.gecko_spellcheck||(r.body.spellcheck=!1,ZS.setAttrib(o,"spellcheck","false")),e.quirks=QS(e),function(e){e.fire("PostRender")}(e)
var i=function(e){return e.getParam("directionality",pu.isRtl()?"rtl":void 0)}(e)
if(void 0!==i&&(o.dir=i),n.protect&&e.on("BeforeSetContent",(function(e){wt.each(n.protect,(function(t){e.content=e.content.replace(t,(function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"}))}))})),e.on("SetContent",(function(){e.addVisual(e.getBody())})),!1===t&&e.load({initial:!0,format:"html"}),e.startContent=e.getContent({format:"raw"}),e.on("compositionstart compositionend",(function(t){e.composing="compositionstart"===t.type})),e.contentStyles.length>0){var a=""
wt.each(e.contentStyles,(function(e){a+=e+"\r\n"})),e.dom.addStyle(a)}aN(e,e.contentCSS),n.content_style&&function(e,t){var n=St.fromDom(e.getBody()),r=Zt(Qt(n)),o=St.fromTag("style")
Vn(o,"type","text/css"),an(o,St.fromText(t)),an(r,o),e.on("remove",(function(){sn(o)}))}(e,n.content_style)},cN=function(e,t){var n=e.settings,r=e.getElement(),o=e.getDoc()
n.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline||(o.open(),o.write(e.iframeHTML),o.close()),e.inline&&(ZS.addClass(r,"mce-content-body"),e.contentDocument=o=document,e.contentWindow=window,e.bodyElement=r,e.contentAreaContainer=r)
var i=e.getBody()
i.disabled=!0,e.readonly=!!n.readonly,e.readonly||(e.inline&&"static"===ZS.getStyle(i,"position",!0)&&(i.style.position="relative"),i.contentEditable=e.getParam("content_editable_state",!0)),i.disabled=!1,e.editorUpload=tb(e),e.schema=yi(n),e.dom=iu(o,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,hex_colors:n.force_hex_style_colors,update_styles:!0,root_element:e.inline?e.getBody():null,collect:function(){return e.inline},schema:e.schema,contentCssCors:es(e),referrerPolicy:ts(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}}),e.parser=function(e){var t=Xv(nN(e),e.schema)
return t.addAttributeFilter("src,href,style,tabindex",(function(t,n){for(var r,o,i=t.length,a=e.dom,u="data-mce-"+n;i--;)if((o=(r=t[i]).attr(n))&&!r.attr(u)){if(0===o.indexOf("data:")||0===o.indexOf("blob:"))continue
"style"===n?((o=a.serializeStyle(a.parseStyle(o),r.name)).length||(o=null),r.attr(u,o),r.attr(n,o)):"tabindex"===n?(r.attr(u,o),r.attr(n,null)):r.attr(u,e.convertURL(o,n,r.name))}})),t.addNodeFilter("script",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("type")||"no/type"
0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}})),e.settings.preserve_cdata&&t.addNodeFilter("#cdata",(function(t){for(var n=t.length;n--;){var r=t[n]
r.type=8,r.name="#comment",r.value="[CDATA["+e.dom.encode(r.value)+"]]"}})),t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(function(t){for(var n=t.length,r=e.schema.getNonEmptyElements();n--;){var o=t[n]
o.isEmpty(r)&&0===o.getAll("br").length&&(o.append(new ym("br",1)).shortEnded=!0)}})),t}(e),e.serializer=Zv(function(e){var t=e.settings
return Ne(Ne({},nN(e)),tN({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope,element_format:t.element_format,entities:t.entities,entity_encoding:t.entity_encoding,indent:t.indent,indent_after:t.indent_after,indent_before:t.indent_before,block_elements:t.block_elements,boolean_attributes:t.boolean_attributes,custom_elements:t.custom_elements,extended_valid_elements:t.extended_valid_elements,invalid_elements:t.invalid_elements,invalid_styles:t.invalid_styles,move_caret_before_on_enter_elements:t.move_caret_before_on_enter_elements,non_empty_elements:t.non_empty_elements,schema:t.schema,self_closing_elements:t.self_closing_elements,short_ended_elements:t.short_ended_elements,special:t.special,text_block_elements:t.text_block_elements,text_inline_elements:t.text_inline_elements,valid_children:t.valid_children,valid_classes:t.valid_classes,valid_elements:t.valid_elements,valid_styles:t.valid_styles,verify_html:t.verify_html,whitespace_elements:t.whitespace_elements}))}(e),e),e.selection=Tv(e.dom,e.getWin(),e.serializer,e),e.annotator=Ul(e),e.formatter=cb(e),e.undoManager=sb(e),e._nodeChangeDispatcher=new BS(e),e._selectionOverrides=JS(e),mw(e),PS(e),vv(e)||IS(e)
var a=function(e){return vv(e)?fu(null):OS(e)}(e)
lw(e,a),function(e){$c(e)&&e.on("NodeChange",l(vw,e))}(e),pb(e),function(e){e.fire("PreInit")}(e),yv(e).fold((function(){uN(e,!1)}),(function(t){e.setProgressState(!0),t.then((function(t){e.setProgressState(!1),uN(e,t)}),(function(t){e.notificationManager.open({type:"error",text:String(t)}),uN(e,!0)}))}))},sN=iu.DOM,fN=function(e){var t=function(e){return e.getParam("doctype","<!DOCTYPE html>")}(e)+"<html><head>";(function(e){return e.getParam("document_base_url","")})(e)!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
var n=function(e){return Vc(e,"body_id","tinymce")}(e),r=function(e){return Vc(e,"body_class","")}(e)
return qc(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+qc(e)+'" />'),t+='</head><body id="'+n+'" class="mce-content-body '+r+'" data-id="'+e.id+'"><br></body></html>'},lN=function(e,t){var n=e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),r=function(e,t,n,r){var o=St.fromTag("iframe")
return qn(o,r),qn(o,{id:e+"_ifr",frameBorder:"0",allowTransparency:"true",title:t}),xu(o,"tox-edit-area__iframe"),o}(e.id,n,t.height,function(e){return e.getParam("iframe_attrs",{})}(e)).dom
r.onload=function(){r.onload=null,e.fire("load")}
var o=function(e,t){if(document.domain!==window.location.hostname&&ht.browser.isIE()){var n=Jy("mce")
e[n]=function(){cN(e)}
var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()"
return sN.setAttrib(t,"src",r),!0}return!1}(e,r)
return e.contentAreaContainer=t.iframeContainer,e.iframeElement=r,e.iframeHTML=fN(e),sN.add(t.iframeContainer,r),o},dN=iu.DOM,mN=function(e,t,n){var r=Iy.get(n),o=Iy.urls[n]||e.documentBaseUrl.replace(/\/$/,"")
if(n=wt.trim(n),r&&-1===wt.inArray(t,n)){if(wt.each(Iy.dependencies(n),(function(n){mN(e,t,n)})),e.plugins[n])return
try{var i=new r(e,o,e.$)
e.plugins[n]=i,i.init&&(i.init(e,o),t.push(n))}catch(fk){(function(e,t,n){var r=pu.translate(["Failed to initialize plugin: {0}",t])
Vl(e,"PluginLoadError",{message:r}),$y(r,n),jy(e,r)})(e,n,fk)}}},pN=function(e){return e.replace(/^\-/,"")},gN=function(e){return{editorContainer:e,iframeContainer:e,api:{}}},hN=function(e){var t=e.getElement()
return e.inline?gN(null):function(e){var t=dN.create("div")
return dN.insertAfter(t,e),gN(t)}(t)},vN=function(e){var t=e.getElement()
return e.orgDisplay=t.style.display,E(us(e))?function(e){return e.theme.renderUI()}(e):B(us(e))?function(e){var t=e.getElement(),n=us(e)(e,t)
return n.editorContainer.nodeType&&(n.editorContainer.id=n.editorContainer.id||e.id+"_parent"),n.iframeContainer&&n.iframeContainer.nodeType&&(n.iframeContainer.id=n.iframeContainer.id||e.id+"_iframecontainer"),n.height=n.iframeHeight?n.iframeHeight:t.offsetHeight,n}(e):hN(e)},yN=function(e){e.fire("ScriptsLoaded"),function(e){var t=wt.trim(Yc(e)),n=e.ui.registry.getAll().icons,r=Ne(Ne({},ky.get("default").icons),ky.get(t).icons)
ie(r,(function(t,r){pe(n,r)||e.ui.registry.addIcon(r,t)}))}(e),function(e){var t=us(e)
if(E(t)){e.settings.theme=pN(t)
var n=My.get(t)
e.theme=new n(e,My.urls[t]),e.theme.init&&e.theme.init(e,My.urls[t]||e.documentBaseUrl.replace(/\/$/,""),e.$)}else e.theme={}}(e),function(e){var t=[]
wt.each(ls(e).split(/[ ,]/),(function(n){mN(e,t,pN(n))}))}(e)
var t=vN(e);(function(e,t){var n={show:w.from(t.show).getOr(u),hide:w.from(t.hide).getOr(u),disable:w.from(t.disable).getOr(u),isDisabled:w.from(t.isDisabled).getOr(h),enable:function(){e.mode.isReadOnly()||w.from(t.enable).map(g)}}
e.ui=Ne(Ne({},e.ui),n)})(e,w.from(t.api).getOr({}))
var n={editorContainer:t.editorContainer,iframeContainer:t.iframeContainer}
return e.editorContainer=n.editorContainer?n.editorContainer:null,Xy(e),e.inline?cN(e):function(e,t){var n=lN(e,t)
t.editorContainer&&(sN.get(t.editorContainer).style.display=e.orgDisplay,e.hidden=sN.isHidden(t.editorContainer)),e.getElement().style.display="none",sN.setAttrib(e.id,"aria-hidden","true"),n||cN(e)}(e,n)},bN=iu.DOM,CN=function(e){return"-"===e.charAt(0)},wN=function(e,t){var n=ns(t),r=function(e){return e.getParam("language_url","","string")}(t)
if(!1===pu.hasCode(n)&&"en"!==n){var o=""!==r?r:t.editorManager.baseURL+"/langs/"+n+".js"
e.add(o,u,void 0,(function(){(function(e,t,n){Hy(e,"LanguageLoadError",Vy("language",t,n))})(t,o,n)}))}},xN=function(e,t,n){return w.from(t).filter((function(e){return e.length>0&&!ky.has(e)})).map((function(t){return{url:e.editorManager.baseURL+"/icons/"+t+"/icons"+n+".js",name:w.some(t)}}))},SN=function(e,t,n){var r=xN(t,"default",n),o=function(e){return w.from(function(e){return e.getParam("icons_url","","string")}(e)).filter((function(e){return e.length>0})).map((function(e){return{url:e,name:w.none()}}))}(t).orThunk((function(){return xN(t,Yc(t),"")}))
H(function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n)
return t}([r,o]),(function(n){e.add(n.url,u,void 0,(function(){(function(e,t,n){Hy(e,"IconsLoadError",Vy("icons",t,n))})(t,n.url,n.name.getOrUndefined())}))}))},NN=function(e,t){var n=su.ScriptLoader;(function(e,t,n,r){var o=us(t)
if(E(o)){if(!CN(o)&&!My.urls.hasOwnProperty(o)){var i=function(e){return e.getParam("theme_url")}(t)
i?My.load(o,t.documentBaseURI.toAbsolute(i)):My.load(o,"themes/"+o+"/theme"+n+".js")}e.loadQueue((function(){My.waitFor(o,r)}))}else r()})(n,e,t,(function(){wN(n,e),SN(n,e,t),function(e,t){wt.each(function(e){return e.getParam("external_plugins")}(e),(function(t,n){Iy.load(n,t,u,void 0,(function(){qy(e,t,n)})),e.settings.plugins+=" "+n})),wt.each(ls(e).split(/[ ,]/),(function(n){if((n=wt.trim(n))&&!Iy.urls[n])if(CN(n)){n=n.substr(1,n.length)
var r=Iy.dependencies(n)
wt.each(r,(function(n){var r={prefix:"plugins/",resource:n,suffix:"/plugin"+t+".js"},o=Iy.createUrl(r,n)
Iy.load(o.resource,o,u,void 0,(function(){qy(e,o.prefix+o.resource+o.suffix,o.resource)}))}))}else{var o={prefix:"plugins/",resource:n,suffix:"/plugin"+t+".js"}
Iy.load(n,o,u,void 0,(function(){qy(e,o.prefix+o.resource+o.suffix,n)}))}}))}(e,t),n.loadQueue((function(){e.removed||yN(e)}),e,(function(){e.removed||yN(e)}))}))},EN=function(e){var t=e.id
pu.setCode(ns(e))
var n=function(){bN.unbind(window,"ready",n),e.render()}
if(Ri.Event.domLoaded){if(e.getElement()&&ht.contentEditable){var r=St.fromDom(e.getElement()),o=function(e){return W(e.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{})}(r)
e.on("remove",(function(){V(r.dom.attributes,(function(e){return Kn(r,e.name)})),qn(r,o)})),e.ui.styleSheetLoader=function(e,t){return Gr.forElement(e,{contentCssCors:fs(t),referrerPolicy:ts(t)})}(r,e),!function(e){return e.getParam("inline")}(e)?(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden"):e.inline=!0
var i=e.getElement().form||bN.getParent(t,"form")
i&&(e.formElement=i,function(e){return e.getParam("hidden_input")}(e)&&!Tn(e.getElement())&&(bN.insertAfter(bN.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=function(t){e.fire(t.type,t)},bN.bind(i,"submit reset",e.formEventDelegate),e.on("reset",(function(){e.resetContent()})),!function(e){return e.getParam("submit_patch")}(e)||i.submit.nodeType||i.submit.length||i._mceOldSubmit||(i._mceOldSubmit=i.submit,i.submit=function(){return e.editorManager.triggerSave(),e.setDirty(!1),i._mceOldSubmit(i)})),e.windowManager=Uy(e),e.notificationManager=Ly(e),function(e){return"xml"===e.getParam("encoding")}(e)&&e.on("GetContent",(function(e){e.save&&(e.content=bN.encode(e.content))})),function(e){return e.getParam("add_form_submit_trigger")}(e)&&e.on("submit",(function(){e.initialized&&e.save()})),function(e){return e.getParam("add_unload_trigger")}(e)&&(e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),NN(e,e.suffix)}}else bN.bind(window,"ready",n)},kN=function(e,t){return function(e,t){return Cv(e).editor.addVisual(t)}(e,t)},_N={"font-size":"size","font-family":"face"},AN=function(e,t,n){return Ig(St.fromDom(n),(function(t){return function(t){return Jn(t,e).orThunk((function(){return"font"===Tt(t)?me(_N,e).bind((function(e){return Wn(t,e)})):w.none()}))}(t)}),(function(e){return _t(St.fromDom(t),e)}))},RN=function(e){return function(t,n){return w.from(n).map(St.fromDom).filter(Bt).bind((function(n){return AN(e,t,n.dom).or(function(e,t){return w.from(iu.DOM.getStyle(t,e,!0))}(e,n.dom))})).getOr("")}},TN=RN("font-size"),DN=c((function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}),RN("font-family")),ON=function(e){return Ef(e.getBody()).map((function(e){var t=e.container()
return Dn(t)?t.parentNode:t}))},BN=function(e,t){return function(e){return w.from(e.selection.getRng()).bind((function(t){var n=e.getBody()
return t.startContainer===n&&0===t.startOffset?w.none():w.from(e.selection.getStart(!0))}))}(e).orThunk(l(ON,e)).map(St.fromDom).filter(Bt).map(t)},PN=function(e,t){if(/^[0-9.]+$/.test(t)){var n=parseInt(t,10)
if(n>=1&&n<=7){var r=function(e){return wt.explode(e.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large"))}(e),o=function(e){return wt.explode(e.getParam("font_size_classes",""))}(e)
return o?o[n-1]||t:r[n-1]||t}return t}return t},LN=function(e){var t=e.split(/\s*,\s*/)
return j(t,(function(e){return-1===e.indexOf(" ")||Be(e,'"')||Be(e,"'")?e:"'"+e+"'"})).join(",")},IN=function(e,t){var n=function(e){var t
return"string"!=typeof e?(t=wt.extend({paste:e.paste,data:{paste:e.paste}},e),{content:e.content,details:t}):{content:e,details:{}}}(t);(function(e,t,n){bv(e).editor.insertContent(t,n)})(e,n.content,n.details)},MN=wt.each,FN=wt.map,UN=wt.inArray,zN=function(){function e(e){this.commands={state:{},exec:{},value:{}},this.editor=e,this.setupCommands(e)}return e.prototype.execCommand=function(e,t,n,r){var o,i=!1,a=this
if(!a.editor.removed){var u
if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus?(u=a.editor,Kd(u).each((function(e){return u.selection.setRng(e)}))):a.editor.focus(),(r=a.editor.fire("BeforeExecCommand",{command:e,ui:t,value:n})).isDefaultPrevented())return!1
var c=e.toLowerCase()
if(o=a.commands.exec[c])return o(c,t,n),a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
if(MN(this.editor.plugins,(function(r){if(r.execCommand&&r.execCommand(e,t,n))return a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),i=!0,!1})),i)return i
if(a.editor.theme&&a.editor.theme.execCommand&&a.editor.theme.execCommand(e,t,n))return a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
try{i=a.editor.getDoc().execCommand(e,t,n)}catch(s){}return!!i&&(a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0)}},e.prototype.queryCommandState=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.state[e])return t(e)
try{return this.editor.getDoc().queryCommandState(e)}catch(n){}return!1}},e.prototype.queryCommandValue=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.value[e])return t(e)
try{return this.editor.getDoc().queryCommandValue(e)}catch(n){}}},e.prototype.addCommands=function(e,t){void 0===t&&(t="exec")
var n=this
MN(e,(function(e,r){MN(r.toLowerCase().split(","),(function(r){n.commands[t][r]=e}))}))},e.prototype.addCommand=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.exec[e]=function(e,o,i,a){return t.call(n||r.editor,o,i,a)}},e.prototype.queryCommandSupported=function(e){if(e=e.toLowerCase(),this.commands.exec[e])return!0
try{return this.editor.getDoc().queryCommandSupported(e)}catch(t){}return!1},e.prototype.addQueryStateHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.state[e]=function(){return t.call(n||r.editor)}},e.prototype.addQueryValueHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.value[e]=function(){return t.call(n||r.editor)}},e.prototype.hasCustomCommand=function(e){return e=e.toLowerCase(),!!this.commands.exec[e]},e.prototype.execNativeCommand=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=null),this.editor.getDoc().execCommand(e,t,n)},e.prototype.isFormatMatch=function(e){return this.editor.formatter.match(e)},e.prototype.toggleFormat=function(e,t){this.editor.formatter.toggle(e,t?{value:t}:void 0),this.editor.nodeChanged()},e.prototype.storeSelection=function(e){this.selectionBookmark=this.editor.selection.getBookmark(e)},e.prototype.restoreSelection=function(){this.editor.selection.moveToBookmark(this.selectionBookmark)},e.prototype.setupCommands=function(e){var t=this
this.addCommands({"mceResetDesignMode,mceBeginUndoLevel":u,"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},"Cut,Copy,Paste":function(n){var r,o=e.getDoc()
try{t.execNativeCommand(n)}catch(a){r=!0}if("paste"!==n||o.queryCommandEnabled(n)||(r=!0),r||!o.queryCommandSupported(n)){var i=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")
ht.mac&&(i=i.replace(/Ctrl\+/g,"⌘+")),e.notificationManager.open({text:i,type:"error"})}},unlink:function(){if(e.selection.isCollapsed()){var t=e.dom.getParent(e.selection.getStart(),"a")
t&&e.dom.remove(t,!0)}else e.formatter.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(n){var r=n.substring(7)
"full"===r&&(r="justify"),MN("left,center,right,justify".split(","),(function(t){r!==t&&e.formatter.remove("align"+t)})),"none"!==r&&t.toggleFormat("align"+r)},"InsertUnorderedList,InsertOrderedList":function(n){var r
t.execNativeCommand(n)
var o=e.dom.getParent(e.selection.getNode(),"ol,ul")
o&&(r=o.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName)&&(t.storeSelection(),e.dom.split(r,o),t.restoreSelection()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){t.toggleFormat(e)},"ForeColor,HiliteColor":function(e,n,r){t.toggleFormat(e,r)},FontName:function(t,n,r){(function(e,t){var n=PN(e,t)
e.formatter.toggle("fontname",{value:LN(n)}),e.nodeChanged()})(e,r)},FontSize:function(t,n,r){(function(e,t){e.formatter.toggle("fontsize",{value:PN(e,t)}),e.nodeChanged()})(e,r)},LineHeight:function(t,n,r){(function(e,t){e.undoManager.transact((function(){e.formatter.toggle("lineheight",{value:String(t)}),e.nodeChanged()}))})(e,r)},RemoveFormat:function(t){e.formatter.remove(t)},mceBlockQuote:function(){t.toggleFormat("blockquote")},FormatBlock:function(e,n,r){return t.toggleFormat(r||"p")},mceCleanup:function(){var t=e.selection.getBookmark()
e.setContent(e.getContent()),e.selection.moveToBookmark(t)},mceRemoveNode:function(n,r,o){var i=o||e.selection.getNode()
i!==e.getBody()&&(t.storeSelection(),e.dom.remove(i,!0),t.restoreSelection())},mceSelectNodeDepth:function(t,n,r){var o=0
e.dom.getParent(e.selection.getNode(),(function(t){if(1===t.nodeType&&o++===r)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:function(t,n,r){e.selection.select(r)},mceInsertContent:function(t,n,r){IN(e,r)},mceInsertRawHTML:function(t,n,r){e.selection.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,(function(){return r})))},mceInsertNewLine:function(t,n,r){wS(e,r)},mceToggleFormat:function(e,n,r){t.toggleFormat(r)},mceSetContent:function(t,n,r){e.setContent(r)},"Indent,Outdent":function(t){cw(e,t)},mceRepaint:u,InsertHorizontalRule:function(){e.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual,e.addVisual()},mceReplaceContent:function(t,n,r){e.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceInsertLink:function(t,n,r){"string"==typeof r&&(r={href:r})
var o=e.dom.getParent(e.selection.getNode(),"a")
r.href=r.href.replace(/ /g,"%20"),o&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,o)},selectAll:function(){var t=e.dom.getParent(e.selection.getStart(),Mn)
if(t){var n=e.dom.createRng()
n.selectNodeContents(t),e.selection.setRng(n)}},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,n,r){return cS(e,r),!0}})
var n=function(t){return function(){var n=e.selection,r=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks(),o=FN(r,(function(n){return!!e.formatter.matchNode(n,t)}))
return-1!==UN(o,!0)}}
t.addCommands({JustifyLeft:n("alignleft"),JustifyCenter:n("aligncenter"),JustifyRight:n("alignright"),JustifyFull:n("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return t.isFormatMatch(e)},mceBlockQuote:function(){return t.isFormatMatch("blockquote")},Outdent:function(){return iw(e)},"InsertUnorderedList,InsertOrderedList":function(t){var n=e.dom.getParent(e.selection.getNode(),"ul,ol")
return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state"),t.addCommands({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}}),t.addQueryValueHandler("FontName",(function(){return function(e){return BN(e,(function(t){return DN(e.getBody(),t.dom)})).getOr("")}(e)}),this),t.addQueryValueHandler("FontSize",(function(){return function(e){return BN(e,(function(t){return TN(e.getBody(),t.dom)})).getOr("")}(e)}),this),t.addQueryValueHandler("LineHeight",(function(){return function(e){return BN(e,(function(t){var n=St.fromDom(e.getBody())
return Ig(t,(function(e){return Jn(e,"line-height")}),l(_t,n)).getOrThunk((function(){var e=parseFloat(Yn(t,"line-height")),n=parseFloat(Yn(t,"font-size"))
return String(e/n)}))})).getOr("")}(e)}),this)},e}(),jN="data-mce-contenteditable",HN=function(e,t,n){var r,o
Nu(e,t)&&!1===n?(o=t,bu(r=e)?r.dom.classList.remove(o):wu(r,o),Su(r)):n&&xu(e,t)},VN=function(e,t,n){try{e.getDoc().execCommand(t,!1,String(n))}catch(r){}},qN=function(e,t){e.dom.contentEditable=t?"true":"false"},$N=function(e,t){var n=St.fromDom(e.getBody())
HN(n,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),function(e){w.from(e.selection.getNode()).each((function(e){e.removeAttribute("data-mce-selected")}))}(e),e.readonly=!0,qN(n,!1),H(ku(n,'*[contenteditable="true"]'),(function(e){Vn(e,jN,"true"),qN(e,!1)}))):(e.readonly=!1,qN(n,!0),function(e){H(ku(e,'*[data-mce-contenteditable="true"]'),(function(e){Kn(e,jN),qN(e,!0)}))}(n),VN(e,"StyleWithCSS",!1),VN(e,"enableInlineTableEditing",!1),VN(e,"enableObjectResizing",!1),am(e)&&e.focus(),function(e){e.selection.setRng(e.selection.getRng())}(e),e.nodeChanged())},WN=function(e){return e.readonly},KN=function(e){e.parser.addAttributeFilter("contenteditable",(function(t){WN(e)&&H(t,(function(e){e.attr(jN,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(jN,(function(t){WN(e)&&H(t,(function(e){e.attr("contenteditable",e.attr(jN))}))})),e.serializer.addTempAttr(jN)},XN=function(e,t){if(function(e){return"click"===e.type}(t)&&!ql.metaKeyPressed(t)){var n=St.fromDom(t.target);(function(e,t){return Vr(t,"a",(function(t){return _t(t,St.fromDom(e.getBody()))})).bind((function(e){return Wn(e,"href")}))})(e,n).each((function(n){if(t.preventDefault(),/^#/.test(n)){var r=e.dom.select(n+',[name="'+((Be(o=n,i="#")?function(e,t){return e.substring(t)}(o,i.length):o)+'"]'))
r.length&&e.selection.scrollIntoView(r[0],!0)}else window.open(n,"_blank","rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")
var o,i}))}},YN=wt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," "),GN=function(){function e(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||h}return e.isNative=function(e){return!!YN[e.toLowerCase()]},e.prototype.fire=function(e,t){var n=e.toLowerCase(),r=t||{}
r.type=n,r.target||(r.target=this.scope),r.preventDefault||(r.preventDefault=function(){r.isDefaultPrevented=v},r.stopPropagation=function(){r.isPropagationStopped=v},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=v},r.isDefaultPrevented=h,r.isPropagationStopped=h,r.isImmediatePropagationStopped=h),this.settings.beforeFire&&this.settings.beforeFire(r)
var o=this.bindings[n]
if(o)for(var i=0,a=o.length;i<a;i++){var u=o[i]
if(u.once&&this.off(n,u.func),r.isImmediatePropagationStopped())return r.stopPropagation(),r
if(!1===u.func.call(this.scope,r))return r.preventDefault(),r}return r},e.prototype.on=function(e,t,n,r){if(!1===t&&(t=h),t){var o={func:t}
r&&wt.extend(o,r)
for(var i=e.toLowerCase().split(" "),a=i.length;a--;){var u=i[a],c=this.bindings[u]
c||(c=this.bindings[u]=[],this.toggleEvent(u,!0)),n?c.unshift(o):c.push(o)}}return this},e.prototype.off=function(e,t){var n=this
if(e)for(var r=e.toLowerCase().split(" "),o=r.length;o--;){var i=r[o],a=this.bindings[i]
if(!i)return ie(this.bindings,(function(e,t){n.toggleEvent(t,!1),delete n.bindings[t]})),this
if(a){if(t)for(var u=a.length;u--;)a[u].func===t&&(a=a.slice(0,u).concat(a.slice(u+1)),this.bindings[i]=a)
else a.length=0
a.length||(this.toggleEvent(e,!1),delete this.bindings[i])}}else ie(this.bindings,(function(e,t){n.toggleEvent(t,!1)})),this.bindings={}
return this},e.prototype.once=function(e,t,n){return this.on(e,t,n,{once:!0})},e.prototype.has=function(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)},e}(),JN=function(e){return e._eventDispatcher||(e._eventDispatcher=new GN({scope:e,toggleEvent:function(t,n){GN.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher},QN={fire:function(e,t,n){var r=this
if(r.removed&&"remove"!==e&&"detach"!==e)return t
var o=JN(r).fire(e,t)
if(!1!==n&&r.parent)for(var i=r.parent();i&&!o.isPropagationStopped();)i.fire(e,o,!1),i=i.parent()
return o},on:function(e,t,n){return JN(this).on(e,t,n)},off:function(e,t){return JN(this).off(e,t)},once:function(e,t){return JN(this).once(e,t)},hasEventListeners:function(e){return JN(this).has(e)}},ZN=iu.DOM,eE=function(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
var n=as(e)
return n?(e.eventRoot||(e.eventRoot=ZN.select(n)[0]),e.eventRoot):e.getBody()},tE=function(e,t,n){!function(e){return!e.hidden&&!WN(e)}(e)?WN(e)&&XN(e,n):e.fire(t,n)},nE=function(e,t){var n
if(e.delegates||(e.delegates={}),!e.delegates[t]&&!e.removed){var r=eE(e,t)
if(as(e)){if(Pw||(Pw={},e.editorManager.on("removeEditor",(function(){e.editorManager.activeEditor||Pw&&(ie(Pw,(function(t,n){e.dom.unbind(eE(e,n))})),Pw=null)}))),Pw[t])return
n=function(n){for(var r=n.target,o=e.editorManager.get(),i=o.length;i--;){var a=o[i].getBody();(a===r||ZN.isChildOf(r,a))&&tE(o[i],t,n)}},Pw[t]=n,ZN.bind(r,t,n)}else n=function(n){tE(e,t,n)},ZN.bind(r,t,n),e.delegates[t]=n}},rE=Ne(Ne({},QN),{bindPendingEventDelegates:function(){var e=this
wt.each(e._pendingNativeEvents,(function(t){nE(e,t)}))},toggleNativeEvent:function(e,t){var n=this
"focus"!==e&&"blur"!==e&&(t?n.initialized?nE(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(eE(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t=e.getBody(),n=e.dom
e.delegates&&(ie(e.delegates,(function(t,n){e.dom.unbind(eE(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}}),oE=["design","readonly"],iE=function(e,t,n,r){var o=n[t.get()],i=n[r]
try{i.activate()}catch(fk){return void console.error("problem while activating editor mode "+r+":",fk)}o.deactivate(),o.editorReadOnly!==i.editorReadOnly&&$N(e,i.editorReadOnly),t.set(r),function(e,t){e.fire("SwitchMode",{mode:t})}(e,r)},aE=function(e){var t=fu("design"),n=fu({design:{activate:u,deactivate:u,editorReadOnly:!1},readonly:{activate:u,deactivate:u,editorReadOnly:!0}})
return function(e){e.serializer?KN(e):e.on("PreInit",(function(){KN(e)}))}(e),function(e){e.on("ShowCaret",(function(t){WN(e)&&t.preventDefault()})),e.on("ObjectSelected",(function(t){WN(e)&&t.preventDefault()}))}(e),{isReadOnly:function(){return WN(e)},set:function(r){return function(e,t,n,r){if(r!==n.get()){if(!pe(t,r))throw new Error("Editor mode '"+r+"' is invalid")
e.initialized?iE(e,n,t,r):e.on("init",(function(){return iE(e,n,t,r)}))}}(e,n.get(),t,r)},get:function(){return t.get()},register:function(e,t){n.set(function(e,t,n){var r
if(U(oE,t))throw new Error("Cannot override default mode "+t)
return Ne(Ne({},e),((r={})[t]=Ne(Ne({},n),{deactivate:function(){try{n.deactivate()}catch(fk){console.error("problem while deactivating editor mode "+t+":",fk)}}}),r))}(n.get(),e,t))}}},uE=wt.each,cE=wt.explode,sE={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},fE=wt.makeMap("alt,ctrl,shift,meta,access"),lE=function(e){var t,n={}
uE(cE(e.toLowerCase(),"+"),(function(e){e in fE?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=sE[e]||e.toUpperCase().charCodeAt(0))}))
var r=[n.keyCode]
for(t in fE)n[t]?r.push(t):n[t]=!1
return n.id=r.join(","),n.access&&(n.alt=!0,ht.mac?n.ctrl=!0:n.shift=!0),n.meta&&(ht.mac?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n},dE=function(){function e(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e
var t=this
e.on("keyup keypress keydown",(function(e){!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(uE(t.shortcuts,(function(n){if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}return e.prototype.add=function(e,t,n,r){var o=this,i=o.normalizeCommandFunc(n)
return uE(cE(wt.trim(e)),(function(e){var n=o.createShortcut(e,t,i,r)
o.shortcuts[n.id]=n})),!0},e.prototype.remove=function(e){var t=this.createShortcut(e)
return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)},e.prototype.normalizeCommandFunc=function(e){var t=this,n=e
return"string"==typeof n?function(){t.editor.execCommand(n,!1,null)}:wt.isArray(n)?function(){t.editor.execCommand(n[0],n[1],n[2])}:n},e.prototype.createShortcut=function(e,t,n,r){var o=wt.map(cE(e,">"),lE)
return o[o.length-1]=wt.extend(o[o.length-1],{func:n,scope:r||this.editor}),wt.extend(o[0],{desc:this.editor.translate(t),subpatterns:o.slice(1)})},e.prototype.hasModifier=function(e){return e.altKey||e.ctrlKey||e.metaKey},e.prototype.isFunctionKey=function(e){return"keydown"===e.type&&e.keyCode>=112&&e.keyCode<=123},e.prototype.matchShortcut=function(e,t){return!!t&&(t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&(t.alt===e.altKey&&t.shift===e.shiftKey&&(!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0))))},e.prototype.executeShortcutAction=function(e){return e.func?e.func.call(e.scope):null},e}(),mE=function(){var e=function(){var e={},t={},n={},r={},o={},i={},a={},u=function(e,t){return function(n,r){return e[n.toLowerCase()]=Ne(Ne({},r),{type:t})}}
return{addButton:u(e,"button"),addGroupToolbarButton:u(e,"grouptoolbarbutton"),addToggleButton:u(e,"togglebutton"),addMenuButton:u(e,"menubutton"),addSplitButton:u(e,"splitbutton"),addMenuItem:u(t,"menuitem"),addNestedMenuItem:u(t,"nestedmenuitem"),addToggleMenuItem:u(t,"togglemenuitem"),addAutocompleter:u(n,"autocompleter"),addContextMenu:u(o,"contextmenu"),addContextToolbar:u(i,"contexttoolbar"),addContextForm:u(i,"contextform"),addSidebar:u(a,"sidebar"),addIcon:function(e,t){return r[e.toLowerCase()]=t},getAll:function(){return{buttons:e,menuItems:t,icons:r,popups:n,contextMenus:o,contextToolbars:i,sidebars:a}}}}()
return{addAutocompleter:e.addAutocompleter,addButton:e.addButton,addContextForm:e.addContextForm,addContextMenu:e.addContextMenu,addContextToolbar:e.addContextToolbar,addIcon:e.addIcon,addMenuButton:e.addMenuButton,addMenuItem:e.addMenuItem,addNestedMenuItem:e.addNestedMenuItem,addSidebar:e.addSidebar,addSplitButton:e.addSplitButton,addToggleButton:e.addToggleButton,addGroupToolbarButton:e.addGroupToolbarButton,addToggleMenuItem:e.addToggleMenuItem,getAll:e.getAll}},pE=wt.each,gE=wt.trim,hE="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),vE={ftp:21,http:80,https:443,mailto:25},yE=function(){function e(t,n){t=gE(t),this.settings=n||{}
var r=this.settings.base_uri,o=this
if(/^([\w\-]+):([^\/]{2})/i.test(t)||/^\s*#/.test(t))o.source=t
else{var i=0===t.indexOf("//")
if(0!==t.indexOf("/")||i||(t=(r&&r.protocol||"http")+"://mce_host"+t),!/^[\w\-]*:?\/\//.test(t)){var a=this.settings.base_uri?this.settings.base_uri.path:new e(document.location.href).directory
if(this.settings.base_uri&&""==this.settings.base_uri.protocol)t="//mce_host"+o.toAbsPath(a,t)
else{var u=/([^#?]*)([#?]?.*)/.exec(t)
t=(r&&r.protocol||"http")+"://mce_host"+o.toAbsPath(a,u[1])+u[2]}}t=t.replace(/@@/g,"(mce_at)")
var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(t)
pE(hE,(function(e,t){var n=c[t]
n&&(n=n.replace(/\(mce_at\)/g,"@@")),o[e]=n})),r&&(o.protocol||(o.protocol=r.protocol),o.userInfo||(o.userInfo=r.userInfo),o.port||"mce_host"!==o.host||(o.port=r.port),o.host&&"mce_host"!==o.host||(o.host=r.host),o.source=""),i&&(o.protocol="")}}return e.parseDataUri=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},e.getDocumentBaseUrl=function(e){var t
return t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t},e.prototype.setPath=function(e){var t=/^(.*?)\/?(\w+)?$/.exec(e)
this.path=t[0],this.directory=t[1],this.file=t[2],this.source="",this.getURI()},e.prototype.toRelative=function(t){var n
if("./"===t)return t
var r=new e(t,{base_uri:this})
if("mce_host"!==r.host&&this.host!==r.host&&r.host||this.port!==r.port||this.protocol!==r.protocol&&""!==r.protocol)return r.getURI()
var o=this.getURI(),i=r.getURI()
return o===i||"/"===o.charAt(o.length-1)&&o.substr(0,o.length-1)===i?o:(n=this.toRelPath(this.path,r.path),r.query&&(n+="?"+r.query),r.anchor&&(n+="#"+r.anchor),n)},e.prototype.toAbsolute=function(t,n){var r=new e(t,{base_uri:this})
return r.getURI(n&&this.isSameOrigin(r))},e.prototype.isSameOrigin=function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0
var t=vE[this.protocol]
if(t&&(this.port||t)==(e.port||t))return!0}return!1},e.prototype.toRelPath=function(e,t){var n,r,o=0,i="",a=e.substring(0,e.lastIndexOf("/")).split("/"),u=t.split("/")
if(a.length>=u.length)for(n=0,r=a.length;n<r;n++)if(n>=u.length||a[n]!==u[n]){o=n+1
break}if(a.length<u.length)for(n=0,r=u.length;n<r;n++)if(n>=a.length||a[n]!==u[n]){o=n+1
break}if(1===o)return t
for(n=0,r=a.length-(o-1);n<r;n++)i+="../"
for(n=o-1,r=u.length;n<r;n++)i+=n!==o-1?"/"+u[n]:u[n]
return i},e.prototype.toAbsPath=function(e,t){var n,r,o=0,i=[],a=/\/$/.test(t)?"/":"",u=e.split("/"),c=t.split("/")
for(pE(u,(function(e){e&&i.push(e)})),u=i,n=c.length-1,i=[];n>=0;n--)0!==c[n].length&&"."!==c[n]&&(".."!==c[n]?o>0?o--:i.push(c[n]):o++)
return 0!==(r=(n=u.length-o)<=0?J(i).join("/"):u.slice(0,n).join("/")+"/"+J(i).join("/")).indexOf("/")&&(r="/"+r),a&&r.lastIndexOf("/")!==r.length-1&&(r+=a),r},e.prototype.getURI=function(e){var t
return void 0===e&&(e=!1),this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source},e}(),bE=iu.DOM,CE=wt.extend,wE=wt.each,xE=wt.resolve,SE=ht.ie,NE=function(){function e(e,t,n){var r=this
this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,CE(this,rE),this.settings=Sy(this,e,this.documentBaseUrl,n.defaultSettings,t),this.settings.suffix&&(n.suffix=this.settings.suffix),this.suffix=n.suffix,this.settings.base_url&&n._setBaseUrl(this.settings.base_url),this.baseUri=n.baseURI,this.settings.referrer_policy&&(su.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),iu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),gu.languageLoad=this.settings.language_load,gu.baseURL=n.baseURL,this.id=e,this.setDirty(!1),this.documentBaseURI=new yE(this.settings.document_base_url,{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=!!this.settings.inline,this.shortcuts=new dE(this),this.editorCommands=new zN(this),this.settings.cache_suffix&&(ht.cacheSuffix=this.settings.cache_suffix.replace(/^[\?\&]+/,"")),this.ui={registry:mE(),styleSheetLoader:void 0,show:u,hide:u,enable:u,disable:u,isDisabled:h}
var o=aE(this)
this.mode=o,this.setMode=o.set,n.fire("SetupEditor",{editor:this}),this.execCallback("setup",this),this.$=Qa.overrideDefaults((function(){return{context:r.inline?r.getBody():r.getDoc(),element:r.getBody()}}))}return e.prototype.render=function(){EN(this)},e.prototype.focus=function(e){cm(this,e)},e.prototype.hasFocus=function(){return im(this)},e.prototype.execCallback=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r,o=this,i=o.settings[e]
if(i)return o.callbackLookup&&(r=o.callbackLookup[e])&&(i=r.func,r=r.scope),"string"==typeof i&&(r=(r=i.replace(/\.\w+$/,""))?xE(r):0,i=xE(i),o.callbackLookup=o.callbackLookup||{},o.callbackLookup[e]={func:i,scope:r}),i.apply(r||o,t)},e.prototype.translate=function(e){return pu.translate(e)},e.prototype.getParam=function(e,t,n){return Ey(this,e,t,n)},e.prototype.hasPlugin=function(e,t){return!!U(ls(this).split(/[ ,]/),e)&&(!t||void 0!==Iy.get(e))},e.prototype.nodeChanged=function(e){this._nodeChangeDispatcher.nodeChanged(e)},e.prototype.addCommand=function(e,t,n){this.editorCommands.addCommand(e,t,n)},e.prototype.addQueryStateHandler=function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},e.prototype.addQueryValueHandler=function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},e.prototype.addShortcut=function(e,t,n,r){this.shortcuts.add(e,t,n,r)},e.prototype.execCommand=function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},e.prototype.queryCommandState=function(e){return this.editorCommands.queryCommandState(e)},e.prototype.queryCommandValue=function(e){return this.editorCommands.queryCommandValue(e)},e.prototype.queryCommandSupported=function(e){return this.editorCommands.queryCommandSupported(e)},e.prototype.show=function(){var e=this
e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable="true":(bE.show(e.getContainer()),bE.hide(e.id)),e.load(),e.fire("show"))},e.prototype.hide=function(){var e=this,t=e.getDoc()
e.hidden||(SE&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(bE.hide(e.getContainer()),bE.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},e.prototype.isHidden=function(){return!!this.hidden},e.prototype.setProgressState=function(e,t){this.fire("ProgressState",{state:e,time:t})},e.prototype.load=function(e){var t,n=this,r=n.getElement()
if(n.removed)return""
if(r){(e=e||{}).load=!0
var o=Tn(r)?r.value:r.innerHTML
return t=n.setContent(o,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,t}},e.prototype.save=function(e){var t,n,r=this,o=r.getElement()
if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,Tn(o)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=bE.getParent(r.id,"form"))&&wE(n.elements,(function(e){if(e.name===r.id)return e.value=t,!1}))),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},e.prototype.setContent=function(e,t){return ty(this,e,t)},e.prototype.getContent=function(e){return ey(this,e)},e.prototype.insertContent=function(e,t){t&&(e=CE({content:e},t)),this.execCommand("mceInsertContent",!1,e)},e.prototype.resetContent=function(e){void 0===e?ty(this,this.startContent,{format:"raw"}):ty(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()},e.prototype.isDirty=function(){return!this.isNotDirty},e.prototype.setDirty=function(e){var t=!this.isNotDirty
this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},e.prototype.getContainer=function(){var e=this
return e.container||(e.container=bE.get(e.editorContainer||e.id+"_parent")),e.container},e.prototype.getContentAreaContainer=function(){return this.contentAreaContainer},e.prototype.getElement=function(){return this.targetElm||(this.targetElm=bE.get(this.id)),this.targetElm},e.prototype.getWin=function(){var e,t=this
return t.contentWindow||(e=t.iframeElement)&&(t.contentWindow=e.contentWindow),t.contentWindow},e.prototype.getDoc=function(){var e,t=this
return t.contentDocument||(e=t.getWin())&&(t.contentDocument=e.document),t.contentDocument},e.prototype.getBody=function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},e.prototype.convertURL=function(e,t,n){var r=this,o=r.settings
return o.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!o.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:o.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,o.remove_script_host)},e.prototype.addVisual=function(e){kN(this,e)},e.prototype.remove=function(){oy(this)},e.prototype.destroy=function(e){iy(this,e)},e.prototype.uploadImages=function(e){return this.editorUpload.uploadImages(e)},e.prototype._scanForImages=function(){return this.editorUpload.scanForImages()},e.prototype.addButton=function(){throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")},e.prototype.addSidebar=function(){throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")},e.prototype.addMenuItem=function(){throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")},e.prototype.addContextToolbar=function(){throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")},e}(),EE=iu.DOM,kE=wt.explode,_E=wt.each,AE=wt.extend,RE=0,TE=!1,DE=[],OE=[],BE=function(e){var t=e.type
_E(ME.get(),(function(n){switch(t){case"scroll":n.fire("ScrollWindow",e)
break
case"resize":n.fire("ResizeWindow",e)}}))},PE=function(e){e!==TE&&(e?Qa(window).on("resize scroll",BE):Qa(window).off("resize scroll",BE),TE=e)},LE=function(e){var t=OE
delete DE[e.id]
for(var n=0;n<DE.length;n++)if(DE[n]===e){DE.splice(n,1)
break}return OE=q(OE,(function(t){return e!==t})),ME.activeEditor===e&&(ME.activeEditor=OE.length>0?OE[0]:null),ME.focusedEditor===e&&(ME.focusedEditor=null),t.length!==OE.length},IE="CSS1Compat"!==document.compatMode,ME=Ne(Ne({},QN),{baseURI:null,baseURL:null,defaultSettings:{},documentBaseURL:null,suffix:null,$:Qa,majorVersion:"5",minorVersion:"7.1",releaseDate:"2021-03-17",editors:DE,i18n:pu,activeEditor:null,focusedEditor:null,settings:{},setup:function(){var e,t,n=this,r=""
t=yE.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/"))
var o,i=window.tinymce||window.tinyMCEPreInit
if(i)e=i.base||i.baseURL,r=i.suffix
else{for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var c
if(""!==(c=a[u].src||"")){var s=c.substring(c.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(c)){-1!==s.indexOf(".min")&&(r=".min"),e=c.substring(0,c.lastIndexOf("/"))
break}}}if(!e&&document.currentScript)-1!==(c=document.currentScript.src).indexOf(".min")&&(r=".min"),e=c.substring(0,c.lastIndexOf("/"))}n.baseURL=new yE(t).toAbsolute(e),n.documentBaseURL=t,n.baseURI=new yE(n.baseURL),n.suffix=r,(o=n).on("AddEditor",l(Zd,o)),o.on("RemoveEditor",l(em,o))},overrideDefaults:function(e){var t=e.base_url
t&&this._setBaseUrl(t)
var n=e.suffix
e.suffix&&(this.suffix=n),this.defaultSettings=e
var r=e.plugin_base_urls
void 0!==r&&ie(r,(function(e,t){gu.PluginManager.urls[t]=e}))},init:function(e){var t,n=this,r=wt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," "),o=function(e){var t=e.id
return t||(t=me(e,"name").filter((function(e){return!EE.get(e)})).getOrThunk(EE.uniqueId),e.setAttribute("id",t)),t},i=function(e,t){return t.constructor===RegExp?t.test(e.className):EE.hasClass(e,t)},a=function(e){t=e},u=function(){var t,c=0,s=[],f=function(e,r,o){var i=new NE(e,r,n)
s.push(i),i.on("init",(function(){++c===t.length&&a(s)})),i.targetElm=i.targetElm||o,i.render()}
EE.unbind(window,"ready",u),function(t){var r=e[t]
if(r)r.apply(n,[])}("onpageload"),t=Qa.unique(function(e){var t=[]
if(ht.browser.isIE()&&ht.browser.version.major<11)return $y("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[]
if(IE)return $y("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]
if(e.types)return _E(e.types,(function(e){t=t.concat(EE.select(e.selector))})),t
if(e.selector)return EE.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":var n=e.elements||""
n.length>0&&_E(kE(n),(function(e){var n=EE.get(e)
n?t.push(n):_E(document.forms,(function(n){_E(n.elements,(function(n){n.name===e&&(e="mce_editor_"+RE++,EE.setAttrib(n,"id",e),t.push(n))}))}))}))
break
case"textareas":case"specific_textareas":_E(EE.select("textarea"),(function(n){e.editor_deselector&&i(n,e.editor_deselector)||e.editor_selector&&!i(n,e.editor_selector)||t.push(n)}))}return t}(e)),e.types?_E(e.types,(function(n){wt.each(t,(function(t){return!EE.is(t,n.selector)||(f(o(t),AE({},e,n),t),!1)}))})):(wt.each(t,(function(e){var t;(t=n.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(LE(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)})),0===(t=wt.grep(t,(function(e){return!n.get(e.id)}))).length?a([]):_E(t,(function(t){!function(e,t){return e.inline&&t.tagName.toLowerCase()in r}(e,t)?f(o(t),e,t):$y("Could not initialize inline editor on invalid inline target element",t)})))}
return n.settings=e,EE.bind(window,"ready",u),new qr((function(e){t?e(t):a=function(t){e(t)}}))},get:function(e){return 0===arguments.length?OE.slice(0):E(e)?K(OE,(function(t){return t.id===e})).getOr(null):P(e)&&OE[e]?OE[e]:null},add:function(e){var t=this
return DE[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(DE[e.id]=e),DE.push(e),OE.push(e)),PE(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),Lw||(Lw=function(e){var n=t.fire("BeforeUnload")
if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",Lw))),e},createEditor:function(e,t){return this.add(new NE(e,t,this))},remove:function(e){var t,n,r=this
if(e){if(!E(e))return n=e,A(r.get(n.id))?null:(LE(n)&&r.fire("RemoveEditor",{editor:n}),0===OE.length&&window.removeEventListener("beforeunload",Lw),n.remove(),PE(OE.length>0),n)
_E(EE.select(e),(function(e){(n=r.get(e.id))&&r.remove(n)}))}else for(t=OE.length-1;t>=0;t--)r.remove(OE[t])},execCommand:function(e,t,n){var r=this,o=r.get(n)
switch(e){case"mceAddEditor":return r.get(n)||new NE(n,r.settings,r).render(),!0
case"mceRemoveEditor":return o&&o.remove(),!0
case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(r.execCommand("mceAddEditor",!1,n),!0)}return!!r.activeEditor&&r.activeEditor.execCommand(e,t,n)},triggerSave:function(){_E(OE,(function(e){e.save()}))},addI18n:function(e,t){pu.add(e,t)},translate:function(e){return pu.translate(e)},setActive:function(e){var t=this.activeEditor
this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl:function(e){this.baseURL=new yE(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new yE(this.baseURL)}})
ME.setup()
var FE,UE,zE,jE,HE=Math.min,VE=Math.max,qE=Math.round,$E=function(e,t,n){var r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,c=t.h,s=(n||"").split("")
return"b"===s[0]&&(o+=c),"r"===s[1]&&(r+=u),"c"===s[0]&&(o+=qE(c/2)),"c"===s[1]&&(r+=qE(u/2)),"b"===s[3]&&(o-=a),"r"===s[4]&&(r-=i),"c"===s[3]&&(o-=qE(a/2)),"c"===s[4]&&(r-=qE(i/2)),WE(r,o,i,a)},WE=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},KE={inflate:function(e,t,n){return WE(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:$E,findBestRelativePosition:function(e,t,n,r){var o,i
for(i=0;i<r.length;i++)if((o=$E(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i]
return null},intersect:function(e,t){var n=VE(e.x,t.x),r=VE(e.y,t.y),o=HE(e.x+e.w,t.x+t.w),i=HE(e.y+e.h,t.y+t.h)
return o-n<0||i-r<0?null:WE(n,r,o-n,i-r)},clamp:function(e,t,n){var r=e.x,o=e.y,i=e.x+e.w,a=e.y+e.h,u=t.x+t.w,c=t.y+t.h,s=VE(0,t.x-r),f=VE(0,t.y-o),l=VE(0,i-u),d=VE(0,a-c)
return r+=s,o+=f,n&&(i+=s,a+=f,r-=l,o-=d),WE(r,o,(i-=l)-r,(a-=d)-o)},create:WE,fromClientRect:function(e){return WE(e.left,e.top,e.width,e.height)}},XE=(FE={},UE={},{load:function(e,t){var n='Script at URL "'+t+'" failed to load',r='Script at URL "'+t+"\" did not call `tinymce.Resource.add('"+e+"', data)` within 1 second"
if(void 0!==FE[e])return FE[e]
var o=new qr((function(o,i){var a=function(e,t,n){void 0===n&&(n=1e3)
var r=!1,o=null,i=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
r||(r=!0,null!==o&&(clearTimeout(o),o=null),e.apply(null,t))}},a=i(e),u=i(t)
return{start:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
r||null!==o||(o=setTimeout((function(){return u.apply(null,e)}),n))},resolve:a,reject:u}}(o,i)
UE[e]=a.resolve,su.ScriptLoader.loadScript(t,(function(){return a.start(r)}),(function(){return a.reject(n)}))}))
return FE[e]=o,o},add:function(e,t){void 0!==UE[e]&&(UE[e](t),delete UE[e]),FE[e]=qr.resolve(t)}}),YE=wt.each,GE=wt.extend,JE=function(){}
JE.extend=zE=function(e){var t=this.prototype,n=function(){var e,t,n,r=this
if(!jE&&(r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(r,arguments)},r=function(){return this}
jE=!0
var o=new this
return jE=!1,e.Mixins&&(YE(e.Mixins,(function(t){for(var n in t)"init"!==n&&(e[n]=t[n])})),t.Mixins&&(e.Mixins=t.Mixins.concat(e.Mixins))),e.Methods&&YE(e.Methods.split(","),(function(t){e[t]=r})),e.Properties&&YE(e.Properties.split(","),(function(t){var n="_"+t
e[t]=function(e){var t=this
return void 0!==e?(t[n]=e,t):t[n]}})),e.Statics&&YE(e.Statics,(function(e,t){n[t]=e})),e.Defaults&&t.Defaults&&(e.Defaults=GE({},t.Defaults,e.Defaults)),ie(e,(function(e,n){"function"==typeof e&&t[n]?o[n]=function(e,n){return function(){var r=this,o=r._super
r._super=t[e]
var i=n.apply(r,arguments)
return r._super=o,i}}(n,e):o[n]=e})),n.prototype=o,n.constructor=n,n.extend=zE,n}
var QE,ZE=Math.min,ek=Math.max,tk=Math.round,nk={serialize:function(e){var t=JSON.stringify(e)
return E(t)?t.replace(/[\u0080-\uFFFF]/g,(function(e){var t=e.charCodeAt(0).toString(16)
return"\\u"+"0000".substring(t.length)+t})):t},parse:function(e){try{return JSON.parse(e)}catch(t){}}},rk={callbacks:{},count:0,send:function(e){var t=this,n=iu.DOM,r=void 0!==e.count?e.count:t.count,o="tinymce_jsonp_"+r
t.callbacks[r]=function(i){n.remove(o),delete t.callbacks[r],e.callback(i)},n.add(n.doc.body,"script",{id:o,src:e.url,type:"text/javascript"}),t.count++}},ok=Ne(Ne({},QN),{send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||n++>1e4?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,n>1e4?"TIMED_OUT":"GENERAL",t,e),t=null):Xr.setTimeout(r,10)}
if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",ok.fire("beforeInitialize",{settings:e}),(t=new XMLHttpRequest).overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&wt.each(e.requestheaders,(function(e){t.setRequestHeader(e.key,e.value)})),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=ok.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r()
Xr.setTimeout(r,10)}}),ik=wt.extend,ak=function(){function e(e){this.settings=ik({},e),this.count=0}return e.sendRPC=function(t){return(new e).send(t)},e.prototype.send=function(e){var t=e.error,n=e.success,r=ik(this.settings,e)
r.success=function(e,o){void 0===(e=nk.parse(e))&&(e={error:"JSON Parse error."}),e.error?t.call(r.error_scope||r.scope,e.error,o):n.call(r.success_scope||r.scope,e.result)},r.error=function(e,n){t&&t.call(r.error_scope||r.scope,e,n)},r.data=nk.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params}),r.content_type="application/json",ok.send(r)},e}()
try{var uk="__storage_test__";(QE=window.localStorage).setItem(uk,uk),QE.removeItem(uk)}catch(fk){QE=function(){var e={},t=[],n={getItem:function(t){return e[t]||null},setItem:function(n,r){t.push(n),e[n]=String(r)},key:function(e){return t[e]},removeItem:function(n){t=t.filter((function(e){return e===n})),delete e[n]},clear:function(){t=[],e={}},length:0}
return Object.defineProperty(n,"length",{get:function(){return t.length},configurable:!1,enumerable:!1}),n}()}var ck={geom:{Rect:KE},util:{Promise:qr,Delay:Xr,Tools:wt,VK:ql,URI:yE,Class:JE,EventDispatcher:GN,Observable:QN,I18n:pu,XHR:ok,JSON:nk,JSONRequest:ak,JSONP:rk,LocalStorage:QE,Color:function(e){var t={},n=0,r=0,o=0,i=function(e){var i
return"object"==typeof e?"r"in e?(n=e.r,r=e.g,o=e.b):"v"in e&&function(e,t,i){if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,i=parseInt(i,10)/100,t=ek(0,ZE(t,1)),i=ek(0,ZE(i,1)),0!==t){var a=e/60,u=i*t,c=u*(1-Math.abs(a%2-1)),s=i-u
switch(Math.floor(a)){case 0:n=u,r=c,o=0
break
case 1:n=c,r=u,o=0
break
case 2:n=0,r=u,o=c
break
case 3:n=0,r=c,o=u
break
case 4:n=c,r=0,o=u
break
case 5:n=u,r=0,o=c
break
default:n=r=o=0}n=tk(255*(n+s)),r=tk(255*(r+s)),o=tk(255*(o+s))}else n=r=o=tk(255*i)}(e.h,e.s,e.v):(i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(n=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10)):(i=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16)):(i=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(n=parseInt(i[1]+i[1],16),r=parseInt(i[2]+i[2],16),o=parseInt(i[3]+i[3],16)),n=n<0?0:n>255?255:n,r=r<0?0:r>255?255:r,o=o<0?0:o>255?255:o,t}
return e&&i(e),t.toRgb=function(){return{r:n,g:r,b:o}},t.toHsv=function(){return function(e,t,n){var r,o
o=0
var i=ZE(e/=255,ZE(t/=255,n/=255)),a=ek(e,ek(t,n))
return i===a?{h:0,s:0,v:100*(o=i)}:(r=(a-i)/a,o=a,{h:tk(60*((e===i?3:n===i?1:5)-(e===i?t-n:n===i?e-t:n-e)/(a-i))),s:tk(100*r),v:tk(100*o)})}(n,r,o)},t.toHex=function(){var e=function(e){return(e=parseInt(e,10).toString(16)).length>1?e:"0"+e}
return"#"+e(n)+e(r)+e(o)},t.parse=i,t},ImageUploader:function(e){var t=Yy(),n=eb(e,t)
return{upload:function(t,r){return void 0===r&&(r=!0),n.upload(t,r?Zy(e):void 0)}}}},dom:{EventUtils:Ri,Sizzle:da,DomQuery:Qa,TreeWalker:Jr,TextSeeker:ju,DOMUtils:iu,ScriptLoader:su,RangeUtils:ud,Serializer:Zv,StyleSheetLoader:Yr,ControlSelection:Wl,BookmarkManager:zl,Selection:Tv,Event:Ri.Event},html:{Styles:Ci,Entities:ci,Node:ym,Schema:yi,SaxParser:Nm,DomParser:Xv,Writer:Dm,Serializer:Om},Env:ht,AddOnManager:gu,Annotator:Ul,Formatter:cb,UndoManager:sb,EditorCommands:zN,WindowManager:Uy,NotificationManager:Ly,EditorObservable:rE,Shortcuts:dE,Editor:NE,FocusManager:Xd,EditorManager:ME,DOM:iu.DOM,ScriptLoader:su.ScriptLoader,PluginManager:Iy,ThemeManager:My,IconManager:ky,Resource:XE,trim:wt.trim,isArray:wt.isArray,is:wt.is,toArray:wt.toArray,makeMap:wt.makeMap,each:wt.each,map:wt.map,grep:wt.grep,inArray:wt.inArray,extend:wt.extend,create:wt.create,walk:wt.walk,createNS:wt.createNS,resolve:wt.resolve,explode:wt.explode,_addCacheSuffix:wt._addCacheSuffix,isOpera:ht.opera,isWebKit:ht.webkit,isIE:ht.ie,isGecko:ht.gecko,isMac:ht.mac},sk=wt.extend(ME,ck);(function(e){window.tinymce=e,window.tinyMCE=e})(sk),function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(sk)})()

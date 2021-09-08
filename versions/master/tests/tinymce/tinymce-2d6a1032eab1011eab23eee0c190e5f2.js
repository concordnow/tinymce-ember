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
return e.apply(null,o)}}var d=function(e){return function(t){return!e(t)}},m=function(e){return function(){throw new Error(e)}},p=function(e){e()},g=s(!1),h=s(!0),v=function(){return y},y=function(){var e=function(e){return e.isNone()},t=function(e){return e()},n=function(e){return e}
return{fold:function(e,t){return e()},is:g,isSome:g,isNone:h,getOr:n,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:n,orThunk:t,map:v,each:u,bind:v,exists:g,forall:h,filter:v,equals:e,equals_:e,toArray:function(){return[]},toString:s("none()")}}(),b=function(e){var t=s(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:h,isNone:g,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return b(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:y},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(g,(function(t){return n(e,t)}))}}
return o},C={some:b,none:v,from:function(e){return null==e?y:b(e)}},w=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},x=function(e){return function(t){return typeof t===e}},S=function(e){return function(t){return e===t}},N=w("string"),E=w("object"),k=w("array"),_=S(null),A=x("boolean"),R=S(void 0),T=function(e){return null==e},D=function(e){return!T(e)},O=x("function"),B=x("number"),P=Array.prototype.slice,L=Array.prototype.indexOf,I=Array.prototype.push,M=function(e,t){return L.call(e,t)},F=function(e,t){return M(e,t)>-1},U=function(e,t){for(var n=0,r=e.length;n<r;n++){if(t(e[n],n))return!0}return!1},z=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},j=function(e,t){for(var n=0,r=e.length;n<r;n++){t(e[n],n)}},H=function(e,t){for(var n=e.length-1;n>=0;n--){t(e[n],n)}},V=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n},q=function(e,t,n){return H(e,(function(e){n=t(n,e)})),n},$=function(e,t,n){return j(e,(function(e){n=t(n,e)})),n},W=function(e,t){return function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return C.some(i)
if(n(i,r))break}return C.none()}(e,t,g)},K=function(e,t){for(var n=0,r=e.length;n<r;n++){if(t(e[n],n))return C.some(n)}return C.none()},X=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!k(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
I.apply(t,e[n])}return t}(z(e,t))},Y=function(e,t){for(var n=0,r=e.length;n<r;++n){if(!0!==t(e[n],n))return!1}return!0},G=function(e){var t=P.call(e,0)
return t.reverse(),t},J=function(e,t){return V(e,(function(e){return!F(t,e)}))},Q=function(e,t){return t>=0&&t<e.length?C.some(e[t]):C.none()},Z=function(e){return Q(e,0)},ee=function(e){return Q(e,e.length-1)},te=O(Array.from)?Array.from:function(e){return P.call(e)},ne=Object.keys,re=Object.hasOwnProperty,oe=function(e,t){for(var n=ne(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}},ie=function(e,t){return ae(e,(function(e,n){return{k:n,v:t(e,n)}}))},ae=function(e,t){var n={}
return oe(e,(function(e,r){var o=t(e,r)
n[o.k]=o.v})),n},ue=function(e){return function(t,n){e[n]=t}},ce=function(e,t,n,r){return oe(e,(function(e,o){(t(e,o)?n:r)(e,o)})),{}},se=function(e,t){var n={},r={}
return ce(e,t,ue(n),ue(r)),{t:n,f:r}},fe=function(e,t){var n={}
return ce(e,t,ue(n),u),n},le=function(e){return function(e,t){var n=[]
return oe(e,(function(e,r){n.push(t(e,r))})),n}(e,(function(e){return e}))},de=function(e,t){return me(e,t)?C.from(e[t]):C.none()},me=function(e,t){return re.call(e,t)},pe=function(e,t){return me(e,t)&&void 0!==e[t]&&null!==e[t]},ge=Array.isArray,he=function(e,t,n){var r,o
if(!e)return!1
if(n=n||e,void 0!==e.length){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return!1}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return!1
return!0},ve=function(e,t){var n=[]
return he(e,(function(r,o){n.push(t(r,o,e))})),n},ye=function(e,t){var n=[]
return he(e,(function(r,o){t&&!t(r,o,e)||n.push(r)})),n},be=function(e,t){if(e)for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},Ce=function(e,t,n,r){for(var o=R(n)?e[0]:n,i=0;i<e.length;i++)o=t.call(r,o,e[i],i)
return o},we=function(e,t,n){var r,o
for(r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r
return-1},xe=function(e){return e[e.length-1]},Se=function(){return(Se=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function Ne(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),o=0
for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a]
return r}var Ee=function(){return ke(0,0)},ke=function(e,t){return{major:e,minor:t}},_e={nu:ke,detect:function(e,t){var n=String(t).toLowerCase()
return 0===e.length?Ee():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,t)
if(!n)return{major:0,minor:0}
var r=function(e){return Number(t.replace(n,"$"+e))}
return ke(r(1),r(2))}(e,n)},unknown:Ee},Ae=function(e,t){var n=String(t).toLowerCase()
return W(e,(function(e){return e.search(n)}))},Re=function(e,t){return Ae(e,t).map((function(e){var n=_e.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))},Te=function(e,t){return Ae(e,t).map((function(e){var n=_e.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))},De=function(e,t){return-1!==e.indexOf(t)},Oe=function(e,t){return function(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t}(e,t,0)},Be=function(e){return function(t){return t.replace(e,"")}},Pe=Be(/^\s+|\s+$/g),Le=Be(/^\s+/g),Ie=Be(/\s+$/g),Me=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Fe=function(e){return function(t){return De(t,e)}},Ue=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return De(e,"edge/")&&De(e,"chrome")&&De(e,"safari")&&De(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Me],search:function(e){return De(e,"chrome")&&!De(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return De(e,"msie")||De(e,"trident")}},{name:"Opera",versionRegexes:[Me,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Fe("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Fe("firefox")},{name:"Safari",versionRegexes:[Me,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(De(e,"safari")||De(e,"mobile/"))&&De(e,"applewebkit")}}],ze=[{name:"Windows",search:Fe("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return De(e,"iphone")||De(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Fe("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Fe("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Fe("linux"),versionRegexes:[]},{name:"Solaris",search:Fe("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Fe("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:Fe("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],je={browsers:s(Ue),oses:s(ze)},He="Edge",Ve="Chrome",qe="Opera",$e="Firefox",We="Safari",Ke=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isEdge:r(He),isChrome:r(Ve),isIE:r("IE"),isOpera:r(qe),isFirefox:r($e),isSafari:r(We)}},Xe={unknown:function(){return Ke({current:void 0,version:_e.unknown()})},nu:Ke,edge:s(He),chrome:s(Ve),ie:s("IE"),opera:s(qe),firefox:s($e),safari:s(We)},Ye="Windows",Ge="Android",Je="Linux",Qe="Solaris",Ze="FreeBSD",et="ChromeOS",tt=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isWindows:r(Ye),isiOS:r("iOS"),isAndroid:r(Ge),isOSX:r("OSX"),isLinux:r(Je),isSolaris:r(Qe),isFreeBSD:r(Ze),isChromeOS:r(et)}},nt={unknown:function(){return tt({current:void 0,version:_e.unknown()})},nu:tt,windows:s(Ye),ios:s("iOS"),android:s(Ge),linux:s(Je),osx:s("OSX"),solaris:s(Qe),freebsd:s(Ze),chromeos:s(et)},rt=function(e,t){var n=je.browsers(),r=je.oses(),o=Re(n,e).fold(Xe.unknown,Xe.nu),i=Te(r,e).fold(nt.unknown,nt.nu),a=function(e,t,n,r){var o=e.isiOS()&&!0===/ipad/i.test(n),i=e.isiOS()&&!o,a=e.isiOS()||e.isAndroid(),u=a||r("(pointer:coarse)"),c=o||!i&&a&&r("(min-device-width:768px)"),f=i||a&&!c,l=t.isSafari()&&e.isiOS()&&!1===/safari/i.test(n),d=!f&&!c&&!l
return{isiPad:s(o),isiPhone:s(i),isTablet:s(c),isPhone:s(f),isTouch:s(u),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:s(l),isDesktop:s(d)}}(i,o,e,t)
return{browser:o,os:i,deviceType:a}},ot=function(e){return window.matchMedia(e).matches},it=function(e){var t,n=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return n||(n=!0,t=e.apply(null,r)),t}}((function(){return rt(navigator.userAgent,ot)})),at=function(){return it()},ut=navigator.userAgent,ct=at(),st=ct.browser,ft=ct.os,lt=ct.deviceType,dt=/WebKit/.test(ut)&&!st.isEdge(),mt="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,pt=-1!==ut.indexOf("Windows Phone"),gt={opera:st.isOpera(),webkit:dt,ie:!(!st.isIE()&&!st.isEdge())&&st.version.major,gecko:st.isFirefox(),mac:ft.isOSX()||ft.isiOS(),iOS:lt.isiPad()||lt.isiPhone(),android:ft.isAndroid(),contentEditable:!0,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:!0,range:window.getSelection&&"Range"in window,documentMode:st.isIE()?document.documentMode||7:10,fileApi:mt,ceFalse:!0,cacheSuffix:null,container:null,experimentalShadowDom:!1,canHaveCSP:!st.isIE(),desktop:lt.isDesktop(),windowsPhone:pt,browser:{current:st.current,version:st.version,isChrome:st.isChrome,isEdge:st.isEdge,isFirefox:st.isFirefox,isIE:st.isIE,isOpera:st.isOpera,isSafari:st.isSafari},os:{current:ft.current,version:ft.version,isAndroid:ft.isAndroid,isChromeOS:ft.isChromeOS,isFreeBSD:ft.isFreeBSD,isiOS:ft.isiOS,isLinux:ft.isLinux,isOSX:ft.isOSX,isSolaris:ft.isSolaris,isWindows:ft.isWindows},deviceType:{isDesktop:lt.isDesktop,isiPad:lt.isiPad,isiPhone:lt.isiPhone,isPhone:lt.isPhone,isTablet:lt.isTablet,isTouch:lt.isTouch,isWebView:lt.isWebView}},ht=/^\s*|\s*$/g,vt=function(e){return null==e?"":(""+e).replace(ht,"")},yt=function(e,t){return t?!("array"!==t||!ge(e))||typeof e===t:void 0!==e},bt=function(e,t,n,r){r=r||this,e&&(n&&(e=e[n]),he(e,(function(e,o){if(!1===t.call(r,e,o,n))return!1
bt(e,t,n,r)})))},Ct={trim:vt,isArray:ge,is:yt,toArray:function(e){if(ge(e))return e
for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n]
return t},makeMap:function(e,t,n){var r
for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={}
return n},each:he,map:ve,grep:ye,inArray:be,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=0;r<t.length;r++){var o=t[r]
for(var i in o)if(o.hasOwnProperty(i)){var a=o[i]
void 0!==a&&(e[i]=a)}}return e},create:function(e,t,n){var r,o,i,a=this,u=0,c=(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],s=a.createNS(e[3].replace(/\.\w+$/,""),n)
if(!s[c]){if("static"===e[2])return s[c]=t,void(this.onCreate&&this.onCreate(e[2],e[3],s[c]))
t[c]||(t[c]=function(){},u=1),s[c]=t[c],a.extend(s[c].prototype,t),e[5]&&(r=a.resolve(e[5]).prototype,o=e[5].match(/\.(\w+)$/i)[1],i=s[c],s[c]=u?function(){return r[o].apply(this,arguments)}:function(){return this.parent=r[o],i.apply(this,arguments)},s[c].prototype[c]=s[c],a.each(r,(function(e,t){s[c].prototype[t]=r[t]})),a.each(t,(function(e,t){r[t]?s[c].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==c&&(s[c].prototype[t]=e)}))),a.each(t.static,(function(e,t){s[c][t]=e}))}},walk:bt,createNS:function(e,t){var n,r
for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r]
return t},resolve:function(e,t){var n,r
for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||yt(e,"array")?e:ve(e.split(t||","),vt)},_addCacheSuffix:function(e){var t=gt.cacheSuffix
return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},wt=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},xt={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return wt(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e)
return wt(n)},fromText:function(e,t){var n=(t||document).createTextNode(e)
return wt(n)},fromDom:wt,fromPoint:function(e,t,n){return C.from(e.dom.elementFromPoint(t,n)).map(wt)}},St=function(e,t){var n=[],r=function(e){return n.push(e),t(e)},o=t(e)
do{o=o.bind(r)}while(o.isSome())
return n},Nt=function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},Et=function(e){return 1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount},kt=function(e,t){return e.dom===t.dom},_t=function(e,t){return n=e.dom,r=t.dom,function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)}(n,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var n,r},At=function(e,t){return at().browser.isIE()?_t(e,t):function(e,t){var n=e.dom,r=t.dom
return n!==r&&n.contains(r)}(e,t)},Rt=("undefined"!=typeof window?window:Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Tt=function(e){return e.dom.nodeType},Dt=function(e){return function(t){return Tt(t)===e}},Ot=Dt(1),Bt=Dt(3),Pt=Dt(9),Lt=Dt(11),It=function(e){return xt.fromDom(e.dom.ownerDocument)},Mt=function(e){return Pt(e)?e:It(e)},Ft=function(e){return xt.fromDom(Mt(e).dom.defaultView)},Ut=function(e){return C.from(e.dom.parentNode).map(xt.fromDom)},zt=function(e){return C.from(e.dom.previousSibling).map(xt.fromDom)},jt=function(e){return C.from(e.dom.nextSibling).map(xt.fromDom)},Ht=function(e){return G(St(e,zt))},Vt=function(e){return St(e,jt)},qt=function(e){return z(e.dom.childNodes,xt.fromDom)},$t=function(e,t){var n=e.dom.childNodes
return C.from(n[t]).map(xt.fromDom)},Wt=function(e){return $t(e,0)},Kt=function(e){return $t(e,e.dom.childNodes.length-1)},Xt=function(e){return Lt(e)},Yt=O(Element.prototype.attachShadow)&&O(Node.prototype.getRootNode),Gt=s(Yt),Jt=Yt?function(e){return xt.fromDom(e.dom.getRootNode())}:Mt,Qt=function(e){return Xt(e)?e:function(e){var t=e.dom.head
if(null==t)throw new Error("Head is not available yet")
return xt.fromDom(t)}(Mt(e))},Zt=function(e){return xt.fromDom(e.dom.host)},en=function(e){return D(e.dom.shadowRoot)},tn=function(e,t){Ut(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},nn=function(e,t){jt(e).fold((function(){Ut(e).each((function(e){on(e,t)}))}),(function(e){tn(e,t)}))},rn=function(e,t){Wt(e).fold((function(){on(e,t)}),(function(n){e.dom.insertBefore(t.dom,n.dom)}))},on=function(e,t){e.dom.appendChild(t.dom)},an=function(e,t){j(t,(function(t){on(e,t)}))},un=function(e){e.dom.textContent="",j(qt(e),(function(e){cn(e)}))},cn=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},sn=function(e){var t,n=qt(e)
n.length>0&&(t=e,j(n,(function(e){tn(t,e)}))),cn(e)},fn=function(e){var t=Bt(e)?e.dom.parentNode:e.dom
if(null==t||null===t.ownerDocument)return!1
var n,r,o=t.ownerDocument
return function(e){var t=Jt(e)
return Xt(t)?C.some(t):C.none()}(xt.fromDom(t)).fold((function(){return o.body.contains(t)}),(n=fn,r=Zt,function(e){return n(r(e))}))},ln=function(e,t){return{left:e,top:t,translate:function(n,r){return ln(e+n,t+r)}}},dn=ln,mn=function(e,t){return void 0!==e?e:void 0!==t?t:0},pn=function(e){var t=e.dom,n=t.ownerDocument.body
return n===t?dn(n.offsetLeft,n.offsetTop):fn(e)?function(e){var t=e.getBoundingClientRect()
return dn(t.left,t.top)}(t):dn(0,0)},gn=function(e){var t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop
return dn(n,r)},hn=function(e,t,n){var r=(void 0!==n?n.dom:document).defaultView
r&&r.scrollTo(e,t)},vn=function(e,t){at().browser.isSafari()&&O(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)},yn=function(e,t,n,r){return{x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}},bn=function(e){var t=void 0===e?window:e,n=t.document,r=gn(xt.fromDom(n))
return function(e){var t=void 0===e?window:e
return C.from(t.visualViewport)}(t).fold((function(){var e=t.document.documentElement,n=e.clientWidth,o=e.clientHeight
return yn(r.left,r.top,n,o)}),(function(e){return yn(Math.max(e.pageLeft,r.left),Math.max(e.pageTop,r.top),e.width,e.height)}))},Cn=function(e){return function(t){return!!t&&t.nodeType===e}},wn=function(e){return!!e&&!Object.getPrototypeOf(e)},xn=Cn(1),Sn=function(e){var t=e.map((function(e){return e.toLowerCase()}))
return function(e){if(e&&e.nodeName){var n=e.nodeName.toLowerCase()
return F(t,n)}return!1}},Nn=function(e,t){var n=t.toLowerCase().split(" ")
return function(t){var r
if(xn(t))for(r=0;r<n.length;r++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
if((o?o.getPropertyValue(e):null)===n[r])return!0}return!1}},En=function(e){return function(t){return xn(t)&&t.hasAttribute(e)}},kn=function(e){return xn(e)&&e.hasAttribute("data-mce-bogus")},_n=function(e){return xn(e)&&"TABLE"===e.tagName},An=function(e){return function(t){if(xn(t)){if(t.contentEditable===e)return!0
if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}},Rn=Sn(["textarea","input"]),Tn=Cn(3),Dn=Cn(8),On=Cn(9),Bn=Cn(11),Pn=Sn(["br"]),Ln=Sn(["img"]),In=An("true"),Mn=An("false"),Fn=Sn(["td","th"]),Un=Sn(["video","audio","object","embed"]),zn=function(e){return void 0!==e.style&&O(e.style.getPropertyValue)},jn=function(e,t,n){if(!(N(n)||A(n)||B(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")},Hn=function(e,t,n){jn(e.dom,t,n)},Vn=function(e,t){var n=e.dom
oe(t,(function(e,t){jn(n,t,e)}))},qn=function(e,t){var n=e.dom.getAttribute(t)
return null===n?void 0:n},$n=function(e,t){return C.from(qn(e,t))},Wn=function(e,t){e.dom.removeAttribute(t)},Kn=function(e,t){var n=e.dom
oe(t,(function(e,t){(function(e,t,n){if(!N(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
zn(e)&&e.style.setProperty(t,n)})(n,t,e)}))},Xn=function(e,t){var n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t)
return""!==r||fn(e)?r:Yn(n,t)},Yn=function(e,t){return zn(e)?e.style.getPropertyValue(t):""},Gn=function(e,t){var n=e.dom,r=Yn(n,t)
return C.from(r).filter((function(e){return e.length>0}))},Jn=function(e){var t={},n=e.dom
if(zn(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r)
t[o]=n.style[o]}return t},Qn=at().browser,Zn=function(e){return W(e,Ot)},er=function(e,t){return e.children&&F(e.children,t)},tr=function(e,t,n){var r,o,i=0,a=0,u=e.ownerDocument
if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===Xn(xt.fromDom(e),"position"))return{x:i=(o=t.getBoundingClientRect()).left+(u.documentElement.scrollLeft||e.scrollLeft)-u.documentElement.clientLeft,y:a=o.top+(u.documentElement.scrollTop||e.scrollTop)-u.documentElement.clientTop}
for(r=t;r&&r!==n&&r.nodeType&&!er(r,n);)i+=r.offsetLeft||0,a+=r.offsetTop||0,r=r.offsetParent
for(r=t.parentNode;r&&r!==n&&r.nodeType&&!er(r,n);)i-=r.scrollLeft||0,a-=r.scrollTop||0,r=r.parentNode
a+=function(e){return Qn.isFirefox()&&"table"===Rt(e)?Zn(qt(e)).filter((function(e){return"caption"===Rt(e)})).bind((function(e){return Zn(Vt(e)).map((function(t){var n=t.dom.offsetTop,r=e.dom.offsetTop,o=e.dom.offsetHeight
return n<=r?-o:0}))})).getOr(0):0}(xt.fromDom(t))}return{x:i,y:a}},nr={},rr={exports:nr};(function(e,t,n,r){(function(r){if("object"==typeof t&&void 0!==n)n.exports=r()
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
t.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)}))})(void 0,nr,rr,void 0)
var or=rr.exports.boltExport,ir=function(e){var t=C.none(),n=[],r=function(e){o()?a(e):n.push(e)},o=function(){return t.isSome()},i=function(e){j(e,a)},a=function(e){t.each((function(t){setTimeout((function(){e(t)}),0)}))}
return e((function(e){o()||(t=C.some(e),i(n),n=[])})),{get:r,map:function(e){return ir((function(t){r((function(n){t(e(n))}))}))},isReady:o}},ar={nu:ir,pure:function(e){return ir((function(t){t(e)}))}},ur=function(e){setTimeout((function(){throw e}),0)},cr=function(e){var t=function(t){e().then(t,ur)}
return{map:function(t){return cr((function(){return e().then(t)}))},bind:function(t){return cr((function(){return e().then((function(e){return t(e).toPromise()}))}))},anonBind:function(t){return cr((function(){return e().then((function(){return t.toPromise()}))}))},toLazy:function(){return ar.nu(t)},toCached:function(){var t=null
return cr((function(){return null===t&&(t=e()),t}))},toPromise:e,get:t}},sr=function(e){return cr((function(){return new or(e)}))},fr=function(e,t){return t((function(t){var n=[],r=0
0===e.length?t([]):j(e,(function(o,i){o.get(function(o){return function(i){n[o]=i,++r>=e.length&&t(n)}}(i))}))}))},lr=function(e){return{is:function(t){return e===t},isValue:h,isError:g,getOr:s(e),getOrThunk:s(e),getOrDie:s(e),or:function(t){return lr(e)},orThunk:function(t){return lr(e)},fold:function(t,n){return n(e)},map:function(t){return lr(t(e))},mapError:function(t){return lr(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOptional:function(){return C.some(e)}}},dr=function(e){return{is:g,isValue:g,isError:h,getOr:f,getOrThunk:function(e){return e()},getOrDie:function(){return m(String(e))()},or:function(e){return e},orThunk:function(e){return e()},fold:function(t,n){return t(e)},map:function(t){return dr(e)},mapError:function(t){return dr(t(e))},each:u,bind:function(t){return dr(e)},exists:g,forall:h,toOptional:C.none}},mr={value:lr,error:dr,fromOption:function(e,t){return e.fold((function(){return dr(t)}),lr)}},pr=function(e){if(!k(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
return j(e,(function(r,o){var i=ne(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],u=r[a]
if(void 0!==n[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!k(u))throw new Error("case arguments must be an array")
t.push(a),n[a]=function(){var n=arguments.length
if(n!==u.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+u.length+" ("+u+"), got "+n)
for(var r=new Array(n),i=0;i<r.length;i++)r[i]=arguments[i]
var c=function(e){var n=ne(e)
if(t.length!==n.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+n.join(","))
if(!Y(t,(function(e){return F(n,e)})))throw new Error("Not all branches were specified when using match. Specified: "+n.join(", ")+"\nRequired: "+t.join(", "))
return e[a].apply(null,r)}
return{fold:function(){if(arguments.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+arguments.length)
var t=arguments[o]
return t.apply(null,r)},match:c,log:function(e){console.log(e,{constructors:t,constructor:a,params:r})}}}})),n},gr=(pr([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(e){return e.fold(f,f)})
function hr(e,t,n,r,o){return e(n,r)?C.some(n):O(o)&&o(n)?C.none():t(n,r,o)}var vr,yr=function(e,t,n){for(var r=e.dom,o=O(n)?n:g;r.parentNode;){r=r.parentNode
var i=xt.fromDom(r)
if(t(i))return C.some(i)
if(o(i))break}return C.none()},br=function(e,t,n){return hr((function(e,t){return t(e)}),yr,e,t,n)},Cr=function(e,t){return W(e.dom.childNodes,(function(e){return t(xt.fromDom(e))})).map(xt.fromDom)},wr=function(e,t,n){return yr(e,(function(e){return Nt(e,t)}),n)},xr=function(e,t){return function(e,t){var n=void 0===t?document:t.dom
return Et(n)?C.none():C.from(n.querySelector(e)).map(xt.fromDom)}(t,e)},Sr=function(e,t,n){return hr((function(e,t){return Nt(e,t)}),wr,e,t,n)},Nr=window.Promise?window.Promise:function(){function e(e,t){return function(){e.apply(t,arguments)}}var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},n=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof t)throw new TypeError("not a function")
this._state=null,this._value=null,this._deferreds=[],s(t,e(i,this),e(a,this))},r=n.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)}
function o(e){var t=this
null!==this._state?r((function(){var n=t._state?e.onFulfilled:e.onRejected
if(null!==n){var r
try{r=n(t._value)}catch(o){return void e.reject(o)}e.resolve(r)}else(t._state?e.resolve:e.reject)(t._value)})):this._deferreds.push(e)}function i(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if("function"==typeof n)return void s(e(n,t),e(i,this),e(a,this))}this._state=!0,this._value=t,u.call(this)}catch(r){a.call(this,r)}}function a(e){this._state=!1,this._value=e,u.call(this)}function u(){for(var e=0,t=this._deferreds.length;e<t;e++)o.call(this,this._deferreds[e])
this._deferreds=null}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function s(e,t,n){var r=!1
try{e((function(e){r||(r=!0,t(e))}),(function(e){r||(r=!0,n(e))}))}catch(o){if(r)return
r=!0,n(o)}}return n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var r=this
return new n((function(n,i){o.call(r,new c(e,t,n,i))}))},n.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&t(arguments[0])?arguments[0]:arguments)
return new n((function(t,n){if(0===e.length)return t([])
var r=e.length
function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then
if("function"==typeof u)return void u.call(a,(function(e){o(i,e)}),n)}e[i]=a,0==--r&&t(e)}catch(c){n(c)}}for(var i=0;i<e.length;i++)o(i,e[i])}))},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,n){n(e)}))},n.race=function(e){return new n((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},n}(),Er=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},kr=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},_r=function(e,t){var n,r=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
clearTimeout(n),n=Er((function(){e.apply(this,r)}),t)}
return r.stop=function(){clearTimeout(n)},r},Ar={requestAnimationFrame:function(e,t){vr?vr.then(e):vr=new Nr((function(e){t||(t=document.body),function(e,t){var n,r=window.requestAnimationFrame,o=["ms","moz","webkit"]
for(n=0;n<o.length&&!r;n++)r=window[o[n]+"RequestAnimationFrame"]
r||(r=function(e){window.setTimeout(e,0)}),r(e,t)}(e,t)})).then(e)},setTimeout:Er,setInterval:kr,setEditorTimeout:function(e,t,n){return Er((function(){e.removed||t()}),n)},setEditorInterval:function(e,t,n){var r=kr((function(){e.removed?clearInterval(r):t()}),n)
return r},debounce:_r,throttle:_r,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}}
function Rr(e,t){void 0===t&&(t={})
var n=0,r={},o=xt.fromDom(e),i=Mt(o),a=t.maxLoadTime||5e3,u=function(u,c,s){var f,l=Ct._addCacheSuffix(u),d=function(e){return de(r,e).getOrThunk((function(){return{id:"mce-u"+n++,passed:[],failed:[],count:0}}))}(l)
r[l]=d,d.count++
var m=function(e,t){for(var n=e.length;n--;)e[n]()
d.status=t,d.passed=[],d.failed=[],f&&(f.onload=null,f.onerror=null,f=null)},p=function(){return m(d.passed,2)},g=function(){return m(d.failed,3)},h=function(){var t
t=h,function(){for(var t=e.styleSheets,n=t.length;n--;){var r=t[n].ownerNode
if(r&&r.id===f.id)return p(),!0}return!1}()||(Date.now()-b<a?Ar.setTimeout(t):g())}
if(c&&d.passed.push(c),s&&d.failed.push(s),1!==d.status)if(2!==d.status)if(3!==d.status){d.status=1
var v=xt.fromTag("link",i.dom)
Vn(v,{rel:"stylesheet",type:"text/css",id:d.id})
var y,b=Date.now()
t.contentCssCors&&Hn(v,"crossOrigin","anonymous"),t.referrerPolicy&&Hn(v,"referrerpolicy",t.referrerPolicy),(f=v.dom).onload=h,f.onerror=g,y=v,on(Qt(o),y),Hn(v,"href",l)}else g()
else p()},f=function(e){return sr((function(t){u(e,c(t,s(mr.value(e))),c(t,s(mr.error(e))))}))},l=function(e){var t=Ct._addCacheSuffix(e)
de(r,t).each((function(e){var n,i
0===--e.count&&(delete r[t],n=e.id,i=Qt(o),xr(i,"#"+n).each(cn))}))}
return{load:u,loadAll:function(e,t,n){var r;(r=z(e,f),fr(r,sr)).get((function(e){var r=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a,o)?n:r).push(a)}return{pass:n,fail:r}}(e,(function(e){return e.isValue()}))
r.fail.length>0?n(r.fail.map(gr)):t(r.pass.map(gr))}))},unload:l,unloadAll:function(e){j(e,(function(e){l(e)}))},_setReferrerPolicy:function(e){t.referrerPolicy=e}}}var Tr,Dr,Or=function(){var e=new WeakMap
return{forElement:function(t,n){var r=Jt(t).dom
return C.from(e.get(r)).getOrThunk((function(){var t=Rr(r,n)
return e.set(r,t),t}))}}}(),Br=function(){function e(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}return e.prototype.current=function(){return this.node},e.prototype.next=function(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node},e.prototype.prev=function(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node},e.prototype.prev2=function(e){return this.node=this.findPreviousNode(this.node,"lastChild","previousSibling",e),this.node},e.prototype.findSibling=function(e,t,n,r){var o,i
if(e){if(!r&&e[t])return e[t]
if(e!==this.rootNode){if(o=e[n])return o
for(i=e.parentNode;i&&i!==this.rootNode;i=i.parentNode)if(o=i[n])return o}}},e.prototype.findPreviousNode=function(e,t,n,r){var o,i,a
if(e){if(o=e[n],this.rootNode&&o===this.rootNode)return
if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a
return o}if((i=e.parentNode)&&i!==this.rootNode)return i}},e}(),Pr=function(e){var t
return function(n){return(t=t||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r]
n[String(i)]=t(i,r)}return n}(e,h)).hasOwnProperty(Rt(n))}},Lr=Pr(["h1","h2","h3","h4","h5","h6"]),Ir=Pr(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),Mr=function(e){return Ot(e)&&!Ir(e)},Fr=function(e){return Ot(e)&&"br"===Rt(e)},Ur=Pr(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),zr=Pr(["ul","ol","dl"]),jr=Pr(["li","dd","dt"]),Hr=Pr(["thead","tbody","tfoot"]),Vr=Pr(["td","th"]),qr=Pr(["pre","script","textarea","style"]),$r=" ",Wr="\ufeff",Kr=function(e){return"\ufeff"===e},Xr=function(e){return e.replace(/\uFEFF/g,"")},Yr=xn,Gr=Tn,Jr=function(e){return Gr(e)&&(e=e.parentNode),Yr(e)&&e.hasAttribute("data-mce-caret")},Qr=function(e){return Gr(e)&&Kr(e.data)},Zr=function(e){return Jr(e)||Qr(e)},eo=function(e){return e.firstChild!==e.lastChild||!Pn(e.firstChild)},to=function(e){var t=e.container()
return!!Tn(t)&&(t.data.charAt(e.offset())===Wr||e.isAtStart()&&Qr(t.previousSibling))},no=function(e){var t=e.container()
return!!Tn(t)&&(t.data.charAt(e.offset()-1)===Wr||e.isAtEnd()&&Qr(t.nextSibling))},ro=function(e,t,n){var r,o=t.ownerDocument.createElement(e)
o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(((r=document.createElement("br")).setAttribute("data-mce-bogus","1"),r))
var i=t.parentNode
return n?i.insertBefore(o,t):t.nextSibling?i.insertBefore(o,t.nextSibling):i.appendChild(o),o},oo=function(e){return Gr(e)&&e.data[0]===Wr},io=function(e){return Gr(e)&&e.data[e.data.length-1]===Wr},ao=function(e){return e&&e.hasAttribute("data-mce-caret")?(t=e.getElementsByTagName("br"),n=t[t.length-1],kn(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null
var t,n},uo=In,co=Mn,so=Pn,fo=Tn,lo=Sn(["script","style","textarea"]),mo=Sn(["img","input","textarea","hr","iframe","video","audio","object","embed"]),po=Sn(["table"]),go=Zr,ho=function(e){return!go(e)&&(fo(e)?!lo(e.parentNode):mo(e)||so(e)||po(e)||vo(e))},vo=function(e){return!1===function(e){return xn(e)&&"true"===e.getAttribute("unselectable")}(e)&&co(e)},yo=function(e,t){return ho(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(vo(e))return!1
if(uo(e))return!0}return!0}(e,t)},bo=/^[ \t\r\n]*$/,Co=function(e){return bo.test(e)},wo=function(e,t){var n,r,o,i=xt.fromDom(t),a=xt.fromDom(e)
return n=a,r="pre,code",o=l(kt,i),wr(n,r,o).isSome()},xo=function(e,t){return ho(e)&&!1===function(e,t){return Tn(e)&&Co(e.data)&&!1===wo(e,t)}(e,t)||function(e){return xn(e)&&"A"===e.nodeName&&!e.hasAttribute("href")&&(e.hasAttribute("name")||e.hasAttribute("id"))}(e)||So(e)},So=En("data-mce-bookmark"),No=En("data-mce-bogus"),Eo=(Tr="data-mce-bogus",Dr="all",function(e){return xn(e)&&e.getAttribute(Tr)===Dr}),ko=function(e,t){return void 0===t&&(t=!0),function(e,t){var n,r=0
if(xo(e,e))return!1
if(!(n=e.firstChild))return!0
var o=new Br(n,e)
do{if(t){if(Eo(n)){n=o.next(!0)
continue}if(No(n)){n=o.next()
continue}}if(Pn(n))r++,n=o.next()
else{if(xo(n,e))return!1
n=o.next()}}while(n)
return r<=1}(e.dom,t)},_o=function(e,t){return D(e)&&(xo(e,t)||Mr(xt.fromDom(e)))},Ao=function(e){return function(e){return"span"===e.nodeName.toLowerCase()}(e)&&"bookmark"===e.getAttribute("data-mce-type")},Ro=function(e,t){return Tn(e)&&e.data.length>0&&function(e,t){var n=new Br(e,t).prev(!1),r=new Br(e,t).next(!1),o=R(n)||_o(n,t),i=R(r)||_o(r,t)
return o&&i}(e,t)},To=function(e,t,n){var r=n||t
if(xn(t)&&Ao(t))return t
for(var o=t.childNodes,i=o.length-1;i>=0;i--)To(e,o[i],r)
if(xn(t)){var a=t.childNodes
1===a.length&&Ao(a[0])&&t.parentNode.insertBefore(a[0],t)}return function(e){return Bn(e)||On(e)}(t)||xo(t,r)||function(e){return!!xn(e)&&e.childNodes.length>0}(t)||Ro(t,r)||e.remove(t),t},Do=Ct.makeMap,Oo=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Bo=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Po=/[<>&\"\']/g,Lo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,Io={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},Mo={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},Fo={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},Uo=function(e,t){var n,r,o,i={}
if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),Mo[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r)
return i}},zo=Uo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),jo=function(e,t){return e.replace(t?Oo:Bo,(function(e){return Mo[e]||e}))},Ho=function(e,t){return e.replace(t?Oo:Bo,(function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":Mo[e]||"&#"+e.charCodeAt(0)+";"}))},Vo=function(e,t,n){return n=n||zo,e.replace(t?Oo:Bo,(function(e){return Mo[e]||n[e]||e}))},qo={encodeRaw:jo,encodeAllRaw:function(e){return(""+e).replace(Po,(function(e){return Mo[e]||e}))},encodeNumeric:Ho,encodeNamed:Vo,getEncodeFunc:function(e,t){var n=Uo(t)||zo,r=Do(e.replace(/\+/g,","))
return r.named&&r.numeric?function(e,t){return e.replace(t?Oo:Bo,(function(e){return void 0!==Mo[e]?Mo[e]:void 0!==n[e]?n[e]:e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"}))}:r.named?t?function(e,t){return Vo(e,t,n)}:Vo:r.numeric?Ho:jo},decode:function(e){return e.replace(Lo,(function(e,t){return t?(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))>65535?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):Io[t]||String.fromCharCode(t):Fo[e]||zo[e]||function(e){var t=xt.fromTag("div").dom
return t.innerHTML=e,t.textContent||t.innerText||e}(e)}))}},$o={},Wo={},Ko=Ct.makeMap,Xo=Ct.each,Yo=Ct.extend,Go=Ct.explode,Jo=Ct.inArray,Qo=function(e,t){return(e=Ct.trim(e))?e.split(t||" "):[]},Zo=function(e,t){var n
return e&&(n={},"string"==typeof e&&(e={"*":e}),Xo(e,(function(e,r){n[r]=n[r.toUpperCase()]="map"===t?Ko(e,/[, ]/):Go(e,/[, ]/)}))),n}
function ei(e){var t={},n={},r=[],o={},i={},a=function(t,n,r){var o=e[t]
return o?o=Ko(o,/[, ]/,Ko(o.toUpperCase(),/[, ]/)):(o=$o[t])||(o=Ko(n," ",Ko(n.toUpperCase()," ")),o=Yo(o,r),$o[t]=o),o},u=function(e){var t,n,r,o,i,a,u={},c=function(e,n,r){var o,i,a,c=function(e,t){var n,r,o={}
for(n=0,r=e.length;n<r;n++)o[e[n]]=t||{}
return o}
n=n||"","string"==typeof(r=r||[])&&(r=Qo(r))
var s=Qo(e)
for(o=s.length;o--;)a={attributes:c(i=Qo([t,n].join(" "))),attributesOrder:i,children:c(r,Wo)},u[s[o]]=a},s=function(e,t){var n,r,o,i,a=Qo(e)
n=a.length
for(var c=Qo(t);n--;)for(r=u[a[n]],o=0,i=c.length;o<i;o++)r.attributes[c[o]]={},r.attributesOrder.push(c[o])}
if($o[e])return $o[e]
if(t="id accesskey class dir lang style tabindex title role",n="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",r="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(t+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",n+=" article aside details dialog figure main header footer hgroup section nav",r+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(t+=" xml:lang",r=[r,a="acronym applet basefont big font strike tt"].join(" "),Xo(Qo(a),(function(e){c(e,"",r)})),n=[n,i="center dir isindex noframes"].join(" "),o=[n,r].join(" "),Xo(Qo(i),(function(e){c(e,"",o)}))),o=o||[n,r].join(" "),c("html","manifest","head body"),c("head","","base command link meta noscript script style title"),c("title hr noscript br"),c("base","href target"),c("link","href rel media hreflang type sizes hreflang"),c("meta","name http-equiv content charset"),c("style","media type scoped"),c("script","src async defer type charset"),c("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",o),c("address dt dd div caption","",o),c("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",r),c("blockquote","cite",o),c("ol","reversed start type","li"),c("ul","","li"),c("li","value",o),c("dl","","dt dd"),c("a","href target rel media hreflang type",r),c("q","cite",r),c("ins del","cite datetime",o),c("img","src sizes srcset alt usemap ismap width height"),c("iframe","src name width height",o),c("embed","src type width height"),c("object","data type typemustmatch name usemap form width height",[o,"param"].join(" ")),c("param","name value"),c("map","name",[o,"area"].join(" ")),c("area","alt coords shape href target rel media hreflang type"),c("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),c("colgroup","span","col"),c("col","span"),c("tbody thead tfoot","","tr"),c("tr","","td th"),c("td","colspan rowspan headers",o),c("th","colspan rowspan headers scope abbr",o),c("form","accept-charset action autocomplete enctype method name novalidate target",o),c("fieldset","disabled form name",[o,"legend"].join(" ")),c("label","form for",r),c("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),c("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?o:r),c("select","disabled form multiple name required size","option optgroup"),c("optgroup","disabled label","option"),c("option","disabled label selected value"),c("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),c("menu","type label",[o,"li"].join(" ")),c("noscript","",o),"html4"!==e&&(c("wbr"),c("ruby","",[r,"rt rp"].join(" ")),c("figcaption","",o),c("mark rt rp summary bdi","",r),c("canvas","width height",o),c("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[o,"track source"].join(" ")),c("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[o,"track source"].join(" ")),c("picture","","img source"),c("source","src srcset type media sizes"),c("track","kind src srclang label default"),c("datalist","",[r,"option"].join(" ")),c("article section nav aside main header footer","",o),c("hgroup","","h1 h2 h3 h4 h5 h6"),c("figure","",[o,"figcaption"].join(" ")),c("time","datetime",r),c("dialog","open",o),c("command","type label icon disabled checked radiogroup command"),c("output","for form name",r),c("progress","value max",r),c("meter","value min max low high optimum",r),c("details","open",[o,"summary"].join(" ")),c("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e){s("script","language xml:space"),s("style","xml:space"),s("object","declare classid code codebase codetype archive standby align border hspace vspace"),s("embed","align name hspace vspace"),s("param","valuetype type"),s("a","charset name rev shape coords"),s("br","clear"),s("applet","codebase archive code object alt name width height align hspace vspace"),s("img","name longdesc align border hspace vspace"),s("iframe","longdesc frameborder marginwidth marginheight scrolling align"),s("font basefont","size color face"),s("input","usemap align"),s("select"),s("textarea"),s("h1 h2 h3 h4 h5 h6 div p legend caption","align"),s("ul","type compact"),s("li","type"),s("ol dl menu dir","compact"),s("pre","width xml:space"),s("hr","align noshade size width"),s("isindex","prompt"),s("table","summary width frame rules cellspacing cellpadding align bgcolor"),s("col","width align char charoff valign"),s("colgroup","width align char charoff valign"),s("thead","align char charoff valign"),s("tr","align char charoff valign bgcolor"),s("th","axis align char charoff valign nowrap bgcolor width height"),s("form","accept"),s("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),s("tfoot","align char charoff valign")
s("tbody","align char charoff valign"),s("area","nohref"),s("body","background bgcolor text link vlink alink")}return"html4"!==e&&(s("input button select textarea","autofocus"),s("input textarea","placeholder"),s("a","download"),s("link script img","crossorigin"),s("img","loading"),s("iframe","sandbox seamless allowfullscreen loading")),Xo(Qo("a form meter progress dfn"),(function(e){u[e]&&delete u[e].children[e]})),delete u.caption.children.table,delete u.script,$o[e]=u,u}((e=e||{}).schema)
!1===e.verify_html&&(e.valid_elements="*[*]")
var c=Zo(e.valid_styles),s=Zo(e.invalid_styles,"map"),f=Zo(e.valid_classes,"map"),l=a("whitespace_elements","pre script noscript style textarea video audio iframe object code"),d=a("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),m=a("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),p=a("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),g="td th iframe video audio object script code",h=a("non_empty_elements",g+" pre",m),v=a("move_caret_before_on_enter_elements",g+" table",m),y=a("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),b=a("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",y),C=a("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
Xo((e.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),(function(e){i[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var w=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},x=function(e){var n,o,i,a,u,c,s,f,l,d,m,p,g,h,v,y,b,C,x=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,S=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,N=/[*?+]/
if(e){var E=Qo(e,",")
for(t["@"]&&(y=t["@"].attributes,b=t["@"].attributesOrder),n=0,o=E.length;n<o;n++)if(u=x.exec(E[n])){if(h=u[1],l=u[2],v=u[3],f=u[5],c={attributes:p={},attributesOrder:g=[]},"#"===h&&(c.paddEmpty=!0),"-"===h&&(c.removeEmpty=!0),"!"===u[4]&&(c.removeEmptyAttrs=!0),y&&(oe(y,(function(e,t){p[t]=e})),g.push.apply(g,b)),f)for(i=0,a=(f=Qo(f,"|")).length;i<a;i++)if(u=S.exec(f[i])){if(s={},m=u[1],d=u[2].replace(/[\\:]:/g,":"),h=u[3],C=u[4],"!"===m&&(c.attributesRequired=c.attributesRequired||[],c.attributesRequired.push(d),s.required=!0),"-"===m){delete p[d],g.splice(Jo(g,d),1)
continue}h&&("="===h&&(c.attributesDefault=c.attributesDefault||[],c.attributesDefault.push({name:d,value:C}),s.defaultValue=C),":"===h&&(c.attributesForced=c.attributesForced||[],c.attributesForced.push({name:d,value:C}),s.forcedValue=C),"<"===h&&(s.validValues=Ko(C,"?"))),N.test(d)?(c.attributePatterns=c.attributePatterns||[],s.pattern=w(d),c.attributePatterns.push(s)):(p[d]||g.push(d),p[d]=s)}y||"@"!==l||(y=p,b=g),v&&(c.outputName=l,t[v]=c),N.test(l)?(c.pattern=w(l),r.push(c)):t[l]=c}}},S=function(e){t={},r=[],x(e),Xo(u,(function(e,t){n[t]=e.children}))},N=function(e){var r=/^(~)?(.+)$/
e&&($o.text_block_elements=$o.block_elements=null,Xo(Qo(e,","),(function(e){var i=r.exec(e),a="~"===i[1],u=a?"span":"div",c=i[2]
if(n[c]=n[u],o[c]=u,a||(b[c.toUpperCase()]={},b[c]={}),!t[c]){var s=t[u]
delete(s=Yo({},s)).removeEmptyAttrs,delete s.removeEmpty,t[c]=s}Xo(n,(function(e,t){e[u]&&(n[t]=e=Yo({},n[t]),e[c]=e[u])}))})))},E=function(t){var r=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/
$o[e.schema]=null,t&&Xo(Qo(t,","),(function(e){var t,o,i=r.exec(e)
i&&(o=i[1],t=o?n[i[2]]:n[i[2]]={"#comment":{}},t=n[i[2]],Xo(Qo(i[3],"|"),(function(e){"-"===o?delete t[e]:t[e]={}})))}))},k=function(e){var n,o=t[e]
if(o)return o
for(n=r.length;n--;)if((o=r[n]).pattern.test(e))return o}
e.valid_elements?S(e.valid_elements):(Xo(u,(function(e,r){t[r]={attributes:e.attributes,attributesOrder:e.attributesOrder},n[r]=e.children})),"html5"!==e.schema&&Xo(Qo("strong/b em/i"),(function(e){var n=Qo(e,"/")
t[n[1]].outputName=n[0]})),Xo(Qo("ol ul sub sup blockquote span font a table tbody strong em b i"),(function(e){t[e]&&(t[e].removeEmpty=!0)})),Xo(Qo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(function(e){t[e].paddEmpty=!0})),Xo(Qo("span"),(function(e){t[e].removeEmptyAttrs=!0}))),N(e.custom_elements),E(e.valid_children),x(e.extended_valid_elements),E("+ol[ul|ol],+ul[ul|ol]"),Xo({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},(function(e,n){t[n]&&(t[n].parentsRequired=Qo(e))})),e.invalid_elements&&Xo(Go(e.invalid_elements),(function(e){t[e]&&delete t[e]})),k("span")||x("span[!data-mce-type|*]")
return{children:n,elements:t,getValidStyles:function(){return c},getValidClasses:function(){return f},getBlockElements:function(){return b},getInvalidStyles:function(){return s},getShortEndedElements:function(){return m},getTextBlockElements:function(){return y},getTextInlineElements:function(){return C},getBoolAttrs:function(){return p},getElementRule:k,getSelfClosingElements:function(){return d},getNonEmptyElements:function(){return h},getMoveCaretBeforeOnEnterElements:function(){return v},getWhiteSpaceElements:function(){return l},getSpecialElements:function(){return i},isValidChild:function(e,t){var r=n[e.toLowerCase()]
return!(!r||!r[t.toLowerCase()])},isValid:function(e,t){var n,r,o=k(e)
if(o){if(!t)return!0
if(o.attributes[t])return!0
if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return o},addValidElements:x,setValidElements:S,addCustomElements:N,addValidChildren:E}}var ti,ni,ri,oi,ii,ai,ui,ci,si,fi,li,di,mi,pi,gi,hi,vi,yi=function(e,t,n,r){var o=function(e){return(e=parseInt(e,10).toString(16)).length>1?e:"0"+e}
return"#"+o(t)+o(n)+o(r)},bi=function(e,t){var n,r,o,i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,a=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,u=/\s*([^:]+):\s*([^;]+);?/g,c=/\s+$/,s={},f="\ufeff"
e=e||{},t&&(r=t.getValidStyles(),o=t.getInvalidStyles())
var l="\\\" \\' \\; \\: ; : \ufeff".split(" ")
for(n=0;n<l.length;n++)s[l[n]]=f+n,s[f+n]=l[n]
return{toHex:function(e){return e.replace(i,yi)},parse:function(t){var r,o,l,d,m,p,g,h,v={},y=e.url_converter,b=e.url_converter_scope||this,C=function(e,t,r){var o=v[e+"-top"+t]
if(o){var i=v[e+"-right"+t]
if(i){var a=v[e+"-bottom"+t]
if(a){var u=v[e+"-left"+t]
if(u){var c=[o,i,a,u]
for(n=c.length-1;n--&&c[n]===c[n+1];);n>-1&&r||(v[e+t]=-1===n?c[0]:c.join(" "),delete v[e+"-top"+t],delete v[e+"-right"+t],delete v[e+"-bottom"+t],delete v[e+"-left"+t])}}}}},w=function(e){var t,n=v[e]
if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return!1
return v[e]=n[0],!0}},x=function(e){return d=!0,s[e]},S=function(e,t){return d&&(e=e.replace(/\uFEFF[0-9]/g,(function(e){return s[e]}))),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e},N=function(e){return String.fromCharCode(parseInt(e.slice(1),16))},E=function(e){return e.replace(/\\[0-9a-f]+/gi,N)},k=function(t,n,r,o,i,a){if(i=i||a)return"'"+(i=S(i)).replace(/\'/g,"\\'")+"'"
if(n=S(n||r||o),!e.allow_script_urls){var u=n.replace(/[\s\r\n]+/g,"")
if(/(java|vb)script:/i.test(u))return""
if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(u))return""}return y&&(n=y.call(b,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}
if(t){for(t=(t=t.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,x).replace(/\"[^\"]+\"|\'[^\']+\'/g,(function(e){return e.replace(/[;:]/g,x)}));r=u.exec(t);)if(u.lastIndex=r.index+r[0].length,o=r[1].replace(c,"").toLowerCase(),l=r[2].replace(c,""),o&&l){if(o=E(o),l=E(l),-1!==o.indexOf(f)||-1!==o.indexOf('"'))continue
if(!e.allow_script_urls&&("behavior"===o||/expression\s*\(|\/\*|\*\//.test(l)))continue
"font-weight"===o&&"700"===l?l="bold":"color"!==o&&"background-color"!==o||(l=l.toLowerCase()),l=(l=l.replace(i,yi)).replace(a,k),v[o]=d?S(l,!0):l}C("border","",!0),C("border","-width"),C("border","-color"),C("border","-style"),C("padding",""),C("margin",""),m="border",g="border-style",h="border-color",w(p="border-width")&&w(g)&&w(h)&&(v[m]=v[p]+" "+v[g]+" "+v[h],delete v[p],delete v[g],delete v[h]),"medium none"===v.border&&delete v.border,"none"===v["border-image"]&&delete v["border-image"]}return v},serialize:function(e,t){var n="",i=function(t){var o,i=r[t]
if(i)for(var a=0,u=i.length;a<u;a++)t=i[a],(o=e[t])&&(n+=(n.length>0?" ":"")+t+": "+o+";")}
return t&&r?(i("*"),i(t)):oe(e,(function(e,r){!e||o&&!function(e,t){var n=o["*"]
return!(n&&n[e]||(n=o[t])&&n[e])}(r,t)||(n+=(n.length>0?" ":"")+r+": "+e+";")})),n}}},Ci=/^(?:mouse|contextmenu)|click/,wi={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1,mozPressure:1},xi=function(){return!1},Si=function(){return!0},Ni=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Ei=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},ki=function(e,t){var n,r=t||{}
for(n in e)wi[n]||(r[n]=e[n])
if(r.target||(r.target=r.srcElement||document),r.composedPath&&(r.composedPath=function(){return e.composedPath()}),e&&function(e){return Ci.test(e.type)}(e)&&void 0===e.pageX&&void 0!==e.clientX){var o=r.target.ownerDocument||document,i=o.documentElement,a=o.body
r.pageX=e.clientX+(i&&i.scrollLeft||a&&a.scrollLeft||0)-(i&&i.clientLeft||a&&a.clientLeft||0),r.pageY=e.clientY+(i&&i.scrollTop||a&&a.scrollTop||0)-(i&&i.clientTop||a&&a.clientTop||0)}return r.preventDefault=function(){r.isDefaultPrevented=Si,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},r.stopPropagation=function(){r.isPropagationStopped=Si,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=Si,r.stopPropagation()},!1===function(e){return e.isDefaultPrevented===Si||e.isDefaultPrevented===xi}(r)&&(r.isDefaultPrevented=xi,r.isPropagationStopped=xi,r.isImmediatePropagationStopped=xi),void 0===r.metaKey&&(r.metaKey=!1),r},_i=function(e,t,n){var r=e.document,o={type:"ready"}
if(n.domLoaded)t(o)
else{var i=function(){Ei(e,"DOMContentLoaded",i),Ei(e,"load",i),n.domLoaded||(n.domLoaded=!0,t(o)),e=null}
"complete"===r.readyState||"interactive"===r.readyState&&r.body?i():Ni(e,"DOMContentLoaded",i),n.domLoaded||Ni(e,"load",i)}},Ai=function(){function e(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}return e.prototype.bind=function(e,t,n,r){var o,i,a,u,c,s,f,l=this,d=window,m=function(e){l.executeHandlers(ki(e||d.event),o)}
if(e&&3!==e.nodeType&&8!==e.nodeType){e[l.expando]?o=e[l.expando]:(o=l.count++,e[l.expando]=o,l.events[o]={}),r=r||e
var p=t.split(" ")
for(a=p.length;a--;)s=m,c=f=!1,"DOMContentLoaded"===(u=p[a])&&(u="ready"),l.domLoaded&&"ready"===u&&"complete"===e.readyState?n.call(r,ki({type:u})):(l.hasMouseEnterLeave||(c=l.mouseEnterLeave[u])&&(s=function(e){var t=e.currentTarget,n=e.relatedTarget
if(n&&t.contains)n=t.contains(n)
else for(;n&&n!==t;)n=n.parentNode
n||((e=ki(e||d.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,l.executeHandlers(e,o))}),l.hasFocusIn||"focusin"!==u&&"focusout"!==u||(f=!0,c="focusin"===u?"focus":"blur",s=function(e){(e=ki(e||d.event)).type="focus"===e.type?"focusin":"focusout",l.executeHandlers(e,o)}),(i=l.events[o][u])?"ready"===u&&l.domLoaded?n(ki({type:u})):i.push({func:n,scope:r}):(l.events[o][u]=i=[{func:n,scope:r}],i.fakeName=c,i.capture=f,i.nativeHandler=s,"ready"===u?_i(e,s,l):Ni(e,c||u,s,f)))
return e=i=null,n}},e.prototype.unbind=function(e,t,n){var r,o,i,a,u
if(!e||3===e.nodeType||8===e.nodeType)return this
var c=e[this.expando]
if(c){if(u=this.events[c],t){var s=t.split(" ")
for(o=s.length;o--;)if(r=u[a=s[o]]){if(n)for(i=r.length;i--;)if(r[i].func===n){var f=r.nativeHandler,l=r.fakeName,d=r.capture;(r=r.slice(0,i).concat(r.slice(i+1))).nativeHandler=f,r.fakeName=l,r.capture=d,u[a]=r}n&&0!==r.length||(delete u[a],Ei(e,r.fakeName||a,r.nativeHandler,r.capture))}}else oe(u,(function(t,n){Ei(e,t.fakeName||n,t.nativeHandler,t.capture)})),u={}
for(a in u)if(me(u,a))return this
delete this.events[c]
try{delete e[this.expando]}catch(m){e[this.expando]=null}}return this},e.prototype.fire=function(e,t,n){var r
if(!e||3===e.nodeType||8===e.nodeType)return this
var o=ki(null,n)
o.type=t,o.target=e
do{(r=e[this.expando])&&this.executeHandlers(o,r),e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow}while(e&&!o.isPropagationStopped())
return this},e.prototype.clean=function(e){var t,n
if(!e||3===e.nodeType||8===e.nodeType)return this
if(e[this.expando]&&this.unbind(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(this.unbind(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[this.expando]&&this.unbind(e)
return this},e.prototype.destroy=function(){this.events={}},e.prototype.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1},e.prototype.executeHandlers=function(e,t){var n=this.events[t],r=n&&n[e.type]
if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o]
if(a&&!1===a.func.call(a.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}},e.Event=new e,e}(),Ri="sizzle"+-new Date,Ti=window.document,Di=0,Oi=0,Bi=da(),Pi=da(),Li=da(),Ii=function(e,t){return e===t&&(fi=!0),0},Mi="undefined",Fi=1<<31,Ui={}.hasOwnProperty,zi=[],ji=zi.pop,Hi=zi.push,Vi=zi.push,qi=zi.slice,$i=zi.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t
return-1},Wi="[\\x20\\t\\r\\n\\f]",Ki="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Xi="\\[[\\x20\\t\\r\\n\\f]*("+Ki+")(?:"+Wi+"*([*^$|!~]?=)"+Wi+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+Ki+"))|)"+Wi+"*\\]",Yi=":("+Ki+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+Xi+")*)|.*)\\)|)",Gi=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),Ji=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),Qi=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),Zi=new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]","g"),ea=new RegExp(Yi),ta=new RegExp("^"+Ki+"$"),na={ID:new RegExp("^#("+Ki+")"),CLASS:new RegExp("^\\.("+Ki+")"),TAG:new RegExp("^("+Ki+"|[*])"),ATTR:new RegExp("^"+Xi),PSEUDO:new RegExp("^"+Yi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},ra=/^(?:input|select|textarea|button)$/i,oa=/^h\d$/i,ia=/^[^{]+\{\s*\[native \w/,aa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ua=/[+~]/,ca=/'|\\/g,sa=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig"),fa=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)}
try{Vi.apply(zi=qi.call(Ti.childNodes),Ti.childNodes),zi[Ti.childNodes.length].nodeType}catch(ck){Vi={apply:zi.length?function(e,t){Hi.apply(e,qi.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var la=function(e,t,n,r){var o,i,a,u,c,s,f,l,d,m
if((t?t.ownerDocument||t:Ti)!==di&&li(t),n=n||[],!e||"string"!=typeof e)return n
if(1!==(u=(t=t||di).nodeType)&&9!==u)return[]
if(pi&&!r){if(o=aa.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n
if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&vi(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return Vi.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&ti.getElementsByClassName)return Vi.apply(n,t.getElementsByClassName(a)),n}if(ti.qsa&&(!gi||!gi.test(e))){if(l=f=Ri,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(s=ii(e),(f=t.getAttribute("id"))?l=f.replace(ca,"\\$&"):t.setAttribute("id",l),l="[id='"+l+"'] ",c=s.length;c--;)s[c]=l+ya(s[c])
d=ua.test(e)&&ha(t.parentNode)||t,m=s.join(",")}if(m)try{return Vi.apply(n,d.querySelectorAll(m)),n}catch(p){}finally{f||t.removeAttribute("id")}}}return ui(e.replace(Gi,"$1"),t,n,r)}
function da(){var e=[]
return function t(n,r){return e.push(n+" ")>ni.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function ma(e){return e[Ri]=!0,e}function pa(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Fi)-(~e.sourceIndex||Fi)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function ga(e){return ma((function(t){return t=+t,ma((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function ha(e){return e&&typeof e.getElementsByTagName!==Mi&&e}function va(){}function ya(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function ba(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=Oi++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,c,s=[Di,i]
if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if((u=(c=t[Ri]||(t[Ri]={}))[r])&&u[0]===Di&&u[1]===i)return s[2]=u[2]
if(c[r]=s,s[2]=e(t,n,a))return!0}}}function Ca(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1
return!0}:e[0]}function wa(e,t,n,r,o){for(var i,a=[],u=0,c=e.length,s=null!=t;u<c;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),s&&t.push(u)))
return a}function xa(e,t,n,r,o,i){return r&&!r[Ri]&&(r=xa(r)),o&&!o[Ri]&&(o=xa(o,i)),ma((function(i,a,u,c){var s,f,l,d=[],m=[],p=a.length,g=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)la(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),h=!e||!i&&t?g:wa(g,d,e,u,c),v=n?o||(i?e:p||r)?[]:a:h
if(n&&n(h,v,u,c),r)for(s=wa(v,m),r(s,[],u,c),f=s.length;f--;)(l=s[f])&&(v[m[f]]=!(h[m[f]]=l))
if(i){if(o||e){if(o){for(s=[],f=v.length;f--;)(l=v[f])&&s.push(h[f]=l)
o(null,v=[],s,c)}for(f=v.length;f--;)(l=v[f])&&(s=o?$i.call(i,l):d[f])>-1&&(i[s]=!(a[s]=l))}}else v=wa(v===a?v.splice(p,v.length):v),o?o(null,a,v,c):Vi.apply(a,v)}))}function Sa(e){for(var t,n,r,o=e.length,i=ni.relative[e[0].type],a=i||ni.relative[" "],u=i?1:0,c=ba((function(e){return e===t}),a,!0),s=ba((function(e){return $i.call(t,e)>-1}),a,!0),f=[function(e,n,r){return!i&&(r||n!==ci)||((t=n).nodeType?c(e,n,r):s(e,n,r))}];u<o;u++)if(n=ni.relative[e[u].type])f=[ba(Ca(f),n)]
else{if((n=ni.filter[e[u].type].apply(null,e[u].matches))[Ri]){for(r=++u;r<o&&!ni.relative[e[r].type];r++);return xa(u>1&&Ca(f),u>1&&ya(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(Gi,"$1"),n,u<r&&Sa(e.slice(u,r)),r<o&&Sa(e=e.slice(r)),r<o&&ya(e))}f.push(n)}return Ca(f)}ti=la.support={},oi=la.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},li=la.setDocument=function(e){var t,n=e?e.ownerDocument||e:Ti,r=n.defaultView
return n!==di&&9===n.nodeType&&n.documentElement?(di=n,mi=n.documentElement,pi=!oi(n),r&&r!==function(e){try{return e.top}catch(t){}return null}(r)&&(r.addEventListener?r.addEventListener("unload",(function(){li()}),!1):r.attachEvent&&r.attachEvent("onunload",(function(){li()}))),ti.attributes=!0,ti.getElementsByTagName=!0,ti.getElementsByClassName=ia.test(n.getElementsByClassName),ti.getById=!0,ni.find.ID=function(e,t){if(typeof t.getElementById!==Mi&&pi){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},ni.filter.ID=function(e){var t=e.replace(sa,fa)
return function(e){return e.getAttribute("id")===t}},ni.find.TAG=ti.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Mi)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e)
if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n)
return r}return i},ni.find.CLASS=ti.getElementsByClassName&&function(e,t){if(pi)return t.getElementsByClassName(e)},hi=[],gi=[],ti.disconnectedMatch=!0,gi=gi.length&&new RegExp(gi.join("|")),hi=hi.length&&new RegExp(hi.join("|")),t=ia.test(mi.compareDocumentPosition),vi=t||ia.test(mi.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},Ii=t?function(e,t){if(e===t)return fi=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!ti.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===Ti&&vi(Ti,e)?-1:t===n||t.ownerDocument===Ti&&vi(Ti,t)?1:si?$i.call(si,e)-$i.call(si,t):0:4&r?-1:1)}:function(e,t){if(e===t)return fi=!0,0
var r,o=0,i=e.parentNode,a=t.parentNode,u=[e],c=[t]
if(!i||!a)return e===n?-1:t===n?1:i?-1:a?1:si?$i.call(si,e)-$i.call(si,t):0
if(i===a)return pa(e,t)
for(r=e;r=r.parentNode;)u.unshift(r)
for(r=t;r=r.parentNode;)c.unshift(r)
for(;u[o]===c[o];)o++
return o?pa(u[o],c[o]):u[o]===Ti?-1:c[o]===Ti?1:0},n):di},la.matches=function(e,t){return la(e,null,null,t)},la.matchesSelector=function(e,t){if((e.ownerDocument||e)!==di&&li(e),t=t.replace(Zi,"='$1']"),ti.matchesSelector&&pi&&(!hi||!hi.test(t))&&(!gi||!gi.test(t)))try{var n=undefined.call(e,t)
if(n||ti.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(ck){}return la(t,di,null,[e]).length>0},la.contains=function(e,t){return(e.ownerDocument||e)!==di&&li(e),vi(e,t)},la.attr=function(e,t){(e.ownerDocument||e)!==di&&li(e)
var n=ni.attrHandle[t.toLowerCase()],r=n&&Ui.call(ni.attrHandle,t.toLowerCase())?n(e,t,!pi):void 0
return void 0!==r?r:ti.attributes||!pi?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},la.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},la.uniqueSort=function(e){var t,n=[],r=0,o=0
if(fi=!ti.detectDuplicates,si=!ti.sortStable&&e.slice(0),e.sort(Ii),fi){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)e.splice(n[r],1)}return si=null,e},ri=la.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=ri(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=ri(t)
return n},(ni=la.selectors={cacheLength:50,createPseudo:ma,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(sa,fa),e[3]=(e[3]||e[4]||e[5]||"").replace(sa,fa),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||la.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&la.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return na.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ea.test(n)&&(t=ii(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(sa,fa).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Bi[e+" "]
return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+Wi+"|$)"))&&Bi(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Mi&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=la.attr(r,e)
return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,c){var s,f,l,d,m,p,g=i!==a?"nextSibling":"previousSibling",h=t.parentNode,v=u&&t.nodeName.toLowerCase(),y=!c&&!u
if(h){if(i){for(;g;){for(l=t;l=l[g];)if(u?l.nodeName.toLowerCase()===v:1===l.nodeType)return!1
p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?h.firstChild:h.lastChild],a&&y){for(m=(s=(f=h[Ri]||(h[Ri]={}))[e]||[])[0]===Di&&s[1],d=s[0]===Di&&s[2],l=m&&h.childNodes[m];l=++m&&l&&l[g]||(d=m=0)||p.pop();)if(1===l.nodeType&&++d&&l===t){f[e]=[Di,m,d]
break}}else if(y&&(s=(t[Ri]||(t[Ri]={}))[e])&&s[0]===Di)d=s[1]
else for(;(l=++m&&l&&l[g]||(d=m=0)||p.pop())&&((u?l.nodeName.toLowerCase()!==v:1!==l.nodeType)||!++d||(y&&((l[Ri]||(l[Ri]={}))[e]=[Di,d]),l!==t)););return(d-=o)===r||d%r==0&&d/r>=0}}},PSEUDO:function(e,t){var n,r=ni.pseudos[e]||ni.setFilters[e.toLowerCase()]||la.error("unsupported pseudo: "+e)
return r[Ri]?r(t):r.length>1?(n=[e,e,"",t],ni.setFilters.hasOwnProperty(e.toLowerCase())?ma((function(e,n){for(var o,i=r(e,t),a=i.length;a--;)e[o=$i.call(e,i[a])]=!(n[o]=i[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:ma((function(e){var t=[],n=[],r=ai(e.replace(Gi,"$1"))
return r[Ri]?ma((function(e,t,n,o){for(var i,a=r(e,null,o,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),!n.pop()}})),has:ma((function(e){return function(t){return la(e,t).length>0}})),contains:ma((function(e){return e=e.replace(sa,fa),function(t){return(t.textContent||t.innerText||ri(t)).indexOf(e)>-1}})),lang:ma((function(e){return ta.test(e||"")||la.error("unsupported lang: "+e),e=e.replace(sa,fa).toLowerCase(),function(t){var n
do{if(n=pi?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===mi},focus:function(e){return e===di.activeElement&&(!di.hasFocus||di.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!ni.pseudos.empty(e)},header:function(e){return oa.test(e.nodeName)},input:function(e){return ra.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ga((function(){return[0]})),last:ga((function(e,t){return[t-1]})),eq:ga((function(e,t,n){return[n<0?n+t:n]})),even:ga((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:ga((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:ga((function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r)
return e})),gt:ga((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=ni.pseudos.eq,j(["radio","checkbox","file","password","image"],(function(e){ni.pseudos[e]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(e)})),j(["submit","reset"],(function(e){ni.pseudos[e]=function(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}(e)})),va.prototype=ni.filters=ni.pseudos,ni.setFilters=new va,ii=la.tokenize=function(e,t){var n,r,o,i,a,u,c,s=Pi[e+" "]
if(s)return t?0:s.slice(0)
for(a=e,u=[],c=ni.preFilter;a;){for(i in n&&!(r=Ji.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=Qi.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(Gi," ")}),a=a.slice(n.length)),ni.filter)ni.filter.hasOwnProperty(i)&&(!(r=na[i].exec(a))||c[i]&&!(r=c[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length)))
if(!n)break}return t?a.length:a?la.error(e):Pi(e,u).slice(0)},ai=la.compile=function(e,t){var n,r=[],o=[],i=Li[e+" "]
if(!i){for(t||(t=ii(e)),n=t.length;n--;)(i=Sa(t[n]))[Ri]?r.push(i):o.push(i);(i=Li(e,function(e,t){var n=t.length>0,r=e.length>0,o=function(o,i,a,u,c){var s,f,l,d=0,m="0",p=o&&[],g=[],h=ci,v=o||r&&ni.find.TAG("*",c),y=Di+=null==h?1:Math.random()||.1,b=v.length
for(c&&(ci=i!==di&&i);m!==b&&null!=(s=v[m]);m++){if(r&&s){for(f=0;l=e[f++];)if(l(s,i,a)){u.push(s)
break}c&&(Di=y)}n&&((s=!l&&s)&&d--,o&&p.push(s))}if(d+=m,n&&m!==d){for(f=0;l=t[f++];)l(p,g,i,a)
if(o){if(d>0)for(;m--;)p[m]||g[m]||(g[m]=ji.call(u))
g=wa(g)}Vi.apply(u,g),c&&!o&&g.length>0&&d+t.length>1&&la.uniqueSort(u)}return c&&(Di=y,ci=h),p}
return n?ma(o):o}(o,r))).selector=e}return i},ui=la.select=function(e,t,n,r){var o,i,a,u,c,s="function"==typeof e&&e,f=!r&&ii(e=s.selector||e)
if(n=n||[],1===f.length){if((i=f[0]=f[0].slice(0)).length>2&&"ID"===(a=i[0]).type&&ti.getById&&9===t.nodeType&&pi&&ni.relative[i[1].type]){if(!(t=(ni.find.ID(a.matches[0].replace(sa,fa),t)||[])[0]))return n
s&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=na.needsContext.test(e)?0:i.length;o--&&(a=i[o],!ni.relative[u=a.type]);)if((c=ni.find[u])&&(r=c(a.matches[0].replace(sa,fa),ua.test(i[0].type)&&ha(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&ya(i)))return Vi.apply(n,r),n
break}}return(s||ai(e,f))(r,t,!pi,n,ua.test(e)&&ha(t.parentNode)||t),n},ti.sortStable=Ri.split("").sort(Ii).join("")===Ri,ti.detectDuplicates=!!fi,li(),ti.sortDetached=!0
var Na=document,Ea=Array.prototype.push,ka=Array.prototype.slice,_a=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,Aa=Ai.Event,Ra=Ct.makeMap("children,contents,next,prev"),Ta=function(e){return void 0!==e},Da=function(e){return"string"==typeof e},Oa=function(e,t){var n,r=(t=t||Na).createElement("div"),o=t.createDocumentFragment()
for(r.innerHTML=e;n=r.firstChild;)o.appendChild(n)
return o},Ba=function(e,t,n,r){var o
if(Da(t))t=Oa(t,Ka(e[0]))
else if(t.length&&!t.nodeType){if(t=Ja.makeArray(t),r)for(o=t.length-1;o>=0;o--)Ba(e,t[o],n,r)
else for(o=0;o<t.length;o++)Ba(e,t[o],n,r)
return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t)
return e},Pa=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},La=function(e,t,n){var r,o
return t=Ja(t)[0],e.each((function(){var e=this
n&&r===e.parentNode||(r=e.parentNode,o=t.cloneNode(!1),e.parentNode.insertBefore(o,e)),o.appendChild(e)})),e},Ia=Ct.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),Ma=Ct.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),Fa={for:"htmlFor",class:"className",readonly:"readOnly"},Ua={float:"cssFloat"},za={},ja={},Ha=function(e,t){return new Ja.fn.init(e,t)},Va=/^\s*|\s*$/g,qa=function(e){return null==e?"":(""+e).replace(Va,"")},$a=function(e,t){var n,r,o,i
if(e)if(void 0===(n=e.length)){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},Wa=function(e,t){var n=[]
return $a(e,(function(e,r){t(r,e)&&n.push(r)})),n},Ka=function(e){return e?9===e.nodeType?e:e.ownerDocument:Na}
Ha.fn=Ha.prototype={constructor:Ha,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this
if(!e)return o
if(e.nodeType)return o.context=o[0]=e,o.length=1,o
if(t&&t.nodeType)o.context=t
else{if(t)return Ja(e).attr(t)
o.context=t=document}if(Da(e)){if(o.selector=e,!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:_a.exec(e)))return Ja(t).find(e)
if(n[1])for(r=Oa(e,Ka(t)).firstChild;r;)Ea.call(o,r),r=r.nextSibling
else{if(!(r=Ka(t).getElementById(n[2])))return o
if(r.id!==n[2])return o.find(e)
o.length=1,o[0]=r}}else this.add(e,!1)
return o},toArray:function(){return Ct.toArray(this)},add:function(e,t){var n,r,o=this
if(Da(e))return o.add(Ja(e))
if(!1!==t)for(n=Ja.unique(o.toArray().concat(Ja.makeArray(e))),o.length=n.length,r=0;r<n.length;r++)o[r]=n[r]
else Ea.apply(o,Ja.makeArray(e))
return o},attr:function(e,t){var n,r=this
if("object"==typeof e)$a(e,(function(e,t){r.attr(e,t)}))
else{if(!Ta(t)){if(r[0]&&1===r[0].nodeType){if((n=za[e])&&n.get)return n.get(r[0],e)
if(Ma[e])return r.prop(e)?e:void 0
null===(t=r[0].getAttribute(e,2))&&(t=void 0)}return t}this.each((function(){var n
if(1===this.nodeType){if((n=za[e])&&n.set)return void n.set(this,t)
null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}}))}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this
if("object"==typeof(e=Fa[e]||e))$a(e,(function(e,t){n.prop(e,t)}))
else{if(!Ta(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t
this.each((function(){1===this.nodeType&&(this[e]=t)}))}return n},css:function(e,t){var n,r,o=this,i=function(e){return e.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()}))},a=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e}))}
if("object"==typeof e)$a(e,(function(e,t){o.css(e,t)}))
else if(Ta(t))e=i(e),"number"!=typeof t||Ia[e]||(t=t.toString()+"px"),o.each((function(){var n=this.style
if((r=ja[e])&&r.set)r.set(this,t)
else{try{this.style[Ua[e]||e]=t}catch(o){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(a(e)):n.removeAttribute(e))}}))
else{if(n=o[0],(r=ja[e])&&r.get)return r.get(n)
if(!n.ownerDocument.defaultView)return n.currentStyle?n.currentStyle[i(e)]:""
try{return n.ownerDocument.defaultView.getComputedStyle(n,null).getPropertyValue(a(e))}catch(u){return}}return o},remove:function(){for(var e,t=this.length;t--;)e=this[t],Aa.clean(e),e.parentNode&&e.parentNode.removeChild(e)
return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild)
return this},html:function(e){var t,n=this
if(Ta(e)){t=n.length
try{for(;t--;)n[t].innerHTML=e}catch(r){Ja(n[t]).empty().append(e)}return n}return n[0]?n[0].innerHTML:""},text:function(e){var t,n=this
if(Ta(e)){for(t=n.length;t--;)"innerText"in n[t]?n[t].innerText=e:n[0].textContent=e
return n}return n[0]?n[0].innerText||n[0].textContent:""},append:function(){return Ba(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)}))},prepend:function(){return Ba(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)}),!0)},before:function(){var e=this
return e[0]&&e[0].parentNode?Ba(e,arguments,(function(e){this.parentNode.insertBefore(e,this)})):e},after:function(){var e=this
return e[0]&&e[0].parentNode?Ba(e,arguments,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}),!0):e},appendTo:function(e){return Ja(e).append(this),this},prependTo:function(e){return Ja(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return La(this,e)},wrapAll:function(e){return La(this,e,!0)},wrapInner:function(e){return this.each((function(){Ja(this).contents().wrapAll(e)})),this},unwrap:function(){return this.parent().each((function(){Ja(this).replaceWith(this.childNodes)}))},clone:function(){var e=[]
return this.each((function(){e.push(this.cloneNode(!0))})),Ja(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this
return"string"!=typeof e||(-1!==e.indexOf(" ")?$a(e.split(" "),(function(){n.toggleClass(this,t)})):n.each((function(n,r){var o=Pa(r,e)
if(o!==t){var i=r.className
o?r.className=qa((" "+i+" ").replace(" "+e+" "," ")):r.className+=i?" "+e:e}}))),n},hasClass:function(e){return Pa(this[0],e)},each:function(e){return $a(this,e)},on:function(e,t){return this.each((function(){Aa.bind(this,e,t)}))},off:function(e,t){return this.each((function(){Aa.unbind(this,e,t)}))},trigger:function(e){return this.each((function(){"object"==typeof e?Aa.fire(this,e.type,e):Aa.fire(this,e)}))},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new Ja(ka.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[]
for(t=0,n=this.length;t<n;t++)Ja.find(e,this[t],r)
return Ja(r)},filter:function(e){return Ja("function"==typeof e?Wa(this.toArray(),(function(t,n){return e(n,t)})):Ja.filter(e,this.toArray()))},closest:function(e){var t=[]
return e instanceof Ja&&(e=e[0]),this.each((function(n,r){for(;r;){if("string"==typeof e&&Ja(r).is(e)){t.push(r)
break}if(r===e){t.push(r)
break}r=r.parentNode}})),Ja(t)},offset:function(e){var t,n,r,o,i=0,a=0
return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:Ea,sort:Array.prototype.sort,splice:Array.prototype.splice},Ct.extend(Ha,{extend:Ct.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:Ct.toArray(e)
var t},inArray:function(e,t){var n
if(t.indexOf)return t.indexOf(e)
for(n=t.length;n--;)if(t[n]===e)return n
return-1},isArray:Ct.isArray,each:$a,trim:qa,grep:Wa,find:la,expr:la.selectors,unique:la.uniqueSort,text:la.getText,contains:la.contains,filter:function(e,t,n){var r=t.length
for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1)
return t=1===t.length?Ja.find.matchesSelector(t[0],e)?[t[0]]:[]:Ja.find.matches(e,t)}})
var Xa=function(e,t,n){var r=[],o=e[t]
for("string"!=typeof n&&n instanceof Ja&&(n=n[0]);o&&9!==o.nodeType;){if(void 0!==n){if(o===n)break
if("string"==typeof n&&Ja(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},Ya=function(e,t,n,r){var o=[]
for(r instanceof Ja&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(void 0!==r){if(e===r)break
if("string"==typeof r&&Ja(e).is(r))break}o.push(e)}return o},Ga=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e
return null}
$a({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return Xa(e,"parentNode")},next:function(e){return Ga(e,"nextSibling",1)},prev:function(e){return Ga(e,"previousSibling",1)},children:function(e){return Ya(e.firstChild,"nextSibling",1)},contents:function(e){return Ct.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},(function(e,t){Ha.fn[e]=function(n){var r=[]
this.each((function(){var e=t.call(r,this,n,r)
e&&(Ja.isArray(e)?r.push.apply(r,e):r.push(e))})),this.length>1&&(Ra[e]||(r=Ja.unique(r)),0===e.indexOf("parents")&&(r=r.reverse()))
var o=Ja(r)
return n?o.filter(n):o}})),$a({parentsUntil:function(e,t){return Xa(e,"parentNode",t)},nextUntil:function(e,t){return Ya(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return Ya(e,"previousSibling",1,t).slice(1)}},(function(e,t){Ha.fn[e]=function(n,r){var o=[]
this.each((function(){var e=t.call(o,this,n,o)
e&&(Ja.isArray(e)?o.push.apply(o,e):o.push(e))})),this.length>1&&(o=Ja.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse()))
var i=Ja(o)
return r?i.filter(r):i}})),Ha.fn.is=function(e){return!!e&&this.filter(e).length>0},Ha.fn.init.prototype=Ha.fn,Ha.overrideDefaults=function(e){var t,n=function(r,o){return t=t||e(),0===arguments.length&&(r=t.element),o||(o=t.context),new n.fn.init(r,o)}
return Ja.extend(n,this),n},Ha.attrHooks=za,Ha.cssHooks=ja
var Ja=Ha,Qa=Ct.each,Za=Ct.grep,eu=gt.ie,tu=/^([a-z0-9],?)+$/i,nu=function(e,t){var n=t.attr("style"),r=e.serialize(e.parse(n),t[0].nodeName)
r||(r=null),t.attr("data-mce-style",r)},ru=function(e,t){var n,r,o=0
if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r)
return o}
function ou(e,t){var n=this
void 0===t&&(t={})
var r={},o=window,i={},a=0,c=Or.forElement(xt.fromDom(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),s=[],f=t.schema?t.schema:ei({}),l=bi({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),d=t.ownEvents?new Ai:Ai.Event,m=f.getBlockElements(),p=Ja.overrideDefaults((function(){return{context:e,element:q.getRoot()}})),g=function(t){return t&&e&&N(t)?e.getElementById(t):t},h=function(e){return p("string"==typeof e?g(e):e)},v=function(e,t,n){var r,o,i=h(e)
return i.length&&(o=(r=$[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},y=function(e){var t=g(e)
return t?t.attributes:[]},b=function(e,n,r){""===r&&(r=null)
var o=h(e),i=o.attr(n)
if(o.length){var a=$[n]
a&&a.set?a.set(o,r,n):o.attr(n,r),i!==r&&t.onSetAttrib&&t.onSetAttrib({attrElm:o,attrName:n,attrValue:r})}},C=function(){return t.root_element||e.body},w=function(t,n){return tr(e.body,g(t),n)},x=function(e,t,n){var r=h(e)
return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()})))&&(t=gt.browser.isIE()?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:void 0)},S=function(e){var t,n
return e=g(e),t=x(e,"width"),n=x(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},E=function(e,t){var n
if(!e)return!1
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(tu.test(t)){var r=t.toLowerCase().split(/,/),o=e.nodeName.toLowerCase()
for(n=r.length-1;n>=0;n--)if(r[n]===o)return!0
return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e]
return la(t,i[0].ownerDocument||i[0],null,i).length>0},k=function(e,t,n,r){var o,i=[],a=g(e)
for(r=void 0===r,n=n||("BODY"!==C().nodeName?C().parentNode:null),Ct.is(t,"string")&&(o=t,t="*"===t?function(e){return 1===e.nodeType}:function(e){return E(e,o)});a&&!(a===n||T(a.nodeType)||On(a)||Bn(a));){if(!t||"function"==typeof t&&t(a)){if(!r)return[a]
i.push(a)}a=a.parentNode}return r?i:null},_=function(e,t,n){var r=t
if(e)for("string"==typeof t&&(r=function(e){return E(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e
return null},A=function(e,t,r){var o,i="string"==typeof e?g(e):e
if(!i)return!1
if(Ct.isArray(i)&&(i.length||0===i.length))return o=[],Qa(i,(function(e,n){e&&o.push(t.call(r,"string"==typeof e?g(e):e,n))})),o
var a=r||n
return t.call(a,i)},R=function(e,t){h(e).each((function(e,n){Qa(t,(function(e,t){b(n,t,e)}))}))},D=function(e,t){var n=h(e)
eu?n.each((function(e,n){if(!1!==n.canHaveHTML){for(;n.firstChild;)n.removeChild(n.firstChild)
try{n.innerHTML="<br>"+t,n.removeChild(n.firstChild)}catch(r){Ja("<div></div>").html("<br>"+t).contents().slice(1).appendTo(n)}return t}})):n.html(t)},O=function(t,n,r,o,i){return A(t,(function(t){var a="string"==typeof n?e.createElement(n):n
return R(a,r),o&&("string"!=typeof o&&o.nodeType?a.appendChild(o):"string"==typeof o&&D(a,o)),i?a:t.appendChild(a)}))},B=function(t,n,r){return O(e.createElement(t),t,n,r,!0)},P=qo.encodeAllRaw,L=function(e,t){var n=h(e)
return t?n.each((function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)})).remove():n.remove(),n.length>1?n.toArray():n[0]},I=function(e,t,n){h(e).toggleClass(t,n).each((function(){""===this.className&&Ja(this).attr("class",null)}))},M=function(e,t,n){return A(t,(function(t){return Ct.is(t,"array")&&(e=e.cloneNode(!0)),n&&Qa(Za(t.childNodes),(function(t){e.appendChild(t)})),t.parentNode.replaceChild(e,t)}))},F=function(e){if(xn(e)){var t="a"===e.nodeName.toLowerCase()&&!v(e,"href")&&v(e,"id")
if(v(e,"name")||v(e,"data-mce-bookmark")||t)return!0}return!1},U=function(){return e.createRange()},z=function(n,r,i,a){if(Ct.isArray(n)){for(var u=n.length,c=[];u--;)c[u]=z(n[u],r,i,a)
return c}return!t.collect||n!==e&&n!==o||s.push([n,r,i,a]),d.bind(n,r,i,a||q)},H=function(t,n,r){if(Ct.isArray(t)){for(var i=t.length,a=[];i--;)a[i]=H(t[i],n,r)
return a}if(s.length>0&&(t===e||t===o))for(i=s.length;i--;){var u=s[i]
t!==u[0]||n&&n!==u[1]||r&&r!==u[2]||d.unbind(u[0],u[1],u[2])}return d.unbind(t,n,r)},V=function(e){if(e&&xn(e)){var t=e.getAttribute("data-mce-contenteditable")
return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},q={doc:e,settings:t,win:o,files:i,stdMode:!0,boxModel:!0,styleSheetLoader:c,boundEvents:s,styles:l,schema:f,events:d,isBlock:function(e){if("string"==typeof e)return!!m[e]
if(e){var t=e.nodeType
if(t)return!(1!==t||!m[e.nodeName])}return!1},$:p,$$:h,root:null,clone:function(t,n){if(!eu||1!==t.nodeType||n)return t.cloneNode(n)
var r=e.createElement(t.nodeName)
return Qa(y(t),(function(e){b(r,e.nodeName,v(t,e.nodeName))})),r},getRoot:C,getViewPort:function(e){var t=bn(e)
return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:function(e){e=g(e)
var t=w(e),n=S(e)
return{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:S,getParent:function(e,t,n){var r=k(e,t,n,!1)
return r&&r.length>0?r[0]:null},getParents:k,get:g,getNext:function(e,t){return _(e,t,"nextSibling")},getPrev:function(e,t){return _(e,t,"previousSibling")},select:function(n,r){return la(n,g(r)||t.root_element||e,[])},is:E,add:O,create:B,createHTML:function(e,t,n){var r,o=""
for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&void 0!==t[r]&&(o+=" "+r+'="'+P(t[r])+'"')
return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(t){var n,r=e.createElement("div"),o=e.createDocumentFragment()
for(o.appendChild(r),t&&(r.innerHTML=t);n=r.firstChild;)o.appendChild(n)
return o.removeChild(r),o},remove:L,setStyle:function(e,n,r){var o=N(n)?h(e).css(n,r):h(e).css(n)
t.update_styles&&nu(l,o)},getStyle:x,setStyles:function(e,n){var r=h(e).css(n)
t.update_styles&&nu(l,r)},removeAllAttribs:function(e){return A(e,(function(e){var t,n=e.attributes
for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))}))},setAttrib:b,setAttribs:R,getAttrib:v,getPos:w,parseStyle:function(e){return l.parse(e)},serializeStyle:function(e,t){return l.serialize(e,t)},addStyle:function(t){var n,o
if(q!==ou.DOM&&e===document){if(r[t])return
r[t]=!0}(o=e.getElementById("mceDefaultStyles"))||((o=e.createElement("style")).id="mceDefaultStyles",o.type="text/css",(n=e.getElementsByTagName("head")[0]).firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o)),o.styleSheet?o.styleSheet.cssText+=t:o.appendChild(e.createTextNode(t))},loadCSS:function(e){e||(e=""),j(e.split(","),(function(e){i[e]=!0,c.load(e,u)}))},addClass:function(e,t){h(e).addClass(t)},removeClass:function(e,t){I(e,t,!1)},hasClass:function(e,t){return h(e).hasClass(t)},toggleClass:I,show:function(e){h(e).show()},hide:function(e){h(e).hide()},isHidden:function(e){return"none"===h(e).css("display")},uniqueId:function(e){return(e||"mce_")+a++},setHTML:D,getOuterHTML:function(e){var t="string"==typeof e?g(e):e
return xn(t)?t.outerHTML:Ja("<div></div>").append(Ja(t).clone()).html()},setOuterHTML:function(e,t){h(e).each((function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}L(Ja(this).html(t),!0)}))},decode:qo.decode,encode:P,insertAfter:function(e,t){var n=g(t)
return A(e,(function(e){var t=n.parentNode,r=n.nextSibling
return r?t.insertBefore(e,r):t.appendChild(e),e}))},replace:M,rename:function(e,t){var n
return e.nodeName!==t.toUpperCase()&&(n=B(t),Qa(y(e),(function(t){b(n,t.nodeName,v(e,t.nodeName))})),M(n,e,!0)),n||e},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode
if(r===n)break
r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return l.toHex(Ct.trim(e))},run:A,getAttribs:y,isEmpty:function(e,t){var n,r,o=0
if(F(e))return!1
if(e=e.firstChild){var i=new Br(e,e.parentNode),a=f?f.getWhiteSpaceElements():{}
t=t||(f?f.getNonEmptyElements():null)
do{if(n=e.nodeType,xn(e)){var u=e.getAttribute("data-mce-bogus")
if(u){e=i.next("all"===u)
continue}if(r=e.nodeName.toLowerCase(),t&&t[r]){if("br"===r){o++,e=i.next()
continue}return!1}if(F(e))return!1}if(8===n)return!1
if(3===n&&!Co(e.nodeValue))return!1
if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&Co(e.nodeValue))return!1
e=i.next()}while(e)}return o<=1},createRng:U,nodeIndex:ru,split:function(e,t,n){var r,o,i,a=U()
if(e&&t)return a.setStart(e.parentNode,ru(e)),a.setEnd(t.parentNode,ru(t)),r=a.extractContents(),(a=U()).setStart(t.parentNode,ru(t)+1),a.setEnd(e.parentNode,ru(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(To(q,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(To(q,o),e),L(e),n||t},bind:z,unbind:H,fire:function(e,t,n){return d.fire(e,t,n)},getContentEditable:V,getContentEditableParent:function(e){for(var t=C(),n=null;e&&e!==t&&null===(n=V(e));e=e.parentNode);return n},destroy:function(){if(s.length>0)for(var e=s.length;e--;){var t=s[e]
d.unbind(t[0],t[1],t[2])}oe(i,(function(e,t){c.unload(t),delete i[t]})),la.setDocument&&la.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0
e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}},$=function(e,t,n){var r=t.keep_values,o={set:function(e,r,o){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||n(),r,o,e[0])),e.attr("data-mce-"+o,r).attr(o,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},i={style:{set:function(t,n){null===n||"object"!=typeof n?(r&&t.attr("data-mce-style",n),null!==n&&"string"==typeof n?(t.removeAttr("style"),t.css(e.parse(n))):t.attr("style",n)):t.css(n)},get:function(t){var n=t.attr("data-mce-style")||t.attr("style")
return e.serialize(e.parse(n),t[0].nodeName)}}}
return r&&(i.href=i.src=o),i}(l,t,(function(){return q}))
return q}(function(e){e.DOM=e(document),e.nodeIndex=ru})(ou||(ou={}))
var iu=ou,au=iu.DOM,uu=Ct.each,cu=Ct.grep,su=function(){function e(e){void 0===e&&(e={}),this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=0,this.settings=e}return e.prototype._setReferrerPolicy=function(e){this.settings.referrerPolicy=e},e.prototype.loadScript=function(e,t,n){var r,o=au,i=function(){o.remove(a),r&&(r.onerror=r.onload=r=null)},a=o.uniqueId();(r=document.createElement("script")).id=a,r.type="text/javascript",r.src=Ct._addCacheSuffix(e),this.settings.referrerPolicy&&o.setAttrib(r,"referrerpolicy",this.settings.referrerPolicy),r.onload=function(){i(),t()},r.onerror=function(){i(),O(n)?n():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(r)},e.prototype.isDone=function(e){return 2===this.states[e]},e.prototype.markDone=function(e){this.states[e]=2},e.prototype.add=function(e,t,n,r){var o=this.states[e]
this.queue.push(e),void 0===o&&(this.states[e]=0),t&&(this.scriptLoadedCallbacks[e]||(this.scriptLoadedCallbacks[e]=[]),this.scriptLoadedCallbacks[e].push({success:t,failure:r,scope:n||this}))},e.prototype.load=function(e,t,n,r){return this.add(e,t,n,r)},e.prototype.remove=function(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]},e.prototype.loadQueue=function(e,t,n){this.loadScripts(this.queue,e,t,n)},e.prototype.loadScripts=function(e,t,n,r){var o=this,i=[],a=function(e,t){uu(o.scriptLoadedCallbacks[t],(function(t){O(t[e])&&t[e].call(t.scope)})),o.scriptLoadedCallbacks[t]=void 0}
o.queueLoadedCallbacks.push({success:t,failure:r,scope:n||this})
var u=function(){var t=cu(e)
if(e.length=0,uu(t,(function(e){2!==o.states[e]?3!==o.states[e]?1!==o.states[e]&&(o.states[e]=1,o.loading++,o.loadScript(e,(function(){o.states[e]=2,o.loading--,a("success",e),u()}),(function(){o.states[e]=3,o.loading--,i.push(e),a("failure",e),u()}))):a("failure",e):a("success",e)})),!o.loading){var n=o.queueLoadedCallbacks.slice(0)
o.queueLoadedCallbacks.length=0,uu(n,(function(e){0===i.length?O(e.success)&&e.success.call(e.scope):O(e.failure)&&e.failure.call(e.scope,i)}))}}
u()},e.ScriptLoader=new e,e}(),fu=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},lu={},du=fu("en"),mu=function(){return de(lu,du.get())},pu={getData:function(){return ie(lu,(function(e){return Se({},e)}))},setCode:function(e){e&&du.set(e)},getCode:function(){return du.get()},add:function(e,t){var n=lu[e]
n||(lu[e]=n={}),oe(t,(function(e,t){n[t.toLowerCase()]=e}))},translate:function(e){var t,n=mu().getOr({}),r=function(e){return O(e)?Object.prototype.toString.call(e):o(e)?"":""+e},o=function(e){return""===e||null==e},i=function(e){var t=r(e)
return de(n,t.toLowerCase()).map(r).getOr(t)},a=function(e){return e.replace(/{context:\w+}$/,"")}
if(o(e))return""
if(E(t=e)&&me(t,"raw"))return r(e.raw)
if(function(e){return k(e)&&e.length>1}(e)){var u=e.slice(1)
return a(i(e[0]).replace(/\{([0-9]+)\}/g,(function(e,t){return me(u,t)?r(u[t]):e})))}return a(i(e))},isRtl:function(){return mu().bind((function(e){return de(e,"_dir")})).exists((function(e){return"rtl"===e}))},hasCode:function(e){return me(lu,e)}}
function gu(){var e=this,t=[],n={},r={},o=[],i=function(e,t){var n=V(o,(function(n){return n.name===e&&n.state===t}))
j(n,(function(e){return e.callback()}))},a=function(e){var t
return r[e]&&(t=r[e].dependencies),t||[]},u=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},c=function(e,t,o,s,f){if(!n[e]){var l="string"==typeof t?t:t.prefix+t.resource+t.suffix
0!==l.indexOf("/")&&-1===l.indexOf("://")&&(l=gu.baseURL+"/"+l),n[e]=l.substring(0,l.lastIndexOf("/"))
var d=function(){i(e,"loaded"),function(e,t,n,r){var o=a(e)
j(o,(function(e){var n=u(t,e)
c(n.resource,n,void 0,void 0)})),n&&(r?n.call(r):n.call(su))}(e,t,o,s)}
r[e]?d():su.ScriptLoader.add(l,d,s,f)}},s=function(e,t,i){void 0===i&&(i="added"),me(r,e)&&"added"===i||me(n,e)&&"loaded"===i?t():o.push({name:e,state:i,callback:t})}
return{items:t,urls:n,lookup:r,_listeners:o,get:function(e){if(r[e])return r[e].instance},dependencies:a,requireLangPack:function(e,t){!1!==gu.languageLoad&&s(e,(function(){var r=pu.getCode()
!r||t&&-1===(","+(t||"")+",").indexOf(","+r+",")||su.ScriptLoader.add(n[e]+"/langs/"+r+".js")}),"loaded")},add:function(e,n,o){var a=n
return t.push(a),r[e]={instance:a,dependencies:o},i(e,"added"),a},remove:function(e){delete n[e],delete r[e]},createUrl:u,addComponents:function(t,n){var r=e.urls[t]
j(n,(function(e){su.ScriptLoader.add(r+"/"+e)}))},load:c,waitFor:s}}(function(e){e.PluginManager=e(),e.ThemeManager=e()})(gu||(gu={}))
var hu=gu,vu=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null===n&&(n=setTimeout((function(){e.apply(null,r),n=null}),t))}}},yu=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null!==n&&clearTimeout(n),n=setTimeout((function(){e.apply(null,r),n=null}),t)}}},bu=function(e,t){var n=qn(e,t)
return void 0===n||""===n?[]:n.split(" ")},Cu=function(e){return void 0!==e.dom.classList},wu=function(e,t){return function(e,t,n){var r=bu(e,t).concat([n])
return Hn(e,t,r.join(" ")),!0}(e,"class",t)},xu=function(e,t){return function(e,t,n){var r=V(bu(e,t),(function(e){return e!==n}))
return r.length>0?Hn(e,t,r.join(" ")):Wn(e,t),!1}(e,"class",t)},Su=function(e,t){Cu(e)?e.dom.classList.add(t):wu(e,t)},Nu=function(e){0===(Cu(e)?e.dom.classList:function(e){return bu(e,"class")}(e)).length&&Wn(e,"class")},Eu=function(e,t){return Cu(e)&&e.dom.classList.contains(t)},ku=function(e,t){var n=[]
return j(qt(e),(function(e){t(e)&&(n=n.concat([e])),n=n.concat(ku(e,t))})),n},_u=function(e,t){return function(e,t){var n=void 0===t?document:t.dom
return Et(n)?[]:z(n.querySelectorAll(e),xt.fromDom)}(t,e)},Au=s("mce-annotation"),Ru=s("data-mce-annotation"),Tu=s("data-mce-annotation-uid"),Du=function(e,t){var n=e.selection.getRng(),r=xt.fromDom(n.startContainer),o=xt.fromDom(e.getBody()),i=t.fold((function(){return"."+Au()}),(function(e){return"["+Ru()+'="'+e+'"]'})),a=$t(r,n.startOffset).getOr(r),u=Sr(a,i,(function(e){return kt(e,o)})),c=function(e,t){return function(e,t){var n=e.dom
return!(!n||!n.hasAttribute)&&n.hasAttribute(t)}(e,t)?C.some(qn(e,t)):C.none()}
return u.bind((function(t){return c(t,""+Tu()).bind((function(n){return c(t,""+Ru()).map((function(t){var r=Ou(e,n)
return{uid:n,name:t,elements:r}}))}))}))},Ou=function(e,t){var n=xt.fromDom(e.getBody())
return _u(n,"["+Tu()+'="'+t+'"]')},Bu=function(e,t){var n=fu({}),r=function(e,t){o(e,(function(e){return t(e),e}))},o=function(e,t){var r=n.get(),o=t(r.hasOwnProperty(e)?r[e]:{listeners:[],previous:fu(C.none())})
r[e]=o,n.set(r)},i=yu((function(){var t,i,a,u=n.get(),c=(t=ne(u),(a=P.call(t,0)).sort(i),a)
j(c,(function(t){o(t,(function(n){var o=n.previous.get()
return Du(e,C.some(t)).fold((function(){o.isSome()&&(function(e){r(e,(function(t){j(t.listeners,(function(t){return t(!1,e)}))}))}(t),n.previous.set(C.none()))}),(function(e){var t=e.uid,i=e.name,a=e.elements
o.is(t)||(function(e,t,n){r(e,(function(r){j(r.listeners,(function(r){return r(!0,e,{uid:t,nodes:z(n,(function(e){return e.dom}))})}))}))}(i,t,a),n.previous.set(C.some(t)))})),{previous:n.previous,listeners:n.listeners}}))}))}),30)
e.on("remove",(function(){i.cancel()})),e.on("NodeChange",(function(){i.throttle()}))
return{addListener:function(e,t){o(e,(function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}}))}}},Pu=function(e,t){e.on("init",(function(){e.serializer.addNodeFilter("span",(function(e){j(e,(function(e){(function(e){return C.from(e.attr(Ru())).bind(t.lookup)})(e).each((function(t){!1===t.persistent&&e.unwrap()}))}))}))}))},Lu=0,Iu=function(e){var t=(new Date).getTime()
return e+"_"+Math.floor(1e9*Math.random())+ ++Lu+String(t)},Mu=function(e,t){var n,r,o=It(e).dom,i=xt.fromDom(o.createDocumentFragment()),a=(n=t,(r=(o||document).createElement("div")).innerHTML=n,qt(xt.fromDom(r)))
an(i,a),un(e),on(e,i)},Fu=function(e,t){return xt.fromDom(e.dom.cloneNode(t))},Uu=function(e){return Fu(e,!1)},zu=function(e){return Fu(e,!0)},ju=function(e,t,n){void 0===n&&(n=g)
var r=new Br(e,t),o=function(e){var t
do{t=r[e]()}while(t&&!Tn(t)&&!n(t))
return C.from(t).filter(Tn)}
return{current:function(){return C.from(r.current()).filter(Tn)},next:function(){return o("next")},prev:function(){return o("prev")},prev2:function(){return o("prev2")}}},Hu=function(e,t){var n=t||function(t){return e.isBlock(t)||Pn(t)||Mn(t)},r=function(e,t,n,o){if(Tn(e)){var i=o(e,t,e.data)
if(-1!==i)return C.some({container:e,offset:i})}return n().bind((function(e){return r(e.container,e.offset,n,o)}))}
return{backwards:function(e,t,o,i){var a=ju(e,i,n)
return r(e,t,(function(){return a.prev().map((function(e){return{container:e,offset:e.length}}))}),o).getOrNull()},forwards:function(e,t,o,i){var a=ju(e,i,n)
return r(e,t,(function(){return a.next().map((function(e){return{container:e,offset:0}}))}),o).getOrNull()}}},Vu=function(e,t,n){return e.isSome()&&t.isSome()?C.some(n(e.getOrDie(),t.getOrDie())):C.none()},qu=Math.round,$u=function(e){return e?{left:qu(e.left),top:qu(e.top),bottom:qu(e.bottom),right:qu(e.right),width:qu(e.width),height:qu(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},Wu=function(e,t){return e=$u(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},Ku=function(e,t,n){return e>=0&&e<=Math.min(t.height,n.height)/2},Xu=function(e,t){var n=Math.min(t.height/2,e.height/2)
return e.bottom-n<t.top||!(e.top>t.bottom)&&Ku(t.top-e.bottom,e,t)},Yu=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&Ku(t.bottom-e.top,e,t)},Gu=function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom},Ju=function(e){var t=e.startContainer,n=e.startOffset
return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},Qu=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},Zu=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"),ec=function(e){return"string"==typeof e&&e.charCodeAt(0)>=768&&Zu.test(e)},tc=xn,nc=ho,rc=Nn("display","block table"),oc=Nn("float","left right"),ic=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1
return!0}}(tc,nc,d(oc)),ac=d(Nn("white-space","pre pre-line pre-wrap")),uc=Tn,cc=Pn,sc=iu.nodeIndex,fc=Qu,lc=function(e){return"createRange"in e?e.createRange():iu.DOM.createRng()},dc=function(e){return e&&/[\r\n\t ]/.test(e)},mc=function(e){return!!e.setStart&&!!e.setEnd},pc=function(e){var t,n=e.startContainer,r=e.startOffset
return!!(dc(e.toString())&&ac(n.parentNode)&&Tn(n)&&(t=n.data,dc(t[r-1])||dc(t[r+1])))},gc=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},hc=function(e){var t,n=e.getClientRects()
return t=n.length>0?$u(n[0]):$u(e.getBoundingClientRect()),!mc(e)&&cc(e)&&gc(t)?function(e){var t=e.ownerDocument,n=lc(t),r=t.createTextNode($r),o=e.parentNode
o.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1)
var i=$u(n.getBoundingClientRect())
return o.removeChild(r),i}(e):gc(t)&&mc(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset
if(t===n&&Tn(n)&&0===r&&1===o){var i=e.cloneRange()
return i.setEndAfter(n),hc(i)}return null}(e):t},vc=function(e,t){var n=Wu(e,t)
return n.width=1,n.right=n.left+1,n},yc=function(e){var t,n,r=[],o=function(e){var t,n
0!==e.height&&(r.length>0&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=lc(e.ownerDocument)
if(t<e.data.length){if(ec(e.data[t]))return r
if(ec(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!pc(n)))return o(vc(hc(n),!1)),r}t>0&&(n.setStart(e,t-1),n.setEnd(e,t),pc(n)||o(vc(hc(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),pc(n)||o(vc(hc(n),!0)))}
if(uc(e.container()))return i(e.container(),e.offset()),r
if(tc(e.container()))if(e.isAtEnd())n=fc(e.container(),e.offset()),uc(n)&&i(n,n.data.length),ic(n)&&!cc(n)&&o(vc(hc(n),!1))
else{if(n=fc(e.container(),e.offset()),uc(n)&&i(n,0),ic(n)&&e.isAtEnd())return o(vc(hc(n),!1)),r
t=fc(e.container(),e.offset()-1),ic(t)&&!cc(t)&&(rc(t)||rc(n)||!ic(n))&&o(vc(hc(t),!1)),ic(n)&&o(vc(hc(n),!0))}return r}
function bc(e,t,n){var r=function(){return n||(n=yc(bc(e,t))),n}
return{container:s(e),offset:s(t),toRange:function(){var n=lc(e.ownerDocument)
return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:r,isVisible:function(){return r().length>0},isAtStart:function(){return uc(e),0===t},isAtEnd:function(){return uc(e)?t>=e.data.length:t>=e.childNodes.length},isEqual:function(n){return n&&e===n.container()&&t===n.offset()},getNode:function(n){return fc(e,n?t-1:t)}}}(function(e){e.fromRangeStart=function(t){return e(t.startContainer,t.startOffset)},e.fromRangeEnd=function(t){return e(t.endContainer,t.endOffset)},e.after=function(t){return e(t.parentNode,sc(t)+1)},e.before=function(t){return e(t.parentNode,sc(t))},e.isAbove=function(e,t){return Vu(Z(t.getClientRects()),ee(e.getClientRects()),Xu).getOr(!1)},e.isBelow=function(e,t){return Vu(ee(t.getClientRects()),Z(e.getClientRects()),Yu).getOr(!1)},e.isAtStart=function(e){return!!e&&e.isAtStart()},e.isAtEnd=function(e){return!!e&&e.isAtEnd()},e.isTextPosition=function(e){return!!e&&Tn(e.container())},e.isElementPosition=function(t){return!1===e.isTextPosition(t)}})(bc||(bc={}))
var Cc,wc=bc,xc=function(e,t){Tn(t)&&0===t.data.length&&e.remove(t)},Sc=function(e,t,n){Bn(n)?function(e,t,n){var r=C.from(n.firstChild),o=C.from(n.lastChild)
t.insertNode(n),r.each((function(t){return xc(e,t.previousSibling)})),o.each((function(t){return xc(e,t.nextSibling)}))}(e,t,n):function(e,t,n){t.insertNode(n),xc(e,n.previousSibling),xc(e,n.nextSibling)}(e,t,n)},Nc=Tn,Ec=kn,kc=iu.nodeIndex,_c=function(e){var t=e.parentNode
return Ec(t)?_c(t):t},Ac=function(e){return e?Ce(e.childNodes,(function(e,t){return Ec(t)&&"BR"!==t.nodeName?e=e.concat(Ac(t)):e.push(t),e}),[]):[]},Rc=function(e){return function(t){return e===t}},Tc=function(e){return(Nc(e)?"text()":e.nodeName.toLowerCase())+"["+function(e){var t,n
t=Ac(_c(e)),n=we(t,Rc(e),e),t=t.slice(0,n+1)
var r=Ce(t,(function(e,n,r){return Nc(n)&&Nc(t[r-1])&&e++,e}),0)
return t=ye(t,Sn([e.nodeName])),(n=we(t,Rc(e),e))-r}(e)+"]"},Dc=function(e,t){var n,r,o,i,a,u=[]
return n=t.container(),r=t.offset(),Nc(n)?o=function(e,t){for(;(e=e.previousSibling)&&Nc(e);)t+=e.data.length
return t}(n,r):(r>=(i=n.childNodes).length?(o="after",r=i.length-1):o="before",n=i[r]),u.push(Tc(n)),a=function(e,t,n){var r=[]
for(t=t.parentNode;!(t===e||n&&n(t));t=t.parentNode)r.push(t)
return r}(e,n),a=ye(a,d(kn)),(u=u.concat(ve(a,(function(e){return Tc(e)})))).reverse().join("/")+","+o},Oc=function(e,t){var n
if(!t)return null
var r=t.split(","),o=r[0].split("/")
n=r.length>1?r[1]:"before"
var i=Ce(o,(function(e,t){var n=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
return n?("text()"===n[1]&&(n[1]="#text"),function(e,t,n){var r=Ac(e)
return r=ye(r,(function(e,t){return!Nc(e)||!Nc(r[t-1])})),(r=ye(r,Sn([t])))[n]}(e,n[1],parseInt(n[2],10))):null}),e)
return i?Nc(i)?function(e,t){for(var n,r=e,o=0;Nc(r);){if(n=r.data.length,t>=o&&t<=o+n){e=r,t-=o
break}if(!Nc(r.nextSibling)){e=r,t=n
break}o+=n,r=r.nextSibling}return Nc(e)&&t>e.data.length&&(t=e.data.length),wc(e,t)}(i,parseInt(n,10)):(n="after"===n?kc(i)+1:kc(i),wc(i.parentNode,n)):null},Bc=Mn,Pc=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],c=[],s=0,f=e.getRoot()
for(Tn(a)?c.push(n?function(e,t,n){var r,o
for(o=e(t.data.slice(0,n)).length,r=t.previousSibling;r&&Tn(r);r=r.previousSibling)o+=e(r.data).length
return o}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(s=1,u=Math.max(0,i.length-1)),c.push(e.nodeIndex(i[u],n)+s));a&&a!==f;a=a.parentNode)c.push(e.nodeIndex(a,n))
return c},Lc=function(e,t,n){var r=0
return Ct.each(e.select(t),(function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++})),r},Ic=function(e,t){var n,r,o,i=t?"start":"end"
n=e[i+"Container"],r=e[i+"Offset"],xn(n)&&"TR"===n.nodeName&&(n=(o=n.childNodes)[Math.min(t?r:r-1,o.length-1)])&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r))},Mc=function(e){return Ic(e,!0),Ic(e,!1),e},Fc=function(e,t){var n
if(xn(e)&&(e=Qu(e,t),Bc(e)))return e
if(Zr(e)){if(Tn(e)&&Jr(e)&&(e=e.parentNode),n=e.previousSibling,Bc(n))return n
if(n=e.nextSibling,Bc(n))return n}},Uc=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng()
if(Bc(r)||"IMG"===o)return{name:o,index:Lc(n.dom,o,r)}
var a=function(e){return Fc(e.startContainer,e.startOffset)||Fc(e.endContainer,e.endOffset)}(i)
return a?{name:o=a.tagName,index:Lc(n.dom,o,a)}:function(e,t,n,r){var o=t.dom,i={}
return i.start=Pc(o,e,n,r,!0),t.isCollapsed()||(i.end=Pc(o,e,n,r,!1)),i}(e,n,t,i)},zc=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},jc=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName
if("IMG"===u)return{name:u,index:Lc(n,u,a)}
var c=Mc(r.cloneRange())
if(!i){c.collapse(!1)
var s=zc(n,o+"_end",t)
Sc(n,c,s)}(r=Mc(r)).collapse(!0)
var f=zc(n,o+"_start",t)
return Sc(n,r,f),e.moveToBookmark({id:o,keep:!0}),{id:o}},Hc=function(e,t,n){return 2===t?Uc(Xr,n,e):3===t?function(e){var t=e.getRng()
return{start:Dc(e.dom.getRoot(),wc.fromRangeStart(t)),end:Dc(e.dom.getRoot(),wc.fromRangeEnd(t))}}(e):t?function(e){return{rng:e.getRng()}}(e):jc(e,!1)},Vc=l(Uc,f,!0),qc=iu.DOM,$c=function(e,t,n){var r=e.getParam(t,n)
if(-1!==r.indexOf("=")){var o=e.getParam(t,"","hash")
return o.hasOwnProperty(e.id)?o[e.id]:n}return r},Wc=function(e){return e.getParam("content_security_policy","")},Kc=function(e){if(e.getParam("force_p_newlines",!1))return"p"
var t=e.getParam("forced_root_block","p")
return!1===t?"":!0===t?"p":t},Xc=function(e){return e.getParam("forced_root_block_attrs",{})},Yc=function(e){return e.getParam("automatic_uploads",!0,"boolean")},Gc=function(e){return e.getParam("images_reuse_filename",!1,"boolean")},Jc=function(e){return e.getParam("icons","","string")},Qc=function(e){return e.getParam("images_upload_url","","string")},Zc=function(e){return e.getParam("images_upload_base_path","","string")},es=function(e){return e.getParam("images_upload_credentials",!1,"boolean")},ts=function(e){return e.getParam("images_upload_handler",null,"function")},ns=function(e){return e.getParam("content_css_cors",!1,"boolean")},rs=function(e){return e.getParam("referrer_policy","","string")},os=function(e){return e.getParam("language","en","string")},is=function(e){return e.getParam("indent_use_margin",!1)},as=function(e){var t=e.getParam("object_resizing")
return!1!==t&&!gt.iOS&&(N(t)?t:"table,img,figure.image,div")},us=function(e){return e.getParam("event_root")},cs=function(e){return e.getParam("theme")},ss=function(e){return e.getParam("validate")},fs=function(e){return!1!==e.getParam("inline_boundaries")},ls=function(e){return e.getParam("content_css_cors")},ds=function(e){return e.getParam("plugins","","string")},ms=xn,ps=Tn,gs=function(e){var t=e.parentNode
t&&t.removeChild(e)},hs=function(e){var t=Xr(e)
return{count:e.length-t.length,text:t}},vs=function(e){for(var t;-1!==(t=e.data.lastIndexOf(Wr));)e.deleteData(t,1)},ys=function(e,t){return xs(e),t},bs=function(e,t){var n=t.container(),r=function(e,t){var n=M(e,t)
return-1===n?C.none():C.some(n)}(te(n.childNodes),e).map((function(e){return e<t.offset()?wc(n,t.offset()-1):t})).getOr(t)
return xs(e),r},Cs=function(e,t){return ps(e)&&t.container()===e?function(e,t){var n=hs(e.data.substr(0,t.offset())),r=hs(e.data.substr(t.offset()))
return(n.text+r.text).length>0?(vs(e),wc(e,t.offset()-n.count)):t}(e,t):ys(e,t)},ws=function(e,t){return wc.isTextPosition(t)?Cs(e,t):function(e,t){return t.container()===e.parentNode?bs(e,t):ys(e,t)}(e,t)},xs=function(e){ms(e)&&Zr(e)&&(eo(e)?e.removeAttribute("data-mce-caret"):gs(e)),ps(e)&&(vs(e),0===e.data.length&&gs(e))},Ss=at().browser,Ns=Mn,Es=Un,ks=Fn,_s=function(e,t,n){var r,o,i,a,u,c=Wu(t.getBoundingClientRect(),n)
return"BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,i=e.scrollTop||r.scrollTop):(u=e.getBoundingClientRect(),o=e.scrollLeft-u.left,i=e.scrollTop-u.top),c.left+=o,c.right+=o,c.top+=i,c.bottom+=i,c.width=1,(a=t.offsetWidth-t.clientWidth)>0&&(n&&(a*=-1),c.left+=a,c.right+=a),c},As=function(e,t,n,r){var o,i,a=fu(C.none()),u=Kc(e),c=u.length>0?u:"p",s=function(){(function(e){for(var t=_u(xt.fromDom(e),"*[contentEditable=false],video,audio,embed,object"),n=0;n<t.length;n++){var r,o=t[n].dom,i=o.previousSibling
io(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(r.length-1,1)),i=o.nextSibling,oo(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(0,1))}})(t),i&&(xs(i),i=null),a.get().each((function(e){Ja(e.caret).remove(),a.set(C.none())})),o&&(Ar.clearInterval(o),o=null)},f=function(){o=Ar.setInterval((function(){r()?Ja("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden"):Ja("div.mce-visual-caret",t).addClass("mce-visual-caret-hidden")}),500)}
return{show:function(e,r){var o,u
if(s(),ks(r))return null
if(!n(r))return i=function(e,t){var n,r=e.ownerDocument.createTextNode(Wr),o=e.parentNode
if(t){if(n=e.previousSibling,Gr(n)){if(Zr(n))return n
if(io(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,Gr(n)){if(Zr(n))return n
if(oo(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(r,e),u=r.ownerDocument.createRange(),Ts(i.nextSibling)?(u.setStart(i,0),u.setEnd(i,0)):(u.setStart(i,1),u.setEnd(i,1)),u
i=ro(c,r,e),o=_s(t,r,e),Ja(i).css("top",o.top)
var l=Ja('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(o).appendTo(t)[0]
return a.set(C.some({caret:l,element:r,before:e})),a.get().each((function(t){e&&Ja(t.caret).addClass("mce-visual-caret-before")})),f(),(u=r.ownerDocument.createRange()).setStart(i,0),u.setEnd(i,0),u},hide:s,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){a.get().each((function(e){var n=_s(t,e.element,e.before)
Ja(e.caret).css(Se({},n))}))},destroy:function(){return Ar.clearInterval(o)}}},Rs=function(){return Ss.isIE()||Ss.isEdge()||Ss.isFirefox()},Ts=function(e){return Ns(e)||Es(e)},Ds=function(e){return Ts(e)||_n(e)&&Rs()},Os=Mn,Bs=Un,Ps=Nn("display","block table table-cell table-caption list-item"),Ls=Zr,Is=Jr,Ms=xn,Fs=ho,Us=function(e){return e>0},zs=function(e){return e<0},js=function(e,t){for(var n;n=e(t);)if(!Is(n))return n
return null},Hs=function(e,t,n,r,o){var i=new Br(e,r),a=Os(e)||Is(e)
if(zs(t)){if(a&&n(e=js(i.prev,!0)))return e
for(;e=js(i.prev,o);)if(n(e))return e}if(Us(t)){if(a&&n(e=js(i.next,!0)))return e
for(;e=js(i.next,o);)if(n(e))return e}return null},Vs=function(e,t){for(;e&&e!==t;){if(Ps(e))return e
e=e.parentNode}return null},qs=function(e,t,n){return Vs(e.container(),n)===Vs(t.container(),n)},$s=function(e,t){if(!t)return null
var n=t.container(),r=t.offset()
return Ms(n)?n.childNodes[r+e]:null},Ws=function(e,t){var n=t.ownerDocument.createRange()
return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},Ks=function(e,t,n){return Vs(t,e)===Vs(n,e)},Xs=function(e,t,n){var r,o
for(o=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[o],Ls(r)&&(r=r[o]),Os(r)||Bs(r)){if(Ks(t,r,n))return r
break}if(Fs(r))break
n=n.parentNode}return null},Ys=l(Ws,!0),Gs=l(Ws,!1),Js=function(e,t,n){var r,o,i,a=l(Xs,!0,t),u=l(Xs,!1,t)
o=n.startContainer
var c=n.startOffset
if(Jr(o)){if(Ms(o)||(o=o.parentNode),"before"===(i=o.getAttribute("data-mce-caret"))&&(r=o.nextSibling,Ds(r)))return Ys(r)
if("after"===i&&(r=o.previousSibling,Ds(r)))return Gs(r)}if(!n.collapsed)return n
if(Tn(o)){if(Ls(o)){if(1===e){if(r=u(o))return Ys(r)
if(r=a(o))return Gs(r)}if(-1===e){if(r=a(o))return Gs(r)
if(r=u(o))return Ys(r)}return n}if(io(o)&&c>=o.data.length-1)return 1===e&&(r=u(o))?Ys(r):n
if(oo(o)&&c<=1)return-1===e&&(r=a(o))?Gs(r):n
if(c===o.data.length)return(r=u(o))?Ys(r):n
if(0===c)return(r=a(o))?Gs(r):n}return n},Qs=function(e,t){return C.from($s(e?0:-1,t)).filter(Os)},Zs=function(e,t,n){var r=Js(e,t,n)
return-1===e?bc.fromRangeStart(r):bc.fromRangeEnd(r)},ef=function(e){return C.from(e.getNode()).map(xt.fromDom)},tf=function(e,t){for(;t=e(t);)if(t.isVisible())return t
return t},nf=function(e,t){var n=qs(e,t)
return!(n||!Pn(e.getNode()))||n};(function(e){e[e.Backwards=-1]="Backwards",e[e.Forwards=1]="Forwards"})(Cc||(Cc={}))
var rf,of=Mn,af=Tn,uf=xn,cf=Pn,sf=ho,ff=function(e){return mo(e)||function(e){return!!vo(e)&&!0!==$(te(e.getElementsByTagName("*")),(function(e,t){return e||uo(t)}),!1)}(e)},lf=yo,df=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},mf=function(e,t){if(Us(e)){if(sf(t.previousSibling)&&!af(t.previousSibling))return wc.before(t)
if(af(t))return wc(t,0)}if(zs(e)){if(sf(t.nextSibling)&&!af(t.nextSibling))return wc.after(t)
if(af(t))return wc(t,t.data.length)}return zs(e)?cf(t)?wc.before(t):wc.after(t):wc.before(t)},pf=function(e,t,n){var r,o,i,a
if(!uf(n)||!t)return null
if(t.isEqual(wc.after(n))&&n.lastChild){if(a=wc.after(n.lastChild),zs(e)&&sf(n.lastChild)&&uf(n.lastChild))return cf(n.lastChild)?wc.before(n.lastChild):a}else a=t
var u=a.container(),c=a.offset()
if(af(u)){if(zs(e)&&c>0)return wc(u,--c)
if(Us(e)&&c<u.length)return wc(u,++c)
r=u}else{if(zs(e)&&c>0&&(o=df(u,c-1),sf(o)))return!ff(o)&&(i=Hs(o,e,lf,o))?af(i)?wc(i,i.data.length):wc.after(i):af(o)?wc(o,o.data.length):wc.before(o)
if(Us(e)&&c<u.childNodes.length&&(o=df(u,c),sf(o)))return cf(o)?function(e,t){var n=t.nextSibling
return n&&sf(n)?af(n)?wc(n,0):wc.before(n):pf(Cc.Forwards,wc.after(t),e)}(n,o):!ff(o)&&(i=Hs(o,e,lf,o))?af(i)?wc(i,0):wc.before(i):af(o)?wc(o,0):wc.after(o)
r=o||a.getNode()}if((Us(e)&&a.isAtEnd()||zs(e)&&a.isAtStart())&&(r=Hs(r,e,h,n,!0),lf(r,n)))return mf(e,r)
o=Hs(r,e,lf,n)
var s=xe(V(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode
return n}(u,n),of))
return!s||o&&s.contains(o)?o?mf(e,o):null:a=Us(e)?wc.after(s):wc.before(s)},gf=function(e){return{next:function(t){return pf(Cc.Forwards,t,e)},prev:function(t){return pf(Cc.Backwards,t,e)}}},hf=function(e){return wc.isTextPosition(e)?0===e.offset():ho(e.getNode())},vf=function(e){if(wc.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return ho(e.getNode(!0))},yf=function(e,t){return!wc.isTextPosition(e)&&!wc.isTextPosition(t)&&e.getNode()===t.getNode(!0)},bf=function(e,t,n){return e?!yf(t,n)&&(r=t,!(!wc.isTextPosition(r)&&Pn(r.getNode())))&&vf(t)&&hf(n):!yf(n,t)&&hf(t)&&vf(n)
var r},Cf=function(e,t,n){var r=gf(t)
return C.from(e?r.next(n):r.prev(n))},wf=function(e,t,n){return Cf(e,t,n).bind((function(r){return qs(n,r,t)&&bf(e,n,r)?Cf(e,t,r):C.some(r)}))},xf=function(e,t,n,r){return wf(e,t,n).bind((function(n){return r(n)?xf(e,t,n,r):C.some(n)}))},Sf=function(e,t){var n,r=e?t.firstChild:t.lastChild
return Tn(r)?C.some(wc(r,e?0:r.data.length)):r?ho(r)?C.some(e?wc.before(r):Pn(n=r)?wc.before(n):wc.after(n)):function(e,t,n){var r=e?wc.before(n):wc.after(n)
return Cf(e,t,r)}(e,t,r):C.none()},Nf=l(Cf,!0),Ef=l(Cf,!1),kf=l(Sf,!0),_f=l(Sf,!1),Af="_mce_caret",Rf=function(e){return xn(e)&&e.id===Af},Tf=function(e,t){for(;t&&t!==e;){if(t.id===Af)return t
t=t.parentNode}return null},Df=function(e,t){return xn(t)&&e.isBlock(t)&&!t.innerHTML&&!gt.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t},Of=function(e,t){return _f(e).fold((function(){return!1}),(function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0}))},Bf=function(e,t,n){return!(!function(e){return!1===e.hasChildNodes()}(t)||!Tf(e,t))&&(function(e,t){var n=e.ownerDocument.createTextNode(Wr)
e.appendChild(n),t.setStart(n,0),t.setEnd(n,0)}(t,n),!0)},Pf=function(e,t,n,r){var o,i,a,u,c=n[t?"start":"end"],s=e.getRoot()
if(c){for(a=c[0],i=s,o=c.length-1;o>=1;o--){if(u=i.childNodes,Bf(s,i,r))return!0
if(c[o]>u.length-1)return!!Bf(s,i,r)||Of(i,r)
i=u[c[o]]}3===i.nodeType&&(a=Math.min(c[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(c[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},Lf=function(e){return Tn(e)&&e.data.length>0},If=function(e,t,n){var r,o,i,a,u,c,s=e.get(n.id+"_"+t),f=n.keep
if(s){if(r=s.parentNode,"start"===t?(f?s.hasChildNodes()?(r=s.firstChild,o=1):Lf(s.nextSibling)?(r=s.nextSibling,o=0):Lf(s.previousSibling)?(r=s.previousSibling,o=s.previousSibling.data.length):(r=s.parentNode,o=e.nodeIndex(s)+1):o=e.nodeIndex(s),u=r,c=o):(f?s.hasChildNodes()?(r=s.firstChild,o=1):Lf(s.previousSibling)?(r=s.previousSibling,o=s.previousSibling.data.length):(r=s.parentNode,o=e.nodeIndex(s)):o=e.nodeIndex(s),u=r,c=o),!f){for(a=s.previousSibling,i=s.nextSibling,Ct.each(Ct.grep(s.childNodes),(function(e){Tn(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));s=e.get(n.id+"_"+t);)e.remove(s,!0)
a&&i&&a.nodeType===i.nodeType&&Tn(a)&&!gt.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,c=o)}return C.some(wc(u,c))}return C.none()},Mf=function(e,t){var n=e.dom
if(t){if(function(e){return Ct.isArray(e.start)}(t))return function(e,t){var n=e.createRng()
return Pf(e,!0,t,n)&&Pf(e,!1,t,n)?C.some(n):C.none()}(n,t)
if(function(e){return"string"==typeof e.start}(t))return C.some(function(e,t){var n,r=e.createRng()
return n=Oc(e.getRoot(),t.start),r.setStart(n.container(),n.offset()),n=Oc(e.getRoot(),t.end),r.setEnd(n.container(),n.offset()),r}(n,t))
if(function(e){return e.hasOwnProperty("id")}(t))return function(e,t){var n=If(e,"start",t),r=If(e,"end",t)
return Vu(n,r.or(n),(function(t,n){var r=e.createRng()
return r.setStart(Df(e,t.container()),t.offset()),r.setEnd(Df(e,n.container()),n.offset()),r}))}(n,t)
if(function(e){return e.hasOwnProperty("name")}(t))return function(e,t){return C.from(e.select(t.name)[t.index]).map((function(t){var n=e.createRng()
return n.selectNode(t),n}))}(n,t)
if(function(e){return e.hasOwnProperty("rng")}(t))return C.some(t.rng)}return C.none()},Ff=function(e,t,n){return Hc(e,t,n)},Uf=function(e,t){Mf(e,t).each((function(t){e.setRng(t)}))},zf=function(e){return xn(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},jf=(rf=$r,function(e){return rf===e}),Hf=function(e){return""!==e&&-1!==" \f\n\r\t\v".indexOf(e)},Vf=function(e){return!Hf(e)&&!jf(e)},qf=function(e){return!!e.nodeType},$f=function(e,t,n){var r,o,i,a=n.startOffset,u=n.startContainer
if((n.startContainer!==n.endContainer||!function(e){return e&&/^(IMG)$/.test(e.nodeName)}(n.startContainer.childNodes[n.startOffset]))&&1===u.nodeType)for(a<(i=u.childNodes).length?(u=i[a],r=new Br(u,e.getParent(u,e.isBlock))):(u=i[i.length-1],(r=new Br(u,e.getParent(u,e.isBlock))).next(!0)),o=r.current();o;o=r.next())if(3===o.nodeType&&!Yf(o))return n.setStart(o,0),void t.setRng(n)},Wf=function(e,t,n){if(e){var r=t?"nextSibling":"previousSibling"
for(e=n?e:e[r];e;e=e[r])if(1===e.nodeType||!Yf(e))return e}},Kf=function(e,t){return qf(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},Xf=function(e,t,n){return e.schema.isValidChild(t,n)},Yf=function(e,t){if(void 0===t&&(t=!1),D(e)&&Tn(e)){var n=t?e.data.replace(/ /g," "):e.data
return Co(n)}return!1},Gf=function(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,(function(e,n){return t[n]||e}))),e},Jf=function(e,t){return t=t||"",e=""+((e=e||"").nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()===t.toLowerCase()},Qf=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},Zf=function(e,t,n){return Qf(e,e.getStyle(t,n),n)},el=function(e,t){var n
return e.getParent(t,(function(t){return(n=e.getStyle(t,"text-decoration"))&&"none"!==n})),n},tl=function(e,t,n){return e.getParents(t,n,e.getRoot())},nl=function(e,t,n){var r=["inline","block","selector","attributes","styles","classes"],o=function(e){return fe(e,(function(e,t){return U(r,(function(e){return e===t}))}))}
return U(e.formatter.get(t),(function(t){var r=o(t)
return U(e.formatter.get(n),(function(e){var t=o(e)
return function(e,t,n){return void 0===n&&(n=a),i(n).eq(e,t)}(r,t)}))}))},rl=function(e){return pe(e,"block")},ol=function(e){return pe(e,"selector")},il=function(e){return pe(e,"inline")},al=zf,ul=tl,cl=Yf,sl=Kf,fl=function(e,t){for(var n=t;n;){if(xn(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t
n=n.parentNode}return t},ll=function(e,t,n,r){for(var o=t.data,i=n;e?i>=0:i<o.length;e?i--:i++)if(r(o.charAt(i)))return e?i+1:i
return-1},dl=function(e,t,n){return ll(e,t,n,(function(e){return jf(e)||Hf(e)}))},ml=function(e,t,n){return ll(e,t,n,Vf)},pl=function(e,t,n,r,o,i){var a,u=e.getParent(n,e.isBlock)||t,c=function(t,n,r){var i=Hu(e),c=o?i.backwards:i.forwards
return C.from(c(t,n,(function(e,t){return al(e.parentNode)?-1:(a=e,r(o,e,t))}),u))}
return c(n,r,dl).bind((function(e){return i?c(e.container,e.offset+(o?-1:0),ml):C.some(e)})).orThunk((function(){return a?C.some({container:a,offset:o?0:a.length}):C.none()}))},gl=function(e,t,n,r,o){Tn(r)&&0===r.nodeValue.length&&r[o]&&(r=r[o])
for(var i=ul(e,r),a=0;a<i.length;a++)for(var u=0;u<t.length;u++){var c=t[u]
if((!("collapsed"in c)||c.collapsed===n.collapsed)&&e.is(i[a],c.selector))return i[a]}return r},hl=function(e,t,n,r){var o,i=e.dom,a=i.getRoot()
if(t[0].wrapper||(o=i.getParent(n,t[0].block,a)),!o){var u=i.getParent(n,"LI,TD,TH")
o=i.getParent(Tn(n)?n.parentNode:n,(function(t){return t!==a&&sl(e,t)}),u)}if(o&&t[0].wrapper&&(o=ul(i,o,"ul,ol").reverse()[0]||o),!o)for(o=n;o[r]&&!i.isBlock(o[r])&&(o=o[r],!Jf(o,"br")););return o||n},vl=function(e,t,n,r){var o=n.parentNode
return!D(n[r])&&(!(o!==t&&!T(o)&&!e.isBlock(o))||vl(e,t,o,r))},yl=function(e,t,n,r,o){var i,a,u=n,c=o?"previousSibling":"nextSibling",s=e.getRoot()
if(Tn(n)&&!cl(n)&&(o?r>0:r<n.data.length))return n
for(;;){if(!t[0].block_expand&&e.isBlock(u))return u
for(i=u[c];i;i=i[c]){var f=Tn(i)&&!vl(e,s,i,c)
if(!al(i)&&(!Pn(a=i)||!a.getAttribute("data-mce-bogus")||a.nextSibling)&&!cl(i,f))return u}if(u===s||u.parentNode===s){n=u
break}u=u.parentNode}return n},bl=function(e){return al(e.parentNode)||al(e)},Cl=function(e,t,n,r){void 0===r&&(r=!1)
var o=t.startContainer,i=t.startOffset,a=t.endContainer,u=t.endOffset,c=e.dom;(xn(o)&&o.hasChildNodes()&&(o=Qu(o,i),Tn(o)&&(i=0)),xn(a)&&a.hasChildNodes()&&(a=Qu(a,t.collapsed?u:u-1),Tn(a)&&(u=a.nodeValue.length)),o=fl(c,o),a=fl(c,a),bl(o)&&(o=al(o)?o:o.parentNode,o=t.collapsed?o.previousSibling||o:o.nextSibling||o,Tn(o)&&(i=t.collapsed?o.length:0)),bl(a)&&(a=al(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,Tn(a)&&(u=t.collapsed?0:a.length)),t.collapsed)&&(pl(c,e.getBody(),o,i,!0,r).each((function(e){var t=e.container,n=e.offset
o=t,i=n})),pl(c,e.getBody(),a,u,!1,r).each((function(e){var t=e.container,n=e.offset
a=t,u=n})))
return(n[0].inline||n[0].block_expand)&&(n[0].inline&&Tn(o)&&0!==i||(o=yl(c,n,o,i,!0)),n[0].inline&&Tn(a)&&u!==a.nodeValue.length||(a=yl(c,n,a,u,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(o=gl(c,n,t,o,"previousSibling"),a=gl(c,n,t,a,"nextSibling")),(n[0].block||n[0].selector)&&(o=hl(e,n,o,"previousSibling"),a=hl(e,n,a,"nextSibling"),n[0].block&&(c.isBlock(o)||(o=yl(c,n,o,i,!0)),c.isBlock(a)||(a=yl(c,n,a,u,!1)))),xn(o)&&(i=c.nodeIndex(o),o=o.parentNode),xn(a)&&(u=c.nodeIndex(a)+1,a=a.parentNode),{startContainer:o,startOffset:i,endContainer:a,endOffset:u}},wl=function(e,t){var n=e.childNodes
return t>=n.length?t=n.length-1:t<0&&(t=0),n[t]||e},xl=function(e,t,n){var r=t.startContainer,o=t.startOffset,i=t.endContainer,a=t.endOffset,u=function(e){var t
return 3===(t=e[0]).nodeType&&t===r&&o>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===a&&e.length>0&&t===i&&3===t.nodeType&&e.splice(e.length-1,1),e},c=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e)
return r},s=function(e,t){do{if(e.parentNode===t)return e
e=e.parentNode}while(e)},f=function(e,t,r){for(var o=r?"nextSibling":"previousSibling",i=e,a=i.parentNode;i&&i!==t;i=a){a=i.parentNode
var s=c(i===e?i:i[o],o)
s.length&&(r||s.reverse(),n(u(s)))}}
if(1===r.nodeType&&r.hasChildNodes()&&(r=wl(r,o)),1===i.nodeType&&i.hasChildNodes()&&(i=wl(i,a-1)),r===i)return n(u([r]))
for(var l=e.findCommonAncestor(r,i),d=r;d;d=d.parentNode){if(d===i)return f(r,l,!0)
if(d===l)break}for(d=i;d;d=d.parentNode){if(d===r)return f(i,l)
if(d===l)break}var m=s(r,l)||r,p=s(i,l)||i
f(r,m,!0)
var g=c(m===r?m:m.nextSibling,"nextSibling",p===i?p.nextSibling:p)
g.length&&n(u(g)),f(i,p)},Sl=function(e){var t=[]
if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n))
return t},Nl=function(e){return V(function(e){return X(e,(function(e){var t=Ju(e)
return t?[xt.fromDom(t)]:[]}))}(e),Vr)},El=function(e,t){var n=_u(t,"td[data-mce-selected],th[data-mce-selected]")
return n.length>0?n:Nl(e)},kl=function(e){return El(Sl(e.selection.getSel()),xt.fromDom(e.getBody()))},_l=function(e){return Wt(e).fold(s([e]),(function(t){return[e].concat(_l(t))}))},Al=function(e){return Kt(e).fold(s([e]),(function(t){return"br"===Rt(t)?zt(t).map((function(t){return[e].concat(Al(t))})).getOr([]):[e].concat(Al(t))}))},Rl=function(e,t){return Vu(function(e){var t=e.startContainer,n=e.startOffset
return Tn(t)?0===n?C.some(xt.fromDom(t)):C.none():C.from(t.childNodes[n]).map(xt.fromDom)}(t),function(e){var t=e.endContainer,n=e.endOffset
return Tn(t)?n===t.data.length?C.some(xt.fromDom(t)):C.none():C.from(t.childNodes[n-1]).map(xt.fromDom)}(t),(function(t,n){var r=W(_l(e),l(kt,t)),o=W(Al(e),l(kt,n))
return r.isSome()&&o.isSome()})).getOr(!1)},Tl=function(e,t,n,r){var o=n,i=new Br(n,o),a=fe(e.schema.getMoveCaretBeforeOnEnterElements(),(function(e,t){return!F(["td","th","table"],t.toLowerCase())}))
do{if(Tn(n)&&0!==Ct.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length))
if(a[n.nodeName])return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n))}while(n=r?i.next():i.prev())
"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},Dl=function(e){var t=e.selection.getSel()
return t&&t.rangeCount>0},Ol=function(e,t){var n=kl(e)
n.length>0?j(n,(function(n){var r=n.dom,o=e.dom.createRng()
o.setStartBefore(r),o.setEndAfter(r),t(o,!0)})):t(e.selection.getRng(),!1)},Bl=function(e,t,n){var r=jc(e,t)
n(r),e.moveToBookmark(r)}
var Pl=function(e,t){var n=function(t){return e(t)?C.from(t.dom.nodeValue):C.none()}
return{get:function(r){if(!e(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return n(r).getOr("")},getOption:n,set:function(n,r){if(!e(n))throw new Error("Can only set raw "+t+" value of a "+t+" node")
n.dom.nodeValue=r}}}(Bt,"text"),Ll=function(e){return Pl.get(e)},Il=function(e,t,n,r){return Ut(t).fold((function(){return"skipping"}),(function(o){return"br"===r||function(e){return Bt(e)&&Ll(e)===Wr}(t)?"valid":function(e){return Ot(e)&&Eu(e,Au())}(t)?"existing":Rf(t.dom)?"caret":Xf(e,n,r)&&Xf(e,Rt(o),n)?"valid":"invalid-child"}))},Ml=function(e,t,n,r){var o=t.uid,i=void 0===o?Iu("mce-annotation"):o,a=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),u=xt.fromTag("span",e)
Su(u,Au()),Hn(u,""+Tu(),i),Hn(u,""+Ru(),n)
var c=r(i,a),s=c.attributes,f=void 0===s?{}:s,l=c.classes,d=void 0===l?[]:l
return Vn(u,f),function(e,t){j(t,(function(t){Su(e,t)}))}(u,d),u},Fl=function(e,t,n,r,o){var i=[],a=Ml(e.getDoc(),o,n,r),u=fu(C.none()),c=function(){u.set(C.none())},s=function(e){j(e,f)},f=function(t){switch(Il(e,t,"span",Rt(t))){case"invalid-child":c()
var n=qt(t)
s(n),c()
break
case"valid":(function(e,t){tn(e,t),on(t,e)})(t,u.get().getOrThunk((function(){var e=Uu(a)
return i.push(e),u.set(C.some(e)),e})))}}
return xl(e.dom,t,(function(e){c(),function(e){var t=z(e,xt.fromDom)
s(t)}(e)})),i},Ul=function(e,t,n,r){e.undoManager.transact((function(){var o=e.selection,i=o.getRng(),a=kl(e).length>0
if(i.collapsed&&!a&&function(e,t){var n=Cl(e,t,[{inline:!0}])
t.setStart(n.startContainer,n.startOffset),t.setEnd(n.endContainer,n.endOffset),e.selection.setRng(t)}(e,i),o.getRng().collapsed&&!a){var u=Ml(e.getDoc(),r,t,n.decorate)
Mu(u,$r),o.getRng().insertNode(u.dom),o.select(u.dom)}else Bl(o,!1,(function(){Ol(e,(function(o){Fl(e,o,t,n.decorate,r)}))}))}))},zl=function(e){var t,n=(t={},{register:function(e,n){t[e]={name:e,settings:n}},lookup:function(e){return t.hasOwnProperty(e)?C.from(t[e]).map((function(e){return e.settings})):C.none()}})
Pu(e,n)
var r=Bu(e)
return{register:function(e,t){n.register(e,t)},annotate:function(t,r){n.lookup(t).each((function(n){Ul(e,t,n,r)}))},annotationChanged:function(e,t){r.addListener(e,t)},remove:function(t){Du(e,C.some(t)).each((function(e){var t=e.elements
j(t,sn)}))},getAll:function(t){var n=function(e,t){var n=xt.fromDom(e.getBody()),r=_u(n,"["+Ru()+'="'+t+'"]'),o={}
return j(r,(function(e){var t=qn(e,Tu()),n=o.hasOwnProperty(t)?o[t]:[]
o[t]=n.concat([e])})),o}(e,t)
return ie(n,(function(e){return z(e,(function(e){return e.dom}))}))}}}
function jl(e){return{getBookmark:l(Ff,e),moveToBookmark:l(Uf,e)}}(function(e){e.isBookmarkNode=zf})(jl||(jl={}))
var Hl=jl,Vl=function(e,t){for(;t&&t!==e;){if(In(t)||Mn(t))return t
t=t.parentNode}return null},ql=function(e,t,n){if(n.collapsed)return!1
if(gt.browser.isIE()&&n.startOffset===n.endOffset-1&&n.startContainer===n.endContainer){var r=n.startContainer.childNodes[n.startOffset]
if(xn(r))return U(r.getClientRects(),(function(n){return Gu(n,e,t)}))}return U(n.getClientRects(),(function(n){return Gu(n,e,t)}))},$l={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(e){return gt.mac?e.metaKey:e.ctrlKey&&!e.altKey}},Wl=Mn,Kl=function(e,t){var n,r,o,i,a,u,c,s,f,l,d,m,p,g,h=t.dom,v=Ct.each,y=t.getDoc(),b=document,C=Math.abs,w=Math.round,x=t.getBody(),S={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},N=function(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))},E=function(e){var n=e.target;(function(e,t){if("longpress"===e.type||0===e.type.indexOf("touch")){var n=e.touches[0]
return N(e.target)&&!ql(n.clientX,n.clientY,t)}return N(e.target)&&!ql(e.clientX,e.clientY,t)})(e,t.selection.getRng())&&!e.isDefaultPrevented()&&t.selection.select(n)},k=function(e){return t.dom.is(e,"figure.image")?e.querySelector("img"):e},_=function(e){var n=as(t)
return!!n&&("false"!==e.getAttribute("data-mce-resize")&&(e!==t.getBody()&&Nt(xt.fromDom(e),n)))},A=function(e,t,n){h.setStyles(k(e),{width:t,height:n})},R=function(e){var v,y,b,S
v=e.screenX-a,y=e.screenY-u,d=v*i[2]+c,m=y*i[3]+s,d=d<5?5:d,m=m<5?5:m,(N(n)&&!1!==function(e){return e.getParam("resize_img_proportional",!0,"boolean")}(t)?!$l.modifierPressed(e):$l.modifierPressed(e))&&(C(v)>C(y)?(m=w(d*f),d=w(m/f)):(d=w(m/f),m=w(d*f))),A(r,d,m),b=(b=i.startPos.x+v)>0?b:0,S=(S=i.startPos.y+y)>0?S:0,h.setStyles(o,{left:b,top:S,display:"block"}),o.innerHTML=d+" &times; "+m,i[2]<0&&r.clientWidth<=d&&h.setStyle(r,"left",undefined+(c-d)),i[3]<0&&r.clientHeight<=m&&h.setStyle(r,"top",undefined+(s-m)),(v=x.scrollWidth-p)+(y=x.scrollHeight-g)!==0&&h.setStyles(o,{left:b-v,top:S-y}),l||(function(e,t,n,r,o){e.fire("ObjectResizeStart",{target:t,width:n,height:r,origin:o})}(t,n,c,s,"corner-"+i.name),l=!0)},T=function(){var e=l
l=!1
var a=function(e,r){r&&(n.style[e]||!t.schema.isValid(n.nodeName.toLowerCase(),e)?h.setStyle(k(n),e,r):h.setAttrib(k(n),e,""+r))}
e&&(a("width",d),a("height",m)),h.unbind(y,"mousemove",R),h.unbind(y,"mouseup",T),b!==y&&(h.unbind(b,"mousemove",R),h.unbind(b,"mouseup",T)),h.remove(r),h.remove(o),D(n),e&&(function(e,t,n,r,o){e.fire("ObjectResized",{target:t,width:n,height:r,origin:o})}(t,n,d,m,"corner-"+i.name),h.setAttrib(n,"style",h.getAttrib(n,"style"))),t.nodeChanged()},D=function(e){O(),L()
var l=h.getPos(e,x),C=l.x,w=l.y,N=e.getBoundingClientRect(),E=N.width||N.right-N.left,D=N.height||N.bottom-N.top
n!==e&&(n=e,d=m=0)
var B=t.fire("ObjectSelected",{target:e})
_(e)&&!B.isDefaultPrevented()?v(S,(function(e,t){var l;(l=h.get("mceResizeHandle"+t))&&h.remove(l),l=h.add(x,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),11===gt.ie&&(l.contentEditable=!1),h.bind(l,"mousedown",(function(l){l.stopImmediatePropagation(),l.preventDefault(),function(l){a=l.screenX,u=l.screenY,c=k(n).clientWidth,s=k(n).clientHeight,f=s/c,(i=e).name=t,i.startPos={x:E*e[0]+C,y:D*e[1]+w},p=x.scrollWidth,g=x.scrollHeight,r=n.cloneNode(!0),h.addClass(r,"mce-clonedresizable"),h.setAttrib(r,"data-mce-bogus","all"),r.contentEditable=!1,r.unSelectabe=!0,h.setStyles(r,{left:C,top:w,margin:0}),A(r,E,D),r.removeAttribute("data-mce-selected"),x.appendChild(r),h.bind(y,"mousemove",R),h.bind(y,"mouseup",T),b!==y&&(h.bind(b,"mousemove",R),h.bind(b,"mouseup",T)),o=h.add(x,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},c+" &times; "+s)}(l)})),e.elm=l,h.setStyles(l,{left:E*e[0]+C-l.offsetWidth/2,top:D*e[1]+w-l.offsetHeight/2})})):O(),n.setAttribute("data-mce-selected","1")},O=function(){L(),n&&n.removeAttribute("data-mce-selected"),oe(S,(function(e,t){var n=h.get("mceResizeHandle"+t)
n&&(h.unbind(n),h.remove(n))}))},B=function(n){var r,o=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)}
l||t.removed||(v(h.select("img[data-mce-selected],hr[data-mce-selected]"),(function(e){e.removeAttribute("data-mce-selected")})),r="mousedown"===n.type?n.target:e.getNode(),o(r=h.$(r).closest("table,img,figure.image,hr")[0],x)&&(I(),o(e.getStart(!0),r)&&o(e.getEnd(!0),r))?D(r):O())},P=function(e){return Wl(Vl(t.getBody(),e))},L=function(){oe(S,(function(e){e.elm&&(h.unbind(e.elm),delete e.elm)}))},I=function(){try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(e){}}
t.on("init",(function(){if(I(),gt.browser.isIE()||gt.browser.isEdge()){t.on("mousedown click",(function(e){var n=e.target,r=n.nodeName
l||!/^(TABLE|IMG|HR)$/.test(r)||P(n)||(2!==e.button&&t.selection.select(n,"TABLE"===r),"mousedown"===e.type&&t.nodeChanged())}))
var e=function(e){var n=function(e){Ar.setEditorTimeout(t,(function(){return t.selection.select(e)}))}
if(P(e.target)||Un(e.target))return e.preventDefault(),void n(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&n(e.target))}
h.bind(x,"mscontrolselect",e),t.on("remove",(function(){return h.unbind(x,"mscontrolselect",e)}))}var r=Ar.throttle((function(e){t.composing||B(e)}))
t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",r),t.on("keyup compositionend",(function(e){n&&"TABLE"===n.nodeName&&r(e)})),t.on("hide blur",O),t.on("contextmenu longpress",E,!0)})),t.on("remove",L)
return{isResizable:_,showResizeRect:D,hideResizeRect:O,updateResizeRect:B,destroy:function(){n=r=null}}},Xl=function(e){return In(e)||Mn(e)},Yl=function(e,t,n){var r,o,i=n
if(i.caretPositionFromPoint)(o=i.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(o.offsetNode,o.offset),r.collapse(!0))
else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t)
else if(i.body.createTextRange){r=i.body.createTextRange()
try{r.moveToPoint(e,t),r.collapse(!0)}catch(a){r=function(e,t,n){var r,o=n.elementFromPoint(e,t),i=n.body.createTextRange()
if(o&&"HTML"!==o.tagName||(o=n.body),i.moveToElementText(o),(r=(r=Ct.toArray(i.getClientRects())).sort((function(e,n){return(e=Math.abs(Math.max(e.top-t,e.bottom-t)))-Math.abs(Math.max(n.top-t,n.bottom-t))}))).length>0){t=(r[0].bottom+r[0].top)/2
try{return i.moveToPoint(e,t),i.collapse(!0),i}catch(a){}}return null}(e,t,n)}return function(e,t){var n=e&&e.parentElement?e.parentElement():null
return Mn(function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(n,t,Xl))?null:e}(r,n.body)}return r},Gl=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},Jl=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(e,t,n)},Ql=function(e,t,n){return Jl(e,t,(function(e){return e.nodeName===n}))},Zl=function(e){return e&&"TABLE"===e.nodeName},ed=function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)},td=function(e,t){return Zr(e)&&!1===Jl(e,t,Rf)},nd=function(e,t,n){for(var r=new Br(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(Pn(t))return!0},rd=function(e,t,n,r,o){var i,a,u=e.getRoot(),c=e.schema.getNonEmptyElements(),s=e.getParent(o.parentNode,e.isBlock)||u
if(r&&Pn(o)&&t&&e.isEmpty(s))return C.some(bc(o.parentNode,e.nodeIndex(o)))
for(var f=new Br(o,s);a=f[r?"prev":"next"]();){if("false"===e.getContentEditableParent(a)||td(a,u))return C.none()
if(Tn(a)&&a.nodeValue.length>0)return!1===Ql(a,u,"A")?C.some(bc(a,r?a.nodeValue.length:0)):C.none()
if(e.isBlock(a)||c[a.nodeName.toLowerCase()])return C.none()
i=a}return n&&i?C.some(bc(i,0)):C.none()},od=function(e,t,n,r){var o,i,a,u,c=e.getRoot(),s=!1
o=r[(n?"start":"end")+"Container"],i=r[(n?"start":"end")+"Offset"]
var f=xn(o)&&i===o.childNodes.length,l=e.schema.getNonEmptyElements()
if(u=n,Zr(o))return C.none()
if(xn(o)&&i>o.childNodes.length-1&&(u=!1),On(o)&&(o=c,i=0),o===c){if(u&&(a=o.childNodes[i>0?i-1:0])){if(Zr(a))return C.none()
if(l[a.nodeName]||Zl(a))return C.none()}if(o.hasChildNodes()){if(i=Math.min(!u&&i>0?i-1:i,o.childNodes.length-1),o=o.childNodes[i],i=Tn(o)&&f?o.data.length:0,!t&&o===c.lastChild&&Zl(o))return C.none()
if(function(e,t){for(;t&&t!==e;){if(Mn(t))return!0
t=t.parentNode}return!1}(c,o)||Zr(o))return C.none()
if(o.hasChildNodes()&&!1===Zl(o)){a=o
var d=new Br(o,c)
do{if(Mn(a)||Zr(a)){s=!1
break}if(Tn(a)&&a.nodeValue.length>0){i=u?0:a.nodeValue.length,o=a,s=!0
break}if(l[a.nodeName.toLowerCase()]&&!ed(a)){i=e.nodeIndex(a),o=a.parentNode,u||i++,s=!0
break}}while(a=u?d.next():d.prev())}}}return t&&(Tn(o)&&0===i&&rd(e,f,t,!0,o).each((function(e){o=e.container(),i=e.offset(),s=!0})),xn(o)&&((a=o.childNodes[i])||(a=o.childNodes[i-1]),!a||!Pn(a)||function(e,t){return e.previousSibling&&e.previousSibling.nodeName===t}(a,"A")||nd(e,a,!1)||nd(e,a,!0)||rd(e,f,t,!0,a).each((function(e){o=e.container(),i=e.offset(),s=!0})))),u&&!t&&Tn(o)&&i===o.nodeValue.length&&rd(e,f,t,!1,o).each((function(e){o=e.container(),i=e.offset(),s=!0})),s?C.some(bc(o,i)):C.none()},id=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=bc.fromRangeStart(t)
return od(e,n,!0,r).each((function(e){n&&bc.isAbove(o,e)||r.setStart(e.container(),e.offset())})),n||od(e,n,!1,r).each((function(e){r.setEnd(e.container(),e.offset())})),n&&r.collapse(!0),Gl(t,r)?C.none():C.some(r)},ad=function(e,t){return e.splitText(t)},ud=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset
return t===r&&Tn(t)?n>0&&n<t.nodeValue.length&&(t=(r=ad(t,n)).previousSibling,o>n?(t=r=ad(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(Tn(t)&&n>0&&n<t.nodeValue.length&&(t=ad(t,n),n=0),Tn(r)&&o>0&&o<r.nodeValue.length&&(o=(r=ad(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}}
function cd(e){return{walk:function(t,n){return xl(e,t,n)},split:ud,normalize:function(t){return id(e,t).fold(g,(function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0}))}}}(function(e){e.compareRanges=Gl,e.getCaretRangeFromPoint=Yl,e.getSelectedNode=Ju,e.getNode=Qu})(cd||(cd={}))
var sd=cd
var fd,ld=function(e,t){var n=function(n){var r=t(n)
if(r<=0||null===r){var o=Xn(n,e)
return parseFloat(o)||0}return r},r=function(e,t){return $(t,(function(t,n){var r=Xn(e,n),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,n){if(!B(n)&&!n.match(/^[0-9]+$/))throw new Error(e+".set accepts only positive integer values. Value was "+n)
var r=t.dom
zn(r)&&(r.style[e]=n+"px")},get:n,getOuter:n,aggregate:r,max:function(e,t,n){var o=r(e,n)
return t>o?t-o:0}}}("height",(function(e){var t=e.dom
return fn(e)?t.getBoundingClientRect().height:t.offsetHeight})),dd=function(e,t){return e.view(t).fold(s([]),(function(t){var n=e.owner(t),r=dd(e,n)
return[t].concat(r)}))},md=Object.freeze({__proto__:null,view:function(e){var t
return(e.dom===document?C.none():C.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(xt.fromDom)},owner:function(e){return Mt(e)}}),pd=function(e){var t=xt.fromDom(document),n=gn(t),r=function(e,t){var n=t.owner(e)
return dd(t,n)}(e,md),o=pn(e),i=q(r,(function(e,t){var n=pn(t)
return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0})
return dn(i.left+o.left+n.left,i.top+o.top+n.top)},gd=function(e){return"textarea"===Rt(e)},hd=function(e,t){var n=function(e){var t=e.dom.ownerDocument,n=t.body,r=t.defaultView,o=t.documentElement
if(n===e.dom)return dn(n.offsetLeft,n.offsetTop)
var i=mn(null==r?void 0:r.pageYOffset,o.scrollTop),a=mn(null==r?void 0:r.pageXOffset,o.scrollLeft),u=mn(o.clientTop,n.clientTop),c=mn(o.clientLeft,n.clientLeft)
return pn(e).translate(a-c,i-u)}(e),r=function(e){return ld.get(e)}(e)
return{element:e,bottom:n.top+r,height:r,pos:n,cleanup:t}},vd=function(e,t){var n=function(e,t){var n=qt(e)
if(0===n.length||gd(e))return{element:e,offset:t}
if(t<n.length&&!gd(n[t]))return{element:n[t],offset:0}
var r=n[n.length-1]
return gd(r)?{element:e,offset:t}:"img"===Rt(r)?{element:r,offset:1}:Bt(r)?{element:r,offset:Ll(r).length}:{element:r,offset:qt(r).length}}(e,t),r=xt.fromHtml('<span data-mce-bogus="all">\ufeff</span>')
return tn(n.element,r),hd(r,(function(){return cn(r)}))},yd=function(e,t,n,r){xd(e,(function(o,i){return Cd(e,t,n,r)}),n)},bd=function(e,t,n,r,o){var i={elm:r.element.dom,alignToTop:o};(function(e,t){return e.fire("ScrollIntoView",t).isDefaultPrevented()})(e,i)||(n(t,gn(t).top,r,o),function(e,t){e.fire("AfterScrollIntoView",t)}(e,i))},Cd=function(e,t,n,r){var o=xt.fromDom(e.getBody()),i=xt.fromDom(e.getDoc())
o.dom.offsetWidth
var a=vd(xt.fromDom(n.startContainer),n.startOffset)
bd(e,i,t,a,r),a.cleanup()},wd=function(e,t,n,r){var o=xt.fromDom(e.getDoc())
bd(e,o,n,function(e){return hd(xt.fromDom(e),u)}(t),r)},xd=function(e,t,n){var r=n.startContainer,o=n.startOffset,i=n.endContainer,a=n.endOffset
t(xt.fromDom(r),xt.fromDom(i))
var u=e.dom.createRng()
u.setStart(r,o),u.setEnd(i,a),e.selection.setRng(n)},Sd=function(e,t,n,r){var o=e.pos
if(n)hn(o.left,o.top,r)
else{var i=o.top-t+e.height
hn(o.left,i,r)}},Nd=function(e,t,n,r,o){var i=n+t,a=r.pos.top,u=r.bottom,c=u-a>=n
if(a<t)Sd(r,n,!1!==o,e)
else if(a>i){Sd(r,n,c?!1!==o:!0===o,e)}else u>i&&!c&&Sd(r,n,!0===o,e)},Ed=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
Nd(e,t,o,n,r)},kd=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
Nd(e,t,o,n,r)
var i=pd(n.element),a=bn(window)
i.top<a.y?vn(n.element,!1!==r):i.top>a.bottom&&vn(n.element,!0===r)},_d=function(e,t,n){return yd(e,Ed,t,n)},Ad=function(e,t,n){return wd(e,t,Ed,n)},Rd=function(e,t,n){return yd(e,kd,t,n)},Td=function(e,t,n){return wd(e,t,kd,n)},Dd=function(e,t,n){(e.inline?_d:Rd)(e,t,n)},Od=function(e){var t=Jt(e).dom
return e.dom===t.activeElement},Bd=function(e){return void 0===e&&(e=xt.fromDom(document)),C.from(e.dom.activeElement).map(xt.fromDom)},Pd=function(e,t,n,r){return{start:e,soffset:t,finish:n,foffset:r}},Ld=pr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Id=(Ld.before,Ld.on,Ld.after,function(e){return e.fold(f,f,f)}),Md=pr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),Fd={domRange:Md.domRange,relative:Md.relative,exact:Md.exact,exactFromRange:function(e){return Md.exact(e.start,e.soffset,e.finish,e.foffset)},getWin:function(e){var t=function(e){return e.match({domRange:function(e){return xt.fromDom(e.startContainer)},relative:function(e,t){return Id(e)},exact:function(e,t,n,r){return e}})}(e)
return Ft(t)},range:Pd},Ud=at().browser,zd=function(e,t){var n=Bt(t)?Ll(t).length:qt(t).length+1
return e>n?n:e<0?0:e},jd=function(e){return Fd.range(e.start,zd(e.soffset,e.start),e.finish,zd(e.foffset,e.finish))},Hd=function(e,t){return!wn(t.dom)&&(At(e,t)||kt(e,t))},Vd=function(e){return function(t){return Hd(e,t.start)&&Hd(e,t.finish)}},qd=function(e){return!0===e.inline||Ud.isIE()},$d=function(e){return Fd.range(xt.fromDom(e.startContainer),e.startOffset,xt.fromDom(e.endContainer),e.endOffset)},Wd=function(e){return function(e){var t=e.getSelection()
return(t&&0!==t.rangeCount?C.from(t.getRangeAt(0)):C.none()).map($d)}(Ft(e).dom).filter(Vd(e))},Kd=function(e){var t=document.createRange()
try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),C.some(t)}catch(n){return C.none()}},Xd=function(e){var t=qd(e)?Wd(xt.fromDom(e.getBody())):C.none()
e.bookmark=t.isSome()?t:e.bookmark},Yd=function(e){return(e.bookmark?e.bookmark:C.none()).bind((function(t){return function(e,t){return C.from(t).filter(Vd(e)).map(jd)}(xt.fromDom(e.getBody()),t)})).bind(Kd)},Gd={isEditorUIElement:function(e){var t=e.className.toString()
return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},Jd=function(e,t){at().browser.isIE()?function(e){e.on("focusout",(function(){Xd(e)}))}(e):function(e,t){e.on("mouseup touchend",(function(e){t.throttle()}))}(e,t),e.on("keyup NodeChange",(function(t){(function(e){return"nodechange"===e.type&&e.selectionChange})(t)||Xd(e)}))},Qd=function(e){var t=vu((function(){Xd(e)}),0)
e.on("init",(function(){e.inline&&function(e,t){var n=function(){t.throttle()}
iu.DOM.bind(document,"mouseup",n),e.on("remove",(function(){iu.DOM.unbind(document,"mouseup",n)}))}(e,t),Jd(e,t)})),e.on("remove",(function(){t.cancel()}))},Zd=iu.DOM,em=function(e,t){var n=function(e){return e.getParam("custom_ui_selector","","string")}(e)
return null!==Zd.getParent(t,(function(t){return function(e){return Gd.isEditorUIElement(e)}(t)||!!n&&e.dom.is(t,n)}))},tm=function(e,t){var n=t.editor
Qd(n),n.on("focusin",(function(){var t=this,n=e.focusedEditor
n!==t&&(n&&n.fire("blur",{focusedEditor:t}),e.setActive(t),e.focusedEditor=t,t.fire("focus",{blurredEditor:n}),t.focus(!0))})),n.on("focusout",(function(){var t=this
Ar.setEditorTimeout(t,(function(){var n=e.focusedEditor
em(t,function(e){try{var t=Jt(xt.fromDom(e.getElement()))
return Bd(t).fold((function(){return document.body}),(function(e){return e.dom}))}catch(n){return document.body}}(t))||n!==t||(t.fire("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),fd||(fd=function(t){var n=e.activeEditor
n&&function(e){if(Gt()&&D(e.target)){var t=xt.fromDom(e.target)
if(Ot(t)&&en(t)&&e.composed&&e.composedPath){var n=e.composedPath()
if(n)return Z(n)}}return C.from(e.target)}(t).each((function(t){t.ownerDocument===document&&(t===document.body||em(n,t)||e.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))}))},Zd.bind(document,"focusin",fd))},nm=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(Zd.unbind(document,"focusin",fd),fd=null)},rm=function(e,t){return function(e){return e.collapsed?C.from(Qu(e.startContainer,e.startOffset)).map(xt.fromDom):C.none()}(t).bind((function(t){return Hr(t)?C.some(t):!1===At(e,t)?C.some(e):C.none()}))},om=function(e,t){rm(xt.fromDom(e.getBody()),t).bind((function(e){return kf(e.dom)})).fold((function(){e.selection.normalize()}),(function(t){return e.selection.setRng(t.toRange())}))},im=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},am=function(e){return Od(e)||(t=e,Bd(Jt(t)).filter((function(e){return t.dom.contains(e.dom)}))).isSome()
var t},um=function(e){return e.inline?function(e){var t=e.getBody()
return t&&am(xt.fromDom(t))}(e):function(e){return e.iframeElement&&Od(xt.fromDom(e.iframeElement))}(e)},cm=function(e){return um(e)||function(e){return Bd().filter((function(t){return!(void 0!==(n=t.dom.classList)&&(n.contains("tox-edit-area")||n.contains("tox-edit-area__iframe")||n.contains("mce-content-body")))&&em(e,t.dom)
var n})).isSome()}(e)},sm=function(e){return e.editorManager.setActive(e)},fm=function(e,t){e.removed||(t?sm(e):function(e){var t=e.selection,n=e.getBody(),r=t.getRng()
e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===um(e)&&Yd(e).each((function(t){e.selection.setRng(t),r=t}))
var o=function(e,t){return e.dom.getParent(t,(function(t){return"true"===e.dom.getContentEditable(t)}))}(e,t.getNode())
if(e.$.contains(n,o))return im(o),om(e,r),void sm(e)
e.inline||(gt.opera||im(n),e.getWin().focus()),(gt.gecko||e.inline)&&(im(n),om(e,r)),sm(e)}(e))},lm=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset
return C.from(i).map(xt.fromDom).map((function(e){return r&&t.collapsed?e:$t(e,o(e,a)).getOr(e)})).bind((function(e){return Ot(e)?C.some(e):Ut(e).filter(Ot)})).map((function(e){return e.dom})).getOr(e)},dm=function(e,t,n){return lm(e,t,!0,n,(function(e,t){return Math.min(e.dom.childNodes.length,t)}))},mm=function(e,t,n){return lm(e,t,!1,n,(function(e,t){return t>0?t-1:t}))},pm=function(e,t){for(var n=e;e&&Tn(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling
return e||n},gm=function(e,t){return z(t,(function(t){var n=e.fire("GetSelectionRange",{range:t})
return n.range!==t?n.range:t}))},hm=function(e){return O(e)?e:g},vm=function(e,t,n){var r=t(e),o=hm(n)
return r.orThunk((function(){return o(e)?C.none():function(e,t,n){for(var r=e.dom,o=hm(n);r.parentNode;){r=r.parentNode
var i=xt.fromDom(r),a=t(i)
if(a.isSome())return a
if(o(i))break}return C.none()}(e,t,o)}))},ym=Jf,bm=function(e,t,n){var r=e.formatter.get(n)
if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0
return!1},Cm=function(e,t,n,r){var o=e.dom.getRoot()
return t!==o&&(t=e.dom.getParent(t,(function(t){return!!bm(e,t,n)||(t.parentNode===o||!!Sm(e,t,n,r,!0))})),Sm(e,t,n,r))},wm=function(e,t,n){return!!ym(t,n.inline)||(!!ym(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0))},xm=function(e,t,n,r,o,i){var a,u,c,s=n[r]
if(n.onmatch)return n.onmatch(t,n,r)
if(s)if(void 0===s.length){for(a in s)if(s.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):Zf(e,t,a),o&&!u&&!n.exact)return
if((!o||n.exact)&&!ym(u,Qf(e,Gf(s[a],i),a)))return}}else for(c=0;c<s.length;c++)if("attributes"===r?e.getAttrib(t,s[c]):Zf(e,t,s[c]))return n
return n},Sm=function(e,t,n,r,o){var i,a,u,c,s=e.formatter.get(n),f=e.dom
if(s&&t)for(a=0;a<s.length;a++)if(i=s[a],wm(e.dom,t,i)&&xm(f,t,i,"attributes",o,r)&&xm(f,t,i,"styles",o,r)){if(c=i.classes)for(u=0;u<c.length;u++)if(!e.dom.hasClass(t,c[u]))return
return i}},Nm=function(e,t,n,r){if(r)return Cm(e,r,t,n)
if(r=e.selection.getNode(),Cm(e,r,t,n))return!0
var o=e.selection.getStart()
return!(o===r||!Cm(e,o,t,n))},Em=function(e,t){var n=function(t){return kt(t,xt.fromDom(e.getBody()))}
return C.from(e.selection.getStart(!0)).bind((function(r){return vm(xt.fromDom(r),(function(n){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n)
if(r.isSome())return r}return C.none()}(t,(function(t){return function(t,n){return Sm(e,t.dom,n)?C.some(n):C.none()}(n,t)}))}),n)})).getOrNull()},km=function(e,t,n){return $(n,(function(n,r){var o=function(e,t){return U(e.formatter.get(t),(function(e){var t=function(e){return e.length>1&&"%"===e.charAt(0)}
return U(["styles","attributes"],(function(n){return de(e,n).exists((function(e){var n=k(e)?e:le(e)
return U(n,t)}))}))}))}(e,r)
return e.formatter.matchNode(t,r,{},o)?n.concat([r]):n}),[])},_m={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},Am=function(e,t,n){var r=n?"lastChild":"firstChild",o=n?"prev":"next"
if(e[r])return e[r]
if(e!==t){var i=e[o]
if(i)return i
for(var a=e.parent;a&&a!==t;a=a.parent)if(i=a[o])return i}},Rm=function(e){if(!Co(e.value))return!1
var t=e.parent
return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)},Tm=function(e){var t="a"===e.name&&!e.attr("href")&&e.attr("id")
return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t},Dm=function(){function e(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}return e.create=function(t,n){var r=new e(t,_m[t]||1)
return n&&oe(n,(function(e,t){r.attr(t,e)})),r},e.prototype.replace=function(e){var t=this
return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},e.prototype.attr=function(e,t){var n,r=this
if("string"!=typeof e)return null!=e&&oe(e,(function(e,t){r.attr(t,e)})),r
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
return n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=r,e},e.prototype.getAll=function(e){for(var t=[],n=this.firstChild;n;n=Am(n,this))n.name===e&&t.push(n)
return t},e.prototype.empty=function(){var e=this
if(e.firstChild){for(var t=[],n=e.firstChild;n;n=Am(n,e))t.push(n)
for(var r=t.length;r--;){(n=t[r]).parent=n.firstChild=n.lastChild=n.next=n.prev=null}}return e.firstChild=e.lastChild=null,e},e.prototype.isEmpty=function(e,t,n){void 0===t&&(t={})
var r=this,o=r.firstChild
if(Tm(r))return!1
if(o)do{if(1===o.type){if(o.attr("data-mce-bogus"))continue
if(e[o.name])return!1
if(Tm(o))return!1}if(8===o.type)return!1
if(3===o.type&&!Rm(o))return!1
if(3===o.type&&o.parent&&t[o.parent.name]&&Co(o.value))return!1
if(n&&n(o))return!1}while(o=Am(o,r))
return!0},e.prototype.walk=function(e){return Am(this,null,e)},e}(),Om=Ct.makeMap,Bm=function(e){var t=[],n=(e=e||{}).indent,r=Om(e.indent_before||""),o=Om(e.indent_after||""),i=qo.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="html"===e.element_format
return{start:function(e,u,c){var s,f,l,d
if(n&&r[e]&&t.length>0&&(d=t[t.length-1]).length>0&&"\n"!==d&&t.push("\n"),t.push("<",e),u)for(s=0,f=u.length;s<f;s++)l=u[s],t.push(" ",l.name,'="',i(l.value,!0),'"')
t[t.length]=!c||a?">":" />",c&&n&&o[e]&&t.length>0&&(d=t[t.length-1]).length>0&&"\n"!==d&&t.push("\n")},end:function(e){var r
t.push("</",e,">"),n&&o[e]&&t.length>0&&(r=t[t.length-1]).length>0&&"\n"!==r&&t.push("\n")},text:function(e,n){e.length>0&&(t[t.length]=n?e:i(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,r){r?t.push("<?",e," ",i(r),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}},Pm=function(e,t){void 0===t&&(t=ei())
var n=Bm(e);(e=e||{}).validate=!("validate"in e)||e.validate
return{serialize:function(r){var o=e.validate,i={3:function(e){n.text(e.value,e.raw)},8:function(e){n.comment(e.value)},7:function(e){n.pi(e.name,e.value)},10:function(e){n.doctype(e.value)},4:function(e){n.cdata(e.value)},11:function(e){if(e=e.firstChild)do{a(e)}while(e=e.next)}}
n.reset()
var a=function(e){var r,u,c,s,f,l,d,m,p,g=i[e.type]
if(g)g(e)
else{if(r=e.name,u=e.shortEnded,c=e.attributes,o&&c&&c.length>1&&((l=[]).map={},p=t.getElementRule(e.name))){for(d=0,m=p.attributesOrder.length;d<m;d++)(s=p.attributesOrder[d])in c.map&&(f=c.map[s],l.map[s]=f,l.push({name:s,value:f}))
for(d=0,m=c.length;d<m;d++)(s=c[d].name)in l.map||(f=c.map[s],l.map[s]=f,l.push({name:s,value:f}))
c=l}if(n.start(e.name,c,u),!u){if(e=e.firstChild)do{a(e)}while(e=e.next)
n.end(r)}}}
return 1!==r.type||e.inner?i[11](r):a(r),n.getContent()}}},Lm=function(e,t){return e.replace(new RegExp(t.prefix+"_[0-9]+","g"),(function(e){return de(t.uris,e).getOr(e)}))},Im=["img","video"],Mm=function(e,t,n){return!e.allow_html_data_urls&&(/^data:image\//i.test(t)?function(e,t){return!(T(e)?F(Im,t):e)}(e.allow_svg_data_urls,n)&&/^data:image\/svg\+xml/i.test(t):/^data:/i.test(t))},Fm=function(e,t,n){var r,o,i=1,a=e.getShortEndedElements(),u=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g
for(u.lastIndex=r=n;o=u.exec(t);){if(r=u.lastIndex,"/"===o[1])i--
else if(!o[1]){if(o[2]in a)continue
i++}if(0===i)break}return r},Um=function(e,t){var n=e.exec(t)
if(n){var r=n[1],o=n[2]
return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null}
function zm(e,t){void 0===t&&(t=ei())
var n=function(){}
!1!==(e=e||{}).fix_self_closing&&(e.fix_self_closing=!0)
var r=e.comment?e.comment:n,o=e.cdata?e.cdata:n,i=e.text?e.text:n,a=e.start?e.start:n,u=e.end?e.end:n,c=e.pi?e.pi:n,s=e.doctype?e.doctype:n,f=function(n,f){void 0===f&&(f="html")
for(var l,d,m,p,g,h,v,y,b,C,w,x,S,N,E,k,_,A,R,T=n.html,D=0,O=[],B=0,P=qo.decode,L=Ct.makeMap("src,href,data,background,formaction,poster,xlink:href"),I=/((java|vb)script|mhtml):/i,M="html"===f?0:1,F=function(e){var t,n
for(t=O.length;t--&&O[t].name!==e;);if(t>=0){for(n=O.length-1;n>=t;n--)(e=O[n]).valid&&u(e.name)
O.length=t}},U=function(e,t){return i(Lm(e,n),t)},z=function(t){""!==t&&(">"===t.charAt(0)&&(t=" "+t),e.allow_conditional_comments||"[if"!==t.substr(0,3).toLowerCase()||(t=" "+t),r(Lm(t,n)))},j=function(e,t){var n=e||"",r=!Oe(n,"--"),o=function(e,t,n){void 0===n&&(n=0)
var r=e.toLowerCase()
if(-1!==r.indexOf("[if ",n)&&function(e,t){return/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t))}(r,n)){var o=r.indexOf("[endif]",n)
return r.indexOf(">",o)}if(t){var i=r.indexOf(">",n)
return-1!==i?i:r.length}var a=/--!?>/
a.lastIndex=n
var u=a.exec(e)
return u?u.index+u[0].length:r.length}(T,r,t)
return e=T.substr(t,o-t),z(r?n+e:e),o+1},H=function(t,r,o,i,a){var u,c
if(o=function(e){return de(n.uris,e).getOr(e)}((r=r.toLowerCase())in K?r:P(o||i||a||"")),X&&!y&&!1===function(e){return 0===e.indexOf("data-")||0===e.indexOf("aria-")}(r)){if(!(u=N[r])&&E){for(c=E.length;c--&&!(u=E[c]).pattern.test(r););-1===c&&(u=null)}if(!u)return
if(u.validValues&&!(o in u.validValues))return}if(L[r]&&!e.allow_script_urls){var s=o.replace(/[\s\u0000-\u001F]+/g,"")
try{s=decodeURIComponent(s)}catch(f){s=unescape(s)}if(I.test(s))return
if(Mm(e,s,t))return}y&&(r in L||0===r.indexOf("on"))||(p.map[r]=o,p.push({name:r,value:o}))},V=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),q=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,$=t.getShortEndedElements(),W=e.self_closing_elements||t.getSelfClosingElements(),K=t.getBoolAttrs(),X=e.validate,Y=e.remove_internals,G=e.fix_self_closing,J=t.getSpecialElements(),Q=T+">";l=V.exec(Q);){var Z=l[0]
if(D<l.index&&U(P(T.substr(D,l.index-D))),d=l[7])":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),F(d)
else if(d=l[8]){if(l.index+Z.length>T.length){U(P(T.substr(l.index))),D=l.index+Z.length
continue}":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),b=d in $,G&&W[d]&&O.length>0&&O[O.length-1].name===d&&F(d)
var ee=Um(q,l[9])
if(null!==ee){if("all"===ee){D=Fm(t,T,V.lastIndex),V.lastIndex=D
continue}w=!1}if(!X||(C=t.getElementRule(d))){if(w=!0,X&&(N=C.attributes,E=C.attributePatterns),(S=l[9])?((y=-1!==S.indexOf("data-mce-type"))&&Y&&(w=!1),(p=[]).map={},S.replace(q,(function(e,t,n,r,o){return H(d,t,n,r,o),""}))):(p=[]).map={},X&&!y){if(k=C.attributesRequired,_=C.attributesDefault,A=C.attributesForced,C.removeEmptyAttrs&&!p.length&&(w=!1),A)for(g=A.length;g--;)v=(x=A[g]).name,"{$uid}"===(R=x.value)&&(R="mce_"+B++),p.map[v]=R,p.push({name:v,value:R})
if(_)for(g=_.length;g--;)(v=(x=_[g]).name)in p.map||("{$uid}"===(R=x.value)&&(R="mce_"+B++),p.map[v]=R,p.push({name:v,value:R}))
if(k){for(g=k.length;g--&&!(k[g]in p.map););-1===g&&(w=!1)}if(x=p.map["data-mce-bogus"]){if("all"===x){D=Fm(t,T,V.lastIndex),V.lastIndex=D
continue}w=!1}}w&&a(d,p,b)}else w=!1
if(m=J[d]){m.lastIndex=D=l.index+Z.length,(l=m.exec(T))?(w&&(h=T.substr(D,l.index-D)),D=l.index+l[0].length):(h=T.substr(D),D=T.length),w&&(h.length>0&&U(h,!0),u(d)),V.lastIndex=D
continue}b||(S&&S.indexOf("/")===S.length-1?w&&u(d):O.push({name:d,valid:w}))}else if(d=l[1])z(d)
else if(d=l[2]){if(!(1===M||e.preserve_cdata||O.length>0&&t.isValidChild(O[O.length-1].name,"#cdata"))){D=j("",l.index+2),V.lastIndex=D
continue}o(d)}else if(d=l[3])s(d)
else{if((d=l[4])||"<!"===Z){D=j(d,l.index+Z.length),V.lastIndex=D
continue}if(d=l[5]){if(1!==M){D=j("?",l.index+2),V.lastIndex=D
continue}c(d,l[6])}}D=l.index+Z.length}for(D<T.length&&U(P(T.substr(D))),g=O.length-1;g>=0;g--)(d=O[g]).valid&&u(d.name)}
return{parse:function(e,t){void 0===t&&(t="html"),f(function(e){for(var t,n=/data:[^;]+;base64,([a-z0-9\+\/=]+)/gi,r=[],o={},i=Iu("img"),a=0,u=0;t=n.exec(e);){var c=t[0],s=i+"_"+u++
o[s]=c,a<t.index&&r.push(e.substr(a,t.index-a)),r.push(s),a=t.index+c.length}return 0===a?{prefix:i,uris:o,html:e}:(a<e.length&&r.push(e.substr(a)),{prefix:i,uris:o,html:r.join("")})}(e),t)}}}(function(e){e.findEndTag=Fm})(zm||(zm={}))
var jm=zm,Hm=function(e,t){var n,r,o,i,a=t,u=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,c=e.schema
a=function(e,t){var n=new RegExp(["\\s?("+e.join("|")+')="[^"]+"'].join("|"),"gi")
return t.replace(n,"")}(e.getTempAttrs(),a)
for(var s=c.getShortEndedElements();i=u.exec(a);)r=u.lastIndex,o=i[0].length,n=s[i[1]]?r:jm.findEndTag(c,a,r),a=a.substring(0,r-o)+a.substring(n),u.lastIndex=r-o
return Xr(a)},Vm=Hm,qm=function(e,t,n,r){var o
return t.format=n,t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),o="raw"===t.format?Ct.trim(Vm(e.serializer,r.innerHTML)):"text"===t.format?e.dom.isEmpty(r)?"":Xr(r.innerText||r.textContent):"tree"===t.format?e.serializer.serialize(r,t):function(e,t){var n=Kc(e),r=new RegExp("^(<"+n+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+n+">[\r\n]*|<br \\/>[\r\n]*)$")
return t.replace(r,"")}(e,e.serializer.serialize(r,t)),F(["text","tree"],t.format)||qr(xt.fromDom(r))?t.content=o:t.content=Ct.trim(o),t.no_events||e.fire("GetContent",t),t.content},$m=Ct.each,Wm=function(e){this.compare=function(t,n){if(t.nodeName!==n.nodeName)return!1
var r=function(t){var n={}
return $m(e.getAttribs(t),(function(r){var o=r.nodeName.toLowerCase()
0!==o.indexOf("_")&&"style"!==o&&0!==o.indexOf("data-")&&(n[o]=e.getAttrib(t,o))})),n},o=function(e,t){var n,r
for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1
if(e[r]!==n)return!1
delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1
return!0}
return!!o(r(t),r(n))&&(!!o(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))&&(!zf(t)&&!zf(n)))}},Km=function(e,t,n){return C.from(n.container()).filter(Tn).exists((function(r){var o=e?0:-1
return t(r.data.charAt(n.offset()+o))}))},Xm=l(Km,!0,Hf),Ym=l(Km,!1,Hf),Gm=function(e){var t=e.container()
return Tn(t)&&(0===t.data.length||Kr(t.data)&&Hl.isBookmarkNode(t.parentNode))},Jm=function(e,t){return function(n){return C.from($s(e?0:-1,n)).filter(t).isSome()}},Qm=function(e){return Ln(e)&&"block"===Xn(xt.fromDom(e),"display")},Zm=function(e){return Mn(e)&&!function(e){return xn(e)&&"all"===e.getAttribute("data-mce-bogus")}(e)},ep=Jm(!0,Qm),tp=Jm(!1,Qm),np=Jm(!0,Un),rp=Jm(!1,Un),op=Jm(!0,_n),ip=Jm(!1,_n),ap=Jm(!0,Zm),up=Jm(!1,Zm),cp=function(e){var t=_u(e,"br"),n=V(function(e){for(var t=[],n=e.dom;n;)t.push(xt.fromDom(n)),n=n.lastChild
return t}(e).slice(-1),Fr)
t.length===n.length&&j(n,cn)},sp=function(e){un(e),on(e,xt.fromHtml('<br data-mce-bogus="1">'))},fp=function(e){Kt(e).each((function(t){zt(t).each((function(n){Ir(e)&&Fr(t)&&Ir(n)&&cn(t)}))}))},lp=function(e,t,n){return At(t,e)?function(e,t){for(var n=O(t)?t:g,r=e.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,a=xt.fromDom(i)
if(o.push(a),!0===n(a))break
r=i}return o}(e,(function(e){return n(e)||kt(e,t)})).slice(0,-1):[]},dp=function(e,t){return lp(e,t,g)},mp=function(e,t){return[e].concat(dp(e,t))},pp=function(e,t,n){return xf(e,t,n,Gm)},gp=function(e,t){return W(mp(xt.fromDom(t.container()),e),Ir)},hp=function(e,t,n){return pp(e,t.dom,n).forall((function(e){return gp(t,n).fold((function(){return!1===qs(e,n,t.dom)}),(function(r){return!1===qs(e,n,t.dom)&&At(r,xt.fromDom(e.container()))}))}))},vp=function(e,t,n){return gp(t,n).fold((function(){return pp(e,t.dom,n).forall((function(e){return!1===qs(e,n,t.dom)}))}),(function(t){return pp(e,t.dom,n).isNone()}))},yp=l(vp,!1),bp=l(vp,!0),Cp=l(hp,!1),wp=l(hp,!0),xp=function(e){return ef(e).exists(Fr)},Sp=function(e,t,n){var r=V(mp(xt.fromDom(n.container()),t),Ir),o=Z(r).getOr(t)
return Cf(e,o.dom,n).filter(xp)},Np=function(e,t){return ef(t).exists(Fr)||Sp(!0,e,t).isSome()},Ep=function(e,t){return function(e){return C.from(e.getNode(!0)).map(xt.fromDom)}(t).exists(Fr)||Sp(!1,e,t).isSome()},kp=l(Sp,!1),_p=l(Sp,!0),Ap=function(e){return bc.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},Rp=function(e,t){var n=V(mp(xt.fromDom(t.container()),e),Ir)
return Z(n).getOr(e)},Tp=function(e,t){return Ap(t)?Ym(t):Ym(t)||Ef(Rp(e,t).dom,t).exists(Ym)},Dp=function(e,t){return Ap(t)?Xm(t):Xm(t)||Nf(Rp(e,t).dom,t).exists(Xm)},Op=function(e){return ef(e).bind((function(e){return br(e,Ot)})).exists((function(e){return function(e){return F(["pre","pre-wrap"],e)}(Xn(e,"white-space"))}))},Bp=function(e,t){return function(e,t){return Ef(e.dom,t).isNone()}(e,t)||function(e,t){return Nf(e.dom,t).isNone()}(e,t)||yp(e,t)||bp(e,t)||Ep(e,t)||Np(e,t)},Pp=function(e,t){return!Op(t)&&(yp(e,t)||Cp(e,t)||Ep(e,t)||Tp(e,t))},Lp=function(e,t){return!Op(t)&&(bp(e,t)||wp(e,t)||Np(e,t)||Dp(e,t))},Ip=function(e,t){return Pp(e,t)||Lp(e,function(e){var t=e.container(),n=e.offset()
return Tn(t)&&n<t.data.length?bc(t,n+1):e}(t))},Mp=function(e,t){return jf(e.charAt(t))},Fp=function(e){var t=e.container()
return Tn(t)&&De(t.data,$r)},Up=function(e){var t=e.data,n=function(e){var t=e.split("")
return z(t,(function(e,n){return jf(e)&&n>0&&n<t.length-1&&Vf(t[n-1])&&Vf(t[n+1])?" ":e})).join("")}(t)
return n!==t&&(e.data=n,!0)},zp=function(e,t){return C.some(t).filter(Fp).bind((function(t){var n=t.container()
return function(e,t){var n=t.data,r=bc(t,0)
return!(!Mp(n,0)||Ip(e,r)||(t.data=" "+n.slice(1),0))}(e,n)||Up(n)||function(e,t){var n=t.data,r=bc(t,n.length-1)
return!(!Mp(n,n.length-1)||Ip(e,r)||(t.data=n.slice(0,-1)+" ",0))}(e,n)?C.some(t):C.none()}))},jp=function(e){var t=xt.fromDom(e.getBody())
e.selection.isCollapsed()&&zp(t,bc.fromRangeStart(e.selection.getRng())).each((function(t){e.selection.setRng(t.toRange())}))},Hp=function(e,t,n){if(0!==n){var r=xt.fromDom(e),o=yr(r,Ir).getOr(r),i=e.data.slice(t,t+n),a=t+n>=e.data.length&&Lp(o,wc(e,e.data.length)),u=0===t&&Pp(o,wc(e,0))
e.replaceData(t,n,function(e,t,n){return $(e,(function(r,o){return Hf(o)||jf(o)?r.previousCharIsSpace||""===r.str&&t||r.str.length===e.length-1&&n?{previousCharIsSpace:!1,str:r.str+$r}:{previousCharIsSpace:!0,str:r.str+" "}:{previousCharIsSpace:!1,str:r.str+o}}),{previousCharIsSpace:!1,str:""}).str}(i,u,a))}},Vp=function(e,t){var n=e.data.slice(t),r=n.length-Le(n).length
return Hp(e,t,r)},qp=function(e,t){var n=e.data.slice(0,t),r=n.length-Ie(n).length
return Hp(e,t-r,r)},$p=function(e,t,n,r){void 0===r&&(r=!0)
var o=Ie(e.data).length,i=r?e:t,a=r?t:e
return r?i.appendData(a.data):i.insertData(0,a.data),cn(xt.fromDom(a)),n&&Vp(i,o),i},Wp=function(e,t){return function(e,t){var n=e.container(),r=e.offset()
return!1===wc.isTextPosition(e)&&n===t.parentNode&&r>wc.before(t).offset()}(t,e)?wc(t.container(),t.offset()-1):t},Kp=function(e){return ho(e.previousSibling)?C.some((t=e.previousSibling,Tn(t)?wc(t,t.data.length):wc.after(t))):e.previousSibling?_f(e.previousSibling):C.none()
var t},Xp=function(e){return ho(e.nextSibling)?C.some((t=e.nextSibling,Tn(t)?wc(t,0):wc.before(t))):e.nextSibling?kf(e.nextSibling):C.none()
var t},Yp=function(e,t){return Kp(t).orThunk((function(){return Xp(t)})).orThunk((function(){return function(e,t){var n=wc.before(t.previousSibling?t.previousSibling:t.parentNode)
return Ef(e,n).fold((function(){return Nf(e,wc.after(t))}),C.some)}(e,t)}))},Gp=function(e,t){return Xp(t).orThunk((function(){return Kp(t)})).orThunk((function(){return function(e,t){return Nf(e,wc.after(t)).fold((function(){return Ef(e,wc.before(t))}),C.some)}(e,t)}))},Jp=function(e,t,n){return function(e,t,n){return e?Gp(t,n):Yp(t,n)}(e,t,n).map(l(Wp,n))},Qp=function(e,t,n){n.fold((function(){e.focus()}),(function(n){e.selection.setRng(n.toRange(),t)}))},Zp=function(e,t){return t&&me(e.schema.getBlockElements(),Rt(t))},eg=function(e){if(ko(e)){var t=xt.fromHtml('<br data-mce-bogus="1">')
return un(e),on(e,t),C.some(wc.before(t.dom))}return C.none()},tg=function(e,t,n){var r,o,i,a,u=zt(e).filter(Bt),c=jt(e).filter(Bt)
return cn(e),(r=u,o=c,i=t,a=function(e,t,r){var o=e.dom,i=t.dom,a=o.data.length
return $p(o,i,n),r.container()===i?wc(o,a):r},r.isSome()&&o.isSome()&&i.isSome()?C.some(a(r.getOrDie(),o.getOrDie(),i.getOrDie())):C.none()).orThunk((function(){return n&&(u.each((function(e){return qp(e.dom,e.dom.length)})),c.each((function(e){return Vp(e.dom,0)}))),t}))},ng=function(e,t,n,r){void 0===r&&(r=!0)
var o,i=Jp(t,e.getBody(),n.dom),a=yr(n,l(Zp,e),(o=e.getBody(),function(e){return e.dom===o})),u=tg(n,i,function(e,t){return me(e.schema.getTextInlineElements(),Rt(t))}(e,n))
e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):a.bind(eg).fold((function(){r&&Qp(e,t,u)}),(function(n){r&&Qp(e,t,C.some(n))}))},rg=function(e,t){return{start:e,end:t}},og=pr([{removeTable:["element"]},{emptyCells:["cells"]},{deleteCellSelection:["rng","cell"]}]),ig=function(e,t){return Sr(xt.fromDom(e),"td,th",t)},ag=function(e,t){return wr(e,"table",t)},ug=function(e){return!kt(e.start,e.end)},cg=function(e,t){return ag(e.start,t).bind((function(n){return ag(e.end,t).bind((function(e){return t=kt(n,e),r=n,t?C.some(r):C.none()
var t,r}))}))},sg=function(e){return _u(e,"td,th")},fg=function(e,t){var n=ig(t.startContainer,e),r=ig(t.endContainer,e)
return t.collapsed?C.none():Vu(n,r,rg).fold((function(){return n.fold((function(){return r.bind((function(t){return ag(t,e).bind((function(e){return Z(sg(e)).map((function(e){return rg(e,t)}))}))}))}),(function(t){return ag(t,e).bind((function(e){return ee(sg(e)).map((function(e){return rg(t,e)}))}))}))}),(function(t){return lg(e,t)?C.none():function(e,t){return ag(e.start,t).bind((function(t){return ee(sg(t)).map((function(t){return rg(e.start,t)}))}))}(t,e)}))},lg=function(e,t){return cg(t,e).isSome()},dg=function(e,t,n){return e.filter((function(e){return ug(e)&&lg(n,e)})).orThunk((function(){return fg(n,t)})).bind((function(e){return function(e,t){return cg(e,t).map((function(t){return function(e,t,n){return{rng:e,table:t,cells:n}}(e,t,sg(t))}))}(e,n)}))},mg=function(e,t){return K(e,(function(e){return kt(e,t)}))},pg=function(e,t,n){return e.filter((function(e){return function(e,t){return!ug(e)&&cg(e,t).exists((function(e){var t=e.dom.rows
return 1===t.length&&1===t[0].cells.length}))}(e,n)&&Rl(e.start,t)})).map((function(e){return e.start}))},gg=function(e){return function(e){return Vu(mg(e.cells,e.rng.start),mg(e.cells,e.rng.end),(function(t,n){return e.cells.slice(t,n+1)}))}(e).map((function(t){var n=e.cells
return t.length===n.length?og.removeTable(e.table):og.emptyCells(t)}))},hg=function(e,t){var n=function(e){return function(t){return kt(e,t)}}(e),r=function(e,t){var n=ig(e.startContainer,t),r=ig(e.endContainer,t)
return Vu(n,r,rg)}(t,n)
return pg(r,t,n).map((function(e){return og.deleteCellSelection(t,e)})).orThunk((function(){return dg(r,t,n).bind(gg)}))},vg=function(e){var t
return(8===Tt(t=e)||"#comment"===Rt(t)?zt(e):Kt(e)).bind(vg).orThunk((function(){return C.some(e)}))},yg=function(e,t){return j(t,sp),e.selection.setCursorLocation(t[0].dom,0),!0},bg=function(e,t,n){t.deleteContents()
var r,o=vg(n).getOr(n),i=xt.fromDom(e.dom.getParent(o.dom,e.dom.isBlock))
if(ko(i)&&(sp(i),e.selection.setCursorLocation(i.dom,0)),!kt(n,i)){var a=Ut(i).is(n)?[]:Ut(r=i).map(qt).map((function(e){return V(e,(function(e){return!kt(r,e)}))})).getOr([])
j(a.concat(qt(n)),(function(e){kt(e,i)||At(e,i)||cn(e)}))}return!0},Cg=function(e,t){return ng(e,!1,t),!0},wg=function(e,t,n,r){return Sg(t,r).fold((function(){return function(e,t,n){return hg(t,n).map((function(t){return t.fold(l(Cg,e),l(yg,e),l(bg,e))}))}(e,t,n)}),(function(t){return function(e,t){return Ng(e,t)}(e,t)})).getOr(!1)},xg=function(e,t){return W(mp(t,e),Vr)},Sg=function(e,t){return W(mp(t,e),(function(e){return"caption"===Rt(e)}))},Ng=function(e,t){return sp(t),e.selection.setCursorLocation(t.dom,0),C.some(!0)},Eg=function(e,t,n,r,o){return wf(n,e.getBody(),o).bind((function(i){return function(e,t,n,r){return kf(e.dom).bind((function(o){return _f(e.dom).map((function(e){return t?n.isEqual(o)&&r.isEqual(e):n.isEqual(e)&&r.isEqual(o)}))})).getOr(!0)}(r,n,o,i)?function(e,t){return Ng(e,t)}(e,r):function(e,t,n){return Sg(e,xt.fromDom(n.getNode())).map((function(e){return!1===kt(e,t)}))}(t,r,i)})).or(C.some(!0))},kg=function(e,t,n,r){var o=wc.fromRangeStart(e.selection.getRng())
return xg(n,r).bind((function(r){return ko(r)?Ng(e,r):function(e,t,n,r,o){return wf(n,e.getBody(),o).bind((function(e){return xg(t,xt.fromDom(e.getNode())).map((function(e){return!1===kt(e,r)}))}))}(e,n,t,r,o)})).getOr(!1)},_g=function(e,t){return e?op(t):ip(t)},Ag=function(e,t,n){var r=xt.fromDom(e.getBody())
return Sg(r,n).fold((function(){return kg(e,t,r,n)||function(e,t){var n=wc.fromRangeStart(e.selection.getRng())
return _g(t,n)||Cf(t,e.getBody(),n).exists((function(e){return _g(t,e)}))}(e,t)}),(function(n){return function(e,t,n,r){var o=wc.fromRangeStart(e.selection.getRng())
return ko(r)?Ng(e,r):Eg(e,n,t,r,o)}(e,t,r,n).getOr(!1)}))},Rg=function(e,t){var n=xt.fromDom(e.selection.getStart(!0)),r=kl(e)
return e.selection.isCollapsed()&&0===r.length?Ag(e,t,n):function(e,t){var n=xt.fromDom(e.getBody()),r=e.selection.getRng(),o=kl(e)
return 0!==o.length?yg(e,o):wg(e,n,r,t)}(e,n)},Tg=function(e){var t=wc.fromRangeStart(e),n=wc.fromRangeEnd(e),r=e.commonAncestorContainer
return Cf(!1,r,n).map((function(o){return!qs(t,n,r)&&qs(t,o,r)?function(e,t,n,r){var o=document.createRange()
return o.setStart(e,t),o.setEnd(n,r),o}(t.container(),t.offset(),o.container(),o.offset()):e})).getOr(e)},Dg=function(e){return e.collapsed?e:Tg(e)},Og=function(e,t){return e.getBlockElements()[t.name]&&function(e){return e.firstChild&&e.firstChild===e.lastChild}(t)&&function(e){return"br"===e.name||e.value===$r}(t.firstChild)},Bg=function(e,t){var n=t.firstChild,r=t.lastChild
return n&&"meta"===n.name&&(n=n.next),r&&"mce_marker"===r.attr("id")&&(r=r.prev),function(e,t){var n=e.getNonEmptyElements()
return t&&(t.isEmpty(n)||Og(e,t))}(e,r)&&(r=r.prev),!(!n||n!==r)&&("ul"===n.name||"ol"===n.name)},Pg=function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&function(e){return e.data===$r||Pn(e)}(e.firstChild)},Lg=function(e){return e.length>0&&(!(t=e[e.length-1]).firstChild||Pg(t))?e.slice(0,-1):e
var t},Ig=function(e,t){var n=e.getParent(t,e.isBlock)
return n&&"LI"===n.nodeName?n:null},Mg=function(e,t){var n=wc.after(e),r=gf(t).prev(n)
return r?r.toRange():null},Fg=function(e,t,n){var r=e.parentNode
return Ct.each(t,(function(t){r.insertBefore(t,e)})),function(e,t){var n=wc.before(e),r=gf(t).next(n)
return r?r.toRange():null}(e,n)},Ug=function(e,t,n,r){var o,i=function(e,t,n){var r=t.serialize(n)
return function(e){var t=e.firstChild,n=e.lastChild
return t&&"META"===t.nodeName&&t.parentNode.removeChild(t),n&&"mce_marker"===n.id&&n.parentNode.removeChild(n),e}(e.createFragment(r))}(t,e,r),a=Ig(t,n.startContainer),u=Lg((o=i.firstChild,Ct.grep(o.childNodes,(function(e){return"LI"===e.nodeName})))),c=t.getRoot(),s=function(e){var r=wc.fromRangeStart(n),o=gf(t.getRoot()),i=1===e?o.prev(r):o.next(r)
return!i||Ig(t,i.getNode())!==a}
return s(1)?Fg(a,u,c):s(2)?function(e,t,n,r){return r.insertAfter(t.reverse(),e),Mg(t[0],n)}(a,u,c,t):function(e,t,n,r){var o=function(e,t){var n=t.cloneRange(),r=t.cloneRange()
return n.setStartBefore(e),r.setEndAfter(e),[n.cloneContents(),r.cloneContents()]}(e,r),i=e.parentNode
return i.insertBefore(o[0],e),Ct.each(t,(function(t){i.insertBefore(t,e)})),i.insertBefore(o[1],e),i.removeChild(e),Mg(t[t.length-1],n)}(a,u,c,n)},zg=Fn,jg=function(e){var t=e.dom,n=Dg(e.selection.getRng())
e.selection.setRng(n)
var r=t.getParent(n.startContainer,zg)
!function(e,t,n){return null!==n&&n===e.getParent(t.endContainer,zg)&&Rl(xt.fromDom(n),t)}(t,n,r)?e.getDoc().execCommand("Delete",!1,null):bg(e,n,xt.fromDom(r))},Hg=function(e,t,n){var r,o,i,a,u,c,s=e.selection,f=e.dom;/^ | $/.test(t)&&(t=function(e,t,n){var r=xt.fromDom(e.getRoot())
return n=Pp(r,wc.fromRangeStart(t))?n.replace(/^ /,"&nbsp;"):n.replace(/^&nbsp;/," "),Lp(r,wc.fromRangeEnd(t))?n.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):n.replace(/&nbsp;(<br( \/)?>)?$/," ")}(f,s.getRng(),t))
var l=e.parser,d=n.merge,m=Pm({validate:ss(e)},e.schema),p='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>'
if(i={content:t,format:"html",selection:!0,paste:n.paste},(i=e.fire("BeforeSetContent",i)).isDefaultPrevented())e.fire("SetContent",{content:i.content,format:"html",selection:!0,paste:n.paste})
else{-1===(t=i.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,p)
var g=(u=s.getRng()).startContainer||(u.parentElement?u.parentElement():null),h=e.getBody()
g===h&&s.isCollapsed()&&f.isBlock(h.firstChild)&&function(e,t){return t&&!e.schema.getShortEndedElements()[t.nodeName]}(e,h.firstChild)&&f.isEmpty(h.firstChild)&&((u=f.createRng()).setStart(h.firstChild,0),u.setEnd(h.firstChild,0),s.setRng(u)),s.isCollapsed()||jg(e)
var v,y={context:(r=s.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0},b=l.parse(t,y)
if(!0===n.paste&&Bg(e.schema,b)&&function(e,t){return!!Ig(e,t)}(f,r))return u=Ug(m,f,s.getRng(),b),s.setRng(u),void e.fire("SetContent",i)
if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(b),"mce_marker"===(c=b.lastChild).attr("id"))for(a=c,c=c.prev;c;c=c.walk(!0))if(3===c.type||!f.isBlock(c.name)){e.schema.isValidChild(c.parent.name,"span")&&c.parent.insert(a,c,"br"===c.name)
break}if(e._selectionOverrides.showBlockCaretContainer(r),y.invalid){for(e.selection.setContent(p),r=s.getNode(),o=e.getBody(),9===r.nodeType?r=c=o:c=r;c!==o;)r=c,c=c.parentNode
t=r===o?o.innerHTML:f.getOuterHTML(r),t=m.serialize(l.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,(function(){return m.serialize(b)})))),r===o?f.setHTML(o,t):f.setOuterHTML(r,t)}else(function(e,t,n){if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n)
else{var r=n.firstChild,o=n.lastChild
!r||r===o&&"BR"===r.nodeName?e.dom.setHTML(n,t):e.selection.setContent(t)}})(e,t=m.serialize(b),r);(function(e,t){var n=e.schema.getTextInlineElements(),r=e.dom
if(t){var o=e.getBody(),i=new Wm(r)
Ct.each(r.select("*[data-mce-fragment]"),(function(e){for(var t=e.parentNode;t&&t!==o;t=t.parentNode)n[e.nodeName.toLowerCase()]&&i.compare(t,e)&&r.remove(e,!0)}))}})(e,d),function(e,t){var n,r,o=e.dom,i=e.selection
if(t){i.scrollIntoView(t)
var a=function(t){for(var n=e.getBody();t&&t!==n;t=t.parentNode)if("false"===o.getContentEditable(t))return t
return null}(t)
if(a)return o.remove(t),void i.select(a)
var u=o.createRng(),c=t.previousSibling
c&&3===c.nodeType?(u.setStart(c,c.nodeValue.length),gt.ie||(r=t.nextSibling)&&3===r.nodeType&&(c.appendData(r.data),r.parentNode.removeChild(r))):(u.setStartBefore(t),u.setEndBefore(t))
var s=o.getParent(t,o.isBlock)
o.remove(t),s&&o.isEmpty(s)&&(e.$(s).empty(),u.setStart(s,0),u.setEnd(s,0),zg(s)||function(e){return!!e.getAttribute("data-mce-fragment")}(s)||!(n=function(t){var n=wc.fromRangeStart(t)
if(n=gf(e.getBody()).next(n))return n.toRange()}(u))?o.add(s,o.create("br",{"data-mce-bogus":"1"})):(u=n,o.remove(s))),i.setRng(u)}}(e,f.get("mce_marker")),v=e.getBody(),Ct.each(v.getElementsByTagName("*"),(function(e){e.removeAttribute("data-mce-fragment")})),function(e,t){C.from(e.getParent(t,"td,th")).map(xt.fromDom).each(fp)}(f,s.getStart()),e.fire("SetContent",i),e.addVisual()}},Vg=function(e,t){t(e),e.firstChild&&Vg(e.firstChild,t),e.next&&Vg(e.next,t)},qg=function(e,t,n){var r=function(e,t,n){var r={},o={},i=[]
for(var a in n.firstChild&&Vg(n.firstChild,(function(n){j(e,(function(e){e.name===n.name&&(r[e.name]?r[e.name].nodes.push(n):r[e.name]={filter:e,nodes:[n]})})),j(t,(function(e){"string"==typeof n.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(n):o[e.name]={filter:e,nodes:[n]})}))})),r)r.hasOwnProperty(a)&&i.push(r[a])
for(var u in o)o.hasOwnProperty(u)&&i.push(o[u])
return i}(e,t,n)
j(r,(function(e){j(e.filter.callbacks,(function(t){t(e.nodes,e.filter.name,{})}))}))},$g=function(e){return e instanceof Dm},Wg=function(e,t){e.dom.setHTML(e.getBody(),t),function(e){um(e)&&kf(e.getBody()).each((function(t){var n=t.getNode(),r=_n(n)?kf(n).getOr(t):t
e.selection.setRng(r.toRange())}))}(e)},Kg=function(e,t,n){return n.format=n.format?n.format:"html",n.set=!0,n.content=$g(t)?"":t,n.no_events||e.fire("BeforeSetContent",n),$g(t)||(t=n.content),C.from(e.getBody()).fold(s(t),(function(r){return $g(t)?function(e,t,n,r){qg(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n)
var o=Pm({validate:e.validate},e.schema).serialize(n)
return r.content=qr(xt.fromDom(t))?o:Ct.trim(o),Wg(e,r.content),r.no_events||e.fire("SetContent",r),n}(e,r,t,n):function(e,t,n,r){var o,i
return 0===n.length||/^\s+$/.test(n)?(i='<br data-mce-bogus="1">',"TABLE"===t.nodeName?n="<tr><td>"+i+"</td></tr>":/^(UL|OL)$/.test(t.nodeName)&&(n="<li>"+i+"</li>"),(o=Kc(e))&&e.schema.isValidChild(t.nodeName.toLowerCase(),o.toLowerCase())?(n=i,n=e.dom.createHTML(o,Xc(e),n)):n||(n='<br data-mce-bogus="1">'),Wg(e,n),e.fire("SetContent",r)):("raw"!==r.format&&(n=Pm({validate:e.validate},e.schema).serialize(e.parser.parse(n,{isRootContent:!0,insert:!0}))),r.content=qr(xt.fromDom(t))?n:Ct.trim(n),Wg(e,r.content),r.no_events||e.fire("SetContent",r)),r.content}(e,r,t,n)}))},Xg=function(e,t){return function(e,t){var n=e.dom
return n.parentNode?Cr(xt.fromDom(n.parentNode),(function(n){return!kt(e,n)&&t(n)})):C.none()}(e,t).isSome()},Yg=Wr,Gg="_mce_caret",Jg=function(e){return function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==Yg||e.childNodes.length>1)return[]
1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length>0},Qg=function(e){if(e){var t=new Br(e,e)
for(e=t.current();e;e=t.next())if(Tn(e))return e}return null},Zg=function(e){var t=xt.fromTag("span")
return Vn(t,{id:Gg,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&on(t,xt.fromText(Yg)),t},eh=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(Jg(t))ng(e,!1,xt.fromDom(t),n)
else{var i=o.getRng(),a=r.getParent(t,r.isBlock),u=i.startContainer,c=i.startOffset,s=i.endContainer,f=i.endOffset,l=function(e){var t=Qg(e)
return t&&t.nodeValue.charAt(0)===Yg&&t.deleteData(0,1),t}(t)
r.remove(t,!0),u===l&&c>0&&i.setStart(l,c-1),s===l&&f>0&&i.setEnd(l,f-1),a&&r.isEmpty(a)&&sp(xt.fromDom(a)),o.setRng(i)}},th=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(t)eh(e,t,n)
else if(!(t=Tf(e.getBody(),o.getStart())))for(;t=r.get(Gg);)eh(e,t,!1)},nh=function(e,t){return e.appendChild(t),t},rh=function(e,t){var n=q(e,(function(e,t){return nh(e,t.cloneNode(!1))}),t)
return nh(n,n.ownerDocument.createTextNode(Yg))},oh=function(e,t,n,r){var o,i,a,u=e.dom,c=e.selection,s=[],f=c.getRng(),d=f.startContainer,m=f.startOffset
for(i=d,3===d.nodeType&&(m!==d.nodeValue.length&&(o=!0),i=i.parentNode);i;){if(Sm(e,i,t,n,r)){a=i
break}i.nextSibling&&(o=!0),s.push(i),i=i.parentNode}if(a)if(o){var p=c.getBookmark()
f.collapse(!0)
var g=Cl(e,f,e.formatter.get(t),!0)
g=ud(g),e.formatter.remove(t,n,g,r),c.moveToBookmark(p)}else{var h=Tf(e.getBody(),a),v=Zg(!1).dom;(function(e,t,n){var r=e.dom,o=r.getParent(n,l(Kf,e))
o&&r.isEmpty(o)?n.parentNode.replaceChild(t,n):(cp(xt.fromDom(n)),r.isEmpty(n)?n.parentNode.replaceChild(t,n):r.insertAfter(t,n))})(e,v,null!==h?h:a)
var y=function(e,t,n,r,o,i){var a=e.formatter,u=e.dom,c=V(ne(a.get()),(function(e){return e!==r&&!De(e,"removeformat")})),s=km(e,n,c)
if(V(s,(function(t){return!nl(e,t,r)})).length>0){var f=n.cloneNode(!1)
return u.add(t,f),a.remove(r,o,f,i),u.remove(f),C.some(f)}return C.none()}(e,v,a,t,n,r),b=rh(s.concat(y.toArray()),v)
eh(e,h,!1),c.setCursorLocation(b,1),u.isEmpty(a)&&u.remove(a)}},ih=function(e){e.on("mouseup keydown",(function(t){(function(e,t){var n=e.selection,r=e.getBody()
th(e,null,!1),8!==t&&46!==t||!n.isCollapsed()||n.getStart().innerHTML!==Yg||th(e,Tf(r,n.getStart())),37!==t&&39!==t||th(e,Tf(r,n.getStart()))})(e,t.keyCode)}))},ah=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(Rt(t))&&!Rf(t.dom)&&!kn(t.dom)},uh={},ch=ye,sh=he;(function(e,t){uh[e]||(uh[e]=[]),uh[e].push(t)})("pre",(function(e){var t,n=e.selection.getRng(),r=Sn(["pre"])
n.collapsed||(t=e.selection.getSelectedBlocks(),sh(ch(ch(t,r),(function(e){return r(e.previousSibling)&&-1!==be(t,e.previousSibling)})),(function(e){var t,n
t=e.previousSibling,Ja(n=e).remove(),Ja(t).append("<br><br>").append(n.childNodes)})))}))
var fh=Ct.each,lh=function(e){return xn(e)&&!zf(e)&&!Rf(e)&&!kn(e)},dh=function(e,t){var n
for(n=e;n;n=n[t]){if(Tn(n)&&0!==n.nodeValue.length)return e
if(xn(n)&&!zf(n))return n}return e},mh=function(e,t,n){var r,o,i=new Wm(e)
if(t&&n&&(t=dh(t,"previousSibling"),n=dh(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)o=r,r=r.nextSibling,t.appendChild(o)
return e.remove(n),Ct.each(Ct.grep(n.childNodes),(function(e){t.appendChild(e)})),t}return n},ph=function(e,t,n,r){if(r&&!1!==t.merge_siblings){var o=mh(e,Wf(r),r)
mh(e,o,Wf(o,!0))}},gh=function(e,t,n){fh(e.childNodes,(function(e){lh(e)&&(t(e)&&n(e),e.hasChildNodes()&&gh(e,t,n))}))},hh=function(e,t){return function(n){return!(!n||!Zf(e,n,t))}},vh=function(e,t,n){return function(r){e.setStyle(r,t,n),""===r.getAttribute("style")&&r.removeAttribute("style"),function(e,t){"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,!0)}(e,r)}},yh=pr([{keep:[]},{rename:["name"]},{removed:[]}]),bh=/^(src|href|style)$/,Ch=Ct.each,wh=Jf,xh=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},Sh=function(e,t,n){var r,o
if(r=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],xn(r)){var i=r.childNodes.length-1
!n&&o&&o--,r=r.childNodes[o>i?i:o]}return Tn(r)&&n&&o>=r.nodeValue.length&&(r=new Br(r,e.getBody()).next()||r),Tn(r)&&!n&&0===o&&(r=new Br(r,e.getBody()).prev()||r),r},Nh=function(e,t){var n=t?"firstChild":"lastChild"
if(function(e){return/^(TR|TH|TD)$/.test(e.nodeName)}(e)&&e[n]){var r=e[n]
return"TR"===e.nodeName&&r[n]||r}return e},Eh=function(e,t,n,r){var o=e.create(n,r)
return t.parentNode.insertBefore(o,t),o.appendChild(t),o},kh=function(e,t,n,r,o){var i=xt.fromDom(t),a=xt.fromDom(e.create(r,o)),u=n?Vt(i):Ht(i)
return an(a,u),n?(tn(i,a),rn(a,i)):(nn(i,a),on(a,i)),a.dom},_h=function(e,t,n,r){return!(t=Wf(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},Ah=function(e,t,n,r,o){var i,a=e.dom
if(!function(e,t,n){return!!wh(t,n.inline)||!!wh(t,n.block)||(n.selector?xn(t)&&e.is(t,n.selector):void 0)}(a,r,t)&&!function(e,t){return t.links&&"A"===e.nodeName}(r,t))return yh.keep()
var u=r
if(t.inline&&"all"===t.remove&&k(t.preserve_attributes)){var c=V(a.getAttribs(u),(function(e){return F(t.preserve_attributes,e.name.toLowerCase())}))
if(a.removeAllAttribs(u),j(c,(function(e){return a.setAttrib(u,e.name,e.value)})),c.length>0)return yh.rename("span")}if("all"!==t.remove){Ch(t.styles,(function(e,r){e=Qf(a,Gf(e,n),r+""),B(r)&&(r=e,o=null),(t.remove_similar||!o||wh(Zf(a,o,r),e))&&a.setStyle(u,r,""),i=!0})),i&&""===a.getAttrib(u,"style")&&(u.removeAttribute("style"),u.removeAttribute("data-mce-style")),Ch(t.attributes,(function(e,r){var i
if(e=Gf(e,n),B(r)&&(r=e,o=null),t.remove_similar||!o||wh(a.getAttrib(o,r),e)){if("class"===r&&(e=a.getAttrib(u,r))&&(i="",j(e.split(/\s+/),(function(e){/mce\-\w+/.test(e)&&(i+=(i?" ":"")+e)})),i))return void a.setAttrib(u,r,i)
"class"===r&&u.removeAttribute("className"),bh.test(r)&&u.removeAttribute("data-mce-"+r),u.removeAttribute(r)}})),Ch(t.classes,(function(e){e=Gf(e,n),o&&!a.hasClass(o,e)||a.removeClass(u,e)}))
for(var s=a.getAttribs(u),f=0;f<s.length;f++){var l=s[f].nodeName
if(0!==l.indexOf("_")&&0!==l.indexOf("data-"))return yh.keep()}}return"none"!==t.remove?(function(e,t,n){var r,o=t.parentNode,i=e.dom,a=Kc(e)
n.block&&(a?o===i.getRoot()&&(n.list_block&&wh(t,n.list_block)||j(te(t.childNodes),(function(t){Xf(e,a,t.nodeName.toLowerCase())?r?r.appendChild(t):(r=Eh(i,t,a),i.setAttribs(r,e.settings.forced_root_block_attrs)):r=0}))):i.isBlock(t)&&!i.isBlock(o)&&(_h(i,t,!1)||_h(i,t.firstChild,!0,!0)||t.insertBefore(i.create("br"),t.firstChild),_h(i,t,!0)||_h(i,t.lastChild,!1,!0)||t.appendChild(i.create("br")))),n.selector&&n.inline&&!wh(n.inline,t)||i.remove(t,!0)}(e,u,t),yh.removed()):yh.keep()},Rh=function(e,t,n,r,o){return Ah(e,t,n,r,o).fold(g,(function(t){return e.dom.rename(r,t),!0}),h)},Th=function(e,t,n,r){return Ah(e,t,n,r,r).fold(s(r),(function(t){return e.dom.createFragment().appendChild(r),e.dom.rename(r,t)}),s(null))},Dh=function(e,t,n,r,o){var i=e.formatter.get(t),a=i[0],u=!0,c=e.dom,s=e.selection,f=function(r){var u=function(e,t,n,r,o){var i
return j(tl(e.dom,t.parentNode).reverse(),(function(t){if(!i&&"_start"!==t.id&&"_end"!==t.id){var a=Sm(e,t,n,r,o)
a&&!1!==a.split&&(i=t)}})),i}(e,r,t,n,o)
return function(e,t,n,r,o,i,a,u){var c,s,f,l=e.dom
if(n){for(var d=n.parentNode,m=r.parentNode;m&&m!==d;m=m.parentNode){c=l.clone(m,!1)
for(var p=0;p<t.length&&null!==(c=Th(e,t[p],u,c));p++);c&&(s&&c.appendChild(s),f||(f=c),s=c)}!i||a.mixed&&l.isBlock(n)||(r=l.split(n,r)),s&&(o.parentNode.insertBefore(s,o),f.appendChild(o),a.inline&&ph(l,a,0,s))}return r}(e,i,u,r,r,!0,a,n)},l=function(t){var r,o
xn(t)&&c.getContentEditable(t)&&(r=u,u="true"===c.getContentEditable(t),o=!0)
var s=te(t.childNodes)
if(u&&!o)for(var f=0;f<i.length&&!Rh(e,i[f],n,t,t);f++);if(a.deep&&s.length){for(f=0;f<s.length;f++)l(s[f])
o&&(u=r)}},d=function(e){var t=c.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"]
return function(e){return zf(e)&&xn(e)&&("_start"===e.id||"_end"===e.id)}(n)&&(n=n[e?"firstChild":"lastChild"]),Tn(n)&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),c.remove(t,!0),n},m=function(t){var n,r,o=Cl(e,t,i,t.collapsed)
if(a.split){if(o=ud(o),(n=Sh(e,o,!0))!==(r=Sh(e,o))){if(n=Nh(n,!0),r=Nh(r,!1),xh(c,n,r)){var u=C.from(n.firstChild).getOr(n)
return f(kh(c,u,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void d(!0)}if(xh(c,r,n)){u=C.from(r.lastChild).getOr(r)
return f(kh(c,u,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void d(!1)}n=Eh(c,n,"span",{id:"_start","data-mce-type":"bookmark"}),r=Eh(c,r,"span",{id:"_end","data-mce-type":"bookmark"})
var s=c.createRng()
s.setStartAfter(n),s.setEndBefore(r),xl(c,s,(function(e){j(e,(function(e){zf(e)||zf(e.parentNode)||f(e)}))})),f(n),f(r),n=d(!0),r=d()}else n=r=f(n)
o.startContainer=n.parentNode?n.parentNode:n,o.startOffset=c.nodeIndex(n),o.endContainer=r.parentNode?r.parentNode:r,o.endOffset=c.nodeIndex(r)+1}xl(c,o,(function(t){j(t,(function(t){l(t)
j(["underline","line-through","overline"],(function(n){xn(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&el(c,t.parentNode)===n&&Rh(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))}))}))}
if(r)if(qf(r)){var p=c.createRng()
p.setStartBefore(r),p.setEndAfter(r),m(p)}else m(r)
else if("false"!==c.getContentEditable(s.getNode()))s.isCollapsed()&&a.inline&&!kl(e).length?oh(e,t,n,o):(Bl(s,!0,(function(){Ol(e,m)})),a.inline&&Nm(e,t,n,s.getStart())&&$f(c,s,s.getRng()),e.nodeChanged())
else{r=s.getNode()
for(var g=0;g<i.length&&(!i[g].ceFalseOverride||!Rh(e,i[g],n,r,r));g++);}},Oh=Ct.each,Bh=function(e,t,n,r){Oh(t,(function(t){Oh(e.dom.select(t.inline,r),(function(r){lh(r)&&Rh(e,t,n,r,t.exact?r:null)})),function(e,t,n){if(t.clear_child_styles){var r=t.links?"*:not(a)":"*"
fh(e.select(r,n),(function(n){lh(n)&&fh(t.styles,(function(t,r){e.setStyle(n,r,"")}))}))}}(e.dom,t,r)}))},Ph=Ct.each,Lh=function(e,t){return pe(e,t)},Ih=function(e,t,n,r){var o=e.formatter.get(t),i=o[0],a=!r&&e.selection.isCollapsed(),u=e.dom,c=e.selection,s=function(e,t){if(t=t||i,e){if(t.onformat&&t.onformat(e,t,n,r),Ph(t.styles,(function(t,r){u.setStyle(e,r,Gf(t,n))})),t.styles){var o=u.getAttrib(e,"style")
o&&u.setAttrib(e,"data-mce-style",o)}Ph(t.attributes,(function(t,r){u.setAttrib(e,r,Gf(t,n))})),Ph(t.classes,(function(t){t=Gf(t,n),u.hasClass(e,t)||u.addClass(e,t)}))}},f=function(e,t){var n=!1
return!!ol(i)&&(Ph(e,(function(e){if(!("collapsed"in e)||e.collapsed===a)return u.is(t,e.selector)&&!Rf(t)?(s(t,e),n=!0,!1):void 0})),n)},l=function(r,a,u,c){var l=[],d=!0,m=i.inline||i.block,p=r.create(m)
s(p),xl(r,a,(function(a){var u,g=function(a){var h=!1,v=d,y=a.nodeName.toLowerCase(),b=a.parentNode.nodeName.toLowerCase()
if(xn(a)&&r.getContentEditable(a)&&(v=d,d="true"===r.getContentEditable(a),h=!0),Pn(a)&&!function(e,t,n,r){if(function(e){return e.getParam("format_empty_lines",!1,"boolean")}(e)&&il(t)){var o=Se(Se({},e.schema.getTextBlockElements()),{td:{},th:{},li:{},dt:{},dd:{},figcaption:{},caption:{},details:{},summary:{}}),i=Xg(xt.fromDom(n),(function(e){return Rf(e.dom)}))
return pe(o,r)&&ko(xt.fromDom(n.parentNode),!1)&&!i}return!1}(e,i,a,b))return u=null,void(rl(i)&&r.remove(a))
if(i.wrapper&&Sm(e,a,t,n))u=null
else{if(d&&!h&&rl(i)&&!i.wrapper&&Kf(e,y)&&Xf(e,b,m)){var C=r.rename(a,m)
return s(C),l.push(C),void(u=null)}if(ol(i)){var w=f(o,a)
if(!Lh(i,"inline")||w)return void(u=null)}!d||h||!Xf(e,m,y)||!Xf(e,b,m)||!c&&3===a.nodeType&&1===a.nodeValue.length&&65279===a.nodeValue.charCodeAt(0)||Rf(a)||Lh(i,"inline")&&r.isBlock(a)?(u=null,Ph(Ct.grep(a.childNodes),g),h&&(d=v),u=null):(u||(u=r.clone(p,!1),a.parentNode.insertBefore(u,a),l.push(u)),u.appendChild(a))}}
Ph(a,g)})),!0===i.links&&Ph(l,(function(e){var t=function(e){"A"===e.nodeName&&s(e,i),Ph(Ct.grep(e.childNodes),t)}
t(e)})),Ph(l,(function(a){var u=function(e){var t=!1
return Ph(e.childNodes,(function(e){if(function(e){return e&&1===e.nodeType&&!zf(e)&&!Rf(e)&&!kn(e)}(e))return t=e,!1})),t},c=function(e){var t=0
return Ph(e.childNodes,(function(e){(function(e){return D(e)&&Tn(e)&&0===e.length})(e)||zf(e)||t++})),t}(a)
!(l.length>1)&&r.isBlock(a)||0!==c?(il(i)||i.wrapper)&&(i.exact||1!==c||(a=function(e){var t,n=u(e)
return n&&!zf(n)&&wm(r,n,i)&&(t=r.clone(n,!1),s(t),r.replace(t,e,!0),r.remove(n,!0)),t||e}(a)),Bh(e,o,n,a),function(e,t,n,r,o){Sm(e,o.parentNode,n,r)&&Rh(e,t,r,o)||t.merge_with_parents&&e.dom.getParent(o.parentNode,(function(i){if(Sm(e,i,n,r))return Rh(e,t,r,o),!0}))}(e,i,t,n,a),function(e,t,n,r){t.styles&&t.styles.backgroundColor&&gh(r,hh(e,"fontSize"),vh(e,"backgroundColor",Gf(t.styles.backgroundColor,n)))}(r,i,n,a),function(e,t,n,r){var o=function(t){if(1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType){var n=el(e,t.parentNode)
e.getStyle(t,"color")&&n?e.setStyle(t,"text-decoration",n):e.getStyle(t,"text-decoration")===n&&e.setStyle(t,"text-decoration",null)}}
t.styles&&(t.styles.color||t.styles.textDecoration)&&(Ct.walk(r,o,"childNodes"),o(r))}(r,i,0,a),function(e,t,n,r){"sub"!==t.inline&&"sup"!==t.inline||(gh(r,hh(e,"fontSize"),vh(e,"fontSize","")),e.remove(e.select("sup"===t.inline?"sub":"sup",r),!0))}(r,i,0,a),ph(r,i,0,a)):r.remove(a,!0)}))}
if("false"!==u.getContentEditable(c.getNode())){if(i){if(r)if(qf(r)){if(!f(o,r)){var d=u.createRng()
d.setStartBefore(r),d.setEndAfter(r),l(u,Cl(e,d,o),0,!0)}}else l(u,r,0,!0)
else if(a&&il(i)&&!kl(e).length)(function(e,t,n){var r,o,i=e.selection,a=i.getRng(),u=a.startOffset,c=a.startContainer.nodeValue;(r=Tf(e.getBody(),i.getStart()))&&(o=Qg(r))
var s,f,l=/[^\s\u00a0\u00ad\u200b\ufeff]/
if(c&&u>0&&u<c.length&&l.test(c.charAt(u))&&l.test(c.charAt(u-1))){var d=i.getBookmark()
a.collapse(!0)
var m=Cl(e,a,e.formatter.get(t))
m=ud(m),e.formatter.apply(t,n,m),i.moveToBookmark(d)}else r&&o.nodeValue===Yg||(s=e.getDoc(),f=Zg(!0).dom,o=(r=s.importNode(f,!0)).firstChild,a.insertNode(r),u=1),e.formatter.apply(t,n,r),i.setCursorLocation(o,u)})(e,t,n)
else{var m=c.getNode(),p=o[0]
e.settings.forced_root_block||!p.defaultBlock||u.getParent(m,u.isBlock)||Ih(e,p.defaultBlock),c.setRng(Dg(c.getRng())),Bl(c,!0,(function(t){Ol(e,(function(t,n){var r=n?t:Cl(e,t,o)
l(u,r)}))})),$f(u,c,c.getRng()),e.nodeChanged()}(function(e,t){sh(uh[e],(function(e){e(t)}))})(t,e)}}else{r=c.getNode()
for(var g=0,h=o.length;g<h;g++){var v=o[g]
if(v.ceFalseOverride&&ol(v)&&u.is(r,v.selector))return void s(r,v)}}},Mh=function(e,t,n,r){var o=ne(n.get()),i={},a={},u=V(tl(e.dom,t),(function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}))
oe(r,(function(t,n){Ct.each(u,(function(r){return e.formatter.matchNode(r,n,{},t.similar)?(-1===o.indexOf(n)&&(j(t.callbacks,(function(e){e(!0,{node:r,format:n,parents:u})})),i[n]=t.callbacks),a[n]=t.callbacks,!1):!bm(e,r,n)&&void 0}))}))
var c=Fh(n.get(),a,t,u)
n.set(Se(Se({},i),c))},Fh=function(e,t,n,r){return se(e,(function(e,o){return!!me(t,o)||(j(e,(function(e){e(!1,{node:n,format:o,parents:r})})),!1)})).t},Uh=function(e,t,n,r,o){return null===t.get()&&function(e,t){var n=fu({})
e.set({}),t.on("NodeChange",(function(r){Mh(t,r.element,n,e.get())}))}(t,e),function(e,t,n,r){var o=e.get()
j(t.split(","),(function(e){o[e]||(o[e]={similar:r,callbacks:[]}),o[e].callbacks.push(n)})),e.set(o)}(t,n,r,o),{unbind:function(){return function(e,t,n){var r=e.get()
j(t.split(","),(function(e){r[e].callbacks=V(r[e].callbacks,(function(e){return e!==n})),0===r[e].callbacks.length&&delete r[e]})),e.set(r)}(t,n,r)}}},zh=function(e,t){var n=(t||document).createDocumentFragment()
return j(e,(function(e){n.appendChild(e.dom)})),xt.fromDom(n)},jh=function(e,t,n){return{element:e,width:t,rows:n}},Hh=function(e,t){return{element:e,cells:t}},Vh=function(e,t){return{x:e,y:t}},qh=function(e,t){var n=parseInt(qn(e,t),10)
return isNaN(n)?1:n},$h=function(e,t,n){var r=e.rows
return!!(r[n]?r[n].cells:[])[t]},Wh=function(e){return $(e,(function(e,t){return t.cells.length>e?t.cells.length:e}),0)},Kh=function(e,t){for(var n=e.rows,r=0;r<n.length;r++)for(var o=n[r].cells,i=0;i<o.length;i++)if(kt(o[i],t))return C.some(Vh(i,r))
return C.none()},Xh=function(e,t,n,r,o){for(var i=[],a=e.rows,u=n;u<=o;u++){var c=a[u].cells,s=t<r?c.slice(t,r+1):c.slice(r,t+1)
i.push(Hh(a[u].element,s))}return i},Yh=function(e){var t=jh(Uu(e),0,[])
return j(_u(e,"tr"),(function(e,n){j(_u(e,"td,th"),(function(r,o){(function(e,t,n,r,o){for(var i=qh(o,"rowspan"),a=qh(o,"colspan"),u=e.rows,c=n;c<n+i;c++){u[c]||(u[c]=Hh(zu(r),[]))
for(var s=t;s<t+a;s++)u[c].cells[s]=c===n&&s===t?o:Uu(o)}})(t,function(e,t,n){for(;$h(e,t,n);)t++
return t}(t,o,n),n,e,r)}))})),jh(t.element,Wh(t.rows),t.rows)},Gh=function(e){return function(e,t){var n=Uu(e.element),r=xt.fromTag("tbody")
return an(r,t),on(n,r),n}(e,function(e){return z(e.rows,(function(e){var t=z(e.cells,(function(e){var t=zu(e)
return Wn(t,"colspan"),Wn(t,"rowspan"),t})),n=Uu(e.element)
return an(n,t),n}))}(e))},Jh=function(e,t,n){return Kh(e,t).bind((function(t){return Kh(e,n).map((function(n){return function(e,t,n){var r=t.x,o=t.y,i=n.x,a=n.y,u=o<a?Xh(e,r,o,i,a):Xh(e,r,a,i,o)
return jh(e.element,Wh(u),u)}(e,t,n)}))}))},Qh=function(e,t){return W(e,(function(e){return"li"===Rt(e)&&Rl(e,t)})).fold(s([]),(function(t){return function(e){return W(e,(function(e){return"ul"===Rt(e)||"ol"===Rt(e)}))}(e).map((function(e){var t=xt.fromTag(Rt(e)),n=fe(Jn(e),(function(e,t){return Oe(t,"list-style")}))
return Kn(t,n),[xt.fromTag("li"),t]})).getOr([])}))},Zh=function(e,t){var n=xt.fromDom(t.commonAncestorContainer),r=mp(n,e),o=V(r,(function(e){return Mr(e)||Lr(e)})),i=Qh(r,t),a=o.concat(i.length?i:function(e){return jr(e)?Ut(e).filter(zr).fold(s([]),(function(t){return[e,t]})):zr(e)?[e]:[]}(n))
return z(a,Uu)},ev=function(){return zh([])},tv=function(e,t){return n=xt.fromDom(t.cloneContents()),r=Zh(e,t),o=$(r,(function(e,t){return on(t,e),t}),n),r.length>0?zh([o]):o
var n,r,o},nv=function(e,t){return(n=e,r=t[0],wr(r,"table",l(kt,n))).bind((function(e){var n=t[0],r=t[t.length-1],o=Yh(e)
return Jh(o,n,r).map((function(e){return zh([Gh(e)])}))})).getOrThunk(ev)
var n,r},rv=function(e,t){var n=El(t,e)
return n.length>0?nv(e,n):function(e,t){return t.length>0&&t[0].collapsed?ev():tv(e,t[0])}(e,t)},ov=function(e,t){return t>=0&&t<e.length&&Hf(e.charAt(t))},iv=function(e,t){var n=Xr(e.innerText)
return t?function(e){return e.replace(/^[ \f\n\r\t\v]+/,"")}(n):n},av=function(e,t,n){if(void 0===n&&(n={}),n.get=!0,n.format=t,n.selection=!0,(n=e.fire("BeforeGetContent",n)).isDefaultPrevented())return e.fire("GetContent",n),n.content
if("text"===n.format)return function(e){return C.from(e.selection.getRng()).map((function(t){var n=C.from(e.dom.getParent(t.commonAncestorContainer,e.dom.isBlock)),r=e.getBody(),o=function(e){return e.map((function(e){return e.nodeName})).getOr("div").toLowerCase()}(n),i=gt.browser.isIE()&&"pre"!==o,a=e.dom.add(r,o,{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},t.cloneContents()),u=iv(a,i),c=Xr(a.textContent)
if(e.dom.remove(a),ov(c,0)||ov(c,c.length-1)){var s=n.getOr(r),f=iv(s,i),l=f.indexOf(u)
return-1===l?u:(ov(f,l-1)?" ":"")+u+(ov(f,l+u.length)?" ":"")}return u})).getOr("")}(e)
n.getInner=!0
var r=function(e,t){var n=e.selection.getRng(),r=e.dom.create("body"),o=e.selection.getSel(),i=gm(e,Sl(o)),a=t.contextual?rv(xt.fromDom(e.getBody()),i).dom:n.cloneContents()
return a&&r.appendChild(a),e.selection.serializer.serialize(r,t)}(e,n)
return"tree"===n.format?r:(n.content=e.selection.isCollapsed()?"":r,e.fire("GetContent",n),n.content)},uv=function(e){return xn(e)?e.outerHTML:Tn(e)?qo.encodeRaw(e.data,!1):Dn(e)?"\x3c!--"+e.data+"--\x3e":""},cv=function(e,t,n){var r=function(e){var t,n=document.createElement("div"),r=document.createDocumentFragment()
for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t)
return r}(t)
if(e.hasChildNodes()&&n<e.childNodes.length){var o=e.childNodes[n]
o.parentNode.insertBefore(r,o)}else e.appendChild(r)},sv=function(e,t){var n,r,o,i,a,u,c,s,f,l=z(te(t.childNodes),uv)
return function(e,t){var n=0
j(e,(function(e){0===e[0]?n++:1===e[0]?(cv(t,e[1],n),n++):2===e[0]&&function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var n=e.childNodes[t]
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
if(h%2==0&&-l<=d&&d<=l&&a[m]<=i[m+h])return c(a[m],d+e-o,t,u)}}},f=[],u(0,n.length,0,r.length,f),f),t),t},fv=fu(C.none()),lv=function(e){var t,n=(t=e.getBody(),V(z(te(t.childNodes),uv),(function(e){return e.length>0}))),r=X(n,(function(t){var n=Hm(e.serializer,t)
return n.length>0?[n]:[]})),o=r.join("")
return-1!==o.indexOf("</iframe>")?function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}}(r):function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}}(o)},dv=function(e,t,n){"fragmented"===t.type?sv(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},mv=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},pv=function(e){var t=xt.fromTag("body",fv.get().getOrThunk((function(){var e=document.implementation.createHTMLDocument("undo")
return fv.set(C.some(e)),e})))
return Mu(t,mv(e)),j(_u(t,"*[data-mce-bogus]"),sn),t.dom.innerHTML},gv=function(e,t){return!(!e||!t)&&(!!function(e,t){return mv(e)===mv(t)}(e,t)||function(e,t){return pv(e)===pv(t)}(e,t))},hv=function(e){return 0===e.get()},vv=function(e,t,n){hv(n)&&(e.typing=t)},yv=function(e,t){e.typing&&(vv(e,!1,t),e.add())},bv=function(e){return e instanceof Dm},Cv=function(e,t){qg(e.serializer.getNodeFilters(),e.serializer.getAttributeFilters(),t)},wv=function(e){return{undoManager:{beforeChange:function(t,n){return function(e,t,n){hv(t)&&n.set(C.some(Vc(e.selection)))}(e,t,n)},addUndoLevel:function(t,n,r,o,i,a){return function(e,t,n,r,o,i,a){var u=lv(e)
if(i=i||{},i=Ct.extend(i,u),!1===hv(r)||e.removed)return null
var c=t.data[n.get()]
if(e.fire("BeforeAddUndo",{level:i,lastLevel:c,originalEvent:a}).isDefaultPrevented())return null
if(c&&gv(c,i))return null
t.data[n.get()]&&o.get().each((function(e){t.data[n.get()].beforeBookmark=e}))
var s=function(e){return e.getParam("custom_undo_redo_levels",0,"number")}(e)
if(s&&t.data.length>s){for(var f=0;f<t.data.length-1;f++)t.data[f]=t.data[f+1]
t.data.length--,n.set(t.data.length)}i.bookmark=Vc(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(i),n.set(t.data.length-1)
var l={level:i,lastLevel:c,originalEvent:a}
return n.get()>0?(e.setDirty(!0),e.fire("AddUndo",l),e.fire("change",l)):e.fire("AddUndo",l),i}(e,t,n,r,o,i,a)},undo:function(t,n,r){return function(e,t,n,r){var o
return t.typing&&(t.add(),t.typing=!1,vv(t,!1,n)),r.get()>0&&(r.set(r.get()-1),o=t.data[r.get()],dv(e,o,!0),e.setDirty(!0),e.fire("Undo",{level:o})),o}(e,t,n,r)},redo:function(t,n){return function(e,t,n){var r
return t.get()<n.length-1&&(t.set(t.get()+1),r=n[t.get()],dv(e,r,!1),e.setDirty(!0),e.fire("Redo",{level:r})),r}(e,t,n)},clear:function(t,n){return function(e,t,n){t.data=[],n.set(0),t.typing=!1,e.fire("ClearUndos")}(e,t,n)},reset:function(e){return function(e){e.clear(),e.add()}(e)},hasUndo:function(t,n){return function(e,t,n){return n.get()>0||t.typing&&t.data[0]&&!gv(lv(e),t.data[0])}(e,t,n)},hasRedo:function(e,t){return function(e,t){return t.get()<e.data.length-1&&!e.typing}(e,t)},transact:function(e,t,n){return function(e,t,n){return yv(e,t),e.beforeChange(),e.ignore(n),e.add()}(e,t,n)},ignore:function(e,t){return function(e,t){try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}}(e,t)},extra:function(t,n,r,o){return function(e,t,n,r,o){if(t.transact(r)){var i=t.data[n.get()].bookmark,a=t.data[n.get()-1]
dv(e,a,!0),t.transact(o)&&(t.data[n.get()-1].beforeBookmark=i)}}(e,t,n,r,o)}},formatter:{match:function(t,n,r){return Nm(e,t,n,r)},matchAll:function(t,n){return function(e,t,n){var r=[],o={},i=e.selection.getStart()
return e.dom.getParent(i,(function(i){for(var a=0;a<t.length;a++){var u=t[a]
!o[u]&&Sm(e,i,u,n)&&(o[u]=!0,r.push(u))}}),e.dom.getRoot()),r}(e,t,n)},matchNode:function(t,n,r,o){return Sm(e,t,n,r,o)},canApply:function(t){return function(e,t){var n,r,o,i,a,u=e.formatter.get(t),c=e.dom
if(u)for(n=e.selection.getStart(),r=tl(c,n),i=u.length-1;i>=0;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0
for(o=r.length-1;o>=0;o--)if(c.is(r[o],a))return!0}return!1}(e,t)},closest:function(t){return Em(e,t)},apply:function(t,n,r){return Ih(e,t,n,r)},remove:function(t,n,r,o){return Dh(e,t,n,r,o)},toggle:function(t,n,r){return function(e,t,n,r){var o=e.formatter.get(t)
!Nm(e,t,n,r)||"toggle"in o[0]&&!o[0].toggle?Ih(e,t,n,r):Dh(e,t,n,r)}(e,t,n,r)},formatChanged:function(t,n,r,o){return Uh(e,t,n,r,o)}},editor:{getContent:function(t,n){return function(e,t,n){return C.from(e.getBody()).fold(s("tree"===t.format?new Dm("body",11):""),(function(r){return qm(e,t,n,r)}))}(e,t,n)},setContent:function(t,n){return Kg(e,t,n)},insertContent:function(t,n){return Hg(e,t,n)},addVisual:function(t){return function(e,t){var n=e.dom,r=D(t)?t:e.getBody()
R(e.hasVisual)&&(e.hasVisual=function(e){return e.getParam("visual",!0,"boolean")}(e)),j(n.select("table,a",r),(function(t){switch(t.nodeName){case"TABLE":var r=function(e){return e.getParam("visual_table_class","mce-item-table","string")}(e),o=n.getAttrib(t,"border")
o&&"0"!==o||!e.hasVisual?n.removeClass(t,r):n.addClass(t,r)
break
case"A":if(!n.getAttrib(t,"href")){var i=n.getAttrib(t,"name")||t.id,a=function(e){return e.getParam("visual_anchor_class","mce-item-anchor","string")}(e)
i&&e.hasVisual?n.addClass(t,a):n.removeClass(t,a)}}})),e.fire("VisualAid",{element:t,hasVisual:e.hasVisual})}(e,t)}},selection:{getContent:function(t,n){return av(e,t,n)}},raw:{getModel:function(){return C.none()}}}},xv=function(e,t){var n=function(e){return E(e)?e:{}},r=m("Unimplemented feature for rtc")
return{undoManager:{beforeChange:u,addUndoLevel:r,undo:function(){return t.undo(),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},redo:function(){return t.redo(),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},clear:r,reset:r,hasUndo:function(){return t.hasUndo()},hasRedo:function(){return t.hasRedo()},transact:function(e,n,r){return t.transact(r),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},ignore:r,extra:r},formatter:{match:function(e,r,o){return t.matchFormat(e,n(r))},matchAll:r,matchNode:r,canApply:function(e){return t.canApplyFormat(e)},closest:function(e){return t.closestFormat(e)},apply:function(e,r,o){return t.applyFormat(e,n(r))},remove:function(e,r,o,i){return t.removeFormat(e,n(r))},toggle:function(e,r,o){return t.toggleFormat(e,n(r))},formatChanged:function(e,n,r,o){return t.formatChanged(n,r,o)}},editor:{getContent:function(n,r){if("html"===r||"tree"===r){var o=t.getContent(),i=Pm({inner:!0})
return Cv(e,o),"tree"===r?o:i.serialize(o)}return wv(e).editor.getContent(n,r)},setContent:function(n,r){var o=bv(n)?n:e.parser.parse(n,{isRootContent:!0,insert:!0})
return t.setContent(o),n},insertContent:function(n,r){var o,i=(o=e,C.from(o.selection.getStart(!0)).map((function(e){return e.nodeName.toLowerCase()}))).fold((function(){return{}}),(function(e){return{context:e}})),a=bv(n)?n:e.parser.parse(n,Se(Se({},i),{insert:!0}))
t.insertContent(a)},addVisual:function(e){}},selection:{getContent:function(n,r){if("html"===n||"tree"===n){var o=t.getSelectedContent(),i=Pm({})
return Cv(e,o),"tree"===n?o:i.serialize(o)}return wv(e).selection.getContent(n,r)}},raw:{getModel:function(){return C.some(t.getRawModel())}}}},Sv=function(e){return me(e.plugins,"rtc")},Nv=function(e){return e.rtcInstance?e.rtcInstance:wv(e)},Ev=function(e){var t=e.rtcInstance
if(t)return t
throw new Error("Failed to get RTC instance not yet initialized.")},kv=function(e,t){return void 0===t&&(t={}),function(e,t,n){return Ev(e).selection.getContent(t,n)}(e,t.format?t.format:"html",t)},_v=function(e){return 0===e.dom.length?(cn(e),C.none()):C.some(e)},Av=function(e,t,n,r){e.bind((function(e){return(r?qp:Vp)(e.dom,r?e.dom.length:0),t.filter(Bt).map((function(t){return function(e,t,n,r){var o=e.dom,i=t.dom,a=r?o.length:i.length
r?($p(o,i,!1,!r),n.setStart(i,a)):($p(i,o,!1,!r),n.setEnd(i,a))}(e,t,n,r)}))})).orThunk((function(){return function(e,t){return e.filter((function(e){return Hl.isBookmarkNode(e.dom)})).bind(t?jt:zt)}(t,r).or(t).filter(Bt).map((function(e){return function(e,t){Ut(e).each((function(n){var r=e.dom
t&&Pp(n,wc(r,0))?Vp(r,0):!t&&Lp(n,wc(r,r.length))&&qp(r,r.length)}))}(e,r)}))}))},Rv=function(e,t,n){void 0===n&&(n={})
var r=function(e,t){return Se(Se({format:"html"},e),{set:!0,selection:!0,content:t})}(n,t)
if(r.no_events||!(r=e.fire("BeforeSetContent",r)).isDefaultPrevented()){n.content=function(e,t){if("raw"!==t.format){var n=e.selection.getRng(),r=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),o=r?{context:r.nodeName.toLowerCase()}:{},i=e.parser.parse(t.content,Se(Se({isRootContent:!0,forced_root_block:!1},o),t))
return Pm({validate:e.validate},e.schema).serialize(i)}return t.content}(e,r)
var o=e.selection.getRng();(function(e,t){var n=C.from(t.firstChild).map(xt.fromDom),r=C.from(t.lastChild).map(xt.fromDom)
e.deleteContents(),e.insertNode(t)
var o=n.bind(zt).filter(Bt).bind(_v),i=r.bind(jt).filter(Bt).bind(_v)
Av(o,n,e,!0),Av(i,r,e,!1),e.collapse(!1)})(o,o.createContextualFragment(n.content)),e.selection.setRng(o),Dd(e,o),r.no_events||e.fire("SetContent",r)}else e.fire("SetContent",r)},Tv=function(e,t,n){if(e&&e.hasOwnProperty(t)){var r=V(e[t],(function(e){return e!==n}))
0===r.length?delete e[t]:e[t]=r}}
var Dv=function(e){return!!e.select},Ov=function(e){return!(!e||!e.ownerDocument)&&At(xt.fromDom(e.ownerDocument),xt.fromDom(e))},Bv=function(e,t,n,r){var o,i,a=function(e,t){var n,r
return{selectorChangedWithUnbind:function(o,i){return n||(n={},r={},t.on("NodeChange",(function(t){var o=t.element,i=e.getParents(o,null,e.getRoot()),a={}
Ct.each(n,(function(t,n){Ct.each(i,(function(o){if(e.is(o,n))return r[n]||(Ct.each(t,(function(e){e(!0,{node:o,selector:n,parents:i})})),r[n]=t),a[n]=t,!1}))})),Ct.each(r,(function(e,t){a[t]||(delete r[t],Ct.each(e,(function(e){e(!1,{node:o,selector:t,parents:i})})))}))}))),n[o]||(n[o]=[]),n[o].push(i),{unbind:function(){Tv(n,o,i),Tv(r,o,i)}}}}}(e,r).selectorChangedWithUnbind,u=function(e,t){return Rv(r,e,t)},c=function(e){var t=f()
t.collapse(!!e),l(t)},s=function(){return t.getSelection?t.getSelection():t.document.selection},f=function(){var n,a,u,c=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}}
if(!t)return null
var f=t.document
if(null==f)return null
if(void 0!==r.bookmark&&!1===um(r)){var l=Yd(r)
if(l.isSome())return l.map((function(e){return gm(r,[e])[0]})).getOr(f.createRange())}try{(n=s())&&!wn(n.anchorNode)&&(a=n.rangeCount>0?n.getRangeAt(0):n.createRange?n.createRange():f.createRange(),a=gm(r,[a])[0])}catch(d){}return a||(a=f.createRange?f.createRange():f.body.createTextRange()),a.setStart&&9===a.startContainer.nodeType&&a.collapsed&&(u=e.getRoot(),a.setStart(u,0),a.setEnd(u,0)),o&&i&&(0===c(a.START_TO_START,a,o)&&0===c(a.END_TO_END,a,o)?a=i:(o=null,i=null)),a},l=function(e,t){var n
if(function(e){return!!e&&(!!Dv(e)||Ov(e.startContainer)&&Ov(e.endContainer))}(e)){var a=Dv(e)?e:null
if(a){i=null
try{a.select()}catch(c){}}else{var u=s()
if(e=r.fire("SetSelectionRange",{range:e,forward:t}).range,u){i=e
try{u.removeAllRanges(),u.addRange(e)}catch(c){}!1===t&&u.extend&&(u.collapse(e.endContainer,e.endOffset),u.extend(e.startContainer,e.startOffset)),o=u.rangeCount>0?u.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!u.setBaseAndExtent||gt.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset])&&"IMG"===n.tagName&&(u.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),u.anchorNode===e.startContainer&&u.focusNode===e.endContainer||u.setBaseAndExtent(n,0,n,1)),r.fire("AfterSetSelectionRange",{range:e,forward:t})}}},d=function(){var t=s(),n=null==t?void 0:t.anchorNode,r=null==t?void 0:t.focusNode
if(!t||!n||!r||wn(n)||wn(r))return!0
var o=e.createRng()
o.setStart(n,t.anchorOffset),o.collapse(!0)
var i=e.createRng()
return i.setStart(r,t.focusOffset),i.collapse(!0),o.compareBoundaryPoints(o.START_TO_START,i)<=0},m={bookmarkManager:null,controlSelection:null,dom:e,win:t,serializer:n,editor:r,collapse:c,setCursorLocation:function(t,n){var o=e.createRng()
t?(o.setStart(t,n),o.setEnd(t,n),l(o),c(!1)):(Tl(e,o,r.getBody(),!0),l(o))},getContent:function(e){return kv(r,e)},setContent:u,getBookmark:function(e,t){return p.getBookmark(e,t)},moveToBookmark:function(e){return p.moveToBookmark(e)},select:function(t,n){return function(e,t,n){return C.from(t).map((function(t){var r=e.nodeIndex(t),o=e.createRng()
return o.setStart(t.parentNode,r),o.setEnd(t.parentNode,r+1),n&&(Tl(e,o,t,!0),Tl(e,o,t,!1)),o}))}(e,t,n).each(l),t},isCollapsed:function(){var e=f(),t=s()
return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:d,setNode:function(t){return u(e.getOuterHTML(t)),t},getNode:function(){return function(e,t){var n,r,o
if(!t)return e
r=t.startContainer,o=t.endContainer
var i=t.startOffset,a=t.endOffset
return n=t.commonAncestorContainer,!t.collapsed&&(r===o&&a-i<2&&r.hasChildNodes()&&(n=r.childNodes[i]),3===r.nodeType&&3===o.nodeType&&(r=r.length===i?pm(r.nextSibling,!0):r.parentNode,o=0===a?pm(o.previousSibling,!1):o.parentNode,r&&r===o))?r:n&&3===n.nodeType?n.parentNode:n}(r.getBody(),f())},getSel:s,setRng:l,getRng:f,getStart:function(e){return dm(r.getBody(),f(),e)},getEnd:function(e){return mm(r.getBody(),f(),e)},getSelectedBlocks:function(t,n){return function(e,t,n,r){var o,i=[],a=e.getRoot()
if(n=e.getParent(n||dm(a,t,t.collapsed),e.isBlock),r=e.getParent(r||mm(a,t,t.collapsed),e.isBlock),n&&n!==a&&i.push(n),n&&r&&n!==r){o=n
for(var u=new Br(n,a);(o=u.next())&&o!==r;)e.isBlock(o)&&i.push(o)}return r&&n!==r&&r!==a&&i.push(r),i}(e,f(),t,n)},normalize:function(){var t=f(),n=s()
if(!(Sl(n).length>1)&&Dl(r)){var o=id(e,t)
return o.each((function(e){l(e,d())})),o.getOr(t)}return t},selectorChanged:function(e,t){return a(e,t),m},selectorChangedWithUnbind:a,getScrollContainer:function(){for(var t,n=e.getRoot();n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n
break}n=n.parentNode}return t},scrollIntoView:function(e,t){return function(e,t,n){(e.inline?Ad:Td)(e,t,n)}(r,e,t)},placeCaretAt:function(e,t){return l(Yl(e,t,r.getDoc()))},getBoundingClientRect:function(){var e=f()
return e.collapsed?wc.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){t=o=i=null,g.destroy()}},p=Hl(m),g=Kl(m,r)
return m.bookmarkManager=p,m.controlSelection=g,m},Pv=function(e,t,n){e.addNodeFilter("font",(function(e){j(e,(function(e){var r=t.parse(e.attr("style")),o=e.attr("color"),i=e.attr("face"),a=e.attr("size")
o&&(r.color=o),i&&(r["font-family"]=i),a&&(r["font-size"]=n[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",t.serialize(r)),function(e,t){j(t,(function(t){e.attr(t,null)}))}(e,["color","face","size"])}))}))},Lv=function(e,t){var n=bi()
t.convert_fonts_to_spans&&Pv(e,n,Ct.explode(t.font_size_legacy_values)),function(e,t){e.addNodeFilter("strike",(function(e){j(e,(function(e){var n=t.parse(e.attr("style"))
n["text-decoration"]="line-through",e.name="span",e.attr("style",t.serialize(n))}))}))}(e,n)},Iv=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},Mv=function(e,t){var n
try{n=atob(t)}catch(ck){return C.none()}for(var r=new Uint8Array(n.length),o=0;o<r.length;o++)r[o]=n.charCodeAt(o)
return C.some(new Blob([r],{type:e}))},Fv=function(e){return 0===e.indexOf("blob:")?function(e){return new Nr((function(t,n){var r=function(){n("Cannot convert "+e+" to Blob. Resource might not exist or is inaccessible.")}
try{var o=new XMLHttpRequest
o.open("GET",e,!0),o.responseType="blob",o.onload=function(){200===this.status?t(this.response):r()},o.onerror=r,o.send()}catch(i){r()}}))}(e):0===e.indexOf("data:")?(t=e,new Nr((function(e){var n=Iv(t),r=n.type,o=n.data
Mv(r,o).fold((function(){return e(new Blob([]))}),e)}))):null
var t},Uv=0,zv=function(e){return(e||"blobid")+Uv++},jv=function(e,t,n,r){var o,i
if(0!==t.src.indexOf("blob:")){var a=Iv(t.src),u=a.data,c=a.type
o=u,(i=e.getByData(o,c))?n({image:t,blobInfo:i}):Fv(t.src).then((function(r){i=e.create(zv(),r,o),e.add(i),n({image:t,blobInfo:i})}),(function(e){r(e)}))}else(i=e.getByUri(t.src))?n({image:t,blobInfo:i}):Fv(t.src).then((function(r){(function(e){return new Nr((function(t){var n=new FileReader
n.onloadend=function(){t(n.result)},n.readAsDataURL(e)}))})(r).then((function(a){o=Iv(a).data,i=e.create(zv(),r,o),e.add(i),n({image:t,blobInfo:i})}))}),(function(e){r(e)}))}
function Hv(e,t){var n={}
return{findAll:function(r,o){o||(o=h)
var i=V(function(e){return e?te(e.getElementsByTagName("img")):[]}(r),(function(t){var n=t.src
return!!gt.fileApi&&(!t.hasAttribute("data-mce-bogus")&&(!t.hasAttribute("data-mce-placeholder")&&(!(!n||n===gt.transparentSrc)&&(0===n.indexOf("blob:")?!e.isUploaded(n)&&o(t):0===n.indexOf("data:")&&o(t)))))})),a=z(i,(function(e){if(void 0!==n[e.src])return new Nr((function(t){n[e.src].then((function(n){if("string"==typeof n)return n
t({image:e,blobInfo:n.blobInfo})}))}))
var r=new Nr((function(n,r){jv(t,e,n,r)})).then((function(e){return delete n[e.image.src],e})).catch((function(t){return delete n[e.src],t}))
return n[e.src]=r,r}))
return Nr.all(a)}}}var Vv,qv,$v=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new Dm("br",1)).shortEnded=!0:r.empty().append(new Dm("#text",3)).value=$r},Wv=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Kv=function(e,t,n,r){return r.isEmpty(t,n,(function(t){return function(e,t){var n=e.getElementRule(t.name)
return n&&n.paddEmpty}(e,t)}))},Xv=function(e,t){var n=t.blob_cache,r=function(e){var r=e.attr("src");(function(e){return e.attr("src")===gt.transparentSrc||e.attr("data-mce-placeholder")})(e)||function(e){return e.attr("data-mce-bogus")}(e)||function(e){var t=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(e)
return t?C.some({type:t[1],data:decodeURIComponent(t[2])}):C.none()}(r).filter((function(){return function(e,t){if(t.images_dataimg_filter){var n=new Image
return n.src=e.attr("src"),oe(e.attributes.map,(function(e,t){n.setAttribute(t,e)})),t.images_dataimg_filter(n)}return!0}(e,t)})).bind((function(e){var t=e.type,r=e.data
return C.from(n.getByData(r,t)).orThunk((function(){return Mv(t,r).map((function(e){var t=n.create(zv(),e,r)
return n.add(t),t}))}))})).each((function(t){e.attr("src",t.blobUri())}))}
n&&e.addAttributeFilter("src",(function(e){return j(e,r)}))},Yv=Ct.makeMap,Gv=Ct.each,Jv=Ct.explode,Qv=Ct.extend,Zv=function(e,t){void 0===t&&(t=ei())
var n={},r=[],o={},i={};(e=e||{}).validate=!("validate"in e)||e.validate,e.root_name=e.root_name||"body"
var a=function(e){var t,a,u;(a=e.name)in n&&((u=o[a])?u.push(e):o[a]=[e]),t=r.length
for(;t--;)(a=r[t].name)in e.attributes.map&&((u=i[a])?u.push(e):i[a]=[e])
return e},u={schema:t,addAttributeFilter:function(e,t){Gv(Jv(e),(function(e){var n
for(n=0;n<r.length;n++)if(r[n].name===e)return void r[n].callbacks.push(t)
r.push({name:e,callbacks:[t]})}))},getAttributeFilters:function(){return[].concat(r)},addNodeFilter:function(e,t){Gv(Jv(e),(function(e){var r=n[e]
r||(n[e]=r=[]),r.push(t)}))},getNodeFilters:function(){var e=[]
for(var t in n)n.hasOwnProperty(t)&&e.push({name:t,callbacks:n[t]})
return e},filterNode:a,parse:function(u,c){var s,f,l,d,m,p,g,h,v,y=[]
c=c||{},o={},i={}
var b=Qv(Yv("script,style,head,html,body,title,meta,param"),t.getBlockElements()),C=t.getNonEmptyElements(),w=t.children,x=e.validate,S=function(e){return!1===e?"":!0===e?"p":e}("forced_root_block"in c?c.forced_root_block:e.forced_root_block),N=t.getWhiteSpaceElements(),E=/^[ \t\r\n]+/,k=/[ \t\r\n]+$/,_=/[ \t\r\n]+/g,A=/^[ \t\r\n]+$/
h=N.hasOwnProperty(c.context)||N.hasOwnProperty(e.root_name)
var R=function(e,t){var r,i=new Dm(e,t)
return e in n&&((r=o[e])?r.push(i):o[e]=[i]),i},T=function(e){var n,r,o,i,a=t.getBlockElements()
for(n=e.prev;n&&3===n.type;){if((o=n.value.replace(k,"")).length>0)return void(n.value=o)
if(r=n.next){if(3===r.type&&r.value.length){n=n.prev
continue}if(!a[r.name]&&"script"!==r.name&&"style"!==r.name){n=n.prev
continue}}i=n.prev,n.remove(),n=i}},D=jm({validate:x,allow_html_data_urls:e.allow_html_data_urls,allow_svg_data_urls:e.allow_svg_data_urls,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,preserve_cdata:e.preserve_cdata,self_closing_elements:function(e){var t,n={}
for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t])
return n}(t.getSelfClosingElements()),cdata:function(e){v.append(R("#cdata",4)).value=e},text:function(e,t){var n
h||(e=e.replace(_," "),function(e,t){return e&&(t[e.name]||"br"===e.name)}(v.lastChild,b)&&(e=e.replace(E,""))),0!==e.length&&((n=R("#text",3)).raw=!!t,v.append(n).value=e)},comment:function(e){v.append(R("#comment",8)).value=e},pi:function(e,t){v.append(R(e,7)).value=t,T(v)},doctype:function(e){v.append(R("#doctype",10)).value=e,T(v)},start:function(e,n,o){var a,u,c,s,f=x?t.getElementRule(e):{}
if(f){for((a=R(f.outputName||e,1)).attributes=n,a.shortEnded=o,v.append(a),(s=w[v.name])&&w[a.name]&&!s[a.name]&&y.push(a),u=r.length;u--;)(c=r[u].name)in n.map&&((p=i[c])?p.push(a):i[c]=[a])
b[e]&&T(a),o||(v=a),!h&&N[e]&&(h=!0)}},end:function(n){var r,o,i,a,u=x?t.getElementRule(n):{}
if(u){if(b[n]&&!h){if((r=v.firstChild)&&3===r.type)if((o=r.value.replace(E,"")).length>0)r.value=o,r=r.next
else for(i=r.next,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.next,(0===o.length||A.test(o))&&(r.remove(),r=i),r=i
if((r=v.lastChild)&&3===r.type)if((o=r.value.replace(k,"")).length>0)r.value=o,r=r.prev
else for(i=r.prev,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.prev,(0===o.length||A.test(o))&&(r.remove(),r=i),r=i}if(h&&N[n]&&(h=!1),u.removeEmpty&&Kv(t,C,N,v))return a=v.parent,b[v.name]?v.empty().remove():v.unwrap(),void(v=a)
u.paddEmpty&&(function(e){return Wv(e,"#text")&&e.firstChild.value===$r}(v)||Kv(t,C,N,v))&&$v(e,c,b,v),v=v.parent}}},t),O=v=new Dm(c.context||e.root_name,11)
if(D.parse(u,c.format),x&&y.length&&(c.context?c.invalid=!0:function(e){var n,r,o,i,u,c,s,f,l,d,m,p=Yv("tr,td,th,tbody,thead,tfoot,table"),g=t.getNonEmptyElements(),h=t.getWhiteSpaceElements(),v=t.getTextBlockElements(),y=t.getSpecialElements()
for(n=0;n<e.length;n++)if((r=e[n]).parent&&!r.fixed)if(v[r.name]&&"li"===r.parent.name){for(d=r.next;d&&v[d.name];)d.name="li",d.fixed=!0,r.parent.insert(d,r.parent),d=d.next
r.unwrap(r)}else{for(i=[r],o=r.parent;o&&!t.isValidChild(o.name,r.name)&&!p[o.name];o=o.parent)i.push(o)
if(o&&i.length>1){for(i.reverse(),u=c=a(i[0].clone()),l=0;l<i.length-1;l++){for(t.isValidChild(c.name,i[l].name)?(s=a(i[l].clone()),c.append(s)):s=c,f=i[l].firstChild;f&&f!==i[l+1];)m=f.next,s.append(f),f=m
c=s}Kv(t,g,h,u)?o.insert(r,i[0],!0):(o.insert(u,i[0],!0),o.insert(r,u)),o=i[0],(Kv(t,g,h,o)||Wv(o,"br"))&&o.empty().remove()}else if(r.parent){if("li"===r.name){if((d=r.prev)&&("ul"===d.name||"ol"===d.name)){d.append(r)
continue}if((d=r.next)&&("ul"===d.name||"ol"===d.name)){d.insert(r,d.firstChild,!0)
continue}r.wrap(a(new Dm("ul",1)))
continue}t.isValidChild(r.parent.name,"div")&&t.isValidChild("div",r.name)?r.wrap(a(new Dm("div",1))):y[r.name]?r.empty().remove():r.unwrap()}}}(y)),S&&("body"===O.name||c.isRootContent)&&function(){var n,r,o=O.firstChild,i=function(e){e&&((o=e.firstChild)&&3===o.type&&(o.value=o.value.replace(E,"")),(o=e.lastChild)&&3===o.type&&(o.value=o.value.replace(k,"")))}
if(t.isValidChild(O.name,S.toLowerCase())){for(;o;)n=o.next,3===o.type||1===o.type&&"p"!==o.name&&!b[o.name]&&!o.attr("data-mce-type")?(r||((r=R(S,1)).attr(e.forced_root_block_attrs),O.insert(r,o)),r.append(o)):(i(r),r=null),o=n
i(r)}}(),!c.invalid){for(g in o)if(o.hasOwnProperty(g)){for(p=n[g],d=(s=o[g]).length;d--;)s[d].parent||s.splice(d,1)
for(f=0,l=p.length;f<l;f++)p[f](s,g,c)}for(f=0,l=r.length;f<l;f++)if((p=r[f]).name in i){for(d=(s=i[p.name]).length;d--;)s[d].parent||s.splice(d,1)
for(d=0,m=p.callbacks.length;d<m;d++)p.callbacks[d](s,p.name,c)}}return O}}
return function(e,t){var n=e.schema
t.remove_trailing_brs&&e.addNodeFilter("br",(function(e,r,o){var i,a,u,c,s,f,l,d,m=e.length,p=Ct.extend({},n.getBlockElements()),g=n.getNonEmptyElements(),h=n.getWhiteSpaceElements()
for(p.body=1,i=0;i<m;i++)if(u=(a=e[i]).parent,p[a.parent.name]&&a===u.lastChild){for(s=a.prev;s;){if("span"!==(f=s.name)||"bookmark"!==s.attr("data-mce-type")){"br"===f&&(a=null)
break}s=s.prev}a&&(a.remove(),Kv(n,g,h,u)&&(l=n.getElementRule(u.name))&&(l.removeEmpty?u.remove():l.paddEmpty&&$v(t,o,p,u)))}else{for(c=a;u&&u.firstChild===c&&u.lastChild===c&&(c=u,!p[u.name]);)u=u.parent
c===u&&!0!==t.padd_empty_with_br&&((d=new Dm("#text",3)).value=$r,a.replace(d))}})),e.addAttributeFilter("href",(function(e){var n,r,o=e.length
if(!t.allow_unsafe_link_target)for(;o--;){var i=e[o]
"a"===i.name&&"_blank"===i.attr("target")&&i.attr("rel",(r=void 0,r=(n=i.attr("rel"))?Ct.trim(n):"",/\b(noopener)\b/g.test(r)?r:function(e){return e.split(" ").filter((function(e){return e.length>0})).concat(["noopener"]).sort().join(" ")}(r)))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href")){r=o.parent,t=o.lastChild
do{n=t.prev,r.insert(t,o),t=n}while(t)}})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(function(e){for(var t,n,r=e.length;r--;)if("ul"===(n=(t=e[r]).parent).name||"ol"===n.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t)
else{var o=new Dm("li",1)
o.attr("style","list-style-type: none"),t.wrap(o)}})),t.validate&&n.getValidClasses()&&e.addAttributeFilter("class",(function(e){for(var t,r,o,i,a,u,c,s=e.length,f=n.getValidClasses();s--;){for(r=(t=e[s]).attr("class").split(" "),a="",o=0;o<r.length;o++)i=r[o],c=!1,(u=f["*"])&&u[i]&&(c=!0),u=f[t.name],!c&&u&&u[i]&&(c=!0),c&&(a&&(a+=" "),a+=i)
a.length||(a=null),t.attr("class",a)}})),Xv(e,t)}(u,e),function(e,t){t.inline_styles&&Lv(e,t)}(u,e),u},ey=function(e,t,n){return function(e,t){return e&&e.hasEventListeners("PreProcess")&&!t.no_events}(e,n)?function(e,t,n){var r,o,i=e.dom
t=t.cloneNode(!0)
var a=document.implementation
return a.createHTMLDocument&&(r=a.createHTMLDocument(""),Ct.each("BODY"===t.nodeName?t.childNodes:[t],(function(e){r.body.appendChild(r.importNode(e,!0))})),t="BODY"!==t.nodeName?r.body.firstChild:r.body,o=i.doc,i.doc=r),function(e,t){e.fire("PreProcess",t)}(e,Se(Se({},n),{node:t})),o&&(i.doc=o),t}(e,t,n):t},ty=function(e,t,n){-1===Ct.inArray(t,n)&&(e.addAttributeFilter(n,(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),t.push(n))},ny=function(e,t,n,r,o){return function(e,t,n){return!t.no_events&&e?function(e,t){return e.fire("PostProcess",t)}(e,Se(Se({},t),{content:n})).content:n}(e,o,function(e,t,n){return Pm(e,t).serialize(n)}(t,n,r))},ry=function(e,t){var n=["data-mce-selected"],r=t&&t.dom?t.dom:iu.DOM,o=t&&t.schema?t.schema:ei(e)
e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
var i=Zv(e,o);(function(e,t,n){e.addAttributeFilter("data-mce-tabindex",(function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attr("data-mce-tabindex")),n.attr(t,null)})),e.addAttributeFilter("src,href,style",(function(e,r){for(var o,i,a=e.length,u="data-mce-"+r,c=t.url_converter,s=t.url_converter_scope;a--;)void 0!==(i=(o=e[a]).attr(u))?(o.attr(r,i.length>0?i:null),o.attr(u,null)):(i=o.attr(r),"style"===r?i=n.serializeStyle(n.parseStyle(i),o.name):c&&(i=c.call(s,i,r,o.name)),o.attr(r,i.length>0?i:null))})),e.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",n.length>0?n:null))})),e.addAttributeFilter("data-mce-type",(function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attr("data-mce-type")||n.cleanup||(C.from(r.firstChild).exists((function(e){return!Kr(e.value)}))?r.unwrap():r.remove())})),e.addNodeFilter("noscript",(function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=qo.decode(t.value))})),e.addNodeFilter("script,style",(function(e,n){for(var r,o,i,a=e.length,u=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};a--;)o=(r=e[a]).firstChild?r.firstChild.value:"","script"===n?((i=r.attr("type"))&&r.attr("type","mce-no/type"===i?null:i.replace(/^mce\-/,"")),"xhtml"===t.element_format&&o.length>0&&(r.firstChild.value="// <![CDATA[\n"+u(o)+"\n// ]]>")):"xhtml"===t.element_format&&o.length>0&&(r.firstChild.value="\x3c!--\n"+u(o)+"\n--\x3e")})),e.addNodeFilter("#comment",(function(e){for(var r,o=e.length;o--;)r=e[o],t.preserve_cdata&&0===r.value.indexOf("[CDATA[")?(r.name="#cdata",r.type=4,r.value=n.decode(r.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===r.value.indexOf("mce:protected ")&&(r.name="#text",r.type=3,r.raw=!0,r.value=unescape(r.value).substr(14))})),e.addNodeFilter("xml:namespace,input",(function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||n.attr("type")||n.attr("type","text"))})),e.addAttributeFilter("data-mce-type",(function(t){j(t,(function(t){"format-caret"===t.attr("data-mce-type")&&(t.isEmpty(e.schema.getNonEmptyElements())?t.remove():t.unwrap())}))})),e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}))})(i,e,r)
return{schema:o,addNodeFilter:i.addNodeFilter,addAttributeFilter:i.addAttributeFilter,serialize:function(n,a){void 0===a&&(a={})
var u=Se({format:"html"},a),c=ey(t,n,u),s=function(e,t,n){var r=Xr(n.getInner?t.innerHTML:e.getOuterHTML(t))
return n.selection||qr(xt.fromDom(t))?r:Ct.trim(r)}(r,c,u),f=function(e,t,n){var r=n.selection?Se({forced_root_block:!1},n):n,o=e.parse(t,r)
return function(e){var t=function(e){return e&&"br"===e.name},n=e.lastChild
if(t(n)){var r=n.prev
t(r)&&(n.remove(),r.remove())}}(o),o}(i,s,u)
return"tree"===u.format?f:ny(t,e,o,f,u)},addRules:function(e){o.addValidElements(e)},setRules:function(e){o.setValidElements(e)},addTempAttr:l(ty,i,n),getTempAttrs:function(){return n},getNodeFilters:i.getNodeFilters,getAttributeFilters:i.getAttributeFilters}},oy=function(e,t){var n=ry(e,t)
return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters}},iy=function(e,t){return void 0===t&&(t={}),function(e,t,n){return Nv(e).editor.getContent(t,n)}(e,t,t.format?t.format:"html")},ay=function(e,t,n){return void 0===n&&(n={}),function(e,t,n){return Nv(e).editor.setContent(t,n)}(e,t,n)},uy=iu.DOM,cy=function(e){return C.from(e).each((function(e){return e.destroy()}))},sy=function(e){if(!e.removed){var t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement()
r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&uy.remove(o.nextSibling),function(e){e.fire("remove")}(e),e.editorManager.remove(e),!e.inline&&r&&function(e){uy.setStyle(e.id,"display",e.orgDisplay)}(e),function(e){e.fire("detach")}(e),uy.remove(e.getContainer()),cy(t),cy(n),e.destroy()}},fy=function(e,t){var n=e.selection,r=e.dom
e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),cy(n),cy(r)),function(e){var t=e.formElement
t&&(t._mceOldSubmit&&(t.submit=t._mceOldSubmit,t._mceOldSubmit=null),uy.unbind(t,"submit reset",e.formEventDelegate))}(e),function(e){e.contentAreaContainer=e.formElement=e.container=e.editorContainer=null,e.bodyElement=e.contentDocument=e.contentWindow=null,e.iframeElement=e.targetElm=null,e.selection&&(e.selection=e.selection.win=e.selection.dom=e.selection.dom.doc=null)}(e),e.destroyed=!0):e.remove())},ly=Object.prototype.hasOwnProperty,dy=(Vv=function(e,t){return E(e)&&E(t)?dy(e,t):t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var o=e[r]
for(var i in o)ly.call(o,i)&&(n[i]=Vv(n[i],o[i]))}return n}),my=at().deviceType,py=my.isTouch(),gy=my.isPhone(),hy=my.isTablet(),vy=["lists","autolink","autosave"],yy={table_grid:!1,object_resizing:!1,resize:!1},by=function(e){var t=k(e)?e.join(" "):e,n=z(N(t)?t.split(" "):[],Pe)
return V(n,(function(e){return e.length>0}))},Cy=function(e,t){var n=se(t,(function(t,n){return F(e,n)}))
return function(e,t){return{sections:s(e),settings:s(t)}}(n.t,n.f)},wy=function(e,t){return e.sections().hasOwnProperty(t)},xy=function(e,t){return de(e,"toolbar_mode").orThunk((function(){return de(e,"toolbar_drawer").map((function(e){return!1===e?"wrap":e}))})).getOr(t)},Sy=function(e,t){var n={resize:!1,toolbar_mode:xy(e,"scrolling"),toolbar_sticky:!1}
return Se(Se(Se({},yy),n),t?{menubar:!1}:{})},Ny=function(e,t){var n=t.external_plugins?t.external_plugins:{}
return e&&e.external_plugins?Ct.extend({},e.external_plugins,n):n},Ey=function(e,t,n,r){return e&&function(e,t,n){var r=e.sections()
return wy(e,t)&&r[t].theme===n}(t,"mobile","mobile")?V(r,l(F,vy)):e&&wy(t,"mobile")?r:n},ky=function(e,t,n,r){var o=by(n.forced_plugins),i=by(r.plugins),a=function(e,t){return wy(e,t)?e.sections()[t]:{}}(t,"mobile"),u=a.plugins?by(a.plugins):i,c=function(e,t){return[].concat(by(e)).concat(by(t))}(o,Ey(e,t,i,u))
if(gt.browser.isIE()&&F(c,"rtc"))throw new Error("RTC plugin is not supported on IE 11.")
return Ct.extend(r,{plugins:c.join(" ")})},_y=function(e,t,n,r,o){var i=e?{mobile:Sy(o.mobile||{},t)}:{},a=Cy(["mobile"],dy(i,o)),u=Ct.extend(n,r,a.settings(),function(e,t){return e&&wy(t,"mobile")}(e,a)?function(e,t,n){void 0===n&&(n={})
var r=e.sections(),o=r.hasOwnProperty(t)?r[t]:{}
return Ct.extend({},n,o)}(a,"mobile"):{},{validate:!0,external_plugins:Ny(r,a.settings())})
return ky(e,a,r,u)},Ay=function(e,t,n,r,o){var i=function(e,t,n,r,o){var i={id:t,theme:"silver",toolbar_mode:xy(e,"floating"),plugins:"",document_base_url:n,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,inline_styles:!0,convert_fonts_to_spans:!0,indent:!0,indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:o.convertURL,url_converter_scope:o}
return Se(Se({},i),r?yy:{})}(o,t,n,py,e)
return _y(gy||hy,gy,i,r,o)},Ry=function(e,t,n){return C.from(t.settings[n]).filter(e)},Ty=function(e,t,n,r){var o,i=t in e.settings?e.settings[t]:n
return"hash"===r?function(e){var t={}
return"string"==typeof e?j(e.indexOf("=")>0?e.split(/[;,](?![^=;,]*(?:[;,]|$))/):e.split(","),(function(e){var n=e.split("=")
n.length>1?t[Ct.trim(n[0])]=Ct.trim(n[1]):t[Ct.trim(n[0])]=Ct.trim(n[0])})):t=e,t}(i):"string"===r?Ry(N,e,t).getOr(n):"number"===r?Ry(B,e,t).getOr(n):"boolean"===r?Ry(A,e,t).getOr(n):"object"===r?Ry(E,e,t).getOr(n):"array"===r?Ry(k,e,t).getOr(n):"string[]"===r?Ry((o=N,function(e){return k(e)&&Y(e,o)}),e,t).getOr(n):"function"===r?Ry(O,e,t).getOr(n):i},Dy=(qv={},{add:function(e,t){qv[e]=t},get:function(e){return qv[e]?qv[e]:{icons:{}}},has:function(e){return me(qv,e)}}),Oy=function(e,t){return t.dom[e]},By=function(e,t){return parseInt(Xn(t,e),10)},Py=l(Oy,"clientWidth"),Ly=l(Oy,"clientHeight"),Iy=l(By,"margin-top"),My=l(By,"margin-left"),Fy=function(e,t,n){var r,o=xt.fromDom(e.getBody()),i=e.inline?o:(r=o,xt.fromDom(Mt(r).dom.documentElement)),a=function(e,t,n,r){var o=function(e){return e.dom.getBoundingClientRect()}(t)
return{x:n-(e?o.left+t.dom.clientLeft+My(t):0),y:r-(e?o.top+t.dom.clientTop+Iy(t):0)}}(e.inline,i,t,n)
return function(e,t,n){var r=Py(e),o=Ly(e)
return t>=0&&n>=0&&t<=r&&n<=o}(i,a.x,a.y)},Uy=function(e){var t,n=e.inline?e.getBody():e.getContentAreaContainer()
return(t=n,C.from(t).map(xt.fromDom)).map(fn).getOr(!1)}
function zy(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getNotificationManagerImpl?n.getNotificationManagerImpl():{open:t=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:t,reposition:t,getArgs:t}},r=function(){return C.from(t[0])},o=function(){t.length>0&&n().reposition(t)},i=function(e){K(t,(function(t){return t===e})).each((function(e){t.splice(e,1)}))},a=function(a,u){if(void 0===u&&(u=!0),!e.removed&&Uy(e))return u&&e.fire("BeforeOpenNotification",{notification:a}),W(t,(function(e){return t=n().getArgs(e),r=a,!(t.type!==r.type||t.text!==r.text||t.progressBar||t.timeout||r.progressBar||r.timeout)
var t,r})).getOrThunk((function(){e.editorManager.setActive(e)
var u=n().open(a,(function(){i(u),o(),r().fold((function(){return e.focus()}),(function(e){return xt.fromDom(e.getEl()).dom.focus()}))}))
return function(e){t.push(e)}(u),o(),e.fire("OpenNotification",Se({},u)),u}))}
return function(e){e.on("SkinLoaded",(function(){var t=function(e){return e.getParam("service_message")}(e)
t&&a({text:t,type:"warning",timeout:0},!1)})),e.on("ResizeEditor ResizeWindow NodeChange",(function(){Ar.requestAnimationFrame(o)})),e.on("remove",(function(){j(t.slice(),(function(e){n().close(e)}))}))}(e),{open:a,close:function(){r().each((function(e){n().close(e),i(e),o()}))},getNotifications:function(){return t}}}var jy=hu.PluginManager,Hy=hu.ThemeManager
var Vy=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getWindowManagerImpl?n.getWindowManagerImpl():{open:t=function(){throw new Error("Theme did not provide a WindowManager implementation.")},openUrl:t,alert:t,confirm:t,close:t,getParams:t,setParams:t}},r=function(e,t){return function(){return t?t.apply(e,arguments):void 0}},o=function(n){t.push(n),function(t){e.fire("OpenWindow",{dialog:t})}(n)},i=function(n){(function(t){e.fire("CloseWindow",{dialog:t})})(n),0===(t=V(t,(function(e){return e!==n}))).length&&e.focus()},a=function(t){e.editorManager.setActive(e),Xd(e)
var n=t()
return o(n),n}
return e.on("remove",(function(){j(t,(function(e){n().close(e)}))})),{open:function(e,t){return a((function(){return n().open(e,t,i)}))},openUrl:function(e){return a((function(){return n().openUrl(e,i)}))},alert:function(e,t,o){n().alert(e,r(o||this,t))},confirm:function(e,t,o){n().confirm(e,r(o||this,t))},close:function(){C.from(t[t.length-1]).each((function(e){n().close(e),i(e)}))}}},qy=function(e,t){e.notificationManager.open({type:"error",text:t})},$y=function(e,t){e._skinLoaded?qy(e,t):e.on("SkinLoaded",(function(){qy(e,t)}))},Wy=function(e,t,n){(function(e,t,n){e.fire(t,n)})(e,t,{message:n}),console.error(n)},Ky=function(e,t,n){return n?"Failed to load "+e+": "+n+" from url "+t:"Failed to load "+e+" url: "+t},Xy=function(e,t,n){Wy(e,"PluginLoadError",Ky("plugin",t,n))},Yy=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=window.console
r&&(r.error?r.error.apply(r,Ne([e],t)):r.log.apply(r,Ne([e],t)))},Gy=function(e){var t=function(e){var t=e.getParam("content_css")
return N(t)?z(t.split(","),Pe):k(t)?t:!1===t||e.inline?[]:["default"]}(e),n=e.editorManager.baseURL+"/skins/content",r="content"+e.editorManager.suffix+".css",o=!0===e.inline
return z(t,(function(t){return function(e){return/^[a-z0-9\-]+$/i.test(e)}(t)&&!o?n+"/"+t+"/"+r:e.documentBaseURI.toAbsolute(t)}))}
function Jy(e,t){var n={},r=function(e,n,r,o){var i=new XMLHttpRequest
i.open("POST",t.url),i.withCredentials=t.credentials,i.upload.onprogress=function(e){o(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){if(i.status<200||i.status>=300)r("HTTP Error: "+i.status)
else{var e,o,a=JSON.parse(i.responseText)
if(a&&"string"==typeof a.location)n((e=t.basePath,o=a.location,e?e.replace(/\/$/,"")+"/"+o.replace(/^\//,""):o))
else r("Invalid JSON: "+i.responseText)}}
var a=new FormData
a.append("file",e.blob(),e.filename()),i.send(a)},o=function(e,t){return{url:t,blobInfo:e,status:!0}},i=function(e,t,n){return{url:"",blobInfo:e,status:!1,error:{message:t,options:n}}},a=function(e,t){Ct.each(n[e],(function(e){e(t)})),delete n[e]},u=function(r,u){return r=Ct.grep(r,(function(t){return!e.isUploaded(t.blobUri())})),Nr.all(Ct.map(r,(function(r){return e.isPending(r.blobUri())?function(e){var t=e.blobUri()
return new Nr((function(e){n[t]=n[t]||[],n[t].push(e)}))}(r):function(t,n,r){return e.markPending(t.blobUri()),new Nr((function(u){var c
try{var s=function(){c&&c.close()}
n(t,(function(n){s(),e.markUploaded(t.blobUri(),n),a(t.blobUri(),o(t,n)),u(o(t,n))}),(function(n,r){var o=r||{}
s(),e.removeFailed(t.blobUri()),a(t.blobUri(),i(t,n,o)),u(i(t,n,o))}),(function(e){e<0||e>100||(c||(c=r()),c.progressBar.value(e))}))}catch(f){u(i(t,f.message,{}))}}))}(r,t.handler,u)})))}
return!1===O(t.handler)&&(t.handler=r),{upload:function(e,n){return t.url||t.handler!==r?u(e,n):new Nr((function(e){e([])}))}}}var Qy=0,Zy=function(e){return e+Qy+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t())
var t},eb=function(e){var t,n,r,o,i,a=function(){var e=[],t=function(e){if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
var t,n=e.id||Zy("blobid"),r=e.name||n,o=e.blob
return{id:s(n),name:s(r),filename:s(e.filename||r+"."+(t=o.type,{"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png","image/apng":"apng","image/avif":"avif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff"}[t.toLowerCase()]||"dat")),blob:s(o),base64:s(e.base64),blobUri:s(e.blobUri||URL.createObjectURL(o)),uri:s(e.uri)}},n=function(t){return W(e,t).getOrUndefined()},r=function(e){return n((function(t){return t.id()===e}))}
return{create:function(e,n,r,o,i){if(N(e))return t({id:e,name:o,filename:i,blob:n,base64:r})
if(E(e))return t(e)
throw new Error("Unknown input type")},add:function(t){r(t.id())||e.push(t)},get:r,getByUri:function(e){return n((function(t){return t.blobUri()===e}))},getByData:function(e,t){return n((function(n){return n.base64()===e&&n.blob().type===t}))},findFirst:n,removeByUri:function(t){e=V(e,(function(e){return e.blobUri()!==t||(URL.revokeObjectURL(e.blobUri()),!1)}))},destroy:function(){j(e,(function(e){URL.revokeObjectURL(e.blobUri())})),e=[]}}}(),u=(r={},o=function(e,t){return{status:e,resultUri:t}},{hasBlobUri:i=function(e){return e in r},getResultUri:function(e){var t=r[e]
return t?t.resultUri:null},isPending:function(e){return!!i(e)&&1===r[e].status},isUploaded:function(e){return!!i(e)&&2===r[e].status},markPending:function(e){r[e]=o(1,null)},markUploaded:function(e,t){r[e]=o(2,t)},removeFailed:function(e){delete r[e]},destroy:function(){r={}}}),c=[],f=function(e){var t=fu(null)
return e.on("change AddUndo",(function(e){t.set(Se({},e.level))})),{fireIfChanged:function(){var n=e.undoManager.data
ee(n).filter((function(e){return!gv(t.get(),e)})).each((function(t){e.setDirty(!0),e.fire("change",{level:t,lastLevel:Q(n,n.length-2).getOrNull()})}))}}}(e),l=function(t){return function(n){return e.selection?t(n):[]}},d=function(e,t,n){var r=0
do{-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1)}while(-1!==r)
return e},m=function(e,t,n){var r='src="'+n+'"'+(n===gt.transparentSrc?' data-mce-placeholder="1"':"")
return e=d(e,'src="'+t+'"',r),e=d(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},p=function(t,n){j(e.undoManager.data,(function(e){"fragmented"===e.type?e.fragments=z(e.fragments,(function(e){return m(e,t,n)})):e.content=m(e.content,t,n)}))},g=function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})},v=function(n){return t||(t=Jy(u,{url:Qc(e),basePath:Zc(e),credentials:es(e),handler:ts(e)})),C().then(l((function(r){var o=z(r,(function(e){return e.blobInfo}))
return t.upload(o,g).then(l((function(t){var o=[],i=z(t,(function(t,n){var i=r[n].blobInfo,u=r[n].image
return t.status&&function(e){return e.getParam("images_replace_blob_uris",!0,"boolean")}(e)?(a.removeByUri(u.src),function(t,n){var r,o=e.convertURL(n,"src")
p(t.src,n),e.$(t).attr({src:Gc(e)?(r=n,r+(-1===r.indexOf("?")?"?":"&")+(new Date).getTime()):n,"data-mce-src":o})}(u,t.url)):t.error&&(t.error.options.remove&&(p(u.getAttribute("src"),gt.transparentSrc),o.push(u)),function(e,t){$y(e,pu.translate(["Failed to upload image: {0}",t]))}(e,t.error.message)),{element:u,status:t.status,uploadUri:t.url,blobInfo:i}}))
return i.length>0&&f.fireIfChanged(),o.length>0&&(Sv(e)?console.error("Removing images on failed uploads is currently unsupported for RTC"):e.undoManager.transact((function(){j(o,(function(t){e.dom.remove(t),a.removeByUri(t.src)}))}))),n&&n(i),i})))})))},y=function(t){if(Yc(e))return v(t)},b=function(t){return!1!==Y(c,(function(e){return e(t)}))&&(0!==t.getAttribute("src").indexOf("data:")||function(e){return e.getParam("images_dataimg_filter",h,"function")}(e)(t))},C=function(){return n||(n=Hv(u,a)),n.findAll(e.getBody(),b).then(l((function(t){return t=V(t,(function(t){return"string"!=typeof t||($y(e,t),!1)})),j(t,(function(e){p(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),t})))},w=function(t){return t.replace(/src="(blob:[^"]+)"/g,(function(t,n){var r=u.getResultUri(n)
if(r)return'src="'+r+'"'
var o=a.getByUri(n)
return o||(o=$(e.editorManager.get(),(function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)}),null)),o?'src="data:'+o.blob().type+";base64,"+o.base64()+'"':t}))}
return e.on("SetContent",(function(){Yc(e)?y():C()})),e.on("RawSaveContent",(function(e){e.content=w(e.content)})),e.on("GetContent",(function(e){e.source_view||"raw"===e.format||"tree"===e.format||(e.content=w(e.content))})),e.on("PostRender",(function(){e.parser.addNodeFilter("img",(function(e){j(e,(function(e){var t=e.attr("src")
if(!a.getByUri(t)){var n=u.getResultUri(t)
n&&e.attr("src",n)}}))}))})),{blobCache:a,addFilter:function(e){c.push(e)},uploadImages:v,uploadImagesAuto:y,scanForImages:C,destroy:function(){a.destroy(),u.destroy(),n=t=null}}}
function tb(e){var t={},n=function(e,r){e&&("string"!=typeof e?Ct.each(e,(function(e,t){n(t,e)})):(k(r)||(r=[r]),Ct.each(r,(function(e){void 0===e.deep&&(e.deep=!e.selector),void 0===e.split&&(e.split=!e.selector||e.inline),void 0===e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))})),t[e]=r))}
return n(function(e){var t={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all",preserve_attributes:["class","style"]}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",defaultBlock:"p",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(e,t,n){return xn(e)&&e.hasAttribute("href")},onformat:function(t,n,r){Ct.each(r,(function(n,r){e.setAttrib(t,r,n)}))}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}
return Ct.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),(function(e){t[e]={block:e,remove:"all"}})),t}(e.dom)),n(function(e){return e.getParam("formats")}(e)),{get:function(e){return e?t[e]:t},has:function(e){return me(t,e)},register:n,unregister:function(e){return e&&t[e]&&delete t[e],t}}}var nb,rb=Ct.each,ob=iu.DOM,ib=function(e,t){var n,r,o,i=t&&t.schema||ei({}),a=function(e){r="string"==typeof e?{name:e,classes:[],attrs:{}}:e
var t=ob.create(r.name)
return function(e,t){t.classes.length&&ob.addClass(e,t.classes.join(" ")),ob.setAttribs(e,t.attrs)}(t,r),t},u=function(e,t,n){var r,o,c=t.length>0&&t[0],s=c&&c.name,f=function(e,t){var n="string"!=typeof e?e.nodeName.toLowerCase():e,r=i.getElementRule(n),o=r&&r.parentsRequired
return!(!o||!o.length)&&(t&&-1!==Ct.inArray(o,t)?t:o[0])}(e,s)
if(f)s===f?(o=t[0],t=t.slice(1)):o=f
else if(c)o=t[0],t=t.slice(1)
else if(!n)return e
return o&&(r=a(o)).appendChild(e),n&&(r||(r=ob.create("div")).appendChild(e),Ct.each(n,(function(t){var n=a(t)
r.insertBefore(n,e)}))),u(r,t,o&&o.siblings)}
return e&&e.length?(r=e[0],n=a(r),(o=ob.create("div")).appendChild(u(n,e.slice(1),r.siblings)),o):""},ab=function(e){var t,n={classes:[],attrs:{}}
return"*"!==(e=n.selector=Ct.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,(function(e,t,r,o,i){switch(t){case"#":n.attrs.id=r
break
case".":n.classes.push(r)
break
case":":-1!==Ct.inArray("checked disabled enabled read-only required".split(" "),r)&&(n.attrs[r]=r)}if("["===o){var a=i.match(/([\w\-]+)(?:\=\"([^\"]+))?/)
a&&(n.attrs[a[1]]=a[2])}return""}))),n.name=t||"div",n},ub=function(e,t){var n,r,o,i="",a=function(e){var t=e.getParam("preview_styles","font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow")
return N(t)?t:""}(e)
if(""===a)return""
var u=function(e){return e.replace(/%(\w+)/g,"")}
if("string"==typeof t){if(!(t=e.formatter.get(t)))return
t=t[0]}if("preview"in t){var c=de(t,"preview")
if(c.is(!1))return""
a=c.getOr(a)}n=t.block||t.inline||"span"
var s,f=(s=t.selector)&&"string"==typeof s?(s=(s=s.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Ct.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/),(function(e){var t=Ct.map(e.split(/(?:~\+|~|\+)/),ab),n=t.pop()
return t.length&&(n.siblings=t),n})).reverse()):[]
f.length?(f[0].name||(f[0].name=n),n=t.selector,r=ib(f,e)):r=ib([n],e)
var l=ob.select(n,r)[0]||r.firstChild
return rb(t.styles,(function(e,t){var n=u(e)
n&&ob.setStyle(l,t,n)})),rb(t.attributes,(function(e,t){var n=u(e)
n&&ob.setAttrib(l,t,n)})),rb(t.classes,(function(e){var t=u(e)
ob.hasClass(l,t)||ob.addClass(l,t)})),e.fire("PreviewFormats"),ob.setStyles(r,{position:"absolute",left:-65535}),e.getBody().appendChild(r),o=ob.getStyle(e.getBody(),"fontSize",!0),o=/px$/.test(o)?parseInt(o,10):0,rb(a.split(" "),(function(t){var n=ob.getStyle(l,t,!0)
if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=ob.getStyle(e.getBody(),t,!0),"#ffffff"===ob.toHex(n).toLowerCase())||"color"===t&&"#000000"===ob.toHex(n).toLowerCase())){if("font-size"===t&&/em|%$/.test(n)){if(0===o)return
n=parseFloat(n)/(/%$/.test(n)?100:1)*o+"px"}"border"===t&&n&&(i+="padding:0 2px;"),i+=t+":"+n+";"}})),e.fire("AfterPreviewFormats"),ob.remove(r),i},cb=function(e){var t=tb(e),n=fu(null)
return function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t])
e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])}(e),ih(e),{get:t.get,has:t.has,register:t.register,unregister:t.unregister,apply:function(t,n,r){(function(e,t,n,r){Ev(e).formatter.apply(t,n,r)})(e,t,n,r)},remove:function(t,n,r,o){(function(e,t,n,r,o){Ev(e).formatter.remove(t,n,r,o)})(e,t,n,r,o)},toggle:function(t,n,r){(function(e,t,n,r){Ev(e).formatter.toggle(t,n,r)})(e,t,n,r)},match:function(t,n,r){return function(e,t,n,r){return Ev(e).formatter.match(t,n,r)}(e,t,n,r)},closest:function(t){return function(e,t){return Ev(e).formatter.closest(t)}(e,t)},matchAll:function(t,n){return function(e,t,n){return Ev(e).formatter.matchAll(t,n)}(e,t,n)},matchNode:function(t,n,r,o){return function(e,t,n,r,o){return Ev(e).formatter.matchNode(t,n,r,o)}(e,t,n,r,o)},canApply:function(t){return function(e,t){return Ev(e).formatter.canApply(t)}(e,t)},formatChanged:function(t,r,o){return function(e,t,n,r,o){return void 0===o&&(o=!1),Ev(e).formatter.formatChanged(t,n,r,o)}(e,n,t,r,o)},getCssText:l(ub,e)}},sb=function(e){var t=fu(C.none()),n=fu(0),r=fu(0),o={data:[],typing:!1,beforeChange:function(){(function(e,t,n){Ev(e).undoManager.beforeChange(t,n)})(e,n,t)},add:function(i,a){return function(e,t,n,r,o,i,a){return Ev(e).undoManager.addUndoLevel(t,n,r,o,i,a)}(e,o,r,n,t,i,a)},undo:function(){return function(e,t,n,r){return Ev(e).undoManager.undo(t,n,r)}(e,o,n,r)},redo:function(){return function(e,t,n){return Ev(e).undoManager.redo(t,n)}(e,r,o.data)},clear:function(){(function(e,t,n){Ev(e).undoManager.clear(t,n)})(e,o,r)},reset:function(){(function(e,t){Ev(e).undoManager.reset(t)})(e,o)},hasUndo:function(){return function(e,t,n){return Ev(e).undoManager.hasUndo(t,n)}(e,o,r)},hasRedo:function(){return function(e,t,n){return Ev(e).undoManager.hasRedo(t,n)}(e,o,r)},transact:function(t){return function(e,t,n,r){return Ev(e).undoManager.transact(t,n,r)}(e,o,n,t)},ignore:function(t){(function(e,t,n){Ev(e).undoManager.ignore(t,n)})(e,n,t)},extra:function(t,n){(function(e,t,n,r,o){Ev(e).undoManager.extra(t,n,r,o)})(e,o,r,t,n)}}
return Sv(e)||function(e,t,n){var r=fu(!1),o=function(e){vv(t,!1,n),t.add({},e)}
e.on("init",(function(){t.add()})),e.on("BeforeExecCommand",(function(e){var r=e.command.toLowerCase()
"undo"!==r&&"redo"!==r&&"mcerepaint"!==r&&(yv(t,n),t.beforeChange())})),e.on("ExecCommand",(function(e){var t=e.command.toLowerCase()
"undo"!==t&&"redo"!==t&&"mcerepaint"!==t&&o(e)})),e.on("ObjectResizeStart cut",(function(){t.beforeChange()})),e.on("SaveContent ObjectResized blur",o),e.on("dragend",o),e.on("keyup",(function(n){var i=n.keyCode
n.isDefaultPrevented()||((i>=33&&i<=36||i>=37&&i<=40||45===i||n.ctrlKey)&&(o(),e.nodeChanged()),46!==i&&8!==i||e.nodeChanged(),r.get()&&t.typing&&!1===gv(lv(e),t.data[0])&&(!1===e.isDirty()&&(e.setDirty(!0),e.fire("change",{level:t.data[0],lastLevel:null})),e.fire("TypingUndo"),r.set(!1),e.nodeChanged()))})),e.on("keydown",(function(e){var i=e.keyCode
if(!e.isDefaultPrevented())if(i>=33&&i<=36||i>=37&&i<=40||45===i)t.typing&&o(e)
else{var a=e.ctrlKey&&!e.altKey||e.metaKey
!(i<16||i>20)||224===i||91===i||t.typing||a||(t.beforeChange(),vv(t,!0,n),t.add({},e),r.set(!0))}})),e.on("mousedown",(function(e){t.typing&&o(e)})),e.on("input",(function(e){var t
e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(t=e).inputType&&null===t.data||function(e){return"insertFromPaste"===e.inputType||"insertFromDrop"===e.inputType}(e))&&o(e)})),e.on("AddUndo Undo Redo ClearUndos",(function(t){t.isDefaultPrevented()||e.nodeChanged()}))}(e,o,n),function(e){e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo")}(e),o},fb=[9,27,$l.HOME,$l.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,$l.DOWN,$l.UP,$l.LEFT,$l.RIGHT].concat(gt.browser.isFirefox()?[224]:[]),lb="data-mce-placeholder",db=function(e){return"keydown"===e.type||"keyup"===e.type},mb=function(e){var t=e.keyCode
return t===$l.BACKSPACE||t===$l.DELETE},pb=function(e){var t=e.dom,n=Kc(e),r=function(e){return e.getParam("placeholder",qc.getAttrib(e.getElement(),"placeholder"),"string")}(e),o=function(i,a){if(!function(e){if(db(e)){var t=e.keyCode
return!mb(e)&&($l.metaKeyPressed(e)||e.altKey||t>=112&&t<=123||F(fb,t))}return!1}(i)){var u=e.getBody(),c=!function(e){return db(e)&&!(mb(e)||"keyup"===e.type&&229===e.keyCode)}(i)&&function(e,t,n){if(ko(xt.fromDom(t),!1)){var r=""===n,o=t.firstElementChild
return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&(r?!e.isBlock(o):n===o.nodeName.toLowerCase())}return!1}(t,u,n);(""!==t.getAttrib(u,lb)!==c||a)&&(t.setAttrib(u,lb,c?r:null),t.setAttrib(u,"aria-placeholder",c?r:null),function(e,t){e.fire("PlaceholderToggle",{state:t})}(e,c),e.on(c?"keydown":"keyup",o),e.off(c?"keyup":"keydown",o))}}
r&&e.on("init",(function(t){o(t,!0),e.on("change SetContent ExecCommand",o),e.on("paste",(function(t){return Ar.setEditorTimeout(e,(function(){return o(t)}))}))}))},gb=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,hb=function(e,t){return Nt(xt.fromDom(t),function(e){return e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string")}(e))},vb=function(e){return"rtl"===iu.DOM.getStyle(e,"direction",!0)||(t=e.textContent,gb.test(t))
var t},yb=function(e,t,n){var r=function(e,t,n){return V(iu.DOM.getParents(n.container(),"*",t),e)}(e,t,n)
return C.from(r[r.length-1])},bb=function(e,t){if(!t)return t
var n=t.container(),r=t.offset()
return e?Qr(n)?Tn(n.nextSibling)?wc(n.nextSibling,0):wc.after(n):to(t)?wc(n,r+1):t:Qr(n)?Tn(n.previousSibling)?wc(n.previousSibling,n.previousSibling.data.length):wc.before(n):no(t)?wc(n,r-1):t},Cb=l(bb,!0),wb=l(bb,!1),xb=function(e,t){return At(e,t)?br(t,(function(e){return Ur(e)||jr(e)}),function(e){return function(t){return kt(e,xt.fromDom(t.dom.parentNode))}}(e)):C.none()},Sb=function(e){e.dom.isEmpty(e.getBody())&&(e.setContent(""),function(e){var t=e.getBody(),n=t.firstChild&&e.dom.isBlock(t.firstChild)?t.firstChild:t
e.selection.setCursorLocation(n,0)}(e))},Nb=function(e,t){return{from:e,to:t}},Eb=function(e,t){var n=xt.fromDom(e),r=xt.fromDom(t.container())
return xb(n,r).map((function(e){return function(e,t){return{block:e,position:t}}(e,t)}))},kb=function(e,t,n){var r=Eb(e,wc.fromRangeStart(n)),o=r.bind((function(n){return Cf(t,e,n.position).bind((function(n){return Eb(e,n).map((function(n){return function(e,t,n){return Pn(n.position.getNode())&&!1===ko(n.block)?Sf(!1,n.block.dom).bind((function(r){return r.isEqual(n.position)?Cf(t,e,r).bind((function(t){return Eb(e,t)})):C.some(n)})).getOr(n):n}(e,t,n)}))}))}))
return Vu(r,o,Nb).filter((function(e){return function(e){return!1===kt(e.from.block,e.to.block)}(e)&&function(e){return Ut(e.from.block).bind((function(t){return Ut(e.to.block).filter((function(e){return kt(t,e)}))})).isSome()}(e)&&function(e){return!1===Mn(e.from.block.dom)&&!1===Mn(e.to.block.dom)}(e)}))},_b=function(e){var t=qt(e)
return K(t,Ir).fold((function(){return t}),(function(e){return t.slice(0,e)}))},Ab=function(e){var t=_b(e)
return j(t,cn),t},Rb=function(e,t){var n=mp(t,e)
return W(n.reverse(),(function(e){return ko(e)})).each(cn)},Tb=function(e,t,n,r){if(ko(n))return sp(n),kf(n.dom)
0===V(Ht(r),(function(e){return!ko(e)})).length&&ko(t)&&tn(r,xt.fromTag("br"))
var o=Ef(n.dom,wc.before(r.dom))
return j(Ab(t),(function(e){tn(r,e)})),Rb(e,t),o},Db=function(e,t,n){if(ko(n))return cn(n),ko(t)&&sp(t),kf(t.dom)
var r=_f(n.dom)
return j(Ab(t),(function(e){on(n,e)})),Rb(e,t),r},Ob=function(e,t){return At(t,e)?function(e,t){var n=mp(t,e)
return C.from(n[n.length-1])}(t,e):C.none()},Bb=function(e,t){Sf(e,t.dom).map((function(e){return e.getNode()})).map(xt.fromDom).filter(Fr).each(cn)},Pb=function(e,t,n){return Bb(!0,t),Bb(!1,n),Ob(t,n).fold(l(Db,e,t,n),l(Tb,e,t,n))},Lb=function(e,t,n,r){return t?Pb(e,r,n):Pb(e,n,r)},Ib=function(e,t){var n=xt.fromDom(e.getBody()),r=function(e,t,n){return n.collapsed?kb(e,t,n):C.none()}(n.dom,t,e.selection.getRng()).bind((function(e){return Lb(n,t,e.from.block,e.to.block)}))
return r.each((function(t){e.selection.setRng(t.toRange())})),r.isSome()},Mb=function(e,t){var n=xt.fromDom(t),r=l(kt,e)
return yr(n,Vr,r).isSome()},Fb=function(e,t){var n=Ef(e.dom,wc.fromRangeStart(t)).isNone(),r=Nf(e.dom,wc.fromRangeEnd(t)).isNone()
return!function(e,t){return Mb(e,t.startContainer)||Mb(e,t.endContainer)}(e,t)&&n&&r},Ub=function(e){var t=xt.fromDom(e.getBody()),n=e.selection.getRng()
return Fb(t,n)?function(e){return e.setContent(""),e.selection.setCursorLocation(),!0}(e):function(e,t){var n=t.getRng()
return Vu(xb(e,xt.fromDom(n.startContainer)),xb(e,xt.fromDom(n.endContainer)),(function(r,o){return!1===kt(r,o)&&(n.deleteContents(),Lb(e,!0,r,o).each((function(e){t.setRng(e.toRange())})),!0)})).getOr(!1)}(t,e.selection)},zb=function(e,t){return!e.selection.isCollapsed()&&Ub(e)},jb=In,Hb=Mn,Vb=function(e,t,n,r,o){return C.from(t._selectionOverrides.showCaret(e,n,r,o))},qb=function(e,t){return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?C.none():C.some(function(e){var t=e.ownerDocument.createRange()
return t.selectNode(e),t}(t))},$b=function(e,t,n){var r=Js(1,e.getBody(),t),o=wc.fromRangeStart(r),i=o.getNode()
if(Ts(i))return Vb(1,e,i,!o.isAtEnd(),!1)
var a=o.getNode(!0)
if(Ts(a))return Vb(1,e,a,!1,!1)
var u=e.dom.getParent(o.getNode(),(function(e){return Hb(e)||jb(e)}))
return Ts(u)?Vb(1,e,u,!1,n):C.none()},Wb=function(e,t,n){return t.collapsed?$b(e,t,n).getOr(t):t},Kb=function(e){return ap(e)||np(e)},Xb=function(e){return up(e)||rp(e)},Yb=function(e,t,n,r,o,i){return Vb(r,e,i.getNode(!o),o,!0).each((function(n){if(t.collapsed){var r=t.cloneRange()
o?r.setEnd(n.startContainer,n.startOffset):r.setStart(n.endContainer,n.endOffset),r.deleteContents()}else t.deleteContents()
e.selection.setRng(n)})),function(e,t){Tn(t)&&0===t.data.length&&e.remove(t)}(e.dom,n),!0},Gb=function(e,t){return function(e,t){var n=e.selection.getRng()
if(!Tn(n.commonAncestorContainer))return!1
var r=t?Cc.Forwards:Cc.Backwards,o=gf(e.getBody()),i=l(tf,t?o.next:o.prev),a=t?Kb:Xb,u=Zs(r,e.getBody(),n),c=bb(t,i(u))
if(!c||!nf(u,c))return!1
if(a(c))return Yb(e,n,u.getNode(),r,t,c)
var s=i(c)
return!!(s&&a(s)&&nf(c,s))&&Yb(e,n,u.getNode(),r,t,s)}(e,t)},Jb=pr([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),Qb=function(e,t,n,r){var o=r.getNode(!1===t)
return xb(xt.fromDom(e),xt.fromDom(n.getNode())).map((function(e){return ko(e)?Jb.remove(e.dom):Jb.moveToElement(o)})).orThunk((function(){return C.some(Jb.moveToElement(o))}))},Zb=function(e,t,n){return Cf(t,e,n).bind((function(r){return o=r.getNode(),Vr(xt.fromDom(o))||jr(xt.fromDom(o))||function(e,t,n,r){var o=function(t){return Mr(xt.fromDom(t))&&!qs(n,r,e)}
return Qs(!t,n).fold((function(){return Qs(t,r).fold(g,o)}),o)}(e,t,n,r)?C.none():t&&Mn(r.getNode())||!1===t&&Mn(r.getNode(!0))?Qb(e,t,n,r):t&&up(n)||!1===t&&ap(n)?C.some(Jb.moveToPosition(r)):C.none()
var o}))},eC=function(e,t,n){return function(e,t){var n=t.getNode(!1===e),r=e?"after":"before"
return xn(n)&&n.getAttribute("data-mce-caret")===r}(t,n)?function(e,t){return e&&Mn(t.nextSibling)?C.some(Jb.moveToElement(t.nextSibling)):!1===e&&Mn(t.previousSibling)?C.some(Jb.moveToElement(t.previousSibling)):C.none()}(t,n.getNode(!1===t)).fold((function(){return Zb(e,t,n)}),C.some):Zb(e,t,n).bind((function(t){return function(e,t,n){return n.fold((function(e){return C.some(Jb.remove(e))}),(function(e){return C.some(Jb.moveToElement(e))}),(function(n){return qs(t,n,e)?C.none():C.some(Jb.moveToPosition(n))}))}(e,n,t)}))},tC=function(e,t){return C.from(Vl(e.getBody(),t))},nC=function(e,t){var n=e.selection.getNode()
return tC(e,n).filter(Mn).fold((function(){return function(e,t,n){var r=Js(t?1:-1,e,n),o=wc.fromRangeStart(r),i=xt.fromDom(e)
return!1===t&&up(o)?C.some(Jb.remove(o.getNode(!0))):t&&ap(o)?C.some(Jb.remove(o.getNode())):!1===t&&ap(o)&&Ep(i,o)?kp(i,o).map((function(e){return Jb.remove(e.getNode())})):t&&up(o)&&Np(i,o)?_p(i,o).map((function(e){return Jb.remove(e.getNode())})):eC(e,t,o)}(e.getBody(),t,e.selection.getRng()).exists((function(n){return n.fold(function(e,t){return function(n){return e._selectionOverrides.hideFakeCaret(),ng(e,t,xt.fromDom(n)),!0}}(e,t),function(e,t){return function(n){var r=t?wc.before(n):wc.after(n)
return e.selection.setRng(r.toRange()),!0}}(e,t),function(e){return function(t){return e.selection.setRng(t.toRange()),!0}}(e))}))}),h)},rC=function(e,t){var n=e.selection.getNode()
return!!Mn(n)&&tC(e,n.parentNode).filter(Mn).fold((function(){var n
return n=xt.fromDom(e.getBody()),j(_u(n,".mce-offscreen-selection"),cn),ng(e,t,xt.fromDom(e.selection.getNode())),Sb(e),!0}),(function(){return!0}))},oC=function(e){var t=e.dom,n=e.selection,r=Vl(e.getBody(),n.getNode())
if(In(r)&&t.isBlock(r)&&t.isEmpty(r)){var o=t.create("br",{"data-mce-bogus":"1"})
t.setHTML(r,""),r.appendChild(o),n.setRng(wc.before(o).toRange())}return!0},iC=function(e,t){return e.selection.isCollapsed()?nC(e,t):rC(e,t)},aC=function(e,t){return!!e.selection.isCollapsed()&&function(e,t){var n=wc.fromRangeStart(e.selection.getRng())
return Cf(t,e.getBody(),n).filter((function(e){return t?ep(e):tp(e)})).bind((function(e){return C.from($s(t?0:-1,e))})).exists((function(t){return e.selection.select(t),!0}))}(e,t)},uC=Tn,cC=function(e){return uC(e)&&e.data[0]===Wr},sC=function(e){return uC(e)&&e.data[e.data.length-1]===Wr},fC=function(e){return e.ownerDocument.createTextNode(Wr)},lC=function(e,t){return e?function(e){if(uC(e.previousSibling))return sC(e.previousSibling)||e.previousSibling.appendData(Wr),e.previousSibling
if(uC(e))return cC(e)||e.insertData(0,Wr),e
var t=fC(e)
return e.parentNode.insertBefore(t,e),t}(t):function(e){if(uC(e.nextSibling))return cC(e.nextSibling)||e.nextSibling.insertData(0,Wr),e.nextSibling
if(uC(e))return sC(e)||e.appendData(Wr),e
var t=fC(e)
return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t}(t)},dC=l(lC,!0),mC=l(lC,!1),pC=function(e,t){return Tn(e.container())?lC(t,e.container()):lC(t,e.getNode())},gC=function(e,t){var n=t.get()
return n&&e.container()===n&&Qr(n)},hC=function(e,t){return t.fold((function(t){xs(e.get())
var n=dC(t)
return e.set(n),C.some(wc(n,n.length-1))}),(function(t){return kf(t).map((function(t){if(gC(t,e))return wc(e.get(),1)
xs(e.get())
var n=pC(t,!0)
return e.set(n),wc(n,1)}))}),(function(t){return _f(t).map((function(t){if(gC(t,e))return wc(e.get(),e.get().length-1)
xs(e.get())
var n=pC(t,!1)
return e.set(n),wc(n,n.length-1)}))}),(function(t){xs(e.get())
var n=mC(t)
return e.set(n),C.some(wc(n,1))}))},vC=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t)
if(r.isSome())return r}return C.none()},yC=pr([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),bC=function(e,t){var n=Vs(t,e)
return n||e},CC=function(e,t,n){var r=Cb(n),o=bC(t,r.container())
return yb(e,o,r).fold((function(){return Nf(o,r).bind(l(yb,e,o)).map((function(e){return yC.before(e)}))}),C.none)},wC=function(e,t){return null===Tf(e,t)},xC=function(e,t,n){return yb(e,t,n).filter(l(wC,t))},SC=function(e,t,n){var r=wb(n)
return xC(e,t,r).bind((function(e){return Ef(e,r).isNone()?C.some(yC.start(e)):C.none()}))},NC=function(e,t,n){var r=Cb(n)
return xC(e,t,r).bind((function(e){return Nf(e,r).isNone()?C.some(yC.end(e)):C.none()}))},EC=function(e,t,n){var r=wb(n),o=bC(t,r.container())
return yb(e,o,r).fold((function(){return Ef(o,r).bind(l(yb,e,o)).map((function(e){return yC.after(e)}))}),C.none)},kC=function(e){return!1===vb(AC(e))},_C=function(e,t,n){return vC([CC,SC,NC,EC],[e,t,n]).filter(kC)},AC=function(e){return e.fold(f,f,f,f)},RC=function(e){return e.fold(s("before"),s("start"),s("end"),s("after"))},TC=function(e){return e.fold(yC.before,yC.before,yC.after,yC.after)},DC=function(e){return e.fold(yC.start,yC.start,yC.end,yC.end)},OC=function(e,t,n,r,o,i){return Vu(yb(t,n,r),yb(t,n,o),(function(t,r){return t!==r&&function(e,t,n){var r=Vs(t,e),o=Vs(n,e)
return r&&r===o}(n,t,r)?yC.after(e?t:r):i})).getOr(i)},BC=function(e,t){return e.fold(h,(function(e){return r=t,!(RC(n=e)===RC(r)&&AC(n)===AC(r))
var n,r}))},PC=function(e,t){return e?t.fold(c(C.some,yC.start),C.none,c(C.some,yC.after),C.none):t.fold(C.none,c(C.some,yC.before),C.none,c(C.some,yC.end))},LC=function(e,t,n,r){var o=bb(e,r),i=_C(t,n,o)
return _C(t,n,o).bind(l(PC,e)).orThunk((function(){return function(e,t,n,r,o){var i=bb(e,o)
return Cf(e,n,i).map(l(bb,e)).fold((function(){return r.map(TC)}),(function(o){return _C(t,n,o).map(l(OC,e,t,n,i,o)).filter(l(BC,r))})).filter(kC)}(e,t,n,i,r)}))},IC=(l(LC,!1),l(LC,!0),function(e,t,n){var r=e?1:-1
return t.setRng(wc(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0}),MC=function(e,t){var n=t.selection.getRng(),r=e?wc.fromRangeEnd(n):wc.fromRangeStart(n)
return!!function(e){return O(e.selection.getSel().modify)}(t)&&(e&&to(r)?IC(!0,t.selection,r):!(e||!no(r))&&IC(!1,t.selection,r))},FC=function(e,t){var n=e.dom.createRng()
n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},UC=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},zC=function(e,t,n){return hC(t,n).map((function(t){return FC(e,t),n}))},jC=function(e,t){if(e.selection.isCollapsed()&&!0!==e.composing&&t.get()){var n=wc.fromRangeStart(e.selection.getRng())
wc.isTextPosition(n)&&!1===function(e){return to(e)||no(e)}(n)&&(FC(e,ws(t.get(),n)),t.set(null))}},HC=function(e,t,n){return!!fs(e)&&function(e,t,n){var r=e.getBody(),o=wc.fromRangeStart(e.selection.getRng()),i=l(hb,e)
return LC(n,i,r,o).bind((function(n){return zC(e,t,n)}))}(e,t,n).isSome()},VC=function(e,t,n){return!!fs(t)&&MC(e,t)},qC=function(e){var t=fu(null),n=l(hb,e)
return e.on("NodeChange",(function(r){!fs(e)||gt.browser.isIE()&&r.initial||(function(e,t,n){var r=z(_u(xt.fromDom(t.getRoot()),'*[data-mce-selected="inline-boundary"]'),(function(e){return e.dom})),o=V(r,e),i=V(n,e)
j(J(o,i),l(UC,!1)),j(J(i,o),l(UC,!0))}(n,e.dom,r.parents),jC(e,t),function(e,t,n,r){if(t.selection.isCollapsed()){var o=V(r,e)
j(o,(function(r){var o=wc.fromRangeStart(t.selection.getRng())
_C(e,t.getBody(),o).bind((function(e){return zC(t,n,e)}))}))}}(n,e,t,r.parents))})),t},$C=l(VC,!0),WC=l(VC,!1),KC=function(e,t){return function(n){return hC(t,n).exists((function(t){return FC(e,t),!0}))}},XC=function(e,t,n,r){var o=e.getBody(),i=l(hb,e)
e.undoManager.ignore((function(){e.selection.setRng(function(e,t){var n=document.createRange()
return n.setStart(e.container(),e.offset()),n.setEnd(t.container(),t.offset()),n}(n,r)),e.execCommand("Delete"),_C(i,o,wc.fromRangeStart(e.selection.getRng())).map(DC).map(KC(e,t))})),e.nodeChanged()},YC=function(e,t,n,r){var o=function(e,t){return Vs(t,e)||e}(e.getBody(),r.container()),i=l(hb,e),a=_C(i,o,r)
return a.bind((function(e){return n?e.fold(s(C.some(DC(e))),C.none,s(C.some(TC(e))),C.none):e.fold(C.none,s(C.some(TC(e))),C.none,s(C.some(DC(e))))})).map(KC(e,t)).getOrThunk((function(){var u=wf(n,o,r),c=u.bind((function(e){return _C(i,o,e)}))
return Vu(a,c,(function(){return yb(i,o,r).exists((function(t){return!!function(e){return Vu(kf(e),_f(e),(function(t,n){var r=bb(!0,t),o=bb(!1,n)
return Nf(e,r).forall((function(e){return e.isEqual(o)}))})).getOr(!0)}(t)&&(ng(e,n,xt.fromDom(t)),!0)}))})).orThunk((function(){return c.bind((function(o){return u.map((function(o){return n?XC(e,t,r,o):XC(e,t,o,r),!0}))}))})).getOr(!1)}))},GC=function(e,t,n){if(e.selection.isCollapsed()&&fs(e)){var r=wc.fromRangeStart(e.selection.getRng())
return YC(e,t,n,r)}return!1},JC=function(e){return 1===qt(e).length},QC=function(e,t,n,r){var o=l(ah,t),i=z(V(r,o),(function(e){return e.dom}))
if(0===i.length)ng(t,e,n)
else{var a=function(e,t){var n=Zg(!1),r=rh(t,n.dom)
return tn(xt.fromDom(e),n),cn(xt.fromDom(e)),wc(r,0)}(n.dom,i)
t.selection.setRng(a.toRange())}},ZC=function(e,t){var n=xt.fromDom(e.getBody()),r=xt.fromDom(e.selection.getStart()),o=V(function(e,t){var n=mp(t,e)
return K(n,Ir).fold(s(n),(function(e){return n.slice(0,e)}))}(n,r),JC)
return ee(o).exists((function(n){var r,i=wc.fromRangeStart(e.selection.getRng())
return!(!function(e,t,n){return Vu(kf(n),_f(n),(function(r,o){var i=bb(!0,r),a=bb(!1,o),u=bb(!1,t)
return e?Nf(n,u).exists((function(e){return e.isEqual(a)&&t.isEqual(i)})):Ef(n,u).exists((function(e){return e.isEqual(i)&&t.isEqual(a)}))})).getOr(!0)}(t,i,n.dom)||(r=n,Rf(r.dom)&&Jg(r.dom)))&&(QC(t,e,n,o),!0)}))},ew=function(e,t){return!!e.selection.isCollapsed()&&ZC(e,t)},tw=function(e,t,n){return e._selectionOverrides.hideFakeCaret(),ng(e,t,xt.fromDom(n)),!0},nw=function(e,t){return e.selection.isCollapsed()?function(e,t){var n=t?np:rp,r=t?Cc.Forwards:Cc.Backwards,o=Zs(r,e.getBody(),e.selection.getRng())
return n(o)?tw(e,t,o.getNode(!t)):C.from(bb(t,o)).filter((function(e){return n(e)&&nf(o,e)})).exists((function(n){return tw(e,t,n.getNode(!t))}))}(e,t):function(e,t){var n=e.selection.getNode()
return!!Un(n)&&tw(e,t,n)}(e,t)},rw=function(e){var t=parseInt(e,10)
return isNaN(t)?0:t},ow=function(e,t){return(e||"table"===Rt(t)?"margin":"padding")+("rtl"===Xn(t,"direction")?"-right":"-left")},iw=function(e){var t=uw(e)
return!e.mode.isReadOnly()&&(t.length>1||function(e,t){return Y(t,(function(t){var n=ow(is(e),t),r=Gn(t,n).map(rw).getOr(0)
return"false"!==e.dom.getContentEditable(t.dom)&&r>0}))}(e,t))},aw=function(e){return zr(e)||jr(e)},uw=function(e){return V(z(e.selection.getSelectedBlocks(),xt.fromDom),(function(e){return!aw(e)&&!function(e){return Ut(e).map(aw).getOr(!1)}(e)&&br(e,(function(e){return In(e.dom)||Mn(e.dom)})).exists((function(e){return In(e.dom)}))}))},cw=function(e,t){var n=e.dom,r=e.selection,o=e.formatter,i=function(e){return e.getParam("indentation","40px","string")}(e),a=/[a-z%]+$/i.exec(i)[0],u=parseInt(i,10),c=is(e),s=Kc(e)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||""!==s||n.getParent(r.getNode(),n.isBlock)||o.apply("div"),j(uw(e),(function(e){(function(e,t,n,r,o,i){var a=ow(n,xt.fromDom(i))
if("outdent"===t){var u=Math.max(0,rw(i.style[a])-r)
e.setStyle(i,a,u?u+o:"")}else u=rw(i.style[a])+r+o,e.setStyle(i,a,u)})(n,t,c,u,a,e.dom)}))},sw=function(e,t){if(e.selection.isCollapsed()&&iw(e)){var n=e.dom,r=e.selection.getRng(),o=wc.fromRangeStart(r),i=n.getParent(r.startContainer,n.isBlock)
if(null!==i&&yp(xt.fromDom(i),o))return cw(e,"outdent"),!0}return!1},fw=function(e,t){e.getDoc().execCommand(t,!1,null)},lw=function(e,t){e.addCommand("delete",(function(){(function(e,t){sw(e)||iC(e,!1)||Gb(e,!1)||GC(e,t,!1)||Ib(e,!1)||Rg(e)||aC(e,!1)||nw(e,!1)||zb(e)||ew(e,!1)||(fw(e,"Delete"),Sb(e))})(e,t)})),e.addCommand("forwardDelete",(function(){(function(e,t){iC(e,!0)||Gb(e,!0)||GC(e,t,!0)||Ib(e,!0)||Rg(e)||aC(e,!0)||nw(e,!0)||zb(e)||ew(e,!0)||fw(e,"ForwardDelete")})(e,t)}))},dw=function(e){return void 0===e.touches||1!==e.touches.length?C.none():C.some(e.touches[0])},mw=function(e){var t=fu(C.none()),n=fu(!1),r=yu((function(t){e.fire("longpress",Se(Se({},t),{type:"longpress"})),n.set(!0)}),400)
e.on("touchstart",(function(e){dw(e).each((function(o){r.cancel()
var i={x:o.clientX,y:o.clientY,target:e.target}
r.throttle(e),n.set(!1),t.set(C.some(i))}))}),!0),e.on("touchmove",(function(o){r.cancel(),dw(o).each((function(r){t.get().each((function(o){(function(e,t){var n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y)
return n>5||r>5})(r,o)&&(t.set(C.none()),n.set(!1),e.fire("longpresscancel"))}))}))}),!0),e.on("touchend touchcancel",(function(o){r.cancel(),"touchcancel"!==o.type&&t.get().filter((function(e){return e.target.isEqualNode(o.target)})).each((function(){n.get()?o.preventDefault():e.fire("tap",Se(Se({},o),{type:"tap"}))}))}),!0)},pw=function(e,t){return e.hasOwnProperty(t.nodeName)},gw=function(e,t){return!!Tn(t)||!!xn(t)&&(!pw(e,t)&&!zf(t))},hw=function(e,t){if(Tn(t)){if(0===t.nodeValue.length)return!0
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||pw(e,t.nextSibling)))return!0}return!1},vw=function(e){var t,n,r,o=e.dom,i=e.selection,a=e.schema,u=a.getBlockElements(),c=i.getStart(),s=e.getBody(),f=Kc(e)
if(c&&xn(c)&&f){var l=s.nodeName.toLowerCase()
if(a.isValidChild(l,f.toLowerCase())&&!function(e,t,n){return U(dp(xt.fromDom(n),xt.fromDom(t)),(function(t){return pw(e,t.dom)}))}(u,s,c)){var d=i.getRng(),m=d.startContainer,p=d.startOffset,g=d.endContainer,h=d.endOffset,v=um(e)
for(c=s.firstChild;c;)if(gw(u,c)){if(hw(u,c)){n=c,c=c.nextSibling,o.remove(n)
continue}t||(t=o.create(f,Xc(e)),c.parentNode.insertBefore(t,c),r=!0),n=c,c=c.nextSibling,t.appendChild(n)}else t=null,c=c.nextSibling
r&&v&&(d.setStart(m,p),d.setEnd(g,h),i.setRng(d),e.nodeChanged())}}},yw=function(e,t){t.hasAttribute("data-mce-caret")&&(ao(t),function(e){e.selection.setRng(e.selection.getRng())}(e),e.selection.scrollIntoView(t))},bw=function(e,t){var n=function(e){return xr(xt.fromDom(e.getBody()),"*[data-mce-caret]").fold(s(null),(function(e){return e.dom}))}(e)
if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void yw(e,n)):void(eo(n)&&(yw(e,n),e.undoManager.add()))};(function(e){e[e.Br=0]="Br",e[e.Block=1]="Block",e[e.Wrap=2]="Wrap",e[e.Eol=3]="Eol"})(nb||(nb={}))
var Cw,ww=function(e,t){return e===Cc.Backwards?G(t):t},xw=function(e,t,n){return e===Cc.Forwards?t.next(n):t.prev(n)},Sw=function(e,t,n,r){return Pn(r.getNode(t===Cc.Forwards))?nb.Br:!1===qs(n,r)?nb.Block:nb.Wrap},Nw=function(e,t,n,r){for(var o,i=gf(n),a=r,u=[];a&&(o=xw(t,i,a));){if(Pn(o.getNode(!1)))return t===Cc.Forwards?{positions:ww(t,u).concat([o]),breakType:nb.Br,breakAt:C.some(o)}:{positions:ww(t,u),breakType:nb.Br,breakAt:C.some(o)}
if(o.isVisible()){if(e(a,o)){var c=Sw(0,t,a,o)
return{positions:ww(t,u),breakType:c,breakAt:C.some(o)}}u.push(o),a=o}else a=o}return{positions:ww(t,u),breakType:nb.Eol,breakAt:C.none()}},Ew=function(e,t,n,r){return t(n,r).breakAt.map((function(r){var o=t(n,r).positions
return e===Cc.Backwards?o.concat(r):[r].concat(o)})).getOr([])},kw=function(e,t){return $(e,(function(e,n){return e.fold((function(){return C.some(n)}),(function(r){return Vu(Z(r.getClientRects()),Z(n.getClientRects()),(function(e,o){var i=Math.abs(t-e.left)
return Math.abs(t-o.left)<=i?n:r})).or(e)}))}),C.none())},_w=function(e,t){return Z(t.getClientRects()).bind((function(t){return kw(e,t.left)}))},Aw=l(Nw,bc.isAbove,-1),Rw=l(Nw,bc.isBelow,1),Tw=l(Ew,-1,Aw),Dw=l(Ew,1,Rw),Ow=function(e){var t=function(t){return z(t,(function(t){return(t=$u(t)).node=e,t}))}
if(xn(e))return t(e.getClientRects())
if(Tn(e)){var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}},Bw=function(e){return X(e,Ow)};(function(e){e[e.Up=-1]="Up",e[e.Down=1]="Down"})(Cw||(Cw={}))
var Pw,Lw,Iw=function(e,t,n,r,o,i){var a=0,u=[],c=function(r){var i,c,f
for(f=Bw([r]),-1===e&&(f=f.reverse()),i=0;i<f.length;i++)if(c=f[i],!n(c,s)){if(u.length>0&&t(c,xe(u))&&a++,c.line=a,o(c))return!0
u.push(c)}},s=xe(i.getClientRects())
if(!s)return u
var f=i.getNode()
return c(f),function(e,t,n,r){for(;r=Hs(r,e,yo,t);)if(n(r))return}(e,r,c,f),u},Mw=l(Iw,Cw.Up,Xu,Yu),Fw=l(Iw,Cw.Down,Yu,Xu),Uw=function(e){return function(t){return function(e,t){return t.line>e}(e,t)}},zw=function(e){return function(t){return function(e,t){return t.line===e}(e,t)}},jw=Mn,Hw=Hs,Vw=function(e,t){return Math.abs(e.left-t)},qw=function(e,t){return Math.abs(e.right-t)},$w=function(e,t){return e>=t.left&&e<=t.right},Ww=function(e,t){return e>=t.top&&e<=t.bottom},Kw=function(e,t){return Ce(e,(function(e,n){var r=Math.min(Vw(e,t),qw(e,t)),o=Math.min(Vw(n,t),qw(n,t))
return $w(t,n)?n:$w(t,e)?e:o===r&&jw(n.node)||o<r?n:e}))},Xw=function(e,t,n,r,o){var i=Hw(r,e,yo,t,!o)
do{if(!i||n(i))return}while(i=Hw(i,e,yo,t))},Yw=function(e,t,n){var r=Bw(function(e){return V(te(e.getElementsByTagName("*")),Ds)}(e)),o=V(r,l(Ww,n)),i=Kw(o,t)
if(i){var a=!_n(i.node)&&!Un(i.node)
if((i=Kw(function(e,t,n){void 0===n&&(n=!0)
var r=[],o=function(e,n){var o=V(Bw([n]),(function(n){return!e(n,t)}))
return r=r.concat(o),0===o.length}
return r.push(t),Xw(Cw.Up,e,l(o,Xu),t.node,n),Xw(Cw.Down,e,l(o,Yu),t.node,n),r}(e,i,a),t))&&Ds(i.node))return function(e,t){return{node:e.node,before:Vw(e,t)<qw(e,t)}}(i,t)}return null},Gw=function(e,t){e.selection.setRng(t),Dd(e,e.selection.getRng())},Jw=function(e,t,n){return C.some(Wb(e,t,n))},Qw=function(e,t,n,r,o,i){var a=t===Cc.Forwards,u=gf(e.getBody()),c=l(tf,a?u.next:u.prev),s=a?r:o
if(!n.collapsed){var f=Ju(n)
if(i(f))return Vb(t,e,f,t===Cc.Backwards,!1)}var d=Zs(t,e.getBody(),n)
if(s(d))return qb(e,d.getNode(!a))
var m=bb(a,c(d)),p=function(e){return Jr(e.startContainer)}(n)
if(!m)return p?C.some(n):C.none()
if(s(m))return Vb(t,e,m.getNode(!a),a,!1)
var g=c(m)
return g&&s(g)&&nf(m,g)?Vb(t,e,g.getNode(!a),a,!1):p?Jw(e,m.toRange(),!1):C.none()},Zw=function(e,t,n,r,o,i){var a=Zs(t,e.getBody(),n),u=xe(a.getClientRects()),c=t===Cw.Down
if(!u)return C.none()
var s,f=(c?Fw:Mw)(e.getBody(),Uw(1),a),l=V(f,zw(1)),d=u.left,m=Kw(l,d)
if(m&&i(m.node)){var p=Math.abs(d-m.left),g=Math.abs(d-m.right)
return Vb(t,e,m.node,p<g,!1)}if(s=r(a)?a.getNode():o(a)?a.getNode(!0):Ju(n)){var h=function(e,t,n,r){var o,i,a,u,c,s=gf(t),f=[],l=0,d=function(e){return xe(e.getClientRects())}
1===e?(o=s.next,i=Yu,a=Xu,u=wc.after(r)):(o=s.prev,i=Xu,a=Yu,u=wc.before(r))
var m=d(u)
do{if(u.isVisible()&&!a(c=d(u),m)){if(f.length>0&&i(c,xe(f))&&l++,(c=$u(c)).position=u,c.line=l,n(c))return f
f.push(c)}}while(u=o(u))
return f}(t,e.getBody(),Uw(1),s),v=Kw(V(h,zw(1)),d)
if(v)return Jw(e,v.position.toRange(),!1)
if(v=xe(V(h,zw(0))))return Jw(e,v.position.toRange(),!1)}return 0===l.length?ex(e,c).filter(c?o:r).map((function(t){return Wb(e,t.toRange(),!1)})):C.none()},ex=function(e,t){var n=e.selection.getRng(),r=e.getBody()
if(t){var o=wc.fromRangeEnd(n),i=Rw(r,o)
return ee(i.positions)}o=wc.fromRangeStart(n),i=Aw(r,o)
return Z(i.positions)},tx=function(e,t,n){return ex(e,t).filter(n).exists((function(t){return e.selection.setRng(t.toRange()),!0}))},nx=Mn,rx=function(e,t,n){var r=gf(e.getBody()),o=l(tf,1===t?r.next:r.prev)
if(n.collapsed&&function(e){return""!==Kc(e)}(e)){var i=e.dom.getParent(n.startContainer,"PRE")
if(!i)return
if(!o(wc.fromRangeStart(n))){var a=function(e){var t=e.dom.create(Kc(e))
return(!gt.ie||gt.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">'),t}(e)
1===t?e.$(i).after(a):e.$(i).before(a),e.selection.select(a,!0),e.selection.collapse()}}},ox=function(e,t){var n=t?Cc.Forwards:Cc.Backwards,r=e.selection.getRng()
return function(e,t,n){return Qw(t,e,n,ap,up,nx)}(n,e,r).orThunk((function(){return rx(e,n,r),C.none()}))},ix=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return function(e,t,n){return Zw(t,e,n,(function(e){return ap(e)||op(e)}),(function(e){return up(e)||ip(e)}),nx)}(n,e,r).orThunk((function(){return rx(e,n,r),C.none()}))},ax=function(e,t){return ox(e,t).exists((function(t){return Gw(e,t),!0}))},ux=function(e,t){return ix(e,t).exists((function(t){return Gw(e,t),!0}))},cx=function(e,t){return tx(e,t,t?up:ap)},sx=function(e){return F(["figcaption"],Rt(e))},fx=function(e){var t=document.createRange()
return t.setStartBefore(e.dom),t.setEndBefore(e.dom),t},lx=function(e,t,n){n?on(e,t):rn(e,t)},dx=function(e,t,n,r){return""===t?function(e,t){var n=xt.fromTag("br")
return lx(e,n,t),fx(n)}(e,r):function(e,t,n,r){var o=xt.fromTag(n),i=xt.fromTag("br")
return Vn(o,r),on(o,i),lx(e,o,t),fx(i)}(e,r,t,n)},mx=function(e,t,n){return t?function(e,t){return Rw(e,t).breakAt.isNone()}(e.dom,n):function(e,t){return Aw(e,t).breakAt.isNone()}(e.dom,n)},px=function(e,t){var n=xt.fromDom(e.getBody()),r=wc.fromRangeStart(e.selection.getRng()),o=Kc(e),i=Xc(e)
return function(e,t){var n=l(kt,t)
return br(xt.fromDom(e.container()),Ir,n).filter(sx)}(r,n).exists((function(){if(mx(n,t,r)){var a=dx(n,o,i,t)
return e.selection.setRng(a),!0}return!1}))},gx=function(e,t){return!!e.selection.isCollapsed()&&px(e,t)},hx=function(e,t){return X(function(e){return z(e,(function(e){return Se({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:u},e)}))}(e),(function(e){return function(e,t){return t.keyCode===e.keyCode&&t.shiftKey===e.shiftKey&&t.altKey===e.altKey&&t.ctrlKey===e.ctrlKey&&t.metaKey===e.metaKey}(e,t)?[e]:[]}))},vx=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){return e.apply(null,t)}},yx=function(e,t){return W(hx(e,t),(function(e){return e.action()}))},bx=function(e,t){var n=t?Cc.Forwards:Cc.Backwards,r=e.selection.getRng()
return Qw(e,n,r,np,rp,Un).exists((function(t){return Gw(e,t),!0}))},Cx=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return Zw(e,n,r,np,rp,Un).exists((function(t){return Gw(e,t),!0}))},wx=function(e,t){return tx(e,t,t?rp:np)},xx=function(e,t,n,r,o){var i=_u(xt.fromDom(n),"td,th,caption").map((function(e){return e.dom}))
return function(e,t,n){return $(e,(function(e,r){return e.fold((function(){return C.some(r)}),(function(e){var o=Math.sqrt(Math.abs(e.x-t)+Math.abs(e.y-n)),i=Math.sqrt(Math.abs(r.x-t)+Math.abs(r.y-n))
return C.some(i<o?r:e)}))}),C.none())}(V(function(e,t){return X(t,(function(t){var n=function(e,t){return{left:e.left-t,top:e.top-t,right:e.right+2*t,bottom:e.bottom+2*t,width:e.width+t,height:e.height+t}}($u(t.getBoundingClientRect()),-1)
return[{x:n.left,y:e(n),cell:t},{x:n.right,y:e(n),cell:t}]}))}(e,i),(function(e){return t(e,o)})),r,o).map((function(e){return e.cell}))},Sx=l(xx,(function(e){return e.bottom}),(function(e,t){return e.y<t})),Nx=l(xx,(function(e){return e.top}),(function(e,t){return e.y>t})),Ex=function(e,t){return Z(t.getClientRects()).bind((function(t){return Sx(e,t.left,t.top)})).bind((function(e){return _w(_f(n=e).map((function(e){return Aw(n,e).positions.concat(e)})).getOr([]),t)
var n}))},kx=function(e,t){return ee(t.getClientRects()).bind((function(t){return Nx(e,t.left,t.top)})).bind((function(e){return _w(kf(n=e).map((function(e){return[e].concat(Rw(n,e).positions)})).getOr([]),t)
var n}))},_x=function(e,t,n){var r=e(t,n)
return function(e){return e.breakType===nb.Wrap&&0===e.positions.length}(r)||!Pn(n.getNode())&&function(e){return e.breakType===nb.Br&&1===e.positions.length}(r)?!function(e,t,n){return n.breakAt.exists((function(n){return e(t,n).breakAt.isSome()}))}(e,t,r):r.breakAt.isNone()},Ax=l(_x,Aw),Rx=l(_x,Rw),Tx=function(e,t,n,r){var o=e.selection.getRng(),i=t?1:-1
return!(!Rs()||!function(e,t,n){var r=wc.fromRangeStart(t)
return Sf(!e,n).exists((function(e){return e.isEqual(r)}))}(t,o,n))&&(Vb(i,e,n,!t,!1).each((function(t){Gw(e,t)})),!0)},Dx=function(e,t){var n=t.getNode(e)
return xn(n)&&"TABLE"===n.nodeName?C.some(n):C.none()},Ox=function(e,t,n){var r=Dx(!!t,n),o=!1===t
r.fold((function(){return Gw(e,n.toRange())}),(function(r){return Sf(o,e.getBody()).filter((function(e){return e.isEqual(n)})).fold((function(){return Gw(e,n.toRange())}),(function(o){return function(e,t,n,r){var o=Kc(t)
o?t.undoManager.transact((function(){var r=xt.fromTag(o)
Vn(r,Xc(t)),on(r,xt.fromTag("br")),e?nn(xt.fromDom(n),r):tn(xt.fromDom(n),r)
var i=t.dom.createRng()
i.setStart(r.dom,0),i.setEnd(r.dom,0),Gw(t,i)})):Gw(t,r.toRange())}(t,e,r,n)}))}))},Bx=function(e,t,n,r){var o=e.selection.getRng(),i=wc.fromRangeStart(o),a=e.getBody()
if(!t&&Ax(r,i)){var u=function(e,t,n){return Ex(t,n).orThunk((function(){return Z(n.getClientRects()).bind((function(n){return kw(Tw(e,wc.before(t)),n.left)}))})).getOr(wc.before(t))}(a,n,i)
return Ox(e,t,u),!0}if(t&&Rx(r,i)){u=function(e,t,n){return kx(t,n).orThunk((function(){return Z(n.getClientRects()).bind((function(n){return kw(Dw(e,wc.after(t)),n.left)}))})).getOr(wc.after(t))}(a,n,i)
return Ox(e,t,u),!0}return!1},Px=function(e,t,n){return C.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((function(r){return C.from(e.dom.getParent(r,"table")).map((function(o){return n(e,t,o,r)}))})).getOr(!1)},Lx=function(e,t){return Px(e,t,Tx)},Ix=function(e,t){return Px(e,t,Bx)},Mx=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){var r=at().os
yx([{keyCode:$l.RIGHT,action:vx(ax,e,!0)},{keyCode:$l.LEFT,action:vx(ax,e,!1)},{keyCode:$l.UP,action:vx(ux,e,!1)},{keyCode:$l.DOWN,action:vx(ux,e,!0)},{keyCode:$l.RIGHT,action:vx(Lx,e,!0)},{keyCode:$l.LEFT,action:vx(Lx,e,!1)},{keyCode:$l.UP,action:vx(Ix,e,!1)},{keyCode:$l.DOWN,action:vx(Ix,e,!0)},{keyCode:$l.RIGHT,action:vx(bx,e,!0)},{keyCode:$l.LEFT,action:vx(bx,e,!1)},{keyCode:$l.UP,action:vx(Cx,e,!1)},{keyCode:$l.DOWN,action:vx(Cx,e,!0)},{keyCode:$l.RIGHT,action:vx(HC,e,t,!0)},{keyCode:$l.LEFT,action:vx(HC,e,t,!1)},{keyCode:$l.RIGHT,ctrlKey:!r.isOSX(),altKey:r.isOSX(),action:vx($C,e,t)},{keyCode:$l.LEFT,ctrlKey:!r.isOSX(),altKey:r.isOSX(),action:vx(WC,e,t)},{keyCode:$l.UP,action:vx(gx,e,!1)},{keyCode:$l.DOWN,action:vx(gx,e,!0)}],n).each((function(e){n.preventDefault()}))}(e,t,n)}))},Fx=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){yx([{keyCode:$l.BACKSPACE,action:vx(sw,e,!1)},{keyCode:$l.BACKSPACE,action:vx(iC,e,!1)},{keyCode:$l.DELETE,action:vx(iC,e,!0)},{keyCode:$l.BACKSPACE,action:vx(Gb,e,!1)},{keyCode:$l.DELETE,action:vx(Gb,e,!0)},{keyCode:$l.BACKSPACE,action:vx(GC,e,t,!1)},{keyCode:$l.DELETE,action:vx(GC,e,t,!0)},{keyCode:$l.BACKSPACE,action:vx(Rg,e,!1)},{keyCode:$l.DELETE,action:vx(Rg,e,!0)},{keyCode:$l.BACKSPACE,action:vx(aC,e,!1)},{keyCode:$l.DELETE,action:vx(aC,e,!0)},{keyCode:$l.BACKSPACE,action:vx(nw,e,!1)},{keyCode:$l.DELETE,action:vx(nw,e,!0)},{keyCode:$l.BACKSPACE,action:vx(zb,e,!1)},{keyCode:$l.DELETE,action:vx(zb,e,!0)},{keyCode:$l.BACKSPACE,action:vx(Ib,e,!1)},{keyCode:$l.DELETE,action:vx(Ib,e,!0)},{keyCode:$l.BACKSPACE,action:vx(ew,e,!1)},{keyCode:$l.DELETE,action:vx(ew,e,!0)}],n).each((function(e){n.preventDefault()}))}(e,t,n)})),e.on("keyup",(function(t){!1===t.isDefaultPrevented()&&function(e,t){yx([{keyCode:$l.BACKSPACE,action:vx(oC,e)},{keyCode:$l.DELETE,action:vx(oC,e)}],t)}(e,t)}))},Ux=function(e,t){var n,r=t,o=e.dom,i=e.schema.getMoveCaretBeforeOnEnterElements()
if(t){if(/^(LI|DT|DD)$/.test(t.nodeName)){var a=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}(t.firstChild)
a&&/^(UL|OL|DL)$/.test(a.nodeName)&&t.insertBefore(o.doc.createTextNode($r),t.firstChild)}var u=o.createRng()
if(t.normalize(),t.hasChildNodes()){for(var c=new Br(t,t);n=c.current();){if(Tn(n)){u.setStart(n,0),u.setEnd(n,0)
break}if(i[n.nodeName.toLowerCase()]){u.setStartBefore(n),u.setEndBefore(n)
break}r=n,n=c.next()}n||(u.setStart(r,0),u.setEnd(r,0))}else Pn(t)?t.nextSibling&&o.isBlock(t.nextSibling)?(u.setStartBefore(t),u.setEndBefore(t)):(u.setStartAfter(t),u.setEndAfter(t)):(u.setStart(t,0),u.setEnd(t,0))
e.selection.setRng(u),Dd(e,u)}},zx=function(e){return C.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},jx=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},Hx=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},Vx=function(e){var t=e.parentNode
return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},qx=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!xn(r);)r=r[n?"nextSibling":"previousSibling"]
return r===t},$x=function(e,t,n,r,o){var i=e.dom,a=e.selection.getRng()
if(n!==e.getBody()){var u
Hx(u=n)&&Hx(u.parentNode)&&(o="LI")
var c=o?t(o):i.create("BR")
if(qx(n,r,!0)&&qx(n,r,!1))jx(n,"LI")?i.insertAfter(c,Vx(n)):i.replace(c,n)
else if(qx(n,r,!0))jx(n,"LI")?(i.insertAfter(c,Vx(n)),c.appendChild(i.doc.createTextNode(" ")),c.appendChild(n)):n.parentNode.insertBefore(c,n)
else if(qx(n,r,!1))i.insertAfter(c,Vx(n))
else{n=Vx(n)
var s=a.cloneRange()
s.setStartAfter(r),s.setEndAfter(n)
var f=s.extractContents()
"LI"===o&&function(e,t){return e.firstChild&&e.firstChild.nodeName===t}(f,"LI")?(c=f.firstChild,i.insertAfter(f,n)):(i.insertAfter(f,n),i.insertAfter(c,n))}i.remove(r),Ux(e,c)}},Wx=function(e,t){return t&&"A"===t.nodeName&&e.isEmpty(t)},Kx=function(e){e.innerHTML='<br data-mce-bogus="1">'},Xx=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},Yx=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},Gx=function(e,t,n){return!1===Tn(t)?n:e?1===n&&t.data.charAt(n-1)===Wr?0:n:n===t.data.length-1&&t.data.charAt(n)===Wr?t.data.length:n},Jx=function(e,t){var n,r,o=e.getRoot()
for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode
return n!==o?r:o},Qx=function(e,t){var n=Kc(e)
n&&n.toLowerCase()===t.tagName.toLowerCase()&&function(e,t,n){var r=e.dom
C.from(n.style).map(r.parseStyle).each((function(e){var n=Jn(xt.fromDom(t)),o=Se(Se({},n),e)
r.setStyles(t,o)}))
var o=C.from(n.class).map((function(e){return e.split(/\s+/)})),i=C.from(t.className).map((function(e){return V(e.split(/\s+/),(function(e){return""!==e}))}))
Vu(o,i,(function(e,n){var o=V(n,(function(t){return!F(e,t)})),i=Ne(e,o)
r.setAttrib(t,"class",i.join(" "))}))
var a=["style","class"],u=fe(n,(function(e,t){return!F(a,t)}))
r.setAttribs(t,u)}(e,t,Xc(e))},Zx=function(e,t){var n,r,o,i,a,u,c,s,f,l,d=e.dom,m=e.schema,p=m.getNonEmptyElements(),g=e.selection.getRng(),h=function(t){var n,o,a,u=r,c=m.getTextInlineElements()
if(a=n=t||"TABLE"===s||"HR"===s?d.create(t||f):i.cloneNode(!1),!1===function(e){return e.getParam("keep_styles",!0)}(e))d.setAttrib(n,"style",null),d.setAttrib(n,"class",null)
else do{if(c[u.nodeName]){if(Rf(u)||zf(u))continue
o=u.cloneNode(!1),d.setAttrib(o,"id",""),n.hasChildNodes()?(o.appendChild(n.firstChild),n.appendChild(o)):(a=o,n.appendChild(o))}}while((u=u.parentNode)&&u!==w)
return Qx(e,n),Kx(a),n},v=function(e){var t,n,a=Gx(e,r,o)
if(Tn(r)&&(e?a>0:a<r.nodeValue.length))return!1
if(r.parentNode===i&&l&&!e)return!0
if(e&&xn(r)&&r===i.firstChild)return!0
if(Xx(r,"TABLE")||Xx(r,"HR"))return l&&!e||!l&&e
var u=new Br(r,i)
for(Tn(r)&&(e&&0===a?u.prev():e||a!==r.nodeValue.length||u.next());t=u.current();){if(xn(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),p[n]&&"br"!==n))return!1}else if(Tn(t)&&!Co(t.nodeValue))return!1
e?u.prev():u.next()}return!0},y=function(){a=/^(H[1-6]|PRE|FIGURE)$/.test(s)&&"HGROUP"!==x?h(f):h(),function(e){return e.getParam("end_container_on_empty_block",!1)}(e)&&Yx(d,c)&&d.isEmpty(i)?a=d.split(c,i):d.insertAfter(a,i),Ux(e,a)}
id(d,g).each((function(e){g.setStart(e.startContainer,e.startOffset),g.setEnd(e.endContainer,e.endOffset)})),r=g.startContainer,o=g.startOffset,f=Kc(e)
var b=!(!t||!t.shiftKey),C=!(!t||!t.ctrlKey)
xn(r)&&r.hasChildNodes()&&(l=o>r.childNodes.length-1,r=r.childNodes[Math.min(o,r.childNodes.length-1)]||r,o=l&&Tn(r)?r.nodeValue.length:0)
var w=Jx(d,r)
if(w){(f&&!b||!f&&b)&&(r=function(e,t,n,r,o){var i,a,u,c,s,f,l=t||"P",d=e.dom,m=Jx(d,r)
if(!(a=d.getParent(r,d.isBlock))||!Yx(d,a)){if(f=(a=a||m)===e.getBody()||function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}(a)?a.nodeName.toLowerCase():a.parentNode.nodeName.toLowerCase(),!a.hasChildNodes())return i=d.create(l),Qx(e,i),a.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i
for(c=r;c.parentNode!==a;)c=c.parentNode
for(;c&&!d.isBlock(c);)u=c,c=c.previousSibling
if(u&&e.schema.isValidChild(f,l.toLowerCase())){for(i=d.create(l),Qx(e,i),u.parentNode.insertBefore(i,u),c=u;c&&!d.isBlock(c);)s=c.nextSibling,i.appendChild(c),c=s
n.setStart(r,o),n.setEnd(r,o)}}return r}(e,f,g,r,o)),i=d.getParent(r,d.isBlock),c=i?d.getParent(i.parentNode,d.isBlock):null,s=i?i.nodeName.toUpperCase():""
var x=c?c.nodeName.toUpperCase():""
"LI"!==x||C||(i=c,c=c.parentNode,s=x),/^(LI|DT|DD)$/.test(s)&&d.isEmpty(i)?$x(e,h,c,i,f):f&&i===e.getBody()||(f=f||"P",Jr(i)?(a=ao(i),d.isEmpty(i)&&Kx(i),Qx(e,a),Ux(e,a)):v()?y():v(!0)?(a=i.parentNode.insertBefore(h(),i),Ux(e,Xx(i,"HR")?a:i)):((n=function(e){var t=e.cloneRange()
return t.setStart(e.startContainer,Gx(!0,e.startContainer,e.startOffset)),t.setEnd(e.endContainer,Gx(!1,e.endContainer,e.endOffset)),t}(g).cloneRange()).setEndAfter(i),function(e){j(ku(xt.fromDom(e),Bt),(function(e){var t=e.dom
t.nodeValue=Xr(t.nodeValue)}))}(u=n.extractContents()),function(e){do{Tn(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild}while(e)}(u),a=u.firstChild,d.insertAfter(u,i),function(e,t,n){var r,o=n,i=[]
if(o){for(;o=o.firstChild;){if(e.isBlock(o))return
xn(o)&&!t[o.nodeName.toLowerCase()]&&i.push(o)}for(r=i.length;r--;)(!(o=i[r]).hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue||Wx(e,o))&&e.remove(o)}}(d,p,a),function(e,t){t.normalize()
var n=t.lastChild
n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")}(d,i),d.isEmpty(i)&&Kx(i),a.normalize(),d.isEmpty(a)?(d.remove(a),y()):(Qx(e,a),Ux(e,a))),d.setAttrib(a,"id",""),e.fire("NewBlock",{newBlock:a}))}},eS=function(e,t,n){var r=e.create("span",{},"&nbsp;")
n.parentNode.insertBefore(r,n),t.scrollIntoView(r),e.remove(r)},tS=function(e,t,n,r){var o=e.createRng()
r?(o.setStartBefore(n),o.setEndBefore(n)):(o.setStartAfter(n),o.setEndAfter(n)),t.setRng(o)},nS=function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng()
id(i,a).each((function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)}))
var u=a.startOffset,c=a.startContainer
if(1===c.nodeType&&c.hasChildNodes()){var s=u>c.childNodes.length-1
c=c.childNodes[Math.min(u,c.childNodes.length-1)]||c,u=s&&3===c.nodeType?c.nodeValue.length:0}var f=i.getParent(c,i.isBlock),l=f?i.getParent(f.parentNode,i.isBlock):null,d=l?l.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey)
"LI"!==d||m||(f=l),c&&3===c.nodeType&&u>=c.nodeValue.length&&(function(e,t,n){for(var r,o=new Br(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||r.length>0)return!0}(e.schema,c,f)||(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0)),n=i.create("br"),Sc(i,a,n),eS(i,o,n),tS(i,o,n,r),e.undoManager.add()},rS=function(e,t){var n=xt.fromTag("br")
tn(xt.fromDom(t),n),e.undoManager.add()},oS=function(e,t){iS(e.getBody(),t)||nn(xt.fromDom(t),xt.fromTag("br"))
var n=xt.fromTag("br")
nn(xt.fromDom(t),n),eS(e.dom,e.selection,n.dom),tS(e.dom,e.selection,n.dom,!1),e.undoManager.add()},iS=function(e,t){return n=wc.after(t),!!Pn(n.getNode())||Nf(e,wc.after(t)).map((function(e){return Pn(e.getNode())})).getOr(!1)
var n},aS=function(e){return e&&"A"===e.nodeName&&"href"in e},uS=function(e){return e.fold(g,aS,aS,g)},cS=function(e,t){t.fold(u,l(rS,e),l(oS,e),u)},sS=function(e,t){var n=function(e){var t=l(hb,e),n=wc.fromRangeStart(e.selection.getRng())
return _C(t,e.getBody(),n).filter(uS)}(e)
n.isSome()?n.each(l(cS,e)):nS(e,t)},fS=function(e,t){return zx(e).filter((function(e){return t.length>0&&Nt(xt.fromDom(e),t)})).isSome()},lS=pr([{br:[]},{block:[]},{none:[]}]),dS=function(e,t){return function(e){return fS(e,function(e){return e.getParam("no_newline_selector","")}(e))}(e)},mS=function(e){return function(t,n){return""===Kc(t)===e}},pS=function(e){return function(t,n){return function(e){return zx(e).filter((function(e){return jr(xt.fromDom(e))})).isSome()}(t)===e}},gS=function(e,t){return function(n,r){return function(e){return zx(e).fold(s(""),(function(e){return e.nodeName.toUpperCase()}))}(n)===e.toUpperCase()===t}},hS=function(e){return gS("pre",e)},vS=function(e){return function(t,n){return function(e){return e.getParam("br_in_pre",!0)}(t)===e}},yS=function(e,t){return function(e){return fS(e,function(e){return e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption")}(e))}(e)},bS=function(e,t){return t},CS=function(e){var t=Kc(e),n=function(e,t){var n,r,o=e.getRoot()
for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode
return n!==o?r:o}(e.dom,e.selection.getStart())
return n&&e.schema.isValidChild(n.nodeName,t||"P")},wS=function(e,t){return function(n,r){return $(e,(function(e,t){return e&&t(n,r)}),!0)?C.some(t):C.none()}},xS=function(e,t){(function(e,t){return vC([wS([dS],lS.none()),wS([gS("summary",!0)],lS.br()),wS([hS(!0),vS(!1),bS],lS.br()),wS([hS(!0),vS(!1)],lS.block()),wS([hS(!0),vS(!0),bS],lS.block()),wS([hS(!0),vS(!0)],lS.br()),wS([pS(!0),bS],lS.br()),wS([pS(!0)],lS.block()),wS([mS(!0),bS,CS],lS.block()),wS([mS(!0)],lS.br()),wS([yS],lS.br()),wS([mS(!1),bS],lS.br()),wS([CS],lS.block())],[e,!(!t||!t.shiftKey)]).getOr(lS.none())})(e,t).fold((function(){sS(e,t)}),(function(){Zx(e,t)}),u)},SS=function(e){e.on("keydown",(function(t){t.keyCode===$l.ENTER&&function(e,t){var n
t.isDefaultPrevented()||(t.preventDefault(),(n=e.undoManager).typing&&(n.typing=!1,n.add()),e.undoManager.transact((function(){!1===e.selection.isCollapsed()&&e.execCommand("Delete"),xS(e,t)})))}(e,t)}))},NS=function(e){e.on("keydown",(function(t){!1===t.isDefaultPrevented()&&function(e,t){yx([{keyCode:$l.END,action:vx(cx,e,!0)},{keyCode:$l.HOME,action:vx(cx,e,!1)},{keyCode:$l.END,action:vx(wx,e,!0)},{keyCode:$l.HOME,action:vx(wx,e,!1)}],t).each((function(e){t.preventDefault()}))}(e,t)}))},ES=at().browser,kS=function(e){(function(e){var t=vu((function(){e.composing||jp(e)}),0)
ES.isIE()&&(e.on("keypress",(function(e){t.throttle()})),e.on("remove",(function(e){t.cancel()})))})(e),e.on("input",(function(t){!1===t.isComposing&&jp(e)}))},_S=function(e,t){var n=t.container(),r=t.offset()
return Tn(n)?(n.insertData(r,e),C.some(bc(n,r+e.length))):ef(t).map((function(n){var r=xt.fromText(e)
return t.isAtEnd()?nn(n,r):tn(n,r),bc(r.dom,e.length)}))},AS=l(_S,$r),RS=l(_S," "),TS=function(e,t){return function(n){return function(e,t){return!Op(t)&&(Bp(e,t)||Tp(e,t)||Dp(e,t))}(e,n)?AS(t):RS(t)}},DS=function(e){var t=wc.fromRangeStart(e.selection.getRng()),n=xt.fromDom(e.getBody())
if(e.selection.isCollapsed()){var r=l(hb,e),o=wc.fromRangeStart(e.selection.getRng())
return _C(r,e.getBody(),o).bind(function(e){return function(t){return t.fold((function(t){return Ef(e.dom,wc.before(t))}),(function(e){return kf(e)}),(function(e){return _f(e)}),(function(t){return Nf(e.dom,wc.after(t))}))}}(n)).bind(TS(n,t)).exists(function(e){return function(t){return e.selection.setRng(t.toRange()),e.nodeChanged(),!0}}(e))}return!1},OS=function(e){e.on("keydown",(function(t){!1===t.isDefaultPrevented()&&function(e,t){yx([{keyCode:$l.SPACEBAR,action:vx(DS,e)}],t).each((function(e){t.preventDefault()}))}(e,t)}))},BS=function(e){var t=qC(e)
return function(e){e.on("keyup compositionstart",l(bw,e))}(e),Mx(e,t),Fx(e,t),SS(e),OS(e),kS(e),NS(e),t},PS=function(){function e(e){var t
this.lastPath=[],this.editor=e
var n=this
"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(function(n){var r=e.selection.getRng(),o={startContainer:r.startContainer,startOffset:r.startOffset,endContainer:r.endContainer,endOffset:r.endOffset}
"nodechange"!==n.type&&Gl(o,t)||e.fire("SelectionChange"),t=o})),e.on("contextmenu",(function(){e.fire("SelectionChange")})),e.on("SelectionChange",(function(){var t=e.selection.getStart(!0)
!t||!gt.range&&e.selection.isCollapsed()||Dl(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(function(t){!t.isDefaultPrevented()&&Dl(e)&&("IMG"===e.selection.getNode().nodeName?Ar.setEditorTimeout(e,(function(){e.nodeChanged()})):e.nodeChanged())}))}return e.prototype.nodeChanged=function(e){var t,n,r,o=this.editor.selection
this.editor.initialized&&o&&!this.editor.getParam("disable_nodechange")&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),(t=o.getStart(!0)||r).ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(t,r)||(t=r),n=[],this.editor.dom.getParent(t,(function(e){if(e===r)return!0
n.push(e)})),(e=e||{}).element=t,e.parents=n,this.editor.fire("NodeChange",e))},e.prototype.isSameElementPath=function(e){var t,n=this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)
if(n.length===this.lastPath.length){for(t=n.length;t>=0&&n[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=n,!0}return this.lastPath=n,!1},e}(),LS=function(e){(function(e){e.on("click",(function(t){e.dom.getParent(t.target,"details")&&t.preventDefault()}))})(e),function(e){e.parser.addNodeFilter("details",(function(e){j(e,(function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),e.serializer.addNodeFilter("details",(function(e){j(e,(function(e){var t=e.attr("data-mce-open")
e.attr("open",N(t)?t:null),e.attr("data-mce-open",null)}))}))}(e)},IS=function(e){return xn(e)&&Ur(xt.fromDom(e))},MS=function(e){e.on("click",(function(t){t.detail>=3&&function(e){var t=e.selection.getRng(),n=bc.fromRangeStart(t),r=bc.fromRangeEnd(t)
if(bc.isElementPosition(n)){var o=n.container()
IS(o)&&kf(o).each((function(e){return t.setStart(e.container(),e.offset())}))}bc.isElementPosition(r)&&(o=n.container(),IS(o)&&_f(o).each((function(e){return t.setEnd(e.container(),e.offset())})))
e.selection.setRng(Dg(t))}(e)}))},FS=function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView
return{top:t.top+o.pageYOffset-r.clientTop,left:t.left+o.pageXOffset-r.clientLeft}},US=function(e,t){return n=function(e){return e.inline?FS(e.getBody()):{left:0,top:0}}(e),r=function(e){var t=e.getBody()
return e.inline?{left:t.scrollLeft,top:t.scrollTop}:{left:0,top:0}}(e),{pageX:(o=function(e,t){if(t.target.ownerDocument!==e.getDoc()){var n=FS(e.getContentAreaContainer()),r=function(e){var t=e.getBody(),n=e.getDoc().documentElement,r={left:t.scrollLeft,top:t.scrollTop},o={left:t.scrollLeft||n.scrollLeft,top:t.scrollTop||n.scrollTop}
return e.inline?r:o}(e)
return{left:t.pageX-n.left+r.left,top:t.pageY-n.top+r.top}}return{left:t.pageX,top:t.pageY}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top}
var n,r,o},zS=Mn,jS=In,HS=function(e,t,n,r){var o=e.dom,i=t.cloneNode(!0)
o.setStyles(i,{width:n,height:r}),o.setAttrib(i,"data-mce-selected",null)
var a=o.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
return o.setStyles(a,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),o.setStyles(i,{margin:0,boxSizing:"border-box"}),a.appendChild(i),a},VS=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},qS=function(e,t){return function(n){if(function(e){return 0===e.button}(n)){var r=W(t.dom.getParents(n.target),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0
return!1}}(zS,jS)).getOr(null)
if(u=t.getBody(),zS(c=r)&&c!==u){var o=t.dom.getPos(r),i=t.getBody(),a=t.getDoc().documentElement
e.set({element:r,dragging:!1,screenX:n.screenX,screenY:n.screenY,maxX:(t.inline?i.scrollWidth:a.offsetWidth)-2,maxY:(t.inline?i.scrollHeight:a.offsetHeight)-2,relX:n.pageX-o.x,relY:n.pageY-o.y,width:r.offsetWidth,height:r.offsetHeight,ghost:HS(t,r,r.offsetWidth,r.offsetHeight)})}}var u,c}},$S=function(e,t){return function(n){e.on((function(e){if(e.dragging&&function(e,t,n){return t!==n&&!e.dom.isChildOf(t,n)&&!zS(t)}(t,(a=t.selection,3===(u=a.getSel().getRangeAt(0).startContainer).nodeType?u.parentNode:u),e.element)){var r=(o=e.element,(i=o.cloneNode(!0)).removeAttribute("data-mce-selected"),i)
t.fire("drop",{clientX:n.clientX,clientY:n.clientY}).isDefaultPrevented()||t.undoManager.transact((function(){VS(e.element),t.insertContent(t.dom.getOuterHTML(r)),t._selectionOverrides.hideFakeCaret()}))}var o,i,a,u})),WS(e)}},WS=function(e){e.on((function(e){VS(e.ghost)})),e.clear()},KS=function(e){var t,n=(t=fu(C.none()),{clear:function(){return t.set(C.none())},set:function(e){return t.set(C.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}}),r=iu.DOM,o=document,i=qS(n,e),a=function(e,t){var n=Ar.throttle((function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0)
return t.on("remove",n.stop),function(r){return e.on((function(e){var o,i,a=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY))
if(!e.dragging&&a>10){if(t.fire("dragstart",{target:e.element}).isDefaultPrevented())return
e.dragging=!0,t.focus()}if(e.dragging){var u=function(e,t){return{pageX:t.pageX-e.relX,pageY:t.pageY+5}}(e,US(t,r))
o=e.ghost,i=t.getBody(),o.parentNode!==i&&i.appendChild(o),function(e,t,n,r,o,i){var a=0,u=0
e.style.left=t.pageX+"px",e.style.top=t.pageY+"px",t.pageX+n>o&&(a=t.pageX+n-o),t.pageY+r>i&&(u=t.pageY+r-i),e.style.width=n-a+"px",e.style.height=r-u+"px"}(e.ghost,u,e.width,e.height,e.maxX,e.maxY),n(r.clientX,r.clientY)}}))}}(n,e),u=$S(n,e),c=function(e,t){return function(){e.on((function(e){e.dragging&&t.fire("dragend")})),WS(e)}}(n,e)
e.on("mousedown",i),e.on("mousemove",a),e.on("mouseup",u),r.bind(o,"mousemove",a),r.bind(o,"mouseup",c),e.on("remove",(function(){r.unbind(o,"mousemove",a),r.unbind(o,"mouseup",c)}))},XS=function(e){KS(e),function(e){e.on("drop",(function(t){var n=void 0!==t.clientX?e.getDoc().elementFromPoint(t.clientX,t.clientY):null;(zS(n)||"false"===e.dom.getContentEditableParent(n))&&t.preventDefault()}))}(e),function(e){return e.getParam("block_unsupported_drop",!0,"boolean")}(e)&&function(e){var t=function(t){if(!t.defaultPrevented){var n=t.dataTransfer
n&&(F(n.types,"Files")||n.files.length>0)&&(t.preventDefault(),"drop"===t.type&&$y(e,"Dropped file type is not supported"))}},n=function(n){em(e,n.target)&&t(n)},r=function(){var r=iu.DOM,o=e.dom,i=document,a=e.inline?e.getBody():e.getDoc(),u=["drop","dragover"]
j(u,(function(e){r.bind(i,e,n),o.bind(a,e,t)})),e.on("remove",(function(){j(u,(function(e){r.unbind(i,e,n),o.unbind(a,e,t)}))}))}
e.on("init",(function(){Ar.setEditorTimeout(e,r,0)}))}(e)},YS=In,GS=Mn,JS=function(e,t){return Vl(e.getBody(),t)},QS=function(e){var t,n=e.selection,r=e.dom,o=r.isBlock,i=e.getBody(),a=As(e,i,o,(function(){return um(e)})),u="sel-"+r.uniqueId(),c="data-mce-selected",s=function(e){return e!==i&&(GS(e)||Un(e))&&r.isChildOf(e,i)},f=function(e){e&&n.setRng(e)},l=n.getRng,d=function(t,r,o,i){return void 0===i&&(i=!0),e.fire("ShowCaret",{target:r,direction:t,before:o}).isDefaultPrevented()?null:(i&&n.scrollIntoView(r,-1===t),a.show(o,r))},m=function(e){return Zr(e)||oo(e)||io(e)},p=function(e){return m(e.startContainer)||m(e.endContainer)},g=function(t){var n=e.schema.getShortEndedElements(),o=r.createRng(),i=t.startContainer,a=t.startOffset,u=t.endContainer,c=t.endOffset
return me(n,i.nodeName.toLowerCase())?0===a?o.setStartBefore(i):o.setStartAfter(i):o.setStart(i,a),me(n,u.nodeName.toLowerCase())?0===c?o.setEndBefore(u):o.setEndAfter(u):o.setEnd(u,c),o},h=function(o){var i=o.cloneNode(!0),a=e.fire("ObjectSelected",{target:o,targetClone:i})
if(a.isDefaultPrevented())return null
var s=function(t,o,i){var a=e.$,c=xr(xt.fromDom(e.getBody()),"#"+u).fold((function(){return a([])}),(function(e){return a([e.dom])}))
0===c.length&&(c=a('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",u)).appendTo(e.getBody())
var s=r.createRng()
o===i&&gt.ie?(c.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(o),s.setStartAfter(c[0].firstChild.firstChild),s.setEndAfter(o)):(c.empty().append($r).append(o).append($r),s.setStart(c[0].firstChild,1),s.setEnd(c[0].lastChild,0)),c.css({top:r.getPos(t,e.getBody()).y}),c[0].focus()
var f=n.getSel()
return f.removeAllRanges(),f.addRange(s),s}(o,a.targetClone,i),f=xt.fromDom(o)
return j(_u(xt.fromDom(e.getBody()),"*[data-mce-selected]"),(function(e){kt(f,e)||Wn(e,c)})),r.getAttrib(o,c)||o.setAttribute(c,"1"),t=o,b(),s},v=function(e,t){if(!e)return null
if(e.collapsed){if(!p(e)){var n=t?1:-1,o=Zs(n,i,e),a=o.getNode(!t)
if(Ds(a))return d(n,a,!!t&&!o.isAtEnd(),!1)
var u=o.getNode(t)
if(Ds(u))return d(n,u,!t&&!o.isAtEnd(),!1)}return null}var c=e.startContainer,f=e.startOffset,l=e.endOffset
if(3===c.nodeType&&0===f&&GS(c.parentNode)&&(c=c.parentNode,f=r.nodeIndex(c),c=c.parentNode),1!==c.nodeType)return null
if(l===f+1&&c===e.endContainer){var m=c.childNodes[f]
if(s(m))return h(m)}return null},y=function(){t&&t.removeAttribute(c),xr(xt.fromDom(e.getBody()),"#"+u).each(cn),t=null},b=function(){a.hide()}
return gt.ceFalse&&function(){e.on("mouseup",(function(t){var n=l()
n.collapsed&&Fy(e,t.clientX,t.clientY)&&$b(e,n,!1).each(f)})),e.on("click",(function(t){var o=JS(e,t.target)
o&&(GS(o)&&(t.preventDefault(),e.focus()),YS(o)&&r.isChildOf(o,n.getNode())&&y())})),e.on("blur NewBlock",y),e.on("ResizeWindow FullscreenStateChanged",a.reposition)
var c=function(e){var t=gf(e)
if(!e.firstChild)return!1
var n,r=wc.before(e.firstChild),o=t.next(r)
return o&&!(ap(n=o)||up(n)||np(n)||rp(n))},m=function(t,n){var i,a,u=r.getParent(t,o),s=r.getParent(n,o)
return!(!u||t===s||!r.isChildOf(u,s)||!1!==GS(JS(e,u)))||u&&(i=u,a=s,!(r.getParent(i,o)===r.getParent(a,o)))&&c(u)}
e.on("tap",(function(t){var n=t.target,r=JS(e,n)
GS(r)?(t.preventDefault(),qb(e,r).each(v)):s(n)&&qb(e,n).each(v)}),!0),e.on("mousedown",(function(t){var o=t.target
if((o===i||"HTML"===o.nodeName||r.isChildOf(o,i))&&!1!==Fy(e,t.clientX,t.clientY)){var a=JS(e,o)
if(a)GS(a)?(t.preventDefault(),qb(e,a).each(v)):(y(),YS(a)&&t.shiftKey||ql(t.clientX,t.clientY,n.getRng())||(b(),n.placeCaretAt(t.clientX,t.clientY)))
else if(s(o))qb(e,o).each(v)
else if(!1===Ds(o)){y(),b()
var u=Yw(i,t.clientX,t.clientY)
if(u&&!m(o,u.node)){t.preventDefault()
var c=d(1,u.node,u.before,!1)
e.getBody().focus(),f(c)}}}})),e.on("keypress",(function(e){$l.modifierPressed(e)||GS(n.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(function(e){var n=e.range
if(t){if(!t.parentNode)return void(t=null);(n=n.cloneRange()).selectNode(t),e.range=n}})),e.on("SetSelectionRange",(function(e){e.range=g(e.range)
var t=v(e.range,e.forward)
t&&(e.range=t)})),e.on("AfterSetSelectionRange",(function(e){var t,n=e.range,o=n.startContainer.parentNode
p(n)||"mcepastebin"===o.id||b(),t=o,r.hasClass(t,"mce-offscreen-selection")||y()})),e.on("copy",(function(e){var t,n=e.clipboardData
if(!e.isDefaultPrevented()&&e.clipboardData&&!gt.ie){var o=(t=r.get(u))?t.getElementsByTagName("*")[0]:t
o&&(e.preventDefault(),n.clearData(),n.setData("text/html",o.outerHTML),n.setData("text/plain",o.outerText||o.innerText))}})),XS(e),function(e){var t=vu((function(){if(!e.removed&&e.getBody().contains(document.activeElement)){var t=e.selection.getRng()
if(t.collapsed){var n=Wb(e,t,!1)
e.selection.setRng(n)}}}),0)
e.on("focus",(function(){t.throttle()})),e.on("blur",(function(){t.cancel()}))}(e),function(e){e.on("init",(function(){e.on("focusin",(function(t){var n=t.target
if(Un(n)){var r=Vl(e.getBody(),n),o=Mn(r)?r:n
e.selection.getNode()!==o&&qb(e,o).each((function(t){return e.selection.setRng(t)}))}}))}))}(e)}(),{showCaret:d,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(ao(e),f(l()),n.scrollIntoView(e))},hideFakeCaret:b,destroy:function(){a.destroy(),t=null}}},ZS=function(e){var t,n,r,o=Ct.each,i=$l.BACKSPACE,a=$l.DELETE,u=e.dom,c=e.selection,s=e.parser,f=gt.gecko,l=gt.ie,d=gt.webkit,m="data:text/mce-internal,",p=l?"Text":"URL",g=function(t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}},h=function(e){return e.isDefaultPrevented()},v=function(){e.shortcuts.add("meta+a",null,"SelectAll")},y=function(){e.on("keydown",(function(e){if(!h(e)&&e.keyCode===i&&c.isCollapsed()&&0===c.getRng().startOffset){var t=c.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))},b=function(){e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(function(t){var n
if("HTML"===t.target.nodeName){if(gt.ie>11)return void e.getBody().focus()
n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged()}})))}
return e.on("keydown",(function(t){var n,r
if(!h(t)&&t.keyCode===$l.BACKSPACE){var o=(n=c.getRng()).startContainer,i=n.startOffset,a=u.getRoot()
if(r=o,n.collapsed&&0===i){for(;r&&r.parentNode&&r.parentNode.firstChild===r&&r.parentNode!==a;)r=r.parentNode
"BLOCKQUOTE"===r.tagName&&(e.formatter.toggle("blockquote",null,r),(n=u.createRng()).setStart(o,0),n.setEnd(o,0),c.setRng(n))}}})),t=function(e){var t=u.create("body"),n=e.cloneContents()
return t.appendChild(n),c.serializer.serialize(t,{format:"html"})},e.on("keydown",(function(n){var r,o,c=n.keyCode
if(!h(n)&&(c===a||c===i)){if(r=e.selection.isCollapsed(),o=e.getBody(),r&&!u.isEmpty(o))return
if(!r&&!function(n){var r=t(n),o=u.createRng()
return o.selectNode(e.getBody()),r===t(o)}(e.selection.getRng()))return
n.preventDefault(),e.setContent(""),o.firstChild&&u.isBlock(o.firstChild)?e.selection.setCursorLocation(o.firstChild,0):e.selection.setCursorLocation(o,0),e.nodeChanged()}})),gt.windowsPhone||e.on("keyup focusin mouseup",(function(e){$l.modifierPressed(e)||c.normalize()}),!0),d&&(e.inline||u.bind(e.getDoc(),"mousedown mouseup",(function(t){var n
if(t.target===e.getDoc().documentElement)if(n=c.getRng(),e.getBody().focus(),"mousedown"===t.type){if(Zr(n.startContainer))return
c.placeCaretAt(t.clientX,t.clientY)}else c.setRng(n)})),e.on("click",(function(t){var n=t.target;/^(IMG|HR)$/.test(n.nodeName)&&"false"!==u.getContentEditableParent(n)&&(t.preventDefault(),e.selection.select(n),e.nodeChanged()),"A"===n.nodeName&&u.hasClass(n,"mce-item-anchor")&&(t.preventDefault(),c.select(n))})),Kc(e)&&e.on("init",(function(){g("DefaultParagraphSeparator",Kc(e))})),e.on("init",(function(){e.dom.bind(e.getBody(),"submit",(function(e){e.preventDefault()}))})),y(),s.addNodeFilter("br",(function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),gt.iOS?(e.inline||e.on("keydown",(function(){document.activeElement===document.body&&e.getWin().focus()})),b(),e.on("click",(function(e){var t=e.target
do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):v()),gt.ie>=11&&(b(),y()),gt.ie&&(v(),g("AutoUrlDetect",!1),e.on("dragstart",(function(t){(function(t){var n,r
t.dataTransfer&&(e.selection.isCollapsed()&&"IMG"===t.target.tagName&&c.select(t.target),(n=e.selection.getContent()).length>0&&(r=m+escape(e.id)+","+escape(n),t.dataTransfer.setData(p,r)))})(t)})),e.on("drop",(function(t){if(!h(t)){var n=function(e){var t
return e.dataTransfer&&(t=e.dataTransfer.getData(p))&&t.indexOf(m)>=0?(t=t.substr(m.length).split(","),{id:unescape(t[0]),html:unescape(t[1])}):null}(t)
if(n&&n.id!==e.id){t.preventDefault()
var r=Yl(t.x,t.y,e.getDoc())
c.setRng(r),o=n.html,i=!0,e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",!1,{content:o,internal:i}):e.execCommand("mceInsertContent",!1,o)}}var o,i}))),f&&(e.on("keydown",(function(t){if(!h(t)&&t.keyCode===i){if(!e.getBody().getElementsByTagName("hr").length)return
if(c.isCollapsed()&&0===c.getRng().startOffset){var n=c.getNode(),r=n.previousSibling
if("HR"===n.nodeName)return u.remove(n),void t.preventDefault()
r&&r.nodeName&&"hr"===r.nodeName.toLowerCase()&&(u.remove(r),t.preventDefault())}}})),Range.prototype.getClientRects||e.on("mousedown",(function(t){if(!h(t)&&"HTML"===t.target.nodeName){var n=e.getBody()
n.blur(),Ar.setEditorTimeout(e,(function(){n.focus()}))}})),n=function(){var t=u.getAttribs(c.getStart().cloneNode(!1))
return function(){var n=c.getStart()
n!==e.getBody()&&(u.setAttrib(n,"style",null),o(t,(function(e){n.setAttributeNode(e.cloneNode(!0))})))}},r=function(){return!c.isCollapsed()&&u.getParent(c.getStart(),u.isBlock)!==u.getParent(c.getEnd(),u.isBlock)},e.on("keypress",(function(t){var o
if(!h(t)&&(8===t.keyCode||46===t.keyCode)&&r())return o=n(),e.getDoc().execCommand("delete",!1,null),o(),t.preventDefault(),!1})),u.bind(e.getDoc(),"cut",(function(t){var o
!h(t)&&r()&&(o=n(),Ar.setEditorTimeout(e,(function(){o()})))})),function(e){return e.getParam("readonly")}(e)||e.on("BeforeExecCommand mousedown",(function(){g("StyleWithCSS",!1),g("enableInlineTableEditing",!1),as(e)||g("enableObjectResizing",!1)})),e.on("SetContent ExecCommand",(function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(u.select("a"),(function(e){var t=e.parentNode,n=u.getRoot()
if(t.lastChild===e){for(;t&&!u.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return
t=t.parentNode}u.add(t,"br",{"data-mce-bogus":1})}}))})),e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),gt.mac&&e.on("keydown",(function(t){!$l.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))})),y()),{refreshContentEditable:function(){},isHidden:function(){if(!f||e.removed)return!1
var t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}}},eN=iu.DOM,tN=function(e){return e.inline?e.getElement().nodeName.toLowerCase():void 0},nN=function(e){return fe(e,(function(e){return!1===R(e)}))},rN=function(e){var t=e.settings,n=e.editorUpload.blobCache
return nN({allow_conditional_comments:t.allow_conditional_comments,allow_html_data_urls:t.allow_html_data_urls,allow_svg_data_urls:t.allow_svg_data_urls,allow_html_in_named_anchor:t.allow_html_in_named_anchor,allow_script_urls:t.allow_script_urls,allow_unsafe_link_target:t.allow_unsafe_link_target,convert_fonts_to_spans:t.convert_fonts_to_spans,fix_list_elements:t.fix_list_elements,font_size_legacy_values:t.font_size_legacy_values,forced_root_block:t.forced_root_block,forced_root_block_attrs:t.forced_root_block_attrs,padd_empty_with_br:t.padd_empty_with_br,preserve_cdata:t.preserve_cdata,remove_trailing_brs:t.remove_trailing_brs,inline_styles:t.inline_styles,root_name:tN(e),validate:!0,blob_cache:n,images_dataimg_filter:t.images_dataimg_filter})},oN=function(e){var t=e.dom.getRoot()
e.inline||Dl(e)&&e.selection.getStart(!0)!==t||kf(t).each((function(t){var n=t.getNode(),r=_n(n)?kf(n).getOr(t):t
gt.browser.isIE()?function(e,t){var n=xt.fromDom(e.getBody()),r=(qd(e)?C.from(t):C.none()).map($d).filter(Vd(n))
e.bookmark=r.isSome()?r:e.bookmark}(e,r.toRange()):e.selection.setRng(r.toRange())}))},iN=function(e){e.bindPendingEventDelegates(),e.initialized=!0,function(e){e.fire("Init")}(e),e.focus(!0),oN(e),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),function(e){e.settings.auto_focus&&Ar.setEditorTimeout(e,(function(){var t;(t=!0===e.settings.auto_focus?e:e.editorManager.get(e.settings.auto_focus)).destroyed||t.focus()}),100)}(e)},aN=function(e,t){var n=e.settings,r=e.getDoc(),o=e.getBody()
n.browser_spellcheck||n.gecko_spellcheck||(r.body.spellcheck=!1,eN.setAttrib(o,"spellcheck","false")),e.quirks=ZS(e),function(e){e.fire("PostRender")}(e)
var i=function(e){return e.getParam("directionality",pu.isRtl()?"rtl":void 0)}(e)
if(void 0!==i&&(o.dir=i),n.protect&&e.on("BeforeSetContent",(function(e){Ct.each(n.protect,(function(t){e.content=e.content.replace(t,(function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"}))}))})),e.on("SetContent",(function(){e.addVisual(e.getBody())})),!1===t&&e.load({initial:!0,format:"html"}),e.startContent=e.getContent({format:"raw"}),e.on("compositionstart compositionend",(function(t){e.composing="compositionstart"===t.type})),e.contentStyles.length>0){var a=""
Ct.each(e.contentStyles,(function(e){a+=e+"\r\n"})),e.dom.addStyle(a)}(function(e,t){var n=function(e){return e.inline?e.ui.styleSheetLoader:e.dom.styleSheetLoader}(e),r=function(){e.on("remove",(function(){return n.unloadAll(t)})),iN(e)}
n.loadAll(t,r,r)})(e,e.contentCSS),n.content_style&&function(e,t){var n=xt.fromDom(e.getBody()),r=Qt(Jt(n)),o=xt.fromTag("style")
Hn(o,"type","text/css"),on(o,xt.fromText(t)),on(r,o),e.on("remove",(function(){cn(o)}))}(e,n.content_style)},uN=function(e,t){var n=e.settings,r=e.getElement(),o=e.getDoc()
n.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline||(o.open(),o.write(e.iframeHTML),o.close()),e.inline&&(eN.addClass(r,"mce-content-body"),e.contentDocument=o=document,e.contentWindow=window,e.bodyElement=r,e.contentAreaContainer=r)
var i=e.getBody()
i.disabled=!0,e.readonly=!!n.readonly,e.readonly||(e.inline&&"static"===eN.getStyle(i,"position",!0)&&(i.style.position="relative"),i.contentEditable=e.getParam("content_editable_state",!0)),i.disabled=!1,e.editorUpload=eb(e),e.schema=ei(n),e.dom=iu(o,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,hex_colors:n.force_hex_style_colors,update_styles:!0,root_element:e.inline?e.getBody():null,collect:function(){return e.inline},schema:e.schema,contentCssCors:ns(e),referrerPolicy:rs(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}}),e.parser=function(e){var t=Zv(rN(e),e.schema)
return t.addAttributeFilter("src,href,style,tabindex",(function(t,n){for(var r,o,i=t.length,a=e.dom,u="data-mce-"+n;i--;)if((o=(r=t[i]).attr(n))&&!r.attr(u)){if(0===o.indexOf("data:")||0===o.indexOf("blob:"))continue
"style"===n?((o=a.serializeStyle(a.parseStyle(o),r.name)).length||(o=null),r.attr(u,o),r.attr(n,o)):"tabindex"===n?(r.attr(u,o),r.attr(n,null)):r.attr(u,e.convertURL(o,n,r.name))}})),t.addNodeFilter("script",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("type")||"no/type"
0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}})),e.settings.preserve_cdata&&t.addNodeFilter("#cdata",(function(t){for(var n=t.length;n--;){var r=t[n]
r.type=8,r.name="#comment",r.value="[CDATA["+e.dom.encode(r.value)+"]]"}})),t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(function(t){for(var n=t.length,r=e.schema.getNonEmptyElements();n--;){var o=t[n]
o.isEmpty(r)&&0===o.getAll("br").length&&(o.append(new Dm("br",1)).shortEnded=!0)}})),t}(e),e.serializer=oy(function(e){var t=e.settings
return Se(Se({},rN(e)),nN({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope,element_format:t.element_format,entities:t.entities,entity_encoding:t.entity_encoding,indent:t.indent,indent_after:t.indent_after,indent_before:t.indent_before,block_elements:t.block_elements,boolean_attributes:t.boolean_attributes,custom_elements:t.custom_elements,extended_valid_elements:t.extended_valid_elements,invalid_elements:t.invalid_elements,invalid_styles:t.invalid_styles,move_caret_before_on_enter_elements:t.move_caret_before_on_enter_elements,non_empty_elements:t.non_empty_elements,schema:t.schema,self_closing_elements:t.self_closing_elements,short_ended_elements:t.short_ended_elements,special:t.special,text_block_elements:t.text_block_elements,text_inline_elements:t.text_inline_elements,valid_children:t.valid_children,valid_classes:t.valid_classes,valid_elements:t.valid_elements,valid_styles:t.valid_styles,verify_html:t.verify_html,whitespace_elements:t.whitespace_elements}))}(e),e),e.selection=Bv(e.dom,e.getWin(),e.serializer,e),e.annotator=zl(e),e.formatter=cb(e),e.undoManager=sb(e),e._nodeChangeDispatcher=new PS(e),e._selectionOverrides=QS(e),mw(e),LS(e),Sv(e)||MS(e)
var a=function(e){return Sv(e)?fu(null):BS(e)}(e)
lw(e,a),function(e){Kc(e)&&e.on("NodeChange",l(vw,e))}(e),pb(e),function(e){e.fire("PreInit")}(e),function(e){var t=e
return de(e.plugins,"rtc").fold((function(){return t.rtcInstance=wv(e),C.none()}),(function(n){return C.some(n.setup().then((function(n){return t.rtcInstance=xv(e,n),n.isRemote})))}))}(e).fold((function(){aN(e,!1)}),(function(t){e.setProgressState(!0),t.then((function(t){e.setProgressState(!1),aN(e,t)}))}))},cN=iu.DOM,sN=function(e){var t=function(e){return e.getParam("doctype","<!DOCTYPE html>")}(e)+"<html><head>";(function(e){return e.getParam("document_base_url","")})(e)!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
var n=function(e){return $c(e,"body_id","tinymce")}(e),r=function(e){return $c(e,"body_class","")}(e)
return Wc(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+Wc(e)+'" />'),t+='</head><body id="'+n+'" class="mce-content-body '+r+'" data-id="'+e.id+'"><br></body></html>'},fN=function(e,t){var n=e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),r=function(e,t,n,r){var o=xt.fromTag("iframe")
return Vn(o,r),Vn(o,{id:e+"_ifr",frameBorder:"0",allowTransparency:"true",title:t}),Su(o,"tox-edit-area__iframe"),o}(e.id,n,t.height,function(e){return e.getParam("iframe_attrs",{})}(e)).dom
r.onload=function(){r.onload=null,e.fire("load")}
var o=function(e,t){if(document.domain!==window.location.hostname&&gt.browser.isIE()){var n=Zy("mce")
e[n]=function(){uN(e)}
var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()"
return cN.setAttrib(t,"src",r),!0}return!1}(e,r)
return e.contentAreaContainer=t.iframeContainer,e.iframeElement=r,e.iframeHTML=sN(e),cN.add(t.iframeContainer,r),o},lN=iu.DOM,dN=function(e,t,n){var r=jy.get(n),o=jy.urls[n]||e.documentBaseUrl.replace(/\/$/,"")
if(n=Ct.trim(n),r&&-1===Ct.inArray(t,n)){if(Ct.each(jy.dependencies(n),(function(n){dN(e,t,n)})),e.plugins[n])return
try{var i=new r(e,o,e.$)
e.plugins[n]=i,i.init&&(i.init(e,o),t.push(n))}catch(ck){(function(e,t,n){var r=pu.translate(["Failed to initialize plugin: {0}",t])
Yy(r,n),$y(e,r)})(e,n,ck)}}},mN=function(e){return e.replace(/^\-/,"")},pN=function(e){return{editorContainer:e,iframeContainer:e,api:{}}},gN=function(e){var t=e.getElement()
return e.inline?pN(null):function(e){var t=lN.create("div")
return lN.insertAfter(t,e),pN(t)}(t)},hN=function(e){var t=e.getElement()
return e.orgDisplay=t.style.display,N(cs(e))?function(e){return e.theme.renderUI()}(e):O(cs(e))?function(e){var t=e.getElement(),n=cs(e)(e,t)
return n.editorContainer.nodeType&&(n.editorContainer.id=n.editorContainer.id||e.id+"_parent"),n.iframeContainer&&n.iframeContainer.nodeType&&(n.iframeContainer.id=n.iframeContainer.id||e.id+"_iframecontainer"),n.height=n.iframeHeight?n.iframeHeight:t.offsetHeight,n}(e):gN(e)},vN=function(e){e.fire("ScriptsLoaded"),function(e){var t=Ct.trim(Jc(e)),n=e.ui.registry.getAll().icons,r=Se(Se({},Dy.get("default").icons),Dy.get(t).icons)
oe(r,(function(t,r){me(n,r)||e.ui.registry.addIcon(r,t)}))}(e),function(e){var t=cs(e)
if(N(t)){e.settings.theme=mN(t)
var n=Hy.get(t)
e.theme=new n(e,Hy.urls[t]),e.theme.init&&e.theme.init(e,Hy.urls[t]||e.documentBaseUrl.replace(/\/$/,""),e.$)}else e.theme={}}(e),function(e){var t=[]
Ct.each(ds(e).split(/[ ,]/),(function(n){dN(e,t,mN(n))}))}(e)
var t=hN(e);(function(e,t){var n={show:C.from(t.show).getOr(u),hide:C.from(t.hide).getOr(u),disable:C.from(t.disable).getOr(u),isDisabled:C.from(t.isDisabled).getOr(g),enable:function(){e.mode.isReadOnly()||C.from(t.enable).map(p)}}
e.ui=Se(Se({},e.ui),n)})(e,C.from(t.api).getOr({}))
var n={editorContainer:t.editorContainer,iframeContainer:t.iframeContainer}
return e.editorContainer=n.editorContainer?n.editorContainer:null,function(e){e.contentCSS=e.contentCSS.concat(Gy(e))}(e),e.inline?uN(e):function(e,t){var n=fN(e,t)
t.editorContainer&&(cN.get(t.editorContainer).style.display=e.orgDisplay,e.hidden=cN.isHidden(t.editorContainer)),e.getElement().style.display="none",cN.setAttrib(e.id,"aria-hidden","true"),n||uN(e)}(e,n)},yN=iu.DOM,bN=function(e){return"-"===e.charAt(0)},CN=function(e,t){var n=os(t),r=function(e){return e.getParam("language_url","","string")}(t)
if(!1===pu.hasCode(n)&&"en"!==n){var o=""!==r?r:t.editorManager.baseURL+"/langs/"+n+".js"
e.add(o,u,void 0,(function(){(function(e,t,n){Wy(e,"LanguageLoadError",Ky("language",t,n))})(t,o,n)}))}},wN=function(e,t,n){return C.from(t).filter((function(e){return e.length>0&&!Dy.has(e)})).map((function(t){return{url:e.editorManager.baseURL+"/icons/"+t+"/icons"+n+".js",name:C.some(t)}}))},xN=function(e,t,n){var r=wN(t,"default",n),o=function(e){return C.from(function(e){return e.getParam("icons_url","","string")}(e)).filter((function(e){return e.length>0})).map((function(e){return{url:e,name:C.none()}}))}(t).orThunk((function(){return wN(t,Jc(t),"")}))
j(function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n)
return t}([r,o]),(function(n){e.add(n.url,u,void 0,(function(){(function(e,t,n){Wy(e,"IconsLoadError",Ky("icons",t,n))})(t,n.url,n.name.getOrUndefined())}))}))},SN=function(e,t){var n=su.ScriptLoader;(function(e,t,n,r){var o=cs(t)
if(N(o)){if(!bN(o)&&!Hy.urls.hasOwnProperty(o)){var i=function(e){return e.getParam("theme_url")}(t)
i?Hy.load(o,t.documentBaseURI.toAbsolute(i)):Hy.load(o,"themes/"+o+"/theme"+n+".js")}e.loadQueue((function(){Hy.waitFor(o,r)}))}else r()})(n,e,t,(function(){CN(n,e),xN(n,e,t),function(e,t){Ct.each(function(e){return e.getParam("external_plugins")}(e),(function(t,n){jy.load(n,t,u,void 0,(function(){Xy(e,t,n)})),e.settings.plugins+=" "+n})),Ct.each(ds(e).split(/[ ,]/),(function(n){if((n=Ct.trim(n))&&!jy.urls[n])if(bN(n)){n=n.substr(1,n.length)
var r=jy.dependencies(n)
Ct.each(r,(function(n){var r={prefix:"plugins/",resource:n,suffix:"/plugin"+t+".js"},o=jy.createUrl(r,n)
jy.load(o.resource,o,u,void 0,(function(){Xy(e,o.prefix+o.resource+o.suffix,o.resource)}))}))}else{var o={prefix:"plugins/",resource:n,suffix:"/plugin"+t+".js"}
jy.load(n,o,u,void 0,(function(){Xy(e,o.prefix+o.resource+o.suffix,n)}))}}))}(e,t),n.loadQueue((function(){e.removed||vN(e)}),e,(function(){e.removed||vN(e)}))}))},NN=function(e){var t=e.id
pu.setCode(os(e))
var n=function(){yN.unbind(window,"ready",n),e.render()}
if(Ai.Event.domLoaded){if(e.getElement()&&gt.contentEditable){var r=xt.fromDom(e.getElement()),o=function(e){return $(e.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{})}(r)
e.on("remove",(function(){H(r.dom.attributes,(function(e){return Wn(r,e.name)})),Vn(r,o)})),e.ui.styleSheetLoader=function(e,t){return Or.forElement(e,{contentCssCors:ls(t),referrerPolicy:rs(t)})}(r,e),!function(e){return e.getParam("inline")}(e)?(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden"):e.inline=!0
var i=e.getElement().form||yN.getParent(t,"form")
i&&(e.formElement=i,function(e){return e.getParam("hidden_input")}(e)&&!Rn(e.getElement())&&(yN.insertAfter(yN.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=function(t){e.fire(t.type,t)},yN.bind(i,"submit reset",e.formEventDelegate),e.on("reset",(function(){e.resetContent()})),!function(e){return e.getParam("submit_patch")}(e)||i.submit.nodeType||i.submit.length||i._mceOldSubmit||(i._mceOldSubmit=i.submit,i.submit=function(){return e.editorManager.triggerSave(),e.setDirty(!1),i._mceOldSubmit(i)})),e.windowManager=Vy(e),e.notificationManager=zy(e),function(e){return"xml"===e.getParam("encoding")}(e)&&e.on("GetContent",(function(e){e.save&&(e.content=yN.encode(e.content))})),function(e){return e.getParam("add_form_submit_trigger")}(e)&&e.on("submit",(function(){e.initialized&&e.save()})),function(e){return e.getParam("add_unload_trigger")}(e)&&(e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),SN(e,e.suffix)}}else yN.bind(window,"ready",n)},EN=function(e,t){return function(e,t){return Ev(e).editor.addVisual(t)}(e,t)},kN={"font-size":"size","font-family":"face"},_N=function(e,t,n){return vm(xt.fromDom(n),(function(t){return function(t){return Gn(t,e).orThunk((function(){return"font"===Rt(t)?de(kN,e).bind((function(e){return $n(t,e)})):C.none()}))}(t)}),(function(e){return kt(xt.fromDom(t),e)}))},AN=function(e){return function(t,n){return C.from(n).map(xt.fromDom).filter(Ot).bind((function(n){return _N(e,t,n.dom).or(function(e,t){return C.from(iu.DOM.getStyle(t,e,!0))}(e,n.dom))})).getOr("")}},RN=AN("font-size"),TN=c((function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}),AN("font-family")),DN=function(e){return kf(e.getBody()).map((function(e){var t=e.container()
return Tn(t)?t.parentNode:t}))},ON=function(e,t){return function(e){return C.from(e.selection.getRng()).bind((function(t){var n=e.getBody()
return t.startContainer===n&&0===t.startOffset?C.none():C.from(e.selection.getStart(!0))}))}(e).orThunk(l(DN,e)).map(xt.fromDom).filter(Ot).map(t)},BN=function(e,t){if(/^[0-9.]+$/.test(t)){var n=parseInt(t,10)
if(n>=1&&n<=7){var r=function(e){return Ct.explode(e.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large"))}(e),o=function(e){return Ct.explode(e.getParam("font_size_classes",""))}(e)
return o?o[n-1]||t:r[n-1]||t}return t}return t},PN=function(e){var t=e.split(/\s*,\s*/)
return z(t,(function(e){return-1===e.indexOf(" ")||Oe(e,'"')||Oe(e,"'")?e:"'"+e+"'"})).join(",")},LN=function(e,t){var n=function(e){var t
return"string"!=typeof e?(t=Ct.extend({paste:e.paste,data:{paste:e.paste}},e),{content:e.content,details:t}):{content:e,details:{}}}(t);(function(e,t,n){Nv(e).editor.insertContent(t,n)})(e,n.content,n.details)},IN=Ct.each,MN=Ct.map,FN=Ct.inArray,UN=function(){function e(e){this.commands={state:{},exec:{},value:{}},this.editor=e,this.setupCommands(e)}return e.prototype.execCommand=function(e,t,n,r){var o,i=!1,a=this
if(!a.editor.removed){var u
if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus?(u=a.editor,Yd(u).each((function(e){return u.selection.setRng(e)}))):a.editor.focus(),(r=a.editor.fire("BeforeExecCommand",{command:e,ui:t,value:n})).isDefaultPrevented())return!1
var c=e.toLowerCase()
if(o=a.commands.exec[c])return o(c,t,n),a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
if(IN(this.editor.plugins,(function(r){if(r.execCommand&&r.execCommand(e,t,n))return a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),i=!0,!1})),i)return i
if(a.editor.theme&&a.editor.theme.execCommand&&a.editor.theme.execCommand(e,t,n))return a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
try{i=a.editor.getDoc().execCommand(e,t,n)}catch(s){}return!!i&&(a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0)}},e.prototype.queryCommandState=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.state[e])return t(e)
try{return this.editor.getDoc().queryCommandState(e)}catch(n){}return!1}},e.prototype.queryCommandValue=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.value[e])return t(e)
try{return this.editor.getDoc().queryCommandValue(e)}catch(n){}}},e.prototype.addCommands=function(e,t){void 0===t&&(t="exec")
var n=this
IN(e,(function(e,r){IN(r.toLowerCase().split(","),(function(r){n.commands[t][r]=e}))}))},e.prototype.addCommand=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.exec[e]=function(e,o,i,a){return t.call(n||r.editor,o,i,a)}},e.prototype.queryCommandSupported=function(e){if(e=e.toLowerCase(),this.commands.exec[e])return!0
try{return this.editor.getDoc().queryCommandSupported(e)}catch(t){}return!1},e.prototype.addQueryStateHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.state[e]=function(){return t.call(n||r.editor)}},e.prototype.addQueryValueHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.value[e]=function(){return t.call(n||r.editor)}},e.prototype.hasCustomCommand=function(e){return e=e.toLowerCase(),!!this.commands.exec[e]},e.prototype.execNativeCommand=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=null),this.editor.getDoc().execCommand(e,t,n)},e.prototype.isFormatMatch=function(e){return this.editor.formatter.match(e)},e.prototype.toggleFormat=function(e,t){this.editor.formatter.toggle(e,t?{value:t}:void 0),this.editor.nodeChanged()},e.prototype.storeSelection=function(e){this.selectionBookmark=this.editor.selection.getBookmark(e)},e.prototype.restoreSelection=function(){this.editor.selection.moveToBookmark(this.selectionBookmark)},e.prototype.setupCommands=function(e){var t=this
this.addCommands({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},"Cut,Copy,Paste":function(n){var r,o=e.getDoc()
try{t.execNativeCommand(n)}catch(a){r=!0}if("paste"!==n||o.queryCommandEnabled(n)||(r=!0),r||!o.queryCommandSupported(n)){var i=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")
gt.mac&&(i=i.replace(/Ctrl\+/g,"⌘+")),e.notificationManager.open({text:i,type:"error"})}},unlink:function(){if(e.selection.isCollapsed()){var t=e.dom.getParent(e.selection.getStart(),"a")
t&&e.dom.remove(t,!0)}else e.formatter.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(n){var r=n.substring(7)
"full"===r&&(r="justify"),IN("left,center,right,justify".split(","),(function(t){r!==t&&e.formatter.remove("align"+t)})),"none"!==r&&t.toggleFormat("align"+r)},"InsertUnorderedList,InsertOrderedList":function(n){var r
t.execNativeCommand(n)
var o=e.dom.getParent(e.selection.getNode(),"ol,ul")
o&&(r=o.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName)&&(t.storeSelection(),e.dom.split(r,o),t.restoreSelection()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){t.toggleFormat(e)},"ForeColor,HiliteColor":function(e,n,r){t.toggleFormat(e,r)},FontName:function(t,n,r){(function(e,t){var n=BN(e,t)
e.formatter.toggle("fontname",{value:PN(n)}),e.nodeChanged()})(e,r)},FontSize:function(t,n,r){(function(e,t){e.formatter.toggle("fontsize",{value:BN(e,t)}),e.nodeChanged()})(e,r)},LineHeight:function(t,n,r){(function(e,t){e.undoManager.transact((function(){e.formatter.toggle("lineheight",{value:String(t)}),e.nodeChanged()}))})(e,r)},RemoveFormat:function(t){e.formatter.remove(t)},mceBlockQuote:function(){t.toggleFormat("blockquote")},FormatBlock:function(e,n,r){return t.toggleFormat(r||"p")},mceCleanup:function(){var t=e.selection.getBookmark()
e.setContent(e.getContent()),e.selection.moveToBookmark(t)},mceRemoveNode:function(n,r,o){var i=o||e.selection.getNode()
i!==e.getBody()&&(t.storeSelection(),e.dom.remove(i,!0),t.restoreSelection())},mceSelectNodeDepth:function(t,n,r){var o=0
e.dom.getParent(e.selection.getNode(),(function(t){if(1===t.nodeType&&o++===r)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:function(t,n,r){e.selection.select(r)},mceInsertContent:function(t,n,r){LN(e,r)},mceInsertRawHTML:function(t,n,r){e.selection.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,(function(){return r})))},mceInsertNewLine:function(t,n,r){xS(e,r)},mceToggleFormat:function(e,n,r){t.toggleFormat(r)},mceSetContent:function(t,n,r){e.setContent(r)},"Indent,Outdent":function(t){cw(e,t)},mceRepaint:function(){},InsertHorizontalRule:function(){e.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual,e.addVisual()},mceReplaceContent:function(t,n,r){e.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceInsertLink:function(t,n,r){"string"==typeof r&&(r={href:r})
var o=e.dom.getParent(e.selection.getNode(),"a")
r.href=r.href.replace(/ /g,"%20"),o&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,o)},selectAll:function(){var t=e.dom.getParent(e.selection.getStart(),In)
if(t){var n=e.dom.createRng()
n.selectNodeContents(t),e.selection.setRng(n)}},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,n,r){return sS(e,r),!0}})
var n=function(t){return function(){var n=e.selection,r=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks(),o=MN(r,(function(n){return!!e.formatter.matchNode(n,t)}))
return-1!==FN(o,!0)}}
t.addCommands({JustifyLeft:n("alignleft"),JustifyCenter:n("aligncenter"),JustifyRight:n("alignright"),JustifyFull:n("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return t.isFormatMatch(e)},mceBlockQuote:function(){return t.isFormatMatch("blockquote")},Outdent:function(){return iw(e)},"InsertUnorderedList,InsertOrderedList":function(t){var n=e.dom.getParent(e.selection.getNode(),"ul,ol")
return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state"),t.addCommands({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}}),t.addQueryValueHandler("FontName",(function(){return function(e){return ON(e,(function(t){return TN(e.getBody(),t.dom)})).getOr("")}(e)}),this),t.addQueryValueHandler("FontSize",(function(){return function(e){return ON(e,(function(t){return RN(e.getBody(),t.dom)})).getOr("")}(e)}),this),t.addQueryValueHandler("LineHeight",(function(){return function(e){return ON(e,(function(t){var n=xt.fromDom(e.getBody())
return vm(t,(function(e){return Gn(e,"line-height")}),l(kt,n)).getOrThunk((function(){var e=parseFloat(Xn(t,"line-height")),n=parseFloat(Xn(t,"font-size"))
return String(e/n)}))})).getOr("")}(e)}),this)},e}(),zN="data-mce-contenteditable",jN=function(e,t,n){var r,o
Eu(e,t)&&!1===n?(o=t,Cu(r=e)?r.dom.classList.remove(o):xu(r,o),Nu(r)):n&&Su(e,t)},HN=function(e,t,n){try{e.getDoc().execCommand(t,!1,String(n))}catch(r){}},VN=function(e,t){e.dom.contentEditable=t?"true":"false"},qN=function(e,t){var n=xt.fromDom(e.getBody())
jN(n,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),function(e){C.from(e.selection.getNode()).each((function(e){e.removeAttribute("data-mce-selected")}))}(e),e.readonly=!0,VN(n,!1),j(_u(n,'*[contenteditable="true"]'),(function(e){Hn(e,zN,"true"),VN(e,!1)}))):(e.readonly=!1,VN(n,!0),function(e){j(_u(e,'*[data-mce-contenteditable="true"]'),(function(e){Wn(e,zN),VN(e,!0)}))}(n),HN(e,"StyleWithCSS",!1),HN(e,"enableInlineTableEditing",!1),HN(e,"enableObjectResizing",!1),cm(e)&&e.focus(),function(e){e.selection.setRng(e.selection.getRng())}(e),e.nodeChanged())},$N=function(e){return e.readonly},WN=function(e){e.parser.addAttributeFilter("contenteditable",(function(t){$N(e)&&j(t,(function(e){e.attr(zN,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(zN,(function(t){$N(e)&&j(t,(function(e){e.attr("contenteditable",e.attr(zN))}))})),e.serializer.addTempAttr(zN)},KN=function(e,t){if(function(e){return"click"===e.type}(t)&&!$l.metaKeyPressed(t)){var n=xt.fromDom(t.target);(function(e,t){return Sr(t,"a",(function(t){return kt(t,xt.fromDom(e.getBody()))})).bind((function(e){return $n(e,"href")}))})(e,n).each((function(n){if(t.preventDefault(),/^#/.test(n)){var r=e.dom.select(n+',[name="'+((Oe(o=n,i="#")?function(e,t){return e.substring(t)}(o,i.length):o)+'"]'))
r.length&&e.selection.scrollIntoView(r[0],!0)}else window.open(n,"_blank","rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")
var o,i}))}},XN=Ct.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," "),YN=function(){function e(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||g}return e.isNative=function(e){return!!XN[e.toLowerCase()]},e.prototype.fire=function(e,t){var n=e.toLowerCase(),r=t||{}
r.type=n,r.target||(r.target=this.scope),r.preventDefault||(r.preventDefault=function(){r.isDefaultPrevented=h},r.stopPropagation=function(){r.isPropagationStopped=h},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=h},r.isDefaultPrevented=g,r.isPropagationStopped=g,r.isImmediatePropagationStopped=g),this.settings.beforeFire&&this.settings.beforeFire(r)
var o=this.bindings[n]
if(o)for(var i=0,a=o.length;i<a;i++){var u=o[i]
if(u.once&&this.off(n,u.func),r.isImmediatePropagationStopped())return r.stopPropagation(),r
if(!1===u.func.call(this.scope,r))return r.preventDefault(),r}return r},e.prototype.on=function(e,t,n,r){if(!1===t&&(t=g),t){var o={func:t}
r&&Ct.extend(o,r)
for(var i=e.toLowerCase().split(" "),a=i.length;a--;){var u=i[a],c=this.bindings[u]
c||(c=this.bindings[u]=[],this.toggleEvent(u,!0)),n?c.unshift(o):c.push(o)}}return this},e.prototype.off=function(e,t){var n=this
if(e)for(var r=e.toLowerCase().split(" "),o=r.length;o--;){var i=r[o],a=this.bindings[i]
if(!i)return oe(this.bindings,(function(e,t){n.toggleEvent(t,!1),delete n.bindings[t]})),this
if(a){if(t)for(var u=a.length;u--;)a[u].func===t&&(a=a.slice(0,u).concat(a.slice(u+1)),this.bindings[i]=a)
else a.length=0
a.length||(this.toggleEvent(e,!1),delete this.bindings[i])}}else oe(this.bindings,(function(e,t){n.toggleEvent(t,!1)})),this.bindings={}
return this},e.prototype.once=function(e,t,n){return this.on(e,t,n,{once:!0})},e.prototype.has=function(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)},e}(),GN=function(e){return e._eventDispatcher||(e._eventDispatcher=new YN({scope:e,toggleEvent:function(t,n){YN.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher},JN={fire:function(e,t,n){var r=this
if(r.removed&&"remove"!==e&&"detach"!==e)return t
var o=GN(r).fire(e,t)
if(!1!==n&&r.parent)for(var i=r.parent();i&&!o.isPropagationStopped();)i.fire(e,o,!1),i=i.parent()
return o},on:function(e,t,n){return GN(this).on(e,t,n)},off:function(e,t){return GN(this).off(e,t)},once:function(e,t){return GN(this).once(e,t)},hasEventListeners:function(e){return GN(this).has(e)}},QN=iu.DOM,ZN=function(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
var n=us(e)
return n?(e.eventRoot||(e.eventRoot=QN.select(n)[0]),e.eventRoot):e.getBody()},eE=function(e,t,n){!function(e){return!e.hidden&&!$N(e)}(e)?$N(e)&&KN(e,n):e.fire(t,n)},tE=function(e,t){var n
if(e.delegates||(e.delegates={}),!e.delegates[t]&&!e.removed){var r=ZN(e,t)
if(us(e)){if(Pw||(Pw={},e.editorManager.on("removeEditor",(function(){e.editorManager.activeEditor||Pw&&(oe(Pw,(function(t,n){e.dom.unbind(ZN(e,n))})),Pw=null)}))),Pw[t])return
n=function(n){for(var r=n.target,o=e.editorManager.get(),i=o.length;i--;){var a=o[i].getBody();(a===r||QN.isChildOf(r,a))&&eE(o[i],t,n)}},Pw[t]=n,QN.bind(r,t,n)}else n=function(n){eE(e,t,n)},QN.bind(r,t,n),e.delegates[t]=n}},nE=Se(Se({},JN),{bindPendingEventDelegates:function(){var e=this
Ct.each(e._pendingNativeEvents,(function(t){tE(e,t)}))},toggleNativeEvent:function(e,t){var n=this
"focus"!==e&&"blur"!==e&&(t?n.initialized?tE(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(ZN(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t=e.getBody(),n=e.dom
e.delegates&&(oe(e.delegates,(function(t,n){e.dom.unbind(ZN(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}}),rE=["design","readonly"],oE=function(e,t,n,r){var o=n[t.get()],i=n[r]
try{i.activate()}catch(ck){return void console.error("problem while activating editor mode "+r+":",ck)}o.deactivate(),o.editorReadOnly!==i.editorReadOnly&&qN(e,i.editorReadOnly),t.set(r),function(e,t){e.fire("SwitchMode",{mode:t})}(e,r)},iE=function(e){var t=fu("design"),n=fu({design:{activate:u,deactivate:u,editorReadOnly:!1},readonly:{activate:u,deactivate:u,editorReadOnly:!0}})
return function(e){e.serializer?WN(e):e.on("PreInit",(function(){WN(e)}))}(e),function(e){e.on("ShowCaret",(function(t){$N(e)&&t.preventDefault()})),e.on("ObjectSelected",(function(t){$N(e)&&t.preventDefault()}))}(e),{isReadOnly:function(){return $N(e)},set:function(r){return function(e,t,n,r){if(r!==n.get()){if(!me(t,r))throw new Error("Editor mode '"+r+"' is invalid")
e.initialized?oE(e,n,t,r):e.on("init",(function(){return oE(e,n,t,r)}))}}(e,n.get(),t,r)},get:function(){return t.get()},register:function(e,t){n.set(function(e,t,n){var r
if(F(rE,t))throw new Error("Cannot override default mode "+t)
return Se(Se({},e),((r={})[t]=Se(Se({},n),{deactivate:function(){try{n.deactivate()}catch(ck){console.error("problem while deactivating editor mode "+t+":",ck)}}}),r))}(n.get(),e,t))}}},aE=Ct.each,uE=Ct.explode,cE={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},sE=Ct.makeMap("alt,ctrl,shift,meta,access"),fE=function(){function e(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e
var t=this
e.on("keyup keypress keydown",(function(e){!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(aE(t.shortcuts,(function(n){if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}return e.prototype.add=function(e,t,n,r){var o=this,i=o.normalizeCommandFunc(n)
return aE(uE(Ct.trim(e)),(function(e){var n=o.createShortcut(e,t,i,r)
o.shortcuts[n.id]=n})),!0},e.prototype.remove=function(e){var t=this.createShortcut(e)
return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)},e.prototype.normalizeCommandFunc=function(e){var t=this,n=e
return"string"==typeof n?function(){t.editor.execCommand(n,!1,null)}:Ct.isArray(n)?function(){t.editor.execCommand(n[0],n[1],n[2])}:n},e.prototype.parseShortcut=function(e){var t,n={}
aE(uE(e.toLowerCase(),"+"),(function(e){e in sE?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=cE[e]||e.toUpperCase().charCodeAt(0))}))
var r=[n.keyCode]
for(t in sE)n[t]?r.push(t):n[t]=!1
return n.id=r.join(","),n.access&&(n.alt=!0,gt.mac?n.ctrl=!0:n.shift=!0),n.meta&&(gt.mac?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n},e.prototype.createShortcut=function(e,t,n,r){var o=Ct.map(uE(e,">"),this.parseShortcut)
return o[o.length-1]=Ct.extend(o[o.length-1],{func:n,scope:r||this.editor}),Ct.extend(o[0],{desc:this.editor.translate(t),subpatterns:o.slice(1)})},e.prototype.hasModifier=function(e){return e.altKey||e.ctrlKey||e.metaKey},e.prototype.isFunctionKey=function(e){return"keydown"===e.type&&e.keyCode>=112&&e.keyCode<=123},e.prototype.matchShortcut=function(e,t){return!!t&&(t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&(t.alt===e.altKey&&t.shift===e.shiftKey&&(!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0))))},e.prototype.executeShortcutAction=function(e){return e.func?e.func.call(e.scope):null},e}(),lE=function(){var e=function(){var e={},t={},n={},r={},o={},i={},a={},u=function(e,t){return function(n,r){return e[n.toLowerCase()]=Se(Se({},r),{type:t})}}
return{addButton:u(e,"button"),addGroupToolbarButton:u(e,"grouptoolbarbutton"),addToggleButton:u(e,"togglebutton"),addMenuButton:u(e,"menubutton"),addSplitButton:u(e,"splitbutton"),addMenuItem:u(t,"menuitem"),addNestedMenuItem:u(t,"nestedmenuitem"),addToggleMenuItem:u(t,"togglemenuitem"),addAutocompleter:u(n,"autocompleter"),addContextMenu:u(o,"contextmenu"),addContextToolbar:u(i,"contexttoolbar"),addContextForm:u(i,"contextform"),addSidebar:u(a,"sidebar"),addIcon:function(e,t){return r[e.toLowerCase()]=t},getAll:function(){return{buttons:e,menuItems:t,icons:r,popups:n,contextMenus:o,contextToolbars:i,sidebars:a}}}}()
return{addAutocompleter:e.addAutocompleter,addButton:e.addButton,addContextForm:e.addContextForm,addContextMenu:e.addContextMenu,addContextToolbar:e.addContextToolbar,addIcon:e.addIcon,addMenuButton:e.addMenuButton,addMenuItem:e.addMenuItem,addNestedMenuItem:e.addNestedMenuItem,addSidebar:e.addSidebar,addSplitButton:e.addSplitButton,addToggleButton:e.addToggleButton,addGroupToolbarButton:e.addGroupToolbarButton,addToggleMenuItem:e.addToggleMenuItem,getAll:e.getAll}},dE=Ct.each,mE=Ct.trim,pE="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),gE={ftp:21,http:80,https:443,mailto:25},hE=function(){function e(t,n){t=mE(t),this.settings=n||{}
var r=this.settings.base_uri,o=this
if(/^([\w\-]+):([^\/]{2})/i.test(t)||/^\s*#/.test(t))o.source=t
else{var i=0===t.indexOf("//")
if(0!==t.indexOf("/")||i||(t=(r&&r.protocol||"http")+"://mce_host"+t),!/^[\w\-]*:?\/\//.test(t)){var a=this.settings.base_uri?this.settings.base_uri.path:new e(document.location.href).directory
if(this.settings.base_uri&&""==this.settings.base_uri.protocol)t="//mce_host"+o.toAbsPath(a,t)
else{var u=/([^#?]*)([#?]?.*)/.exec(t)
t=(r&&r.protocol||"http")+"://mce_host"+o.toAbsPath(a,u[1])+u[2]}}t=t.replace(/@@/g,"(mce_at)")
var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(t)
dE(pE,(function(e,t){var n=c[t]
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
var t=gE[this.protocol]
if(t&&(this.port||t)==(e.port||t))return!0}return!1},e.prototype.toRelPath=function(e,t){var n,r,o=0,i="",a=e.substring(0,e.lastIndexOf("/")).split("/"),u=t.split("/")
if(a.length>=u.length)for(n=0,r=a.length;n<r;n++)if(n>=u.length||a[n]!==u[n]){o=n+1
break}if(a.length<u.length)for(n=0,r=u.length;n<r;n++)if(n>=a.length||a[n]!==u[n]){o=n+1
break}if(1===o)return t
for(n=0,r=a.length-(o-1);n<r;n++)i+="../"
for(n=o-1,r=u.length;n<r;n++)i+=n!==o-1?"/"+u[n]:u[n]
return i},e.prototype.toAbsPath=function(e,t){var n,r,o=0,i=[],a=/\/$/.test(t)?"/":"",u=e.split("/"),c=t.split("/")
for(dE(u,(function(e){e&&i.push(e)})),u=i,n=c.length-1,i=[];n>=0;n--)0!==c[n].length&&"."!==c[n]&&(".."!==c[n]?o>0?o--:i.push(c[n]):o++)
return 0!==(r=(n=u.length-o)<=0?G(i).join("/"):u.slice(0,n).join("/")+"/"+G(i).join("/")).indexOf("/")&&(r="/"+r),a&&r.lastIndexOf("/")!==r.length-1&&(r+=a),r},e.prototype.getURI=function(e){var t
return void 0===e&&(e=!1),this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source},e}(),vE=iu.DOM,yE=Ct.extend,bE=Ct.each,CE=Ct.resolve,wE=gt.ie,xE=function(){function e(e,t,n){var r=this
this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,yE(this,nE),this.settings=Ay(this,e,this.documentBaseUrl,n.defaultSettings,t),this.settings.suffix&&(n.suffix=this.settings.suffix),this.suffix=n.suffix,this.settings.base_url&&n._setBaseUrl(this.settings.base_url),this.baseUri=n.baseURI,this.settings.referrer_policy&&(su.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),iu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),hu.languageLoad=this.settings.language_load,hu.baseURL=n.baseURL,this.id=e,this.setDirty(!1),this.documentBaseURI=new hE(this.settings.document_base_url,{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=!!this.settings.inline,this.shortcuts=new fE(this),this.editorCommands=new UN(this),this.settings.cache_suffix&&(gt.cacheSuffix=this.settings.cache_suffix.replace(/^[\?\&]+/,"")),this.ui={registry:lE(),styleSheetLoader:void 0,show:u,hide:u,enable:u,disable:u,isDisabled:g}
var o=iE(this)
this.mode=o,this.setMode=o.set,n.fire("SetupEditor",{editor:this}),this.execCallback("setup",this),this.$=Ja.overrideDefaults((function(){return{context:r.inline?r.getBody():r.getDoc(),element:r.getBody()}}))}return e.prototype.render=function(){NN(this)},e.prototype.focus=function(e){fm(this,e)},e.prototype.hasFocus=function(){return um(this)},e.prototype.execCallback=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r,o=this,i=o.settings[e]
if(i)return o.callbackLookup&&(r=o.callbackLookup[e])&&(i=r.func,r=r.scope),"string"==typeof i&&(r=(r=i.replace(/\.\w+$/,""))?CE(r):0,i=CE(i),o.callbackLookup=o.callbackLookup||{},o.callbackLookup[e]={func:i,scope:r}),i.apply(r||o,t)},e.prototype.translate=function(e){return pu.translate(e)},e.prototype.getParam=function(e,t,n){return Ty(this,e,t,n)},e.prototype.hasPlugin=function(e,t){return!!F(ds(this).split(/[ ,]/),e)&&(!t||void 0!==jy.get(e))},e.prototype.nodeChanged=function(e){this._nodeChangeDispatcher.nodeChanged(e)},e.prototype.addCommand=function(e,t,n){this.editorCommands.addCommand(e,t,n)},e.prototype.addQueryStateHandler=function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},e.prototype.addQueryValueHandler=function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},e.prototype.addShortcut=function(e,t,n,r){this.shortcuts.add(e,t,n,r)},e.prototype.execCommand=function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},e.prototype.queryCommandState=function(e){return this.editorCommands.queryCommandState(e)},e.prototype.queryCommandValue=function(e){return this.editorCommands.queryCommandValue(e)},e.prototype.queryCommandSupported=function(e){return this.editorCommands.queryCommandSupported(e)},e.prototype.show=function(){var e=this
e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable="true":(vE.show(e.getContainer()),vE.hide(e.id)),e.load(),e.fire("show"))},e.prototype.hide=function(){var e=this,t=e.getDoc()
e.hidden||(wE&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(vE.hide(e.getContainer()),vE.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},e.prototype.isHidden=function(){return!!this.hidden},e.prototype.setProgressState=function(e,t){this.fire("ProgressState",{state:e,time:t})},e.prototype.load=function(e){var t,n=this,r=n.getElement()
if(n.removed)return""
if(r){(e=e||{}).load=!0
var o=Rn(r)?r.value:r.innerHTML
return t=n.setContent(o,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,t}},e.prototype.save=function(e){var t,n,r=this,o=r.getElement()
if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,Rn(o)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=vE.getParent(r.id,"form"))&&bE(n.elements,(function(e){if(e.name===r.id)return e.value=t,!1}))),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},e.prototype.setContent=function(e,t){return ay(this,e,t)},e.prototype.getContent=function(e){return iy(this,e)},e.prototype.insertContent=function(e,t){t&&(e=yE({content:e},t)),this.execCommand("mceInsertContent",!1,e)},e.prototype.resetContent=function(e){void 0===e?ay(this,this.startContent,{format:"raw"}):ay(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()},e.prototype.isDirty=function(){return!this.isNotDirty},e.prototype.setDirty=function(e){var t=!this.isNotDirty
this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},e.prototype.getContainer=function(){var e=this
return e.container||(e.container=vE.get(e.editorContainer||e.id+"_parent")),e.container},e.prototype.getContentAreaContainer=function(){return this.contentAreaContainer},e.prototype.getElement=function(){return this.targetElm||(this.targetElm=vE.get(this.id)),this.targetElm},e.prototype.getWin=function(){var e,t=this
return t.contentWindow||(e=t.iframeElement)&&(t.contentWindow=e.contentWindow),t.contentWindow},e.prototype.getDoc=function(){var e,t=this
return t.contentDocument||(e=t.getWin())&&(t.contentDocument=e.document),t.contentDocument},e.prototype.getBody=function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},e.prototype.convertURL=function(e,t,n){var r=this,o=r.settings
return o.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!o.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:o.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,o.remove_script_host)},e.prototype.addVisual=function(e){EN(this,e)},e.prototype.remove=function(){sy(this)},e.prototype.destroy=function(e){fy(this,e)},e.prototype.uploadImages=function(e){return this.editorUpload.uploadImages(e)},e.prototype._scanForImages=function(){return this.editorUpload.scanForImages()},e.prototype.addButton=function(){throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")},e.prototype.addSidebar=function(){throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")},e.prototype.addMenuItem=function(){throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")},e.prototype.addContextToolbar=function(){throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")},e}(),SE=iu.DOM,NE=Ct.explode,EE=Ct.each,kE=Ct.extend,_E=0,AE=!1,RE=[],TE=[],DE=function(e){var t=e.type
EE(LE.get(),(function(n){switch(t){case"scroll":n.fire("ScrollWindow",e)
break
case"resize":n.fire("ResizeWindow",e)}}))},OE=function(e){e!==AE&&(e?Ja(window).on("resize scroll",DE):Ja(window).off("resize scroll",DE),AE=e)},BE=function(e){var t=TE
delete RE[e.id]
for(var n=0;n<RE.length;n++)if(RE[n]===e){RE.splice(n,1)
break}return TE=V(TE,(function(t){return e!==t})),LE.activeEditor===e&&(LE.activeEditor=TE.length>0?TE[0]:null),LE.focusedEditor===e&&(LE.focusedEditor=null),t.length!==TE.length},PE="CSS1Compat"!==document.compatMode,LE=Se(Se({},JN),{baseURI:null,baseURL:null,defaultSettings:{},documentBaseURL:null,suffix:null,$:Ja,majorVersion:"5",minorVersion:"6.0",releaseDate:"2020-11-18",editors:RE,i18n:pu,activeEditor:null,focusedEditor:null,settings:{},setup:function(){var e,t,n=this,r=""
t=hE.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/"))
var o,i=window.tinymce||window.tinyMCEPreInit
if(i)e=i.base||i.baseURL,r=i.suffix
else{for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var c
if(""!==(c=a[u].src||"")){var s=c.substring(c.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(c)){-1!==s.indexOf(".min")&&(r=".min"),e=c.substring(0,c.lastIndexOf("/"))
break}}}if(!e&&document.currentScript)-1!==(c=document.currentScript.src).indexOf(".min")&&(r=".min"),e=c.substring(0,c.lastIndexOf("/"))}n.baseURL=new hE(t).toAbsolute(e),n.documentBaseURL=t,n.baseURI=new hE(n.baseURL),n.suffix=r,(o=n).on("AddEditor",l(tm,o)),o.on("RemoveEditor",l(nm,o))},overrideDefaults:function(e){var t=e.base_url
t&&this._setBaseUrl(t)
var n=e.suffix
e.suffix&&(this.suffix=n),this.defaultSettings=e
var r=e.plugin_base_urls
void 0!==r&&oe(r,(function(e,t){hu.PluginManager.urls[t]=e}))},init:function(e){var t,n=this,r=Ct.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," "),o=function(e){var t=e.id
return t||(t=de(e,"name").filter((function(e){return!SE.get(e)})).getOrThunk(SE.uniqueId),e.setAttribute("id",t)),t},i=function(e,t){return t.constructor===RegExp?t.test(e.className):SE.hasClass(e,t)},a=function(e){t=e},u=function(){var t,c=0,s=[],f=function(e,r,o){var i=new xE(e,r,n)
s.push(i),i.on("init",(function(){++c===t.length&&a(s)})),i.targetElm=i.targetElm||o,i.render()}
SE.unbind(window,"ready",u),function(t){var r=e[t]
if(r)r.apply(n,Array.prototype.slice.call(arguments,2))}("onpageload"),t=Ja.unique(function(e){var t=[]
if(gt.browser.isIE()&&gt.browser.version.major<11)return Yy("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[]
if(PE)return Yy("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]
if(e.types)return EE(e.types,(function(e){t=t.concat(SE.select(e.selector))})),t
if(e.selector)return SE.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":var n=e.elements||""
n.length>0&&EE(NE(n),(function(e){var n=SE.get(e)
n?t.push(n):EE(document.forms,(function(n){EE(n.elements,(function(n){n.name===e&&(e="mce_editor_"+_E++,SE.setAttrib(n,"id",e),t.push(n))}))}))}))
break
case"textareas":case"specific_textareas":EE(SE.select("textarea"),(function(n){e.editor_deselector&&i(n,e.editor_deselector)||e.editor_selector&&!i(n,e.editor_selector)||t.push(n)}))}return t}(e)),e.types?EE(e.types,(function(n){Ct.each(t,(function(t){return!SE.is(t,n.selector)||(f(o(t),kE({},e,n),t),!1)}))})):(Ct.each(t,(function(e){var t;(t=n.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(BE(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)})),0===(t=Ct.grep(t,(function(e){return!n.get(e.id)}))).length?a([]):EE(t,(function(t){!function(e,t){return e.inline&&t.tagName.toLowerCase()in r}(e,t)?f(o(t),e,t):Yy("Could not initialize inline editor on invalid inline target element",t)})))}
return n.settings=e,SE.bind(window,"ready",u),new Nr((function(e){t?e(t):a=function(t){e(t)}}))},get:function(e){return 0===arguments.length?TE.slice(0):N(e)?W(TE,(function(t){return t.id===e})).getOr(null):B(e)&&TE[e]?TE[e]:null},add:function(e){var t=this
return RE[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(RE[e.id]=e),RE.push(e),TE.push(e)),OE(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),Lw||(Lw=function(e){var n=t.fire("BeforeUnload")
if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",Lw))),e},createEditor:function(e,t){return this.add(new xE(e,t,this))},remove:function(e){var t,n,r=this
if(e){if(!N(e))return n=e,_(r.get(n.id))?null:(BE(n)&&r.fire("RemoveEditor",{editor:n}),0===TE.length&&window.removeEventListener("beforeunload",Lw),n.remove(),OE(TE.length>0),n)
EE(SE.select(e),(function(e){(n=r.get(e.id))&&r.remove(n)}))}else for(t=TE.length-1;t>=0;t--)r.remove(TE[t])},execCommand:function(e,t,n){var r=this,o=r.get(n)
switch(e){case"mceAddEditor":return r.get(n)||new xE(n,r.settings,r).render(),!0
case"mceRemoveEditor":return o&&o.remove(),!0
case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(r.execCommand("mceAddEditor",0,n),!0)}return!!r.activeEditor&&r.activeEditor.execCommand(e,t,n)},triggerSave:function(){EE(TE,(function(e){e.save()}))},addI18n:function(e,t){pu.add(e,t)},translate:function(e){return pu.translate(e)},setActive:function(e){var t=this.activeEditor
this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl:function(e){this.baseURL=new hE(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new hE(this.baseURL)}})
LE.setup()
var IE,ME,FE,UE,zE=Math.min,jE=Math.max,HE=Math.round,VE=function(e,t,n){var r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,c=t.h,s=(n||"").split("")
return"b"===s[0]&&(o+=c),"r"===s[1]&&(r+=u),"c"===s[0]&&(o+=HE(c/2)),"c"===s[1]&&(r+=HE(u/2)),"b"===s[3]&&(o-=a),"r"===s[4]&&(r-=i),"c"===s[3]&&(o-=HE(a/2)),"c"===s[4]&&(r-=HE(i/2)),qE(r,o,i,a)},qE=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},$E={inflate:function(e,t,n){return qE(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:VE,findBestRelativePosition:function(e,t,n,r){var o,i
for(i=0;i<r.length;i++)if((o=VE(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i]
return null},intersect:function(e,t){var n=jE(e.x,t.x),r=jE(e.y,t.y),o=zE(e.x+e.w,t.x+t.w),i=zE(e.y+e.h,t.y+t.h)
return o-n<0||i-r<0?null:qE(n,r,o-n,i-r)},clamp:function(e,t,n){var r=e.x,o=e.y,i=e.x+e.w,a=e.y+e.h,u=t.x+t.w,c=t.y+t.h,s=jE(0,t.x-r),f=jE(0,t.y-o),l=jE(0,i-u),d=jE(0,a-c)
return r+=s,o+=f,n&&(i+=s,a+=f,r-=l,o-=d),qE(r,o,(i-=l)-r,(a-=d)-o)},create:qE,fromClientRect:function(e){return qE(e.left,e.top,e.width,e.height)}},WE=(IE={},ME={},{load:function(e,t){var n='Script at URL "'+t+'" failed to load',r='Script at URL "'+t+"\" did not call `tinymce.Resource.add('"+e+"', data)` within 1 second"
if(void 0!==IE[e])return IE[e]
var o=new Nr((function(o,i){var a=function(e,t,n){void 0===n&&(n=1e3)
var r=!1,o=null,i=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
r||(r=!0,null!==o&&(clearTimeout(o),o=null),e.apply(null,t))}},a=i(e),u=i(t)
return{start:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
r||null!==o||(o=setTimeout((function(){return u.apply(null,e)}),n))},resolve:a,reject:u}}(o,i)
ME[e]=a.resolve,su.ScriptLoader.loadScript(t,(function(){return a.start(r)}),(function(){return a.reject(n)}))}))
return IE[e]=o,o},add:function(e,t){void 0!==ME[e]&&(ME[e](t),delete ME[e]),IE[e]=Nr.resolve(t)}}),KE=Ct.each,XE=Ct.extend,YE=function(){}
YE.extend=FE=function(e){var t=this.prototype,n=function(){var e,t,n,r=this
if(!UE&&(r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(r,arguments)},r=function(){return this}
UE=!0
var o=new this
return UE=!1,e.Mixins&&(KE(e.Mixins,(function(t){for(var n in t)"init"!==n&&(e[n]=t[n])})),t.Mixins&&(e.Mixins=t.Mixins.concat(e.Mixins))),e.Methods&&KE(e.Methods.split(","),(function(t){e[t]=r})),e.Properties&&KE(e.Properties.split(","),(function(t){var n="_"+t
e[t]=function(e){var t=this
return void 0!==e?(t[n]=e,t):t[n]}})),e.Statics&&KE(e.Statics,(function(e,t){n[t]=e})),e.Defaults&&t.Defaults&&(e.Defaults=XE({},t.Defaults,e.Defaults)),oe(e,(function(e,n){"function"==typeof e&&t[n]?o[n]=function(e,n){return function(){var r=this,o=r._super
r._super=t[e]
var i=n.apply(r,arguments)
return r._super=o,i}}(n,e):o[n]=e})),n.prototype=o,n.constructor=n,n.extend=FE,n}
var GE,JE=Math.min,QE=Math.max,ZE=Math.round,ek={serialize:function(e){var t=JSON.stringify(e)
return N(t)?t.replace(/[\u0080-\uFFFF]/g,(function(e){var t=e.charCodeAt(0).toString(16)
return"\\u"+"0000".substring(t.length)+t})):t},parse:function(e){try{return JSON.parse(e)}catch(t){}}},tk={callbacks:{},count:0,send:function(e){var t=this,n=iu.DOM,r=void 0!==e.count?e.count:t.count,o="tinymce_jsonp_"+r
t.callbacks[r]=function(i){n.remove(o),delete t.callbacks[r],e.callback(i)},n.add(n.doc.body,"script",{id:o,src:e.url,type:"text/javascript"}),t.count++}},nk=Se(Se({},JN),{send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||n++>1e4?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,n>1e4?"TIMED_OUT":"GENERAL",t,e),t=null):Ar.setTimeout(r,10)}
if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",nk.fire("beforeInitialize",{settings:e}),(t=new XMLHttpRequest).overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&Ct.each(e.requestheaders,(function(e){t.setRequestHeader(e.key,e.value)})),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=nk.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r()
Ar.setTimeout(r,10)}}),rk=Ct.extend,ok=function(){function e(e){this.settings=rk({},e),this.count=0}return e.sendRPC=function(t){return(new e).send(t)},e.prototype.send=function(e){var t=e.error,n=e.success,r=rk(this.settings,e)
r.success=function(e,o){void 0===(e=ek.parse(e))&&(e={error:"JSON Parse error."}),e.error?t.call(r.error_scope||r.scope,e.error,o):n.call(r.success_scope||r.scope,e.result)},r.error=function(e,n){t&&t.call(r.error_scope||r.scope,e,n)},r.data=ek.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params}),r.content_type="application/json",nk.send(r)},e}()
try{var ik="__storage_test__";(GE=window.localStorage).setItem(ik,ik),GE.removeItem(ik)}catch(ck){GE=function(){var e={},t=[],n={getItem:function(t){return e[t]||null},setItem:function(n,r){t.push(n),e[n]=String(r)},key:function(e){return t[e]},removeItem:function(n){t=t.filter((function(e){return e===n})),delete e[n]},clear:function(){t=[],e={}},length:0}
return Object.defineProperty(n,"length",{get:function(){return t.length},configurable:!1,enumerable:!1}),n}()}var ak={geom:{Rect:$E},util:{Promise:Nr,Delay:Ar,Tools:Ct,VK:$l,URI:hE,Class:YE,EventDispatcher:YN,Observable:JN,I18n:pu,XHR:nk,JSON:ek,JSONRequest:ok,JSONP:tk,LocalStorage:GE,Color:function(e){var t={},n=0,r=0,o=0,i=function(e){var i
return"object"==typeof e?"r"in e?(n=e.r,r=e.g,o=e.b):"v"in e&&function(e,t,i){if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,i=parseInt(i,10)/100,t=QE(0,JE(t,1)),i=QE(0,JE(i,1)),0!==t){var a=e/60,u=i*t,c=u*(1-Math.abs(a%2-1)),s=i-u
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
default:n=r=o=0}n=ZE(255*(n+s)),r=ZE(255*(r+s)),o=ZE(255*(o+s))}else n=r=o=ZE(255*i)}(e.h,e.s,e.v):(i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(n=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10)):(i=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16)):(i=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(n=parseInt(i[1]+i[1],16),r=parseInt(i[2]+i[2],16),o=parseInt(i[3]+i[3],16)),n=n<0?0:n>255?255:n,r=r<0?0:r>255?255:r,o=o<0?0:o>255?255:o,t}
return e&&i(e),t.toRgb=function(){return{r:n,g:r,b:o}},t.toHsv=function(){return function(e,t,n){var r,o
o=0
var i=JE(e/=255,JE(t/=255,n/=255)),a=QE(e,QE(t,n))
return i===a?{h:0,s:0,v:100*(o=i)}:(r=(a-i)/a,o=a,{h:ZE(60*((e===i?3:n===i?1:5)-(e===i?t-n:n===i?e-t:n-e)/(a-i))),s:ZE(100*r),v:ZE(100*o)})}(n,r,o)},t.toHex=function(){var e=function(e){return(e=parseInt(e,10).toString(16)).length>1?e:"0"+e}
return"#"+e(n)+e(r)+e(o)},t.parse=i,t}},dom:{EventUtils:Ai,Sizzle:la,DomQuery:Ja,TreeWalker:Br,TextSeeker:Hu,DOMUtils:iu,ScriptLoader:su,RangeUtils:sd,Serializer:oy,StyleSheetLoader:Rr,ControlSelection:Kl,BookmarkManager:Hl,Selection:Bv,Event:Ai.Event},html:{Styles:bi,Entities:qo,Node:Dm,Schema:ei,SaxParser:jm,DomParser:Zv,Writer:Bm,Serializer:Pm},Env:gt,AddOnManager:hu,Annotator:zl,Formatter:cb,UndoManager:sb,EditorCommands:UN,WindowManager:Vy,NotificationManager:zy,EditorObservable:nE,Shortcuts:fE,Editor:xE,FocusManager:Gd,EditorManager:LE,DOM:iu.DOM,ScriptLoader:su.ScriptLoader,PluginManager:jy,ThemeManager:Hy,IconManager:Dy,Resource:WE,trim:Ct.trim,isArray:Ct.isArray,is:Ct.is,toArray:Ct.toArray,makeMap:Ct.makeMap,each:Ct.each,map:Ct.map,grep:Ct.grep,inArray:Ct.inArray,extend:Ct.extend,create:Ct.create,walk:Ct.walk,createNS:Ct.createNS,resolve:Ct.resolve,explode:Ct.explode,_addCacheSuffix:Ct._addCacheSuffix,isOpera:gt.opera,isWebKit:gt.webkit,isIE:gt.ie,isGecko:gt.gecko,isMac:gt.mac},uk=Ct.extend(LE,ak);(function(e){window.tinymce=e,window.tinyMCE=e})(uk),function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(uk)})()

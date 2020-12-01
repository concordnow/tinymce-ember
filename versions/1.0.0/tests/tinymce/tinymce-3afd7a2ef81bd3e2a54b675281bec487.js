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
return e.apply(null,o)}}var d=function(e){return function(t){return!e(t)}},m=function(e){return function(){throw new Error(e)}},p=s(!1),g=s(!0),h=function(){return v},v=function(){var e=function(e){return e.isNone()},t=function(e){return e()},n=function(e){return e}
return{fold:function(e,t){return e()},is:p,isSome:p,isNone:g,getOr:n,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:n,orThunk:t,map:h,each:u,bind:h,exists:p,forall:g,filter:h,equals:e,equals_:e,toArray:function(){return[]},toString:s("none()")}}(),y=function(e){var t=s(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:g,isNone:p,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return y(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:v},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(p,(function(t){return n(e,t)}))}}
return o},b={some:y,none:h,from:function(e){return null==e?v:y(e)}},C=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},w=function(e){return function(t){return typeof t===e}},x=function(e){return function(t){return e===t}},S=C("string"),N=C("object"),E=C("array"),k=x(null),_=w("boolean"),R=x(void 0),T=function(e){return!function(e){return null==e}(e)},A=w("function"),D=w("number"),O=Array.prototype.slice,B=Array.prototype.indexOf,P=Array.prototype.push,L=function(e,t){return B.call(e,t)},I=function(e,t){return L(e,t)>-1},M=function(e,t){for(var n=0,r=e.length;n<r;n++){if(t(e[n],n))return!0}return!1},F=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},U=function(e,t){for(var n=0,r=e.length;n<r;n++){t(e[n],n)}},z=function(e,t){for(var n=e.length-1;n>=0;n--){t(e[n],n)}},j=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n},H=function(e,t,n){return z(e,(function(e){n=t(n,e)})),n},V=function(e,t,n){return U(e,(function(e){n=t(n,e)})),n},q=function(e,t){return function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return b.some(i)
if(n(i,r))break}return b.none()}(e,t,p)},$=function(e,t){for(var n=0,r=e.length;n<r;n++){if(t(e[n],n))return b.some(n)}return b.none()},W=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!E(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
P.apply(t,e[n])}return t}(F(e,t))},K=function(e,t){for(var n=0,r=e.length;n<r;++n){if(!0!==t(e[n],n))return!1}return!0},X=function(e){var t=O.call(e,0)
return t.reverse(),t},Y=function(e,t){return j(e,(function(e){return!I(t,e)}))},G=function(e){return 0===e.length?b.none():b.some(e[0])},J=function(e){return 0===e.length?b.none():b.some(e[e.length-1])},Q=A(Array.from)?Array.from:function(e){return O.call(e)},Z=Object.keys,ee=Object.hasOwnProperty,te=function(e,t){for(var n=Z(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}},ne=function(e,t){return re(e,(function(e,n){return{k:n,v:t(e,n)}}))},re=function(e,t){var n={}
return te(e,(function(e,r){var o=t(e,r)
n[o.k]=o.v})),n},oe=function(e){return function(t,n){e[n]=t}},ie=function(e,t,n,r){return te(e,(function(e,o){(t(e,o)?n:r)(e,o)})),{}},ae=function(e,t){var n={},r={}
return ie(e,t,oe(n),oe(r)),{t:n,f:r}},ue=function(e,t){var n={}
return ie(e,t,oe(n),u),n},ce=function(e){return function(e,t){var n=[]
return te(e,(function(e,r){n.push(t(e,r))})),n}(e,(function(e){return e}))},se=function(e,t){return fe(e,t)?b.from(e[t]):b.none()},fe=function(e,t){return ee.call(e,t)},le=Array.isArray,de=function(e,t,n){var r,o
if(!e)return!1
if(n=n||e,void 0!==e.length){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return!1}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return!1
return!0},me=function(e,t){var n=[]
return de(e,(function(r,o){n.push(t(r,o,e))})),n},pe=function(e,t){var n=[]
return de(e,(function(r,o){t&&!t(r,o,e)||n.push(r)})),n},ge=function(e,t){if(e)for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},he=function(e,t,n,r){for(var o=R(n)?e[0]:n,i=0;i<e.length;i++)o=t.call(r,o,e[i],i)
return o},ve=function(e,t,n){var r,o
for(r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r
return-1},ye=function(e){return e[e.length-1]},be=function(){return(be=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function Ce(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),o=0
for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a]
return r}var we=function(){return xe(0,0)},xe=function(e,t){return{major:e,minor:t}},Se={nu:xe,detect:function(e,t){var n=String(t).toLowerCase()
return 0===e.length?we():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,t)
if(!n)return{major:0,minor:0}
var r=function(e){return Number(t.replace(n,"$"+e))}
return xe(r(1),r(2))}(e,n)},unknown:we},Ne=function(e,t){var n=String(t).toLowerCase()
return q(e,(function(e){return e.search(n)}))},Ee=function(e,t){return Ne(e,t).map((function(e){var n=Se.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))},ke=function(e,t){return Ne(e,t).map((function(e){var n=Se.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))},_e=function(e,t){return-1!==e.indexOf(t)},Re=function(e,t){return function(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t}(e,t,0)},Te=function(e){return function(t){return t.replace(e,"")}},Ae=Te(/^\s+|\s+$/g),De=Te(/^\s+/g),Oe=Te(/\s+$/g),Be=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Pe=function(e){return function(t){return _e(t,e)}},Le=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return _e(e,"edge/")&&_e(e,"chrome")&&_e(e,"safari")&&_e(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Be],search:function(e){return _e(e,"chrome")&&!_e(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return _e(e,"msie")||_e(e,"trident")}},{name:"Opera",versionRegexes:[Be,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Pe("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Pe("firefox")},{name:"Safari",versionRegexes:[Be,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(_e(e,"safari")||_e(e,"mobile/"))&&_e(e,"applewebkit")}}],Ie=[{name:"Windows",search:Pe("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return _e(e,"iphone")||_e(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Pe("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Pe("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Pe("linux"),versionRegexes:[]},{name:"Solaris",search:Pe("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Pe("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:Pe("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Me={browsers:s(Le),oses:s(Ie)},Fe="Edge",Ue="Chrome",ze="Opera",je="Firefox",He="Safari",Ve=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isEdge:r(Fe),isChrome:r(Ue),isIE:r("IE"),isOpera:r(ze),isFirefox:r(je),isSafari:r(He)}},qe={unknown:function(){return Ve({current:void 0,version:Se.unknown()})},nu:Ve,edge:s(Fe),chrome:s(Ue),ie:s("IE"),opera:s(ze),firefox:s(je),safari:s(He)},$e="Windows",We="Android",Ke="Linux",Xe="Solaris",Ye="FreeBSD",Ge="ChromeOS",Je=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isWindows:r($e),isiOS:r("iOS"),isAndroid:r(We),isOSX:r("OSX"),isLinux:r(Ke),isSolaris:r(Xe),isFreeBSD:r(Ye),isChromeOS:r(Ge)}},Qe={unknown:function(){return Je({current:void 0,version:Se.unknown()})},nu:Je,windows:s($e),ios:s("iOS"),android:s(We),linux:s(Ke),osx:s("OSX"),solaris:s(Xe),freebsd:s(Ye),chromeos:s(Ge)},Ze=function(e,t){var n=Me.browsers(),r=Me.oses(),o=Ee(n,e).fold(qe.unknown,qe.nu),i=ke(r,e).fold(Qe.unknown,Qe.nu),a=function(e,t,n,r){var o=e.isiOS()&&!0===/ipad/i.test(n),i=e.isiOS()&&!o,a=e.isiOS()||e.isAndroid(),u=a||r("(pointer:coarse)"),c=o||!i&&a&&r("(min-device-width:768px)"),f=i||a&&!c,l=t.isSafari()&&e.isiOS()&&!1===/safari/i.test(n),d=!f&&!c&&!l
return{isiPad:s(o),isiPhone:s(i),isTablet:s(c),isPhone:s(f),isTouch:s(u),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:s(l),isDesktop:s(d)}}(i,o,e,t)
return{browser:o,os:i,deviceType:a}},et=function(e){return window.matchMedia(e).matches},tt=function(e){var t,n=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return n||(n=!0,t=e.apply(null,r)),t}}((function(){return Ze(navigator.userAgent,et)})),nt=function(){return tt()},rt=navigator.userAgent,ot=nt(),it=ot.browser,at=ot.os,ut=ot.deviceType,ct=/WebKit/.test(rt)&&!it.isEdge(),st="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,ft=-1!==rt.indexOf("Windows Phone"),lt={opera:it.isOpera(),webkit:ct,ie:!(!it.isIE()&&!it.isEdge())&&it.version.major,gecko:it.isFirefox(),mac:at.isOSX()||at.isiOS(),iOS:ut.isiPad()||ut.isiPhone(),android:at.isAndroid(),contentEditable:!0,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:!0,range:window.getSelection&&"Range"in window,documentMode:it.isIE()?document.documentMode||7:10,fileApi:st,ceFalse:!0,cacheSuffix:null,container:null,experimentalShadowDom:!1,canHaveCSP:!it.isIE(),desktop:ut.isDesktop(),windowsPhone:ft,browser:{current:it.current,version:it.version,isChrome:it.isChrome,isEdge:it.isEdge,isFirefox:it.isFirefox,isIE:it.isIE,isOpera:it.isOpera,isSafari:it.isSafari},os:{current:at.current,version:at.version,isAndroid:at.isAndroid,isChromeOS:at.isChromeOS,isFreeBSD:at.isFreeBSD,isiOS:at.isiOS,isLinux:at.isLinux,isOSX:at.isOSX,isSolaris:at.isSolaris,isWindows:at.isWindows},deviceType:{isDesktop:ut.isDesktop,isiPad:ut.isiPad,isiPhone:ut.isiPhone,isPhone:ut.isPhone,isTablet:ut.isTablet,isTouch:ut.isTouch,isWebView:ut.isWebView}},dt=/^\s*|\s*$/g,mt=function(e){return null==e?"":(""+e).replace(dt,"")},pt=function(e,t){return t?!("array"!==t||!le(e))||typeof e===t:void 0!==e},gt=function(e,t,n,r){r=r||this,e&&(n&&(e=e[n]),de(e,(function(e,o){if(!1===t.call(r,e,o,n))return!1
gt(e,t,n,r)})))},ht={trim:mt,isArray:le,is:pt,toArray:function(e){if(le(e))return e
for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n]
return t},makeMap:function(e,t,n){var r
for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={}
return n},each:de,map:me,grep:pe,inArray:ge,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=0;r<t.length;r++){var o=t[r]
for(var i in o)if(o.hasOwnProperty(i)){var a=o[i]
void 0!==a&&(e[i]=a)}}return e},create:function(e,t,n){var r,o,i,a=this,u=0,c=(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],s=a.createNS(e[3].replace(/\.\w+$/,""),n)
if(!s[c]){if("static"===e[2])return s[c]=t,void(this.onCreate&&this.onCreate(e[2],e[3],s[c]))
t[c]||(t[c]=function(){},u=1),s[c]=t[c],a.extend(s[c].prototype,t),e[5]&&(r=a.resolve(e[5]).prototype,o=e[5].match(/\.(\w+)$/i)[1],i=s[c],s[c]=u?function(){return r[o].apply(this,arguments)}:function(){return this.parent=r[o],i.apply(this,arguments)},s[c].prototype[c]=s[c],a.each(r,(function(e,t){s[c].prototype[t]=r[t]})),a.each(t,(function(e,t){r[t]?s[c].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==c&&(s[c].prototype[t]=e)}))),a.each(t.static,(function(e,t){s[c][t]=e}))}},walk:gt,createNS:function(e,t){var n,r
for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r]
return t},resolve:function(e,t){var n,r
for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||pt(e,"array")?e:me(e.split(t||","),mt)},_addCacheSuffix:function(e){var t=lt.cacheSuffix
return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},vt=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},yt={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return vt(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e)
return vt(n)},fromText:function(e,t){var n=(t||document).createTextNode(e)
return vt(n)},fromDom:vt,fromPoint:function(e,t,n){return b.from(e.dom.elementFromPoint(t,n)).map(vt)}},bt=function(e,t){var n=[],r=function(e){return n.push(e),t(e)},o=t(e)
do{o=o.bind(r)}while(o.isSome())
return n},Ct=function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},wt=function(e){return 1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount},xt=function(e,t){return e.dom===t.dom},St=function(e,t){return n=e.dom,r=t.dom,function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)}(n,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var n,r},Nt=function(e,t){return nt().browser.isIE()?St(e,t):function(e,t){var n=e.dom,r=t.dom
return n!==r&&n.contains(r)}(e,t)},Et=("undefined"!=typeof window?window:Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),kt=function(e){return e.dom.nodeType},_t=function(e){return function(t){return kt(t)===e}},Rt=_t(1),Tt=_t(3),At=_t(9),Dt=_t(11),Ot=function(e){return yt.fromDom(e.dom.ownerDocument)},Bt=function(e){return At(e)?e:Ot(e)},Pt=function(e){return yt.fromDom(Bt(e).dom.defaultView)},Lt=function(e){return b.from(e.dom.parentNode).map(yt.fromDom)},It=function(e){return b.from(e.dom.previousSibling).map(yt.fromDom)},Mt=function(e){return b.from(e.dom.nextSibling).map(yt.fromDom)},Ft=function(e){return X(bt(e,It))},Ut=function(e){return bt(e,Mt)},zt=function(e){return F(e.dom.childNodes,yt.fromDom)},jt=function(e,t){var n=e.dom.childNodes
return b.from(n[t]).map(yt.fromDom)},Ht=function(e){return jt(e,0)},Vt=function(e){return jt(e,e.dom.childNodes.length-1)},qt=function(e){return Dt(e)},$t=A(Element.prototype.attachShadow)&&A(Node.prototype.getRootNode),Wt=s($t),Kt=$t?function(e){return yt.fromDom(e.dom.getRootNode())}:Bt,Xt=function(e){return qt(e)?e:function(e){var t=e.dom.head
if(null==t)throw new Error("Head is not available yet")
return yt.fromDom(t)}(Bt(e))},Yt=function(e){return yt.fromDom(e.dom.host)},Gt=function(e){return T(e.dom.shadowRoot)},Jt=function(e,t){Lt(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},Qt=function(e,t){Mt(e).fold((function(){Lt(e).each((function(e){en(e,t)}))}),(function(e){Jt(e,t)}))},Zt=function(e,t){Ht(e).fold((function(){en(e,t)}),(function(n){e.dom.insertBefore(t.dom,n.dom)}))},en=function(e,t){e.dom.appendChild(t.dom)},tn=function(e,t){U(t,(function(t){en(e,t)}))},nn=function(e){e.dom.textContent="",U(zt(e),(function(e){rn(e)}))},rn=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},on=function(e){var t,n=zt(e)
n.length>0&&(t=e,U(n,(function(e){Jt(t,e)}))),rn(e)},an=function(e){var t=Tt(e)?e.dom.parentNode:e.dom
if(null==t||null===t.ownerDocument)return!1
var n,r,o=t.ownerDocument
return function(e){var t=Kt(e)
return qt(t)?b.some(t):b.none()}(yt.fromDom(t)).fold((function(){return o.body.contains(t)}),(n=an,r=Yt,function(e){return n(r(e))}))},un=function(e,t){return{left:e,top:t,translate:function(n,r){return un(e+n,t+r)}}},cn=un,sn=function(e,t){return void 0!==e?e:void 0!==t?t:0},fn=function(e){var t=e.dom,n=t.ownerDocument.body
return n===t?cn(n.offsetLeft,n.offsetTop):an(e)?function(e){var t=e.getBoundingClientRect()
return cn(t.left,t.top)}(t):cn(0,0)},ln=function(e){var t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop
return cn(n,r)},dn=function(e,t,n){var r=(void 0!==n?n.dom:document).defaultView
r&&r.scrollTo(e,t)},mn=function(e,t){nt().browser.isSafari()&&A(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)},pn=function(e,t,n,r){return{x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}},gn=function(e){var t=void 0===e?window:e,n=t.document,r=ln(yt.fromDom(n))
return function(e){var t=void 0===e?window:e
return b.from(t.visualViewport)}(t).fold((function(){var e=t.document.documentElement,n=e.clientWidth,o=e.clientHeight
return pn(r.left,r.top,n,o)}),(function(e){return pn(Math.max(e.pageLeft,r.left),Math.max(e.pageTop,r.top),e.width,e.height)}))},hn=function(e){return function(t){return!!t&&t.nodeType===e}},vn=function(e){return!!e&&!Object.getPrototypeOf(e)},yn=hn(1),bn=function(e){var t=e.map((function(e){return e.toLowerCase()}))
return function(e){if(e&&e.nodeName){var n=e.nodeName.toLowerCase()
return I(t,n)}return!1}},Cn=function(e,t){var n=t.toLowerCase().split(" ")
return function(t){var r
if(yn(t))for(r=0;r<n.length;r++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
if((o?o.getPropertyValue(e):null)===n[r])return!0}return!1}},wn=function(e){return function(t){return yn(t)&&t.hasAttribute(e)}},xn=function(e){return yn(e)&&e.hasAttribute("data-mce-bogus")},Sn=function(e){return yn(e)&&"TABLE"===e.tagName},Nn=function(e){return function(t){if(yn(t)){if(t.contentEditable===e)return!0
if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}},En=bn(["textarea","input"]),kn=hn(3),_n=hn(8),Rn=hn(9),Tn=hn(11),An=bn(["br"]),Dn=bn(["img"]),On=Nn("true"),Bn=Nn("false"),Pn=bn(["td","th"]),Ln=bn(["video","audio","object","embed"]),In=function(e){return void 0!==e.style&&A(e.style.getPropertyValue)},Mn=function(e,t,n){if(!(S(n)||_(n)||D(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")},Fn=function(e,t,n){Mn(e.dom,t,n)},Un=function(e,t){var n=e.dom
te(t,(function(e,t){Mn(n,t,e)}))},zn=function(e,t){var n=e.dom.getAttribute(t)
return null===n?void 0:n},jn=function(e,t){e.dom.removeAttribute(t)},Hn=function(e,t){var n=e.dom
te(t,(function(e,t){(function(e,t,n){if(!S(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
In(e)&&e.style.setProperty(t,n)})(n,t,e)}))},Vn=function(e,t){var n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t)
return""!==r||an(e)?r:qn(n,t)},qn=function(e,t){return In(e)?e.style.getPropertyValue(t):""},$n=function(e,t){var n=e.dom,r=qn(n,t)
return b.from(r).filter((function(e){return e.length>0}))},Wn=function(e){var t={},n=e.dom
if(In(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r)
t[o]=n.style[o]}return t},Kn=nt().browser,Xn=function(e){return q(e,Rt)},Yn=function(e,t){return e.children&&I(e.children,t)},Gn=function(e,t,n){var r,o,i=0,a=0,u=e.ownerDocument
if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===Vn(yt.fromDom(e),"position"))return{x:i=(o=t.getBoundingClientRect()).left+(u.documentElement.scrollLeft||e.scrollLeft)-u.documentElement.clientLeft,y:a=o.top+(u.documentElement.scrollTop||e.scrollTop)-u.documentElement.clientTop}
for(r=t;r&&r!==n&&r.nodeType&&!Yn(r,n);)i+=r.offsetLeft||0,a+=r.offsetTop||0,r=r.offsetParent
for(r=t.parentNode;r&&r!==n&&r.nodeType&&!Yn(r,n);)i-=r.scrollLeft||0,a-=r.scrollTop||0,r=r.parentNode
a+=function(e){return Kn.isFirefox()&&"table"===Et(e)?Xn(zt(e)).filter((function(e){return"caption"===Et(e)})).bind((function(e){return Xn(Ut(e)).map((function(t){var n=t.dom.offsetTop,r=e.dom.offsetTop,o=e.dom.offsetHeight
return n<=r?-o:0}))})).getOr(0):0}(yt.fromDom(t))}return{x:i,y:a}},Jn={},Qn={exports:Jn};(function(e,t,n,r){(function(r){if("object"==typeof t&&void 0!==n)n.exports=r()
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
t.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)}))})(void 0,Jn,Qn,void 0)
var Zn=Qn.exports.boltExport,er=function(e){var t=b.none(),n=[],r=function(e){o()?a(e):n.push(e)},o=function(){return t.isSome()},i=function(e){U(e,a)},a=function(e){t.each((function(t){setTimeout((function(){e(t)}),0)}))}
return e((function(e){o()||(t=b.some(e),i(n),n=[])})),{get:r,map:function(e){return er((function(t){r((function(n){t(e(n))}))}))},isReady:o}},tr={nu:er,pure:function(e){return er((function(t){t(e)}))}},nr=function(e){setTimeout((function(){throw e}),0)},rr=function(e){var t=function(t){e().then(t,nr)}
return{map:function(t){return rr((function(){return e().then(t)}))},bind:function(t){return rr((function(){return e().then((function(e){return t(e).toPromise()}))}))},anonBind:function(t){return rr((function(){return e().then((function(){return t.toPromise()}))}))},toLazy:function(){return tr.nu(t)},toCached:function(){var t=null
return rr((function(){return null===t&&(t=e()),t}))},toPromise:e,get:t}},or=function(e){return rr((function(){return new Zn(e)}))},ir=function(e,t){return t((function(t){var n=[],r=0
0===e.length?t([]):U(e,(function(o,i){o.get(function(o){return function(i){n[o]=i,++r>=e.length&&t(n)}}(i))}))}))},ar=function(e){return{is:function(t){return e===t},isValue:g,isError:p,getOr:s(e),getOrThunk:s(e),getOrDie:s(e),or:function(t){return ar(e)},orThunk:function(t){return ar(e)},fold:function(t,n){return n(e)},map:function(t){return ar(t(e))},mapError:function(t){return ar(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOptional:function(){return b.some(e)}}},ur=function(e){return{is:p,isValue:p,isError:g,getOr:f,getOrThunk:function(e){return e()},getOrDie:function(){return m(String(e))()},or:function(e){return e},orThunk:function(e){return e()},fold:function(t,n){return t(e)},map:function(t){return ur(e)},mapError:function(t){return ur(t(e))},each:u,bind:function(t){return ur(e)},exists:p,forall:g,toOptional:b.none}},cr={value:ar,error:ur,fromOption:function(e,t){return e.fold((function(){return ur(t)}),ar)}},sr=function(e){if(!E(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
return U(e,(function(r,o){var i=Z(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],u=r[a]
if(void 0!==n[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!E(u))throw new Error("case arguments must be an array")
t.push(a),n[a]=function(){var n=arguments.length
if(n!==u.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+u.length+" ("+u+"), got "+n)
for(var r=new Array(n),i=0;i<r.length;i++)r[i]=arguments[i]
var c=function(e){var n=Z(e)
if(t.length!==n.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+n.join(","))
if(!K(t,(function(e){return I(n,e)})))throw new Error("Not all branches were specified when using match. Specified: "+n.join(", ")+"\nRequired: "+t.join(", "))
return e[a].apply(null,r)}
return{fold:function(){if(arguments.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+arguments.length)
var t=arguments[o]
return t.apply(null,r)},match:c,log:function(e){console.log(e,{constructors:t,constructor:a,params:r})}}}})),n},fr=(sr([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(e){return e.fold(f,f)})
function lr(e,t,n,r,o){return e(n,r)?b.some(n):A(o)&&o(n)?b.none():t(n,r,o)}var dr,mr=function(e,t,n){for(var r=e.dom,o=A(n)?n:p;r.parentNode;){r=r.parentNode
var i=yt.fromDom(r)
if(t(i))return b.some(i)
if(o(i))break}return b.none()},pr=function(e,t,n){return lr((function(e,t){return t(e)}),mr,e,t,n)},gr=function(e,t,n){return mr(e,(function(e){return Ct(e,t)}),n)},hr=function(e,t){return function(e,t){var n=void 0===t?document:t.dom
return wt(n)?b.none():b.from(n.querySelector(e)).map(yt.fromDom)}(t,e)},vr=function(e,t,n){return lr((function(e,t){return Ct(e,t)}),gr,e,t,n)},yr=window.Promise?window.Promise:function(){function e(e,t){return function(){e.apply(t,arguments)}}var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},n=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
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
if("function"==typeof u)return void u.call(a,(function(e){o(i,e)}),n)}e[i]=a,0==--r&&t(e)}catch(c){n(c)}}for(var i=0;i<e.length;i++)o(i,e[i])}))},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,n){n(e)}))},n.race=function(e){return new n((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},n}(),br=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},Cr=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},wr=function(e,t){var n,r=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
clearTimeout(n),n=br((function(){e.apply(this,r)}),t)}
return r.stop=function(){clearTimeout(n)},r},xr={requestAnimationFrame:function(e,t){dr?dr.then(e):dr=new yr((function(e){t||(t=document.body),function(e,t){var n,r=window.requestAnimationFrame,o=["ms","moz","webkit"]
for(n=0;n<o.length&&!r;n++)r=window[o[n]+"RequestAnimationFrame"]
r||(r=function(e){window.setTimeout(e,0)}),r(e,t)}(e,t)})).then(e)},setTimeout:br,setInterval:Cr,setEditorTimeout:function(e,t,n){return br((function(){e.removed||t()}),n)},setEditorInterval:function(e,t,n){var r=Cr((function(){e.removed?clearInterval(r):t()}),n)
return r},debounce:wr,throttle:wr,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}}
function Sr(e,t){void 0===t&&(t={})
var n=0,r={},o=yt.fromDom(e),i=Bt(o),a=t.maxLoadTime||5e3,u=function(u,c,s){var f,l=ht._addCacheSuffix(u),d=function(e){return se(r,e).getOrThunk((function(){return{id:"mce-u"+n++,passed:[],failed:[],count:0}}))}(l)
r[l]=d,d.count++
var m=function(e,t){for(var n=e.length;n--;)e[n]()
d.status=t,d.passed=[],d.failed=[],f&&(f.onload=null,f.onerror=null,f=null)},p=function(){return m(d.passed,2)},g=function(){return m(d.failed,3)},h=function(){var t
t=h,function(){for(var t=e.styleSheets,n=t.length;n--;){var r=t[n].ownerNode
if(r&&r.id===f.id)return p(),!0}return!1}()||(Date.now()-b<a?xr.setTimeout(t):g())}
if(c&&d.passed.push(c),s&&d.failed.push(s),1!==d.status)if(2!==d.status)if(3!==d.status){d.status=1
var v=yt.fromTag("link",i.dom)
Un(v,{rel:"stylesheet",type:"text/css",id:d.id})
var y,b=Date.now()
t.contentCssCors&&Fn(v,"crossOrigin","anonymous"),t.referrerPolicy&&Fn(v,"referrerpolicy",t.referrerPolicy),(f=v.dom).onload=h,f.onerror=g,y=v,en(Xt(o),y),Fn(v,"href",l)}else g()
else p()},f=function(e){return or((function(t){u(e,c(t,s(cr.value(e))),c(t,s(cr.error(e))))}))},l=function(e){var t=ht._addCacheSuffix(e)
se(r,t).each((function(e){var n,i
0===--e.count&&(delete r[t],n=e.id,i=Xt(o),hr(i,"#"+n).each(rn))}))}
return{load:u,loadAll:function(e,t,n){var r;(r=F(e,f),ir(r,or)).get((function(e){var r=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a,o)?n:r).push(a)}return{pass:n,fail:r}}(e,(function(e){return e.isValue()}))
r.fail.length>0?n(r.fail.map(fr)):t(r.pass.map(fr))}))},unload:l,unloadAll:function(e){U(e,(function(e){l(e)}))},_setReferrerPolicy:function(e){t.referrerPolicy=e}}}var Nr,Er,kr=function(){var e=new WeakMap
return{forElement:function(t,n){var r=Kt(t).dom
return b.from(e.get(r)).getOrThunk((function(){var t=Sr(r,n)
return e.set(r,t),t}))}}}(),_r=function(){function e(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}return e.prototype.current=function(){return this.node},e.prototype.next=function(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node},e.prototype.prev=function(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node},e.prototype.prev2=function(e){return this.node=this.findPreviousNode(this.node,"lastChild","previousSibling",e),this.node},e.prototype.findSibling=function(e,t,n,r){var o,i
if(e){if(!r&&e[t])return e[t]
if(e!==this.rootNode){if(o=e[n])return o
for(i=e.parentNode;i&&i!==this.rootNode;i=i.parentNode)if(o=i[n])return o}}},e.prototype.findPreviousNode=function(e,t,n,r){var o,i,a
if(e){if(o=e[n],this.rootNode&&o===this.rootNode)return
if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a
return o}if((i=e.parentNode)&&i!==this.rootNode)return i}},e}(),Rr=function(e){var t
return function(n){return(t=t||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r]
n[String(i)]=t(i,r)}return n}(e,g)).hasOwnProperty(Et(n))}},Tr=Rr(["h1","h2","h3","h4","h5","h6"]),Ar=Rr(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),Dr=function(e){return Rt(e)&&!Ar(e)},Or=function(e){return Rt(e)&&"br"===Et(e)},Br=Rr(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),Pr=Rr(["ul","ol","dl"]),Lr=Rr(["li","dd","dt"]),Ir=Rr(["thead","tbody","tfoot"]),Mr=Rr(["td","th"]),Fr=Rr(["pre","script","textarea","style"]),Ur=" ",zr="\ufeff",jr=function(e){return"\ufeff"===e},Hr=function(e){return e.replace(/\uFEFF/g,"")},Vr=yn,qr=kn,$r=function(e){return qr(e)&&(e=e.parentNode),Vr(e)&&e.hasAttribute("data-mce-caret")},Wr=function(e){return qr(e)&&jr(e.data)},Kr=function(e){return $r(e)||Wr(e)},Xr=function(e){return e.firstChild!==e.lastChild||!An(e.firstChild)},Yr=function(e){var t=e.container()
return!!kn(t)&&(t.data.charAt(e.offset())===zr||e.isAtStart()&&Wr(t.previousSibling))},Gr=function(e){var t=e.container()
return!!kn(t)&&(t.data.charAt(e.offset()-1)===zr||e.isAtEnd()&&Wr(t.nextSibling))},Jr=function(e,t,n){var r,o=t.ownerDocument.createElement(e)
o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(((r=document.createElement("br")).setAttribute("data-mce-bogus","1"),r))
var i=t.parentNode
return n?i.insertBefore(o,t):t.nextSibling?i.insertBefore(o,t.nextSibling):i.appendChild(o),o},Qr=function(e){return qr(e)&&e.data[0]===zr},Zr=function(e){return qr(e)&&e.data[e.data.length-1]===zr},eo=function(e){return e&&e.hasAttribute("data-mce-caret")?(t=e.getElementsByTagName("br"),n=t[t.length-1],xn(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null
var t,n},to=On,no=Bn,ro=An,oo=kn,io=bn(["script","style","textarea"]),ao=bn(["img","input","textarea","hr","iframe","video","audio","object","embed"]),uo=bn(["table"]),co=Kr,so=function(e){return!co(e)&&(oo(e)?!io(e.parentNode):ao(e)||ro(e)||uo(e)||fo(e))},fo=function(e){return!1===function(e){return yn(e)&&"true"===e.getAttribute("unselectable")}(e)&&no(e)},lo=function(e,t){return so(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(fo(e))return!1
if(to(e))return!0}return!0}(e,t)},mo=/^[ \t\r\n]*$/,po=function(e){return mo.test(e)},go=function(e,t){var n,r,o,i=yt.fromDom(t),a=yt.fromDom(e)
return n=a,r="pre,code",o=l(xt,i),gr(n,r,o).isSome()},ho=function(e,t){return so(e)&&!1===function(e,t){return kn(e)&&po(e.data)&&!1===go(e,t)}(e,t)||function(e){return yn(e)&&"A"===e.nodeName&&!e.hasAttribute("href")&&(e.hasAttribute("name")||e.hasAttribute("id"))}(e)||vo(e)},vo=wn("data-mce-bookmark"),yo=wn("data-mce-bogus"),bo=(Nr="data-mce-bogus",Er="all",function(e){return yn(e)&&e.getAttribute(Nr)===Er}),Co=function(e,t){return void 0===t&&(t=!0),function(e,t){var n,r=0
if(ho(e,e))return!1
if(!(n=e.firstChild))return!0
var o=new _r(n,e)
do{if(t){if(bo(n)){n=o.next(!0)
continue}if(yo(n)){n=o.next()
continue}}if(An(n))r++,n=o.next()
else{if(ho(n,e))return!1
n=o.next()}}while(n)
return r<=1}(e.dom,t)},wo=function(e,t){return T(e)&&(ho(e,t)||Dr(yt.fromDom(e)))},xo=function(e){return function(e){return"span"===e.nodeName.toLowerCase()}(e)&&"bookmark"===e.getAttribute("data-mce-type")},So=function(e,t){return kn(e)&&e.data.length>0&&function(e,t){var n=new _r(e,t).prev(!1),r=new _r(e,t).next(!1),o=R(n)||wo(n,t),i=R(r)||wo(r,t)
return o&&i}(e,t)},No=function(e,t,n){var r=n||t
if(yn(t)&&xo(t))return t
for(var o=t.childNodes,i=o.length-1;i>=0;i--)No(e,o[i],r)
if(yn(t)){var a=t.childNodes
1===a.length&&xo(a[0])&&t.parentNode.insertBefore(a[0],t)}return function(e){return Tn(e)||Rn(e)}(t)||ho(t,r)||function(e){return!!yn(e)&&e.childNodes.length>0}(t)||So(t,r)||e.remove(t),t},Eo=ht.makeMap,ko=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,_o=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Ro=/[<>&\"\']/g,To=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,Ao={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},Do={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},Oo={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},Bo=function(e,t){var n,r,o,i={}
if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),Do[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r)
return i}},Po=Bo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),Lo=function(e,t){return e.replace(t?ko:_o,(function(e){return Do[e]||e}))},Io=function(e,t){return e.replace(t?ko:_o,(function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":Do[e]||"&#"+e.charCodeAt(0)+";"}))},Mo=function(e,t,n){return n=n||Po,e.replace(t?ko:_o,(function(e){return Do[e]||n[e]||e}))},Fo={encodeRaw:Lo,encodeAllRaw:function(e){return(""+e).replace(Ro,(function(e){return Do[e]||e}))},encodeNumeric:Io,encodeNamed:Mo,getEncodeFunc:function(e,t){var n=Bo(t)||Po,r=Eo(e.replace(/\+/g,","))
return r.named&&r.numeric?function(e,t){return e.replace(t?ko:_o,(function(e){return void 0!==Do[e]?Do[e]:void 0!==n[e]?n[e]:e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"}))}:r.named?t?function(e,t){return Mo(e,t,n)}:Mo:r.numeric?Io:Lo},decode:function(e){return e.replace(To,(function(e,t){return t?(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))>65535?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):Ao[t]||String.fromCharCode(t):Oo[e]||Po[e]||function(e){var t=yt.fromTag("div").dom
return t.innerHTML=e,t.textContent||t.innerText||e}(e)}))}},Uo={},zo={},jo=ht.makeMap,Ho=ht.each,Vo=ht.extend,qo=ht.explode,$o=ht.inArray,Wo=function(e,t){return(e=ht.trim(e))?e.split(t||" "):[]},Ko=function(e,t){var n
return e&&(n={},"string"==typeof e&&(e={"*":e}),Ho(e,(function(e,r){n[r]=n[r.toUpperCase()]="map"===t?jo(e,/[, ]/):qo(e,/[, ]/)}))),n}
function Xo(e){var t={},n={},r=[],o={},i={},a=function(t,n,r){var o=e[t]
return o?o=jo(o,/[, ]/,jo(o.toUpperCase(),/[, ]/)):(o=Uo[t])||(o=jo(n," ",jo(n.toUpperCase()," ")),o=Vo(o,r),Uo[t]=o),o},u=function(e){var t,n,r,o,i,a,u={},c=function(e,n,r){var o,i,a,c=function(e,t){var n,r,o={}
for(n=0,r=e.length;n<r;n++)o[e[n]]=t||{}
return o}
n=n||"","string"==typeof(r=r||[])&&(r=Wo(r))
var s=Wo(e)
for(o=s.length;o--;)a={attributes:c(i=Wo([t,n].join(" "))),attributesOrder:i,children:c(r,zo)},u[s[o]]=a},s=function(e,t){var n,r,o,i,a=Wo(e)
n=a.length
for(var c=Wo(t);n--;)for(r=u[a[n]],o=0,i=c.length;o<i;o++)r.attributes[c[o]]={},r.attributesOrder.push(c[o])}
if(Uo[e])return Uo[e]
if(t="id accesskey class dir lang style tabindex title role",n="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",r="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(t+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",n+=" article aside details dialog figure main header footer hgroup section nav",r+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(t+=" xml:lang",r=[r,a="acronym applet basefont big font strike tt"].join(" "),Ho(Wo(a),(function(e){c(e,"",r)})),n=[n,i="center dir isindex noframes"].join(" "),o=[n,r].join(" "),Ho(Wo(i),(function(e){c(e,"",o)}))),o=o||[n,r].join(" "),c("html","manifest","head body"),c("head","","base command link meta noscript script style title"),c("title hr noscript br"),c("base","href target"),c("link","href rel media hreflang type sizes hreflang"),c("meta","name http-equiv content charset"),c("style","media type scoped"),c("script","src async defer type charset"),c("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",o),c("address dt dd div caption","",o),c("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",r),c("blockquote","cite",o),c("ol","reversed start type","li"),c("ul","","li"),c("li","value",o),c("dl","","dt dd"),c("a","href target rel media hreflang type",r),c("q","cite",r),c("ins del","cite datetime",o),c("img","src sizes srcset alt usemap ismap width height"),c("iframe","src name width height",o),c("embed","src type width height"),c("object","data type typemustmatch name usemap form width height",[o,"param"].join(" ")),c("param","name value"),c("map","name",[o,"area"].join(" ")),c("area","alt coords shape href target rel media hreflang type"),c("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),c("colgroup","span","col"),c("col","span"),c("tbody thead tfoot","","tr"),c("tr","","td th"),c("td","colspan rowspan headers",o),c("th","colspan rowspan headers scope abbr",o),c("form","accept-charset action autocomplete enctype method name novalidate target",o),c("fieldset","disabled form name",[o,"legend"].join(" ")),c("label","form for",r),c("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),c("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?o:r),c("select","disabled form multiple name required size","option optgroup"),c("optgroup","disabled label","option"),c("option","disabled label selected value"),c("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),c("menu","type label",[o,"li"].join(" ")),c("noscript","",o),"html4"!==e&&(c("wbr"),c("ruby","",[r,"rt rp"].join(" ")),c("figcaption","",o),c("mark rt rp summary bdi","",r),c("canvas","width height",o),c("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[o,"track source"].join(" ")),c("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[o,"track source"].join(" ")),c("picture","","img source"),c("source","src srcset type media sizes"),c("track","kind src srclang label default"),c("datalist","",[r,"option"].join(" ")),c("article section nav aside main header footer","",o),c("hgroup","","h1 h2 h3 h4 h5 h6"),c("figure","",[o,"figcaption"].join(" ")),c("time","datetime",r),c("dialog","open",o),c("command","type label icon disabled checked radiogroup command"),c("output","for form name",r),c("progress","value max",r),c("meter","value min max low high optimum",r),c("details","open",[o,"summary"].join(" ")),c("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e){s("script","language xml:space"),s("style","xml:space"),s("object","declare classid code codebase codetype archive standby align border hspace vspace"),s("embed","align name hspace vspace"),s("param","valuetype type"),s("a","charset name rev shape coords"),s("br","clear"),s("applet","codebase archive code object alt name width height align hspace vspace"),s("img","name longdesc align border hspace vspace"),s("iframe","longdesc frameborder marginwidth marginheight scrolling align"),s("font basefont","size color face"),s("input","usemap align"),s("select"),s("textarea"),s("h1 h2 h3 h4 h5 h6 div p legend caption","align"),s("ul","type compact"),s("li","type"),s("ol dl menu dir","compact"),s("pre","width xml:space"),s("hr","align noshade size width"),s("isindex","prompt"),s("table","summary width frame rules cellspacing cellpadding align bgcolor"),s("col","width align char charoff valign"),s("colgroup","width align char charoff valign"),s("thead","align char charoff valign"),s("tr","align char charoff valign bgcolor"),s("th","axis align char charoff valign nowrap bgcolor width height"),s("form","accept"),s("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),s("tfoot","align char charoff valign")
s("tbody","align char charoff valign"),s("area","nohref"),s("body","background bgcolor text link vlink alink")}return"html4"!==e&&(s("input button select textarea","autofocus"),s("input textarea","placeholder"),s("a","download"),s("link script img","crossorigin"),s("img","loading"),s("iframe","sandbox seamless allowfullscreen loading")),Ho(Wo("a form meter progress dfn"),(function(e){u[e]&&delete u[e].children[e]})),delete u.caption.children.table,delete u.script,Uo[e]=u,u}((e=e||{}).schema)
!1===e.verify_html&&(e.valid_elements="*[*]")
var c=Ko(e.valid_styles),s=Ko(e.invalid_styles,"map"),f=Ko(e.valid_classes,"map"),l=a("whitespace_elements","pre script noscript style textarea video audio iframe object code"),d=a("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),m=a("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),p=a("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),g="td th iframe video audio object script code",h=a("non_empty_elements",g+" pre",m),v=a("move_caret_before_on_enter_elements",g+" table",m),y=a("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),b=a("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",y),C=a("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
Ho((e.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),(function(e){i[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var w=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},x=function(e){var n,o,i,a,u,c,s,f,l,d,m,p,g,h,v,y,b,C,x=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,S=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,N=/[*?+]/
if(e){var E=Wo(e,",")
for(t["@"]&&(y=t["@"].attributes,b=t["@"].attributesOrder),n=0,o=E.length;n<o;n++)if(u=x.exec(E[n])){if(h=u[1],l=u[2],v=u[3],f=u[5],c={attributes:p={},attributesOrder:g=[]},"#"===h&&(c.paddEmpty=!0),"-"===h&&(c.removeEmpty=!0),"!"===u[4]&&(c.removeEmptyAttrs=!0),y&&(te(y,(function(e,t){p[t]=e})),g.push.apply(g,b)),f)for(i=0,a=(f=Wo(f,"|")).length;i<a;i++)if(u=S.exec(f[i])){if(s={},m=u[1],d=u[2].replace(/[\\:]:/g,":"),h=u[3],C=u[4],"!"===m&&(c.attributesRequired=c.attributesRequired||[],c.attributesRequired.push(d),s.required=!0),"-"===m){delete p[d],g.splice($o(g,d),1)
continue}h&&("="===h&&(c.attributesDefault=c.attributesDefault||[],c.attributesDefault.push({name:d,value:C}),s.defaultValue=C),":"===h&&(c.attributesForced=c.attributesForced||[],c.attributesForced.push({name:d,value:C}),s.forcedValue=C),"<"===h&&(s.validValues=jo(C,"?"))),N.test(d)?(c.attributePatterns=c.attributePatterns||[],s.pattern=w(d),c.attributePatterns.push(s)):(p[d]||g.push(d),p[d]=s)}y||"@"!==l||(y=p,b=g),v&&(c.outputName=l,t[v]=c),N.test(l)?(c.pattern=w(l),r.push(c)):t[l]=c}}},S=function(e){t={},r=[],x(e),Ho(u,(function(e,t){n[t]=e.children}))},N=function(e){var r=/^(~)?(.+)$/
e&&(Uo.text_block_elements=Uo.block_elements=null,Ho(Wo(e,","),(function(e){var i=r.exec(e),a="~"===i[1],u=a?"span":"div",c=i[2]
if(n[c]=n[u],o[c]=u,a||(b[c.toUpperCase()]={},b[c]={}),!t[c]){var s=t[u]
delete(s=Vo({},s)).removeEmptyAttrs,delete s.removeEmpty,t[c]=s}Ho(n,(function(e,t){e[u]&&(n[t]=e=Vo({},n[t]),e[c]=e[u])}))})))},E=function(t){var r=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/
Uo[e.schema]=null,t&&Ho(Wo(t,","),(function(e){var t,o,i=r.exec(e)
i&&(o=i[1],t=o?n[i[2]]:n[i[2]]={"#comment":{}},t=n[i[2]],Ho(Wo(i[3],"|"),(function(e){"-"===o?delete t[e]:t[e]={}})))}))},k=function(e){var n,o=t[e]
if(o)return o
for(n=r.length;n--;)if((o=r[n]).pattern.test(e))return o}
e.valid_elements?S(e.valid_elements):(Ho(u,(function(e,r){t[r]={attributes:e.attributes,attributesOrder:e.attributesOrder},n[r]=e.children})),"html5"!==e.schema&&Ho(Wo("strong/b em/i"),(function(e){var n=Wo(e,"/")
t[n[1]].outputName=n[0]})),Ho(Wo("ol ul sub sup blockquote span font a table tbody tr strong em b i"),(function(e){t[e]&&(t[e].removeEmpty=!0)})),Ho(Wo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(function(e){t[e].paddEmpty=!0})),Ho(Wo("span"),(function(e){t[e].removeEmptyAttrs=!0}))),N(e.custom_elements),E(e.valid_children),x(e.extended_valid_elements),E("+ol[ul|ol],+ul[ul|ol]"),Ho({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},(function(e,n){t[n]&&(t[n].parentsRequired=Wo(e))})),e.invalid_elements&&Ho(qo(e.invalid_elements),(function(e){t[e]&&delete t[e]})),k("span")||x("span[!data-mce-type|*]")
return{children:n,elements:t,getValidStyles:function(){return c},getValidClasses:function(){return f},getBlockElements:function(){return b},getInvalidStyles:function(){return s},getShortEndedElements:function(){return m},getTextBlockElements:function(){return y},getTextInlineElements:function(){return C},getBoolAttrs:function(){return p},getElementRule:k,getSelfClosingElements:function(){return d},getNonEmptyElements:function(){return h},getMoveCaretBeforeOnEnterElements:function(){return v},getWhiteSpaceElements:function(){return l},getSpecialElements:function(){return i},isValidChild:function(e,t){var r=n[e.toLowerCase()]
return!(!r||!r[t.toLowerCase()])},isValid:function(e,t){var n,r,o=k(e)
if(o){if(!t)return!0
if(o.attributes[t])return!0
if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return o},addValidElements:x,setValidElements:S,addCustomElements:N,addValidChildren:E}}var Yo,Go,Jo,Qo,Zo,ei,ti,ni,ri,oi,ii,ai,ui,ci,si,fi,li,di=function(e,t,n,r){var o=function(e){return(e=parseInt(e,10).toString(16)).length>1?e:"0"+e}
return"#"+o(t)+o(n)+o(r)},mi=function(e,t){var n,r,o,i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,a=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,u=/\s*([^:]+):\s*([^;]+);?/g,c=/\s+$/,s={},f="\ufeff"
e=e||{},t&&(r=t.getValidStyles(),o=t.getInvalidStyles())
var l="\\\" \\' \\; \\: ; : \ufeff".split(" ")
for(n=0;n<l.length;n++)s[l[n]]=f+n,s[f+n]=l[n]
return{toHex:function(e){return e.replace(i,di)},parse:function(t){var r,o,l,d,m,p,g,h,v={},y=e.url_converter,b=e.url_converter_scope||this,C=function(e,t,r){var o=v[e+"-top"+t]
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
"font-weight"===o&&"700"===l?l="bold":"color"!==o&&"background-color"!==o||(l=l.toLowerCase()),l=(l=l.replace(i,di)).replace(a,k),v[o]=d?S(l,!0):l}C("border","",!0),C("border","-width"),C("border","-color"),C("border","-style"),C("padding",""),C("margin",""),m="border",g="border-style",h="border-color",w(p="border-width")&&w(g)&&w(h)&&(v[m]=v[p]+" "+v[g]+" "+v[h],delete v[p],delete v[g],delete v[h]),"medium none"===v.border&&delete v.border,"none"===v["border-image"]&&delete v["border-image"]}return v},serialize:function(e,t){var n="",i=function(t){var o,i=r[t]
if(i)for(var a=0,u=i.length;a<u;a++)t=i[a],(o=e[t])&&(n+=(n.length>0?" ":"")+t+": "+o+";")}
return t&&r?(i("*"),i(t)):te(e,(function(e,r){!e||o&&!function(e,t){var n=o["*"]
return!(n&&n[e]||(n=o[t])&&n[e])}(r,t)||(n+=(n.length>0?" ":"")+r+": "+e+";")})),n}}},pi=/^(?:mouse|contextmenu)|click/,gi={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1,mozPressure:1},hi=function(){return!1},vi=function(){return!0},yi=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},bi=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},Ci=function(e,t){var n,r=t||{}
for(n in e)gi[n]||(r[n]=e[n])
if(r.target||(r.target=r.srcElement||document),r.composedPath&&(r.composedPath=function(){return e.composedPath()}),e&&function(e){return pi.test(e.type)}(e)&&void 0===e.pageX&&void 0!==e.clientX){var o=r.target.ownerDocument||document,i=o.documentElement,a=o.body
r.pageX=e.clientX+(i&&i.scrollLeft||a&&a.scrollLeft||0)-(i&&i.clientLeft||a&&a.clientLeft||0),r.pageY=e.clientY+(i&&i.scrollTop||a&&a.scrollTop||0)-(i&&i.clientTop||a&&a.clientTop||0)}return r.preventDefault=function(){r.isDefaultPrevented=vi,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},r.stopPropagation=function(){r.isPropagationStopped=vi,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=vi,r.stopPropagation()},!1===function(e){return e.isDefaultPrevented===vi||e.isDefaultPrevented===hi}(r)&&(r.isDefaultPrevented=hi,r.isPropagationStopped=hi,r.isImmediatePropagationStopped=hi),void 0===r.metaKey&&(r.metaKey=!1),r},wi=function(e,t,n){var r=e.document,o={type:"ready"}
if(n.domLoaded)t(o)
else{var i=function(){bi(e,"DOMContentLoaded",i),bi(e,"load",i),n.domLoaded||(n.domLoaded=!0,t(o))}
"complete"===r.readyState||"interactive"===r.readyState&&r.body?i():yi(e,"DOMContentLoaded",i),yi(e,"load",i)}},xi=function(){function e(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}return e.prototype.bind=function(e,t,n,r){var o,i,a,u,c,s,f,l=this,d=window,m=function(e){l.executeHandlers(Ci(e||d.event),o)}
if(e&&3!==e.nodeType&&8!==e.nodeType){e[l.expando]?o=e[l.expando]:(o=l.count++,e[l.expando]=o,l.events[o]={}),r=r||e
var p=t.split(" ")
for(a=p.length;a--;)s=m,c=f=!1,"DOMContentLoaded"===(u=p[a])&&(u="ready"),l.domLoaded&&"ready"===u&&"complete"===e.readyState?n.call(r,Ci({type:u})):(l.hasMouseEnterLeave||(c=l.mouseEnterLeave[u])&&(s=function(e){var t=e.currentTarget,n=e.relatedTarget
if(n&&t.contains)n=t.contains(n)
else for(;n&&n!==t;)n=n.parentNode
n||((e=Ci(e||d.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,l.executeHandlers(e,o))}),l.hasFocusIn||"focusin"!==u&&"focusout"!==u||(f=!0,c="focusin"===u?"focus":"blur",s=function(e){(e=Ci(e||d.event)).type="focus"===e.type?"focusin":"focusout",l.executeHandlers(e,o)}),(i=l.events[o][u])?"ready"===u&&l.domLoaded?n(Ci({type:u})):i.push({func:n,scope:r}):(l.events[o][u]=i=[{func:n,scope:r}],i.fakeName=c,i.capture=f,i.nativeHandler=s,"ready"===u?wi(e,s,l):yi(e,c||u,s,f)))
return e=i=null,n}},e.prototype.unbind=function(e,t,n){var r,o,i,a,u
if(!e||3===e.nodeType||8===e.nodeType)return this
var c=e[this.expando]
if(c){if(u=this.events[c],t){var s=t.split(" ")
for(o=s.length;o--;)if(r=u[a=s[o]]){if(n)for(i=r.length;i--;)if(r[i].func===n){var f=r.nativeHandler,l=r.fakeName,d=r.capture;(r=r.slice(0,i).concat(r.slice(i+1))).nativeHandler=f,r.fakeName=l,r.capture=d,u[a]=r}n&&0!==r.length||(delete u[a],bi(e,r.fakeName||a,r.nativeHandler,r.capture))}}else te(u,(function(t,n){bi(e,t.fakeName||n,t.nativeHandler,t.capture)})),u={}
for(a in u)if(fe(u,a))return this
delete this.events[c]
try{delete e[this.expando]}catch(m){e[this.expando]=null}}return this},e.prototype.fire=function(e,t,n){var r
if(!e||3===e.nodeType||8===e.nodeType)return this
var o=Ci(null,n)
o.type=t,o.target=e
do{(r=e[this.expando])&&this.executeHandlers(o,r),e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow}while(e&&!o.isPropagationStopped())
return this},e.prototype.clean=function(e){var t,n
if(!e||3===e.nodeType||8===e.nodeType)return this
if(e[this.expando]&&this.unbind(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(this.unbind(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[this.expando]&&this.unbind(e)
return this},e.prototype.destroy=function(){this.events={}},e.prototype.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1},e.prototype.executeHandlers=function(e,t){var n=this.events[t],r=n&&n[e.type]
if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o]
if(a&&!1===a.func.call(a.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}},e.Event=new e,e}(),Si="sizzle"+-new Date,Ni=window.document,Ei=0,ki=0,_i=aa(),Ri=aa(),Ti=aa(),Ai=function(e,t){return e===t&&(oi=!0),0},Di="undefined",Oi=1<<31,Bi={}.hasOwnProperty,Pi=[],Li=Pi.pop,Ii=Pi.push,Mi=Pi.push,Fi=Pi.slice,Ui=Pi.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t
return-1},zi="[\\x20\\t\\r\\n\\f]",ji="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Hi="\\[[\\x20\\t\\r\\n\\f]*("+ji+")(?:"+zi+"*([*^$|!~]?=)"+zi+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ji+"))|)"+zi+"*\\]",Vi=":("+ji+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+Hi+")*)|.*)\\)|)",qi=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),$i=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),Wi=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),Ki=new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]","g"),Xi=new RegExp(Vi),Yi=new RegExp("^"+ji+"$"),Gi={ID:new RegExp("^#("+ji+")"),CLASS:new RegExp("^\\.("+ji+")"),TAG:new RegExp("^("+ji+"|[*])"),ATTR:new RegExp("^"+Hi),PSEUDO:new RegExp("^"+Vi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},Ji=/^(?:input|select|textarea|button)$/i,Qi=/^h\d$/i,Zi=/^[^{]+\{\s*\[native \w/,ea=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,na=/'|\\/g,ra=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig"),oa=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)}
try{Mi.apply(Pi=Fi.call(Ni.childNodes),Ni.childNodes),Pi[Ni.childNodes.length].nodeType}catch($E){Mi={apply:Pi.length?function(e,t){Ii.apply(e,Fi.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var ia=function(e,t,n,r){var o,i,a,u,c,s,f,l,d,m
if((t?t.ownerDocument||t:Ni)!==ai&&ii(t),n=n||[],!e||"string"!=typeof e)return n
if(1!==(u=(t=t||ai).nodeType)&&9!==u)return[]
if(ci&&!r){if(o=ea.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n
if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&li(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return Mi.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&Yo.getElementsByClassName)return Mi.apply(n,t.getElementsByClassName(a)),n}if(Yo.qsa&&(!si||!si.test(e))){if(l=f=Si,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(s=Zo(e),(f=t.getAttribute("id"))?l=f.replace(na,"\\$&"):t.setAttribute("id",l),l="[id='"+l+"'] ",c=s.length;c--;)s[c]=l+da(s[c])
d=ta.test(e)&&fa(t.parentNode)||t,m=s.join(",")}if(m)try{return Mi.apply(n,d.querySelectorAll(m)),n}catch(p){}finally{f||t.removeAttribute("id")}}}return ti(e.replace(qi,"$1"),t,n,r)}
function aa(){var e=[]
return function t(n,r){return e.push(n+" ")>Go.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function ua(e){return e[Si]=!0,e}function ca(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Oi)-(~e.sourceIndex||Oi)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function sa(e){return ua((function(t){return t=+t,ua((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function fa(e){return e&&typeof e.getElementsByTagName!==Di&&e}function la(){}function da(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function ma(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=ki++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,c,s=[Ei,i]
if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if((u=(c=t[Si]||(t[Si]={}))[r])&&u[0]===Ei&&u[1]===i)return s[2]=u[2]
if(c[r]=s,s[2]=e(t,n,a))return!0}}}function pa(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1
return!0}:e[0]}function ga(e,t,n,r,o){for(var i,a=[],u=0,c=e.length,s=null!=t;u<c;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),s&&t.push(u)))
return a}function ha(e,t,n,r,o,i){return r&&!r[Si]&&(r=ha(r)),o&&!o[Si]&&(o=ha(o,i)),ua((function(i,a,u,c){var s,f,l,d=[],m=[],p=a.length,g=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)ia(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),h=!e||!i&&t?g:ga(g,d,e,u,c),v=n?o||(i?e:p||r)?[]:a:h
if(n&&n(h,v,u,c),r)for(s=ga(v,m),r(s,[],u,c),f=s.length;f--;)(l=s[f])&&(v[m[f]]=!(h[m[f]]=l))
if(i){if(o||e){if(o){for(s=[],f=v.length;f--;)(l=v[f])&&s.push(h[f]=l)
o(null,v=[],s,c)}for(f=v.length;f--;)(l=v[f])&&(s=o?Ui.call(i,l):d[f])>-1&&(i[s]=!(a[s]=l))}}else v=ga(v===a?v.splice(p,v.length):v),o?o(null,a,v,c):Mi.apply(a,v)}))}function va(e){for(var t,n,r,o=e.length,i=Go.relative[e[0].type],a=i||Go.relative[" "],u=i?1:0,c=ma((function(e){return e===t}),a,!0),s=ma((function(e){return Ui.call(t,e)>-1}),a,!0),f=[function(e,n,r){return!i&&(r||n!==ni)||((t=n).nodeType?c(e,n,r):s(e,n,r))}];u<o;u++)if(n=Go.relative[e[u].type])f=[ma(pa(f),n)]
else{if((n=Go.filter[e[u].type].apply(null,e[u].matches))[Si]){for(r=++u;r<o&&!Go.relative[e[r].type];r++);return ha(u>1&&pa(f),u>1&&da(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(qi,"$1"),n,u<r&&va(e.slice(u,r)),r<o&&va(e=e.slice(r)),r<o&&da(e))}f.push(n)}return pa(f)}Yo=ia.support={},Qo=ia.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},ii=ia.setDocument=function(e){var t,n=e?e.ownerDocument||e:Ni,r=n.defaultView
return n!==ai&&9===n.nodeType&&n.documentElement?(ai=n,ui=n.documentElement,ci=!Qo(n),r&&r!==function(e){try{return e.top}catch(t){}return null}(r)&&(r.addEventListener?r.addEventListener("unload",(function(){ii()}),!1):r.attachEvent&&r.attachEvent("onunload",(function(){ii()}))),Yo.attributes=!0,Yo.getElementsByTagName=!0,Yo.getElementsByClassName=Zi.test(n.getElementsByClassName),Yo.getById=!0,Go.find.ID=function(e,t){if(typeof t.getElementById!==Di&&ci){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},Go.filter.ID=function(e){var t=e.replace(ra,oa)
return function(e){return e.getAttribute("id")===t}},Go.find.TAG=Yo.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Di)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e)
if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n)
return r}return i},Go.find.CLASS=Yo.getElementsByClassName&&function(e,t){if(ci)return t.getElementsByClassName(e)},fi=[],si=[],Yo.disconnectedMatch=!0,si=si.length&&new RegExp(si.join("|")),fi=fi.length&&new RegExp(fi.join("|")),t=Zi.test(ui.compareDocumentPosition),li=t||Zi.test(ui.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},Ai=t?function(e,t){if(e===t)return oi=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!Yo.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===Ni&&li(Ni,e)?-1:t===n||t.ownerDocument===Ni&&li(Ni,t)?1:ri?Ui.call(ri,e)-Ui.call(ri,t):0:4&r?-1:1)}:function(e,t){if(e===t)return oi=!0,0
var r,o=0,i=e.parentNode,a=t.parentNode,u=[e],c=[t]
if(!i||!a)return e===n?-1:t===n?1:i?-1:a?1:ri?Ui.call(ri,e)-Ui.call(ri,t):0
if(i===a)return ca(e,t)
for(r=e;r=r.parentNode;)u.unshift(r)
for(r=t;r=r.parentNode;)c.unshift(r)
for(;u[o]===c[o];)o++
return o?ca(u[o],c[o]):u[o]===Ni?-1:c[o]===Ni?1:0},n):ai},ia.matches=function(e,t){return ia(e,null,null,t)},ia.matchesSelector=function(e,t){if((e.ownerDocument||e)!==ai&&ii(e),t=t.replace(Ki,"='$1']"),Yo.matchesSelector&&ci&&(!fi||!fi.test(t))&&(!si||!si.test(t)))try{var n=undefined.call(e,t)
if(n||Yo.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch($E){}return ia(t,ai,null,[e]).length>0},ia.contains=function(e,t){return(e.ownerDocument||e)!==ai&&ii(e),li(e,t)},ia.attr=function(e,t){(e.ownerDocument||e)!==ai&&ii(e)
var n=Go.attrHandle[t.toLowerCase()],r=n&&Bi.call(Go.attrHandle,t.toLowerCase())?n(e,t,!ci):void 0
return void 0!==r?r:Yo.attributes||!ci?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},ia.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ia.uniqueSort=function(e){var t,n=[],r=0,o=0
if(oi=!Yo.detectDuplicates,ri=!Yo.sortStable&&e.slice(0),e.sort(Ai),oi){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)e.splice(n[r],1)}return ri=null,e},Jo=ia.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=Jo(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=Jo(t)
return n},(Go=ia.selectors={cacheLength:50,createPseudo:ua,match:Gi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ra,oa),e[3]=(e[3]||e[4]||e[5]||"").replace(ra,oa),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ia.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ia.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return Gi.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Xi.test(n)&&(t=Zo(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ra,oa).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_i[e+" "]
return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+zi+"|$)"))&&_i(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Di&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=ia.attr(r,e)
return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,c){var s,f,l,d,m,p,g=i!==a?"nextSibling":"previousSibling",h=t.parentNode,v=u&&t.nodeName.toLowerCase(),y=!c&&!u
if(h){if(i){for(;g;){for(l=t;l=l[g];)if(u?l.nodeName.toLowerCase()===v:1===l.nodeType)return!1
p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?h.firstChild:h.lastChild],a&&y){for(m=(s=(f=h[Si]||(h[Si]={}))[e]||[])[0]===Ei&&s[1],d=s[0]===Ei&&s[2],l=m&&h.childNodes[m];l=++m&&l&&l[g]||(d=m=0)||p.pop();)if(1===l.nodeType&&++d&&l===t){f[e]=[Ei,m,d]
break}}else if(y&&(s=(t[Si]||(t[Si]={}))[e])&&s[0]===Ei)d=s[1]
else for(;(l=++m&&l&&l[g]||(d=m=0)||p.pop())&&((u?l.nodeName.toLowerCase()!==v:1!==l.nodeType)||!++d||(y&&((l[Si]||(l[Si]={}))[e]=[Ei,d]),l!==t)););return(d-=o)===r||d%r==0&&d/r>=0}}},PSEUDO:function(e,t){var n,r=Go.pseudos[e]||Go.setFilters[e.toLowerCase()]||ia.error("unsupported pseudo: "+e)
return r[Si]?r(t):r.length>1?(n=[e,e,"",t],Go.setFilters.hasOwnProperty(e.toLowerCase())?ua((function(e,n){for(var o,i=r(e,t),a=i.length;a--;)e[o=Ui.call(e,i[a])]=!(n[o]=i[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:ua((function(e){var t=[],n=[],r=ei(e.replace(qi,"$1"))
return r[Si]?ua((function(e,t,n,o){for(var i,a=r(e,null,o,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),!n.pop()}})),has:ua((function(e){return function(t){return ia(e,t).length>0}})),contains:ua((function(e){return e=e.replace(ra,oa),function(t){return(t.textContent||t.innerText||Jo(t)).indexOf(e)>-1}})),lang:ua((function(e){return Yi.test(e||"")||ia.error("unsupported lang: "+e),e=e.replace(ra,oa).toLowerCase(),function(t){var n
do{if(n=ci?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===ui},focus:function(e){return e===ai.activeElement&&(!ai.hasFocus||ai.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!Go.pseudos.empty(e)},header:function(e){return Qi.test(e.nodeName)},input:function(e){return Ji.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:sa((function(){return[0]})),last:sa((function(e,t){return[t-1]})),eq:sa((function(e,t,n){return[n<0?n+t:n]})),even:sa((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:sa((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:sa((function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r)
return e})),gt:sa((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=Go.pseudos.eq,U(["radio","checkbox","file","password","image"],(function(e){Go.pseudos[e]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(e)})),U(["submit","reset"],(function(e){Go.pseudos[e]=function(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}(e)})),la.prototype=Go.filters=Go.pseudos,Go.setFilters=new la,Zo=ia.tokenize=function(e,t){var n,r,o,i,a,u,c,s=Ri[e+" "]
if(s)return t?0:s.slice(0)
for(a=e,u=[],c=Go.preFilter;a;){for(i in n&&!(r=$i.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=Wi.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(qi," ")}),a=a.slice(n.length)),Go.filter)Go.filter.hasOwnProperty(i)&&(!(r=Gi[i].exec(a))||c[i]&&!(r=c[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length)))
if(!n)break}return t?a.length:a?ia.error(e):Ri(e,u).slice(0)},ei=ia.compile=function(e,t){var n,r=[],o=[],i=Ti[e+" "]
if(!i){for(t||(t=Zo(e)),n=t.length;n--;)(i=va(t[n]))[Si]?r.push(i):o.push(i);(i=Ti(e,function(e,t){var n=t.length>0,r=e.length>0,o=function(o,i,a,u,c){var s,f,l,d=0,m="0",p=o&&[],g=[],h=ni,v=o||r&&Go.find.TAG("*",c),y=Ei+=null==h?1:Math.random()||.1,b=v.length
for(c&&(ni=i!==ai&&i);m!==b&&null!=(s=v[m]);m++){if(r&&s){for(f=0;l=e[f++];)if(l(s,i,a)){u.push(s)
break}c&&(Ei=y)}n&&((s=!l&&s)&&d--,o&&p.push(s))}if(d+=m,n&&m!==d){for(f=0;l=t[f++];)l(p,g,i,a)
if(o){if(d>0)for(;m--;)p[m]||g[m]||(g[m]=Li.call(u))
g=ga(g)}Mi.apply(u,g),c&&!o&&g.length>0&&d+t.length>1&&ia.uniqueSort(u)}return c&&(Ei=y,ni=h),p}
return n?ua(o):o}(o,r))).selector=e}return i},ti=ia.select=function(e,t,n,r){var o,i,a,u,c,s="function"==typeof e&&e,f=!r&&Zo(e=s.selector||e)
if(n=n||[],1===f.length){if((i=f[0]=f[0].slice(0)).length>2&&"ID"===(a=i[0]).type&&Yo.getById&&9===t.nodeType&&ci&&Go.relative[i[1].type]){if(!(t=(Go.find.ID(a.matches[0].replace(ra,oa),t)||[])[0]))return n
s&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=Gi.needsContext.test(e)?0:i.length;o--&&(a=i[o],!Go.relative[u=a.type]);)if((c=Go.find[u])&&(r=c(a.matches[0].replace(ra,oa),ta.test(i[0].type)&&fa(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&da(i)))return Mi.apply(n,r),n
break}}return(s||ei(e,f))(r,t,!ci,n,ta.test(e)&&fa(t.parentNode)||t),n},Yo.sortStable=Si.split("").sort(Ai).join("")===Si,Yo.detectDuplicates=!!oi,ii(),Yo.sortDetached=!0
var ya=document,ba=Array.prototype.push,Ca=Array.prototype.slice,wa=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,xa=xi.Event,Sa=ht.makeMap("children,contents,next,prev"),Na=function(e){return void 0!==e},Ea=function(e){return"string"==typeof e},ka=function(e,t){var n,r=(t=t||ya).createElement("div"),o=t.createDocumentFragment()
for(r.innerHTML=e;n=r.firstChild;)o.appendChild(n)
return o},_a=function(e,t,n,r){var o
if(Ea(t))t=ka(t,ja(e[0]))
else if(t.length&&!t.nodeType){if(t=$a.makeArray(t),r)for(o=t.length-1;o>=0;o--)_a(e,t[o],n,r)
else for(o=0;o<t.length;o++)_a(e,t[o],n,r)
return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t)
return e},Ra=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},Ta=function(e,t,n){var r,o
return t=$a(t)[0],e.each((function(){var e=this
n&&r===e.parentNode||(r=e.parentNode,o=t.cloneNode(!1),e.parentNode.insertBefore(o,e)),o.appendChild(e)})),e},Aa=ht.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),Da=ht.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),Oa={for:"htmlFor",class:"className",readonly:"readOnly"},Ba={float:"cssFloat"},Pa={},La={},Ia=function(e,t){return new $a.fn.init(e,t)},Ma=/^\s*|\s*$/g,Fa=function(e){return null==e?"":(""+e).replace(Ma,"")},Ua=function(e,t){var n,r,o,i
if(e)if(void 0===(n=e.length)){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},za=function(e,t){var n=[]
return Ua(e,(function(e,r){t(r,e)&&n.push(r)})),n},ja=function(e){return e?9===e.nodeType?e:e.ownerDocument:ya}
Ia.fn=Ia.prototype={constructor:Ia,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this
if(!e)return o
if(e.nodeType)return o.context=o[0]=e,o.length=1,o
if(t&&t.nodeType)o.context=t
else{if(t)return $a(e).attr(t)
o.context=t=document}if(Ea(e)){if(o.selector=e,!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:wa.exec(e)))return $a(t).find(e)
if(n[1])for(r=ka(e,ja(t)).firstChild;r;)ba.call(o,r),r=r.nextSibling
else{if(!(r=ja(t).getElementById(n[2])))return o
if(r.id!==n[2])return o.find(e)
o.length=1,o[0]=r}}else this.add(e,!1)
return o},toArray:function(){return ht.toArray(this)},add:function(e,t){var n,r,o=this
if(Ea(e))return o.add($a(e))
if(!1!==t)for(n=$a.unique(o.toArray().concat($a.makeArray(e))),o.length=n.length,r=0;r<n.length;r++)o[r]=n[r]
else ba.apply(o,$a.makeArray(e))
return o},attr:function(e,t){var n,r=this
if("object"==typeof e)Ua(e,(function(e,t){r.attr(e,t)}))
else{if(!Na(t)){if(r[0]&&1===r[0].nodeType){if((n=Pa[e])&&n.get)return n.get(r[0],e)
if(Da[e])return r.prop(e)?e:void 0
null===(t=r[0].getAttribute(e,2))&&(t=void 0)}return t}this.each((function(){var n
if(1===this.nodeType){if((n=Pa[e])&&n.set)return void n.set(this,t)
null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}}))}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this
if("object"==typeof(e=Oa[e]||e))Ua(e,(function(e,t){n.prop(e,t)}))
else{if(!Na(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t
this.each((function(){1===this.nodeType&&(this[e]=t)}))}return n},css:function(e,t){var n,r,o=this,i=function(e){return e.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()}))},a=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e}))}
if("object"==typeof e)Ua(e,(function(e,t){o.css(e,t)}))
else if(Na(t))e=i(e),"number"!=typeof t||Aa[e]||(t=t.toString()+"px"),o.each((function(){var n=this.style
if((r=La[e])&&r.set)r.set(this,t)
else{try{this.style[Ba[e]||e]=t}catch(o){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(a(e)):n.removeAttribute(e))}}))
else{if(n=o[0],(r=La[e])&&r.get)return r.get(n)
if(!n.ownerDocument.defaultView)return n.currentStyle?n.currentStyle[i(e)]:""
try{return n.ownerDocument.defaultView.getComputedStyle(n,null).getPropertyValue(a(e))}catch(u){return}}return o},remove:function(){for(var e,t=this.length;t--;)e=this[t],xa.clean(e),e.parentNode&&e.parentNode.removeChild(e)
return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild)
return this},html:function(e){var t,n=this
if(Na(e)){t=n.length
try{for(;t--;)n[t].innerHTML=e}catch(r){$a(n[t]).empty().append(e)}return n}return n[0]?n[0].innerHTML:""},text:function(e){var t,n=this
if(Na(e)){for(t=n.length;t--;)"innerText"in n[t]?n[t].innerText=e:n[0].textContent=e
return n}return n[0]?n[0].innerText||n[0].textContent:""},append:function(){return _a(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)}))},prepend:function(){return _a(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)}),!0)},before:function(){var e=this
return e[0]&&e[0].parentNode?_a(e,arguments,(function(e){this.parentNode.insertBefore(e,this)})):e},after:function(){var e=this
return e[0]&&e[0].parentNode?_a(e,arguments,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}),!0):e},appendTo:function(e){return $a(e).append(this),this},prependTo:function(e){return $a(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return Ta(this,e)},wrapAll:function(e){return Ta(this,e,!0)},wrapInner:function(e){return this.each((function(){$a(this).contents().wrapAll(e)})),this},unwrap:function(){return this.parent().each((function(){$a(this).replaceWith(this.childNodes)}))},clone:function(){var e=[]
return this.each((function(){e.push(this.cloneNode(!0))})),$a(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this
return"string"!=typeof e||(-1!==e.indexOf(" ")?Ua(e.split(" "),(function(){n.toggleClass(this,t)})):n.each((function(n,r){var o=Ra(r,e)
if(o!==t){var i=r.className
o?r.className=Fa((" "+i+" ").replace(" "+e+" "," ")):r.className+=i?" "+e:e}}))),n},hasClass:function(e){return Ra(this[0],e)},each:function(e){return Ua(this,e)},on:function(e,t){return this.each((function(){xa.bind(this,e,t)}))},off:function(e,t){return this.each((function(){xa.unbind(this,e,t)}))},trigger:function(e){return this.each((function(){"object"==typeof e?xa.fire(this,e.type,e):xa.fire(this,e)}))},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new $a(Ca.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[]
for(t=0,n=this.length;t<n;t++)$a.find(e,this[t],r)
return $a(r)},filter:function(e){return $a("function"==typeof e?za(this.toArray(),(function(t,n){return e(n,t)})):$a.filter(e,this.toArray()))},closest:function(e){var t=[]
return e instanceof $a&&(e=e[0]),this.each((function(n,r){for(;r;){if("string"==typeof e&&$a(r).is(e)){t.push(r)
break}if(r===e){t.push(r)
break}r=r.parentNode}})),$a(t)},offset:function(e){var t,n,r,o,i=0,a=0
return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:ba,sort:Array.prototype.sort,splice:Array.prototype.splice},ht.extend(Ia,{extend:ht.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:ht.toArray(e)
var t},inArray:function(e,t){var n
if(t.indexOf)return t.indexOf(e)
for(n=t.length;n--;)if(t[n]===e)return n
return-1},isArray:ht.isArray,each:Ua,trim:Fa,grep:za,find:ia,expr:ia.selectors,unique:ia.uniqueSort,text:ia.getText,contains:ia.contains,filter:function(e,t,n){var r=t.length
for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1)
return t=1===t.length?$a.find.matchesSelector(t[0],e)?[t[0]]:[]:$a.find.matches(e,t)}})
var Ha=function(e,t,n){var r=[],o=e[t]
for("string"!=typeof n&&n instanceof $a&&(n=n[0]);o&&9!==o.nodeType;){if(void 0!==n){if(o===n)break
if("string"==typeof n&&$a(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},Va=function(e,t,n,r){var o=[]
for(r instanceof $a&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(void 0!==r){if(e===r)break
if("string"==typeof r&&$a(e).is(r))break}o.push(e)}return o},qa=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e
return null}
Ua({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return Ha(e,"parentNode")},next:function(e){return qa(e,"nextSibling",1)},prev:function(e){return qa(e,"previousSibling",1)},children:function(e){return Va(e.firstChild,"nextSibling",1)},contents:function(e){return ht.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},(function(e,t){Ia.fn[e]=function(n){var r=[]
this.each((function(){var e=t.call(r,this,n,r)
e&&($a.isArray(e)?r.push.apply(r,e):r.push(e))})),this.length>1&&(Sa[e]||(r=$a.unique(r)),0===e.indexOf("parents")&&(r=r.reverse()))
var o=$a(r)
return n?o.filter(n):o}})),Ua({parentsUntil:function(e,t){return Ha(e,"parentNode",t)},nextUntil:function(e,t){return Va(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return Va(e,"previousSibling",1,t).slice(1)}},(function(e,t){Ia.fn[e]=function(n,r){var o=[]
this.each((function(){var e=t.call(o,this,n,o)
e&&($a.isArray(e)?o.push.apply(o,e):o.push(e))})),this.length>1&&(o=$a.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse()))
var i=$a(o)
return r?i.filter(r):i}})),Ia.fn.is=function(e){return!!e&&this.filter(e).length>0},Ia.fn.init.prototype=Ia.fn,Ia.overrideDefaults=function(e){var t,n=function(r,o){return t=t||e(),0===arguments.length&&(r=t.element),o||(o=t.context),new n.fn.init(r,o)}
return $a.extend(n,this),n},Ia.attrHooks=Pa,Ia.cssHooks=La
var $a=Ia,Wa=ht.each,Ka=ht.grep,Xa=lt.ie,Ya=/^([a-z0-9],?)+$/i,Ga=function(e,t){var n=t.attr("style"),r=e.serialize(e.parse(n),t[0].nodeName)
r||(r=null),t.attr("data-mce-style",r)},Ja=function(e,t){var n,r,o=0
if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r)
return o}
function Qa(e,t){var n=this
void 0===t&&(t={})
var r={},o=window,i={},a=0,c=kr.forElement(yt.fromDom(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),s=[],f=t.schema?t.schema:Xo({}),l=mi({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),d=t.ownEvents?new xi:xi.Event,m=f.getBlockElements(),p=$a.overrideDefaults((function(){return{context:e,element:V.getRoot()}})),g=function(t){return t&&e&&S(t)?e.getElementById(t):t},h=function(e){return p("string"==typeof e?g(e):e)},v=function(e,t,n){var r,o,i=h(e)
return i.length&&(o=(r=q[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},y=function(e){var t=g(e)
return t?t.attributes:[]},b=function(e,n,r){""===r&&(r=null)
var o=h(e),i=o.attr(n)
if(o.length){var a=q[n]
a&&a.set?a.set(o,r,n):o.attr(n,r),i!==r&&t.onSetAttrib&&t.onSetAttrib({attrElm:o,attrName:n,attrValue:r})}},C=function(){return t.root_element||e.body},w=function(t,n){return Gn(e.body,g(t),n)},x=function(e,t,n){var r=h(e)
return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()})))&&(t=lt.browser.isIE()?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:void 0)},N=function(e){var t,n
return e=g(e),t=x(e,"width"),n=x(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},E=function(e,t){var n
if(!e)return!1
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(Ya.test(t)){var r=t.toLowerCase().split(/,/),o=e.nodeName.toLowerCase()
for(n=r.length-1;n>=0;n--)if(r[n]===o)return!0
return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e]
return ia(t,i[0].ownerDocument||i[0],null,i).length>0},k=function(e,t,n,r){var o,i=[],a=g(e)
for(r=void 0===r,n=n||("BODY"!==C().nodeName?C().parentNode:null),ht.is(t,"string")&&(o=t,t="*"===t?function(e){return 1===e.nodeType}:function(e){return E(e,o)});a&&a!==n&&a.nodeType&&9!==a.nodeType;){if(!t||"function"==typeof t&&t(a)){if(!r)return[a]
i.push(a)}a=a.parentNode}return r?i:null},_=function(e,t,n){var r=t
if(e)for("string"==typeof t&&(r=function(e){return E(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e
return null},R=function(e,t,r){var o,i="string"==typeof e?g(e):e
if(!i)return!1
if(ht.isArray(i)&&(i.length||0===i.length))return o=[],Wa(i,(function(e,n){e&&o.push(t.call(r,"string"==typeof e?g(e):e,n))})),o
var a=r||n
return t.call(a,i)},T=function(e,t){h(e).each((function(e,n){Wa(t,(function(e,t){b(n,t,e)}))}))},A=function(e,t){var n=h(e)
Xa?n.each((function(e,n){if(!1!==n.canHaveHTML){for(;n.firstChild;)n.removeChild(n.firstChild)
try{n.innerHTML="<br>"+t,n.removeChild(n.firstChild)}catch(r){$a("<div></div>").html("<br>"+t).contents().slice(1).appendTo(n)}return t}})):n.html(t)},D=function(t,n,r,o,i){return R(t,(function(t){var a="string"==typeof n?e.createElement(n):n
return T(a,r),o&&("string"!=typeof o&&o.nodeType?a.appendChild(o):"string"==typeof o&&A(a,o)),i?a:t.appendChild(a)}))},O=function(t,n,r){return D(e.createElement(t),t,n,r,!0)},B=Fo.encodeAllRaw,P=function(e,t){var n=h(e)
return t?n.each((function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)})).remove():n.remove(),n.length>1?n.toArray():n[0]},L=function(e,t,n){h(e).toggleClass(t,n).each((function(){""===this.className&&$a(this).attr("class",null)}))},I=function(e,t,n){return R(t,(function(t){return ht.is(t,"array")&&(e=e.cloneNode(!0)),n&&Wa(Ka(t.childNodes),(function(t){e.appendChild(t)})),t.parentNode.replaceChild(e,t)}))},M=function(e){if(yn(e)){var t="a"===e.nodeName.toLowerCase()&&!v(e,"href")&&v(e,"id")
if(v(e,"name")||v(e,"data-mce-bookmark")||t)return!0}return!1},F=function(){return e.createRange()},z=function(n,r,i,a){if(ht.isArray(n)){for(var u=n.length,c=[];u--;)c[u]=z(n[u],r,i,a)
return c}return!t.collect||n!==e&&n!==o||s.push([n,r,i,a]),d.bind(n,r,i,a||V)},j=function(t,n,r){if(ht.isArray(t)){for(var i=t.length,a=[];i--;)a[i]=j(t[i],n,r)
return a}if(s.length>0&&(t===e||t===o))for(i=s.length;i--;){var u=s[i]
t!==u[0]||n&&n!==u[1]||r&&r!==u[2]||d.unbind(u[0],u[1],u[2])}return d.unbind(t,n,r)},H=function(e){if(e&&yn(e)){var t=e.getAttribute("data-mce-contenteditable")
return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},V={doc:e,settings:t,win:o,files:i,stdMode:!0,boxModel:!0,styleSheetLoader:c,boundEvents:s,styles:l,schema:f,events:d,isBlock:function(e){if("string"==typeof e)return!!m[e]
if(e){var t=e.nodeType
if(t)return!(1!==t||!m[e.nodeName])}return!1},$:p,$$:h,root:null,clone:function(t,n){if(!Xa||1!==t.nodeType||n)return t.cloneNode(n)
var r=e.createElement(t.nodeName)
return Wa(y(t),(function(e){b(r,e.nodeName,v(t,e.nodeName))})),r},getRoot:C,getViewPort:function(e){var t=gn(e)
return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:function(e){e=g(e)
var t=w(e),n=N(e)
return{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:N,getParent:function(e,t,n){var r=k(e,t,n,!1)
return r&&r.length>0?r[0]:null},getParents:k,get:g,getNext:function(e,t){return _(e,t,"nextSibling")},getPrev:function(e,t){return _(e,t,"previousSibling")},select:function(n,r){return ia(n,g(r)||t.root_element||e,[])},is:E,add:D,create:O,createHTML:function(e,t,n){var r,o=""
for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&void 0!==t[r]&&(o+=" "+r+'="'+B(t[r])+'"')
return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(t){var n,r=e.createElement("div"),o=e.createDocumentFragment()
for(o.appendChild(r),t&&(r.innerHTML=t);n=r.firstChild;)o.appendChild(n)
return o.removeChild(r),o},remove:P,setStyle:function(e,n,r){var o=S(n)?h(e).css(n,r):h(e).css(n)
t.update_styles&&Ga(l,o)},getStyle:x,setStyles:function(e,n){var r=h(e).css(n)
t.update_styles&&Ga(l,r)},removeAllAttribs:function(e){return R(e,(function(e){var t,n=e.attributes
for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))}))},setAttrib:b,setAttribs:T,getAttrib:v,getPos:w,parseStyle:function(e){return l.parse(e)},serializeStyle:function(e,t){return l.serialize(e,t)},addStyle:function(t){var n,o
if(V!==Qa.DOM&&e===document){if(r[t])return
r[t]=!0}(o=e.getElementById("mceDefaultStyles"))||((o=e.createElement("style")).id="mceDefaultStyles",o.type="text/css",(n=e.getElementsByTagName("head")[0]).firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o)),o.styleSheet?o.styleSheet.cssText+=t:o.appendChild(e.createTextNode(t))},loadCSS:function(e){e||(e=""),U(e.split(","),(function(e){i[e]=!0,c.load(e,u)}))},addClass:function(e,t){h(e).addClass(t)},removeClass:function(e,t){L(e,t,!1)},hasClass:function(e,t){return h(e).hasClass(t)},toggleClass:L,show:function(e){h(e).show()},hide:function(e){h(e).hide()},isHidden:function(e){return"none"===h(e).css("display")},uniqueId:function(e){return(e||"mce_")+a++},setHTML:A,getOuterHTML:function(e){var t="string"==typeof e?g(e):e
return yn(t)?t.outerHTML:$a("<div></div>").append($a(t).clone()).html()},setOuterHTML:function(e,t){h(e).each((function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}P($a(this).html(t),!0)}))},decode:Fo.decode,encode:B,insertAfter:function(e,t){var n=g(t)
return R(e,(function(e){var t=n.parentNode,r=n.nextSibling
return r?t.insertBefore(e,r):t.appendChild(e),e}))},replace:I,rename:function(e,t){var n
return e.nodeName!==t.toUpperCase()&&(n=O(t),Wa(y(e),(function(t){b(n,t.nodeName,v(e,t.nodeName))})),I(n,e,!0)),n||e},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode
if(r===n)break
r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return l.toHex(ht.trim(e))},run:R,getAttribs:y,isEmpty:function(e,t){var n,r,o=0
if(M(e))return!1
if(e=e.firstChild){var i=new _r(e,e.parentNode),a=f?f.getWhiteSpaceElements():{}
t=t||(f?f.getNonEmptyElements():null)
do{if(n=e.nodeType,yn(e)){var u=e.getAttribute("data-mce-bogus")
if(u){e=i.next("all"===u)
continue}if(r=e.nodeName.toLowerCase(),t&&t[r]){if("br"===r){o++,e=i.next()
continue}return!1}if(M(e))return!1}if(8===n)return!1
if(3===n&&!po(e.nodeValue))return!1
if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&po(e.nodeValue))return!1
e=i.next()}while(e)}return o<=1},createRng:F,nodeIndex:Ja,split:function(e,t,n){var r,o,i,a=F()
if(e&&t)return a.setStart(e.parentNode,Ja(e)),a.setEnd(t.parentNode,Ja(t)),r=a.extractContents(),(a=F()).setStart(t.parentNode,Ja(t)+1),a.setEnd(e.parentNode,Ja(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(No(V,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(No(V,o),e),P(e),n||t},bind:z,unbind:j,fire:function(e,t,n){return d.fire(e,t,n)},getContentEditable:H,getContentEditableParent:function(e){for(var t=C(),n=null;e&&e!==t&&null===(n=H(e));e=e.parentNode);return n},destroy:function(){if(s.length>0)for(var e=s.length;e--;){var t=s[e]
d.unbind(t[0],t[1],t[2])}te(i,(function(e,t){c.unload(t),delete i[t]})),ia.setDocument&&ia.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0
e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}},q=function(e,t,n){var r=t.keep_values,o={set:function(e,r,o){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||n(),r,o,e[0])),e.attr("data-mce-"+o,r).attr(o,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},i={style:{set:function(t,n){null===n||"object"!=typeof n?(r&&t.attr("data-mce-style",n),null!==n&&"string"==typeof n?(t.removeAttr("style"),t.css(e.parse(n))):t.attr("style",n)):t.css(n)},get:function(t){var n=t.attr("data-mce-style")||t.attr("style")
return e.serialize(e.parse(n),t[0].nodeName)}}}
return r&&(i.href=i.src=o),i}(l,t,(function(){return V}))
return V}(function(e){e.DOM=e(document),e.nodeIndex=Ja})(Qa||(Qa={}))
var Za=Qa,eu=Za.DOM,tu=ht.each,nu=ht.grep,ru=function(){function e(e){void 0===e&&(e={}),this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=0,this.settings=e}return e.prototype._setReferrerPolicy=function(e){this.settings.referrerPolicy=e},e.prototype.loadScript=function(e,t,n){var r,o=eu,i=o.uniqueId();(r=document.createElement("script")).id=i,r.type="text/javascript",r.src=ht._addCacheSuffix(e),this.settings.referrerPolicy&&o.setAttrib(r,"referrerpolicy",this.settings.referrerPolicy),r.onload=function(){o.remove(i),r&&(r.onreadystatechange=r.onload=r=null),t()},r.onerror=function(){A(n)?n():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(r)},e.prototype.isDone=function(e){return 2===this.states[e]},e.prototype.markDone=function(e){this.states[e]=2},e.prototype.add=function(e,t,n,r){void 0===this.states[e]&&(this.queue.push(e),this.states[e]=0),t&&(this.scriptLoadedCallbacks[e]||(this.scriptLoadedCallbacks[e]=[]),this.scriptLoadedCallbacks[e].push({success:t,failure:r,scope:n||this}))},e.prototype.load=function(e,t,n,r){return this.add(e,t,n,r)},e.prototype.remove=function(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]},e.prototype.loadQueue=function(e,t,n){this.loadScripts(this.queue,e,t,n)},e.prototype.loadScripts=function(e,t,n,r){var o=this,i=[],a=function(e,t){tu(o.scriptLoadedCallbacks[t],(function(t){A(t[e])&&t[e].call(t.scope)})),o.scriptLoadedCallbacks[t]=void 0}
o.queueLoadedCallbacks.push({success:t,failure:r,scope:n||this})
var u=function(){var t=nu(e)
if(e.length=0,tu(t,(function(e){2!==o.states[e]?3!==o.states[e]?1!==o.states[e]&&(o.states[e]=1,o.loading++,o.loadScript(e,(function(){o.states[e]=2,o.loading--,a("success",e),u()}),(function(){o.states[e]=3,o.loading--,i.push(e),a("failure",e),u()}))):a("failure",e):a("success",e)})),!o.loading){var n=o.queueLoadedCallbacks.slice(0)
o.queueLoadedCallbacks.length=0,tu(n,(function(e){0===i.length?A(e.success)&&e.success.call(e.scope):A(e.failure)&&e.failure.call(e.scope,i)}))}}
u()},e.ScriptLoader=new e,e}(),ou=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},iu={},au=ou("en"),uu=function(){return se(iu,au.get())},cu={getData:function(){return ne(iu,(function(e){return be({},e)}))},setCode:function(e){e&&au.set(e)},getCode:function(){return au.get()},add:function(e,t){var n=iu[e]
n||(iu[e]=n={}),te(t,(function(e,t){n[t.toLowerCase()]=e}))},translate:function(e){var t,n=uu().getOr({}),r=function(e){return A(e)?Object.prototype.toString.call(e):o(e)?"":""+e},o=function(e){return""===e||null==e},i=function(e){var t=r(e)
return se(n,t.toLowerCase()).map(r).getOr(t)},a=function(e){return e.replace(/{context:\w+}$/,"")}
if(o(e))return""
if(N(t=e)&&fe(t,"raw"))return r(e.raw)
if(function(e){return E(e)&&e.length>1}(e)){var u=e.slice(1)
return a(i(e[0]).replace(/\{([0-9]+)\}/g,(function(e,t){return fe(u,t)?r(u[t]):e})))}return a(i(e))},isRtl:function(){return uu().bind((function(e){return se(e,"_dir")})).exists((function(e){return"rtl"===e}))},hasCode:function(e){return fe(iu,e)}}
function su(){var e=this,t=[],n={},r={},o=[],i=function(e,t){var n=j(o,(function(n){return n.name===e&&n.state===t}))
U(n,(function(e){return e.callback()}))},a=function(e){var t
return r[e]&&(t=r[e].dependencies),t||[]},u=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},c=function(e,t,o,s,f){if(!n[e]){var l="string"==typeof t?t:t.prefix+t.resource+t.suffix
0!==l.indexOf("/")&&-1===l.indexOf("://")&&(l=su.baseURL+"/"+l),n[e]=l.substring(0,l.lastIndexOf("/"))
var d=function(){i(e,"loaded"),function(e,t,n,r){var o=a(e)
U(o,(function(e){var n=u(t,e)
c(n.resource,n,void 0,void 0)})),n&&(r?n.call(r):n.call(ru))}(e,t,o,s)}
r[e]?d():ru.ScriptLoader.add(l,d,s,f)}},s=function(e,t,i){void 0===i&&(i="added"),fe(r,e)&&"added"===i||fe(n,e)&&"loaded"===i?t():o.push({name:e,state:i,callback:t})}
return{items:t,urls:n,lookup:r,_listeners:o,get:function(e){if(r[e])return r[e].instance},dependencies:a,requireLangPack:function(e,t){!1!==su.languageLoad&&s(e,(function(){var r=cu.getCode()
!r||t&&-1===(","+(t||"")+",").indexOf(","+r+",")||ru.ScriptLoader.add(n[e]+"/langs/"+r+".js")}),"loaded")},add:function(e,n,o){var a=n
return t.push(a),r[e]={instance:a,dependencies:o},i(e,"added"),a},remove:function(e){delete n[e],delete r[e]},createUrl:u,addComponents:function(t,n){var r=e.urls[t]
U(n,(function(e){ru.ScriptLoader.add(r+"/"+e)}))},load:c,waitFor:s}}(function(e){e.PluginManager=e(),e.ThemeManager=e()})(su||(su={}))
var fu=su,lu=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null===n&&(n=setTimeout((function(){e.apply(null,r),n=null}),t))}}},du=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null!==n&&clearTimeout(n),n=setTimeout((function(){e.apply(null,r),n=null}),t)}}},mu=function(e,t){var n=zn(e,t)
return void 0===n||""===n?[]:n.split(" ")},pu=function(e){return void 0!==e.dom.classList},gu=function(e,t){return function(e,t,n){var r=mu(e,t).concat([n])
return Fn(e,t,r.join(" ")),!0}(e,"class",t)},hu=function(e,t){return function(e,t,n){var r=j(mu(e,t),(function(e){return e!==n}))
return r.length>0?Fn(e,t,r.join(" ")):jn(e,t),!1}(e,"class",t)},vu=function(e,t){pu(e)?e.dom.classList.add(t):gu(e,t)},yu=function(e){0===(pu(e)?e.dom.classList:function(e){return mu(e,"class")}(e)).length&&jn(e,"class")},bu=function(e,t){return pu(e)&&e.dom.classList.contains(t)},Cu=function(e,t){var n=[]
return U(zt(e),(function(e){t(e)&&(n=n.concat([e])),n=n.concat(Cu(e,t))})),n},wu=function(e,t){return function(e,t){var n=void 0===t?document:t.dom
return wt(n)?[]:F(n.querySelectorAll(e),yt.fromDom)}(t,e)},xu=s("mce-annotation"),Su=s("data-mce-annotation"),Nu=s("data-mce-annotation-uid"),Eu=function(e,t){var n=e.selection.getRng(),r=yt.fromDom(n.startContainer),o=yt.fromDom(e.getBody()),i=t.fold((function(){return"."+xu()}),(function(e){return"["+Su()+'="'+e+'"]'})),a=jt(r,n.startOffset).getOr(r),u=vr(a,i,(function(e){return xt(e,o)})),c=function(e,t){return function(e,t){var n=e.dom
return!(!n||!n.hasAttribute)&&n.hasAttribute(t)}(e,t)?b.some(zn(e,t)):b.none()}
return u.bind((function(t){return c(t,""+Nu()).bind((function(n){return c(t,""+Su()).map((function(t){var r=ku(e,n)
return{uid:n,name:t,elements:r}}))}))}))},ku=function(e,t){var n=yt.fromDom(e.getBody())
return wu(n,"["+Nu()+'="'+t+'"]')},_u=function(e,t){var n=ou({}),r=function(e,t){o(e,(function(e){return t(e),e}))},o=function(e,t){var r=n.get(),o=t(r.hasOwnProperty(e)?r[e]:{listeners:[],previous:ou(b.none())})
r[e]=o,n.set(r)},i=du((function(){var t,i,a,u=n.get(),c=(t=Z(u),(a=O.call(t,0)).sort(i),a)
U(c,(function(t){o(t,(function(n){var o=n.previous.get()
return Eu(e,b.some(t)).fold((function(){o.isSome()&&(function(e){r(e,(function(t){U(t.listeners,(function(t){return t(!1,e)}))}))}(t),n.previous.set(b.none()))}),(function(e){var t=e.uid,i=e.name,a=e.elements
o.is(t)||(function(e,t,n){r(e,(function(r){U(r.listeners,(function(r){return r(!0,e,{uid:t,nodes:F(n,(function(e){return e.dom}))})}))}))}(i,t,a),n.previous.set(b.some(t)))})),{previous:n.previous,listeners:n.listeners}}))}))}),30)
e.on("remove",(function(){i.cancel()})),e.on("NodeChange",(function(){i.throttle()}))
return{addListener:function(e,t){o(e,(function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}}))}}},Ru=function(e,t){e.on("init",(function(){e.serializer.addNodeFilter("span",(function(e){U(e,(function(e){(function(e){return b.from(e.attr(Su())).bind(t.lookup)})(e).each((function(t){!1===t.persistent&&e.unwrap()}))}))}))}))},Tu=0,Au=function(e){var t=(new Date).getTime()
return e+"_"+Math.floor(1e9*Math.random())+ ++Tu+String(t)},Du=function(e,t){var n,r,o=Ot(e).dom,i=yt.fromDom(o.createDocumentFragment()),a=(n=t,(r=(o||document).createElement("div")).innerHTML=n,zt(yt.fromDom(r)))
tn(i,a),nn(e),en(e,i)},Ou=function(e,t){return yt.fromDom(e.dom.cloneNode(t))},Bu=function(e){return Ou(e,!1)},Pu=function(e){return Ou(e,!0)},Lu=function(e,t,n){void 0===n&&(n=p)
var r=new _r(e,t),o=function(e){var t
do{t=r[e]()}while(t&&!kn(t)&&!n(t))
return b.from(t).filter(kn)}
return{current:function(){return b.from(r.current()).filter(kn)},next:function(){return o("next")},prev:function(){return o("prev")},prev2:function(){return o("prev2")}}},Iu=function(e,t){var n=t||function(t){return e.isBlock(t)||An(t)||Bn(t)},r=function(e,t,n,o){if(kn(e)){var i=o(e,t,e.data)
if(-1!==i)return b.some({container:e,offset:i})}return n().bind((function(e){return r(e.container,e.offset,n,o)}))}
return{backwards:function(e,t,o,i){var a=Lu(e,i,n)
return r(e,t,(function(){return a.prev().map((function(e){return{container:e,offset:e.length}}))}),o).getOrNull()},forwards:function(e,t,o,i){var a=Lu(e,i,n)
return r(e,t,(function(){return a.next().map((function(e){return{container:e,offset:0}}))}),o).getOrNull()}}},Mu=function(e,t,n){return e.isSome()&&t.isSome()?b.some(n(e.getOrDie(),t.getOrDie())):b.none()},Fu=Math.round,Uu=function(e){return e?{left:Fu(e.left),top:Fu(e.top),bottom:Fu(e.bottom),right:Fu(e.right),width:Fu(e.width),height:Fu(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},zu=function(e,t){return e=Uu(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},ju=function(e,t,n){return e>=0&&e<=Math.min(t.height,n.height)/2},Hu=function(e,t){var n=Math.min(t.height/2,e.height/2)
return e.bottom-n<t.top||!(e.top>t.bottom)&&ju(t.top-e.bottom,e,t)},Vu=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&ju(t.bottom-e.top,e,t)},qu=function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom},$u=function(e){var t=e.startContainer,n=e.startOffset
return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},Wu=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},Ku=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"),Xu=function(e){return"string"==typeof e&&e.charCodeAt(0)>=768&&Ku.test(e)},Yu=yn,Gu=so,Ju=Cn("display","block table"),Qu=Cn("float","left right"),Zu=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1
return!0}}(Yu,Gu,d(Qu)),ec=d(Cn("white-space","pre pre-line pre-wrap")),tc=kn,nc=An,rc=Za.nodeIndex,oc=Wu,ic=function(e){return"createRange"in e?e.createRange():Za.DOM.createRng()},ac=function(e){return e&&/[\r\n\t ]/.test(e)},uc=function(e){return!!e.setStart&&!!e.setEnd},cc=function(e){var t,n=e.startContainer,r=e.startOffset
return!!(ac(e.toString())&&ec(n.parentNode)&&kn(n)&&(t=n.data,ac(t[r-1])||ac(t[r+1])))},sc=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},fc=function(e){var t,n=e.getClientRects()
return t=n.length>0?Uu(n[0]):Uu(e.getBoundingClientRect()),!uc(e)&&nc(e)&&sc(t)?function(e){var t=e.ownerDocument,n=ic(t),r=t.createTextNode(Ur),o=e.parentNode
o.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1)
var i=Uu(n.getBoundingClientRect())
return o.removeChild(r),i}(e):sc(t)&&uc(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset
if(t===n&&kn(n)&&0===r&&1===o){var i=e.cloneRange()
return i.setEndAfter(n),fc(i)}return null}(e):t},lc=function(e,t){var n=zu(e,t)
return n.width=1,n.right=n.left+1,n},dc=function(e){var t,n,r=[],o=function(e){var t,n
0!==e.height&&(r.length>0&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=ic(e.ownerDocument)
if(t<e.data.length){if(Xu(e.data[t]))return r
if(Xu(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!cc(n)))return o(lc(fc(n),!1)),r}t>0&&(n.setStart(e,t-1),n.setEnd(e,t),cc(n)||o(lc(fc(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),cc(n)||o(lc(fc(n),!0)))}
if(tc(e.container()))return i(e.container(),e.offset()),r
if(Yu(e.container()))if(e.isAtEnd())n=oc(e.container(),e.offset()),tc(n)&&i(n,n.data.length),Zu(n)&&!nc(n)&&o(lc(fc(n),!1))
else{if(n=oc(e.container(),e.offset()),tc(n)&&i(n,0),Zu(n)&&e.isAtEnd())return o(lc(fc(n),!1)),r
t=oc(e.container(),e.offset()-1),Zu(t)&&!nc(t)&&(Ju(t)||Ju(n)||!Zu(n))&&o(lc(fc(t),!1)),Zu(n)&&o(lc(fc(n),!0))}return r}
function mc(e,t,n){var r=function(){return n||(n=dc(mc(e,t))),n}
return{container:s(e),offset:s(t),toRange:function(){var n=ic(e.ownerDocument)
return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:r,isVisible:function(){return r().length>0},isAtStart:function(){return tc(e),0===t},isAtEnd:function(){return tc(e)?t>=e.data.length:t>=e.childNodes.length},isEqual:function(n){return n&&e===n.container()&&t===n.offset()},getNode:function(n){return oc(e,n?t-1:t)}}}(function(e){e.fromRangeStart=function(t){return e(t.startContainer,t.startOffset)},e.fromRangeEnd=function(t){return e(t.endContainer,t.endOffset)},e.after=function(t){return e(t.parentNode,rc(t)+1)},e.before=function(t){return e(t.parentNode,rc(t))},e.isAbove=function(e,t){return Mu(G(t.getClientRects()),J(e.getClientRects()),Hu).getOr(!1)},e.isBelow=function(e,t){return Mu(J(t.getClientRects()),G(e.getClientRects()),Vu).getOr(!1)},e.isAtStart=function(e){return!!e&&e.isAtStart()},e.isAtEnd=function(e){return!!e&&e.isAtEnd()},e.isTextPosition=function(e){return!!e&&kn(e.container())},e.isElementPosition=function(t){return!1===e.isTextPosition(t)}})(mc||(mc={}))
var pc,gc=mc,hc=function(e,t){kn(t)&&0===t.data.length&&e.remove(t)},vc=function(e,t,n){Tn(n)?function(e,t,n){var r=b.from(n.firstChild),o=b.from(n.lastChild)
t.insertNode(n),r.each((function(t){return hc(e,t.previousSibling)})),o.each((function(t){return hc(e,t.nextSibling)}))}(e,t,n):function(e,t,n){t.insertNode(n),hc(e,n.previousSibling),hc(e,n.nextSibling)}(e,t,n)},yc=kn,bc=xn,Cc=Za.nodeIndex,wc=function(e){var t=e.parentNode
return bc(t)?wc(t):t},xc=function(e){return e?he(e.childNodes,(function(e,t){return bc(t)&&"BR"!==t.nodeName?e=e.concat(xc(t)):e.push(t),e}),[]):[]},Sc=function(e){return function(t){return e===t}},Nc=function(e){return(yc(e)?"text()":e.nodeName.toLowerCase())+"["+function(e){var t,n
t=xc(wc(e)),n=ve(t,Sc(e),e),t=t.slice(0,n+1)
var r=he(t,(function(e,n,r){return yc(n)&&yc(t[r-1])&&e++,e}),0)
return t=pe(t,bn([e.nodeName])),(n=ve(t,Sc(e),e))-r}(e)+"]"},Ec=function(e,t){var n,r,o,i,a,u=[]
return n=t.container(),r=t.offset(),yc(n)?o=function(e,t){for(;(e=e.previousSibling)&&yc(e);)t+=e.data.length
return t}(n,r):(r>=(i=n.childNodes).length?(o="after",r=i.length-1):o="before",n=i[r]),u.push(Nc(n)),a=function(e,t,n){var r=[]
for(t=t.parentNode;!(t===e||n&&n(t));t=t.parentNode)r.push(t)
return r}(e,n),a=pe(a,d(xn)),(u=u.concat(me(a,(function(e){return Nc(e)})))).reverse().join("/")+","+o},kc=function(e,t){var n
if(!t)return null
var r=t.split(","),o=r[0].split("/")
n=r.length>1?r[1]:"before"
var i=he(o,(function(e,t){var n=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
return n?("text()"===n[1]&&(n[1]="#text"),function(e,t,n){var r=xc(e)
return r=pe(r,(function(e,t){return!yc(e)||!yc(r[t-1])})),(r=pe(r,bn([t])))[n]}(e,n[1],parseInt(n[2],10))):null}),e)
return i?yc(i)?function(e,t){for(var n,r=e,o=0;yc(r);){if(n=r.data.length,t>=o&&t<=o+n){e=r,t-=o
break}if(!yc(r.nextSibling)){e=r,t=n
break}o+=n,r=r.nextSibling}return yc(e)&&t>e.data.length&&(t=e.data.length),gc(e,t)}(i,parseInt(n,10)):(n="after"===n?Cc(i)+1:Cc(i),gc(i.parentNode,n)):null},_c=Bn,Rc=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],c=[],s=0,f=e.getRoot()
for(kn(a)?c.push(n?function(e,t,n){var r,o
for(o=e(t.data.slice(0,n)).length,r=t.previousSibling;r&&kn(r);r=r.previousSibling)o+=e(r.data).length
return o}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(s=1,u=Math.max(0,i.length-1)),c.push(e.nodeIndex(i[u],n)+s));a&&a!==f;a=a.parentNode)c.push(e.nodeIndex(a,n))
return c},Tc=function(e,t,n){var r=0
return ht.each(e.select(t),(function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++})),r},Ac=function(e,t){var n,r,o,i=t?"start":"end"
n=e[i+"Container"],r=e[i+"Offset"],yn(n)&&"TR"===n.nodeName&&(n=(o=n.childNodes)[Math.min(t?r:r-1,o.length-1)])&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r))},Dc=function(e){return Ac(e,!0),Ac(e,!1),e},Oc=function(e,t){var n
if(yn(e)&&(e=Wu(e,t),_c(e)))return e
if(Kr(e)){if(kn(e)&&$r(e)&&(e=e.parentNode),n=e.previousSibling,_c(n))return n
if(n=e.nextSibling,_c(n))return n}},Bc=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng()
if(_c(r)||"IMG"===o)return{name:o,index:Tc(n.dom,o,r)}
var a=function(e){return Oc(e.startContainer,e.startOffset)||Oc(e.endContainer,e.endOffset)}(i)
return a?{name:o=a.tagName,index:Tc(n.dom,o,a)}:function(e,t,n,r){var o=t.dom,i={}
return i.start=Rc(o,e,n,r,!0),t.isCollapsed()||(i.end=Rc(o,e,n,r,!1)),i}(e,n,t,i)},Pc=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},Lc=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName
if("IMG"===u)return{name:u,index:Tc(n,u,a)}
var c=Dc(r.cloneRange())
if(!i){c.collapse(!1)
var s=Pc(n,o+"_end",t)
vc(n,c,s)}(r=Dc(r)).collapse(!0)
var f=Pc(n,o+"_start",t)
return vc(n,r,f),e.moveToBookmark({id:o,keep:!0}),{id:o}},Ic=function(e,t,n){return 2===t?Bc(Hr,n,e):3===t?function(e){var t=e.getRng()
return{start:Ec(e.dom.getRoot(),gc.fromRangeStart(t)),end:Ec(e.dom.getRoot(),gc.fromRangeEnd(t))}}(e):t?function(e){return{rng:e.getRng()}}(e):Lc(e,!1)},Mc=l(Bc,f,!0),Fc=Za.DOM,Uc=function(e,t,n){var r=e.getParam(t,n)
if(-1!==r.indexOf("=")){var o=e.getParam(t,"","hash")
return o.hasOwnProperty(e.id)?o[e.id]:n}return r},zc=function(e){return e.getParam("content_security_policy","")},jc=function(e){if(e.getParam("force_p_newlines",!1))return"p"
var t=e.getParam("forced_root_block","p")
return!1===t?"":!0===t?"p":t},Hc=function(e){return e.getParam("forced_root_block_attrs",{})},Vc=function(e){return e.getParam("automatic_uploads",!0,"boolean")},qc=function(e){return e.getParam("images_reuse_filename",!1,"boolean")},$c=function(e){return e.getParam("icons","","string")},Wc=function(e){return e.getParam("images_upload_url","","string")},Kc=function(e){return e.getParam("images_upload_base_path","","string")},Xc=function(e){return e.getParam("images_upload_credentials",!1,"boolean")},Yc=function(e){return e.getParam("images_upload_handler",null,"function")},Gc=function(e){return e.getParam("content_css_cors",!1,"boolean")},Jc=function(e){return e.getParam("referrer_policy","","string")},Qc=function(e){return e.getParam("language","en","string")},Zc=function(e){return e.getParam("indent_use_margin",!1)},es=function(e){var t=e.getParam("object_resizing")
return!1!==t&&!lt.iOS&&(S(t)?t:"table,img,figure.image,div")},ts=function(e){return e.getParam("event_root")},ns=function(e){return e.getParam("theme")},rs=function(e){return e.getParam("validate")},os=function(e){return!1!==e.getParam("inline_boundaries")},is=function(e){return e.getParam("content_css_cors")},as=function(e){return e.getParam("plugins","","string")},us=yn,cs=kn,ss=function(e){var t=e.parentNode
t&&t.removeChild(e)},fs=function(e){var t=Hr(e)
return{count:e.length-t.length,text:t}},ls=function(e){for(var t;-1!==(t=e.data.lastIndexOf(zr));)e.deleteData(t,1)},ds=function(e,t){return hs(e),t},ms=function(e,t){var n=t.container(),r=function(e,t){var n=L(e,t)
return-1===n?b.none():b.some(n)}(Q(n.childNodes),e).map((function(e){return e<t.offset()?gc(n,t.offset()-1):t})).getOr(t)
return hs(e),r},ps=function(e,t){return cs(e)&&t.container()===e?function(e,t){var n=fs(e.data.substr(0,t.offset())),r=fs(e.data.substr(t.offset()))
return(n.text+r.text).length>0?(ls(e),gc(e,t.offset()-n.count)):t}(e,t):ds(e,t)},gs=function(e,t){return gc.isTextPosition(t)?ps(e,t):function(e,t){return t.container()===e.parentNode?ms(e,t):ds(e,t)}(e,t)},hs=function(e){us(e)&&Kr(e)&&(Xr(e)?e.removeAttribute("data-mce-caret"):ss(e)),cs(e)&&(ls(e),0===e.data.length&&ss(e))},vs=nt().browser,ys=Bn,bs=Ln,Cs=Pn,ws=function(e,t,n){var r,o,i,a,u,c=zu(t.getBoundingClientRect(),n)
return"BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,i=e.scrollTop||r.scrollTop):(u=e.getBoundingClientRect(),o=e.scrollLeft-u.left,i=e.scrollTop-u.top),c.left+=o,c.right+=o,c.top+=i,c.bottom+=i,c.width=1,(a=t.offsetWidth-t.clientWidth)>0&&(n&&(a*=-1),c.left+=a,c.right+=a),c},xs=function(e,t,n,r){var o,i,a=ou(b.none()),u=jc(e),c=u.length>0?u:"p",s=function(){(function(e){for(var t=wu(yt.fromDom(e),"*[contentEditable=false],video,audio,embed,object"),n=0;n<t.length;n++){var r,o=t[n].dom,i=o.previousSibling
Zr(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(r.length-1,1)),i=o.nextSibling,Qr(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(0,1))}})(t),i&&(hs(i),i=null),a.get().each((function(e){$a(e.caret).remove(),a.set(b.none())})),o&&(xr.clearInterval(o),o=null)},f=function(){o=xr.setInterval((function(){r()?$a("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden"):$a("div.mce-visual-caret",t).addClass("mce-visual-caret-hidden")}),500)}
return{show:function(e,r){var o,u
if(s(),Cs(r))return null
if(!n(r))return i=function(e,t){var n,r=e.ownerDocument.createTextNode(zr),o=e.parentNode
if(t){if(n=e.previousSibling,qr(n)){if(Kr(n))return n
if(Zr(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,qr(n)){if(Kr(n))return n
if(Qr(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(r,e),u=r.ownerDocument.createRange(),Ns(i.nextSibling)?(u.setStart(i,0),u.setEnd(i,0)):(u.setStart(i,1),u.setEnd(i,1)),u
i=Jr(c,r,e),o=ws(t,r,e),$a(i).css("top",o.top)
var l=$a('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(o).appendTo(t)[0]
return a.set(b.some({caret:l,element:r,before:e})),a.get().each((function(t){e&&$a(t.caret).addClass("mce-visual-caret-before")})),f(),(u=r.ownerDocument.createRange()).setStart(i,0),u.setEnd(i,0),u},hide:s,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){a.get().each((function(e){var n=ws(t,e.element,e.before)
$a(e.caret).css(be({},n))}))},destroy:function(){return xr.clearInterval(o)}}},Ss=function(){return vs.isIE()||vs.isEdge()||vs.isFirefox()},Ns=function(e){return ys(e)||bs(e)},Es=function(e){return Ns(e)||Sn(e)&&Ss()},ks=Bn,_s=Ln,Rs=Cn("display","block table table-cell table-caption list-item"),Ts=Kr,As=$r,Ds=yn,Os=so,Bs=function(e){return e>0},Ps=function(e){return e<0},Ls=function(e,t){for(var n;n=e(t);)if(!As(n))return n
return null},Is=function(e,t,n,r,o){var i=new _r(e,r),a=ks(e)||As(e)
if(Ps(t)){if(a&&n(e=Ls(i.prev,!0)))return e
for(;e=Ls(i.prev,o);)if(n(e))return e}if(Bs(t)){if(a&&n(e=Ls(i.next,!0)))return e
for(;e=Ls(i.next,o);)if(n(e))return e}return null},Ms=function(e,t){for(;e&&e!==t;){if(Rs(e))return e
e=e.parentNode}return null},Fs=function(e,t,n){return Ms(e.container(),n)===Ms(t.container(),n)},Us=function(e,t){if(!t)return null
var n=t.container(),r=t.offset()
return Ds(n)?n.childNodes[r+e]:null},zs=function(e,t){var n=t.ownerDocument.createRange()
return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},js=function(e,t,n){return Ms(t,e)===Ms(n,e)},Hs=function(e,t,n){var r,o
for(o=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[o],Ts(r)&&(r=r[o]),ks(r)||_s(r)){if(js(t,r,n))return r
break}if(Os(r))break
n=n.parentNode}return null},Vs=l(zs,!0),qs=l(zs,!1),$s=function(e,t,n){var r,o,i,a=l(Hs,!0,t),u=l(Hs,!1,t)
o=n.startContainer
var c=n.startOffset
if($r(o)){if(Ds(o)||(o=o.parentNode),"before"===(i=o.getAttribute("data-mce-caret"))&&(r=o.nextSibling,Es(r)))return Vs(r)
if("after"===i&&(r=o.previousSibling,Es(r)))return qs(r)}if(!n.collapsed)return n
if(kn(o)){if(Ts(o)){if(1===e){if(r=u(o))return Vs(r)
if(r=a(o))return qs(r)}if(-1===e){if(r=a(o))return qs(r)
if(r=u(o))return Vs(r)}return n}if(Zr(o)&&c>=o.data.length-1)return 1===e&&(r=u(o))?Vs(r):n
if(Qr(o)&&c<=1)return-1===e&&(r=a(o))?qs(r):n
if(c===o.data.length)return(r=u(o))?Vs(r):n
if(0===c)return(r=a(o))?qs(r):n}return n},Ws=function(e,t){return b.from(Us(e?0:-1,t)).filter(ks)},Ks=function(e,t,n){var r=$s(e,t,n)
return-1===e?mc.fromRangeStart(r):mc.fromRangeEnd(r)},Xs=function(e){return b.from(e.getNode()).map(yt.fromDom)},Ys=function(e,t){for(;t=e(t);)if(t.isVisible())return t
return t},Gs=function(e,t){var n=Fs(e,t)
return!(n||!An(e.getNode()))||n};(function(e){e[e.Backwards=-1]="Backwards",e[e.Forwards=1]="Forwards"})(pc||(pc={}))
var Js,Qs=Bn,Zs=kn,ef=yn,tf=An,nf=so,rf=function(e){return ao(e)||function(e){return!!fo(e)&&!0!==V(Q(e.getElementsByTagName("*")),(function(e,t){return e||to(t)}),!1)}(e)},of=lo,af=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},uf=function(e,t){if(Bs(e)){if(nf(t.previousSibling)&&!Zs(t.previousSibling))return gc.before(t)
if(Zs(t))return gc(t,0)}if(Ps(e)){if(nf(t.nextSibling)&&!Zs(t.nextSibling))return gc.after(t)
if(Zs(t))return gc(t,t.data.length)}return Ps(e)?tf(t)?gc.before(t):gc.after(t):gc.before(t)},cf=function(e,t,n){var r,o,i,a
if(!ef(n)||!t)return null
if(t.isEqual(gc.after(n))&&n.lastChild){if(a=gc.after(n.lastChild),Ps(e)&&nf(n.lastChild)&&ef(n.lastChild))return tf(n.lastChild)?gc.before(n.lastChild):a}else a=t
var u=a.container(),c=a.offset()
if(Zs(u)){if(Ps(e)&&c>0)return gc(u,--c)
if(Bs(e)&&c<u.length)return gc(u,++c)
r=u}else{if(Ps(e)&&c>0&&(o=af(u,c-1),nf(o)))return!rf(o)&&(i=Is(o,e,of,o))?Zs(i)?gc(i,i.data.length):gc.after(i):Zs(o)?gc(o,o.data.length):gc.before(o)
if(Bs(e)&&c<u.childNodes.length&&(o=af(u,c),nf(o)))return tf(o)?function(e,t){var n=t.nextSibling
return n&&nf(n)?Zs(n)?gc(n,0):gc.before(n):cf(pc.Forwards,gc.after(t),e)}(n,o):!rf(o)&&(i=Is(o,e,of,o))?Zs(i)?gc(i,0):gc.before(i):Zs(o)?gc(o,0):gc.after(o)
r=o||a.getNode()}if((Bs(e)&&a.isAtEnd()||Ps(e)&&a.isAtStart())&&(r=Is(r,e,g,n,!0),of(r,n)))return uf(e,r)
o=Is(r,e,of,n)
var s=ye(j(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode
return n}(u,n),Qs))
return!s||o&&s.contains(o)?o?uf(e,o):null:a=Bs(e)?gc.after(s):gc.before(s)},sf=function(e){return{next:function(t){return cf(pc.Forwards,t,e)},prev:function(t){return cf(pc.Backwards,t,e)}}},ff=function(e){return gc.isTextPosition(e)?0===e.offset():so(e.getNode())},lf=function(e){if(gc.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return so(e.getNode(!0))},df=function(e,t){return!gc.isTextPosition(e)&&!gc.isTextPosition(t)&&e.getNode()===t.getNode(!0)},mf=function(e,t,n){return e?!df(t,n)&&(r=t,!(!gc.isTextPosition(r)&&An(r.getNode())))&&lf(t)&&ff(n):!df(n,t)&&ff(t)&&lf(n)
var r},pf=function(e,t,n){var r=sf(t)
return b.from(e?r.next(n):r.prev(n))},gf=function(e,t,n){return pf(e,t,n).bind((function(r){return Fs(n,r,t)&&mf(e,n,r)?pf(e,t,r):b.some(r)}))},hf=function(e,t,n,r){return gf(e,t,n).bind((function(n){return r(n)?hf(e,t,n,r):b.some(n)}))},vf=function(e,t){var n,r=e?t.firstChild:t.lastChild
return kn(r)?b.some(gc(r,e?0:r.data.length)):r?so(r)?b.some(e?gc.before(r):An(n=r)?gc.before(n):gc.after(n)):function(e,t,n){var r=e?gc.before(n):gc.after(n)
return pf(e,t,r)}(e,t,r):b.none()},yf=l(pf,!0),bf=l(pf,!1),Cf=l(vf,!0),wf=l(vf,!1),xf="_mce_caret",Sf=function(e){return yn(e)&&e.id===xf},Nf=function(e,t){for(;t&&t!==e;){if(t.id===xf)return t
t=t.parentNode}return null},Ef=function(e,t){return yn(t)&&e.isBlock(t)&&!t.innerHTML&&!lt.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t},kf=function(e,t){return wf(e).fold((function(){return!1}),(function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0}))},_f=function(e,t,n){return!(!function(e){return!1===e.hasChildNodes()}(t)||!Nf(e,t))&&(function(e,t){var n=e.ownerDocument.createTextNode(zr)
e.appendChild(n),t.setStart(n,0),t.setEnd(n,0)}(t,n),!0)},Rf=function(e,t,n,r){var o,i,a,u,c=n[t?"start":"end"],s=e.getRoot()
if(c){for(a=c[0],i=s,o=c.length-1;o>=1;o--){if(u=i.childNodes,_f(s,i,r))return!0
if(c[o]>u.length-1)return!!_f(s,i,r)||kf(i,r)
i=u[c[o]]}3===i.nodeType&&(a=Math.min(c[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(c[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},Tf=function(e){return kn(e)&&e.data.length>0},Af=function(e,t,n){var r,o,i,a,u,c,s=e.get(n.id+"_"+t),f=n.keep
if(s){if(r=s.parentNode,"start"===t?(f?s.hasChildNodes()?(r=s.firstChild,o=1):Tf(s.nextSibling)?(r=s.nextSibling,o=0):Tf(s.previousSibling)?(r=s.previousSibling,o=s.previousSibling.data.length):(r=s.parentNode,o=e.nodeIndex(s)+1):o=e.nodeIndex(s),u=r,c=o):(f?s.hasChildNodes()?(r=s.firstChild,o=1):Tf(s.previousSibling)?(r=s.previousSibling,o=s.previousSibling.data.length):(r=s.parentNode,o=e.nodeIndex(s)):o=e.nodeIndex(s),u=r,c=o),!f){for(a=s.previousSibling,i=s.nextSibling,ht.each(ht.grep(s.childNodes),(function(e){kn(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));s=e.get(n.id+"_"+t);)e.remove(s,!0)
a&&i&&a.nodeType===i.nodeType&&kn(a)&&!lt.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,c=o)}return b.some(gc(u,c))}return b.none()},Df=function(e,t){var n=e.dom
if(t){if(function(e){return ht.isArray(e.start)}(t))return function(e,t){var n=e.createRng()
return Rf(e,!0,t,n)&&Rf(e,!1,t,n)?b.some(n):b.none()}(n,t)
if(function(e){return"string"==typeof e.start}(t))return b.some(function(e,t){var n,r=e.createRng()
return n=kc(e.getRoot(),t.start),r.setStart(n.container(),n.offset()),n=kc(e.getRoot(),t.end),r.setEnd(n.container(),n.offset()),r}(n,t))
if(function(e){return e.hasOwnProperty("id")}(t))return function(e,t){var n=Af(e,"start",t),r=Af(e,"end",t)
return Mu(n,r.or(n),(function(t,n){var r=e.createRng()
return r.setStart(Ef(e,t.container()),t.offset()),r.setEnd(Ef(e,n.container()),n.offset()),r}))}(n,t)
if(function(e){return e.hasOwnProperty("name")}(t))return function(e,t){return b.from(e.select(t.name)[t.index]).map((function(t){var n=e.createRng()
return n.selectNode(t),n}))}(n,t)
if(function(e){return e.hasOwnProperty("rng")}(t))return b.some(t.rng)}return b.none()},Of=function(e,t,n){return Ic(e,t,n)},Bf=function(e,t){Df(e,t).each((function(t){e.setRng(t)}))},Pf=function(e){return yn(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},Lf=(Js=Ur,function(e){return Js===e}),If=function(e){return""!==e&&-1!==" \f\n\r\t\v".indexOf(e)},Mf=function(e){return!If(e)&&!Lf(e)},Ff=function(e){return!!e.nodeType},Uf=function(e,t,n){var r,o,i,a=n.startOffset,u=n.startContainer
if((n.startContainer!==n.endContainer||!function(e){return e&&/^(IMG)$/.test(e.nodeName)}(n.startContainer.childNodes[n.startOffset]))&&1===u.nodeType)for(a<(i=u.childNodes).length?(u=i[a],r=new _r(u,e.getParent(u,e.isBlock))):(u=i[i.length-1],(r=new _r(u,e.getParent(u,e.isBlock))).next(!0)),o=r.current();o;o=r.next())if(3===o.nodeType&&!Vf(o))return n.setStart(o,0),void t.setRng(n)},zf=function(e,t,n){if(e){var r=t?"nextSibling":"previousSibling"
for(e=n?e:e[r];e;e=e[r])if(1===e.nodeType||!Vf(e))return e}},jf=function(e,t){return Ff(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},Hf=function(e,t,n){return e.schema.isValidChild(t,n)},Vf=function(e){return e&&kn(e)&&/^([\t \r\n]+|)$/.test(e.nodeValue)},qf=function(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,(function(e,n){return t[n]||e}))),e},$f=function(e,t){return t=t||"",e=""+((e=e||"").nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()===t.toLowerCase()},Wf=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},Kf=function(e,t,n){return Wf(e,e.getStyle(t,n),n)},Xf=function(e,t){var n
return e.getParent(t,(function(t){return(n=e.getStyle(t,"text-decoration"))&&"none"!==n})),n},Yf=function(e,t,n){return e.getParents(t,n,e.getRoot())},Gf=function(e,t,n){var r=["inline","block","selector","attributes","styles","classes"],o=function(e){return ue(e,(function(e,t){return M(r,(function(e){return e===t}))}))}
return M(e.formatter.get(t),(function(t){var r=o(t)
return M(e.formatter.get(n),(function(e){var t=o(e)
return function(e,t,n){return void 0===n&&(n=a),i(n).eq(e,t)}(r,t)}))}))},Jf=Pf,Qf=Yf,Zf=Vf,el=jf,tl=function(e,t){for(var n=t;n;){if(yn(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t
n=n.parentNode}return t},nl=function(e,t,n,r){for(var o=t.data,i=n;e?i>=0:i<o.length;e?i--:i++)if(r(o.charAt(i)))return e?i+1:i
return-1},rl=function(e,t,n){return nl(e,t,n,(function(e){return Lf(e)||If(e)}))},ol=function(e,t,n){return nl(e,t,n,Mf)},il=function(e,t,n,r,o,i){var a,u=e.getParent(n,e.isBlock)||t,c=function(t,n,r){var i=Iu(e),c=o?i.backwards:i.forwards
return b.from(c(t,n,(function(e,t){return Jf(e.parentNode)?-1:(a=e,r(o,e,t))}),u))}
return c(n,r,rl).bind((function(e){return i?c(e.container,e.offset+(o?-1:0),ol):b.some(e)})).orThunk((function(){return a?b.some({container:a,offset:o?0:a.length}):b.none()}))},al=function(e,t,n,r,o){kn(r)&&0===r.nodeValue.length&&r[o]&&(r=r[o])
for(var i=Qf(e,r),a=0;a<i.length;a++)for(var u=0;u<t.length;u++){var c=t[u]
if((!("collapsed"in c)||c.collapsed===n.collapsed)&&e.is(i[a],c.selector))return i[a]}return r},ul=function(e,t,n,r){var o,i=e.dom,a=i.getRoot()
if(t[0].wrapper||(o=i.getParent(n,t[0].block,a)),!o){var u=i.getParent(n,"LI,TD,TH")
o=i.getParent(kn(n)?n.parentNode:n,(function(t){return t!==a&&el(e,t)}),u)}if(o&&t[0].wrapper&&(o=Qf(i,o,"ul,ol").reverse()[0]||o),!o)for(o=n;o[r]&&!i.isBlock(o[r])&&(o=o[r],!$f(o,"br")););return o||n},cl=function(e,t,n,r,o,i,a){var u,c,s
u=c=a?n:o
var f,l=a?"previousSibling":"nextSibling",d=e.getRoot()
if(kn(u)&&!Zf(u)&&(a?r>0:i<u.nodeValue.length))return u
for(;;){if(!t[0].block_expand&&e.isBlock(c))return c
for(s=c[l];s;s=s[l])if(!Jf(s)&&!Zf(s)&&("BR"!==(f=s).nodeName||!f.getAttribute("data-mce-bogus")||f.nextSibling))return c
if(c===d||c.parentNode===d){u=c
break}c=c.parentNode}return u},sl=function(e,t,n,r){void 0===r&&(r=!1)
var o=t.startContainer,i=t.startOffset,a=t.endContainer,u=t.endOffset,c=e.dom;(yn(o)&&o.hasChildNodes()&&(o=Wu(o,i),kn(o)&&(i=0)),yn(a)&&a.hasChildNodes()&&(a=Wu(a,t.collapsed?u:u-1),kn(a)&&(u=a.nodeValue.length)),o=tl(c,o),a=tl(c,a),(Jf(o.parentNode)||Jf(o))&&(o=Jf(o)?o:o.parentNode,o=t.collapsed?o.previousSibling||o:o.nextSibling||o,kn(o)&&(i=t.collapsed?o.length:0)),(Jf(a.parentNode)||Jf(a))&&(a=Jf(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,kn(a)&&(u=t.collapsed?0:a.length)),t.collapsed)&&(il(c,e.getBody(),o,i,!0,r).each((function(e){var t=e.container,n=e.offset
o=t,i=n})),il(c,e.getBody(),a,u,!1,r).each((function(e){var t=e.container,n=e.offset
a=t,u=n})))
return(n[0].inline||n[0].block_expand)&&(n[0].inline&&kn(o)&&0!==i||(o=cl(c,n,o,i,a,u,!0)),n[0].inline&&kn(a)&&u!==a.nodeValue.length||(a=cl(c,n,o,i,a,u,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(o=al(c,n,t,o,"previousSibling"),a=al(c,n,t,a,"nextSibling")),(n[0].block||n[0].selector)&&(o=ul(e,n,o,"previousSibling"),a=ul(e,n,a,"nextSibling"),n[0].block&&(c.isBlock(o)||(o=cl(c,n,o,i,a,u,!0)),c.isBlock(a)||(a=cl(c,n,o,i,a,u,!1)))),yn(o)&&(i=c.nodeIndex(o),o=o.parentNode),yn(a)&&(u=c.nodeIndex(a)+1,a=a.parentNode),{startContainer:o,startOffset:i,endContainer:a,endOffset:u}},fl=function(e,t){var n=e.childNodes
return t>=n.length?t=n.length-1:t<0&&(t=0),n[t]||e},ll=function(e,t,n){var r=t.startContainer,o=t.startOffset,i=t.endContainer,a=t.endOffset,u=function(e){var t
return 3===(t=e[0]).nodeType&&t===r&&o>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===a&&e.length>0&&t===i&&3===t.nodeType&&e.splice(e.length-1,1),e},c=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e)
return r},s=function(e,t){do{if(e.parentNode===t)return e
e=e.parentNode}while(e)},f=function(e,t,r){for(var o=r?"nextSibling":"previousSibling",i=e,a=i.parentNode;i&&i!==t;i=a){a=i.parentNode
var s=c(i===e?i:i[o],o)
s.length&&(r||s.reverse(),n(u(s)))}}
if(1===r.nodeType&&r.hasChildNodes()&&(r=fl(r,o)),1===i.nodeType&&i.hasChildNodes()&&(i=fl(i,a-1)),r===i)return n(u([r]))
for(var l=e.findCommonAncestor(r,i),d=r;d;d=d.parentNode){if(d===i)return f(r,l,!0)
if(d===l)break}for(d=i;d;d=d.parentNode){if(d===r)return f(i,l)
if(d===l)break}var m=s(r,l)||r,p=s(i,l)||i
f(r,m,!0)
var g=c(m===r?m:m.nextSibling,"nextSibling",p===i?p.nextSibling:p)
g.length&&n(u(g)),f(i,p)},dl=function(e){var t=[]
if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n))
return t},ml=function(e){return j(function(e){return W(e,(function(e){var t=$u(e)
return t?[yt.fromDom(t)]:[]}))}(e),Mr)},pl=function(e,t){var n=wu(t,"td[data-mce-selected],th[data-mce-selected]")
return n.length>0?n:ml(e)},gl=function(e){return pl(dl(e.selection.getSel()),yt.fromDom(e.getBody()))},hl=function(e){return Ht(e).fold(s([e]),(function(t){return[e].concat(hl(t))}))},vl=function(e){return Vt(e).fold(s([e]),(function(t){return"br"===Et(t)?It(t).map((function(t){return[e].concat(vl(t))})).getOr([]):[e].concat(vl(t))}))},yl=function(e,t){return Mu(function(e){var t=e.startContainer,n=e.startOffset
return kn(t)?0===n?b.some(yt.fromDom(t)):b.none():b.from(t.childNodes[n]).map(yt.fromDom)}(t),function(e){var t=e.endContainer,n=e.endOffset
return kn(t)?n===t.data.length?b.some(yt.fromDom(t)):b.none():b.from(t.childNodes[n-1]).map(yt.fromDom)}(t),(function(t,n){var r=q(hl(e),l(xt,t)),o=q(vl(e),l(xt,n))
return r.isSome()&&o.isSome()})).getOr(!1)},bl=function(e,t,n,r){var o=n,i=new _r(n,o),a=ue(e.schema.getMoveCaretBeforeOnEnterElements(),(function(e,t){return!I(["td","th","table"],t.toLowerCase())}))
do{if(kn(n)&&0!==ht.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length))
if(a[n.nodeName])return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n))}while(n=r?i.next():i.prev())
"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},Cl=function(e){var t=e.selection.getSel()
return t&&t.rangeCount>0},wl=function(e,t){var n=gl(e)
n.length>0?U(n,(function(n){var r=n.dom,o=e.dom.createRng()
o.setStartBefore(r),o.setEndAfter(r),t(o,!0)})):t(e.selection.getRng(),!1)},xl=function(e,t,n){var r=Lc(e,t)
n(r),e.moveToBookmark(r)}
var Sl=function(e,t){var n=function(t){return e(t)?b.from(t.dom.nodeValue):b.none()}
return{get:function(r){if(!e(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return n(r).getOr("")},getOption:n,set:function(n,r){if(!e(n))throw new Error("Can only set raw "+t+" value of a "+t+" node")
n.dom.nodeValue=r}}}(Tt,"text"),Nl=function(e){return Sl.get(e)},El=function(e,t,n,r){return Lt(t).fold((function(){return"skipping"}),(function(o){return"br"===r||function(e){return Tt(e)&&Nl(e)===zr}(t)?"valid":function(e){return Rt(e)&&bu(e,xu())}(t)?"existing":Sf(t.dom)?"caret":Hf(e,n,r)&&Hf(e,Et(o),n)?"valid":"invalid-child"}))},kl=function(e,t,n,r){var o=t.uid,i=void 0===o?Au("mce-annotation"):o,a=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),u=yt.fromTag("span",e)
vu(u,xu()),Fn(u,""+Nu(),i),Fn(u,""+Su(),n)
var c=r(i,a),s=c.attributes,f=void 0===s?{}:s,l=c.classes,d=void 0===l?[]:l
return Un(u,f),function(e,t){U(t,(function(t){vu(e,t)}))}(u,d),u},_l=function(e,t,n,r,o){var i=[],a=kl(e.getDoc(),o,n,r),u=ou(b.none()),c=function(){u.set(b.none())},s=function(e){U(e,f)},f=function(t){switch(El(e,t,"span",Et(t))){case"invalid-child":c()
var n=zt(t)
s(n),c()
break
case"valid":(function(e,t){Jt(e,t),en(t,e)})(t,u.get().getOrThunk((function(){var e=Bu(a)
return i.push(e),u.set(b.some(e)),e})))}}
return ll(e.dom,t,(function(e){c(),function(e){var t=F(e,yt.fromDom)
s(t)}(e)})),i},Rl=function(e,t,n,r){e.undoManager.transact((function(){var o=e.selection,i=o.getRng(),a=gl(e).length>0
if(i.collapsed&&!a&&function(e,t){var n=sl(e,t,[{inline:!0}])
t.setStart(n.startContainer,n.startOffset),t.setEnd(n.endContainer,n.endOffset),e.selection.setRng(t)}(e,i),o.getRng().collapsed&&!a){var u=kl(e.getDoc(),r,t,n.decorate)
Du(u,Ur),o.getRng().insertNode(u.dom),o.select(u.dom)}else xl(o,!1,(function(){wl(e,(function(o){_l(e,o,t,n.decorate,r)}))}))}))},Tl=function(e){var t,n=(t={},{register:function(e,n){t[e]={name:e,settings:n}},lookup:function(e){return t.hasOwnProperty(e)?b.from(t[e]).map((function(e){return e.settings})):b.none()}})
Ru(e,n)
var r=_u(e)
return{register:function(e,t){n.register(e,t)},annotate:function(t,r){n.lookup(t).each((function(n){Rl(e,t,n,r)}))},annotationChanged:function(e,t){r.addListener(e,t)},remove:function(t){Eu(e,b.some(t)).each((function(e){var t=e.elements
U(t,on)}))},getAll:function(t){var n=function(e,t){var n=yt.fromDom(e.getBody()),r=wu(n,"["+Su()+'="'+t+'"]'),o={}
return U(r,(function(e){var t=zn(e,Nu()),n=o.hasOwnProperty(t)?o[t]:[]
o[t]=n.concat([e])})),o}(e,t)
return ne(n,(function(e){return F(e,(function(e){return e.dom}))}))}}}
function Al(e){return{getBookmark:l(Of,e),moveToBookmark:l(Bf,e)}}(function(e){e.isBookmarkNode=Pf})(Al||(Al={}))
var Dl=Al,Ol=function(e,t){for(;t&&t!==e;){if(On(t)||Bn(t))return t
t=t.parentNode}return null},Bl=function(e,t,n){if(n.collapsed)return!1
if(lt.browser.isIE()&&n.startOffset===n.endOffset-1&&n.startContainer===n.endContainer){var r=n.startContainer.childNodes[n.startOffset]
if(yn(r))return M(r.getClientRects(),(function(n){return qu(n,e,t)}))}return M(n.getClientRects(),(function(n){return qu(n,e,t)}))},Pl={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(e){return lt.mac?e.metaKey:e.ctrlKey&&!e.altKey}},Ll=Bn,Il=function(e,t){var n,r,o,i,a,u,c,s,f,l,d,m,p,g,h=t.dom,v=ht.each,y=t.getDoc(),b=document,C=Math.abs,w=Math.round,x=t.getBody(),S={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},N=function(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))},E=function(e){var n=e.target;(function(e,t){if("longpress"===e.type||0===e.type.indexOf("touch")){var n=e.touches[0]
return N(e.target)&&!Bl(n.clientX,n.clientY,t)}return N(e.target)&&!Bl(e.clientX,e.clientY,t)})(e,t.selection.getRng())&&!e.isDefaultPrevented()&&t.selection.select(n)},k=function(e){return t.dom.is(e,"figure.image")?e.querySelector("img"):e},_=function(e){var n=es(t)
return!!n&&("false"!==e.getAttribute("data-mce-resize")&&(e!==t.getBody()&&Ct(yt.fromDom(e),n)))},R=function(e,t,n){h.setStyles(k(e),{width:t,height:n})},T=function(e){var v,y,b,S
v=e.screenX-a,y=e.screenY-u,d=v*i[2]+c,m=y*i[3]+s,d=d<5?5:d,m=m<5?5:m,(N(n)&&!1!==function(e){return e.getParam("resize_img_proportional",!0,"boolean")}(t)?!Pl.modifierPressed(e):Pl.modifierPressed(e))&&(C(v)>C(y)?(m=w(d*f),d=w(m/f)):(d=w(m/f),m=w(d*f))),R(r,d,m),b=(b=i.startPos.x+v)>0?b:0,S=(S=i.startPos.y+y)>0?S:0,h.setStyles(o,{left:b,top:S,display:"block"}),o.innerHTML=d+" &times; "+m,i[2]<0&&r.clientWidth<=d&&h.setStyle(r,"left",undefined+(c-d)),i[3]<0&&r.clientHeight<=m&&h.setStyle(r,"top",undefined+(s-m)),(v=x.scrollWidth-p)+(y=x.scrollHeight-g)!==0&&h.setStyles(o,{left:b-v,top:S-y}),l||(function(e,t,n,r,o){e.fire("ObjectResizeStart",{target:t,width:n,height:r,origin:o})}(t,n,c,s,"corner-"+i.name),l=!0)},A=function(){var e=l
l=!1
var a=function(e,r){r&&(n.style[e]||!t.schema.isValid(n.nodeName.toLowerCase(),e)?h.setStyle(k(n),e,r):h.setAttrib(k(n),e,""+r))}
e&&(a("width",d),a("height",m)),h.unbind(y,"mousemove",T),h.unbind(y,"mouseup",A),b!==y&&(h.unbind(b,"mousemove",T),h.unbind(b,"mouseup",A)),h.remove(r),h.remove(o),D(n),e&&(function(e,t,n,r,o){e.fire("ObjectResized",{target:t,width:n,height:r,origin:o})}(t,n,d,m,"corner-"+i.name),h.setAttrib(n,"style",h.getAttrib(n,"style"))),t.nodeChanged()},D=function(e){O(),L()
var l=h.getPos(e,x),C=l.x,w=l.y,N=e.getBoundingClientRect(),E=N.width||N.right-N.left,D=N.height||N.bottom-N.top
n!==e&&(n=e,d=m=0)
var B=t.fire("ObjectSelected",{target:e})
_(e)&&!B.isDefaultPrevented()?v(S,(function(e,t){var l;(l=h.get("mceResizeHandle"+t))&&h.remove(l),l=h.add(x,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),11===lt.ie&&(l.contentEditable=!1),h.bind(l,"mousedown",(function(l){l.stopImmediatePropagation(),l.preventDefault(),function(l){a=l.screenX,u=l.screenY,c=k(n).clientWidth,s=k(n).clientHeight,f=s/c,(i=e).name=t,i.startPos={x:E*e[0]+C,y:D*e[1]+w},p=x.scrollWidth,g=x.scrollHeight,r=n.cloneNode(!0),h.addClass(r,"mce-clonedresizable"),h.setAttrib(r,"data-mce-bogus","all"),r.contentEditable=!1,r.unSelectabe=!0,h.setStyles(r,{left:C,top:w,margin:0}),R(r,E,D),r.removeAttribute("data-mce-selected"),x.appendChild(r),h.bind(y,"mousemove",T),h.bind(y,"mouseup",A),b!==y&&(h.bind(b,"mousemove",T),h.bind(b,"mouseup",A)),o=h.add(x,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},c+" &times; "+s)}(l)})),e.elm=l,h.setStyles(l,{left:E*e[0]+C-l.offsetWidth/2,top:D*e[1]+w-l.offsetHeight/2})})):O(),n.setAttribute("data-mce-selected","1")},O=function(){L(),n&&n.removeAttribute("data-mce-selected"),te(S,(function(e,t){var n=h.get("mceResizeHandle"+t)
n&&(h.unbind(n),h.remove(n))}))},B=function(n){var r,o=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)}
l||t.removed||(v(h.select("img[data-mce-selected],hr[data-mce-selected]"),(function(e){e.removeAttribute("data-mce-selected")})),r="mousedown"===n.type?n.target:e.getNode(),o(r=h.$(r).closest("table,img,figure.image,hr")[0],x)&&(I(),o(e.getStart(!0),r)&&o(e.getEnd(!0),r))?D(r):O())},P=function(e){return Ll(Ol(t.getBody(),e))},L=function(){te(S,(function(e){e.elm&&(h.unbind(e.elm),delete e.elm)}))},I=function(){try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(e){}}
t.on("init",(function(){if(I(),lt.browser.isIE()||lt.browser.isEdge()){t.on("mousedown click",(function(e){var n=e.target,r=n.nodeName
l||!/^(TABLE|IMG|HR)$/.test(r)||P(n)||(2!==e.button&&t.selection.select(n,"TABLE"===r),"mousedown"===e.type&&t.nodeChanged())}))
var e=function(e){var n=function(e){xr.setEditorTimeout(t,(function(){return t.selection.select(e)}))}
if(P(e.target)||Ln(e.target))return e.preventDefault(),void n(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&n(e.target))}
h.bind(x,"mscontrolselect",e),t.on("remove",(function(){return h.unbind(x,"mscontrolselect",e)}))}var r=xr.throttle((function(e){t.composing||B(e)}))
t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",r),t.on("keyup compositionend",(function(e){n&&"TABLE"===n.nodeName&&r(e)})),t.on("hide blur",O),t.on("contextmenu longpress",E,!0)})),t.on("remove",L)
return{isResizable:_,showResizeRect:D,hideResizeRect:O,updateResizeRect:B,destroy:function(){n=r=null}}},Ml=function(e){return On(e)||Bn(e)},Fl=function(e,t,n){var r,o,i=n
if(i.caretPositionFromPoint)(o=i.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(o.offsetNode,o.offset),r.collapse(!0))
else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t)
else if(i.body.createTextRange){r=i.body.createTextRange()
try{r.moveToPoint(e,t),r.collapse(!0)}catch(a){r=function(e,t,n){var r,o=n.elementFromPoint(e,t),i=n.body.createTextRange()
if(o&&"HTML"!==o.tagName||(o=n.body),i.moveToElementText(o),(r=(r=ht.toArray(i.getClientRects())).sort((function(e,n){return(e=Math.abs(Math.max(e.top-t,e.bottom-t)))-Math.abs(Math.max(n.top-t,n.bottom-t))}))).length>0){t=(r[0].bottom+r[0].top)/2
try{return i.moveToPoint(e,t),i.collapse(!0),i}catch(a){}}return null}(e,t,n)}return function(e,t){var n=e&&e.parentElement?e.parentElement():null
return Bn(function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(n,t,Ml))?null:e}(r,n.body)}return r},Ul=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},zl=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(e,t,n)},jl=function(e,t,n){return zl(e,t,(function(e){return e.nodeName===n}))},Hl=function(e){return e&&"TABLE"===e.nodeName},Vl=function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)},ql=function(e,t){return Kr(e)&&!1===zl(e,t,Sf)},$l=function(e,t,n){for(var r=new _r(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(An(t))return!0},Wl=function(e,t,n,r,o){var i,a,u=e.getRoot(),c=e.schema.getNonEmptyElements(),s=e.getParent(o.parentNode,e.isBlock)||u
if(r&&An(o)&&t&&e.isEmpty(s))return b.some(mc(o.parentNode,e.nodeIndex(o)))
for(var f=new _r(o,s);a=f[r?"prev":"next"]();){if("false"===e.getContentEditableParent(a)||ql(a,u))return b.none()
if(kn(a)&&a.nodeValue.length>0)return!1===jl(a,u,"A")?b.some(mc(a,r?a.nodeValue.length:0)):b.none()
if(e.isBlock(a)||c[a.nodeName.toLowerCase()])return b.none()
i=a}return n&&i?b.some(mc(i,0)):b.none()},Kl=function(e,t,n,r){var o,i,a,u,c=e.getRoot(),s=!1
o=r[(n?"start":"end")+"Container"],i=r[(n?"start":"end")+"Offset"]
var f=yn(o)&&i===o.childNodes.length,l=e.schema.getNonEmptyElements()
if(u=n,Kr(o))return b.none()
if(yn(o)&&i>o.childNodes.length-1&&(u=!1),Rn(o)&&(o=c,i=0),o===c){if(u&&(a=o.childNodes[i>0?i-1:0])){if(Kr(a))return b.none()
if(l[a.nodeName]||Hl(a))return b.none()}if(o.hasChildNodes()){if(i=Math.min(!u&&i>0?i-1:i,o.childNodes.length-1),o=o.childNodes[i],i=kn(o)&&f?o.data.length:0,!t&&o===c.lastChild&&Hl(o))return b.none()
if(function(e,t){for(;t&&t!==e;){if(Bn(t))return!0
t=t.parentNode}return!1}(c,o)||Kr(o))return b.none()
if(o.hasChildNodes()&&!1===Hl(o)){a=o
var d=new _r(o,c)
do{if(Bn(a)||Kr(a)){s=!1
break}if(kn(a)&&a.nodeValue.length>0){i=u?0:a.nodeValue.length,o=a,s=!0
break}if(l[a.nodeName.toLowerCase()]&&!Vl(a)){i=e.nodeIndex(a),o=a.parentNode,u||i++,s=!0
break}}while(a=u?d.next():d.prev())}}}return t&&(kn(o)&&0===i&&Wl(e,f,t,!0,o).each((function(e){o=e.container(),i=e.offset(),s=!0})),yn(o)&&((a=o.childNodes[i])||(a=o.childNodes[i-1]),!a||!An(a)||function(e,t){return e.previousSibling&&e.previousSibling.nodeName===t}(a,"A")||$l(e,a,!1)||$l(e,a,!0)||Wl(e,f,t,!0,a).each((function(e){o=e.container(),i=e.offset(),s=!0})))),u&&!t&&kn(o)&&i===o.nodeValue.length&&Wl(e,f,t,!1,o).each((function(e){o=e.container(),i=e.offset(),s=!0})),s?b.some(mc(o,i)):b.none()},Xl=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=mc.fromRangeStart(t)
return Kl(e,n,!0,r).each((function(e){n&&mc.isAbove(o,e)||r.setStart(e.container(),e.offset())})),n||Kl(e,n,!1,r).each((function(e){r.setEnd(e.container(),e.offset())})),n&&r.collapse(!0),Ul(t,r)?b.none():b.some(r)},Yl=function(e,t){return e.splitText(t)},Gl=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset
return t===r&&kn(t)?n>0&&n<t.nodeValue.length&&(t=(r=Yl(t,n)).previousSibling,o>n?(t=r=Yl(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(kn(t)&&n>0&&n<t.nodeValue.length&&(t=Yl(t,n),n=0),kn(r)&&o>0&&o<r.nodeValue.length&&(o=(r=Yl(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}}
function Jl(e){return{walk:function(t,n){return ll(e,t,n)},split:Gl,normalize:function(t){return Xl(e,t).fold(p,(function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0}))}}}(function(e){e.compareRanges=Ul,e.getCaretRangeFromPoint=Fl,e.getSelectedNode=$u,e.getNode=Wu})(Jl||(Jl={}))
var Ql=Jl
var Zl,ed=function(e,t){var n=function(n){var r=t(n)
if(r<=0||null===r){var o=Vn(n,e)
return parseFloat(o)||0}return r},r=function(e,t){return V(t,(function(t,n){var r=Vn(e,n),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,n){if(!D(n)&&!n.match(/^[0-9]+$/))throw new Error(e+".set accepts only positive integer values. Value was "+n)
var r=t.dom
In(r)&&(r.style[e]=n+"px")},get:n,getOuter:n,aggregate:r,max:function(e,t,n){var o=r(e,n)
return t>o?t-o:0}}}("height",(function(e){var t=e.dom
return an(e)?t.getBoundingClientRect().height:t.offsetHeight})),td=function(e,t){return e.view(t).fold(s([]),(function(t){var n=e.owner(t),r=td(e,n)
return[t].concat(r)}))},nd=Object.freeze({__proto__:null,view:function(e){var t
return(e.dom===document?b.none():b.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(yt.fromDom)},owner:function(e){return Bt(e)}}),rd=function(e){var t=yt.fromDom(document),n=ln(t),r=function(e,t){var n=t.owner(e)
return td(t,n)}(e,nd),o=fn(e),i=H(r,(function(e,t){var n=fn(t)
return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0})
return cn(i.left+o.left+n.left,i.top+o.top+n.top)},od=function(e){return"textarea"===Et(e)},id=function(e,t){var n=function(e){var t=e.dom.ownerDocument,n=t.body,r=t.defaultView,o=t.documentElement
if(n===e.dom)return cn(n.offsetLeft,n.offsetTop)
var i=sn(null==r?void 0:r.pageYOffset,o.scrollTop),a=sn(null==r?void 0:r.pageXOffset,o.scrollLeft),u=sn(o.clientTop,n.clientTop),c=sn(o.clientLeft,n.clientLeft)
return fn(e).translate(a-c,i-u)}(e),r=function(e){return ed.get(e)}(e)
return{element:e,bottom:n.top+r,height:r,pos:n,cleanup:t}},ad=function(e,t){var n=function(e,t){var n=zt(e)
if(0===n.length||od(e))return{element:e,offset:t}
if(t<n.length&&!od(n[t]))return{element:n[t],offset:0}
var r=n[n.length-1]
return od(r)?{element:e,offset:t}:"img"===Et(r)?{element:r,offset:1}:Tt(r)?{element:r,offset:Nl(r).length}:{element:r,offset:zt(r).length}}(e,t),r=yt.fromHtml('<span data-mce-bogus="all">\ufeff</span>')
return Jt(n.element,r),id(r,(function(){return rn(r)}))},ud=function(e,t,n,r){ld(e,(function(o,i){return sd(e,t,n,r)}),n)},cd=function(e,t,n,r,o){var i={elm:r.element.dom,alignToTop:o};(function(e,t){return e.fire("ScrollIntoView",t).isDefaultPrevented()})(e,i)||(n(t,ln(t).top,r,o),function(e,t){e.fire("AfterScrollIntoView",t)}(e,i))},sd=function(e,t,n,r){var o=yt.fromDom(e.getBody()),i=yt.fromDom(e.getDoc())
o.dom.offsetWidth
var a=ad(yt.fromDom(n.startContainer),n.startOffset)
cd(e,i,t,a,r),a.cleanup()},fd=function(e,t,n,r){var o=yt.fromDom(e.getDoc())
cd(e,o,n,function(e){return id(yt.fromDom(e),u)}(t),r)},ld=function(e,t,n){var r=n.startContainer,o=n.startOffset,i=n.endContainer,a=n.endOffset
t(yt.fromDom(r),yt.fromDom(i))
var u=e.dom.createRng()
u.setStart(r,o),u.setEnd(i,a),e.selection.setRng(n)},dd=function(e,t,n,r){var o=e.pos
if(n)dn(o.left,o.top,r)
else{var i=o.top-t+e.height
dn(o.left,i,r)}},md=function(e,t,n,r,o){var i=n+t,a=r.pos.top,u=r.bottom,c=u-a>=n
if(a<t)dd(r,n,!1!==o,e)
else if(a>i){dd(r,n,c?!1!==o:!0===o,e)}else u>i&&!c&&dd(r,n,!0===o,e)},pd=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
md(e,t,o,n,r)},gd=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
md(e,t,o,n,r)
var i=rd(n.element),a=gn(window)
i.top<a.y?mn(n.element,!1!==r):i.top>a.bottom&&mn(n.element,!0===r)},hd=function(e,t,n){return ud(e,pd,t,n)},vd=function(e,t,n){return fd(e,t,pd,n)},yd=function(e,t,n){return ud(e,gd,t,n)},bd=function(e,t,n){return fd(e,t,gd,n)},Cd=function(e,t,n){(e.inline?hd:yd)(e,t,n)},wd=function(e){var t=Kt(e).dom
return e.dom===t.activeElement},xd=function(e){return void 0===e&&(e=yt.fromDom(document)),b.from(e.dom.activeElement).map(yt.fromDom)},Sd=function(e,t,n,r){return{start:e,soffset:t,finish:n,foffset:r}},Nd=sr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Ed=(Nd.before,Nd.on,Nd.after,function(e){return e.fold(f,f,f)}),kd=sr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),_d={domRange:kd.domRange,relative:kd.relative,exact:kd.exact,exactFromRange:function(e){return kd.exact(e.start,e.soffset,e.finish,e.foffset)},getWin:function(e){var t=function(e){return e.match({domRange:function(e){return yt.fromDom(e.startContainer)},relative:function(e,t){return Ed(e)},exact:function(e,t,n,r){return e}})}(e)
return Pt(t)},range:Sd},Rd=nt().browser,Td=function(e,t){var n=Tt(t)?Nl(t).length:zt(t).length+1
return e>n?n:e<0?0:e},Ad=function(e){return _d.range(e.start,Td(e.soffset,e.start),e.finish,Td(e.foffset,e.finish))},Dd=function(e,t){return!vn(t.dom)&&(Nt(e,t)||xt(e,t))},Od=function(e){return function(t){return Dd(e,t.start)&&Dd(e,t.finish)}},Bd=function(e){return!0===e.inline||Rd.isIE()},Pd=function(e){return _d.range(yt.fromDom(e.startContainer),e.startOffset,yt.fromDom(e.endContainer),e.endOffset)},Ld=function(e){return function(e){var t=e.getSelection()
return(t&&0!==t.rangeCount?b.from(t.getRangeAt(0)):b.none()).map(Pd)}(Pt(e).dom).filter(Od(e))},Id=function(e){var t=document.createRange()
try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),b.some(t)}catch(n){return b.none()}},Md=function(e){var t=Bd(e)?Ld(yt.fromDom(e.getBody())):b.none()
e.bookmark=t.isSome()?t:e.bookmark},Fd=function(e){return(e.bookmark?e.bookmark:b.none()).bind((function(t){return function(e,t){return b.from(t).filter(Od(e)).map(Ad)}(yt.fromDom(e.getBody()),t)})).bind(Id)},Ud={isEditorUIElement:function(e){var t=e.className.toString()
return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},zd=function(e,t){nt().browser.isIE()?function(e){e.on("focusout",(function(){Md(e)}))}(e):function(e,t){e.on("mouseup touchend",(function(e){t.throttle()}))}(e,t),e.on("keyup NodeChange",(function(t){(function(e){return"nodechange"===e.type&&e.selectionChange})(t)||Md(e)}))},jd=function(e){var t=lu((function(){Md(e)}),0)
e.on("init",(function(){e.inline&&function(e,t){var n=function(){t.throttle()}
Za.DOM.bind(document,"mouseup",n),e.on("remove",(function(){Za.DOM.unbind(document,"mouseup",n)}))}(e,t),zd(e,t)})),e.on("remove",(function(){t.cancel()}))},Hd=Za.DOM,Vd=function(e,t){var n=function(e){return e.getParam("custom_ui_selector","","string")}(e)
return null!==Hd.getParent(t,(function(t){return function(e){return Ud.isEditorUIElement(e)}(t)||!!n&&e.dom.is(t,n)}))},qd=function(e,t){var n=t.editor
jd(n),n.on("focusin",(function(){var t=this,n=e.focusedEditor
n!==t&&(n&&n.fire("blur",{focusedEditor:t}),e.setActive(t),e.focusedEditor=t,t.fire("focus",{blurredEditor:n}),t.focus(!0))})),n.on("focusout",(function(){var t=this
xr.setEditorTimeout(t,(function(){var n=e.focusedEditor
Vd(t,function(e){try{var t=Kt(yt.fromDom(e.getElement()))
return xd(t).fold((function(){return document.body}),(function(e){return e.dom}))}catch(n){return document.body}}(t))||n!==t||(t.fire("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),Zl||(Zl=function(t){var n=e.activeEditor
n&&function(e){if(Wt()&&T(e.target)){var t=yt.fromDom(e.target)
if(Rt(t)&&Gt(t)&&e.composed&&e.composedPath){var n=e.composedPath()
if(n)return G(n)}}return b.from(e.target)}(t).each((function(t){t.ownerDocument===document&&(t===document.body||Vd(n,t)||e.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))}))},Hd.bind(document,"focusin",Zl))},$d=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(Hd.unbind(document,"focusin",Zl),Zl=null)},Wd=function(e,t){return function(e){return e.collapsed?b.from(Wu(e.startContainer,e.startOffset)).map(yt.fromDom):b.none()}(t).bind((function(t){return Ir(t)?b.some(t):!1===Nt(e,t)?b.some(e):b.none()}))},Kd=function(e,t){Wd(yt.fromDom(e.getBody()),t).bind((function(e){return Cf(e.dom)})).fold((function(){e.selection.normalize()}),(function(t){return e.selection.setRng(t.toRange())}))},Xd=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},Yd=function(e){return wd(e)||(t=e,xd(Kt(t)).filter((function(e){return t.dom.contains(e.dom)}))).isSome()
var t},Gd=function(e){return e.inline?function(e){var t=e.getBody()
return t&&Yd(yt.fromDom(t))}(e):function(e){return e.iframeElement&&wd(yt.fromDom(e.iframeElement))}(e)},Jd=function(e){return Gd(e)||function(e){return xd().filter((function(t){return!(void 0!==(n=t.dom.classList)&&(n.contains("tox-edit-area")||n.contains("tox-edit-area__iframe")||n.contains("mce-content-body")))&&Vd(e,t.dom)
var n})).isSome()}(e)},Qd=function(e){return e.editorManager.setActive(e)},Zd=function(e,t){e.removed||(t?Qd(e):function(e){var t=e.selection,n=e.getBody(),r=t.getRng()
e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===Gd(e)&&Fd(e).each((function(t){e.selection.setRng(t),r=t}))
var o=function(e,t){return e.dom.getParent(t,(function(t){return"true"===e.dom.getContentEditable(t)}))}(e,t.getNode())
if(e.$.contains(n,o))return Xd(o),Kd(e,r),void Qd(e)
e.inline||(lt.opera||Xd(n),e.getWin().focus()),(lt.gecko||e.inline)&&(Xd(n),Kd(e,r)),Qd(e)}(e))},em=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset
return b.from(i).map(yt.fromDom).map((function(e){return r&&t.collapsed?e:jt(e,o(e,a)).getOr(e)})).bind((function(e){return Rt(e)?b.some(e):Lt(e).filter(Rt)})).map((function(e){return e.dom})).getOr(e)},tm=function(e,t,n){return em(e,t,!0,n,(function(e,t){return Math.min(e.dom.childNodes.length,t)}))},nm=function(e,t,n){return em(e,t,!1,n,(function(e,t){return t>0?t-1:t}))},rm=function(e,t){for(var n=e;e&&kn(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling
return e||n},om=function(e,t){return F(t,(function(t){var n=e.fire("GetSelectionRange",{range:t})
return n.range!==t?n.range:t}))},im={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},am=function(e,t,n){var r=n?"lastChild":"firstChild",o=n?"prev":"next"
if(e[r])return e[r]
if(e!==t){var i=e[o]
if(i)return i
for(var a=e.parent;a&&a!==t;a=a.parent)if(i=a[o])return i}},um=function(e){if(!po(e.value))return!1
var t=e.parent
return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)},cm=function(e){var t="a"===e.name&&!e.attr("href")&&e.attr("id")
return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t},sm=function(){function e(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}return e.create=function(t,n){var r=new e(t,im[t]||1)
return n&&te(n,(function(e,t){r.attr(t,e)})),r},e.prototype.replace=function(e){var t=this
return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},e.prototype.attr=function(e,t){var n,r=this
if("string"!=typeof e)return null!=e&&te(e,(function(e,t){r.attr(t,e)})),r
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
return n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=r,e},e.prototype.getAll=function(e){for(var t=[],n=this.firstChild;n;n=am(n,this))n.name===e&&t.push(n)
return t},e.prototype.empty=function(){var e=this
if(e.firstChild){for(var t=[],n=e.firstChild;n;n=am(n,e))t.push(n)
for(var r=t.length;r--;){(n=t[r]).parent=n.firstChild=n.lastChild=n.next=n.prev=null}}return e.firstChild=e.lastChild=null,e},e.prototype.isEmpty=function(e,t,n){void 0===t&&(t={})
var r=this,o=r.firstChild
if(cm(r))return!1
if(o)do{if(1===o.type){if(o.attr("data-mce-bogus"))continue
if(e[o.name])return!1
if(cm(o))return!1}if(8===o.type)return!1
if(3===o.type&&!um(o))return!1
if(3===o.type&&o.parent&&t[o.parent.name]&&po(o.value))return!1
if(n&&n(o))return!1}while(o=am(o,r))
return!0},e.prototype.walk=function(e){return am(this,null,e)},e}(),fm=ht.makeMap,lm=function(e){var t=[],n=(e=e||{}).indent,r=fm(e.indent_before||""),o=fm(e.indent_after||""),i=Fo.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="html"===e.element_format
return{start:function(e,u,c){var s,f,l,d
if(n&&r[e]&&t.length>0&&(d=t[t.length-1]).length>0&&"\n"!==d&&t.push("\n"),t.push("<",e),u)for(s=0,f=u.length;s<f;s++)l=u[s],t.push(" ",l.name,'="',i(l.value,!0),'"')
t[t.length]=!c||a?">":" />",c&&n&&o[e]&&t.length>0&&(d=t[t.length-1]).length>0&&"\n"!==d&&t.push("\n")},end:function(e){var r
t.push("</",e,">"),n&&o[e]&&t.length>0&&(r=t[t.length-1]).length>0&&"\n"!==r&&t.push("\n")},text:function(e,n){e.length>0&&(t[t.length]=n?e:i(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,r){r?t.push("<?",e," ",i(r),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}},dm=function(e,t){void 0===t&&(t=Xo())
var n=lm(e);(e=e||{}).validate=!("validate"in e)||e.validate
return{serialize:function(r){var o=e.validate,i={3:function(e){n.text(e.value,e.raw)},8:function(e){n.comment(e.value)},7:function(e){n.pi(e.name,e.value)},10:function(e){n.doctype(e.value)},4:function(e){n.cdata(e.value)},11:function(e){if(e=e.firstChild)do{a(e)}while(e=e.next)}}
n.reset()
var a=function(e){var r,u,c,s,f,l,d,m,p,g=i[e.type]
if(g)g(e)
else{if(r=e.name,u=e.shortEnded,c=e.attributes,o&&c&&c.length>1&&((l=[]).map={},p=t.getElementRule(e.name))){for(d=0,m=p.attributesOrder.length;d<m;d++)(s=p.attributesOrder[d])in c.map&&(f=c.map[s],l.map[s]=f,l.push({name:s,value:f}))
for(d=0,m=c.length;d<m;d++)(s=c[d].name)in l.map||(f=c.map[s],l.map[s]=f,l.push({name:s,value:f}))
c=l}if(n.start(e.name,c,u),!u){if(e=e.firstChild)do{a(e)}while(e=e.next)
n.end(r)}}}
return 1!==r.type||e.inner?i[11](r):a(r),n.getContent()}}},mm=function(e,t){return e.replace(new RegExp(t.prefix+"_[0-9]+","g"),(function(e){return se(t.uris,e).getOr(e)}))},pm=function(e,t,n){var r,o,i=1,a=e.getShortEndedElements(),u=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g
for(u.lastIndex=r=n;o=u.exec(t);){if(r=u.lastIndex,"/"===o[1])i--
else if(!o[1]){if(o[2]in a)continue
i++}if(0===i)break}return r},gm=function(e,t){var n=e.exec(t)
if(n){var r=n[1],o=n[2]
return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null}
function hm(e,t){void 0===t&&(t=Xo())
var n=function(){}
!1!==(e=e||{}).fix_self_closing&&(e.fix_self_closing=!0)
var r=e.comment?e.comment:n,o=e.cdata?e.cdata:n,i=e.text?e.text:n,a=e.start?e.start:n,u=e.end?e.end:n,c=e.pi?e.pi:n,s=e.doctype?e.doctype:n,f=function(n,f){void 0===f&&(f="html")
for(var l,d,m,p,g,h,v,y,b,C,w,x,S,N,E,k,_,R,T,A=n.html,D=0,O=[],B=0,P=Fo.decode,L=ht.makeMap("src,href,data,background,formaction,poster,xlink:href"),I=/((java|vb)script|mhtml):/i,M="html"===f?0:1,F=function(e){var t,n
for(t=O.length;t--&&O[t].name!==e;);if(t>=0){for(n=O.length-1;n>=t;n--)(e=O[n]).valid&&u(e.name)
O.length=t}},U=function(e,t){return i(mm(e,n),t)},z=function(t){""!==t&&(">"===t.charAt(0)&&(t=" "+t),e.allow_conditional_comments||"[if"!==t.substr(0,3).toLowerCase()||(t=" "+t),r(mm(t,n)))},j=function(e,t){var n=e||"",r=!Re(n,"--"),o=function(e,t,n){void 0===n&&(n=0)
var r=e.toLowerCase()
if(-1!==r.indexOf("[if ",n)&&function(e,t){return/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t))}(r,n)){var o=r.indexOf("[endif]",n)
return r.indexOf(">",o)}if(t){var i=r.indexOf(">",n)
return-1!==i?i:r.length}var a=/--!?>/
a.lastIndex=n
var u=a.exec(e)
return u?u.index+u[0].length:r.length}(A,r,t)
return e=A.substr(t,o-t),z(r?n+e:e),o+1},H=function(t,r,o,i,a){var u,c
if(o=function(e){return se(n.uris,e).getOr(e)}((r=r.toLowerCase())in K?r:P(o||i||a||"")),X&&!y&&!1===function(e){return 0===e.indexOf("data-")||0===e.indexOf("aria-")}(r)){if(!(u=N[r])&&E){for(c=E.length;c--&&!(u=E[c]).pattern.test(r););-1===c&&(u=null)}if(!u)return
if(u.validValues&&!(o in u.validValues))return}if(L[r]&&!e.allow_script_urls){var s=o.replace(/[\s\u0000-\u001F]+/g,"")
try{s=decodeURIComponent(s)}catch(f){s=unescape(s)}if(I.test(s))return
if(function(e,t){return!e.allow_html_data_urls&&(/^data:image\//i.test(t)?!1===e.allow_svg_data_urls&&/^data:image\/svg\+xml/i.test(t):/^data:/i.test(t))}(e,s))return}y&&(r in L||0===r.indexOf("on"))||(p.map[r]=o,p.push({name:r,value:o}))},V=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),q=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,$=t.getShortEndedElements(),W=e.self_closing_elements||t.getSelfClosingElements(),K=t.getBoolAttrs(),X=e.validate,Y=e.remove_internals,G=e.fix_self_closing,J=t.getSpecialElements(),Q=A+">";l=V.exec(Q);){var Z=l[0]
if(D<l.index&&U(P(A.substr(D,l.index-D))),d=l[7])":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),F(d)
else if(d=l[8]){if(l.index+Z.length>A.length){U(P(A.substr(l.index))),D=l.index+Z.length
continue}":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),b=d in $,G&&W[d]&&O.length>0&&O[O.length-1].name===d&&F(d)
var ee=gm(q,l[9])
if(null!==ee){if("all"===ee){D=pm(t,A,V.lastIndex),V.lastIndex=D
continue}w=!1}if(!X||(C=t.getElementRule(d))){if(w=!0,X&&(N=C.attributes,E=C.attributePatterns),(S=l[9])?((y=-1!==S.indexOf("data-mce-type"))&&Y&&(w=!1),(p=[]).map={},S.replace(q,H)):(p=[]).map={},X&&!y){if(k=C.attributesRequired,_=C.attributesDefault,R=C.attributesForced,C.removeEmptyAttrs&&!p.length&&(w=!1),R)for(g=R.length;g--;)v=(x=R[g]).name,"{$uid}"===(T=x.value)&&(T="mce_"+B++),p.map[v]=T,p.push({name:v,value:T})
if(_)for(g=_.length;g--;)(v=(x=_[g]).name)in p.map||("{$uid}"===(T=x.value)&&(T="mce_"+B++),p.map[v]=T,p.push({name:v,value:T}))
if(k){for(g=k.length;g--&&!(k[g]in p.map););-1===g&&(w=!1)}if(x=p.map["data-mce-bogus"]){if("all"===x){D=pm(t,A,V.lastIndex),V.lastIndex=D
continue}w=!1}}w&&a(d,p,b)}else w=!1
if(m=J[d]){m.lastIndex=D=l.index+Z.length,(l=m.exec(A))?(w&&(h=A.substr(D,l.index-D)),D=l.index+l[0].length):(h=A.substr(D),D=A.length),w&&(h.length>0&&U(h,!0),u(d)),V.lastIndex=D
continue}b||(S&&S.indexOf("/")===S.length-1?w&&u(d):O.push({name:d,valid:w}))}else if(d=l[1])z(d)
else if(d=l[2]){if(!(1===M||e.preserve_cdata||O.length>0&&t.isValidChild(O[O.length-1].name,"#cdata"))){D=j("",l.index+2),V.lastIndex=D
continue}o(d)}else if(d=l[3])s(d)
else{if((d=l[4])||"<!"===Z){D=j(d,l.index+Z.length),V.lastIndex=D
continue}if(d=l[5]){if(1!==M){D=j("?",l.index+2),V.lastIndex=D
continue}c(d,l[6])}}D=l.index+Z.length}for(D<A.length&&U(P(A.substr(D))),g=O.length-1;g>=0;g--)(d=O[g]).valid&&u(d.name)}
return{parse:function(e,t){void 0===t&&(t="html"),f(function(e){for(var t,n=/data:[^;]+;base64,([a-z0-9\+\/=]+)/gi,r=[],o={},i=Au("img"),a=0,u=0;t=n.exec(e);){var c=t[0],s=i+"_"+u++
o[s]=c,a<t.index&&r.push(e.substr(a,t.index-a)),r.push(s),a=t.index+c.length}return 0===a?{prefix:i,uris:o,html:e}:(a<e.length&&r.push(e.substr(a)),{prefix:i,uris:o,html:r.join("")})}(e),t)}}}(function(e){e.findEndTag=pm})(hm||(hm={}))
var vm=hm,ym=function(e,t){var n,r,o,i,a=t,u=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,c=e.schema
a=function(e,t){var n=new RegExp(["\\s?("+e.join("|")+')="[^"]+"'].join("|"),"gi")
return t.replace(n,"")}(e.getTempAttrs(),a)
for(var s=c.getShortEndedElements();i=u.exec(a);)r=u.lastIndex,o=i[0].length,n=s[i[1]]?r:vm.findEndTag(c,a,r),a=a.substring(0,r-o)+a.substring(n),u.lastIndex=r-o
return Hr(a)},bm=ym,Cm=function(e,t,n,r){var o
if(t.format=n,t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),"raw"===t.format)o=ht.trim(bm(e.serializer,r.innerHTML))
else if("text"===t.format)o=Hr(r.innerText||r.textContent)
else{if("tree"===t.format)return e.serializer.serialize(r,t)
o=function(e,t){var n=jc(e),r=new RegExp("^(<"+n+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+n+">[\r\n]*|<br \\/>[\r\n]*)$")
return t.replace(r,"")}(e,e.serializer.serialize(r,t))}return"text"===t.format||Fr(yt.fromDom(r))?t.content=o:t.content=ht.trim(o),t.no_events||e.fire("GetContent",t),t.content},wm=ht.each,xm=function(e){this.compare=function(t,n){if(t.nodeName!==n.nodeName)return!1
var r=function(t){var n={}
return wm(e.getAttribs(t),(function(r){var o=r.nodeName.toLowerCase()
0!==o.indexOf("_")&&"style"!==o&&0!==o.indexOf("data-")&&(n[o]=e.getAttrib(t,o))})),n},o=function(e,t){var n,r
for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1
if(e[r]!==n)return!1
delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1
return!0}
return!!o(r(t),r(n))&&(!!o(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))&&(!Pf(t)&&!Pf(n)))}},Sm=function(e,t,n){return b.from(n.container()).filter(kn).exists((function(r){var o=e?0:-1
return t(r.data.charAt(n.offset()+o))}))},Nm=l(Sm,!0,If),Em=l(Sm,!1,If),km=function(e){var t=e.container()
return kn(t)&&(0===t.data.length||jr(t.data)&&Dl.isBookmarkNode(t.parentNode))},_m=function(e,t){return function(n){return b.from(Us(e?0:-1,n)).filter(t).isSome()}},Rm=function(e){return Dn(e)&&"block"===Vn(yt.fromDom(e),"display")},Tm=function(e){return Bn(e)&&!function(e){return yn(e)&&"all"===e.getAttribute("data-mce-bogus")}(e)},Am=_m(!0,Rm),Dm=_m(!1,Rm),Om=_m(!0,Ln),Bm=_m(!1,Ln),Pm=_m(!0,Sn),Lm=_m(!1,Sn),Im=_m(!0,Tm),Mm=_m(!1,Tm),Fm=function(e){var t=wu(e,"br"),n=j(function(e){for(var t=[],n=e.dom;n;)t.push(yt.fromDom(n)),n=n.lastChild
return t}(e).slice(-1),Or)
t.length===n.length&&U(n,rn)},Um=function(e){nn(e),en(e,yt.fromHtml('<br data-mce-bogus="1">'))},zm=function(e){Vt(e).each((function(t){It(t).each((function(n){Ar(e)&&Or(t)&&Ar(n)&&rn(t)}))}))},jm=function(e,t,n){return Nt(t,e)?function(e,t){for(var n=A(t)?t:p,r=e.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,a=yt.fromDom(i)
if(o.push(a),!0===n(a))break
r=i}return o}(e,(function(e){return n(e)||xt(e,t)})).slice(0,-1):[]},Hm=function(e,t){return jm(e,t,p)},Vm=function(e,t){return[e].concat(Hm(e,t))},qm=function(e,t,n){return hf(e,t,n,km)},$m=function(e,t){return q(Vm(yt.fromDom(t.container()),e),Ar)},Wm=function(e,t,n){return qm(e,t.dom,n).forall((function(e){return $m(t,n).fold((function(){return!1===Fs(e,n,t.dom)}),(function(r){return!1===Fs(e,n,t.dom)&&Nt(r,yt.fromDom(e.container()))}))}))},Km=function(e,t,n){return $m(t,n).fold((function(){return qm(e,t.dom,n).forall((function(e){return!1===Fs(e,n,t.dom)}))}),(function(t){return qm(e,t.dom,n).isNone()}))},Xm=l(Km,!1),Ym=l(Km,!0),Gm=l(Wm,!1),Jm=l(Wm,!0),Qm=function(e){return Xs(e).exists(Or)},Zm=function(e,t,n){var r=j(Vm(yt.fromDom(n.container()),t),Ar),o=G(r).getOr(t)
return pf(e,o.dom,n).filter(Qm)},ep=function(e,t){return Xs(t).exists(Or)||Zm(!0,e,t).isSome()},tp=function(e,t){return function(e){return b.from(e.getNode(!0)).map(yt.fromDom)}(t).exists(Or)||Zm(!1,e,t).isSome()},np=l(Zm,!1),rp=l(Zm,!0),op=function(e){return mc.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},ip=function(e,t){var n=j(Vm(yt.fromDom(t.container()),e),Ar)
return G(n).getOr(e)},ap=function(e,t){return op(t)?Em(t):Em(t)||bf(ip(e,t).dom,t).exists(Em)},up=function(e,t){return op(t)?Nm(t):Nm(t)||yf(ip(e,t).dom,t).exists(Nm)},cp=function(e){return Xs(e).bind((function(e){return pr(e,Rt)})).exists((function(e){return function(e){return I(["pre","pre-wrap"],e)}(Vn(e,"white-space"))}))},sp=function(e,t){return function(e,t){return bf(e.dom,t).isNone()}(e,t)||function(e,t){return yf(e.dom,t).isNone()}(e,t)||Xm(e,t)||Ym(e,t)||tp(e,t)||ep(e,t)},fp=function(e,t){return!cp(t)&&(Xm(e,t)||Gm(e,t)||tp(e,t)||ap(e,t))},lp=function(e,t){return!cp(t)&&(Ym(e,t)||Jm(e,t)||ep(e,t)||up(e,t))},dp=function(e,t){return fp(e,t)||lp(e,function(e){var t=e.container(),n=e.offset()
return kn(t)&&n<t.data.length?mc(t,n+1):e}(t))},mp=function(e,t){return Lf(e.charAt(t))},pp=function(e){var t=e.container()
return kn(t)&&_e(t.data,Ur)},gp=function(e){var t=e.data,n=function(e){var t=e.split("")
return F(t,(function(e,n){return Lf(e)&&n>0&&n<t.length-1&&Mf(t[n-1])&&Mf(t[n+1])?" ":e})).join("")}(t)
return n!==t&&(e.data=n,!0)},hp=function(e,t){return b.some(t).filter(pp).bind((function(t){var n=t.container()
return function(e,t){var n=t.data,r=mc(t,0)
return!(!mp(n,0)||dp(e,r)||(t.data=" "+n.slice(1),0))}(e,n)||gp(n)||function(e,t){var n=t.data,r=mc(t,n.length-1)
return!(!mp(n,n.length-1)||dp(e,r)||(t.data=n.slice(0,-1)+" ",0))}(e,n)?b.some(t):b.none()}))},vp=function(e){var t=yt.fromDom(e.getBody())
e.selection.isCollapsed()&&hp(t,mc.fromRangeStart(e.selection.getRng())).each((function(t){e.selection.setRng(t.toRange())}))},yp=function(e,t,n){if(0!==n){var r=yt.fromDom(e),o=mr(r,Ar).getOr(r),i=e.data.slice(t,t+n),a=t+n>=e.data.length&&lp(o,gc(e,e.data.length)),u=0===t&&fp(o,gc(e,0))
e.replaceData(t,n,function(e,t,n){return V(e,(function(r,o){return If(o)||Lf(o)?r.previousCharIsSpace||""===r.str&&t||r.str.length===e.length-1&&n?{previousCharIsSpace:!1,str:r.str+Ur}:{previousCharIsSpace:!0,str:r.str+" "}:{previousCharIsSpace:!1,str:r.str+o}}),{previousCharIsSpace:!1,str:""}).str}(i,u,a))}},bp=function(e,t){var n=e.data.slice(t),r=n.length-De(n).length
return yp(e,t,r)},Cp=function(e,t){var n=e.data.slice(0,t),r=n.length-Oe(n).length
return yp(e,t-r,r)},wp=function(e,t,n,r){void 0===r&&(r=!0)
var o=Oe(e.data).length,i=r?e:t,a=r?t:e
return r?i.appendData(a.data):i.insertData(0,a.data),rn(yt.fromDom(a)),n&&bp(i,o),i},xp=function(e,t){return function(e,t){var n=e.container(),r=e.offset()
return!1===gc.isTextPosition(e)&&n===t.parentNode&&r>gc.before(t).offset()}(t,e)?gc(t.container(),t.offset()-1):t},Sp=function(e){return so(e.previousSibling)?b.some((t=e.previousSibling,kn(t)?gc(t,t.data.length):gc.after(t))):e.previousSibling?wf(e.previousSibling):b.none()
var t},Np=function(e){return so(e.nextSibling)?b.some((t=e.nextSibling,kn(t)?gc(t,0):gc.before(t))):e.nextSibling?Cf(e.nextSibling):b.none()
var t},Ep=function(e,t){return Sp(t).orThunk((function(){return Np(t)})).orThunk((function(){return function(e,t){var n=gc.before(t.previousSibling?t.previousSibling:t.parentNode)
return bf(e,n).fold((function(){return yf(e,gc.after(t))}),b.some)}(e,t)}))},kp=function(e,t){return Np(t).orThunk((function(){return Sp(t)})).orThunk((function(){return function(e,t){return yf(e,gc.after(t)).fold((function(){return bf(e,gc.before(t))}),b.some)}(e,t)}))},_p=function(e,t,n){return function(e,t,n){return e?kp(t,n):Ep(t,n)}(e,t,n).map(l(xp,n))},Rp=function(e,t,n){n.fold((function(){e.focus()}),(function(n){e.selection.setRng(n.toRange(),t)}))},Tp=function(e,t){return t&&fe(e.schema.getBlockElements(),Et(t))},Ap=function(e){if(Co(e)){var t=yt.fromHtml('<br data-mce-bogus="1">')
return nn(e),en(e,t),b.some(gc.before(t.dom))}return b.none()},Dp=function(e,t,n){var r,o,i,a,u=It(e).filter(Tt),c=Mt(e).filter(Tt)
return rn(e),(r=u,o=c,i=t,a=function(e,t,r){var o=e.dom,i=t.dom,a=o.data.length
return wp(o,i,n),r.container()===i?gc(o,a):r},r.isSome()&&o.isSome()&&i.isSome()?b.some(a(r.getOrDie(),o.getOrDie(),i.getOrDie())):b.none()).orThunk((function(){return n&&(u.each((function(e){return Cp(e.dom,e.dom.length)})),c.each((function(e){return bp(e.dom,0)}))),t}))},Op=function(e,t,n,r){void 0===r&&(r=!0)
var o,i=_p(t,e.getBody(),n.dom),a=mr(n,l(Tp,e),(o=e.getBody(),function(e){return e.dom===o})),u=Dp(n,i,function(e,t){return fe(e.schema.getTextInlineElements(),Et(t))}(e,n))
e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):a.bind(Ap).fold((function(){r&&Rp(e,t,u)}),(function(n){r&&Rp(e,t,b.some(n))}))},Bp=function(e,t){return{start:e,end:t}},Pp=sr([{removeTable:["element"]},{emptyCells:["cells"]},{deleteCellSelection:["rng","cell"]}]),Lp=function(e,t){return vr(yt.fromDom(e),"td,th",t)},Ip=function(e,t){return gr(e,"table",t)},Mp=function(e){return!xt(e.start,e.end)},Fp=function(e,t){return Ip(e.start,t).bind((function(n){return Ip(e.end,t).bind((function(e){return t=xt(n,e),r=n,t?b.some(r):b.none()
var t,r}))}))},Up=function(e){return wu(e,"td,th")},zp=function(e,t){var n=Lp(t.startContainer,e),r=Lp(t.endContainer,e)
return t.collapsed?b.none():Mu(n,r,Bp).fold((function(){return n.fold((function(){return r.bind((function(t){return Ip(t,e).bind((function(e){return G(Up(e)).map((function(e){return Bp(e,t)}))}))}))}),(function(t){return Ip(t,e).bind((function(e){return J(Up(e)).map((function(e){return Bp(t,e)}))}))}))}),(function(t){return jp(e,t)?b.none():function(e,t){return Ip(e.start,t).bind((function(t){return J(Up(t)).map((function(t){return Bp(e.start,t)}))}))}(t,e)}))},jp=function(e,t){return Fp(t,e).isSome()},Hp=function(e,t,n){return e.filter((function(e){return Mp(e)&&jp(n,e)})).orThunk((function(){return zp(n,t)})).bind((function(e){return function(e,t){return Fp(e,t).map((function(t){return function(e,t,n){return{rng:e,table:t,cells:n}}(e,t,Up(t))}))}(e,n)}))},Vp=function(e,t){return $(e,(function(e){return xt(e,t)}))},qp=function(e,t,n){return e.filter((function(e){return function(e,t){return!Mp(e)&&Fp(e,t).exists((function(e){var t=e.dom.rows
return 1===t.length&&1===t[0].cells.length}))}(e,n)&&yl(e.start,t)})).map((function(e){return e.start}))},$p=function(e){return function(e){return Mu(Vp(e.cells,e.rng.start),Vp(e.cells,e.rng.end),(function(t,n){return e.cells.slice(t,n+1)}))}(e).map((function(t){var n=e.cells
return t.length===n.length?Pp.removeTable(e.table):Pp.emptyCells(t)}))},Wp=function(e,t){var n=function(e){return function(t){return xt(e,t)}}(e),r=function(e,t){var n=Lp(e.startContainer,t),r=Lp(e.endContainer,t)
return Mu(n,r,Bp)}(t,n)
return qp(r,t,n).map((function(e){return Pp.deleteCellSelection(t,e)})).orThunk((function(){return Hp(r,t,n).bind($p)}))},Kp=function(e){var t
return(8===kt(t=e)||"#comment"===Et(t)?It(e):Vt(e)).bind(Kp).orThunk((function(){return b.some(e)}))},Xp=function(e,t){return U(t,Um),e.selection.setCursorLocation(t[0].dom,0),!0},Yp=function(e,t,n){t.deleteContents()
var r,o=Kp(n).getOr(n),i=yt.fromDom(e.dom.getParent(o.dom,e.dom.isBlock))
if(Co(i)&&(Um(i),e.selection.setCursorLocation(i.dom,0)),!xt(n,i)){var a=Lt(i).is(n)?[]:Lt(r=i).map(zt).map((function(e){return j(e,(function(e){return!xt(r,e)}))})).getOr([])
U(a.concat(zt(n)),(function(e){xt(e,i)||Nt(e,i)||rn(e)}))}return!0},Gp=function(e,t){return Op(e,!1,t),!0},Jp=function(e,t,n,r){return Zp(t,r).fold((function(){return function(e,t,n){return Wp(t,n).map((function(t){return t.fold(l(Gp,e),l(Xp,e),l(Yp,e))}))}(e,t,n)}),(function(t){return function(e,t){return eg(e,t)}(e,t)})).getOr(!1)},Qp=function(e,t){return q(Vm(t,e),Mr)},Zp=function(e,t){return q(Vm(t,e),(function(e){return"caption"===Et(e)}))},eg=function(e,t){return Um(t),e.selection.setCursorLocation(t.dom,0),b.some(!0)},tg=function(e,t,n,r,o){return gf(n,e.getBody(),o).bind((function(i){return function(e,t,n,r){return Cf(e.dom).bind((function(o){return wf(e.dom).map((function(e){return t?n.isEqual(o)&&r.isEqual(e):n.isEqual(e)&&r.isEqual(o)}))})).getOr(!0)}(r,n,o,i)?function(e,t){return eg(e,t)}(e,r):function(e,t,n){return Zp(e,yt.fromDom(n.getNode())).map((function(e){return!1===xt(e,t)}))}(t,r,i)})).or(b.some(!0))},ng=function(e,t,n,r){var o=gc.fromRangeStart(e.selection.getRng())
return Qp(n,r).bind((function(r){return Co(r)?eg(e,r):function(e,t,n,r,o){return gf(n,e.getBody(),o).bind((function(e){return Qp(t,yt.fromDom(e.getNode())).map((function(e){return!1===xt(e,r)}))}))}(e,n,t,r,o)})).getOr(!1)},rg=function(e,t){return e?Pm(t):Lm(t)},og=function(e,t,n){var r=yt.fromDom(e.getBody())
return Zp(r,n).fold((function(){return ng(e,t,r,n)||function(e,t){var n=gc.fromRangeStart(e.selection.getRng())
return rg(t,n)||pf(t,e.getBody(),n).exists((function(e){return rg(t,e)}))}(e,t)}),(function(n){return function(e,t,n,r){var o=gc.fromRangeStart(e.selection.getRng())
return Co(r)?eg(e,r):tg(e,n,t,r,o)}(e,t,r,n).getOr(!1)}))},ig=function(e,t){var n=yt.fromDom(e.selection.getStart(!0)),r=gl(e)
return e.selection.isCollapsed()&&0===r.length?og(e,t,n):function(e,t){var n=yt.fromDom(e.getBody()),r=e.selection.getRng(),o=gl(e)
return 0!==o.length?Xp(e,o):Jp(e,n,r,t)}(e,n)},ag=function(e){var t=gc.fromRangeStart(e),n=gc.fromRangeEnd(e),r=e.commonAncestorContainer
return pf(!1,r,n).map((function(o){return!Fs(t,n,r)&&Fs(t,o,r)?function(e,t,n,r){var o=document.createRange()
return o.setStart(e,t),o.setEnd(n,r),o}(t.container(),t.offset(),o.container(),o.offset()):e})).getOr(e)},ug=function(e){return e.collapsed?e:ag(e)},cg=function(e,t){return e.getBlockElements()[t.name]&&function(e){return e.firstChild&&e.firstChild===e.lastChild}(t)&&function(e){return"br"===e.name||e.value===Ur}(t.firstChild)},sg=function(e,t){var n=t.firstChild,r=t.lastChild
return n&&"meta"===n.name&&(n=n.next),r&&"mce_marker"===r.attr("id")&&(r=r.prev),function(e,t){var n=e.getNonEmptyElements()
return t&&(t.isEmpty(n)||cg(e,t))}(e,r)&&(r=r.prev),!(!n||n!==r)&&("ul"===n.name||"ol"===n.name)},fg=function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&function(e){return e.data===Ur||An(e)}(e.firstChild)},lg=function(e){return e.length>0&&(!(t=e[e.length-1]).firstChild||fg(t))?e.slice(0,-1):e
var t},dg=function(e,t){var n=e.getParent(t,e.isBlock)
return n&&"LI"===n.nodeName?n:null},mg=function(e,t){var n=gc.after(e),r=sf(t).prev(n)
return r?r.toRange():null},pg=function(e,t,n){var r=e.parentNode
return ht.each(t,(function(t){r.insertBefore(t,e)})),function(e,t){var n=gc.before(e),r=sf(t).next(n)
return r?r.toRange():null}(e,n)},gg=function(e,t,n,r){var o,i=function(e,t,n){var r=t.serialize(n)
return function(e){var t=e.firstChild,n=e.lastChild
return t&&"META"===t.nodeName&&t.parentNode.removeChild(t),n&&"mce_marker"===n.id&&n.parentNode.removeChild(n),e}(e.createFragment(r))}(t,e,r),a=dg(t,n.startContainer),u=lg((o=i.firstChild,ht.grep(o.childNodes,(function(e){return"LI"===e.nodeName})))),c=t.getRoot(),s=function(e){var r=gc.fromRangeStart(n),o=sf(t.getRoot()),i=1===e?o.prev(r):o.next(r)
return!i||dg(t,i.getNode())!==a}
return s(1)?pg(a,u,c):s(2)?function(e,t,n,r){return r.insertAfter(t.reverse(),e),mg(t[0],n)}(a,u,c,t):function(e,t,n,r){var o=function(e,t){var n=t.cloneRange(),r=t.cloneRange()
return n.setStartBefore(e),r.setEndAfter(e),[n.cloneContents(),r.cloneContents()]}(e,r),i=e.parentNode
return i.insertBefore(o[0],e),ht.each(t,(function(t){i.insertBefore(t,e)})),i.insertBefore(o[1],e),i.removeChild(e),mg(t[t.length-1],n)}(a,u,c,n)},hg=Pn,vg=function(e){var t=e.dom,n=ug(e.selection.getRng())
e.selection.setRng(n)
var r=t.getParent(n.startContainer,hg)
!function(e,t,n){return null!==n&&n===e.getParent(t.endContainer,hg)&&yl(yt.fromDom(n),t)}(t,n,r)?e.getDoc().execCommand("Delete",!1,null):Yp(e,n,yt.fromDom(r))},yg=function(e,t,n){var r,o,i,a,u,c,s=e.selection,f=e.dom;/^ | $/.test(t)&&(t=function(e,t,n){var r=yt.fromDom(e.getRoot())
return n=fp(r,gc.fromRangeStart(t))?n.replace(/^ /,"&nbsp;"):n.replace(/^&nbsp;/," "),lp(r,gc.fromRangeEnd(t))?n.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):n.replace(/&nbsp;(<br( \/)?>)?$/," ")}(f,s.getRng(),t))
var l=e.parser,d=n.merge,m=dm({validate:rs(e)},e.schema),p='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>'
if(i={content:t,format:"html",selection:!0,paste:n.paste},(i=e.fire("BeforeSetContent",i)).isDefaultPrevented())e.fire("SetContent",{content:i.content,format:"html",selection:!0,paste:n.paste})
else{-1===(t=i.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,p)
var g=(u=s.getRng()).startContainer||(u.parentElement?u.parentElement():null),h=e.getBody()
g===h&&s.isCollapsed()&&f.isBlock(h.firstChild)&&function(e,t){return t&&!e.schema.getShortEndedElements()[t.nodeName]}(e,h.firstChild)&&f.isEmpty(h.firstChild)&&((u=f.createRng()).setStart(h.firstChild,0),u.setEnd(h.firstChild,0),s.setRng(u)),s.isCollapsed()||vg(e)
var v,y={context:(r=s.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0},C=l.parse(t,y)
if(!0===n.paste&&sg(e.schema,C)&&function(e,t){return!!dg(e,t)}(f,r))return u=gg(m,f,s.getRng(),C),s.setRng(u),void e.fire("SetContent",i)
if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(C),"mce_marker"===(c=C.lastChild).attr("id"))for(a=c,c=c.prev;c;c=c.walk(!0))if(3===c.type||!f.isBlock(c.name)){e.schema.isValidChild(c.parent.name,"span")&&c.parent.insert(a,c,"br"===c.name)
break}if(e._selectionOverrides.showBlockCaretContainer(r),y.invalid){for(e.selection.setContent(p),r=s.getNode(),o=e.getBody(),9===r.nodeType?r=c=o:c=r;c!==o;)r=c,c=c.parentNode
t=r===o?o.innerHTML:f.getOuterHTML(r),t=m.serialize(l.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,(function(){return m.serialize(C)})))),r===o?f.setHTML(o,t):f.setOuterHTML(r,t)}else(function(e,t,n){if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n)
else{var r=n.firstChild,o=n.lastChild
!r||r===o&&"BR"===r.nodeName?e.dom.setHTML(n,t):e.selection.setContent(t)}})(e,t=m.serialize(C),r);(function(e,t){var n=e.schema.getTextInlineElements(),r=e.dom
if(t){var o=e.getBody(),i=new xm(r)
ht.each(r.select("*[data-mce-fragment]"),(function(e){for(var t=e.parentNode;t&&t!==o;t=t.parentNode)n[e.nodeName.toLowerCase()]&&i.compare(t,e)&&r.remove(e,!0)}))}})(e,d),function(e,t){var n,r,o=e.dom,i=e.selection
if(t){i.scrollIntoView(t)
var a=function(t){for(var n=e.getBody();t&&t!==n;t=t.parentNode)if("false"===o.getContentEditable(t))return t
return null}(t)
if(a)return o.remove(t),void i.select(a)
var u=o.createRng(),c=t.previousSibling
c&&3===c.nodeType?(u.setStart(c,c.nodeValue.length),lt.ie||(r=t.nextSibling)&&3===r.nodeType&&(c.appendData(r.data),r.parentNode.removeChild(r))):(u.setStartBefore(t),u.setEndBefore(t))
var s=o.getParent(t,o.isBlock)
o.remove(t),s&&o.isEmpty(s)&&(e.$(s).empty(),u.setStart(s,0),u.setEnd(s,0),hg(s)||function(e){return!!e.getAttribute("data-mce-fragment")}(s)||!(n=function(t){var n=gc.fromRangeStart(t)
if(n=sf(e.getBody()).next(n))return n.toRange()}(u))?o.add(s,o.create("br",{"data-mce-bogus":"1"})):(u=n,o.remove(s))),i.setRng(u)}}(e,f.get("mce_marker")),v=e.getBody(),ht.each(v.getElementsByTagName("*"),(function(e){e.removeAttribute("data-mce-fragment")})),function(e,t){b.from(e.getParent(t,"td,th")).map(yt.fromDom).each(zm)}(f,s.getStart()),e.fire("SetContent",i),e.addVisual()}},bg=function(e,t){t(e),e.firstChild&&bg(e.firstChild,t),e.next&&bg(e.next,t)},Cg=function(e,t,n){var r=function(e,t,n){var r={},o={},i=[]
for(var a in n.firstChild&&bg(n.firstChild,(function(n){U(e,(function(e){e.name===n.name&&(r[e.name]?r[e.name].nodes.push(n):r[e.name]={filter:e,nodes:[n]})})),U(t,(function(e){"string"==typeof n.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(n):o[e.name]={filter:e,nodes:[n]})}))})),r)r.hasOwnProperty(a)&&i.push(r[a])
for(var u in o)o.hasOwnProperty(u)&&i.push(o[u])
return i}(e,t,n)
U(r,(function(e){U(e.filter.callbacks,(function(t){t(e.nodes,e.filter.name,{})}))}))},wg=function(e){return e instanceof sm},xg=function(e,t){e.dom.setHTML(e.getBody(),t),function(e){Gd(e)&&Cf(e.getBody()).each((function(t){var n=t.getNode(),r=Sn(n)?Cf(n).getOr(t):t
e.selection.setRng(r.toRange())}))}(e)},Sg=function(e,t,n){return n.format=n.format?n.format:"html",n.set=!0,n.content=wg(t)?"":t,wg(t)||n.no_events||(e.fire("BeforeSetContent",n),t=n.content),b.from(e.getBody()).fold(s(t),(function(r){return wg(t)?function(e,t,n,r){Cg(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n)
var o=dm({validate:e.validate},e.schema).serialize(n)
return r.content=Fr(yt.fromDom(t))?o:ht.trim(o),xg(e,r.content),r.no_events||e.fire("SetContent",r),n}(e,r,t,n):function(e,t,n,r){var o,i
return 0===n.length||/^\s+$/.test(n)?(i='<br data-mce-bogus="1">',"TABLE"===t.nodeName?n="<tr><td>"+i+"</td></tr>":/^(UL|OL)$/.test(t.nodeName)&&(n="<li>"+i+"</li>"),(o=jc(e))&&e.schema.isValidChild(t.nodeName.toLowerCase(),o.toLowerCase())?(n=i,n=e.dom.createHTML(o,Hc(e),n)):n||(n='<br data-mce-bogus="1">'),xg(e,n),e.fire("SetContent",r)):("raw"!==r.format&&(n=dm({validate:e.validate},e.schema).serialize(e.parser.parse(n,{isRootContent:!0,insert:!0}))),r.content=Fr(yt.fromDom(t))?n:ht.trim(n),xg(e,r.content),r.no_events||e.fire("SetContent",r)),r.content}(e,r,t,n)}))},Ng=$f,Eg=function(e,t,n){var r=e.formatter.get(n)
if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0
return!1},kg=function(e,t,n,r){var o=e.dom.getRoot()
return t!==o&&(t=e.dom.getParent(t,(function(t){return!!Eg(e,t,n)||(t.parentNode===o||!!Tg(e,t,n,r,!0))})),Tg(e,t,n,r))},_g=function(e,t,n){return!!Ng(t,n.inline)||(!!Ng(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0))},Rg=function(e,t,n,r,o,i){var a,u,c,s=n[r]
if(n.onmatch)return n.onmatch(t,n,r)
if(s)if(void 0===s.length){for(a in s)if(s.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):Kf(e,t,a),o&&!u&&!n.exact)return
if((!o||n.exact)&&!Ng(u,Wf(e,qf(s[a],i),a)))return}}else for(c=0;c<s.length;c++)if("attributes"===r?e.getAttrib(t,s[c]):Kf(e,t,s[c]))return n
return n},Tg=function(e,t,n,r,o){var i,a,u,c,s=e.formatter.get(n),f=e.dom
if(s&&t)for(a=0;a<s.length;a++)if(i=s[a],_g(e.dom,t,i)&&Rg(f,t,i,"attributes",o,r)&&Rg(f,t,i,"styles",o,r)){if(c=i.classes)for(u=0;u<c.length;u++)if(!e.dom.hasClass(t,c[u]))return
return i}},Ag=function(e,t,n,r){if(r)return kg(e,r,t,n)
if(r=e.selection.getNode(),kg(e,r,t,n))return!0
var o=e.selection.getStart()
return!(o===r||!kg(e,o,t,n))},Dg=function(e,t,n){var r=[],o={},i=e.selection.getStart()
return e.dom.getParent(i,(function(i){for(var a=0;a<t.length;a++){var u=t[a]
!o[u]&&Tg(e,i,u,n)&&(o[u]=!0,r.push(u))}}),e.dom.getRoot()),r},Og=function(e,t){var n,r,o,i,a,u=e.formatter.get(t),c=e.dom
if(u)for(n=e.selection.getStart(),r=Yf(c,n),i=u.length-1;i>=0;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0
for(o=r.length-1;o>=0;o--)if(c.is(r[o],a))return!0}return!1},Bg=function(e,t,n){return V(n,(function(n,r){var o=function(e,t){return M(e.formatter.get(t),(function(e){var t=function(e){return e.length>1&&"%"===e.charAt(0)}
return M(["styles","attributes"],(function(n){return se(e,n).exists((function(e){var n=E(e)?e:ce(e)
return M(n,t)}))}))}))}(e,r)
return e.formatter.matchNode(t,r,{},o)?n.concat([r]):n}),[])},Pg=zr,Lg="_mce_caret",Ig=function(e){return function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==Pg||e.childNodes.length>1)return[]
1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length>0},Mg=function(e){if(e){var t=new _r(e,e)
for(e=t.current();e;e=t.next())if(kn(e))return e}return null},Fg=function(e){var t=yt.fromTag("span")
return Un(t,{id:Lg,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&en(t,yt.fromText(Pg)),t},Ug=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(Ig(t))Op(e,!1,yt.fromDom(t),n)
else{var i=o.getRng(),a=r.getParent(t,r.isBlock),u=i.startContainer,c=i.startOffset,s=i.endContainer,f=i.endOffset,l=function(e){var t=Mg(e)
return t&&t.nodeValue.charAt(0)===Pg&&t.deleteData(0,1),t}(t)
r.remove(t,!0),u===l&&c>0&&i.setStart(l,c-1),s===l&&f>0&&i.setEnd(l,f-1),a&&r.isEmpty(a)&&Um(yt.fromDom(a)),o.setRng(i)}},zg=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(t)Ug(e,t,n)
else if(!(t=Nf(e.getBody(),o.getStart())))for(;t=r.get(Lg);)Ug(e,t,!1)},jg=function(e,t){return e.appendChild(t),t},Hg=function(e,t){var n=H(e,(function(e,t){return jg(e,t.cloneNode(!1))}),t)
return jg(n,n.ownerDocument.createTextNode(Pg))},Vg=function(e,t,n,r){var o,i,a,u=e.dom,c=e.selection,s=[],f=c.getRng(),d=f.startContainer,m=f.startOffset
for(i=d,3===d.nodeType&&(m!==d.nodeValue.length&&(o=!0),i=i.parentNode);i;){if(Tg(e,i,t,n,r)){a=i
break}i.nextSibling&&(o=!0),s.push(i),i=i.parentNode}if(a)if(o){var p=c.getBookmark()
f.collapse(!0)
var g=sl(e,f,e.formatter.get(t),!0)
g=Gl(g),e.formatter.remove(t,n,g,r),c.moveToBookmark(p)}else{var h=Nf(e.getBody(),a),v=Fg(!1).dom;(function(e,t,n){var r=e.dom,o=r.getParent(n,l(jf,e))
o&&r.isEmpty(o)?n.parentNode.replaceChild(t,n):(Fm(yt.fromDom(n)),r.isEmpty(n)?n.parentNode.replaceChild(t,n):r.insertAfter(t,n))})(e,v,null!==h?h:a)
var y=function(e,t,n,r,o,i){var a=e.formatter,u=e.dom,c=j(Z(a.get()),(function(e){return e!==r&&!_e(e,"removeformat")})),s=Bg(e,n,c)
if(j(s,(function(t){return!Gf(e,t,r)})).length>0){var f=n.cloneNode(!1)
return u.add(t,f),a.remove(r,o,f,i),u.remove(f),b.some(f)}return b.none()}(e,v,a,t,n,r),C=Hg(s.concat(y.toArray()),v)
Ug(e,h,!1),c.setCursorLocation(C,1),u.isEmpty(a)&&u.remove(a)}},qg=function(e){e.on("mouseup keydown",(function(t){(function(e,t){var n=e.selection,r=e.getBody()
zg(e,null,!1),8!==t&&46!==t||!n.isCollapsed()||n.getStart().innerHTML!==Pg||zg(e,Nf(r,n.getStart())),37!==t&&39!==t||zg(e,Nf(r,n.getStart()))})(e,t.keyCode)}))},$g=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(Et(t))&&!Sf(t.dom)&&!xn(t.dom)},Wg={},Kg=pe,Xg=de;(function(e,t){Wg[e]||(Wg[e]=[]),Wg[e].push(t)})("pre",(function(e){var t,n=e.selection.getRng(),r=bn(["pre"])
n.collapsed||(t=e.selection.getSelectedBlocks(),Xg(Kg(Kg(t,r),(function(e){return r(e.previousSibling)&&-1!==ge(t,e.previousSibling)})),(function(e){var t,n
t=e.previousSibling,$a(n=e).remove(),$a(t).append("<br><br>").append(n.childNodes)})))}))
var Yg=ht.each,Gg=function(e){return yn(e)&&!Pf(e)&&!Sf(e)&&!xn(e)},Jg=function(e,t){var n
for(n=e;n;n=n[t]){if(kn(n)&&0!==n.nodeValue.length)return e
if(yn(n)&&!Pf(n))return n}return e},Qg=function(e,t,n){var r,o,i=new xm(e)
if(t&&n&&(t=Jg(t,"previousSibling"),n=Jg(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)o=r,r=r.nextSibling,t.appendChild(o)
return e.remove(n),ht.each(ht.grep(n.childNodes),(function(e){t.appendChild(e)})),t}return n},Zg=function(e,t,n,r){if(r&&!1!==t.merge_siblings){var o=Qg(e,zf(r),r)
Qg(e,o,zf(o,!0))}},eh=function(e,t,n){Yg(e.childNodes,(function(e){Gg(e)&&(t(e)&&n(e),e.hasChildNodes()&&eh(e,t,n))}))},th=function(e,t){return function(n){return!(!n||!Kf(e,n,t))}},nh=function(e,t,n){return function(r){e.setStyle(r,t,n),""===r.getAttribute("style")&&r.removeAttribute("style"),function(e,t){"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,!0)}(e,r)}},rh=sr([{keep:[]},{rename:["name"]},{removed:[]}]),oh=/^(src|href|style)$/,ih=ht.each,ah=$f,uh=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},ch=function(e,t,n){var r,o
if(r=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],yn(r)){var i=r.childNodes.length-1
!n&&o&&o--,r=r.childNodes[o>i?i:o]}return kn(r)&&n&&o>=r.nodeValue.length&&(r=new _r(r,e.getBody()).next()||r),kn(r)&&!n&&0===o&&(r=new _r(r,e.getBody()).prev()||r),r},sh=function(e,t){var n=t?"firstChild":"lastChild"
if(function(e){return/^(TR|TH|TD)$/.test(e.nodeName)}(e)&&e[n]){var r=e[n]
return"TR"===e.nodeName&&r[n]||r}return e},fh=function(e,t,n,r){var o=e.create(n,r)
return t.parentNode.insertBefore(o,t),o.appendChild(t),o},lh=function(e,t,n,r,o){var i=yt.fromDom(t),a=yt.fromDom(e.create(r,o)),u=n?Ut(i):Ft(i)
return tn(a,u),n?(Jt(i,a),Zt(a,i)):(Qt(i,a),en(a,i)),a.dom},dh=function(e,t,n,r){return!(t=zf(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},mh=function(e,t,n,r,o){var i,a=e.dom
if(!function(e,t,n){return!!ah(t,n.inline)||!!ah(t,n.block)||(n.selector?yn(t)&&e.is(t,n.selector):void 0)}(a,r,t)&&!function(e,t){return t.links&&"A"===e.nodeName}(r,t))return rh.keep()
var u=r
if(t.inline&&"all"===t.remove&&E(t.preserve_attributes)){var c=j(a.getAttribs(u),(function(e){return I(t.preserve_attributes,e.name.toLowerCase())}))
if(a.removeAllAttribs(u),U(c,(function(e){return a.setAttrib(u,e.name,e.value)})),c.length>0)return rh.rename("span")}if("all"!==t.remove){ih(t.styles,(function(e,r){e=Wf(a,qf(e,n),r+""),D(r)&&(r=e,o=null),(t.remove_similar||!o||ah(Kf(a,o,r),e))&&a.setStyle(u,r,""),i=!0})),i&&""===a.getAttrib(u,"style")&&(u.removeAttribute("style"),u.removeAttribute("data-mce-style")),ih(t.attributes,(function(e,r){var i
if(e=qf(e,n),D(r)&&(r=e,o=null),t.remove_similar||!o||ah(a.getAttrib(o,r),e)){if("class"===r&&(e=a.getAttrib(u,r))&&(i="",U(e.split(/\s+/),(function(e){/mce\-\w+/.test(e)&&(i+=(i?" ":"")+e)})),i))return void a.setAttrib(u,r,i)
"class"===r&&u.removeAttribute("className"),oh.test(r)&&u.removeAttribute("data-mce-"+r),u.removeAttribute(r)}})),ih(t.classes,(function(e){e=qf(e,n),o&&!a.hasClass(o,e)||a.removeClass(u,e)}))
for(var s=a.getAttribs(u),f=0;f<s.length;f++){var l=s[f].nodeName
if(0!==l.indexOf("_")&&0!==l.indexOf("data-"))return rh.keep()}}return"none"!==t.remove?(function(e,t,n){var r,o=t.parentNode,i=e.dom,a=jc(e)
n.block&&(a?o===i.getRoot()&&(n.list_block&&ah(t,n.list_block)||U(Q(t.childNodes),(function(t){Hf(e,a,t.nodeName.toLowerCase())?r?r.appendChild(t):(r=fh(i,t,a),i.setAttribs(r,e.settings.forced_root_block_attrs)):r=0}))):i.isBlock(t)&&!i.isBlock(o)&&(dh(i,t,!1)||dh(i,t.firstChild,!0,!0)||t.insertBefore(i.create("br"),t.firstChild),dh(i,t,!0)||dh(i,t.lastChild,!1,!0)||t.appendChild(i.create("br")))),n.selector&&n.inline&&!ah(n.inline,t)||i.remove(t,!0)}(e,u,t),rh.removed()):rh.keep()},ph=function(e,t,n,r,o){return mh(e,t,n,r,o).fold(p,(function(t){return e.dom.rename(r,t),!0}),g)},gh=function(e,t,n,r){return mh(e,t,n,r,r).fold(s(r),(function(t){return e.dom.createFragment().appendChild(r),e.dom.rename(r,t)}),s(null))},hh=function(e,t,n,r,o){var i=e.formatter.get(t),a=i[0],u=!0,c=e.dom,s=e.selection,f=function(r){var u=function(e,t,n,r,o){var i
return U(Yf(e.dom,t.parentNode).reverse(),(function(t){if(!i&&"_start"!==t.id&&"_end"!==t.id){var a=Tg(e,t,n,r,o)
a&&!1!==a.split&&(i=t)}})),i}(e,r,t,n,o)
return function(e,t,n,r,o,i,a,u){var c,s,f,l=e.dom
if(n){for(var d=n.parentNode,m=r.parentNode;m&&m!==d;m=m.parentNode){c=l.clone(m,!1)
for(var p=0;p<t.length&&null!==(c=gh(e,t[p],u,c));p++);c&&(s&&c.appendChild(s),f||(f=c),s=c)}!i||a.mixed&&l.isBlock(n)||(r=l.split(n,r)),s&&(o.parentNode.insertBefore(s,o),f.appendChild(o),a.inline&&Zg(l,a,0,s))}return r}(e,i,u,r,r,!0,a,n)},l=function(t){var r,o
yn(t)&&c.getContentEditable(t)&&(r=u,u="true"===c.getContentEditable(t),o=!0)
var s=Q(t.childNodes)
if(u&&!o)for(var f=0;f<i.length&&!ph(e,i[f],n,t,t);f++);if(a.deep&&s.length){for(f=0;f<s.length;f++)l(s[f])
o&&(u=r)}},d=function(e){var t=c.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"]
return function(e){return Pf(e)&&yn(e)&&("_start"===e.id||"_end"===e.id)}(n)&&(n=n[e?"firstChild":"lastChild"]),kn(n)&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),c.remove(t,!0),n},m=function(t){var n,r,o=sl(e,t,i,!0)
if(a.split){if(o=Gl(o),(n=ch(e,o,!0))!==(r=ch(e,o))){if(n=sh(n,!0),r=sh(r,!1),uh(c,n,r)){var u=b.from(n.firstChild).getOr(n)
return f(lh(c,u,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void d(!0)}if(uh(c,r,n)){u=b.from(r.lastChild).getOr(r)
return f(lh(c,u,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void d(!1)}n=fh(c,n,"span",{id:"_start","data-mce-type":"bookmark"}),r=fh(c,r,"span",{id:"_end","data-mce-type":"bookmark"})
var s=c.createRng()
s.setStartAfter(n),s.setEndBefore(r),ll(c,s,(function(e){U(e,(function(e){Pf(e)||Pf(e.parentNode)||f(e)}))})),f(n),f(r),n=d(!0),r=d()}else n=r=f(n)
o.startContainer=n.parentNode?n.parentNode:n,o.startOffset=c.nodeIndex(n),o.endContainer=r.parentNode?r.parentNode:r,o.endOffset=c.nodeIndex(r)+1}ll(c,o,(function(t){U(t,(function(t){l(t)
U(["underline","line-through","overline"],(function(n){yn(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&Xf(c,t.parentNode)===n&&ph(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))}))}))}
if(r)if(Ff(r)){var p=c.createRng()
p.setStartBefore(r),p.setEndAfter(r),m(p)}else m(r)
else if("false"!==c.getContentEditable(s.getNode()))s.isCollapsed()&&a.inline&&!gl(e).length?Vg(e,t,n,o):(xl(s,!0,(function(){wl(e,m)})),a.inline&&Ag(e,t,n,s.getStart())&&Uf(c,s,s.getRng()),e.nodeChanged())
else{r=s.getNode()
for(var g=0;g<i.length&&(!i[g].ceFalseOverride||!ph(e,i[g],n,r,r));g++);}},vh=ht.each,yh=function(e,t,n,r){vh(t,(function(t){vh(e.dom.select(t.inline,r),(function(r){Gg(r)&&ph(e,t,n,r,t.exact?r:null)})),function(e,t,n){if(t.clear_child_styles){var r=t.links?"*:not(a)":"*"
Yg(e.select(r,n),(function(n){Gg(n)&&Yg(t.styles,(function(t,r){e.setStyle(n,r,"")}))}))}}(e.dom,t,r)}))},bh=ht.each,Ch=function(e,t,n,r){var o,i=e.formatter.get(t),a=i[0],u=!r&&e.selection.isCollapsed(),c=e.dom,s=e.selection,f=function(e,t){if(t=t||a,e){if(t.onformat&&t.onformat(e,t,n,r),bh(t.styles,(function(t,r){c.setStyle(e,r,qf(t,n))})),t.styles){var o=c.getAttrib(e,"style")
o&&c.setAttrib(e,"data-mce-style",o)}bh(t.attributes,(function(t,r){c.setAttrib(e,r,qf(t,n))})),bh(t.classes,(function(t){t=qf(t,n),c.hasClass(e,t)||c.addClass(e,t)}))}},l=function(e,t){var n=!1
return!!a.selector&&(bh(e,(function(e){if(!("collapsed"in e)||e.collapsed===u)return c.is(t,e.selector)&&!Sf(t)?(f(t,e),n=!0,!1):void 0})),n)},d=function(r,o,u,c){var s=[],d=!0,m=a.inline||a.block,p=r.create(m)
f(p),ll(r,o,(function(o){var u,g=function(o){var h=!1,v=d,y=o.nodeName.toLowerCase(),b=o.parentNode.nodeName.toLowerCase()
if(yn(o)&&r.getContentEditable(o)&&(v=d,d="true"===r.getContentEditable(o),h=!0),$f(y,"br"))return u=0,void(a.block&&r.remove(o))
if(a.wrapper&&Tg(e,o,t,n))u=0
else{if(d&&!h&&a.block&&!a.wrapper&&jf(e,y)&&Hf(e,b,m)){var C=r.rename(o,m)
return f(C),s.push(C),void(u=0)}if(a.selector){var w=l(i,o)
if(!a.inline||w)return void(u=0)}!d||h||!Hf(e,m,y)||!Hf(e,b,m)||!c&&3===o.nodeType&&1===o.nodeValue.length&&65279===o.nodeValue.charCodeAt(0)||Sf(o)||a.inline&&r.isBlock(o)?(u=0,bh(ht.grep(o.childNodes),g),h&&(d=v),u=0):(u||(u=r.clone(p,!1),o.parentNode.insertBefore(u,o),s.push(u)),u.appendChild(o))}}
bh(o,g)})),!0===a.links&&bh(s,(function(e){var t=function(e){"A"===e.nodeName&&f(e,a),bh(ht.grep(e.childNodes),t)}
t(e)})),bh(s,(function(o){var u=function(e){var t=!1
return bh(e.childNodes,(function(e){if(function(e){return e&&1===e.nodeType&&!Pf(e)&&!Sf(e)&&!xn(e)}(e))return t=e,!1})),t},c=function(e){var t=0
return bh(e.childNodes,(function(e){(function(e){return e&&kn(e)&&0===e.length})(e)||Pf(e)||t++})),t}(o)
!(s.length>1)&&r.isBlock(o)||0!==c?(a.inline||a.wrapper)&&(a.exact||1!==c||(o=function(e){var t,n=u(e)
return n&&!Pf(n)&&_g(r,n,a)&&(t=r.clone(n,!1),f(t),r.replace(t,e,!0),r.remove(n,!0)),t||e}(o)),yh(e,i,n,o),function(e,t,n,r,o){Tg(e,o.parentNode,n,r)&&ph(e,t,r,o)||t.merge_with_parents&&e.dom.getParent(o.parentNode,(function(i){if(Tg(e,i,n,r))return ph(e,t,r,o),!0}))}(e,a,t,n,o),function(e,t,n,r){t.styles&&t.styles.backgroundColor&&eh(r,th(e,"fontSize"),nh(e,"backgroundColor",qf(t.styles.backgroundColor,n)))}(r,a,n,o),function(e,t,n,r){var o=function(t){if(1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType){var n=Xf(e,t.parentNode)
e.getStyle(t,"color")&&n?e.setStyle(t,"text-decoration",n):e.getStyle(t,"text-decoration")===n&&e.setStyle(t,"text-decoration",null)}}
t.styles&&(t.styles.color||t.styles.textDecoration)&&(ht.walk(r,o,"childNodes"),o(r))}(r,a,0,o),function(e,t,n,r){"sub"!==t.inline&&"sup"!==t.inline||(eh(r,th(e,"fontSize"),nh(e,"fontSize","")),e.remove(e.select("sup"===t.inline?"sub":"sup",r),!0))}(r,a,0,o),Zg(r,a,0,o)):r.remove(o,!0)}))}
if("false"!==c.getContentEditable(s.getNode())){if(a){if(r)Ff(r)?l(i,r)||((o=c.createRng()).setStartBefore(r),o.setEndAfter(r),d(c,sl(e,o,i),0,!0)):d(c,r,0,!0)
else if(u&&a.inline&&!gl(e).length)(function(e,t,n){var r,o,i=e.selection,a=i.getRng(),u=a.startOffset,c=a.startContainer.nodeValue;(r=Nf(e.getBody(),i.getStart()))&&(o=Mg(r))
var s,f,l=/[^\s\u00a0\u00ad\u200b\ufeff]/
if(c&&u>0&&u<c.length&&l.test(c.charAt(u))&&l.test(c.charAt(u-1))){var d=i.getBookmark()
a.collapse(!0)
var m=sl(e,a,e.formatter.get(t))
m=Gl(m),e.formatter.apply(t,n,m),i.moveToBookmark(d)}else r&&o.nodeValue===Pg||(s=e.getDoc(),f=Fg(!0).dom,o=(r=s.importNode(f,!0)).firstChild,a.insertNode(r),u=1),e.formatter.apply(t,n,r),i.setCursorLocation(o,u)})(e,t,n)
else{var m=s.getNode()
e.settings.forced_root_block||!i[0].defaultBlock||c.getParent(m,c.isBlock)||Ch(e,i[0].defaultBlock),s.setRng(ug(s.getRng())),xl(s,!0,(function(t){wl(e,(function(t,n){var r=n?t:sl(e,t,i)
d(c,r)}))})),Uf(c,s,s.getRng()),e.nodeChanged()}(function(e,t){Xg(Wg[e],(function(e){e(t)}))})(t,e)}}else{r=s.getNode()
for(var p=0,g=i.length;p<g;p++)if(i[p].ceFalseOverride&&c.is(r,i[p].selector))return void f(r,i[p])}},wh=function(e,t){var n=(t||document).createDocumentFragment()
return U(e,(function(e){n.appendChild(e.dom)})),yt.fromDom(n)},xh=function(e,t,n){return{element:e,width:t,rows:n}},Sh=function(e,t){return{element:e,cells:t}},Nh=function(e,t){return{x:e,y:t}},Eh=function(e,t){var n=parseInt(zn(e,t),10)
return isNaN(n)?1:n},kh=function(e,t,n){var r=e.rows
return!!(r[n]?r[n].cells:[])[t]},_h=function(e){return V(e,(function(e,t){return t.cells.length>e?t.cells.length:e}),0)},Rh=function(e,t){for(var n=e.rows,r=0;r<n.length;r++)for(var o=n[r].cells,i=0;i<o.length;i++)if(xt(o[i],t))return b.some(Nh(i,r))
return b.none()},Th=function(e,t,n,r,o){for(var i=[],a=e.rows,u=n;u<=o;u++){var c=a[u].cells,s=t<r?c.slice(t,r+1):c.slice(r,t+1)
i.push(Sh(a[u].element,s))}return i},Ah=function(e){var t=xh(Bu(e),0,[])
return U(wu(e,"tr"),(function(e,n){U(wu(e,"td,th"),(function(r,o){(function(e,t,n,r,o){for(var i=Eh(o,"rowspan"),a=Eh(o,"colspan"),u=e.rows,c=n;c<n+i;c++){u[c]||(u[c]=Sh(Pu(r),[]))
for(var s=t;s<t+a;s++)u[c].cells[s]=c===n&&s===t?o:Bu(o)}})(t,function(e,t,n){for(;kh(e,t,n);)t++
return t}(t,o,n),n,e,r)}))})),xh(t.element,_h(t.rows),t.rows)},Dh=function(e){return function(e,t){var n=Bu(e.element),r=yt.fromTag("tbody")
return tn(r,t),en(n,r),n}(e,function(e){return F(e.rows,(function(e){var t=F(e.cells,(function(e){var t=Pu(e)
return jn(t,"colspan"),jn(t,"rowspan"),t})),n=Bu(e.element)
return tn(n,t),n}))}(e))},Oh=function(e,t,n){return Rh(e,t).bind((function(t){return Rh(e,n).map((function(n){return function(e,t,n){var r=t.x,o=t.y,i=n.x,a=n.y,u=o<a?Th(e,r,o,i,a):Th(e,r,a,i,o)
return xh(e.element,_h(u),u)}(e,t,n)}))}))},Bh=function(e,t){return q(e,(function(e){return"li"===Et(e)&&yl(e,t)})).fold(s([]),(function(t){return function(e){return q(e,(function(e){return"ul"===Et(e)||"ol"===Et(e)}))}(e).map((function(e){var t=yt.fromTag(Et(e)),n=ue(Wn(e),(function(e,t){return Re(t,"list-style")}))
return Hn(t,n),[yt.fromTag("li"),t]})).getOr([])}))},Ph=function(e,t){var n=yt.fromDom(t.commonAncestorContainer),r=Vm(n,e),o=j(r,(function(e){return Dr(e)||Tr(e)})),i=Bh(r,t),a=o.concat(i.length?i:function(e){return Lr(e)?Lt(e).filter(Pr).fold(s([]),(function(t){return[e,t]})):Pr(e)?[e]:[]}(n))
return F(a,Bu)},Lh=function(){return wh([])},Ih=function(e,t){return n=yt.fromDom(t.cloneContents()),r=Ph(e,t),o=V(r,(function(e,t){return en(t,e),t}),n),r.length>0?wh([o]):o
var n,r,o},Mh=function(e,t){return(n=e,r=t[0],gr(r,"table",l(xt,n))).bind((function(e){var n=t[0],r=t[t.length-1],o=Ah(e)
return Oh(o,n,r).map((function(e){return wh([Dh(e)])}))})).getOrThunk(Lh)
var n,r},Fh=function(e,t){var n=pl(t,e)
return n.length>0?Mh(e,n):function(e,t){return t.length>0&&t[0].collapsed?Lh():Ih(e,t[0])}(e,t)},Uh=function(e,t){return t>=0&&t<e.length&&If(e.charAt(t))},zh=function(e){var t=Hr(e.innerText)
return lt.browser.isIE()?function(e){return e.replace(/^[ \f\n\r\t\v]+/,"")}(t):t},jh=function(e,t,n){if(void 0===n&&(n={}),n.get=!0,n.format=t,n.selection=!0,(n=e.fire("BeforeGetContent",n)).isDefaultPrevented())return e.fire("GetContent",n),n.content
if("text"===n.format)return function(e){return b.from(e.selection.getRng()).map((function(t){var n=e.dom.add(e.getBody(),"div",{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},t.cloneContents()),r=zh(n),o=Hr(n.textContent)
if(e.dom.remove(n),Uh(o,0)||Uh(o,o.length-1)){var i=e.dom.getParent(t.commonAncestorContainer,e.dom.isBlock),a=zh(i),u=a.indexOf(r)
return-1!==u?(Uh(a,u-1)?" ":"")+r+(Uh(a,u+r.length)?" ":""):r}return r})).getOr("")}(e)
n.getInner=!0
var r=function(e,t){var n=e.selection.getRng(),r=e.dom.create("body"),o=e.selection.getSel(),i=om(e,dl(o)),a=t.contextual?Fh(yt.fromDom(e.getBody()),i).dom:n.cloneContents()
return a&&r.appendChild(a),e.selection.serializer.serialize(r,t)}(e,n)
return"tree"===n.format?r:(n.content=e.selection.isCollapsed()?"":r,e.fire("GetContent",n),n.content)},Hh=function(e){return yn(e)?e.outerHTML:kn(e)?Fo.encodeRaw(e.data,!1):_n(e)?"\x3c!--"+e.data+"--\x3e":""},Vh=function(e,t,n){var r=function(e){var t,n=document.createElement("div"),r=document.createDocumentFragment()
for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t)
return r}(t)
if(e.hasChildNodes()&&n<e.childNodes.length){var o=e.childNodes[n]
o.parentNode.insertBefore(r,o)}else e.appendChild(r)},qh=function(e,t){var n,r,o,i,a,u,c,s,f,l=F(Q(t.childNodes),Hh)
return function(e,t){var n=0
U(e,(function(e){0===e[0]?n++:1===e[0]?(Vh(t,e[1],n),n++):2===e[0]&&function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var n=e.childNodes[t]
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
if(h%2==0&&-l<=d&&d<=l&&a[m]<=i[m+h])return c(a[m],d+e-o,t,u)}}},f=[],u(0,n.length,0,r.length,f),f),t),t},$h=ou(b.none()),Wh=function(e){var t,n=(t=e.getBody(),j(F(Q(t.childNodes),Hh),(function(e){return e.length>0}))),r=W(n,(function(t){var n=ym(e.serializer,t)
return n.length>0?[n]:[]})),o=r.join("")
return-1!==o.indexOf("</iframe>")?function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}}(r):function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}}(o)},Kh=function(e,t,n){"fragmented"===t.type?qh(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},Xh=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},Yh=function(e){var t=yt.fromTag("body",$h.get().getOrThunk((function(){var e=document.implementation.createHTMLDocument("undo")
return $h.set(b.some(e)),e})))
return Du(t,Xh(e)),U(wu(t,"*[data-mce-bogus]"),on),t.dom.innerHTML},Gh=function(e,t){return!(!e||!t)&&(!!function(e,t){return Xh(e)===Xh(t)}(e,t)||function(e,t){return Yh(e)===Yh(t)}(e,t))},Jh=function(e){return 0===e.get()},Qh=function(e,t,n){Jh(n)&&(e.typing=t)},Zh=function(e,t){e.typing&&(Qh(e,!1,t),e.add())},ev=function(e){return e instanceof sm},tv=function(e,t){Cg(e.serializer.getNodeFilters(),e.serializer.getAttributeFilters(),t)},nv=function(e){return{undoManager:{beforeChange:function(t,n){return function(e,t,n){Jh(t)&&n.set(b.some(Mc(e.selection)))}(e,t,n)},addUndoLevel:function(t,n,r,o,i,a){return function(e,t,n,r,o,i,a){var u=Wh(e)
if(i=i||{},i=ht.extend(i,u),!1===Jh(r)||e.removed)return null
var c=t.data[n.get()]
if(e.fire("BeforeAddUndo",{level:i,lastLevel:c,originalEvent:a}).isDefaultPrevented())return null
if(c&&Gh(c,i))return null
t.data[n.get()]&&o.get().each((function(e){t.data[n.get()].beforeBookmark=e}))
var s=function(e){return e.getParam("custom_undo_redo_levels",0,"number")}(e)
if(s&&t.data.length>s){for(var f=0;f<t.data.length-1;f++)t.data[f]=t.data[f+1]
t.data.length--,n.set(t.data.length)}i.bookmark=Mc(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(i),n.set(t.data.length-1)
var l={level:i,lastLevel:c,originalEvent:a}
return n.get()>0?(e.setDirty(!0),e.fire("AddUndo",l),e.fire("change",l)):e.fire("AddUndo",l),i}(e,t,n,r,o,i,a)},undo:function(t,n,r){return function(e,t,n,r){var o
return t.typing&&(t.add(),t.typing=!1,Qh(t,!1,n)),r.get()>0&&(r.set(r.get()-1),o=t.data[r.get()],Kh(e,o,!0),e.setDirty(!0),e.fire("Undo",{level:o})),o}(e,t,n,r)},redo:function(t,n){return function(e,t,n){var r
return t.get()<n.length-1&&(t.set(t.get()+1),r=n[t.get()],Kh(e,r,!1),e.setDirty(!0),e.fire("Redo",{level:r})),r}(e,t,n)},clear:function(t,n){return function(e,t,n){t.data=[],n.set(0),t.typing=!1,e.fire("ClearUndos")}(e,t,n)},reset:function(e){return function(e){e.clear(),e.add()}(e)},hasUndo:function(t,n){return function(e,t,n){return n.get()>0||t.typing&&t.data[0]&&!Gh(Wh(e),t.data[0])}(e,t,n)},hasRedo:function(e,t){return function(e,t){return t.get()<e.data.length-1&&!e.typing}(e,t)},transact:function(e,t,n){return function(e,t,n){return Zh(e,t),e.beforeChange(),e.ignore(n),e.add()}(e,t,n)},ignore:function(e,t){return function(e,t){try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}}(e,t)},extra:function(t,n,r,o){return function(e,t,n,r,o){if(t.transact(r)){var i=t.data[n.get()].bookmark,a=t.data[n.get()-1]
Kh(e,a,!0),t.transact(o)&&(t.data[n.get()-1].beforeBookmark=i)}}(e,t,n,r,o)}},formatter:{apply:function(t,n,r){return Ch(e,t,n,r)},remove:function(t,n,r,o){return hh(e,t,n,r,o)},toggle:function(t,n,r){return function(e,t,n,r){var o=e.formatter.get(t)
!Ag(e,t,n,r)||"toggle"in o[0]&&!o[0].toggle?Ch(e,t,n,r):hh(e,t,n,r)}(e,t,n,r)}},editor:{getContent:function(t,n){return function(e,t,n){return b.from(e.getBody()).fold(s("tree"===t.format?new sm("body",11):""),(function(r){return Cm(e,t,n,r)}))}(e,t,n)},setContent:function(t,n){return Sg(e,t,n)},insertContent:function(t,n){return yg(e,t,n)}},selection:{getContent:function(t,n){return jh(e,t,n)}},raw:{getModel:function(){return b.none()}}}},rv=function(e,t){var n=function(e){return N(e)?e:{}},r=m("Unimplemented feature for rtc")
return{undoManager:{beforeChange:u,addUndoLevel:r,undo:function(){return t.undo(),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},redo:function(){return t.redo(),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},clear:r,reset:r,hasUndo:function(){return t.hasUndo()},hasRedo:function(){return t.hasRedo()},transact:function(e,n,r){return t.transact(r),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},ignore:r,extra:r},formatter:{apply:function(e,r,o){return t.applyFormat(e,n(r))},remove:function(e,r,o,i){return t.removeFormat(e,n(r))},toggle:function(e,r,o){return t.toggleFormat(e,n(r))}},editor:{getContent:function(n,r){if("html"===r||"tree"===r){var o=t.getContent(),i=dm({inner:!0})
return tv(e,o),"tree"===r?o:i.serialize(o)}return nv(e).editor.getContent(n,r)},setContent:function(n,r){var o=ev(n)?n:e.parser.parse(n,{isRootContent:!0,insert:!0})
return t.setContent(o),n},insertContent:function(n,r){var o,i=(o=e,b.from(o.selection.getStart(!0)).map((function(e){return e.nodeName.toLowerCase()}))).fold((function(){return{}}),(function(e){return{context:e}})),a=ev(n)?n:e.parser.parse(n,be(be({},i),{insert:!0}))
t.insertContent(a)}},selection:{getContent:function(n,r){if("html"===n||"tree"===n){var o=t.getSelectedContent(),i=dm({})
return tv(e,o),"tree"===n?o:i.serialize(o)}return nv(e).selection.getContent(n,r)}},raw:{getModel:function(){return b.some(t.getRawModel())}}}},ov=function(e){return fe(e.plugins,"rtc")},iv=function(e){return e.rtcInstance?e.rtcInstance:nv(e)},av=function(e){var t=e.rtcInstance
if(t)return t
throw new Error("Failed to get RTC instance not yet initialized.")},uv=function(e,t){return void 0===t&&(t={}),function(e,t,n){return av(e).selection.getContent(t,n)}(e,t.format?t.format:"html",t)},cv=function(e){return 0===e.dom.length?(rn(e),b.none()):b.some(e)},sv=function(e,t,n,r){e.bind((function(e){return(r?Cp:bp)(e.dom,r?e.dom.length:0),t.filter(Tt).map((function(t){return function(e,t,n,r){var o=e.dom,i=t.dom,a=r?o.length:i.length
r?(wp(o,i,!1,!r),n.setStart(i,a)):(wp(i,o,!1,!r),n.setEnd(i,a))}(e,t,n,r)}))})).orThunk((function(){return function(e,t){return e.filter((function(e){return Dl.isBookmarkNode(e.dom)})).bind(t?Mt:It)}(t,r).or(t).filter(Tt).map((function(e){return function(e,t){Lt(e).each((function(n){var r=e.dom
t&&fp(n,gc(r,0))?bp(r,0):!t&&lp(n,gc(r,r.length))&&Cp(r,r.length)}))}(e,r)}))}))},fv=function(e,t,n){void 0===n&&(n={})
var r=function(e,t){return be(be({format:"html"},e),{set:!0,selection:!0,content:t})}(n,t)
if(r.no_events||!(r=e.fire("BeforeSetContent",r)).isDefaultPrevented()){n.content=function(e,t){if("raw"!==t.format){var n=e.selection.getRng(),r=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),o=r?{context:r.nodeName.toLowerCase()}:{},i=e.parser.parse(t.content,be(be({isRootContent:!0,forced_root_block:!1},o),t))
return dm({validate:e.validate},e.schema).serialize(i)}return t.content}(e,r)
var o=e.selection.getRng();(function(e,t){var n=b.from(t.firstChild).map(yt.fromDom),r=b.from(t.lastChild).map(yt.fromDom)
e.deleteContents(),e.insertNode(t)
var o=n.bind(It).filter(Tt).bind(cv),i=r.bind(Mt).filter(Tt).bind(cv)
sv(o,n,e,!0),sv(i,r,e,!1),e.collapse(!1)})(o,o.createContextualFragment(n.content)),e.selection.setRng(o),Cd(e,o),r.no_events||e.fire("SetContent",r)}else e.fire("SetContent",r)},lv=function(e,t,n){if(e&&e.hasOwnProperty(t)){var r=j(e[t],(function(e){return e!==n}))
0===r.length?delete e[t]:e[t]=r}}
var dv=function(e){return!!e.select},mv=function(e){return!(!e||!e.ownerDocument)&&Nt(yt.fromDom(e.ownerDocument),yt.fromDom(e))},pv=function(e,t,n,r){var o,i,a=function(e,t){var n,r
return{selectorChangedWithUnbind:function(o,i){return n||(n={},r={},t.on("NodeChange",(function(t){var o=t.element,i=e.getParents(o,null,e.getRoot()),a={}
ht.each(n,(function(t,n){ht.each(i,(function(o){if(e.is(o,n))return r[n]||(ht.each(t,(function(e){e(!0,{node:o,selector:n,parents:i})})),r[n]=t),a[n]=t,!1}))})),ht.each(r,(function(e,t){a[t]||(delete r[t],ht.each(e,(function(e){e(!1,{node:o,selector:t,parents:i})})))}))}))),n[o]||(n[o]=[]),n[o].push(i),{unbind:function(){lv(n,o,i),lv(r,o,i)}}}}}(e,r).selectorChangedWithUnbind,u=function(e,t){return fv(r,e,t)},c=function(e){var t=f()
t.collapse(!!e),l(t)},s=function(){return t.getSelection?t.getSelection():t.document.selection},f=function(){var n,a,u,c=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}}
if(!t)return null
var f=t.document
if(null==f)return null
if(void 0!==r.bookmark&&!1===Gd(r)){var l=Fd(r)
if(l.isSome())return l.map((function(e){return om(r,[e])[0]})).getOr(f.createRange())}try{(n=s())&&!vn(n.anchorNode)&&(a=n.rangeCount>0?n.getRangeAt(0):n.createRange?n.createRange():f.createRange(),a=om(r,[a])[0])}catch(d){}return a||(a=f.createRange?f.createRange():f.body.createTextRange()),a.setStart&&9===a.startContainer.nodeType&&a.collapsed&&(u=e.getRoot(),a.setStart(u,0),a.setEnd(u,0)),o&&i&&(0===c(a.START_TO_START,a,o)&&0===c(a.END_TO_END,a,o)?a=i:(o=null,i=null)),a},l=function(e,t){var n
if(function(e){return!!e&&(!!dv(e)||mv(e.startContainer)&&mv(e.endContainer))}(e)){var a=dv(e)?e:null
if(a){i=null
try{a.select()}catch(c){}}else{var u=s()
if(e=r.fire("SetSelectionRange",{range:e,forward:t}).range,u){i=e
try{u.removeAllRanges(),u.addRange(e)}catch(c){}!1===t&&u.extend&&(u.collapse(e.endContainer,e.endOffset),u.extend(e.startContainer,e.startOffset)),o=u.rangeCount>0?u.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!u.setBaseAndExtent||lt.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset])&&"IMG"===n.tagName&&(u.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),u.anchorNode===e.startContainer&&u.focusNode===e.endContainer||u.setBaseAndExtent(n,0,n,1)),r.fire("AfterSetSelectionRange",{range:e,forward:t})}}},d=function(){var t=s(),n=null==t?void 0:t.anchorNode,r=null==t?void 0:t.focusNode
if(!t||!n||!r||vn(n)||vn(r))return!0
var o=e.createRng()
o.setStart(n,t.anchorOffset),o.collapse(!0)
var i=e.createRng()
return i.setStart(r,t.focusOffset),i.collapse(!0),o.compareBoundaryPoints(o.START_TO_START,i)<=0},m={bookmarkManager:null,controlSelection:null,dom:e,win:t,serializer:n,editor:r,collapse:c,setCursorLocation:function(t,n){var o=e.createRng()
t?(o.setStart(t,n),o.setEnd(t,n),l(o),c(!1)):(bl(e,o,r.getBody(),!0),l(o))},getContent:function(e){return uv(r,e)},setContent:u,getBookmark:function(e,t){return p.getBookmark(e,t)},moveToBookmark:function(e){return p.moveToBookmark(e)},select:function(t,n){return function(e,t,n){return b.from(t).map((function(t){var r=e.nodeIndex(t),o=e.createRng()
return o.setStart(t.parentNode,r),o.setEnd(t.parentNode,r+1),n&&(bl(e,o,t,!0),bl(e,o,t,!1)),o}))}(e,t,n).each(l),t},isCollapsed:function(){var e=f(),t=s()
return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:d,setNode:function(t){return u(e.getOuterHTML(t)),t},getNode:function(){return function(e,t){var n,r,o
if(!t)return e
r=t.startContainer,o=t.endContainer
var i=t.startOffset,a=t.endOffset
return n=t.commonAncestorContainer,!t.collapsed&&(r===o&&a-i<2&&r.hasChildNodes()&&(n=r.childNodes[i]),3===r.nodeType&&3===o.nodeType&&(r=r.length===i?rm(r.nextSibling,!0):r.parentNode,o=0===a?rm(o.previousSibling,!1):o.parentNode,r&&r===o))?r:n&&3===n.nodeType?n.parentNode:n}(r.getBody(),f())},getSel:s,setRng:l,getRng:f,getStart:function(e){return tm(r.getBody(),f(),e)},getEnd:function(e){return nm(r.getBody(),f(),e)},getSelectedBlocks:function(t,n){return function(e,t,n,r){var o,i=[],a=e.getRoot()
if(n=e.getParent(n||tm(a,t,t.collapsed),e.isBlock),r=e.getParent(r||nm(a,t,t.collapsed),e.isBlock),n&&n!==a&&i.push(n),n&&r&&n!==r){o=n
for(var u=new _r(n,a);(o=u.next())&&o!==r;)e.isBlock(o)&&i.push(o)}return r&&n!==r&&r!==a&&i.push(r),i}(e,f(),t,n)},normalize:function(){var t=f(),n=s()
if(!(dl(n).length>1)&&Cl(r)){var o=Xl(e,t)
return o.each((function(e){l(e,d())})),o.getOr(t)}return t},selectorChanged:function(e,t){return a(e,t),m},selectorChangedWithUnbind:a,getScrollContainer:function(){for(var t,n=e.getRoot();n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n
break}n=n.parentNode}return t},scrollIntoView:function(e,t){return function(e,t,n){(e.inline?vd:bd)(e,t,n)}(r,e,t)},placeCaretAt:function(e,t){return l(Fl(e,t,r.getDoc()))},getBoundingClientRect:function(){var e=f()
return e.collapsed?gc.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){t=o=i=null,g.destroy()}},p=Dl(m),g=Il(m,r)
return m.bookmarkManager=p,m.controlSelection=g,m},gv=function(e,t,n){e.addNodeFilter("font",(function(e){U(e,(function(e){var r=t.parse(e.attr("style")),o=e.attr("color"),i=e.attr("face"),a=e.attr("size")
o&&(r.color=o),i&&(r["font-family"]=i),a&&(r["font-size"]=n[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",t.serialize(r)),function(e,t){U(t,(function(t){e.attr(t,null)}))}(e,["color","face","size"])}))}))},hv=function(e,t){var n=mi()
t.convert_fonts_to_spans&&gv(e,n,ht.explode(t.font_size_legacy_values)),function(e,t){e.addNodeFilter("strike",(function(e){U(e,(function(e){var n=t.parse(e.attr("style"))
n["text-decoration"]="line-through",e.name="span",e.attr("style",t.serialize(n))}))}))}(e,n)},vv=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},yv=function(e,t){var n
try{n=atob(t)}catch($E){return b.none()}for(var r=new Uint8Array(n.length),o=0;o<r.length;o++)r[o]=n.charCodeAt(o)
return b.some(new Blob([r],{type:e}))},bv=function(e){return 0===e.indexOf("blob:")?function(e){return new yr((function(t,n){var r=function(){n("Cannot convert "+e+" to Blob. Resource might not exist or is inaccessible.")}
try{var o=new XMLHttpRequest
o.open("GET",e,!0),o.responseType="blob",o.onload=function(){200===this.status?t(this.response):r()},o.onerror=r,o.send()}catch(i){r()}}))}(e):0===e.indexOf("data:")?(t=e,new yr((function(e){var n=vv(t),r=n.type,o=n.data
yv(r,o).fold((function(){return e(new Blob([]))}),e)}))):null
var t},Cv=0,wv=function(e){return(e||"blobid")+Cv++},xv=function(e,t,n,r){var o,i
if(0!==t.src.indexOf("blob:")){var a=vv(t.src),u=a.data,c=a.type
o=u,(i=e.getByData(o,c))?n({image:t,blobInfo:i}):bv(t.src).then((function(r){i=e.create(wv(),r,o),e.add(i),n({image:t,blobInfo:i})}),(function(e){r(e)}))}else(i=e.getByUri(t.src))?n({image:t,blobInfo:i}):bv(t.src).then((function(r){(function(e){return new yr((function(t){var n=new FileReader
n.onloadend=function(){t(n.result)},n.readAsDataURL(e)}))})(r).then((function(a){o=vv(a).data,i=e.create(wv(),r,o),e.add(i),n({image:t,blobInfo:i})}))}),(function(e){r(e)}))}
function Sv(e,t){var n={}
return{findAll:function(r,o){o||(o=g)
var i=j(function(e){return e?Q(e.getElementsByTagName("img")):[]}(r),(function(t){var n=t.src
return!!lt.fileApi&&(!t.hasAttribute("data-mce-bogus")&&(!t.hasAttribute("data-mce-placeholder")&&(!(!n||n===lt.transparentSrc)&&(0===n.indexOf("blob:")?!e.isUploaded(n)&&o(t):0===n.indexOf("data:")&&o(t)))))})),a=F(i,(function(e){if(void 0!==n[e.src])return new yr((function(t){n[e.src].then((function(n){if("string"==typeof n)return n
t({image:e,blobInfo:n.blobInfo})}))}))
var r=new yr((function(n,r){xv(t,e,n,r)})).then((function(e){return delete n[e.image.src],e})).catch((function(t){return delete n[e.src],t}))
return n[e.src]=r,r}))
return yr.all(a)}}}var Nv,Ev,kv=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new sm("br",1)).shortEnded=!0:r.empty().append(new sm("#text",3)).value=Ur},_v=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Rv=function(e,t,n,r){return r.isEmpty(t,n,(function(t){return function(e,t){var n=e.getElementRule(t.name)
return n&&n.paddEmpty}(e,t)}))},Tv=function(e,t){var n=t.blob_cache,r=function(e){var r=e.attr("src");(function(e){return e.attr("src")===lt.transparentSrc||e.attr("data-mce-placeholder")})(e)||function(e){return e.attr("data-mce-bogus")}(e)||function(e){var t=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(e)
return t?b.some({type:t[1],data:decodeURIComponent(t[2])}):b.none()}(r).filter((function(){return function(e,t){if(t.images_dataimg_filter){var n=new Image
return n.src=e.attr("src"),te(e.attributes.map,(function(e,t){n.setAttribute(t,e)})),t.images_dataimg_filter(n)}return!0}(e,t)})).bind((function(e){var t=e.type,r=e.data
return b.from(n.getByData(r,t)).orThunk((function(){return yv(t,r).map((function(e){var t=n.create(wv(),e,r)
return n.add(t),t}))}))})).each((function(t){e.attr("src",t.blobUri())}))}
n&&e.addAttributeFilter("src",(function(e){return U(e,r)}))},Av=ht.makeMap,Dv=ht.each,Ov=ht.explode,Bv=ht.extend,Pv=function(e,t){void 0===t&&(t=Xo())
var n={},r=[],o={},i={};(e=e||{}).validate=!("validate"in e)||e.validate,e.root_name=e.root_name||"body"
var a=function(e){var t,a,u;(a=e.name)in n&&((u=o[a])?u.push(e):o[a]=[e]),t=r.length
for(;t--;)(a=r[t].name)in e.attributes.map&&((u=i[a])?u.push(e):i[a]=[e])
return e},u={schema:t,addAttributeFilter:function(e,t){Dv(Ov(e),(function(e){var n
for(n=0;n<r.length;n++)if(r[n].name===e)return void r[n].callbacks.push(t)
r.push({name:e,callbacks:[t]})}))},getAttributeFilters:function(){return[].concat(r)},addNodeFilter:function(e,t){Dv(Ov(e),(function(e){var r=n[e]
r||(n[e]=r=[]),r.push(t)}))},getNodeFilters:function(){var e=[]
for(var t in n)n.hasOwnProperty(t)&&e.push({name:t,callbacks:n[t]})
return e},filterNode:a,parse:function(u,c){var s,f,l,d,m,p,g,h,v,y=[]
c=c||{},o={},i={}
var b=Bv(Av("script,style,head,html,body,title,meta,param"),t.getBlockElements()),C=t.getNonEmptyElements(),w=t.children,x=e.validate,S=function(e){return!1===e?"":!0===e?"p":e}("forced_root_block"in c?c.forced_root_block:e.forced_root_block),N=t.getWhiteSpaceElements(),E=/^[ \t\r\n]+/,k=/[ \t\r\n]+$/,_=/[ \t\r\n]+/g,R=/^[ \t\r\n]+$/
h=N.hasOwnProperty(c.context)||N.hasOwnProperty(e.root_name)
var T=function(e,t){var r,i=new sm(e,t)
return e in n&&((r=o[e])?r.push(i):o[e]=[i]),i},A=function(e){var n,r,o,i,a=t.getBlockElements()
for(n=e.prev;n&&3===n.type;){if((o=n.value.replace(k,"")).length>0)return void(n.value=o)
if(r=n.next){if(3===r.type&&r.value.length){n=n.prev
continue}if(!a[r.name]&&"script"!==r.name&&"style"!==r.name){n=n.prev
continue}}i=n.prev,n.remove(),n=i}},D=vm({validate:x,allow_html_data_urls:e.allow_html_data_urls,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,preserve_cdata:e.preserve_cdata,self_closing_elements:function(e){var t,n={}
for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t])
return n}(t.getSelfClosingElements()),cdata:function(e){v.append(T("#cdata",4)).value=e},text:function(e,t){var n
h||(e=e.replace(_," "),function(e,t){return e&&(t[e.name]||"br"===e.name)}(v.lastChild,b)&&(e=e.replace(E,""))),0!==e.length&&((n=T("#text",3)).raw=!!t,v.append(n).value=e)},comment:function(e){v.append(T("#comment",8)).value=e},pi:function(e,t){v.append(T(e,7)).value=t,A(v)},doctype:function(e){v.append(T("#doctype",10)).value=e,A(v)},start:function(e,n,o){var a,u,c,s,f=x?t.getElementRule(e):{}
if(f){for((a=T(f.outputName||e,1)).attributes=n,a.shortEnded=o,v.append(a),(s=w[v.name])&&w[a.name]&&!s[a.name]&&y.push(a),u=r.length;u--;)(c=r[u].name)in n.map&&((p=i[c])?p.push(a):i[c]=[a])
b[e]&&A(a),o||(v=a),!h&&N[e]&&(h=!0)}},end:function(n){var r,o,i,a,u=x?t.getElementRule(n):{}
if(u){if(b[n]&&!h){if((r=v.firstChild)&&3===r.type)if((o=r.value.replace(E,"")).length>0)r.value=o,r=r.next
else for(i=r.next,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.next,(0===o.length||R.test(o))&&(r.remove(),r=i),r=i
if((r=v.lastChild)&&3===r.type)if((o=r.value.replace(k,"")).length>0)r.value=o,r=r.prev
else for(i=r.prev,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.prev,(0===o.length||R.test(o))&&(r.remove(),r=i),r=i}if(h&&N[n]&&(h=!1),u.removeEmpty&&Rv(t,C,N,v))return a=v.parent,b[v.name]?v.empty().remove():v.unwrap(),void(v=a)
u.paddEmpty&&(function(e){return _v(e,"#text")&&e.firstChild.value===Ur}(v)||Rv(t,C,N,v))&&kv(e,c,b,v),v=v.parent}}},t),O=v=new sm(c.context||e.root_name,11)
if(D.parse(u,c.format),x&&y.length&&(c.context?c.invalid=!0:function(e){var n,r,o,i,u,c,s,f,l,d,m,p=Av("tr,td,th,tbody,thead,tfoot,table"),g=t.getNonEmptyElements(),h=t.getWhiteSpaceElements(),v=t.getTextBlockElements(),y=t.getSpecialElements()
for(n=0;n<e.length;n++)if((r=e[n]).parent&&!r.fixed)if(v[r.name]&&"li"===r.parent.name){for(d=r.next;d&&v[d.name];)d.name="li",d.fixed=!0,r.parent.insert(d,r.parent),d=d.next
r.unwrap(r)}else{for(i=[r],o=r.parent;o&&!t.isValidChild(o.name,r.name)&&!p[o.name];o=o.parent)i.push(o)
if(o&&i.length>1){for(i.reverse(),u=c=a(i[0].clone()),l=0;l<i.length-1;l++){for(t.isValidChild(c.name,i[l].name)?(s=a(i[l].clone()),c.append(s)):s=c,f=i[l].firstChild;f&&f!==i[l+1];)m=f.next,s.append(f),f=m
c=s}Rv(t,g,h,u)?o.insert(r,i[0],!0):(o.insert(u,i[0],!0),o.insert(r,u)),o=i[0],(Rv(t,g,h,o)||_v(o,"br"))&&o.empty().remove()}else if(r.parent){if("li"===r.name){if((d=r.prev)&&("ul"===d.name||"ol"===d.name)){d.append(r)
continue}if((d=r.next)&&("ul"===d.name||"ol"===d.name)){d.insert(r,d.firstChild,!0)
continue}r.wrap(a(new sm("ul",1)))
continue}t.isValidChild(r.parent.name,"div")&&t.isValidChild("div",r.name)?r.wrap(a(new sm("div",1))):y[r.name]?r.empty().remove():r.unwrap()}}}(y)),S&&("body"===O.name||c.isRootContent)&&function(){var n,r,o=O.firstChild,i=function(e){e&&((o=e.firstChild)&&3===o.type&&(o.value=o.value.replace(E,"")),(o=e.lastChild)&&3===o.type&&(o.value=o.value.replace(k,"")))}
if(t.isValidChild(O.name,S.toLowerCase())){for(;o;)n=o.next,3===o.type||1===o.type&&"p"!==o.name&&!b[o.name]&&!o.attr("data-mce-type")?(r||((r=T(S,1)).attr(e.forced_root_block_attrs),O.insert(r,o)),r.append(o)):(i(r),r=null),o=n
i(r)}}(),!c.invalid){for(g in o)if(o.hasOwnProperty(g)){for(p=n[g],d=(s=o[g]).length;d--;)s[d].parent||s.splice(d,1)
for(f=0,l=p.length;f<l;f++)p[f](s,g,c)}for(f=0,l=r.length;f<l;f++)if((p=r[f]).name in i){for(d=(s=i[p.name]).length;d--;)s[d].parent||s.splice(d,1)
for(d=0,m=p.callbacks.length;d<m;d++)p.callbacks[d](s,p.name,c)}}return O}}
return function(e,t){var n=e.schema
t.remove_trailing_brs&&e.addNodeFilter("br",(function(e,r,o){var i,a,u,c,s,f,l,d,m=e.length,p=ht.extend({},n.getBlockElements()),g=n.getNonEmptyElements(),h=n.getWhiteSpaceElements()
for(p.body=1,i=0;i<m;i++)if(u=(a=e[i]).parent,p[a.parent.name]&&a===u.lastChild){for(s=a.prev;s;){if("span"!==(f=s.name)||"bookmark"!==s.attr("data-mce-type")){"br"===f&&(a=null)
break}s=s.prev}a&&(a.remove(),Rv(n,g,h,u)&&(l=n.getElementRule(u.name))&&(l.removeEmpty?u.remove():l.paddEmpty&&kv(t,o,p,u)))}else{for(c=a;u&&u.firstChild===c&&u.lastChild===c&&(c=u,!p[u.name]);)u=u.parent
c===u&&!0!==t.padd_empty_with_br&&((d=new sm("#text",3)).value=Ur,a.replace(d))}})),e.addAttributeFilter("href",(function(e){var n,r,o=e.length
if(!t.allow_unsafe_link_target)for(;o--;){var i=e[o]
"a"===i.name&&"_blank"===i.attr("target")&&i.attr("rel",(r=void 0,r=(n=i.attr("rel"))?ht.trim(n):"",/\b(noopener)\b/g.test(r)?r:function(e){return e.split(" ").filter((function(e){return e.length>0})).concat(["noopener"]).sort().join(" ")}(r)))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href")){r=o.parent,t=o.lastChild
do{n=t.prev,r.insert(t,o),t=n}while(t)}})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(function(e){for(var t,n,r=e.length;r--;)if("ul"===(n=(t=e[r]).parent).name||"ol"===n.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t)
else{var o=new sm("li",1)
o.attr("style","list-style-type: none"),t.wrap(o)}})),t.validate&&n.getValidClasses()&&e.addAttributeFilter("class",(function(e){for(var t,r,o,i,a,u,c,s=e.length,f=n.getValidClasses();s--;){for(r=(t=e[s]).attr("class").split(" "),a="",o=0;o<r.length;o++)i=r[o],c=!1,(u=f["*"])&&u[i]&&(c=!0),u=f[t.name],!c&&u&&u[i]&&(c=!0),c&&(a&&(a+=" "),a+=i)
a.length||(a=null),t.attr("class",a)}})),Tv(e,t)}(u,e),function(e,t){t.inline_styles&&hv(e,t)}(u,e),u},Lv=function(e,t,n){return function(e,t){return e&&e.hasEventListeners("PreProcess")&&!t.no_events}(e,n)?function(e,t,n){var r,o,i=e.dom
t=t.cloneNode(!0)
var a=document.implementation
return a.createHTMLDocument&&(r=a.createHTMLDocument(""),ht.each("BODY"===t.nodeName?t.childNodes:[t],(function(e){r.body.appendChild(r.importNode(e,!0))})),t="BODY"!==t.nodeName?r.body.firstChild:r.body,o=i.doc,i.doc=r),function(e,t){e.fire("PreProcess",t)}(e,be(be({},n),{node:t})),o&&(i.doc=o),t}(e,t,n):t},Iv=function(e,t,n){-1===ht.inArray(t,n)&&(e.addAttributeFilter(n,(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),t.push(n))},Mv=function(e,t,n,r,o){return function(e,t,n){return!t.no_events&&e?function(e,t){return e.fire("PostProcess",t)}(e,be(be({},t),{content:n})).content:n}(e,o,function(e,t,n){return dm(e,t).serialize(n)}(t,n,r))},Fv=function(e,t){var n=["data-mce-selected"],r=t&&t.dom?t.dom:Za.DOM,o=t&&t.schema?t.schema:Xo(e)
e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
var i=Pv(e,o);(function(e,t,n){e.addAttributeFilter("data-mce-tabindex",(function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attr("data-mce-tabindex")),n.attr(t,null)})),e.addAttributeFilter("src,href,style",(function(e,r){for(var o,i,a=e.length,u="data-mce-"+r,c=t.url_converter,s=t.url_converter_scope;a--;)void 0!==(i=(o=e[a]).attr(u))?(o.attr(r,i.length>0?i:null),o.attr(u,null)):(i=o.attr(r),"style"===r?i=n.serializeStyle(n.parseStyle(i),o.name):c&&(i=c.call(s,i,r,o.name)),o.attr(r,i.length>0?i:null))})),e.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",n.length>0?n:null))})),e.addAttributeFilter("data-mce-type",(function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attr("data-mce-type")||n.cleanup||(b.from(r.firstChild).exists((function(e){return!jr(e.value)}))?r.unwrap():r.remove())})),e.addNodeFilter("noscript",(function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=Fo.decode(t.value))})),e.addNodeFilter("script,style",(function(e,n){for(var r,o,i,a=e.length,u=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};a--;)o=(r=e[a]).firstChild?r.firstChild.value:"","script"===n?((i=r.attr("type"))&&r.attr("type","mce-no/type"===i?null:i.replace(/^mce\-/,"")),"xhtml"===t.element_format&&o.length>0&&(r.firstChild.value="// <![CDATA[\n"+u(o)+"\n// ]]>")):"xhtml"===t.element_format&&o.length>0&&(r.firstChild.value="\x3c!--\n"+u(o)+"\n--\x3e")})),e.addNodeFilter("#comment",(function(e){for(var r,o=e.length;o--;)r=e[o],t.preserve_cdata&&0===r.value.indexOf("[CDATA[")?(r.name="#cdata",r.type=4,r.value=n.decode(r.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===r.value.indexOf("mce:protected ")&&(r.name="#text",r.type=3,r.raw=!0,r.value=unescape(r.value).substr(14))})),e.addNodeFilter("xml:namespace,input",(function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||n.attr("type")||n.attr("type","text"))})),e.addAttributeFilter("data-mce-type",(function(t){U(t,(function(t){"format-caret"===t.attr("data-mce-type")&&(t.isEmpty(e.schema.getNonEmptyElements())?t.remove():t.unwrap())}))})),e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}))})(i,e,r)
return{schema:o,addNodeFilter:i.addNodeFilter,addAttributeFilter:i.addAttributeFilter,serialize:function(n,a){void 0===a&&(a={})
var u=be({format:"html"},a),c=Lv(t,n,u),s=function(e,t,n){var r=Hr(n.getInner?t.innerHTML:e.getOuterHTML(t))
return n.selection||Fr(yt.fromDom(t))?r:ht.trim(r)}(r,c,u),f=function(e,t,n){var r=n.selection?be({forced_root_block:!1},n):n,o=e.parse(t,r)
return function(e){var t=function(e){return e&&"br"===e.name},n=e.lastChild
if(t(n)){var r=n.prev
t(r)&&(n.remove(),r.remove())}}(o),o}(i,s,u)
return"tree"===u.format?f:Mv(t,e,o,f,u)},addRules:function(e){o.addValidElements(e)},setRules:function(e){o.setValidElements(e)},addTempAttr:l(Iv,i,n),getTempAttrs:function(){return n},getNodeFilters:i.getNodeFilters,getAttributeFilters:i.getAttributeFilters}},Uv=function(e,t){var n=Fv(e,t)
return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters}},zv=function(e,t){return void 0===t&&(t={}),function(e,t,n){return iv(e).editor.getContent(t,n)}(e,t,t.format?t.format:"html")},jv=function(e,t,n){return void 0===n&&(n={}),function(e,t,n){return iv(e).editor.setContent(t,n)}(e,t,n)},Hv=Za.DOM,Vv=function(e){return b.from(e).each((function(e){return e.destroy()}))},qv=function(e){if(!e.removed){var t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement()
r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&Hv.remove(o.nextSibling),function(e){e.fire("remove")}(e),e.editorManager.remove(e),!e.inline&&r&&function(e){Hv.setStyle(e.id,"display",e.orgDisplay)}(e),function(e){e.fire("detach")}(e),Hv.remove(e.getContainer()),Vv(t),Vv(n),e.destroy()}},$v=function(e,t){var n=e.selection,r=e.dom
e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),Vv(n),Vv(r)),function(e){var t=e.formElement
t&&(t._mceOldSubmit&&(t.submit=t._mceOldSubmit,t._mceOldSubmit=null),Hv.unbind(t,"submit reset",e.formEventDelegate))}(e),function(e){e.contentAreaContainer=e.formElement=e.container=e.editorContainer=null,e.bodyElement=e.contentDocument=e.contentWindow=null,e.iframeElement=e.targetElm=null,e.selection&&(e.selection=e.selection.win=e.selection.dom=e.selection.dom.doc=null)}(e),e.destroyed=!0):e.remove())},Wv=Object.prototype.hasOwnProperty,Kv=(Nv=function(e,t){return N(e)&&N(t)?Kv(e,t):t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var o=e[r]
for(var i in o)Wv.call(o,i)&&(n[i]=Nv(n[i],o[i]))}return n}),Xv=nt().deviceType,Yv=Xv.isTouch(),Gv=Xv.isPhone(),Jv=Xv.isTablet(),Qv=["lists","autolink","autosave"],Zv={table_grid:!1,object_resizing:!1,resize:!1},ey=function(e){var t=E(e)?e.join(" "):e,n=F(S(t)?t.split(" "):[],Ae)
return j(n,(function(e){return e.length>0}))},ty=function(e,t){var n=ae(t,(function(t,n){return I(e,n)}))
return function(e,t){return{sections:s(e),settings:s(t)}}(n.t,n.f)},ny=function(e,t){return e.sections().hasOwnProperty(t)},ry=function(e,t){return se(e,"toolbar_mode").orThunk((function(){return se(e,"toolbar_drawer").map((function(e){return!1===e?"wrap":e}))})).getOr(t)},oy=function(e,t){var n={resize:!1,toolbar_mode:ry(e,"scrolling"),toolbar_sticky:!1}
return be(be(be({},Zv),n),t?{menubar:!1}:{})},iy=function(e,t){var n=t.external_plugins?t.external_plugins:{}
return e&&e.external_plugins?ht.extend({},e.external_plugins,n):n},ay=function(e,t,n,r){var o=ey(n.forced_plugins),i=ey(r.plugins),a=function(e,t){return ny(e,t)?e.sections()[t]:{}}(t,"mobile"),u=a.plugins?ey(a.plugins):i,c=function(e,t){return[].concat(ey(e)).concat(ey(t))}(o,e&&function(e,t,n){var r=e.sections()
return ny(e,t)&&r[t].theme===n}(t,"mobile","mobile")?j(u,l(I,Qv)):e&&ny(t,"mobile")?u:i)
return ht.extend(r,{plugins:c.join(" ")})},uy=function(e,t,n,r,o){var i=e?{mobile:oy(o.mobile||{},t)}:{},a=ty(["mobile"],Kv(i,o)),u=ht.extend(n,r,a.settings(),function(e,t){return e&&ny(t,"mobile")}(e,a)?function(e,t,n){void 0===n&&(n={})
var r=e.sections(),o=r.hasOwnProperty(t)?r[t]:{}
return ht.extend({},n,o)}(a,"mobile"):{},{validate:!0,external_plugins:iy(r,a.settings())})
return ay(e,a,r,u)},cy=function(e,t,n,r,o){var i=function(e,t,n,r,o){var i={id:t,theme:"silver",toolbar_mode:ry(e,"floating"),plugins:"",document_base_url:n,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,inline_styles:!0,convert_fonts_to_spans:!0,indent:!0,indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:o.convertURL,url_converter_scope:o}
return be(be({},i),r?Zv:{})}(o,t,n,Yv,e)
return uy(Gv||Jv,Gv,i,r,o)},sy=function(e,t,n){return b.from(t.settings[n]).filter(e)},fy=function(e,t,n,r){var o,i=t in e.settings?e.settings[t]:n
return"hash"===r?function(e){var t={}
return"string"==typeof e?U(e.indexOf("=")>0?e.split(/[;,](?![^=;,]*(?:[;,]|$))/):e.split(","),(function(e){var n=e.split("=")
n.length>1?t[ht.trim(n[0])]=ht.trim(n[1]):t[ht.trim(n[0])]=ht.trim(n[0])})):t=e,t}(i):"string"===r?sy(S,e,t).getOr(n):"number"===r?sy(D,e,t).getOr(n):"boolean"===r?sy(_,e,t).getOr(n):"object"===r?sy(N,e,t).getOr(n):"array"===r?sy(E,e,t).getOr(n):"string[]"===r?sy((o=S,function(e){return E(e)&&K(e,o)}),e,t).getOr(n):"function"===r?sy(A,e,t).getOr(n):i},ly=(Ev={},{add:function(e,t){Ev[e]=t},get:function(e){return Ev[e]?Ev[e]:{icons:{}}},has:function(e){return fe(Ev,e)}}),dy=function(e,t){return t.dom[e]},my=function(e,t){return parseInt(Vn(t,e),10)},py=l(dy,"clientWidth"),gy=l(dy,"clientHeight"),hy=l(my,"margin-top"),vy=l(my,"margin-left"),yy=function(e,t,n){var r,o=yt.fromDom(e.getBody()),i=e.inline?o:(r=o,yt.fromDom(Bt(r).dom.documentElement)),a=function(e,t,n,r){var o=function(e){return e.dom.getBoundingClientRect()}(t)
return{x:n-(e?o.left+t.dom.clientLeft+vy(t):0),y:r-(e?o.top+t.dom.clientTop+hy(t):0)}}(e.inline,i,t,n)
return function(e,t,n){var r=py(e),o=gy(e)
return t>=0&&n>=0&&t<=r&&n<=o}(i,a.x,a.y)},by=function(e){var t,n=e.inline?e.getBody():e.getContentAreaContainer()
return(t=n,b.from(t).map(yt.fromDom)).map(an).getOr(!1)}
function Cy(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getNotificationManagerImpl?n.getNotificationManagerImpl():{open:t=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:t,reposition:t,getArgs:t}},r=function(){return b.from(t[0])},o=function(){t.length>0&&n().reposition(t)},i=function(e){$(t,(function(t){return t===e})).each((function(e){t.splice(e,1)}))},a=function(a){if(!e.removed&&by(e))return q(t,(function(e){return t=n().getArgs(e),r=a,!(t.type!==r.type||t.text!==r.text||t.progressBar||t.timeout||r.progressBar||r.timeout)
var t,r})).getOrThunk((function(){e.editorManager.setActive(e)
var u=n().open(a,(function(){i(u),o(),r().fold((function(){return e.focus()}),(function(e){return yt.fromDom(e.getEl()).dom.focus()}))}))
return function(e){t.push(e)}(u),o(),u}))}
return function(e){e.on("SkinLoaded",(function(){var t=function(e){return e.getParam("service_message")}(e)
t&&a({text:t,type:"warning",timeout:0})})),e.on("ResizeEditor ResizeWindow NodeChange",(function(){xr.requestAnimationFrame(o)})),e.on("remove",(function(){U(t.slice(),(function(e){n().close(e)}))}))}(e),{open:a,close:function(){r().each((function(e){n().close(e),i(e),o()}))},getNotifications:function(){return t}}}var wy=fu.PluginManager,xy=fu.ThemeManager
var Sy=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getWindowManagerImpl?n.getWindowManagerImpl():{open:t=function(){throw new Error("Theme did not provide a WindowManager implementation.")},openUrl:t,alert:t,confirm:t,close:t,getParams:t,setParams:t}},r=function(e,t){return function(){return t?t.apply(e,arguments):void 0}},o=function(n){t.push(n),function(t){e.fire("OpenWindow",{dialog:t})}(n)},i=function(n){(function(t){e.fire("CloseWindow",{dialog:t})})(n),0===(t=j(t,(function(e){return e!==n}))).length&&e.focus()},a=function(t){e.editorManager.setActive(e),Md(e)
var n=t()
return o(n),n}
return e.on("remove",(function(){U(t,(function(e){n().close(e)}))})),{open:function(e,t){return a((function(){return n().open(e,t,i)}))},openUrl:function(e){return a((function(){return n().openUrl(e,i)}))},alert:function(e,t,o){n().alert(e,r(o||this,t))},confirm:function(e,t,o){n().confirm(e,r(o||this,t))},close:function(){b.from(t[t.length-1]).each((function(e){n().close(e),i(e)}))}}},Ny=function(e,t){e.notificationManager.open({type:"error",text:t})},Ey=function(e,t){e._skinLoaded?Ny(e,t):e.on("SkinLoaded",(function(){Ny(e,t)}))},ky=function(e,t,n){(function(e,t,n){e.fire(t,n)})(e,t,{message:n}),console.error(n)},_y=function(e,t,n){return n?"Failed to load "+e+": "+n+" from url "+t:"Failed to load "+e+" url: "+t},Ry=function(e,t,n){ky(e,"PluginLoadError",_y("plugin",t,n))},Ty=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=window.console
r&&(r.error?r.error.apply(r,Ce([e],t)):r.log.apply(r,Ce([e],t)))},Ay=function(e){var t=function(e){var t=e.getParam("content_css")
return S(t)?F(t.split(","),Ae):E(t)?t:!1===t||e.inline?[]:["default"]}(e),n=e.editorManager.baseURL+"/skins/content",r="content"+e.editorManager.suffix+".css",o=!0===e.inline
return F(t,(function(t){return function(e){return/^[a-z0-9\-]+$/i.test(e)}(t)&&!o?n+"/"+t+"/"+r:e.documentBaseURI.toAbsolute(t)}))}
function Dy(e,t){var n={},r=function(e,n,r,o){var i=new XMLHttpRequest
i.open("POST",t.url),i.withCredentials=t.credentials,i.upload.onprogress=function(e){o(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){if(i.status<200||i.status>=300)r("HTTP Error: "+i.status)
else{var e,o,a=JSON.parse(i.responseText)
if(a&&"string"==typeof a.location)n((e=t.basePath,o=a.location,e?e.replace(/\/$/,"")+"/"+o.replace(/^\//,""):o))
else r("Invalid JSON: "+i.responseText)}}
var a=new FormData
a.append("file",e.blob(),e.filename()),i.send(a)},o=function(e,t){return{url:t,blobInfo:e,status:!0}},i=function(e,t,n){return{url:"",blobInfo:e,status:!1,error:{message:t,options:n}}},a=function(e,t){ht.each(n[e],(function(e){e(t)})),delete n[e]},u=function(r,u){return r=ht.grep(r,(function(t){return!e.isUploaded(t.blobUri())})),yr.all(ht.map(r,(function(r){return e.isPending(r.blobUri())?function(e){var t=e.blobUri()
return new yr((function(e){n[t]=n[t]||[],n[t].push(e)}))}(r):function(t,n,r){return e.markPending(t.blobUri()),new yr((function(u){var c
try{var s=function(){c&&c.close()}
n(t,(function(n){s(),e.markUploaded(t.blobUri(),n),a(t.blobUri(),o(t,n)),u(o(t,n))}),(function(n,r){var o=r||{}
s(),e.removeFailed(t.blobUri()),a(t.blobUri(),i(t,n,o)),u(i(t,n,o))}),(function(e){e<0||e>100||(c||(c=r()),c.progressBar.value(e))}))}catch(f){u(i(t,f.message,{}))}}))}(r,t.handler,u)})))}
return!1===A(t.handler)&&(t.handler=r),{upload:function(e,n){return t.url||t.handler!==r?u(e,n):new yr((function(e){e([])}))}}}var Oy=0,By=function(e){return e+Oy+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t())
var t},Py=function(e){var t,n,r,o,i,a=function(){var e=[],t=function(e){if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
var t,n=e.id||By("blobid"),r=e.name||n
return{id:s(n),name:s(r),filename:s(r+"."+(t=e.blob.type,{"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"}[t.toLowerCase()]||"dat")),blob:s(e.blob),base64:s(e.base64),blobUri:s(e.blobUri||URL.createObjectURL(e.blob)),uri:s(e.uri)}},n=function(t){return q(e,t).getOrUndefined()},r=function(e){return n((function(t){return t.id()===e}))}
return{create:function(e,n,r,o){if(S(e))return t({id:e,name:o,blob:n,base64:r})
if(N(e))return t(e)
throw new Error("Unknown input type")},add:function(t){r(t.id())||e.push(t)},get:r,getByUri:function(e){return n((function(t){return t.blobUri()===e}))},getByData:function(e,t){return n((function(n){return n.base64()===e&&n.blob().type===t}))},findFirst:n,removeByUri:function(t){e=j(e,(function(e){return e.blobUri()!==t||(URL.revokeObjectURL(e.blobUri()),!1)}))},destroy:function(){U(e,(function(e){URL.revokeObjectURL(e.blobUri())})),e=[]}}}(),u=(r={},o=function(e,t){return{status:e,resultUri:t}},{hasBlobUri:i=function(e){return e in r},getResultUri:function(e){var t=r[e]
return t?t.resultUri:null},isPending:function(e){return!!i(e)&&1===r[e].status},isUploaded:function(e){return!!i(e)&&2===r[e].status},markPending:function(e){r[e]=o(1,null)},markUploaded:function(e,t){r[e]=o(2,t)},removeFailed:function(e){delete r[e]},destroy:function(){r={}}}),c=[],f=function(t){return function(n){return e.selection?t(n):[]}},l=function(e,t,n){var r=0
do{-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1)}while(-1!==r)
return e},d=function(e,t,n){var r='src="'+n+'"'+(n===lt.transparentSrc?' data-mce-placeholder="1"':"")
return e=l(e,'src="'+t+'"',r),e=l(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},m=function(t,n){U(e.undoManager.data,(function(e){"fragmented"===e.type?e.fragments=F(e.fragments,(function(e){return d(e,t,n)})):e.content=d(e.content,t,n)}))},p=function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})},h=function(n){return t||(t=Dy(u,{url:Wc(e),basePath:Kc(e),credentials:Xc(e),handler:Yc(e)})),b().then(f((function(r){var o=F(r,(function(e){return e.blobInfo}))
return t.upload(o,p).then(f((function(t){var o=[],i=F(t,(function(t,n){var i=r[n].blobInfo,u=r[n].image
return t.status&&function(e){return e.getParam("images_replace_blob_uris",!0,"boolean")}(e)?(a.removeByUri(u.src),function(t,n){var r,o=e.convertURL(n,"src")
m(t.src,n),e.$(t).attr({src:qc(e)?(r=n,r+(-1===r.indexOf("?")?"?":"&")+(new Date).getTime()):n,"data-mce-src":o})}(u,t.url)):t.error&&(t.error.options.remove&&(m(u.getAttribute("src"),lt.transparentSrc),o.push(u)),function(e,t){Ey(e,cu.translate(["Failed to upload image: {0}",t]))}(e,t.error.message)),{element:u,status:t.status,uploadUri:t.url,blobInfo:i}}))
return o.length>0&&(ov(e)?console.error("Removing images on failed uploads is currently unsupported for RTC"):e.undoManager.transact((function(){U(o,(function(t){e.dom.remove(t),a.removeByUri(t.src)}))}))),n&&n(i),i})))})))},v=function(t){if(Vc(e))return h(t)},y=function(t){return!1!==K(c,(function(e){return e(t)}))&&(0!==t.getAttribute("src").indexOf("data:")||function(e){return e.getParam("images_dataimg_filter",g,"function")}(e)(t))},b=function(){return n||(n=Sv(u,a)),n.findAll(e.getBody(),y).then(f((function(t){return t=j(t,(function(t){return"string"!=typeof t||(Ey(e,t),!1)})),U(t,(function(e){m(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),t})))},C=function(t){return t.replace(/src="(blob:[^"]+)"/g,(function(t,n){var r=u.getResultUri(n)
if(r)return'src="'+r+'"'
var o=a.getByUri(n)
return o||(o=V(e.editorManager.get(),(function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)}),null)),o?'src="data:'+o.blob().type+";base64,"+o.base64()+'"':t}))}
return e.on("SetContent",(function(){Vc(e)?v():b()})),e.on("RawSaveContent",(function(e){e.content=C(e.content)})),e.on("GetContent",(function(e){e.source_view||"raw"===e.format||(e.content=C(e.content))})),e.on("PostRender",(function(){e.parser.addNodeFilter("img",(function(e){U(e,(function(e){var t=e.attr("src")
if(!a.getByUri(t)){var n=u.getResultUri(t)
n&&e.attr("src",n)}}))}))})),{blobCache:a,addFilter:function(e){c.push(e)},uploadImages:h,uploadImagesAuto:v,scanForImages:b,destroy:function(){a.destroy(),u.destroy(),n=t=null}}},Ly=function(e,t,n,r){var o=Z(n.get()),i={},a={},u=j(Yf(e.dom,t),(function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}))
te(r,(function(t,n){ht.each(u,(function(r){return e.formatter.matchNode(r,n,{},t.similar)?(-1===o.indexOf(n)&&(U(t.callbacks,(function(e){e(!0,{node:r,format:n,parents:u})})),i[n]=t.callbacks),a[n]=t.callbacks,!1):!Eg(e,r,n)&&void 0}))}))
var c=Iy(n.get(),a,t,u)
n.set(be(be({},i),c))},Iy=function(e,t,n,r){return ae(e,(function(e,o){return!!fe(t,o)||(U(e,(function(e){e(!1,{node:n,format:o,parents:r})})),!1)})).t},My=function(e,t,n,r,o){return null===t.get()&&function(e,t){var n=ou({})
e.set({}),t.on("NodeChange",(function(r){Ly(t,r.element,n,e.get())}))}(t,e),function(e,t,n,r){var o=e.get()
U(t.split(","),(function(e){o[e]||(o[e]={similar:r,callbacks:[]}),o[e].callbacks.push(n)})),e.set(o)}(t,n,r,o),{unbind:function(){return function(e,t,n){var r=e.get()
U(t.split(","),(function(e){r[e].callbacks=j(r[e].callbacks,(function(e){return e!==n})),0===r[e].callbacks.length&&delete r[e]})),e.set(r)}(t,n,r)}}}
function Fy(e){var t={},n=function(e,r){e&&("string"!=typeof e?ht.each(e,(function(e,t){n(t,e)})):(E(r)||(r=[r]),ht.each(r,(function(e){void 0===e.deep&&(e.deep=!e.selector),void 0===e.split&&(e.split=!e.selector||e.inline),void 0===e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))})),t[e]=r))}
return n(function(e){var t={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all",preserve_attributes:["class","style"]}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",defaultBlock:"p",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(e,t,n){return yn(e)&&e.hasAttribute("href")},onformat:function(t,n,r){ht.each(r,(function(n,r){e.setAttrib(t,r,n)}))}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}
return ht.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),(function(e){t[e]={block:e,remove:"all"}})),t}(e.dom)),n(function(e){return e.getParam("formats")}(e)),{get:function(e){return e?t[e]:t},has:function(e){return fe(t,e)},register:n,unregister:function(e){return e&&t[e]&&delete t[e],t}}}var Uy,zy=ht.each,jy=Za.DOM,Hy=function(e,t){var n,r,o,i=t&&t.schema||Xo({}),a=function(e){r="string"==typeof e?{name:e,classes:[],attrs:{}}:e
var t=jy.create(r.name)
return function(e,t){t.classes.length&&jy.addClass(e,t.classes.join(" ")),jy.setAttribs(e,t.attrs)}(t,r),t},u=function(e,t,n){var r,o,c=t.length>0&&t[0],s=c&&c.name,f=function(e,t){var n="string"!=typeof e?e.nodeName.toLowerCase():e,r=i.getElementRule(n),o=r&&r.parentsRequired
return!(!o||!o.length)&&(t&&-1!==ht.inArray(o,t)?t:o[0])}(e,s)
if(f)s===f?(o=t[0],t=t.slice(1)):o=f
else if(c)o=t[0],t=t.slice(1)
else if(!n)return e
return o&&(r=a(o)).appendChild(e),n&&(r||(r=jy.create("div")).appendChild(e),ht.each(n,(function(t){var n=a(t)
r.insertBefore(n,e)}))),u(r,t,o&&o.siblings)}
return e&&e.length?(r=e[0],n=a(r),(o=jy.create("div")).appendChild(u(n,e.slice(1),r.siblings)),o):""},Vy=function(e){var t,n={classes:[],attrs:{}}
return"*"!==(e=n.selector=ht.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,(function(e,t,r,o,i){switch(t){case"#":n.attrs.id=r
break
case".":n.classes.push(r)
break
case":":-1!==ht.inArray("checked disabled enabled read-only required".split(" "),r)&&(n.attrs[r]=r)}if("["===o){var a=i.match(/([\w\-]+)(?:\=\"([^\"]+))?/)
a&&(n.attrs[a[1]]=a[2])}return""}))),n.name=t||"div",n},qy=function(e,t){var n,r,o,i="",a=function(e){var t=e.getParam("preview_styles","font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow")
return S(t)?t:""}(e)
if(""===a)return""
var u=function(e){return e.replace(/%(\w+)/g,"")}
if("string"==typeof t){if(!(t=e.formatter.get(t)))return
t=t[0]}if("preview"in t){var c=se(t,"preview")
if(c.is(!1))return""
a=c.getOr(a)}n=t.block||t.inline||"span"
var s,f=(s=t.selector)&&"string"==typeof s?(s=(s=s.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),ht.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/),(function(e){var t=ht.map(e.split(/(?:~\+|~|\+)/),Vy),n=t.pop()
return t.length&&(n.siblings=t),n})).reverse()):[]
f.length?(f[0].name||(f[0].name=n),n=t.selector,r=Hy(f,e)):r=Hy([n],e)
var l=jy.select(n,r)[0]||r.firstChild
return zy(t.styles,(function(e,t){var n=u(e)
n&&jy.setStyle(l,t,n)})),zy(t.attributes,(function(e,t){var n=u(e)
n&&jy.setAttrib(l,t,n)})),zy(t.classes,(function(e){var t=u(e)
jy.hasClass(l,t)||jy.addClass(l,t)})),e.fire("PreviewFormats"),jy.setStyles(r,{position:"absolute",left:-65535}),e.getBody().appendChild(r),o=jy.getStyle(e.getBody(),"fontSize",!0),o=/px$/.test(o)?parseInt(o,10):0,zy(a.split(" "),(function(t){var n=jy.getStyle(l,t,!0)
if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=jy.getStyle(e.getBody(),t,!0),"#ffffff"===jy.toHex(n).toLowerCase())||"color"===t&&"#000000"===jy.toHex(n).toLowerCase())){if("font-size"===t&&/em|%$/.test(n)){if(0===o)return
n=parseFloat(n)/(/%$/.test(n)?100:1)*o+"px"}"border"===t&&n&&(i+="padding:0 2px;"),i+=t+":"+n+";"}})),e.fire("AfterPreviewFormats"),jy.remove(r),i},$y=function(e){var t=Fy(e),n=ou(null)
return function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t])
e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])}(e),qg(e),{get:t.get,has:t.has,register:t.register,unregister:t.unregister,apply:function(t,n,r){(function(e,t,n,r){av(e).formatter.apply(t,n,r)})(e,t,n,r)},remove:function(t,n,r,o){(function(e,t,n,r,o){av(e).formatter.remove(t,n,r,o)})(e,t,n,r,o)},toggle:function(t,n,r){(function(e,t,n,r){av(e).formatter.toggle(t,n,r)})(e,t,n,r)},match:l(Ag,e),matchAll:l(Dg,e),matchNode:l(Tg,e),canApply:l(Og,e),formatChanged:l(My,e,n),getCssText:l(qy,e)}},Wy=function(e){var t=ou(b.none()),n=ou(0),r=ou(0),o={data:[],typing:!1,beforeChange:function(){(function(e,t,n){av(e).undoManager.beforeChange(t,n)})(e,n,t)},add:function(i,a){return function(e,t,n,r,o,i,a){return av(e).undoManager.addUndoLevel(t,n,r,o,i,a)}(e,o,r,n,t,i,a)},undo:function(){return function(e,t,n,r){return av(e).undoManager.undo(t,n,r)}(e,o,n,r)},redo:function(){return function(e,t,n){return av(e).undoManager.redo(t,n)}(e,r,o.data)},clear:function(){(function(e,t,n){av(e).undoManager.clear(t,n)})(e,o,r)},reset:function(){(function(e,t){av(e).undoManager.reset(t)})(e,o)},hasUndo:function(){return function(e,t,n){return av(e).undoManager.hasUndo(t,n)}(e,o,r)},hasRedo:function(){return function(e,t,n){return av(e).undoManager.hasRedo(t,n)}(e,o,r)},transact:function(t){return function(e,t,n,r){return av(e).undoManager.transact(t,n,r)}(e,o,n,t)},ignore:function(t){(function(e,t,n){av(e).undoManager.ignore(t,n)})(e,n,t)},extra:function(t,n){(function(e,t,n,r,o){av(e).undoManager.extra(t,n,r,o)})(e,o,r,t,n)}}
return ov(e)||function(e,t,n){var r=ou(!1),o=function(e){Qh(t,!1,n),t.add({},e)}
e.on("init",(function(){t.add()})),e.on("BeforeExecCommand",(function(e){var r=e.command.toLowerCase()
"undo"!==r&&"redo"!==r&&"mcerepaint"!==r&&(Zh(t,n),t.beforeChange())})),e.on("ExecCommand",(function(e){var t=e.command.toLowerCase()
"undo"!==t&&"redo"!==t&&"mcerepaint"!==t&&o(e)})),e.on("ObjectResizeStart cut",(function(){t.beforeChange()})),e.on("SaveContent ObjectResized blur",o),e.on("dragend",o),e.on("keyup",(function(n){var i=n.keyCode
n.isDefaultPrevented()||((i>=33&&i<=36||i>=37&&i<=40||45===i||n.ctrlKey)&&(o(),e.nodeChanged()),46!==i&&8!==i||e.nodeChanged(),r.get()&&t.typing&&!1===Gh(Wh(e),t.data[0])&&(!1===e.isDirty()&&(e.setDirty(!0),e.fire("change",{level:t.data[0],lastLevel:null})),e.fire("TypingUndo"),r.set(!1),e.nodeChanged()))})),e.on("keydown",(function(e){var i=e.keyCode
if(!e.isDefaultPrevented())if(i>=33&&i<=36||i>=37&&i<=40||45===i)t.typing&&o(e)
else{var a=e.ctrlKey&&!e.altKey||e.metaKey
!(i<16||i>20)||224===i||91===i||t.typing||a||(t.beforeChange(),Qh(t,!0,n),t.add({},e),r.set(!0))}})),e.on("mousedown",(function(e){t.typing&&o(e)})),e.on("input",(function(e){var t
e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(t=e).inputType&&null===t.data||function(e){return"insertFromPaste"===e.inputType||"insertFromDrop"===e.inputType}(e))&&o(e)})),e.on("AddUndo Undo Redo ClearUndos",(function(t){t.isDefaultPrevented()||e.nodeChanged()}))}(e,o,n),function(e){e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo")}(e),o},Ky=[9,27,Pl.HOME,Pl.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,Pl.DOWN,Pl.UP,Pl.LEFT,Pl.RIGHT].concat(lt.browser.isFirefox()?[224]:[]),Xy="data-mce-placeholder",Yy=function(e){return"keydown"===e.type||"keyup"===e.type},Gy=function(e){var t=e.keyCode
return t===Pl.BACKSPACE||t===Pl.DELETE},Jy=function(e){var t=e.dom,n=jc(e),r=function(e){return e.getParam("placeholder",Fc.getAttrib(e.getElement(),"placeholder"),"string")}(e),o=function(i,a){if(!function(e){if(Yy(e)){var t=e.keyCode
return!Gy(e)&&(Pl.metaKeyPressed(e)||e.altKey||t>=112&&t<=123||I(Ky,t))}return!1}(i)){var u=e.getBody(),c=!function(e){return Yy(e)&&!(Gy(e)||"keyup"===e.type&&229===e.keyCode)}(i)&&function(e,t,n){if(Co(yt.fromDom(t),!1)){var r=""===n,o=t.firstElementChild
return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&(r?!e.isBlock(o):n===o.nodeName.toLowerCase())}return!1}(t,u,n);(""!==t.getAttrib(u,Xy)!==c||a)&&(t.setAttrib(u,Xy,c?r:null),t.setAttrib(u,"aria-placeholder",c?r:null),function(e,t){e.fire("PlaceholderToggle",{state:t})}(e,c),e.on(c?"keydown":"keyup",o),e.off(c?"keyup":"keydown",o))}}
r&&e.on("init",(function(t){o(t,!0),e.on("change SetContent ExecCommand",o),e.on("paste",(function(t){return xr.setEditorTimeout(e,(function(){return o(t)}))}))}))},Qy=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,Zy=function(e,t){return Ct(yt.fromDom(t),function(e){return e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string")}(e))},eb=function(e){return"rtl"===Za.DOM.getStyle(e,"direction",!0)||(t=e.textContent,Qy.test(t))
var t},tb=function(e,t,n){var r=function(e,t,n){return j(Za.DOM.getParents(n.container(),"*",t),e)}(e,t,n)
return b.from(r[r.length-1])},nb=function(e,t){if(!t)return t
var n=t.container(),r=t.offset()
return e?Wr(n)?kn(n.nextSibling)?gc(n.nextSibling,0):gc.after(n):Yr(t)?gc(n,r+1):t:Wr(n)?kn(n.previousSibling)?gc(n.previousSibling,n.previousSibling.data.length):gc.before(n):Gr(t)?gc(n,r-1):t},rb=l(nb,!0),ob=l(nb,!1),ib=function(e,t){return Nt(e,t)?pr(t,(function(e){return Br(e)||Lr(e)}),function(e){return function(t){return xt(e,yt.fromDom(t.dom.parentNode))}}(e)):b.none()},ab=function(e){e.dom.isEmpty(e.getBody())&&(e.setContent(""),function(e){var t=e.getBody(),n=t.firstChild&&e.dom.isBlock(t.firstChild)?t.firstChild:t
e.selection.setCursorLocation(n,0)}(e))},ub=function(e,t){return{from:e,to:t}},cb=function(e,t){var n=yt.fromDom(e),r=yt.fromDom(t.container())
return ib(n,r).map((function(e){return function(e,t){return{block:e,position:t}}(e,t)}))},sb=function(e,t,n){var r=cb(e,gc.fromRangeStart(n)),o=r.bind((function(n){return pf(t,e,n.position).bind((function(n){return cb(e,n).map((function(n){return function(e,t,n){return An(n.position.getNode())&&!1===Co(n.block)?vf(!1,n.block.dom).bind((function(r){return r.isEqual(n.position)?pf(t,e,r).bind((function(t){return cb(e,t)})):b.some(n)})).getOr(n):n}(e,t,n)}))}))}))
return Mu(r,o,ub).filter((function(e){return function(e){return!1===xt(e.from.block,e.to.block)}(e)&&function(e){return Lt(e.from.block).bind((function(t){return Lt(e.to.block).filter((function(e){return xt(t,e)}))})).isSome()}(e)&&function(e){return!1===Bn(e.from.block.dom)&&!1===Bn(e.to.block.dom)}(e)}))},fb=function(e){var t=zt(e)
return $(t,Ar).fold((function(){return t}),(function(e){return t.slice(0,e)}))},lb=function(e){var t=fb(e)
return U(t,rn),t},db=function(e,t){var n=Vm(t,e)
return q(n.reverse(),(function(e){return Co(e)})).each(rn)},mb=function(e,t,n,r){if(Co(n))return Um(n),Cf(n.dom)
0===j(Ft(r),(function(e){return!Co(e)})).length&&Co(t)&&Jt(r,yt.fromTag("br"))
var o=bf(n.dom,gc.before(r.dom))
return U(lb(t),(function(e){Jt(r,e)})),db(e,t),o},pb=function(e,t,n){if(Co(n))return rn(n),Co(t)&&Um(t),Cf(t.dom)
var r=wf(n.dom)
return U(lb(t),(function(e){en(n,e)})),db(e,t),r},gb=function(e,t){return Nt(t,e)?function(e,t){var n=Vm(t,e)
return b.from(n[n.length-1])}(t,e):b.none()},hb=function(e,t){vf(e,t.dom).map((function(e){return e.getNode()})).map(yt.fromDom).filter(Or).each(rn)},vb=function(e,t,n){return hb(!0,t),hb(!1,n),gb(t,n).fold(l(pb,e,t,n),l(mb,e,t,n))},yb=function(e,t,n,r){return t?vb(e,r,n):vb(e,n,r)},bb=function(e,t){var n=yt.fromDom(e.getBody()),r=function(e,t,n){return n.collapsed?sb(e,t,n):b.none()}(n.dom,t,e.selection.getRng()).bind((function(e){return yb(n,t,e.from.block,e.to.block)}))
return r.each((function(t){e.selection.setRng(t.toRange())})),r.isSome()},Cb=function(e,t){var n=yt.fromDom(t),r=l(xt,e)
return mr(n,Mr,r).isSome()},wb=function(e,t){var n=bf(e.dom,gc.fromRangeStart(t)).isNone(),r=yf(e.dom,gc.fromRangeEnd(t)).isNone()
return!function(e,t){return Cb(e,t.startContainer)||Cb(e,t.endContainer)}(e,t)&&n&&r},xb=function(e){var t=yt.fromDom(e.getBody()),n=e.selection.getRng()
return wb(t,n)?function(e){return e.setContent(""),e.selection.setCursorLocation(),!0}(e):function(e,t){var n=t.getRng()
return Mu(ib(e,yt.fromDom(n.startContainer)),ib(e,yt.fromDom(n.endContainer)),(function(r,o){return!1===xt(r,o)&&(n.deleteContents(),yb(e,!0,r,o).each((function(e){t.setRng(e.toRange())})),!0)})).getOr(!1)}(t,e.selection)},Sb=function(e,t){return!e.selection.isCollapsed()&&xb(e)},Nb=On,Eb=Bn,kb=function(e,t,n,r,o){return b.from(t._selectionOverrides.showCaret(e,n,r,o))},_b=function(e,t){return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?b.none():b.some(function(e){var t=e.ownerDocument.createRange()
return t.selectNode(e),t}(t))},Rb=function(e,t,n){var r=$s(1,e.getBody(),t),o=gc.fromRangeStart(r),i=o.getNode()
if(Ns(i))return kb(1,e,i,!o.isAtEnd(),!1)
var a=o.getNode(!0)
if(Ns(a))return kb(1,e,a,!1,!1)
var u=e.dom.getParent(o.getNode(),(function(e){return Eb(e)||Nb(e)}))
return Ns(u)?kb(1,e,u,!1,n):b.none()},Tb=function(e,t,n){return t.collapsed?Rb(e,t,n).getOr(t):t},Ab=function(e){return Im(e)||Om(e)},Db=function(e){return Mm(e)||Bm(e)},Ob=function(e,t,n,r,o,i){return kb(r,e,i.getNode(!o),o,!0).each((function(n){if(t.collapsed){var r=t.cloneRange()
o?r.setEnd(n.startContainer,n.startOffset):r.setStart(n.endContainer,n.endOffset),r.deleteContents()}else t.deleteContents()
e.selection.setRng(n)})),function(e,t){kn(t)&&0===t.data.length&&e.remove(t)}(e.dom,n),!0},Bb=function(e,t){return function(e,t){var n=e.selection.getRng()
if(!kn(n.commonAncestorContainer))return!1
var r=t?pc.Forwards:pc.Backwards,o=sf(e.getBody()),i=l(Ys,t?o.next:o.prev),a=t?Ab:Db,u=Ks(r,e.getBody(),n),c=nb(t,i(u))
if(!c||!Gs(u,c))return!1
if(a(c))return Ob(e,n,u.getNode(),r,t,c)
var s=i(c)
return!!(s&&a(s)&&Gs(c,s))&&Ob(e,n,u.getNode(),r,t,s)}(e,t)},Pb=sr([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),Lb=function(e,t,n,r){var o=r.getNode(!1===t)
return ib(yt.fromDom(e),yt.fromDom(n.getNode())).map((function(e){return Co(e)?Pb.remove(e.dom):Pb.moveToElement(o)})).orThunk((function(){return b.some(Pb.moveToElement(o))}))},Ib=function(e,t,n){return pf(t,e,n).bind((function(r){return o=r.getNode(),Mr(yt.fromDom(o))||Lr(yt.fromDom(o))||function(e,t,n,r){var o=function(t){return Dr(yt.fromDom(t))&&!Fs(n,r,e)}
return Ws(!t,n).fold((function(){return Ws(t,r).fold(p,o)}),o)}(e,t,n,r)?b.none():t&&Bn(r.getNode())||!1===t&&Bn(r.getNode(!0))?Lb(e,t,n,r):t&&Mm(n)||!1===t&&Im(n)?b.some(Pb.moveToPosition(r)):b.none()
var o}))},Mb=function(e,t,n){return function(e,t){var n=t.getNode(!1===e),r=e?"after":"before"
return yn(n)&&n.getAttribute("data-mce-caret")===r}(t,n)?function(e,t){return e&&Bn(t.nextSibling)?b.some(Pb.moveToElement(t.nextSibling)):!1===e&&Bn(t.previousSibling)?b.some(Pb.moveToElement(t.previousSibling)):b.none()}(t,n.getNode(!1===t)).fold((function(){return Ib(e,t,n)}),b.some):Ib(e,t,n).bind((function(t){return function(e,t,n){return n.fold((function(e){return b.some(Pb.remove(e))}),(function(e){return b.some(Pb.moveToElement(e))}),(function(n){return Fs(t,n,e)?b.none():b.some(Pb.moveToPosition(n))}))}(e,n,t)}))},Fb=function(e,t){return b.from(Ol(e.getBody(),t))},Ub=function(e,t){var n=e.selection.getNode()
return Fb(e,n).filter(Bn).fold((function(){return function(e,t,n){var r=$s(t?1:-1,e,n),o=gc.fromRangeStart(r),i=yt.fromDom(e)
return!1===t&&Mm(o)?b.some(Pb.remove(o.getNode(!0))):t&&Im(o)?b.some(Pb.remove(o.getNode())):!1===t&&Im(o)&&tp(i,o)?np(i,o).map((function(e){return Pb.remove(e.getNode())})):t&&Mm(o)&&ep(i,o)?rp(i,o).map((function(e){return Pb.remove(e.getNode())})):Mb(e,t,o)}(e.getBody(),t,e.selection.getRng()).exists((function(n){return n.fold(function(e,t){return function(n){return e._selectionOverrides.hideFakeCaret(),Op(e,t,yt.fromDom(n)),!0}}(e,t),function(e,t){return function(n){var r=t?gc.before(n):gc.after(n)
return e.selection.setRng(r.toRange()),!0}}(e,t),function(e){return function(t){return e.selection.setRng(t.toRange()),!0}}(e))}))}),g)},zb=function(e,t){var n=e.selection.getNode()
return!!Bn(n)&&Fb(e,n.parentNode).filter(Bn).fold((function(){var n
return n=yt.fromDom(e.getBody()),U(wu(n,".mce-offscreen-selection"),rn),Op(e,t,yt.fromDom(e.selection.getNode())),ab(e),!0}),(function(){return!0}))},jb=function(e){var t=e.dom,n=e.selection,r=Ol(e.getBody(),n.getNode())
if(On(r)&&t.isBlock(r)&&t.isEmpty(r)){var o=t.create("br",{"data-mce-bogus":"1"})
t.setHTML(r,""),r.appendChild(o),n.setRng(gc.before(o).toRange())}return!0},Hb=function(e,t){return e.selection.isCollapsed()?Ub(e,t):zb(e,t)},Vb=function(e,t){return!!e.selection.isCollapsed()&&function(e,t){var n=gc.fromRangeStart(e.selection.getRng())
return pf(t,e.getBody(),n).filter((function(e){return t?Am(e):Dm(e)})).bind((function(e){return b.from(Us(t?0:-1,e))})).exists((function(t){return e.selection.select(t),!0}))}(e,t)},qb=kn,$b=function(e){return qb(e)&&e.data[0]===zr},Wb=function(e){return qb(e)&&e.data[e.data.length-1]===zr},Kb=function(e){return e.ownerDocument.createTextNode(zr)},Xb=function(e,t){return e?function(e){if(qb(e.previousSibling))return Wb(e.previousSibling)||e.previousSibling.appendData(zr),e.previousSibling
if(qb(e))return $b(e)||e.insertData(0,zr),e
var t=Kb(e)
return e.parentNode.insertBefore(t,e),t}(t):function(e){if(qb(e.nextSibling))return $b(e.nextSibling)||e.nextSibling.insertData(0,zr),e.nextSibling
if(qb(e))return Wb(e)||e.appendData(zr),e
var t=Kb(e)
return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t}(t)},Yb=l(Xb,!0),Gb=l(Xb,!1),Jb=function(e,t){return kn(e.container())?Xb(t,e.container()):Xb(t,e.getNode())},Qb=function(e,t){var n=t.get()
return n&&e.container()===n&&Wr(n)},Zb=function(e,t){return t.fold((function(t){hs(e.get())
var n=Yb(t)
return e.set(n),b.some(gc(n,n.length-1))}),(function(t){return Cf(t).map((function(t){if(Qb(t,e))return gc(e.get(),1)
hs(e.get())
var n=Jb(t,!0)
return e.set(n),gc(n,1)}))}),(function(t){return wf(t).map((function(t){if(Qb(t,e))return gc(e.get(),e.get().length-1)
hs(e.get())
var n=Jb(t,!1)
return e.set(n),gc(n,n.length-1)}))}),(function(t){hs(e.get())
var n=Gb(t)
return e.set(n),b.some(gc(n,1))}))},eC=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t)
if(r.isSome())return r}return b.none()},tC=sr([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),nC=function(e,t){var n=Ms(t,e)
return n||e},rC=function(e,t,n){var r=rb(n),o=nC(t,r.container())
return tb(e,o,r).fold((function(){return yf(o,r).bind(l(tb,e,o)).map((function(e){return tC.before(e)}))}),b.none)},oC=function(e,t){return null===Nf(e,t)},iC=function(e,t,n){return tb(e,t,n).filter(l(oC,t))},aC=function(e,t,n){var r=ob(n)
return iC(e,t,r).bind((function(e){return bf(e,r).isNone()?b.some(tC.start(e)):b.none()}))},uC=function(e,t,n){var r=rb(n)
return iC(e,t,r).bind((function(e){return yf(e,r).isNone()?b.some(tC.end(e)):b.none()}))},cC=function(e,t,n){var r=ob(n),o=nC(t,r.container())
return tb(e,o,r).fold((function(){return bf(o,r).bind(l(tb,e,o)).map((function(e){return tC.after(e)}))}),b.none)},sC=function(e){return!1===eb(lC(e))},fC=function(e,t,n){return eC([rC,aC,uC,cC],[e,t,n]).filter(sC)},lC=function(e){return e.fold(f,f,f,f)},dC=function(e){return e.fold(s("before"),s("start"),s("end"),s("after"))},mC=function(e){return e.fold(tC.before,tC.before,tC.after,tC.after)},pC=function(e){return e.fold(tC.start,tC.start,tC.end,tC.end)},gC=function(e,t,n,r,o,i){return Mu(tb(t,n,r),tb(t,n,o),(function(t,r){return t!==r&&function(e,t,n){var r=Ms(t,e),o=Ms(n,e)
return r&&r===o}(n,t,r)?tC.after(e?t:r):i})).getOr(i)},hC=function(e,t){return e.fold(g,(function(e){return r=t,!(dC(n=e)===dC(r)&&lC(n)===lC(r))
var n,r}))},vC=function(e,t){return e?t.fold(c(b.some,tC.start),b.none,c(b.some,tC.after),b.none):t.fold(b.none,c(b.some,tC.before),b.none,c(b.some,tC.end))},yC=function(e,t,n,r){var o=nb(e,r),i=fC(t,n,o)
return fC(t,n,o).bind(l(vC,e)).orThunk((function(){return function(e,t,n,r,o){var i=nb(e,o)
return pf(e,n,i).map(l(nb,e)).fold((function(){return r.map(mC)}),(function(o){return fC(t,n,o).map(l(gC,e,t,n,i,o)).filter(l(hC,r))})).filter(sC)}(e,t,n,i,r)}))},bC=(l(yC,!1),l(yC,!0),function(e,t,n){var r=e?1:-1
return t.setRng(gc(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0}),CC=function(e,t){var n=t.selection.getRng(),r=e?gc.fromRangeEnd(n):gc.fromRangeStart(n)
return!!function(e){return A(e.selection.getSel().modify)}(t)&&(e&&Yr(r)?bC(!0,t.selection,r):!(e||!Gr(r))&&bC(!1,t.selection,r))},wC=function(e,t){var n=e.dom.createRng()
n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},xC=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},SC=function(e,t,n){return Zb(t,n).map((function(t){return wC(e,t),n}))},NC=function(e,t){if(e.selection.isCollapsed()&&!0!==e.composing&&t.get()){var n=gc.fromRangeStart(e.selection.getRng())
gc.isTextPosition(n)&&!1===function(e){return Yr(e)||Gr(e)}(n)&&(wC(e,gs(t.get(),n)),t.set(null))}},EC=function(e,t,n){return!!os(e)&&function(e,t,n){var r=e.getBody(),o=gc.fromRangeStart(e.selection.getRng()),i=l(Zy,e)
return yC(n,i,r,o).bind((function(n){return SC(e,t,n)}))}(e,t,n).isSome()},kC=function(e,t,n){return!!os(t)&&CC(e,t)},_C=function(e){var t=ou(null),n=l(Zy,e)
return e.on("NodeChange",(function(r){!os(e)||lt.browser.isIE()&&r.initial||(function(e,t,n){var r=F(wu(yt.fromDom(t.getRoot()),'*[data-mce-selected="inline-boundary"]'),(function(e){return e.dom})),o=j(r,e),i=j(n,e)
U(Y(o,i),l(xC,!1)),U(Y(i,o),l(xC,!0))}(n,e.dom,r.parents),NC(e,t),function(e,t,n,r){if(t.selection.isCollapsed()){var o=j(r,e)
U(o,(function(r){var o=gc.fromRangeStart(t.selection.getRng())
fC(e,t.getBody(),o).bind((function(e){return SC(t,n,e)}))}))}}(n,e,t,r.parents))})),t},RC=l(kC,!0),TC=l(kC,!1),AC=function(e,t){return function(n){return Zb(t,n).exists((function(t){return wC(e,t),!0}))}},DC=function(e,t,n,r){var o=e.getBody(),i=l(Zy,e)
e.undoManager.ignore((function(){e.selection.setRng(function(e,t){var n=document.createRange()
return n.setStart(e.container(),e.offset()),n.setEnd(t.container(),t.offset()),n}(n,r)),e.execCommand("Delete"),fC(i,o,gc.fromRangeStart(e.selection.getRng())).map(pC).map(AC(e,t))})),e.nodeChanged()},OC=function(e,t,n,r){var o=function(e,t){return Ms(t,e)||e}(e.getBody(),r.container()),i=l(Zy,e),a=fC(i,o,r)
return a.bind((function(e){return n?e.fold(s(b.some(pC(e))),b.none,s(b.some(mC(e))),b.none):e.fold(b.none,s(b.some(mC(e))),b.none,s(b.some(pC(e))))})).map(AC(e,t)).getOrThunk((function(){var u=gf(n,o,r),c=u.bind((function(e){return fC(i,o,e)}))
return Mu(a,c,(function(){return tb(i,o,r).exists((function(t){return!!function(e){return Mu(Cf(e),wf(e),(function(t,n){var r=nb(!0,t),o=nb(!1,n)
return yf(e,r).forall((function(e){return e.isEqual(o)}))})).getOr(!0)}(t)&&(Op(e,n,yt.fromDom(t)),!0)}))})).orThunk((function(){return c.bind((function(o){return u.map((function(o){return n?DC(e,t,r,o):DC(e,t,o,r),!0}))}))})).getOr(!1)}))},BC=function(e,t,n){if(e.selection.isCollapsed()&&os(e)){var r=gc.fromRangeStart(e.selection.getRng())
return OC(e,t,n,r)}return!1},PC=function(e){return 1===zt(e).length},LC=function(e,t,n,r){var o=l($g,t),i=F(j(r,o),(function(e){return e.dom}))
if(0===i.length)Op(t,e,n)
else{var a=function(e,t){var n=Fg(!1),r=Hg(t,n.dom)
return Jt(yt.fromDom(e),n),rn(yt.fromDom(e)),gc(r,0)}(n.dom,i)
t.selection.setRng(a.toRange())}},IC=function(e,t){var n=yt.fromDom(e.getBody()),r=yt.fromDom(e.selection.getStart()),o=j(function(e,t){var n=Vm(t,e)
return $(n,Ar).fold(s(n),(function(e){return n.slice(0,e)}))}(n,r),PC)
return J(o).exists((function(n){var r,i=gc.fromRangeStart(e.selection.getRng())
return!(!function(e,t,n){return Mu(Cf(n),wf(n),(function(r,o){var i=nb(!0,r),a=nb(!1,o),u=nb(!1,t)
return e?yf(n,u).exists((function(e){return e.isEqual(a)&&t.isEqual(i)})):bf(n,u).exists((function(e){return e.isEqual(i)&&t.isEqual(a)}))})).getOr(!0)}(t,i,n.dom)||(r=n,Sf(r.dom)&&Ig(r.dom)))&&(LC(t,e,n,o),!0)}))},MC=function(e,t){return!!e.selection.isCollapsed()&&IC(e,t)},FC=function(e,t,n){return e._selectionOverrides.hideFakeCaret(),Op(e,t,yt.fromDom(n)),!0},UC=function(e,t){return e.selection.isCollapsed()?function(e,t){var n=t?Om:Bm,r=t?pc.Forwards:pc.Backwards,o=Ks(r,e.getBody(),e.selection.getRng())
return n(o)?FC(e,t,o.getNode(!t)):b.from(nb(t,o)).filter((function(e){return n(e)&&Gs(o,e)})).exists((function(n){return FC(e,t,n.getNode(!t))}))}(e,t):function(e,t){var n=e.selection.getNode()
return!!Ln(n)&&FC(e,t,n)}(e,t)},zC=function(e){var t=parseInt(e,10)
return isNaN(t)?0:t},jC=function(e,t){return(e||"table"===Et(t)?"margin":"padding")+("rtl"===Vn(t,"direction")?"-right":"-left")},HC=function(e){var t=qC(e)
return!e.mode.isReadOnly()&&(t.length>1||function(e,t){return K(t,(function(t){var n=jC(Zc(e),t),r=$n(t,n).map(zC).getOr(0)
return"false"!==e.dom.getContentEditable(t.dom)&&r>0}))}(e,t))},VC=function(e){return Pr(e)||Lr(e)},qC=function(e){return j(F(e.selection.getSelectedBlocks(),yt.fromDom),(function(e){return!VC(e)&&!function(e){return Lt(e).map(VC).getOr(!1)}(e)&&pr(e,(function(e){return On(e.dom)||Bn(e.dom)})).exists((function(e){return On(e.dom)}))}))},$C=function(e,t){var n=e.dom,r=e.selection,o=e.formatter,i=function(e){return e.getParam("indentation","40px","string")}(e),a=/[a-z%]+$/i.exec(i)[0],u=parseInt(i,10),c=Zc(e),s=jc(e)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||""!==s||n.getParent(r.getNode(),n.isBlock)||o.apply("div"),U(qC(e),(function(e){(function(e,t,n,r,o,i){var a=jC(n,yt.fromDom(i))
if("outdent"===t){var u=Math.max(0,zC(i.style[a])-r)
e.setStyle(i,a,u?u+o:"")}else u=zC(i.style[a])+r+o,e.setStyle(i,a,u)})(n,t,c,u,a,e.dom)}))},WC=function(e,t){if(e.selection.isCollapsed()&&HC(e)){var n=e.dom,r=e.selection.getRng(),o=gc.fromRangeStart(r),i=n.getParent(r.startContainer,n.isBlock)
if(null!==i&&Xm(yt.fromDom(i),o))return $C(e,"outdent"),!0}return!1},KC=function(e,t){e.getDoc().execCommand(t,!1,null)},XC=function(e,t){e.addCommand("delete",(function(){(function(e,t){WC(e)||Hb(e,!1)||Bb(e,!1)||BC(e,t,!1)||bb(e,!1)||ig(e)||Vb(e,!1)||UC(e,!1)||Sb(e)||MC(e,!1)||(KC(e,"Delete"),ab(e))})(e,t)})),e.addCommand("forwardDelete",(function(){(function(e,t){Hb(e,!0)||Bb(e,!0)||BC(e,t,!0)||bb(e,!0)||ig(e)||Vb(e,!0)||UC(e,!0)||Sb(e)||MC(e,!0)||KC(e,"ForwardDelete")})(e,t)}))},YC=function(e){return void 0===e.touches||1!==e.touches.length?b.none():b.some(e.touches[0])},GC=function(e){var t=ou(b.none()),n=ou(!1),r=du((function(t){e.fire("longpress",be(be({},t),{type:"longpress"})),n.set(!0)}),400)
e.on("touchstart",(function(e){YC(e).each((function(o){r.cancel()
var i={x:o.clientX,y:o.clientY,target:e.target}
r.throttle(e),n.set(!1),t.set(b.some(i))}))}),!0),e.on("touchmove",(function(o){r.cancel(),YC(o).each((function(r){t.get().each((function(o){(function(e,t){var n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y)
return n>5||r>5})(r,o)&&(t.set(b.none()),n.set(!1),e.fire("longpresscancel"))}))}))}),!0),e.on("touchend touchcancel",(function(o){r.cancel(),"touchcancel"!==o.type&&t.get().filter((function(e){return e.target.isEqualNode(o.target)})).each((function(){n.get()?o.preventDefault():e.fire("tap",be(be({},o),{type:"tap"}))}))}),!0)},JC=function(e,t){return e.hasOwnProperty(t.nodeName)},QC=function(e,t){return!!kn(t)||!!yn(t)&&(!JC(e,t)&&!Pf(t))},ZC=function(e,t){if(kn(t)){if(0===t.nodeValue.length)return!0
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||JC(e,t.nextSibling)))return!0}return!1},ew=function(e){var t,n,r,o=e.dom,i=e.selection,a=e.schema,u=a.getBlockElements(),c=i.getStart(),s=e.getBody(),f=jc(e)
if(c&&yn(c)&&f){var l=s.nodeName.toLowerCase()
if(a.isValidChild(l,f.toLowerCase())&&!function(e,t,n){return M(Hm(yt.fromDom(n),yt.fromDom(t)),(function(t){return JC(e,t.dom)}))}(u,s,c)){var d=i.getRng(),m=d.startContainer,p=d.startOffset,g=d.endContainer,h=d.endOffset,v=Gd(e)
for(c=s.firstChild;c;)if(QC(u,c)){if(ZC(u,c)){n=c,c=c.nextSibling,o.remove(n)
continue}t||(t=o.create(f,Hc(e)),c.parentNode.insertBefore(t,c),r=!0),n=c,c=c.nextSibling,t.appendChild(n)}else t=null,c=c.nextSibling
r&&v&&(d.setStart(m,p),d.setEnd(g,h),i.setRng(d),e.nodeChanged())}}},tw=function(e,t){t.hasAttribute("data-mce-caret")&&(eo(t),function(e){e.selection.setRng(e.selection.getRng())}(e),e.selection.scrollIntoView(t))},nw=function(e,t){var n=function(e){return hr(yt.fromDom(e.getBody()),"*[data-mce-caret]").fold(s(null),(function(e){return e.dom}))}(e)
if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void tw(e,n)):void(Xr(n)&&(tw(e,n),e.undoManager.add()))};(function(e){e[e.Br=0]="Br",e[e.Block=1]="Block",e[e.Wrap=2]="Wrap",e[e.Eol=3]="Eol"})(Uy||(Uy={}))
var rw,ow=function(e,t){return e===pc.Backwards?X(t):t},iw=function(e,t,n){return e===pc.Forwards?t.next(n):t.prev(n)},aw=function(e,t,n,r){return An(r.getNode(t===pc.Forwards))?Uy.Br:!1===Fs(n,r)?Uy.Block:Uy.Wrap},uw=function(e,t,n,r){for(var o,i=sf(n),a=r,u=[];a&&(o=iw(t,i,a));){if(An(o.getNode(!1)))return t===pc.Forwards?{positions:ow(t,u).concat([o]),breakType:Uy.Br,breakAt:b.some(o)}:{positions:ow(t,u),breakType:Uy.Br,breakAt:b.some(o)}
if(o.isVisible()){if(e(a,o)){var c=aw(0,t,a,o)
return{positions:ow(t,u),breakType:c,breakAt:b.some(o)}}u.push(o),a=o}else a=o}return{positions:ow(t,u),breakType:Uy.Eol,breakAt:b.none()}},cw=function(e,t,n,r){return t(n,r).breakAt.map((function(r){var o=t(n,r).positions
return e===pc.Backwards?o.concat(r):[r].concat(o)})).getOr([])},sw=function(e,t){return V(e,(function(e,n){return e.fold((function(){return b.some(n)}),(function(r){return Mu(G(r.getClientRects()),G(n.getClientRects()),(function(e,o){var i=Math.abs(t-e.left)
return Math.abs(t-o.left)<=i?n:r})).or(e)}))}),b.none())},fw=function(e,t){return G(t.getClientRects()).bind((function(t){return sw(e,t.left)}))},lw=l(uw,mc.isAbove,-1),dw=l(uw,mc.isBelow,1),mw=l(cw,-1,lw),pw=l(cw,1,dw),gw=function(e){var t=function(t){return F(t,(function(t){return(t=Uu(t)).node=e,t}))}
if(yn(e))return t(e.getClientRects())
if(kn(e)){var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}},hw=function(e){return W(e,gw)};(function(e){e[e.Up=-1]="Up",e[e.Down=1]="Down"})(rw||(rw={}))
var vw,yw,bw=function(e,t,n,r,o,i){var a=0,u=[],c=function(r){var i,c,f
for(f=hw([r]),-1===e&&(f=f.reverse()),i=0;i<f.length;i++)if(c=f[i],!n(c,s)){if(u.length>0&&t(c,ye(u))&&a++,c.line=a,o(c))return!0
u.push(c)}},s=ye(i.getClientRects())
if(!s)return u
var f=i.getNode()
return c(f),function(e,t,n,r){for(;r=Is(r,e,lo,t);)if(n(r))return}(e,r,c,f),u},Cw=l(bw,rw.Up,Hu,Vu),ww=l(bw,rw.Down,Vu,Hu),xw=function(e){return function(t){return function(e,t){return t.line>e}(e,t)}},Sw=function(e){return function(t){return function(e,t){return t.line===e}(e,t)}},Nw=Bn,Ew=Is,kw=function(e,t){return Math.abs(e.left-t)},_w=function(e,t){return Math.abs(e.right-t)},Rw=function(e,t){return e>=t.left&&e<=t.right},Tw=function(e,t){return e>=t.top&&e<=t.bottom},Aw=function(e,t){return he(e,(function(e,n){var r=Math.min(kw(e,t),_w(e,t)),o=Math.min(kw(n,t),_w(n,t))
return Rw(t,n)?n:Rw(t,e)?e:o===r&&Nw(n.node)||o<r?n:e}))},Dw=function(e,t,n,r,o){var i=Ew(r,e,lo,t,!o)
do{if(!i||n(i))return}while(i=Ew(i,e,lo,t))},Ow=function(e,t,n){var r=hw(function(e){return j(Q(e.getElementsByTagName("*")),Es)}(e)),o=j(r,l(Tw,n)),i=Aw(o,t)
if(i){var a=!Sn(i.node)&&!Ln(i.node)
if((i=Aw(function(e,t,n){void 0===n&&(n=!0)
var r=[],o=function(e,n){var o=j(hw([n]),(function(n){return!e(n,t)}))
return r=r.concat(o),0===o.length}
return r.push(t),Dw(rw.Up,e,l(o,Hu),t.node,n),Dw(rw.Down,e,l(o,Vu),t.node,n),r}(e,i,a),t))&&Es(i.node))return function(e,t){return{node:e.node,before:kw(e,t)<_w(e,t)}}(i,t)}return null},Bw=function(e,t){e.selection.setRng(t),Cd(e,e.selection.getRng())},Pw=function(e,t,n){return b.some(Tb(e,t,n))},Lw=function(e,t,n,r,o,i){var a=t===pc.Forwards,u=sf(e.getBody()),c=l(Ys,a?u.next:u.prev),s=a?r:o
if(!n.collapsed){var f=$u(n)
if(i(f))return kb(t,e,f,t===pc.Backwards,!1)}var d=Ks(t,e.getBody(),n)
if(s(d))return _b(e,d.getNode(!a))
var m=nb(a,c(d)),p=function(e){return $r(e.startContainer)}(n)
if(!m)return p?b.some(n):b.none()
if(s(m))return kb(t,e,m.getNode(!a),a,!1)
var g=c(m)
return g&&s(g)&&Gs(m,g)?kb(t,e,g.getNode(!a),a,!1):p?Pw(e,m.toRange(),!1):b.none()},Iw=function(e,t,n,r,o,i){var a=Ks(t,e.getBody(),n),u=ye(a.getClientRects()),c=t===rw.Down
if(!u)return b.none()
var s,f=(c?ww:Cw)(e.getBody(),xw(1),a),l=j(f,Sw(1)),d=u.left,m=Aw(l,d)
if(m&&i(m.node)){var p=Math.abs(d-m.left),g=Math.abs(d-m.right)
return kb(t,e,m.node,p<g,!1)}if(s=r(a)?a.getNode():o(a)?a.getNode(!0):$u(n)){var h=function(e,t,n,r){var o,i,a,u,c,s=sf(t),f=[],l=0,d=function(e){return ye(e.getClientRects())}
1===e?(o=s.next,i=Vu,a=Hu,u=gc.after(r)):(o=s.prev,i=Hu,a=Vu,u=gc.before(r))
var m=d(u)
do{if(u.isVisible()&&!a(c=d(u),m)){if(f.length>0&&i(c,ye(f))&&l++,(c=Uu(c)).position=u,c.line=l,n(c))return f
f.push(c)}}while(u=o(u))
return f}(t,e.getBody(),xw(1),s),v=Aw(j(h,Sw(1)),d)
if(v)return Pw(e,v.position.toRange(),!1)
if(v=ye(j(h,Sw(0))))return Pw(e,v.position.toRange(),!1)}return 0===l.length?Mw(e,c).filter(c?o:r).map((function(t){return Tb(e,t.toRange(),!1)})):b.none()},Mw=function(e,t){var n=e.selection.getRng(),r=e.getBody()
if(t){var o=gc.fromRangeEnd(n),i=dw(r,o)
return J(i.positions)}o=gc.fromRangeStart(n),i=lw(r,o)
return G(i.positions)},Fw=function(e,t,n){return Mw(e,t).filter(n).exists((function(t){return e.selection.setRng(t.toRange()),!0}))},Uw=Bn,zw=function(e,t,n){var r=sf(e.getBody()),o=l(Ys,1===t?r.next:r.prev)
if(n.collapsed&&function(e){return""!==jc(e)}(e)){var i=e.dom.getParent(n.startContainer,"PRE")
if(!i)return
if(!o(gc.fromRangeStart(n))){var a=function(e){var t=e.dom.create(jc(e))
return(!lt.ie||lt.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">'),t}(e)
1===t?e.$(i).after(a):e.$(i).before(a),e.selection.select(a,!0),e.selection.collapse()}}},jw=function(e,t){var n=t?pc.Forwards:pc.Backwards,r=e.selection.getRng()
return function(e,t,n){return Lw(t,e,n,Im,Mm,Uw)}(n,e,r).orThunk((function(){return zw(e,n,r),b.none()}))},Hw=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return function(e,t,n){return Iw(t,e,n,(function(e){return Im(e)||Pm(e)}),(function(e){return Mm(e)||Lm(e)}),Uw)}(n,e,r).orThunk((function(){return zw(e,n,r),b.none()}))},Vw=function(e,t){return jw(e,t).exists((function(t){return Bw(e,t),!0}))},qw=function(e,t){return Hw(e,t).exists((function(t){return Bw(e,t),!0}))},$w=function(e,t){return Fw(e,t,t?Mm:Im)},Ww=function(e){return I(["figcaption"],Et(e))},Kw=function(e){var t=document.createRange()
return t.setStartBefore(e.dom),t.setEndBefore(e.dom),t},Xw=function(e,t,n){n?en(e,t):Zt(e,t)},Yw=function(e,t,n,r){return""===t?function(e,t){var n=yt.fromTag("br")
return Xw(e,n,t),Kw(n)}(e,r):function(e,t,n,r){var o=yt.fromTag(n),i=yt.fromTag("br")
return Un(o,r),en(o,i),Xw(e,o,t),Kw(i)}(e,r,t,n)},Gw=function(e,t,n){return t?function(e,t){return dw(e,t).breakAt.isNone()}(e.dom,n):function(e,t){return lw(e,t).breakAt.isNone()}(e.dom,n)},Jw=function(e,t){var n=yt.fromDom(e.getBody()),r=gc.fromRangeStart(e.selection.getRng()),o=jc(e),i=Hc(e)
return function(e,t){var n=l(xt,t)
return pr(yt.fromDom(e.container()),Ar,n).filter(Ww)}(r,n).exists((function(){if(Gw(n,t,r)){var a=Yw(n,o,i,t)
return e.selection.setRng(a),!0}return!1}))},Qw=function(e,t){return!!e.selection.isCollapsed()&&Jw(e,t)},Zw=function(e,t){return W(function(e){return F(e,(function(e){return be({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:u},e)}))}(e),(function(e){return function(e,t){return t.keyCode===e.keyCode&&t.shiftKey===e.shiftKey&&t.altKey===e.altKey&&t.ctrlKey===e.ctrlKey&&t.metaKey===e.metaKey}(e,t)?[e]:[]}))},ex=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){return e.apply(null,t)}},tx=function(e,t){return q(Zw(e,t),(function(e){return e.action()}))},nx=function(e,t){var n=t?pc.Forwards:pc.Backwards,r=e.selection.getRng()
return Lw(e,n,r,Om,Bm,Ln).exists((function(t){return Bw(e,t),!0}))},rx=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return Iw(e,n,r,Om,Bm,Ln).exists((function(t){return Bw(e,t),!0}))},ox=function(e,t){return Fw(e,t,t?Bm:Om)},ix=function(e,t,n,r,o){var i=wu(yt.fromDom(n),"td,th,caption").map((function(e){return e.dom}))
return function(e,t,n){return V(e,(function(e,r){return e.fold((function(){return b.some(r)}),(function(e){var o=Math.sqrt(Math.abs(e.x-t)+Math.abs(e.y-n)),i=Math.sqrt(Math.abs(r.x-t)+Math.abs(r.y-n))
return b.some(i<o?r:e)}))}),b.none())}(j(function(e,t){return W(t,(function(t){var n=function(e,t){return{left:e.left-t,top:e.top-t,right:e.right+2*t,bottom:e.bottom+2*t,width:e.width+t,height:e.height+t}}(Uu(t.getBoundingClientRect()),-1)
return[{x:n.left,y:e(n),cell:t},{x:n.right,y:e(n),cell:t}]}))}(e,i),(function(e){return t(e,o)})),r,o).map((function(e){return e.cell}))},ax=l(ix,(function(e){return e.bottom}),(function(e,t){return e.y<t})),ux=l(ix,(function(e){return e.top}),(function(e,t){return e.y>t})),cx=function(e,t){return G(t.getClientRects()).bind((function(t){return ax(e,t.left,t.top)})).bind((function(e){return fw(wf(n=e).map((function(e){return lw(n,e).positions.concat(e)})).getOr([]),t)
var n}))},sx=function(e,t){return J(t.getClientRects()).bind((function(t){return ux(e,t.left,t.top)})).bind((function(e){return fw(Cf(n=e).map((function(e){return[e].concat(dw(n,e).positions)})).getOr([]),t)
var n}))},fx=function(e,t,n){var r=e(t,n)
return function(e){return e.breakType===Uy.Wrap&&0===e.positions.length}(r)||!An(n.getNode())&&function(e){return e.breakType===Uy.Br&&1===e.positions.length}(r)?!function(e,t,n){return n.breakAt.exists((function(n){return e(t,n).breakAt.isSome()}))}(e,t,r):r.breakAt.isNone()},lx=l(fx,lw),dx=l(fx,dw),mx=function(e,t,n,r){var o=e.selection.getRng(),i=t?1:-1
return!(!Ss()||!function(e,t,n){var r=gc.fromRangeStart(t)
return vf(!e,n).exists((function(e){return e.isEqual(r)}))}(t,o,n))&&(kb(i,e,n,!t,!1).each((function(t){Bw(e,t)})),!0)},px=function(e,t){var n=t.getNode(e)
return yn(n)&&"TABLE"===n.nodeName?b.some(n):b.none()},gx=function(e,t,n){var r=px(!!t,n),o=!1===t
r.fold((function(){return Bw(e,n.toRange())}),(function(r){return vf(o,e.getBody()).filter((function(e){return e.isEqual(n)})).fold((function(){return Bw(e,n.toRange())}),(function(o){return function(e,t,n,r){var o=jc(t)
o?t.undoManager.transact((function(){var r=yt.fromTag(o)
Un(r,Hc(t)),en(r,yt.fromTag("br")),e?Qt(yt.fromDom(n),r):Jt(yt.fromDom(n),r)
var i=t.dom.createRng()
i.setStart(r.dom,0),i.setEnd(r.dom,0),Bw(t,i)})):Bw(t,r.toRange())}(t,e,r,n)}))}))},hx=function(e,t,n,r){var o=e.selection.getRng(),i=gc.fromRangeStart(o),a=e.getBody()
if(!t&&lx(r,i)){var u=function(e,t,n){return cx(t,n).orThunk((function(){return G(n.getClientRects()).bind((function(n){return sw(mw(e,gc.before(t)),n.left)}))})).getOr(gc.before(t))}(a,n,i)
return gx(e,t,u),!0}if(t&&dx(r,i)){u=function(e,t,n){return sx(t,n).orThunk((function(){return G(n.getClientRects()).bind((function(n){return sw(pw(e,gc.after(t)),n.left)}))})).getOr(gc.after(t))}(a,n,i)
return gx(e,t,u),!0}return!1},vx=function(e,t,n){return b.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((function(r){return b.from(e.dom.getParent(r,"table")).map((function(o){return n(e,t,o,r)}))})).getOr(!1)},yx=function(e,t){return vx(e,t,mx)},bx=function(e,t){return vx(e,t,hx)},Cx=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){var r=nt().os
tx([{keyCode:Pl.RIGHT,action:ex(Vw,e,!0)},{keyCode:Pl.LEFT,action:ex(Vw,e,!1)},{keyCode:Pl.UP,action:ex(qw,e,!1)},{keyCode:Pl.DOWN,action:ex(qw,e,!0)},{keyCode:Pl.RIGHT,action:ex(yx,e,!0)},{keyCode:Pl.LEFT,action:ex(yx,e,!1)},{keyCode:Pl.UP,action:ex(bx,e,!1)},{keyCode:Pl.DOWN,action:ex(bx,e,!0)},{keyCode:Pl.RIGHT,action:ex(nx,e,!0)},{keyCode:Pl.LEFT,action:ex(nx,e,!1)},{keyCode:Pl.UP,action:ex(rx,e,!1)},{keyCode:Pl.DOWN,action:ex(rx,e,!0)},{keyCode:Pl.RIGHT,action:ex(EC,e,t,!0)},{keyCode:Pl.LEFT,action:ex(EC,e,t,!1)},{keyCode:Pl.RIGHT,ctrlKey:!r.isOSX(),altKey:r.isOSX(),action:ex(RC,e,t)},{keyCode:Pl.LEFT,ctrlKey:!r.isOSX(),altKey:r.isOSX(),action:ex(TC,e,t)},{keyCode:Pl.UP,action:ex(Qw,e,!1)},{keyCode:Pl.DOWN,action:ex(Qw,e,!0)}],n).each((function(e){n.preventDefault()}))}(e,t,n)}))},wx=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){tx([{keyCode:Pl.BACKSPACE,action:ex(WC,e,!1)},{keyCode:Pl.BACKSPACE,action:ex(Hb,e,!1)},{keyCode:Pl.DELETE,action:ex(Hb,e,!0)},{keyCode:Pl.BACKSPACE,action:ex(Bb,e,!1)},{keyCode:Pl.DELETE,action:ex(Bb,e,!0)},{keyCode:Pl.BACKSPACE,action:ex(BC,e,t,!1)},{keyCode:Pl.DELETE,action:ex(BC,e,t,!0)},{keyCode:Pl.BACKSPACE,action:ex(ig,e,!1)},{keyCode:Pl.DELETE,action:ex(ig,e,!0)},{keyCode:Pl.BACKSPACE,action:ex(Vb,e,!1)},{keyCode:Pl.DELETE,action:ex(Vb,e,!0)},{keyCode:Pl.BACKSPACE,action:ex(UC,e,!1)},{keyCode:Pl.DELETE,action:ex(UC,e,!0)},{keyCode:Pl.BACKSPACE,action:ex(Sb,e,!1)},{keyCode:Pl.DELETE,action:ex(Sb,e,!0)},{keyCode:Pl.BACKSPACE,action:ex(bb,e,!1)},{keyCode:Pl.DELETE,action:ex(bb,e,!0)},{keyCode:Pl.BACKSPACE,action:ex(MC,e,!1)},{keyCode:Pl.DELETE,action:ex(MC,e,!0)}],n).each((function(e){n.preventDefault()}))}(e,t,n)})),e.on("keyup",(function(t){!1===t.isDefaultPrevented()&&function(e,t){tx([{keyCode:Pl.BACKSPACE,action:ex(jb,e)},{keyCode:Pl.DELETE,action:ex(jb,e)}],t)}(e,t)}))},xx=function(e,t){var n,r=t,o=e.dom,i=e.schema.getMoveCaretBeforeOnEnterElements()
if(t){if(/^(LI|DT|DD)$/.test(t.nodeName)){var a=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}(t.firstChild)
a&&/^(UL|OL|DL)$/.test(a.nodeName)&&t.insertBefore(o.doc.createTextNode(Ur),t.firstChild)}var u=o.createRng()
if(t.normalize(),t.hasChildNodes()){for(var c=new _r(t,t);n=c.current();){if(kn(n)){u.setStart(n,0),u.setEnd(n,0)
break}if(i[n.nodeName.toLowerCase()]){u.setStartBefore(n),u.setEndBefore(n)
break}r=n,n=c.next()}n||(u.setStart(r,0),u.setEnd(r,0))}else An(t)?t.nextSibling&&o.isBlock(t.nextSibling)?(u.setStartBefore(t),u.setEndBefore(t)):(u.setStartAfter(t),u.setEndAfter(t)):(u.setStart(t,0),u.setEnd(t,0))
e.selection.setRng(u),Cd(e,u)}},Sx=function(e){return b.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},Nx=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},Ex=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},kx=function(e){var t=e.parentNode
return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},_x=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!yn(r);)r=r[n?"nextSibling":"previousSibling"]
return r===t},Rx=function(e,t,n,r,o){var i=e.dom,a=e.selection.getRng()
if(n!==e.getBody()){var u
Ex(u=n)&&Ex(u.parentNode)&&(o="LI")
var c=o?t(o):i.create("BR")
if(_x(n,r,!0)&&_x(n,r,!1))Nx(n,"LI")?i.insertAfter(c,kx(n)):i.replace(c,n)
else if(_x(n,r,!0))Nx(n,"LI")?(i.insertAfter(c,kx(n)),c.appendChild(i.doc.createTextNode(" ")),c.appendChild(n)):n.parentNode.insertBefore(c,n)
else if(_x(n,r,!1))i.insertAfter(c,kx(n))
else{n=kx(n)
var s=a.cloneRange()
s.setStartAfter(r),s.setEndAfter(n)
var f=s.extractContents()
"LI"===o&&function(e,t){return e.firstChild&&e.firstChild.nodeName===t}(f,"LI")?(c=f.firstChild,i.insertAfter(f,n)):(i.insertAfter(f,n),i.insertAfter(c,n))}i.remove(r),xx(e,c)}},Tx=function(e,t){return t&&"A"===t.nodeName&&e.isEmpty(t)},Ax=function(e){e.innerHTML='<br data-mce-bogus="1">'},Dx=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},Ox=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},Bx=function(e,t,n){return!1===kn(t)?n:e?1===n&&t.data.charAt(n-1)===zr?0:n:n===t.data.length-1&&t.data.charAt(n)===zr?t.data.length:n},Px=function(e,t){var n,r,o=e.getRoot()
for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode
return n!==o?r:o},Lx=function(e,t){var n=jc(e)
n&&n.toLowerCase()===t.tagName.toLowerCase()&&function(e,t,n){var r=e.dom
b.from(n.style).map(r.parseStyle).each((function(e){var n=Wn(yt.fromDom(t)),o=be(be({},n),e)
r.setStyles(t,o)}))
var o=b.from(n.class).map((function(e){return e.split(/\s+/)})),i=b.from(t.className).map((function(e){return j(e.split(/\s+/),(function(e){return""!==e}))}))
Mu(o,i,(function(e,n){var o=j(n,(function(t){return!I(e,t)})),i=Ce(e,o)
r.setAttrib(t,"class",i.join(" "))}))
var a=["style","class"],u=ue(n,(function(e,t){return!I(a,t)}))
r.setAttribs(t,u)}(e,t,Hc(e))},Ix=function(e,t){var n,r,o,i,a,u,c,s,f,l,d=e.dom,m=e.schema,p=m.getNonEmptyElements(),g=e.selection.getRng(),h=function(t){var n,o,a,u=r,c=m.getTextInlineElements()
if(a=n=t||"TABLE"===s||"HR"===s?d.create(t||f):i.cloneNode(!1),!1===function(e){return e.getParam("keep_styles",!0)}(e))d.setAttrib(n,"style",null),d.setAttrib(n,"class",null)
else do{if(c[u.nodeName]){if(Sf(u)||Pf(u))continue
o=u.cloneNode(!1),d.setAttrib(o,"id",""),n.hasChildNodes()?(o.appendChild(n.firstChild),n.appendChild(o)):(a=o,n.appendChild(o))}}while((u=u.parentNode)&&u!==w)
return Lx(e,n),Ax(a),n},v=function(e){var t,n,a=Bx(e,r,o)
if(kn(r)&&(e?a>0:a<r.nodeValue.length))return!1
if(r.parentNode===i&&l&&!e)return!0
if(e&&yn(r)&&r===i.firstChild)return!0
if(Dx(r,"TABLE")||Dx(r,"HR"))return l&&!e||!l&&e
var u=new _r(r,i)
for(kn(r)&&(e&&0===a?u.prev():e||a!==r.nodeValue.length||u.next());t=u.current();){if(yn(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),p[n]&&"br"!==n))return!1}else if(kn(t)&&!po(t.nodeValue))return!1
e?u.prev():u.next()}return!0},y=function(){a=/^(H[1-6]|PRE|FIGURE)$/.test(s)&&"HGROUP"!==x?h(f):h(),function(e){return e.getParam("end_container_on_empty_block",!1)}(e)&&Ox(d,c)&&d.isEmpty(i)?a=d.split(c,i):d.insertAfter(a,i),xx(e,a)}
Xl(d,g).each((function(e){g.setStart(e.startContainer,e.startOffset),g.setEnd(e.endContainer,e.endOffset)})),r=g.startContainer,o=g.startOffset,f=jc(e)
var b=!(!t||!t.shiftKey),C=!(!t||!t.ctrlKey)
yn(r)&&r.hasChildNodes()&&(l=o>r.childNodes.length-1,r=r.childNodes[Math.min(o,r.childNodes.length-1)]||r,o=l&&kn(r)?r.nodeValue.length:0)
var w=Px(d,r)
if(w){(f&&!b||!f&&b)&&(r=function(e,t,n,r,o){var i,a,u,c,s,f,l=t||"P",d=e.dom,m=Px(d,r)
if(!(a=d.getParent(r,d.isBlock))||!Ox(d,a)){if(f=(a=a||m)===e.getBody()||function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}(a)?a.nodeName.toLowerCase():a.parentNode.nodeName.toLowerCase(),!a.hasChildNodes())return i=d.create(l),Lx(e,i),a.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i
for(c=r;c.parentNode!==a;)c=c.parentNode
for(;c&&!d.isBlock(c);)u=c,c=c.previousSibling
if(u&&e.schema.isValidChild(f,l.toLowerCase())){for(i=d.create(l),Lx(e,i),u.parentNode.insertBefore(i,u),c=u;c&&!d.isBlock(c);)s=c.nextSibling,i.appendChild(c),c=s
n.setStart(r,o),n.setEnd(r,o)}}return r}(e,f,g,r,o)),i=d.getParent(r,d.isBlock),c=i?d.getParent(i.parentNode,d.isBlock):null,s=i?i.nodeName.toUpperCase():""
var x=c?c.nodeName.toUpperCase():""
"LI"!==x||C||(i=c,c=c.parentNode,s=x),/^(LI|DT|DD)$/.test(s)&&d.isEmpty(i)?Rx(e,h,c,i,f):f&&i===e.getBody()||(f=f||"P",$r(i)?(a=eo(i),d.isEmpty(i)&&Ax(i),Lx(e,a),xx(e,a)):v()?y():v(!0)?(a=i.parentNode.insertBefore(h(),i),xx(e,Dx(i,"HR")?a:i)):((n=function(e){var t=e.cloneRange()
return t.setStart(e.startContainer,Bx(!0,e.startContainer,e.startOffset)),t.setEnd(e.endContainer,Bx(!1,e.endContainer,e.endOffset)),t}(g).cloneRange()).setEndAfter(i),function(e){U(Cu(yt.fromDom(e),Tt),(function(e){var t=e.dom
t.nodeValue=Hr(t.nodeValue)}))}(u=n.extractContents()),function(e){do{kn(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild}while(e)}(u),a=u.firstChild,d.insertAfter(u,i),function(e,t,n){var r,o=n,i=[]
if(o){for(;o=o.firstChild;){if(e.isBlock(o))return
yn(o)&&!t[o.nodeName.toLowerCase()]&&i.push(o)}for(r=i.length;r--;)(!(o=i[r]).hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue||Tx(e,o))&&e.remove(o)}}(d,p,a),function(e,t){t.normalize()
var n=t.lastChild
n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")}(d,i),d.isEmpty(i)&&Ax(i),a.normalize(),d.isEmpty(a)?(d.remove(a),y()):(Lx(e,a),xx(e,a))),d.setAttrib(a,"id",""),e.fire("NewBlock",{newBlock:a}))}},Mx=function(e,t,n){var r=e.create("span",{},"&nbsp;")
n.parentNode.insertBefore(r,n),t.scrollIntoView(r),e.remove(r)},Fx=function(e,t,n,r){var o=e.createRng()
r?(o.setStartBefore(n),o.setEndBefore(n)):(o.setStartAfter(n),o.setEndAfter(n)),t.setRng(o)},Ux=function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng()
Xl(i,a).each((function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)}))
var u=a.startOffset,c=a.startContainer
if(1===c.nodeType&&c.hasChildNodes()){var s=u>c.childNodes.length-1
c=c.childNodes[Math.min(u,c.childNodes.length-1)]||c,u=s&&3===c.nodeType?c.nodeValue.length:0}var f=i.getParent(c,i.isBlock),l=f?i.getParent(f.parentNode,i.isBlock):null,d=l?l.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey)
"LI"!==d||m||(f=l),c&&3===c.nodeType&&u>=c.nodeValue.length&&(function(e,t,n){for(var r,o=new _r(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||r.length>0)return!0}(e.schema,c,f)||(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0)),n=i.create("br"),vc(i,a,n),Mx(i,o,n),Fx(i,o,n,r),e.undoManager.add()},zx=function(e,t){var n=yt.fromTag("br")
Jt(yt.fromDom(t),n),e.undoManager.add()},jx=function(e,t){Hx(e.getBody(),t)||Qt(yt.fromDom(t),yt.fromTag("br"))
var n=yt.fromTag("br")
Qt(yt.fromDom(t),n),Mx(e.dom,e.selection,n.dom),Fx(e.dom,e.selection,n.dom,!1),e.undoManager.add()},Hx=function(e,t){return n=gc.after(t),!!An(n.getNode())||yf(e,gc.after(t)).map((function(e){return An(e.getNode())})).getOr(!1)
var n},Vx=function(e){return e&&"A"===e.nodeName&&"href"in e},qx=function(e){return e.fold(p,Vx,Vx,p)},$x=function(e,t){t.fold(u,l(zx,e),l(jx,e),u)},Wx=function(e,t){var n=function(e){var t=l(Zy,e),n=gc.fromRangeStart(e.selection.getRng())
return fC(t,e.getBody(),n).filter(qx)}(e)
n.isSome()?n.each(l($x,e)):Ux(e,t)},Kx=function(e,t){return Sx(e).filter((function(e){return t.length>0&&Ct(yt.fromDom(e),t)})).isSome()},Xx=sr([{br:[]},{block:[]},{none:[]}]),Yx=function(e,t){return function(e){return Kx(e,function(e){return e.getParam("no_newline_selector","")}(e))}(e)},Gx=function(e){return function(t,n){return""===jc(t)===e}},Jx=function(e){return function(t,n){return function(e){return Sx(e).filter((function(e){return Lr(yt.fromDom(e))})).isSome()}(t)===e}},Qx=function(e,t){return function(n,r){return function(e){return Sx(e).fold(s(""),(function(e){return e.nodeName.toUpperCase()}))}(n)===e.toUpperCase()===t}},Zx=function(e){return Qx("pre",e)},eS=function(e){return function(t,n){return function(e){return e.getParam("br_in_pre",!0)}(t)===e}},tS=function(e,t){return function(e){return Kx(e,function(e){return e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption")}(e))}(e)},nS=function(e,t){return t},rS=function(e){var t=jc(e),n=function(e,t){var n,r,o=e.getRoot()
for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode
return n!==o?r:o}(e.dom,e.selection.getStart())
return n&&e.schema.isValidChild(n.nodeName,t||"P")},oS=function(e,t){return function(n,r){return V(e,(function(e,t){return e&&t(n,r)}),!0)?b.some(t):b.none()}},iS=function(e,t){(function(e,t){return eC([oS([Yx],Xx.none()),oS([Qx("summary",!0)],Xx.br()),oS([Zx(!0),eS(!1),nS],Xx.br()),oS([Zx(!0),eS(!1)],Xx.block()),oS([Zx(!0),eS(!0),nS],Xx.block()),oS([Zx(!0),eS(!0)],Xx.br()),oS([Jx(!0),nS],Xx.br()),oS([Jx(!0)],Xx.block()),oS([Gx(!0),nS,rS],Xx.block()),oS([Gx(!0)],Xx.br()),oS([tS],Xx.br()),oS([Gx(!1),nS],Xx.br()),oS([rS],Xx.block())],[e,!(!t||!t.shiftKey)]).getOr(Xx.none())})(e,t).fold((function(){Wx(e,t)}),(function(){Ix(e,t)}),u)},aS=function(e){e.on("keydown",(function(t){t.keyCode===Pl.ENTER&&function(e,t){var n
t.isDefaultPrevented()||(t.preventDefault(),(n=e.undoManager).typing&&(n.typing=!1,n.add()),e.undoManager.transact((function(){!1===e.selection.isCollapsed()&&e.execCommand("Delete"),iS(e,t)})))}(e,t)}))},uS=function(e){e.on("keydown",(function(t){!1===t.isDefaultPrevented()&&function(e,t){tx([{keyCode:Pl.END,action:ex($w,e,!0)},{keyCode:Pl.HOME,action:ex($w,e,!1)},{keyCode:Pl.END,action:ex(ox,e,!0)},{keyCode:Pl.HOME,action:ex(ox,e,!1)}],t).each((function(e){t.preventDefault()}))}(e,t)}))},cS=nt().browser,sS=function(e){(function(e){var t=lu((function(){e.composing||vp(e)}),0)
cS.isIE()&&(e.on("keypress",(function(e){t.throttle()})),e.on("remove",(function(e){t.cancel()})))})(e),e.on("input",(function(t){!1===t.isComposing&&vp(e)}))},fS=function(e,t){var n=t.container(),r=t.offset()
return kn(n)?(n.insertData(r,e),b.some(mc(n,r+e.length))):Xs(t).map((function(n){var r=yt.fromText(e)
return t.isAtEnd()?Qt(n,r):Jt(n,r),mc(r.dom,e.length)}))},lS=l(fS,Ur),dS=l(fS," "),mS=function(e,t){return function(n){return function(e,t){return!cp(t)&&(sp(e,t)||ap(e,t)||up(e,t))}(e,n)?lS(t):dS(t)}},pS=function(e){var t=gc.fromRangeStart(e.selection.getRng()),n=yt.fromDom(e.getBody())
if(e.selection.isCollapsed()){var r=l(Zy,e),o=gc.fromRangeStart(e.selection.getRng())
return fC(r,e.getBody(),o).bind(function(e){return function(t){return t.fold((function(t){return bf(e.dom,gc.before(t))}),(function(e){return Cf(e)}),(function(e){return wf(e)}),(function(t){return yf(e.dom,gc.after(t))}))}}(n)).bind(mS(n,t)).exists(function(e){return function(t){return e.selection.setRng(t.toRange()),e.nodeChanged(),!0}}(e))}return!1},gS=function(e){e.on("keydown",(function(t){!1===t.isDefaultPrevented()&&function(e,t){tx([{keyCode:Pl.SPACEBAR,action:ex(pS,e)}],t).each((function(e){t.preventDefault()}))}(e,t)}))},hS=function(e){var t=_C(e)
return function(e){e.on("keyup compositionstart",l(nw,e))}(e),Cx(e,t),wx(e,t),aS(e),gS(e),sS(e),uS(e),t},vS=function(){function e(e){var t
this.lastPath=[],this.editor=e
var n=this
"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(function(n){var r=e.selection.getRng(),o={startContainer:r.startContainer,startOffset:r.startOffset,endContainer:r.endContainer,endOffset:r.endOffset}
"nodechange"!==n.type&&Ul(o,t)||e.fire("SelectionChange"),t=o})),e.on("contextmenu",(function(){e.fire("SelectionChange")})),e.on("SelectionChange",(function(){var t=e.selection.getStart(!0)
!t||!lt.range&&e.selection.isCollapsed()||Cl(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(function(t){!t.isDefaultPrevented()&&Cl(e)&&("IMG"===e.selection.getNode().nodeName?xr.setEditorTimeout(e,(function(){e.nodeChanged()})):e.nodeChanged())}))}return e.prototype.nodeChanged=function(e){var t,n,r,o=this.editor.selection
this.editor.initialized&&o&&!this.editor.getParam("disable_nodechange")&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),(t=o.getStart(!0)||r).ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(t,r)||(t=r),n=[],this.editor.dom.getParent(t,(function(e){if(e===r)return!0
n.push(e)})),(e=e||{}).element=t,e.parents=n,this.editor.fire("NodeChange",e))},e.prototype.isSameElementPath=function(e){var t,n=this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)
if(n.length===this.lastPath.length){for(t=n.length;t>=0&&n[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=n,!0}return this.lastPath=n,!1},e}(),yS=function(e){(function(e){e.on("click",(function(t){e.dom.getParent(t.target,"details")&&t.preventDefault()}))})(e),function(e){e.parser.addNodeFilter("details",(function(e){U(e,(function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),e.serializer.addNodeFilter("details",(function(e){U(e,(function(e){var t=e.attr("data-mce-open")
e.attr("open",S(t)?t:null),e.attr("data-mce-open",null)}))}))}(e)},bS=function(e){return yn(e)&&Br(yt.fromDom(e))},CS=function(e){e.on("click",(function(t){t.detail>=3&&function(e){var t=e.selection.getRng(),n=mc.fromRangeStart(t),r=mc.fromRangeEnd(t)
if(mc.isElementPosition(n)){var o=n.container()
bS(o)&&Cf(o).each((function(e){return t.setStart(e.container(),e.offset())}))}mc.isElementPosition(r)&&(o=n.container(),bS(o)&&wf(o).each((function(e){return t.setEnd(e.container(),e.offset())})))
e.selection.setRng(ug(t))}(e)}))},wS=function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView
return{top:t.top+o.pageYOffset-r.clientTop,left:t.left+o.pageXOffset-r.clientLeft}},xS=function(e,t){return n=function(e){return e.inline?wS(e.getBody()):{left:0,top:0}}(e),r=function(e){var t=e.getBody()
return e.inline?{left:t.scrollLeft,top:t.scrollTop}:{left:0,top:0}}(e),{pageX:(o=function(e,t){if(t.target.ownerDocument!==e.getDoc()){var n=wS(e.getContentAreaContainer()),r=function(e){var t=e.getBody(),n=e.getDoc().documentElement,r={left:t.scrollLeft,top:t.scrollTop},o={left:t.scrollLeft||n.scrollLeft,top:t.scrollTop||n.scrollTop}
return e.inline?r:o}(e)
return{left:t.pageX-n.left+r.left,top:t.pageY-n.top+r.top}}return{left:t.pageX,top:t.pageY}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top}
var n,r,o},SS=Bn,NS=On,ES=function(e,t,n,r){var o=e.dom,i=t.cloneNode(!0)
o.setStyles(i,{width:n,height:r}),o.setAttrib(i,"data-mce-selected",null)
var a=o.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
return o.setStyles(a,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),o.setStyles(i,{margin:0,boxSizing:"border-box"}),a.appendChild(i),a},kS=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},_S=function(e,t){return function(n){if(function(e){return 0===e.button}(n)){var r=q(t.dom.getParents(n.target),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0
return!1}}(SS,NS)).getOr(null)
if(u=t.getBody(),SS(c=r)&&c!==u){var o=t.dom.getPos(r),i=t.getBody(),a=t.getDoc().documentElement
e.set({element:r,dragging:!1,screenX:n.screenX,screenY:n.screenY,maxX:(t.inline?i.scrollWidth:a.offsetWidth)-2,maxY:(t.inline?i.scrollHeight:a.offsetHeight)-2,relX:n.pageX-o.x,relY:n.pageY-o.y,width:r.offsetWidth,height:r.offsetHeight,ghost:ES(t,r,r.offsetWidth,r.offsetHeight)})}}var u,c}},RS=function(e,t){return function(n){e.on((function(e){if(e.dragging&&function(e,t,n){return t!==n&&!e.dom.isChildOf(t,n)&&!SS(t)}(t,(a=t.selection,3===(u=a.getSel().getRangeAt(0).startContainer).nodeType?u.parentNode:u),e.element)){var r=(o=e.element,(i=o.cloneNode(!0)).removeAttribute("data-mce-selected"),i)
t.fire("drop",{clientX:n.clientX,clientY:n.clientY}).isDefaultPrevented()||t.undoManager.transact((function(){kS(e.element),t.insertContent(t.dom.getOuterHTML(r)),t._selectionOverrides.hideFakeCaret()}))}var o,i,a,u})),TS(e)}},TS=function(e){e.on((function(e){kS(e.ghost)})),e.clear()},AS=function(e){var t,n=(t=ou(b.none()),{clear:function(){return t.set(b.none())},set:function(e){return t.set(b.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}}),r=Za.DOM,o=document,i=_S(n,e),a=function(e,t){var n=xr.throttle((function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0)
return function(r){return e.on((function(e){var o,i,a=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY))
if(!e.dragging&&a>10){if(t.fire("dragstart",{target:e.element}).isDefaultPrevented())return
e.dragging=!0,t.focus()}if(e.dragging){var u=function(e,t){return{pageX:t.pageX-e.relX,pageY:t.pageY+5}}(e,xS(t,r))
o=e.ghost,i=t.getBody(),o.parentNode!==i&&i.appendChild(o),function(e,t,n,r,o,i){var a=0,u=0
e.style.left=t.pageX+"px",e.style.top=t.pageY+"px",t.pageX+n>o&&(a=t.pageX+n-o),t.pageY+r>i&&(u=t.pageY+r-i),e.style.width=n-a+"px",e.style.height=r-u+"px"}(e.ghost,u,e.width,e.height,e.maxX,e.maxY),n(r.clientX,r.clientY)}}))}}(n,e),u=RS(n,e),c=function(e,t){return function(){e.on((function(e){e.dragging&&t.fire("dragend")})),TS(e)}}(n,e)
e.on("mousedown",i),e.on("mousemove",a),e.on("mouseup",u),r.bind(o,"mousemove",a),r.bind(o,"mouseup",c),e.on("remove",(function(){r.unbind(o,"mousemove",a),r.unbind(o,"mouseup",c)}))},DS=function(e){AS(e),function(e){e.on("drop",(function(t){var n=void 0!==t.clientX?e.getDoc().elementFromPoint(t.clientX,t.clientY):null;(SS(n)||"false"===e.dom.getContentEditableParent(n))&&t.preventDefault()}))}(e),function(e){return e.getParam("block_unsupported_drop",!0,"boolean")}(e)&&function(e){var t=function(t){if(!t.defaultPrevented){var n=t.dataTransfer
n&&(I(n.types,"Files")||n.files.length>0)&&(t.preventDefault(),"drop"===t.type&&Ey(e,"Dropped file type is not supported"))}},n=function(n){Vd(e,n.target)&&t(n)},r=function(){var r=Za.DOM,o=e.dom,i=document,a=e.inline?e.getBody():e.getDoc(),u=["drop","dragover"]
U(u,(function(e){r.bind(i,e,n),o.bind(a,e,t)})),e.on("remove",(function(){U(u,(function(e){r.unbind(i,e,n),o.unbind(a,e,t)}))}))}
e.on("init",(function(){xr.setEditorTimeout(e,r,0)}))}(e)},OS=On,BS=Bn,PS=function(e,t){return Ol(e.getBody(),t)},LS=function(e){var t,n=e.selection,r=e.dom,o=r.isBlock,i=e.getBody(),a=xs(e,i,o,(function(){return Gd(e)})),u="sel-"+r.uniqueId(),c="data-mce-selected",s=function(e){return BS(e)||Ln(e)},f=function(e){e&&n.setRng(e)},l=n.getRng,d=function(t,r,o,i){return void 0===i&&(i=!0),e.fire("ShowCaret",{target:r,direction:t,before:o}).isDefaultPrevented()?null:(i&&n.scrollIntoView(r,-1===t),a.show(o,r))},m=function(e){return Kr(e)||Qr(e)||Zr(e)},p=function(e){return m(e.startContainer)||m(e.endContainer)},g=function(t){var n=e.schema.getShortEndedElements(),o=r.createRng(),i=t.startContainer,a=t.startOffset,u=t.endContainer,c=t.endOffset
return fe(n,i.nodeName.toLowerCase())?0===a?o.setStartBefore(i):o.setStartAfter(i):o.setStart(i,a),fe(n,u.nodeName.toLowerCase())?0===c?o.setEndBefore(u):o.setEndAfter(u):o.setEnd(u,c),o},h=function(o){var i=o.cloneNode(!0),a=e.fire("ObjectSelected",{target:o,targetClone:i})
if(a.isDefaultPrevented())return null
var s=function(t,o,i){var a=e.$,c=hr(yt.fromDom(e.getBody()),"#"+u).fold((function(){return a([])}),(function(e){return a([e.dom])}))
0===c.length&&(c=a('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",u)).appendTo(e.getBody())
var s=r.createRng()
o===i&&lt.ie?(c.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(o),s.setStartAfter(c[0].firstChild.firstChild),s.setEndAfter(o)):(c.empty().append(Ur).append(o).append(Ur),s.setStart(c[0].firstChild,1),s.setEnd(c[0].lastChild,0)),c.css({top:r.getPos(t,e.getBody()).y}),c[0].focus()
var f=n.getSel()
return f.removeAllRanges(),f.addRange(s),s}(o,a.targetClone,i),f=yt.fromDom(o)
return U(wu(yt.fromDom(e.getBody()),"*[data-mce-selected]"),(function(e){xt(f,e)||jn(e,c)})),r.getAttrib(o,c)||o.setAttribute(c,"1"),t=o,b(),s},v=function(e,t){if(!e)return null
if(e.collapsed){if(!p(e)){var n=t?1:-1,o=Ks(n,i,e),a=o.getNode(!t)
if(Es(a))return d(n,a,!!t&&!o.isAtEnd(),!1)
var u=o.getNode(t)
if(Es(u))return d(n,u,!t&&!o.isAtEnd(),!1)}return null}var c=e.startContainer,f=e.startOffset,l=e.endOffset
if(3===c.nodeType&&0===f&&BS(c.parentNode)&&(c=c.parentNode,f=r.nodeIndex(c),c=c.parentNode),1!==c.nodeType)return null
if(l===f+1&&c===e.endContainer){var m=c.childNodes[f]
if(s(m))return h(m)}return null},y=function(){t&&t.removeAttribute(c),hr(yt.fromDom(e.getBody()),"#"+u).each(rn),t=null},b=function(){a.hide()}
return lt.ceFalse&&function(){e.on("mouseup",(function(t){var n=l()
n.collapsed&&yy(e,t.clientX,t.clientY)&&Rb(e,n,!1).each(f)})),e.on("click",(function(t){var o=PS(e,t.target)
o&&(BS(o)&&(t.preventDefault(),e.focus()),OS(o)&&r.isChildOf(o,n.getNode())&&y())})),e.on("blur NewBlock",y),e.on("ResizeWindow FullscreenStateChanged",a.reposition)
var c=function(e){var t=sf(e)
if(!e.firstChild)return!1
var n,r=gc.before(e.firstChild),o=t.next(r)
return o&&!(Im(n=o)||Mm(n)||Om(n)||Bm(n))},m=function(t,n){var i,a,u=r.getParent(t,o),s=r.getParent(n,o)
return!(!u||t===s||!r.isChildOf(u,s)||!1!==BS(PS(e,u)))||u&&(i=u,a=s,!(r.getParent(i,o)===r.getParent(a,o)))&&c(u)}
e.on("tap",(function(t){var n=t.target,r=PS(e,n)
BS(r)?(t.preventDefault(),_b(e,r).each(v)):s(n)&&_b(e,n).each(v)}),!0),e.on("mousedown",(function(t){var o=t.target
if((o===i||"HTML"===o.nodeName||r.isChildOf(o,i))&&!1!==yy(e,t.clientX,t.clientY)){var a=PS(e,o)
if(a)BS(a)?(t.preventDefault(),_b(e,a).each(v)):(y(),OS(a)&&t.shiftKey||Bl(t.clientX,t.clientY,n.getRng())||(b(),n.placeCaretAt(t.clientX,t.clientY)))
else if(s(o))_b(e,o).each(v)
else if(!1===Es(o)){y(),b()
var u=Ow(i,t.clientX,t.clientY)
if(u&&!m(o,u.node)){t.preventDefault()
var c=d(1,u.node,u.before,!1)
e.getBody().focus(),f(c)}}}})),e.on("keypress",(function(e){Pl.modifierPressed(e)||BS(n.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(function(e){var n=e.range
if(t){if(!t.parentNode)return void(t=null);(n=n.cloneRange()).selectNode(t),e.range=n}})),e.on("SetSelectionRange",(function(e){e.range=g(e.range)
var t=v(e.range,e.forward)
t&&(e.range=t)})),e.on("AfterSetSelectionRange",(function(e){var t,n=e.range,o=n.startContainer.parentNode
p(n)||"mcepastebin"===o.id||b(),t=o,r.hasClass(t,"mce-offscreen-selection")||y()})),e.on("copy",(function(e){var t,n=e.clipboardData
if(!e.isDefaultPrevented()&&e.clipboardData&&!lt.ie){var o=(t=r.get(u))?t.getElementsByTagName("*")[0]:t
o&&(e.preventDefault(),n.clearData(),n.setData("text/html",o.outerHTML),n.setData("text/plain",o.outerText||o.innerText))}})),DS(e),function(e){var t=lu((function(){if(!e.removed&&e.getBody().contains(document.activeElement)){var t=e.selection.getRng()
if(t.collapsed){var n=Tb(e,t,!1)
e.selection.setRng(n)}}}),0)
e.on("focus",(function(){t.throttle()})),e.on("blur",(function(){t.cancel()}))}(e),function(e){e.on("init",(function(){e.on("focusin",(function(t){var n=t.target
if(Ln(n)){var r=Ol(e.getBody(),n),o=Bn(r)?r:n
e.selection.getNode()!==o&&_b(e,o).each((function(t){return e.selection.setRng(t)}))}}))}))}(e)}(),{showCaret:d,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(eo(e),f(l()),n.scrollIntoView(e))},hideFakeCaret:b,destroy:function(){a.destroy(),t=null}}},IS=function(e){var t,n,r,o=ht.each,i=Pl.BACKSPACE,a=Pl.DELETE,u=e.dom,c=e.selection,s=e.parser,f=lt.gecko,l=lt.ie,d=lt.webkit,m="data:text/mce-internal,",p=l?"Text":"URL",g=function(t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}},h=function(e){return e.isDefaultPrevented()},v=function(){e.shortcuts.add("meta+a",null,"SelectAll")},y=function(){e.on("keydown",(function(e){if(!h(e)&&e.keyCode===i&&c.isCollapsed()&&0===c.getRng().startOffset){var t=c.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))},b=function(){e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(function(t){var n
if("HTML"===t.target.nodeName){if(lt.ie>11)return void e.getBody().focus()
n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged()}})))}
return e.on("keydown",(function(t){var n,r
if(!h(t)&&t.keyCode===Pl.BACKSPACE){var o=(n=c.getRng()).startContainer,i=n.startOffset,a=u.getRoot()
if(r=o,n.collapsed&&0===i){for(;r&&r.parentNode&&r.parentNode.firstChild===r&&r.parentNode!==a;)r=r.parentNode
"BLOCKQUOTE"===r.tagName&&(e.formatter.toggle("blockquote",null,r),(n=u.createRng()).setStart(o,0),n.setEnd(o,0),c.setRng(n))}}})),t=function(e){var t=u.create("body"),n=e.cloneContents()
return t.appendChild(n),c.serializer.serialize(t,{format:"html"})},e.on("keydown",(function(n){var r,o,c=n.keyCode
if(!h(n)&&(c===a||c===i)){if(r=e.selection.isCollapsed(),o=e.getBody(),r&&!u.isEmpty(o))return
if(!r&&!function(n){var r=t(n),o=u.createRng()
return o.selectNode(e.getBody()),r===t(o)}(e.selection.getRng()))return
n.preventDefault(),e.setContent(""),o.firstChild&&u.isBlock(o.firstChild)?e.selection.setCursorLocation(o.firstChild,0):e.selection.setCursorLocation(o,0),e.nodeChanged()}})),lt.windowsPhone||e.on("keyup focusin mouseup",(function(e){Pl.modifierPressed(e)||c.normalize()}),!0),d&&(e.inline||u.bind(e.getDoc(),"mousedown mouseup",(function(t){var n
if(t.target===e.getDoc().documentElement)if(n=c.getRng(),e.getBody().focus(),"mousedown"===t.type){if(Kr(n.startContainer))return
c.placeCaretAt(t.clientX,t.clientY)}else c.setRng(n)})),e.on("click",(function(t){var n=t.target;/^(IMG|HR)$/.test(n.nodeName)&&"false"!==u.getContentEditableParent(n)&&(t.preventDefault(),e.selection.select(n),e.nodeChanged()),"A"===n.nodeName&&u.hasClass(n,"mce-item-anchor")&&(t.preventDefault(),c.select(n))})),jc(e)&&e.on("init",(function(){g("DefaultParagraphSeparator",jc(e))})),e.on("init",(function(){e.dom.bind(e.getBody(),"submit",(function(e){e.preventDefault()}))})),y(),s.addNodeFilter("br",(function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),lt.iOS?(e.inline||e.on("keydown",(function(){document.activeElement===document.body&&e.getWin().focus()})),b(),e.on("click",(function(e){var t=e.target
do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):v()),lt.ie>=11&&(b(),y()),lt.ie&&(v(),g("AutoUrlDetect",!1),e.on("dragstart",(function(t){(function(t){var n,r
t.dataTransfer&&(e.selection.isCollapsed()&&"IMG"===t.target.tagName&&c.select(t.target),(n=e.selection.getContent()).length>0&&(r=m+escape(e.id)+","+escape(n),t.dataTransfer.setData(p,r)))})(t)})),e.on("drop",(function(t){if(!h(t)){var n=function(e){var t
return e.dataTransfer&&(t=e.dataTransfer.getData(p))&&t.indexOf(m)>=0?(t=t.substr(m.length).split(","),{id:unescape(t[0]),html:unescape(t[1])}):null}(t)
if(n&&n.id!==e.id){t.preventDefault()
var r=Fl(t.x,t.y,e.getDoc())
c.setRng(r),o=n.html,i=!0,e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",!1,{content:o,internal:i}):e.execCommand("mceInsertContent",!1,o)}}var o,i}))),f&&(e.on("keydown",(function(t){if(!h(t)&&t.keyCode===i){if(!e.getBody().getElementsByTagName("hr").length)return
if(c.isCollapsed()&&0===c.getRng().startOffset){var n=c.getNode(),r=n.previousSibling
if("HR"===n.nodeName)return u.remove(n),void t.preventDefault()
r&&r.nodeName&&"hr"===r.nodeName.toLowerCase()&&(u.remove(r),t.preventDefault())}}})),Range.prototype.getClientRects||e.on("mousedown",(function(t){if(!h(t)&&"HTML"===t.target.nodeName){var n=e.getBody()
n.blur(),xr.setEditorTimeout(e,(function(){n.focus()}))}})),n=function(){var t=u.getAttribs(c.getStart().cloneNode(!1))
return function(){var n=c.getStart()
n!==e.getBody()&&(u.setAttrib(n,"style",null),o(t,(function(e){n.setAttributeNode(e.cloneNode(!0))})))}},r=function(){return!c.isCollapsed()&&u.getParent(c.getStart(),u.isBlock)!==u.getParent(c.getEnd(),u.isBlock)},e.on("keypress",(function(t){var o
if(!h(t)&&(8===t.keyCode||46===t.keyCode)&&r())return o=n(),e.getDoc().execCommand("delete",!1,null),o(),t.preventDefault(),!1})),u.bind(e.getDoc(),"cut",(function(t){var o
!h(t)&&r()&&(o=n(),xr.setEditorTimeout(e,(function(){o()})))})),function(e){return e.getParam("readonly")}(e)||e.on("BeforeExecCommand mousedown",(function(){g("StyleWithCSS",!1),g("enableInlineTableEditing",!1),es(e)||g("enableObjectResizing",!1)})),e.on("SetContent ExecCommand",(function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(u.select("a"),(function(e){var t=e.parentNode,n=u.getRoot()
if(t.lastChild===e){for(;t&&!u.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return
t=t.parentNode}u.add(t,"br",{"data-mce-bogus":1})}}))})),e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),lt.mac&&e.on("keydown",(function(t){!Pl.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))})),y()),{refreshContentEditable:function(){},isHidden:function(){if(!f||e.removed)return!1
var t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}}},MS=Za.DOM,FS=function(e){return e.inline?e.getElement().nodeName.toLowerCase():void 0},US=function(e){return ue(e,(function(e){return!1===R(e)}))},zS=function(e){var t=e.settings,n=e.editorUpload.blobCache
return US({allow_conditional_comments:t.allow_conditional_comments,allow_html_data_urls:t.allow_html_data_urls,allow_html_in_named_anchor:t.allow_html_in_named_anchor,allow_script_urls:t.allow_script_urls,allow_unsafe_link_target:t.allow_unsafe_link_target,convert_fonts_to_spans:t.convert_fonts_to_spans,fix_list_elements:t.fix_list_elements,font_size_legacy_values:t.font_size_legacy_values,forced_root_block:t.forced_root_block,forced_root_block_attrs:t.forced_root_block_attrs,padd_empty_with_br:t.padd_empty_with_br,preserve_cdata:t.preserve_cdata,remove_trailing_brs:t.remove_trailing_brs,inline_styles:t.inline_styles,root_name:FS(e),validate:!0,blob_cache:n,images_dataimg_filter:t.images_dataimg_filter})},jS=function(e){var t=e.dom.getRoot()
e.inline||Cl(e)&&e.selection.getStart(!0)!==t||Cf(t).each((function(t){var n=t.getNode(),r=Sn(n)?Cf(n).getOr(t):t
lt.browser.isIE()?function(e,t){var n=yt.fromDom(e.getBody()),r=(Bd(e)?b.from(t):b.none()).map(Pd).filter(Od(n))
e.bookmark=r.isSome()?r:e.bookmark}(e,r.toRange()):e.selection.setRng(r.toRange())}))},HS=function(e){e.bindPendingEventDelegates(),e.initialized=!0,function(e){e.fire("Init")}(e),e.focus(!0),jS(e),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),function(e){e.settings.auto_focus&&xr.setEditorTimeout(e,(function(){var t;(t=!0===e.settings.auto_focus?e:e.editorManager.get(e.settings.auto_focus)).destroyed||t.focus()}),100)}(e)},VS=function(e,t){var n=e.settings,r=e.getDoc(),o=e.getBody()
n.browser_spellcheck||n.gecko_spellcheck||(r.body.spellcheck=!1,MS.setAttrib(o,"spellcheck","false")),e.quirks=IS(e),function(e){e.fire("PostRender")}(e)
var i=function(e){return e.getParam("directionality",cu.isRtl()?"rtl":void 0)}(e)
if(void 0!==i&&(o.dir=i),n.protect&&e.on("BeforeSetContent",(function(e){ht.each(n.protect,(function(t){e.content=e.content.replace(t,(function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"}))}))})),e.on("SetContent",(function(){e.addVisual(e.getBody())})),!1===t&&e.load({initial:!0,format:"html"}),e.startContent=e.getContent({format:"raw"}),e.on("compositionstart compositionend",(function(t){e.composing="compositionstart"===t.type})),e.contentStyles.length>0){var a=""
ht.each(e.contentStyles,(function(e){a+=e+"\r\n"})),e.dom.addStyle(a)}(function(e,t){var n=function(e){return e.inline?e.ui.styleSheetLoader:e.dom.styleSheetLoader}(e),r=function(){e.on("remove",(function(){return n.unloadAll(t)})),HS(e)}
n.loadAll(t,r,r)})(e,e.contentCSS),n.content_style&&function(e,t){var n=yt.fromDom(e.getBody()),r=Xt(Kt(n)),o=yt.fromTag("style")
Fn(o,"type","text/css"),en(o,yt.fromText(t)),en(r,o),e.on("remove",(function(){rn(o)}))}(e,n.content_style)},qS=function(e,t){var n=e.settings,r=e.getElement(),o=e.getDoc()
n.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline||(o.open(),o.write(e.iframeHTML),o.close()),e.inline&&(MS.addClass(r,"mce-content-body"),e.contentDocument=o=document,e.contentWindow=window,e.bodyElement=r,e.contentAreaContainer=r)
var i=e.getBody()
i.disabled=!0,e.readonly=!!n.readonly,e.readonly||(e.inline&&"static"===MS.getStyle(i,"position",!0)&&(i.style.position="relative"),i.contentEditable=e.getParam("content_editable_state",!0)),i.disabled=!1,e.editorUpload=Py(e),e.schema=Xo(n),e.dom=Za(o,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,hex_colors:n.force_hex_style_colors,update_styles:!0,root_element:e.inline?e.getBody():null,collect:function(){return e.inline},schema:e.schema,contentCssCors:Gc(e),referrerPolicy:Jc(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}}),e.parser=function(e){var t=Pv(zS(e),e.schema)
return t.addAttributeFilter("src,href,style,tabindex",(function(t,n){for(var r,o,i=t.length,a=e.dom,u="data-mce-"+n;i--;)if((o=(r=t[i]).attr(n))&&!r.attr(u)){if(0===o.indexOf("data:")||0===o.indexOf("blob:"))continue
"style"===n?((o=a.serializeStyle(a.parseStyle(o),r.name)).length||(o=null),r.attr(u,o),r.attr(n,o)):"tabindex"===n?(r.attr(u,o),r.attr(n,null)):r.attr(u,e.convertURL(o,n,r.name))}})),t.addNodeFilter("script",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("type")||"no/type"
0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}})),e.settings.preserve_cdata&&t.addNodeFilter("#cdata",(function(t){for(var n=t.length;n--;){var r=t[n]
r.type=8,r.name="#comment",r.value="[CDATA["+e.dom.encode(r.value)+"]]"}})),t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(function(t){for(var n=t.length,r=e.schema.getNonEmptyElements();n--;){var o=t[n]
o.isEmpty(r)&&0===o.getAll("br").length&&(o.append(new sm("br",1)).shortEnded=!0)}})),t}(e),e.serializer=Uv(function(e){var t=e.settings
return be(be({},zS(e)),US({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope,element_format:t.element_format,entities:t.entities,entity_encoding:t.entity_encoding,indent:t.indent,indent_after:t.indent_after,indent_before:t.indent_before,block_elements:t.block_elements,boolean_attributes:t.boolean_attributes,custom_elements:t.custom_elements,extended_valid_elements:t.extended_valid_elements,invalid_elements:t.invalid_elements,invalid_styles:t.invalid_styles,move_caret_before_on_enter_elements:t.move_caret_before_on_enter_elements,non_empty_elements:t.non_empty_elements,schema:t.schema,self_closing_elements:t.self_closing_elements,short_ended_elements:t.short_ended_elements,special:t.special,text_block_elements:t.text_block_elements,text_inline_elements:t.text_inline_elements,valid_children:t.valid_children,valid_classes:t.valid_classes,valid_elements:t.valid_elements,valid_styles:t.valid_styles,verify_html:t.verify_html,whitespace_elements:t.whitespace_elements}))}(e),e),e.selection=pv(e.dom,e.getWin(),e.serializer,e),e.annotator=Tl(e),e.formatter=$y(e),e.undoManager=Wy(e),e._nodeChangeDispatcher=new vS(e),e._selectionOverrides=LS(e),GC(e),yS(e),ov(e)||CS(e)
var a=function(e){return ov(e)?ou(null):hS(e)}(e)
XC(e,a),function(e){jc(e)&&e.on("NodeChange",l(ew,e))}(e),Jy(e),function(e){e.fire("PreInit")}(e),function(e){var t=e
return se(e.plugins,"rtc").fold((function(){return t.rtcInstance=nv(e),b.none()}),(function(n){return b.some(n.setup().then((function(n){return t.rtcInstance=rv(e,n),n.isRemote})))}))}(e).fold((function(){VS(e,!1)}),(function(t){e.setProgressState(!0),t.then((function(t){e.setProgressState(!1),VS(e,t)}))}))},$S=Za.DOM,WS=function(e){var t=function(e){return e.getParam("doctype","<!DOCTYPE html>")}(e)+"<html><head>";(function(e){return e.getParam("document_base_url","")})(e)!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
var n=function(e){return Uc(e,"body_id","tinymce")}(e),r=function(e){return Uc(e,"body_class","")}(e)
return zc(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+zc(e)+'" />'),t+='</head><body id="'+n+'" class="mce-content-body '+r+'" data-id="'+e.id+'"><br></body></html>'},KS=function(e,t){var n=e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),r=function(e,t,n,r){var o=yt.fromTag("iframe")
return Un(o,r),Un(o,{id:e+"_ifr",frameBorder:"0",allowTransparency:"true",title:t}),vu(o,"tox-edit-area__iframe"),o}(e.id,n,t.height,function(e){return e.getParam("iframe_attrs",{})}(e)).dom
r.onload=function(){r.onload=null,e.fire("load")}
var o=function(e,t){if(document.domain!==window.location.hostname&&lt.browser.isIE()){var n=By("mce")
e[n]=function(){qS(e)}
var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()"
return $S.setAttrib(t,"src",r),!0}return!1}(e,r)
return e.contentAreaContainer=t.iframeContainer,e.iframeElement=r,e.iframeHTML=WS(e),$S.add(t.iframeContainer,r),o},XS=Za.DOM,YS=function(e,t,n){var r=wy.get(n),o=wy.urls[n]||e.documentBaseUrl.replace(/\/$/,"")
if(n=ht.trim(n),r&&-1===ht.inArray(t,n)){if(ht.each(wy.dependencies(n),(function(n){YS(e,t,n)})),e.plugins[n])return
try{var i=new r(e,o,e.$)
e.plugins[n]=i,i.init&&(i.init(e,o),t.push(n))}catch($E){(function(e,t,n){var r=cu.translate(["Failed to initialize plugin: {0}",t])
Ty(r,n),Ey(e,r)})(e,n,$E)}}},GS=function(e){return e.replace(/^\-/,"")},JS=function(e){return{editorContainer:e,iframeContainer:e,api:{}}},QS=function(e){var t=e.getElement()
return e.inline?JS(null):function(e){var t=XS.create("div")
return XS.insertAfter(t,e),JS(t)}(t)},ZS=function(e){var t=e.getElement()
return e.orgDisplay=t.style.display,S(ns(e))?function(e){return e.theme.renderUI()}(e):A(ns(e))?function(e){var t=e.getElement(),n=ns(e)(e,t)
return n.editorContainer.nodeType&&(n.editorContainer.id=n.editorContainer.id||e.id+"_parent"),n.iframeContainer&&n.iframeContainer.nodeType&&(n.iframeContainer.id=n.iframeContainer.id||e.id+"_iframecontainer"),n.height=n.iframeHeight?n.iframeHeight:t.offsetHeight,n}(e):QS(e)},eN=function(e){e.fire("ScriptsLoaded"),function(e){var t=ht.trim($c(e)),n=e.ui.registry.getAll().icons,r=be(be({},ly.get("default").icons),ly.get(t).icons)
te(r,(function(t,r){fe(n,r)||e.ui.registry.addIcon(r,t)}))}(e),function(e){var t=ns(e)
if(S(t)){e.settings.theme=GS(t)
var n=xy.get(t)
e.theme=new n(e,xy.urls[t]),e.theme.init&&e.theme.init(e,xy.urls[t]||e.documentBaseUrl.replace(/\/$/,""),e.$)}else e.theme={}}(e),function(e){var t=[]
ht.each(as(e).split(/[ ,]/),(function(n){YS(e,t,GS(n))}))}(e)
var t=ZS(e)
e.ui=be(be({},e.ui),t.api)
var n={editorContainer:t.editorContainer,iframeContainer:t.iframeContainer}
return e.editorContainer=n.editorContainer?n.editorContainer:null,function(e){e.contentCSS=e.contentCSS.concat(Ay(e))}(e),e.inline?qS(e):function(e,t){var n=KS(e,t)
t.editorContainer&&($S.get(t.editorContainer).style.display=e.orgDisplay,e.hidden=$S.isHidden(t.editorContainer)),e.getElement().style.display="none",$S.setAttrib(e.id,"aria-hidden","true"),n||qS(e)}(e,n)},tN=Za.DOM,nN=function(e){return"-"===e.charAt(0)},rN=function(e,t){var n=Qc(t),r=function(e){return e.getParam("language_url","","string")}(t)
if(!1===cu.hasCode(n)&&"en"!==n){var o=""!==r?r:t.editorManager.baseURL+"/langs/"+n+".js"
e.add(o,u,void 0,(function(){(function(e,t,n){ky(e,"LanguageLoadError",_y("language",t,n))})(t,o,n)}))}},oN=function(e,t,n){return b.from(t).filter((function(e){return e.length>0&&!ly.has(e)})).map((function(t){return{url:e.editorManager.baseURL+"/icons/"+t+"/icons"+n+".js",name:b.some(t)}}))},iN=function(e,t,n){var r=oN(t,"default",n),o=function(e){return b.from(function(e){return e.getParam("icons_url","","string")}(e)).filter((function(e){return e.length>0})).map((function(e){return{url:e,name:b.none()}}))}(t).orThunk((function(){return oN(t,$c(t),"")}))
U(function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n)
return t}([r,o]),(function(n){e.add(n.url,u,void 0,(function(){(function(e,t,n){ky(e,"IconsLoadError",_y("icons",t,n))})(t,n.url,n.name.getOrUndefined())}))}))},aN=function(e,t){var n=ru.ScriptLoader;(function(e,t,n,r){var o=ns(t)
if(S(o)){if(!nN(o)&&!xy.urls.hasOwnProperty(o)){var i=function(e){return e.getParam("theme_url")}(t)
i?xy.load(o,t.documentBaseURI.toAbsolute(i)):xy.load(o,"themes/"+o+"/theme"+n+".js")}e.loadQueue((function(){xy.waitFor(o,r)}))}else r()})(n,e,t,(function(){rN(n,e),iN(n,e,t),function(e,t){ht.each(function(e){return e.getParam("external_plugins")}(e),(function(t,n){wy.load(n,t,u,void 0,(function(){Ry(e,t,n)})),e.settings.plugins+=" "+n})),ht.each(as(e).split(/[ ,]/),(function(n){if((n=ht.trim(n))&&!wy.urls[n])if(nN(n)){n=n.substr(1,n.length)
var r=wy.dependencies(n)
ht.each(r,(function(n){var r={prefix:"plugins/",resource:n,suffix:"/plugin"+t+".js"},o=wy.createUrl(r,n)
wy.load(o.resource,o,u,void 0,(function(){Ry(e,o.prefix+o.resource+o.suffix,o.resource)}))}))}else{var o={prefix:"plugins/",resource:n,suffix:"/plugin"+t+".js"}
wy.load(n,o,u,void 0,(function(){Ry(e,o.prefix+o.resource+o.suffix,n)}))}}))}(e,t),n.loadQueue((function(){e.removed||eN(e)}),e,(function(){e.removed||eN(e)}))}))},uN=function(e){var t=e.id
cu.setCode(Qc(e))
var n=function(){tN.unbind(window,"ready",n),e.render()}
if(xi.Event.domLoaded){if(e.getElement()&&lt.contentEditable){var r=yt.fromDom(e.getElement()),o=function(e){return V(e.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{})}(r)
e.on("remove",(function(){z(r.dom.attributes,(function(e){return jn(r,e.name)})),Un(r,o)})),e.ui.styleSheetLoader=function(e,t){return kr.forElement(e,{contentCssCors:is(t),referrerPolicy:Jc(t)})}(r,e),!function(e){return e.getParam("inline")}(e)?(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden"):e.inline=!0
var i=e.getElement().form||tN.getParent(t,"form")
i&&(e.formElement=i,function(e){return e.getParam("hidden_input")}(e)&&!En(e.getElement())&&(tN.insertAfter(tN.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=function(t){e.fire(t.type,t)},tN.bind(i,"submit reset",e.formEventDelegate),e.on("reset",(function(){e.resetContent()})),!function(e){return e.getParam("submit_patch")}(e)||i.submit.nodeType||i.submit.length||i._mceOldSubmit||(i._mceOldSubmit=i.submit,i.submit=function(){return e.editorManager.triggerSave(),e.setDirty(!1),i._mceOldSubmit(i)})),e.windowManager=Sy(e),e.notificationManager=Cy(e),function(e){return"xml"===e.getParam("encoding")}(e)&&e.on("GetContent",(function(e){e.save&&(e.content=tN.encode(e.content))})),function(e){return e.getParam("add_form_submit_trigger")}(e)&&e.on("submit",(function(){e.initialized&&e.save()})),function(e){return e.getParam("add_unload_trigger")}(e)&&(e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),aN(e,e.suffix)}}else tN.bind(window,"ready",n)},cN=function(e){return A(e)?e:p},sN=function(e,t,n){var r=t(e),o=cN(n)
return r.orThunk((function(){return o(e)?b.none():function(e,t,n){for(var r=e.dom,o=cN(n);r.parentNode;){r=r.parentNode
var i=yt.fromDom(r),a=t(i)
if(a.isSome())return a
if(o(i))break}return b.none()}(e,t,o)}))},fN={"font-size":"size","font-family":"face"},lN=function(e,t,n){var r=function(t){return $n(t,e).orThunk((function(){return"font"===Et(t)?se(fN,e).bind((function(e){return n=t,r=e,b.from(zn(n,r))
var n,r})):b.none()}))}
return sN(yt.fromDom(n),(function(e){return r(e)}),(function(e){return xt(yt.fromDom(t),e)}))},dN=function(e){return function(t,n){return b.from(n).map(yt.fromDom).filter(Rt).bind((function(n){return lN(e,t,n.dom).or(function(e,t){return b.from(Za.DOM.getStyle(t,e,!0))}(e,n.dom))})).getOr("")}},mN=dN("font-size"),pN=c((function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}),dN("font-family")),gN=function(e){return Cf(e.getBody()).map((function(e){var t=e.container()
return kn(t)?t.parentNode:t}))},hN=function(e,t){return function(e){return b.from(e.selection.getRng()).bind((function(t){var n=e.getBody()
return t.startContainer===n&&0===t.startOffset?b.none():b.from(e.selection.getStart(!0))}))}(e).orThunk(l(gN,e)).map(yt.fromDom).filter(Rt).map(t)},vN=function(e,t){if(/^[0-9.]+$/.test(t)){var n=parseInt(t,10)
if(n>=1&&n<=7){var r=function(e){return ht.explode(e.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large"))}(e),o=function(e){return ht.explode(e.getParam("font_size_classes",""))}(e)
return o?o[n-1]||t:r[n-1]||t}return t}return t},yN=function(e){var t=e.split(/\s*,\s*/)
return F(t,(function(e){return-1===e.indexOf(" ")||Re(e,'"')||Re(e,"'")?e:"'"+e+"'"})).join(",")},bN=function(e,t){var n=function(e){var t
return"string"!=typeof e?(t=ht.extend({paste:e.paste,data:{paste:e.paste}},e),{content:e.content,details:t}):{content:e,details:{}}}(t);(function(e,t,n){iv(e).editor.insertContent(t,n)})(e,n.content,n.details)},CN=ht.each,wN=ht.map,xN=ht.inArray,SN=function(){function e(e){this.commands={state:{},exec:{},value:{}},this.editor=e,this.setupCommands(e)}return e.prototype.execCommand=function(e,t,n,r){var o,i=!1,a=this
if(!a.editor.removed){var u
if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus?(u=a.editor,Fd(u).each((function(e){return u.selection.setRng(e)}))):a.editor.focus(),(r=a.editor.fire("BeforeExecCommand",{command:e,ui:t,value:n})).isDefaultPrevented())return!1
var c=e.toLowerCase()
if(o=a.commands.exec[c])return o(c,t,n),a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
if(CN(this.editor.plugins,(function(r){if(r.execCommand&&r.execCommand(e,t,n))return a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),i=!0,!1})),i)return i
if(a.editor.theme&&a.editor.theme.execCommand&&a.editor.theme.execCommand(e,t,n))return a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
try{i=a.editor.getDoc().execCommand(e,t,n)}catch(s){}return!!i&&(a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0)}},e.prototype.queryCommandState=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.state[e])return t(e)
try{return this.editor.getDoc().queryCommandState(e)}catch(n){}return!1}},e.prototype.queryCommandValue=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.value[e])return t(e)
try{return this.editor.getDoc().queryCommandValue(e)}catch(n){}}},e.prototype.addCommands=function(e,t){void 0===t&&(t="exec")
var n=this
CN(e,(function(e,r){CN(r.toLowerCase().split(","),(function(r){n.commands[t][r]=e}))}))},e.prototype.addCommand=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.exec[e]=function(e,o,i,a){return t.call(n||r.editor,o,i,a)}},e.prototype.queryCommandSupported=function(e){if(e=e.toLowerCase(),this.commands.exec[e])return!0
try{return this.editor.getDoc().queryCommandSupported(e)}catch(t){}return!1},e.prototype.addQueryStateHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.state[e]=function(){return t.call(n||r.editor)}},e.prototype.addQueryValueHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.value[e]=function(){return t.call(n||r.editor)}},e.prototype.hasCustomCommand=function(e){return e=e.toLowerCase(),!!this.commands.exec[e]},e.prototype.execNativeCommand=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=null),this.editor.getDoc().execCommand(e,t,n)},e.prototype.isFormatMatch=function(e){return this.editor.formatter.match(e)},e.prototype.toggleFormat=function(e,t){this.editor.formatter.toggle(e,t?{value:t}:void 0),this.editor.nodeChanged()},e.prototype.storeSelection=function(e){this.selectionBookmark=this.editor.selection.getBookmark(e)},e.prototype.restoreSelection=function(){this.editor.selection.moveToBookmark(this.selectionBookmark)},e.prototype.setupCommands=function(e){var t=this
this.addCommands({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},"Cut,Copy,Paste":function(n){var r,o=e.getDoc()
try{t.execNativeCommand(n)}catch(a){r=!0}if("paste"!==n||o.queryCommandEnabled(n)||(r=!0),r||!o.queryCommandSupported(n)){var i=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")
lt.mac&&(i=i.replace(/Ctrl\+/g,"⌘+")),e.notificationManager.open({text:i,type:"error"})}},unlink:function(){if(e.selection.isCollapsed()){var t=e.dom.getParent(e.selection.getStart(),"a")
t&&e.dom.remove(t,!0)}else e.formatter.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(n){var r=n.substring(7)
"full"===r&&(r="justify"),CN("left,center,right,justify".split(","),(function(t){r!==t&&e.formatter.remove("align"+t)})),"none"!==r&&t.toggleFormat("align"+r)},"InsertUnorderedList,InsertOrderedList":function(n){var r
t.execNativeCommand(n)
var o=e.dom.getParent(e.selection.getNode(),"ol,ul")
o&&(r=o.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName)&&(t.storeSelection(),e.dom.split(r,o),t.restoreSelection()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){t.toggleFormat(e)},"ForeColor,HiliteColor":function(e,n,r){t.toggleFormat(e,r)},FontName:function(t,n,r){(function(e,t){var n=vN(e,t)
e.formatter.toggle("fontname",{value:yN(n)}),e.nodeChanged()})(e,r)},FontSize:function(t,n,r){(function(e,t){e.formatter.toggle("fontsize",{value:vN(e,t)}),e.nodeChanged()})(e,r)},LineHeight:function(t,n,r){(function(e,t){e.undoManager.transact((function(){e.formatter.toggle("lineheight",{value:String(t)}),e.nodeChanged()}))})(e,r)},RemoveFormat:function(t){e.formatter.remove(t)},mceBlockQuote:function(){t.toggleFormat("blockquote")},FormatBlock:function(e,n,r){return t.toggleFormat(r||"p")},mceCleanup:function(){var t=e.selection.getBookmark()
e.setContent(e.getContent()),e.selection.moveToBookmark(t)},mceRemoveNode:function(n,r,o){var i=o||e.selection.getNode()
i!==e.getBody()&&(t.storeSelection(),e.dom.remove(i,!0),t.restoreSelection())},mceSelectNodeDepth:function(t,n,r){var o=0
e.dom.getParent(e.selection.getNode(),(function(t){if(1===t.nodeType&&o++===r)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:function(t,n,r){e.selection.select(r)},mceInsertContent:function(t,n,r){bN(e,r)},mceInsertRawHTML:function(t,n,r){e.selection.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,(function(){return r})))},mceInsertNewLine:function(t,n,r){iS(e,r)},mceToggleFormat:function(e,n,r){t.toggleFormat(r)},mceSetContent:function(t,n,r){e.setContent(r)},"Indent,Outdent":function(t){$C(e,t)},mceRepaint:function(){},InsertHorizontalRule:function(){e.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual,e.addVisual()},mceReplaceContent:function(t,n,r){e.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceInsertLink:function(t,n,r){"string"==typeof r&&(r={href:r})
var o=e.dom.getParent(e.selection.getNode(),"a")
r.href=r.href.replace(/ /g,"%20"),o&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,o)},selectAll:function(){var t=e.dom.getParent(e.selection.getStart(),On)
if(t){var n=e.dom.createRng()
n.selectNodeContents(t),e.selection.setRng(n)}},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,n,r){return Wx(e,r),!0}})
var n=function(t){return function(){var n=e.selection,r=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks(),o=wN(r,(function(n){return!!e.formatter.matchNode(n,t)}))
return-1!==xN(o,!0)}}
t.addCommands({JustifyLeft:n("alignleft"),JustifyCenter:n("aligncenter"),JustifyRight:n("alignright"),JustifyFull:n("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return t.isFormatMatch(e)},mceBlockQuote:function(){return t.isFormatMatch("blockquote")},Outdent:function(){return HC(e)},"InsertUnorderedList,InsertOrderedList":function(t){var n=e.dom.getParent(e.selection.getNode(),"ul,ol")
return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state"),t.addCommands({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}}),t.addQueryValueHandler("FontName",(function(){return function(e){return hN(e,(function(t){return pN(e.getBody(),t.dom)})).getOr("")}(e)}),this),t.addQueryValueHandler("FontSize",(function(){return function(e){return hN(e,(function(t){return mN(e.getBody(),t.dom)})).getOr("")}(e)}),this),t.addQueryValueHandler("LineHeight",(function(){return function(e){return hN(e,(function(t){var n=yt.fromDom(e.getBody())
return sN(t,(function(e){return $n(e,"line-height")}),l(xt,n)).getOrThunk((function(){var e=parseFloat(Vn(t,"line-height")),n=parseFloat(Vn(t,"font-size"))
return String(e/n)}))})).getOr("")}(e)}),this)},e}(),NN="data-mce-contenteditable",EN=function(e,t,n){var r,o
bu(e,t)&&!1===n?(o=t,pu(r=e)?r.dom.classList.remove(o):hu(r,o),yu(r)):n&&vu(e,t)},kN=function(e,t,n){try{e.getDoc().execCommand(t,!1,String(n))}catch(r){}},_N=function(e,t){e.dom.contentEditable=t?"true":"false"},RN=function(e,t){var n=yt.fromDom(e.getBody())
EN(n,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),function(e){b.from(e.selection.getNode()).each((function(e){e.removeAttribute("data-mce-selected")}))}(e),e.readonly=!0,_N(n,!1),U(wu(n,'*[contenteditable="true"]'),(function(e){Fn(e,NN,"true"),_N(e,!1)}))):(e.readonly=!1,_N(n,!0),function(e){U(wu(e,'*[data-mce-contenteditable="true"]'),(function(e){jn(e,NN),_N(e,!0)}))}(n),kN(e,"StyleWithCSS",!1),kN(e,"enableInlineTableEditing",!1),kN(e,"enableObjectResizing",!1),Jd(e)&&e.focus(),function(e){e.selection.setRng(e.selection.getRng())}(e),e.nodeChanged())},TN=function(e){return e.readonly},AN=function(e){e.parser.addAttributeFilter("contenteditable",(function(t){TN(e)&&U(t,(function(e){e.attr(NN,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(NN,(function(t){TN(e)&&U(t,(function(e){e.attr("contenteditable",e.attr(NN))}))})),e.serializer.addTempAttr(NN)},DN=ht.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," "),ON=function(){function e(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||p}return e.isNative=function(e){return!!DN[e.toLowerCase()]},e.prototype.fire=function(e,t){var n=e.toLowerCase(),r=t||{}
r.type=n,r.target||(r.target=this.scope),r.preventDefault||(r.preventDefault=function(){r.isDefaultPrevented=g},r.stopPropagation=function(){r.isPropagationStopped=g},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=g},r.isDefaultPrevented=p,r.isPropagationStopped=p,r.isImmediatePropagationStopped=p),this.settings.beforeFire&&this.settings.beforeFire(r)
var o=this.bindings[n]
if(o)for(var i=0,a=o.length;i<a;i++){var u=o[i]
if(u.once&&this.off(n,u.func),r.isImmediatePropagationStopped())return r.stopPropagation(),r
if(!1===u.func.call(this.scope,r))return r.preventDefault(),r}return r},e.prototype.on=function(e,t,n,r){if(!1===t&&(t=p),t){var o={func:t}
r&&ht.extend(o,r)
for(var i=e.toLowerCase().split(" "),a=i.length;a--;){var u=i[a],c=this.bindings[u]
c||(c=this.bindings[u]=[],this.toggleEvent(u,!0)),n?c.unshift(o):c.push(o)}}return this},e.prototype.off=function(e,t){var n=this
if(e)for(var r=e.toLowerCase().split(" "),o=r.length;o--;){var i=r[o],a=this.bindings[i]
if(!i)return te(this.bindings,(function(e,t){n.toggleEvent(t,!1),delete n.bindings[t]})),this
if(a){if(t)for(var u=a.length;u--;)a[u].func===t&&(a=a.slice(0,u).concat(a.slice(u+1)),this.bindings[i]=a)
else a.length=0
a.length||(this.toggleEvent(e,!1),delete this.bindings[i])}}else te(this.bindings,(function(e,t){n.toggleEvent(t,!1)})),this.bindings={}
return this},e.prototype.once=function(e,t,n){return this.on(e,t,n,{once:!0})},e.prototype.has=function(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)},e}(),BN=function(e){return e._eventDispatcher||(e._eventDispatcher=new ON({scope:e,toggleEvent:function(t,n){ON.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher},PN={fire:function(e,t,n){var r=this
if(r.removed&&"remove"!==e&&"detach"!==e)return t
var o=BN(r).fire(e,t)
if(!1!==n&&r.parent)for(var i=r.parent();i&&!o.isPropagationStopped();)i.fire(e,o,!1),i=i.parent()
return o},on:function(e,t,n){return BN(this).on(e,t,n)},off:function(e,t){return BN(this).off(e,t)},once:function(e,t){return BN(this).once(e,t)},hasEventListeners:function(e){return BN(this).has(e)}},LN=Za.DOM,IN=function(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
var n=ts(e)
return n?(e.eventRoot||(e.eventRoot=LN.select(n)[0]),e.eventRoot):e.getBody()},MN=function(e,t,n){!function(e){return!e.hidden&&!TN(e)}(e)?TN(e)&&function(e,t){var n=t.target;(function(e){return"click"===e.type})(t)&&!Pl.metaKeyPressed(t)&&function(e,t){return null!==e.dom.getParent(t,"a")}(e,n)&&t.preventDefault()}(e,n):e.fire(t,n)},FN=function(e,t){var n
if(e.delegates||(e.delegates={}),!e.delegates[t]&&!e.removed){var r=IN(e,t)
if(ts(e)){if(vw||(vw={},e.editorManager.on("removeEditor",(function(){e.editorManager.activeEditor||vw&&(te(vw,(function(t,n){e.dom.unbind(IN(e,n))})),vw=null)}))),vw[t])return
n=function(n){for(var r=n.target,o=e.editorManager.get(),i=o.length;i--;){var a=o[i].getBody();(a===r||LN.isChildOf(r,a))&&MN(o[i],t,n)}},vw[t]=n,LN.bind(r,t,n)}else n=function(n){MN(e,t,n)},LN.bind(r,t,n),e.delegates[t]=n}},UN=be(be({},PN),{bindPendingEventDelegates:function(){var e=this
ht.each(e._pendingNativeEvents,(function(t){FN(e,t)}))},toggleNativeEvent:function(e,t){var n=this
"focus"!==e&&"blur"!==e&&(t?n.initialized?FN(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(IN(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t=e.getBody(),n=e.dom
e.delegates&&(te(e.delegates,(function(t,n){e.dom.unbind(IN(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}}),zN=["design","readonly"],jN=function(e,t,n,r){var o=n[t.get()],i=n[r]
try{i.activate()}catch($E){return void console.error("problem while activating editor mode "+r+":",$E)}o.deactivate(),o.editorReadOnly!==i.editorReadOnly&&RN(e,i.editorReadOnly),t.set(r),function(e,t){e.fire("SwitchMode",{mode:t})}(e,r)},HN=function(e){var t=ou("design"),n=ou({design:{activate:u,deactivate:u,editorReadOnly:!1},readonly:{activate:u,deactivate:u,editorReadOnly:!0}})
return function(e){e.serializer?AN(e):e.on("PreInit",(function(){AN(e)}))}(e),function(e){e.on("ShowCaret",(function(t){TN(e)&&t.preventDefault()})),e.on("ObjectSelected",(function(t){TN(e)&&t.preventDefault()}))}(e),{isReadOnly:function(){return TN(e)},set:function(r){return function(e,t,n,r){if(r!==n.get()){if(!fe(t,r))throw new Error("Editor mode '"+r+"' is invalid")
e.initialized?jN(e,n,t,r):e.on("init",(function(){return jN(e,n,t,r)}))}}(e,n.get(),t,r)},get:function(){return t.get()},register:function(e,t){n.set(function(e,t,n){var r
if(I(zN,t))throw new Error("Cannot override default mode "+t)
return be(be({},e),((r={})[t]=be(be({},n),{deactivate:function(){try{n.deactivate()}catch($E){console.error("problem while deactivating editor mode "+t+":",$E)}}}),r))}(n.get(),e,t))}}},VN=ht.each,qN=ht.explode,$N={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},WN=ht.makeMap("alt,ctrl,shift,meta,access"),KN=function(){function e(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e
var t=this
e.on("keyup keypress keydown",(function(e){!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(VN(t.shortcuts,(function(n){if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}return e.prototype.add=function(e,t,n,r){var o=this,i=o.normalizeCommandFunc(n)
return VN(qN(ht.trim(e)),(function(e){var n=o.createShortcut(e,t,i,r)
o.shortcuts[n.id]=n})),!0},e.prototype.remove=function(e){var t=this.createShortcut(e)
return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)},e.prototype.normalizeCommandFunc=function(e){var t=this,n=e
return"string"==typeof n?function(){t.editor.execCommand(n,!1,null)}:ht.isArray(n)?function(){t.editor.execCommand(n[0],n[1],n[2])}:n},e.prototype.parseShortcut=function(e){var t,n={}
VN(qN(e.toLowerCase(),"+"),(function(e){e in WN?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=$N[e]||e.toUpperCase().charCodeAt(0))}))
var r=[n.keyCode]
for(t in WN)n[t]?r.push(t):n[t]=!1
return n.id=r.join(","),n.access&&(n.alt=!0,lt.mac?n.ctrl=!0:n.shift=!0),n.meta&&(lt.mac?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n},e.prototype.createShortcut=function(e,t,n,r){var o=ht.map(qN(e,">"),this.parseShortcut)
return o[o.length-1]=ht.extend(o[o.length-1],{func:n,scope:r||this.editor}),ht.extend(o[0],{desc:this.editor.translate(t),subpatterns:o.slice(1)})},e.prototype.hasModifier=function(e){return e.altKey||e.ctrlKey||e.metaKey},e.prototype.isFunctionKey=function(e){return"keydown"===e.type&&e.keyCode>=112&&e.keyCode<=123},e.prototype.matchShortcut=function(e,t){return!!t&&(t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&(t.alt===e.altKey&&t.shift===e.shiftKey&&(!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0))))},e.prototype.executeShortcutAction=function(e){return e.func?e.func.call(e.scope):null},e}(),XN=function(){var e=function(){var e={},t={},n={},r={},o={},i={},a={},u=function(e,t){return function(n,r){return e[n.toLowerCase()]=be(be({},r),{type:t})}}
return{addButton:u(e,"button"),addGroupToolbarButton:u(e,"grouptoolbarbutton"),addToggleButton:u(e,"togglebutton"),addMenuButton:u(e,"menubutton"),addSplitButton:u(e,"splitbutton"),addMenuItem:u(t,"menuitem"),addNestedMenuItem:u(t,"nestedmenuitem"),addToggleMenuItem:u(t,"togglemenuitem"),addAutocompleter:u(n,"autocompleter"),addContextMenu:u(o,"contextmenu"),addContextToolbar:u(i,"contexttoolbar"),addContextForm:u(i,"contextform"),addSidebar:u(a,"sidebar"),addIcon:function(e,t){return r[e.toLowerCase()]=t},getAll:function(){return{buttons:e,menuItems:t,icons:r,popups:n,contextMenus:o,contextToolbars:i,sidebars:a}}}}()
return{addAutocompleter:e.addAutocompleter,addButton:e.addButton,addContextForm:e.addContextForm,addContextMenu:e.addContextMenu,addContextToolbar:e.addContextToolbar,addIcon:e.addIcon,addMenuButton:e.addMenuButton,addMenuItem:e.addMenuItem,addNestedMenuItem:e.addNestedMenuItem,addSidebar:e.addSidebar,addSplitButton:e.addSplitButton,addToggleButton:e.addToggleButton,addGroupToolbarButton:e.addGroupToolbarButton,addToggleMenuItem:e.addToggleMenuItem,getAll:e.getAll}},YN=ht.each,GN=ht.trim,JN="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),QN={ftp:21,http:80,https:443,mailto:25},ZN=function(){function e(t,n){t=GN(t),this.settings=n||{}
var r=this.settings.base_uri,o=this
if(/^([\w\-]+):([^\/]{2})/i.test(t)||/^\s*#/.test(t))o.source=t
else{var i=0===t.indexOf("//")
if(0!==t.indexOf("/")||i||(t=(r&&r.protocol||"http")+"://mce_host"+t),!/^[\w\-]*:?\/\//.test(t)){var a=this.settings.base_uri?this.settings.base_uri.path:new e(document.location.href).directory
if(this.settings.base_uri&&""==this.settings.base_uri.protocol)t="//mce_host"+o.toAbsPath(a,t)
else{var u=/([^#?]*)([#?]?.*)/.exec(t)
t=(r&&r.protocol||"http")+"://mce_host"+o.toAbsPath(a,u[1])+u[2]}}t=t.replace(/@@/g,"(mce_at)")
var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(t)
YN(JN,(function(e,t){var n=c[t]
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
var t=QN[this.protocol]
if(t&&(this.port||t)==(e.port||t))return!0}return!1},e.prototype.toRelPath=function(e,t){var n,r,o=0,i="",a=e.substring(0,e.lastIndexOf("/")).split("/"),u=t.split("/")
if(a.length>=u.length)for(n=0,r=a.length;n<r;n++)if(n>=u.length||a[n]!==u[n]){o=n+1
break}if(a.length<u.length)for(n=0,r=u.length;n<r;n++)if(n>=a.length||a[n]!==u[n]){o=n+1
break}if(1===o)return t
for(n=0,r=a.length-(o-1);n<r;n++)i+="../"
for(n=o-1,r=u.length;n<r;n++)i+=n!==o-1?"/"+u[n]:u[n]
return i},e.prototype.toAbsPath=function(e,t){var n,r,o=0,i=[],a=/\/$/.test(t)?"/":"",u=e.split("/"),c=t.split("/")
for(YN(u,(function(e){e&&i.push(e)})),u=i,n=c.length-1,i=[];n>=0;n--)0!==c[n].length&&"."!==c[n]&&(".."!==c[n]?o>0?o--:i.push(c[n]):o++)
return 0!==(r=(n=u.length-o)<=0?X(i).join("/"):u.slice(0,n).join("/")+"/"+X(i).join("/")).indexOf("/")&&(r="/"+r),a&&r.lastIndexOf("/")!==r.length-1&&(r+=a),r},e.prototype.getURI=function(e){var t
return void 0===e&&(e=!1),this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source},e}(),eE=Za.DOM,tE=ht.extend,nE=ht.each,rE=ht.resolve,oE=lt.ie,iE=function(){function e(e,t,n){var r=this
this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,tE(this,UN),this.settings=cy(this,e,this.documentBaseUrl,n.defaultSettings,t),this.settings.suffix&&(n.suffix=this.settings.suffix),this.suffix=n.suffix,this.settings.base_url&&n._setBaseUrl(this.settings.base_url),this.baseUri=n.baseURI,this.settings.referrer_policy&&(ru.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),Za.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),fu.languageLoad=this.settings.language_load,fu.baseURL=n.baseURL,this.id=e,this.setDirty(!1),this.documentBaseURI=new ZN(this.settings.document_base_url,{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=!!this.settings.inline,this.shortcuts=new KN(this),this.editorCommands=new SN(this),this.settings.cache_suffix&&(lt.cacheSuffix=this.settings.cache_suffix.replace(/^[\?\&]+/,"")),this.ui={registry:XN(),styleSheetLoader:void 0,show:u,hide:u}
var o=HN(this)
this.mode=o,this.setMode=o.set,n.fire("SetupEditor",{editor:this}),this.execCallback("setup",this),this.$=$a.overrideDefaults((function(){return{context:r.inline?r.getBody():r.getDoc(),element:r.getBody()}}))}return e.prototype.render=function(){uN(this)},e.prototype.focus=function(e){Zd(this,e)},e.prototype.hasFocus=function(){return Gd(this)},e.prototype.execCallback=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r,o=this,i=o.settings[e]
if(i)return o.callbackLookup&&(r=o.callbackLookup[e])&&(i=r.func,r=r.scope),"string"==typeof i&&(r=(r=i.replace(/\.\w+$/,""))?rE(r):0,i=rE(i),o.callbackLookup=o.callbackLookup||{},o.callbackLookup[e]={func:i,scope:r}),i.apply(r||o,t)},e.prototype.translate=function(e){return cu.translate(e)},e.prototype.getParam=function(e,t,n){return fy(this,e,t,n)},e.prototype.hasPlugin=function(e,t){return!!I(as(this).split(/[ ,]/),e)&&(!t||void 0!==wy.get(e))},e.prototype.nodeChanged=function(e){this._nodeChangeDispatcher.nodeChanged(e)},e.prototype.addCommand=function(e,t,n){this.editorCommands.addCommand(e,t,n)},e.prototype.addQueryStateHandler=function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},e.prototype.addQueryValueHandler=function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},e.prototype.addShortcut=function(e,t,n,r){this.shortcuts.add(e,t,n,r)},e.prototype.execCommand=function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},e.prototype.queryCommandState=function(e){return this.editorCommands.queryCommandState(e)},e.prototype.queryCommandValue=function(e){return this.editorCommands.queryCommandValue(e)},e.prototype.queryCommandSupported=function(e){return this.editorCommands.queryCommandSupported(e)},e.prototype.show=function(){var e=this
e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable="true":(eE.show(e.getContainer()),eE.hide(e.id)),e.load(),e.fire("show"))},e.prototype.hide=function(){var e=this,t=e.getDoc()
e.hidden||(oE&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(eE.hide(e.getContainer()),eE.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},e.prototype.isHidden=function(){return!!this.hidden},e.prototype.setProgressState=function(e,t){this.fire("ProgressState",{state:e,time:t})},e.prototype.load=function(e){var t,n=this,r=n.getElement()
if(n.removed)return""
if(r){(e=e||{}).load=!0
var o=En(r)?r.value:r.innerHTML
return t=n.setContent(o,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,t}},e.prototype.save=function(e){var t,n,r=this,o=r.getElement()
if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,En(o)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=eE.getParent(r.id,"form"))&&nE(n.elements,(function(e){if(e.name===r.id)return e.value=t,!1}))),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},e.prototype.setContent=function(e,t){return jv(this,e,t)},e.prototype.getContent=function(e){return zv(this,e)},e.prototype.insertContent=function(e,t){t&&(e=tE({content:e},t)),this.execCommand("mceInsertContent",!1,e)},e.prototype.resetContent=function(e){void 0===e?jv(this,this.startContent,{format:"raw"}):jv(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()},e.prototype.isDirty=function(){return!this.isNotDirty},e.prototype.setDirty=function(e){var t=!this.isNotDirty
this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},e.prototype.getContainer=function(){var e=this
return e.container||(e.container=eE.get(e.editorContainer||e.id+"_parent")),e.container},e.prototype.getContentAreaContainer=function(){return this.contentAreaContainer},e.prototype.getElement=function(){return this.targetElm||(this.targetElm=eE.get(this.id)),this.targetElm},e.prototype.getWin=function(){var e,t=this
return t.contentWindow||(e=t.iframeElement)&&(t.contentWindow=e.contentWindow),t.contentWindow},e.prototype.getDoc=function(){var e,t=this
return t.contentDocument||(e=t.getWin())&&(t.contentDocument=e.document),t.contentDocument},e.prototype.getBody=function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},e.prototype.convertURL=function(e,t,n){var r=this,o=r.settings
return o.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!o.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:o.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,o.remove_script_host)},e.prototype.addVisual=function(e){var t,n=this,r=n.settings,o=n.dom
e=e||n.getBody(),void 0===n.hasVisual&&(n.hasVisual=r.visual),nE(o.select("table,a",e),(function(e){var i
switch(e.nodeName){case"TABLE":return t=r.visual_table_class||"mce-item-table",void((i=o.getAttrib(e,"border"))&&"0"!==i||!n.hasVisual?o.removeClass(e,t):o.addClass(e,t))
case"A":return void(o.getAttrib(e,"href")||(i=o.getAttrib(e,"name")||e.id,t=r.visual_anchor_class||"mce-item-anchor",i&&n.hasVisual?o.addClass(e,t):o.removeClass(e,t)))}})),n.fire("VisualAid",{element:e,hasVisual:n.hasVisual})},e.prototype.remove=function(){qv(this)},e.prototype.destroy=function(e){$v(this,e)},e.prototype.uploadImages=function(e){return this.editorUpload.uploadImages(e)},e.prototype._scanForImages=function(){return this.editorUpload.scanForImages()},e.prototype.addButton=function(){throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")},e.prototype.addSidebar=function(){throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")},e.prototype.addMenuItem=function(){throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")},e.prototype.addContextToolbar=function(){throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")},e}(),aE=Za.DOM,uE=ht.explode,cE=ht.each,sE=ht.extend,fE=0,lE=!1,dE=[],mE=[],pE=function(e){var t=e.type
cE(yE.get(),(function(n){switch(t){case"scroll":n.fire("ScrollWindow",e)
break
case"resize":n.fire("ResizeWindow",e)}}))},gE=function(e){e!==lE&&(e?$a(window).on("resize scroll",pE):$a(window).off("resize scroll",pE),lE=e)},hE=function(e){var t=mE
delete dE[e.id]
for(var n=0;n<dE.length;n++)if(dE[n]===e){dE.splice(n,1)
break}return mE=j(mE,(function(t){return e!==t})),yE.activeEditor===e&&(yE.activeEditor=mE.length>0?mE[0]:null),yE.focusedEditor===e&&(yE.focusedEditor=null),t.length!==mE.length},vE="CSS1Compat"!==document.compatMode,yE=be(be({},PN),{baseURI:null,baseURL:null,defaultSettings:{},documentBaseURL:null,suffix:null,$:$a,majorVersion:"5",minorVersion:"5.1",releaseDate:"2020-10-01",editors:dE,i18n:cu,activeEditor:null,focusedEditor:null,settings:{},setup:function(){var e,t,n=this,r=""
t=ZN.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/"))
var o,i=window.tinymce||window.tinyMCEPreInit
if(i)e=i.base||i.baseURL,r=i.suffix
else{for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var c
if(""!==(c=a[u].src||"")){var s=c.substring(c.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(c)){-1!==s.indexOf(".min")&&(r=".min"),e=c.substring(0,c.lastIndexOf("/"))
break}}}if(!e&&document.currentScript)-1!==(c=document.currentScript.src).indexOf(".min")&&(r=".min"),e=c.substring(0,c.lastIndexOf("/"))}n.baseURL=new ZN(t).toAbsolute(e),n.documentBaseURL=t,n.baseURI=new ZN(n.baseURL),n.suffix=r,(o=n).on("AddEditor",l(qd,o)),o.on("RemoveEditor",l($d,o))},overrideDefaults:function(e){var t=e.base_url
t&&this._setBaseUrl(t)
var n=e.suffix
e.suffix&&(this.suffix=n),this.defaultSettings=e
var r=e.plugin_base_urls
void 0!==r&&te(r,(function(e,t){fu.PluginManager.urls[t]=e}))},init:function(e){var t,n=this,r=ht.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," "),o=function(e){var t=e.id
return t||(t=se(e,"name").filter((function(e){return!aE.get(e)})).getOrThunk(aE.uniqueId),e.setAttribute("id",t)),t},i=function(e,t){return t.constructor===RegExp?t.test(e.className):aE.hasClass(e,t)},a=function(e){t=e},u=function(){var t,c=0,s=[],f=function(e,r,o){var i=new iE(e,r,n)
s.push(i),i.on("init",(function(){++c===t.length&&a(s)})),i.targetElm=i.targetElm||o,i.render()}
aE.unbind(window,"ready",u),function(t){var r=e[t]
if(r)r.apply(n,Array.prototype.slice.call(arguments,2))}("onpageload"),t=$a.unique(function(e){var t=[]
if(lt.browser.isIE()&&lt.browser.version.major<11)return Ty("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[]
if(vE)return Ty("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]
if(e.types)return cE(e.types,(function(e){t=t.concat(aE.select(e.selector))})),t
if(e.selector)return aE.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":var n=e.elements||""
n.length>0&&cE(uE(n),(function(e){var n=aE.get(e)
n?t.push(n):cE(document.forms,(function(n){cE(n.elements,(function(n){n.name===e&&(e="mce_editor_"+fE++,aE.setAttrib(n,"id",e),t.push(n))}))}))}))
break
case"textareas":case"specific_textareas":cE(aE.select("textarea"),(function(n){e.editor_deselector&&i(n,e.editor_deselector)||e.editor_selector&&!i(n,e.editor_selector)||t.push(n)}))}return t}(e)),e.types?cE(e.types,(function(n){ht.each(t,(function(t){return!aE.is(t,n.selector)||(f(o(t),sE({},e,n),t),!1)}))})):(ht.each(t,(function(e){var t;(t=n.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(hE(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)})),0===(t=ht.grep(t,(function(e){return!n.get(e.id)}))).length?a([]):cE(t,(function(t){!function(e,t){return e.inline&&t.tagName.toLowerCase()in r}(e,t)?f(o(t),e,t):Ty("Could not initialize inline editor on invalid inline target element",t)})))}
return n.settings=e,aE.bind(window,"ready",u),new yr((function(e){t?e(t):a=function(t){e(t)}}))},get:function(e){return 0===arguments.length?mE.slice(0):S(e)?q(mE,(function(t){return t.id===e})).getOr(null):D(e)&&mE[e]?mE[e]:null},add:function(e){var t=this
return dE[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(dE[e.id]=e),dE.push(e),mE.push(e)),gE(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),yw||(yw=function(e){var n=t.fire("BeforeUnload")
if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",yw))),e},createEditor:function(e,t){return this.add(new iE(e,t,this))},remove:function(e){var t,n,r=this
if(e){if(!S(e))return n=e,k(r.get(n.id))?null:(hE(n)&&r.fire("RemoveEditor",{editor:n}),0===mE.length&&window.removeEventListener("beforeunload",yw),n.remove(),gE(mE.length>0),n)
cE(aE.select(e),(function(e){(n=r.get(e.id))&&r.remove(n)}))}else for(t=mE.length-1;t>=0;t--)r.remove(mE[t])},execCommand:function(e,t,n){var r=this,o=r.get(n)
switch(e){case"mceAddEditor":return r.get(n)||new iE(n,r.settings,r).render(),!0
case"mceRemoveEditor":return o&&o.remove(),!0
case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(r.execCommand("mceAddEditor",0,n),!0)}return!!r.activeEditor&&r.activeEditor.execCommand(e,t,n)},triggerSave:function(){cE(mE,(function(e){e.save()}))},addI18n:function(e,t){cu.add(e,t)},translate:function(e){return cu.translate(e)},setActive:function(e){var t=this.activeEditor
this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl:function(e){this.baseURL=new ZN(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new ZN(this.baseURL)}})
yE.setup()
var bE,CE,wE,xE,SE=Math.min,NE=Math.max,EE=Math.round,kE=function(e,t,n){var r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,c=t.h,s=(n||"").split("")
return"b"===s[0]&&(o+=c),"r"===s[1]&&(r+=u),"c"===s[0]&&(o+=EE(c/2)),"c"===s[1]&&(r+=EE(u/2)),"b"===s[3]&&(o-=a),"r"===s[4]&&(r-=i),"c"===s[3]&&(o-=EE(a/2)),"c"===s[4]&&(r-=EE(i/2)),_E(r,o,i,a)},_E=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},RE={inflate:function(e,t,n){return _E(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:kE,findBestRelativePosition:function(e,t,n,r){var o,i
for(i=0;i<r.length;i++)if((o=kE(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i]
return null},intersect:function(e,t){var n=NE(e.x,t.x),r=NE(e.y,t.y),o=SE(e.x+e.w,t.x+t.w),i=SE(e.y+e.h,t.y+t.h)
return o-n<0||i-r<0?null:_E(n,r,o-n,i-r)},clamp:function(e,t,n){var r=e.x,o=e.y,i=e.x+e.w,a=e.y+e.h,u=t.x+t.w,c=t.y+t.h,s=NE(0,t.x-r),f=NE(0,t.y-o),l=NE(0,i-u),d=NE(0,a-c)
return r+=s,o+=f,n&&(i+=s,a+=f,r-=l,o-=d),_E(r,o,(i-=l)-r,(a-=d)-o)},create:_E,fromClientRect:function(e){return _E(e.left,e.top,e.width,e.height)}},TE=(bE={},CE={},{load:function(e,t){var n='Script at URL "'+t+'" failed to load',r='Script at URL "'+t+"\" did not call `tinymce.Resource.add('"+e+"', data)` within 1 second"
if(void 0!==bE[e])return bE[e]
var o=new yr((function(o,i){var a=function(e,t,n){void 0===n&&(n=1e3)
var r=!1,o=null,i=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
r||(r=!0,null!==o&&(clearTimeout(o),o=null),e.apply(null,t))}},a=i(e),u=i(t)
return{start:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
r||null!==o||(o=setTimeout((function(){return u.apply(null,e)}),n))},resolve:a,reject:u}}(o,i)
CE[e]=a.resolve,ru.ScriptLoader.loadScript(t,(function(){return a.start(r)}),(function(){return a.reject(n)}))}))
return bE[e]=o,o},add:function(e,t){void 0!==CE[e]&&(CE[e](t),delete CE[e]),bE[e]=yr.resolve(t)}}),AE=ht.each,DE=ht.extend,OE=function(){}
OE.extend=wE=function(e){var t=this.prototype,n=function(){var e,t,n,r=this
if(!xE&&(r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(r,arguments)},r=function(){return this}
xE=!0
var o=new this
return xE=!1,e.Mixins&&(AE(e.Mixins,(function(t){for(var n in t)"init"!==n&&(e[n]=t[n])})),t.Mixins&&(e.Mixins=t.Mixins.concat(e.Mixins))),e.Methods&&AE(e.Methods.split(","),(function(t){e[t]=r})),e.Properties&&AE(e.Properties.split(","),(function(t){var n="_"+t
e[t]=function(e){var t=this
return void 0!==e?(t[n]=e,t):t[n]}})),e.Statics&&AE(e.Statics,(function(e,t){n[t]=e})),e.Defaults&&t.Defaults&&(e.Defaults=DE({},t.Defaults,e.Defaults)),te(e,(function(e,n){"function"==typeof e&&t[n]?o[n]=function(e,n){return function(){var r=this,o=r._super
r._super=t[e]
var i=n.apply(r,arguments)
return r._super=o,i}}(n,e):o[n]=e})),n.prototype=o,n.constructor=n,n.extend=wE,n}
var BE,PE=Math.min,LE=Math.max,IE=Math.round,ME={serialize:function(e){var t=JSON.stringify(e)
return S(t)?t.replace(/[\u0080-\uFFFF]/g,(function(e){var t=e.charCodeAt(0).toString(16)
return"\\u"+"0000".substring(t.length)+t})):t},parse:function(e){try{return JSON.parse(e)}catch(t){}}},FE={callbacks:{},count:0,send:function(e){var t=this,n=Za.DOM,r=void 0!==e.count?e.count:t.count,o="tinymce_jsonp_"+r
t.callbacks[r]=function(i){n.remove(o),delete t.callbacks[r],e.callback(i)},n.add(n.doc.body,"script",{id:o,src:e.url,type:"text/javascript"}),t.count++}},UE=be(be({},PN),{send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||n++>1e4?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,n>1e4?"TIMED_OUT":"GENERAL",t,e),t=null):xr.setTimeout(r,10)}
if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",UE.fire("beforeInitialize",{settings:e}),(t=new XMLHttpRequest).overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&ht.each(e.requestheaders,(function(e){t.setRequestHeader(e.key,e.value)})),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=UE.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r()
xr.setTimeout(r,10)}}),zE=ht.extend,jE=function(){function e(e){this.settings=zE({},e),this.count=0}return e.sendRPC=function(t){return(new e).send(t)},e.prototype.send=function(e){var t=e.error,n=e.success,r=zE(this.settings,e)
r.success=function(e,o){void 0===(e=ME.parse(e))&&(e={error:"JSON Parse error."}),e.error?t.call(r.error_scope||r.scope,e.error,o):n.call(r.success_scope||r.scope,e.result)},r.error=function(e,n){t&&t.call(r.error_scope||r.scope,e,n)},r.data=ME.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params}),r.content_type="application/json",UE.send(r)},e}()
try{var HE="__storage_test__";(BE=window.localStorage).setItem(HE,HE),BE.removeItem(HE)}catch($E){BE=function(){var e={},t=[],n={getItem:function(t){return e[t]||null},setItem:function(n,r){t.push(n),e[n]=String(r)},key:function(e){return t[e]},removeItem:function(n){t=t.filter((function(e){return e===n})),delete e[n]},clear:function(){t=[],e={}},length:0}
return Object.defineProperty(n,"length",{get:function(){return t.length},configurable:!1,enumerable:!1}),n}()}var VE={geom:{Rect:RE},util:{Promise:yr,Delay:xr,Tools:ht,VK:Pl,URI:ZN,Class:OE,EventDispatcher:ON,Observable:PN,I18n:cu,XHR:UE,JSON:ME,JSONRequest:jE,JSONP:FE,LocalStorage:BE,Color:function(e){var t={},n=0,r=0,o=0,i=function(e){var i
return"object"==typeof e?"r"in e?(n=e.r,r=e.g,o=e.b):"v"in e&&function(e,t,i){if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,i=parseInt(i,10)/100,t=LE(0,PE(t,1)),i=LE(0,PE(i,1)),0!==t){var a=e/60,u=i*t,c=u*(1-Math.abs(a%2-1)),s=i-u
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
default:n=r=o=0}n=IE(255*(n+s)),r=IE(255*(r+s)),o=IE(255*(o+s))}else n=r=o=IE(255*i)}(e.h,e.s,e.v):(i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(n=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10)):(i=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16)):(i=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(n=parseInt(i[1]+i[1],16),r=parseInt(i[2]+i[2],16),o=parseInt(i[3]+i[3],16)),n=n<0?0:n>255?255:n,r=r<0?0:r>255?255:r,o=o<0?0:o>255?255:o,t}
return e&&i(e),t.toRgb=function(){return{r:n,g:r,b:o}},t.toHsv=function(){return function(e,t,n){var r,o
o=0
var i=PE(e/=255,PE(t/=255,n/=255)),a=LE(e,LE(t,n))
return i===a?{h:0,s:0,v:100*(o=i)}:(r=(a-i)/a,o=a,{h:IE(60*((e===i?3:n===i?1:5)-(e===i?t-n:n===i?e-t:n-e)/(a-i))),s:IE(100*r),v:IE(100*o)})}(n,r,o)},t.toHex=function(){var e=function(e){return(e=parseInt(e,10).toString(16)).length>1?e:"0"+e}
return"#"+e(n)+e(r)+e(o)},t.parse=i,t}},dom:{EventUtils:xi,Sizzle:ia,DomQuery:$a,TreeWalker:_r,TextSeeker:Iu,DOMUtils:Za,ScriptLoader:ru,RangeUtils:Ql,Serializer:Uv,StyleSheetLoader:Sr,ControlSelection:Il,BookmarkManager:Dl,Selection:pv,Event:xi.Event},html:{Styles:mi,Entities:Fo,Node:sm,Schema:Xo,SaxParser:vm,DomParser:Pv,Writer:lm,Serializer:dm},Env:lt,AddOnManager:fu,Annotator:Tl,Formatter:$y,UndoManager:Wy,EditorCommands:SN,WindowManager:Sy,NotificationManager:Cy,EditorObservable:UN,Shortcuts:KN,Editor:iE,FocusManager:Ud,EditorManager:yE,DOM:Za.DOM,ScriptLoader:ru.ScriptLoader,PluginManager:wy,ThemeManager:xy,IconManager:ly,Resource:TE,trim:ht.trim,isArray:ht.isArray,is:ht.is,toArray:ht.toArray,makeMap:ht.makeMap,each:ht.each,map:ht.map,grep:ht.grep,inArray:ht.inArray,extend:ht.extend,create:ht.create,walk:ht.walk,createNS:ht.createNS,resolve:ht.resolve,explode:ht.explode,_addCacheSuffix:ht._addCacheSuffix,isOpera:lt.opera,isWebKit:lt.webkit,isIE:lt.ie,isGecko:lt.gecko,isMac:lt.mac},qE=ht.extend(yE,VE);(function(e){window.tinymce=e,window.tinyMCE=e})(qE),function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(qE)})()

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
return o===e(n)&&(function(e){return-1!==["undefined","boolean","number","string","function","xml","null"].indexOf(e)}(o)?t===n:"array"===o?r(a).eq(t,n):"object"===o&&i(a).eq(t,n))})),u=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},c=function(e){return function(t){return typeof t===e}},s=function(e){return function(t){return e===t}},f=u("string"),l=u("object"),d=u("array"),m=s(null),g=c("boolean"),p=s(void 0),h=function(e){return null==e},v=function(e){return!h(e)},b=c("function"),y=c("number"),C=function(){},x=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return e(t.apply(null,n))}},w=function(e,t){return function(n){return e(t(n))}},S=function(e){return function(){return e}},k=function(e){return e},N=function(e,t){return e===t}
function E(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var o=t.concat(n)
return e.apply(null,o)}}var _=function(e){return function(t){return!e(t)}},A=function(e){return e()},R=function(e){e()},D=S(!1),T=S(!0),O=function(){return B},B=function(){var e=function(e){return e()},t=k
return{fold:function(e,t){return e()},isSome:D,isNone:T,getOr:t,getOrThunk:e,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:S(null),getOrUndefined:S(void 0),or:t,orThunk:e,map:O,each:C,bind:O,exists:D,forall:T,filter:function(){return O()},toArray:function(){return[]},toString:S("none()")}}(),P=function(e){var t=S(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},isSome:T,isNone:D,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return P(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:B},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o},L={some:P,none:O,from:function(e){return null==e?B:P(e)}},I=Array.prototype.slice,M=Array.prototype.indexOf,F=Array.prototype.push,U=function(e,t){return M.call(e,t)},z=function(e,t){return U(e,t)>-1},H=function(e,t){for(var n=0,r=e.length;n<r;n++){if(t(e[n],n))return!0}return!1},j=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},V=function(e,t){for(var n=0,r=e.length;n<r;n++){t(e[n],n)}},q=function(e,t){for(var n=e.length-1;n>=0;n--){t(e[n],n)}},$=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a,o)?n:r).push(a)}return{pass:n,fail:r}},W=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n},K=function(e,t,n){return q(e,(function(e,r){n=t(n,e,r)})),n},X=function(e,t,n){return V(e,(function(e,r){n=t(n,e,r)})),n},Y=function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return L.some(i)
if(n(i,r))break}return L.none()},G=function(e,t){return Y(e,t,D)},J=function(e,t){for(var n=0,r=e.length;n<r;n++){if(t(e[n],n))return L.some(n)}return L.none()},Q=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!d(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
F.apply(t,e[n])}return t}(j(e,t))},Z=function(e,t){for(var n=0,r=e.length;n<r;++n){if(!0!==t(e[n],n))return!1}return!0},ee=function(e){var t=I.call(e,0)
return t.reverse(),t},te=function(e,t){return W(e,(function(e){return!z(t,e)}))},ne=function(e,t){var n=I.call(e,0)
return n.sort(t),n},re=function(e,t){return t>=0&&t<e.length?L.some(e[t]):L.none()},oe=function(e){return re(e,0)},ie=function(e){return re(e,e.length-1)},ae=b(Array.from)?Array.from:function(e){return I.call(e)},ue=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n)
if(r.isSome())return r}return L.none()},ce=Object.keys,se=Object.hasOwnProperty,fe=function(e,t){for(var n=ce(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}},le=function(e,t){return de(e,(function(e,n){return{k:n,v:t(e,n)}}))},de=function(e,t){var n={}
return fe(e,(function(e,r){var o=t(e,r)
n[o.k]=o.v})),n},me=function(e){return function(t,n){e[n]=t}},ge=function(e,t,n,r){return fe(e,(function(e,o){(t(e,o)?n:r)(e,o)})),{}},pe=function(e,t){var n={}
return ge(e,t,me(n),C),n},he=function(e){return function(e,t){var n=[]
return fe(e,(function(e,r){n.push(t(e,r))})),n}(e,k)},ve=function(e,t){return be(e,t)?L.from(e[t]):L.none()},be=function(e,t){return se.call(e,t)},ye=function(e,t){return be(e,t)&&void 0!==e[t]&&null!==e[t]},Ce=Array.isArray,xe=function(e,t,n){var r,o
if(!e)return!1
if(n=n||e,void 0!==e.length){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return!1}else for(r in e)if(be(e,r)&&!1===t.call(n,e[r],r,e))return!1
return!0},we=function(e,t){var n=[]
return xe(e,(function(r,o){n.push(t(r,o,e))})),n},Se=function(e,t){var n=[]
return xe(e,(function(r,o){t&&!t(r,o,e)||n.push(r)})),n},ke=function(e,t){if(e)for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},Ne=function(e,t,n,r){for(var o=p(n)?e[0]:n,i=0;i<e.length;i++)o=t.call(r,o,e[i],i)
return o},Ee=function(e,t,n){var r,o
for(r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r
return-1},_e=function(e){return e[e.length-1]},Ae=function(){return(Ae=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function Re(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o])
return e.concat(r||Array.prototype.slice.call(t))}var De=function(e){var t,n=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return n||(n=!0,t=e.apply(null,r)),t}},Te=function(){return Oe(0,0)},Oe=function(e,t){return{major:e,minor:t}},Be={nu:Oe,detect:function(e,t){var n=String(t).toLowerCase()
return 0===e.length?Te():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,t)
if(!n)return{major:0,minor:0}
var r=function(e){return Number(t.replace(n,"$"+e))}
return Oe(r(1),r(2))}(e,n)},unknown:Te},Pe=function(e,t){var n=String(t).toLowerCase()
return G(e,(function(e){return e.search(n)}))},Le=function(e,t){return-1!==e.indexOf(t)},Ie=function(e,t){return function(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t}(e,t,0)},Me=function(e){return function(t){return t.replace(e,"")}},Fe=Me(/^\s+|\s+$/g),Ue=Me(/^\s+/g),ze=Me(/\s+$/g),He=function(e){return e.length>0},je=function(e){return!He(e)},Ve=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,qe=function(e){return function(t){return Le(t,e)}},$e=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Le(e,"edge/")&&Le(e,"chrome")&&Le(e,"safari")&&Le(e,"applewebkit")}},{name:"Chrome",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Ve],search:function(e){return Le(e,"chrome")&&!Le(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Le(e,"msie")||Le(e,"trident")}},{name:"Opera",versionRegexes:[Ve,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:qe("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:qe("firefox")},{name:"Safari",versionRegexes:[Ve,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Le(e,"safari")||Le(e,"mobile/"))&&Le(e,"applewebkit")}}],We=[{name:"Windows",search:qe("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Le(e,"iphone")||Le(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:qe("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:qe("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:qe("linux"),versionRegexes:[]},{name:"Solaris",search:qe("sunos"),versionRegexes:[]},{name:"FreeBSD",search:qe("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:qe("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Ke={browsers:S($e),oses:S(We)},Xe="Edge",Ye="Chrome",Ge="Opera",Je="Firefox",Qe="Safari",Ze=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isEdge:r(Xe),isChrome:r(Ye),isIE:r("IE"),isOpera:r(Ge),isFirefox:r(Je),isSafari:r(Qe)}},et={unknown:function(){return Ze({current:void 0,version:Be.unknown()})},nu:Ze,edge:S(Xe),chrome:S(Ye),ie:S("IE"),opera:S(Ge),firefox:S(Je),safari:S(Qe)},tt="Windows",nt="Android",rt="Linux",ot="Solaris",it="FreeBSD",at="ChromeOS",ut=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isWindows:r(tt),isiOS:r("iOS"),isAndroid:r(nt),isOSX:r("OSX"),isLinux:r(rt),isSolaris:r(ot),isFreeBSD:r(it),isChromeOS:r(at)}},ct={unknown:function(){return ut({current:void 0,version:Be.unknown()})},nu:ut,windows:S(tt),ios:S("iOS"),android:S(nt),linux:S(rt),osx:S("OSX"),solaris:S(ot),freebsd:S(it),chromeos:S(at)},st=function(e,t,n){var r=Ke.browsers(),o=Ke.oses(),i=t.bind((function(e){return function(e,t){return ue(t.brands,(function(t){var n=t.brand.toLowerCase()
return G(e,(function(e){var t
return n===(null===(t=e.brand)||void 0===t?void 0:t.toLowerCase())})).map((function(e){return{current:e.name,version:Be.nu(parseInt(t.version,10),0)}}))}))}(r,e)})).orThunk((function(){return function(e,t){return Pe(e,t).map((function(e){var n=Be.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))}(r,e)})).fold(et.unknown,et.nu),a=function(e,t){return Pe(e,t).map((function(e){var n=Be.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))}(o,e).fold(ct.unknown,ct.nu),u=function(e,t,n,r){var o=e.isiOS()&&!0===/ipad/i.test(n),i=e.isiOS()&&!o,a=e.isiOS()||e.isAndroid(),u=a||r("(pointer:coarse)"),c=o||!i&&a&&r("(min-device-width:768px)"),s=i||a&&!c,f=t.isSafari()&&e.isiOS()&&!1===/safari/i.test(n),l=!s&&!c&&!f
return{isiPad:S(o),isiPhone:S(i),isTablet:S(c),isPhone:S(s),isTouch:S(u),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:S(f),isDesktop:S(l)}}(a,i,e,n)
return{browser:i,os:a,deviceType:u}},ft=function(e){return window.matchMedia(e).matches},lt=De((function(){return st(navigator.userAgent,L.from(navigator.userAgentData),ft)})),dt=function(){return lt()},mt=navigator.userAgent,gt=dt(),pt=gt.browser,ht=gt.os,vt=gt.deviceType,bt=/WebKit/.test(mt)&&!pt.isEdge(),yt="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,Ct=-1!==mt.indexOf("Windows Phone"),xt={opera:pt.isOpera(),webkit:bt,ie:!(!pt.isIE()&&!pt.isEdge())&&pt.version.major,gecko:pt.isFirefox(),mac:ht.isOSX()||ht.isiOS(),iOS:vt.isiPad()||vt.isiPhone(),android:ht.isAndroid(),contentEditable:!0,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:!0,range:window.getSelection&&"Range"in window,documentMode:pt.isIE()?document.documentMode||7:10,fileApi:yt,ceFalse:!0,cacheSuffix:null,container:null,experimentalShadowDom:!1,canHaveCSP:!pt.isIE(),desktop:vt.isDesktop(),windowsPhone:Ct,browser:{current:pt.current,version:pt.version,isChrome:pt.isChrome,isEdge:pt.isEdge,isFirefox:pt.isFirefox,isIE:pt.isIE,isOpera:pt.isOpera,isSafari:pt.isSafari},os:{current:ht.current,version:ht.version,isAndroid:ht.isAndroid,isChromeOS:ht.isChromeOS,isFreeBSD:ht.isFreeBSD,isiOS:ht.isiOS,isLinux:ht.isLinux,isOSX:ht.isOSX,isSolaris:ht.isSolaris,isWindows:ht.isWindows},deviceType:{isDesktop:vt.isDesktop,isiPad:vt.isiPad,isiPhone:vt.isiPhone,isPhone:vt.isPhone,isTablet:vt.isTablet,isTouch:vt.isTouch,isWebView:vt.isWebView}},wt=/^\s*|\s*$/g,St=function(e){return null==e?"":(""+e).replace(wt,"")},kt=function(e,t){return t?!("array"!==t||!Ce(e))||typeof e===t:void 0!==e},Nt=function(e,t,n,r){r=r||this,e&&(n&&(e=e[n]),xe(e,(function(e,o){if(!1===t.call(r,e,o,n))return!1
Nt(e,t,n,r)})))},Et={trim:St,isArray:Ce,is:kt,toArray:function(e){if(Ce(e))return e
for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n]
return t},makeMap:function(e,t,n){var r
for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={}
return n},each:xe,map:we,grep:Se,inArray:ke,hasOwn:be,extend:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=0;r<t.length;r++){var o=t[r]
for(var i in o)if(be(o,i)){var a=o[i]
void 0!==a&&(e[i]=a)}}return e},create:function(e,t,n){var r,o,i,a=this,u=0,c=(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],s=a.createNS(e[3].replace(/\.\w+$/,""),n)
if(!s[c]){if("static"===e[2])return s[c]=t,void(this.onCreate&&this.onCreate(e[2],e[3],s[c]))
t[c]||(t[c]=function(){},u=1),s[c]=t[c],a.extend(s[c].prototype,t),e[5]&&(r=a.resolve(e[5]).prototype,o=e[5].match(/\.(\w+)$/i)[1],i=s[c],s[c]=u?function(){return r[o].apply(this,arguments)}:function(){return this.parent=r[o],i.apply(this,arguments)},s[c].prototype[c]=s[c],a.each(r,(function(e,t){s[c].prototype[t]=r[t]})),a.each(t,(function(e,t){r[t]?s[c].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==c&&(s[c].prototype[t]=e)}))),a.each(t.static,(function(e,t){s[c][t]=e}))}},walk:Nt,createNS:function(e,t){var n,r
for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r]
return t},resolve:function(e,t){var n,r
for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||kt(e,"array")?e:we(e.split(t||","),St)},_addCacheSuffix:function(e){var t=xt.cacheSuffix
return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},_t=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},At={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return _t(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e)
return _t(n)},fromText:function(e,t){var n=(t||document).createTextNode(e)
return _t(n)},fromDom:_t,fromPoint:function(e,t,n){return L.from(e.dom.elementFromPoint(t,n)).map(_t)}},Rt=function(e,t){var n=[],r=function(e){return n.push(e),t(e)},o=t(e)
do{o=o.bind(r)}while(o.isSome())
return n},Dt=function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},Tt=function(e){return 1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount},Ot=function(e,t){return e.dom===t.dom},Bt=function(e,t){return n=e.dom,r=t.dom,function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)}(n,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var n,r},Pt=function(e,t){return dt().browser.isIE()?Bt(e,t):function(e,t){var n=e.dom,r=t.dom
return n!==r&&n.contains(r)}(e,t)}
"undefined"!=typeof window?window:Function("return this;")()
var Lt=function(e){return e.dom.nodeName.toLowerCase()},It=function(e){return e.dom.nodeType},Mt=function(e){return function(t){return It(t)===e}},Ft=Mt(1),Ut=Mt(3),zt=Mt(9),Ht=Mt(11),jt=function(e){return At.fromDom(e.dom.ownerDocument)},Vt=function(e){return zt(e)?e:jt(e)},qt=function(e){return At.fromDom(Vt(e).dom.defaultView)},$t=function(e){return L.from(e.dom.parentNode).map(At.fromDom)},Wt=function(e){return L.from(e.dom.previousSibling).map(At.fromDom)},Kt=function(e){return L.from(e.dom.nextSibling).map(At.fromDom)},Xt=function(e){return ee(Rt(e,Wt))},Yt=function(e){return Rt(e,Kt)},Gt=function(e){return j(e.dom.childNodes,At.fromDom)},Jt=function(e,t){var n=e.dom.childNodes
return L.from(n[t]).map(At.fromDom)},Qt=function(e){return Jt(e,0)},Zt=function(e){return Jt(e,e.dom.childNodes.length-1)},en=function(e){return e.dom.childNodes.length},tn=function(e){return Ht(e)&&v(e.dom.host)},nn=b(Element.prototype.attachShadow)&&b(Node.prototype.getRootNode),rn=S(nn),on=nn?function(e){return At.fromDom(e.dom.getRootNode())}:Vt,an=function(e){return tn(e)?e:function(e){var t=e.dom.head
if(null==t)throw new Error("Head is not available yet")
return At.fromDom(t)}(Vt(e))},un=function(e){return At.fromDom(e.dom.host)},cn=function(e){return v(e.dom.shadowRoot)},sn=function(e,t){$t(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},fn=function(e,t){Kt(e).fold((function(){$t(e).each((function(e){dn(e,t)}))}),(function(e){sn(e,t)}))},ln=function(e,t){Qt(e).fold((function(){dn(e,t)}),(function(n){e.dom.insertBefore(t.dom,n.dom)}))},dn=function(e,t){e.dom.appendChild(t.dom)},mn=function(e,t){V(t,(function(t){dn(e,t)}))},gn=function(e){e.dom.textContent="",V(Gt(e),(function(e){pn(e)}))},pn=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},hn=function(e){var t,n=Gt(e)
n.length>0&&(t=e,V(n,(function(e){sn(t,e)}))),pn(e)},vn=function(e){var t=Ut(e)?e.dom.parentNode:e.dom
if(null==t||null===t.ownerDocument)return!1
var n=t.ownerDocument
return function(e){var t=on(e)
return tn(t)?L.some(t):L.none()}(At.fromDom(t)).fold((function(){return n.body.contains(t)}),w(vn,un))},bn=function(e,t){return{left:e,top:t,translate:function(n,r){return bn(e+n,t+r)}}},yn=bn,Cn=function(e,t){return void 0!==e?e:void 0!==t?t:0},xn=function(e){var t=e.dom,n=t.ownerDocument.body
return n===t?yn(n.offsetLeft,n.offsetTop):vn(e)?function(e){var t=e.getBoundingClientRect()
return yn(t.left,t.top)}(t):yn(0,0)},wn=function(e){var t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop
return yn(n,r)},Sn=function(e,t,n){var r=(void 0!==n?n.dom:document).defaultView
r&&r.scrollTo(e,t)},kn=function(e,t){dt().browser.isSafari()&&b(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)},Nn=function(e,t,n,r){return{x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}},En=function(e){var t=void 0===e?window:e,n=t.document,r=wn(At.fromDom(n))
return function(e){var t=void 0===e?window:e
return dt().browser.isFirefox()?L.none():L.from(t.visualViewport)}(t).fold((function(){var e=t.document.documentElement,n=e.clientWidth,o=e.clientHeight
return Nn(r.left,r.top,n,o)}),(function(e){return Nn(Math.max(e.pageLeft,r.left),Math.max(e.pageTop,r.top),e.width,e.height)}))},_n=function(e){return function(t){return!!t&&t.nodeType===e}},An=function(e){return!!e&&!Object.getPrototypeOf(e)},Rn=_n(1),Dn=function(e){var t=e.map((function(e){return e.toLowerCase()}))
return function(e){if(e&&e.nodeName){var n=e.nodeName.toLowerCase()
return z(t,n)}return!1}},Tn=function(e,t){var n=t.toLowerCase().split(" ")
return function(t){if(Rn(t))for(var r=0;r<n.length;r++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
if((o?o.getPropertyValue(e):null)===n[r])return!0}return!1}},On=function(e){return function(t){return Rn(t)&&t.hasAttribute(e)}},Bn=function(e){return Rn(e)&&e.hasAttribute("data-mce-bogus")},Pn=function(e){return Rn(e)&&"TABLE"===e.tagName},Ln=function(e){return function(t){if(Rn(t)){if(t.contentEditable===e)return!0
if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}},In=Dn(["textarea","input"]),Mn=_n(3),Fn=_n(8),Un=_n(9),zn=_n(11),Hn=Dn(["br"]),jn=Dn(["img"]),Vn=Ln("true"),qn=Ln("false"),$n=Dn(["td","th"]),Wn=Dn(["video","audio","object","embed"]),Kn=function(e,t,n){return void 0===n&&(n=N),e.exists((function(e){return n(e,t)}))},Xn=function(e,t,n){return e.isSome()&&t.isSome()?L.some(n(e.getOrDie(),t.getOrDie())):L.none()},Yn=function(e){return void 0!==e.style&&b(e.style.getPropertyValue)},Gn=function(e,t,n){if(!(f(n)||g(n)||y(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")},Jn=function(e,t,n){Gn(e.dom,t,n)},Qn=function(e,t){var n=e.dom
fe(t,(function(e,t){Gn(n,t,e)}))},Zn=function(e,t){var n=e.dom.getAttribute(t)
return null===n?void 0:n},er=function(e,t){return L.from(Zn(e,t))},tr=function(e,t){e.dom.removeAttribute(t)},nr=function(e,t){var n=e.dom
fe(t,(function(e,t){(function(e,t,n){if(!f(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
Yn(e)&&e.style.setProperty(t,n)})(n,t,e)}))},rr=function(e,t){var n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t)
return""!==r||vn(e)?r:or(n,t)},or=function(e,t){return Yn(e)?e.style.getPropertyValue(t):""},ir=function(e,t){var n=e.dom,r=or(n,t)
return L.from(r).filter((function(e){return e.length>0}))},ar=function(e){var t={},n=e.dom
if(Yn(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r)
t[o]=n.style[o]}return t},ur=dt().browser,cr=function(e){return G(e,Ft)},sr=function(e,t){return e.children&&z(e.children,t)},fr=function(e,t,n){var r=0,o=0,i=e.ownerDocument
if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===rr(At.fromDom(e),"position")){var a=t.getBoundingClientRect()
return{x:r=a.left+(i.documentElement.scrollLeft||e.scrollLeft)-i.documentElement.clientLeft,y:o=a.top+(i.documentElement.scrollTop||e.scrollTop)-i.documentElement.clientTop}}for(var u=t;u&&u!==n&&u.nodeType&&!sr(u,n);){var c=u
r+=c.offsetLeft||0,o+=c.offsetTop||0,u=c.offsetParent}for(u=t.parentNode;u&&u!==n&&u.nodeType&&!sr(u,n);)r-=u.scrollLeft||0,o-=u.scrollTop||0,u=u.parentNode
o+=function(e){return ur.isFirefox()&&"table"===Lt(e)?cr(Gt(e)).filter((function(e){return"caption"===Lt(e)})).bind((function(e){return cr(Yt(e)).map((function(t){var n=t.dom.offsetTop,r=e.dom.offsetTop,o=e.dom.offsetHeight
return n<=r?-o:0}))})).getOr(0):0}(At.fromDom(t))}return{x:r,y:o}},lr={},dr={exports:lr};(function(e,t,n,r){(function(r,o){"object"==typeof t&&void 0!==n?n.exports=o():"function"==typeof e&&e.amd?e(o):(r="undefined"!=typeof globalThis?globalThis:r||self).EphoxContactWrapper=o()})(this,(function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t={exports:{}};(function(t){(function(e){var n=setTimeout
function r(){}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function i(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,o._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(o){return void u(t.promise,o)}a(t.promise,r)}else(1===e._state?a:u)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if(t instanceof o)return e._state=3,e._value=t,void c(e)
if("function"==typeof n)return void f((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(a){u(e,a)}var r,i}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn((function(){e._handled||o._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t])
e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1
try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(r){if(n)return
n=!0,u(t,r)}}o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r)
return i(this,new s(e,t,n)),n},o.all=function(e){var t=Array.prototype.slice.call(e)
return new o((function(e,n){if(0===t.length)return e([])
var r=t.length
function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then
if("function"==typeof u)return void u.call(a,(function(e){o(i,e)}),n)}t[i]=a,0==--r&&e(t)}catch(c){n(c)}}for(var i=0;i<t.length;i++)o(i,t[i])}))},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},o._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){n(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},t.exports?t.exports=o:e.Promise||(e.Promise=o)})(e)})(t)
var n=t.exports
return{boltExport:("undefined"!=typeof window?window:Function("return this;")()).Promise||n}}))})(void 0,lr,dr)
var mr=dr.exports.boltExport,gr=function(e){var t=L.none(),n=[],r=function(e){o()?a(e):n.push(e)},o=function(){return t.isSome()},i=function(e){V(e,a)},a=function(e){t.each((function(t){setTimeout((function(){e(t)}),0)}))}
return e((function(e){o()||(t=L.some(e),i(n),n=[])})),{get:r,map:function(e){return gr((function(t){r((function(n){t(e(n))}))}))},isReady:o}},pr={nu:gr,pure:function(e){return gr((function(t){t(e)}))}},hr=function(e){setTimeout((function(){throw e}),0)},vr=function(e){var t=function(t){e().then(t,hr)}
return{map:function(t){return vr((function(){return e().then(t)}))},bind:function(t){return vr((function(){return e().then((function(e){return t(e).toPromise()}))}))},anonBind:function(t){return vr((function(){return e().then((function(){return t.toPromise()}))}))},toLazy:function(){return pr.nu(t)},toCached:function(){var t=null
return vr((function(){return null===t&&(t=e()),t}))},toPromise:e,get:t}},br=function(e){return vr((function(){return new mr(e)}))},yr=function(e,t){return t((function(t){var n=[],r=0
0===e.length?t([]):V(e,(function(o,i){o.get(function(o){return function(i){n[o]=i,++r>=e.length&&t(n)}}(i))}))}))},Cr=function(e){return{isValue:T,isError:D,getOr:S(e),getOrThunk:S(e),getOrDie:S(e),or:function(t){return Cr(e)},orThunk:function(t){return Cr(e)},fold:function(t,n){return n(e)},map:function(t){return Cr(t(e))},mapError:function(t){return Cr(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOptional:function(){return L.some(e)}}},xr=function(e){return{isValue:D,isError:T,getOr:k,getOrThunk:function(e){return e()},getOrDie:function(){return(t=String(e),function(){throw new Error(t)})()
var t},or:k,orThunk:function(e){return e()},fold:function(t,n){return t(e)},map:function(t){return xr(e)},mapError:function(t){return xr(t(e))},each:C,bind:function(t){return xr(e)},exists:D,forall:T,toOptional:L.none}},wr={value:Cr,error:xr,fromOption:function(e,t){return e.fold((function(){return xr(t)}),Cr)}},Sr=function(e){if(!d(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
return V(e,(function(r,o){var i=ce(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],u=r[a]
if(void 0!==n[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!d(u))throw new Error("case arguments must be an array")
t.push(a),n[a]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var i=n.length
if(i!==u.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+u.length+" ("+u+"), got "+i)
var c=function(e){var r=ce(e)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
if(!Z(t,(function(e){return z(r,e)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return e[a].apply(null,n)}
return{fold:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(t.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+t.length)
var i=t[o]
return i.apply(null,n)},match:c,log:function(e){console.log(e,{constructors:t,constructor:a,params:n})}}}})),n}
Sr([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}])
var kr=function(e){return e.fold(k,k)}
function Nr(e,t,n,r,o){return e(n,r)?L.some(n):b(o)&&o(n)?L.none():t(n,r,o)}var Er,_r,Ar,Rr,Dr,Tr,Or,Br,Pr,Lr,Ir,Mr,Fr,Ur,zr,Hr,jr,Vr,qr,$r,Wr=function(e,t,n){for(var r=e.dom,o=b(n)?n:D;r.parentNode;){r=r.parentNode
var i=At.fromDom(r)
if(t(i))return L.some(i)
if(o(i))break}return L.none()},Kr=function(e,t,n){return Nr((function(e,t){return t(e)}),Wr,e,t,n)},Xr=function(e,t){return G(e.dom.childNodes,(function(e){return t(At.fromDom(e))})).map(At.fromDom)},Yr=function(e,t,n){return Wr(e,(function(e){return Dt(e,t)}),n)},Gr=function(e,t){return function(e,t){var n=void 0===t?document:t.dom
return Tt(n)?L.none():L.from(n.querySelector(e)).map(At.fromDom)}(t,e)},Jr=function(e,t,n){return Nr((function(e,t){return Dt(e,t)}),Yr,e,t,n)},Qr=window.Promise?window.Promise:mr,Zr=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},eo=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},to=function(e,t){var n,r=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
clearTimeout(n),n=Zr((function(){e.apply(this,r)}),t)}
return r.stop=function(){clearTimeout(n)},r},no={requestAnimationFrame:function(e,t){Er?Er.then(e):Er=new Qr((function(e){t||(t=document.body),function(e,t){for(var n=window.requestAnimationFrame,r=["ms","moz","webkit"],o=0;o<r.length&&!n;o++)n=window[r[o]+"RequestAnimationFrame"]
n||(n=function(e){window.setTimeout(e,0)}),n(e,t)}(e,t)})).then(e)},setTimeout:Zr,setInterval:eo,setEditorTimeout:function(e,t,n){return Zr((function(){e.removed||t()}),n)},setEditorInterval:function(e,t,n){var r=eo((function(){e.removed?clearInterval(r):t()}),n)
return r},debounce:to,throttle:to,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}},ro=function(e,t){void 0===t&&(t={})
var n=0,r={},o=At.fromDom(e),i=Vt(o),a=t.maxLoadTime||5e3,u=function(u,c,s){var f,l=Et._addCacheSuffix(u),d=function(e){return ve(r,e).getOrThunk((function(){return{id:"mce-u"+n++,passed:[],failed:[],count:0}}))}(l)
r[l]=d,d.count++
var m=function(e,t){for(var n=e.length;n--;)e[n]()
d.status=t,d.passed=[],d.failed=[],f&&(f.onload=null,f.onerror=null,f=null)},g=function(){return m(d.passed,2)},p=function(){return m(d.failed,3)},h=function(){var t
t=h,function(){for(var t=e.styleSheets,n=t.length;n--;){var r=t[n].ownerNode
if(r&&r.id===f.id)return g(),!0}return!1}()||(Date.now()-y<a?no.setTimeout(t):p())}
if(c&&d.passed.push(c),s&&d.failed.push(s),1!==d.status)if(2!==d.status)if(3!==d.status){d.status=1
var v=At.fromTag("link",i.dom)
Qn(v,{rel:"stylesheet",type:"text/css",id:d.id})
var b,y=Date.now()
t.contentCssCors&&Jn(v,"crossOrigin","anonymous"),t.referrerPolicy&&Jn(v,"referrerpolicy",t.referrerPolicy),(f=v.dom).onload=h,f.onerror=p,b=v,dn(an(o),b),Jn(v,"href",l)}else p()
else g()},c=function(e){return br((function(t){u(e,x(t,S(wr.value(e))),x(t,S(wr.error(e))))}))},s=function(e){var t=Et._addCacheSuffix(e)
ve(r,t).each((function(e){var n,i
0===--e.count&&(delete r[t],n=e.id,i=an(o),Gr(i,"#"+n).each(pn))}))}
return{load:u,loadAll:function(e,t,n){var r;(r=j(e,c),yr(r,br)).get((function(e){var r=$(e,(function(e){return e.isValue()}))
r.fail.length>0?n(r.fail.map(kr)):t(r.pass.map(kr))}))},unload:s,unloadAll:function(e){V(e,(function(e){s(e)}))},_setReferrerPolicy:function(e){t.referrerPolicy=e}}},oo=function(){var e=new WeakMap
return{forElement:function(t,n){var r=on(t).dom
return L.from(e.get(r)).getOrThunk((function(){var t=ro(r,n)
return e.set(r,t),t}))}}}(),io=function(){function e(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}return e.prototype.current=function(){return this.node},e.prototype.next=function(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node},e.prototype.prev=function(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node},e.prototype.prev2=function(e){return this.node=this.findPreviousNode(this.node,"lastChild","previousSibling",e),this.node},e.prototype.findSibling=function(e,t,n,r){var o,i
if(e){if(!r&&e[t])return e[t]
if(e!==this.rootNode){if(o=e[n])return o
for(i=e.parentNode;i&&i!==this.rootNode;i=i.parentNode)if(o=i[n])return o}}},e.prototype.findPreviousNode=function(e,t,n,r){var o,i,a
if(e){if(o=e[n],this.rootNode&&o===this.rootNode)return
if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a
return o}if((i=e.parentNode)&&i!==this.rootNode)return i}},e}(),ao=function(e){var t
return function(n){return t=t||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r]
n[String(i)]=t(i,r)}return n}(e,T),be(t,Lt(n))}},uo=ao(["h1","h2","h3","h4","h5","h6"]),co=ao(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),so=function(e){return Ft(e)&&!co(e)},fo=function(e){return Ft(e)&&"br"===Lt(e)},lo=ao(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),mo=ao(["ul","ol","dl"]),go=ao(["li","dd","dt"]),po=ao(["thead","tbody","tfoot"]),ho=ao(["td","th"]),vo=ao(["pre","script","textarea","style"]),bo=" ",yo="\ufeff",Co=function(e){return"\ufeff"===e},xo=function(e){return e.replace(/\uFEFF/g,"")},wo=Rn,So=Mn,ko=function(e){return So(e)&&(e=e.parentNode),wo(e)&&e.hasAttribute("data-mce-caret")},No=function(e){return So(e)&&Co(e.data)},Eo=function(e){return ko(e)||No(e)},_o=function(e){return e.firstChild!==e.lastChild||!Hn(e.firstChild)},Ao=function(e){var t=e.container()
return!!Mn(t)&&(t.data.charAt(e.offset())===yo||e.isAtStart()&&No(t.previousSibling))},Ro=function(e){var t=e.container()
return!!Mn(t)&&(t.data.charAt(e.offset()-1)===yo||e.isAtEnd()&&No(t.nextSibling))},Do=function(e,t,n){var r,o=t.ownerDocument.createElement(e)
o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(((r=document.createElement("br")).setAttribute("data-mce-bogus","1"),r))
var i=t.parentNode
return n?i.insertBefore(o,t):t.nextSibling?i.insertBefore(o,t.nextSibling):i.appendChild(o),o},To=function(e){return So(e)&&e.data[0]===yo},Oo=function(e){return So(e)&&e.data[e.data.length-1]===yo},Bo=function(e){return e&&e.hasAttribute("data-mce-caret")?(t=e.getElementsByTagName("br"),n=t[t.length-1],Bn(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null
var t,n},Po=function(e){return ko(e.startContainer)},Lo=Vn,Io=qn,Mo=Hn,Fo=Mn,Uo=Dn(["script","style","textarea"]),zo=Dn(["img","input","textarea","hr","iframe","video","audio","object","embed"]),Ho=Dn(["table"]),jo=Eo,Vo=function(e){return!jo(e)&&(Fo(e)?!Uo(e.parentNode):zo(e)||Mo(e)||Ho(e)||qo(e))},qo=function(e){return!1===function(e){return Rn(e)&&"true"===e.getAttribute("unselectable")}(e)&&Io(e)},$o=function(e,t){return Vo(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(qo(e))return!1
if(Lo(e))return!0}return!0}(e,t)},Wo=/^[ \t\r\n]*$/,Ko=function(e){return Wo.test(e)},Xo=function(e,t){var n,r,o,i=At.fromDom(t),a=At.fromDom(e)
return n=a,r="pre,code",o=E(Ot,i),Yr(n,r,o).isSome()},Yo=function(e,t){return Vo(e)&&!1===function(e,t){return Mn(e)&&Ko(e.data)&&!1===Xo(e,t)}(e,t)||function(e){return Rn(e)&&"A"===e.nodeName&&!e.hasAttribute("href")&&(e.hasAttribute("name")||e.hasAttribute("id"))}(e)||Go(e)},Go=On("data-mce-bookmark"),Jo=On("data-mce-bogus"),Qo=(_r="data-mce-bogus",Ar="all",function(e){return Rn(e)&&e.getAttribute(_r)===Ar}),Zo=function(e,t){return void 0===t&&(t=!0),function(e,t){var n=0
if(Yo(e,e))return!1
var r=e.firstChild
if(!r)return!0
var o=new io(r,e)
do{if(t){if(Qo(r)){r=o.next(!0)
continue}if(Jo(r)){r=o.next()
continue}}if(Hn(r))n++,r=o.next()
else{if(Yo(r,e))return!1
r=o.next()}}while(r)
return n<=1}(e.dom,t)},ei=function(e,t){return v(e)&&(Yo(e,t)||so(At.fromDom(e)))},ti=function(e){return function(e){return"span"===e.nodeName.toLowerCase()}(e)&&"bookmark"===e.getAttribute("data-mce-type")},ni=function(e,t){return Mn(e)&&e.data.length>0&&function(e,t){var n=new io(e,t).prev(!1),r=new io(e,t).next(!1),o=p(n)||ei(n,t),i=p(r)||ei(r,t)
return o&&i}(e,t)},ri=function(e,t,n){var r=n||t
if(Rn(t)&&ti(t))return t
for(var o=t.childNodes,i=o.length-1;i>=0;i--)ri(e,o[i],r)
if(Rn(t)){var a=t.childNodes
1===a.length&&ti(a[0])&&t.parentNode.insertBefore(a[0],t)}return function(e){return zn(e)||Un(e)}(t)||Yo(t,r)||function(e){return!!Rn(e)&&e.childNodes.length>0}(t)||ni(t,r)||e.remove(t),t},oi=Et.makeMap,ii=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,ai=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,ui=/[<>&\"\']/g,ci=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,si={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},fi={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},li={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},di=function(e,t){var n,r,o,i={}
if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),fi[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r)
return i}},mi=di("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),gi=function(e,t){return e.replace(t?ii:ai,(function(e){return fi[e]||e}))},pi=function(e,t){return e.replace(t?ii:ai,(function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":fi[e]||"&#"+e.charCodeAt(0)+";"}))},hi=function(e,t,n){return n=n||mi,e.replace(t?ii:ai,(function(e){return fi[e]||n[e]||e}))},vi={encodeRaw:gi,encodeAllRaw:function(e){return(""+e).replace(ui,(function(e){return fi[e]||e}))},encodeNumeric:pi,encodeNamed:hi,getEncodeFunc:function(e,t){var n=di(t)||mi,r=oi(e.replace(/\+/g,","))
return r.named&&r.numeric?function(e,t){return e.replace(t?ii:ai,(function(e){return void 0!==fi[e]?fi[e]:void 0!==n[e]?n[e]:e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"}))}:r.named?t?function(e,t){return hi(e,t,n)}:hi:r.numeric?pi:gi},decode:function(e){return e.replace(ci,(function(e,t){return t?(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))>65535?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):si[t]||String.fromCharCode(t):li[e]||mi[e]||function(e){var t=At.fromTag("div").dom
return t.innerHTML=e,t.textContent||t.innerText||e}(e)}))}},bi={},yi={},Ci=Et.makeMap,xi=Et.each,wi=Et.extend,Si=Et.explode,ki=Et.inArray,Ni=function(e,t){return(e=Et.trim(e))?e.split(t||" "):[]},Ei=function(e,t){var n
return e&&(n={},"string"==typeof e&&(e={"*":e}),xi(e,(function(e,r){n[r]=n[r.toUpperCase()]="map"===t?Ci(e,/[, ]/):Si(e,/[, ]/)}))),n},_i=function(e){var t={},n={},r=[],o={},i={},a=function(t,n,r){var o=e[t]
return o?o=Ci(o,/[, ]/,Ci(o.toUpperCase(),/[, ]/)):(o=bi[t])||(o=Ci(n," ",Ci(n.toUpperCase()," ")),o=wi(o,r),bi[t]=o),o},u=function(e){var t,n,r,o,i,a,u={},c=function(e,n,r){var o,i,a,c=function(e,t){var n,r,o={}
for(n=0,r=e.length;n<r;n++)o[e[n]]=t||{}
return o}
n=n||"","string"==typeof(r=r||[])&&(r=Ni(r))
var s=Ni(e)
for(o=s.length;o--;)a={attributes:c(i=Ni([t,n].join(" "))),attributesOrder:i,children:c(r,yi)},u[s[o]]=a},s=function(e,t){var n,r,o,i,a=Ni(e)
n=a.length
for(var c=Ni(t);n--;)for(r=u[a[n]],o=0,i=c.length;o<i;o++)r.attributes[c[o]]={},r.attributesOrder.push(c[o])}
if(bi[e])return bi[e]
if(t="id accesskey class dir lang style tabindex title role",n="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",r="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(t+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",n+=" article aside details dialog figure main header footer hgroup section nav",r+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(t+=" xml:lang",r=[r,a="acronym applet basefont big font strike tt"].join(" "),xi(Ni(a),(function(e){c(e,"",r)})),n=[n,i="center dir isindex noframes"].join(" "),o=[n,r].join(" "),xi(Ni(i),(function(e){c(e,"",o)}))),o=o||[n,r].join(" "),c("html","manifest","head body"),c("head","","base command link meta noscript script style title"),c("title hr noscript br"),c("base","href target"),c("link","href rel media hreflang type sizes hreflang"),c("meta","name http-equiv content charset"),c("style","media type scoped"),c("script","src async defer type charset"),c("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",o),c("address dt dd div caption","",o),c("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",r),c("blockquote","cite",o),c("ol","reversed start type","li"),c("ul","","li"),c("li","value",o),c("dl","","dt dd"),c("a","href target rel media hreflang type",r),c("q","cite",r),c("ins del","cite datetime",o),c("img","src sizes srcset alt usemap ismap width height"),c("iframe","src name width height",o),c("embed","src type width height"),c("object","data type typemustmatch name usemap form width height",[o,"param"].join(" ")),c("param","name value"),c("map","name",[o,"area"].join(" ")),c("area","alt coords shape href target rel media hreflang type"),c("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),c("colgroup","span","col"),c("col","span"),c("tbody thead tfoot","","tr"),c("tr","","td th"),c("td","colspan rowspan headers",o),c("th","colspan rowspan headers scope abbr",o),c("form","accept-charset action autocomplete enctype method name novalidate target",o),c("fieldset","disabled form name",[o,"legend"].join(" ")),c("label","form for",r),c("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),c("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?o:r),c("select","disabled form multiple name required size","option optgroup"),c("optgroup","disabled label","option"),c("option","disabled label selected value"),c("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),c("menu","type label",[o,"li"].join(" ")),c("noscript","",o),"html4"!==e&&(c("wbr"),c("ruby","",[r,"rt rp"].join(" ")),c("figcaption","",o),c("mark rt rp summary bdi","",r),c("canvas","width height",o),c("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[o,"track source"].join(" ")),c("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[o,"track source"].join(" ")),c("picture","","img source"),c("source","src srcset type media sizes"),c("track","kind src srclang label default"),c("datalist","",[r,"option"].join(" ")),c("article section nav aside main header footer","",o),c("hgroup","","h1 h2 h3 h4 h5 h6"),c("figure","",[o,"figcaption"].join(" ")),c("time","datetime",r),c("dialog","open",o),c("command","type label icon disabled checked radiogroup command"),c("output","for form name",r),c("progress","value max",r),c("meter","value min max low high optimum",r),c("details","open",[o,"summary"].join(" ")),c("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e){s("script","language xml:space"),s("style","xml:space"),s("object","declare classid code codebase codetype archive standby align border hspace vspace"),s("embed","align name hspace vspace"),s("param","valuetype type"),s("a","charset name rev shape coords"),s("br","clear"),s("applet","codebase archive code object alt name width height align hspace vspace"),s("img","name longdesc align border hspace vspace"),s("iframe","longdesc frameborder marginwidth marginheight scrolling align"),s("font basefont","size color face"),s("input","usemap align"),s("select"),s("textarea"),s("h1 h2 h3 h4 h5 h6 div p legend caption","align"),s("ul","type compact"),s("li","type"),s("ol dl menu dir","compact"),s("pre","width xml:space"),s("hr","align noshade size width"),s("isindex","prompt"),s("table","summary width frame rules cellspacing cellpadding align bgcolor"),s("col","width align char charoff valign"),s("colgroup","width align char charoff valign"),s("thead","align char charoff valign"),s("tr","align char charoff valign bgcolor"),s("th","axis align char charoff valign nowrap bgcolor width height"),s("form","accept"),s("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),s("tfoot","align char charoff valign")
s("tbody","align char charoff valign"),s("area","nohref"),s("body","background bgcolor text link vlink alink")}return"html4"!==e&&(s("input button select textarea","autofocus"),s("input textarea","placeholder"),s("a","download"),s("link script img","crossorigin"),s("img","loading"),s("iframe","sandbox seamless allowfullscreen loading")),xi(Ni("a form meter progress dfn"),(function(e){u[e]&&delete u[e].children[e]})),delete u.caption.children.table,delete u.script,bi[e]=u,u}((e=e||{}).schema)
!1===e.verify_html&&(e.valid_elements="*[*]")
var c=Ei(e.valid_styles),s=Ei(e.invalid_styles,"map"),f=Ei(e.valid_classes,"map"),l=a("whitespace_elements","pre script noscript style textarea video audio iframe object code"),d=a("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),m=a("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),g=a("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),p="td th iframe video audio object script code",h=a("non_empty_elements",p+" pre",m),v=a("move_caret_before_on_enter_elements",p+" table",m),b=a("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),y=a("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",b),C=a("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
xi((e.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),(function(e){i[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var x=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},w=function(e){var n,o,i,a,u,c,s,f,l,d,m,g,p,h,v,b,y,C,w=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,S=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,k=/[*?+]/
if(e){var N=Ni(e,",")
for(t["@"]&&(b=t["@"].attributes,y=t["@"].attributesOrder),n=0,o=N.length;n<o;n++)if(u=w.exec(N[n])){if(h=u[1],l=u[2],v=u[3],f=u[5],c={attributes:g={},attributesOrder:p=[]},"#"===h&&(c.paddEmpty=!0),"-"===h&&(c.removeEmpty=!0),"!"===u[4]&&(c.removeEmptyAttrs=!0),b&&(fe(b,(function(e,t){g[t]=e})),p.push.apply(p,y)),f)for(i=0,a=(f=Ni(f,"|")).length;i<a;i++)if(u=S.exec(f[i])){if(s={},m=u[1],d=u[2].replace(/[\\:]:/g,":"),h=u[3],C=u[4],"!"===m&&(c.attributesRequired=c.attributesRequired||[],c.attributesRequired.push(d),s.required=!0),"-"===m){delete g[d],p.splice(ki(p,d),1)
continue}h&&("="===h&&(c.attributesDefault=c.attributesDefault||[],c.attributesDefault.push({name:d,value:C}),s.defaultValue=C),":"===h&&(c.attributesForced=c.attributesForced||[],c.attributesForced.push({name:d,value:C}),s.forcedValue=C),"<"===h&&(s.validValues=Ci(C,"?"))),k.test(d)?(c.attributePatterns=c.attributePatterns||[],s.pattern=x(d),c.attributePatterns.push(s)):(g[d]||p.push(d),g[d]=s)}b||"@"!==l||(b=g,y=p),v&&(c.outputName=l,t[v]=c),k.test(l)?(c.pattern=x(l),r.push(c)):t[l]=c}}},k=function(e){t={},r=[],w(e),xi(u,(function(e,t){n[t]=e.children}))},N=function(e){var r=/^(~)?(.+)$/
e&&(bi.text_block_elements=bi.block_elements=null,xi(Ni(e,","),(function(e){var i=r.exec(e),a="~"===i[1],u=a?"span":"div",c=i[2]
if(n[c]=n[u],o[c]=u,a||(y[c.toUpperCase()]={},y[c]={}),!t[c]){var s=t[u]
delete(s=wi({},s)).removeEmptyAttrs,delete s.removeEmpty,t[c]=s}xi(n,(function(e,t){e[u]&&(n[t]=e=wi({},n[t]),e[c]=e[u])}))})))},E=function(t){var r=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/
bi[e.schema]=null,t&&xi(Ni(t,","),(function(e){var t,o,i=r.exec(e)
i&&(o=i[1],t=o?n[i[2]]:n[i[2]]={"#comment":{}},t=n[i[2]],xi(Ni(i[3],"|"),(function(e){"-"===o?delete t[e]:t[e]={}})))}))},_=function(e){var n,o=t[e]
if(o)return o
for(n=r.length;n--;)if((o=r[n]).pattern.test(e))return o}
e.valid_elements?k(e.valid_elements):(xi(u,(function(e,r){t[r]={attributes:e.attributes,attributesOrder:e.attributesOrder},n[r]=e.children})),"html5"!==e.schema&&xi(Ni("strong/b em/i"),(function(e){var n=Ni(e,"/")
t[n[1]].outputName=n[0]})),xi(Ni("ol ul sub sup blockquote span font a table tbody strong em b i"),(function(e){t[e]&&(t[e].removeEmpty=!0)})),xi(Ni("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(function(e){t[e].paddEmpty=!0})),xi(Ni("span"),(function(e){t[e].removeEmptyAttrs=!0}))),N(e.custom_elements),E(e.valid_children),w(e.extended_valid_elements),E("+ol[ul|ol],+ul[ul|ol]"),xi({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},(function(e,n){t[n]&&(t[n].parentsRequired=Ni(e))})),e.invalid_elements&&xi(Si(e.invalid_elements),(function(e){t[e]&&delete t[e]})),_("span")||w("span[!data-mce-type|*]")
var A=S(c),R=S(s),D=S(f),T=S(g),O=S(y),B=S(b),P=S(C),L=S(m),I=S(d),M=S(h),F=S(v),U=S(l),z=S(i),H=S(o)
return{children:n,elements:t,getValidStyles:A,getValidClasses:D,getBlockElements:O,getInvalidStyles:R,getShortEndedElements:L,getTextBlockElements:B,getTextInlineElements:P,getBoolAttrs:T,getElementRule:_,getSelfClosingElements:I,getNonEmptyElements:M,getMoveCaretBeforeOnEnterElements:F,getWhiteSpaceElements:U,getSpecialElements:z,isValidChild:function(e,t){var r=n[e.toLowerCase()]
return!(!r||!r[t.toLowerCase()])},isValid:function(e,t){var n,r,o=_(e)
if(o){if(!t)return!0
if(o.attributes[t])return!0
if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:H,addValidElements:w,setValidElements:k,addCustomElements:N,addValidChildren:E}},Ai=function(e,t,n,r){var o=function(e){return(e=parseInt(e,10).toString(16)).length>1?e:"0"+e}
return"#"+o(t)+o(n)+o(r)},Ri=function(e,t){var n,r,o,i=this,a=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,u=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,c=/\s*([^:]+):\s*([^;]+);?/g,s=/\s+$/,f={},l="\ufeff"
e=e||{},t&&(r=t.getValidStyles(),o=t.getInvalidStyles())
var d="\\\" \\' \\; \\: ; : \ufeff".split(" ")
for(n=0;n<d.length;n++)f[d[n]]=l+n,f[l+n]=d[n]
return{toHex:function(e){return e.replace(a,Ai)},parse:function(t){var r,o,d,m,g,p,h,v,b={},y=e.url_converter,C=e.url_converter_scope||i,x=function(e,t,r){var o=b[e+"-top"+t]
if(o){var i=b[e+"-right"+t]
if(i){var a=b[e+"-bottom"+t]
if(a){var u=b[e+"-left"+t]
if(u){var c=[o,i,a,u]
for(n=c.length-1;n--&&c[n]===c[n+1];);n>-1&&r||(b[e+t]=-1===n?c[0]:c.join(" "),delete b[e+"-top"+t],delete b[e+"-right"+t],delete b[e+"-bottom"+t],delete b[e+"-left"+t])}}}}},w=function(e){var t,n=b[e]
if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return!1
return b[e]=n[0],!0}},S=function(e){return m=!0,f[e]},k=function(e,t){return m&&(e=e.replace(/\uFEFF[0-9]/g,(function(e){return f[e]}))),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e},N=function(e){return String.fromCharCode(parseInt(e.slice(1),16))},E=function(e){return e.replace(/\\[0-9a-f]+/gi,N)},_=function(t,n,r,o,i,a){if(i=i||a)return"'"+(i=k(i)).replace(/\'/g,"\\'")+"'"
if(n=k(n||r||o),!e.allow_script_urls){var u=n.replace(/[\s\r\n]+/g,"")
if(/(java|vb)script:/i.test(u))return""
if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(u))return""}return y&&(n=y.call(C,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}
if(t){for(t=(t=t.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,S).replace(/\"[^\"]+\"|\'[^\']+\'/g,(function(e){return e.replace(/[;:]/g,S)}));r=c.exec(t);)if(c.lastIndex=r.index+r[0].length,o=r[1].replace(s,"").toLowerCase(),d=r[2].replace(s,""),o&&d){if(o=E(o),d=E(d),-1!==o.indexOf(l)||-1!==o.indexOf('"'))continue
if(!e.allow_script_urls&&("behavior"===o||/expression\s*\(|\/\*|\*\//.test(d)))continue
"font-weight"===o&&"700"===d?d="bold":"color"!==o&&"background-color"!==o||(d=d.toLowerCase()),d=(d=d.replace(a,Ai)).replace(u,_),b[o]=m?k(d,!0):d}x("border","",!0),x("border","-width"),x("border","-color"),x("border","-style"),x("padding",""),x("margin",""),g="border",h="border-style",v="border-color",w(p="border-width")&&w(h)&&w(v)&&(b[g]=b[p]+" "+b[h]+" "+b[v],delete b[p],delete b[h],delete b[v]),"medium none"===b.border&&delete b.border,"none"===b["border-image"]&&delete b["border-image"]}return b},serialize:function(e,t){var n="",i=function(t){var o,i=r[t]
if(i)for(var a=0,u=i.length;a<u;a++)t=i[a],(o=e[t])&&(n+=(n.length>0?" ":"")+t+": "+o+";")}
return t&&r?(i("*"),i(t)):fe(e,(function(e,r){!e||o&&!function(e,t){var n=o["*"]
return!(n&&n[e]||(n=o[t])&&n[e])}(r,t)||(n+=(n.length>0?" ":"")+r+": "+e+";")})),n}}},Di={keyLocation:!0,layerX:!0,layerY:!0,returnValue:!0,webkitMovementX:!0,webkitMovementY:!0,keyIdentifier:!0,mozPressure:!0},Ti=function(e){return e instanceof Event||b(e.initEvent)},Oi=function(e,t,n,r){var o,i=function(e,t){var n=null!=t?t:{}
for(var r in e)be(Di,r)||(n[r]=e[r])
return v(n.composedPath)&&(n.composedPath=function(){return e.composedPath()}),n}(t,r)
return i.type=e,h(i.target)&&(i.target=null!==(o=i.srcElement)&&void 0!==o?o:n),function(e){return h(e.preventDefault)||Ti(e)}(t)&&(i.preventDefault=function(){i.defaultPrevented=!0,i.isDefaultPrevented=T,b(t.preventDefault)?t.preventDefault():Ti(t)&&(t.returnValue=!1)},i.stopPropagation=function(){i.cancelBubble=!0,i.isPropagationStopped=T,b(t.stopPropagation)?t.stopPropagation():Ti(t)&&(t.cancelBubble=!0)},i.stopImmediatePropagation=function(){i.isImmediatePropagationStopped=T,i.stopPropagation()},function(e){return e.isDefaultPrevented===T||e.isDefaultPrevented===D}(i)||(i.isDefaultPrevented=!0===i.defaultPrevented?T:D,i.isPropagationStopped=!0===i.cancelBubble?T:D,i.isImmediatePropagationStopped=D)),i},Bi=/^(?:mouse|contextmenu)|click/,Pi=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Li=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},Ii=function(e,t){var n=Oi(e.type,e,document,t)
if(function(e){return v(e)&&Bi.test(e.type)}(e)&&p(e.pageX)&&!p(e.clientX)){var r=n.target.ownerDocument||document,o=r.documentElement,i=r.body,a=n
a.pageX=e.clientX+(o&&o.scrollLeft||i&&i.scrollLeft||0)-(o&&o.clientLeft||i&&i.clientLeft||0),a.pageY=e.clientY+(o&&o.scrollTop||i&&i.scrollTop||0)-(o&&o.clientTop||i&&i.clientTop||0)}return p(n.metaKey)&&(n.metaKey=!1),n},Mi=function(e,t,n){var r=e.document,o={type:"ready"}
if(n.domLoaded)t(o)
else{var i=function(){Li(e,"DOMContentLoaded",i),Li(e,"load",i),n.domLoaded||(n.domLoaded=!0,t(o)),e=null}
"complete"===r.readyState||"interactive"===r.readyState&&r.body?i():Pi(e,"DOMContentLoaded",i),n.domLoaded||Pi(e,"load",i)}},Fi=function(){function e(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}return e.prototype.bind=function(e,t,n,r){var o,i,a,u,c,s,f,l=this,d=window,m=function(e){l.executeHandlers(Ii(e||d.event),o)}
if(e&&3!==e.nodeType&&8!==e.nodeType){e[l.expando]?o=e[l.expando]:(o=l.count++,e[l.expando]=o,l.events[o]={}),r=r||e
var g=t.split(" ")
for(a=g.length;a--;)s=m,c=f=!1,"DOMContentLoaded"===(u=g[a])&&(u="ready"),l.domLoaded&&"ready"===u&&"complete"===e.readyState?n.call(r,Ii({type:u})):(l.hasMouseEnterLeave||(c=l.mouseEnterLeave[u])&&(s=function(e){var t=e.currentTarget,n=e.relatedTarget
if(n&&t.contains)n=t.contains(n)
else for(;n&&n!==t;)n=n.parentNode
n||((e=Ii(e||d.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,l.executeHandlers(e,o))}),l.hasFocusIn||"focusin"!==u&&"focusout"!==u||(f=!0,c="focusin"===u?"focus":"blur",s=function(e){(e=Ii(e||d.event)).type="focus"===e.type?"focusin":"focusout",l.executeHandlers(e,o)}),(i=l.events[o][u])?"ready"===u&&l.domLoaded?n(Ii({type:u})):i.push({func:n,scope:r}):(l.events[o][u]=i=[{func:n,scope:r}],i.fakeName=c,i.capture=f,i.nativeHandler=s,"ready"===u?Mi(e,s,l):Pi(e,c||u,s,f)))
return e=i=null,n}},e.prototype.unbind=function(e,t,n){var r,o,i,a,u
if(!e||3===e.nodeType||8===e.nodeType)return this
var c=e[this.expando]
if(c){if(u=this.events[c],t){var s=t.split(" ")
for(o=s.length;o--;)if(r=u[a=s[o]]){if(n)for(i=r.length;i--;)if(r[i].func===n){var f=r.nativeHandler,l=r.fakeName,d=r.capture;(r=r.slice(0,i).concat(r.slice(i+1))).nativeHandler=f,r.fakeName=l,r.capture=d,u[a]=r}n&&0!==r.length||(delete u[a],Li(e,r.fakeName||a,r.nativeHandler,r.capture))}}else fe(u,(function(t,n){Li(e,t.fakeName||n,t.nativeHandler,t.capture)})),u={}
for(a in u)if(be(u,a))return this
delete this.events[c]
try{delete e[this.expando]}catch(m){e[this.expando]=null}}return this},e.prototype.fire=function(e,t,n){var r
if(!e||3===e.nodeType||8===e.nodeType)return this
var o=Ii({type:t,target:e},n)
do{(r=e[this.expando])&&this.executeHandlers(o,r),e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow}while(e&&!o.isPropagationStopped())
return this},e.prototype.clean=function(e){var t,n
if(!e||3===e.nodeType||8===e.nodeType)return this
if(e[this.expando]&&this.unbind(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(this.unbind(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[this.expando]&&this.unbind(e)
return this},e.prototype.destroy=function(){this.events={}},e.prototype.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1},e.prototype.executeHandlers=function(e,t){var n=this.events[t],r=n&&n[e.type]
if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o]
if(a&&!1===a.func.call(a.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}},e.Event=new e,e}(),Ui="sizzle"+-new Date,zi=window.document,Hi=0,ji=0,Vi=wa(),qi=wa(),$i=wa(),Wi=function(e,t){return e===t&&(Fr=!0),0},Ki="undefined",Xi=1<<31,Yi={}.hasOwnProperty,Gi=[],Ji=Gi.pop,Qi=Gi.push,Zi=Gi.push,ea=Gi.slice,ta=Gi.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t
return-1},na="[\\x20\\t\\r\\n\\f]",ra="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oa="\\[[\\x20\\t\\r\\n\\f]*("+ra+")(?:"+na+"*([*^$|!~]?=)"+na+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ra+"))|)"+na+"*\\]",ia=":("+ra+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oa+")*)|.*)\\)|)",aa=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),ua=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),ca=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),sa=new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]","g"),fa=new RegExp(ia),la=new RegExp("^"+ra+"$"),da={ID:new RegExp("^#("+ra+")"),CLASS:new RegExp("^\\.("+ra+")"),TAG:new RegExp("^("+ra+"|[*])"),ATTR:new RegExp("^"+oa),PSEUDO:new RegExp("^"+ia),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},ma=/^(?:input|select|textarea|button)$/i,ga=/^h\d$/i,pa=/^[^{]+\{\s*\[native \w/,ha=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,va=/[+~]/,ba=/'|\\/g,ya=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig"),Ca=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)}
try{Zi.apply(Gi=ea.call(zi.childNodes),zi.childNodes),Gi[zi.childNodes.length].nodeType}catch(JE){Zi={apply:Gi.length?function(e,t){Qi.apply(e,ea.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var xa=function(e,t,n,r){var o,i,a,u,c,s,f,l,d,m
if((t?t.ownerDocument||t:zi)!==zr&&Ur(t),n=n||[],!e||"string"!=typeof e)return n
if(1!==(u=(t=t||zr).nodeType)&&9!==u)return[]
if(jr&&!r){if(o=ha.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n
if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&$r(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return Zi.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&Rr.getElementsByClassName)return Zi.apply(n,t.getElementsByClassName(a)),n}if(Rr.qsa&&(!Vr||!Vr.test(e))){if(l=f=Ui,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(s=Br(e),(f=t.getAttribute("id"))?l=f.replace(ba,"\\$&"):t.setAttribute("id",l),l="[id='"+l+"'] ",c=s.length;c--;)s[c]=l+Aa(s[c])
d=va.test(e)&&Ea(t.parentNode)||t,m=s.join(",")}if(m)try{return Zi.apply(n,d.querySelectorAll(m)),n}catch(g){}finally{f||t.removeAttribute("id")}}}return Lr(e.replace(aa,"$1"),t,n,r)}
function wa(){var e=[]
return function t(n,r){return e.push(n+" ")>Dr.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function Sa(e){return e[Ui]=!0,e}function ka(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Xi)-(~e.sourceIndex||Xi)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function Na(e){return Sa((function(t){return t=+t,Sa((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function Ea(e){return e&&typeof e.getElementsByTagName!==Ki&&e}function _a(){}function Aa(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function Ra(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=ji++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,c,s=[Hi,i]
if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if((u=(c=t[Ui]||(t[Ui]={}))[r])&&u[0]===Hi&&u[1]===i)return s[2]=u[2]
if(c[r]=s,s[2]=e(t,n,a))return!0}}}function Da(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1
return!0}:e[0]}function Ta(e,t,n,r,o){for(var i,a=[],u=0,c=e.length,s=null!=t;u<c;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),s&&t.push(u)))
return a}function Oa(e,t,n,r,o,i){return r&&!r[Ui]&&(r=Oa(r)),o&&!o[Ui]&&(o=Oa(o,i)),Sa((function(i,a,u,c){var s,f,l,d=[],m=[],g=a.length,p=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)xa(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),h=!e||!i&&t?p:Ta(p,d,e,u,c),v=n?o||(i?e:g||r)?[]:a:h
if(n&&n(h,v,u,c),r)for(s=Ta(v,m),r(s,[],u,c),f=s.length;f--;)(l=s[f])&&(v[m[f]]=!(h[m[f]]=l))
if(i){if(o||e){if(o){for(s=[],f=v.length;f--;)(l=v[f])&&s.push(h[f]=l)
o(null,v=[],s,c)}for(f=v.length;f--;)(l=v[f])&&(s=o?ta.call(i,l):d[f])>-1&&(i[s]=!(a[s]=l))}}else v=Ta(v===a?v.splice(g,v.length):v),o?o(null,a,v,c):Zi.apply(a,v)}))}function Ba(e){for(var t,n,r,o=e.length,i=Dr.relative[e[0].type],a=i||Dr.relative[" "],u=i?1:0,c=Ra((function(e){return e===t}),a,!0),s=Ra((function(e){return ta.call(t,e)>-1}),a,!0),f=[function(e,n,r){var o=!i&&(r||n!==Ir)||((t=n).nodeType?c(e,n,r):s(e,n,r))
return t=null,o}];u<o;u++)if(n=Dr.relative[e[u].type])f=[Ra(Da(f),n)]
else{if((n=Dr.filter[e[u].type].apply(null,e[u].matches))[Ui]){for(r=++u;r<o&&!Dr.relative[e[r].type];r++);return Oa(u>1&&Da(f),u>1&&Aa(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(aa,"$1"),n,u<r&&Ba(e.slice(u,r)),r<o&&Ba(e=e.slice(r)),r<o&&Aa(e))}f.push(n)}return Da(f)}Rr=xa.support={},Or=xa.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},Ur=xa.setDocument=function(e){var t,n=e?e.ownerDocument||e:zi,r=n.defaultView
return n!==zr&&9===n.nodeType&&n.documentElement?(zr=n,Hr=n.documentElement,jr=!Or(n),r&&r!==function(e){try{return e.top}catch(t){}return null}(r)&&(r.addEventListener?r.addEventListener("unload",(function(){Ur()}),!1):r.attachEvent&&r.attachEvent("onunload",(function(){Ur()}))),Rr.attributes=!0,Rr.getElementsByTagName=!0,Rr.getElementsByClassName=pa.test(n.getElementsByClassName),Rr.getById=!0,Dr.find.ID=function(e,t){if(typeof t.getElementById!==Ki&&jr){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},Dr.filter.ID=function(e){var t=e.replace(ya,Ca)
return function(e){return e.getAttribute("id")===t}},Dr.find.TAG=Rr.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Ki)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e)
if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n)
return r}return i},Dr.find.CLASS=Rr.getElementsByClassName&&function(e,t){if(jr)return t.getElementsByClassName(e)},qr=[],Vr=[],Rr.disconnectedMatch=!0,Vr=Vr.length&&new RegExp(Vr.join("|")),qr=qr.length&&new RegExp(qr.join("|")),t=pa.test(Hr.compareDocumentPosition),$r=t||pa.test(Hr.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},Wi=t?function(e,t){if(e===t)return Fr=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!Rr.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===zi&&$r(zi,e)?-1:t===n||t.ownerDocument===zi&&$r(zi,t)?1:Mr?ta.call(Mr,e)-ta.call(Mr,t):0:4&r?-1:1)}:function(e,t){if(e===t)return Fr=!0,0
var r,o=0,i=e.parentNode,a=t.parentNode,u=[e],c=[t]
if(!i||!a)return e===n?-1:t===n?1:i?-1:a?1:Mr?ta.call(Mr,e)-ta.call(Mr,t):0
if(i===a)return ka(e,t)
for(r=e;r=r.parentNode;)u.unshift(r)
for(r=t;r=r.parentNode;)c.unshift(r)
for(;u[o]===c[o];)o++
return o?ka(u[o],c[o]):u[o]===zi?-1:c[o]===zi?1:0},n):zr},xa.matches=function(e,t){return xa(e,null,null,t)},xa.matchesSelector=function(e,t){if((e.ownerDocument||e)!==zr&&Ur(e),t=t.replace(sa,"='$1']"),Rr.matchesSelector&&jr&&(!qr||!qr.test(t))&&(!Vr||!Vr.test(t)))try{var n=undefined.call(e,t)
if(n||Rr.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(JE){}return xa(t,zr,null,[e]).length>0},xa.contains=function(e,t){return(e.ownerDocument||e)!==zr&&Ur(e),$r(e,t)},xa.attr=function(e,t){(e.ownerDocument||e)!==zr&&Ur(e)
var n=Dr.attrHandle[t.toLowerCase()],r=n&&Yi.call(Dr.attrHandle,t.toLowerCase())?n(e,t,!jr):void 0
return void 0!==r?r:Rr.attributes||!jr?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},xa.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},xa.uniqueSort=function(e){var t,n=[],r=0,o=0
if(Fr=!Rr.detectDuplicates,Mr=!Rr.sortStable&&e.slice(0),e.sort(Wi),Fr){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)e.splice(n[r],1)}return Mr=null,e},Tr=xa.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=Tr(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=Tr(t)
return n},(Dr=xa.selectors={cacheLength:50,createPseudo:Sa,match:da,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ya,Ca),e[3]=(e[3]||e[4]||e[5]||"").replace(ya,Ca),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||xa.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&xa.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return da.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fa.test(n)&&(t=Br(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ya,Ca).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Vi[e+" "]
return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+na+"|$)"))&&Vi(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Ki&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=xa.attr(r,e)
return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,c){var s,f,l,d,m,g,p=i!==a?"nextSibling":"previousSibling",h=t.parentNode,v=u&&t.nodeName.toLowerCase(),b=!c&&!u
if(h){if(i){for(;p;){for(l=t;l=l[p];)if(u?l.nodeName.toLowerCase()===v:1===l.nodeType)return!1
g=p="only"===e&&!g&&"nextSibling"}return!0}if(g=[a?h.firstChild:h.lastChild],a&&b){for(m=(s=(f=h[Ui]||(h[Ui]={}))[e]||[])[0]===Hi&&s[1],d=s[0]===Hi&&s[2],l=m&&h.childNodes[m];l=++m&&l&&l[p]||(d=m=0)||g.pop();)if(1===l.nodeType&&++d&&l===t){f[e]=[Hi,m,d]
break}}else if(b&&(s=(t[Ui]||(t[Ui]={}))[e])&&s[0]===Hi)d=s[1]
else for(;(l=++m&&l&&l[p]||(d=m=0)||g.pop())&&((u?l.nodeName.toLowerCase()!==v:1!==l.nodeType)||!++d||(b&&((l[Ui]||(l[Ui]={}))[e]=[Hi,d]),l!==t)););return(d-=o)===r||d%r==0&&d/r>=0}}},PSEUDO:function(e,t){var n,r=Dr.pseudos[e]||Dr.setFilters[e.toLowerCase()]||xa.error("unsupported pseudo: "+e)
return r[Ui]?r(t):r.length>1?(n=[e,e,"",t],Dr.setFilters.hasOwnProperty(e.toLowerCase())?Sa((function(e,n){for(var o,i=r(e,t),a=i.length;a--;)e[o=ta.call(e,i[a])]=!(n[o]=i[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:Sa((function(e){var t=[],n=[],r=Pr(e.replace(aa,"$1"))
return r[Ui]?Sa((function(e,t,n,o){for(var i,a=r(e,null,o,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}})),has:Sa((function(e){return function(t){return xa(e,t).length>0}})),contains:Sa((function(e){return e=e.replace(ya,Ca),function(t){return(t.textContent||t.innerText||Tr(t)).indexOf(e)>-1}})),lang:Sa((function(e){return la.test(e||"")||xa.error("unsupported lang: "+e),e=e.replace(ya,Ca).toLowerCase(),function(t){var n
do{if(n=jr?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===Hr},focus:function(e){return e===zr.activeElement&&(!zr.hasFocus||zr.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!Dr.pseudos.empty(e)},header:function(e){return ga.test(e.nodeName)},input:function(e){return ma.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:Na((function(){return[0]})),last:Na((function(e,t){return[t-1]})),eq:Na((function(e,t,n){return[n<0?n+t:n]})),even:Na((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:Na((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:Na((function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r)
return e})),gt:Na((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=Dr.pseudos.eq,V(["radio","checkbox","file","password","image"],(function(e){Dr.pseudos[e]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(e)})),V(["submit","reset"],(function(e){Dr.pseudos[e]=function(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}(e)})),_a.prototype=Dr.filters=Dr.pseudos,Dr.setFilters=new _a,Br=xa.tokenize=function(e,t){var n,r,o,i,a,u,c,s=qi[e+" "]
if(s)return t?0:s.slice(0)
for(a=e,u=[],c=Dr.preFilter;a;){for(i in n&&!(r=ua.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=ca.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(aa," ")}),a=a.slice(n.length)),Dr.filter)Dr.filter.hasOwnProperty(i)&&(!(r=da[i].exec(a))||c[i]&&!(r=c[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length)))
if(!n)break}return t?a.length:a?xa.error(e):qi(e,u).slice(0)},Pr=xa.compile=function(e,t){var n,r=[],o=[],i=$i[e+" "]
if(!i){for(t||(t=Br(e)),n=t.length;n--;)(i=Ba(t[n]))[Ui]?r.push(i):o.push(i);(i=$i(e,function(e,t){var n=t.length>0,r=e.length>0,o=function(o,i,a,u,c){var s,f,l,d=0,m="0",g=o&&[],p=[],h=Ir,v=o||r&&Dr.find.TAG("*",c),b=Hi+=null==h?1:Math.random()||.1,y=v.length
for(c&&(Ir=i!==zr&&i);m!==y&&null!=(s=v[m]);m++){if(r&&s){for(f=0;l=e[f++];)if(l(s,i,a)){u.push(s)
break}c&&(Hi=b)}n&&((s=!l&&s)&&d--,o&&g.push(s))}if(d+=m,n&&m!==d){for(f=0;l=t[f++];)l(g,p,i,a)
if(o){if(d>0)for(;m--;)g[m]||p[m]||(p[m]=Ji.call(u))
p=Ta(p)}Zi.apply(u,p),c&&!o&&p.length>0&&d+t.length>1&&xa.uniqueSort(u)}return c&&(Hi=b,Ir=h),g}
return n?Sa(o):o}(o,r))).selector=e}return i},Lr=xa.select=function(e,t,n,r){var o,i,a,u,c,s="function"==typeof e&&e,f=!r&&Br(e=s.selector||e)
if(n=n||[],1===f.length){if((i=f[0]=f[0].slice(0)).length>2&&"ID"===(a=i[0]).type&&Rr.getById&&9===t.nodeType&&jr&&Dr.relative[i[1].type]){if(!(t=(Dr.find.ID(a.matches[0].replace(ya,Ca),t)||[])[0]))return n
s&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=da.needsContext.test(e)?0:i.length;o--&&(a=i[o],!Dr.relative[u=a.type]);)if((c=Dr.find[u])&&(r=c(a.matches[0].replace(ya,Ca),va.test(i[0].type)&&Ea(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&Aa(i)))return Zi.apply(n,r),n
break}}return(s||Pr(e,f))(r,t,!jr,n,va.test(e)&&Ea(t.parentNode)||t),n},Rr.sortStable=Ui.split("").sort(Wi).join("")===Ui,Rr.detectDuplicates=!!Fr,Ur(),Rr.sortDetached=!0
var Pa=document,La=Array.prototype.push,Ia=Array.prototype.slice,Ma=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,Fa=Fi.Event,Ua=Et.makeMap("children,contents,next,prev"),za=function(e){return void 0!==e},Ha=function(e){return"string"==typeof e},ja=function(e,t){var n,r=(t=t||Pa).createElement("div"),o=t.createDocumentFragment()
for(r.innerHTML=e;n=r.firstChild;)o.appendChild(n)
return o},Va=function(e,t,n,r){var o
if(Ha(t))t=ja(t,ru(e[0]))
else if(t.length&&!t.nodeType){if(t=uu.makeArray(t),r)for(o=t.length-1;o>=0;o--)Va(e,t[o],n,r)
else for(o=0;o<t.length;o++)Va(e,t[o],n,r)
return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t)
return e},qa=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},$a=function(e,t,n){var r,o
return t=uu(t)[0],e.each((function(){var e=this
n&&r===e.parentNode||(r=e.parentNode,o=t.cloneNode(!1),e.parentNode.insertBefore(o,e)),o.appendChild(e)})),e},Wa=Et.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),Ka=Et.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),Xa={for:"htmlFor",class:"className",readonly:"readOnly"},Ya={float:"cssFloat"},Ga={},Ja={},Qa=function(e,t){return new uu.fn.init(e,t)},Za=/^\s*|\s*$/g,eu=function(e){return null==e?"":(""+e).replace(Za,"")},tu=function(e,t){var n,r,o,i
if(e)if(void 0===(n=e.length)){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},nu=function(e,t){var n=[]
return tu(e,(function(e,r){t(r,e)&&n.push(r)})),n},ru=function(e){return e?9===e.nodeType?e:e.ownerDocument:Pa}
Qa.fn=Qa.prototype={constructor:Qa,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this
if(!e)return o
if(e.nodeType)return o.context=o[0]=e,o.length=1,o
if(t&&t.nodeType)o.context=t
else{if(t)return uu(e).attr(t)
o.context=t=document}if(Ha(e)){if(o.selector=e,!(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:Ma.exec(e)))return uu(t).find(e)
if(n[1])for(r=ja(e,ru(t)).firstChild;r;)La.call(o,r),r=r.nextSibling
else{if(!(r=ru(t).getElementById(n[2])))return o
if(r.id!==n[2])return o.find(e)
o.length=1,o[0]=r}}else this.add(e,!1)
return o},toArray:function(){return Et.toArray(this)},add:function(e,t){var n,r,o=this
if(Ha(e))return o.add(uu(e))
if(!1!==t)for(n=uu.unique(o.toArray().concat(uu.makeArray(e))),o.length=n.length,r=0;r<n.length;r++)o[r]=n[r]
else La.apply(o,uu.makeArray(e))
return o},attr:function(e,t){var n,r=this
if("object"==typeof e)tu(e,(function(e,t){r.attr(e,t)}))
else{if(!za(t)){if(r[0]&&1===r[0].nodeType){if((n=Ga[e])&&n.get)return n.get(r[0],e)
if(Ka[e])return r.prop(e)?e:void 0
null===(t=r[0].getAttribute(e,2))&&(t=void 0)}return t}this.each((function(){var n
if(1===this.nodeType){if((n=Ga[e])&&n.set)return void n.set(this,t)
null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}}))}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this
if("object"==typeof(e=Xa[e]||e))tu(e,(function(e,t){n.prop(e,t)}))
else{if(!za(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t
this.each((function(){1===this.nodeType&&(this[e]=t)}))}return n},css:function(e,t){var n,r,o=this,i=function(e){return e.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()}))},a=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e}))}
if("object"==typeof e)tu(e,(function(e,t){o.css(e,t)}))
else if(za(t))e=i(e),"number"!=typeof t||Wa[e]||(t=t.toString()+"px"),o.each((function(){var n=this.style
if((r=Ja[e])&&r.set)r.set(this,t)
else{try{this.style[Ya[e]||e]=t}catch(o){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(a(e)):n.removeAttribute(e))}}))
else{if(n=o[0],(r=Ja[e])&&r.get)return r.get(n)
if(!n.ownerDocument.defaultView)return n.currentStyle?n.currentStyle[i(e)]:""
try{return n.ownerDocument.defaultView.getComputedStyle(n,null).getPropertyValue(a(e))}catch(u){return}}return o},remove:function(){for(var e,t=this.length;t--;)e=this[t],Fa.clean(e),e.parentNode&&e.parentNode.removeChild(e)
return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild)
return this},html:function(e){var t,n=this
if(za(e)){t=n.length
try{for(;t--;)n[t].innerHTML=e}catch(r){uu(n[t]).empty().append(e)}return n}return n[0]?n[0].innerHTML:""},text:function(e){var t,n=this
if(za(e)){for(t=n.length;t--;)"innerText"in n[t]?n[t].innerText=e:n[0].textContent=e
return n}return n[0]?n[0].innerText||n[0].textContent:""},append:function(){return Va(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)}))},prepend:function(){return Va(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)}),!0)},before:function(){var e=this
return e[0]&&e[0].parentNode?Va(e,arguments,(function(e){this.parentNode.insertBefore(e,this)})):e},after:function(){var e=this
return e[0]&&e[0].parentNode?Va(e,arguments,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}),!0):e},appendTo:function(e){return uu(e).append(this),this},prependTo:function(e){return uu(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return $a(this,e)},wrapAll:function(e){return $a(this,e,!0)},wrapInner:function(e){return this.each((function(){uu(this).contents().wrapAll(e)})),this},unwrap:function(){return this.parent().each((function(){uu(this).replaceWith(this.childNodes)}))},clone:function(){var e=[]
return this.each((function(){e.push(this.cloneNode(!0))})),uu(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this
return"string"!=typeof e||(-1!==e.indexOf(" ")?tu(e.split(" "),(function(){n.toggleClass(this,t)})):n.each((function(n,r){var o=qa(r,e)
if(o!==t){var i=r.className
o?r.className=eu((" "+i+" ").replace(" "+e+" "," ")):r.className+=i?" "+e:e}}))),n},hasClass:function(e){return qa(this[0],e)},each:function(e){return tu(this,e)},on:function(e,t){return this.each((function(){Fa.bind(this,e,t)}))},off:function(e,t){return this.each((function(){Fa.unbind(this,e,t)}))},trigger:function(e){return this.each((function(){"object"==typeof e?Fa.fire(this,e.type,e):Fa.fire(this,e)}))},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return uu(Ia.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[]
for(t=0,n=this.length;t<n;t++)uu.find(e,this[t],r)
return uu(r)},filter:function(e){return uu("function"==typeof e?nu(this.toArray(),(function(t,n){return e(n,t)})):uu.filter(e,this.toArray()))},closest:function(e){var t=[]
return e instanceof uu&&(e=e[0]),this.each((function(n,r){for(;r;){if("string"==typeof e&&uu(r).is(e)){t.push(r)
break}if(r===e){t.push(r)
break}r=r.parentNode}})),uu(t)},offset:function(e){var t,n,r,o,i=0,a=0
return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:La,sort:Array.prototype.sort,splice:Array.prototype.splice},Et.extend(Qa,{extend:Et.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:Et.toArray(e)
var t},inArray:function(e,t){var n
if(t.indexOf)return t.indexOf(e)
for(n=t.length;n--;)if(t[n]===e)return n
return-1},isArray:Et.isArray,each:tu,trim:eu,grep:nu,find:xa,expr:xa.selectors,unique:xa.uniqueSort,text:xa.getText,contains:xa.contains,filter:function(e,t,n){var r=t.length
for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1)
return t=1===t.length?uu.find.matchesSelector(t[0],e)?[t[0]]:[]:uu.find.matches(e,t)}})
var ou=function(e,t,n){var r=[],o=e[t]
for("string"!=typeof n&&n instanceof uu&&(n=n[0]);o&&9!==o.nodeType;){if(void 0!==n){if(o===n)break
if("string"==typeof n&&uu(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},iu=function(e,t,n,r){var o=[]
for(r instanceof uu&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(void 0!==r){if(e===r)break
if("string"==typeof r&&uu(e).is(r))break}o.push(e)}return o},au=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e
return null}
tu({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return ou(e,"parentNode")},next:function(e){return au(e,"nextSibling",1)},prev:function(e){return au(e,"previousSibling",1)},children:function(e){return iu(e.firstChild,"nextSibling",1)},contents:function(e){return Et.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},(function(e,t){Qa.fn[e]=function(n){var r=[]
this.each((function(){var e=t.call(r,this,n,r)
e&&(uu.isArray(e)?r.push.apply(r,e):r.push(e))})),this.length>1&&(Ua[e]||(r=uu.unique(r)),0===e.indexOf("parents")&&(r=r.reverse()))
var o=uu(r)
return n?o.filter(n):o}})),tu({parentsUntil:function(e,t){return ou(e,"parentNode",t)},nextUntil:function(e,t){return iu(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return iu(e,"previousSibling",1,t).slice(1)}},(function(e,t){Qa.fn[e]=function(n,r){var o=[]
this.each((function(){var e=t.call(o,this,n,o)
e&&(uu.isArray(e)?o.push.apply(o,e):o.push(e))})),this.length>1&&(o=uu.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse()))
var i=uu(o)
return r?i.filter(r):i}})),Qa.fn.is=function(e){return!!e&&this.filter(e).length>0},Qa.fn.init.prototype=Qa.fn,Qa.overrideDefaults=function(e){var t,n=function(r,o){return t=t||e(),0===arguments.length&&(r=t.element),o||(o=t.context),new n.fn.init(r,o)}
return uu.extend(n,this),n},Qa.attrHooks=Ga,Qa.cssHooks=Ja
var uu=Qa,cu=Et.each,su=Et.grep,fu=xt.ie,lu=/^([a-z0-9],?)+$/i,du=function(e,t){var n=t.attr("style"),r=e.serialize(e.parse(n),t[0].nodeName)
r||(r=null),t.attr("data-mce-style",r)},mu=function(e,t){var n,r,o=0
if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r)
return o},gu=function(e,t){void 0===t&&(t={})
var n={},r=window,o={},i=0,a=oo.forElement(At.fromDom(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),u=[],c=t.schema?t.schema:_i({}),s=Ri({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),l=t.ownEvents?new Fi:Fi.Event,d=c.getBlockElements(),m=uu.overrideDefaults((function(){return{context:e,element:q.getRoot()}})),g=function(t){return t&&e&&f(t)?e.getElementById(t):t},p=function(e){return m("string"==typeof e?g(e):e)},v=function(e,t,n){var r,o,i=p(e)
return i.length&&(o=(r=$[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},b=function(e){var t=g(e)
return t?t.attributes:[]},y=function(e,n,r){""===r&&(r=null)
var o=p(e),i=o.attr(n)
if(o.length){var a=$[n]
a&&a.set?a.set(o,r,n):o.attr(n,r),i!==r&&t.onSetAttrib&&t.onSetAttrib({attrElm:o,attrName:n,attrValue:r})}},x=function(){return t.root_element||e.body},w=function(t,n){return fr(e.body,g(t),n)},k=function(e,t,n){var r=p(e)
return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()})))&&(t=xt.browser.isIE()?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:void 0)},N=function(e){var t,n
return e=g(e),t=k(e,"width"),n=k(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},E=function(e,t){var n
if(!e)return!1
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(lu.test(t)){var r=t.toLowerCase().split(/,/),o=e.nodeName.toLowerCase()
for(n=r.length-1;n>=0;n--)if(r[n]===o)return!0
return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e]
return xa(t,i[0].ownerDocument||i[0],null,i).length>0},_=function(e,t,n,r){var o,i=[],a=g(e)
for(r=void 0===r,n=n||("BODY"!==x().nodeName?x().parentNode:null),Et.is(t,"string")&&(o=t,t="*"===t?function(e){return 1===e.nodeType}:function(e){return E(e,o)});a&&!(a===n||h(a.nodeType)||Un(a)||zn(a));){if(!t||"function"==typeof t&&t(a)){if(!r)return[a]
i.push(a)}a=a.parentNode}return r?i:null},A=function(e,t,n){var r=t
if(e)for("string"==typeof t&&(r=function(e){return E(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e
return null},R=function(e,t,n){var r,o="string"==typeof e?g(e):e
if(!o)return!1
if(Et.isArray(o)&&(o.length||0===o.length))return r=[],cu(o,(function(e,o){e&&r.push(t.call(n,"string"==typeof e?g(e):e,o))})),r
var i=n||this
return t.call(i,o)},D=function(e,t){p(e).each((function(e,n){cu(t,(function(e,t){y(n,t,e)}))}))},T=function(e,t){var n=p(e)
fu?n.each((function(e,n){if(!1!==n.canHaveHTML){for(;n.firstChild;)n.removeChild(n.firstChild)
try{n.innerHTML="<br>"+t,n.removeChild(n.firstChild)}catch(r){uu("<div></div>").html("<br>"+t).contents().slice(1).appendTo(n)}return t}})):n.html(t)},O=function(t,n,r,o,i){return R(t,(function(t){var a="string"==typeof n?e.createElement(n):n
return D(a,r),o&&("string"!=typeof o&&o.nodeType?a.appendChild(o):"string"==typeof o&&T(a,o)),i?a:t.appendChild(a)}))},B=function(t,n,r){return O(e.createElement(t),t,n,r,!0)},P=vi.encodeAllRaw,L=function(e,t){var n=p(e)
return t?n.each((function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)})).remove():n.remove(),n.length>1?n.toArray():n[0]},I=function(e,t,n){p(e).toggleClass(t,n).each((function(){""===this.className&&uu(this).attr("class",null)}))},M=function(e,t,n){return R(t,(function(t){return Et.is(t,"array")&&(e=e.cloneNode(!0)),n&&cu(su(t.childNodes),(function(t){e.appendChild(t)})),t.parentNode.replaceChild(e,t)}))},F=function(e){if(Rn(e)){var t="a"===e.nodeName.toLowerCase()&&!v(e,"href")&&v(e,"id")
if(v(e,"name")||v(e,"data-mce-bookmark")||t)return!0}return!1},U=function(){return e.createRange()},z=function(n,o,i,a){if(Et.isArray(n)){for(var c=n.length,s=[];c--;)s[c]=z(n[c],o,i,a)
return s}return!t.collect||n!==e&&n!==r||u.push([n,o,i,a]),l.bind(n,o,i,a||q)},H=function(t,n,o){if(Et.isArray(t)){for(var i=t.length,a=[];i--;)a[i]=H(t[i],n,o)
return a}if(u.length>0&&(t===e||t===r))for(i=u.length;i--;){var c=u[i]
t!==c[0]||n&&n!==c[1]||o&&o!==c[2]||l.unbind(c[0],c[1],c[2])}return l.unbind(t,n,o)},j=function(e){if(e&&Rn(e)){var t=e.getAttribute("data-mce-contenteditable")
return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},q={doc:e,settings:t,win:r,files:o,stdMode:!0,boxModel:!0,styleSheetLoader:a,boundEvents:u,styles:s,schema:c,events:l,isBlock:function(e){if("string"==typeof e)return!!d[e]
if(e){var t=e.nodeType
if(t)return!(1!==t||!d[e.nodeName])}return!1},$:m,$$:p,root:null,clone:function(t,n){if(!fu||1!==t.nodeType||n)return t.cloneNode(n)
var r=e.createElement(t.nodeName)
return cu(b(t),(function(e){y(r,e.nodeName,v(t,e.nodeName))})),r},getRoot:x,getViewPort:function(e){var t=En(e)
return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:function(e){e=g(e)
var t=w(e),n=N(e)
return{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:N,getParent:function(e,t,n){var r=_(e,t,n,!1)
return r&&r.length>0?r[0]:null},getParents:_,get:g,getNext:function(e,t){return A(e,t,"nextSibling")},getPrev:function(e,t){return A(e,t,"previousSibling")},select:function(n,r){return xa(n,g(r)||t.root_element||e,[])},is:E,add:O,create:B,createHTML:function(e,t,n){var r,o=""
for(r in o+="<"+e,t)ye(t,r)&&(o+=" "+r+'="'+P(t[r])+'"')
return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(t){var n,r=e.createElement("div"),o=e.createDocumentFragment()
for(o.appendChild(r),t&&(r.innerHTML=t);n=r.firstChild;)o.appendChild(n)
return o.removeChild(r),o},remove:L,setStyle:function(e,n,r){var o=f(n)?p(e).css(n,r):p(e).css(n)
t.update_styles&&du(s,o)},getStyle:k,setStyles:function(e,n){var r=p(e).css(n)
t.update_styles&&du(s,r)},removeAllAttribs:function(e){return R(e,(function(e){var t,n=e.attributes
for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))}))},setAttrib:y,setAttribs:D,getAttrib:v,getPos:w,parseStyle:function(e){return s.parse(e)},serializeStyle:function(e,t){return s.serialize(e,t)},addStyle:function(t){var r,o
if(q!==gu.DOM&&e===document){if(n[t])return
n[t]=!0}(o=e.getElementById("mceDefaultStyles"))||((o=e.createElement("style")).id="mceDefaultStyles",o.type="text/css",(r=e.getElementsByTagName("head")[0]).firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),o.styleSheet?o.styleSheet.cssText+=t:o.appendChild(e.createTextNode(t))},loadCSS:function(e){e||(e=""),V(e.split(","),(function(e){o[e]=!0,a.load(e,C)}))},addClass:function(e,t){p(e).addClass(t)},removeClass:function(e,t){I(e,t,!1)},hasClass:function(e,t){return p(e).hasClass(t)},toggleClass:I,show:function(e){p(e).show()},hide:function(e){p(e).hide()},isHidden:function(e){return"none"===p(e).css("display")},uniqueId:function(e){return(e||"mce_")+i++},setHTML:T,getOuterHTML:function(e){var t="string"==typeof e?g(e):e
return Rn(t)?t.outerHTML:uu("<div></div>").append(uu(t).clone()).html()},setOuterHTML:function(e,t){p(e).each((function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}L(uu(this).html(t),!0)}))},decode:vi.decode,encode:P,insertAfter:function(e,t){var n=g(t)
return R(e,(function(e){var t=n.parentNode,r=n.nextSibling
return r?t.insertBefore(e,r):t.appendChild(e),e}))},replace:M,rename:function(e,t){var n
return e.nodeName!==t.toUpperCase()&&(n=B(t),cu(b(e),(function(t){y(n,t.nodeName,v(e,t.nodeName))})),M(n,e,!0)),n||e},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode
if(r===n)break
r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return s.toHex(Et.trim(e))},run:R,getAttribs:b,isEmpty:function(e,t){var n,r,o=0
if(F(e))return!1
if(e=e.firstChild){var i=new io(e,e.parentNode),a=c?c.getWhiteSpaceElements():{}
t=t||(c?c.getNonEmptyElements():null)
do{if(n=e.nodeType,Rn(e)){var u=e.getAttribute("data-mce-bogus")
if(u){e=i.next("all"===u)
continue}if(r=e.nodeName.toLowerCase(),t&&t[r]){if("br"===r){o++,e=i.next()
continue}return!1}if(F(e))return!1}if(8===n)return!1
if(3===n&&!Ko(e.nodeValue))return!1
if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&Ko(e.nodeValue))return!1
e=i.next()}while(e)}return o<=1},createRng:U,nodeIndex:mu,split:function(e,t,n){var r,o,i,a=U()
if(e&&t)return a.setStart(e.parentNode,mu(e)),a.setEnd(t.parentNode,mu(t)),r=a.extractContents(),(a=U()).setStart(t.parentNode,mu(t)+1),a.setEnd(e.parentNode,mu(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(ri(q,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(ri(q,o),e),L(e),n||t},bind:z,unbind:H,fire:function(e,t,n){return l.fire(e,t,n)},getContentEditable:j,getContentEditableParent:function(e){for(var t=x(),n=null;e&&e!==t&&null===(n=j(e));e=e.parentNode);return n},destroy:function(){if(u.length>0)for(var e=u.length;e--;){var t=u[e]
l.unbind(t[0],t[1],t[2])}fe(o,(function(e,t){a.unload(t),delete o[t]})),xa.setDocument&&xa.setDocument()},isChildOf:function(e,t){if(fu){for(;e;){if(t===e)return!0
e=e.parentNode}return!1}return e===t||t.contains(e)},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}},$=function(e,t,n){var r=t.keep_values,o={set:function(e,r,o){t.url_converter&&null!==r&&(r=t.url_converter.call(t.url_converter_scope||n(),r,o,e[0])),e.attr("data-mce-"+o,r).attr(o,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},i={style:{set:function(t,n){null===n||"object"!=typeof n?(r&&t.attr("data-mce-style",n),null!==n&&"string"==typeof n?(t.removeAttr("style"),t.css(e.parse(n))):t.attr("style",n)):t.css(n)},get:function(t){var n=t.attr("data-mce-style")||t.attr("style")
return e.serialize(e.parse(n),t[0].nodeName)}}}
return r&&(i.href=i.src=o),i}(s,t,S(q))
return q}
gu.DOM=gu(document),gu.nodeIndex=mu
var pu=gu.DOM,hu=Et.each,vu=Et.grep,bu=function(){function e(e){void 0===e&&(e={}),this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=0,this.settings=e}return e.prototype._setReferrerPolicy=function(e){this.settings.referrerPolicy=e},e.prototype.loadScript=function(e,t,n){var r,o=pu,i=function(){o.remove(a),r&&(r.onerror=r.onload=r=null)},a=o.uniqueId();(r=document.createElement("script")).id=a,r.type="text/javascript",r.src=Et._addCacheSuffix(e),this.settings.referrerPolicy&&o.setAttrib(r,"referrerpolicy",this.settings.referrerPolicy),r.onload=function(){i(),t()},r.onerror=function(){i(),b(n)?n():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(r)},e.prototype.isDone=function(e){return 2===this.states[e]},e.prototype.markDone=function(e){this.states[e]=2},e.prototype.add=function(e,t,n,r){var o=this.states[e]
this.queue.push(e),void 0===o&&(this.states[e]=0),t&&(this.scriptLoadedCallbacks[e]||(this.scriptLoadedCallbacks[e]=[]),this.scriptLoadedCallbacks[e].push({success:t,failure:r,scope:n||this}))},e.prototype.load=function(e,t,n,r){return this.add(e,t,n,r)},e.prototype.remove=function(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]},e.prototype.loadQueue=function(e,t,n){this.loadScripts(this.queue,e,t,n)},e.prototype.loadScripts=function(e,t,n,r){var o=this,i=[],a=function(e,t){hu(o.scriptLoadedCallbacks[t],(function(t){b(t[e])&&t[e].call(t.scope)})),o.scriptLoadedCallbacks[t]=void 0}
o.queueLoadedCallbacks.push({success:t,failure:r,scope:n||this})
var u=function(){var t=vu(e)
if(e.length=0,hu(t,(function(e){2!==o.states[e]?3!==o.states[e]?1!==o.states[e]&&(o.states[e]=1,o.loading++,o.loadScript(e,(function(){o.states[e]=2,o.loading--,a("success",e),u()}),(function(){o.states[e]=3,o.loading--,i.push(e),a("failure",e),u()}))):a("failure",e):a("success",e)})),!o.loading){var n=o.queueLoadedCallbacks.slice(0)
o.queueLoadedCallbacks.length=0,hu(n,(function(e){0===i.length?b(e.success)&&e.success.call(e.scope):b(e.failure)&&e.failure.call(e.scope,i)}))}}
u()},e.ScriptLoader=new e,e}(),yu=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},Cu={},xu=yu("en"),wu=function(){return ve(Cu,xu.get())},Su={getData:function(){return le(Cu,(function(e){return Ae({},e)}))},setCode:function(e){e&&xu.set(e)},getCode:function(){return xu.get()},add:function(e,t){var n=Cu[e]
n||(Cu[e]=n={}),fe(t,(function(e,t){n[t.toLowerCase()]=e}))},translate:function(e){var t,n=wu().getOr({}),r=function(e){return b(e)?Object.prototype.toString.call(e):o(e)?"":""+e},o=function(e){return""===e||null==e},i=function(e){var t=r(e)
return ve(n,t.toLowerCase()).map(r).getOr(t)},a=function(e){return e.replace(/{context:\w+}$/,"")}
if(o(e))return""
if(l(t=e)&&be(t,"raw"))return r(e.raw)
if(function(e){return d(e)&&e.length>1}(e)){var u=e.slice(1)
return a(i(e[0]).replace(/\{([0-9]+)\}/g,(function(e,t){return be(u,t)?r(u[t]):e})))}return a(i(e))},isRtl:function(){return wu().bind((function(e){return ve(e,"_dir")})).exists((function(e){return"rtl"===e}))},hasCode:function(e){return be(Cu,e)}},ku=function(){var e=[],t={},n={},r=[],o=function(e,t){var n=W(r,(function(n){return n.name===e&&n.state===t}))
V(n,(function(e){return e.callback()}))},i=function(e){var t
return n[e]&&(t=n[e].dependencies),t||[]},a=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},u=function(e,r,c,s,f){if(!t[e]){var l="string"==typeof r?r:r.prefix+r.resource+r.suffix
0!==l.indexOf("/")&&-1===l.indexOf("://")&&(l=ku.baseURL+"/"+l),t[e]=l.substring(0,l.lastIndexOf("/"))
var d=function(){o(e,"loaded"),function(e,t,n,r){var o=i(e)
V(o,(function(e){var n=a(t,e)
u(n.resource,n,void 0,void 0)})),n&&(r?n.call(r):n.call(bu))}(e,r,c,s)}
n[e]?d():bu.ScriptLoader.add(l,d,s,f)}},c=function(e,o,i){void 0===i&&(i="added"),be(n,e)&&"added"===i||be(t,e)&&"loaded"===i?o():r.push({name:e,state:i,callback:o})}
return{items:e,urls:t,lookup:n,_listeners:r,get:function(e){if(n[e])return n[e].instance},dependencies:i,requireLangPack:function(e,n){!1!==ku.languageLoad&&c(e,(function(){var r=Su.getCode()
!r||n&&-1===(","+(n||"")+",").indexOf(","+r+",")||bu.ScriptLoader.add(t[e]+"/langs/"+r+".js")}),"loaded")},add:function(t,r,i){var a=r
return e.push(a),n[t]={instance:a,dependencies:i},o(t,"added"),a},remove:function(e){delete t[e],delete n[e]},createUrl:a,addComponents:function(e,n){var r=t[e]
V(n,(function(e){bu.ScriptLoader.add(r+"/"+e)}))},load:u,waitFor:c}}
ku.languageLoad=!0,ku.baseURL="",ku.PluginManager=ku(),ku.ThemeManager=ku()
var Nu=function(){var e=function(e){var t=yu(L.none()),n=function(){return t.get().each(e)}
return{clear:function(){n(),t.set(L.none())},isSet:function(){return t.get().isSome()},get:function(){return t.get()},set:function(e){n(),t.set(L.some(e))}}}(C)
return Ae(Ae({},e),{on:function(t){return e.get().each(t)}})},Eu=function(e,t){var n=null
return{cancel:function(){m(n)||(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
m(n)&&(n=setTimeout((function(){n=null,e.apply(null,r)}),t))}}},_u=function(e,t){var n=null,r=function(){m(n)||(clearTimeout(n),n=null)}
return{cancel:r,throttle:function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i]
r(),n=setTimeout((function(){n=null,e.apply(null,o)}),t)}}},Au=function(e,t){var n=Zn(e,t)
return void 0===n||""===n?[]:n.split(" ")},Ru=function(e){return void 0!==e.dom.classList},Du=function(e,t){return function(e,t,n){var r=Au(e,t).concat([n])
return Jn(e,t,r.join(" ")),!0}(e,"class",t)},Tu=function(e,t){return function(e,t,n){var r=W(Au(e,t),(function(e){return e!==n}))
return r.length>0?Jn(e,t,r.join(" ")):tr(e,t),!1}(e,"class",t)},Ou=function(e,t){Ru(e)?e.dom.classList.add(t):Du(e,t)},Bu=function(e){0===(Ru(e)?e.dom.classList:function(e){return Au(e,"class")}(e)).length&&tr(e,"class")},Pu=function(e,t){return Ru(e)&&e.dom.classList.contains(t)},Lu=function(e,t){var n=[]
return V(Gt(e),(function(e){t(e)&&(n=n.concat([e])),n=n.concat(Lu(e,t))})),n},Iu=function(e,t){return function(e,t){var n=void 0===t?document:t.dom
return Tt(n)?[]:j(n.querySelectorAll(e),At.fromDom)}(t,e)},Mu=S("mce-annotation"),Fu=S("data-mce-annotation"),Uu=S("data-mce-annotation-uid"),zu=function(e,t){var n=e.selection.getRng(),r=At.fromDom(n.startContainer),o=At.fromDom(e.getBody()),i=t.fold((function(){return"."+Mu()}),(function(e){return"["+Fu()+'="'+e+'"]'})),a=Jt(r,n.startOffset).getOr(r),u=Jr(a,i,(function(e){return Ot(e,o)})),c=function(e,t){return function(e,t){var n=e.dom
return!(!n||!n.hasAttribute)&&n.hasAttribute(t)}(e,t)?L.some(Zn(e,t)):L.none()}
return u.bind((function(t){return c(t,""+Uu()).bind((function(n){return c(t,""+Fu()).map((function(t){var r=Hu(e,n)
return{uid:n,name:t,elements:r}}))}))}))},Hu=function(e,t){var n=At.fromDom(e.getBody())
return Iu(n,"["+Uu()+'="'+t+'"]')},ju=function(e,t){var n=yu({}),r=function(){return{listeners:[],previous:Nu()}},o=function(e,t){i(e,(function(e){return t(e),e}))},i=function(e,t){var o=n.get(),i=t(ve(o,e).getOrThunk(r))
o[e]=i,n.set(o)},a=_u((function(){var t=n.get(),r=ne(ce(t))
V(r,(function(t){i(t,(function(n){var r=n.previous.get()
return zu(e,L.some(t)).fold((function(){r.isSome()&&(function(e){o(e,(function(t){V(t.listeners,(function(t){return t(!1,e)}))}))}(t),n.previous.clear())}),(function(e){var t=e.uid,i=e.name,a=e.elements
Kn(r,t)||(function(e,t,n){o(e,(function(r){V(r.listeners,(function(r){return r(!0,e,{uid:t,nodes:j(n,(function(e){return e.dom}))})}))}))}(i,t,a),n.previous.set(t))})),{previous:n.previous,listeners:n.listeners}}))}))}),30)
e.on("remove",(function(){a.cancel()})),e.on("NodeChange",(function(){a.throttle()}))
return{addListener:function(e,t){i(e,(function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}}))}}},Vu=function(e,t){e.on("init",(function(){e.serializer.addNodeFilter("span",(function(e){V(e,(function(e){(function(e){return L.from(e.attr(Fu())).bind(t.lookup)})(e).each((function(t){!1===t.persistent&&e.unwrap()}))}))}))}))},qu=0,$u=function(e){var t=(new Date).getTime()
return e+"_"+Math.floor(1e9*Math.random())+ ++qu+String(t)},Wu=function(e,t){var n,r,o=jt(e).dom,i=At.fromDom(o.createDocumentFragment()),a=(n=t,(r=(o||document).createElement("div")).innerHTML=n,Gt(At.fromDom(r)))
mn(i,a),gn(e),dn(e,i)},Ku=function(e,t){return At.fromDom(e.dom.cloneNode(t))},Xu=function(e){return Ku(e,!1)},Yu=function(e){return Ku(e,!0)},Gu=function(e,t,n){void 0===n&&(n=D)
var r=new io(e,t),o=function(e){var t
do{t=r[e]()}while(t&&!Mn(t)&&!n(t))
return L.from(t).filter(Mn)}
return{current:function(){return L.from(r.current()).filter(Mn)},next:function(){return o("next")},prev:function(){return o("prev")},prev2:function(){return o("prev2")}}},Ju=function(e,t){var n=t||function(t){return e.isBlock(t)||Hn(t)||qn(t)},r=function(e,t,n,o){if(Mn(e)){var i=o(e,t,e.data)
if(-1!==i)return L.some({container:e,offset:i})}return n().bind((function(e){return r(e.container,e.offset,n,o)}))}
return{backwards:function(e,t,o,i){var a=Gu(e,i,n)
return r(e,t,(function(){return a.prev().map((function(e){return{container:e,offset:e.length}}))}),o).getOrNull()},forwards:function(e,t,o,i){var a=Gu(e,i,n)
return r(e,t,(function(){return a.next().map((function(e){return{container:e,offset:0}}))}),o).getOrNull()}}},Qu=Math.round,Zu=function(e){return e?{left:Qu(e.left),top:Qu(e.top),bottom:Qu(e.bottom),right:Qu(e.right),width:Qu(e.width),height:Qu(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},ec=function(e,t){return e=Zu(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},tc=function(e,t,n){return e>=0&&e<=Math.min(t.height,n.height)/2},nc=function(e,t){var n=Math.min(t.height/2,e.height/2)
return e.bottom-n<t.top||!(e.top>t.bottom)&&tc(t.top-e.bottom,e,t)},rc=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&tc(t.bottom-e.top,e,t)},oc=function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom},ic=function(e){var t=e.startContainer,n=e.startOffset
return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},ac=function(e,t){if(Rn(e)&&e.hasChildNodes()){var n=e.childNodes
return n[function(e,t,n){return Math.min(Math.max(e,t),n)}(t,0,n.length-1)]}return e},uc=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"),cc=function(e){return"string"==typeof e&&e.charCodeAt(0)>=768&&uc.test(e)},sc=Rn,fc=Vo,lc=Tn("display","block table"),dc=Tn("float","left right"),mc=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1
return!0}}(sc,fc,_(dc)),gc=_(Tn("white-space","pre pre-line pre-wrap")),pc=Mn,hc=Hn,vc=gu.nodeIndex,bc=function(e,t){return t<0&&Rn(e)&&e.hasChildNodes()?void 0:ac(e,t)},yc=function(e){return"createRange"in e?e.createRange():gu.DOM.createRng()},Cc=function(e){return e&&/[\r\n\t ]/.test(e)},xc=function(e){return!!e.setStart&&!!e.setEnd},wc=function(e){var t=e.startContainer,n=e.startOffset
if(Cc(e.toString())&&gc(t.parentNode)&&Mn(t)){var r=t.data
if(Cc(r[n-1])||Cc(r[n+1]))return!0}return!1},Sc=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},kc=function(e){var t,n=e.getClientRects()
return t=n.length>0?Zu(n[0]):Zu(e.getBoundingClientRect()),!xc(e)&&hc(e)&&Sc(t)?function(e){var t=e.ownerDocument,n=yc(t),r=t.createTextNode(bo),o=e.parentNode
o.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1)
var i=Zu(n.getBoundingClientRect())
return o.removeChild(r),i}(e):Sc(t)&&xc(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset
if(t===n&&Mn(n)&&0===r&&1===o){var i=e.cloneRange()
return i.setEndAfter(n),kc(i)}return null}(e):t},Nc=function(e,t){var n=ec(e,t)
return n.width=1,n.right=n.left+1,n},Ec=function(e){var t=[],n=function(e){var n,r
0!==e.height&&(t.length>0&&(n=e,r=t[t.length-1],n.left===r.left&&n.top===r.top&&n.bottom===r.bottom&&n.right===r.right)||t.push(e))},r=function(e,r){var o=yc(e.ownerDocument)
if(r<e.data.length){if(cc(e.data[r]))return t
if(cc(e.data[r-1])&&(o.setStart(e,r),o.setEnd(e,r+1),!wc(o)))return n(Nc(kc(o),!1)),t}r>0&&(o.setStart(e,r-1),o.setEnd(e,r),wc(o)||n(Nc(kc(o),!1))),r<e.data.length&&(o.setStart(e,r),o.setEnd(e,r+1),wc(o)||n(Nc(kc(o),!0)))},o=e.container(),i=e.offset()
if(pc(o))return r(o,i),t
if(sc(o))if(e.isAtEnd()){var a=bc(o,i)
pc(a)&&r(a,a.data.length),mc(a)&&!hc(a)&&n(Nc(kc(a),!1))}else{a=bc(o,i)
if(pc(a)&&r(a,0),mc(a)&&e.isAtEnd())return n(Nc(kc(a),!1)),t
var u=bc(e.container(),e.offset()-1)
mc(u)&&!hc(u)&&(lc(u)||lc(a)||!mc(a))&&n(Nc(kc(u),!1)),mc(a)&&n(Nc(kc(a),!0))}return t},_c=function(e,t,n){var r=function(){return n||(n=Ec(_c(e,t))),n}
return{container:S(e),offset:S(t),toRange:function(){var n=yc(e.ownerDocument)
return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:r,isVisible:function(){return r().length>0},isAtStart:function(){return pc(e),0===t},isAtEnd:function(){return pc(e)?t>=e.data.length:t>=e.childNodes.length},isEqual:function(n){return n&&e===n.container()&&t===n.offset()},getNode:function(n){return bc(e,n?t-1:t)}}}
_c.fromRangeStart=function(e){return _c(e.startContainer,e.startOffset)},_c.fromRangeEnd=function(e){return _c(e.endContainer,e.endOffset)},_c.after=function(e){return _c(e.parentNode,vc(e)+1)},_c.before=function(e){return _c(e.parentNode,vc(e))},_c.isAbove=function(e,t){return Xn(oe(t.getClientRects()),ie(e.getClientRects()),nc).getOr(!1)},_c.isBelow=function(e,t){return Xn(ie(t.getClientRects()),oe(e.getClientRects()),rc).getOr(!1)},_c.isAtStart=function(e){return!!e&&e.isAtStart()},_c.isAtEnd=function(e){return!!e&&e.isAtEnd()},_c.isTextPosition=function(e){return!!e&&Mn(e.container())},_c.isElementPosition=function(e){return!1===_c.isTextPosition(e)}
var Ac,Rc=function(e,t){Mn(t)&&0===t.data.length&&e.remove(t)},Dc=function(e,t,n){zn(n)?function(e,t,n){var r=L.from(n.firstChild),o=L.from(n.lastChild)
t.insertNode(n),r.each((function(t){return Rc(e,t.previousSibling)})),o.each((function(t){return Rc(e,t.nextSibling)}))}(e,t,n):function(e,t,n){t.insertNode(n),Rc(e,n.previousSibling),Rc(e,n.nextSibling)}(e,t,n)},Tc=Mn,Oc=Bn,Bc=gu.nodeIndex,Pc=function(e){var t=e.parentNode
return Oc(t)?Pc(t):t},Lc=function(e){return e?Ne(e.childNodes,(function(e,t){return Oc(t)&&"BR"!==t.nodeName?e=e.concat(Lc(t)):e.push(t),e}),[]):[]},Ic=function(e){return function(t){return e===t}},Mc=function(e){return(Tc(e)?"text()":e.nodeName.toLowerCase())+"["+function(e){var t,n
t=Lc(Pc(e)),n=Ee(t,Ic(e),e),t=t.slice(0,n+1)
var r=Ne(t,(function(e,n,r){return Tc(n)&&Tc(t[r-1])&&e++,e}),0)
return t=Se(t,Dn([e.nodeName])),(n=Ee(t,Ic(e),e))-r}(e)+"]"},Fc=function(e,t){var n,r,o,i,a,u=[]
return n=t.container(),r=t.offset(),Tc(n)?o=function(e,t){for(;(e=e.previousSibling)&&Tc(e);)t+=e.data.length
return t}(n,r):(r>=(i=n.childNodes).length?(o="after",r=i.length-1):o="before",n=i[r]),u.push(Mc(n)),a=function(e,t,n){var r=[]
for(t=t.parentNode;!(t===e||n&&n(t));t=t.parentNode)r.push(t)
return r}(e,n),a=Se(a,_(Bn)),(u=u.concat(we(a,(function(e){return Mc(e)})))).reverse().join("/")+","+o},Uc=function(e,t){var n
if(!t)return null
var r=t.split(","),o=r[0].split("/")
n=r.length>1?r[1]:"before"
var i=Ne(o,(function(e,t){var n=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
return n?("text()"===n[1]&&(n[1]="#text"),function(e,t,n){var r=Lc(e)
return r=Se(r,(function(e,t){return!Tc(e)||!Tc(r[t-1])})),(r=Se(r,Dn([t])))[n]}(e,n[1],parseInt(n[2],10))):null}),e)
return i?Tc(i)?function(e,t){for(var n,r=e,o=0;Tc(r);){if(n=r.data.length,t>=o&&t<=o+n){e=r,t-=o
break}if(!Tc(r.nextSibling)){e=r,t=n
break}o+=n,r=r.nextSibling}return Tc(e)&&t>e.data.length&&(t=e.data.length),_c(e,t)}(i,parseInt(n,10)):(n="after"===n?Bc(i)+1:Bc(i),_c(i.parentNode,n)):null},zc=qn,Hc=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],c=[],s=0,f=e.getRoot()
for(Mn(a)?c.push(n?function(e,t,n){var r,o
for(o=e(t.data.slice(0,n)).length,r=t.previousSibling;r&&Mn(r);r=r.previousSibling)o+=e(r.data).length
return o}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(s=1,u=Math.max(0,i.length-1)),c.push(e.nodeIndex(i[u],n)+s));a&&a!==f;a=a.parentNode)c.push(e.nodeIndex(a,n))
return c},jc=function(e,t,n){var r=0
return Et.each(e.select(t),(function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++})),r},Vc=function(e,t){var n,r,o,i=t?"start":"end"
n=e[i+"Container"],r=e[i+"Offset"],Rn(n)&&"TR"===n.nodeName&&(n=(o=n.childNodes)[Math.min(t?r:r-1,o.length-1)])&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r))},qc=function(e){return Vc(e,!0),Vc(e,!1),e},$c=function(e,t){var n
if(Rn(e)&&(e=ac(e,t),zc(e)))return e
if(Eo(e)){if(Mn(e)&&ko(e)&&(e=e.parentNode),n=e.previousSibling,zc(n))return n
if(n=e.nextSibling,zc(n))return n}},Wc=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng()
if(zc(r)||"IMG"===o)return{name:o,index:jc(n.dom,o,r)}
var a=function(e){return $c(e.startContainer,e.startOffset)||$c(e.endContainer,e.endOffset)}(i)
return a?{name:o=a.tagName,index:jc(n.dom,o,a)}:function(e,t,n,r){var o=t.dom,i={}
return i.start=Hc(o,e,n,r,!0),t.isCollapsed()||(i.end=Hc(o,e,n,r,!1)),Po(r)&&(i.isFakeCaret=!0),i}(e,n,t,i)},Kc=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},Xc=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName
if("IMG"===u)return{name:u,index:jc(n,u,a)}
var c=qc(r.cloneRange())
if(!i){c.collapse(!1)
var s=Kc(n,o+"_end",t)
Dc(n,c,s)}(r=qc(r)).collapse(!0)
var f=Kc(n,o+"_start",t)
return Dc(n,r,f),e.moveToBookmark({id:o,keep:!0}),{id:o}},Yc=function(e,t,n){return 2===t?Wc(xo,n,e):3===t?function(e){var t=e.getRng()
return{start:Fc(e.dom.getRoot(),_c.fromRangeStart(t)),end:Fc(e.dom.getRoot(),_c.fromRangeEnd(t))}}(e):t?function(e){return{rng:e.getRng()}}(e):Xc(e,!1)},Gc=E(Wc,k,!0),Jc=gu.DOM,Qc=function(e,t,n){var r=e.getParam(t,n)
if(-1!==r.indexOf("=")){var o=e.getParam(t,"","hash")
return ve(o,e.id).getOr(n)}return r},Zc=function(e){return e.getParam("content_security_policy","")},es=function(e){if(e.getParam("force_p_newlines",!1))return"p"
var t=e.getParam("forced_root_block","p")
return!1===t?"":!0===t?"p":t},ts=function(e){return e.getParam("forced_root_block_attrs",{})},ns=function(e){return e.getParam("automatic_uploads",!0,"boolean")},rs=function(e){return e.getParam("images_reuse_filename",!1,"boolean")},os=function(e){return e.getParam("icons","","string")},is=function(e){return e.getParam("images_upload_url","","string")},as=function(e){return e.getParam("images_upload_base_path","","string")},us=function(e){return e.getParam("images_upload_credentials",!1,"boolean")},cs=function(e){return e.getParam("images_upload_handler",null,"function")},ss=function(e){return e.getParam("content_css_cors",!1,"boolean")},fs=function(e){return e.getParam("referrer_policy","","string")},ls=function(e){return e.getParam("language","en","string")},ds=function(e){return e.getParam("indent_use_margin",!1)},ms=function(e){var t=e.getParam("font_css",[])
return d(t)?t:j(t.split(","),Fe)},gs=function(e){var t=e.getParam("object_resizing")
return!1!==t&&!xt.iOS&&(f(t)?t:"table,img,figure.image,div,video,iframe")},ps=function(e){return e.getParam("event_root")},hs=function(e){return e.getParam("theme")},vs=function(e){return e.getParam("validate")},bs=function(e){return!1!==e.getParam("inline_boundaries")},ys=function(e){return e.getParam("content_css_cors")},Cs=function(e){return e.getParam("plugins","","string")},xs=Rn,ws=Mn,Ss=function(e){var t=e.parentNode
t&&t.removeChild(e)},ks=function(e){var t=xo(e)
return{count:e.length-t.length,text:t}},Ns=function(e){for(var t;-1!==(t=e.data.lastIndexOf(yo));)e.deleteData(t,1)},Es=function(e,t){return Ds(e),t},_s=function(e,t){var n=t.container(),r=function(e,t){var n=U(e,t)
return-1===n?L.none():L.some(n)}(ae(n.childNodes),e).map((function(e){return e<t.offset()?_c(n,t.offset()-1):t})).getOr(t)
return Ds(e),r},As=function(e,t){return ws(e)&&t.container()===e?function(e,t){var n=ks(e.data.substr(0,t.offset())),r=ks(e.data.substr(t.offset()))
return(n.text+r.text).length>0?(Ns(e),_c(e,t.offset()-n.count)):t}(e,t):Es(e,t)},Rs=function(e,t){return _c.isTextPosition(t)?As(e,t):function(e,t){return t.container()===e.parentNode?_s(e,t):Es(e,t)}(e,t)},Ds=function(e){xs(e)&&Eo(e)&&(_o(e)?e.removeAttribute("data-mce-caret"):Ss(e)),ws(e)&&(Ns(e),0===e.data.length&&Ss(e))},Ts=dt().browser,Os=qn,Bs=Wn,Ps=$n,Ls=function(e,t,n){var r,o,i=ec(t.getBoundingClientRect(),n)
if("BODY"===e.tagName){var a=e.ownerDocument.documentElement
r=e.scrollLeft||a.scrollLeft,o=e.scrollTop||a.scrollTop}else{var u=e.getBoundingClientRect()
r=e.scrollLeft-u.left,o=e.scrollTop-u.top}i.left+=r,i.right+=r,i.top+=o,i.bottom+=o,i.width=1
var c=t.offsetWidth-t.clientWidth
return c>0&&(n&&(c*=-1),i.left+=c,i.right+=c),i},Is=function(e,t,n,r){var o,i,a=Nu(),u=es(e),c=u.length>0?u:"p",s=function(){(function(e){for(var t=Iu(At.fromDom(e),"*[contentEditable=false],video,audio,embed,object"),n=0;n<t.length;n++){var r,o=t[n].dom,i=o.previousSibling
Oo(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(r.length-1,1)),i=o.nextSibling,To(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(0,1))}})(t),i&&(Ds(i),i=null),a.on((function(e){uu(e.caret).remove(),a.clear()})),o&&(no.clearInterval(o),o=void 0)},f=function(){o=no.setInterval((function(){r()?uu("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden"):uu("div.mce-visual-caret",t).addClass("mce-visual-caret-hidden")}),500)}
return{show:function(e,r){var o
if(s(),Ps(r))return null
if(!n(r))return i=function(e,t){var n=e.ownerDocument.createTextNode(yo),r=e.parentNode
if(t){if(o=e.previousSibling,So(o)){if(Eo(o))return o
if(Oo(o))return o.splitText(o.data.length-1)}r.insertBefore(n,e)}else{var o=e.nextSibling
if(So(o)){if(Eo(o))return o
if(To(o))return o.splitText(1),o}e.nextSibling?r.insertBefore(n,e.nextSibling):r.appendChild(n)}return n}(r,e),o=r.ownerDocument.createRange(),Fs(i.nextSibling)?(o.setStart(i,0),o.setEnd(i,0)):(o.setStart(i,1),o.setEnd(i,1)),o
i=Do(c,r,e)
var u=Ls(t,r,e)
uu(i).css("top",u.top)
var l=uu('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(Ae({},u)).appendTo(t)[0]
return a.set({caret:l,element:r,before:e}),e&&uu(l).addClass("mce-visual-caret-before"),f(),(o=r.ownerDocument.createRange()).setStart(i,0),o.setEnd(i,0),o},hide:s,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){a.on((function(e){var n=Ls(t,e.element,e.before)
uu(e.caret).css(Ae({},n))}))},destroy:function(){return no.clearInterval(o)}}},Ms=function(){return Ts.isIE()||Ts.isEdge()||Ts.isFirefox()},Fs=function(e){return Os(e)||Bs(e)},Us=function(e){return Fs(e)||Pn(e)&&Ms()},zs=qn,Hs=Wn,js=Tn("display","block table table-cell table-caption list-item"),Vs=Eo,qs=ko,$s=Rn,Ws=Vo,Ks=function(e){return e>0},Xs=function(e){return e<0},Ys=function(e,t){for(var n;n=e(t);)if(!qs(n))return n
return null},Gs=function(e,t,n,r,o){var i=new io(e,r),a=zs(e)||qs(e)
if(Xs(t)){if(a&&n(e=Ys(i.prev.bind(i),!0)))return e
for(;e=Ys(i.prev.bind(i),o);)if(n(e))return e}if(Ks(t)){if(a&&n(e=Ys(i.next.bind(i),!0)))return e
for(;e=Ys(i.next.bind(i),o);)if(n(e))return e}return null},Js=function(e,t){for(;e&&e!==t;){if(js(e))return e
e=e.parentNode}return null},Qs=function(e,t,n){return Js(e.container(),n)===Js(t.container(),n)},Zs=function(e,t){if(!t)return null
var n=t.container(),r=t.offset()
return $s(n)?n.childNodes[r+e]:null},ef=function(e,t){var n=t.ownerDocument.createRange()
return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},tf=function(e,t,n){return Js(t,e)===Js(n,e)},nf=function(e,t,n){for(var r=e?"previousSibling":"nextSibling";n&&n!==t;){var o=n[r]
if(Vs(o)&&(o=o[r]),zs(o)||Hs(o)){if(tf(t,o,n))return o
break}if(Ws(o))break
n=n.parentNode}return null},rf=E(ef,!0),of=E(ef,!1),af=function(e,t,n){var r,o=E(nf,!0,t),i=E(nf,!1,t),a=n.startContainer,u=n.startOffset
if(ko(a)){$s(a)||(a=a.parentNode)
var c=a.getAttribute("data-mce-caret")
if("before"===c&&(r=a.nextSibling,Us(r)))return rf(r)
if("after"===c&&(r=a.previousSibling,Us(r)))return of(r)}if(!n.collapsed)return n
if(Mn(a)){if(Vs(a)){if(1===e){if(r=i(a))return rf(r)
if(r=o(a))return of(r)}if(-1===e){if(r=o(a))return of(r)
if(r=i(a))return rf(r)}return n}if(Oo(a)&&u>=a.data.length-1)return 1===e&&(r=i(a))?rf(r):n
if(To(a)&&u<=1)return-1===e&&(r=o(a))?of(r):n
if(u===a.data.length)return(r=i(a))?rf(r):n
if(0===u)return(r=o(a))?of(r):n}return n},uf=function(e,t){return L.from(Zs(e?0:-1,t)).filter(zs)},cf=function(e,t,n){var r=af(e,t,n)
return-1===e?_c.fromRangeStart(r):_c.fromRangeEnd(r)},sf=function(e){return L.from(e.getNode()).map(At.fromDom)},ff=function(e,t){for(;t=e(t);)if(t.isVisible())return t
return t},lf=function(e,t){var n=Qs(e,t)
return!(n||!Hn(e.getNode()))||n};(function(e){e[e.Backwards=-1]="Backwards",e[e.Forwards=1]="Forwards"})(Ac||(Ac={}))
var df,mf=qn,gf=Mn,pf=Rn,hf=Hn,vf=Vo,bf=function(e){return zo(e)||function(e){return!!qo(e)&&!0!==X(ae(e.getElementsByTagName("*")),(function(e,t){return e||Lo(t)}),!1)}(e)},yf=$o,Cf=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},xf=function(e,t){if(Ks(e)){if(vf(t.previousSibling)&&!gf(t.previousSibling))return _c.before(t)
if(gf(t))return _c(t,0)}if(Xs(e)){if(vf(t.nextSibling)&&!gf(t.nextSibling))return _c.after(t)
if(gf(t))return _c(t,t.data.length)}return Xs(e)?hf(t)?_c.before(t):_c.after(t):_c.before(t)},wf=function(e,t,n){var r,o,i,a
if(!pf(n)||!t)return null
if(t.isEqual(_c.after(n))&&n.lastChild){if(a=_c.after(n.lastChild),Xs(e)&&vf(n.lastChild)&&pf(n.lastChild))return hf(n.lastChild)?_c.before(n.lastChild):a}else a=t
var u=a.container(),c=a.offset()
if(gf(u)){if(Xs(e)&&c>0)return _c(u,--c)
if(Ks(e)&&c<u.length)return _c(u,++c)
r=u}else{if(Xs(e)&&c>0&&(o=Cf(u,c-1),vf(o)))return!bf(o)&&(i=Gs(o,e,yf,o))?gf(i)?_c(i,i.data.length):_c.after(i):gf(o)?_c(o,o.data.length):_c.before(o)
if(Ks(e)&&c<u.childNodes.length&&(o=Cf(u,c),vf(o)))return hf(o)?function(e,t){var n=t.nextSibling
return n&&vf(n)?gf(n)?_c(n,0):_c.before(n):wf(Ac.Forwards,_c.after(t),e)}(n,o):!bf(o)&&(i=Gs(o,e,yf,o))?gf(i)?_c(i,0):_c.before(i):gf(o)?_c(o,0):_c.after(o)
r=o||a.getNode()}if((Ks(e)&&a.isAtEnd()||Xs(e)&&a.isAtStart())&&(r=Gs(r,e,T,n,!0),yf(r,n)))return xf(e,r)
o=Gs(r,e,yf,n)
var s=_e(W(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode
return n}(u,n),mf))
return!s||o&&s.contains(o)?o?xf(e,o):null:a=Ks(e)?_c.after(s):_c.before(s)},Sf=function(e){return{next:function(t){return wf(Ac.Forwards,t,e)},prev:function(t){return wf(Ac.Backwards,t,e)}}},kf=function(e){return _c.isTextPosition(e)?0===e.offset():Vo(e.getNode())},Nf=function(e){if(_c.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return Vo(e.getNode(!0))},Ef=function(e,t){return!_c.isTextPosition(e)&&!_c.isTextPosition(t)&&e.getNode()===t.getNode(!0)},_f=function(e,t,n){return e?!Ef(t,n)&&(r=t,!(!_c.isTextPosition(r)&&Hn(r.getNode())))&&Nf(t)&&kf(n):!Ef(n,t)&&kf(t)&&Nf(n)
var r},Af=function(e,t,n){var r=Sf(t)
return L.from(e?r.next(n):r.prev(n))},Rf=function(e,t,n){return Af(e,t,n).bind((function(r){return Qs(n,r,t)&&_f(e,n,r)?Af(e,t,r):L.some(r)}))},Df=function(e,t,n,r){return Rf(e,t,n).bind((function(n){return r(n)?Df(e,t,n,r):L.some(n)}))},Tf=function(e,t){var n,r=e?t.firstChild:t.lastChild
return Mn(r)?L.some(_c(r,e?0:r.data.length)):r?Vo(r)?L.some(e?_c.before(r):Hn(n=r)?_c.before(n):_c.after(n)):function(e,t,n){var r=e?_c.before(n):_c.after(n)
return Af(e,t,r)}(e,t,r):L.none()},Of=E(Af,!0),Bf=E(Af,!1),Pf=E(Tf,!0),Lf=E(Tf,!1),If="_mce_caret",Mf=function(e){return Rn(e)&&e.id===If},Ff=function(e,t){for(;t&&t!==e;){if(t.id===If)return t
t=t.parentNode}return null},Uf=function(e){return Et.isArray(e.start)},zf=function(e,t){return Rn(t)&&e.isBlock(t)&&!t.innerHTML&&!xt.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t},Hf=function(e,t){return Lf(e).fold(D,(function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0}))},jf=function(e,t,n){return!(!function(e){return!1===e.hasChildNodes()}(t)||!Ff(e,t))&&(function(e,t){var n=e.ownerDocument.createTextNode(yo)
e.appendChild(n),t.setStart(n,0),t.setEnd(n,0)}(t,n),!0)},Vf=function(e,t,n,r){var o,i,a,u,c=n[t?"start":"end"],s=e.getRoot()
if(c){for(a=c[0],i=s,o=c.length-1;o>=1;o--){if(u=i.childNodes,jf(s,i,r))return!0
if(c[o]>u.length-1)return!!jf(s,i,r)||Hf(i,r)
i=u[c[o]]}3===i.nodeType&&(a=Math.min(c[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(c[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},qf=function(e){return Mn(e)&&e.data.length>0},$f=function(e,t,n){var r,o,i,a,u,c,s=e.get(n.id+"_"+t),f=n.keep
if(s){if(r=s.parentNode,"start"===t?(f?s.hasChildNodes()?(r=s.firstChild,o=1):qf(s.nextSibling)?(r=s.nextSibling,o=0):qf(s.previousSibling)?(r=s.previousSibling,o=s.previousSibling.data.length):(r=s.parentNode,o=e.nodeIndex(s)+1):o=e.nodeIndex(s),u=r,c=o):(f?s.hasChildNodes()?(r=s.firstChild,o=1):qf(s.previousSibling)?(r=s.previousSibling,o=s.previousSibling.data.length):(r=s.parentNode,o=e.nodeIndex(s)):o=e.nodeIndex(s),u=r,c=o),!f){for(a=s.previousSibling,i=s.nextSibling,Et.each(Et.grep(s.childNodes),(function(e){Mn(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));s=e.get(n.id+"_"+t);)e.remove(s,!0)
a&&i&&a.nodeType===i.nodeType&&Mn(a)&&!xt.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,c=o)}return L.some(_c(u,c))}return L.none()},Wf=function(e,t){var n=e.dom
if(t){if(Uf(t))return function(e,t){var n=e.createRng()
return Vf(e,!0,t,n)&&Vf(e,!1,t,n)?L.some(n):L.none()}(n,t)
if(function(e){return f(e.start)}(t))return L.some(function(e,t){var n,r=e.createRng()
return n=Uc(e.getRoot(),t.start),r.setStart(n.container(),n.offset()),n=Uc(e.getRoot(),t.end),r.setEnd(n.container(),n.offset()),r}(n,t))
if(function(e){return be(e,"id")}(t))return function(e,t){var n=$f(e,"start",t),r=$f(e,"end",t)
return Xn(n,r.or(n),(function(t,n){var r=e.createRng()
return r.setStart(zf(e,t.container()),t.offset()),r.setEnd(zf(e,n.container()),n.offset()),r}))}(n,t)
if(function(e){return be(e,"name")}(t))return function(e,t){return L.from(e.select(t.name)[t.index]).map((function(t){var n=e.createRng()
return n.selectNode(t),n}))}(n,t)
if(function(e){return be(e,"rng")}(t))return L.some(t.rng)}return L.none()},Kf=function(e,t,n){return Yc(e,t,n)},Xf=function(e,t){Wf(e,t).each((function(t){e.setRng(t)}))},Yf=function(e){return Rn(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},Gf=(df=bo,function(e){return df===e}),Jf=function(e){return""!==e&&-1!==" \f\n\r\t\v".indexOf(e)},Qf=function(e){return!Jf(e)&&!Gf(e)},Zf=function(e){return!!e.nodeType},el=function(e,t,n){var r=n.startOffset,o=n.startContainer
if((o!==n.endContainer||!function(e){return e&&/^(IMG)$/.test(e.nodeName)}(o.childNodes[r]))&&Rn(o)){var i=o.childNodes,a=void 0
r<i.length?(o=i[r],a=new io(o,e.getParent(o,e.isBlock))):(o=i[i.length-1],(a=new io(o,e.getParent(o,e.isBlock))).next(!0))
for(var u=a.current();u;u=a.next())if(Mn(u)&&!ol(u))return n.setStart(u,0),void t.setRng(n)}},tl=function(e,t,n){if(e){var r=t?"nextSibling":"previousSibling"
for(e=n?e:e[r];e;e=e[r])if(Rn(e)||!ol(e))return e}},nl=function(e,t){return Zf(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},rl=function(e,t,n){return e.schema.isValidChild(t,n)},ol=function(e,t){if(void 0===t&&(t=!1),v(e)&&Mn(e)){var n=t?e.data.replace(/ /g," "):e.data
return Ko(n)}return!1},il=function(e,t){return b(e)?e=e(t):v(t)&&(e=e.replace(/%(\w+)/g,(function(e,n){return t[n]||e}))),e},al=function(e,t){return t=t||"",e=""+((e=e||"").nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()===t.toLowerCase()},ul=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},cl=function(e,t,n){return ul(e,e.getStyle(t,n),n)},sl=function(e,t){var n
return e.getParent(t,(function(t){return(n=e.getStyle(t,"text-decoration"))&&"none"!==n})),n},fl=function(e,t,n){return e.getParents(t,n,e.getRoot())},ll=function(e,t,n){var r=["inline","block","selector","attributes","styles","classes"],o=function(e){return pe(e,(function(e,t){return H(r,(function(e){return e===t}))}))}
return H(e.formatter.get(t),(function(t){var r=o(t)
return H(e.formatter.get(n),(function(e){var t=o(e)
return function(e,t,n){return void 0===n&&(n=a),i(n).eq(e,t)}(r,t)}))}))},dl=function(e){return ye(e,"block")},ml=function(e){return ye(e,"selector")},gl=function(e){return ye(e,"inline")},pl=function(e){return ml(e)&&!1!==e.expand&&!gl(e)},hl=Yf,vl=fl,bl=ol,yl=nl,Cl=function(e,t){for(var n=t;n;){if(Rn(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t
n=n.parentNode}return t},xl=function(e,t,n,r){for(var o=t.data,i=n;e?i>=0:i<o.length;e?i--:i++)if(r(o.charAt(i)))return e?i+1:i
return-1},wl=function(e,t,n){return xl(e,t,n,(function(e){return Gf(e)||Jf(e)}))},Sl=function(e,t,n){return xl(e,t,n,Qf)},kl=function(e,t,n,r,o,i){var a,u=e.getParent(n,e.isBlock)||t,c=function(t,n,r){var i=Ju(e),c=o?i.backwards:i.forwards
return L.from(c(t,n,(function(e,t){return hl(e.parentNode)?-1:(a=e,r(o,e,t))}),u))}
return c(n,r,wl).bind((function(e){return i?c(e.container,e.offset+(o?-1:0),Sl):L.some(e)})).orThunk((function(){return a?L.some({container:a,offset:o?0:a.length}):L.none()}))},Nl=function(e,t,n,r,o){Mn(r)&&je(r.data)&&r[o]&&(r=r[o])
for(var i=vl(e,r),a=0;a<i.length;a++)for(var u=0;u<t.length;u++){var c=t[u]
if((!v(c.collapsed)||c.collapsed===n.collapsed)&&(ml(c)&&e.is(i[a],c.selector)))return i[a]}return r},El=function(e,t,n,r){var o=n,i=e.dom,a=i.getRoot(),u=t[0]
if(dl(u)&&(o=u.wrapper?null:i.getParent(n,u.block,a)),!o){var c=i.getParent(n,"LI,TD,TH")
o=i.getParent(Mn(n)?n.parentNode:n,(function(t){return t!==a&&yl(e,t)}),c)}if(o&&dl(u)&&u.wrapper&&(o=vl(i,o,"ul,ol").reverse()[0]||o),!o)for(o=n;o[r]&&!i.isBlock(o[r])&&(o=o[r],!al(o,"br")););return o||n},_l=function(e,t,n,r){var o=n.parentNode
return!v(n[r])&&(!(o!==t&&!h(o)&&!e.isBlock(o))||_l(e,t,o,r))},Al=function(e,t,n,r,o){var i,a=n,u=o?"previousSibling":"nextSibling",c=e.getRoot()
if(Mn(n)&&!bl(n)&&(o?r>0:r<n.data.length))return n
for(;;){if(!t[0].block_expand&&e.isBlock(a))return a
for(var s=a[u];s;s=s[u]){var f=Mn(s)&&!_l(e,c,s,u)
if(!hl(s)&&(!Hn(i=s)||!i.getAttribute("data-mce-bogus")||i.nextSibling)&&!bl(s,f))return a}if(a===c||a.parentNode===c){n=a
break}a=a.parentNode}return n},Rl=function(e){return hl(e.parentNode)||hl(e)},Dl=function(e,t,n,r){void 0===r&&(r=!1)
var o=t.startContainer,i=t.startOffset,a=t.endContainer,u=t.endOffset,c=e.dom,s=n[0];(Rn(o)&&o.hasChildNodes()&&(o=ac(o,i),Mn(o)&&(i=0)),Rn(a)&&a.hasChildNodes()&&(a=ac(a,t.collapsed?u:u-1),Mn(a)&&(u=a.nodeValue.length)),o=Cl(c,o),a=Cl(c,a),Rl(o)&&(o=hl(o)?o:o.parentNode,o=t.collapsed?o.previousSibling||o:o.nextSibling||o,Mn(o)&&(i=t.collapsed?o.length:0)),Rl(a)&&(a=hl(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,Mn(a)&&(u=t.collapsed?0:a.length)),t.collapsed)&&(kl(c,e.getBody(),o,i,!0,r).each((function(e){var t=e.container,n=e.offset
o=t,i=n})),kl(c,e.getBody(),a,u,!1,r).each((function(e){var t=e.container,n=e.offset
a=t,u=n})))
return(gl(s)||s.block_expand)&&(gl(s)&&Mn(o)&&0!==i||(o=Al(c,n,o,i,!0)),gl(s)&&Mn(a)&&u!==a.nodeValue.length||(a=Al(c,n,a,u,!1))),pl(s)&&(o=Nl(c,n,t,o,"previousSibling"),a=Nl(c,n,t,a,"nextSibling")),(dl(s)||ml(s))&&(o=El(e,n,o,"previousSibling"),a=El(e,n,a,"nextSibling"),dl(s)&&(c.isBlock(o)||(o=Al(c,n,o,i,!0)),c.isBlock(a)||(a=Al(c,n,a,u,!1)))),Rn(o)&&(i=c.nodeIndex(o),o=o.parentNode),Rn(a)&&(u=c.nodeIndex(a)+1,a=a.parentNode),{startContainer:o,startOffset:i,endContainer:a,endOffset:u}},Tl=function(e,t,n){var r=t.startOffset,o=ac(t.startContainer,r),i=t.endOffset,a=ac(t.endContainer,i-1),u=function(e){var t=e[0]
Mn(t)&&t===o&&r>=t.data.length&&e.splice(0,1)
var n=e[e.length-1]
return 0===i&&e.length>0&&n===a&&Mn(n)&&e.splice(e.length-1,1),e},c=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e)
return r},s=function(t,n){return e.getParent(t,(function(e){return e.parentNode===n}),n)},f=function(e,t,r){for(var o=r?"nextSibling":"previousSibling",i=e,a=i.parentNode;i&&i!==t;i=a){a=i.parentNode
var s=c(i===e?i:i[o],o)
s.length&&(r||s.reverse(),n(u(s)))}}
if(o===a)return n(u([o]))
var l=e.findCommonAncestor(o,a)
if(e.isChildOf(o,a))return f(o,l,!0)
if(e.isChildOf(a,o))return f(a,l)
var d=s(o,l)||o,m=s(a,l)||a
f(o,d,!0)
var g=c(d===o?d:d.nextSibling,"nextSibling",m===a?m.nextSibling:m)
g.length&&n(u(g)),f(a,m)},Ol=function(e){var t=[]
if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n))
return t},Bl=function(e){return W(function(e){return Q(e,(function(e){var t=ic(e)
return t?[At.fromDom(t)]:[]}))}(e),ho)},Pl=function(e,t){var n=Iu(t,"td[data-mce-selected],th[data-mce-selected]")
return n.length>0?n:Bl(e)},Ll=function(e){return Pl(Ol(e.selection.getSel()),At.fromDom(e.getBody()))},Il=function(e,t){return Yr(e,"table",t)},Ml=function(e){return Qt(e).fold(S([e]),(function(t){return[e].concat(Ml(t))}))},Fl=function(e){return Zt(e).fold(S([e]),(function(t){return"br"===Lt(t)?Wt(t).map((function(t){return[e].concat(Fl(t))})).getOr([]):[e].concat(Fl(t))}))},Ul=function(e,t){return Xn(function(e){var t=e.startContainer,n=e.startOffset
return Mn(t)?0===n?L.some(At.fromDom(t)):L.none():L.from(t.childNodes[n]).map(At.fromDom)}(t),function(e){var t=e.endContainer,n=e.endOffset
return Mn(t)?n===t.data.length?L.some(At.fromDom(t)):L.none():L.from(t.childNodes[n-1]).map(At.fromDom)}(t),(function(t,n){var r=G(Ml(e),E(Ot,t)),o=G(Fl(e),E(Ot,n))
return r.isSome()&&o.isSome()})).getOr(!1)},zl=function(e,t,n,r){var o=n,i=new io(n,o),a=pe(e.schema.getMoveCaretBeforeOnEnterElements(),(function(e,t){return!z(["td","th","table"],t.toLowerCase())}))
do{if(Mn(n)&&0!==Et.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length))
if(a[n.nodeName])return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n))}while(n=r?i.next():i.prev())
"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},Hl=function(e){var t=e.selection.getSel()
return t&&t.rangeCount>0},jl=function(e,t){var n=Ll(e)
n.length>0?V(n,(function(n){var r=n.dom,o=e.dom.createRng()
o.setStartBefore(r),o.setEndAfter(r),t(o,!0)})):t(e.selection.getRng(),!1)},Vl=function(e,t,n){var r=Xc(e,t)
n(r),e.moveToBookmark(r)},ql=function(e,t){var n=function(t){return e(t)?L.from(t.dom.nodeValue):L.none()}
return{get:function(r){if(!e(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return n(r).getOr("")},getOption:n,set:function(n,r){if(!e(n))throw new Error("Can only set raw "+t+" value of a "+t+" node")
n.dom.nodeValue=r}}}(Ut,"text"),$l=function(e){return ql.get(e)},Wl=function(e,t,n,r){return $t(t).fold((function(){return"skipping"}),(function(o){return"br"===r||function(e){return Ut(e)&&$l(e)===yo}(t)?"valid":function(e){return Ft(e)&&Pu(e,Mu())}(t)?"existing":Mf(t.dom)?"caret":rl(e,n,r)&&rl(e,Lt(o),n)?"valid":"invalid-child"}))},Kl=function(e,t,n,r){var o=t.uid,i=void 0===o?$u("mce-annotation"):o,a=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),u=At.fromTag("span",e)
Ou(u,Mu()),Jn(u,""+Uu(),i),Jn(u,""+Fu(),n)
var c=r(i,a),s=c.attributes,f=void 0===s?{}:s,l=c.classes,d=void 0===l?[]:l
return Qn(u,f),function(e,t){V(t,(function(t){Ou(e,t)}))}(u,d),u},Xl=function(e,t,n,r,o){var i=[],a=Kl(e.getDoc(),o,n,r),u=Nu(),c=function(){u.clear()},s=function(e){V(e,f)},f=function(t){switch(Wl(e,t,"span",Lt(t))){case"invalid-child":c()
var n=Gt(t)
s(n),c()
break
case"valid":(function(e,t){sn(e,t),dn(t,e)})(t,u.get().getOrThunk((function(){var e=Xu(a)
return i.push(e),u.set(e),e})))}}
return Tl(e.dom,t,(function(e){c(),function(e){var t=j(e,At.fromDom)
s(t)}(e)})),i},Yl=function(e,t,n,r){e.undoManager.transact((function(){var o=e.selection,i=o.getRng(),a=Ll(e).length>0
if(i.collapsed&&!a&&function(e,t){var n=Dl(e,t,[{inline:"span"}])
t.setStart(n.startContainer,n.startOffset),t.setEnd(n.endContainer,n.endOffset),e.selection.setRng(t)}(e,i),o.getRng().collapsed&&!a){var u=Kl(e.getDoc(),r,t,n.decorate)
Wu(u,bo),o.getRng().insertNode(u.dom),o.select(u.dom)}else Vl(o,!1,(function(){jl(e,(function(o){Xl(e,o,t,n.decorate,r)}))}))}))},Gl=function(e){var t,n=(t={},{register:function(e,n){t[e]={name:e,settings:n}},lookup:function(e){return ve(t,e).map((function(e){return e.settings}))}})
Vu(e,n)
var r=ju(e)
return{register:function(e,t){n.register(e,t)},annotate:function(t,r){n.lookup(t).each((function(n){Yl(e,t,n,r)}))},annotationChanged:function(e,t){r.addListener(e,t)},remove:function(t){zu(e,L.some(t)).each((function(e){var t=e.elements
V(t,hn)}))},getAll:function(t){var n=function(e,t){var n=At.fromDom(e.getBody()),r=Iu(n,"["+Fu()+'="'+t+'"]'),o={}
return V(r,(function(e){var t=Zn(e,Uu()),n=ve(o,t).getOr([])
o[t]=n.concat([e])})),o}(e,t)
return le(n,(function(e){return j(e,(function(e){return e.dom}))}))}}},Jl=function(e){return{getBookmark:E(Kf,e),moveToBookmark:E(Xf,e)}}
Jl.isBookmarkNode=Yf
var Ql=function(e,t){for(;t&&t!==e;){if(Vn(t)||qn(t))return t
t=t.parentNode}return null},Zl=function(e,t,n){if(n.collapsed)return!1
if(xt.browser.isIE()&&n.startOffset===n.endOffset-1&&n.startContainer===n.endContainer){var r=n.startContainer.childNodes[n.startOffset]
if(Rn(r))return H(r.getClientRects(),(function(n){return oc(n,e,t)}))}return H(n.getClientRects(),(function(n){return oc(n,e,t)}))},ed=function(e,t,n){return e.fire(t,n)},td=function(e,t,n,r){return e.fire("FormatApply",{format:t,node:n,vars:r})},nd=function(e,t,n,r){return e.fire("FormatRemove",{format:t,node:n,vars:r})},rd={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,ESC:27,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||rd.metaKeyPressed(e)},metaKeyPressed:function(e){return xt.mac?e.metaKey:e.ctrlKey&&!e.altKey}},od=qn,id=function(e,t){var n,r,o,i,a,u,c,s,f,l,d,m,g,p,h,b="data-mce-selected",y=t.dom,C=Et.each,x=t.getDoc(),w=document,S=Math.abs,k=Math.round,N=t.getBody(),E={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},_=function(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))},A=function(e){return Wn(e)||y.hasClass(e,"mce-preview-object")},R=function(e){var n=e.target;(function(e,t){if("longpress"===e.type||0===e.type.indexOf("touch")){var n=e.touches[0]
return _(e.target)&&!Zl(n.clientX,n.clientY,t)}return _(e.target)&&!Zl(e.clientX,e.clientY,t)})(e,t.selection.getRng())&&!e.isDefaultPrevented()&&t.selection.select(n)},D=function(e){return y.is(e,"figure.image")?[e.querySelector("img")]:y.hasClass(e,"mce-preview-object")&&v(e.firstElementChild)?[e,e.firstElementChild]:[e]},T=function(e){var n=gs(t)
return!!n&&("false"!==e.getAttribute("data-mce-resize")&&(e!==t.getBody()&&(y.hasClass(e,"mce-preview-object")?Dt(At.fromDom(e.firstElementChild),n):Dt(At.fromDom(e),n))))},O=function(e,n,r){if(v(r)){var o=D(e)
V(o,(function(e){e.style[n]||!t.schema.isValid(e.nodeName.toLowerCase(),n)?y.setStyle(e,n,r):y.setAttrib(e,n,""+r)}))}},B=function(e,t,n){O(e,"width",t),O(e,"height",n)},P=function(e){var a,v,b,C
a=e.screenX-u,v=e.screenY-c,m=a*i[2]+s,g=v*i[3]+f,m=m<5?5:m,g=g<5?5:g,((_(n)||A(n))&&!1!==function(e){return e.getParam("resize_img_proportional",!0,"boolean")}(t)?!rd.modifierPressed(e):rd.modifierPressed(e))&&(S(a)>S(v)?(g=k(m*l),m=k(g/l)):(m=k(g/l),g=k(m*l))),B(r,m,g),b=(b=i.startPos.x+a)>0?b:0,C=(C=i.startPos.y+v)>0?C:0,y.setStyles(o,{left:b,top:C,display:"block"}),o.innerHTML=m+" &times; "+g,i[2]<0&&r.clientWidth<=m&&y.setStyle(r,"left",undefined+(s-m)),i[3]<0&&r.clientHeight<=g&&y.setStyle(r,"top",undefined+(f-g)),(a=N.scrollWidth-p)+(v=N.scrollHeight-h)!==0&&y.setStyles(o,{left:b-a,top:C-v}),d||(function(e,t,n,r,o){e.fire("ObjectResizeStart",{target:t,width:n,height:r,origin:o})}(t,n,s,f,"corner-"+i.name),d=!0)},L=function(){var e=d
d=!1,e&&(O(n,"width",m),O(n,"height",g)),y.unbind(x,"mousemove",P),y.unbind(x,"mouseup",L),w!==x&&(y.unbind(w,"mousemove",P),y.unbind(w,"mouseup",L)),y.remove(r),y.remove(o),y.remove(a),I(n),e&&(function(e,t,n,r,o){e.fire("ObjectResized",{target:t,width:n,height:r,origin:o})}(t,n,m,g,"corner-"+i.name),y.setAttrib(n,"style",y.getAttrib(n,"style"))),t.nodeChanged()},I=function(e){z()
var d=y.getPos(e,N),v=d.x,S=d.y,k=e.getBoundingClientRect(),_=k.width||k.right-k.left,R=k.height||k.bottom-k.top
n!==e&&(M(),n=e,m=g=0)
var O=t.fire("ObjectSelected",{target:e}),I=y.getAttrib(n,b,"1")
T(e)&&!O.isDefaultPrevented()?C(E,(function(e,t){var d,m=function(d){var m,g=D(n)[0]
u=d.screenX,c=d.screenY,s=g.clientWidth,f=g.clientHeight,l=f/s,(i=e).name=t,i.startPos={x:_*e[0]+v,y:R*e[1]+S},p=N.scrollWidth,h=N.scrollHeight,a=y.add(N,"div",{class:"mce-resize-backdrop","data-mce-bogus":"all"}),y.setStyles(a,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"}),r=A(m=n)?y.create("img",{src:xt.transparentSrc}):m.cloneNode(!0),y.addClass(r,"mce-clonedresizable"),y.setAttrib(r,"data-mce-bogus","all"),r.contentEditable="false",y.setStyles(r,{left:v,top:S,margin:0}),B(r,_,R),r.removeAttribute(b),N.appendChild(r),y.bind(x,"mousemove",P),y.bind(x,"mouseup",L),w!==x&&(y.bind(w,"mousemove",P),y.bind(w,"mouseup",L)),o=y.add(N,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},s+" &times; "+f)};(d=y.get("mceResizeHandle"+t))&&y.remove(d),d=y.add(N,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),11===xt.ie&&(d.contentEditable=!1),y.bind(d,"mousedown",(function(e){e.stopImmediatePropagation(),e.preventDefault(),m(e)})),e.elm=d,y.setStyles(d,{left:_*e[0]+v-d.offsetWidth/2,top:R*e[1]+S-d.offsetHeight/2})})):M(),y.getAttrib(n,b)||n.setAttribute(b,I)},M=function(){z(),n&&n.removeAttribute(b),fe(E,(function(e,t){var n=y.get("mceResizeHandle"+t)
n&&(y.unbind(n),y.remove(n))}))},F=function(n){var r,o=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)}
d||t.removed||(C(y.select("img[data-mce-selected],hr[data-mce-selected]"),(function(e){e.removeAttribute(b)})),r="mousedown"===n.type?n.target:e.getNode(),o(r=y.$(r).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0],N)&&(H(),o(e.getStart(!0),r)&&o(e.getEnd(!0),r))?I(r):M())},U=function(e){return od(Ql(t.getBody(),e))},z=function(){fe(E,(function(e){e.elm&&(y.unbind(e.elm),delete e.elm)}))},H=function(){try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(e){}}
t.on("init",(function(){if(H(),xt.browser.isIE()||xt.browser.isEdge()){t.on("mousedown click",(function(e){var n=e.target,r=n.nodeName
d||!/^(TABLE|IMG|HR)$/.test(r)||U(n)||(2!==e.button&&t.selection.select(n,"TABLE"===r),"mousedown"===e.type&&t.nodeChanged())}))
var e=function(e){var n=function(e){no.setEditorTimeout(t,(function(){return t.selection.select(e)}))}
if(U(e.target)||Wn(e.target))return e.preventDefault(),void n(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&n(e.target))}
y.bind(N,"mscontrolselect",e),t.on("remove",(function(){return y.unbind(N,"mscontrolselect",e)}))}var r=no.throttle((function(e){t.composing||F(e)}))
t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",r),t.on("keyup compositionend",(function(e){n&&"TABLE"===n.nodeName&&r(e)})),t.on("hide blur",M),t.on("contextmenu longpress",R,!0)})),t.on("remove",z)
return{isResizable:T,showResizeRect:I,hideResizeRect:M,updateResizeRect:F,destroy:function(){n=r=a=null}}},ad=function(e){return Vn(e)||qn(e)},ud=function(e,t,n){var r,o,i=n
if(i.caretPositionFromPoint)(o=i.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(o.offsetNode,o.offset),r.collapse(!0))
else if(i.caretRangeFromPoint)r=i.caretRangeFromPoint(e,t)
else if(i.body.createTextRange){r=i.body.createTextRange()
try{r.moveToPoint(e,t),r.collapse(!0)}catch(a){r=function(e,t,n){var r,o=n.elementFromPoint(e,t),i=n.body.createTextRange()
if(o&&"HTML"!==o.tagName||(o=n.body),i.moveToElementText(o),(r=(r=Et.toArray(i.getClientRects())).sort((function(e,n){return(e=Math.abs(Math.max(e.top-t,e.bottom-t)))-Math.abs(Math.max(n.top-t,n.bottom-t))}))).length>0){t=(r[0].bottom+r[0].top)/2
try{return i.moveToPoint(e,t),i.collapse(!0),i}catch(a){}}return null}(e,t,n)}return function(e,t){var n=e&&e.parentElement?e.parentElement():null
return qn(function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(n,t,ad))?null:e}(r,n.body)}return r},cd=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},sd=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(e,t,n)},fd=function(e,t,n){return sd(e,t,(function(e){return e.nodeName===n}))},ld=function(e){return e&&"TABLE"===e.nodeName},dd=function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)},md=function(e,t){return Eo(e)&&!1===sd(e,t,Mf)},gd=function(e,t,n){for(var r=new io(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(Hn(t))return!0},pd=function(e,t,n,r,o){var i,a,u=e.getRoot(),c=e.schema.getNonEmptyElements(),s=e.getParent(o.parentNode,e.isBlock)||u
if(r&&Hn(o)&&t&&e.isEmpty(s))return L.some(_c(o.parentNode,e.nodeIndex(o)))
for(var f=new io(o,s);a=f[r?"prev":"next"]();){if("false"===e.getContentEditableParent(a)||md(a,u))return L.none()
if(Mn(a)&&a.nodeValue.length>0)return!1===fd(a,u,"A")?L.some(_c(a,r?a.nodeValue.length:0)):L.none()
if(e.isBlock(a)||c[a.nodeName.toLowerCase()])return L.none()
i=a}return n&&i?L.some(_c(i,0)):L.none()},hd=function(e,t,n,r){var o,i,a,u,c=e.getRoot(),s=!1
o=r[(n?"start":"end")+"Container"],i=r[(n?"start":"end")+"Offset"]
var f=Rn(o)&&i===o.childNodes.length,l=e.schema.getNonEmptyElements()
if(u=n,Eo(o))return L.none()
if(Rn(o)&&i>o.childNodes.length-1&&(u=!1),Un(o)&&(o=c,i=0),o===c){if(u&&(a=o.childNodes[i>0?i-1:0])){if(Eo(a))return L.none()
if(l[a.nodeName]||ld(a))return L.none()}if(o.hasChildNodes()){if(i=Math.min(!u&&i>0?i-1:i,o.childNodes.length-1),o=o.childNodes[i],i=Mn(o)&&f?o.data.length:0,!t&&o===c.lastChild&&ld(o))return L.none()
if(function(e,t){for(;t&&t!==e;){if(qn(t))return!0
t=t.parentNode}return!1}(c,o)||Eo(o))return L.none()
if(o.hasChildNodes()&&!1===ld(o)){a=o
var d=new io(o,c)
do{if(qn(a)||Eo(a)){s=!1
break}if(Mn(a)&&a.nodeValue.length>0){i=u?0:a.nodeValue.length,o=a,s=!0
break}if(l[a.nodeName.toLowerCase()]&&!dd(a)){i=e.nodeIndex(a),o=a.parentNode,u||i++,s=!0
break}}while(a=u?d.next():d.prev())}}}return t&&(Mn(o)&&0===i&&pd(e,f,t,!0,o).each((function(e){o=e.container(),i=e.offset(),s=!0})),Rn(o)&&((a=o.childNodes[i])||(a=o.childNodes[i-1]),!a||!Hn(a)||function(e,t){return e.previousSibling&&e.previousSibling.nodeName===t}(a,"A")||gd(e,a,!1)||gd(e,a,!0)||pd(e,f,t,!0,a).each((function(e){o=e.container(),i=e.offset(),s=!0})))),u&&!t&&Mn(o)&&i===o.nodeValue.length&&pd(e,f,t,!1,o).each((function(e){o=e.container(),i=e.offset(),s=!0})),s?L.some(_c(o,i)):L.none()},vd=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=_c.fromRangeStart(t)
return hd(e,n,!0,r).each((function(e){n&&_c.isAbove(o,e)||r.setStart(e.container(),e.offset())})),n||hd(e,n,!1,r).each((function(e){r.setEnd(e.container(),e.offset())})),n&&r.collapse(!0),cd(t,r)?L.none():L.some(r)},bd=function(e,t){return e.splitText(t)},yd=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset
return t===r&&Mn(t)?n>0&&n<t.nodeValue.length&&(t=(r=bd(t,n)).previousSibling,o>n?(t=r=bd(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(Mn(t)&&n>0&&n<t.nodeValue.length&&(t=bd(t,n),n=0),Mn(r)&&o>0&&o<r.nodeValue.length&&(o=(r=bd(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}},Cd=function(e){return{walk:function(t,n){return Tl(e,t,n)},split:yd,normalize:function(t){return vd(e,t).fold(D,(function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0}))}}}
Cd.compareRanges=cd,Cd.getCaretRangeFromPoint=ud,Cd.getSelectedNode=ic,Cd.getNode=ac
var xd,wd=function(e,t){var n=function(n){var r=t(n)
if(r<=0||null===r){var o=rr(n,e)
return parseFloat(o)||0}return r},r=function(e,t){return X(t,(function(t,n){var r=rr(e,n),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,n){if(!y(n)&&!n.match(/^[0-9]+$/))throw new Error(e+".set accepts only positive integer values. Value was "+n)
var r=t.dom
Yn(r)&&(r.style[e]=n+"px")},get:n,getOuter:n,aggregate:r,max:function(e,t,n){var o=r(e,n)
return t>o?t-o:0}}}("height",(function(e){var t=e.dom
return vn(e)?t.getBoundingClientRect().height:t.offsetHeight})),Sd=function(e,t){return e.view(t).fold(S([]),(function(t){var n=e.owner(t),r=Sd(e,n)
return[t].concat(r)}))},kd=Object.freeze({__proto__:null,view:function(e){var t
return(e.dom===document?L.none():L.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(At.fromDom)},owner:function(e){return Vt(e)}}),Nd=function(e){var t=At.fromDom(document),n=wn(t),r=function(e,t){var n=t.owner(e)
return Sd(t,n)}(e,kd),o=xn(e),i=K(r,(function(e,t){var n=xn(t)
return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0})
return yn(i.left+o.left+n.left,i.top+o.top+n.top)},Ed=function(e){return"textarea"===Lt(e)},_d=function(e,t){var n=function(e){var t=e.dom.ownerDocument,n=t.body,r=t.defaultView,o=t.documentElement
if(n===e.dom)return yn(n.offsetLeft,n.offsetTop)
var i=Cn(null==r?void 0:r.pageYOffset,o.scrollTop),a=Cn(null==r?void 0:r.pageXOffset,o.scrollLeft),u=Cn(o.clientTop,n.clientTop),c=Cn(o.clientLeft,n.clientLeft)
return xn(e).translate(a-c,i-u)}(e),r=function(e){return wd.get(e)}(e)
return{element:e,bottom:n.top+r,height:r,pos:n,cleanup:t}},Ad=function(e,t){var n=function(e,t){var n=Gt(e)
if(0===n.length||Ed(e))return{element:e,offset:t}
if(t<n.length&&!Ed(n[t]))return{element:n[t],offset:0}
var r=n[n.length-1]
return Ed(r)?{element:e,offset:t}:"img"===Lt(r)?{element:r,offset:1}:Ut(r)?{element:r,offset:$l(r).length}:{element:r,offset:Gt(r).length}}(e,t),r=At.fromHtml('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>')
return sn(n.element,r),_d(r,(function(){return pn(r)}))},Rd=function(e,t,n,r){Bd(e,(function(o,i){return Td(e,t,n,r)}),n)},Dd=function(e,t,n,r,o){var i={elm:r.element.dom,alignToTop:o};(function(e,t){return e.fire("ScrollIntoView",t).isDefaultPrevented()})(e,i)||(n(t,wn(t).top,r,o),function(e,t){e.fire("AfterScrollIntoView",t)}(e,i))},Td=function(e,t,n,r){var o=At.fromDom(e.getBody()),i=At.fromDom(e.getDoc())
o.dom.offsetWidth
var a=Ad(At.fromDom(n.startContainer),n.startOffset)
Dd(e,i,t,a,r),a.cleanup()},Od=function(e,t,n,r){var o=At.fromDom(e.getDoc())
Dd(e,o,n,function(e){return _d(At.fromDom(e),C)}(t),r)},Bd=function(e,t,n){var r=n.startContainer,o=n.startOffset,i=n.endContainer,a=n.endOffset
t(At.fromDom(r),At.fromDom(i))
var u=e.dom.createRng()
u.setStart(r,o),u.setEnd(i,a),e.selection.setRng(n)},Pd=function(e,t,n,r){var o=e.pos
if(n)Sn(o.left,o.top,r)
else{var i=o.top-t+e.height
Sn(o.left,i,r)}},Ld=function(e,t,n,r,o){var i=n+t,a=r.pos.top,u=r.bottom,c=u-a>=n
if(a<t)Pd(r,n,!1!==o,e)
else if(a>i){Pd(r,n,c?!1!==o:!0===o,e)}else u>i&&!c&&Pd(r,n,!0===o,e)},Id=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
Ld(e,t,o,n,r)},Md=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
Ld(e,t,o,n,r)
var i=Nd(n.element),a=En(window)
i.top<a.y?kn(n.element,!1!==r):i.top>a.bottom&&kn(n.element,!0===r)},Fd=function(e,t,n){return Rd(e,Id,t,n)},Ud=function(e,t,n){return Od(e,t,Id,n)},zd=function(e,t,n){return Rd(e,Md,t,n)},Hd=function(e,t,n){return Od(e,t,Md,n)},jd=function(e,t,n){(e.inline?Fd:zd)(e,t,n)},Vd=function(e){var t=on(e).dom
return e.dom===t.activeElement},qd=function(e){return void 0===e&&(e=At.fromDom(document)),L.from(e.dom.activeElement).map(At.fromDom)},$d=function(e,t,n,r){return{start:e,soffset:t,finish:n,foffset:r}},Wd=Sr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Kd=(Wd.before,Wd.on,Wd.after,function(e){return e.fold(k,k,k)}),Xd=Sr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),Yd={domRange:Xd.domRange,relative:Xd.relative,exact:Xd.exact,exactFromRange:function(e){return Xd.exact(e.start,e.soffset,e.finish,e.foffset)},getWin:function(e){var t=function(e){return e.match({domRange:function(e){return At.fromDom(e.startContainer)},relative:function(e,t){return Kd(e)},exact:function(e,t,n,r){return e}})}(e)
return qt(t)},range:$d},Gd=dt().browser,Jd=function(e,t){var n=Ut(t)?$l(t).length:Gt(t).length+1
return e>n?n:e<0?0:e},Qd=function(e){return Yd.range(e.start,Jd(e.soffset,e.start),e.finish,Jd(e.foffset,e.finish))},Zd=function(e,t){return!An(t.dom)&&(Pt(e,t)||Ot(e,t))},em=function(e){return function(t){return Zd(e,t.start)&&Zd(e,t.finish)}},tm=function(e){return!0===e.inline||Gd.isIE()},nm=function(e){return Yd.range(At.fromDom(e.startContainer),e.startOffset,At.fromDom(e.endContainer),e.endOffset)},rm=function(e){return function(e){var t=e.getSelection()
return(t&&0!==t.rangeCount?L.from(t.getRangeAt(0)):L.none()).map(nm)}(qt(e).dom).filter(em(e))},om=function(e){var t=document.createRange()
try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),L.some(t)}catch(n){return L.none()}},im=function(e){var t=tm(e)?rm(At.fromDom(e.getBody())):L.none()
e.bookmark=t.isSome()?t:e.bookmark},am=function(e){return(e.bookmark?e.bookmark:L.none()).bind((function(t){return function(e,t){return L.from(t).filter(em(e)).map(Qd)}(At.fromDom(e.getBody()),t)})).bind(om)},um={isEditorUIElement:function(e){var t=e.className.toString()
return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},cm=function(e,t){dt().browser.isIE()?function(e){e.on("focusout",(function(){im(e)}))}(e):function(e,t){e.on("mouseup touchend",(function(e){t.throttle()}))}(e,t),e.on("keyup NodeChange",(function(t){(function(e){return"nodechange"===e.type&&e.selectionChange})(t)||im(e)}))},sm=function(e){var t=Eu((function(){im(e)}),0)
e.on("init",(function(){e.inline&&function(e,t){var n=function(){t.throttle()}
gu.DOM.bind(document,"mouseup",n),e.on("remove",(function(){gu.DOM.unbind(document,"mouseup",n)}))}(e,t),cm(e,t)})),e.on("remove",(function(){t.cancel()}))},fm=gu.DOM,lm=function(e,t){var n=function(e){return e.getParam("custom_ui_selector","","string")}(e)
return null!==fm.getParent(t,(function(t){return function(e){return um.isEditorUIElement(e)}(t)||!!n&&e.dom.is(t,n)}))},dm=function(e,t){var n=t.editor
sm(n),n.on("focusin",(function(){var t=e.focusedEditor
t!==n&&(t&&t.fire("blur",{focusedEditor:n}),e.setActive(n),e.focusedEditor=n,n.fire("focus",{blurredEditor:t}),n.focus(!0))})),n.on("focusout",(function(){no.setEditorTimeout(n,(function(){var t=e.focusedEditor
lm(n,function(e){try{var t=on(At.fromDom(e.getElement()))
return qd(t).fold((function(){return document.body}),(function(e){return e.dom}))}catch(n){return document.body}}(n))||t!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),xd||(xd=function(t){var n=e.activeEditor
n&&function(e){if(rn()&&v(e.target)){var t=At.fromDom(e.target)
if(Ft(t)&&cn(t)&&e.composed&&e.composedPath){var n=e.composedPath()
if(n)return oe(n)}}return L.from(e.target)}(t).each((function(t){t.ownerDocument===document&&(t===document.body||lm(n,t)||e.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))}))},fm.bind(document,"focusin",xd))},mm=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(fm.unbind(document,"focusin",xd),xd=null)},gm=function(e,t){return function(e){return e.collapsed?L.from(ac(e.startContainer,e.startOffset)).map(At.fromDom):L.none()}(t).bind((function(t){return po(t)?L.some(t):!1===Pt(e,t)?L.some(e):L.none()}))},pm=function(e,t){gm(At.fromDom(e.getBody()),t).bind((function(e){return Pf(e.dom)})).fold((function(){e.selection.normalize()}),(function(t){return e.selection.setRng(t.toRange())}))},hm=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},vm=function(e){return Vd(e)||(t=e,qd(on(t)).filter((function(e){return t.dom.contains(e.dom)}))).isSome()
var t},bm=function(e){return e.inline?function(e){var t=e.getBody()
return t&&vm(At.fromDom(t))}(e):function(e){return e.iframeElement&&Vd(At.fromDom(e.iframeElement))}(e)},ym=function(e){return bm(e)||function(e){var t=on(At.fromDom(e.getElement()))
return qd(t).filter((function(t){return!(void 0!==(n=t.dom.classList)&&(n.contains("tox-edit-area")||n.contains("tox-edit-area__iframe")||n.contains("mce-content-body")))&&lm(e,t.dom)
var n})).isSome()}(e)},Cm=function(e){return e.editorManager.setActive(e)},xm=function(e,t){e.removed||(t?Cm(e):function(e){var t=e.selection,n=e.getBody(),r=t.getRng()
e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===bm(e)&&am(e).each((function(t){e.selection.setRng(t),r=t}))
var o=function(e,t){return e.dom.getParent(t,(function(t){return"true"===e.dom.getContentEditable(t)}))}(e,t.getNode())
if(e.$.contains(n,o))return hm(o),pm(e,r),void Cm(e)
e.inline||(xt.opera||hm(n),e.getWin().focus()),(xt.gecko||e.inline)&&(hm(n),pm(e,r)),Cm(e)}(e))},wm=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset
return L.from(i).map(At.fromDom).map((function(e){return r&&t.collapsed?e:Jt(e,o(e,a)).getOr(e)})).bind((function(e){return Ft(e)?L.some(e):$t(e).filter(Ft)})).map((function(e){return e.dom})).getOr(e)},Sm=function(e,t,n){return wm(e,t,!0,n,(function(e,t){return Math.min(en(e),t)}))},km=function(e,t,n){return wm(e,t,!1,n,(function(e,t){return t>0?t-1:t}))},Nm=function(e,t){for(var n=e;e&&Mn(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling
return e||n},Em=function(e,t){return j(t,(function(t){var n=e.fire("GetSelectionRange",{range:t})
return n.range!==t?n.range:t}))},_m={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},Am=function(e,t,n){var r=n?"lastChild":"firstChild",o=n?"prev":"next"
if(e[r])return e[r]
if(e!==t){var i=e[o]
if(i)return i
for(var a=e.parent;a&&a!==t;a=a.parent)if(i=a[o])return i}},Rm=function(e){if(!Ko(e.value))return!1
var t=e.parent
return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)},Dm=function(e){var t="a"===e.name&&!e.attr("href")&&e.attr("id")
return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t},Tm=function(){function e(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}return e.create=function(t,n){var r=new e(t,_m[t]||1)
return n&&fe(n,(function(e,t){r.attr(t,e)})),r},e.prototype.replace=function(e){var t=this
return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},e.prototype.attr=function(e,t){var n,r=this
if("string"!=typeof e)return null!=e&&fe(e,(function(e,t){r.attr(t,e)})),r
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
return t},e.prototype.children=function(){for(var e=[],t=this.firstChild;t;t=t.next)e.push(t)
return e},e.prototype.empty=function(){var e=this
if(e.firstChild){for(var t=[],n=e.firstChild;n;n=Am(n,e))t.push(n)
for(var r=t.length;r--;){(n=t[r]).parent=n.firstChild=n.lastChild=n.next=n.prev=null}}return e.firstChild=e.lastChild=null,e},e.prototype.isEmpty=function(e,t,n){void 0===t&&(t={})
var r=this,o=r.firstChild
if(Dm(r))return!1
if(o)do{if(1===o.type){if(o.attr("data-mce-bogus"))continue
if(e[o.name])return!1
if(Dm(o))return!1}if(8===o.type)return!1
if(3===o.type&&!Rm(o))return!1
if(3===o.type&&o.parent&&t[o.parent.name]&&Ko(o.value))return!1
if(n&&n(o))return!1}while(o=Am(o,r))
return!0},e.prototype.walk=function(e){return Am(this,null,e)},e}(),Om=function(e,t){return e.replace(t.re,(function(e){return ve(t.uris,e).getOr(e)}))},Bm=Et.each,Pm=Et.trim,Lm="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),Im={ftp:21,http:80,https:443,mailto:25},Mm=["img","video"],Fm=function(e,t,n){return!e.allow_html_data_urls&&(/^data:image\//i.test(t)?function(e,t){return v(e)?!e:!v(t)||!z(Mm,t)}(e.allow_svg_data_urls,n)&&/^data:image\/svg\+xml/i.test(t):/^data:/i.test(t))},Um=function(){function e(t,n){t=Pm(t),this.settings=n||{}
var r=this.settings.base_uri,o=this
if(/^([\w\-]+):([^\/]{2})/i.test(t)||/^\s*#/.test(t))o.source=t
else{var i=0===t.indexOf("//")
if(0!==t.indexOf("/")||i||(t=(r&&r.protocol||"http")+"://mce_host"+t),!/^[\w\-]*:?\/\//.test(t)){var a=this.settings.base_uri?this.settings.base_uri.path:new e(document.location.href).directory
if(this.settings.base_uri&&""==this.settings.base_uri.protocol)t="//mce_host"+o.toAbsPath(a,t)
else{var u=/([^#?]*)([#?]?.*)/.exec(t)
t=(r&&r.protocol||"http")+"://mce_host"+o.toAbsPath(a,u[1])+u[2]}}t=t.replace(/@@/g,"(mce_at)")
var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(t)
Bm(Lm,(function(e,t){var n=c[t]
n&&(n=n.replace(/\(mce_at\)/g,"@@")),o[e]=n})),r&&(o.protocol||(o.protocol=r.protocol),o.userInfo||(o.userInfo=r.userInfo),o.port||"mce_host"!==o.host||(o.port=r.port),o.host&&"mce_host"!==o.host||(o.host=r.host),o.source=""),i&&(o.protocol="")}}return e.parseDataUri=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},e.isDomSafe=function(e,t,n){if(void 0===n&&(n={}),n.allow_script_urls)return!0
var r=vi.decode(e).replace(/[\s\u0000-\u001F]+/g,"")
try{r=decodeURIComponent(r)}catch(o){r=unescape(r)}return!/((java|vb)script|mhtml):/i.test(r)&&!Fm(n,r,t)},e.getDocumentBaseUrl=function(e){var t
return t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t},e.prototype.setPath=function(e){var t=/^(.*?)\/?(\w+)?$/.exec(e)
this.path=t[0],this.directory=t[1],this.file=t[2],this.source="",this.getURI()},e.prototype.toRelative=function(t){var n
if("./"===t)return t
var r=new e(t,{base_uri:this})
if("mce_host"!==r.host&&this.host!==r.host&&r.host||this.port!==r.port||this.protocol!==r.protocol&&""!==r.protocol)return r.getURI()
var o=this.getURI(),i=r.getURI()
return o===i||"/"===o.charAt(o.length-1)&&o.substr(0,o.length-1)===i?o:(n=this.toRelPath(this.path,r.path),r.query&&(n+="?"+r.query),r.anchor&&(n+="#"+r.anchor),n)},e.prototype.toAbsolute=function(t,n){var r=new e(t,{base_uri:this})
return r.getURI(n&&this.isSameOrigin(r))},e.prototype.isSameOrigin=function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0
var t=Im[this.protocol]
if(t&&(this.port||t)==(e.port||t))return!0}return!1},e.prototype.toRelPath=function(e,t){var n,r,o=0,i="",a=e.substring(0,e.lastIndexOf("/")).split("/"),u=t.split("/")
if(a.length>=u.length)for(n=0,r=a.length;n<r;n++)if(n>=u.length||a[n]!==u[n]){o=n+1
break}if(a.length<u.length)for(n=0,r=u.length;n<r;n++)if(n>=a.length||a[n]!==u[n]){o=n+1
break}if(1===o)return t
for(n=0,r=a.length-(o-1);n<r;n++)i+="../"
for(n=o-1,r=u.length;n<r;n++)i+=n!==o-1?"/"+u[n]:u[n]
return i},e.prototype.toAbsPath=function(e,t){var n,r,o=0,i=[],a=/\/$/.test(t)?"/":"",u=e.split("/"),c=t.split("/")
for(Bm(u,(function(e){e&&i.push(e)})),u=i,n=c.length-1,i=[];n>=0;n--)0!==c[n].length&&"."!==c[n]&&(".."!==c[n]?o>0?o--:i.push(c[n]):o++)
return 0!==(r=(n=u.length-o)<=0?ee(i).join("/"):u.slice(0,n).join("/")+"/"+ee(i).join("/")).indexOf("/")&&(r="/"+r),a&&r.lastIndexOf("/")!==r.length-1&&(r+=a),r},e.prototype.getURI=function(e){var t
return void 0===e&&(e=!1),this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source},e}(),zm=Et.makeMap("button,fieldset,form,iframe,img,image,input,object,output,select,textarea"),Hm=function(e,t,n){for(var r=/<([!?\/])?([A-Za-z0-9\-_:.]+)/g,o=/(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,i=e.getShortEndedElements(),a=1,u=n;0!==a;)for(r.lastIndex=u;;){var c=r.exec(t)
if(null===c)return u
if("!"===c[1]){u=Ie(c[2],"--")?jm(t,!1,c.index+"!--".length):jm(t,!0,c.index+1)
break}o.lastIndex=r.lastIndex
var s=o.exec(t)
if(!m(s)&&s.index===r.lastIndex){"/"===c[1]?a-=1:be(i,c[2])||(a+=1),u=r.lastIndex+s[0].length
break}}return u},jm=function(e,t,n){void 0===n&&(n=0)
var r=e.toLowerCase()
if(-1!==r.indexOf("[if ",n)&&function(e,t){return/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t))}(r,n)){var o=r.indexOf("[endif]",n)
return r.indexOf(">",o)}if(t){var i=r.indexOf(">",n)
return-1!==i?i:r.length}var a=/--!?>/g
a.lastIndex=n
var u=a.exec(e)
return u?u.index+u[0].length:r.length},Vm=function(e,t){var n=e.exec(t)
if(n){var r=n[1],o=n[2]
return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null},qm=function(e,t){var n
void 0===t&&(t=_i())
var r=null!==(n=(e=e||{}).document)&&void 0!==n?n:document,o=r.createElement("form")
!1!==e.fix_self_closing&&(e.fix_self_closing=!0)
var i=e.comment?e.comment:C,a=e.cdata?e.cdata:C,u=e.text?e.text:C,c=e.start?e.start:C,s=e.end?e.end:C,f=e.pi?e.pi:C,l=e.doctype?e.doctype:C,d=function(n,d){void 0===d&&(d="html")
for(var m,g,p,h,v,b,y,C,x,w,S,k,N,E,_,A,R,D,T,O=n.html,B=0,P=[],L=0,I=vi.decode,M=Et.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),F="html"===d?0:1,U=function(e){var t,n
for(t=P.length;t--&&P[t].name!==e;);if(t>=0){for(n=P.length-1;n>=t;n--)(e=P[n]).valid&&s(e.name)
P.length=t}},z=function(e,t){return u(Om(e,n),t)},H=function(t){""!==t&&(">"===t.charAt(0)&&(t=" "+t),e.allow_conditional_comments||"[if"!==t.substr(0,3).toLowerCase()||(t=" "+t),i(Om(t,n)))},j=function(e,t){var n=e||"",r=!Ie(n,"--"),o=jm(O,r,t)
return e=O.substr(t,o-t),H(r?n+e:e),o+1},V=function(t,i,a,u,c){if(a=function(e){return Om(e,n)}((i=i.toLowerCase())in X?i:I(a||u||c||"")),Y&&!C&&!1===function(e){return 0===e.indexOf("data-")||0===e.indexOf("aria-")}(i)){var s=E[i]
if(!s&&_){for(var f=_.length;f--&&!(s=_[f]).pattern.test(i););-1===f&&(s=null)}if(!s)return
if(s.validValues&&!(a in s.validValues))return}("name"===i||"id"===i)&&t in zm&&(a in r||a in o)||M[i]&&!Um.isDomSafe(a,t,e)||C&&(i in M||0===i.indexOf("on"))||(h.map[i]=a,h.push({name:i,value:a}))},q=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))","g"),$=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,W=t.getShortEndedElements(),K=e.self_closing_elements||t.getSelfClosingElements(),X=t.getBoolAttrs(),Y=e.validate,G=e.remove_internals,J=e.fix_self_closing,Q=t.getSpecialElements(),Z=O+">";m=q.exec(Z);){var ee=m[0]
if(B<m.index&&z(I(O.substr(B,m.index-B))),g=m[7])":"===(g=g.toLowerCase()).charAt(0)&&(g=g.substr(1)),U(g)
else if(g=m[8]){if(m.index+ee.length>O.length){z(I(O.substr(m.index))),B=m.index+ee.length
continue}":"===(g=g.toLowerCase()).charAt(0)&&(g=g.substr(1)),x=g in W,J&&K[g]&&P.length>0&&P[P.length-1].name===g&&U(g)
var te=Vm($,m[9])
if(null!==te){if("all"===te){B=Hm(t,O,q.lastIndex),q.lastIndex=B
continue}S=!1}if(!Y||(w=t.getElementRule(g))){if(S=!0,Y&&(E=w.attributes,_=w.attributePatterns),(N=m[9])?((C=-1!==N.indexOf("data-mce-type"))&&G&&(S=!1),(h=[]).map={},N.replace($,(function(e,t,n,r,o){return V(g,t,n,r,o),""}))):(h=[]).map={},Y&&!C){if(A=w.attributesRequired,R=w.attributesDefault,D=w.attributesForced,w.removeEmptyAttrs&&!h.length&&(S=!1),D)for(v=D.length;v--;)y=(k=D[v]).name,"{$uid}"===(T=k.value)&&(T="mce_"+L++),h.map[y]=T,h.push({name:y,value:T})
if(R)for(v=R.length;v--;)(y=(k=R[v]).name)in h.map||("{$uid}"===(T=k.value)&&(T="mce_"+L++),h.map[y]=T,h.push({name:y,value:T}))
if(A){for(v=A.length;v--&&!(A[v]in h.map););-1===v&&(S=!1)}if(k=h.map["data-mce-bogus"]){if("all"===k){B=Hm(t,O,q.lastIndex),q.lastIndex=B
continue}S=!1}}S&&c(g,h,x)}else S=!1
if(p=Q[g]){p.lastIndex=B=m.index+ee.length,(m=p.exec(O))?(S&&(b=O.substr(B,m.index-B)),B=m.index+m[0].length):(b=O.substr(B),B=O.length),S&&(b.length>0&&z(b,!0),s(g)),q.lastIndex=B
continue}x||(N&&N.indexOf("/")===N.length-1?S&&s(g):P.push({name:g,valid:S}))}else if(g=m[1])H(g)
else if(g=m[2]){if(!(1===F||e.preserve_cdata||P.length>0&&t.isValidChild(P[P.length-1].name,"#cdata"))){B=j("",m.index+2),q.lastIndex=B
continue}a(g)}else if(g=m[3])l(g)
else{if((g=m[4])||"<!"===ee){B=j(g,m.index+ee.length),q.lastIndex=B
continue}if(g=m[5]){if(1!==F){B=j("?",m.index+2),q.lastIndex=B
continue}f(g,m[6])}}B=m.index+ee.length}for(B<O.length&&z(I(O.substr(B))),v=P.length-1;v>=0;v--)(g=P[v]).valid&&s(g.name)}
return{parse:function(e,t){void 0===t&&(t="html"),d(function(e){for(var t,n=/data:[^;]+;base64,([a-z0-9\+\/=\s]+)/gi,r=[],o={},i=$u("img"),a=0,u=0;t=n.exec(e);){var c=t[0],s=i+"_"+u++
o[s]=c,a<t.index&&r.push(e.substr(a,t.index-a)),r.push(s),a=t.index+c.length}var f=new RegExp(i+"_[0-9]+","g")
return 0===a?{prefix:i,uris:o,html:e,re:f}:(a<e.length&&r.push(e.substr(a)),{prefix:i,uris:o,html:r.join(""),re:f})}(e),t)}}}
qm.findEndTag=Hm
var $m=function(e,t){for(var n,r=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,o=e.schema,i=function(e,t){var n=new RegExp(["\\s?("+e.join("|")+')="[^"]+"'].join("|"),"gi")
return t.replace(n,"")}(e.getTempAttrs(),t),a=o.getShortEndedElements();n=r.exec(i);){var u=r.lastIndex,c=n[0].length,s=void 0
s=a[n[1]]?u:qm.findEndTag(o,i,u),i=i.substring(0,u-c)+i.substring(s),r.lastIndex=u-c}return xo(i)},Wm=$m,Km=function(e,t,n,r){var o,i=function(e,t){return Ae(Ae({},e),{format:t,get:!0,getInner:!0})}(t,n),a=t.no_events?i:e.fire("BeforeGetContent",i)
return o="raw"===a.format?Et.trim(Wm(e.serializer,r.innerHTML)):"text"===a.format?e.dom.isEmpty(r)?"":xo(r.innerText||r.textContent):"tree"===a.format?e.serializer.serialize(r,a):function(e,t){var n=es(e),r=new RegExp("^(<"+n+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+n+">[\r\n]*|<br \\/>[\r\n]*)$")
return t.replace(r,"")}(e,e.serializer.serialize(r,a)),z(["text","tree"],a.format)||vo(At.fromDom(r))?a.content=o:a.content=Et.trim(o),a.no_events?a.content:e.fire("GetContent",a).content},Xm=Et.each,Ym=function(e){return{compare:function(t,n){if(t.nodeName!==n.nodeName)return!1
var r=function(t){var n={}
return Xm(e.getAttribs(t),(function(r){var o=r.nodeName.toLowerCase()
0!==o.indexOf("_")&&"style"!==o&&0!==o.indexOf("data-")&&(n[o]=e.getAttrib(t,o))})),n},o=function(e,t){var n,r
for(r in e)if(be(e,r)){if(void 0===(n=t[r]))return!1
if(e[r]!==n)return!1
delete t[r]}for(r in t)if(be(t,r))return!1
return!0}
return!!o(r(t),r(n))&&(!!o(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))&&(!Yf(t)&&!Yf(n)))}}},Gm=Et.makeMap,Jm=function(e){var t=[],n=(e=e||{}).indent,r=Gm(e.indent_before||""),o=Gm(e.indent_after||""),i=vi.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="html"===e.element_format
return{start:function(e,u,c){var s,f,l,d
if(n&&r[e]&&t.length>0&&(d=t[t.length-1]).length>0&&"\n"!==d&&t.push("\n"),t.push("<",e),u)for(s=0,f=u.length;s<f;s++)l=u[s],t.push(" ",l.name,'="',i(l.value,!0),'"')
t[t.length]=!c||a?">":" />",c&&n&&o[e]&&t.length>0&&(d=t[t.length-1]).length>0&&"\n"!==d&&t.push("\n")},end:function(e){var r
t.push("</",e,">"),n&&o[e]&&t.length>0&&(r=t[t.length-1]).length>0&&"\n"!==r&&t.push("\n")},text:function(e,n){e.length>0&&(t[t.length]=n?e:i(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,r){r?t.push("<?",e," ",i(r),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}},Qm=function(e,t){void 0===t&&(t=_i())
var n=Jm(e);(e=e||{}).validate=!("validate"in e)||e.validate
return{serialize:function(r){var o=e.validate,i={3:function(e){n.text(e.value,e.raw)},8:function(e){n.comment(e.value)},7:function(e){n.pi(e.name,e.value)},10:function(e){n.doctype(e.value)},4:function(e){n.cdata(e.value)},11:function(e){if(e=e.firstChild)do{a(e)}while(e=e.next)}}
n.reset()
var a=function(e){var r=i[e.type]
if(r)r(e)
else{var u=e.name,c=e.shortEnded,s=e.attributes
if(o&&s&&s.length>1){var f=[]
f.map={}
var l=t.getElementRule(e.name)
if(l){for(var d=0,m=l.attributesOrder.length;d<m;d++){if((p=l.attributesOrder[d])in s.map){var g=s.map[p]
f.map[p]=g,f.push({name:p,value:g})}}for(d=0,m=s.length;d<m;d++){var p
if(!((p=s[d].name)in f.map)){g=s.map[p]
f.map[p]=g,f.push({name:p,value:g})}}s=f}}if(n.start(e.name,s,c),!c){if(e=e.firstChild)do{a(e)}while(e=e.next)
n.end(u)}}}
return 1!==r.type||e.inner?i[11](r):a(r),n.getContent()}}},Zm=new Set
V(["margin","margin-left","margin-right","margin-top","margin-bottom","padding","padding-left","padding-right","padding-top","padding-bottom","border","border-width","border-style","border-color","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","float","position","left","right","top","bottom","z-index","display","transform","width","max-width","min-width","height","max-height","min-height","overflow","overflow-x","overflow-y","text-overflow","vertical-align","transition","transition-delay","transition-duration","transition-property","transition-timing-function"],(function(e){Zm.add(e)}))
var eg=["font","text-decoration","text-emphasis"],tg=function(e,t){return ce(e.parseStyle(e.getAttrib(t,"style")))},ng=function(e,t){return Z(tg(e,t),(function(e){return!function(e){return Zm.has(e)}(e)}))},rg=function(e,t,n){var r=tg(e,t),o=tg(e,n),i=function(r){var o=e.getStyle(t,r),i=e.getStyle(n,r)
return He(o)&&He(i)&&o!==i}
return H(r,(function(e){var t=function(t){return H(t,(function(t){return t===e}))}
if(!t(o)&&t(eg)){var n=W(o,(function(e){return H(eg,(function(t){return Ie(e,t)}))}))
return H(n,i)}return i(e)}))},og=function(e,t,n){return L.from(n.container()).filter(Mn).exists((function(r){var o=e?0:-1
return t(r.data.charAt(n.offset()+o))}))},ig=E(og,!0,Jf),ag=E(og,!1,Jf),ug=function(e){var t=e.container()
return Mn(t)&&(0===t.data.length||Co(t.data)&&Jl.isBookmarkNode(t.parentNode))},cg=function(e,t){return function(n){return L.from(Zs(e?0:-1,n)).filter(t).isSome()}},sg=function(e){return jn(e)&&"block"===rr(At.fromDom(e),"display")},fg=function(e){return qn(e)&&!function(e){return Rn(e)&&"all"===e.getAttribute("data-mce-bogus")}(e)},lg=cg(!0,sg),dg=cg(!1,sg),mg=cg(!0,Wn),gg=cg(!1,Wn),pg=cg(!0,Pn),hg=cg(!1,Pn),vg=cg(!0,fg),bg=cg(!1,fg),yg=function(e){var t=Iu(e,"br"),n=W(function(e){for(var t=[],n=e.dom;n;)t.push(At.fromDom(n)),n=n.lastChild
return t}(e).slice(-1),fo)
t.length===n.length&&V(n,pn)},Cg=function(e){gn(e),dn(e,At.fromHtml('<br data-mce-bogus="1">'))},xg=function(e){Zt(e).each((function(t){Wt(t).each((function(n){co(e)&&fo(t)&&co(n)&&pn(t)}))}))},wg=function(e,t,n){return Pt(t,e)?function(e,t){for(var n=b(t)?t:D,r=e.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,a=At.fromDom(i)
if(o.push(a),!0===n(a))break
r=i}return o}(e,(function(e){return n(e)||Ot(e,t)})).slice(0,-1):[]},Sg=function(e,t){return wg(e,t,D)},kg=function(e,t){return[e].concat(Sg(e,t))},Ng=function(e,t,n){return Df(e,t,n,ug)},Eg=function(e,t){return G(kg(At.fromDom(t.container()),e),co)},_g=function(e,t,n){return Ng(e,t.dom,n).forall((function(e){return Eg(t,n).fold((function(){return!1===Qs(e,n,t.dom)}),(function(r){return!1===Qs(e,n,t.dom)&&Pt(r,At.fromDom(e.container()))}))}))},Ag=function(e,t,n){return Eg(t,n).fold((function(){return Ng(e,t.dom,n).forall((function(e){return!1===Qs(e,n,t.dom)}))}),(function(t){return Ng(e,t.dom,n).isNone()}))},Rg=E(Ag,!1),Dg=E(Ag,!0),Tg=E(_g,!1),Og=E(_g,!0),Bg=function(e){return sf(e).exists(fo)},Pg=function(e,t,n){var r=W(kg(At.fromDom(n.container()),t),co),o=oe(r).getOr(t)
return Af(e,o.dom,n).filter(Bg)},Lg=function(e,t){return sf(t).exists(fo)||Pg(!0,e,t).isSome()},Ig=function(e,t){return function(e){return L.from(e.getNode(!0)).map(At.fromDom)}(t).exists(fo)||Pg(!1,e,t).isSome()},Mg=E(Pg,!1),Fg=E(Pg,!0),Ug=function(e){return _c.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},zg=function(e,t){var n=W(kg(At.fromDom(t.container()),e),co)
return oe(n).getOr(e)},Hg=function(e,t){return Ug(t)?ag(t):ag(t)||Bf(zg(e,t).dom,t).exists(ag)},jg=function(e,t){return Ug(t)?ig(t):ig(t)||Of(zg(e,t).dom,t).exists(ig)},Vg=function(e){return sf(e).bind((function(e){return Kr(e,Ft)})).exists((function(e){return function(e){return z(["pre","pre-wrap"],e)}(rr(e,"white-space"))}))},qg=function(e,t){return function(e,t){return Bf(e.dom,t).isNone()}(e,t)||function(e,t){return Of(e.dom,t).isNone()}(e,t)||Rg(e,t)||Dg(e,t)||Ig(e,t)||Lg(e,t)},$g=function(e,t){return!Vg(t)&&(Rg(e,t)||Tg(e,t)||Ig(e,t)||Hg(e,t))},Wg=function(e,t){return!Vg(t)&&(Dg(e,t)||Og(e,t)||Lg(e,t)||jg(e,t))},Kg=function(e,t){return $g(e,t)||Wg(e,function(e){var t=e.container(),n=e.offset()
return Mn(t)&&n<t.data.length?_c(t,n+1):e}(t))},Xg=function(e,t){return Gf(e.charAt(t))},Yg=function(e){var t=e.container()
return Mn(t)&&Le(t.data,bo)},Gg=function(e){var t=e.data,n=function(e){var t=e.split("")
return j(t,(function(e,n){return Gf(e)&&n>0&&n<t.length-1&&Qf(t[n-1])&&Qf(t[n+1])?" ":e})).join("")}(t)
return n!==t&&(e.data=n,!0)},Jg=function(e,t){return L.some(t).filter(Yg).bind((function(t){var n=t.container()
return function(e,t){var n=t.data,r=_c(t,0)
return!(!Xg(n,0)||Kg(e,r)||(t.data=" "+n.slice(1),0))}(e,n)||Gg(n)||function(e,t){var n=t.data,r=_c(t,n.length-1)
return!(!Xg(n,n.length-1)||Kg(e,r)||(t.data=n.slice(0,-1)+" ",0))}(e,n)?L.some(t):L.none()}))},Qg=function(e){var t=At.fromDom(e.getBody())
e.selection.isCollapsed()&&Jg(t,_c.fromRangeStart(e.selection.getRng())).each((function(t){e.selection.setRng(t.toRange())}))},Zg=function(e,t,n){if(0!==n){var r=At.fromDom(e),o=Wr(r,co).getOr(r),i=e.data.slice(t,t+n),a=t+n>=e.data.length&&Wg(o,_c(e,e.data.length)),u=0===t&&$g(o,_c(e,0))
e.replaceData(t,n,function(e,t,n){return X(e,(function(r,o){return Jf(o)||Gf(o)?r.previousCharIsSpace||""===r.str&&t||r.str.length===e.length-1&&n?{previousCharIsSpace:!1,str:r.str+bo}:{previousCharIsSpace:!0,str:r.str+" "}:{previousCharIsSpace:!1,str:r.str+o}}),{previousCharIsSpace:!1,str:""}).str}(i,u,a))}},ep=function(e,t){var n=e.data.slice(t),r=n.length-Ue(n).length
Zg(e,t,r)},tp=function(e,t){var n=e.data.slice(0,t),r=n.length-ze(n).length
Zg(e,t-r,r)},np=function(e,t,n,r){void 0===r&&(r=!0)
var o=ze(e.data).length,i=r?e:t,a=r?t:e
return r?i.appendData(a.data):i.insertData(0,a.data),pn(At.fromDom(a)),n&&ep(i,o),i},rp=function(e,t){return function(e,t){var n=e.container(),r=e.offset()
return!1===_c.isTextPosition(e)&&n===t.parentNode&&r>_c.before(t).offset()}(t,e)?_c(t.container(),t.offset()-1):t},op=function(e){return Vo(e.previousSibling)?L.some((t=e.previousSibling,Mn(t)?_c(t,t.data.length):_c.after(t))):e.previousSibling?Lf(e.previousSibling):L.none()
var t},ip=function(e){return Vo(e.nextSibling)?L.some((t=e.nextSibling,Mn(t)?_c(t,0):_c.before(t))):e.nextSibling?Pf(e.nextSibling):L.none()
var t},ap=function(e,t){return op(t).orThunk((function(){return ip(t)})).orThunk((function(){return function(e,t){var n=_c.before(t.previousSibling?t.previousSibling:t.parentNode)
return Bf(e,n).fold((function(){return Of(e,_c.after(t))}),L.some)}(e,t)}))},up=function(e,t){return ip(t).orThunk((function(){return op(t)})).orThunk((function(){return function(e,t){return Of(e,_c.after(t)).fold((function(){return Bf(e,_c.before(t))}),L.some)}(e,t)}))},cp=function(e,t,n){return function(e,t,n){return e?up(t,n):ap(t,n)}(e,t,n).map(E(rp,n))},sp=function(e,t,n){n.fold((function(){e.focus()}),(function(n){e.selection.setRng(n.toRange(),t)}))},fp=function(e,t){return t&&be(e.schema.getBlockElements(),Lt(t))},lp=function(e){if(Zo(e)){var t=At.fromHtml('<br data-mce-bogus="1">')
return gn(e),dn(e,t),L.some(_c.before(t.dom))}return L.none()},dp=function(e,t,n){var r,o,i,a,u=Wt(e).filter(Ut),c=Kt(e).filter(Ut)
return pn(e),(r=u,o=c,i=t,a=function(e,t,r){var o=e.dom,i=t.dom,a=o.data.length
return np(o,i,n),r.container()===i?_c(o,a):r},r.isSome()&&o.isSome()&&i.isSome()?L.some(a(r.getOrDie(),o.getOrDie(),i.getOrDie())):L.none()).orThunk((function(){return n&&(u.each((function(e){return tp(e.dom,e.dom.length)})),c.each((function(e){return ep(e.dom,0)}))),t}))},mp=function(e,t,n,r){void 0===r&&(r=!0)
var o,i=cp(t,e.getBody(),n.dom),a=Wr(n,E(fp,e),(o=e.getBody(),function(e){return e.dom===o})),u=dp(n,i,function(e,t){return be(e.schema.getTextInlineElements(),Lt(t))}(e,n))
e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):a.bind(lp).fold((function(){r&&sp(e,t,u)}),(function(n){r&&sp(e,t,L.some(n))}))},gp=function(e){return Iu(e,"td,th")},pp=function(e,t){return{start:e,end:t}},hp=Sr([{singleCellTable:["rng","cell"]},{fullTable:["table"]},{partialTable:["cells","outsideDetails"]},{multiTable:["startTableCells","endTableCells","betweenRng"]}]),vp=function(e,t){return Jr(At.fromDom(e),"td,th",t)},bp=function(e){return!Ot(e.start,e.end)},yp=function(e,t){return Il(e.start,t).bind((function(n){return Il(e.end,t).bind((function(e){return t=Ot(n,e),r=n,t?L.some(r):L.none()
var t,r}))}))},Cp=function(e){return function(t){return yp(t,e).map((function(e){return function(e,t,n){return{rng:e,table:t,cells:n}}(t,e,gp(e))}))}},xp=function(e,t,n,r){if(n.collapsed||!e.forall(bp))return L.none()
if(t.isSameTable){var o=e.bind(Cp(r))
return L.some({start:o,end:o})}var i=vp(n.startContainer,r),a=vp(n.endContainer,r),u=i.bind(function(e){return function(t){return Il(t,e).bind((function(e){return ie(gp(e)).map((function(e){return pp(t,e)}))}))}}(r)).bind(Cp(r)),c=a.bind(function(e){return function(t){return Il(t,e).bind((function(e){return oe(gp(e)).map((function(e){return pp(e,t)}))}))}}(r)).bind(Cp(r))
return L.some({start:u,end:c})},wp=function(e,t){return J(e,(function(e){return Ot(e,t)}))},Sp=function(e){return Xn(wp(e.cells,e.rng.start),wp(e.cells,e.rng.end),(function(t,n){return e.cells.slice(t,n+1)}))},kp=function(e,t,n){return e.exists((function(e){return function(e,t){return!bp(e)&&yp(e,t).exists((function(e){var t=e.dom.rows
return 1===t.length&&1===t[0].cells.length}))}(e,n)&&Ul(e.start,t)}))},Np=function(e,t){var n=t.startTable,r=t.endTable,o=e.cloneRange()
return n.each((function(e){return o.setStartAfter(e.dom)})),r.each((function(e){return o.setEndBefore(e.dom)})),o},Ep=function(e,t){var n=function(e){return function(t){return Ot(e,t)}}(e),r=function(e,t){var n=vp(e.startContainer,t),r=vp(e.endContainer,t)
return Xn(n,r,pp)}(t,n),o=function(e,t){var n=function(e){return Il(At.fromDom(e),t)},r=n(e.startContainer),o=n(e.endContainer),i=r.isSome(),a=o.isSome(),u=Xn(r,o,Ot).getOr(!1)
return{startTable:r,endTable:o,isStartInTable:i,isEndInTable:a,isSameTable:u,isMultiTable:!u&&i&&a}}(t,n)
return kp(r,t,n)?r.map((function(e){return hp.singleCellTable(t,e.start)})):o.isMultiTable?function(e,t,n,r){return xp(e,t,n,r).bind((function(e){var r=e.start,o=e.end,i=r.bind(Sp).getOr([]),a=o.bind(Sp).getOr([])
if(i.length>0&&a.length>0){var u=Np(n,t)
return L.some(hp.multiTable(i,a,u))}return L.none()}))}(r,o,t,n):function(e,t,n,r){return xp(e,t,n,r).bind((function(e){var t=e.start,n=e.end
return t.or(n)})).bind((function(e){var r=t.isSameTable,o=Sp(e).getOr([])
if(r&&e.cells.length===o.length)return L.some(hp.fullTable(e.table))
if(o.length>0){if(r)return L.some(hp.partialTable(o,L.none()))
var i=Np(n,t)
return L.some(hp.partialTable(o,L.some(Ae(Ae({},t),{rng:i}))))}return L.none()}))}(r,o,t,n)},_p=function(e){var t
return(8===It(t=e)||"#comment"===Lt(t)?Wt(e):Zt(e)).bind(_p).orThunk((function(){return L.some(e)}))},Ap=function(e){return V(e,(function(e){tr(e,"contenteditable"),Cg(e)}))},Rp=function(e,t,n,r){var o=n.cloneRange()
r?(o.setStart(n.startContainer,n.startOffset),o.setEndAfter(t.dom.lastChild)):(o.setStartBefore(t.dom.firstChild),o.setEnd(n.endContainer,n.endOffset)),Bp(e,o,t,!1)},Dp=function(e){var t=Ll(e),n=At.fromDom(e.selection.getNode())
$n(n.dom)&&Zo(n)?e.selection.setCursorLocation(n.dom,0):e.selection.collapse(!0),t.length>1&&H(t,(function(e){return Ot(e,n)}))&&Jn(n,"data-mce-selected","1")},Tp=function(e,t,n){var r=e.selection.getRng(),o=n.bind((function(n){var o=n.rng,i=n.isStartInTable,a=function(e,t){return L.from(e.dom.getParent(t,e.dom.isBlock)).map(At.fromDom)}(e,i?o.endContainer:o.startContainer)
o.deleteContents(),function(e,t,n){n.each((function(n){t?pn(n):(Cg(n),e.selection.setCursorLocation(n.dom,0))}))}(e,i,a.filter(Zo))
var u=i?t[0]:t[t.length-1]
return Rp(e,u,r,i),Zo(u)?L.none():L.some(i?t.slice(1):t.slice(0,-1))})).getOr(t)
return Ap(o),Dp(e),!0},Op=function(e,t,n,r){var o=e.selection.getRng(),i=t[0],a=n[n.length-1]
Rp(e,i,o,!0),Rp(e,a,o,!1)
var u=Zo(i)?t:t.slice(1),c=Zo(a)?n:n.slice(0,-1)
return Ap(u.concat(c)),r.deleteContents(),Dp(e),!0},Bp=function(e,t,n,r){void 0===r&&(r=!0),t.deleteContents()
var o,i=_p(n).getOr(n),a=At.fromDom(e.dom.getParent(i.dom,e.dom.isBlock))
if(Zo(a)&&(Cg(a),r&&e.selection.setCursorLocation(a.dom,0)),!Ot(n,a)){var u=Kn($t(a),n)?[]:$t(o=a).map(Gt).map((function(e){return W(e,(function(e){return!Ot(o,e)}))})).getOr([])
V(u.concat(Gt(n)),(function(e){Ot(e,a)||Pt(e,a)||!Zo(e)||pn(e)}))}return!0},Pp=function(e,t){return mp(e,!1,t),!0},Lp=function(e,t,n,r){return Mp(t,r).fold((function(){return function(e,t,n){return Ep(t,n).map((function(t){return t.fold(E(Bp,e),E(Pp,e),E(Tp,e),E(Op,e))}))}(e,t,n)}),(function(t){return function(e,t){return Fp(e,t)}(e,t)})).getOr(!1)},Ip=function(e,t){return G(kg(t,e),ho)},Mp=function(e,t){return G(kg(t,e),(n="caption",function(e){return Ft(e)&&Lt(e)===n}))
var n},Fp=function(e,t){return Cg(t),e.selection.setCursorLocation(t.dom,0),L.some(!0)},Up=function(e,t,n,r,o){return Rf(n,e.getBody(),o).bind((function(i){return function(e,t,n,r){return Pf(e.dom).bind((function(o){return Lf(e.dom).map((function(e){return t?n.isEqual(o)&&r.isEqual(e):n.isEqual(e)&&r.isEqual(o)}))})).getOr(!0)}(r,n,o,i)?function(e,t){return Fp(e,t)}(e,r):function(e,t,n){return Mp(e,At.fromDom(n.getNode())).map((function(e){return!1===Ot(e,t)}))}(t,r,i)})).or(L.some(!0))},zp=function(e,t,n,r){var o=_c.fromRangeStart(e.selection.getRng())
return Ip(n,r).bind((function(r){return Zo(r)?Fp(e,r):function(e,t,n,r,o){return Rf(n,e.getBody(),o).bind((function(e){return Ip(t,At.fromDom(e.getNode())).map((function(e){return!1===Ot(e,r)}))}))}(e,n,t,r,o)})).getOr(!1)},Hp=function(e,t){return e?pg(t):hg(t)},jp=function(e,t,n){var r=At.fromDom(e.getBody())
return Mp(r,n).fold((function(){return zp(e,t,r,n)||function(e,t){var n=_c.fromRangeStart(e.selection.getRng())
return Hp(t,n)||Af(t,e.getBody(),n).exists((function(e){return Hp(t,e)}))}(e,t)}),(function(n){return function(e,t,n,r){var o=_c.fromRangeStart(e.selection.getRng())
return Zo(r)?Fp(e,r):Up(e,n,t,r,o)}(e,t,r,n).getOr(!1)}))},Vp=function(e,t){var n=At.fromDom(e.selection.getStart(!0)),r=Ll(e)
return e.selection.isCollapsed()&&0===r.length?jp(e,t,n):function(e,t,n){var r=At.fromDom(e.getBody()),o=e.selection.getRng()
return 0!==n.length?Tp(e,n,L.none()):Lp(e,r,o,t)}(e,n,r)},qp=function(e){var t=_c.fromRangeStart(e),n=_c.fromRangeEnd(e),r=e.commonAncestorContainer
return Af(!1,r,n).map((function(o){return!Qs(t,n,r)&&Qs(t,o,r)?function(e,t,n,r){var o=document.createRange()
return o.setStart(e,t),o.setEnd(n,r),o}(t.container(),t.offset(),o.container(),o.offset()):e})).getOr(e)},$p=function(e){return e.collapsed?e:qp(e)},Wp=function(e,t){return e.getBlockElements()[t.name]&&function(e){return e.firstChild&&e.firstChild===e.lastChild}(t)&&function(e){return"br"===e.name||e.value===bo}(t.firstChild)},Kp=function(e,t){var n=t.firstChild,r=t.lastChild
return n&&"meta"===n.name&&(n=n.next),r&&"mce_marker"===r.attr("id")&&(r=r.prev),function(e,t){var n=e.getNonEmptyElements()
return t&&(t.isEmpty(n)||Wp(e,t))}(e,r)&&(r=r.prev),!(!n||n!==r)&&("ul"===n.name||"ol"===n.name)},Xp=function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&function(e){return e.data===bo||Hn(e)}(e.firstChild)},Yp=function(e){return e.length>0&&(!(t=e[e.length-1]).firstChild||Xp(t))?e.slice(0,-1):e
var t},Gp=function(e,t){var n=e.getParent(t,e.isBlock)
return n&&"LI"===n.nodeName?n:null},Jp=function(e,t){var n=_c.after(e),r=Sf(t).prev(n)
return r?r.toRange():null},Qp=function(e,t,n){var r=e.parentNode
return Et.each(t,(function(t){r.insertBefore(t,e)})),function(e,t){var n=_c.before(e),r=Sf(t).next(n)
return r?r.toRange():null}(e,n)},Zp=function(e,t,n,r){var o,i=function(e,t,n){var r=t.serialize(n)
return function(e){var t=e.firstChild,n=e.lastChild
return t&&"META"===t.nodeName&&t.parentNode.removeChild(t),n&&"mce_marker"===n.id&&n.parentNode.removeChild(n),e}(e.createFragment(r))}(t,e,r),a=Gp(t,n.startContainer),u=Yp((o=i.firstChild,W(o.childNodes,(function(e){return"LI"===e.nodeName})))),c=t.getRoot(),s=function(e){var r=_c.fromRangeStart(n),o=Sf(t.getRoot()),i=1===e?o.prev(r):o.next(r)
return!i||Gp(t,i.getNode())!==a}
return s(1)?Qp(a,u,c):s(2)?function(e,t,n,r){return r.insertAfter(t.reverse(),e),Jp(t[0],n)}(a,u,c,t):function(e,t,n,r){var o=function(e,t){var n=t.cloneRange(),r=t.cloneRange()
return n.setStartBefore(e),r.setEndAfter(e),[n.cloneContents(),r.cloneContents()]}(e,r),i=e.parentNode
return i.insertBefore(o[0],e),Et.each(t,(function(t){i.insertBefore(t,e)})),i.insertBefore(o[1],e),i.removeChild(e),Jp(t[t.length-1],n)}(a,u,c,n)},eh=$n,th=function(e){var t=e.dom,n=$p(e.selection.getRng())
e.selection.setRng(n)
var r=t.getParent(n.startContainer,eh)
!function(e,t,n){return null!==n&&n===e.getParent(t.endContainer,eh)&&Ul(At.fromDom(n),t)}(t,n,r)?e.getDoc().execCommand("Delete",!1,null):Bp(e,n,At.fromDom(r))},nh=function(e,t,n){var r,o,i,a=e.selection,u=e.dom;/^ | $/.test(t)&&(t=function(e,t,n){var r=At.fromDom(e.getRoot())
return n=$g(r,_c.fromRangeStart(t))?n.replace(/^ /,"&nbsp;"):n.replace(/^&nbsp;/," "),Wg(r,_c.fromRangeEnd(t))?n.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):n.replace(/&nbsp;(<br( \/)?>)?$/," ")}(u,a.getRng(),t))
var c=e.parser,s=n.merge,f=Qm({validate:vs(e)},e.schema),l='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',d=e.fire("BeforeSetContent",{content:t,format:"html",selection:!0,paste:n.paste})
if(d.isDefaultPrevented())e.fire("SetContent",{content:d.content,format:"html",selection:!0,paste:n.paste})
else{-1===(t=d.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,l)
var m=(o=a.getRng()).startContainer||(o.parentElement?o.parentElement():null),g=e.getBody()
m===g&&a.isCollapsed()&&u.isBlock(g.firstChild)&&function(e,t){return t&&!e.schema.getShortEndedElements()[t.nodeName]}(e,g.firstChild)&&u.isEmpty(g.firstChild)&&((o=u.createRng()).setStart(g.firstChild,0),o.setEnd(g.firstChild,0),a.setRng(o)),a.isCollapsed()||th(e)
var p,h={context:(r=a.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0},b=c.parse(t,h)
if(!0===n.paste&&Kp(e.schema,b)&&function(e,t){return!!Gp(e,t)}(u,r))return o=Zp(f,u,a.getRng(),b),a.setRng(o),void e.fire("SetContent",d)
if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(b),"mce_marker"===(i=b.lastChild).attr("id")){var y=i
for(i=i.prev;i;i=i.walk(!0))if(3===i.type||!u.isBlock(i.name)){e.schema.isValidChild(i.parent.name,"span")&&i.parent.insert(y,i,"br"===i.name)
break}}if(e._selectionOverrides.showBlockCaretContainer(r),h.invalid){e.selection.setContent(l),r=a.getNode()
var C=e.getBody()
for(9===r.nodeType?r=i=C:i=r;i!==C;)r=i,i=i.parentNode
t=r===C?C.innerHTML:u.getOuterHTML(r),t=f.serialize(c.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,(function(){return f.serialize(b)})))),r===C?u.setHTML(C,t):u.setOuterHTML(r,t)}else(function(e,t,n){if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n)
else{var r=n.firstChild,o=n.lastChild
!r||r===o&&"BR"===r.nodeName?e.dom.setHTML(n,t):e.selection.setContent(t)}})(e,t=f.serialize(b),r);(function(e,t){var n=e.schema.getTextInlineElements(),r=e.dom
if(t){var o=e.getBody(),i=Ym(r)
Et.each(r.select("*[data-mce-fragment]"),(function(e){if(v(n[e.nodeName.toLowerCase()])&&ng(r,e))for(var t=e.parentNode;v(t)&&t!==o&&!rg(r,e,t);t=t.parentNode)if(i.compare(t,e)){r.remove(e,!0)
break}}))}})(e,s),function(e,t){var n,r=e.dom,o=e.selection
if(t){o.scrollIntoView(t)
var i=Ql(e.getBody(),t)
if("false"===r.getContentEditable(i))return r.remove(t),void o.select(i)
var a=r.createRng(),u=t.previousSibling
if(Mn(u)){if(a.setStart(u,u.nodeValue.length),!xt.ie){var c=t.nextSibling
Mn(c)&&(u.appendData(c.data),c.parentNode.removeChild(c))}}else a.setStartBefore(t),a.setEndBefore(t)
var s=r.getParent(t,r.isBlock)
r.remove(t),s&&r.isEmpty(s)&&(e.$(s).empty(),a.setStart(s,0),a.setEnd(s,0),eh(s)||function(e){return!!e.getAttribute("data-mce-fragment")}(s)||!(n=function(t){var n=_c.fromRangeStart(t)
if(n=Sf(e.getBody()).next(n))return n.toRange()}(a))?r.add(s,r.create("br",{"data-mce-bogus":"1"})):(a=n,r.remove(s))),o.setRng(a)}}(e,u.get("mce_marker")),p=e.getBody(),Et.each(p.getElementsByTagName("*"),(function(e){e.removeAttribute("data-mce-fragment")})),function(e,t){L.from(e.getParent(t,"td,th")).map(At.fromDom).each(xg)}(u,a.getStart()),e.fire("SetContent",d),e.addVisual()}},rh=function(e,t){t(e),e.firstChild&&rh(e.firstChild,t),e.next&&rh(e.next,t)},oh=function(e,t,n){var r=function(e,t,n){var r={},o={},i=[]
for(var a in n.firstChild&&rh(n.firstChild,(function(n){V(e,(function(e){e.name===n.name&&(r[e.name]?r[e.name].nodes.push(n):r[e.name]={filter:e,nodes:[n]})})),V(t,(function(e){"string"==typeof n.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(n):o[e.name]={filter:e,nodes:[n]})}))})),r)be(r,a)&&i.push(r[a])
for(var u in o)be(o,u)&&i.push(o[u])
return i}(e,t,n)
V(r,(function(e){V(e.filter.callbacks,(function(t){t(e.nodes,e.filter.name,{})}))}))},ih=function(e){return e instanceof Tm},ah=function(e,t,n){e.dom.setHTML(e.getBody(),t),!0!==n&&function(e){bm(e)&&Pf(e.getBody()).each((function(t){var n=t.getNode(),r=Pn(n)?Pf(n).getOr(t):t
e.selection.setRng(r.toRange())}))}(e)},uh=function(e,t,n){var r=function(e,t){return Ae(Ae({format:"html"},e),{set:!0,content:ih(t)?"":t})}(n,t),o=n.no_events?r:e.fire("BeforeSetContent",r)
return ih(t)||(t=o.content),L.from(e.getBody()).fold(S(t),(function(n){return ih(t)?function(e,t,n,r){oh(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n)
var o=Qm({validate:e.validate},e.schema).serialize(n)
return r.content=vo(At.fromDom(t))?o:Et.trim(o),ah(e,r.content,r.no_selection),r.no_events||e.fire("SetContent",r),n}(e,n,t,o):function(e,t,n,r){if(0===n.length||/^\s+$/.test(n)){var o='<br data-mce-bogus="1">'
"TABLE"===t.nodeName?n="<tr><td>"+o+"</td></tr>":/^(UL|OL)$/.test(t.nodeName)&&(n="<li>"+o+"</li>")
var i=es(e)
i&&e.schema.isValidChild(t.nodeName.toLowerCase(),i.toLowerCase())?(n=o,n=e.dom.createHTML(i,ts(e),n)):n||(n='<br data-mce-bogus="1">'),ah(e,n,r.no_selection),e.fire("SetContent",r)}else"raw"!==r.format&&(n=Qm({validate:e.validate},e.schema).serialize(e.parser.parse(n,{isRootContent:!0,insert:!0}))),r.content=vo(At.fromDom(t))?n:Et.trim(n),ah(e,r.content,r.no_selection),r.no_events||e.fire("SetContent",r)
return r.content}(e,n,t,o)}))},ch=function(e,t){return function(e,t){var n=e.dom
return n.parentNode?Xr(At.fromDom(n.parentNode),(function(n){return!Ot(e,n)&&t(n)})):L.none()}(e,t).isSome()},sh=function(e){return b(e)?e:D},fh=function(e,t,n){var r=t(e),o=sh(n)
return r.orThunk((function(){return o(e)?L.none():function(e,t,n){for(var r=e.dom,o=sh(n);r.parentNode;){r=r.parentNode
var i=At.fromDom(r),a=t(i)
if(a.isSome())return a
if(o(i))break}return L.none()}(e,t,o)}))},lh=al,dh=function(e,t,n){var r=e.formatter.get(n)
if(r)for(var o=0;o<r.length;o++){var i=r[o]
if(ml(i)&&!1===i.inherit&&e.dom.is(t,i.selector))return!0}return!1},mh=function(e,t,n,r,o){var i=e.dom.getRoot()
return t!==i&&(t=e.dom.getParent(t,(function(t){return!!dh(e,t,n)||(t.parentNode===i||!!hh(e,t,n,r,!0))})),!!hh(e,t,n,r,o))},gh=function(e,t,n){return!!lh(t,n.inline)||(!!lh(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0))},ph=function(e,t,n,r,o,i){var a=n[r]
if(b(n.onmatch))return n.onmatch(t,n,r)
if(a)if(p(a.length)){for(var u in a)if(be(a,u)){var c="attributes"===r?e.getAttrib(t,u):cl(e,t,u),s=il(a[u],i),f=h(c)||je(c)
if(f&&h(s))continue
if(o&&f&&!n.exact)return!1
if((!o||n.exact)&&!lh(c,ul(e,s,u)))return!1}}else for(var l=0;l<a.length;l++)if("attributes"===r?e.getAttrib(t,a[l]):cl(e,t,a[l]))return!0
return!0},hh=function(e,t,n,r,o){var i=e.formatter.get(n),a=e.dom
if(i&&t)for(var u=0;u<i.length;u++){var c=i[u]
if(gh(e.dom,t,c)&&ph(a,t,c,"attributes",o,r)&&ph(a,t,c,"styles",o,r)){var s=c.classes
if(s)for(var f=0;f<s.length;f++)if(!e.dom.hasClass(t,il(s[f],r)))return
return c}}},vh=function(e,t,n,r,o){if(r)return mh(e,r,t,n,o)
if(r=e.selection.getNode(),mh(e,r,t,n,o))return!0
var i=e.selection.getStart()
return!(i===r||!mh(e,i,t,n,o))},bh=function(e,t){var n=function(t){return Ot(t,At.fromDom(e.getBody()))}
return L.from(e.selection.getStart(!0)).bind((function(r){return fh(At.fromDom(r),(function(n){return ue(t,(function(t){return function(t,n){return hh(e,t.dom,n)?L.some(n):L.none()}(n,t)}))}),n)})).getOrNull()},yh=function(e,t,n){return X(n,(function(n,r){var o=function(e,t){return H(e.formatter.get(t),(function(e){var t=function(e){return e.length>1&&"%"===e.charAt(0)}
return H(["styles","attributes"],(function(n){return ve(e,n).exists((function(e){var n=d(e)?e:he(e)
return H(n,t)}))}))}))}(e,r)
return e.formatter.matchNode(t,r,{},o)?n.concat([r]):n}),[])},Ch=yo,xh="_mce_caret",wh=function(e){return function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==Ch||e.childNodes.length>1)return[]
1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length>0},Sh=function(e){if(e){var t=new io(e,e)
for(e=t.current();e;e=t.next())if(Mn(e))return e}return null},kh=function(e){var t=At.fromTag("span")
return Qn(t,{id:xh,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&dn(t,At.fromText(Ch)),t},Nh=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(wh(t))mp(e,!1,At.fromDom(t),n)
else{var i=o.getRng(),a=r.getParent(t,r.isBlock),u=i.startContainer,c=i.startOffset,s=i.endContainer,f=i.endOffset,l=function(e){var t=Sh(e)
return t&&t.nodeValue.charAt(0)===Ch&&t.deleteData(0,1),t}(t)
r.remove(t,!0),u===l&&c>0&&i.setStart(l,c-1),s===l&&f>0&&i.setEnd(l,f-1),a&&r.isEmpty(a)&&Cg(At.fromDom(a)),o.setRng(i)}},Eh=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(t)Nh(e,t,n)
else if(!(t=Ff(e.getBody(),o.getStart())))for(;t=r.get(xh);)Nh(e,t,!1)},_h=function(e,t){return e.appendChild(t),t},Ah=function(e,t){var n=K(e,(function(e,t){return _h(e,t.cloneNode(!1))}),t)
return _h(n,n.ownerDocument.createTextNode(Ch))},Rh=function(e,t,n,r){var o,i,a,u=e.dom,c=e.selection,s=[],f=c.getRng(),l=f.startContainer,d=f.startOffset
for(i=l,3===l.nodeType&&(d!==l.nodeValue.length&&(o=!0),i=i.parentNode);i;){if(hh(e,i,t,n,r)){a=i
break}i.nextSibling&&(o=!0),s.push(i),i=i.parentNode}if(a)if(o){var m=c.getBookmark()
f.collapse(!0)
var g=Dl(e,f,e.formatter.get(t),!0)
g=yd(g),e.formatter.remove(t,n,g,r),c.moveToBookmark(m)}else{var p=Ff(e.getBody(),a),h=kh(!1).dom;(function(e,t,n){var r=e.dom,o=r.getParent(n,E(nl,e))
o&&r.isEmpty(o)?n.parentNode.replaceChild(t,n):(yg(At.fromDom(n)),r.isEmpty(n)?n.parentNode.replaceChild(t,n):r.insertAfter(t,n))})(e,h,null!==p?p:a)
var v=function(e,t,n,r,o,i){var a=e.formatter,u=e.dom,c=W(ce(a.get()),(function(e){return e!==r&&!Le(e,"removeformat")})),s=yh(e,n,c)
if(W(s,(function(t){return!ll(e,t,r)})).length>0){var f=n.cloneNode(!1)
return u.add(t,f),a.remove(r,o,f,i),u.remove(f),L.some(f)}return L.none()}(e,h,a,t,n,r),b=Ah(s.concat(v.toArray()),h)
Nh(e,p,!1),c.setCursorLocation(b,1),u.isEmpty(a)&&u.remove(a)}},Dh=function(e){e.on("mouseup keydown",(function(t){(function(e,t){var n=e.selection,r=e.getBody()
Eh(e,null,!1),8!==t&&46!==t||!n.isCollapsed()||n.getStart().innerHTML!==Ch||Eh(e,Ff(r,n.getStart())),37!==t&&39!==t||Eh(e,Ff(r,n.getStart()))})(e,t.keyCode)}))},Th=function(e,t){var n=e.schema.getTextInlineElements()
return be(n,Lt(t))&&!Mf(t.dom)&&!Bn(t.dom)},Oh={},Bh=Se,Ph=xe;(function(e,t){Oh[e]||(Oh[e]=[]),Oh[e].push(t)})("pre",(function(e){var t,n=e.selection.getRng(),r=Dn(["pre"])
n.collapsed||(t=e.selection.getSelectedBlocks(),Ph(Bh(Bh(t,r),(function(e){return r(e.previousSibling)&&-1!==ke(t,e.previousSibling)})),(function(e){var t,n
t=e.previousSibling,uu(n=e).remove(),uu(t).append("<br><br>").append(n.childNodes)})))}))
var Lh=Et.each,Ih=function(e){return Rn(e)&&!Yf(e)&&!Mf(e)&&!Bn(e)},Mh=function(e,t){for(var n=e;n;n=n[t]){if(Mn(n)&&He(n.data))return e
if(Rn(n)&&!Yf(n))return n}return e},Fh=function(e,t,n){var r=Ym(e)
if(t&&n&&(t=Mh(t,"previousSibling"),n=Mh(n,"nextSibling"),r.compare(t,n))){for(var o=t.nextSibling;o&&o!==n;){var i=o
o=o.nextSibling,t.appendChild(i)}return e.remove(n),Et.each(Et.grep(n.childNodes),(function(e){t.appendChild(e)})),t}return n},Uh=function(e,t,n,r){if(r&&!1!==t.merge_siblings){var o=Fh(e,tl(r),r)
Fh(e,o,tl(o,!0))}},zh=function(e,t,n){Lh(e.childNodes,(function(e){Ih(e)&&(t(e)&&n(e),e.hasChildNodes()&&zh(e,t,n))}))},Hh=function(e,t){return function(n){return!(!n||!cl(e,n,t))}},jh=function(e,t,n){return function(r){e.setStyle(r,t,n),""===r.getAttribute("style")&&r.removeAttribute("style"),function(e,t){"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,!0)}(e,r)}},Vh=Sr([{keep:[]},{rename:["name"]},{removed:[]}]),qh=/^(src|href|style)$/,$h=Et.each,Wh=al,Kh=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},Xh=function(e,t,n){var r=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"]
if(Rn(r)){var i=r.childNodes.length-1
!n&&o&&o--,r=r.childNodes[o>i?i:o]}return Mn(r)&&n&&o>=r.nodeValue.length&&(r=new io(r,e.getBody()).next()||r),Mn(r)&&!n&&0===o&&(r=new io(r,e.getBody()).prev()||r),r},Yh=function(e,t){var n=t?"firstChild":"lastChild"
if(function(e){return/^(TR|TH|TD)$/.test(e.nodeName)}(e)&&e[n]){var r=e[n]
return"TR"===e.nodeName&&r[n]||r}return e},Gh=function(e,t,n,r){var o=e.create(n,r)
return t.parentNode.insertBefore(o,t),o.appendChild(t),o},Jh=function(e,t,n,r,o){var i=At.fromDom(t),a=At.fromDom(e.create(r,o)),u=n?Yt(i):Xt(i)
return mn(a,u),n?(sn(i,a),ln(a,i)):(fn(i,a),dn(a,i)),a.dom},Qh=function(e,t,n,r){var o=tl(t,n,r)
return h(o)||"BR"===o.nodeName||e.isBlock(o)},Zh=function(e,t,n){var r,o=t.parentNode,i=e.dom,a=es(e)
dl(n)&&(a?o===i.getRoot()&&(n.list_block&&Wh(t,n.list_block)||V(ae(t.childNodes),(function(t){rl(e,a,t.nodeName.toLowerCase())?r?r.appendChild(t):(r=Gh(i,t,a),i.setAttribs(r,e.settings.forced_root_block_attrs)):r=null}))):i.isBlock(t)&&!i.isBlock(o)&&(Qh(i,t,!1)||Qh(i,t.firstChild,!0,!0)||t.insertBefore(i.create("br"),t.firstChild),Qh(i,t,!0)||Qh(i,t.lastChild,!1,!0)||t.appendChild(i.create("br")))),function(e){return ml(e)&&gl(e)&&Kn(ve(e,"mixed"),!0)}(n)&&!Wh(n.inline,t)||i.remove(t,!0)},ev=function(e,t,n,r,o){var i,a=e.dom
if(!function(e,t,n){return!(!gl(n)||!Wh(t,n.inline))||!(!dl(n)||!Wh(t,n.block))||(ml(n)?Rn(t)&&e.is(t,n.selector):void 0)}(a,r,t)&&!function(e,t){return t.links&&"A"===e.nodeName}(r,t))return Vh.keep()
var u=r
if(gl(t)&&"all"===t.remove&&d(t.preserve_attributes)){var c=W(a.getAttribs(u),(function(e){return z(t.preserve_attributes,e.name.toLowerCase())}))
if(a.removeAllAttribs(u),V(c,(function(e){return a.setAttrib(u,e.name,e.value)})),c.length>0)return Vh.rename("span")}if("all"!==t.remove){$h(t.styles,(function(e,r){e=ul(a,il(e,n),r+""),y(r)&&(r=e,o=null),(t.remove_similar||!o||Wh(cl(a,o,r),e))&&a.setStyle(u,r,""),i=!0})),i&&""===a.getAttrib(u,"style")&&(u.removeAttribute("style"),u.removeAttribute("data-mce-style")),$h(t.attributes,(function(e,r){var i
if(e=il(e,n),y(r)&&(r=e,o=null),t.remove_similar||!o||Wh(a.getAttrib(o,r),e)){if("class"===r&&(e=a.getAttrib(u,r))&&(i="",V(e.split(/\s+/),(function(e){/mce\-\w+/.test(e)&&(i+=(i?" ":"")+e)})),i))return void a.setAttrib(u,r,i)
if(qh.test(r)&&u.removeAttribute("data-mce-"+r),"style"===r&&Dn(["li"])(u)&&"none"===a.getStyle(u,"list-style-type"))return u.removeAttribute(r),void a.setStyle(u,"list-style-type","none")
"class"===r&&u.removeAttribute("className"),u.removeAttribute(r)}})),$h(t.classes,(function(e){e=il(e,n),o&&!a.hasClass(o,e)||a.removeClass(u,e)}))
for(var s=a.getAttribs(u),f=0;f<s.length;f++){var l=s[f].nodeName
if(0!==l.indexOf("_")&&0!==l.indexOf("data-"))return Vh.keep()}}return"none"!==t.remove?(Zh(e,u,t),Vh.removed()):Vh.keep()},tv=function(e,t,n,r,o){return ev(e,t,n,r,o).fold(D,(function(t){return e.dom.rename(r,t),!0}),T)},nv=function(e,t,n,r){return ev(e,t,n,r,r).fold(S(r),(function(t){return e.dom.createFragment().appendChild(r),e.dom.rename(r,t)}),S(null))},rv=function(e,t,n,r,o){var i=e.formatter.get(t),a=i[0],u=!0,c=e.dom,s=e.selection,f=function(r){var u=function(e,t,n,r,o){var i
return V(fl(e.dom,t.parentNode).reverse(),(function(t){if(!i&&"_start"!==t.id&&"_end"!==t.id){var a=hh(e,t,n,r,o)
a&&!1!==a.split&&(i=t)}})),i}(e,r,t,n,o)
return function(e,t,n,r,o,i,a,u){var c,s,f,l=e.dom
if(n){for(var d=n.parentNode,m=r.parentNode;m&&m!==d;m=m.parentNode){c=l.clone(m,!1)
for(var g=0;g<t.length&&null!==(c=nv(e,t[g],u,c));g++);c&&(s&&c.appendChild(s),f||(f=c),s=c)}!i||a.mixed&&l.isBlock(n)||(r=l.split(n,r)),s&&(o.parentNode.insertBefore(s,o),f.appendChild(o),gl(a)&&Uh(l,a,0,s))}return r}(e,i,u,r,r,!0,a,n)},l=function(t){return H(i,(function(r){return tv(e,r,n,t,t)}))},d=function(t){var n=!0,r=!1
Rn(t)&&c.getContentEditable(t)&&(n=u,u="true"===c.getContentEditable(t),r=!0)
var o=ae(t.childNodes)
if(u&&!r){var i=l(t),s=t.parentNode
!i&&v(s)&&pl(a)&&l(s)}if(a.deep&&o.length){for(var f=0;f<o.length;f++)d(o[f])
r&&(u=n)}V(["underline","line-through","overline"],(function(n){Rn(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&sl(c,t.parentNode)===n&&tv(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))},m=function(e){var t=c.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"]
return function(e){return Yf(e)&&Rn(e)&&("_start"===e.id||"_end"===e.id)}(n)&&(n=n[e?"firstChild":"lastChild"]),Mn(n)&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),c.remove(t,!0),n},g=function(t){var n,r,o=Dl(e,t,i,t.collapsed)
if(a.split){if(o=yd(o),(n=Xh(e,o,!0))!==(r=Xh(e,o))){if(n=Yh(n,!0),r=Yh(r,!1),Kh(c,n,r)){var u=L.from(n.firstChild).getOr(n)
return f(Jh(c,u,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void m(!0)}if(Kh(c,r,n)){u=L.from(r.lastChild).getOr(r)
return f(Jh(c,u,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void m(!1)}n=Gh(c,n,"span",{id:"_start","data-mce-type":"bookmark"}),r=Gh(c,r,"span",{id:"_end","data-mce-type":"bookmark"})
var s=c.createRng()
s.setStartAfter(n),s.setEndBefore(r),Tl(c,s,(function(e){V(e,(function(e){Yf(e)||Yf(e.parentNode)||f(e)}))})),f(n),f(r),n=m(!0),r=m()}else n=r=f(n)
o.startContainer=n.parentNode?n.parentNode:n,o.startOffset=c.nodeIndex(n),o.endContainer=r.parentNode?r.parentNode:r,o.endOffset=c.nodeIndex(r)+1}Tl(c,o,(function(e){V(e,d)}))}
if(r){if(Zf(r)){var p=c.createRng()
p.setStartBefore(r),p.setEndAfter(r),g(p)}else g(r)
nd(e,t,r,n)}else if("false"!==c.getContentEditable(s.getNode()))s.isCollapsed()&&gl(a)&&!Ll(e).length?Rh(e,t,n,o):(Vl(s,!0,(function(){jl(e,g)})),gl(a)&&vh(e,t,n,s.getStart())&&el(c,s,s.getRng()),e.nodeChanged()),nd(e,t,r,n)
else{r=s.getNode()
for(var h=0;h<i.length&&(!i[h].ceFalseOverride||!tv(e,i[h],n,r,r));h++);nd(e,t,r,n)}},ov=Et.each,iv=function(e,t,n,r){ov(t,(function(t){gl(t)&&ov(e.dom.select(t.inline,r),(function(r){Ih(r)&&tv(e,t,n,r,t.exact?r:null)})),function(e,t,n){if(t.clear_child_styles){var r=t.links?"*:not(a)":"*"
Lh(e.select(r,n),(function(n){Ih(n)&&Lh(t.styles,(function(t,r){e.setStyle(n,r,"")}))}))}}(e.dom,t,r)}))},av=Et.each,uv=function(e){return Rn(e)&&!Yf(e)&&!Mf(e)&&!Bn(e)},cv=function(e,t,n,r){var o=e.formatter.get(t),i=o[0],a=!r&&e.selection.isCollapsed(),u=e.dom,c=e.selection,s=function(e,t){if(void 0===t&&(t=i),b(t.onformat)&&t.onformat(e,t,n,r),av(t.styles,(function(t,r){u.setStyle(e,r,il(t,n))})),t.styles){var o=u.getAttrib(e,"style")
o&&u.setAttrib(e,"data-mce-style",o)}av(t.attributes,(function(t,r){u.setAttrib(e,r,il(t,n))})),av(t.classes,(function(t){t=il(t,n),u.hasClass(e,t)||u.addClass(e,t)}))},l=function(e,t){var n=!1
return av(e,(function(e){return!!ml(e)&&(v(e.collapsed)&&e.collapsed!==a?void 0:u.is(t,e.selector)&&!Mf(t)?(s(t,e),n=!0,!1):void 0)})),n},d=function(e){if(f(e)){var t=u.create(e)
return s(t),t}return null},m=function(r,a,u){var c=[],f=!0,m=i.inline||i.block,g=d(m)
Tl(r,a,(function(a){var d,p=function(a){var h=!1,b=f,y=a.nodeName.toLowerCase(),C=a.parentNode,x=C.nodeName.toLowerCase()
if(Rn(a)&&r.getContentEditable(a)&&(b=f,f="true"===r.getContentEditable(a),h=!0),Hn(a)&&!function(e,t,n,r){if(function(e){return e.getParam("format_empty_lines",!1,"boolean")}(e)&&gl(t)){var o=Ae(Ae({},e.schema.getTextBlockElements()),{td:{},th:{},li:{},dt:{},dd:{},figcaption:{},caption:{},details:{},summary:{}}),i=ch(At.fromDom(n),(function(e){return Mf(e.dom)}))
return ye(o,r)&&Zo(At.fromDom(n.parentNode),!1)&&!i}return!1}(e,i,a,x))return d=null,void(dl(i)&&r.remove(a))
if(dl(i)&&i.wrapper&&hh(e,a,t,n))d=null
else{if(f&&!h&&dl(i)&&!i.wrapper&&nl(e,y)&&rl(e,x,m)){var w=r.rename(a,m)
return s(w),c.push(w),void(d=null)}if(ml(i)){var S=l(o,a)
if(!S&&v(C)&&pl(i)&&(S=l(o,C)),!gl(i)||S)return void(d=null)}!f||h||!rl(e,m,y)||!rl(e,x,m)||!u&&Mn(a)&&Co(a.data)||Mf(a)||gl(i)&&r.isBlock(a)?(d=null,V(ae(a.childNodes),p),h&&(f=b),d=null):(d||(d=r.clone(g,!1),a.parentNode.insertBefore(d,a),c.push(d)),d.appendChild(a))}}
V(a,p)})),!0===i.links&&V(c,(function(e){var t=function(e){"A"===e.nodeName&&s(e,i),V(ae(e.childNodes),t)}
t(e)})),V(c,(function(a){var u=function(e){var t=0
return V(e.childNodes,(function(e){(function(e){return v(e)&&Mn(e)&&0===e.length})(e)||Yf(e)||t++})),t}(a)
!(c.length>1)&&r.isBlock(a)||0!==u?(gl(i)||dl(i)&&i.wrapper)&&(i.exact||1!==u||(a=function(e){return G(e.childNodes,uv).filter((function(e){return gh(r,e,i)})).map((function(t){var n=r.clone(t,!1)
return s(n),r.replace(n,e,!0),r.remove(t,!0),n})).getOr(e)}(a)),iv(e,o,n,a),function(e,t,n,r,o){hh(e,o.parentNode,n,r)&&tv(e,t,r,o)||t.merge_with_parents&&e.dom.getParent(o.parentNode,(function(i){if(hh(e,i,n,r))return tv(e,t,r,o),!0}))}(e,i,t,n,a),function(e,t,n,r){t.styles&&t.styles.backgroundColor&&zh(r,Hh(e,"fontSize"),jh(e,"backgroundColor",il(t.styles.backgroundColor,n)))}(r,i,n,a),function(e,t,n,r){var o=function(t){if(1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType){var n=sl(e,t.parentNode)
e.getStyle(t,"color")&&n?e.setStyle(t,"text-decoration",n):e.getStyle(t,"text-decoration")===n&&e.setStyle(t,"text-decoration",null)}}
t.styles&&(t.styles.color||t.styles.textDecoration)&&(Et.walk(r,o,"childNodes"),o(r))}(r,i,0,a),function(e,t,n,r){!gl(t)||"sub"!==t.inline&&"sup"!==t.inline||(zh(r,Hh(e,"fontSize"),jh(e,"fontSize","")),e.remove(e.select("sup"===t.inline?"sub":"sup",r),!0))}(r,i,0,a),Uh(r,i,0,a)):r.remove(a,!0)}))}
if("false"!==u.getContentEditable(c.getNode())){if(i){if(r)if(Zf(r)){if(!l(o,r)){var g=u.createRng()
g.setStartBefore(r),g.setEndAfter(r),m(u,Dl(e,g,o),!0)}}else m(u,r,!0)
else if(a&&gl(i)&&!Ll(e).length)(function(e,t,n){var r,o,i=e.selection,a=i.getRng(),u=a.startOffset,c=a.startContainer.nodeValue;(r=Ff(e.getBody(),i.getStart()))&&(o=Sh(r))
var s,f,l=/[^\s\u00a0\u00ad\u200b\ufeff]/
if(c&&u>0&&u<c.length&&l.test(c.charAt(u))&&l.test(c.charAt(u-1))){var d=i.getBookmark()
a.collapse(!0)
var m=Dl(e,a,e.formatter.get(t))
m=yd(m),e.formatter.apply(t,n,m),i.moveToBookmark(d)}else r&&o.nodeValue===Ch||(s=e.getDoc(),f=kh(!0).dom,o=(r=s.importNode(f,!0)).firstChild,a.insertNode(r),u=1),e.formatter.apply(t,n,r),i.setCursorLocation(o,u)})(e,t,n)
else{var p=c.getNode(),h=o[0]
e.settings.forced_root_block||!h.defaultBlock||u.getParent(p,u.isBlock)||cv(e,h.defaultBlock),c.setRng($p(c.getRng())),Vl(c,!0,(function(){jl(e,(function(t,n){var r=n?t:Dl(e,t,o)
m(u,r,!1)}))})),el(u,c,c.getRng()),e.nodeChanged()}(function(e,t){Ph(Oh[e],(function(e){e(t)}))})(t,e)}td(e,t,r,n)}else{r=c.getNode()
for(var y=0,C=o.length;y<C;y++){var x=o[y]
if(x.ceFalseOverride&&ml(x)&&u.is(r,x.selector)){s(r,x)
break}}td(e,t,r,n)}},sv=function(e){return be(e,"vars")},fv=function(e){return e.selection.getStart()},lv=function(e,t,n,r,o){return Y(t,(function(t){var i=e.formatter.matchNode(t,n,null!=o?o:{},r)
return!p(i)}),(function(t){return!!dh(e,t,n)||!r&&v(e.formatter.matchNode(t,n,o,!0))}))},dv=function(e,t){var n=null!=t?t:fv(e)
return W(fl(e.dom,n),(function(e){return Rn(e)&&!Bn(e)}))},mv=function(e,t,n){var r=dv(e,t)
fe(n,(function(n,o){var i=function(n){var i=lv(e,r,o,n.similar,sv(n)?n.vars:void 0),a=i.isSome()
if(n.state.get()!==a){n.state.set(a)
var u=i.getOr(t)
sv(n)?n.callback(a,{node:u,format:o,parents:r}):V(n.callbacks,(function(e){return e(a,{node:u,format:o,parents:r})}))}}
V([n.withSimilar,n.withoutSimilar],i),V(n.withVars,i)}))},gv=function(e,t,n,r,o,i){return null===t.get()&&function(e,t){e.set({}),t.on("NodeChange",(function(n){mv(t,n.element,e.get())})),t.on("FormatApply FormatRemove",(function(n){var r=L.from(n.node).map((function(e){return Zf(e)?e:e.startContainer})).bind((function(e){return Rn(e)?L.some(e):L.from(e.parentElement)})).getOrThunk((function(){return fv(t)}))
mv(t,r,e.get())}))}(t,e),function(e,t,n,r,o,i){var a=t.get()
V(n.split(","),(function(t){var n=ve(a,t).getOrThunk((function(){var e={withSimilar:{state:yu(!1),similar:!0,callbacks:[]},withoutSimilar:{state:yu(!1),similar:!1,callbacks:[]},withVars:[]}
return a[t]=e,e})),u=function(){var n=dv(e)
return lv(e,n,t,o,i).isSome()}
if(p(i)){var c=o?n.withSimilar:n.withoutSimilar
c.callbacks.push(r),1===c.callbacks.length&&c.state.set(u())}else n.withVars.push({state:yu(u()),similar:o,vars:i,callback:r})})),t.set(a)}(e,t,n,r,o,i),{unbind:function(){return function(e,t,n){var r=e.get()
V(t.split(","),(function(e){return ve(r,e).each((function(t){r[e]={withSimilar:Ae(Ae({},t.withSimilar),{callbacks:W(t.withSimilar.callbacks,(function(e){return e!==n}))}),withoutSimilar:Ae(Ae({},t.withoutSimilar),{callbacks:W(t.withoutSimilar.callbacks,(function(e){return e!==n}))}),withVars:W(t.withVars,(function(e){return e.callback!==n}))}}))})),e.set(r)}(t,n,r)}}},pv=function(e,t){var n=(t||document).createDocumentFragment()
return V(e,(function(e){n.appendChild(e.dom)})),At.fromDom(n)},hv=function(e,t,n){return{element:e,width:t,rows:n}},vv=function(e,t){return{element:e,cells:t}},bv=function(e,t){return{x:e,y:t}},yv=function(e,t){var n=parseInt(Zn(e,t),10)
return isNaN(n)?1:n},Cv=function(e,t,n){var r=e.rows
return!!(r[n]?r[n].cells:[])[t]},xv=function(e){return X(e,(function(e,t){return t.cells.length>e?t.cells.length:e}),0)},wv=function(e,t){for(var n=e.rows,r=0;r<n.length;r++)for(var o=n[r].cells,i=0;i<o.length;i++)if(Ot(o[i],t))return L.some(bv(i,r))
return L.none()},Sv=function(e,t,n,r,o){for(var i=[],a=e.rows,u=n;u<=o;u++){var c=a[u].cells,s=t<r?c.slice(t,r+1):c.slice(r,t+1)
i.push(vv(a[u].element,s))}return i},kv=function(e){var t=hv(Xu(e),0,[])
return V(Iu(e,"tr"),(function(e,n){V(Iu(e,"td,th"),(function(r,o){(function(e,t,n,r,o){for(var i=yv(o,"rowspan"),a=yv(o,"colspan"),u=e.rows,c=n;c<n+i;c++){u[c]||(u[c]=vv(Yu(r),[]))
for(var s=t;s<t+a;s++)u[c].cells[s]=c===n&&s===t?o:Xu(o)}})(t,function(e,t,n){for(;Cv(e,t,n);)t++
return t}(t,o,n),n,e,r)}))})),hv(t.element,xv(t.rows),t.rows)},Nv=function(e){return function(e,t){var n=Xu(e.element),r=At.fromTag("tbody")
return mn(r,t),dn(n,r),n}(e,function(e){return j(e.rows,(function(e){var t=j(e.cells,(function(e){var t=Yu(e)
return tr(t,"colspan"),tr(t,"rowspan"),t})),n=Xu(e.element)
return mn(n,t),n}))}(e))},Ev=function(e,t,n){return wv(e,t).bind((function(t){return wv(e,n).map((function(n){return function(e,t,n){var r=t.x,o=t.y,i=n.x,a=n.y,u=o<a?Sv(e,r,o,i,a):Sv(e,r,a,i,o)
return hv(e.element,xv(u),u)}(e,t,n)}))}))},_v=function(e,t){return G(e,(function(e){return"li"===Lt(e)&&Ul(e,t)})).fold(S([]),(function(t){return function(e){return G(e,(function(e){return"ul"===Lt(e)||"ol"===Lt(e)}))}(e).map((function(e){var t=At.fromTag(Lt(e)),n=pe(ar(e),(function(e,t){return Ie(t,"list-style")}))
return nr(t,n),[At.fromTag("li"),t]})).getOr([])}))},Av=function(e,t){var n=At.fromDom(t.commonAncestorContainer),r=kg(n,e),o=W(r,(function(e){return so(e)||uo(e)})),i=_v(r,t),a=o.concat(i.length?i:function(e){return go(e)?$t(e).filter(mo).fold(S([]),(function(t){return[e,t]})):mo(e)?[e]:[]}(n))
return j(a,Xu)},Rv=function(){return pv([])},Dv=function(e,t){return n=At.fromDom(t.cloneContents()),r=Av(e,t),o=X(r,(function(e,t){return dn(t,e),t}),n),r.length>0?pv([o]):o
var n,r,o},Tv=function(e,t){return(n=e,r=t[0],Yr(r,"table",E(Ot,n))).bind((function(e){var n=t[0],r=t[t.length-1],o=kv(e)
return Ev(o,n,r).map((function(e){return pv([Nv(e)])}))})).getOrThunk(Rv)
var n,r},Ov=function(e,t){var n=Pl(t,e)
return n.length>0?Tv(e,n):function(e,t){return t.length>0&&t[0].collapsed?Rv():Dv(e,t[0])}(e,t)},Bv=function(e,t){return t>=0&&t<e.length&&Jf(e.charAt(t))},Pv=function(e,t){var n=xo(e.innerText)
return t?function(e){return e.replace(/^[ \f\n\r\t\v]+/,"")}(n):n},Lv=function(e,t,n){void 0===n&&(n={})
var r=function(e,t){return Ae(Ae({},e),{format:t,get:!0,selection:!0})}(n,t),o=e.fire("BeforeGetContent",r)
if(o.isDefaultPrevented())return e.fire("GetContent",o),o.content
if("text"===o.format)return function(e){return L.from(e.selection.getRng()).map((function(t){var n=L.from(e.dom.getParent(t.commonAncestorContainer,e.dom.isBlock)),r=e.getBody(),o=function(e){return e.map((function(e){return e.nodeName})).getOr("div").toLowerCase()}(n),i=xt.browser.isIE()&&"pre"!==o,a=e.dom.add(r,o,{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},t.cloneContents()),u=Pv(a,i),c=xo(a.textContent)
if(e.dom.remove(a),Bv(c,0)||Bv(c,c.length-1)){var s=n.getOr(r),f=Pv(s,i),l=f.indexOf(u)
return-1===l?u:(Bv(f,l-1)?" ":"")+u+(Bv(f,l+u.length)?" ":"")}return u})).getOr("")}(e)
o.getInner=!0
var i=function(e,t){var n=e.selection.getRng(),r=e.dom.create("body"),o=e.selection.getSel(),i=Em(e,Ol(o)),a=t.contextual?Ov(At.fromDom(e.getBody()),i).dom:n.cloneContents()
return a&&r.appendChild(a),e.selection.serializer.serialize(r,t)}(e,o)
return"tree"===o.format?i:(o.content=e.selection.isCollapsed()?"":i,e.fire("GetContent",o),o.content)},Iv=function(e){return Rn(e)?e.outerHTML:Mn(e)?vi.encodeRaw(e.data,!1):Fn(e)?"\x3c!--"+e.data+"--\x3e":""},Mv=function(e,t,n){var r=function(e){var t,n=document.createElement("div"),r=document.createDocumentFragment()
for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t)
return r}(t)
if(e.hasChildNodes()&&n<e.childNodes.length){var o=e.childNodes[n]
o.parentNode.insertBefore(r,o)}else e.appendChild(r)},Fv=function(e,t){var n,r,o,i,a,u,c,s,f,l=j(ae(t.childNodes),Iv)
return function(e,t){var n=0
V(e,(function(e){0===e[0]?n++:1===e[0]?(Mv(t,e[1],n),n++):2===e[0]&&function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var n=e.childNodes[t]
n.parentNode.removeChild(n)}}(t,n)}))}((r=e,o=(n=l).length+r.length+2,i=new Array(o),a=new Array(o),u=function(e,t,o,i,a){var c=s(e,t,o,i)
if(null===c||c.start===t&&c.diag===t-i||c.end===e&&c.diag===e-o)for(var f=e,l=o;f<t||l<i;)f<t&&l<i&&n[f]===r[l]?(a.push([0,n[f]]),++f,++l):t-e>i-o?(a.push([2,n[f]]),++f):(a.push([1,r[l]]),++l)
else{u(e,c.start,o,c.start-c.diag,a)
for(var d=c.start;d<c.end;++d)a.push([0,n[d]])
u(c.end,t,c.end-c.diag,i,a)}},c=function(e,t,o,i){for(var a=e;a-t<i&&a<o&&n[a]===r[a-t];)++a
return function(e,t,n){return{start:e,end:t,diag:n}}(e,a,t)},s=function(e,t,o,u){var s=t-e,f=u-o
if(0===s||0===f)return null
var l,d,m,g,p,h=s-f,v=f+s,b=(v%2==0?v:v+1)/2
for(i[1+b]=e,a[1+b]=t+1,l=0;l<=b;++l){for(d=-l;d<=l;d+=2){for(m=d+b,d===-l||d!==l&&i[m-1]<i[m+1]?i[m]=i[m+1]:i[m]=i[m-1]+1,p=(g=i[m])-e+o-d;g<t&&p<u&&n[g]===r[p];)i[m]=++g,++p
if(h%2!=0&&h-l<=d&&d<=h+l&&a[m-h]<=i[m])return c(a[m-h],d+e-o,t,u)}for(d=h-l;d<=h+l;d+=2){for(m=d+b-h,d===h-l||d!==h+l&&a[m+1]<=a[m-1]?a[m]=a[m+1]-1:a[m]=a[m-1],p=(g=a[m]-1)-e+o-d;g>=e&&p>=o&&n[g]===r[p];)a[m]=g--,p--
if(h%2==0&&-l<=d&&d<=l&&a[m]<=i[m+h])return c(a[m],d+e-o,t,u)}}},f=[],u(0,n.length,0,r.length,f),f),t),t},Uv=De((function(){return document.implementation.createHTMLDocument("undo")})),zv=function(e){var t,n=(t=e.getBody(),W(j(ae(t.childNodes),Iv),(function(e){return e.length>0}))),r=Q(n,(function(t){var n=$m(e.serializer,t)
return n.length>0?[n]:[]})),o=r.join("")
return-1!==o.indexOf("</iframe>")?function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}}(r):function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}}(o)},Hv=function(e,t,n){var r=n?t.beforeBookmark:t.bookmark
"fragmented"===t.type?Fv(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw",no_selection:!v(r)||!Uf(r)||!r.isFakeCaret}),e.selection.moveToBookmark(r)},jv=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},Vv=function(e){var t=At.fromTag("body",Uv())
return Wu(t,jv(e)),V(Iu(t,"*[data-mce-bogus]"),hn),t.dom.innerHTML},qv=function(e,t){return!(!e||!t)&&(!!function(e,t){return jv(e)===jv(t)}(e,t)||function(e,t){return Vv(e)===Vv(t)}(e,t))},$v=function(e){return 0===e.get()},Wv=function(e,t,n){$v(n)&&(e.typing=t)},Kv=function(e,t){e.typing&&(Wv(e,!1,t),e.add())},Xv=function(e){return{undoManager:{beforeChange:function(t,n){return function(e,t,n){$v(t)&&n.set(Gc(e.selection))}(e,t,n)},add:function(t,n,r,o,i,a){return function(e,t,n,r,o,i,a){var u=zv(e)
if(i=i||{},i=Et.extend(i,u),!1===$v(r)||e.removed)return null
var c=t.data[n.get()]
if(e.fire("BeforeAddUndo",{level:i,lastLevel:c,originalEvent:a}).isDefaultPrevented())return null
if(c&&qv(c,i))return null
t.data[n.get()]&&o.get().each((function(e){t.data[n.get()].beforeBookmark=e}))
var s=function(e){return e.getParam("custom_undo_redo_levels",0,"number")}(e)
if(s&&t.data.length>s){for(var f=0;f<t.data.length-1;f++)t.data[f]=t.data[f+1]
t.data.length--,n.set(t.data.length)}i.bookmark=Gc(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(i),n.set(t.data.length-1)
var l={level:i,lastLevel:c,originalEvent:a}
return n.get()>0?(e.setDirty(!0),e.fire("AddUndo",l),e.fire("change",l)):e.fire("AddUndo",l),i}(e,t,n,r,o,i,a)},undo:function(t,n,r){return function(e,t,n,r){var o
return t.typing&&(t.add(),t.typing=!1,Wv(t,!1,n)),r.get()>0&&(r.set(r.get()-1),o=t.data[r.get()],Hv(e,o,!0),e.setDirty(!0),e.fire("Undo",{level:o})),o}(e,t,n,r)},redo:function(t,n){return function(e,t,n){var r
return t.get()<n.length-1&&(t.set(t.get()+1),r=n[t.get()],Hv(e,r,!1),e.setDirty(!0),e.fire("Redo",{level:r})),r}(e,t,n)},clear:function(t,n){return function(e,t,n){t.data=[],n.set(0),t.typing=!1,e.fire("ClearUndos")}(e,t,n)},reset:function(e){return function(e){e.clear(),e.add()}(e)},hasUndo:function(t,n){return function(e,t,n){return n.get()>0||t.typing&&t.data[0]&&!qv(zv(e),t.data[0])}(e,t,n)},hasRedo:function(e,t){return function(e,t){return t.get()<e.data.length-1&&!e.typing}(e,t)},transact:function(e,t,n){return function(e,t,n){return Kv(e,t),e.beforeChange(),e.ignore(n),e.add()}(e,t,n)},ignore:function(e,t){return function(e,t){try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}}(e,t)},extra:function(t,n,r,o){return function(e,t,n,r,o){if(t.transact(r)){var i=t.data[n.get()].bookmark,a=t.data[n.get()-1]
Hv(e,a,!0),t.transact(o)&&(t.data[n.get()-1].beforeBookmark=i)}}(e,t,n,r,o)}},formatter:{match:function(t,n,r,o){return vh(e,t,n,r,o)},matchAll:function(t,n){return function(e,t,n){var r=[],o={},i=e.selection.getStart()
return e.dom.getParent(i,(function(i){for(var a=0;a<t.length;a++){var u=t[a]
!o[u]&&hh(e,i,u,n)&&(o[u]=!0,r.push(u))}}),e.dom.getRoot()),r}(e,t,n)},matchNode:function(t,n,r,o){return hh(e,t,n,r,o)},canApply:function(t){return function(e,t){var n=e.formatter.get(t),r=e.dom
if(n)for(var o=e.selection.getStart(),i=fl(r,o),a=n.length-1;a>=0;a--){var u=n[a]
if(!ml(u)||v(u.defaultBlock))return!0
for(var c=i.length-1;c>=0;c--)if(r.is(i[c],u.selector))return!0}return!1}(e,t)},closest:function(t){return bh(e,t)},apply:function(t,n,r){return cv(e,t,n,r)},remove:function(t,n,r,o){return rv(e,t,n,r,o)},toggle:function(t,n,r){return function(e,t,n,r){var o=e.formatter.get(t)
!vh(e,t,n,r)||"toggle"in o[0]&&!o[0].toggle?cv(e,t,n,r):rv(e,t,n,r)}(e,t,n,r)},formatChanged:function(t,n,r,o,i){return gv(e,t,n,r,o,i)}},editor:{getContent:function(t,n){return function(e,t,n){return L.from(e.getBody()).fold(S("tree"===t.format?new Tm("body",11):""),(function(r){return Km(e,t,n,r)}))}(e,t,n)},setContent:function(t,n){return uh(e,t,n)},insertContent:function(t,n){return nh(e,t,n)},addVisual:function(t){return function(e,t){var n=e.dom,r=v(t)?t:e.getBody()
p(e.hasVisual)&&(e.hasVisual=function(e){return e.getParam("visual",!0,"boolean")}(e)),V(n.select("table,a",r),(function(t){switch(t.nodeName){case"TABLE":var r=function(e){return e.getParam("visual_table_class","mce-item-table","string")}(e),o=n.getAttrib(t,"border")
o&&"0"!==o||!e.hasVisual?n.removeClass(t,r):n.addClass(t,r)
break
case"A":if(!n.getAttrib(t,"href")){var i=n.getAttrib(t,"name")||t.id,a=function(e){return e.getParam("visual_anchor_class","mce-item-anchor","string")}(e)
i&&e.hasVisual?n.addClass(t,a):n.removeClass(t,a)}}})),e.fire("VisualAid",{element:t,hasVisual:e.hasVisual})}(e,t)}},selection:{getContent:function(t,n){return Lv(e,t,n)}},raw:{getModel:function(){return L.none()}}}},Yv=function(e){return be(e.plugins,"rtc")},Gv=function(e){var t=e
return function(e){return ve(e.plugins,"rtc").bind((function(e){return L.from(e.setup)}))}(e).fold((function(){return t.rtcInstance=Xv(e),L.none()}),(function(e){return t.rtcInstance=function(){var e=S(null),t=S("")
return{undoManager:{beforeChange:C,add:e,undo:e,redo:e,clear:C,reset:C,hasUndo:D,hasRedo:D,transact:e,ignore:C,extra:C},formatter:{match:D,matchAll:S([]),matchNode:S(void 0),canApply:D,closest:t,apply:C,remove:C,toggle:C,formatChanged:S({unbind:C})},editor:{getContent:t,setContent:t,insertContent:C,addVisual:C},selection:{getContent:t},raw:{getModel:S(L.none())}}}(),L.some((function(){return e().then((function(e){return t.rtcInstance=function(e){var t=function(e){return l(e)?e:{}},n=e.undoManager,r=e.formatter,o=e.editor,i=e.selection,a=e.raw
return{undoManager:{beforeChange:n.beforeChange,add:n.add,undo:n.undo,redo:n.redo,clear:n.clear,reset:n.reset,hasUndo:n.hasUndo,hasRedo:n.hasRedo,transact:function(e,t,r){return n.transact(r)},ignore:function(e,t){return n.ignore(t)},extra:function(e,t,r,o){return n.extra(r,o)}},formatter:{match:function(e,n,o,i){return r.match(e,t(n),i)},matchAll:r.matchAll,matchNode:r.matchNode,canApply:function(e){return r.canApply(e)},closest:function(e){return r.closest(e)},apply:function(e,n,o){return r.apply(e,t(n))},remove:function(e,n,o,i){return r.remove(e,t(n))},toggle:function(e,n,o){return r.toggle(e,t(n))},formatChanged:function(e,t,n,o,i){return r.formatChanged(t,n,o,i)}},editor:{getContent:function(e,t){return o.getContent(e)},setContent:function(e,t){return o.setContent(e,t)},insertContent:function(e,t){return o.insertContent(e)},addVisual:o.addVisual},selection:{getContent:function(e,t){return i.getContent(t)}},raw:{getModel:function(){return L.some(a.getRawModel())}}}}(e),e.rtc.isRemote}))}))}))},Jv=function(e){return e.rtcInstance?e.rtcInstance:Xv(e)},Qv=function(e){var t=e.rtcInstance
if(t)return t
throw new Error("Failed to get RTC instance not yet initialized.")},Zv=function(e,t){return void 0===t&&(t={}),function(e,t,n){return Qv(e).selection.getContent(t,n)}(e,t.format?t.format:"html",t)},eb=function(e){return 0===e.dom.length?(pn(e),L.none()):L.some(e)},tb=function(e,t,n,r){e.bind((function(e){return(r?tp:ep)(e.dom,r?e.dom.length:0),t.filter(Ut).map((function(t){return function(e,t,n,r){var o=e.dom,i=t.dom,a=r?o.length:i.length
r?(np(o,i,!1,!r),n.setStart(i,a)):(np(i,o,!1,!r),n.setEnd(i,a))}(e,t,n,r)}))})).orThunk((function(){return function(e,t){return e.filter((function(e){return Jl.isBookmarkNode(e.dom)})).bind(t?Kt:Wt)}(t,r).or(t).filter(Ut).map((function(e){return function(e,t){$t(e).each((function(n){var r=e.dom
t&&$g(n,_c(r,0))?ep(r,0):!t&&Wg(n,_c(r,r.length))&&tp(r,r.length)}))}(e,r)}))}))},nb=function(e,t,n){void 0===n&&(n={})
var r=function(e,t){return Ae(Ae({format:"html"},e),{set:!0,selection:!0,content:t})}(n,t),o=r
if(!r.no_events){var i=e.fire("BeforeSetContent",r)
if(i.isDefaultPrevented())return void e.fire("SetContent",i)
o=i}o.content=function(e,t){if("raw"!==t.format){var n=e.selection.getRng(),r=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),o=r?{context:r.nodeName.toLowerCase()}:{},i=e.parser.parse(t.content,Ae(Ae({isRootContent:!0,forced_root_block:!1},o),t))
return Qm({validate:e.validate},e.schema).serialize(i)}return t.content}(e,o)
var a=e.selection.getRng();(function(e,t){var n=L.from(t.firstChild).map(At.fromDom),r=L.from(t.lastChild).map(At.fromDom)
e.deleteContents(),e.insertNode(t)
var o=n.bind(Wt).filter(Ut).bind(eb),i=r.bind(Kt).filter(Ut).bind(eb)
tb(o,n,e,!0),tb(i,r,e,!1),e.collapse(!1)})(a,a.createContextualFragment(o.content)),e.selection.setRng(a),jd(e,a),o.no_events||e.fire("SetContent",o)},rb=function(e,t,n){if(e&&be(e,t)){var r=W(e[t],(function(e){return e!==n}))
0===r.length?delete e[t]:e[t]=r}}
var ob,ib,ab=function(e){return!!e.select},ub=function(e){return!(!e||!e.ownerDocument)&&Pt(At.fromDom(e.ownerDocument),At.fromDom(e))},cb=function(e,t,n,r){var o,i,a=function(e,t){var n,r,o=function(t,n){return G(n,(function(n){return e.is(n,t)}))},i=function(t){return e.getParents(t,null,e.getRoot())}
return{selectorChangedWithUnbind:function(e,a){return n||(n={},r={},t.on("NodeChange",(function(e){var t=e.element,a=i(t),u={}
Et.each(n,(function(e,t){o(t,a).each((function(n){r[t]||(V(e,(function(e){e(!0,{node:n,selector:t,parents:a})})),r[t]=e),u[t]=e}))})),Et.each(r,(function(e,n){u[n]||(delete r[n],Et.each(e,(function(e){e(!1,{node:t,selector:n,parents:a})})))}))}))),n[e]||(n[e]=[]),n[e].push(a),o(e,i(t.selection.getStart())).each((function(){r[e]=n[e]})),{unbind:function(){rb(n,e,a),rb(r,e,a)}}}}}(e,r).selectorChangedWithUnbind,u=function(e,t){return nb(r,e,t)},c=function(e){var t=f()
t.collapse(!!e),l(t)},s=function(){return t.getSelection?t.getSelection():t.document.selection},f=function(){var n,a,u,c=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}},f=t.document
if(void 0!==r.bookmark&&!1===bm(r)){var l=am(r)
if(l.isSome())return l.map((function(e){return Em(r,[e])[0]})).getOr(f.createRange())}try{(n=s())&&!An(n.anchorNode)&&(a=n.rangeCount>0?n.getRangeAt(0):n.createRange?n.createRange():f.createRange(),a=Em(r,[a])[0])}catch(d){}return a||(a=f.createRange?f.createRange():f.body.createTextRange()),a.setStart&&9===a.startContainer.nodeType&&a.collapsed&&(u=e.getRoot(),a.setStart(u,0),a.setEnd(u,0)),o&&i&&(0===c(a.START_TO_START,a,o)&&0===c(a.END_TO_END,a,o)?a=i:(o=null,i=null)),a},l=function(e,t){var n
if(function(e){return!!e&&(!!ab(e)||ub(e.startContainer)&&ub(e.endContainer))}(e)){var a=ab(e)?e:null
if(a){i=null
try{a.select()}catch(c){}}else{var u=s()
if(e=r.fire("SetSelectionRange",{range:e,forward:t}).range,u){i=e
try{u.removeAllRanges(),u.addRange(e)}catch(c){}!1===t&&u.extend&&(u.collapse(e.endContainer,e.endOffset),u.extend(e.startContainer,e.startOffset)),o=u.rangeCount>0?u.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!u.setBaseAndExtent||xt.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset])&&"IMG"===n.tagName&&(u.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),u.anchorNode===e.startContainer&&u.focusNode===e.endContainer||u.setBaseAndExtent(n,0,n,1)),r.fire("AfterSetSelectionRange",{range:e,forward:t})}}},d=function(){var t=s(),n=null==t?void 0:t.anchorNode,r=null==t?void 0:t.focusNode
if(!t||!n||!r||An(n)||An(r))return!0
var o=e.createRng()
o.setStart(n,t.anchorOffset),o.collapse(!0)
var i=e.createRng()
return i.setStart(r,t.focusOffset),i.collapse(!0),o.compareBoundaryPoints(o.START_TO_START,i)<=0},m={bookmarkManager:null,controlSelection:null,dom:e,win:t,serializer:n,editor:r,collapse:c,setCursorLocation:function(t,n){var o=e.createRng()
v(t)&&v(n)?(o.setStart(t,n),o.setEnd(t,n),l(o),c(!1)):(zl(e,o,r.getBody(),!0),l(o))},getContent:function(e){return Zv(r,e)},setContent:u,getBookmark:function(e,t){return g.getBookmark(e,t)},moveToBookmark:function(e){return g.moveToBookmark(e)},select:function(t,n){return function(e,t,n){return L.from(t).map((function(t){var r=e.nodeIndex(t),o=e.createRng()
return o.setStart(t.parentNode,r),o.setEnd(t.parentNode,r+1),n&&(zl(e,o,t,!0),zl(e,o,t,!1)),o}))}(e,t,n).each(l),t},isCollapsed:function(){var e=f(),t=s()
return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:d,setNode:function(t){return u(e.getOuterHTML(t)),t},getNode:function(){return function(e,t){var n,r,o
if(!t)return e
r=t.startContainer,o=t.endContainer
var i=t.startOffset,a=t.endOffset
return n=t.commonAncestorContainer,!t.collapsed&&(r===o&&a-i<2&&r.hasChildNodes()&&(n=r.childNodes[i]),3===r.nodeType&&3===o.nodeType&&(r=r.length===i?Nm(r.nextSibling,!0):r.parentNode,o=0===a?Nm(o.previousSibling,!1):o.parentNode,r&&r===o))?r:n&&3===n.nodeType?n.parentNode:n}(r.getBody(),f())},getSel:s,setRng:l,getRng:f,getStart:function(e){return Sm(r.getBody(),f(),e)},getEnd:function(e){return km(r.getBody(),f(),e)},getSelectedBlocks:function(t,n){return function(e,t,n,r){var o,i=[],a=e.getRoot()
if(n=e.getParent(n||Sm(a,t,t.collapsed),e.isBlock),r=e.getParent(r||km(a,t,t.collapsed),e.isBlock),n&&n!==a&&i.push(n),n&&r&&n!==r){o=n
for(var u=new io(n,a);(o=u.next())&&o!==r;)e.isBlock(o)&&i.push(o)}return r&&n!==r&&r!==a&&i.push(r),i}(e,f(),t,n)},normalize:function(){var t=f(),n=s()
if(!(Ol(n).length>1)&&Hl(r)){var o=vd(e,t)
return o.each((function(e){l(e,d())})),o.getOr(t)}return t},selectorChanged:function(e,t){return a(e,t),m},selectorChangedWithUnbind:a,getScrollContainer:function(){for(var t,n=e.getRoot();n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n
break}n=n.parentNode}return t},scrollIntoView:function(e,t){v(e)?function(e,t,n){(e.inline?Ud:Hd)(e,t,n)}(r,e,t):jd(r,f(),t)},placeCaretAt:function(e,t){return l(ud(e,t,r.getDoc()))},getBoundingClientRect:function(){var e=f()
return e.collapsed?_c.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){t=o=i=null,p.destroy()}},g=Jl(m),p=id(m,r)
return m.bookmarkManager=g,m.controlSelection=p,m},sb=function(e,t,n){e.addNodeFilter("font",(function(e){V(e,(function(e){var r=t.parse(e.attr("style")),o=e.attr("color"),i=e.attr("face"),a=e.attr("size")
o&&(r.color=o),i&&(r["font-family"]=i),a&&(r["font-size"]=n[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",t.serialize(r)),function(e,t){V(t,(function(t){e.attr(t,null)}))}(e,["color","face","size"])}))}))},fb=function(e,t){var n=Ri()
t.convert_fonts_to_spans&&sb(e,n,Et.explode(t.font_size_legacy_values)),function(e,t){e.addNodeFilter("strike",(function(e){V(e,(function(e){var n=t.parse(e.attr("style"))
n["text-decoration"]="line-through",e.name="span",e.attr("style",t.serialize(n))}))}))}(e,n)},lb=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},db=function(e,t){var n
try{n=atob(t)}catch(JE){return L.none()}for(var r=new Uint8Array(n.length),o=0;o<r.length;o++)r[o]=n.charCodeAt(o)
return L.some(new Blob([r],{type:e}))},mb=function(e){return 0===e.indexOf("blob:")?function(e){return new Qr((function(t,n){var r=function(){n("Cannot convert "+e+" to Blob. Resource might not exist or is inaccessible.")}
try{var o=new XMLHttpRequest
o.open("GET",e,!0),o.responseType="blob",o.onload=function(){200===o.status?t(o.response):r()},o.onerror=r,o.send()}catch(i){r()}}))}(e):0===e.indexOf("data:")?(t=e,new Qr((function(e){var n=lb(t),r=n.type,o=n.data
db(r,o).fold((function(){return e(new Blob([]))}),e)}))):null
var t},gb=0,pb=function(e){return(e||"blobid")+gb++},hb=function(e,t,n,r){var o,i
if(0!==t.src.indexOf("blob:")){var a=lb(t.src),u=a.data,c=a.type
o=u,(i=e.getByData(o,c))?n({image:t,blobInfo:i}):mb(t.src).then((function(r){i=e.create(pb(),r,o),e.add(i),n({image:t,blobInfo:i})}),(function(e){r(e)}))}else(i=e.getByUri(t.src))?n({image:t,blobInfo:i}):mb(t.src).then((function(r){(function(e){return new Qr((function(t){var n=new FileReader
n.onloadend=function(){t(n.result)},n.readAsDataURL(e)}))})(r).then((function(a){o=lb(a).data,i=e.create(pb(),r,o),e.add(i),n({image:t,blobInfo:i})}))}),(function(e){r(e)}))},vb=function(e,t){var n={}
return{findAll:function(r,o){o||(o=T)
var i=W(function(e){return e?ae(e.getElementsByTagName("img")):[]}(r),(function(t){var n=t.src
return!!xt.fileApi&&(!t.hasAttribute("data-mce-bogus")&&(!t.hasAttribute("data-mce-placeholder")&&(!(!n||n===xt.transparentSrc)&&(0===n.indexOf("blob:")?!e.isUploaded(n)&&o(t):0===n.indexOf("data:")&&o(t)))))})),a=j(i,(function(e){if(void 0!==n[e.src])return new Qr((function(t){n[e.src].then((function(n){if("string"==typeof n)return n
t({image:e,blobInfo:n.blobInfo})}))}))
var r=new Qr((function(n,r){hb(t,e,n,r)})).then((function(e){return delete n[e.image.src],e})).catch((function(t){return delete n[e.src],t}))
return n[e.src]=r,r}))
return Qr.all(a)}}},bb=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new Tm("br",1)).shortEnded=!0:r.empty().append(new Tm("#text",3)).value=bo},yb=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Cb=function(e,t,n,r){return r.isEmpty(t,n,(function(t){return function(e,t){var n=e.getElementRule(t.name)
return n&&n.paddEmpty}(e,t)}))},xb=function(e,t){var n=t.blob_cache,r=function(e){var r=e.attr("src");(function(e){return e.attr("src")===xt.transparentSrc||v(e.attr("data-mce-placeholder"))})(e)||function(e){return v(e.attr("data-mce-bogus"))}(e)||function(e){var t=/data:([^;]+);base64,([a-z0-9\+\/=\s]+)/i.exec(e)
return t?L.some({type:t[1],data:decodeURIComponent(t[2])}):L.none()}(r).filter((function(){return function(e,t){if(t.images_dataimg_filter){var n=new Image
return n.src=e.attr("src"),fe(e.attributes.map,(function(e,t){n.setAttribute(t,e)})),t.images_dataimg_filter(n)}return!0}(e,t)})).bind((function(e){var t=e.type,r=e.data
return L.from(n.getByData(r,t)).orThunk((function(){return db(t,r).map((function(e){var t=n.create(pb(),e,r)
return n.add(t),t}))}))})).each((function(t){e.attr("src",t.blobUri())}))}
n&&e.addAttributeFilter("src",(function(e){return V(e,r)}))},wb=Et.makeMap,Sb=Et.each,kb=Et.explode,Nb=Et.extend,Eb=function(e,t){void 0===t&&(t=_i())
var n={},r=[],o={},i={};(e=e||{}).validate=!("validate"in e)||e.validate,e.root_name=e.root_name||"body"
var a=function(e){var t=e.name
t in n&&((u=o[t])?u.push(e):o[t]=[e])
for(var a=r.length;a--;){var u,c=r[a].name
if(c in e.attributes.map)(u=i[c])?u.push(e):i[c]=[e]}return e},u={schema:t,addAttributeFilter:function(e,t){Sb(kb(e),(function(e){var n
for(n=0;n<r.length;n++)if(r[n].name===e)return void r[n].callbacks.push(t)
r.push({name:e,callbacks:[t]})}))},getAttributeFilters:function(){return[].concat(r)},addNodeFilter:function(e,t){Sb(kb(e),(function(e){var r=n[e]
r||(n[e]=r=[]),r.push(t)}))},getNodeFilters:function(){var e=[]
for(var t in n)be(n,t)&&e.push({name:t,callbacks:n[t]})
return e},filterNode:a,parse:function(u,c){var s,f,l,d,m,g,p,h,v=[]
c=c||{},o={},i={}
var b=Nb(wb("script,style,head,html,body,title,meta,param"),t.getBlockElements()),y=t.getNonEmptyElements(),C=t.children,x=e.validate,w=function(e){return!1===e?"":!0===e?"p":e}("forced_root_block"in c?c.forced_root_block:e.forced_root_block),S=t.getWhiteSpaceElements(),k=/^[ \t\r\n]+/,N=/[ \t\r\n]+$/,E=/[ \t\r\n]+/g,_=/^[ \t\r\n]+$/,A=be(S,c.context)||be(S,e.root_name),R=function(e,t){var r,i=new Tm(e,t)
return e in n&&((r=o[e])?r.push(i):o[e]=[i]),i},D=function(e){for(var n=t.getBlockElements(),r=e.prev;r&&3===r.type;){var o=r.value.replace(N,"")
if(o.length>0)return void(r.value=o)
var i=r.next
if(i){if(3===i.type&&i.value.length){r=r.prev
continue}if(!n[i.name]&&"script"!==i.name&&"style"!==i.name){r=r.prev
continue}}var a=r.prev
r.remove(),r=a}},T=qm({validate:x,document:e.document,allow_html_data_urls:e.allow_html_data_urls,allow_svg_data_urls:e.allow_svg_data_urls,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,preserve_cdata:e.preserve_cdata,self_closing_elements:function(e){var t={}
for(var n in e)"li"!==n&&"p"!==n&&(t[n]=e[n])
return t}(t.getSelfClosingElements()),cdata:function(e){h.append(R("#cdata",4)).value=e},text:function(e,t){var n
A||(e=e.replace(E," "),function(e,t){return e&&(be(t,e.name)||"br"===e.name)}(h.lastChild,b)&&(e=e.replace(k,""))),0!==e.length&&((n=R("#text",3)).raw=!!t,h.append(n).value=e)},comment:function(e){h.append(R("#comment",8)).value=e},pi:function(e,t){h.append(R(e,7)).value=t,D(h)},doctype:function(e){h.append(R("#doctype",10)).value=e,D(h)},start:function(e,n,o){var a=x?t.getElementRule(e):{}
if(a){var u=R(a.outputName||e,1)
u.attributes=n,u.shortEnded=o,h.append(u)
var c=C[h.name]
c&&C[u.name]&&!c[u.name]&&v.push(u)
for(var s=r.length;s--;){var f=r[s].name
f in n.map&&((g=i[f])?g.push(u):i[f]=[u])}b[e]&&D(u),o||(h=u),!A&&S[e]&&(A=!0)}},end:function(n){var r,o,i,a,u=x?t.getElementRule(n):{}
if(u){if(b[n]&&!A){if((r=h.firstChild)&&3===r.type)if((o=r.value.replace(k,"")).length>0)r.value=o,r=r.next
else for(i=r.next,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.next,(0===o.length||_.test(o))&&(r.remove(),r=i),r=i
if((r=h.lastChild)&&3===r.type)if((o=r.value.replace(N,"")).length>0)r.value=o,r=r.prev
else for(i=r.prev,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.prev,(0===o.length||_.test(o))&&(r.remove(),r=i),r=i}if(A&&S[n]&&(A=!1),u.removeEmpty&&Cb(t,y,S,h))return a=h.parent,b[h.name]?h.empty().remove():h.unwrap(),void(h=a)
u.paddEmpty&&(function(e){return yb(e,"#text")&&e.firstChild.value===bo}(h)||Cb(t,y,S,h))&&bb(e,c,b,h),h=h.parent}}},t),O=h=new Tm(c.context||e.root_name,11)
if(T.parse(u,c.format),x&&v.length&&(c.context?c.invalid=!0:function(e){for(var n=wb("tr,td,th,tbody,thead,tfoot,table"),r=t.getNonEmptyElements(),o=t.getWhiteSpaceElements(),i=t.getTextBlockElements(),u=t.getSpecialElements(),c=function(e,n){if(void 0===n&&(n=e.parent),u[e.name])e.empty().remove()
else{for(var r=0,o=e.children();r<o.length;r++){var i=o[r]
t.isValidChild(n.name,i.name)||c(i,n)}e.unwrap()}},s=0;s<e.length;s++){var f=e[s],l=void 0,d=void 0,m=void 0
if(f.parent&&!f.fixed)if(i[f.name]&&"li"===f.parent.name){for(var g=f.next;g&&i[g.name];)g.name="li",g.fixed=!0,f.parent.insert(g,f.parent),g=g.next
f.unwrap()}else{var p=[f]
for(l=f.parent;l&&!t.isValidChild(l.name,f.name)&&!n[l.name];l=l.parent)p.push(l)
if(l&&p.length>1)if(t.isValidChild(l.name,f.name)){p.reverse()
for(var h=d=a(p[0].clone()),v=0;v<p.length-1;v++){t.isValidChild(h.name,p[v].name)?(m=a(p[v].clone()),h.append(m)):m=h
for(var b=p[v].firstChild;b&&b!==p[v+1];){var y=b.next
m.append(b),b=y}h=m}Cb(t,r,o,d)?l.insert(f,p[0],!0):(l.insert(d,p[0],!0),l.insert(f,d)),l=p[0],(Cb(t,r,o,l)||yb(l,"br"))&&l.empty().remove()}else c(f)
else if(f.parent){if("li"===f.name){if((g=f.prev)&&("ul"===g.name||"ol"===g.name)){g.append(f)
continue}if((g=f.next)&&("ul"===g.name||"ol"===g.name)){g.insert(f,g.firstChild,!0)
continue}f.wrap(a(new Tm("ul",1)))
continue}t.isValidChild(f.parent.name,"div")&&t.isValidChild("div",f.name)?f.wrap(a(new Tm("div",1))):c(f)}}}}(v)),w&&("body"===O.name||c.isRootContent)&&function(){var n=O.firstChild,r=null,o=function(e){e&&((n=e.firstChild)&&3===n.type&&(n.value=n.value.replace(k,"")),(n=e.lastChild)&&3===n.type&&(n.value=n.value.replace(N,"")))}
if(t.isValidChild(O.name,w.toLowerCase())){for(;n;){var i=n.next
3===n.type||1===n.type&&"p"!==n.name&&!b[n.name]&&!n.attr("data-mce-type")?(r||((r=R(w,1)).attr(e.forced_root_block_attrs),O.insert(r,n)),r.append(n)):(o(r),r=null),n=i}o(r)}}(),!c.invalid){for(p in o)if(be(o,p)){for(g=n[p],d=(s=o[p]).length;d--;)s[d].parent||s.splice(d,1)
for(f=0,l=g.length;f<l;f++)g[f](s,p,c)}for(f=0,l=r.length;f<l;f++)if((g=r[f]).name in i){for(d=(s=i[g.name]).length;d--;)s[d].parent||s.splice(d,1)
for(d=0,m=g.callbacks.length;d<m;d++)g.callbacks[d](s,g.name,c)}}return O}}
return function(e,t){var n=e.schema
t.remove_trailing_brs&&e.addNodeFilter("br",(function(e,r,o){var i,a,u,c,s,f,l,d,m=e.length,g=Et.extend({},n.getBlockElements()),p=n.getNonEmptyElements(),h=n.getWhiteSpaceElements()
for(g.body=1,i=0;i<m;i++)if(u=(a=e[i]).parent,g[a.parent.name]&&a===u.lastChild){for(s=a.prev;s;){if("span"!==(f=s.name)||"bookmark"!==s.attr("data-mce-type")){"br"===f&&(a=null)
break}s=s.prev}a&&(a.remove(),Cb(n,p,h,u)&&(l=n.getElementRule(u.name))&&(l.removeEmpty?u.remove():l.paddEmpty&&bb(t,o,g,u)))}else{for(c=a;u&&u.firstChild===c&&u.lastChild===c&&(c=u,!g[u.name]);)u=u.parent
c===u&&!0!==t.padd_empty_with_br&&((d=new Tm("#text",3)).value=bo,a.replace(d))}})),e.addAttributeFilter("href",(function(e){var n,r,o=e.length
if(!t.allow_unsafe_link_target)for(;o--;){var i=e[o]
"a"===i.name&&"_blank"===i.attr("target")&&i.attr("rel",(r=void 0,r=(n=i.attr("rel"))?Et.trim(n):"",/\b(noopener)\b/g.test(r)?r:function(e){return e.split(" ").filter((function(e){return e.length>0})).concat(["noopener"]).sort().join(" ")}(r)))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href")){r=o.parent,t=o.lastChild
do{n=t.prev,r.insert(t,o),t=n}while(t)}})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(function(e){for(var t,n,r=e.length;r--;)if("ul"===(n=(t=e[r]).parent).name||"ol"===n.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t)
else{var o=new Tm("li",1)
o.attr("style","list-style-type: none"),t.wrap(o)}})),t.validate&&n.getValidClasses()&&e.addAttributeFilter("class",(function(e){for(var t=n.getValidClasses(),r=e.length;r--;){for(var o=e[r],i=o.attr("class").split(" "),a="",u=0;u<i.length;u++){var c=i[u],s=!1,f=t["*"]
f&&f[c]&&(s=!0),f=t[o.name],!s&&f&&f[c]&&(s=!0),s&&(a&&(a+=" "),a+=c)}a.length||(a=null),o.attr("class",a)}})),xb(e,t)}(u,e),function(e,t){t.inline_styles&&fb(e,t)}(u,e),u},_b=function(e,t,n){return function(e,t){return e&&e.hasEventListeners("PreProcess")&&!t.no_events}(e,n)?function(e,t,n){var r,o=e.dom,i=t.cloneNode(!0),a=document.implementation
if(a.createHTMLDocument){var u=a.createHTMLDocument("")
Et.each("BODY"===i.nodeName?i.childNodes:[i],(function(e){u.body.appendChild(u.importNode(e,!0))})),i="BODY"!==i.nodeName?u.body.firstChild:u.body,r=o.doc,o.doc=u}return function(e,t){e.fire("PreProcess",t)}(e,Ae(Ae({},n),{node:i})),r&&(o.doc=r),i}(e,t,n):t},Ab=function(e,t,n){-1===Et.inArray(t,n)&&(e.addAttributeFilter(n,(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),t.push(n))},Rb=function(e,t,n,r,o){return function(e,t,n){return!t.no_events&&e?function(e,t){return e.fire("PostProcess",t)}(e,Ae(Ae({},t),{content:n})).content:n}(e,o,function(e,t,n){return Qm(e,t).serialize(n)}(t,n,r))},Db=function(e,t){var n=["data-mce-selected"],r=t&&t.dom?t.dom:gu.DOM,o=t&&t.schema?t.schema:_i(e)
e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
var i=Eb(e,o);(function(e,t,n){e.addAttributeFilter("data-mce-tabindex",(function(e,t){for(var n=e.length;n--;){var r=e[n]
r.attr("tabindex",r.attr("data-mce-tabindex")),r.attr(t,null)}})),e.addAttributeFilter("src,href,style",(function(e,r){for(var o="data-mce-"+r,i=t.url_converter,a=t.url_converter_scope,u=e.length;u--;){var c=e[u],s=c.attr(o)
void 0!==s?(c.attr(r,s.length>0?s:null),c.attr(o,null)):(s=c.attr(r),"style"===r?s=n.serializeStyle(n.parseStyle(s),c.name):i&&(s=i.call(a,s,r,c.name)),c.attr(r,s.length>0?s:null))}})),e.addAttributeFilter("class",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("class")
r&&(r=n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),n.attr("class",r.length>0?r:null))}})),e.addAttributeFilter("data-mce-type",(function(e,t,n){for(var r=e.length;r--;){var o=e[r]
"bookmark"!==o.attr("data-mce-type")||n.cleanup||(L.from(o.firstChild).exists((function(e){return!Co(e.value)}))?o.unwrap():o.remove())}})),e.addNodeFilter("noscript",(function(e){for(var t=e.length;t--;){var n=e[t].firstChild
n&&(n.value=vi.decode(n.value))}})),e.addNodeFilter("script,style",(function(e,n){for(var r=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")},o=e.length;o--;){var i=e[o],a=i.firstChild?i.firstChild.value:""
if("script"===n){var u=i.attr("type")
u&&i.attr("type","mce-no/type"===u?null:u.replace(/^mce\-/,"")),"xhtml"===t.element_format&&a.length>0&&(i.firstChild.value="// <![CDATA[\n"+r(a)+"\n// ]]>")}else"xhtml"===t.element_format&&a.length>0&&(i.firstChild.value="\x3c!--\n"+r(a)+"\n--\x3e")}})),e.addNodeFilter("#comment",(function(e){for(var r=e.length;r--;){var o=e[r]
t.preserve_cdata&&0===o.value.indexOf("[CDATA[")?(o.name="#cdata",o.type=4,o.value=n.decode(o.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===o.value.indexOf("mce:protected ")&&(o.name="#text",o.type=3,o.raw=!0,o.value=unescape(o.value).substr(14))}})),e.addNodeFilter("xml:namespace,input",(function(e,t){for(var n=e.length;n--;){var r=e[n]
7===r.type?r.remove():1===r.type&&("input"!==t||r.attr("type")||r.attr("type","text"))}})),e.addAttributeFilter("data-mce-type",(function(t){V(t,(function(t){"format-caret"===t.attr("data-mce-type")&&(t.isEmpty(e.schema.getNonEmptyElements())?t.remove():t.unwrap())}))})),e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}))})(i,e,r)
return{schema:o,addNodeFilter:i.addNodeFilter,addAttributeFilter:i.addAttributeFilter,serialize:function(n,a){void 0===a&&(a={})
var u=Ae({format:"html"},a),c=_b(t,n,u),s=function(e,t,n){var r=xo(n.getInner?t.innerHTML:e.getOuterHTML(t))
return n.selection||vo(At.fromDom(t))?r:Et.trim(r)}(r,c,u),f=function(e,t,n){var r=n.selection?Ae({forced_root_block:!1},n):n,o=e.parse(t,r)
return function(e){var t=function(e){return e&&"br"===e.name},n=e.lastChild
if(t(n)){var r=n.prev
t(r)&&(n.remove(),r.remove())}}(o),o}(i,s,u)
return"tree"===u.format?f:Rb(t,e,o,f,u)},addRules:o.addValidElements,setRules:o.setValidElements,addTempAttr:E(Ab,i,n),getTempAttrs:S(n),getNodeFilters:i.getNodeFilters,getAttributeFilters:i.getAttributeFilters}},Tb=function(e,t){var n=Db(e,t)
return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters}},Ob=function(e,t){return void 0===t&&(t={}),function(e,t,n){return Jv(e).editor.getContent(t,n)}(e,t,t.format?t.format:"html")},Bb=function(e,t,n){return void 0===n&&(n={}),function(e,t,n){return Jv(e).editor.setContent(t,n)}(e,t,n)},Pb=gu.DOM,Lb=function(e){return L.from(e).each((function(e){return e.destroy()}))},Ib=function(e){if(!e.removed){var t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement()
r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&Pb.remove(o.nextSibling),function(e){e.fire("remove")}(e),e.editorManager.remove(e),!e.inline&&r&&function(e){Pb.setStyle(e.id,"display",e.orgDisplay)}(e),function(e){e.fire("detach")}(e),Pb.remove(e.getContainer()),Lb(t),Lb(n),e.destroy()}},Mb=function(e,t){var n=e.selection,r=e.dom
e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),Lb(n),Lb(r)),function(e){var t=e.formElement
t&&(t._mceOldSubmit&&(t.submit=t._mceOldSubmit,t._mceOldSubmit=null),Pb.unbind(t,"submit reset",e.formEventDelegate))}(e),function(e){e.contentAreaContainer=e.formElement=e.container=e.editorContainer=null,e.bodyElement=e.contentDocument=e.contentWindow=null,e.iframeElement=e.targetElm=null,e.selection&&(e.selection=e.selection.win=e.selection.dom=e.selection.dom.doc=null)}(e),e.destroyed=!0):e.remove())},Fb=(ob=function(e,t){return l(e)&&l(t)?Fb(e,t):t},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var o=e[r]
for(var i in o)be(o,i)&&(n[i]=ob(n[i],o[i]))}return n}),Ub="autoresize_on_init,content_editable_state,convert_fonts_to_spans,inline_styles,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","),zb="bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),Hb="imagetools,toc".split(","),jb=function(e){var t=W(Ub,(function(t){return be(e,t)})),n=e.forced_root_block
return!1!==n&&""!==n||t.push("forced_root_block (false only)"),ne(t)},Vb=function(e){var t=Et.makeMap(e.plugins," "),n=function(e){return be(t,e)},r=Re(Re([],W(zb,n),!0),Q(Hb,(function(e){return n(e)?[e+" (moving to premium)"]:[]})),!0)
return ne(r)},qb=dt().deviceType,$b=qb.isTouch(),Wb=qb.isPhone(),Kb=qb.isTablet(),Xb=["lists","autolink","autosave"],Yb={table_grid:!1,object_resizing:!1,resize:!1},Gb=function(e){var t=d(e)?e.join(" "):e,n=j(f(t)?t.split(" "):[],Fe)
return W(n,(function(e){return e.length>0}))},Jb=function(e,t){var n,r,o=(r={},ge(t,(function(t,n){return z(e,n)}),me(n={}),me(r)),{t:n,f:r})
return function(e,t){return{sections:S(e),settings:S(t)}}(o.t,o.f)},Qb=function(e,t){return be(e.sections(),t)},Zb=function(e,t){return ve(e,"toolbar_mode").orThunk((function(){return ve(e,"toolbar_drawer").map((function(e){return!1===e?"wrap":e}))})).getOr(t)},ey=function(e,t){var n={resize:!1,toolbar_mode:Zb(e,"scrolling"),toolbar_sticky:!1}
return Ae(Ae(Ae({},Yb),n),t?{menubar:!1}:{})},ty=function(e,t){var n=t.external_plugins?t.external_plugins:{}
return e&&e.external_plugins?Et.extend({},e.external_plugins,n):n},ny=function(e,t,n,r){return e&&function(e,t,n){var r=e.sections()
return Qb(e,t)&&r[t].theme===n}(t,"mobile","mobile")?W(r,E(z,Xb)):e&&Qb(t,"mobile")?r:n},ry=function(e,t,n,r){var o=Gb(n.forced_plugins),i=Gb(r.plugins),a=function(e,t){return Qb(e,t)?e.sections()[t]:{}}(t,"mobile"),u=a.plugins?Gb(a.plugins):i,c=function(e,t){return[].concat(Gb(e)).concat(Gb(t))}(o,ny(e,t,i,u))
if(xt.browser.isIE()&&z(c,"rtc"))throw new Error("RTC plugin is not supported on IE 11.")
return Et.extend(r,{plugins:c.join(" ")})},oy=function(e,t,n,r,o){var i=e?{mobile:ey(o.mobile||{},t)}:{},a=Jb(["mobile"],Fb(i,o)),u=Et.extend(n,r,a.settings(),function(e,t){return e&&Qb(t,"mobile")}(e,a)?function(e,t,n){void 0===n&&(n={})
var r=e.sections(),o=ve(r,t).getOr({})
return Et.extend({},n,o)}(a,"mobile"):{},{validate:!0,external_plugins:ty(r,a.settings())})
return ry(e,a,r,u)},iy=function(e,t,n,r,o){var i=function(e,t,n,r,o){var i={id:t,theme:"silver",toolbar_mode:Zb(e,"floating"),plugins:"",document_base_url:n,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,inline_styles:!0,convert_fonts_to_spans:!0,indent:!0,indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:o.convertURL,url_converter_scope:o}
return Ae(Ae({},i),r?Yb:{})}(o,t,n,$b,e),a=oy(Wb||Kb,Wb,i,r,o)
return!1!==a.deprecation_warnings&&function(e,t){var n=jb(e),r=Vb(t),o=r.length>0,i=n.length>0,a="mobile"===t.theme
if(o||i||a){var u="\n- ",c=a?"\n\nThemes:\n- mobile":"",s=o?"\n\nPlugins:\n- "+r.join(u):"",f=i?"\n\nSettings:\n- "+n.join(u):""
console.warn("The following deprecated features are currently enabled, these will be removed in TinyMCE 6.0. See https://www.tiny.cloud/docs/release-notes/6.0-upcoming-changes/ for more information."+c+s+f)}}(o,a),a},ay=function(e,t,n){return L.from(t.settings[n]).filter(e)},uy=function(e,t,n,r){var o,i=t in e.settings?e.settings[t]:n
return"hash"===r?function(e){var t={}
return"string"==typeof e?V(e.indexOf("=")>0?e.split(/[;,](?![^=;,]*(?:[;,]|$))/):e.split(","),(function(e){var n=e.split("=")
n.length>1?t[Et.trim(n[0])]=Et.trim(n[1]):t[Et.trim(n[0])]=Et.trim(n[0])})):t=e,t}(i):"string"===r?ay(f,e,t).getOr(n):"number"===r?ay(y,e,t).getOr(n):"boolean"===r?ay(g,e,t).getOr(n):"object"===r?ay(l,e,t).getOr(n):"array"===r?ay(d,e,t).getOr(n):"string[]"===r?ay((o=f,function(e){return d(e)&&Z(e,o)}),e,t).getOr(n):"function"===r?ay(b,e,t).getOr(n):i},cy=(ib={},{add:function(e,t){ib[e]=t},get:function(e){return ib[e]?ib[e]:{icons:{}}},has:function(e){return be(ib,e)}}),sy=function(e,t){return t.dom[e]},fy=function(e,t){return parseInt(rr(t,e),10)},ly=E(sy,"clientWidth"),dy=E(sy,"clientHeight"),my=E(fy,"margin-top"),gy=E(fy,"margin-left"),py=function(e,t,n){var r,o=At.fromDom(e.getBody()),i=e.inline?o:(r=o,At.fromDom(Vt(r).dom.documentElement)),a=function(e,t,n,r){var o=function(e){return e.dom.getBoundingClientRect()}(t)
return{x:n-(e?o.left+t.dom.clientLeft+gy(t):0),y:r-(e?o.top+t.dom.clientTop+my(t):0)}}(e.inline,i,t,n)
return function(e,t,n){var r=ly(e),o=dy(e)
return t>=0&&n>=0&&t<=r&&n<=o}(i,a.x,a.y)},hy=function(e){var t,n=e.inline?e.getBody():e.getContentAreaContainer()
return(t=n,L.from(t).map(At.fromDom)).map(vn).getOr(!1)},vy=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getNotificationManagerImpl?n.getNotificationManagerImpl():{open:t=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:t,reposition:t,getArgs:t}},r=function(){return L.from(t[0])},o=function(){t.length>0&&n().reposition(t)},i=function(e){J(t,(function(t){return t===e})).each((function(e){t.splice(e,1)}))},a=function(a,u){if(void 0===u&&(u=!0),!e.removed&&hy(e))return u&&e.fire("BeforeOpenNotification",{notification:a}),G(t,(function(e){return t=n().getArgs(e),r=a,!(t.type!==r.type||t.text!==r.text||t.progressBar||t.timeout||r.progressBar||r.timeout)
var t,r})).getOrThunk((function(){e.editorManager.setActive(e)
var u=n().open(a,(function(){i(u),o(),r().fold((function(){return e.focus()}),(function(e){return At.fromDom(e.getEl()).dom.focus()}))}))
return function(e){t.push(e)}(u),o(),e.fire("OpenNotification",{notification:Ae({},u)}),u}))},u=S(t)
return function(e){e.on("SkinLoaded",(function(){var t=function(e){return e.getParam("service_message")}(e)
t&&a({text:t,type:"warning",timeout:0},!1),o()})),e.on("show ResizeEditor ResizeWindow NodeChange",(function(){no.requestAnimationFrame(o)})),e.on("remove",(function(){V(t.slice(),(function(e){n().close(e)}))}))}(e),{open:a,close:function(){r().each((function(e){n().close(e),i(e),o()}))},getNotifications:u}},by=ku.PluginManager,yy=ku.ThemeManager
var Cy=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getWindowManagerImpl?n.getWindowManagerImpl():{open:t=function(){throw new Error("Theme did not provide a WindowManager implementation.")},openUrl:t,alert:t,confirm:t,close:t,getParams:t,setParams:t}},r=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t?t.apply(e,n):void 0}},o=function(n){t.push(n),function(t){e.fire("OpenWindow",{dialog:t})}(n)},i=function(n){(function(t){e.fire("CloseWindow",{dialog:t})})(n),0===(t=W(t,(function(e){return e!==n}))).length&&e.focus()},a=function(t){e.editorManager.setActive(e),im(e)
var n=t()
return o(n),n}
return e.on("remove",(function(){V(t,(function(e){n().close(e)}))})),{open:function(e,t){return a((function(){return n().open(e,t,i)}))},openUrl:function(e){return a((function(){return n().openUrl(e,i)}))},alert:function(e,t,o){var i=n()
i.alert(e,r(o||i,t))},confirm:function(e,t,o){var i=n()
i.confirm(e,r(o||i,t))},close:function(){L.from(t[t.length-1]).each((function(e){n().close(e),i(e)}))}}},xy=function(e,t){e.notificationManager.open({type:"error",text:t})},wy=function(e,t){e._skinLoaded?xy(e,t):e.on("SkinLoaded",(function(){xy(e,t)}))},Sy=function(e,t,n){ed(e,t,{message:n}),console.error(n)},ky=function(e,t,n){return n?"Failed to load "+e+": "+n+" from url "+t:"Failed to load "+e+" url: "+t},Ny=function(e,t,n){Sy(e,"PluginLoadError",ky("plugin",t,n))},Ey=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=window.console
r&&(r.error?r.error.apply(r,Re([e],t,!1)):r.log.apply(r,Re([e],t,!1)))},_y=function(e){return Ay(e,function(e){var t=e.getParam("content_css")
return f(t)?j(t.split(","),Fe):d(t)?t:!1===t||e.inline?[]:["default"]}(e))},Ay=function(e,t){var n=e.editorManager.baseURL+"/skins/content",r="content"+e.editorManager.suffix+".css",o=!0===e.inline
return j(t,(function(t){return function(e){return/^[a-z0-9\-]+$/i.test(e)}(t)&&!o?n+"/"+t+"/"+r:e.documentBaseURI.toAbsolute(t)}))},Ry=function(e){e.contentCSS=e.contentCSS.concat(_y(e),function(e){return Ay(e,ms(e))}(e))},Dy=function(){var e={},t=function(e,t){return{status:e,resultUri:t}},n=function(t){return t in e}
return{hasBlobUri:n,getResultUri:function(t){var n=e[t]
return n?n.resultUri:null},isPending:function(t){return!!n(t)&&1===e[t].status},isUploaded:function(t){return!!n(t)&&2===e[t].status},markPending:function(n){e[n]=t(1,null)},markUploaded:function(n,r){e[n]=t(2,r)},removeFailed:function(t){delete e[t]},destroy:function(){e={}}}},Ty=0,Oy=function(e){return e+Ty+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t())
var t},By=function(e,t){var n={},r=function(e,n,r,o){var i=new XMLHttpRequest
i.open("POST",t.url),i.withCredentials=t.credentials,i.upload.onprogress=function(e){o(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){if(i.status<200||i.status>=300)r("HTTP Error: "+i.status)
else{var e,o,a=JSON.parse(i.responseText)
if(a&&"string"==typeof a.location)n((e=t.basePath,o=a.location,e?e.replace(/\/$/,"")+"/"+o.replace(/^\//,""):o))
else r("Invalid JSON: "+i.responseText)}}
var a=new FormData
a.append("file",e.blob(),e.filename()),i.send(a)},o=function(e,t){return{url:t,blobInfo:e,status:!0}},i=function(e,t,n){return{url:"",blobInfo:e,status:!1,error:{message:t,options:n}}},a=function(e,t){Et.each(n[e],(function(e){e(t)})),delete n[e]},u=function(r,u){return r=Et.grep(r,(function(t){return!e.isUploaded(t.blobUri())})),Qr.all(Et.map(r,(function(r){return e.isPending(r.blobUri())?function(e){var t=e.blobUri()
return new Qr((function(e){n[t]=n[t]||[],n[t].push(e)}))}(r):function(t,n,r){return e.markPending(t.blobUri()),new Qr((function(u){var c
try{var s=function(){c&&c.close()}
n(t,(function(n){s(),e.markUploaded(t.blobUri(),n),a(t.blobUri(),o(t,n)),u(o(t,n))}),(function(n,r){var o=r||{}
s(),e.removeFailed(t.blobUri()),a(t.blobUri(),i(t,n,o)),u(i(t,n,o))}),(function(e){e<0||e>100||L.from(c).orThunk((function(){return L.from(r).map(A)})).each((function(t){c=t,t.progressBar.value(e)}))}))}catch(f){u(i(t,f.message,{}))}}))}(r,t.handler,u)})))}
return!1===b(t.handler)&&(t.handler=r),{upload:function(e,n){return t.url||t.handler!==r?u(e,n):new Qr((function(e){e([])}))}}},Py=function(e){return function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})}},Ly=function(e,t){return By(t,{url:is(e),basePath:as(e),credentials:us(e),handler:cs(e)})},Iy=function(e){var t,n,r=function(){var e=[],t=function(e){if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
var t,n=e.id||Oy("blobid"),r=e.name||n,o=e.blob
return{id:S(n),name:S(r),filename:S(e.filename||r+"."+(t=o.type,{"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png","image/apng":"apng","image/avif":"avif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff"}[t.toLowerCase()]||"dat")),blob:S(o),base64:S(e.base64),blobUri:S(e.blobUri||URL.createObjectURL(o)),uri:S(e.uri)}},n=function(t){return G(e,t).getOrUndefined()},r=function(e){return n((function(t){return t.id()===e}))}
return{create:function(e,n,r,o,i){if(f(e))return t({id:e,name:o,filename:i,blob:n,base64:r})
if(l(e))return t(e)
throw new Error("Unknown input type")},add:function(t){r(t.id())||e.push(t)},get:r,getByUri:function(e){return n((function(t){return t.blobUri()===e}))},getByData:function(e,t){return n((function(n){return n.base64()===e&&n.blob().type===t}))},findFirst:n,removeByUri:function(t){e=W(e,(function(e){return e.blobUri()!==t||(URL.revokeObjectURL(e.blobUri()),!1)}))},destroy:function(){V(e,(function(e){URL.revokeObjectURL(e.blobUri())})),e=[]}}}(),o=Dy(),i=[],a=function(e){var t=yu(null)
return e.on("change AddUndo",(function(e){t.set(Ae({},e.level))})),{fireIfChanged:function(){var n=e.undoManager.data
ie(n).filter((function(e){return!qv(t.get(),e)})).each((function(t){e.setDirty(!0),e.fire("change",{level:t,lastLevel:re(n,n.length-2).getOrNull()})}))}}}(e),u=function(t){return function(n){return e.selection?t(n):[]}},c=function(e,t,n){var r=0
do{-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1)}while(-1!==r)
return e},s=function(e,t,n){var r='src="'+n+'"'+(n===xt.transparentSrc?' data-mce-placeholder="1"':"")
return e=c(e,'src="'+t+'"',r),e=c(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},d=function(t,n){V(e.undoManager.data,(function(e){"fragmented"===e.type?e.fragments=j(e.fragments,(function(e){return s(e,t,n)})):e.content=s(e.content,t,n)}))},m=function(n){return t||(t=Ly(e,o)),h().then(u((function(o){var i=j(o,(function(e){return e.blobInfo}))
return t.upload(i,Py(e)).then(u((function(t){var i=[],u=j(t,(function(t,n){var a=o[n].blobInfo,u=o[n].image
return t.status&&function(e){return e.getParam("images_replace_blob_uris",!0,"boolean")}(e)?(r.removeByUri(u.src),Yv(e)||function(t,n){var r,o=e.convertURL(n,"src")
d(t.src,n),e.$(t).attr({src:rs(e)?(r=n,r+(-1===r.indexOf("?")?"?":"&")+(new Date).getTime()):n,"data-mce-src":o})}(u,t.url)):t.error&&(t.error.options.remove&&(d(u.getAttribute("src"),xt.transparentSrc),i.push(u)),function(e,t){wy(e,Su.translate(["Failed to upload image: {0}",t]))}(e,t.error.message)),{element:u,status:t.status,uploadUri:t.url,blobInfo:a}}))
return u.length>0&&a.fireIfChanged(),i.length>0&&(Yv(e)?console.error("Removing images on failed uploads is currently unsupported for RTC"):e.undoManager.transact((function(){V(i,(function(t){e.dom.remove(t),r.removeByUri(t.src)}))}))),n&&n(u),u})))})))},g=function(t){if(ns(e))return m(t)},p=function(t){return!1!==Z(i,(function(e){return e(t)}))&&(0!==t.getAttribute("src").indexOf("data:")||function(e){return e.getParam("images_dataimg_filter",T,"function")}(e)(t))},h=function(){return n||(n=vb(o,r)),n.findAll(e.getBody(),p).then(u((function(t){return t=W(t,(function(t){return"string"!=typeof t||(wy(e,t),!1)})),Yv(e)||V(t,(function(e){d(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),t})))},v=function(t){return t.replace(/src="(blob:[^"]+)"/g,(function(t,n){var i=o.getResultUri(n)
if(i)return'src="'+i+'"'
var a=r.getByUri(n)
return a||(a=X(e.editorManager.get(),(function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)}),null)),a?'src="data:'+a.blob().type+";base64,"+a.base64()+'"':t}))}
return e.on("SetContent",(function(){ns(e)?g():h()})),e.on("RawSaveContent",(function(e){e.content=v(e.content)})),e.on("GetContent",(function(e){e.source_view||"raw"===e.format||"tree"===e.format||(e.content=v(e.content))})),e.on("PostRender",(function(){e.parser.addNodeFilter("img",(function(e){V(e,(function(e){var t=e.attr("src")
if(!r.getByUri(t)){var n=o.getResultUri(t)
n&&e.attr("src",n)}}))}))})),{blobCache:r,addFilter:function(e){i.push(e)},uploadImages:m,uploadImagesAuto:g,scanForImages:h,destroy:function(){r.destroy(),o.destroy(),n=t=null}}},My=function(e){var t={},n=function(e,r){e&&(f(e)?(d(r)||(r=[r]),V(r,(function(e){p(e.deep)&&(e.deep=!ml(e)),p(e.split)&&(e.split=!ml(e)||gl(e)),p(e.remove)&&ml(e)&&!gl(e)&&(e.remove="none"),ml(e)&&gl(e)&&(e.mixed=!0,e.block_expand=!0),f(e.classes)&&(e.classes=e.classes.split(/\s+/))})),t[e]=r):fe(e,(function(e,t){n(t,e)})))}
return n(function(e){var t={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table,audio,video",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table,audio,video",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all",preserve_attributes:["class","style"]},{inline:"s",remove:"all",preserve_attributes:["class","style"]}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",defaultBlock:"p",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(e,t,n){return Rn(e)&&e.hasAttribute("href")},onformat:function(t,n,r){Et.each(r,(function(n,r){e.setAttrib(t,r,n)}))}},lang:{inline:"span",clear_child_styles:!0,remove_similar:!0,attributes:{lang:"%value","data-mce-lang":function(e){var t
return null!==(t=null==e?void 0:e.customValue)&&void 0!==t?t:null}}},removeformat:[{selector:"b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}
return Et.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/),(function(e){t[e]={block:e,remove:"all"}})),t}(e.dom)),n(function(e){return e.getParam("formats")}(e)),{get:function(e){return v(e)?t[e]:t},has:function(e){return be(t,e)},register:n,unregister:function(e){return e&&t[e]&&delete t[e],t}}},Fy=Et.each,Uy=gu.DOM,zy=function(e,t){var n,r,o,i=t&&t.schema||_i({}),a=function(e){r="string"==typeof e?{name:e,classes:[],attrs:{}}:e
var t=Uy.create(r.name)
return function(e,t){t.classes.length&&Uy.addClass(e,t.classes.join(" ")),Uy.setAttribs(e,t.attrs)}(t,r),t},u=function(e,t,n){var r,o,c=t.length>0&&t[0],s=c&&c.name,f=function(e,t){var n="string"!=typeof e?e.nodeName.toLowerCase():e,r=i.getElementRule(n),o=r&&r.parentsRequired
return!(!o||!o.length)&&(t&&-1!==Et.inArray(o,t)?t:o[0])}(e,s)
if(f)s===f?(o=t[0],t=t.slice(1)):o=f
else if(c)o=t[0],t=t.slice(1)
else if(!n)return e
return o&&(r=a(o)).appendChild(e),n&&(r||(r=Uy.create("div")).appendChild(e),Et.each(n,(function(t){var n=a(t)
r.insertBefore(n,e)}))),u(r,t,o&&o.siblings)}
return e&&e.length?(r=e[0],n=a(r),(o=Uy.create("div")).appendChild(u(n,e.slice(1),r.siblings)),o):""},Hy=function(e){var t,n={classes:[],attrs:{}}
return"*"!==(e=n.selector=Et.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,(function(e,t,r,o,i){switch(t){case"#":n.attrs.id=r
break
case".":n.classes.push(r)
break
case":":-1!==Et.inArray("checked disabled enabled read-only required".split(" "),r)&&(n.attrs[r]=r)}if("["===o){var a=i.match(/([\w\-]+)(?:\=\"([^\"]+))?/)
a&&(n.attrs[a[1]]=a[2])}return""}))),n.name=t||"div",n},jy=function(e,t){var n,r,o,i="",a=function(e){var t=e.getParam("preview_styles","font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow")
return f(t)?t:""}(e)
if(""===a)return""
var u=function(e){return e.replace(/%(\w+)/g,"")}
if("string"==typeof t){if(!(t=e.formatter.get(t)))return
t=t[0]}if("preview"in t){var c=ve(t,"preview")
if(Kn(c,!1))return""
a=c.getOr(a)}n=t.block||t.inline||"span"
var s,l=(s=t.selector)&&"string"==typeof s?(s=(s=s.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Et.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/),(function(e){var t=Et.map(e.split(/(?:~\+|~|\+)/),Hy),n=t.pop()
return t.length&&(n.siblings=t),n})).reverse()):[]
l.length?(l[0].name||(l[0].name=n),n=t.selector,r=zy(l,e)):r=zy([n],e)
var d=Uy.select(n,r)[0]||r.firstChild
return Fy(t.styles,(function(e,t){var n=u(e)
n&&Uy.setStyle(d,t,n)})),Fy(t.attributes,(function(e,t){var n=u(e)
n&&Uy.setAttrib(d,t,n)})),Fy(t.classes,(function(e){var t=u(e)
Uy.hasClass(d,t)||Uy.addClass(d,t)})),e.fire("PreviewFormats"),Uy.setStyles(r,{position:"absolute",left:-65535}),e.getBody().appendChild(r),o=Uy.getStyle(e.getBody(),"fontSize",!0),o=/px$/.test(o)?parseInt(o,10):0,Fy(a.split(" "),(function(t){var n=Uy.getStyle(d,t,!0)
if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=Uy.getStyle(e.getBody(),t,!0),"#ffffff"===Uy.toHex(n).toLowerCase())||"color"===t&&"#000000"===Uy.toHex(n).toLowerCase())){if("font-size"===t&&/em|%$/.test(n)){if(0===o)return
n=parseFloat(n)/(/%$/.test(n)?100:1)*o+"px"}"border"===t&&n&&(i+="padding:0 2px;"),i+=t+":"+n+";"}})),e.fire("AfterPreviewFormats"),Uy.remove(r),i},Vy=function(e){var t=My(e),n=yu(null)
return function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t])
e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])}(e),Dh(e),{get:t.get,has:t.has,register:t.register,unregister:t.unregister,apply:function(t,n,r){(function(e,t,n,r){Qv(e).formatter.apply(t,n,r)})(e,t,n,r)},remove:function(t,n,r,o){(function(e,t,n,r,o){Qv(e).formatter.remove(t,n,r,o)})(e,t,n,r,o)},toggle:function(t,n,r){(function(e,t,n,r){Qv(e).formatter.toggle(t,n,r)})(e,t,n,r)},match:function(t,n,r,o){return function(e,t,n,r,o){return Qv(e).formatter.match(t,n,r,o)}(e,t,n,r,o)},closest:function(t){return function(e,t){return Qv(e).formatter.closest(t)}(e,t)},matchAll:function(t,n){return function(e,t,n){return Qv(e).formatter.matchAll(t,n)}(e,t,n)},matchNode:function(t,n,r,o){return function(e,t,n,r,o){return Qv(e).formatter.matchNode(t,n,r,o)}(e,t,n,r,o)},canApply:function(t){return function(e,t){return Qv(e).formatter.canApply(t)}(e,t)},formatChanged:function(t,r,o,i){return function(e,t,n,r,o,i){return Qv(e).formatter.formatChanged(t,n,r,o,i)}(e,n,t,r,o,i)},getCssText:E(jy,e)}},qy=function(e){switch(e.toLowerCase()){case"undo":case"redo":case"mcerepaint":case"mcefocus":return!0
default:return!1}},$y=function(e){var t=Nu(),n=yu(0),r=yu(0),o={data:[],typing:!1,beforeChange:function(){(function(e,t,n){Qv(e).undoManager.beforeChange(t,n)})(e,n,t)},add:function(i,a){return function(e,t,n,r,o,i,a){return Qv(e).undoManager.add(t,n,r,o,i,a)}(e,o,r,n,t,i,a)},undo:function(){return function(e,t,n,r){return Qv(e).undoManager.undo(t,n,r)}(e,o,n,r)},redo:function(){return function(e,t,n){return Qv(e).undoManager.redo(t,n)}(e,r,o.data)},clear:function(){(function(e,t,n){Qv(e).undoManager.clear(t,n)})(e,o,r)},reset:function(){(function(e,t){Qv(e).undoManager.reset(t)})(e,o)},hasUndo:function(){return function(e,t,n){return Qv(e).undoManager.hasUndo(t,n)}(e,o,r)},hasRedo:function(){return function(e,t,n){return Qv(e).undoManager.hasRedo(t,n)}(e,o,r)},transact:function(t){return function(e,t,n,r){return Qv(e).undoManager.transact(t,n,r)}(e,o,n,t)},ignore:function(t){(function(e,t,n){Qv(e).undoManager.ignore(t,n)})(e,n,t)},extra:function(t,n){(function(e,t,n,r,o){Qv(e).undoManager.extra(t,n,r,o)})(e,o,r,t,n)}}
return Yv(e)||function(e,t,n){var r=yu(!1),o=function(e){Wv(t,!1,n),t.add({},e)}
e.on("init",(function(){t.add()})),e.on("BeforeExecCommand",(function(e){var r=e.command
qy(r)||(Kv(t,n),t.beforeChange())})),e.on("ExecCommand",(function(e){var t=e.command
qy(t)||o(e)})),e.on("ObjectResizeStart cut",(function(){t.beforeChange()})),e.on("SaveContent ObjectResized blur",o),e.on("dragend",o),e.on("keyup",(function(n){var i=n.keyCode
n.isDefaultPrevented()||((i>=33&&i<=36||i>=37&&i<=40||45===i||n.ctrlKey)&&(o(),e.nodeChanged()),46!==i&&8!==i||e.nodeChanged(),r.get()&&t.typing&&!1===qv(zv(e),t.data[0])&&(!1===e.isDirty()&&(e.setDirty(!0),e.fire("change",{level:t.data[0],lastLevel:null})),e.fire("TypingUndo"),r.set(!1),e.nodeChanged()))})),e.on("keydown",(function(e){var i=e.keyCode
if(!e.isDefaultPrevented())if(i>=33&&i<=36||i>=37&&i<=40||45===i)t.typing&&o(e)
else{var a=e.ctrlKey&&!e.altKey||e.metaKey
!(i<16||i>20)||224===i||91===i||t.typing||a||(t.beforeChange(),Wv(t,!0,n),t.add({},e),r.set(!0))}})),e.on("mousedown",(function(e){t.typing&&o(e)})),e.on("input",(function(e){var t
e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(t=e).inputType&&null===t.data||function(e){return"insertFromPaste"===e.inputType||"insertFromDrop"===e.inputType}(e))&&o(e)})),e.on("AddUndo Undo Redo ClearUndos",(function(t){t.isDefaultPrevented()||e.nodeChanged()}))}(e,o,n),function(e){e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo")}(e),o},Wy=[9,27,rd.HOME,rd.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,rd.DOWN,rd.UP,rd.LEFT,rd.RIGHT].concat(xt.browser.isFirefox()?[224]:[]),Ky="data-mce-placeholder",Xy=function(e){return"keydown"===e.type||"keyup"===e.type},Yy=function(e){var t=e.keyCode
return t===rd.BACKSPACE||t===rd.DELETE},Gy=function(e){var t=e.dom,n=es(e),r=function(e){return e.getParam("placeholder",Jc.getAttrib(e.getElement(),"placeholder"),"string")}(e),o=function(i,a){if(!function(e){if(Xy(e)){var t=e.keyCode
return!Yy(e)&&(rd.metaKeyPressed(e)||e.altKey||t>=112&&t<=123||z(Wy,t))}return!1}(i)){var u=e.getBody(),c=!function(e){return Xy(e)&&!(Yy(e)||"keyup"===e.type&&229===e.keyCode)}(i)&&function(e,t,n){if(Zo(At.fromDom(t),!1)){var r=""===n,o=t.firstElementChild
return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&(r?!e.isBlock(o):n===o.nodeName.toLowerCase())}return!1}(t,u,n);(""!==t.getAttrib(u,Ky)!==c||a)&&(t.setAttrib(u,Ky,c?r:null),t.setAttrib(u,"aria-placeholder",c?r:null),function(e,t){e.fire("PlaceholderToggle",{state:t})}(e,c),e.on(c?"keydown":"keyup",o),e.off(c?"keyup":"keydown",o))}}
r&&e.on("init",(function(t){o(t,!0),e.on("change SetContent ExecCommand",o),e.on("paste",(function(t){return no.setEditorTimeout(e,(function(){return o(t)}))}))}))},Jy=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,Qy=function(e,t){return Dt(At.fromDom(t),function(e){return e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string")}(e))},Zy=function(e){return"rtl"===gu.DOM.getStyle(e,"direction",!0)||(t=e.textContent,Jy.test(t))
var t},eC=function(e,t,n){var r=function(e,t,n){return W(gu.DOM.getParents(n.container(),"*",t),e)}(e,t,n)
return L.from(r[r.length-1])},tC=function(e,t){if(!t)return t
var n=t.container(),r=t.offset()
return e?No(n)?Mn(n.nextSibling)?_c(n.nextSibling,0):_c.after(n):Ao(t)?_c(n,r+1):t:No(n)?Mn(n.previousSibling)?_c(n.previousSibling,n.previousSibling.data.length):_c.before(n):Ro(t)?_c(n,r-1):t},nC=E(tC,!0),rC=E(tC,!1),oC=function(e){return lo(e)||go(e)},iC=function(e,t){return Pt(e,t)?Kr(t,oC,function(e){return function(t){return Ot(e,At.fromDom(t.dom.parentNode))}}(e)):L.none()},aC=function(e){e.dom.isEmpty(e.getBody())&&(e.setContent(""),function(e){var t=e.getBody(),n=t.firstChild&&e.dom.isBlock(t.firstChild)?t.firstChild:t
e.selection.setCursorLocation(n,0)}(e))},uC=function(e,t){return{from:e,to:t}},cC=function(e,t){var n=At.fromDom(e),r=At.fromDom(t.container())
return iC(n,r).map((function(e){return function(e,t){return{block:e,position:t}}(e,t)}))},sC=function(e,t,n){var r=cC(e,_c.fromRangeStart(n)),o=r.bind((function(n){return Af(t,e,n.position).bind((function(n){return cC(e,n).map((function(n){return function(e,t,n){return Hn(n.position.getNode())&&!1===Zo(n.block)?Tf(!1,n.block.dom).bind((function(r){return r.isEqual(n.position)?Af(t,e,r).bind((function(t){return cC(e,t)})):L.some(n)})).getOr(n):n}(e,t,n)}))}))}))
return Xn(r,o,uC).filter((function(e){return function(e){return!1===Ot(e.from.block,e.to.block)}(e)&&function(e){return $t(e.from.block).bind((function(t){return $t(e.to.block).filter((function(e){return Ot(t,e)}))})).isSome()}(e)&&function(e){return!1===qn(e.from.block.dom)&&!1===qn(e.to.block.dom)}(e)}))},fC=function(e){var t=Gt(e)
return J(t,co).fold(S(t),(function(e){return t.slice(0,e)}))},lC=function(e){var t=fC(e)
return V(t,pn),t},dC=function(e,t){var n=kg(t,e)
return G(n.reverse(),(function(e){return Zo(e)})).each(pn)},mC=function(e,t,n,r){if(Zo(n))return Cg(n),Pf(n.dom)
0===W(Xt(r),(function(e){return!Zo(e)})).length&&Zo(t)&&sn(r,At.fromTag("br"))
var o=Bf(n.dom,_c.before(r.dom))
return V(lC(t),(function(e){sn(r,e)})),dC(e,t),o},gC=function(e,t,n){if(Zo(n))return pn(n),Zo(t)&&Cg(t),Pf(t.dom)
var r=Lf(n.dom)
return V(lC(t),(function(e){dn(n,e)})),dC(e,t),r},pC=function(e,t){return Pt(t,e)?function(e,t){var n=kg(t,e)
return L.from(n[n.length-1])}(t,e):L.none()},hC=function(e,t){Tf(e,t.dom).map((function(e){return e.getNode()})).map(At.fromDom).filter(fo).each(pn)},vC=function(e,t,n){return hC(!0,t),hC(!1,n),pC(t,n).fold(E(gC,e,t,n),E(mC,e,t,n))},bC=function(e,t,n,r){return t?vC(e,r,n):vC(e,n,r)},yC=function(e,t){var n=At.fromDom(e.getBody()),r=function(e,t,n){return n.collapsed?sC(e,t,n):L.none()}(n.dom,t,e.selection.getRng()).bind((function(e){return bC(n,t,e.from.block,e.to.block)}))
return r.each((function(t){e.selection.setRng(t.toRange())})),r.isSome()},CC=function(e,t){var n=At.fromDom(t),r=E(Ot,e)
return Wr(n,ho,r).isSome()},xC=function(e,t){var n=Bf(e.dom,_c.fromRangeStart(t)).isNone(),r=Of(e.dom,_c.fromRangeEnd(t)).isNone()
return!function(e,t){return CC(e,t.startContainer)||CC(e,t.endContainer)}(e,t)&&n&&r},wC=function(e){var t=At.fromDom(e.getBody()),n=e.selection.getRng()
return xC(t,n)?function(e){return e.setContent(""),e.selection.setCursorLocation(),!0}(e):function(e,t){var n=t.getRng()
return Xn(iC(e,At.fromDom(n.startContainer)),iC(e,At.fromDom(n.endContainer)),(function(r,o){return!1===Ot(r,o)&&(n.deleteContents(),bC(e,!0,r,o).each((function(e){t.setRng(e.toRange())})),!0)})).getOr(!1)}(t,e.selection)},SC=function(e,t){return!e.selection.isCollapsed()&&wC(e)},kC=Vn,NC=qn,EC=function(e,t,n,r,o){return L.from(t._selectionOverrides.showCaret(e,n,r,o))},_C=function(e,t){return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?L.none():L.some(function(e){var t=e.ownerDocument.createRange()
return t.selectNode(e),t}(t))},AC=function(e,t,n){var r=af(1,e.getBody(),t),o=_c.fromRangeStart(r),i=o.getNode()
if(Fs(i))return EC(1,e,i,!o.isAtEnd(),!1)
var a=o.getNode(!0)
if(Fs(a))return EC(1,e,a,!1,!1)
var u=e.dom.getParent(o.getNode(),(function(e){return NC(e)||kC(e)}))
return Fs(u)?EC(1,e,u,!1,n):L.none()},RC=function(e,t,n){return t.collapsed?AC(e,t,n).getOr(t):t},DC=function(e){return vg(e)||mg(e)},TC=function(e){return bg(e)||gg(e)},OC=function(e,t,n,r,o,i){return EC(r,e,i.getNode(!o),o,!0).each((function(n){if(t.collapsed){var r=t.cloneRange()
o?r.setEnd(n.startContainer,n.startOffset):r.setStart(n.endContainer,n.endOffset),r.deleteContents()}else t.deleteContents()
e.selection.setRng(n)})),function(e,t){Mn(t)&&0===t.data.length&&e.remove(t)}(e.dom,n),!0},BC=function(e,t){return function(e,t){var n=e.selection.getRng()
if(!Mn(n.commonAncestorContainer))return!1
var r=t?Ac.Forwards:Ac.Backwards,o=Sf(e.getBody()),i=E(ff,t?o.next:o.prev),a=t?DC:TC,u=cf(r,e.getBody(),n),c=tC(t,i(u))
if(!c||!lf(u,c))return!1
if(a(c))return OC(e,n,u.getNode(),r,t,c)
var s=i(c)
return!!(s&&a(s)&&lf(c,s))&&OC(e,n,u.getNode(),r,t,s)}(e,t)},PC=Sr([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),LC=function(e,t,n,r){var o=r.getNode(!1===t)
return iC(At.fromDom(e),At.fromDom(n.getNode())).map((function(e){return Zo(e)?PC.remove(e.dom):PC.moveToElement(o)})).orThunk((function(){return L.some(PC.moveToElement(o))}))},IC=function(e,t,n){return Af(t,e,n).bind((function(r){return o=r.getNode(),ho(At.fromDom(o))||go(At.fromDom(o))||function(e,t,n,r){var o=function(t){return so(At.fromDom(t))&&!Qs(n,r,e)}
return uf(!t,n).fold((function(){return uf(t,r).fold(D,o)}),o)}(e,t,n,r)?L.none():t&&qn(r.getNode())||!1===t&&qn(r.getNode(!0))?LC(e,t,n,r):t&&bg(n)||!1===t&&vg(n)?L.some(PC.moveToPosition(r)):L.none()
var o}))},MC=function(e,t,n){return function(e,t){var n=t.getNode(!1===e),r=e?"after":"before"
return Rn(n)&&n.getAttribute("data-mce-caret")===r}(t,n)?function(e,t){return e&&qn(t.nextSibling)?L.some(PC.moveToElement(t.nextSibling)):!1===e&&qn(t.previousSibling)?L.some(PC.moveToElement(t.previousSibling)):L.none()}(t,n.getNode(!1===t)).fold((function(){return IC(e,t,n)}),L.some):IC(e,t,n).bind((function(t){return function(e,t,n){return n.fold((function(e){return L.some(PC.remove(e))}),(function(e){return L.some(PC.moveToElement(e))}),(function(n){return Qs(t,n,e)?L.none():L.some(PC.moveToPosition(n))}))}(e,n,t)}))},FC=function(e,t){return L.from(Ql(e.getBody(),t))},UC=function(e,t){var n=e.selection.getNode()
return FC(e,n).filter(qn).fold((function(){return function(e,t,n){var r=af(t?1:-1,e,n),o=_c.fromRangeStart(r),i=At.fromDom(e)
return!1===t&&bg(o)?L.some(PC.remove(o.getNode(!0))):t&&vg(o)?L.some(PC.remove(o.getNode())):!1===t&&vg(o)&&Ig(i,o)?Mg(i,o).map((function(e){return PC.remove(e.getNode())})):t&&bg(o)&&Lg(i,o)?Fg(i,o).map((function(e){return PC.remove(e.getNode())})):MC(e,t,o)}(e.getBody(),t,e.selection.getRng()).exists((function(n){return n.fold(function(e,t){return function(n){return e._selectionOverrides.hideFakeCaret(),mp(e,t,At.fromDom(n)),!0}}(e,t),function(e,t){return function(n){var r=t?_c.before(n):_c.after(n)
return e.selection.setRng(r.toRange()),!0}}(e,t),function(e){return function(t){return e.selection.setRng(t.toRange()),!0}}(e))}))}),T)},zC=function(e,t){var n=e.selection.getNode()
return!(!qn(n)||$n(n))&&FC(e,n.parentNode).filter(qn).fold((function(){var n
return n=At.fromDom(e.getBody()),V(Iu(n,".mce-offscreen-selection"),pn),mp(e,t,At.fromDom(e.selection.getNode())),aC(e),!0}),T)},HC=function(e){var t=e.dom,n=e.selection,r=Ql(e.getBody(),n.getNode())
if(Vn(r)&&t.isBlock(r)&&t.isEmpty(r)){var o=t.create("br",{"data-mce-bogus":"1"})
t.setHTML(r,""),r.appendChild(o),n.setRng(_c.before(o).toRange())}return!0},jC=function(e,t){return e.selection.isCollapsed()?UC(e,t):zC(e,t)},VC=function(e,t){return!!e.selection.isCollapsed()&&function(e,t){var n=_c.fromRangeStart(e.selection.getRng())
return Af(t,e.getBody(),n).filter((function(e){return t?lg(e):dg(e)})).bind((function(e){return L.from(Zs(t?0:-1,e))})).exists((function(t){return e.selection.select(t),!0}))}(e,t)},qC=Mn,$C=function(e){return qC(e)&&e.data[0]===yo},WC=function(e){return qC(e)&&e.data[e.data.length-1]===yo},KC=function(e){return e.ownerDocument.createTextNode(yo)},XC=function(e,t){return e?function(e){if(qC(e.previousSibling))return WC(e.previousSibling)||e.previousSibling.appendData(yo),e.previousSibling
if(qC(e))return $C(e)||e.insertData(0,yo),e
var t=KC(e)
return e.parentNode.insertBefore(t,e),t}(t):function(e){if(qC(e.nextSibling))return $C(e.nextSibling)||e.nextSibling.insertData(0,yo),e.nextSibling
if(qC(e))return WC(e)||e.appendData(yo),e
var t=KC(e)
return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t}(t)},YC=E(XC,!0),GC=E(XC,!1),JC=function(e,t){return Mn(e.container())?XC(t,e.container()):XC(t,e.getNode())},QC=function(e,t){var n=t.get()
return n&&e.container()===n&&No(n)},ZC=function(e,t){return t.fold((function(t){Ds(e.get())
var n=YC(t)
return e.set(n),L.some(_c(n,n.length-1))}),(function(t){return Pf(t).map((function(t){if(QC(t,e))return _c(e.get(),1)
Ds(e.get())
var n=JC(t,!0)
return e.set(n),_c(n,1)}))}),(function(t){return Lf(t).map((function(t){if(QC(t,e))return _c(e.get(),e.get().length-1)
Ds(e.get())
var n=JC(t,!1)
return e.set(n),_c(n,n.length-1)}))}),(function(t){Ds(e.get())
var n=GC(t)
return e.set(n),L.some(_c(n,1))}))},ex=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t)
if(r.isSome())return r}return L.none()},tx=Sr([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),nx=function(e,t){var n=Js(t,e)
return n||e},rx=function(e,t,n){var r=nC(n),o=nx(t,r.container())
return eC(e,o,r).fold((function(){return Of(o,r).bind(E(eC,e,o)).map((function(e){return tx.before(e)}))}),L.none)},ox=function(e,t){return null===Ff(e,t)},ix=function(e,t,n){return eC(e,t,n).filter(E(ox,t))},ax=function(e,t,n){var r=rC(n)
return ix(e,t,r).bind((function(e){return Bf(e,r).isNone()?L.some(tx.start(e)):L.none()}))},ux=function(e,t,n){var r=nC(n)
return ix(e,t,r).bind((function(e){return Of(e,r).isNone()?L.some(tx.end(e)):L.none()}))},cx=function(e,t,n){var r=rC(n),o=nx(t,r.container())
return eC(e,o,r).fold((function(){return Bf(o,r).bind(E(eC,e,o)).map((function(e){return tx.after(e)}))}),L.none)},sx=function(e){return!1===Zy(lx(e))},fx=function(e,t,n){return ex([rx,ax,ux,cx],[e,t,n]).filter(sx)},lx=function(e){return e.fold(k,k,k,k)},dx=function(e){return e.fold(S("before"),S("start"),S("end"),S("after"))},mx=function(e){return e.fold(tx.before,tx.before,tx.after,tx.after)},gx=function(e){return e.fold(tx.start,tx.start,tx.end,tx.end)},px=function(e,t,n,r,o,i){return Xn(eC(t,n,r),eC(t,n,o),(function(t,r){return t!==r&&function(e,t,n){var r=Js(t,e),o=Js(n,e)
return r&&r===o}(n,t,r)?tx.after(e?t:r):i})).getOr(i)},hx=function(e,t){return e.fold(T,(function(e){return r=t,!(dx(n=e)===dx(r)&&lx(n)===lx(r))
var n,r}))},vx=function(e,t){return e?t.fold(x(L.some,tx.start),L.none,x(L.some,tx.after),L.none):t.fold(L.none,x(L.some,tx.before),L.none,x(L.some,tx.end))},bx=function(e,t,n,r){var o=tC(e,r),i=fx(t,n,o)
return fx(t,n,o).bind(E(vx,e)).orThunk((function(){return function(e,t,n,r,o){var i=tC(e,o)
return Af(e,n,i).map(E(tC,e)).fold((function(){return r.map(mx)}),(function(o){return fx(t,n,o).map(E(px,e,t,n,i,o)).filter(E(hx,r))})).filter(sx)}(e,t,n,i,r)}))}
E(bx,!1),E(bx,!0)
var yx,Cx=function(e,t,n){var r=e?1:-1
return t.setRng(_c(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0},xx=function(e,t){var n=t.selection.getRng(),r=e?_c.fromRangeEnd(n):_c.fromRangeStart(n)
return!!function(e){return b(e.selection.getSel().modify)}(t)&&(e&&Ao(r)?Cx(!0,t.selection,r):!(e||!Ro(r))&&Cx(!1,t.selection,r))};(function(e){e[e.Br=0]="Br",e[e.Block=1]="Block",e[e.Wrap=2]="Wrap",e[e.Eol=3]="Eol"})(yx||(yx={}))
var wx,Sx=function(e,t){return e===Ac.Backwards?ee(t):t},kx=function(e,t,n){return e===Ac.Forwards?t.next(n):t.prev(n)},Nx=function(e,t,n,r){return Hn(r.getNode(t===Ac.Forwards))?yx.Br:!1===Qs(n,r)?yx.Block:yx.Wrap},Ex=function(e,t,n,r){for(var o=Sf(n),i=r,a=[];i;){var u=kx(t,o,i)
if(!u)break
if(Hn(u.getNode(!1)))return t===Ac.Forwards?{positions:Sx(t,a).concat([u]),breakType:yx.Br,breakAt:L.some(u)}:{positions:Sx(t,a),breakType:yx.Br,breakAt:L.some(u)}
if(u.isVisible()){if(e(i,u)){var c=Nx(0,t,i,u)
return{positions:Sx(t,a),breakType:c,breakAt:L.some(u)}}a.push(u),i=u}else i=u}return{positions:Sx(t,a),breakType:yx.Eol,breakAt:L.none()}},_x=function(e,t,n,r){return t(n,r).breakAt.map((function(r){var o=t(n,r).positions
return e===Ac.Backwards?o.concat(r):[r].concat(o)})).getOr([])},Ax=function(e,t){return X(e,(function(e,n){return e.fold((function(){return L.some(n)}),(function(r){return Xn(oe(r.getClientRects()),oe(n.getClientRects()),(function(e,o){var i=Math.abs(t-e.left)
return Math.abs(t-o.left)<=i?n:r})).or(e)}))}),L.none())},Rx=function(e,t){return oe(t.getClientRects()).bind((function(t){return Ax(e,t.left)}))},Dx=E(Ex,_c.isAbove,-1),Tx=E(Ex,_c.isBelow,1),Ox=E(_x,-1,Dx),Bx=E(_x,1,Tx),Px=function(e){var t=function(t){return j(t,(function(t){var n=Zu(t)
return n.node=e,n}))}
if(Rn(e))return t(e.getClientRects())
if(Mn(e)){var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}},Lx=function(e){return Q(e,Px)};(function(e){e[e.Up=-1]="Up",e[e.Down=1]="Down"})(wx||(wx={}))
var Ix,Mx,Fx=function(e,t,n,r,o,i){var a=0,u=[],c=function(r){var i=Lx([r]);-1===e&&(i=i.reverse())
for(var c=0;c<i.length;c++){var f=i[c]
if(!n(f,s)){if(u.length>0&&t(f,_e(u))&&a++,f.line=a,o(f))return!0
u.push(f)}}},s=_e(i.getClientRects())
if(!s)return u
var f=i.getNode()
return c(f),function(e,t,n,r){for(;r=Gs(r,e,$o,t);)if(n(r))return}(e,r,c,f),u},Ux=E(Fx,wx.Up,nc,rc),zx=E(Fx,wx.Down,rc,nc),Hx=function(e){return function(t){return function(e,t){return t.line>e}(e,t)}},jx=function(e){return function(t){return function(e,t){return t.line===e}(e,t)}},Vx=qn,qx=Gs,$x=function(e,t){return Math.abs(e.left-t)},Wx=function(e,t){return Math.abs(e.right-t)},Kx=function(e,t){return e>=t.left&&e<=t.right},Xx=function(e,t){return e>=t.top&&e<=t.bottom},Yx=function(e,t,n){return void 0===n&&(n=T),Ne(e,(function(e,r){if(Kx(t,r))return n(r)?r:e
if(Kx(t,e))return n(e)?e:r
var o=Math.min($x(e,t),Wx(e,t)),i=Math.min($x(r,t),Wx(r,t))
return i===o&&ye(r,"node")&&Vx(r.node)||i<o?r:e}))},Gx=function(e,t,n,r,o){var i=qx(r,e,$o,t,!o)
do{if(!i||n(i))return}while(i=qx(i,e,$o,t))},Jx=function(e,t,n){var r=Lx(function(e){return W(ae(e.getElementsByTagName("*")),Us)}(e)),o=W(r,E(Xx,n)),i=function(e){return!Pn(e.node)&&!Wn(e.node)},a=Yx(o,t,i)
if(a){var u=i(a)
if((a=Yx(function(e,t,n){void 0===n&&(n=!0)
var r=[],o=function(e,n){var o=W(Lx([n]),(function(n){return!e(n,t)}))
return r=r.concat(o),0===o.length}
return r.push(t),Gx(wx.Up,e,E(o,nc),t.node,n),Gx(wx.Down,e,E(o,rc),t.node,n),r}(e,a,u),t,i))&&Us(a.node))return function(e,t){return{node:e.node,before:$x(e,t)<Wx(e,t)}}(a,t)}return null},Qx=function(e,t){e.selection.setRng(t),jd(e,e.selection.getRng())},Zx=function(e,t,n){return L.some(RC(e,t,n))},ew=function(e,t,n,r,o,i){var a=t===Ac.Forwards,u=Sf(e.getBody()),c=E(ff,a?u.next:u.prev),s=a?r:o
if(!n.collapsed){var f=ic(n)
if(i(f))return EC(t,e,f,t===Ac.Backwards,!1)}var l=cf(t,e.getBody(),n)
if(s(l))return _C(e,l.getNode(!a))
var d=tC(a,c(l)),m=Po(n)
if(!d)return m?L.some(n):L.none()
if(s(d))return EC(t,e,d.getNode(!a),a,!1)
var g=c(d)
return g&&s(g)&&lf(d,g)?EC(t,e,g.getNode(!a),a,!1):m?Zx(e,d.toRange(),!1):L.none()},tw=function(e,t,n,r,o,i){var a=cf(t,e.getBody(),n),u=_e(a.getClientRects()),c=t===wx.Down
if(!u)return L.none()
var s,f=(c?zx:Ux)(e.getBody(),Hx(1),a),l=W(f,jx(1)),d=u.left,m=Yx(l,d)
if(m&&i(m.node)){var g=Math.abs(d-m.left),p=Math.abs(d-m.right)
return EC(t,e,m.node,g<p,!1)}if(s=r(a)?a.getNode():o(a)?a.getNode(!0):ic(n)){var h=function(e,t,n,r){var o,i,a,u,c=Sf(t),s=[],f=0,l=function(e){return _e(e.getClientRects())}
1===e?(o=c.next,i=rc,a=nc,u=_c.after(r)):(o=c.prev,i=nc,a=rc,u=_c.before(r))
var d=l(u)
do{if(u.isVisible()){var m=l(u)
if(!a(m,d)){s.length>0&&i(m,_e(s))&&f++
var g=Zu(m)
if(g.position=u,g.line=f,n(g))return s
s.push(g)}}}while(u=o(u))
return s}(t,e.getBody(),Hx(1),s),v=Yx(W(h,jx(1)),d)
if(v)return Zx(e,v.position.toRange(),!1)
if(v=_e(W(h,jx(0))))return Zx(e,v.position.toRange(),!1)}return 0===l.length?nw(e,c).filter(c?o:r).map((function(t){return RC(e,t.toRange(),!1)})):L.none()},nw=function(e,t){var n=e.selection.getRng(),r=e.getBody()
if(t){var o=_c.fromRangeEnd(n),i=Tx(r,o)
return ie(i.positions)}o=_c.fromRangeStart(n),i=Dx(r,o)
return oe(i.positions)},rw=function(e,t,n){return nw(e,t).filter(n).exists((function(t){return e.selection.setRng(t.toRange()),!0}))},ow=function(e,t){var n=e.dom.createRng()
n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},iw=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},aw=function(e,t,n){return ZC(t,n).map((function(t){return ow(e,t),n}))},uw=function(e,t){if(e.selection.isCollapsed()&&!0!==e.composing&&t.get()){var n=_c.fromRangeStart(e.selection.getRng())
_c.isTextPosition(n)&&!1===function(e){return Ao(e)||Ro(e)}(n)&&(ow(e,Rs(t.get(),n)),t.set(null))}},cw=function(e,t,n){return!!bs(e)&&function(e,t,n){var r=e.getBody(),o=_c.fromRangeStart(e.selection.getRng()),i=E(Qy,e)
return bx(n,i,r,o).bind((function(n){return aw(e,t,n)}))}(e,t,n).isSome()},sw=function(e,t,n){return!!bs(t)&&xx(e,t)},fw=function(e){var t=yu(null),n=E(Qy,e)
return e.on("NodeChange",(function(r){!bs(e)||xt.browser.isIE()&&r.initial||(function(e,t,n){var r=j(Iu(At.fromDom(t.getRoot()),'*[data-mce-selected="inline-boundary"]'),(function(e){return e.dom})),o=W(r,e),i=W(n,e)
V(te(o,i),E(iw,!1)),V(te(i,o),E(iw,!0))}(n,e.dom,r.parents),uw(e,t),function(e,t,n,r){if(t.selection.isCollapsed()){var o=W(r,e)
V(o,(function(r){var o=_c.fromRangeStart(t.selection.getRng())
fx(e,t.getBody(),o).bind((function(e){return aw(t,n,e)}))}))}}(n,e,t,r.parents))})),t},lw=E(sw,!0),dw=E(sw,!1),mw=function(e,t,n){if(bs(e)){var r=nw(e,t).getOrThunk((function(){var n=e.selection.getRng()
return t?_c.fromRangeEnd(n):_c.fromRangeStart(n)}))
return fx(E(Qy,e),e.getBody(),r).exists((function(t){var r=mx(t)
return ZC(n,r).exists((function(t){return ow(e,t),!0}))}))}return!1},gw=function(e,t){return function(n){return ZC(t,n).exists((function(t){return ow(e,t),!0}))}},pw=function(e,t,n,r){var o=e.getBody(),i=E(Qy,e)
e.undoManager.ignore((function(){e.selection.setRng(function(e,t){var n=document.createRange()
return n.setStart(e.container(),e.offset()),n.setEnd(t.container(),t.offset()),n}(n,r)),e.execCommand("Delete"),fx(i,o,_c.fromRangeStart(e.selection.getRng())).map(gx).map(gw(e,t))})),e.nodeChanged()},hw=function(e,t,n,r){var o=function(e,t){return Js(t,e)||e}(e.getBody(),r.container()),i=E(Qy,e),a=fx(i,o,r)
return a.bind((function(e){return n?e.fold(S(L.some(gx(e))),L.none,S(L.some(mx(e))),L.none):e.fold(L.none,S(L.some(mx(e))),L.none,S(L.some(gx(e))))})).map(gw(e,t)).getOrThunk((function(){var u=Rf(n,o,r),c=u.bind((function(e){return fx(i,o,e)}))
return Xn(a,c,(function(){return eC(i,o,r).exists((function(t){return!!function(e){return Xn(Pf(e),Lf(e),(function(t,n){var r=tC(!0,t),o=tC(!1,n)
return Of(e,r).forall((function(e){return e.isEqual(o)}))})).getOr(!0)}(t)&&(mp(e,n,At.fromDom(t)),!0)}))})).orThunk((function(){return c.bind((function(o){return u.map((function(o){return n?pw(e,t,r,o):pw(e,t,o,r),!0}))}))})).getOr(!1)}))},vw=function(e,t,n){if(e.selection.isCollapsed()&&bs(e)){var r=_c.fromRangeStart(e.selection.getRng())
return hw(e,t,n,r)}return!1},bw=function(e){return 1===en(e)},yw=function(e,t,n,r){var o=E(Th,t),i=j(W(r,o),(function(e){return e.dom}))
if(0===i.length)mp(t,e,n)
else{var a=function(e,t){var n=kh(!1),r=Ah(t,n.dom)
return sn(At.fromDom(e),n),pn(At.fromDom(e)),_c(r,0)}(n.dom,i)
t.selection.setRng(a.toRange())}},Cw=function(e,t){var n=At.fromDom(e.getBody()),r=At.fromDom(e.selection.getStart()),o=W(function(e,t){var n=kg(t,e)
return J(n,co).fold(S(n),(function(e){return n.slice(0,e)}))}(n,r),bw)
return ie(o).exists((function(n){var r,i=_c.fromRangeStart(e.selection.getRng())
return!(!function(e,t,n){return Xn(Pf(n),Lf(n),(function(r,o){var i=tC(!0,r),a=tC(!1,o),u=tC(!1,t)
return e?Of(n,u).exists((function(e){return e.isEqual(a)&&t.isEqual(i)})):Bf(n,u).exists((function(e){return e.isEqual(i)&&t.isEqual(a)}))})).getOr(!0)}(t,i,n.dom)||(r=n,Mf(r.dom)&&wh(r.dom)))&&(yw(t,e,n,o),!0)}))},xw=function(e,t){return!!e.selection.isCollapsed()&&Cw(e,t)},ww=function(e,t,n){return e._selectionOverrides.hideFakeCaret(),mp(e,t,At.fromDom(n)),!0},Sw=function(e,t){return e.selection.isCollapsed()?function(e,t){var n=t?mg:gg,r=t?Ac.Forwards:Ac.Backwards,o=cf(r,e.getBody(),e.selection.getRng())
return n(o)?ww(e,t,o.getNode(!t)):L.from(tC(t,o)).filter((function(e){return n(e)&&lf(o,e)})).exists((function(n){return ww(e,t,n.getNode(!t))}))}(e,t):function(e,t){var n=e.selection.getNode()
return!!Wn(n)&&ww(e,t,n)}(e,t)},kw=function(e){var t=parseInt(e,10)
return isNaN(t)?0:t},Nw=function(e,t){return(e||"table"===Lt(t)?"margin":"padding")+("rtl"===rr(t,"direction")?"-right":"-left")},Ew=function(e){var t=Aw(e)
return!e.mode.isReadOnly()&&(t.length>1||function(e,t){return Z(t,(function(t){var n=Nw(ds(e),t),r=ir(t,n).map(kw).getOr(0)
return"false"!==e.dom.getContentEditable(t.dom)&&r>0}))}(e,t))},_w=function(e){return mo(e)||go(e)},Aw=function(e){return W((t=e.selection.getSelectedBlocks(),j(t,At.fromDom)),(function(e){return!_w(e)&&!function(e){return $t(e).exists(_w)}(e)&&Kr(e,(function(e){return Vn(e.dom)||qn(e.dom)})).exists((function(e){return Vn(e.dom)}))}))
var t},Rw=function(e,t){var n=e.dom,r=e.selection,o=e.formatter,i=function(e){return e.getParam("indentation","40px","string")}(e),a=/[a-z%]+$/i.exec(i)[0],u=parseInt(i,10),c=ds(e),s=es(e)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||""!==s||n.getParent(r.getNode(),n.isBlock)||o.apply("div"),V(Aw(e),(function(e){(function(e,t,n,r,o,i){var a=Nw(n,At.fromDom(i))
if("outdent"===t){var u=Math.max(0,kw(i.style[a])-r)
e.setStyle(i,a,u?u+o:"")}else u=kw(i.style[a])+r+o,e.setStyle(i,a,u)})(n,t,c,u,a,e.dom)}))},Dw=function(e,t){if(e.selection.isCollapsed()&&Ew(e)){var n=e.dom,r=e.selection.getRng(),o=_c.fromRangeStart(r),i=n.getParent(r.startContainer,n.isBlock)
if(null!==i&&Rg(At.fromDom(i),o))return Rw(e,"outdent"),!0}return!1},Tw=function(e,t){e.getDoc().execCommand(t,!1,null)},Ow=function(e,t){e.addCommand("delete",(function(){(function(e,t){Dw(e)||jC(e,!1)||BC(e,!1)||vw(e,t,!1)||yC(e,!1)||Vp(e)||VC(e,!1)||Sw(e,!1)||SC(e)||xw(e,!1)||(Tw(e,"Delete"),aC(e))})(e,t)})),e.addCommand("forwardDelete",(function(){(function(e,t){jC(e,!0)||BC(e,!0)||vw(e,t,!0)||yC(e,!0)||Vp(e)||VC(e,!0)||Sw(e,!0)||SC(e)||xw(e,!0)||Tw(e,"ForwardDelete")})(e,t)}))},Bw=function(e){return void 0===e.touches||1!==e.touches.length?L.none():L.some(e.touches[0])},Pw=function(e){var t=Nu(),n=yu(!1),r=_u((function(t){e.fire("longpress",Ae(Ae({},t),{type:"longpress"})),n.set(!0)}),400)
e.on("touchstart",(function(e){Bw(e).each((function(o){r.cancel()
var i={x:o.clientX,y:o.clientY,target:e.target}
r.throttle(e),n.set(!1),t.set(i)}))}),!0),e.on("touchmove",(function(o){r.cancel(),Bw(o).each((function(r){t.on((function(o){(function(e,t){var n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y)
return n>5||r>5})(r,o)&&(t.clear(),n.set(!1),e.fire("longpresscancel"))}))}))}),!0),e.on("touchend touchcancel",(function(o){r.cancel(),"touchcancel"!==o.type&&t.get().filter((function(e){return e.target.isEqualNode(o.target)})).each((function(){n.get()?o.preventDefault():e.fire("tap",Ae(Ae({},o),{type:"tap"}))}))}),!0)},Lw=function(e,t){return be(e,t.nodeName)},Iw=function(e,t){return!!Mn(t)||!!Rn(t)&&(!Lw(e,t)&&!Yf(t))},Mw=function(e,t){if(Mn(t)){if(0===t.nodeValue.length)return!0
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||Lw(e,t.nextSibling)))return!0}return!1},Fw=function(e){var t,n,r,o=e.dom,i=e.selection,a=e.schema,u=a.getBlockElements(),c=i.getStart(),s=e.getBody(),f=es(e)
if(c&&Rn(c)&&f){var l=s.nodeName.toLowerCase()
if(a.isValidChild(l,f.toLowerCase())&&!function(e,t,n){return H(Sg(At.fromDom(n),At.fromDom(t)),(function(t){return Lw(e,t.dom)}))}(u,s,c)){var d=i.getRng(),m=d.startContainer,g=d.startOffset,p=d.endContainer,h=d.endOffset,v=bm(e)
for(c=s.firstChild;c;)if(Iw(u,c)){if(Mw(u,c)){n=c,c=c.nextSibling,o.remove(n)
continue}t||(t=o.create(f,ts(e)),c.parentNode.insertBefore(t,c),r=!0),n=c,c=c.nextSibling,t.appendChild(n)}else t=null,c=c.nextSibling
r&&v&&(d.setStart(m,g),d.setEnd(p,h),i.setRng(d),e.nodeChanged())}}},Uw=function(e,t){t.hasAttribute("data-mce-caret")&&(Bo(t),function(e){e.selection.setRng(e.selection.getRng())}(e),e.selection.scrollIntoView(t))},zw=function(e,t){var n=function(e){return Gr(At.fromDom(e.getBody()),"*[data-mce-caret]").map((function(e){return e.dom})).getOrNull()}(e)
if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void Uw(e,n)):void(_o(n)&&(Uw(e,n),e.undoManager.add()))},Hw=qn,jw=function(e,t,n){var r=Sf(e.getBody()),o=E(ff,1===t?r.next:r.prev)
if(n.collapsed&&function(e){return""!==es(e)}(e)){var i=e.dom.getParent(n.startContainer,"PRE")
if(!i)return
if(!o(_c.fromRangeStart(n))){var a=function(e){var t=e.dom.create(es(e))
return(!xt.ie||xt.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">'),t}(e)
1===t?e.$(i).after(a):e.$(i).before(a),e.selection.select(a,!0),e.selection.collapse()}}},Vw=function(e,t){var n=t?Ac.Forwards:Ac.Backwards,r=e.selection.getRng()
return function(e,t,n){return ew(t,e,n,vg,bg,Hw)}(n,e,r).orThunk((function(){return jw(e,n,r),L.none()}))},qw=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return function(e,t,n){return tw(t,e,n,(function(e){return vg(e)||pg(e)}),(function(e){return bg(e)||hg(e)}),Hw)}(n,e,r).orThunk((function(){return jw(e,n,r),L.none()}))},$w=function(e,t){return Vw(e,t).exists((function(t){return Qx(e,t),!0}))},Ww=function(e,t){return qw(e,t).exists((function(t){return Qx(e,t),!0}))},Kw=function(e,t){return rw(e,t,t?bg:vg)},Xw=function(e){return z(["figcaption"],Lt(e))},Yw=function(e){var t=document.createRange()
return t.setStartBefore(e.dom),t.setEndBefore(e.dom),t},Gw=function(e,t,n){n?dn(e,t):ln(e,t)},Jw=function(e,t,n,r){return""===t?function(e,t){var n=At.fromTag("br")
return Gw(e,n,t),Yw(n)}(e,r):function(e,t,n,r){var o=At.fromTag(n),i=At.fromTag("br")
return Qn(o,r),dn(o,i),Gw(e,o,t),Yw(i)}(e,r,t,n)},Qw=function(e,t,n){return t?function(e,t){return Tx(e,t).breakAt.isNone()}(e.dom,n):function(e,t){return Dx(e,t).breakAt.isNone()}(e.dom,n)},Zw=function(e,t){var n=At.fromDom(e.getBody()),r=_c.fromRangeStart(e.selection.getRng()),o=es(e),i=ts(e)
return function(e,t){var n=E(Ot,t)
return Kr(At.fromDom(e.container()),co,n).filter(Xw)}(r,n).exists((function(){if(Qw(n,t,r)){var a=Jw(n,o,i,t)
return e.selection.setRng(a),!0}return!1}))},eS=function(e,t){return!!e.selection.isCollapsed()&&Zw(e,t)},tS=function(e,t){return Q(function(e){return j(e,(function(e){return Ae({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:C},e)}))}(e),(function(e){return function(e,t){return t.keyCode===e.keyCode&&t.shiftKey===e.shiftKey&&t.altKey===e.altKey&&t.ctrlKey===e.ctrlKey&&t.metaKey===e.metaKey}(e,t)?[e]:[]}))},nS=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){return e.apply(null,t)}},rS=function(e,t){return G(tS(e,t),(function(e){return e.action()}))},oS=function(e,t){var n=t?Ac.Forwards:Ac.Backwards,r=e.selection.getRng()
return ew(e,n,r,mg,gg,Wn).exists((function(t){return Qx(e,t),!0}))},iS=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return tw(e,n,r,mg,gg,Wn).exists((function(t){return Qx(e,t),!0}))},aS=function(e,t){return rw(e,t,t?gg:mg)},uS=function(e,t,n,r,o){var i=Iu(At.fromDom(n),"td,th,caption").map((function(e){return e.dom}))
return function(e,t,n){return X(e,(function(e,r){return e.fold((function(){return L.some(r)}),(function(e){var o=Math.sqrt(Math.abs(e.x-t)+Math.abs(e.y-n)),i=Math.sqrt(Math.abs(r.x-t)+Math.abs(r.y-n))
return L.some(i<o?r:e)}))}),L.none())}(W(function(e,t){return Q(t,(function(t){var n=function(e,t){return{left:e.left-t,top:e.top-t,right:e.right+2*t,bottom:e.bottom+2*t,width:e.width+t,height:e.height+t}}(Zu(t.getBoundingClientRect()),-1)
return[{x:n.left,y:e(n),cell:t},{x:n.right,y:e(n),cell:t}]}))}(e,i),(function(e){return t(e,o)})),r,o).map((function(e){return e.cell}))},cS=E(uS,(function(e){return e.bottom}),(function(e,t){return e.y<t})),sS=E(uS,(function(e){return e.top}),(function(e,t){return e.y>t})),fS=function(e,t){return oe(t.getClientRects()).bind((function(t){return cS(e,t.left,t.top)})).bind((function(e){return Rx(Lf(n=e).map((function(e){return Dx(n,e).positions.concat(e)})).getOr([]),t)
var n}))},lS=function(e,t){return ie(t.getClientRects()).bind((function(t){return sS(e,t.left,t.top)})).bind((function(e){return Rx(Pf(n=e).map((function(e){return[e].concat(Tx(n,e).positions)})).getOr([]),t)
var n}))},dS=function(e,t,n){var r=e(t,n)
return function(e){return e.breakType===yx.Wrap&&0===e.positions.length}(r)||!Hn(n.getNode())&&function(e){return e.breakType===yx.Br&&1===e.positions.length}(r)?!function(e,t,n){return n.breakAt.exists((function(n){return e(t,n).breakAt.isSome()}))}(e,t,r):r.breakAt.isNone()},mS=E(dS,Dx),gS=E(dS,Tx),pS=function(e,t,n,r){var o=e.selection.getRng(),i=t?1:-1
return!(!Ms()||!function(e,t,n){var r=_c.fromRangeStart(t)
return Tf(!e,n).exists((function(e){return e.isEqual(r)}))}(t,o,n))&&(EC(i,e,n,!t,!1).each((function(t){Qx(e,t)})),!0)},hS=function(e,t){var n=t.getNode(e)
return Rn(n)&&"TABLE"===n.nodeName?L.some(n):L.none()},vS=function(e,t,n){var r=hS(!!t,n),o=!1===t
r.fold((function(){return Qx(e,n.toRange())}),(function(r){return Tf(o,e.getBody()).filter((function(e){return e.isEqual(n)})).fold((function(){return Qx(e,n.toRange())}),(function(o){return function(e,t,n,r){var o=es(t)
o?t.undoManager.transact((function(){var r=At.fromTag(o)
Qn(r,ts(t)),dn(r,At.fromTag("br")),e?fn(At.fromDom(n),r):sn(At.fromDom(n),r)
var i=t.dom.createRng()
i.setStart(r.dom,0),i.setEnd(r.dom,0),Qx(t,i)})):Qx(t,r.toRange())}(t,e,r,n)}))}))},bS=function(e,t,n,r){var o=e.selection.getRng(),i=_c.fromRangeStart(o),a=e.getBody()
if(!t&&mS(r,i)){var u=function(e,t,n){return fS(t,n).orThunk((function(){return oe(n.getClientRects()).bind((function(n){return Ax(Ox(e,_c.before(t)),n.left)}))})).getOr(_c.before(t))}(a,n,i)
return vS(e,t,u),!0}if(t&&gS(r,i)){u=function(e,t,n){return lS(t,n).orThunk((function(){return oe(n.getClientRects()).bind((function(n){return Ax(Bx(e,_c.after(t)),n.left)}))})).getOr(_c.after(t))}(a,n,i)
return vS(e,t,u),!0}return!1},yS=function(e,t,n){return L.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((function(r){return L.from(e.dom.getParent(r,"table")).map((function(o){return n(e,t,o,r)}))})).getOr(!1)},CS=function(e,t){return yS(e,t,pS)},xS=function(e,t){return yS(e,t,bS)},wS=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){var r=dt().os
rS([{keyCode:rd.RIGHT,action:nS($w,e,!0)},{keyCode:rd.LEFT,action:nS($w,e,!1)},{keyCode:rd.UP,action:nS(Ww,e,!1)},{keyCode:rd.DOWN,action:nS(Ww,e,!0)},{keyCode:rd.RIGHT,action:nS(CS,e,!0)},{keyCode:rd.LEFT,action:nS(CS,e,!1)},{keyCode:rd.UP,action:nS(xS,e,!1)},{keyCode:rd.DOWN,action:nS(xS,e,!0)},{keyCode:rd.RIGHT,action:nS(oS,e,!0)},{keyCode:rd.LEFT,action:nS(oS,e,!1)},{keyCode:rd.UP,action:nS(iS,e,!1)},{keyCode:rd.DOWN,action:nS(iS,e,!0)},{keyCode:rd.RIGHT,action:nS(cw,e,t,!0)},{keyCode:rd.LEFT,action:nS(cw,e,t,!1)},{keyCode:rd.RIGHT,ctrlKey:!r.isOSX(),altKey:r.isOSX(),action:nS(lw,e,t)},{keyCode:rd.LEFT,ctrlKey:!r.isOSX(),altKey:r.isOSX(),action:nS(dw,e,t)},{keyCode:rd.UP,action:nS(eS,e,!1)},{keyCode:rd.DOWN,action:nS(eS,e,!0)}],n).each((function(e){n.preventDefault()}))}(e,t,n)}))},SS=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){rS([{keyCode:rd.BACKSPACE,action:nS(Dw,e,!1)},{keyCode:rd.BACKSPACE,action:nS(jC,e,!1)},{keyCode:rd.DELETE,action:nS(jC,e,!0)},{keyCode:rd.BACKSPACE,action:nS(BC,e,!1)},{keyCode:rd.DELETE,action:nS(BC,e,!0)},{keyCode:rd.BACKSPACE,action:nS(vw,e,t,!1)},{keyCode:rd.DELETE,action:nS(vw,e,t,!0)},{keyCode:rd.BACKSPACE,action:nS(Vp,e,!1)},{keyCode:rd.DELETE,action:nS(Vp,e,!0)},{keyCode:rd.BACKSPACE,action:nS(VC,e,!1)},{keyCode:rd.DELETE,action:nS(VC,e,!0)},{keyCode:rd.BACKSPACE,action:nS(Sw,e,!1)},{keyCode:rd.DELETE,action:nS(Sw,e,!0)},{keyCode:rd.BACKSPACE,action:nS(SC,e,!1)},{keyCode:rd.DELETE,action:nS(SC,e,!0)},{keyCode:rd.BACKSPACE,action:nS(yC,e,!1)},{keyCode:rd.DELETE,action:nS(yC,e,!0)},{keyCode:rd.BACKSPACE,action:nS(xw,e,!1)},{keyCode:rd.DELETE,action:nS(xw,e,!0)}],n).each((function(e){n.preventDefault()}))}(e,t,n)})),e.on("keyup",(function(t){!1===t.isDefaultPrevented()&&function(e,t){rS([{keyCode:rd.BACKSPACE,action:nS(HC,e)},{keyCode:rd.DELETE,action:nS(HC,e)}],t)}(e,t)}))},kS=function(e,t){var n,r=t,o=e.dom,i=e.schema.getMoveCaretBeforeOnEnterElements()
if(t){if(/^(LI|DT|DD)$/.test(t.nodeName)){var a=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}(t.firstChild)
a&&/^(UL|OL|DL)$/.test(a.nodeName)&&t.insertBefore(o.doc.createTextNode(bo),t.firstChild)}var u=o.createRng()
if(t.normalize(),t.hasChildNodes()){for(var c=new io(t,t);n=c.current();){if(Mn(n)){u.setStart(n,0),u.setEnd(n,0)
break}if(i[n.nodeName.toLowerCase()]){u.setStartBefore(n),u.setEndBefore(n)
break}r=n,n=c.next()}n||(u.setStart(r,0),u.setEnd(r,0))}else Hn(t)?t.nextSibling&&o.isBlock(t.nextSibling)?(u.setStartBefore(t),u.setEndBefore(t)):(u.setStartAfter(t),u.setEndAfter(t)):(u.setStart(t,0),u.setEnd(t,0))
e.selection.setRng(u),jd(e,u)}},NS=function(e){return L.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},ES=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},_S=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},AS=function(e){var t=e.parentNode
return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},RS=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!Rn(r);)r=r[n?"nextSibling":"previousSibling"]
return r===t},DS=function(e,t,n,r,o){var i=e.dom,a=e.selection.getRng()
if(n!==e.getBody()){var u
_S(u=n)&&_S(u.parentNode)&&(o="LI")
var c=o?t(o):i.create("BR")
if(RS(n,r,!0)&&RS(n,r,!1))if(ES(n,"LI")){var s=AS(n)
i.insertAfter(c,s),!function(e){var t
return(null===(t=e.parentNode)||void 0===t?void 0:t.firstChild)===e}(n)?i.remove(n):i.remove(s)}else i.replace(c,n)
else if(RS(n,r,!0))ES(n,"LI")?(i.insertAfter(c,AS(n)),c.appendChild(i.doc.createTextNode(" ")),c.appendChild(n)):n.parentNode.insertBefore(c,n),i.remove(r)
else if(RS(n,r,!1))i.insertAfter(c,AS(n)),i.remove(r)
else{n=AS(n)
var f=a.cloneRange()
f.setStartAfter(r),f.setEndAfter(n)
var l=f.extractContents()
"LI"===o&&function(e,t){return e.firstChild&&e.firstChild.nodeName===t}(l,"LI")?(c=l.firstChild,i.insertAfter(l,n)):(i.insertAfter(l,n),i.insertAfter(c,n)),i.remove(r)}kS(e,c)}},TS=function(e,t){return t&&"A"===t.nodeName&&e.isEmpty(t)},OS=function(e){e.innerHTML='<br data-mce-bogus="1">'},BS=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},PS=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},LS=function(e,t,n){return!1===Mn(t)?n:e?1===n&&t.data.charAt(n-1)===yo?0:n:n===t.data.length-1&&t.data.charAt(n)===yo?t.data.length:n},IS=function(e,t){var n,r,o=e.getRoot()
for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode
return n!==o?r:o},MS=function(e,t){var n=es(e)
n&&n.toLowerCase()===t.tagName.toLowerCase()&&function(e,t,n){var r=e.dom
L.from(n.style).map(r.parseStyle).each((function(e){var n=ar(At.fromDom(t)),o=Ae(Ae({},n),e)
r.setStyles(t,o)}))
var o=L.from(n.class).map((function(e){return e.split(/\s+/)})),i=L.from(t.className).map((function(e){return W(e.split(/\s+/),(function(e){return""!==e}))}))
Xn(o,i,(function(e,n){var o=W(n,(function(t){return!z(e,t)})),i=Re(Re([],e,!0),o,!0)
r.setAttrib(t,"class",i.join(" "))}))
var a=["style","class"],u=pe(n,(function(e,t){return!z(a,t)}))
r.setAttribs(t,u)}(e,t,ts(e))},FS=function(e,t){var n,r,o,i,a,u,c,s,f,l,d=e.dom,m=e.schema,g=m.getNonEmptyElements(),p=e.selection.getRng(),h=function(t){var n,o,a,u=r,c=m.getTextInlineElements()
if(a=n=t||"TABLE"===s||"HR"===s?d.create(t||f):i.cloneNode(!1),!1===function(e){return e.getParam("keep_styles",!0)}(e))d.setAttrib(n,"style",null),d.setAttrib(n,"class",null)
else do{if(c[u.nodeName]){if(Mf(u)||Yf(u))continue
o=u.cloneNode(!1),d.setAttrib(o,"id",""),n.hasChildNodes()?(o.appendChild(n.firstChild),n.appendChild(o)):(a=o,n.appendChild(o))}}while((u=u.parentNode)&&u!==x)
return MS(e,n),OS(a),n},v=function(e){var t,n,a=LS(e,r,o)
if(Mn(r)&&(e?a>0:a<r.nodeValue.length))return!1
if(r.parentNode===i&&l&&!e)return!0
if(e&&Rn(r)&&r===i.firstChild)return!0
if(BS(r,"TABLE")||BS(r,"HR"))return l&&!e||!l&&e
var u=new io(r,i)
for(Mn(r)&&(e&&0===a?u.prev():e||a!==r.nodeValue.length||u.next());t=u.current();){if(Rn(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),g[n]&&"br"!==n))return!1}else if(Mn(t)&&!Ko(t.nodeValue))return!1
e?u.prev():u.next()}return!0},b=function(){a=/^(H[1-6]|PRE|FIGURE)$/.test(s)&&"HGROUP"!==w?h(f):h(),function(e){return e.getParam("end_container_on_empty_block",!1)}(e)&&PS(d,c)&&d.isEmpty(i)?a=d.split(c,i):d.insertAfter(a,i),kS(e,a)}
vd(d,p).each((function(e){p.setStart(e.startContainer,e.startOffset),p.setEnd(e.endContainer,e.endOffset)})),r=p.startContainer,o=p.startOffset,f=es(e)
var y=!(!t||!t.shiftKey),C=!(!t||!t.ctrlKey)
Rn(r)&&r.hasChildNodes()&&(l=o>r.childNodes.length-1,r=r.childNodes[Math.min(o,r.childNodes.length-1)]||r,o=l&&Mn(r)?r.nodeValue.length:0)
var x=IS(d,r)
if(x){(f&&!y||!f&&y)&&(r=function(e,t,n,r,o){var i,a,u,c,s,f,l=t||"P",d=e.dom,m=IS(d,r)
if(!(a=d.getParent(r,d.isBlock))||!PS(d,a)){if(f=(a=a||m)===e.getBody()||function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}(a)?a.nodeName.toLowerCase():a.parentNode.nodeName.toLowerCase(),!a.hasChildNodes())return i=d.create(l),MS(e,i),a.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i
for(c=r;c.parentNode!==a;)c=c.parentNode
for(;c&&!d.isBlock(c);)u=c,c=c.previousSibling
if(u&&e.schema.isValidChild(f,l.toLowerCase())){for(i=d.create(l),MS(e,i),u.parentNode.insertBefore(i,u),c=u;c&&!d.isBlock(c);)s=c.nextSibling,i.appendChild(c),c=s
n.setStart(r,o),n.setEnd(r,o)}}return r}(e,f,p,r,o)),i=d.getParent(r,d.isBlock),c=i?d.getParent(i.parentNode,d.isBlock):null,s=i?i.nodeName.toUpperCase():""
var w=c?c.nodeName.toUpperCase():""
"LI"!==w||C||(i=c,c=c.parentNode,s=w),/^(LI|DT|DD)$/.test(s)&&d.isEmpty(i)?DS(e,h,c,i,f):f&&i===e.getBody()||(f=f||"P",ko(i)?(a=Bo(i),d.isEmpty(i)&&OS(i),MS(e,a),kS(e,a)):v()?b():v(!0)?(a=i.parentNode.insertBefore(h(),i),kS(e,BS(i,"HR")?a:i)):((n=function(e){var t=e.cloneRange()
return t.setStart(e.startContainer,LS(!0,e.startContainer,e.startOffset)),t.setEnd(e.endContainer,LS(!1,e.endContainer,e.endOffset)),t}(p).cloneRange()).setEndAfter(i),function(e){V(Lu(At.fromDom(e),Ut),(function(e){var t=e.dom
t.nodeValue=xo(t.nodeValue)}))}(u=n.extractContents()),function(e){do{Mn(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild}while(e)}(u),a=u.firstChild,d.insertAfter(u,i),function(e,t,n){var r,o=n,i=[]
if(o){for(;o=o.firstChild;){if(e.isBlock(o))return
Rn(o)&&!t[o.nodeName.toLowerCase()]&&i.push(o)}for(r=i.length;r--;)(!(o=i[r]).hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue||TS(e,o))&&e.remove(o)}}(d,g,a),function(e,t){t.normalize()
var n=t.lastChild
n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")}(d,i),d.isEmpty(i)&&OS(i),a.normalize(),d.isEmpty(a)?(d.remove(a),b()):(MS(e,a),kS(e,a))),d.setAttrib(a,"id",""),e.fire("NewBlock",{newBlock:a}))}},US=function(e,t,n){var r=e.dom.createRng()
n?(r.setStartBefore(t),r.setEndBefore(t)):(r.setStartAfter(t),r.setEndAfter(t)),e.selection.setRng(r),jd(e,r)},zS=function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng()
vd(i,a).each((function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)}))
var u=a.startOffset,c=a.startContainer
if(1===c.nodeType&&c.hasChildNodes()){var s=u>c.childNodes.length-1
c=c.childNodes[Math.min(u,c.childNodes.length-1)]||c,u=s&&3===c.nodeType?c.nodeValue.length:0}var f=i.getParent(c,i.isBlock),l=f?i.getParent(f.parentNode,i.isBlock):null,d=l?l.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey)
"LI"!==d||m||(f=l),c&&3===c.nodeType&&u>=c.nodeValue.length&&(function(e,t,n){for(var r,o=new io(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||r.length>0)return!0}(e.schema,c,f)||(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0)),n=i.create("br"),Dc(i,a,n),US(e,n,r),e.undoManager.add()},HS=function(e,t){var n=At.fromTag("br")
sn(At.fromDom(t),n),e.undoManager.add()},jS=function(e,t){VS(e.getBody(),t)||fn(At.fromDom(t),At.fromTag("br"))
var n=At.fromTag("br")
fn(At.fromDom(t),n),US(e,n.dom,!1),e.undoManager.add()},VS=function(e,t){return n=_c.after(t),!!Hn(n.getNode())||Of(e,_c.after(t)).map((function(e){return Hn(e.getNode())})).getOr(!1)
var n},qS=function(e){return e&&"A"===e.nodeName&&"href"in e},$S=function(e){return e.fold(D,qS,qS,D)},WS=function(e,t){t.fold(C,E(HS,e),E(jS,e),C)},KS=function(e,t){var n=function(e){var t=E(Qy,e),n=_c.fromRangeStart(e.selection.getRng())
return fx(t,e.getBody(),n).filter($S)}(e)
n.isSome()?n.each(E(WS,e)):zS(e,t)},XS=function(e,t){return NS(e).filter((function(e){return t.length>0&&Dt(At.fromDom(e),t)})).isSome()},YS=Sr([{br:[]},{block:[]},{none:[]}]),GS=function(e,t){return function(e){return XS(e,function(e){return e.getParam("no_newline_selector","")}(e))}(e)},JS=function(e){return function(t,n){return""===es(t)===e}},QS=function(e){return function(t,n){return function(e){return NS(e).filter((function(e){return go(At.fromDom(e))})).isSome()}(t)===e}},ZS=function(e,t){return function(n,r){return function(e){return NS(e).fold(S(""),(function(e){return e.nodeName.toUpperCase()}))}(n)===e.toUpperCase()===t}},ek=function(e){return ZS("pre",e)},tk=function(e){return function(t,n){return function(e){return e.getParam("br_in_pre",!0)}(t)===e}},nk=function(e,t){return function(e){return XS(e,function(e){return e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption")}(e))}(e)},rk=function(e,t){return t},ok=function(e){var t=es(e),n=function(e,t){var n,r,o=e.getRoot()
for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode
return n!==o?r:o}(e.dom,e.selection.getStart())
return n&&e.schema.isValidChild(n.nodeName,t||"P")},ik=function(e,t){return function(n,r){return X(e,(function(e,t){return e&&t(n,r)}),!0)?L.some(t):L.none()}},ak=function(e,t){(function(e,t){return ex([ik([GS],YS.none()),ik([ZS("summary",!0)],YS.br()),ik([ek(!0),tk(!1),rk],YS.br()),ik([ek(!0),tk(!1)],YS.block()),ik([ek(!0),tk(!0),rk],YS.block()),ik([ek(!0),tk(!0)],YS.br()),ik([QS(!0),rk],YS.br()),ik([QS(!0)],YS.block()),ik([JS(!0),rk,ok],YS.block()),ik([JS(!0)],YS.br()),ik([nk],YS.br()),ik([JS(!1),rk],YS.br()),ik([ok],YS.block())],[e,!(!t||!t.shiftKey)]).getOr(YS.none())})(e,t).fold((function(){KS(e,t)}),(function(){FS(e,t)}),C)},uk=function(e){e.on("keydown",(function(t){t.keyCode===rd.ENTER&&function(e,t){var n
t.isDefaultPrevented()||(t.preventDefault(),(n=e.undoManager).typing&&(n.typing=!1,n.add()),e.undoManager.transact((function(){!1===e.selection.isCollapsed()&&e.execCommand("Delete"),ak(e,t)})))}(e,t)}))},ck=function(e,t){e.on("keydown",(function(n){!1===n.isDefaultPrevented()&&function(e,t,n){rS([{keyCode:rd.END,action:nS(Kw,e,!0)},{keyCode:rd.HOME,action:nS(Kw,e,!1)},{keyCode:rd.END,action:nS(aS,e,!0)},{keyCode:rd.HOME,action:nS(aS,e,!1)},{keyCode:rd.END,action:nS(mw,e,!0,t)},{keyCode:rd.HOME,action:nS(mw,e,!1,t)}],n).each((function(e){n.preventDefault()}))}(e,t,n)}))},sk=dt().browser,fk=function(e){(function(e){var t=Eu((function(){e.composing||Qg(e)}),0)
sk.isIE()&&(e.on("keypress",(function(e){t.throttle()})),e.on("remove",(function(e){t.cancel()})))})(e),e.on("input",(function(t){!1===t.isComposing&&Qg(e)}))},lk=dt(),dk=function(e){return e.stopImmediatePropagation()},mk=function(e){return e.keyCode===rd.PAGE_UP||e.keyCode===rd.PAGE_DOWN},gk=function(e,t,n){n&&!e.get()?t.on("NodeChange",dk,!0):!n&&e.get()&&t.off("NodeChange",dk),e.set(n)},pk=function(e,t){if(!lk.os.isOSX()){var n=yu(!1)
e.on("keydown",(function(t){mk(t)&&gk(n,e,!0)})),e.on("keyup",(function(r){!1===r.isDefaultPrevented()&&function(e,t,n){rS([{keyCode:rd.PAGE_UP,action:nS(mw,e,!1,t)},{keyCode:rd.PAGE_DOWN,action:nS(mw,e,!0,t)}],n)}(e,t,r),mk(r)&&n.get()&&(gk(n,e,!1),e.nodeChanged())}))}},hk=function(e,t){var n=t.container(),r=t.offset()
return Mn(n)?(n.insertData(r,e),L.some(_c(n,r+e.length))):sf(t).map((function(n){var r=At.fromText(e)
return t.isAtEnd()?fn(n,r):sn(n,r),_c(r.dom,e.length)}))},vk=E(hk,bo),bk=E(hk," "),yk=function(e,t){return function(n){return function(e,t){return!Vg(t)&&(qg(e,t)||Hg(e,t)||jg(e,t))}(e,n)?vk(t):bk(t)}},Ck=function(e){var t=_c.fromRangeStart(e.selection.getRng()),n=At.fromDom(e.getBody())
if(e.selection.isCollapsed()){var r=E(Qy,e),o=_c.fromRangeStart(e.selection.getRng())
return fx(r,e.getBody(),o).bind(function(e){return function(t){return t.fold((function(t){return Bf(e.dom,_c.before(t))}),(function(e){return Pf(e)}),(function(e){return Lf(e)}),(function(t){return Of(e.dom,_c.after(t))}))}}(n)).bind(yk(n,t)).exists(function(e){return function(t){return e.selection.setRng(t.toRange()),e.nodeChanged(),!0}}(e))}return!1},xk=function(e){e.on("keydown",(function(t){!1===t.isDefaultPrevented()&&function(e,t){rS([{keyCode:rd.SPACEBAR,action:nS(Ck,e)}],t).each((function(e){t.preventDefault()}))}(e,t)}))},wk=function(e){var t=fw(e)
return function(e){e.on("keyup compositionstart",E(zw,e))}(e),wS(e,t),SS(e,t),uk(e),xk(e),fk(e),ck(e,t),pk(e,t),t},Sk=function(){function e(e){var t
this.lastPath=[],this.editor=e
var n=this
"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(function(n){var r=e.selection.getRng(),o={startContainer:r.startContainer,startOffset:r.startOffset,endContainer:r.endContainer,endOffset:r.endOffset}
"nodechange"!==n.type&&cd(o,t)||e.fire("SelectionChange"),t=o})),e.on("contextmenu",(function(){e.fire("SelectionChange")})),e.on("SelectionChange",(function(){var t=e.selection.getStart(!0)
!t||!xt.range&&e.selection.isCollapsed()||Hl(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(function(t){!t.isDefaultPrevented()&&Hl(e)&&("IMG"===e.selection.getNode().nodeName?no.setEditorTimeout(e,(function(){e.nodeChanged()})):e.nodeChanged())}))}return e.prototype.nodeChanged=function(e){var t,n,r,o=this.editor.selection
this.editor.initialized&&o&&!this.editor.getParam("disable_nodechange")&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),(t=o.getStart(!0)||r).ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(t,r)||(t=r),n=[],this.editor.dom.getParent(t,(function(e){if(e===r)return!0
n.push(e)})),(e=e||{}).element=t,e.parents=n,this.editor.fire("NodeChange",e))},e.prototype.isSameElementPath=function(e){var t,n=this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)
if(n.length===this.lastPath.length){for(t=n.length;t>=0&&n[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=n,!0}return this.lastPath=n,!1},e}(),kk=function(e){(function(e){e.on("click",(function(t){e.dom.getParent(t.target,"details")&&t.preventDefault()}))})(e),function(e){e.parser.addNodeFilter("details",(function(e){V(e,(function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),e.serializer.addNodeFilter("details",(function(e){V(e,(function(e){var t=e.attr("data-mce-open")
e.attr("open",f(t)?t:null),e.attr("data-mce-open",null)}))}))}(e)},Nk=function(e){return Rn(e)&&lo(At.fromDom(e))},Ek=function(e){e.on("click",(function(t){t.detail>=3&&function(e){var t=e.selection.getRng(),n=_c.fromRangeStart(t),r=_c.fromRangeEnd(t)
if(_c.isElementPosition(n)){var o=n.container()
Nk(o)&&Pf(o).each((function(e){return t.setStart(e.container(),e.offset())}))}_c.isElementPosition(r)&&(o=n.container(),Nk(o)&&Lf(o).each((function(e){return t.setEnd(e.container(),e.offset())})))
e.selection.setRng($p(t))}(e)}))},_k=function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView
return{top:t.top+o.pageYOffset-r.clientTop,left:t.left+o.pageXOffset-r.clientLeft}},Ak=function(e,t){return n=function(e){return e.inline?_k(e.getBody()):{left:0,top:0}}(e),r=function(e){var t=e.getBody()
return e.inline?{left:t.scrollLeft,top:t.scrollTop}:{left:0,top:0}}(e),{pageX:(o=function(e,t){if(t.target.ownerDocument!==e.getDoc()){var n=_k(e.getContentAreaContainer()),r=function(e){var t=e.getBody(),n=e.getDoc().documentElement,r={left:t.scrollLeft,top:t.scrollTop},o={left:t.scrollLeft||n.scrollLeft,top:t.scrollTop||n.scrollTop}
return e.inline?r:o}(e)
return{left:t.pageX-n.left+r.left,top:t.pageY-n.top+r.top}}return{left:t.pageX,top:t.pageY}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top}
var n,r,o},Rk=qn,Dk=Vn,Tk=function(e,t,n,r){var o=e.dom,i=t.cloneNode(!0)
o.setStyles(i,{width:n,height:r}),o.setAttrib(i,"data-mce-selected",null)
var a=o.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
return o.setStyles(a,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),o.setStyles(i,{margin:0,boxSizing:"border-box"}),a.appendChild(i),a},Ok=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},Bk=function(e,t){return function(n){if(function(e){return 0===e.button}(n)){var r=G(t.dom.getParents(n.target),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0
return!1}}(Rk,Dk)).getOr(null)
if(u=t.getBody(),Rk(c=r)&&c!==u){var o=t.dom.getPos(r),i=t.getBody(),a=t.getDoc().documentElement
e.set({element:r,dragging:!1,screenX:n.screenX,screenY:n.screenY,maxX:(t.inline?i.scrollWidth:a.offsetWidth)-2,maxY:(t.inline?i.scrollHeight:a.offsetHeight)-2,relX:n.pageX-o.x,relY:n.pageY-o.y,width:r.offsetWidth,height:r.offsetHeight,ghost:Tk(t,r,r.offsetWidth,r.offsetHeight)})}}var u,c}},Pk=function(e,t){return function(n){e.on((function(e){if(e.dragging){if(function(e,t,n){return t!==n&&!e.dom.isChildOf(t,n)&&!Rk(t)}(t,(a=t.selection,3===(u=a.getSel().getRangeAt(0).startContainer).nodeType?u.parentNode:u),e.element)){var r=(o=e.element,(i=o.cloneNode(!0)).removeAttribute("data-mce-selected"),i)
t.fire("drop",{clientX:n.clientX,clientY:n.clientY}).isDefaultPrevented()||t.undoManager.transact((function(){Ok(e.element),t.insertContent(t.dom.getOuterHTML(r)),t._selectionOverrides.hideFakeCaret()}))}t.fire("dragend")}var o,i,a,u})),Lk(e)}},Lk=function(e){e.on((function(e){Ok(e.ghost)})),e.clear()},Ik=function(e){var t=Nu(),n=gu.DOM,r=document,o=Bk(t,e),i=function(e,t){var n=no.throttle((function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0)
return t.on("remove",n.stop),function(r){return e.on((function(e){var o,i,a=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY))
if(!e.dragging&&a>10){if(t.fire("dragstart",{target:e.element}).isDefaultPrevented())return
e.dragging=!0,t.focus()}if(e.dragging){var u=function(e,t){return{pageX:t.pageX-e.relX,pageY:t.pageY+5}}(e,Ak(t,r))
o=e.ghost,i=t.getBody(),o.parentNode!==i&&i.appendChild(o),function(e,t,n,r,o,i){var a=0,u=0
e.style.left=t.pageX+"px",e.style.top=t.pageY+"px",t.pageX+n>o&&(a=t.pageX+n-o),t.pageY+r>i&&(u=t.pageY+r-i),e.style.width=n-a+"px",e.style.height=r-u+"px"}(e.ghost,u,e.width,e.height,e.maxX,e.maxY),n(r.clientX,r.clientY)}}))}}(t,e),a=Pk(t,e),u=function(e,t){return function(){e.on((function(e){e.dragging&&t.fire("dragend")})),Lk(e)}}(t,e)
e.on("mousedown",o),e.on("mousemove",i),e.on("mouseup",a),n.bind(r,"mousemove",i),n.bind(r,"mouseup",u),e.on("remove",(function(){n.unbind(r,"mousemove",i),n.unbind(r,"mouseup",u)})),e.on("keydown",(function(e){e.keyCode===rd.ESC&&u()}))},Mk=function(e){Ik(e),function(e){e.on("drop",(function(t){var n=void 0!==t.clientX?e.getDoc().elementFromPoint(t.clientX,t.clientY):null;(Rk(n)||"false"===e.dom.getContentEditableParent(n))&&t.preventDefault()}))}(e),function(e){return e.getParam("block_unsupported_drop",!0,"boolean")}(e)&&function(e){var t=function(t){if(!t.isDefaultPrevented()){var n=t.dataTransfer
n&&(z(n.types,"Files")||n.files.length>0)&&(t.preventDefault(),"drop"===t.type&&wy(e,"Dropped file type is not supported"))}},n=function(n){lm(e,n.target)&&t(n)},r=function(){var r=gu.DOM,o=e.dom,i=document,a=e.inline?e.getBody():e.getDoc(),u=["drop","dragover"]
V(u,(function(e){r.bind(i,e,n),o.bind(a,e,t)})),e.on("remove",(function(){V(u,(function(e){r.unbind(i,e,n),o.unbind(a,e,t)}))}))}
e.on("init",(function(){no.setEditorTimeout(e,r,0)}))}(e)},Fk=Vn,Uk=qn,zk=function(e,t){return Ql(e.getBody(),t)},Hk=function(e){var t,n=e.selection,r=e.dom,o=r.isBlock,i=e.getBody(),a=Is(e,i,o,(function(){return bm(e)})),u="sel-"+r.uniqueId(),c="data-mce-selected",s=function(e){return e!==i&&(Uk(e)||Wn(e))&&r.isChildOf(e,i)},f=function(e){return vg(e)||bg(e)||mg(e)||gg(e)},l=function(e){e&&n.setRng(e)},d=n.getRng,m=function(t,r,o,i){return void 0===i&&(i=!0),e.fire("ShowCaret",{target:r,direction:t,before:o}).isDefaultPrevented()?null:(i&&n.scrollIntoView(r,-1===t),a.show(o,r))},g=function(e){return Eo(e)||To(e)||Oo(e)},p=function(e){return g(e.startContainer)||g(e.endContainer)},v=function(t){var n=e.schema.getShortEndedElements(),o=r.createRng(),i=t.startContainer,a=t.startOffset,u=t.endContainer,c=t.endOffset
return be(n,i.nodeName.toLowerCase())?0===a?o.setStartBefore(i):o.setStartAfter(i):o.setStart(i,a),be(n,u.nodeName.toLowerCase())?0===c?o.setEndBefore(u):o.setEndAfter(u):o.setEnd(u,c),o},b=function(o){var i=o.cloneNode(!0),a=e.fire("ObjectSelected",{target:o,targetClone:i})
if(a.isDefaultPrevented())return null
var s=function(t,o,i){var a=e.$,c=Gr(At.fromDom(e.getBody()),"#"+u).fold((function(){return a([])}),(function(e){return a([e.dom])}))
0===c.length&&(c=a('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",u)).appendTo(e.getBody())
var s=r.createRng()
o===i&&xt.ie?(c.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(o),s.setStartAfter(c[0].firstChild.firstChild),s.setEndAfter(o)):(c.empty().append(bo).append(o).append(bo),s.setStart(c[0].firstChild,1),s.setEnd(c[0].lastChild,0)),c.css({top:r.getPos(t,e.getBody()).y}),c[0].focus()
var f=n.getSel()
return f.removeAllRanges(),f.addRange(s),s}(o,a.targetClone,i),f=At.fromDom(o)
return V(Iu(At.fromDom(e.getBody()),"*[data-mce-selected]"),(function(e){Ot(f,e)||tr(e,c)})),r.getAttrib(o,c)||o.setAttribute(c,"1"),t=o,x(),s},y=function(e,t){if(!e)return null
if(e.collapsed){if(!p(e)){var n=t?1:-1,o=cf(n,i,e),a=o.getNode(!t)
if(Us(a))return m(n,a,!!t&&!o.isAtEnd(),!1)
var u=o.getNode(t)
if(Us(u))return m(n,u,!t&&!o.isAtEnd(),!1)}return null}var c=e.startContainer,f=e.startOffset,l=e.endOffset
if(3===c.nodeType&&0===f&&Uk(c.parentNode)&&(c=c.parentNode,f=r.nodeIndex(c),c=c.parentNode),1!==c.nodeType)return null
if(l===f+1&&c===e.endContainer){var d=c.childNodes[f]
if(s(d))return b(d)}return null},C=function(){t&&t.removeAttribute(c),Gr(At.fromDom(e.getBody()),"#"+u).each(pn),t=null},x=function(){a.hide()}
return xt.ceFalse&&!Yv(e)&&function(){e.on("mouseup",(function(t){var n=d()
n.collapsed&&py(e,t.clientX,t.clientY)&&AC(e,n,!1).each(l)})),e.on("click",(function(t){var o=zk(e,t.target)
o&&(Uk(o)&&(t.preventDefault(),e.focus()),Fk(o)&&r.isChildOf(o,n.getNode())&&C())})),e.on("blur NewBlock",C),e.on("ResizeWindow FullscreenStateChanged",a.reposition)
var c=function(t,n){var i,a,u=r.getParent(t,o),c=r.getParent(n,o)
return!h(u)&&(!(t===c||!r.isChildOf(u,c)||!1!==Uk(zk(e,u)))||!r.isChildOf(c,u)&&(i=u,a=c,!(r.getParent(i,o)===r.getParent(a,o)))&&function(e){var t=e.firstChild
if(h(t))return!1
var n=_c.before(t)
if(Hn(n.getNode())&&1===e.childNodes.length)return!f(n)
var r=Sf(e).next(n)
return r&&!f(r)}(u))}
e.on("tap",(function(t){var n=t.target,r=zk(e,n)
Uk(r)?(t.preventDefault(),_C(e,r).each(y)):s(n)&&_C(e,n).each(y)}),!0),e.on("mousedown",(function(t){var o=t.target
if((o===i||"HTML"===o.nodeName||r.isChildOf(o,i))&&!1!==py(e,t.clientX,t.clientY)){var a=zk(e,o)
if(a)Uk(a)?(t.preventDefault(),_C(e,a).each(y)):(C(),Fk(a)&&t.shiftKey||Zl(t.clientX,t.clientY,n.getRng())||(x(),n.placeCaretAt(t.clientX,t.clientY)))
else if(s(o))_C(e,o).each(y)
else if(!1===Us(o)){C(),x()
var u=Jx(i,t.clientX,t.clientY)
if(u&&!c(o,u.node)){t.preventDefault()
var f=m(1,u.node,u.before,!1)
l(f),e.getBody().focus()}}}})),e.on("keypress",(function(e){rd.modifierPressed(e)||Uk(n.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(function(e){var n=e.range
if(t){if(!t.parentNode)return void(t=null);(n=n.cloneRange()).selectNode(t),e.range=n}})),e.on("SetSelectionRange",(function(e){e.range=v(e.range)
var t=y(e.range,e.forward)
t&&(e.range=t)})),e.on("AfterSetSelectionRange",(function(e){var t,n=e.range,o=n.startContainer.parentNode
p(n)||"mcepastebin"===o.id||x(),t=o,r.hasClass(t,"mce-offscreen-selection")||C()})),e.on("copy",(function(e){var t,n=e.clipboardData
if(!e.isDefaultPrevented()&&e.clipboardData&&!xt.ie){var o=(t=r.get(u))?t.getElementsByTagName("*")[0]:t
o&&(e.preventDefault(),n.clearData(),n.setData("text/html",o.outerHTML),n.setData("text/plain",o.outerText||o.innerText))}})),Mk(e),function(e){var t=Eu((function(){if(!e.removed&&e.getBody().contains(document.activeElement)){var t=e.selection.getRng()
if(t.collapsed){var n=RC(e,t,!1)
e.selection.setRng(n)}}}),0)
e.on("focus",(function(){t.throttle()})),e.on("blur",(function(){t.cancel()}))}(e),function(e){e.on("init",(function(){e.on("focusin",(function(t){var n=t.target
if(Wn(n)){var r=Ql(e.getBody(),n),o=qn(r)?r:n
e.selection.getNode()!==o&&_C(e,o).each((function(t){return e.selection.setRng(t)}))}}))}))}(e)}(),{showCaret:m,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(Bo(e),l(d()),n.scrollIntoView(e))},hideFakeCaret:x,destroy:function(){a.destroy(),t=null}}},jk=function(e){var t,n,r=Et.each,o=rd.BACKSPACE,i=rd.DELETE,a=e.dom,u=e.selection,c=e.parser,s=xt.gecko,f=xt.ie,l=xt.webkit,d="data:text/mce-internal,",m=f?"Text":"URL",g=function(t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}},p=function(e){return e.isDefaultPrevented()},h=function(){var t=function(e){var t=a.create("body"),n=e.cloneContents()
return t.appendChild(n),u.serializer.serialize(t,{format:"html"})}
e.on("keydown",(function(n){var r,u,c=n.keyCode
if(!p(n)&&(c===i||c===o)){if(r=e.selection.isCollapsed(),u=e.getBody(),r&&!a.isEmpty(u))return
if(!r&&!function(n){var r=t(n),o=a.createRng()
return o.selectNode(e.getBody()),r===t(o)}(e.selection.getRng()))return
n.preventDefault(),e.setContent(""),u.firstChild&&a.isBlock(u.firstChild)?e.selection.setCursorLocation(u.firstChild,0):e.selection.setCursorLocation(u,0),e.nodeChanged()}}))},v=function(){e.shortcuts.add("meta+a",null,"SelectAll")},b=function(){e.inline||a.bind(e.getDoc(),"mousedown mouseup",(function(t){var n
if(t.target===e.getDoc().documentElement)if(n=u.getRng(),e.getBody().focus(),"mousedown"===t.type){if(Eo(n.startContainer))return
u.placeCaretAt(t.clientX,t.clientY)}else u.setRng(n)}))},y=function(){Range.prototype.getClientRects||e.on("mousedown",(function(t){if(!p(t)&&"HTML"===t.target.nodeName){var n=e.getBody()
n.blur(),no.setEditorTimeout(e,(function(){n.focus()}))}}))},x=function(){e.on("click",(function(t){var n=t.target;/^(IMG|HR)$/.test(n.nodeName)&&"false"!==a.getContentEditableParent(n)&&(t.preventDefault(),e.selection.select(n),e.nodeChanged()),"A"===n.nodeName&&a.hasClass(n,"mce-item-anchor")&&(t.preventDefault(),u.select(n))}))},w=function(){e.on("keydown",(function(e){if(!p(e)&&e.keyCode===o&&u.isCollapsed()&&0===u.getRng().startOffset){var t=u.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))},S=function(){(function(e){return e.getParam("readonly")})(e)||e.on("BeforeExecCommand mousedown",(function(){g("StyleWithCSS",!1),g("enableInlineTableEditing",!1),gs(e)||g("enableObjectResizing",!1)}))},k=function(){e.on("SetContent ExecCommand",(function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||r(a.select("a"),(function(e){var t=e.parentNode,n=a.getRoot()
if(t.lastChild===e){for(;t&&!a.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return
t=t.parentNode}a.add(t,"br",{"data-mce-bogus":1})}}))}))},N=function(){e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")},E=function(){e.inline||e.on("keydown",(function(){document.activeElement===document.body&&e.getWin().focus()}))},_=function(){e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(function(t){var n
if("HTML"===t.target.nodeName){if(xt.ie>11)return void e.getBody().focus()
n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged()}})))},A=function(){xt.mac&&e.on("keydown",(function(t){!rd.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))}))},R=function(){e.on("click",(function(e){var t=e.target
do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")},D=function(){e.on("init",(function(){e.dom.bind(e.getBody(),"submit",(function(e){e.preventDefault()}))}))},T=function(){e.on("dragstart",(function(t){(function(t){var n,r
t.dataTransfer&&(e.selection.isCollapsed()&&"IMG"===t.target.tagName&&u.select(t.target),(n=e.selection.getContent()).length>0&&(r=d+escape(e.id)+","+escape(n),t.dataTransfer.setData(m,r)))})(t)})),e.on("drop",(function(t){if(!p(t)){var n=function(e){var t
return e.dataTransfer&&(t=e.dataTransfer.getData(m))&&t.indexOf(d)>=0?(t=t.substr(d.length).split(","),{id:unescape(t[0]),html:unescape(t[1])}):null}(t)
if(n&&n.id!==e.id){t.preventDefault()
var r=ud(t.x,t.y,e.getDoc())
u.setRng(r),o=n.html,i=!0,e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",!1,{content:o,internal:i}):e.execCommand("mceInsertContent",!1,o)}}var o,i}))},O=C
return Yv(e)?(l&&(b(),x(),D(),v(),xt.iOS&&(E(),_(),R())),s&&(y(),S(),N(),A())):(e.on("keydown",(function(t){var n,r
if(!p(t)&&t.keyCode===rd.BACKSPACE){var o=(n=u.getRng()).startContainer,i=n.startOffset,c=a.getRoot()
if(r=o,n.collapsed&&0===i){for(;r&&r.parentNode&&r.parentNode.firstChild===r&&r.parentNode!==c;)r=r.parentNode
"BLOCKQUOTE"===r.tagName&&(e.formatter.toggle("blockquote",null,r),(n=a.createRng()).setStart(o,0),n.setEnd(o,0),u.setRng(n))}}})),h(),xt.windowsPhone||e.on("keyup focusin mouseup",(function(e){rd.modifierPressed(e)||u.normalize()}),!0),l&&(b(),x(),es(e)&&e.on("init",(function(){g("DefaultParagraphSeparator",es(e))})),D(),w(),c.addNodeFilter("br",(function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),xt.iOS?(E(),_(),R()):v()),xt.ie>=11&&(_(),w()),xt.ie&&(v(),g("AutoUrlDetect",!1),T()),s&&(e.on("keydown",(function(t){if(!p(t)&&t.keyCode===o){if(!e.getBody().getElementsByTagName("hr").length)return
if(u.isCollapsed()&&0===u.getRng().startOffset){var n=u.getNode(),r=n.previousSibling
if("HR"===n.nodeName)return a.remove(n),void t.preventDefault()
r&&r.nodeName&&"hr"===r.nodeName.toLowerCase()&&(a.remove(r),t.preventDefault())}}})),y(),t=function(){var t=a.getAttribs(u.getStart().cloneNode(!1))
return function(){var n=u.getStart()
n!==e.getBody()&&(a.setAttrib(n,"style",null),r(t,(function(e){n.setAttributeNode(e.cloneNode(!0))})))}},n=function(){return!u.isCollapsed()&&a.getParent(u.getStart(),a.isBlock)!==a.getParent(u.getEnd(),a.isBlock)},e.on("keypress",(function(r){var o
if(!p(r)&&(8===r.keyCode||46===r.keyCode)&&n())return o=t(),e.getDoc().execCommand("delete",!1,null),o(),r.preventDefault(),!1})),a.bind(e.getDoc(),"cut",(function(r){var o
!p(r)&&n()&&(o=t(),no.setEditorTimeout(e,(function(){o()})))})),S(),k(),N(),A(),w())),{refreshContentEditable:O,isHidden:function(){if(!s||e.removed)return!1
var t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}}},Vk=gu.DOM,qk=function(e){return e.inline?e.getElement().nodeName.toLowerCase():void 0},$k=function(e){return pe(e,(function(e){return!1===p(e)}))},Wk=function(e){var t=e.settings,n=e.editorUpload.blobCache
return $k({allow_conditional_comments:t.allow_conditional_comments,allow_html_data_urls:t.allow_html_data_urls,allow_svg_data_urls:t.allow_svg_data_urls,allow_html_in_named_anchor:t.allow_html_in_named_anchor,allow_script_urls:t.allow_script_urls,allow_unsafe_link_target:t.allow_unsafe_link_target,convert_fonts_to_spans:t.convert_fonts_to_spans,fix_list_elements:t.fix_list_elements,font_size_legacy_values:t.font_size_legacy_values,forced_root_block:t.forced_root_block,forced_root_block_attrs:t.forced_root_block_attrs,padd_empty_with_br:t.padd_empty_with_br,preserve_cdata:t.preserve_cdata,remove_trailing_brs:t.remove_trailing_brs,inline_styles:t.inline_styles,root_name:qk(e),validate:!0,blob_cache:n,document:e.getDoc(),images_dataimg_filter:t.images_dataimg_filter})},Kk=function(e){var t=e.dom.getRoot()
e.inline||Hl(e)&&e.selection.getStart(!0)!==t||Pf(t).each((function(t){var n=t.getNode(),r=Pn(n)?Pf(n).getOr(t):t
xt.browser.isIE()?function(e,t){var n=At.fromDom(e.getBody()),r=(tm(e)?L.from(t):L.none()).map(nm).filter(em(n))
e.bookmark=r.isSome()?r:e.bookmark}(e,r.toRange()):e.selection.setRng(r.toRange())}))},Xk=function(e){e.bindPendingEventDelegates(),e.initialized=!0,function(e){e.fire("Init")}(e),e.focus(!0),Kk(e),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),function(e){e.settings.auto_focus&&no.setEditorTimeout(e,(function(){var t;(t=!0===e.settings.auto_focus?e:e.editorManager.get(e.settings.auto_focus)).destroyed||t.focus()}),100)}(e)},Yk=function(e){return e.inline?e.ui.styleSheetLoader:e.dom.styleSheetLoader},Gk=function(e){var t=Yk(e),n=ms(e),r=e.contentCSS,o=function(){t.unloadAll(r),e.inline||e.ui.styleSheetLoader.unloadAll(n)},i=function(){e.removed?o():e.on("remove",o)}
if(e.contentStyles.length>0){var a=""
Et.each(e.contentStyles,(function(e){a+=e+"\r\n"})),e.dom.addStyle(a)}var u=Qr.all(function(e,t,n){var r=[new Qr((function(n,r){return Yk(e).loadAll(t,n,r)}))]
return e.inline?r:r.concat([new Qr((function(t,r){return e.ui.styleSheetLoader.loadAll(n,t,r)}))])}(e,r,n)).then(i).catch(i)
return e.settings.content_style&&function(e,t){var n=At.fromDom(e.getBody()),r=an(on(n)),o=At.fromTag("style")
Jn(o,"type","text/css"),dn(o,At.fromText(t)),dn(r,o),e.on("remove",(function(){pn(o)}))}(e,e.settings.content_style),u},Jk=function(e){var t=e.settings,n=e.getDoc(),r=e.getBody();(function(e){e.fire("PreInit")})(e),t.browser_spellcheck||t.gecko_spellcheck||(n.body.spellcheck=!1,Vk.setAttrib(r,"spellcheck","false")),e.quirks=jk(e),function(e){e.fire("PostRender")}(e)
var o=function(e){return e.getParam("directionality",Su.isRtl()?"rtl":void 0)}(e)
void 0!==o&&(r.dir=o),t.protect&&e.on("BeforeSetContent",(function(e){Et.each(t.protect,(function(t){e.content=e.content.replace(t,(function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"}))}))})),e.on("SetContent",(function(){e.addVisual(e.getBody())})),e.on("compositionstart compositionend",(function(t){e.composing="compositionstart"===t.type}))},Qk=function(e){!0!==e.removed&&(function(e){Yv(e)||e.load({initial:!0,format:"html"}),e.startContent=e.getContent({format:"raw"})}(e),Xk(e))},Zk=function(e,t){var n=e.settings,r=e.getElement(),o=e.getDoc()
n.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline||(o.open(),o.write(e.iframeHTML),o.close()),e.inline&&(Vk.addClass(r,"mce-content-body"),e.contentDocument=o=document,e.contentWindow=window,e.bodyElement=r,e.contentAreaContainer=r)
var i=e.getBody()
i.disabled=!0,e.readonly=!!n.readonly,e.readonly||(e.inline&&"static"===Vk.getStyle(i,"position",!0)&&(i.style.position="relative"),i.contentEditable=e.getParam("content_editable_state",!0)),i.disabled=!1,e.editorUpload=Iy(e),e.schema=_i(n),e.dom=gu(o,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,hex_colors:n.force_hex_style_colors,update_styles:!0,root_element:e.inline?e.getBody():null,collect:function(){return e.inline},schema:e.schema,contentCssCors:ss(e),referrerPolicy:fs(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}}),e.parser=function(e){var t=Eb(Wk(e),e.schema)
return t.addAttributeFilter("src,href,style,tabindex",(function(t,n){for(var r,o,i=t.length,a=e.dom,u="data-mce-"+n;i--;)if((o=(r=t[i]).attr(n))&&!r.attr(u)){if(0===o.indexOf("data:")||0===o.indexOf("blob:"))continue
"style"===n?((o=a.serializeStyle(a.parseStyle(o),r.name)).length||(o=null),r.attr(u,o),r.attr(n,o)):"tabindex"===n?(r.attr(u,o),r.attr(n,null)):r.attr(u,e.convertURL(o,n,r.name))}})),t.addNodeFilter("script",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("type")||"no/type"
0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}})),e.settings.preserve_cdata&&t.addNodeFilter("#cdata",(function(t){for(var n=t.length;n--;){var r=t[n]
r.type=8,r.name="#comment",r.value="[CDATA["+e.dom.encode(r.value)+"]]"}})),t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(function(t){for(var n=t.length,r=e.schema.getNonEmptyElements();n--;){var o=t[n]
o.isEmpty(r)&&0===o.getAll("br").length&&(o.append(new Tm("br",1)).shortEnded=!0)}})),t}(e),e.serializer=Tb(function(e){var t=e.settings
return Ae(Ae({},Wk(e)),$k({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope,element_format:t.element_format,entities:t.entities,entity_encoding:t.entity_encoding,indent:t.indent,indent_after:t.indent_after,indent_before:t.indent_before,block_elements:t.block_elements,boolean_attributes:t.boolean_attributes,custom_elements:t.custom_elements,extended_valid_elements:t.extended_valid_elements,invalid_elements:t.invalid_elements,invalid_styles:t.invalid_styles,move_caret_before_on_enter_elements:t.move_caret_before_on_enter_elements,non_empty_elements:t.non_empty_elements,schema:t.schema,self_closing_elements:t.self_closing_elements,short_ended_elements:t.short_ended_elements,special:t.special,text_block_elements:t.text_block_elements,text_inline_elements:t.text_inline_elements,valid_children:t.valid_children,valid_classes:t.valid_classes,valid_elements:t.valid_elements,valid_styles:t.valid_styles,verify_html:t.verify_html,whitespace_elements:t.whitespace_elements}))}(e),e),e.selection=cb(e.dom,e.getWin(),e.serializer,e),e.annotator=Gl(e),e.formatter=Vy(e),e.undoManager=$y(e),e._nodeChangeDispatcher=new Sk(e),e._selectionOverrides=Hk(e),Pw(e),kk(e),Yv(e)||Ek(e)
var a=function(e){return Yv(e)?yu(null):wk(e)}(e)
Ow(e,a),function(e){es(e)&&e.on("NodeChange",E(Fw,e))}(e),Gy(e)
var u=Gv(e)
Jk(e),u.fold((function(){Gk(e).then((function(){return Qk(e)}))}),(function(t){e.setProgressState(!0),Gk(e).then((function(){t().then((function(t){e.setProgressState(!1),Qk(e)}),(function(t){e.notificationManager.open({type:"error",text:String(t)}),Qk(e)}))}))}))},eN=gu.DOM,tN=function(e){var t=function(e){return e.getParam("doctype","<!DOCTYPE html>")}(e)+"<html><head>";(function(e){return e.getParam("document_base_url","")})(e)!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
var n=function(e){return Qc(e,"body_id","tinymce")}(e),r=function(e){return Qc(e,"body_class","")}(e),o=e.translate(function(e){return e.getParam("iframe_aria_text","Rich Text Area. Press ALT-0 for help.","string")}(e))
return Zc(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+Zc(e)+'" />'),t+='</head><body id="'+n+'" class="mce-content-body '+r+'" data-id="'+e.id+'" aria-label="'+o+'"><br></body></html>'},nN=function(e,t){var n,r,o,i,a=e.translate("Rich Text Area"),u=(n=e.id,r=a,t.height,o=function(e){return e.getParam("iframe_attrs",{})}(e),i=At.fromTag("iframe"),Qn(i,o),Qn(i,{id:n+"_ifr",frameBorder:"0",allowTransparency:"true",title:r}),Ou(i,"tox-edit-area__iframe"),i).dom
u.onload=function(){u.onload=null,e.fire("load")}
var c=function(e,t){if(document.domain!==window.location.hostname&&xt.browser.isIE()){var n=Oy("mce")
e[n]=function(){Zk(e)}
var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()"
return eN.setAttrib(t,"src",r),!0}return!1}(e,u)
return e.contentAreaContainer=t.iframeContainer,e.iframeElement=u,e.iframeHTML=tN(e),eN.add(t.iframeContainer,u),c},rN=gu.DOM,oN=function(e,t,n){var r=by.get(n),o=by.urls[n]||e.documentBaseUrl.replace(/\/$/,"")
if(n=Et.trim(n),r&&-1===Et.inArray(t,n)){if(Et.each(by.dependencies(n),(function(n){oN(e,t,n)})),e.plugins[n])return
try{var i=new r(e,o,e.$)
e.plugins[n]=i,i.init&&(i.init(e,o),t.push(n))}catch(JE){(function(e,t,n){var r=Su.translate(["Failed to initialize plugin: {0}",t])
ed(e,"PluginLoadError",{message:r}),Ey(r,n),wy(e,r)})(e,n,JE)}}},iN=function(e){return e.replace(/^\-/,"")},aN=function(e){return{editorContainer:e,iframeContainer:e,api:{}}},uN=function(e){var t=e.getElement()
return e.inline?aN(null):function(e){var t=rN.create("div")
return rN.insertAfter(t,e),aN(t)}(t)},cN=function(e){var t=e.getElement()
return e.orgDisplay=t.style.display,f(hs(e))?function(e){return e.theme.renderUI()}(e):b(hs(e))?function(e){var t=e.getElement(),n=hs(e)(e,t)
return n.editorContainer.nodeType&&(n.editorContainer.id=n.editorContainer.id||e.id+"_parent"),n.iframeContainer&&n.iframeContainer.nodeType&&(n.iframeContainer.id=n.iframeContainer.id||e.id+"_iframecontainer"),n.height=n.iframeHeight?n.iframeHeight:t.offsetHeight,n}(e):uN(e)},sN=function(e){e.fire("ScriptsLoaded"),function(e){var t=Et.trim(os(e)),n=e.ui.registry.getAll().icons,r=Ae(Ae({},cy.get("default").icons),cy.get(t).icons)
fe(r,(function(t,r){be(n,r)||e.ui.registry.addIcon(r,t)}))}(e),function(e){var t=hs(e)
if(f(t)){e.settings.theme=iN(t)
var n=yy.get(t)
e.theme=new n(e,yy.urls[t]),e.theme.init&&e.theme.init(e,yy.urls[t]||e.documentBaseUrl.replace(/\/$/,""),e.$)}else e.theme={}}(e),function(e){var t=[]
Et.each(Cs(e).split(/[ ,]/),(function(n){oN(e,t,iN(n))}))}(e)
var t=cN(e);(function(e,t){var n={show:L.from(t.show).getOr(C),hide:L.from(t.hide).getOr(C),disable:L.from(t.disable).getOr(C),isDisabled:L.from(t.isDisabled).getOr(D),enable:function(){e.mode.isReadOnly()||L.from(t.enable).map(R)}}
e.ui=Ae(Ae({},e.ui),n)})(e,L.from(t.api).getOr({}))
var n={editorContainer:t.editorContainer,iframeContainer:t.iframeContainer}
return e.editorContainer=n.editorContainer?n.editorContainer:null,Ry(e),e.inline?Zk(e):function(e,t){var n=nN(e,t)
t.editorContainer&&(eN.get(t.editorContainer).style.display=e.orgDisplay,e.hidden=eN.isHidden(t.editorContainer)),e.getElement().style.display="none",eN.setAttrib(e.id,"aria-hidden","true"),n||Zk(e)}(e,n)},fN=gu.DOM,lN=function(e){return"-"===e.charAt(0)},dN=function(e,t){var n=ls(t),r=function(e){return e.getParam("language_url","","string")}(t)
if(!1===Su.hasCode(n)&&"en"!==n){var o=""!==r?r:t.editorManager.baseURL+"/langs/"+n+".js"
e.add(o,C,void 0,(function(){(function(e,t,n){Sy(e,"LanguageLoadError",ky("language",t,n))})(t,o,n)}))}},mN=function(e,t,n){return L.from(t).filter((function(e){return e.length>0&&!cy.has(e)})).map((function(t){return{url:e.editorManager.baseURL+"/icons/"+t+"/icons"+n+".js",name:L.some(t)}}))},gN=function(e,t,n){var r=mN(t,"default",n),o=function(e){return L.from(function(e){return e.getParam("icons_url","","string")}(e)).filter((function(e){return e.length>0})).map((function(e){return{url:e,name:L.none()}}))}(t).orThunk((function(){return mN(t,os(t),"")}))
V(function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n)
return t}([r,o]),(function(n){e.add(n.url,C,void 0,(function(){(function(e,t,n){Sy(e,"IconsLoadError",ky("icons",t,n))})(t,n.url,n.name.getOrUndefined())}))}))},pN=function(e,t){var n=bu.ScriptLoader;(function(e,t,n,r){var o=hs(t)
if(f(o)){if(!lN(o)&&!be(yy.urls,o)){var i=function(e){return e.getParam("theme_url")}(t)
i?yy.load(o,t.documentBaseURI.toAbsolute(i)):yy.load(o,"themes/"+o+"/theme"+n+".js")}e.loadQueue((function(){yy.waitFor(o,r)}))}else r()})(n,e,t,(function(){dN(n,e),gN(n,e,t),function(e,t){Et.each(function(e){return e.getParam("external_plugins")}(e),(function(t,n){by.load(n,t,C,void 0,(function(){Ny(e,t,n)})),e.settings.plugins+=" "+n})),Et.each(Cs(e).split(/[ ,]/),(function(n){if((n=Et.trim(n))&&!by.urls[n])if(lN(n)){n=n.substr(1,n.length)
var r=by.dependencies(n)
Et.each(r,(function(n){var r={prefix:"plugins/",resource:n,suffix:"/plugin"+t+".js"},o=by.createUrl(r,n)
by.load(o.resource,o,C,void 0,(function(){Ny(e,o.prefix+o.resource+o.suffix,o.resource)}))}))}else{var o={prefix:"plugins/",resource:n,suffix:"/plugin"+t+".js"}
by.load(n,o,C,void 0,(function(){Ny(e,o.prefix+o.resource+o.suffix,n)}))}}))}(e,t),n.loadQueue((function(){e.removed||sN(e)}),e,(function(){e.removed||sN(e)}))}))},hN=function(e){var t=e.id
Su.setCode(ls(e))
var n=function(){fN.unbind(window,"ready",n),e.render()}
if(Fi.Event.domLoaded){if(e.getElement()&&xt.contentEditable){var r=At.fromDom(e.getElement()),o=function(e){return X(e.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{})}(r)
e.on("remove",(function(){q(r.dom.attributes,(function(e){return tr(r,e.name)})),Qn(r,o)})),e.ui.styleSheetLoader=function(e,t){return oo.forElement(e,{contentCssCors:ys(t),referrerPolicy:fs(t)})}(r,e),!function(e){return e.getParam("inline")}(e)?(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden"):e.inline=!0
var i=e.getElement().form||fN.getParent(t,"form")
i&&(e.formElement=i,function(e){return e.getParam("hidden_input")}(e)&&!In(e.getElement())&&(fN.insertAfter(fN.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=function(t){e.fire(t.type,t)},fN.bind(i,"submit reset",e.formEventDelegate),e.on("reset",(function(){e.resetContent()})),!function(e){return e.getParam("submit_patch")}(e)||i.submit.nodeType||i.submit.length||i._mceOldSubmit||(i._mceOldSubmit=i.submit,i.submit=function(){return e.editorManager.triggerSave(),e.setDirty(!1),i._mceOldSubmit(i)})),e.windowManager=Cy(e),e.notificationManager=vy(e),function(e){return"xml"===e.getParam("encoding")}(e)&&e.on("GetContent",(function(e){e.save&&(e.content=fN.encode(e.content))})),function(e){return e.getParam("add_form_submit_trigger")}(e)&&e.on("submit",(function(){e.initialized&&e.save()})),function(e){return e.getParam("add_unload_trigger")}(e)&&(e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),pN(e,e.suffix)}}else fN.bind(window,"ready",n)},vN=function(e,t){return function(e,t){return Qv(e).editor.addVisual(t)}(e,t)},bN={"font-size":"size","font-family":"face"},yN=function(e,t,n){return fh(At.fromDom(n),(function(t){return function(t){return ir(t,e).orThunk((function(){return"font"===Lt(t)?ve(bN,e).bind((function(e){return er(t,e)})):L.none()}))}(t)}),(function(e){return Ot(At.fromDom(t),e)}))},CN=function(e){return function(t,n){return L.from(n).map(At.fromDom).filter(Ft).bind((function(n){return yN(e,t,n.dom).or(function(e,t){return L.from(gu.DOM.getStyle(t,e,!0))}(e,n.dom))})).getOr("")}},xN=CN("font-size"),wN=x((function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}),CN("font-family")),SN=function(e){return Pf(e.getBody()).map((function(e){var t=e.container()
return Mn(t)?t.parentNode:t}))},kN=function(e,t){return function(e){return L.from(e.selection.getRng()).bind((function(t){var n=e.getBody()
return t.startContainer===n&&0===t.startOffset?L.none():L.from(e.selection.getStart(!0))}))}(e).orThunk(E(SN,e)).map(At.fromDom).filter(Ft).bind(t)},NN=function(e,t){return kN(e,w(L.some,t))},EN=function(e,t){if(/^[0-9.]+$/.test(t)){var n=parseInt(t,10)
if(n>=1&&n<=7){var r=function(e){return Et.explode(e.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large"))}(e),o=function(e){return Et.explode(e.getParam("font_size_classes",""))}(e)
return o?o[n-1]||t:r[n-1]||t}return t}return t},_N=function(e){var t=e.split(/\s*,\s*/)
return j(t,(function(e){return-1===e.indexOf(" ")||Ie(e,'"')||Ie(e,"'")?e:"'"+e+"'"})).join(",")},AN=function(e,t){var n=function(e){if("string"!=typeof e){var t=Et.extend({paste:e.paste,data:{paste:e.paste}},e)
return{content:e.content,details:t}}return{content:e,details:{}}}(t);(function(e,t,n){Jv(e).editor.insertContent(t,n)})(e,n.content,n.details)},RN=Et.each,DN=Et.map,TN=Et.inArray,ON=function(){function e(e){this.commands={state:{},exec:{},value:{}},this.editor=e,this.setupCommands(e)}return e.prototype.execCommand=function(e,t,n,r){var o,i=!1,a=this
if(!a.editor.removed){var u
if("mcefocus"!==e.toLowerCase()&&(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus?(u=a.editor,am(u).each((function(e){return u.selection.setRng(e)}))):a.editor.focus()),(r=a.editor.fire("BeforeExecCommand",{command:e,ui:t,value:n})).isDefaultPrevented())return!1
var c=e.toLowerCase()
if(o=a.commands.exec[c])return o(c,t,n),a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
if(RN(this.editor.plugins,(function(r){if(r.execCommand&&r.execCommand(e,t,n))return a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),i=!0,!1})),i)return i
if(a.editor.theme&&a.editor.theme.execCommand&&a.editor.theme.execCommand(e,t,n))return a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
try{i=a.editor.getDoc().execCommand(e,t,n)}catch(s){}return!!i&&(a.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0)}},e.prototype.queryCommandState=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.state[e])return t(e)
try{return this.editor.getDoc().queryCommandState(e)}catch(n){}return!1}},e.prototype.queryCommandValue=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.value[e])return t(e)
try{return this.editor.getDoc().queryCommandValue(e)}catch(n){}}},e.prototype.addCommands=function(e,t){void 0===t&&(t="exec")
var n=this
RN(e,(function(e,r){RN(r.toLowerCase().split(","),(function(r){n.commands[t][r]=e}))}))},e.prototype.addCommand=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.exec[e]=function(e,o,i,a){return t.call(n||r.editor,o,i,a)}},e.prototype.queryCommandSupported=function(e){if(e=e.toLowerCase(),this.commands.exec[e])return!0
try{return this.editor.getDoc().queryCommandSupported(e)}catch(t){}return!1},e.prototype.addQueryStateHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.state[e]=function(){return t.call(n||r.editor)}},e.prototype.addQueryValueHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.value[e]=function(){return t.call(n||r.editor)}},e.prototype.hasCustomCommand=function(e){return e=e.toLowerCase(),!!this.commands.exec[e]},e.prototype.execNativeCommand=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=null),this.editor.getDoc().execCommand(e,t,n)},e.prototype.isFormatMatch=function(e){return this.editor.formatter.match(e)},e.prototype.toggleFormat=function(e,t){this.editor.formatter.toggle(e,t),this.editor.nodeChanged()},e.prototype.storeSelection=function(e){this.selectionBookmark=this.editor.selection.getBookmark(e)},e.prototype.restoreSelection=function(){this.editor.selection.moveToBookmark(this.selectionBookmark)},e.prototype.setupCommands=function(e){var t=this
this.addCommands({"mceResetDesignMode,mceBeginUndoLevel":C,"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},mceFocus:function(t,n,r){xm(e,r)},"Cut,Copy,Paste":function(n){var r,o=e.getDoc()
try{t.execNativeCommand(n)}catch(a){r=!0}if("paste"!==n||o.queryCommandEnabled(n)||(r=!0),r||!o.queryCommandSupported(n)){var i=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")
xt.mac&&(i=i.replace(/Ctrl\+/g,"⌘+")),e.notificationManager.open({text:i,type:"error"})}},unlink:function(){if(e.selection.isCollapsed()){var t=e.dom.getParent(e.selection.getStart(),"a")
t&&e.dom.remove(t,!0)}else e.formatter.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(n){var r=n.substring(7)
"full"===r&&(r="justify"),RN("left,center,right,justify".split(","),(function(t){r!==t&&e.formatter.remove("align"+t)})),"none"!==r&&t.toggleFormat("align"+r)},"InsertUnorderedList,InsertOrderedList":function(n){var r
t.execNativeCommand(n)
var o=e.dom.getParent(e.selection.getNode(),"ol,ul")
o&&(r=o.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName)&&(t.storeSelection(),e.dom.split(r,o),t.restoreSelection()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){t.toggleFormat(e)},"ForeColor,HiliteColor":function(e,n,r){t.toggleFormat(e,{value:r})},FontName:function(t,n,r){(function(e,t){var n=EN(e,t)
e.formatter.toggle("fontname",{value:_N(n)}),e.nodeChanged()})(e,r)},FontSize:function(t,n,r){(function(e,t){e.formatter.toggle("fontsize",{value:EN(e,t)}),e.nodeChanged()})(e,r)},LineHeight:function(t,n,r){(function(e,t){e.formatter.toggle("lineheight",{value:String(t)}),e.nodeChanged()})(e,r)},Lang:function(e,n,r){t.toggleFormat(e,{value:r.code,customValue:r.customCode})},RemoveFormat:function(t){e.formatter.remove(t)},mceBlockQuote:function(){t.toggleFormat("blockquote")},FormatBlock:function(e,n,r){return t.toggleFormat(r||"p")},mceCleanup:function(){var t=e.selection.getBookmark()
e.setContent(e.getContent()),e.selection.moveToBookmark(t)},mceRemoveNode:function(n,r,o){var i=o||e.selection.getNode()
i!==e.getBody()&&(t.storeSelection(),e.dom.remove(i,!0),t.restoreSelection())},mceSelectNodeDepth:function(t,n,r){var o=0
e.dom.getParent(e.selection.getNode(),(function(t){if(1===t.nodeType&&o++===r)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:function(t,n,r){e.selection.select(r)},mceInsertContent:function(t,n,r){AN(e,r)},mceInsertRawHTML:function(t,n,r){e.selection.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,(function(){return r})))},mceInsertNewLine:function(t,n,r){ak(e,r)},mceToggleFormat:function(e,n,r){t.toggleFormat(r)},mceSetContent:function(t,n,r){e.setContent(r)},"Indent,Outdent":function(t){Rw(e,t)},mceRepaint:C,InsertHorizontalRule:function(){e.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual,e.addVisual()},mceReplaceContent:function(t,n,r){e.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceInsertLink:function(t,n,r){"string"==typeof r&&(r={href:r})
var o=e.dom.getParent(e.selection.getNode(),"a")
r.href=r.href.replace(/ /g,"%20"),o&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,o)},selectAll:function(){var t=e.dom.getParent(e.selection.getStart(),Vn)
if(t){var n=e.dom.createRng()
n.selectNodeContents(t),e.selection.setRng(n)}},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,n,r){return KS(e,r),!0}})
var n=function(t){return function(){var n=e.selection,r=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks(),o=DN(r,(function(n){return!!e.formatter.matchNode(n,t)}))
return-1!==TN(o,!0)}}
t.addCommands({JustifyLeft:n("alignleft"),JustifyCenter:n("aligncenter"),JustifyRight:n("alignright"),JustifyFull:n("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return t.isFormatMatch(e)},mceBlockQuote:function(){return t.isFormatMatch("blockquote")},Outdent:function(){return Ew(e)},"InsertUnorderedList,InsertOrderedList":function(t){var n=e.dom.getParent(e.selection.getNode(),"ul,ol")
return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state"),t.addCommands({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}}),t.addQueryValueHandler("FontName",(function(){return function(e){return NN(e,(function(t){return wN(e.getBody(),t.dom)})).getOr("")}(e)}),this),t.addQueryValueHandler("FontSize",(function(){return function(e){return NN(e,(function(t){return xN(e.getBody(),t.dom)})).getOr("")}(e)}),this),t.addQueryValueHandler("LineHeight",(function(){return function(e){return NN(e,(function(t){var n=At.fromDom(e.getBody())
return fh(t,(function(e){return ir(e,"line-height")}),E(Ot,n)).getOrThunk((function(){var e=parseFloat(rr(t,"line-height")),n=parseFloat(rr(t,"font-size"))
return String(e/n)}))})).getOr("")}(e)}),this)},e}(),BN="data-mce-contenteditable",PN=function(e,t,n){var r,o
Pu(e,t)&&!1===n?(o=t,Ru(r=e)?r.dom.classList.remove(o):Tu(r,o),Bu(r)):n&&Ou(e,t)},LN=function(e,t,n){try{e.getDoc().execCommand(t,!1,String(n))}catch(r){}},IN=function(e,t){e.dom.contentEditable=t?"true":"false"},MN=function(e,t){var n=At.fromDom(e.getBody())
PN(n,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),function(e){L.from(e.selection.getNode()).each((function(e){e.removeAttribute("data-mce-selected")}))}(e),e.readonly=!0,IN(n,!1),V(Iu(n,'*[contenteditable="true"]'),(function(e){Jn(e,BN,"true"),IN(e,!1)}))):(e.readonly=!1,IN(n,!0),function(e){V(Iu(e,'*[data-mce-contenteditable="true"]'),(function(e){tr(e,BN),IN(e,!0)}))}(n),LN(e,"StyleWithCSS",!1),LN(e,"enableInlineTableEditing",!1),LN(e,"enableObjectResizing",!1),ym(e)&&e.focus(),function(e){e.selection.setRng(e.selection.getRng())}(e),e.nodeChanged())},FN=function(e){return e.readonly},UN=function(e){e.parser.addAttributeFilter("contenteditable",(function(t){FN(e)&&V(t,(function(e){e.attr(BN,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(BN,(function(t){FN(e)&&V(t,(function(e){e.attr("contenteditable",e.attr(BN))}))})),e.serializer.addTempAttr(BN)},zN=function(e,t){if(function(e){return"click"===e.type}(t)&&!rd.metaKeyPressed(t)){var n=At.fromDom(t.target);(function(e,t){return Jr(t,"a",(function(t){return Ot(t,At.fromDom(e.getBody()))})).bind((function(e){return er(e,"href")}))})(e,n).each((function(n){if(t.preventDefault(),/^#/.test(n)){var r=e.dom.select(n+',[name="'+((Ie(o=n,i="#")?function(e,t){return e.substring(t)}(o,i.length):o)+'"]'))
r.length&&e.selection.scrollIntoView(r[0],!0)}else window.open(n,"_blank","rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")
var o,i}))}},HN=Et.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," "),jN=function(){function e(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||D}return e.isNative=function(e){return!!HN[e.toLowerCase()]},e.prototype.fire=function(e,t){var n=e.toLowerCase(),r=Oi(n,t||{},this.scope)
this.settings.beforeFire&&this.settings.beforeFire(r)
var o=this.bindings[n]
if(o)for(var i=0,a=o.length;i<a;i++){var u=o[i]
if(!u.removed){if(u.once&&this.off(n,u.func),r.isImmediatePropagationStopped())return r
if(!1===u.func.call(this.scope,r))return r.preventDefault(),r}}return r},e.prototype.on=function(e,t,n,r){if(!1===t&&(t=D),t){var o={func:t,removed:!1}
r&&Et.extend(o,r)
for(var i=e.toLowerCase().split(" "),a=i.length;a--;){var u=i[a],c=this.bindings[u]
c||(c=[],this.toggleEvent(u,!0)),c=n?Re([o],c,!0):Re(Re([],c,!0),[o],!1),this.bindings[u]=c}}return this},e.prototype.off=function(e,t){var n=this
if(e)for(var r=e.toLowerCase().split(" "),o=r.length;o--;){var i=r[o],a=this.bindings[i]
if(!i)return fe(this.bindings,(function(e,t){n.toggleEvent(t,!1),delete n.bindings[t]})),this
if(a){if(t){var u=$(a,(function(e){return e.func===t}))
a=u.fail,this.bindings[i]=a,V(u.pass,(function(e){e.removed=!0}))}else a.length=0
a.length||(this.toggleEvent(e,!1),delete this.bindings[i])}}else fe(this.bindings,(function(e,t){n.toggleEvent(t,!1)})),this.bindings={}
return this},e.prototype.once=function(e,t,n){return this.on(e,t,n,{once:!0})},e.prototype.has=function(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)},e}(),VN=function(e){return e._eventDispatcher||(e._eventDispatcher=new jN({scope:e,toggleEvent:function(t,n){jN.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher},qN={fire:function(e,t,n){var r=this
if(r.removed&&"remove"!==e&&"detach"!==e)return t
var o=VN(r).fire(e,t)
if(!1!==n&&r.parent)for(var i=r.parent();i&&!o.isPropagationStopped();)i.fire(e,o,!1),i=i.parent()
return o},on:function(e,t,n){return VN(this).on(e,t,n)},off:function(e,t){return VN(this).off(e,t)},once:function(e,t){return VN(this).once(e,t)},hasEventListeners:function(e){return VN(this).has(e)}},$N=gu.DOM,WN=function(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
var n=ps(e)
return n?(e.eventRoot||(e.eventRoot=$N.select(n)[0]),e.eventRoot):e.getBody()},KN=function(e,t,n){!function(e){return!e.hidden&&!FN(e)}(e)?FN(e)&&zN(e,n):e.fire(t,n)},XN=function(e,t){var n
if(e.delegates||(e.delegates={}),!e.delegates[t]&&!e.removed){var r=WN(e,t)
if(ps(e)){if(Ix||(Ix={},e.editorManager.on("removeEditor",(function(){e.editorManager.activeEditor||Ix&&(fe(Ix,(function(t,n){e.dom.unbind(WN(e,n))})),Ix=null)}))),Ix[t])return
n=function(n){for(var r=n.target,o=e.editorManager.get(),i=o.length;i--;){var a=o[i].getBody();(a===r||$N.isChildOf(r,a))&&KN(o[i],t,n)}},Ix[t]=n,$N.bind(r,t,n)}else n=function(n){KN(e,t,n)},$N.bind(r,t,n),e.delegates[t]=n}},YN=Ae(Ae({},qN),{bindPendingEventDelegates:function(){var e=this
Et.each(e._pendingNativeEvents,(function(t){XN(e,t)}))},toggleNativeEvent:function(e,t){var n=this
"focus"!==e&&"blur"!==e&&(n.removed||(t?n.initialized?XN(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(WN(n,e),e,n.delegates[e]),delete n.delegates[e])))},unbindAllNativeEvents:function(){var e=this,t=e.getBody(),n=e.dom
e.delegates&&(fe(e.delegates,(function(t,n){e.dom.unbind(WN(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}}),GN=["design","readonly"],JN=function(e,t,n,r){var o=n[t.get()],i=n[r]
try{i.activate()}catch(JE){return void console.error("problem while activating editor mode "+r+":",JE)}o.deactivate(),o.editorReadOnly!==i.editorReadOnly&&MN(e,i.editorReadOnly),t.set(r),function(e,t){e.fire("SwitchMode",{mode:t})}(e,r)},QN=function(e){var t=yu("design"),n=yu({design:{activate:C,deactivate:C,editorReadOnly:!1},readonly:{activate:C,deactivate:C,editorReadOnly:!0}})
return function(e){e.serializer?UN(e):e.on("PreInit",(function(){UN(e)}))}(e),function(e){e.on("ShowCaret",(function(t){FN(e)&&t.preventDefault()})),e.on("ObjectSelected",(function(t){FN(e)&&t.preventDefault()}))}(e),{isReadOnly:function(){return FN(e)},set:function(r){return function(e,t,n,r){if(r!==n.get()){if(!be(t,r))throw new Error("Editor mode '"+r+"' is invalid")
e.initialized?JN(e,n,t,r):e.on("init",(function(){return JN(e,n,t,r)}))}}(e,n.get(),t,r)},get:function(){return t.get()},register:function(e,t){n.set(function(e,t,n){var r
if(z(GN,t))throw new Error("Cannot override default mode "+t)
return Ae(Ae({},e),((r={})[t]=Ae(Ae({},n),{deactivate:function(){try{n.deactivate()}catch(JE){console.error("problem while deactivating editor mode "+t+":",JE)}}}),r))}(n.get(),e,t))}}},ZN=Et.each,eE=Et.explode,tE={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},nE=Et.makeMap("alt,ctrl,shift,meta,access"),rE=function(e){var t,n={}
ZN(eE(e.toLowerCase(),"+"),(function(e){e in nE?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=tE[e]||e.toUpperCase().charCodeAt(0))}))
var r=[n.keyCode]
for(t in nE)n[t]?r.push(t):n[t]=!1
return n.id=r.join(","),n.access&&(n.alt=!0,xt.mac?n.ctrl=!0:n.shift=!0),n.meta&&(xt.mac?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n},oE=function(){function e(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e
var t=this
e.on("keyup keypress keydown",(function(e){!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(ZN(t.shortcuts,(function(n){if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}return e.prototype.add=function(e,t,n,r){var o=this,i=o.normalizeCommandFunc(n)
return ZN(eE(Et.trim(e)),(function(e){var n=o.createShortcut(e,t,i,r)
o.shortcuts[n.id]=n})),!0},e.prototype.remove=function(e){var t=this.createShortcut(e)
return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)},e.prototype.normalizeCommandFunc=function(e){var t=this,n=e
return"string"==typeof n?function(){t.editor.execCommand(n,!1,null)}:Et.isArray(n)?function(){t.editor.execCommand(n[0],n[1],n[2])}:n},e.prototype.createShortcut=function(e,t,n,r){var o=Et.map(eE(e,">"),rE)
return o[o.length-1]=Et.extend(o[o.length-1],{func:n,scope:r||this.editor}),Et.extend(o[0],{desc:this.editor.translate(t),subpatterns:o.slice(1)})},e.prototype.hasModifier=function(e){return e.altKey||e.ctrlKey||e.metaKey},e.prototype.isFunctionKey=function(e){return"keydown"===e.type&&e.keyCode>=112&&e.keyCode<=123},e.prototype.matchShortcut=function(e,t){return!!t&&(t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&(t.alt===e.altKey&&t.shift===e.shiftKey&&(!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0))))},e.prototype.executeShortcutAction=function(e){return e.func?e.func.call(e.scope):null},e}(),iE=function(){var e=function(){var e={},t={},n={},r={},o={},i={},a={},u=function(e,t){return function(n,r){return e[n.toLowerCase()]=Ae(Ae({},r),{type:t})}}
return{addButton:u(e,"button"),addGroupToolbarButton:u(e,"grouptoolbarbutton"),addToggleButton:u(e,"togglebutton"),addMenuButton:u(e,"menubutton"),addSplitButton:u(e,"splitbutton"),addMenuItem:u(t,"menuitem"),addNestedMenuItem:u(t,"nestedmenuitem"),addToggleMenuItem:u(t,"togglemenuitem"),addAutocompleter:u(n,"autocompleter"),addContextMenu:u(o,"contextmenu"),addContextToolbar:u(i,"contexttoolbar"),addContextForm:u(i,"contextform"),addSidebar:u(a,"sidebar"),addIcon:function(e,t){return r[e.toLowerCase()]=t},getAll:function(){return{buttons:e,menuItems:t,icons:r,popups:n,contextMenus:o,contextToolbars:i,sidebars:a}}}}()
return{addAutocompleter:e.addAutocompleter,addButton:e.addButton,addContextForm:e.addContextForm,addContextMenu:e.addContextMenu,addContextToolbar:e.addContextToolbar,addIcon:e.addIcon,addMenuButton:e.addMenuButton,addMenuItem:e.addMenuItem,addNestedMenuItem:e.addNestedMenuItem,addSidebar:e.addSidebar,addSplitButton:e.addSplitButton,addToggleButton:e.addToggleButton,addGroupToolbarButton:e.addGroupToolbarButton,addToggleMenuItem:e.addToggleMenuItem,getAll:e.getAll}},aE=gu.DOM,uE=Et.extend,cE=Et.each,sE=Et.resolve,fE=xt.ie,lE=function(){function e(e,t,n){var r=this
this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,uE(this,YN),this.settings=iy(this,e,this.documentBaseUrl,n.defaultSettings,t),this.settings.suffix&&(n.suffix=this.settings.suffix),this.suffix=n.suffix,this.settings.base_url&&n._setBaseUrl(this.settings.base_url),this.baseUri=n.baseURI,this.settings.referrer_policy&&(bu.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),gu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),ku.languageLoad=this.settings.language_load,ku.baseURL=n.baseURL,this.id=e,this.setDirty(!1),this.documentBaseURI=new Um(this.settings.document_base_url,{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=!!this.settings.inline,this.shortcuts=new oE(this),this.editorCommands=new ON(this),this.settings.cache_suffix&&(xt.cacheSuffix=this.settings.cache_suffix.replace(/^[\?\&]+/,"")),this.ui={registry:iE(),styleSheetLoader:void 0,show:C,hide:C,enable:C,disable:C,isDisabled:D}
var o=QN(this)
this.mode=o,this.setMode=o.set,n.fire("SetupEditor",{editor:this}),this.execCallback("setup",this),this.$=uu.overrideDefaults((function(){return{context:r.inline?r.getBody():r.getDoc(),element:r.getBody()}}))}return e.prototype.render=function(){hN(this)},e.prototype.focus=function(e){this.execCommand("mceFocus",!1,e)},e.prototype.hasFocus=function(){return bm(this)},e.prototype.execCallback=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r,o=this,i=o.settings[e]
if(i)return o.callbackLookup&&(r=o.callbackLookup[e])&&(i=r.func,r=r.scope),"string"==typeof i&&(r=(r=i.replace(/\.\w+$/,""))?sE(r):0,i=sE(i),o.callbackLookup=o.callbackLookup||{},o.callbackLookup[e]={func:i,scope:r}),i.apply(r||o,t)},e.prototype.translate=function(e){return Su.translate(e)},e.prototype.getParam=function(e,t,n){return uy(this,e,t,n)},e.prototype.hasPlugin=function(e,t){return!!z(Cs(this).split(/[ ,]/),e)&&(!t||void 0!==by.get(e))},e.prototype.nodeChanged=function(e){this._nodeChangeDispatcher.nodeChanged(e)},e.prototype.addCommand=function(e,t,n){this.editorCommands.addCommand(e,t,n)},e.prototype.addQueryStateHandler=function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},e.prototype.addQueryValueHandler=function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},e.prototype.addShortcut=function(e,t,n,r){this.shortcuts.add(e,t,n,r)},e.prototype.execCommand=function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},e.prototype.queryCommandState=function(e){return this.editorCommands.queryCommandState(e)},e.prototype.queryCommandValue=function(e){return this.editorCommands.queryCommandValue(e)},e.prototype.queryCommandSupported=function(e){return this.editorCommands.queryCommandSupported(e)},e.prototype.show=function(){var e=this
e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable="true":(aE.show(e.getContainer()),aE.hide(e.id)),e.load(),e.fire("show"))},e.prototype.hide=function(){var e=this,t=e.getDoc()
e.hidden||(fE&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(aE.hide(e.getContainer()),aE.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},e.prototype.isHidden=function(){return!!this.hidden},e.prototype.setProgressState=function(e,t){this.fire("ProgressState",{state:e,time:t})},e.prototype.load=function(e){var t,n=this,r=n.getElement()
if(n.removed)return""
if(r){(e=e||{}).load=!0
var o=In(r)?r.value:r.innerHTML
return t=n.setContent(o,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,t}},e.prototype.save=function(e){var t,n,r=this,o=r.getElement()
if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,In(o)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=aE.getParent(r.id,"form"))&&cE(n.elements,(function(e){if(e.name===r.id)return e.value=t,!1}))),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},e.prototype.setContent=function(e,t){return Bb(this,e,t)},e.prototype.getContent=function(e){return Ob(this,e)},e.prototype.insertContent=function(e,t){t&&(e=uE({content:e},t)),this.execCommand("mceInsertContent",!1,e)},e.prototype.resetContent=function(e){void 0===e?Bb(this,this.startContent,{format:"raw"}):Bb(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()},e.prototype.isDirty=function(){return!this.isNotDirty},e.prototype.setDirty=function(e){var t=!this.isNotDirty
this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},e.prototype.getContainer=function(){var e=this
return e.container||(e.container=aE.get(e.editorContainer||e.id+"_parent")),e.container},e.prototype.getContentAreaContainer=function(){return this.contentAreaContainer},e.prototype.getElement=function(){return this.targetElm||(this.targetElm=aE.get(this.id)),this.targetElm},e.prototype.getWin=function(){var e,t=this
return t.contentWindow||(e=t.iframeElement)&&(t.contentWindow=e.contentWindow),t.contentWindow},e.prototype.getDoc=function(){var e,t=this
return t.contentDocument||(e=t.getWin())&&(t.contentDocument=e.document),t.contentDocument},e.prototype.getBody=function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},e.prototype.convertURL=function(e,t,n){var r=this,o=r.settings
return o.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!o.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:o.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,o.remove_script_host)},e.prototype.addVisual=function(e){vN(this,e)},e.prototype.remove=function(){Ib(this)},e.prototype.destroy=function(e){Mb(this,e)},e.prototype.uploadImages=function(e){return this.editorUpload.uploadImages(e)},e.prototype._scanForImages=function(){return this.editorUpload.scanForImages()},e.prototype.addButton=function(){throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")},e.prototype.addSidebar=function(){throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")},e.prototype.addMenuItem=function(){throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")},e.prototype.addContextToolbar=function(){throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")},e}(),dE=gu.DOM,mE=Et.explode,gE=Et.each,pE=Et.extend,hE=0,vE=!1,bE=[],yE=[],CE=function(e){var t=e.type
gE(kE.get(),(function(n){switch(t){case"scroll":n.fire("ScrollWindow",e)
break
case"resize":n.fire("ResizeWindow",e)}}))},xE=function(e){e!==vE&&(e?uu(window).on("resize scroll",CE):uu(window).off("resize scroll",CE),vE=e)},wE=function(e){var t=yE
delete bE[e.id]
for(var n=0;n<bE.length;n++)if(bE[n]===e){bE.splice(n,1)
break}return yE=W(yE,(function(t){return e!==t})),kE.activeEditor===e&&(kE.activeEditor=yE.length>0?yE[0]:null),kE.focusedEditor===e&&(kE.focusedEditor=null),t.length!==yE.length},SE="CSS1Compat"!==document.compatMode,kE=Ae(Ae({},qN),{baseURI:null,baseURL:null,defaultSettings:{},documentBaseURL:null,suffix:null,$:uu,majorVersion:"5",minorVersion:"10.2",releaseDate:"2021-11-17",editors:bE,i18n:Su,activeEditor:null,focusedEditor:null,settings:{},setup:function(){var e,t,n=this,r=""
t=Um.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/"))
var o,i=window.tinymce||window.tinyMCEPreInit
if(i)e=i.base||i.baseURL,r=i.suffix
else{for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var c
if(""!==(c=a[u].src||"")){var s=c.substring(c.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(c)){-1!==s.indexOf(".min")&&(r=".min"),e=c.substring(0,c.lastIndexOf("/"))
break}}}if(!e&&document.currentScript)-1!==(c=document.currentScript.src).indexOf(".min")&&(r=".min"),e=c.substring(0,c.lastIndexOf("/"))}n.baseURL=new Um(t).toAbsolute(e),n.documentBaseURL=t,n.baseURI=new Um(n.baseURL),n.suffix=r,(o=n).on("AddEditor",E(dm,o)),o.on("RemoveEditor",E(mm,o))},overrideDefaults:function(e){var t=e.base_url
t&&this._setBaseUrl(t)
var n=e.suffix
e.suffix&&(this.suffix=n),this.defaultSettings=e
var r=e.plugin_base_urls
void 0!==r&&fe(r,(function(e,t){ku.PluginManager.urls[t]=e}))},init:function(e){var t,n=this,r=Et.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," "),o=function(e){var t=e.id
return t||(t=ve(e,"name").filter((function(e){return!dE.get(e)})).getOrThunk(dE.uniqueId),e.setAttribute("id",t)),t},i=function(e,t){return t.constructor===RegExp?t.test(e.className):dE.hasClass(e,t)},a=function(e){t=e},u=function(){var t,c=0,s=[],f=function(e,r,o){var i=new lE(e,r,n)
s.push(i),i.on("init",(function(){++c===t.length&&a(s)})),i.targetElm=i.targetElm||o,i.render()}
dE.unbind(window,"ready",u),function(t){var r=e[t]
if(r)r.apply(n,[])}("onpageload"),t=uu.unique(function(e){var t=[]
if(xt.browser.isIE()&&xt.browser.version.major<11)return Ey("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[]
if(SE)return Ey("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]
if(e.types)return gE(e.types,(function(e){t=t.concat(dE.select(e.selector))})),t
if(e.selector)return dE.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":var n=e.elements||""
n.length>0&&gE(mE(n),(function(e){var n=dE.get(e)
n?t.push(n):gE(document.forms,(function(n){gE(n.elements,(function(n){n.name===e&&(e="mce_editor_"+hE++,dE.setAttrib(n,"id",e),t.push(n))}))}))}))
break
case"textareas":case"specific_textareas":gE(dE.select("textarea"),(function(n){e.editor_deselector&&i(n,e.editor_deselector)||e.editor_selector&&!i(n,e.editor_selector)||t.push(n)}))}return t}(e)),e.types?gE(e.types,(function(n){Et.each(t,(function(t){return!dE.is(t,n.selector)||(f(o(t),pE({},e,n),t),!1)}))})):(Et.each(t,(function(e){var t;(t=n.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(wE(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)})),0===(t=Et.grep(t,(function(e){return!n.get(e.id)}))).length?a([]):gE(t,(function(t){!function(e,t){return e.inline&&t.tagName.toLowerCase()in r}(e,t)?f(o(t),e,t):Ey("Could not initialize inline editor on invalid inline target element",t)})))}
return n.settings=e,dE.bind(window,"ready",u),new Qr((function(e){t?e(t):a=function(t){e(t)}}))},get:function(e){return 0===arguments.length?yE.slice(0):f(e)?G(yE,(function(t){return t.id===e})).getOr(null):y(e)&&yE[e]?yE[e]:null},add:function(e){var t=this
return bE[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(bE[e.id]=e),bE.push(e),yE.push(e)),xE(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),Mx||(Mx=function(e){var n=t.fire("BeforeUnload")
if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",Mx))),e},createEditor:function(e,t){return this.add(new lE(e,t,this))},remove:function(e){var t,n,r=this
if(e){if(!f(e))return n=e,m(r.get(n.id))?null:(wE(n)&&r.fire("RemoveEditor",{editor:n}),0===yE.length&&window.removeEventListener("beforeunload",Mx),n.remove(),xE(yE.length>0),n)
gE(dE.select(e),(function(e){(n=r.get(e.id))&&r.remove(n)}))}else for(t=yE.length-1;t>=0;t--)r.remove(yE[t])},execCommand:function(e,t,n){var r=this,o=r.get(n)
switch(e){case"mceAddEditor":return r.get(n)||new lE(n,r.settings,r).render(),!0
case"mceRemoveEditor":return o&&o.remove(),!0
case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(r.execCommand("mceAddEditor",!1,n),!0)}return!!r.activeEditor&&r.activeEditor.execCommand(e,t,n)},triggerSave:function(){gE(yE,(function(e){e.save()}))},addI18n:function(e,t){Su.add(e,t)},translate:function(e){return Su.translate(e)},setActive:function(e){var t=this.activeEditor
this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl:function(e){this.baseURL=new Um(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new Um(this.baseURL)}})
kE.setup()
var NE,EE,_E,AE,RE=Math.min,DE=Math.max,TE=Math.round,OE=function(e,t,n){var r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,c=t.h,s=(n||"").split("")
return"b"===s[0]&&(o+=c),"r"===s[1]&&(r+=u),"c"===s[0]&&(o+=TE(c/2)),"c"===s[1]&&(r+=TE(u/2)),"b"===s[3]&&(o-=a),"r"===s[4]&&(r-=i),"c"===s[3]&&(o-=TE(a/2)),"c"===s[4]&&(r-=TE(i/2)),BE(r,o,i,a)},BE=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},PE={inflate:function(e,t,n){return BE(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:OE,findBestRelativePosition:function(e,t,n,r){var o,i
for(i=0;i<r.length;i++)if((o=OE(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i]
return null},intersect:function(e,t){var n=DE(e.x,t.x),r=DE(e.y,t.y),o=RE(e.x+e.w,t.x+t.w),i=RE(e.y+e.h,t.y+t.h)
return o-n<0||i-r<0?null:BE(n,r,o-n,i-r)},clamp:function(e,t,n){var r=e.x,o=e.y,i=e.x+e.w,a=e.y+e.h,u=t.x+t.w,c=t.y+t.h,s=DE(0,t.x-r),f=DE(0,t.y-o),l=DE(0,i-u),d=DE(0,a-c)
return r+=s,o+=f,n&&(i+=s,a+=f,r-=l,o-=d),BE(r,o,(i-=l)-r,(a-=d)-o)},create:BE,fromClientRect:function(e){return BE(e.left,e.top,e.width,e.height)}},LE=(NE={},EE={},{load:function(e,t){var n='Script at URL "'+t+'" failed to load',r='Script at URL "'+t+"\" did not call `tinymce.Resource.add('"+e+"', data)` within 1 second"
if(void 0!==NE[e])return NE[e]
var o=new Qr((function(o,i){var a=function(e,t,n){void 0===n&&(n=1e3)
var r=!1,o=null,i=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
r||(r=!0,null!==o&&(clearTimeout(o),o=null),e.apply(null,t))}},a=i(e),u=i(t)
return{start:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
r||null!==o||(o=setTimeout((function(){return u.apply(null,e)}),n))},resolve:a,reject:u}}(o,i)
EE[e]=a.resolve,bu.ScriptLoader.loadScript(t,(function(){return a.start(r)}),(function(){return a.reject(n)}))}))
return NE[e]=o,o},add:function(e,t){void 0!==EE[e]&&(EE[e](t),delete EE[e]),NE[e]=Qr.resolve(t)}}),IE=Et.each,ME=Et.extend,FE=function(){}
FE.extend=_E=function(e){var t=this.prototype,n=function(){var e,t,n,r=this
if(!AE&&(r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(r,arguments)},r=function(){return this}
AE=!0
var o=new this
return AE=!1,e.Mixins&&(IE(e.Mixins,(function(t){for(var n in t)"init"!==n&&(e[n]=t[n])})),t.Mixins&&(e.Mixins=t.Mixins.concat(e.Mixins))),e.Methods&&IE(e.Methods.split(","),(function(t){e[t]=r})),e.Properties&&IE(e.Properties.split(","),(function(t){var n="_"+t
e[t]=function(e){var t=this
return void 0!==e?(t[n]=e,t):t[n]}})),e.Statics&&IE(e.Statics,(function(e,t){n[t]=e})),e.Defaults&&t.Defaults&&(e.Defaults=ME({},t.Defaults,e.Defaults)),fe(e,(function(e,n){"function"==typeof e&&t[n]?o[n]=function(e,n){return function(){var r=this,o=r._super
r._super=t[e]
var i=n.apply(r,arguments)
return r._super=o,i}}(n,e):o[n]=e})),n.prototype=o,n.constructor=n,n.extend=_E,n}
var UE,zE=Math.min,HE=Math.max,jE=Math.round,VE={serialize:function(e){var t=JSON.stringify(e)
return f(t)?t.replace(/[\u0080-\uFFFF]/g,(function(e){var t=e.charCodeAt(0).toString(16)
return"\\u"+"0000".substring(t.length)+t})):t},parse:function(e){try{return JSON.parse(e)}catch(t){}}},qE={callbacks:{},count:0,send:function(e){var t=this,n=gu.DOM,r=void 0!==e.count?e.count:t.count,o="tinymce_jsonp_"+r
t.callbacks[r]=function(i){n.remove(o),delete t.callbacks[r],e.callback(i)},n.add(n.doc.body,"script",{id:o,src:e.url,type:"text/javascript"}),t.count++}},$E=Ae(Ae({},qN),{send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||n++>1e4?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,n>1e4?"TIMED_OUT":"GENERAL",t,e),t=null):no.setTimeout(r,10)}
if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",$E.fire("beforeInitialize",{settings:e}),(t=new XMLHttpRequest).overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&Et.each(e.requestheaders,(function(e){t.setRequestHeader(e.key,e.value)})),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=$E.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r()
no.setTimeout(r,10)}}),WE=Et.extend,KE=function(){function e(e){this.settings=WE({},e),this.count=0}return e.sendRPC=function(t){return(new e).send(t)},e.prototype.send=function(e){var t=e.error,n=e.success,r=WE(this.settings,e)
r.success=function(e,o){void 0===(e=VE.parse(e))&&(e={error:"JSON Parse error."}),e.error?t.call(r.error_scope||r.scope,e.error,o):n.call(r.success_scope||r.scope,e.result)},r.error=function(e,n){t&&t.call(r.error_scope||r.scope,e,n)},r.data=VE.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params}),r.content_type="application/json",$E.send(r)},e}()
try{var XE="__storage_test__";(UE=window.localStorage).setItem(XE,XE),UE.removeItem(XE)}catch(JE){UE=function(){var e={},t=[],n={getItem:function(t){return e[t]||null},setItem:function(n,r){t.push(n),e[n]=String(r)},key:function(e){return t[e]},removeItem:function(n){t=t.filter((function(e){return e===n})),delete e[n]},clear:function(){t=[],e={}},length:0}
return Object.defineProperty(n,"length",{get:function(){return t.length},configurable:!1,enumerable:!1}),n}()}var YE={geom:{Rect:PE},util:{Promise:Qr,Delay:no,Tools:Et,VK:rd,URI:Um,Class:FE,EventDispatcher:jN,Observable:qN,I18n:Su,XHR:$E,JSON:VE,JSONRequest:KE,JSONP:qE,LocalStorage:UE,Color:function(e){var t={},n=0,r=0,o=0,i=function(e){var i
return"object"==typeof e?"r"in e?(n=e.r,r=e.g,o=e.b):"v"in e&&function(e,t,i){if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,i=parseInt(i,10)/100,t=HE(0,zE(t,1)),i=HE(0,zE(i,1)),0!==t){var a=e/60,u=i*t,c=u*(1-Math.abs(a%2-1)),s=i-u
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
default:n=r=o=0}n=jE(255*(n+s)),r=jE(255*(r+s)),o=jE(255*(o+s))}else n=r=o=jE(255*i)}(e.h,e.s,e.v):(i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(n=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10)):(i=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16)):(i=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(n=parseInt(i[1]+i[1],16),r=parseInt(i[2]+i[2],16),o=parseInt(i[3]+i[3],16)),n=n<0?0:n>255?255:n,r=r<0?0:r>255?255:r,o=o<0?0:o>255?255:o,t}
return e&&i(e),t.toRgb=function(){return{r:n,g:r,b:o}},t.toHsv=function(){return function(e,t,n){var r,o
o=0
var i=zE(e/=255,zE(t/=255,n/=255)),a=HE(e,HE(t,n))
return i===a?{h:0,s:0,v:100*(o=i)}:(r=(a-i)/a,o=a,{h:jE(60*((e===i?3:n===i?1:5)-(e===i?t-n:n===i?e-t:n-e)/(a-i))),s:jE(100*r),v:jE(100*o)})}(n,r,o)},t.toHex=function(){var e=function(e){return(e=parseInt(e,10).toString(16)).length>1?e:"0"+e}
return"#"+e(n)+e(r)+e(o)},t.parse=i,t},ImageUploader:function(e){var t=Dy(),n=Ly(e,t)
return{upload:function(t,r){return void 0===r&&(r=!0),n.upload(t,r?Py(e):void 0)}}}},dom:{EventUtils:Fi,Sizzle:xa,DomQuery:uu,TreeWalker:io,TextSeeker:Ju,DOMUtils:gu,ScriptLoader:bu,RangeUtils:Cd,Serializer:Tb,StyleSheetLoader:ro,ControlSelection:id,BookmarkManager:Jl,Selection:cb,Event:Fi.Event},html:{Styles:Ri,Entities:vi,Node:Tm,Schema:_i,SaxParser:qm,DomParser:Eb,Writer:Jm,Serializer:Qm},Env:xt,AddOnManager:ku,Annotator:Gl,Formatter:Vy,UndoManager:$y,EditorCommands:ON,WindowManager:Cy,NotificationManager:vy,EditorObservable:YN,Shortcuts:oE,Editor:lE,FocusManager:um,EditorManager:kE,DOM:gu.DOM,ScriptLoader:bu.ScriptLoader,PluginManager:by,ThemeManager:yy,IconManager:cy,Resource:LE,trim:Et.trim,isArray:Et.isArray,is:Et.is,toArray:Et.toArray,makeMap:Et.makeMap,each:Et.each,map:Et.map,grep:Et.grep,inArray:Et.inArray,extend:Et.extend,create:Et.create,walk:Et.walk,createNS:Et.createNS,resolve:Et.resolve,explode:Et.explode,_addCacheSuffix:Et._addCacheSuffix,isOpera:xt.opera,isWebKit:xt.webkit,isIE:xt.ie,isGecko:xt.gecko,isMac:xt.mac},GE=Et.extend(kE,YE);(function(e){window.tinymce=e,window.tinyMCE=e})(GE),function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(GE)})()
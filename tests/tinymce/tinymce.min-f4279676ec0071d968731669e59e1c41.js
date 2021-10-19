!function(){"use strict"
function e(e){if(null===e)return"null"
if(void 0===e)return"undefined"
var t=typeof e
return"object"==t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t}function t(e){return g((function(t,n){if(t.length!==n.length)return!1
for(var r=t.length,o=0;o<r;o++)if(!e.eq(t[o],n[o]))return!1
return!0}))}function n(e){return g((function(n,r){var o,i,a=Object.keys(n),u=Object.keys(r)
if(o=t(p),i=function(e){return undefined,Array.prototype.slice.call(e).sort(undefined)},!g((function(e,t){return o.eq(i(e),i(t))})).eq(a,u))return!1
for(var s=a.length,c=0;c<s;c++){var l=a[c]
if(!e.eq(n[l],r[l]))return!1}return!0}))}function r(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}}function o(e){return function(t){return typeof t===e}}function i(e){return function(t){return e===t}}function a(e){return null==e}function u(e){return!a(e)}function s(){}function c(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return e(t.apply(null,n))}}function l(e,t){return function(n){return e(t(n))}}function f(e){return function(){return e}}function d(e){return e}function m(e,t){return e===t}var g=function(e){return{eq:e}},p=g((function(e,t){return e===t})),h=g((function(r,o){if(r===o)return!0
var i=e(r)
return i===e(o)&&(-1!==["undefined","boolean","number","string","function","xml","null"].indexOf(i)?r===o:"array"===i?t(h).eq(r,o):"object"===i&&n(h).eq(r,o))})),v=r("string"),b=r("object"),y=r("array"),C=i(null),x=o("boolean"),w=i(void 0),S=o("function"),E=o("number")
function N(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var o=t.concat(n)
return e.apply(null,o)}}function k(e){return function(t){return!e(t)}}function _(e){return e()}function A(e){e()}function R(){return O}var D=f(!1),T=f(!0),O={fold:function(e,t){return e()},isSome:D,isNone:T,getOr:d,getOrThunk:B,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:f(null),getOrUndefined:f(void 0),or:d,orThunk:B,map:R,each:s,bind:R,exists:D,forall:T,filter:function(){return O},toArray:function(){return[]},toString:f("none()")}
function B(e){return e()}function P(e,t){return ye.call(e,t)}function L(e,t){return-1<P(e,t)}function I(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0
return!1}function M(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r}function F(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}function U(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n)}function z(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a,o)?n:r).push(a)}return{pass:n,fail:r}}function H(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n}function j(e,t,n){return U(e,(function(e,r){n=t(n,e,r)})),n}function V(e,t,n){return F(e,(function(e,r){n=t(n,e,r)})),n}function q(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return ve.some(i)
if(n(i,r))break}return ve.none()}function $(e,t){return q(e,t,D)}function W(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return ve.some(n)
return ve.none()}function K(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!y(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
Ce.apply(t,e[n])}return t}(M(e,t))}function X(e,t){for(var n=0,r=e.length;n<r;++n)if(!0!==t(e[n],n))return!1
return!0}function Y(e){var t=be.call(e,0)
return t.reverse(),t}function G(e,t){return H(e,(function(e){return!L(t,e)}))}function J(e,t){var n=be.call(e,0)
return n.sort(t),n}function Q(e,t){return 0<=t&&t<e.length?ve.some(e[t]):ve.none()}function Z(e){return Q(e,0)}function ee(e){return Q(e,e.length-1)}function te(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n)
if(r.isSome())return r}return ve.none()}function ne(e,t){for(var n=we(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}}function re(e,t){return Ee(e,(function(e,n){return{k:n,v:t(e,n)}}))}function oe(e){return function(t,n){e[n]=t}}function ie(e,t,n,r){return ne(e,(function(e,o){(t(e,o)?n:r)(e,o)})),1}function ae(e,t){var n={}
return ie(e,t,oe(n),s),n}function ue(e,t){return Ne(e,t)?ve.from(e[t]):ve.none()}function se(e,t){return Ne(e,t)&&void 0!==e[t]&&null!==e[t]}function ce(e,t,n){var r,o
if(!e)return!1
if(n=n||e,void 0!==e.length){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return!1}else for(r in e)if(Ne(e,r)&&!1===t.call(n,e[r],r,e))return!1
return!0}function le(e,t){var n=[]
return ce(e,(function(r,o){n.push(t(r,o,e))})),n}function fe(e,t){var n=[]
return ce(e,(function(r,o){t&&!t(r,o,e)||n.push(r)})),n}function de(e,t){if(e)for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1}function me(e,t,n,r){for(var o=w(n)?e[0]:n,i=0;i<e.length;i++)o=t.call(r,o,e[i],i)
return o}function ge(e,t,n){for(var r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r
return-1}function pe(e){return e[e.length-1]}var he=function(e){function t(){return o}function n(t){return t(e)}var r=f(e),o={fold:function(t,n){return n(e)},isSome:T,isNone:D,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:t,orThunk:t,map:function(t){return he(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?o:O},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o},ve={some:he,none:R,from:function(e){return null==e?O:he(e)}},be=Array.prototype.slice,ye=Array.prototype.indexOf,Ce=Array.prototype.push,xe=S(Array.from)?Array.from:function(e){return be.call(e)},we=Object.keys,Se=Object.hasOwnProperty,Ee=function(e,t){var n={}
return ne(e,(function(e,r){var o=t(e,r)
n[o.k]=o.v})),n},Ne=function(e,t){return Se.call(e,t)},ke=Array.isArray,_e=function(){return(_e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function Ae(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o])
return e.concat(r||Array.prototype.slice.call(t))}function Re(e){var t,n=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return n||(n=!0,t=e.apply(null,r)),t}}function De(e,t){var n=String(t).toLowerCase()
return $(e,(function(e){return e.search(n)}))}function Te(e,t){return-1!==e.indexOf(t)}function Oe(e){return function(t){return t.replace(e,"")}}function Be(e){return 0<e.length}function Pe(e){return!Be(e)}function Le(e){return function(t){return Te(t,e)}}function Ie(e){return window.matchMedia(e).matches}function Me(e){return null==e?"":(""+e).replace(wt,"")}function Fe(e,t){return t?!("array"!==t||!ke(e))||typeof e===t:void 0!==e}function Ue(e,t){for(var n=[],r=function(e){return n.push(e),t(e)},o=t(e);(o=o.bind(r)).isSome(););return n}function ze(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}function He(e){return 1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount}function je(e,t){return e.dom===t.dom}function Ve(e,t){return dt().browser.isIE()?(n=e.dom,r=t.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(n.compareDocumentPosition(r)&o)):(i=e.dom)!==(a=t.dom)&&i.contains(a)
var n,r,o,i,a}function qe(){return Xe(0,0)}function $e(e){function t(e){return function(){return n===e}}var n=e.current,r=e.version
return{current:n,version:r,isEdge:t("Edge"),isChrome:t("Chrome"),isIE:t("IE"),isOpera:t("Opera"),isFirefox:t(nt),isSafari:t("Safari")}}function We(e){function t(e){return function(){return n===e}}var n=e.current,r=e.version
return{current:n,version:r,isWindows:t(it),isiOS:t("iOS"),isAndroid:t(at),isOSX:t("OSX"),isLinux:t("Linux"),isSolaris:t(ut),isFreeBSD:t(st),isChromeOS:t(ct)}}function Ke(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}}var Xe=function(e,t){return{major:e,minor:t}},Ye={nu:Xe,detect:function(e,t){var n,r,o=String(t).toLowerCase()
return 0===e.length?qe():(r=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,n=o))?Xe(i(1),i(2)):{major:0,minor:0}
function i(e){return Number(n.replace(r,"$"+e))}},unknown:qe},Ge=function(e,t){return""===(n=t)||e.length>=n.length&&e.substr(0,0+n.length)===n
var n},Je=Oe(/^\s+|\s+$/g),Qe=Oe(/^\s+/g),Ze=Oe(/\s+$/g),et=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,tt={browsers:f([{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Te(e,"edge/")&&Te(e,"chrome")&&Te(e,"safari")&&Te(e,"applewebkit")}},{name:"Chrome",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,et],search:function(e){return Te(e,"chrome")&&!Te(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Te(e,"msie")||Te(e,"trident")}},{name:"Opera",versionRegexes:[et,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Le("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Le("firefox")},{name:"Safari",versionRegexes:[et,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Te(e,"safari")||Te(e,"mobile/"))&&Te(e,"applewebkit")}}]),oses:f([{name:"Windows",search:Le("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Te(e,"iphone")||Te(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Le("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Le("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Le("linux"),versionRegexes:[]},{name:"Solaris",search:Le("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Le("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:Le("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}])},nt="Firefox",rt=function(){return $e({current:void 0,version:Ye.unknown()})},ot=$e,it=(f("Edge"),f("Chrome"),f("IE"),f("Opera"),f(nt),f("Safari"),"Windows"),at="Android",ut="Solaris",st="FreeBSD",ct="ChromeOS",lt=function(){return We({current:void 0,version:Ye.unknown()})},ft=We,dt=(f(it),f("iOS"),f(at),f("Linux"),f("OSX"),f(ut),f(st),f(ct),Re((function(){return e=navigator.userAgent,t=ve.from(navigator.userAgentData),n=Ie,h=tt.browsers(),v=tt.oses(),{browser:b=t.bind((function(e){return t=h,te(e.brands,(function(e){var n=e.brand.toLowerCase()
return $(t,(function(e){var t
return n===(null===(t=e.brand)||void 0===t?void 0:t.toLowerCase())})).map((function(t){return{current:t.name,version:Ye.nu(parseInt(e.version,10),0)}}))}))
var t})).orThunk((function(){return De(h,t=e).map((function(e){var n=Ye.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))
var t})).fold(rt,ot),os:y=De(v,r=e).map((function(e){var t=Ye.detect(e.versionRegexes,r)
return{current:e.name,version:t}})).fold(lt,ft),deviceType:(i=b,a=e,u=n,s=(o=y).isiOS()&&!0===/ipad/i.test(a),c=o.isiOS()&&!s,d=(l=o.isiOS()||o.isAndroid())||u("(pointer:coarse)"),m=s||!c&&l&&u("(min-device-width:768px)"),g=c||l&&!m,p=i.isSafari()&&o.isiOS()&&!1===/safari/i.test(a),{isiPad:f(s),isiPhone:f(c),isTablet:f(m),isPhone:f(g),isTouch:f(d),isAndroid:o.isAndroid,isiOS:o.isiOS,isWebView:f(p),isDesktop:f(!g&&!m&&!p)})}
var e,t,n,r,o,i,a,u,s,c,l,d,m,g,p,h,v,b,y}))),mt=navigator.userAgent,gt=dt(),pt=gt.browser,ht=gt.os,vt=gt.deviceType,bt=/WebKit/.test(mt)&&!pt.isEdge(),yt="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,Ct=-1!==mt.indexOf("Windows Phone"),xt={opera:pt.isOpera(),webkit:bt,ie:!(!pt.isIE()&&!pt.isEdge())&&pt.version.major,gecko:pt.isFirefox(),mac:ht.isOSX()||ht.isiOS(),iOS:vt.isiPad()||vt.isiPhone(),android:ht.isAndroid(),contentEditable:!0,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:!0,range:window.getSelection&&"Range"in window,documentMode:pt.isIE()?document.documentMode||7:10,fileApi:yt,ceFalse:!0,cacheSuffix:null,container:null,experimentalShadowDom:!1,canHaveCSP:!pt.isIE(),desktop:vt.isDesktop(),windowsPhone:Ct,browser:{current:pt.current,version:pt.version,isChrome:pt.isChrome,isEdge:pt.isEdge,isFirefox:pt.isFirefox,isIE:pt.isIE,isOpera:pt.isOpera,isSafari:pt.isSafari},os:{current:ht.current,version:ht.version,isAndroid:ht.isAndroid,isChromeOS:ht.isChromeOS,isFreeBSD:ht.isFreeBSD,isiOS:ht.isiOS,isLinux:ht.isLinux,isOSX:ht.isOSX,isSolaris:ht.isSolaris,isWindows:ht.isWindows},deviceType:{isDesktop:vt.isDesktop,isiPad:vt.isiPad,isiPhone:vt.isiPhone,isPhone:vt.isPhone,isTablet:vt.isTablet,isTouch:vt.isTouch,isWebView:vt.isWebView}},wt=/^\s*|\s*$/g,St=function(e,t,n,r){r=r||this,e&&ce(e=n?e[n]:e,(function(e,o){return!1!==t.call(r,e,o,n)&&void St(e,t,n,r)}))},Et={trim:Me,isArray:ke,is:Fe,toArray:function(e){if(ke(e))return e
for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n]
return t},makeMap:function(e,t,n){var r
for(t=t||",",n=n||{},r=(e="string"==typeof(e=e||[])?e.split(t):e).length;r--;)n[e[r]]={}
return n},each:ce,map:le,grep:fe,inArray:de,hasOwn:Ne,extend:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=0;r<t.length;r++){var o,i,a=t[r]
for(o in a)!Ne(a,o)||void 0!==(i=a[o])&&(e[o]=i)}return e},create:function(e,t,n){var r,o,i,a=this,u=0,s=(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],c=a.createNS(e[3].replace(/\.\w+$/,""),n)
if(!c[s]){if("static"===e[2])return c[s]=t,void(this.onCreate&&this.onCreate(e[2],e[3],c[s]))
t[s]||(t[s]=function(){},u=1),c[s]=t[s],a.extend(c[s].prototype,t),e[5]&&(r=a.resolve(e[5]).prototype,o=e[5].match(/\.(\w+)$/i)[1],i=c[s],c[s]=u?function(){return r[o].apply(this,arguments)}:function(){return this.parent=r[o],i.apply(this,arguments)},c[s].prototype[s]=c[s],a.each(r,(function(e,t){c[s].prototype[t]=r[t]})),a.each(t,(function(e,t){r[t]?c[s].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==s&&(c[s].prototype[t]=e)}))),a.each(t.static,(function(e,t){c[s][t]=e}))}},walk:St,createNS:function(e,t){var n,r
for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r]
return t},resolve:function(e,t){var n,r
for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||Fe(e,"array")?e:le(e.split(t||","),Me)},_addCacheSuffix:function(e){var t=xt.cacheSuffix
return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},Nt={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return Ke(n.childNodes[0])},fromTag:function(e,t){return Ke((t||document).createElement(e))},fromText:function(e,t){return Ke((t||document).createTextNode(e))},fromDom:Ke,fromPoint:function(e,t,n){return ve.from(e.dom.elementFromPoint(t,n)).map(Ke)}}
function kt(e){return e.dom.nodeName.toLowerCase()}function _t(e){return e.dom.nodeType}function At(e){return function(t){return _t(t)===e}}function Rt(e){return Nt.fromDom(e.dom.ownerDocument)}function Dt(e){return _n(e)?e:Rt(e)}function Tt(e){return Nt.fromDom(Dt(e).dom.defaultView)}function Ot(e){return ve.from(e.dom.parentNode).map(Nt.fromDom)}function Bt(e){return ve.from(e.dom.previousSibling).map(Nt.fromDom)}function Pt(e){return ve.from(e.dom.nextSibling).map(Nt.fromDom)}function Lt(e){return Y(Ue(e,Bt))}function It(e){return Ue(e,Pt)}function Mt(e,t){var n=e.dom.childNodes
return ve.from(n[t]).map(Nt.fromDom)}function Ft(e){return Mt(e,0)}function Ut(e){return Mt(e,e.dom.childNodes.length-1)}function zt(e){return e.dom.childNodes.length}function Ht(e){return An(e)&&u(e.dom.host)}function jt(e){return Ht(e)?e:function(){var t=Dt(e).dom.head
if(null==t)throw new Error("Head is not available yet")
return Nt.fromDom(t)}()}function Vt(e){return Nt.fromDom(e.dom.host)}function qt(e,t){Ot(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))}function $t(e,t){Pt(e).fold((function(){Ot(e).each((function(e){Bn(e,t)}))}),(function(e){qt(e,t)}))}function Wt(e,t){Ft(e).fold((function(){Bn(e,t)}),(function(n){e.dom.insertBefore(t.dom,n.dom)}))}function Kt(e,t){F(t,(function(t){Bn(e,t)}))}function Xt(e){e.dom.textContent="",F(Rn(e),(function(e){Pn(e)}))}function Yt(e){var t,n=Rn(e)
0<n.length&&(t=e,F(n,(function(e){qt(t,e)}))),Pn(e)}function Gt(e,t){return void 0!==e?e:void 0!==t?t:0}function Jt(e){var t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop
return Mn(n,r)}function Qt(e,t,n){var r=(void 0!==n?n.dom:document).defaultView
r&&r.scrollTo(e,t)}function Zt(e,t){dt().browser.isSafari()&&S(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)}function en(e,t,n,r){return{x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}}function tn(e){var t=void 0===e?window:e,n=t.document,r=Jt(Nt.fromDom(n)),o=void 0===t?window:t
return(dt().browser.isFirefox()?ve.none():ve.from(o.visualViewport)).fold((function(){var e=t.document.documentElement,n=e.clientWidth,o=e.clientHeight
return en(r.left,r.top,n,o)}),(function(e){return en(Math.max(e.pageLeft,r.left),Math.max(e.pageTop,r.top),e.width,e.height)}))}function nn(e){return function(t){return!!t&&t.nodeType===e}}function rn(e){return e&&!Object.getPrototypeOf(e)}function on(e){var t=e.map((function(e){return e.toLowerCase()}))
return function(e){if(e&&e.nodeName){var n=e.nodeName.toLowerCase()
return L(t,n)}return!1}}function an(e,t){var n=t.toLowerCase().split(" ")
return function(t){if(Un(t))for(var r=0;r<n.length;r++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
if((o?o.getPropertyValue(e):null)===n[r])return!0}return!1}}function un(e){return function(t){return Un(t)&&t.hasAttribute(e)}}function sn(e){return Un(e)&&e.hasAttribute("data-mce-bogus")}function cn(e){return Un(e)&&"TABLE"===e.tagName}function ln(e){return function(t){if(Un(t)){if(t.contentEditable===e)return!0
if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}}function fn(e,t,n){return void 0===n&&(n=m),e.exists((function(e){return n(e,t)}))}function dn(e,t,n){return e.isSome()&&t.isSome()?ve.some(n(e.getOrDie(),t.getOrDie())):ve.none()}function mn(e){return void 0!==e.style&&S(e.style.getPropertyValue)}function gn(e,t,n){if(!(v(n)||x(n)||E(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")}function pn(e,t,n){gn(e.dom,t,n)}function hn(e,t){var n=e.dom
ne(t,(function(e,t){gn(n,t,e)}))}function vn(e,t){var n=e.dom.getAttribute(t)
return null===n?void 0:n}function bn(e,t){return ve.from(vn(e,t))}function yn(e,t){e.dom.removeAttribute(t)}function Cn(e,t){var n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t)
return""!==r||Ln(e)?r:Jn(n,t)}function xn(e,t){var n=e.dom,r=Jn(n,t)
return ve.from(r).filter((function(e){return 0<e.length}))}function wn(e){var t={},n=e.dom
if(mn(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r)
t[o]=n.style[o]}return t}function Sn(e){return $(e,Nn)}function En(e,t){return e.children&&L(e.children,t)}"undefined"!=typeof window||Function("return this;")()
var Nn=At(1),kn=At(3),_n=At(9),An=At(11),Rn=function(e){return M(e.dom.childNodes,Nt.fromDom)},Dn=S(Element.prototype.attachShadow)&&S(Node.prototype.getRootNode),Tn=f(Dn),On=Dn?function(e){return Nt.fromDom(e.dom.getRootNode())}:Dt,Bn=function(e,t){e.dom.appendChild(t.dom)},Pn=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},Ln=function(e){var t=kn(e)?e.dom.parentNode:e.dom
if(null==t||null===t.ownerDocument)return!1
var n=t.ownerDocument,r=Nt.fromDom(t),o=On(r)
return(Ht(o)?ve.some(o):ve.none()).fold((function(){return n.body.contains(t)}),l(Ln,Vt))},In=function(e,t){return{left:e,top:t,translate:function(n,r){return In(e+n,t+r)}}},Mn=In,Fn=function(e){var t,n=e.dom,r=n.ownerDocument.body
return r===n?Mn(r.offsetLeft,r.offsetTop):Ln(e)?(t=n.getBoundingClientRect(),Mn(t.left,t.top)):Mn(0,0)},Un=nn(1),zn=on(["textarea","input"]),Hn=nn(3),jn=nn(8),Vn=nn(9),qn=nn(11),$n=on(["br"]),Wn=on(["img"]),Kn=ln("true"),Xn=ln("false"),Yn=on(["td","th"]),Gn=on(["video","audio","object","embed"]),Jn=function(e,t){return mn(e)?e.style.getPropertyValue(t):""},Qn=dt().browser,Zn={},er={exports:Zn}
function tr(e){setTimeout((function(){throw e}),0)}function nr(e){return ur((function(){return new or(e)}))}function rr(e){if(!y(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
return F(e,(function(r,o){var i=we(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],u=r[a]
if(void 0!==n[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!y(u))throw new Error("case arguments must be an array")
t.push(a),n[a]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var i=n.length
if(i!==u.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+u.length+" ("+u+"), got "+i)
return{fold:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(t.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+t.length)
return t[o].apply(null,n)},match:function(e){var r=we(e)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
if(!X(t,(function(e){return L(r,e)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return e[a].apply(null,n)},log:function(e){console.log(e,{constructors:t,constructor:a,params:n})}}}})),n}!function(){var e=this,t=function(){var e,t,n,r={exports:{}}
function o(){}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function a(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,i._immediateFn((function(){var n,r=1===e._state?t.onFulfilled:t.onRejected
if(null!==r){try{n=r(e._value)}catch(n){return void s(t.promise,n)}u(t.promise,n)}else(1===e._state?u:s)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then
if(t instanceof i)return e._state=3,e._value=t,void c(e)
if("function"==typeof n)return void f((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(t){s(e,t)}var r,o}function s(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t])
e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1
try{e((function(e){n||(n=!0,u(t,e))}),(function(e){n||(n=!0,s(t,e))}))}catch(e){if(n)return
n=!0,s(t,e)}}e=r,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=setTimeout,i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o)
return a(this,new l(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e)
return new i((function(e,n){if(0===t.length)return e([])
for(var r=t.length,o=0;o<t.length;o++)!function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then
if("function"==typeof u)return u.call(a,(function(e){o(i,e)}),n),0}t[i]=a,0==--r&&e(t)}catch(a){n(a)}}(o,t[o])}))},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},e.exports?e.exports=i:t.Promise||(t.Promise=i)
var d=r.exports
return{boltExport:("undefined"!=typeof window?window:Function("return this;")()).Promise||d}}
"object"==typeof Zn&&void 0!==er?er.exports=t():(e="undefined"!=typeof globalThis?globalThis:e||self).EphoxContactWrapper=t()}()
var or=er.exports.boltExport,ir=function(e){function t(e){o()?i(e):r.push(e)}var n=ve.none(),r=[],o=function(){return n.isSome()},i=function(e){n.each((function(t){setTimeout((function(){e(t)}),0)}))}
return e((function(e){o()||(n=ve.some(e),F(r,i),r=[])})),{get:t,map:function(e){return ir((function(n){t((function(t){n(e(t))}))}))},isReady:o}},ar={nu:ir,pure:function(e){return ir((function(t){t(e)}))}},ur=function(e){function t(t){e().then(t,tr)}return{map:function(t){return ur((function(){return e().then(t)}))},bind:function(t){return ur((function(){return e().then((function(e){return t(e).toPromise()}))}))},anonBind:function(t){return ur((function(){return e().then((function(){return t.toPromise()}))}))},toLazy:function(){return ar.nu(t)},toCached:function(){var t=null
return ur((function(){return t=null===t?e():t}))},toPromise:e,get:t}},sr=function(e){return{isValue:T,isError:D,getOr:f(e),getOrThunk:f(e),getOrDie:f(e),or:function(t){return sr(e)},orThunk:function(t){return sr(e)},fold:function(t,n){return n(e)},map:function(t){return sr(t(e))},mapError:function(t){return sr(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOptional:function(){return ve.some(e)}}},cr=function(e){return{isValue:D,isError:T,getOr:d,getOrThunk:function(e){return e()},getOrDie:function(){return t=String(e),function(){throw new Error(t)}()
var t},or:d,orThunk:function(e){return e()},fold:function(t,n){return t(e)},map:function(t){return cr(e)},mapError:function(t){return cr(t(e))},each:s,bind:function(t){return cr(e)},exists:D,forall:T,toOptional:ve.none}},lr={value:sr,error:cr,fromOption:function(e,t){return e.fold((function(){return cr(t)}),sr)}}
function fr(e){return e.fold(d,d)}function dr(e,t,n,r,o){return e(n,r)?ve.some(n):S(o)&&o(n)?ve.none():t(n,r,o)}function mr(e,t,n){for(var r=e.dom,o=S(n)?n:D;r.parentNode;){r=r.parentNode
var i=Nt.fromDom(r)
if(t(i))return ve.some(i)
if(o(i))break}return ve.none()}function gr(e,t,n){return dr((function(e,t){return t(e)}),mr,e,t,n)}function pr(e,t,n){return mr(e,(function(e){return ze(e,t)}),n)}function hr(e,t){return n=t,He(r=void 0===e?document:e.dom)?ve.none():ve.from(r.querySelector(n)).map(Nt.fromDom)
var n,r}function vr(e,t,n){return dr(ze,pr,e,t,n)}function br(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)}function yr(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)}function Cr(e,t){function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o]
clearTimeout(r),r=br((function(){e.apply(this,n)}),t)}var r
return n.stop=function(){clearTimeout(r)},n}function xr(e,t){function n(n,r,o){var c,f=Et._addCacheSuffix(n),d=ue(a,f).getOrThunk((function(){return{id:"mce-u"+i++,passed:[],failed:[],count:0}}))
function m(e,t){for(var n=e.length;n--;)e[n]()
d.status=t,d.passed=[],d.failed=[],c&&(c.onload=null,c.onerror=null,c=null)}function g(){return m(d.passed,2),0}function p(){return m(d.failed,3)}(a[f]=d).count++
var h,v,b,y=function(){var t=y
!function(){for(var t=e.styleSheets,n=t.length;n--;){var r=t[n].ownerNode
if(r&&r.id===c.id)return g(),1}}()&&(Date.now()-v<l?Nr.setTimeout(t):p())}
r&&d.passed.push(r),o&&d.failed.push(o),1!==d.status&&(2!==d.status?3!==d.status?(d.status=1,hn(h=Nt.fromTag("link",s.dom),{rel:"stylesheet",type:"text/css",id:d.id}),v=Date.now(),t.contentCssCors&&pn(h,"crossOrigin","anonymous"),t.referrerPolicy&&pn(h,"referrerpolicy",t.referrerPolicy),(c=h.dom).onload=y,c.onerror=p,b=h,Bn(jt(u),b),pn(h,"href",f)):p():g())}function r(e){return nr((function(t){n(e,c(t,f(lr.value(e))),c(t,f(lr.error(e))))}))}function o(e){var t=Et._addCacheSuffix(e)
ue(a,t).each((function(e){var n
0==--e.count&&(delete a[t],n=e.id,hr(jt(u),"#"+n).each(Pn))}))}void 0===t&&(t={})
var i=0,a={},u=Nt.fromDom(e),s=Dt(u),l=t.maxLoadTime||5e3
return{load:n,loadAll:function(e,t,n){var o,i=M(e,r)
o=i,nr((function(e){var t=[],n=0
0===o.length?e([]):F(o,(function(r,i){var a
r.get((a=i,function(r){t[a]=r,++n>=o.length&&e(t)}))}))})).get((function(e){var r=z(e,(function(e){return e.isValue()}))
0<r.fail.length?n(r.fail.map(fr)):t(r.pass.map(fr))}))},unload:o,unloadAll:function(e){F(e,(function(e){o(e)}))},_setReferrerPolicy:function(e){t.referrerPolicy=e}}}rr([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}])
var wr,Sr,Er=window.Promise||or,Nr={requestAnimationFrame:function(e,t){wr?wr.then(e):wr=new Er((function(e){(function(e,t){for(var n=window.requestAnimationFrame,r=["ms","moz","webkit"],o=0;o<r.length&&!n;o++)n=window[r[o]+"RequestAnimationFrame"];(n=n||function(e){window.setTimeout(e,0)})(e,t)})(e,t=t||document.body)})).then(e)},setTimeout:br,setInterval:yr,setEditorTimeout:function(e,t,n){return br((function(){e.removed||t()}),n)},setEditorInterval:function(e,t,n){var r=yr((function(){e.removed?clearInterval(r):t()}),n)
return r},debounce:Cr,throttle:Cr,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}},kr=(Sr=new WeakMap,{forElement:function(e,t){var n=On(e).dom
return ve.from(Sr.get(n)).getOrThunk((function(){var e=xr(n,t)
return Sr.set(n,e),e}))}}),_r=(Ar.prototype.current=function(){return this.node},Ar.prototype.next=function(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node},Ar.prototype.prev=function(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node},Ar.prototype.prev2=function(e){return this.node=this.findPreviousNode(this.node,"lastChild","previousSibling",e),this.node},Ar.prototype.findSibling=function(e,t,n,r){var o,i
if(e){if(!r&&e[t])return e[t]
if(e!==this.rootNode){if(o=e[n])return o
for(i=e.parentNode;i&&i!==this.rootNode;i=i.parentNode)if(o=i[n])return o}}},Ar.prototype.findPreviousNode=function(e,t,n,r){var o,i,a
if(e&&(o=e[n],!this.rootNode||o!==this.rootNode)){if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a
return o}return(i=e.parentNode)&&i!==this.rootNode?i:void 0}},Ar)
function Ar(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}function Rr(e){var t
return function(n){return t=t||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r]
n[String(i)]=t(i,r)}return n}(e,T),Ne(t,kt(n))}}function Dr(e){return Nn(e)&&!so(e)}function Tr(e){return Nn(e)&&"br"===kt(e)}function Or(e){return wo(e)&&(e=e.parentNode),xo(e)&&e.hasAttribute("data-mce-caret")}function Br(e){return wo(e)&&yo(e.data)}function Pr(e){return Or(e)||Br(e)}function Lr(e){return e.firstChild!==e.lastChild||!$n(e.firstChild)}function Ir(e){var t=e.container()
return!!Hn(t)&&(t.data.charAt(e.offset())===bo||e.isAtStart()&&Br(t.previousSibling))}function Mr(e){var t=e.container()
return!!Hn(t)&&(t.data.charAt(e.offset()-1)===bo||e.isAtEnd()&&Br(t.nextSibling))}function Fr(e){return e&&e.hasAttribute("data-mce-caret")?(sn(n=(t=e.getElementsByTagName("br"))[t.length-1])&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null
var t,n}function Ur(e){return Or(e.startContainer)}function zr(e){return!Oo(e)&&(Ao(e)?!Ro(e.parentNode):Do(e)||_o(e)||To(e)||Bo(e))}function Hr(e,t){return zr(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(Bo(e))return!1
if(No(e))return!0}return!0}(e,t)}function jr(e){return Po.test(e)}function Vr(e,t){return zr(e)&&!1===(a=t,Hn(i=e)&&jr(i.data)&&!1===(n=i,r=Nt.fromDom(a),pr(Nt.fromDom(n),"pre,code",N(je,r)).isSome()))||Un(o=e)&&"A"===o.nodeName&&!o.hasAttribute("href")&&(o.hasAttribute("name")||o.hasAttribute("id"))||Lo(e)
var n,r,o,i,a}function qr(e,t){return function(e,t){var n=0
if(Vr(e,e))return!1
var r=e.firstChild
if(!r)return!0
var o=new _r(r,e)
do{if(t){if(Mo(r)){r=o.next(!0)
continue}if(Io(r)){r=o.next()
continue}}if($n(r))n++,r=o.next()
else{if(Vr(r,e))return!1
r=o.next()}}while(r)
return n<=1}(e.dom,t=void 0===t||t)}function $r(e,t){return u(e)&&(Vr(e,t)||Dr(Nt.fromDom(e)))}function Wr(e){return"span"===e.nodeName.toLowerCase()&&"bookmark"===e.getAttribute("data-mce-type")}function Kr(e,t){var n,r,o,i={}
if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),$o[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r)
return i}}function Xr(e,t){return e.replace(t?zo:Ho,(function(e){return $o[e]||e}))}function Yr(e,t){return e.replace(t?zo:Ho,(function(e){return 1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":$o[e]||"&#"+e.charCodeAt(0)+";"}))}function Gr(e,t,n){return n=n||Ko,e.replace(t?zo:Ho,(function(e){return $o[e]||n[e]||e}))}function Jr(e,t){return(e=Et.trim(e))?e.split(t||" "):[]}function Qr(e,t){var n
return e&&(n={},Qo(e="string"==typeof e?{"*":e}:e,(function(e,r){n[r]=n[r.toUpperCase()]=("map"===t?Jo:ei)(e,/[, ]/)}))),n}function Zr(e){function t(t,n,r){var o=e[t]
return o?o=Jo(o,/[, ]/,Jo(o.toUpperCase(),/[, ]/)):(o=Yo[t])||(o=Jo(n," ",Jo(n.toUpperCase()," ")),o=Zo(o,r),Yo[t]=o),o}var n,r,o,i,a,u,s,c,l={},d={},m=[],g={},p={},h=(n=(e=e||{}).schema,c={},Yo[n]||(r="id accesskey class dir lang style tabindex title role",o="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",i="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==n&&(r+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",o+=" article aside details dialog figure main header footer hgroup section nav",i+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==n&&(r+=" xml:lang",i=[i,s="acronym applet basefont big font strike tt"].join(" "),Qo(Jr(s),(function(e){v(e,"",i)})),o=[o,u="center dir isindex noframes"].join(" "),a=[o,i].join(" "),Qo(Jr(u),(function(e){v(e,"",a)}))),a=a||[o,i].join(" "),v("html","manifest","head body"),v("head","","base command link meta noscript script style title"),v("title hr noscript br"),v("base","href target"),v("link","href rel media hreflang type sizes hreflang"),v("meta","name http-equiv content charset"),v("style","media type scoped"),v("script","src async defer type charset"),v("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",a),v("address dt dd div caption","",a),v("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",i),v("blockquote","cite",a),v("ol","reversed start type","li"),v("ul","","li"),v("li","value",a),v("dl","","dt dd"),v("a","href target rel media hreflang type",i),v("q","cite",i),v("ins del","cite datetime",a),v("img","src sizes srcset alt usemap ismap width height"),v("iframe","src name width height",a),v("embed","src type width height"),v("object","data type typemustmatch name usemap form width height",[a,"param"].join(" ")),v("param","name value"),v("map","name",[a,"area"].join(" ")),v("area","alt coords shape href target rel media hreflang type"),v("table","border","caption colgroup thead tfoot tbody tr"+("html4"===n?" col":"")),v("colgroup","span","col"),v("col","span"),v("tbody thead tfoot","","tr"),v("tr","","td th"),v("td","colspan rowspan headers",a),v("th","colspan rowspan headers scope abbr",a),v("form","accept-charset action autocomplete enctype method name novalidate target",a),v("fieldset","disabled form name",[a,"legend"].join(" ")),v("label","form for",i),v("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),v("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===n?a:i),v("select","disabled form multiple name required size","option optgroup"),v("optgroup","disabled label","option"),v("option","disabled label selected value"),v("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),v("menu","type label",[a,"li"].join(" ")),v("noscript","",a),"html4"!==n&&(v("wbr"),v("ruby","",[i,"rt rp"].join(" ")),v("figcaption","",a),v("mark rt rp summary bdi","",i),v("canvas","width height",a),v("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[a,"track source"].join(" ")),v("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[a,"track source"].join(" ")),v("picture","","img source"),v("source","src srcset type media sizes"),v("track","kind src srclang label default"),v("datalist","",[i,"option"].join(" ")),v("article section nav aside main header footer","",a),v("hgroup","","h1 h2 h3 h4 h5 h6"),v("figure","",[a,"figcaption"].join(" ")),v("time","datetime",i),v("dialog","open",a),v("command","type label icon disabled checked radiogroup command"),v("output","for form name",i),v("progress","value max",i),v("meter","value min max low high optimum",i),v("details","open",[a,"summary"].join(" ")),v("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==n&&(b("script","language xml:space"),b("style","xml:space"),b("object","declare classid code codebase codetype archive standby align border hspace vspace"),b("embed","align name hspace vspace"),b("param","valuetype type"),b("a","charset name rev shape coords"),b("br","clear"),b("applet","codebase archive code object alt name width height align hspace vspace"),b("img","name longdesc align border hspace vspace"),b("iframe","longdesc frameborder marginwidth marginheight scrolling align"),b("font basefont","size color face"),b("input","usemap align"),b("select"),b("textarea"),b("h1 h2 h3 h4 h5 h6 div p legend caption","align"),b("ul","type compact"),b("li","type"),b("ol dl menu dir","compact"),b("pre","width xml:space"),b("hr","align noshade size width"),b("isindex","prompt"),b("table","summary width frame rules cellspacing cellpadding align bgcolor"),b("col","width align char charoff valign"),b("colgroup","width align char charoff valign"),b("thead","align char charoff valign"),b("tr","align char charoff valign bgcolor"),b("th","axis align char charoff valign nowrap bgcolor width height"),b("form","accept"),b("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),b("tfoot","align char charoff valign"),b("tbody","align char charoff valign"),b("area","nohref"),b("body","background bgcolor text link vlink alink")),"html4"!==n&&(b("input button select textarea","autofocus"),b("input textarea","placeholder"),b("a","download"),b("link script img","crossorigin"),b("img","loading"),b("iframe","sandbox seamless allowfullscreen loading")),Qo(Jr("a form meter progress dfn"),(function(e){c[e]&&delete c[e].children[e]})),delete c.caption.children.table,delete c.script,Yo[n]=c))
function v(e,t,n){function o(e,t){for(var n={},r=0,o=e.length;r<o;r++)n[e[r]]=t||{}
return n}var i,a
t=t||"","string"==typeof(n=n||[])&&(n=Jr(n))
for(var u=Jr(e),s=u.length;s--;)a={attributes:o(i=Jr([r,t].join(" "))),attributesOrder:i,children:o(n,Go)},c[u[s]]=a}function b(e,t){for(var n,r,o,i=Jr(e),a=i.length,u=Jr(t);a--;)for(n=c[i[a]],r=0,o=u.length;r<o;r++)n.attributes[u[r]]={},n.attributesOrder.push(u[r])}!1===e.verify_html&&(e.valid_elements="*[*]")
var y=Qr(e.valid_styles),C=Qr(e.invalid_styles,"map"),x=Qr(e.valid_classes,"map"),w=t("whitespace_elements","pre script noscript style textarea video audio iframe object code"),S=t("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),E=t("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),N=t("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),k="td th iframe video audio object script code",_=t("non_empty_elements",k+" pre",E),A=t("move_caret_before_on_enter_elements",k+" table",E),R=t("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),D=t("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",R),T=t("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
function O(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")}function B(e){var t,n,r,o,i,a,u,s,c,f,d,g,p,h,v,b,y,C,x=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,w=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,S=/[*?+]/
if(e){var E=Jr(e,",")
for(l["@"]&&(b=l["@"].attributes,y=l["@"].attributesOrder),t=0,n=E.length;t<n;t++)if(i=x.exec(E[t])){if(h=i[1],c=i[2],v=i[3],s=i[5],a={attributes:g={},attributesOrder:p=[]},"#"===h&&(a.paddEmpty=!0),"-"===h&&(a.removeEmpty=!0),"!"===i[4]&&(a.removeEmptyAttrs=!0),b&&(ne(b,(function(e,t){g[t]=e})),p.push.apply(p,y)),s)for(r=0,o=(s=Jr(s,"|")).length;r<o;r++)(i=w.exec(s[r]))&&(u={},d=i[1],f=i[2].replace(/[\\:]:/g,":"),h=i[3],C=i[4],"!"===d&&(a.attributesRequired=a.attributesRequired||[],a.attributesRequired.push(f),u.required=!0),"-"!==d?(h&&("="===h&&(a.attributesDefault=a.attributesDefault||[],a.attributesDefault.push({name:f,value:C}),u.defaultValue=C),":"===h&&(a.attributesForced=a.attributesForced||[],a.attributesForced.push({name:f,value:C}),u.forcedValue=C),"<"===h&&(u.validValues=Jo(C,"?"))),S.test(f)?(a.attributePatterns=a.attributePatterns||[],u.pattern=O(f),a.attributePatterns.push(u)):(g[f]||p.push(f),g[f]=u)):(delete g[f],p.splice(ti(p,f),1)))
b||"@"!==c||(b=g,y=p),v&&(a.outputName=c,l[v]=a),S.test(c)?(a.pattern=O(c),m.push(a)):l[c]=a}}}function P(e){l={},m=[],B(e),Qo(h,(function(e,t){d[t]=e.children}))}function L(e){var t=/^(~)?(.+)$/
e&&(Yo.text_block_elements=Yo.block_elements=null,Qo(Jr(e,","),(function(e){var n,r=t.exec(e),o="~"===r[1],i=o?"span":"div",a=r[2]
d[a]=d[i],g[a]=i,o||(D[a.toUpperCase()]={},D[a]={}),l[a]||(n=l[i],delete(n=Zo({},n)).removeEmptyAttrs,delete n.removeEmpty,l[a]=n),Qo(d,(function(e,t){e[i]&&(d[t]=e=Zo({},d[t]),e[a]=e[i])}))})))}function I(t){var n=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/
Yo[e.schema]=null,t&&Qo(Jr(t,","),(function(e){var t,r,o=n.exec(e)
o&&(r=o[1],t=r?d[o[2]]:d[o[2]]={"#comment":{}},t=d[o[2]],Qo(Jr(o[3],"|"),(function(e){"-"===r?delete t[e]:t[e]={}})))}))}function M(e){var t,n=l[e]
if(n)return n
for(t=m.length;t--;)if((n=m[t]).pattern.test(e))return n}Qo((e.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),(function(e){p[e]=new RegExp("</"+e+"[^>]*>","gi")})),e.valid_elements?P(e.valid_elements):(Qo(h,(function(e,t){l[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},d[t]=e.children})),"html5"!==e.schema&&Qo(Jr("strong/b em/i"),(function(e){var t=Jr(e,"/")
l[t[1]].outputName=t[0]})),Qo(Jr("ol ul sub sup blockquote span font a table tbody strong em b i"),(function(e){l[e]&&(l[e].removeEmpty=!0)})),Qo(Jr("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(function(e){l[e].paddEmpty=!0})),Qo(Jr("span"),(function(e){l[e].removeEmptyAttrs=!0}))),L(e.custom_elements),I(e.valid_children),B(e.extended_valid_elements),I("+ol[ul|ol],+ul[ul|ol]"),Qo({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},(function(e,t){l[t]&&(l[t].parentsRequired=Jr(e))})),e.invalid_elements&&Qo(ei(e.invalid_elements),(function(e){l[e]&&delete l[e]})),M("span")||B("span[!data-mce-type|*]")
var F=f(y),U=f(C),z=f(x),H=f(N),j=f(D),V=f(R),q=f(T),$=f(E),W=f(S),K=f(_),X=f(A),Y=f(w),G=f(p),J=f(g)
return{children:d,elements:l,getValidStyles:F,getValidClasses:z,getBlockElements:j,getInvalidStyles:U,getShortEndedElements:$,getTextBlockElements:V,getTextInlineElements:q,getBoolAttrs:H,getElementRule:M,getSelfClosingElements:W,getNonEmptyElements:K,getMoveCaretBeforeOnEnterElements:X,getWhiteSpaceElements:Y,getSpecialElements:G,isValidChild:function(e,t){var n=d[e.toLowerCase()]
return!(!n||!n[t.toLowerCase()])},isValid:function(e,t){var n,r,o=M(e)
if(o){if(!t)return!0
if(o.attributes[t])return!0
if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:J,addValidElements:B,setValidElements:P,addCustomElements:L,addValidChildren:I}}function eo(e,t,n,r){function o(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e}return"#"+o(t)+o(n)+o(r)}function to(e,t){var n,r,o=this,i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,a=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,u=/\s*([^:]+):\s*([^;]+);?/g,s=/\s+$/,c={},l=ho
e=e||{},t&&(n=t.getValidStyles(),r=t.getInvalidStyles())
for(var f=("\\\" \\' \\; \\: ; : "+l).split(" "),d=0;d<f.length;d++)c[f[d]]=l+d,c[l+d]=f[d]
return{toHex:function(e){return e.replace(i,eo)},parse:function(t){function n(e,t,n){var r=E[e+"-top"+t]
if(r){var o=E[e+"-right"+t]
if(o){var i=E[e+"-bottom"+t]
if(i){var a=E[e+"-left"+t]
if(a){var u=[r,o,i,a]
for(d=u.length-1;d--&&u[d]===u[d+1];);-1<d&&n||(E[e+t]=-1===d?u[0]:u.join(" "),delete E[e+"-top"+t],delete E[e+"-right"+t],delete E[e+"-bottom"+t],delete E[e+"-left"+t])}}}}}function r(e){var t,n=E[e]
if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return
return E[e]=n[0],1}}function f(e){return C=!0,c[e]}function m(e,t){return C&&(e=e.replace(/\uFEFF[0-9]/g,(function(e){return c[e]}))),t?e:e.replace(/\\([\'\";:])/g,"$1")}function g(e){return String.fromCharCode(parseInt(e.slice(1),16))}function p(e){return e.replace(/\\[0-9a-f]+/gi,g)}function h(t,n,r,o,i,a){if(i=i||a)return"'"+(i=m(i)).replace(/\'/g,"\\'")+"'"
if(n=m(n||r||o),!e.allow_script_urls){var u=n.replace(/[\s\r\n]+/g,"")
if(/(java|vb)script:/i.test(u))return""
if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(u))return""}return"url('"+(n=N?N.call(k,n,"style"):n).replace(/\'/g,"\\'")+"')"}var v,b,y,C,x,w,S,E={},N=e.url_converter,k=e.url_converter_scope||o
if(t){for(t=(t=t.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,f).replace(/\"[^\"]+\"|\'[^\']+\'/g,(function(e){return e.replace(/[;:]/g,f)}));v=u.exec(t);)u.lastIndex=v.index+v[0].length,b=v[1].replace(s,"").toLowerCase(),y=v[2].replace(s,""),b&&y&&(b=p(b),y=p(y),-1===b.indexOf(l)&&-1===b.indexOf('"')&&(e.allow_script_urls||"behavior"!==b&&!/expression\s*\(|\/\*|\*\//.test(y))&&("font-weight"===b&&"700"===y?y="bold":"color"!==b&&"background-color"!==b||(y=y.toLowerCase()),y=(y=y.replace(i,eo)).replace(a,h),E[b]=C?m(y,!0):y))
n("border","",!0),n("border","-width"),n("border","-color"),n("border","-style"),n("padding",""),n("margin",""),w="border-style",S="border-color",r(x="border-width")&&r(w)&&r(S)&&(E.border=E[x]+" "+E[w]+" "+E[S],delete E[x],delete E[w],delete E[S]),"medium none"===E.border&&delete E.border,"none"===E["border-image"]&&delete E["border-image"]}return E},serialize:function(e,t){function o(t){var r,o=n[t]
if(o)for(var a=0,u=o.length;a<u;a++)t=o[a],(r=e[t])&&(i+=(0<i.length?" ":"")+t+": "+r+";")}var i=""
return t&&n?(o("*"),o(t)):ne(e,(function(e,n){var o
!e||r&&((o=r["*"])&&o[n]||(o=r[t])&&o[n])||(i+=(0<i.length?" ":"")+n+": "+e+";")})),i}}}function no(e){return e instanceof Event||S(e.initEvent)}function ro(e,t,n,r){var o,i,s=function(e){var t,n=null!=r?r:{}
for(t in e)Ne(ni,t)||(n[t]=e[t])
return u(n.composedPath)&&(n.composedPath=function(){return e.composedPath()}),n}(t)
return s.type=e,a(s.target)&&(s.target=null!==(o=s.srcElement)&&void 0!==o?o:n),(a((i=t).preventDefault)||no(i))&&(s.preventDefault=function(){s.defaultPrevented=!0,s.isDefaultPrevented=T,S(t.preventDefault)?t.preventDefault():no(t)&&(t.returnValue=!1)},s.stopPropagation=function(){s.cancelBubble=!0,s.isPropagationStopped=T,S(t.stopPropagation)?t.stopPropagation():no(t)&&(t.cancelBubble=!0)},s.stopImmediatePropagation=function(){s.isImmediatePropagationStopped=T,s.stopPropagation()},s.isDefaultPrevented!==T&&s.isDefaultPrevented!==D&&(s.isDefaultPrevented=!0===s.defaultPrevented?T:D,s.isPropagationStopped=!0===s.cancelBubble?T:D,s.isImmediatePropagationStopped=D)),s}function oo(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function io(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)}function ao(e,t){var n,r,o,i,a=ro(e.type,e,document,t)
return u(i=e)&&ri.test(i.type)&&w(e.pageX)&&!w(e.clientX)&&(r=(n=a.target.ownerDocument||document).documentElement,o=n.body,a.pageX=e.clientX+(r&&r.scrollLeft||o&&o.scrollLeft||0)-(r&&r.clientLeft||o&&o.clientLeft||0),a.pageY=e.clientY+(r&&r.scrollTop||o&&o.scrollTop||0)-(r&&r.clientTop||o&&o.clientTop||0)),w(a.metaKey)&&(a.metaKey=!1),a}var uo=Rr(["h1","h2","h3","h4","h5","h6"]),so=Rr(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),co=Rr(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),lo=Rr(["ul","ol","dl"]),fo=Rr(["li","dd","dt"]),mo=Rr(["thead","tbody","tfoot"]),go=Rr(["td","th"]),po=Rr(["pre","script","textarea","style"]),ho="\ufeff",vo=" ",bo=ho,yo=function(e){return e===ho},Co=function(e){return e.replace(/\uFEFF/g,"")},xo=Un,wo=Hn,So=function(e){return wo(e)&&e.data[0]===bo},Eo=function(e){return wo(e)&&e.data[e.data.length-1]===bo},No=Kn,ko=Xn,_o=$n,Ao=Hn,Ro=on(["script","style","textarea"]),Do=on(["img","input","textarea","hr","iframe","video","audio","object","embed"]),To=on(["table"]),Oo=Pr,Bo=function(e){return!1===(Un(t=e)&&"true"===t.getAttribute("unselectable"))&&ko(e)
var t},Po=/^[ \t\r\n]*$/,Lo=un("data-mce-bookmark"),Io=un("data-mce-bogus"),Mo=function(e){return Un(e)&&"all"===e.getAttribute("data-mce-bogus")},Fo=function(e,t,n){var r=n||t
if(Un(t)&&Wr(t))return t
for(var o,i,a,u,s,c,l,f,d,m,g,p=t.childNodes,h=p.length-1;0<=h;h--)Fo(e,p[h],r)
return!Un(t)||1===(o=t.childNodes).length&&Wr(o[0])&&t.parentNode.insertBefore(o[0],t),qn(a=t)||Vn(a)||Vr(t,r)||Un(i=t)&&0<i.childNodes.length||(s=r,Hn(u=t)&&0<u.data.length&&(f=new _r(c=u,l=s).prev(!1),d=new _r(c,l).next(!1),m=w(f)||$r(f,l),g=w(d)||$r(d,l),m&&g))||e.remove(t),t},Uo=Et.makeMap,zo=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Ho=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,jo=/[<>&\"\']/g,Vo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,qo={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},$o={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},Wo={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},Ko=Kr("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),Xo={encodeRaw:Xr,encodeAllRaw:function(e){return(""+e).replace(jo,(function(e){return $o[e]||e}))},encodeNumeric:Yr,encodeNamed:Gr,getEncodeFunc:function(e,t){var n=Kr(t)||Ko,r=Uo(e.replace(/\+/g,","))
return r.named&&r.numeric?function(e,t){return e.replace(t?zo:Ho,(function(e){return void 0!==$o[e]?$o[e]:void 0!==n[e]?n[e]:1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"}))}:r.named?t?function(e,t){return Gr(e,t,n)}:Gr:r.numeric?Yr:Xr},decode:function(e){return e.replace(Vo,(function(e,t){return t?65535<(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):qo[t]||String.fromCharCode(t):Wo[e]||Ko[e]||(n=e,(r=Nt.fromTag("div").dom).innerHTML=n,r.textContent||r.innerText||n)
var n,r}))}},Yo={},Go={},Jo=Et.makeMap,Qo=Et.each,Zo=Et.extend,ei=Et.explode,ti=Et.inArray,ni={keyLocation:!0,layerX:!0,layerY:!0,returnValue:!0,webkitMovementX:!0,webkitMovementY:!0,keyIdentifier:!0,mozPressure:!0},ri=/^(?:mouse|contextmenu)|click/,oi=(ii.prototype.bind=function(e,t,n,r){function o(e){f.executeHandlers(ao(e||d.event),i)}var i,a,u,s,c,l,f=this,d=window
if(e&&3!==e.nodeType&&8!==e.nodeType){e[f.expando]?i=e[f.expando]:(i=f.count++,e[f.expando]=i,f.events[i]={}),r=r||e
for(var m=t.split(" "),g=m.length;g--;)c=o,s=l=!1,"DOMContentLoaded"===(u=m[g])&&(u="ready"),f.domLoaded&&"ready"===u&&"complete"===e.readyState?n.call(r,ao({type:u})):(f.hasMouseEnterLeave||(s=f.mouseEnterLeave[u])&&(c=function(e){var t=e.currentTarget,n=e.relatedTarget
if(n&&t.contains)n=t.contains(n)
else for(;n&&n!==t;)n=n.parentNode
n||((e=ao(e||d.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,f.executeHandlers(e,i))}),f.hasFocusIn||"focusin"!==u&&"focusout"!==u||(l=!0,s="focusin"===u?"focus":"blur",c=function(e){(e=ao(e||d.event)).type="focus"===e.type?"focusin":"focusout",f.executeHandlers(e,i)}),(a=f.events[i][u])?"ready"===u&&f.domLoaded?n(ao({type:u})):a.push({func:n,scope:r}):(f.events[i][u]=a=[{func:n,scope:r}],a.fakeName=s,a.capture=l,a.nativeHandler=c,"ready"===u?function(e,t,n){var r,o=e.document,i={type:"ready"}
n.domLoaded?t(i):(r=function(){io(e,"DOMContentLoaded",r),io(e,"load",r),n.domLoaded||(n.domLoaded=!0,t(i)),e=null},"complete"===o.readyState||"interactive"===o.readyState&&o.body?r():oo(e,"DOMContentLoaded",r),n.domLoaded||oo(e,"load",r))}(e,c,f):oo(e,s||u,c,l)))
return e=a=null,n}},ii.prototype.unbind=function(e,t,n){var r,o,i
if(!e||3===e.nodeType||8===e.nodeType)return this
var a=e[this.expando]
if(a){if(i=this.events[a],t){for(var u,s,c,l,f=t.split(" "),d=f.length;d--;)if(l=i[o=f[d]]){if(n)for(r=l.length;r--;)l[r].func===n&&(u=l.nativeHandler,s=l.fakeName,c=l.capture,(l=l.slice(0,r).concat(l.slice(r+1))).nativeHandler=u,l.fakeName=s,l.capture=c,i[o]=l)
n&&0!==l.length||(delete i[o],io(e,l.fakeName||o,l.nativeHandler,l.capture))}}else ne(i,(function(t,n){io(e,t.fakeName||n,t.nativeHandler,t.capture)})),i={}
for(o in i)if(Ne(i,o))return this
delete this.events[a]
try{delete e[this.expando]}catch(t){e[this.expando]=null}}return this},ii.prototype.fire=function(e,t,n){var r
if(!e||3===e.nodeType||8===e.nodeType)return this
for(var o=ao({type:t,target:e},n);(r=e[this.expando])&&this.executeHandlers(o,r),(e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow)&&!o.isPropagationStopped(););return this},ii.prototype.clean=function(e){var t,n
if(!e||3===e.nodeType||8===e.nodeType)return this
if(e[this.expando]&&this.unbind(e),(e=e.getElementsByTagName?e:e.document)&&e.getElementsByTagName)for(this.unbind(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[this.expando]&&this.unbind(e)
return this},ii.prototype.destroy=function(){this.events={}},ii.prototype.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1},ii.prototype.executeHandlers=function(e,t){var n=this.events[t],r=n&&n[e.type]
if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o]
if(a&&!1===a.func.call(a.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}},ii.Event=new ii,ii)
function ii(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}function ai(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)}var ui,si,ci,li,fi,di,mi,gi,pi,hi,vi,bi,yi,Ci,xi,wi,Si,Ei="sizzle"+-new Date,Ni=window.document,ki=0,_i=0,Ai=ia(),Ri=ia(),Di=ia(),Ti=function(e,t){return e===t&&(hi=!0),0},Oi="undefined",Bi={}.hasOwnProperty,Pi=[],Li=Pi.pop,Ii=Pi.push,Mi=Pi.push,Fi=Pi.slice,Ui=Pi.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t
return-1},zi="[\\x20\\t\\r\\n\\f]",Hi="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ji="\\["+zi+"*("+Hi+")(?:"+zi+"*([*^$|!~]?=)"+zi+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+Hi+"))|)"+zi+"*\\]",Vi=":("+Hi+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ji+")*)|.*)\\)|)",qi=new RegExp("^"+zi+"+|((?:^|[^\\\\])(?:\\\\.)*)"+zi+"+$","g"),$i=new RegExp("^"+zi+"*,"+zi+"*"),Wi=new RegExp("^"+zi+"*([>+~]|"+zi+")"+zi+"*"),Ki=new RegExp("="+zi+"*([^\\]'\"]*?)"+zi+"*\\]","g"),Xi=new RegExp(Vi),Yi=new RegExp("^"+Hi+"$"),Gi={ID:new RegExp("^#("+Hi+")"),CLASS:new RegExp("^\\.("+Hi+")"),TAG:new RegExp("^("+Hi+"|[*])"),ATTR:new RegExp("^"+ji),PSEUDO:new RegExp("^"+Vi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+zi+"*(even|odd|(([+-]|)(\\d*)n|)"+zi+"*(?:([+-]|)"+zi+"*(\\d+)|))"+zi+"*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^"+zi+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+zi+"*((?:-\\d)?\\d*)"+zi+"*\\)|)(?=[^-]|$)","i")},Ji=/^(?:input|select|textarea|button)$/i,Qi=/^h\d$/i,Zi=/^[^{]+\{\s*\[native \w/,ea=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,na=/'|\\/g,ra=new RegExp("\\\\([\\da-f]{1,6}"+zi+"?|("+zi+")|.)","ig")
try{Mi.apply(Pi=Fi.call(Ni.childNodes),Ni.childNodes),Pi[Ni.childNodes.length].nodeType}catch(r){Mi={apply:Pi.length?function(e,t){Ii.apply(e,Fi.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var oa=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m
if((t?t.ownerDocument||t:Ni)!==bi&&vi(t),n=n||[],!e||"string"!=typeof e)return n
if(1!==(u=(t=t||bi).nodeType)&&9!==u)return[]
if(Ci&&!r){if(o=ea.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n
if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&Si(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return Mi.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&ui.getElementsByClassName)return Mi.apply(n,t.getElementsByClassName(a)),n}if(ui.qsa&&(!xi||!xi.test(e))){if(f=l=Ei,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(c=fi(e),(l=t.getAttribute("id"))?f=l.replace(na,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",s=c.length;s--;)c[s]=f+fa(c[s])
d=ta.test(e)&&ca(t.parentNode)||t,m=c.join(",")}if(m)try{return Mi.apply(n,d.querySelectorAll(m)),n}catch(e){}finally{l||t.removeAttribute("id")}}}return mi(e.replace(qi,"$1"),t,n,r)}
function ia(){var e=[]
return function t(n,r){return e.push(n+" ")>si.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function aa(e){return e[Ei]=!0,e}function ua(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function sa(e){return aa((function(t){return t=+t,aa((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function ca(e){return e&&typeof e.getElementsByTagName!=Oi&&e}function la(){}function fa(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function da(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=_i++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,s,c=[ki,i]
if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if((u=(s=t[Ei]||(t[Ei]={}))[r])&&u[0]===ki&&u[1]===i)return c[2]=u[2]
if((s[r]=c)[2]=e(t,n,a))return!0}}}function ma(e){return 1<e.length?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1
return!0}:e[0]}function ga(e,t,n,r,o){for(var i,a=[],u=0,s=e.length,c=null!=t;u<s;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),c&&t.push(u)))
return a}function pa(e){return void 0!==e}function ha(e){return"string"==typeof e}function va(e,t){var n,r=(t=t||Ea).createElement("div"),o=t.createDocumentFragment()
for(r.innerHTML=e;n=r.firstChild;)o.appendChild(n)
return o}function ba(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function ya(e,t,n){var r,o
return t=qa(t)[0],e.each((function(){n&&r===this.parentNode||(r=this.parentNode,o=t.cloneNode(!1),this.parentNode.insertBefore(o,this)),o.appendChild(this)})),e}function Ca(e,t){return new qa.fn.init(e,t)}function xa(e){return null==e?"":(""+e).replace(Ma,"")}function wa(e,t){var n,r,o,i
if(e)if(void 0===(n=e.length)){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e}function Sa(e,t){var n=[]
return wa(e,(function(e,r){t(r,e)&&n.push(r)})),n}ui=oa.support={},li=oa.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},vi=oa.setDocument=function(e){var t,n=e?e.ownerDocument||e:Ni,r=n.defaultView
return n!==bi&&9===n.nodeType&&n.documentElement?(yi=(bi=n).documentElement,Ci=!li(n),r&&r!==function(e){try{return e.top}catch(e){}return null}(r)&&(r.addEventListener?r.addEventListener("unload",(function(){vi()}),!1):r.attachEvent&&r.attachEvent("onunload",(function(){vi()}))),ui.attributes=!0,ui.getElementsByTagName=!0,ui.getElementsByClassName=Zi.test(n.getElementsByClassName),ui.getById=!0,si.find.ID=function(e,t){if(typeof t.getElementById!=Oi&&Ci){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},si.filter.ID=function(e){var t=e.replace(ra,ai)
return function(e){return e.getAttribute("id")===t}},si.find.TAG=ui.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!=Oi)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e)
if("*"!==e)return i
for(;n=i[o++];)1===n.nodeType&&r.push(n)
return r},si.find.CLASS=ui.getElementsByClassName&&function(e,t){if(Ci)return t.getElementsByClassName(e)},wi=[],xi=[],ui.disconnectedMatch=!0,xi=xi.length&&new RegExp(xi.join("|")),wi=wi.length&&new RegExp(wi.join("|")),t=Zi.test(yi.compareDocumentPosition),Si=t||Zi.test(yi.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},Ti=t?function(e,t){return e===t?(hi=!0,0):(r=!e.compareDocumentPosition-!t.compareDocumentPosition)||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!ui.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===Ni&&Si(Ni,e)?-1:t===n||t.ownerDocument===Ni&&Si(Ni,t)?1:pi?Ui.call(pi,e)-Ui.call(pi,t):0:4&r?-1:1)
var r}:function(e,t){if(e===t)return hi=!0,0
var r,o=0,i=e.parentNode,a=t.parentNode,u=[e],s=[t]
if(!i||!a)return e===n?-1:t===n?1:i?-1:a?1:pi?Ui.call(pi,e)-Ui.call(pi,t):0
if(i===a)return ua(e,t)
for(r=e;r=r.parentNode;)u.unshift(r)
for(r=t;r=r.parentNode;)s.unshift(r)
for(;u[o]===s[o];)o++
return o?ua(u[o],s[o]):u[o]===Ni?-1:s[o]===Ni?1:0},n):bi},oa.matches=function(e,t){return oa(e,null,null,t)},oa.matchesSelector=function(e,t){if((e.ownerDocument||e)!==bi&&vi(e),t=t.replace(Ki,"='$1']"),ui.matchesSelector&&Ci&&(!wi||!wi.test(t))&&(!xi||!xi.test(t)))try{var n=(void 0).call(e,t)
if(n||ui.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<oa(t,bi,null,[e]).length},oa.contains=function(e,t){return(e.ownerDocument||e)!==bi&&vi(e),Si(e,t)},oa.attr=function(e,t){(e.ownerDocument||e)!==bi&&vi(e)
var n=si.attrHandle[t.toLowerCase()],r=n&&Bi.call(si.attrHandle,t.toLowerCase())?n(e,t,!Ci):void 0
return void 0!==r?r:ui.attributes||!Ci?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},oa.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oa.uniqueSort=function(e){var t,n=[],r=0,o=0
if(hi=!ui.detectDuplicates,pi=!ui.sortStable&&e.slice(0),e.sort(Ti),hi){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)e.splice(n[r],1)}return pi=null,e},ci=oa.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=ci(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=ci(t)
return n},(si=oa.selectors={cacheLength:50,createPseudo:aa,match:Gi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ra,ai),e[3]=(e[3]||e[4]||e[5]||"").replace(ra,ai),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oa.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oa.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return Gi.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Xi.test(n)&&(t=fi(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ra,ai).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Ai[e+" "]
return t||(t=new RegExp("(^|"+zi+")"+e+"("+zi+"|$)"))&&Ai(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!=Oi&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=oa.attr(r,e)
return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&-1<o.indexOf(n):"$="===t?n&&o.slice(-n.length)===n:"~="===t?-1<(" "+o+" ").indexOf(n):"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,s){var c,l,f,d,m,g,p=i!=a?"nextSibling":"previousSibling",h=t.parentNode,v=u&&t.nodeName.toLowerCase(),b=!s&&!u
if(h){if(i){for(;p;){for(f=t;f=f[p];)if(u?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1
g=p="only"===e&&!g&&"nextSibling"}return!0}if(g=[a?h.firstChild:h.lastChild],a&&b){for(m=(c=(l=h[Ei]||(h[Ei]={}))[e]||[])[0]===ki&&c[1],d=c[0]===ki&&c[2],f=m&&h.childNodes[m];f=++m&&f&&f[p]||(d=m=0)||g.pop();)if(1===f.nodeType&&++d&&f===t){l[e]=[ki,m,d]
break}}else if(b&&(c=(t[Ei]||(t[Ei]={}))[e])&&c[0]===ki)d=c[1]
else for(;(f=++m&&f&&f[p]||(d=m=0)||g.pop())&&((u?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++d||(b&&((f[Ei]||(f[Ei]={}))[e]=[ki,d]),f!==t)););return(d-=o)===r||d%r==0&&0<=d/r}}},PSEUDO:function(e,t){var n,r=si.pseudos[e]||si.setFilters[e.toLowerCase()]||oa.error("unsupported pseudo: "+e)
return r[Ei]?r(t):1<r.length?(n=[e,e,"",t],si.setFilters.hasOwnProperty(e.toLowerCase())?aa((function(e,n){for(var o,i=r(e,t),a=i.length;a--;)e[o=Ui.call(e,i[a])]=!(n[o]=i[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:aa((function(e){var t=[],n=[],r=di(e.replace(qi,"$1"))
return r[Ei]?aa((function(e,t,n,o){for(var i,a=r(e,null,o,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}})),has:aa((function(e){return function(t){return 0<oa(e,t).length}})),contains:aa((function(e){return e=e.replace(ra,ai),function(t){return-1<(t.textContent||t.innerText||ci(t)).indexOf(e)}})),lang:aa((function(e){return Yi.test(e||"")||oa.error("unsupported lang: "+e),e=e.replace(ra,ai).toLowerCase(),function(t){var n
do{if(n=Ci?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===yi},focus:function(e){return e===bi.activeElement&&(!bi.hasFocus||bi.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!si.pseudos.empty(e)},header:function(e){return Qi.test(e.nodeName)},input:function(e){return Ji.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:sa((function(){return[0]})),last:sa((function(e,t){return[t-1]})),eq:sa((function(e,t,n){return[n<0?n+t:n]})),even:sa((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:sa((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:sa((function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r)
return e})),gt:sa((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=si.pseudos.eq,F(["radio","checkbox","file","password","image"],(function(e){var t
si.pseudos[e]=(t=e,function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t})})),F(["submit","reset"],(function(e){var t
si.pseudos[e]=(t=e,function(e){var n=e.nodeName.toLowerCase()
return("input"===n||"button"===n)&&e.type===t})})),la.prototype=si.filters=si.pseudos,si.setFilters=new la,fi=oa.tokenize=function(e,t){var n,r,o,i,a,u,s,c=Ri[e+" "]
if(c)return t?0:c.slice(0)
for(a=e,u=[],s=si.preFilter;a;){for(i in n&&!(r=$i.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=Wi.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(qi," ")}),a=a.slice(n.length)),si.filter)si.filter.hasOwnProperty(i)&&(!(r=Gi[i].exec(a))||s[i]&&!(r=s[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length)))
if(!n)break}return t?a.length:a?oa.error(e):Ri(e,u).slice(0)},di=oa.compile=function(e,t){var n,r,o,i,a,u=[],s=[],c=Di[e+" "]
if(!c){for(n=(t=t||fi(e)).length;n--;)((c=function e(t){for(var n,r,o,i=t.length,a=si.relative[t[0].type],u=a||si.relative[" "],s=a?1:0,c=da((function(e){return e===n}),u,!0),l=da((function(e){return-1<Ui.call(n,e)}),u,!0),f=[function(e,t,r){var o=!a&&(r||t!==gi)||((n=t).nodeType?c:l)(e,t,r)
return n=null,o}];s<i;s++)if(r=si.relative[t[s].type])f=[da(ma(f),r)]
else{if((r=si.filter[t[s].type].apply(null,t[s].matches))[Ei]){for(o=++s;o<i&&!si.relative[t[o].type];o++);return function e(t,n,r,o,i,a){return o&&!o[Ei]&&(o=e(o)),i&&!i[Ei]&&(i=e(i,a)),aa((function(e,a,u,s){var c,l,f,d=[],m=[],g=a.length,p=e||function(e,t,n){for(var r=0,o=t.length;r<o;r++)oa(e,t[r],n)
return n}(n||"*",u.nodeType?[u]:u,[]),h=!t||!e&&n?p:ga(p,d,t,u,s),v=r?i||(e?t:g||o)?[]:a:h
if(r&&r(h,v,u,s),o)for(c=ga(v,m),o(c,[],u,s),l=c.length;l--;)(f=c[l])&&(v[m[l]]=!(h[m[l]]=f))
if(e){if(i||t){if(i){for(c=[],l=v.length;l--;)(f=v[l])&&c.push(h[l]=f)
i(null,v=[],c,s)}for(l=v.length;l--;)(f=v[l])&&-1<(c=i?Ui.call(e,f):d[l])&&(e[c]=!(a[c]=f))}}else v=ga(v===a?v.splice(g,v.length):v),i?i(null,a,v,s):Mi.apply(a,v)}))}(1<s&&ma(f),1<s&&fa(t.slice(0,s-1).concat({value:" "===t[s-2].type?"*":""})).replace(qi,"$1"),r,s<o&&e(t.slice(s,o)),o<i&&e(t=t.slice(o)),o<i&&fa(t))}f.push(r)}return ma(f)}(t[n]))[Ei]?u:s).push(c);(c=Di(e,(r=s,i=0<(o=u).length,a=0<r.length,i?aa(l):l))).selector=e}function l(e,t,n,u,s){var c,l,f,d=0,m="0",g=e&&[],p=[],h=gi,v=e||a&&si.find.TAG("*",s),b=ki+=null==h?1:Math.random()||.1,y=v.length
for(s&&(gi=t!==bi&&t);m!==y&&null!=(c=v[m]);m++){if(a&&c){for(l=0;f=r[l++];)if(f(c,t,n)){u.push(c)
break}s&&(ki=b)}i&&((c=!f&&c)&&d--,e&&g.push(c))}if(d+=m,i&&m!==d){for(l=0;f=o[l++];)f(g,p,t,n)
if(e){if(0<d)for(;m--;)g[m]||p[m]||(p[m]=Li.call(u))
p=ga(p)}Mi.apply(u,p),s&&!e&&0<p.length&&1<d+o.length&&oa.uniqueSort(u)}return s&&(ki=b,gi=h),g}return c},mi=oa.select=function(e,t,n,r){var o,i,a,u,s,c="function"==typeof e&&e,l=!r&&fi(e=c.selector||e)
if(n=n||[],1===l.length){if(2<(i=l[0]=l[0].slice(0)).length&&"ID"===(a=i[0]).type&&ui.getById&&9===t.nodeType&&Ci&&si.relative[i[1].type]){if(!(t=(si.find.ID(a.matches[0].replace(ra,ai),t)||[])[0]))return n
c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=Gi.needsContext.test(e)?0:i.length;o--&&(a=i[o],!si.relative[u=a.type]);)if((s=si.find[u])&&(r=s(a.matches[0].replace(ra,ai),ta.test(i[0].type)&&ca(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&fa(i)))return Mi.apply(n,r),n
break}}return(c||di(e,l))(r,t,!Ci,n,ta.test(e)&&ca(t.parentNode)||t),n},ui.sortStable=Ei.split("").sort(Ti).join("")===Ei,ui.detectDuplicates=!!hi,vi(),ui.sortDetached=!0
var Ea=document,Na=Array.prototype.push,ka=Array.prototype.slice,_a=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,Aa=oi.Event,Ra=Et.makeMap("children,contents,next,prev"),Da=function(e,t,n,r){var o
if(ha(t))t=va(t,Fa(e[0]))
else if(t.length&&!t.nodeType){if(t=qa.makeArray(t),r)for(o=t.length-1;0<=o;o--)Da(e,t[o],n,r)
else for(o=0;o<t.length;o++)Da(e,t[o],n,r)
return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t)
return e},Ta=Et.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),Oa=Et.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),Ba={for:"htmlFor",class:"className",readonly:"readOnly"},Pa={float:"cssFloat"},La={},Ia={},Ma=/^\s*|\s*$/g,Fa=function(e){return e?9===e.nodeType?e:e.ownerDocument:Ea}
function Ua(e,t,n){var r=[],o=e[t]
for("string"!=typeof n&&n instanceof qa&&(n=n[0]);o&&9!==o.nodeType;){if(void 0!==n){if(o===n)break
if("string"==typeof n&&qa(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r}function za(e,t,n,r){var o=[]
for(r instanceof qa&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(void 0!==r){if(e===r)break
if("string"==typeof r&&qa(e).is(r))break}o.push(e)}return o}function Ha(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e
return null}function ja(e,t){var n=t.attr("style"),r=e.serialize(e.parse(n),t[0].nodeName)||null
t.attr("data-mce-style",r)}function Va(e,t){var n,r,o=0
if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r)
return o}Ca.fn=Ca.prototype={constructor:Ca,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this
if(!e)return o
if(e.nodeType)return o.context=o[0]=e,o.length=1,o
if(t&&t.nodeType)o.context=t
else{if(t)return qa(e).attr(t)
o.context=t=document}if(ha(e)){if(!(n="<"===(o.selector=e).charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:_a.exec(e)))return qa(t).find(e)
if(n[1])for(r=va(e,Fa(t)).firstChild;r;)Na.call(o,r),r=r.nextSibling
else{if(!(r=Fa(t).getElementById(n[2])))return o
if(r.id!==n[2])return o.find(e)
o.length=1,o[0]=r}}else this.add(e,!1)
return o},toArray:function(){return Et.toArray(this)},add:function(e,t){var n,r
if(ha(e))return this.add(qa(e))
if(!1!==t)for(n=qa.unique(this.toArray().concat(qa.makeArray(e))),this.length=n.length,r=0;r<n.length;r++)this[r]=n[r]
else Na.apply(this,qa.makeArray(e))
return this},attr:function(e,t){var n,r=this
if("object"==typeof e)wa(e,(function(e,t){r.attr(e,t)}))
else{if(!pa(t)){if(r[0]&&1===r[0].nodeType){if((n=La[e])&&n.get)return n.get(r[0],e)
if(Oa[e])return r.prop(e)?e:void 0
null===(t=r[0].getAttribute(e,2))&&(t=void 0)}return t}this.each((function(){var n
1===this.nodeType&&((n=La[e])&&n.set?n.set(this,t):null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2))}))}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this
if("object"==typeof(e=Ba[e]||e))wa(e,(function(e,t){n.prop(e,t)}))
else{if(!pa(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t
this.each((function(){1===this.nodeType&&(this[e]=t)}))}return n},css:function(e,t){function n(e){return e.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()}))}function r(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e}))}var o,i,a=this
if("object"==typeof e)wa(e,(function(e,t){a.css(e,t)}))
else if(pa(t))e=n(e),"number"!=typeof t||Ta[e]||(t=t.toString()+"px"),a.each((function(){var n=this.style
if((i=Ia[e])&&i.set)i.set(this,t)
else{try{this.style[Pa[e]||e]=t}catch(n){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(r(e)):n.removeAttribute(e))}}))
else{if(o=a[0],(i=Ia[e])&&i.get)return i.get(o)
if(!o.ownerDocument.defaultView)return o.currentStyle?o.currentStyle[n(e)]:""
try{return o.ownerDocument.defaultView.getComputedStyle(o,null).getPropertyValue(r(e))}catch(n){return}}return a},remove:function(){for(var e,t=this.length;t--;)e=this[t],Aa.clean(e),e.parentNode&&e.parentNode.removeChild(e)
return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild)
return this},html:function(e){var t
if(pa(e)){t=this.length
try{for(;t--;)this[t].innerHTML=e}catch(r){qa(this[t]).empty().append(e)}return this}return this[0]?this[0].innerHTML:""},text:function(e){var t
if(pa(e)){for(t=this.length;t--;)"innerText"in this[t]?this[t].innerText=e:this[0].textContent=e
return this}return this[0]?this[0].innerText||this[0].textContent:""},append:function(){return Da(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)}))},prepend:function(){return Da(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)}),!0)},before:function(){return this[0]&&this[0].parentNode?Da(this,arguments,(function(e){this.parentNode.insertBefore(e,this)})):this},after:function(){return this[0]&&this[0].parentNode?Da(this,arguments,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}),!0):this},appendTo:function(e){return qa(e).append(this),this},prependTo:function(e){return qa(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return ya(this,e)},wrapAll:function(e){return ya(this,e,!0)},wrapInner:function(e){return this.each((function(){qa(this).contents().wrapAll(e)})),this},unwrap:function(){return this.parent().each((function(){qa(this).replaceWith(this.childNodes)}))},clone:function(){var e=[]
return this.each((function(){e.push(this.cloneNode(!0))})),qa(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this
return"string"!=typeof e||(-1!==e.indexOf(" ")?wa(e.split(" "),(function(){n.toggleClass(this,t)})):n.each((function(n,r){var o,i=ba(r,e)
i!==t&&(o=r.className,i?r.className=xa((" "+o+" ").replace(" "+e+" "," ")):r.className+=o?" "+e:e)}))),n},hasClass:function(e){return ba(this[0],e)},each:function(e){return wa(this,e)},on:function(e,t){return this.each((function(){Aa.bind(this,e,t)}))},off:function(e,t){return this.each((function(){Aa.unbind(this,e,t)}))},trigger:function(e){return this.each((function(){"object"==typeof e?Aa.fire(this,e.type,e):Aa.fire(this,e)}))},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return qa(ka.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){for(var t=[],n=0,r=this.length;n<r;n++)qa.find(e,this[n],t)
return qa(t)},filter:function(e){return qa("function"==typeof e?Sa(this.toArray(),(function(t,n){return e(n,t)})):qa.filter(e,this.toArray()))},closest:function(e){var t=[]
return e instanceof qa&&(e=e[0]),this.each((function(n,r){for(;r;){if("string"==typeof e&&qa(r).is(e)){t.push(r)
break}if(r===e){t.push(r)
break}r=r.parentNode}})),qa(t)},offset:function(e){var t,n,r,o,i=0,a=0
return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:Na,sort:Array.prototype.sort,splice:Array.prototype.splice},Et.extend(Ca,{extend:Et.extend,makeArray:function(e){return e&&e===e.window||e.nodeType?[e]:Et.toArray(e)},inArray:function(e,t){var n
if(t.indexOf)return t.indexOf(e)
for(n=t.length;n--;)if(t[n]===e)return n
return-1},isArray:Et.isArray,each:wa,trim:xa,grep:Sa,find:oa,expr:oa.selectors,unique:oa.uniqueSort,text:oa.getText,contains:oa.contains,filter:function(e,t,n){var r=t.length
for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1)
return 1===t.length?qa.find.matchesSelector(t[0],e)?[t[0]]:[]:qa.find.matches(e,t)}}),wa({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return Ua(e,"parentNode")},next:function(e){return Ha(e,"nextSibling",1)},prev:function(e){return Ha(e,"previousSibling",1)},children:function(e){return za(e.firstChild,"nextSibling",1)},contents:function(e){return Et.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},(function(e,t){Ca.fn[e]=function(n){var r=[]
this.each((function(){var e=t.call(r,this,n,r)
e&&(qa.isArray(e)?r.push.apply(r,e):r.push(e))})),1<this.length&&(Ra[e]||(r=qa.unique(r)),0===e.indexOf("parents")&&(r=r.reverse()))
var o=qa(r)
return n?o.filter(n):o}})),wa({parentsUntil:function(e,t){return Ua(e,"parentNode",t)},nextUntil:function(e,t){return za(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return za(e,"previousSibling",1,t).slice(1)}},(function(e,t){Ca.fn[e]=function(n,r){var o=[]
this.each((function(){var e=t.call(o,this,n,o)
e&&(qa.isArray(e)?o.push.apply(o,e):o.push(e))})),1<this.length&&(o=qa.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse()))
var i=qa(o)
return r?i.filter(r):i}})),Ca.fn.is=function(e){return!!e&&0<this.filter(e).length},Ca.fn.init.prototype=Ca.fn,Ca.overrideDefaults=function(e){var t,n=function(r,o){return t=t||e(),0===arguments.length&&(r=t.element),o=o||t.context,new n.fn.init(r,o)}
return qa.extend(n,this),n},Ca.attrHooks=La,Ca.cssHooks=Ia
var qa=Ca,$a=Et.each,Wa=Et.grep,Ka=xt.ie,Xa=/^([a-z0-9],?)+$/i,Ya=function(e,t){function n(t){return t&&e&&v(t)?e.getElementById(t):t}function r(e){return W("string"==typeof e?n(e):e)}function o(e,t,n){var o,i,a=r(e)
return void 0===(i=a.length?(o=J[t])&&o.get?o.get(a,t):a.attr(t):i)?n||"":i}function i(e){var t=n(e)
return t?t.attributes:[]}function u(e,n,o){""===o&&(o=null)
var i,a=r(e),u=a.attr(n)
a.length&&((i=J[n])&&i.set?i.set(a,o,n):a.attr(n,o),u!==o&&t.onSetAttrib&&t.onSetAttrib({attrElm:a,attrName:n,attrValue:o}))}function c(){return t.root_element||e.body}function l(t,r){return function(e,t,n){var r,o=0,i=0,a=e.ownerDocument
if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===Cn(Nt.fromDom(e),"position")){var u=t.getBoundingClientRect()
return{x:o=u.left+(a.documentElement.scrollLeft||e.scrollLeft)-a.documentElement.clientLeft,y:i=u.top+(a.documentElement.scrollTop||e.scrollTop)-a.documentElement.clientTop}}for(var s=t;s&&s!==n&&s.nodeType&&!En(s,n);){var c=s
o+=c.offsetLeft||0,i+=c.offsetTop||0,s=c.offsetParent}for(s=t.parentNode;s&&s!==n&&s.nodeType&&!En(s,n);)o-=s.scrollLeft||0,i-=s.scrollTop||0,s=s.parentNode
i+=(r=Nt.fromDom(t),Qn.isFirefox()&&"table"===kt(r)?Sn(Rn(r)).filter((function(e){return"caption"===kt(e)})).bind((function(e){return Sn(It(e)).map((function(t){var n=t.dom.offsetTop,r=e.dom.offsetTop,o=e.dom.offsetHeight
return n<=r?-o:0}))})).getOr(0):0)}return{x:o,y:i}}(e.body,n(t),r)}function d(e,t,n){var o=r(e)
return n?o.css(t):("float"===(t=t.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()})))&&(t=xt.browser.isIE()?"styleFloat":"cssFloat"),o[0]&&o[0].style?o[0].style[t]:void 0)}function m(e){var t=d(e=n(e),"width"),r=d(e,"height")
return-1===t.indexOf("px")&&(t=0),-1===r.indexOf("px")&&(r=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(r,10)||e.offsetHeight||e.clientHeight}}function g(e,t){if(!e)return!1
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(Xa.test(t)){for(var n=t.toLowerCase().split(/,/),r=e.nodeName.toLowerCase(),o=n.length-1;0<=o;o--)if(n[o]===r)return!0
return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e]
return 0<oa(t,i[0].ownerDocument||i[0],null,i).length}function p(e,t,r,o){var i,u=[],s=n(e)
for(o=void 0===o,r=r||("BODY"!==c().nodeName?c().parentNode:null),Et.is(t,"string")&&(t="*"===(i=t)?function(e){return 1===e.nodeType}:function(e){return g(e,i)});s&&!(s===r||a(s.nodeType)||Vn(s)||qn(s));){if(!t||"function"==typeof t&&t(s)){if(!o)return[s]
u.push(s)}s=s.parentNode}return o?u:null}function h(e,t,n){var r=t
if(e)for("string"==typeof t&&(r=function(e){return g(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e
return null}function b(e,t,r){var o,i="string"==typeof e?n(e):e
return!!i&&(Et.isArray(i)&&(i.length||0===i.length)?(o=[],$a(i,(function(e,i){e&&o.push(t.call(r,"string"==typeof e?n(e):e,i))})),o):t.call(r||this,i))}function y(e,t){r(e).each((function(e,n){$a(t,(function(e,t){u(n,t,e)}))}))}function C(e,t){var n=r(e)
Ka?n.each((function(e,n){if(!1!==n.canHaveHTML){for(;n.firstChild;)n.removeChild(n.firstChild)
try{n.innerHTML="<br>"+t,n.removeChild(n.firstChild)}catch(e){qa("<div></div>").html("<br>"+t).contents().slice(1).appendTo(n)}return t}})):n.html(t)}function x(t,n,r,o,i){return b(t,(function(t){var a="string"==typeof n?e.createElement(n):n
return y(a,r),o&&("string"!=typeof o&&o.nodeType?a.appendChild(o):"string"==typeof o&&C(a,o)),i?a:t.appendChild(a)}))}function w(t,n,r){return x(e.createElement(t),t,n,r,!0)}function S(e,t){var n=r(e)
return(t?n.each((function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)})):n).remove(),1<n.length?n.toArray():n[0]}function E(e,t,n){r(e).toggleClass(t,n).each((function(){""===this.className&&qa(this).attr("class",null)}))}function N(e,t,n){return b(t,(function(t){return Et.is(t,"array")&&(e=e.cloneNode(!0)),n&&$a(Wa(t.childNodes),(function(t){e.appendChild(t)})),t.parentNode.replaceChild(e,t)}))}function k(e){if(Un(e)){var t="a"===e.nodeName.toLowerCase()&&!o(e,"href")&&o(e,"id")
return o(e,"name")||o(e,"data-mce-bookmark")||t?1:void 0}}function _(){return e.createRange()}function A(e){if(e&&Un(e)){var t=e.getAttribute("data-mce-contenteditable")
return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null}void 0===t&&(t={})
var R,D,T,O,B,P,L={},I=window,M={},U=0,z=kr.forElement(Nt.fromDom(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),H=[],j=t.schema||Zr({}),V=to({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),q=t.ownEvents?new oi:oi.Event,$=j.getBlockElements(),W=qa.overrideDefaults((function(){return{context:e,element:G.getRoot()}})),K=Xo.encodeAllRaw,X=function(n,r,o,i){if(Et.isArray(n)){for(var a=n.length,u=[];a--;)u[a]=X(n[a],r,o,i)
return u}return!t.collect||n!==e&&n!==I||H.push([n,r,o,i]),q.bind(n,r,o,i||G)},Y=function(t,n,r){if(Et.isArray(t)){for(var o=t.length,i=[];o--;)i[o]=Y(t[o],n,r)
return i}if(0<H.length&&(t===e||t===I))for(o=H.length;o--;){var a=H[o]
t!==a[0]||n&&n!==a[1]||r&&r!==a[2]||q.unbind(a[0],a[1],a[2])}return q.unbind(t,n,r)},G={doc:e,settings:t,win:I,files:M,stdMode:!0,boxModel:!0,styleSheetLoader:z,boundEvents:H,styles:V,schema:j,events:q,isBlock:function(e){if("string"==typeof e)return!!$[e]
if(e){var t=e.nodeType
if(t)return!(1!==t||!$[e.nodeName])}return!1},$:W,$$:r,root:null,clone:function(t,n){if(!Ka||1!==t.nodeType||n)return t.cloneNode(n)
var r=e.createElement(t.nodeName)
return $a(i(t),(function(e){u(r,e.nodeName,o(t,e.nodeName))})),r},getRoot:c,getViewPort:function(e){var t=tn(e)
return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:function(e){var t=l(e=n(e)),r=m(e)
return{x:t.x,y:t.y,w:r.w,h:r.h}},getSize:m,getParent:function(e,t,n){var r=p(e,t,n,!1)
return r&&0<r.length?r[0]:null},getParents:p,get:n,getNext:function(e,t){return h(e,t,"nextSibling")},getPrev:function(e,t){return h(e,t,"previousSibling")},select:function(r,o){return oa(r,n(o)||t.root_element||e,[])},is:g,add:x,create:w,createHTML:function(e,t,n){var r,o=""
for(r in o+="<"+e,t)se(t,r)&&(o+=" "+r+'="'+K(t[r])+'"')
return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(t){var n,r=e.createElement("div"),o=e.createDocumentFragment()
for(o.appendChild(r),t&&(r.innerHTML=t);n=r.firstChild;)o.appendChild(n)
return o.removeChild(r),o},remove:S,setStyle:function(e,n,o){var i=v(n)?r(e).css(n,o):r(e).css(n)
t.update_styles&&ja(V,i)},getStyle:d,setStyles:function(e,n){var o=r(e).css(n)
t.update_styles&&ja(V,o)},removeAllAttribs:function(e){return b(e,(function(e){for(var t=e.attributes,n=t.length-1;0<=n;n--)e.removeAttributeNode(t.item(n))}))},setAttrib:u,setAttribs:y,getAttrib:o,getPos:l,parseStyle:function(e){return V.parse(e)},serializeStyle:function(e,t){return V.serialize(e,t)},addStyle:function(t){var n,r
if(G!==Ya.DOM&&e===document){if(L[t])return
L[t]=!0}(r=e.getElementById("mceDefaultStyles"))||((r=e.createElement("style")).id="mceDefaultStyles",r.type="text/css",(n=e.getElementsByTagName("head")[0]).firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r)),r.styleSheet?r.styleSheet.cssText+=t:r.appendChild(e.createTextNode(t))},loadCSS:function(e){F((e=e||"").split(","),(function(e){M[e]=!0,z.load(e,s)}))},addClass:function(e,t){r(e).addClass(t)},removeClass:function(e,t){E(e,t,!1)},hasClass:function(e,t){return r(e).hasClass(t)},toggleClass:E,show:function(e){r(e).show()},hide:function(e){r(e).hide()},isHidden:function(e){return"none"===r(e).css("display")},uniqueId:function(e){return(e||"mce_")+U++},setHTML:C,getOuterHTML:function(e){var t="string"==typeof e?n(e):e
return Un(t)?t.outerHTML:qa("<div></div>").append(qa(t).clone()).html()},setOuterHTML:function(e,t){r(e).each((function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}S(qa(this).html(t),!0)}))},decode:Xo.decode,encode:K,insertAfter:function(e,t){var r=n(t)
return b(e,(function(e){var t=r.parentNode,n=r.nextSibling
return n?t.insertBefore(e,n):t.appendChild(e),e}))},replace:N,rename:function(e,t){var n
return e.nodeName!==t.toUpperCase()&&(n=w(t),$a(i(e),(function(t){u(n,t.nodeName,o(e,t.nodeName))})),N(n,e,!0)),n||e},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode
if(r===n)break
r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return V.toHex(Et.trim(e))},run:b,getAttribs:i,isEmpty:function(e,t){var n,r,o=0
if(k(e))return!1
if(e=e.firstChild){var i=new _r(e,e.parentNode),a=j?j.getWhiteSpaceElements():{}
t=t||(j?j.getNonEmptyElements():null)
do{if(n=e.nodeType,Un(e)){var u=e.getAttribute("data-mce-bogus")
if(u){e=i.next("all"===u)
continue}if(r=e.nodeName.toLowerCase(),t&&t[r]){if("br"!==r)return!1
o++,e=i.next()
continue}if(k(e))return!1}if(8===n)return!1
if(3===n&&!jr(e.nodeValue))return!1
if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&jr(e.nodeValue))return!1
e=i.next()}while(e)}return o<=1},createRng:_,nodeIndex:Va,split:function(e,t,n){var r,o,i,a=_()
if(e&&t)return a.setStart(e.parentNode,Va(e)),a.setEnd(t.parentNode,Va(t)),r=a.extractContents(),(a=_()).setStart(t.parentNode,Va(t)+1),a.setEnd(e.parentNode,Va(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(Fo(G,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(Fo(G,o),e),S(e),n||t},bind:X,unbind:Y,fire:function(e,t,n){return q.fire(e,t,n)},getContentEditable:A,getContentEditableParent:function(e){for(var t=c(),n=null;e&&e!==t&&null===(n=A(e));e=e.parentNode);return n},destroy:function(){if(0<H.length)for(var e=H.length;e--;){var t=H[e]
q.unbind(t[0],t[1],t[2])}ne(M,(function(e,t){z.unload(t),delete M[t]})),oa.setDocument&&oa.setDocument()},isChildOf:function(e,t){if(Ka){for(;e;){if(t===e)return!0
e=e.parentNode}return!1}return e===t||t.contains(e)},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}},J=(R=V,T=f(G),B={set:function(e,t,n){D.url_converter&&null!==t&&(t=D.url_converter.call(D.url_converter_scope||T(),t,n,e[0])),e.attr("data-mce-"+n,t).attr(n,t)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},P={style:{set:function(e,t){null===t||"object"!=typeof t?(O&&e.attr("data-mce-style",t),null!==t&&"string"==typeof t?(e.removeAttr("style"),e.css(R.parse(t))):e.attr("style",t)):e.css(t)},get:function(e){var t=e.attr("data-mce-style")||e.attr("style")
return R.serialize(R.parse(t),e[0].nodeName)}}},(O=(D=t).keep_values)&&(P.href=P.src=B),P)
return G}
Ya.DOM=Ya(document),Ya.nodeIndex=Va
var Ga=Ya.DOM,Ja=Et.each,Qa=Et.grep,Za=(eu.prototype._setReferrerPolicy=function(e){this.settings.referrerPolicy=e},eu.prototype.loadScript=function(e,t,n){function r(){o.remove(i),a&&(a.onerror=a.onload=a=null)}var o=Ga,i=o.uniqueId(),a=document.createElement("script")
a.id=i,a.type="text/javascript",a.src=Et._addCacheSuffix(e),this.settings.referrerPolicy&&o.setAttrib(a,"referrerpolicy",this.settings.referrerPolicy),a.onload=function(){r(),t()},a.onerror=function(){r(),S(n)?n():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(a)},eu.prototype.isDone=function(e){return 2===this.states[e]},eu.prototype.markDone=function(e){this.states[e]=2},eu.prototype.add=function(e,t,n,r){var o=this.states[e]
this.queue.push(e),void 0===o&&(this.states[e]=0),t&&(this.scriptLoadedCallbacks[e]||(this.scriptLoadedCallbacks[e]=[]),this.scriptLoadedCallbacks[e].push({success:t,failure:r,scope:n||this}))},eu.prototype.load=function(e,t,n,r){return this.add(e,t,n,r)},eu.prototype.remove=function(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]},eu.prototype.loadQueue=function(e,t,n){this.loadScripts(this.queue,e,t,n)},eu.prototype.loadScripts=function(e,t,n,r){function o(e,t){Ja(i.scriptLoadedCallbacks[t],(function(t){S(t[e])&&t[e].call(t.scope)})),i.scriptLoadedCallbacks[t]=void 0}var i=this,a=[]
i.queueLoadedCallbacks.push({success:t,failure:r,scope:n||this})
var u=function(){var t,n=Qa(e)
e.length=0,Ja(n,(function(e){2!==i.states[e]?3!==i.states[e]?1!==i.states[e]&&(i.states[e]=1,i.loading++,i.loadScript(e,(function(){i.states[e]=2,i.loading--,o("success",e),u()}),(function(){i.states[e]=3,i.loading--,a.push(e),o("failure",e),u()}))):o("failure",e):o("success",e)})),i.loading||(t=i.queueLoadedCallbacks.slice(0),i.queueLoadedCallbacks.length=0,Ja(t,(function(e){0===a.length?S(e.success)&&e.success.call(e.scope):S(e.failure)&&e.failure.call(e.scope,a)})))}
u()},eu.ScriptLoader=new eu,eu)
function eu(e){void 0===e&&(e={}),this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=0,this.settings=e}function tu(e){var t=e
return{get:function(){return t},set:function(e){t=e}}}function nu(){return ue(ru,ou.get())}var ru={},ou=tu("en"),iu={getData:function(){return re(ru,(function(e){return _e({},e)}))},setCode:function(e){e&&ou.set(e)},getCode:function(){return ou.get()},add:function(e,t){var n=ru[e]
n||(ru[e]=n={}),ne(t,(function(e,t){n[t.toLowerCase()]=e}))},translate:function(e){function t(e){return S(e)?Object.prototype.toString.call(e):u(e)?"":""+e}function n(e){var n=t(e)
return ue(a,n.toLowerCase()).map(t).getOr(n)}function r(e){return e.replace(/{context:\w+}$/,"")}var o,i,a=nu().getOr({}),u=function(e){return""===e||null==e}
if(u(e))return""
if(b(o=e)&&Ne(o,"raw"))return t(e.raw)
if(y(i=e)&&1<i.length){var s=e.slice(1)
return r(n(e[0]).replace(/\{([0-9]+)\}/g,(function(e,n){return Ne(s,n)?t(s[n]):e})))}return r(n(e))},isRtl:function(){return nu().bind((function(e){return ue(e,"_dir")})).exists((function(e){return"rtl"===e}))},hasCode:function(e){return Ne(ru,e)}},au=function(){function e(e,t){F(H(u,(function(n){return n.name===e&&n.state===t})),(function(e){return e.callback()}))}function t(e){return(a[e]?a[e].dependencies:undefined)||[]}function n(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}}function r(e,t,n){void 0===n&&(n="added"),Ne(a,e)&&"added"===n||Ne(i,e)&&"loaded"===n?t():u.push({name:e,state:n,callback:t})}var o=[],i={},a={},u=[],s=function(r,o,u,c,l){var f,d
i[r]||(0!==(f="string"==typeof o?o:o.prefix+o.resource+o.suffix).indexOf("/")&&-1===f.indexOf("://")&&(f=au.baseURL+"/"+f),i[r]=f.substring(0,f.lastIndexOf("/")),d=function(){var i,a,l
e(r,"loaded"),i=o,a=u,l=c,F(t(r),(function(e){var t=n(i,e)
s(t.resource,t,void 0,void 0)})),a&&(l?a.call(l):a.call(Za))},a[r]?d():Za.ScriptLoader.add(f,d,c,l))}
return{items:o,urls:i,lookup:a,_listeners:u,get:function(e){if(a[e])return a[e].instance},dependencies:t,requireLangPack:function(e,t){!1!==au.languageLoad&&r(e,(function(){var n=iu.getCode()
!n||t&&-1===(","+(t||"")+",").indexOf(","+n+",")||Za.ScriptLoader.add(i[e]+"/langs/"+n+".js")}),"loaded")},add:function(t,n,r){var i=n
return o.push(i),a[t]={instance:i,dependencies:r},e(t,"added"),i},remove:function(e){delete i[e],delete a[e]},createUrl:n,addComponents:function(e,t){var n=i[e]
F(t,(function(e){Za.ScriptLoader.add(n+"/"+e)}))},load:s,waitFor:r}}
function uu(){var e,t,n=(e=s,t=tu(ve.none()),{clear:function(){r(),t.set(ve.none())},isSet:function(){return t.get().isSome()},get:function(){return t.get()},set:function(e){r(),t.set(ve.some(e))}})
function r(){return t.get().each(e)}return _e(_e({},n),{on:function(e){return n.get().each(e)}})}function su(e,t){var n=null
return{cancel:function(){C(n)||(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
C(n)&&(n=setTimeout((function(){n=null,e.apply(null,r)}),t))}}}function cu(e,t){function n(){C(r)||(clearTimeout(r),r=null)}var r=null
return{cancel:n,throttle:function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i]
n(),r=setTimeout((function(){r=null,e.apply(null,o)}),t)}}}function lu(e,t){var n=vn(e,t)
return void 0===n||""===n?[]:n.split(" ")}function fu(e){return void 0!==e.dom.classList}function du(e,t){var n,r,o
fu(e)?e.dom.classList.add(t):(r=t,o=lu(n=e,"class").concat([r]),pn(n,"class",o.join(" ")))}function mu(e,t){return fu(e)&&e.dom.classList.contains(t)}function gu(e,t){return He(n=void 0===e?document:e.dom)?[]:M(n.querySelectorAll(t),Nt.fromDom)
var n}function pu(e,t){function n(e,t){return(n=e.dom)&&n.hasAttribute&&n.hasAttribute(t)?ve.some(vn(e,t)):ve.none()
var n}var r=e.selection.getRng(),o=Nt.fromDom(r.startContainer),i=Nt.fromDom(e.getBody()),a=t.fold((function(){return"."+Uu()}),(function(e){return"["+zu()+'="'+e+'"]'}))
return vr(Mt(o,r.startOffset).getOr(o),a,(function(e){return je(e,i)})).bind((function(t){return n(t,""+Hu()).bind((function(r){return n(t,""+zu()).map((function(t){var n=ju(e,r)
return{uid:r,name:t,elements:n}}))}))}))}function hu(e){var t=(new Date).getTime()
return e+"_"+Math.floor(1e9*Math.random())+ ++Vu+String(t)}function vu(e,t){var n,r,o=Rt(e).dom,i=Nt.fromDom(o.createDocumentFragment())
Kt(i,(n=t,(r=(o||document).createElement("div")).innerHTML=n,Rn(Nt.fromDom(r)))),Xt(e),Bn(e,i)}function bu(e,t){return Nt.fromDom(e.dom.cloneNode(t))}function yu(e){return bu(e,!1)}function Cu(e){return bu(e,!0)}function xu(e,t,n){function r(e){for(var t;(t=o[e]())&&!Hn(t)&&!n(t););return ve.from(t).filter(Hn)}void 0===n&&(n=D)
var o=new _r(e,t)
return{current:function(){return ve.from(o.current()).filter(Hn)},next:function(){return r("next")},prev:function(){return r("prev")},prev2:function(){return r("prev2")}}}function wu(e,t){var n=t||function(t){return e.isBlock(t)||$n(t)||Xn(t)},r=function(e,t,n,o){if(Hn(e)){var i=o(e,t,e.data)
if(-1!==i)return ve.some({container:e,offset:i})}return n().bind((function(e){return r(e.container,e.offset,n,o)}))}
return{backwards:function(e,t,o,i){var a=xu(e,i,n)
return r(e,t,(function(){return a.prev().map((function(e){return{container:e,offset:e.length}}))}),o).getOrNull()},forwards:function(e,t,o,i){var a=xu(e,i,n)
return r(e,t,(function(){return a.next().map((function(e){return{container:e,offset:0}}))}),o).getOrNull()}}}function Su(e){return e?{left:qu(e.left),top:qu(e.top),bottom:qu(e.bottom),right:qu(e.right),width:qu(e.width),height:qu(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}}function Eu(e,t){return e=Su(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e}function Nu(e,t,n){return 0<=e&&e<=Math.min(t.height,n.height)/2}function ku(e,t){var n=Math.min(t.height/2,e.height/2)
return e.bottom-n<t.top||!(e.top>t.bottom)&&Nu(t.top-e.bottom,e,t)}function _u(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&Nu(t.bottom-e.top,e,t)}function Au(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom}function Ru(e){var t=e.startContainer,n=e.startOffset
return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null}function Du(e,t){if(Un(e)&&e.hasChildNodes()){var n=e.childNodes
return n[(r=n.length-1,Math.min(Math.max(t,0),r))]}return e
var r}function Tu(e){return"string"==typeof e&&768<=e.charCodeAt(0)&&$u.test(e)}function Ou(e){return"createRange"in e?e.createRange():Ya.DOM.createRng()}function Bu(e){return e&&/[\r\n\t ]/.test(e)}function Pu(e){return e.setStart&&e.setEnd}function Lu(e){var t=e.startContainer,n=e.startOffset
if(Bu(e.toString())&&Ju(t.parentNode)&&Hn(t)){var r=t.data
return Bu(r[n-1])||Bu(r[n+1])?1:void 0}}function Iu(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom}function Mu(e,t){var n=Eu(e,t)
return n.width=1,n.right=n.left+1,n}au.languageLoad=!0,au.baseURL="",au.PluginManager=au(),au.ThemeManager=au()
var Fu=function(e,t){var n=[]
return F(Rn(e),(function(e){n=(n=t(e)?n.concat([e]):n).concat(Fu(e,t))})),n},Uu=f("mce-annotation"),zu=f("data-mce-annotation"),Hu=f("data-mce-annotation-uid"),ju=function(e,t){return gu(Nt.fromDom(e.getBody()),"["+Hu()+'="'+t+'"]')},Vu=0,qu=Math.round,$u=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"),Wu=Un,Ku=zr,Xu=an("display","block table"),Yu=an("float","left right"),Gu=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1
return!0}}(Wu,Ku,k(Yu)),Ju=k(an("white-space","pre pre-line pre-wrap")),Qu=Hn,Zu=$n,es=Ya.nodeIndex,ts=function(e,t){if(!(t<0&&Un(e)&&e.hasChildNodes()))return Du(e,t)},ns=function(e){var t=e.getClientRects(),n=0<t.length?Su(t[0]):Su(e.getBoundingClientRect())
return!Pu(e)&&Zu(e)&&Iu(n)?function(e){var t=e.ownerDocument,n=Ou(t),r=t.createTextNode(vo),o=e.parentNode
o.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1)
var i=Su(n.getBoundingClientRect())
return o.removeChild(r),i}(e):Iu(n)&&Pu(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset
if(t===n&&Hn(n)&&0===r&&1===o){var i=e.cloneRange()
return i.setEndAfter(n),ns(i)}return null}(e):n},rs=function(e,t,n){function r(){return n=n||function(e){function t(e){var t
0!==e.height&&(0<r.length&&(t=r[r.length-1],e.left===t.left&&e.top===t.top&&e.bottom===t.bottom&&e.right===t.right)||r.push(e))}function n(e,n){var o=Ou(e.ownerDocument)
if(n<e.data.length){if(Tu(e.data[n]))return r
if(Tu(e.data[n-1])&&(o.setStart(e,n),o.setEnd(e,n+1),!Lu(o)))return t(Mu(ns(o),!1)),r}0<n&&(o.setStart(e,n-1),o.setEnd(e,n),Lu(o)||t(Mu(ns(o),!1))),n<e.data.length&&(o.setStart(e,n),o.setEnd(e,n+1),Lu(o)||t(Mu(ns(o),!0)))}var r=[],o=e.container(),i=e.offset()
if(Qu(o))return n(o,i),r
if(Wu(o))if(e.isAtEnd()){var a=ts(o,i)
Qu(a)&&n(a,a.data.length),Gu(a)&&!Zu(a)&&t(Mu(ns(a),!1))}else{if(a=ts(o,i),Qu(a)&&n(a,0),Gu(a)&&e.isAtEnd())return t(Mu(ns(a),!1)),r
var u=ts(e.container(),e.offset()-1)
Gu(u)&&!Zu(u)&&(!Xu(u)&&!Xu(a)&&Gu(a)||t(Mu(ns(u),!1))),Gu(a)&&t(Mu(ns(a),!0))}return r}(rs(e,t))}return{container:f(e),offset:f(t),toRange:function(){var n=Ou(e.ownerDocument)
return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:r,isVisible:function(){return 0<r().length},isAtStart:function(){return Qu(e),0===t},isAtEnd:function(){return Qu(e)?t>=e.data.length:t>=e.childNodes.length},isEqual:function(n){return n&&e===n.container()&&t===n.offset()},getNode:function(n){return ts(e,n?t-1:t)}}}
function os(e,t){Hn(t)&&0===t.data.length&&e.remove(t)}function is(e,t,n){var r,o,i,a,u,s,c
qn(n)?(i=e,a=t,s=ve.from((u=n).firstChild),c=ve.from(u.lastChild),a.insertNode(u),s.each((function(e){return os(i,e.previousSibling)})),c.each((function(e){return os(i,e.nextSibling)}))):(r=e,t.insertNode(o=n),os(r,o.previousSibling),os(r,o.nextSibling))}function as(e){return function(t){return e===t}}function us(e){var t,n,r,o
return(rc(e)?"text()":e.nodeName.toLowerCase())+"["+(r=ge(n=uc(ac(t=e)),as(t),t),o=me(n=n.slice(0,r+1),(function(e,t,r){return rc(t)&&rc(n[r-1])&&e++,e}),0),ge(n=fe(n,on([t.nodeName])),as(t),t)-o+"]")}function ss(e,t){var n,r,o,i=[],a=t.container(),u=t.offset()
return rc(a)?n=function(e,t){for(;(e=e.previousSibling)&&rc(e);)t+=e.data.length
return t}(a,u):(u>=(r=a.childNodes).length?(n="after",u=r.length-1):n="before",a=r[u]),i.push(us(a)),o=fe(function(e,t){var n=[]
for(t=t.parentNode;t!==e;t=t.parentNode)n.push(t)
return n}(e,a),k(sn)),(i=i.concat(le(o,us))).reverse().join("/")+","+n}function cs(e,t){if(!t)return null
var n=t.split(","),r=n[0].split("/"),o=1<n.length?n[1]:"before",i=me(r,(function(e,t){var n,r,o,i,a=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
return a?("text()"===a[1]&&(a[1]="#text"),n=e,r=a[1],o=parseInt(a[2],10),i=fe(i=uc(n),(function(e,t){return!rc(e)||!rc(i[t-1])})),(i=fe(i,on([r])))[o]):null}),e)
return i?rc(i)?function(e,t){for(var n,r=e,o=0;rc(r);){if(n=r.data.length,o<=t&&t<=o+n){e=r,t-=o
break}if(!rc(r.nextSibling)){e=r,t=n
break}o+=n,r=r.nextSibling}return rc(e)&&t>e.data.length&&(t=e.data.length),rs(e,t)}(i,parseInt(o,10)):(o="after"===o?ic(i)+1:ic(i),rs(i.parentNode,o)):null}function ls(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],s=[],c=0,l=e.getRoot()
for(Hn(a)?s.push(n?function(e,t,n){for(var r=e(t.data.slice(0,n)).length,o=t.previousSibling;o&&Hn(o);o=o.previousSibling)r+=e(o.data).length
return r}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(c=1,u=Math.max(0,i.length-1)),s.push(e.nodeIndex(i[u],n)+c));a&&a!==l;a=a.parentNode)s.push(e.nodeIndex(a,n))
return s}function fs(e,t,n){var r=0
return Et.each(e.select(t),(function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++})),r}function ds(e,t){var n,r=t?"start":"end",o=e[r+"Container"],i=e[r+"Offset"]
Un(o)&&"TR"===o.nodeName&&(o=(n=o.childNodes)[Math.min(t?i:i-1,n.length-1)])&&(i=t?0:o.childNodes.length,e["set"+(t?"Start":"End")](o,i))}function ms(e){return ds(e,!0),ds(e,!1),e}function gs(e,t){var n
return Un(e)&&(e=Du(e,t),sc(e))?e:Pr(e)?(n=(e=Hn(e)&&Or(e)?e.parentNode:e).previousSibling,sc(n)?n:(n=e.nextSibling,sc(n)?n:void 0)):void 0}function ps(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng()
if(sc(r)||"IMG"===o)return{name:o,index:fs(n.dom,o,r)}
var a,u,s,c,l,f,d,m=gs((a=i).startContainer,a.startOffset)||gs(a.endContainer,a.endOffset)
return m?{name:o=m.tagName,index:fs(n.dom,o,m)}:(f=(s=n).dom,(d={}).start=ls(f,u=e,c=t,l=i,!0),s.isCollapsed()||(d.end=ls(f,u,c,l,!1)),Ur(l)&&(d.isFakeCaret=!0),d)}function hs(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)}function vs(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName
if("IMG"===u)return{name:u,index:fs(n,u,a)}
var s=ms(r.cloneRange())
return i||(s.collapse(!1),is(n,s,hs(n,o+"_end",t))),(r=ms(r)).collapse(!0),is(n,r,hs(n,o+"_start",t)),e.moveToBookmark({id:o,keep:!0}),{id:o}}function bs(e,t,n){var r=e.getParam(t,n)
return-1===r.indexOf("=")?r:ue(e.getParam(t,"","hash"),e.id).getOr(n)}function ys(e){return e.getParam("content_security_policy","")}function Cs(e){if(e.getParam("force_p_newlines",!1))return"p"
var t=e.getParam("forced_root_block","p")
return!1===t?"":!0===t?"p":t}function xs(e){return e.getParam("forced_root_block_attrs",{})}function ws(e){return e.getParam("automatic_uploads",!0,"boolean")}function Ss(e){return e.getParam("icons","","string")}function Es(e){return e.getParam("referrer_policy","","string")}function Ns(e){return e.getParam("language","en","string")}function ks(e){return e.getParam("indent_use_margin",!1)}function _s(e){var t=e.getParam("font_css",[])
return y(t)?t:M(t.split(","),Je)}function As(e){var t=e.getParam("object_resizing")
return!1!==t&&!xt.iOS&&(v(t)?t:"table,img,figure.image,div,video,iframe")}function Rs(e){return e.getParam("event_root")}function Ds(e){return e.getParam("theme")}function Ts(e){return!1!==e.getParam("inline_boundaries")}function Os(e){return e.getParam("plugins","","string")}function Bs(e){var t=e.parentNode
t&&t.removeChild(e)}function Ps(e){var t=Co(e)
return{count:e.length-t.length,text:t}}function Ls(e){for(var t;-1!==(t=e.data.lastIndexOf(bo));)e.deleteData(t,1)}function Is(e,t){return mc(e),t}function Ms(e,t){var n,r=t.container(),o=(-1===(n=P(xe(r.childNodes),e))?ve.none():ve.some(n)).map((function(e){return e<t.offset()?rs(r,t.offset()-1):t})).getOr(t)
return mc(e),o}function Fs(e,t){return rs.isTextPosition(t)?(r=t,dc(n=e)&&r.container()===n?(a=Ps((o=n).data.substr(0,(i=r).offset())),u=Ps(o.data.substr(i.offset())),0<(a.text+u.text).length?(Ls(o),rs(o,i.offset()-a.count)):i):Is(n,r)):(s=e,((c=t).container()===s.parentNode?Ms:Is)(s,c))
var n,r,o,i,a,u,s,c}function Us(e,t,n){var r,o,i,a=Eu(t.getBoundingClientRect(),n),u="BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,e.scrollTop||r.scrollTop):(i=e.getBoundingClientRect(),o=e.scrollLeft-i.left,e.scrollTop-i.top)
a.left+=o,a.right+=o,a.top+=u,a.bottom+=u,a.width=1
var s=t.offsetWidth-t.clientWidth
return 0<s&&(n&&(s*=-1),a.left+=s,a.right+=s),a}function zs(){return gc.isIE()||gc.isEdge()||gc.isFirefox()}function Hs(e){return bc(e)||cn(e)&&zs()}function js(e,t){for(var n;n=e(t);)if(!Sc(n))return n
return null}function Vs(e,t,n,r,o){var i=new _r(e,r),a=yc(e)||Sc(e)
if(t<0){if(a&&n(e=js(i.prev.bind(i),!0)))return e
for(;e=js(i.prev.bind(i),o);)if(n(e))return e}if(0<t){if(a&&n(e=js(i.next.bind(i),!0)))return e
for(;e=js(i.next.bind(i),o);)if(n(e))return e}return null}function qs(e,t){for(;e&&e!==t;){if(xc(e))return e
e=e.parentNode}return null}function $s(e,t,n){return qs(e.container(),n)===qs(t.container(),n)}function Ws(e,t){if(!t)return null
var n=t.container(),r=t.offset()
return Ec(n)?n.childNodes[r+e]:null}function Ks(e,t){var n=t.ownerDocument.createRange()
return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n}function Xs(e,t,n){for(var r,o,i=e?"previousSibling":"nextSibling";n&&n!==t;){var a=n[i]
if(wc(a)&&(a=a[i]),yc(a)||Cc(a)){if(o=n,qs(a,r=t)===qs(o,r))return a
break}if(Nc(a))break
n=n.parentNode}return null}function Ys(e,t,n){var r,o=N(Xs,!0,t),i=N(Xs,!1,t),a=n.startContainer,u=n.startOffset
if(Or(a)){var s=(a=Ec(a)?a:a.parentNode).getAttribute("data-mce-caret")
if("before"===s&&Hs(r=a.nextSibling))return kc(r)
if("after"===s&&Hs(r=a.previousSibling))return _c(r)}if(!n.collapsed)return n
if(Hn(a)){if(wc(a)){if(1===e){if(r=i(a))return kc(r)
if(r=o(a))return _c(r)}if(-1===e){if(r=o(a))return _c(r)
if(r=i(a))return kc(r)}return n}if(Eo(a)&&u>=a.data.length-1)return 1===e&&(r=i(a))?kc(r):n
if(So(a)&&u<=1)return-1===e&&(r=o(a))?_c(r):n
if(u===a.data.length)return(r=i(a))?kc(r):n
if(0===u)return(r=o(a))?_c(r):n}return n}function Gs(e,t){return ve.from(Ws(e?0:-1,t)).filter(yc)}function Js(e,t,n){var r=Ys(e,t,n)
return-1===e?rs.fromRangeStart(r):rs.fromRangeEnd(r)}function Qs(e){return ve.from(e.getNode()).map(Nt.fromDom)}function Zs(e,t){for(;t=e(t);)if(t.isVisible())return t
return t}function ec(e,t){var n=$s(e,t)
return!(n||!$n(e.getNode()))||n}rs.fromRangeStart=function(e){return rs(e.startContainer,e.startOffset)},rs.fromRangeEnd=function(e){return rs(e.endContainer,e.endOffset)},rs.after=function(e){return rs(e.parentNode,es(e)+1)},rs.before=function(e){return rs(e.parentNode,es(e))},rs.isAbove=function(e,t){return dn(Z(t.getClientRects()),ee(e.getClientRects()),ku).getOr(!1)},rs.isBelow=function(e,t){return dn(ee(t.getClientRects()),Z(e.getClientRects()),_u).getOr(!1)},rs.isAtStart=function(e){return!!e&&e.isAtStart()},rs.isAtEnd=function(e){return!!e&&e.isAtEnd()},rs.isTextPosition=function(e){return!!e&&Hn(e.container())},rs.isElementPosition=function(e){return!1===rs.isTextPosition(e)}
var tc,nc,rc=Hn,oc=sn,ic=Ya.nodeIndex,ac=function(e){var t=e.parentNode
return oc(t)?ac(t):t},uc=function(e){return e?me(e.childNodes,(function(e,t){return oc(t)&&"BR"!==t.nodeName?e=e.concat(uc(t)):e.push(t),e}),[]):[]},sc=Xn,cc=N(ps,d,!0),lc=Ya.DOM,fc=Un,dc=Hn,mc=function(e){fc(e)&&Pr(e)&&(Lr(e)?e.removeAttribute("data-mce-caret"):Bs(e)),dc(e)&&(Ls(e),0===e.data.length&&Bs(e))},gc=dt().browser,pc=Xn,hc=Gn,vc=Yn,bc=function(e){return pc(e)||hc(e)},yc=Xn,Cc=Gn,xc=an("display","block table table-cell table-caption list-item"),wc=Pr,Sc=Or,Ec=Un,Nc=zr,kc=N(Ks,!0),_c=N(Ks,!1)
function Ac(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null}function Rc(e,t){if(0<e){if(Hl(t.previousSibling)&&!Fl(t.previousSibling))return rs.before(t)
if(Fl(t))return rs(t,0)}if(e<0){if(Hl(t.nextSibling)&&!Fl(t.nextSibling))return rs.after(t)
if(Fl(t))return rs(t,t.data.length)}return e<0&&!zl(t)?rs.after(t):rs.before(t)}function Dc(e){return{next:function(t){return Vl(tc.Forwards,t,e)},prev:function(t){return Vl(tc.Backwards,t,e)}}}function Tc(e){return rs.isTextPosition(e)?0===e.offset():zr(e.getNode())}function Oc(e){if(rs.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return zr(e.getNode(!0))}function Bc(e,t){return!rs.isTextPosition(e)&&!rs.isTextPosition(t)&&e.getNode()===t.getNode(!0)}function Pc(e,t,n){return ql(e,t,n).bind((function(r){return $s(n,r,t)&&(o=n,i=r,e?!Bc(o,i)&&(rs.isTextPosition(a=o)||!$n(a.getNode()))&&Oc(o)&&Tc(i):!Bc(i,o)&&Tc(o)&&Oc(i))?ql(e,t,r):ve.some(r)
var o,i,a}))}function Lc(e,t){var n,r,o,i,a,u=e?t.firstChild:t.lastChild
return Hn(u)?ve.some(rs(u,e?0:u.data.length)):u?zr(u)?ve.some(e?rs.before(u):$n(a=u)?rs.before(a):rs.after(a)):(r=t,o=u,i=(n=e)?rs.before(o):rs.after(o),ql(n,r,i)):ve.none()}function Ic(e){return Un(e)&&e.id===Gl}function Mc(e,t){for(;t&&t!==e;){if(t.id===Gl)return t
t=t.parentNode}return null}function Fc(e){return Et.isArray(e.start)}function Uc(e,t){return Un(t)&&e.isBlock(t)&&!t.innerHTML&&!xt.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t}function zc(e,t,n){return!1===t.hasChildNodes()&&Mc(e,t)&&(o=n,i=(r=t).ownerDocument.createTextNode(bo),r.appendChild(i),o.setStart(i,0),o.setEnd(i,0),1)
var r,o,i}function Hc(e,t,n,r){var o,i,a,u,s=n[t?"start":"end"],c=e.getRoot()
if(s){for(a=s[0],i=c,o=s.length-1;1<=o;o--){if(u=i.childNodes,zc(c,i,r))return 1
if(s[o]>u.length-1)return zc(c,i,r)||function(e){return Yl(i).fold(D,(function(t){return e.setStart(t.container(),t.offset()),e.setEnd(t.container(),t.offset()),!0}))}(r)
i=u[s[o]]}3===i.nodeType&&(a=Math.min(s[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(s[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return 1}function jc(e){return Hn(e)&&0<e.data.length}function Vc(e,t,n){var r,o,i,a,u,s,c=e.get(n.id+"_"+t),l=n.keep
if(c){if(r=c.parentNode,o="start"===t?l?c.hasChildNodes()?(r=c.firstChild,1):jc(c.nextSibling)?(r=c.nextSibling,0):jc(c.previousSibling)?(r=c.previousSibling,c.previousSibling.data.length):(r=c.parentNode,e.nodeIndex(c)+1):e.nodeIndex(c):l?c.hasChildNodes()?(r=c.firstChild,1):jc(c.previousSibling)?(r=c.previousSibling,c.previousSibling.data.length):(r=c.parentNode,e.nodeIndex(c)):e.nodeIndex(c),u=r,s=o,!l){for(a=c.previousSibling,i=c.nextSibling,Et.each(Et.grep(c.childNodes),(function(e){Hn(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));c=e.get(n.id+"_"+t);)e.remove(c,!0)
a&&i&&a.nodeType===i.nodeType&&Hn(a)&&!xt.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,s=o)}return ve.some(rs(u,s))}return ve.none()}function qc(e,t){(function(e,t){var n,r,o,i,a,u,s,c,l,f,d,m,g=e.dom
if(t){if(Fc(t))return d=t,m=(f=g).createRng(),Hc(f,!0,d,m)&&Hc(f,!1,d,m)?ve.some(m):ve.none()
if(v(t.start))return ve.some((s=t,c=(u=g).createRng(),l=cs(u.getRoot(),s.start),c.setStart(l.container(),l.offset()),l=cs(u.getRoot(),s.end),c.setEnd(l.container(),l.offset()),c))
if(Ne(t,"id"))return dn(a=Vc(o=g,"start",i=t),Vc(o,"end",i).or(a),(function(e,t){var n=o.createRng()
return n.setStart(Uc(o,e.container()),e.offset()),n.setEnd(Uc(o,t.container()),t.offset()),n}))
if(Ne(t,"name"))return n=g,ve.from(n.select((r=t).name)[r.index]).map((function(e){var t=n.createRng()
return t.selectNode(e),t}))
if(Ne(t,"rng"))return ve.some(t.rng)}return ve.none()})(e,t).each((function(t){e.setRng(t)}))}function $c(e){return Un(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")}function Wc(e){return""!==e&&-1!==" \f\n\r\t\v".indexOf(e)}function Kc(e){return!Wc(e)&&!Ql(e)}function Xc(e){return e.nodeType}function Yc(e,t,n){var r,o=n.startOffset,i=n.startContainer
if((i!==n.endContainer||!(r=i.childNodes[o])||!/^(IMG)$/.test(r.nodeName))&&Un(i)){var a=i.childNodes,u=void 0
o<a.length?(i=a[o],u=new _r(i,e.getParent(i,e.isBlock))):(i=a[a.length-1],(u=new _r(i,e.getParent(i,e.isBlock))).next(!0))
for(var s=u.current();s;s=u.next())if(Hn(s)&&!Zl(s))return n.setStart(s,0),t.setRng(n),0}}function Gc(e,t,n){if(e){var r=t?"nextSibling":"previousSibling"
for(e=n?e:e[r];e;e=e[r])if(Un(e)||!Zl(e))return e}}function Jc(e,t){return Xc(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]}function Qc(e,t,n){return e.schema.isValidChild(t,n)}function Zc(e,t){return S(e)?e=e(t):u(t)&&(e=e.replace(/%(\w+)/g,(function(e,n){return t[n]||e}))),e}function el(e,t){return e=""+((e=e||"").nodeName||e),t=""+((t=t||"").nodeName||t),e.toLowerCase()===t.toLowerCase()}function tl(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),""+("fontFamily"===n?t.replace(/[\'\"]/g,"").replace(/,\s+/g,","):t)}function nl(e,t,n){return tl(e,e.getStyle(t,n),n)}function rl(e,t){var n
return e.getParent(t,(function(t){return(n=e.getStyle(t,"text-decoration"))&&"none"!==n})),n}function ol(e,t,n){return e.getParents(t,n,e.getRoot())}function il(e,t){return I(e.formatter.get(t),(function(e){function t(e){return 1<e.length&&"%"===e.charAt(0)}return I(["styles","attributes"],(function(n){return ue(e,n).exists((function(e){var n,r
return I(y(e)?e:(n=d,r=[],ne(e,(function(e,t){r.push(n(e,t))})),r),t)}))}))}))}function al(e){return se(e,"block")}function ul(e){return se(e,"selector")}function sl(e){return se(e,"inline")}function cl(e){return ul(e)&&!1!==e.expand&&!sl(e)}function ll(e,t){for(var n=t;n;){if(Un(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t
n=n.parentNode}return t}function fl(e,t,n,r){for(var o=t.data,i=n;e?0<=i:i<o.length;e?i--:i++)if(r(o.charAt(i)))return e?i+1:i
return-1}function dl(e,t,n){return fl(e,t,n,(function(e){return Ql(e)||Wc(e)}))}function ml(e,t,n){return fl(e,t,n,Kc)}function gl(e,t,n,r,o,i){function a(t,n,r){var i=wu(e),a=o?i.backwards:i.forwards
return ve.from(a(t,n,(function(e,t){return ef(e.parentNode)?-1:r(o,u=e,t)}),s))}var u,s=e.getParent(n,e.isBlock)||t
return a(n,r,dl).bind((function(e){return i?a(e.container,e.offset+(o?-1:0),ml):ve.some(e)})).orThunk((function(){return u?ve.some({container:u,offset:o?0:u.length}):ve.none()}))}function pl(e,t,n,r,o){Hn(r)&&Pe(r.data)&&r[o]&&(r=r[o])
for(var i=tf(e,r),a=0;a<i.length;a++)for(var s=0;s<t.length;s++){var c=t[s]
if((!u(c.collapsed)||c.collapsed===n.collapsed)&&ul(c)&&e.is(i[a],c.selector))return i[a]}return r}function hl(e,t,n,r){var o,i=n,a=e.dom,u=a.getRoot(),s=t[0]
if((i=al(s)?s.wrapper?null:a.getParent(n,s.block,u):i)||(o=a.getParent(n,"LI,TD,TH"),i=a.getParent(Hn(n)?n.parentNode:n,(function(t){return t!==u&&rf(e,t)}),o)),!(i=i&&al(s)&&s.wrapper&&tf(a,i,"ul,ol").reverse()[0]||i))for(i=n;i[r]&&!a.isBlock(i[r])&&!el(i=i[r],"br"););return i||n}function vl(e,t,n,r,o){var i,a=n,u=o?"previousSibling":"nextSibling",s=e.getRoot()
if(Hn(n)&&!nf(n)&&(o?0<r:r<n.data.length))return n
for(;;){if(!t[0].block_expand&&e.isBlock(a))return a
for(var c=a[u];c;c=c[u]){var l=Hn(c)&&!of(e,s,c,u)
if(!ef(c)&&(!$n(i=c)||!i.getAttribute("data-mce-bogus")||i.nextSibling)&&!nf(c,l))return a}if(a===s||a.parentNode===s){n=a
break}a=a.parentNode}return n}function bl(e){return ef(e.parentNode)||ef(e)}function yl(e,t,n,r){void 0===r&&(r=!1)
var o=t.startContainer,i=t.startOffset,a=t.endContainer,u=t.endOffset,s=e.dom,c=n[0]
return Un(o)&&o.hasChildNodes()&&(o=Du(o,i),Hn(o)&&(i=0)),Un(a)&&a.hasChildNodes()&&(a=Du(a,t.collapsed?u:u-1),Hn(a)&&(u=a.nodeValue.length)),o=ll(s,o),a=ll(s,a),bl(o)&&(o=ef(o)?o:o.parentNode,o=t.collapsed?o.previousSibling||o:o.nextSibling||o,Hn(o)&&(i=t.collapsed?o.length:0)),bl(a)&&(a=ef(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,Hn(a)&&(u=t.collapsed?0:a.length)),t.collapsed&&(gl(s,e.getBody(),o,i,!0,r).each((function(e){var t=e.container,n=e.offset
o=t,i=n})),gl(s,e.getBody(),a,u,!1,r).each((function(e){var t=e.container,n=e.offset
a=t,u=n}))),(sl(c)||c.block_expand)&&(sl(c)&&Hn(o)&&0!==i||(o=vl(s,n,o,i,!0)),sl(c)&&Hn(a)&&u!==a.nodeValue.length||(a=vl(s,n,a,u,!1))),cl(c)&&(o=pl(s,n,t,o,"previousSibling"),a=pl(s,n,t,a,"nextSibling")),(al(c)||ul(c))&&(o=hl(e,n,o,"previousSibling"),a=hl(e,n,a,"nextSibling"),al(c)&&(s.isBlock(o)||(o=vl(s,n,o,i,!0)),s.isBlock(a)||(a=vl(s,n,a,u,!1)))),Un(o)&&(i=s.nodeIndex(o),o=o.parentNode),Un(a)&&(u=s.nodeIndex(a)+1,a=a.parentNode),{startContainer:o,startOffset:i,endContainer:a,endOffset:u}}function Cl(e,t,n){function r(e){var t=e[0]
Hn(t)&&t===s&&u>=t.data.length&&e.splice(0,1)
var n=e[e.length-1]
return 0===c&&0<e.length&&n===l&&Hn(n)&&e.splice(e.length-1,1),e}function o(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e)
return r}function i(t,n){return e.getParent(t,(function(e){return e.parentNode===n}),n)}function a(e,t,i){var a=i?"nextSibling":"previousSibling",u=e
for(u.parentNode;u&&u!==t;u=s){var s=u.parentNode,c=o(u===e?u:u[a],a)
c.length&&(i||c.reverse(),n(r(c)))}}var u=t.startOffset,s=Du(t.startContainer,u),c=t.endOffset,l=Du(t.endContainer,c-1)
if(s===l)return n(r([s]))
var f=e.findCommonAncestor(s,l)
if(e.isChildOf(s,l))return a(s,f,!0)
if(e.isChildOf(l,s))return a(l,f)
var d=i(s,f)||s,m=i(l,f)||l
a(s,d,!0)
var g=o(d===s?d:d.nextSibling,"nextSibling",m===l?m.nextSibling:m)
g.length&&n(r(g)),a(l,m)}function xl(e){var t=[]
if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n))
return t}function wl(e,t){var n=gu(t,"td[data-mce-selected],th[data-mce-selected]")
return 0<n.length?n:H(K(e,(function(e){var t=Ru(e)
return t?[Nt.fromDom(t)]:[]})),go)}function Sl(e){return wl(xl(e.selection.getSel()),Nt.fromDom(e.getBody()))}function El(e,t){return pr(e,"table",t)}function Nl(e,t){return dn((o=t.startContainer,i=t.startOffset,Hn(o)?0===i?ve.some(Nt.fromDom(o)):ve.none():ve.from(o.childNodes[i]).map(Nt.fromDom)),(n=t.endContainer,r=t.endOffset,Hn(n)?r===n.data.length?ve.some(Nt.fromDom(n)):ve.none():ve.from(n.childNodes[r-1]).map(Nt.fromDom)),(function(t,n){var r=$(af(e),N(je,t)),o=$(uf(e),N(je,n))
return r.isSome()&&o.isSome()})).getOr(!1)
var n,r,o,i}function kl(e,t,n,r){var o=n,i=new _r(n,o),a=ae(e.schema.getMoveCaretBeforeOnEnterElements(),(function(e,t){return!L(["td","th","table"],t.toLowerCase())}))
do{if(Hn(n)&&0!==Et.trim(n.nodeValue).length)return r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length),0
if(a[n.nodeName])return r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n),0}while(n=r?i.next():i.prev())
"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))}function _l(e){var t=e.selection.getSel()
return t&&0<t.rangeCount}function Al(e,t){var n=Sl(e)
0<n.length?F(n,(function(n){var r=n.dom,o=e.dom.createRng()
o.setStartBefore(r),o.setEndAfter(r),t(o,!0)})):t(e.selection.getRng(),!1)}function Rl(e,t,n){var r=vs(e,t)
n(r),e.moveToBookmark(r)}function Dl(e){return sf.get(e)}function Tl(e,t,n,r){var o=t.uid,i=void 0===o?hu("mce-annotation"):o,a=function(e,t){var n={}
for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])
return n}(t,["uid"]),u=Nt.fromTag("span",e)
du(u,Uu()),pn(u,""+Hu(),i),pn(u,""+zu(),n)
var s,c=r(i,a),l=c.attributes,f=c.classes,d=void 0===f?[]:f
return hn(u,void 0===l?{}:l),s=u,F(d,(function(e){du(s,e)})),u}function Ol(e){var t,n,r,o=(t={},{register:function(e,n){t[e]={name:e,settings:n}},lookup:function(e){return ue(t,e).map((function(e){return e.settings}))}})
r=o,(n=e).on("init",(function(){n.serializer.addNodeFilter("span",(function(e){F(e,(function(e){ve.from(e.attr(zu())).bind(r.lookup).each((function(t){!1===t.persistent&&e.unwrap()}))}))}))}))
var i=function(e){function t(){return{listeners:[],previous:uu()}}function n(e,t){r(e,(function(e){return t(e),e}))}function r(e,n){var r=o.get(),i=n(ue(r,e).getOrThunk(t))
r[e]=i,o.set(r)}var o=tu({}),i=cu((function(){var t=o.get()
F(J(we(t)),(function(t){r(t,(function(r){var o=r.previous.get()
return pu(e,ve.some(t)).fold((function(){var e
o.isSome()&&(n(e=t,(function(t){F(t.listeners,(function(t){return t(!1,e)}))})),r.previous.clear())}),(function(e){var t,i,a,u=e.uid,s=e.name,c=e.elements
fn(o,u)||(i=u,a=c,n(t=s,(function(e){F(e.listeners,(function(e){return e(!0,t,{uid:i,nodes:M(a,(function(e){return e.dom}))})}))})),r.previous.set(u))})),{previous:r.previous,listeners:r.listeners}}))}))}),30)
return e.on("remove",(function(){i.cancel()})),e.on("NodeChange",(function(){i.throttle()})),{addListener:function(e,t){r(e,(function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}}))}}}(e)
return{register:function(e,t){o.register(e,t)},annotate:function(t,n){o.lookup(t).each((function(r){var o,i,a,u
i=t,a=r,u=n,(o=e).undoManager.transact((function(){var e,t,n,r,s=o.selection,c=s.getRng(),l=0<Sl(o).length
c.collapsed&&!l&&(n=yl(e=o,t=c,[{inline:"span"}]),t.setStart(n.startContainer,n.startOffset),t.setEnd(n.endContainer,n.endOffset),e.selection.setRng(t)),s.getRng().collapsed&&!l?(vu(r=Tl(o.getDoc(),u,i,a.decorate),vo),s.getRng().insertNode(r.dom),s.select(r.dom)):Rl(s,!1,(function(){Al(o,(function(e){(function(e,t,n,r,o){function i(){c.clear()}function a(e){F(e,l)}var u=[],s=Tl(e.getDoc(),o,n,r),c=uu(),l=function(t){var n,r,o,l,f,d
switch(o=e,f="span",d=kt(l=t),Ot(l).fold((function(){return"skipping"}),(function(e){return"br"===d||kn(n=l)&&Dl(n)===bo?"valid":Nn(t=l)&&mu(t,Uu())?"existing":Ic(l.dom)?"caret":Qc(o,f,d)&&Qc(o,kt(e),f)?"valid":"invalid-child"
var t,n}))){case"invalid-child":i(),a(Rn(t)),i()
break
case"valid":qt(n=t,r=c.get().getOrThunk((function(){var e=yu(s)
return u.push(e),c.set(e),e}))),Bn(r,n)}}
Cl(e.dom,t,(function(e){i(),a(M(e,Nt.fromDom))}))})(o,e,i,a.decorate,u)}))}))}))}))},annotationChanged:function(e,t){i.addListener(e,t)},remove:function(t){pu(e,ve.some(t)).each((function(e){F(e.elements,Yt)}))},getAll:function(t){var n,r,o
return re((n=t,r=gu(Nt.fromDom(e.getBody()),"["+zu()+'="'+n+'"]'),o={},F(r,(function(e){var t=vn(e,Hu()),n=ue(o,t).getOr([])
o[t]=n.concat([e])})),o),(function(e){return M(e,(function(e){return e.dom}))}))}}}function Bl(e){return{getBookmark:N(Jl,e),moveToBookmark:N(qc,e)}}function Pl(e){return Do(e)||!!Bo(t=e)&&!0!==V(xe(t.getElementsByTagName("*")),(function(e,t){return e||No(t)}),!1)
var t}(nc=tc=tc||{})[nc.Backwards=-1]="Backwards",nc[nc.Forwards=1]="Forwards"
var Ll,Il,Ml=Xn,Fl=Hn,Ul=Un,zl=$n,Hl=zr,jl=Hr,Vl=function(e,t,n){var r,o,i
if(!Ul(n)||!t)return null
if(t.isEqual(rs.after(n))&&n.lastChild){if(i=rs.after(n.lastChild),e<0&&Hl(n.lastChild)&&Ul(n.lastChild))return zl(n.lastChild)?rs.before(n.lastChild):i}else i=t
var a,u,s,c=i.container(),l=i.offset()
if(Fl(c)){if(e<0&&0<l)return rs(c,--l)
if(0<e&&l<c.length)return rs(c,++l)
r=c}else{if(e<0&&0<l&&(f=Ac(c,l-1),Hl(f)))return!Pl(f)&&(o=Vs(f,e,jl,f))?Fl(o)?rs(o,o.data.length):rs.after(o):Fl(f)?rs(f,f.data.length):rs.before(f)
if(0<e&&l<c.childNodes.length&&(f=Ac(c,l),Hl(f)))return zl(f)?(a=n,(s=(u=f).nextSibling)&&Hl(s)?Fl(s)?rs(s,0):rs.before(s):Vl(tc.Forwards,rs.after(u),a)):!Pl(f)&&(o=Vs(f,e,jl,f))?Fl(o)?rs(o,0):rs.before(o):Fl(f)?rs(f,0):rs.after(f)
r=f||i.getNode()}if((0<e&&i.isAtEnd()||e<0&&i.isAtStart())&&(r=Vs(r,e,T,n,!0),jl(r,n)))return Rc(e,r)
var f=Vs(r,e,jl,n),d=pe(H(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode
return n}(c,n),Ml))
return!d||f&&d.contains(f)?f?Rc(e,f):null:0<e?rs.after(d):rs.before(d)},ql=function(e,t,n){var r=Dc(t)
return ve.from(e?r.next(n):r.prev(n))},$l=function(e,t,n,r){return Pc(e,t,n).bind((function(n){return r(n)?$l(e,t,n,r):ve.some(n)}))},Wl=N(ql,!0),Kl=N(ql,!1),Xl=N(Lc,!0),Yl=N(Lc,!1),Gl="_mce_caret",Jl=function(e,t,n){return 2===t?ps(Co,n,e):3===t?(o=(r=e).getRng(),{start:ss(r.dom.getRoot(),rs.fromRangeStart(o)),end:ss(r.dom.getRoot(),rs.fromRangeEnd(o))}):t?{rng:e.getRng()}:vs(e,!1)
var r,o},Ql=(vo,function(e){return" "===e}),Zl=function(e,t){return void 0===t&&(t=!1),!(!u(e)||!Hn(e))&&jr(t?e.data.replace(/ /g," "):e.data)},ef=$c,tf=ol,nf=Zl,rf=Jc,of=function(e,t,n,r){var o=n.parentNode
return!u(n[r])&&(!(o!==t&&!a(o)&&!e.isBlock(o))||of(e,t,o,r))},af=function(e){return Ft(e).fold(f([e]),(function(t){return[e].concat(af(t))}))},uf=function(e){return Ut(e).fold(f([e]),(function(t){return"br"===kt(t)?Bt(t).map((function(t){return[e].concat(uf(t))})).getOr([]):[e].concat(uf(t))}))},sf=(Ll=kn,{get:function(e){if(!Ll(e))throw new Error("Can only get text value of a text node")
return Il(e).getOr("")},getOption:Il=function(e){return Ll(e)?ve.from(e.dom.nodeValue):ve.none()},set:function(e,t){if(!Ll(e))throw new Error("Can only set raw text value of a text node")
e.dom.nodeValue=t}})
function cf(e,t){for(;t&&t!==e;){if(Kn(t)||Xn(t))return t
t=t.parentNode}return null}function lf(e,t,n){if(!n.collapsed){if(xt.browser.isIE()&&n.startOffset===n.endOffset-1&&n.startContainer===n.endContainer){var r=n.startContainer.childNodes[n.startOffset]
if(Un(r))return I(r.getClientRects(),(function(n){return Au(n,e,t)}))}return I(n.getClientRects(),(function(n){return Au(n,e,t)}))}}function ff(e,t,n){return e.fire(t,n)}function df(e,t,n,r){return e.fire("FormatApply",{format:t,node:n,vars:r})}function mf(e,t,n,r){return e.fire("FormatRemove",{format:t,node:n,vars:r})}function gf(e,t){function n(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))}function o(e){return Gn(e)||T.hasClass(e,"mce-preview-object")}function i(e){var r=e.target
!function(e,t){if("longpress"!==e.type&&0!==e.type.indexOf("touch"))return n(e.target)&&!lf(e.clientX,e.clientY,t)
var r=e.touches[0]
return n(e.target)&&!lf(r.clientX,r.clientY,t)}(e,t.selection.getRng())||e.isDefaultPrevented()||t.selection.select(r)}function a(e){return T.is(e,"figure.image")?[e.querySelector("img")]:T.hasClass(e,"mce-preview-object")&&u(e.firstElementChild)?[e,e.firstElementChild]:[e]}function s(e){var n=As(t)
return!!n&&"false"!==e.getAttribute("data-mce-resize")&&e!==t.getBody()&&(T.hasClass(e,"mce-preview-object")?ze(Nt.fromDom(e.firstElementChild),n):ze(Nt.fromDom(e),n))}function c(e,n,r){u(r)&&F(a(e),(function(e){e.style[n]||!t.schema.isValid(e.nodeName.toLowerCase(),n)?T.setStyle(e,n,r):T.setAttrib(e,n,""+r)}))}function l(e,t,n){c(e,"width",t),c(e,"height",n)}function f(e){var r,i,a,u,s,c,f=e.screenX-C,d=e.screenY-x
k=f*b[2]+w,_=d*b[3]+S,k=k<5?5:k,_=_<5?5:_,((n(p)||o(p))&&!1!==t.getParam("resize_img_proportional",!0,"boolean")?!_f.modifierPressed(e):_f.modifierPressed(e))&&(L(f)>L(d)?(_=I(k*E),k=I(_/E)):(k=I(_/E),_=I(k*E))),l(h,k,_),r=b.startPos.x+f,i=b.startPos.y+d,T.setStyles(v,{left:r=0<r?r:0,top:i=0<i?i:0,display:"block"}),v.innerHTML=k+" &times; "+_,b[2]<0&&h.clientWidth<=k&&T.setStyle(h,"left",void 0+(w-k)),b[3]<0&&h.clientHeight<=_&&T.setStyle(h,"top",void 0+(S-_)),(f=M.scrollWidth-A)+(d=M.scrollHeight-R)!=0&&T.setStyles(v,{left:r-f,top:i-d}),N||(a=p,u=w,s=S,c="corner-"+b.name,t.fire("ObjectResizeStart",{target:a,width:u,height:s,origin:c}),N=!0)}function d(n){function r(e,t){if(e)do{if(e===t)return 1}while(e=e.parentNode)}var o
N||t.removed||(O(T.select("img[data-mce-selected],hr[data-mce-selected]"),(function(e){e.removeAttribute(D)})),o="mousedown"===n.type?n.target:e.getNode(),r(o=T.$(o).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0],M)&&(g(),r(e.getStart(!0),o)&&r(e.getEnd(!0),o))?H(o):j())}function m(e){return Af(cf(t.getBody(),e))}function g(){try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(r){}}var p,h,v,b,y,C,x,w,S,E,N,k,_,A,R,D="data-mce-selected",T=t.dom,O=Et.each,B=t.getDoc(),P=document,L=Math.abs,I=Math.round,M=t.getBody(),U={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},z=function(){var e,n,r,o,i=N
N=!1,i&&(c(p,"width",k),c(p,"height",_)),T.unbind(B,"mousemove",f),T.unbind(B,"mouseup",z),P!==B&&(T.unbind(P,"mousemove",f),T.unbind(P,"mouseup",z)),T.remove(h),T.remove(v),T.remove(y),H(p),i&&(e=p,n=k,r=_,o="corner-"+b.name,t.fire("ObjectResized",{target:e,width:n,height:r,origin:o}),T.setAttrib(p,"style",T.getAttrib(p,"style"))),t.nodeChanged()},H=function(e){V()
var n=T.getPos(e,M),r=n.x,i=n.y,u=e.getBoundingClientRect(),c=u.width||u.right-u.left,d=u.height||u.bottom-u.top
p!==e&&(j(),p=e,k=_=0)
var m=t.fire("ObjectSelected",{target:e}),g=T.getAttrib(p,D,"1")
s(e)&&!m.isDefaultPrevented()?O(U,(function(e,t){var n=T.get("mceResizeHandle"+t)
n&&T.remove(n),n=T.add(M,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),11===xt.ie&&(n.contentEditable=!1),T.bind(n,"mousedown",(function(n){var u,s,m
n.stopImmediatePropagation(),n.preventDefault(),u=n,m=a(p)[0],C=u.screenX,x=u.screenY,w=m.clientWidth,S=m.clientHeight,E=S/w,(b=e).name=t,b.startPos={x:c*e[0]+r,y:d*e[1]+i},A=M.scrollWidth,R=M.scrollHeight,y=T.add(M,"div",{class:"mce-resize-backdrop","data-mce-bogus":"all"}),T.setStyles(y,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"}),h=o(s=p)?T.create("img",{src:xt.transparentSrc}):s.cloneNode(!0),T.addClass(h,"mce-clonedresizable"),T.setAttrib(h,"data-mce-bogus","all"),h.contentEditable="false",T.setStyles(h,{left:r,top:i,margin:0}),l(h,c,d),h.removeAttribute(D),M.appendChild(h),T.bind(B,"mousemove",f),T.bind(B,"mouseup",z),P!==B&&(T.bind(P,"mousemove",f),T.bind(P,"mouseup",z)),v=T.add(M,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},w+" &times; "+S)})),e.elm=n,T.setStyles(n,{left:c*e[0]+r-n.offsetWidth/2,top:d*e[1]+i-n.offsetHeight/2})})):j(),T.getAttrib(p,D)||p.setAttribute(D,g)},j=function(){V(),p&&p.removeAttribute(D),ne(U,(function(e,t){var n=T.get("mceResizeHandle"+t)
n&&(T.unbind(n),T.remove(n))}))},V=function(){ne(U,(function(e){e.elm&&(T.unbind(e.elm),delete e.elm)}))}
return t.on("init",(function(){var e
g(),(xt.browser.isIE()||xt.browser.isEdge())&&(t.on("mousedown click",(function(e){var n=e.target,r=n.nodeName
N||!/^(TABLE|IMG|HR)$/.test(r)||m(n)||(2!==e.button&&t.selection.select(n,"TABLE"===r),"mousedown"===e.type&&t.nodeChanged())})),T.bind(M,"mscontrolselect",e=function(e){function n(e){Nr.setEditorTimeout(t,(function(){return t.selection.select(e)}))}if(m(e.target)||Gn(e.target))return e.preventDefault(),void n(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&n(e.target))}),t.on("remove",(function(){return T.unbind(M,"mscontrolselect",e)})))
var n=Nr.throttle((function(e){t.composing||d(e)}))
t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",n),t.on("keyup compositionend",(function(e){p&&"TABLE"===p.nodeName&&n(e)})),t.on("hide blur",j),t.on("contextmenu longpress",i,!0)})),t.on("remove",V),{isResizable:s,showResizeRect:H,hideResizeRect:j,updateResizeRect:d,destroy:function(){p=h=y=null}}}function pf(e){return Kn(e)||Xn(e)}function hf(e,t,n){var r,o,i,a,u,s=n
if(s.caretPositionFromPoint)(o=s.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(o.offsetNode,o.offset),r.collapse(!0))
else if(s.caretRangeFromPoint)r=s.caretRangeFromPoint(e,t)
else if(s.body.createTextRange){r=s.body.createTextRange()
try{r.moveToPoint(e,t),r.collapse(!0)}catch(o){r=function(e,t,n){var r,o=n.elementFromPoint(e,t),i=n.body.createTextRange()
if(o&&"HTML"!==o.tagName||(o=n.body),i.moveToElementText(o),0<(r=(r=Et.toArray(i.getClientRects())).sort((function(e,n){return(e=Math.abs(Math.max(e.top-t,e.bottom-t)))-Math.abs(Math.max(n.top-t,n.bottom-t))}))).length){t=(r[0].bottom+r[0].top)/2
try{return i.moveToPoint(e,t),i.collapse(!0),i}catch(e){}}return null}(e,t,n)}return i=r,a=n.body,u=i&&i.parentElement?i.parentElement():null,Xn(function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(u,a,pf))?null:i}return r}function vf(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset}function bf(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(e,t,n)}function yf(e){return e&&"TABLE"===e.nodeName}function Cf(e,t,n){for(var r=new _r(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if($n(t))return 1}function xf(e,t,n,r,o){var i,a,u=e.getRoot(),s=e.schema.getNonEmptyElements(),c=e.getParent(o.parentNode,e.isBlock)||u
if(r&&$n(o)&&t&&e.isEmpty(c))return ve.some(rs(o.parentNode,e.nodeIndex(o)))
for(var l,f,d=new _r(o,c);a=d[r?"prev":"next"]();){if("false"===e.getContentEditableParent(a)||(f=u,Pr(l=a)&&!1===bf(l,f,Ic)))return ve.none()
if(Hn(a)&&0<a.nodeValue.length)return!1===bf(a,u,(function(e){return"A"===e.nodeName}))?ve.some(rs(a,r?a.nodeValue.length:0)):ve.none()
if(e.isBlock(a)||s[a.nodeName.toLowerCase()])return ve.none()
i=a}return n&&i?ve.some(rs(i,0)):ve.none()}function wf(e,t,n,r){var o,i=e.getRoot(),a=!1,u=r[(n?"start":"end")+"Container"],s=r[(n?"start":"end")+"Offset"],c=Un(u)&&s===u.childNodes.length,l=e.schema.getNonEmptyElements(),f=n
if(Pr(u))return ve.none()
if(Un(u)&&s>u.childNodes.length-1&&(f=!1),Vn(u)&&(u=i,s=0),u===i){if(f&&(d=u.childNodes[0<s?s-1:0])){if(Pr(d))return ve.none()
if(l[d.nodeName]||yf(d))return ve.none()}if(u.hasChildNodes()){if(s=Math.min(!f&&0<s?s-1:s,u.childNodes.length-1),u=u.childNodes[s],s=Hn(u)&&c?u.data.length:0,!t&&u===i.lastChild&&yf(u))return ve.none()
if(function(e,t){for(;t&&t!==e;){if(Xn(t))return 1
t=t.parentNode}}(i,u)||Pr(u))return ve.none()
if(u.hasChildNodes()&&!1===yf(u)){var d=u,m=new _r(u,i)
do{if(Xn(d)||Pr(d)){a=!1
break}if(Hn(d)&&0<d.nodeValue.length){s=f?0:d.nodeValue.length,u=d,a=!0
break}if(l[d.nodeName.toLowerCase()]&&(!(o=d)||!/^(TD|TH|CAPTION)$/.test(o.nodeName))){s=e.nodeIndex(d),u=d.parentNode,f||s++,a=!0
break}}while(d=f?m.next():m.prev())}}}return t&&(Hn(u)&&0===s&&xf(e,c,t,!0,u).each((function(e){u=e.container(),s=e.offset(),a=!0})),Un(u)&&(!(d=(d=u.childNodes[s])||u.childNodes[s-1])||!$n(d)||d.previousSibling&&"A"===d.previousSibling.nodeName||Cf(e,d,!1)||Cf(e,d,!0)||xf(e,c,t,!0,d).each((function(e){u=e.container(),s=e.offset(),a=!0})))),f&&!t&&Hn(u)&&s===u.nodeValue.length&&xf(e,c,t,!1,u).each((function(e){u=e.container(),s=e.offset(),a=!0})),a?ve.some(rs(u,s)):ve.none()}function Sf(e,t){var n=t.collapsed,r=t.cloneRange(),o=rs.fromRangeStart(t)
return wf(e,n,!0,r).each((function(e){n&&rs.isAbove(o,e)||r.setStart(e.container(),e.offset())})),n||wf(e,n,!1,r).each((function(e){r.setEnd(e.container(),e.offset())})),n&&r.collapse(!0),vf(t,r)?ve.none():ve.some(r)}function Ef(e,t){return e.splitText(t)}function Nf(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset
return t===r&&Hn(t)?0<n&&n<t.nodeValue.length&&(t=(r=Ef(t,n)).previousSibling,n<o?(t=r=Ef(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(Hn(t)&&0<n&&n<t.nodeValue.length&&(t=Ef(t,n),n=0),Hn(r)&&0<o&&o<r.nodeValue.length&&(o=(r=Ef(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}}function kf(e){return{walk:function(t,n){return Cl(e,t,n)},split:Nf,normalize:function(t){return Sf(e,t).fold(D,(function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0}))}}}Bl.isBookmarkNode=$c
var _f={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,ESC:27,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||_f.metaKeyPressed(e)},metaKeyPressed:function(e){return xt.mac?e.metaKey:e.ctrlKey&&!e.altKey}},Af=Xn
kf.compareRanges=vf,kf.getCaretRangeFromPoint=hf,kf.getSelectedNode=Ru,kf.getNode=Du
var Rf,Df,Tf=(Rf="height",Df=function(e){var t=e.dom
return Ln(e)?t.getBoundingClientRect().height:t.offsetHeight},{set:function(e,t){if(!E(t)&&!t.match(/^[0-9]+$/))throw new Error(Rf+".set accepts only positive integer values. Value was "+t)
var n=e.dom
mn(n)&&(n.style[Rf]=t+"px")},get:Of,getOuter:Of,aggregate:Bf,max:function(e,t,n){var r=Bf(e,n)
return r<t?t-r:0}})
function Of(e){var t=Df(e)
if(t<=0||null===t){var n=Cn(e,Rf)
return parseFloat(n)||0}return t}function Bf(e,t){return V(t,(function(t,n){var r=Cn(e,n),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}function Pf(e){return"textarea"===kt(e)}function Lf(e,t){var n=function(e){var t=e.dom.ownerDocument,n=t.body,r=t.defaultView,o=t.documentElement
if(n===e.dom)return Mn(n.offsetLeft,n.offsetTop)
var i=Gt(null==r?void 0:r.pageYOffset,o.scrollTop),a=Gt(null==r?void 0:r.pageXOffset,o.scrollLeft),u=Gt(o.clientTop,n.clientTop),s=Gt(o.clientLeft,n.clientLeft)
return Fn(e).translate(a-s,i-u)}(e),r=Tf.get(e)
return{element:e,bottom:n.top+r,height:r,pos:n,cleanup:t}}function If(e,t,n,r){wd(e,(function(o,i){return xd(e,t,n,r)}),n)}function Mf(e,t,n,r,o){var i={elm:r.element.dom,alignToTop:o}
e.fire("ScrollIntoView",i).isDefaultPrevented()||(n(t,Jt(t).top,r,o),e.fire("AfterScrollIntoView",i))}function Ff(e,t,n,r){var o=Nt.fromDom(e.getDoc())
Mf(e,o,n,Lf(Nt.fromDom(t),s),r)}function Uf(e,t,n,r){var o,i=e.pos
n?Qt(i.left,i.top,r):(o=i.top-t+e.height,Qt(i.left,o,r))}function zf(e,t,n,r,o){var i=n+t,a=r.pos.top,u=r.bottom,s=n<=u-a
a<t?Uf(r,n,!1!==o,e):i<a?Uf(r,n,s?!1!==o:!0===o,e):i<u&&!s&&Uf(r,n,!0===o,e)}function Hf(e,t,n,r){zf(e,t,e.dom.defaultView.innerHeight,n,r)}function jf(e,t,n,r){zf(e,t,e.dom.defaultView.innerHeight,n,r)
var o,i,a,u,s,c,l,f=(o=n.element,u=Jt(Nt.fromDom(document)),a=(i=Cd).owner(o),s=yd(i,a),c=Fn(o),l=j(s,(function(e,t){var n=Fn(t)
return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0}),Mn(l.left+c.left+u.left,l.top+c.top+u.top)),d=tn(window)
f.top<d.y?Zt(n.element,!1!==r):f.top>d.bottom&&Zt(n.element,!0===r)}function Vf(e,t,n){return If(e,Hf,t,n)}function qf(e,t,n){return Ff(e,t,Hf,n)}function $f(e,t,n){return If(e,jf,t,n)}function Wf(e,t,n){return Ff(e,t,jf,n)}function Kf(e,t,n){(e.inline?Vf:$f)(e,t,n)}function Xf(e){var t=On(e).dom
return e.dom===t.activeElement}function Yf(e){return void 0===e&&(e=Nt.fromDom(document)),ve.from(e.dom.activeElement).map(Nt.fromDom)}function Gf(e,t){var n=kn(t)?Dl(t).length:Rn(t).length+1
return n<e?n:e<0?0:e}function Jf(e){return kd.range(e.start,Gf(e.soffset,e.start),e.finish,Gf(e.foffset,e.finish))}function Qf(e,t){return!rn(t.dom)&&(Ve(e,t)||je(e,t))}function Zf(e){return function(t){return Qf(e,t.start)&&Qf(e,t.finish)}}function ed(e){return!0===e.inline||_d.isIE()}function td(e){return kd.range(Nt.fromDom(e.startContainer),e.startOffset,Nt.fromDom(e.endContainer),e.endOffset)}function nd(e){var t=document.createRange()
try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),ve.some(t)}catch(e){return ve.none()}}function rd(e){var t,n,r=ed(e)?((n=Tt(t=Nt.fromDom(e.getBody())).dom.getSelection())&&0!==n.rangeCount?ve.from(n.getRangeAt(0)):ve.none()).map(td).filter(Zf(t)):ve.none()
e.bookmark=r.isSome()?r:e.bookmark}function od(e){return(e.bookmark||ve.none()).bind((function(t){return n=Nt.fromDom(e.getBody()),ve.from(t).filter(Zf(n)).map(Jf)
var n})).bind(nd)}function id(e,t){var n=e.getParam("custom_ui_selector","","string")
return null!==Rd.getParent(t,(function(t){return Ad.isEditorUIElement(t)||!!n&&e.dom.is(t,n)}))}function ad(e,t){var n=t.editor;(function(e){var t=su((function(){rd(e)}),0)
e.on("init",(function(){function n(){o.throttle()}var r,o,i,a,u,s
e.inline&&(r=e,o=t,Ya.DOM.bind(document,"mouseup",n),r.on("remove",(function(){Ya.DOM.unbind(document,"mouseup",n)}))),i=e,a=t,dt().browser.isIE()?(s=i).on("focusout",(function(){rd(s)})):(u=a,i.on("mouseup touchend",(function(e){u.throttle()}))),i.on("keyup NodeChange",(function(e){"nodechange"===e.type&&e.selectionChange||rd(i)}))})),e.on("remove",(function(){t.cancel()}))})(n),n.on("focusin",(function(){var t=e.focusedEditor
t!==n&&(t&&t.fire("blur",{focusedEditor:n}),e.setActive(n),(e.focusedEditor=n).fire("focus",{blurredEditor:t}),n.focus(!0))})),n.on("focusout",(function(){Nr.setEditorTimeout(n,(function(){var t=e.focusedEditor
id(n,function(e){try{return Yf(On(Nt.fromDom(e.getElement()))).fold((function(){return document.body}),(function(e){return e.dom}))}catch(e){return document.body}}(n))||t!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),bd||(bd=function(t){var n=e.activeEditor
n&&function(e){if(Tn()&&u(e.target)){var t=Nt.fromDom(e.target)
if(Nn(t)&&u(t.dom.shadowRoot)&&e.composed&&e.composedPath){var n=e.composedPath()
if(n)return Z(n)}}return ve.from(e.target)}(t).each((function(t){t.ownerDocument===document&&(t===document.body||id(n,t)||e.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))}))},Rd.bind(document,"focusin",bd))}function ud(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(Rd.unbind(document,"focusin",bd),bd=null)}function sd(e,t){var n,r
n=Nt.fromDom(e.getBody()),((r=t).collapsed?ve.from(Du(r.startContainer,r.startOffset)).map(Nt.fromDom):ve.none()).bind((function(e){return mo(e)?ve.some(e):!1===Ve(n,e)?ve.some(n):ve.none()})).bind((function(e){return Xl(e.dom)})).fold((function(){e.selection.normalize()}),(function(t){return e.selection.setRng(t.toRange())}))}function cd(e){if(e.setActive)try{e.setActive()}catch(r){e.focus()}else e.focus()}function ld(e){return e.inline?(r=e.getBody())&&(Xf(t=Nt.fromDom(r))||Yf(On(n=t)).filter((function(e){return n.dom.contains(e.dom)})).isSome()):e.iframeElement&&Xf(Nt.fromDom(e.iframeElement))
var t,n,r}function fd(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset
return ve.from(i).map(Nt.fromDom).map((function(e){return r&&t.collapsed?e:Mt(e,o(e,a)).getOr(e)})).bind((function(e){return Nn(e)?ve.some(e):Ot(e).filter(Nn)})).map((function(e){return e.dom})).getOr(e)}function dd(e,t,n){return fd(e,t,!0,n,(function(e,t){return Math.min(zt(e),t)}))}function md(e,t,n){return fd(e,t,!1,n,(function(e,t){return 0<t?t-1:t}))}function gd(e,t){for(var n=e;e&&Hn(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling
return e||n}function pd(e,t){return M(t,(function(t){var n=e.fire("GetSelectionRange",{range:t})
return n.range!==t?n.range:t}))}function hd(e,t,n){var r=n?"lastChild":"firstChild",o=n?"prev":"next"
if(e[r])return e[r]
if(e!==t){var i=e[o]
if(i)return i
for(var a=e.parent;a&&a!==t;a=a.parent)if(i=a[o])return i}}function vd(e){var t="a"===e.name&&!e.attr("href")&&e.attr("id")
return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t}var bd,yd=function(e,t){return e.view(t).fold(f([]),(function(t){var n=e.owner(t),r=yd(e,n)
return[t].concat(r)}))},Cd=Object.freeze({__proto__:null,view:function(e){var t
return(e.dom===document?ve.none():ve.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(Nt.fromDom)},owner:Dt}),xd=function(e,t,n,r){var o=Nt.fromDom(e.getBody()),i=Nt.fromDom(e.getDoc())
o.dom.offsetWidth
var a,u,s=(a=function(e,t){var n=Rn(e)
if(0===n.length||Pf(e))return{element:e,offset:t}
if(t<n.length&&!Pf(n[t]))return{element:n[t],offset:0}
var r=n[n.length-1]
return Pf(r)?{element:e,offset:t}:"img"===kt(r)?{element:r,offset:1}:kn(r)?{element:r,offset:Dl(r).length}:{element:r,offset:Rn(r).length}}(Nt.fromDom(n.startContainer),n.startOffset),u=Nt.fromHtml('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>'),qt(a.element,u),Lf(u,(function(){return Pn(u)})))
Mf(e,i,t,s,r),s.cleanup()},wd=function(e,t,n){var r=n.startContainer,o=n.startOffset,i=n.endContainer,a=n.endOffset
t(Nt.fromDom(r),Nt.fromDom(i))
var u=e.dom.createRng()
u.setStart(r,o),u.setEnd(i,a),e.selection.setRng(n)},Sd=rr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Ed=(Sd.before,Sd.on,Sd.after,function(e){return e.fold(d,d,d)}),Nd=rr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),kd={domRange:Nd.domRange,relative:Nd.relative,exact:Nd.exact,exactFromRange:function(e){return Nd.exact(e.start,e.soffset,e.finish,e.foffset)},getWin:function(e){return Tt(e.match({domRange:function(e){return Nt.fromDom(e.startContainer)},relative:function(e,t){return Ed(e)},exact:function(e,t,n,r){return e}}))},range:function(e,t,n,r){return{start:e,soffset:t,finish:n,foffset:r}}},_d=dt().browser,Ad={isEditorUIElement:function(e){var t=e.className.toString()
return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},Rd=Ya.DOM,Dd=function(e){return e.editorManager.setActive(e)},Td={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},Od=(Bd.create=function(e,t){var n=new Bd(e,Td[e]||1)
return t&&ne(t,(function(e,t){n.attr(t,e)})),n},Bd.prototype.replace=function(e){return e.parent&&e.remove(),this.insert(e,this),this.remove(),this},Bd.prototype.attr=function(e,t){var n,r=this
if("string"!=typeof e)return null!=e&&ne(e,(function(e,t){r.attr(t,e)})),r
if(n=r.attributes){if(void 0===t)return n.map[e]
if(null===t){if(e in n.map){delete n.map[e]
for(var o=n.length;o--;)if(n[o].name===e)return n.splice(o,1),r}return r}if(e in n.map){for(o=n.length;o--;)if(n[o].name===e){n[o].value=t
break}}else n.push({name:e,value:t})
return n.map[e]=t,r}},Bd.prototype.clone=function(){var e,t=new Bd(this.name,this.type)
if(e=this.attributes){var n=[]
n.map={}
for(var r=0,o=e.length;r<o;r++){var i=e[r]
"id"!==i.name&&(n[n.length]={name:i.name,value:i.value},n.map[i.name]=i.value)}t.attributes=n}return t.value=this.value,t.shortEnded=this.shortEnded,t},Bd.prototype.wrap=function(e){return this.parent.insert(e,this),e.append(this),this},Bd.prototype.unwrap=function(){for(var e=this.firstChild;e;){var t=e.next
this.insert(e,this,!0),e=t}this.remove()},Bd.prototype.remove=function(){var e=this.parent,t=this.next,n=this.prev
return e&&(e.firstChild===this?(e.firstChild=t)&&(t.prev=null):n.next=t,e.lastChild===this?(e.lastChild=n)&&(n.next=null):t.prev=n,this.parent=this.next=this.prev=null),this},Bd.prototype.append=function(e){e.parent&&e.remove()
var t=this.lastChild
return t?((t.next=e).prev=t,this.lastChild=e):this.lastChild=this.firstChild=e,e.parent=this,e},Bd.prototype.insert=function(e,t,n){e.parent&&e.remove()
var r=t.parent||this
return n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,(e.next=t).prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,(e.prev=t).next=e),e.parent=r,e},Bd.prototype.getAll=function(e){for(var t=[],n=this.firstChild;n;n=hd(n,this))n.name===e&&t.push(n)
return t},Bd.prototype.children=function(){for(var e=[],t=this.firstChild;t;t=t.next)e.push(t)
return e},Bd.prototype.empty=function(){if(this.firstChild){for(var e=[],t=this.firstChild;t;t=hd(t,this))e.push(t)
for(var n=e.length;n--;)(t=e[n]).parent=t.firstChild=t.lastChild=t.next=t.prev=null}return this.firstChild=this.lastChild=null,this},Bd.prototype.isEmpty=function(e,t,n){void 0===t&&(t={})
var r=this.firstChild
if(vd(this))return!1
if(r)do{if(1===r.type){if(r.attr("data-mce-bogus"))continue
if(e[r.name])return!1
if(vd(r))return!1}if(8===r.type)return!1
if(3===r.type&&!function(e){if(jr(e.value)){var t=e.parent
return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)}}(r))return!1
if(3===r.type&&r.parent&&t[r.parent.name]&&jr(r.value))return!1
if(n&&n(r))return!1}while(r=hd(r,this))
return!0},Bd.prototype.walk=function(e){return hd(this,null,e)},Bd)
function Bd(e,t){this.name=e,1===(this.type=t)&&(this.attributes=[],this.attributes.map={})}function Pd(e,t){return e.replace(t.re,(function(e){return ue(t.uris,e).getOr(e)}))}var Ld=Et.each,Id=Et.trim,Md="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),Fd={ftp:21,http:80,https:443,mailto:25},Ud=["img","video"],zd=(Hd.parseDataUri=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return{type:t=r?r[1]:t,data:n[1]}},Hd.isDomSafe=function(e,t,n){if((n=void 0===n?{}:n).allow_script_urls)return!0
var r,o,i,a,s=Xo.decode(e).replace(/[\s\u0000-\u001F]+/g,"")
try{s=decodeURIComponent(s)}catch(e){s=unescape(s)}return!(/((java|vb)script|mhtml):/i.test(s)||(o=s,i=t,!(r=n).allow_html_data_urls&&(/^data:image\//i.test(o)?(u(a=r.allow_svg_data_urls)?!a:!u(i)||!L(Ud,i))&&/^data:image\/svg\+xml/i.test(o):/^data:/i.test(o))))},Hd.getDocumentBaseUrl=function(e){var t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname
return/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t},Hd.prototype.setPath=function(e){var t=/^(.*?)\/?(\w+)?$/.exec(e)
this.path=t[0],this.directory=t[1],this.file=t[2],this.source="",this.getURI()},Hd.prototype.toRelative=function(e){var t
if("./"===e)return e
var n=new Hd(e,{base_uri:this})
if("mce_host"!==n.host&&this.host!==n.host&&n.host||this.port!==n.port||this.protocol!==n.protocol&&""!==n.protocol)return n.getURI()
var r=this.getURI(),o=n.getURI()
return r===o||"/"===r.charAt(r.length-1)&&r.substr(0,r.length-1)===o?r:(t=this.toRelPath(this.path,n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),t)},Hd.prototype.toAbsolute=function(e,t){var n=new Hd(e,{base_uri:this})
return n.getURI(t&&this.isSameOrigin(n))},Hd.prototype.isSameOrigin=function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0
var t=Fd[this.protocol]
if(t&&(this.port||t)==(e.port||t))return!0}return!1},Hd.prototype.toRelPath=function(e,t){var n,r,o=0,i="",a=e.substring(0,e.lastIndexOf("/")).split("/"),u=t.split("/")
if(a.length>=u.length)for(n=0,r=a.length;n<r;n++)if(n>=u.length||a[n]!==u[n]){o=n+1
break}if(a.length<u.length)for(n=0,r=u.length;n<r;n++)if(n>=a.length||a[n]!==u[n]){o=n+1
break}if(1===o)return t
for(n=0,r=a.length-(o-1);n<r;n++)i+="../"
for(n=o-1,r=u.length;n<r;n++)i+=n!==o-1?"/"+u[n]:u[n]
return i},Hd.prototype.toAbsPath=function(e,t){var n,r,o=0,i=[],a=/\/$/.test(t)?"/":"",u=e.split("/"),s=t.split("/")
for(Ld(u,(function(e){e&&i.push(e)})),u=i,n=s.length-1,i=[];0<=n;n--)0!==s[n].length&&"."!==s[n]&&(".."!==s[n]?0<o?o--:i.push(s[n]):o++)
return 0!==(r=(n=u.length-o)<=0?Y(i).join("/"):u.slice(0,n).join("/")+"/"+Y(i).join("/")).indexOf("/")&&(r="/"+r),a&&r.lastIndexOf("/")!==r.length-1&&(r+=a),r},Hd.prototype.getURI=function(e){var t
return void 0===e&&(e=!1),this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source},Hd)
function Hd(e,t){e=Id(e),this.settings=t||{}
var n,r,o,i,a=this.settings.base_uri,u=this;/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e)?u.source=e:(n=0===e.indexOf("//"),0!==e.indexOf("/")||n||(e=(a&&a.protocol||"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(r=this.settings.base_uri?this.settings.base_uri.path:new Hd(document.location.href).directory,e=this.settings.base_uri&&""==this.settings.base_uri.protocol?"//mce_host"+u.toAbsPath(r,e):(o=/([^#?]*)([#?]?.*)/.exec(e),(a&&a.protocol||"http")+"://mce_host"+u.toAbsPath(r,o[1])+o[2])),e=e.replace(/@@/g,"(mce_at)"),i=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),Ld(Md,(function(e,t){var n=(n=i[t])&&n.replace(/\(mce_at\)/g,"@@")
u[e]=n})),a&&(u.protocol||(u.protocol=a.protocol),u.userInfo||(u.userInfo=a.userInfo),u.port||"mce_host"!==u.host||(u.port=a.port),u.host&&"mce_host"!==u.host||(u.host=a.host),u.source=""),n&&(u.protocol=""))}function jd(e,t,n){for(var r=/<([!?\/])?([A-Za-z0-9\-_:.]+)/g,o=/(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,i=e.getShortEndedElements(),a=1,u=n;0!==a;)for(r.lastIndex=u;;){var s=r.exec(t)
if(null===s)return u
if("!"===s[1]){u=Ge(s[2],"--")?$d(t,!1,s.index+"!--".length):$d(t,!0,s.index+1)
break}o.lastIndex=r.lastIndex
var c=o.exec(t)
if(!C(c)&&c.index===r.lastIndex){"/"===s[1]?--a:Ne(i,s[2])||(a+=1),u=r.lastIndex+c[0].length
break}}return u}function Vd(e,t){var n
void 0===t&&(t=Zr())
var r=null!==(n=(e=e||{}).document)&&void 0!==n?n:document,o=r.createElement("form")
!1!==e.fix_self_closing&&(e.fix_self_closing=!0)
var i=e.comment||s,a=e.cdata||s,u=e.text||s,c=e.start||s,l=e.end||s,f=e.pi||s,d=e.doctype||s
return{parse:function(n,s){void 0===s&&(s="html"),function(n,s){void 0===s&&(s="html")
for(var m,g,p,h,v,b,y,C,x,w,S,E,N,k,_,A,R,D,T,O=n.html,B=0,P=[],L=0,I=Xo.decode,M=Et.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),F="html"===s?0:1,U=function(e){for(var t,n=P.length;n--&&P[n].name!==e;);if(0<=n){for(t=P.length-1;n<=t;t--)(e=P[t]).valid&&l(e.name)
P.length=n}},z=function(e,t){return u(Pd(e,n),t)},H=function(t){""!==t&&(">"===t.charAt(0)&&(t=" "+t),e.allow_conditional_comments||"[if"!==t.substr(0,3).toLowerCase()||(t=" "+t),i(Pd(t,n)))},j=function(e,t){var n=e||"",r=!Ge(n,"--"),o=$d(O,r,t)
return e=O.substr(t,o-t),H(r?n+e:e),o+1},V=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))","g"),q=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,$=t.getShortEndedElements(),W=e.self_closing_elements||t.getSelfClosingElements(),K=t.getBoolAttrs(),X=e.validate,Y=e.remove_internals,G=e.fix_self_closing,J=t.getSpecialElements(),Q=O+">";m=V.exec(Q);){var Z=m[0]
if(B<m.index&&z(I(O.substr(B,m.index-B))),g=m[7])U(g=":"===(g=g.toLowerCase()).charAt(0)?g.substr(1):g)
else if(g=m[8]){if(m.index+Z.length>O.length){z(I(O.substr(m.index))),B=m.index+Z.length
continue}x=(g=":"===(g=g.toLowerCase()).charAt(0)?g.substr(1):g)in $,G&&W[g]&&0<P.length&&P[P.length-1].name===g&&U(g)
var ee=function(e,t){var n=e.exec(t)
if(n){var r=n[1],o=n[2]
return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null}(q,m[9])
if(null!==ee){if("all"===ee){B=jd(t,O,V.lastIndex),V.lastIndex=B
continue}S=!1}if(!X||(w=t.getElementRule(g))){if(S=!0,X&&(k=w.attributes,_=w.attributePatterns),(N=m[9])?((C=-1!==N.indexOf("data-mce-type"))&&Y&&(S=!1),(h=[]).map={},N.replace(q,(function(t,i,a,u,s){return function(t,i,a,u,s){var c
if(a=Pd((i=i.toLowerCase())in K?i:I(a||u||s||""),n),X&&!C&&0==(0===(c=i).indexOf("data-")||0===c.indexOf("aria-"))){var l=k[i]
if(!l&&_){for(var f=_.length;f--&&!(l=_[f]).pattern.test(i););-1===f&&(l=null)}if(!l)return
if(l.validValues&&!(a in l.validValues))return}("name"===i||"id"===i)&&t in qd&&(a in r||a in o)||M[i]&&!zd.isDomSafe(a,t,e)||C&&(i in M||0===i.indexOf("on"))||(h.map[i]=a,h.push({name:i,value:a}))}(g,i,a,u,s),""}))):(h=[]).map={},X&&!C){if(A=w.attributesRequired,R=w.attributesDefault,D=w.attributesForced,w.removeEmptyAttrs&&!h.length&&(S=!1),D)for(v=D.length;v--;)y=(E=D[v]).name,"{$uid}"===(T=E.value)&&(T="mce_"+L++),h.map[y]=T,h.push({name:y,value:T})
if(R)for(v=R.length;v--;)(y=(E=R[v]).name)in h.map||("{$uid}"===(T=E.value)&&(T="mce_"+L++),h.map[y]=T,h.push({name:y,value:T}))
if(A){for(v=A.length;v--&&!(A[v]in h.map););-1===v&&(S=!1)}if(E=h.map["data-mce-bogus"]){if("all"===E){B=jd(t,O,V.lastIndex),V.lastIndex=B
continue}S=!1}}S&&c(g,h,x)}else S=!1
if(p=J[g]){p.lastIndex=B=m.index+Z.length,B=(m=p.exec(O))?(S&&(b=O.substr(B,m.index-B)),m.index+m[0].length):(b=O.substr(B),O.length),S&&(0<b.length&&z(b,!0),l(g)),V.lastIndex=B
continue}x||(N&&N.indexOf("/")===N.length-1?S&&l(g):P.push({name:g,valid:S}))}else if(g=m[1])H(g)
else if(g=m[2]){if(!(1==F||e.preserve_cdata||0<P.length&&t.isValidChild(P[P.length-1].name,"#cdata"))){B=j("",m.index+2),V.lastIndex=B
continue}a(g)}else if(g=m[3])d(g)
else{if((g=m[4])||"<!"===Z){B=j(g,m.index+Z.length),V.lastIndex=B
continue}if(g=m[5]){if(1!=F){B=j("?",m.index+2),V.lastIndex=B
continue}f(g,m[6])}}B=m.index+Z.length}for(B<O.length&&z(I(O.substr(B))),v=P.length-1;0<=v;v--)(g=P[v]).valid&&l(g.name)}(function(e){for(var t,n=/data:[^;]+;base64,([a-z0-9\+\/=\s]+)/gi,r=[],o={},i=hu("img"),a=0,u=0;t=n.exec(e);){var s=t[0],c=i+"_"+u++
o[c]=s,a<t.index&&r.push(e.substr(a,t.index-a)),r.push(c),a=t.index+s.length}var l=new RegExp(i+"_[0-9]+","g")
return 0===a?{prefix:i,uris:o,html:e,re:l}:(a<e.length&&r.push(e.substr(a)),{prefix:i,uris:o,html:r.join(""),re:l})}(n),s)}}}var qd=Et.makeMap("button,fieldset,form,iframe,img,image,input,object,output,select,textarea"),$d=function(e,t,n){void 0===n&&(n=0)
var r=e.toLowerCase()
if(-1!==r.indexOf("[if ",n)&&(u=n,/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))){var o=r.indexOf("[endif]",n)
return r.indexOf(">",o)}if(t){var i=r.indexOf(">",n)
return-1!==i?i:r.length}var a=/--!?>/g
a.lastIndex=n
var u,s=a.exec(e)
return s?s.index+s[0].length:r.length}
function Wd(e,t){for(var n,r,o,i,a=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,u=e.schema,s=(n=e.getTempAttrs(),r=t,o=new RegExp(["\\s?("+n.join("|")+')="[^"]+"'].join("|"),"gi"),r.replace(o,"")),c=u.getShortEndedElements();i=a.exec(s);){var l=a.lastIndex,f=i[0].length,d=c[i[1]]?l:Vd.findEndTag(u,s,l)
s=s.substring(0,l-f)+s.substring(d)
a.lastIndex=l-f}return Co(s)}function Kd(e){return{compare:function(t,n){return t.nodeName===n.nodeName&&!(!o(r(t),r(n))||!o(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))||$c(t)||$c(n))
function r(t){var n={}
return Jd(e.getAttribs(t),(function(r){var o=r.nodeName.toLowerCase()
0!==o.indexOf("_")&&"style"!==o&&0!==o.indexOf("data-")&&(n[o]=e.getAttrib(t,o))})),n}function o(e,t){var n,r
for(r in e)if(Ne(e,r)){if(void 0===(n=t[r]))return
if(e[r]!==n)return
delete t[r]}for(r in t)if(Ne(t,r))return
return 1}}}}function Xd(e){var t=[],n=(e=e||{}).indent,r=Qd(e.indent_before||""),o=Qd(e.indent_after||""),i=Xo.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="html"===e.element_format
return{start:function(e,u,s){var c,l,f,d
if(n&&r[e]&&0<t.length&&0<(d=t[t.length-1]).length&&"\n"!==d&&t.push("\n"),t.push("<",e),u)for(c=0,l=u.length;c<l;c++)f=u[c],t.push(" ",f.name,'="',i(f.value,!0),'"')
t[t.length]=!s||a?">":" />",s&&n&&o[e]&&0<t.length&&0<(d=t[t.length-1]).length&&"\n"!==d&&t.push("\n")},end:function(e){var r
t.push("</",e,">"),n&&o[e]&&0<t.length&&0<(r=t[t.length-1]).length&&"\n"!==r&&t.push("\n")},text:function(e,n){0<e.length&&(t[t.length]=n?e:i(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,r){r?t.push("<?",e," ",i(r),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}}function Yd(e,t){void 0===t&&(t=Zr())
var n=Xd(e)
return(e=e||{}).validate=!("validate"in e)||e.validate,{serialize:function(r){var o=e.validate,i={3:function(e){n.text(e.value,e.raw)},8:function(e){n.comment(e.value)},7:function(e){n.pi(e.name,e.value)},10:function(e){n.doctype(e.value)},4:function(e){n.cdata(e.value)},11:function(e){if(e=e.firstChild)for(;a(e),e=e.next;);}}
n.reset()
var a=function(e){var r=i[e.type]
if(r)r(e)
else{var u=e.name,s=e.shortEnded,c=e.attributes
if(o&&c&&1<c.length){var l=[]
l.map={}
var f=t.getElementRule(e.name)
if(f){for(var d=0,m=f.attributesOrder.length;d<m;d++)(g=f.attributesOrder[d])in c.map&&(p=c.map[g],l.map[g]=p,l.push({name:g,value:p}))
var g,p
for(d=0,m=c.length;d<m;d++)(g=c[d].name)in l.map||(p=c.map[g],l.map[g]=p,l.push({name:g,value:p}))
c=l}}if(n.start(e.name,c,s),!s){if(e=e.firstChild)for(;a(e),e=e.next;);n.end(u)}}}
return 1!==r.type||e.inner?i[11](r):a(r),n.getContent()}}}Vd.findEndTag=jd
var Gd=Wd,Jd=Et.each,Qd=Et.makeMap,Zd=new Set
function em(e,t){return we(e.parseStyle(e.getAttrib(t,"style")))}function tm(e,t,n){return ve.from(n.container()).filter(Hn).exists((function(r){var o=e?0:-1
return t(r.data.charAt(n.offset()+o))}))}function nm(e){var t=e.container()
return Hn(t)&&(0===t.data.length||yo(t.data)&&Bl.isBookmarkNode(t.parentNode))}function rm(e,t){return function(n){return ve.from(Ws(e?0:-1,n)).filter(t).isSome()}}function om(e){return Wn(e)&&"block"===Cn(Nt.fromDom(e),"display")}function im(e){return Xn(e)&&!(Un(t=e)&&"all"===t.getAttribute("data-mce-bogus"))
var t}function am(e){Xt(e),Bn(e,Nt.fromHtml('<br data-mce-bogus="1">'))}function um(e){Ut(e).each((function(t){Bt(t).each((function(n){so(e)&&Tr(t)&&so(n)&&Pn(t)}))}))}function sm(e,t){return o=D,Ve(r=t,n=e)?function(e,t){for(var n=S(t)?t:D,r=e.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,a=Nt.fromDom(i)
if(o.push(a),!0===n(a))break
r=i}return o}(n,(function(e){return o(e)||je(e,r)})).slice(0,-1):[]
var n,r,o}function cm(e,t){return[e].concat(sm(e,t))}function lm(e,t,n){return $l(e,t,n,nm)}function fm(e,t){return $(cm(Nt.fromDom(t.container()),e),so)}function dm(e,t,n){return lm(e,t.dom,n).forall((function(e){return fm(t,n).fold((function(){return!1===$s(e,n,t.dom)}),(function(r){return!1===$s(e,n,t.dom)&&Ve(r,Nt.fromDom(e.container()))}))}))}function mm(e,t,n){return fm(t,n).fold((function(){return lm(e,t.dom,n).forall((function(e){return!1===$s(e,n,t.dom)}))}),(function(t){return lm(e,t.dom,n).isNone()}))}function gm(e){return Qs(e).exists(Tr)}function pm(e,t,n){var r=Z(H(cm(Nt.fromDom(n.container()),t),so)).getOr(t)
return ql(e,r.dom,n).filter(gm)}function hm(e,t){return Qs(t).exists(Tr)||pm(!0,e,t).isSome()}function vm(e,t){return ve.from(t.getNode(!0)).map(Nt.fromDom).exists(Tr)||pm(!1,e,t).isSome()}function bm(e){return rs.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()}function ym(e,t){return Z(H(cm(Nt.fromDom(t.container()),e),so)).getOr(e)}function Cm(e,t){return bm(t)?Bg(t):Bg(t)||Kl(ym(e,t).dom,t).exists(Bg)}function xm(e,t){return bm(t)?Og(t):Og(t)||Wl(ym(e,t).dom,t).exists(Og)}function wm(e){return Qs(e).bind((function(e){return gr(e,Nn)})).exists((function(e){return L(["pre","pre-wrap"],Cn(e,"white-space"))}))}function Sm(e,t){return!wm(t)&&(jg(e,t)||qg(e,t)||vm(e,t)||Cm(e,t))}function Em(e,t){return!wm(t)&&(Vg(e,t)||$g(e,t)||hm(e,t)||xm(e,t))}function Nm(e,t){return Sm(e,t)||Em(e,(r=(n=t).container(),o=n.offset(),Hn(r)&&o<r.data.length?rs(r,o+1):n))
var n,r,o}function km(e,t){return Ql(e.charAt(t))}function _m(e){var t=e.container()
return Hn(t)&&Te(t.data,vo)}function Am(e){var t=Nt.fromDom(e.getBody())
e.selection.isCollapsed()&&function(e,t){return ve.some(t).filter(_m).bind((function(t){var n,r,o,i,a,u,s,c,l,f=t.container(),d=e,m=(a=f).data,g=rs(a,0)
return(!km(m,0)||Nm(d,g)?(c=(u=f).data,(l=M(s=c.split(""),(function(e,t){return Ql(e)&&0<t&&t<s.length-1&&Kc(s[t-1])&&Kc(s[t+1])?" ":e})).join(""))!==c&&(u.data=l,1)):(a.data=" "+m.slice(1),1))||(n=e,o=(r=f).data,i=rs(r,o.length-1),km(o,o.length-1)&&!Nm(n,i)&&(r.data=o.slice(0,-1)+" ",1))?ve.some(t):ve.none()}))}(t,rs.fromRangeStart(e.selection.getRng())).each((function(t){e.selection.setRng(t.toRange())}))}function Rm(e,t,n){var r,o,i,a,u,s,c,l
0!==n&&(o=mr(r=Nt.fromDom(e),so).getOr(r),i=e.data.slice(t,t+n),a=t+n>=e.data.length&&Em(o,rs(e,e.data.length)),u=0===t&&Sm(o,rs(e,0)),e.replaceData(t,n,(c=u,l=a,V(s=i,(function(e,t){return Wc(t)||Ql(t)?e.previousCharIsSpace||""===e.str&&c||e.str.length===s.length-1&&l?{previousCharIsSpace:!1,str:e.str+vo}:{previousCharIsSpace:!0,str:e.str+" "}:{previousCharIsSpace:!1,str:e.str+t}}),{previousCharIsSpace:!1,str:""}).str)))}function Dm(e,t){var n=e.data.slice(t)
Rm(e,t,n.length-Qe(n).length)}function Tm(e,t){var n=e.data.slice(0,t),r=n.length-Ze(n).length
Rm(e,t-r,r)}function Om(e,t,n,r){void 0===r&&(r=!0)
var o=Ze(e.data).length,i=r?e:t,a=r?t:e
return r?i.appendData(a.data):i.insertData(0,a.data),Pn(Nt.fromDom(a)),n&&Dm(i,o),i}function Bm(e,t){return r=e,o=(n=t).container(),i=n.offset(),!1===rs.isTextPosition(n)&&o===r.parentNode&&i>rs.before(r).offset()?rs(t.container(),t.offset()-1):t
var n,r,o,i}function Pm(e){return zr(e.previousSibling)?ve.some((t=e.previousSibling,Hn(t)?rs(t,t.data.length):rs.after(t))):e.previousSibling?Yl(e.previousSibling):ve.none()
var t}function Lm(e){return zr(e.nextSibling)?ve.some((t=e.nextSibling,Hn(t)?rs(t,0):rs.before(t))):e.nextSibling?Xl(e.nextSibling):ve.none()
var t}function Im(e,t){return Pm(t).orThunk((function(){return Lm(t)})).orThunk((function(){return n=e,o=rs.before((r=t).previousSibling||r.parentNode),Kl(n,o).fold((function(){return Wl(n,rs.after(r))}),ve.some)
var n,r,o}))}function Mm(e,t){return Lm(t).orThunk((function(){return Pm(t)})).orThunk((function(){return Wl(n=e,rs.after(r=t)).fold((function(){return Kl(n,rs.before(r))}),ve.some)
var n,r}))}function Fm(e,t,n){n.fold((function(){e.focus()}),(function(n){e.selection.setRng(n.toRange(),t)}))}function Um(e,t){return t&&Ne(e.schema.getBlockElements(),kt(t))}function zm(e){if(qr(e)){var t=Nt.fromHtml('<br data-mce-bogus="1">')
return Xt(e),Bn(e,t),ve.some(rs.before(t.dom))}return ve.none()}function Hm(e,t,n,r){void 0===r&&(r=!0)
var o,i,a,u,s,c,l,f,d,m,g,p,h=(t?Mm:Im)(e.getBody(),p=n.dom).map(N(Bm,p)),v=mr(n,N(Um,e),(o=e.getBody(),function(e){return e.dom===o})),b=(u=h,i=a=n,s=Ne(e.schema.getTextInlineElements(),kt(i)),m=Bt(a).filter(kn),g=Pt(a).filter(kn),Pn(a),l=g,f=u,d=function(e,t,n){var r=e.dom,o=t.dom,i=r.data.length
return Om(r,o,s),n.container()===o?rs(r,i):n},((c=m).isSome()&&l.isSome()&&f.isSome()?ve.some(d(c.getOrDie(),l.getOrDie(),f.getOrDie())):ve.none()).orThunk((function(){return s&&(m.each((function(e){return Tm(e.dom,e.dom.length)})),g.each((function(e){return Dm(e.dom,0)}))),u})))
e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):v.bind(zm).fold((function(){r&&Fm(e,t,b)}),(function(n){r&&Fm(e,t,ve.some(n))}))}function jm(e){return gu(e,"td,th")}function Vm(e,t){return{start:e,end:t}}function qm(e,t){return vr(Nt.fromDom(e),"td,th",t)}function $m(e){return!je(e.start,e.end)}function Wm(e,t){return El(e.start,t).bind((function(n){return El(e.end,t).bind((function(e){return je(n,e)?ve.some(n):ve.none()}))}))}function Km(e){return function(t){return Wm(t,e).map((function(e){return{rng:t,table:e,cells:jm(e)}}))}}function Xm(e,t,n,r){if(n.collapsed||!e.forall($m))return ve.none()
if(t.isSameTable){var o=e.bind(Km(r))
return ve.some({start:o,end:o})}var i,a,u=qm(n.startContainer,r),s=qm(n.endContainer,r),c=u.bind((a=r,function(e){return El(e,a).bind((function(t){return ee(jm(t)).map((function(t){return Vm(e,t)}))}))})).bind(Km(r)),l=s.bind((i=r,function(e){return El(e,i).bind((function(t){return Z(jm(t)).map((function(t){return Vm(t,e)}))}))})).bind(Km(r))
return ve.some({start:c,end:l})}function Ym(e,t){return W(e,(function(e){return je(e,t)}))}function Gm(e){return dn(Ym(e.cells,e.rng.start),Ym(e.cells,e.rng.end),(function(t,n){return e.cells.slice(t,n+1)}))}function Jm(e,t){var n=t.startTable,r=t.endTable,o=e.cloneRange()
return n.each((function(e){return o.setStartAfter(e.dom)})),r.each((function(e){return o.setEndBefore(e.dom)})),o}function Qm(e){return F(e,(function(e){yn(e,"contenteditable"),am(e)})),0}function Zm(e,t,n,r){var o=n.cloneRange()
r?(o.setStart(n.startContainer,n.startOffset),o.setEndAfter(t.dom.lastChild)):(o.setStartBefore(t.dom.firstChild),o.setEnd(n.endContainer,n.endOffset)),Gg(e,o,t,!1)}function eg(e){var t=Sl(e),n=Nt.fromDom(e.selection.getNode())
Yn(n.dom)&&qr(n)?e.selection.setCursorLocation(n.dom,0):e.selection.collapse(!0),1<t.length&&I(t,(function(e){return je(e,n)}))&&pn(n,"data-mce-selected","1")}function tg(e,t,n){var r=e.selection.getRng()
return Qm(n.bind((function(n){var o,i,a,u=n.rng,s=n.isStartInTable,c=(o=s?u.endContainer:u.startContainer,ve.from(e.dom.getParent(o,e.dom.isBlock)).map(Nt.fromDom))
u.deleteContents(),i=e,a=s,c.filter(qr).each((function(e){a?Pn(e):(am(e),i.selection.setCursorLocation(e.dom,0))}))
var l=s?t[0]:t[t.length-1]
return Zm(e,l,r,s),qr(l)?ve.none():ve.some(s?t.slice(1):t.slice(0,-1))})).getOr(t)),eg(e),!0}function ng(e,t,n,r){var o=e.selection.getRng(),i=t[0],a=n[n.length-1]
Zm(e,i,o,!0),Zm(e,a,o,!1)
var u=qr(i)?t:t.slice(1),s=qr(a)?n:n.slice(0,-1)
return Qm(u.concat(s)),r.deleteContents(),eg(e),!0}function rg(e,t){return Hm(e,!1,t),!0}function og(e,t){return $(cm(t,e),go)}function ig(e,t){return(e?Fg:Ug)(t)}function ag(e,t){var n,r,o,i,a,u,s,c,l=Nt.fromDom(e.selection.getStart(!0)),f=Sl(e)
return e.selection.isCollapsed()&&0===f.length?function(e,t,n){var r=Nt.fromDom(e.getBody())
return Jg(r,n).fold((function(){return o=e,i=t,a=r,u=n,s=rs.fromRangeStart(o.selection.getRng()),og(a,u).bind((function(e){return qr(e)?Qg(o,e):(t=a,n=e,r=s,Pc(i,o.getBody(),r).bind((function(e){return og(t,Nt.fromDom(e.getNode())).map((function(e){return!1===je(e,n)}))})))
var t,n,r})).getOr(!1)||(l=t,f=rs.fromRangeStart((c=e).selection.getRng()),ig(l,f)||ql(l,c.getBody(),f).exists((function(e){return ig(l,e)})))
var o,i,a,u,s,c,l,f}),(function(n){return l=t,f=r,d=n,m=rs.fromRangeStart((c=e).selection.getRng()),(qr(d)?Qg(c,d):(i=f,u=d,s=m,Pc(a=l,(o=c).getBody(),s).bind((function(e){return r=a,c=s,l=e,Xl((n=u).dom).bind((function(e){return Yl(n.dom).map((function(t){return r?c.isEqual(e)&&l.isEqual(t):c.isEqual(t)&&l.isEqual(e)}))})).getOr(!0)?Qg(o,u):(t=u,Jg(i,Nt.fromDom(e.getNode())).map((function(e){return!1===je(e,t)})))
var t,n,r,c,l})).or(ve.some(!0)))).getOr(!1)
var o,i,a,u,s,c,l,f,d,m}))}(e,t,l):(r=l,o=f,i=Nt.fromDom((n=e).getBody()),a=n.selection.getRng(),0!==o.length?tg(n,o,ve.none()):(u=n,c=a,Jg(s=i,r).fold((function(){return e=u,function(e,t){var n,r,o,i,a,u,s,c,l,f,d,m,g,p,h,v,b=(n=e,function(e){return je(n,e)}),y=dn(qm((r=t).startContainer,o=b),qm(r.endContainer,o),Vm),C=(l=b,f=x((c=t).startContainer),d=x(c.endContainer),m=f.isSome(),g=d.isSome(),{startTable:f,endTable:d,isStartInTable:m,isEndInTable:g,isSameTable:p=dn(f,d,je).getOr(!1),isMultiTable:!p&&m&&g})
function x(e){return El(Nt.fromDom(e),l)}return h=t,v=b,y.exists((function(e){return!$m(t=e)&&Wm(t,v).exists((function(e){var t=e.dom.rows
return 1===t.length&&1===t[0].cells.length}))&&Nl(e.start,h)
var t}))?y.map((function(e){return Xg.singleCellTable(t,e.start)})):C.isMultiTable?Xm(y,u=C,s=t,b).bind((function(e){var t=e.start,n=e.end,r=t.bind(Gm).getOr([]),o=n.bind(Gm).getOr([])
if(0<r.length&&0<o.length){var i=Jm(s,u)
return ve.some(Xg.multiTable(r,o,i))}return ve.none()})):Xm(y,i=C,a=t,b).bind((function(e){var t=e.start,n=e.end
return t.or(n)})).bind((function(e){var t=i.isSameTable,n=Gm(e).getOr([])
if(t&&e.cells.length===n.length)return ve.some(Xg.fullTable(e.table))
if(0<n.length){if(t)return ve.some(Xg.partialTable(n,ve.none()))
var r=Jm(a,i)
return ve.some(Xg.partialTable(n,ve.some(_e(_e({},i),{rng:r}))))}return ve.none()}))}(s,c).map((function(t){return t.fold(N(Gg,e),N(rg,e),N(tg,e),N(ng,e))}))
var e}),(function(e){return Qg(u,e)})).getOr(!1)))}function ug(e){return e.collapsed?e:(t=e,n=rs.fromRangeStart(t),r=rs.fromRangeEnd(t),o=t.commonAncestorContainer,ql(!1,o,r).map((function(e){return!$s(n,r,o)&&$s(n,e,o)?(i=n.container(),a=n.offset(),u=e.container(),s=e.offset(),(c=document.createRange()).setStart(i,a),c.setEnd(u,s),c):t
var i,a,u,s,c})).getOr(t))
var t,n,r,o}function sg(e,t){var n=e.getParent(t,e.isBlock)
return n&&"LI"===n.nodeName?n:null}function cg(e,t){var n=rs.after(e),r=Dc(t).prev(n)
return r?r.toRange():null}function lg(e,t,n,r){function o(e){var r=rs.fromRangeStart(n),o=Dc(t.getRoot()),i=1===e?o.prev(r):o.next(r)
return!i||sg(t,i.getNode())!==R}var i,a,u,s,c,l,f,d,m,g,p,h,v,b,y,C,x,w,S,E,N,k,_,A=(i=t,c=e.serialize(r),u=(a=i.createFragment(c)).firstChild,s=a.lastChild,u&&"META"===u.nodeName&&u.parentNode.removeChild(u),s&&"mce_marker"===s.id&&s.parentNode.removeChild(s),a),R=sg(t,n.startContainer),D=function(e){return 0<e.length&&(!(r=e[e.length-1]).firstChild||(t=r)&&t.firstChild&&t.firstChild===t.lastChild&&((n=t.firstChild).data===vo||$n(n)))?e.slice(0,-1):e
var t,n,r}(H(A.firstChild.childNodes,(function(e){return"LI"===e.nodeName}))),T=t.getRoot()
return o(1)?(S=T,_=(w=R).parentNode,Et.each(D,(function(e){_.insertBefore(e,w)})),E=S,N=rs.before(w),(k=Dc(E).next(N))?k.toRange():null):o(2)?(l=R,d=T,t.insertAfter((f=D).reverse(),l),cg(f[0],d)):(g=D,p=T,h=m=R,b=(v=n).cloneRange(),y=v.cloneRange(),b.setStartBefore(h),y.setEndAfter(h),C=[b.cloneContents(),y.cloneContents()],(x=m.parentNode).insertBefore(C[0],m),Et.each(g,(function(e){x.insertBefore(e,m)})),x.insertBefore(C[1],m),x.removeChild(m),cg(g[g.length-1],p))}function fg(e,t,n){var r,o,i,a,s=e.selection,c=e.dom;/^ | $/.test(t)&&(r=c,o=s.getRng(),i=t,i=Sm(a=Nt.fromDom(r.getRoot()),rs.fromRangeStart(o))?i.replace(/^ /,"&nbsp;"):i.replace(/^&nbsp;/," "),t=i=Em(a,rs.fromRangeEnd(o))?i.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):i.replace(/&nbsp;(<br( \/)?>)?$/," "))
var l=e.parser,f=n.merge,d=Yd({validate:e.getParam("validate")},e.schema),m='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',g=e.fire("BeforeSetContent",{content:t,format:"html",selection:!0,paste:n.paste})
if(g.isDefaultPrevented())e.fire("SetContent",{content:g.content,format:"html",selection:!0,paste:n.paste})
else{-1===(t=g.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,m)
var p,h,v=(p=s.getRng()).startContainer||(p.parentElement?p.parentElement():null),b=e.getBody()
v===b&&s.isCollapsed()&&c.isBlock(b.firstChild)&&(h=b.firstChild)&&!e.schema.getShortEndedElements()[h.nodeName]&&c.isEmpty(b.firstChild)&&((p=c.createRng()).setStart(b.firstChild,0),p.setEnd(b.firstChild,0),s.setRng(p)),s.isCollapsed()||function(e){var t=e.dom,n=ug(e.selection.getRng())
e.selection.setRng(n)
var r,o=t.getParent(n.startContainer,Zg),i=n
null!==(r=o)&&r===t.getParent(i.endContainer,Zg)&&Nl(Nt.fromDom(r),i)?Gg(e,n,Nt.fromDom(o)):e.getDoc().execCommand("Delete",!1,null)}(e)
var y,C,x,w,S,E,N,k,_,A,R,D,T,O,B={context:(F=s.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0},P=l.parse(t,B)
if(!0===n.paste&&function(e,t){var n,r,o,i,a,u=t.firstChild,s=t.lastChild
return u&&"meta"===u.name&&(u=u.next),r=s=s&&"mce_marker"===s.attr("id")?s.prev:s,o=(n=e).getNonEmptyElements(),r&&(r.isEmpty(o)||(i=r,n.getBlockElements()[i.name]&&i.firstChild&&i.firstChild===i.lastChild&&("br"===(a=i.firstChild).name||a.value===vo)))&&(s=s.prev),u&&u===s&&("ul"===u.name||"ol"===u.name)}(e.schema,P)&&sg(c,F))return p=lg(d,c,s.getRng(),P),s.setRng(p),void e.fire("SetContent",g)
if(function(){for(var e=P;e=e.walk();)1===e.type&&e.attr("data-mce-fragment","1")}(),"mce_marker"===(M=P.lastChild).attr("id"))for(var L=M,M=M.prev;M;M=M.walk(!0))if(3===M.type||!c.isBlock(M.name)){e.schema.isValidChild(M.parent.name,"span")&&M.parent.insert(L,M,"br"===M.name)
break}if(e._selectionOverrides.showBlockCaretContainer(F),B.invalid){e.selection.setContent(m)
var F=s.getNode(),U=e.getBody()
for(9===F.nodeType?F=M=U:M=F;M!==U;)M=(F=M).parentNode
t=F===U?U.innerHTML:c.getOuterHTML(F),t=d.serialize(l.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,(function(){return d.serialize(P)})))),F===U?c.setHTML(U,t):c.setOuterHTML(F,t)}else y=e,C=t=d.serialize(P),"all"===(x=F).getAttribute("data-mce-bogus")?x.parentNode.insertBefore(y.dom.createFragment(C),x):(w=x.firstChild,S=x.lastChild,!w||w===S&&"BR"===w.nodeName?y.dom.setHTML(x,C):y.selection.setContent(C))
N=f,A=(E=e).schema.getTextInlineElements(),R=E.dom,N&&(k=E.getBody(),_=Kd(R),Et.each(R.select("*[data-mce-fragment]"),(function(e){if(u(A[e.nodeName.toLowerCase()])&&X(em(R,e),(function(e){return!Zd.has(e)})))for(var t=e.parentNode;u(t)&&t!==k&&!function(e,t,n){function r(r){var o=e.getStyle(t,r),i=e.getStyle(n,r)
return Be(o)&&Be(i)&&o!==i}var o=em(e,t),i=em(e,n)
return I(o,(function(e){function t(t){return I(t,(function(t){return t===e}))}if(t(i)||!t(Tg))return r(e)
var n=H(i,(function(e){return I(Tg,(function(t){return Ge(e,t)}))}))
return I(n,r)}))}(R,e,t);t=t.parentNode)if(_.compare(t,e)){R.remove(e,!0)
break}}))),function(e,t){var n,r=e.dom,o=e.selection
if(t){o.scrollIntoView(t)
var i=cf(e.getBody(),t)
if("false"===r.getContentEditable(i))return r.remove(t),o.select(i)
var a,u=r.createRng(),s=t.previousSibling
Hn(s)?(u.setStart(s,s.nodeValue.length),xt.ie||(a=t.nextSibling,Hn(a)&&(s.appendData(a.data),a.parentNode.removeChild(a)))):(u.setStartBefore(t),u.setEndBefore(t))
var c=r.getParent(t,r.isBlock)
r.remove(t),c&&r.isEmpty(c)&&(e.$(c).empty(),u.setStart(c,0),u.setEnd(c,0),Zg(c)||c.getAttribute("data-mce-fragment")||!(n=function(t){var n=rs.fromRangeStart(t)
if(n=Dc(e.getBody()).next(n))return n.toRange()}(u))?r.add(c,r.create("br",{"data-mce-bogus":"1"})):(u=n,r.remove(c))),o.setRng(u)}}(e,c.get("mce_marker")),D=e.getBody(),Et.each(D.getElementsByTagName("*"),(function(e){e.removeAttribute("data-mce-fragment")})),T=c,O=s.getStart(),ve.from(T.getParent(O,"td,th")).map(Nt.fromDom).each(um),e.fire("SetContent",g),e.addVisual()}}function dg(e){return e instanceof Od}function mg(e,t,n){var r
e.dom.setHTML(e.getBody(),t),!0!==n&&ld(r=e)&&Xl(r.getBody()).each((function(e){var t=e.getNode(),n=cn(t)?Xl(t).getOr(e):e
r.selection.setRng(n.toRange())}))}function gg(e){return S(e)?e:D}function pg(e,t,n){var r=t(e),o=gg(n)
return r.orThunk((function(){return o(e)?ve.none():function(t){for(var n=e.dom,r=gg(o);n.parentNode;){n=n.parentNode
var i=Nt.fromDom(n),a=t(i)
if(a.isSome())return a
if(r(i))break}return ve.none()}(t)}))}function hg(e,t,n){var r=e.formatter.get(n)
if(r)for(var o=0;o<r.length;o++){var i=r[o]
if(ul(i)&&!1===i.inherit&&e.dom.is(t,i.selector))return 1}}function vg(e,t,n,r,o){var i=e.dom.getRoot()
return t!==i&&(t=e.dom.getParent(t,(function(t){return!!hg(e,t,n)||t.parentNode===i||!!np(e,t,n,r,!0)})),!!np(e,t,n,r,o))}function bg(e,t,n){return!!tp(t,n.inline)||!!tp(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0)}function yg(e,t,n,r,o,i){var u=n[r]
if(S(n.onmatch))return n.onmatch(t,n,r)
if(u)if(w(u.length)){for(var s in u)if(Ne(u,s)){var c="attributes"===r?e.getAttrib(t,s):nl(e,t,s),l=Zc(u[s],i),f=a(c)||Pe(c)
if(!f||!a(l)){if(o&&f&&!n.exact)return
if((!o||n.exact)&&!tp(c,tl(e,l,s)))return}}}else for(var d=0;d<u.length;d++)if("attributes"===r?e.getAttrib(t,u[d]):nl(e,t,u[d]))return 1
return 1}function Cg(e,t,n,r,o){if(r)return vg(e,r,t,n,o)
if(r=e.selection.getNode(),vg(e,r,t,n,o))return!0
var i=e.selection.getStart()
return!(i===r||!vg(e,i,t,n,o))}function xg(e){return 0<function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==rp||1<e.childNodes.length)return[]
1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length}function wg(e){if(e){var t=new _r(e,e)
for(e=t.current();e;e=t.next())if(Hn(e))return e}return null}function Sg(e){var t=Nt.fromTag("span")
return hn(t,{id:op,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&Bn(t,Nt.fromText(rp)),t}function Eg(e,t,n){void 0===n&&(n=!0)
var r,o,i,a,u,s,c,l,f=e.dom,d=e.selection
xg(t)?Hm(e,!1,Nt.fromDom(t),n):(r=d.getRng(),o=f.getParent(t,f.isBlock),i=r.startContainer,a=r.startOffset,u=r.endContainer,s=r.endOffset,(l=wg(t))&&l.nodeValue.charAt(0)===rp&&l.deleteData(0,1),c=l,f.remove(t,!0),i===c&&0<a&&r.setStart(c,a-1),u===c&&0<s&&r.setEnd(c,s-1),o&&f.isEmpty(o)&&am(Nt.fromDom(o)),d.setRng(r))}function Ng(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(t)Eg(e,t,n)
else if(!(t=Mc(e.getBody(),o.getStart())))for(;t=r.get(op);)Eg(e,t,!1)}function kg(e,t){return e.appendChild(t),t}function _g(e,t){var n=j(e,(function(e,t){return kg(e,t.cloneNode(!1))}),t)
return kg(n,n.ownerDocument.createTextNode(rp))}function Ag(e,t,r,o,i,a){var u,s,c=e.formatter,l=e.dom,f=H(we(c.get()),(function(e){return e!==o&&!Te(e,"removeformat")}))
if(0<H((u=e,s=r,V(f,(function(e,t){var n=il(u,t)
return u.formatter.matchNode(s,t,{},n)?e.concat([t]):e}),[])),(function(t){return a=o,u=["inline","block","selector","attributes","styles","classes"],!I((i=e).formatter.get(t),(function(e){var t=r(e)
return I(i.formatter.get(a),(function(e){var o,i=r(e),a=t,u=i
return n(o=void 0===o?h:o).eq(a,u)}))}))
function r(e){return ae(e,(function(e,t){return I(u,(function(e){return e===t}))}))}var i,a,u})).length){var d=r.cloneNode(!1)
return l.add(t,d),c.remove(o,i,d,a),l.remove(d),ve.some(d)}return ve.none()}function Rg(e,t){var n=e.schema.getTextInlineElements()
return Ne(n,kt(t))&&!Ic(t.dom)&&!sn(t.dom)}F(["margin","margin-left","margin-right","margin-top","margin-bottom","padding","padding-left","padding-right","padding-top","padding-bottom","border","border-width","border-style","border-color","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","float","position","left","right","top","bottom","z-index","display","transform","width","max-width","min-width","height","max-height","min-height","overflow","overflow-x","overflow-y","text-overflow","vertical-align","transition","transition-delay","transition-duration","transition-property","transition-timing-function"],(function(e){Zd.add(e)}))
var Dg,Tg=["font","text-decoration","text-emphasis"],Og=N(tm,!0,Wc),Bg=N(tm,!1,Wc),Pg=rm(!0,om),Lg=rm(!1,om),Ig=rm(!0,Gn),Mg=rm(!1,Gn),Fg=rm(!0,cn),Ug=rm(!1,cn),zg=rm(!0,im),Hg=rm(!1,im),jg=N(mm,!1),Vg=N(mm,!0),qg=N(dm,!1),$g=N(dm,!0),Wg=N(pm,!1),Kg=N(pm,!0),Xg=rr([{singleCellTable:["rng","cell"]},{fullTable:["table"]},{partialTable:["cells","outsideDetails"]},{multiTable:["startTableCells","endTableCells","betweenRng"]}]),Yg=function(e){var t
return(8===_t(t=e)||"#comment"===kt(t)?Bt:Ut)(e).bind(Yg).orThunk((function(){return ve.some(e)}))},Gg=function(e,t,n,r){void 0===r&&(r=!0),t.deleteContents()
var o,i=Yg(n).getOr(n),a=Nt.fromDom(e.dom.getParent(i.dom,e.dom.isBlock))
return qr(a)&&(am(a),r&&e.selection.setCursorLocation(a.dom,0)),je(n,a)||F((fn(Ot(a),n)?[]:Ot(o=a).map(Rn).map((function(e){return H(e,(function(e){return!je(o,e)}))})).getOr([])).concat(Rn(n)),(function(e){je(e,a)||Ve(e,a)||!qr(e)||Pn(e)})),!0},Jg=function(e,t){return $(cm(t,e),(function(e){return Nn(e)&&"caption"===kt(e)}))},Qg=function(e,t){return am(t),e.selection.setCursorLocation(t.dom,0),ve.some(!0)},Zg=Yn,ep=function(e,t){t(e),e.firstChild&&ep(e.firstChild,t),e.next&&ep(e.next,t)},tp=el,np=function(e,t,n,r,o){var i=e.formatter.get(n),a=e.dom
if(i&&t)for(var u=0;u<i.length;u++){var s=i[u]
if(bg(e.dom,t,s)&&yg(a,t,s,"attributes",o,r)&&yg(a,t,s,"styles",o,r)){var c=s.classes
if(c)for(var l=0;l<c.length;l++)if(!e.dom.hasClass(t,Zc(c[l],r)))return
return s}}},rp=bo,op="_mce_caret",ip={},ap=fe,up=ce
function sp(e){return Un(e)&&!$c(e)&&!Ic(e)&&!sn(e)}function cp(e,t){for(var n=e;n;n=n[t]){if(Hn(n)&&Be(n.data))return e
if(Un(n)&&!$c(n))return n}return e}function lp(e,t,n){var r=Kd(e)
if(t&&n&&(t=cp(t,"previousSibling"),n=cp(n,"nextSibling"),r.compare(t,n))){for(var o=t.nextSibling;o&&o!==n;){var i=o
o=o.nextSibling
t.appendChild(i)}return e.remove(n),Et.each(Et.grep(n.childNodes),(function(e){t.appendChild(e)})),t}return n}function fp(e,t,n,r){var o
r&&!1!==t.merge_siblings&&(o=lp(e,Gc(r),r),lp(e,o,Gc(o,!0)))}function dp(e,t){return function(n){return!(!n||!nl(e,n,t))}}function mp(e,t,n){return function(r){var o,i
e.setStyle(r,t,n),""===r.getAttribute("style")&&r.removeAttribute("style"),o=e,"SPAN"===(i=r).nodeName&&0===o.getAttribs(i).length&&o.remove(i,!0)}}function gp(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)}function pp(e,t,n){var r,o=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"]
return Un(o)&&(r=o.childNodes.length-1,!n&&i&&i--,o=o.childNodes[r<i?r:i]),Hn(o)&&n&&i>=o.nodeValue.length&&(o=new _r(o,e.getBody()).next()||o),Hn(o)&&!n&&0===i&&new _r(o,e.getBody()).prev()||o}function hp(e,t){var n=t?"firstChild":"lastChild"
if(/^(TR|TH|TD)$/.test(e.nodeName)&&e[n]){var r=e[n]
return"TR"===e.nodeName&&r[n]||r}return e}function vp(e,t,n,r){var o=e.create(n,r)
return t.parentNode.insertBefore(o,t),o.appendChild(t),o}function bp(e,t,n,r,o){var i=Nt.fromDom(t),a=Nt.fromDom(e.create(r,o))
return Kt(a,(n?It:Lt)(i)),n?(qt(i,a),Wt(a,i)):($t(i,a),Bn(a,i)),a.dom}function yp(e,t,n,r){var o=Gc(t,n,r)
return a(o)||"BR"===o.nodeName||e.isBlock(o)}function Cp(e,t,n,r,o){var i,a,u=e.dom,s=u,c=r
if(!(sl(a=t)&&uh(c,a.inline)||al(a)&&uh(c,a.block)||ul(a)&&Un(c)&&s.is(c,a.selector)||t.links&&"A"===r.nodeName))return oh.keep()
var l,f,d,m,g,p,h,v,b=r
if(sl(t)&&"all"===t.remove&&y(t.preserve_attributes)){var C=H(u.getAttribs(b),(function(e){return L(t.preserve_attributes,e.name.toLowerCase())}))
if(u.removeAllAttribs(b),F(C,(function(e){return u.setAttrib(b,e.name,e.value)})),0<C.length)return oh.rename("span")}if("all"!==t.remove){ah(t.styles,(function(e,r){e=tl(u,Zc(e,n),r+""),E(r)&&(r=e,o=null),!t.remove_similar&&o&&!uh(nl(u,o,r),e)||u.setStyle(b,r,""),i=!0})),i&&""===u.getAttrib(b,"style")&&(b.removeAttribute("style"),b.removeAttribute("data-mce-style")),ah(t.attributes,(function(e,r){var i
if(e=Zc(e,n),E(r)&&(r=e,o=null),t.remove_similar||!o||uh(u.getAttrib(o,r),e))if("class"===r&&(e=u.getAttrib(b,r))&&(i="",F(e.split(/\s+/),(function(e){/mce\-\w+/.test(e)&&(i+=(i?" ":"")+e)})),i))u.setAttrib(b,r,i)
else{if(ih.test(r)&&b.removeAttribute("data-mce-"+r),"style"===r&&on(["li"])(b)&&"none"===u.getStyle(b,"list-style-type"))return b.removeAttribute(r),void u.setStyle(b,"list-style-type","none")
"class"===r&&b.removeAttribute("className"),b.removeAttribute(r)}})),ah(t.classes,(function(e){e=Zc(e,n),o&&!u.hasClass(o,e)||u.removeClass(b,e)}))
for(var x=u.getAttribs(b),w=0;w<x.length;w++){var S=x[w].nodeName
if(0!==S.indexOf("_")&&0!==S.indexOf("data-"))return oh.keep()}}return"none"!==t.remove?(l=e,d=t,p=(f=b).parentNode,h=l.dom,v=Cs(l),al(d)&&(v?p===h.getRoot()&&(d.list_block&&uh(f,d.list_block)||F(xe(f.childNodes),(function(e){Qc(l,v,e.nodeName.toLowerCase())?m?m.appendChild(e):(m=vp(h,e,v),h.setAttribs(m,l.settings.forced_root_block_attrs)):m=null}))):h.isBlock(f)&&!h.isBlock(p)&&(yp(h,f,!1)||yp(h,f.firstChild,!0,!0)||f.insertBefore(h.create("br"),f.firstChild),yp(h,f,!0)||yp(h,f.lastChild,!1,!0)||f.appendChild(h.create("br")))),ul(g=d)&&sl(g)&&fn(ue(g,"mixed"),!0)&&!uh(d.inline,f)||h.remove(f,!0),oh.removed()):oh.keep()}function xp(e,t,n,r,o){return Cp(e,t,n,r,o).fold(D,(function(t){return e.dom.rename(r,t),!0}),T)}function wp(e,t,n,r,o){function i(r){var i,a,u,s,c,l=(a=t,u=n,s=o,F(ol((i=e).dom,r.parentNode).reverse(),(function(e){var t
c||"_start"===e.id||"_end"===e.id||(t=np(i,e,a,u,s))&&!1!==t.split&&(c=e)})),c)
return function(e,t,n,r,o,i,a,u){var s,c,l=e.dom
if(n){for(var d=n.parentNode,m=r.parentNode;m&&m!==d;m=m.parentNode){for(var g=l.clone(m,!1),p=0;p<t.length&&null!==(g=function(e,t,n){return Cp(e,t,u,n,n).fold(f(n),(function(t){return e.dom.createFragment().appendChild(n),e.dom.rename(n,t)}),f(null))}(e,t[p],g));p++);g&&(s&&g.appendChild(s),c=c||g,s=g)}a.mixed&&l.isBlock(n)||(r=l.split(n,r)),s&&(o.parentNode.insertBefore(s,o),c.appendChild(o),sl(a)&&fp(l,a,0,s))}return r}(e,d,l,r,r,0,m,n)}function a(t){return I(d,(function(r){return xp(e,r,n,t,t)}))}function s(e){var t,n=p.get(e?"_start":"_end"),r=n[e?"firstChild":"lastChild"]
return $c(t=r)&&Un(t)&&("_start"===t.id||"_end"===t.id)&&(r=r[e?"firstChild":"lastChild"]),Hn(r)&&0===r.data.length&&(r=e?n.previousSibling||n.nextSibling:n.nextSibling||n.previousSibling),p.remove(n,!0),r}function c(t){var n=yl(e,t,d,t.collapsed)
if(m.split){if(n=Nf(n),(o=pp(e,n,!0))!==(a=pp(e,n))){if(o=hp(o,!0),a=hp(a,!1),gp(p,o,a)){var r=ve.from(o.firstChild).getOr(o)
return i(bp(p,r,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void s(!0)}if(gp(p,a,o))return r=ve.from(a.lastChild).getOr(a),i(bp(p,r,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void s(!1)
var o=vp(p,o,"span",{id:"_start","data-mce-type":"bookmark"}),a=vp(p,a,"span",{id:"_end","data-mce-type":"bookmark"}),u=p.createRng()
u.setStartAfter(o),u.setEndBefore(a),Cl(p,u,(function(e){F(e,(function(e){$c(e)||$c(e.parentNode)||i(e)}))})),i(o),i(a),o=s(!0),a=s()}else o=a=i(o)
n.startContainer=o.parentNode||o,n.startOffset=p.nodeIndex(o),n.endContainer=a.parentNode||a,n.endOffset=p.nodeIndex(a)+1}Cl(p,n,(function(e){F(e,v)}))}var l,d=e.formatter.get(t),m=d[0],g=!0,p=e.dom,h=e.selection,v=function(t){var n=!0,r=!1
Un(t)&&p.getContentEditable(t)&&(n=g,g="true"===p.getContentEditable(t),r=!0)
var o,i,s=xe(t.childNodes)
if(g&&!r&&(o=a(t),i=t.parentNode,!o&&u(i)&&cl(m)&&a(i)),m.deep&&s.length){for(var c=0;c<s.length;c++)v(s[c])
r&&(g=n)}F(["underline","line-through","overline"],(function(n){Un(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&rl(p,t.parentNode)===n&&xp(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))}
if(r)return Xc(r)?((l=p.createRng()).setStartBefore(r),l.setEndAfter(r),c(l)):c(r),void mf(e,t,r,n)
if("false"!==p.getContentEditable(h.getNode()))h.isCollapsed()&&sl(m)&&!Sl(e).length?function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,g,p,h,v,b,y=e.dom,C=e.selection,x=[],w=C.getRng(),S=w.startContainer,E=w.startOffset,k=S
for(3===S.nodeType&&(E!==S.nodeValue.length&&(o=!0),k=k.parentNode);k;){if(np(e,k,t,n,r)){i=k
break}k.nextSibling&&(o=!0),x.push(k),k=k.parentNode}i&&(o?(a=C.getBookmark(),w.collapse(!0),u=Nf(yl(e,w,e.formatter.get(t),!0)),e.formatter.remove(t,n,u,r),C.moveToBookmark(a)):(s=Mc(e.getBody(),i),d=c=Sg(!1).dom,(p=(g=e.dom).getParent(m=null!==s?s:i,N(Jc,e)))&&g.isEmpty(p)?m.parentNode.replaceChild(d,m):(v=gu(h=Nt.fromDom(m),"br"),b=H(function(){for(var e=[],t=h.dom;t;)e.push(Nt.fromDom(t)),t=t.lastChild
return e}().slice(-1),Tr),v.length===b.length&&F(b,Pn),g.isEmpty(m)?m.parentNode.replaceChild(d,m):g.insertAfter(d,m)),l=Ag(e,c,i,t,n,r),f=_g(x.concat(l.toArray()),c),Eg(e,s,!1),C.setCursorLocation(f,1),y.isEmpty(i)&&y.remove(i)))}(e,t,n,o):(Rl(h,!0,(function(){Al(e,c)})),sl(m)&&Cg(e,t,n,h.getStart())&&Yc(p,h,h.getRng()),e.nodeChanged()),mf(e,t,r,n)
else{r=h.getNode()
for(var b=0;b<d.length&&(!d[b].ceFalseOverride||!xp(e,d[b],n,r,r));b++);mf(e,t,r,n)}}function Sp(e){return Un(e)&&!$c(e)&&!Ic(e)&&!sn(e)}function Ep(e){return Ne(e,"vars")}function Np(e,t,n,r,o){return q(t,(function(t){var i=e.formatter.matchNode(t,n,null!=o?o:{},r)
return!w(i)}),(function(t){return hg(e,t,n)||!r&&u(e.formatter.matchNode(t,n,o,!0))}))}function kp(e,t){var n=null!=t?t:fh(e)
return H(ol(e.dom,n),(function(e){return Un(e)&&!sn(e)}))}function _p(e,t){var n=(t||document).createDocumentFragment()
return F(e,(function(e){n.appendChild(e.dom)})),Nt.fromDom(n)}function Ap(e,t,n){return{element:e,width:t,rows:n}}function Rp(e,t){return{element:e,cells:t}}function Dp(e,t){var n=parseInt(vn(e,t),10)
return isNaN(n)?1:n}function Tp(e){return V(e,(function(e,t){return t.cells.length>e?t.cells.length:e}),0)}function Op(e,t){for(var n=e.rows,r=0;r<n.length;r++)for(var o=n[r].cells,i=0;i<o.length;i++)if(je(o[i],t))return ve.some({x:i,y:r})
return ve.none()}function Bp(e,t,n,r,o){for(var i=[],a=e.rows,u=n;u<=o;u++){var s=a[u].cells,c=t<r?s.slice(t,r+1):s.slice(r,t+1)
i.push(Rp(a[u].element,c))}return i}function Pp(e,t){var n,r,o,i=Nt.fromDom(t.commonAncestorContainer),a=cm(i,e),u=H(a,(function(e){return Dr(e)||uo(e)})),s=(o=t,$(r=a,(function(e){return"li"===kt(e)&&Nl(e,o)})).fold(f([]),(function(e){return $(r,(function(e){return"ul"===kt(e)||"ol"===kt(e)})).map((function(e){var t=Nt.fromTag(kt(e))
return function(e,t){var n=e.dom
ne(t,(function(e,t){!function(e,t,n){if(!v(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
mn(e)&&e.style.setProperty(t,n)}(n,t,e)}))}(t,ae(wn(e),(function(e,t){return Ge(t,"list-style")}))),[Nt.fromTag("li"),t]})).getOr([])})))
return M(u.concat(s.length?s:fo(n=i)?Ot(n).filter(lo).fold(f([]),(function(e){return[n,e]})):lo(n)?[n]:[]),yu)}function Lp(){return _p([])}function Ip(e,t){return pr(t[0],"table",N(je,e)).bind((function(e){var n,r,o=t[0],i=t[t.length-1],a=function(e){var t=Ap(yu(e),0,[])
return F(gu(e,"tr"),(function(e,n){F(gu(e,"td,th"),(function(r,o){!function(e,t,n,r,o){for(var i=Dp(o,"rowspan"),a=Dp(o,"colspan"),u=e.rows,s=n;s<n+i;s++){u[s]||(u[s]=Rp(Cu(r),[]))
for(var c=t;c<t+a;c++)u[s].cells[c]=s===n&&c===t?o:yu(o)}}(t,function(e,t,n){for(;r=t,((o=e.rows)[n]?o[n].cells:[])[r];)t++
var r,o
return t}(t,o,n),n,e,r)}))})),Ap(t.element,Tp(t.rows),t.rows)}(e)
return r=i,Op(n=a,o).bind((function(e){return Op(n,r).map((function(t){return r=n,o=e.x,i=e.y,a=t.x,s=i<(u=t.y)?Bp(r,o,i,a,u):Bp(r,o,u,a,i),Ap(r.element,Tp(s),s)
var r,o,i,a,u,s}))})).map((function(e){return _p([(n=M((t=e).rows,(function(e){var t=M(e.cells,(function(e){var t=Cu(e)
return yn(t,"colspan"),yn(t,"rowspan"),t})),n=yu(e.element)
return Kt(n,t),n})),r=yu(t.element),Kt(o=Nt.fromTag("tbody"),n),Bn(r,o),r)])
var t,n,r,o}))})).getOrThunk(Lp)}function Mp(e,t){return 0<=t&&t<e.length&&Wc(e.charAt(t))}function Fp(e,t){var n=Co(e.innerText)
return t?n.replace(/^[ \f\n\r\t\v]+/,""):n}function Up(e){return Un(e)?e.outerHTML:Hn(e)?Xo.encodeRaw(e.data,!1):jn(e)?"\x3c!--"+e.data+"--\x3e":""}function zp(e){var t,n=K((t=e.getBody(),H(M(xe(t.childNodes),Up),(function(e){return 0<e.length}))),(function(t){var n=Wd(e.serializer,t)
return 0<n.length?[n]:[]})),r=n.join("")
return-1!==r.indexOf("</iframe>")?{type:"fragmented",fragments:n,content:"",bookmark:null,beforeBookmark:null}:{type:"complete",fragments:null,content:r,bookmark:null,beforeBookmark:null}}function Hp(e,t,n){var r,o,i,a,s,c,l,f,d,m,g,p=n?t.beforeBookmark:t.bookmark
function h(e,t,n,r){for(var o=e;o-t<r&&o<n&&a[o]===s[o-t];)++o
return{start:e,end:o,diag:t}}"fragmented"===t.type?(r=t.fragments,o=e.getBody(),i=M(xe(o.childNodes),Up),function(e,t){var n=0
F(e,(function(e){var r,o,i,a,u,s,c,l
0===e[0]?n++:1===e[0]?(a=t,u=e[1],s=n,l=function(e){var t,n=document.createElement("div"),r=document.createDocumentFragment()
for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t)
return r}(u),a.hasChildNodes()&&s<a.childNodes.length?(c=a.childNodes[s]).parentNode.insertBefore(l,c):a.appendChild(l),n++):2===e[0]&&(o=n,(r=t).hasChildNodes()&&o<r.childNodes.length&&(i=r.childNodes[o]).parentNode.removeChild(i))}))}((s=r,c=(a=i).length+s.length+2,l=new Array(c),f=new Array(c),d=function(e,t,n,r,o){var i=m(e,t,n,r)
if(null===i||i.start===t&&i.diag===t-r||i.end===e&&i.diag===e-n)for(var u=e,c=n;u<t||c<r;)u<t&&c<r&&a[u]===s[c]?(o.push([0,a[u]]),++u,++c):r-n<t-e?(o.push([2,a[u]]),++u):(o.push([1,s[c]]),++c)
else{d(e,i.start,n,i.start-i.diag,o)
for(var l=i.start;l<i.end;++l)o.push([0,a[l]])
d(i.end,t,i.end-i.diag,r,o)}},m=function(e,t,n,r){var o=t-e,i=r-n
if(0==o||0==i)return null
var u,c,d,m,g,p=o-i,v=i+o,b=(v%2==0?v:1+v)/2
for(l[1+b]=e,f[1+b]=t+1,u=0;u<=b;++u){for(c=-u;c<=u;c+=2){for(d=c+b,c===-u||c!==u&&l[d-1]<l[d+1]?l[d]=l[d+1]:l[d]=l[d-1]+1,g=(m=l[d])-e+n-c;m<t&&g<r&&a[m]===s[g];)l[d]=++m,++g
if(p%2!=0&&p-u<=c&&c<=p+u&&f[d-p]<=l[d])return h(f[d-p],c+e-n,t,r)}for(c=p-u;c<=p+u;c+=2){for(d=c+b-p,c===p-u||c!==p+u&&f[d+1]<=f[d-1]?f[d]=f[d+1]-1:f[d]=f[d-1],g=(m=f[d]-1)-e+n-c;e<=m&&n<=g&&a[m]===s[g];)f[d]=m--,g--
if(p%2==0&&-u<=c&&c<=u&&f[d]<=l[d+p])return h(f[d],c+e-n,t,r)}}},g=[],d(0,a.length,0,s.length,g),g),o)):e.setContent(t.content,{format:"raw",no_selection:!u(p)||!Fc(p)||!p.isFakeCaret}),e.selection.moveToBookmark(p)}function jp(e){return"fragmented"===e.type?e.fragments.join(""):e.content}function Vp(e){var t=Nt.fromTag("body",mh())
return vu(t,jp(e)),F(gu(t,"*[data-mce-bogus]"),Yt),t.dom.innerHTML}function qp(e,t){return!(!e||!t)&&(r=t,jp(e)===jp(r)||(n=t,Vp(e)===Vp(n)))
var n,r}function $p(e){return 0===e.get()}function Wp(e,t,n){$p(n)&&(e.typing=t)}function Kp(e,t){e.typing&&(Wp(e,!1,t),e.add())}function Xp(e){return{undoManager:{beforeChange:function(t,n){var r=e,o=n
$p(t)&&o.set(cc(r.selection))},add:function(t,n,r,o,i,a){return function(e,t,n,r,o,i,a){var u=zp(e)
if(i=Et.extend(i=i||{},u),!1===$p(r)||e.removed)return null
var s=t.data[n.get()]
if(e.fire("BeforeAddUndo",{level:i,lastLevel:s,originalEvent:a}).isDefaultPrevented())return null
if(s&&qp(s,i))return null
t.data[n.get()]&&o.get().each((function(e){t.data[n.get()].beforeBookmark=e}))
var c=e.getParam("custom_undo_redo_levels",0,"number")
if(c&&t.data.length>c){for(var l=0;l<t.data.length-1;l++)t.data[l]=t.data[l+1]
t.data.length--,n.set(t.data.length)}i.bookmark=cc(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(i),n.set(t.data.length-1)
var f={level:i,lastLevel:s,originalEvent:a}
return 0<n.get()?(e.setDirty(!0),e.fire("AddUndo",f),e.fire("change",f)):e.fire("AddUndo",f),i}(e,t,n,r,o,i,a)},undo:function(t,n,r){return o=e,a=n,u=r,(i=t).typing&&(i.add(),i.typing=!1,Wp(i,!1,a)),0<u.get()&&(u.set(u.get()-1),Hp(o,s=i.data[u.get()],!0),o.setDirty(!0),o.fire("Undo",{level:s})),s
var o,i,a,u,s},redo:function(t,n){return r=e,i=n,(o=t).get()<i.length-1&&(o.set(o.get()+1),Hp(r,a=i[o.get()],!1),r.setDirty(!0),r.fire("Redo",{level:a})),a
var r,o,i,a},clear:function(t,n){var r,o=e,i=n;(r=t).data=[],i.set(0),r.typing=!1,o.fire("ClearUndos")},reset:function(e){var t;(t=e).clear(),t.add()},hasUndo:function(t,n){return r=e,o=t,0<n.get()||o.typing&&o.data[0]&&!qp(zp(r),o.data[0])
var r,o},hasRedo:function(e,t){return n=e,t.get()<n.data.length-1&&!n.typing
var n},transact:function(e,t,n){return o=n,Kp(r=e,t),r.beforeChange(),r.ignore(o),r.add()
var r,o},ignore:function(e,t){try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}},extra:function(t,n,r,o){var i,a,u=e,s=n,c=o;(i=t).transact(r)&&(a=i.data[s.get()].bookmark,Hp(u,i.data[s.get()-1],!0),i.transact(c)&&(i.data[s.get()-1].beforeBookmark=a))}},formatter:{match:function(t,n,r,o){return Cg(e,t,n,r,o)},matchAll:function(t,n){return o=t,i=n,a=[],u={},s=(r=e).selection.getStart(),r.dom.getParent(s,(function(e){for(var t=0;t<o.length;t++){var n=o[t]
!u[n]&&np(r,e,n,i)&&(u[n]=!0,a.push(n))}}),r.dom.getRoot()),a
var r,o,i,a,u,s},matchNode:function(t,n,r,o){return np(e,t,n,r,o)},canApply:function(t){return function(e){var n=e.formatter.get(t),r=e.dom
if(n)for(var o=ol(r,e.selection.getStart()),i=n.length-1;0<=i;i--){var a=n[i]
if(!ul(a)||u(a.defaultBlock))return!0
for(var s=o.length-1;0<=s;s--)if(r.is(o[s],a.selector))return!0}return!1}(e)},closest:function(t){return r=e,o=t,ve.from(r.selection.getStart(!0)).bind((function(e){return pg(Nt.fromDom(e),(function(e){return te(o,(function(t){return np(r,e.dom,n=t)?ve.some(n):ve.none()
var n}))}),n)})).getOrNull()
function n(e){return je(e,Nt.fromDom(r.getBody()))}var r,o},apply:function(t,n,r){return lh(e,t,n,r)},remove:function(t,n,r,o){return wp(e,t,n,r,o)},toggle:function(t,n,r){var o,i=t,a=n,u=r,s=(o=e).formatter.get(i);(!Cg(o,i,a,u)||"toggle"in s[0]&&!s[0].toggle?lh:wp)(o,i,a,u)},formatChanged:function(t,n,r,o,i){return function(e,t,n,r,o,i){var a,u,s,c,l,f,d,m,g
return null===t.get()&&(u=e,(a=t).set({}),u.on("NodeChange",(function(e){dh(u,e.element,a.get())})),u.on("FormatApply FormatRemove",(function(e){var t=ve.from(e.node).map((function(e){return Xc(e)?e:e.startContainer})).bind((function(e){return Un(e)?ve.some(e):ve.from(e.parentElement)})).getOrThunk((function(){return fh(u)}))
dh(u,t,a.get())}))),s=e,l=n,f=r,d=o,m=i,g=(c=t).get(),F(l.split(","),(function(e){function t(){var t=kp(s)
return Np(s,t,e,d,m).isSome()}var n,r=ue(g,e).getOrThunk((function(){var t={withSimilar:{state:tu(!1),similar:!0,callbacks:[]},withoutSimilar:{state:tu(!1),similar:!1,callbacks:[]},withVars:[]}
return g[e]=t}))
w(m)?((n=d?r.withSimilar:r.withoutSimilar).callbacks.push(f),1===n.callbacks.length&&n.state.set(t())):r.withVars.push({state:tu(t()),similar:d,vars:m,callback:f})})),c.set(g),{unbind:function(){var e,o=n,i=r,a=(e=t).get()
F(o.split(","),(function(e){return ue(a,e).each((function(t){a[e]={withSimilar:_e(_e({},t.withSimilar),{callbacks:H(t.withSimilar.callbacks,(function(e){return e!==i}))}),withoutSimilar:_e(_e({},t.withoutSimilar),{callbacks:H(t.withoutSimilar.callbacks,(function(e){return e!==i}))}),withVars:H(t.withVars,(function(e){return e.callback!==i}))}}))})),e.set(a)}}}(e,t,n,r,o,i)}},editor:{getContent:function(t,n){return r=e,o=t,i=n,ve.from(r.getBody()).fold(f("tree"===o.format?new Od("body",11):""),(function(e){return t=r,a=e,u=i,d=_e(_e({},n=o),{format:u,get:!0,getInner:!0}),g="raw"===(m=n.no_events?d:t.fire("BeforeGetContent",d)).format?Et.trim(Gd(t.serializer,a.innerHTML)):"text"===m.format?t.dom.isEmpty(a)?"":Co(a.innerText||a.textContent):"tree"===m.format?t.serializer.serialize(a,m):(c=(s=t).serializer.serialize(a,m),l=Cs(s),f=new RegExp("^(<"+l+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+l+">[\r\n]*|<br \\/>[\r\n]*)$"),c.replace(f,"")),L(["text","tree"],m.format)||po(Nt.fromDom(a))?m.content=g:m.content=Et.trim(g),(m.no_events?m:t.fire("GetContent",m)).content
var t,n,a,u,s,c,l,f,d,m,g}))
var r,o,i},setContent:function(t,n){return function(e,t,n){var r,o=(r=t,_e(_e({format:"html"},n),{set:!0,content:dg(r)?"":r})),i=n.no_events?o:e.fire("BeforeSetContent",o)
return dg(t)||(t=i.content),ve.from(e.getBody()).fold(f(t),(function(n){return dg(t)?function(e,t,n,r){var o,i,a,u
o=e.parser.getNodeFilters(),i=e.parser.getAttributeFilters(),a=n,u=function(e,t){var n,r,o={},i={},u=[]
for(n in a.firstChild&&ep(a.firstChild,(function(n){F(e,(function(e){e.name===n.name&&(o[e.name]?o[e.name].nodes.push(n):o[e.name]={filter:e,nodes:[n]})})),F(t,(function(e){"string"==typeof n.attr(e.name)&&(i[e.name]?i[e.name].nodes.push(n):i[e.name]={filter:e,nodes:[n]})}))})),o)Ne(o,n)&&u.push(o[n])
for(r in i)Ne(i,r)&&u.push(i[r])
return u}(o,i),F(u,(function(e){F(e.filter.callbacks,(function(t){t(e.nodes,e.filter.name,{})}))}))
var s=Yd({validate:e.validate},e.schema).serialize(n)
return r.content=po(Nt.fromDom(t))?s:Et.trim(s),mg(e,r.content,r.no_selection),r.no_events||e.fire("SetContent",r),n}(e,n,t,i):(r=e,o=n,u=i,0===(a=t).length||/^\s+$/.test(a)?(s='<br data-mce-bogus="1">',"TABLE"===o.nodeName?a="<tr><td>"+s+"</td></tr>":/^(UL|OL)$/.test(o.nodeName)&&(a="<li>"+s+"</li>"),a=(c=Cs(r))&&r.schema.isValidChild(o.nodeName.toLowerCase(),c.toLowerCase())?(a=s,r.dom.createHTML(c,xs(r),a)):a||'<br data-mce-bogus="1">',mg(r,a,u.no_selection),r.fire("SetContent",u)):("raw"!==u.format&&(a=Yd({validate:r.validate},r.schema).serialize(r.parser.parse(a,{isRootContent:!0,insert:!0}))),u.content=po(Nt.fromDom(o))?a:Et.trim(a),mg(r,u.content,u.no_selection),u.no_events||r.fire("SetContent",u)),u.content)
var r,o,a,u,s,c}))}(e,t,n)},insertContent:function(t,n){return fg(e,t,n)},addVisual:function(t){var n,r=t,o=(n=e).dom,i=u(r)?r:n.getBody()
w(n.hasVisual)&&(n.hasVisual=n.getParam("visual",!0,"boolean")),F(o.select("table,a",i),(function(e){switch(e.nodeName){case"TABLE":var t=n.getParam("visual_table_class","mce-item-table","string"),r=o.getAttrib(e,"border")
r&&"0"!==r||!n.hasVisual?o.removeClass(e,t):o.addClass(e,t)
break
case"A":var i,a
o.getAttrib(e,"href")||(i=o.getAttrib(e,"name")||e.id,a=n.getParam("visual_anchor_class","mce-item-anchor","string"),i&&n.hasVisual?o.addClass(e,a):o.removeClass(e,a))}})),n.fire("VisualAid",{element:r,hasVisual:n.hasVisual})}},selection:{getContent:function(t,n){return function(e,t,n){var r,o=(r=t,_e(_e({},n=void 0===n?{}:n),{format:r,get:!0,selection:!0})),i=e.fire("BeforeGetContent",o)
if(i.isDefaultPrevented())return e.fire("GetContent",i),i.content
if("text"===i.format)return m=e,ve.from(m.selection.getRng()).map((function(e){var t=ve.from(m.dom.getParent(e.commonAncestorContainer,m.dom.isBlock)),n=m.getBody(),r=t.map((function(e){return e.nodeName})).getOr("div").toLowerCase(),o=xt.browser.isIE()&&"pre"!==r,i=m.dom.add(n,r,{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},e.cloneContents()),a=Fp(i,o),u=Co(i.textContent)
if(m.dom.remove(i),Mp(u,0)||Mp(u,u.length-1)){var s=Fp(t.getOr(n),o),c=s.indexOf(a)
return-1===c?a:(Mp(s,c-1)?" ":"")+a+(Mp(s,c+a.length)?" ":"")}return a})).getOr("")
i.getInner=!0
var a,u,s,c,l,f,d,m,g=(u=i,s=(a=e).selection.getRng(),c=a.dom.create("body"),l=a.selection.getSel(),f=pd(a,xl(l)),(d=u.contextual?function(e,t){var n,r,o,i,a,u,s,c=wl(t,e)
return 0<c.length?Ip(e,c):(n=e,0<(r=t).length&&r[0].collapsed?Lp():(o=n,i=r[0],a=Nt.fromDom(i.cloneContents()),s=V(u=Pp(o,i),(function(e,t){return Bn(t,e),t}),a),0<u.length?_p([s]):s))}(Nt.fromDom(a.getBody()),f).dom:s.cloneContents())&&c.appendChild(d),a.selection.serializer.serialize(c,u))
return"tree"===i.format?g:(i.content=e.selection.isCollapsed()?"":g,e.fire("GetContent",i),i.content)}(e,t,n)}},raw:{getModel:function(){return ve.none()}}}}function Yp(e){return Ne(e.plugins,"rtc")}function Gp(e){var t=e
return ue(e.plugins,"rtc").bind((function(e){return ve.from(e.setup)})).fold((function(){return t.rtcInstance=Xp(e),ve.none()}),(function(e){var n,r
return t.rtcInstance=(n=f(null),r=f(""),{undoManager:{beforeChange:s,add:n,undo:n,redo:n,clear:s,reset:s,hasUndo:D,hasRedo:D,transact:n,ignore:s,extra:s},formatter:{match:D,matchAll:f([]),matchNode:f(void 0),canApply:D,closest:r,apply:s,remove:s,toggle:s,formatChanged:f({unbind:s})},editor:{getContent:r,setContent:r,insertContent:s,addVisual:s},selection:{getContent:r},raw:{getModel:f(ve.none())}}),ve.some((function(){return e().then((function(e){return t.rtcInstance=(r=e.undoManager,o=e.formatter,i=e.editor,a=e.selection,u=e.raw,{undoManager:{beforeChange:r.beforeChange,add:r.add,undo:r.undo,redo:r.redo,clear:r.clear,reset:r.reset,hasUndo:r.hasUndo,hasRedo:r.hasRedo,transact:function(e,t,n){return r.transact(n)},ignore:function(e,t){return r.ignore(t)},extra:function(e,t,n,o){return r.extra(n,o)}},formatter:{match:function(e,t,r,i){return o.match(e,n(t),i)},matchAll:o.matchAll,matchNode:o.matchNode,canApply:function(e){return o.canApply(e)},closest:function(e){return o.closest(e)},apply:function(e,t,r){return o.apply(e,n(t))},remove:function(e,t,r,i){return o.remove(e,n(t))},toggle:function(e,t,r){return o.toggle(e,n(t))},formatChanged:function(e,t,n,r,i){return o.formatChanged(t,n,r,i)}},editor:{getContent:function(e,t){return i.getContent(e)},setContent:function(e,t){return i.setContent(e,t)},insertContent:function(e,t){return i.insertContent(e)},addVisual:i.addVisual},selection:{getContent:function(e,t){return a.getContent(t)}},raw:{getModel:function(){return ve.some(u.getRawModel())}}}),e.rtc.isRemote
function n(e){return b(e)?e:{}}var r,o,i,a,u}))}))}))}function Jp(e){return e.rtcInstance||Xp(e)}function Qp(e){var t=e.rtcInstance
if(t)return t
throw new Error("Failed to get RTC instance not yet initialized.")}function Zp(e){return 0===e.dom.length?(Pn(e),ve.none()):ve.some(e)}function eh(e,t,n,r){e.bind((function(e){return(r?Tm:Dm)(e.dom,r?e.dom.length:0),t.filter(kn).map((function(t){var o=n,i=r,a=e.dom,u=t.dom,s=(i?a:u).length
i?(Om(a,u,!1,!i),o.setStart(u,s)):(Om(u,a,!1,!i),o.setEnd(u,s))}))})).orThunk((function(){var e=r
return t.filter((function(e){return Bl.isBookmarkNode(e.dom)})).bind(e?Pt:Bt).or(t).filter(kn).map((function(e){var t,n=r
Ot(t=e).each((function(e){var r=t.dom
n&&Sm(e,rs(r,0))?Dm(r,0):!n&&Em(e,rs(r,r.length))&&Tm(r,r.length)}))}))}))}function th(e,t,n){var r
e&&Ne(e,t)&&(0===(r=H(e[t],(function(e){return e!==n}))).length?delete e[t]:e[t]=r)}Dg=function(e){var t,n=e.selection.getRng(),r=on(["pre"])
n.collapsed||(t=e.selection.getSelectedBlocks(),up(ap(ap(t,r),(function(e){return r(e.previousSibling)&&-1!==de(t,e.previousSibling)})),(function(e){var t,n=e.previousSibling
qa(t=e).remove(),qa(n).append("<br><br>").append(t.childNodes)})))},ip.pre||(ip.pre=[]),ip.pre.push(Dg)
var nh=Et.each,rh=function(e,t,n){nh(e.childNodes,(function(e){sp(e)&&(t(e)&&n(e),e.hasChildNodes()&&rh(e,t,n))}))},oh=rr([{keep:[]},{rename:["name"]},{removed:[]}]),ih=/^(src|href|style)$/,ah=Et.each,uh=el,sh=Et.each,ch=Et.each,lh=function(e,t,n,r){function o(e,t){var o
S((t=void 0===t?m:t).onformat)&&t.onformat(e,t,n,r),ch(t.styles,(function(t,r){p.setStyle(e,r,Zc(t,n))})),!t.styles||(o=p.getAttrib(e,"style"))&&p.setAttrib(e,"data-mce-style",o),ch(t.attributes,(function(t,r){p.setAttrib(e,r,Zc(t,n))})),ch(t.classes,(function(t){t=Zc(t,n),p.hasClass(e,t)||p.addClass(e,t)}))}function i(e,t){var n=!1
return ch(e,(function(e){return!!ul(e)&&(u(e.collapsed)&&e.collapsed!==g||!p.is(t,e.selector)||Ic(t)?void 0:(o(t,e),!(n=!0)))})),n}function a(r,a,s){var c=[],l=!0,f=m.inline||m.block,g=function(e){if(v(e)){var t=p.create(e)
return o(t),t}return null}(f)
Cl(r,a,(function(a){var p,h=function(a){var v=!1,b=l,y=a.nodeName.toLowerCase(),C=a.parentNode,x=C.nodeName.toLowerCase()
if(Un(a)&&r.getContentEditable(a)&&(b=l,l="true"===r.getContentEditable(a),v=!0),$n(a)&&!function(e,t,n,r){if(e.getParam("format_empty_lines",!1,"boolean")&&sl(t)){var o=_e(_e({},e.schema.getTextBlockElements()),{td:{},th:{},li:{},dt:{},dd:{},figcaption:{},caption:{},details:{},summary:{}}),i=(a=Nt.fromDom(n),s=function(e){return Ic(e.dom)},((c=(u=a).dom).parentNode?function(e,t){return $(e.dom.childNodes,(function(e){return t(Nt.fromDom(e))})).map(Nt.fromDom)}(Nt.fromDom(c.parentNode),(function(e){return!je(u,e)&&s(e)})):ve.none()).isSome())
return se(o,r)&&qr(Nt.fromDom(n.parentNode),!1)&&!i}var a,u,s,c}(e,m,a,x))return p=null,void(al(m)&&r.remove(a))
if(al(m)&&m.wrapper&&np(e,a,t,n))p=null
else{if(l&&!v&&al(m)&&!m.wrapper&&Jc(e,y)&&Qc(e,x,f)){var w=r.rename(a,f)
return o(w),c.push(w),void(p=null)}if(ul(m)){var S=i(d,a)
if(!S&&u(C)&&cl(m)&&(S=i(d,C)),!sl(m)||S)return void(p=null)}!l||v||!Qc(e,f,y)||!Qc(e,x,f)||!s&&Hn(a)&&yo(a.data)||Ic(a)||sl(m)&&r.isBlock(a)?(p=null,F(xe(a.childNodes),h),v&&(l=b),p=null):(p||(p=r.clone(g,!1),a.parentNode.insertBefore(p,a),c.push(p)),p.appendChild(a))}}
F(a,h)})),!0===m.links&&F(c,(function(e){var t=function(e){"A"===e.nodeName&&o(e,m),F(xe(e.childNodes),t)}
t(e)})),F(c,(function(i){var a,s,l,f,g,p,h,v,b,y,C,x,w,S,E,N,k,_,A=(a=0,F(i.childNodes,(function(e){var t
u(t=e)&&Hn(t)&&0===t.length||$c(e)||a++})),a)
function R(e){var t
1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=rl(w,e.parentNode),w.getStyle(e,"color")&&t?w.setStyle(e,"text-decoration",t):w.getStyle(e,"text-decoration")===t&&w.setStyle(e,"text-decoration",null))}!(1<c.length)&&r.isBlock(i)||0!==A?(sl(m)||al(m)&&m.wrapper)&&(m.exact||1!==A||(i=$((x=i).childNodes,Sp).filter((function(e){return bg(r,e,m)})).map((function(e){var t=r.clone(e,!1)
return o(t),r.replace(t,x,!0),r.remove(e,!0),t})).getOr(x)),N=e,k=n,_=i,sh(d,(function(e){var t,n,r
sl(e)&&sh(N.dom.select(e.inline,_),(function(t){sp(t)&&xp(N,e,k,t,e.exact?t:null)})),t=N.dom,(n=e).clear_child_styles&&(r=n.links?"*:not(a)":"*",nh(t.select(r,_),(function(e){sp(e)&&nh(n.styles,(function(n,r){t.setStyle(e,r,"")}))})))})),v=m,np(h=e,(C=i).parentNode,b=t,y=n)&&xp(h,v,y,C)||v.merge_with_parents&&h.dom.getParent(C.parentNode,(function(e){if(np(h,e,b,y))return xp(h,v,y,C),!0})),p=i,(g=m).styles&&g.styles.backgroundColor&&rh(p,dp(r,"fontSize"),mp(r,"backgroundColor",Zc(g.styles.backgroundColor,n))),w=r,E=i,(S=m).styles&&(S.styles.color||S.styles.textDecoration)&&(Et.walk(E,R,"childNodes"),R(E)),s=r,f=i,!sl(l=m)||"sub"!==l.inline&&"sup"!==l.inline||(rh(f,dp(s,"fontSize"),mp(s,"fontSize","")),s.remove(s.select("sup"===l.inline?"sub":"sup",f),!0)),fp(r,m,0,i)):r.remove(i,!0)}))}var s,c,l,f,d=e.formatter.get(t),m=d[0],g=!r&&e.selection.isCollapsed(),p=e.dom,h=e.selection
if("false"!==p.getContentEditable(h.getNode()))m&&(r?Xc(r)?i(d,r)||((s=p.createRng()).setStartBefore(r),s.setEndAfter(r),a(p,yl(e,s,d),!0)):a(p,r,!0):g&&sl(m)&&!Sl(e).length?function(e,t,n){var r,o=e.selection,i=o.getRng(),a=i.startOffset,u=i.startContainer.nodeValue,s=Mc(e.getBody(),o.getStart())
s&&(r=wg(s))
var c,l,f,d,m=/[^\s\u00a0\u00ad\u200b\ufeff]/
u&&0<a&&a<u.length&&m.test(u.charAt(a))&&m.test(u.charAt(a-1))?(c=o.getBookmark(),i.collapse(!0),l=Nf(yl(e,i,e.formatter.get(t))),e.formatter.apply(t,n,l),o.moveToBookmark(c)):(s&&r.nodeValue===rp||(f=e.getDoc(),d=Sg(!0).dom,r=(s=f.importNode(d,!0)).firstChild,i.insertNode(s),a=1),e.formatter.apply(t,n,s),o.setCursorLocation(r,a))}(e,t,n):(c=h.getNode(),l=d[0],e.settings.forced_root_block||!l.defaultBlock||p.getParent(c,p.isBlock)||lh(e,l.defaultBlock),h.setRng(ug(h.getRng())),Rl(h,!0,(function(){Al(e,(function(t,n){var r=n?t:yl(e,t,d)
a(p,r,!1)}))})),Yc(p,h,h.getRng()),e.nodeChanged()),f=e,up(ip[t],(function(e){e(f)}))),df(e,t,r,n)
else{r=h.getNode()
for(var b=0,y=d.length;b<y;b++){var C=d[b]
if(C.ceFalseOverride&&ul(C)&&p.is(r,C.selector)){o(r,C)
break}}df(e,t,r,n)}},fh=function(e){return e.selection.getStart()},dh=function(e,t,n){var r=kp(e,t)
ne(n,(function(n,o){function i(n){var i,a=Np(e,r,o,n.similar,Ep(n)?n.vars:void 0),u=a.isSome()
n.state.get()!==u&&(n.state.set(u),i=a.getOr(t),Ep(n)?n.callback(u,{node:i,format:o,parents:r}):F(n.callbacks,(function(e){return e(u,{node:i,format:o,parents:r})})))}F([n.withSimilar,n.withoutSimilar],i),F(n.withVars,i)}))},mh=Re((function(){return document.implementation.createHTMLDocument("undo")}))
function gh(e){return e.select}function ph(e){return e&&e.ownerDocument&&Ve(Nt.fromDom(e.ownerDocument),Nt.fromDom(e))}function hh(e,t,n,r){function o(e,t){return function(e,t,n){var r,o=(r=t,_e(_e({format:"html"},n=void 0===n?{}:n),{set:!0,selection:!0,content:r})),i=o
if(!o.no_events){var a=e.fire("BeforeSetContent",o)
if(a.isDefaultPrevented())return void e.fire("SetContent",a)
i=a}i.content=function(e,t){if("raw"===t.format)return t.content
var n=e.selection.getRng(),r=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),o=r?{context:r.nodeName.toLowerCase()}:{},i=e.parser.parse(t.content,_e(_e({isRootContent:!0,forced_root_block:!1},o),t))
return Yd({validate:e.validate},e.schema).serialize(i)}(e,i)
var u=e.selection.getRng()
!function(e,t){var n=ve.from(t.firstChild).map(Nt.fromDom),r=ve.from(t.lastChild).map(Nt.fromDom)
e.deleteContents(),e.insertNode(t)
var o=n.bind(Bt).filter(kn).bind(Zp),i=r.bind(Pt).filter(kn).bind(Zp)
eh(o,n,e,!0),eh(i,r,e,!1),e.collapse(!1)}(u,u.createContextualFragment(i.content)),e.selection.setRng(u),Kf(e,u),i.no_events||e.fire("SetContent",i)}(r,e,t)}function i(){var t=s(),n=null==t?void 0:t.anchorNode,r=null==t?void 0:t.focusNode
if(!t||!n||!r||rn(n)||rn(r))return!0
var o=e.createRng()
o.setStart(n,t.anchorOffset),o.collapse(!0)
var i=e.createRng()
return i.setStart(r,t.focusOffset),i.collapse(!0),o.compareBoundaryPoints(o.START_TO_START,i)<=0}function a(e){var t=h()
t.collapse(!!e),v(t)}function s(){return t.getSelection?t.getSelection():t.document.selection}var c,l,f,d,m,g,p=function(e,t){return m||(m={},g={},d.on("NodeChange",(function(e){var t=e.element,n=w(t),r={}
Et.each(m,(function(e,t){x(t,n).each((function(o){g[t]||(F(e,(function(e){e(!0,{node:o,selector:t,parents:n})})),g[t]=e),r[t]=e}))})),Et.each(g,(function(e,o){r[o]||(delete g[o],Et.each(e,(function(e){e(!1,{node:t,selector:o,parents:n})})))}))}))),m[e]||(m[e]=[]),m[e].push(t),x(e,w(d.selection.getStart())).each((function(){g[e]=m[e]})),{unbind:function(){th(m,e,t),th(g,e,t)}}},h=function(){function n(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(e){return-1}}var o,i,a,u=t.document
if(void 0!==r.bookmark&&!1===ld(r)){var f=od(r)
if(f.isSome())return f.map((function(e){return pd(r,[e])[0]})).getOr(u.createRange())}try{(o=s())&&!rn(o.anchorNode)&&(i=0<o.rangeCount?o.getRangeAt(0):(o.createRange?o:u).createRange(),i=pd(r,[i])[0])}catch(n){}return(i=i||(u.createRange?u.createRange():u.body.createTextRange())).setStart&&9===i.startContainer.nodeType&&i.collapsed&&(a=e.getRoot(),i.setStart(a,0),i.setEnd(a,0)),c&&l&&(0===n(i.START_TO_START,i,c)&&0===n(i.END_TO_END,i,c)?i=l:l=c=null),i},v=function(e,t){var n
if((o=e)&&(gh(o)||ph(o.startContainer)&&ph(o.endContainer))){var o,i=gh(e)?e:null
if(i){l=null
try{i.select()}catch(e){}}else{var a=s()
if(e=r.fire("SetSelectionRange",{range:e,forward:t}).range,a){l=e
try{a.removeAllRanges(),a.addRange(e)}catch(e){}!1===t&&a.extend&&(a.collapse(e.endContainer,e.endOffset),a.extend(e.startContainer,e.startOffset)),c=0<a.rangeCount?a.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!a.setBaseAndExtent||xt.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset])&&"IMG"===n.tagName&&(a.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),a.anchorNode===e.startContainer&&a.focusNode===e.endContainer||a.setBaseAndExtent(n,0,n,1)),r.fire("AfterSetSelectionRange",{range:e,forward:t})}}},b={bookmarkManager:null,controlSelection:null,dom:f=e,win:t,serializer:n,editor:d=r,collapse:a,setCursorLocation:function(t,n){var o=e.createRng()
u(t)&&u(n)?(o.setStart(t,n),o.setEnd(t,n),v(o),a(!1)):(kl(e,o,r.getBody(),!0),v(o))},getContent:function(e){return n=(t=void 0===(t=e)?{}:t).format||"html",o=t,Qp(r).selection.getContent(n,o)
var t,n,o},setContent:o,getBookmark:function(e,t){return y.getBookmark(e,t)},moveToBookmark:function(e){return y.moveToBookmark(e)},select:function(t,n){var r=e,o=n
return ve.from(t).map((function(e){var t=r.nodeIndex(e),n=r.createRng()
return n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),o&&(kl(r,n,e,!0),kl(r,n,e,!1)),n})).each(v),t},isCollapsed:function(){var e=h(),t=s()
return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:i,setNode:function(t){return o(e.getOuterHTML(t)),t},getNode:function(){return function(e,t){if(!t)return e
var n=t.startContainer,r=t.endContainer,o=t.startOffset,i=t.endOffset,a=t.commonAncestorContainer
return!t.collapsed&&(n===r&&i-o<2&&n.hasChildNodes()&&(a=n.childNodes[o]),3===n.nodeType&&3===r.nodeType&&(n=n.length===o?gd(n.nextSibling,!0):n.parentNode,r=0===i?gd(r.previousSibling,!1):r.parentNode,n&&n===r))?n:a&&3===a.nodeType?a.parentNode:a}(r.getBody(),h())},getSel:s,setRng:v,getRng:h,getStart:function(e){return dd(r.getBody(),h(),e)},getEnd:function(e){return md(r.getBody(),h(),e)},getSelectedBlocks:function(t,n){return function(e,t,n,r){var o=[],i=e.getRoot()
if(n=e.getParent(n||dd(i,t,t.collapsed),e.isBlock),r=e.getParent(r||md(i,t,t.collapsed),e.isBlock),n&&n!==i&&o.push(n),n&&r&&n!==r)for(var a,u=new _r(n,i);(a=u.next())&&a!==r;)e.isBlock(a)&&o.push(a)
return r&&n!==r&&r!==i&&o.push(r),o}(e,h(),t,n)},normalize:function(){var t=h()
if(1<xl(s()).length||!_l(r))return t
var n=Sf(e,t)
return n.each((function(e){v(e,i())})),n.getOr(t)},selectorChanged:function(e,t){return p(e,t),b},selectorChangedWithUnbind:p,getScrollContainer:function(){for(var t,n=e.getRoot();n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n
break}n=n.parentNode}return t},scrollIntoView:function(e,t){u(e)?(r.inline?qf:Wf)(r,e,t):Kf(r,h(),t)},placeCaretAt:function(e,t){return v(hf(e,t,r.getDoc()))},getBoundingClientRect:function(){var e=h()
return e.collapsed?rs.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){t=c=l=null,C.destroy()}},y=Bl(b),C=gf(b,r)
function x(e,t){return $(t,(function(t){return f.is(t,e)}))}function w(e){return f.getParents(e,null,f.getRoot())}return b.bookmarkManager=y,b.controlSelection=C,b}function vh(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return{type:t=r?r[1]:t,data:n[1]}}function bh(e,t){var n
try{n=atob(t)}catch(e){return ve.none()}for(var r=new Uint8Array(n.length),o=0;o<r.length;o++)r[o]=n.charCodeAt(o)
return ve.some(new Blob([r],{type:e}))}function yh(e){return 0===e.indexOf("blob:")?(t=e,new Er((function(e,n){function r(){n("Cannot convert "+t+" to Blob. Resource might not exist or is inaccessible.")}try{var o=new XMLHttpRequest
o.open("GET",t,!0),o.responseType="blob",o.onload=function(){200===o.status?e(o.response):r()},o.onerror=r,o.send()}catch(e){r()}}))):0===e.indexOf("data:")?(n=e,new Er((function(e){var t=vh(n)
bh(t.type,t.data).fold((function(){return e(new Blob([]))}),e)}))):null
var t,n}function Ch(e){return(e||"blobid")+Uh++}function xh(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new Od("br",1)).shortEnded=!0:r.empty().append(new Od("#text",3)).value=vo}function wh(e,t,n,r){return r.isEmpty(t,n,(function(t){return(n=e.getElementRule(t.name))&&n.paddEmpty
var n}))}function Sh(e,t){void 0===t&&(t=Zr())
var n={},r=[],o={},i={}
function a(e){var t=e.name
t in n&&((u=o[t])?u.push(e):o[t]=[e])
for(var a=r.length;a--;){var u,s=r[a].name
s in e.attributes.map&&((u=i[s])?u.push(e):i[s]=[e])}return e}(e=e||{}).validate=!("validate"in e)||e.validate,e.root_name=e.root_name||"body"
var s={schema:t,addAttributeFilter:function(e,t){jh(Vh(e),(function(e){for(var n=0;n<r.length;n++)if(r[n].name===e)return void r[n].callbacks.push(t)
r.push({name:e,callbacks:[t]})}))},getAttributeFilters:function(){return[].concat(r)},addNodeFilter:function(e,t){jh(Vh(e),(function(e){var r=n[e]
r||(n[e]=r=[]),r.push(t)}))},getNodeFilters:function(){var e,t=[]
for(e in n)Ne(n,e)&&t.push({name:e,callbacks:n[e]})
return t},filterNode:a,parse:function(u,s){var c,l,f,d,m,g,p,h,v=[]
function b(e){for(var n=t.getBlockElements(),r=e.prev;r&&3===r.type;){var o=r.value.replace(A,"")
if(0<o.length)return r.value=o,0
var i=r.next
if(i){if(3===i.type&&i.value.length){r=r.prev
continue}if(!n[i.name]&&"script"!==i.name&&"style"!==i.name){r=r.prev
continue}}var a=r.prev
r.remove(),r=a}}function y(e,t){var r,i=new Od(e,t)
return e in n&&((r=o[e])?r.push(i):o[e]=[i]),i}s=s||{},o={},i={}
var C=qh(Hh("script,style,head,html,body,title,meta,param"),t.getBlockElements()),x=t.getNonEmptyElements(),w=t.children,S=e.validate,E=("forced_root_block"in s?s:e).forced_root_block,N=!1===E?"":!0===E?"p":E,k=t.getWhiteSpaceElements(),_=/^[ \t\r\n]+/,A=/[ \t\r\n]+$/,R=/[ \t\r\n]+/g,D=/^[ \t\r\n]+$/,T=Ne(k,s.context)||Ne(k,e.root_name),O=Vd({validate:S,document:e.document,allow_html_data_urls:e.allow_html_data_urls,allow_svg_data_urls:e.allow_svg_data_urls,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,preserve_cdata:e.preserve_cdata,self_closing_elements:function(e){var t,n={}
for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t])
return n}(t.getSelfClosingElements()),cdata:function(e){h.append(y("#cdata",4)).value=e},text:function(e,t){var n,r
T||(e=e.replace(R," "),(r=h.lastChild)&&(Ne(C,r.name)||"br"===r.name)&&(e=e.replace(_,""))),0!==e.length&&((n=y("#text",3)).raw=!!t,h.append(n).value=e)},comment:function(e){h.append(y("#comment",8)).value=e},pi:function(e,t){h.append(y(e,7)).value=t,b(h)},doctype:function(e){h.append(y("#doctype",10)).value=e,b(h)},start:function(e,n,o){var a=S?t.getElementRule(e):{}
if(a){var u=y(a.outputName||e,1)
u.attributes=n,u.shortEnded=o,h.append(u)
var s=w[h.name]
s&&w[u.name]&&!s[u.name]&&v.push(u)
for(var c=r.length;c--;){var l=r[c].name
l in n.map&&((g=i[l])?g.push(u):i[l]=[u])}C[e]&&b(u),o||(h=u),!T&&k[e]&&(T=!0)}},end:function(n){var r,o,i,a,u,c=S?t.getElementRule(n):{}
if(c){if(C[n]&&!T){if((r=h.firstChild)&&3===r.type)if(0<(o=r.value.replace(_,"")).length)r.value=o,r=r.next
else for(i=r.next,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.next,0!==o.length&&!D.test(o)||(r.remove(),r=i),r=i
if((r=h.lastChild)&&3===r.type)if(0<(o=r.value.replace(A,"")).length)r.value=o,r=r.prev
else for(i=r.prev,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.prev,0!==o.length&&!D.test(o)||(r.remove(),r=i),r=i}if(T&&k[n]&&(T=!1),c.removeEmpty&&wh(t,x,k,h))return a=h.parent,C[h.name]?h.empty().remove():h.unwrap(),void(h=a)
c.paddEmpty&&(zh(u=h,"#text")&&u.firstChild.value===vo||wh(t,x,k,h))&&xh(e,s,C,h),h=h.parent}}},t),B=h=new Od(s.context||e.root_name,11)
if(O.parse(u,s.format),S&&v.length&&(s.context?s.invalid=!0:function(e){for(var n=Hh("tr,td,th,tbody,thead,tfoot,table"),r=t.getNonEmptyElements(),o=t.getWhiteSpaceElements(),i=t.getTextBlockElements(),u=t.getSpecialElements(),s=function(e,n){if(void 0===n&&(n=e.parent),u[e.name])e.empty().remove()
else{for(var r=0,o=e.children();r<o.length;r++){var i=o[r]
t.isValidChild(n.name,i.name)||s(i,n)}e.unwrap()}},c=0;c<e.length;c++){var l,f=e[c],d=void 0,m=void 0
if(f.parent&&!f.fixed)if(i[f.name]&&"li"===f.parent.name){for(var g=f.next;g&&i[g.name];)g.name="li",g.fixed=!0,f.parent.insert(g,f.parent),g=g.next
f.unwrap()}else{var p=[f]
for(d=f.parent;d&&!t.isValidChild(d.name,f.name)&&!n[d.name];d=d.parent)p.push(d)
if(d&&1<p.length)if(t.isValidChild(d.name,f.name)){p.reverse()
for(var h=l=a(p[0].clone()),v=0;v<p.length-1;v++){t.isValidChild(h.name,p[v].name)?(m=a(p[v].clone()),h.append(m)):m=h
for(var b=p[v].firstChild;b&&b!==p[v+1];){var y=b.next
m.append(b),b=y}h=m}wh(t,r,o,l)?d.insert(f,p[0],!0):(d.insert(l,p[0],!0),d.insert(f,l)),d=p[0],(wh(t,r,o,d)||zh(d,"br"))&&d.empty().remove()}else s(f)
else f.parent&&("li"!==f.name?t.isValidChild(f.parent.name,"div")&&t.isValidChild("div",f.name)?f.wrap(a(new Od("div",1))):s(f):!(g=f.prev)||"ul"!==g.name&&"ol"!==g.name?!(g=f.next)||"ul"!==g.name&&"ol"!==g.name?f.wrap(a(new Od("ul",1))):g.insert(f,g.firstChild,!0):g.append(f))}}}(v)),N&&("body"===B.name||s.isRootContent)&&function(){function n(e){e&&((r=e.firstChild)&&3===r.type&&(r.value=r.value.replace(_,"")),(r=e.lastChild)&&3===r.type&&(r.value=r.value.replace(A,"")))}var r=B.firstChild,o=null
if(t.isValidChild(B.name,N.toLowerCase())){for(;r;){var i=r.next
3===r.type||1===r.type&&"p"!==r.name&&!C[r.name]&&!r.attr("data-mce-type")?(o||((o=y(N,1)).attr(e.forced_root_block_attrs),B.insert(o,r)),o.append(r)):(n(o),o=null),r=i}n(o)}}(),!s.invalid){for(p in o)if(Ne(o,p)){for(g=n[p],d=(c=o[p]).length;d--;)c[d].parent||c.splice(d,1)
for(l=0,f=g.length;l<f;l++)g[l](c,p,s)}for(l=0,f=r.length;l<f;l++)if((g=r[l]).name in i){for(d=(c=i[g.name]).length;d--;)c[d].parent||c.splice(d,1)
for(d=0,m=g.callbacks.length;d<m;d++)g.callbacks[d](c,g.name,s)}}return B}}
return function(e,t){var n,r,o,i=e.schema
function a(e){var t,n,i=e.attr("src");(t=e).attr("src")===xt.transparentSrc||u(t.attr("data-mce-placeholder"))||u(e.attr("data-mce-bogus"))||((n=/data:([^;]+);base64,([a-z0-9\+\/=\s]+)/i.exec(i))?ve.some({type:n[1],data:decodeURIComponent(n[2])}):ve.none()).filter((function(){return function(e,t){if(t.images_dataimg_filter){var n=new Image
return n.src=e.attr("src"),ne(e.attributes.map,(function(e,t){n.setAttribute(t,e)})),t.images_dataimg_filter(n)}return!0}(e,r)})).bind((function(e){var t=e.type,n=e.data
return ve.from(o.getByData(n,t)).orThunk((function(){return bh(t,n).map((function(e){var t=o.create(Ch(),e,n)
return o.add(t),t}))}))})).each((function(t){e.attr("src",t.blobUri())}))}t.remove_trailing_brs&&e.addNodeFilter("br",(function(e,n,r){var o,a,u,s,c,l,f,d,m=e.length,g=Et.extend({},i.getBlockElements()),p=i.getNonEmptyElements(),h=i.getWhiteSpaceElements()
for(g.body=1,o=0;o<m;o++)if(u=(a=e[o]).parent,g[a.parent.name]&&a===u.lastChild){for(c=a.prev;c;){if("span"!==(l=c.name)||"bookmark"!==c.attr("data-mce-type")){"br"===l&&(a=null)
break}c=c.prev}a&&(a.remove(),wh(i,p,h,u)&&(f=i.getElementRule(u.name))&&(f.removeEmpty?u.remove():f.paddEmpty&&xh(t,r,g,u)))}else{for(s=a;u&&u.firstChild===s&&u.lastChild===s&&!g[(s=u).name];)u=u.parent
s===u&&!0!==t.padd_empty_with_br&&((d=new Od("#text",3)).value=vo,a.replace(d))}})),e.addAttributeFilter("href",(function(e){var n,r,o=e.length
if(!t.allow_unsafe_link_target)for(;o--;){var i=e[o]
"a"===i.name&&"_blank"===i.attr("target")&&i.attr("rel",(r=void 0,r=(n=i.attr("rel"))?Et.trim(n):"",/\b(noopener)\b/g.test(r)?r:r.split(" ").filter((function(e){return 0<e.length})).concat(["noopener"]).sort().join(" ")))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href"))for(r=o.parent,t=o.lastChild;n=t.prev,r.insert(t,o),t=n;);})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(function(e){for(var t,n,r,o=e.length;o--;)"ul"!==(r=(n=e[o]).parent).name&&"ol"!==r.name||(n.prev&&"li"===n.prev.name?n.prev.append(n):((t=new Od("li",1)).attr("style","list-style-type: none"),n.wrap(t)))})),t.validate&&i.getValidClasses()&&e.addAttributeFilter("class",(function(e){for(var t=i.getValidClasses(),n=e.length;n--;){for(var r=e[n],o=r.attr("class").split(" "),a="",u=0;u<o.length;u++){var s=o[u],c=!1,l=t["*"]
l&&l[s]&&(c=!0),l=t[r.name],(c=!(c||!l||!l[s])||c)&&(a&&(a+=" "),a+=s)}a.length||(a=null),r.attr("class",a)}})),n=e,(o=(r=t).blob_cache)&&n.addAttributeFilter("src",(function(e){return F(e,a)}))}(s,e),e.inline_styles&&function(e,t){var n,r,o,i,a=to()
t.convert_fonts_to_spans&&(r=e,o=a,i=Et.explode(t.font_size_legacy_values),r.addNodeFilter("font",(function(e){F(e,(function(e){var t,n=o.parse(e.attr("style")),r=e.attr("color"),a=e.attr("face"),u=e.attr("size")
r&&(n.color=r),a&&(n["font-family"]=a),u&&(n["font-size"]=i[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",o.serialize(n)),t=e,F(["color","face","size"],(function(e){t.attr(e,null)}))}))}))),n=a,e.addNodeFilter("strike",(function(e){F(e,(function(e){var t=n.parse(e.attr("style"))
t["text-decoration"]="line-through",e.name="span",e.attr("style",n.serialize(t))}))}))}(s,e),s}function Eh(e,t,n){-1===Et.inArray(t,n)&&(e.addAttributeFilter(n,(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),t.push(n))}function Nh(e,t){var n=function(e,t){var n=["data-mce-selected"],r=t&&t.dom?t.dom:Ya.DOM,o=t&&t.schema?t.schema:Zr(e)
e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
var i,a=Sh(e,o),u=e,s=r
return(i=a).addAttributeFilter("data-mce-tabindex",(function(e,t){for(var n=e.length;n--;){var r=e[n]
r.attr("tabindex",r.attr("data-mce-tabindex")),r.attr(t,null)}})),i.addAttributeFilter("src,href,style",(function(e,t){for(var n="data-mce-"+t,r=u.url_converter,o=u.url_converter_scope,i=e.length;i--;){var a=e[i],c=a.attr(n)
void 0!==c?(a.attr(t,0<c.length?c:null),a.attr(n,null)):(c=a.attr(t),"style"===t?c=s.serializeStyle(s.parseStyle(c),a.name):r&&(c=r.call(o,c,t,a.name)),a.attr(t,0<c.length?c:null))}})),i.addAttributeFilter("class",(function(e){for(var t=e.length;t--;){var n,r=e[t]
r.attr("class")&&(n=r.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),r.attr("class",0<n.length?n:null))}})),i.addAttributeFilter("data-mce-type",(function(e,t,n){for(var r=e.length;r--;){var o=e[r]
"bookmark"!==o.attr("data-mce-type")||n.cleanup||(ve.from(o.firstChild).exists((function(e){return!yo(e.value)}))?o.unwrap():o.remove())}})),i.addNodeFilter("noscript",(function(e){for(var t=e.length;t--;){var n=e[t].firstChild
n&&(n.value=Xo.decode(n.value))}})),i.addNodeFilter("script,style",(function(e,t){for(var n=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")},r=e.length;r--;){var o,i=e[r],a=i.firstChild?i.firstChild.value:""
"script"===t?((o=i.attr("type"))&&i.attr("type","mce-no/type"===o?null:o.replace(/^mce\-/,"")),"xhtml"===u.element_format&&0<a.length&&(i.firstChild.value="// <![CDATA[\n"+n(a)+"\n// ]]>")):"xhtml"===u.element_format&&0<a.length&&(i.firstChild.value="\x3c!--\n"+n(a)+"\n--\x3e")}})),i.addNodeFilter("#comment",(function(e){for(var t=e.length;t--;){var n=e[t]
u.preserve_cdata&&0===n.value.indexOf("[CDATA[")?(n.name="#cdata",n.type=4,n.value=s.decode(n.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===n.value.indexOf("mce:protected ")&&(n.name="#text",n.type=3,n.raw=!0,n.value=unescape(n.value).substr(14))}})),i.addNodeFilter("xml:namespace,input",(function(e,t){for(var n=e.length;n--;){var r=e[n]
7===r.type?r.remove():1===r.type&&("input"!==t||r.attr("type")||r.attr("type","text"))}})),i.addAttributeFilter("data-mce-type",(function(e){F(e,(function(e){"format-caret"===e.attr("data-mce-type")&&(e.isEmpty(i.schema.getNonEmptyElements())?e.remove():e.unwrap())}))})),i.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),{schema:o,addNodeFilter:a.addNodeFilter,addAttributeFilter:a.addAttributeFilter,serialize:function(n,i){var u,s,c,l,f,d,m,g,p,h,v,b,y,C,x,w,S,E,N,k,_,A,R,D,T,O,B,P,L,I=_e({format:"html"},i=void 0===i?{}:i),M=(b=n,R=y=I,u=(v=t)&&v.hasEventListeners("PreProcess")&&!R.no_events?(x=y,k=(C=v).dom,_=b.cloneNode(!0),(A=document.implementation).createHTMLDocument&&(S=A.createHTMLDocument(""),Et.each("BODY"===_.nodeName?_.childNodes:[_],(function(e){S.body.appendChild(S.importNode(e,!0))})),_="BODY"!==_.nodeName?S.body.firstChild:S.body,w=k.doc,k.doc=S),E=C,N=_e(_e({},x),{node:_}),E.fire("PreProcess",N),w&&(k.doc=w),_):b,c=Co((s=I).getInner?u.innerHTML:r.getOuterHTML(u)),s.selection||po(Nt.fromDom(u))?c:Et.trim(c)),F=(l=a,f=M,m=(d=I).selection?_e({forced_root_block:!1},d):d,!U(h=(g=l.parse(f,m)).lastChild)||U(p=h.prev)&&(h.remove(),p.remove()),g)
function U(e){return e&&"br"===e.name}return"tree"===I.format?F:(D=t,T=I,O=F,L=Yd(e,o).serialize(O),T.no_events||!D?L:(B=D,P=_e(_e({},T),{content:L}),B.fire("PostProcess",P).content))},addRules:o.addValidElements,setRules:o.setValidElements,addTempAttr:N(Eh,a,n),getTempAttrs:f(n),getNodeFilters:a.getNodeFilters,getAttributeFilters:a.getAttributeFilters}}(e,t)
return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters}}function kh(e,t,n){return r=n=void 0===n?{}:n,Jp(e).editor.setContent(t,r)
var r}function _h(e){return ve.from(e).each((function(e){return e.destroy()}))}function Ah(e){var t=y(e)?e.join(" "):e
return H(M(v(t)?t.split(" "):[],Je),(function(e){return 0<e.length}))}function Rh(e,t){return Ne(e.sections(),t)}function Dh(e,t){return ue(e,"toolbar_mode").orThunk((function(){return ue(e,"toolbar_drawer").map((function(e){return!1===e?"wrap":e}))})).getOr(t)}function Th(e,t,n,r,o){var i,a,u,s,c,l,d,m,g=e?{mobile:(i=t,a={resize:!1,toolbar_mode:Dh(o.mobile||{},"scrolling"),toolbar_sticky:!1},_e(_e(_e({},tv),a),i?{menubar:!1}:{}))}:{},p=(c=["mobile"],ie(Wh(g,o),(function(e,t){return L(c,t)}),oe(l={}),oe(d={})),{sections:f((m={t:l,f:d}).t),settings:f(m.f)}),h=Et.extend(n,r,p.settings(),e&&Rh(p,"mobile")?function(e){void 0===e&&(e={})
var t=ue(p.sections(),"mobile").getOr({})
return Et.extend({},e,t)}():{},{validate:!0,external_plugins:(u=r,s=p.settings().external_plugins||{},u&&u.external_plugins?Et.extend({},u.external_plugins,s):s)})
return function(e,t,n,r){var o,i,a,u,s,c,l,f,d=Ah(n.forced_plugins),m=Ah(r.plugins),g=Rh(o=t,"mobile")?o.sections().mobile:{},p=(u=t,s=m,c=g.plugins?Ah(g.plugins):m,i=(a=e)&&(f=(l=u).sections(),Rh(l,"mobile")&&"mobile"===f.mobile.theme)?H(c,N(L,ev)):a&&Rh(u,"mobile")?c:s,[].concat(Ah(d)).concat(Ah(i)))
if(xt.browser.isIE()&&L(p,"rtc"))throw new Error("RTC plugin is not supported on IE 11.")
return Et.extend(r,{plugins:p.join(" ")})}(e,p,r,h)}function Oh(e,t,n){return ve.from(t.settings[n]).filter(e)}function Bh(e,t){return t.dom[e]}function Ph(e,t){return parseInt(Cn(t,e),10)}function Lh(e,t,n){var r,o,i,a,u,s,c=Nt.fromDom(e.getBody()),l=e.inline?c:Nt.fromDom(Dt(c).dom.documentElement),f=(r=e.inline,i=t,a=n,u=(o=l).dom.getBoundingClientRect(),{x:i-(r?u.left+o.dom.clientLeft+av(o):0),y:a-(r?u.top+o.dom.clientTop+iv(o):0)}),d=f.x,m=f.y,g=rv(s=l),p=ov(s)
return 0<=d&&0<=m&&d<=g&&m<=p}function Ih(e){function t(){var t=e.theme
return t&&t.getNotificationManagerImpl?t.getNotificationManagerImpl():{open:n,close:n,reposition:n,getArgs:n}
function n(){throw new Error("Theme did not provide a NotificationManager implementation.")}}function n(){return ve.from(u[0])}function r(){0<u.length&&t().reposition(u)}function o(e){W(u,(function(t){return t===e})).each((function(e){u.splice(e,1)}))}function i(i,a){if(void 0===a&&(a=!0),!e.removed&&(c=(s=e).inline?s.getBody():s.getContentAreaContainer(),ve.from(c).map(Nt.fromDom).map(Ln).getOr(!1)))return a&&e.fire("BeforeOpenNotification",{notification:i}),$(u,(function(e){return!((n=t().getArgs(e)).type!==i.type||n.text!==i.text||n.progressBar||n.timeout||i.progressBar||i.timeout)
var n})).getOrThunk((function(){e.editorManager.setActive(e)
var a=t().open(i,(function(){o(a),r(),n().fold((function(){return e.focus()}),(function(e){return Nt.fromDom(e.getEl()).dom.focus()}))}))
return u.push(a),r(),e.fire("OpenNotification",{notification:_e({},a)}),a}))
var s,c}var a,u=[],s=f(u)
return(a=e).on("SkinLoaded",(function(){var e=a.getParam("service_message")
e&&i({text:e,type:"warning",timeout:0},!1),r()})),a.on("show ResizeEditor ResizeWindow NodeChange",(function(){Nr.requestAnimationFrame(r)})),a.on("remove",(function(){F(u.slice(),(function(e){t().close(e)}))})),{open:i,close:function(){n().each((function(e){t().close(e),o(e),r()}))},getNotifications:s}}var Mh,Fh,Uh=0,zh=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Hh=Et.makeMap,jh=Et.each,Vh=Et.explode,qh=Et.extend,$h=Ya.DOM,Wh=(Mh=function(e,t){return b(e)&&b(t)?Wh(e,t):t},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var o,i=e[r]
for(o in i)Ne(i,o)&&(n[o]=Mh(n[o],i[o]))}return n}),Kh="autoresize_on_init,content_editable_state,convert_fonts_to_spans,inline_styles,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","),Xh="bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),Yh="imagetools,toc".split(","),Gh=dt().deviceType,Jh=Gh.isTouch(),Qh=Gh.isPhone(),Zh=Gh.isTablet(),ev=["lists","autolink","autosave"],tv={table_grid:!1,object_resizing:!1,resize:!1},nv=(Fh={},{add:function(e,t){Fh[e]=t},get:function(e){return Fh[e]||{icons:{}}},has:function(e){return Ne(Fh,e)}}),rv=N(Bh,"clientWidth"),ov=N(Bh,"clientHeight"),iv=N(Ph,"margin-top"),av=N(Ph,"margin-left"),uv=au.PluginManager,sv=au.ThemeManager
function cv(e){function t(){var t=e.theme
return t&&t.getWindowManagerImpl?t.getWindowManagerImpl():{open:n,openUrl:n,alert:n,confirm:n,close:n,getParams:n,setParams:n}
function n(){throw new Error("Theme did not provide a WindowManager implementation.")}}function n(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t?t.apply(e,n):void 0}}function r(t){e.fire("CloseWindow",{dialog:t}),0===(i=H(i,(function(e){return e!==t}))).length&&e.focus()}function o(t){e.editorManager.setActive(e),rd(e)
var n,r=t()
return n=r,i.push(n),e.fire("OpenWindow",{dialog:n}),r}var i=[]
return e.on("remove",(function(){F(i,(function(e){t().close(e)}))})),{open:function(e,n){return o((function(){return t().open(e,n,r)}))},openUrl:function(e){return o((function(){return t().openUrl(e,r)}))},alert:function(e,r,o){var i=t()
i.alert(e,n(o||i,r))},confirm:function(e,r,o){var i=t()
i.confirm(e,n(o||i,r))},close:function(){ve.from(i[i.length-1]).each((function(e){t().close(e),r(e)}))}}}function lv(e,t){e.notificationManager.open({type:"error",text:t})}function fv(e,t){e._skinLoaded?lv(e,t):e.on("SkinLoaded",(function(){lv(e,t)}))}function dv(e,t,n){ff(e,t,{message:n}),console.error(n)}function mv(e,t,n){return n?"Failed to load "+e+": "+n+" from url "+t:"Failed to load "+e+" url: "+t}function gv(e,t,n){dv(e,"PluginLoadError",mv("plugin",t,n))}function pv(){function e(e,t){return{status:e,resultUri:t}}function t(e){return e in n}var n={}
return{hasBlobUri:t,getResultUri:function(e){var t=n[e]
return t?t.resultUri:null},isPending:function(e){return!!t(e)&&1===n[e].status},isUploaded:function(e){return!!t(e)&&2===n[e].status},markPending:function(t){n[t]=e(1,null)},markUploaded:function(t,r){n[t]=e(2,r)},removeFailed:function(e){delete n[e]},destroy:function(){n={}}}}function hv(e){return e+Ib+++"s"+(new Date).getTime().toString(36)+t()+t()+t()
function t(){return Math.round(4294967295*Math.random()).toString(36)}}function vv(){function e(e){return $(r,e).getOrUndefined()}function t(e){if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
var t=e.id||hv("blobid"),n=e.name||t,r=e.blob
return{id:f(t),name:f(n),filename:f(e.filename||n+"."+({"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png","image/apng":"apng","image/avif":"avif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff"}[r.type.toLowerCase()]||"dat")),blob:f(r),base64:f(e.base64),blobUri:f(e.blobUri||URL.createObjectURL(r)),uri:f(e.uri)}}function n(t){return e((function(e){return e.id()===t}))}var r=[]
return{create:function(e,n,r,o,i){if(v(e))return t({id:e,name:o,filename:i,blob:n,base64:r})
if(b(e))return t(e)
throw new Error("Unknown input type")},add:function(e){n(e.id())||r.push(e)},get:n,getByUri:function(t){return e((function(e){return e.blobUri()===t}))},getByData:function(t,n){return e((function(e){return e.base64()===t&&e.blob().type===n}))},findFirst:e,removeByUri:function(e){r=H(r,(function(t){return t.blobUri()!==e||void URL.revokeObjectURL(t.blobUri())}))},destroy:function(){F(r,(function(e){URL.revokeObjectURL(e.blobUri())})),r=[]}}}function bv(e){return function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})}}function yv(e,t){return function(e,t){function n(e,n,r,o){var i=new XMLHttpRequest
i.open("POST",t.url),i.withCredentials=t.credentials,i.upload.onprogress=function(e){o(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,o,a
i.status<200||300<=i.status?r("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?n((o=t.basePath,a=e.location,o?o.replace(/\/$/,"")+"/"+a.replace(/^\//,""):a)):r("Invalid JSON: "+i.responseText)}
var a=new FormData
a.append("file",e.blob(),e.filename()),i.send(a)}function r(e,t){return{url:t,blobInfo:e,status:!0}}function o(e,t,n){return{url:"",blobInfo:e,status:!1,error:{message:t,options:n}}}function i(e,t){Et.each(a[e],(function(e){e(t)})),delete a[e]}var a={}
return!1===S(t.handler)&&(t.handler=n),{upload:function(u,s){return t.url||t.handler!==n?(l=s,c=Et.grep(u,(function(t){return!e.isUploaded(t.blobUri())})),Er.all(Et.map(c,(function(n){return e.isPending(n.blobUri())?(f=n.blobUri(),new Er((function(e){a[f]=a[f]||[],a[f].push(e)}))):(u=n,s=t.handler,c=l,e.markPending(u.blobUri()),new Er((function(t){var a
try{var l=function(){a&&a.close()}
s(u,(function(n){l(),e.markUploaded(u.blobUri(),n),i(u.blobUri(),r(u,n)),t(r(u,n))}),(function(n,r){var a=r||{}
l(),e.removeFailed(u.blobUri()),i(u.blobUri(),o(u,n,a)),t(o(u,n,a))}),(function(e){e<0||100<e||ve.from(a).orThunk((function(){return ve.from(c).map(_)})).each((function(t){(a=t).progressBar.value(e)}))}))}catch(n){t(o(u,n.message,{}))}})))
var u,s,c,f})))):new Er((function(e){e([])}))
var c,l}}}(t,{url:e.getParam("images_upload_url","","string"),basePath:e.getParam("images_upload_base_path","","string"),credentials:e.getParam("images_upload_credentials",!1,"boolean"),handler:e.getParam("images_upload_handler",null,"function")})}function Cv(e){function t(t){return function(n){return e.selection?t(n):[]}}function n(e,t,n){for(var r=0;-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1),-1!==r;);return e}function r(e,t,r){return e=n(e,'src="'+t+'"','src="'+r+'"'+(r===xt.transparentSrc?' data-mce-placeholder="1"':"")),n(e,'data-mce-src="'+t+'"','data-mce-src="'+r+'"')}function o(t,n){F(e.undoManager.data,(function(e){"fragmented"===e.type?e.fragments=M(e.fragments,(function(e){return r(e,t,n)})):e.content=r(e.content,t,n)}))}function i(n){return c=c||yv(e,g),v().then(t((function(r){var i=M(r,(function(e){return e.blobInfo}))
return c.upload(i,bv(e)).then(t((function(t){var i=[],a=M(t,(function(t,n){var a,u,s,c,l=r[n].blobInfo,f=r[n].image
return t.status&&e.getParam("images_replace_blob_uris",!0,"boolean")?(m.removeByUri(f.src),Yp(e)||(u=f,s=t.url,c=e.convertURL(s,"src"),o(u.src,s),e.$(u).attr({src:e.getParam("images_reuse_filename",!1,"boolean")?s+(-1===s.indexOf("?")?"?":"&")+(new Date).getTime():s,"data-mce-src":c}))):t.error&&(t.error.options.remove&&(o(f.getAttribute("src"),xt.transparentSrc),i.push(f)),a=t.error.message,fv(e,iu.translate(["Failed to upload image: {0}",a]))),{element:f,status:t.status,uploadUri:t.url,blobInfo:l}}))
return 0<a.length&&h.fireIfChanged(),0<i.length&&(Yp(e)?console.error("Removing images on failed uploads is currently unsupported for RTC"):e.undoManager.transact((function(){F(i,(function(t){e.dom.remove(t),m.removeByUri(t.src)}))}))),n&&n(a),a})))})))}function a(t){if(ws(e))return i(t)}function u(t){return!1!==X(p,(function(e){return e(t)}))&&(0!==t.getAttribute("src").indexOf("data:")||e.getParam("images_dataimg_filter",T,"function")(t))}function s(t){return t.replace(/src="(blob:[^"]+)"/g,(function(t,n){var r=g.getResultUri(n)
if(r)return'src="'+r+'"'
var o=(o=m.getByUri(n))||V(e.editorManager.get(),(function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)}),null)
return o?'src="data:'+o.blob().type+";base64,"+o.base64()+'"':t}))}var c,l,f,d,m=vv(),g=pv(),p=[],h=(d=tu(null),(f=e).on("change AddUndo",(function(e){d.set(_e({},e.level))})),{fireIfChanged:function(){var e=f.undoManager.data
ee(e).filter((function(e){return!qp(d.get(),e)})).each((function(t){f.setDirty(!0),f.fire("change",{level:t,lastLevel:Q(e,e.length-2).getOrNull()})}))}}),v=function(){return(l=l||function(e,t){var n={}
return{findAll:function(r,o){o=o||T
var i=M(H(r?xe(r.getElementsByTagName("img")):[],(function(t){var n=t.src
return xt.fileApi&&!t.hasAttribute("data-mce-bogus")&&!t.hasAttribute("data-mce-placeholder")&&n&&n!==xt.transparentSrc&&(0===n.indexOf("blob:")?!e.isUploaded(n)&&o(t):0===n.indexOf("data:")&&o(t))})),(function(e){if(void 0!==n[e.src])return new Er((function(t){n[e.src].then((function(n){return"string"==typeof n?n:void t({image:e,blobInfo:n.blobInfo})}))}))
var r=new Er((function(n,r){var o,i,a,u,s,c,l,f,d
o=t,a=n,u=r,0!==(i=e).src.indexOf("blob:")?(c=(s=vh(i.src)).data,l=s.type,f=c,(d=o.getByData(f,l))?a({image:i,blobInfo:d}):yh(i.src).then((function(e){d=o.create(Ch(),e,f),o.add(d),a({image:i,blobInfo:d})}),(function(e){u(e)}))):(d=o.getByUri(i.src))?a({image:i,blobInfo:d}):yh(i.src).then((function(e){var t=e
new Er((function(e){var n=new FileReader
n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})).then((function(t){f=vh(t).data,d=o.create(Ch(),e,f),o.add(d),a({image:i,blobInfo:d})}))}),(function(e){u(e)}))})).then((function(e){return delete n[e.image.src],e})).catch((function(t){return delete n[e.src],t}))
return n[e.src]=r}))
return Er.all(i)}}}(g,m)).findAll(e.getBody(),u).then(t((function(t){return t=H(t,(function(t){return"string"!=typeof t||void fv(e,t)})),Yp(e)||F(t,(function(e){o(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),t})))}
return e.on("SetContent",(function(){(ws(e)?a:v)()})),e.on("RawSaveContent",(function(e){e.content=s(e.content)})),e.on("GetContent",(function(e){e.source_view||"raw"===e.format||"tree"===e.format||(e.content=s(e.content))})),e.on("PostRender",(function(){e.parser.addNodeFilter("img",(function(e){F(e,(function(e){var t,n=e.attr("src")
m.getByUri(n)||(t=g.getResultUri(n))&&e.attr("src",t)}))}))})),{blobCache:m,addFilter:function(e){p.push(e)},uploadImages:i,uploadImagesAuto:a,scanForImages:v,destroy:function(){m.destroy(),g.destroy(),l=c=null}}}function xv(e,t){function n(e){o="string"==typeof e?{name:e,classes:[],attrs:{}}:e
var t,n=Fb.create(o.name),r=n
return(t=o).classes.length&&Fb.addClass(r,t.classes.join(" ")),Fb.setAttribs(r,t.attrs),n}var r,o,i,a=t&&t.schema||Zr({}),u=function(e,t,r){var o,i,s,c,l,f,d,m=0<t.length&&t[0],g=m&&m.name,p=(c=g,l="string"!=typeof(s=e)?s.nodeName.toLowerCase():s,!(!(d=(f=a.getElementRule(l))&&f.parentsRequired)||!d.length)&&(c&&-1!==Et.inArray(d,c)?c:d[0]))
if(p)g===p?(i=t[0],t=t.slice(1)):i=p
else if(m)i=t[0],t=t.slice(1)
else if(!r)return e
return i&&(o=n(i)).appendChild(e),r&&(o||(o=Fb.create("div")).appendChild(e),Et.each(r,(function(t){var r=n(t)
o.insertBefore(r,e)}))),u(o,t,i&&i.siblings)}
return e&&e.length?(r=n(o=e[0]),(i=Fb.create("div")).appendChild(u(r,e.slice(1),o.siblings)),i):""}function wv(e){var t,n={classes:[],attrs:{}}
return"*"!==(e=n.selector=Et.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,(function(e,t,r,o,i){switch(t){case"#":n.attrs.id=r
break
case".":n.classes.push(r)
break
case":":-1!==Et.inArray("checked disabled enabled read-only required".split(" "),r)&&(n.attrs[r]=r)}var a
return"["!==o||(a=i.match(/([\w\-]+)(?:\=\"([^\"]+))?/))&&(n.attrs[a[1]]=a[2]),""}))),n.name=t||"div",n}function Sv(e,t){var n,r,o="",i=(r=e.getParam("preview_styles","font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),v(r)?r:"")
if(""===i)return""
function a(e){return e.replace(/%(\w+)/g,"")}if("string"==typeof t){if(!(t=e.formatter.get(t)))return
t=t[0]}if("preview"in t){var u=ue(t,"preview")
if(fn(u,!1))return""
i=u.getOr(i)}var s,c=t.block||t.inline||"span",l=(s=t.selector)&&"string"==typeof s?(s=(s=s.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Et.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/),(function(e){var t=Et.map(e.split(/(?:~\+|~|\+)/),wv),n=t.pop()
return t.length&&(n.siblings=t),n})).reverse()):[],f=l.length?(l[0].name||(l[0].name=c),c=t.selector,xv(l,e)):xv([c],e),d=Fb.select(c,f)[0]||f.firstChild
return Mb(t.styles,(function(e,t){var n=a(e)
n&&Fb.setStyle(d,t,n)})),Mb(t.attributes,(function(e,t){var n=a(e)
n&&Fb.setAttrib(d,t,n)})),Mb(t.classes,(function(e){var t=a(e)
Fb.hasClass(d,t)||Fb.addClass(d,t)})),e.fire("PreviewFormats"),Fb.setStyles(f,{position:"absolute",left:-65535}),e.getBody().appendChild(f),n=Fb.getStyle(e.getBody(),"fontSize",!0),n=/px$/.test(n)?parseInt(n,10):0,Mb(i.split(" "),(function(t){var r=Fb.getStyle(d,t,!0)
if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(r)&&(r=Fb.getStyle(e.getBody(),t,!0),"#ffffff"===Fb.toHex(r).toLowerCase())||"color"===t&&"#000000"===Fb.toHex(r).toLowerCase())){if("font-size"===t&&/em|%$/.test(r)){if(0===n)return
r=parseFloat(r)/(/%$/.test(r)?100:1)*n+"px"}"border"===t&&r&&(o+="padding:0 2px;"),o+=t+":"+r+";"}})),e.fire("AfterPreviewFormats"),Fb.remove(f),o}function Ev(e){var t,n,r,o,i,a,s=(o={},(i=function(e,t){e&&(v(e)?(F(t=y(t)?t:[t],(function(e){w(e.deep)&&(e.deep=!ul(e)),w(e.split)&&(e.split=!ul(e)||sl(e)),w(e.remove)&&ul(e)&&!sl(e)&&(e.remove="none"),ul(e)&&sl(e)&&(e.mixed=!0,e.block_expand=!0),v(e.classes)&&(e.classes=e.classes.split(/\s+/))})),o[e]=t):ne(e,(function(e,t){i(t,e)})))})((n=(t=e).dom,r={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table,audio,video",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table,audio,video",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all",preserve_attributes:["class","style"]},{inline:"s",remove:"all",preserve_attributes:["class","style"]}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",defaultBlock:"p",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(e,t,n){return Un(e)&&e.hasAttribute("href")},onformat:function(e,t,r){Et.each(r,(function(t,r){n.setAttrib(e,r,t)}))}},lang:{inline:"span",clear_child_styles:!0,remove_similar:!0,attributes:{lang:"%value","data-mce-lang":function(e){var t
return null!==(t=null==e?void 0:e.customValue)&&void 0!==t?t:null}}},removeformat:[{selector:"b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]},Et.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/),(function(e){r[e]={block:e,remove:"all"}})),r)),i(t.getParam("formats")),{get:function(e){return u(e)?o[e]:o},has:function(e){return Ne(o,e)},register:i,unregister:function(e){return e&&o[e]&&delete o[e],o}}),c=tu(null)
return function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t])
e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])}(e),(a=e).on("mouseup keydown",(function(e){var t=a,n=e.keyCode,r=t.selection,o=t.getBody()
Ng(t,null,!1),8!==n&&46!==n||!r.isCollapsed()||r.getStart().innerHTML!==rp||Ng(t,Mc(o,r.getStart())),37!==n&&39!==n||Ng(t,Mc(o,r.getStart()))})),{get:s.get,has:s.has,register:s.register,unregister:s.unregister,apply:function(t,n,r){var o=t,i=n,a=r
Qp(e).formatter.apply(o,i,a)},remove:function(t,n,r,o){var i=t,a=n,u=r,s=o
Qp(e).formatter.remove(i,a,u,s)},toggle:function(t,n,r){var o=t,i=n,a=r
Qp(e).formatter.toggle(o,i,a)},match:function(t,n,r,o){return i=t,a=n,u=r,s=o,Qp(e).formatter.match(i,a,u,s)
var i,a,u,s},closest:function(t){return n=t,Qp(e).formatter.closest(n)
var n},matchAll:function(t,n){return r=t,o=n,Qp(e).formatter.matchAll(r,o)
var r,o},matchNode:function(t,n,r,o){return i=t,a=n,u=r,s=o,Qp(e).formatter.matchNode(i,a,u,s)
var i,a,u,s},canApply:function(t){return n=t,Qp(e).formatter.canApply(n)
var n},formatChanged:function(t,n,r,o){return i=c,a=t,u=n,s=r,l=o,Qp(e).formatter.formatChanged(i,a,u,s,l)
var i,a,u,s,l},getCssText:N(Sv,e)}}function Nv(e){switch(e.toLowerCase()){case"undo":case"redo":case"mcerepaint":case"mcefocus":return 1
default:return}}function kv(e){var t,n,r,o,i,a=uu(),u=tu(0),s=tu(0),c={data:[],typing:!1,beforeChange:function(){var t=u,n=a
Qp(e).undoManager.beforeChange(t,n)},add:function(t,n){return r=c,o=s,i=u,l=a,f=t,d=n,Qp(e).undoManager.add(r,o,i,l,f,d)
var r,o,i,l,f,d},undo:function(){return t=c,n=u,r=s,Qp(e).undoManager.undo(t,n,r)
var t,n,r},redo:function(){return t=s,n=c.data,Qp(e).undoManager.redo(t,n)
var t,n},clear:function(){var t=c,n=s
Qp(e).undoManager.clear(t,n)},reset:function(){var t=c
Qp(e).undoManager.reset(t)},hasUndo:function(){return t=c,n=s,Qp(e).undoManager.hasUndo(t,n)
var t,n},hasRedo:function(){return t=c,n=s,Qp(e).undoManager.hasRedo(t,n)
var t,n},transact:function(t){return n=c,r=u,o=t,Qp(e).undoManager.transact(n,r,o)
var n,r,o},ignore:function(t){var n=u,r=t
Qp(e).undoManager.ignore(n,r)},extra:function(t,n){var r=c,o=s,i=t,a=n
Qp(e).undoManager.extra(r,o,i,a)}}
return Yp(e)||(r=c,o=u,i=tu(!1),(n=e).on("init",(function(){r.add()})),n.on("BeforeExecCommand",(function(e){Nv(e.command)||(Kp(r,o),r.beforeChange())})),n.on("ExecCommand",(function(e){Nv(e.command)||l(e)})),n.on("ObjectResizeStart cut",(function(){r.beforeChange()})),n.on("SaveContent ObjectResized blur",l),n.on("dragend",l),n.on("keyup",(function(e){var t=e.keyCode
e.isDefaultPrevented()||((33<=t&&t<=36||37<=t&&t<=40||45===t||e.ctrlKey)&&(l(),n.nodeChanged()),46!==t&&8!==t||n.nodeChanged(),i.get()&&r.typing&&!1===qp(zp(n),r.data[0])&&(!1===n.isDirty()&&(n.setDirty(!0),n.fire("change",{level:r.data[0],lastLevel:null})),n.fire("TypingUndo"),i.set(!1),n.nodeChanged()))})),n.on("keydown",(function(e){var t,n=e.keyCode
e.isDefaultPrevented()||(33<=n&&n<=36||37<=n&&n<=40||45===n?r.typing&&l(e):(t=e.ctrlKey&&!e.altKey||e.metaKey,!(n<16||20<n)||224===n||91===n||r.typing||t||(r.beforeChange(),Wp(r,!0,o),r.add({},e),i.set(!0))))})),n.on("mousedown",(function(e){r.typing&&l(e)})),n.on("input",(function(e){e.inputType&&("insertReplacementText"===e.inputType||"insertText"===e.inputType&&null===e.data||"insertFromPaste"===e.inputType||"insertFromDrop"===e.inputType)&&l(e)})),n.on("AddUndo Undo Redo ClearUndos",(function(e){e.isDefaultPrevented()||n.nodeChanged()}))),(t=e).addShortcut("meta+z","","Undo"),t.addShortcut("meta+y,meta+shift+z","","Redo"),c
function l(e){Wp(r,!1,o),r.add({},e)}}function _v(e){return"keydown"===e.type||"keyup"===e.type}function Av(e){var t=e.keyCode
return t===_f.BACKSPACE||t===_f.DELETE}function Rv(e,t){return ze(Nt.fromDom(t),e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string"))}function Dv(e,t,n){var r,o,i=(r=e,o=t,H(Ya.DOM.getParents(n.container(),"*",o),r))
return ve.from(i[i.length-1])}function Tv(e,t){if(!t)return t
var n=t.container(),r=t.offset()
return e?Br(n)?Hn(n.nextSibling)?rs(n.nextSibling,0):rs.after(n):Ir(t)?rs(n,r+1):t:Br(n)?Hn(n.previousSibling)?rs(n.previousSibling,n.previousSibling.data.length):rs.before(n):Mr(t)?rs(n,r-1):t}function Ov(e){return co(e)||fo(e)}function Bv(e,t){return Ve(e,t)?gr(t,Ov,(n=e,function(e){return je(n,Nt.fromDom(e.dom.parentNode))})):ve.none()
var n}function Pv(e){var t,n,r
e.dom.isEmpty(e.getBody())&&(e.setContent(""),r=(n=(t=e).getBody()).firstChild&&t.dom.isBlock(n.firstChild)?n.firstChild:n,t.selection.setCursorLocation(r,0))}function Lv(e,t){return{from:e,to:t}}function Iv(e,t){return Bv(Nt.fromDom(e),Nt.fromDom(t.container())).map((function(e){return{block:e,position:t}}))}function Mv(e){var t,n=W(t=Rn(e),so).fold(f(t),(function(e){return t.slice(0,e)}))
return F(n,Pn),n}function Fv(e,t){return $(cm(t,e).reverse(),(function(e){return qr(e)})).each(Pn)}function Uv(e,t,n,r){if(qr(n))return am(n),Xl(n.dom)
0===H(Lt(r),(function(e){return!qr(e)})).length&&qr(t)&&qt(r,Nt.fromTag("br"))
var o=Kl(n.dom,rs.before(r.dom))
return F(Mv(t),(function(e){qt(r,e)})),Fv(e,t),o}function zv(e,t,n){if(qr(n))return Pn(n),qr(t)&&am(t),Xl(t.dom)
var r=Yl(n.dom)
return F(Mv(t),(function(e){Bn(n,e)})),Fv(e,t),r}function Hv(e,t){Lc(e,t.dom).map((function(e){return e.getNode()})).map(Nt.fromDom).filter(Tr).each(Pn)}function jv(e,t,n){return Hv(!0,t),Hv(!1,n),(Ve(o=n,r=t)?(i=cm(r,o),ve.from(i[i.length-1])):ve.none()).fold(N(zv,e,t,n),N(Uv,e,t,n))
var r,o,i}function Vv(e,t,n,r){return t?jv(e,r,n):jv(e,n,r)}function qv(e,t){var n,r,o,i,a,u,s,c=Nt.fromDom(e.getBody()),l=(n=c.dom,r=t,((o=e.selection.getRng()).collapsed?(a=r,u=Iv(i=n,rs.fromRangeStart(o)),s=u.bind((function(e){return ql(a,i,e.position).bind((function(e){return Iv(i,e).map((function(e){return t=i,n=a,$n((r=e).position.getNode())&&!1===qr(r.block)?Lc(!1,r.block.dom).bind((function(e){return e.isEqual(r.position)?ql(n,t,e).bind((function(e){return Iv(t,e)})):ve.some(r)})).getOr(r):r
var t,n,r}))}))})),dn(u,s,Lv).filter((function(e){return!1===je(e.from.block,e.to.block)&&Ot((n=e).from.block).bind((function(e){return Ot(n.to.block).filter((function(t){return je(e,t)}))})).isSome()&&!1===Xn((t=e).from.block.dom)&&!1===Xn(t.to.block.dom)
var t,n}))):ve.none()).bind((function(e){return Vv(c,t,e.from.block,e.to.block)})))
return l.each((function(t){e.selection.setRng(t.toRange())})),l.isSome()}function $v(e,t){var n=Nt.fromDom(t),r=N(je,e)
return mr(n,go,r).isSome()}function Wv(e,t){return!e.selection.isCollapsed()&&function(e){var t,n,r,o,i,a,u,s,c,l,f=Nt.fromDom(e.getBody())
return a=e.selection.getRng(),c=Kl((i=f).dom,rs.fromRangeStart(a)).isNone(),l=Wl(i.dom,rs.fromRangeEnd(a)).isNone(),!$v(u=i,(s=a).startContainer)&&!$v(u,s.endContainer)&&c&&l?((o=e).setContent(""),o.selection.setCursorLocation(),!0):(t=f,n=e.selection,r=n.getRng(),dn(Bv(t,Nt.fromDom(r.startContainer)),Bv(t,Nt.fromDom(r.endContainer)),(function(e,o){return!1===je(e,o)&&(r.deleteContents(),Vv(t,!0,e,o).each((function(e){n.setRng(e.toRange())})),!0)})).getOr(!1))}(e)}function Kv(e,t,n,r,o){return ve.from(t._selectionOverrides.showCaret(e,n,r,o))}function Xv(e,t){var n,r
return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?ve.none():ve.some(((r=(n=t).ownerDocument.createRange()).selectNode(n),r))}function Yv(e,t,n){var r=Ys(1,e.getBody(),t),o=rs.fromRangeStart(r),i=o.getNode()
if(bc(i))return Kv(1,e,i,!o.isAtEnd(),!1)
var a=o.getNode(!0)
if(bc(a))return Kv(1,e,a,!1,!1)
var u=e.dom.getParent(o.getNode(),(function(e){return $b(e)||qb(e)}))
return bc(u)?Kv(1,e,u,!1,n):ve.none()}function Gv(e,t,n){return t.collapsed?Yv(e,t,n).getOr(t):t}function Jv(e){return zg(e)||Ig(e)}function Qv(e){return Hg(e)||Mg(e)}function Zv(e,t,n,r,o,i){var a,u
return Kv(r,e,i.getNode(!o),o,!0).each((function(n){var r
t.collapsed?(r=t.cloneRange(),o?r.setEnd(n.startContainer,n.startOffset):r.setStart(n.endContainer,n.endOffset),r.deleteContents()):t.deleteContents(),e.selection.setRng(n)})),a=e.dom,Hn(u=n)&&0===u.data.length&&a.remove(u),!0}function eb(e,t){var n=e.selection.getRng()
if(!Hn(n.commonAncestorContainer))return!1
var r=t?tc.Forwards:tc.Backwards,o=Dc(e.getBody()),i=N(Zs,t?o.next:o.prev),a=t?Jv:Qv,u=Js(r,e.getBody(),n),s=Tv(t,i(u))
if(!s||!ec(u,s))return!1
if(a(s))return Zv(e,n,u.getNode(),r,t,s)
var c=i(s)
return!!(c&&a(c)&&ec(s,c))&&Zv(e,n,u.getNode(),r,t,c)}function tb(e,t,n){return ql(t,e,n).bind((function(r){return f=r.getNode(),go(Nt.fromDom(f))||fo(Nt.fromDom(f))||(u=e,l=r,Gs(!(s=t),c=n).fold((function(){return Gs(s,l).fold(D,d)}),d))?ve.none():t&&Xn(r.getNode())||!1===t&&Xn(r.getNode(!0))?(o=e,i=n,a=r.getNode(!1===t),Bv(Nt.fromDom(o),Nt.fromDom(i.getNode())).map((function(e){return qr(e)?Wb.remove(e.dom):Wb.moveToElement(a)})).orThunk((function(){return ve.some(Wb.moveToElement(a))}))):t&&Hg(n)||!1===t&&zg(n)?ve.some(Wb.moveToPosition(r)):ve.none()
var o,i,a,u,s,c,l,f
function d(e){return Dr(Nt.fromDom(e))&&!$s(c,l,u)}}))}function nb(e,t){return ve.from(cf(e.getBody(),t))}function rb(e,t){var n=e.selection.getNode()
return nb(e,n).filter(Xn).fold((function(){return l=e.getBody(),d=Ys((f=t)?1:-1,l,e.selection.getRng()),m=rs.fromRangeStart(d),g=Nt.fromDom(l),(!1===f&&Hg(m)?ve.some(Wb.remove(m.getNode(!0))):f&&zg(m)?ve.some(Wb.remove(m.getNode())):!1===f&&zg(m)&&vm(g,m)?Wg(g,m).map((function(e){return Wb.remove(e.getNode())})):f&&Hg(m)&&hm(g,m)?Kg(g,m).map((function(e){return Wb.remove(e.getNode())})):(n=l,r=f,s=(o=m).getNode(!1===(u=r)),c=u?"after":"before",Un(s)&&s.getAttribute("data-mce-caret")===c?(a=o.getNode(!1===(i=r)),(i&&Xn(a.nextSibling)?ve.some(Wb.moveToElement(a.nextSibling)):!1===i&&Xn(a.previousSibling)?ve.some(Wb.moveToElement(a.previousSibling)):ve.none()).fold((function(){return tb(n,r,o)}),ve.some)):tb(n,r,o).bind((function(e){return t=n,r=o,e.fold((function(e){return ve.some(Wb.remove(e))}),(function(e){return ve.some(Wb.moveToElement(e))}),(function(e){return $s(r,e,t)?ve.none():ve.some(Wb.moveToPosition(e))}))
var t,r})))).exists((function(n){return n.fold((function(e){return a._selectionOverrides.hideFakeCaret(),Hm(a,u,Nt.fromDom(e)),!0}),(i=u=t,function(e){var t=i?rs.before(e):rs.after(e)
return o.selection.setRng(t.toRange()),!0}),(r=o=a=e,function(e){return r.selection.setRng(e.toRange()),!0}))
var r,o,i,a,u}))
var n,r,o,i,a,u,s,c,l,f,d,m,g}),T)}function ob(e,t){var n=e.selection.getNode()
return!(!Xn(n)||Yn(n))&&nb(e,n.parentNode).filter(Xn).fold((function(){return F(gu(Nt.fromDom(e.getBody()),".mce-offscreen-selection"),Pn),Hm(e,t,Nt.fromDom(e.selection.getNode())),Pv(e),!0}),T)}function ib(e){var t,n=e.dom,r=e.selection,o=cf(e.getBody(),r.getNode())
return Kn(o)&&n.isBlock(o)&&n.isEmpty(o)&&(t=n.create("br",{"data-mce-bogus":"1"}),n.setHTML(o,""),o.appendChild(t),r.setRng(rs.before(t).toRange())),!0}function ab(e,t){return(e.selection.isCollapsed()?rb:ob)(e,t)}function ub(e,t){return!!e.selection.isCollapsed()&&(n=e,r=t,o=rs.fromRangeStart(n.selection.getRng()),ql(r,n.getBody(),o).filter((function(e){return(r?Pg:Lg)(e)})).bind((function(e){return ve.from(Ws(r?0:-1,e))})).exists((function(e){return n.selection.select(e),!0})))
var n,r,o}function sb(e){return Kb(e)&&e.data[0]===bo}function cb(e){return Kb(e)&&e.data[e.data.length-1]===bo}function lb(e){return e.ownerDocument.createTextNode(bo)}function fb(e,t){return(e?function(e){if(Kb(e.previousSibling))return cb(e.previousSibling)||e.previousSibling.appendData(bo),e.previousSibling
if(Kb(e))return sb(e)||e.insertData(0,bo),e
var t=lb(e)
return e.parentNode.insertBefore(t,e),t}:function(e){if(Kb(e.nextSibling))return sb(e.nextSibling)||e.nextSibling.insertData(0,bo),e.nextSibling
if(Kb(e))return cb(e)||e.appendData(bo),e
var t=lb(e)
return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t})(t)}function db(e,t){return Hn(e.container())?fb(t,e.container()):fb(t,e.getNode())}function mb(e,t){var n=t.get()
return n&&e.container()===n&&Br(n)}function gb(e,t){return t.fold((function(t){mc(e.get())
var n=Xb(t)
return e.set(n),ve.some(rs(n,n.length-1))}),(function(t){return Xl(t).map((function(t){if(mb(t,e))return rs(e.get(),1)
mc(e.get())
var n=db(t,!0)
return e.set(n),rs(n,1)}))}),(function(t){return Yl(t).map((function(t){if(mb(t,e))return rs(e.get(),e.get().length-1)
mc(e.get())
var n=db(t,!1)
return e.set(n),rs(n,n.length-1)}))}),(function(t){mc(e.get())
var n=Yb(t)
return e.set(n),ve.some(rs(n,1))}))}function pb(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t)
if(r.isSome())return r}return ve.none()}function hb(e,t){return qs(t,e)||e}function vb(e,t,n){var r=jb(n),o=hb(t,r.container())
return Dv(e,o,r).fold((function(){return Wl(o,r).bind(N(Dv,e,o)).map((function(e){return Gb.before(e)}))}),ve.none)}function bb(e,t){return null===Mc(e,t)}function yb(e,t,n){return Dv(e,t,n).filter(N(bb,t))}function Cb(e,t,n){var r=Vb(n)
return yb(e,t,r).bind((function(e){return Kl(e,r).isNone()?ve.some(Gb.start(e)):ve.none()}))}function xb(e,t,n){var r=jb(n)
return yb(e,t,r).bind((function(e){return Wl(e,r).isNone()?ve.some(Gb.end(e)):ve.none()}))}function wb(e,t,n){var r=Vb(n),o=hb(t,r.container())
return Dv(e,o,r).fold((function(){return Kl(o,r).bind(N(Dv,e,o)).map((function(e){return Gb.after(e)}))}),ve.none)}function Sb(e){return!1===(t=Jb(e),"rtl"===Ya.DOM.getStyle(t,"direction",!0)||(n=t.textContent,Hb.test(n)))
var t,n}function Eb(e,t,n){return pb([vb,Cb,xb,wb],[e,t,n]).filter(Sb)}function Nb(e){return e.fold(f("before"),f("start"),f("end"),f("after"))}function kb(e){return e.fold(Gb.before,Gb.before,Gb.after,Gb.after)}function _b(e){return e.fold(Gb.start,Gb.start,Gb.end,Gb.end)}function Ab(e,t,n,r,o,i){return dn(Dv(t,n,r),Dv(t,n,o),(function(t,r){return t!==r&&(a=r,u=qs(t,o=n),s=qs(a,o),u&&u===s)?Gb.after(e?t:r):i
var o,a,u,s})).getOr(i)}function Rb(e,t){return e.fold(T,(function(e){return r=t,!(Nb(n=e)===Nb(r)&&Jb(n)===Jb(r))
var n,r}))}function Db(e,t){return e?t.fold(c(ve.some,Gb.start),ve.none,c(ve.some,Gb.after),ve.none):t.fold(ve.none,c(ve.some,Gb.before),ve.none,c(ve.some,Gb.end))}function Tb(e,t,n,r){var o=Tv(e,r),i=Eb(t,n,o)
return Eb(t,n,o).bind(N(Db,e)).orThunk((function(){return a=t,u=n,s=i,c=Tv(o=e,r),ql(o,u,c).map(N(Tv,o)).fold((function(){return s.map(kb)}),(function(e){return Eb(a,u,e).map(N(Ab,o,a,u,c,e)).filter(N(Rb,s))})).filter(Sb)
var o,a,u,s,c}))}function Ob(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=window.console
r&&(r.error||r.log).apply(r,Ae([e],t,!1))}var Bb,Pb,Lb=function(e,t){var n=e.editorManager.baseURL+"/skins/content",r="content"+e.editorManager.suffix+".css",o=!0===e.inline
return M(t,(function(t){return/^[a-z0-9\-]+$/i.test(t)&&!o?n+"/"+t+"/"+r:e.documentBaseURI.toAbsolute(t)}))},Ib=0,Mb=Et.each,Fb=Ya.DOM,Ub=[9,27,_f.HOME,_f.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,_f.DOWN,_f.UP,_f.LEFT,_f.RIGHT].concat(xt.browser.isFirefox()?[224]:[]),zb="data-mce-placeholder",Hb=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,jb=N(Tv,!0),Vb=N(Tv,!1),qb=Kn,$b=Xn,Wb=rr([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),Kb=Hn,Xb=N(fb,!0),Yb=N(fb,!1),Gb=rr([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),Jb=function(e){return e.fold(d,d,d,d)}
function Qb(e,t,n){var r=e?1:-1
return t.setRng(rs(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0}function Zb(e,t){return e===tc.Backwards?Y(t):t}function ey(e,t,n,r){for(var o,i,a,u,s=Dc(n),c=r,l=[];c;){var f=(a=s,u=c,t===tc.Forwards?a.next(u):a.prev(u))
if(!f)break
if($n(f.getNode(!1)))return t===tc.Forwards?{positions:Zb(t,l).concat([f]),breakType:Bb.Br,breakAt:ve.some(f)}:{positions:Zb(t,l),breakType:Bb.Br,breakAt:ve.some(f)}
if(f.isVisible()){if(e(c,f)){var d=(o=c,$n((i=f).getNode(t===tc.Forwards))?Bb.Br:!1===$s(o,i)?Bb.Block:Bb.Wrap)
return{positions:Zb(t,l),breakType:d,breakAt:ve.some(f)}}l.push(f),c=f}else c=f}return{positions:Zb(t,l),breakType:Bb.Eol,breakAt:ve.none()}}function ty(e,t,n,r){return t(n,r).breakAt.map((function(r){var o=t(n,r).positions
return e===tc.Backwards?o.concat(r):[r].concat(o)})).getOr([])}function ny(e,t){return V(e,(function(e,n){return e.fold((function(){return ve.some(n)}),(function(r){return dn(Z(r.getClientRects()),Z(n.getClientRects()),(function(e,o){var i=Math.abs(t-e.left)
return Math.abs(t-o.left)<=i?n:r})).or(e)}))}),ve.none())}function ry(e,t){return Z(t.getClientRects()).bind((function(t){return ny(e,t.left)}))}function oy(e){function t(t){return M(t,(function(t){var n=Su(t)
return n.node=e,n}))}if(Un(e))return t(e.getClientRects())
if(Hn(e)){var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}}function iy(e){return K(e,oy)}N(Tb,!1),N(Tb,!0),(Pb=Bb={})[Pb.Br=0]="Br",Pb[Pb.Block=1]="Block",Pb[Pb.Wrap=2]="Wrap",Pb[Pb.Eol=3]="Eol"
var ay,uy,sy=N(ey,rs.isAbove,-1),cy=N(ey,rs.isBelow,1),ly=N(ty,-1,sy),fy=N(ty,1,cy)
function dy(e,t,n,r,o,i){function a(r){var i=iy([r]);-1===e&&(i=i.reverse())
for(var a=0;a<i.length;a++){var l=i[a]
if(!n(l,c)){if(0<s.length&&t(l,pe(s))&&u++,l.line=u,o(l))return!0
s.push(l)}}}var u=0,s=[],c=pe(i.getClientRects())
if(!c)return s
var l=i.getNode()
return a(l),function(e,t,n,r){for(;r=Vs(r,e,Hr,t);)if(n(r))return}(e,r,a,l),s}function my(e){return function(t){return t.line>e}}function gy(e){return function(t){return t.line===e}}function py(e,t){return Math.abs(e.left-t)}function hy(e,t){return Math.abs(e.right-t)}function vy(e,t){return e>=t.left&&e<=t.right}function by(e,t){return e>=t.top&&e<=t.bottom}function yy(e,t,n){return void 0===n&&(n=T),me(e,(function(e,r){if(vy(t,r))return n(r)?r:e
if(vy(t,e))return n(e)?e:r
var o=Math.min(py(e,t),hy(e,t)),i=Math.min(py(r,t),hy(r,t))
return i===o&&se(r,"node")&&rx(r.node)||i<o?r:e}))}function Cy(e,t,n,r,o){var i=ox(r,e,Hr,t,!o)
do{if(!i||n(i))return}while(i=ox(i,e,Hr,t))}function xy(e,t){e.selection.setRng(t),Kf(e,e.selection.getRng())}function wy(e,t,n){return ve.some(Gv(e,t,n))}function Sy(e,t,n,r,o,i){var a=t===tc.Forwards,u=Dc(e.getBody()),s=N(Zs,a?u.next:u.prev),c=a?r:o
if(!n.collapsed){var l=Ru(n)
if(i(l))return Kv(t,e,l,t===tc.Backwards,!1)}var f=Js(t,e.getBody(),n)
if(c(f))return Xv(e,f.getNode(!a))
var d=Tv(a,s(f)),m=Ur(n)
if(!d)return m?ve.some(n):ve.none()
if(c(d))return Kv(t,e,d.getNode(!a),a,!1)
var g=s(d)
return g&&c(g)&&ec(d,g)?Kv(t,e,g.getNode(!a),a,!1):m?wy(e,d.toRange(),!1):ve.none()}function Ey(e,t,n,r,o,i){var a=Js(t,e.getBody(),n),u=pe(a.getClientRects()),s=t===ay.Down
if(!u)return ve.none()
var c,l=H((s?nx:tx)(e.getBody(),my(1),a),gy(1)),f=u.left,d=yy(l,f)
if(d&&i(d.node)){var m=Math.abs(f-d.left),g=Math.abs(f-d.right)
return Kv(t,e,d.node,m<g,!1)}if(c=r(a)?a.getNode():o(a)?a.getNode(!0):Ru(n)){var p=function(e,t,n,r){function o(e){return pe(e.getClientRects())}var i,a,u,s=Dc(t),c=[],l=0,f=1===e?(i=s.next,a=_u,u=ku,rs.after(r)):(i=s.prev,a=ku,u=_u,rs.before(r)),d=o(f)
do{if(f.isVisible()){var m=o(f)
if(!u(m,d)){0<c.length&&a(m,pe(c))&&l++
var g=Su(m)
if(g.position=f,g.line=l,n(g))return c
c.push(g)}}}while(f=i(f))
return c}(t,e.getBody(),my(1),c),h=yy(H(p,gy(1)),f)
if(h)return wy(e,h.position.toRange(),!1)
if(h=pe(H(p,gy(0))))return wy(e,h.position.toRange(),!1)}return 0===l.length?ix(e,s).filter(s?o:r).map((function(t){return Gv(e,t.toRange(),!1)})):ve.none()}function Ny(e,t,n){return ix(e,t).filter(n).exists((function(t){return e.selection.setRng(t.toRange()),!0}))}function ky(e,t){var n=e.dom.createRng()
n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)}function _y(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")}function Ay(e,t,n){return gb(t,n).map((function(t){return ky(e,t),n}))}function Ry(e,t,n){return!!Ts(e)&&(o=t,i=n,a=(r=e).getBody(),u=rs.fromRangeStart(r.selection.getRng()),Tb(i,N(Rv,r),a,u).bind((function(e){return Ay(r,o,e)})).isSome())
var r,o,i,a,u}function Dy(e,t,n){return!!Ts(t)&&(r=e,i=(o=t).selection.getRng(),a=r?rs.fromRangeEnd(i):rs.fromRangeStart(i),!!S(o.selection.getSel().modify)&&(r&&Ir(a)?Qb(!0,o.selection,a):!(r||!Mr(a))&&Qb(!1,o.selection,a)))
var r,o,i,a}function Ty(e,t,n){if(Ts(e)){var r=ix(e,t).getOrThunk((function(){var n=e.selection.getRng()
return t?rs.fromRangeEnd(n):rs.fromRangeStart(n)}))
return Eb(N(Rv,e),e.getBody(),r).exists((function(t){var r=kb(t)
return gb(n,r).exists((function(t){return ky(e,t),!0}))}))}return!1}function Oy(e,t){return function(n){return gb(t,n).exists((function(t){return ky(e,t),!0}))}}function By(e,t,n,r){var o=e.getBody(),i=N(Rv,e)
e.undoManager.ignore((function(){var a,u,s
e.selection.setRng((a=n,u=r,(s=document.createRange()).setStart(a.container(),a.offset()),s.setEnd(u.container(),u.offset()),s)),e.execCommand("Delete"),Eb(i,o,rs.fromRangeStart(e.selection.getRng())).map(_b).map(Oy(e,t))})),e.nodeChanged()}function Py(e,t,n){if(e.selection.isCollapsed()&&Ts(e)){var r=rs.fromRangeStart(e.selection.getRng())
return i=t,a=n,u=r,s=(o=e).getBody(),c=qs(u.container(),s)||s,l=N(Rv,o),(d=Eb(l,c,u)).bind((function(e){return a?e.fold(f(ve.some(_b(e))),ve.none,f(ve.some(kb(e))),ve.none):e.fold(ve.none,f(ve.some(kb(e))),ve.none,f(ve.some(_b(e))))})).map(Oy(o,i)).getOrThunk((function(){var e=Pc(a,c,u),t=e.bind((function(e){return Eb(l,c,e)}))
return dn(d,t,(function(){return Dv(l,c,u).exists((function(e){return!!dn(Xl(t=e),Yl(t),(function(e,n){var r=Tv(!0,e),o=Tv(!1,n)
return Wl(t,r).forall((function(e){return e.isEqual(o)}))})).getOr(!0)&&(Hm(o,a,Nt.fromDom(e)),!0)
var t}))})).orThunk((function(){return t.bind((function(t){return e.map((function(e){return a?By(o,i,u,e):By(o,i,e,u),!0}))}))})).getOr(!1)}))}var o,i,a,u,s,c,l,d
return!1}function Ly(e){return 1===zt(e)}function Iy(e,t){return!!e.selection.isCollapsed()&&function(e,t){var n,r=Nt.fromDom(e.getBody()),o=Nt.fromDom(e.selection.getStart()),i=H(W(n=cm(o,r),so).fold(f(n),(function(e){return n.slice(0,e)})),Ly)
return ee(i).exists((function(n){var r,o,a,u,s,c,l,f,d,m=rs.fromRangeStart(e.selection.getRng()),g=t,p=m,h=n.dom
return!(!dn(Xl(h),Yl(h),(function(e,t){var n=Tv(!0,e),r=Tv(!1,t),o=Tv(!1,p)
return g?Wl(h,o).exists((function(e){return e.isEqual(r)&&p.isEqual(n)})):Kl(h,o).exists((function(e){return e.isEqual(n)&&p.isEqual(r)}))})).getOr(!0)||Ic((r=n).dom)&&xg(r.dom)||(o=t,u=n,0===(d=M(H(i,N(Rg,a=e)),(function(e){return e.dom}))).length?Hm(a,o,u):(c=u.dom,f=_g(d,(l=Sg(!1)).dom),qt(Nt.fromDom(c),l),Pn(Nt.fromDom(c)),s=rs(f,0),a.selection.setRng(s.toRange())),0))}))}(e,t)}function My(e,t,n){return e._selectionOverrides.hideFakeCaret(),Hm(e,t,Nt.fromDom(n)),!0}function Fy(e,t){return e.selection.isCollapsed()?(i=e,u=(a=t)?Ig:Mg,s=a?tc.Forwards:tc.Backwards,c=Js(s,i.getBody(),i.selection.getRng()),u(c)?My(i,a,c.getNode(!a)):ve.from(Tv(a,c)).filter((function(e){return u(e)&&ec(c,e)})).exists((function(e){return My(i,a,e.getNode(!a))}))):(r=t,o=(n=e).selection.getNode(),!!Gn(o)&&My(n,r,o))
var n,r,o,i,a,u,s,c}function Uy(e){var t=parseInt(e,10)
return isNaN(t)?0:t}function zy(e,t){return(e||"table"===kt(t)?"margin":"padding")+("rtl"===Cn(t,"direction")?"-right":"-left")}function Hy(e){var t,n=sx(e)
return!e.mode.isReadOnly()&&(1<n.length||(t=e,X(n,(function(e){var n=xn(e,zy(ks(t),e)).map(Uy).getOr(0)
return"false"!==t.dom.getContentEditable(e.dom)&&0<n}))))}function jy(e){return lo(e)||fo(e)}function Vy(e,t){var n=e.dom,r=e.selection,o=e.formatter,i=e.getParam("indentation","40px","string"),a=/[a-z%]+$/i.exec(i)[0],u=parseInt(i,10),s=ks(e),c=Cs(e)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||""!==c||n.getParent(r.getNode(),n.isBlock)||o.apply("div"),F(sx(e),(function(e){var r,o=n,i=t,c=u,l=a,f=e.dom,d=zy(s,Nt.fromDom(f))
"outdent"===i?(r=Math.max(0,Uy(f.style[d])-c),o.setStyle(f,d,r?r+l:"")):(r=Uy(f.style[d])+c+l,o.setStyle(f,d,r))}))}function qy(e,t){if(e.selection.isCollapsed()&&Hy(e)){var n=e.dom,r=e.selection.getRng(),o=rs.fromRangeStart(r),i=n.getParent(r.startContainer,n.isBlock)
if(null!==i&&jg(Nt.fromDom(i),o))return Vy(e,"outdent"),!0}return!1}function $y(e,t){e.getDoc().execCommand(t,!1,null)}function Wy(e){return void 0===e.touches||1!==e.touches.length?ve.none():ve.some(e.touches[0])}function Ky(e,t){return Ne(e,t.nodeName)}function Xy(e){var t,n,r,o=e.dom,i=e.selection,a=e.schema,u=a.getBlockElements(),s=i.getStart(),c=e.getBody(),l=Cs(e)
if(s&&Un(s)&&l){var f=c.nodeName.toLowerCase()
if(a.isValidChild(f,l.toLowerCase())&&(d=u,m=c,g=s,!I(sm(Nt.fromDom(g),Nt.fromDom(m)),(function(e){return Ky(d,e.dom)})))){var d,m,g,p,h,v=i.getRng(),b=v.startContainer,y=v.startOffset,C=v.endContainer,x=v.endOffset,w=ld(e)
for(s=c.firstChild;s;)p=u,Hn(h=s)||Un(h)&&!Ky(p,h)&&!$c(h)?function(e,t){if(Hn(t)){if(0===t.nodeValue.length)return 1
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||Ky(e,t.nextSibling)))return 1}}(u,s)?(s=(n=s).nextSibling,o.remove(n)):(t||(t=o.create(l,xs(e)),s.parentNode.insertBefore(t,s),r=!0),s=(n=s).nextSibling,t.appendChild(n)):(t=null,s=s.nextSibling)
r&&w&&(v.setStart(b,y),v.setEnd(C,x),i.setRng(v),e.nodeChanged())}}}function Yy(e,t){t.hasAttribute("data-mce-caret")&&(Fr(t),e.selection.setRng(e.selection.getRng()),e.selection.scrollIntoView(t))}function Gy(e,t){var n=hr(Nt.fromDom(e.getBody()),"*[data-mce-caret]").map((function(e){return e.dom})).getOrNull()
if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void Yy(e,n)):void(Lr(n)&&(Yy(e,n),e.undoManager.add()))}function Jy(e,t,n){var r,o,i,a=Dc(e.getBody()),u=N(Zs,1===t?a.next:a.prev)
!n.collapsed||""===Cs(e)||(r=e.dom.getParent(n.startContainer,"PRE"))&&(u(rs.fromRangeStart(n))||(i=e.dom.create(Cs(e)),(!xt.ie||11<=xt.ie)&&(i.innerHTML='<br data-mce-bogus="1">'),o=i,1===t?e.$(r).after(o):e.$(r).before(o),e.selection.select(o,!0),e.selection.collapse()))}function Qy(e,t){return n=e,r=t?tc.Forwards:tc.Backwards,o=n.selection.getRng(),Sy(n,r,o,zg,Hg,cx).orThunk((function(){return Jy(n,r,o),ve.none()})).exists((function(t){return xy(e,t),!0}))
var n,r,o}function Zy(e,t){return r=t?1:-1,o=(n=e).selection.getRng(),Ey(n,r,o,(function(e){return zg(e)||Fg(e)}),(function(e){return Hg(e)||Ug(e)}),cx).orThunk((function(){return Jy(n,r,o),ve.none()})).exists((function(t){return xy(e,t),!0}))
var n,r,o}function eC(e,t){return Ny(e,t,t?Hg:zg)}function tC(e){return L(["figcaption"],kt(e))}function nC(e){var t=document.createRange()
return t.setStartBefore(e.dom),t.setEndBefore(e.dom),t}function rC(e,t,n){(n?Bn:Wt)(e,t)}function oC(e,t){return!!e.selection.isCollapsed()&&function(e,t){var n=Nt.fromDom(e.getBody()),r=rs.fromRangeStart(e.selection.getRng()),o=Cs(e),i=xs(e),a=r,u=N(je,n)
return gr(Nt.fromDom(a.container()),so,u).filter(tC).exists((function(){if(b=n,y=r,t?(x=b.dom,cy(x,y).breakAt.isNone()):(C=b.dom,sy(C,y).breakAt.isNone())){var a=(u=n,c=i,l=t,""===(s=o)?(h=l,rC(u,v=Nt.fromTag("br"),h),nC(v)):(f=u,d=l,m=c,g=Nt.fromTag(s),p=Nt.fromTag("br"),hn(g,m),Bn(g,p),rC(f,g,d),nC(p)))
return e.selection.setRng(a),!0}var u,s,c,l,f,d,m,g,p,h,v,b,y,C,x
return!1}))}(e,t)}function iC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){return e.apply(null,t)}}function aC(e,t){return $((n=t,K(M(e,(function(e){return _e({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:s},e)})),(function(e){return n.keyCode===e.keyCode&&n.shiftKey===e.shiftKey&&n.altKey===e.altKey&&n.ctrlKey===e.ctrlKey&&n.metaKey===e.metaKey?[e]:[]}))),(function(e){return e.action()}))
var n}function uC(e,t){var n=t?tc.Forwards:tc.Backwards,r=e.selection.getRng()
return Sy(e,n,r,Ig,Mg,Gn).exists((function(t){return xy(e,t),!0}))}function sC(e,t){var n=t?1:-1,r=e.selection.getRng()
return Ey(e,n,r,Ig,Mg,Gn).exists((function(t){return xy(e,t),!0}))}function cC(e,t){return Ny(e,t,t?Mg:Ig)}function lC(e,t,n,r,o){var i,a=gu(Nt.fromDom(n),"td,th,caption").map((function(e){return e.dom})),u=H((i=e,K(a,(function(e){var t,n={left:(t=Su(e.getBoundingClientRect())).left- -1,top:t.top- -1,right:t.right+-2,bottom:t.bottom+-2,width:t.width+-1,height:t.height+-1}
return[{x:n.left,y:i(n),cell:e},{x:n.right,y:i(n),cell:e}]}))),(function(e){return t(e,o)})),s=r,c=o
return V(u,(function(e,t){return e.fold((function(){return ve.some(t)}),(function(e){var n=Math.sqrt(Math.abs(e.x-s)+Math.abs(e.y-c)),r=Math.sqrt(Math.abs(t.x-s)+Math.abs(t.y-c))
return ve.some(r<n?t:e)}))}),ve.none()).map((function(e){return e.cell}))}function fC(e,t,n){var r,o,i=e(t,n)
return i.breakType===Bb.Wrap&&0===i.positions.length||!$n(n.getNode())&&i.breakType===Bb.Br&&1===i.positions.length?(r=e,o=t,!i.breakAt.exists((function(e){return r(o,e).breakAt.isSome()}))):i.breakAt.isNone()}function dC(e,t,n,r){var o,i,a,u=e.selection.getRng(),s=t?1:-1
return!(!zs()||(o=t,i=n,a=rs.fromRangeStart(u),!Lc(!o,i).exists((function(e){return e.isEqual(a)})))||(Kv(s,e,n,!t,!1).each((function(t){xy(e,t)})),0))}function mC(e,t,n){var r,o,i=(r=!!t,o=n.getNode(r),Un(o)&&"TABLE"===o.nodeName?ve.some(o):ve.none()),a=!1===t
i.fold((function(){return xy(e,n.toRange())}),(function(r){return Lc(a,e.getBody()).filter((function(e){return e.isEqual(n)})).fold((function(){return xy(e,n.toRange())}),(function(o){var i,a,u=t,s=r,c=n;(a=Cs(i=e))?i.undoManager.transact((function(){var e=Nt.fromTag(a)
hn(e,xs(i)),Bn(e,Nt.fromTag("br")),(u?$t:qt)(Nt.fromDom(s),e)
var t=i.dom.createRng()
t.setStart(e.dom,0),t.setEnd(e.dom,0),xy(i,t)})):xy(i,c.toRange())}))}))}function gC(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,g=e.selection.getRng(),p=rs.fromRangeStart(g),h=e.getBody()
if(t||!dx(r,p))return!(!t||!mx(r,p)||(o=h,d=i=n,mC(e,t,v=ee((m=a=p).getClientRects()).bind((function(e){return fx(d,e.left,e.top)})).bind((function(e){return ry(Xl(t=e).map((function(e){return[e].concat(cy(t,e).positions)})).getOr([]),m)
var t})).orThunk((function(){return Z(a.getClientRects()).bind((function(e){return ny(fy(o,rs.after(i)),e.left)}))})).getOr(rs.after(i))),0))
var v=(u=h,l=s=n,Z((f=c=p).getClientRects()).bind((function(e){return lx(l,e.left,e.top)})).bind((function(e){return ry(Yl(t=e).map((function(e){return sy(t,e).positions.concat(e)})).getOr([]),f)
var t})).orThunk((function(){return Z(c.getClientRects()).bind((function(e){return ny(ly(u,rs.before(s)),e.left)}))})).getOr(rs.before(s)))
return mC(e,t,v),!0}function pC(e,t,n){return ve.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((function(r){return ve.from(e.dom.getParent(r,"table")).map((function(o){return n(e,t,o,r)}))})).getOr(!1)}function hC(e,t){return pC(e,t,dC)}function vC(e,t){return pC(e,t,gC)}function bC(e,t){var n,r,o=t,i=e.dom,a=e.schema.getMoveCaretBeforeOnEnterElements()
if(t){!/^(LI|DT|DD)$/.test(t.nodeName)||(r=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}(t.firstChild))&&/^(UL|OL|DL)$/.test(r.nodeName)&&t.insertBefore(i.doc.createTextNode(vo),t.firstChild)
var u=i.createRng()
if(t.normalize(),t.hasChildNodes()){for(var s=new _r(t,t);n=s.current();){if(Hn(n)){u.setStart(n,0),u.setEnd(n,0)
break}if(a[n.nodeName.toLowerCase()]){u.setStartBefore(n),u.setEndBefore(n)
break}o=n,n=s.next()}n||(u.setStart(o,0),u.setEnd(o,0))}else $n(t)?t.nextSibling&&i.isBlock(t.nextSibling)?(u.setStartBefore(t),u.setEndBefore(t)):(u.setStartAfter(t),u.setEndAfter(t)):(u.setStart(t,0),u.setEnd(t,0))
e.selection.setRng(u),Kf(e,u)}}function yC(e){return ve.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))}function CC(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t}function xC(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)}function wC(e){var t=e.parentNode
return/^(LI|DT|DD)$/.test(t.nodeName)?t:e}function SC(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!Un(r);)r=r[n?"nextSibling":"previousSibling"]
return r===t}function EC(e){e.innerHTML='<br data-mce-bogus="1">'}function NC(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t}function kC(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)}function _C(e,t,n){return!1===Hn(t)?n:e?1===n&&t.data.charAt(n-1)===bo?0:n:n===t.data.length-1&&t.data.charAt(n)===bo?t.data.length:n}function AC(e,t){for(var n,r=e.getRoot(),o=t;o!==r&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(n=o),o=o.parentNode
return o!==r?n:r}function RC(e,t){var n=Cs(e)
n&&n.toLowerCase()===t.tagName.toLowerCase()&&function(e,t,n){var r=e.dom
ve.from(n.style).map(r.parseStyle).each((function(e){var n=wn(Nt.fromDom(t)),o=_e(_e({},n),e)
r.setStyles(t,o)})),dn(ve.from(n.class).map((function(e){return e.split(/\s+/)})),ve.from(t.className).map((function(e){return H(e.split(/\s+/),(function(e){return""!==e}))})),(function(e,n){var o=H(n,(function(t){return!L(e,t)})),i=Ae(Ae([],e,!0),o,!0)
r.setAttrib(t,"class",i.join(" "))}))
var o=["style","class"],i=ae(n,(function(e,t){return!L(o,t)}))
r.setAttribs(t,i)}(e,t,xs(e))}function DC(e,t,n){var r=e.dom.createRng()
n?(r.setStartBefore(t),r.setEndBefore(t)):(r.setStartAfter(t),r.setEndAfter(t)),e.selection.setRng(r),Kf(e,r)}function TC(e,t){var n=Nt.fromTag("br")
qt(Nt.fromDom(t),n),e.undoManager.add()}function OC(e,t){gx(e.getBody(),t)||$t(Nt.fromDom(t),Nt.fromTag("br"))
var n=Nt.fromTag("br")
$t(Nt.fromDom(t),n),DC(e,n.dom,!1),e.undoManager.add()}function BC(e){return e&&"A"===e.nodeName&&"href"in e}function PC(e){return e.fold(D,BC,BC,D)}function LC(e,t){t.fold(s,N(TC,e),N(OC,e),s)}function IC(e,t){var n,r,o,i=(r=N(Rv,n=e),o=rs.fromRangeStart(n.selection.getRng()),Eb(r,n.getBody(),o).filter(PC))
i.isSome()?i.each(N(LC,e)):function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng()
Sf(i,a).each((function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)}))
var u,s=a.startOffset,c=a.startContainer
1===c.nodeType&&c.hasChildNodes()&&(u=s>c.childNodes.length-1,c=c.childNodes[Math.min(s,c.childNodes.length-1)]||c,s=u&&3===c.nodeType?c.nodeValue.length:0)
var l=i.getParent(c,i.isBlock),f=l?i.getParent(l.parentNode,i.isBlock):null,d=f?f.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey)
"LI"!==d||m||(l=f),c&&3===c.nodeType&&s>=c.nodeValue.length&&!function(e){for(var t,n=new _r(c,l),r=e.getNonEmptyElements();t=n.next();)if(r[t.nodeName.toLowerCase()]||0<t.length)return 1}(e.schema)&&(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0),n=i.create("br"),is(i,a,n),DC(e,n,r),e.undoManager.add()}(e,t)}function MC(e,t){return yC(e).filter((function(e){return 0<t.length&&ze(Nt.fromDom(e),t)})).isSome()}function FC(e,t){return MC(e,e.getParam("no_newline_selector",""))}function UC(e){return function(t,n){return""===Cs(t)===e}}function zC(e){return function(t,n){return yC(t).filter((function(e){return fo(Nt.fromDom(e))})).isSome()===e}}function HC(e,t){return function(n,r){return yC(n).fold(f(""),(function(e){return e.nodeName.toUpperCase()}))===e.toUpperCase()===t}}function jC(e){return HC("pre",e)}function VC(e){return function(t,n){return t.getParam("br_in_pre",!0)===e}}function qC(e,t){return MC(e,e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption"))}function $C(e,t){return t}function WC(e){var t=Cs(e),n=function(e,t){for(var n,r=e.getRoot(),o=t;o!==r&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(n=o),o=o.parentNode
return o!==r?n:r}(e.dom,e.selection.getStart())
return n&&e.schema.isValidChild(n.nodeName,t||"P")}function KC(e,t){return function(n,r){return V(e,(function(e,t){return e&&t(n,r)}),!0)?ve.some(t):ve.none()}}function XC(e,t){var n,r
n=e,r=t,pb([KC([FC],px.none()),KC([HC("summary",!0)],px.br()),KC([jC(!0),VC(!1),$C],px.br()),KC([jC(!0),VC(!1)],px.block()),KC([jC(!0),VC(!0),$C],px.block()),KC([jC(!0),VC(!0)],px.br()),KC([zC(!0),$C],px.br()),KC([zC(!0)],px.block()),KC([UC(!0),$C,WC],px.block()),KC([UC(!0)],px.br()),KC([qC],px.br()),KC([UC(!1),$C],px.br()),KC([WC],px.block())],[n,!(!r||!r.shiftKey)]).getOr(px.none()).fold((function(){IC(e,t)}),(function(){(function(e,t){function n(t){var n,r=m,o=l.getTextInlineElements(),i=t||"TABLE"===C||"HR"===C?c.create(t||p):b.cloneNode(!1),a=i
if(!1===e.getParam("keep_styles",!0))c.setAttrib(i,"style",null),c.setAttrib(i,"class",null)
else for(;o[r.nodeName]&&(Ic(r)||$c(r)||(n=r.cloneNode(!1),c.setAttrib(n,"id",""),i.hasChildNodes()?n.appendChild(i.firstChild):a=n,i.appendChild(n))),(r=r.parentNode)&&r!==U;);return RC(e,i),EC(a),i}function r(e){var t,n,r=_C(e,m,g)
if(!Hn(m)||!(e?0<r:r<m.nodeValue.length)){if(m.parentNode===b&&s&&!e)return 1
if(e&&Un(m)&&m===b.firstChild)return 1
if(NC(m,"TABLE")||NC(m,"HR"))return s&&!e||!s&&e
var o=new _r(m,b)
for(Hn(m)&&(e&&0===r?o.prev():e||r!==m.nodeValue.length||o.next());t=o.current();){if(Un(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),f[n]&&"br"!==n))return}else if(Hn(t)&&!jr(t.nodeValue))return
e?o.prev():o.next()}return 1}}function o(){a=/^(H[1-6]|PRE|FIGURE)$/.test(C)&&"HGROUP"!==x?n(p):n(),e.getParam("end_container_on_empty_block",!1)&&kC(c,y)&&c.isEmpty(b)?a=c.split(y,b):c.insertAfter(a,b),bC(e,a)}var i,a,u,s,c=e.dom,l=e.schema,f=l.getNonEmptyElements(),d=e.selection.getRng()
Sf(c,d).each((function(e){d.setStart(e.startContainer,e.startOffset),d.setEnd(e.endContainer,e.endOffset)}))
var m=d.startContainer,g=d.startOffset,p=Cs(e),h=!(!t||!t.shiftKey),v=!(!t||!t.ctrlKey)
Un(m)&&m.hasChildNodes()&&(s=g>m.childNodes.length-1,m=m.childNodes[Math.min(g,m.childNodes.length-1)]||m,g=s&&Hn(m)?m.nodeValue.length:0)
var b,y,C,x,w,S,E,N,k,_,A,R,D,T,O,B,P,L,I,M,U=AC(c,m)
U&&((p&&!h||!p&&h)&&(m=function(e,t,n,r){var o,i,a,u,s,c,l=p||"P",f=e.dom,d=AC(f,n),m=f.getParent(n,f.isBlock)
if(!m||!kC(f,m)){if(s=((m=m||d)===e.getBody()||(c=m)&&/^(TD|TH|CAPTION)$/.test(c.nodeName)?m:m.parentNode).nodeName.toLowerCase(),!m.hasChildNodes())return RC(e,o=f.create(l)),m.appendChild(o),t.setStart(o,0),t.setEnd(o,0),o
for(a=n;a.parentNode!==m;)a=a.parentNode
for(;a&&!f.isBlock(a);)a=(i=a).previousSibling
if(i&&e.schema.isValidChild(s,l.toLowerCase())){for(RC(e,o=f.create(l)),i.parentNode.insertBefore(o,i),a=i;a&&!f.isBlock(a);)u=a.nextSibling,o.appendChild(a),a=u
t.setStart(n,r),t.setEnd(n,r)}}return n}(e,d,m,g)),y=(b=c.getParent(m,c.isBlock))?c.getParent(b.parentNode,c.isBlock):null,C=b?b.nodeName.toUpperCase():"","LI"!==(x=y?y.nodeName.toUpperCase():"")||v||(y=(b=y).parentNode,C=x),/^(LI|DT|DD)$/.test(C)&&c.isEmpty(b)?(N=n,k=y,_=b,A=p,I=(E=e).dom,M=E.selection.getRng(),k!==E.getBody()&&(D=(A=xC(R=k)&&xC(R.parentNode)?"LI":A)?N(A):I.create("BR"),SC(k,_,!0)&&SC(k,_,!1)?CC(k,"LI")?(T=wC(k),I.insertAfter(D,T),(null===(L=(P=k).parentNode)||void 0===L?void 0:L.firstChild)===P?I.remove(T):I.remove(k)):I.replace(D,k):(SC(k,_,!0)?CC(k,"LI")?(I.insertAfter(D,wC(k)),D.appendChild(I.doc.createTextNode(" ")),D.appendChild(k)):k.parentNode.insertBefore(D,k):SC(k,_,!1)?I.insertAfter(D,wC(k)):(k=wC(k),(O=M.cloneRange()).setStartAfter(_),O.setEndAfter(k),B=O.extractContents(),"LI"===A&&B.firstChild&&"LI"===B.firstChild.nodeName?(D=B.firstChild,I.insertAfter(B,k)):(I.insertAfter(B,k),I.insertAfter(D,k))),I.remove(_)),bC(E,D))):p&&b===e.getBody()||(p=p||"P",Or(b)?(a=Fr(b),c.isEmpty(b)&&EC(b),RC(e,a),bC(e,a)):r()?o():r(!0)?(a=b.parentNode.insertBefore(n(),b),bC(e,NC(b,"HR")?a:b)):((S=(w=d).cloneRange()).setStart(w.startContainer,_C(!0,w.startContainer,w.startOffset)),S.setEnd(w.endContainer,_C(!1,w.endContainer,w.endOffset)),(i=S.cloneRange()).setEndAfter(b),u=i.extractContents(),F(Fu(Nt.fromDom(u),kn),(function(e){var t=e.dom
t.nodeValue=Co(t.nodeValue)})),function(e){for(;Hn(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;);}(u),a=u.firstChild,c.insertAfter(u,b),function(e,t){var n,r,o=a,i=[]
if(o){for(;o=o.firstChild;){if(e.isBlock(o))return
Un(o)&&!t[o.nodeName.toLowerCase()]&&i.push(o)}for(n=i.length;n--;)(!(o=i[n]).hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue||(r=o)&&"A"===r.nodeName&&e.isEmpty(r))&&e.remove(o)}}(c,f),function(e,t){t.normalize()
var n=t.lastChild
n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")}(c,b),c.isEmpty(b)&&EC(b),a.normalize(),c.isEmpty(a)?(c.remove(a),o()):(RC(e,a),bC(e,a))),c.setAttrib(a,"id",""),e.fire("NewBlock",{newBlock:a})))})(e,t)}),s)}function YC(e){return e.stopImmediatePropagation()}function GC(e){return e.keyCode===_f.PAGE_UP||e.keyCode===_f.PAGE_DOWN}function JC(e,t,n){n&&!e.get()?t.on("NodeChange",YC,!0):!n&&e.get()&&t.off("NodeChange",YC),e.set(n)}function QC(e,t){var n=t.container(),r=t.offset()
return Hn(n)?(n.insertData(r,e),ve.some(rs(n,r+e.length))):Qs(t).map((function(n){var r=Nt.fromText(e)
return(t.isAtEnd()?$t:qt)(n,r),rs(r.dom,e.length)}))}function ZC(e){var t,n,r=rs.fromRangeStart(e.selection.getRng()),o=Nt.fromDom(e.getBody())
if(e.selection.isCollapsed()){var i=N(Rv,e),a=rs.fromRangeStart(e.selection.getRng())
return Eb(i,e.getBody(),a).bind((n=o,function(e){return e.fold((function(e){return Kl(n.dom,rs.before(e))}),(function(e){return Xl(e)}),(function(e){return Yl(e)}),(function(e){return Wl(n.dom,rs.after(e))}))})).bind(function(e,t){return function(n){return i=e,(!wm(a=n)&&(o=a,Kl((r=i).dom,o).isNone()||Wl(r.dom,o).isNone()||jg(r,o)||Vg(r,o)||vm(r,o)||hm(r,o)||Cm(i,a)||xm(i,a))?bx:yx)(t)
var r,o,i,a}}(o,r)).exists((t=e,function(e){return t.selection.setRng(e.toRange()),t.nodeChanged(),!0}))}return!1}function ex(e){var t,n,r,o,i,a,u,s,c,l,f,d,m,g,p=function(e){var t=tu(null),n=N(Rv,e)
return e.on("NodeChange",(function(r){var o,i,a,u,s,c,l,f,d,m,g,p,h
!Ts(e)||xt.browser.isIE()&&r.initial||(s=n,c=e.dom,l=r.parents,F(G(f=H(M(gu(Nt.fromDom(c.getRoot()),'*[data-mce-selected="inline-boundary"]'),(function(e){return e.dom})),s),d=H(l,s)),N(_y,!1)),F(G(d,f),N(_y,!0)),g=t,(m=e).selection.isCollapsed()&&!0!==m.composing&&g.get()&&(p=rs.fromRangeStart(m.selection.getRng()),rs.isTextPosition(p)&&!1===(Ir(h=p)||Mr(h))&&(ky(m,Fs(g.get(),p)),g.set(null))),o=n,i=e,a=t,u=r.parents,i.selection.isCollapsed()&&F(H(u,o),(function(e){var t=rs.fromRangeStart(i.selection.getRng())
Eb(o,i.getBody(),t).bind((function(e){return Ay(i,a,e)}))})))})),t}(e)
return e.on("keyup compositionstart",N(Gy,e)),g=p,(m=e).on("keydown",(function(e){var t,n,r,o
!1===e.isDefaultPrevented()&&(t=m,n=g,r=e,o=dt().os,aC([{keyCode:_f.RIGHT,action:iC(Qy,t,!0)},{keyCode:_f.LEFT,action:iC(Qy,t,!1)},{keyCode:_f.UP,action:iC(Zy,t,!1)},{keyCode:_f.DOWN,action:iC(Zy,t,!0)},{keyCode:_f.RIGHT,action:iC(hC,t,!0)},{keyCode:_f.LEFT,action:iC(hC,t,!1)},{keyCode:_f.UP,action:iC(vC,t,!1)},{keyCode:_f.DOWN,action:iC(vC,t,!0)},{keyCode:_f.RIGHT,action:iC(uC,t,!0)},{keyCode:_f.LEFT,action:iC(uC,t,!1)},{keyCode:_f.UP,action:iC(sC,t,!1)},{keyCode:_f.DOWN,action:iC(sC,t,!0)},{keyCode:_f.RIGHT,action:iC(Ry,t,n,!0)},{keyCode:_f.LEFT,action:iC(Ry,t,n,!1)},{keyCode:_f.RIGHT,ctrlKey:!o.isOSX(),altKey:o.isOSX(),action:iC(ax,t,n)},{keyCode:_f.LEFT,ctrlKey:!o.isOSX(),altKey:o.isOSX(),action:iC(ux,t,n)},{keyCode:_f.UP,action:iC(oC,t,!1)},{keyCode:_f.DOWN,action:iC(oC,t,!0)}],r).each((function(e){r.preventDefault()})))})),d=p,(f=e).on("keydown",(function(e){var t,n,r
!1===e.isDefaultPrevented()&&(n=d,r=e,aC([{keyCode:_f.BACKSPACE,action:iC(qy,t=f,!1)},{keyCode:_f.BACKSPACE,action:iC(ab,t,!1)},{keyCode:_f.DELETE,action:iC(ab,t,!0)},{keyCode:_f.BACKSPACE,action:iC(eb,t,!1)},{keyCode:_f.DELETE,action:iC(eb,t,!0)},{keyCode:_f.BACKSPACE,action:iC(Py,t,n,!1)},{keyCode:_f.DELETE,action:iC(Py,t,n,!0)},{keyCode:_f.BACKSPACE,action:iC(ag,t,!1)},{keyCode:_f.DELETE,action:iC(ag,t,!0)},{keyCode:_f.BACKSPACE,action:iC(ub,t,!1)},{keyCode:_f.DELETE,action:iC(ub,t,!0)},{keyCode:_f.BACKSPACE,action:iC(Fy,t,!1)},{keyCode:_f.DELETE,action:iC(Fy,t,!0)},{keyCode:_f.BACKSPACE,action:iC(Wv,t,!1)},{keyCode:_f.DELETE,action:iC(Wv,t,!0)},{keyCode:_f.BACKSPACE,action:iC(qv,t,!1)},{keyCode:_f.DELETE,action:iC(qv,t,!0)},{keyCode:_f.BACKSPACE,action:iC(Iy,t,!1)},{keyCode:_f.DELETE,action:iC(Iy,t,!0)}],r).each((function(e){r.preventDefault()})))})),f.on("keyup",(function(e){var t,n
!1===e.isDefaultPrevented()&&(n=e,aC([{keyCode:_f.BACKSPACE,action:iC(ib,t=f)},{keyCode:_f.DELETE,action:iC(ib,t)}],n))})),(l=e).on("keydown",(function(e){var t,n,r
e.keyCode===_f.ENTER&&(t=l,(n=e).isDefaultPrevented()||(n.preventDefault(),(r=t.undoManager).typing&&(r.typing=!1,r.add()),t.undoManager.transact((function(){!1===t.selection.isCollapsed()&&t.execCommand("Delete"),XC(t,n)}))))})),(c=e).on("keydown",(function(e){var t
!1===e.isDefaultPrevented()&&(t=e,aC([{keyCode:_f.SPACEBAR,action:iC(ZC,c)}],t).each((function(e){t.preventDefault()})))})),u=a=e,s=su((function(){u.composing||Am(u)}),0),hx.isIE()&&(u.on("keypress",(function(e){s.throttle()})),u.on("remove",(function(e){s.cancel()}))),a.on("input",(function(e){!1===e.isComposing&&Am(a)})),i=p,(o=e).on("keydown",(function(e){var t,n,r
!1===e.isDefaultPrevented()&&(n=i,r=e,aC([{keyCode:_f.END,action:iC(eC,t=o,!0)},{keyCode:_f.HOME,action:iC(eC,t,!1)},{keyCode:_f.END,action:iC(cC,t,!0)},{keyCode:_f.HOME,action:iC(cC,t,!1)},{keyCode:_f.END,action:iC(Ty,t,!0,n)},{keyCode:_f.HOME,action:iC(Ty,t,!1,n)}],r).each((function(e){r.preventDefault()})))})),t=e,n=p,vx.os.isOSX()||(r=tu(!1),t.on("keydown",(function(e){GC(e)&&JC(r,t,!0)})),t.on("keyup",(function(e){var o,i,a
!1===e.isDefaultPrevented()&&(a=e,aC([{keyCode:_f.PAGE_UP,action:iC(Ty,o=t,!1,i=n)},{keyCode:_f.PAGE_DOWN,action:iC(Ty,o,!0,i)}],a)),GC(e)&&r.get()&&(JC(r,t,!1),t.nodeChanged())}))),p}(uy=ay=ay||{})[uy.Up=-1]="Up",uy[uy.Down=1]="Down"
var tx=N(dy,ay.Up,ku,_u),nx=N(dy,ay.Down,_u,ku),rx=Xn,ox=Vs,ix=function(e,t){var n=e.selection.getRng(),r=e.getBody()
if(t){var o=rs.fromRangeEnd(n),i=cy(r,o)
return ee(i.positions)}return o=rs.fromRangeStart(n),Z((i=sy(r,o)).positions)},ax=N(Dy,!0),ux=N(Dy,!1),sx=function(e){return H(M(e.selection.getSelectedBlocks(),Nt.fromDom),(function(e){return!jy(e)&&!Ot(e).exists(jy)&&gr(e,(function(e){return Kn(e.dom)||Xn(e.dom)})).exists((function(e){return Kn(e.dom)}))}))},cx=Xn,lx=N(lC,(function(e){return e.bottom}),(function(e,t){return e.y<t})),fx=N(lC,(function(e){return e.top}),(function(e,t){return e.y>t})),dx=N(fC,sy),mx=N(fC,cy),gx=function(e,t){return n=rs.after(t),!!$n(n.getNode())||Wl(e,rs.after(t)).map((function(e){return $n(e.getNode())})).getOr(!1)
var n},px=rr([{br:[]},{block:[]},{none:[]}]),hx=dt().browser,vx=dt(),bx=N(QC,vo),yx=N(QC," "),Cx=(xx.prototype.nodeChanged=function(e){var t,n,r,o=this.editor.selection
this.editor.initialized&&o&&!this.editor.getParam("disable_nodechange")&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),(t=o.getStart(!0)||r).ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(t,r)||(t=r),n=[],this.editor.dom.getParent(t,(function(e){return e===r||void n.push(e)})),(e=e||{}).element=t,e.parents=n,this.editor.fire("NodeChange",e))},xx.prototype.isSameElementPath=function(e){var t,n=this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)
if(n.length===this.lastPath.length){for(t=n.length;0<=t&&n[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=n,!0}return this.lastPath=n,!1},xx)
function xx(e){var t
this.lastPath=[],this.editor=e
var n=this
"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(function(n){var r=e.selection.getRng(),o={startContainer:r.startContainer,startOffset:r.startOffset,endContainer:r.endContainer,endOffset:r.endOffset}
"nodechange"!==n.type&&vf(o,t)||e.fire("SelectionChange"),t=o})),e.on("contextmenu",(function(){e.fire("SelectionChange")})),e.on("SelectionChange",(function(){var t=e.selection.getStart(!0)
!t||!xt.range&&e.selection.isCollapsed()||_l(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(function(t){!t.isDefaultPrevented()&&_l(e)&&("IMG"===e.selection.getNode().nodeName?Nr.setEditorTimeout(e,(function(){e.nodeChanged()})):e.nodeChanged())}))}function wx(e){return Un(e)&&co(Nt.fromDom(e))}function Sx(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView
return{top:t.top+o.pageYOffset-r.clientTop,left:t.left+o.pageXOffset-r.clientLeft}}function Ex(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Nx(e){var t,n,r,o,i,a,u=uu(),s=Ya.DOM,c=document,l=function(e,t){var n=Nr.throttle((function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0)
return t.on("remove",n.stop),function(r){return e.on((function(e){var o,i,a,u,s,c,l,f,d,m,g,p,h,v,b,y,C,x,w,S,E=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY))
if(!e.dragging&&10<E){if(t.fire("dragstart",{target:e.element}).isDefaultPrevented())return
e.dragging=!0,t.focus()}e.dragging&&(p=e,o={pageX:(b=r,y=(v=t).inline?Sx(v.getBody()):{left:0,top:0},S=(w=v).getBody(),C=w.inline?{left:S.scrollLeft,top:S.scrollTop}:{left:0,top:0},(h={pageX:(x=function(e,t){if(t.target.ownerDocument===e.getDoc())return{left:t.pageX,top:t.pageY}
var n,r,o,i,a,u=Sx(e.getContentAreaContainer()),s=(r=(n=e).getBody(),o=n.getDoc().documentElement,i={left:r.scrollLeft,top:r.scrollTop},a={left:r.scrollLeft||o.scrollLeft,top:r.scrollTop||o.scrollTop},n.inline?i:a)
return{left:t.pageX-u.left+s.left,top:t.pageY-u.top+s.top}}(v,b)).left-y.left+C.left,pageY:x.top-y.top+C.top}).pageX-p.relX),pageY:h.pageY+5},m=e.ghost,g=t.getBody(),m.parentNode!==g&&g.appendChild(m),i=e.ghost,u=e.width,s=e.height,c=e.maxX,l=e.maxY,d=f=0,i.style.left=(a=o).pageX+"px",i.style.top=a.pageY+"px",l<a.pageY+s&&(d=a.pageY+s-l),i.style.width=u-(f=c<a.pageX+u?a.pageX+u-c:f)+"px",i.style.height=s-d+"px",n(r.clientX,r.clientY))}))}}(i=u,a=e),f=(t=r=u,function(){t.on((function(e){e.dragging&&n.fire("dragend")})),$x(t)});(n=o=e).on("mousedown",(function(e){var t,n,r,o,u,s
0===e.button&&(t=$(a.dom.getParents(e.target),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0
return!1}}(Vx,qx)).getOr(null),u=a.getBody(),Vx(s=t)&&s!==u&&(n=a.dom.getPos(t),r=a.getBody(),o=a.getDoc().documentElement,i.set({element:t,dragging:!1,screenX:e.screenX,screenY:e.screenY,maxX:(a.inline?r.scrollWidth:o.offsetWidth)-2,maxY:(a.inline?r.scrollHeight:o.offsetHeight)-2,relX:e.pageX-n.x,relY:e.pageY-n.y,width:t.offsetWidth,height:t.offsetHeight,ghost:function(e,t,n){var r=a.dom,o=e.cloneNode(!0)
r.setStyles(o,{width:t,height:n}),r.setAttrib(o,"data-mce-selected",null)
var i=r.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
return r.setStyles(i,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:t,height:n}),r.setStyles(o,{margin:0,boxSizing:"border-box"}),i.appendChild(o),i}(t,t.offsetWidth,t.offsetHeight)})))})),e.on("mousemove",l),e.on("mouseup",(function(e){r.on((function(t){var n,r,i,a,u,s
t.dragging&&((a=3===(s=(i=o).selection.getSel().getRangeAt(0).startContainer).nodeType?s.parentNode:s)===(u=t.element)||i.dom.isChildOf(a,u)||Vx(a)||((r=t.element.cloneNode(!0)).removeAttribute("data-mce-selected"),n=r,o.fire("drop",{clientX:e.clientX,clientY:e.clientY}).isDefaultPrevented()||o.undoManager.transact((function(){Ex(t.element),o.insertContent(o.dom.getOuterHTML(n)),o._selectionOverrides.hideFakeCaret()}))),o.fire("dragend"))})),$x(r)})),s.bind(c,"mousemove",l),s.bind(c,"mouseup",f),e.on("remove",(function(){s.unbind(c,"mousemove",l),s.unbind(c,"mouseup",f)})),e.on("keydown",(function(e){e.keyCode===_f.ESC&&f()}))}function kx(e,t){return cf(e.getBody(),t)}function _x(e){function t(e){return e!==v&&(Kx(e)||Gn(e))&&p.isChildOf(e,v)}function n(e){return zg(e)||Hg(e)||Ig(e)||Mg(e)}function r(e){e&&g.setRng(e)}function o(t,n,r,o){return void 0===o&&(o=!0),e.fire("ShowCaret",{target:n,direction:t,before:r}).isDefaultPrevented()?null:(o&&g.scrollIntoView(n,-1===t),b.show(r,n))}function i(e){return Pr(e)||So(e)||Eo(e)}function u(e){return i(e.startContainer)||i(e.endContainer)}function s(n,r){if(!n)return null
if(n.collapsed){if(!u(n)){var i=r?1:-1,a=Js(i,v,n),s=a.getNode(!r)
if(Hs(s))return o(i,s,!!r&&!a.isAtEnd(),!1)
var c=a.getNode(r)
if(Hs(c))return o(i,c,!r&&!a.isAtEnd(),!1)}return null}var f=n.startContainer,d=n.startOffset,m=n.endOffset
if(3===f.nodeType&&0===d&&Kx(f.parentNode)&&(f=f.parentNode,d=p.nodeIndex(f),f=f.parentNode),1!==f.nodeType)return null
if(m===d+1&&f===n.endContainer){var h=f.childNodes[d]
if(t(h))return function(t){var n=t.cloneNode(!0),r=e.fire("ObjectSelected",{target:t,targetClone:n})
if(r.isDefaultPrevented())return null
var o=function(t,n,r){var o=e.$,i=hr(Nt.fromDom(e.getBody()),"#"+y).fold((function(){return o([])}),(function(e){return o([e.dom])}))
0===i.length&&(i=o('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",y)).appendTo(e.getBody())
var a=p.createRng()
n===r&&xt.ie?(i.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(n),a.setStartAfter(i[0].firstChild.firstChild),a.setEndAfter(n)):(i.empty().append(vo).append(n).append(vo),a.setStart(i[0].firstChild,1),a.setEnd(i[0].lastChild,0)),i.css({top:p.getPos(t,e.getBody()).y}),i[0].focus()
var u=g.getSel()
return u.removeAllRanges(),u.addRange(a),a}(t,r.targetClone,n),i=Nt.fromDom(t)
return F(gu(Nt.fromDom(e.getBody()),"*[data-mce-selected]"),(function(e){je(i,e)||yn(e,C)})),p.getAttrib(t,C)||t.setAttribute(C,"1"),l=t,w(),o}(h)}return null}function c(){l&&l.removeAttribute(C),hr(Nt.fromDom(e.getBody()),"#"+y).each(Pn),l=null}var l,f,d,m,g=e.selection,p=e.dom,h=p.isBlock,v=e.getBody(),b=function(e,t,n,r){function o(){!function(){for(var e=gu(Nt.fromDom(t),"*[contentEditable=false],video,audio,embed,object"),n=0;n<e.length;n++){var r,o=e[n].dom,i=o.previousSibling
Eo(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(r.length-1,1)),i=o.nextSibling,So(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(0,1))}}(),a&&(mc(a),a=null),u.on((function(e){qa(e.caret).remove(),u.clear()})),i&&(Nr.clearInterval(i),i=void 0)}var i,a,u=uu(),s=Cs(e),c=0<s.length?s:"p"
return{show:function(e,s){var l
if(o(),vc(s))return null
if(!n(s))return a=function(e,t){var n=e.ownerDocument.createTextNode(bo),r=e.parentNode
if(t){if(o=e.previousSibling,wo(o)){if(Pr(o))return o
if(Eo(o))return o.splitText(o.data.length-1)}r.insertBefore(n,e)}else{var o=e.nextSibling
if(wo(o)){if(Pr(o))return o
if(So(o))return o.splitText(1),o}e.nextSibling?r.insertBefore(n,e.nextSibling):r.appendChild(n)}return n}(s,e),l=s.ownerDocument.createRange(),bc(a.nextSibling)?(l.setStart(a,0),l.setEnd(a,0)):(l.setStart(a,1),l.setEnd(a,1)),l
a=function(e,t,n){var r,o=t.ownerDocument.createElement(e)
o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(((r=document.createElement("br")).setAttribute("data-mce-bogus","1"),r))
var i=t.parentNode
return n?i.insertBefore(o,t):t.nextSibling?i.insertBefore(o,t.nextSibling):i.appendChild(o),o}(c,s,e)
var f=Us(t,s,e)
qa(a).css("top",f.top)
var d=qa('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(_e({},f)).appendTo(t)[0]
return u.set({caret:d,element:s,before:e}),e&&qa(d).addClass("mce-visual-caret-before"),i=Nr.setInterval((function(){r()?qa("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden"):qa("div.mce-visual-caret",t).addClass("mce-visual-caret-hidden")}),500),(l=s.ownerDocument.createRange()).setStart(a,0),l.setEnd(a,0),l},hide:o,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){u.on((function(e){var n=Us(t,e.element,e.before)
qa(e.caret).css(_e({},n))}))},destroy:function(){return Nr.clearInterval(i)}}}(e,v,h,(function(){return ld(e)})),y="sel-"+p.uniqueId(),C="data-mce-selected",x=g.getRng,w=function(){b.hide()}
return xt.ceFalse&&!Yp(e)&&(e.on("mouseup",(function(t){var n=x()
n.collapsed&&Lh(e,t.clientX,t.clientY)&&Yv(e,n,!1).each(r)})),e.on("click",(function(t){var n=kx(e,t.target)
n&&(Kx(n)&&(t.preventDefault(),e.focus()),Wx(n)&&p.isChildOf(n,g.getNode())&&c())})),e.on("blur NewBlock",c),e.on("ResizeWindow FullscreenStateChanged",b.reposition),e.on("tap",(function(n){var r=n.target,o=kx(e,r)
Kx(o)?(n.preventDefault(),Xv(e,o).each(s)):t(r)&&Xv(e,r).each(s)}),!0),e.on("mousedown",(function(i){var u,l,f,d,m,b,y,C=i.target
C!==v&&"HTML"!==C.nodeName&&!p.isChildOf(C,v)||!1===Lh(e,i.clientX,i.clientY)||((u=kx(e,C))?Kx(u)?(i.preventDefault(),Xv(e,u).each(s)):(c(),Wx(u)&&i.shiftKey||lf(i.clientX,i.clientY,g.getRng())||(w(),g.placeCaretAt(i.clientX,i.clientY))):t(C)?Xv(e,C).each(s):!1===Hs(C)&&(c(),w(),(l=function(e,t,n){function r(e){return!cn(e.node)&&!Gn(e.node)}var o,i,a,u=iy(H(xe(e.getElementsByTagName("*")),Hs))
return(a=yy(H(u,N(by,n)),t,r))&&(a=yy(function(e,t,n){function r(e,n){var r=H(iy([n]),(function(n){return!e(n,t)}))
return o=o.concat(r),0===r.length}void 0===n&&(n=!0)
var o=[]
return o.push(t),Cy(ay.Up,e,N(r,ku),t.node,n),Cy(ay.Down,e,N(r,_u),t.node,n),o}(e,a,r(a)),t,r))&&Hs(a.node)?{node:(o=a).node,before:py(o,i=t)<hy(o,i)}:null}(v,i.clientX,i.clientY))&&(f=C,d=l.node,b=p.getParent(f,h),y=p.getParent(d,h),!a(b)&&(f!==y&&p.isChildOf(b,y)&&!1===Kx(kx(e,b))||!p.isChildOf(y,b)&&(m=y,p.getParent(b,h)!==p.getParent(m,h))&&function(e){var t=e.firstChild
if(!a(t)){var r=rs.before(t)
if($n(r.getNode())&&1===e.childNodes.length)return!n(r)
var o=Dc(e).next(r)
return o&&!n(o)}}(b))||(i.preventDefault(),r(o(1,l.node,l.before,!1)),e.getBody().focus()))))})),e.on("keypress",(function(e){_f.modifierPressed(e)||Kx(g.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(function(e){var t=e.range
l&&(l.parentNode?((t=t.cloneRange()).selectNode(l),e.range=t):l=null)})),e.on("SetSelectionRange",(function(t){var n,r,o,i,a,u,c
t.range=(n=t.range,r=e.schema.getShortEndedElements(),o=p.createRng(),i=n.startContainer,a=n.startOffset,u=n.endContainer,c=n.endOffset,Ne(r,i.nodeName.toLowerCase())?0===a?o.setStartBefore(i):o.setStartAfter(i):o.setStart(i,a),Ne(r,u.nodeName.toLowerCase())?0===c?o.setEndBefore(u):o.setEndAfter(u):o.setEnd(u,c),o)
var l=s(t.range,t.forward)
l&&(t.range=l)})),e.on("AfterSetSelectionRange",(function(e){var t=e.range,n=t.startContainer.parentNode
u(t)||"mcepastebin"===n.id||w(),p.hasClass(n,"mce-offscreen-selection")||c()})),e.on("copy",(function(e){var t,n,r=e.clipboardData
e.isDefaultPrevented()||!e.clipboardData||xt.ie||(t=(n=p.get(y))&&n.getElementsByTagName("*")[0])&&(e.preventDefault(),r.clearData(),r.setData("text/html",t.outerHTML),r.setData("text/plain",t.outerText||t.innerText))})),function(e){var t,n
function r(e){var t
e.isDefaultPrevented()||(t=e.dataTransfer)&&(L(t.types,"Files")||0<t.files.length)&&(e.preventDefault(),"drop"===e.type&&fv(n,"Dropped file type is not supported"))}function o(e){id(n,e.target)&&r(e)}function i(){var e=Ya.DOM,t=n.dom,i=document,a=n.inline?n.getBody():n.getDoc(),u=["drop","dragover"]
F(u,(function(n){e.bind(i,n,o),t.bind(a,n,r)})),n.on("remove",(function(){F(u,(function(n){e.unbind(i,n,o),t.unbind(a,n,r)}))}))}Nx(e),(t=e).on("drop",(function(e){var n=void 0!==e.clientX?t.getDoc().elementFromPoint(e.clientX,e.clientY):null
!Vx(n)&&"false"!==t.dom.getContentEditableParent(n)||e.preventDefault()})),e.getParam("block_unsupported_drop",!0,"boolean")&&(n=e).on("init",(function(){Nr.setEditorTimeout(n,i,0)}))}(e),d=su((function(){var e,t
f.removed||!f.getBody().contains(document.activeElement)||(e=f.selection.getRng()).collapsed&&(t=Gv(f,e,!1),f.selection.setRng(t))}),0),(f=e).on("focus",(function(){d.throttle()})),f.on("blur",(function(){d.cancel()})),(m=e).on("init",(function(){m.on("focusin",(function(e){var t,n,r=e.target
Gn(r)&&(t=cf(m.getBody(),r),n=Xn(t)?t:r,m.selection.getNode()!==n&&Xv(m,n).each((function(e){return m.selection.setRng(e)})))}))}))),{showCaret:o,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(Fr(e),r(x()),g.scrollIntoView(e))},hideFakeCaret:w,destroy:function(){b.destroy(),l=null}}}function Ax(e){return ae(e,(function(e){return!1===w(e)}))}function Rx(e){var t=e.settings,n=e.editorUpload.blobCache
return Ax({allow_conditional_comments:t.allow_conditional_comments,allow_html_data_urls:t.allow_html_data_urls,allow_svg_data_urls:t.allow_svg_data_urls,allow_html_in_named_anchor:t.allow_html_in_named_anchor,allow_script_urls:t.allow_script_urls,allow_unsafe_link_target:t.allow_unsafe_link_target,convert_fonts_to_spans:t.convert_fonts_to_spans,fix_list_elements:t.fix_list_elements,font_size_legacy_values:t.font_size_legacy_values,forced_root_block:t.forced_root_block,forced_root_block_attrs:t.forced_root_block_attrs,padd_empty_with_br:t.padd_empty_with_br,preserve_cdata:t.preserve_cdata,remove_trailing_brs:t.remove_trailing_brs,inline_styles:t.inline_styles,root_name:e.inline?e.getElement().nodeName.toLowerCase():void 0,validate:!0,blob_cache:n,document:e.getDoc(),images_dataimg_filter:t.images_dataimg_filter})}function Dx(e){return(e.inline?e.ui:e.dom).styleSheetLoader}function Tx(e){function t(){o.unloadAll(a),e.inline||e.ui.styleSheetLoader.unloadAll(i)}function n(){e.removed?t():e.on("remove",t)}var r,o=Dx(e),i=_s(e),a=e.contentCSS
0<e.contentStyles.length&&(r="",Et.each(e.contentStyles,(function(e){r+=e+"\r\n"})),e.dom.addStyle(r))
var u,s,c,l,f,d,m,g,p,h=Er.all((u=e,s=a,c=i,l=[new Er((function(e,t){return Dx(u).loadAll(s,e,t)}))],u.inline?l:l.concat([new Er((function(e,t){return u.ui.styleSheetLoader.loadAll(c,e,t)}))]))).then(n).catch(n)
return e.settings.content_style&&(d=(f=e).settings.content_style,m=Nt.fromDom(f.getBody()),g=jt(On(m)),pn(p=Nt.fromTag("style"),"type","text/css"),Bn(p,Nt.fromText(d)),Bn(g,p),f.on("remove",(function(){Pn(p)}))),h}function Ox(e){var t
!0!==e.removed&&(Yp(t=e)||t.load({initial:!0,format:"html"}),t.startContent=t.getContent({format:"raw"}),function(e){var t,n,r
e.bindPendingEventDelegates(),e.initialized=!0,e.fire("Init"),e.focus(!0),r=(n=e).dom.getRoot(),n.inline||_l(n)&&n.selection.getStart(!0)!==r||Xl(r).each((function(e){var t,r,o,i,a=e.getNode(),u=cn(a)?Xl(a).getOr(e):e
xt.browser.isIE()?(t=n,r=u.toRange(),o=Nt.fromDom(t.getBody()),i=(ed(t)?ve.from(r):ve.none()).map(td).filter(Zf(o)),t.bookmark=i.isSome()?i:t.bookmark):n.selection.setRng(u.toRange())})),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),(t=e).settings.auto_focus&&Nr.setEditorTimeout(t,(function(){var e=!0===t.settings.auto_focus?t:t.editorManager.get(t.settings.auto_focus)
e.destroyed||e.focus()}),100)}(e))}function Bx(e,t){var n=e.settings,r=e.getElement(),o=e.getDoc()
n.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline||(o.open(),o.write(e.iframeHTML),o.close()),e.inline&&(Xx.addClass(r,"mce-content-body"),e.contentDocument=o=document,e.contentWindow=window,e.bodyElement=r,e.contentAreaContainer=r)
var i,a,u,c,l,f,d,m,g,p,h,b=e.getBody()
b.disabled=!0,e.readonly=!!n.readonly,e.readonly||(e.inline&&"static"===Xx.getStyle(b,"position",!0)&&(b.style.position="relative"),b.contentEditable=e.getParam("content_editable_state",!0)),b.disabled=!1,e.editorUpload=Cv(e),e.schema=Zr(n),e.dom=Ya(o,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,hex_colors:n.force_hex_style_colors,update_styles:!0,root_element:e.inline?e.getBody():null,collect:function(){return e.inline},schema:e.schema,contentCssCors:e.getParam("content_css_cors",!1,"boolean"),referrerPolicy:Es(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}}),e.parser=((a=Sh(Rx(i=e),i.schema)).addAttributeFilter("src,href,style,tabindex",(function(e,t){for(var n,r,o=e.length,a=i.dom,u="data-mce-"+t;o--;)(r=(n=e[o]).attr(t))&&!n.attr(u)&&0!==r.indexOf("data:")&&0!==r.indexOf("blob:")&&("style"===t?((r=a.serializeStyle(a.parseStyle(r),n.name)).length||(r=null),n.attr(u,r),n.attr(t,r)):"tabindex"===t?(n.attr(u,r),n.attr(t,null)):n.attr(u,i.convertURL(r,t,n.name)))})),a.addNodeFilter("script",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("type")||"no/type"
0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}})),i.settings.preserve_cdata&&a.addNodeFilter("#cdata",(function(e){for(var t=e.length;t--;){var n=e[t]
n.type=8,n.name="#comment",n.value="[CDATA["+i.dom.encode(n.value)+"]]"}})),a.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(function(e){for(var t=e.length,n=i.schema.getNonEmptyElements();t--;){var r=e[t]
r.isEmpty(n)&&0===r.getAll("br").length&&(r.append(new Od("br",1)).shortEnded=!0)}})),a),e.serializer=Nh((u=e.settings,_e(_e({},Rx(e)),Ax({url_converter:u.url_converter,url_converter_scope:u.url_converter_scope,element_format:u.element_format,entities:u.entities,entity_encoding:u.entity_encoding,indent:u.indent,indent_after:u.indent_after,indent_before:u.indent_before,block_elements:u.block_elements,boolean_attributes:u.boolean_attributes,custom_elements:u.custom_elements,extended_valid_elements:u.extended_valid_elements,invalid_elements:u.invalid_elements,invalid_styles:u.invalid_styles,move_caret_before_on_enter_elements:u.move_caret_before_on_enter_elements,non_empty_elements:u.non_empty_elements,schema:u.schema,self_closing_elements:u.self_closing_elements,short_ended_elements:u.short_ended_elements,special:u.special,text_block_elements:u.text_block_elements,text_inline_elements:u.text_inline_elements,valid_children:u.valid_children,valid_classes:u.valid_classes,valid_elements:u.valid_elements,valid_styles:u.valid_styles,verify_html:u.verify_html,whitespace_elements:u.whitespace_elements}))),e),e.selection=hh(e.dom,e.getWin(),e.serializer,e),e.annotator=Ol(e),e.formatter=Ev(e),e.undoManager=kv(e),e._nodeChangeDispatcher=new Cx(e),e._selectionOverrides=_x(e),m=e,g=uu(),p=tu(!1),h=cu((function(e){m.fire("longpress",_e(_e({},e),{type:"longpress"})),p.set(!0)}),400),m.on("touchstart",(function(e){Wy(e).each((function(t){h.cancel()
var n={x:t.clientX,y:t.clientY,target:e.target}
h.throttle(e),p.set(!1),g.set(n)}))}),!0),m.on("touchmove",(function(e){h.cancel(),Wy(e).each((function(e){g.on((function(t){var n=e,r=t,o=Math.abs(n.clientX-r.x),i=Math.abs(n.clientY-r.y);(5<o||5<i)&&(g.clear(),p.set(!1),m.fire("longpresscancel"))}))}))}),!0),m.on("touchend touchcancel",(function(e){h.cancel(),"touchcancel"!==e.type&&g.get().filter((function(t){return t.target.isEqualNode(e.target)})).each((function(){p.get()?e.preventDefault():m.fire("tap",_e(_e({},e),{type:"tap"}))}))}),!0),(f=l=e).on("click",(function(e){f.dom.getParent(e.target,"details")&&e.preventDefault()})),(d=l).parser.addNodeFilter("details",(function(e){F(e,(function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),d.serializer.addNodeFilter("details",(function(e){F(e,(function(e){var t=e.attr("data-mce-open")
e.attr("open",v(t)?t:null),e.attr("data-mce-open",null)}))})),Yp(e)||(c=e).on("click",(function(e){var t,n,r,o,i
3<=e.detail&&(r=(t=c).selection.getRng(),o=rs.fromRangeStart(r),i=rs.fromRangeEnd(r),!rs.isElementPosition(o)||wx(n=o.container())&&Xl(n).each((function(e){return r.setStart(e.container(),e.offset())})),!rs.isElementPosition(i)||wx(n=o.container())&&Yl(n).each((function(e){return r.setEnd(e.container(),e.offset())})),t.selection.setRng(ug(r)))}))
var y,C,x,w,S,E,k,_,A,R=Yp(y=e)?tu(null):ex(y)
A=R,(_=e).addCommand("delete",(function(){var e,t=A
qy(e=_)||ab(e,!1)||eb(e,!1)||Py(e,t,!1)||qv(e,!1)||ag(e)||ub(e,!1)||Fy(e,!1)||Wv(e)||Iy(e,!1)||($y(e,"Delete"),Pv(e))})),_.addCommand("forwardDelete",(function(){var e,t=A
ab(e=_,!0)||eb(e,!0)||Py(e,t,!0)||qv(e,!0)||ag(e)||ub(e,!0)||Fy(e,!0)||Wv(e)||Iy(e,!0)||$y(e,"ForwardDelete")})),Cs(C=e)&&C.on("NodeChange",N(Xy,C)),w=(x=e).dom,S=Cs(x),E=x.getParam("placeholder",lc.getAttrib(x.getElement(),"placeholder"),"string"),k=function(e,t){var n,r,o
!function(e){if(_v(e)){var t=e.keyCode
return!Av(e)&&(_f.metaKeyPressed(e)||e.altKey||112<=t&&t<=123||L(Ub,t))}}(e)&&(n=x.getBody(),r=!(_v(o=e)&&!(Av(o)||"keyup"===o.type&&229===o.keyCode))&&function(e,t,n){if(qr(Nt.fromDom(t),!1)){var r=""===n,o=t.firstElementChild
return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&(r?!e.isBlock(o):n===o.nodeName.toLowerCase())}return!1}(w,n,S),""!==w.getAttrib(n,zb)===r&&!t||(w.setAttrib(n,zb,r?E:null),w.setAttrib(n,"aria-placeholder",r?E:null),x.fire("PlaceholderToggle",{state:r}),x.on(r?"keydown":"keyup",k),x.off(r?"keyup":"keydown",k)))},E&&x.on("init",(function(e){k(e,!0),x.on("change SetContent ExecCommand",k),x.on("paste",(function(e){return Nr.setEditorTimeout(x,(function(){return k(e)}))}))}))
var D=Gp(e);(function(e){var t=e.settings,n=e.getDoc(),r=e.getBody()
e.fire("PreInit"),t.browser_spellcheck||t.gecko_spellcheck||(n.body.spellcheck=!1,Xx.setAttrib(r,"spellcheck","false")),e.quirks=function(e){function t(t,n){try{e.getDoc().execCommand(t,!1,n)}catch(t){}}function n(e){return e.isDefaultPrevented()}function r(){e.shortcuts.add("meta+a",null,"SelectAll")}function o(){e.inline||y.bind(e.getDoc(),"mousedown mouseup",(function(t){var n
t.target===e.getDoc().documentElement&&(n=C.getRng(),e.getBody().focus(),"mousedown"===t.type?Pr(n.startContainer)||C.placeCaretAt(t.clientX,t.clientY):C.setRng(n))}))}function i(){Range.prototype.getClientRects||e.on("mousedown",(function(t){var r
n(t)||"HTML"!==t.target.nodeName||((r=e.getBody()).blur(),Nr.setEditorTimeout(e,(function(){r.focus()})))}))}function a(){e.on("click",(function(t){var n=t.target;/^(IMG|HR)$/.test(n.nodeName)&&"false"!==y.getContentEditableParent(n)&&(t.preventDefault(),e.selection.select(n),e.nodeChanged()),"A"===n.nodeName&&y.hasClass(n,"mce-item-anchor")&&(t.preventDefault(),C.select(n))}))}function u(){e.on("keydown",(function(e){if(!n(e)&&e.keyCode===v&&C.isCollapsed()&&0===C.getRng().startOffset){var t=C.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))}function c(){e.getParam("readonly")||e.on("BeforeExecCommand mousedown",(function(){t("StyleWithCSS",!1),t("enableInlineTableEditing",!1),As(e)||t("enableObjectResizing",!1)}))}function l(){e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")}function f(){e.inline||e.on("keydown",(function(){document.activeElement===document.body&&e.getWin().focus()}))}function d(){e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(function(t){var n
"HTML"===t.target.nodeName&&(11<xt.ie?e.getBody().focus():(n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged()))})))}function m(){xt.mac&&e.on("keydown",(function(t){!_f.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))}))}function g(){e.on("click",(function(e){var t=e.target
do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")}function p(){e.on("init",(function(){e.dom.bind(e.getBody(),"submit",(function(e){e.preventDefault()}))}))}var h=Et.each,v=_f.BACKSPACE,b=_f.DELETE,y=e.dom,C=e.selection,x=e.parser,w=xt.gecko,S=xt.ie,E=xt.webkit,N="data:text/mce-internal,",k=S?"Text":"URL",_=s
return Yp(e)?(E&&(o(),a(),p(),r(),xt.iOS&&(f(),d(),g())),w&&(i(),c(),l(),m())):(e.on("keydown",(function(t){if(!n(t)&&t.keyCode===_f.BACKSPACE){var r,o=(r=C.getRng()).startContainer,i=r.startOffset,a=y.getRoot(),u=o
if(r.collapsed&&0===i){for(;u&&u.parentNode&&u.parentNode.firstChild===u&&u.parentNode!==a;)u=u.parentNode
"BLOCKQUOTE"===u.tagName&&(e.formatter.toggle("blockquote",null,u),(r=y.createRng()).setStart(o,0),r.setEnd(o,0),C.setRng(r))}}})),e.on("keydown",(function(t){var r,o,i,a,u=t.keyCode
n(t)||u!==b&&u!==v||(r=e.selection.isCollapsed(),o=e.getBody(),r&&!y.isEmpty(o)||!r&&(i=D(e.selection.getRng()),(a=y.createRng()).selectNode(e.getBody()),i!==D(a))||(t.preventDefault(),e.setContent(""),o.firstChild&&y.isBlock(o.firstChild)?e.selection.setCursorLocation(o.firstChild,0):e.selection.setCursorLocation(o,0),e.nodeChanged()))})),xt.windowsPhone||e.on("keyup focusin mouseup",(function(e){_f.modifierPressed(e)||C.normalize()}),!0),E&&(o(),a(),Cs(e)&&e.on("init",(function(){t("DefaultParagraphSeparator",Cs(e))})),p(),u(),x.addNodeFilter("br",(function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),xt.iOS?(f(),d(),g()):r()),11<=xt.ie&&(d(),u()),xt.ie&&(r(),t("AutoUrlDetect",!1),e.on("dragstart",(function(t){var n,r,o;(n=t).dataTransfer&&(e.selection.isCollapsed()&&"IMG"===n.target.tagName&&C.select(n.target),0<(r=e.selection.getContent()).length&&(o=N+escape(e.id)+","+escape(r),n.dataTransfer.setData(k,o)))})),e.on("drop",(function(t){var r,o,i,a
n(t)||(r=t.dataTransfer&&(a=t.dataTransfer.getData(k))&&0<=a.indexOf(N)?(a=a.substr(N.length).split(","),{id:unescape(a[0]),html:unescape(a[1])}):null)&&r.id!==e.id&&(t.preventDefault(),o=hf(t.x,t.y,e.getDoc()),C.setRng(o),i=r.html,e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",!1,{content:i,internal:!0}):e.execCommand("mceInsertContent",!1,i))}))),w&&(e.on("keydown",(function(t){if(!n(t)&&t.keyCode===v&&e.getBody().getElementsByTagName("hr").length&&C.isCollapsed()&&0===C.getRng().startOffset){var r=C.getNode(),o=r.previousSibling
if("HR"===r.nodeName)return y.remove(r),void t.preventDefault()
o&&o.nodeName&&"hr"===o.nodeName.toLowerCase()&&(y.remove(o),t.preventDefault())}})),i(),e.on("keypress",(function(t){var r
if(!n(t)&&(8===t.keyCode||46===t.keyCode)&&R())return r=A(),e.getDoc().execCommand("delete",!1,null),r(),t.preventDefault(),!1})),y.bind(e.getDoc(),"cut",(function(t){var r
!n(t)&&R()&&(r=A(),Nr.setEditorTimeout(e,(function(){r()})))})),c(),e.on("SetContent ExecCommand",(function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||h(y.select("a"),(function(e){var t=e.parentNode,n=y.getRoot()
if(t.lastChild===e){for(;t&&!y.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return
t=t.parentNode}y.add(t,"br",{"data-mce-bogus":1})}}))})),l(),m(),u())),{refreshContentEditable:_,isHidden:function(){if(!w||e.removed)return!1
var t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}}
function A(){var t=y.getAttribs(C.getStart().cloneNode(!1))
return function(){var n=C.getStart()
n!==e.getBody()&&(y.setAttrib(n,"style",null),h(t,(function(e){n.setAttributeNode(e.cloneNode(!0))})))}}function R(){return!C.isCollapsed()&&y.getParent(C.getStart(),y.isBlock)!==y.getParent(C.getEnd(),y.isBlock)}function D(e){var t=y.create("body"),n=e.cloneContents()
return t.appendChild(n),C.serializer.serialize(t,{format:"html"})}}(e),e.fire("PostRender")
var o=e.getParam("directionality",iu.isRtl()?"rtl":void 0)
void 0!==o&&(r.dir=o),t.protect&&e.on("BeforeSetContent",(function(e){Et.each(t.protect,(function(t){e.content=e.content.replace(t,(function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"}))}))})),e.on("SetContent",(function(){e.addVisual(e.getBody())})),e.on("compositionstart compositionend",(function(t){e.composing="compositionstart"===t.type}))})(e),D.fold((function(){Tx(e).then((function(){return Ox(e)}))}),(function(t){e.setProgressState(!0),Tx(e).then((function(){t().then((function(t){e.setProgressState(!1),Ox(e)}),(function(t){e.notificationManager.open({type:"error",text:String(t)}),Ox(e)}))}))}))}function Px(e){return e.replace(/^\-/,"")}function Lx(e){return{editorContainer:e,iframeContainer:e,api:{}}}function Ix(e){var t,n,r,o,i,a,u,c
e.fire("ScriptsLoaded"),t=e,n=Et.trim(Ss(t)),r=t.ui.registry.getAll().icons,ne(_e(_e({},nv.get("default").icons),nv.get(n).icons),(function(e,n){Ne(r,n)||t.ui.registry.addIcon(n,e)})),a=Ds(o=e),v(a)?(o.settings.theme=Px(a),i=sv.get(a),o.theme=new i(o,sv.urls[a]),o.theme.init&&o.theme.init(o,sv.urls[a]||o.documentBaseUrl.replace(/\/$/,""),o.$)):o.theme={},c=[],Et.each(Os(u=e).split(/[ ,]/),(function(e){Jx(u,c,Px(e))}))
var l=function(e){var t,n,r,o,i,a,u,s=e.getElement()
return e.orgDisplay=s.style.display,v(Ds(e))?e.theme.renderUI():S(Ds(e))?(n=(t=e).getElement(),(r=Ds(t)(t,n)).editorContainer.nodeType&&(r.editorContainer.id=r.editorContainer.id||t.id+"_parent"),r.iframeContainer&&r.iframeContainer.nodeType&&(r.iframeContainer.id=r.iframeContainer.id||t.id+"_iframecontainer"),r.height=r.iframeHeight||n.offsetHeight,r):(u=(o=e).getElement(),o.inline?Lx(null):(i=u,a=Gx.create("div"),Gx.insertAfter(a,i),Lx(a)))}(e),f=e,d=ve.from(l.api).getOr({}),m={show:ve.from(d.show).getOr(s),hide:ve.from(d.hide).getOr(s),disable:ve.from(d.disable).getOr(s),isDisabled:ve.from(d.isDisabled).getOr(D),enable:function(){f.mode.isReadOnly()||ve.from(d.enable).map(A)}}
f.ui=_e(_e({},f.ui),m)
var g,p,h,b={editorContainer:l.editorContainer,iframeContainer:l.iframeContainer}
return e.editorContainer=b.editorContainer||null,function(e){var t,n
e.contentCSS=e.contentCSS.concat(Lb(e,(n=(t=e).getParam("content_css"),v(n)?M(n.split(","),Je):y(n)?n:!1===n||t.inline?[]:["default"])),Lb(e,_s(e)))}(e),e.inline?Bx(e):(h=function(e,t){var n,r,o,i,a=e.translate(e.getParam("iframe_aria_text","Rich Text Area. Press ALT-0 for help.","string")),u=(n=e.id,r=a,t.height,o=e.getParam("iframe_attrs",{}),hn(i=Nt.fromTag("iframe"),o),hn(i,{id:n+"_ifr",frameBorder:"0",allowTransparency:"true",title:r}),du(i,"tox-edit-area__iframe"),i.dom)
u.onload=function(){u.onload=null,e.fire("load")}
var s=function(e,t){if(document.domain!==window.location.hostname&&xt.browser.isIE()){var n=hv("mce")
e[n]=function(){Bx(e)}
var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()"
return Yx.setAttrib(t,"src",r),!0}return!1}(e,u)
return e.contentAreaContainer=t.iframeContainer,e.iframeElement=u,e.iframeHTML=function(e){var t=e.getParam("doctype","<!DOCTYPE html>")+"<html><head>"
e.getParam("document_base_url","")!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
var n=bs(e,"body_id","tinymce"),r=bs(e,"body_class","")
return ys(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+ys(e)+'" />'),t+'</head><body id="'+n+'" class="mce-content-body '+r+'" data-id="'+e.id+'"><br></body></html>'}(e),Yx.add(t.iframeContainer,u),s}(g=e,p=b),p.editorContainer&&(Yx.get(p.editorContainer).style.display=g.orgDisplay,g.hidden=Yx.isHidden(p.editorContainer)),g.getElement().style.display="none",Yx.setAttrib(g.id,"aria-hidden","true"),void(h||Bx(g)))}function Mx(e){return"-"===e.charAt(0)}function Fx(e,t,n){return ve.from(t).filter((function(e){return 0<e.length&&!nv.has(e)})).map((function(t){return{url:e.editorManager.baseURL+"/icons/"+t+"/icons"+n+".js",name:ve.some(t)}}))}function Ux(e){return function(t,n){return ve.from(n).map(Nt.fromDom).filter(Nn).bind((function(n){return r=e,o=t,i=n.dom,pg(Nt.fromDom(i),(function(e){return xn(t=e,r).orThunk((function(){return"font"===kt(t)?ue(Zx,r).bind((function(e){return bn(t,e)})):ve.none()}))
var t}),(function(e){return je(Nt.fromDom(o),e)})).or((a=n.dom,ve.from(Ya.DOM.getStyle(a,e,!0))))
var r,o,i,a})).getOr("")}}function zx(e){return Xl(e.getBody()).map((function(e){var t=e.container()
return Hn(t)?t.parentNode:t}))}function Hx(e,t){return n=e,r=l(ve.some,t),o=n,ve.from(o.selection.getRng()).bind((function(e){var t=o.getBody()
return e.startContainer===t&&0===e.startOffset?ve.none():ve.from(o.selection.getStart(!0))})).orThunk(N(zx,n)).map(Nt.fromDom).filter(Nn).bind(r)
var n,r,o}function jx(e,t){if(/^[0-9.]+$/.test(t)){var n=parseInt(t,10)
if(1<=n&&n<=7){var r=Et.explode(e.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large")),o=Et.explode(e.getParam("font_size_classes",""))
return o?o[n-1]||t:r[n-1]||t}return t}return t}var Vx=Xn,qx=Kn,$x=function(e){e.on((function(e){Ex(e.ghost)})),e.clear()},Wx=Kn,Kx=Xn,Xx=Ya.DOM,Yx=Ya.DOM,Gx=Ya.DOM,Jx=function(e,t,n){var r,o,i,a=uv.get(n),u=uv.urls[n]||e.documentBaseUrl.replace(/\/$/,"")
if(n=Et.trim(n),a&&-1===Et.inArray(t,n)&&(Et.each(uv.dependencies(n),(function(n){Jx(e,t,n)})),!e.plugins[n]))try{var s=new a(e,u,e.$);(e.plugins[n]=s).init&&(s.init(e,u),t.push(n))}catch(a){o=a,ff(r=e,"PluginLoadError",{message:i=iu.translate(["Failed to initialize plugin: {0}",n])}),Ob(i,o),fv(r,i)}},Qx=Ya.DOM,Zx={"font-size":"size","font-family":"face"},ew=Ux("font-size"),tw=c((function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}),Ux("font-family")),nw=Et.each,rw=Et.map,ow=Et.inArray,iw=(aw.prototype.execCommand=function(e,t,n,r){var o,i,a=!1,u=this
if(!u.editor.removed){if("mcefocus"!==e.toLowerCase()&&(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus?od(i=u.editor).each((function(e){return i.selection.setRng(e)})):u.editor.focus()),(r=u.editor.fire("BeforeExecCommand",{command:e,ui:t,value:n})).isDefaultPrevented())return!1
var s=e.toLowerCase()
if(o=u.commands.exec[s])return o(s,t,n),u.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
if(nw(this.editor.plugins,(function(r){if(r.execCommand&&r.execCommand(e,t,n))return u.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!(a=!0)})),a)return a
if(u.editor.theme&&u.editor.theme.execCommand&&u.editor.theme.execCommand(e,t,n))return u.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
try{a=u.editor.getDoc().execCommand(e,t,n)}catch(r){}return!!a&&(u.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0)}},aw.prototype.queryCommandState=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.state[e])return t(e)
try{return this.editor.getDoc().queryCommandState(e)}catch(e){}return!1}},aw.prototype.queryCommandValue=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.value[e])return t(e)
try{return this.editor.getDoc().queryCommandValue(e)}catch(e){}}},aw.prototype.addCommands=function(e,t){void 0===t&&(t="exec")
var n=this
nw(e,(function(e,r){nw(r.toLowerCase().split(","),(function(r){n.commands[t][r]=e}))}))},aw.prototype.addCommand=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.exec[e]=function(e,o,i,a){return t.call(n||r.editor,o,i,a)}},aw.prototype.queryCommandSupported=function(e){if(e=e.toLowerCase(),this.commands.exec[e])return!0
try{return this.editor.getDoc().queryCommandSupported(e)}catch(e){}return!1},aw.prototype.addQueryStateHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.state[e]=function(){return t.call(n||r.editor)}},aw.prototype.addQueryValueHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.value[e]=function(){return t.call(n||r.editor)}},aw.prototype.hasCustomCommand=function(e){return e=e.toLowerCase(),!!this.commands.exec[e]},aw.prototype.execNativeCommand=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=null),this.editor.getDoc().execCommand(e,t,n)},aw.prototype.isFormatMatch=function(e){return this.editor.formatter.match(e)},aw.prototype.toggleFormat=function(e,t){this.editor.formatter.toggle(e,t),this.editor.nodeChanged()},aw.prototype.storeSelection=function(e){this.selectionBookmark=this.editor.selection.getBookmark(e)},aw.prototype.restoreSelection=function(){this.editor.selection.moveToBookmark(this.selectionBookmark)},aw.prototype.setupCommands=function(e){var t=this
function n(t){return function(){var n=e.selection,r=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks(),o=rw(r,(function(n){return!!e.formatter.matchNode(n,t)}))
return-1!==ow(o,!0)}}this.addCommands({"mceResetDesignMode,mceBeginUndoLevel":s,"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},mceFocus:function(t,n,r){var o,i
i=r,(o=e).removed||(i?Dd:function(e){var t=e.selection,n=e.getBody(),r=t.getRng()
e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===ld(e)&&od(e).each((function(t){e.selection.setRng(t),r=t}))
var o,i,a=(o=e,i=t.getNode(),o.dom.getParent(i,(function(e){return"true"===o.dom.getContentEditable(e)})))
if(e.$.contains(n,a))return cd(a),sd(e,r),Dd(e)
e.inline||(xt.opera||cd(n),e.getWin().focus()),(xt.gecko||e.inline)&&(cd(n),sd(e,r)),Dd(e)})(o)},"Cut,Copy,Paste":function(n){var r,o,i=e.getDoc()
try{t.execNativeCommand(n)}catch(n){r=!0}!(r="paste"===n&&!i.queryCommandEnabled(n)||r)&&i.queryCommandSupported(n)||(o=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."),xt.mac&&(o=o.replace(/Ctrl\+/g,"⌘+")),e.notificationManager.open({text:o,type:"error"}))},unlink:function(){var t
e.selection.isCollapsed()?(t=e.dom.getParent(e.selection.getStart(),"a"))&&e.dom.remove(t,!0):e.formatter.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(n){var r=n.substring(7)
"full"===r&&(r="justify"),nw("left,center,right,justify".split(","),(function(t){r!==t&&e.formatter.remove("align"+t)})),"none"!==r&&t.toggleFormat("align"+r)},"InsertUnorderedList,InsertOrderedList":function(n){var r
t.execNativeCommand(n)
var o=e.dom.getParent(e.selection.getNode(),"ol,ul")
o&&(r=o.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName)&&(t.storeSelection(),e.dom.split(r,o),t.restoreSelection()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){t.toggleFormat(e)},"ForeColor,HiliteColor":function(e,n,r){t.toggleFormat(e,{value:r})},FontName:function(t,n,r){var o,i
i=jx(o=e,r),o.formatter.toggle("fontname",{value:M(i.split(/\s*,\s*/),(function(e){return-1===e.indexOf(" ")||Ge(e,'"')||Ge(e,"'")?e:"'"+e+"'"})).join(",")}),o.nodeChanged()},FontSize:function(t,n,r){var o;(o=e).formatter.toggle("fontsize",{value:jx(o,r)}),o.nodeChanged()},LineHeight:function(t,n,r){var o;(o=e).formatter.toggle("lineheight",{value:String(r)}),o.nodeChanged()},Lang:function(e,n,r){t.toggleFormat(e,{value:r.code,customValue:r.customCode})},RemoveFormat:function(t){e.formatter.remove(t)},mceBlockQuote:function(){t.toggleFormat("blockquote")},FormatBlock:function(e,n,r){return t.toggleFormat(r||"p")},mceCleanup:function(){var t=e.selection.getBookmark()
e.setContent(e.getContent()),e.selection.moveToBookmark(t)},mceRemoveNode:function(n,r,o){var i=o||e.selection.getNode()
i!==e.getBody()&&(t.storeSelection(),e.dom.remove(i,!0),t.restoreSelection())},mceSelectNodeDepth:function(t,n,r){var o=0
e.dom.getParent(e.selection.getNode(),(function(t){if(1===t.nodeType&&o++===r)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:function(t,n,r){e.selection.select(r)},mceInsertContent:function(t,n,r){var o,i,a,u
o=e,a=(i=function(e){if("string"==typeof e)return{content:e,details:{}}
var t=Et.extend({paste:e.paste,data:{paste:e.paste}},e)
return{content:e.content,details:t}}(r)).content,u=i.details,Jp(o).editor.insertContent(a,u)},mceInsertRawHTML:function(t,n,r){e.selection.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,(function(){return r})))},mceInsertNewLine:function(t,n,r){XC(e,r)},mceToggleFormat:function(e,n,r){t.toggleFormat(r)},mceSetContent:function(t,n,r){e.setContent(r)},"Indent,Outdent":function(t){Vy(e,t)},mceRepaint:s,InsertHorizontalRule:function(){e.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual,e.addVisual()},mceReplaceContent:function(t,n,r){e.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceInsertLink:function(t,n,r){"string"==typeof r&&(r={href:r})
var o=e.dom.getParent(e.selection.getNode(),"a")
r.href=r.href.replace(/ /g,"%20"),o&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,o)},selectAll:function(){var t,n=e.dom.getParent(e.selection.getStart(),Kn)
n&&((t=e.dom.createRng()).selectNodeContents(n),e.selection.setRng(t))},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,n,r){return IC(e,r),!0}}),t.addCommands({JustifyLeft:n("alignleft"),JustifyCenter:n("aligncenter"),JustifyRight:n("alignright"),JustifyFull:n("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return t.isFormatMatch(e)},mceBlockQuote:function(){return t.isFormatMatch("blockquote")},Outdent:function(){return Hy(e)},"InsertUnorderedList,InsertOrderedList":function(t){var n=e.dom.getParent(e.selection.getNode(),"ul,ol")
return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state"),t.addCommands({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}}),t.addQueryValueHandler("FontName",(function(){return Hx(t=e,(function(e){return tw(t.getBody(),e.dom)})).getOr("")
var t}),this),t.addQueryValueHandler("FontSize",(function(){return Hx(t=e,(function(e){return ew(t.getBody(),e.dom)})).getOr("")
var t}),this),t.addQueryValueHandler("LineHeight",(function(){return Hx(t=e,(function(e){var n=Nt.fromDom(t.getBody())
return pg(e,(function(e){return xn(e,"line-height")}),N(je,n)).getOrThunk((function(){var t=parseFloat(Cn(e,"line-height")),n=parseFloat(Cn(e,"font-size"))
return String(t/n)}))})).getOr("")
var t}),this)},aw)
function aw(e){this.commands={state:{},exec:{},value:{}},this.editor=e,this.setupCommands(e)}function uw(e,t,n){try{e.getDoc().execCommand(t,!1,String(n))}catch(e){}}function sw(e,t){e.dom.contentEditable=t?"true":"false"}function cw(e,t){var n,r,o=Nt.fromDom(e.getBody());(function(e,t,n){var r,o,i,a,u,s
mu(e,t)&&!1===n?(o=t,fu(r=e)?r.dom.classList.remove(o):(u=o,0<(s=H(lu(a=r,"class"),(function(e){return e!==u}))).length?pn(a,"class",s.join(" ")):yn(a,"class")),0===(fu(i=r)?i.dom.classList:lu(i,"class")).length&&yn(i,"class")):n&&du(e,t)})(o,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),ve.from(e.selection.getNode()).each((function(e){e.removeAttribute("data-mce-selected")})),sw(o,!(e.readonly=!0)),F(gu(o,'*[contenteditable="true"]'),(function(e){pn(e,dw,"true"),sw(e,!1)}))):(sw(o,!(e.readonly=!1)),F(gu(o,"*["+dw+'="true"]'),(function(e){yn(e,dw),sw(e,!0)})),uw(e,"StyleWithCSS",!1),uw(e,"enableInlineTableEditing",!1),uw(e,"enableObjectResizing",!1),(ld(n=e)||(r=n,Yf(On(Nt.fromDom(r.getElement()))).filter((function(e){return!(void 0!==(t=e.dom.classList)&&(t.contains("tox-edit-area")||t.contains("tox-edit-area__iframe")||t.contains("mce-content-body")))&&id(r,e.dom)
var t})).isSome()))&&e.focus(),e.selection.setRng(e.selection.getRng()),e.nodeChanged())}function lw(e){return e.readonly}function fw(e){e.parser.addAttributeFilter("contenteditable",(function(t){lw(e)&&F(t,(function(e){e.attr(dw,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(dw,(function(t){lw(e)&&F(t,(function(e){e.attr("contenteditable",e.attr(dw))}))})),e.serializer.addTempAttr(dw)}var dw="data-mce-contenteditable",mw=Et.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," "),gw=(pw.isNative=function(e){return!!mw[e.toLowerCase()]},pw.prototype.fire=function(e,t){var n=e.toLowerCase(),r=ro(n,t||{},this.scope)
this.settings.beforeFire&&this.settings.beforeFire(r)
var o=this.bindings[n]
if(o)for(var i=0,a=o.length;i<a;i++){var u=o[i]
if(!u.removed){if(u.once&&this.off(n,u.func),r.isImmediatePropagationStopped())return r
if(!1===u.func.call(this.scope,r))return r.preventDefault(),r}}return r},pw.prototype.on=function(e,t,n,r){if(t=!1===t?D:t){var o={func:t,removed:!1}
r&&Et.extend(o,r)
for(var i=e.toLowerCase().split(" "),a=i.length;a--;){var u=i[a],s=this.bindings[u]
s||(s=[],this.toggleEvent(u,!0)),s=n?Ae([o],s,!0):Ae(Ae([],s,!0),[o],!1),this.bindings[u]=s}}return this},pw.prototype.off=function(e,t){var n=this
if(e)for(var r=e.toLowerCase().split(" "),o=r.length;o--;){var i,a=r[o],u=this.bindings[a]
if(!a)return ne(this.bindings,(function(e,t){n.toggleEvent(t,!1),delete n.bindings[t]})),this
u&&(t?(u=(i=z(u,(function(e){return e.func===t}))).fail,this.bindings[a]=u,F(i.pass,(function(e){e.removed=!0}))):u.length=0,u.length||(this.toggleEvent(e,!1),delete this.bindings[a]))}else ne(this.bindings,(function(e,t){n.toggleEvent(t,!1)})),this.bindings={}
return this},pw.prototype.once=function(e,t,n){return this.on(e,t,n,{once:!0})},pw.prototype.has=function(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)},pw)
function pw(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||D}function hw(e){return e._eventDispatcher||(e._eventDispatcher=new gw({scope:e,toggleEvent:function(t,n){gw.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher}function vw(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
var n=Rs(e)
return n?(e.eventRoot||(e.eventRoot=Ew.select(n)[0]),e.eventRoot):e.getBody()}function bw(e,t,n){var r,o,i,a
e.hidden||lw(e)?lw(e)&&(r=e,"click"!==(o=n).type||_f.metaKeyPressed(o)||(i=Nt.fromDom(o.target),a=r,vr(i,"a",(function(e){return je(e,Nt.fromDom(a.getBody()))})).bind((function(e){return bn(e,"href")})).each((function(e){var t,n
o.preventDefault(),/^#/.test(e)?(t=r.dom.select(e+',[name="'+(Ge(n=e,"#")?n.substring("#".length):n)+'"]')).length&&r.selection.scrollIntoView(t[0],!0):window.open(e,"_blank","rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")})))):e.fire(t,n)}function yw(e,t){var n,r
e.delegates||(e.delegates={}),e.delegates[t]||e.removed||(r=vw(e,t),Rs(e)?(ww||(ww={},e.editorManager.on("removeEditor",(function(){e.editorManager.activeEditor||ww&&(ne(ww,(function(t,n){e.dom.unbind(vw(e,n))})),ww=null)}))),ww[t]||(ww[t]=n=function(n){for(var r=n.target,o=e.editorManager.get(),i=o.length;i--;){var a=o[i].getBody()
a!==r&&!Ew.isChildOf(r,a)||bw(o[i],t,n)}},Ew.bind(r,t,n))):(Ew.bind(r,t,n=function(n){bw(e,t,n)}),e.delegates[t]=n))}function Cw(e,t,n,r){var o=n[t.get()],i=n[r]
try{i.activate()}catch(e){return void console.error("problem while activating editor mode "+r+":",e)}o.deactivate(),o.editorReadOnly!==i.editorReadOnly&&cw(e,i.editorReadOnly),t.set(r),e.fire("SwitchMode",{mode:r})}function xw(e){var t,n={}
_w(Aw(e.toLowerCase(),"+"),(function(e){e in Dw?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=Rw[e]||e.toUpperCase().charCodeAt(0))}))
var r=[n.keyCode]
for(t in Dw)n[t]?r.push(t):n[t]=!1
return n.id=r.join(","),n.access&&(n.alt=!0,xt.mac?n.ctrl=!0:n.shift=!0),n.meta&&(xt.mac?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n}var ww,Sw={fire:function(e,t,n){if(this.removed&&"remove"!==e&&"detach"!==e)return t
var r=hw(this).fire(e,t)
if(!1!==n&&this.parent)for(var o=this.parent();o&&!r.isPropagationStopped();)o.fire(e,r,!1),o=o.parent()
return r},on:function(e,t,n){return hw(this).on(e,t,n)},off:function(e,t){return hw(this).off(e,t)},once:function(e,t){return hw(this).once(e,t)},hasEventListeners:function(e){return hw(this).has(e)}},Ew=Ya.DOM,Nw=_e(_e({},Sw),{bindPendingEventDelegates:function(){var e=this
Et.each(e._pendingNativeEvents,(function(t){yw(e,t)}))},toggleNativeEvent:function(e,t){var n=this
"focus"!==e&&"blur"!==e&&(n.removed||(t?n.initialized?yw(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(vw(n,e),e,n.delegates[e]),delete n.delegates[e])))},unbindAllNativeEvents:function(){var e=this,t=e.getBody(),n=e.dom
e.delegates&&(ne(e.delegates,(function(t,n){e.dom.unbind(vw(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}}),kw=["design","readonly"],_w=Et.each,Aw=Et.explode,Rw={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},Dw=Et.makeMap("alt,ctrl,shift,meta,access"),Tw=(Ow.prototype.add=function(e,t,n,r){var o=this,i=o.normalizeCommandFunc(n)
return _w(Aw(Et.trim(e)),(function(e){var n=o.createShortcut(e,t,i,r)
o.shortcuts[n.id]=n})),!0},Ow.prototype.remove=function(e){var t=this.createShortcut(e)
return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)},Ow.prototype.normalizeCommandFunc=function(e){var t=this,n=e
return"string"==typeof n?function(){t.editor.execCommand(n,!1,null)}:Et.isArray(n)?function(){t.editor.execCommand(n[0],n[1],n[2])}:n},Ow.prototype.createShortcut=function(e,t,n,r){var o=Et.map(Aw(e,">"),xw)
return o[o.length-1]=Et.extend(o[o.length-1],{func:n,scope:r||this.editor}),Et.extend(o[0],{desc:this.editor.translate(t),subpatterns:o.slice(1)})},Ow.prototype.hasModifier=function(e){return e.altKey||e.ctrlKey||e.metaKey},Ow.prototype.isFunctionKey=function(e){return"keydown"===e.type&&112<=e.keyCode&&e.keyCode<=123},Ow.prototype.matchShortcut=function(e,t){return!!t&&t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&t.alt===e.altKey&&t.shift===e.shiftKey&&!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0)},Ow.prototype.executeShortcutAction=function(e){return e.func?e.func.call(e.scope):null},Ow)
function Ow(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e
var t=this
e.on("keyup keypress keydown",(function(e){!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(_w(t.shortcuts,(function(n){if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}var Bw=Ya.DOM,Pw=Et.extend,Lw=Et.each,Iw=Et.resolve,Mw=xt.ie,Fw=(Uw.prototype.render=function(){!function(e){var t=e.id
iu.setCode(Ns(e))
var n,r,o,i,a=function(){Qx.unbind(window,"ready",a),e.render()}
oi.Event.domLoaded?e.getElement()&&xt.contentEditable&&(n=Nt.fromDom(e.getElement()),r=V(n.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{}),e.on("remove",(function(){U(n.dom.attributes,(function(e){return yn(n,e.name),0})),hn(n,r)})),e.ui.styleSheetLoader=kr.forElement(n,{contentCssCors:(o=e).getParam("content_css_cors"),referrerPolicy:Es(o)}),e.getParam("inline")?e.inline=!0:(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden"),(i=e.getElement().form||Qx.getParent(t,"form"))&&(e.formElement=i,e.getParam("hidden_input")&&!zn(e.getElement())&&(Qx.insertAfter(Qx.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=function(t){e.fire(t.type,t)},Qx.bind(i,"submit reset",e.formEventDelegate),e.on("reset",(function(){e.resetContent()})),!e.getParam("submit_patch")||i.submit.nodeType||i.submit.length||i._mceOldSubmit||(i._mceOldSubmit=i.submit,i.submit=function(){return e.editorManager.triggerSave(),e.setDirty(!1),i._mceOldSubmit(i)})),e.windowManager=cv(e),e.notificationManager=Ih(e),"xml"===e.getParam("encoding")&&e.on("GetContent",(function(e){e.save&&(e.content=Qx.encode(e.content))})),e.getParam("add_form_submit_trigger")&&e.on("submit",(function(){e.initialized&&e.save()})),e.getParam("add_unload_trigger")&&(e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),function(e,t){var n,r,o=Za.ScriptLoader,i=o,a=t,u=function(){var n,r,i,a,u,c,l,f,d
u=o,f=Ns(c=e),d=c.getParam("language_url","","string"),!1===iu.hasCode(f)&&"en"!==f&&(l=""!==d?d:c.editorManager.baseURL+"/langs/"+f+".js",u.add(l,s,void 0,(function(){dv(c,"LanguageLoadError",mv("language",l,f))}))),i=o,F(function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n)
return t}([Fx(a=e,"default",t),ve.from(a.getParam("icons_url","","string")).filter((function(e){return 0<e.length})).map((function(e){return{url:e,name:ve.none()}})).orThunk((function(){return Fx(a,Ss(a),"")}))]),(function(e){i.add(e.url,s,void 0,(function(){dv(a,"IconsLoadError",mv("icons",e.url,e.name.getOrUndefined()))}))})),n=e,r=t,Et.each(n.getParam("external_plugins"),(function(e,t){uv.load(t,e,s,void 0,(function(){gv(n,e,t)})),n.settings.plugins+=" "+t})),Et.each(Os(n).split(/[ ,]/),(function(e){var t,o;(e=Et.trim(e))&&!uv.urls[e]&&(Mx(e)?(e=e.substr(1,e.length),t=uv.dependencies(e),Et.each(t,(function(e){var t=uv.createUrl({prefix:"plugins/",resource:e,suffix:"/plugin"+r+".js"},e)
uv.load(t.resource,t,s,void 0,(function(){gv(n,t.prefix+t.resource+t.suffix,t.resource)}))}))):(o={prefix:"plugins/",resource:e,suffix:"/plugin"+r+".js"},uv.load(e,o,s,void 0,(function(){gv(n,o.prefix+o.resource+o.suffix,e)}))))})),o.loadQueue((function(){e.removed||Ix(e)}),e,(function(){e.removed||Ix(e)}))},c=Ds(n=e)
v(c)?(Mx(c)||Ne(sv.urls,c)||((r=n.getParam("theme_url"))?sv.load(c,n.documentBaseURI.toAbsolute(r)):sv.load(c,"themes/"+c+"/theme"+a+".js")),i.loadQueue((function(){sv.waitFor(c,u)}))):u()}(e,e.suffix)):Qx.bind(window,"ready",a)}(this)},Uw.prototype.focus=function(e){this.execCommand("mceFocus",!1,e)},Uw.prototype.hasFocus=function(){return ld(this)},Uw.prototype.execCallback=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r,o=this.settings[e]
if(o)return this.callbackLookup&&(r=this.callbackLookup[e])&&(o=r.func,r=r.scope),"string"==typeof o&&(r=(r=o.replace(/\.\w+$/,""))?Iw(r):0,o=Iw(o),this.callbackLookup=this.callbackLookup||{},this.callbackLookup[e]={func:o,scope:r}),o.apply(r||this,t)},Uw.prototype.translate=function(e){return iu.translate(e)},Uw.prototype.getParam=function(e,t,n){return i=t,a=n,l=(o=e)in(r=this).settings?r.settings[o]:i,"hash"===a?(c={},"string"==typeof(s=l)?F(0<s.indexOf("=")?s.split(/[;,](?![^=;,]*(?:[;,]|$))/):s.split(","),(function(e){var t=e.split("=")
1<t.length?c[Et.trim(t[0])]=Et.trim(t[1]):c[Et.trim(t[0])]=Et.trim(t[0])})):c=s,c):"string"===a?Oh(v,r,o).getOr(i):"number"===a?Oh(E,r,o).getOr(i):"boolean"===a?Oh(x,r,o).getOr(i):"object"===a?Oh(b,r,o).getOr(i):"array"===a?Oh(y,r,o).getOr(i):"string[]"===a?Oh((u=v,function(e){return y(e)&&X(e,u)}),r,o).getOr(i):"function"===a?Oh(S,r,o).getOr(i):l
var r,o,i,a,u,s,c,l},Uw.prototype.hasPlugin=function(e,t){return!(!L(Os(this).split(/[ ,]/),e)||t&&void 0===uv.get(e))},Uw.prototype.nodeChanged=function(e){this._nodeChangeDispatcher.nodeChanged(e)},Uw.prototype.addCommand=function(e,t,n){this.editorCommands.addCommand(e,t,n)},Uw.prototype.addQueryStateHandler=function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},Uw.prototype.addQueryValueHandler=function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},Uw.prototype.addShortcut=function(e,t,n,r){this.shortcuts.add(e,t,n,r)},Uw.prototype.execCommand=function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},Uw.prototype.queryCommandState=function(e){return this.editorCommands.queryCommandState(e)},Uw.prototype.queryCommandValue=function(e){return this.editorCommands.queryCommandValue(e)},Uw.prototype.queryCommandSupported=function(e){return this.editorCommands.queryCommandSupported(e)},Uw.prototype.show=function(){this.hidden&&(this.hidden=!1,this.inline?this.getBody().contentEditable="true":(Bw.show(this.getContainer()),Bw.hide(this.id)),this.load(),this.fire("show"))},Uw.prototype.hide=function(){var e=this,t=e.getDoc()
e.hidden||(Mw&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(Bw.hide(e.getContainer()),Bw.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},Uw.prototype.isHidden=function(){return!!this.hidden},Uw.prototype.setProgressState=function(e,t){this.fire("ProgressState",{state:e,time:t})},Uw.prototype.load=function(e){var t=this.getElement()
if(this.removed)return""
if(t){(e=e||{}).load=!0
var n=zn(t)?t.value:t.innerHTML,r=this.setContent(n,e)
return e.element=t,e.no_events||this.fire("LoadContent",e),e.element=t=null,r}},Uw.prototype.save=function(e){var t,n,r=this,o=r.getElement()
if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,zn(o)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=Bw.getParent(r.id,"form"))&&Lw(n.elements,(function(e){if(e.name===r.id)return e.value=t,!1}))),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},Uw.prototype.setContent=function(e,t){return kh(this,e,t)},Uw.prototype.getContent=function(e){return this,n=(t=void 0===(t=e)?{}:t).format||"html",r=t,Jp(this).editor.getContent(r,n)
var t,n,r},Uw.prototype.insertContent=function(e,t){t&&(e=Pw({content:e},t)),this.execCommand("mceInsertContent",!1,e)},Uw.prototype.resetContent=function(e){void 0===e?kh(this,this.startContent,{format:"raw"}):kh(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()},Uw.prototype.isDirty=function(){return!this.isNotDirty},Uw.prototype.setDirty=function(e){var t=!this.isNotDirty
this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},Uw.prototype.getContainer=function(){return this.container||(this.container=Bw.get(this.editorContainer||this.id+"_parent")),this.container},Uw.prototype.getContentAreaContainer=function(){return this.contentAreaContainer},Uw.prototype.getElement=function(){return this.targetElm||(this.targetElm=Bw.get(this.id)),this.targetElm},Uw.prototype.getWin=function(){var e
return this.contentWindow||(e=this.iframeElement)&&(this.contentWindow=e.contentWindow),this.contentWindow},Uw.prototype.getDoc=function(){var e
return this.contentDocument||(e=this.getWin())&&(this.contentDocument=e.document),this.contentDocument},Uw.prototype.getBody=function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},Uw.prototype.convertURL=function(e,t,n){var r=this.settings
return r.urlconverter_callback?this.execCallback("urlconverter_callback",e,n,!0,t):!r.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:r.relative_urls?this.documentBaseURI.toRelative(e):this.documentBaseURI.toAbsolute(e,r.remove_script_host)},Uw.prototype.addVisual=function(e){var t
t=e,Qp(this).editor.addVisual(t)},Uw.prototype.remove=function(){var e,t,n,r,o;(e=this).removed||(t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement(),r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&$h.remove(o.nextSibling),e.fire("remove"),e.editorManager.remove(e),!e.inline&&r&&$h.setStyle(e.id,"display",e.orgDisplay),e.fire("detach"),$h.remove(e.getContainer()),_h(t),_h(n),e.destroy())},Uw.prototype.destroy=function(e){var t,n,r,o,i,a,u
n=e,a=(t=this).selection,u=t.dom,t.destroyed||(n||t.removed?(n||(t.editorManager.off("beforeunload",t._beforeUnload),t.theme&&t.theme.destroy&&t.theme.destroy(),_h(a),_h(u)),(o=(r=t).formElement)&&(o._mceOldSubmit&&(o.submit=o._mceOldSubmit,o._mceOldSubmit=null),$h.unbind(o,"submit reset",r.formEventDelegate)),(i=t).contentAreaContainer=i.formElement=i.container=i.editorContainer=null,i.bodyElement=i.contentDocument=i.contentWindow=null,i.iframeElement=i.targetElm=null,i.selection&&(i.selection=i.selection.win=i.selection.dom=i.selection.dom.doc=null),t.destroyed=!0):t.remove())},Uw.prototype.uploadImages=function(e){return this.editorUpload.uploadImages(e)},Uw.prototype._scanForImages=function(){return this.editorUpload.scanForImages()},Uw.prototype.addButton=function(){throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")},Uw.prototype.addSidebar=function(){throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")},Uw.prototype.addMenuItem=function(){throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")},Uw.prototype.addContextToolbar=function(){throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")},Uw)
function Uw(e,t,n){var r,o,i,a,u,c,l,f,d,m,g,p,h,v,b,y,C=this
function x(e,t){return function(n,r){return e[n.toLowerCase()]=_e(_e({},r),{type:t})}}this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,Pw(this,Nw),this.settings=(d=this.documentBaseUrl,m=n.defaultSettings,p=d,h=Jh,this,v={id:e,theme:"silver",toolbar_mode:Dh(g=t,"floating"),plugins:"",document_base_url:p,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,inline_styles:!0,convert_fonts_to_spans:!0,indent:!0,indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:this.convertURL,url_converter_scope:this},b=_e(_e({},v),h?tv:{}),!1!==(y=Th(Qh||Zh,Qh,b,m,g)).deprecation_warnings&&function(e,t){var n,r,o,i,a,u,s,c=(n=e,r=H(Kh,(function(e){return Ne(n,e)})),!1!==(o=n.forced_root_block)&&""!==o||r.push("forced_root_block (false only)"),J(r)),l=(s=Et.makeMap(t.plugins," "),J(Ae(Ae([],H(Xh,g),!0),K(Yh,(function(e){return g(e)?[e+" (moving to premium)"]:[]})),!0))),f=0<l.length,d=0<c.length,m="mobile"===t.theme
function g(e){return Ne(s,e)}(f||d||m)&&(i=m?"\n\nThemes:\n- mobile":"",a=f?"\n\nPlugins:\n- "+l.join("\n- "):"",u=d?"\n\nSettings:\n- "+c.join("\n- "):"",console.warn("The following deprecated features are currently enabled, these will be removed in TinyMCE 6.0. See https://www.tiny.cloud/docs/release-notes/6.0-upcoming-changes/ for more information."+i+a+u))}(g,y),y),this.settings.suffix&&(n.suffix=this.settings.suffix),this.suffix=n.suffix,this.settings.base_url&&n._setBaseUrl(this.settings.base_url),this.baseUri=n.baseURI,this.settings.referrer_policy&&(Za.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),Ya.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),au.languageLoad=this.settings.language_load,au.baseURL=n.baseURL,this.id=e,this.setDirty(!1),this.documentBaseURI=new zd(this.settings.document_base_url,{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=!!this.settings.inline,this.shortcuts=new Tw(this),this.editorCommands=new iw(this),this.settings.cache_suffix&&(xt.cacheSuffix=this.settings.cache_suffix.replace(/^[\?\&]+/,"")),this.ui={registry:{addAutocompleter:(u={},(r={addButton:x(o={},"button"),addGroupToolbarButton:x(o,"grouptoolbarbutton"),addToggleButton:x(o,"togglebutton"),addMenuButton:x(o,"menubutton"),addSplitButton:x(o,"splitbutton"),addMenuItem:x(i={},"menuitem"),addNestedMenuItem:x(i,"nestedmenuitem"),addToggleMenuItem:x(i,"togglemenuitem"),addAutocompleter:x(a={},"autocompleter"),addContextMenu:x(c={},"contextmenu"),addContextToolbar:x(l={},"contexttoolbar"),addContextForm:x(l,"contextform"),addSidebar:x(f={},"sidebar"),addIcon:function(e,t){return u[e.toLowerCase()]=t},getAll:function(){return{buttons:o,menuItems:i,icons:u,popups:a,contextMenus:c,contextToolbars:l,sidebars:f}}}).addAutocompleter),addButton:r.addButton,addContextForm:r.addContextForm,addContextMenu:r.addContextMenu,addContextToolbar:r.addContextToolbar,addIcon:r.addIcon,addMenuButton:r.addMenuButton,addMenuItem:r.addMenuItem,addNestedMenuItem:r.addNestedMenuItem,addSidebar:r.addSidebar,addSplitButton:r.addSplitButton,addToggleButton:r.addToggleButton,addGroupToolbarButton:r.addGroupToolbarButton,addToggleMenuItem:r.addToggleMenuItem,getAll:r.getAll},styleSheetLoader:void 0,show:s,hide:s,enable:s,disable:s,isDisabled:D}
var w,S,E,N,k,_=(N=tu("design"),k=tu({design:{activate:s,deactivate:s,editorReadOnly:!1},readonly:{activate:s,deactivate:s,editorReadOnly:!0}}),(S=w=this).serializer?fw(S):S.on("PreInit",(function(){fw(S)})),(E=w).on("ShowCaret",(function(e){lw(E)&&e.preventDefault()})),E.on("ObjectSelected",(function(e){lw(E)&&e.preventDefault()})),{isReadOnly:function(){return lw(w)},set:function(e){return function(e,t,n,r){if(r!==n.get()){if(!Ne(t,r))throw new Error("Editor mode '"+r+"' is invalid")
e.initialized?Cw(e,n,t,r):e.on("init",(function(){return Cw(e,n,t,r)}))}}(w,k.get(),N,e)},get:function(){return N.get()},register:function(e,t){k.set(function(e,t,n){var r
if(L(kw,t))throw new Error("Cannot override default mode "+t)
return _e(_e({},e),((r={})[t]=_e(_e({},n),{deactivate:function(){try{n.deactivate()}catch(e){console.error("problem while deactivating editor mode "+t+":",e)}}}),r))}(k.get(),e,t))}})
this.mode=_,this.setMode=_.set,n.fire("SetupEditor",{editor:this}),this.execCallback("setup",this),this.$=qa.overrideDefaults((function(){return{context:C.inline?C.getBody():C.getDoc(),element:C.getBody()}}))}function zw(e){var t=e.type
Ww(Zw.get(),(function(n){switch(t){case"scroll":n.fire("ScrollWindow",e)
break
case"resize":n.fire("ResizeWindow",e)}}))}function Hw(e){e!==Yw&&(e?qa(window).on("resize scroll",zw):qa(window).off("resize scroll",zw),Yw=e)}function jw(e){var t=Jw
delete Gw[e.id]
for(var n=0;n<Gw.length;n++)if(Gw[n]===e){Gw.splice(n,1)
break}return Jw=H(Jw,(function(t){return e!==t})),Zw.activeEditor===e&&(Zw.activeEditor=0<Jw.length?Jw[0]:null),Zw.focusedEditor===e&&(Zw.focusedEditor=null),t.length!==Jw.length}var Vw,qw=Ya.DOM,$w=Et.explode,Ww=Et.each,Kw=Et.extend,Xw=0,Yw=!1,Gw=[],Jw=[],Qw="CSS1Compat"!==document.compatMode,Zw=_e(_e({},Sw),{baseURI:null,baseURL:null,defaultSettings:{},documentBaseURL:null,suffix:null,$:qa,majorVersion:"5",minorVersion:"10.0",releaseDate:"2021-10-11",editors:Gw,i18n:iu,activeEditor:null,focusedEditor:null,settings:{},setup:function(){var e,t="",n=zd.getDocumentBaseUrl(document.location);/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/"))
var r=window.tinymce||window.tinyMCEPreInit
if(r)e=r.base||r.baseURL,t=r.suffix
else{for(var o,i=document.getElementsByTagName("script"),a=0;a<i.length;a++)if(""!==(o=i[a].src||"")){var u=o.substring(o.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(o)){-1!==u.indexOf(".min")&&(t=".min"),e=o.substring(0,o.lastIndexOf("/"))
break}}!e&&document.currentScript&&(-1!==(o=document.currentScript.src).indexOf(".min")&&(t=".min"),e=o.substring(0,o.lastIndexOf("/")))}this.baseURL=new zd(n).toAbsolute(e),this.documentBaseURL=n,this.baseURI=new zd(this.baseURL),this.suffix=t,this.on("AddEditor",N(ad,this)),this.on("RemoveEditor",N(ud,this))},overrideDefaults:function(e){var t=e.base_url
t&&this._setBaseUrl(t)
var n=e.suffix
e.suffix&&(this.suffix=n)
var r=(this.defaultSettings=e).plugin_base_urls
void 0!==r&&ne(r,(function(e,t){au.PluginManager.urls[t]=e}))},init:function(e){function t(e){var t=e.id
return t||(t=ue(e,"name").filter((function(e){return!qw.get(e)})).getOrThunk(qw.uniqueId),e.setAttribute("id",t)),t}function n(e,t){return t.constructor===RegExp?t.test(e.className):qw.hasClass(e,t)}var r,o=this,i=Et.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," "),a=function(e){r=e},u=function(){function r(e,t,n){var r=new Fw(e,t,o)
f.push(r),r.on("init",(function(){++l===s.length&&a(f)})),r.targetElm=r.targetElm||n,r.render()}var s,c,l=0,f=[]
qw.unbind(window,"ready",u),(c=e.onpageload)&&c.apply(o,[]),s=qa.unique(function(e){var t=[]
if(xt.browser.isIE()&&xt.browser.version.major<11)return Ob("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[]
if(Qw)return Ob("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]
if(e.types)return Ww(e.types,(function(e){t=t.concat(qw.select(e.selector))})),t
if(e.selector)return qw.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":var r=e.elements||""
0<r.length&&Ww($w(r),(function(e){var n=qw.get(e)
n?t.push(n):Ww(document.forms,(function(n){Ww(n.elements,(function(n){n.name===e&&(e="mce_editor_"+Xw++,qw.setAttrib(n,"id",e),t.push(n))}))}))}))
break
case"textareas":case"specific_textareas":Ww(qw.select("textarea"),(function(r){e.editor_deselector&&n(r,e.editor_deselector)||e.editor_selector&&!n(r,e.editor_selector)||t.push(r)}))}return t}(e)),e.types?Ww(e.types,(function(n){Et.each(s,(function(o){return!qw.is(o,n.selector)||(r(t(o),Kw({},e,n),o),!1)}))})):(Et.each(s,(function(e){var t;(t=o.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(jw(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0)})),0===(s=Et.grep(s,(function(e){return!o.get(e.id)}))).length?a([]):Ww(s,(function(n){var o=n
e.inline&&o.tagName.toLowerCase()in i?Ob("Could not initialize inline editor on invalid inline target element",n):r(t(n),e,n)})))}
return o.settings=e,qw.bind(window,"ready",u),new Er((function(e){r?e(r):a=function(t){e(t)}}))},get:function(e){return 0===arguments.length?Jw.slice(0):v(e)?$(Jw,(function(t){return t.id===e})).getOr(null):E(e)&&Jw[e]||null},add:function(e){var t=this
return Gw[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(Gw[e.id]=e),Gw.push(e),Jw.push(e)),Hw(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),Vw||(Vw=function(e){var n=t.fire("BeforeUnload")
if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",Vw))),e},createEditor:function(e,t){return this.add(new Fw(e,t,this))},remove:function(e){var t,n,r=this
if(e){if(!v(e))return n=e,C(r.get(n.id))?null:(jw(n)&&r.fire("RemoveEditor",{editor:n}),0===Jw.length&&window.removeEventListener("beforeunload",Vw),n.remove(),Hw(0<Jw.length),n)
Ww(qw.select(e),(function(e){(n=r.get(e.id))&&r.remove(n)}))}else for(t=Jw.length-1;0<=t;t--)r.remove(Jw[t])},execCommand:function(e,t,n){var r=this.get(n)
switch(e){case"mceAddEditor":return this.get(n)||new Fw(n,this.settings,this).render(),!0
case"mceRemoveEditor":return r&&r.remove(),!0
case"mceToggleEditor":return r?r.isHidden()?r.show():r.hide():this.execCommand("mceAddEditor",!1,n),!0}return!!this.activeEditor&&this.activeEditor.execCommand(e,t,n)},triggerSave:function(){Ww(Jw,(function(e){e.save()}))},addI18n:function(e,t){iu.add(e,t)},translate:function(e){return iu.translate(e)},setActive:function(e){var t=this.activeEditor
this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl:function(e){this.baseURL=new zd(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new zd(this.baseURL)}})
function eS(e,t,n){var r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,s=t.h,c=(n||"").split("")
return"b"===c[0]&&(o+=s),"r"===c[1]&&(r+=u),"c"===c[0]&&(o+=cS(s/2)),"c"===c[1]&&(r+=cS(u/2)),"b"===c[3]&&(o-=a),"r"===c[4]&&(r-=i),"c"===c[3]&&(o-=cS(a/2)),"c"===c[4]&&(r-=cS(i/2)),nS(r,o,i,a)}function tS(){}function nS(e,t,n,r){return{x:e,y:t,w:n,h:r}}Zw.setup()
var rS,oS,iS,aS,uS=Math.min,sS=Math.max,cS=Math.round,lS={inflate:function(e,t,n){return nS(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:eS,findBestRelativePosition:function(e,t,n,r){for(var o,i=0;i<r.length;i++)if((o=eS(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i]
return null},intersect:function(e,t){var n=sS(e.x,t.x),r=sS(e.y,t.y),o=uS(e.x+e.w,t.x+t.w),i=uS(e.y+e.h,t.y+t.h)
return o-n<0||i-r<0?null:nS(n,r,o-n,i-r)},clamp:function(e,t,n){var r=e.x,o=e.y,i=e.x+e.w,a=e.y+e.h,u=t.x+t.w,s=t.y+t.h,c=sS(0,t.x-r),l=sS(0,t.y-o),f=sS(0,i-u),d=sS(0,a-s)
return r+=c,o+=l,n&&(i+=c,a+=l,r-=f,o-=d),nS(r,o,(i-=f)-r,(a-=d)-o)},create:nS,fromClientRect:function(e){return nS(e.left,e.top,e.width,e.height)}},fS=(rS={},oS={},{load:function(e,t){var n='Script at URL "'+t+'" failed to load',r='Script at URL "'+t+"\" did not call `tinymce.Resource.add('"+e+"', data)` within 1 second"
if(void 0!==rS[e])return rS[e]
var o=new Er((function(o,i){var a=function(e,t,n){function r(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
o||(o=!0,null!==i&&(clearTimeout(i),i=null),e.apply(null,t))}}void 0===n&&(n=1e3)
var o=!1,i=null,a=r(e),u=r(t)
return{start:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
o||null!==i||(i=setTimeout((function(){return u.apply(null,e)}),n))},resolve:a,reject:u}}(o,i)
oS[e]=a.resolve,Za.ScriptLoader.loadScript(t,(function(){return a.start(r)}),(function(){return a.reject(n)}))}))
return rS[e]=o},add:function(e,t){void 0!==oS[e]&&(oS[e](t),delete oS[e]),rS[e]=Er.resolve(t)}}),dS=Et.each,mS=Et.extend
tS.extend=iS=function(e){function t(){var e,t,n
if(!aS&&(this.init&&this.init.apply(this,arguments),t=this.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(this,arguments)}function n(){return this}var r=this.prototype
aS=!0
var o=new this
return aS=!1,e.Mixins&&(dS(e.Mixins,(function(t){for(var n in t)"init"!==n&&(e[n]=t[n])})),r.Mixins&&(e.Mixins=r.Mixins.concat(e.Mixins))),e.Methods&&dS(e.Methods.split(","),(function(t){e[t]=n})),e.Properties&&dS(e.Properties.split(","),(function(t){var n="_"+t
e[t]=function(e){return void 0!==e?(this[n]=e,this):this[n]}})),e.Statics&&dS(e.Statics,(function(e,n){t[n]=e})),e.Defaults&&r.Defaults&&(e.Defaults=mS({},r.Defaults,e.Defaults)),ne(e,(function(e,t){var n,i
"function"==typeof e&&r[t]?o[t]=(n=t,i=e,function(){var e=this._super
this._super=r[n]
var t=i.apply(this,arguments)
return this._super=e,t}):o[t]=e})),t.prototype=o,(t.constructor=t).extend=iS,t}
var gS,pS,hS,vS=Math.min,bS=Math.max,yS=Math.round,CS={serialize:function(e){var t=JSON.stringify(e)
return v(t)?t.replace(/[\u0080-\uFFFF]/g,(function(e){var t=e.charCodeAt(0).toString(16)
return"\\u"+"0000".substring(t.length)+t})):t},parse:function(e){try{return JSON.parse(e)}catch(e){}}},xS={callbacks:{},count:0,send:function(e){var t=this,n=Ya.DOM,r=(void 0!==e.count?e:t).count,o="tinymce_jsonp_"+r
t.callbacks[r]=function(i){n.remove(o),delete t.callbacks[r],e.callback(i)},n.add(n.doc.body,"script",{id:o,src:e.url,type:"text/javascript"}),t.count++}},wS=_e(_e({},Sw),{send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||1e4<n++?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,1e4<n?"TIMED_OUT":"GENERAL",t,e),t=null):Nr.setTimeout(r,10)}
if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",wS.fire("beforeInitialize",{settings:e}),(t=new XMLHttpRequest).overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&Et.each(e.requestheaders,(function(e){t.setRequestHeader(e.key,e.value)})),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=wS.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r()
Nr.setTimeout(r,10)}}),SS=Et.extend,ES=(NS.sendRPC=function(e){return(new NS).send(e)},NS.prototype.send=function(e){var t=e.error,n=e.success,r=SS(this.settings,e)
r.success=function(e,o){(e=void 0===(e=CS.parse(e))?{error:"JSON Parse error."}:e).error?t.call(r.error_scope||r.scope,e.error,o):n.call(r.success_scope||r.scope,e.result)},r.error=function(e,n){t&&t.call(r.error_scope||r.scope,e,n)},r.data=CS.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params}),r.content_type="application/json",wS.send(r)},NS)
function NS(e){this.settings=SS({},e),this.count=0}try{var kS,_S="__storage_test__";(kS=window.localStorage).setItem(_S,_S),kS.removeItem(_S)}catch(r){gS={},pS=[],hS={getItem:function(e){return gS[e]||null},setItem:function(e,t){pS.push(e),gS[e]=String(t)},key:function(e){return pS[e]},removeItem:function(e){pS=pS.filter((function(t){return t===e})),delete gS[e]},clear:function(){pS=[],gS={}},length:0},Object.defineProperty(hS,"length",{get:function(){return pS.length},configurable:!1,enumerable:!1}),kS=hS}var AS={geom:{Rect:lS},util:{Promise:Er,Delay:Nr,Tools:Et,VK:_f,URI:zd,Class:tS,EventDispatcher:gw,Observable:Sw,I18n:iu,XHR:wS,JSON:CS,JSONRequest:ES,JSONP:xS,LocalStorage:kS,Color:function(e){function t(e){var t
return"object"==typeof e?"r"in e?(r=e.r,o=e.g,i=e.b):"v"in e&&function(e,t,n){if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,n=parseInt(n,10)/100,t=bS(0,vS(t,1)),n=bS(0,vS(n,1)),0!==t){var a=e/60,u=n*t,s=u*(1-Math.abs(a%2-1)),c=n-u
switch(Math.floor(a)){case 0:r=u,o=s,i=0
break
case 1:r=s,o=u,i=0
break
case 2:r=0,o=u,i=s
break
case 3:r=0,o=s,i=u
break
case 4:r=s,o=0,i=u
break
case 5:r=u,o=0,i=s
break
default:r=o=i=0}r=yS(255*(r+c)),o=yS(255*(o+c)),i=yS(255*(i+c))}else r=o=i=yS(255*n)}(e.h,e.s,e.v):(t=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(r=parseInt(t[1],10),o=parseInt(t[2],10),i=parseInt(t[3],10)):(t=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(r=parseInt(t[1],16),o=parseInt(t[2],16),i=parseInt(t[3],16)):(t=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(r=parseInt(t[1]+t[1],16),o=parseInt(t[2]+t[2],16),i=parseInt(t[3]+t[3],16)),r=r<0?0:255<r?255:r,o=o<0?0:255<o?255:o,i=i<0?0:255<i?255:i,n}var n={},r=0,o=0,i=0
return e&&t(e),n.toRgb=function(){return{r:r,g:o,b:i}},n.toHsv=function(){return e=r,t=o,n=i,u=0,(s=vS(e/=255,vS(t/=255,n/=255)))===(c=bS(e,bS(t,n)))?{h:0,s:0,v:100*(u=s)}:(a=(c-s)/c,{h:yS(60*((e===s?3:n===s?1:5)-(e===s?t-n:n===s?e-t:n-e)/((u=c)-s))),s:yS(100*a),v:yS(100*u)})
var e,t,n,a,u,s,c},n.toHex=function(){function e(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e}return"#"+e(r)+e(o)+e(i)},n.parse=t,n},ImageUploader:function(e){var t=pv(),n=yv(e,t)
return{upload:function(t,r){return n.upload(t,(r=void 0===r||r)?bv(e):void 0)}}}},dom:{EventUtils:oi,Sizzle:oa,DomQuery:qa,TreeWalker:_r,TextSeeker:wu,DOMUtils:Ya,ScriptLoader:Za,RangeUtils:kf,Serializer:Nh,StyleSheetLoader:xr,ControlSelection:gf,BookmarkManager:Bl,Selection:hh,Event:oi.Event},html:{Styles:to,Entities:Xo,Node:Od,Schema:Zr,SaxParser:Vd,DomParser:Sh,Writer:Xd,Serializer:Yd},Env:xt,AddOnManager:au,Annotator:Ol,Formatter:Ev,UndoManager:kv,EditorCommands:iw,WindowManager:cv,NotificationManager:Ih,EditorObservable:Nw,Shortcuts:Tw,Editor:Fw,FocusManager:Ad,EditorManager:Zw,DOM:Ya.DOM,ScriptLoader:Za.ScriptLoader,PluginManager:uv,ThemeManager:sv,IconManager:nv,Resource:fS,trim:Et.trim,isArray:Et.isArray,is:Et.is,toArray:Et.toArray,makeMap:Et.makeMap,each:Et.each,map:Et.map,grep:Et.grep,inArray:Et.inArray,extend:Et.extend,create:Et.create,walk:Et.walk,createNS:Et.createNS,resolve:Et.resolve,explode:Et.explode,_addCacheSuffix:Et._addCacheSuffix,isOpera:xt.opera,isWebKit:xt.webkit,isIE:xt.ie,isGecko:xt.gecko,isMac:xt.mac},RS=Et.extend(Zw,AS),DS=RS
window.tinymce=DS,window.tinyMCE=DS,function(e){if("object"==typeof module)try{module.exports=e}catch(e){}}(RS)}()
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
return e.apply(null,o)}}var d,m,p,g=function(e){return function(t){return!e(t)}},h=function(e){return function(){throw new Error(e)}},v=c(!1),y=c(!0),b=function(){return C},C=(d=function(e){return e.isNone()},{fold:function(e,t){return e()},is:v,isSome:v,isNone:y,getOr:p=function(e){return e},getOrThunk:m=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(void 0),or:p,orThunk:m,map:b,each:u,bind:b,exists:v,forall:y,filter:b,equals:d,equals_:d,toArray:function(){return[]},toString:c("none()")}),w=function(e){var t=c(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:y,isNone:v,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return w(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:C},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(v,(function(t){return n(e,t)}))}}
return o},x={some:w,none:b,from:function(e){return null==e?C:w(e)}},S=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},N=function(e){return function(t){return typeof t===e}},E=function(e){return function(t){return e===t}},k=S("string"),_=S("object"),R=S("array"),A=E(null),T=N("boolean"),O=E(void 0),B=function(e){return!(null===(t=e)||void 0===t)
var t},P=N("function"),D=N("number"),L=Array.prototype.slice,I=Array.prototype.indexOf,M=Array.prototype.push,F=function(e,t){return I.call(e,t)},U=function(e,t){return-1<F(e,t)},z=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0
return!1},j=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},H=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},V=function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n)},q=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n},$=function(e,t,n){return V(e,(function(e){n=t(n,e)})),n},W=function(e,t,n){return H(e,(function(e){n=t(n,e)})),n},K=function(e,t){return function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return x.some(i)
if(n(i,r))break}return x.none()}(e,t,v)},X=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return x.some(n)
return x.none()},Y=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!R(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
M.apply(t,e[n])}return t}(j(e,t))},G=function(e,t){for(var n=0,r=e.length;n<r;++n)if(!0!==t(e[n],n))return!1
return!0},J=function(e){var t=L.call(e,0)
return t.reverse(),t},Q=function(e,t){return q(e,(function(e){return!U(t,e)}))},Z=function(e){return 0===e.length?x.none():x.some(e[0])},ee=function(e){return 0===e.length?x.none():x.some(e[e.length-1])},te=P(Array.from)?Array.from:function(e){return L.call(e)},ne=Object.keys,re=Object.hasOwnProperty,oe=function(e,t){for(var n=ne(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}},ie=function(e,t){return ae(e,(function(e,n){return{k:n,v:t(e,n)}}))},ae=function(e,t){var n={}
return oe(e,(function(e,r){var o=t(e,r)
n[o.k]=o.v})),n},ue=function(e){return function(t,n){e[n]=t}},se=function(e,t,n,r){return oe(e,(function(e,o){(t(e,o)?n:r)(e,o)})),{}},ce=function(e,t){var n={},r={}
return se(e,t,ue(n),ue(r)),{t:n,f:r}},le=function(e,t){var n={}
return se(e,t,ue(n),u),n},fe=function(e,t){return de(e,t)?x.from(e[t]):x.none()},de=function(e,t){return re.call(e,t)},me=Array.isArray,pe=function(e,t,n){var r,o
if(!e)return!1
if(n=n||e,void 0!==e.length){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return!1}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return!1
return!0},ge=function(e,t){var n=[]
return pe(e,(function(r,o){n.push(t(r,o,e))})),n},he=function(e,t){var n=[]
return pe(e,(function(r,o){t&&!t(r,o,e)||n.push(r)})),n},ve=function(e,t){if(e)for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},ye=function(e,t,n,r){for(var o=O(n)?e[0]:n,i=0;i<e.length;i++)o=t.call(r,o,e[i],i)
return o},be=function(e,t,n){for(var r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r
return-1},Ce=function(e){return e[e.length-1]},we=function(){return(we=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function xe(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),o=0
for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a]
return r}var Se,Ne,Ee,ke,_e,Re,Ae=function(){return Te(0,0)},Te=function(e,t){return{major:e,minor:t}},Oe=function(e,t){var n=String(t).toLowerCase()
return 0===e.length?Ae():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,t)
if(!n)return{major:0,minor:0}
var r=function(e){return Number(t.replace(n,"$"+e))}
return Te(r(1),r(2))}(e,n)},Be=Ae,Pe=function(e,t){var n=String(t).toLowerCase()
return K(e,(function(e){return e.search(n)}))},De=function(e,t){return-1!==e.indexOf(t)},Le=function(e,t){return n=e,0,""===(r=t)||n.length>=r.length&&n.substr(0,0+r.length)===r
var n,r},Ie=function(e){return function(t){return t.replace(e,"")}},Me=Ie(/^\s+|\s+$/g),Fe=Ie(/^\s+/g),Ue=Ie(/\s+$/g),ze=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,je=function(e){return function(t){return De(t,e)}},He=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return De(e,"edge/")&&De(e,"chrome")&&De(e,"safari")&&De(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,ze],search:function(e){return De(e,"chrome")&&!De(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return De(e,"msie")||De(e,"trident")}},{name:"Opera",versionRegexes:[ze,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:je("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:je("firefox")},{name:"Safari",versionRegexes:[ze,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(De(e,"safari")||De(e,"mobile/"))&&De(e,"applewebkit")}}],Ve=[{name:"Windows",search:je("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return De(e,"iphone")||De(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:je("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:je("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:je("linux"),versionRegexes:[]},{name:"Solaris",search:je("sunos"),versionRegexes:[]},{name:"FreeBSD",search:je("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:je("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],qe={browsers:c(He),oses:c(Ve)},$e="Firefox",We=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isEdge:r("Edge"),isChrome:r("Chrome"),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r($e),isSafari:r("Safari")}},Ke=function(){return We({current:void 0,version:Be()})},Xe=We,Ye=(c("Edge"),c("Chrome"),c("IE"),c("Opera"),c($e),c("Safari"),"Windows"),Ge="Android",Je="Solaris",Qe="FreeBSD",Ze="ChromeOS",et=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isWindows:r(Ye),isiOS:r("iOS"),isAndroid:r(Ge),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(Je),isFreeBSD:r(Qe),isChromeOS:r(Ze)}},tt=function(){return et({current:void 0,version:Be()})},nt=et,rt=(c(Ye),c("iOS"),c(Ge),c("Linux"),c("OSX"),c(Je),c(Qe),c(Ze),function(e,t){var n,r,o,i,a,u,s,l,f,d,m,p,g=qe.browsers(),h=qe.oses(),v=function(e,t){return Pe(e,t).map((function(e){var n=Oe(e.versionRegexes,t)
return{current:e.name,version:n}}))}(g,e).fold(Ke,Xe),y=function(e,t){return Pe(e,t).map((function(e){var n=Oe(e.versionRegexes,t)
return{current:e.name,version:n}}))}(h,e).fold(tt,nt)
return{browser:v,os:y,deviceType:(r=v,o=e,i=t,a=(n=y).isiOS()&&!0===/ipad/i.test(o),u=n.isiOS()&&!a,s=n.isiOS()||n.isAndroid(),l=s||i("(pointer:coarse)"),f=a||!u&&s&&i("(min-device-width:768px)"),d=u||s&&!f,m=r.isSafari()&&n.isiOS()&&!1===/safari/i.test(o),p=!d&&!f&&!m,{isiPad:c(a),isiPhone:c(u),isTablet:c(f),isPhone:c(d),isTouch:c(l),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:c(m),isDesktop:c(p)})}}),ot=function(e){return window.matchMedia(e).matches},it=(Ee=!(Se=function(){return rt(navigator.userAgent,ot)}),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return Ee||(Ee=!0,Ne=Se.apply(null,e)),Ne}),at=function(){return it()},ut=navigator.userAgent,st=at(),ct=st.browser,lt=st.os,ft=st.deviceType,dt=/WebKit/.test(ut)&&!ct.isEdge(),mt="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,pt=-1!==ut.indexOf("Windows Phone"),gt={opera:ct.isOpera(),webkit:dt,ie:!(!ct.isIE()&&!ct.isEdge())&&ct.version.major,gecko:ct.isFirefox(),mac:lt.isOSX()||lt.isiOS(),iOS:ft.isiPad()||ft.isiPhone(),android:lt.isAndroid(),contentEditable:!0,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:!0,range:window.getSelection&&"Range"in window,documentMode:ct.isIE()?document.documentMode||7:10,fileApi:mt,ceFalse:!0,cacheSuffix:null,container:null,experimentalShadowDom:!1,canHaveCSP:!ct.isIE(),desktop:ft.isDesktop(),windowsPhone:pt,browser:{current:ct.current,version:ct.version,isChrome:ct.isChrome,isEdge:ct.isEdge,isFirefox:ct.isFirefox,isIE:ct.isIE,isOpera:ct.isOpera,isSafari:ct.isSafari},os:{current:lt.current,version:lt.version,isAndroid:lt.isAndroid,isChromeOS:lt.isChromeOS,isFreeBSD:lt.isFreeBSD,isiOS:lt.isiOS,isLinux:lt.isLinux,isOSX:lt.isOSX,isSolaris:lt.isSolaris,isWindows:lt.isWindows},deviceType:{isDesktop:ft.isDesktop,isiPad:ft.isiPad,isiPhone:ft.isiPhone,isPhone:ft.isPhone,isTablet:ft.isTablet,isTouch:ft.isTouch,isWebView:ft.isWebView}},ht=/^\s*|\s*$/g,vt=function(e){return null==e?"":(""+e).replace(ht,"")},yt=function(e,t){return t?!("array"!==t||!me(e))||typeof e===t:void 0!==e},bt=function(e,t,n,r){r=r||this,e&&(n&&(e=e[n]),pe(e,(function(e,o){return!1!==t.call(r,e,o,n)&&void bt(e,t,n,r)})))},Ct={trim:vt,isArray:me,is:yt,toArray:function(e){if(me(e))return e
for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n]
return t},makeMap:function(e,t,n){var r
for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={}
return n},each:pe,map:ge,grep:he,inArray:ve,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=0;r<t.length;r++){var o,i=t[r]
for(var a in i)!i.hasOwnProperty(a)||void 0!==(o=i[a])&&(e[a]=o)}return e},create:function(e,t,n){var r,o,i,a=this,u=0,s=(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],c=a.createNS(e[3].replace(/\.\w+$/,""),n)
if(!c[s]){if("static"===e[2])return c[s]=t,void(this.onCreate&&this.onCreate(e[2],e[3],c[s]))
t[s]||(t[s]=function(){},u=1),c[s]=t[s],a.extend(c[s].prototype,t),e[5]&&(r=a.resolve(e[5]).prototype,o=e[5].match(/\.(\w+)$/i)[1],i=c[s],c[s]=u?function(){return r[o].apply(this,arguments)}:function(){return this.parent=r[o],i.apply(this,arguments)},c[s].prototype[s]=c[s],a.each(r,(function(e,t){c[s].prototype[t]=r[t]})),a.each(t,(function(e,t){r[t]?c[s].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==s&&(c[s].prototype[t]=e)}))),a.each(t.static,(function(e,t){c[s][t]=e}))}},walk:bt,createNS:function(e,t){var n,r
for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r]
return t},resolve:function(e,t){var n,r
for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||yt(e,"array")?e:ge(e.split(t||","),vt)},_addCacheSuffix:function(e){var t=gt.cacheSuffix
return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},wt=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},xt=function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return wt(n.childNodes[0])},St=function(e,t){var n=(t||document).createElement(e)
return wt(n)},Nt=function(e,t){var n=(t||document).createTextNode(e)
return wt(n)},Et=wt,kt=function(e,t){for(var n=[],r=function(e){return n.push(e),t(e)},o=t(e);(o=o.bind(r)).isSome(););return n},_t=function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},Rt=function(e){return 1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount},At=function(e,t){return e.dom===t.dom},Tt=function(e,t){return at().browser.isIE()?function(e,t){return n=e.dom,r=t.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(n.compareDocumentPosition(r)&o)
var n,r,o}(e,t):(n=t,(r=e.dom)!==(o=n.dom)&&r.contains(o))
var n,r,o},Ot=("undefined"!=typeof window||Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Bt=function(e){return e.dom.nodeType},Pt=function(e){return function(t){return Bt(t)===e}},Dt=Pt(1),Lt=Pt(3),It=Pt(9),Mt=Pt(11),Ft=function(e){return Et(e.dom.ownerDocument)},Ut=function(e){return It(e)?e:Ft(e)},zt=function(e){return Et(Ut(e).dom.defaultView)},jt=function(e){return x.from(e.dom.parentNode).map(Et)},Ht=function(e){return x.from(e.dom.previousSibling).map(Et)},Vt=function(e){return x.from(e.dom.nextSibling).map(Et)},qt=function(e){return J(kt(e,Ht))},$t=function(e){return kt(e,Vt)},Wt=function(e){return j(e.dom.childNodes,Et)},Kt=function(e,t){var n=e.dom.childNodes
return x.from(n[t]).map(Et)},Xt=function(e){return Kt(e,0)},Yt=function(e){return Kt(e,e.dom.childNodes.length-1)},Gt=function(e){return Mt(e)},Jt=P(Element.prototype.attachShadow)&&P(Node.prototype.getRootNode),Qt=c(Jt),Zt=Jt?function(e){return Et(e.dom.getRootNode())}:Ut,en=function(e){return Gt(e)?e:function(e){var t=e.dom.head
if(null==t)throw new Error("Head is not available yet")
return Et(t)}(Ut(e))},tn=function(e){return Et(e.dom.host)},nn=function(e,t){jt(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},rn=function(e,t){Vt(e).fold((function(){jt(e).each((function(e){an(e,t)}))}),(function(e){nn(e,t)}))},on=function(e,t){Xt(e).fold((function(){an(e,t)}),(function(n){e.dom.insertBefore(t.dom,n.dom)}))},an=function(e,t){e.dom.appendChild(t.dom)},un=function(e,t){H(t,(function(t){an(e,t)}))},sn=function(e){e.dom.textContent="",H(Wt(e),(function(e){cn(e)}))},cn=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},ln=function(e){var t,n=Wt(e)
0<n.length&&(t=e,H(n,(function(e){nn(t,e)}))),cn(e)},fn=function(e){var t=Lt(e)?e.dom.parentNode:e.dom
if(null==t||null===t.ownerDocument)return!1
var n,r,o,i,a=t.ownerDocument
return o=Et(t),i=Zt(o),(Gt(i)?x.some(i):x.none()).fold((function(){return a.body.contains(t)}),(n=fn,r=tn,function(e){return n(r(e))}))},dn=function(e,t){return{left:e,top:t,translate:function(n,r){return dn(e+n,t+r)}}},mn=dn,pn=function(e,t){return void 0!==e?e:void 0!==t?t:0},gn=function(e){var t,n=e.dom,r=n.ownerDocument.body
return r===n?mn(r.offsetLeft,r.offsetTop):fn(e)?(t=n.getBoundingClientRect(),mn(t.left,t.top)):mn(0,0)},hn=function(e){var t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop
return mn(n,r)},vn=function(e,t,n){var r=(void 0!==n?n.dom:document).defaultView
r&&r.scrollTo(e,t)},yn=function(e,t){at().browser.isSafari()&&P(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)},bn=function(e,t,n,r){return{x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}},Cn=function(e){var t,n,r=void 0===e?window:e,o=r.document,i=hn(Et(o))
return n=void 0===(t=r)?window:t,x.from(n.visualViewport).fold((function(){var e=r.document.documentElement,t=e.clientWidth,n=e.clientHeight
return bn(i.left,i.top,t,n)}),(function(e){return bn(Math.max(e.pageLeft,i.left),Math.max(e.pageTop,i.top),e.width,e.height)}))},wn=function(e){return function(t){return!!t&&t.nodeType===e}},xn=function(e){return!!e&&!Object.getPrototypeOf(e)},Sn=wn(1),Nn=function(e){var t=e.map((function(e){return e.toLowerCase()}))
return function(e){if(e&&e.nodeName){var n=e.nodeName.toLowerCase()
return U(t,n)}return!1}},En=function(e,t){var n=t.toLowerCase().split(" ")
return function(t){var r
if(Sn(t))for(r=0;r<n.length;r++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
if((o?o.getPropertyValue(e):null)===n[r])return!0}return!1}},kn=function(e){return function(t){return Sn(t)&&t.hasAttribute(e)}},_n=function(e){return Sn(e)&&e.hasAttribute("data-mce-bogus")},Rn=function(e){return Sn(e)&&"TABLE"===e.tagName},An=function(e){return function(t){if(Sn(t)){if(t.contentEditable===e)return!0
if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}},Tn=Nn(["textarea","input"]),On=wn(3),Bn=wn(8),Pn=wn(9),Dn=wn(11),Ln=Nn(["br"]),In=Nn(["img"]),Mn=An("true"),Fn=An("false"),Un=Nn(["td","th"]),zn=Nn(["video","audio","object","embed"]),jn=function(e){return void 0!==e.style&&P(e.style.getPropertyValue)},Hn=function(e,t,n){if(!(k(n)||T(n)||D(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")},Vn=function(e,t,n){Hn(e.dom,t,n)},qn=function(e,t){var n=e.dom
oe(t,(function(e,t){Hn(n,t,e)}))},$n=function(e,t){var n=e.dom.getAttribute(t)
return null===n?void 0:n},Wn=function(e,t){e.dom.removeAttribute(t)},Kn=function(e,t){var n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t)
return""!==r||fn(e)?r:Xn(n,t)},Xn=function(e,t){return jn(e)?e.style.getPropertyValue(t):""},Yn=function(e,t){var n=e.dom,r=Xn(n,t)
return x.from(r).filter((function(e){return 0<e.length}))},Gn=function(e){var t={},n=e.dom
if(jn(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r)
t[o]=n.style[o]}return t},Jn=at().browser,Qn=function(e){return K(e,Dt)},Zn=function(e,t){return e.children&&U(e.children,t)},er={},tr={exports:er}
ke=void 0,_e=er,Re=tr,function(e){"object"==typeof _e&&void 0!==Re?Re.exports=e():"function"==typeof ke&&ke.amd?ke([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=e()}((function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s=!1
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
var nr=tr.exports.boltExport,rr=function(e){var t=x.none(),n=[],r=function(e){o()?i(e):n.push(e)},o=function(){return t.isSome()},i=function(e){t.each((function(t){setTimeout((function(){e(t)}),0)}))}
return e((function(e){o()||(t=x.some(e),function(e){H(e,i)}(n),n=[])})),{get:r,map:function(e){return rr((function(t){r((function(n){t(e(n))}))}))},isReady:o}},or={nu:rr,pure:function(e){return rr((function(t){t(e)}))}},ir=function(e){setTimeout((function(){throw e}),0)},ar=function(e){var t=function(t){e().then(t,ir)}
return{map:function(t){return ar((function(){return e().then(t)}))},bind:function(t){return ar((function(){return e().then((function(e){return t(e).toPromise()}))}))},anonBind:function(t){return ar((function(){return e().then((function(){return t.toPromise()}))}))},toLazy:function(){return or.nu(t)},toCached:function(){var t=null
return ar((function(){return null===t&&(t=e()),t}))},toPromise:e,get:t}},ur=function(e){return ar((function(){return new nr(e)}))},sr=function(e){return{is:function(t){return e===t},isValue:y,isError:v,getOr:c(e),getOrThunk:c(e),getOrDie:c(e),or:function(t){return sr(e)},orThunk:function(t){return sr(e)},fold:function(t,n){return n(e)},map:function(t){return sr(t(e))},mapError:function(t){return sr(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOptional:function(){return x.some(e)}}},cr=function(e){return{is:v,isValue:v,isError:y,getOr:l,getOrThunk:function(e){return e()},getOrDie:function(){return h(String(e))()},or:function(e){return e},orThunk:function(e){return e()},fold:function(t,n){return t(e)},map:function(t){return cr(e)},mapError:function(t){return cr(t(e))},each:u,bind:function(t){return cr(e)},exists:v,forall:y,toOptional:x.none}},lr={value:sr,error:cr,fromOption:function(e,t){return e.fold((function(){return cr(t)}),sr)}},fr=function(e){if(!R(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
return H(e,(function(r,o){var i=ne(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],u=r[a]
if(void 0!==n[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!R(u))throw new Error("case arguments must be an array")
t.push(a),n[a]=function(){var n=arguments.length
if(n!==u.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+u.length+" ("+u+"), got "+n)
for(var r=new Array(n),i=0;i<r.length;i++)r[i]=arguments[i]
return{fold:function(){if(arguments.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+arguments.length)
return arguments[o].apply(null,r)},match:function(e){var n=ne(e)
if(t.length!==n.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+n.join(","))
if(!G(t,(function(e){return U(n,e)})))throw new Error("Not all branches were specified when using match. Specified: "+n.join(", ")+"\nRequired: "+t.join(", "))
return e[a].apply(null,r)},log:function(e){console.log(e,{constructors:t,constructor:a,params:r})}}}})),n},dr=(fr([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(e){return e.fold(l,l)})
function mr(e,t,n,r,o){return e(n,r)?x.some(n):P(o)&&o(n)?x.none():t(n,r,o)}var pr,gr,hr,vr,yr=function(e,t,n){for(var r=e.dom,o=P(n)?n:v;r.parentNode;){r=r.parentNode
var i=Et(r)
if(t(i))return x.some(i)
if(o(i))break}return x.none()},br=function(e,t,n){return mr((function(e,t){return t(e)}),yr,e,t,n)},Cr=function(e,t,n){return yr(e,(function(e){return _t(e,t)}),n)},wr=function(e,t){return n=t,o=void 0===(r=e)?document:r.dom,Rt(o)?x.none():x.from(o.querySelector(n)).map(Et)
var n,r,o},xr=function(e,t,n){return mr(_t,Cr,e,t,n)},Sr=window.Promise?window.Promise:(pr=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},hr=(gr=function(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=null,this._value=null,this._deferreds=[],Tr(e,Nr(kr,this),Nr(_r,this))}).immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)},gr.prototype.catch=function(e){return this.then(null,e)},gr.prototype.then=function(e,t){var n=this
return new gr((function(r,o){Er.call(n,new Ar(e,t,r,o))}))},gr.all=function(){var t=Array.prototype.slice.call(1===arguments.length&&pr(arguments[0])?arguments[0]:arguments)
return new gr((function(n,r){if(0===t.length)return n([])
for(var o=t.length,i=0;i<t.length;i++)!function i(a,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var s=u.then
if("function"==typeof s)return void s.call(u,(function(e){i(a,e)}),r)}t[a]=u,0==--o&&n(t)}catch(e){r(e)}}(i,t[i])}))},gr.resolve=function(e){return e&&"object"==typeof e&&e.constructor===gr?e:new gr((function(t){t(e)}))},gr.reject=function(e){return new gr((function(t,n){n(e)}))},gr.race=function(e){return new gr((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},gr)
function Nr(e,t){return function(){e.apply(t,arguments)}}function Er(e){var t=this
null!==this._state?hr((function(){var n,r=t._state?e.onFulfilled:e.onRejected
if(null!==r){try{n=r(t._value)}catch(m){return void e.reject(m)}e.resolve(n)}else(t._state?e.resolve:e.reject)(t._value)})):this._deferreds.push(e)}function kr(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.")
if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then
if("function"==typeof t)return void Tr(Nr(t,e),Nr(kr,this),Nr(_r,this))}this._state=!0,this._value=e,Rr.call(this)}catch(m){_r.call(this,m)}}function _r(e){this._state=!1,this._value=e,Rr.call(this)}function Rr(){for(var e=0,t=this._deferreds.length;e<t;e++)Er.call(this,this._deferreds[e])
this._deferreds=null}function Ar(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function Tr(e,t,n){var r=!1
try{e((function(e){r||(r=!0,t(e))}),(function(e){r||(r=!0,n(e))}))}catch(l){if(r)return
r=!0,n(l)}}var Or=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},Br=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},Pr=function(e,t){var n,r=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
clearTimeout(n),n=Or((function(){e.apply(this,r)}),t)}
return r.stop=function(){clearTimeout(n)},r},Dr={requestAnimationFrame:function(e,t){vr?vr.then(e):vr=new Sr((function(e){!function(e,t){for(var n=window.requestAnimationFrame,r=["ms","moz","webkit"],o=0;o<r.length&&!n;o++)n=window[r[o]+"RequestAnimationFrame"];(n=n||function(e){window.setTimeout(e,0)})(e,t)}(e,t=t||document.body)})).then(e)},setTimeout:Or,setInterval:Br,setEditorTimeout:function(e,t,n){return Or((function(){e.removed||t()}),n)},setEditorInterval:function(e,t,n){var r=Br((function(){e.removed?clearInterval(r):t()}),n)
return r},debounce:Pr,throttle:Pr,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}}
function Lr(e,t){void 0===t&&(t={})
var n=0,r={},o=Et(e),i=Ut(o),a=t.maxLoadTime||5e3,u=function(u,s,c){var l,f=Ct._addCacheSuffix(u),d=fe(r,f).getOrThunk((function(){return{id:"mce-u"+n++,passed:[],failed:[],count:0}}));(r[f]=d).count++
var m,p,g,h=function(e,t){for(var n=e.length;n--;)e[n]()
d.status=t,d.passed=[],d.failed=[],l&&(l.onload=null,l.onerror=null,l=null)},v=function(){return h(d.passed,2)},y=function(){return h(d.failed,3)},b=function(){var t
t=b,function(){for(var t=e.styleSheets,n=t.length;n--;){var r=t[n].ownerNode
if(r&&r.id===l.id)return v(),1}}()||(Date.now()-p<a?Dr.setTimeout(t):y())}
s&&d.passed.push(s),c&&d.failed.push(c),1!==d.status&&(2!==d.status?3!==d.status?(d.status=1,m=St("link",i.dom),qn(m,{rel:"stylesheet",type:"text/css",id:d.id}),p=Date.now(),t.contentCssCors&&Vn(m,"crossOrigin","anonymous"),t.referrerPolicy&&Vn(m,"referrerpolicy",t.referrerPolicy),(l=m.dom).onload=b,l.onerror=y,g=m,an(en(o),g),Vn(m,"href",f)):y():v())},l=function(e){return ur((function(t){u(e,s(t,c(lr.value(e))),s(t,c(lr.error(e))))}))},f=function(e){var t=Ct._addCacheSuffix(e)
fe(r,t).each((function(e){var n,i
0==--e.count&&(delete r[t],n=e.id,i=en(o),wr(i,"#"+n).each(cn))}))}
return{load:u,loadAll:function(e,t,n){(function(e,t){return t((function(t){var n=[],r=0
0===e.length?t([]):H(e,(function(o,i){var a
o.get((a=i,function(o){n[a]=o,++r>=e.length&&t(n)}))}))}))})(j(e,l),ur).get((function(e){var r=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a)?n:r).push(a)}return{pass:n,fail:r}}(e,(function(e){return e.isValue()}))
0<r.fail.length?n(r.fail.map(dr)):t(r.pass.map(dr))}))},unload:f,unloadAll:function(e){H(e,(function(e){f(e)}))},_setReferrerPolicy:function(e){t.referrerPolicy=e}}}var Ir,Mr=(Ir=new WeakMap,{forElement:function(e,t){var n=Zt(e).dom
return x.from(Ir.get(n)).getOrThunk((function(){var e=Lr(n,t)
return Ir.set(n,e),e}))}}),Fr=(Ur.prototype.current=function(){return this.node},Ur.prototype.next=function(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node},Ur.prototype.prev=function(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node},Ur.prototype.prev2=function(e){return this.node=this.findPreviousNode(this.node,"lastChild","previousSibling",e),this.node},Ur.prototype.findSibling=function(e,t,n,r){var o,i
if(e){if(!r&&e[t])return e[t]
if(e!==this.rootNode){if(o=e[n])return o
for(i=e.parentNode;i&&i!==this.rootNode;i=i.parentNode)if(o=i[n])return o}}},Ur.prototype.findPreviousNode=function(e,t,n,r){var o,i,a
if(e){if(o=e[n],this.rootNode&&o===this.rootNode)return
if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a
return o}if((i=e.parentNode)&&i!==this.rootNode)return i}},Ur)
function Ur(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}var zr=function(e){var t
return function(n){return(t=t||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r]
n[String(i)]=t(i,r)}return n}(e,y)).hasOwnProperty(Ot(n))}},jr=zr(["h1","h2","h3","h4","h5","h6"]),Hr=zr(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),Vr=function(e){return Dt(e)&&!Hr(e)},qr=function(e){return Dt(e)&&"br"===Ot(e)},$r=zr(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),Wr=zr(["ul","ol","dl"]),Kr=zr(["li","dd","dt"]),Xr=zr(["thead","tbody","tfoot"]),Yr=zr(["td","th"]),Gr=zr(["pre","script","textarea","style"]),Jr=" ",Qr="\ufeff",Zr=function(e){return"\ufeff"===e},eo=function(e){return e.replace(/\uFEFF/g,"")},to=Sn,no=On,ro=function(e){return no(e)&&(e=e.parentNode),to(e)&&e.hasAttribute("data-mce-caret")},oo=function(e){return no(e)&&Zr(e.data)},io=function(e){return ro(e)||oo(e)},ao=function(e){return e.firstChild!==e.lastChild||!Ln(e.firstChild)},uo=function(e){var t=e.container()
return!!On(t)&&(t.data.charAt(e.offset())===Qr||e.isAtStart()&&oo(t.previousSibling))},so=function(e){var t=e.container()
return!!On(t)&&(t.data.charAt(e.offset()-1)===Qr||e.isAtEnd()&&oo(t.nextSibling))},co=function(e){return no(e)&&e.data[0]===Qr},lo=function(e){return no(e)&&e.data[e.data.length-1]===Qr},fo=function(e){return e&&e.hasAttribute("data-mce-caret")?(n=(t=e.getElementsByTagName("br"))[t.length-1],_n(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null
var t,n},mo=Mn,po=Fn,go=Ln,ho=On,vo=Nn(["script","style","textarea"]),yo=Nn(["img","input","textarea","hr","iframe","video","audio","object","embed"]),bo=Nn(["table"]),Co=io,wo=function(e){return!Co(e)&&(ho(e)?!vo(e.parentNode):yo(e)||go(e)||bo(e)||xo(e))},xo=function(e){return!1===(Sn(t=e)&&"true"===t.getAttribute("unselectable"))&&po(e)
var t},So=function(e,t){return wo(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(xo(e))return!1
if(mo(e))return!0}return!0}(e,t)},No=/^[ \t\r\n]*$/,Eo=function(e){return No.test(e)},ko=function(e,t){return wo(e)&&!1===(o=t,On(r=e)&&Eo(r.data)&&!1===function(e,t){var n,r,o=Et(t)
return n=Et(e),r=f(At,o),Cr(n,"pre,code",r).isSome()}(r,o))||Sn(n=e)&&"A"===n.nodeName&&!n.hasAttribute("href")&&(n.hasAttribute("name")||n.hasAttribute("id"))||_o(e)
var n,r,o},_o=kn("data-mce-bookmark"),Ro=kn("data-mce-bogus"),Ao=("data-mce-bogus","all",function(e){return Sn(e)&&"all"===e.getAttribute("data-mce-bogus")}),To=function(e,t){return void 0===t&&(t=!0),function(e,t){var n,r=0
if(ko(e,e))return!1
if(!(n=e.firstChild))return!0
var o=new Fr(n,e)
do{if(t){if(Ao(n)){n=o.next(!0)
continue}if(Ro(n)){n=o.next()
continue}}if(Ln(n))r++,n=o.next()
else{if(ko(n,e))return!1
n=o.next()}}while(n)
return r<=1}(e.dom,t)},Oo=function(e,t){return B(e)&&(ko(e,t)||Vr(Et(e)))},Bo=function(e){return"span"===e.nodeName.toLowerCase()&&"bookmark"===e.getAttribute("data-mce-type")},Po=function(e,t,n){var r=n||t
if(Sn(t)&&Bo(t))return t
for(var o,i,a,u=t.childNodes,s=u.length-1;0<=s;s--)Po(e,u[s],r)
return!Sn(t)||1===(o=t.childNodes).length&&Bo(o[0])&&t.parentNode.insertBefore(o[0],t),Dn(a=t)||Pn(a)||ko(t,r)||Sn(i=t)&&0<i.childNodes.length||function(e,t){return On(e)&&0<e.data.length&&(o=new Fr(n=e,r=t).prev(!1),i=new Fr(n,r).next(!1),a=O(o)||Oo(o,r),u=O(i)||Oo(i,r),a&&u)
var n,r,o,i,a,u}(t,r)||e.remove(t),t},Do=Ct.makeMap,Lo=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Io=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Mo=/[<>&\"\']/g,Fo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,Uo={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},zo={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},jo={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},Ho=function(e,t){var n,r,o,i={}
if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),zo[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r)
return i}},Vo=Ho("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),qo=function(e,t){return e.replace(t?Lo:Io,(function(e){return zo[e]||e}))},$o=function(e,t){return e.replace(t?Lo:Io,(function(e){return 1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":zo[e]||"&#"+e.charCodeAt(0)+";"}))},Wo=function(e,t,n){return n=n||Vo,e.replace(t?Lo:Io,(function(e){return zo[e]||n[e]||e}))},Ko={encodeRaw:qo,encodeAllRaw:function(e){return(""+e).replace(Mo,(function(e){return zo[e]||e}))},encodeNumeric:$o,encodeNamed:Wo,getEncodeFunc:function(e,t){var n=Ho(t)||Vo,r=Do(e.replace(/\+/g,","))
return r.named&&r.numeric?function(e,t){return e.replace(t?Lo:Io,(function(e){return void 0!==zo[e]?zo[e]:void 0!==n[e]?n[e]:1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"}))}:r.named?t?function(e,t){return Wo(e,t,n)}:Wo:r.numeric?$o:qo},decode:function(e){return e.replace(Fo,(function(e,t){return t?65535<(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):Uo[t]||String.fromCharCode(t):jo[e]||Vo[e]||(n=e,(r=St("div").dom).innerHTML=n,r.textContent||r.innerText||n)
var n,r}))}},Xo={},Yo={},Go=Ct.makeMap,Jo=Ct.each,Qo=Ct.extend,Zo=Ct.explode,ei=Ct.inArray,ti=function(e,t){return(e=Ct.trim(e))?e.split(t||" "):[]},ni=function(e,t){var n
return e&&(n={},"string"==typeof e&&(e={"*":e}),Jo(e,(function(e,r){n[r]=n[r.toUpperCase()]=("map"===t?Go:Zo)(e,/[, ]/)}))),n}
function ri(e){var t={},n={},r=[],o={},i={},a=function(t,n,r){var o=e[t]
return o?o=Go(o,/[, ]/,Go(o.toUpperCase(),/[, ]/)):(o=Xo[t])||(o=Go(n," ",Go(n.toUpperCase()," ")),o=Qo(o,r),Xo[t]=o),o},u=function(e){var t,n,r,o,i,a,u={},s=function(e,n,r){var o,i,a=function(e,t){for(var n={},r=0,o=e.length;r<o;r++)n[e[r]]=t||{}
return n}
n=n||"","string"==typeof(r=r||[])&&(r=ti(r))
for(var s=ti(e),c=s.length;c--;)i={attributes:a(o=ti([t,n].join(" "))),attributesOrder:o,children:a(r,Yo)},u[s[c]]=i},c=function(e,t){for(var n,r,o,i=ti(e),a=i.length,s=ti(t);a--;)for(n=u[i[a]],r=0,o=s.length;r<o;r++)n.attributes[s[r]]={},n.attributesOrder.push(s[r])}
return Xo[e]?Xo[e]:(t="id accesskey class dir lang style tabindex title role",n="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",r="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(t+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",n+=" article aside details dialog figure main header footer hgroup section nav",r+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(t+=" xml:lang",r=[r,a="acronym applet basefont big font strike tt"].join(" "),Jo(ti(a),(function(e){s(e,"",r)})),n=[n,i="center dir isindex noframes"].join(" "),o=[n,r].join(" "),Jo(ti(i),(function(e){s(e,"",o)}))),o=o||[n,r].join(" "),s("html","manifest","head body"),s("head","","base command link meta noscript script style title"),s("title hr noscript br"),s("base","href target"),s("link","href rel media hreflang type sizes hreflang"),s("meta","name http-equiv content charset"),s("style","media type scoped"),s("script","src async defer type charset"),s("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",o),s("address dt dd div caption","",o),s("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",r),s("blockquote","cite",o),s("ol","reversed start type","li"),s("ul","","li"),s("li","value",o),s("dl","","dt dd"),s("a","href target rel media hreflang type",r),s("q","cite",r),s("ins del","cite datetime",o),s("img","src sizes srcset alt usemap ismap width height"),s("iframe","src name width height",o),s("embed","src type width height"),s("object","data type typemustmatch name usemap form width height",[o,"param"].join(" ")),s("param","name value"),s("map","name",[o,"area"].join(" ")),s("area","alt coords shape href target rel media hreflang type"),s("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),s("colgroup","span","col"),s("col","span"),s("tbody thead tfoot","","tr"),s("tr","","td th"),s("td","colspan rowspan headers",o),s("th","colspan rowspan headers scope abbr",o),s("form","accept-charset action autocomplete enctype method name novalidate target",o),s("fieldset","disabled form name",[o,"legend"].join(" ")),s("label","form for",r),s("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),s("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?o:r),s("select","disabled form multiple name required size","option optgroup"),s("optgroup","disabled label","option"),s("option","disabled label selected value"),s("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),s("menu","type label",[o,"li"].join(" ")),s("noscript","",o),"html4"!==e&&(s("wbr"),s("ruby","",[r,"rt rp"].join(" ")),s("figcaption","",o),s("mark rt rp summary bdi","",r),s("canvas","width height",o),s("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[o,"track source"].join(" ")),s("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[o,"track source"].join(" ")),s("picture","","img source"),s("source","src srcset type media sizes"),s("track","kind src srclang label default"),s("datalist","",[r,"option"].join(" ")),s("article section nav aside main header footer","",o),s("hgroup","","h1 h2 h3 h4 h5 h6"),s("figure","",[o,"figcaption"].join(" ")),s("time","datetime",r),s("dialog","open",o),s("command","type label icon disabled checked radiogroup command"),s("output","for form name",r),s("progress","value max",r),s("meter","value min max low high optimum",r),s("details","open",[o,"summary"].join(" ")),s("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e&&(c("script","language xml:space"),c("style","xml:space"),c("object","declare classid code codebase codetype archive standby align border hspace vspace"),c("embed","align name hspace vspace"),c("param","valuetype type"),c("a","charset name rev shape coords"),c("br","clear"),c("applet","codebase archive code object alt name width height align hspace vspace"),c("img","name longdesc align border hspace vspace"),c("iframe","longdesc frameborder marginwidth marginheight scrolling align"),c("font basefont","size color face"),c("input","usemap align"),c("select"),c("textarea"),c("h1 h2 h3 h4 h5 h6 div p legend caption","align"),c("ul","type compact"),c("li","type"),c("ol dl menu dir","compact"),c("pre","width xml:space"),c("hr","align noshade size width"),c("isindex","prompt"),c("table","summary width frame rules cellspacing cellpadding align bgcolor"),c("col","width align char charoff valign"),c("colgroup","width align char charoff valign"),c("thead","align char charoff valign"),c("tr","align char charoff valign bgcolor"),c("th","axis align char charoff valign nowrap bgcolor width height"),c("form","accept"),c("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),c("tfoot","align char charoff valign"),c("tbody","align char charoff valign"),c("area","nohref"),c("body","background bgcolor text link vlink alink")),"html4"!==e&&(c("input button select textarea","autofocus"),c("input textarea","placeholder"),c("a","download"),c("link script img","crossorigin"),c("img","loading"),c("iframe","sandbox seamless allowfullscreen loading")),Jo(ti("a form meter progress dfn"),(function(e){u[e]&&delete u[e].children[e]})),delete u.caption.children.table,delete u.script,Xo[e]=u)}((e=e||{}).schema)
!1===e.verify_html&&(e.valid_elements="*[*]")
var s=ni(e.valid_styles),c=ni(e.invalid_styles,"map"),l=ni(e.valid_classes,"map"),f=a("whitespace_elements","pre script noscript style textarea video audio iframe object code"),d=a("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),m=a("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),p=a("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),g="td th iframe video audio object script code",h=a("non_empty_elements",g+" pre",m),v=a("move_caret_before_on_enter_elements",g+" table",m),y=a("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),b=a("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",y),C=a("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
Jo((e.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),(function(e){i[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var w=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},x=function(e){var n,o,i,a,u,s,c,l,f,d,m,p,g,h,v,y,b,C,x=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,S=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,N=/[*?+]/
if(e){var E=ti(e,",")
for(t["@"]&&(y=t["@"].attributes,b=t["@"].attributesOrder),n=0,o=E.length;n<o;n++)if(u=x.exec(E[n])){if(h=u[1],f=u[2],v=u[3],l=u[5],s={attributes:p={},attributesOrder:g=[]},"#"===h&&(s.paddEmpty=!0),"-"===h&&(s.removeEmpty=!0),"!"===u[4]&&(s.removeEmptyAttrs=!0),y&&(oe(y,(function(e,t){p[t]=e})),g.push.apply(g,b)),l)for(i=0,a=(l=ti(l,"|")).length;i<a;i++)if(u=S.exec(l[i])){if(c={},m=u[1],d=u[2].replace(/[\\:]:/g,":"),h=u[3],C=u[4],"!"===m&&(s.attributesRequired=s.attributesRequired||[],s.attributesRequired.push(d),c.required=!0),"-"===m){delete p[d],g.splice(ei(g,d),1)
continue}h&&("="===h&&(s.attributesDefault=s.attributesDefault||[],s.attributesDefault.push({name:d,value:C}),c.defaultValue=C),":"===h&&(s.attributesForced=s.attributesForced||[],s.attributesForced.push({name:d,value:C}),c.forcedValue=C),"<"===h&&(c.validValues=Go(C,"?"))),N.test(d)?(s.attributePatterns=s.attributePatterns||[],c.pattern=w(d),s.attributePatterns.push(c)):(p[d]||g.push(d),p[d]=c)}y||"@"!==f||(y=p,b=g),v&&(s.outputName=f,t[v]=s),N.test(f)?(s.pattern=w(f),r.push(s)):t[f]=s}}},S=function(e){t={},r=[],x(e),Jo(u,(function(e,t){n[t]=e.children}))},N=function(e){var r=/^(~)?(.+)$/
e&&(Xo.text_block_elements=Xo.block_elements=null,Jo(ti(e,","),(function(e){var i,a=r.exec(e),u="~"===a[1],s=u?"span":"div",c=a[2]
n[c]=n[s],o[c]=s,u||(b[c.toUpperCase()]={},b[c]={}),t[c]||(i=t[s],delete(i=Qo({},i)).removeEmptyAttrs,delete i.removeEmpty,t[c]=i),Jo(n,(function(e,t){e[s]&&(n[t]=e=Qo({},n[t]),e[c]=e[s])}))})))},E=function(t){var r=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/
Xo[e.schema]=null,t&&Jo(ti(t,","),(function(e){var t,o,i=r.exec(e)
i&&(o=i[1],t=o?n[i[2]]:n[i[2]]={"#comment":{}},t=n[i[2]],Jo(ti(i[3],"|"),(function(e){"-"===o?delete t[e]:t[e]={}})))}))},k=function(e){var n,o=t[e]
if(o)return o
for(n=r.length;n--;)if((o=r[n]).pattern.test(e))return o}
return e.valid_elements?S(e.valid_elements):(Jo(u,(function(e,r){t[r]={attributes:e.attributes,attributesOrder:e.attributesOrder},n[r]=e.children})),"html5"!==e.schema&&Jo(ti("strong/b em/i"),(function(e){var n=ti(e,"/")
t[n[1]].outputName=n[0]})),Jo(ti("ol ul sub sup blockquote span font a table tbody tr strong em b i"),(function(e){t[e]&&(t[e].removeEmpty=!0)})),Jo(ti("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(function(e){t[e].paddEmpty=!0})),Jo(ti("span"),(function(e){t[e].removeEmptyAttrs=!0}))),N(e.custom_elements),E(e.valid_children),x(e.extended_valid_elements),E("+ol[ul|ol],+ul[ul|ol]"),Jo({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},(function(e,n){t[n]&&(t[n].parentsRequired=ti(e))})),e.invalid_elements&&Jo(Zo(e.invalid_elements),(function(e){t[e]&&delete t[e]})),k("span")||x("span[!data-mce-type|*]"),{children:n,elements:t,getValidStyles:function(){return s},getValidClasses:function(){return l},getBlockElements:function(){return b},getInvalidStyles:function(){return c},getShortEndedElements:function(){return m},getTextBlockElements:function(){return y},getTextInlineElements:function(){return C},getBoolAttrs:function(){return p},getElementRule:k,getSelfClosingElements:function(){return d},getNonEmptyElements:function(){return h},getMoveCaretBeforeOnEnterElements:function(){return v},getWhiteSpaceElements:function(){return f},getSpecialElements:function(){return i},isValidChild:function(e,t){var r=n[e.toLowerCase()]
return!(!r||!r[t.toLowerCase()])},isValid:function(e,t){var n,r,o=k(e)
if(o){if(!t)return!0
if(o.attributes[t])return!0
if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return o},addValidElements:x,setValidElements:S,addCustomElements:N,addValidChildren:E}}var oi=function(e,t,n,r){var o=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e}
return"#"+o(t)+o(n)+o(r)},ii=function(e,t){var n,r,o=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,i=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,a=/\s*([^:]+):\s*([^;]+);?/g,u=/\s+$/,s={},c="\ufeff"
e=e||{},t&&(n=t.getValidStyles(),r=t.getInvalidStyles())
for(var l="\\\" \\' \\; \\: ; : \ufeff".split(" "),f=0;f<l.length;f++)s[l[f]]=c+f,s[c+f]=l[f]
return{toHex:function(e){return e.replace(o,oi)},parse:function(t){var n,r,l,d,m,p,g,h={},v=e.url_converter,y=e.url_converter_scope||this,b=function(e,t,n){var r=h[e+"-top"+t]
if(r){var o=h[e+"-right"+t]
if(o){var i=h[e+"-bottom"+t]
if(i){var a=h[e+"-left"+t]
if(a){var u=[r,o,i,a]
for(f=u.length-1;f--&&u[f]===u[f+1];);-1<f&&n||(h[e+t]=-1===f?u[0]:u.join(" "),delete h[e+"-top"+t],delete h[e+"-right"+t],delete h[e+"-bottom"+t],delete h[e+"-left"+t])}}}}},C=function(e){var t,n=h[e]
if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return!1
return h[e]=n[0],!0}},w=function(e){return d=!0,s[e]},x=function(e,t){return d&&(e=e.replace(/\uFEFF[0-9]/g,(function(e){return s[e]}))),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e},S=function(e){return String.fromCharCode(parseInt(e.slice(1),16))},N=function(e){return e.replace(/\\[0-9a-f]+/gi,S)},E=function(t,n,r,o,i,a){if(i=i||a)return"'"+(i=x(i)).replace(/\'/g,"\\'")+"'"
if(n=x(n||r||o),!e.allow_script_urls){var u=n.replace(/[\s\r\n]+/g,"")
if(/(java|vb)script:/i.test(u))return""
if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(u))return""}return v&&(n=v.call(y,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}
if(t){for(t=(t=t.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,w).replace(/\"[^\"]+\"|\'[^\']+\'/g,(function(e){return e.replace(/[;:]/g,w)}));n=a.exec(t);)if(a.lastIndex=n.index+n[0].length,r=n[1].replace(u,"").toLowerCase(),l=n[2].replace(u,""),r&&l){if(r=N(r),l=N(l),-1!==r.indexOf(c)||-1!==r.indexOf('"'))continue
if(!e.allow_script_urls&&("behavior"===r||/expression\s*\(|\/\*|\*\//.test(l)))continue
"font-weight"===r&&"700"===l?l="bold":"color"!==r&&"background-color"!==r||(l=l.toLowerCase()),l=(l=l.replace(o,oi)).replace(i,E),h[r]=d?x(l,!0):l}b("border","",!0),b("border","-width"),b("border","-color"),b("border","-style"),b("padding",""),b("margin",""),"border",p="border-style",g="border-color",C(m="border-width")&&C(p)&&C(g)&&(h.border=h[m]+" "+h[p]+" "+h[g],delete h[m],delete h[p],delete h[g]),"medium none"===h.border&&delete h.border,"none"===h["border-image"]&&delete h["border-image"]}return h},serialize:function(e,t){var o="",i=function(t){var r,i=n[t]
if(i)for(var a=0,u=i.length;a<u;a++)t=i[a],(r=e[t])&&(o+=(0<o.length?" ":"")+t+": "+r+";")}
return t&&n?(i("*"),i(t)):oe(e,(function(e,n){var i,a,u
!e||r&&(i=n,a=t,(u=r["*"])&&u[i]||(u=r[a])&&u[i])||(o+=(0<o.length?" ":"")+n+": "+e+";")})),o}}},ai=/^(?:mouse|contextmenu)|click/,ui={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1,mozPressure:1},si=function(){return!1},ci=function(){return!0},li=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},fi=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},di=function(e,t){var n,r,o,i,a,u,s=t||{}
for(n in e)ui[n]||(s[n]=e[n])
return s.target||(s.target=s.srcElement||document),s.composedPath&&(s.composedPath=function(){return e.composedPath()}),e&&(a=e,ai.test(a.type))&&void 0===e.pageX&&void 0!==e.clientX&&(o=(r=s.target.ownerDocument||document).documentElement,i=r.body,s.pageX=e.clientX+(o&&o.scrollLeft||i&&i.scrollLeft||0)-(o&&o.clientLeft||i&&i.clientLeft||0),s.pageY=e.clientY+(o&&o.scrollTop||i&&i.scrollTop||0)-(o&&o.clientTop||i&&i.clientTop||0)),s.preventDefault=function(){s.isDefaultPrevented=ci,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},s.stopPropagation=function(){s.isPropagationStopped=ci,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},!(s.stopImmediatePropagation=function(){s.isImmediatePropagationStopped=ci,s.stopPropagation()})==((u=s).isDefaultPrevented===ci||u.isDefaultPrevented===si)&&(s.isDefaultPrevented=si,s.isPropagationStopped=si,s.isImmediatePropagationStopped=si),void 0===s.metaKey&&(s.metaKey=!1),s},mi=(pi.prototype.bind=function(e,t,n,r){var o,i,a,u,s,c,l=this,f=window,d=function(e){l.executeHandlers(di(e||f.event),o)}
if(e&&3!==e.nodeType&&8!==e.nodeType){e[l.expando]?o=e[l.expando]:(o=l.count++,e[l.expando]=o,l.events[o]={}),r=r||e
for(var m=t.split(" "),p=m.length;p--;)s=d,u=c=!1,"DOMContentLoaded"===(a=m[p])&&(a="ready"),l.domLoaded&&"ready"===a&&"complete"===e.readyState?n.call(r,di({type:a})):(l.hasMouseEnterLeave||(u=l.mouseEnterLeave[a])&&(s=function(e){var t=e.currentTarget,n=e.relatedTarget
if(n&&t.contains)n=t.contains(n)
else for(;n&&n!==t;)n=n.parentNode
n||((e=di(e||f.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,l.executeHandlers(e,o))}),l.hasFocusIn||"focusin"!==a&&"focusout"!==a||(c=!0,u="focusin"===a?"focus":"blur",s=function(e){(e=di(e||f.event)).type="focus"===e.type?"focusin":"focusout",l.executeHandlers(e,o)}),(i=l.events[o][a])?"ready"===a&&l.domLoaded?n(di({type:a})):i.push({func:n,scope:r}):(l.events[o][a]=i=[{func:n,scope:r}],i.fakeName=u,i.capture=c,i.nativeHandler=s,"ready"===a?function(e,t,n){var r,o=e.document,i={type:"ready"}
n.domLoaded?t(i):(r=function(){fi(e,"DOMContentLoaded",r),fi(e,"load",r),n.domLoaded||(n.domLoaded=!0,t(i))},"complete"===o.readyState||"interactive"===o.readyState&&o.body?r():li(e,"DOMContentLoaded",r),li(e,"load",r))}(e,s,l):li(e,u||a,s,c)))
return e=i=null,n}},pi.prototype.unbind=function(e,t,n){var r,o,i
if(!e||3===e.nodeType||8===e.nodeType)return this
var a=e[this.expando]
if(a){if(i=this.events[a],t){for(var u,s,c,l,f=t.split(" "),d=f.length;d--;)if(l=i[o=f[d]]){if(n)for(r=l.length;r--;)l[r].func===n&&(u=l.nativeHandler,s=l.fakeName,c=l.capture,(l=l.slice(0,r).concat(l.slice(r+1))).nativeHandler=u,l.fakeName=s,l.capture=c,i[o]=l)
n&&0!==l.length||(delete i[o],fi(e,l.fakeName||o,l.nativeHandler,l.capture))}}else oe(i,(function(t,n){fi(e,t.fakeName||n,t.nativeHandler,t.capture)})),i={}
for(o in i)if(de(i,o))return this
delete this.events[a]
try{delete e[this.expando]}catch(h){e[this.expando]=null}}return this},pi.prototype.fire=function(e,t,n){var r
if(!e||3===e.nodeType||8===e.nodeType)return this
var o=di(null,n)
for(o.type=t,o.target=e;(r=e[this.expando])&&this.executeHandlers(o,r),(e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow)&&!o.isPropagationStopped(););return this},pi.prototype.clean=function(e){var t,n
if(!e||3===e.nodeType||8===e.nodeType)return this
if(e[this.expando]&&this.unbind(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(this.unbind(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[this.expando]&&this.unbind(e)
return this},pi.prototype.destroy=function(){this.events={}},pi.prototype.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1},pi.prototype.executeHandlers=function(e,t){var n=this.events[t],r=n&&n[e.type]
if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o]
if(a&&!1===a.func.call(a.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}},pi.Event=new pi,pi)
function pi(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}var gi,hi,vi,yi,bi,Ci,wi,xi,Si,Ni,Ei,ki,_i,Ri,Ai,Ti,Oi,Bi="sizzle"+-new Date,Pi=window.document,Di=0,Li=0,Ii=pa(),Mi=pa(),Fi=pa(),Ui=function(e,t){return e===t&&(Ni=!0),0},zi="undefined",ji={}.hasOwnProperty,Hi=[],Vi=Hi.pop,qi=Hi.push,$i=Hi.push,Wi=Hi.slice,Ki=Hi.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t
return-1},Xi="[\\x20\\t\\r\\n\\f]",Yi="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Gi="\\["+Xi+"*("+Yi+")(?:"+Xi+"*([*^$|!~]?=)"+Xi+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+Yi+"))|)"+Xi+"*\\]",Ji=":("+Yi+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+Gi+")*)|.*)\\)|)",Qi=new RegExp("^"+Xi+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Xi+"+$","g"),Zi=new RegExp("^"+Xi+"*,"+Xi+"*"),ea=new RegExp("^"+Xi+"*([>+~]|"+Xi+")"+Xi+"*"),ta=new RegExp("="+Xi+"*([^\\]'\"]*?)"+Xi+"*\\]","g"),na=new RegExp(Ji),ra=new RegExp("^"+Yi+"$"),oa={ID:new RegExp("^#("+Yi+")"),CLASS:new RegExp("^\\.("+Yi+")"),TAG:new RegExp("^("+Yi+"|[*])"),ATTR:new RegExp("^"+Gi),PSEUDO:new RegExp("^"+Ji),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Xi+"*(even|odd|(([+-]|)(\\d*)n|)"+Xi+"*(?:([+-]|)"+Xi+"*(\\d+)|))"+Xi+"*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^"+Xi+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Xi+"*((?:-\\d)?\\d*)"+Xi+"*\\)|)(?=[^-]|$)","i")},ia=/^(?:input|select|textarea|button)$/i,aa=/^h\d$/i,ua=/^[^{]+\{\s*\[native \w/,sa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ca=/[+~]/,la=/'|\\/g,fa=new RegExp("\\\\([\\da-f]{1,6}"+Xi+"?|("+Xi+")|.)","ig"),da=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)}
try{$i.apply(Hi=Wi.call(Pi.childNodes),Pi.childNodes),Hi[Pi.childNodes.length].nodeType}catch(qS){$i={apply:Hi.length?function(e,t){qi.apply(e,Wi.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var ma=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m
if((t?t.ownerDocument||t:Pi)!==ki&&Ei(t),n=n||[],!e||"string"!=typeof e)return n
if(1!==(u=(t=t||ki).nodeType)&&9!==u)return[]
if(Ri&&!r){if(o=sa.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n
if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&Oi(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return $i.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&gi.getElementsByClassName)return $i.apply(n,t.getElementsByClassName(a)),n}if(gi.qsa&&(!Ai||!Ai.test(e))){if(f=l=Bi,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(c=bi(e),(l=t.getAttribute("id"))?f=l.replace(la,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",s=c.length;s--;)c[s]=f+Ca(c[s])
d=ca.test(e)&&ya(t.parentNode)||t,m=c.join(",")}if(m)try{return $i.apply(n,d.querySelectorAll(m)),n}catch(v){}finally{l||t.removeAttribute("id")}}}return wi(e.replace(Qi,"$1"),t,n,r)}
function pa(){var e=[]
return function t(n,r){return e.push(n+" ")>hi.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function ga(e){return e[Bi]=!0,e}function ha(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function va(e){return ga((function(t){return t=+t,ga((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function ya(e){return e&&typeof e.getElementsByTagName!=zi&&e}function ba(){}function Ca(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function wa(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=Li++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,s,c=[Di,i]
if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if((u=(s=t[Bi]||(t[Bi]={}))[r])&&u[0]===Di&&u[1]===i)return c[2]=u[2]
if((s[r]=c)[2]=e(t,n,a))return!0}}}function xa(e){return 1<e.length?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1
return!0}:e[0]}function Sa(e,t,n,r,o){for(var i,a=[],u=0,s=e.length,c=null!=t;u<s;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),c&&t.push(u)))
return a}function Na(e,t,n,r,o,i){return r&&!r[Bi]&&(r=Na(r)),o&&!o[Bi]&&(o=Na(o,i)),ga((function(i,a,u,s){var c,l,f,d=[],m=[],p=a.length,g=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)ma(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),h=!e||!i&&t?g:Sa(g,d,e,u,s),v=n?o||(i?e:p||r)?[]:a:h
if(n&&n(h,v,u,s),r)for(c=Sa(v,m),r(c,[],u,s),l=c.length;l--;)(f=c[l])&&(v[m[l]]=!(h[m[l]]=f))
if(i){if(o||e){if(o){for(c=[],l=v.length;l--;)(f=v[l])&&c.push(h[l]=f)
o(null,v=[],c,s)}for(l=v.length;l--;)(f=v[l])&&-1<(c=o?Ki.call(i,f):d[l])&&(i[c]=!(a[c]=f))}}else v=Sa(v===a?v.splice(p,v.length):v),o?o(null,a,v,s):$i.apply(a,v)}))}gi=ma.support={},yi=ma.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},Ei=ma.setDocument=function(e){var t,n=e?e.ownerDocument||e:Pi,r=n.defaultView
return n!==ki&&9===n.nodeType&&n.documentElement?(_i=(ki=n).documentElement,Ri=!yi(n),r&&r!==function(e){try{return e.top}catch(t){}return null}(r)&&(r.addEventListener?r.addEventListener("unload",(function(){Ei()}),!1):r.attachEvent&&r.attachEvent("onunload",(function(){Ei()}))),gi.attributes=!0,gi.getElementsByTagName=!0,gi.getElementsByClassName=ua.test(n.getElementsByClassName),gi.getById=!0,hi.find.ID=function(e,t){if(typeof t.getElementById!=zi&&Ri){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},hi.filter.ID=function(e){var t=e.replace(fa,da)
return function(e){return e.getAttribute("id")===t}},hi.find.TAG=gi.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!=zi)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e)
if("*"!==e)return i
for(;n=i[o++];)1===n.nodeType&&r.push(n)
return r},hi.find.CLASS=gi.getElementsByClassName&&function(e,t){if(Ri)return t.getElementsByClassName(e)},Ti=[],Ai=[],gi.disconnectedMatch=!0,Ai=Ai.length&&new RegExp(Ai.join("|")),Ti=Ti.length&&new RegExp(Ti.join("|")),t=ua.test(_i.compareDocumentPosition),Oi=t||ua.test(_i.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},Ui=t?function(e,t){if(e===t)return Ni=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!gi.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===Pi&&Oi(Pi,e)?-1:t===n||t.ownerDocument===Pi&&Oi(Pi,t)?1:Si?Ki.call(Si,e)-Ki.call(Si,t):0:4&r?-1:1)}:function(e,t){if(e===t)return Ni=!0,0
var r,o=0,i=e.parentNode,a=t.parentNode,u=[e],s=[t]
if(!i||!a)return e===n?-1:t===n?1:i?-1:a?1:Si?Ki.call(Si,e)-Ki.call(Si,t):0
if(i===a)return ha(e,t)
for(r=e;r=r.parentNode;)u.unshift(r)
for(r=t;r=r.parentNode;)s.unshift(r)
for(;u[o]===s[o];)o++
return o?ha(u[o],s[o]):u[o]===Pi?-1:s[o]===Pi?1:0},n):ki},ma.matches=function(e,t){return ma(e,null,null,t)},ma.matchesSelector=function(e,t){if((e.ownerDocument||e)!==ki&&Ei(e),t=t.replace(ta,"='$1']"),gi.matchesSelector&&Ri&&(!Ti||!Ti.test(t))&&(!Ai||!Ai.test(t)))try{var n=(void 0).call(e,t)
if(n||gi.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(qS){}return 0<ma(t,ki,null,[e]).length},ma.contains=function(e,t){return(e.ownerDocument||e)!==ki&&Ei(e),Oi(e,t)},ma.attr=function(e,t){(e.ownerDocument||e)!==ki&&Ei(e)
var n=hi.attrHandle[t.toLowerCase()],r=n&&ji.call(hi.attrHandle,t.toLowerCase())?n(e,t,!Ri):void 0
return void 0!==r?r:gi.attributes||!Ri?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},ma.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ma.uniqueSort=function(e){var t,n=[],r=0,o=0
if(Ni=!gi.detectDuplicates,Si=!gi.sortStable&&e.slice(0),e.sort(Ui),Ni){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)e.splice(n[r],1)}return Si=null,e},vi=ma.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=vi(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=vi(t)
return n},(hi=ma.selectors={cacheLength:50,createPseudo:ga,match:oa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(fa,da),e[3]=(e[3]||e[4]||e[5]||"").replace(fa,da),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ma.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ma.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return oa.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&na.test(n)&&(t=bi(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(fa,da).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Ii[e+" "]
return t||(t=new RegExp("(^|"+Xi+")"+e+"("+Xi+"|$)"))&&Ii(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!=zi&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=ma.attr(r,e)
return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&-1<o.indexOf(n):"$="===t?n&&o.slice(-n.length)===n:"~="===t?-1<(" "+o+" ").indexOf(n):"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,s){var c,l,f,d,m,p,g=i!=a?"nextSibling":"previousSibling",h=t.parentNode,v=u&&t.nodeName.toLowerCase(),y=!s&&!u
if(h){if(i){for(;g;){for(f=t;f=f[g];)if(u?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1
p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?h.firstChild:h.lastChild],a&&y){for(m=(c=(l=h[Bi]||(h[Bi]={}))[e]||[])[0]===Di&&c[1],d=c[0]===Di&&c[2],f=m&&h.childNodes[m];f=++m&&f&&f[g]||(d=m=0)||p.pop();)if(1===f.nodeType&&++d&&f===t){l[e]=[Di,m,d]
break}}else if(y&&(c=(t[Bi]||(t[Bi]={}))[e])&&c[0]===Di)d=c[1]
else for(;(f=++m&&f&&f[g]||(d=m=0)||p.pop())&&((u?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++d||(y&&((f[Bi]||(f[Bi]={}))[e]=[Di,d]),f!==t)););return(d-=o)===r||d%r==0&&0<=d/r}}},PSEUDO:function(e,t){var n,r=hi.pseudos[e]||hi.setFilters[e.toLowerCase()]||ma.error("unsupported pseudo: "+e)
return r[Bi]?r(t):1<r.length?(n=[e,e,"",t],hi.setFilters.hasOwnProperty(e.toLowerCase())?ga((function(e,n){for(var o,i=r(e,t),a=i.length;a--;)e[o=Ki.call(e,i[a])]=!(n[o]=i[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:ga((function(e){var t=[],n=[],r=Ci(e.replace(Qi,"$1"))
return r[Bi]?ga((function(e,t,n,o){for(var i,a=r(e,null,o,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),!n.pop()}})),has:ga((function(e){return function(t){return 0<ma(e,t).length}})),contains:ga((function(e){return e=e.replace(fa,da),function(t){return-1<(t.textContent||t.innerText||vi(t)).indexOf(e)}})),lang:ga((function(e){return ra.test(e||"")||ma.error("unsupported lang: "+e),e=e.replace(fa,da).toLowerCase(),function(t){var n
do{if(n=Ri?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===_i},focus:function(e){return e===ki.activeElement&&(!ki.hasFocus||ki.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!hi.pseudos.empty(e)},header:function(e){return aa.test(e.nodeName)},input:function(e){return ia.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:va((function(){return[0]})),last:va((function(e,t){return[t-1]})),eq:va((function(e,t,n){return[n<0?n+t:n]})),even:va((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:va((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:va((function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r)
return e})),gt:va((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=hi.pseudos.eq,H(["radio","checkbox","file","password","image"],(function(e){var t
hi.pseudos[e]=(t=e,function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t})})),H(["submit","reset"],(function(e){var t
hi.pseudos[e]=(t=e,function(e){var n=e.nodeName.toLowerCase()
return("input"===n||"button"===n)&&e.type===t})})),ba.prototype=hi.filters=hi.pseudos,hi.setFilters=new ba,bi=ma.tokenize=function(e,t){var n,r,o,i,a,u,s,c=Mi[e+" "]
if(c)return t?0:c.slice(0)
for(a=e,u=[],s=hi.preFilter;a;){for(i in n&&!(r=Zi.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=ea.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(Qi," ")}),a=a.slice(n.length)),hi.filter)hi.filter.hasOwnProperty(i)&&(!(r=oa[i].exec(a))||s[i]&&!(r=s[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length)))
if(!n)break}return t?a.length:a?ma.error(e):Mi(e,u).slice(0)},Ci=ma.compile=function(e,t){var n,r,o,i,a,u,s=[],c=[],l=Fi[e+" "]
if(!l){for(n=(t=t||bi(e)).length;n--;)(l=function e(t){for(var n,r,o,i=t.length,a=hi.relative[t[0].type],u=a||hi.relative[" "],s=a?1:0,c=wa((function(e){return e===n}),u,!0),l=wa((function(e){return-1<Ki.call(n,e)}),u,!0),f=[function(e,t,r){return!a&&(r||t!==xi)||((n=t).nodeType?c:l)(e,t,r)}];s<i;s++)if(r=hi.relative[t[s].type])f=[wa(xa(f),r)]
else{if((r=hi.filter[t[s].type].apply(null,t[s].matches))[Bi]){for(o=++s;o<i&&!hi.relative[t[o].type];o++);return Na(1<s&&xa(f),1<s&&Ca(t.slice(0,s-1).concat({value:" "===t[s-2].type?"*":""})).replace(Qi,"$1"),r,s<o&&e(t.slice(s,o)),o<i&&e(t=t.slice(o)),o<i&&Ca(t))}f.push(r)}return xa(f)}(t[n]))[Bi]?s.push(l):c.push(l);(l=Fi(e,(r=c,i=0<(o=s).length,a=0<r.length,u=function(e,t,n,u,s){var c,l,f,d=0,m="0",p=e&&[],g=[],h=xi,v=e||a&&hi.find.TAG("*",s),y=Di+=null==h?1:Math.random()||.1,b=v.length
for(s&&(xi=t!==ki&&t);m!==b&&null!=(c=v[m]);m++){if(a&&c){for(l=0;f=r[l++];)if(f(c,t,n)){u.push(c)
break}s&&(Di=y)}i&&((c=!f&&c)&&d--,e&&p.push(c))}if(d+=m,i&&m!==d){for(l=0;f=o[l++];)f(p,g,t,n)
if(e){if(0<d)for(;m--;)p[m]||g[m]||(g[m]=Vi.call(u))
g=Sa(g)}$i.apply(u,g),s&&!e&&0<g.length&&1<d+o.length&&ma.uniqueSort(u)}return s&&(Di=y,xi=h),p},i?ga(u):u))).selector=e}return l},wi=ma.select=function(e,t,n,r){var o,i,a,u,s,c="function"==typeof e&&e,l=!r&&bi(e=c.selector||e)
if(n=n||[],1===l.length){if(2<(i=l[0]=l[0].slice(0)).length&&"ID"===(a=i[0]).type&&gi.getById&&9===t.nodeType&&Ri&&hi.relative[i[1].type]){if(!(t=(hi.find.ID(a.matches[0].replace(fa,da),t)||[])[0]))return n
c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=oa.needsContext.test(e)?0:i.length;o--&&(a=i[o],!hi.relative[u=a.type]);)if((s=hi.find[u])&&(r=s(a.matches[0].replace(fa,da),ca.test(i[0].type)&&ya(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&Ca(i)))return $i.apply(n,r),n
break}}return(c||Ci(e,l))(r,t,!Ri,n,ca.test(e)&&ya(t.parentNode)||t),n},gi.sortStable=Bi.split("").sort(Ui).join("")===Bi,gi.detectDuplicates=!!Ni,Ei(),gi.sortDetached=!0
var Ea=document,ka=Array.prototype.push,_a=Array.prototype.slice,Ra=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,Aa=mi.Event,Ta=Ct.makeMap("children,contents,next,prev"),Oa=function(e){return void 0!==e},Ba=function(e){return"string"==typeof e},Pa=function(e,t){var n,r=(t=t||Ea).createElement("div"),o=t.createDocumentFragment()
for(r.innerHTML=e;n=r.firstChild;)o.appendChild(n)
return o},Da=function(e,t,n,r){var o
if(Ba(t))t=Pa(t,Xa(e[0]))
else if(t.length&&!t.nodeType){if(t=Za.makeArray(t),r)for(o=t.length-1;0<=o;o--)Da(e,t[o],n,r)
else for(o=0;o<t.length;o++)Da(e,t[o],n,r)
return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t)
return e},La=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},Ia=function(e,t,n){var r,o
return t=Za(t)[0],e.each((function(){n&&r===this.parentNode||(r=this.parentNode,o=t.cloneNode(!1),this.parentNode.insertBefore(o,this)),o.appendChild(this)})),e},Ma=Ct.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),Fa=Ct.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),Ua={for:"htmlFor",class:"className",readonly:"readOnly"},za={float:"cssFloat"},ja={},Ha={},Va=function(e,t){return new Za.fn.init(e,t)},qa=/^\s*|\s*$/g,$a=function(e){return null==e?"":(""+e).replace(qa,"")},Wa=function(e,t){var n,r,o,i
if(e)if(void 0===(n=e.length)){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},Ka=function(e,t){var n=[]
return Wa(e,(function(e,r){t(r,e)&&n.push(r)})),n},Xa=function(e){return e?9===e.nodeType?e:e.ownerDocument:Ea}
Va.fn=Va.prototype={constructor:Va,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this
if(!e)return o
if(e.nodeType)return o.context=o[0]=e,o.length=1,o
if(t&&t.nodeType)o.context=t
else{if(t)return Za(e).attr(t)
o.context=t=document}if(Ba(e)){if(!(n="<"===(o.selector=e).charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:Ra.exec(e)))return Za(t).find(e)
if(n[1])for(r=Pa(e,Xa(t)).firstChild;r;)ka.call(o,r),r=r.nextSibling
else{if(!(r=Xa(t).getElementById(n[2])))return o
if(r.id!==n[2])return o.find(e)
o.length=1,o[0]=r}}else this.add(e,!1)
return o},toArray:function(){return Ct.toArray(this)},add:function(e,t){var n,r
if(Ba(e))return this.add(Za(e))
if(!1!==t)for(n=Za.unique(this.toArray().concat(Za.makeArray(e))),this.length=n.length,r=0;r<n.length;r++)this[r]=n[r]
else ka.apply(this,Za.makeArray(e))
return this},attr:function(e,t){var n,r=this
if("object"==typeof e)Wa(e,(function(e,t){r.attr(e,t)}))
else{if(!Oa(t)){if(r[0]&&1===r[0].nodeType){if((n=ja[e])&&n.get)return n.get(r[0],e)
if(Fa[e])return r.prop(e)?e:void 0
null===(t=r[0].getAttribute(e,2))&&(t=void 0)}return t}this.each((function(){var n
if(1===this.nodeType){if((n=ja[e])&&n.set)return void n.set(this,t)
null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}}))}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this
if("object"==typeof(e=Ua[e]||e))Wa(e,(function(e,t){n.prop(e,t)}))
else{if(!Oa(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t
this.each((function(){1===this.nodeType&&(this[e]=t)}))}return n},css:function(e,t){var n,r,o=this,a=function(e){return e.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()}))},u=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e}))}
if("object"==typeof e)Wa(e,(function(e,t){o.css(e,t)}))
else if(Oa(t))e=a(e),"number"!=typeof t||Ma[e]||(t=t.toString()+"px"),o.each((function(){var n=this.style
if((r=Ha[e])&&r.set)r.set(this,t)
else{try{this.style[za[e]||e]=t}catch(a){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(u(e)):n.removeAttribute(e))}}))
else{if(n=o[0],(r=Ha[e])&&r.get)return r.get(n)
if(!n.ownerDocument.defaultView)return n.currentStyle?n.currentStyle[a(e)]:""
try{return n.ownerDocument.defaultView.getComputedStyle(n,null).getPropertyValue(u(e))}catch(i){return}}return o},remove:function(){for(var e,t=this.length;t--;)e=this[t],Aa.clean(e),e.parentNode&&e.parentNode.removeChild(e)
return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild)
return this},html:function(e){var t
if(Oa(e)){t=this.length
try{for(;t--;)this[t].innerHTML=e}catch(m){Za(this[t]).empty().append(e)}return this}return this[0]?this[0].innerHTML:""},text:function(e){var t
if(Oa(e)){for(t=this.length;t--;)"innerText"in this[t]?this[t].innerText=e:this[0].textContent=e
return this}return this[0]?this[0].innerText||this[0].textContent:""},append:function(){return Da(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)}))},prepend:function(){return Da(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)}),!0)},before:function(){return this[0]&&this[0].parentNode?Da(this,arguments,(function(e){this.parentNode.insertBefore(e,this)})):this},after:function(){return this[0]&&this[0].parentNode?Da(this,arguments,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}),!0):this},appendTo:function(e){return Za(e).append(this),this},prependTo:function(e){return Za(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return Ia(this,e)},wrapAll:function(e){return Ia(this,e,!0)},wrapInner:function(e){return this.each((function(){Za(this).contents().wrapAll(e)})),this},unwrap:function(){return this.parent().each((function(){Za(this).replaceWith(this.childNodes)}))},clone:function(){var e=[]
return this.each((function(){e.push(this.cloneNode(!0))})),Za(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this
return"string"!=typeof e||(-1!==e.indexOf(" ")?Wa(e.split(" "),(function(){n.toggleClass(this,t)})):n.each((function(n,r){var o,i=La(r,e)
i!==t&&(o=r.className,i?r.className=$a((" "+o+" ").replace(" "+e+" "," ")):r.className+=o?" "+e:e)}))),n},hasClass:function(e){return La(this[0],e)},each:function(e){return Wa(this,e)},on:function(e,t){return this.each((function(){Aa.bind(this,e,t)}))},off:function(e,t){return this.each((function(){Aa.unbind(this,e,t)}))},trigger:function(e){return this.each((function(){"object"==typeof e?Aa.fire(this,e.type,e):Aa.fire(this,e)}))},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new Za(_a.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){for(var t=[],n=0,r=this.length;n<r;n++)Za.find(e,this[n],t)
return Za(t)},filter:function(e){return Za("function"==typeof e?Ka(this.toArray(),(function(t,n){return e(n,t)})):Za.filter(e,this.toArray()))},closest:function(e){var t=[]
return e instanceof Za&&(e=e[0]),this.each((function(n,r){for(;r;){if("string"==typeof e&&Za(r).is(e)){t.push(r)
break}if(r===e){t.push(r)
break}r=r.parentNode}})),Za(t)},offset:function(e){var t,n,r,o,i=0,a=0
return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:ka,sort:Array.prototype.sort,splice:Array.prototype.splice},Ct.extend(Va,{extend:Ct.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:Ct.toArray(e)
var t},inArray:function(e,t){var n
if(t.indexOf)return t.indexOf(e)
for(n=t.length;n--;)if(t[n]===e)return n
return-1},isArray:Ct.isArray,each:Wa,trim:$a,grep:Ka,find:ma,expr:ma.selectors,unique:ma.uniqueSort,text:ma.getText,contains:ma.contains,filter:function(e,t,n){var r=t.length
for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1)
return 1===t.length?Za.find.matchesSelector(t[0],e)?[t[0]]:[]:Za.find.matches(e,t)}})
var Ya=function(e,t,n){var r=[],o=e[t]
for("string"!=typeof n&&n instanceof Za&&(n=n[0]);o&&9!==o.nodeType;){if(void 0!==n){if(o===n)break
if("string"==typeof n&&Za(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},Ga=function(e,t,n,r){var o=[]
for(r instanceof Za&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(void 0!==r){if(e===r)break
if("string"==typeof r&&Za(e).is(r))break}o.push(e)}return o},Ja=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e
return null}
Wa({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return Ya(e,"parentNode")},next:function(e){return Ja(e,"nextSibling",1)},prev:function(e){return Ja(e,"previousSibling",1)},children:function(e){return Ga(e.firstChild,"nextSibling",1)},contents:function(e){return Ct.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},(function(e,t){Va.fn[e]=function(n){var r=[]
this.each((function(){var e=t.call(r,this,n,r)
e&&(Za.isArray(e)?r.push.apply(r,e):r.push(e))})),1<this.length&&(Ta[e]||(r=Za.unique(r)),0===e.indexOf("parents")&&(r=r.reverse()))
var o=Za(r)
return n?o.filter(n):o}})),Wa({parentsUntil:function(e,t){return Ya(e,"parentNode",t)},nextUntil:function(e,t){return Ga(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return Ga(e,"previousSibling",1,t).slice(1)}},(function(e,t){Va.fn[e]=function(n,r){var o=[]
this.each((function(){var e=t.call(o,this,n,o)
e&&(Za.isArray(e)?o.push.apply(o,e):o.push(e))})),1<this.length&&(o=Za.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse()))
var i=Za(o)
return r?i.filter(r):i}})),Va.fn.is=function(e){return!!e&&0<this.filter(e).length},Va.fn.init.prototype=Va.fn,Va.overrideDefaults=function(e){var t,n=function(r,o){return t=t||e(),0===arguments.length&&(r=t.element),o=o||t.context,new n.fn.init(r,o)}
return Za.extend(n,this),n},Va.attrHooks=ja,Va.cssHooks=Ha
var Qa,Za=Va,eu=Ct.each,tu=Ct.grep,nu=gt.ie,ru=/^([a-z0-9],?)+$/i,ou=function(e,t){var n=t.attr("style"),r=(r=e.serialize(e.parse(n),t[0].nodeName))||null
t.attr("data-mce-style",r)},iu=function(e,t){var n,r,o=0
if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r)
return o}
function au(e,t){var n=this
void 0===t&&(t={})
var r={},o=window,i={},a=0,s=Mr.forElement(Et(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),c=[],l=t.schema?t.schema:ri({}),f=ii({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),d=t.ownEvents?new mi:mi.Event,m=l.getBlockElements(),p=Za.overrideDefaults((function(){return{context:e,element:V.getRoot()}})),g=function(t){return t&&e&&k(t)?e.getElementById(t):t},h=function(e){return p("string"==typeof e?g(e):e)},v=function(e,t,n){var r,o,i=h(e)
return i.length&&(o=(r=q[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},y=function(e){var t=g(e)
return t?t.attributes:[]},b=function(e,n,r){""===r&&(r=null)
var o,i=h(e),a=i.attr(n)
i.length&&((o=q[n])&&o.set?o.set(i,r,n):i.attr(n,r),a!==r&&t.onSetAttrib&&t.onSetAttrib({attrElm:i,attrName:n,attrValue:r}))},C=function(){return t.root_element||e.body},w=function(t,n){return function(e,t,n){var r,o,i,a=0,u=0,s=e.ownerDocument
if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===Kn(Et(e),"position"))return{x:a=(o=t.getBoundingClientRect()).left+(s.documentElement.scrollLeft||e.scrollLeft)-s.documentElement.clientLeft,y:u=o.top+(s.documentElement.scrollTop||e.scrollTop)-s.documentElement.clientTop}
for(r=t;r&&r!==n&&r.nodeType&&!Zn(r,n);)a+=r.offsetLeft||0,u+=r.offsetTop||0,r=r.offsetParent
for(r=t.parentNode;r&&r!==n&&r.nodeType&&!Zn(r,n);)a-=r.scrollLeft||0,u-=r.scrollTop||0,r=r.parentNode
u+=(i=Et(t),Jn.isFirefox()&&"table"===Ot(i)?Qn(Wt(i)).filter((function(e){return"caption"===Ot(e)})).bind((function(e){return Qn($t(e)).map((function(t){var n=t.dom.offsetTop,r=e.dom.offsetTop,o=e.dom.offsetHeight
return n<=r?-o:0}))})).getOr(0):0)}return{x:a,y:u}}(e.body,g(t),n)},x=function(e,t,n){var r=h(e)
return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()})))&&(t=gt.browser.isIE()?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:void 0)},S=function(e){var t,n
return e=g(e),t=x(e,"width"),n=x(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},N=function(e,t){if(!e)return!1
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(ru.test(t)){for(var n=t.toLowerCase().split(/,/),r=e.nodeName.toLowerCase(),o=n.length-1;0<=o;o--)if(n[o]===r)return!0
return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e]
return 0<ma(t,i[0].ownerDocument||i[0],null,i).length},E=function(e,t,n,r){var o,i=[],a=g(e)
for(r=void 0===r,n=n||("BODY"!==C().nodeName?C().parentNode:null),Ct.is(t,"string")&&(t="*"===(o=t)?function(e){return 1===e.nodeType}:function(e){return N(e,o)});a&&a!==n&&a.nodeType&&9!==a.nodeType;){if(!t||"function"==typeof t&&t(a)){if(!r)return[a]
i.push(a)}a=a.parentNode}return r?i:null},_=function(e,t,n){var r=t
if(e)for("string"==typeof t&&(r=function(e){return N(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e
return null},R=function(e,t,r){var o,i="string"==typeof e?g(e):e
if(!i)return!1
if(Ct.isArray(i)&&(i.length||0===i.length))return o=[],eu(i,(function(e,n){e&&o.push(t.call(r,"string"==typeof e?g(e):e,n))})),o
var a=r||n
return t.call(a,i)},A=function(e,t){h(e).each((function(e,n){eu(t,(function(e,t){b(n,t,e)}))}))},T=function(e,t){var n=h(e)
nu?n.each((function(e,n){if(!1!==n.canHaveHTML){for(;n.firstChild;)n.removeChild(n.firstChild)
try{n.innerHTML="<br>"+t,n.removeChild(n.firstChild)}catch(i){Za("<div></div>").html("<br>"+t).contents().slice(1).appendTo(n)}return t}})):n.html(t)},O=function(t,n,r,o,i){return R(t,(function(t){var a="string"==typeof n?e.createElement(n):n
return A(a,r),o&&("string"!=typeof o&&o.nodeType?a.appendChild(o):"string"==typeof o&&T(a,o)),i?a:t.appendChild(a)}))},B=function(t,n,r){return O(e.createElement(t),t,n,r,!0)},P=Ko.encodeAllRaw,D=function(e,t){var n=h(e)
return t?n.each((function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)})).remove():n.remove(),1<n.length?n.toArray():n[0]},L=function(e,t,n){h(e).toggleClass(t,n).each((function(){""===this.className&&Za(this).attr("class",null)}))},I=function(e,t,n){return R(t,(function(t){return Ct.is(t,"array")&&(e=e.cloneNode(!0)),n&&eu(tu(t.childNodes),(function(t){e.appendChild(t)})),t.parentNode.replaceChild(e,t)}))},M=function(e){if(Sn(e)){var t="a"===e.nodeName.toLowerCase()&&!v(e,"href")&&v(e,"id")
if(v(e,"name")||v(e,"data-mce-bookmark")||t)return!0}return!1},F=function(){return e.createRange()},U=function(n,r,i,a){if(Ct.isArray(n)){for(var u=n.length,s=[];u--;)s[u]=U(n[u],r,i,a)
return s}return!t.collect||n!==e&&n!==o||c.push([n,r,i,a]),d.bind(n,r,i,a||V)},z=function(t,n,r){if(Ct.isArray(t)){for(var i=t.length,a=[];i--;)a[i]=z(t[i],n,r)
return a}if(0<c.length&&(t===e||t===o))for(i=c.length;i--;){var u=c[i]
t!==u[0]||n&&n!==u[1]||r&&r!==u[2]||d.unbind(u[0],u[1],u[2])}return d.unbind(t,n,r)},j=function(e){if(e&&Sn(e)){var t=e.getAttribute("data-mce-contenteditable")
return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},V={doc:e,settings:t,win:o,files:i,stdMode:!0,boxModel:!0,styleSheetLoader:s,boundEvents:c,styles:f,schema:l,events:d,isBlock:function(e){if("string"==typeof e)return!!m[e]
if(e){var t=e.nodeType
if(t)return!(1!==t||!m[e.nodeName])}return!1},$:p,$$:h,root:null,clone:function(t,n){if(!nu||1!==t.nodeType||n)return t.cloneNode(n)
var r=e.createElement(t.nodeName)
return eu(y(t),(function(e){b(r,e.nodeName,v(t,e.nodeName))})),r},getRoot:C,getViewPort:function(e){var t=Cn(e)
return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:function(e){e=g(e)
var t=w(e),n=S(e)
return{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:S,getParent:function(e,t,n){var r=E(e,t,n,!1)
return r&&0<r.length?r[0]:null},getParents:E,get:g,getNext:function(e,t){return _(e,t,"nextSibling")},getPrev:function(e,t){return _(e,t,"previousSibling")},select:function(n,r){return ma(n,g(r)||t.root_element||e,[])},is:N,add:O,create:B,createHTML:function(e,t,n){var r,o=""
for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&void 0!==t[r]&&(o+=" "+r+'="'+P(t[r])+'"')
return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(t){var n,r=e.createElement("div"),o=e.createDocumentFragment()
for(o.appendChild(r),t&&(r.innerHTML=t);n=r.firstChild;)o.appendChild(n)
return o.removeChild(r),o},remove:D,setStyle:function(e,n,r){var o=k(n)?h(e).css(n,r):h(e).css(n)
t.update_styles&&ou(f,o)},getStyle:x,setStyles:function(e,n){var r=h(e).css(n)
t.update_styles&&ou(f,r)},removeAllAttribs:function(e){return R(e,(function(e){for(var t=e.attributes,n=t.length-1;0<=n;n--)e.removeAttributeNode(t.item(n))}))},setAttrib:b,setAttribs:A,getAttrib:v,getPos:w,parseStyle:function(e){return f.parse(e)},serializeStyle:function(e,t){return f.serialize(e,t)},addStyle:function(t){var n,o
if(V!==au.DOM&&e===document){if(r[t])return
r[t]=!0}(o=e.getElementById("mceDefaultStyles"))||((o=e.createElement("style")).id="mceDefaultStyles",o.type="text/css",(n=e.getElementsByTagName("head")[0]).firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o)),o.styleSheet?o.styleSheet.cssText+=t:o.appendChild(e.createTextNode(t))},loadCSS:function(e){H((e=e||"").split(","),(function(e){i[e]=!0,s.load(e,u)}))},addClass:function(e,t){h(e).addClass(t)},removeClass:function(e,t){L(e,t,!1)},hasClass:function(e,t){return h(e).hasClass(t)},toggleClass:L,show:function(e){h(e).show()},hide:function(e){h(e).hide()},isHidden:function(e){return"none"===h(e).css("display")},uniqueId:function(e){return(e||"mce_")+a++},setHTML:T,getOuterHTML:function(e){var t="string"==typeof e?g(e):e
return Sn(t)?t.outerHTML:Za("<div></div>").append(Za(t).clone()).html()},setOuterHTML:function(e,t){h(e).each((function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}D(Za(this).html(t),!0)}))},decode:Ko.decode,encode:P,insertAfter:function(e,t){var n=g(t)
return R(e,(function(e){var t=n.parentNode,r=n.nextSibling
return r?t.insertBefore(e,r):t.appendChild(e),e}))},replace:I,rename:function(e,t){var n
return e.nodeName!==t.toUpperCase()&&(n=B(t),eu(y(e),(function(t){b(n,t.nodeName,v(e,t.nodeName))})),I(n,e,!0)),n||e},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode
if(r===n)break
r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return f.toHex(Ct.trim(e))},run:R,getAttribs:y,isEmpty:function(e,t){var n,r,o=0
if(M(e))return!1
if(e=e.firstChild){var i=new Fr(e,e.parentNode),a=l?l.getWhiteSpaceElements():{}
t=t||(l?l.getNonEmptyElements():null)
do{if(n=e.nodeType,Sn(e)){var u=e.getAttribute("data-mce-bogus")
if(u){e=i.next("all"===u)
continue}if(r=e.nodeName.toLowerCase(),t&&t[r]){if("br"!==r)return!1
o++,e=i.next()
continue}if(M(e))return!1}if(8===n)return!1
if(3===n&&!Eo(e.nodeValue))return!1
if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&Eo(e.nodeValue))return!1
e=i.next()}while(e)}return o<=1},createRng:F,nodeIndex:iu,split:function(e,t,n){var r,o,i,a=F()
if(e&&t)return a.setStart(e.parentNode,iu(e)),a.setEnd(t.parentNode,iu(t)),r=a.extractContents(),(a=F()).setStart(t.parentNode,iu(t)+1),a.setEnd(e.parentNode,iu(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(Po(V,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(Po(V,o),e),D(e),n||t},bind:U,unbind:z,fire:function(e,t,n){return d.fire(e,t,n)},getContentEditable:j,getContentEditableParent:function(e){for(var t=C(),n=null;e&&e!==t&&null===(n=j(e));e=e.parentNode);return n},destroy:function(){if(0<c.length)for(var e=c.length;e--;){var t=c[e]
d.unbind(t[0],t[1],t[2])}oe(i,(function(e,t){s.unload(t),delete i[t]})),ma.setDocument&&ma.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0
e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}},q=function(e,t,n){var r=t.keep_values,o={set:function(e,r,o){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||n(),r,o,e[0])),e.attr("data-mce-"+o,r).attr(o,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},i={style:{set:function(t,n){null===n||"object"!=typeof n?(r&&t.attr("data-mce-style",n),null!==n&&"string"==typeof n?(t.removeAttr("style"),t.css(e.parse(n))):t.attr("style",n)):t.css(n)},get:function(t){var n=t.attr("data-mce-style")||t.attr("style")
return e.serialize(e.parse(n),t[0].nodeName)}}}
return r&&(i.href=i.src=o),i}(f,t,(function(){return V}))
return V}(Qa=au=au||{}).DOM=Qa(document),Qa.nodeIndex=iu
var uu=au,su=uu.DOM,cu=Ct.each,lu=Ct.grep,fu=(du.prototype._setReferrerPolicy=function(e){this.settings.referrerPolicy=e},du.prototype.loadScript=function(e,t,n){var r=su,o=r.uniqueId(),i=document.createElement("script")
i.id=o,i.type="text/javascript",i.src=Ct._addCacheSuffix(e),this.settings.referrerPolicy&&r.setAttrib(i,"referrerpolicy",this.settings.referrerPolicy),i.onload=function(){r.remove(o),i&&(i.onreadystatechange=i.onload=i=null),t()},i.onerror=function(){P(n)?n():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(i)},du.prototype.isDone=function(e){return 2===this.states[e]},du.prototype.markDone=function(e){this.states[e]=2},du.prototype.add=function(e,t,n,r){void 0===this.states[e]&&(this.queue.push(e),this.states[e]=0),t&&(this.scriptLoadedCallbacks[e]||(this.scriptLoadedCallbacks[e]=[]),this.scriptLoadedCallbacks[e].push({success:t,failure:r,scope:n||this}))},du.prototype.load=function(e,t,n,r){return this.add(e,t,n,r)},du.prototype.remove=function(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]},du.prototype.loadQueue=function(e,t,n){this.loadScripts(this.queue,e,t,n)},du.prototype.loadScripts=function(e,t,n,r){var o=this,i=[],a=function(e,t){cu(o.scriptLoadedCallbacks[t],(function(t){P(t[e])&&t[e].call(t.scope)})),o.scriptLoadedCallbacks[t]=void 0}
o.queueLoadedCallbacks.push({success:t,failure:r,scope:n||this})
var u=function(){var t,n=lu(e)
e.length=0,cu(n,(function(e){2!==o.states[e]?3!==o.states[e]?1!==o.states[e]&&(o.states[e]=1,o.loading++,o.loadScript(e,(function(){o.states[e]=2,o.loading--,a("success",e),u()}),(function(){o.states[e]=3,o.loading--,i.push(e),a("failure",e),u()}))):a("failure",e):a("success",e)})),o.loading||(t=o.queueLoadedCallbacks.slice(0),o.queueLoadedCallbacks.length=0,cu(t,(function(e){0===i.length?P(e.success)&&e.success.call(e.scope):P(e.failure)&&e.failure.call(e.scope,i)})))}
u()},du.ScriptLoader=new du,du)
function du(e){void 0===e&&(e={}),this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=0,this.settings=e}var mu,pu=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},gu={},hu=pu("en"),vu=function(){return fe(gu,hu.get())},yu={getData:function(){return ie(gu,(function(e){return we({},e)}))},setCode:function(e){e&&hu.set(e)},getCode:function(){return hu.get()},add:function(e,t){var n=gu[e]
n||(gu[e]=n={}),oe(t,(function(e,t){n[t.toLowerCase()]=e}))},translate:function(e){var t,n,r=vu().getOr({}),o=function(e){return P(e)?Object.prototype.toString.call(e):i(e)?"":""+e},i=function(e){return""===e||null==e},a=function(e){var t=o(e)
return fe(r,t.toLowerCase()).map(o).getOr(t)},u=function(e){return e.replace(/{context:\w+}$/,"")}
if(i(e))return""
if(_(t=e)&&de(t,"raw"))return o(e.raw)
if(R(n=e)&&1<n.length){var s=e.slice(1)
return u(a(e[0]).replace(/\{([0-9]+)\}/g,(function(e,t){return de(s,t)?o(s[t]):e})))}return u(a(e))},isRtl:function(){return vu().bind((function(e){return fe(e,"_dir")})).exists((function(e){return"rtl"===e}))},hasCode:function(e){return de(gu,e)}}
function bu(){var e=this,t=[],n={},r={},o=[],i=function(e,t){var n=q(o,(function(n){return n.name===e&&n.state===t}))
H(n,(function(e){return e.callback()}))},a=function(e){var t
return r[e]&&(t=r[e].dependencies),t||[]},u=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},s=function(e,t,o,c,l){var f,d
n[e]||(0!==(f="string"==typeof t?t:t.prefix+t.resource+t.suffix).indexOf("/")&&-1===f.indexOf("://")&&(f=bu.baseURL+"/"+f),n[e]=f.substring(0,f.lastIndexOf("/")),d=function(){var n,r,l,f
i(e,"loaded"),n=t,r=o,l=c,f=a(e),H(f,(function(e){var t=u(n,e)
s(t.resource,t,void 0,void 0)})),r&&(l?r.call(l):r.call(fu))},r[e]?d():fu.ScriptLoader.add(f,d,c,l))},c=function(e,t,i){void 0===i&&(i="added"),de(r,e)&&"added"===i||de(n,e)&&"loaded"===i?t():o.push({name:e,state:i,callback:t})}
return{items:t,urls:n,lookup:r,_listeners:o,get:function(e){return r[e]?r[e].instance:void 0},dependencies:a,requireLangPack:function(e,t){!1!==bu.languageLoad&&c(e,(function(){var r=yu.getCode()
!r||t&&-1===(","+(t||"")+",").indexOf(","+r+",")||fu.ScriptLoader.add(n[e]+"/langs/"+r+".js")}),"loaded")},add:function(e,n,o){var a=n
return t.push(a),r[e]={instance:a,dependencies:o},i(e,"added"),a},remove:function(e){delete n[e],delete r[e]},createUrl:u,addComponents:function(t,n){var r=e.urls[t]
H(n,(function(e){fu.ScriptLoader.add(r+"/"+e)}))},load:s,waitFor:c}}(mu=bu=bu||{}).PluginManager=mu(),mu.ThemeManager=mu()
var Cu,wu=bu,xu=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null===n&&(n=setTimeout((function(){e.apply(null,r),n=null}),t))}}},Su=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null!==n&&clearTimeout(n),n=setTimeout((function(){e.apply(null,r),n=null}),t)}}},Nu=function(e,t){var n=$n(e,t)
return void 0===n||""===n?[]:n.split(" ")},Eu=function(e){return void 0!==e.dom.classList},ku=function(e,t){Eu(e)?e.dom.classList.add(t):function(e,t){return r=t,o=Nu(n=e,"class").concat([r]),Vn(n,"class",o.join(" ")),!0
var n,r,o}(e,t)},_u=function(e,t){return Eu(e)&&e.dom.classList.contains(t)},Ru=function(e,t){var n=[]
return H(Wt(e),(function(e){t(e)&&(n=n.concat([e])),n=n.concat(Ru(e,t))})),n},Au=function(e,t){return n=t,o=void 0===(r=e)?document:r.dom,Rt(o)?[]:j(o.querySelectorAll(n),Et)
var n,r,o},Tu=c("mce-annotation"),Ou=c("data-mce-annotation"),Bu=c("data-mce-annotation-uid"),Pu=function(e,t){var n=e.selection.getRng(),r=Et(n.startContainer),o=Et(e.getBody()),i=t.fold((function(){return"."+Tu()}),(function(e){return"["+Ou()+'="'+e+'"]'})),a=Kt(r,n.startOffset).getOr(r),u=xr(a,i,(function(e){return At(e,o)})),s=function(e,t){return n=t,(r=e.dom)&&r.hasAttribute&&r.hasAttribute(n)?x.some($n(e,t)):x.none()
var n,r}
return u.bind((function(t){return s(t,""+Bu()).bind((function(n){return s(t,""+Ou()).map((function(t){var r=Du(e,n)
return{uid:n,name:t,elements:r}}))}))}))},Du=function(e,t){var n=Et(e.getBody())
return Au(n,"["+Bu()+'="'+t+'"]')},Lu=0,Iu=function(e){var t=(new Date).getTime()
return e+"_"+Math.floor(1e9*Math.random())+ ++Lu+String(t)},Mu=function(e,t){var n,r,o=Ft(e).dom,i=Et(o.createDocumentFragment()),a=(n=t,(r=(o||document).createElement("div")).innerHTML=n,Wt(Et(r)))
un(i,a),sn(e),an(e,i)},Fu=function(e,t){return Et(e.dom.cloneNode(t))},Uu=function(e){return Fu(e,!1)},zu=function(e){return Fu(e,!0)},ju=function(e,t,n){void 0===n&&(n=v)
var r=new Fr(e,t),o=function(e){for(var t;(t=r[e]())&&!On(t)&&!n(t););return x.from(t).filter(On)}
return{current:function(){return x.from(r.current()).filter(On)},next:function(){return o("next")},prev:function(){return o("prev")},prev2:function(){return o("prev2")}}},Hu=function(e,t){var n=t||function(t){return e.isBlock(t)||Ln(t)||Fn(t)},r=function(e,t,n,o){if(On(e)){var i=o(e,t,e.data)
if(-1!==i)return x.some({container:e,offset:i})}return n().bind((function(e){return r(e.container,e.offset,n,o)}))}
return{backwards:function(e,t,o,i){var a=ju(e,i,n)
return r(e,t,(function(){return a.prev().map((function(e){return{container:e,offset:e.length}}))}),o).getOrNull()},forwards:function(e,t,o,i){var a=ju(e,i,n)
return r(e,t,(function(){return a.next().map((function(e){return{container:e,offset:0}}))}),o).getOrNull()}}},Vu=function(e,t,n){return e.isSome()&&t.isSome()?x.some(n(e.getOrDie(),t.getOrDie())):x.none()},qu=Math.round,$u=function(e){return e?{left:qu(e.left),top:qu(e.top),bottom:qu(e.bottom),right:qu(e.right),width:qu(e.width),height:qu(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},Wu=function(e,t){return e=$u(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},Ku=function(e,t,n){return 0<=e&&e<=Math.min(t.height,n.height)/2},Xu=function(e,t){var n=Math.min(t.height/2,e.height/2)
return e.bottom-n<t.top||!(e.top>t.bottom)&&Ku(t.top-e.bottom,e,t)},Yu=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&Ku(t.bottom-e.top,e,t)},Gu=function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom},Ju=function(e){var t=e.startContainer,n=e.startOffset
return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},Qu=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},Zu=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"),es=function(e){return"string"==typeof e&&768<=e.charCodeAt(0)&&Zu.test(e)},ts=Sn,ns=wo,rs=En("display","block table"),os=En("float","left right"),is=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1
return!0}}(ts,ns,g(os)),as=g(En("white-space","pre pre-line pre-wrap")),us=On,ss=Ln,cs=uu.nodeIndex,ls=Qu,fs=function(e){return"createRange"in e?e.createRange():uu.DOM.createRng()},ds=function(e){return e&&/[\r\n\t ]/.test(e)},ms=function(e){return!!e.setStart&&!!e.setEnd},ps=function(e){var t,n=e.startContainer,r=e.startOffset
return!!(ds(e.toString())&&as(n.parentNode)&&On(n)&&(t=n.data,ds(t[r-1])||ds(t[r+1])))},gs=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},hs=function(e){var t=e.getClientRects(),n=0<t.length?$u(t[0]):$u(e.getBoundingClientRect())
return!ms(e)&&ss(e)&&gs(n)?function(e){var t=e.ownerDocument,n=fs(t),r=t.createTextNode(Jr),o=e.parentNode
o.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1)
var i=$u(n.getBoundingClientRect())
return o.removeChild(r),i}(e):gs(n)&&ms(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset
if(t===n&&On(n)&&0===r&&1===o){var i=e.cloneRange()
return i.setEndAfter(n),hs(i)}return null}(e):n},vs=function(e,t){var n=Wu(e,t)
return n.width=1,n.right=n.left+1,n}
function ys(e,t,n){var r=function(){return n=n||function(e){var t,n,r=[],o=function(e){var t,n
0!==e.height&&(0<r.length&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=fs(e.ownerDocument)
if(t<e.data.length){if(es(e.data[t]))return r
if(es(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!ps(n)))return o(vs(hs(n),!1)),r}0<t&&(n.setStart(e,t-1),n.setEnd(e,t),ps(n)||o(vs(hs(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),ps(n)||o(vs(hs(n),!0)))}
if(us(e.container()))return i(e.container(),e.offset()),r
if(ts(e.container()))if(e.isAtEnd())n=ls(e.container(),e.offset()),us(n)&&i(n,n.data.length),is(n)&&!ss(n)&&o(vs(hs(n),!1))
else{if(n=ls(e.container(),e.offset()),us(n)&&i(n,0),is(n)&&e.isAtEnd())return o(vs(hs(n),!1)),r
t=ls(e.container(),e.offset()-1),is(t)&&!ss(t)&&(!rs(t)&&!rs(n)&&is(n)||o(vs(hs(t),!1))),is(n)&&o(vs(hs(n),!0))}return r}(ys(e,t))}
return{container:c(e),offset:c(t),toRange:function(){var n=fs(e.ownerDocument)
return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:r,isVisible:function(){return 0<r().length},isAtStart:function(){return us(e),0===t},isAtEnd:function(){return us(e)?t>=e.data.length:t>=e.childNodes.length},isEqual:function(n){return n&&e===n.container()&&t===n.offset()},getNode:function(n){return ls(e,n?t-1:t)}}}(Cu=ys=ys||{}).fromRangeStart=function(e){return Cu(e.startContainer,e.startOffset)},Cu.fromRangeEnd=function(e){return Cu(e.endContainer,e.endOffset)},Cu.after=function(e){return Cu(e.parentNode,cs(e)+1)},Cu.before=function(e){return Cu(e.parentNode,cs(e))},Cu.isAbove=function(e,t){return Vu(Z(t.getClientRects()),ee(e.getClientRects()),Xu).getOr(!1)},Cu.isBelow=function(e,t){return Vu(ee(t.getClientRects()),Z(e.getClientRects()),Yu).getOr(!1)},Cu.isAtStart=function(e){return!!e&&e.isAtStart()},Cu.isAtEnd=function(e){return!!e&&e.isAtEnd()},Cu.isTextPosition=function(e){return!!e&&On(e.container())},Cu.isElementPosition=function(e){return!1===Cu.isTextPosition(e)}
var bs,Cs,ws=ys,xs=function(e,t){On(t)&&0===t.data.length&&e.remove(t)},Ss=function(e,t,n){var r,o,i,a,u,s,c
Dn(n)?(i=e,a=t,u=n,s=x.from(u.firstChild),c=x.from(u.lastChild),a.insertNode(u),s.each((function(e){return xs(i,e.previousSibling)})),c.each((function(e){return xs(i,e.nextSibling)}))):(r=e,o=n,t.insertNode(o),xs(r,o.previousSibling),xs(r,o.nextSibling))},Ns=On,Es=_n,ks=uu.nodeIndex,_s=function(e){var t=e.parentNode
return Es(t)?_s(t):t},Rs=function(e){return e?ye(e.childNodes,(function(e,t){return Es(t)&&"BR"!==t.nodeName?e=e.concat(Rs(t)):e.push(t),e}),[]):[]},As=function(e){return function(t){return e===t}},Ts=function(e){return(Ns(e)?"text()":e.nodeName.toLowerCase())+"["+function(e){var t=Rs(_s(e)),n=be(t,As(e),e)
t=t.slice(0,n+1)
var r=ye(t,(function(e,n,r){return Ns(n)&&Ns(t[r-1])&&e++,e}),0)
return t=he(t,Nn([e.nodeName])),(n=be(t,As(e),e))-r}(e)+"]"},Os=function(e,t){var n,r,o,i=[],a=t.container(),u=t.offset()
return Ns(a)?n=function(e,t){for(;(e=e.previousSibling)&&Ns(e);)t+=e.data.length
return t}(a,u):(u>=(r=a.childNodes).length?(n="after",u=r.length-1):n="before",a=r[u]),i.push(Ts(a)),o=function(e,t,n){var r=[]
for(t=t.parentNode;t!==e;t=t.parentNode)r.push(t)
return r}(e,a),o=he(o,g(_n)),(i=i.concat(ge(o,Ts))).reverse().join("/")+","+n},Bs=function(e,t){if(!t)return null
var n=t.split(","),r=n[0].split("/"),o=1<n.length?n[1]:"before",i=ye(r,(function(e,t){var n,r,o,i,a=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
return a?("text()"===a[1]&&(a[1]="#text"),n=e,r=a[1],o=parseInt(a[2],10),i=Rs(n),i=he(i,(function(e,t){return!Ns(e)||!Ns(i[t-1])})),(i=he(i,Nn([r])))[o]):null}),e)
return i?Ns(i)?function(e,t){for(var n,r=e,o=0;Ns(r);){if(n=r.data.length,o<=t&&t<=o+n){e=r,t-=o
break}if(!Ns(r.nextSibling)){e=r,t=n
break}o+=n,r=r.nextSibling}return Ns(e)&&t>e.data.length&&(t=e.data.length),ws(e,t)}(i,parseInt(o,10)):(o="after"===o?ks(i)+1:ks(i),ws(i.parentNode,o)):null},Ps=Fn,Ds=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],s=[],c=0,l=e.getRoot()
for(On(a)?s.push(n?function(e,t,n){for(var r=e(t.data.slice(0,n)).length,o=t.previousSibling;o&&On(o);o=o.previousSibling)r+=e(o.data).length
return r}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(c=1,u=Math.max(0,i.length-1)),s.push(e.nodeIndex(i[u],n)+c));a&&a!==l;a=a.parentNode)s.push(e.nodeIndex(a,n))
return s},Ls=function(e,t,n){var r=0
return Ct.each(e.select(t),(function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++})),r},Is=function(e,t){var n,r=t?"start":"end",o=e[r+"Container"],i=e[r+"Offset"]
Sn(o)&&"TR"===o.nodeName&&(o=(n=o.childNodes)[Math.min(t?i:i-1,n.length-1)])&&(i=t?0:o.childNodes.length,e["set"+(t?"Start":"End")](o,i))},Ms=function(e){return Is(e,!0),Is(e,!1),e},Fs=function(e,t){var n
if(Sn(e)&&(e=Qu(e,t),Ps(e)))return e
if(io(e)){if(On(e)&&ro(e)&&(e=e.parentNode),n=e.previousSibling,Ps(n))return n
if(n=e.nextSibling,Ps(n))return n}},Us=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng()
if(Ps(r)||"IMG"===o)return{name:o,index:Ls(n.dom,o,r)}
var a,u,s,c,l,f,d,m=Fs((a=i).startContainer,a.startOffset)||Fs(a.endContainer,a.endOffset)
return m?{name:o=m.tagName,index:Ls(n.dom,o,m)}:(u=e,c=t,l=i,f=(s=n).dom,(d={}).start=Ds(f,u,c,l,!0),s.isCollapsed()||(d.end=Ds(f,u,c,l,!1)),d)},zs=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},js=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName
if("IMG"===u)return{name:u,index:Ls(n,u,a)}
var s,c=Ms(r.cloneRange())
i||(c.collapse(!1),s=zs(n,o+"_end",t),Ss(n,c,s)),(r=Ms(r)).collapse(!0)
var l=zs(n,o+"_start",t)
return Ss(n,r,l),e.moveToBookmark({id:o,keep:!0}),{id:o}},Hs=f(Us,l,!0),Vs=uu.DOM,qs=function(e,t,n){var r=e.getParam(t,n)
if(-1===r.indexOf("="))return r
var o=e.getParam(t,"","hash")
return o.hasOwnProperty(e.id)?o[e.id]:n},$s=function(e){return e.getParam("content_security_policy","")},Ws=function(e){if(e.getParam("force_p_newlines",!1))return"p"
var t=e.getParam("forced_root_block","p")
return!1===t?"":!0===t?"p":t},Ks=function(e){return e.getParam("forced_root_block_attrs",{})},Xs=function(e){return e.getParam("automatic_uploads",!0,"boolean")},Ys=function(e){return e.getParam("icons","","string")},Gs=function(e){return e.getParam("referrer_policy","","string")},Js=function(e){return e.getParam("language","en","string")},Qs=function(e){return e.getParam("indent_use_margin",!1)},Zs=function(e){var t=e.getParam("object_resizing")
return!1!==t&&!gt.iOS&&(k(t)?t:"table,img,figure.image,div")},ec=function(e){return e.getParam("event_root")},tc=function(e){return e.getParam("theme")},nc=function(e){return!1!==e.getParam("inline_boundaries")},rc=function(e){return e.getParam("plugins","","string")},oc=Sn,ic=On,ac=function(e){var t=e.parentNode
t&&t.removeChild(e)},uc=function(e){var t=eo(e)
return{count:e.length-t.length,text:t}},sc=function(e){for(var t;-1!==(t=e.data.lastIndexOf(Qr));)e.deleteData(t,1)},cc=function(e,t){return dc(e),t},lc=function(e,t){var n,r,o=t.container(),i=(n=te(o.childNodes),(-1===(r=F(n,e))?x.none():x.some(r)).map((function(e){return e<t.offset()?ws(o,t.offset()-1):t})).getOr(t))
return dc(e),i},fc=function(e,t){return ws.isTextPosition(t)?function(e,t){return ic(e)&&t.container()===e?(r=t,o=uc((n=e).data.substr(0,r.offset())),i=uc(n.data.substr(r.offset())),0<(o.text+i.text).length?(sc(n),ws(n,r.offset()-o.count)):r):cc(e,t)
var n,r,o,i}(e,t):(n=e,((r=t).container()===n.parentNode?lc:cc)(n,r))
var n,r},dc=function(e){oc(e)&&io(e)&&(ao(e)?e.removeAttribute("data-mce-caret"):ac(e)),ic(e)&&(sc(e),0===e.data.length&&ac(e))},mc=at().browser,pc=Fn,gc=zn,hc=Un,vc=function(e,t,n){var r,o,i,a,u=Wu(t.getBoundingClientRect(),n),s="BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,e.scrollTop||r.scrollTop):(a=e.getBoundingClientRect(),o=e.scrollLeft-a.left,e.scrollTop-a.top)
return u.left+=o,u.right+=o,u.top+=s,u.bottom+=s,u.width=1,0<(i=t.offsetWidth-t.clientWidth)&&(n&&(i*=-1),u.left+=i,u.right+=i),u},yc=function(e,t,n,r){var o,i,a=pu(x.none()),u=Ws(e),s=0<u.length?u:"p",c=function(){!function(e){for(var t=Au(Et(e),"*[contentEditable=false],video,audio,embed,object"),n=0;n<t.length;n++){var r,o=t[n].dom,i=o.previousSibling
lo(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(r.length-1,1)),i=o.nextSibling,co(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(0,1))}}(t),i&&(dc(i),i=null),a.get().each((function(e){Za(e.caret).remove(),a.set(x.none())})),o&&(Dr.clearInterval(o),o=null)},l=function(){o=Dr.setInterval((function(){r()?Za("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden"):Za("div.mce-visual-caret",t).addClass("mce-visual-caret-hidden")}),500)}
return{show:function(e,r){var o,u
if(c(),hc(r))return null
if(!n(r))return i=function(e,t){var n,r=e.ownerDocument.createTextNode(Qr),o=e.parentNode
if(t){if(n=e.previousSibling,no(n)){if(io(n))return n
if(lo(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,no(n)){if(io(n))return n
if(co(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(r,e),u=r.ownerDocument.createRange(),Cc(i.nextSibling)?(u.setStart(i,0),u.setEnd(i,0)):(u.setStart(i,1),u.setEnd(i,1)),u
i=function(e,t,n){var r,o=t.ownerDocument.createElement(e)
o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(((r=document.createElement("br")).setAttribute("data-mce-bogus","1"),r))
var i=t.parentNode
return n?i.insertBefore(o,t):t.nextSibling?i.insertBefore(o,t.nextSibling):i.appendChild(o),o}(s,r,e),o=vc(t,r,e),Za(i).css("top",o.top)
var f=Za('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(o).appendTo(t)[0]
return a.set(x.some({caret:f,element:r,before:e})),a.get().each((function(t){e&&Za(t.caret).addClass("mce-visual-caret-before")})),l(),(u=r.ownerDocument.createRange()).setStart(i,0),u.setEnd(i,0),u},hide:c,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){a.get().each((function(e){var n=vc(t,e.element,e.before)
Za(e.caret).css(we({},n))}))},destroy:function(){return Dr.clearInterval(o)}}},bc=function(){return mc.isIE()||mc.isEdge()||mc.isFirefox()},Cc=function(e){return pc(e)||gc(e)},wc=function(e){return Cc(e)||Rn(e)&&bc()},xc=Fn,Sc=zn,Nc=En("display","block table table-cell table-caption list-item"),Ec=io,kc=ro,_c=Sn,Rc=wo,Ac=function(e,t){for(var n;n=e(t);)if(!kc(n))return n
return null},Tc=function(e,t,n,r,o){var i=new Fr(e,r),a=xc(e)||kc(e)
if(t<0){if(a&&n(e=Ac(i.prev,!0)))return e
for(;e=Ac(i.prev,o);)if(n(e))return e}if(0<t){if(a&&n(e=Ac(i.next,!0)))return e
for(;e=Ac(i.next,o);)if(n(e))return e}return null},Oc=function(e,t){for(;e&&e!==t;){if(Nc(e))return e
e=e.parentNode}return null},Bc=function(e,t,n){return Oc(e.container(),n)===Oc(t.container(),n)},Pc=function(e,t){if(!t)return null
var n=t.container(),r=t.offset()
return _c(n)?n.childNodes[r+e]:null},Dc=function(e,t){var n=t.ownerDocument.createRange()
return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},Lc=function(e,t,n){for(var r,o,i,a=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[a],Ec(r)&&(r=r[a]),xc(r)||Sc(r)){if(i=n,Oc(r,o=t)===Oc(i,o))return r
break}if(Rc(r))break
n=n.parentNode}return null},Ic=f(Dc,!0),Mc=f(Dc,!1),Fc=function(e,t,n){var r,o,i=f(Lc,!0,t),a=f(Lc,!1,t),u=n.startContainer,s=n.startOffset
if(ro(u)){if(_c(u)||(u=u.parentNode),"before"===(o=u.getAttribute("data-mce-caret"))&&(r=u.nextSibling,wc(r)))return Ic(r)
if("after"===o&&(r=u.previousSibling,wc(r)))return Mc(r)}if(!n.collapsed)return n
if(On(u)){if(Ec(u)){if(1===e){if(r=a(u))return Ic(r)
if(r=i(u))return Mc(r)}if(-1===e){if(r=i(u))return Mc(r)
if(r=a(u))return Ic(r)}return n}if(lo(u)&&s>=u.data.length-1)return 1===e&&(r=a(u))?Ic(r):n
if(co(u)&&s<=1)return-1===e&&(r=i(u))?Mc(r):n
if(s===u.data.length)return(r=a(u))?Ic(r):n
if(0===s)return(r=i(u))?Mc(r):n}return n},Uc=function(e,t){return x.from(Pc(e?0:-1,t)).filter(xc)},zc=function(e,t,n){var r=Fc(e,t,n)
return-1===e?ys.fromRangeStart(r):ys.fromRangeEnd(r)},jc=function(e){return x.from(e.getNode()).map(Et)},Hc=function(e,t){for(;t=e(t);)if(t.isVisible())return t
return t},Vc=function(e,t){var n=Bc(e,t)
return!(n||!Ln(e.getNode()))||n};(Cs=bs=bs||{})[Cs.Backwards=-1]="Backwards",Cs[Cs.Forwards=1]="Forwards"
var qc,$c,Wc=Fn,Kc=On,Xc=Sn,Yc=Ln,Gc=wo,Jc=function(e){return yo(e)||!!xo(t=e)&&!0!==W(te(t.getElementsByTagName("*")),(function(e,t){return e||mo(t)}),!1)
var t},Qc=So,Zc=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},el=function(e,t){if(0<e){if(Gc(t.previousSibling)&&!Kc(t.previousSibling))return ws.before(t)
if(Kc(t))return ws(t,0)}if(e<0){if(Gc(t.nextSibling)&&!Kc(t.nextSibling))return ws.after(t)
if(Kc(t))return ws(t,t.data.length)}return e<0&&!Yc(t)?ws.after(t):ws.before(t)},tl=function(e,t,n){var r,o,i,a
if(!Xc(n)||!t)return null
if(t.isEqual(ws.after(n))&&n.lastChild){if(a=ws.after(n.lastChild),e<0&&Gc(n.lastChild)&&Xc(n.lastChild))return Yc(n.lastChild)?ws.before(n.lastChild):a}else a=t
var u,s,c,l=a.container(),f=a.offset()
if(Kc(l)){if(e<0&&0<f)return ws(l,--f)
if(0<e&&f<l.length)return ws(l,++f)
r=l}else{if(e<0&&0<f&&(o=Zc(l,f-1),Gc(o)))return!Jc(o)&&(i=Tc(o,e,Qc,o))?Kc(i)?ws(i,i.data.length):ws.after(i):Kc(o)?ws(o,o.data.length):ws.before(o)
if(0<e&&f<l.childNodes.length&&(o=Zc(l,f),Gc(o)))return Yc(o)?(u=n,(c=(s=o).nextSibling)&&Gc(c)?Kc(c)?ws(c,0):ws.before(c):tl(bs.Forwards,ws.after(s),u)):!Jc(o)&&(i=Tc(o,e,Qc,o))?Kc(i)?ws(i,0):ws.before(i):Kc(o)?ws(o,0):ws.after(o)
r=o||a.getNode()}if((0<e&&a.isAtEnd()||e<0&&a.isAtStart())&&(r=Tc(r,e,y,n,!0),Qc(r,n)))return el(e,r)
o=Tc(r,e,Qc,n)
var d=Ce(q(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode
return n}(l,n),Wc))
return!d||o&&d.contains(o)?o?el(e,o):null:a=0<e?ws.after(d):ws.before(d)},nl=function(e){return{next:function(t){return tl(bs.Forwards,t,e)},prev:function(t){return tl(bs.Backwards,t,e)}}},rl=function(e){return ws.isTextPosition(e)?0===e.offset():wo(e.getNode())},ol=function(e){if(ws.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return wo(e.getNode(!0))},il=function(e,t){return!ws.isTextPosition(e)&&!ws.isTextPosition(t)&&e.getNode()===t.getNode(!0)},al=function(e,t,n){var r=nl(t)
return x.from(e?r.next(n):r.prev(n))},ul=function(e,t,n){return al(e,t,n).bind((function(r){return Bc(n,r,t)&&function(e,t,n){return e?!il(t,n)&&(r=t,!(!ws.isTextPosition(r)&&Ln(r.getNode())))&&ol(t)&&rl(n):!il(n,t)&&rl(t)&&ol(n)
var r}(e,n,r)?al(e,t,r):x.some(r)}))},sl=function(e,t,n,r){return ul(e,t,n).bind((function(n){return r(n)?sl(e,t,n,r):x.some(n)}))},cl=function(e,t){var n,r,o,i,a,u=e?t.firstChild:t.lastChild
return On(u)?x.some(ws(u,e?0:u.data.length)):u?wo(u)?x.some(e?ws.before(u):Ln(a=u)?ws.before(a):ws.after(a)):(r=t,o=u,i=(n=e)?ws.before(o):ws.after(o),al(n,r,i)):x.none()},ll=f(al,!0),fl=f(al,!1),dl=f(cl,!0),ml=f(cl,!1),pl="_mce_caret",gl=function(e){return Sn(e)&&e.id===pl},hl=function(e,t){for(;t&&t!==e;){if(t.id===pl)return t
t=t.parentNode}return null},vl=function(e,t){return Sn(t)&&e.isBlock(t)&&!t.innerHTML&&!gt.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t},yl=function(e,t,n){return!(!1!==t.hasChildNodes()||!hl(e,t)||(o=n,i=(r=t).ownerDocument.createTextNode(Qr),r.appendChild(i),o.setStart(i,0),o.setEnd(i,0),0))
var r,o,i},bl=function(e,t,n,r){var o,i,a,u,s=n[t?"start":"end"],c=e.getRoot()
if(s){for(a=s[0],i=c,o=s.length-1;1<=o;o--){if(u=i.childNodes,yl(c,i,r))return!0
if(s[o]>u.length-1)return!!yl(c,i,r)||function(e,t){return ml(e).fold((function(){return!1}),(function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0}))}(i,r)
i=u[s[o]]}3===i.nodeType&&(a=Math.min(s[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(s[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},Cl=function(e){return On(e)&&0<e.data.length},wl=function(e,t,n){var r,o,i,a,u,s,c=e.get(n.id+"_"+t),l=n.keep
if(c){if(r=c.parentNode,o="start"===t?l?c.hasChildNodes()?(r=c.firstChild,1):Cl(c.nextSibling)?(r=c.nextSibling,0):Cl(c.previousSibling)?(r=c.previousSibling,c.previousSibling.data.length):(r=c.parentNode,e.nodeIndex(c)+1):e.nodeIndex(c):l?c.hasChildNodes()?(r=c.firstChild,1):Cl(c.previousSibling)?(r=c.previousSibling,c.previousSibling.data.length):(r=c.parentNode,e.nodeIndex(c)):e.nodeIndex(c),u=r,s=o,!l){for(a=c.previousSibling,i=c.nextSibling,Ct.each(Ct.grep(c.childNodes),(function(e){On(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));c=e.get(n.id+"_"+t);)e.remove(c,!0)
a&&i&&a.nodeType===i.nodeType&&On(a)&&!gt.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,s=o)}return x.some(ws(u,s))}return x.none()},xl=function(e,t,n){return 2===t?Us(eo,n,e):3===t?(o=(r=e).getRng(),{start:Os(r.dom.getRoot(),ws.fromRangeStart(o)),end:Os(r.dom.getRoot(),ws.fromRangeEnd(o))}):t?{rng:e.getRng()}:js(e,!1)
var r,o},Sl=function(e,t){(function(e,t){var n,r,o,i,a,u,s,c,l,f,d,m,p,g,h=e.dom
if(t){if(g=t,Ct.isArray(g.start))return m=t,p=(d=h).createRng(),bl(d,!0,m,p)&&bl(d,!1,m,p)?x.some(p):x.none()
if("string"==typeof t.start)return x.some((c=t,l=(s=h).createRng(),f=Bs(s.getRoot(),c.start),l.setStart(f.container(),f.offset()),f=Bs(s.getRoot(),c.end),l.setEnd(f.container(),f.offset()),l))
if(t.hasOwnProperty("id"))return a=wl(o=h,"start",i=t),u=wl(o,"end",i),Vu(a,u.or(a),(function(e,t){var n=o.createRng()
return n.setStart(vl(o,e.container()),e.offset()),n.setEnd(vl(o,t.container()),t.offset()),n}))
if(t.hasOwnProperty("name"))return n=h,r=t,x.from(n.select(r.name)[r.index]).map((function(e){var t=n.createRng()
return t.selectNode(e),t}))
if(t.hasOwnProperty("rng"))return x.some(t.rng)}return x.none()})(e,t).each((function(t){e.setRng(t)}))},Nl=function(e){return Sn(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},El=(Jr,function(e){return" "===e}),kl=function(e){return""!==e&&-1!==" \f\n\r\t\v".indexOf(e)},_l=function(e){return!kl(e)&&!El(e)},Rl=function(e){return!!e.nodeType},Al=function(e,t,n){var r,o,i,a,u=n.startOffset,s=n.startContainer
if(!(n.startContainer===n.endContainer&&(a=n.startContainer.childNodes[n.startOffset])&&/^(IMG)$/.test(a.nodeName)||1!==s.nodeType))for(u<(i=s.childNodes).length?(s=i[u],r=new Fr(s,e.getParent(s,e.isBlock))):(s=i[i.length-1],(r=new Fr(s,e.getParent(s,e.isBlock))).next(!0)),o=r.current();o;o=r.next())if(3===o.nodeType&&!Pl(o))return n.setStart(o,0),void t.setRng(n)},Tl=function(e,t,n){if(e){var r=t?"nextSibling":"previousSibling"
for(e=n?e:e[r];e;e=e[r])if(1===e.nodeType||!Pl(e))return e}},Ol=function(e,t){return Rl(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},Bl=function(e,t,n){return e.schema.isValidChild(t,n)},Pl=function(e){return e&&On(e)&&/^([\t \r\n]+|)$/.test(e.nodeValue)},Dl=function(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,(function(e,n){return t[n]||e}))),e},Ll=function(e,t){return e=""+((e=e||"").nodeName||e),t=""+((t=t||"").nodeName||t),e.toLowerCase()===t.toLowerCase()},Il=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},Ml=function(e,t,n){return Il(e,e.getStyle(t,n),n)},Fl=function(e,t){var n
return e.getParent(t,(function(t){return(n=e.getStyle(t,"text-decoration"))&&"none"!==n})),n},Ul=function(e,t,n){return e.getParents(t,n,e.getRoot())},zl=function(e,t,n){var r=["inline","block","selector","attributes","styles","classes"],o=function(e){return le(e,(function(e,t){return z(r,(function(e){return e===t}))}))}
return z(e.formatter.get(t),(function(t){var r=o(t)
return z(e.formatter.get(n),(function(e){var t,n,u,s=o(e)
return t=r,n=s,void 0===u&&(u=a),i(u).eq(t,n)}))}))},jl=Nl,Hl=Ul,Vl=Pl,ql=Ol,$l=function(e,t){for(var n=t;n;){if(Sn(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t
n=n.parentNode}return t},Wl=function(e,t,n,r){for(var o=t.data,i=n;e?0<=i:i<o.length;e?i--:i++)if(r(o.charAt(i)))return e?i+1:i
return-1},Kl=function(e,t,n){return Wl(e,t,n,(function(e){return El(e)||kl(e)}))},Xl=function(e,t,n){return Wl(e,t,n,_l)},Yl=function(e,t,n,r,o,i){var a,u=e.getParent(n,e.isBlock)||t,s=function(t,n,r){var i=Hu(e),s=o?i.backwards:i.forwards
return x.from(s(t,n,(function(e,t){return jl(e.parentNode)?-1:r(o,a=e,t)}),u))}
return s(n,r,Kl).bind((function(e){return i?s(e.container,e.offset+(o?-1:0),Xl):x.some(e)})).orThunk((function(){return a?x.some({container:a,offset:o?0:a.length}):x.none()}))},Gl=function(e,t,n,r,o){On(r)&&0===r.nodeValue.length&&r[o]&&(r=r[o])
for(var i=Hl(e,r),a=0;a<i.length;a++)for(var u=0;u<t.length;u++){var s=t[u]
if((!("collapsed"in s)||s.collapsed===n.collapsed)&&e.is(i[a],s.selector))return i[a]}return r},Jl=function(e,t,n,r){var o,i,a=e.dom,u=a.getRoot()
if(t[0].wrapper||(i=a.getParent(n,t[0].block,u)),i||(o=a.getParent(n,"LI,TD,TH"),i=a.getParent(On(n)?n.parentNode:n,(function(t){return t!==u&&ql(e,t)}),o)),i&&t[0].wrapper&&(i=Hl(a,i,"ul,ol").reverse()[0]||i),!i)for(i=n;i[r]&&!a.isBlock(i[r])&&(i=i[r],!Ll(i,"br")););return i||n},Ql=function(e,t,n,r,o,i,a){var u,s,c,l=u=a?n:o,f=a?"previousSibling":"nextSibling",d=e.getRoot()
if(On(l)&&!Vl(l)&&(a?0<r:i<l.nodeValue.length))return l
for(;;){if(!t[0].block_expand&&e.isBlock(u))return u
for(s=u[f];s;s=s[f])if(!jl(s)&&!Vl(s)&&("BR"!==(c=s).nodeName||!c.getAttribute("data-mce-bogus")||c.nextSibling))return u
if(u===d||u.parentNode===d){l=u
break}u=u.parentNode}return l},Zl=function(e,t,n,r){void 0===r&&(r=!1)
var o=t.startContainer,i=t.startOffset,a=t.endContainer,u=t.endOffset,s=e.dom
return Sn(o)&&o.hasChildNodes()&&(o=Qu(o,i),On(o)&&(i=0)),Sn(a)&&a.hasChildNodes()&&(a=Qu(a,t.collapsed?u:u-1),On(a)&&(u=a.nodeValue.length)),o=$l(s,o),a=$l(s,a),(jl(o.parentNode)||jl(o))&&(o=jl(o)?o:o.parentNode,o=t.collapsed?o.previousSibling||o:o.nextSibling||o,On(o)&&(i=t.collapsed?o.length:0)),(jl(a.parentNode)||jl(a))&&(a=jl(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,On(a)&&(u=t.collapsed?0:a.length)),t.collapsed&&(Yl(s,e.getBody(),o,i,!0,r).each((function(e){var t=e.container,n=e.offset
o=t,i=n})),Yl(s,e.getBody(),a,u,!1,r).each((function(e){var t=e.container,n=e.offset
a=t,u=n}))),(n[0].inline||n[0].block_expand)&&(n[0].inline&&On(o)&&0!==i||(o=Ql(s,n,o,i,a,u,!0)),n[0].inline&&On(a)&&u!==a.nodeValue.length||(a=Ql(s,n,o,i,a,u,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(o=Gl(s,n,t,o,"previousSibling"),a=Gl(s,n,t,a,"nextSibling")),(n[0].block||n[0].selector)&&(o=Jl(e,n,o,"previousSibling"),a=Jl(e,n,a,"nextSibling"),n[0].block&&(s.isBlock(o)||(o=Ql(s,n,o,i,a,u,!0)),s.isBlock(a)||(a=Ql(s,n,o,i,a,u,!1)))),Sn(o)&&(i=s.nodeIndex(o),o=o.parentNode),Sn(a)&&(u=s.nodeIndex(a)+1,a=a.parentNode),{startContainer:o,startOffset:i,endContainer:a,endOffset:u}},ef=function(e,t){var n=e.childNodes
return t>=n.length?t=n.length-1:t<0&&(t=0),n[t]||e},tf=function(e,t,n){var r=t.startContainer,o=t.startOffset,i=t.endContainer,a=t.endOffset,u=function(e){var t=e[0]
return 3===t.nodeType&&t===r&&o>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===a&&0<e.length&&t===i&&3===t.nodeType&&e.splice(e.length-1,1),e},s=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e)
return r},c=function(e,t){do{if(e.parentNode===t)return e
e=e.parentNode}while(e)},l=function(e,t,r){for(var o=r?"nextSibling":"previousSibling",i=e,a=i.parentNode;i&&i!==t;i=a){a=i.parentNode
var c=s(i===e?i:i[o],o)
c.length&&(r||c.reverse(),n(u(c)))}}
if(1===r.nodeType&&r.hasChildNodes()&&(r=ef(r,o)),1===i.nodeType&&i.hasChildNodes()&&(i=ef(i,a-1)),r===i)return n(u([r]))
for(var f=e.findCommonAncestor(r,i),d=r;d;d=d.parentNode){if(d===i)return l(r,f,!0)
if(d===f)break}for(d=i;d;d=d.parentNode){if(d===r)return l(i,f)
if(d===f)break}var m=c(r,f)||r,p=c(i,f)||i
l(r,m,!0)
var g=s(m===r?m:m.nextSibling,"nextSibling",p===i?p.nextSibling:p)
g.length&&n(u(g)),l(i,p)},nf=function(e){var t=[]
if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n))
return t},rf=function(e,t){var n=Au(t,"td[data-mce-selected],th[data-mce-selected]")
return 0<n.length?n:function(e){return q(Y(e,(function(e){var t=Ju(e)
return t?[Et(t)]:[]})),Yr)}(e)},of=function(e){return rf(nf(e.selection.getSel()),Et(e.getBody()))},af=function(e){return Xt(e).fold(c([e]),(function(t){return[e].concat(af(t))}))},uf=function(e){return Yt(e).fold(c([e]),(function(t){return"br"===Ot(t)?Ht(t).map((function(t){return[e].concat(uf(t))})).getOr([]):[e].concat(uf(t))}))},sf=function(e,t){return Vu((a=(i=t).startContainer,u=i.startOffset,On(a)?0===u?x.some(Et(a)):x.none():x.from(a.childNodes[u]).map(Et)),(r=(n=t).endContainer,o=n.endOffset,On(r)?o===r.data.length?x.some(Et(r)):x.none():x.from(r.childNodes[o-1]).map(Et)),(function(t,n){var r=K(af(e),f(At,t)),o=K(uf(e),f(At,n))
return r.isSome()&&o.isSome()})).getOr(!1)
var n,r,o,i,a,u},cf=function(e,t,n,r){var o=n,i=new Fr(n,o),a=le(e.schema.getMoveCaretBeforeOnEnterElements(),(function(e,t){return!U(["td","th","table"],t.toLowerCase())}))
do{if(On(n)&&0!==Ct.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length))
if(a[n.nodeName])return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n))}while(n=r?i.next():i.prev())
"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},lf=function(e){var t=e.selection.getSel()
return t&&0<t.rangeCount},ff=function(e,t){var n=of(e)
0<n.length?H(n,(function(n){var r=n.dom,o=e.dom.createRng()
o.setStartBefore(r),o.setEndAfter(r),t(o,!0)})):t(e.selection.getRng(),!1)},df=function(e,t,n){var r=js(e,t)
n(r),e.moveToBookmark(r)},mf=(qc=Lt,"text",{get:function(e){if(!qc(e))throw new Error("Can only get text value of a text node")
return $c(e).getOr("")},getOption:$c=function(e){return qc(e)?x.from(e.dom.nodeValue):x.none()},set:function(e,t){if(!qc(e))throw new Error("Can only set raw text value of a text node")
e.dom.nodeValue=t}}),pf=function(e){return mf.get(e)},gf=function(e,t,n,r){var o=t.uid,i=void 0===o?Iu("mce-annotation"):o,a=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),u=St("span",e)
ku(u,Tu()),Vn(u,""+Bu(),i),Vn(u,""+Ou(),n)
var s,c=r(i,a),l=c.attributes,f=void 0===l?{}:l,d=c.classes,m=void 0===d?[]:d
return qn(u,f),s=u,H(m,(function(e){ku(s,e)})),u},hf=function(e,t,n,r,o){var i=[],a=gf(e.getDoc(),o,n,r),u=pu(x.none()),s=function(){u.set(x.none())},c=function(e){H(e,l)},l=function(t){var n,r
switch(function(e,t,n,r){return jt(t).fold((function(){return"skipping"}),(function(o){return"br"===r||Lt(a=t)&&pf(a)===Qr?"valid":Dt(i=t)&&_u(i,Tu())?"existing":gl(t.dom)?"caret":Bl(e,n,r)&&Bl(e,Ot(o),n)?"valid":"invalid-child"
var i,a}))}(e,t,"span",Ot(t))){case"invalid-child":s()
var o=Wt(t)
c(o),s()
break
case"valid":var l=u.get().getOrThunk((function(){var e=Uu(a)
return i.push(e),u.set(x.some(e)),e}))
nn(n=t,r=l),an(r,n)}}
return tf(e.dom,t,(function(e){var t
s(),t=j(e,Et),c(t)})),i},vf=function(e){var t,n=(t={},{register:function(e,n){t[e]={name:e,settings:n}},lookup:function(e){return t.hasOwnProperty(e)?x.from(t[e]).map((function(e){return e.settings})):x.none()}});(function(e,t){e.on("init",(function(){e.serializer.addNodeFilter("span",(function(e){H(e,(function(e){var n
n=e,x.from(n.attr(Ou())).bind(t.lookup).each((function(t){!1===t.persistent&&e.unwrap()}))}))}))}))})(e,n)
var r=function(e,t){var n=pu({}),r=function(e,t){o(e,(function(e){return t(e),e}))},o=function(e,t){var r=n.get(),o=t(r.hasOwnProperty(e)?r[e]:{listeners:[],previous:pu(x.none())})
r[e]=o,n.set(r)},i=Su((function(){var t,i,a=n.get(),u=(t=ne(a),(i=L.call(t,0)).sort(void 0),i)
H(u,(function(t){o(t,(function(n){var o=n.previous.get()
return Pu(e,x.some(t)).fold((function(){var e
o.isSome()&&(r(e=t,(function(t){H(t.listeners,(function(t){return t(!1,e)}))})),n.previous.set(x.none()))}),(function(e){var t,i,a,u=e.uid,s=e.name,c=e.elements
o.is(u)||(i=u,a=c,r(t=s,(function(e){H(e.listeners,(function(e){return e(!0,t,{uid:i,nodes:j(a,(function(e){return e.dom}))})}))})),n.previous.set(x.some(u)))})),{previous:n.previous,listeners:n.listeners}}))}))}),30)
return e.on("remove",(function(){i.cancel()})),e.on("NodeChange",(function(){i.throttle()})),{addListener:function(e,t){o(e,(function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}}))}}}(e)
return{register:function(e,t){n.register(e,t)},annotate:function(t,r){n.lookup(t).each((function(n){(function(e,t,n,r){e.undoManager.transact((function(){var o,i,a,u,s=e.selection,c=s.getRng(),l=0<of(e).length
c.collapsed&&!l&&(a=Zl(o=e,i=c,[{inline:!0}]),i.setStart(a.startContainer,a.startOffset),i.setEnd(a.endContainer,a.endOffset),o.selection.setRng(i)),s.getRng().collapsed&&!l?(u=gf(e.getDoc(),r,t,n.decorate),Mu(u,Jr),s.getRng().insertNode(u.dom),s.select(u.dom)):df(s,!1,(function(){ff(e,(function(o){hf(e,o,t,n.decorate,r)}))}))}))})(e,t,n,r)}))},annotationChanged:function(e,t){r.addListener(e,t)},remove:function(t){Pu(e,x.some(t)).each((function(e){var t=e.elements
H(t,ln)}))},getAll:function(t){var n,r,o,i,a=(n=t,r=Et(e.getBody()),o=Au(r,"["+Ou()+'="'+n+'"]'),i={},H(o,(function(e){var t=$n(e,Bu()),n=i.hasOwnProperty(t)?i[t]:[]
i[t]=n.concat([e])})),i)
return ie(a,(function(e){return j(e,(function(e){return e.dom}))}))}}}
function yf(e){return{getBookmark:f(xl,e),moveToBookmark:f(Sl,e)}}(yf=yf||{}).isBookmarkNode=Nl
var bf,Cf=yf,wf=function(e,t){for(;t&&t!==e;){if(Mn(t)||Fn(t))return t
t=t.parentNode}return null},xf=function(e,t,n){if(n.collapsed)return!1
if(gt.browser.isIE()&&n.startOffset===n.endOffset-1&&n.startContainer===n.endContainer){var r=n.startContainer.childNodes[n.startOffset]
if(Sn(r))return z(r.getClientRects(),(function(n){return Gu(n,e,t)}))}return z(n.getClientRects(),(function(n){return Gu(n,e,t)}))},Sf={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(e){return gt.mac?e.metaKey:e.ctrlKey&&!e.altKey}},Nf=Fn,Ef=function(e,t){var n,r,o,i,a,u,s,c,l,f,m,p,g,h,v=t.dom,y=Ct.each,b=t.getDoc(),C=document,w=Math.abs,x=Math.round,S=t.getBody(),N={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},E=function(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))},k=function(e){var n=e.target
!function(e,t){if("longpress"!==e.type&&0!==e.type.indexOf("touch"))return E(e.target)&&!xf(e.clientX,e.clientY,t)
var n=e.touches[0]
return E(e.target)&&!xf(n.clientX,n.clientY,t)}(e,t.selection.getRng())||e.isDefaultPrevented()||t.selection.select(n)},_=function(e){return t.dom.is(e,"figure.image")?e.querySelector("img"):e},R=function(e){var n=Zs(t)
return!!n&&"false"!==e.getAttribute("data-mce-resize")&&e!==t.getBody()&&_t(Et(e),n)},A=function(e,t,n){v.setStyles(_(e),{width:t,height:n})},T=function(e){var d,y,b,C,N,k,_,R=e.screenX-a,T=e.screenY-u
m=R*i[2]+s,p=T*i[3]+c,m=m<5?5:m,p=p<5?5:p,(E(n)&&!1!==t.getParam("resize_img_proportional",!0,"boolean")?!Sf.modifierPressed(e):Sf.modifierPressed(e))&&(w(R)>w(T)?(p=x(m*l),m=x(p/l)):(m=x(p/l),p=x(m*l))),A(r,m,p),d=0<(d=i.startPos.x+R)?d:0,y=0<(y=i.startPos.y+T)?y:0,v.setStyles(o,{left:d,top:y,display:"block"}),o.innerHTML=m+" &times; "+p,i[2]<0&&r.clientWidth<=m&&v.setStyle(r,"left",void 0+(s-m)),i[3]<0&&r.clientHeight<=p&&v.setStyle(r,"top",void 0+(c-p)),(R=S.scrollWidth-g)+(T=S.scrollHeight-h)!=0&&v.setStyles(o,{left:d-R,top:y-T}),f||(b=t,C=n,N=s,k=c,_="corner-"+i.name,b.fire("ObjectResizeStart",{target:C,width:N,height:k,origin:_}),f=!0)},O=function(){var e=f
f=!1
var a,u,s,c,l,d=function(e,r){r&&(n.style[e]||!t.schema.isValid(n.nodeName.toLowerCase(),e)?v.setStyle(_(n),e,r):v.setAttrib(_(n),e,""+r))}
e&&(d("width",m),d("height",p)),v.unbind(b,"mousemove",T),v.unbind(b,"mouseup",O),C!==b&&(v.unbind(C,"mousemove",T),v.unbind(C,"mouseup",O)),v.remove(r),v.remove(o),B(n),e&&(a=t,u=n,s=m,c=p,l="corner-"+i.name,a.fire("ObjectResized",{target:u,width:s,height:c,origin:l}),v.setAttrib(n,"style",v.getAttrib(n,"style"))),t.nodeChanged()},B=function(e){P(),I()
var f=v.getPos(e,S),d=f.x,w=f.y,x=e.getBoundingClientRect(),E=x.width||x.right-x.left,k=x.height||x.bottom-x.top
n!==e&&(n=e,m=p=0)
var B=t.fire("ObjectSelected",{target:e})
R(e)&&!B.isDefaultPrevented()?y(N,(function(e,t){var f=v.get("mceResizeHandle"+t)
f&&v.remove(f),f=v.add(S,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),11===gt.ie&&(f.contentEditable=!1),v.bind(f,"mousedown",(function(f){var m
f.stopImmediatePropagation(),f.preventDefault(),a=(m=f).screenX,u=m.screenY,s=_(n).clientWidth,c=_(n).clientHeight,l=c/s,(i=e).name=t,i.startPos={x:E*e[0]+d,y:k*e[1]+w},g=S.scrollWidth,h=S.scrollHeight,r=n.cloneNode(!0),v.addClass(r,"mce-clonedresizable"),v.setAttrib(r,"data-mce-bogus","all"),r.contentEditable=!1,r.unSelectabe=!0,v.setStyles(r,{left:d,top:w,margin:0}),A(r,E,k),r.removeAttribute("data-mce-selected"),S.appendChild(r),v.bind(b,"mousemove",T),v.bind(b,"mouseup",O),C!==b&&(v.bind(C,"mousemove",T),v.bind(C,"mouseup",O)),o=v.add(S,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},s+" &times; "+c)})),e.elm=f,v.setStyles(f,{left:E*e[0]+d-f.offsetWidth/2,top:k*e[1]+w-f.offsetHeight/2})})):P(),n.setAttribute("data-mce-selected","1")},P=function(){I(),n&&n.removeAttribute("data-mce-selected"),oe(N,(function(e,t){var n=v.get("mceResizeHandle"+t)
n&&(v.unbind(n),v.remove(n))}))},D=function(n){var r,o=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)}
f||t.removed||(y(v.select("img[data-mce-selected],hr[data-mce-selected]"),(function(e){e.removeAttribute("data-mce-selected")})),r="mousedown"===n.type?n.target:e.getNode(),o(r=v.$(r).closest("table,img,figure.image,hr")[0],S)&&(M(),o(e.getStart(!0),r)&&o(e.getEnd(!0),r))?B(r):P())},L=function(e){return Nf(wf(t.getBody(),e))},I=function(){oe(N,(function(e){e.elm&&(v.unbind(e.elm),delete e.elm)}))},M=function(){try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(d){}}
return t.on("init",(function(){var e
M(),(gt.browser.isIE()||gt.browser.isEdge())&&(t.on("mousedown click",(function(e){var n=e.target,r=n.nodeName
f||!/^(TABLE|IMG|HR)$/.test(r)||L(n)||(2!==e.button&&t.selection.select(n,"TABLE"===r),"mousedown"===e.type&&t.nodeChanged())})),e=function(e){var n=function(e){Dr.setEditorTimeout(t,(function(){return t.selection.select(e)}))}
if(L(e.target)||zn(e.target))return e.preventDefault(),void n(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&n(e.target))},v.bind(S,"mscontrolselect",e),t.on("remove",(function(){return v.unbind(S,"mscontrolselect",e)})))
var r=Dr.throttle((function(e){t.composing||D(e)}))
t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",r),t.on("keyup compositionend",(function(e){n&&"TABLE"===n.nodeName&&r(e)})),t.on("hide blur",P),t.on("contextmenu longpress",k,!0)})),t.on("remove",I),{isResizable:R,showResizeRect:B,hideResizeRect:P,updateResizeRect:D,destroy:function(){n=r=null}}},kf=function(e){return Mn(e)||Fn(e)},_f=function(e,t,n){var r,i,a,u,s,c=n
if(c.caretPositionFromPoint)(i=c.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(i.offsetNode,i.offset),r.collapse(!0))
else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t)
else if(c.body.createTextRange){r=c.body.createTextRange()
try{r.moveToPoint(e,t),r.collapse(!0)}catch(o){r=function(e,t,n){var r,o=n.elementFromPoint(e,t),i=n.body.createTextRange()
if(o&&"HTML"!==o.tagName||(o=n.body),i.moveToElementText(o),0<(r=(r=Ct.toArray(i.getClientRects())).sort((function(e,n){return(e=Math.abs(Math.max(e.top-t,e.bottom-t)))-Math.abs(Math.max(n.top-t,n.bottom-t))}))).length){t=(r[0].bottom+r[0].top)/2
try{return i.moveToPoint(e,t),i.collapse(!0),i}catch(u){}}return null}(e,t,n)}return a=r,u=n.body,s=a&&a.parentElement?a.parentElement():null,Fn(function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(s,u,kf))?null:a}return r},Rf=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},Af=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(e,t,n)},Tf=function(e){return e&&"TABLE"===e.nodeName},Of=function(e,t,n){for(var r=new Fr(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(Ln(t))return!0},Bf=function(e,t,n,r,o){var i,a,u=e.getRoot(),s=e.schema.getNonEmptyElements(),c=e.getParent(o.parentNode,e.isBlock)||u
if(r&&Ln(o)&&t&&e.isEmpty(c))return x.some(ys(o.parentNode,e.nodeIndex(o)))
for(var l,f,d=new Fr(o,c);a=d[r?"prev":"next"]();){if("false"===e.getContentEditableParent(a)||(f=u,io(l=a)&&!1===Af(l,f,gl)))return x.none()
if(On(a)&&0<a.nodeValue.length)return!1===function(e,t,n){return Af(e,t,(function(e){return"A"===e.nodeName}))}(a,u)?x.some(ys(a,r?a.nodeValue.length:0)):x.none()
if(e.isBlock(a)||s[a.nodeName.toLowerCase()])return x.none()
i=a}return n&&i?x.some(ys(i,0)):x.none()},Pf=function(e,t,n,r){var o,i,a,u=e.getRoot(),s=!1,c=r[(n?"start":"end")+"Container"],l=r[(n?"start":"end")+"Offset"],f=Sn(c)&&l===c.childNodes.length,d=e.schema.getNonEmptyElements(),m=n
if(io(c))return x.none()
if(Sn(c)&&l>c.childNodes.length-1&&(m=!1),Pn(c)&&(c=u,l=0),c===u){if(m&&(o=c.childNodes[0<l?l-1:0])){if(io(o))return x.none()
if(d[o.nodeName]||Tf(o))return x.none()}if(c.hasChildNodes()){if(l=Math.min(!m&&0<l?l-1:l,c.childNodes.length-1),c=c.childNodes[l],l=On(c)&&f?c.data.length:0,!t&&c===u.lastChild&&Tf(c))return x.none()
if(function(e,t){for(;t&&t!==e;){if(Fn(t))return!0
t=t.parentNode}return!1}(u,c)||io(c))return x.none()
if(c.hasChildNodes()&&!1===Tf(c)){var p=new Fr(o=c,u)
do{if(Fn(o)||io(o)){s=!1
break}if(On(o)&&0<o.nodeValue.length){l=m?0:o.nodeValue.length,c=o,s=!0
break}if(d[o.nodeName.toLowerCase()]&&(!(i=o)||!/^(TD|TH|CAPTION)$/.test(i.nodeName))){l=e.nodeIndex(o),c=o.parentNode,m||l++,s=!0
break}}while(o=m?p.next():p.prev())}}}return t&&(On(c)&&0===l&&Bf(e,f,t,!0,c).each((function(e){c=e.container(),l=e.offset(),s=!0})),Sn(c)&&(!(o=(o=c.childNodes[l])||c.childNodes[l-1])||!Ln(o)||("A",(a=o).previousSibling&&"A"===a.previousSibling.nodeName)||Of(e,o,!1)||Of(e,o,!0)||Bf(e,f,t,!0,o).each((function(e){c=e.container(),l=e.offset(),s=!0})))),m&&!t&&On(c)&&l===c.nodeValue.length&&Bf(e,f,t,!1,c).each((function(e){c=e.container(),l=e.offset(),s=!0})),s?x.some(ys(c,l)):x.none()},Df=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=ys.fromRangeStart(t)
return Pf(e,n,!0,r).each((function(e){n&&ys.isAbove(o,e)||r.setStart(e.container(),e.offset())})),n||Pf(e,n,!1,r).each((function(e){r.setEnd(e.container(),e.offset())})),n&&r.collapse(!0),Rf(t,r)?x.none():x.some(r)},Lf=function(e,t){return e.splitText(t)},If=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset
return t===r&&On(t)?0<n&&n<t.nodeValue.length&&(t=(r=Lf(t,n)).previousSibling,n<o?(t=r=Lf(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(On(t)&&0<n&&n<t.nodeValue.length&&(t=Lf(t,n),n=0),On(r)&&0<o&&o<r.nodeValue.length&&(o=(r=Lf(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}}
function Mf(e){return{walk:function(t,n){return tf(e,t,n)},split:If,normalize:function(t){return Df(e,t).fold(v,(function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0}))}}}(bf=Mf=Mf||{}).compareRanges=Rf,bf.getCaretRangeFromPoint=_f,bf.getSelectedNode=Ju,bf.getNode=Qu
var Ff,Uf,zf,jf,Hf,Vf=Mf,qf=(Ff="height",Uf=function(e){var t=e.dom
return fn(e)?t.getBoundingClientRect().height:t.offsetHeight},{set:function(e,t){if(!D(t)&&!t.match(/^[0-9]+$/))throw new Error(Ff+".set accepts only positive integer values. Value was "+t)
var n=e.dom
jn(n)&&(n.style[Ff]=t+"px")},get:zf=function(e){var t=Uf(e)
if(t<=0||null===t){var n=Kn(e,Ff)
return parseFloat(n)||0}return t},getOuter:zf,aggregate:jf=function(e,t){return W(t,(function(t,n){var r=Kn(e,n),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)},max:function(e,t,n){var r=jf(e,n)
return r<t?t-r:0}}),$f=function(e,t){return e.view(t).fold(c([]),(function(t){var n=e.owner(t),r=$f(e,n)
return[t].concat(r)}))},Wf=Object.freeze({__proto__:null,view:function(e){var t
return(e.dom===document?x.none():x.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(Et)},owner:Ut}),Kf=function(e){return"textarea"===Ot(e)},Xf=function(e,t){var n,r=function(e){var t=e.dom.ownerDocument,n=t.body,r=t.defaultView,o=t.documentElement
if(n===e.dom)return mn(n.offsetLeft,n.offsetTop)
var i=pn(null==r?void 0:r.pageYOffset,o.scrollTop),a=pn(null==r?void 0:r.pageXOffset,o.scrollLeft),u=pn(o.clientTop,n.clientTop),s=pn(o.clientLeft,n.clientLeft)
return gn(e).translate(a-s,i-u)}(e),o=(n=e,qf.get(n))
return{element:e,bottom:r.top+o,height:o,pos:r,cleanup:t}},Yf=function(e,t,n,r){Zf(e,(function(o,i){return Jf(e,t,n,r)}),n)},Gf=function(e,t,n,r,o){var i,a,u={elm:r.element.dom,alignToTop:o}
i=u,e.fire("ScrollIntoView",i).isDefaultPrevented()||(n(t,hn(t).top,r,o),a=u,e.fire("AfterScrollIntoView",a))},Jf=function(e,t,n,r){var o=Et(e.getBody()),i=Et(e.getDoc())
o.dom.offsetWidth
var a=function(e,t){var n=function(e,t){var n=Wt(e)
if(0===n.length||Kf(e))return{element:e,offset:t}
if(t<n.length&&!Kf(n[t]))return{element:n[t],offset:0}
var r=n[n.length-1]
return Kf(r)?{element:e,offset:t}:"img"===Ot(r)?{element:r,offset:1}:Lt(r)?{element:r,offset:pf(r).length}:{element:r,offset:Wt(r).length}}(e,t),r=xt('<span data-mce-bogus="all">\ufeff</span>')
return nn(n.element,r),Xf(r,(function(){return cn(r)}))}(Et(n.startContainer),n.startOffset)
Gf(e,i,t,a,r),a.cleanup()},Qf=function(e,t,n,r){var o=Et(e.getDoc())
Gf(e,o,n,Xf(Et(t),u),r)},Zf=function(e,t,n){var r=n.startContainer,o=n.startOffset,i=n.endContainer,a=n.endOffset
t(Et(r),Et(i))
var u=e.dom.createRng()
u.setStart(r,o),u.setEnd(i,a),e.selection.setRng(n)},ed=function(e,t,n,r){var o,i=e.pos
n?vn(i.left,i.top,r):(o=i.top-t+e.height,vn(i.left,o,r))},td=function(e,t,n,r,o){var i=n+t,a=r.pos.top,u=r.bottom,s=n<=u-a
a<t?ed(r,n,!1!==o,e):i<a?ed(r,n,s?!1!==o:!0===o,e):i<u&&!s&&ed(r,n,!0===o,e)},nd=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
td(e,t,o,n,r)},rd=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
td(e,t,o,n,r)
var i=function(e){var t,n,r,o=Et(document),i=hn(o),a=(t=e,r=(n=Wf).owner(t),$f(n,r)),u=gn(e),s=$(a,(function(e,t){var n=gn(t)
return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0})
return mn(s.left+u.left+i.left,s.top+u.top+i.top)}(n.element),a=Cn(window)
i.top<a.y?yn(n.element,!1!==r):i.top>a.bottom&&yn(n.element,!0===r)},od=function(e,t,n){return Yf(e,nd,t,n)},id=function(e,t,n){return Qf(e,t,nd,n)},ad=function(e,t,n){return Yf(e,rd,t,n)},ud=function(e,t,n){return Qf(e,t,rd,n)},sd=function(e,t,n){(e.inline?od:ad)(e,t,n)},cd=function(e){var t=Zt(e).dom
return e.dom===t.activeElement},ld=function(e){return void 0===e&&(e=Et(document)),x.from(e.dom.activeElement).map(Et)},fd=fr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),dd=(fd.before,fd.on,fd.after,fr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}])),md=(dd.domRange,dd.relative,dd.exact,function(e,t,n,r){return{start:e,soffset:t,finish:n,foffset:r}}),pd=at().browser,gd=function(e,t){var n=Lt(t)?pf(t).length:Wt(t).length+1
return n<e?n:e<0?0:e},hd=function(e){return md(e.start,gd(e.soffset,e.start),e.finish,gd(e.foffset,e.finish))},vd=function(e,t){return!xn(t.dom)&&(Tt(e,t)||At(e,t))},yd=function(e){return function(t){return vd(e,t.start)&&vd(e,t.finish)}},bd=function(e){return!0===e.inline||pd.isIE()},Cd=function(e){return md(Et(e.startContainer),e.startOffset,Et(e.endContainer),e.endOffset)},wd=function(e){var t=document.createRange()
try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),x.some(t)}catch(m){return x.none()}},xd=function(e){var t=bd(e)?function(e){var t
return((t=zt(e).dom.getSelection())&&0!==t.rangeCount?x.from(t.getRangeAt(0)):x.none()).map(Cd).filter(yd(e))}(Et(e.getBody())):x.none()
e.bookmark=t.isSome()?t:e.bookmark},Sd=function(e){return(e.bookmark?e.bookmark:x.none()).bind((function(t){return n=Et(e.getBody()),r=t,x.from(r).filter(yd(n)).map(hd)
var n,r})).bind(wd)},Nd={isEditorUIElement:function(e){var t=e.className.toString()
return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},Ed=function(e){var t=xu((function(){xd(e)}),0)
e.on("init",(function(){var n,r,o
e.inline&&(n=e,r=t,o=function(){r.throttle()},uu.DOM.bind(document,"mouseup",o),n.on("remove",(function(){uu.DOM.unbind(document,"mouseup",o)}))),function(e,t){var n,r
at().browser.isIE()?(r=e).on("focusout",(function(){xd(r)})):(n=t,e.on("mouseup touchend",(function(e){n.throttle()}))),e.on("keyup NodeChange",(function(t){var n
"nodechange"===(n=t).type&&n.selectionChange||xd(e)}))}(e,t)})),e.on("remove",(function(){t.cancel()}))},kd=uu.DOM,_d=function(e,t){var n=e.getParam("custom_ui_selector","","string")
return null!==kd.getParent(t,(function(t){return Nd.isEditorUIElement(t)||!!n&&e.dom.is(t,n)}))},Rd=function(e,t){var n=t.editor
Ed(n),n.on("focusin",(function(){var t=e.focusedEditor
t!==this&&(t&&t.fire("blur",{focusedEditor:this}),e.setActive(this),(e.focusedEditor=this).fire("focus",{blurredEditor:t}),this.focus(!0))})),n.on("focusout",(function(){var t=this
Dr.setEditorTimeout(t,(function(){var n=e.focusedEditor
_d(t,function(t){try{var n=Zt(Et(t.getElement()))
return ld(n).fold((function(){return document.body}),(function(e){return e.dom}))}catch(e){return document.body}}(t))||n!==t||(t.fire("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),Hf||(Hf=function(t){var n=e.activeEditor
n&&function(e){if(Qt()&&B(e.target)){var t=Et(e.target)
if(Dt(t)&&function(e){return B(e.dom.shadowRoot)}(t)&&e.composed&&e.composedPath){var n=e.composedPath()
if(n)return Z(n)}}return x.from(e.target)}(t).each((function(t){t.ownerDocument===document&&(t===document.body||_d(n,t)||e.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))}))},kd.bind(document,"focusin",Hf))},Ad=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(kd.unbind(document,"focusin",Hf),Hf=null)},Td=function(e,t){(function(e,t){return((n=t).collapsed?x.from(Qu(n.startContainer,n.startOffset)).map(Et):x.none()).bind((function(t){return Xr(t)?x.some(t):!1===Tt(e,t)?x.some(e):x.none()}))
var n})(Et(e.getBody()),t).bind((function(e){return dl(e.dom)})).fold((function(){e.selection.normalize()}),(function(t){return e.selection.setRng(t.toRange())}))},Od=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},Bd=function(e){return e.inline?(n=e.getBody())&&function(e){return cd(e)||ld(Zt(t=e)).filter((function(e){return t.dom.contains(e.dom)})).isSome()
var t}(Et(n)):(t=e).iframeElement&&cd(Et(t.iframeElement))
var t,n},Pd=function(e){var t=e.selection,n=e.getBody(),r=t.getRng()
e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===Bd(e)&&Sd(e).each((function(t){e.selection.setRng(t),r=t}))
var o,i,a=(o=e,i=t.getNode(),o.dom.getParent(i,(function(e){return"true"===o.dom.getContentEditable(e)})))
if(e.$.contains(n,a))return Od(a),Td(e,r),void Dd(e)
e.inline||(gt.opera||Od(n),e.getWin().focus()),(gt.gecko||e.inline)&&(Od(n),Td(e,r)),Dd(e)},Dd=function(e){return e.editorManager.setActive(e)},Ld=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset
return x.from(i).map(Et).map((function(e){return r&&t.collapsed?e:Kt(e,o(e,a)).getOr(e)})).bind((function(e){return Dt(e)?x.some(e):jt(e).filter(Dt)})).map((function(e){return e.dom})).getOr(e)},Id=function(e,t,n){return Ld(e,t,!0,n,(function(e,t){return Math.min(e.dom.childNodes.length,t)}))},Md=function(e,t,n){return Ld(e,t,!1,n,(function(e,t){return 0<t?t-1:t}))},Fd=function(e,t){for(var n=e;e&&On(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling
return e||n},Ud=function(e,t){return j(t,(function(t){var n=e.fire("GetSelectionRange",{range:t})
return n.range!==t?n.range:t}))},zd={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},jd=function(e,t,n){var r=n?"lastChild":"firstChild",o=n?"prev":"next"
if(e[r])return e[r]
if(e!==t){var i=e[o]
if(i)return i
for(var a=e.parent;a&&a!==t;a=a.parent)if(i=a[o])return i}},Hd=function(e){var t="a"===e.name&&!e.attr("href")&&e.attr("id")
return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t},Vd=(qd.create=function(e,t){var n=new qd(e,zd[e]||1)
return t&&oe(t,(function(e,t){n.attr(t,e)})),n},qd.prototype.replace=function(e){return e.parent&&e.remove(),this.insert(e,this),this.remove(),this},qd.prototype.attr=function(e,t){var n,r=this
if("string"!=typeof e)return null!=e&&oe(e,(function(e,t){r.attr(t,e)})),r
if(n=r.attributes){if(void 0===t)return n.map[e]
if(null===t){if(e in n.map){delete n.map[e]
for(var o=n.length;o--;)if(n[o].name===e)return n.splice(o,1),r}return r}if(e in n.map){for(o=n.length;o--;)if(n[o].name===e){n[o].value=t
break}}else n.push({name:e,value:t})
return n.map[e]=t,r}},qd.prototype.clone=function(){var e,t=new qd(this.name,this.type)
if(e=this.attributes){var n=[]
n.map={}
for(var r=0,o=e.length;r<o;r++){var i=e[r]
"id"!==i.name&&(n[n.length]={name:i.name,value:i.value},n.map[i.name]=i.value)}t.attributes=n}return t.value=this.value,t.shortEnded=this.shortEnded,t},qd.prototype.wrap=function(e){return this.parent.insert(e,this),e.append(this),this},qd.prototype.unwrap=function(){for(var e=this.firstChild;e;){var t=e.next
this.insert(e,this,!0),e=t}this.remove()},qd.prototype.remove=function(){var e=this.parent,t=this.next,n=this.prev
return e&&(e.firstChild===this?(e.firstChild=t)&&(t.prev=null):n.next=t,e.lastChild===this?(e.lastChild=n)&&(n.next=null):t.prev=n,this.parent=this.next=this.prev=null),this},qd.prototype.append=function(e){e.parent&&e.remove()
var t=this.lastChild
return t?((t.next=e).prev=t,this.lastChild=e):this.lastChild=this.firstChild=e,e.parent=this,e},qd.prototype.insert=function(e,t,n){e.parent&&e.remove()
var r=t.parent||this
return n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,(e.next=t).prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,(e.prev=t).next=e),e.parent=r,e},qd.prototype.getAll=function(e){for(var t=[],n=this.firstChild;n;n=jd(n,this))n.name===e&&t.push(n)
return t},qd.prototype.empty=function(){if(this.firstChild){for(var e=[],t=this.firstChild;t;t=jd(t,this))e.push(t)
for(var n=e.length;n--;)(t=e[n]).parent=t.firstChild=t.lastChild=t.next=t.prev=null}return this.firstChild=this.lastChild=null,this},qd.prototype.isEmpty=function(e,t,n){void 0===t&&(t={})
var r=this.firstChild
if(Hd(this))return!1
if(r)do{if(1===r.type){if(r.attr("data-mce-bogus"))continue
if(e[r.name])return!1
if(Hd(r))return!1}if(8===r.type)return!1
if(3===r.type&&!function(e){if(Eo(e.value)){var t=e.parent
return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)}}(r))return!1
if(3===r.type&&r.parent&&t[r.parent.name]&&Eo(r.value))return!1
if(n&&n(r))return!1}while(r=jd(r,this))
return!0},qd.prototype.walk=function(e){return jd(this,null,e)},qd)
function qd(e,t){this.name=e,1===(this.type=t)&&(this.attributes=[],this.attributes.map={})}var $d=Ct.makeMap,Wd=function(e){var t=[],n=(e=e||{}).indent,r=$d(e.indent_before||""),o=$d(e.indent_after||""),i=Ko.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="html"===e.element_format
return{start:function(e,u,s){var c,l,f,d
if(n&&r[e]&&0<t.length&&0<(d=t[t.length-1]).length&&"\n"!==d&&t.push("\n"),t.push("<",e),u)for(c=0,l=u.length;c<l;c++)f=u[c],t.push(" ",f.name,'="',i(f.value,!0),'"')
t[t.length]=!s||a?">":" />",s&&n&&o[e]&&0<t.length&&0<(d=t[t.length-1]).length&&"\n"!==d&&t.push("\n")},end:function(e){var r
t.push("</",e,">"),n&&o[e]&&0<t.length&&0<(r=t[t.length-1]).length&&"\n"!==r&&t.push("\n")},text:function(e,n){0<e.length&&(t[t.length]=n?e:i(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,r){r?t.push("<?",e," ",i(r),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}},Kd=function(e,t){void 0===t&&(t=ri())
var n=Wd(e)
return(e=e||{}).validate=!("validate"in e)||e.validate,{serialize:function(r){var o=e.validate,i={3:function(e){n.text(e.value,e.raw)},8:function(e){n.comment(e.value)},7:function(e){n.pi(e.name,e.value)},10:function(e){n.doctype(e.value)},4:function(e){n.cdata(e.value)},11:function(e){if(e=e.firstChild)for(;a(e),e=e.next;);}}
n.reset()
var a=function(e){var r,u,s,c,l,f,d,m,p,g=i[e.type]
if(g)g(e)
else{if(r=e.name,u=e.shortEnded,s=e.attributes,o&&s&&1<s.length&&((f=[]).map={},p=t.getElementRule(e.name))){for(d=0,m=p.attributesOrder.length;d<m;d++)(c=p.attributesOrder[d])in s.map&&(l=s.map[c],f.map[c]=l,f.push({name:c,value:l}))
for(d=0,m=s.length;d<m;d++)(c=s[d].name)in f.map||(l=s.map[c],f.map[c]=l,f.push({name:c,value:l}))
s=f}if(n.start(e.name,s,u),!u){if(e=e.firstChild)for(;a(e),e=e.next;);n.end(r)}}}
return 1!==r.type||e.inner?i[11](r):a(r),n.getContent()}}},Xd=function(e,t){return e.replace(new RegExp(t.prefix+"_[0-9]+","g"),(function(e){return fe(t.uris,e).getOr(e)}))},Yd=function(e,t,n){var r,o,i=1,a=e.getShortEndedElements(),u=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g
for(u.lastIndex=r=n;o=u.exec(t);){if(r=u.lastIndex,"/"===o[1])i--
else if(!o[1]){if(o[2]in a)continue
i++}if(0===i)break}return r}
function Gd(e,t){void 0===t&&(t=ri())
var n=function(){}
!1!==(e=e||{}).fix_self_closing&&(e.fix_self_closing=!0)
var r=e.comment?e.comment:n,o=e.cdata?e.cdata:n,i=e.text?e.text:n,a=e.start?e.start:n,u=e.end?e.end:n,s=e.pi?e.pi:n,c=e.doctype?e.doctype:n
return{parse:function(n,l){void 0===l&&(l="html"),function(n,l){void 0===l&&(l="html")
for(var f,d,m,p,g,h,v,y,b,C,w,x,S,N,E,k,_,R,A,T=n.html,O=0,B=[],P=0,D=Ko.decode,L=Ct.makeMap("src,href,data,background,formaction,poster,xlink:href"),I=/((java|vb)script|mhtml):/i,M="html"===l?0:1,F=function(e){for(var t,n=B.length;n--&&B[n].name!==e;);if(0<=n){for(t=B.length-1;n<=t;t--)(e=B[t]).valid&&u(e.name)
B.length=n}},U=function(e,t){return i(Xd(e,n),t)},z=function(t){""!==t&&(">"===t.charAt(0)&&(t=" "+t),e.allow_conditional_comments||"[if"!==t.substr(0,3).toLowerCase()||(t=" "+t),r(Xd(t,n)))},j=function(e,t){var n=e||"",r=!Le(n,"--"),o=function(e,t,n){void 0===n&&(n=0)
var r=e.toLowerCase()
if(-1!==r.indexOf("[if ",n)&&(u=n,/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))){var o=r.indexOf("[endif]",n)
return r.indexOf(">",o)}if(t){var i=r.indexOf(">",n)
return-1!==i?i:r.length}var a=/--!?>/
a.lastIndex=n
var u,s=a.exec(e)
return s?s.index+s[0].length:r.length}(T,r,t)
return e=T.substr(t,o-t),z(r?n+e:e),o+1},H=function(t,r,o,i,a){var u,s,c,l,f,d
if(c=(r=r.toLowerCase())in K?r:D(o||i||a||""),o=fe(n.uris,c).getOr(c),X&&!y&&0==(0===(l=r).indexOf("data-")||0===l.indexOf("aria-"))){if(!(u=N[r])&&E){for(s=E.length;s--&&!(u=E[s]).pattern.test(r););-1===s&&(u=null)}if(!u)return
if(u.validValues&&!(o in u.validValues))return}if(L[r]&&!e.allow_script_urls){var m=o.replace(/[\s\u0000-\u001F]+/g,"")
try{m=decodeURIComponent(m)}catch(k){m=unescape(m)}if(I.test(m))return
if(d=m,!(f=e).allow_html_data_urls&&(/^data:image\//i.test(d)?!1===f.allow_svg_data_urls&&/^data:image\/svg\+xml/i.test(d):/^data:/i.test(d)))return}y&&(r in L||0===r.indexOf("on"))||(p.map[r]=o,p.push({name:r,value:o}))},V=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),q=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,$=t.getShortEndedElements(),W=e.self_closing_elements||t.getSelfClosingElements(),K=t.getBoolAttrs(),X=e.validate,Y=e.remove_internals,G=e.fix_self_closing,J=t.getSpecialElements(),Q=T+">";f=V.exec(Q);){var Z=f[0]
if(O<f.index&&U(D(T.substr(O,f.index-O))),d=f[7])":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),F(d)
else if(d=f[8]){if(f.index+Z.length>T.length){U(D(T.substr(f.index))),O=f.index+Z.length
continue}":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),b=d in $,G&&W[d]&&0<B.length&&B[B.length-1].name===d&&F(d)
var ee=function(e,t){var n=e.exec(t)
if(n){var r=n[1],o=n[2]
return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null}(q,f[9])
if(null!==ee){if("all"===ee){O=Yd(t,T,V.lastIndex),V.lastIndex=O
continue}w=!1}if(!X||(C=t.getElementRule(d))){if(w=!0,X&&(N=C.attributes,E=C.attributePatterns),(S=f[9])?((y=-1!==S.indexOf("data-mce-type"))&&Y&&(w=!1),(p=[]).map={},S.replace(q,H)):(p=[]).map={},X&&!y){if(k=C.attributesRequired,_=C.attributesDefault,R=C.attributesForced,C.removeEmptyAttrs&&!p.length&&(w=!1),R)for(g=R.length;g--;)v=(x=R[g]).name,"{$uid}"===(A=x.value)&&(A="mce_"+P++),p.map[v]=A,p.push({name:v,value:A})
if(_)for(g=_.length;g--;)(v=(x=_[g]).name)in p.map||("{$uid}"===(A=x.value)&&(A="mce_"+P++),p.map[v]=A,p.push({name:v,value:A}))
if(k){for(g=k.length;g--&&!(k[g]in p.map););-1===g&&(w=!1)}if(x=p.map["data-mce-bogus"]){if("all"===x){O=Yd(t,T,V.lastIndex),V.lastIndex=O
continue}w=!1}}w&&a(d,p,b)}else w=!1
if(m=J[d]){m.lastIndex=O=f.index+Z.length,O=(f=m.exec(T))?(w&&(h=T.substr(O,f.index-O)),f.index+f[0].length):(h=T.substr(O),T.length),w&&(0<h.length&&U(h,!0),u(d)),V.lastIndex=O
continue}b||(S&&S.indexOf("/")===S.length-1?w&&u(d):B.push({name:d,valid:w}))}else if(d=f[1])z(d)
else if(d=f[2]){if(!(1==M||e.preserve_cdata||0<B.length&&t.isValidChild(B[B.length-1].name,"#cdata"))){O=j("",f.index+2),V.lastIndex=O
continue}o(d)}else if(d=f[3])c(d)
else{if((d=f[4])||"<!"===Z){O=j(d,f.index+Z.length),V.lastIndex=O
continue}if(d=f[5]){if(1!=M){O=j("?",f.index+2),V.lastIndex=O
continue}s(d,f[6])}}O=f.index+Z.length}for(O<T.length&&U(D(T.substr(O))),g=B.length-1;0<=g;g--)(d=B[g]).valid&&u(d.name)}(function(e){for(var t,n=/data:[^;]+;base64,([a-z0-9\+\/=]+)/gi,r=[],o={},i=Iu("img"),a=0,u=0;t=n.exec(e);){var s=t[0],c=i+"_"+u++
o[c]=s,a<t.index&&r.push(e.substr(a,t.index-a)),r.push(c),a=t.index+s.length}return 0===a?{prefix:i,uris:o,html:e}:(a<e.length&&r.push(e.substr(a)),{prefix:i,uris:o,html:r.join("")})}(n),l)}}}(Gd=Gd||{}).findEndTag=Yd
var Jd,Qd=Gd,Zd=function(e,t){var n,r,o,i,a,u,s,c=t,l=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,f=e.schema
a=e.getTempAttrs(),u=c,s=new RegExp(["\\s?("+a.join("|")+')="[^"]+"'].join("|"),"gi"),c=u.replace(s,"")
for(var d=f.getShortEndedElements();i=l.exec(c);)r=l.lastIndex,o=i[0].length,n=d[i[1]]?r:Qd.findEndTag(f,c,r),c=c.substring(0,r-o)+c.substring(n),l.lastIndex=r-o
return eo(c)},em=Zd,tm=Ct.each,nm=function(e){this.compare=function(t,n){if(t.nodeName!==n.nodeName)return!1
var r=function(t){var n={}
return tm(e.getAttribs(t),(function(r){var o=r.nodeName.toLowerCase()
0!==o.indexOf("_")&&"style"!==o&&0!==o.indexOf("data-")&&(n[o]=e.getAttrib(t,o))})),n},o=function(e,t){var n,r
for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1
if(e[r]!==n)return!1
delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1
return!0}
return!(!o(r(t),r(n))||!o(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))||Nl(t)||Nl(n))}},rm=function(e,t,n){return x.from(n.container()).filter(On).exists((function(r){var o=e?0:-1
return t(r.data.charAt(n.offset()+o))}))},om=f(rm,!0,kl),im=f(rm,!1,kl),am=function(e){var t=e.container()
return On(t)&&(0===t.data.length||Zr(t.data)&&Cf.isBookmarkNode(t.parentNode))},um=function(e,t){return function(n){return x.from(Pc(e?0:-1,n)).filter(t).isSome()}},sm=function(e){return In(e)&&"block"===Kn(Et(e),"display")},cm=function(e){return Fn(e)&&!(Sn(t=e)&&"all"===t.getAttribute("data-mce-bogus"))
var t},lm=um(!0,sm),fm=um(!1,sm),dm=um(!0,zn),mm=um(!1,zn),pm=um(!0,Rn),gm=um(!1,Rn),hm=um(!0,cm),vm=um(!1,cm),ym=function(e){sn(e),an(e,xt('<br data-mce-bogus="1">'))},bm=function(e){Yt(e).each((function(t){Ht(t).each((function(n){Hr(e)&&qr(t)&&Hr(n)&&cn(t)}))}))},Cm=function(e,t){return function(e,t,n){return Tt(t,e)?function(e,t){for(var n=P(t)?t:v,r=e.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,a=Et(i)
if(o.push(a),!0===n(a))break
r=i}return o}(e,(function(e){return n(e)||At(e,t)})).slice(0,-1):[]}(e,t,v)},wm=function(e,t){return[e].concat(Cm(e,t))},xm=function(e,t,n){return sl(e,t,n,am)},Sm=function(e,t){return K(wm(Et(t.container()),e),Hr)},Nm=function(e,t,n){return xm(e,t.dom,n).forall((function(e){return Sm(t,n).fold((function(){return!1===Bc(e,n,t.dom)}),(function(r){return!1===Bc(e,n,t.dom)&&Tt(r,Et(e.container()))}))}))},Em=function(e,t,n){return Sm(t,n).fold((function(){return xm(e,t.dom,n).forall((function(e){return!1===Bc(e,n,t.dom)}))}),(function(t){return xm(e,t.dom,n).isNone()}))},km=f(Em,!1),_m=f(Em,!0),Rm=f(Nm,!1),Am=f(Nm,!0),Tm=function(e){return jc(e).exists(qr)},Om=function(e,t,n){var r=q(wm(Et(n.container()),t),Hr),o=Z(r).getOr(t)
return al(e,o.dom,n).filter(Tm)},Bm=function(e,t){return jc(t).exists(qr)||Om(!0,e,t).isSome()},Pm=function(e,t){return n=t,x.from(n.getNode(!0)).map(Et).exists(qr)||Om(!1,e,t).isSome()
var n},Dm=f(Om,!1),Lm=f(Om,!0),Im=function(e){return ys.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},Mm=function(e,t){var n=q(wm(Et(t.container()),e),Hr)
return Z(n).getOr(e)},Fm=function(e,t){return Im(t)?im(t):im(t)||fl(Mm(e,t).dom,t).exists(im)},Um=function(e,t){return Im(t)?om(t):om(t)||ll(Mm(e,t).dom,t).exists(om)},zm=function(e){return jc(e).bind((function(e){return br(e,Dt)})).exists((function(e){return t=Kn(e,"white-space"),U(["pre","pre-wrap"],t)
var t}))},jm=function(e,t){return!zm(t)&&(km(e,t)||Rm(e,t)||Pm(e,t)||Fm(e,t))},Hm=function(e,t){return!zm(t)&&(_m(e,t)||Am(e,t)||Bm(e,t)||Um(e,t))},Vm=function(e,t){return jm(e,t)||Hm(e,(r=(n=t).container(),o=n.offset(),On(r)&&o<r.data.length?ys(r,o+1):n))
var n,r,o},qm=function(e,t){return El(e.charAt(t))},$m=function(e){var t=e.container()
return On(t)&&De(t.data,Jr)},Wm=function(e,t){return x.some(t).filter($m).bind((function(t){var n,r,o,i,a,u,s,c,l=t.container()
return a=e,s=(u=l).data,c=ys(u,0),qm(s,0)&&!Vm(a,c)&&(u.data=" "+s.slice(1),1)||function(e){var t,n=e.data,r=(t=n.split(""),j(t,(function(e,n){return El(e)&&0<n&&n<t.length-1&&_l(t[n-1])&&_l(t[n+1])?" ":e})).join(""))
return r!==n&&(e.data=r,!0)}(l)||(n=e,o=(r=l).data,i=ys(r,o.length-1),qm(o,o.length-1)&&!Vm(n,i)&&(r.data=o.slice(0,-1)+" ",1))?x.some(t):x.none()}))},Km=function(e){var t=Et(e.getBody())
e.selection.isCollapsed()&&Wm(t,ys.fromRangeStart(e.selection.getRng())).each((function(t){e.selection.setRng(t.toRange())}))},Xm=function(e,t,n){var r,o,i,a,u,s,c,l
0!==n&&(r=Et(e),o=yr(r,Hr).getOr(r),i=e.data.slice(t,t+n),a=t+n>=e.data.length&&Hm(o,ws(e,e.data.length)),u=0===t&&jm(o,ws(e,0)),e.replaceData(t,n,(c=u,l=a,W(s=i,(function(e,t){return kl(t)||El(t)?e.previousCharIsSpace||""===e.str&&c||e.str.length===s.length-1&&l?{previousCharIsSpace:!1,str:e.str+Jr}:{previousCharIsSpace:!0,str:e.str+" "}:{previousCharIsSpace:!1,str:e.str+t}}),{previousCharIsSpace:!1,str:""}).str)))},Ym=function(e,t){var n=e.data.slice(t),r=n.length-Fe(n).length
return Xm(e,t,r)},Gm=function(e,t){var n=e.data.slice(0,t),r=n.length-Ue(n).length
return Xm(e,t-r,r)},Jm=function(e,t,n,r){void 0===r&&(r=!0)
var o=Ue(e.data).length,i=r?e:t,a=r?t:e
return r?i.appendData(a.data):i.insertData(0,a.data),cn(Et(a)),n&&Ym(i,o),i},Qm=function(e,t){return r=e,o=(n=t).container(),i=n.offset(),!1===ws.isTextPosition(n)&&o===r.parentNode&&i>ws.before(r).offset()?ws(t.container(),t.offset()-1):t
var n,r,o,i},Zm=function(e){return wo(e.previousSibling)?x.some((t=e.previousSibling,On(t)?ws(t,t.data.length):ws.after(t))):e.previousSibling?ml(e.previousSibling):x.none()
var t},ep=function(e){return wo(e.nextSibling)?x.some((t=e.nextSibling,On(t)?ws(t,0):ws.before(t))):e.nextSibling?dl(e.nextSibling):x.none()
var t},tp=function(e,t){return Zm(t).orThunk((function(){return ep(t)})).orThunk((function(){return n=e,r=t,o=ws.before(r.previousSibling?r.previousSibling:r.parentNode),fl(n,o).fold((function(){return ll(n,ws.after(r))}),x.some)
var n,r,o}))},np=function(e,t){return ep(t).orThunk((function(){return Zm(t)})).orThunk((function(){return r=t,ll(n=e,ws.after(r)).fold((function(){return fl(n,ws.before(r))}),x.some)
var n,r}))},rp=function(e,t,n){return(e?np:tp)(t,n).map(f(Qm,n))},op=function(e,t,n){n.fold((function(){e.focus()}),(function(n){e.selection.setRng(n.toRange(),t)}))},ip=function(e,t){return t&&de(e.schema.getBlockElements(),Ot(t))},ap=function(e){if(To(e)){var t=xt('<br data-mce-bogus="1">')
return sn(e),an(e,t),x.some(ws.before(t.dom))}return x.none()},up=function(e,t,n,r){void 0===r&&(r=!0)
var o,i,a=rp(t,e.getBody(),n.dom),u=yr(n,f(ip,e),(o=e.getBody(),function(e){return e.dom===o})),s=function(e,t,n){var r,o,i,a,u=Ht(e).filter(Lt),s=Vt(e).filter(Lt)
return cn(e),o=s,i=t,a=function(e,t,r){var o=e.dom,i=t.dom,a=o.data.length
return Jm(o,i,n),r.container()===i?ws(o,a):r},((r=u).isSome()&&o.isSome()&&i.isSome()?x.some(a(r.getOrDie(),o.getOrDie(),i.getOrDie())):x.none()).orThunk((function(){return n&&(u.each((function(e){return Gm(e.dom,e.dom.length)})),s.each((function(e){return Ym(e.dom,0)}))),t}))}(n,a,(i=n,de(e.schema.getTextInlineElements(),Ot(i))))
e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):u.bind(ap).fold((function(){r&&op(e,t,s)}),(function(n){r&&op(e,t,x.some(n))}))},sp=function(e,t){return{start:e,end:t}},cp=fr([{removeTable:["element"]},{emptyCells:["cells"]},{deleteCellSelection:["rng","cell"]}]),lp=function(e,t){return xr(Et(e),"td,th",t)},fp=function(e,t){return Cr(e,"table",t)},dp=function(e){return!At(e.start,e.end)},mp=function(e,t){return fp(e.start,t).bind((function(n){return fp(e.end,t).bind((function(e){return t=At(n,e),r=n,t?x.some(r):x.none()
var t,r}))}))},pp=function(e){return Au(e,"td,th")},gp=function(e,t){return mp(t,e).isSome()},hp=function(e,t,n){return e.filter((function(e){return dp(e)&&gp(n,e)})).orThunk((function(){return function(e,t){var n=lp(t.startContainer,e),r=lp(t.endContainer,e)
return t.collapsed?x.none():Vu(n,r,sp).fold((function(){return n.fold((function(){return r.bind((function(t){return fp(t,e).bind((function(e){return Z(pp(e)).map((function(e){return sp(e,t)}))}))}))}),(function(t){return fp(t,e).bind((function(e){return ee(pp(e)).map((function(e){return sp(t,e)}))}))}))}),(function(t){return gp(e,t)?x.none():(r=e,fp((n=t).start,r).bind((function(e){return ee(pp(e)).map((function(e){return sp(n.start,e)}))})))
var n,r}))}(n,t)})).bind((function(e){return mp(t=e,n).map((function(e){return{rng:t,table:e,cells:pp(e)}}))
var t}))},vp=function(e,t){return X(e,(function(e){return At(e,t)}))},yp=function(e){return Vu(vp((t=e).cells,t.rng.start),vp(t.cells,t.rng.end),(function(e,n){return t.cells.slice(e,n+1)})).map((function(t){var n=e.cells
return t.length===n.length?cp.removeTable(e.table):cp.emptyCells(t)}))
var t},bp=function(e,t){var n,r,o,i,a,u=(n=e,function(e){return At(n,e)}),s=(o=u,i=lp((r=t).startContainer,o),a=lp(r.endContainer,o),Vu(i,a,sp))
return function(e,t,n){return e.filter((function(e){return o=n,!dp(r=e)&&mp(r,o).exists((function(e){var t=e.dom.rows
return 1===t.length&&1===t[0].cells.length}))&&sf(e.start,t)
var r,o})).map((function(e){return e.start}))}(s,t,u).map((function(e){return cp.deleteCellSelection(t,e)})).orThunk((function(){return hp(s,t,u).bind(yp)}))},Cp=function(e){var t
return(8===Bt(t=e)||"#comment"===Ot(t)?Ht:Yt)(e).bind(Cp).orThunk((function(){return x.some(e)}))},wp=function(e,t){return H(t,ym),e.selection.setCursorLocation(t[0].dom,0),!0},xp=function(e,t,n){t.deleteContents()
var r,o,i=Cp(n).getOr(n),a=Et(e.dom.getParent(i.dom,e.dom.isBlock))
return To(a)&&(ym(a),e.selection.setCursorLocation(a.dom,0)),At(n,a)||(r=jt(a).is(n)?[]:jt(o=a).map(Wt).map((function(e){return q(e,(function(e){return!At(o,e)}))})).getOr([]),H(r.concat(Wt(n)),(function(e){At(e,a)||Tt(e,a)||cn(e)}))),!0},Sp=function(e,t){return up(e,!1,t),!0},Np=function(e,t){return K(wm(t,e),Yr)},Ep=function(e,t){return K(wm(t,e),(function(e){return"caption"===Ot(e)}))},kp=function(e,t){return ym(t),e.selection.setCursorLocation(t.dom,0),x.some(!0)},_p=function(e,t){return(e?pm:gm)(t)},Rp=function(e,t,n){var r=Et(e.getBody())
return Ep(r,n).fold((function(){return function(e,t,n,r){var o=ws.fromRangeStart(e.selection.getRng())
return Np(n,r).bind((function(r){return To(r)?kp(e,r):(i=n,a=r,u=o,ul(t,e.getBody(),u).bind((function(e){return Np(i,Et(e.getNode())).map((function(e){return!1===At(e,a)}))})))
var i,a,u})).getOr(!1)}(e,t,r,n)||(o=e,i=t,a=ws.fromRangeStart(o.selection.getRng()),_p(i,a)||al(i,o.getBody(),a).exists((function(e){return _p(i,e)})))
var o,i,a}),(function(n){return o=e,i=t,a=r,u=n,s=ws.fromRangeStart(o.selection.getRng()),(To(u)?kp(o,u):function(e,t,n,r,o){return ul(n,e.getBody(),o).bind((function(i){return s=n,c=o,l=i,dl((u=r).dom).bind((function(e){return ml(u.dom).map((function(t){return s?c.isEqual(e)&&l.isEqual(t):c.isEqual(t)&&l.isEqual(e)}))})).getOr(!0)?kp(e,r):(a=r,Ep(t,Et(i.getNode())).map((function(e){return!1===At(e,a)})))
var a,u,s,c,l})).or(x.some(!0))}(o,a,i,u,s)).getOr(!1)
var o,i,a,u,s}))},Ap=function(e,t){var n,r,o,i,a,u=Et(e.selection.getStart(!0)),s=of(e)
return e.selection.isCollapsed()&&0===s.length?Rp(e,t,u):(r=u,o=Et((n=e).getBody()),i=n.selection.getRng(),0!==(a=of(n)).length?wp(n,a):function(e,t,n,r){return Ep(t,r).fold((function(){return r=e,bp(t,n).map((function(e){return e.fold(f(Sp,r),f(wp,r),f(xp,r))}))
var r}),(function(t){return kp(e,t)})).getOr(!1)}(n,o,i,r))},Tp=function(e){return e.collapsed?e:function(e){var t=ws.fromRangeStart(e),n=ws.fromRangeEnd(e),r=e.commonAncestorContainer
return al(!1,r,n).map((function(o){return!Bc(t,n,r)&&Bc(t,o,r)?(i=t.container(),a=t.offset(),u=o.container(),s=o.offset(),(c=document.createRange()).setStart(i,a),c.setEnd(u,s),c):e
var i,a,u,s,c})).getOr(e)}(e)},Op=function(e,t){var n,r,o,i=t.firstChild,a=t.lastChild
return i&&"meta"===i.name&&(i=i.next),a&&"mce_marker"===a.attr("id")&&(a=a.prev),r=a,o=(n=e).getNonEmptyElements(),r&&(r.isEmpty(o)||function(e,t){var n,r
return e.getBlockElements()[t.name]&&(r=t).firstChild&&r.firstChild===r.lastChild&&("br"===(n=t.firstChild).name||n.value===Jr)}(n,r))&&(a=a.prev),!(!i||i!==a||"ul"!==i.name&&"ol"!==i.name)},Bp=function(e){return 0<e.length&&(!(t=e[e.length-1]).firstChild||function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&((t=e.firstChild).data===Jr||Ln(t))
var t}(t))?e.slice(0,-1):e
var t},Pp=function(e,t){var n=e.getParent(t,e.isBlock)
return n&&"LI"===n.nodeName?n:null},Dp=function(e,t){var n=ws.after(e),r=nl(t).prev(n)
return r?r.toRange():null},Lp=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,p,g,h,v,y,b,C,w,x,S=(o=t,i=r,c=e.serialize(i),u=(a=o.createFragment(c)).firstChild,s=a.lastChild,u&&"META"===u.nodeName&&u.parentNode.removeChild(u),s&&"mce_marker"===s.id&&s.parentNode.removeChild(s),a),N=Pp(t,n.startContainer),E=Bp((l=S.firstChild,Ct.grep(l.childNodes,(function(e){return"LI"===e.nodeName})))),k=t.getRoot(),_=function(e){var r=ws.fromRangeStart(n),o=nl(t.getRoot()),i=1===e?o.prev(r):o.next(r)
return!i||Pp(t,i.getNode())!==N}
return _(1)?function(e,t,n){var r,o,i,a,u=e.parentNode
return Ct.each(t,(function(t){u.insertBefore(t,e)})),r=e,o=n,i=ws.before(r),(a=nl(o).next(i))?a.toRange():null}(N,E,k):_(2)?(f=N,d=E,m=k,t.insertAfter(d.reverse(),f),Dp(d[0],m)):(g=E,h=k,v=p=N,b=(y=n).cloneRange(),C=y.cloneRange(),b.setStartBefore(v),C.setEndAfter(v),w=[b.cloneContents(),C.cloneContents()],(x=p.parentNode).insertBefore(w[0],p),Ct.each(g,(function(e){x.insertBefore(e,p)})),x.insertBefore(w[1],p),x.removeChild(p),Dp(g[g.length-1],h))},Ip=Un,Mp=function(e,t,n){var r,o,i,a,u,s,c,l,f,d=e.selection,m=e.dom;/^ | $/.test(t)&&(s=m,c=d.getRng(),l=t,f=Et(s.getRoot()),l=jm(f,ws.fromRangeStart(c))?l.replace(/^ /,"&nbsp;"):l.replace(/^&nbsp;/," "),t=l=Hm(f,ws.fromRangeEnd(c))?l.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):l.replace(/&nbsp;(<br( \/)?>)?$/," "))
var p=e.parser,g=n.merge,h=Kd({validate:e.getParam("validate")},e.schema),v='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',y={content:t,format:"html",selection:!0,paste:n.paste}
if((y=e.fire("BeforeSetContent",y)).isDefaultPrevented())e.fire("SetContent",{content:y.content,format:"html",selection:!0,paste:n.paste})
else{-1===(t=y.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,v)
var b,C,w=(a=d.getRng()).startContainer||(a.parentElement?a.parentElement():null),S=e.getBody()
w===S&&d.isCollapsed()&&m.isBlock(S.firstChild)&&(b=e,(C=S.firstChild)&&!b.schema.getShortEndedElements()[C.nodeName])&&m.isEmpty(S.firstChild)&&((a=m.createRng()).setStart(S.firstChild,0),a.setEnd(S.firstChild,0),d.setRng(a)),d.isCollapsed()||function(e){var t=e.dom,n=Tp(e.selection.getRng())
e.selection.setRng(n)
var r,o,i=t.getParent(n.startContainer,Ip)
r=n,null!==(o=i)&&o===t.getParent(r.endContainer,Ip)&&sf(Et(o),r)?xp(e,n,Et(i)):e.getDoc().execCommand("Delete",!1,null)}(e)
var N,E,k,_,R,A,T,O,B,P,D,L,I,M,F={context:(r=d.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0},U=p.parse(t,F)
if(!0===n.paste&&Op(e.schema,U)&&Pp(m,r))return a=Lp(h,m,d.getRng(),U),d.setRng(a),void e.fire("SetContent",y)
if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(U),"mce_marker"===(u=U.lastChild).attr("id"))for(u=(i=u).prev;u;u=u.walk(!0))if(3===u.type||!m.isBlock(u.name)){e.schema.isValidChild(u.parent.name,"span")&&u.parent.insert(i,u,"br"===u.name)
break}if(e._selectionOverrides.showBlockCaretContainer(r),F.invalid){for(e.selection.setContent(v),r=d.getNode(),o=e.getBody(),9===r.nodeType?r=u=o:u=r;u!==o;)u=(r=u).parentNode
t=r===o?o.innerHTML:m.getOuterHTML(r),t=h.serialize(p.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,(function(){return h.serialize(U)})))),r===o?m.setHTML(o,t):m.setOuterHTML(r,t)}else N=e,E=t=h.serialize(U),"all"===(k=r).getAttribute("data-mce-bogus")?k.parentNode.insertBefore(N.dom.createFragment(E),k):(_=k.firstChild,R=k.lastChild,!_||_===R&&"BR"===_.nodeName?N.dom.setHTML(k,E):N.selection.setContent(E))
T=g,P=(A=e).schema.getTextInlineElements(),D=A.dom,T&&(O=A.getBody(),B=new nm(D),Ct.each(D.select("*[data-mce-fragment]"),(function(e){for(var t=e.parentNode;t&&t!==O;t=t.parentNode)P[e.nodeName.toLowerCase()]&&B.compare(t,e)&&D.remove(e,!0)}))),function(e,t){var n,r,o=e.dom,i=e.selection
if(t){i.scrollIntoView(t)
var a=function(t){for(var n=e.getBody();t&&t!==n;t=t.parentNode)if("false"===o.getContentEditable(t))return t
return null}(t)
if(a)return o.remove(t),i.select(a)
var u=o.createRng(),s=t.previousSibling
s&&3===s.nodeType?(u.setStart(s,s.nodeValue.length),gt.ie||(r=t.nextSibling)&&3===r.nodeType&&(s.appendData(r.data),r.parentNode.removeChild(r))):(u.setStartBefore(t),u.setEndBefore(t))
var c=o.getParent(t,o.isBlock)
o.remove(t),c&&o.isEmpty(c)&&(e.$(c).empty(),u.setStart(c,0),u.setEnd(c,0),Ip(c)||c.getAttribute("data-mce-fragment")||!(n=function(t){var n=ws.fromRangeStart(t)
if(n=nl(e.getBody()).next(n))return n.toRange()}(u))?o.add(c,o.create("br",{"data-mce-bogus":"1"})):(u=n,o.remove(c))),i.setRng(u)}}(e,m.get("mce_marker")),L=e.getBody(),Ct.each(L.getElementsByTagName("*"),(function(e){e.removeAttribute("data-mce-fragment")})),I=m,M=d.getStart(),x.from(I.getParent(M,"td,th")).map(Et).each(bm),e.fire("SetContent",y),e.addVisual()}},Fp=function(e,t){t(e),e.firstChild&&Fp(e.firstChild,t),e.next&&Fp(e.next,t)},Up=function(e,t,n){var r=function(e,t,n){var r={},o={},i=[]
for(var a in n.firstChild&&Fp(n.firstChild,(function(n){H(e,(function(e){e.name===n.name&&(r[e.name]?r[e.name].nodes.push(n):r[e.name]={filter:e,nodes:[n]})})),H(t,(function(e){"string"==typeof n.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(n):o[e.name]={filter:e,nodes:[n]})}))})),r)r.hasOwnProperty(a)&&i.push(r[a])
for(var u in o)o.hasOwnProperty(u)&&i.push(o[u])
return i}(e,t,n)
H(r,(function(e){H(e.filter.callbacks,(function(t){t(e.nodes,e.filter.name,{})}))}))},zp=function(e){return e instanceof Vd},jp=function(e,t){var n
e.dom.setHTML(e.getBody(),t),Bd(n=e)&&dl(n.getBody()).each((function(e){var t=e.getNode(),r=Rn(t)?dl(t).getOr(e):e
n.selection.setRng(r.toRange())}))},Hp=Ll,Vp=function(e,t,n){var r=e.formatter.get(n)
if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0
return!1},qp=function(e,t,n,r){var o=e.dom.getRoot()
return t!==o&&(t=e.dom.getParent(t,(function(t){return!!Vp(e,t,n)||t.parentNode===o||!!Kp(e,t,n,r,!0)})),Kp(e,t,n,r))},$p=function(e,t,n){return!!Hp(t,n.inline)||!!Hp(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0)},Wp=function(e,t,n,r,o,i){var a,u,s,c=n[r]
if(n.onmatch)return n.onmatch(t,n,r)
if(c)if(void 0===c.length){for(a in c)if(c.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):Ml(e,t,a),o&&!u&&!n.exact)return
if((!o||n.exact)&&!Hp(u,Il(e,Dl(c[a],i),a)))return}}else for(s=0;s<c.length;s++)if("attributes"===r?e.getAttrib(t,c[s]):Ml(e,t,c[s]))return n
return n},Kp=function(e,t,n,r,o){var i,a,u,s,c=e.formatter.get(n),l=e.dom
if(c&&t)for(a=0;a<c.length;a++)if(i=c[a],$p(e.dom,t,i)&&Wp(l,t,i,"attributes",o,r)&&Wp(l,t,i,"styles",o,r)){if(s=i.classes)for(u=0;u<s.length;u++)if(!e.dom.hasClass(t,s[u]))return
return i}},Xp=function(e,t,n,r){if(r)return qp(e,r,t,n)
if(r=e.selection.getNode(),qp(e,r,t,n))return!0
var o=e.selection.getStart()
return!(o===r||!qp(e,o,t,n))},Yp=function(e,t,n){var r=[],o={},i=e.selection.getStart()
return e.dom.getParent(i,(function(i){for(var a=0;a<t.length;a++){var u=t[a]
!o[u]&&Kp(e,i,u,n)&&(o[u]=!0,r.push(u))}}),e.dom.getRoot()),r},Gp=function(e,t){var n,r,o,i,a,u=e.formatter.get(t),s=e.dom
if(u)for(n=e.selection.getStart(),r=Ul(s,n),i=u.length-1;0<=i;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0
for(o=r.length-1;0<=o;o--)if(s.is(r[o],a))return!0}return!1},Jp=function(e,t,n){return W(n,(function(n,r){var o,i=(o=r,z(e.formatter.get(o),(function(e){var t=function(e){return 1<e.length&&"%"===e.charAt(0)}
return z(["styles","attributes"],(function(n){return fe(e,n).exists((function(e){var n=R(e)?e:function(e){return t=[],oe(e,(function(e,n){t.push(e)})),t
var t}(e)
return z(n,t)}))}))})))
return e.formatter.matchNode(t,r,{},i)?n.concat([r]):n}),[])},Qp=Qr,Zp="_mce_caret",eg=function(e){return 0<function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==Qp||1<e.childNodes.length)return[]
1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length},tg=function(e){if(e){var t=new Fr(e,e)
for(e=t.current();e;e=t.next())if(On(e))return e}return null},ng=function(e){var t=St("span")
return qn(t,{id:Zp,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&an(t,Nt(Qp)),t},rg=function(e,t,n){void 0===n&&(n=!0)
var r,o,i,a,u,s,c,l,f=e.dom,d=e.selection
eg(t)?up(e,!1,Et(t),n):(r=d.getRng(),o=f.getParent(t,f.isBlock),i=r.startContainer,a=r.startOffset,u=r.endContainer,s=r.endOffset,(l=tg(t))&&l.nodeValue.charAt(0)===Qp&&l.deleteData(0,1),c=l,f.remove(t,!0),i===c&&0<a&&r.setStart(c,a-1),u===c&&0<s&&r.setEnd(c,s-1),o&&f.isEmpty(o)&&ym(Et(o)),d.setRng(r))},og=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(t)rg(e,t,n)
else if(!(t=hl(e.getBody(),o.getStart())))for(;t=r.get(Zp);)rg(e,t,!1)},ig=function(e,t){return e.appendChild(t),t},ag=function(e,t){var n=$(e,(function(e,t){return ig(e,t.cloneNode(!1))}),t)
return ig(n,n.ownerDocument.createTextNode(Qp))},ug=function(e,t,n,r){var o,i,a,u,s,c,l,d,m,p,g,h,v,y=e.dom,b=e.selection,C=[],w=b.getRng(),S=w.startContainer,N=w.startOffset,E=S
for(3===S.nodeType&&(N!==S.nodeValue.length&&(o=!0),E=E.parentNode);E;){if(Kp(e,E,t,n,r)){i=E
break}E.nextSibling&&(o=!0),C.push(E),E=E.parentNode}i&&(o?(a=b.getBookmark(),w.collapse(!0),u=Zl(e,w,e.formatter.get(t),!0),u=If(u),e.formatter.remove(t,n,u,r),b.moveToBookmark(a)):(s=hl(e.getBody(),i),p=c=ng(!1).dom,g=null!==s?s:i,(v=(h=(m=e).dom).getParent(g,f(Ol,m)))&&h.isEmpty(v)?g.parentNode.replaceChild(p,g):(function(e){var t=Au(e,"br"),n=q(function(e){for(var t=[],n=e.dom;n;)t.push(Et(n)),n=n.lastChild
return t}(e).slice(-1),qr)
t.length===n.length&&H(n,cn)}(Et(g)),h.isEmpty(g)?g.parentNode.replaceChild(p,g):h.insertAfter(p,g)),l=function(e,t,n,r,o,i){var a=e.formatter,u=e.dom,s=q(ne(a.get()),(function(e){return e!==r&&!De(e,"removeformat")})),c=Jp(e,n,s)
if(0<q(c,(function(t){return!zl(e,t,r)})).length){var l=n.cloneNode(!1)
return u.add(t,l),a.remove(r,o,l,i),u.remove(l),x.some(l)}return x.none()}(e,c,i,t,n,r),d=ag(C.concat(l.toArray()),c),rg(e,s,!1),b.setCursorLocation(d,1),y.isEmpty(i)&&y.remove(i)))},sg=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(Ot(t))&&!gl(t.dom)&&!_n(t.dom)},cg={},lg=he,fg=pe
Jd=function(e){var t,n=e.selection.getRng(),r=Nn(["pre"])
n.collapsed||(t=e.selection.getSelectedBlocks(),fg(lg(lg(t,r),(function(e){return r(e.previousSibling)&&-1!==ve(t,e.previousSibling)})),(function(e){var t,n
t=e.previousSibling,Za(n=e).remove(),Za(t).append("<br><br>").append(n.childNodes)})))},cg["pre"]||(cg.pre=[]),cg.pre.push(Jd)
var dg=Ct.each,mg=function(e){return Sn(e)&&!Nl(e)&&!gl(e)&&!_n(e)},pg=function(e,t){for(var n=e;n;n=n[t]){if(On(n)&&0!==n.nodeValue.length)return e
if(Sn(n)&&!Nl(n))return n}return e},gg=function(e,t,n){var r,o,i=new nm(e)
if(t&&n&&(t=pg(t,"previousSibling"),n=pg(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)r=(o=r).nextSibling,t.appendChild(o)
return e.remove(n),Ct.each(Ct.grep(n.childNodes),(function(e){t.appendChild(e)})),t}return n},hg=function(e,t,n,r){var o
r&&!1!==t.merge_siblings&&(o=gg(e,Tl(r),r),gg(e,o,Tl(o,!0)))},vg=function(e,t,n){dg(e.childNodes,(function(e){mg(e)&&(t(e)&&n(e),e.hasChildNodes()&&vg(e,t,n))}))},yg=function(e,t){return function(n){return!(!n||!Ml(e,n,t))}},bg=function(e,t,n){return function(r){var o,i
e.setStyle(r,t,n),""===r.getAttribute("style")&&r.removeAttribute("style"),o=e,"SPAN"===(i=r).nodeName&&0===o.getAttribs(i).length&&o.remove(i,!0)}},Cg=fr([{keep:[]},{rename:["name"]},{removed:[]}]),wg=/^(src|href|style)$/,xg=Ct.each,Sg=Ll,Ng=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},Eg=function(e,t,n){var r,o=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"]
return Sn(o)&&(r=o.childNodes.length-1,!n&&i&&i--,o=o.childNodes[r<i?r:i]),On(o)&&n&&i>=o.nodeValue.length&&(o=new Fr(o,e.getBody()).next()||o),On(o)&&!n&&0===i&&(o=new Fr(o,e.getBody()).prev()||o),o},kg=function(e,t){var n=t?"firstChild":"lastChild"
if(/^(TR|TH|TD)$/.test(e.nodeName)&&e[n]){var r=e[n]
return"TR"===e.nodeName&&r[n]||r}return e},_g=function(e,t,n,r){var o=e.create(n,r)
return t.parentNode.insertBefore(o,t),o.appendChild(t),o},Rg=function(e,t,n,r,o){var i=Et(t),a=Et(e.create(r,o)),u=(n?$t:qt)(i)
return un(a,u),n?(nn(i,a),on(a,i)):(rn(i,a),an(a,i)),a.dom},Ag=function(e,t,n,r){return!(t=Tl(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},Tg=function(e,t,n,r,o){var i,a,u,s,c,l=e.dom
if(u=l,!(Sg(s=r,(c=t).inline)||Sg(s,c.block)||c.selector&&Sn(s)&&u.is(s,c.selector)||(a=r,t.links&&"A"===a.nodeName)))return Cg.keep()
var f,d,m,p,g,h,v,y=r
if(t.inline&&"all"===t.remove&&R(t.preserve_attributes)){var b=q(l.getAttribs(y),(function(e){return U(t.preserve_attributes,e.name.toLowerCase())}))
if(l.removeAllAttribs(y),H(b,(function(e){return l.setAttrib(y,e.name,e.value)})),0<b.length)return Cg.rename("span")}if("all"!==t.remove){xg(t.styles,(function(e,r){e=Il(l,Dl(e,n),r+""),D(r)&&(r=e,o=null),!t.remove_similar&&o&&!Sg(Ml(l,o,r),e)||l.setStyle(y,r,""),i=!0})),i&&""===l.getAttrib(y,"style")&&(y.removeAttribute("style"),y.removeAttribute("data-mce-style")),xg(t.attributes,(function(e,r){var i
if(e=Dl(e,n),D(r)&&(r=e,o=null),t.remove_similar||!o||Sg(l.getAttrib(o,r),e)){if("class"===r&&(e=l.getAttrib(y,r))&&(i="",H(e.split(/\s+/),(function(e){/mce\-\w+/.test(e)&&(i+=(i?" ":"")+e)})),i))return void l.setAttrib(y,r,i)
"class"===r&&y.removeAttribute("className"),wg.test(r)&&y.removeAttribute("data-mce-"+r),y.removeAttribute(r)}})),xg(t.classes,(function(e){e=Dl(e,n),o&&!l.hasClass(o,e)||l.removeClass(y,e)}))
for(var C=l.getAttribs(y),w=0;w<C.length;w++){var x=C[w].nodeName
if(0!==x.indexOf("_")&&0!==x.indexOf("data-"))return Cg.keep()}}return"none"!==t.remove?(f=e,m=t,g=(d=y).parentNode,h=f.dom,v=Ws(f),m.block&&(v?g===h.getRoot()&&(m.list_block&&Sg(d,m.list_block)||H(te(d.childNodes),(function(e){Bl(f,v,e.nodeName.toLowerCase())?p?p.appendChild(e):(p=_g(h,e,v),h.setAttribs(p,f.settings.forced_root_block_attrs)):p=0}))):h.isBlock(d)&&!h.isBlock(g)&&(Ag(h,d,!1)||Ag(h,d.firstChild,!0,!0)||d.insertBefore(h.create("br"),d.firstChild),Ag(h,d,!0)||Ag(h,d.lastChild,!1,!0)||d.appendChild(h.create("br")))),m.selector&&m.inline&&!Sg(m.inline,d)||h.remove(d,!0),Cg.removed()):Cg.keep()},Og=function(e,t,n,r,o){return Tg(e,t,n,r,o).fold(v,(function(t){return e.dom.rename(r,t),!0}),y)},Bg=function(e,t,n,r,o){var i,a=e.formatter.get(t),u=a[0],s=!0,l=e.dom,f=e.selection,d=function(r){var i,s,l,f,d,m,p=(s=r,l=t,f=n,d=o,H(Ul((i=e).dom,s.parentNode).reverse(),(function(e){var t
m||"_start"===e.id||"_end"===e.id||(t=Kp(i,e,l,f,d))&&!1!==t.split&&(m=e)})),m)
return function(e,t,n,r,o,i,a,u){var s,l,f,d=e.dom
if(n){for(var m=n.parentNode,p=r.parentNode;p&&p!==m;p=p.parentNode){s=d.clone(p,!1)
for(var g=0;g<t.length&&null!==(s=function(e,t,n,r){return Tg(e,t,n,r,r).fold(c(r),(function(t){return e.dom.createFragment().appendChild(r),e.dom.rename(r,t)}),c(null))}(e,t[g],u,s));g++);s&&(l&&s.appendChild(l),f=f||s,l=s)}!i||a.mixed&&d.isBlock(n)||(r=d.split(n,r)),l&&(o.parentNode.insertBefore(l,o),f.appendChild(o),a.inline&&hg(d,a,0,l))}return r}(e,a,p,r,r,!0,u,n)},m=function(t){var r,o
Sn(t)&&l.getContentEditable(t)&&(r=s,s="true"===l.getContentEditable(t),o=!0)
var i=te(t.childNodes)
if(s&&!o)for(var c=0;c<a.length&&!Og(e,a[c],n,t,t);c++);if(u.deep&&i.length){for(c=0;c<i.length;c++)m(i[c])
o&&(s=r)}},p=function(e){var t,n=l.get(e?"_start":"_end"),r=n[e?"firstChild":"lastChild"]
return Nl(t=r)&&Sn(t)&&("_start"===t.id||"_end"===t.id)&&(r=r[e?"firstChild":"lastChild"]),On(r)&&0===r.data.length&&(r=e?n.previousSibling||n.nextSibling:n.nextSibling||n.previousSibling),l.remove(n,!0),r},g=function(t){var n,r,o=Zl(e,t,a,!0)
if(u.split){if(o=If(o),(n=Eg(e,o,!0))!==(r=Eg(e,o))){if(n=kg(n,!0),r=kg(r,!1),Ng(l,n,r)){var i=x.from(n.firstChild).getOr(n)
return d(Rg(l,i,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void p(!0)}if(Ng(l,r,n))return i=x.from(r.lastChild).getOr(r),d(Rg(l,i,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void p(!1)
n=_g(l,n,"span",{id:"_start","data-mce-type":"bookmark"}),r=_g(l,r,"span",{id:"_end","data-mce-type":"bookmark"})
var s=l.createRng()
s.setStartAfter(n),s.setEndBefore(r),tf(l,s,(function(e){H(e,(function(e){Nl(e)||Nl(e.parentNode)||d(e)}))})),d(n),d(r),n=p(!0),r=p()}else n=r=d(n)
o.startContainer=n.parentNode?n.parentNode:n,o.startOffset=l.nodeIndex(n),o.endContainer=r.parentNode?r.parentNode:r,o.endOffset=l.nodeIndex(r)+1}tf(l,o,(function(t){H(t,(function(t){m(t),H(["underline","line-through","overline"],(function(n){Sn(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&Fl(l,t.parentNode)===n&&Og(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))}))}))}
if(r)Rl(r)?((i=l.createRng()).setStartBefore(r),i.setEndAfter(r),g(i)):g(r)
else if("false"!==l.getContentEditable(f.getNode()))f.isCollapsed()&&u.inline&&!of(e).length?ug(e,t,n,o):(df(f,!0,(function(){ff(e,g)})),u.inline&&Xp(e,t,n,f.getStart())&&Al(l,f,f.getRng()),e.nodeChanged())
else{r=f.getNode()
for(var h=0;h<a.length&&(!a[h].ceFalseOverride||!Og(e,a[h],n,r,r));h++);}},Pg=Ct.each,Dg=Ct.each,Lg=function(e,t,n,r){var o,i,a,u=e.formatter.get(t),s=u[0],c=!r&&e.selection.isCollapsed(),l=e.dom,f=e.selection,d=function(e,t){var o
t=t||s,e&&(t.onformat&&t.onformat(e,t,n,r),Dg(t.styles,(function(t,r){l.setStyle(e,r,Dl(t,n))})),!t.styles||(o=l.getAttrib(e,"style"))&&l.setAttrib(e,"data-mce-style",o),Dg(t.attributes,(function(t,r){l.setAttrib(e,r,Dl(t,n))})),Dg(t.classes,(function(t){t=Dl(t,n),l.hasClass(e,t)||l.addClass(e,t)})))},m=function(e,t){var n=!1
return!!s.selector&&(Dg(e,(function(e){if(!("collapsed"in e)||e.collapsed===c)return l.is(t,e.selector)&&!gl(t)?(d(t,e),!(n=!0)):void 0})),n)},p=function(r,o,i,a){var c=[],l=!0,f=s.inline||s.block,p=r.create(f)
d(p),tf(r,o,(function(o){var i,g=function(o){var h=!1,v=l,y=o.nodeName.toLowerCase(),b=o.parentNode.nodeName.toLowerCase()
if(Sn(o)&&r.getContentEditable(o)&&(v=l,l="true"===r.getContentEditable(o),h=!0),Ll(y,"br"))return i=0,void(s.block&&r.remove(o))
if(s.wrapper&&Kp(e,o,t,n))i=0
else{if(l&&!h&&s.block&&!s.wrapper&&Ol(e,y)&&Bl(e,b,f)){var C=r.rename(o,f)
return d(C),c.push(C),void(i=0)}if(s.selector){var w=m(u,o)
if(!s.inline||w)return void(i=0)}!l||h||!Bl(e,f,y)||!Bl(e,b,f)||!a&&3===o.nodeType&&1===o.nodeValue.length&&65279===o.nodeValue.charCodeAt(0)||gl(o)||s.inline&&r.isBlock(o)?(i=0,Dg(Ct.grep(o.childNodes),g),h&&(l=v),i=0):(i||(i=r.clone(p,!1),o.parentNode.insertBefore(i,o),c.push(i)),i.appendChild(o))}}
Dg(o,g)})),!0===s.links&&Dg(c,(function(e){var t=function(e){"A"===e.nodeName&&d(e,s),Dg(Ct.grep(e.childNodes),t)}
t(e)})),Dg(c,(function(o){var i,a,l,f,m,p,g,h,v,y,b,C,w,x,S,N,E,k,_,R,A=(i=0,Dg(o.childNodes,(function(e){var t;(t=e)&&On(t)&&0===t.length||Nl(e)||i++})),i)
!(1<c.length)&&r.isBlock(o)||0!==A?(s.inline||s.wrapper)&&(s.exact||1!==A||((R=function(e){var t=!1
return Dg(e.childNodes,(function(e){if((n=e)&&1===n.nodeType&&!Nl(n)&&!gl(n)&&!_n(n))return t=e,!1
var n})),t}(k=o))&&!Nl(R)&&$p(r,R,s)&&(_=r.clone(R,!1),d(_),r.replace(_,k,!0),r.remove(R,!0)),o=_||k),function(e,t,n,r){Pg(t,(function(t){var o,i,a,u
Pg(e.dom.select(t.inline,r),(function(r){mg(r)&&Og(e,t,n,r,t.exact?r:null)})),o=e.dom,a=r,(i=t).clear_child_styles&&(u=i.links?"*:not(a)":"*",dg(o.select(u,a),(function(e){mg(e)&&dg(i.styles,(function(t,n){o.setStyle(e,n,"")}))})))}))}(e,u,n,o),x=s,S=t,N=n,Kp(w=e,(E=o).parentNode,S,N)&&Og(w,x,N,E)||x.merge_with_parents&&w.dom.getParent(E.parentNode,(function(e){if(Kp(w,e,S,N))return Og(w,x,N,E),!0})),v=r,b=n,C=o,(y=s).styles&&y.styles.backgroundColor&&vg(C,yg(v,"fontSize"),bg(v,"backgroundColor",Dl(y.styles.backgroundColor,b))),m=r,g=o,h=function(e){var t
1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=Fl(m,e.parentNode),m.getStyle(e,"color")&&t?m.setStyle(e,"text-decoration",t):m.getStyle(e,"text-decoration")===t&&m.setStyle(e,"text-decoration",null))},(p=s).styles&&(p.styles.color||p.styles.textDecoration)&&(Ct.walk(g,h,"childNodes"),h(g)),a=r,f=o,"sub"!==(l=s).inline&&"sup"!==l.inline||(vg(f,yg(a,"fontSize"),bg(a,"fontSize","")),a.remove(a.select("sup"===l.inline?"sub":"sup",f),!0)),hg(r,s,0,o)):r.remove(o,!0)}))}
if("false"!==l.getContentEditable(f.getNode()))s&&(r?Rl(r)?m(u,r)||((o=l.createRng()).setStartBefore(r),o.setEndAfter(r),p(l,Zl(e,o,u),0,!0)):p(l,r,0,!0):c&&s.inline&&!of(e).length?function(e,t,n){var r,o=e.selection,i=o.getRng(),a=i.startOffset,u=i.startContainer.nodeValue,s=hl(e.getBody(),o.getStart())
s&&(r=tg(s))
var c,l,f,d,m=/[^\s\u00a0\u00ad\u200b\ufeff]/
u&&0<a&&a<u.length&&m.test(u.charAt(a))&&m.test(u.charAt(a-1))?(c=o.getBookmark(),i.collapse(!0),l=Zl(e,i,e.formatter.get(t)),l=If(l),e.formatter.apply(t,n,l),o.moveToBookmark(c)):(s&&r.nodeValue===Qp||(f=e.getDoc(),d=ng(!0).dom,r=(s=f.importNode(d,!0)).firstChild,i.insertNode(s),a=1),e.formatter.apply(t,n,s),o.setCursorLocation(r,a))}(e,t,n):(i=f.getNode(),e.settings.forced_root_block||!u[0].defaultBlock||l.getParent(i,l.isBlock)||Lg(e,u[0].defaultBlock),f.setRng(Tp(f.getRng())),df(f,!0,(function(t){ff(e,(function(t,n){var r=n?t:Zl(e,t,u)
p(l,r)}))})),Al(l,f,f.getRng()),e.nodeChanged()),a=e,fg(cg[t],(function(e){e(a)})))
else{r=f.getNode()
for(var g=0,h=u.length;g<h;g++)if(u[g].ceFalseOverride&&l.is(r,u[g].selector))return void d(r,u[g])}},Ig=function(e,t){var n=(t||document).createDocumentFragment()
return H(e,(function(e){n.appendChild(e.dom)})),Et(n)},Mg=function(e,t,n){return{element:e,width:t,rows:n}},Fg=function(e,t){return{element:e,cells:t}},Ug=function(e,t){var n=parseInt($n(e,t),10)
return isNaN(n)?1:n},zg=function(e){return W(e,(function(e,t){return t.cells.length>e?t.cells.length:e}),0)},jg=function(e,t){for(var n=e.rows,r=0;r<n.length;r++)for(var o=n[r].cells,i=0;i<o.length;i++)if(At(o[i],t))return x.some({x:i,y:r})
return x.none()},Hg=function(e,t,n,r,o){for(var i=[],a=e.rows,u=n;u<=o;u++){var s=a[u].cells,c=t<r?s.slice(t,r+1):s.slice(r,t+1)
i.push(Fg(a[u].element,c))}return i},Vg=function(e){return n=j((t=e).rows,(function(e){var t=j(e.cells,(function(e){var t=zu(e)
return Wn(t,"colspan"),Wn(t,"rowspan"),t})),n=Uu(e.element)
return un(n,t),n})),r=Uu(t.element),o=St("tbody"),un(o,n),an(r,o),r
var t,n,r,o},qg=function(e,t){return K(e,(function(e){return"li"===Ot(e)&&sf(e,t)})).fold(c([]),(function(t){return K(e,(function(e){return"ul"===Ot(e)||"ol"===Ot(e)})).map((function(e){var t=St(Ot(e))
return function(e,t){var n=e.dom
oe(t,(function(e,t){!function(e,t,n){if(!k(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
jn(e)&&e.style.setProperty(t,n)}(n,t,e)}))}(t,le(Gn(e),(function(e,t){return Le(t,"list-style")}))),[St("li"),t]})).getOr([])}))},$g=function(){return Ig([])},Wg=function(e,t){return n=Et(t.cloneContents()),r=function(e,t){var n,r=Et(t.commonAncestorContainer),o=wm(r,e),i=q(o,(function(e){return Vr(e)||jr(e)})),a=qg(o,t),u=i.concat(a.length?a:Kr(n=r)?jt(n).filter(Wr).fold(c([]),(function(e){return[n,e]})):Wr(n)?[n]:[])
return j(u,Uu)}(e,t),o=W(r,(function(e,t){return an(t,e),t}),n),0<r.length?Ig([o]):o
var n,r,o},Kg=function(e,t){return n=e,r=t[0],Cr(r,"table",f(At,n)).bind((function(e){var n=t[0],r=t[t.length-1]
return function(e,t,n){return jg(e,t).bind((function(t){return jg(e,n).map((function(n){return r=e,i=n,a=(o=t).x,u=o.y,s=i.x,l=u<(c=i.y)?Hg(r,a,u,s,c):Hg(r,a,c,s,u),Mg(r.element,zg(l),l)
var r,o,i,a,u,s,c,l}))}))}(function(e){var t=Mg(Uu(e),0,[])
return H(Au(e,"tr"),(function(e,n){H(Au(e,"td,th"),(function(r,o){!function(e,t,n,r,o){for(var i=Ug(o,"rowspan"),a=Ug(o,"colspan"),u=e.rows,s=n;s<n+i;s++){u[s]||(u[s]=Fg(zu(r),[]))
for(var c=t;c<t+a;c++)u[s].cells[c]=s===n&&c===t?o:Uu(o)}}(t,function(e,t,n){for(;r=t,o=n,((i=e.rows)[o]?i[o].cells:[])[r];)t++
var r,o,i
return t}(t,o,n),n,e,r)}))})),Mg(t.element,zg(t.rows),t.rows)}(e),n,r).map((function(e){return Ig([Vg(e)])}))})).getOrThunk($g)
var n,r},Xg=function(e,t){return 0<=t&&t<e.length&&kl(e.charAt(t))},Yg=function(e){var t=eo(e.innerText)
return gt.browser.isIE()?t.replace(/^[ \f\n\r\t\v]+/,""):t},Gg=function(e,t,n){if(void 0===n&&(n={}),n.get=!0,n.format=t,n.selection=!0,(n=e.fire("BeforeGetContent",n)).isDefaultPrevented())return e.fire("GetContent",n),n.content
if("text"===n.format)return l=e,x.from(l.selection.getRng()).map((function(e){var t=l.dom.add(l.getBody(),"div",{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},e.cloneContents()),n=Yg(t),r=eo(t.textContent)
if(l.dom.remove(t),Xg(r,0)||Xg(r,r.length-1)){var o=l.dom.getParent(e.commonAncestorContainer,l.dom.isBlock),i=Yg(o),a=i.indexOf(n)
return-1===a?n:(Xg(i,a-1)?" ":"")+n+(Xg(i,a+n.length)?" ":"")}return n})).getOr("")
n.getInner=!0
var r,o,i,a,u,s,c,l,f=(o=n,i=(r=e).selection.getRng(),a=r.dom.create("body"),u=r.selection.getSel(),s=Ud(r,nf(u)),(c=o.contextual?function(e,t){var n,r,o=rf(t,e)
return 0<o.length?Kg(e,o):(n=e,0<(r=t).length&&r[0].collapsed?$g():Wg(n,r[0]))}(Et(r.getBody()),s).dom:i.cloneContents())&&a.appendChild(c),r.selection.serializer.serialize(a,o))
return"tree"===n.format?f:(n.content=e.selection.isCollapsed()?"":f,e.fire("GetContent",n),n.content)},Jg=function(e){return Sn(e)?e.outerHTML:On(e)?Ko.encodeRaw(e.data,!1):Bn(e)?"\x3c!--"+e.data+"--\x3e":""},Qg=function(e,t){var n=0
H(e,(function(e){var r,o,i
0===e[0]?n++:1===e[0]?(function(e,t,n){var r,o=function(e){var t,n=document.createElement("div"),r=document.createDocumentFragment()
for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t)
return r}(t)
e.hasChildNodes()&&n<e.childNodes.length?(r=e.childNodes[n]).parentNode.insertBefore(o,r):e.appendChild(o)}(t,e[1],n),n++):2===e[0]&&(o=n,(r=t).hasChildNodes()&&o<r.childNodes.length&&(i=r.childNodes[o]).parentNode.removeChild(i))}))},Zg=pu(x.none()),eh=function(e){var t,n=(t=e.getBody(),q(j(te(t.childNodes),Jg),(function(e){return 0<e.length}))),r=Y(n,(function(t){var n=Zd(e.serializer,t)
return 0<n.length?[n]:[]})),o=r.join("")
return-1!==o.indexOf("</iframe>")?{type:"fragmented",fragments:r,content:"",bookmark:null,beforeBookmark:null}:{type:"complete",fragments:null,content:o,bookmark:null,beforeBookmark:null}},th=function(e,t,n){"fragmented"===t.type?function(e,t){var n,r,o,i,a,u,s,c,l,f=j(te(t.childNodes),Jg)
Qg((r=e,o=(n=f).length+r.length+2,i=new Array(o),a=new Array(o),u=function(e,t,o,i,a){var s=c(e,t,o,i)
if(null===s||s.start===t&&s.diag===t-i||s.end===e&&s.diag===e-o)for(var l=e,f=o;l<t||f<i;)l<t&&f<i&&n[l]===r[f]?(a.push([0,n[l]]),++l,++f):i-o<t-e?(a.push([2,n[l]]),++l):(a.push([1,r[f]]),++f)
else{u(e,s.start,o,s.start-s.diag,a)
for(var d=s.start;d<s.end;++d)a.push([0,n[d]])
u(s.end,t,s.end-s.diag,i,a)}},s=function(e,t,o,i){for(var a=e;a-t<i&&a<o&&n[a]===r[a-t];)++a
return{start:e,end:a,diag:t}},c=function(e,t,o,u){var c=t-e,l=u-o
if(0==c||0==l)return null
var f,d,m,p,g,h=c-l,v=l+c,y=(v%2==0?v:1+v)/2
for(i[1+y]=e,a[1+y]=t+1,f=0;f<=y;++f){for(d=-f;d<=f;d+=2){for(m=d+y,d===-f||d!==f&&i[m-1]<i[m+1]?i[m]=i[m+1]:i[m]=i[m-1]+1,g=(p=i[m])-e+o-d;p<t&&g<u&&n[p]===r[g];)i[m]=++p,++g
if(h%2!=0&&h-f<=d&&d<=h+f&&a[m-h]<=i[m])return s(a[m-h],d+e-o,t,u)}for(d=h-f;d<=h+f;d+=2){for(m=d+y-h,d===h-f||d!==h+f&&a[m+1]<=a[m-1]?a[m]=a[m+1]-1:a[m]=a[m-1],g=(p=a[m]-1)-e+o-d;e<=p&&o<=g&&n[p]===r[g];)a[m]=p--,g--
if(h%2==0&&-f<=d&&d<=f&&a[m]<=i[m+h])return s(a[m],d+e-o,t,u)}}},l=[],u(0,n.length,0,r.length,l),l),t)}(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},nh=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},rh=function(e){var t=St("body",Zg.get().getOrThunk((function(){var e=document.implementation.createHTMLDocument("undo")
return Zg.set(x.some(e)),e})))
return Mu(t,nh(e)),H(Au(t,"*[data-mce-bogus]"),ln),t.dom.innerHTML},oh=function(e,t){return!(!e||!t)&&(r=t,nh(e)===nh(r)||(n=t,rh(e)===rh(n)))
var n,r},ih=function(e){return 0===e.get()},ah=function(e,t,n){ih(n)&&(e.typing=t)},uh=function(e,t){e.typing&&(ah(e,!1,t),e.add())},sh=function(e){return e instanceof Vd},ch=function(e,t){Up(e.serializer.getNodeFilters(),e.serializer.getAttributeFilters(),t)},lh=function(e){return{undoManager:{beforeChange:function(t,n){return r=e,o=n,void(ih(t)&&o.set(x.some(Hs(r.selection))))
var r,o},addUndoLevel:function(t,n,r,o,i,a){return function(e,t,n,r,o,i,a){var u=eh(e)
if(i=i||{},i=Ct.extend(i,u),!1===ih(r)||e.removed)return null
var s=t.data[n.get()]
if(e.fire("BeforeAddUndo",{level:i,lastLevel:s,originalEvent:a}).isDefaultPrevented())return null
if(s&&oh(s,i))return null
t.data[n.get()]&&o.get().each((function(e){t.data[n.get()].beforeBookmark=e}))
var c=e.getParam("custom_undo_redo_levels",0,"number")
if(c&&t.data.length>c){for(var l=0;l<t.data.length-1;l++)t.data[l]=t.data[l+1]
t.data.length--,n.set(t.data.length)}i.bookmark=Hs(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(i),n.set(t.data.length-1)
var f={level:i,lastLevel:s,originalEvent:a}
return 0<n.get()?(e.setDirty(!0),e.fire("AddUndo",f),e.fire("change",f)):e.fire("AddUndo",f),i}(e,t,n,r,o,i,a)},undo:function(t,n,r){return o=e,a=n,u=r,(i=t).typing&&(i.add(),i.typing=!1,ah(i,!1,a)),0<u.get()&&(u.set(u.get()-1),s=i.data[u.get()],th(o,s,!0),o.setDirty(!0),o.fire("Undo",{level:s})),s
var o,i,a,u,s},redo:function(t,n){return r=e,i=n,(o=t).get()<i.length-1&&(o.set(o.get()+1),a=i[o.get()],th(r,a,!1),r.setDirty(!0),r.fire("Redo",{level:a})),a
var r,o,i,a},clear:function(t,n){return r=e,i=n,(o=t).data=[],i.set(0),o.typing=!1,void r.fire("ClearUndos")
var r,o,i},reset:function(e){return(t=e).clear(),void t.add()
var t},hasUndo:function(t,n){return r=e,o=t,0<n.get()||o.typing&&o.data[0]&&!oh(eh(r),o.data[0])
var r,o},hasRedo:function(e,t){return n=e,t.get()<n.data.length-1&&!n.typing
var n},transact:function(e,t,n){return o=n,uh(r=e,t),r.beforeChange(),r.ignore(o),r.add()
var r,o},ignore:function(e,t){try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}},extra:function(t,n,r,o){return i=e,u=n,s=r,c=o,void((a=t).transact(s)&&(l=a.data[u.get()].bookmark,f=a.data[u.get()-1],th(i,f,!0),a.transact(c)&&(a.data[u.get()-1].beforeBookmark=l)))
var i,a,u,s,c,l,f}},formatter:{apply:function(t,n,r){return Lg(e,t,n,r)},remove:function(t,n,r,o){return Bg(e,t,n,r,o)},toggle:function(t,n,r){return i=t,a=n,u=r,s=(o=e).formatter.get(i),void(!Xp(o,i,a,u)||"toggle"in s[0]&&!s[0].toggle?Lg:Bg)(o,i,a,u)
var o,i,a,u,s}},editor:{getContent:function(t,n){return r=e,o=t,i=n,x.from(r.getBody()).fold(c("tree"===o.format?new Vd("body",11):""),(function(e){return function(e,t,n,r){var o,i,a,u,s
if(t.format=n,t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),"raw"===t.format)o=Ct.trim(em(e.serializer,r.innerHTML))
else if("text"===t.format)o=eo(r.innerText||r.textContent)
else{if("tree"===t.format)return e.serializer.serialize(r,t)
a=(i=e).serializer.serialize(r,t),u=Ws(i),s=new RegExp("^(<"+u+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+u+">[\r\n]*|<br \\/>[\r\n]*)$"),o=a.replace(s,"")}return"text"===t.format||Gr(Et(r))?t.content=o:t.content=Ct.trim(o),t.no_events||e.fire("GetContent",t),t.content}(r,o,i,e)}))
var r,o,i},setContent:function(t,n){return function(e,t,n){return n.format=n.format?n.format:"html",n.set=!0,n.content=zp(t)?"":t,zp(t)||n.no_events||(e.fire("BeforeSetContent",n),t=n.content),x.from(e.getBody()).fold(c(t),(function(r){return zp(t)?function(e,t,n,r){Up(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n)
var o=Kd({validate:e.validate},e.schema).serialize(n)
return r.content=Gr(Et(t))?o:Ct.trim(o),jp(e,r.content),r.no_events||e.fire("SetContent",r),n}(e,r,t,n):(o=e,i=r,u=n,0===(a=t).length||/^\s+$/.test(a)?(c='<br data-mce-bogus="1">',"TABLE"===i.nodeName?a="<tr><td>"+c+"</td></tr>":/^(UL|OL)$/.test(i.nodeName)&&(a="<li>"+c+"</li>"),a=(s=Ws(o))&&o.schema.isValidChild(i.nodeName.toLowerCase(),s.toLowerCase())?(a=c,o.dom.createHTML(s,Ks(o),a)):a||'<br data-mce-bogus="1">',jp(o,a),o.fire("SetContent",u)):("raw"!==u.format&&(a=Kd({validate:o.validate},o.schema).serialize(o.parser.parse(a,{isRootContent:!0,insert:!0}))),u.content=Gr(Et(i))?a:Ct.trim(a),jp(o,u.content),u.no_events||o.fire("SetContent",u)),u.content)
var o,i,a,u,s,c}))}(e,t,n)},insertContent:function(t,n){return Mp(e,t,n)}},selection:{getContent:function(t,n){return Gg(e,t,n)}},raw:{getModel:function(){return x.none()}}}},fh=function(e,t){var n=function(e){return _(e)?e:{}},r=h("Unimplemented feature for rtc")
return{undoManager:{beforeChange:u,addUndoLevel:r,undo:function(){return t.undo(),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},redo:function(){return t.redo(),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},clear:r,reset:r,hasUndo:function(){return t.hasUndo()},hasRedo:function(){return t.hasRedo()},transact:function(e,n,r){return t.transact(r),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},ignore:r,extra:r},formatter:{apply:function(e,r,o){return t.applyFormat(e,n(r))},remove:function(e,r,o,i){return t.removeFormat(e,n(r))},toggle:function(e,r,o){return t.toggleFormat(e,n(r))}},editor:{getContent:function(n,r){if("html"!==r&&"tree"!==r)return lh(e).editor.getContent(n,r)
var o=t.getContent(),i=Kd({inner:!0})
return ch(e,o),"tree"===r?o:i.serialize(o)},setContent:function(n,r){var o=sh(n)?n:e.parser.parse(n,{isRootContent:!0,insert:!0})
return t.setContent(o),n},insertContent:function(n,r){var o,i=(o=e,x.from(o.selection.getStart(!0)).map((function(e){return e.nodeName.toLowerCase()})).fold((function(){return{}}),(function(e){return{context:e}}))),a=sh(n)?n:e.parser.parse(n,we(we({},i),{insert:!0}))
t.insertContent(a)}},selection:{getContent:function(n,r){if("html"!==n&&"tree"!==n)return lh(e).selection.getContent(n,r)
var o=t.getSelectedContent(),i=Kd({})
return ch(e,o),"tree"===n?o:i.serialize(o)}},raw:{getModel:function(){return x.some(t.getRawModel())}}}},dh=function(e){return de(e.plugins,"rtc")},mh=function(e){return e.rtcInstance?e.rtcInstance:lh(e)},ph=function(e){var t=e.rtcInstance
if(t)return t
throw new Error("Failed to get RTC instance not yet initialized.")},gh=function(e){return 0===e.dom.length?(cn(e),x.none()):x.some(e)},hh=function(e,t,n,r){e.bind((function(e){return(r?Gm:Ym)(e.dom,r?e.dom.length:0),t.filter(Lt).map((function(t){return o=t,i=n,a=r,u=e.dom,s=o.dom,c=a?u.length:s.length,void(a?(Jm(u,s,!1,!a),i.setStart(s,c)):(Jm(s,u,!1,!a),i.setEnd(s,c)))
var o,i,a,u,s,c}))})).orThunk((function(){var e
return(e=r,t.filter((function(e){return Cf.isBookmarkNode(e.dom)})).bind(e?Vt:Ht).or(t).filter(Lt)).map((function(e){return n=r,void jt(t=e).each((function(e){var r=t.dom
n&&jm(e,ws(r,0))?Ym(r,0):!n&&Hm(e,ws(r,r.length))&&Gm(r,r.length)}))
var t,n}))}))},vh=function(e,t,n){var r
e&&e.hasOwnProperty(t)&&(0===(r=q(e[t],(function(e){return e!==n}))).length?delete e[t]:e[t]=r)},yh=function(e){return!!e.select},bh=function(e){return!(!e||!e.ownerDocument)&&Tt(Et(e.ownerDocument),Et(e))},Ch=function(e,t,n,r){var o,i,a,u,s,c,l=function(e,t){return s||(s={},c={},u.on("NodeChange",(function(e){var t=e.element,n=a.getParents(t,null,a.getRoot()),r={}
Ct.each(s,(function(e,t){Ct.each(n,(function(o){if(a.is(o,t))return c[t]||(Ct.each(e,(function(e){e(!0,{node:o,selector:t,parents:n})})),c[t]=e),r[t]=e,!1}))})),Ct.each(c,(function(e,o){r[o]||(delete c[o],Ct.each(e,(function(e){e(!1,{node:t,selector:o,parents:n})})))}))}))),s[e]||(s[e]=[]),s[e].push(t),{unbind:function(){vh(s,e,t),vh(c,e,t)}}},f=function(e,t){return function(e,t,n){void 0===n&&(n={})
var r,o,i=(r=t,we(we({format:"html"},n),{set:!0,selection:!0,content:r}))
i.no_events||!(i=e.fire("BeforeSetContent",i)).isDefaultPrevented()?(n.content=function(e,t){if("raw"===t.format)return t.content
var n=e.selection.getRng(),r=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),o=r?{context:r.nodeName.toLowerCase()}:{},i=e.parser.parse(t.content,we(we({isRootContent:!0,forced_root_block:!1},o),t))
return Kd({validate:e.validate},e.schema).serialize(i)}(e,i),function(e,t){var n=x.from(t.firstChild).map(Et),r=x.from(t.lastChild).map(Et)
e.deleteContents(),e.insertNode(t)
var o=n.bind(Ht).filter(Lt).bind(gh),i=r.bind(Vt).filter(Lt).bind(gh)
hh(o,n,e,!0),hh(i,r,e,!1),e.collapse(!1)}(o=e.selection.getRng(),o.createContextualFragment(n.content)),e.selection.setRng(o),sd(e,o),i.no_events||e.fire("SetContent",i)):e.fire("SetContent",i)}(r,e,t)},d=function(e){var t=p()
t.collapse(!!e),g(t)},m=function(){return t.getSelection?t.getSelection():t.document.selection},p=function(){var n,a,u,c=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(c){return-1}}
if(!t)return null
var l=t.document
if(null==l)return null
if(void 0!==r.bookmark&&!1===Bd(r)){var f=Sd(r)
if(f.isSome())return f.map((function(e){return Ud(r,[e])[0]})).getOr(l.createRange())}try{(n=m())&&!xn(n.anchorNode)&&(a=0<n.rangeCount?n.getRangeAt(0):n.createRange?n.createRange():l.createRange(),a=Ud(r,[a])[0])}catch(s){}return(a=a||(l.createRange?l.createRange():l.body.createTextRange())).setStart&&9===a.startContainer.nodeType&&a.collapsed&&(u=e.getRoot(),a.setStart(u,0),a.setEnd(u,0)),o&&i&&(0===c(a.START_TO_START,a,o)&&0===c(a.END_TO_END,a,o)?a=i:i=o=null),a},g=function(e,t){var n
if((a=e)&&(yh(a)||bh(a.startContainer)&&bh(a.endContainer))){var a,u=yh(e)?e:null
if(u){i=null
try{u.select()}catch(s){}}else{var c=m()
if(e=r.fire("SetSelectionRange",{range:e,forward:t}).range,c){i=e
try{c.removeAllRanges(),c.addRange(e)}catch(s){}!1===t&&c.extend&&(c.collapse(e.endContainer,e.endOffset),c.extend(e.startContainer,e.startOffset)),o=0<c.rangeCount?c.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!c.setBaseAndExtent||gt.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset])&&"IMG"===n.tagName&&(c.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),c.anchorNode===e.startContainer&&c.focusNode===e.endContainer||c.setBaseAndExtent(n,0,n,1)),r.fire("AfterSetSelectionRange",{range:e,forward:t})}}},h=function(){var t=m(),n=null==t?void 0:t.anchorNode,r=null==t?void 0:t.focusNode
if(!t||!n||!r||xn(n)||xn(r))return!0
var o=e.createRng()
o.setStart(n,t.anchorOffset),o.collapse(!0)
var i=e.createRng()
return i.setStart(r,t.focusOffset),i.collapse(!0),o.compareBoundaryPoints(o.START_TO_START,i)<=0},v={bookmarkManager:null,controlSelection:null,dom:a=e,win:t,serializer:n,editor:u=r,collapse:d,setCursorLocation:function(t,n){var o=e.createRng()
t?(o.setStart(t,n),o.setEnd(t,n),g(o),d(!1)):(cf(e,o,r.getBody(),!0),g(o))},getContent:function(e){return function(e,t){var n,r
return void 0===t&&(t={}),n=t.format?t.format:"html",r=t,ph(e).selection.getContent(n,r)}(r,e)},setContent:f,getBookmark:function(e,t){return y.getBookmark(e,t)},moveToBookmark:function(e){return y.moveToBookmark(e)},select:function(t,n){var r,o,i
return r=e,o=t,i=n,x.from(o).map((function(e){var t=r.nodeIndex(e),n=r.createRng()
return n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),i&&(cf(r,n,e,!0),cf(r,n,e,!1)),n})).each(g),t},isCollapsed:function(){var e=p(),t=m()
return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:h,setNode:function(t){return f(e.getOuterHTML(t)),t},getNode:function(){return function(e,t){var n,r
if(!t)return e
n=t.startContainer,r=t.endContainer
var o=t.startOffset,i=t.endOffset,a=t.commonAncestorContainer
return!t.collapsed&&(n===r&&i-o<2&&n.hasChildNodes()&&(a=n.childNodes[o]),3===n.nodeType&&3===r.nodeType&&(n=n.length===o?Fd(n.nextSibling,!0):n.parentNode,r=0===i?Fd(r.previousSibling,!1):r.parentNode,n&&n===r))?n:a&&3===a.nodeType?a.parentNode:a}(r.getBody(),p())},getSel:m,setRng:g,getRng:p,getStart:function(e){return Id(r.getBody(),p(),e)},getEnd:function(e){return Md(r.getBody(),p(),e)},getSelectedBlocks:function(t,n){return function(e,t,n,r){var o,i=[],a=e.getRoot()
if(n=e.getParent(n||Id(a,t,t.collapsed),e.isBlock),r=e.getParent(r||Md(a,t,t.collapsed),e.isBlock),n&&n!==a&&i.push(n),n&&r&&n!==r)for(var u=new Fr(o=n,a);(o=u.next())&&o!==r;)e.isBlock(o)&&i.push(o)
return r&&n!==r&&r!==a&&i.push(r),i}(e,p(),t,n)},normalize:function(){var t=p(),n=m()
if(1<nf(n).length||!lf(r))return t
var o=Df(e,t)
return o.each((function(e){g(e,h())})),o.getOr(t)},selectorChanged:function(e,t){return l(e,t),v},selectorChangedWithUnbind:l,getScrollContainer:function(){for(var t,n=e.getRoot();n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n
break}n=n.parentNode}return t},scrollIntoView:function(e,t){return o=e,i=t,void((n=r).inline?id:ud)(n,o,i)
var n,o,i},placeCaretAt:function(e,t){return g(_f(e,t,r.getDoc()))},getBoundingClientRect:function(){var e=p()
return e.collapsed?ws.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){t=o=i=null,b.destroy()}},y=Cf(v),b=Ef(v,r)
return v.bookmarkManager=y,v.controlSelection=b,v},wh=function(e,t){var n,r=ii()
t.convert_fonts_to_spans&&function(e,t,n){e.addNodeFilter("font",(function(e){H(e,(function(e){var r,o=t.parse(e.attr("style")),i=e.attr("color"),a=e.attr("face"),u=e.attr("size")
i&&(o.color=i),a&&(o["font-family"]=a),u&&(o["font-size"]=n[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",t.serialize(o)),r=e,H(["color","face","size"],(function(e){r.attr(e,null)}))}))}))}(e,r,Ct.explode(t.font_size_legacy_values)),n=r,e.addNodeFilter("strike",(function(e){H(e,(function(e){var t=n.parse(e.attr("style"))
t["text-decoration"]="line-through",e.name="span",e.attr("style",n.serialize(t))}))}))},xh=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},Sh=function(e,t){var n
try{n=atob(t)}catch(qS){return x.none()}for(var r=new Uint8Array(n.length),o=0;o<r.length;o++)r[o]=n.charCodeAt(o)
return x.some(new Blob([r],{type:e}))},Nh=function(e){return 0===e.indexOf("blob:")?(t=e,new Sr((function(e,r){var o=function(){r("Cannot convert "+t+" to Blob. Resource might not exist or is inaccessible.")}
try{var i=new XMLHttpRequest
i.open("GET",t,!0),i.responseType="blob",i.onload=function(){200===this.status?e(this.response):o()},i.onerror=o,i.send()}catch(n){o()}}))):0===e.indexOf("data:")?(n=e,new Sr((function(e){var t=xh(n),r=t.type,o=t.data
Sh(r,o).fold((function(){return e(new Blob([]))}),e)}))):null
var t,n},Eh=0,kh=function(e){return(e||"blobid")+Eh++}
function _h(e,t){var n={}
return{findAll:function(r,o){o=o||y
var i,a=q((i=r)?te(i.getElementsByTagName("img")):[],(function(t){var n=t.src
return!!gt.fileApi&&!t.hasAttribute("data-mce-bogus")&&!t.hasAttribute("data-mce-placeholder")&&!(!n||n===gt.transparentSrc)&&(0===n.indexOf("blob:")?!e.isUploaded(n)&&o(t):0===n.indexOf("data:")&&o(t))})),u=j(a,(function(e){if(void 0!==n[e.src])return new Sr((function(t){n[e.src].then((function(n){return"string"==typeof n?n:void t({image:e,blobInfo:n.blobInfo})}))}))
var r=new Sr((function(n,r){(function(e,t,n,r){var o,i,a,u,s
0!==t.src.indexOf("blob:")?(i=(o=xh(t.src)).data,a=o.type,u=i,(s=e.getByData(u,a))?n({image:t,blobInfo:s}):Nh(t.src).then((function(r){s=e.create(kh(),r,u),e.add(s),n({image:t,blobInfo:s})}),(function(e){r(e)}))):(s=e.getByUri(t.src))?n({image:t,blobInfo:s}):Nh(t.src).then((function(r){var o
o=r,new Sr((function(e){var t=new FileReader
t.onloadend=function(){e(t.result)},t.readAsDataURL(o)})).then((function(o){u=xh(o).data,s=e.create(kh(),r,u),e.add(s),n({image:t,blobInfo:s})}))}),(function(e){r(e)}))})(t,e,n,r)})).then((function(e){return delete n[e.image.src],e})).catch((function(t){return delete n[e.src],t}))
return n[e.src]=r}))
return Sr.all(u)}}}var Rh,Ah,Th=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new Vd("br",1)).shortEnded=!0:r.empty().append(new Vd("#text",3)).value=Jr},Oh=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Bh=function(e,t,n,r){return r.isEmpty(t,n,(function(t){return n=t,(r=e.getElementRule(n.name))&&r.paddEmpty
var n,r}))},Ph=function(e,t){var n=e.schema
t.remove_trailing_brs&&e.addNodeFilter("br",(function(e,r,o){var i,a,u,s,c,l,f,d,m=e.length,p=Ct.extend({},n.getBlockElements()),g=n.getNonEmptyElements(),h=n.getWhiteSpaceElements()
for(p.body=1,i=0;i<m;i++)if(u=(a=e[i]).parent,p[a.parent.name]&&a===u.lastChild){for(c=a.prev;c;){if("span"!==(l=c.name)||"bookmark"!==c.attr("data-mce-type")){"br"===l&&(a=null)
break}c=c.prev}a&&(a.remove(),Bh(n,g,h,u)&&(f=n.getElementRule(u.name))&&(f.removeEmpty?u.remove():f.paddEmpty&&Th(t,o,p,u)))}else{for(s=a;u&&u.firstChild===s&&u.lastChild===s&&!p[(s=u).name];)u=u.parent
s===u&&!0!==t.padd_empty_with_br&&((d=new Vd("#text",3)).value=Jr,a.replace(d))}})),e.addAttributeFilter("href",(function(e){var n,r,o=e.length
if(!t.allow_unsafe_link_target)for(;o--;){var i=e[o]
"a"===i.name&&"_blank"===i.attr("target")&&i.attr("rel",(r=(n=i.attr("rel"))?Ct.trim(n):"",/\b(noopener)\b/g.test(r)?r:r.split(" ").filter((function(e){return 0<e.length})).concat(["noopener"]).sort().join(" ")))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href"))for(r=o.parent,t=o.lastChild;n=t.prev,r.insert(t,o),t=n;);})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(function(e){for(var t,n,r,o=e.length;o--;)"ul"!==(r=(n=e[o]).parent).name&&"ol"!==r.name||(n.prev&&"li"===n.prev.name?n.prev.append(n):((t=new Vd("li",1)).attr("style","list-style-type: none"),n.wrap(t)))})),t.validate&&n.getValidClasses()&&e.addAttributeFilter("class",(function(e){for(var t,r,o,i,a,u,s,c=e.length,l=n.getValidClasses();c--;){for(r=(t=e[c]).attr("class").split(" "),a="",o=0;o<r.length;o++)i=r[o],s=!1,(u=l["*"])&&u[i]&&(s=!0),u=l[t.name],!s&&u&&u[i]&&(s=!0),s&&(a&&(a+=" "),a+=i)
a.length||(a=null),t.attr("class",a)}})),function(e,t){var n=t.blob_cache,r=function(e){var r,o,i=e.attr("src");(r=e).attr("src")===gt.transparentSrc||r.attr("data-mce-placeholder")||e.attr("data-mce-bogus")||((o=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(i))?x.some({type:o[1],data:decodeURIComponent(o[2])}):x.none()).filter((function(){return function(e,t){if(t.images_dataimg_filter){var n=new Image
return n.src=e.attr("src"),oe(e.attributes.map,(function(e,t){n.setAttribute(t,e)})),t.images_dataimg_filter(n)}return!0}(e,t)})).bind((function(e){var t=e.type,r=e.data
return x.from(n.getByData(r,t)).orThunk((function(){return Sh(t,r).map((function(e){var t=n.create(kh(),e,r)
return n.add(t),t}))}))})).each((function(t){e.attr("src",t.blobUri())}))}
n&&e.addAttributeFilter("src",(function(e){return H(e,r)}))}(e,t)},Dh=Ct.makeMap,Lh=Ct.each,Ih=Ct.explode,Mh=Ct.extend,Fh=function(e,t){void 0===t&&(t=ri())
var n={},r=[],o={},i={};(e=e||{}).validate=!("validate"in e)||e.validate,e.root_name=e.root_name||"body"
var a,u,s=function(e){var t,a,u=e.name
u in n&&((a=o[u])?a.push(e):o[u]=[e]),t=r.length
for(;t--;)(u=r[t].name)in e.attributes.map&&((a=i[u])?a.push(e):i[u]=[e])
return e},c={schema:t,addAttributeFilter:function(e,t){Lh(Ih(e),(function(e){for(var n=0;n<r.length;n++)if(r[n].name===e)return void r[n].callbacks.push(t)
r.push({name:e,callbacks:[t]})}))},getAttributeFilters:function(){return[].concat(r)},addNodeFilter:function(e,t){Lh(Ih(e),(function(e){var r=n[e]
r||(n[e]=r=[]),r.push(t)}))},getNodeFilters:function(){var e=[]
for(var t in n)n.hasOwnProperty(t)&&e.push({name:t,callbacks:n[t]})
return e},filterNode:s,parse:function(a,u){var c,l,f,d,m,p,g,h,v=[]
u=u||{},o={},i={}
var y,b=Mh(Dh("script,style,head,html,body,title,meta,param"),t.getBlockElements()),C=t.getNonEmptyElements(),w=t.children,x=e.validate,S=!1===(y="forced_root_block"in u?u.forced_root_block:e.forced_root_block)?"":!0===y?"p":y,N=t.getWhiteSpaceElements(),E=/^[ \t\r\n]+/,k=/[ \t\r\n]+$/,_=/[ \t\r\n]+/g,R=/^[ \t\r\n]+$/,A=N.hasOwnProperty(u.context)||N.hasOwnProperty(e.root_name),T=function(e,t){var r,i=new Vd(e,t)
return e in n&&((r=o[e])?r.push(i):o[e]=[i]),i},O=function(e){for(var n,r,o,i=t.getBlockElements(),a=e.prev;a&&3===a.type;){if(0<(r=a.value.replace(k,"")).length)return void(a.value=r)
if(n=a.next){if(3===n.type&&n.value.length){a=a.prev
continue}if(!i[n.name]&&"script"!==n.name&&"style"!==n.name){a=a.prev
continue}}o=a.prev,a.remove(),a=o}},B=Qd({validate:x,allow_html_data_urls:e.allow_html_data_urls,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,preserve_cdata:e.preserve_cdata,self_closing_elements:function(e){var t,n={}
for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t])
return n}(t.getSelfClosingElements()),cdata:function(e){h.append(T("#cdata",4)).value=e},text:function(e,t){var n,r
A||(e=e.replace(_," "),(r=h.lastChild)&&(b[r.name]||"br"===r.name)&&(e=e.replace(E,""))),0!==e.length&&((n=T("#text",3)).raw=!!t,h.append(n).value=e)},comment:function(e){h.append(T("#comment",8)).value=e},pi:function(e,t){h.append(T(e,7)).value=t,O(h)},doctype:function(e){h.append(T("#doctype",10)).value=e,O(h)},start:function(e,n,o){var a,u,s,c,l=x?t.getElementRule(e):{}
if(l){for((a=T(l.outputName||e,1)).attributes=n,a.shortEnded=o,h.append(a),(c=w[h.name])&&w[a.name]&&!c[a.name]&&v.push(a),u=r.length;u--;)(s=r[u].name)in n.map&&((p=i[s])?p.push(a):i[s]=[a])
b[e]&&O(a),o||(h=a),!A&&N[e]&&(A=!0)}},end:function(n){var r,o,i,a,s,c=x?t.getElementRule(n):{}
if(c){if(b[n]&&!A){if((r=h.firstChild)&&3===r.type)if(0<(o=r.value.replace(E,"")).length)r.value=o,r=r.next
else for(i=r.next,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.next,0!==o.length&&!R.test(o)||(r.remove(),r=i),r=i
if((r=h.lastChild)&&3===r.type)if(0<(o=r.value.replace(k,"")).length)r.value=o,r=r.prev
else for(i=r.prev,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.prev,0!==o.length&&!R.test(o)||(r.remove(),r=i),r=i}if(A&&N[n]&&(A=!1),c.removeEmpty&&Bh(t,C,N,h))return a=h.parent,b[h.name]?h.empty().remove():h.unwrap(),void(h=a)
c.paddEmpty&&(Oh(s=h,"#text")&&s.firstChild.value===Jr||Bh(t,C,N,h))&&Th(e,u,b,h),h=h.parent}}},t),P=h=new Vd(u.context||e.root_name,11)
if(B.parse(a,u.format),x&&v.length&&(u.context?u.invalid=!0:function(e){for(var n,r,o,i,a,u,c,l,f,d,m=Dh("tr,td,th,tbody,thead,tfoot,table"),p=t.getNonEmptyElements(),g=t.getWhiteSpaceElements(),h=t.getTextBlockElements(),v=t.getSpecialElements(),y=0;y<e.length;y++)if((n=e[y]).parent&&!n.fixed)if(h[n.name]&&"li"===n.parent.name){for(f=n.next;f&&h[f.name];)f.name="li",f.fixed=!0,n.parent.insert(f,n.parent),f=f.next
n.unwrap(n)}else{for(o=[n],r=n.parent;r&&!t.isValidChild(r.name,n.name)&&!m[r.name];r=r.parent)o.push(r)
if(r&&1<o.length){for(o.reverse(),i=a=s(o[0].clone()),l=0;l<o.length-1;l++){for(t.isValidChild(a.name,o[l].name)?(u=s(o[l].clone()),a.append(u)):u=a,c=o[l].firstChild;c&&c!==o[l+1];)d=c.next,u.append(c),c=d
a=u}Bh(t,p,g,i)?r.insert(n,o[0],!0):(r.insert(i,o[0],!0),r.insert(n,i)),r=o[0],(Bh(t,p,g,r)||Oh(r,"br"))&&r.empty().remove()}else if(n.parent){if("li"===n.name){if((f=n.prev)&&("ul"===f.name||"ol"===f.name)){f.append(n)
continue}if((f=n.next)&&("ul"===f.name||"ol"===f.name)){f.insert(n,f.firstChild,!0)
continue}n.wrap(s(new Vd("ul",1)))
continue}t.isValidChild(n.parent.name,"div")&&t.isValidChild("div",n.name)?n.wrap(s(new Vd("div",1))):v[n.name]?n.empty().remove():n.unwrap()}}}(v)),S&&("body"===P.name||u.isRootContent)&&function(){var n,r,o=P.firstChild,i=function(e){e&&((o=e.firstChild)&&3===o.type&&(o.value=o.value.replace(E,"")),(o=e.lastChild)&&3===o.type&&(o.value=o.value.replace(k,"")))}
if(t.isValidChild(P.name,S.toLowerCase())){for(;o;)n=o.next,3===o.type||1===o.type&&"p"!==o.name&&!b[o.name]&&!o.attr("data-mce-type")?(r||((r=T(S,1)).attr(e.forced_root_block_attrs),P.insert(r,o)),r.append(o)):(i(r),r=null),o=n
i(r)}}(),!u.invalid){for(g in o)if(o.hasOwnProperty(g)){for(p=n[g],d=(c=o[g]).length;d--;)c[d].parent||c.splice(d,1)
for(l=0,f=p.length;l<f;l++)p[l](c,g,u)}for(l=0,f=r.length;l<f;l++)if((p=r[l]).name in i){for(d=(c=i[p.name]).length;d--;)c[d].parent||c.splice(d,1)
for(d=0,m=p.callbacks.length;d<m;d++)p.callbacks[d](c,p.name,u)}}return P}}
return Ph(c,e),a=c,(u=e).inline_styles&&wh(a,u),c},Uh=function(e,t,n){-1===Ct.inArray(t,n)&&(e.addAttributeFilter(n,(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),t.push(n))},zh=function(e,t){var n=["data-mce-selected"],r=t&&t.dom?t.dom:uu.DOM,o=t&&t.schema?t.schema:ri(e)
e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
var i,a,u,s=Fh(e,o)
return a=e,u=r,(i=s).addAttributeFilter("data-mce-tabindex",(function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attr("data-mce-tabindex")),n.attr(t,null)})),i.addAttributeFilter("src,href,style",(function(e,t){for(var n,r,o=e.length,i="data-mce-"+t,s=a.url_converter,c=a.url_converter_scope;o--;)void 0!==(r=(n=e[o]).attr(i))?(n.attr(t,0<r.length?r:null),n.attr(i,null)):(r=n.attr(t),"style"===t?r=u.serializeStyle(u.parseStyle(r),n.name):s&&(r=s.call(c,r,t,n.name)),n.attr(t,0<r.length?r:null))})),i.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",0<n.length?n:null))})),i.addAttributeFilter("data-mce-type",(function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attr("data-mce-type")||n.cleanup||(x.from(r.firstChild).exists((function(e){return!Zr(e.value)}))?r.unwrap():r.remove())})),i.addNodeFilter("noscript",(function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=Ko.decode(t.value))})),i.addNodeFilter("script,style",(function(e,t){for(var n,r,o,i=e.length,u=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};i--;)r=(n=e[i]).firstChild?n.firstChild.value:"","script"===t?((o=n.attr("type"))&&n.attr("type","mce-no/type"===o?null:o.replace(/^mce\-/,"")),"xhtml"===a.element_format&&0<r.length&&(n.firstChild.value="// <![CDATA[\n"+u(r)+"\n// ]]>")):"xhtml"===a.element_format&&0<r.length&&(n.firstChild.value="\x3c!--\n"+u(r)+"\n--\x3e")})),i.addNodeFilter("#comment",(function(e){for(var t,n=e.length;n--;)t=e[n],a.preserve_cdata&&0===t.value.indexOf("[CDATA[")?(t.name="#cdata",t.type=4,t.value=u.decode(t.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===t.value.indexOf("mce:protected ")&&(t.name="#text",t.type=3,t.raw=!0,t.value=unescape(t.value).substr(14))})),i.addNodeFilter("xml:namespace,input",(function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||n.attr("type")||n.attr("type","text"))})),i.addAttributeFilter("data-mce-type",(function(e){H(e,(function(e){"format-caret"===e.attr("data-mce-type")&&(e.isEmpty(i.schema.getNonEmptyElements())?e.remove():e.unwrap())}))})),i.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),{schema:o,addNodeFilter:s.addNodeFilter,addAttributeFilter:s.addAttributeFilter,serialize:function(n,i){void 0===i&&(i={})
var a,u,c,l,f,d,m,p,g,h,v,y,b=we({format:"html"},i),C=function(e,t,n){return o=n,(r=e)&&r.hasEventListeners("PreProcess")&&!o.no_events?function(e,t,n){var r,o,i=e.dom
t=t.cloneNode(!0)
var a,u,s=document.implementation
return s.createHTMLDocument&&(r=s.createHTMLDocument(""),Ct.each("BODY"===t.nodeName?t.childNodes:[t],(function(e){r.body.appendChild(r.importNode(e,!0))})),t="BODY"!==t.nodeName?r.body.firstChild:r.body,o=i.doc,i.doc=r),a=e,u=we(we({},n),{node:t}),a.fire("PreProcess",u),o&&(i.doc=o),t}(e,t,n):t
var r,o}(t,n,b),w=(a=r,u=C,l=eo((c=b).getInner?u.innerHTML:a.getOuterHTML(u)),c.selection||Gr(Et(u))?l:Ct.trim(l)),x=(f=s,d=w,v=(m=b).selection?we({forced_root_block:!1},m):m,!(g=function(e){return e&&"br"===e.name})(h=(y=f.parse(d,v)).lastChild)||g(p=h.prev)&&(h.remove(),p.remove()),y)
return"tree"===b.format?x:function(e,t,n,r,o){var i,a,u,s,c,l
return a=e,i=r,s=Kd(t,n).serialize(i),(u=o).no_events||!a?s:(c=a,l=we(we({},u),{content:s}),c.fire("PostProcess",l).content)}(t,e,o,x,b)},addRules:function(e){o.addValidElements(e)},setRules:function(e){o.setValidElements(e)},addTempAttr:f(Uh,s,n),getTempAttrs:function(){return n},getNodeFilters:s.getNodeFilters,getAttributeFilters:s.getAttributeFilters}},jh=function(e,t){var n=zh(e,t)
return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters}},Hh=function(e,t,n){return void 0===n&&(n={}),r=t,o=n,mh(e).editor.setContent(r,o)
var r,o},Vh=uu.DOM,qh=function(e){return x.from(e).each((function(e){return e.destroy()}))},$h=Object.prototype.hasOwnProperty,Wh=(Rh=function(e,t){return _(e)&&_(t)?Wh(e,t):t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var o=e[r]
for(var i in o)$h.call(o,i)&&(n[i]=Rh(n[i],o[i]))}return n}),Kh=at().deviceType,Xh=Kh.isTouch(),Yh=Kh.isPhone(),Gh=Kh.isTablet(),Jh=["lists","autolink","autosave"],Qh={table_grid:!1,object_resizing:!1,resize:!1},Zh=function(e){var t=R(e)?e.join(" "):e,n=j(k(t)?t.split(" "):[],Me)
return q(n,(function(e){return 0<e.length}))},ev=function(e,t){return e.sections().hasOwnProperty(t)},tv=function(e,t){return fe(e,"toolbar_mode").orThunk((function(){return fe(e,"toolbar_drawer").map((function(e){return!1===e?"wrap":e}))})).getOr(t)},nv=function(e,t,n,r,o){var i,a,u,s,l,d,m=e?{mobile:(i=o.mobile||{},a=t,u={resize:!1,toolbar_mode:tv(i,"scrolling"),toolbar_sticky:!1},we(we(we({},Qh),u),a?{menubar:!1}:{}))}:{},p=function(e,t){var n,r,o=ce(t,(function(t,n){return U(e,n)}))
return n=o.t,r=o.f,{sections:c(n),settings:c(r)}}(["mobile"],Wh(m,o)),g=Ct.extend(n,r,p.settings(),e&&ev(p,"mobile")?function(e,t,n){void 0===n&&(n={})
var r=e.sections(),o=r.hasOwnProperty(t)?r[t]:{}
return Ct.extend({},n,o)}(p,"mobile"):{},{validate:!0,external_plugins:(s=r,l=p.settings(),d=l.external_plugins?l.external_plugins:{},s&&s.external_plugins?Ct.extend({},s.external_plugins,d):d)})
return function(e,t,n,r){var o,i,a,u,s,c,l=Zh(n.forced_plugins),d=Zh(r.plugins),m=ev(o=t,"mobile")?o.sections().mobile:{},p=m.plugins?Zh(m.plugins):d,g=(c=e&&(u=a="mobile",s=(i=t).sections(),ev(i,a)&&s[a].theme===u)?q(p,f(U,Jh)):e&&ev(t,"mobile")?p:d,[].concat(Zh(l)).concat(Zh(c)))
return Ct.extend(r,{plugins:g.join(" ")})}(e,p,r,g)},rv=function(e,t,n){return x.from(t.settings[n]).filter(e)},ov=(Ah={},{add:function(e,t){Ah[e]=t},get:function(e){return Ah[e]?Ah[e]:{icons:{}}},has:function(e){return de(Ah,e)}}),iv=function(e,t){return t.dom[e]},av=function(e,t){return parseInt(Kn(t,e),10)},uv=f(iv,"clientWidth"),sv=f(iv,"clientHeight"),cv=f(av,"margin-top"),lv=f(av,"margin-left"),fv=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,m=Et(e.getBody()),p=e.inline?m:Et(Ut(m).dom.documentElement),g=(r=e.inline,i=t,a=n,u=(o=p).dom.getBoundingClientRect(),{x:i-(r?u.left+o.dom.clientLeft+lv(o):0),y:a-(r?u.top+o.dom.clientTop+cv(o):0)})
return c=g.x,l=g.y,f=uv(s=p),d=sv(s),0<=c&&0<=l&&c<=f&&l<=d}
function dv(e){var t,n=[],r=function(){var t,n=e.theme
return n&&n.getNotificationManagerImpl?n.getNotificationManagerImpl():{open:t=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:t,reposition:t,getArgs:t}},o=function(){return x.from(n[0])},i=function(){0<n.length&&r().reposition(n)},a=function(e){X(n,(function(t){return t===e})).each((function(e){n.splice(e,1)}))},u=function(t){if(!e.removed&&function(e){var t
return t=e.inline?e.getBody():e.getContentAreaContainer(),x.from(t).map(Et).map(fn).getOr(!1)}(e))return K(n,(function(e){return n=r().getArgs(e),o=t,!(n.type!==o.type||n.text!==o.text||n.progressBar||n.timeout||o.progressBar||o.timeout)
var n,o})).getOrThunk((function(){e.editorManager.setActive(e)
var u,s=r().open(t,(function(){a(s),i(),o().fold((function(){return e.focus()}),(function(e){return Et(e.getEl()).dom.focus()}))}))
return u=s,n.push(u),i(),s}))}
return(t=e).on("SkinLoaded",(function(){var e=t.getParam("service_message")
e&&u({text:e,type:"warning",timeout:0})})),t.on("ResizeEditor ResizeWindow NodeChange",(function(){Dr.requestAnimationFrame(i)})),t.on("remove",(function(){H(n.slice(),(function(e){r().close(e)}))})),{open:u,close:function(){o().each((function(e){r().close(e),a(e),i()}))},getNotifications:function(){return n}}}var mv=wu.PluginManager,pv=wu.ThemeManager,gv=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getWindowManagerImpl?n.getWindowManagerImpl():{open:t=function(){throw new Error("Theme did not provide a WindowManager implementation.")},openUrl:t,alert:t,confirm:t,close:t,getParams:t,setParams:t}},r=function(e,t){return function(){return t?t.apply(e,arguments):void 0}},o=function(n){var r
r=n,e.fire("CloseWindow",{dialog:r}),0===(t=q(t,(function(e){return e!==n}))).length&&e.focus()},i=function(n){e.editorManager.setActive(e),xd(e)
var r=n()
return function(n){var r
t.push(n),r=n,e.fire("OpenWindow",{dialog:r})}(r),r}
return e.on("remove",(function(){H(t,(function(e){n().close(e)}))})),{open:function(e,t){return i((function(){return n().open(e,t,o)}))},openUrl:function(e){return i((function(){return n().openUrl(e,o)}))},alert:function(e,t,o){n().alert(e,r(o||this,t))},confirm:function(e,t,o){n().confirm(e,r(o||this,t))},close:function(){x.from(t[t.length-1]).each((function(e){n().close(e),o(e)}))}}},hv=function(e,t){e.notificationManager.open({type:"error",text:t})},vv=function(e,t){e._skinLoaded?hv(e,t):e.on("SkinLoaded",(function(){hv(e,t)}))},yv=function(e,t,n){var r,o
r=t,o={message:n},e.fire(r,o),console.error(n)},bv=function(e,t,n){return n?"Failed to load "+e+": "+n+" from url "+t:"Failed to load "+e+" url: "+t},Cv=function(e,t,n){yv(e,"PluginLoadError",bv("plugin",t,n))},wv=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=window.console
r&&(r.error?r.error.apply(r,xe([e],t)):r.log.apply(r,xe([e],t)))}
function xv(e,t){var n={},r=function(e,n,r,o){var i=new XMLHttpRequest
i.open("POST",t.url),i.withCredentials=t.credentials,i.upload.onprogress=function(e){o(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,o,a
i.status<200||300<=i.status?r("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?n((o=t.basePath,a=e.location,o?o.replace(/\/$/,"")+"/"+a.replace(/^\//,""):a)):r("Invalid JSON: "+i.responseText)}
var a=new FormData
a.append("file",e.blob(),e.filename()),i.send(a)},o=function(e,t){return{url:t,blobInfo:e,status:!0}},i=function(e,t,n){return{url:"",blobInfo:e,status:!1,error:{message:t,options:n}}},a=function(e,t){Ct.each(n[e],(function(e){e(t)})),delete n[e]}
return!1===P(t.handler)&&(t.handler=r),{upload:function(u,s){return t.url||t.handler!==r?function(r,u){return r=Ct.grep(r,(function(t){return!e.isUploaded(t.blobUri())})),Sr.all(Ct.map(r,(function(r){return e.isPending(r.blobUri())?(f=r.blobUri(),new Sr((function(e){n[f]=n[f]||[],n[f].push(e)}))):(s=r,c=t.handler,l=u,e.markPending(s.blobUri()),new Sr((function(t){var n
try{var u=function(){n&&n.close()}
c(s,(function(n){u(),e.markUploaded(s.blobUri(),n),a(s.blobUri(),o(s,n)),t(o(s,n))}),(function(n,r){var o=r||{}
u(),e.removeFailed(s.blobUri()),a(s.blobUri(),i(s,n,o)),t(i(s,n,o))}),(function(e){e<0||100<e||(n=n||l()).progressBar.value(e)}))}catch(r){t(i(s,r.message,{}))}})))
var s,c,l,f})))}(u,s):new Sr((function(e){e([])}))}}}var Sv=0,Nv=function(e){return e+Sv+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t())
var t},Ev=function(e){var t,n,r,o,i,a,u,s,l,f=(t=[],n=function(e){if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
var t=e.id||Nv("blobid"),n=e.name||t
return{id:c(t),name:c(n),filename:c(n+"."+({"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"}[e.blob.type.toLowerCase()]||"dat")),blob:c(e.blob),base64:c(e.base64),blobUri:c(e.blobUri||URL.createObjectURL(e.blob)),uri:c(e.uri)}},{create:function(e,t,r,o){if(k(e))return n({id:e,name:o,blob:t,base64:r})
if(_(e))return n(e)
throw new Error("Unknown input type")},add:function(e){o(e.id())||t.push(e)},get:o=function(e){return r((function(t){return t.id()===e}))},getByUri:function(e){return r((function(t){return t.blobUri()===e}))},getByData:function(e,t){return r((function(n){return n.base64()===e&&n.blob().type===t}))},findFirst:r=function(e){return K(t,e).getOrUndefined()},removeByUri:function(e){t=q(t,(function(t){return t.blobUri()!==e||(URL.revokeObjectURL(t.blobUri()),!1)}))},destroy:function(){H(t,(function(e){URL.revokeObjectURL(e.blobUri())})),t=[]}}),d=(u={},s=function(e,t){return{status:e,resultUri:t}},{hasBlobUri:l=function(e){return e in u},getResultUri:function(e){var t=u[e]
return t?t.resultUri:null},isPending:function(e){return!!l(e)&&1===u[e].status},isUploaded:function(e){return!!l(e)&&2===u[e].status},markPending:function(e){u[e]=s(1,null)},markUploaded:function(e,t){u[e]=s(2,t)},removeFailed:function(e){delete u[e]},destroy:function(){u={}}}),m=[],p=function(t){return function(n){return e.selection?t(n):[]}},g=function(e,t,n){for(var r=0;-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1),-1!==r;);return e},h=function(e,t,n){var r='src="'+n+'"'+(n===gt.transparentSrc?' data-mce-placeholder="1"':"")
return e=g(e,'src="'+t+'"',r),g(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},v=function(t,n){H(e.undoManager.data,(function(e){"fragmented"===e.type?e.fragments=j(e.fragments,(function(e){return h(e,t,n)})):e.content=h(e.content,t,n)}))},b=function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})},C=function(t){return i=i||xv(d,{url:e.getParam("images_upload_url","","string"),basePath:e.getParam("images_upload_base_path","","string"),credentials:e.getParam("images_upload_credentials",!1,"boolean"),handler:e.getParam("images_upload_handler",null,"function")}),S().then(p((function(n){var r=j(n,(function(e){return e.blobInfo}))
return i.upload(r,b).then(p((function(r){var o=[],i=j(r,(function(t,r){var i,a,u=n[r].blobInfo,s=n[r].image
return t.status&&e.getParam("images_replace_blob_uris",!0,"boolean")?(f.removeByUri(s.src),function(t,n){var r,o=e.convertURL(n,"src")
v(t.src,n),e.$(t).attr({src:e.getParam("images_reuse_filename",!1,"boolean")?(r=n)+(-1===r.indexOf("?")?"?":"&")+(new Date).getTime():n,"data-mce-src":o})}(s,t.url)):t.error&&(t.error.options.remove&&(v(s.getAttribute("src"),gt.transparentSrc),o.push(s)),i=e,a=t.error.message,vv(i,yu.translate(["Failed to upload image: {0}",a]))),{element:s,status:t.status,uploadUri:t.url,blobInfo:u}}))
return 0<o.length&&(dh(e)?console.error("Removing images on failed uploads is currently unsupported for RTC"):e.undoManager.transact((function(){H(o,(function(t){e.dom.remove(t),f.removeByUri(t.src)}))}))),t&&t(i),i})))})))},w=function(t){if(Xs(e))return C(t)},x=function(t){return!1!==G(m,(function(e){return e(t)}))&&(0!==t.getAttribute("src").indexOf("data:")||e.getParam("images_dataimg_filter",y,"function")(t))},S=function(){return(a=a||_h(d,f)).findAll(e.getBody(),x).then(p((function(t){return t=q(t,(function(t){return"string"!=typeof t||(vv(e,t),!1)})),H(t,(function(e){v(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),t})))},N=function(t){return t.replace(/src="(blob:[^"]+)"/g,(function(t,n){var r=d.getResultUri(n)
if(r)return'src="'+r+'"'
var o=f.getByUri(n)
return(o=o||W(e.editorManager.get(),(function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)}),null))?'src="data:'+o.blob().type+";base64,"+o.base64()+'"':t}))}
return e.on("SetContent",(function(){(Xs(e)?w:S)()})),e.on("RawSaveContent",(function(e){e.content=N(e.content)})),e.on("GetContent",(function(e){e.source_view||"raw"===e.format||(e.content=N(e.content))})),e.on("PostRender",(function(){e.parser.addNodeFilter("img",(function(e){H(e,(function(e){var t,n=e.attr("src")
f.getByUri(n)||(t=d.getResultUri(n))&&e.attr("src",t)}))}))})),{blobCache:f,addFilter:function(e){m.push(e)},uploadImages:C,uploadImagesAuto:w,scanForImages:S,destroy:function(){f.destroy(),d.destroy(),a=i=null}}},kv=function(e,t,n,r){return ce(e,(function(e,o){return!!de(t,o)||(H(e,(function(e){e(!1,{node:n,format:o,parents:r})})),!1)})).t},_v=function(e,t,n,r,o){var i,a,u,s,c,l,f,d
return null===t.get()&&(a=e,u=pu({}),(i=t).set({}),a.on("NodeChange",(function(e){(function(e,t,n,r){var o=ne(n.get()),i={},a={},u=q(Ul(e.dom,t),(function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}))
oe(r,(function(t,n){Ct.each(u,(function(r){return e.formatter.matchNode(r,n,{},t.similar)?(-1===o.indexOf(n)&&(H(t.callbacks,(function(e){e(!0,{node:r,format:n,parents:u})})),i[n]=t.callbacks),a[n]=t.callbacks,!1):!Vp(e,r,n)&&void 0}))}))
var s=kv(n.get(),a,t,u)
n.set(we(we({},i),s))})(a,e.element,u,i.get())}))),c=n,l=r,f=o,d=(s=t).get(),H(c.split(","),(function(e){d[e]||(d[e]={similar:f,callbacks:[]}),d[e].callbacks.push(l)})),s.set(d),{unbind:function(){return o=n,i=r,a=(e=t).get(),H(o.split(","),(function(e){a[e].callbacks=q(a[e].callbacks,(function(e){return e!==i})),0===a[e].callbacks.length&&delete a[e]})),void e.set(a)
var e,o,i,a}}}
var Rv,Av,Tv=Ct.each,Ov=uu.DOM,Bv=function(e,t){var n,r,o,i=t&&t.schema||ri({}),a=function(e){r="string"==typeof e?{name:e,classes:[],attrs:{}}:e
var t,n,o=Ov.create(r.name)
return t=o,(n=r).classes.length&&Ov.addClass(t,n.classes.join(" ")),Ov.setAttribs(t,n.attrs),o},u=function(e,t,n){var r,o,s,c,l,f,d,m=0<t.length&&t[0],p=m&&m.name,g=(c=p,l="string"!=typeof(s=e)?s.nodeName.toLowerCase():s,!(!(d=(f=i.getElementRule(l))&&f.parentsRequired)||!d.length)&&(c&&-1!==Ct.inArray(d,c)?c:d[0]))
if(g)p===g?(o=t[0],t=t.slice(1)):o=g
else if(m)o=t[0],t=t.slice(1)
else if(!n)return e
return o&&(r=a(o)).appendChild(e),n&&(r||(r=Ov.create("div")).appendChild(e),Ct.each(n,(function(t){var n=a(t)
r.insertBefore(n,e)}))),u(r,t,o&&o.siblings)}
return e&&e.length?(r=e[0],n=a(r),(o=Ov.create("div")).appendChild(u(n,e.slice(1),r.siblings)),o):""},Pv=function(e){var t,n={classes:[],attrs:{}}
return"*"!==(e=n.selector=Ct.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,(function(e,t,r,o,i){switch(t){case"#":n.attrs.id=r
break
case".":n.classes.push(r)
break
case":":-1!==Ct.inArray("checked disabled enabled read-only required".split(" "),r)&&(n.attrs[r]=r)}var a
return"["!==o||(a=i.match(/([\w\-]+)(?:\=\"([^\"]+))?/))&&(n.attrs[a[1]]=a[2]),""}))),n.name=t||"div",n},Dv=function(e,t){var n,r,o,i="",a=(o=e.getParam("preview_styles","font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),k(o)?o:"")
if(""===a)return""
var u=function(e){return e.replace(/%(\w+)/g,"")}
if("string"==typeof t){if(!(t=e.formatter.get(t)))return
t=t[0]}if("preview"in t){var s=fe(t,"preview")
if(s.is(!1))return""
a=s.getOr(a)}n=t.block||t.inline||"span"
var c,l=(c=t.selector)&&"string"==typeof c?(c=(c=c.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Ct.map(c.split(/(?:>|\s+(?![^\[\]]+\]))/),(function(e){var t=Ct.map(e.split(/(?:~\+|~|\+)/),Pv),n=t.pop()
return t.length&&(n.siblings=t),n})).reverse()):[],f=l.length?(l[0].name||(l[0].name=n),n=t.selector,Bv(l,e)):Bv([n],e),d=Ov.select(n,f)[0]||f.firstChild
return Tv(t.styles,(function(e,t){var n=u(e)
n&&Ov.setStyle(d,t,n)})),Tv(t.attributes,(function(e,t){var n=u(e)
n&&Ov.setAttrib(d,t,n)})),Tv(t.classes,(function(e){var t=u(e)
Ov.hasClass(d,t)||Ov.addClass(d,t)})),e.fire("PreviewFormats"),Ov.setStyles(f,{position:"absolute",left:-65535}),e.getBody().appendChild(f),r=Ov.getStyle(e.getBody(),"fontSize",!0),r=/px$/.test(r)?parseInt(r,10):0,Tv(a.split(" "),(function(t){var n=Ov.getStyle(d,t,!0)
if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=Ov.getStyle(e.getBody(),t,!0),"#ffffff"===Ov.toHex(n).toLowerCase())||"color"===t&&"#000000"===Ov.toHex(n).toLowerCase())){if("font-size"===t&&/em|%$/.test(n)){if(0===r)return
n=parseFloat(n)/(/%$/.test(n)?100:1)*r+"px"}"border"===t&&n&&(i+="padding:0 2px;"),i+=t+":"+n+";"}})),e.fire("AfterPreviewFormats"),Ov.remove(f),i},Lv=function(e){var t=function(e){var t,n,r={},o=function(e,t){e&&("string"!=typeof e?Ct.each(e,(function(e,t){o(t,e)})):(R(t)||(t=[t]),Ct.each(t,(function(e){void 0===e.deep&&(e.deep=!e.selector),void 0===e.split&&(e.split=!e.selector||e.inline),void 0===e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))})),r[e]=t))}
return o((t=e.dom,n={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all",preserve_attributes:["class","style"]}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",defaultBlock:"p",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(e,t,n){return Sn(e)&&e.hasAttribute("href")},onformat:function(e,n,r){Ct.each(r,(function(n,r){t.setAttrib(e,r,n)}))}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]},Ct.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),(function(e){n[e]={block:e,remove:"all"}})),n)),o(e.getParam("formats")),{get:function(e){return e?r[e]:r},has:function(e){return de(r,e)},register:o,unregister:function(e){return e&&r[e]&&delete r[e],r}}}(e),n=pu(null)
return function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t])
e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])}(e),function(e){e.on("mouseup keydown",(function(t){var n,r,o,i
n=e,r=t.keyCode,o=n.selection,i=n.getBody(),og(n,null,!1),8!==r&&46!==r||!o.isCollapsed()||o.getStart().innerHTML!==Qp||og(n,hl(i,o.getStart())),37!==r&&39!==r||og(n,hl(i,o.getStart()))}))}(e),{get:t.get,has:t.has,register:t.register,unregister:t.unregister,apply:function(t,n,r){var o,i,a
o=t,i=n,a=r,ph(e).formatter.apply(o,i,a)},remove:function(t,n,r,o){var i,a,u,s
i=t,a=n,u=r,s=o,ph(e).formatter.remove(i,a,u,s)},toggle:function(t,n,r){var o,i,a
o=t,i=n,a=r,ph(e).formatter.toggle(o,i,a)},match:f(Xp,e),matchAll:f(Yp,e),matchNode:f(Kp,e),canApply:f(Gp,e),formatChanged:f(_v,e,n),getCssText:f(Dv,e)}},Iv=function(e){var t,n=pu(x.none()),r=pu(0),o=pu(0),i={data:[],typing:!1,beforeChange:function(){var t,o
t=r,o=n,ph(e).undoManager.beforeChange(t,o)},add:function(t,a){return u=i,s=o,c=r,l=n,f=t,d=a,ph(e).undoManager.addUndoLevel(u,s,c,l,f,d)
var u,s,c,l,f,d},undo:function(){return t=i,n=r,a=o,ph(e).undoManager.undo(t,n,a)
var t,n,a},redo:function(){return t=e,n=o,r=i.data,ph(t).undoManager.redo(n,r)
var t,n,r},clear:function(){var t,n
t=i,n=o,ph(e).undoManager.clear(t,n)},reset:function(){var t
t=i,ph(e).undoManager.reset(t)},hasUndo:function(){return t=i,n=o,ph(e).undoManager.hasUndo(t,n)
var t,n},hasRedo:function(){return t=i,n=o,ph(e).undoManager.hasRedo(t,n)
var t,n},transact:function(t){return n=i,o=r,a=t,ph(e).undoManager.transact(n,o,a)
var n,o,a},ignore:function(t){var n,o
n=r,o=t,ph(e).undoManager.ignore(n,o)},extra:function(t,n){var r,a,u,s
r=i,a=o,u=t,s=n,ph(e).undoManager.extra(r,a,u,s)}}
return dh(e)||function(e,t,n){var r=pu(!1),o=function(e){ah(t,!1,n),t.add({},e)}
e.on("init",(function(){t.add()})),e.on("BeforeExecCommand",(function(e){var r=e.command.toLowerCase()
"undo"!==r&&"redo"!==r&&"mcerepaint"!==r&&(uh(t,n),t.beforeChange())})),e.on("ExecCommand",(function(e){var t=e.command.toLowerCase()
"undo"!==t&&"redo"!==t&&"mcerepaint"!==t&&o(e)})),e.on("ObjectResizeStart cut",(function(){t.beforeChange()})),e.on("SaveContent ObjectResized blur",o),e.on("dragend",o),e.on("keyup",(function(n){var i=n.keyCode
n.isDefaultPrevented()||((33<=i&&i<=36||37<=i&&i<=40||45===i||n.ctrlKey)&&(o(),e.nodeChanged()),46!==i&&8!==i||e.nodeChanged(),r.get()&&t.typing&&!1===oh(eh(e),t.data[0])&&(!1===e.isDirty()&&(e.setDirty(!0),e.fire("change",{level:t.data[0],lastLevel:null})),e.fire("TypingUndo"),r.set(!1),e.nodeChanged()))})),e.on("keydown",(function(e){var i,a=e.keyCode
e.isDefaultPrevented()||(33<=a&&a<=36||37<=a&&a<=40||45===a?t.typing&&o(e):(i=e.ctrlKey&&!e.altKey||e.metaKey,!(a<16||20<a)||224===a||91===a||t.typing||i||(t.beforeChange(),ah(t,!0,n),t.add({},e),r.set(!0))))})),e.on("mousedown",(function(e){t.typing&&o(e)})),e.on("input",(function(e){var t,n
e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(n=e).inputType&&null===n.data||"insertFromPaste"===(t=e).inputType||"insertFromDrop"===t.inputType)&&o(e)})),e.on("AddUndo Undo Redo ClearUndos",(function(t){t.isDefaultPrevented()||e.nodeChanged()}))}(e,i,r),(t=e).addShortcut("meta+z","","Undo"),t.addShortcut("meta+y,meta+shift+z","","Redo"),i},Mv=[9,27,Sf.HOME,Sf.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,Sf.DOWN,Sf.UP,Sf.LEFT,Sf.RIGHT].concat(gt.browser.isFirefox()?[224]:[]),Fv="data-mce-placeholder",Uv=function(e){return"keydown"===e.type||"keyup"===e.type},zv=function(e){var t=e.keyCode
return t===Sf.BACKSPACE||t===Sf.DELETE},jv=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,Hv=function(e,t){return _t(Et(t),e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string"))},Vv=function(e,t,n){var r,o,i,a=(r=e,o=t,i=n,q(uu.DOM.getParents(i.container(),"*",o),r))
return x.from(a[a.length-1])},qv=function(e,t){if(!t)return t
var n=t.container(),r=t.offset()
return e?oo(n)?On(n.nextSibling)?ws(n.nextSibling,0):ws.after(n):uo(t)?ws(n,r+1):t:oo(n)?On(n.previousSibling)?ws(n.previousSibling,n.previousSibling.data.length):ws.before(n):so(t)?ws(n,r-1):t},$v=f(qv,!0),Wv=f(qv,!1),Kv=function(e,t){return Tt(e,t)?br(t,(function(e){return $r(e)||Kr(e)}),(n=e,function(e){return At(n,Et(e.dom.parentNode))})):x.none()
var n},Xv=function(e){var t,n,r
e.dom.isEmpty(e.getBody())&&(e.setContent(""),r=(n=(t=e).getBody()).firstChild&&t.dom.isBlock(n.firstChild)?n.firstChild:n,t.selection.setCursorLocation(r,0))},Yv=function(e,t){return{from:e,to:t}},Gv=function(e,t){var n=Et(e),r=Et(t.container())
return Kv(n,r).map((function(e){return{block:e,position:t}}))},Jv=function(e){var t,n=(t=Wt(e),X(t,Hr).fold((function(){return t}),(function(e){return t.slice(0,e)})))
return H(n,cn),n},Qv=function(e,t){var n=wm(t,e)
return K(n.reverse(),(function(e){return To(e)})).each(cn)},Zv=function(e,t,n,r){if(To(n))return ym(n),dl(n.dom)
0===q(qt(r),(function(e){return!To(e)})).length&&To(t)&&nn(r,St("br"))
var o=fl(n.dom,ws.before(r.dom))
return H(Jv(t),(function(e){nn(r,e)})),Qv(e,t),o},ey=function(e,t,n){if(To(n))return cn(n),To(t)&&ym(t),dl(t.dom)
var r=ml(n.dom)
return H(Jv(t),(function(e){an(n,e)})),Qv(e,t),r},ty=function(e,t){cl(e,t.dom).map((function(e){return e.getNode()})).map(Et).filter(qr).each(cn)},ny=function(e,t,n){return ty(!0,t),ty(!1,n),function(e,t){return Tt(t,e)?(n=wm(e,t),x.from(n[n.length-1])):x.none()
var n}(t,n).fold(f(ey,e,t,n),f(Zv,e,t,n))},ry=function(e,t,n,r){return t?ny(e,r,n):ny(e,n,r)},oy=function(e,t){var n,r,o,i=Et(e.getBody()),a=(n=i.dom,r=t,((o=e.selection.getRng()).collapsed?function(e,t,n){var r=Gv(e,ws.fromRangeStart(n)),o=r.bind((function(n){return al(t,e,n.position).bind((function(n){return Gv(e,n).map((function(n){return r=e,o=t,Ln((i=n).position.getNode())&&!1===To(i.block)?cl(!1,i.block.dom).bind((function(e){return e.isEqual(i.position)?al(o,r,e).bind((function(e){return Gv(r,e)})):x.some(i)})).getOr(i):i
var r,o,i}))}))}))
return Vu(r,o,Yv).filter((function(e){return!1===At((r=e).from.block,r.to.block)&&jt((n=e).from.block).bind((function(e){return jt(n.to.block).filter((function(t){return At(e,t)}))})).isSome()&&!1===Fn((t=e).from.block.dom)&&!1===Fn(t.to.block.dom)
var t,n,r}))}(n,r,o):x.none()).bind((function(e){return ry(i,t,e.from.block,e.to.block)})))
return a.each((function(t){e.selection.setRng(t.toRange())})),a.isSome()},iy=function(e,t){var n=Et(t),r=f(At,e)
return yr(n,Yr,r).isSome()},ay=function(e){var t,n,r,o,i=Et(e.getBody())
return function(e,t){var n,r,o=fl(e.dom,ws.fromRangeStart(t)).isNone(),i=ll(e.dom,ws.fromRangeEnd(t)).isNone()
return!(iy(n=e,(r=t).startContainer)||iy(n,r.endContainer))&&o&&i}(i,e.selection.getRng())?((o=e).setContent(""),o.selection.setCursorLocation(),!0):(t=i,n=e.selection,r=n.getRng(),Vu(Kv(t,Et(r.startContainer)),Kv(t,Et(r.endContainer)),(function(e,o){return!1===At(e,o)&&(r.deleteContents(),ry(t,!0,e,o).each((function(e){n.setRng(e.toRange())})),!0)})).getOr(!1))},uy=function(e,t){return!e.selection.isCollapsed()&&ay(e)},sy=Mn,cy=Fn,ly=function(e,t,n,r,o){return x.from(t._selectionOverrides.showCaret(e,n,r,o))},fy=function(e,t){var n,r
return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?x.none():x.some(((r=(n=t).ownerDocument.createRange()).selectNode(n),r))},dy=function(e,t,n){var r=Fc(1,e.getBody(),t),o=ws.fromRangeStart(r),i=o.getNode()
if(Cc(i))return ly(1,e,i,!o.isAtEnd(),!1)
var a=o.getNode(!0)
if(Cc(a))return ly(1,e,a,!1,!1)
var u=e.dom.getParent(o.getNode(),(function(e){return cy(e)||sy(e)}))
return Cc(u)?ly(1,e,u,!1,n):x.none()},my=function(e,t,n){return t.collapsed?dy(e,t,n).getOr(t):t},py=function(e){return hm(e)||dm(e)},gy=function(e){return vm(e)||mm(e)},hy=function(e,t,n,r,o,i){var a,u
return ly(r,e,i.getNode(!o),o,!0).each((function(n){var r
t.collapsed?(r=t.cloneRange(),o?r.setEnd(n.startContainer,n.startOffset):r.setStart(n.endContainer,n.endOffset),r.deleteContents()):t.deleteContents(),e.selection.setRng(n)})),a=e.dom,On(u=n)&&0===u.data.length&&a.remove(u),!0},vy=function(e,t){var n=e.selection.getRng()
if(!On(n.commonAncestorContainer))return!1
var r=t?bs.Forwards:bs.Backwards,o=nl(e.getBody()),i=f(Hc,t?o.next:o.prev),a=t?py:gy,u=zc(r,e.getBody(),n),s=qv(t,i(u))
if(!s||!Vc(u,s))return!1
if(a(s))return hy(e,n,u.getNode(),r,t,s)
var c=i(s)
return!!(c&&a(c)&&Vc(s,c))&&hy(e,n,u.getNode(),r,t,c)},yy=fr([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),by=function(e,t,n){return al(t,e,n).bind((function(r){return c=r.getNode(),Yr(Et(c))||Kr(Et(c))?x.none():(o=e,u=r,s=function(e){return Vr(Et(e))&&!Bc(a,u,o)},Uc(!(i=t),a=n).fold((function(){return Uc(i,u).fold(v,s)}),s)?x.none():t&&Fn(r.getNode())||!1===t&&Fn(r.getNode(!0))?function(e,t,n,r){var o=r.getNode(!1===t)
return Kv(Et(e),Et(n.getNode())).map((function(e){return To(e)?yy.remove(e.dom):yy.moveToElement(o)})).orThunk((function(){return x.some(yy.moveToElement(o))}))}(e,t,n,r):t&&vm(n)||!1===t&&hm(n)?x.some(yy.moveToPosition(r)):x.none())
var o,i,a,u,s,c}))},Cy=function(e,t){return x.from(wf(e.getBody(),t))},wy=function(e,t){var n=e.selection.getNode()
return Cy(e,n).filter(Fn).fold((function(){return n=e.getBody(),r=t,o=e.selection.getRng(),i=Fc(r?1:-1,n,o),a=ws.fromRangeStart(i),u=Et(n),(!1===r&&vm(a)?x.some(yy.remove(a.getNode(!0))):r&&hm(a)?x.some(yy.remove(a.getNode())):!1===r&&hm(a)&&Pm(u,a)?Dm(u,a).map((function(e){return yy.remove(e.getNode())})):r&&vm(a)&&Bm(u,a)?Lm(u,a).map((function(e){return yy.remove(e.getNode())})):function(e,t,n){return i=t,a=n.getNode(!1===i),u=i?"after":"before",Sn(a)&&a.getAttribute("data-mce-caret")===u?(r=t,o=n.getNode(!1===t),(r&&Fn(o.nextSibling)?x.some(yy.moveToElement(o.nextSibling)):!1===r&&Fn(o.previousSibling)?x.some(yy.moveToElement(o.previousSibling)):x.none()).fold((function(){return by(e,t,n)}),x.some)):by(e,t,n).bind((function(t){return r=e,o=n,t.fold((function(e){return x.some(yy.remove(e))}),(function(e){return x.some(yy.moveToElement(e))}),(function(e){return Bc(o,e,r)?x.none():x.some(yy.moveToPosition(e))}))
var r,o}))
var r,o,i,a,u}(n,r,a)).exists((function(n){return n.fold((function(e){return a._selectionOverrides.hideFakeCaret(),up(a,u,Et(e)),!0}),(i=u=t,function(e){var t=i?ws.before(e):ws.after(e)
return o.selection.setRng(t.toRange()),!0}),(r=o=a=e,function(e){return r.selection.setRng(e.toRange()),!0}))
var r,o,i,a,u}))
var n,r,o,i,a,u}),y)},xy=function(e,t){var n=e.selection.getNode()
return!!Fn(n)&&Cy(e,n.parentNode).filter(Fn).fold((function(){var n
return n=Et(e.getBody()),H(Au(n,".mce-offscreen-selection"),cn),up(e,t,Et(e.selection.getNode())),Xv(e),!0}),(function(){return!0}))},Sy=function(e){var t,n=e.dom,r=e.selection,o=wf(e.getBody(),r.getNode())
return Mn(o)&&n.isBlock(o)&&n.isEmpty(o)&&(t=n.create("br",{"data-mce-bogus":"1"}),n.setHTML(o,""),o.appendChild(t),r.setRng(ws.before(t).toRange())),!0},Ny=function(e,t){return(e.selection.isCollapsed()?wy:xy)(e,t)},Ey=function(e,t){return!!e.selection.isCollapsed()&&(n=e,r=t,o=ws.fromRangeStart(n.selection.getRng()),al(r,n.getBody(),o).filter((function(e){return(r?lm:fm)(e)})).bind((function(e){return x.from(Pc(r?0:-1,e))})).exists((function(e){return n.selection.select(e),!0})))
var n,r,o},ky=On,_y=function(e){return ky(e)&&e.data[0]===Qr},Ry=function(e){return ky(e)&&e.data[e.data.length-1]===Qr},Ay=function(e){return e.ownerDocument.createTextNode(Qr)},Ty=function(e,t){return(e?function(e){if(ky(e.previousSibling))return Ry(e.previousSibling)||e.previousSibling.appendData(Qr),e.previousSibling
if(ky(e))return _y(e)||e.insertData(0,Qr),e
var t=Ay(e)
return e.parentNode.insertBefore(t,e),t}:function(e){if(ky(e.nextSibling))return _y(e.nextSibling)||e.nextSibling.insertData(0,Qr),e.nextSibling
if(ky(e))return Ry(e)||e.appendData(Qr),e
var t=Ay(e)
return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t})(t)},Oy=f(Ty,!0),By=f(Ty,!1),Py=function(e,t){return On(e.container())?Ty(t,e.container()):Ty(t,e.getNode())},Dy=function(e,t){var n=t.get()
return n&&e.container()===n&&oo(n)},Ly=function(e,t){return t.fold((function(t){dc(e.get())
var n=Oy(t)
return e.set(n),x.some(ws(n,n.length-1))}),(function(t){return dl(t).map((function(t){if(Dy(t,e))return ws(e.get(),1)
dc(e.get())
var n=Py(t,!0)
return e.set(n),ws(n,1)}))}),(function(t){return ml(t).map((function(t){if(Dy(t,e))return ws(e.get(),e.get().length-1)
dc(e.get())
var n=Py(t,!1)
return e.set(n),ws(n,n.length-1)}))}),(function(t){dc(e.get())
var n=By(t)
return e.set(n),x.some(ws(n,1))}))},Iy=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t)
if(r.isSome())return r}return x.none()},My=fr([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),Fy=function(e,t){return Oc(t,e)||e},Uy=function(e,t,n){var r=$v(n),o=Fy(t,r.container())
return Vv(e,o,r).fold((function(){return ll(o,r).bind(f(Vv,e,o)).map((function(e){return My.before(e)}))}),x.none)},zy=function(e,t){return null===hl(e,t)},jy=function(e,t,n){return Vv(e,t,n).filter(f(zy,t))},Hy=function(e,t,n){var r=Wv(n)
return jy(e,t,r).bind((function(e){return fl(e,r).isNone()?x.some(My.start(e)):x.none()}))},Vy=function(e,t,n){var r=$v(n)
return jy(e,t,r).bind((function(e){return ll(e,r).isNone()?x.some(My.end(e)):x.none()}))},qy=function(e,t,n){var r=Wv(n),o=Fy(t,r.container())
return Vv(e,o,r).fold((function(){return fl(o,r).bind(f(Vv,e,o)).map((function(e){return My.after(e)}))}),x.none)},$y=function(e){return!1===function(e){return"rtl"===uu.DOM.getStyle(e,"direction",!0)||(t=e.textContent,jv.test(t))
var t}(Ky(e))},Wy=function(e,t,n){return Iy([Uy,Hy,Vy,qy],[e,t,n]).filter($y)},Ky=function(e){return e.fold(l,l,l,l)},Xy=function(e){return e.fold(c("before"),c("start"),c("end"),c("after"))},Yy=function(e){return e.fold(My.before,My.before,My.after,My.after)},Gy=function(e){return e.fold(My.start,My.start,My.end,My.end)},Jy=function(e,t,n,r,o,i){return Vu(Vv(t,n,r),Vv(t,n,o),(function(t,r){return t!==r&&(a=r,u=Oc(t,o=n),s=Oc(a,o),u&&u===s)?My.after(e?t:r):i
var o,a,u,s})).getOr(i)},Qy=function(e,t){return e.fold(y,(function(e){return r=t,!(Xy(n=e)===Xy(r)&&Ky(n)===Ky(r))
var n,r}))},Zy=function(e,t){return e?t.fold(s(x.some,My.start),x.none,s(x.some,My.after),x.none):t.fold(x.none,s(x.some,My.before),x.none,s(x.some,My.end))},eb=function(e,t,n,r){var o=qv(e,r),i=Wy(t,n,o)
return Wy(t,n,o).bind(f(Zy,e)).orThunk((function(){return a=t,u=n,s=i,c=qv(o=e,r),al(o,u,c).map(f(qv,o)).fold((function(){return s.map(Yy)}),(function(e){return Wy(a,u,e).map(f(Jy,o,a,u,c,e)).filter(f(Qy,s))})).filter($y)
var o,a,u,s,c}))},tb=(f(eb,!1),f(eb,!0),function(e,t,n){var r=e?1:-1
return t.setRng(ws(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0}),nb=function(e,t){var n=e.dom.createRng()
n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},rb=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},ob=function(e,t,n){return Ly(t,n).map((function(t){return nb(e,t),n}))},ib=function(e,t,n){return!!nc(e)&&(o=t,i=n,a=(r=e).getBody(),u=ws.fromRangeStart(r.selection.getRng()),s=f(Hv,r),eb(i,s,a,u).bind((function(e){return ob(r,o,e)})).isSome())
var r,o,i,a,u,s},ab=function(e,t,n){return!!nc(t)&&function(e,t){var n=t.selection.getRng(),r=e?ws.fromRangeEnd(n):ws.fromRangeStart(n)
return!!P(t.selection.getSel().modify)&&(e&&uo(r)?tb(!0,t.selection,r):!(e||!so(r))&&tb(!1,t.selection,r))}(e,t)},ub=function(e){var t=pu(null),n=f(Hv,e)
return e.on("NodeChange",(function(r){var o,i,a,u,s,c,l,d,m,p,g
!nc(e)||gt.browser.isIE()&&r.initial||(c=n,l=e.dom,d=r.parents,m=j(Au(Et(l.getRoot()),'*[data-mce-selected="inline-boundary"]'),(function(e){return e.dom})),p=q(m,c),g=q(d,c),H(Q(p,g),f(rb,!1)),H(Q(g,p),f(rb,!0)),function(e,t){var n,r
e.selection.isCollapsed()&&!0!==e.composing&&t.get()&&(n=ws.fromRangeStart(e.selection.getRng()),ws.isTextPosition(n)&&!1===(uo(r=n)||so(r))&&(nb(e,fc(t.get(),n)),t.set(null)))}(e,t),o=n,i=e,a=t,u=r.parents,i.selection.isCollapsed()&&(s=q(u,o),H(s,(function(e){var t=ws.fromRangeStart(i.selection.getRng())
Wy(o,i.getBody(),t).bind((function(e){return ob(i,a,e)}))}))))})),t},sb=f(ab,!0),cb=f(ab,!1),lb=function(e,t){return function(n){return Ly(t,n).exists((function(t){return nb(e,t),!0}))}},fb=function(e,t,n,r){var o=e.getBody(),i=f(Hv,e)
e.undoManager.ignore((function(){var a,u,s
e.selection.setRng((a=n,u=r,(s=document.createRange()).setStart(a.container(),a.offset()),s.setEnd(u.container(),u.offset()),s)),e.execCommand("Delete"),Wy(i,o,ws.fromRangeStart(e.selection.getRng())).map(Gy).map(lb(e,t))})),e.nodeChanged()},db=function(e,t,n){if(e.selection.isCollapsed()&&nc(e)){var r=ws.fromRangeStart(e.selection.getRng())
return function(e,t,n,r){var o,i,a=(o=e.getBody(),i=r.container(),Oc(i,o)||o),u=f(Hv,e),s=Wy(u,a,r)
return s.bind((function(e){return n?e.fold(c(x.some(Gy(e))),x.none,c(x.some(Yy(e))),x.none):e.fold(x.none,c(x.some(Yy(e))),x.none,c(x.some(Gy(e))))})).map(lb(e,t)).getOrThunk((function(){var o=ul(n,a,r),i=o.bind((function(e){return Wy(u,a,e)}))
return Vu(s,i,(function(){return Vv(u,a,r).exists((function(t){return!!Vu(dl(r=t),ml(r),(function(e,t){var n=qv(!0,e),o=qv(!1,t)
return ll(r,n).forall((function(e){return e.isEqual(o)}))})).getOr(!0)&&(up(e,n,Et(t)),!0)
var r}))})).orThunk((function(){return i.bind((function(i){return o.map((function(o){return n?fb(e,t,r,o):fb(e,t,o,r),!0}))}))})).getOr(!1)}))}(e,t,n,r)}return!1},mb=function(e){return 1===Wt(e).length},pb=function(e,t){var n,r=Et(e.getBody()),o=Et(e.selection.getStart()),i=q((n=wm(o,r),X(n,Hr).fold(c(n),(function(e){return n.slice(0,e)}))),mb)
return ee(i).exists((function(n){var r,o,a,u,s=ws.fromRangeStart(e.selection.getRng())
return o=t,a=s,u=n.dom,!(!Vu(dl(u),ml(u),(function(e,t){var n=qv(!0,e),r=qv(!1,t),i=qv(!1,a)
return o?ll(u,i).exists((function(e){return e.isEqual(r)&&a.isEqual(n)})):fl(u,i).exists((function(e){return e.isEqual(n)&&a.isEqual(r)}))})).getOr(!0)||gl((r=n).dom)&&eg(r.dom)||(function(e,t,n,r){var o,i,a,u,s,c=f(sg,t),l=j(q(r,c),(function(e){return e.dom}))
0===l.length?up(t,e,n):(i=n.dom,a=l,u=ng(!1),s=ag(a,u.dom),nn(Et(i),u),cn(Et(i)),o=ws(s,0),t.selection.setRng(o.toRange()))}(t,e,n,i),0))}))},gb=function(e,t){return!!e.selection.isCollapsed()&&pb(e,t)},hb=function(e,t,n){return e._selectionOverrides.hideFakeCaret(),up(e,t,Et(n)),!0},vb=function(e,t){return e.selection.isCollapsed()?(i=e,u=(a=t)?dm:mm,s=a?bs.Forwards:bs.Backwards,c=zc(s,i.getBody(),i.selection.getRng()),u(c)?hb(i,a,c.getNode(!a)):x.from(qv(a,c)).filter((function(e){return u(e)&&Vc(c,e)})).exists((function(e){return hb(i,a,e.getNode(!a))}))):(r=t,o=(n=e).selection.getNode(),!!zn(o)&&hb(n,r,o))
var n,r,o,i,a,u,s,c},yb=function(e){var t=parseInt(e,10)
return isNaN(t)?0:t},bb=function(e,t){return(e||"table"===Ot(t)?"margin":"padding")+("rtl"===Kn(t,"direction")?"-right":"-left")},Cb=function(e){var t,n=xb(e)
return!e.mode.isReadOnly()&&(1<n.length||(t=e,G(n,(function(e){var n=bb(Qs(t),e),r=Yn(e,n).map(yb).getOr(0)
return"false"!==t.dom.getContentEditable(e.dom)&&0<r}))))},wb=function(e){return Wr(e)||Kr(e)},xb=function(e){return q(j(e.selection.getSelectedBlocks(),Et),(function(e){return!wb(e)&&!jt(e).map(wb).getOr(!1)&&br(e,(function(e){return Mn(e.dom)||Fn(e.dom)})).exists((function(e){return Mn(e.dom)}))}))},Sb=function(e,t){var n=e.dom,r=e.selection,o=e.formatter,i=e.getParam("indentation","40px","string"),a=/[a-z%]+$/i.exec(i)[0],u=parseInt(i,10),s=Qs(e),c=Ws(e)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||""!==c||n.getParent(r.getNode(),n.isBlock)||o.apply("div"),H(xb(e),(function(e){var r,o,i,c,l,f,d,m
r=n,o=t,i=s,c=u,l=a,f=e.dom,m=bb(i,Et(f)),"outdent"===o?(d=Math.max(0,yb(f.style[m])-c),r.setStyle(f,m,d?d+l:"")):(d=yb(f.style[m])+c+l,r.setStyle(f,m,d))}))},Nb=function(e,t){if(e.selection.isCollapsed()&&Cb(e)){var n=e.dom,r=e.selection.getRng(),o=ws.fromRangeStart(r),i=n.getParent(r.startContainer,n.isBlock)
if(null!==i&&km(Et(i),o))return Sb(e,"outdent"),!0}return!1},Eb=function(e,t){e.getDoc().execCommand(t,!1,null)},kb=function(e){return void 0===e.touches||1!==e.touches.length?x.none():x.some(e.touches[0])},_b=function(e,t){return e.hasOwnProperty(t.nodeName)},Rb=function(e){var t,n,r,o=e.dom,i=e.selection,a=e.schema,u=a.getBlockElements(),s=i.getStart(),c=e.getBody(),l=Ws(e)
if(s&&Sn(s)&&l){var f=c.nodeName.toLowerCase()
if(a.isValidChild(f,l.toLowerCase())&&(d=u,m=c,!z(Cm(Et(s),Et(m)),(function(e){return _b(d,e.dom)})))){var d,m,p,g,h=i.getRng(),v=h.startContainer,y=h.startOffset,b=h.endContainer,C=h.endOffset,w=Bd(e)
for(s=c.firstChild;s;)if(p=u,On(g=s)||Sn(g)&&!_b(p,g)&&!Nl(g)){if(function(e,t){if(On(t)){if(0===t.nodeValue.length)return!0
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||_b(e,t.nextSibling)))return!0}return!1}(u,s)){s=(n=s).nextSibling,o.remove(n)
continue}t||(t=o.create(l,Ks(e)),s.parentNode.insertBefore(t,s),r=!0),s=(n=s).nextSibling,t.appendChild(n)}else t=null,s=s.nextSibling
r&&w&&(h.setStart(v,y),h.setEnd(b,C),i.setRng(h),e.nodeChanged())}}},Ab=function(e,t){var n
t.hasAttribute("data-mce-caret")&&(fo(t),(n=e).selection.setRng(n.selection.getRng()),e.selection.scrollIntoView(t))},Tb=function(e,t){var n=wr(Et(e.getBody()),"*[data-mce-caret]").fold(c(null),(function(e){return e.dom}))
if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void Ab(e,n)):void(ao(n)&&(Ab(e,n),e.undoManager.add()))};(Av=Rv=Rv||{})[Av.Br=0]="Br",Av[Av.Block=1]="Block",Av[Av.Wrap=2]="Wrap",Av[Av.Eol=3]="Eol"
var Ob,Bb,Pb=function(e,t){return e===bs.Backwards?J(t):t},Db=function(e,t,n,r){for(var o,i,a,u,s,c,l=nl(n),f=r,d=[];f&&(s=l,c=f,o=t===bs.Forwards?s.next(c):s.prev(c));){if(Ln(o.getNode(!1)))return t===bs.Forwards?{positions:Pb(t,d).concat([o]),breakType:Rv.Br,breakAt:x.some(o)}:{positions:Pb(t,d),breakType:Rv.Br,breakAt:x.some(o)}
if(o.isVisible()){if(e(f,o)){var m=(i=t,a=f,Ln((u=o).getNode(i===bs.Forwards))?Rv.Br:!1===Bc(a,u)?Rv.Block:Rv.Wrap)
return{positions:Pb(t,d),breakType:m,breakAt:x.some(o)}}d.push(o),f=o}else f=o}return{positions:Pb(t,d),breakType:Rv.Eol,breakAt:x.none()}},Lb=function(e,t,n,r){return t(n,r).breakAt.map((function(r){var o=t(n,r).positions
return e===bs.Backwards?o.concat(r):[r].concat(o)})).getOr([])},Ib=function(e,t){return W(e,(function(e,n){return e.fold((function(){return x.some(n)}),(function(r){return Vu(Z(r.getClientRects()),Z(n.getClientRects()),(function(e,o){var i=Math.abs(t-e.left)
return Math.abs(t-o.left)<=i?n:r})).or(e)}))}),x.none())},Mb=function(e,t){return Z(t.getClientRects()).bind((function(t){return Ib(e,t.left)}))},Fb=f(Db,ys.isAbove,-1),Ub=f(Db,ys.isBelow,1),zb=f(Lb,-1,Fb),jb=f(Lb,1,Ub),Hb=function(e){var t=function(t){return j(t,(function(t){return(t=$u(t)).node=e,t}))}
if(Sn(e))return t(e.getClientRects())
if(On(e)){var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}},Vb=function(e){return Y(e,Hb)};(Bb=Ob=Ob||{})[Bb.Up=-1]="Up",Bb[Bb.Down=1]="Down"
var qb=function(e,t,n,r,o,i){var a=0,u=[],s=function(r){var i,s,l=Vb([r])
for(-1===e&&(l=l.reverse()),i=0;i<l.length;i++)if(s=l[i],!n(s,c)){if(0<u.length&&t(s,Ce(u))&&a++,s.line=a,o(s))return!0
u.push(s)}},c=Ce(i.getClientRects())
if(!c)return u
var l=i.getNode()
return s(l),function(e,t,n,r){for(;r=Tc(r,e,So,t);)if(n(r))return}(e,r,s,l),u},$b=f(qb,Ob.Up,Xu,Yu),Wb=f(qb,Ob.Down,Yu,Xu),Kb=function(e){return function(t){return n=e,t.line>n
var n}},Xb=function(e){return function(t){return n=e,t.line===n
var n}},Yb=Fn,Gb=Tc,Jb=function(e,t){return Math.abs(e.left-t)},Qb=function(e,t){return Math.abs(e.right-t)},Zb=function(e,t){return e>=t.left&&e<=t.right},eC=function(e,t){return e>=t.top&&e<=t.bottom},tC=function(e,t){return ye(e,(function(e,n){var r=Math.min(Jb(e,t),Qb(e,t)),o=Math.min(Jb(n,t),Qb(n,t))
return Zb(t,n)||!Zb(t,e)&&(o===r&&Yb(n.node)||o<r)?n:e}))},nC=function(e,t,n,r,o){var i=Gb(r,e,So,t,!o)
do{if(!i||n(i))return}while(i=Gb(i,e,So,t))},rC=function(e,t){e.selection.setRng(t),sd(e,e.selection.getRng())},oC=function(e,t,n){return x.some(my(e,t,n))},iC=function(e,t,n,r,o,i){var a=t===bs.Forwards,u=nl(e.getBody()),s=f(Hc,a?u.next:u.prev),c=a?r:o
if(!n.collapsed){var l=Ju(n)
if(i(l))return ly(t,e,l,t===bs.Backwards,!1)}var d=zc(t,e.getBody(),n)
if(c(d))return fy(e,d.getNode(!a))
var m=qv(a,s(d)),p=ro(n.startContainer)
if(!m)return p?x.some(n):x.none()
if(c(m))return ly(t,e,m.getNode(!a),a,!1)
var g=s(m)
return g&&c(g)&&Vc(m,g)?ly(t,e,g.getNode(!a),a,!1):p?oC(e,m.toRange(),!1):x.none()},aC=function(e,t,n,r,o,i){var a=zc(t,e.getBody(),n),u=Ce(a.getClientRects()),s=t===Ob.Down
if(!u)return x.none()
var c,l=(s?Wb:$b)(e.getBody(),Kb(1),a),f=q(l,Xb(1)),d=u.left,m=tC(f,d)
if(m&&i(m.node)){var p=Math.abs(d-m.left),g=Math.abs(d-m.right)
return ly(t,e,m.node,p<g,!1)}if(c=r(a)?a.getNode():o(a)?a.getNode(!0):Ju(n)){var h=function(e,t,n,r){var o,i,a,u,s=nl(t),c=[],l=0,f=function(e){return Ce(e.getClientRects())},d=1===e?(o=s.next,i=Yu,a=Xu,ws.after(r)):(o=s.prev,i=Xu,a=Yu,ws.before(r)),m=f(d)
do{if(d.isVisible()&&!a(u=f(d),m)){if(0<c.length&&i(u,Ce(c))&&l++,(u=$u(u)).position=d,u.line=l,n(u))return c
c.push(u)}}while(d=o(d))
return c}(t,e.getBody(),Kb(1),c),v=tC(q(h,Xb(1)),d)
if(v)return oC(e,v.position.toRange(),!1)
if(v=Ce(q(h,Xb(0))))return oC(e,v.position.toRange(),!1)}return 0===f.length?uC(e,s).filter(s?o:r).map((function(t){return my(e,t.toRange(),!1)})):x.none()},uC=function(e,t){var n=e.selection.getRng(),r=e.getBody()
if(t){var o=ws.fromRangeEnd(n),i=Ub(r,o)
return ee(i.positions)}return o=ws.fromRangeStart(n),i=Fb(r,o),Z(i.positions)},sC=function(e,t,n){return uC(e,t).filter(n).exists((function(t){return e.selection.setRng(t.toRange()),!0}))},cC=Fn,lC=function(e,t,n){var r,o,i=nl(e.getBody()),a=f(Hc,1===t?i.next:i.prev)
if(n.collapsed&&""!==Ws(e)){var u,s=e.dom.getParent(n.startContainer,"PRE")
if(!s)return
a(ws.fromRangeStart(n))||(o=(r=e).dom.create(Ws(r)),(!gt.ie||11<=gt.ie)&&(o.innerHTML='<br data-mce-bogus="1">'),u=o,1===t?e.$(s).after(u):e.$(s).before(u),e.selection.select(u,!0),e.selection.collapse())}},fC=function(e,t){return function(e,t){var n=t?bs.Forwards:bs.Backwards,r=e.selection.getRng()
return iC(e,n,r,hm,vm,cC).orThunk((function(){return lC(e,n,r),x.none()}))}(e,t).exists((function(t){return rC(e,t),!0}))},dC=function(e,t){return function(e,t){var n=t?1:-1,r=e.selection.getRng()
return aC(e,n,r,(function(e){return hm(e)||pm(e)}),(function(e){return vm(e)||gm(e)}),cC).orThunk((function(){return lC(e,n,r),x.none()}))}(e,t).exists((function(t){return rC(e,t),!0}))},mC=function(e,t){return sC(e,t,t?vm:hm)},pC=function(e){return U(["figcaption"],Ot(e))},gC=function(e){var t=document.createRange()
return t.setStartBefore(e.dom),t.setEndBefore(e.dom),t},hC=function(e,t,n){(n?an:on)(e,t)},vC=function(e,t){var n,r,o=Et(e.getBody()),i=ws.fromRangeStart(e.selection.getRng()),a=Ws(e),u=Ks(e)
return n=i,r=f(At,o),br(Et(n.container()),Hr,r).filter(pC).exists((function(){if(function(e,t,n){return t?(o=e.dom,Ub(o,n).breakAt.isNone()):(r=e.dom,Fb(r,n).breakAt.isNone())
var r,o}(o,t,i)){var n=function(e,t,n,r){return""===t?(c=e,l=r,f=St("br"),hC(c,f,l),gC(f)):(o=e,i=r,a=n,u=St(t),s=St("br"),qn(u,a),an(u,s),hC(o,u,i),gC(s))
var o,i,a,u,s,c,l,f}(o,a,u,t)
return e.selection.setRng(n),!0}return!1}))},yC=function(e,t){return!!e.selection.isCollapsed()&&vC(e,t)},bC=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){return e.apply(null,t)}},CC=function(e,t){return K(function(e,t){return Y(j(e,(function(e){return we({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:u},e)})),(function(e){return n=e,(r=t).keyCode===n.keyCode&&r.shiftKey===n.shiftKey&&r.altKey===n.altKey&&r.ctrlKey===n.ctrlKey&&r.metaKey===n.metaKey?[e]:[]
var n,r}))}(e,t),(function(e){return e.action()}))},wC=function(e,t){var n=t?bs.Forwards:bs.Backwards,r=e.selection.getRng()
return iC(e,n,r,dm,mm,zn).exists((function(t){return rC(e,t),!0}))},xC=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return aC(e,n,r,dm,mm,zn).exists((function(t){return rC(e,t),!0}))},SC=function(e,t){return sC(e,t,t?mm:dm)},NC=function(e,t,n,r,o){var i,a,u=Au(Et(n),"td,th,caption").map((function(e){return e.dom})),s=q(function(e,t){return Y(t,(function(t){var n,r,o=(r=-1,{left:(n=$u(t.getBoundingClientRect())).left-r,top:n.top-r,right:n.right+-2,bottom:n.bottom+-2,width:n.width+r,height:n.height+r})
return[{x:o.left,y:e(o),cell:t},{x:o.right,y:e(o),cell:t}]}))}(e,u),(function(e){return t(e,o)}))
return i=r,a=o,W(s,(function(e,t){return e.fold((function(){return x.some(t)}),(function(e){var n=Math.sqrt(Math.abs(e.x-i)+Math.abs(e.y-a)),r=Math.sqrt(Math.abs(t.x-i)+Math.abs(t.y-a))
return x.some(r<n?t:e)}))}),x.none()).map((function(e){return e.cell}))},EC=f(NC,(function(e){return e.bottom}),(function(e,t){return e.y<t})),kC=f(NC,(function(e){return e.top}),(function(e,t){return e.y>t})),_C=function(e,t,n){var r,o,i,a,u=e(t,n)
return(a=u).breakType===Rv.Wrap&&0===a.positions.length||!Ln(n.getNode())&&(i=u).breakType===Rv.Br&&1===i.positions.length?(r=e,o=t,!u.breakAt.exists((function(e){return r(o,e).breakAt.isSome()}))):u.breakAt.isNone()},RC=f(_C,Fb),AC=f(_C,Ub),TC=function(e,t,n,r){var o,i,a,u,s=e.selection.getRng(),c=t?1:-1
return!(!bc()||(o=t,i=s,a=n,u=ws.fromRangeStart(i),!cl(!o,a).exists((function(e){return e.isEqual(u)})))||(ly(c,e,n,!t,!1).each((function(t){rC(e,t)})),0))},OC=function(e,t,n){var r=function(e,t){var n=t.getNode(e)
return Sn(n)&&"TABLE"===n.nodeName?x.some(n):x.none()}(!!t,n),o=!1===t
r.fold((function(){return rC(e,n.toRange())}),(function(r){return cl(o,e.getBody()).filter((function(e){return e.isEqual(n)})).fold((function(){return rC(e,n.toRange())}),(function(o){return i=t,u=r,s=n,void((c=Ws(a=e))?a.undoManager.transact((function(){var e=St(c)
qn(e,Ks(a)),an(e,St("br")),(i?rn:nn)(Et(u),e)
var t=a.dom.createRng()
t.setStart(e.dom,0),t.setEnd(e.dom,0),rC(a,t)})):rC(a,s.toRange()))
var i,a,u,s,c}))}))},BC=function(e,t,n,r){var o,i,a,u,s,c,l=e.selection.getRng(),f=ws.fromRangeStart(l),d=e.getBody()
if(!t&&RC(r,f)){var m=(u=d,function(e,t){return Z(t.getClientRects()).bind((function(t){return EC(e,t.left,t.top)})).bind((function(e){return Mb(ml(n=e).map((function(e){return Fb(n,e).positions.concat(e)})).getOr([]),t)
var n}))}(s=n,c=f).orThunk((function(){return Z(c.getClientRects()).bind((function(e){return Ib(zb(u,ws.before(s)),e.left)}))})).getOr(ws.before(s)))
return OC(e,t,m),!0}return!(!t||!AC(r,f))&&(o=d,m=function(e,t){return ee(t.getClientRects()).bind((function(t){return kC(e,t.left,t.top)})).bind((function(e){return Mb(dl(n=e).map((function(e){return[e].concat(Ub(n,e).positions)})).getOr([]),t)
var n}))}(i=n,a=f).orThunk((function(){return Z(a.getClientRects()).bind((function(e){return Ib(jb(o,ws.after(i)),e.left)}))})).getOr(ws.after(i)),OC(e,t,m),!0)},PC=function(e,t,n){return x.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((function(r){return x.from(e.dom.getParent(r,"table")).map((function(o){return n(e,t,o,r)}))})).getOr(!1)},DC=function(e,t){return PC(e,t,TC)},LC=function(e,t){return PC(e,t,BC)},IC=function(e,t){var n,r,o=t,i=e.dom,a=e.schema.getMoveCaretBeforeOnEnterElements()
if(t){!/^(LI|DT|DD)$/.test(t.nodeName)||(r=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}(t.firstChild))&&/^(UL|OL|DL)$/.test(r.nodeName)&&t.insertBefore(i.doc.createTextNode(Jr),t.firstChild)
var u=i.createRng()
if(t.normalize(),t.hasChildNodes()){for(var s=new Fr(t,t);n=s.current();){if(On(n)){u.setStart(n,0),u.setEnd(n,0)
break}if(a[n.nodeName.toLowerCase()]){u.setStartBefore(n),u.setEndBefore(n)
break}o=n,n=s.next()}n||(u.setStart(o,0),u.setEnd(o,0))}else Ln(t)?t.nextSibling&&i.isBlock(t.nextSibling)?(u.setStartBefore(t),u.setEndBefore(t)):(u.setStartAfter(t),u.setEndAfter(t)):(u.setStart(t,0),u.setEnd(t,0))
e.selection.setRng(u),sd(e,u)}},MC=function(e){return x.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},FC=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},UC=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},zC=function(e){var t=e.parentNode
return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},jC=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!Sn(r);)r=r[n?"nextSibling":"previousSibling"]
return r===t},HC=function(e){e.innerHTML='<br data-mce-bogus="1">'},VC=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},qC=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},$C=function(e,t,n){return!1===On(t)?n:e?1===n&&t.data.charAt(n-1)===Qr?0:n:n===t.data.length-1&&t.data.charAt(n)===Qr?t.data.length:n},WC=function(e,t){for(var n,r=e.getRoot(),o=t;o!==r&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(n=o),o=o.parentNode
return o!==r?n:r},KC=function(e,t){var n=Ws(e)
n&&n.toLowerCase()===t.tagName.toLowerCase()&&function(e,t,n){var r=e.dom
x.from(n.style).map(r.parseStyle).each((function(e){var n=Gn(Et(t)),o=we(we({},n),e)
r.setStyles(t,o)}))
var o=x.from(n.class).map((function(e){return e.split(/\s+/)})),i=x.from(t.className).map((function(e){return q(e.split(/\s+/),(function(e){return""!==e}))}))
Vu(o,i,(function(e,n){var o=q(n,(function(t){return!U(e,t)})),i=xe(e,o)
r.setAttrib(t,"class",i.join(" "))}))
var a=["style","class"],u=le(n,(function(e,t){return!U(a,t)}))
r.setAttribs(t,u)}(e,t,Ks(e))},XC=function(e,t){var n,r,o,i,a,u,s,c,l,f=e.dom,d=e.schema,m=d.getNonEmptyElements(),p=e.selection.getRng(),g=function(t){var n,o=r,a=d.getTextInlineElements(),u=t||"TABLE"===c||"HR"===c?f.create(t||S):i.cloneNode(!1),s=u
if(!1===e.getParam("keep_styles",!0))f.setAttrib(u,"style",null),f.setAttrib(u,"class",null)
else do{if(a[o.nodeName]){if(gl(o)||Nl(o))continue
n=o.cloneNode(!1),f.setAttrib(n,"id",""),u.hasChildNodes()?n.appendChild(u.firstChild):s=n,u.appendChild(n)}}while((o=o.parentNode)&&o!==N)
return KC(e,u),HC(s),u},h=function(e){var t,n,a=$C(e,r,o)
if(On(r)&&(e?0<a:a<r.nodeValue.length))return!1
if(r.parentNode===i&&l&&!e)return!0
if(e&&Sn(r)&&r===i.firstChild)return!0
if(VC(r,"TABLE")||VC(r,"HR"))return l&&!e||!l&&e
var u=new Fr(r,i)
for(On(r)&&(e&&0===a?u.prev():e||a!==r.nodeValue.length||u.next());t=u.current();){if(Sn(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),m[n]&&"br"!==n))return!1}else if(On(t)&&!Eo(t.nodeValue))return!1
e?u.prev():u.next()}return!0},v=function(){a=/^(H[1-6]|PRE|FIGURE)$/.test(c)&&"HGROUP"!==C?g(S):g(),e.getParam("end_container_on_empty_block",!1)&&qC(f,s)&&f.isEmpty(i)?a=f.split(s,i):f.insertAfter(a,i),IC(e,a)}
Df(f,p).each((function(e){p.setStart(e.startContainer,e.startOffset),p.setEnd(e.endContainer,e.endOffset)})),r=p.startContainer,o=p.startOffset,S=Ws(e)
var y=!(!t||!t.shiftKey),b=!(!t||!t.ctrlKey)
Sn(r)&&r.hasChildNodes()&&(l=o>r.childNodes.length-1,r=r.childNodes[Math.min(o,r.childNodes.length-1)]||r,o=l&&On(r)?r.nodeValue.length:0)
var C,w,x,S,N=WC(f,r)
N&&((S&&!y||!S&&y)&&(r=function(e,t,n,r,o){var i,a,u,s,c,l,f=t||"P",d=e.dom,m=WC(d,r),p=d.getParent(r,d.isBlock)
if(!p||!qC(d,p)){if(c=(p=p||m)===e.getBody()||(l=p)&&/^(TD|TH|CAPTION)$/.test(l.nodeName)?p.nodeName.toLowerCase():p.parentNode.nodeName.toLowerCase(),!p.hasChildNodes())return i=d.create(f),KC(e,i),p.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i
for(u=r;u.parentNode!==p;)u=u.parentNode
for(;u&&!d.isBlock(u);)u=(a=u).previousSibling
if(a&&e.schema.isValidChild(c,f.toLowerCase())){for(i=d.create(f),KC(e,i),a.parentNode.insertBefore(i,a),u=a;u&&!d.isBlock(u);)s=u.nextSibling,i.appendChild(u),u=s
n.setStart(r,o),n.setEnd(r,o)}}return r}(e,S,p,r,o)),i=f.getParent(r,f.isBlock),s=i?f.getParent(i.parentNode,f.isBlock):null,c=i?i.nodeName.toUpperCase():"","LI"!==(C=s?s.nodeName.toUpperCase():"")||b||(s=(i=s).parentNode,c=C),/^(LI|DT|DD)$/.test(c)&&f.isEmpty(i)?function(e,t,n,r,o){var i,a,u,s,c,l=e.dom,f=e.selection.getRng()
n!==e.getBody()&&(UC(i=n)&&UC(i.parentNode)&&(o="LI"),a=o?t(o):l.create("BR"),jC(n,r,!0)&&jC(n,r,!1)?FC(n,"LI")?l.insertAfter(a,zC(n)):l.replace(a,n):jC(n,r,!0)?FC(n,"LI")?(l.insertAfter(a,zC(n)),a.appendChild(l.doc.createTextNode(" ")),a.appendChild(n)):n.parentNode.insertBefore(a,n):jC(n,r,!1)?l.insertAfter(a,zC(n)):(n=zC(n),(u=f.cloneRange()).setStartAfter(r),u.setEndAfter(n),s=u.extractContents(),"LI"===o&&(c=s).firstChild&&"LI"===c.firstChild.nodeName?(a=s.firstChild,l.insertAfter(s,n)):(l.insertAfter(s,n),l.insertAfter(a,n))),l.remove(r),IC(e,a))}(e,g,s,i,S):S&&i===e.getBody()||(S=S||"P",ro(i)?(a=fo(i),f.isEmpty(i)&&HC(i),KC(e,a),IC(e,a)):h()?v():h(!0)?(a=i.parentNode.insertBefore(g(),i),IC(e,VC(i,"HR")?a:i)):((x=(w=p).cloneRange()).setStart(w.startContainer,$C(!0,w.startContainer,w.startOffset)),x.setEnd(w.endContainer,$C(!1,w.endContainer,w.endOffset)),(n=x.cloneRange()).setEndAfter(i),u=n.extractContents(),H(Ru(Et(u),Lt),(function(e){var t=e.dom
t.nodeValue=eo(t.nodeValue)})),function(e){for(;On(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;);}(u),a=u.firstChild,f.insertAfter(u,i),function(e,t,n){var r,o,i,a=n,u=[]
if(a){for(;a=a.firstChild;){if(e.isBlock(a))return
Sn(a)&&!t[a.nodeName.toLowerCase()]&&u.push(a)}for(r=u.length;r--;)!(a=u[r]).hasChildNodes()||a.firstChild===a.lastChild&&""===a.firstChild.nodeValue?e.remove(a):(o=e,(i=a)&&"A"===i.nodeName&&o.isEmpty(i)&&e.remove(a))}}(f,m,a),function(e,t){t.normalize()
var n=t.lastChild
n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")}(f,i),f.isEmpty(i)&&HC(i),a.normalize(),f.isEmpty(a)?(f.remove(a),v()):(KC(e,a),IC(e,a))),f.setAttrib(a,"id",""),e.fire("NewBlock",{newBlock:a})))},YC=function(e,t,n){var r=e.create("span",{},"&nbsp;")
n.parentNode.insertBefore(r,n),t.scrollIntoView(r),e.remove(r)},GC=function(e,t,n,r){var o=e.createRng()
r?(o.setStartBefore(n),o.setEndBefore(n)):(o.setStartAfter(n),o.setEndAfter(n)),t.setRng(o)},JC=function(e,t){var n=St("br")
nn(Et(t),n),e.undoManager.add()},QC=function(e,t){ZC(e.getBody(),t)||rn(Et(t),St("br"))
var n=St("br")
rn(Et(t),n),YC(e.dom,e.selection,n.dom),GC(e.dom,e.selection,n.dom,!1),e.undoManager.add()},ZC=function(e,t){return n=ws.after(t),!!Ln(n.getNode())||ll(e,ws.after(t)).map((function(e){return Ln(e.getNode())})).getOr(!1)
var n},ew=function(e){return e&&"A"===e.nodeName&&"href"in e},tw=function(e){return e.fold(v,ew,ew,v)},nw=function(e,t){t.fold(u,f(JC,e),f(QC,e),u)},rw=function(e,t){var n,r,o,i=(r=f(Hv,n=e),o=ws.fromRangeStart(n.selection.getRng()),Wy(r,n.getBody(),o).filter(tw))
i.isSome()?i.each(f(nw,e)):function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng()
Df(i,a).each((function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)}))
var u,s=a.startOffset,c=a.startContainer
1===c.nodeType&&c.hasChildNodes()&&(u=s>c.childNodes.length-1,c=c.childNodes[Math.min(s,c.childNodes.length-1)]||c,s=u&&3===c.nodeType?c.nodeValue.length:0)
var l=i.getParent(c,i.isBlock),f=l?i.getParent(l.parentNode,i.isBlock):null,d=f?f.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey)
"LI"!==d||m||(l=f),c&&3===c.nodeType&&s>=c.nodeValue.length&&!function(e,t,n){for(var r,o=new Fr(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||0<r.length)return!0}(e.schema,c,l)&&(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0),n=i.create("br"),Ss(i,a,n),YC(i,o,n),GC(i,o,n,r),e.undoManager.add()}(e,t)},ow=function(e,t){return MC(e).filter((function(e){return 0<t.length&&_t(Et(e),t)})).isSome()},iw=fr([{br:[]},{block:[]},{none:[]}]),aw=function(e,t){return ow(n=e,n.getParam("no_newline_selector",""))
var n},uw=function(e){return function(t,n){return""===Ws(t)===e}},sw=function(e){return function(t,n){return MC(t).filter((function(e){return Kr(Et(e))})).isSome()===e}},cw=function(e,t){return function(n,r){return MC(n).fold(c(""),(function(e){return e.nodeName.toUpperCase()}))===e.toUpperCase()===t}},lw=function(e){return cw("pre",e)},fw=function(e){return function(t,n){return t.getParam("br_in_pre",!0)===e}},dw=function(e,t){return ow(n=e,n.getParam("br_newline_selector",".mce-toc h2,figcaption,caption"))
var n},mw=function(e,t){return t},pw=function(e){var t=Ws(e),n=function(e,t){for(var n,r=e.getRoot(),o=t;o!==r&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(n=o),o=o.parentNode
return o!==r?n:r}(e.dom,e.selection.getStart())
return n&&e.schema.isValidChild(n.nodeName,t||"P")},gw=function(e,t){return function(n,r){return W(e,(function(e,t){return e&&t(n,r)}),!0)?x.some(t):x.none()}},hw=function(e,t){(function(e,t){return Iy([gw([aw],iw.none()),gw([cw("summary",!0)],iw.br()),gw([lw(!0),fw(!1),mw],iw.br()),gw([lw(!0),fw(!1)],iw.block()),gw([lw(!0),fw(!0),mw],iw.block()),gw([lw(!0),fw(!0)],iw.br()),gw([sw(!0),mw],iw.br()),gw([sw(!0)],iw.block()),gw([uw(!0),mw,pw],iw.block()),gw([uw(!0)],iw.br()),gw([dw],iw.br()),gw([uw(!1),mw],iw.br()),gw([pw],iw.block())],[e,!(!t||!t.shiftKey)]).getOr(iw.none())})(e,t).fold((function(){rw(e,t)}),(function(){XC(e,t)}),u)},vw=at().browser,yw=function(e,t){var n=t.container(),r=t.offset()
return On(n)?(n.insertData(r,e),x.some(ys(n,r+e.length))):jc(t).map((function(n){var r=Nt(e)
return(t.isAtEnd()?rn:nn)(n,r),ys(r.dom,e.length)}))},bw=f(yw,Jr),Cw=f(yw," "),ww=function(e,t){return function(n){return r=e,(!zm(o=n)&&(function(e,t){return r=t,fl(e.dom,r).isNone()||(n=t,ll(e.dom,n).isNone())||km(e,t)||_m(e,t)||Pm(e,t)||Bm(e,t)
var n,r}(r,o)||Fm(r,o)||Um(r,o))?bw:Cw)(t)
var r,o}},xw=function(e){var t,n,r=ws.fromRangeStart(e.selection.getRng()),o=Et(e.getBody())
if(e.selection.isCollapsed()){var i=f(Hv,e),a=ws.fromRangeStart(e.selection.getRng())
return Wy(i,e.getBody(),a).bind((n=o,function(e){return e.fold((function(e){return fl(n.dom,ws.before(e))}),(function(e){return dl(e)}),(function(e){return ml(e)}),(function(e){return ll(n.dom,ws.after(e))}))})).bind(ww(o,r)).exists((t=e,function(e){return t.selection.setRng(e.toRange()),t.nodeChanged(),!0}))}return!1},Sw=function(e){var t,n=ub(e)
return(t=e).on("keyup compositionstart",f(Tb,t)),function(e,t){e.on("keydown",(function(n){var r,o,i,a
!1===n.isDefaultPrevented()&&(r=e,o=t,i=n,a=at().os,CC([{keyCode:Sf.RIGHT,action:bC(fC,r,!0)},{keyCode:Sf.LEFT,action:bC(fC,r,!1)},{keyCode:Sf.UP,action:bC(dC,r,!1)},{keyCode:Sf.DOWN,action:bC(dC,r,!0)},{keyCode:Sf.RIGHT,action:bC(DC,r,!0)},{keyCode:Sf.LEFT,action:bC(DC,r,!1)},{keyCode:Sf.UP,action:bC(LC,r,!1)},{keyCode:Sf.DOWN,action:bC(LC,r,!0)},{keyCode:Sf.RIGHT,action:bC(wC,r,!0)},{keyCode:Sf.LEFT,action:bC(wC,r,!1)},{keyCode:Sf.UP,action:bC(xC,r,!1)},{keyCode:Sf.DOWN,action:bC(xC,r,!0)},{keyCode:Sf.RIGHT,action:bC(ib,r,o,!0)},{keyCode:Sf.LEFT,action:bC(ib,r,o,!1)},{keyCode:Sf.RIGHT,ctrlKey:!a.isOSX(),altKey:a.isOSX(),action:bC(sb,r,o)},{keyCode:Sf.LEFT,ctrlKey:!a.isOSX(),altKey:a.isOSX(),action:bC(cb,r,o)},{keyCode:Sf.UP,action:bC(yC,r,!1)},{keyCode:Sf.DOWN,action:bC(yC,r,!0)}],i).each((function(e){i.preventDefault()})))}))}(e,n),function(e,t){e.on("keydown",(function(n){var r,o,i
!1===n.isDefaultPrevented()&&(r=e,o=t,i=n,CC([{keyCode:Sf.BACKSPACE,action:bC(Nb,r,!1)},{keyCode:Sf.BACKSPACE,action:bC(Ny,r,!1)},{keyCode:Sf.DELETE,action:bC(Ny,r,!0)},{keyCode:Sf.BACKSPACE,action:bC(vy,r,!1)},{keyCode:Sf.DELETE,action:bC(vy,r,!0)},{keyCode:Sf.BACKSPACE,action:bC(db,r,o,!1)},{keyCode:Sf.DELETE,action:bC(db,r,o,!0)},{keyCode:Sf.BACKSPACE,action:bC(Ap,r,!1)},{keyCode:Sf.DELETE,action:bC(Ap,r,!0)},{keyCode:Sf.BACKSPACE,action:bC(Ey,r,!1)},{keyCode:Sf.DELETE,action:bC(Ey,r,!0)},{keyCode:Sf.BACKSPACE,action:bC(vb,r,!1)},{keyCode:Sf.DELETE,action:bC(vb,r,!0)},{keyCode:Sf.BACKSPACE,action:bC(uy,r,!1)},{keyCode:Sf.DELETE,action:bC(uy,r,!0)},{keyCode:Sf.BACKSPACE,action:bC(oy,r,!1)},{keyCode:Sf.DELETE,action:bC(oy,r,!0)},{keyCode:Sf.BACKSPACE,action:bC(gb,r,!1)},{keyCode:Sf.DELETE,action:bC(gb,r,!0)}],i).each((function(e){i.preventDefault()})))})),e.on("keyup",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,CC([{keyCode:Sf.BACKSPACE,action:bC(Sy,n)},{keyCode:Sf.DELETE,action:bC(Sy,n)}],r))}))}(e,n),function(e){e.on("keydown",(function(t){var n,r,o
t.keyCode===Sf.ENTER&&(n=e,(r=t).isDefaultPrevented()||(r.preventDefault(),(o=n.undoManager).typing&&(o.typing=!1,o.add()),n.undoManager.transact((function(){!1===n.selection.isCollapsed()&&n.execCommand("Delete"),hw(n,r)}))))}))}(e),function(e){e.on("keydown",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,CC([{keyCode:Sf.SPACEBAR,action:bC(xw,n)}],r).each((function(e){r.preventDefault()})))}))}(e),function(e){var t,n
t=e,n=xu((function(){t.composing||Km(t)}),0),vw.isIE()&&(t.on("keypress",(function(e){n.throttle()})),t.on("remove",(function(e){n.cancel()}))),e.on("input",(function(t){!1===t.isComposing&&Km(e)}))}(e),function(e){e.on("keydown",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,CC([{keyCode:Sf.END,action:bC(mC,n,!0)},{keyCode:Sf.HOME,action:bC(mC,n,!1)},{keyCode:Sf.END,action:bC(SC,n,!0)},{keyCode:Sf.HOME,action:bC(SC,n,!1)}],r).each((function(e){r.preventDefault()})))}))}(e),n},Nw=(Ew.prototype.nodeChanged=function(e){var t,n,r,o=this.editor.selection
this.editor.initialized&&o&&!this.editor.getParam("disable_nodechange")&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),(t=o.getStart(!0)||r).ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(t,r)||(t=r),n=[],this.editor.dom.getParent(t,(function(e){return e===r||void n.push(e)})),(e=e||{}).element=t,e.parents=n,this.editor.fire("NodeChange",e))},Ew.prototype.isSameElementPath=function(e){var t,n=this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)
if(n.length===this.lastPath.length){for(t=n.length;0<=t&&n[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=n,!0}return this.lastPath=n,!1},Ew)
function Ew(e){var t
this.lastPath=[],this.editor=e
var n=this
"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(function(n){var r=e.selection.getRng(),o={startContainer:r.startContainer,startOffset:r.startOffset,endContainer:r.endContainer,endOffset:r.endOffset}
"nodechange"!==n.type&&Rf(o,t)||e.fire("SelectionChange"),t=o})),e.on("contextmenu",(function(){e.fire("SelectionChange")})),e.on("SelectionChange",(function(){var t=e.selection.getStart(!0)
!t||!gt.range&&e.selection.isCollapsed()||lf(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(function(t){!t.isDefaultPrevented()&&lf(e)&&("IMG"===e.selection.getNode().nodeName?Dr.setEditorTimeout(e,(function(){e.nodeChanged()})):e.nodeChanged())}))}var kw=function(e){return Sn(e)&&$r(Et(e))},_w=function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView
return{top:t.top+o.pageYOffset-r.clientTop,left:t.left+o.pageXOffset-r.clientLeft}},Rw=function(e,t){return n=(u=e).inline?_w(u.getBody()):{left:0,top:0},a=(i=e).getBody(),r=i.inline?{left:a.scrollLeft,top:a.scrollTop}:{left:0,top:0},{pageX:(o=function(e,t){if(t.target.ownerDocument===e.getDoc())return{left:t.pageX,top:t.pageY}
var n,r,o,i,a,u=_w(e.getContentAreaContainer()),s=(r=(n=e).getBody(),o=n.getDoc().documentElement,i={left:r.scrollLeft,top:r.scrollTop},a={left:r.scrollLeft||o.scrollLeft,top:r.scrollTop||o.scrollTop},n.inline?i:a)
return{left:t.pageX-u.left+s.left,top:t.pageY-u.top+s.top}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top}
var n,r,o,i,a,u},Aw=Fn,Tw=Mn,Ow=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},Bw=function(e){e.on((function(e){Ow(e.ghost)})),e.clear()},Pw=function(e){var t,n,r,o=(t=pu(x.none()),{clear:function(){return t.set(x.none())},set:function(e){return t.set(x.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}}),i=uu.DOM,a=document,u=function(e,t){return function(n){var r,o,i,a,u,s
0===n.button&&(r=K(t.dom.getParents(n.target),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0
return!1}}(Aw,Tw)).getOr(null),u=t.getBody(),Aw(s=r)&&s!==u&&(o=t.dom.getPos(r),i=t.getBody(),a=t.getDoc().documentElement,e.set({element:r,dragging:!1,screenX:n.screenX,screenY:n.screenY,maxX:(t.inline?i.scrollWidth:a.offsetWidth)-2,maxY:(t.inline?i.scrollHeight:a.offsetHeight)-2,relX:n.pageX-o.x,relY:n.pageY-o.y,width:r.offsetWidth,height:r.offsetHeight,ghost:function(e,t,n,r){var o=e.dom,i=t.cloneNode(!0)
o.setStyles(i,{width:n,height:r}),o.setAttrib(i,"data-mce-selected",null)
var a=o.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
return o.setStyles(a,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),o.setStyles(i,{margin:0,boxSizing:"border-box"}),a.appendChild(i),a}(t,r,r.offsetWidth,r.offsetHeight)})))}}(o,e),s=function(e,t){var n=Dr.throttle((function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0)
return function(r){return e.on((function(e){var o,i,a,u,s,c,l,f,d,m,p,g,h,v=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY))
if(!e.dragging&&10<v){if(t.fire("dragstart",{target:e.element}).isDefaultPrevented())return
e.dragging=!0,t.focus()}e.dragging&&(g=e,o={pageX:(h=Rw(t,r)).pageX-g.relX,pageY:h.pageY+5},m=e.ghost,p=t.getBody(),m.parentNode!==p&&p.appendChild(m),i=e.ghost,a=o,u=e.width,s=e.height,c=e.maxX,l=e.maxY,d=f=0,i.style.left=a.pageX+"px",i.style.top=a.pageY+"px",a.pageX+u>c&&(f=a.pageX+u-c),a.pageY+s>l&&(d=a.pageY+s-l),i.style.width=u-f+"px",i.style.height=s-d+"px",n(r.clientX,r.clientY))}))}}(o,e),c=function(e,t){return function(n){e.on((function(e){var r,o,i,a,u,s
e.dragging&&((a=3===(s=(i=t).selection.getSel().getRangeAt(0).startContainer).nodeType?s.parentNode:s)===(u=e.element)||i.dom.isChildOf(a,u)||Aw(a)||((o=e.element.cloneNode(!0)).removeAttribute("data-mce-selected"),r=o,t.fire("drop",{clientX:n.clientX,clientY:n.clientY}).isDefaultPrevented()||t.undoManager.transact((function(){Ow(e.element),t.insertContent(t.dom.getOuterHTML(r)),t._selectionOverrides.hideFakeCaret()}))))})),Bw(e)}}(o,e),l=(n=o,function(){n.on((function(e){e.dragging&&r.fire("dragend")})),Bw(n)});(r=e).on("mousedown",u),e.on("mousemove",s),e.on("mouseup",c),i.bind(a,"mousemove",s),i.bind(a,"mouseup",l),e.on("remove",(function(){i.unbind(a,"mousemove",s),i.unbind(a,"mouseup",l)}))},Dw=Mn,Lw=Fn,Iw=function(e,t){return wf(e.getBody(),t)},Mw=function(e){var t,n=e.selection,r=e.dom,o=r.isBlock,i=e.getBody(),a=yc(e,i,o,(function(){return Bd(e)})),u="sel-"+r.uniqueId(),s="data-mce-selected",c=function(e){return Lw(e)||zn(e)},l=function(e){e&&n.setRng(e)},d=n.getRng,m=function(t,r,o,i){return void 0===i&&(i=!0),e.fire("ShowCaret",{target:r,direction:t,before:o}).isDefaultPrevented()?null:(i&&n.scrollIntoView(r,-1===t),a.show(o,r))},p=function(e){return io(e)||co(e)||lo(e)},g=function(e){return p(e.startContainer)||p(e.endContainer)},h=function(o){var i=o.cloneNode(!0),a=e.fire("ObjectSelected",{target:o,targetClone:i})
if(a.isDefaultPrevented())return null
var c=function(t,o,i){var a=e.$,s=wr(Et(e.getBody()),"#"+u).fold((function(){return a([])}),(function(e){return a([e.dom])}))
0===s.length&&(s=a('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",u)).appendTo(e.getBody())
var c=r.createRng()
o===i&&gt.ie?(s.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(o),c.setStartAfter(s[0].firstChild.firstChild),c.setEndAfter(o)):(s.empty().append(Jr).append(o).append(Jr),c.setStart(s[0].firstChild,1),c.setEnd(s[0].lastChild,0)),s.css({top:r.getPos(t,e.getBody()).y}),s[0].focus()
var l=n.getSel()
return l.removeAllRanges(),l.addRange(c),c}(o,a.targetClone,i),l=Et(o)
return H(Au(Et(e.getBody()),"*[data-mce-selected]"),(function(e){At(l,e)||Wn(e,s)})),r.getAttrib(o,s)||o.setAttribute(s,"1"),t=o,b(),c},v=function(e,t){if(!e)return null
if(e.collapsed){if(!g(e)){var n=t?1:-1,o=zc(n,i,e),a=o.getNode(!t)
if(wc(a))return m(n,a,!!t&&!o.isAtEnd(),!1)
var u=o.getNode(t)
if(wc(u))return m(n,u,!t&&!o.isAtEnd(),!1)}return null}var s=e.startContainer,l=e.startOffset,f=e.endOffset
if(3===s.nodeType&&0===l&&Lw(s.parentNode)&&(s=s.parentNode,l=r.nodeIndex(s),s=s.parentNode),1!==s.nodeType)return null
if(f===l+1&&s===e.endContainer){var d=s.childNodes[l]
if(c(d))return h(d)}return null},y=function(){t&&t.removeAttribute(s),wr(Et(e.getBody()),"#"+u).each(cn),t=null},b=function(){a.hide()}
return gt.ceFalse&&function(){e.on("mouseup",(function(t){var n=d()
n.collapsed&&fv(e,t.clientX,t.clientY)&&dy(e,n,!1).each(l)})),e.on("click",(function(t){var o=Iw(e,t.target)
o&&(Lw(o)&&(t.preventDefault(),e.focus()),Dw(o)&&r.isChildOf(o,n.getNode())&&y())})),e.on("blur NewBlock",y),e.on("ResizeWindow FullscreenStateChanged",a.reposition)
var s,p,h,C=function(t,n){var i,a,u=r.getParent(t,o),s=r.getParent(n,o)
return!(!u||t===s||!r.isChildOf(u,s)||!1!==Lw(Iw(e,u)))||u&&(i=u,a=s,!(r.getParent(i,o)===r.getParent(a,o)))&&function(e){var t=nl(e)
if(!e.firstChild)return!1
var n,r=ws.before(e.firstChild),o=t.next(r)
return o&&!(hm(n=o)||vm(n)||dm(n)||mm(n))}(u)}
e.on("tap",(function(t){var n=t.target,r=Iw(e,n)
Lw(r)?(t.preventDefault(),fy(e,r).each(v)):c(n)&&fy(e,n).each(v)}),!0),e.on("mousedown",(function(t){var o,a,u,s=t.target
s!==i&&"HTML"!==s.nodeName&&!r.isChildOf(s,i)||!1===fv(e,t.clientX,t.clientY)||((o=Iw(e,s))?Lw(o)?(t.preventDefault(),fy(e,o).each(v)):(y(),Dw(o)&&t.shiftKey||xf(t.clientX,t.clientY,n.getRng())||(b(),n.placeCaretAt(t.clientX,t.clientY))):c(s)?fy(e,s).each(v):!1===wc(s)&&(y(),b(),(a=function(e,t,n){var r,o,i=Vb(q(te(e.getElementsByTagName("*")),wc)),a=q(i,f(eC,n))
if(u=tC(a,t)){var u,s=!Rn(u.node)&&!zn(u.node)
if((u=tC(function(e,t,n){void 0===n&&(n=!0)
var r=[],o=function(e,n){var o=q(Vb([n]),(function(n){return!e(n,t)}))
return r=r.concat(o),0===o.length}
return r.push(t),nC(Ob.Up,e,f(o,Xu),t.node,n),nC(Ob.Down,e,f(o,Yu),t.node,n),r}(e,u,s),t))&&wc(u.node))return o=t,{node:(r=u).node,before:Jb(r,o)<Qb(r,o)}}return null}(i,t.clientX,t.clientY))&&(C(s,a.node)||(t.preventDefault(),u=m(1,a.node,a.before,!1),e.getBody().focus(),l(u)))))})),e.on("keypress",(function(e){Sf.modifierPressed(e)||Lw(n.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(function(e){var n=e.range
if(t){if(!t.parentNode)return void(t=null);(n=n.cloneRange()).selectNode(t),e.range=n}})),e.on("SetSelectionRange",(function(t){t.range=function(t){var n=e.schema.getShortEndedElements(),o=r.createRng(),i=t.startContainer,a=t.startOffset,u=t.endContainer,s=t.endOffset
return de(n,i.nodeName.toLowerCase())?0===a?o.setStartBefore(i):o.setStartAfter(i):o.setStart(i,a),de(n,u.nodeName.toLowerCase())?0===s?o.setEndBefore(u):o.setEndAfter(u):o.setEnd(u,s),o}(t.range)
var n=v(t.range,t.forward)
n&&(t.range=n)})),e.on("AfterSetSelectionRange",(function(e){var t,n=e.range,o=n.startContainer.parentNode
g(n)||"mcepastebin"===o.id||b(),t=o,r.hasClass(t,"mce-offscreen-selection")||y()})),e.on("copy",(function(e){var t,n,o=e.clipboardData
e.isDefaultPrevented()||!e.clipboardData||gt.ie||(t=(n=r.get(u))?n.getElementsByTagName("*")[0]:n)&&(e.preventDefault(),o.clearData(),o.setData("text/html",t.outerHTML),o.setData("text/plain",t.outerText||t.innerText))})),function(e){var t,n,r,o,i
Pw(e),(t=e).on("drop",(function(e){var n=void 0!==e.clientX?t.getDoc().elementFromPoint(e.clientX,e.clientY):null
!Aw(n)&&"false"!==t.dom.getContentEditableParent(n)||e.preventDefault()})),e.getParam("block_unsupported_drop",!0,"boolean")&&(r=function(e){var t
e.defaultPrevented||(t=e.dataTransfer)&&(U(t.types,"Files")||0<t.files.length)&&(e.preventDefault(),"drop"===e.type&&vv(n,"Dropped file type is not supported"))},o=function(e){_d(n,e.target)&&r(e)},i=function(){var e=uu.DOM,t=n.dom,i=document,a=n.inline?n.getBody():n.getDoc(),u=["drop","dragover"]
H(u,(function(n){e.bind(i,n,o),t.bind(a,n,r)})),n.on("remove",(function(){H(u,(function(n){e.unbind(i,n,o),t.unbind(a,n,r)}))}))},(n=e).on("init",(function(){Dr.setEditorTimeout(n,i,0)})))}(e),p=xu((function(){var e,t
s.removed||!s.getBody().contains(document.activeElement)||(e=s.selection.getRng()).collapsed&&(t=my(s,e,!1),s.selection.setRng(t))}),0),(s=e).on("focus",(function(){p.throttle()})),s.on("blur",(function(){p.cancel()})),(h=e).on("init",(function(){h.on("focusin",(function(e){var t,n,r=e.target
zn(r)&&(t=wf(h.getBody(),r),n=Fn(t)?t:r,h.selection.getNode()!==n&&fy(h,n).each((function(e){return h.selection.setRng(e)})))}))}))}(),{showCaret:m,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(fo(e),l(d()),n.scrollIntoView(e))},hideFakeCaret:b,destroy:function(){a.destroy(),t=null}}},Fw=uu.DOM,Uw=function(e){return le(e,(function(e){return!1===O(e)}))},zw=function(e){var t,n=e.settings,r=e.editorUpload.blobCache
return Uw({allow_conditional_comments:n.allow_conditional_comments,allow_html_data_urls:n.allow_html_data_urls,allow_html_in_named_anchor:n.allow_html_in_named_anchor,allow_script_urls:n.allow_script_urls,allow_unsafe_link_target:n.allow_unsafe_link_target,convert_fonts_to_spans:n.convert_fonts_to_spans,fix_list_elements:n.fix_list_elements,font_size_legacy_values:n.font_size_legacy_values,forced_root_block:n.forced_root_block,forced_root_block_attrs:n.forced_root_block_attrs,padd_empty_with_br:n.padd_empty_with_br,preserve_cdata:n.preserve_cdata,remove_trailing_brs:n.remove_trailing_brs,inline_styles:n.inline_styles,root_name:(t=e).inline?t.getElement().nodeName.toLowerCase():void 0,validate:!0,blob_cache:r,images_dataimg_filter:n.images_dataimg_filter})},jw=function(e){var t
e.bindPendingEventDelegates(),e.initialized=!0,e.fire("Init"),e.focus(!0),function(e){var t=e.dom.getRoot()
e.inline||lf(e)&&e.selection.getStart(!0)!==t||dl(t).each((function(t){var n,r,o,i,a=t.getNode(),u=Rn(a)?dl(a).getOr(t):t
gt.browser.isIE()?(n=e,r=u.toRange(),o=Et(n.getBody()),i=(bd(n)?x.from(r):x.none()).map(Cd).filter(yd(o)),n.bookmark=i.isSome()?i:n.bookmark):e.selection.setRng(u.toRange())}))}(e),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),(t=e).settings.auto_focus&&Dr.setEditorTimeout(t,(function(){var e=!0===t.settings.auto_focus?t:t.editorManager.get(t.settings.auto_focus)
e.destroyed||e.focus()}),100)},Hw=function(e,t){var n=e.settings,r=e.getDoc(),o=e.getBody()
n.browser_spellcheck||n.gecko_spellcheck||(r.body.spellcheck=!1,Fw.setAttrib(o,"spellcheck","false")),e.quirks=function(e){var t,n,r,o=Ct.each,i=Sf.BACKSPACE,a=Sf.DELETE,u=e.dom,s=e.selection,c=e.parser,l=gt.gecko,f=gt.ie,d=gt.webkit,m="data:text/mce-internal,",p=f?"Text":"URL",g=function(t,r){try{e.getDoc().execCommand(t,!1,r)}catch(n){}},h=function(e){return e.isDefaultPrevented()},v=function(){e.shortcuts.add("meta+a",null,"SelectAll")},y=function(){e.on("keydown",(function(e){if(!h(e)&&e.keyCode===i&&s.isCollapsed()&&0===s.getRng().startOffset){var t=s.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))},b=function(){e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(function(t){var n
if("HTML"===t.target.nodeName){if(11<gt.ie)return void e.getBody().focus()
n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged()}})))}
return e.on("keydown",(function(t){var n
if(!h(t)&&t.keyCode===Sf.BACKSPACE){var r=(n=s.getRng()).startContainer,o=n.startOffset,i=u.getRoot(),a=r
if(n.collapsed&&0===o){for(;a&&a.parentNode&&a.parentNode.firstChild===a&&a.parentNode!==i;)a=a.parentNode
"BLOCKQUOTE"===a.tagName&&(e.formatter.toggle("blockquote",null,a),(n=u.createRng()).setStart(r,0),n.setEnd(r,0),s.setRng(n))}}})),t=function(e){var t=u.create("body"),n=e.cloneContents()
return t.appendChild(n),s.serializer.serialize(t,{format:"html"})},e.on("keydown",(function(n){var r,o,s,c,l,f=n.keyCode
if(!h(n)&&(f===a||f===i)){if(r=e.selection.isCollapsed(),o=e.getBody(),r&&!u.isEmpty(o))return
if(!r&&(s=e.selection.getRng(),c=t(s),(l=u.createRng()).selectNode(e.getBody()),c!==t(l)))return
n.preventDefault(),e.setContent(""),o.firstChild&&u.isBlock(o.firstChild)?e.selection.setCursorLocation(o.firstChild,0):e.selection.setCursorLocation(o,0),e.nodeChanged()}})),gt.windowsPhone||e.on("keyup focusin mouseup",(function(e){Sf.modifierPressed(e)||s.normalize()}),!0),d&&(e.inline||u.bind(e.getDoc(),"mousedown mouseup",(function(t){var n
if(t.target===e.getDoc().documentElement)if(n=s.getRng(),e.getBody().focus(),"mousedown"===t.type){if(io(n.startContainer))return
s.placeCaretAt(t.clientX,t.clientY)}else s.setRng(n)})),e.on("click",(function(t){var n=t.target;/^(IMG|HR)$/.test(n.nodeName)&&"false"!==u.getContentEditableParent(n)&&(t.preventDefault(),e.selection.select(n),e.nodeChanged()),"A"===n.nodeName&&u.hasClass(n,"mce-item-anchor")&&(t.preventDefault(),s.select(n))})),Ws(e)&&e.on("init",(function(){g("DefaultParagraphSeparator",Ws(e))})),e.on("init",(function(){e.dom.bind(e.getBody(),"submit",(function(e){e.preventDefault()}))})),y(),c.addNodeFilter("br",(function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),gt.iOS?(e.inline||e.on("keydown",(function(){document.activeElement===document.body&&e.getWin().focus()})),b(),e.on("click",(function(e){var t=e.target
do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):v()),11<=gt.ie&&(b(),y()),gt.ie&&(v(),g("AutoUrlDetect",!1),e.on("dragstart",(function(t){var n,r,o;(n=t).dataTransfer&&(e.selection.isCollapsed()&&"IMG"===n.target.tagName&&s.select(n.target),0<(r=e.selection.getContent()).length&&(o=m+escape(e.id)+","+escape(r),n.dataTransfer.setData(p,o)))})),e.on("drop",(function(t){var n,r,o,i,a
h(t)||(n=(i=t).dataTransfer&&(a=i.dataTransfer.getData(p))&&0<=a.indexOf(m)?(a=a.substr(m.length).split(","),{id:unescape(a[0]),html:unescape(a[1])}):null)&&n.id!==e.id&&(t.preventDefault(),r=_f(t.x,t.y,e.getDoc()),s.setRng(r),o=n.html,e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",!1,{content:o,internal:!0}):e.execCommand("mceInsertContent",!1,o))}))),l&&(e.on("keydown",(function(t){if(!h(t)&&t.keyCode===i){if(!e.getBody().getElementsByTagName("hr").length)return
if(s.isCollapsed()&&0===s.getRng().startOffset){var n=s.getNode(),r=n.previousSibling
if("HR"===n.nodeName)return u.remove(n),void t.preventDefault()
r&&r.nodeName&&"hr"===r.nodeName.toLowerCase()&&(u.remove(r),t.preventDefault())}}})),Range.prototype.getClientRects||e.on("mousedown",(function(t){var n
h(t)||"HTML"!==t.target.nodeName||((n=e.getBody()).blur(),Dr.setEditorTimeout(e,(function(){n.focus()})))})),n=function(){var t=u.getAttribs(s.getStart().cloneNode(!1))
return function(){var n=s.getStart()
n!==e.getBody()&&(u.setAttrib(n,"style",null),o(t,(function(e){n.setAttributeNode(e.cloneNode(!0))})))}},r=function(){return!s.isCollapsed()&&u.getParent(s.getStart(),u.isBlock)!==u.getParent(s.getEnd(),u.isBlock)},e.on("keypress",(function(t){var o
if(!h(t)&&(8===t.keyCode||46===t.keyCode)&&r())return o=n(),e.getDoc().execCommand("delete",!1,null),o(),t.preventDefault(),!1})),u.bind(e.getDoc(),"cut",(function(t){var o
!h(t)&&r()&&(o=n(),Dr.setEditorTimeout(e,(function(){o()})))})),e.getParam("readonly")||e.on("BeforeExecCommand mousedown",(function(){g("StyleWithCSS",!1),g("enableInlineTableEditing",!1),Zs(e)||g("enableObjectResizing",!1)})),e.on("SetContent ExecCommand",(function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(u.select("a"),(function(e){var t=e.parentNode,n=u.getRoot()
if(t.lastChild===e){for(;t&&!u.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return
t=t.parentNode}u.add(t,"br",{"data-mce-bogus":1})}}))})),e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),gt.mac&&e.on("keydown",(function(t){!Sf.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))})),y()),{refreshContentEditable:function(){},isHidden:function(){if(!l||e.removed)return!1
var t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}}}(e),e.fire("PostRender")
var i,a,u,s,c,l,f,d,m,p,g,h=e.getParam("directionality",yu.isRtl()?"rtl":void 0)
void 0!==h&&(o.dir=h),n.protect&&e.on("BeforeSetContent",(function(e){Ct.each(n.protect,(function(t){e.content=e.content.replace(t,(function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"}))}))})),e.on("SetContent",(function(){e.addVisual(e.getBody())})),!1===t&&e.load({initial:!0,format:"html"}),e.startContent=e.getContent({format:"raw"}),e.on("compositionstart compositionend",(function(t){e.composing="compositionstart"===t.type})),0<e.contentStyles.length&&(i="",Ct.each(e.contentStyles,(function(e){i+=e+"\r\n"})),e.dom.addStyle(i)),u=(a=e).contentCSS,l=function(){a.on("remove",(function(){return c.unloadAll(u)})),jw(a)},(c=(s=a).inline?s.ui.styleSheetLoader:s.dom.styleSheetLoader).loadAll(u,l,l),n.content_style&&(f=e,d=n.content_style,m=Et(f.getBody()),p=en(Zt(m)),g=St("style"),Vn(g,"type","text/css"),an(g,Nt(d)),an(p,g),f.on("remove",(function(){cn(g)})))},Vw=function(e,t){var n=e.settings,r=e.getElement(),o=e.getDoc()
n.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline||(o.open(),o.write(e.iframeHTML),o.close()),e.inline&&(Fw.addClass(r,"mce-content-body"),e.contentDocument=o=document,e.contentWindow=window,e.bodyElement=r,e.contentAreaContainer=r)
var i,a,u,s,c=e.getBody()
c.disabled=!0,e.readonly=!!n.readonly,e.readonly||(e.inline&&"static"===Fw.getStyle(c,"position",!0)&&(c.style.position="relative"),c.contentEditable=e.getParam("content_editable_state",!0)),c.disabled=!1,e.editorUpload=Ev(e),e.schema=ri(n),e.dom=uu(o,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,hex_colors:n.force_hex_style_colors,update_styles:!0,root_element:e.inline?e.getBody():null,collect:function(){return e.inline},schema:e.schema,contentCssCors:e.getParam("content_css_cors",!1,"boolean"),referrerPolicy:Gs(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}}),e.parser=((a=Fh(zw(i=e),i.schema)).addAttributeFilter("src,href,style,tabindex",(function(e,t){for(var n,r,o=e.length,a=i.dom,u="data-mce-"+t;o--;)if((r=(n=e[o]).attr(t))&&!n.attr(u)){if(0===r.indexOf("data:")||0===r.indexOf("blob:"))continue
"style"===t?((r=a.serializeStyle(a.parseStyle(r),n.name)).length||(r=null),n.attr(u,r),n.attr(t,r)):"tabindex"===t?(n.attr(u,r),n.attr(t,null)):n.attr(u,i.convertURL(r,t,n.name))}})),a.addNodeFilter("script",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("type")||"no/type"
0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}})),i.settings.preserve_cdata&&a.addNodeFilter("#cdata",(function(e){for(var t=e.length;t--;){var n=e[t]
n.type=8,n.name="#comment",n.value="[CDATA["+i.dom.encode(n.value)+"]]"}})),a.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(function(e){for(var t=e.length,n=i.schema.getNonEmptyElements();t--;){var r=e[t]
r.isEmpty(n)&&0===r.getAll("br").length&&(r.append(new Vd("br",1)).shortEnded=!0)}})),a),e.serializer=jh((s=(u=e).settings,we(we({},zw(u)),Uw({url_converter:s.url_converter,url_converter_scope:s.url_converter_scope,element_format:s.element_format,entities:s.entities,entity_encoding:s.entity_encoding,indent:s.indent,indent_after:s.indent_after,indent_before:s.indent_before,block_elements:s.block_elements,boolean_attributes:s.boolean_attributes,custom_elements:s.custom_elements,extended_valid_elements:s.extended_valid_elements,invalid_elements:s.invalid_elements,invalid_styles:s.invalid_styles,move_caret_before_on_enter_elements:s.move_caret_before_on_enter_elements,non_empty_elements:s.non_empty_elements,schema:s.schema,self_closing_elements:s.self_closing_elements,short_ended_elements:s.short_ended_elements,special:s.special,text_block_elements:s.text_block_elements,text_inline_elements:s.text_inline_elements,valid_children:s.valid_children,valid_classes:s.valid_classes,valid_elements:s.valid_elements,valid_styles:s.valid_styles,verify_html:s.verify_html,whitespace_elements:s.whitespace_elements}))),e),e.selection=Ch(e.dom,e.getWin(),e.serializer,e),e.annotator=vf(e),e.formatter=Lv(e),e.undoManager=Iv(e),e._nodeChangeDispatcher=new Nw(e),e._selectionOverrides=Mw(e),function(e){var t=pu(x.none()),n=pu(!1),r=Su((function(t){e.fire("longpress",we(we({},t),{type:"longpress"})),n.set(!0)}),400)
e.on("touchstart",(function(e){kb(e).each((function(o){r.cancel()
var i={x:o.clientX,y:o.clientY,target:e.target}
r.throttle(e),n.set(!1),t.set(x.some(i))}))}),!0),e.on("touchmove",(function(o){r.cancel(),kb(o).each((function(r){t.get().each((function(o){var i,a,u,s
i=r,a=o,u=Math.abs(i.clientX-a.x),s=Math.abs(i.clientY-a.y),(5<u||5<s)&&(t.set(x.none()),n.set(!1),e.fire("longpresscancel"))}))}))}),!0),e.on("touchend touchcancel",(function(o){r.cancel(),"touchcancel"!==o.type&&t.get().filter((function(e){return e.target.isEqualNode(o.target)})).each((function(){n.get()?o.preventDefault():e.fire("tap",we(we({},o),{type:"tap"}))}))}),!0)}(e),function(e){var t,n;(t=e).on("click",(function(e){t.dom.getParent(e.target,"details")&&e.preventDefault()})),(n=e).parser.addNodeFilter("details",(function(e){H(e,(function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),n.serializer.addNodeFilter("details",(function(e){H(e,(function(e){var t=e.attr("data-mce-open")
e.attr("open",k(t)?t:null),e.attr("data-mce-open",null)}))}))}(e),dh(e)||function(e){e.on("click",(function(t){var n,r,o,i,a
3<=t.detail&&(o=(n=e).selection.getRng(),i=ys.fromRangeStart(o),a=ys.fromRangeEnd(o),ys.isElementPosition(i)&&(r=i.container(),kw(r)&&dl(r).each((function(e){return o.setStart(e.container(),e.offset())}))),ys.isElementPosition(a)&&(r=i.container(),kw(r)&&ml(r).each((function(e){return o.setEnd(e.container(),e.offset())}))),n.selection.setRng(Tp(o)))}))}(e)
var l,d,m,p,g=dh(l=e)?pu(null):Sw(l);(function(e,t){e.addCommand("delete",(function(){var n,r
r=t,Nb(n=e)||Ny(n,!1)||vy(n,!1)||db(n,r,!1)||oy(n,!1)||Ap(n)||Ey(n,!1)||vb(n,!1)||uy(n)||gb(n,!1)||(Eb(n,"Delete"),Xv(n))})),e.addCommand("forwardDelete",(function(){var n,r
r=t,Ny(n=e,!0)||vy(n,!0)||db(n,r,!0)||oy(n,!0)||Ap(n)||Ey(n,!0)||vb(n,!0)||uy(n)||gb(n,!0)||Eb(n,"ForwardDelete")}))})(e,g),Ws(d=e)&&d.on("NodeChange",f(Rb,d)),function(e){var t,n=e.dom,r=Ws(e),o=(t=e).getParam("placeholder",Vs.getAttrib(t.getElement(),"placeholder"),"string"),i=function(t,a){var u,s,c,l
!function(e){if(Uv(e)){var t=e.keyCode
return!zv(e)&&(Sf.metaKeyPressed(e)||e.altKey||112<=t&&t<=123||U(Mv,t))}return!1}(t)&&(u=e.getBody(),s=!(Uv(c=t)&&!(zv(c)||"keyup"===c.type&&229===c.keyCode))&&function(e,t,n){if(To(Et(t),!1)){var r=""===n,o=t.firstElementChild
return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&(r?!e.isBlock(o):n===o.nodeName.toLowerCase())}return!1}(n,u,r),""!==n.getAttrib(u,Fv)===s&&!a||(n.setAttrib(u,Fv,s?o:null),n.setAttrib(u,"aria-placeholder",s?o:null),l=s,e.fire("PlaceholderToggle",{state:l}),e.on(s?"keydown":"keyup",i),e.off(s?"keyup":"keydown",i)))}
o&&e.on("init",(function(t){i(t,!0),e.on("change SetContent ExecCommand",i),e.on("paste",(function(t){return Dr.setEditorTimeout(e,(function(){return i(t)}))}))}))}(e),e.fire("PreInit"),fe((p=m=e).plugins,"rtc").fold((function(){return p.rtcInstance=lh(m),x.none()}),(function(e){return x.some(e.setup().then((function(e){return p.rtcInstance=fh(m,e),e.isRemote})))})).fold((function(){Hw(e,!1)}),(function(t){e.setProgressState(!0),t.then((function(t){e.setProgressState(!1),Hw(e,t)}))}))},qw=uu.DOM,$w=function(e,t){var n,r,o,i,a=e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),u=(n=e.id,r=a,t.height,o=e.getParam("iframe_attrs",{}),i=St("iframe"),qn(i,o),qn(i,{id:n+"_ifr",frameBorder:"0",allowTransparency:"true",title:r}),ku(i,"tox-edit-area__iframe"),i.dom)
u.onload=function(){u.onload=null,e.fire("load")}
var s=function(e,t){if(document.domain!==window.location.hostname&&gt.browser.isIE()){var n=Nv("mce")
e[n]=function(){Vw(e)}
var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()"
return qw.setAttrib(t,"src",r),!0}return!1}(e,u)
return e.contentAreaContainer=t.iframeContainer,e.iframeElement=u,e.iframeHTML=function(e){var t=e.getParam("doctype","<!DOCTYPE html>")+"<html><head>"
e.getParam("document_base_url","")!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
var n=qs(e,"body_id","tinymce"),r=qs(e,"body_class","")
return $s(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+$s(e)+'" />'),t+'</head><body id="'+n+'" class="mce-content-body '+r+'" data-id="'+e.id+'"><br></body></html>'}(e),qw.add(t.iframeContainer,u),s},Ww=uu.DOM,Kw=function(e,t,n){var r=mv.get(n),o=mv.urls[n]||e.documentBaseUrl.replace(/\/$/,"")
if(n=Ct.trim(n),r&&-1===Ct.inArray(t,n)){if(Ct.each(mv.dependencies(n),(function(n){Kw(e,t,n)})),e.plugins[n])return
try{var i=new r(e,o,e.$);(e.plugins[n]=i).init&&(i.init(e,o),t.push(n))}catch(qS){!function(e,t,n){var r=yu.translate(["Failed to initialize plugin: {0}",t])
wv(r,n),vv(e,r)}(e,n,qS)}}},Xw=function(e){return e.replace(/^\-/,"")},Yw=function(e){return{editorContainer:e,iframeContainer:e,api:{}}},Gw=function(e){var t,n,r,o=e.getElement()
return e.orgDisplay=o.style.display,k(tc(e))?e.theme.renderUI():P(tc(e))?(n=(t=e).getElement(),(r=tc(t)(t,n)).editorContainer.nodeType&&(r.editorContainer.id=r.editorContainer.id||t.id+"_parent"),r.iframeContainer&&r.iframeContainer.nodeType&&(r.iframeContainer.id=r.iframeContainer.id||t.id+"_iframecontainer"),r.height=r.iframeHeight?r.iframeHeight:n.offsetHeight,r):function(e){var t,n,r=e.getElement()
return e.inline?Yw(null):(t=r,n=Ww.create("div"),Ww.insertAfter(n,t),Yw(n))}(e)},Jw=function(e){var t,n,r,o,i,a,u,s,c
e.fire("ScriptsLoaded"),t=e,n=Ct.trim(Ys(t)),r=t.ui.registry.getAll().icons,o=we(we({},ov.get("default").icons),ov.get(n).icons),oe(o,(function(e,n){de(r,n)||t.ui.registry.addIcon(n,e)})),u=tc(i=e),k(u)?(i.settings.theme=Xw(u),a=pv.get(u),i.theme=new a(i,pv.urls[u]),i.theme.init&&i.theme.init(i,pv.urls[u]||i.documentBaseUrl.replace(/\/$/,""),i.$)):i.theme={},s=e,c=[],Ct.each(rc(s).split(/[ ,]/),(function(e){Kw(s,c,Xw(e))}))
var l=Gw(e)
e.ui=we(we({},e.ui),l.api)
var f,d,m,p,g={editorContainer:l.editorContainer,iframeContainer:l.iframeContainer}
return e.editorContainer=g.editorContainer?g.editorContainer:null,(f=e).contentCSS=f.contentCSS.concat(function(e){var t,n,r=(n=(t=e).getParam("content_css"),k(n)?j(n.split(","),Me):R(n)?n:!1===n||t.inline?[]:["default"]),o=e.editorManager.baseURL+"/skins/content",i="content"+e.editorManager.suffix+".css",a=!0===e.inline
return j(r,(function(t){return/^[a-z0-9\-]+$/i.test(t)&&!a?o+"/"+t+"/"+i:e.documentBaseURI.toAbsolute(t)}))}(f)),e.inline?Vw(e):(p=$w(d=e,m=g),m.editorContainer&&(qw.get(m.editorContainer).style.display=d.orgDisplay,d.hidden=qw.isHidden(m.editorContainer)),d.getElement().style.display="none",qw.setAttrib(d.id,"aria-hidden","true"),void(p||Vw(d)))},Qw=uu.DOM,Zw=function(e){return"-"===e.charAt(0)},ex=function(e,t,n){return x.from(t).filter((function(e){return 0<e.length&&!ov.has(e)})).map((function(t){return{url:e.editorManager.baseURL+"/icons/"+t+"/icons"+n+".js",name:x.some(t)}}))},tx=function(e,t){var n,r,o,i,a,s,c=fu.ScriptLoader
n=c,o=t,i=function(){var n,r;(function(e,t){var n,r=Js(t),o=t.getParam("language_url","","string")
!1===yu.hasCode(r)&&"en"!==r&&(n=""!==o?o:t.editorManager.baseURL+"/langs/"+r+".js",e.add(n,u,void 0,(function(){yv(t,"LanguageLoadError",bv("language",n,r))})))})(c,e),function(e,t,n){var r,o=ex(t,"default",n),i=(r=t,x.from(r.getParam("icons_url","","string")).filter((function(e){return 0<e.length})).map((function(e){return{url:e,name:x.none()}})).orThunk((function(){return ex(t,Ys(t),"")})))
H(function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n)
return t}([o,i]),(function(n){e.add(n.url,u,void 0,(function(){var e,r,o
e=t,r=n.url,o=n.name.getOrUndefined(),yv(e,"IconsLoadError",bv("icons",r,o))}))}))}(c,e,t),n=e,r=t,Ct.each(n.getParam("external_plugins"),(function(e,t){mv.load(t,e,u,void 0,(function(){Cv(n,e,t)})),n.settings.plugins+=" "+t})),Ct.each(rc(n).split(/[ ,]/),(function(e){var t,o;(e=Ct.trim(e))&&!mv.urls[e]&&(Zw(e)?(e=e.substr(1,e.length),t=mv.dependencies(e),Ct.each(t,(function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+r+".js"},o=mv.createUrl(t,e)
mv.load(o.resource,o,u,void 0,(function(){Cv(n,o.prefix+o.resource+o.suffix,o.resource)}))}))):(o={prefix:"plugins/",resource:e,suffix:"/plugin"+r+".js"},mv.load(e,o,u,void 0,(function(){Cv(n,o.prefix+o.resource+o.suffix,e)}))))})),c.loadQueue((function(){e.removed||Jw(e)}),e,(function(){e.removed||Jw(e)}))},s=tc(r=e),k(s)?(Zw(s)||pv.urls.hasOwnProperty(s)||((a=r.getParam("theme_url"))?pv.load(s,r.documentBaseURI.toAbsolute(a)):pv.load(s,"themes/"+s+"/theme"+o+".js")),n.loadQueue((function(){pv.waitFor(s,i)}))):i()},nx=function(e){return P(e)?e:v},rx=function(e,t,n){var r=t(e),o=nx(n)
return r.orThunk((function(){return o(e)?x.none():function(e,t,n){for(var r=e.dom,o=nx(n);r.parentNode;){r=r.parentNode
var i=Et(r),a=t(i)
if(a.isSome())return a
if(o(i))break}return x.none()}(e,t,o)}))},ox={"font-size":"size","font-family":"face"},ix=function(e){return function(t,n){return x.from(n).map(Et).filter(Dt).bind((function(n){return function(e,t,n){return rx(Et(n),(function(t){return Yn(t,e).orThunk((function(){return"font"===Ot(t)?fe(ox,e).bind((function(e){return n=t,r=e,x.from($n(n,r))
var n,r})):x.none()}))}),(function(e){return At(Et(t),e)}))}(e,t,n.dom).or((r=e,o=n.dom,x.from(uu.DOM.getStyle(o,r,!0))))
var r,o})).getOr("")}},ax=ix("font-size"),ux=s((function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}),ix("font-family")),sx=function(e){return dl(e.getBody()).map((function(e){var t=e.container()
return On(t)?t.parentNode:t}))},cx=function(e,t){return n=e,x.from(n.selection.getRng()).bind((function(e){var t=n.getBody()
return e.startContainer===t&&0===e.startOffset?x.none():x.from(n.selection.getStart(!0))})).orThunk(f(sx,e)).map(Et).filter(Dt).map(t)
var n},lx=function(e,t){if(/^[0-9.]+$/.test(t)){var n=parseInt(t,10)
if(1<=n&&n<=7){var r=(a=e,Ct.explode(a.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large"))),o=(i=e,Ct.explode(i.getParam("font_size_classes","")))
return o?o[n-1]||t:r[n-1]||t}return t}return t
var i,a},fx=Ct.each,dx=Ct.map,mx=Ct.inArray,px=(gx.prototype.execCommand=function(e,t,n,r){var i,a,u=!1,s=this
if(!s.editor.removed){if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus?(a=s.editor,Sd(a).each((function(e){return a.selection.setRng(e)}))):s.editor.focus(),(r=s.editor.fire("BeforeExecCommand",{command:e,ui:t,value:n})).isDefaultPrevented())return!1
var c=e.toLowerCase()
if(i=s.commands.exec[c])return i(c,t,n),s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
if(fx(this.editor.plugins,(function(r){if(r.execCommand&&r.execCommand(e,t,n))return s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!(u=!0)})),u)return u
if(s.editor.theme&&s.editor.theme.execCommand&&s.editor.theme.execCommand(e,t,n))return s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
try{u=s.editor.getDoc().execCommand(e,t,n)}catch(o){}return!!u&&(s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0)}},gx.prototype.queryCommandState=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.state[e])return t(e)
try{return this.editor.getDoc().queryCommandState(e)}catch(m){}return!1}},gx.prototype.queryCommandValue=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.value[e])return t(e)
try{return this.editor.getDoc().queryCommandValue(e)}catch(m){}}},gx.prototype.addCommands=function(e,t){void 0===t&&(t="exec")
var n=this
fx(e,(function(e,r){fx(r.toLowerCase().split(","),(function(r){n.commands[t][r]=e}))}))},gx.prototype.addCommand=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.exec[e]=function(e,o,i,a){return t.call(n||r.editor,o,i,a)}},gx.prototype.queryCommandSupported=function(e){if(e=e.toLowerCase(),this.commands.exec[e])return!0
try{return this.editor.getDoc().queryCommandSupported(e)}catch(t){}return!1},gx.prototype.addQueryStateHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.state[e]=function(){return t.call(n||r.editor)}},gx.prototype.addQueryValueHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.value[e]=function(){return t.call(n||r.editor)}},gx.prototype.hasCustomCommand=function(e){return e=e.toLowerCase(),!!this.commands.exec[e]},gx.prototype.execNativeCommand=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=null),this.editor.getDoc().execCommand(e,t,n)},gx.prototype.isFormatMatch=function(e){return this.editor.formatter.match(e)},gx.prototype.toggleFormat=function(e,t){this.editor.formatter.toggle(e,t?{value:t}:void 0),this.editor.nodeChanged()},gx.prototype.storeSelection=function(e){this.selectionBookmark=this.editor.selection.getBookmark(e)},gx.prototype.restoreSelection=function(){this.editor.selection.moveToBookmark(this.selectionBookmark)},gx.prototype.setupCommands=function(e){var t=this
this.addCommands({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},"Cut,Copy,Paste":function(n){var r,o,i=e.getDoc()
try{t.execNativeCommand(n)}catch(l){r=!0}"paste"!==n||i.queryCommandEnabled(n)||(r=!0),!r&&i.queryCommandSupported(n)||(o=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."),gt.mac&&(o=o.replace(/Ctrl\+/g,"⌘+")),e.notificationManager.open({text:o,type:"error"}))},unlink:function(){var t
e.selection.isCollapsed()?(t=e.dom.getParent(e.selection.getStart(),"a"))&&e.dom.remove(t,!0):e.formatter.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(n){var r=n.substring(7)
"full"===r&&(r="justify"),fx("left,center,right,justify".split(","),(function(t){r!==t&&e.formatter.remove("align"+t)})),"none"!==r&&t.toggleFormat("align"+r)},"InsertUnorderedList,InsertOrderedList":function(n){var r
t.execNativeCommand(n)
var o=e.dom.getParent(e.selection.getNode(),"ol,ul")
o&&(r=o.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName)&&(t.storeSelection(),e.dom.split(r,o),t.restoreSelection()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){t.toggleFormat(e)},"ForeColor,HiliteColor":function(e,n,r){t.toggleFormat(e,r)},FontName:function(t,n,r){(function(e,t){var n,r=lx(e,t)
e.formatter.toggle("fontname",{value:(n=r.split(/\s*,\s*/),j(n,(function(e){return-1===e.indexOf(" ")||Le(e,'"')||Le(e,"'")?e:"'"+e+"'"})).join(","))}),e.nodeChanged()})(e,r)},FontSize:function(t,n,r){var o,i
i=r,(o=e).formatter.toggle("fontsize",{value:lx(o,i)}),o.nodeChanged()},LineHeight:function(t,n,r){var o,i
i=r,(o=e).undoManager.transact((function(){o.formatter.toggle("lineheight",{value:String(i)}),o.nodeChanged()}))},RemoveFormat:function(t){e.formatter.remove(t)},mceBlockQuote:function(){t.toggleFormat("blockquote")},FormatBlock:function(e,n,r){return t.toggleFormat(r||"p")},mceCleanup:function(){var t=e.selection.getBookmark()
e.setContent(e.getContent()),e.selection.moveToBookmark(t)},mceRemoveNode:function(n,r,o){var i=o||e.selection.getNode()
i!==e.getBody()&&(t.storeSelection(),e.dom.remove(i,!0),t.restoreSelection())},mceSelectNodeDepth:function(t,n,r){var o=0
e.dom.getParent(e.selection.getNode(),(function(t){if(1===t.nodeType&&o++===r)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:function(t,n,r){e.selection.select(r)},mceInsertContent:function(t,n,r){(function(e,t){var n,r,o,i,a="string"!=typeof(n=t)?(r=Ct.extend({paste:n.paste,data:{paste:n.paste}},n),{content:n.content,details:r}):{content:n,details:{}}
o=a.content,i=a.details,mh(e).editor.insertContent(o,i)})(e,r)},mceInsertRawHTML:function(t,n,r){e.selection.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,(function(){return r})))},mceInsertNewLine:function(t,n,r){hw(e,r)},mceToggleFormat:function(e,n,r){t.toggleFormat(r)},mceSetContent:function(t,n,r){e.setContent(r)},"Indent,Outdent":function(t){Sb(e,t)},mceRepaint:function(){},InsertHorizontalRule:function(){e.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual,e.addVisual()},mceReplaceContent:function(t,n,r){e.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceInsertLink:function(t,n,r){"string"==typeof r&&(r={href:r})
var o=e.dom.getParent(e.selection.getNode(),"a")
r.href=r.href.replace(/ /g,"%20"),o&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,o)},selectAll:function(){var t,n=e.dom.getParent(e.selection.getStart(),Mn)
n&&((t=e.dom.createRng()).selectNodeContents(n),e.selection.setRng(t))},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,n,r){return rw(e,r),!0}})
var n=function(t){return function(){var n=e.selection,r=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks(),o=dx(r,(function(n){return!!e.formatter.matchNode(n,t)}))
return-1!==mx(o,!0)}}
t.addCommands({JustifyLeft:n("alignleft"),JustifyCenter:n("aligncenter"),JustifyRight:n("alignright"),JustifyFull:n("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return t.isFormatMatch(e)},mceBlockQuote:function(){return t.isFormatMatch("blockquote")},Outdent:function(){return Cb(e)},"InsertUnorderedList,InsertOrderedList":function(t){var n=e.dom.getParent(e.selection.getNode(),"ul,ol")
return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state"),t.addCommands({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}}),t.addQueryValueHandler("FontName",(function(){return cx(t=e,(function(e){return ux(t.getBody(),e.dom)})).getOr("")
var t}),this),t.addQueryValueHandler("FontSize",(function(){return cx(t=e,(function(e){return ax(t.getBody(),e.dom)})).getOr("")
var t}),this),t.addQueryValueHandler("LineHeight",(function(){return cx(t=e,(function(e){var n=Et(t.getBody())
return rx(e,(function(e){return Yn(e,"line-height")}),f(At,n)).getOrThunk((function(){var t=parseFloat(Kn(e,"line-height")),n=parseFloat(Kn(e,"font-size"))
return String(t/n)}))})).getOr("")
var t}),this)},gx)
function gx(e){this.commands={state:{},exec:{},value:{}},this.editor=e,this.setupCommands(e)}var hx="data-mce-contenteditable",vx=function(e,t,n){var r,o
_u(e,t)&&!1===n?(o=t,Eu(r=e)?r.dom.classList.remove(o):function(e,t){return o=t,0<(i=q(Nu(n=e,r="class"),(function(e){return e!==o}))).length?Vn(n,r,i.join(" ")):Wn(n,r),!1
var n,r,o,i}(r,o),function(e){0===(Eu(e)?e.dom.classList:Nu(e,"class")).length&&Wn(e,"class")}(r)):n&&ku(e,t)},yx=function(t,n,r){try{t.getDoc().execCommand(n,!1,String(r))}catch(e){}},bx=function(e,t){e.dom.contentEditable=t?"true":"false"},Cx=function(e,t){var n,r,o,i=Et(e.getBody())
vx(i,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),o=e,x.from(o.selection.getNode()).each((function(e){e.removeAttribute("data-mce-selected")})),e.readonly=!0,bx(i,!1),H(Au(i,'*[contenteditable="true"]'),(function(e){Vn(e,hx,"true"),bx(e,!1)}))):(e.readonly=!1,bx(i,!0),H(Au(i,"*["+hx+'="true"]'),(function(e){Wn(e,hx),bx(e,!0)})),yx(e,"StyleWithCSS",!1),yx(e,"enableInlineTableEditing",!1),yx(e,"enableObjectResizing",!1),(Bd(r=e)||function(e){return ld().filter((function(t){return!(void 0!==(n=t.dom.classList)&&(n.contains("tox-edit-area")||n.contains("tox-edit-area__iframe")||n.contains("mce-content-body")))&&_d(e,t.dom)
var n})).isSome()}(r))&&e.focus(),(n=e).selection.setRng(n.selection.getRng()),e.nodeChanged())},wx=function(e){return e.readonly},xx=function(e){e.parser.addAttributeFilter("contenteditable",(function(t){wx(e)&&H(t,(function(e){e.attr(hx,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(hx,(function(t){wx(e)&&H(t,(function(e){e.attr("contenteditable",e.attr(hx))}))})),e.serializer.addTempAttr(hx)},Sx=Ct.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," "),Nx=(Ex.isNative=function(e){return!!Sx[e.toLowerCase()]},Ex.prototype.fire=function(e,t){var n=e.toLowerCase(),r=t||{}
r.type=n,r.target||(r.target=this.scope),r.preventDefault||(r.preventDefault=function(){r.isDefaultPrevented=y},r.stopPropagation=function(){r.isPropagationStopped=y},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=y},r.isDefaultPrevented=v,r.isPropagationStopped=v,r.isImmediatePropagationStopped=v),this.settings.beforeFire&&this.settings.beforeFire(r)
var o=this.bindings[n]
if(o)for(var i=0,a=o.length;i<a;i++){var u=o[i]
if(u.once&&this.off(n,u.func),r.isImmediatePropagationStopped())return r.stopPropagation(),r
if(!1===u.func.call(this.scope,r))return r.preventDefault(),r}return r},Ex.prototype.on=function(e,t,n,r){if(!1===t&&(t=v),t){var o={func:t}
r&&Ct.extend(o,r)
for(var i=e.toLowerCase().split(" "),a=i.length;a--;){var u=i[a],s=this.bindings[u]
s||(s=this.bindings[u]=[],this.toggleEvent(u,!0)),n?s.unshift(o):s.push(o)}}return this},Ex.prototype.off=function(e,t){var n=this
if(e)for(var r=e.toLowerCase().split(" "),o=r.length;o--;){var i=r[o],a=this.bindings[i]
if(!i)return oe(this.bindings,(function(e,t){n.toggleEvent(t,!1),delete n.bindings[t]})),this
if(a){if(t)for(var u=a.length;u--;)a[u].func===t&&(a=a.slice(0,u).concat(a.slice(u+1)),this.bindings[i]=a)
else a.length=0
a.length||(this.toggleEvent(e,!1),delete this.bindings[i])}}else oe(this.bindings,(function(e,t){n.toggleEvent(t,!1)})),this.bindings={}
return this},Ex.prototype.once=function(e,t,n){return this.on(e,t,n,{once:!0})},Ex.prototype.has=function(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)},Ex)
function Ex(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||v}var kx,_x=function(e){return e._eventDispatcher||(e._eventDispatcher=new Nx({scope:e,toggleEvent:function(t,n){Nx.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher},Rx={fire:function(e,t,n){if(this.removed&&"remove"!==e&&"detach"!==e)return t
var r=_x(this).fire(e,t)
if(!1!==n&&this.parent)for(var o=this.parent();o&&!r.isPropagationStopped();)o.fire(e,r,!1),o=o.parent()
return r},on:function(e,t,n){return _x(this).on(e,t,n)},off:function(e,t){return _x(this).off(e,t)},once:function(e,t){return _x(this).once(e,t)},hasEventListeners:function(e){return _x(this).has(e)}},Ax=uu.DOM,Tx=function(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
var n=ec(e)
return n?(e.eventRoot||(e.eventRoot=Ax.select(n)[0]),e.eventRoot):e.getBody()},Ox=function(e,t,n){var r,o,i,a,u;(u=e).hidden||wx(u)?wx(e)&&(r=e,a=(o=n).target,"click"!==o.type||Sf.metaKeyPressed(o)||(i=a,null===r.dom.getParent(i,"a"))||o.preventDefault()):e.fire(t,n)},Bx=function(e,t){var n
if(e.delegates||(e.delegates={}),!e.delegates[t]&&!e.removed){var r=Tx(e,t)
if(ec(e)){if(kx||(kx={},e.editorManager.on("removeEditor",(function(){e.editorManager.activeEditor||kx&&(oe(kx,(function(t,n){e.dom.unbind(Tx(e,n))})),kx=null)}))),kx[t])return
n=function(n){for(var r=n.target,o=e.editorManager.get(),i=o.length;i--;){var a=o[i].getBody()
a!==r&&!Ax.isChildOf(r,a)||Ox(o[i],t,n)}},kx[t]=n,Ax.bind(r,t,n)}else n=function(n){Ox(e,t,n)},Ax.bind(r,t,n),e.delegates[t]=n}},Px=we(we({},Rx),{bindPendingEventDelegates:function(){var e=this
Ct.each(e._pendingNativeEvents,(function(t){Bx(e,t)}))},toggleNativeEvent:function(e,t){var n=this
"focus"!==e&&"blur"!==e&&(t?n.initialized?Bx(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(Tx(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t=e.getBody(),n=e.dom
e.delegates&&(oe(e.delegates,(function(t,n){e.dom.unbind(Tx(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}}),Dx=["design","readonly"],Lx=function(e,t,n,r){var o,i=n[t.get()],a=n[r]
try{a.activate()}catch(qS){return void console.error("problem while activating editor mode "+r+":",qS)}i.deactivate(),i.editorReadOnly!==a.editorReadOnly&&Cx(e,a.editorReadOnly),t.set(r),o=r,e.fire("SwitchMode",{mode:o})},Ix=Ct.each,Mx=Ct.explode,Fx={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},Ux=Ct.makeMap("alt,ctrl,shift,meta,access"),zx=(jx.prototype.add=function(e,t,n,r){var o=this,i=o.normalizeCommandFunc(n)
return Ix(Mx(Ct.trim(e)),(function(e){var n=o.createShortcut(e,t,i,r)
o.shortcuts[n.id]=n})),!0},jx.prototype.remove=function(e){var t=this.createShortcut(e)
return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)},jx.prototype.normalizeCommandFunc=function(e){var t=this,n=e
return"string"==typeof n?function(){t.editor.execCommand(n,!1,null)}:Ct.isArray(n)?function(){t.editor.execCommand(n[0],n[1],n[2])}:n},jx.prototype.parseShortcut=function(e){var t,n={}
Ix(Mx(e.toLowerCase(),"+"),(function(e){e in Ux?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=Fx[e]||e.toUpperCase().charCodeAt(0))}))
var r=[n.keyCode]
for(t in Ux)n[t]?r.push(t):n[t]=!1
return n.id=r.join(","),n.access&&(n.alt=!0,gt.mac?n.ctrl=!0:n.shift=!0),n.meta&&(gt.mac?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n},jx.prototype.createShortcut=function(e,t,n,r){var o=Ct.map(Mx(e,">"),this.parseShortcut)
return o[o.length-1]=Ct.extend(o[o.length-1],{func:n,scope:r||this.editor}),Ct.extend(o[0],{desc:this.editor.translate(t),subpatterns:o.slice(1)})},jx.prototype.hasModifier=function(e){return e.altKey||e.ctrlKey||e.metaKey},jx.prototype.isFunctionKey=function(e){return"keydown"===e.type&&112<=e.keyCode&&e.keyCode<=123},jx.prototype.matchShortcut=function(e,t){return!!t&&t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&t.alt===e.altKey&&t.shift===e.shiftKey&&!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0)},jx.prototype.executeShortcutAction=function(e){return e.func?e.func.call(e.scope):null},jx)
function jx(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e
var t=this
e.on("keyup keypress keydown",(function(e){!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(Ix(t.shortcuts,(function(n){if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}var Hx=function(){var e,t,n,r,o,i,a,u,s=(t={},n={},r={},o={},i={},a={},{addButton:(u=function(e,t){return function(n,r){return e[n.toLowerCase()]=we(we({},r),{type:t})}})(e={},"button"),addGroupToolbarButton:u(e,"grouptoolbarbutton"),addToggleButton:u(e,"togglebutton"),addMenuButton:u(e,"menubutton"),addSplitButton:u(e,"splitbutton"),addMenuItem:u(t,"menuitem"),addNestedMenuItem:u(t,"nestedmenuitem"),addToggleMenuItem:u(t,"togglemenuitem"),addAutocompleter:u(n,"autocompleter"),addContextMenu:u(o,"contextmenu"),addContextToolbar:u(i,"contexttoolbar"),addContextForm:u(i,"contextform"),addSidebar:u(a,"sidebar"),addIcon:function(e,t){return r[e.toLowerCase()]=t},getAll:function(){return{buttons:e,menuItems:t,icons:r,popups:n,contextMenus:o,contextToolbars:i,sidebars:a}}})
return{addAutocompleter:s.addAutocompleter,addButton:s.addButton,addContextForm:s.addContextForm,addContextMenu:s.addContextMenu,addContextToolbar:s.addContextToolbar,addIcon:s.addIcon,addMenuButton:s.addMenuButton,addMenuItem:s.addMenuItem,addNestedMenuItem:s.addNestedMenuItem,addSidebar:s.addSidebar,addSplitButton:s.addSplitButton,addToggleButton:s.addToggleButton,addGroupToolbarButton:s.addGroupToolbarButton,addToggleMenuItem:s.addToggleMenuItem,getAll:s.getAll}},Vx=Ct.each,qx=Ct.trim,$x="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),Wx={ftp:21,http:80,https:443,mailto:25},Kx=(Xx.parseDataUri=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},Xx.getDocumentBaseUrl=function(e){var t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname
return/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t},Xx.prototype.setPath=function(e){var t=/^(.*?)\/?(\w+)?$/.exec(e)
this.path=t[0],this.directory=t[1],this.file=t[2],this.source="",this.getURI()},Xx.prototype.toRelative=function(e){var t
if("./"===e)return e
var n=new Xx(e,{base_uri:this})
if("mce_host"!==n.host&&this.host!==n.host&&n.host||this.port!==n.port||this.protocol!==n.protocol&&""!==n.protocol)return n.getURI()
var r=this.getURI(),o=n.getURI()
return r===o||"/"===r.charAt(r.length-1)&&r.substr(0,r.length-1)===o?r:(t=this.toRelPath(this.path,n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),t)},Xx.prototype.toAbsolute=function(e,t){var n=new Xx(e,{base_uri:this})
return n.getURI(t&&this.isSameOrigin(n))},Xx.prototype.isSameOrigin=function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0
var t=Wx[this.protocol]
if(t&&(this.port||t)==(e.port||t))return!0}return!1},Xx.prototype.toRelPath=function(e,t){var n,r,o=0,i="",a=e.substring(0,e.lastIndexOf("/")).split("/"),u=t.split("/")
if(a.length>=u.length)for(n=0,r=a.length;n<r;n++)if(n>=u.length||a[n]!==u[n]){o=n+1
break}if(a.length<u.length)for(n=0,r=u.length;n<r;n++)if(n>=a.length||a[n]!==u[n]){o=n+1
break}if(1===o)return t
for(n=0,r=a.length-(o-1);n<r;n++)i+="../"
for(n=o-1,r=u.length;n<r;n++)i+=n!==o-1?"/"+u[n]:u[n]
return i},Xx.prototype.toAbsPath=function(e,t){var n,r,o=0,i=[],a=/\/$/.test(t)?"/":"",u=e.split("/"),s=t.split("/")
for(Vx(u,(function(e){e&&i.push(e)})),u=i,n=s.length-1,i=[];0<=n;n--)0!==s[n].length&&"."!==s[n]&&(".."!==s[n]?0<o?o--:i.push(s[n]):o++)
return 0!==(r=(n=u.length-o)<=0?J(i).join("/"):u.slice(0,n).join("/")+"/"+J(i).join("/")).indexOf("/")&&(r="/"+r),a&&r.lastIndexOf("/")!==r.length-1&&(r+=a),r},Xx.prototype.getURI=function(e){var t
return void 0===e&&(e=!1),this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source},Xx)
function Xx(e,t){e=qx(e),this.settings=t||{}
var n,r,o,i,a=this.settings.base_uri,u=this;/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e)?u.source=e:(n=0===e.indexOf("//"),0!==e.indexOf("/")||n||(e=(a&&a.protocol||"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(r=this.settings.base_uri?this.settings.base_uri.path:new Xx(document.location.href).directory,e=this.settings.base_uri&&""==this.settings.base_uri.protocol?"//mce_host"+u.toAbsPath(r,e):(o=/([^#?]*)([#?]?.*)/.exec(e),(a&&a.protocol||"http")+"://mce_host"+u.toAbsPath(r,o[1])+o[2])),e=e.replace(/@@/g,"(mce_at)"),i=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),Vx($x,(function(e,t){var n=(n=i[t])&&n.replace(/\(mce_at\)/g,"@@")
u[e]=n})),a&&(u.protocol||(u.protocol=a.protocol),u.userInfo||(u.userInfo=a.userInfo),u.port||"mce_host"!==u.host||(u.port=a.port),u.host&&"mce_host"!==u.host||(u.host=a.host),u.source=""),n&&(u.protocol=""))}var Yx=uu.DOM,Gx=Ct.extend,Jx=Ct.each,Qx=Ct.resolve,Zx=gt.ie,eS=(tS.prototype.render=function(){(function(e){var t=e.id
yu.setCode(Js(e))
var n,r,o,i,a,u=function(){Qw.unbind(window,"ready",u),e.render()}
mi.Event.domLoaded?e.getElement()&&gt.contentEditable&&(n=Et(e.getElement()),r=W(n.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{}),e.on("remove",(function(){V(n.dom.attributes,(function(e){return Wn(n,e.name),0})),qn(n,r)})),e.ui.styleSheetLoader=(o=n,i=e,Mr.forElement(o,{contentCssCors:i.getParam("content_css_cors"),referrerPolicy:Gs(i)})),e.getParam("inline")?e.inline=!0:(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden"),(a=e.getElement().form||Qw.getParent(t,"form"))&&(e.formElement=a,e.getParam("hidden_input")&&!Tn(e.getElement())&&(Qw.insertAfter(Qw.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=function(t){e.fire(t.type,t)},Qw.bind(a,"submit reset",e.formEventDelegate),e.on("reset",(function(){e.resetContent()})),!e.getParam("submit_patch")||a.submit.nodeType||a.submit.length||a._mceOldSubmit||(a._mceOldSubmit=a.submit,a.submit=function(){return e.editorManager.triggerSave(),e.setDirty(!1),a._mceOldSubmit(a)})),e.windowManager=gv(e),e.notificationManager=dv(e),"xml"===e.getParam("encoding")&&e.on("GetContent",(function(e){e.save&&(e.content=Qw.encode(e.content))})),e.getParam("add_form_submit_trigger")&&e.on("submit",(function(){e.initialized&&e.save()})),e.getParam("add_unload_trigger")&&(e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),tx(e,e.suffix)):Qw.bind(window,"ready",u)})(this)},tS.prototype.focus=function(e){var t
t=e,this.removed||(t?Dd:Pd)(this)},tS.prototype.hasFocus=function(){return Bd(this)},tS.prototype.execCallback=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r,o=this.settings[e]
if(o)return this.callbackLookup&&(r=this.callbackLookup[e])&&(o=r.func,r=r.scope),"string"==typeof o&&(r=(r=o.replace(/\.\w+$/,""))?Qx(r):0,o=Qx(o),this.callbackLookup=this.callbackLookup||{},this.callbackLookup[e]={func:o,scope:r}),o.apply(r||this,t)},tS.prototype.translate=function(e){return yu.translate(e)},tS.prototype.getParam=function(e,t,n){return function(e,t,n,r){var o,i,a,u=t in e.settings?e.settings[t]:n
return"hash"===r?(a={},"string"==typeof(i=u)?H(0<i.indexOf("=")?i.split(/[;,](?![^=;,]*(?:[;,]|$))/):i.split(","),(function(e){var t=e.split("=")
1<t.length?a[Ct.trim(t[0])]=Ct.trim(t[1]):a[Ct.trim(t[0])]=Ct.trim(t[0])})):a=i,a):"string"===r?rv(k,e,t).getOr(n):"number"===r?rv(D,e,t).getOr(n):"boolean"===r?rv(T,e,t).getOr(n):"object"===r?rv(_,e,t).getOr(n):"array"===r?rv(R,e,t).getOr(n):"string[]"===r?rv((o=k,function(e){return R(e)&&G(e,o)}),e,t).getOr(n):"function"===r?rv(P,e,t).getOr(n):u}(this,e,t,n)},tS.prototype.hasPlugin=function(e,t){return!(!U(rc(this).split(/[ ,]/),e)||t&&void 0===mv.get(e))},tS.prototype.nodeChanged=function(e){this._nodeChangeDispatcher.nodeChanged(e)},tS.prototype.addCommand=function(e,t,n){this.editorCommands.addCommand(e,t,n)},tS.prototype.addQueryStateHandler=function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},tS.prototype.addQueryValueHandler=function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},tS.prototype.addShortcut=function(e,t,n,r){this.shortcuts.add(e,t,n,r)},tS.prototype.execCommand=function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},tS.prototype.queryCommandState=function(e){return this.editorCommands.queryCommandState(e)},tS.prototype.queryCommandValue=function(e){return this.editorCommands.queryCommandValue(e)},tS.prototype.queryCommandSupported=function(e){return this.editorCommands.queryCommandSupported(e)},tS.prototype.show=function(){this.hidden&&(this.hidden=!1,this.inline?this.getBody().contentEditable="true":(Yx.show(this.getContainer()),Yx.hide(this.id)),this.load(),this.fire("show"))},tS.prototype.hide=function(){var e=this,t=e.getDoc()
e.hidden||(Zx&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(Yx.hide(e.getContainer()),Yx.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},tS.prototype.isHidden=function(){return!!this.hidden},tS.prototype.setProgressState=function(e,t){this.fire("ProgressState",{state:e,time:t})},tS.prototype.load=function(e){var t=this.getElement()
if(this.removed)return""
if(t){(e=e||{}).load=!0
var n=Tn(t)?t.value:t.innerHTML,r=this.setContent(n,e)
return e.element=t,e.no_events||this.fire("LoadContent",e),e.element=t=null,r}},tS.prototype.save=function(e){var t,n,r=this,o=r.getElement()
if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,Tn(o)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=Yx.getParent(r.id,"form"))&&Jx(n.elements,(function(e){if(e.name===r.id)return e.value=t,!1}))),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},tS.prototype.setContent=function(e,t){return Hh(this,e,t)},tS.prototype.getContent=function(e){return function(e,t){var n,r
return void 0===t&&(t={}),n=t,r=t.format?t.format:"html",mh(e).editor.getContent(n,r)}(this,e)},tS.prototype.insertContent=function(e,t){t&&(e=Gx({content:e},t)),this.execCommand("mceInsertContent",!1,e)},tS.prototype.resetContent=function(e){void 0===e?Hh(this,this.startContent,{format:"raw"}):Hh(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()},tS.prototype.isDirty=function(){return!this.isNotDirty},tS.prototype.setDirty=function(e){var t=!this.isNotDirty
this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},tS.prototype.getContainer=function(){return this.container||(this.container=Yx.get(this.editorContainer||this.id+"_parent")),this.container},tS.prototype.getContentAreaContainer=function(){return this.contentAreaContainer},tS.prototype.getElement=function(){return this.targetElm||(this.targetElm=Yx.get(this.id)),this.targetElm},tS.prototype.getWin=function(){var e
return this.contentWindow||(e=this.iframeElement)&&(this.contentWindow=e.contentWindow),this.contentWindow},tS.prototype.getDoc=function(){var e
return this.contentDocument||(e=this.getWin())&&(this.contentDocument=e.document),this.contentDocument},tS.prototype.getBody=function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},tS.prototype.convertURL=function(e,t,n){var r=this.settings
return r.urlconverter_callback?this.execCallback("urlconverter_callback",e,n,!0,t):!r.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:r.relative_urls?this.documentBaseURI.toRelative(e):e=this.documentBaseURI.toAbsolute(e,r.remove_script_host)},tS.prototype.addVisual=function(e){var t,n=this,r=n.settings,o=n.dom
e=e||n.getBody(),void 0===n.hasVisual&&(n.hasVisual=r.visual),Jx(o.select("table,a",e),(function(e){var i
switch(e.nodeName){case"TABLE":return t=r.visual_table_class||"mce-item-table",void((i=o.getAttrib(e,"border"))&&"0"!==i||!n.hasVisual?o.removeClass(e,t):o.addClass(e,t))
case"A":return void(o.getAttrib(e,"href")||(i=o.getAttrib(e,"name")||e.id,t=r.visual_anchor_class||"mce-item-anchor",i&&n.hasVisual?o.addClass(e,t):o.removeClass(e,t)))}})),n.fire("VisualAid",{element:e,hasVisual:n.hasVisual})},tS.prototype.remove=function(){(function(e){var t,n,r,o,i
e.removed||(t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement(),r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&Vh.remove(o.nextSibling),e.fire("remove"),e.editorManager.remove(e),!e.inline&&r&&(i=e,Vh.setStyle(i.id,"display",i.orgDisplay)),e.fire("detach"),Vh.remove(e.getContainer()),qh(t),qh(n),e.destroy())})(this)},tS.prototype.destroy=function(e){(function(e,t){var n,r,o,i=e.selection,a=e.dom
e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),qh(i),qh(a)),(r=(n=e).formElement)&&(r._mceOldSubmit&&(r.submit=r._mceOldSubmit,r._mceOldSubmit=null),Vh.unbind(r,"submit reset",n.formEventDelegate)),(o=e).contentAreaContainer=o.formElement=o.container=o.editorContainer=null,o.bodyElement=o.contentDocument=o.contentWindow=null,o.iframeElement=o.targetElm=null,o.selection&&(o.selection=o.selection.win=o.selection.dom=o.selection.dom.doc=null),e.destroyed=!0):e.remove())})(this,e)},tS.prototype.uploadImages=function(e){return this.editorUpload.uploadImages(e)},tS.prototype._scanForImages=function(){return this.editorUpload.scanForImages()},tS.prototype.addButton=function(){throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")},tS.prototype.addSidebar=function(){throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")},tS.prototype.addMenuItem=function(){throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")},tS.prototype.addContextToolbar=function(){throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")},tS)
function tS(e,t,n){var r=this
this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,Gx(this,Px),this.settings=function(e,t,n,r,o){var i,a,u,s,c=(i=n,a=Xh,u=e,s={id:t,theme:"silver",toolbar_mode:tv(o,"floating"),plugins:"",document_base_url:i,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,inline_styles:!0,convert_fonts_to_spans:!0,indent:!0,indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:u.convertURL,url_converter_scope:u},we(we({},s),a?Qh:{}))
return nv(Yh||Gh,Yh,c,r,o)}(this,e,this.documentBaseUrl,n.defaultSettings,t),this.settings.suffix&&(n.suffix=this.settings.suffix),this.suffix=n.suffix,this.settings.base_url&&n._setBaseUrl(this.settings.base_url),this.baseUri=n.baseURI,this.settings.referrer_policy&&(fu.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),uu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),wu.languageLoad=this.settings.language_load,wu.baseURL=n.baseURL,this.id=e,this.setDirty(!1),this.documentBaseURI=new Kx(this.settings.document_base_url,{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=!!this.settings.inline,this.shortcuts=new zx(this),this.editorCommands=new px(this),this.settings.cache_suffix&&(gt.cacheSuffix=this.settings.cache_suffix.replace(/^[\?\&]+/,"")),this.ui={registry:Hx(),styleSheetLoader:void 0,show:u,hide:u}
var o=function(e){var t,n,r=pu("design"),o=pu({design:{activate:u,deactivate:u,editorReadOnly:!1},readonly:{activate:u,deactivate:u,editorReadOnly:!0}})
return(t=e).serializer?xx(t):t.on("PreInit",(function(){xx(t)})),(n=e).on("ShowCaret",(function(e){wx(n)&&e.preventDefault()})),n.on("ObjectSelected",(function(e){wx(n)&&e.preventDefault()})),{isReadOnly:function(){return wx(e)},set:function(t){return function(e,t,n,r){if(r!==n.get()){if(!de(t,r))throw new Error("Editor mode '"+r+"' is invalid")
e.initialized?Lx(e,n,t,r):e.on("init",(function(){return Lx(e,n,t,r)}))}}(e,o.get(),r,t)},get:function(){return r.get()},register:function(e,t){o.set(function(e,t,n){var r
if(U(Dx,t))throw new Error("Cannot override default mode "+t)
return we(we({},e),((r={})[t]=we(we({},n),{deactivate:function(){try{n.deactivate()}catch(qS){console.error("problem while deactivating editor mode "+t+":",qS)}}}),r))}(o.get(),e,t))}}}(this)
this.mode=o,this.setMode=o.set,n.fire("SetupEditor",{editor:this}),this.execCallback("setup",this),this.$=Za.overrideDefaults((function(){return{context:r.inline?r.getBody():r.getDoc(),element:r.getBody()}}))}var nS,rS=uu.DOM,oS=Ct.explode,iS=Ct.each,aS=Ct.extend,uS=0,sS=!1,cS=[],lS=[],fS=function(e){var t=e.type
iS(gS.get(),(function(n){switch(t){case"scroll":n.fire("ScrollWindow",e)
break
case"resize":n.fire("ResizeWindow",e)}}))},dS=function(e){e!==sS&&(e?Za(window).on("resize scroll",fS):Za(window).off("resize scroll",fS),sS=e)},mS=function(e){var t=lS
delete cS[e.id]
for(var n=0;n<cS.length;n++)if(cS[n]===e){cS.splice(n,1)
break}return lS=q(lS,(function(t){return e!==t})),gS.activeEditor===e&&(gS.activeEditor=0<lS.length?lS[0]:null),gS.focusedEditor===e&&(gS.focusedEditor=null),t.length!==lS.length},pS="CSS1Compat"!==document.compatMode,gS=we(we({},Rx),{baseURI:null,baseURL:null,defaultSettings:{},documentBaseURL:null,suffix:null,$:Za,majorVersion:"5",minorVersion:"5.1",releaseDate:"2020-10-01",editors:cS,i18n:yu,activeEditor:null,focusedEditor:null,settings:{},setup:function(){var e,t="",n=Kx.getDocumentBaseUrl(document.location);/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/"))
var r,o=window.tinymce||window.tinyMCEPreInit
if(o)e=o.base||o.baseURL,t=o.suffix
else{for(var i,a=document.getElementsByTagName("script"),u=0;u<a.length;u++)if(""!==(i=a[u].src||"")){var s=i.substring(i.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)){-1!==s.indexOf(".min")&&(t=".min"),e=i.substring(0,i.lastIndexOf("/"))
break}}!e&&document.currentScript&&(-1!==(i=document.currentScript.src).indexOf(".min")&&(t=".min"),e=i.substring(0,i.lastIndexOf("/")))}this.baseURL=new Kx(n).toAbsolute(e),this.documentBaseURL=n,this.baseURI=new Kx(this.baseURL),this.suffix=t,(r=this).on("AddEditor",f(Rd,r)),r.on("RemoveEditor",f(Ad,r))},overrideDefaults:function(e){var t=e.base_url
t&&this._setBaseUrl(t)
var n=e.suffix
e.suffix&&(this.suffix=n)
var r=(this.defaultSettings=e).plugin_base_urls
void 0!==r&&oe(r,(function(e,t){wu.PluginManager.urls[t]=e}))},init:function(e){var t,n=this,r=Ct.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," "),o=function(e){var t=e.id
return t||(t=fe(e,"name").filter((function(e){return!rS.get(e)})).getOrThunk(rS.uniqueId),e.setAttribute("id",t)),t},i=function(e,t){return t.constructor===RegExp?t.test(e.className):rS.hasClass(e,t)},a=function(e){t=e},u=function(){var t,s=0,c=[],l=function(e,r,o){var i=new eS(e,r,n)
c.push(i),i.on("init",(function(){++s===t.length&&a(c)})),i.targetElm=i.targetElm||o,i.render()}
rS.unbind(window,"ready",u),function(t){var r=e[t]
r&&r.apply(n,Array.prototype.slice.call(arguments,2))}("onpageload"),t=Za.unique(function(e){var t=[]
if(gt.browser.isIE()&&gt.browser.version.major<11)return wv("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[]
if(pS)return wv("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]
if(e.types)return iS(e.types,(function(e){t=t.concat(rS.select(e.selector))})),t
if(e.selector)return rS.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":var n=e.elements||""
0<n.length&&iS(oS(n),(function(e){var n=rS.get(e)
n?t.push(n):iS(document.forms,(function(n){iS(n.elements,(function(n){n.name===e&&(e="mce_editor_"+uS++,rS.setAttrib(n,"id",e),t.push(n))}))}))}))
break
case"textareas":case"specific_textareas":iS(rS.select("textarea"),(function(n){e.editor_deselector&&i(n,e.editor_deselector)||e.editor_selector&&!i(n,e.editor_selector)||t.push(n)}))}return t}(e)),e.types?iS(e.types,(function(n){Ct.each(t,(function(t){return!rS.is(t,n.selector)||(l(o(t),aS({},e,n),t),!1)}))})):(Ct.each(t,(function(e){var t;(t=n.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(mS(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)})),0===(t=Ct.grep(t,(function(e){return!n.get(e.id)}))).length?a([]):iS(t,(function(t){var n
n=t,e.inline&&n.tagName.toLowerCase()in r?wv("Could not initialize inline editor on invalid inline target element",t):l(o(t),e,t)})))}
return n.settings=e,rS.bind(window,"ready",u),new Sr((function(e){t?e(t):a=function(t){e(t)}}))},get:function(e){return 0===arguments.length?lS.slice(0):k(e)?K(lS,(function(t){return t.id===e})).getOr(null):D(e)&&lS[e]?lS[e]:null},add:function(e){var t=this
return cS[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(cS[e.id]=e),cS.push(e),lS.push(e)),dS(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),nS||(nS=function(e){var n=t.fire("BeforeUnload")
if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",nS))),e},createEditor:function(e,t){return this.add(new eS(e,t,this))},remove:function(e){var t,n,r=this
if(e){if(!k(e))return n=e,A(r.get(n.id))?null:(mS(n)&&r.fire("RemoveEditor",{editor:n}),0===lS.length&&window.removeEventListener("beforeunload",nS),n.remove(),dS(0<lS.length),n)
iS(rS.select(e),(function(e){(n=r.get(e.id))&&r.remove(n)}))}else for(t=lS.length-1;0<=t;t--)r.remove(lS[t])},execCommand:function(e,t,n){var r=this.get(n)
switch(e){case"mceAddEditor":return this.get(n)||new eS(n,this.settings,this).render(),!0
case"mceRemoveEditor":return r&&r.remove(),!0
case"mceToggleEditor":return r?(r.isHidden()?r.show():r.hide(),!0):(this.execCommand("mceAddEditor",0,n),!0)}return!!this.activeEditor&&this.activeEditor.execCommand(e,t,n)},triggerSave:function(){iS(lS,(function(e){e.save()}))},addI18n:function(e,t){yu.add(e,t)},translate:function(e){return yu.translate(e)},setActive:function(e){var t=this.activeEditor
this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl:function(e){this.baseURL=new Kx(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new Kx(this.baseURL)}})
gS.setup()
var hS,vS,yS,bS,CS=Math.min,wS=Math.max,xS=Math.round,SS=function(e,t,n){var r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,s=t.h,c=(n||"").split("")
return"b"===c[0]&&(o+=s),"r"===c[1]&&(r+=u),"c"===c[0]&&(o+=xS(s/2)),"c"===c[1]&&(r+=xS(u/2)),"b"===c[3]&&(o-=a),"r"===c[4]&&(r-=i),"c"===c[3]&&(o-=xS(a/2)),"c"===c[4]&&(r-=xS(i/2)),NS(r,o,i,a)},NS=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},ES={inflate:function(e,t,n){return NS(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:SS,findBestRelativePosition:function(e,t,n,r){for(var o,i=0;i<r.length;i++)if((o=SS(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i]
return null},intersect:function(e,t){var n=wS(e.x,t.x),r=wS(e.y,t.y),o=CS(e.x+e.w,t.x+t.w),i=CS(e.y+e.h,t.y+t.h)
return o-n<0||i-r<0?null:NS(n,r,o-n,i-r)},clamp:function(e,t,n){var r=e.x,o=e.y,i=e.x+e.w,a=e.y+e.h,u=t.x+t.w,s=t.y+t.h,c=wS(0,t.x-r),l=wS(0,t.y-o),f=wS(0,i-u),d=wS(0,a-s)
return r+=c,o+=l,n&&(i+=c,a+=l,r-=f,o-=d),NS(r,o,(i-=f)-r,(a-=d)-o)},create:NS,fromClientRect:function(e){return NS(e.left,e.top,e.width,e.height)}},kS=(hS={},vS={},{load:function(e,t){var n='Script at URL "'+t+'" failed to load',r='Script at URL "'+t+"\" did not call `tinymce.Resource.add('"+e+"', data)` within 1 second"
if(void 0!==hS[e])return hS[e]
var o=new Sr((function(o,i){var a=function(e,t,n){void 0===n&&(n=1e3)
var r=!1,o=null,i=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
r||(r=!0,null!==o&&(clearTimeout(o),o=null),e.apply(null,t))}},a=i(e),u=i(t)
return{start:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
r||null!==o||(o=setTimeout((function(){return u.apply(null,e)}),n))},resolve:a,reject:u}}(o,i)
vS[e]=a.resolve,fu.ScriptLoader.loadScript(t,(function(){return a.start(r)}),(function(){return a.reject(n)}))}))
return hS[e]=o},add:function(e,t){void 0!==vS[e]&&(vS[e](t),delete vS[e]),hS[e]=Sr.resolve(t)}}),_S=Ct.each,RS=Ct.extend,AS=function(){}
AS.extend=yS=function(e){var t=this.prototype,n=function(){var e,t,n
if(!bS&&(this.init&&this.init.apply(this,arguments),t=this.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(this,arguments)},r=function(){return this}
bS=!0
var o=new this
return bS=!1,e.Mixins&&(_S(e.Mixins,(function(t){for(var n in t)"init"!==n&&(e[n]=t[n])})),t.Mixins&&(e.Mixins=t.Mixins.concat(e.Mixins))),e.Methods&&_S(e.Methods.split(","),(function(t){e[t]=r})),e.Properties&&_S(e.Properties.split(","),(function(t){var n="_"+t
e[t]=function(e){return void 0!==e?(this[n]=e,this):this[n]}})),e.Statics&&_S(e.Statics,(function(e,t){n[t]=e})),e.Defaults&&t.Defaults&&(e.Defaults=RS({},t.Defaults,e.Defaults)),oe(e,(function(e,n){var r,i
"function"==typeof e&&t[n]?o[n]=(r=n,i=e,function(){var e=this._super
this._super=t[r]
var n=i.apply(this,arguments)
return this._super=e,n}):o[n]=e})),n.prototype=o,(n.constructor=n).extend=yS,n}
var TS=Math.min,OS=Math.max,BS=Math.round,PS={serialize:function(e){var t=JSON.stringify(e)
return k(t)?t.replace(/[\u0080-\uFFFF]/g,(function(e){var t=e.charCodeAt(0).toString(16)
return"\\u"+"0000".substring(t.length)+t})):t},parse:function(e){try{return JSON.parse(e)}catch(t){}}},DS={callbacks:{},count:0,send:function(e){var t=this,n=uu.DOM,r=void 0!==e.count?e.count:t.count,o="tinymce_jsonp_"+r
t.callbacks[r]=function(i){n.remove(o),delete t.callbacks[r],e.callback(i)},n.add(n.doc.body,"script",{id:o,src:e.url,type:"text/javascript"}),t.count++}},LS=we(we({},Rx),{send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||1e4<n++?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,1e4<n?"TIMED_OUT":"GENERAL",t,e),t=null):Dr.setTimeout(r,10)}
if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",LS.fire("beforeInitialize",{settings:e}),(t=new XMLHttpRequest).overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&Ct.each(e.requestheaders,(function(e){t.setRequestHeader(e.key,e.value)})),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=LS.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r()
Dr.setTimeout(r,10)}}),IS=Ct.extend,MS=(FS.sendRPC=function(e){return(new FS).send(e)},FS.prototype.send=function(e){var t=e.error,n=e.success,r=IS(this.settings,e)
r.success=function(e,o){void 0===(e=PS.parse(e))&&(e={error:"JSON Parse error."}),e.error?t.call(r.error_scope||r.scope,e.error,o):n.call(r.success_scope||r.scope,e.result)},r.error=function(e,n){t&&t.call(r.error_scope||r.scope,e,n)},r.data=PS.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params}),r.content_type="application/json",LS.send(r)},FS)
function FS(e){this.settings=IS({},e),this.count=0}try{var US,zS="__storage_test__";(US=window.localStorage).setItem(zS,zS),US.removeItem(zS)}catch(qS){US=function(){return e={},t=[],n={getItem:function(t){return e[t]||null},setItem:function(n,r){t.push(n),e[n]=String(r)},key:function(e){return t[e]},removeItem:function(n){t=t.filter((function(e){return e===n})),delete e[n]},clear:function(){t=[],e={}},length:0},Object.defineProperty(n,"length",{get:function(){return t.length},configurable:!1,enumerable:!1}),n
var e,t,n}()}var jS,HS={geom:{Rect:ES},util:{Promise:Sr,Delay:Dr,Tools:Ct,VK:Sf,URI:Kx,Class:AS,EventDispatcher:Nx,Observable:Rx,I18n:yu,XHR:LS,JSON:PS,JSONRequest:MS,JSONP:DS,LocalStorage:US,Color:function(e){var t={},n=0,r=0,o=0,i=function(e){var i
return"object"==typeof e?"r"in e?(n=e.r,r=e.g,o=e.b):"v"in e&&function(e,t,i){if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,i=parseInt(i,10)/100,t=OS(0,TS(t,1)),i=OS(0,TS(i,1)),0!==t){var a=e/60,u=i*t,s=u*(1-Math.abs(a%2-1)),c=i-u
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
default:n=r=o=0}n=BS(255*(n+c)),r=BS(255*(r+c)),o=BS(255*(o+c))}else n=r=o=BS(255*i)}(e.h,e.s,e.v):(i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(n=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10)):(i=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16)):(i=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(n=parseInt(i[1]+i[1],16),r=parseInt(i[2]+i[2],16),o=parseInt(i[3]+i[3],16)),n=n<0?0:255<n?255:n,r=r<0?0:255<r?255:r,o=o<0?0:255<o?255:o,t}
return e&&i(e),t.toRgb=function(){return{r:n,g:r,b:o}},t.toHsv=function(){return e=n,t=r,i=o,u=0,(s=TS(e/=255,TS(t/=255,i/=255)))===(c=OS(e,OS(t,i)))?{h:0,s:0,v:100*(u=s)}:(a=(c-s)/c,{h:BS(60*((e===s?3:i===s?1:5)-(e===s?t-i:i===s?e-t:i-e)/((u=c)-s))),s:BS(100*a),v:BS(100*u)})
var e,t,i,a,u,s,c},t.toHex=function(){var e=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e}
return"#"+e(n)+e(r)+e(o)},t.parse=i,t}},dom:{EventUtils:mi,Sizzle:ma,DomQuery:Za,TreeWalker:Fr,TextSeeker:Hu,DOMUtils:uu,ScriptLoader:fu,RangeUtils:Vf,Serializer:jh,StyleSheetLoader:Lr,ControlSelection:Ef,BookmarkManager:Cf,Selection:Ch,Event:mi.Event},html:{Styles:ii,Entities:Ko,Node:Vd,Schema:ri,SaxParser:Qd,DomParser:Fh,Writer:Wd,Serializer:Kd},Env:gt,AddOnManager:wu,Annotator:vf,Formatter:Lv,UndoManager:Iv,EditorCommands:px,WindowManager:gv,NotificationManager:dv,EditorObservable:Px,Shortcuts:zx,Editor:eS,FocusManager:Nd,EditorManager:gS,DOM:uu.DOM,ScriptLoader:fu.ScriptLoader,PluginManager:mv,ThemeManager:pv,IconManager:ov,Resource:kS,trim:Ct.trim,isArray:Ct.isArray,is:Ct.is,toArray:Ct.toArray,makeMap:Ct.makeMap,each:Ct.each,map:Ct.map,grep:Ct.grep,inArray:Ct.inArray,extend:Ct.extend,create:Ct.create,walk:Ct.walk,createNS:Ct.createNS,resolve:Ct.resolve,explode:Ct.explode,_addCacheSuffix:Ct._addCacheSuffix,isOpera:gt.opera,isWebKit:gt.webkit,isIE:gt.ie,isGecko:gt.gecko,isMac:gt.mac},VS=Ct.extend(gS,HS)
jS=VS,window.tinymce=jS,window.tinyMCE=jS,function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(VS)}()

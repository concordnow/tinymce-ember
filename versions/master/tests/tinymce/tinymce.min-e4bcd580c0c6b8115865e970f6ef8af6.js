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
return e.apply(null,o)}}var d,m,p,g=function(e){return function(t){return!e(t)}},h=function(e){return function(){throw new Error(e)}},v=function(e){e()},y=c(!1),b=c(!0),C=function(){return w},w=(d=function(e){return e.isNone()},{fold:function(e,t){return e()},is:y,isSome:y,isNone:b,getOr:p=function(e){return e},getOrThunk:m=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(void 0),or:p,orThunk:m,map:C,each:u,bind:C,exists:y,forall:b,filter:C,equals:d,equals_:d,toArray:function(){return[]},toString:c("none()")}),x=function(e){var t=c(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:b,isNone:y,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return x(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:w},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(y,(function(t){return n(e,t)}))}}
return o},S={some:x,none:C,from:function(e){return null==e?w:x(e)}},N=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},E=function(e){return function(t){return typeof t===e}},k=function(e){return function(t){return e===t}},_=N("string"),A=N("object"),R=N("array"),T=k(null),O=E("boolean"),B=k(void 0),P=function(e){return null==e},D=function(e){return!P(e)},L=E("function"),I=E("number"),M=Array.prototype.slice,F=Array.prototype.indexOf,U=Array.prototype.push,z=function(e,t){return F.call(e,t)},j=function(e,t){return-1<z(e,t)},H=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0
return!1},V=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},q=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},$=function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n)},W=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n},K=function(e,t,n){return $(e,(function(e){n=t(n,e)})),n},X=function(e,t,n){return q(e,(function(e){n=t(n,e)})),n},Y=function(e,t){return function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return S.some(i)
if(n(i,r))break}return S.none()}(e,t,y)},G=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return S.some(n)
return S.none()},J=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!R(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
U.apply(t,e[n])}return t}(V(e,t))},Q=function(e,t){for(var n=0,r=e.length;n<r;++n)if(!0!==t(e[n],n))return!1
return!0},Z=function(e){var t=M.call(e,0)
return t.reverse(),t},ee=function(e,t){return W(e,(function(e){return!j(t,e)}))},te=function(e,t){return 0<=t&&t<e.length?S.some(e[t]):S.none()},ne=function(e){return te(e,0)},re=function(e){return te(e,e.length-1)},oe=L(Array.from)?Array.from:function(e){return M.call(e)},ie=Object.keys,ae=Object.hasOwnProperty,ue=function(e,t){for(var n=ie(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}},se=function(e,t){return ce(e,(function(e,n){return{k:n,v:t(e,n)}}))},ce=function(e,t){var n={}
return ue(e,(function(e,r){var o=t(e,r)
n[o.k]=o.v})),n},le=function(e){return function(t,n){e[n]=t}},fe=function(e,t,n,r){return ue(e,(function(e,o){(t(e,o)?n:r)(e,o)})),{}},de=function(e,t){var n={},r={}
return fe(e,t,le(n),le(r)),{t:n,f:r}},me=function(e,t){var n={}
return fe(e,t,le(n),u),n},pe=function(e,t){return ge(e,t)?S.from(e[t]):S.none()},ge=function(e,t){return ae.call(e,t)},he=function(e,t){return ge(e,t)&&void 0!==e[t]&&null!==e[t]},ve=Array.isArray,ye=function(e,t,n){var r,o
if(!e)return!1
if(n=n||e,void 0!==e.length){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return!1}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return!1
return!0},be=function(e,t){var n=[]
return ye(e,(function(r,o){n.push(t(r,o,e))})),n},Ce=function(e,t){var n=[]
return ye(e,(function(r,o){t&&!t(r,o,e)||n.push(r)})),n},we=function(e,t){if(e)for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},xe=function(e,t,n,r){for(var o=B(n)?e[0]:n,i=0;i<e.length;i++)o=t.call(r,o,e[i],i)
return o},Se=function(e,t,n){for(var r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r
return-1},Ne=function(e){return e[e.length-1]},Ee=function(){return(Ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function ke(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),o=0
for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a]
return r}var _e,Ae,Re,Te,Oe,Be,Pe=function(){return De(0,0)},De=function(e,t){return{major:e,minor:t}},Le=function(e,t){var n=String(t).toLowerCase()
return 0===e.length?Pe():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,t)
if(!n)return{major:0,minor:0}
var r=function(e){return Number(t.replace(n,"$"+e))}
return De(r(1),r(2))}(e,n)},Ie=Pe,Me=function(e,t){var n=String(t).toLowerCase()
return Y(e,(function(e){return e.search(n)}))},Fe=function(e,t){return-1!==e.indexOf(t)},Ue=function(e,t){return n=e,0,""===(r=t)||n.length>=r.length&&n.substr(0,0+r.length)===r
var n,r},ze=function(e){return function(t){return t.replace(e,"")}},je=ze(/^\s+|\s+$/g),He=ze(/^\s+/g),Ve=ze(/\s+$/g),qe=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,$e=function(e){return function(t){return Fe(t,e)}},We=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Fe(e,"edge/")&&Fe(e,"chrome")&&Fe(e,"safari")&&Fe(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,qe],search:function(e){return Fe(e,"chrome")&&!Fe(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Fe(e,"msie")||Fe(e,"trident")}},{name:"Opera",versionRegexes:[qe,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:$e("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:$e("firefox")},{name:"Safari",versionRegexes:[qe,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Fe(e,"safari")||Fe(e,"mobile/"))&&Fe(e,"applewebkit")}}],Ke=[{name:"Windows",search:$e("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Fe(e,"iphone")||Fe(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:$e("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:$e("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:$e("linux"),versionRegexes:[]},{name:"Solaris",search:$e("sunos"),versionRegexes:[]},{name:"FreeBSD",search:$e("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:$e("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Xe={browsers:c(We),oses:c(Ke)},Ye="Firefox",Ge=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isEdge:r("Edge"),isChrome:r("Chrome"),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r(Ye),isSafari:r("Safari")}},Je=function(){return Ge({current:void 0,version:Ie()})},Qe=Ge,Ze=(c("Edge"),c("Chrome"),c("IE"),c("Opera"),c(Ye),c("Safari"),"Windows"),et="Android",tt="Solaris",nt="FreeBSD",rt="ChromeOS",ot=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isWindows:r(Ze),isiOS:r("iOS"),isAndroid:r(et),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(tt),isFreeBSD:r(nt),isChromeOS:r(rt)}},it=function(){return ot({current:void 0,version:Ie()})},at=ot,ut=(c(Ze),c("iOS"),c(et),c("Linux"),c("OSX"),c(tt),c(nt),c(rt),function(e,t){var n,r,o,i,a,u,s,l,f,d,m,p,g=Xe.browsers(),h=Xe.oses(),v=function(e,t){return Me(e,t).map((function(e){var n=Le(e.versionRegexes,t)
return{current:e.name,version:n}}))}(g,e).fold(Je,Qe),y=function(e,t){return Me(e,t).map((function(e){var n=Le(e.versionRegexes,t)
return{current:e.name,version:n}}))}(h,e).fold(it,at)
return{browser:v,os:y,deviceType:(r=v,o=e,i=t,a=(n=y).isiOS()&&!0===/ipad/i.test(o),u=n.isiOS()&&!a,s=n.isiOS()||n.isAndroid(),l=s||i("(pointer:coarse)"),f=a||!u&&s&&i("(min-device-width:768px)"),d=u||s&&!f,m=r.isSafari()&&n.isiOS()&&!1===/safari/i.test(o),p=!d&&!f&&!m,{isiPad:c(a),isiPhone:c(u),isTablet:c(f),isPhone:c(d),isTouch:c(l),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:c(m),isDesktop:c(p)})}}),st=function(e){return window.matchMedia(e).matches},ct=(Re=!(_e=function(){return ut(navigator.userAgent,st)}),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return Re||(Re=!0,Ae=_e.apply(null,e)),Ae}),lt=function(){return ct()},ft=navigator.userAgent,dt=lt(),mt=dt.browser,pt=dt.os,gt=dt.deviceType,ht=/WebKit/.test(ft)&&!mt.isEdge(),vt="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,yt=-1!==ft.indexOf("Windows Phone"),bt={opera:mt.isOpera(),webkit:ht,ie:!(!mt.isIE()&&!mt.isEdge())&&mt.version.major,gecko:mt.isFirefox(),mac:pt.isOSX()||pt.isiOS(),iOS:gt.isiPad()||gt.isiPhone(),android:pt.isAndroid(),contentEditable:!0,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:!0,range:window.getSelection&&"Range"in window,documentMode:mt.isIE()?document.documentMode||7:10,fileApi:vt,ceFalse:!0,cacheSuffix:null,container:null,experimentalShadowDom:!1,canHaveCSP:!mt.isIE(),desktop:gt.isDesktop(),windowsPhone:yt,browser:{current:mt.current,version:mt.version,isChrome:mt.isChrome,isEdge:mt.isEdge,isFirefox:mt.isFirefox,isIE:mt.isIE,isOpera:mt.isOpera,isSafari:mt.isSafari},os:{current:pt.current,version:pt.version,isAndroid:pt.isAndroid,isChromeOS:pt.isChromeOS,isFreeBSD:pt.isFreeBSD,isiOS:pt.isiOS,isLinux:pt.isLinux,isOSX:pt.isOSX,isSolaris:pt.isSolaris,isWindows:pt.isWindows},deviceType:{isDesktop:gt.isDesktop,isiPad:gt.isiPad,isiPhone:gt.isiPhone,isPhone:gt.isPhone,isTablet:gt.isTablet,isTouch:gt.isTouch,isWebView:gt.isWebView}},Ct=/^\s*|\s*$/g,wt=function(e){return null==e?"":(""+e).replace(Ct,"")},xt=function(e,t){return t?!("array"!==t||!ve(e))||typeof e===t:void 0!==e},St=function(e,t,n,r){r=r||this,e&&(n&&(e=e[n]),ye(e,(function(e,o){return!1!==t.call(r,e,o,n)&&void St(e,t,n,r)})))},Nt={trim:wt,isArray:ve,is:xt,toArray:function(e){if(ve(e))return e
for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n]
return t},makeMap:function(e,t,n){var r
for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={}
return n},each:ye,map:be,grep:Ce,inArray:we,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=0;r<t.length;r++){var o,i=t[r]
for(var a in i)!i.hasOwnProperty(a)||void 0!==(o=i[a])&&(e[a]=o)}return e},create:function(e,t,n){var r,o,i,a=this,u=0,s=(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],c=a.createNS(e[3].replace(/\.\w+$/,""),n)
if(!c[s]){if("static"===e[2])return c[s]=t,void(this.onCreate&&this.onCreate(e[2],e[3],c[s]))
t[s]||(t[s]=function(){},u=1),c[s]=t[s],a.extend(c[s].prototype,t),e[5]&&(r=a.resolve(e[5]).prototype,o=e[5].match(/\.(\w+)$/i)[1],i=c[s],c[s]=u?function(){return r[o].apply(this,arguments)}:function(){return this.parent=r[o],i.apply(this,arguments)},c[s].prototype[s]=c[s],a.each(r,(function(e,t){c[s].prototype[t]=r[t]})),a.each(t,(function(e,t){r[t]?c[s].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==s&&(c[s].prototype[t]=e)}))),a.each(t.static,(function(e,t){c[s][t]=e}))}},walk:St,createNS:function(e,t){var n,r
for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r]
return t},resolve:function(e,t){var n,r
for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||xt(e,"array")?e:be(e.split(t||","),wt)},_addCacheSuffix:function(e){var t=bt.cacheSuffix
return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},Et=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},kt=function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return Et(n.childNodes[0])},_t=function(e,t){var n=(t||document).createElement(e)
return Et(n)},At=function(e,t){var n=(t||document).createTextNode(e)
return Et(n)},Rt=Et,Tt=function(e,t){for(var n=[],r=function(e){return n.push(e),t(e)},o=t(e);(o=o.bind(r)).isSome(););return n},Ot=function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},Bt=function(e){return 1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount},Pt=function(e,t){return e.dom===t.dom},Dt=function(e,t){return lt().browser.isIE()?function(e,t){return n=e.dom,r=t.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(n.compareDocumentPosition(r)&o)
var n,r,o}(e,t):(n=t,(r=e.dom)!==(o=n.dom)&&r.contains(o))
var n,r,o},Lt=("undefined"!=typeof window||Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),It=function(e){return e.dom.nodeType},Mt=function(e){return function(t){return It(t)===e}},Ft=Mt(1),Ut=Mt(3),zt=Mt(9),jt=Mt(11),Ht=function(e){return Rt(e.dom.ownerDocument)},Vt=function(e){return zt(e)?e:Ht(e)},qt=function(e){return Rt(Vt(e).dom.defaultView)},$t=function(e){return S.from(e.dom.parentNode).map(Rt)},Wt=function(e){return S.from(e.dom.previousSibling).map(Rt)},Kt=function(e){return S.from(e.dom.nextSibling).map(Rt)},Xt=function(e){return Z(Tt(e,Wt))},Yt=function(e){return Tt(e,Kt)},Gt=function(e){return V(e.dom.childNodes,Rt)},Jt=function(e,t){var n=e.dom.childNodes
return S.from(n[t]).map(Rt)},Qt=function(e){return Jt(e,0)},Zt=function(e){return Jt(e,e.dom.childNodes.length-1)},en=function(e){return jt(e)},tn=L(Element.prototype.attachShadow)&&L(Node.prototype.getRootNode),nn=c(tn),rn=tn?function(e){return Rt(e.dom.getRootNode())}:Vt,on=function(e){return en(e)?e:function(e){var t=e.dom.head
if(null==t)throw new Error("Head is not available yet")
return Rt(t)}(Vt(e))},an=function(e){return Rt(e.dom.host)},un=function(e,t){$t(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},sn=function(e,t){Kt(e).fold((function(){$t(e).each((function(e){ln(e,t)}))}),(function(e){un(e,t)}))},cn=function(e,t){Qt(e).fold((function(){ln(e,t)}),(function(n){e.dom.insertBefore(t.dom,n.dom)}))},ln=function(e,t){e.dom.appendChild(t.dom)},fn=function(e,t){q(t,(function(t){ln(e,t)}))},dn=function(e){e.dom.textContent="",q(Gt(e),(function(e){mn(e)}))},mn=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},pn=function(e){var t,n=Gt(e)
0<n.length&&(t=e,q(n,(function(e){un(t,e)}))),mn(e)},gn=function(e){var t=Ut(e)?e.dom.parentNode:e.dom
if(null==t||null===t.ownerDocument)return!1
var n,r,o,i,a=t.ownerDocument
return o=Rt(t),i=rn(o),(en(i)?S.some(i):S.none()).fold((function(){return a.body.contains(t)}),(n=gn,r=an,function(e){return n(r(e))}))},hn=function(e,t){return{left:e,top:t,translate:function(n,r){return hn(e+n,t+r)}}},vn=hn,yn=function(e,t){return void 0!==e?e:void 0!==t?t:0},bn=function(e){var t,n=e.dom,r=n.ownerDocument.body
return r===n?vn(r.offsetLeft,r.offsetTop):gn(e)?(t=n.getBoundingClientRect(),vn(t.left,t.top)):vn(0,0)},Cn=function(e){var t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop
return vn(n,r)},wn=function(e,t,n){var r=(void 0!==n?n.dom:document).defaultView
r&&r.scrollTo(e,t)},xn=function(e,t){lt().browser.isSafari()&&L(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)},Sn=function(e,t,n,r){return{x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}},Nn=function(e){var t,n,r=void 0===e?window:e,o=r.document,i=Cn(Rt(o))
return n=void 0===(t=r)?window:t,S.from(n.visualViewport).fold((function(){var e=r.document.documentElement,t=e.clientWidth,n=e.clientHeight
return Sn(i.left,i.top,t,n)}),(function(e){return Sn(Math.max(e.pageLeft,i.left),Math.max(e.pageTop,i.top),e.width,e.height)}))},En=function(e){return function(t){return!!t&&t.nodeType===e}},kn=function(e){return!!e&&!Object.getPrototypeOf(e)},_n=En(1),An=function(e){var t=e.map((function(e){return e.toLowerCase()}))
return function(e){if(e&&e.nodeName){var n=e.nodeName.toLowerCase()
return j(t,n)}return!1}},Rn=function(e,t){var n=t.toLowerCase().split(" ")
return function(t){var r
if(_n(t))for(r=0;r<n.length;r++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
if((o?o.getPropertyValue(e):null)===n[r])return!0}return!1}},Tn=function(e){return function(t){return _n(t)&&t.hasAttribute(e)}},On=function(e){return _n(e)&&e.hasAttribute("data-mce-bogus")},Bn=function(e){return _n(e)&&"TABLE"===e.tagName},Pn=function(e){return function(t){if(_n(t)){if(t.contentEditable===e)return!0
if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}},Dn=An(["textarea","input"]),Ln=En(3),In=En(8),Mn=En(9),Fn=En(11),Un=An(["br"]),zn=An(["img"]),jn=Pn("true"),Hn=Pn("false"),Vn=An(["td","th"]),qn=An(["video","audio","object","embed"]),$n=function(e){return void 0!==e.style&&L(e.style.getPropertyValue)},Wn=function(e,t,n){if(!(_(n)||O(n)||I(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")},Kn=function(e,t,n){Wn(e.dom,t,n)},Xn=function(e,t){var n=e.dom
ue(t,(function(e,t){Wn(n,t,e)}))},Yn=function(e,t){var n=e.dom.getAttribute(t)
return null===n?void 0:n},Gn=function(e,t){return S.from(Yn(e,t))},Jn=function(e,t){e.dom.removeAttribute(t)},Qn=function(e,t){var n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t)
return""!==r||gn(e)?r:Zn(n,t)},Zn=function(e,t){return $n(e)?e.style.getPropertyValue(t):""},er=function(e,t){var n=e.dom,r=Zn(n,t)
return S.from(r).filter((function(e){return 0<e.length}))},tr=function(e){var t={},n=e.dom
if($n(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r)
t[o]=n.style[o]}return t},nr=lt().browser,rr=function(e){return Y(e,Ft)},or=function(e,t){return e.children&&j(e.children,t)},ir={},ar={exports:ir}
Te=void 0,Oe=ir,Be=ar,function(e){"object"==typeof Oe&&void 0!==Be?Be.exports=e():"function"==typeof Te&&Te.amd?Te([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=e()}((function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s=!1
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
var ur=ar.exports.boltExport,sr=function(e){var t=S.none(),n=[],r=function(e){o()?i(e):n.push(e)},o=function(){return t.isSome()},i=function(e){t.each((function(t){setTimeout((function(){e(t)}),0)}))}
return e((function(e){o()||(t=S.some(e),function(e){q(e,i)}(n),n=[])})),{get:r,map:function(e){return sr((function(t){r((function(n){t(e(n))}))}))},isReady:o}},cr={nu:sr,pure:function(e){return sr((function(t){t(e)}))}},lr=function(e){setTimeout((function(){throw e}),0)},fr=function(e){var t=function(t){e().then(t,lr)}
return{map:function(t){return fr((function(){return e().then(t)}))},bind:function(t){return fr((function(){return e().then((function(e){return t(e).toPromise()}))}))},anonBind:function(t){return fr((function(){return e().then((function(){return t.toPromise()}))}))},toLazy:function(){return cr.nu(t)},toCached:function(){var t=null
return fr((function(){return null===t&&(t=e()),t}))},toPromise:e,get:t}},dr=function(e){return fr((function(){return new ur(e)}))},mr=function(e){return{is:function(t){return e===t},isValue:b,isError:y,getOr:c(e),getOrThunk:c(e),getOrDie:c(e),or:function(t){return mr(e)},orThunk:function(t){return mr(e)},fold:function(t,n){return n(e)},map:function(t){return mr(t(e))},mapError:function(t){return mr(e)},each:function(t){t(e)},bind:function(t){return t(e)},exists:function(t){return t(e)},forall:function(t){return t(e)},toOptional:function(){return S.some(e)}}},pr=function(e){return{is:y,isValue:y,isError:b,getOr:l,getOrThunk:function(e){return e()},getOrDie:function(){return h(String(e))()},or:function(e){return e},orThunk:function(e){return e()},fold:function(t,n){return t(e)},map:function(t){return pr(e)},mapError:function(t){return pr(t(e))},each:u,bind:function(t){return pr(e)},exists:y,forall:b,toOptional:S.none}},gr={value:mr,error:pr,fromOption:function(e,t){return e.fold((function(){return pr(t)}),mr)}},hr=function(e){if(!R(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[],n={}
return q(e,(function(r,o){var i=ie(r)
if(1!==i.length)throw new Error("one and only one name per case")
var a=i[0],u=r[a]
if(void 0!==n[a])throw new Error("duplicate key detected:"+a)
if("cata"===a)throw new Error("cannot have a case named cata (sorry)")
if(!R(u))throw new Error("case arguments must be an array")
t.push(a),n[a]=function(){var n=arguments.length
if(n!==u.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+u.length+" ("+u+"), got "+n)
for(var r=new Array(n),i=0;i<r.length;i++)r[i]=arguments[i]
return{fold:function(){if(arguments.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+arguments.length)
return arguments[o].apply(null,r)},match:function(e){var n=ie(e)
if(t.length!==n.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+n.join(","))
if(!Q(t,(function(e){return j(n,e)})))throw new Error("Not all branches were specified when using match. Specified: "+n.join(", ")+"\nRequired: "+t.join(", "))
return e[a].apply(null,r)},log:function(e){console.log(e,{constructors:t,constructor:a,params:r})}}}})),n},vr=(hr([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(e){return e.fold(l,l)})
function yr(e,t,n,r,o){return e(n,r)?S.some(n):L(o)&&o(n)?S.none():t(n,r,o)}var br,Cr,wr,xr,Sr=function(e,t,n){for(var r=e.dom,o=L(n)?n:y;r.parentNode;){r=r.parentNode
var i=Rt(r)
if(t(i))return S.some(i)
if(o(i))break}return S.none()},Nr=function(e,t,n){return yr((function(e,t){return t(e)}),Sr,e,t,n)},Er=function(e,t,n){return Sr(e,(function(e){return Ot(e,t)}),n)},kr=function(e,t){return n=t,o=void 0===(r=e)?document:r.dom,Bt(o)?S.none():S.from(o.querySelector(n)).map(Rt)
var n,r,o},_r=function(e,t,n){return yr(Ot,Er,e,t,n)},Ar=window.Promise?window.Promise:(br=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},wr=(Cr=function(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=null,this._value=null,this._deferreds=[],Lr(e,Rr(Or,this),Rr(Br,this))}).immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)},Cr.prototype.catch=function(e){return this.then(null,e)},Cr.prototype.then=function(e,t){var n=this
return new Cr((function(r,o){Tr.call(n,new Dr(e,t,r,o))}))},Cr.all=function(){var t=Array.prototype.slice.call(1===arguments.length&&br(arguments[0])?arguments[0]:arguments)
return new Cr((function(n,r){if(0===t.length)return n([])
for(var o=t.length,i=0;i<t.length;i++)!function i(a,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var s=u.then
if("function"==typeof s)return void s.call(u,(function(e){i(a,e)}),r)}t[a]=u,0==--o&&n(t)}catch(e){r(e)}}(i,t[i])}))},Cr.resolve=function(e){return e&&"object"==typeof e&&e.constructor===Cr?e:new Cr((function(t){t(e)}))},Cr.reject=function(e){return new Cr((function(t,n){n(e)}))},Cr.race=function(e){return new Cr((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},Cr)
function Rr(e,t){return function(){e.apply(t,arguments)}}function Tr(e){var t=this
null!==this._state?wr((function(){var n,r=t._state?e.onFulfilled:e.onRejected
if(null!==r){try{n=r(t._value)}catch(m){return void e.reject(m)}e.resolve(n)}else(t._state?e.resolve:e.reject)(t._value)})):this._deferreds.push(e)}function Or(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.")
if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then
if("function"==typeof t)return void Lr(Rr(t,e),Rr(Or,this),Rr(Br,this))}this._state=!0,this._value=e,Pr.call(this)}catch(m){Br.call(this,m)}}function Br(e){this._state=!1,this._value=e,Pr.call(this)}function Pr(){for(var e=0,t=this._deferreds.length;e<t;e++)Tr.call(this,this._deferreds[e])
this._deferreds=null}function Dr(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function Lr(e,t,n){var r=!1
try{e((function(e){r||(r=!0,t(e))}),(function(e){r||(r=!0,n(e))}))}catch(l){if(r)return
r=!0,n(l)}}var Ir=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},Mr=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},Fr=function(e,t){var n,r=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
clearTimeout(n),n=Ir((function(){e.apply(this,r)}),t)}
return r.stop=function(){clearTimeout(n)},r},Ur={requestAnimationFrame:function(e,t){xr?xr.then(e):xr=new Ar((function(e){!function(e,t){for(var n=window.requestAnimationFrame,r=["ms","moz","webkit"],o=0;o<r.length&&!n;o++)n=window[r[o]+"RequestAnimationFrame"];(n=n||function(e){window.setTimeout(e,0)})(e,t)}(e,t=t||document.body)})).then(e)},setTimeout:Ir,setInterval:Mr,setEditorTimeout:function(e,t,n){return Ir((function(){e.removed||t()}),n)},setEditorInterval:function(e,t,n){var r=Mr((function(){e.removed?clearInterval(r):t()}),n)
return r},debounce:Fr,throttle:Fr,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}}
function zr(e,t){void 0===t&&(t={})
var n=0,r={},o=Rt(e),i=Vt(o),a=t.maxLoadTime||5e3,u=function(u,s,c){var l,f=Nt._addCacheSuffix(u),d=pe(r,f).getOrThunk((function(){return{id:"mce-u"+n++,passed:[],failed:[],count:0}}));(r[f]=d).count++
var m,p,g,h=function(e,t){for(var n=e.length;n--;)e[n]()
d.status=t,d.passed=[],d.failed=[],l&&(l.onload=null,l.onerror=null,l=null)},v=function(){return h(d.passed,2)},y=function(){return h(d.failed,3)},b=function(){var t
t=b,function(){for(var t=e.styleSheets,n=t.length;n--;){var r=t[n].ownerNode
if(r&&r.id===l.id)return v(),1}}()||(Date.now()-p<a?Ur.setTimeout(t):y())}
s&&d.passed.push(s),c&&d.failed.push(c),1!==d.status&&(2!==d.status?3!==d.status?(d.status=1,m=_t("link",i.dom),Xn(m,{rel:"stylesheet",type:"text/css",id:d.id}),p=Date.now(),t.contentCssCors&&Kn(m,"crossOrigin","anonymous"),t.referrerPolicy&&Kn(m,"referrerpolicy",t.referrerPolicy),(l=m.dom).onload=b,l.onerror=y,g=m,ln(on(o),g),Kn(m,"href",f)):y():v())},l=function(e){return dr((function(t){u(e,s(t,c(gr.value(e))),s(t,c(gr.error(e))))}))},f=function(e){var t=Nt._addCacheSuffix(e)
pe(r,t).each((function(e){var n,i
0==--e.count&&(delete r[t],n=e.id,i=on(o),kr(i,"#"+n).each(mn))}))}
return{load:u,loadAll:function(e,t,n){(function(e,t){return t((function(t){var n=[],r=0
0===e.length?t([]):q(e,(function(o,i){var a
o.get((a=i,function(o){n[a]=o,++r>=e.length&&t(n)}))}))}))})(V(e,l),dr).get((function(e){var r=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a)?n:r).push(a)}return{pass:n,fail:r}}(e,(function(e){return e.isValue()}))
0<r.fail.length?n(r.fail.map(vr)):t(r.pass.map(vr))}))},unload:f,unloadAll:function(e){q(e,(function(e){f(e)}))},_setReferrerPolicy:function(e){t.referrerPolicy=e}}}var jr,Hr=(jr=new WeakMap,{forElement:function(e,t){var n=rn(e).dom
return S.from(jr.get(n)).getOrThunk((function(){var e=zr(n,t)
return jr.set(n,e),e}))}}),Vr=(qr.prototype.current=function(){return this.node},qr.prototype.next=function(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node},qr.prototype.prev=function(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node},qr.prototype.prev2=function(e){return this.node=this.findPreviousNode(this.node,"lastChild","previousSibling",e),this.node},qr.prototype.findSibling=function(e,t,n,r){var o,i
if(e){if(!r&&e[t])return e[t]
if(e!==this.rootNode){if(o=e[n])return o
for(i=e.parentNode;i&&i!==this.rootNode;i=i.parentNode)if(o=i[n])return o}}},qr.prototype.findPreviousNode=function(e,t,n,r){var o,i,a
if(e){if(o=e[n],this.rootNode&&o===this.rootNode)return
if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a
return o}if((i=e.parentNode)&&i!==this.rootNode)return i}},qr)
function qr(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}var $r=function(e){var t
return function(n){return(t=t||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r]
n[String(i)]=t(i,r)}return n}(e,b)).hasOwnProperty(Lt(n))}},Wr=$r(["h1","h2","h3","h4","h5","h6"]),Kr=$r(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),Xr=function(e){return Ft(e)&&!Kr(e)},Yr=function(e){return Ft(e)&&"br"===Lt(e)},Gr=$r(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),Jr=$r(["ul","ol","dl"]),Qr=$r(["li","dd","dt"]),Zr=$r(["thead","tbody","tfoot"]),eo=$r(["td","th"]),to=$r(["pre","script","textarea","style"]),no=" ",ro="\ufeff",oo=function(e){return"\ufeff"===e},io=function(e){return e.replace(/\uFEFF/g,"")},ao=_n,uo=Ln,so=function(e){return uo(e)&&(e=e.parentNode),ao(e)&&e.hasAttribute("data-mce-caret")},co=function(e){return uo(e)&&oo(e.data)},lo=function(e){return so(e)||co(e)},fo=function(e){return e.firstChild!==e.lastChild||!Un(e.firstChild)},mo=function(e){var t=e.container()
return!!Ln(t)&&(t.data.charAt(e.offset())===ro||e.isAtStart()&&co(t.previousSibling))},po=function(e){var t=e.container()
return!!Ln(t)&&(t.data.charAt(e.offset()-1)===ro||e.isAtEnd()&&co(t.nextSibling))},go=function(e){return uo(e)&&e.data[0]===ro},ho=function(e){return uo(e)&&e.data[e.data.length-1]===ro},vo=function(e){return e&&e.hasAttribute("data-mce-caret")?(n=(t=e.getElementsByTagName("br"))[t.length-1],On(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null
var t,n},yo=jn,bo=Hn,Co=Un,wo=Ln,xo=An(["script","style","textarea"]),So=An(["img","input","textarea","hr","iframe","video","audio","object","embed"]),No=An(["table"]),Eo=lo,ko=function(e){return!Eo(e)&&(wo(e)?!xo(e.parentNode):So(e)||Co(e)||No(e)||_o(e))},_o=function(e){return!1===(_n(t=e)&&"true"===t.getAttribute("unselectable"))&&bo(e)
var t},Ao=function(e,t){return ko(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(_o(e))return!1
if(yo(e))return!0}return!0}(e,t)},Ro=/^[ \t\r\n]*$/,To=function(e){return Ro.test(e)},Oo=function(e,t){return ko(e)&&!1===(o=t,Ln(r=e)&&To(r.data)&&!1===function(e,t){var n,r,o=Rt(t)
return n=Rt(e),r=f(Pt,o),Er(n,"pre,code",r).isSome()}(r,o))||_n(n=e)&&"A"===n.nodeName&&!n.hasAttribute("href")&&(n.hasAttribute("name")||n.hasAttribute("id"))||Bo(e)
var n,r,o},Bo=Tn("data-mce-bookmark"),Po=Tn("data-mce-bogus"),Do=("data-mce-bogus","all",function(e){return _n(e)&&"all"===e.getAttribute("data-mce-bogus")}),Lo=function(e,t){return void 0===t&&(t=!0),function(e,t){var n,r=0
if(Oo(e,e))return!1
if(!(n=e.firstChild))return!0
var o=new Vr(n,e)
do{if(t){if(Do(n)){n=o.next(!0)
continue}if(Po(n)){n=o.next()
continue}}if(Un(n))r++,n=o.next()
else{if(Oo(n,e))return!1
n=o.next()}}while(n)
return r<=1}(e.dom,t)},Io=function(e,t){return D(e)&&(Oo(e,t)||Xr(Rt(e)))},Mo=function(e){return"span"===e.nodeName.toLowerCase()&&"bookmark"===e.getAttribute("data-mce-type")},Fo=function(e,t,n){var r=n||t
if(_n(t)&&Mo(t))return t
for(var o,i,a,u=t.childNodes,s=u.length-1;0<=s;s--)Fo(e,u[s],r)
return!_n(t)||1===(o=t.childNodes).length&&Mo(o[0])&&t.parentNode.insertBefore(o[0],t),Fn(a=t)||Mn(a)||Oo(t,r)||_n(i=t)&&0<i.childNodes.length||function(e,t){return Ln(e)&&0<e.data.length&&(o=new Vr(n=e,r=t).prev(!1),i=new Vr(n,r).next(!1),a=B(o)||Io(o,r),u=B(i)||Io(i,r),a&&u)
var n,r,o,i,a,u}(t,r)||e.remove(t),t},Uo=Nt.makeMap,zo=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,jo=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Ho=/[<>&\"\']/g,Vo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,qo={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},$o={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},Wo={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},Ko=function(e,t){var n,r,o,i={}
if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),$o[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r)
return i}},Xo=Ko("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),Yo=function(e,t){return e.replace(t?zo:jo,(function(e){return $o[e]||e}))},Go=function(e,t){return e.replace(t?zo:jo,(function(e){return 1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":$o[e]||"&#"+e.charCodeAt(0)+";"}))},Jo=function(e,t,n){return n=n||Xo,e.replace(t?zo:jo,(function(e){return $o[e]||n[e]||e}))},Qo={encodeRaw:Yo,encodeAllRaw:function(e){return(""+e).replace(Ho,(function(e){return $o[e]||e}))},encodeNumeric:Go,encodeNamed:Jo,getEncodeFunc:function(e,t){var n=Ko(t)||Xo,r=Uo(e.replace(/\+/g,","))
return r.named&&r.numeric?function(e,t){return e.replace(t?zo:jo,(function(e){return void 0!==$o[e]?$o[e]:void 0!==n[e]?n[e]:1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"}))}:r.named?t?function(e,t){return Jo(e,t,n)}:Jo:r.numeric?Go:Yo},decode:function(e){return e.replace(Vo,(function(e,t){return t?65535<(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):qo[t]||String.fromCharCode(t):Wo[e]||Xo[e]||(n=e,(r=_t("div").dom).innerHTML=n,r.textContent||r.innerText||n)
var n,r}))}},Zo={},ei={},ti=Nt.makeMap,ni=Nt.each,ri=Nt.extend,oi=Nt.explode,ii=Nt.inArray,ai=function(e,t){return(e=Nt.trim(e))?e.split(t||" "):[]},ui=function(e,t){var n
return e&&(n={},"string"==typeof e&&(e={"*":e}),ni(e,(function(e,r){n[r]=n[r.toUpperCase()]=("map"===t?ti:oi)(e,/[, ]/)}))),n}
function si(e){var t={},n={},r=[],o={},i={},a=function(t,n,r){var o=e[t]
return o?o=ti(o,/[, ]/,ti(o.toUpperCase(),/[, ]/)):(o=Zo[t])||(o=ti(n," ",ti(n.toUpperCase()," ")),o=ri(o,r),Zo[t]=o),o},u=function(e){var t,n,r,o,i,a,u={},s=function(e,n,r){var o,i,a=function(e,t){for(var n={},r=0,o=e.length;r<o;r++)n[e[r]]=t||{}
return n}
n=n||"","string"==typeof(r=r||[])&&(r=ai(r))
for(var s=ai(e),c=s.length;c--;)i={attributes:a(o=ai([t,n].join(" "))),attributesOrder:o,children:a(r,ei)},u[s[c]]=i},c=function(e,t){for(var n,r,o,i=ai(e),a=i.length,s=ai(t);a--;)for(n=u[i[a]],r=0,o=s.length;r<o;r++)n.attributes[s[r]]={},n.attributesOrder.push(s[r])}
return Zo[e]?Zo[e]:(t="id accesskey class dir lang style tabindex title role",n="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",r="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(t+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",n+=" article aside details dialog figure main header footer hgroup section nav",r+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(t+=" xml:lang",r=[r,a="acronym applet basefont big font strike tt"].join(" "),ni(ai(a),(function(e){s(e,"",r)})),n=[n,i="center dir isindex noframes"].join(" "),o=[n,r].join(" "),ni(ai(i),(function(e){s(e,"",o)}))),o=o||[n,r].join(" "),s("html","manifest","head body"),s("head","","base command link meta noscript script style title"),s("title hr noscript br"),s("base","href target"),s("link","href rel media hreflang type sizes hreflang"),s("meta","name http-equiv content charset"),s("style","media type scoped"),s("script","src async defer type charset"),s("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",o),s("address dt dd div caption","",o),s("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",r),s("blockquote","cite",o),s("ol","reversed start type","li"),s("ul","","li"),s("li","value",o),s("dl","","dt dd"),s("a","href target rel media hreflang type",r),s("q","cite",r),s("ins del","cite datetime",o),s("img","src sizes srcset alt usemap ismap width height"),s("iframe","src name width height",o),s("embed","src type width height"),s("object","data type typemustmatch name usemap form width height",[o,"param"].join(" ")),s("param","name value"),s("map","name",[o,"area"].join(" ")),s("area","alt coords shape href target rel media hreflang type"),s("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),s("colgroup","span","col"),s("col","span"),s("tbody thead tfoot","","tr"),s("tr","","td th"),s("td","colspan rowspan headers",o),s("th","colspan rowspan headers scope abbr",o),s("form","accept-charset action autocomplete enctype method name novalidate target",o),s("fieldset","disabled form name",[o,"legend"].join(" ")),s("label","form for",r),s("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),s("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?o:r),s("select","disabled form multiple name required size","option optgroup"),s("optgroup","disabled label","option"),s("option","disabled label selected value"),s("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),s("menu","type label",[o,"li"].join(" ")),s("noscript","",o),"html4"!==e&&(s("wbr"),s("ruby","",[r,"rt rp"].join(" ")),s("figcaption","",o),s("mark rt rp summary bdi","",r),s("canvas","width height",o),s("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[o,"track source"].join(" ")),s("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[o,"track source"].join(" ")),s("picture","","img source"),s("source","src srcset type media sizes"),s("track","kind src srclang label default"),s("datalist","",[r,"option"].join(" ")),s("article section nav aside main header footer","",o),s("hgroup","","h1 h2 h3 h4 h5 h6"),s("figure","",[o,"figcaption"].join(" ")),s("time","datetime",r),s("dialog","open",o),s("command","type label icon disabled checked radiogroup command"),s("output","for form name",r),s("progress","value max",r),s("meter","value min max low high optimum",r),s("details","open",[o,"summary"].join(" ")),s("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e&&(c("script","language xml:space"),c("style","xml:space"),c("object","declare classid code codebase codetype archive standby align border hspace vspace"),c("embed","align name hspace vspace"),c("param","valuetype type"),c("a","charset name rev shape coords"),c("br","clear"),c("applet","codebase archive code object alt name width height align hspace vspace"),c("img","name longdesc align border hspace vspace"),c("iframe","longdesc frameborder marginwidth marginheight scrolling align"),c("font basefont","size color face"),c("input","usemap align"),c("select"),c("textarea"),c("h1 h2 h3 h4 h5 h6 div p legend caption","align"),c("ul","type compact"),c("li","type"),c("ol dl menu dir","compact"),c("pre","width xml:space"),c("hr","align noshade size width"),c("isindex","prompt"),c("table","summary width frame rules cellspacing cellpadding align bgcolor"),c("col","width align char charoff valign"),c("colgroup","width align char charoff valign"),c("thead","align char charoff valign"),c("tr","align char charoff valign bgcolor"),c("th","axis align char charoff valign nowrap bgcolor width height"),c("form","accept"),c("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),c("tfoot","align char charoff valign"),c("tbody","align char charoff valign"),c("area","nohref"),c("body","background bgcolor text link vlink alink")),"html4"!==e&&(c("input button select textarea","autofocus"),c("input textarea","placeholder"),c("a","download"),c("link script img","crossorigin"),c("img","loading"),c("iframe","sandbox seamless allowfullscreen loading")),ni(ai("a form meter progress dfn"),(function(e){u[e]&&delete u[e].children[e]})),delete u.caption.children.table,delete u.script,Zo[e]=u)}((e=e||{}).schema)
!1===e.verify_html&&(e.valid_elements="*[*]")
var s=ui(e.valid_styles),c=ui(e.invalid_styles,"map"),l=ui(e.valid_classes,"map"),f=a("whitespace_elements","pre script noscript style textarea video audio iframe object code"),d=a("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),m=a("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),p=a("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),g="td th iframe video audio object script code",h=a("non_empty_elements",g+" pre",m),v=a("move_caret_before_on_enter_elements",g+" table",m),y=a("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),b=a("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",y),C=a("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
ni((e.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),(function(e){i[e]=new RegExp("</"+e+"[^>]*>","gi")}))
var w=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},x=function(e){var n,o,i,a,u,s,c,l,f,d,m,p,g,h,v,y,b,C,x=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,S=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,N=/[*?+]/
if(e){var E=ai(e,",")
for(t["@"]&&(y=t["@"].attributes,b=t["@"].attributesOrder),n=0,o=E.length;n<o;n++)if(u=x.exec(E[n])){if(h=u[1],f=u[2],v=u[3],l=u[5],s={attributes:p={},attributesOrder:g=[]},"#"===h&&(s.paddEmpty=!0),"-"===h&&(s.removeEmpty=!0),"!"===u[4]&&(s.removeEmptyAttrs=!0),y&&(ue(y,(function(e,t){p[t]=e})),g.push.apply(g,b)),l)for(i=0,a=(l=ai(l,"|")).length;i<a;i++)if(u=S.exec(l[i])){if(c={},m=u[1],d=u[2].replace(/[\\:]:/g,":"),h=u[3],C=u[4],"!"===m&&(s.attributesRequired=s.attributesRequired||[],s.attributesRequired.push(d),c.required=!0),"-"===m){delete p[d],g.splice(ii(g,d),1)
continue}h&&("="===h&&(s.attributesDefault=s.attributesDefault||[],s.attributesDefault.push({name:d,value:C}),c.defaultValue=C),":"===h&&(s.attributesForced=s.attributesForced||[],s.attributesForced.push({name:d,value:C}),c.forcedValue=C),"<"===h&&(c.validValues=ti(C,"?"))),N.test(d)?(s.attributePatterns=s.attributePatterns||[],c.pattern=w(d),s.attributePatterns.push(c)):(p[d]||g.push(d),p[d]=c)}y||"@"!==f||(y=p,b=g),v&&(s.outputName=f,t[v]=s),N.test(f)?(s.pattern=w(f),r.push(s)):t[f]=s}}},S=function(e){t={},r=[],x(e),ni(u,(function(e,t){n[t]=e.children}))},N=function(e){var r=/^(~)?(.+)$/
e&&(Zo.text_block_elements=Zo.block_elements=null,ni(ai(e,","),(function(e){var i,a=r.exec(e),u="~"===a[1],s=u?"span":"div",c=a[2]
n[c]=n[s],o[c]=s,u||(b[c.toUpperCase()]={},b[c]={}),t[c]||(i=t[s],delete(i=ri({},i)).removeEmptyAttrs,delete i.removeEmpty,t[c]=i),ni(n,(function(e,t){e[s]&&(n[t]=e=ri({},n[t]),e[c]=e[s])}))})))},E=function(t){var r=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/
Zo[e.schema]=null,t&&ni(ai(t,","),(function(e){var t,o,i=r.exec(e)
i&&(o=i[1],t=o?n[i[2]]:n[i[2]]={"#comment":{}},t=n[i[2]],ni(ai(i[3],"|"),(function(e){"-"===o?delete t[e]:t[e]={}})))}))},k=function(e){var n,o=t[e]
if(o)return o
for(n=r.length;n--;)if((o=r[n]).pattern.test(e))return o}
return e.valid_elements?S(e.valid_elements):(ni(u,(function(e,r){t[r]={attributes:e.attributes,attributesOrder:e.attributesOrder},n[r]=e.children})),"html5"!==e.schema&&ni(ai("strong/b em/i"),(function(e){var n=ai(e,"/")
t[n[1]].outputName=n[0]})),ni(ai("ol ul sub sup blockquote span font a table tbody strong em b i"),(function(e){t[e]&&(t[e].removeEmpty=!0)})),ni(ai("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(function(e){t[e].paddEmpty=!0})),ni(ai("span"),(function(e){t[e].removeEmptyAttrs=!0}))),N(e.custom_elements),E(e.valid_children),x(e.extended_valid_elements),E("+ol[ul|ol],+ul[ul|ol]"),ni({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},(function(e,n){t[n]&&(t[n].parentsRequired=ai(e))})),e.invalid_elements&&ni(oi(e.invalid_elements),(function(e){t[e]&&delete t[e]})),k("span")||x("span[!data-mce-type|*]"),{children:n,elements:t,getValidStyles:function(){return s},getValidClasses:function(){return l},getBlockElements:function(){return b},getInvalidStyles:function(){return c},getShortEndedElements:function(){return m},getTextBlockElements:function(){return y},getTextInlineElements:function(){return C},getBoolAttrs:function(){return p},getElementRule:k,getSelfClosingElements:function(){return d},getNonEmptyElements:function(){return h},getMoveCaretBeforeOnEnterElements:function(){return v},getWhiteSpaceElements:function(){return f},getSpecialElements:function(){return i},isValidChild:function(e,t){var r=n[e.toLowerCase()]
return!(!r||!r[t.toLowerCase()])},isValid:function(e,t){var n,r,o=k(e)
if(o){if(!t)return!0
if(o.attributes[t])return!0
if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return o},addValidElements:x,setValidElements:S,addCustomElements:N,addValidChildren:E}}var ci=function(e,t,n,r){var o=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e}
return"#"+o(t)+o(n)+o(r)},li=function(e,t){var n,r,o=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,i=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,a=/\s*([^:]+):\s*([^;]+);?/g,u=/\s+$/,s={},c="\ufeff"
e=e||{},t&&(n=t.getValidStyles(),r=t.getInvalidStyles())
for(var l="\\\" \\' \\; \\: ; : \ufeff".split(" "),f=0;f<l.length;f++)s[l[f]]=c+f,s[c+f]=l[f]
return{toHex:function(e){return e.replace(o,ci)},parse:function(t){var n,r,l,d,m,p,g,h={},v=e.url_converter,y=e.url_converter_scope||this,b=function(e,t,n){var r=h[e+"-top"+t]
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
"font-weight"===r&&"700"===l?l="bold":"color"!==r&&"background-color"!==r||(l=l.toLowerCase()),l=(l=l.replace(o,ci)).replace(i,E),h[r]=d?x(l,!0):l}b("border","",!0),b("border","-width"),b("border","-color"),b("border","-style"),b("padding",""),b("margin",""),"border",p="border-style",g="border-color",C(m="border-width")&&C(p)&&C(g)&&(h.border=h[m]+" "+h[p]+" "+h[g],delete h[m],delete h[p],delete h[g]),"medium none"===h.border&&delete h.border,"none"===h["border-image"]&&delete h["border-image"]}return h},serialize:function(e,t){var o="",i=function(t){var r,i=n[t]
if(i)for(var a=0,u=i.length;a<u;a++)t=i[a],(r=e[t])&&(o+=(0<o.length?" ":"")+t+": "+r+";")}
return t&&n?(i("*"),i(t)):ue(e,(function(e,n){var i,a,u
!e||r&&(i=n,a=t,(u=r["*"])&&u[i]||(u=r[a])&&u[i])||(o+=(0<o.length?" ":"")+n+": "+e+";")})),o}}},fi=/^(?:mouse|contextmenu)|click/,di={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1,mozPressure:1},mi=function(){return!1},pi=function(){return!0},gi=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},hi=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},vi=function(e,t){var n,r,o,i,a,u,s=t||{}
for(n in e)di[n]||(s[n]=e[n])
return s.target||(s.target=s.srcElement||document),s.composedPath&&(s.composedPath=function(){return e.composedPath()}),e&&(a=e,fi.test(a.type))&&void 0===e.pageX&&void 0!==e.clientX&&(o=(r=s.target.ownerDocument||document).documentElement,i=r.body,s.pageX=e.clientX+(o&&o.scrollLeft||i&&i.scrollLeft||0)-(o&&o.clientLeft||i&&i.clientLeft||0),s.pageY=e.clientY+(o&&o.scrollTop||i&&i.scrollTop||0)-(o&&o.clientTop||i&&i.clientTop||0)),s.preventDefault=function(){s.isDefaultPrevented=pi,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},s.stopPropagation=function(){s.isPropagationStopped=pi,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},!(s.stopImmediatePropagation=function(){s.isImmediatePropagationStopped=pi,s.stopPropagation()})==((u=s).isDefaultPrevented===pi||u.isDefaultPrevented===mi)&&(s.isDefaultPrevented=mi,s.isPropagationStopped=mi,s.isImmediatePropagationStopped=mi),void 0===s.metaKey&&(s.metaKey=!1),s},yi=(bi.prototype.bind=function(e,t,n,r){var o,i,a,u,s,c,l=this,f=window,d=function(e){l.executeHandlers(vi(e||f.event),o)}
if(e&&3!==e.nodeType&&8!==e.nodeType){e[l.expando]?o=e[l.expando]:(o=l.count++,e[l.expando]=o,l.events[o]={}),r=r||e
for(var m=t.split(" "),p=m.length;p--;)s=d,u=c=!1,"DOMContentLoaded"===(a=m[p])&&(a="ready"),l.domLoaded&&"ready"===a&&"complete"===e.readyState?n.call(r,vi({type:a})):(l.hasMouseEnterLeave||(u=l.mouseEnterLeave[a])&&(s=function(e){var t=e.currentTarget,n=e.relatedTarget
if(n&&t.contains)n=t.contains(n)
else for(;n&&n!==t;)n=n.parentNode
n||((e=vi(e||f.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,l.executeHandlers(e,o))}),l.hasFocusIn||"focusin"!==a&&"focusout"!==a||(c=!0,u="focusin"===a?"focus":"blur",s=function(e){(e=vi(e||f.event)).type="focus"===e.type?"focusin":"focusout",l.executeHandlers(e,o)}),(i=l.events[o][a])?"ready"===a&&l.domLoaded?n(vi({type:a})):i.push({func:n,scope:r}):(l.events[o][a]=i=[{func:n,scope:r}],i.fakeName=u,i.capture=c,i.nativeHandler=s,"ready"===a?function(e,t,n){var r,o=e.document,i={type:"ready"}
n.domLoaded?t(i):(r=function(){hi(e,"DOMContentLoaded",r),hi(e,"load",r),n.domLoaded||(n.domLoaded=!0,t(i)),e=null},"complete"===o.readyState||"interactive"===o.readyState&&o.body?r():gi(e,"DOMContentLoaded",r),n.domLoaded||gi(e,"load",r))}(e,s,l):gi(e,u||a,s,c)))
return e=i=null,n}},bi.prototype.unbind=function(e,t,n){var r,o,i
if(!e||3===e.nodeType||8===e.nodeType)return this
var a=e[this.expando]
if(a){if(i=this.events[a],t){for(var u,s,c,l,f=t.split(" "),d=f.length;d--;)if(l=i[o=f[d]]){if(n)for(r=l.length;r--;)l[r].func===n&&(u=l.nativeHandler,s=l.fakeName,c=l.capture,(l=l.slice(0,r).concat(l.slice(r+1))).nativeHandler=u,l.fakeName=s,l.capture=c,i[o]=l)
n&&0!==l.length||(delete i[o],hi(e,l.fakeName||o,l.nativeHandler,l.capture))}}else ue(i,(function(t,n){hi(e,t.fakeName||n,t.nativeHandler,t.capture)})),i={}
for(o in i)if(ge(i,o))return this
delete this.events[a]
try{delete e[this.expando]}catch(h){e[this.expando]=null}}return this},bi.prototype.fire=function(e,t,n){var r
if(!e||3===e.nodeType||8===e.nodeType)return this
var o=vi(null,n)
for(o.type=t,o.target=e;(r=e[this.expando])&&this.executeHandlers(o,r),(e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow)&&!o.isPropagationStopped(););return this},bi.prototype.clean=function(e){var t,n
if(!e||3===e.nodeType||8===e.nodeType)return this
if(e[this.expando]&&this.unbind(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(this.unbind(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[this.expando]&&this.unbind(e)
return this},bi.prototype.destroy=function(){this.events={}},bi.prototype.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1},bi.prototype.executeHandlers=function(e,t){var n=this.events[t],r=n&&n[e.type]
if(r)for(var o=0,i=r.length;o<i;o++){var a=r[o]
if(a&&!1===a.func.call(a.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}},bi.Event=new bi,bi)
function bi(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}var Ci,wi,xi,Si,Ni,Ei,ki,_i,Ai,Ri,Ti,Oi,Bi,Pi,Di,Li,Ii,Mi="sizzle"+-new Date,Fi=window.document,Ui=0,zi=0,ji=ba(),Hi=ba(),Vi=ba(),qi=function(e,t){return e===t&&(Ri=!0),0},$i="undefined",Wi={}.hasOwnProperty,Ki=[],Xi=Ki.pop,Yi=Ki.push,Gi=Ki.push,Ji=Ki.slice,Qi=Ki.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t
return-1},Zi="[\\x20\\t\\r\\n\\f]",ea="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ta="\\["+Zi+"*("+ea+")(?:"+Zi+"*([*^$|!~]?=)"+Zi+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ea+"))|)"+Zi+"*\\]",na=":("+ea+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ta+")*)|.*)\\)|)",ra=new RegExp("^"+Zi+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Zi+"+$","g"),oa=new RegExp("^"+Zi+"*,"+Zi+"*"),ia=new RegExp("^"+Zi+"*([>+~]|"+Zi+")"+Zi+"*"),aa=new RegExp("="+Zi+"*([^\\]'\"]*?)"+Zi+"*\\]","g"),ua=new RegExp(na),sa=new RegExp("^"+ea+"$"),ca={ID:new RegExp("^#("+ea+")"),CLASS:new RegExp("^\\.("+ea+")"),TAG:new RegExp("^("+ea+"|[*])"),ATTR:new RegExp("^"+ta),PSEUDO:new RegExp("^"+na),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Zi+"*(even|odd|(([+-]|)(\\d*)n|)"+Zi+"*(?:([+-]|)"+Zi+"*(\\d+)|))"+Zi+"*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^"+Zi+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Zi+"*((?:-\\d)?\\d*)"+Zi+"*\\)|)(?=[^-]|$)","i")},la=/^(?:input|select|textarea|button)$/i,fa=/^h\d$/i,da=/^[^{]+\{\s*\[native \w/,ma=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,pa=/[+~]/,ga=/'|\\/g,ha=new RegExp("\\\\([\\da-f]{1,6}"+Zi+"?|("+Zi+")|.)","ig"),va=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)}
try{Gi.apply(Ki=Ji.call(Fi.childNodes),Fi.childNodes),Ki[Fi.childNodes.length].nodeType}catch(rN){Gi={apply:Ki.length?function(e,t){Yi.apply(e,Ji.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var ya=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m
if((t?t.ownerDocument||t:Fi)!==Oi&&Ti(t),n=n||[],!e||"string"!=typeof e)return n
if(1!==(u=(t=t||Oi).nodeType)&&9!==u)return[]
if(Pi&&!r){if(o=ma.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n
if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&Ii(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return Gi.apply(n,t.getElementsByTagName(e)),n
if((a=o[3])&&Ci.getElementsByClassName)return Gi.apply(n,t.getElementsByClassName(a)),n}if(Ci.qsa&&(!Di||!Di.test(e))){if(f=l=Mi,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(c=Ni(e),(l=t.getAttribute("id"))?f=l.replace(ga,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",s=c.length;s--;)c[s]=f+Ea(c[s])
d=pa.test(e)&&Sa(t.parentNode)||t,m=c.join(",")}if(m)try{return Gi.apply(n,d.querySelectorAll(m)),n}catch(C){}finally{l||t.removeAttribute("id")}}}return ki(e.replace(ra,"$1"),t,n,r)}
function ba(){var e=[]
return function t(n,r){return e.push(n+" ")>wi.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function Ca(e){return e[Mi]=!0,e}function wa(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function xa(e){return Ca((function(t){return t=+t,Ca((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function Sa(e){return e&&typeof e.getElementsByTagName!=$i&&e}function Na(){}function Ea(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function ka(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=zi++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,s,c=[Ui,i]
if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if((u=(s=t[Mi]||(t[Mi]={}))[r])&&u[0]===Ui&&u[1]===i)return c[2]=u[2]
if((s[r]=c)[2]=e(t,n,a))return!0}}}function _a(e){return 1<e.length?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1
return!0}:e[0]}function Aa(e,t,n,r,o){for(var i,a=[],u=0,s=e.length,c=null!=t;u<s;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),c&&t.push(u)))
return a}function Ra(e,t,n,r,o,i){return r&&!r[Mi]&&(r=Ra(r)),o&&!o[Mi]&&(o=Ra(o,i)),Ca((function(i,a,u,s){var c,l,f,d=[],m=[],p=a.length,g=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)ya(e,t[r],n)
return n}(t||"*",u.nodeType?[u]:u,[]),h=!e||!i&&t?g:Aa(g,d,e,u,s),v=n?o||(i?e:p||r)?[]:a:h
if(n&&n(h,v,u,s),r)for(c=Aa(v,m),r(c,[],u,s),l=c.length;l--;)(f=c[l])&&(v[m[l]]=!(h[m[l]]=f))
if(i){if(o||e){if(o){for(c=[],l=v.length;l--;)(f=v[l])&&c.push(h[l]=f)
o(null,v=[],c,s)}for(l=v.length;l--;)(f=v[l])&&-1<(c=o?Qi.call(i,f):d[l])&&(i[c]=!(a[c]=f))}}else v=Aa(v===a?v.splice(p,v.length):v),o?o(null,a,v,s):Gi.apply(a,v)}))}Ci=ya.support={},Si=ya.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},Ti=ya.setDocument=function(e){var t,n=e?e.ownerDocument||e:Fi,r=n.defaultView
return n!==Oi&&9===n.nodeType&&n.documentElement?(Bi=(Oi=n).documentElement,Pi=!Si(n),r&&r!==function(e){try{return e.top}catch(t){}return null}(r)&&(r.addEventListener?r.addEventListener("unload",(function(){Ti()}),!1):r.attachEvent&&r.attachEvent("onunload",(function(){Ti()}))),Ci.attributes=!0,Ci.getElementsByTagName=!0,Ci.getElementsByClassName=da.test(n.getElementsByClassName),Ci.getById=!0,wi.find.ID=function(e,t){if(typeof t.getElementById!=$i&&Pi){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},wi.filter.ID=function(e){var t=e.replace(ha,va)
return function(e){return e.getAttribute("id")===t}},wi.find.TAG=Ci.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!=$i)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e)
if("*"!==e)return i
for(;n=i[o++];)1===n.nodeType&&r.push(n)
return r},wi.find.CLASS=Ci.getElementsByClassName&&function(e,t){if(Pi)return t.getElementsByClassName(e)},Li=[],Di=[],Ci.disconnectedMatch=!0,Di=Di.length&&new RegExp(Di.join("|")),Li=Li.length&&new RegExp(Li.join("|")),t=da.test(Bi.compareDocumentPosition),Ii=t||da.test(Bi.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},qi=t?function(e,t){if(e===t)return Ri=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!Ci.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===Fi&&Ii(Fi,e)?-1:t===n||t.ownerDocument===Fi&&Ii(Fi,t)?1:Ai?Qi.call(Ai,e)-Qi.call(Ai,t):0:4&r?-1:1)}:function(e,t){if(e===t)return Ri=!0,0
var r,o=0,i=e.parentNode,a=t.parentNode,u=[e],s=[t]
if(!i||!a)return e===n?-1:t===n?1:i?-1:a?1:Ai?Qi.call(Ai,e)-Qi.call(Ai,t):0
if(i===a)return wa(e,t)
for(r=e;r=r.parentNode;)u.unshift(r)
for(r=t;r=r.parentNode;)s.unshift(r)
for(;u[o]===s[o];)o++
return o?wa(u[o],s[o]):u[o]===Fi?-1:s[o]===Fi?1:0},n):Oi},ya.matches=function(e,t){return ya(e,null,null,t)},ya.matchesSelector=function(e,t){if((e.ownerDocument||e)!==Oi&&Ti(e),t=t.replace(aa,"='$1']"),Ci.matchesSelector&&Pi&&(!Li||!Li.test(t))&&(!Di||!Di.test(t)))try{var n=(void 0).call(e,t)
if(n||Ci.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(rN){}return 0<ya(t,Oi,null,[e]).length},ya.contains=function(e,t){return(e.ownerDocument||e)!==Oi&&Ti(e),Ii(e,t)},ya.attr=function(e,t){(e.ownerDocument||e)!==Oi&&Ti(e)
var n=wi.attrHandle[t.toLowerCase()],r=n&&Wi.call(wi.attrHandle,t.toLowerCase())?n(e,t,!Pi):void 0
return void 0!==r?r:Ci.attributes||!Pi?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},ya.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ya.uniqueSort=function(e){var t,n=[],r=0,o=0
if(Ri=!Ci.detectDuplicates,Ai=!Ci.sortStable&&e.slice(0),e.sort(qi),Ri){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)e.splice(n[r],1)}return Ai=null,e},xi=ya.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=xi(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=xi(t)
return n},(wi=ya.selectors={cacheLength:50,createPseudo:Ca,match:ca,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ha,va),e[3]=(e[3]||e[4]||e[5]||"").replace(ha,va),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ya.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ya.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return ca.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ua.test(n)&&(t=Ni(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ha,va).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=ji[e+" "]
return t||(t=new RegExp("(^|"+Zi+")"+e+"("+Zi+"|$)"))&&ji(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!=$i&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=ya.attr(r,e)
return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&-1<o.indexOf(n):"$="===t?n&&o.slice(-n.length)===n:"~="===t?-1<(" "+o+" ").indexOf(n):"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t
return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,s){var c,l,f,d,m,p,g=i!=a?"nextSibling":"previousSibling",h=t.parentNode,v=u&&t.nodeName.toLowerCase(),y=!s&&!u
if(h){if(i){for(;g;){for(f=t;f=f[g];)if(u?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1
p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?h.firstChild:h.lastChild],a&&y){for(m=(c=(l=h[Mi]||(h[Mi]={}))[e]||[])[0]===Ui&&c[1],d=c[0]===Ui&&c[2],f=m&&h.childNodes[m];f=++m&&f&&f[g]||(d=m=0)||p.pop();)if(1===f.nodeType&&++d&&f===t){l[e]=[Ui,m,d]
break}}else if(y&&(c=(t[Mi]||(t[Mi]={}))[e])&&c[0]===Ui)d=c[1]
else for(;(f=++m&&f&&f[g]||(d=m=0)||p.pop())&&((u?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++d||(y&&((f[Mi]||(f[Mi]={}))[e]=[Ui,d]),f!==t)););return(d-=o)===r||d%r==0&&0<=d/r}}},PSEUDO:function(e,t){var n,r=wi.pseudos[e]||wi.setFilters[e.toLowerCase()]||ya.error("unsupported pseudo: "+e)
return r[Mi]?r(t):1<r.length?(n=[e,e,"",t],wi.setFilters.hasOwnProperty(e.toLowerCase())?Ca((function(e,n){for(var o,i=r(e,t),a=i.length;a--;)e[o=Qi.call(e,i[a])]=!(n[o]=i[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:Ca((function(e){var t=[],n=[],r=Ei(e.replace(ra,"$1"))
return r[Mi]?Ca((function(e,t,n,o){for(var i,a=r(e,null,o,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),!n.pop()}})),has:Ca((function(e){return function(t){return 0<ya(e,t).length}})),contains:Ca((function(e){return e=e.replace(ha,va),function(t){return-1<(t.textContent||t.innerText||xi(t)).indexOf(e)}})),lang:Ca((function(e){return sa.test(e||"")||ya.error("unsupported lang: "+e),e=e.replace(ha,va).toLowerCase(),function(t){var n
do{if(n=Pi?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===Bi},focus:function(e){return e===Oi.activeElement&&(!Oi.hasFocus||Oi.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!wi.pseudos.empty(e)},header:function(e){return fa.test(e.nodeName)},input:function(e){return la.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:xa((function(){return[0]})),last:xa((function(e,t){return[t-1]})),eq:xa((function(e,t,n){return[n<0?n+t:n]})),even:xa((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:xa((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:xa((function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r)
return e})),gt:xa((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=wi.pseudos.eq,q(["radio","checkbox","file","password","image"],(function(e){var t
wi.pseudos[e]=(t=e,function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t})})),q(["submit","reset"],(function(e){var t
wi.pseudos[e]=(t=e,function(e){var n=e.nodeName.toLowerCase()
return("input"===n||"button"===n)&&e.type===t})})),Na.prototype=wi.filters=wi.pseudos,wi.setFilters=new Na,Ni=ya.tokenize=function(e,t){var n,r,o,i,a,u,s,c=Hi[e+" "]
if(c)return t?0:c.slice(0)
for(a=e,u=[],s=wi.preFilter;a;){for(i in n&&!(r=oa.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=ia.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(ra," ")}),a=a.slice(n.length)),wi.filter)wi.filter.hasOwnProperty(i)&&(!(r=ca[i].exec(a))||s[i]&&!(r=s[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length)))
if(!n)break}return t?a.length:a?ya.error(e):Hi(e,u).slice(0)},Ei=ya.compile=function(e,t){var n,r,o,i,a,u,s=[],c=[],l=Vi[e+" "]
if(!l){for(n=(t=t||Ni(e)).length;n--;)(l=function e(t){for(var n,r,o,i=t.length,a=wi.relative[t[0].type],u=a||wi.relative[" "],s=a?1:0,c=ka((function(e){return e===n}),u,!0),l=ka((function(e){return-1<Qi.call(n,e)}),u,!0),f=[function(e,t,r){return!a&&(r||t!==_i)||((n=t).nodeType?c:l)(e,t,r)}];s<i;s++)if(r=wi.relative[t[s].type])f=[ka(_a(f),r)]
else{if((r=wi.filter[t[s].type].apply(null,t[s].matches))[Mi]){for(o=++s;o<i&&!wi.relative[t[o].type];o++);return Ra(1<s&&_a(f),1<s&&Ea(t.slice(0,s-1).concat({value:" "===t[s-2].type?"*":""})).replace(ra,"$1"),r,s<o&&e(t.slice(s,o)),o<i&&e(t=t.slice(o)),o<i&&Ea(t))}f.push(r)}return _a(f)}(t[n]))[Mi]?s.push(l):c.push(l);(l=Vi(e,(r=c,i=0<(o=s).length,a=0<r.length,u=function(e,t,n,u,s){var c,l,f,d=0,m="0",p=e&&[],g=[],h=_i,v=e||a&&wi.find.TAG("*",s),y=Ui+=null==h?1:Math.random()||.1,b=v.length
for(s&&(_i=t!==Oi&&t);m!==b&&null!=(c=v[m]);m++){if(a&&c){for(l=0;f=r[l++];)if(f(c,t,n)){u.push(c)
break}s&&(Ui=y)}i&&((c=!f&&c)&&d--,e&&p.push(c))}if(d+=m,i&&m!==d){for(l=0;f=o[l++];)f(p,g,t,n)
if(e){if(0<d)for(;m--;)p[m]||g[m]||(g[m]=Xi.call(u))
g=Aa(g)}Gi.apply(u,g),s&&!e&&0<g.length&&1<d+o.length&&ya.uniqueSort(u)}return s&&(Ui=y,_i=h),p},i?Ca(u):u))).selector=e}return l},ki=ya.select=function(e,t,n,r){var o,i,a,u,s,c="function"==typeof e&&e,l=!r&&Ni(e=c.selector||e)
if(n=n||[],1===l.length){if(2<(i=l[0]=l[0].slice(0)).length&&"ID"===(a=i[0]).type&&Ci.getById&&9===t.nodeType&&Pi&&wi.relative[i[1].type]){if(!(t=(wi.find.ID(a.matches[0].replace(ha,va),t)||[])[0]))return n
c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=ca.needsContext.test(e)?0:i.length;o--&&(a=i[o],!wi.relative[u=a.type]);)if((s=wi.find[u])&&(r=s(a.matches[0].replace(ha,va),pa.test(i[0].type)&&Sa(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&Ea(i)))return Gi.apply(n,r),n
break}}return(c||Ei(e,l))(r,t,!Pi,n,pa.test(e)&&Sa(t.parentNode)||t),n},Ci.sortStable=Mi.split("").sort(qi).join("")===Mi,Ci.detectDuplicates=!!Ri,Ti(),Ci.sortDetached=!0
var Ta=document,Oa=Array.prototype.push,Ba=Array.prototype.slice,Pa=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,Da=yi.Event,La=Nt.makeMap("children,contents,next,prev"),Ia=function(e){return void 0!==e},Ma=function(e){return"string"==typeof e},Fa=function(e,t){var n,r=(t=t||Ta).createElement("div"),o=t.createDocumentFragment()
for(r.innerHTML=e;n=r.firstChild;)o.appendChild(n)
return o},Ua=function(e,t,n,r){var o
if(Ma(t))t=Fa(t,Za(e[0]))
else if(t.length&&!t.nodeType){if(t=ou.makeArray(t),r)for(o=t.length-1;0<=o;o--)Ua(e,t[o],n,r)
else for(o=0;o<t.length;o++)Ua(e,t[o],n,r)
return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t)
return e},za=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},ja=function(e,t,n){var r,o
return t=ou(t)[0],e.each((function(){n&&r===this.parentNode||(r=this.parentNode,o=t.cloneNode(!1),this.parentNode.insertBefore(o,this)),o.appendChild(this)})),e},Ha=Nt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),Va=Nt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),qa={for:"htmlFor",class:"className",readonly:"readOnly"},$a={float:"cssFloat"},Wa={},Ka={},Xa=function(e,t){return new ou.fn.init(e,t)},Ya=/^\s*|\s*$/g,Ga=function(e){return null==e?"":(""+e).replace(Ya,"")},Ja=function(e,t){var n,r,o,i
if(e)if(void 0===(n=e.length)){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},Qa=function(e,t){var n=[]
return Ja(e,(function(e,r){t(r,e)&&n.push(r)})),n},Za=function(e){return e?9===e.nodeType?e:e.ownerDocument:Ta}
Xa.fn=Xa.prototype={constructor:Xa,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this
if(!e)return o
if(e.nodeType)return o.context=o[0]=e,o.length=1,o
if(t&&t.nodeType)o.context=t
else{if(t)return ou(e).attr(t)
o.context=t=document}if(Ma(e)){if(!(n="<"===(o.selector=e).charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:Pa.exec(e)))return ou(t).find(e)
if(n[1])for(r=Fa(e,Za(t)).firstChild;r;)Oa.call(o,r),r=r.nextSibling
else{if(!(r=Za(t).getElementById(n[2])))return o
if(r.id!==n[2])return o.find(e)
o.length=1,o[0]=r}}else this.add(e,!1)
return o},toArray:function(){return Nt.toArray(this)},add:function(e,t){var n,r
if(Ma(e))return this.add(ou(e))
if(!1!==t)for(n=ou.unique(this.toArray().concat(ou.makeArray(e))),this.length=n.length,r=0;r<n.length;r++)this[r]=n[r]
else Oa.apply(this,ou.makeArray(e))
return this},attr:function(e,t){var n,r=this
if("object"==typeof e)Ja(e,(function(e,t){r.attr(e,t)}))
else{if(!Ia(t)){if(r[0]&&1===r[0].nodeType){if((n=Wa[e])&&n.get)return n.get(r[0],e)
if(Va[e])return r.prop(e)?e:void 0
null===(t=r[0].getAttribute(e,2))&&(t=void 0)}return t}this.each((function(){var n
if(1===this.nodeType){if((n=Wa[e])&&n.set)return void n.set(this,t)
null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}}))}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this
if("object"==typeof(e=qa[e]||e))Ja(e,(function(e,t){n.prop(e,t)}))
else{if(!Ia(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t
this.each((function(){1===this.nodeType&&(this[e]=t)}))}return n},css:function(e,t){var n,r,o=this,a=function(e){return e.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()}))},u=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e}))}
if("object"==typeof e)Ja(e,(function(e,t){o.css(e,t)}))
else if(Ia(t))e=a(e),"number"!=typeof t||Ha[e]||(t=t.toString()+"px"),o.each((function(){var n=this.style
if((r=Ka[e])&&r.set)r.set(this,t)
else{try{this.style[$a[e]||e]=t}catch(a){}null!==t&&""!==t||(n.removeProperty?n.removeProperty(u(e)):n.removeAttribute(e))}}))
else{if(n=o[0],(r=Ka[e])&&r.get)return r.get(n)
if(!n.ownerDocument.defaultView)return n.currentStyle?n.currentStyle[a(e)]:""
try{return n.ownerDocument.defaultView.getComputedStyle(n,null).getPropertyValue(u(e))}catch(i){return}}return o},remove:function(){for(var e,t=this.length;t--;)e=this[t],Da.clean(e),e.parentNode&&e.parentNode.removeChild(e)
return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild)
return this},html:function(e){var t
if(Ia(e)){t=this.length
try{for(;t--;)this[t].innerHTML=e}catch(m){ou(this[t]).empty().append(e)}return this}return this[0]?this[0].innerHTML:""},text:function(e){var t
if(Ia(e)){for(t=this.length;t--;)"innerText"in this[t]?this[t].innerText=e:this[0].textContent=e
return this}return this[0]?this[0].innerText||this[0].textContent:""},append:function(){return Ua(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)}))},prepend:function(){return Ua(this,arguments,(function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)}),!0)},before:function(){return this[0]&&this[0].parentNode?Ua(this,arguments,(function(e){this.parentNode.insertBefore(e,this)})):this},after:function(){return this[0]&&this[0].parentNode?Ua(this,arguments,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}),!0):this},appendTo:function(e){return ou(e).append(this),this},prependTo:function(e){return ou(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return ja(this,e)},wrapAll:function(e){return ja(this,e,!0)},wrapInner:function(e){return this.each((function(){ou(this).contents().wrapAll(e)})),this},unwrap:function(){return this.parent().each((function(){ou(this).replaceWith(this.childNodes)}))},clone:function(){var e=[]
return this.each((function(){e.push(this.cloneNode(!0))})),ou(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this
return"string"!=typeof e||(-1!==e.indexOf(" ")?Ja(e.split(" "),(function(){n.toggleClass(this,t)})):n.each((function(n,r){var o,i=za(r,e)
i!==t&&(o=r.className,i?r.className=Ga((" "+o+" ").replace(" "+e+" "," ")):r.className+=o?" "+e:e)}))),n},hasClass:function(e){return za(this[0],e)},each:function(e){return Ja(this,e)},on:function(e,t){return this.each((function(){Da.bind(this,e,t)}))},off:function(e,t){return this.each((function(){Da.unbind(this,e,t)}))},trigger:function(e){return this.each((function(){"object"==typeof e?Da.fire(this,e.type,e):Da.fire(this,e)}))},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new ou(Ba.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){for(var t=[],n=0,r=this.length;n<r;n++)ou.find(e,this[n],t)
return ou(t)},filter:function(e){return ou("function"==typeof e?Qa(this.toArray(),(function(t,n){return e(n,t)})):ou.filter(e,this.toArray()))},closest:function(e){var t=[]
return e instanceof ou&&(e=e[0]),this.each((function(n,r){for(;r;){if("string"==typeof e&&ou(r).is(e)){t.push(r)
break}if(r===e){t.push(r)
break}r=r.parentNode}})),ou(t)},offset:function(e){var t,n,r,o,i=0,a=0
return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:Oa,sort:Array.prototype.sort,splice:Array.prototype.splice},Nt.extend(Xa,{extend:Nt.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:Nt.toArray(e)
var t},inArray:function(e,t){var n
if(t.indexOf)return t.indexOf(e)
for(n=t.length;n--;)if(t[n]===e)return n
return-1},isArray:Nt.isArray,each:Ja,trim:Ga,grep:Qa,find:ya,expr:ya.selectors,unique:ya.uniqueSort,text:ya.getText,contains:ya.contains,filter:function(e,t,n){var r=t.length
for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1)
return 1===t.length?ou.find.matchesSelector(t[0],e)?[t[0]]:[]:ou.find.matches(e,t)}})
var eu=function(e,t,n){var r=[],o=e[t]
for("string"!=typeof n&&n instanceof ou&&(n=n[0]);o&&9!==o.nodeType;){if(void 0!==n){if(o===n)break
if("string"==typeof n&&ou(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},tu=function(e,t,n,r){var o=[]
for(r instanceof ou&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(void 0!==r){if(e===r)break
if("string"==typeof r&&ou(e).is(r))break}o.push(e)}return o},nu=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e
return null}
Ja({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return eu(e,"parentNode")},next:function(e){return nu(e,"nextSibling",1)},prev:function(e){return nu(e,"previousSibling",1)},children:function(e){return tu(e.firstChild,"nextSibling",1)},contents:function(e){return Nt.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},(function(e,t){Xa.fn[e]=function(n){var r=[]
this.each((function(){var e=t.call(r,this,n,r)
e&&(ou.isArray(e)?r.push.apply(r,e):r.push(e))})),1<this.length&&(La[e]||(r=ou.unique(r)),0===e.indexOf("parents")&&(r=r.reverse()))
var o=ou(r)
return n?o.filter(n):o}})),Ja({parentsUntil:function(e,t){return eu(e,"parentNode",t)},nextUntil:function(e,t){return tu(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return tu(e,"previousSibling",1,t).slice(1)}},(function(e,t){Xa.fn[e]=function(n,r){var o=[]
this.each((function(){var e=t.call(o,this,n,o)
e&&(ou.isArray(e)?o.push.apply(o,e):o.push(e))})),1<this.length&&(o=ou.unique(o),0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse()))
var i=ou(o)
return r?i.filter(r):i}})),Xa.fn.is=function(e){return!!e&&0<this.filter(e).length},Xa.fn.init.prototype=Xa.fn,Xa.overrideDefaults=function(e){var t,n=function(r,o){return t=t||e(),0===arguments.length&&(r=t.element),o=o||t.context,new n.fn.init(r,o)}
return ou.extend(n,this),n},Xa.attrHooks=Wa,Xa.cssHooks=Ka
var ru,ou=Xa,iu=Nt.each,au=Nt.grep,uu=bt.ie,su=/^([a-z0-9],?)+$/i,cu=function(e,t){var n=t.attr("style"),r=(r=e.serialize(e.parse(n),t[0].nodeName))||null
t.attr("data-mce-style",r)},lu=function(e,t){var n,r,o=0
if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r)
return o}
function fu(e,t){var n=this
void 0===t&&(t={})
var r={},o=window,i={},a=0,s=Hr.forElement(Rt(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),c=[],l=t.schema?t.schema:si({}),f=li({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),d=t.ownEvents?new yi:yi.Event,m=l.getBlockElements(),p=ou.overrideDefaults((function(){return{context:e,element:V.getRoot()}})),g=function(t){return t&&e&&_(t)?e.getElementById(t):t},h=function(e){return p("string"==typeof e?g(e):e)},v=function(e,t,n){var r,o,i=h(e)
return i.length&&(o=(r=$[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},y=function(e){var t=g(e)
return t?t.attributes:[]},b=function(e,n,r){""===r&&(r=null)
var o,i=h(e),a=i.attr(n)
i.length&&((o=$[n])&&o.set?o.set(i,r,n):i.attr(n,r),a!==r&&t.onSetAttrib&&t.onSetAttrib({attrElm:i,attrName:n,attrValue:r}))},C=function(){return t.root_element||e.body},w=function(t,n){return function(e,t,n){var r,o,i,a=0,u=0,s=e.ownerDocument
if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===Qn(Rt(e),"position"))return{x:a=(o=t.getBoundingClientRect()).left+(s.documentElement.scrollLeft||e.scrollLeft)-s.documentElement.clientLeft,y:u=o.top+(s.documentElement.scrollTop||e.scrollTop)-s.documentElement.clientTop}
for(r=t;r&&r!==n&&r.nodeType&&!or(r,n);)a+=r.offsetLeft||0,u+=r.offsetTop||0,r=r.offsetParent
for(r=t.parentNode;r&&r!==n&&r.nodeType&&!or(r,n);)a-=r.scrollLeft||0,u-=r.scrollTop||0,r=r.parentNode
u+=(i=Rt(t),nr.isFirefox()&&"table"===Lt(i)?rr(Gt(i)).filter((function(e){return"caption"===Lt(e)})).bind((function(e){return rr(Yt(e)).map((function(t){var n=t.dom.offsetTop,r=e.dom.offsetTop,o=e.dom.offsetHeight
return n<=r?-o:0}))})).getOr(0):0)}return{x:a,y:u}}(e.body,g(t),n)},x=function(e,t,n){var r=h(e)
return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,(function(e,t){return t.toUpperCase()})))&&(t=bt.browser.isIE()?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:void 0)},S=function(e){var t,n
return e=g(e),t=x(e,"width"),n=x(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},N=function(e,t){if(!e)return!1
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(su.test(t)){for(var n=t.toLowerCase().split(/,/),r=e.nodeName.toLowerCase(),o=n.length-1;0<=o;o--)if(n[o]===r)return!0
return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e]
return 0<ya(t,i[0].ownerDocument||i[0],null,i).length},E=function(e,t,n,r){var o,i=[],a=g(e)
for(r=void 0===r,n=n||("BODY"!==C().nodeName?C().parentNode:null),Nt.is(t,"string")&&(t="*"===(o=t)?function(e){return 1===e.nodeType}:function(e){return N(e,o)});a&&!(a===n||P(a.nodeType)||Mn(a)||Fn(a));){if(!t||"function"==typeof t&&t(a)){if(!r)return[a]
i.push(a)}a=a.parentNode}return r?i:null},k=function(e,t,n){var r=t
if(e)for("string"==typeof t&&(r=function(e){return N(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e
return null},A=function(e,t,r){var o,i="string"==typeof e?g(e):e
if(!i)return!1
if(Nt.isArray(i)&&(i.length||0===i.length))return o=[],iu(i,(function(e,n){e&&o.push(t.call(r,"string"==typeof e?g(e):e,n))})),o
var a=r||n
return t.call(a,i)},R=function(e,t){h(e).each((function(e,n){iu(t,(function(e,t){b(n,t,e)}))}))},T=function(e,t){var n=h(e)
uu?n.each((function(e,n){if(!1!==n.canHaveHTML){for(;n.firstChild;)n.removeChild(n.firstChild)
try{n.innerHTML="<br>"+t,n.removeChild(n.firstChild)}catch(i){ou("<div></div>").html("<br>"+t).contents().slice(1).appendTo(n)}return t}})):n.html(t)},O=function(t,n,r,o,i){return A(t,(function(t){var a="string"==typeof n?e.createElement(n):n
return R(a,r),o&&("string"!=typeof o&&o.nodeType?a.appendChild(o):"string"==typeof o&&T(a,o)),i?a:t.appendChild(a)}))},B=function(t,n,r){return O(e.createElement(t),t,n,r,!0)},D=Qo.encodeAllRaw,L=function(e,t){var n=h(e)
return t?n.each((function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)})).remove():n.remove(),1<n.length?n.toArray():n[0]},I=function(e,t,n){h(e).toggleClass(t,n).each((function(){""===this.className&&ou(this).attr("class",null)}))},M=function(e,t,n){return A(t,(function(t){return Nt.is(t,"array")&&(e=e.cloneNode(!0)),n&&iu(au(t.childNodes),(function(t){e.appendChild(t)})),t.parentNode.replaceChild(e,t)}))},F=function(e){if(_n(e)){var t="a"===e.nodeName.toLowerCase()&&!v(e,"href")&&v(e,"id")
if(v(e,"name")||v(e,"data-mce-bookmark")||t)return!0}return!1},U=function(){return e.createRange()},z=function(n,r,i,a){if(Nt.isArray(n)){for(var u=n.length,s=[];u--;)s[u]=z(n[u],r,i,a)
return s}return!t.collect||n!==e&&n!==o||c.push([n,r,i,a]),d.bind(n,r,i,a||V)},j=function(t,n,r){if(Nt.isArray(t)){for(var i=t.length,a=[];i--;)a[i]=j(t[i],n,r)
return a}if(0<c.length&&(t===e||t===o))for(i=c.length;i--;){var u=c[i]
t!==u[0]||n&&n!==u[1]||r&&r!==u[2]||d.unbind(u[0],u[1],u[2])}return d.unbind(t,n,r)},H=function(e){if(e&&_n(e)){var t=e.getAttribute("data-mce-contenteditable")
return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},V={doc:e,settings:t,win:o,files:i,stdMode:!0,boxModel:!0,styleSheetLoader:s,boundEvents:c,styles:f,schema:l,events:d,isBlock:function(e){if("string"==typeof e)return!!m[e]
if(e){var t=e.nodeType
if(t)return!(1!==t||!m[e.nodeName])}return!1},$:p,$$:h,root:null,clone:function(t,n){if(!uu||1!==t.nodeType||n)return t.cloneNode(n)
var r=e.createElement(t.nodeName)
return iu(y(t),(function(e){b(r,e.nodeName,v(t,e.nodeName))})),r},getRoot:C,getViewPort:function(e){var t=Nn(e)
return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:function(e){e=g(e)
var t=w(e),n=S(e)
return{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:S,getParent:function(e,t,n){var r=E(e,t,n,!1)
return r&&0<r.length?r[0]:null},getParents:E,get:g,getNext:function(e,t){return k(e,t,"nextSibling")},getPrev:function(e,t){return k(e,t,"previousSibling")},select:function(n,r){return ya(n,g(r)||t.root_element||e,[])},is:N,add:O,create:B,createHTML:function(e,t,n){var r,o=""
for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&void 0!==t[r]&&(o+=" "+r+'="'+D(t[r])+'"')
return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(t){var n,r=e.createElement("div"),o=e.createDocumentFragment()
for(o.appendChild(r),t&&(r.innerHTML=t);n=r.firstChild;)o.appendChild(n)
return o.removeChild(r),o},remove:L,setStyle:function(e,n,r){var o=_(n)?h(e).css(n,r):h(e).css(n)
t.update_styles&&cu(f,o)},getStyle:x,setStyles:function(e,n){var r=h(e).css(n)
t.update_styles&&cu(f,r)},removeAllAttribs:function(e){return A(e,(function(e){for(var t=e.attributes,n=t.length-1;0<=n;n--)e.removeAttributeNode(t.item(n))}))},setAttrib:b,setAttribs:R,getAttrib:v,getPos:w,parseStyle:function(e){return f.parse(e)},serializeStyle:function(e,t){return f.serialize(e,t)},addStyle:function(t){var n,o
if(V!==fu.DOM&&e===document){if(r[t])return
r[t]=!0}(o=e.getElementById("mceDefaultStyles"))||((o=e.createElement("style")).id="mceDefaultStyles",o.type="text/css",(n=e.getElementsByTagName("head")[0]).firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o)),o.styleSheet?o.styleSheet.cssText+=t:o.appendChild(e.createTextNode(t))},loadCSS:function(e){q((e=e||"").split(","),(function(e){i[e]=!0,s.load(e,u)}))},addClass:function(e,t){h(e).addClass(t)},removeClass:function(e,t){I(e,t,!1)},hasClass:function(e,t){return h(e).hasClass(t)},toggleClass:I,show:function(e){h(e).show()},hide:function(e){h(e).hide()},isHidden:function(e){return"none"===h(e).css("display")},uniqueId:function(e){return(e||"mce_")+a++},setHTML:T,getOuterHTML:function(e){var t="string"==typeof e?g(e):e
return _n(t)?t.outerHTML:ou("<div></div>").append(ou(t).clone()).html()},setOuterHTML:function(e,t){h(e).each((function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}L(ou(this).html(t),!0)}))},decode:Qo.decode,encode:D,insertAfter:function(e,t){var n=g(t)
return A(e,(function(e){var t=n.parentNode,r=n.nextSibling
return r?t.insertBefore(e,r):t.appendChild(e),e}))},replace:M,rename:function(e,t){var n
return e.nodeName!==t.toUpperCase()&&(n=B(t),iu(y(e),(function(t){b(n,t.nodeName,v(e,t.nodeName))})),M(n,e,!0)),n||e},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode
if(r===n)break
r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return f.toHex(Nt.trim(e))},run:A,getAttribs:y,isEmpty:function(e,t){var n,r,o=0
if(F(e))return!1
if(e=e.firstChild){var i=new Vr(e,e.parentNode),a=l?l.getWhiteSpaceElements():{}
t=t||(l?l.getNonEmptyElements():null)
do{if(n=e.nodeType,_n(e)){var u=e.getAttribute("data-mce-bogus")
if(u){e=i.next("all"===u)
continue}if(r=e.nodeName.toLowerCase(),t&&t[r]){if("br"!==r)return!1
o++,e=i.next()
continue}if(F(e))return!1}if(8===n)return!1
if(3===n&&!To(e.nodeValue))return!1
if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&To(e.nodeValue))return!1
e=i.next()}while(e)}return o<=1},createRng:U,nodeIndex:lu,split:function(e,t,n){var r,o,i,a=U()
if(e&&t)return a.setStart(e.parentNode,lu(e)),a.setEnd(t.parentNode,lu(t)),r=a.extractContents(),(a=U()).setStart(t.parentNode,lu(t)+1),a.setEnd(e.parentNode,lu(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(Fo(V,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(Fo(V,o),e),L(e),n||t},bind:z,unbind:j,fire:function(e,t,n){return d.fire(e,t,n)},getContentEditable:H,getContentEditableParent:function(e){for(var t=C(),n=null;e&&e!==t&&null===(n=H(e));e=e.parentNode);return n},destroy:function(){if(0<c.length)for(var e=c.length;e--;){var t=c[e]
d.unbind(t[0],t[1],t[2])}ue(i,(function(e,t){s.unload(t),delete i[t]})),ya.setDocument&&ya.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0
e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}},$=function(e,t,n){var r=t.keep_values,o={set:function(e,r,o){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||n(),r,o,e[0])),e.attr("data-mce-"+o,r).attr(o,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},i={style:{set:function(t,n){null===n||"object"!=typeof n?(r&&t.attr("data-mce-style",n),null!==n&&"string"==typeof n?(t.removeAttr("style"),t.css(e.parse(n))):t.attr("style",n)):t.css(n)},get:function(t){var n=t.attr("data-mce-style")||t.attr("style")
return e.serialize(e.parse(n),t[0].nodeName)}}}
return r&&(i.href=i.src=o),i}(f,t,(function(){return V}))
return V}(ru=fu=fu||{}).DOM=ru(document),ru.nodeIndex=lu
var du=fu,mu=du.DOM,pu=Nt.each,gu=Nt.grep,hu=(vu.prototype._setReferrerPolicy=function(e){this.settings.referrerPolicy=e},vu.prototype.loadScript=function(e,t,n){var r=mu,o=function(){r.remove(i),a&&(a.onerror=a.onload=a=null)},i=r.uniqueId(),a=document.createElement("script")
a.id=i,a.type="text/javascript",a.src=Nt._addCacheSuffix(e),this.settings.referrerPolicy&&r.setAttrib(a,"referrerpolicy",this.settings.referrerPolicy),a.onload=function(){o(),t()},a.onerror=function(){o(),L(n)?n():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(a)},vu.prototype.isDone=function(e){return 2===this.states[e]},vu.prototype.markDone=function(e){this.states[e]=2},vu.prototype.add=function(e,t,n,r){var o=this.states[e]
this.queue.push(e),void 0===o&&(this.states[e]=0),t&&(this.scriptLoadedCallbacks[e]||(this.scriptLoadedCallbacks[e]=[]),this.scriptLoadedCallbacks[e].push({success:t,failure:r,scope:n||this}))},vu.prototype.load=function(e,t,n,r){return this.add(e,t,n,r)},vu.prototype.remove=function(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]},vu.prototype.loadQueue=function(e,t,n){this.loadScripts(this.queue,e,t,n)},vu.prototype.loadScripts=function(e,t,n,r){var o=this,i=[],a=function(e,t){pu(o.scriptLoadedCallbacks[t],(function(t){L(t[e])&&t[e].call(t.scope)})),o.scriptLoadedCallbacks[t]=void 0}
o.queueLoadedCallbacks.push({success:t,failure:r,scope:n||this})
var u=function(){var t,n=gu(e)
e.length=0,pu(n,(function(e){2!==o.states[e]?3!==o.states[e]?1!==o.states[e]&&(o.states[e]=1,o.loading++,o.loadScript(e,(function(){o.states[e]=2,o.loading--,a("success",e),u()}),(function(){o.states[e]=3,o.loading--,i.push(e),a("failure",e),u()}))):a("failure",e):a("success",e)})),o.loading||(t=o.queueLoadedCallbacks.slice(0),o.queueLoadedCallbacks.length=0,pu(t,(function(e){0===i.length?L(e.success)&&e.success.call(e.scope):L(e.failure)&&e.failure.call(e.scope,i)})))}
u()},vu.ScriptLoader=new vu,vu)
function vu(e){void 0===e&&(e={}),this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=0,this.settings=e}var yu,bu=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},Cu={},wu=bu("en"),xu=function(){return pe(Cu,wu.get())},Su={getData:function(){return se(Cu,(function(e){return Ee({},e)}))},setCode:function(e){e&&wu.set(e)},getCode:function(){return wu.get()},add:function(e,t){var n=Cu[e]
n||(Cu[e]=n={}),ue(t,(function(e,t){n[t.toLowerCase()]=e}))},translate:function(e){var t,n,r=xu().getOr({}),o=function(e){return L(e)?Object.prototype.toString.call(e):i(e)?"":""+e},i=function(e){return""===e||null==e},a=function(e){var t=o(e)
return pe(r,t.toLowerCase()).map(o).getOr(t)},u=function(e){return e.replace(/{context:\w+}$/,"")}
if(i(e))return""
if(A(t=e)&&ge(t,"raw"))return o(e.raw)
if(R(n=e)&&1<n.length){var s=e.slice(1)
return u(a(e[0]).replace(/\{([0-9]+)\}/g,(function(e,t){return ge(s,t)?o(s[t]):e})))}return u(a(e))},isRtl:function(){return xu().bind((function(e){return pe(e,"_dir")})).exists((function(e){return"rtl"===e}))},hasCode:function(e){return ge(Cu,e)}}
function Nu(){var e=this,t=[],n={},r={},o=[],i=function(e,t){var n=W(o,(function(n){return n.name===e&&n.state===t}))
q(n,(function(e){return e.callback()}))},a=function(e){var t
return r[e]&&(t=r[e].dependencies),t||[]},u=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},s=function(e,t,o,c,l){var f,d
n[e]||(0!==(f="string"==typeof t?t:t.prefix+t.resource+t.suffix).indexOf("/")&&-1===f.indexOf("://")&&(f=Nu.baseURL+"/"+f),n[e]=f.substring(0,f.lastIndexOf("/")),d=function(){var n,r,l,f
i(e,"loaded"),n=t,r=o,l=c,f=a(e),q(f,(function(e){var t=u(n,e)
s(t.resource,t,void 0,void 0)})),r&&(l?r.call(l):r.call(hu))},r[e]?d():hu.ScriptLoader.add(f,d,c,l))},c=function(e,t,i){void 0===i&&(i="added"),ge(r,e)&&"added"===i||ge(n,e)&&"loaded"===i?t():o.push({name:e,state:i,callback:t})}
return{items:t,urls:n,lookup:r,_listeners:o,get:function(e){return r[e]?r[e].instance:void 0},dependencies:a,requireLangPack:function(e,t){!1!==Nu.languageLoad&&c(e,(function(){var r=Su.getCode()
!r||t&&-1===(","+(t||"")+",").indexOf(","+r+",")||hu.ScriptLoader.add(n[e]+"/langs/"+r+".js")}),"loaded")},add:function(e,n,o){var a=n
return t.push(a),r[e]={instance:a,dependencies:o},i(e,"added"),a},remove:function(e){delete n[e],delete r[e]},createUrl:u,addComponents:function(t,n){var r=e.urls[t]
q(n,(function(e){hu.ScriptLoader.add(r+"/"+e)}))},load:s,waitFor:c}}(yu=Nu=Nu||{}).PluginManager=yu(),yu.ThemeManager=yu()
var Eu,ku=Nu,_u=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null===n&&(n=setTimeout((function(){e.apply(null,r),n=null}),t))}}},Au=function(e,t){var n=null
return{cancel:function(){null!==n&&(clearTimeout(n),n=null)},throttle:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
null!==n&&clearTimeout(n),n=setTimeout((function(){e.apply(null,r),n=null}),t)}}},Ru=function(e,t){var n=Yn(e,t)
return void 0===n||""===n?[]:n.split(" ")},Tu=function(e){return void 0!==e.dom.classList},Ou=function(e,t){Tu(e)?e.dom.classList.add(t):function(e,t){return r=t,o=Ru(n=e,"class").concat([r]),Kn(n,"class",o.join(" ")),!0
var n,r,o}(e,t)},Bu=function(e,t){return Tu(e)&&e.dom.classList.contains(t)},Pu=function(e,t){var n=[]
return q(Gt(e),(function(e){t(e)&&(n=n.concat([e])),n=n.concat(Pu(e,t))})),n},Du=function(e,t){return n=t,o=void 0===(r=e)?document:r.dom,Bt(o)?[]:V(o.querySelectorAll(n),Rt)
var n,r,o},Lu=c("mce-annotation"),Iu=c("data-mce-annotation"),Mu=c("data-mce-annotation-uid"),Fu=function(e,t){var n=e.selection.getRng(),r=Rt(n.startContainer),o=Rt(e.getBody()),i=t.fold((function(){return"."+Lu()}),(function(e){return"["+Iu()+'="'+e+'"]'})),a=Jt(r,n.startOffset).getOr(r),u=_r(a,i,(function(e){return Pt(e,o)})),s=function(e,t){return n=t,(r=e.dom)&&r.hasAttribute&&r.hasAttribute(n)?S.some(Yn(e,t)):S.none()
var n,r}
return u.bind((function(t){return s(t,""+Mu()).bind((function(n){return s(t,""+Iu()).map((function(t){var r=Uu(e,n)
return{uid:n,name:t,elements:r}}))}))}))},Uu=function(e,t){var n=Rt(e.getBody())
return Du(n,"["+Mu()+'="'+t+'"]')},zu=0,ju=function(e){var t=(new Date).getTime()
return e+"_"+Math.floor(1e9*Math.random())+ ++zu+String(t)},Hu=function(e,t){var n,r,o=Ht(e).dom,i=Rt(o.createDocumentFragment()),a=(n=t,(r=(o||document).createElement("div")).innerHTML=n,Gt(Rt(r)))
fn(i,a),dn(e),ln(e,i)},Vu=function(e,t){return Rt(e.dom.cloneNode(t))},qu=function(e){return Vu(e,!1)},$u=function(e){return Vu(e,!0)},Wu=function(e,t,n){void 0===n&&(n=y)
var r=new Vr(e,t),o=function(e){for(var t;(t=r[e]())&&!Ln(t)&&!n(t););return S.from(t).filter(Ln)}
return{current:function(){return S.from(r.current()).filter(Ln)},next:function(){return o("next")},prev:function(){return o("prev")},prev2:function(){return o("prev2")}}},Ku=function(e,t){var n=t||function(t){return e.isBlock(t)||Un(t)||Hn(t)},r=function(e,t,n,o){if(Ln(e)){var i=o(e,t,e.data)
if(-1!==i)return S.some({container:e,offset:i})}return n().bind((function(e){return r(e.container,e.offset,n,o)}))}
return{backwards:function(e,t,o,i){var a=Wu(e,i,n)
return r(e,t,(function(){return a.prev().map((function(e){return{container:e,offset:e.length}}))}),o).getOrNull()},forwards:function(e,t,o,i){var a=Wu(e,i,n)
return r(e,t,(function(){return a.next().map((function(e){return{container:e,offset:0}}))}),o).getOrNull()}}},Xu=function(e,t,n){return e.isSome()&&t.isSome()?S.some(n(e.getOrDie(),t.getOrDie())):S.none()},Yu=Math.round,Gu=function(e){return e?{left:Yu(e.left),top:Yu(e.top),bottom:Yu(e.bottom),right:Yu(e.right),width:Yu(e.width),height:Yu(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},Ju=function(e,t){return e=Gu(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},Qu=function(e,t,n){return 0<=e&&e<=Math.min(t.height,n.height)/2},Zu=function(e,t){var n=Math.min(t.height/2,e.height/2)
return e.bottom-n<t.top||!(e.top>t.bottom)&&Qu(t.top-e.bottom,e,t)},es=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&Qu(t.bottom-e.top,e,t)},ts=function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom},ns=function(e){var t=e.startContainer,n=e.startOffset
return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},rs=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},os=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]"),is=function(e){return"string"==typeof e&&768<=e.charCodeAt(0)&&os.test(e)},as=_n,us=ko,ss=Rn("display","block table"),cs=Rn("float","left right"),ls=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1
return!0}}(as,us,g(cs)),fs=g(Rn("white-space","pre pre-line pre-wrap")),ds=Ln,ms=Un,ps=du.nodeIndex,gs=rs,hs=function(e){return"createRange"in e?e.createRange():du.DOM.createRng()},vs=function(e){return e&&/[\r\n\t ]/.test(e)},ys=function(e){return!!e.setStart&&!!e.setEnd},bs=function(e){var t,n=e.startContainer,r=e.startOffset
return!!(vs(e.toString())&&fs(n.parentNode)&&Ln(n)&&(t=n.data,vs(t[r-1])||vs(t[r+1])))},Cs=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},ws=function(e){var t=e.getClientRects(),n=0<t.length?Gu(t[0]):Gu(e.getBoundingClientRect())
return!ys(e)&&ms(e)&&Cs(n)?function(e){var t=e.ownerDocument,n=hs(t),r=t.createTextNode(no),o=e.parentNode
o.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1)
var i=Gu(n.getBoundingClientRect())
return o.removeChild(r),i}(e):Cs(n)&&ys(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset
if(t===n&&Ln(n)&&0===r&&1===o){var i=e.cloneRange()
return i.setEndAfter(n),ws(i)}return null}(e):n},xs=function(e,t){var n=Ju(e,t)
return n.width=1,n.right=n.left+1,n}
function Ss(e,t,n){var r=function(){return n=n||function(e){var t,n,r=[],o=function(e){var t,n
0!==e.height&&(0<r.length&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=hs(e.ownerDocument)
if(t<e.data.length){if(is(e.data[t]))return r
if(is(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!bs(n)))return o(xs(ws(n),!1)),r}0<t&&(n.setStart(e,t-1),n.setEnd(e,t),bs(n)||o(xs(ws(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),bs(n)||o(xs(ws(n),!0)))}
if(ds(e.container()))return i(e.container(),e.offset()),r
if(as(e.container()))if(e.isAtEnd())n=gs(e.container(),e.offset()),ds(n)&&i(n,n.data.length),ls(n)&&!ms(n)&&o(xs(ws(n),!1))
else{if(n=gs(e.container(),e.offset()),ds(n)&&i(n,0),ls(n)&&e.isAtEnd())return o(xs(ws(n),!1)),r
t=gs(e.container(),e.offset()-1),ls(t)&&!ms(t)&&(!ss(t)&&!ss(n)&&ls(n)||o(xs(ws(t),!1))),ls(n)&&o(xs(ws(n),!0))}return r}(Ss(e,t))}
return{container:c(e),offset:c(t),toRange:function(){var n=hs(e.ownerDocument)
return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:r,isVisible:function(){return 0<r().length},isAtStart:function(){return ds(e),0===t},isAtEnd:function(){return ds(e)?t>=e.data.length:t>=e.childNodes.length},isEqual:function(n){return n&&e===n.container()&&t===n.offset()},getNode:function(n){return gs(e,n?t-1:t)}}}(Eu=Ss=Ss||{}).fromRangeStart=function(e){return Eu(e.startContainer,e.startOffset)},Eu.fromRangeEnd=function(e){return Eu(e.endContainer,e.endOffset)},Eu.after=function(e){return Eu(e.parentNode,ps(e)+1)},Eu.before=function(e){return Eu(e.parentNode,ps(e))},Eu.isAbove=function(e,t){return Xu(ne(t.getClientRects()),re(e.getClientRects()),Zu).getOr(!1)},Eu.isBelow=function(e,t){return Xu(re(t.getClientRects()),ne(e.getClientRects()),es).getOr(!1)},Eu.isAtStart=function(e){return!!e&&e.isAtStart()},Eu.isAtEnd=function(e){return!!e&&e.isAtEnd()},Eu.isTextPosition=function(e){return!!e&&Ln(e.container())},Eu.isElementPosition=function(e){return!1===Eu.isTextPosition(e)}
var Ns,Es,ks=Ss,_s=function(e,t){Ln(t)&&0===t.data.length&&e.remove(t)},As=function(e,t,n){var r,o,i,a,u,s,c
Fn(n)?(i=e,a=t,u=n,s=S.from(u.firstChild),c=S.from(u.lastChild),a.insertNode(u),s.each((function(e){return _s(i,e.previousSibling)})),c.each((function(e){return _s(i,e.nextSibling)}))):(r=e,o=n,t.insertNode(o),_s(r,o.previousSibling),_s(r,o.nextSibling))},Rs=Ln,Ts=On,Os=du.nodeIndex,Bs=function(e){var t=e.parentNode
return Ts(t)?Bs(t):t},Ps=function(e){return e?xe(e.childNodes,(function(e,t){return Ts(t)&&"BR"!==t.nodeName?e=e.concat(Ps(t)):e.push(t),e}),[]):[]},Ds=function(e){return function(t){return e===t}},Ls=function(e){return(Rs(e)?"text()":e.nodeName.toLowerCase())+"["+function(e){var t=Ps(Bs(e)),n=Se(t,Ds(e),e)
t=t.slice(0,n+1)
var r=xe(t,(function(e,n,r){return Rs(n)&&Rs(t[r-1])&&e++,e}),0)
return t=Ce(t,An([e.nodeName])),(n=Se(t,Ds(e),e))-r}(e)+"]"},Is=function(e,t){var n,r,o,i=[],a=t.container(),u=t.offset()
return Rs(a)?n=function(e,t){for(;(e=e.previousSibling)&&Rs(e);)t+=e.data.length
return t}(a,u):(u>=(r=a.childNodes).length?(n="after",u=r.length-1):n="before",a=r[u]),i.push(Ls(a)),o=function(e,t,n){var r=[]
for(t=t.parentNode;t!==e;t=t.parentNode)r.push(t)
return r}(e,a),o=Ce(o,g(On)),(i=i.concat(be(o,Ls))).reverse().join("/")+","+n},Ms=function(e,t){if(!t)return null
var n=t.split(","),r=n[0].split("/"),o=1<n.length?n[1]:"before",i=xe(r,(function(e,t){var n,r,o,i,a=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
return a?("text()"===a[1]&&(a[1]="#text"),n=e,r=a[1],o=parseInt(a[2],10),i=Ps(n),i=Ce(i,(function(e,t){return!Rs(e)||!Rs(i[t-1])})),(i=Ce(i,An([r])))[o]):null}),e)
return i?Rs(i)?function(e,t){for(var n,r=e,o=0;Rs(r);){if(n=r.data.length,o<=t&&t<=o+n){e=r,t-=o
break}if(!Rs(r.nextSibling)){e=r,t=n
break}o+=n,r=r.nextSibling}return Rs(e)&&t>e.data.length&&(t=e.data.length),ks(e,t)}(i,parseInt(o,10)):(o="after"===o?Os(i)+1:Os(i),ks(i.parentNode,o)):null},Fs=Hn,Us=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],s=[],c=0,l=e.getRoot()
for(Ln(a)?s.push(n?function(e,t,n){for(var r=e(t.data.slice(0,n)).length,o=t.previousSibling;o&&Ln(o);o=o.previousSibling)r+=e(o.data).length
return r}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(c=1,u=Math.max(0,i.length-1)),s.push(e.nodeIndex(i[u],n)+c));a&&a!==l;a=a.parentNode)s.push(e.nodeIndex(a,n))
return s},zs=function(e,t,n){var r=0
return Nt.each(e.select(t),(function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++})),r},js=function(e,t){var n,r=t?"start":"end",o=e[r+"Container"],i=e[r+"Offset"]
_n(o)&&"TR"===o.nodeName&&(o=(n=o.childNodes)[Math.min(t?i:i-1,n.length-1)])&&(i=t?0:o.childNodes.length,e["set"+(t?"Start":"End")](o,i))},Hs=function(e){return js(e,!0),js(e,!1),e},Vs=function(e,t){var n
if(_n(e)&&(e=rs(e,t),Fs(e)))return e
if(lo(e)){if(Ln(e)&&so(e)&&(e=e.parentNode),n=e.previousSibling,Fs(n))return n
if(n=e.nextSibling,Fs(n))return n}},qs=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng()
if(Fs(r)||"IMG"===o)return{name:o,index:zs(n.dom,o,r)}
var a,u,s,c,l,f,d,m=Vs((a=i).startContainer,a.startOffset)||Vs(a.endContainer,a.endOffset)
return m?{name:o=m.tagName,index:zs(n.dom,o,m)}:(u=e,c=t,l=i,f=(s=n).dom,(d={}).start=Us(f,u,c,l,!0),s.isCollapsed()||(d.end=Us(f,u,c,l,!1)),d)},$s=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},Ws=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName
if("IMG"===u)return{name:u,index:zs(n,u,a)}
var s,c=Hs(r.cloneRange())
i||(c.collapse(!1),s=$s(n,o+"_end",t),As(n,c,s)),(r=Hs(r)).collapse(!0)
var l=$s(n,o+"_start",t)
return As(n,r,l),e.moveToBookmark({id:o,keep:!0}),{id:o}},Ks=f(qs,l,!0),Xs=du.DOM,Ys=function(e,t,n){var r=e.getParam(t,n)
if(-1===r.indexOf("="))return r
var o=e.getParam(t,"","hash")
return o.hasOwnProperty(e.id)?o[e.id]:n},Gs=function(e){return e.getParam("content_security_policy","")},Js=function(e){if(e.getParam("force_p_newlines",!1))return"p"
var t=e.getParam("forced_root_block","p")
return!1===t?"":!0===t?"p":t},Qs=function(e){return e.getParam("forced_root_block_attrs",{})},Zs=function(e){return e.getParam("automatic_uploads",!0,"boolean")},ec=function(e){return e.getParam("icons","","string")},tc=function(e){return e.getParam("referrer_policy","","string")},nc=function(e){return e.getParam("language","en","string")},rc=function(e){return e.getParam("indent_use_margin",!1)},oc=function(e){var t=e.getParam("object_resizing")
return!1!==t&&!bt.iOS&&(_(t)?t:"table,img,figure.image,div")},ic=function(e){return e.getParam("event_root")},ac=function(e){return e.getParam("theme")},uc=function(e){return!1!==e.getParam("inline_boundaries")},sc=function(e){return e.getParam("plugins","","string")},cc=_n,lc=Ln,fc=function(e){var t=e.parentNode
t&&t.removeChild(e)},dc=function(e){var t=io(e)
return{count:e.length-t.length,text:t}},mc=function(e){for(var t;-1!==(t=e.data.lastIndexOf(ro));)e.deleteData(t,1)},pc=function(e,t){return vc(e),t},gc=function(e,t){var n,r,o=t.container(),i=(n=oe(o.childNodes),(-1===(r=z(n,e))?S.none():S.some(r)).map((function(e){return e<t.offset()?ks(o,t.offset()-1):t})).getOr(t))
return vc(e),i},hc=function(e,t){return ks.isTextPosition(t)?function(e,t){return lc(e)&&t.container()===e?(r=t,o=dc((n=e).data.substr(0,r.offset())),i=dc(n.data.substr(r.offset())),0<(o.text+i.text).length?(mc(n),ks(n,r.offset()-o.count)):r):pc(e,t)
var n,r,o,i}(e,t):(n=e,((r=t).container()===n.parentNode?gc:pc)(n,r))
var n,r},vc=function(e){cc(e)&&lo(e)&&(fo(e)?e.removeAttribute("data-mce-caret"):fc(e)),lc(e)&&(mc(e),0===e.data.length&&fc(e))},yc=lt().browser,bc=Hn,Cc=qn,wc=Vn,xc=function(e,t,n){var r,o,i,a,u=Ju(t.getBoundingClientRect(),n),s="BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,e.scrollTop||r.scrollTop):(a=e.getBoundingClientRect(),o=e.scrollLeft-a.left,e.scrollTop-a.top)
return u.left+=o,u.right+=o,u.top+=s,u.bottom+=s,u.width=1,0<(i=t.offsetWidth-t.clientWidth)&&(n&&(i*=-1),u.left+=i,u.right+=i),u},Sc=function(e,t,n,r){var o,i,a=bu(S.none()),u=Js(e),s=0<u.length?u:"p",c=function(){!function(e){for(var t=Du(Rt(e),"*[contentEditable=false],video,audio,embed,object"),n=0;n<t.length;n++){var r,o=t[n].dom,i=o.previousSibling
ho(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(r.length-1,1)),i=o.nextSibling,go(i)&&(1===(r=i.data).length?i.parentNode.removeChild(i):i.deleteData(0,1))}}(t),i&&(vc(i),i=null),a.get().each((function(e){ou(e.caret).remove(),a.set(S.none())})),o&&(Ur.clearInterval(o),o=null)},l=function(){o=Ur.setInterval((function(){r()?ou("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden"):ou("div.mce-visual-caret",t).addClass("mce-visual-caret-hidden")}),500)}
return{show:function(e,r){var o,u
if(c(),wc(r))return null
if(!n(r))return i=function(e,t){var n,r=e.ownerDocument.createTextNode(ro),o=e.parentNode
if(t){if(n=e.previousSibling,uo(n)){if(lo(n))return n
if(ho(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,uo(n)){if(lo(n))return n
if(go(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(r,e),u=r.ownerDocument.createRange(),Ec(i.nextSibling)?(u.setStart(i,0),u.setEnd(i,0)):(u.setStart(i,1),u.setEnd(i,1)),u
i=function(e,t,n){var r,o=t.ownerDocument.createElement(e)
o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(((r=document.createElement("br")).setAttribute("data-mce-bogus","1"),r))
var i=t.parentNode
return n?i.insertBefore(o,t):t.nextSibling?i.insertBefore(o,t.nextSibling):i.appendChild(o),o}(s,r,e),o=xc(t,r,e),ou(i).css("top",o.top)
var f=ou('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(o).appendTo(t)[0]
return a.set(S.some({caret:f,element:r,before:e})),a.get().each((function(t){e&&ou(t.caret).addClass("mce-visual-caret-before")})),l(),(u=r.ownerDocument.createRange()).setStart(i,0),u.setEnd(i,0),u},hide:c,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){a.get().each((function(e){var n=xc(t,e.element,e.before)
ou(e.caret).css(Ee({},n))}))},destroy:function(){return Ur.clearInterval(o)}}},Nc=function(){return yc.isIE()||yc.isEdge()||yc.isFirefox()},Ec=function(e){return bc(e)||Cc(e)},kc=function(e){return Ec(e)||Bn(e)&&Nc()},_c=Hn,Ac=qn,Rc=Rn("display","block table table-cell table-caption list-item"),Tc=lo,Oc=so,Bc=_n,Pc=ko,Dc=function(e,t){for(var n;n=e(t);)if(!Oc(n))return n
return null},Lc=function(e,t,n,r,o){var i=new Vr(e,r),a=_c(e)||Oc(e)
if(t<0){if(a&&n(e=Dc(i.prev,!0)))return e
for(;e=Dc(i.prev,o);)if(n(e))return e}if(0<t){if(a&&n(e=Dc(i.next,!0)))return e
for(;e=Dc(i.next,o);)if(n(e))return e}return null},Ic=function(e,t){for(;e&&e!==t;){if(Rc(e))return e
e=e.parentNode}return null},Mc=function(e,t,n){return Ic(e.container(),n)===Ic(t.container(),n)},Fc=function(e,t){if(!t)return null
var n=t.container(),r=t.offset()
return Bc(n)?n.childNodes[r+e]:null},Uc=function(e,t){var n=t.ownerDocument.createRange()
return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},zc=function(e,t,n){for(var r,o,i,a=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[a],Tc(r)&&(r=r[a]),_c(r)||Ac(r)){if(i=n,Ic(r,o=t)===Ic(i,o))return r
break}if(Pc(r))break
n=n.parentNode}return null},jc=f(Uc,!0),Hc=f(Uc,!1),Vc=function(e,t,n){var r,o,i=f(zc,!0,t),a=f(zc,!1,t),u=n.startContainer,s=n.startOffset
if(so(u)){if(Bc(u)||(u=u.parentNode),"before"===(o=u.getAttribute("data-mce-caret"))&&(r=u.nextSibling,kc(r)))return jc(r)
if("after"===o&&(r=u.previousSibling,kc(r)))return Hc(r)}if(!n.collapsed)return n
if(Ln(u)){if(Tc(u)){if(1===e){if(r=a(u))return jc(r)
if(r=i(u))return Hc(r)}if(-1===e){if(r=i(u))return Hc(r)
if(r=a(u))return jc(r)}return n}if(ho(u)&&s>=u.data.length-1)return 1===e&&(r=a(u))?jc(r):n
if(go(u)&&s<=1)return-1===e&&(r=i(u))?Hc(r):n
if(s===u.data.length)return(r=a(u))?jc(r):n
if(0===s)return(r=i(u))?Hc(r):n}return n},qc=function(e,t){return S.from(Fc(e?0:-1,t)).filter(_c)},$c=function(e,t,n){var r=Vc(e,t,n)
return-1===e?Ss.fromRangeStart(r):Ss.fromRangeEnd(r)},Wc=function(e){return S.from(e.getNode()).map(Rt)},Kc=function(e,t){for(;t=e(t);)if(t.isVisible())return t
return t},Xc=function(e,t){var n=Mc(e,t)
return!(n||!Un(e.getNode()))||n};(Es=Ns=Ns||{})[Es.Backwards=-1]="Backwards",Es[Es.Forwards=1]="Forwards"
var Yc,Gc,Jc=Hn,Qc=Ln,Zc=_n,el=Un,tl=ko,nl=function(e){return So(e)||!!_o(t=e)&&!0!==X(oe(t.getElementsByTagName("*")),(function(e,t){return e||yo(t)}),!1)
var t},rl=Ao,ol=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},il=function(e,t){if(0<e){if(tl(t.previousSibling)&&!Qc(t.previousSibling))return ks.before(t)
if(Qc(t))return ks(t,0)}if(e<0){if(tl(t.nextSibling)&&!Qc(t.nextSibling))return ks.after(t)
if(Qc(t))return ks(t,t.data.length)}return e<0&&!el(t)?ks.after(t):ks.before(t)},al=function(e,t,n){var r,o,i,a
if(!Zc(n)||!t)return null
if(t.isEqual(ks.after(n))&&n.lastChild){if(a=ks.after(n.lastChild),e<0&&tl(n.lastChild)&&Zc(n.lastChild))return el(n.lastChild)?ks.before(n.lastChild):a}else a=t
var u,s,c,l=a.container(),f=a.offset()
if(Qc(l)){if(e<0&&0<f)return ks(l,--f)
if(0<e&&f<l.length)return ks(l,++f)
r=l}else{if(e<0&&0<f&&(o=ol(l,f-1),tl(o)))return!nl(o)&&(i=Lc(o,e,rl,o))?Qc(i)?ks(i,i.data.length):ks.after(i):Qc(o)?ks(o,o.data.length):ks.before(o)
if(0<e&&f<l.childNodes.length&&(o=ol(l,f),tl(o)))return el(o)?(u=n,(c=(s=o).nextSibling)&&tl(c)?Qc(c)?ks(c,0):ks.before(c):al(Ns.Forwards,ks.after(s),u)):!nl(o)&&(i=Lc(o,e,rl,o))?Qc(i)?ks(i,0):ks.before(i):Qc(o)?ks(o,0):ks.after(o)
r=o||a.getNode()}if((0<e&&a.isAtEnd()||e<0&&a.isAtStart())&&(r=Lc(r,e,b,n,!0),rl(r,n)))return il(e,r)
o=Lc(r,e,rl,n)
var d=Ne(W(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode
return n}(l,n),Jc))
return!d||o&&d.contains(o)?o?il(e,o):null:a=0<e?ks.after(d):ks.before(d)},ul=function(e){return{next:function(t){return al(Ns.Forwards,t,e)},prev:function(t){return al(Ns.Backwards,t,e)}}},sl=function(e){return ks.isTextPosition(e)?0===e.offset():ko(e.getNode())},cl=function(e){if(ks.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return ko(e.getNode(!0))},ll=function(e,t){return!ks.isTextPosition(e)&&!ks.isTextPosition(t)&&e.getNode()===t.getNode(!0)},fl=function(e,t,n){var r=ul(t)
return S.from(e?r.next(n):r.prev(n))},dl=function(e,t,n){return fl(e,t,n).bind((function(r){return Mc(n,r,t)&&function(e,t,n){return e?!ll(t,n)&&(r=t,!(!ks.isTextPosition(r)&&Un(r.getNode())))&&cl(t)&&sl(n):!ll(n,t)&&sl(t)&&cl(n)
var r}(e,n,r)?fl(e,t,r):S.some(r)}))},ml=function(e,t,n,r){return dl(e,t,n).bind((function(n){return r(n)?ml(e,t,n,r):S.some(n)}))},pl=function(e,t){var n,r,o,i,a,u=e?t.firstChild:t.lastChild
return Ln(u)?S.some(ks(u,e?0:u.data.length)):u?ko(u)?S.some(e?ks.before(u):Un(a=u)?ks.before(a):ks.after(a)):(r=t,o=u,i=(n=e)?ks.before(o):ks.after(o),fl(n,r,i)):S.none()},gl=f(fl,!0),hl=f(fl,!1),vl=f(pl,!0),yl=f(pl,!1),bl="_mce_caret",Cl=function(e){return _n(e)&&e.id===bl},wl=function(e,t){for(;t&&t!==e;){if(t.id===bl)return t
t=t.parentNode}return null},xl=function(e,t){return _n(t)&&e.isBlock(t)&&!t.innerHTML&&!bt.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t},Sl=function(e,t,n){return!(!1!==t.hasChildNodes()||!wl(e,t)||(o=n,i=(r=t).ownerDocument.createTextNode(ro),r.appendChild(i),o.setStart(i,0),o.setEnd(i,0),0))
var r,o,i},Nl=function(e,t,n,r){var o,i,a,u,s=n[t?"start":"end"],c=e.getRoot()
if(s){for(a=s[0],i=c,o=s.length-1;1<=o;o--){if(u=i.childNodes,Sl(c,i,r))return!0
if(s[o]>u.length-1)return!!Sl(c,i,r)||function(e,t){return yl(e).fold((function(){return!1}),(function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0}))}(i,r)
i=u[s[o]]}3===i.nodeType&&(a=Math.min(s[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(s[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},El=function(e){return Ln(e)&&0<e.data.length},kl=function(e,t,n){var r,o,i,a,u,s,c=e.get(n.id+"_"+t),l=n.keep
if(c){if(r=c.parentNode,o="start"===t?l?c.hasChildNodes()?(r=c.firstChild,1):El(c.nextSibling)?(r=c.nextSibling,0):El(c.previousSibling)?(r=c.previousSibling,c.previousSibling.data.length):(r=c.parentNode,e.nodeIndex(c)+1):e.nodeIndex(c):l?c.hasChildNodes()?(r=c.firstChild,1):El(c.previousSibling)?(r=c.previousSibling,c.previousSibling.data.length):(r=c.parentNode,e.nodeIndex(c)):e.nodeIndex(c),u=r,s=o,!l){for(a=c.previousSibling,i=c.nextSibling,Nt.each(Nt.grep(c.childNodes),(function(e){Ln(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));c=e.get(n.id+"_"+t);)e.remove(c,!0)
a&&i&&a.nodeType===i.nodeType&&Ln(a)&&!bt.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,s=o)}return S.some(ks(u,s))}return S.none()},_l=function(e,t,n){return 2===t?qs(io,n,e):3===t?(o=(r=e).getRng(),{start:Is(r.dom.getRoot(),ks.fromRangeStart(o)),end:Is(r.dom.getRoot(),ks.fromRangeEnd(o))}):t?{rng:e.getRng()}:Ws(e,!1)
var r,o},Al=function(e,t){(function(e,t){var n,r,o,i,a,u,s,c,l,f,d,m,p,g,h=e.dom
if(t){if(g=t,Nt.isArray(g.start))return m=t,p=(d=h).createRng(),Nl(d,!0,m,p)&&Nl(d,!1,m,p)?S.some(p):S.none()
if("string"==typeof t.start)return S.some((c=t,l=(s=h).createRng(),f=Ms(s.getRoot(),c.start),l.setStart(f.container(),f.offset()),f=Ms(s.getRoot(),c.end),l.setEnd(f.container(),f.offset()),l))
if(t.hasOwnProperty("id"))return a=kl(o=h,"start",i=t),u=kl(o,"end",i),Xu(a,u.or(a),(function(e,t){var n=o.createRng()
return n.setStart(xl(o,e.container()),e.offset()),n.setEnd(xl(o,t.container()),t.offset()),n}))
if(t.hasOwnProperty("name"))return n=h,r=t,S.from(n.select(r.name)[r.index]).map((function(e){var t=n.createRng()
return t.selectNode(e),t}))
if(t.hasOwnProperty("rng"))return S.some(t.rng)}return S.none()})(e,t).each((function(t){e.setRng(t)}))},Rl=function(e){return _n(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},Tl=(no,function(e){return" "===e}),Ol=function(e){return""!==e&&-1!==" \f\n\r\t\v".indexOf(e)},Bl=function(e){return!Ol(e)&&!Tl(e)},Pl=function(e){return!!e.nodeType},Dl=function(e,t,n){var r,o,i,a,u=n.startOffset,s=n.startContainer
if(!(n.startContainer===n.endContainer&&(a=n.startContainer.childNodes[n.startOffset])&&/^(IMG)$/.test(a.nodeName)||1!==s.nodeType))for(u<(i=s.childNodes).length?(s=i[u],r=new Vr(s,e.getParent(s,e.isBlock))):(s=i[i.length-1],(r=new Vr(s,e.getParent(s,e.isBlock))).next(!0)),o=r.current();o;o=r.next())if(3===o.nodeType&&!Fl(o))return n.setStart(o,0),void t.setRng(n)},Ll=function(e,t,n){if(e){var r=t?"nextSibling":"previousSibling"
for(e=n?e:e[r];e;e=e[r])if(1===e.nodeType||!Fl(e))return e}},Il=function(e,t){return Pl(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},Ml=function(e,t,n){return e.schema.isValidChild(t,n)},Fl=function(e,t){if(void 0===t&&(t=!1),D(e)&&Ln(e)){var n=t?e.data.replace(/ /g," "):e.data
return To(n)}return!1},Ul=function(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,(function(e,n){return t[n]||e}))),e},zl=function(e,t){return e=""+((e=e||"").nodeName||e),t=""+((t=t||"").nodeName||t),e.toLowerCase()===t.toLowerCase()},jl=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},Hl=function(e,t,n){return jl(e,e.getStyle(t,n),n)},Vl=function(e,t){var n
return e.getParent(t,(function(t){return(n=e.getStyle(t,"text-decoration"))&&"none"!==n})),n},ql=function(e,t,n){return e.getParents(t,n,e.getRoot())},$l=function(e,t,n){var r=["inline","block","selector","attributes","styles","classes"],o=function(e){return me(e,(function(e,t){return H(r,(function(e){return e===t}))}))}
return H(e.formatter.get(t),(function(t){var r=o(t)
return H(e.formatter.get(n),(function(e){var t,n,u,s=o(e)
return t=r,n=s,void 0===u&&(u=a),i(u).eq(t,n)}))}))},Wl=function(e){return he(e,"block")},Kl=function(e){return he(e,"selector")},Xl=function(e){return he(e,"inline")},Yl=Rl,Gl=ql,Jl=Fl,Ql=Il,Zl=function(e,t){for(var n=t;n;){if(_n(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t
n=n.parentNode}return t},ef=function(e,t,n,r){for(var o=t.data,i=n;e?0<=i:i<o.length;e?i--:i++)if(r(o.charAt(i)))return e?i+1:i
return-1},tf=function(e,t,n){return ef(e,t,n,(function(e){return Tl(e)||Ol(e)}))},nf=function(e,t,n){return ef(e,t,n,Bl)},rf=function(e,t,n,r,o,i){var a,u=e.getParent(n,e.isBlock)||t,s=function(t,n,r){var i=Ku(e),s=o?i.backwards:i.forwards
return S.from(s(t,n,(function(e,t){return Yl(e.parentNode)?-1:r(o,a=e,t)}),u))}
return s(n,r,tf).bind((function(e){return i?s(e.container,e.offset+(o?-1:0),nf):S.some(e)})).orThunk((function(){return a?S.some({container:a,offset:o?0:a.length}):S.none()}))},of=function(e,t,n,r,o){Ln(r)&&0===r.nodeValue.length&&r[o]&&(r=r[o])
for(var i=Gl(e,r),a=0;a<i.length;a++)for(var u=0;u<t.length;u++){var s=t[u]
if((!("collapsed"in s)||s.collapsed===n.collapsed)&&e.is(i[a],s.selector))return i[a]}return r},af=function(e,t,n,r){var o,i,a=e.dom,u=a.getRoot()
if(t[0].wrapper||(i=a.getParent(n,t[0].block,u)),i||(o=a.getParent(n,"LI,TD,TH"),i=a.getParent(Ln(n)?n.parentNode:n,(function(t){return t!==u&&Ql(e,t)}),o)),i&&t[0].wrapper&&(i=Gl(a,i,"ul,ol").reverse()[0]||i),!i)for(i=n;i[r]&&!a.isBlock(i[r])&&(i=i[r],!zl(i,"br")););return i||n},uf=function(e,t,n,r){var o=n.parentNode
return!D(n[r])&&(!(o!==t&&!P(o)&&!e.isBlock(o))||uf(e,t,o,r))},sf=function(e,t,n,r,o){var i,a,u=n,s=o?"previousSibling":"nextSibling",c=e.getRoot()
if(Ln(n)&&!Jl(n)&&(o?0<r:r<n.data.length))return n
for(;;){if(!t[0].block_expand&&e.isBlock(u))return u
for(i=u[s];i;i=i[s]){var l=Ln(i)&&!uf(e,c,i,s)
if(!Yl(i)&&(!Un(a=i)||!a.getAttribute("data-mce-bogus")||a.nextSibling)&&!Jl(i,l))return u}if(u===c||u.parentNode===c){n=u
break}u=u.parentNode}return n},cf=function(e){return Yl(e.parentNode)||Yl(e)},lf=function(e,t,n,r){void 0===r&&(r=!1)
var o=t.startContainer,i=t.startOffset,a=t.endContainer,u=t.endOffset,s=e.dom
return _n(o)&&o.hasChildNodes()&&(o=rs(o,i),Ln(o)&&(i=0)),_n(a)&&a.hasChildNodes()&&(a=rs(a,t.collapsed?u:u-1),Ln(a)&&(u=a.nodeValue.length)),o=Zl(s,o),a=Zl(s,a),cf(o)&&(o=Yl(o)?o:o.parentNode,o=t.collapsed?o.previousSibling||o:o.nextSibling||o,Ln(o)&&(i=t.collapsed?o.length:0)),cf(a)&&(a=Yl(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,Ln(a)&&(u=t.collapsed?0:a.length)),t.collapsed&&(rf(s,e.getBody(),o,i,!0,r).each((function(e){var t=e.container,n=e.offset
o=t,i=n})),rf(s,e.getBody(),a,u,!1,r).each((function(e){var t=e.container,n=e.offset
a=t,u=n}))),(n[0].inline||n[0].block_expand)&&(n[0].inline&&Ln(o)&&0!==i||(o=sf(s,n,o,i,!0)),n[0].inline&&Ln(a)&&u!==a.nodeValue.length||(a=sf(s,n,a,u,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(o=of(s,n,t,o,"previousSibling"),a=of(s,n,t,a,"nextSibling")),(n[0].block||n[0].selector)&&(o=af(e,n,o,"previousSibling"),a=af(e,n,a,"nextSibling"),n[0].block&&(s.isBlock(o)||(o=sf(s,n,o,i,!0)),s.isBlock(a)||(a=sf(s,n,a,u,!1)))),_n(o)&&(i=s.nodeIndex(o),o=o.parentNode),_n(a)&&(u=s.nodeIndex(a)+1,a=a.parentNode),{startContainer:o,startOffset:i,endContainer:a,endOffset:u}},ff=function(e,t){var n=e.childNodes
return t>=n.length?t=n.length-1:t<0&&(t=0),n[t]||e},df=function(e,t,n){var r=t.startContainer,o=t.startOffset,i=t.endContainer,a=t.endOffset,u=function(e){var t=e[0]
return 3===t.nodeType&&t===r&&o>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===a&&0<e.length&&t===i&&3===t.nodeType&&e.splice(e.length-1,1),e},s=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e)
return r},c=function(e,t){do{if(e.parentNode===t)return e
e=e.parentNode}while(e)},l=function(e,t,r){for(var o=r?"nextSibling":"previousSibling",i=e,a=i.parentNode;i&&i!==t;i=a){a=i.parentNode
var c=s(i===e?i:i[o],o)
c.length&&(r||c.reverse(),n(u(c)))}}
if(1===r.nodeType&&r.hasChildNodes()&&(r=ff(r,o)),1===i.nodeType&&i.hasChildNodes()&&(i=ff(i,a-1)),r===i)return n(u([r]))
for(var f=e.findCommonAncestor(r,i),d=r;d;d=d.parentNode){if(d===i)return l(r,f,!0)
if(d===f)break}for(d=i;d;d=d.parentNode){if(d===r)return l(i,f)
if(d===f)break}var m=c(r,f)||r,p=c(i,f)||i
l(r,m,!0)
var g=s(m===r?m:m.nextSibling,"nextSibling",p===i?p.nextSibling:p)
g.length&&n(u(g)),l(i,p)},mf=function(e){var t=[]
if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n))
return t},pf=function(e,t){var n=Du(t,"td[data-mce-selected],th[data-mce-selected]")
return 0<n.length?n:function(e){return W(J(e,(function(e){var t=ns(e)
return t?[Rt(t)]:[]})),eo)}(e)},gf=function(e){return pf(mf(e.selection.getSel()),Rt(e.getBody()))},hf=function(e){return Qt(e).fold(c([e]),(function(t){return[e].concat(hf(t))}))},vf=function(e){return Zt(e).fold(c([e]),(function(t){return"br"===Lt(t)?Wt(t).map((function(t){return[e].concat(vf(t))})).getOr([]):[e].concat(vf(t))}))},yf=function(e,t){return Xu((a=(i=t).startContainer,u=i.startOffset,Ln(a)?0===u?S.some(Rt(a)):S.none():S.from(a.childNodes[u]).map(Rt)),(r=(n=t).endContainer,o=n.endOffset,Ln(r)?o===r.data.length?S.some(Rt(r)):S.none():S.from(r.childNodes[o-1]).map(Rt)),(function(t,n){var r=Y(hf(e),f(Pt,t)),o=Y(vf(e),f(Pt,n))
return r.isSome()&&o.isSome()})).getOr(!1)
var n,r,o,i,a,u},bf=function(e,t,n,r){var o=n,i=new Vr(n,o),a=me(e.schema.getMoveCaretBeforeOnEnterElements(),(function(e,t){return!j(["td","th","table"],t.toLowerCase())}))
do{if(Ln(n)&&0!==Nt.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length))
if(a[n.nodeName])return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n))}while(n=r?i.next():i.prev())
"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},Cf=function(e){var t=e.selection.getSel()
return t&&0<t.rangeCount},wf=function(e,t){var n=gf(e)
0<n.length?q(n,(function(n){var r=n.dom,o=e.dom.createRng()
o.setStartBefore(r),o.setEndAfter(r),t(o,!0)})):t(e.selection.getRng(),!1)},xf=function(e,t,n){var r=Ws(e,t)
n(r),e.moveToBookmark(r)},Sf=(Yc=Ut,"text",{get:function(e){if(!Yc(e))throw new Error("Can only get text value of a text node")
return Gc(e).getOr("")},getOption:Gc=function(e){return Yc(e)?S.from(e.dom.nodeValue):S.none()},set:function(e,t){if(!Yc(e))throw new Error("Can only set raw text value of a text node")
e.dom.nodeValue=t}}),Nf=function(e){return Sf.get(e)},Ef=function(e,t,n,r){var o=t.uid,i=void 0===o?ju("mce-annotation"):o,a=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),u=_t("span",e)
Ou(u,Lu()),Kn(u,""+Mu(),i),Kn(u,""+Iu(),n)
var s,c=r(i,a),l=c.attributes,f=void 0===l?{}:l,d=c.classes,m=void 0===d?[]:d
return Xn(u,f),s=u,q(m,(function(e){Ou(s,e)})),u},kf=function(e,t,n,r,o){var i=[],a=Ef(e.getDoc(),o,n,r),u=bu(S.none()),s=function(){u.set(S.none())},c=function(e){q(e,l)},l=function(t){var n,r
switch(function(e,t,n,r){return $t(t).fold((function(){return"skipping"}),(function(o){return"br"===r||Ut(a=t)&&Nf(a)===ro?"valid":Ft(i=t)&&Bu(i,Lu())?"existing":Cl(t.dom)?"caret":Ml(e,n,r)&&Ml(e,Lt(o),n)?"valid":"invalid-child"
var i,a}))}(e,t,"span",Lt(t))){case"invalid-child":s()
var o=Gt(t)
c(o),s()
break
case"valid":var l=u.get().getOrThunk((function(){var e=qu(a)
return i.push(e),u.set(S.some(e)),e}))
un(n=t,r=l),ln(r,n)}}
return df(e.dom,t,(function(e){var t
s(),t=V(e,Rt),c(t)})),i},_f=function(e){var t,n=(t={},{register:function(e,n){t[e]={name:e,settings:n}},lookup:function(e){return t.hasOwnProperty(e)?S.from(t[e]).map((function(e){return e.settings})):S.none()}});(function(e,t){e.on("init",(function(){e.serializer.addNodeFilter("span",(function(e){q(e,(function(e){var n
n=e,S.from(n.attr(Iu())).bind(t.lookup).each((function(t){!1===t.persistent&&e.unwrap()}))}))}))}))})(e,n)
var r=function(e,t){var n=bu({}),r=function(e,t){o(e,(function(e){return t(e),e}))},o=function(e,t){var r=n.get(),o=t(r.hasOwnProperty(e)?r[e]:{listeners:[],previous:bu(S.none())})
r[e]=o,n.set(r)},i=Au((function(){var t,i,a=n.get(),u=(t=ie(a),(i=M.call(t,0)).sort(void 0),i)
q(u,(function(t){o(t,(function(n){var o=n.previous.get()
return Fu(e,S.some(t)).fold((function(){var e
o.isSome()&&(r(e=t,(function(t){q(t.listeners,(function(t){return t(!1,e)}))})),n.previous.set(S.none()))}),(function(e){var t,i,a,u=e.uid,s=e.name,c=e.elements
o.is(u)||(i=u,a=c,r(t=s,(function(e){q(e.listeners,(function(e){return e(!0,t,{uid:i,nodes:V(a,(function(e){return e.dom}))})}))})),n.previous.set(S.some(u)))})),{previous:n.previous,listeners:n.listeners}}))}))}),30)
return e.on("remove",(function(){i.cancel()})),e.on("NodeChange",(function(){i.throttle()})),{addListener:function(e,t){o(e,(function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}}))}}}(e)
return{register:function(e,t){n.register(e,t)},annotate:function(t,r){n.lookup(t).each((function(n){(function(e,t,n,r){e.undoManager.transact((function(){var o,i,a,u,s=e.selection,c=s.getRng(),l=0<gf(e).length
c.collapsed&&!l&&(a=lf(o=e,i=c,[{inline:!0}]),i.setStart(a.startContainer,a.startOffset),i.setEnd(a.endContainer,a.endOffset),o.selection.setRng(i)),s.getRng().collapsed&&!l?(u=Ef(e.getDoc(),r,t,n.decorate),Hu(u,no),s.getRng().insertNode(u.dom),s.select(u.dom)):xf(s,!1,(function(){wf(e,(function(o){kf(e,o,t,n.decorate,r)}))}))}))})(e,t,n,r)}))},annotationChanged:function(e,t){r.addListener(e,t)},remove:function(t){Fu(e,S.some(t)).each((function(e){var t=e.elements
q(t,pn)}))},getAll:function(t){var n,r,o,i,a=(n=t,r=Rt(e.getBody()),o=Du(r,"["+Iu()+'="'+n+'"]'),i={},q(o,(function(e){var t=Yn(e,Mu()),n=i.hasOwnProperty(t)?i[t]:[]
i[t]=n.concat([e])})),i)
return se(a,(function(e){return V(e,(function(e){return e.dom}))}))}}}
function Af(e){return{getBookmark:f(_l,e),moveToBookmark:f(Al,e)}}(Af=Af||{}).isBookmarkNode=Rl
var Rf,Tf=Af,Of=function(e,t){for(;t&&t!==e;){if(jn(t)||Hn(t))return t
t=t.parentNode}return null},Bf=function(e,t,n){if(n.collapsed)return!1
if(bt.browser.isIE()&&n.startOffset===n.endOffset-1&&n.startContainer===n.endContainer){var r=n.startContainer.childNodes[n.startOffset]
if(_n(r))return H(r.getClientRects(),(function(n){return ts(n,e,t)}))}return H(n.getClientRects(),(function(n){return ts(n,e,t)}))},Pf={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(e){return bt.mac?e.metaKey:e.ctrlKey&&!e.altKey}},Df=Hn,Lf=function(e,t){var n,r,o,i,a,u,s,c,l,f,m,p,g,h,v=t.dom,y=Nt.each,b=t.getDoc(),C=document,w=Math.abs,x=Math.round,S=t.getBody(),N={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},E=function(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))},k=function(e){var n=e.target
!function(e,t){if("longpress"!==e.type&&0!==e.type.indexOf("touch"))return E(e.target)&&!Bf(e.clientX,e.clientY,t)
var n=e.touches[0]
return E(e.target)&&!Bf(n.clientX,n.clientY,t)}(e,t.selection.getRng())||e.isDefaultPrevented()||t.selection.select(n)},_=function(e){return t.dom.is(e,"figure.image")?e.querySelector("img"):e},A=function(e){var n=oc(t)
return!!n&&"false"!==e.getAttribute("data-mce-resize")&&e!==t.getBody()&&Ot(Rt(e),n)},R=function(e,t,n){v.setStyles(_(e),{width:t,height:n})},T=function(e){var d,y,b,C,N,k,_,A=e.screenX-a,T=e.screenY-u
m=A*i[2]+s,p=T*i[3]+c,m=m<5?5:m,p=p<5?5:p,(E(n)&&!1!==t.getParam("resize_img_proportional",!0,"boolean")?!Pf.modifierPressed(e):Pf.modifierPressed(e))&&(w(A)>w(T)?(p=x(m*l),m=x(p/l)):(m=x(p/l),p=x(m*l))),R(r,m,p),d=0<(d=i.startPos.x+A)?d:0,y=0<(y=i.startPos.y+T)?y:0,v.setStyles(o,{left:d,top:y,display:"block"}),o.innerHTML=m+" &times; "+p,i[2]<0&&r.clientWidth<=m&&v.setStyle(r,"left",void 0+(s-m)),i[3]<0&&r.clientHeight<=p&&v.setStyle(r,"top",void 0+(c-p)),(A=S.scrollWidth-g)+(T=S.scrollHeight-h)!=0&&v.setStyles(o,{left:d-A,top:y-T}),f||(b=t,C=n,N=s,k=c,_="corner-"+i.name,b.fire("ObjectResizeStart",{target:C,width:N,height:k,origin:_}),f=!0)},O=function(){var e=f
f=!1
var a,u,s,c,l,d=function(e,r){r&&(n.style[e]||!t.schema.isValid(n.nodeName.toLowerCase(),e)?v.setStyle(_(n),e,r):v.setAttrib(_(n),e,""+r))}
e&&(d("width",m),d("height",p)),v.unbind(b,"mousemove",T),v.unbind(b,"mouseup",O),C!==b&&(v.unbind(C,"mousemove",T),v.unbind(C,"mouseup",O)),v.remove(r),v.remove(o),B(n),e&&(a=t,u=n,s=m,c=p,l="corner-"+i.name,a.fire("ObjectResized",{target:u,width:s,height:c,origin:l}),v.setAttrib(n,"style",v.getAttrib(n,"style"))),t.nodeChanged()},B=function(e){P(),I()
var f=v.getPos(e,S),d=f.x,w=f.y,x=e.getBoundingClientRect(),E=x.width||x.right-x.left,k=x.height||x.bottom-x.top
n!==e&&(n=e,m=p=0)
var B=t.fire("ObjectSelected",{target:e})
A(e)&&!B.isDefaultPrevented()?y(N,(function(e,t){var f=v.get("mceResizeHandle"+t)
f&&v.remove(f),f=v.add(S,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),11===bt.ie&&(f.contentEditable=!1),v.bind(f,"mousedown",(function(f){var m
f.stopImmediatePropagation(),f.preventDefault(),a=(m=f).screenX,u=m.screenY,s=_(n).clientWidth,c=_(n).clientHeight,l=c/s,(i=e).name=t,i.startPos={x:E*e[0]+d,y:k*e[1]+w},g=S.scrollWidth,h=S.scrollHeight,r=n.cloneNode(!0),v.addClass(r,"mce-clonedresizable"),v.setAttrib(r,"data-mce-bogus","all"),r.contentEditable=!1,r.unSelectabe=!0,v.setStyles(r,{left:d,top:w,margin:0}),R(r,E,k),r.removeAttribute("data-mce-selected"),S.appendChild(r),v.bind(b,"mousemove",T),v.bind(b,"mouseup",O),C!==b&&(v.bind(C,"mousemove",T),v.bind(C,"mouseup",O)),o=v.add(S,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},s+" &times; "+c)})),e.elm=f,v.setStyles(f,{left:E*e[0]+d-f.offsetWidth/2,top:k*e[1]+w-f.offsetHeight/2})})):P(),n.setAttribute("data-mce-selected","1")},P=function(){I(),n&&n.removeAttribute("data-mce-selected"),ue(N,(function(e,t){var n=v.get("mceResizeHandle"+t)
n&&(v.unbind(n),v.remove(n))}))},D=function(n){var r,o=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)}
f||t.removed||(y(v.select("img[data-mce-selected],hr[data-mce-selected]"),(function(e){e.removeAttribute("data-mce-selected")})),r="mousedown"===n.type?n.target:e.getNode(),o(r=v.$(r).closest("table,img,figure.image,hr")[0],S)&&(M(),o(e.getStart(!0),r)&&o(e.getEnd(!0),r))?B(r):P())},L=function(e){return Df(Of(t.getBody(),e))},I=function(){ue(N,(function(e){e.elm&&(v.unbind(e.elm),delete e.elm)}))},M=function(){try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(d){}}
return t.on("init",(function(){var e
M(),(bt.browser.isIE()||bt.browser.isEdge())&&(t.on("mousedown click",(function(e){var n=e.target,r=n.nodeName
f||!/^(TABLE|IMG|HR)$/.test(r)||L(n)||(2!==e.button&&t.selection.select(n,"TABLE"===r),"mousedown"===e.type&&t.nodeChanged())})),e=function(e){var n=function(e){Ur.setEditorTimeout(t,(function(){return t.selection.select(e)}))}
if(L(e.target)||qn(e.target))return e.preventDefault(),void n(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&n(e.target))},v.bind(S,"mscontrolselect",e),t.on("remove",(function(){return v.unbind(S,"mscontrolselect",e)})))
var r=Ur.throttle((function(e){t.composing||D(e)}))
t.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged",r),t.on("keyup compositionend",(function(e){n&&"TABLE"===n.nodeName&&r(e)})),t.on("hide blur",P),t.on("contextmenu longpress",k,!0)})),t.on("remove",I),{isResizable:A,showResizeRect:B,hideResizeRect:P,updateResizeRect:D,destroy:function(){n=r=null}}},If=function(e){return jn(e)||Hn(e)},Mf=function(e,t,n){var r,i,a,u,s,c=n
if(c.caretPositionFromPoint)(i=c.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(i.offsetNode,i.offset),r.collapse(!0))
else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t)
else if(c.body.createTextRange){r=c.body.createTextRange()
try{r.moveToPoint(e,t),r.collapse(!0)}catch(o){r=function(e,t,n){var r,o=n.elementFromPoint(e,t),i=n.body.createTextRange()
if(o&&"HTML"!==o.tagName||(o=n.body),i.moveToElementText(o),0<(r=(r=Nt.toArray(i.getClientRects())).sort((function(e,n){return(e=Math.abs(Math.max(e.top-t,e.bottom-t)))-Math.abs(Math.max(n.top-t,n.bottom-t))}))).length){t=(r[0].bottom+r[0].top)/2
try{return i.moveToPoint(e,t),i.collapse(!0),i}catch(u){}}return null}(e,t,n)}return a=r,u=n.body,s=a&&a.parentElement?a.parentElement():null,Hn(function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(s,u,If))?null:a}return r},Ff=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},Uf=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e
e=e.parentNode}return null}(e,t,n)},zf=function(e){return e&&"TABLE"===e.nodeName},jf=function(e,t,n){for(var r=new Vr(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(Un(t))return!0},Hf=function(e,t,n,r,o){var i,a,u=e.getRoot(),s=e.schema.getNonEmptyElements(),c=e.getParent(o.parentNode,e.isBlock)||u
if(r&&Un(o)&&t&&e.isEmpty(c))return S.some(Ss(o.parentNode,e.nodeIndex(o)))
for(var l,f,d=new Vr(o,c);a=d[r?"prev":"next"]();){if("false"===e.getContentEditableParent(a)||(f=u,lo(l=a)&&!1===Uf(l,f,Cl)))return S.none()
if(Ln(a)&&0<a.nodeValue.length)return!1===function(e,t,n){return Uf(e,t,(function(e){return"A"===e.nodeName}))}(a,u)?S.some(Ss(a,r?a.nodeValue.length:0)):S.none()
if(e.isBlock(a)||s[a.nodeName.toLowerCase()])return S.none()
i=a}return n&&i?S.some(Ss(i,0)):S.none()},Vf=function(e,t,n,r){var o,i,a,u=e.getRoot(),s=!1,c=r[(n?"start":"end")+"Container"],l=r[(n?"start":"end")+"Offset"],f=_n(c)&&l===c.childNodes.length,d=e.schema.getNonEmptyElements(),m=n
if(lo(c))return S.none()
if(_n(c)&&l>c.childNodes.length-1&&(m=!1),Mn(c)&&(c=u,l=0),c===u){if(m&&(o=c.childNodes[0<l?l-1:0])){if(lo(o))return S.none()
if(d[o.nodeName]||zf(o))return S.none()}if(c.hasChildNodes()){if(l=Math.min(!m&&0<l?l-1:l,c.childNodes.length-1),c=c.childNodes[l],l=Ln(c)&&f?c.data.length:0,!t&&c===u.lastChild&&zf(c))return S.none()
if(function(e,t){for(;t&&t!==e;){if(Hn(t))return!0
t=t.parentNode}return!1}(u,c)||lo(c))return S.none()
if(c.hasChildNodes()&&!1===zf(c)){var p=new Vr(o=c,u)
do{if(Hn(o)||lo(o)){s=!1
break}if(Ln(o)&&0<o.nodeValue.length){l=m?0:o.nodeValue.length,c=o,s=!0
break}if(d[o.nodeName.toLowerCase()]&&(!(i=o)||!/^(TD|TH|CAPTION)$/.test(i.nodeName))){l=e.nodeIndex(o),c=o.parentNode,m||l++,s=!0
break}}while(o=m?p.next():p.prev())}}}return t&&(Ln(c)&&0===l&&Hf(e,f,t,!0,c).each((function(e){c=e.container(),l=e.offset(),s=!0})),_n(c)&&(!(o=(o=c.childNodes[l])||c.childNodes[l-1])||!Un(o)||("A",(a=o).previousSibling&&"A"===a.previousSibling.nodeName)||jf(e,o,!1)||jf(e,o,!0)||Hf(e,f,t,!0,o).each((function(e){c=e.container(),l=e.offset(),s=!0})))),m&&!t&&Ln(c)&&l===c.nodeValue.length&&Hf(e,f,t,!1,c).each((function(e){c=e.container(),l=e.offset(),s=!0})),s?S.some(Ss(c,l)):S.none()},qf=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=Ss.fromRangeStart(t)
return Vf(e,n,!0,r).each((function(e){n&&Ss.isAbove(o,e)||r.setStart(e.container(),e.offset())})),n||Vf(e,n,!1,r).each((function(e){r.setEnd(e.container(),e.offset())})),n&&r.collapse(!0),Ff(t,r)?S.none():S.some(r)},$f=function(e,t){return e.splitText(t)},Wf=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset
return t===r&&Ln(t)?0<n&&n<t.nodeValue.length&&(t=(r=$f(t,n)).previousSibling,n<o?(t=r=$f(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(Ln(t)&&0<n&&n<t.nodeValue.length&&(t=$f(t,n),n=0),Ln(r)&&0<o&&o<r.nodeValue.length&&(o=(r=$f(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}}
function Kf(e){return{walk:function(t,n){return df(e,t,n)},split:Wf,normalize:function(t){return qf(e,t).fold(y,(function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0}))}}}(Rf=Kf=Kf||{}).compareRanges=Ff,Rf.getCaretRangeFromPoint=Mf,Rf.getSelectedNode=ns,Rf.getNode=rs
var Xf,Yf,Gf,Jf,Qf,Zf=Kf,ed=(Xf="height",Yf=function(e){var t=e.dom
return gn(e)?t.getBoundingClientRect().height:t.offsetHeight},{set:function(e,t){if(!I(t)&&!t.match(/^[0-9]+$/))throw new Error(Xf+".set accepts only positive integer values. Value was "+t)
var n=e.dom
$n(n)&&(n.style[Xf]=t+"px")},get:Gf=function(e){var t=Yf(e)
if(t<=0||null===t){var n=Qn(e,Xf)
return parseFloat(n)||0}return t},getOuter:Gf,aggregate:Jf=function(e,t){return X(t,(function(t,n){var r=Qn(e,n),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)},max:function(e,t,n){var r=Jf(e,n)
return r<t?t-r:0}}),td=function(e,t){return e.view(t).fold(c([]),(function(t){var n=e.owner(t),r=td(e,n)
return[t].concat(r)}))},nd=Object.freeze({__proto__:null,view:function(e){var t
return(e.dom===document?S.none():S.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(Rt)},owner:Vt}),rd=function(e){return"textarea"===Lt(e)},od=function(e,t){var n,r=function(e){var t=e.dom.ownerDocument,n=t.body,r=t.defaultView,o=t.documentElement
if(n===e.dom)return vn(n.offsetLeft,n.offsetTop)
var i=yn(null==r?void 0:r.pageYOffset,o.scrollTop),a=yn(null==r?void 0:r.pageXOffset,o.scrollLeft),u=yn(o.clientTop,n.clientTop),s=yn(o.clientLeft,n.clientLeft)
return bn(e).translate(a-s,i-u)}(e),o=(n=e,ed.get(n))
return{element:e,bottom:r.top+o,height:o,pos:r,cleanup:t}},id=function(e,t,n,r){cd(e,(function(o,i){return ud(e,t,n,r)}),n)},ad=function(e,t,n,r,o){var i,a,u={elm:r.element.dom,alignToTop:o}
i=u,e.fire("ScrollIntoView",i).isDefaultPrevented()||(n(t,Cn(t).top,r,o),a=u,e.fire("AfterScrollIntoView",a))},ud=function(e,t,n,r){var o=Rt(e.getBody()),i=Rt(e.getDoc())
o.dom.offsetWidth
var a=function(e,t){var n=function(e,t){var n=Gt(e)
if(0===n.length||rd(e))return{element:e,offset:t}
if(t<n.length&&!rd(n[t]))return{element:n[t],offset:0}
var r=n[n.length-1]
return rd(r)?{element:e,offset:t}:"img"===Lt(r)?{element:r,offset:1}:Ut(r)?{element:r,offset:Nf(r).length}:{element:r,offset:Gt(r).length}}(e,t),r=kt('<span data-mce-bogus="all">\ufeff</span>')
return un(n.element,r),od(r,(function(){return mn(r)}))}(Rt(n.startContainer),n.startOffset)
ad(e,i,t,a,r),a.cleanup()},sd=function(e,t,n,r){var o=Rt(e.getDoc())
ad(e,o,n,od(Rt(t),u),r)},cd=function(e,t,n){var r=n.startContainer,o=n.startOffset,i=n.endContainer,a=n.endOffset
t(Rt(r),Rt(i))
var u=e.dom.createRng()
u.setStart(r,o),u.setEnd(i,a),e.selection.setRng(n)},ld=function(e,t,n,r){var o,i=e.pos
n?wn(i.left,i.top,r):(o=i.top-t+e.height,wn(i.left,o,r))},fd=function(e,t,n,r,o){var i=n+t,a=r.pos.top,u=r.bottom,s=n<=u-a
a<t?ld(r,n,!1!==o,e):i<a?ld(r,n,s?!1!==o:!0===o,e):i<u&&!s&&ld(r,n,!0===o,e)},dd=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
fd(e,t,o,n,r)},md=function(e,t,n,r){var o=e.dom.defaultView.innerHeight
fd(e,t,o,n,r)
var i=function(e){var t,n,r,o=Rt(document),i=Cn(o),a=(t=e,r=(n=nd).owner(t),td(n,r)),u=bn(e),s=K(a,(function(e,t){var n=bn(t)
return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0})
return vn(s.left+u.left+i.left,s.top+u.top+i.top)}(n.element),a=Nn(window)
i.top<a.y?xn(n.element,!1!==r):i.top>a.bottom&&xn(n.element,!0===r)},pd=function(e,t,n){return id(e,dd,t,n)},gd=function(e,t,n){return sd(e,t,dd,n)},hd=function(e,t,n){return id(e,md,t,n)},vd=function(e,t,n){return sd(e,t,md,n)},yd=function(e,t,n){(e.inline?pd:hd)(e,t,n)},bd=function(e){var t=rn(e).dom
return e.dom===t.activeElement},Cd=function(e){return void 0===e&&(e=Rt(document)),S.from(e.dom.activeElement).map(Rt)},wd=hr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),xd=(wd.before,wd.on,wd.after,hr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}])),Sd=(xd.domRange,xd.relative,xd.exact,function(e,t,n,r){return{start:e,soffset:t,finish:n,foffset:r}}),Nd=lt().browser,Ed=function(e,t){var n=Ut(t)?Nf(t).length:Gt(t).length+1
return n<e?n:e<0?0:e},kd=function(e){return Sd(e.start,Ed(e.soffset,e.start),e.finish,Ed(e.foffset,e.finish))},_d=function(e,t){return!kn(t.dom)&&(Dt(e,t)||Pt(e,t))},Ad=function(e){return function(t){return _d(e,t.start)&&_d(e,t.finish)}},Rd=function(e){return!0===e.inline||Nd.isIE()},Td=function(e){return Sd(Rt(e.startContainer),e.startOffset,Rt(e.endContainer),e.endOffset)},Od=function(e){var t=document.createRange()
try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),S.some(t)}catch(m){return S.none()}},Bd=function(e){var t=Rd(e)?function(e){var t
return((t=qt(e).dom.getSelection())&&0!==t.rangeCount?S.from(t.getRangeAt(0)):S.none()).map(Td).filter(Ad(e))}(Rt(e.getBody())):S.none()
e.bookmark=t.isSome()?t:e.bookmark},Pd=function(e){return(e.bookmark?e.bookmark:S.none()).bind((function(t){return n=Rt(e.getBody()),r=t,S.from(r).filter(Ad(n)).map(kd)
var n,r})).bind(Od)},Dd={isEditorUIElement:function(e){var t=e.className.toString()
return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},Ld=function(e){var t=_u((function(){Bd(e)}),0)
e.on("init",(function(){var n,r,o
e.inline&&(n=e,r=t,o=function(){r.throttle()},du.DOM.bind(document,"mouseup",o),n.on("remove",(function(){du.DOM.unbind(document,"mouseup",o)}))),function(e,t){var n,r
lt().browser.isIE()?(r=e).on("focusout",(function(){Bd(r)})):(n=t,e.on("mouseup touchend",(function(e){n.throttle()}))),e.on("keyup NodeChange",(function(t){var n
"nodechange"===(n=t).type&&n.selectionChange||Bd(e)}))}(e,t)})),e.on("remove",(function(){t.cancel()}))},Id=du.DOM,Md=function(e,t){var n=e.getParam("custom_ui_selector","","string")
return null!==Id.getParent(t,(function(t){return Dd.isEditorUIElement(t)||!!n&&e.dom.is(t,n)}))},Fd=function(e,t){var n=t.editor
Ld(n),n.on("focusin",(function(){var t=e.focusedEditor
t!==this&&(t&&t.fire("blur",{focusedEditor:this}),e.setActive(this),(e.focusedEditor=this).fire("focus",{blurredEditor:t}),this.focus(!0))})),n.on("focusout",(function(){var t=this
Ur.setEditorTimeout(t,(function(){var n=e.focusedEditor
Md(t,function(t){try{var n=rn(Rt(t.getElement()))
return Cd(n).fold((function(){return document.body}),(function(e){return e.dom}))}catch(e){return document.body}}(t))||n!==t||(t.fire("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),Qf||(Qf=function(t){var n=e.activeEditor
n&&function(e){if(nn()&&D(e.target)){var t=Rt(e.target)
if(Ft(t)&&function(e){return D(e.dom.shadowRoot)}(t)&&e.composed&&e.composedPath){var n=e.composedPath()
if(n)return ne(n)}}return S.from(e.target)}(t).each((function(t){t.ownerDocument===document&&(t===document.body||Md(n,t)||e.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))}))},Id.bind(document,"focusin",Qf))},Ud=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(Id.unbind(document,"focusin",Qf),Qf=null)},zd=function(e,t){(function(e,t){return((n=t).collapsed?S.from(rs(n.startContainer,n.startOffset)).map(Rt):S.none()).bind((function(t){return Zr(t)?S.some(t):!1===Dt(e,t)?S.some(e):S.none()}))
var n})(Rt(e.getBody()),t).bind((function(e){return vl(e.dom)})).fold((function(){e.selection.normalize()}),(function(t){return e.selection.setRng(t.toRange())}))},jd=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},Hd=function(e){return e.inline?(n=e.getBody())&&function(e){return bd(e)||Cd(rn(t=e)).filter((function(e){return t.dom.contains(e.dom)})).isSome()
var t}(Rt(n)):(t=e).iframeElement&&bd(Rt(t.iframeElement))
var t,n},Vd=function(e){var t=e.selection,n=e.getBody(),r=t.getRng()
e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===Hd(e)&&Pd(e).each((function(t){e.selection.setRng(t),r=t}))
var o,i,a=(o=e,i=t.getNode(),o.dom.getParent(i,(function(e){return"true"===o.dom.getContentEditable(e)})))
if(e.$.contains(n,a))return jd(a),zd(e,r),void qd(e)
e.inline||(bt.opera||jd(n),e.getWin().focus()),(bt.gecko||e.inline)&&(jd(n),zd(e,r)),qd(e)},qd=function(e){return e.editorManager.setActive(e)},$d=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset
return S.from(i).map(Rt).map((function(e){return r&&t.collapsed?e:Jt(e,o(e,a)).getOr(e)})).bind((function(e){return Ft(e)?S.some(e):$t(e).filter(Ft)})).map((function(e){return e.dom})).getOr(e)},Wd=function(e,t,n){return $d(e,t,!0,n,(function(e,t){return Math.min(e.dom.childNodes.length,t)}))},Kd=function(e,t,n){return $d(e,t,!1,n,(function(e,t){return 0<t?t-1:t}))},Xd=function(e,t){for(var n=e;e&&Ln(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling
return e||n},Yd=function(e,t){return V(t,(function(t){var n=e.fire("GetSelectionRange",{range:t})
return n.range!==t?n.range:t}))},Gd=function(e){return L(e)?e:y},Jd=function(e,t,n){var r=t(e),o=Gd(n)
return r.orThunk((function(){return o(e)?S.none():function(e,t,n){for(var r=e.dom,o=Gd(n);r.parentNode;){r=r.parentNode
var i=Rt(r),a=t(i)
if(a.isSome())return a
if(o(i))break}return S.none()}(e,t,o)}))},Qd=zl,Zd=function(e,t,n){var r=e.formatter.get(n)
if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0
return!1},em=function(e,t,n,r){var o=e.dom.getRoot()
return t!==o&&(t=e.dom.getParent(t,(function(t){return!!Zd(e,t,n)||t.parentNode===o||!!rm(e,t,n,r,!0)})),rm(e,t,n,r))},tm=function(e,t,n){return!!Qd(t,n.inline)||!!Qd(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0)},nm=function(e,t,n,r,o,i){var a,u,s,c=n[r]
if(n.onmatch)return n.onmatch(t,n,r)
if(c)if(void 0===c.length){for(a in c)if(c.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):Hl(e,t,a),o&&!u&&!n.exact)return
if((!o||n.exact)&&!Qd(u,jl(e,Ul(c[a],i),a)))return}}else for(s=0;s<c.length;s++)if("attributes"===r?e.getAttrib(t,c[s]):Hl(e,t,c[s]))return n
return n},rm=function(e,t,n,r,o){var i,a,u,s,c=e.formatter.get(n),l=e.dom
if(c&&t)for(a=0;a<c.length;a++)if(i=c[a],tm(e.dom,t,i)&&nm(l,t,i,"attributes",o,r)&&nm(l,t,i,"styles",o,r)){if(s=i.classes)for(u=0;u<s.length;u++)if(!e.dom.hasClass(t,s[u]))return
return i}},om=function(e,t,n,r){if(r)return em(e,r,t,n)
if(r=e.selection.getNode(),em(e,r,t,n))return!0
var o=e.selection.getStart()
return!(o===r||!em(e,o,t,n))},im=function(e,t,n){return X(n,(function(n,r){var o,i=(o=r,H(e.formatter.get(o),(function(e){var t=function(e){return 1<e.length&&"%"===e.charAt(0)}
return H(["styles","attributes"],(function(n){return pe(e,n).exists((function(e){var n=R(e)?e:function(e){return t=[],ue(e,(function(e,n){t.push(e)})),t
var t}(e)
return H(n,t)}))}))})))
return e.formatter.matchNode(t,r,{},i)?n.concat([r]):n}),[])},am={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},um=function(e,t,n){var r=n?"lastChild":"firstChild",o=n?"prev":"next"
if(e[r])return e[r]
if(e!==t){var i=e[o]
if(i)return i
for(var a=e.parent;a&&a!==t;a=a.parent)if(i=a[o])return i}},sm=function(e){var t="a"===e.name&&!e.attr("href")&&e.attr("id")
return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t},cm=(lm.create=function(e,t){var n=new lm(e,am[e]||1)
return t&&ue(t,(function(e,t){n.attr(t,e)})),n},lm.prototype.replace=function(e){return e.parent&&e.remove(),this.insert(e,this),this.remove(),this},lm.prototype.attr=function(e,t){var n,r=this
if("string"!=typeof e)return null!=e&&ue(e,(function(e,t){r.attr(t,e)})),r
if(n=r.attributes){if(void 0===t)return n.map[e]
if(null===t){if(e in n.map){delete n.map[e]
for(var o=n.length;o--;)if(n[o].name===e)return n.splice(o,1),r}return r}if(e in n.map){for(o=n.length;o--;)if(n[o].name===e){n[o].value=t
break}}else n.push({name:e,value:t})
return n.map[e]=t,r}},lm.prototype.clone=function(){var e,t=new lm(this.name,this.type)
if(e=this.attributes){var n=[]
n.map={}
for(var r=0,o=e.length;r<o;r++){var i=e[r]
"id"!==i.name&&(n[n.length]={name:i.name,value:i.value},n.map[i.name]=i.value)}t.attributes=n}return t.value=this.value,t.shortEnded=this.shortEnded,t},lm.prototype.wrap=function(e){return this.parent.insert(e,this),e.append(this),this},lm.prototype.unwrap=function(){for(var e=this.firstChild;e;){var t=e.next
this.insert(e,this,!0),e=t}this.remove()},lm.prototype.remove=function(){var e=this.parent,t=this.next,n=this.prev
return e&&(e.firstChild===this?(e.firstChild=t)&&(t.prev=null):n.next=t,e.lastChild===this?(e.lastChild=n)&&(n.next=null):t.prev=n,this.parent=this.next=this.prev=null),this},lm.prototype.append=function(e){e.parent&&e.remove()
var t=this.lastChild
return t?((t.next=e).prev=t,this.lastChild=e):this.lastChild=this.firstChild=e,e.parent=this,e},lm.prototype.insert=function(e,t,n){e.parent&&e.remove()
var r=t.parent||this
return n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,(e.next=t).prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,(e.prev=t).next=e),e.parent=r,e},lm.prototype.getAll=function(e){for(var t=[],n=this.firstChild;n;n=um(n,this))n.name===e&&t.push(n)
return t},lm.prototype.empty=function(){if(this.firstChild){for(var e=[],t=this.firstChild;t;t=um(t,this))e.push(t)
for(var n=e.length;n--;)(t=e[n]).parent=t.firstChild=t.lastChild=t.next=t.prev=null}return this.firstChild=this.lastChild=null,this},lm.prototype.isEmpty=function(e,t,n){void 0===t&&(t={})
var r=this.firstChild
if(sm(this))return!1
if(r)do{if(1===r.type){if(r.attr("data-mce-bogus"))continue
if(e[r.name])return!1
if(sm(r))return!1}if(8===r.type)return!1
if(3===r.type&&!function(e){if(To(e.value)){var t=e.parent
return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)}}(r))return!1
if(3===r.type&&r.parent&&t[r.parent.name]&&To(r.value))return!1
if(n&&n(r))return!1}while(r=um(r,this))
return!0},lm.prototype.walk=function(e){return um(this,null,e)},lm)
function lm(e,t){this.name=e,1===(this.type=t)&&(this.attributes=[],this.attributes.map={})}var fm=Nt.makeMap,dm=function(e){var t=[],n=(e=e||{}).indent,r=fm(e.indent_before||""),o=fm(e.indent_after||""),i=Qo.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="html"===e.element_format
return{start:function(e,u,s){var c,l,f,d
if(n&&r[e]&&0<t.length&&0<(d=t[t.length-1]).length&&"\n"!==d&&t.push("\n"),t.push("<",e),u)for(c=0,l=u.length;c<l;c++)f=u[c],t.push(" ",f.name,'="',i(f.value,!0),'"')
t[t.length]=!s||a?">":" />",s&&n&&o[e]&&0<t.length&&0<(d=t[t.length-1]).length&&"\n"!==d&&t.push("\n")},end:function(e){var r
t.push("</",e,">"),n&&o[e]&&0<t.length&&0<(r=t[t.length-1]).length&&"\n"!==r&&t.push("\n")},text:function(e,n){0<e.length&&(t[t.length]=n?e:i(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,r){r?t.push("<?",e," ",i(r),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}},mm=function(e,t){void 0===t&&(t=si())
var n=dm(e)
return(e=e||{}).validate=!("validate"in e)||e.validate,{serialize:function(r){var o=e.validate,i={3:function(e){n.text(e.value,e.raw)},8:function(e){n.comment(e.value)},7:function(e){n.pi(e.name,e.value)},10:function(e){n.doctype(e.value)},4:function(e){n.cdata(e.value)},11:function(e){if(e=e.firstChild)for(;a(e),e=e.next;);}}
n.reset()
var a=function(e){var r,u,s,c,l,f,d,m,p,g=i[e.type]
if(g)g(e)
else{if(r=e.name,u=e.shortEnded,s=e.attributes,o&&s&&1<s.length&&((f=[]).map={},p=t.getElementRule(e.name))){for(d=0,m=p.attributesOrder.length;d<m;d++)(c=p.attributesOrder[d])in s.map&&(l=s.map[c],f.map[c]=l,f.push({name:c,value:l}))
for(d=0,m=s.length;d<m;d++)(c=s[d].name)in f.map||(l=s.map[c],f.map[c]=l,f.push({name:c,value:l}))
s=f}if(n.start(e.name,s,u),!u){if(e=e.firstChild)for(;a(e),e=e.next;);n.end(r)}}}
return 1!==r.type||e.inner?i[11](r):a(r),n.getContent()}}},pm=function(e,t){return e.replace(new RegExp(t.prefix+"_[0-9]+","g"),(function(e){return pe(t.uris,e).getOr(e)}))},gm=["img","video"],hm=function(e,t,n){return!e.allow_html_data_urls&&(/^data:image\//i.test(t)?(r=e.allow_svg_data_urls,o=n,!(P(r)?j(gm,o):r)&&/^data:image\/svg\+xml/i.test(t)):/^data:/i.test(t))
var r,o},vm=function(e,t,n){var r,o,i=1,a=e.getShortEndedElements(),u=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g
for(u.lastIndex=r=n;o=u.exec(t);){if(r=u.lastIndex,"/"===o[1])i--
else if(!o[1]){if(o[2]in a)continue
i++}if(0===i)break}return r}
function ym(e,t){void 0===t&&(t=si())
var n=function(){}
!1!==(e=e||{}).fix_self_closing&&(e.fix_self_closing=!0)
var r=e.comment?e.comment:n,o=e.cdata?e.cdata:n,i=e.text?e.text:n,a=e.start?e.start:n,u=e.end?e.end:n,s=e.pi?e.pi:n,c=e.doctype?e.doctype:n
return{parse:function(n,l){void 0===l&&(l="html"),function(n,l){void 0===l&&(l="html")
for(var f,d,m,p,g,h,v,y,b,C,w,x,S,N,E,k,_,A,R,T=n.html,O=0,B=[],P=0,D=Qo.decode,L=Nt.makeMap("src,href,data,background,formaction,poster,xlink:href"),I=/((java|vb)script|mhtml):/i,M="html"===l?0:1,F=function(e){for(var t,n=B.length;n--&&B[n].name!==e;);if(0<=n){for(t=B.length-1;n<=t;t--)(e=B[t]).valid&&u(e.name)
B.length=n}},U=function(e,t){return i(pm(e,n),t)},z=function(t){""!==t&&(">"===t.charAt(0)&&(t=" "+t),e.allow_conditional_comments||"[if"!==t.substr(0,3).toLowerCase()||(t=" "+t),r(pm(t,n)))},j=function(e,t){var n=e||"",r=!Ue(n,"--"),o=function(e,t,n){void 0===n&&(n=0)
var r=e.toLowerCase()
if(-1!==r.indexOf("[if ",n)&&(u=n,/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))){var o=r.indexOf("[endif]",n)
return r.indexOf(">",o)}if(t){var i=r.indexOf(">",n)
return-1!==i?i:r.length}var a=/--!?>/
a.lastIndex=n
var u,s=a.exec(e)
return s?s.index+s[0].length:r.length}(T,r,t)
return e=T.substr(t,o-t),z(r?n+e:e),o+1},H=function(t,r,o,i,a){var u,s,c,l
if(c=(r=r.toLowerCase())in K?r:D(o||i||a||""),o=pe(n.uris,c).getOr(c),X&&!y&&0==(0===(l=r).indexOf("data-")||0===l.indexOf("aria-"))){if(!(u=N[r])&&E){for(s=E.length;s--&&!(u=E[s]).pattern.test(r););-1===s&&(u=null)}if(!u)return
if(u.validValues&&!(o in u.validValues))return}if(L[r]&&!e.allow_script_urls){var f=o.replace(/[\s\u0000-\u001F]+/g,"")
try{f=decodeURIComponent(f)}catch(x){f=unescape(f)}if(I.test(f))return
if(hm(e,f,t))return}y&&(r in L||0===r.indexOf("on"))||(p.map[r]=o,p.push({name:r,value:o}))},V=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),q=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,$=t.getShortEndedElements(),W=e.self_closing_elements||t.getSelfClosingElements(),K=t.getBoolAttrs(),X=e.validate,Y=e.remove_internals,G=e.fix_self_closing,J=t.getSpecialElements(),Q=T+">";f=V.exec(Q);){var Z=f[0]
if(O<f.index&&U(D(T.substr(O,f.index-O))),d=f[7])":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),F(d)
else if(d=f[8]){if(f.index+Z.length>T.length){U(D(T.substr(f.index))),O=f.index+Z.length
continue}":"===(d=d.toLowerCase()).charAt(0)&&(d=d.substr(1)),b=d in $,G&&W[d]&&0<B.length&&B[B.length-1].name===d&&F(d)
var ee=function(e,t){var n=e.exec(t)
if(n){var r=n[1],o=n[2]
return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null}(q,f[9])
if(null!==ee){if("all"===ee){O=vm(t,T,V.lastIndex),V.lastIndex=O
continue}w=!1}if(!X||(C=t.getElementRule(d))){if(w=!0,X&&(N=C.attributes,E=C.attributePatterns),(S=f[9])?((y=-1!==S.indexOf("data-mce-type"))&&Y&&(w=!1),(p=[]).map={},S.replace(q,(function(e,t,n,r,o){return H(d,t,n,r,o),""}))):(p=[]).map={},X&&!y){if(k=C.attributesRequired,_=C.attributesDefault,A=C.attributesForced,C.removeEmptyAttrs&&!p.length&&(w=!1),A)for(g=A.length;g--;)v=(x=A[g]).name,"{$uid}"===(R=x.value)&&(R="mce_"+P++),p.map[v]=R,p.push({name:v,value:R})
if(_)for(g=_.length;g--;)(v=(x=_[g]).name)in p.map||("{$uid}"===(R=x.value)&&(R="mce_"+P++),p.map[v]=R,p.push({name:v,value:R}))
if(k){for(g=k.length;g--&&!(k[g]in p.map););-1===g&&(w=!1)}if(x=p.map["data-mce-bogus"]){if("all"===x){O=vm(t,T,V.lastIndex),V.lastIndex=O
continue}w=!1}}w&&a(d,p,b)}else w=!1
if(m=J[d]){m.lastIndex=O=f.index+Z.length,O=(f=m.exec(T))?(w&&(h=T.substr(O,f.index-O)),f.index+f[0].length):(h=T.substr(O),T.length),w&&(0<h.length&&U(h,!0),u(d)),V.lastIndex=O
continue}b||(S&&S.indexOf("/")===S.length-1?w&&u(d):B.push({name:d,valid:w}))}else if(d=f[1])z(d)
else if(d=f[2]){if(!(1==M||e.preserve_cdata||0<B.length&&t.isValidChild(B[B.length-1].name,"#cdata"))){O=j("",f.index+2),V.lastIndex=O
continue}o(d)}else if(d=f[3])c(d)
else{if((d=f[4])||"<!"===Z){O=j(d,f.index+Z.length),V.lastIndex=O
continue}if(d=f[5]){if(1!=M){O=j("?",f.index+2),V.lastIndex=O
continue}s(d,f[6])}}O=f.index+Z.length}for(O<T.length&&U(D(T.substr(O))),g=B.length-1;0<=g;g--)(d=B[g]).valid&&u(d.name)}(function(e){for(var t,n=/data:[^;]+;base64,([a-z0-9\+\/=]+)/gi,r=[],o={},i=ju("img"),a=0,u=0;t=n.exec(e);){var s=t[0],c=i+"_"+u++
o[c]=s,a<t.index&&r.push(e.substr(a,t.index-a)),r.push(c),a=t.index+s.length}return 0===a?{prefix:i,uris:o,html:e}:(a<e.length&&r.push(e.substr(a)),{prefix:i,uris:o,html:r.join("")})}(n),l)}}}(ym=ym||{}).findEndTag=vm
var bm,Cm=ym,wm=function(e,t){var n,r,o,i,a,u,s,c=t,l=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,f=e.schema
a=e.getTempAttrs(),u=c,s=new RegExp(["\\s?("+a.join("|")+')="[^"]+"'].join("|"),"gi"),c=u.replace(s,"")
for(var d=f.getShortEndedElements();i=l.exec(c);)r=l.lastIndex,o=i[0].length,n=d[i[1]]?r:Cm.findEndTag(f,c,r),c=c.substring(0,r-o)+c.substring(n),l.lastIndex=r-o
return io(c)},xm=wm,Sm=Nt.each,Nm=function(e){this.compare=function(t,n){if(t.nodeName!==n.nodeName)return!1
var r=function(t){var n={}
return Sm(e.getAttribs(t),(function(r){var o=r.nodeName.toLowerCase()
0!==o.indexOf("_")&&"style"!==o&&0!==o.indexOf("data-")&&(n[o]=e.getAttrib(t,o))})),n},o=function(e,t){var n,r
for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1
if(e[r]!==n)return!1
delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1
return!0}
return!(!o(r(t),r(n))||!o(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))||Rl(t)||Rl(n))}},Em=function(e,t,n){return S.from(n.container()).filter(Ln).exists((function(r){var o=e?0:-1
return t(r.data.charAt(n.offset()+o))}))},km=f(Em,!0,Ol),_m=f(Em,!1,Ol),Am=function(e){var t=e.container()
return Ln(t)&&(0===t.data.length||oo(t.data)&&Tf.isBookmarkNode(t.parentNode))},Rm=function(e,t){return function(n){return S.from(Fc(e?0:-1,n)).filter(t).isSome()}},Tm=function(e){return zn(e)&&"block"===Qn(Rt(e),"display")},Om=function(e){return Hn(e)&&!(_n(t=e)&&"all"===t.getAttribute("data-mce-bogus"))
var t},Bm=Rm(!0,Tm),Pm=Rm(!1,Tm),Dm=Rm(!0,qn),Lm=Rm(!1,qn),Im=Rm(!0,Bn),Mm=Rm(!1,Bn),Fm=Rm(!0,Om),Um=Rm(!1,Om),zm=function(e){dn(e),ln(e,kt('<br data-mce-bogus="1">'))},jm=function(e){Zt(e).each((function(t){Wt(t).each((function(n){Kr(e)&&Yr(t)&&Kr(n)&&mn(t)}))}))},Hm=function(e,t){return function(e,t,n){return Dt(t,e)?function(e,t){for(var n=L(t)?t:y,r=e.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,a=Rt(i)
if(o.push(a),!0===n(a))break
r=i}return o}(e,(function(e){return n(e)||Pt(e,t)})).slice(0,-1):[]}(e,t,y)},Vm=function(e,t){return[e].concat(Hm(e,t))},qm=function(e,t,n){return ml(e,t,n,Am)},$m=function(e,t){return Y(Vm(Rt(t.container()),e),Kr)},Wm=function(e,t,n){return qm(e,t.dom,n).forall((function(e){return $m(t,n).fold((function(){return!1===Mc(e,n,t.dom)}),(function(r){return!1===Mc(e,n,t.dom)&&Dt(r,Rt(e.container()))}))}))},Km=function(e,t,n){return $m(t,n).fold((function(){return qm(e,t.dom,n).forall((function(e){return!1===Mc(e,n,t.dom)}))}),(function(t){return qm(e,t.dom,n).isNone()}))},Xm=f(Km,!1),Ym=f(Km,!0),Gm=f(Wm,!1),Jm=f(Wm,!0),Qm=function(e){return Wc(e).exists(Yr)},Zm=function(e,t,n){var r=W(Vm(Rt(n.container()),t),Kr),o=ne(r).getOr(t)
return fl(e,o.dom,n).filter(Qm)},ep=function(e,t){return Wc(t).exists(Yr)||Zm(!0,e,t).isSome()},tp=function(e,t){return n=t,S.from(n.getNode(!0)).map(Rt).exists(Yr)||Zm(!1,e,t).isSome()
var n},np=f(Zm,!1),rp=f(Zm,!0),op=function(e){return Ss.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},ip=function(e,t){var n=W(Vm(Rt(t.container()),e),Kr)
return ne(n).getOr(e)},ap=function(e,t){return op(t)?_m(t):_m(t)||hl(ip(e,t).dom,t).exists(_m)},up=function(e,t){return op(t)?km(t):km(t)||gl(ip(e,t).dom,t).exists(km)},sp=function(e){return Wc(e).bind((function(e){return Nr(e,Ft)})).exists((function(e){return t=Qn(e,"white-space"),j(["pre","pre-wrap"],t)
var t}))},cp=function(e,t){return!sp(t)&&(Xm(e,t)||Gm(e,t)||tp(e,t)||ap(e,t))},lp=function(e,t){return!sp(t)&&(Ym(e,t)||Jm(e,t)||ep(e,t)||up(e,t))},fp=function(e,t){return cp(e,t)||lp(e,(r=(n=t).container(),o=n.offset(),Ln(r)&&o<r.data.length?Ss(r,o+1):n))
var n,r,o},dp=function(e,t){return Tl(e.charAt(t))},mp=function(e){var t=e.container()
return Ln(t)&&Fe(t.data,no)},pp=function(e,t){return S.some(t).filter(mp).bind((function(t){var n,r,o,i,a,u,s,c,l=t.container()
return a=e,s=(u=l).data,c=Ss(u,0),dp(s,0)&&!fp(a,c)&&(u.data=" "+s.slice(1),1)||function(e){var t,n=e.data,r=(t=n.split(""),V(t,(function(e,n){return Tl(e)&&0<n&&n<t.length-1&&Bl(t[n-1])&&Bl(t[n+1])?" ":e})).join(""))
return r!==n&&(e.data=r,!0)}(l)||(n=e,o=(r=l).data,i=Ss(r,o.length-1),dp(o,o.length-1)&&!fp(n,i)&&(r.data=o.slice(0,-1)+" ",1))?S.some(t):S.none()}))},gp=function(e){var t=Rt(e.getBody())
e.selection.isCollapsed()&&pp(t,Ss.fromRangeStart(e.selection.getRng())).each((function(t){e.selection.setRng(t.toRange())}))},hp=function(e,t,n){var r,o,i,a,u,s,c,l
0!==n&&(r=Rt(e),o=Sr(r,Kr).getOr(r),i=e.data.slice(t,t+n),a=t+n>=e.data.length&&lp(o,ks(e,e.data.length)),u=0===t&&cp(o,ks(e,0)),e.replaceData(t,n,(c=u,l=a,X(s=i,(function(e,t){return Ol(t)||Tl(t)?e.previousCharIsSpace||""===e.str&&c||e.str.length===s.length-1&&l?{previousCharIsSpace:!1,str:e.str+no}:{previousCharIsSpace:!0,str:e.str+" "}:{previousCharIsSpace:!1,str:e.str+t}}),{previousCharIsSpace:!1,str:""}).str)))},vp=function(e,t){var n=e.data.slice(t),r=n.length-He(n).length
return hp(e,t,r)},yp=function(e,t){var n=e.data.slice(0,t),r=n.length-Ve(n).length
return hp(e,t-r,r)},bp=function(e,t,n,r){void 0===r&&(r=!0)
var o=Ve(e.data).length,i=r?e:t,a=r?t:e
return r?i.appendData(a.data):i.insertData(0,a.data),mn(Rt(a)),n&&vp(i,o),i},Cp=function(e,t){return r=e,o=(n=t).container(),i=n.offset(),!1===ks.isTextPosition(n)&&o===r.parentNode&&i>ks.before(r).offset()?ks(t.container(),t.offset()-1):t
var n,r,o,i},wp=function(e){return ko(e.previousSibling)?S.some((t=e.previousSibling,Ln(t)?ks(t,t.data.length):ks.after(t))):e.previousSibling?yl(e.previousSibling):S.none()
var t},xp=function(e){return ko(e.nextSibling)?S.some((t=e.nextSibling,Ln(t)?ks(t,0):ks.before(t))):e.nextSibling?vl(e.nextSibling):S.none()
var t},Sp=function(e,t){return wp(t).orThunk((function(){return xp(t)})).orThunk((function(){return n=e,r=t,o=ks.before(r.previousSibling?r.previousSibling:r.parentNode),hl(n,o).fold((function(){return gl(n,ks.after(r))}),S.some)
var n,r,o}))},Np=function(e,t){return xp(t).orThunk((function(){return wp(t)})).orThunk((function(){return r=t,gl(n=e,ks.after(r)).fold((function(){return hl(n,ks.before(r))}),S.some)
var n,r}))},Ep=function(e,t,n){return(e?Np:Sp)(t,n).map(f(Cp,n))},kp=function(e,t,n){n.fold((function(){e.focus()}),(function(n){e.selection.setRng(n.toRange(),t)}))},_p=function(e,t){return t&&ge(e.schema.getBlockElements(),Lt(t))},Ap=function(e){if(Lo(e)){var t=kt('<br data-mce-bogus="1">')
return dn(e),ln(e,t),S.some(ks.before(t.dom))}return S.none()},Rp=function(e,t,n,r){void 0===r&&(r=!0)
var o,i,a=Ep(t,e.getBody(),n.dom),u=Sr(n,f(_p,e),(o=e.getBody(),function(e){return e.dom===o})),s=function(e,t,n){var r,o,i,a,u=Wt(e).filter(Ut),s=Kt(e).filter(Ut)
return mn(e),o=s,i=t,a=function(e,t,r){var o=e.dom,i=t.dom,a=o.data.length
return bp(o,i,n),r.container()===i?ks(o,a):r},((r=u).isSome()&&o.isSome()&&i.isSome()?S.some(a(r.getOrDie(),o.getOrDie(),i.getOrDie())):S.none()).orThunk((function(){return n&&(u.each((function(e){return yp(e.dom,e.dom.length)})),s.each((function(e){return vp(e.dom,0)}))),t}))}(n,a,(i=n,ge(e.schema.getTextInlineElements(),Lt(i))))
e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):u.bind(Ap).fold((function(){r&&kp(e,t,s)}),(function(n){r&&kp(e,t,S.some(n))}))},Tp=function(e,t){return{start:e,end:t}},Op=hr([{removeTable:["element"]},{emptyCells:["cells"]},{deleteCellSelection:["rng","cell"]}]),Bp=function(e,t){return _r(Rt(e),"td,th",t)},Pp=function(e,t){return Er(e,"table",t)},Dp=function(e){return!Pt(e.start,e.end)},Lp=function(e,t){return Pp(e.start,t).bind((function(n){return Pp(e.end,t).bind((function(e){return t=Pt(n,e),r=n,t?S.some(r):S.none()
var t,r}))}))},Ip=function(e){return Du(e,"td,th")},Mp=function(e,t){return Lp(t,e).isSome()},Fp=function(e,t,n){return e.filter((function(e){return Dp(e)&&Mp(n,e)})).orThunk((function(){return function(e,t){var n=Bp(t.startContainer,e),r=Bp(t.endContainer,e)
return t.collapsed?S.none():Xu(n,r,Tp).fold((function(){return n.fold((function(){return r.bind((function(t){return Pp(t,e).bind((function(e){return ne(Ip(e)).map((function(e){return Tp(e,t)}))}))}))}),(function(t){return Pp(t,e).bind((function(e){return re(Ip(e)).map((function(e){return Tp(t,e)}))}))}))}),(function(t){return Mp(e,t)?S.none():(r=e,Pp((n=t).start,r).bind((function(e){return re(Ip(e)).map((function(e){return Tp(n.start,e)}))})))
var n,r}))}(n,t)})).bind((function(e){return Lp(t=e,n).map((function(e){return{rng:t,table:e,cells:Ip(e)}}))
var t}))},Up=function(e,t){return G(e,(function(e){return Pt(e,t)}))},zp=function(e){return Xu(Up((t=e).cells,t.rng.start),Up(t.cells,t.rng.end),(function(e,n){return t.cells.slice(e,n+1)})).map((function(t){var n=e.cells
return t.length===n.length?Op.removeTable(e.table):Op.emptyCells(t)}))
var t},jp=function(e,t){var n,r,o,i,a,u=(n=e,function(e){return Pt(n,e)}),s=(o=u,i=Bp((r=t).startContainer,o),a=Bp(r.endContainer,o),Xu(i,a,Tp))
return function(e,t,n){return e.filter((function(e){return o=n,!Dp(r=e)&&Lp(r,o).exists((function(e){var t=e.dom.rows
return 1===t.length&&1===t[0].cells.length}))&&yf(e.start,t)
var r,o})).map((function(e){return e.start}))}(s,t,u).map((function(e){return Op.deleteCellSelection(t,e)})).orThunk((function(){return Fp(s,t,u).bind(zp)}))},Hp=function(e){var t
return(8===It(t=e)||"#comment"===Lt(t)?Wt:Zt)(e).bind(Hp).orThunk((function(){return S.some(e)}))},Vp=function(e,t){return q(t,zm),e.selection.setCursorLocation(t[0].dom,0),!0},qp=function(e,t,n){t.deleteContents()
var r,o,i=Hp(n).getOr(n),a=Rt(e.dom.getParent(i.dom,e.dom.isBlock))
return Lo(a)&&(zm(a),e.selection.setCursorLocation(a.dom,0)),Pt(n,a)||(r=$t(a).is(n)?[]:$t(o=a).map(Gt).map((function(e){return W(e,(function(e){return!Pt(o,e)}))})).getOr([]),q(r.concat(Gt(n)),(function(e){Pt(e,a)||Dt(e,a)||mn(e)}))),!0},$p=function(e,t){return Rp(e,!1,t),!0},Wp=function(e,t){return Y(Vm(t,e),eo)},Kp=function(e,t){return Y(Vm(t,e),(function(e){return"caption"===Lt(e)}))},Xp=function(e,t){return zm(t),e.selection.setCursorLocation(t.dom,0),S.some(!0)},Yp=function(e,t){return(e?Im:Mm)(t)},Gp=function(e,t,n){var r=Rt(e.getBody())
return Kp(r,n).fold((function(){return function(e,t,n,r){var o=ks.fromRangeStart(e.selection.getRng())
return Wp(n,r).bind((function(r){return Lo(r)?Xp(e,r):(i=n,a=r,u=o,dl(t,e.getBody(),u).bind((function(e){return Wp(i,Rt(e.getNode())).map((function(e){return!1===Pt(e,a)}))})))
var i,a,u})).getOr(!1)}(e,t,r,n)||(o=e,i=t,a=ks.fromRangeStart(o.selection.getRng()),Yp(i,a)||fl(i,o.getBody(),a).exists((function(e){return Yp(i,e)})))
var o,i,a}),(function(n){return o=e,i=t,a=r,u=n,s=ks.fromRangeStart(o.selection.getRng()),(Lo(u)?Xp(o,u):function(e,t,n,r,o){return dl(n,e.getBody(),o).bind((function(i){return s=n,c=o,l=i,vl((u=r).dom).bind((function(e){return yl(u.dom).map((function(t){return s?c.isEqual(e)&&l.isEqual(t):c.isEqual(t)&&l.isEqual(e)}))})).getOr(!0)?Xp(e,r):(a=r,Kp(t,Rt(i.getNode())).map((function(e){return!1===Pt(e,a)})))
var a,u,s,c,l})).or(S.some(!0))}(o,a,i,u,s)).getOr(!1)
var o,i,a,u,s}))},Jp=function(e,t){var n,r,o,i,a,u=Rt(e.selection.getStart(!0)),s=gf(e)
return e.selection.isCollapsed()&&0===s.length?Gp(e,t,u):(r=u,o=Rt((n=e).getBody()),i=n.selection.getRng(),0!==(a=gf(n)).length?Vp(n,a):function(e,t,n,r){return Kp(t,r).fold((function(){return r=e,jp(t,n).map((function(e){return e.fold(f($p,r),f(Vp,r),f(qp,r))}))
var r}),(function(t){return Xp(e,t)})).getOr(!1)}(n,o,i,r))},Qp=function(e){return e.collapsed?e:function(e){var t=ks.fromRangeStart(e),n=ks.fromRangeEnd(e),r=e.commonAncestorContainer
return fl(!1,r,n).map((function(o){return!Mc(t,n,r)&&Mc(t,o,r)?(i=t.container(),a=t.offset(),u=o.container(),s=o.offset(),(c=document.createRange()).setStart(i,a),c.setEnd(u,s),c):e
var i,a,u,s,c})).getOr(e)}(e)},Zp=function(e,t){var n,r,o,i=t.firstChild,a=t.lastChild
return i&&"meta"===i.name&&(i=i.next),a&&"mce_marker"===a.attr("id")&&(a=a.prev),r=a,o=(n=e).getNonEmptyElements(),r&&(r.isEmpty(o)||function(e,t){var n,r
return e.getBlockElements()[t.name]&&(r=t).firstChild&&r.firstChild===r.lastChild&&("br"===(n=t.firstChild).name||n.value===no)}(n,r))&&(a=a.prev),!(!i||i!==a||"ul"!==i.name&&"ol"!==i.name)},eg=function(e){return 0<e.length&&(!(t=e[e.length-1]).firstChild||function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&((t=e.firstChild).data===no||Un(t))
var t}(t))?e.slice(0,-1):e
var t},tg=function(e,t){var n=e.getParent(t,e.isBlock)
return n&&"LI"===n.nodeName?n:null},ng=function(e,t){var n=ks.after(e),r=ul(t).prev(n)
return r?r.toRange():null},rg=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,p,g,h,v,y,b,C,w,x,S=(o=t,i=r,c=e.serialize(i),u=(a=o.createFragment(c)).firstChild,s=a.lastChild,u&&"META"===u.nodeName&&u.parentNode.removeChild(u),s&&"mce_marker"===s.id&&s.parentNode.removeChild(s),a),N=tg(t,n.startContainer),E=eg((l=S.firstChild,Nt.grep(l.childNodes,(function(e){return"LI"===e.nodeName})))),k=t.getRoot(),_=function(e){var r=ks.fromRangeStart(n),o=ul(t.getRoot()),i=1===e?o.prev(r):o.next(r)
return!i||tg(t,i.getNode())!==N}
return _(1)?function(e,t,n){var r,o,i,a,u=e.parentNode
return Nt.each(t,(function(t){u.insertBefore(t,e)})),r=e,o=n,i=ks.before(r),(a=ul(o).next(i))?a.toRange():null}(N,E,k):_(2)?(f=N,d=E,m=k,t.insertAfter(d.reverse(),f),ng(d[0],m)):(g=E,h=k,v=p=N,b=(y=n).cloneRange(),C=y.cloneRange(),b.setStartBefore(v),C.setEndAfter(v),w=[b.cloneContents(),C.cloneContents()],(x=p.parentNode).insertBefore(w[0],p),Nt.each(g,(function(e){x.insertBefore(e,p)})),x.insertBefore(w[1],p),x.removeChild(p),ng(g[g.length-1],h))},og=Vn,ig=function(e,t,n){var r,o,i,a,u,s,c,l,f,d=e.selection,m=e.dom;/^ | $/.test(t)&&(s=m,c=d.getRng(),l=t,f=Rt(s.getRoot()),l=cp(f,ks.fromRangeStart(c))?l.replace(/^ /,"&nbsp;"):l.replace(/^&nbsp;/," "),t=l=lp(f,ks.fromRangeEnd(c))?l.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):l.replace(/&nbsp;(<br( \/)?>)?$/," "))
var p=e.parser,g=n.merge,h=mm({validate:e.getParam("validate")},e.schema),v='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',y={content:t,format:"html",selection:!0,paste:n.paste}
if((y=e.fire("BeforeSetContent",y)).isDefaultPrevented())e.fire("SetContent",{content:y.content,format:"html",selection:!0,paste:n.paste})
else{-1===(t=y.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,v)
var b,C,w=(a=d.getRng()).startContainer||(a.parentElement?a.parentElement():null),x=e.getBody()
w===x&&d.isCollapsed()&&m.isBlock(x.firstChild)&&(b=e,(C=x.firstChild)&&!b.schema.getShortEndedElements()[C.nodeName])&&m.isEmpty(x.firstChild)&&((a=m.createRng()).setStart(x.firstChild,0),a.setEnd(x.firstChild,0),d.setRng(a)),d.isCollapsed()||function(e){var t=e.dom,n=Qp(e.selection.getRng())
e.selection.setRng(n)
var r,o,i=t.getParent(n.startContainer,og)
r=n,null!==(o=i)&&o===t.getParent(r.endContainer,og)&&yf(Rt(o),r)?qp(e,n,Rt(i)):e.getDoc().execCommand("Delete",!1,null)}(e)
var N,E,k,_,A,R,T,O,B,P,D,L,I,M,F={context:(r=d.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0},U=p.parse(t,F)
if(!0===n.paste&&Zp(e.schema,U)&&tg(m,r))return a=rg(h,m,d.getRng(),U),d.setRng(a),void e.fire("SetContent",y)
if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(U),"mce_marker"===(u=U.lastChild).attr("id"))for(u=(i=u).prev;u;u=u.walk(!0))if(3===u.type||!m.isBlock(u.name)){e.schema.isValidChild(u.parent.name,"span")&&u.parent.insert(i,u,"br"===u.name)
break}if(e._selectionOverrides.showBlockCaretContainer(r),F.invalid){for(e.selection.setContent(v),r=d.getNode(),o=e.getBody(),9===r.nodeType?r=u=o:u=r;u!==o;)u=(r=u).parentNode
t=r===o?o.innerHTML:m.getOuterHTML(r),t=h.serialize(p.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,(function(){return h.serialize(U)})))),r===o?m.setHTML(o,t):m.setOuterHTML(r,t)}else N=e,E=t=h.serialize(U),"all"===(k=r).getAttribute("data-mce-bogus")?k.parentNode.insertBefore(N.dom.createFragment(E),k):(_=k.firstChild,A=k.lastChild,!_||_===A&&"BR"===_.nodeName?N.dom.setHTML(k,E):N.selection.setContent(E))
T=g,P=(R=e).schema.getTextInlineElements(),D=R.dom,T&&(O=R.getBody(),B=new Nm(D),Nt.each(D.select("*[data-mce-fragment]"),(function(e){for(var t=e.parentNode;t&&t!==O;t=t.parentNode)P[e.nodeName.toLowerCase()]&&B.compare(t,e)&&D.remove(e,!0)}))),function(e,t){var n,r,o=e.dom,i=e.selection
if(t){i.scrollIntoView(t)
var a=function(t){for(var n=e.getBody();t&&t!==n;t=t.parentNode)if("false"===o.getContentEditable(t))return t
return null}(t)
if(a)return o.remove(t),i.select(a)
var u=o.createRng(),s=t.previousSibling
s&&3===s.nodeType?(u.setStart(s,s.nodeValue.length),bt.ie||(r=t.nextSibling)&&3===r.nodeType&&(s.appendData(r.data),r.parentNode.removeChild(r))):(u.setStartBefore(t),u.setEndBefore(t))
var c=o.getParent(t,o.isBlock)
o.remove(t),c&&o.isEmpty(c)&&(e.$(c).empty(),u.setStart(c,0),u.setEnd(c,0),og(c)||c.getAttribute("data-mce-fragment")||!(n=function(t){var n=ks.fromRangeStart(t)
if(n=ul(e.getBody()).next(n))return n.toRange()}(u))?o.add(c,o.create("br",{"data-mce-bogus":"1"})):(u=n,o.remove(c))),i.setRng(u)}}(e,m.get("mce_marker")),L=e.getBody(),Nt.each(L.getElementsByTagName("*"),(function(e){e.removeAttribute("data-mce-fragment")})),I=m,M=d.getStart(),S.from(I.getParent(M,"td,th")).map(Rt).each(jm),e.fire("SetContent",y),e.addVisual()}},ag=function(e,t){t(e),e.firstChild&&ag(e.firstChild,t),e.next&&ag(e.next,t)},ug=function(e,t,n){var r=function(e,t,n){var r={},o={},i=[]
for(var a in n.firstChild&&ag(n.firstChild,(function(n){q(e,(function(e){e.name===n.name&&(r[e.name]?r[e.name].nodes.push(n):r[e.name]={filter:e,nodes:[n]})})),q(t,(function(e){"string"==typeof n.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(n):o[e.name]={filter:e,nodes:[n]})}))})),r)r.hasOwnProperty(a)&&i.push(r[a])
for(var u in o)o.hasOwnProperty(u)&&i.push(o[u])
return i}(e,t,n)
q(r,(function(e){q(e.filter.callbacks,(function(t){t(e.nodes,e.filter.name,{})}))}))},sg=function(e){return e instanceof cm},cg=function(e,t){var n
e.dom.setHTML(e.getBody(),t),Hd(n=e)&&vl(n.getBody()).each((function(e){var t=e.getNode(),r=Bn(t)?vl(t).getOr(e):e
n.selection.setRng(r.toRange())}))},lg=function(e,t){return r=t,((o=(n=e).dom).parentNode?function(e,t){return Y(e.dom.childNodes,(function(e){return t(Rt(e))})).map(Rt)}(Rt(o.parentNode),(function(e){return!Pt(n,e)&&r(e)})):S.none()).isSome()
var n,r,o},fg=ro,dg="_mce_caret",mg=function(e){return 0<function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==fg||1<e.childNodes.length)return[]
1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length},pg=function(e){if(e){var t=new Vr(e,e)
for(e=t.current();e;e=t.next())if(Ln(e))return e}return null},gg=function(e){var t=_t("span")
return Xn(t,{id:dg,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&ln(t,At(fg)),t},hg=function(e,t,n){void 0===n&&(n=!0)
var r,o,i,a,u,s,c,l,f=e.dom,d=e.selection
mg(t)?Rp(e,!1,Rt(t),n):(r=d.getRng(),o=f.getParent(t,f.isBlock),i=r.startContainer,a=r.startOffset,u=r.endContainer,s=r.endOffset,(l=pg(t))&&l.nodeValue.charAt(0)===fg&&l.deleteData(0,1),c=l,f.remove(t,!0),i===c&&0<a&&r.setStart(c,a-1),u===c&&0<s&&r.setEnd(c,s-1),o&&f.isEmpty(o)&&zm(Rt(o)),d.setRng(r))},vg=function(e,t,n){void 0===n&&(n=!0)
var r=e.dom,o=e.selection
if(t)hg(e,t,n)
else if(!(t=wl(e.getBody(),o.getStart())))for(;t=r.get(dg);)hg(e,t,!1)},yg=function(e,t){return e.appendChild(t),t},bg=function(e,t){var n=K(e,(function(e,t){return yg(e,t.cloneNode(!1))}),t)
return yg(n,n.ownerDocument.createTextNode(fg))},Cg=function(e,t,n,r){var o,i,a,u,s,c,l,d,m,p,g,h,v,y=e.dom,b=e.selection,C=[],w=b.getRng(),x=w.startContainer,N=w.startOffset,E=x
for(3===x.nodeType&&(N!==x.nodeValue.length&&(o=!0),E=E.parentNode);E;){if(rm(e,E,t,n,r)){i=E
break}E.nextSibling&&(o=!0),C.push(E),E=E.parentNode}i&&(o?(a=b.getBookmark(),w.collapse(!0),u=lf(e,w,e.formatter.get(t),!0),u=Wf(u),e.formatter.remove(t,n,u,r),b.moveToBookmark(a)):(s=wl(e.getBody(),i),p=c=gg(!1).dom,g=null!==s?s:i,(v=(h=(m=e).dom).getParent(g,f(Il,m)))&&h.isEmpty(v)?g.parentNode.replaceChild(p,g):(function(e){var t=Du(e,"br"),n=W(function(e){for(var t=[],n=e.dom;n;)t.push(Rt(n)),n=n.lastChild
return t}(e).slice(-1),Yr)
t.length===n.length&&q(n,mn)}(Rt(g)),h.isEmpty(g)?g.parentNode.replaceChild(p,g):h.insertAfter(p,g)),l=function(e,t,n,r,o,i){var a=e.formatter,u=e.dom,s=W(ie(a.get()),(function(e){return e!==r&&!Fe(e,"removeformat")})),c=im(e,n,s)
if(0<W(c,(function(t){return!$l(e,t,r)})).length){var l=n.cloneNode(!1)
return u.add(t,l),a.remove(r,o,l,i),u.remove(l),S.some(l)}return S.none()}(e,c,i,t,n,r),d=bg(C.concat(l.toArray()),c),hg(e,s,!1),b.setCursorLocation(d,1),y.isEmpty(i)&&y.remove(i)))},wg=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(Lt(t))&&!Cl(t.dom)&&!On(t.dom)},xg={},Sg=Ce,Ng=ye
bm=function(e){var t,n=e.selection.getRng(),r=An(["pre"])
n.collapsed||(t=e.selection.getSelectedBlocks(),Ng(Sg(Sg(t,r),(function(e){return r(e.previousSibling)&&-1!==we(t,e.previousSibling)})),(function(e){var t,n
t=e.previousSibling,ou(n=e).remove(),ou(t).append("<br><br>").append(n.childNodes)})))},xg["pre"]||(xg.pre=[]),xg.pre.push(bm)
var Eg=Nt.each,kg=function(e){return _n(e)&&!Rl(e)&&!Cl(e)&&!On(e)},_g=function(e,t){for(var n=e;n;n=n[t]){if(Ln(n)&&0!==n.nodeValue.length)return e
if(_n(n)&&!Rl(n))return n}return e},Ag=function(e,t,n){var r,o,i=new Nm(e)
if(t&&n&&(t=_g(t,"previousSibling"),n=_g(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)r=(o=r).nextSibling,t.appendChild(o)
return e.remove(n),Nt.each(Nt.grep(n.childNodes),(function(e){t.appendChild(e)})),t}return n},Rg=function(e,t,n,r){var o
r&&!1!==t.merge_siblings&&(o=Ag(e,Ll(r),r),Ag(e,o,Ll(o,!0)))},Tg=function(e,t,n){Eg(e.childNodes,(function(e){kg(e)&&(t(e)&&n(e),e.hasChildNodes()&&Tg(e,t,n))}))},Og=function(e,t){return function(n){return!(!n||!Hl(e,n,t))}},Bg=function(e,t,n){return function(r){var o,i
e.setStyle(r,t,n),""===r.getAttribute("style")&&r.removeAttribute("style"),o=e,"SPAN"===(i=r).nodeName&&0===o.getAttribs(i).length&&o.remove(i,!0)}},Pg=hr([{keep:[]},{rename:["name"]},{removed:[]}]),Dg=/^(src|href|style)$/,Lg=Nt.each,Ig=zl,Mg=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},Fg=function(e,t,n){var r,o=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"]
return _n(o)&&(r=o.childNodes.length-1,!n&&i&&i--,o=o.childNodes[r<i?r:i]),Ln(o)&&n&&i>=o.nodeValue.length&&(o=new Vr(o,e.getBody()).next()||o),Ln(o)&&!n&&0===i&&(o=new Vr(o,e.getBody()).prev()||o),o},Ug=function(e,t){var n=t?"firstChild":"lastChild"
if(/^(TR|TH|TD)$/.test(e.nodeName)&&e[n]){var r=e[n]
return"TR"===e.nodeName&&r[n]||r}return e},zg=function(e,t,n,r){var o=e.create(n,r)
return t.parentNode.insertBefore(o,t),o.appendChild(t),o},jg=function(e,t,n,r,o){var i=Rt(t),a=Rt(e.create(r,o)),u=(n?Yt:Xt)(i)
return fn(a,u),n?(un(i,a),cn(a,i)):(sn(i,a),ln(a,i)),a.dom},Hg=function(e,t,n,r){return!(t=Ll(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},Vg=function(e,t,n,r,o){var i,a,u,s,c,l=e.dom
if(u=l,!(Ig(s=r,(c=t).inline)||Ig(s,c.block)||c.selector&&_n(s)&&u.is(s,c.selector)||(a=r,t.links&&"A"===a.nodeName)))return Pg.keep()
var f,d,m,p,g,h,v,y=r
if(t.inline&&"all"===t.remove&&R(t.preserve_attributes)){var b=W(l.getAttribs(y),(function(e){return j(t.preserve_attributes,e.name.toLowerCase())}))
if(l.removeAllAttribs(y),q(b,(function(e){return l.setAttrib(y,e.name,e.value)})),0<b.length)return Pg.rename("span")}if("all"!==t.remove){Lg(t.styles,(function(e,r){e=jl(l,Ul(e,n),r+""),I(r)&&(r=e,o=null),!t.remove_similar&&o&&!Ig(Hl(l,o,r),e)||l.setStyle(y,r,""),i=!0})),i&&""===l.getAttrib(y,"style")&&(y.removeAttribute("style"),y.removeAttribute("data-mce-style")),Lg(t.attributes,(function(e,r){var i
if(e=Ul(e,n),I(r)&&(r=e,o=null),t.remove_similar||!o||Ig(l.getAttrib(o,r),e)){if("class"===r&&(e=l.getAttrib(y,r))&&(i="",q(e.split(/\s+/),(function(e){/mce\-\w+/.test(e)&&(i+=(i?" ":"")+e)})),i))return void l.setAttrib(y,r,i)
"class"===r&&y.removeAttribute("className"),Dg.test(r)&&y.removeAttribute("data-mce-"+r),y.removeAttribute(r)}})),Lg(t.classes,(function(e){e=Ul(e,n),o&&!l.hasClass(o,e)||l.removeClass(y,e)}))
for(var C=l.getAttribs(y),w=0;w<C.length;w++){var x=C[w].nodeName
if(0!==x.indexOf("_")&&0!==x.indexOf("data-"))return Pg.keep()}}return"none"!==t.remove?(f=e,m=t,g=(d=y).parentNode,h=f.dom,v=Js(f),m.block&&(v?g===h.getRoot()&&(m.list_block&&Ig(d,m.list_block)||q(oe(d.childNodes),(function(e){Ml(f,v,e.nodeName.toLowerCase())?p?p.appendChild(e):(p=zg(h,e,v),h.setAttribs(p,f.settings.forced_root_block_attrs)):p=0}))):h.isBlock(d)&&!h.isBlock(g)&&(Hg(h,d,!1)||Hg(h,d.firstChild,!0,!0)||d.insertBefore(h.create("br"),d.firstChild),Hg(h,d,!0)||Hg(h,d.lastChild,!1,!0)||d.appendChild(h.create("br")))),m.selector&&m.inline&&!Ig(m.inline,d)||h.remove(d,!0),Pg.removed()):Pg.keep()},qg=function(e,t,n,r,o){return Vg(e,t,n,r,o).fold(y,(function(t){return e.dom.rename(r,t),!0}),b)},$g=function(e,t,n,r,o){var i,a=e.formatter.get(t),u=a[0],s=!0,l=e.dom,f=e.selection,d=function(r){var i,s,l,f,d,m,p=(s=r,l=t,f=n,d=o,q(ql((i=e).dom,s.parentNode).reverse(),(function(e){var t
m||"_start"===e.id||"_end"===e.id||(t=rm(i,e,l,f,d))&&!1!==t.split&&(m=e)})),m)
return function(e,t,n,r,o,i,a,u){var s,l,f,d=e.dom
if(n){for(var m=n.parentNode,p=r.parentNode;p&&p!==m;p=p.parentNode){s=d.clone(p,!1)
for(var g=0;g<t.length&&null!==(s=function(e,t,n,r){return Vg(e,t,n,r,r).fold(c(r),(function(t){return e.dom.createFragment().appendChild(r),e.dom.rename(r,t)}),c(null))}(e,t[g],u,s));g++);s&&(l&&s.appendChild(l),f=f||s,l=s)}!i||a.mixed&&d.isBlock(n)||(r=d.split(n,r)),l&&(o.parentNode.insertBefore(l,o),f.appendChild(o),a.inline&&Rg(d,a,0,l))}return r}(e,a,p,r,r,!0,u,n)},m=function(t){var r,o
_n(t)&&l.getContentEditable(t)&&(r=s,s="true"===l.getContentEditable(t),o=!0)
var i=oe(t.childNodes)
if(s&&!o)for(var c=0;c<a.length&&!qg(e,a[c],n,t,t);c++);if(u.deep&&i.length){for(c=0;c<i.length;c++)m(i[c])
o&&(s=r)}},p=function(e){var t,n=l.get(e?"_start":"_end"),r=n[e?"firstChild":"lastChild"]
return Rl(t=r)&&_n(t)&&("_start"===t.id||"_end"===t.id)&&(r=r[e?"firstChild":"lastChild"]),Ln(r)&&0===r.data.length&&(r=e?n.previousSibling||n.nextSibling:n.nextSibling||n.previousSibling),l.remove(n,!0),r},g=function(t){var n,r,o=lf(e,t,a,t.collapsed)
if(u.split){if(o=Wf(o),(n=Fg(e,o,!0))!==(r=Fg(e,o))){if(n=Ug(n,!0),r=Ug(r,!1),Mg(l,n,r)){var i=S.from(n.firstChild).getOr(n)
return d(jg(l,i,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void p(!0)}if(Mg(l,r,n))return i=S.from(r.lastChild).getOr(r),d(jg(l,i,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void p(!1)
n=zg(l,n,"span",{id:"_start","data-mce-type":"bookmark"}),r=zg(l,r,"span",{id:"_end","data-mce-type":"bookmark"})
var s=l.createRng()
s.setStartAfter(n),s.setEndBefore(r),df(l,s,(function(e){q(e,(function(e){Rl(e)||Rl(e.parentNode)||d(e)}))})),d(n),d(r),n=p(!0),r=p()}else n=r=d(n)
o.startContainer=n.parentNode?n.parentNode:n,o.startOffset=l.nodeIndex(n),o.endContainer=r.parentNode?r.parentNode:r,o.endOffset=l.nodeIndex(r)+1}df(l,o,(function(t){q(t,(function(t){m(t),q(["underline","line-through","overline"],(function(n){_n(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&Vl(l,t.parentNode)===n&&qg(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))}))}))}
if(r)Pl(r)?((i=l.createRng()).setStartBefore(r),i.setEndAfter(r),g(i)):g(r)
else if("false"!==l.getContentEditable(f.getNode()))f.isCollapsed()&&u.inline&&!gf(e).length?Cg(e,t,n,o):(xf(f,!0,(function(){wf(e,g)})),u.inline&&om(e,t,n,f.getStart())&&Dl(l,f,f.getRng()),e.nodeChanged())
else{r=f.getNode()
for(var h=0;h<a.length&&(!a[h].ceFalseOverride||!qg(e,a[h],n,r,r));h++);}},Wg=Nt.each,Kg=Nt.each,Xg=he,Yg=function(e,t,n,r){var o,i,a,u,s=e.formatter.get(t),c=s[0],l=!r&&e.selection.isCollapsed(),f=e.dom,d=e.selection,m=function(e,t){var o
t=t||c,e&&(t.onformat&&t.onformat(e,t,n,r),Kg(t.styles,(function(t,r){f.setStyle(e,r,Ul(t,n))})),!t.styles||(o=f.getAttrib(e,"style"))&&f.setAttrib(e,"data-mce-style",o),Kg(t.attributes,(function(t,r){f.setAttrib(e,r,Ul(t,n))})),Kg(t.classes,(function(t){t=Ul(t,n),f.hasClass(e,t)||f.addClass(e,t)})))},p=function(e,t){var n=!1
return!!Kl(c)&&(Kg(e,(function(e){if(!("collapsed"in e)||e.collapsed===l)return f.is(t,e.selector)&&!Cl(t)?(m(t,e),!(n=!0)):void 0})),n)},g=function(r,o,i,a){var u=[],l=!0,f=c.inline||c.block,d=r.create(f)
m(d),df(r,o,(function(o){var i,g=function(o){var h=!1,v=l,y=o.nodeName.toLowerCase(),b=o.parentNode.nodeName.toLowerCase()
if(_n(o)&&r.getContentEditable(o)&&(v=l,l="true"===r.getContentEditable(o),h=!0),Un(o)&&!function(e,t,n,r){if(e.getParam("format_empty_lines",!1,"boolean")&&Xl(t)){var o=Ee(Ee({},e.schema.getTextBlockElements()),{td:{},th:{},li:{},dt:{},dd:{},figcaption:{},caption:{},details:{},summary:{}}),i=lg(Rt(n),(function(e){return Cl(e.dom)}))
return he(o,r)&&Lo(Rt(n.parentNode),!1)&&!i}return!1}(e,c,o,b))return i=null,void(Wl(c)&&r.remove(o))
if(c.wrapper&&rm(e,o,t,n))i=null
else{if(l&&!h&&Wl(c)&&!c.wrapper&&Il(e,y)&&Ml(e,b,f)){var C=r.rename(o,f)
return m(C),u.push(C),void(i=null)}if(Kl(c)){var w=p(s,o)
if(!Xg(c,"inline")||w)return void(i=null)}!l||h||!Ml(e,f,y)||!Ml(e,b,f)||!a&&3===o.nodeType&&1===o.nodeValue.length&&65279===o.nodeValue.charCodeAt(0)||Cl(o)||Xg(c,"inline")&&r.isBlock(o)?(i=null,Kg(Nt.grep(o.childNodes),g),h&&(l=v),i=null):(i||(i=r.clone(d,!1),o.parentNode.insertBefore(i,o),u.push(i)),i.appendChild(o))}}
Kg(o,g)})),!0===c.links&&Kg(u,(function(e){var t=function(e){"A"===e.nodeName&&m(e,c),Kg(Nt.grep(e.childNodes),t)}
t(e)})),Kg(u,(function(o){var i,a,l,f,d,p,g,h,v,y,b,C,w,x,S,N,E,k,_,A,R=(i=0,Kg(o.childNodes,(function(e){var t
D(t=e)&&Ln(t)&&0===t.length||Rl(e)||i++})),i)
!(1<u.length)&&r.isBlock(o)||0!==R?(Xl(c)||c.wrapper)&&(c.exact||1!==R||((A=function(e){var t=!1
return Kg(e.childNodes,(function(e){if((n=e)&&1===n.nodeType&&!Rl(n)&&!Cl(n)&&!On(n))return t=e,!1
var n})),t}(k=o))&&!Rl(A)&&tm(r,A,c)&&(_=r.clone(A,!1),m(_),r.replace(_,k,!0),r.remove(A,!0)),o=_||k),function(e,t,n,r){Wg(t,(function(t){var o,i,a,u
Wg(e.dom.select(t.inline,r),(function(r){kg(r)&&qg(e,t,n,r,t.exact?r:null)})),o=e.dom,a=r,(i=t).clear_child_styles&&(u=i.links?"*:not(a)":"*",Eg(o.select(u,a),(function(e){kg(e)&&Eg(i.styles,(function(t,n){o.setStyle(e,n,"")}))})))}))}(e,s,n,o),x=c,S=t,N=n,rm(w=e,(E=o).parentNode,S,N)&&qg(w,x,N,E)||x.merge_with_parents&&w.dom.getParent(E.parentNode,(function(e){if(rm(w,e,S,N))return qg(w,x,N,E),!0})),v=r,b=n,C=o,(y=c).styles&&y.styles.backgroundColor&&Tg(C,Og(v,"fontSize"),Bg(v,"backgroundColor",Ul(y.styles.backgroundColor,b))),d=r,g=o,h=function(e){var t
1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=Vl(d,e.parentNode),d.getStyle(e,"color")&&t?d.setStyle(e,"text-decoration",t):d.getStyle(e,"text-decoration")===t&&d.setStyle(e,"text-decoration",null))},(p=c).styles&&(p.styles.color||p.styles.textDecoration)&&(Nt.walk(g,h,"childNodes"),h(g)),a=r,f=o,"sub"!==(l=c).inline&&"sup"!==l.inline||(Tg(f,Og(a,"fontSize"),Bg(a,"fontSize","")),a.remove(a.select("sup"===l.inline?"sub":"sup",f),!0)),Rg(r,c,0,o)):r.remove(o,!0)}))}
if("false"!==f.getContentEditable(d.getNode()))c&&(r?Pl(r)?p(s,r)||((o=f.createRng()).setStartBefore(r),o.setEndAfter(r),g(f,lf(e,o,s),0,!0)):g(f,r,0,!0):l&&Xl(c)&&!gf(e).length?function(e,t,n){var r,o=e.selection,i=o.getRng(),a=i.startOffset,u=i.startContainer.nodeValue,s=wl(e.getBody(),o.getStart())
s&&(r=pg(s))
var c,l,f,d,m=/[^\s\u00a0\u00ad\u200b\ufeff]/
u&&0<a&&a<u.length&&m.test(u.charAt(a))&&m.test(u.charAt(a-1))?(c=o.getBookmark(),i.collapse(!0),l=lf(e,i,e.formatter.get(t)),l=Wf(l),e.formatter.apply(t,n,l),o.moveToBookmark(c)):(s&&r.nodeValue===fg||(f=e.getDoc(),d=gg(!0).dom,r=(s=f.importNode(d,!0)).firstChild,i.insertNode(s),a=1),e.formatter.apply(t,n,s),o.setCursorLocation(r,a))}(e,t,n):(i=d.getNode(),a=s[0],e.settings.forced_root_block||!a.defaultBlock||f.getParent(i,f.isBlock)||Yg(e,a.defaultBlock),d.setRng(Qp(d.getRng())),xf(d,!0,(function(t){wf(e,(function(t,n){var r=n?t:lf(e,t,s)
g(f,r)}))})),Dl(f,d,d.getRng()),e.nodeChanged()),u=e,Ng(xg[t],(function(e){e(u)})))
else{r=d.getNode()
for(var h=0,v=s.length;h<v;h++){var y=s[h]
if(y.ceFalseOverride&&Kl(y)&&f.is(r,y.selector))return void m(r,y)}}},Gg=function(e,t,n,r){return de(e,(function(e,o){return!!ge(t,o)||(q(e,(function(e){e(!1,{node:n,format:o,parents:r})})),!1)})).t},Jg=function(e,t,n,r,o){var i,a,u,s,c,l,f,d
return null===t.get()&&(a=e,u=bu({}),(i=t).set({}),a.on("NodeChange",(function(e){(function(e,t,n,r){var o=ie(n.get()),i={},a={},u=W(ql(e.dom,t),(function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}))
ue(r,(function(t,n){Nt.each(u,(function(r){return e.formatter.matchNode(r,n,{},t.similar)?(-1===o.indexOf(n)&&(q(t.callbacks,(function(e){e(!0,{node:r,format:n,parents:u})})),i[n]=t.callbacks),a[n]=t.callbacks,!1):!Zd(e,r,n)&&void 0}))}))
var s=Gg(n.get(),a,t,u)
n.set(Ee(Ee({},i),s))})(a,e.element,u,i.get())}))),c=n,l=r,f=o,d=(s=t).get(),q(c.split(","),(function(e){d[e]||(d[e]={similar:f,callbacks:[]}),d[e].callbacks.push(l)})),s.set(d),{unbind:function(){return o=n,i=r,a=(e=t).get(),q(o.split(","),(function(e){a[e].callbacks=W(a[e].callbacks,(function(e){return e!==i})),0===a[e].callbacks.length&&delete a[e]})),void e.set(a)
var e,o,i,a}}},Qg=function(e,t){var n=(t||document).createDocumentFragment()
return q(e,(function(e){n.appendChild(e.dom)})),Rt(n)},Zg=function(e,t,n){return{element:e,width:t,rows:n}},eh=function(e,t){return{element:e,cells:t}},th=function(e,t){var n=parseInt(Yn(e,t),10)
return isNaN(n)?1:n},nh=function(e){return X(e,(function(e,t){return t.cells.length>e?t.cells.length:e}),0)},rh=function(e,t){for(var n=e.rows,r=0;r<n.length;r++)for(var o=n[r].cells,i=0;i<o.length;i++)if(Pt(o[i],t))return S.some({x:i,y:r})
return S.none()},oh=function(e,t,n,r,o){for(var i=[],a=e.rows,u=n;u<=o;u++){var s=a[u].cells,c=t<r?s.slice(t,r+1):s.slice(r,t+1)
i.push(eh(a[u].element,c))}return i},ih=function(e){return n=V((t=e).rows,(function(e){var t=V(e.cells,(function(e){var t=$u(e)
return Jn(t,"colspan"),Jn(t,"rowspan"),t})),n=qu(e.element)
return fn(n,t),n})),r=qu(t.element),o=_t("tbody"),fn(o,n),ln(r,o),r
var t,n,r,o},ah=function(e,t){return Y(e,(function(e){return"li"===Lt(e)&&yf(e,t)})).fold(c([]),(function(t){return Y(e,(function(e){return"ul"===Lt(e)||"ol"===Lt(e)})).map((function(e){var t=_t(Lt(e))
return function(e,t){var n=e.dom
ue(t,(function(e,t){!function(e,t,n){if(!_(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
$n(e)&&e.style.setProperty(t,n)}(n,t,e)}))}(t,me(tr(e),(function(e,t){return Ue(t,"list-style")}))),[_t("li"),t]})).getOr([])}))},uh=function(){return Qg([])},sh=function(e,t){return n=Rt(t.cloneContents()),r=function(e,t){var n,r=Rt(t.commonAncestorContainer),o=Vm(r,e),i=W(o,(function(e){return Xr(e)||Wr(e)})),a=ah(o,t),u=i.concat(a.length?a:Qr(n=r)?$t(n).filter(Jr).fold(c([]),(function(e){return[n,e]})):Jr(n)?[n]:[])
return V(u,qu)}(e,t),o=X(r,(function(e,t){return ln(t,e),t}),n),0<r.length?Qg([o]):o
var n,r,o},ch=function(e,t){return n=e,r=t[0],Er(r,"table",f(Pt,n)).bind((function(e){var n=t[0],r=t[t.length-1]
return function(e,t,n){return rh(e,t).bind((function(t){return rh(e,n).map((function(n){return r=e,i=n,a=(o=t).x,u=o.y,s=i.x,l=u<(c=i.y)?oh(r,a,u,s,c):oh(r,a,c,s,u),Zg(r.element,nh(l),l)
var r,o,i,a,u,s,c,l}))}))}(function(e){var t=Zg(qu(e),0,[])
return q(Du(e,"tr"),(function(e,n){q(Du(e,"td,th"),(function(r,o){!function(e,t,n,r,o){for(var i=th(o,"rowspan"),a=th(o,"colspan"),u=e.rows,s=n;s<n+i;s++){u[s]||(u[s]=eh($u(r),[]))
for(var c=t;c<t+a;c++)u[s].cells[c]=s===n&&c===t?o:qu(o)}}(t,function(e,t,n){for(;r=t,o=n,((i=e.rows)[o]?i[o].cells:[])[r];)t++
var r,o,i
return t}(t,o,n),n,e,r)}))})),Zg(t.element,nh(t.rows),t.rows)}(e),n,r).map((function(e){return Qg([ih(e)])}))})).getOrThunk(uh)
var n,r},lh=function(e,t){return 0<=t&&t<e.length&&Ol(e.charAt(t))},fh=function(e,t){var n=io(e.innerText)
return t?n.replace(/^[ \f\n\r\t\v]+/,""):n},dh=function(e,t,n){if(void 0===n&&(n={}),n.get=!0,n.format=t,n.selection=!0,(n=e.fire("BeforeGetContent",n)).isDefaultPrevented())return e.fire("GetContent",n),n.content
if("text"===n.format)return function(e){return S.from(e.selection.getRng()).map((function(t){var n=S.from(e.dom.getParent(t.commonAncestorContainer,e.dom.isBlock)),r=e.getBody(),o=n.map((function(e){return e.nodeName})).getOr("div").toLowerCase(),i=bt.browser.isIE()&&"pre"!==o,a=e.dom.add(r,o,{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},t.cloneContents()),u=fh(a,i),s=io(a.textContent)
if(e.dom.remove(a),lh(s,0)||lh(s,s.length-1)){var c=n.getOr(r),l=fh(c,i),f=l.indexOf(u)
return-1===f?u:(lh(l,f-1)?" ":"")+u+(lh(l,f+u.length)?" ":"")}return u})).getOr("")}(e)
n.getInner=!0
var r,o,i,a,u,s,c,l=(o=n,i=(r=e).selection.getRng(),a=r.dom.create("body"),u=r.selection.getSel(),s=Yd(r,mf(u)),(c=o.contextual?function(e,t){var n,r,o=pf(t,e)
return 0<o.length?ch(e,o):(n=e,0<(r=t).length&&r[0].collapsed?uh():sh(n,r[0]))}(Rt(r.getBody()),s).dom:i.cloneContents())&&a.appendChild(c),r.selection.serializer.serialize(a,o))
return"tree"===n.format?l:(n.content=e.selection.isCollapsed()?"":l,e.fire("GetContent",n),n.content)},mh=function(e){return _n(e)?e.outerHTML:Ln(e)?Qo.encodeRaw(e.data,!1):In(e)?"\x3c!--"+e.data+"--\x3e":""},ph=function(e,t){var n=0
q(e,(function(e){var r,o,i
0===e[0]?n++:1===e[0]?(function(e,t,n){var r,o=function(e){var t,n=document.createElement("div"),r=document.createDocumentFragment()
for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t)
return r}(t)
e.hasChildNodes()&&n<e.childNodes.length?(r=e.childNodes[n]).parentNode.insertBefore(o,r):e.appendChild(o)}(t,e[1],n),n++):2===e[0]&&(o=n,(r=t).hasChildNodes()&&o<r.childNodes.length&&(i=r.childNodes[o]).parentNode.removeChild(i))}))},gh=bu(S.none()),hh=function(e){var t,n=(t=e.getBody(),W(V(oe(t.childNodes),mh),(function(e){return 0<e.length}))),r=J(n,(function(t){var n=wm(e.serializer,t)
return 0<n.length?[n]:[]})),o=r.join("")
return-1!==o.indexOf("</iframe>")?{type:"fragmented",fragments:r,content:"",bookmark:null,beforeBookmark:null}:{type:"complete",fragments:null,content:o,bookmark:null,beforeBookmark:null}},vh=function(e,t,n){"fragmented"===t.type?function(e,t){var n,r,o,i,a,u,s,c,l,f=V(oe(t.childNodes),mh)
ph((r=e,o=(n=f).length+r.length+2,i=new Array(o),a=new Array(o),u=function(e,t,o,i,a){var s=c(e,t,o,i)
if(null===s||s.start===t&&s.diag===t-i||s.end===e&&s.diag===e-o)for(var l=e,f=o;l<t||f<i;)l<t&&f<i&&n[l]===r[f]?(a.push([0,n[l]]),++l,++f):i-o<t-e?(a.push([2,n[l]]),++l):(a.push([1,r[f]]),++f)
else{u(e,s.start,o,s.start-s.diag,a)
for(var d=s.start;d<s.end;++d)a.push([0,n[d]])
u(s.end,t,s.end-s.diag,i,a)}},s=function(e,t,o,i){for(var a=e;a-t<i&&a<o&&n[a]===r[a-t];)++a
return{start:e,end:a,diag:t}},c=function(e,t,o,u){var c=t-e,l=u-o
if(0==c||0==l)return null
var f,d,m,p,g,h=c-l,v=l+c,y=(v%2==0?v:1+v)/2
for(i[1+y]=e,a[1+y]=t+1,f=0;f<=y;++f){for(d=-f;d<=f;d+=2){for(m=d+y,d===-f||d!==f&&i[m-1]<i[m+1]?i[m]=i[m+1]:i[m]=i[m-1]+1,g=(p=i[m])-e+o-d;p<t&&g<u&&n[p]===r[g];)i[m]=++p,++g
if(h%2!=0&&h-f<=d&&d<=h+f&&a[m-h]<=i[m])return s(a[m-h],d+e-o,t,u)}for(d=h-f;d<=h+f;d+=2){for(m=d+y-h,d===h-f||d!==h+f&&a[m+1]<=a[m-1]?a[m]=a[m+1]-1:a[m]=a[m-1],g=(p=a[m]-1)-e+o-d;e<=p&&o<=g&&n[p]===r[g];)a[m]=p--,g--
if(h%2==0&&-f<=d&&d<=f&&a[m]<=i[m+h])return s(a[m],d+e-o,t,u)}}},l=[],u(0,n.length,0,r.length,l),l),t)}(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},yh=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},bh=function(e){var t=_t("body",gh.get().getOrThunk((function(){var e=document.implementation.createHTMLDocument("undo")
return gh.set(S.some(e)),e})))
return Hu(t,yh(e)),q(Du(t,"*[data-mce-bogus]"),pn),t.dom.innerHTML},Ch=function(e,t){return!(!e||!t)&&(r=t,yh(e)===yh(r)||(n=t,bh(e)===bh(n)))
var n,r},wh=function(e){return 0===e.get()},xh=function(e,t,n){wh(n)&&(e.typing=t)},Sh=function(e,t){e.typing&&(xh(e,!1,t),e.add())},Nh=function(e){return e instanceof cm},Eh=function(e,t){ug(e.serializer.getNodeFilters(),e.serializer.getAttributeFilters(),t)},kh=function(e){return{undoManager:{beforeChange:function(t,n){return r=e,o=n,void(wh(t)&&o.set(S.some(Ks(r.selection))))
var r,o},addUndoLevel:function(t,n,r,o,i,a){return function(e,t,n,r,o,i,a){var u=hh(e)
if(i=i||{},i=Nt.extend(i,u),!1===wh(r)||e.removed)return null
var s=t.data[n.get()]
if(e.fire("BeforeAddUndo",{level:i,lastLevel:s,originalEvent:a}).isDefaultPrevented())return null
if(s&&Ch(s,i))return null
t.data[n.get()]&&o.get().each((function(e){t.data[n.get()].beforeBookmark=e}))
var c=e.getParam("custom_undo_redo_levels",0,"number")
if(c&&t.data.length>c){for(var l=0;l<t.data.length-1;l++)t.data[l]=t.data[l+1]
t.data.length--,n.set(t.data.length)}i.bookmark=Ks(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(i),n.set(t.data.length-1)
var f={level:i,lastLevel:s,originalEvent:a}
return 0<n.get()?(e.setDirty(!0),e.fire("AddUndo",f),e.fire("change",f)):e.fire("AddUndo",f),i}(e,t,n,r,o,i,a)},undo:function(t,n,r){return o=e,a=n,u=r,(i=t).typing&&(i.add(),i.typing=!1,xh(i,!1,a)),0<u.get()&&(u.set(u.get()-1),s=i.data[u.get()],vh(o,s,!0),o.setDirty(!0),o.fire("Undo",{level:s})),s
var o,i,a,u,s},redo:function(t,n){return r=e,i=n,(o=t).get()<i.length-1&&(o.set(o.get()+1),a=i[o.get()],vh(r,a,!1),r.setDirty(!0),r.fire("Redo",{level:a})),a
var r,o,i,a},clear:function(t,n){return r=e,i=n,(o=t).data=[],i.set(0),o.typing=!1,void r.fire("ClearUndos")
var r,o,i},reset:function(e){return(t=e).clear(),void t.add()
var t},hasUndo:function(t,n){return r=e,o=t,0<n.get()||o.typing&&o.data[0]&&!Ch(hh(r),o.data[0])
var r,o},hasRedo:function(e,t){return n=e,t.get()<n.data.length-1&&!n.typing
var n},transact:function(e,t,n){return o=n,Sh(r=e,t),r.beforeChange(),r.ignore(o),r.add()
var r,o},ignore:function(e,t){try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}},extra:function(t,n,r,o){return i=e,u=n,s=r,c=o,void((a=t).transact(s)&&(l=a.data[u.get()].bookmark,f=a.data[u.get()-1],vh(i,f,!0),a.transact(c)&&(a.data[u.get()-1].beforeBookmark=l)))
var i,a,u,s,c,l,f}},formatter:{match:function(t,n,r){return om(e,t,n,r)},matchAll:function(t,n){return o=t,i=n,a=[],u={},s=(r=e).selection.getStart(),r.dom.getParent(s,(function(e){for(var t=0;t<o.length;t++){var n=o[t]
!u[n]&&rm(r,e,n,i)&&(u[n]=!0,a.push(n))}}),r.dom.getRoot()),a
var r,o,i,a,u,s},matchNode:function(t,n,r,o){return rm(e,t,n,r,o)},canApply:function(t){return function(e,t){var n,r,o,i,a,u=e.formatter.get(t),s=e.dom
if(u)for(n=e.selection.getStart(),r=ql(s,n),i=u.length-1;0<=i;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0
for(o=r.length-1;0<=o;o--)if(s.is(r[o],a))return!0}return!1}(e,t)},closest:function(t){return function(e,t){var n=function(t){return Pt(t,Rt(e.getBody()))}
return S.from(e.selection.getStart(!0)).bind((function(r){return Jd(Rt(r),(function(n){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n])
if(r.isSome())return r}return S.none()}(t,(function(t){return r=t,rm(e,n.dom,r)?S.some(r):S.none()
var r}))}),n)})).getOrNull()}(e,t)},apply:function(t,n,r){return Yg(e,t,n,r)},remove:function(t,n,r,o){return $g(e,t,n,r,o)},toggle:function(t,n,r){return i=t,a=n,u=r,s=(o=e).formatter.get(i),void(!om(o,i,a,u)||"toggle"in s[0]&&!s[0].toggle?Yg:$g)(o,i,a,u)
var o,i,a,u,s},formatChanged:function(t,n,r,o){return Jg(e,t,n,r,o)}},editor:{getContent:function(t,n){return r=e,o=t,i=n,S.from(r.getBody()).fold(c("tree"===o.format?new cm("body",11):""),(function(e){return function(e,t,n,r){var o,i,a,u,s
return t.format=n,t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),o="raw"===t.format?Nt.trim(xm(e.serializer,r.innerHTML)):"text"===t.format?e.dom.isEmpty(r)?"":io(r.innerText||r.textContent):"tree"===t.format?e.serializer.serialize(r,t):(a=(i=e).serializer.serialize(r,t),u=Js(i),s=new RegExp("^(<"+u+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+u+">[\r\n]*|<br \\/>[\r\n]*)$"),a.replace(s,"")),j(["text","tree"],t.format)||to(Rt(r))?t.content=o:t.content=Nt.trim(o),t.no_events||e.fire("GetContent",t),t.content}(r,o,i,e)}))
var r,o,i},setContent:function(t,n){return function(e,t,n){return n.format=n.format?n.format:"html",n.set=!0,n.content=sg(t)?"":t,n.no_events||e.fire("BeforeSetContent",n),sg(t)||(t=n.content),S.from(e.getBody()).fold(c(t),(function(r){return sg(t)?function(e,t,n,r){ug(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n)
var o=mm({validate:e.validate},e.schema).serialize(n)
return r.content=to(Rt(t))?o:Nt.trim(o),cg(e,r.content),r.no_events||e.fire("SetContent",r),n}(e,r,t,n):(o=e,i=r,u=n,0===(a=t).length||/^\s+$/.test(a)?(c='<br data-mce-bogus="1">',"TABLE"===i.nodeName?a="<tr><td>"+c+"</td></tr>":/^(UL|OL)$/.test(i.nodeName)&&(a="<li>"+c+"</li>"),a=(s=Js(o))&&o.schema.isValidChild(i.nodeName.toLowerCase(),s.toLowerCase())?(a=c,o.dom.createHTML(s,Qs(o),a)):a||'<br data-mce-bogus="1">',cg(o,a),o.fire("SetContent",u)):("raw"!==u.format&&(a=mm({validate:o.validate},o.schema).serialize(o.parser.parse(a,{isRootContent:!0,insert:!0}))),u.content=to(Rt(i))?a:Nt.trim(a),cg(o,u.content),u.no_events||o.fire("SetContent",u)),u.content)
var o,i,a,u,s,c}))}(e,t,n)},insertContent:function(t,n){return ig(e,t,n)},addVisual:function(t){return r=t,o=(n=e).dom,i=D(r)?r:n.getBody(),B(n.hasVisual)&&(n.hasVisual=n.getParam("visual",!0,"boolean")),q(o.select("table,a",i),(function(e){switch(e.nodeName){case"TABLE":var t=n.getParam("visual_table_class","mce-item-table","string"),r=o.getAttrib(e,"border")
r&&"0"!==r||!n.hasVisual?o.removeClass(e,t):o.addClass(e,t)
break
case"A":var i,a
o.getAttrib(e,"href")||(i=o.getAttrib(e,"name")||e.id,a=n.getParam("visual_anchor_class","mce-item-anchor","string"),i&&n.hasVisual?o.addClass(e,a):o.removeClass(e,a))}})),void n.fire("VisualAid",{element:r,hasVisual:n.hasVisual})
var n,r,o,i}},selection:{getContent:function(t,n){return dh(e,t,n)}},raw:{getModel:function(){return S.none()}}}},_h=function(e,t){var n=function(e){return A(e)?e:{}},r=h("Unimplemented feature for rtc")
return{undoManager:{beforeChange:u,addUndoLevel:r,undo:function(){return t.undo(),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},redo:function(){return t.redo(),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},clear:r,reset:r,hasUndo:function(){return t.hasUndo()},hasRedo:function(){return t.hasRedo()},transact:function(e,n,r){return t.transact(r),{type:"complete",fragments:[],content:"",bookmark:null,beforeBookmark:null}},ignore:r,extra:r},formatter:{match:function(e,r,o){return t.matchFormat(e,n(r))},matchAll:r,matchNode:r,canApply:function(e){return t.canApplyFormat(e)},closest:function(e){return t.closestFormat(e)},apply:function(e,r,o){return t.applyFormat(e,n(r))},remove:function(e,r,o,i){return t.removeFormat(e,n(r))},toggle:function(e,r,o){return t.toggleFormat(e,n(r))},formatChanged:function(e,n,r,o){return t.formatChanged(n,r,o)}},editor:{getContent:function(n,r){if("html"!==r&&"tree"!==r)return kh(e).editor.getContent(n,r)
var o=t.getContent(),i=mm({inner:!0})
return Eh(e,o),"tree"===r?o:i.serialize(o)},setContent:function(n,r){var o=Nh(n)?n:e.parser.parse(n,{isRootContent:!0,insert:!0})
return t.setContent(o),n},insertContent:function(n,r){var o,i=(o=e,S.from(o.selection.getStart(!0)).map((function(e){return e.nodeName.toLowerCase()})).fold((function(){return{}}),(function(e){return{context:e}}))),a=Nh(n)?n:e.parser.parse(n,Ee(Ee({},i),{insert:!0}))
t.insertContent(a)},addVisual:function(e){}},selection:{getContent:function(n,r){if("html"!==n&&"tree"!==n)return kh(e).selection.getContent(n,r)
var o=t.getSelectedContent(),i=mm({})
return Eh(e,o),"tree"===n?o:i.serialize(o)}},raw:{getModel:function(){return S.some(t.getRawModel())}}}},Ah=function(e){return ge(e.plugins,"rtc")},Rh=function(e){return e.rtcInstance?e.rtcInstance:kh(e)},Th=function(e){var t=e.rtcInstance
if(t)return t
throw new Error("Failed to get RTC instance not yet initialized.")},Oh=function(e){return 0===e.dom.length?(mn(e),S.none()):S.some(e)},Bh=function(e,t,n,r){e.bind((function(e){return(r?yp:vp)(e.dom,r?e.dom.length:0),t.filter(Ut).map((function(t){return o=t,i=n,a=r,u=e.dom,s=o.dom,c=a?u.length:s.length,void(a?(bp(u,s,!1,!a),i.setStart(s,c)):(bp(s,u,!1,!a),i.setEnd(s,c)))
var o,i,a,u,s,c}))})).orThunk((function(){var e
return(e=r,t.filter((function(e){return Tf.isBookmarkNode(e.dom)})).bind(e?Kt:Wt).or(t).filter(Ut)).map((function(e){return n=r,void $t(t=e).each((function(e){var r=t.dom
n&&cp(e,ks(r,0))?vp(r,0):!n&&lp(e,ks(r,r.length))&&yp(r,r.length)}))
var t,n}))}))},Ph=function(e,t,n){var r
e&&e.hasOwnProperty(t)&&(0===(r=W(e[t],(function(e){return e!==n}))).length?delete e[t]:e[t]=r)},Dh=function(e){return!!e.select},Lh=function(e){return!(!e||!e.ownerDocument)&&Dt(Rt(e.ownerDocument),Rt(e))},Ih=function(e,t,n,r){var o,i,a,u,s,c,l=function(e,t){return s||(s={},c={},u.on("NodeChange",(function(e){var t=e.element,n=a.getParents(t,null,a.getRoot()),r={}
Nt.each(s,(function(e,t){Nt.each(n,(function(o){if(a.is(o,t))return c[t]||(Nt.each(e,(function(e){e(!0,{node:o,selector:t,parents:n})})),c[t]=e),r[t]=e,!1}))})),Nt.each(c,(function(e,o){r[o]||(delete c[o],Nt.each(e,(function(e){e(!1,{node:t,selector:o,parents:n})})))}))}))),s[e]||(s[e]=[]),s[e].push(t),{unbind:function(){Ph(s,e,t),Ph(c,e,t)}}},f=function(e,t){return function(e,t,n){void 0===n&&(n={})
var r,o,i=(r=t,Ee(Ee({format:"html"},n),{set:!0,selection:!0,content:r}))
i.no_events||!(i=e.fire("BeforeSetContent",i)).isDefaultPrevented()?(n.content=function(e,t){if("raw"===t.format)return t.content
var n=e.selection.getRng(),r=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),o=r?{context:r.nodeName.toLowerCase()}:{},i=e.parser.parse(t.content,Ee(Ee({isRootContent:!0,forced_root_block:!1},o),t))
return mm({validate:e.validate},e.schema).serialize(i)}(e,i),function(e,t){var n=S.from(t.firstChild).map(Rt),r=S.from(t.lastChild).map(Rt)
e.deleteContents(),e.insertNode(t)
var o=n.bind(Wt).filter(Ut).bind(Oh),i=r.bind(Kt).filter(Ut).bind(Oh)
Bh(o,n,e,!0),Bh(i,r,e,!1),e.collapse(!1)}(o=e.selection.getRng(),o.createContextualFragment(n.content)),e.selection.setRng(o),yd(e,o),i.no_events||e.fire("SetContent",i)):e.fire("SetContent",i)}(r,e,t)},d=function(e){var t=p()
t.collapse(!!e),g(t)},m=function(){return t.getSelection?t.getSelection():t.document.selection},p=function(){var n,a,u,c=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(c){return-1}}
if(!t)return null
var l=t.document
if(null==l)return null
if(void 0!==r.bookmark&&!1===Hd(r)){var f=Pd(r)
if(f.isSome())return f.map((function(e){return Yd(r,[e])[0]})).getOr(l.createRange())}try{(n=m())&&!kn(n.anchorNode)&&(a=0<n.rangeCount?n.getRangeAt(0):n.createRange?n.createRange():l.createRange(),a=Yd(r,[a])[0])}catch(s){}return(a=a||(l.createRange?l.createRange():l.body.createTextRange())).setStart&&9===a.startContainer.nodeType&&a.collapsed&&(u=e.getRoot(),a.setStart(u,0),a.setEnd(u,0)),o&&i&&(0===c(a.START_TO_START,a,o)&&0===c(a.END_TO_END,a,o)?a=i:i=o=null),a},g=function(e,t){var n
if((a=e)&&(Dh(a)||Lh(a.startContainer)&&Lh(a.endContainer))){var a,u=Dh(e)?e:null
if(u){i=null
try{u.select()}catch(s){}}else{var c=m()
if(e=r.fire("SetSelectionRange",{range:e,forward:t}).range,c){i=e
try{c.removeAllRanges(),c.addRange(e)}catch(s){}!1===t&&c.extend&&(c.collapse(e.endContainer,e.endOffset),c.extend(e.startContainer,e.startOffset)),o=0<c.rangeCount?c.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!c.setBaseAndExtent||bt.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset])&&"IMG"===n.tagName&&(c.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),c.anchorNode===e.startContainer&&c.focusNode===e.endContainer||c.setBaseAndExtent(n,0,n,1)),r.fire("AfterSetSelectionRange",{range:e,forward:t})}}},h=function(){var t=m(),n=null==t?void 0:t.anchorNode,r=null==t?void 0:t.focusNode
if(!t||!n||!r||kn(n)||kn(r))return!0
var o=e.createRng()
o.setStart(n,t.anchorOffset),o.collapse(!0)
var i=e.createRng()
return i.setStart(r,t.focusOffset),i.collapse(!0),o.compareBoundaryPoints(o.START_TO_START,i)<=0},v={bookmarkManager:null,controlSelection:null,dom:a=e,win:t,serializer:n,editor:u=r,collapse:d,setCursorLocation:function(t,n){var o=e.createRng()
t?(o.setStart(t,n),o.setEnd(t,n),g(o),d(!1)):(bf(e,o,r.getBody(),!0),g(o))},getContent:function(e){return function(e,t){var n,r
return void 0===t&&(t={}),n=t.format?t.format:"html",r=t,Th(e).selection.getContent(n,r)}(r,e)},setContent:f,getBookmark:function(e,t){return y.getBookmark(e,t)},moveToBookmark:function(e){return y.moveToBookmark(e)},select:function(t,n){var r,o,i
return r=e,o=t,i=n,S.from(o).map((function(e){var t=r.nodeIndex(e),n=r.createRng()
return n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),i&&(bf(r,n,e,!0),bf(r,n,e,!1)),n})).each(g),t},isCollapsed:function(){var e=p(),t=m()
return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:h,setNode:function(t){return f(e.getOuterHTML(t)),t},getNode:function(){return function(e,t){var n,r
if(!t)return e
n=t.startContainer,r=t.endContainer
var o=t.startOffset,i=t.endOffset,a=t.commonAncestorContainer
return!t.collapsed&&(n===r&&i-o<2&&n.hasChildNodes()&&(a=n.childNodes[o]),3===n.nodeType&&3===r.nodeType&&(n=n.length===o?Xd(n.nextSibling,!0):n.parentNode,r=0===i?Xd(r.previousSibling,!1):r.parentNode,n&&n===r))?n:a&&3===a.nodeType?a.parentNode:a}(r.getBody(),p())},getSel:m,setRng:g,getRng:p,getStart:function(e){return Wd(r.getBody(),p(),e)},getEnd:function(e){return Kd(r.getBody(),p(),e)},getSelectedBlocks:function(t,n){return function(e,t,n,r){var o,i=[],a=e.getRoot()
if(n=e.getParent(n||Wd(a,t,t.collapsed),e.isBlock),r=e.getParent(r||Kd(a,t,t.collapsed),e.isBlock),n&&n!==a&&i.push(n),n&&r&&n!==r)for(var u=new Vr(o=n,a);(o=u.next())&&o!==r;)e.isBlock(o)&&i.push(o)
return r&&n!==r&&r!==a&&i.push(r),i}(e,p(),t,n)},normalize:function(){var t=p(),n=m()
if(1<mf(n).length||!Cf(r))return t
var o=qf(e,t)
return o.each((function(e){g(e,h())})),o.getOr(t)},selectorChanged:function(e,t){return l(e,t),v},selectorChangedWithUnbind:l,getScrollContainer:function(){for(var t,n=e.getRoot();n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n
break}n=n.parentNode}return t},scrollIntoView:function(e,t){return o=e,i=t,void((n=r).inline?gd:vd)(n,o,i)
var n,o,i},placeCaretAt:function(e,t){return g(Mf(e,t,r.getDoc()))},getBoundingClientRect:function(){var e=p()
return e.collapsed?ks.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){t=o=i=null,b.destroy()}},y=Tf(v),b=Lf(v,r)
return v.bookmarkManager=y,v.controlSelection=b,v},Mh=function(e,t){var n,r=li()
t.convert_fonts_to_spans&&function(e,t,n){e.addNodeFilter("font",(function(e){q(e,(function(e){var r,o=t.parse(e.attr("style")),i=e.attr("color"),a=e.attr("face"),u=e.attr("size")
i&&(o.color=i),a&&(o["font-family"]=a),u&&(o["font-size"]=n[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",t.serialize(o)),r=e,q(["color","face","size"],(function(e){r.attr(e,null)}))}))}))}(e,r,Nt.explode(t.font_size_legacy_values)),n=r,e.addNodeFilter("strike",(function(e){q(e,(function(e){var t=n.parse(e.attr("style"))
t["text-decoration"]="line-through",e.name="span",e.attr("style",n.serialize(t))}))}))},Fh=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},Uh=function(e,t){var n
try{n=atob(t)}catch(rN){return S.none()}for(var r=new Uint8Array(n.length),o=0;o<r.length;o++)r[o]=n.charCodeAt(o)
return S.some(new Blob([r],{type:e}))},zh=function(e){return 0===e.indexOf("blob:")?(t=e,new Ar((function(e,r){var o=function(){r("Cannot convert "+t+" to Blob. Resource might not exist or is inaccessible.")}
try{var i=new XMLHttpRequest
i.open("GET",t,!0),i.responseType="blob",i.onload=function(){200===this.status?e(this.response):o()},i.onerror=o,i.send()}catch(n){o()}}))):0===e.indexOf("data:")?(n=e,new Ar((function(e){var t=Fh(n),r=t.type,o=t.data
Uh(r,o).fold((function(){return e(new Blob([]))}),e)}))):null
var t,n},jh=0,Hh=function(e){return(e||"blobid")+jh++}
function Vh(e,t){var n={}
return{findAll:function(r,o){o=o||b
var i,a=W((i=r)?oe(i.getElementsByTagName("img")):[],(function(t){var n=t.src
return!!bt.fileApi&&!t.hasAttribute("data-mce-bogus")&&!t.hasAttribute("data-mce-placeholder")&&!(!n||n===bt.transparentSrc)&&(0===n.indexOf("blob:")?!e.isUploaded(n)&&o(t):0===n.indexOf("data:")&&o(t))})),u=V(a,(function(e){if(void 0!==n[e.src])return new Ar((function(t){n[e.src].then((function(n){return"string"==typeof n?n:void t({image:e,blobInfo:n.blobInfo})}))}))
var r=new Ar((function(n,r){(function(e,t,n,r){var o,i,a,u,s
0!==t.src.indexOf("blob:")?(i=(o=Fh(t.src)).data,a=o.type,u=i,(s=e.getByData(u,a))?n({image:t,blobInfo:s}):zh(t.src).then((function(r){s=e.create(Hh(),r,u),e.add(s),n({image:t,blobInfo:s})}),(function(e){r(e)}))):(s=e.getByUri(t.src))?n({image:t,blobInfo:s}):zh(t.src).then((function(r){var o
o=r,new Ar((function(e){var t=new FileReader
t.onloadend=function(){e(t.result)},t.readAsDataURL(o)})).then((function(o){u=Fh(o).data,s=e.create(Hh(),r,u),e.add(s),n({image:t,blobInfo:s})}))}),(function(e){r(e)}))})(t,e,n,r)})).then((function(e){return delete n[e.image.src],e})).catch((function(t){return delete n[e.src],t}))
return n[e.src]=r}))
return Ar.all(u)}}}var qh,$h,Wh=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new cm("br",1)).shortEnded=!0:r.empty().append(new cm("#text",3)).value=no},Kh=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Xh=function(e,t,n,r){return r.isEmpty(t,n,(function(t){return n=t,(r=e.getElementRule(n.name))&&r.paddEmpty
var n,r}))},Yh=function(e,t){var n=e.schema
t.remove_trailing_brs&&e.addNodeFilter("br",(function(e,r,o){var i,a,u,s,c,l,f,d,m=e.length,p=Nt.extend({},n.getBlockElements()),g=n.getNonEmptyElements(),h=n.getWhiteSpaceElements()
for(p.body=1,i=0;i<m;i++)if(u=(a=e[i]).parent,p[a.parent.name]&&a===u.lastChild){for(c=a.prev;c;){if("span"!==(l=c.name)||"bookmark"!==c.attr("data-mce-type")){"br"===l&&(a=null)
break}c=c.prev}a&&(a.remove(),Xh(n,g,h,u)&&(f=n.getElementRule(u.name))&&(f.removeEmpty?u.remove():f.paddEmpty&&Wh(t,o,p,u)))}else{for(s=a;u&&u.firstChild===s&&u.lastChild===s&&!p[(s=u).name];)u=u.parent
s===u&&!0!==t.padd_empty_with_br&&((d=new cm("#text",3)).value=no,a.replace(d))}})),e.addAttributeFilter("href",(function(e){var n,r,o=e.length
if(!t.allow_unsafe_link_target)for(;o--;){var i=e[o]
"a"===i.name&&"_blank"===i.attr("target")&&i.attr("rel",(r=(n=i.attr("rel"))?Nt.trim(n):"",/\b(noopener)\b/g.test(r)?r:r.split(" ").filter((function(e){return 0<e.length})).concat(["noopener"]).sort().join(" ")))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href"))for(r=o.parent,t=o.lastChild;n=t.prev,r.insert(t,o),t=n;);})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(function(e){for(var t,n,r,o=e.length;o--;)"ul"!==(r=(n=e[o]).parent).name&&"ol"!==r.name||(n.prev&&"li"===n.prev.name?n.prev.append(n):((t=new cm("li",1)).attr("style","list-style-type: none"),n.wrap(t)))})),t.validate&&n.getValidClasses()&&e.addAttributeFilter("class",(function(e){for(var t,r,o,i,a,u,s,c=e.length,l=n.getValidClasses();c--;){for(r=(t=e[c]).attr("class").split(" "),a="",o=0;o<r.length;o++)i=r[o],s=!1,(u=l["*"])&&u[i]&&(s=!0),u=l[t.name],!s&&u&&u[i]&&(s=!0),s&&(a&&(a+=" "),a+=i)
a.length||(a=null),t.attr("class",a)}})),function(e,t){var n=t.blob_cache,r=function(e){var r,o,i=e.attr("src");(r=e).attr("src")===bt.transparentSrc||r.attr("data-mce-placeholder")||e.attr("data-mce-bogus")||((o=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(i))?S.some({type:o[1],data:decodeURIComponent(o[2])}):S.none()).filter((function(){return function(e,t){if(t.images_dataimg_filter){var n=new Image
return n.src=e.attr("src"),ue(e.attributes.map,(function(e,t){n.setAttribute(t,e)})),t.images_dataimg_filter(n)}return!0}(e,t)})).bind((function(e){var t=e.type,r=e.data
return S.from(n.getByData(r,t)).orThunk((function(){return Uh(t,r).map((function(e){var t=n.create(Hh(),e,r)
return n.add(t),t}))}))})).each((function(t){e.attr("src",t.blobUri())}))}
n&&e.addAttributeFilter("src",(function(e){return q(e,r)}))}(e,t)},Gh=Nt.makeMap,Jh=Nt.each,Qh=Nt.explode,Zh=Nt.extend,ev=function(e,t){void 0===t&&(t=si())
var n={},r=[],o={},i={};(e=e||{}).validate=!("validate"in e)||e.validate,e.root_name=e.root_name||"body"
var a,u,s=function(e){var t,a,u=e.name
u in n&&((a=o[u])?a.push(e):o[u]=[e]),t=r.length
for(;t--;)(u=r[t].name)in e.attributes.map&&((a=i[u])?a.push(e):i[u]=[e])
return e},c={schema:t,addAttributeFilter:function(e,t){Jh(Qh(e),(function(e){for(var n=0;n<r.length;n++)if(r[n].name===e)return void r[n].callbacks.push(t)
r.push({name:e,callbacks:[t]})}))},getAttributeFilters:function(){return[].concat(r)},addNodeFilter:function(e,t){Jh(Qh(e),(function(e){var r=n[e]
r||(n[e]=r=[]),r.push(t)}))},getNodeFilters:function(){var e=[]
for(var t in n)n.hasOwnProperty(t)&&e.push({name:t,callbacks:n[t]})
return e},filterNode:s,parse:function(a,u){var c,l,f,d,m,p,g,h,v=[]
u=u||{},o={},i={}
var y,b=Zh(Gh("script,style,head,html,body,title,meta,param"),t.getBlockElements()),C=t.getNonEmptyElements(),w=t.children,x=e.validate,S=!1===(y="forced_root_block"in u?u.forced_root_block:e.forced_root_block)?"":!0===y?"p":y,N=t.getWhiteSpaceElements(),E=/^[ \t\r\n]+/,k=/[ \t\r\n]+$/,_=/[ \t\r\n]+/g,A=/^[ \t\r\n]+$/,R=N.hasOwnProperty(u.context)||N.hasOwnProperty(e.root_name),T=function(e,t){var r,i=new cm(e,t)
return e in n&&((r=o[e])?r.push(i):o[e]=[i]),i},O=function(e){for(var n,r,o,i=t.getBlockElements(),a=e.prev;a&&3===a.type;){if(0<(r=a.value.replace(k,"")).length)return void(a.value=r)
if(n=a.next){if(3===n.type&&n.value.length){a=a.prev
continue}if(!i[n.name]&&"script"!==n.name&&"style"!==n.name){a=a.prev
continue}}o=a.prev,a.remove(),a=o}},B=Cm({validate:x,allow_html_data_urls:e.allow_html_data_urls,allow_svg_data_urls:e.allow_svg_data_urls,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,preserve_cdata:e.preserve_cdata,self_closing_elements:function(e){var t,n={}
for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t])
return n}(t.getSelfClosingElements()),cdata:function(e){h.append(T("#cdata",4)).value=e},text:function(e,t){var n,r
R||(e=e.replace(_," "),(r=h.lastChild)&&(b[r.name]||"br"===r.name)&&(e=e.replace(E,""))),0!==e.length&&((n=T("#text",3)).raw=!!t,h.append(n).value=e)},comment:function(e){h.append(T("#comment",8)).value=e},pi:function(e,t){h.append(T(e,7)).value=t,O(h)},doctype:function(e){h.append(T("#doctype",10)).value=e,O(h)},start:function(e,n,o){var a,u,s,c,l=x?t.getElementRule(e):{}
if(l){for((a=T(l.outputName||e,1)).attributes=n,a.shortEnded=o,h.append(a),(c=w[h.name])&&w[a.name]&&!c[a.name]&&v.push(a),u=r.length;u--;)(s=r[u].name)in n.map&&((p=i[s])?p.push(a):i[s]=[a])
b[e]&&O(a),o||(h=a),!R&&N[e]&&(R=!0)}},end:function(n){var r,o,i,a,s,c=x?t.getElementRule(n):{}
if(c){if(b[n]&&!R){if((r=h.firstChild)&&3===r.type)if(0<(o=r.value.replace(E,"")).length)r.value=o,r=r.next
else for(i=r.next,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.next,0!==o.length&&!A.test(o)||(r.remove(),r=i),r=i
if((r=h.lastChild)&&3===r.type)if(0<(o=r.value.replace(k,"")).length)r.value=o,r=r.prev
else for(i=r.prev,r.remove(),r=i;r&&3===r.type;)o=r.value,i=r.prev,0!==o.length&&!A.test(o)||(r.remove(),r=i),r=i}if(R&&N[n]&&(R=!1),c.removeEmpty&&Xh(t,C,N,h))return a=h.parent,b[h.name]?h.empty().remove():h.unwrap(),void(h=a)
c.paddEmpty&&(Kh(s=h,"#text")&&s.firstChild.value===no||Xh(t,C,N,h))&&Wh(e,u,b,h),h=h.parent}}},t),P=h=new cm(u.context||e.root_name,11)
if(B.parse(a,u.format),x&&v.length&&(u.context?u.invalid=!0:function(e){for(var n,r,o,i,a,u,c,l,f,d,m=Gh("tr,td,th,tbody,thead,tfoot,table"),p=t.getNonEmptyElements(),g=t.getWhiteSpaceElements(),h=t.getTextBlockElements(),v=t.getSpecialElements(),y=0;y<e.length;y++)if((n=e[y]).parent&&!n.fixed)if(h[n.name]&&"li"===n.parent.name){for(f=n.next;f&&h[f.name];)f.name="li",f.fixed=!0,n.parent.insert(f,n.parent),f=f.next
n.unwrap(n)}else{for(o=[n],r=n.parent;r&&!t.isValidChild(r.name,n.name)&&!m[r.name];r=r.parent)o.push(r)
if(r&&1<o.length){for(o.reverse(),i=a=s(o[0].clone()),l=0;l<o.length-1;l++){for(t.isValidChild(a.name,o[l].name)?(u=s(o[l].clone()),a.append(u)):u=a,c=o[l].firstChild;c&&c!==o[l+1];)d=c.next,u.append(c),c=d
a=u}Xh(t,p,g,i)?r.insert(n,o[0],!0):(r.insert(i,o[0],!0),r.insert(n,i)),r=o[0],(Xh(t,p,g,r)||Kh(r,"br"))&&r.empty().remove()}else if(n.parent){if("li"===n.name){if((f=n.prev)&&("ul"===f.name||"ol"===f.name)){f.append(n)
continue}if((f=n.next)&&("ul"===f.name||"ol"===f.name)){f.insert(n,f.firstChild,!0)
continue}n.wrap(s(new cm("ul",1)))
continue}t.isValidChild(n.parent.name,"div")&&t.isValidChild("div",n.name)?n.wrap(s(new cm("div",1))):v[n.name]?n.empty().remove():n.unwrap()}}}(v)),S&&("body"===P.name||u.isRootContent)&&function(){var n,r,o=P.firstChild,i=function(e){e&&((o=e.firstChild)&&3===o.type&&(o.value=o.value.replace(E,"")),(o=e.lastChild)&&3===o.type&&(o.value=o.value.replace(k,"")))}
if(t.isValidChild(P.name,S.toLowerCase())){for(;o;)n=o.next,3===o.type||1===o.type&&"p"!==o.name&&!b[o.name]&&!o.attr("data-mce-type")?(r||((r=T(S,1)).attr(e.forced_root_block_attrs),P.insert(r,o)),r.append(o)):(i(r),r=null),o=n
i(r)}}(),!u.invalid){for(g in o)if(o.hasOwnProperty(g)){for(p=n[g],d=(c=o[g]).length;d--;)c[d].parent||c.splice(d,1)
for(l=0,f=p.length;l<f;l++)p[l](c,g,u)}for(l=0,f=r.length;l<f;l++)if((p=r[l]).name in i){for(d=(c=i[p.name]).length;d--;)c[d].parent||c.splice(d,1)
for(d=0,m=p.callbacks.length;d<m;d++)p.callbacks[d](c,p.name,u)}}return P}}
return Yh(c,e),a=c,(u=e).inline_styles&&Mh(a,u),c},tv=function(e,t,n){-1===Nt.inArray(t,n)&&(e.addAttributeFilter(n,(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),t.push(n))},nv=function(e,t){var n=["data-mce-selected"],r=t&&t.dom?t.dom:du.DOM,o=t&&t.schema?t.schema:si(e)
e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
var i,a,u,s=ev(e,o)
return a=e,u=r,(i=s).addAttributeFilter("data-mce-tabindex",(function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attr("data-mce-tabindex")),n.attr(t,null)})),i.addAttributeFilter("src,href,style",(function(e,t){for(var n,r,o=e.length,i="data-mce-"+t,s=a.url_converter,c=a.url_converter_scope;o--;)void 0!==(r=(n=e[o]).attr(i))?(n.attr(t,0<r.length?r:null),n.attr(i,null)):(r=n.attr(t),"style"===t?r=u.serializeStyle(u.parseStyle(r),n.name):s&&(r=s.call(c,r,t,n.name)),n.attr(t,0<r.length?r:null))})),i.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",0<n.length?n:null))})),i.addAttributeFilter("data-mce-type",(function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attr("data-mce-type")||n.cleanup||(S.from(r.firstChild).exists((function(e){return!oo(e.value)}))?r.unwrap():r.remove())})),i.addNodeFilter("noscript",(function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=Qo.decode(t.value))})),i.addNodeFilter("script,style",(function(e,t){for(var n,r,o,i=e.length,u=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};i--;)r=(n=e[i]).firstChild?n.firstChild.value:"","script"===t?((o=n.attr("type"))&&n.attr("type","mce-no/type"===o?null:o.replace(/^mce\-/,"")),"xhtml"===a.element_format&&0<r.length&&(n.firstChild.value="// <![CDATA[\n"+u(r)+"\n// ]]>")):"xhtml"===a.element_format&&0<r.length&&(n.firstChild.value="\x3c!--\n"+u(r)+"\n--\x3e")})),i.addNodeFilter("#comment",(function(e){for(var t,n=e.length;n--;)t=e[n],a.preserve_cdata&&0===t.value.indexOf("[CDATA[")?(t.name="#cdata",t.type=4,t.value=u.decode(t.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===t.value.indexOf("mce:protected ")&&(t.name="#text",t.type=3,t.raw=!0,t.value=unescape(t.value).substr(14))})),i.addNodeFilter("xml:namespace,input",(function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||n.attr("type")||n.attr("type","text"))})),i.addAttributeFilter("data-mce-type",(function(e){q(e,(function(e){"format-caret"===e.attr("data-mce-type")&&(e.isEmpty(i.schema.getNonEmptyElements())?e.remove():e.unwrap())}))})),i.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",(function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})),{schema:o,addNodeFilter:s.addNodeFilter,addAttributeFilter:s.addAttributeFilter,serialize:function(n,i){void 0===i&&(i={})
var a,u,c,l,f,d,m,p,g,h,v,y,b=Ee({format:"html"},i),C=function(e,t,n){return o=n,(r=e)&&r.hasEventListeners("PreProcess")&&!o.no_events?function(e,t,n){var r,o,i=e.dom
t=t.cloneNode(!0)
var a,u,s=document.implementation
return s.createHTMLDocument&&(r=s.createHTMLDocument(""),Nt.each("BODY"===t.nodeName?t.childNodes:[t],(function(e){r.body.appendChild(r.importNode(e,!0))})),t="BODY"!==t.nodeName?r.body.firstChild:r.body,o=i.doc,i.doc=r),a=e,u=Ee(Ee({},n),{node:t}),a.fire("PreProcess",u),o&&(i.doc=o),t}(e,t,n):t
var r,o}(t,n,b),w=(a=r,u=C,l=io((c=b).getInner?u.innerHTML:a.getOuterHTML(u)),c.selection||to(Rt(u))?l:Nt.trim(l)),x=(f=s,d=w,v=(m=b).selection?Ee({forced_root_block:!1},m):m,!(g=function(e){return e&&"br"===e.name})(h=(y=f.parse(d,v)).lastChild)||g(p=h.prev)&&(h.remove(),p.remove()),y)
return"tree"===b.format?x:function(e,t,n,r,o){var i,a,u,s,c,l
return a=e,i=r,s=mm(t,n).serialize(i),(u=o).no_events||!a?s:(c=a,l=Ee(Ee({},u),{content:s}),c.fire("PostProcess",l).content)}(t,e,o,x,b)},addRules:function(e){o.addValidElements(e)},setRules:function(e){o.setValidElements(e)},addTempAttr:f(tv,s,n),getTempAttrs:function(){return n},getNodeFilters:s.getNodeFilters,getAttributeFilters:s.getAttributeFilters}},rv=function(e,t){var n=nv(e,t)
return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters}},ov=function(e,t,n){return void 0===n&&(n={}),r=t,o=n,Rh(e).editor.setContent(r,o)
var r,o},iv=du.DOM,av=function(e){return S.from(e).each((function(e){return e.destroy()}))},uv=Object.prototype.hasOwnProperty,sv=(qh=function(e,t){return A(e)&&A(t)?sv(e,t):t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var o=e[r]
for(var i in o)uv.call(o,i)&&(n[i]=qh(n[i],o[i]))}return n}),cv=lt().deviceType,lv=cv.isTouch(),fv=cv.isPhone(),dv=cv.isTablet(),mv=["lists","autolink","autosave"],pv={table_grid:!1,object_resizing:!1,resize:!1},gv=function(e){var t=R(e)?e.join(" "):e,n=V(_(t)?t.split(" "):[],je)
return W(n,(function(e){return 0<e.length}))},hv=function(e,t){return e.sections().hasOwnProperty(t)},vv=function(e,t){return pe(e,"toolbar_mode").orThunk((function(){return pe(e,"toolbar_drawer").map((function(e){return!1===e?"wrap":e}))})).getOr(t)},yv=function(e,t,n,r){var o,i,a=gv(n.forced_plugins),u=gv(r.plugins),s=hv(o=t,"mobile")?o.sections().mobile:{},c=function(e,t,n,r){return e&&(a=i="mobile",u=(o=t).sections(),hv(o,i)&&u[i].theme===a)?W(r,f(j,mv)):e&&hv(t,"mobile")?r:n
var o,i,a,u}(e,t,u,s.plugins?gv(s.plugins):u),l=(i=c,[].concat(gv(a)).concat(gv(i)))
if(bt.browser.isIE()&&j(l,"rtc"))throw new Error("RTC plugin is not supported on IE 11.")
return Nt.extend(r,{plugins:l.join(" ")})},bv=function(e,t,n,r,o){var i,a,u,s,l,f,d=e?{mobile:(i=o.mobile||{},a=t,u={resize:!1,toolbar_mode:vv(i,"scrolling"),toolbar_sticky:!1},Ee(Ee(Ee({},pv),u),a?{menubar:!1}:{}))}:{},m=function(e,t){var n,r,o=de(t,(function(t,n){return j(e,n)}))
return n=o.t,r=o.f,{sections:c(n),settings:c(r)}}(["mobile"],sv(d,o)),p=Nt.extend(n,r,m.settings(),e&&hv(m,"mobile")?function(e,t,n){void 0===n&&(n={})
var r=e.sections(),o=r.hasOwnProperty(t)?r[t]:{}
return Nt.extend({},n,o)}(m,"mobile"):{},{validate:!0,external_plugins:(s=r,l=m.settings(),f=l.external_plugins?l.external_plugins:{},s&&s.external_plugins?Nt.extend({},s.external_plugins,f):f)})
return yv(e,m,r,p)},Cv=function(e,t,n){return S.from(t.settings[n]).filter(e)},wv=($h={},{add:function(e,t){$h[e]=t},get:function(e){return $h[e]?$h[e]:{icons:{}}},has:function(e){return ge($h,e)}}),xv=function(e,t){return t.dom[e]},Sv=function(e,t){return parseInt(Qn(t,e),10)},Nv=f(xv,"clientWidth"),Ev=f(xv,"clientHeight"),kv=f(Sv,"margin-top"),_v=f(Sv,"margin-left"),Av=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,m=Rt(e.getBody()),p=e.inline?m:Rt(Vt(m).dom.documentElement),g=(r=e.inline,i=t,a=n,u=(o=p).dom.getBoundingClientRect(),{x:i-(r?u.left+o.dom.clientLeft+_v(o):0),y:a-(r?u.top+o.dom.clientTop+kv(o):0)})
return c=g.x,l=g.y,f=Nv(s=p),d=Ev(s),0<=c&&0<=l&&c<=f&&l<=d}
function Rv(e){var t,n=[],r=function(){var t,n=e.theme
return n&&n.getNotificationManagerImpl?n.getNotificationManagerImpl():{open:t=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:t,reposition:t,getArgs:t}},o=function(){return S.from(n[0])},i=function(){0<n.length&&r().reposition(n)},a=function(e){G(n,(function(t){return t===e})).each((function(e){n.splice(e,1)}))},u=function(t,u){if(void 0===u&&(u=!0),!e.removed&&function(e){var t
return t=e.inline?e.getBody():e.getContentAreaContainer(),S.from(t).map(Rt).map(gn).getOr(!1)}(e))return u&&e.fire("BeforeOpenNotification",{notification:t}),Y(n,(function(e){return n=r().getArgs(e),o=t,!(n.type!==o.type||n.text!==o.text||n.progressBar||n.timeout||o.progressBar||o.timeout)
var n,o})).getOrThunk((function(){e.editorManager.setActive(e)
var u,s=r().open(t,(function(){a(s),i(),o().fold((function(){return e.focus()}),(function(e){return Rt(e.getEl()).dom.focus()}))}))
return u=s,n.push(u),i(),e.fire("OpenNotification",Ee({},s)),s}))}
return(t=e).on("SkinLoaded",(function(){var e=t.getParam("service_message")
e&&u({text:e,type:"warning",timeout:0},!1)})),t.on("ResizeEditor ResizeWindow NodeChange",(function(){Ur.requestAnimationFrame(i)})),t.on("remove",(function(){q(n.slice(),(function(e){r().close(e)}))})),{open:u,close:function(){o().each((function(e){r().close(e),a(e),i()}))},getNotifications:function(){return n}}}var Tv=ku.PluginManager,Ov=ku.ThemeManager,Bv=function(e){var t=[],n=function(){var t,n=e.theme
return n&&n.getWindowManagerImpl?n.getWindowManagerImpl():{open:t=function(){throw new Error("Theme did not provide a WindowManager implementation.")},openUrl:t,alert:t,confirm:t,close:t,getParams:t,setParams:t}},r=function(e,t){return function(){return t?t.apply(e,arguments):void 0}},o=function(n){var r
r=n,e.fire("CloseWindow",{dialog:r}),0===(t=W(t,(function(e){return e!==n}))).length&&e.focus()},i=function(n){e.editorManager.setActive(e),Bd(e)
var r=n()
return function(n){var r
t.push(n),r=n,e.fire("OpenWindow",{dialog:r})}(r),r}
return e.on("remove",(function(){q(t,(function(e){n().close(e)}))})),{open:function(e,t){return i((function(){return n().open(e,t,o)}))},openUrl:function(e){return i((function(){return n().openUrl(e,o)}))},alert:function(e,t,o){n().alert(e,r(o||this,t))},confirm:function(e,t,o){n().confirm(e,r(o||this,t))},close:function(){S.from(t[t.length-1]).each((function(e){n().close(e),o(e)}))}}},Pv=function(e,t){e.notificationManager.open({type:"error",text:t})},Dv=function(e,t){e._skinLoaded?Pv(e,t):e.on("SkinLoaded",(function(){Pv(e,t)}))},Lv=function(e,t,n){var r,o
r=t,o={message:n},e.fire(r,o),console.error(n)},Iv=function(e,t,n){return n?"Failed to load "+e+": "+n+" from url "+t:"Failed to load "+e+" url: "+t},Mv=function(e,t,n){Lv(e,"PluginLoadError",Iv("plugin",t,n))},Fv=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=window.console
r&&(r.error?r.error.apply(r,ke([e],t)):r.log.apply(r,ke([e],t)))}
function Uv(e,t){var n={},r=function(e,n,r,o){var i=new XMLHttpRequest
i.open("POST",t.url),i.withCredentials=t.credentials,i.upload.onprogress=function(e){o(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,o,a
i.status<200||300<=i.status?r("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?n((o=t.basePath,a=e.location,o?o.replace(/\/$/,"")+"/"+a.replace(/^\//,""):a)):r("Invalid JSON: "+i.responseText)}
var a=new FormData
a.append("file",e.blob(),e.filename()),i.send(a)},o=function(e,t){return{url:t,blobInfo:e,status:!0}},i=function(e,t,n){return{url:"",blobInfo:e,status:!1,error:{message:t,options:n}}},a=function(e,t){Nt.each(n[e],(function(e){e(t)})),delete n[e]}
return!1===L(t.handler)&&(t.handler=r),{upload:function(u,s){return t.url||t.handler!==r?function(r,u){return r=Nt.grep(r,(function(t){return!e.isUploaded(t.blobUri())})),Ar.all(Nt.map(r,(function(r){return e.isPending(r.blobUri())?(f=r.blobUri(),new Ar((function(e){n[f]=n[f]||[],n[f].push(e)}))):(s=r,c=t.handler,l=u,e.markPending(s.blobUri()),new Ar((function(t){var n
try{var u=function(){n&&n.close()}
c(s,(function(n){u(),e.markUploaded(s.blobUri(),n),a(s.blobUri(),o(s,n)),t(o(s,n))}),(function(n,r){var o=r||{}
u(),e.removeFailed(s.blobUri()),a(s.blobUri(),i(s,n,o)),t(i(s,n,o))}),(function(e){e<0||100<e||(n=n||l()).progressBar.value(e)}))}catch(r){t(i(s,r.message,{}))}})))
var s,c,l,f})))}(u,s):new Ar((function(e){e([])}))}}}var zv=0,jv=function(e){return e+zv+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t())
var t},Hv=function(e){var t,n,r,o,i,a,u,s,l,f=(t=[],n=function(e){if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
var t=e.id||jv("blobid"),n=e.name||t,r=e.blob
return{id:c(t),name:c(n),filename:c(e.filename||n+"."+({"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png","image/apng":"apng","image/avif":"avif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff"}[r.type.toLowerCase()]||"dat")),blob:c(r),base64:c(e.base64),blobUri:c(e.blobUri||URL.createObjectURL(r)),uri:c(e.uri)}},{create:function(e,t,r,o,i){if(_(e))return n({id:e,name:o,filename:i,blob:t,base64:r})
if(A(e))return n(e)
throw new Error("Unknown input type")},add:function(e){o(e.id())||t.push(e)},get:o=function(e){return r((function(t){return t.id()===e}))},getByUri:function(e){return r((function(t){return t.blobUri()===e}))},getByData:function(e,t){return r((function(n){return n.base64()===e&&n.blob().type===t}))},findFirst:r=function(e){return Y(t,e).getOrUndefined()},removeByUri:function(e){t=W(t,(function(t){return t.blobUri()!==e||(URL.revokeObjectURL(t.blobUri()),!1)}))},destroy:function(){q(t,(function(e){URL.revokeObjectURL(e.blobUri())})),t=[]}}),d=(u={},s=function(e,t){return{status:e,resultUri:t}},{hasBlobUri:l=function(e){return e in u},getResultUri:function(e){var t=u[e]
return t?t.resultUri:null},isPending:function(e){return!!l(e)&&1===u[e].status},isUploaded:function(e){return!!l(e)&&2===u[e].status},markPending:function(e){u[e]=s(1,null)},markUploaded:function(e,t){u[e]=s(2,t)},removeFailed:function(e){delete u[e]},destroy:function(){u={}}}),m=[],p=function(e){var t=bu(null)
return e.on("change AddUndo",(function(e){t.set(Ee({},e.level))})),{fireIfChanged:function(){var n=e.undoManager.data
re(n).filter((function(e){return!Ch(t.get(),e)})).each((function(t){e.setDirty(!0),e.fire("change",{level:t,lastLevel:te(n,n.length-2).getOrNull()})}))}}}(e),g=function(t){return function(n){return e.selection?t(n):[]}},h=function(e,t,n){for(var r=0;-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1),-1!==r;);return e},v=function(e,t,n){var r='src="'+n+'"'+(n===bt.transparentSrc?' data-mce-placeholder="1"':"")
return e=h(e,'src="'+t+'"',r),h(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},y=function(t,n){q(e.undoManager.data,(function(e){"fragmented"===e.type?e.fragments=V(e.fragments,(function(e){return v(e,t,n)})):e.content=v(e.content,t,n)}))},C=function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})},w=function(t){return i=i||Uv(d,{url:e.getParam("images_upload_url","","string"),basePath:e.getParam("images_upload_base_path","","string"),credentials:e.getParam("images_upload_credentials",!1,"boolean"),handler:e.getParam("images_upload_handler",null,"function")}),N().then(g((function(n){var r=V(n,(function(e){return e.blobInfo}))
return i.upload(r,C).then(g((function(r){var o=[],i=V(r,(function(t,r){var i,a,u=n[r].blobInfo,s=n[r].image
return t.status&&e.getParam("images_replace_blob_uris",!0,"boolean")?(f.removeByUri(s.src),function(t,n){var r,o=e.convertURL(n,"src")
y(t.src,n),e.$(t).attr({src:e.getParam("images_reuse_filename",!1,"boolean")?(r=n)+(-1===r.indexOf("?")?"?":"&")+(new Date).getTime():n,"data-mce-src":o})}(s,t.url)):t.error&&(t.error.options.remove&&(y(s.getAttribute("src"),bt.transparentSrc),o.push(s)),i=e,a=t.error.message,Dv(i,Su.translate(["Failed to upload image: {0}",a]))),{element:s,status:t.status,uploadUri:t.url,blobInfo:u}}))
return 0<i.length&&p.fireIfChanged(),0<o.length&&(Ah(e)?console.error("Removing images on failed uploads is currently unsupported for RTC"):e.undoManager.transact((function(){q(o,(function(t){e.dom.remove(t),f.removeByUri(t.src)}))}))),t&&t(i),i})))})))},x=function(t){if(Zs(e))return w(t)},S=function(t){return!1!==Q(m,(function(e){return e(t)}))&&(0!==t.getAttribute("src").indexOf("data:")||e.getParam("images_dataimg_filter",b,"function")(t))},N=function(){return(a=a||Vh(d,f)).findAll(e.getBody(),S).then(g((function(t){return t=W(t,(function(t){return"string"!=typeof t||(Dv(e,t),!1)})),q(t,(function(e){y(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),t})))},E=function(t){return t.replace(/src="(blob:[^"]+)"/g,(function(t,n){var r=d.getResultUri(n)
if(r)return'src="'+r+'"'
var o=f.getByUri(n)
return(o=o||X(e.editorManager.get(),(function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)}),null))?'src="data:'+o.blob().type+";base64,"+o.base64()+'"':t}))}
return e.on("SetContent",(function(){(Zs(e)?x:N)()})),e.on("RawSaveContent",(function(e){e.content=E(e.content)})),e.on("GetContent",(function(e){e.source_view||"raw"===e.format||"tree"===e.format||(e.content=E(e.content))})),e.on("PostRender",(function(){e.parser.addNodeFilter("img",(function(e){q(e,(function(e){var t,n=e.attr("src")
f.getByUri(n)||(t=d.getResultUri(n))&&e.attr("src",t)}))}))})),{blobCache:f,addFilter:function(e){m.push(e)},uploadImages:w,uploadImagesAuto:x,scanForImages:N,destroy:function(){f.destroy(),d.destroy(),a=i=null}}}
var Vv,qv,$v=Nt.each,Wv=du.DOM,Kv=function(e,t){var n,r,o,i=t&&t.schema||si({}),a=function(e){r="string"==typeof e?{name:e,classes:[],attrs:{}}:e
var t,n,o=Wv.create(r.name)
return t=o,(n=r).classes.length&&Wv.addClass(t,n.classes.join(" ")),Wv.setAttribs(t,n.attrs),o},u=function(e,t,n){var r,o,s,c,l,f,d,m=0<t.length&&t[0],p=m&&m.name,g=(c=p,l="string"!=typeof(s=e)?s.nodeName.toLowerCase():s,!(!(d=(f=i.getElementRule(l))&&f.parentsRequired)||!d.length)&&(c&&-1!==Nt.inArray(d,c)?c:d[0]))
if(g)p===g?(o=t[0],t=t.slice(1)):o=g
else if(m)o=t[0],t=t.slice(1)
else if(!n)return e
return o&&(r=a(o)).appendChild(e),n&&(r||(r=Wv.create("div")).appendChild(e),Nt.each(n,(function(t){var n=a(t)
r.insertBefore(n,e)}))),u(r,t,o&&o.siblings)}
return e&&e.length?(r=e[0],n=a(r),(o=Wv.create("div")).appendChild(u(n,e.slice(1),r.siblings)),o):""},Xv=function(e){var t,n={classes:[],attrs:{}}
return"*"!==(e=n.selector=Nt.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,(function(e,t,r,o,i){switch(t){case"#":n.attrs.id=r
break
case".":n.classes.push(r)
break
case":":-1!==Nt.inArray("checked disabled enabled read-only required".split(" "),r)&&(n.attrs[r]=r)}var a
return"["!==o||(a=i.match(/([\w\-]+)(?:\=\"([^\"]+))?/))&&(n.attrs[a[1]]=a[2]),""}))),n.name=t||"div",n},Yv=function(e,t){var n,r,o,i="",a=(o=e.getParam("preview_styles","font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),_(o)?o:"")
if(""===a)return""
var u=function(e){return e.replace(/%(\w+)/g,"")}
if("string"==typeof t){if(!(t=e.formatter.get(t)))return
t=t[0]}if("preview"in t){var s=pe(t,"preview")
if(s.is(!1))return""
a=s.getOr(a)}n=t.block||t.inline||"span"
var c,l=(c=t.selector)&&"string"==typeof c?(c=(c=c.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Nt.map(c.split(/(?:>|\s+(?![^\[\]]+\]))/),(function(e){var t=Nt.map(e.split(/(?:~\+|~|\+)/),Xv),n=t.pop()
return t.length&&(n.siblings=t),n})).reverse()):[],f=l.length?(l[0].name||(l[0].name=n),n=t.selector,Kv(l,e)):Kv([n],e),d=Wv.select(n,f)[0]||f.firstChild
return $v(t.styles,(function(e,t){var n=u(e)
n&&Wv.setStyle(d,t,n)})),$v(t.attributes,(function(e,t){var n=u(e)
n&&Wv.setAttrib(d,t,n)})),$v(t.classes,(function(e){var t=u(e)
Wv.hasClass(d,t)||Wv.addClass(d,t)})),e.fire("PreviewFormats"),Wv.setStyles(f,{position:"absolute",left:-65535}),e.getBody().appendChild(f),r=Wv.getStyle(e.getBody(),"fontSize",!0),r=/px$/.test(r)?parseInt(r,10):0,$v(a.split(" "),(function(t){var n=Wv.getStyle(d,t,!0)
if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=Wv.getStyle(e.getBody(),t,!0),"#ffffff"===Wv.toHex(n).toLowerCase())||"color"===t&&"#000000"===Wv.toHex(n).toLowerCase())){if("font-size"===t&&/em|%$/.test(n)){if(0===r)return
n=parseFloat(n)/(/%$/.test(n)?100:1)*r+"px"}"border"===t&&n&&(i+="padding:0 2px;"),i+=t+":"+n+";"}})),e.fire("AfterPreviewFormats"),Wv.remove(f),i},Gv=function(e){var t=function(e){var t,n,r={},o=function(e,t){e&&("string"!=typeof e?Nt.each(e,(function(e,t){o(t,e)})):(R(t)||(t=[t]),Nt.each(t,(function(e){void 0===e.deep&&(e.deep=!e.selector),void 0===e.split&&(e.split=!e.selector||e.inline),void 0===e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))})),r[e]=t))}
return o((t=e.dom,n={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all",preserve_attributes:["class","style"]}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",defaultBlock:"p",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(e,t,n){return _n(e)&&e.hasAttribute("href")},onformat:function(e,n,r){Nt.each(r,(function(n,r){t.setAttrib(e,r,n)}))}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]},Nt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),(function(e){n[e]={block:e,remove:"all"}})),n)),o(e.getParam("formats")),{get:function(e){return e?r[e]:r},has:function(e){return ge(r,e)},register:o,unregister:function(e){return e&&r[e]&&delete r[e],r}}}(e),n=bu(null)
return function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t])
e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])}(e),function(e){e.on("mouseup keydown",(function(t){var n,r,o,i
n=e,r=t.keyCode,o=n.selection,i=n.getBody(),vg(n,null,!1),8!==r&&46!==r||!o.isCollapsed()||o.getStart().innerHTML!==fg||vg(n,wl(i,o.getStart())),37!==r&&39!==r||vg(n,wl(i,o.getStart()))}))}(e),{get:t.get,has:t.has,register:t.register,unregister:t.unregister,apply:function(t,n,r){var o,i,a
o=t,i=n,a=r,Th(e).formatter.apply(o,i,a)},remove:function(t,n,r,o){var i,a,u,s
i=t,a=n,u=r,s=o,Th(e).formatter.remove(i,a,u,s)},toggle:function(t,n,r){var o,i,a
o=t,i=n,a=r,Th(e).formatter.toggle(o,i,a)},match:function(t,n,r){return o=t,i=n,a=r,Th(e).formatter.match(o,i,a)
var o,i,a},closest:function(t){return n=t,Th(e).formatter.closest(n)
var n},matchAll:function(t,n){return r=t,o=n,Th(e).formatter.matchAll(r,o)
var r,o},matchNode:function(t,n,r,o){return i=t,a=n,u=r,s=o,Th(e).formatter.matchNode(i,a,u,s)
var i,a,u,s},canApply:function(t){return n=t,Th(e).formatter.canApply(n)
var n},formatChanged:function(t,r,o){return i=n,a=t,u=r,void 0===(s=o)&&(s=!1),Th(e).formatter.formatChanged(i,a,u,s)
var i,a,u,s},getCssText:f(Yv,e)}},Jv=function(e){var t,n=bu(S.none()),r=bu(0),o=bu(0),i={data:[],typing:!1,beforeChange:function(){var t,o
t=r,o=n,Th(e).undoManager.beforeChange(t,o)},add:function(t,a){return u=i,s=o,c=r,l=n,f=t,d=a,Th(e).undoManager.addUndoLevel(u,s,c,l,f,d)
var u,s,c,l,f,d},undo:function(){return t=i,n=r,a=o,Th(e).undoManager.undo(t,n,a)
var t,n,a},redo:function(){return t=e,n=o,r=i.data,Th(t).undoManager.redo(n,r)
var t,n,r},clear:function(){var t,n
t=i,n=o,Th(e).undoManager.clear(t,n)},reset:function(){var t
t=i,Th(e).undoManager.reset(t)},hasUndo:function(){return t=i,n=o,Th(e).undoManager.hasUndo(t,n)
var t,n},hasRedo:function(){return t=i,n=o,Th(e).undoManager.hasRedo(t,n)
var t,n},transact:function(t){return n=i,o=r,a=t,Th(e).undoManager.transact(n,o,a)
var n,o,a},ignore:function(t){var n,o
n=r,o=t,Th(e).undoManager.ignore(n,o)},extra:function(t,n){var r,a,u,s
r=i,a=o,u=t,s=n,Th(e).undoManager.extra(r,a,u,s)}}
return Ah(e)||function(e,t,n){var r=bu(!1),o=function(e){xh(t,!1,n),t.add({},e)}
e.on("init",(function(){t.add()})),e.on("BeforeExecCommand",(function(e){var r=e.command.toLowerCase()
"undo"!==r&&"redo"!==r&&"mcerepaint"!==r&&(Sh(t,n),t.beforeChange())})),e.on("ExecCommand",(function(e){var t=e.command.toLowerCase()
"undo"!==t&&"redo"!==t&&"mcerepaint"!==t&&o(e)})),e.on("ObjectResizeStart cut",(function(){t.beforeChange()})),e.on("SaveContent ObjectResized blur",o),e.on("dragend",o),e.on("keyup",(function(n){var i=n.keyCode
n.isDefaultPrevented()||((33<=i&&i<=36||37<=i&&i<=40||45===i||n.ctrlKey)&&(o(),e.nodeChanged()),46!==i&&8!==i||e.nodeChanged(),r.get()&&t.typing&&!1===Ch(hh(e),t.data[0])&&(!1===e.isDirty()&&(e.setDirty(!0),e.fire("change",{level:t.data[0],lastLevel:null})),e.fire("TypingUndo"),r.set(!1),e.nodeChanged()))})),e.on("keydown",(function(e){var i,a=e.keyCode
e.isDefaultPrevented()||(33<=a&&a<=36||37<=a&&a<=40||45===a?t.typing&&o(e):(i=e.ctrlKey&&!e.altKey||e.metaKey,!(a<16||20<a)||224===a||91===a||t.typing||i||(t.beforeChange(),xh(t,!0,n),t.add({},e),r.set(!0))))})),e.on("mousedown",(function(e){t.typing&&o(e)})),e.on("input",(function(e){var t,n
e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(n=e).inputType&&null===n.data||"insertFromPaste"===(t=e).inputType||"insertFromDrop"===t.inputType)&&o(e)})),e.on("AddUndo Undo Redo ClearUndos",(function(t){t.isDefaultPrevented()||e.nodeChanged()}))}(e,i,r),(t=e).addShortcut("meta+z","","Undo"),t.addShortcut("meta+y,meta+shift+z","","Redo"),i},Qv=[9,27,Pf.HOME,Pf.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,Pf.DOWN,Pf.UP,Pf.LEFT,Pf.RIGHT].concat(bt.browser.isFirefox()?[224]:[]),Zv="data-mce-placeholder",ey=function(e){return"keydown"===e.type||"keyup"===e.type},ty=function(e){var t=e.keyCode
return t===Pf.BACKSPACE||t===Pf.DELETE},ny=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,ry=function(e,t){return Ot(Rt(t),e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string"))},oy=function(e,t,n){var r,o,i,a=(r=e,o=t,i=n,W(du.DOM.getParents(i.container(),"*",o),r))
return S.from(a[a.length-1])},iy=function(e,t){if(!t)return t
var n=t.container(),r=t.offset()
return e?co(n)?Ln(n.nextSibling)?ks(n.nextSibling,0):ks.after(n):mo(t)?ks(n,r+1):t:co(n)?Ln(n.previousSibling)?ks(n.previousSibling,n.previousSibling.data.length):ks.before(n):po(t)?ks(n,r-1):t},ay=f(iy,!0),uy=f(iy,!1),sy=function(e,t){return Dt(e,t)?Nr(t,(function(e){return Gr(e)||Qr(e)}),(n=e,function(e){return Pt(n,Rt(e.dom.parentNode))})):S.none()
var n},cy=function(e){var t,n,r
e.dom.isEmpty(e.getBody())&&(e.setContent(""),r=(n=(t=e).getBody()).firstChild&&t.dom.isBlock(n.firstChild)?n.firstChild:n,t.selection.setCursorLocation(r,0))},ly=function(e,t){return{from:e,to:t}},fy=function(e,t){var n=Rt(e),r=Rt(t.container())
return sy(n,r).map((function(e){return{block:e,position:t}}))},dy=function(e){var t,n=(t=Gt(e),G(t,Kr).fold((function(){return t}),(function(e){return t.slice(0,e)})))
return q(n,mn),n},my=function(e,t){var n=Vm(t,e)
return Y(n.reverse(),(function(e){return Lo(e)})).each(mn)},py=function(e,t,n,r){if(Lo(n))return zm(n),vl(n.dom)
0===W(Xt(r),(function(e){return!Lo(e)})).length&&Lo(t)&&un(r,_t("br"))
var o=hl(n.dom,ks.before(r.dom))
return q(dy(t),(function(e){un(r,e)})),my(e,t),o},gy=function(e,t,n){if(Lo(n))return mn(n),Lo(t)&&zm(t),vl(t.dom)
var r=yl(n.dom)
return q(dy(t),(function(e){ln(n,e)})),my(e,t),r},hy=function(e,t){pl(e,t.dom).map((function(e){return e.getNode()})).map(Rt).filter(Yr).each(mn)},vy=function(e,t,n){return hy(!0,t),hy(!1,n),function(e,t){return Dt(t,e)?(n=Vm(e,t),S.from(n[n.length-1])):S.none()
var n}(t,n).fold(f(gy,e,t,n),f(py,e,t,n))},yy=function(e,t,n,r){return t?vy(e,r,n):vy(e,n,r)},by=function(e,t){var n,r,o,i=Rt(e.getBody()),a=(n=i.dom,r=t,((o=e.selection.getRng()).collapsed?function(e,t,n){var r=fy(e,ks.fromRangeStart(n)),o=r.bind((function(n){return fl(t,e,n.position).bind((function(n){return fy(e,n).map((function(n){return r=e,o=t,Un((i=n).position.getNode())&&!1===Lo(i.block)?pl(!1,i.block.dom).bind((function(e){return e.isEqual(i.position)?fl(o,r,e).bind((function(e){return fy(r,e)})):S.some(i)})).getOr(i):i
var r,o,i}))}))}))
return Xu(r,o,ly).filter((function(e){return!1===Pt((r=e).from.block,r.to.block)&&$t((n=e).from.block).bind((function(e){return $t(n.to.block).filter((function(t){return Pt(e,t)}))})).isSome()&&!1===Hn((t=e).from.block.dom)&&!1===Hn(t.to.block.dom)
var t,n,r}))}(n,r,o):S.none()).bind((function(e){return yy(i,t,e.from.block,e.to.block)})))
return a.each((function(t){e.selection.setRng(t.toRange())})),a.isSome()},Cy=function(e,t){var n=Rt(t),r=f(Pt,e)
return Sr(n,eo,r).isSome()},wy=function(e){var t,n,r,o,i=Rt(e.getBody())
return function(e,t){var n,r,o=hl(e.dom,ks.fromRangeStart(t)).isNone(),i=gl(e.dom,ks.fromRangeEnd(t)).isNone()
return!(Cy(n=e,(r=t).startContainer)||Cy(n,r.endContainer))&&o&&i}(i,e.selection.getRng())?((o=e).setContent(""),o.selection.setCursorLocation(),!0):(t=i,n=e.selection,r=n.getRng(),Xu(sy(t,Rt(r.startContainer)),sy(t,Rt(r.endContainer)),(function(e,o){return!1===Pt(e,o)&&(r.deleteContents(),yy(t,!0,e,o).each((function(e){n.setRng(e.toRange())})),!0)})).getOr(!1))},xy=function(e,t){return!e.selection.isCollapsed()&&wy(e)},Sy=jn,Ny=Hn,Ey=function(e,t,n,r,o){return S.from(t._selectionOverrides.showCaret(e,n,r,o))},ky=function(e,t){var n,r
return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?S.none():S.some(((r=(n=t).ownerDocument.createRange()).selectNode(n),r))},_y=function(e,t,n){var r=Vc(1,e.getBody(),t),o=ks.fromRangeStart(r),i=o.getNode()
if(Ec(i))return Ey(1,e,i,!o.isAtEnd(),!1)
var a=o.getNode(!0)
if(Ec(a))return Ey(1,e,a,!1,!1)
var u=e.dom.getParent(o.getNode(),(function(e){return Ny(e)||Sy(e)}))
return Ec(u)?Ey(1,e,u,!1,n):S.none()},Ay=function(e,t,n){return t.collapsed?_y(e,t,n).getOr(t):t},Ry=function(e){return Fm(e)||Dm(e)},Ty=function(e){return Um(e)||Lm(e)},Oy=function(e,t,n,r,o,i){var a,u
return Ey(r,e,i.getNode(!o),o,!0).each((function(n){var r
t.collapsed?(r=t.cloneRange(),o?r.setEnd(n.startContainer,n.startOffset):r.setStart(n.endContainer,n.endOffset),r.deleteContents()):t.deleteContents(),e.selection.setRng(n)})),a=e.dom,Ln(u=n)&&0===u.data.length&&a.remove(u),!0},By=function(e,t){var n=e.selection.getRng()
if(!Ln(n.commonAncestorContainer))return!1
var r=t?Ns.Forwards:Ns.Backwards,o=ul(e.getBody()),i=f(Kc,t?o.next:o.prev),a=t?Ry:Ty,u=$c(r,e.getBody(),n),s=iy(t,i(u))
if(!s||!Xc(u,s))return!1
if(a(s))return Oy(e,n,u.getNode(),r,t,s)
var c=i(s)
return!!(c&&a(c)&&Xc(s,c))&&Oy(e,n,u.getNode(),r,t,c)},Py=hr([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),Dy=function(e,t,n){return fl(t,e,n).bind((function(r){return c=r.getNode(),eo(Rt(c))||Qr(Rt(c))?S.none():(o=e,u=r,s=function(e){return Xr(Rt(e))&&!Mc(a,u,o)},qc(!(i=t),a=n).fold((function(){return qc(i,u).fold(y,s)}),s)?S.none():t&&Hn(r.getNode())||!1===t&&Hn(r.getNode(!0))?function(e,t,n,r){var o=r.getNode(!1===t)
return sy(Rt(e),Rt(n.getNode())).map((function(e){return Lo(e)?Py.remove(e.dom):Py.moveToElement(o)})).orThunk((function(){return S.some(Py.moveToElement(o))}))}(e,t,n,r):t&&Um(n)||!1===t&&Fm(n)?S.some(Py.moveToPosition(r)):S.none())
var o,i,a,u,s,c}))},Ly=function(e,t){return S.from(Of(e.getBody(),t))},Iy=function(e,t){var n=e.selection.getNode()
return Ly(e,n).filter(Hn).fold((function(){return n=e.getBody(),r=t,o=e.selection.getRng(),i=Vc(r?1:-1,n,o),a=ks.fromRangeStart(i),u=Rt(n),(!1===r&&Um(a)?S.some(Py.remove(a.getNode(!0))):r&&Fm(a)?S.some(Py.remove(a.getNode())):!1===r&&Fm(a)&&tp(u,a)?np(u,a).map((function(e){return Py.remove(e.getNode())})):r&&Um(a)&&ep(u,a)?rp(u,a).map((function(e){return Py.remove(e.getNode())})):function(e,t,n){return i=t,a=n.getNode(!1===i),u=i?"after":"before",_n(a)&&a.getAttribute("data-mce-caret")===u?(r=t,o=n.getNode(!1===t),(r&&Hn(o.nextSibling)?S.some(Py.moveToElement(o.nextSibling)):!1===r&&Hn(o.previousSibling)?S.some(Py.moveToElement(o.previousSibling)):S.none()).fold((function(){return Dy(e,t,n)}),S.some)):Dy(e,t,n).bind((function(t){return r=e,o=n,t.fold((function(e){return S.some(Py.remove(e))}),(function(e){return S.some(Py.moveToElement(e))}),(function(e){return Mc(o,e,r)?S.none():S.some(Py.moveToPosition(e))}))
var r,o}))
var r,o,i,a,u}(n,r,a)).exists((function(n){return n.fold((function(e){return a._selectionOverrides.hideFakeCaret(),Rp(a,u,Rt(e)),!0}),(i=u=t,function(e){var t=i?ks.before(e):ks.after(e)
return o.selection.setRng(t.toRange()),!0}),(r=o=a=e,function(e){return r.selection.setRng(e.toRange()),!0}))
var r,o,i,a,u}))
var n,r,o,i,a,u}),b)},My=function(e,t){var n=e.selection.getNode()
return!!Hn(n)&&Ly(e,n.parentNode).filter(Hn).fold((function(){var n
return n=Rt(e.getBody()),q(Du(n,".mce-offscreen-selection"),mn),Rp(e,t,Rt(e.selection.getNode())),cy(e),!0}),(function(){return!0}))},Fy=function(e){var t,n=e.dom,r=e.selection,o=Of(e.getBody(),r.getNode())
return jn(o)&&n.isBlock(o)&&n.isEmpty(o)&&(t=n.create("br",{"data-mce-bogus":"1"}),n.setHTML(o,""),o.appendChild(t),r.setRng(ks.before(t).toRange())),!0},Uy=function(e,t){return(e.selection.isCollapsed()?Iy:My)(e,t)},zy=function(e,t){return!!e.selection.isCollapsed()&&(n=e,r=t,o=ks.fromRangeStart(n.selection.getRng()),fl(r,n.getBody(),o).filter((function(e){return(r?Bm:Pm)(e)})).bind((function(e){return S.from(Fc(r?0:-1,e))})).exists((function(e){return n.selection.select(e),!0})))
var n,r,o},jy=Ln,Hy=function(e){return jy(e)&&e.data[0]===ro},Vy=function(e){return jy(e)&&e.data[e.data.length-1]===ro},qy=function(e){return e.ownerDocument.createTextNode(ro)},$y=function(e,t){return(e?function(e){if(jy(e.previousSibling))return Vy(e.previousSibling)||e.previousSibling.appendData(ro),e.previousSibling
if(jy(e))return Hy(e)||e.insertData(0,ro),e
var t=qy(e)
return e.parentNode.insertBefore(t,e),t}:function(e){if(jy(e.nextSibling))return Hy(e.nextSibling)||e.nextSibling.insertData(0,ro),e.nextSibling
if(jy(e))return Vy(e)||e.appendData(ro),e
var t=qy(e)
return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t})(t)},Wy=f($y,!0),Ky=f($y,!1),Xy=function(e,t){return Ln(e.container())?$y(t,e.container()):$y(t,e.getNode())},Yy=function(e,t){var n=t.get()
return n&&e.container()===n&&co(n)},Gy=function(e,t){return t.fold((function(t){vc(e.get())
var n=Wy(t)
return e.set(n),S.some(ks(n,n.length-1))}),(function(t){return vl(t).map((function(t){if(Yy(t,e))return ks(e.get(),1)
vc(e.get())
var n=Xy(t,!0)
return e.set(n),ks(n,1)}))}),(function(t){return yl(t).map((function(t){if(Yy(t,e))return ks(e.get(),e.get().length-1)
vc(e.get())
var n=Xy(t,!1)
return e.set(n),ks(n,n.length-1)}))}),(function(t){vc(e.get())
var n=Ky(t)
return e.set(n),S.some(ks(n,1))}))},Jy=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t)
if(r.isSome())return r}return S.none()},Qy=hr([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),Zy=function(e,t){return Ic(t,e)||e},eb=function(e,t,n){var r=ay(n),o=Zy(t,r.container())
return oy(e,o,r).fold((function(){return gl(o,r).bind(f(oy,e,o)).map((function(e){return Qy.before(e)}))}),S.none)},tb=function(e,t){return null===wl(e,t)},nb=function(e,t,n){return oy(e,t,n).filter(f(tb,t))},rb=function(e,t,n){var r=uy(n)
return nb(e,t,r).bind((function(e){return hl(e,r).isNone()?S.some(Qy.start(e)):S.none()}))},ob=function(e,t,n){var r=ay(n)
return nb(e,t,r).bind((function(e){return gl(e,r).isNone()?S.some(Qy.end(e)):S.none()}))},ib=function(e,t,n){var r=uy(n),o=Zy(t,r.container())
return oy(e,o,r).fold((function(){return hl(o,r).bind(f(oy,e,o)).map((function(e){return Qy.after(e)}))}),S.none)},ab=function(e){return!1===function(e){return"rtl"===du.DOM.getStyle(e,"direction",!0)||(t=e.textContent,ny.test(t))
var t}(sb(e))},ub=function(e,t,n){return Jy([eb,rb,ob,ib],[e,t,n]).filter(ab)},sb=function(e){return e.fold(l,l,l,l)},cb=function(e){return e.fold(c("before"),c("start"),c("end"),c("after"))},lb=function(e){return e.fold(Qy.before,Qy.before,Qy.after,Qy.after)},fb=function(e){return e.fold(Qy.start,Qy.start,Qy.end,Qy.end)},db=function(e,t,n,r,o,i){return Xu(oy(t,n,r),oy(t,n,o),(function(t,r){return t!==r&&(a=r,u=Ic(t,o=n),s=Ic(a,o),u&&u===s)?Qy.after(e?t:r):i
var o,a,u,s})).getOr(i)},mb=function(e,t){return e.fold(b,(function(e){return r=t,!(cb(n=e)===cb(r)&&sb(n)===sb(r))
var n,r}))},pb=function(e,t){return e?t.fold(s(S.some,Qy.start),S.none,s(S.some,Qy.after),S.none):t.fold(S.none,s(S.some,Qy.before),S.none,s(S.some,Qy.end))},gb=function(e,t,n,r){var o=iy(e,r),i=ub(t,n,o)
return ub(t,n,o).bind(f(pb,e)).orThunk((function(){return a=t,u=n,s=i,c=iy(o=e,r),fl(o,u,c).map(f(iy,o)).fold((function(){return s.map(lb)}),(function(e){return ub(a,u,e).map(f(db,o,a,u,c,e)).filter(f(mb,s))})).filter(ab)
var o,a,u,s,c}))},hb=(f(gb,!1),f(gb,!0),function(e,t,n){var r=e?1:-1
return t.setRng(ks(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0}),vb=function(e,t){var n=e.dom.createRng()
n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},yb=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},bb=function(e,t,n){return Gy(t,n).map((function(t){return vb(e,t),n}))},Cb=function(e,t,n){return!!uc(e)&&(o=t,i=n,a=(r=e).getBody(),u=ks.fromRangeStart(r.selection.getRng()),s=f(ry,r),gb(i,s,a,u).bind((function(e){return bb(r,o,e)})).isSome())
var r,o,i,a,u,s},wb=function(e,t,n){return!!uc(t)&&function(e,t){var n=t.selection.getRng(),r=e?ks.fromRangeEnd(n):ks.fromRangeStart(n)
return!!L(t.selection.getSel().modify)&&(e&&mo(r)?hb(!0,t.selection,r):!(e||!po(r))&&hb(!1,t.selection,r))}(e,t)},xb=function(e){var t=bu(null),n=f(ry,e)
return e.on("NodeChange",(function(r){var o,i,a,u,s,c,l,d,m,p,g
!uc(e)||bt.browser.isIE()&&r.initial||(c=n,l=e.dom,d=r.parents,m=V(Du(Rt(l.getRoot()),'*[data-mce-selected="inline-boundary"]'),(function(e){return e.dom})),p=W(m,c),g=W(d,c),q(ee(p,g),f(yb,!1)),q(ee(g,p),f(yb,!0)),function(e,t){var n,r
e.selection.isCollapsed()&&!0!==e.composing&&t.get()&&(n=ks.fromRangeStart(e.selection.getRng()),ks.isTextPosition(n)&&!1===(mo(r=n)||po(r))&&(vb(e,hc(t.get(),n)),t.set(null)))}(e,t),o=n,i=e,a=t,u=r.parents,i.selection.isCollapsed()&&(s=W(u,o),q(s,(function(e){var t=ks.fromRangeStart(i.selection.getRng())
ub(o,i.getBody(),t).bind((function(e){return bb(i,a,e)}))}))))})),t},Sb=f(wb,!0),Nb=f(wb,!1),Eb=function(e,t){return function(n){return Gy(t,n).exists((function(t){return vb(e,t),!0}))}},kb=function(e,t,n,r){var o=e.getBody(),i=f(ry,e)
e.undoManager.ignore((function(){var a,u,s
e.selection.setRng((a=n,u=r,(s=document.createRange()).setStart(a.container(),a.offset()),s.setEnd(u.container(),u.offset()),s)),e.execCommand("Delete"),ub(i,o,ks.fromRangeStart(e.selection.getRng())).map(fb).map(Eb(e,t))})),e.nodeChanged()},_b=function(e,t,n){if(e.selection.isCollapsed()&&uc(e)){var r=ks.fromRangeStart(e.selection.getRng())
return function(e,t,n,r){var o,i,a=(o=e.getBody(),i=r.container(),Ic(i,o)||o),u=f(ry,e),s=ub(u,a,r)
return s.bind((function(e){return n?e.fold(c(S.some(fb(e))),S.none,c(S.some(lb(e))),S.none):e.fold(S.none,c(S.some(lb(e))),S.none,c(S.some(fb(e))))})).map(Eb(e,t)).getOrThunk((function(){var o=dl(n,a,r),i=o.bind((function(e){return ub(u,a,e)}))
return Xu(s,i,(function(){return oy(u,a,r).exists((function(t){return!!Xu(vl(r=t),yl(r),(function(e,t){var n=iy(!0,e),o=iy(!1,t)
return gl(r,n).forall((function(e){return e.isEqual(o)}))})).getOr(!0)&&(Rp(e,n,Rt(t)),!0)
var r}))})).orThunk((function(){return i.bind((function(i){return o.map((function(o){return n?kb(e,t,r,o):kb(e,t,o,r),!0}))}))})).getOr(!1)}))}(e,t,n,r)}return!1},Ab=function(e){return 1===Gt(e).length},Rb=function(e,t){var n,r=Rt(e.getBody()),o=Rt(e.selection.getStart()),i=W((n=Vm(o,r),G(n,Kr).fold(c(n),(function(e){return n.slice(0,e)}))),Ab)
return re(i).exists((function(n){var r,o,a,u,s=ks.fromRangeStart(e.selection.getRng())
return o=t,a=s,u=n.dom,!(!Xu(vl(u),yl(u),(function(e,t){var n=iy(!0,e),r=iy(!1,t),i=iy(!1,a)
return o?gl(u,i).exists((function(e){return e.isEqual(r)&&a.isEqual(n)})):hl(u,i).exists((function(e){return e.isEqual(n)&&a.isEqual(r)}))})).getOr(!0)||Cl((r=n).dom)&&mg(r.dom)||(function(e,t,n,r){var o,i,a,u,s,c=f(wg,t),l=V(W(r,c),(function(e){return e.dom}))
0===l.length?Rp(t,e,n):(i=n.dom,a=l,u=gg(!1),s=bg(a,u.dom),un(Rt(i),u),mn(Rt(i)),o=ks(s,0),t.selection.setRng(o.toRange()))}(t,e,n,i),0))}))},Tb=function(e,t){return!!e.selection.isCollapsed()&&Rb(e,t)},Ob=function(e,t,n){return e._selectionOverrides.hideFakeCaret(),Rp(e,t,Rt(n)),!0},Bb=function(e,t){return e.selection.isCollapsed()?(i=e,u=(a=t)?Dm:Lm,s=a?Ns.Forwards:Ns.Backwards,c=$c(s,i.getBody(),i.selection.getRng()),u(c)?Ob(i,a,c.getNode(!a)):S.from(iy(a,c)).filter((function(e){return u(e)&&Xc(c,e)})).exists((function(e){return Ob(i,a,e.getNode(!a))}))):(r=t,o=(n=e).selection.getNode(),!!qn(o)&&Ob(n,r,o))
var n,r,o,i,a,u,s,c},Pb=function(e){var t=parseInt(e,10)
return isNaN(t)?0:t},Db=function(e,t){return(e||"table"===Lt(t)?"margin":"padding")+("rtl"===Qn(t,"direction")?"-right":"-left")},Lb=function(e){var t,n=Mb(e)
return!e.mode.isReadOnly()&&(1<n.length||(t=e,Q(n,(function(e){var n=Db(rc(t),e),r=er(e,n).map(Pb).getOr(0)
return"false"!==t.dom.getContentEditable(e.dom)&&0<r}))))},Ib=function(e){return Jr(e)||Qr(e)},Mb=function(e){return W(V(e.selection.getSelectedBlocks(),Rt),(function(e){return!Ib(e)&&!$t(e).map(Ib).getOr(!1)&&Nr(e,(function(e){return jn(e.dom)||Hn(e.dom)})).exists((function(e){return jn(e.dom)}))}))},Fb=function(e,t){var n=e.dom,r=e.selection,o=e.formatter,i=e.getParam("indentation","40px","string"),a=/[a-z%]+$/i.exec(i)[0],u=parseInt(i,10),s=rc(e),c=Js(e)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||""!==c||n.getParent(r.getNode(),n.isBlock)||o.apply("div"),q(Mb(e),(function(e){var r,o,i,c,l,f,d,m
r=n,o=t,i=s,c=u,l=a,f=e.dom,m=Db(i,Rt(f)),"outdent"===o?(d=Math.max(0,Pb(f.style[m])-c),r.setStyle(f,m,d?d+l:"")):(d=Pb(f.style[m])+c+l,r.setStyle(f,m,d))}))},Ub=function(e,t){if(e.selection.isCollapsed()&&Lb(e)){var n=e.dom,r=e.selection.getRng(),o=ks.fromRangeStart(r),i=n.getParent(r.startContainer,n.isBlock)
if(null!==i&&Xm(Rt(i),o))return Fb(e,"outdent"),!0}return!1},zb=function(e,t){e.getDoc().execCommand(t,!1,null)},jb=function(e){return void 0===e.touches||1!==e.touches.length?S.none():S.some(e.touches[0])},Hb=function(e,t){return e.hasOwnProperty(t.nodeName)},Vb=function(e){var t,n,r,o=e.dom,i=e.selection,a=e.schema,u=a.getBlockElements(),s=i.getStart(),c=e.getBody(),l=Js(e)
if(s&&_n(s)&&l){var f=c.nodeName.toLowerCase()
if(a.isValidChild(f,l.toLowerCase())&&(d=u,m=c,!H(Hm(Rt(s),Rt(m)),(function(e){return Hb(d,e.dom)})))){var d,m,p,g,h=i.getRng(),v=h.startContainer,y=h.startOffset,b=h.endContainer,C=h.endOffset,w=Hd(e)
for(s=c.firstChild;s;)if(p=u,Ln(g=s)||_n(g)&&!Hb(p,g)&&!Rl(g)){if(function(e,t){if(Ln(t)){if(0===t.nodeValue.length)return!0
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||Hb(e,t.nextSibling)))return!0}return!1}(u,s)){s=(n=s).nextSibling,o.remove(n)
continue}t||(t=o.create(l,Qs(e)),s.parentNode.insertBefore(t,s),r=!0),s=(n=s).nextSibling,t.appendChild(n)}else t=null,s=s.nextSibling
r&&w&&(h.setStart(v,y),h.setEnd(b,C),i.setRng(h),e.nodeChanged())}}},qb=function(e,t){var n
t.hasAttribute("data-mce-caret")&&(vo(t),(n=e).selection.setRng(n.selection.getRng()),e.selection.scrollIntoView(t))},$b=function(e,t){var n=kr(Rt(e.getBody()),"*[data-mce-caret]").fold(c(null),(function(e){return e.dom}))
if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void qb(e,n)):void(fo(n)&&(qb(e,n),e.undoManager.add()))};(qv=Vv=Vv||{})[qv.Br=0]="Br",qv[qv.Block=1]="Block",qv[qv.Wrap=2]="Wrap",qv[qv.Eol=3]="Eol"
var Wb,Kb,Xb=function(e,t){return e===Ns.Backwards?Z(t):t},Yb=function(e,t,n,r){for(var o,i,a,u,s,c,l=ul(n),f=r,d=[];f&&(s=l,c=f,o=t===Ns.Forwards?s.next(c):s.prev(c));){if(Un(o.getNode(!1)))return t===Ns.Forwards?{positions:Xb(t,d).concat([o]),breakType:Vv.Br,breakAt:S.some(o)}:{positions:Xb(t,d),breakType:Vv.Br,breakAt:S.some(o)}
if(o.isVisible()){if(e(f,o)){var m=(i=t,a=f,Un((u=o).getNode(i===Ns.Forwards))?Vv.Br:!1===Mc(a,u)?Vv.Block:Vv.Wrap)
return{positions:Xb(t,d),breakType:m,breakAt:S.some(o)}}d.push(o),f=o}else f=o}return{positions:Xb(t,d),breakType:Vv.Eol,breakAt:S.none()}},Gb=function(e,t,n,r){return t(n,r).breakAt.map((function(r){var o=t(n,r).positions
return e===Ns.Backwards?o.concat(r):[r].concat(o)})).getOr([])},Jb=function(e,t){return X(e,(function(e,n){return e.fold((function(){return S.some(n)}),(function(r){return Xu(ne(r.getClientRects()),ne(n.getClientRects()),(function(e,o){var i=Math.abs(t-e.left)
return Math.abs(t-o.left)<=i?n:r})).or(e)}))}),S.none())},Qb=function(e,t){return ne(t.getClientRects()).bind((function(t){return Jb(e,t.left)}))},Zb=f(Yb,Ss.isAbove,-1),eC=f(Yb,Ss.isBelow,1),tC=f(Gb,-1,Zb),nC=f(Gb,1,eC),rC=function(e){var t=function(t){return V(t,(function(t){return(t=Gu(t)).node=e,t}))}
if(_n(e))return t(e.getClientRects())
if(Ln(e)){var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}},oC=function(e){return J(e,rC)};(Kb=Wb=Wb||{})[Kb.Up=-1]="Up",Kb[Kb.Down=1]="Down"
var iC=function(e,t,n,r,o,i){var a=0,u=[],s=function(r){var i,s,l=oC([r])
for(-1===e&&(l=l.reverse()),i=0;i<l.length;i++)if(s=l[i],!n(s,c)){if(0<u.length&&t(s,Ne(u))&&a++,s.line=a,o(s))return!0
u.push(s)}},c=Ne(i.getClientRects())
if(!c)return u
var l=i.getNode()
return s(l),function(e,t,n,r){for(;r=Lc(r,e,Ao,t);)if(n(r))return}(e,r,s,l),u},aC=f(iC,Wb.Up,Zu,es),uC=f(iC,Wb.Down,es,Zu),sC=function(e){return function(t){return n=e,t.line>n
var n}},cC=function(e){return function(t){return n=e,t.line===n
var n}},lC=Hn,fC=Lc,dC=function(e,t){return Math.abs(e.left-t)},mC=function(e,t){return Math.abs(e.right-t)},pC=function(e,t){return e>=t.left&&e<=t.right},gC=function(e,t){return e>=t.top&&e<=t.bottom},hC=function(e,t){return xe(e,(function(e,n){var r=Math.min(dC(e,t),mC(e,t)),o=Math.min(dC(n,t),mC(n,t))
return pC(t,n)||!pC(t,e)&&(o===r&&lC(n.node)||o<r)?n:e}))},vC=function(e,t,n,r,o){var i=fC(r,e,Ao,t,!o)
do{if(!i||n(i))return}while(i=fC(i,e,Ao,t))},yC=function(e,t){e.selection.setRng(t),yd(e,e.selection.getRng())},bC=function(e,t,n){return S.some(Ay(e,t,n))},CC=function(e,t,n,r,o,i){var a=t===Ns.Forwards,u=ul(e.getBody()),s=f(Kc,a?u.next:u.prev),c=a?r:o
if(!n.collapsed){var l=ns(n)
if(i(l))return Ey(t,e,l,t===Ns.Backwards,!1)}var d=$c(t,e.getBody(),n)
if(c(d))return ky(e,d.getNode(!a))
var m=iy(a,s(d)),p=so(n.startContainer)
if(!m)return p?S.some(n):S.none()
if(c(m))return Ey(t,e,m.getNode(!a),a,!1)
var g=s(m)
return g&&c(g)&&Xc(m,g)?Ey(t,e,g.getNode(!a),a,!1):p?bC(e,m.toRange(),!1):S.none()},wC=function(e,t,n,r,o,i){var a=$c(t,e.getBody(),n),u=Ne(a.getClientRects()),s=t===Wb.Down
if(!u)return S.none()
var c,l=(s?uC:aC)(e.getBody(),sC(1),a),f=W(l,cC(1)),d=u.left,m=hC(f,d)
if(m&&i(m.node)){var p=Math.abs(d-m.left),g=Math.abs(d-m.right)
return Ey(t,e,m.node,p<g,!1)}if(c=r(a)?a.getNode():o(a)?a.getNode(!0):ns(n)){var h=function(e,t,n,r){var o,i,a,u,s=ul(t),c=[],l=0,f=function(e){return Ne(e.getClientRects())},d=1===e?(o=s.next,i=es,a=Zu,ks.after(r)):(o=s.prev,i=Zu,a=es,ks.before(r)),m=f(d)
do{if(d.isVisible()&&!a(u=f(d),m)){if(0<c.length&&i(u,Ne(c))&&l++,(u=Gu(u)).position=d,u.line=l,n(u))return c
c.push(u)}}while(d=o(d))
return c}(t,e.getBody(),sC(1),c),v=hC(W(h,cC(1)),d)
if(v)return bC(e,v.position.toRange(),!1)
if(v=Ne(W(h,cC(0))))return bC(e,v.position.toRange(),!1)}return 0===f.length?xC(e,s).filter(s?o:r).map((function(t){return Ay(e,t.toRange(),!1)})):S.none()},xC=function(e,t){var n=e.selection.getRng(),r=e.getBody()
if(t){var o=ks.fromRangeEnd(n),i=eC(r,o)
return re(i.positions)}return o=ks.fromRangeStart(n),i=Zb(r,o),ne(i.positions)},SC=function(e,t,n){return xC(e,t).filter(n).exists((function(t){return e.selection.setRng(t.toRange()),!0}))},NC=Hn,EC=function(e,t,n){var r,o,i=ul(e.getBody()),a=f(Kc,1===t?i.next:i.prev)
if(n.collapsed&&""!==Js(e)){var u,s=e.dom.getParent(n.startContainer,"PRE")
if(!s)return
a(ks.fromRangeStart(n))||(o=(r=e).dom.create(Js(r)),(!bt.ie||11<=bt.ie)&&(o.innerHTML='<br data-mce-bogus="1">'),u=o,1===t?e.$(s).after(u):e.$(s).before(u),e.selection.select(u,!0),e.selection.collapse())}},kC=function(e,t){return function(e,t){var n=t?Ns.Forwards:Ns.Backwards,r=e.selection.getRng()
return CC(e,n,r,Fm,Um,NC).orThunk((function(){return EC(e,n,r),S.none()}))}(e,t).exists((function(t){return yC(e,t),!0}))},_C=function(e,t){return function(e,t){var n=t?1:-1,r=e.selection.getRng()
return wC(e,n,r,(function(e){return Fm(e)||Im(e)}),(function(e){return Um(e)||Mm(e)}),NC).orThunk((function(){return EC(e,n,r),S.none()}))}(e,t).exists((function(t){return yC(e,t),!0}))},AC=function(e,t){return SC(e,t,t?Um:Fm)},RC=function(e){return j(["figcaption"],Lt(e))},TC=function(e){var t=document.createRange()
return t.setStartBefore(e.dom),t.setEndBefore(e.dom),t},OC=function(e,t,n){(n?ln:cn)(e,t)},BC=function(e,t){var n,r,o=Rt(e.getBody()),i=ks.fromRangeStart(e.selection.getRng()),a=Js(e),u=Qs(e)
return n=i,r=f(Pt,o),Nr(Rt(n.container()),Kr,r).filter(RC).exists((function(){if(function(e,t,n){return t?(o=e.dom,eC(o,n).breakAt.isNone()):(r=e.dom,Zb(r,n).breakAt.isNone())
var r,o}(o,t,i)){var n=function(e,t,n,r){return""===t?(c=e,l=r,f=_t("br"),OC(c,f,l),TC(f)):(o=e,i=r,a=n,u=_t(t),s=_t("br"),Xn(u,a),ln(u,s),OC(o,u,i),TC(s))
var o,i,a,u,s,c,l,f}(o,a,u,t)
return e.selection.setRng(n),!0}return!1}))},PC=function(e,t){return!!e.selection.isCollapsed()&&BC(e,t)},DC=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){return e.apply(null,t)}},LC=function(e,t){return Y(function(e,t){return J(V(e,(function(e){return Ee({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:u},e)})),(function(e){return n=e,(r=t).keyCode===n.keyCode&&r.shiftKey===n.shiftKey&&r.altKey===n.altKey&&r.ctrlKey===n.ctrlKey&&r.metaKey===n.metaKey?[e]:[]
var n,r}))}(e,t),(function(e){return e.action()}))},IC=function(e,t){var n=t?Ns.Forwards:Ns.Backwards,r=e.selection.getRng()
return CC(e,n,r,Dm,Lm,qn).exists((function(t){return yC(e,t),!0}))},MC=function(e,t){var n=t?1:-1,r=e.selection.getRng()
return wC(e,n,r,Dm,Lm,qn).exists((function(t){return yC(e,t),!0}))},FC=function(e,t){return SC(e,t,t?Lm:Dm)},UC=function(e,t,n,r,o){var i,a,u=Du(Rt(n),"td,th,caption").map((function(e){return e.dom})),s=W(function(e,t){return J(t,(function(t){var n,r,o=(r=-1,{left:(n=Gu(t.getBoundingClientRect())).left-r,top:n.top-r,right:n.right+-2,bottom:n.bottom+-2,width:n.width+r,height:n.height+r})
return[{x:o.left,y:e(o),cell:t},{x:o.right,y:e(o),cell:t}]}))}(e,u),(function(e){return t(e,o)}))
return i=r,a=o,X(s,(function(e,t){return e.fold((function(){return S.some(t)}),(function(e){var n=Math.sqrt(Math.abs(e.x-i)+Math.abs(e.y-a)),r=Math.sqrt(Math.abs(t.x-i)+Math.abs(t.y-a))
return S.some(r<n?t:e)}))}),S.none()).map((function(e){return e.cell}))},zC=f(UC,(function(e){return e.bottom}),(function(e,t){return e.y<t})),jC=f(UC,(function(e){return e.top}),(function(e,t){return e.y>t})),HC=function(e,t,n){var r,o,i,a,u=e(t,n)
return(a=u).breakType===Vv.Wrap&&0===a.positions.length||!Un(n.getNode())&&(i=u).breakType===Vv.Br&&1===i.positions.length?(r=e,o=t,!u.breakAt.exists((function(e){return r(o,e).breakAt.isSome()}))):u.breakAt.isNone()},VC=f(HC,Zb),qC=f(HC,eC),$C=function(e,t,n,r){var o,i,a,u,s=e.selection.getRng(),c=t?1:-1
return!(!Nc()||(o=t,i=s,a=n,u=ks.fromRangeStart(i),!pl(!o,a).exists((function(e){return e.isEqual(u)})))||(Ey(c,e,n,!t,!1).each((function(t){yC(e,t)})),0))},WC=function(e,t,n){var r=function(e,t){var n=t.getNode(e)
return _n(n)&&"TABLE"===n.nodeName?S.some(n):S.none()}(!!t,n),o=!1===t
r.fold((function(){return yC(e,n.toRange())}),(function(r){return pl(o,e.getBody()).filter((function(e){return e.isEqual(n)})).fold((function(){return yC(e,n.toRange())}),(function(o){return i=t,u=r,s=n,void((c=Js(a=e))?a.undoManager.transact((function(){var e=_t(c)
Xn(e,Qs(a)),ln(e,_t("br")),(i?sn:un)(Rt(u),e)
var t=a.dom.createRng()
t.setStart(e.dom,0),t.setEnd(e.dom,0),yC(a,t)})):yC(a,s.toRange()))
var i,a,u,s,c}))}))},KC=function(e,t,n,r){var o,i,a,u,s,c,l=e.selection.getRng(),f=ks.fromRangeStart(l),d=e.getBody()
if(!t&&VC(r,f)){var m=(u=d,function(e,t){return ne(t.getClientRects()).bind((function(t){return zC(e,t.left,t.top)})).bind((function(e){return Qb(yl(n=e).map((function(e){return Zb(n,e).positions.concat(e)})).getOr([]),t)
var n}))}(s=n,c=f).orThunk((function(){return ne(c.getClientRects()).bind((function(e){return Jb(tC(u,ks.before(s)),e.left)}))})).getOr(ks.before(s)))
return WC(e,t,m),!0}return!(!t||!qC(r,f))&&(o=d,m=function(e,t){return re(t.getClientRects()).bind((function(t){return jC(e,t.left,t.top)})).bind((function(e){return Qb(vl(n=e).map((function(e){return[e].concat(eC(n,e).positions)})).getOr([]),t)
var n}))}(i=n,a=f).orThunk((function(){return ne(a.getClientRects()).bind((function(e){return Jb(nC(o,ks.after(i)),e.left)}))})).getOr(ks.after(i)),WC(e,t,m),!0)},XC=function(e,t,n){return S.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((function(r){return S.from(e.dom.getParent(r,"table")).map((function(o){return n(e,t,o,r)}))})).getOr(!1)},YC=function(e,t){return XC(e,t,$C)},GC=function(e,t){return XC(e,t,KC)},JC=function(e,t){var n,r,o=t,i=e.dom,a=e.schema.getMoveCaretBeforeOnEnterElements()
if(t){!/^(LI|DT|DD)$/.test(t.nodeName)||(r=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}(t.firstChild))&&/^(UL|OL|DL)$/.test(r.nodeName)&&t.insertBefore(i.doc.createTextNode(no),t.firstChild)
var u=i.createRng()
if(t.normalize(),t.hasChildNodes()){for(var s=new Vr(t,t);n=s.current();){if(Ln(n)){u.setStart(n,0),u.setEnd(n,0)
break}if(a[n.nodeName.toLowerCase()]){u.setStartBefore(n),u.setEndBefore(n)
break}o=n,n=s.next()}n||(u.setStart(o,0),u.setEnd(o,0))}else Un(t)?t.nextSibling&&i.isBlock(t.nextSibling)?(u.setStartBefore(t),u.setEndBefore(t)):(u.setStartAfter(t),u.setEndAfter(t)):(u.setStart(t,0),u.setEnd(t,0))
e.selection.setRng(u),yd(e,u)}},QC=function(e){return S.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},ZC=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},ew=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},tw=function(e){var t=e.parentNode
return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},nw=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!_n(r);)r=r[n?"nextSibling":"previousSibling"]
return r===t},rw=function(e){e.innerHTML='<br data-mce-bogus="1">'},ow=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},iw=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},aw=function(e,t,n){return!1===Ln(t)?n:e?1===n&&t.data.charAt(n-1)===ro?0:n:n===t.data.length-1&&t.data.charAt(n)===ro?t.data.length:n},uw=function(e,t){for(var n,r=e.getRoot(),o=t;o!==r&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(n=o),o=o.parentNode
return o!==r?n:r},sw=function(e,t){var n=Js(e)
n&&n.toLowerCase()===t.tagName.toLowerCase()&&function(e,t,n){var r=e.dom
S.from(n.style).map(r.parseStyle).each((function(e){var n=tr(Rt(t)),o=Ee(Ee({},n),e)
r.setStyles(t,o)}))
var o=S.from(n.class).map((function(e){return e.split(/\s+/)})),i=S.from(t.className).map((function(e){return W(e.split(/\s+/),(function(e){return""!==e}))}))
Xu(o,i,(function(e,n){var o=W(n,(function(t){return!j(e,t)})),i=ke(e,o)
r.setAttrib(t,"class",i.join(" "))}))
var a=["style","class"],u=me(n,(function(e,t){return!j(a,t)}))
r.setAttribs(t,u)}(e,t,Qs(e))},cw=function(e,t){var n,r,o,i,a,u,s,c,l,f=e.dom,d=e.schema,m=d.getNonEmptyElements(),p=e.selection.getRng(),g=function(t){var n,o=r,a=d.getTextInlineElements(),u=t||"TABLE"===c||"HR"===c?f.create(t||S):i.cloneNode(!1),s=u
if(!1===e.getParam("keep_styles",!0))f.setAttrib(u,"style",null),f.setAttrib(u,"class",null)
else do{if(a[o.nodeName]){if(Cl(o)||Rl(o))continue
n=o.cloneNode(!1),f.setAttrib(n,"id",""),u.hasChildNodes()?n.appendChild(u.firstChild):s=n,u.appendChild(n)}}while((o=o.parentNode)&&o!==N)
return sw(e,u),rw(s),u},h=function(e){var t,n,a=aw(e,r,o)
if(Ln(r)&&(e?0<a:a<r.nodeValue.length))return!1
if(r.parentNode===i&&l&&!e)return!0
if(e&&_n(r)&&r===i.firstChild)return!0
if(ow(r,"TABLE")||ow(r,"HR"))return l&&!e||!l&&e
var u=new Vr(r,i)
for(Ln(r)&&(e&&0===a?u.prev():e||a!==r.nodeValue.length||u.next());t=u.current();){if(_n(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),m[n]&&"br"!==n))return!1}else if(Ln(t)&&!To(t.nodeValue))return!1
e?u.prev():u.next()}return!0},v=function(){a=/^(H[1-6]|PRE|FIGURE)$/.test(c)&&"HGROUP"!==C?g(S):g(),e.getParam("end_container_on_empty_block",!1)&&iw(f,s)&&f.isEmpty(i)?a=f.split(s,i):f.insertAfter(a,i),JC(e,a)}
qf(f,p).each((function(e){p.setStart(e.startContainer,e.startOffset),p.setEnd(e.endContainer,e.endOffset)})),r=p.startContainer,o=p.startOffset,S=Js(e)
var y=!(!t||!t.shiftKey),b=!(!t||!t.ctrlKey)
_n(r)&&r.hasChildNodes()&&(l=o>r.childNodes.length-1,r=r.childNodes[Math.min(o,r.childNodes.length-1)]||r,o=l&&Ln(r)?r.nodeValue.length:0)
var C,w,x,S,N=uw(f,r)
N&&((S&&!y||!S&&y)&&(r=function(e,t,n,r,o){var i,a,u,s,c,l,f=t||"P",d=e.dom,m=uw(d,r),p=d.getParent(r,d.isBlock)
if(!p||!iw(d,p)){if(c=(p=p||m)===e.getBody()||(l=p)&&/^(TD|TH|CAPTION)$/.test(l.nodeName)?p.nodeName.toLowerCase():p.parentNode.nodeName.toLowerCase(),!p.hasChildNodes())return i=d.create(f),sw(e,i),p.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i
for(u=r;u.parentNode!==p;)u=u.parentNode
for(;u&&!d.isBlock(u);)u=(a=u).previousSibling
if(a&&e.schema.isValidChild(c,f.toLowerCase())){for(i=d.create(f),sw(e,i),a.parentNode.insertBefore(i,a),u=a;u&&!d.isBlock(u);)s=u.nextSibling,i.appendChild(u),u=s
n.setStart(r,o),n.setEnd(r,o)}}return r}(e,S,p,r,o)),i=f.getParent(r,f.isBlock),s=i?f.getParent(i.parentNode,f.isBlock):null,c=i?i.nodeName.toUpperCase():"","LI"!==(C=s?s.nodeName.toUpperCase():"")||b||(s=(i=s).parentNode,c=C),/^(LI|DT|DD)$/.test(c)&&f.isEmpty(i)?function(e,t,n,r,o){var i,a,u,s,c,l=e.dom,f=e.selection.getRng()
n!==e.getBody()&&(ew(i=n)&&ew(i.parentNode)&&(o="LI"),a=o?t(o):l.create("BR"),nw(n,r,!0)&&nw(n,r,!1)?ZC(n,"LI")?l.insertAfter(a,tw(n)):l.replace(a,n):nw(n,r,!0)?ZC(n,"LI")?(l.insertAfter(a,tw(n)),a.appendChild(l.doc.createTextNode(" ")),a.appendChild(n)):n.parentNode.insertBefore(a,n):nw(n,r,!1)?l.insertAfter(a,tw(n)):(n=tw(n),(u=f.cloneRange()).setStartAfter(r),u.setEndAfter(n),s=u.extractContents(),"LI"===o&&(c=s).firstChild&&"LI"===c.firstChild.nodeName?(a=s.firstChild,l.insertAfter(s,n)):(l.insertAfter(s,n),l.insertAfter(a,n))),l.remove(r),JC(e,a))}(e,g,s,i,S):S&&i===e.getBody()||(S=S||"P",so(i)?(a=vo(i),f.isEmpty(i)&&rw(i),sw(e,a),JC(e,a)):h()?v():h(!0)?(a=i.parentNode.insertBefore(g(),i),JC(e,ow(i,"HR")?a:i)):((x=(w=p).cloneRange()).setStart(w.startContainer,aw(!0,w.startContainer,w.startOffset)),x.setEnd(w.endContainer,aw(!1,w.endContainer,w.endOffset)),(n=x.cloneRange()).setEndAfter(i),u=n.extractContents(),q(Pu(Rt(u),Ut),(function(e){var t=e.dom
t.nodeValue=io(t.nodeValue)})),function(e){for(;Ln(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;);}(u),a=u.firstChild,f.insertAfter(u,i),function(e,t,n){var r,o,i,a=n,u=[]
if(a){for(;a=a.firstChild;){if(e.isBlock(a))return
_n(a)&&!t[a.nodeName.toLowerCase()]&&u.push(a)}for(r=u.length;r--;)!(a=u[r]).hasChildNodes()||a.firstChild===a.lastChild&&""===a.firstChild.nodeValue?e.remove(a):(o=e,(i=a)&&"A"===i.nodeName&&o.isEmpty(i)&&e.remove(a))}}(f,m,a),function(e,t){t.normalize()
var n=t.lastChild
n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")}(f,i),f.isEmpty(i)&&rw(i),a.normalize(),f.isEmpty(a)?(f.remove(a),v()):(sw(e,a),JC(e,a))),f.setAttrib(a,"id",""),e.fire("NewBlock",{newBlock:a})))},lw=function(e,t,n){var r=e.create("span",{},"&nbsp;")
n.parentNode.insertBefore(r,n),t.scrollIntoView(r),e.remove(r)},fw=function(e,t,n,r){var o=e.createRng()
r?(o.setStartBefore(n),o.setEndBefore(n)):(o.setStartAfter(n),o.setEndAfter(n)),t.setRng(o)},dw=function(e,t){var n=_t("br")
un(Rt(t),n),e.undoManager.add()},mw=function(e,t){pw(e.getBody(),t)||sn(Rt(t),_t("br"))
var n=_t("br")
sn(Rt(t),n),lw(e.dom,e.selection,n.dom),fw(e.dom,e.selection,n.dom,!1),e.undoManager.add()},pw=function(e,t){return n=ks.after(t),!!Un(n.getNode())||gl(e,ks.after(t)).map((function(e){return Un(e.getNode())})).getOr(!1)
var n},gw=function(e){return e&&"A"===e.nodeName&&"href"in e},hw=function(e){return e.fold(y,gw,gw,y)},vw=function(e,t){t.fold(u,f(dw,e),f(mw,e),u)},yw=function(e,t){var n,r,o,i=(r=f(ry,n=e),o=ks.fromRangeStart(n.selection.getRng()),ub(r,n.getBody(),o).filter(hw))
i.isSome()?i.each(f(vw,e)):function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng()
qf(i,a).each((function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)}))
var u,s=a.startOffset,c=a.startContainer
1===c.nodeType&&c.hasChildNodes()&&(u=s>c.childNodes.length-1,c=c.childNodes[Math.min(s,c.childNodes.length-1)]||c,s=u&&3===c.nodeType?c.nodeValue.length:0)
var l=i.getParent(c,i.isBlock),f=l?i.getParent(l.parentNode,i.isBlock):null,d=f?f.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey)
"LI"!==d||m||(l=f),c&&3===c.nodeType&&s>=c.nodeValue.length&&!function(e,t,n){for(var r,o=new Vr(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||0<r.length)return!0}(e.schema,c,l)&&(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0),n=i.create("br"),As(i,a,n),lw(i,o,n),fw(i,o,n,r),e.undoManager.add()}(e,t)},bw=function(e,t){return QC(e).filter((function(e){return 0<t.length&&Ot(Rt(e),t)})).isSome()},Cw=hr([{br:[]},{block:[]},{none:[]}]),ww=function(e,t){return bw(n=e,n.getParam("no_newline_selector",""))
var n},xw=function(e){return function(t,n){return""===Js(t)===e}},Sw=function(e){return function(t,n){return QC(t).filter((function(e){return Qr(Rt(e))})).isSome()===e}},Nw=function(e,t){return function(n,r){return QC(n).fold(c(""),(function(e){return e.nodeName.toUpperCase()}))===e.toUpperCase()===t}},Ew=function(e){return Nw("pre",e)},kw=function(e){return function(t,n){return t.getParam("br_in_pre",!0)===e}},_w=function(e,t){return bw(n=e,n.getParam("br_newline_selector",".mce-toc h2,figcaption,caption"))
var n},Aw=function(e,t){return t},Rw=function(e){var t=Js(e),n=function(e,t){for(var n,r=e.getRoot(),o=t;o!==r&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(n=o),o=o.parentNode
return o!==r?n:r}(e.dom,e.selection.getStart())
return n&&e.schema.isValidChild(n.nodeName,t||"P")},Tw=function(e,t){return function(n,r){return X(e,(function(e,t){return e&&t(n,r)}),!0)?S.some(t):S.none()}},Ow=function(e,t){(function(e,t){return Jy([Tw([ww],Cw.none()),Tw([Nw("summary",!0)],Cw.br()),Tw([Ew(!0),kw(!1),Aw],Cw.br()),Tw([Ew(!0),kw(!1)],Cw.block()),Tw([Ew(!0),kw(!0),Aw],Cw.block()),Tw([Ew(!0),kw(!0)],Cw.br()),Tw([Sw(!0),Aw],Cw.br()),Tw([Sw(!0)],Cw.block()),Tw([xw(!0),Aw,Rw],Cw.block()),Tw([xw(!0)],Cw.br()),Tw([_w],Cw.br()),Tw([xw(!1),Aw],Cw.br()),Tw([Rw],Cw.block())],[e,!(!t||!t.shiftKey)]).getOr(Cw.none())})(e,t).fold((function(){yw(e,t)}),(function(){cw(e,t)}),u)},Bw=lt().browser,Pw=function(e,t){var n=t.container(),r=t.offset()
return Ln(n)?(n.insertData(r,e),S.some(Ss(n,r+e.length))):Wc(t).map((function(n){var r=At(e)
return(t.isAtEnd()?sn:un)(n,r),Ss(r.dom,e.length)}))},Dw=f(Pw,no),Lw=f(Pw," "),Iw=function(e,t){return function(n){return r=e,(!sp(o=n)&&(function(e,t){return r=t,hl(e.dom,r).isNone()||(n=t,gl(e.dom,n).isNone())||Xm(e,t)||Ym(e,t)||tp(e,t)||ep(e,t)
var n,r}(r,o)||ap(r,o)||up(r,o))?Dw:Lw)(t)
var r,o}},Mw=function(e){var t,n,r=ks.fromRangeStart(e.selection.getRng()),o=Rt(e.getBody())
if(e.selection.isCollapsed()){var i=f(ry,e),a=ks.fromRangeStart(e.selection.getRng())
return ub(i,e.getBody(),a).bind((n=o,function(e){return e.fold((function(e){return hl(n.dom,ks.before(e))}),(function(e){return vl(e)}),(function(e){return yl(e)}),(function(e){return gl(n.dom,ks.after(e))}))})).bind(Iw(o,r)).exists((t=e,function(e){return t.selection.setRng(e.toRange()),t.nodeChanged(),!0}))}return!1},Fw=function(e){var t,n=xb(e)
return(t=e).on("keyup compositionstart",f($b,t)),function(e,t){e.on("keydown",(function(n){var r,o,i,a
!1===n.isDefaultPrevented()&&(r=e,o=t,i=n,a=lt().os,LC([{keyCode:Pf.RIGHT,action:DC(kC,r,!0)},{keyCode:Pf.LEFT,action:DC(kC,r,!1)},{keyCode:Pf.UP,action:DC(_C,r,!1)},{keyCode:Pf.DOWN,action:DC(_C,r,!0)},{keyCode:Pf.RIGHT,action:DC(YC,r,!0)},{keyCode:Pf.LEFT,action:DC(YC,r,!1)},{keyCode:Pf.UP,action:DC(GC,r,!1)},{keyCode:Pf.DOWN,action:DC(GC,r,!0)},{keyCode:Pf.RIGHT,action:DC(IC,r,!0)},{keyCode:Pf.LEFT,action:DC(IC,r,!1)},{keyCode:Pf.UP,action:DC(MC,r,!1)},{keyCode:Pf.DOWN,action:DC(MC,r,!0)},{keyCode:Pf.RIGHT,action:DC(Cb,r,o,!0)},{keyCode:Pf.LEFT,action:DC(Cb,r,o,!1)},{keyCode:Pf.RIGHT,ctrlKey:!a.isOSX(),altKey:a.isOSX(),action:DC(Sb,r,o)},{keyCode:Pf.LEFT,ctrlKey:!a.isOSX(),altKey:a.isOSX(),action:DC(Nb,r,o)},{keyCode:Pf.UP,action:DC(PC,r,!1)},{keyCode:Pf.DOWN,action:DC(PC,r,!0)}],i).each((function(e){i.preventDefault()})))}))}(e,n),function(e,t){e.on("keydown",(function(n){var r,o,i
!1===n.isDefaultPrevented()&&(r=e,o=t,i=n,LC([{keyCode:Pf.BACKSPACE,action:DC(Ub,r,!1)},{keyCode:Pf.BACKSPACE,action:DC(Uy,r,!1)},{keyCode:Pf.DELETE,action:DC(Uy,r,!0)},{keyCode:Pf.BACKSPACE,action:DC(By,r,!1)},{keyCode:Pf.DELETE,action:DC(By,r,!0)},{keyCode:Pf.BACKSPACE,action:DC(_b,r,o,!1)},{keyCode:Pf.DELETE,action:DC(_b,r,o,!0)},{keyCode:Pf.BACKSPACE,action:DC(Jp,r,!1)},{keyCode:Pf.DELETE,action:DC(Jp,r,!0)},{keyCode:Pf.BACKSPACE,action:DC(zy,r,!1)},{keyCode:Pf.DELETE,action:DC(zy,r,!0)},{keyCode:Pf.BACKSPACE,action:DC(Bb,r,!1)},{keyCode:Pf.DELETE,action:DC(Bb,r,!0)},{keyCode:Pf.BACKSPACE,action:DC(xy,r,!1)},{keyCode:Pf.DELETE,action:DC(xy,r,!0)},{keyCode:Pf.BACKSPACE,action:DC(by,r,!1)},{keyCode:Pf.DELETE,action:DC(by,r,!0)},{keyCode:Pf.BACKSPACE,action:DC(Tb,r,!1)},{keyCode:Pf.DELETE,action:DC(Tb,r,!0)}],i).each((function(e){i.preventDefault()})))})),e.on("keyup",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,LC([{keyCode:Pf.BACKSPACE,action:DC(Fy,n)},{keyCode:Pf.DELETE,action:DC(Fy,n)}],r))}))}(e,n),function(e){e.on("keydown",(function(t){var n,r,o
t.keyCode===Pf.ENTER&&(n=e,(r=t).isDefaultPrevented()||(r.preventDefault(),(o=n.undoManager).typing&&(o.typing=!1,o.add()),n.undoManager.transact((function(){!1===n.selection.isCollapsed()&&n.execCommand("Delete"),Ow(n,r)}))))}))}(e),function(e){e.on("keydown",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,LC([{keyCode:Pf.SPACEBAR,action:DC(Mw,n)}],r).each((function(e){r.preventDefault()})))}))}(e),function(e){var t,n
t=e,n=_u((function(){t.composing||gp(t)}),0),Bw.isIE()&&(t.on("keypress",(function(e){n.throttle()})),t.on("remove",(function(e){n.cancel()}))),e.on("input",(function(t){!1===t.isComposing&&gp(e)}))}(e),function(e){e.on("keydown",(function(t){var n,r
!1===t.isDefaultPrevented()&&(n=e,r=t,LC([{keyCode:Pf.END,action:DC(AC,n,!0)},{keyCode:Pf.HOME,action:DC(AC,n,!1)},{keyCode:Pf.END,action:DC(FC,n,!0)},{keyCode:Pf.HOME,action:DC(FC,n,!1)}],r).each((function(e){r.preventDefault()})))}))}(e),n},Uw=(zw.prototype.nodeChanged=function(e){var t,n,r,o=this.editor.selection
this.editor.initialized&&o&&!this.editor.getParam("disable_nodechange")&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),(t=o.getStart(!0)||r).ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(t,r)||(t=r),n=[],this.editor.dom.getParent(t,(function(e){return e===r||void n.push(e)})),(e=e||{}).element=t,e.parents=n,this.editor.fire("NodeChange",e))},zw.prototype.isSameElementPath=function(e){var t,n=this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)
if(n.length===this.lastPath.length){for(t=n.length;0<=t&&n[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=n,!0}return this.lastPath=n,!1},zw)
function zw(e){var t
this.lastPath=[],this.editor=e
var n=this
"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(function(n){var r=e.selection.getRng(),o={startContainer:r.startContainer,startOffset:r.startOffset,endContainer:r.endContainer,endOffset:r.endOffset}
"nodechange"!==n.type&&Ff(o,t)||e.fire("SelectionChange"),t=o})),e.on("contextmenu",(function(){e.fire("SelectionChange")})),e.on("SelectionChange",(function(){var t=e.selection.getStart(!0)
!t||!bt.range&&e.selection.isCollapsed()||Cf(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(function(t){!t.isDefaultPrevented()&&Cf(e)&&("IMG"===e.selection.getNode().nodeName?Ur.setEditorTimeout(e,(function(){e.nodeChanged()})):e.nodeChanged())}))}var jw=function(e){return _n(e)&&Gr(Rt(e))},Hw=function(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.documentElement,o=n.defaultView
return{top:t.top+o.pageYOffset-r.clientTop,left:t.left+o.pageXOffset-r.clientLeft}},Vw=function(e,t){return n=(u=e).inline?Hw(u.getBody()):{left:0,top:0},a=(i=e).getBody(),r=i.inline?{left:a.scrollLeft,top:a.scrollTop}:{left:0,top:0},{pageX:(o=function(e,t){if(t.target.ownerDocument===e.getDoc())return{left:t.pageX,top:t.pageY}
var n,r,o,i,a,u=Hw(e.getContentAreaContainer()),s=(r=(n=e).getBody(),o=n.getDoc().documentElement,i={left:r.scrollLeft,top:r.scrollTop},a={left:r.scrollLeft||o.scrollLeft,top:r.scrollTop||o.scrollTop},n.inline?i:a)
return{left:t.pageX-u.left+s.left,top:t.pageY-u.top+s.top}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top}
var n,r,o,i,a,u},qw=Hn,$w=jn,Ww=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},Kw=function(e){e.on((function(e){Ww(e.ghost)})),e.clear()},Xw=function(e){var t,n,r,o=(t=bu(S.none()),{clear:function(){return t.set(S.none())},set:function(e){return t.set(S.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}}),i=du.DOM,a=document,u=function(e,t){return function(n){var r,o,i,a,u,s
0===n.button&&(r=Y(t.dom.getParents(n.target),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0
return!1}}(qw,$w)).getOr(null),u=t.getBody(),qw(s=r)&&s!==u&&(o=t.dom.getPos(r),i=t.getBody(),a=t.getDoc().documentElement,e.set({element:r,dragging:!1,screenX:n.screenX,screenY:n.screenY,maxX:(t.inline?i.scrollWidth:a.offsetWidth)-2,maxY:(t.inline?i.scrollHeight:a.offsetHeight)-2,relX:n.pageX-o.x,relY:n.pageY-o.y,width:r.offsetWidth,height:r.offsetHeight,ghost:function(e,t,n,r){var o=e.dom,i=t.cloneNode(!0)
o.setStyles(i,{width:n,height:r}),o.setAttrib(i,"data-mce-selected",null)
var a=o.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
return o.setStyles(a,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),o.setStyles(i,{margin:0,boxSizing:"border-box"}),a.appendChild(i),a}(t,r,r.offsetWidth,r.offsetHeight)})))}}(o,e),s=function(e,t){var n=Ur.throttle((function(e,n){t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0)
return t.on("remove",n.stop),function(r){return e.on((function(e){var o,i,a,u,s,c,l,f,d,m,p,g,h,v=Math.max(Math.abs(r.screenX-e.screenX),Math.abs(r.screenY-e.screenY))
if(!e.dragging&&10<v){if(t.fire("dragstart",{target:e.element}).isDefaultPrevented())return
e.dragging=!0,t.focus()}e.dragging&&(g=e,o={pageX:(h=Vw(t,r)).pageX-g.relX,pageY:h.pageY+5},m=e.ghost,p=t.getBody(),m.parentNode!==p&&p.appendChild(m),i=e.ghost,a=o,u=e.width,s=e.height,c=e.maxX,l=e.maxY,d=f=0,i.style.left=a.pageX+"px",i.style.top=a.pageY+"px",a.pageX+u>c&&(f=a.pageX+u-c),a.pageY+s>l&&(d=a.pageY+s-l),i.style.width=u-f+"px",i.style.height=s-d+"px",n(r.clientX,r.clientY))}))}}(o,e),c=function(e,t){return function(n){e.on((function(e){var r,o,i,a,u,s
e.dragging&&((a=3===(s=(i=t).selection.getSel().getRangeAt(0).startContainer).nodeType?s.parentNode:s)===(u=e.element)||i.dom.isChildOf(a,u)||qw(a)||((o=e.element.cloneNode(!0)).removeAttribute("data-mce-selected"),r=o,t.fire("drop",{clientX:n.clientX,clientY:n.clientY}).isDefaultPrevented()||t.undoManager.transact((function(){Ww(e.element),t.insertContent(t.dom.getOuterHTML(r)),t._selectionOverrides.hideFakeCaret()}))))})),Kw(e)}}(o,e),l=(n=o,function(){n.on((function(e){e.dragging&&r.fire("dragend")})),Kw(n)});(r=e).on("mousedown",u),e.on("mousemove",s),e.on("mouseup",c),i.bind(a,"mousemove",s),i.bind(a,"mouseup",l),e.on("remove",(function(){i.unbind(a,"mousemove",s),i.unbind(a,"mouseup",l)}))},Yw=jn,Gw=Hn,Jw=function(e,t){return Of(e.getBody(),t)},Qw=function(e){var t,n=e.selection,r=e.dom,o=r.isBlock,i=e.getBody(),a=Sc(e,i,o,(function(){return Hd(e)})),u="sel-"+r.uniqueId(),s="data-mce-selected",c=function(e){return e!==i&&(Gw(e)||qn(e))&&r.isChildOf(e,i)},l=function(e){e&&n.setRng(e)},d=n.getRng,m=function(t,r,o,i){return void 0===i&&(i=!0),e.fire("ShowCaret",{target:r,direction:t,before:o}).isDefaultPrevented()?null:(i&&n.scrollIntoView(r,-1===t),a.show(o,r))},p=function(e){return lo(e)||go(e)||ho(e)},g=function(e){return p(e.startContainer)||p(e.endContainer)},h=function(o){var i=o.cloneNode(!0),a=e.fire("ObjectSelected",{target:o,targetClone:i})
if(a.isDefaultPrevented())return null
var c=function(t,o,i){var a=e.$,s=kr(Rt(e.getBody()),"#"+u).fold((function(){return a([])}),(function(e){return a([e.dom])}))
0===s.length&&(s=a('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",u)).appendTo(e.getBody())
var c=r.createRng()
o===i&&bt.ie?(s.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(o),c.setStartAfter(s[0].firstChild.firstChild),c.setEndAfter(o)):(s.empty().append(no).append(o).append(no),c.setStart(s[0].firstChild,1),c.setEnd(s[0].lastChild,0)),s.css({top:r.getPos(t,e.getBody()).y}),s[0].focus()
var l=n.getSel()
return l.removeAllRanges(),l.addRange(c),c}(o,a.targetClone,i),l=Rt(o)
return q(Du(Rt(e.getBody()),"*[data-mce-selected]"),(function(e){Pt(l,e)||Jn(e,s)})),r.getAttrib(o,s)||o.setAttribute(s,"1"),t=o,b(),c},v=function(e,t){if(!e)return null
if(e.collapsed){if(!g(e)){var n=t?1:-1,o=$c(n,i,e),a=o.getNode(!t)
if(kc(a))return m(n,a,!!t&&!o.isAtEnd(),!1)
var u=o.getNode(t)
if(kc(u))return m(n,u,!t&&!o.isAtEnd(),!1)}return null}var s=e.startContainer,l=e.startOffset,f=e.endOffset
if(3===s.nodeType&&0===l&&Gw(s.parentNode)&&(s=s.parentNode,l=r.nodeIndex(s),s=s.parentNode),1!==s.nodeType)return null
if(f===l+1&&s===e.endContainer){var d=s.childNodes[l]
if(c(d))return h(d)}return null},y=function(){t&&t.removeAttribute(s),kr(Rt(e.getBody()),"#"+u).each(mn),t=null},b=function(){a.hide()}
return bt.ceFalse&&function(){e.on("mouseup",(function(t){var n=d()
n.collapsed&&Av(e,t.clientX,t.clientY)&&_y(e,n,!1).each(l)})),e.on("click",(function(t){var o=Jw(e,t.target)
o&&(Gw(o)&&(t.preventDefault(),e.focus()),Yw(o)&&r.isChildOf(o,n.getNode())&&y())})),e.on("blur NewBlock",y),e.on("ResizeWindow FullscreenStateChanged",a.reposition)
var s,p,h,C=function(t,n){var i,a,u=r.getParent(t,o),s=r.getParent(n,o)
return!(!u||t===s||!r.isChildOf(u,s)||!1!==Gw(Jw(e,u)))||u&&(i=u,a=s,!(r.getParent(i,o)===r.getParent(a,o)))&&function(e){var t=ul(e)
if(!e.firstChild)return!1
var n,r=ks.before(e.firstChild),o=t.next(r)
return o&&!(Fm(n=o)||Um(n)||Dm(n)||Lm(n))}(u)}
e.on("tap",(function(t){var n=t.target,r=Jw(e,n)
Gw(r)?(t.preventDefault(),ky(e,r).each(v)):c(n)&&ky(e,n).each(v)}),!0),e.on("mousedown",(function(t){var o,a,u,s=t.target
s!==i&&"HTML"!==s.nodeName&&!r.isChildOf(s,i)||!1===Av(e,t.clientX,t.clientY)||((o=Jw(e,s))?Gw(o)?(t.preventDefault(),ky(e,o).each(v)):(y(),Yw(o)&&t.shiftKey||Bf(t.clientX,t.clientY,n.getRng())||(b(),n.placeCaretAt(t.clientX,t.clientY))):c(s)?ky(e,s).each(v):!1===kc(s)&&(y(),b(),(a=function(e,t,n){var r,o,i=oC(W(oe(e.getElementsByTagName("*")),kc)),a=W(i,f(gC,n))
if(u=hC(a,t)){var u,s=!Bn(u.node)&&!qn(u.node)
if((u=hC(function(e,t,n){void 0===n&&(n=!0)
var r=[],o=function(e,n){var o=W(oC([n]),(function(n){return!e(n,t)}))
return r=r.concat(o),0===o.length}
return r.push(t),vC(Wb.Up,e,f(o,Zu),t.node,n),vC(Wb.Down,e,f(o,es),t.node,n),r}(e,u,s),t))&&kc(u.node))return o=t,{node:(r=u).node,before:dC(r,o)<mC(r,o)}}return null}(i,t.clientX,t.clientY))&&(C(s,a.node)||(t.preventDefault(),u=m(1,a.node,a.before,!1),e.getBody().focus(),l(u)))))})),e.on("keypress",(function(e){Pf.modifierPressed(e)||Gw(n.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(function(e){var n=e.range
if(t){if(!t.parentNode)return void(t=null);(n=n.cloneRange()).selectNode(t),e.range=n}})),e.on("SetSelectionRange",(function(t){t.range=function(t){var n=e.schema.getShortEndedElements(),o=r.createRng(),i=t.startContainer,a=t.startOffset,u=t.endContainer,s=t.endOffset
return ge(n,i.nodeName.toLowerCase())?0===a?o.setStartBefore(i):o.setStartAfter(i):o.setStart(i,a),ge(n,u.nodeName.toLowerCase())?0===s?o.setEndBefore(u):o.setEndAfter(u):o.setEnd(u,s),o}(t.range)
var n=v(t.range,t.forward)
n&&(t.range=n)})),e.on("AfterSetSelectionRange",(function(e){var t,n=e.range,o=n.startContainer.parentNode
g(n)||"mcepastebin"===o.id||b(),t=o,r.hasClass(t,"mce-offscreen-selection")||y()})),e.on("copy",(function(e){var t,n,o=e.clipboardData
e.isDefaultPrevented()||!e.clipboardData||bt.ie||(t=(n=r.get(u))?n.getElementsByTagName("*")[0]:n)&&(e.preventDefault(),o.clearData(),o.setData("text/html",t.outerHTML),o.setData("text/plain",t.outerText||t.innerText))})),function(e){var t,n,r,o,i
Xw(e),(t=e).on("drop",(function(e){var n=void 0!==e.clientX?t.getDoc().elementFromPoint(e.clientX,e.clientY):null
!qw(n)&&"false"!==t.dom.getContentEditableParent(n)||e.preventDefault()})),e.getParam("block_unsupported_drop",!0,"boolean")&&(r=function(e){var t
e.defaultPrevented||(t=e.dataTransfer)&&(j(t.types,"Files")||0<t.files.length)&&(e.preventDefault(),"drop"===e.type&&Dv(n,"Dropped file type is not supported"))},o=function(e){Md(n,e.target)&&r(e)},i=function(){var e=du.DOM,t=n.dom,i=document,a=n.inline?n.getBody():n.getDoc(),u=["drop","dragover"]
q(u,(function(n){e.bind(i,n,o),t.bind(a,n,r)})),n.on("remove",(function(){q(u,(function(n){e.unbind(i,n,o),t.unbind(a,n,r)}))}))},(n=e).on("init",(function(){Ur.setEditorTimeout(n,i,0)})))}(e),p=_u((function(){var e,t
s.removed||!s.getBody().contains(document.activeElement)||(e=s.selection.getRng()).collapsed&&(t=Ay(s,e,!1),s.selection.setRng(t))}),0),(s=e).on("focus",(function(){p.throttle()})),s.on("blur",(function(){p.cancel()})),(h=e).on("init",(function(){h.on("focusin",(function(e){var t,n,r=e.target
qn(r)&&(t=Of(h.getBody(),r),n=Hn(t)?t:r,h.selection.getNode()!==n&&ky(h,n).each((function(e){return h.selection.setRng(e)})))}))}))}(),{showCaret:m,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(vo(e),l(d()),n.scrollIntoView(e))},hideFakeCaret:b,destroy:function(){a.destroy(),t=null}}},Zw=du.DOM,ex=function(e){return me(e,(function(e){return!1===B(e)}))},tx=function(e){var t,n=e.settings,r=e.editorUpload.blobCache
return ex({allow_conditional_comments:n.allow_conditional_comments,allow_html_data_urls:n.allow_html_data_urls,allow_svg_data_urls:n.allow_svg_data_urls,allow_html_in_named_anchor:n.allow_html_in_named_anchor,allow_script_urls:n.allow_script_urls,allow_unsafe_link_target:n.allow_unsafe_link_target,convert_fonts_to_spans:n.convert_fonts_to_spans,fix_list_elements:n.fix_list_elements,font_size_legacy_values:n.font_size_legacy_values,forced_root_block:n.forced_root_block,forced_root_block_attrs:n.forced_root_block_attrs,padd_empty_with_br:n.padd_empty_with_br,preserve_cdata:n.preserve_cdata,remove_trailing_brs:n.remove_trailing_brs,inline_styles:n.inline_styles,root_name:(t=e).inline?t.getElement().nodeName.toLowerCase():void 0,validate:!0,blob_cache:r,images_dataimg_filter:n.images_dataimg_filter})},nx=function(e){var t
e.bindPendingEventDelegates(),e.initialized=!0,e.fire("Init"),e.focus(!0),function(e){var t=e.dom.getRoot()
e.inline||Cf(e)&&e.selection.getStart(!0)!==t||vl(t).each((function(t){var n,r,o,i,a=t.getNode(),u=Bn(a)?vl(a).getOr(t):t
bt.browser.isIE()?(n=e,r=u.toRange(),o=Rt(n.getBody()),i=(Rd(n)?S.from(r):S.none()).map(Td).filter(Ad(o)),n.bookmark=i.isSome()?i:n.bookmark):e.selection.setRng(u.toRange())}))}(e),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),(t=e).settings.auto_focus&&Ur.setEditorTimeout(t,(function(){var e=!0===t.settings.auto_focus?t:t.editorManager.get(t.settings.auto_focus)
e.destroyed||e.focus()}),100)},rx=function(e,t){var n=e.settings,r=e.getDoc(),o=e.getBody()
n.browser_spellcheck||n.gecko_spellcheck||(r.body.spellcheck=!1,Zw.setAttrib(o,"spellcheck","false")),e.quirks=function(e){var t,n,r,o=Nt.each,i=Pf.BACKSPACE,a=Pf.DELETE,u=e.dom,s=e.selection,c=e.parser,l=bt.gecko,f=bt.ie,d=bt.webkit,m="data:text/mce-internal,",p=f?"Text":"URL",g=function(t,r){try{e.getDoc().execCommand(t,!1,r)}catch(n){}},h=function(e){return e.isDefaultPrevented()},v=function(){e.shortcuts.add("meta+a",null,"SelectAll")},y=function(){e.on("keydown",(function(e){if(!h(e)&&e.keyCode===i&&s.isCollapsed()&&0===s.getRng().startOffset){var t=s.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))},b=function(){e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(function(t){var n
if("HTML"===t.target.nodeName){if(11<bt.ie)return void e.getBody().focus()
n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged()}})))}
return e.on("keydown",(function(t){var n
if(!h(t)&&t.keyCode===Pf.BACKSPACE){var r=(n=s.getRng()).startContainer,o=n.startOffset,i=u.getRoot(),a=r
if(n.collapsed&&0===o){for(;a&&a.parentNode&&a.parentNode.firstChild===a&&a.parentNode!==i;)a=a.parentNode
"BLOCKQUOTE"===a.tagName&&(e.formatter.toggle("blockquote",null,a),(n=u.createRng()).setStart(r,0),n.setEnd(r,0),s.setRng(n))}}})),t=function(e){var t=u.create("body"),n=e.cloneContents()
return t.appendChild(n),s.serializer.serialize(t,{format:"html"})},e.on("keydown",(function(n){var r,o,s,c,l,f=n.keyCode
if(!h(n)&&(f===a||f===i)){if(r=e.selection.isCollapsed(),o=e.getBody(),r&&!u.isEmpty(o))return
if(!r&&(s=e.selection.getRng(),c=t(s),(l=u.createRng()).selectNode(e.getBody()),c!==t(l)))return
n.preventDefault(),e.setContent(""),o.firstChild&&u.isBlock(o.firstChild)?e.selection.setCursorLocation(o.firstChild,0):e.selection.setCursorLocation(o,0),e.nodeChanged()}})),bt.windowsPhone||e.on("keyup focusin mouseup",(function(e){Pf.modifierPressed(e)||s.normalize()}),!0),d&&(e.inline||u.bind(e.getDoc(),"mousedown mouseup",(function(t){var n
if(t.target===e.getDoc().documentElement)if(n=s.getRng(),e.getBody().focus(),"mousedown"===t.type){if(lo(n.startContainer))return
s.placeCaretAt(t.clientX,t.clientY)}else s.setRng(n)})),e.on("click",(function(t){var n=t.target;/^(IMG|HR)$/.test(n.nodeName)&&"false"!==u.getContentEditableParent(n)&&(t.preventDefault(),e.selection.select(n),e.nodeChanged()),"A"===n.nodeName&&u.hasClass(n,"mce-item-anchor")&&(t.preventDefault(),s.select(n))})),Js(e)&&e.on("init",(function(){g("DefaultParagraphSeparator",Js(e))})),e.on("init",(function(){e.dom.bind(e.getBody(),"submit",(function(e){e.preventDefault()}))})),y(),c.addNodeFilter("br",(function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),bt.iOS?(e.inline||e.on("keydown",(function(){document.activeElement===document.body&&e.getWin().focus()})),b(),e.on("click",(function(e){var t=e.target
do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):v()),11<=bt.ie&&(b(),y()),bt.ie&&(v(),g("AutoUrlDetect",!1),e.on("dragstart",(function(t){var n,r,o;(n=t).dataTransfer&&(e.selection.isCollapsed()&&"IMG"===n.target.tagName&&s.select(n.target),0<(r=e.selection.getContent()).length&&(o=m+escape(e.id)+","+escape(r),n.dataTransfer.setData(p,o)))})),e.on("drop",(function(t){var n,r,o,i,a
h(t)||(n=(i=t).dataTransfer&&(a=i.dataTransfer.getData(p))&&0<=a.indexOf(m)?(a=a.substr(m.length).split(","),{id:unescape(a[0]),html:unescape(a[1])}):null)&&n.id!==e.id&&(t.preventDefault(),r=Mf(t.x,t.y,e.getDoc()),s.setRng(r),o=n.html,e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",!1,{content:o,internal:!0}):e.execCommand("mceInsertContent",!1,o))}))),l&&(e.on("keydown",(function(t){if(!h(t)&&t.keyCode===i){if(!e.getBody().getElementsByTagName("hr").length)return
if(s.isCollapsed()&&0===s.getRng().startOffset){var n=s.getNode(),r=n.previousSibling
if("HR"===n.nodeName)return u.remove(n),void t.preventDefault()
r&&r.nodeName&&"hr"===r.nodeName.toLowerCase()&&(u.remove(r),t.preventDefault())}}})),Range.prototype.getClientRects||e.on("mousedown",(function(t){var n
h(t)||"HTML"!==t.target.nodeName||((n=e.getBody()).blur(),Ur.setEditorTimeout(e,(function(){n.focus()})))})),n=function(){var t=u.getAttribs(s.getStart().cloneNode(!1))
return function(){var n=s.getStart()
n!==e.getBody()&&(u.setAttrib(n,"style",null),o(t,(function(e){n.setAttributeNode(e.cloneNode(!0))})))}},r=function(){return!s.isCollapsed()&&u.getParent(s.getStart(),u.isBlock)!==u.getParent(s.getEnd(),u.isBlock)},e.on("keypress",(function(t){var o
if(!h(t)&&(8===t.keyCode||46===t.keyCode)&&r())return o=n(),e.getDoc().execCommand("delete",!1,null),o(),t.preventDefault(),!1})),u.bind(e.getDoc(),"cut",(function(t){var o
!h(t)&&r()&&(o=n(),Ur.setEditorTimeout(e,(function(){o()})))})),e.getParam("readonly")||e.on("BeforeExecCommand mousedown",(function(){g("StyleWithCSS",!1),g("enableInlineTableEditing",!1),oc(e)||g("enableObjectResizing",!1)})),e.on("SetContent ExecCommand",(function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(u.select("a"),(function(e){var t=e.parentNode,n=u.getRoot()
if(t.lastChild===e){for(;t&&!u.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return
t=t.parentNode}u.add(t,"br",{"data-mce-bogus":1})}}))})),e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),bt.mac&&e.on("keydown",(function(t){!Pf.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))})),y()),{refreshContentEditable:function(){},isHidden:function(){if(!l||e.removed)return!1
var t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}}}(e),e.fire("PostRender")
var i,a,u,s,c,l,f,d,m,p,g,h=e.getParam("directionality",Su.isRtl()?"rtl":void 0)
void 0!==h&&(o.dir=h),n.protect&&e.on("BeforeSetContent",(function(e){Nt.each(n.protect,(function(t){e.content=e.content.replace(t,(function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"}))}))})),e.on("SetContent",(function(){e.addVisual(e.getBody())})),!1===t&&e.load({initial:!0,format:"html"}),e.startContent=e.getContent({format:"raw"}),e.on("compositionstart compositionend",(function(t){e.composing="compositionstart"===t.type})),0<e.contentStyles.length&&(i="",Nt.each(e.contentStyles,(function(e){i+=e+"\r\n"})),e.dom.addStyle(i)),u=(a=e).contentCSS,l=function(){a.on("remove",(function(){return c.unloadAll(u)})),nx(a)},(c=(s=a).inline?s.ui.styleSheetLoader:s.dom.styleSheetLoader).loadAll(u,l,l),n.content_style&&(f=e,d=n.content_style,m=Rt(f.getBody()),p=on(rn(m)),g=_t("style"),Kn(g,"type","text/css"),ln(g,At(d)),ln(p,g),f.on("remove",(function(){mn(g)})))},ox=function(e,t){var n=e.settings,r=e.getElement(),o=e.getDoc()
n.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline||(o.open(),o.write(e.iframeHTML),o.close()),e.inline&&(Zw.addClass(r,"mce-content-body"),e.contentDocument=o=document,e.contentWindow=window,e.bodyElement=r,e.contentAreaContainer=r)
var i,a,u,s,c=e.getBody()
c.disabled=!0,e.readonly=!!n.readonly,e.readonly||(e.inline&&"static"===Zw.getStyle(c,"position",!0)&&(c.style.position="relative"),c.contentEditable=e.getParam("content_editable_state",!0)),c.disabled=!1,e.editorUpload=Hv(e),e.schema=si(n),e.dom=du(o,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,hex_colors:n.force_hex_style_colors,update_styles:!0,root_element:e.inline?e.getBody():null,collect:function(){return e.inline},schema:e.schema,contentCssCors:e.getParam("content_css_cors",!1,"boolean"),referrerPolicy:tc(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}}),e.parser=((a=ev(tx(i=e),i.schema)).addAttributeFilter("src,href,style,tabindex",(function(e,t){for(var n,r,o=e.length,a=i.dom,u="data-mce-"+t;o--;)if((r=(n=e[o]).attr(t))&&!n.attr(u)){if(0===r.indexOf("data:")||0===r.indexOf("blob:"))continue
"style"===t?((r=a.serializeStyle(a.parseStyle(r),n.name)).length||(r=null),n.attr(u,r),n.attr(t,r)):"tabindex"===t?(n.attr(u,r),n.attr(t,null)):n.attr(u,i.convertURL(r,t,n.name))}})),a.addNodeFilter("script",(function(e){for(var t=e.length;t--;){var n=e[t],r=n.attr("type")||"no/type"
0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}})),i.settings.preserve_cdata&&a.addNodeFilter("#cdata",(function(e){for(var t=e.length;t--;){var n=e[t]
n.type=8,n.name="#comment",n.value="[CDATA["+i.dom.encode(n.value)+"]]"}})),a.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(function(e){for(var t=e.length,n=i.schema.getNonEmptyElements();t--;){var r=e[t]
r.isEmpty(n)&&0===r.getAll("br").length&&(r.append(new cm("br",1)).shortEnded=!0)}})),a),e.serializer=rv((s=(u=e).settings,Ee(Ee({},tx(u)),ex({url_converter:s.url_converter,url_converter_scope:s.url_converter_scope,element_format:s.element_format,entities:s.entities,entity_encoding:s.entity_encoding,indent:s.indent,indent_after:s.indent_after,indent_before:s.indent_before,block_elements:s.block_elements,boolean_attributes:s.boolean_attributes,custom_elements:s.custom_elements,extended_valid_elements:s.extended_valid_elements,invalid_elements:s.invalid_elements,invalid_styles:s.invalid_styles,move_caret_before_on_enter_elements:s.move_caret_before_on_enter_elements,non_empty_elements:s.non_empty_elements,schema:s.schema,self_closing_elements:s.self_closing_elements,short_ended_elements:s.short_ended_elements,special:s.special,text_block_elements:s.text_block_elements,text_inline_elements:s.text_inline_elements,valid_children:s.valid_children,valid_classes:s.valid_classes,valid_elements:s.valid_elements,valid_styles:s.valid_styles,verify_html:s.verify_html,whitespace_elements:s.whitespace_elements}))),e),e.selection=Ih(e.dom,e.getWin(),e.serializer,e),e.annotator=_f(e),e.formatter=Gv(e),e.undoManager=Jv(e),e._nodeChangeDispatcher=new Uw(e),e._selectionOverrides=Qw(e),function(e){var t=bu(S.none()),n=bu(!1),r=Au((function(t){e.fire("longpress",Ee(Ee({},t),{type:"longpress"})),n.set(!0)}),400)
e.on("touchstart",(function(e){jb(e).each((function(o){r.cancel()
var i={x:o.clientX,y:o.clientY,target:e.target}
r.throttle(e),n.set(!1),t.set(S.some(i))}))}),!0),e.on("touchmove",(function(o){r.cancel(),jb(o).each((function(r){t.get().each((function(o){var i,a,u,s
i=r,a=o,u=Math.abs(i.clientX-a.x),s=Math.abs(i.clientY-a.y),(5<u||5<s)&&(t.set(S.none()),n.set(!1),e.fire("longpresscancel"))}))}))}),!0),e.on("touchend touchcancel",(function(o){r.cancel(),"touchcancel"!==o.type&&t.get().filter((function(e){return e.target.isEqualNode(o.target)})).each((function(){n.get()?o.preventDefault():e.fire("tap",Ee(Ee({},o),{type:"tap"}))}))}),!0)}(e),function(e){var t,n;(t=e).on("click",(function(e){t.dom.getParent(e.target,"details")&&e.preventDefault()})),(n=e).parser.addNodeFilter("details",(function(e){q(e,(function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),n.serializer.addNodeFilter("details",(function(e){q(e,(function(e){var t=e.attr("data-mce-open")
e.attr("open",_(t)?t:null),e.attr("data-mce-open",null)}))}))}(e),Ah(e)||function(e){e.on("click",(function(t){var n,r,o,i,a
3<=t.detail&&(o=(n=e).selection.getRng(),i=Ss.fromRangeStart(o),a=Ss.fromRangeEnd(o),Ss.isElementPosition(i)&&(r=i.container(),jw(r)&&vl(r).each((function(e){return o.setStart(e.container(),e.offset())}))),Ss.isElementPosition(a)&&(r=i.container(),jw(r)&&yl(r).each((function(e){return o.setEnd(e.container(),e.offset())}))),n.selection.setRng(Qp(o)))}))}(e)
var l,d,m,p,g=Ah(l=e)?bu(null):Fw(l);(function(e,t){e.addCommand("delete",(function(){var n,r
r=t,Ub(n=e)||Uy(n,!1)||By(n,!1)||_b(n,r,!1)||by(n,!1)||Jp(n)||zy(n,!1)||Bb(n,!1)||xy(n)||Tb(n,!1)||(zb(n,"Delete"),cy(n))})),e.addCommand("forwardDelete",(function(){var n,r
r=t,Uy(n=e,!0)||By(n,!0)||_b(n,r,!0)||by(n,!0)||Jp(n)||zy(n,!0)||Bb(n,!0)||xy(n)||Tb(n,!0)||zb(n,"ForwardDelete")}))})(e,g),Js(d=e)&&d.on("NodeChange",f(Vb,d)),function(e){var t,n=e.dom,r=Js(e),o=(t=e).getParam("placeholder",Xs.getAttrib(t.getElement(),"placeholder"),"string"),i=function(t,a){var u,s,c,l
!function(e){if(ey(e)){var t=e.keyCode
return!ty(e)&&(Pf.metaKeyPressed(e)||e.altKey||112<=t&&t<=123||j(Qv,t))}return!1}(t)&&(u=e.getBody(),s=!(ey(c=t)&&!(ty(c)||"keyup"===c.type&&229===c.keyCode))&&function(e,t,n){if(Lo(Rt(t),!1)){var r=""===n,o=t.firstElementChild
return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&(r?!e.isBlock(o):n===o.nodeName.toLowerCase())}return!1}(n,u,r),""!==n.getAttrib(u,Zv)===s&&!a||(n.setAttrib(u,Zv,s?o:null),n.setAttrib(u,"aria-placeholder",s?o:null),l=s,e.fire("PlaceholderToggle",{state:l}),e.on(s?"keydown":"keyup",i),e.off(s?"keyup":"keydown",i)))}
o&&e.on("init",(function(t){i(t,!0),e.on("change SetContent ExecCommand",i),e.on("paste",(function(t){return Ur.setEditorTimeout(e,(function(){return i(t)}))}))}))}(e),e.fire("PreInit"),pe((p=m=e).plugins,"rtc").fold((function(){return p.rtcInstance=kh(m),S.none()}),(function(e){return S.some(e.setup().then((function(e){return p.rtcInstance=_h(m,e),e.isRemote})))})).fold((function(){rx(e,!1)}),(function(t){e.setProgressState(!0),t.then((function(t){e.setProgressState(!1),rx(e,t)}))}))},ix=du.DOM,ax=function(e,t){var n,r,o,i,a=e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),u=(n=e.id,r=a,t.height,o=e.getParam("iframe_attrs",{}),i=_t("iframe"),Xn(i,o),Xn(i,{id:n+"_ifr",frameBorder:"0",allowTransparency:"true",title:r}),Ou(i,"tox-edit-area__iframe"),i.dom)
u.onload=function(){u.onload=null,e.fire("load")}
var s=function(e,t){if(document.domain!==window.location.hostname&&bt.browser.isIE()){var n=jv("mce")
e[n]=function(){ox(e)}
var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()"
return ix.setAttrib(t,"src",r),!0}return!1}(e,u)
return e.contentAreaContainer=t.iframeContainer,e.iframeElement=u,e.iframeHTML=function(e){var t=e.getParam("doctype","<!DOCTYPE html>")+"<html><head>"
e.getParam("document_base_url","")!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
var n=Ys(e,"body_id","tinymce"),r=Ys(e,"body_class","")
return Gs(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+Gs(e)+'" />'),t+'</head><body id="'+n+'" class="mce-content-body '+r+'" data-id="'+e.id+'"><br></body></html>'}(e),ix.add(t.iframeContainer,u),s},ux=du.DOM,sx=function(e,t,n){var r=Tv.get(n),o=Tv.urls[n]||e.documentBaseUrl.replace(/\/$/,"")
if(n=Nt.trim(n),r&&-1===Nt.inArray(t,n)){if(Nt.each(Tv.dependencies(n),(function(n){sx(e,t,n)})),e.plugins[n])return
try{var i=new r(e,o,e.$);(e.plugins[n]=i).init&&(i.init(e,o),t.push(n))}catch(rN){!function(e,t,n){var r=Su.translate(["Failed to initialize plugin: {0}",t])
Fv(r,n),Dv(e,r)}(e,n,rN)}}},cx=function(e){return e.replace(/^\-/,"")},lx=function(e){return{editorContainer:e,iframeContainer:e,api:{}}},fx=function(e){var t,n,r,o=e.getElement()
return e.orgDisplay=o.style.display,_(ac(e))?e.theme.renderUI():L(ac(e))?(n=(t=e).getElement(),(r=ac(t)(t,n)).editorContainer.nodeType&&(r.editorContainer.id=r.editorContainer.id||t.id+"_parent"),r.iframeContainer&&r.iframeContainer.nodeType&&(r.iframeContainer.id=r.iframeContainer.id||t.id+"_iframecontainer"),r.height=r.iframeHeight?r.iframeHeight:n.offsetHeight,r):function(e){var t,n,r=e.getElement()
return e.inline?lx(null):(t=r,n=ux.create("div"),ux.insertAfter(n,t),lx(n))}(e)},dx=function(e){var t,n,r,o,i,a,s,c,l
e.fire("ScriptsLoaded"),t=e,n=Nt.trim(ec(t)),r=t.ui.registry.getAll().icons,o=Ee(Ee({},wv.get("default").icons),wv.get(n).icons),ue(o,(function(e,n){ge(r,n)||t.ui.registry.addIcon(n,e)})),s=ac(i=e),_(s)?(i.settings.theme=cx(s),a=Ov.get(s),i.theme=new a(i,Ov.urls[s]),i.theme.init&&i.theme.init(i,Ov.urls[s]||i.documentBaseUrl.replace(/\/$/,""),i.$)):i.theme={},c=e,l=[],Nt.each(sc(c).split(/[ ,]/),(function(e){sx(c,l,cx(e))}))
var f,d,m,p=fx(e)
f=e,d=S.from(p.api).getOr({}),m={show:S.from(d.show).getOr(u),hide:S.from(d.hide).getOr(u),disable:S.from(d.disable).getOr(u),isDisabled:S.from(d.isDisabled).getOr(y),enable:function(){f.mode.isReadOnly()||S.from(d.enable).map(v)}},f.ui=Ee(Ee({},f.ui),m)
var g,h,b,C,w={editorContainer:p.editorContainer,iframeContainer:p.iframeContainer}
return e.editorContainer=w.editorContainer?w.editorContainer:null,(g=e).contentCSS=g.contentCSS.concat(function(e){var t,n,r=(n=(t=e).getParam("content_css"),_(n)?V(n.split(","),je):R(n)?n:!1===n||t.inline?[]:["default"]),o=e.editorManager.baseURL+"/skins/content",i="content"+e.editorManager.suffix+".css",a=!0===e.inline
return V(r,(function(t){return/^[a-z0-9\-]+$/i.test(t)&&!a?o+"/"+t+"/"+i:e.documentBaseURI.toAbsolute(t)}))}(g)),e.inline?ox(e):(C=ax(h=e,b=w),b.editorContainer&&(ix.get(b.editorContainer).style.display=h.orgDisplay,h.hidden=ix.isHidden(b.editorContainer)),h.getElement().style.display="none",ix.setAttrib(h.id,"aria-hidden","true"),void(C||ox(h)))},mx=du.DOM,px=function(e){return"-"===e.charAt(0)},gx=function(e,t,n){return S.from(t).filter((function(e){return 0<e.length&&!wv.has(e)})).map((function(t){return{url:e.editorManager.baseURL+"/icons/"+t+"/icons"+n+".js",name:S.some(t)}}))},hx=function(e,t){var n,r,o,i,a,s,c=hu.ScriptLoader
n=c,o=t,i=function(){var n,r;(function(e,t){var n,r=nc(t),o=t.getParam("language_url","","string")
!1===Su.hasCode(r)&&"en"!==r&&(n=""!==o?o:t.editorManager.baseURL+"/langs/"+r+".js",e.add(n,u,void 0,(function(){Lv(t,"LanguageLoadError",Iv("language",n,r))})))})(c,e),function(e,t,n){var r,o=gx(t,"default",n),i=(r=t,S.from(r.getParam("icons_url","","string")).filter((function(e){return 0<e.length})).map((function(e){return{url:e,name:S.none()}})).orThunk((function(){return gx(t,ec(t),"")})))
q(function(e){for(var t=[],n=function(e){t.push(e)},r=0;r<e.length;r++)e[r].each(n)
return t}([o,i]),(function(n){e.add(n.url,u,void 0,(function(){var e,r,o
e=t,r=n.url,o=n.name.getOrUndefined(),Lv(e,"IconsLoadError",Iv("icons",r,o))}))}))}(c,e,t),n=e,r=t,Nt.each(n.getParam("external_plugins"),(function(e,t){Tv.load(t,e,u,void 0,(function(){Mv(n,e,t)})),n.settings.plugins+=" "+t})),Nt.each(sc(n).split(/[ ,]/),(function(e){var t,o;(e=Nt.trim(e))&&!Tv.urls[e]&&(px(e)?(e=e.substr(1,e.length),t=Tv.dependencies(e),Nt.each(t,(function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+r+".js"},o=Tv.createUrl(t,e)
Tv.load(o.resource,o,u,void 0,(function(){Mv(n,o.prefix+o.resource+o.suffix,o.resource)}))}))):(o={prefix:"plugins/",resource:e,suffix:"/plugin"+r+".js"},Tv.load(e,o,u,void 0,(function(){Mv(n,o.prefix+o.resource+o.suffix,e)}))))})),c.loadQueue((function(){e.removed||dx(e)}),e,(function(){e.removed||dx(e)}))},s=ac(r=e),_(s)?(px(s)||Ov.urls.hasOwnProperty(s)||((a=r.getParam("theme_url"))?Ov.load(s,r.documentBaseURI.toAbsolute(a)):Ov.load(s,"themes/"+s+"/theme"+o+".js")),n.loadQueue((function(){Ov.waitFor(s,i)}))):i()},vx={"font-size":"size","font-family":"face"},yx=function(e){return function(t,n){return S.from(n).map(Rt).filter(Ft).bind((function(n){return function(e,t,n){return Jd(Rt(n),(function(t){return er(n=t,e).orThunk((function(){return"font"===Lt(n)?pe(vx,e).bind((function(e){return Gn(n,e)})):S.none()}))
var n}),(function(e){return Pt(Rt(t),e)}))}(e,t,n.dom).or((r=e,o=n.dom,S.from(du.DOM.getStyle(o,r,!0))))
var r,o})).getOr("")}},bx=yx("font-size"),Cx=s((function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}),yx("font-family")),wx=function(e){return vl(e.getBody()).map((function(e){var t=e.container()
return Ln(t)?t.parentNode:t}))},xx=function(e,t){return n=e,S.from(n.selection.getRng()).bind((function(e){var t=n.getBody()
return e.startContainer===t&&0===e.startOffset?S.none():S.from(n.selection.getStart(!0))})).orThunk(f(wx,e)).map(Rt).filter(Ft).map(t)
var n},Sx=function(e,t){if(/^[0-9.]+$/.test(t)){var n=parseInt(t,10)
if(1<=n&&n<=7){var r=(a=e,Nt.explode(a.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large"))),o=(i=e,Nt.explode(i.getParam("font_size_classes","")))
return o?o[n-1]||t:r[n-1]||t}return t}return t
var i,a},Nx=Nt.each,Ex=Nt.map,kx=Nt.inArray,_x=(Ax.prototype.execCommand=function(e,t,n,r){var i,a,u=!1,s=this
if(!s.editor.removed){if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||r&&r.skip_focus?(a=s.editor,Pd(a).each((function(e){return a.selection.setRng(e)}))):s.editor.focus(),(r=s.editor.fire("BeforeExecCommand",{command:e,ui:t,value:n})).isDefaultPrevented())return!1
var c=e.toLowerCase()
if(i=s.commands.exec[c])return i(c,t,n),s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
if(Nx(this.editor.plugins,(function(r){if(r.execCommand&&r.execCommand(e,t,n))return s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!(u=!0)})),u)return u
if(s.editor.theme&&s.editor.theme.execCommand&&s.editor.theme.execCommand(e,t,n))return s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0
try{u=s.editor.getDoc().execCommand(e,t,n)}catch(o){}return!!u&&(s.editor.fire("ExecCommand",{command:e,ui:t,value:n}),!0)}},Ax.prototype.queryCommandState=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.state[e])return t(e)
try{return this.editor.getDoc().queryCommandState(e)}catch(m){}return!1}},Ax.prototype.queryCommandValue=function(e){var t
if(!this.editor.quirks.isHidden()&&!this.editor.removed){if(e=e.toLowerCase(),t=this.commands.value[e])return t(e)
try{return this.editor.getDoc().queryCommandValue(e)}catch(m){}}},Ax.prototype.addCommands=function(e,t){void 0===t&&(t="exec")
var n=this
Nx(e,(function(e,r){Nx(r.toLowerCase().split(","),(function(r){n.commands[t][r]=e}))}))},Ax.prototype.addCommand=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.exec[e]=function(e,o,i,a){return t.call(n||r.editor,o,i,a)}},Ax.prototype.queryCommandSupported=function(e){if(e=e.toLowerCase(),this.commands.exec[e])return!0
try{return this.editor.getDoc().queryCommandSupported(e)}catch(t){}return!1},Ax.prototype.addQueryStateHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.state[e]=function(){return t.call(n||r.editor)}},Ax.prototype.addQueryValueHandler=function(e,t,n){var r=this
e=e.toLowerCase(),this.commands.value[e]=function(){return t.call(n||r.editor)}},Ax.prototype.hasCustomCommand=function(e){return e=e.toLowerCase(),!!this.commands.exec[e]},Ax.prototype.execNativeCommand=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=null),this.editor.getDoc().execCommand(e,t,n)},Ax.prototype.isFormatMatch=function(e){return this.editor.formatter.match(e)},Ax.prototype.toggleFormat=function(e,t){this.editor.formatter.toggle(e,t?{value:t}:void 0),this.editor.nodeChanged()},Ax.prototype.storeSelection=function(e){this.selectionBookmark=this.editor.selection.getBookmark(e)},Ax.prototype.restoreSelection=function(){this.editor.selection.moveToBookmark(this.selectionBookmark)},Ax.prototype.setupCommands=function(e){var t=this
this.addCommands({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},"Cut,Copy,Paste":function(n){var r,o,i=e.getDoc()
try{t.execNativeCommand(n)}catch(l){r=!0}"paste"!==n||i.queryCommandEnabled(n)||(r=!0),!r&&i.queryCommandSupported(n)||(o=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."),bt.mac&&(o=o.replace(/Ctrl\+/g,"⌘+")),e.notificationManager.open({text:o,type:"error"}))},unlink:function(){var t
e.selection.isCollapsed()?(t=e.dom.getParent(e.selection.getStart(),"a"))&&e.dom.remove(t,!0):e.formatter.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(n){var r=n.substring(7)
"full"===r&&(r="justify"),Nx("left,center,right,justify".split(","),(function(t){r!==t&&e.formatter.remove("align"+t)})),"none"!==r&&t.toggleFormat("align"+r)},"InsertUnorderedList,InsertOrderedList":function(n){var r
t.execNativeCommand(n)
var o=e.dom.getParent(e.selection.getNode(),"ol,ul")
o&&(r=o.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(r.nodeName)&&(t.storeSelection(),e.dom.split(r,o),t.restoreSelection()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){t.toggleFormat(e)},"ForeColor,HiliteColor":function(e,n,r){t.toggleFormat(e,r)},FontName:function(t,n,r){(function(e,t){var n,r=Sx(e,t)
e.formatter.toggle("fontname",{value:(n=r.split(/\s*,\s*/),V(n,(function(e){return-1===e.indexOf(" ")||Ue(e,'"')||Ue(e,"'")?e:"'"+e+"'"})).join(","))}),e.nodeChanged()})(e,r)},FontSize:function(t,n,r){var o,i
i=r,(o=e).formatter.toggle("fontsize",{value:Sx(o,i)}),o.nodeChanged()},LineHeight:function(t,n,r){var o,i
i=r,(o=e).undoManager.transact((function(){o.formatter.toggle("lineheight",{value:String(i)}),o.nodeChanged()}))},RemoveFormat:function(t){e.formatter.remove(t)},mceBlockQuote:function(){t.toggleFormat("blockquote")},FormatBlock:function(e,n,r){return t.toggleFormat(r||"p")},mceCleanup:function(){var t=e.selection.getBookmark()
e.setContent(e.getContent()),e.selection.moveToBookmark(t)},mceRemoveNode:function(n,r,o){var i=o||e.selection.getNode()
i!==e.getBody()&&(t.storeSelection(),e.dom.remove(i,!0),t.restoreSelection())},mceSelectNodeDepth:function(t,n,r){var o=0
e.dom.getParent(e.selection.getNode(),(function(t){if(1===t.nodeType&&o++===r)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:function(t,n,r){e.selection.select(r)},mceInsertContent:function(t,n,r){(function(e,t){var n,r,o,i,a="string"!=typeof(n=t)?(r=Nt.extend({paste:n.paste,data:{paste:n.paste}},n),{content:n.content,details:r}):{content:n,details:{}}
o=a.content,i=a.details,Rh(e).editor.insertContent(o,i)})(e,r)},mceInsertRawHTML:function(t,n,r){e.selection.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,(function(){return r})))},mceInsertNewLine:function(t,n,r){Ow(e,r)},mceToggleFormat:function(e,n,r){t.toggleFormat(r)},mceSetContent:function(t,n,r){e.setContent(r)},"Indent,Outdent":function(t){Fb(e,t)},mceRepaint:function(){},InsertHorizontalRule:function(){e.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual,e.addVisual()},mceReplaceContent:function(t,n,r){e.execCommand("mceInsertContent",!1,r.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceInsertLink:function(t,n,r){"string"==typeof r&&(r={href:r})
var o=e.dom.getParent(e.selection.getNode(),"a")
r.href=r.href.replace(/ /g,"%20"),o&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,o)},selectAll:function(){var t,n=e.dom.getParent(e.selection.getStart(),jn)
n&&((t=e.dom.createRng()).selectNodeContents(n),e.selection.setRng(t))},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,n,r){return yw(e,r),!0}})
var n=function(t){return function(){var n=e.selection,r=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks(),o=Ex(r,(function(n){return!!e.formatter.matchNode(n,t)}))
return-1!==kx(o,!0)}}
t.addCommands({JustifyLeft:n("alignleft"),JustifyCenter:n("aligncenter"),JustifyRight:n("alignright"),JustifyFull:n("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return t.isFormatMatch(e)},mceBlockQuote:function(){return t.isFormatMatch("blockquote")},Outdent:function(){return Lb(e)},"InsertUnorderedList,InsertOrderedList":function(t){var n=e.dom.getParent(e.selection.getNode(),"ul,ol")
return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state"),t.addCommands({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}}),t.addQueryValueHandler("FontName",(function(){return xx(t=e,(function(e){return Cx(t.getBody(),e.dom)})).getOr("")
var t}),this),t.addQueryValueHandler("FontSize",(function(){return xx(t=e,(function(e){return bx(t.getBody(),e.dom)})).getOr("")
var t}),this),t.addQueryValueHandler("LineHeight",(function(){return xx(t=e,(function(e){var n=Rt(t.getBody())
return Jd(e,(function(e){return er(e,"line-height")}),f(Pt,n)).getOrThunk((function(){var t=parseFloat(Qn(e,"line-height")),n=parseFloat(Qn(e,"font-size"))
return String(t/n)}))})).getOr("")
var t}),this)},Ax)
function Ax(e){this.commands={state:{},exec:{},value:{}},this.editor=e,this.setupCommands(e)}var Rx="data-mce-contenteditable",Tx=function(e,t,n){var r,o
Bu(e,t)&&!1===n?(o=t,Tu(r=e)?r.dom.classList.remove(o):function(e,t){return o=t,0<(i=W(Ru(n=e,r="class"),(function(e){return e!==o}))).length?Kn(n,r,i.join(" ")):Jn(n,r),!1
var n,r,o,i}(r,o),function(e){0===(Tu(e)?e.dom.classList:Ru(e,"class")).length&&Jn(e,"class")}(r)):n&&Ou(e,t)},Ox=function(t,n,r){try{t.getDoc().execCommand(n,!1,String(r))}catch(e){}},Bx=function(e,t){e.dom.contentEditable=t?"true":"false"},Px=function(e,t){var n,r,o,i=Rt(e.getBody())
Tx(i,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),o=e,S.from(o.selection.getNode()).each((function(e){e.removeAttribute("data-mce-selected")})),e.readonly=!0,Bx(i,!1),q(Du(i,'*[contenteditable="true"]'),(function(e){Kn(e,Rx,"true"),Bx(e,!1)}))):(e.readonly=!1,Bx(i,!0),q(Du(i,"*["+Rx+'="true"]'),(function(e){Jn(e,Rx),Bx(e,!0)})),Ox(e,"StyleWithCSS",!1),Ox(e,"enableInlineTableEditing",!1),Ox(e,"enableObjectResizing",!1),(Hd(r=e)||function(e){return Cd().filter((function(t){return!(void 0!==(n=t.dom.classList)&&(n.contains("tox-edit-area")||n.contains("tox-edit-area__iframe")||n.contains("mce-content-body")))&&Md(e,t.dom)
var n})).isSome()}(r))&&e.focus(),(n=e).selection.setRng(n.selection.getRng()),e.nodeChanged())},Dx=function(e){return e.readonly},Lx=function(e){e.parser.addAttributeFilter("contenteditable",(function(t){Dx(e)&&q(t,(function(e){e.attr(Rx,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(Rx,(function(t){Dx(e)&&q(t,(function(e){e.attr("contenteditable",e.attr(Rx))}))})),e.serializer.addTempAttr(Rx)},Ix=Nt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," "),Mx=(Fx.isNative=function(e){return!!Ix[e.toLowerCase()]},Fx.prototype.fire=function(e,t){var n=e.toLowerCase(),r=t||{}
r.type=n,r.target||(r.target=this.scope),r.preventDefault||(r.preventDefault=function(){r.isDefaultPrevented=b},r.stopPropagation=function(){r.isPropagationStopped=b},r.stopImmediatePropagation=function(){r.isImmediatePropagationStopped=b},r.isDefaultPrevented=y,r.isPropagationStopped=y,r.isImmediatePropagationStopped=y),this.settings.beforeFire&&this.settings.beforeFire(r)
var o=this.bindings[n]
if(o)for(var i=0,a=o.length;i<a;i++){var u=o[i]
if(u.once&&this.off(n,u.func),r.isImmediatePropagationStopped())return r.stopPropagation(),r
if(!1===u.func.call(this.scope,r))return r.preventDefault(),r}return r},Fx.prototype.on=function(e,t,n,r){if(!1===t&&(t=y),t){var o={func:t}
r&&Nt.extend(o,r)
for(var i=e.toLowerCase().split(" "),a=i.length;a--;){var u=i[a],s=this.bindings[u]
s||(s=this.bindings[u]=[],this.toggleEvent(u,!0)),n?s.unshift(o):s.push(o)}}return this},Fx.prototype.off=function(e,t){var n=this
if(e)for(var r=e.toLowerCase().split(" "),o=r.length;o--;){var i=r[o],a=this.bindings[i]
if(!i)return ue(this.bindings,(function(e,t){n.toggleEvent(t,!1),delete n.bindings[t]})),this
if(a){if(t)for(var u=a.length;u--;)a[u].func===t&&(a=a.slice(0,u).concat(a.slice(u+1)),this.bindings[i]=a)
else a.length=0
a.length||(this.toggleEvent(e,!1),delete this.bindings[i])}}else ue(this.bindings,(function(e,t){n.toggleEvent(t,!1)})),this.bindings={}
return this},Fx.prototype.once=function(e,t,n){return this.on(e,t,n,{once:!0})},Fx.prototype.has=function(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)},Fx)
function Fx(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||y}var Ux,zx=function(e){return e._eventDispatcher||(e._eventDispatcher=new Mx({scope:e,toggleEvent:function(t,n){Mx.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher},jx={fire:function(e,t,n){if(this.removed&&"remove"!==e&&"detach"!==e)return t
var r=zx(this).fire(e,t)
if(!1!==n&&this.parent)for(var o=this.parent();o&&!r.isPropagationStopped();)o.fire(e,r,!1),o=o.parent()
return r},on:function(e,t,n){return zx(this).on(e,t,n)},off:function(e,t){return zx(this).off(e,t)},once:function(e,t){return zx(this).once(e,t)},hasEventListeners:function(e){return zx(this).has(e)}},Hx=du.DOM,Vx=function(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
var n=ic(e)
return n?(e.eventRoot||(e.eventRoot=Hx.select(n)[0]),e.eventRoot):e.getBody()},qx=function(e,t,n){var r;(r=e).hidden||Dx(r)?Dx(e)&&function(e,t){var n,r
"click"!==t.type||Pf.metaKeyPressed(t)||(n=Rt(t.target),r=e,_r(n,"a",(function(e){return Pt(e,Rt(r.getBody()))})).bind((function(e){return Gn(e,"href")})).each((function(n){var r,o,i,a
t.preventDefault(),/^#/.test(n)?(r=e.dom.select(n+',[name="'+(Ue(o=n,"#")?(i=o,a="#".length,i.substring(a)):o)+'"]')).length&&e.selection.scrollIntoView(r[0],!0):window.open(n,"_blank","rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")})))}(e,n):e.fire(t,n)},$x=function(e,t){var n
if(e.delegates||(e.delegates={}),!e.delegates[t]&&!e.removed){var r=Vx(e,t)
if(ic(e)){if(Ux||(Ux={},e.editorManager.on("removeEditor",(function(){e.editorManager.activeEditor||Ux&&(ue(Ux,(function(t,n){e.dom.unbind(Vx(e,n))})),Ux=null)}))),Ux[t])return
n=function(n){for(var r=n.target,o=e.editorManager.get(),i=o.length;i--;){var a=o[i].getBody()
a!==r&&!Hx.isChildOf(r,a)||qx(o[i],t,n)}},Ux[t]=n,Hx.bind(r,t,n)}else n=function(n){qx(e,t,n)},Hx.bind(r,t,n),e.delegates[t]=n}},Wx=Ee(Ee({},jx),{bindPendingEventDelegates:function(){var e=this
Nt.each(e._pendingNativeEvents,(function(t){$x(e,t)}))},toggleNativeEvent:function(e,t){var n=this
"focus"!==e&&"blur"!==e&&(t?n.initialized?$x(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(Vx(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t=e.getBody(),n=e.dom
e.delegates&&(ue(e.delegates,(function(t,n){e.dom.unbind(Vx(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}}),Kx=["design","readonly"],Xx=function(e,t,n,r){var o,i=n[t.get()],a=n[r]
try{a.activate()}catch(rN){return void console.error("problem while activating editor mode "+r+":",rN)}i.deactivate(),i.editorReadOnly!==a.editorReadOnly&&Px(e,a.editorReadOnly),t.set(r),o=r,e.fire("SwitchMode",{mode:o})},Yx=Nt.each,Gx=Nt.explode,Jx={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},Qx=Nt.makeMap("alt,ctrl,shift,meta,access"),Zx=(eS.prototype.add=function(e,t,n,r){var o=this,i=o.normalizeCommandFunc(n)
return Yx(Gx(Nt.trim(e)),(function(e){var n=o.createShortcut(e,t,i,r)
o.shortcuts[n.id]=n})),!0},eS.prototype.remove=function(e){var t=this.createShortcut(e)
return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)},eS.prototype.normalizeCommandFunc=function(e){var t=this,n=e
return"string"==typeof n?function(){t.editor.execCommand(n,!1,null)}:Nt.isArray(n)?function(){t.editor.execCommand(n[0],n[1],n[2])}:n},eS.prototype.parseShortcut=function(e){var t,n={}
Yx(Gx(e.toLowerCase(),"+"),(function(e){e in Qx?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=Jx[e]||e.toUpperCase().charCodeAt(0))}))
var r=[n.keyCode]
for(t in Qx)n[t]?r.push(t):n[t]=!1
return n.id=r.join(","),n.access&&(n.alt=!0,bt.mac?n.ctrl=!0:n.shift=!0),n.meta&&(bt.mac?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n},eS.prototype.createShortcut=function(e,t,n,r){var o=Nt.map(Gx(e,">"),this.parseShortcut)
return o[o.length-1]=Nt.extend(o[o.length-1],{func:n,scope:r||this.editor}),Nt.extend(o[0],{desc:this.editor.translate(t),subpatterns:o.slice(1)})},eS.prototype.hasModifier=function(e){return e.altKey||e.ctrlKey||e.metaKey},eS.prototype.isFunctionKey=function(e){return"keydown"===e.type&&112<=e.keyCode&&e.keyCode<=123},eS.prototype.matchShortcut=function(e,t){return!!t&&t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&t.alt===e.altKey&&t.shift===e.shiftKey&&!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0)},eS.prototype.executeShortcutAction=function(e){return e.func?e.func.call(e.scope):null},eS)
function eS(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e
var t=this
e.on("keyup keypress keydown",(function(e){!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(Yx(t.shortcuts,(function(n){if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}var tS=function(){var e,t,n,r,o,i,a,u,s=(t={},n={},r={},o={},i={},a={},{addButton:(u=function(e,t){return function(n,r){return e[n.toLowerCase()]=Ee(Ee({},r),{type:t})}})(e={},"button"),addGroupToolbarButton:u(e,"grouptoolbarbutton"),addToggleButton:u(e,"togglebutton"),addMenuButton:u(e,"menubutton"),addSplitButton:u(e,"splitbutton"),addMenuItem:u(t,"menuitem"),addNestedMenuItem:u(t,"nestedmenuitem"),addToggleMenuItem:u(t,"togglemenuitem"),addAutocompleter:u(n,"autocompleter"),addContextMenu:u(o,"contextmenu"),addContextToolbar:u(i,"contexttoolbar"),addContextForm:u(i,"contextform"),addSidebar:u(a,"sidebar"),addIcon:function(e,t){return r[e.toLowerCase()]=t},getAll:function(){return{buttons:e,menuItems:t,icons:r,popups:n,contextMenus:o,contextToolbars:i,sidebars:a}}})
return{addAutocompleter:s.addAutocompleter,addButton:s.addButton,addContextForm:s.addContextForm,addContextMenu:s.addContextMenu,addContextToolbar:s.addContextToolbar,addIcon:s.addIcon,addMenuButton:s.addMenuButton,addMenuItem:s.addMenuItem,addNestedMenuItem:s.addNestedMenuItem,addSidebar:s.addSidebar,addSplitButton:s.addSplitButton,addToggleButton:s.addToggleButton,addGroupToolbarButton:s.addGroupToolbarButton,addToggleMenuItem:s.addToggleMenuItem,getAll:s.getAll}},nS=Nt.each,rS=Nt.trim,oS="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),iS={ftp:21,http:80,https:443,mailto:25},aS=(uS.parseDataUri=function(e){var t,n=decodeURIComponent(e).split(","),r=/data:([^;]+)/.exec(n[0])
return r&&(t=r[1]),{type:t,data:n[1]}},uS.getDocumentBaseUrl=function(e){var t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname
return/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t},uS.prototype.setPath=function(e){var t=/^(.*?)\/?(\w+)?$/.exec(e)
this.path=t[0],this.directory=t[1],this.file=t[2],this.source="",this.getURI()},uS.prototype.toRelative=function(e){var t
if("./"===e)return e
var n=new uS(e,{base_uri:this})
if("mce_host"!==n.host&&this.host!==n.host&&n.host||this.port!==n.port||this.protocol!==n.protocol&&""!==n.protocol)return n.getURI()
var r=this.getURI(),o=n.getURI()
return r===o||"/"===r.charAt(r.length-1)&&r.substr(0,r.length-1)===o?r:(t=this.toRelPath(this.path,n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),t)},uS.prototype.toAbsolute=function(e,t){var n=new uS(e,{base_uri:this})
return n.getURI(t&&this.isSameOrigin(n))},uS.prototype.isSameOrigin=function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0
var t=iS[this.protocol]
if(t&&(this.port||t)==(e.port||t))return!0}return!1},uS.prototype.toRelPath=function(e,t){var n,r,o=0,i="",a=e.substring(0,e.lastIndexOf("/")).split("/"),u=t.split("/")
if(a.length>=u.length)for(n=0,r=a.length;n<r;n++)if(n>=u.length||a[n]!==u[n]){o=n+1
break}if(a.length<u.length)for(n=0,r=u.length;n<r;n++)if(n>=a.length||a[n]!==u[n]){o=n+1
break}if(1===o)return t
for(n=0,r=a.length-(o-1);n<r;n++)i+="../"
for(n=o-1,r=u.length;n<r;n++)i+=n!==o-1?"/"+u[n]:u[n]
return i},uS.prototype.toAbsPath=function(e,t){var n,r,o=0,i=[],a=/\/$/.test(t)?"/":"",u=e.split("/"),s=t.split("/")
for(nS(u,(function(e){e&&i.push(e)})),u=i,n=s.length-1,i=[];0<=n;n--)0!==s[n].length&&"."!==s[n]&&(".."!==s[n]?0<o?o--:i.push(s[n]):o++)
return 0!==(r=(n=u.length-o)<=0?Z(i).join("/"):u.slice(0,n).join("/")+"/"+Z(i).join("/")).indexOf("/")&&(r="/"+r),a&&r.lastIndexOf("/")!==r.length-1&&(r+=a),r},uS.prototype.getURI=function(e){var t
return void 0===e&&(e=!1),this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source},uS)
function uS(e,t){e=rS(e),this.settings=t||{}
var n,r,o,i,a=this.settings.base_uri,u=this;/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e)?u.source=e:(n=0===e.indexOf("//"),0!==e.indexOf("/")||n||(e=(a&&a.protocol||"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(r=this.settings.base_uri?this.settings.base_uri.path:new uS(document.location.href).directory,e=this.settings.base_uri&&""==this.settings.base_uri.protocol?"//mce_host"+u.toAbsPath(r,e):(o=/([^#?]*)([#?]?.*)/.exec(e),(a&&a.protocol||"http")+"://mce_host"+u.toAbsPath(r,o[1])+o[2])),e=e.replace(/@@/g,"(mce_at)"),i=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),nS(oS,(function(e,t){var n=(n=i[t])&&n.replace(/\(mce_at\)/g,"@@")
u[e]=n})),a&&(u.protocol||(u.protocol=a.protocol),u.userInfo||(u.userInfo=a.userInfo),u.port||"mce_host"!==u.host||(u.port=a.port),u.host&&"mce_host"!==u.host||(u.host=a.host),u.source=""),n&&(u.protocol=""))}var sS=du.DOM,cS=Nt.extend,lS=Nt.each,fS=Nt.resolve,dS=bt.ie,mS=(pS.prototype.render=function(){(function(e){var t=e.id
Su.setCode(nc(e))
var n,r,o,i,a,u=function(){mx.unbind(window,"ready",u),e.render()}
yi.Event.domLoaded?e.getElement()&&bt.contentEditable&&(n=Rt(e.getElement()),r=X(n.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{}),e.on("remove",(function(){$(n.dom.attributes,(function(e){return Jn(n,e.name),0})),Xn(n,r)})),e.ui.styleSheetLoader=(o=n,i=e,Hr.forElement(o,{contentCssCors:i.getParam("content_css_cors"),referrerPolicy:tc(i)})),e.getParam("inline")?e.inline=!0:(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden"),(a=e.getElement().form||mx.getParent(t,"form"))&&(e.formElement=a,e.getParam("hidden_input")&&!Dn(e.getElement())&&(mx.insertAfter(mx.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=function(t){e.fire(t.type,t)},mx.bind(a,"submit reset",e.formEventDelegate),e.on("reset",(function(){e.resetContent()})),!e.getParam("submit_patch")||a.submit.nodeType||a.submit.length||a._mceOldSubmit||(a._mceOldSubmit=a.submit,a.submit=function(){return e.editorManager.triggerSave(),e.setDirty(!1),a._mceOldSubmit(a)})),e.windowManager=Bv(e),e.notificationManager=Rv(e),"xml"===e.getParam("encoding")&&e.on("GetContent",(function(e){e.save&&(e.content=mx.encode(e.content))})),e.getParam("add_form_submit_trigger")&&e.on("submit",(function(){e.initialized&&e.save()})),e.getParam("add_unload_trigger")&&(e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),hx(e,e.suffix)):mx.bind(window,"ready",u)})(this)},pS.prototype.focus=function(e){var t
t=e,this.removed||(t?qd:Vd)(this)},pS.prototype.hasFocus=function(){return Hd(this)},pS.prototype.execCallback=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r,o=this.settings[e]
if(o)return this.callbackLookup&&(r=this.callbackLookup[e])&&(o=r.func,r=r.scope),"string"==typeof o&&(r=(r=o.replace(/\.\w+$/,""))?fS(r):0,o=fS(o),this.callbackLookup=this.callbackLookup||{},this.callbackLookup[e]={func:o,scope:r}),o.apply(r||this,t)},pS.prototype.translate=function(e){return Su.translate(e)},pS.prototype.getParam=function(e,t,n){return function(e,t,n,r){var o,i,a,u=t in e.settings?e.settings[t]:n
return"hash"===r?(a={},"string"==typeof(i=u)?q(0<i.indexOf("=")?i.split(/[;,](?![^=;,]*(?:[;,]|$))/):i.split(","),(function(e){var t=e.split("=")
1<t.length?a[Nt.trim(t[0])]=Nt.trim(t[1]):a[Nt.trim(t[0])]=Nt.trim(t[0])})):a=i,a):"string"===r?Cv(_,e,t).getOr(n):"number"===r?Cv(I,e,t).getOr(n):"boolean"===r?Cv(O,e,t).getOr(n):"object"===r?Cv(A,e,t).getOr(n):"array"===r?Cv(R,e,t).getOr(n):"string[]"===r?Cv((o=_,function(e){return R(e)&&Q(e,o)}),e,t).getOr(n):"function"===r?Cv(L,e,t).getOr(n):u}(this,e,t,n)},pS.prototype.hasPlugin=function(e,t){return!(!j(sc(this).split(/[ ,]/),e)||t&&void 0===Tv.get(e))},pS.prototype.nodeChanged=function(e){this._nodeChangeDispatcher.nodeChanged(e)},pS.prototype.addCommand=function(e,t,n){this.editorCommands.addCommand(e,t,n)},pS.prototype.addQueryStateHandler=function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},pS.prototype.addQueryValueHandler=function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},pS.prototype.addShortcut=function(e,t,n,r){this.shortcuts.add(e,t,n,r)},pS.prototype.execCommand=function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},pS.prototype.queryCommandState=function(e){return this.editorCommands.queryCommandState(e)},pS.prototype.queryCommandValue=function(e){return this.editorCommands.queryCommandValue(e)},pS.prototype.queryCommandSupported=function(e){return this.editorCommands.queryCommandSupported(e)},pS.prototype.show=function(){this.hidden&&(this.hidden=!1,this.inline?this.getBody().contentEditable="true":(sS.show(this.getContainer()),sS.hide(this.id)),this.load(),this.fire("show"))},pS.prototype.hide=function(){var e=this,t=e.getDoc()
e.hidden||(dS&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(sS.hide(e.getContainer()),sS.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},pS.prototype.isHidden=function(){return!!this.hidden},pS.prototype.setProgressState=function(e,t){this.fire("ProgressState",{state:e,time:t})},pS.prototype.load=function(e){var t=this.getElement()
if(this.removed)return""
if(t){(e=e||{}).load=!0
var n=Dn(t)?t.value:t.innerHTML,r=this.setContent(n,e)
return e.element=t,e.no_events||this.fire("LoadContent",e),e.element=t=null,r}},pS.prototype.save=function(e){var t,n,r=this,o=r.getElement()
if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,Dn(o)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=sS.getParent(r.id,"form"))&&lS(n.elements,(function(e){if(e.name===r.id)return e.value=t,!1}))),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},pS.prototype.setContent=function(e,t){return ov(this,e,t)},pS.prototype.getContent=function(e){return function(e,t){var n,r
return void 0===t&&(t={}),n=t,r=t.format?t.format:"html",Rh(e).editor.getContent(n,r)}(this,e)},pS.prototype.insertContent=function(e,t){t&&(e=cS({content:e},t)),this.execCommand("mceInsertContent",!1,e)},pS.prototype.resetContent=function(e){void 0===e?ov(this,this.startContent,{format:"raw"}):ov(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()},pS.prototype.isDirty=function(){return!this.isNotDirty},pS.prototype.setDirty=function(e){var t=!this.isNotDirty
this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},pS.prototype.getContainer=function(){return this.container||(this.container=sS.get(this.editorContainer||this.id+"_parent")),this.container},pS.prototype.getContentAreaContainer=function(){return this.contentAreaContainer},pS.prototype.getElement=function(){return this.targetElm||(this.targetElm=sS.get(this.id)),this.targetElm},pS.prototype.getWin=function(){var e
return this.contentWindow||(e=this.iframeElement)&&(this.contentWindow=e.contentWindow),this.contentWindow},pS.prototype.getDoc=function(){var e
return this.contentDocument||(e=this.getWin())&&(this.contentDocument=e.document),this.contentDocument},pS.prototype.getBody=function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},pS.prototype.convertURL=function(e,t,n){var r=this.settings
return r.urlconverter_callback?this.execCallback("urlconverter_callback",e,n,!0,t):!r.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:r.relative_urls?this.documentBaseURI.toRelative(e):e=this.documentBaseURI.toAbsolute(e,r.remove_script_host)},pS.prototype.addVisual=function(e){(function(e,t){return n=t,Th(e).editor.addVisual(n)
var n})(this,e)},pS.prototype.remove=function(){(function(e){var t,n,r,o,i
e.removed||(t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement(),r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&iv.remove(o.nextSibling),e.fire("remove"),e.editorManager.remove(e),!e.inline&&r&&(i=e,iv.setStyle(i.id,"display",i.orgDisplay)),e.fire("detach"),iv.remove(e.getContainer()),av(t),av(n),e.destroy())})(this)},pS.prototype.destroy=function(e){(function(e,t){var n,r,o,i=e.selection,a=e.dom
e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),av(i),av(a)),(r=(n=e).formElement)&&(r._mceOldSubmit&&(r.submit=r._mceOldSubmit,r._mceOldSubmit=null),iv.unbind(r,"submit reset",n.formEventDelegate)),(o=e).contentAreaContainer=o.formElement=o.container=o.editorContainer=null,o.bodyElement=o.contentDocument=o.contentWindow=null,o.iframeElement=o.targetElm=null,o.selection&&(o.selection=o.selection.win=o.selection.dom=o.selection.dom.doc=null),e.destroyed=!0):e.remove())})(this,e)},pS.prototype.uploadImages=function(e){return this.editorUpload.uploadImages(e)},pS.prototype._scanForImages=function(){return this.editorUpload.scanForImages()},pS.prototype.addButton=function(){throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead")},pS.prototype.addSidebar=function(){throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead")},pS.prototype.addMenuItem=function(){throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead")},pS.prototype.addContextToolbar=function(){throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead")},pS)
function pS(e,t,n){var r=this
this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,cS(this,Wx),this.settings=function(e,t,n,r,o){var i,a,u,s,c=(i=n,a=lv,u=e,s={id:t,theme:"silver",toolbar_mode:vv(o,"floating"),plugins:"",document_base_url:i,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,inline_styles:!0,convert_fonts_to_spans:!0,indent:!0,indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:u.convertURL,url_converter_scope:u},Ee(Ee({},s),a?pv:{}))
return bv(fv||dv,fv,c,r,o)}(this,e,this.documentBaseUrl,n.defaultSettings,t),this.settings.suffix&&(n.suffix=this.settings.suffix),this.suffix=n.suffix,this.settings.base_url&&n._setBaseUrl(this.settings.base_url),this.baseUri=n.baseURI,this.settings.referrer_policy&&(hu.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),du.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)),ku.languageLoad=this.settings.language_load,ku.baseURL=n.baseURL,this.id=e,this.setDirty(!1),this.documentBaseURI=new aS(this.settings.document_base_url,{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=!!this.settings.inline,this.shortcuts=new Zx(this),this.editorCommands=new _x(this),this.settings.cache_suffix&&(bt.cacheSuffix=this.settings.cache_suffix.replace(/^[\?\&]+/,"")),this.ui={registry:tS(),styleSheetLoader:void 0,show:u,hide:u,enable:u,disable:u,isDisabled:y}
var o=function(e){var t,n,r=bu("design"),o=bu({design:{activate:u,deactivate:u,editorReadOnly:!1},readonly:{activate:u,deactivate:u,editorReadOnly:!0}})
return(t=e).serializer?Lx(t):t.on("PreInit",(function(){Lx(t)})),(n=e).on("ShowCaret",(function(e){Dx(n)&&e.preventDefault()})),n.on("ObjectSelected",(function(e){Dx(n)&&e.preventDefault()})),{isReadOnly:function(){return Dx(e)},set:function(t){return function(e,t,n,r){if(r!==n.get()){if(!ge(t,r))throw new Error("Editor mode '"+r+"' is invalid")
e.initialized?Xx(e,n,t,r):e.on("init",(function(){return Xx(e,n,t,r)}))}}(e,o.get(),r,t)},get:function(){return r.get()},register:function(e,t){o.set(function(e,t,n){var r
if(j(Kx,t))throw new Error("Cannot override default mode "+t)
return Ee(Ee({},e),((r={})[t]=Ee(Ee({},n),{deactivate:function(){try{n.deactivate()}catch(rN){console.error("problem while deactivating editor mode "+t+":",rN)}}}),r))}(o.get(),e,t))}}}(this)
this.mode=o,this.setMode=o.set,n.fire("SetupEditor",{editor:this}),this.execCallback("setup",this),this.$=ou.overrideDefaults((function(){return{context:r.inline?r.getBody():r.getDoc(),element:r.getBody()}}))}var gS,hS=du.DOM,vS=Nt.explode,yS=Nt.each,bS=Nt.extend,CS=0,wS=!1,xS=[],SS=[],NS=function(e){var t=e.type
yS(AS.get(),(function(n){switch(t){case"scroll":n.fire("ScrollWindow",e)
break
case"resize":n.fire("ResizeWindow",e)}}))},ES=function(e){e!==wS&&(e?ou(window).on("resize scroll",NS):ou(window).off("resize scroll",NS),wS=e)},kS=function(e){var t=SS
delete xS[e.id]
for(var n=0;n<xS.length;n++)if(xS[n]===e){xS.splice(n,1)
break}return SS=W(SS,(function(t){return e!==t})),AS.activeEditor===e&&(AS.activeEditor=0<SS.length?SS[0]:null),AS.focusedEditor===e&&(AS.focusedEditor=null),t.length!==SS.length},_S="CSS1Compat"!==document.compatMode,AS=Ee(Ee({},jx),{baseURI:null,baseURL:null,defaultSettings:{},documentBaseURL:null,suffix:null,$:ou,majorVersion:"5",minorVersion:"6.0",releaseDate:"2020-11-18",editors:xS,i18n:Su,activeEditor:null,focusedEditor:null,settings:{},setup:function(){var e,t="",n=aS.getDocumentBaseUrl(document.location);/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/"))
var r,o=window.tinymce||window.tinyMCEPreInit
if(o)e=o.base||o.baseURL,t=o.suffix
else{for(var i,a=document.getElementsByTagName("script"),u=0;u<a.length;u++)if(""!==(i=a[u].src||"")){var s=i.substring(i.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)){-1!==s.indexOf(".min")&&(t=".min"),e=i.substring(0,i.lastIndexOf("/"))
break}}!e&&document.currentScript&&(-1!==(i=document.currentScript.src).indexOf(".min")&&(t=".min"),e=i.substring(0,i.lastIndexOf("/")))}this.baseURL=new aS(n).toAbsolute(e),this.documentBaseURL=n,this.baseURI=new aS(this.baseURL),this.suffix=t,(r=this).on("AddEditor",f(Fd,r)),r.on("RemoveEditor",f(Ud,r))},overrideDefaults:function(e){var t=e.base_url
t&&this._setBaseUrl(t)
var n=e.suffix
e.suffix&&(this.suffix=n)
var r=(this.defaultSettings=e).plugin_base_urls
void 0!==r&&ue(r,(function(e,t){ku.PluginManager.urls[t]=e}))},init:function(e){var t,n=this,r=Nt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," "),o=function(e){var t=e.id
return t||(t=pe(e,"name").filter((function(e){return!hS.get(e)})).getOrThunk(hS.uniqueId),e.setAttribute("id",t)),t},i=function(e,t){return t.constructor===RegExp?t.test(e.className):hS.hasClass(e,t)},a=function(e){t=e},u=function(){var t,s=0,c=[],l=function(e,r,o){var i=new mS(e,r,n)
c.push(i),i.on("init",(function(){++s===t.length&&a(c)})),i.targetElm=i.targetElm||o,i.render()}
hS.unbind(window,"ready",u),function(t){var r=e[t]
r&&r.apply(n,Array.prototype.slice.call(arguments,2))}("onpageload"),t=ou.unique(function(e){var t=[]
if(bt.browser.isIE()&&bt.browser.version.major<11)return Fv("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[]
if(_S)return Fv("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]
if(e.types)return yS(e.types,(function(e){t=t.concat(hS.select(e.selector))})),t
if(e.selector)return hS.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":var n=e.elements||""
0<n.length&&yS(vS(n),(function(e){var n=hS.get(e)
n?t.push(n):yS(document.forms,(function(n){yS(n.elements,(function(n){n.name===e&&(e="mce_editor_"+CS++,hS.setAttrib(n,"id",e),t.push(n))}))}))}))
break
case"textareas":case"specific_textareas":yS(hS.select("textarea"),(function(n){e.editor_deselector&&i(n,e.editor_deselector)||e.editor_selector&&!i(n,e.editor_selector)||t.push(n)}))}return t}(e)),e.types?yS(e.types,(function(n){Nt.each(t,(function(t){return!hS.is(t,n.selector)||(l(o(t),bS({},e,n),t),!1)}))})):(Nt.each(t,(function(e){var t;(t=n.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(kS(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)})),0===(t=Nt.grep(t,(function(e){return!n.get(e.id)}))).length?a([]):yS(t,(function(t){var n
n=t,e.inline&&n.tagName.toLowerCase()in r?Fv("Could not initialize inline editor on invalid inline target element",t):l(o(t),e,t)})))}
return n.settings=e,hS.bind(window,"ready",u),new Ar((function(e){t?e(t):a=function(t){e(t)}}))},get:function(e){return 0===arguments.length?SS.slice(0):_(e)?Y(SS,(function(t){return t.id===e})).getOr(null):I(e)&&SS[e]?SS[e]:null},add:function(e){var t=this
return xS[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(xS[e.id]=e),xS.push(e),SS.push(e)),ES(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),gS||(gS=function(e){var n=t.fire("BeforeUnload")
if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",gS))),e},createEditor:function(e,t){return this.add(new mS(e,t,this))},remove:function(e){var t,n,r=this
if(e){if(!_(e))return n=e,T(r.get(n.id))?null:(kS(n)&&r.fire("RemoveEditor",{editor:n}),0===SS.length&&window.removeEventListener("beforeunload",gS),n.remove(),ES(0<SS.length),n)
yS(hS.select(e),(function(e){(n=r.get(e.id))&&r.remove(n)}))}else for(t=SS.length-1;0<=t;t--)r.remove(SS[t])},execCommand:function(e,t,n){var r=this.get(n)
switch(e){case"mceAddEditor":return this.get(n)||new mS(n,this.settings,this).render(),!0
case"mceRemoveEditor":return r&&r.remove(),!0
case"mceToggleEditor":return r?(r.isHidden()?r.show():r.hide(),!0):(this.execCommand("mceAddEditor",0,n),!0)}return!!this.activeEditor&&this.activeEditor.execCommand(e,t,n)},triggerSave:function(){yS(SS,(function(e){e.save()}))},addI18n:function(e,t){Su.add(e,t)},translate:function(e){return Su.translate(e)},setActive:function(e){var t=this.activeEditor
this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl:function(e){this.baseURL=new aS(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new aS(this.baseURL)}})
AS.setup()
var RS,TS,OS,BS,PS=Math.min,DS=Math.max,LS=Math.round,IS=function(e,t,n){var r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,s=t.h,c=(n||"").split("")
return"b"===c[0]&&(o+=s),"r"===c[1]&&(r+=u),"c"===c[0]&&(o+=LS(s/2)),"c"===c[1]&&(r+=LS(u/2)),"b"===c[3]&&(o-=a),"r"===c[4]&&(r-=i),"c"===c[3]&&(o-=LS(a/2)),"c"===c[4]&&(r-=LS(i/2)),MS(r,o,i,a)},MS=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},FS={inflate:function(e,t,n){return MS(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:IS,findBestRelativePosition:function(e,t,n,r){for(var o,i=0;i<r.length;i++)if((o=IS(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i]
return null},intersect:function(e,t){var n=DS(e.x,t.x),r=DS(e.y,t.y),o=PS(e.x+e.w,t.x+t.w),i=PS(e.y+e.h,t.y+t.h)
return o-n<0||i-r<0?null:MS(n,r,o-n,i-r)},clamp:function(e,t,n){var r=e.x,o=e.y,i=e.x+e.w,a=e.y+e.h,u=t.x+t.w,s=t.y+t.h,c=DS(0,t.x-r),l=DS(0,t.y-o),f=DS(0,i-u),d=DS(0,a-s)
return r+=c,o+=l,n&&(i+=c,a+=l,r-=f,o-=d),MS(r,o,(i-=f)-r,(a-=d)-o)},create:MS,fromClientRect:function(e){return MS(e.left,e.top,e.width,e.height)}},US=(RS={},TS={},{load:function(e,t){var n='Script at URL "'+t+'" failed to load',r='Script at URL "'+t+"\" did not call `tinymce.Resource.add('"+e+"', data)` within 1 second"
if(void 0!==RS[e])return RS[e]
var o=new Ar((function(o,i){var a=function(e,t,n){void 0===n&&(n=1e3)
var r=!1,o=null,i=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
r||(r=!0,null!==o&&(clearTimeout(o),o=null),e.apply(null,t))}},a=i(e),u=i(t)
return{start:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
r||null!==o||(o=setTimeout((function(){return u.apply(null,e)}),n))},resolve:a,reject:u}}(o,i)
TS[e]=a.resolve,hu.ScriptLoader.loadScript(t,(function(){return a.start(r)}),(function(){return a.reject(n)}))}))
return RS[e]=o},add:function(e,t){void 0!==TS[e]&&(TS[e](t),delete TS[e]),RS[e]=Ar.resolve(t)}}),zS=Nt.each,jS=Nt.extend,HS=function(){}
HS.extend=OS=function(e){var t=this.prototype,n=function(){var e,t,n
if(!BS&&(this.init&&this.init.apply(this,arguments),t=this.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(this,arguments)},r=function(){return this}
BS=!0
var o=new this
return BS=!1,e.Mixins&&(zS(e.Mixins,(function(t){for(var n in t)"init"!==n&&(e[n]=t[n])})),t.Mixins&&(e.Mixins=t.Mixins.concat(e.Mixins))),e.Methods&&zS(e.Methods.split(","),(function(t){e[t]=r})),e.Properties&&zS(e.Properties.split(","),(function(t){var n="_"+t
e[t]=function(e){return void 0!==e?(this[n]=e,this):this[n]}})),e.Statics&&zS(e.Statics,(function(e,t){n[t]=e})),e.Defaults&&t.Defaults&&(e.Defaults=jS({},t.Defaults,e.Defaults)),ue(e,(function(e,n){var r,i
"function"==typeof e&&t[n]?o[n]=(r=n,i=e,function(){var e=this._super
this._super=t[r]
var n=i.apply(this,arguments)
return this._super=e,n}):o[n]=e})),n.prototype=o,(n.constructor=n).extend=OS,n}
var VS=Math.min,qS=Math.max,$S=Math.round,WS={serialize:function(e){var t=JSON.stringify(e)
return _(t)?t.replace(/[\u0080-\uFFFF]/g,(function(e){var t=e.charCodeAt(0).toString(16)
return"\\u"+"0000".substring(t.length)+t})):t},parse:function(e){try{return JSON.parse(e)}catch(t){}}},KS={callbacks:{},count:0,send:function(e){var t=this,n=du.DOM,r=void 0!==e.count?e.count:t.count,o="tinymce_jsonp_"+r
t.callbacks[r]=function(i){n.remove(o),delete t.callbacks[r],e.callback(i)},n.add(n.doc.body,"script",{id:o,src:e.url,type:"text/javascript"}),t.count++}},XS=Ee(Ee({},jx),{send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||1e4<n++?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,1e4<n?"TIMED_OUT":"GENERAL",t,e),t=null):Ur.setTimeout(r,10)}
if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",XS.fire("beforeInitialize",{settings:e}),(t=new XMLHttpRequest).overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&Nt.each(e.requestheaders,(function(e){t.setRequestHeader(e.key,e.value)})),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=XS.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r()
Ur.setTimeout(r,10)}}),YS=Nt.extend,GS=(JS.sendRPC=function(e){return(new JS).send(e)},JS.prototype.send=function(e){var t=e.error,n=e.success,r=YS(this.settings,e)
r.success=function(e,o){void 0===(e=WS.parse(e))&&(e={error:"JSON Parse error."}),e.error?t.call(r.error_scope||r.scope,e.error,o):n.call(r.success_scope||r.scope,e.result)},r.error=function(e,n){t&&t.call(r.error_scope||r.scope,e,n)},r.data=WS.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params}),r.content_type="application/json",XS.send(r)},JS)
function JS(e){this.settings=YS({},e),this.count=0}try{var QS,ZS="__storage_test__";(QS=window.localStorage).setItem(ZS,ZS),QS.removeItem(ZS)}catch(rN){QS=function(){return e={},t=[],n={getItem:function(t){return e[t]||null},setItem:function(n,r){t.push(n),e[n]=String(r)},key:function(e){return t[e]},removeItem:function(n){t=t.filter((function(e){return e===n})),delete e[n]},clear:function(){t=[],e={}},length:0},Object.defineProperty(n,"length",{get:function(){return t.length},configurable:!1,enumerable:!1}),n
var e,t,n}()}var eN,tN={geom:{Rect:FS},util:{Promise:Ar,Delay:Ur,Tools:Nt,VK:Pf,URI:aS,Class:HS,EventDispatcher:Mx,Observable:jx,I18n:Su,XHR:XS,JSON:WS,JSONRequest:GS,JSONP:KS,LocalStorage:QS,Color:function(e){var t={},n=0,r=0,o=0,i=function(e){var i
return"object"==typeof e?"r"in e?(n=e.r,r=e.g,o=e.b):"v"in e&&function(e,t,i){if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,i=parseInt(i,10)/100,t=qS(0,VS(t,1)),i=qS(0,VS(i,1)),0!==t){var a=e/60,u=i*t,s=u*(1-Math.abs(a%2-1)),c=i-u
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
default:n=r=o=0}n=$S(255*(n+c)),r=$S(255*(r+c)),o=$S(255*(o+c))}else n=r=o=$S(255*i)}(e.h,e.s,e.v):(i=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(n=parseInt(i[1],10),r=parseInt(i[2],10),o=parseInt(i[3],10)):(i=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16)):(i=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(n=parseInt(i[1]+i[1],16),r=parseInt(i[2]+i[2],16),o=parseInt(i[3]+i[3],16)),n=n<0?0:255<n?255:n,r=r<0?0:255<r?255:r,o=o<0?0:255<o?255:o,t}
return e&&i(e),t.toRgb=function(){return{r:n,g:r,b:o}},t.toHsv=function(){return e=n,t=r,i=o,u=0,(s=VS(e/=255,VS(t/=255,i/=255)))===(c=qS(e,qS(t,i)))?{h:0,s:0,v:100*(u=s)}:(a=(c-s)/c,{h:$S(60*((e===s?3:i===s?1:5)-(e===s?t-i:i===s?e-t:i-e)/((u=c)-s))),s:$S(100*a),v:$S(100*u)})
var e,t,i,a,u,s,c},t.toHex=function(){var e=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e}
return"#"+e(n)+e(r)+e(o)},t.parse=i,t}},dom:{EventUtils:yi,Sizzle:ya,DomQuery:ou,TreeWalker:Vr,TextSeeker:Ku,DOMUtils:du,ScriptLoader:hu,RangeUtils:Zf,Serializer:rv,StyleSheetLoader:zr,ControlSelection:Lf,BookmarkManager:Tf,Selection:Ih,Event:yi.Event},html:{Styles:li,Entities:Qo,Node:cm,Schema:si,SaxParser:Cm,DomParser:ev,Writer:dm,Serializer:mm},Env:bt,AddOnManager:ku,Annotator:_f,Formatter:Gv,UndoManager:Jv,EditorCommands:_x,WindowManager:Bv,NotificationManager:Rv,EditorObservable:Wx,Shortcuts:Zx,Editor:mS,FocusManager:Dd,EditorManager:AS,DOM:du.DOM,ScriptLoader:hu.ScriptLoader,PluginManager:Tv,ThemeManager:Ov,IconManager:wv,Resource:US,trim:Nt.trim,isArray:Nt.isArray,is:Nt.is,toArray:Nt.toArray,makeMap:Nt.makeMap,each:Nt.each,map:Nt.map,grep:Nt.grep,inArray:Nt.inArray,extend:Nt.extend,create:Nt.create,walk:Nt.walk,createNS:Nt.createNS,resolve:Nt.resolve,explode:Nt.explode,_addCacheSuffix:Nt._addCacheSuffix,isOpera:bt.opera,isWebKit:bt.webkit,isIE:bt.ie,isGecko:bt.gecko,isMac:bt.mac},nN=Nt.extend(AS,tN)
eN=nN,window.tinymce=eN,window.tinyMCE=eN,function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(nN)}()

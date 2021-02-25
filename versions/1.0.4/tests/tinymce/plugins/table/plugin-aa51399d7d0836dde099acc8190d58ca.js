(function(){"use strict"
var n=function(){},t=function(n){return function(){return n}},e=function(n){return n}
function r(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e]
return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o=t.concat(e)
return n.apply(null,o)}}var o=function(n){return function(t){return!n(t)}},u=t(!1),i=t(!0),c=function(){return a},a=function(){var e=function(n){return n.isNone()},r=function(n){return n()},o=function(n){return n}
return{fold:function(n,t){return n()},is:u,isSome:u,isNone:i,getOr:o,getOrThunk:r,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:t(null),getOrUndefined:t(void 0),or:o,orThunk:r,map:c,each:n,bind:c,exists:u,forall:i,filter:c,equals:e,equals_:e,toArray:function(){return[]},toString:t("none()")}}(),l=function(n){var e=t(n),r=function(){return c},o=function(t){return t(n)},c={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:i,isNone:u,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:r,orThunk:r,map:function(t){return l(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?c:a},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(u,(function(t){return e(n,t)}))}}
return c},f={some:l,none:c,from:function(n){return null==n?a:l(n)}},s=function(n){return function(t){return r=typeof(e=t),(null===e?"null":"object"===r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===n
var e,r}},m=function(n){return function(t){return typeof t===n}},d=s("string"),g=s("object"),p=s("array"),v=m("boolean"),h=function(n){return!function(n){return null==n}(n)},b=m("function"),w=m("number"),y=Array.prototype.slice,C=Array.prototype.indexOf,x=Array.prototype.push,S=function(n,t){return e=n,r=t,C.call(e,r)>-1
var e,r},T=function(n,t){for(var e=0,r=n.length;e<r;e++){if(t(n[e],e))return!0}return!1},R=function(n,t){for(var e=[],r=0;r<n;r++)e.push(t(r))
return e},D=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var u=n[o]
r[o]=t(u,o)}return r},O=function(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e)}},A=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var u=n[r]
t(u,r)&&e.push(u)}return e},B=function(n,t,e){return function(n,t){for(var e=n.length-1;e>=0;e--)t(n[e],e)}(n,(function(n){e=t(e,n)})),e},E=function(n,t,e){return O(n,(function(n){e=t(e,n)})),e},I=function(n,t){return function(n,t,e){for(var r=0,o=n.length;r<o;r++){var u=n[r]
if(t(u,r))return f.some(u)
if(e(u,r))break}return f.none()}(n,t,u)},P=function(n,t){for(var e=0,r=n.length;e<r;e++){if(t(n[e],e))return f.some(e)}return f.none()},k=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!p(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n)
x.apply(t,n[e])}return t},M=function(n,t){return k(D(n,t))},N=function(n,t){for(var e=0,r=n.length;e<r;++e){if(!0!==t(n[e],e))return!1}return!0},j=function(n){return[n]},_=function(n){return 0===n.length?f.none():f.some(n[n.length-1])},W=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e)
if(r.isSome())return r}return f.none()},z=function(){return(z=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])
return n}).apply(this,arguments)}
function F(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length
var r=Array(n),o=0
for(t=0;t<e;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i]
return r}var L=function(n){var t,e=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return e||(e=!0,t=n.apply(null,r)),t}},H=function(){return q(0,0)},q=function(n,t){return{major:n,minor:t}},V={nu:q,detect:function(n,t){var e=String(t).toLowerCase()
return 0===n.length?H():function(n,t){var e=function(n,t){for(var e=0;e<n.length;e++){var r=n[e]
if(r.test(t))return r}}(n,t)
if(!e)return{major:0,minor:0}
var r=function(n){return Number(t.replace(e,"$"+n))}
return q(r(1),r(2))}(n,e)},unknown:H},U=function(n,t){var e=String(t).toLowerCase()
return I(n,(function(n){return n.search(e)}))},$=function(n,t){return U(n,t).map((function(n){var e=V.detect(n.versionRegexes,t)
return{current:n.name,version:e}}))},G=function(n,t){return U(n,t).map((function(n){var e=V.detect(n.versionRegexes,t)
return{current:n.name,version:e}}))},K=function(n,t,e){return""===t||n.length>=t.length&&n.substr(e,e+t.length)===t},X=function(n,t){return-1!==n.indexOf(t)},Y=function(n,t){return K(n,t,0)},J=function(n,t){return K(n,t,n.length-t.length)},Q=function(n){return function(t){return t.replace(n,"")}}(/^\s+|\s+$/g),Z=function(n){return n.length>0},nn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,tn=function(n){return function(t){return X(t,n)}},en=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return X(n,"edge/")&&X(n,"chrome")&&X(n,"safari")&&X(n,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,nn],search:function(n){return X(n,"chrome")&&!X(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return X(n,"msie")||X(n,"trident")}},{name:"Opera",versionRegexes:[nn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:tn("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:tn("firefox")},{name:"Safari",versionRegexes:[nn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(X(n,"safari")||X(n,"mobile/"))&&X(n,"applewebkit")}}],rn=[{name:"Windows",search:tn("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return X(n,"iphone")||X(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:tn("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:tn("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:tn("linux"),versionRegexes:[]},{name:"Solaris",search:tn("sunos"),versionRegexes:[]},{name:"FreeBSD",search:tn("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:tn("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],on={browsers:t(en),oses:t(rn)},un="Edge",cn="Chrome",an="Opera",ln="Firefox",fn="Safari",sn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isEdge:r(un),isChrome:r(cn),isIE:r("IE"),isOpera:r(an),isFirefox:r(ln),isSafari:r(fn)}},mn={unknown:function(){return sn({current:void 0,version:V.unknown()})},nu:sn,edge:t(un),chrome:t(cn),ie:t("IE"),opera:t(an),firefox:t(ln),safari:t(fn)},dn="Windows",gn="Android",pn="Linux",vn="Solaris",hn="FreeBSD",bn="ChromeOS",wn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isWindows:r(dn),isiOS:r("iOS"),isAndroid:r(gn),isOSX:r("OSX"),isLinux:r(pn),isSolaris:r(vn),isFreeBSD:r(hn),isChromeOS:r(bn)}},yn={unknown:function(){return wn({current:void 0,version:V.unknown()})},nu:wn,windows:t(dn),ios:t("iOS"),android:t(gn),linux:t(pn),osx:t("OSX"),solaris:t(vn),freebsd:t(hn),chromeos:t(bn)},Cn=function(n,e){var r=on.browsers(),o=on.oses(),u=$(r,n).fold(mn.unknown,mn.nu),i=G(o,n).fold(yn.unknown,yn.nu),c=function(n,e,r,o){var u=n.isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!u,c=n.isiOS()||n.isAndroid(),a=c||o("(pointer:coarse)"),l=u||!i&&c&&o("(min-device-width:768px)"),f=i||c&&!l,s=e.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),m=!f&&!l&&!s
return{isiPad:t(u),isiPhone:t(i),isTablet:t(l),isPhone:t(f),isTouch:t(a),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:t(s),isDesktop:t(m)}}(i,u,n,e)
return{browser:u,os:i,deviceType:c}},xn=function(n){return window.matchMedia(n).matches},Sn=L((function(){return Cn(navigator.userAgent,xn)})),Tn=function(){return Sn()},Rn=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},Dn={fromHtml:function(n,t){var e=(t||document).createElement("div")
if(e.innerHTML=n,!e.hasChildNodes()||e.childNodes.length>1)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return Rn(e.childNodes[0])},fromTag:function(n,t){var e=(t||document).createElement(n)
return Rn(e)},fromText:function(n,t){var e=(t||document).createTextNode(n)
return Rn(e)},fromDom:Rn,fromPoint:function(n,t,e){return f.from(n.dom.elementFromPoint(t,e)).map(Rn)}},On=function(n,t){var e=n.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},An=function(n){return 1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount},Bn=function(n,t){return n.dom===t.dom},En=function(n,t){return e=n.dom,r=t.dom,function(n,t,e){return 0!=(n.compareDocumentPosition(t)&e)}(e,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var e,r},In=function(n,t){return Tn().browser.isIE()?En(n,t):function(n,t){var e=n.dom,r=t.dom
return e!==r&&e.contains(r)}(n,t)},Pn=On,kn=Object.keys,Mn=Object.hasOwnProperty,Nn=function(n,t){for(var e=kn(n),r=0,o=e.length;r<o;r++){var u=e[r]
t(n[u],u)}},jn=function(n,t){return _n(n,(function(n,e){return{k:e,v:t(n,e)}}))},_n=function(n,t){var e={}
return Nn(n,(function(n,r){var o=t(n,r)
e[o.k]=o.v})),e},Wn=function(t,e){var r={}
return function(n,t,e,r){Nn(n,(function(n,o){(t(n,o)?e:r)(n,o)}))}(t,e,function(n){return function(t,e){n[e]=t}}(r),n),r},zn=function(n){return function(n,t){var e=[]
return Nn(n,(function(n,r){e.push(t(n,r))})),e}(n,(function(n){return n}))},Fn=function(n,t){return Ln(n,t)?f.from(n[t]):f.none()},Ln=function(n,t){return Mn.call(n,t)},Hn=["tfoot","thead","tbody","colgroup"],qn=function(n,t,e){return{element:n,rowspan:t,colspan:e}},Vn=function(n,t,e){return{element:n,cells:t,section:e}},Un=function(n,t){return{element:n,isNew:t}},$n=function(n,t){return{cells:n,section:t}},Gn=("undefined"!=typeof window?window:Function("return this;")(),function(n){return n.dom.nodeName.toLowerCase()}),Kn=function(n){return n.dom.nodeType},Xn=function(n){return function(t){return Kn(t)===n}},Yn=function(n){return 8===Kn(n)||"#comment"===Gn(n)},Jn=Xn(1),Qn=Xn(3),Zn=Xn(9),nt=Xn(11),tt=function(n){return Dn.fromDom(n.dom.ownerDocument)},et=function(n){return Zn(n)?n:tt(n)},rt=function(n){return f.from(n.dom.parentNode).map(Dn.fromDom)},ot=function(n,t){for(var e=b(t)?t:u,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,c=Dn.fromDom(i)
if(o.push(c),!0===e(c))break
r=i}return o},ut=function(n){return f.from(n.dom.previousSibling).map(Dn.fromDom)},it=function(n){return f.from(n.dom.nextSibling).map(Dn.fromDom)},ct=function(n){return D(n.dom.childNodes,Dn.fromDom)},at=function(n,t){var e=n.dom.childNodes
return f.from(e[t]).map(Dn.fromDom)},lt=b(Element.prototype.attachShadow)&&b(Node.prototype.getRootNode),ft=t(lt),st=lt?function(n){return Dn.fromDom(n.dom.getRootNode())}:et,mt=function(n){var t=st(n)
return nt(t)?f.some(t):f.none()},dt=function(n){return Dn.fromDom(n.dom.host)},gt=function(n){if(ft()&&h(n.target)){var t=Dn.fromDom(n.target)
if(Jn(t)&&pt(t)&&n.composed&&n.composedPath){var e=n.composedPath()
if(e)return 0===(r=e).length?f.none():f.some(r[0])}}var r
return f.from(n.target)},pt=function(n){return h(n.dom.shadowRoot)},vt=function(n){var t=Qn(n)?n.dom.parentNode:n.dom
if(null==t||null===t.ownerDocument)return!1
var e,r,o=t.ownerDocument
return mt(Dn.fromDom(t)).fold((function(){return o.body.contains(t)}),(e=vt,r=dt,function(n){return e(r(n))}))},ht=function(n){var t=n.dom.body
if(null==t)throw new Error("Body is not available yet")
return Dn.fromDom(t)},bt=function(n,t){var e=[]
return O(ct(n),(function(n){t(n)&&(e=e.concat([n])),e=e.concat(bt(n,t))})),e},wt=function(n,t,e){return function(n,t,e){return A(ot(n,e),t)}(n,(function(n){return On(n,t)}),e)},yt=function(n,t){return function(n,t){return A(ct(n),t)}(n,(function(n){return On(n,t)}))},Ct=function(n,t){return function(n,t){var e=void 0===t?document:t.dom
return An(e)?[]:D(e.querySelectorAll(n),Dn.fromDom)}(t,n)}
function xt(n,t,e,r,o){return n(e,r)?f.some(e):b(o)&&o(e)?f.none():t(e,r,o)}var St=function(n,t,e){for(var r=n.dom,o=b(e)?e:u;r.parentNode;){r=r.parentNode
var i=Dn.fromDom(r)
if(t(i))return f.some(i)
if(o(i))break}return f.none()},Tt=function(n,t,e){return St(n,(function(n){return On(n,t)}),e)},Rt=function(n,t){return function(n,t){return I(n.dom.childNodes,(function(n){return t(Dn.fromDom(n))})).map(Dn.fromDom)}(n,(function(n){return On(n,t)}))},Dt=function(n,t){return function(n,t){var e=void 0===t?document:t.dom
return An(e)?f.none():f.from(e.querySelector(n)).map(Dn.fromDom)}(t,n)},Ot=function(n,t,e){return xt((function(n,t){return On(n,t)}),Tt,n,t,e)},At=function(n,t,e){if(!(d(e)||v(e)||w(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,e+"")},Bt=function(n,t,e){At(n.dom,t,e)},Et=function(n,t){var e=n.dom
Nn(t,(function(n,t){At(e,t,n)}))},It=function(n,t){var e=n.dom.getAttribute(t)
return null===e?void 0:e},Pt=function(n,t){return f.from(It(n,t))},kt=function(n,t){n.dom.removeAttribute(t)},Mt=function(n){return E(n.dom.attributes,(function(n,t){return n[t.name]=t.value,n}),{})},Nt=function(n){return void 0!==n.style&&b(n.style.getPropertyValue)},jt=function(n,t,e){if(!d(e))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",e,":: Element ",n),new Error("CSS value must be a string: "+e)
Nt(n)&&n.style.setProperty(t,e)},_t=function(n,t,e){var r=n.dom
jt(r,t,e)},Wt=function(n,t){var e=n.dom
Nn(t,(function(n,t){jt(e,t,n)}))},zt=function(n,t){var e=n.dom,r=window.getComputedStyle(e).getPropertyValue(t)
return""!==r||vt(n)?r:Ft(e,t)},Ft=function(n,t){return Nt(n)?n.style.getPropertyValue(t):""},Lt=function(n,t){var e=n.dom,r=Ft(e,t)
return f.from(r).filter((function(n){return n.length>0}))},Ht=function(n,t){(function(n,t){Nt(n)&&n.style.removeProperty(t)})(n.dom,t),Pt(n,"style").map(Q).is("")&&kt(n,"style")},qt=function(n,t,e){return void 0===e&&(e=0),Pt(n,t).map((function(n){return parseInt(n,10)})).getOr(e)},Vt=function(n,t){return qt(n,t,1)},Ut=function(n){return Vt(n,"colspan")>1},$t=function(n){return Vt(n,"rowspan")>1},Gt=function(n,t){return parseInt(zt(n,t),10)},Kt=t(10),Xt=t(10),Yt=function(n,t){return Jt(n,t,i)},Jt=function(n,t,e){return M(ct(n),(function(n){return On(n,t)?e(n)?[n]:[]:Jt(n,t,e)}))},Qt=function(n,t){return function(n,t,e){return void 0===e&&(e=u),e(t)?f.none():S(n,Gn(t))?f.some(t):Tt(t,n.join(","),(function(n){return On(n,"table")||e(n)}))}(["td","th"],n,t)},Zt=function(n){return Yt(n,"th,td")},ne=function(n){return Yt(n,"col")},te=function(n,t){return Ot(n,"table",t)},ee=function(n){return Yt(n,"tr")},re=function(n,t){return D(n,(function(n){if("colgroup"===Gn(n)){var e=D(ne(n),(function(n){var t=qt(n,"span",1)
return qn(n,1,t)}))
return Vn(n,e,"colgroup")}e=D(Zt(n),(function(n){var t=qt(n,"rowspan",1),e=qt(n,"colspan",1)
return qn(n,t,e)}))
return Vn(n,e,t(n))}))},oe=function(n){return rt(n).map((function(n){var t=Gn(n)
return function(n){return S(Hn,n)}(t)?t:"tbody"})).getOr("tbody")},ue=function(n){var t=ee(n),e=F(function(n){return Yt(n,"colgroup")}(n),t)
return re(e,oe)},ie=function(n,t){return n+","+t},ce=function(n,t){var e=M(n.all,(function(n){return n.cells}))
return A(e,t)},ae=function(n){var t={},e=[],r={},o=0,u=0,i=0
return O(n,(function(n){if("colgroup"===n.section)r=function(n){var t={},e=0
return O(n.cells,(function(n){var r=n.colspan
R(r,(function(o){var u=e+o
t[u]=function(n,t,e){return{element:n,colspan:t,column:e}}(n.element,r,u)})),e+=r})),t}(n)
else{var c=[]
O(n.cells,(function(n){for(var e=0;void 0!==t[ie(i,e)];)e++
for(var r=function(n,t,e,r,o){return{element:n,rowspan:t,colspan:e,row:r,column:o}}(n.element,n.rowspan,n.colspan,i,e),o=0;o<n.colspan;o++)for(var a=0;a<n.rowspan;a++){var l=e+o,f=ie(i+a,l)
t[f]=r,u=Math.max(u,l+1)}c.push(r)})),o++,e.push(Vn(n.element,c,n.section)),i++}})),{grid:function(n,t){return{rows:n,columns:t}}(o,u),access:t,all:e,columns:r}},le={fromTable:function(n){var t=ue(n)
return ae(t)},generate:ae,getAt:function(n,t,e){var r=n.access[ie(t,e)]
return void 0!==r?f.some(r):f.none()},findItem:function(n,t,e){var r=ce(n,(function(n){return e(t,n.element)}))
return r.length>0?f.some(r[0]):f.none()},filterItems:ce,justCells:function(n){return M(n.all,(function(n){return n.cells}))},justColumns:function(n){return zn(n.columns)},hasColumns:function(n){return kn(n.columns).length>0},getColumnAt:function(n,t){return f.from(n.columns[t])}},fe=function(n,t){var e=t.column,r=t.column+t.colspan-1,o=t.row,u=t.row+t.rowspan-1
return e<=n.finishCol&&r>=n.startCol&&o<=n.finishRow&&u>=n.startRow},se=function(n,t){return t.column>=n.startCol&&t.column+t.colspan-1<=n.finishCol&&t.row>=n.startRow&&t.row+t.rowspan-1<=n.finishRow},me=function(n,t,e){var r=le.findItem(n,t,Bn),o=le.findItem(n,e,Bn)
return r.bind((function(n){return o.map((function(t){return e=n,r=t,o=Math.min(e.row,r.row),u=Math.min(e.column,r.column),i=Math.max(e.row+e.rowspan-1,r.row+r.rowspan-1),c=Math.max(e.column+e.colspan-1,r.column+r.colspan-1),{startRow:o,startCol:u,finishRow:i,finishCol:c}
var e,r,o,u,i,c}))}))},de=function(n,t,e){return me(n,t,e).bind((function(t){return function(n,t){for(var e=!0,o=r(se,t),u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++)e=e&&le.getAt(n,u,i).exists(o)
return e?f.some(t):f.none()}(n,t)}))},ge=function(n,t,e){return me(n,t,e).map((function(t){var e=le.filterItems(n,r(fe,t))
return D(e,(function(n){return n.element}))}))},pe=function(n,t){return le.findItem(n,t,(function(n,t){return In(t,n)})).map((function(n){return n.element}))},ve=function(n,t,e){return te(n).bind((function(r){return function(n,t,e,r){return le.findItem(n,t,Bn).bind((function(t){var o=e>0?t.row+t.rowspan-1:t.row,u=r>0?t.column+t.colspan-1:t.column
return le.getAt(n,o+e,u+r).map((function(n){return n.element}))}))}(we(r),n,t,e)}))},he=function(n,t,e){var r=we(n)
return ge(r,t,e)},be=function(n,t,e,r,o){var u=we(n),i=Bn(n,e)?f.some(t):pe(u,t),c=Bn(n,o)?f.some(r):pe(u,r)
return i.bind((function(n){return c.bind((function(t){return ge(u,n,t)}))}))},we=le.fromTable,ye=function(n,t){rt(n).each((function(e){e.dom.insertBefore(t.dom,n.dom)}))},Ce=function(n,t){it(n).fold((function(){rt(n).each((function(n){Se(n,t)}))}),(function(n){ye(n,t)}))},xe=function(n,t){(function(n){return at(n,0)})(n).fold((function(){Se(n,t)}),(function(e){n.dom.insertBefore(t.dom,e.dom)}))},Se=function(n,t){n.dom.appendChild(t.dom)},Te=function(n,t){ye(n,t),Se(t,n)},Re=function(n,t){O(t,(function(e,r){var o=0===r?n:t[r-1]
Ce(o,e)}))},De=function(n,t){O(t,(function(t){Se(n,t)}))},Oe=function(n){n.dom.textContent="",O(ct(n),(function(n){Ae(n)}))},Ae=function(n){var t=n.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},Be=function(n){var t,e=ct(n)
e.length>0&&(t=n,O(e,(function(n){ye(t,n)}))),Ae(n)}
var Ee=function(n,t){var e=function(t){return n(t)?f.from(t.dom.nodeValue):f.none()}
return{get:function(r){if(!n(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return e(r).getOr("")},getOption:e,set:function(e,r){if(!n(e))throw new Error("Can only set raw "+t+" value of a "+t+" node")
e.dom.nodeValue=r}}}(Qn,"text"),Ie=function(n){return Ee.get(n)},Pe=function(n){return Ee.getOption(n)},ke=function(n,t){return Ee.set(n,t)},Me=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
function Ne(){return{up:t({selector:Tt,closest:Ot,predicate:St,all:ot}),down:t({selector:Ct,predicate:bt}),styles:t({get:zt,getRaw:Lt,set:_t,remove:Ht}),attrs:t({get:It,set:Bt,remove:kt,copyTo:function(n,t){var e=Mt(n)
Et(t,e)}}),insert:t({before:ye,after:Ce,afterAll:Re,append:Se,appendAll:De,prepend:xe,wrap:Te}),remove:t({unwrap:Be,remove:Ae}),create:t({nu:Dn.fromTag,clone:function(n){return Dn.fromDom(n.dom.cloneNode(!1))},text:Dn.fromText}),query:t({comparePosition:function(n,t){return n.dom.compareDocumentPosition(t.dom)},prevSibling:ut,nextSibling:it}),property:t({children:ct,name:Gn,parent:rt,document:function(n){return et(n).dom},isText:Qn,isComment:Yn,isElement:Jn,getText:Ie,setText:ke,isBoundary:function(n){return!!Jn(n)&&("body"===Gn(n)||S(Me,Gn(n)))},isEmptyTag:function(n){return!!Jn(n)&&S(["br","img","hr","input"],Gn(n))},isNonEditable:function(n){return Jn(n)&&"false"===It(n,"contenteditable")}}),eq:Bn,is:Pn}}var je=function(n,t,e,r){var o=t(n,e)
return B(r,(function(e,r){var o=t(n,r)
return _e(n,e,o)}),o)},_e=function(n,t,e){return t.bind((function(t){return e.filter(r(n.eq,t))}))},We=function(n,t,e){return e.length>0?function(n,t,e,r){return r(n,t,e[0],e.slice(1))}(n,t,e,je):f.none()},ze=function(n,t,e,o){void 0===o&&(o=u)
var i=[t].concat(n.up().all(t)),c=[e].concat(n.up().all(e)),a=function(n){return P(n,o).fold((function(){return n}),(function(t){return n.slice(0,t+1)}))},l=a(i),f=a(c),s=I(l,(function(t){return T(f,function(n,t){return r(n.eq,t)}(n,t))}))
return{firstpath:l,secondpath:f,shared:s}},Fe=Ne(),Le=function(n,t){return We(Fe,(function(t,e){return n(e)}),t)},He=function(n){return Tt(n,"table")},qe=function(n,t,e){var r=function(n){return function(t){return void 0!==e&&e(t)||Bn(t,n)}}
return Bn(n,t)?f.some({boxes:f.some([n]),start:n,finish:t}):He(n).bind((function(o){return He(t).bind((function(u){if(Bn(o,u))return f.some({boxes:he(o,n,t),start:n,finish:t})
if(In(o,u)){var i=(c=wt(t,"td,th",r(o))).length>0?c[c.length-1]:t
return f.some({boxes:be(o,n,o,t,u),start:n,finish:i})}if(In(u,o)){var c,a=(c=wt(n,"td,th",r(u))).length>0?c[c.length-1]:n
return f.some({boxes:be(u,n,o,t,u),start:n,finish:a})}return function(n,t,e){return ze(Fe,n,t,e)}(n,t).shared.bind((function(i){return Ot(i,"table",e).bind((function(e){var i=wt(t,"td,th",r(e)),c=i.length>0?i[i.length-1]:t,a=wt(n,"td,th",r(e)),l=a.length>0?a[a.length-1]:n
return f.some({boxes:be(e,n,o,t,u),start:l,finish:c})}))}))}))}))},Ve=function(n,t){var e=Ct(n,t)
return e.length>0?f.some(e):f.none()},Ue=function(n,t,e){return Dt(n,t).bind((function(t){return Dt(n,e).bind((function(n){return Le(He,[t,n]).map((function(e){return{first:t,last:n,table:e}}))}))}))},$e=function(n,t,e,r,o){return function(n,t){return I(n,(function(n){return On(n,t)}))}(n,o).bind((function(n){return ve(n,t,e).bind((function(n){return function(n,t){return Tt(n,"table").bind((function(e){return Dt(e,t).bind((function(t){return qe(t,n).bind((function(n){return n.boxes.map((function(t){return{boxes:t,start:n.start,finish:n.finish}}))}))}))}))}(n,r)}))}))},Ge=function(n,t){return Ve(n,t)},Ke=function(n,t,e){return Ue(n,t,e).bind((function(t){var e=function(t){return Bn(n,t)},r="thead,tfoot,tbody,table",o=Tt(t.first,r,e),u=Tt(t.last,r,e)
return o.bind((function(n){return u.bind((function(e){return Bn(n,e)?function(n,t,e){var r=we(n)
return de(r,t,e)}(t.table,t.first,t.last):f.none()}))}))}))},Xe=function(n){if(!p(n))throw new Error("cases must be an array")
if(0===n.length)throw new Error("there must be at least one case")
var t=[],e={}
return O(n,(function(r,o){var u=kn(r)
if(1!==u.length)throw new Error("one and only one name per case")
var i=u[0],c=r[i]
if(void 0!==e[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!p(c))throw new Error("case arguments must be an array")
t.push(i),e[i]=function(){var e=arguments.length
if(e!==c.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+c.length+" ("+c+"), got "+e)
for(var r=new Array(e),u=0;u<r.length;u++)r[u]=arguments[u]
var a=function(n){var e=kn(n)
if(t.length!==e.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+e.join(","))
if(!N(t,(function(n){return S(e,n)})))throw new Error("Not all branches were specified when using match. Specified: "+e.join(", ")+"\nRequired: "+t.join(", "))
return n[i].apply(null,r)}
return{fold:function(){if(arguments.length!==n.length)throw new Error("Wrong number of arguments to fold. Expected "+n.length+", got "+arguments.length)
var t=arguments[o]
return t.apply(null,r)},match:a,log:function(n){console.log(n,{constructors:t,constructor:i,params:r})}}}})),e},Ye=Xe([{none:[]},{multiple:["elements"]},{single:["element"]}]),Je=function(n,t,e,r){return n.fold(t,e,r)},Qe=Ye.none,Ze=Ye.multiple,nr=Ye.single,tr=tinymce.util.Tools.resolve("tinymce.PluginManager"),er=function(n,t,e){var r=n[e].element,o=Dn.fromTag("td")
Se(o,Dn.fromTag("br")),(t?Se:xe)(r,o)},rr=function(n,t){var e=function(n){return On(n.element,t)},r=ue(n),o=le.generate(r),u=function(n,t){var e=n.grid.columns,r=n.grid.rows,o=e,u=0,i=0
return Nn(n.access,(function(n){if(t(n)){var e=n.row,c=e+n.rowspan-1,a=n.column,l=a+n.colspan-1
e<r?r=e:c>u&&(u=c),a<o?o=a:l>i&&(i=l)}})),function(n,t,e,r){return{minRow:n,minCol:t,maxRow:e,maxCol:r}}(r,o,u,i)}(o,e),i="th:not("+t+"),td:not("+t+")",c=Jt(n,"th,td",(function(n){return On(n,i)}))
return O(c,Ae),function(n,t,e,r){for(var o=t.grid.columns,u=t.grid.rows,i=0;i<u;i++)for(var c=!1,a=0;a<o;a++)i<e.minRow||i>e.maxRow||a<e.minCol||a>e.maxCol||(le.getAt(t,i,a).filter(r).isNone()?er(n,c,i):c=!0)}(r,o,u,e),function(n,t){var e=A(Yt(n,"tr"),(function(n){return 0===n.dom.childElementCount}))
O(e,Ae),t.minCol!==t.maxCol&&t.minRow!==t.maxRow||O(Yt(n,"th,td"),(function(n){kt(n,"rowspan"),kt(n,"colspan")})),kt(n,"width"),kt(n,"height"),Ht(n,"width"),Ht(n,"height")}(n,u),n},or=function(n){return"img"===Gn(n)?1:Pe(n).fold((function(){return ct(n).length}),(function(n){return n.length}))},ur=["img","br"],ir=function(n){return Pe(n).filter((function(n){return 0!==n.trim().length||n.indexOf(" ")>-1})).isSome()||S(ur,Gn(n))},cr=function(n){return t=ir,(e=function(n){for(var r=0;r<n.childNodes.length;r++){var o=Dn.fromDom(n.childNodes[r])
if(t(o))return f.some(o)
var u=e(n.childNodes[r])
if(u.isSome())return u}return f.none()})(n.dom)
var t,e},ar=function(n){return lr(n,ir)},lr=function(n,t){var e=function(n){for(var r=ct(n),o=r.length-1;o>=0;o--){var u=r[o]
if(t(u))return f.some(u)
var i=e(u)
if(i.isSome())return i}return f.none()}
return e(n)},fr=function(n,t){return Dn.fromDom(n.dom.cloneNode(t))},sr=function(n){return fr(n,!1)},mr=function(n){return fr(n,!0)},dr=function(n,t){var e=function(n,t){var e=Dn.fromTag(t),r=Mt(n)
return Et(e,r),e}(n,t),r=ct(mr(n))
return De(e,r),e},gr=function(){var n=Dn.fromTag("td")
return Se(n,Dn.fromTag("br")),n},pr=function(){return Dn.fromTag("col")},vr=function(){return Dn.fromTag("colgroup")},hr=function(n,t,e){var r=dr(n,t)
return Nn(e,(function(n,t){null===n?kt(r,t):Bt(r,t,n)})),r},br=function(n){return n},wr=function(n){return function(){return Dn.fromTag("tr",n.dom)}},yr=function(n,t,e){var r=function(n,t){var e,r,o,u
e=n.element,r=t,o=e.dom,u=r.dom,Nt(o)&&Nt(u)&&(u.style.cssText=o.style.cssText),Ht(t,"height"),1!==n.colspan&&Ht(n.element,"width")}
return{col:function(t){var e=tt(t.element),o=Dn.fromTag(Gn(t.element),e.dom)
return r(t,o),n(t.element,o),o},colgroup:vr,row:wr(t),cell:function(t){var o=tt(t.element),u=Dn.fromTag(Gn(t.element),o.dom),i=e.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"]),c=i.length>0?function(n,t,e){return cr(n).map((function(r){var o=e.join(","),u=wt(r,o,(function(t){return Bn(t,n)}))
return B(u,(function(n,t){var e=sr(t)
return kt(e,"contenteditable"),Se(n,e),e}),t)})).getOr(t)}(t.element,u,i):u
return Se(c,Dn.fromTag("br")),r(t,u),n(t.element,u),u},replace:hr,gap:gr}},Cr=function(n){return{col:pr,colgroup:vr,row:wr(n),cell:gr,replace:br,gap:gr}},xr=function(n){return D(n,Dn.fromDom)},Sr=function(n){return Je(n.get(),t([]),e,j)},Tr=function(n){var t=function(n,t){return Pt(n,t).exists((function(n){return parseInt(n,10)>1}))},e=Sr(n)
return e.length>0&&N(e,(function(n){return t(n,"rowspan")||t(n,"colspan")}))?f.some(e):f.none()},Rr=function(n,t,e){return Je(t.get(),f.none,(function(t){return t.length<=1?f.none():Ke(n,e.firstSelectedSelector,e.lastSelectedSelector).map((function(n){return{bounds:n,cells:t}}))}),f.none)},Dr="data-mce-selected",Or="data-mce-first-selected",Ar="data-mce-last-selected",Br={selected:Dr,selectedSelector:"td[data-mce-selected],th[data-mce-selected]",firstSelected:Or,firstSelectedSelector:"td[data-mce-first-selected],th[data-mce-first-selected]",lastSelected:Ar,lastSelectedSelector:"td[data-mce-last-selected],th[data-mce-last-selected]"},Er=function(n){return{element:n,mergable:f.none(),unmergable:f.none(),selection:[n]}},Ir=function(n,t,e){return{element:e,mergable:Rr(t,n,Br),unmergable:Tr(n),selection:Sr(n)}},Pr=function(t,e,r,o){t.on("BeforeGetContent",(function(r){!0===r.selection&&Je(e.get(),n,(function(n){r.preventDefault(),function(n){return te(n[0]).map(mr).map((function(n){return[rr(n,"[data-mce-selected]")]}))}(n).each((function(n){r.content="text"===r.format?function(n){return D(n,(function(n){return n.dom.innerText})).join("")}(n):function(n,t){return D(t,(function(t){return n.selection.serializer.serialize(t.dom,{})})).join("")}(t,n)}))}),n)})),t.on("BeforeSetContent",(function(n){!0===n.selection&&!0===n.paste&&f.from(t.dom.getParent(t.selection.getStart(),"th,td")).each((function(e){var u=Dn.fromDom(e)
te(u).each((function(e){var i,c,a,l,f=A((i=n.content,(a=(c||document).createElement("div")).innerHTML=i,ct(Dn.fromDom(a))),(function(n){return"meta"!==Gn(n)}))
if(1===f.length&&(l=f[0],"table"===Gn(l))){n.preventDefault()
var s=Dn.fromDom(t.getDoc()),m=Cr(s),d=function(n,t,e){return{element:n,clipboard:t,generators:e}}(u,f[0],m)
r.pasteCells(e,d).each((function(n){t.selection.setRng(n),t.focus(),o.clear(e)}))}}))}))}))},kr=Xe([{none:[]},{only:["index"]},{left:["index","next"]},{middle:["prev","index","next"]},{right:["prev","index"]}]),Mr=z({},kr),Nr=function(n,e,r,o,u){var i=n.slice(0),c=function(n,t){return 0===n.length?Mr.none():1===n.length?Mr.only(0):0===t?Mr.left(0,1):t===n.length-1?Mr.right(t-1,t):t>0&&t<n.length-1?Mr.middle(t-1,t,t+1):Mr.none()}(n,e),a=t(D(i,t(0)))
return c.fold(a,(function(n){return o.singleColumnWidth(i[n],r)}),(function(n,t){return u.calcLeftEdgeDeltas(i,n,t,r,o.minCellWidth(),o.isRelative)}),(function(n,t,e){return u.calcMiddleDeltas(i,n,t,e,r,o.minCellWidth(),o.isRelative)}),(function(n,t){return u.calcRightEdgeDeltas(i,n,t,r,o.minCellWidth(),o.isRelative)}))},jr=function(n){var t=n.grid,r=R(t.columns,e),o=R(t.rows,e)
return D(r,(function(t){return _r((function(){return M(o,(function(e){return le.getAt(n,e,t).filter((function(n){return n.column===t})).toArray()}))}),(function(n){return 1===n.colspan}),(function(){return le.getAt(n,0,t)}))}))},_r=function(n,t,e){var r=n()
return I(r,t).orThunk((function(){return f.from(r[0]).orThunk(e)})).map((function(n){return n.element}))},Wr=function(n){var r=n.grid,o=R(r.rows,e),u=R(r.columns,e)
return D(o,(function(e){return _r((function(){return M(u,(function(r){return le.getAt(n,e,r).filter((function(n){return n.row===e})).fold(t([]),(function(n){return[n]}))}))}),(function(n){return 1===n.rowspan}),(function(){return le.getAt(n,e,0)}))}))},zr=function(n,t){if(t<0||t>=n.length-1)return f.none()
var e=n[t].fold((function(){var e=function(n){var t=y.call(n,0)
return t.reverse(),t}(n.slice(0,t))
return W(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return f.some({value:n,delta:0})})),r=n[t+1].fold((function(){var e=n.slice(t+1)
return W(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return f.some({value:n,delta:1})}))
return e.bind((function(n){return r.map((function(t){var e=t.delta+n.delta
return Math.abs(t.value-n.value)/e}))}))},Fr=function(n,t){return function(e){return"rtl"===Lr(e)?t:n}},Lr=function(n){return"rtl"===zt(n,"direction")?"rtl":"ltr"}
function Hr(n,t){var e=function(e){var r=t(e)
if(r<=0||null===r){var o=zt(e,n)
return parseFloat(o)||0}return r},r=function(n,t){return E(t,(function(t,e){var r=zt(n,e),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,e){if(!w(e)&&!e.match(/^[0-9]+$/))throw new Error(n+".set accepts only positive integer values. Value was "+e)
var r=t.dom
Nt(r)&&(r.style[n]=e+"px")},get:e,getOuter:e,aggregate:r,max:function(n,t,e){var o=r(n,e)
return t>o?t-o:0}}}var qr,Vr,Ur,$r,Gr=Hr("height",(function(n){var t=n.dom
return vt(n)?t.getBoundingClientRect().height:t.offsetHeight})),Kr=function(n){return Gr.get(n)},Xr=function(n){return Gr.getOuter(n)},Yr=function(n,t){return{left:n,top:t,translate:function(e,r){return Yr(n+e,t+r)}}},Jr=Yr,Qr=function(n,t){return void 0!==n?n:void 0!==t?t:0},Zr=function(n){var t=n.dom.ownerDocument,e=t.body,r=t.defaultView,o=t.documentElement
if(e===n.dom)return Jr(e.offsetLeft,e.offsetTop)
var u=Qr(null==r?void 0:r.pageYOffset,o.scrollTop),i=Qr(null==r?void 0:r.pageXOffset,o.scrollLeft),c=Qr(o.clientTop,e.clientTop),a=Qr(o.clientLeft,e.clientLeft)
return no(n).translate(i-a,u-c)},no=function(n){var t=n.dom,e=t.ownerDocument.body
return e===t?Jr(e.offsetLeft,e.offsetTop):vt(n)?function(n){var t=n.getBoundingClientRect()
return Jr(t.left,t.top)}(t):Jr(0,0)},to=Hr("width",(function(n){return n.dom.offsetWidth})),eo=function(n){return to.get(n)},ro=function(n){return to.getOuter(n)},oo=function(n,t){return{row:n,y:t}},uo=function(n,t){return{col:n,x:t}},io=function(n){return Zr(n).left+ro(n)},co=function(n){return Zr(n).left},ao=function(n,t){return uo(n,co(t))},lo=function(n,t){return uo(n,io(t))},fo=function(n){return Zr(n).top},so=function(n,t){return oo(n,fo(t))},mo=function(n,t){return oo(n,fo(t)+Xr(t))},go=function(n,t,e){if(0===e.length)return[]
var r=D(e.slice(1),(function(t,e){return t.map((function(t){return n(e,t)}))})),o=e[e.length-1].map((function(n){return t(e.length-1,n)}))
return r.concat([o])},po={delta:e,positions:function(n){return go(so,mo,n)},edge:fo},vo=Fr({delta:e,edge:co,positions:function(n){return go(ao,lo,n)}},{delta:function(n){return-n},edge:io,positions:function(n){return go(lo,ao,n)}}),ho={delta:function(n,t){return vo(t).delta(n,t)},positions:function(n,t){return vo(t).positions(n,t)},edge:function(n){return vo(n).edge(n)}},bo={unsupportedLength:["em","ex","cap","ch","ic","rem","lh","rlh","vw","vh","vi","vb","vmin","vmax","cm","mm","Q","in","pc","pt","px"],fixed:["px","pt"],relative:["%"],empty:[""]},wo=(Vr="[eE][+-]?[0-9]+",$r=["Infinity","[0-9]+\\."+(Ur=function(n){return"(?:"+n+")?"})(qr="[0-9]+")+Ur(Vr),"\\.[0-9]+"+Ur(Vr),qr+Ur(Vr)].join("|"),new RegExp("^([+-]?(?:"+$r+"))(.*)$")),yo=function(n,t){return f.from(wo.exec(n)).bind((function(n){var e=Number(n[1]),r=n[2]
return function(n,t){return T(t,(function(t){return T(bo[t],(function(t){return n===t}))}))}(r,t)?f.some({value:e,unit:r}):f.none()}))},Co=function(){var n=Tn().browser
return n.isIE()||n.isEdge()},xo=function(n,t,e){return function(n,t){var e=parseFloat(n)
return isNaN(e)?t:e}(zt(n,t),e)},So=function(n){return Co()?function(n){var t=n.dom.getBoundingClientRect().height
return"border-box"===zt(n,"box-sizing")?t:t-xo(n,"padding-top",0)-xo(n,"padding-bottom",0)-(xo(n,"border-top-width",0)+xo(n,"border-bottom-width",0))}(n):xo(n,"height",Kr(n))},To=function(n){return Co()?function(n){var t=n.dom.getBoundingClientRect().width
return"border-box"===zt(n,"box-sizing")?t:t-xo(n,"padding-left",0)-xo(n,"padding-right",0)-(xo(n,"border-left-width",0)+xo(n,"border-right-width",0))}(n):xo(n,"width",eo(n))},Ro=/(\d+(\.\d+)?)%/,Do=/(\d+(\.\d+)?)px|em/,Oo=function(n,t){var e,r=(e=n,f.from(e.dom.offsetParent).map(Dn.fromDom)).getOr(ht(tt(n)))
return t(n)/t(r)*100},Ao=function(n,t){_t(n,"width",t+"px")},Bo=function(n,t){_t(n,"width",t+"%")},Eo=function(n,t){_t(n,"height",t+"px")},Io=function(n,t,e,r){var o=parseInt(n,10)
return J(n,"%")&&"table"!==Gn(t)?function(n,t,e,r){var o=te(n).map((function(n){var r=e(n)
return Math.floor(t/100*r)})).getOr(t)
return r(n,o),o}(t,o,e,r):o},Po=function(n){var t=function(n){return Lt(n,"height").getOrThunk((function(){return So(n)+"px"}))}(n)
return t?Io(t,n,Kr,Eo):Kr(n)},ko=function(n){return Lt(n,"width").fold((function(){return f.from(It(n,"width"))}),(function(n){return f.some(n)}))},Mo=function(n,t){return n/t.pixelWidth()*100},No=function(n,t){return ko(n).fold((function(){var e=eo(n)
return Mo(e,t)}),(function(e){return function(n,t,e){var r=Ro.exec(t)
if(null!==r)return parseFloat(r[1])
var o=To(n)
return Mo(o,e)}(n,e,t)}))},jo=function(n,t){return ko(n).fold((function(){return To(n)}),(function(e){return function(n,t,e){var r=Do.exec(t)
if(null!==r)return parseInt(r[1],10)
var o=Ro.exec(t)
return null!==o?function(n,t){return n/100*t.pixelWidth()}(parseFloat(o[1]),e):To(n)}(n,e,t)}))},_o=function(n){return function(n,t,e){return e(n)/Vt(n,t)}(n,"rowspan",Po)},Wo=function(n,t,e){_t(n,"width",t+e)},zo=function(n){return Oo(n,eo)+"%"},Fo=t(Ro),Lo=t(Do),Ho=function(n,t,e){return Lt(n,t).fold((function(){return e(n)+"px"}),(function(n){return n}))},qo=function(n,t){return Ho(n,"width",(function(n){return jo(n,t)}))},Vo=function(n){return Ho(n,"height",_o)},Uo=function(n,t,e,r){var u=le.hasColumns(n)?function(n){return D(le.justColumns(n),(function(n){return f.from(n.element)}))}(n):jr(n),i=D(u,(function(n){return n.map(ho.edge)}))
return D(u,(function(n,u){return n.filter(o(Ut)).fold((function(){var n=zr(i,u)
return e(n)}),(function(n){return t(n,r)}))}))},$o=function(n){return n.map((function(n){return n+"px"})).getOr("")},Go=function(n,t){return Uo(n,No,(function(n){return n.fold((function(){return t.minCellWidth()}),(function(n){return n/t.pixelWidth()*100}))}),t)},Ko=function(n,t){return Uo(n,jo,(function(n){return n.getOrThunk(t.minCellWidth)}),t)},Xo=function(n,t,e,r){var u=Wr(n),i=D(u,(function(n){return n.map(t.edge)}))
return D(u,(function(n,t){return n.filter(o($t)).fold((function(){var n=zr(i,t)
return r(n)}),(function(n){return e(n)}))}))},Yo=function(n,t,e){for(var r=0,o=n;o<t;o++)r+=void 0!==e[o]?e[o]:0
return r},Jo=function(n,t){var e=le.justCells(n)
return D(e,(function(n){var e=Yo(n.row,n.row+n.rowspan,t)
return{element:n.element,height:e,rowspan:n.rowspan}}))},Qo=function(n,t){return le.hasColumns(n)?function(n,t){var e=le.justColumns(n)
return D(e,(function(n,e){return{element:n.element,width:t[e],colspan:n.colspan}}))}(n,t):function(n,t){var e=le.justCells(n)
return D(e,(function(n){var e=Yo(n.column,n.column+n.colspan,t)
return{element:n.element,width:e,colspan:n.colspan}}))}(n,t)},Zo=function(n,t,e){var r=Qo(n,t)
O(r,(function(n){e.setElementWidth(n.element,n.width)}))},nu=function(n,t,e,r,o){var u=le.fromTable(n),i=o.getCellDelta(t),c=o.getWidths(u,o),a=e===u.grid.columns-1,l=r.clampTableDelta(c,e,i,o.minCellWidth(),a),f=Nr(c,e,l,o,r),s=D(f,(function(n,t){return n+c[t]}))
Zo(u,s,o),r.resizeTable(o.adjustTableWidth,l,a)},tu=function(n,t,e,r){var o=le.fromTable(n),u=function(n,t){return Xo(n,t,_o,(function(n){return n.getOrThunk(Xt)}))}(o,r),i=D(u,(function(n,r){return e===r?Math.max(t+n,Xt()):n})),c=Jo(o,i),a=function(n,t){return D(n.all,(function(n,e){return{element:n.element,height:t[e]}}))}(o,i)
O(a,(function(n){Eo(n.element,n.height)})),O(c,(function(n){Eo(n.element,n.height)}))
var l=B(i,(function(n,t){return n+t}),0)
Eo(n,l)},eu=function(n){return D(n,t(0))},ru=function(n,t,e,r,o){return o(n.slice(0,t)).concat(r).concat(o(n.slice(e)))},ou=function(n){return function(t,e,r,o){if(n(r)){var u=Math.max(o,t[e]-Math.abs(r)),i=Math.abs(u-t[e])
return r>=0?i:-i}return r}},uu=ou((function(n){return n<0})),iu=ou(i),cu=function(){var n=function(n,t,e,r){var o=(100+e)/100,u=Math.max(r,(n[t]+e)/o)
return D(n,(function(n,e){return(e===t?u:n/o)-n}))},t=function(t,e,r,o,u,i){return i?n(t,e,o,u):function(n,t,e,r,o){var u=uu(n,t,r,o)
return ru(n,t,e+1,[u,0],eu)}(t,e,r,o,u)}
return{resizeTable:function(n,t){return n(t)},clampTableDelta:uu,calcLeftEdgeDeltas:t,calcMiddleDeltas:function(n,e,r,o,u,i,c){return t(n,r,o,u,i,c)},calcRightEdgeDeltas:function(t,e,r,o,u,i){if(i)return n(t,r,o,u)
var c=uu(t,r,o,u)
return eu(t.slice(0,r)).concat([c])}}},au=function(n){var e=f.from(n.dom.documentElement).map(Dn.fromDom).getOr(n)
return{parent:t(e),view:t(n),origin:t(Jr(0,0))}},lu=function(n,e){return{parent:t(e),view:t(n),origin:t(Jr(0,0))}},fu=Xe([{invalid:["raw"]},{pixels:["value"]},{percent:["value"]}]),su=function(n,t,e){var r=e.substring(0,e.length-n.length),o=parseFloat(r)
return r===o.toString()?t(o):fu.invalid(e)},mu=z(z({},fu),{from:function(n){return J(n,"%")?su("%",fu.percent,n):J(n,"px")?su("px",fu.pixels,n):fu.invalid(n)}}),du=function(n,t,e){return n.fold((function(){return t}),(function(n){return function(n,t,e){var r=e/t
return D(n,(function(n){return mu.from(n).fold((function(){return n}),(function(n){return n*r+"px"}),(function(n){return n/100*e+"px"}))}))}(t,e,n)}),(function(n){return function(n,t){return D(n,(function(n){return mu.from(n).fold((function(){return n}),(function(n){return n/t*100+"%"}),(function(n){return n+"%"}))}))}(t,e)}))},gu=function(n,e,r){var o=mu.from(r),u=N(n,(function(n){return"0px"===n}))?function(n,e){var r=n.fold((function(){return t("")}),(function(n){return t(n/e+"px")}),(function(){return t(100/e+"%")}))
return R(e,r)}(o,n.length):du(o,n,e)
return hu(u)},pu=function(n,r){return 0===n.length?r:B(n,(function(n,r){return mu.from(r).fold(t(0),e,e)+n}),0)},vu=function(n,e){return mu.from(n).fold(t(n),(function(n){return n+e+"px"}),(function(n){return n+e+"%"}))},hu=function(n){if(0===n.length)return n
var t=B(n,(function(n,t){var e=mu.from(t).fold((function(){return{value:t,remainder:0}}),(function(n){return function(n,t){var e=Math.floor(n)
return{value:e+t,remainder:n-e}}(n,"px")}),(function(n){return{value:n+"%",remainder:0}}))
return{output:[e.value].concat(n.output),remainder:n.remainder+e.remainder}}),{output:[],remainder:0}),e=t.output
return e.slice(0,e.length-1).concat([vu(e[e.length-1],Math.round(t.remainder))])},bu=mu.from,wu=function(n){return bu(n).fold(t("px"),t("px"),t("%"))},yu=function(n,t,e,r){var o=le.fromTable(n),u=o.all,i=le.justCells(o),c=le.justColumns(o)
t.each((function(t){var e=wu(t),u=eo(n),a=function(n,t){return Uo(n,qo,$o,t)}(o,r),l=gu(a,u,t)
le.hasColumns(o)?function(n,t,e){O(t,(function(t,r){var o=pu([n[r]],Kt())
_t(t.element,"width",o+e)}))}(l,c,e):function(n,t,e){O(t,(function(t){var r=n.slice(t.column,t.colspan+t.column),o=pu(r,Kt())
_t(t.element,"width",o+e)}))}(l,i,e),_t(n,"width",t)})),e.each((function(t){var e=wu(t),r=Kr(n),c=function(n,t){return Xo(n,t,Vo,$o)}(o,po);(function(n,t,e,r){O(e,(function(t){var e=n.slice(t.row,t.rowspan+t.row),o=pu(e,Xt())
_t(t.element,"height",o+r)})),O(t,(function(t,e){_t(t.element,"height",n[e])}))})(gu(c,r,t),u,i,e),_t(n,"height",t)}))},Cu=function(n){return ko(n).exists((function(n){return Ro.test(n)}))},xu=function(n){return ko(n).exists((function(n){return Do.test(n)}))},Su=function(n){return ko(n).isNone()},Tu=zo,Ru=function(n){return le.fromTable(n).grid},Du=function(n){var t=[]
return{bind:function(n){if(void 0===n)throw new Error("Event bind error: undefined handler")
t.push(n)},unbind:function(n){t=A(t,(function(t){return t!==n}))},trigger:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o={}
O(n,(function(n,t){o[n]=e[t]})),O(t,(function(n){n(o)}))}}},Ou=function(n){return{registry:jn(n,(function(n){return{bind:n.bind,unbind:n.unbind}})),trigger:jn(n,(function(n){return n.trigger}))}},Au=function(n){return n.slice(0).sort()},Bu=function(n,t,e){if(0===t.length)throw new Error("You must specify at least one required field.")
var r
return function(n,t){if(!p(t))throw new Error("The "+n+" fields must be an array. Was: "+t+".")
O(t,(function(t){if(!d(t))throw new Error("The value "+t+" in the "+n+" fields was not a string.")}))}("required",t),r=Au(t),I(r,(function(n,t){return t<r.length-1&&n===r[t+1]})).each((function(n){throw new Error("The field: "+n+" occurs more than once in the combined fields: ["+r.join(", ")+"].")})),function(r){var o=kn(r)
N(t,(function(n){return S(o,n)}))||function(n,t){throw new Error("All required keys ("+Au(n).join(", ")+") were not specified. Specified keys were: "+Au(t).join(", ")+".")}(t,o),n(t,o)
var u=A(t,(function(n){return!e.validate(r[n],n)}))
return u.length>0&&function(n,t){throw new Error("All values need to be of type: "+t+". Keys ("+Au(n).join(", ")+") were not.")}(u,e.label),r}},Eu=function(n,t){var e=A(t,(function(t){return!S(n,t)}))
e.length>0&&function(n){throw new Error("Unsupported keys for object: "+Au(n).join(", "))}(e)},Iu=function(n){return function(n,t){return Bu(n,t,{validate:b,label:"function"})}(Eu,n)},Pu=Iu(["compare","extract","mutate","sink"]),ku=Iu(["element","start","stop","destroy"]),Mu=Iu(["forceDrop","drop","move","delayDrop"])
function Nu(){var n=f.none(),t=Ou({move:Du(["info"])})
return{onEvent:function(e,r){r.extract(e).each((function(e){(function(t,e){var r=n.map((function(n){return t.compare(n,e)}))
return n=f.some(e),r})(r,e).each((function(n){t.trigger.move(n)}))}))},reset:function(){n=f.none()},events:t.registry}}function ju(){var t={onEvent:n,reset:n},e=Nu(),r=t
return{on:function(){r.reset(),r=e},off:function(){r.reset(),r=t},isOn:function(){return r===e},onEvent:function(n,t){r.onEvent(n,t)},events:e.events}}var _u=function(n,t,e){var r,o,u,i=!1,c=Ou({start:Du([]),stop:Du([])}),a=ju(),l=function(){m.stop(),a.isOn()&&(a.off(),c.trigger.stop())},f=(r=l,o=200,u=null,{cancel:function(){null!==u&&(clearTimeout(u),u=null)},throttle:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]
null!==u&&clearTimeout(u),u=setTimeout((function(){r.apply(null,n),u=null}),o)}})
a.events.move.bind((function(e){t.mutate(n,e.info)}))
var s=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
i&&n.apply(null,t)}},m=t.sink(Mu({forceDrop:l,drop:s(l),move:s((function(n){f.cancel(),a.onEvent(n,t)})),delayDrop:s(f.throttle)}),e)
return{element:m.element,go:function(n){m.start(n),a.on(),c.trigger.start()},on:function(){i=!0},off:function(){i=!1},destroy:function(){m.destroy()},events:c.registry}},Wu=function(n){var t,e,r=Dn.fromDom(gt(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(t=u,e=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t(e.apply(null,n))})
return function(n,t,e,r,o,u,i){return{target:n,x:t,y:e,stop:r,prevent:o,kill:u,raw:i}}(r,n.clientX,n.clientY,o,u,i,n)},zu=function(n,t,e,o,u){var i=function(n,t){return function(e){n(e)&&t(Wu(e))}}(e,o)
return n.dom.addEventListener(t,i,u),{unbind:r(Fu,n,t,i,u)}},Fu=function(n,t,e,r){n.dom.removeEventListener(t,e,r)},Lu=i,Hu=function(n,t,e){return function(n,t,e,r){return zu(n,t,e,r,!1)}(n,t,Lu,e)},qu=Wu,Vu=function(n,t){var e=It(n,t)
return void 0===e||""===e?[]:e.split(" ")},Uu=function(n){return void 0!==n.dom.classList},$u=function(n,t){return function(n,t,e){var r=Vu(n,t).concat([e])
return Bt(n,t,r.join(" ")),!0}(n,"class",t)},Gu=function(n,t){Uu(n)?n.dom.classList.add(t):$u(n,t)},Ku=function(n,t){return Uu(n)&&n.dom.classList.contains(t)},Xu=function(n){var t=n.replace(/\./g,"-")
return{resolve:function(n){return t+"-"+n}}},Yu=Xu("ephox-dragster"),Ju=Yu.resolve,Qu=Pu({compare:function(n,t){return Jr(t.left-n.left,t.top-n.top)},extract:function(n){return f.some(Jr(n.x,n.y))},sink:function(n,t){var e=function(n){var t=z({layerClass:Ju("blocker")},n),e=Dn.fromTag("div")
return Bt(e,"role","presentation"),Wt(e,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),Gu(e,Ju("blocker")),Gu(e,t.layerClass),{element:function(){return e},destroy:function(){Ae(e)}}}(t),r=Hu(e.element(),"mousedown",n.forceDrop),o=Hu(e.element(),"mouseup",n.drop),u=Hu(e.element(),"mousemove",n.move),i=Hu(e.element(),"mouseout",n.delayDrop)
return ku({element:e.element,start:function(n){Se(n,e.element())},stop:function(){Ae(e.element())},destroy:function(){e.destroy(),o.unbind(),u.unbind(),i.unbind(),r.unbind()}})},mutate:function(n,t){n.mutate(t.left,t.top)}}),Zu=function(n){return"true"===It(n,"contenteditable")},ni=Xu("ephox-snooker"),ti=ni.resolve,ei=function(){var n=Ou({drag:Du(["xDelta","yDelta","target"])}),t=f.none(),e=function(){var n=Ou({drag:Du(["xDelta","yDelta"])})
return{mutate:function(t,e){n.trigger.drag(t,e)},events:n.registry}}()
e.events.drag.bind((function(e){t.each((function(t){n.trigger.drag(e.xDelta,e.yDelta,t)}))}))
return{assign:function(n){t=f.some(n)},get:function(){return t},mutate:e.mutate,events:n.registry}},ri=ti("resizer-bar"),oi=ti("resizer-rows"),ui=ti("resizer-cols"),ii=function(n){var t=Ct(n.parent(),"."+ri)
O(t,Ae)},ci=function(n,t,e){var r=n.origin()
O(t,(function(t){t.each((function(t){var o=e(r,t)
Gu(o,ri),Se(n.parent(),o)}))}))},ai=function(n,t,e,r){ci(n,t,(function(n,t){var o,u,i,c,a,l,f=(o=t.col,u=t.x-n.left,i=e.top-n.top,c=7,a=r,l=Dn.fromTag("div"),Wt(l,{position:"absolute",left:u-c/2+"px",top:i+"px",height:a+"px",width:c+"px"}),Et(l,{"data-column":o,role:"presentation"}),l)
return Gu(f,ui),f}))},li=function(n,t,e,r){ci(n,t,(function(n,t){var o=function(n,t,e,r,o){var u=Dn.fromTag("div")
return Wt(u,{position:"absolute",left:t+"px",top:e-o/2+"px",height:o+"px",width:r+"px"}),Et(u,{"data-row":n,role:"presentation"}),u}(t.row,e.left-n.left,t.y-n.top,r,7)
return Gu(o,oi),o}))},fi=function(n,t){ii(n)
var e=le.fromTable(t);(function(n,t,e,r){var o=Zr(t),u=e.length>0?po.positions(e,t):[]
li(n,u,o,ro(t))
var i=r.length>0?ho.positions(r,t):[]
ai(n,i,o,Xr(t))})(n,t,Wr(e),jr(e))},si=function(n,t){var e=Ct(n.parent(),"."+ri)
O(e,t)},mi=function(n){si(n,(function(n){_t(n,"display","none")}))},di=function(n){si(n,(function(n){_t(n,"display","block")}))},gi=ti("resizer-bar-dragging"),pi=function(n){var t=ei(),e=function(n,t){void 0===t&&(t={})
var e=void 0!==t.mode?t.mode:Qu
return _u(n,e,t)}(t,{}),o=f.none(),u=function(n,t){return f.from(It(n,t))}
t.events.drag.bind((function(n){u(n.target,"data-row").each((function(t){var e=Gt(n.target,"top")
_t(n.target,"top",e+n.yDelta+"px")})),u(n.target,"data-column").each((function(t){var e=Gt(n.target,"left")
_t(n.target,"left",e+n.xDelta+"px")}))}))
var i=function(n,t){return Gt(n,t)-qt(n,"data-initial-"+t,0)}
e.events.stop.bind((function(){t.get().each((function(t){o.each((function(e){u(t,"data-row").each((function(n){var r=i(t,"top")
kt(t,"data-initial-top"),d.trigger.adjustHeight(e,r,parseInt(n,10))})),u(t,"data-column").each((function(n){var r=i(t,"left")
kt(t,"data-initial-left"),d.trigger.adjustWidth(e,r,parseInt(n,10))})),fi(n,e)}))}))}))
var c=function(r,o){d.trigger.startAdjust(),t.assign(r),Bt(r,"data-initial-"+o,Gt(r,o)),Gu(r,gi),_t(r,"opacity","0.2"),e.go(n.parent())},a=Hu(n.parent(),"mousedown",(function(n){var t
t=n.target,Ku(t,oi)&&c(n.target,"top"),function(n){return Ku(n,ui)}(n.target)&&c(n.target,"left")})),l=function(t){return Bn(t,n.view())},s=function(n){return Ot(n,"table",l).filter((function(n){return function(n,t){return Ot(n,"[contenteditable]",t)}(n,l).exists(Zu)}))},m=Hu(n.view(),"mouseover",(function(t){s(t.target).fold((function(){vt(t.target)&&ii(n)}),(function(t){o=f.some(t),fi(n,t)}))})),d=Ou({adjustHeight:Du(["table","delta","row"]),adjustWidth:Du(["table","delta","column"]),startAdjust:Du([])})
return{destroy:function(){a.unbind(),m.unbind(),e.destroy(),ii(n)},refresh:function(t){fi(n,t)},on:e.on,off:e.off,hideBars:r(mi,n),showBars:r(di,n),events:d.registry}},vi=function(n,t,e){var r=po,o=ho,u=pi(n),i=Ou({beforeResize:Du(["table","type"]),afterResize:Du(["table","type"]),startDrag:Du([])})
return u.events.adjustHeight.bind((function(n){var t=n.table
i.trigger.beforeResize(t,"row")
var e=r.delta(n.delta,t)
tu(t,e,n.row,r),i.trigger.afterResize(t,"row")})),u.events.startAdjust.bind((function(n){i.trigger.startDrag()})),u.events.adjustWidth.bind((function(n){var r=n.table
i.trigger.beforeResize(r,"col")
var u=o.delta(n.delta,r),c=e(r)
nu(r,u,n.column,t,c),i.trigger.afterResize(r,"col")})),{on:u.on,off:u.off,hideBars:u.hideBars,showBars:u.showBars,destroy:u.destroy,events:i.registry}},hi=function(n,t){return n.fire("newrow",{node:t})},bi=function(n,t){return n.fire("newcell",{node:t})},wi={"border-collapse":"collapse",width:"100%"},yi={border:"1"},Ci="preservetable",xi=function(n){return n.getParam("table_sizing_mode","auto")},Si=function(n){return n.getParam("table_responsive_width")},Ti=function(n){return n.getParam("table_default_attributes",yi,"object")},Ri=function(n){return n.getParam("table_default_styles",function(n){if(Ii(n)){var t=n.getBody().offsetWidth
return z(z({},wi),{width:t+"px"})}return Pi(n)?Wn(wi,(function(n,t){return"width"!==t})):wi}(n),"object")},Di=function(n){return n.getParam("table_cell_advtab",!0,"boolean")},Oi=function(n){return n.getParam("table_row_advtab",!0,"boolean")},Ai=function(n){return n.getParam("table_advtab",!0,"boolean")},Bi=function(n){return n.getParam("table_style_by_css",!1,"boolean")},Ei=function(n){return"relative"===xi(n)||!0===Si(n)},Ii=function(n){return"fixed"===xi(n)||!1===Si(n)},Pi=function(n){return"responsive"===xi(n)},ki=function(n){return n.getParam("table_use_colgroups",!1,"boolean")},Mi=function(n){var t="section",e=n.getParam("table_header_type",t,"string")
return S(["section","cells","sectionCells","auto"],e)?e:t},Ni=function(n){var t=n.getParam("table_column_resizing",Ci,"string")
return I(["preservetable","resizetable"],(function(n){return n===t})).getOr(Ci)},ji=function(n){return"preservetable"===Ni(n)},_i=function(n){var t=n.getParam("table_clone_elements")
return d(t)?f.some(t.split(/[ ,]/)):Array.isArray(t)?f.some(t):f.none()},Wi=function(n){return n.nodeName.toLowerCase()},zi=function(n){return Dn.fromDom(n.getBody())},Fi=function(n){return n.getBoundingClientRect().width},Li=function(n){return n.getBoundingClientRect().height},Hi=function(n){return function(t){return Bn(t,zi(n))}},qi=function(n){return/^\d+(\.\d+)?$/.test(n)?n+"px":n},Vi=function(n){kt(n,"data-mce-style")
var t=function(n){return kt(n,"data-mce-style")}
O(Zt(n),t),O(ne(n),t)},Ui=function(n,t){var e=n.dom.getStyle(t,"width")||n.dom.getAttrib(t,"width")
return f.from(e).filter(Z)},$i=function(n){return/^(\d+(\.\d+)?)%$/.test(n)},Gi=function(n){return Dn.fromDom(n.selection.getStart())},Ki=function(n){var t=n
return{get:function(){return t},set:function(n){t=n}}},Xi=function(e){var r=function(){return eo(e)},o=t(0)
return{width:r,pixelWidth:r,getWidths:Ko,getCellDelta:o,singleColumnWidth:t([0]),minCellWidth:o,setElementWidth:n,adjustTableWidth:n,isRelative:!0,label:"none"}},Yi=function(n,t){var e=Ki(parseFloat(n)),r=Ki(eo(t))
return{width:e.get,pixelWidth:r.get,getWidths:Go,getCellDelta:function(n){return n/r.get()*100},singleColumnWidth:function(n,t){return[100-n]},minCellWidth:function(){return Kt()/r.get()*100},setElementWidth:Bo,adjustTableWidth:function(n){var o=e.get(),u=o+n/100*o
Bo(t,u),e.set(u),r.set(eo(t))},isRelative:!0,label:"percent"}},Ji=function(n,t){var r=Ki(n),o=r.get
return{width:o,pixelWidth:o,getWidths:Ko,getCellDelta:e,singleColumnWidth:function(n,t){return[Math.max(Kt(),n+t)-n]},minCellWidth:Kt,setElementWidth:Ao,adjustTableWidth:function(n){var e=o()+n
Ao(t,e),r.set(e)},isRelative:!1,label:"pixel"}},Qi=function(n){return ko(n).fold((function(){return Xi(n)}),(function(t){return function(n,t){var e=Fo().exec(t)
if(null!==e)return Yi(e[1],n)
var r=Lo().exec(t)
if(null!==r){var o=parseInt(r[1],10)
return Ji(o,n)}var u=eo(n)
return Ji(u,n)}(n,t)}))},Zi=Ji,nc=Yi,tc=function(n,t){if(Ei(n)){var e=Ui(n,t.dom).filter($i).getOrThunk((function(){return Tu(t)}))
return nc(e,t)}return Ii(n)?Zi(eo(t),t):Qi(t)},ec=function(n){kt(n,"width")},rc=function(n,t){var e=function(n){return eo(n)+"px"}(n)
yu(n,f.some(e),f.none(),t),ec(n)},oc=function(n,t){(function(n,t){var e=zo(n)
yu(n,f.some(e),f.none(),t),ec(n)})(t,tc(n,t))},uc=function(n,t){var e=tc(n,t)
rc(t,e)},ic=function(n){Ht(n,"width")
var t=ne(n),e=t.length>0?t:Zt(n)
O(e,(function(n){Ht(n,"width"),ec(n)})),ec(n)},cc=function(){var n=Dn.fromTag("div")
return Wt(n,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"}),Se(ht(Dn.fromDom(document)),n),n},ac=function(n){var e,r,o=f.none(),u=f.none(),i=f.none(),c=function(n){return"TABLE"===n.nodeName},a=function(){return u},l=function(t){return tc(n,t)},s=function(){return ji(n)?{resizeTable:function(n,t,e){e&&n(t)},clampTableDelta:function(n,t,e,r,o){if(o){if(e>=0)return e
var u=E(n,(function(n,t){return n+t-r}),0)
return Math.max(-u,e)}return uu(n,t,e,r)},calcLeftEdgeDeltas:e=function(n,t,e,r,o){var u=iu(n,r>=0?e:t,r,o)
return ru(n,t,e+1,[u,-u],eu)},calcMiddleDeltas:function(n,t,r,o,u,i){return e(n,r,o,u,i)},calcRightEdgeDeltas:function(n,e,r,o,u,i){if(i)return eu(n)
var c=o/n.length
return D(n,t(c))}}:cu()
var e},m=function(t,o,u){var i=J(o,"e")
if(u!==e&&""!==r){_t(t,"width",r)
var c=s(),a=l(t),f=ji(n)||i?function(n){return Ru(n).columns}(t)-1:0
nu(t,u-e,f,c,a)}else if($i(r)){var m=parseFloat(r.replace("%",""))
_t(t,"width",u*m/e+"%")}(function(n){return/^(\d+(\.\d+)?)px$/.test(n)})(r)&&function(n){var t=le.fromTable(n)
le.hasColumns(t)||O(Zt(n),(function(n){var t=zt(n,"width")
_t(n,"width",t),kt(n,"width")}))}(t)}
return n.on("init",(function(){var t=function(n,t){return n.inline?lu(zi(n),cc()):au(Dn.fromDom(n.getDoc()))}(n)
if(i=f.some(t),function(n){var t=n.getParam("object_resizing",!0)
return d(t)?"table"===t:t}(n)&&function(n){return n.getParam("table_resize_bars",!0,"boolean")}(n)){var e=s(),r=vi(t,e,l)
r.on(),r.events.startDrag.bind((function(t){o=f.some(n.selection.getRng())})),r.events.beforeResize.bind((function(t){var e=t.table.dom;(function(n,t,e,r,o){n.fire("ObjectResizeStart",{target:t,width:e,height:r,origin:o})})(n,e,Fi(e),Li(e),"bar-"+t.type)})),r.events.afterResize.bind((function(t){var e=t.table,r=e.dom
Vi(e),o.each((function(t){n.selection.setRng(t),n.focus()})),function(n,t,e,r,o){n.fire("ObjectResized",{target:t,width:e,height:r,origin:o})}(n,r,Fi(r),Li(r),"bar-"+t.type),n.undoManager.add()})),u=f.some(r)}})),n.on("ObjectResizeStart",(function(t){var o=t.target
if(c(o)){var u=Dn.fromDom(o)
O(n.dom.select(".mce-clonedresizable"),(function(t){n.dom.addClass(t,"mce-"+Ni(n)+"-columns")})),!xu(u)&&Ii(n)?uc(n,u):!Cu(u)&&Ei(n)&&oc(n,u),e=t.width,r=Pi(n)?"":Ui(n,o).getOr("")}})),n.on("ObjectResized",(function(t){var e=t.target
if(c(e)){var o=Dn.fromDom(e)
""===r&&oc(n,o)
var u=t.origin
Y(u,"corner-")&&m(o,u,t.width),Vi(o)}})),n.on("SwitchMode",(function(){a().each((function(t){n.mode.isReadOnly()?t.hideBars():t.showBars()}))})),{lazyResize:a,lazyWire:function(){return i.getOr(au(Dn.fromDom(n.getBody())))},destroy:function(){u.each((function(n){n.destroy()})),i.each((function(t){(function(n,t){n.inline&&Ae(t.parent())})(n,t)}))}}},lc=function(n,t){return{element:n,offset:t}},fc=function(n,t,e){return n.property().isText(t)&&0===n.property().getText(t).trim().length||n.property().isComment(t)?e(t).bind((function(t){return fc(n,t,e).orThunk((function(){return f.some(t)}))})):f.none()},sc=function(n,t){return n.property().isText(t)?n.property().getText(t).length:n.property().children(t).length},mc=function(n,t){var e=fc(n,t,n.query().prevSibling).getOr(t)
if(n.property().isText(e))return lc(e,sc(n,e))
var r=n.property().children(e)
return r.length>0?mc(n,r[r.length-1]):lc(e,sc(n,e))},dc=mc,gc=Ne(),pc=function(n,t){(function(n){return ko(n).bind((function(n){return yo(n,["fixed","relative","empty"])}))})(n).each((function(e){var r=e.value/2
Wo(n,r,e.unit),Wo(t,r,e.unit)}))},vc=function(n,t,e){n.cells[t]=e},hc=function(n,t){return $n(t,n.section)},bc=function(n,t){var e=n.cells,r=D(e,t)
return $n(r,n.section)},wc=function(n,t){return n.cells[t]},yc=function(n,t){return wc(n,t).element},Cc=function(n){return n.cells.length},xc=function(n){var t=function(n,t){for(var e=[],r=[],o=0,u=n.length;o<u;o++){var i=n[o];(t(i,o)?e:r).push(i)}return{pass:e,fail:r}}(n,(function(n){return"colgroup"===n.section}))
return{rows:t.fail,cols:t.pass}},Sc=function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e)
return t},Tc=function(n,t,e,r){e===r?kt(n,t):Bt(n,t,e)},Rc=function(n,t,e){_(yt(n,t)).fold((function(){return xe(n,e)}),(function(n){return Ce(n,e)}))},Dc=function(n,t){var e=[],r=[],o=function(n){return D(n,(function(n){n.isNew&&e.push(n.element)
var t=n.element
return Oe(t),O(n.cells,(function(n){n.isNew&&r.push(n.element),Tc(n.element,"colspan",n.colspan,1),Tc(n.element,"rowspan",n.rowspan,1),Se(t,n.element)})),t}))},u=function(n){return M(n,(function(n){return D(n.cells,(function(n){return Tc(n.element,"span",n.colspan,1),n.element}))}))},i=function(t,e){var r=function(n,t){var e=Rt(n,t).getOrThunk((function(){var e=Dn.fromTag(t,tt(n).dom)
return"thead"===t?Rc(n,"caption,colgroup",e):"colgroup"===t?Rc(n,"caption",e):Se(n,e),e}))
return Oe(e),e}(n,e),i=("colgroup"===e?u:o)(t)
De(r,i)},c=function(t,e){t.length>0?i(t,e):function(t){Rt(n,t).each(Ae)}(e)},a=[],l=[],f=[],s=[]
return O(t,(function(n){switch(n.section){case"thead":a.push(n)
break
case"tbody":l.push(n)
break
case"tfoot":f.push(n)
break
case"colgroup":s.push(n)}})),c(s,"colgroup"),c(a,"thead"),c(l,"tbody"),c(f,"tfoot"),{newRows:e,newCells:r}},Oc=function(n,t){if(0===n.length)return 0
var e=n[0]
return P(n,(function(n){return!t(e.element,n.element)})).fold((function(){return n.length}),(function(n){return n}))},Ac=function(n,t,e,r){var o=function(n,t){return n[t]}(n,t).cells.slice(e),u=Oc(o,r),i=function(n,t){return D(n,(function(n){return wc(n,t)}))}(n,e).slice(t)
return{colspan:u,rowspan:Oc(i,r)}},Bc=function(n,t){var e=D(n,(function(n){return D(n.cells,u)}))
return D(n,(function(r,o){return function(n,t){return{details:n,section:t}}(M(r.cells,(function(r,u){if(!1===e[o][u]){var i=Ac(n,o,u,t)
return function(n,t,r,o){for(var u=n;u<n+r;u++)for(var i=t;i<t+o;i++)e[u][i]=!0}(o,u,i.rowspan,i.colspan),[(c=r.element,a=i.rowspan,l=i.colspan,f=r.isNew,{element:c,rowspan:a,colspan:l,isNew:f})]}return[]
var c,a,l,f})),r.section)}))},Ec=function(n,t,e){var r=[]
if(le.hasColumns(n)){var o=D(le.justColumns(n),(function(n){return Un(n.element,e)}))
r.push($n(o,"colgroup"))}for(var u=0;u<n.grid.rows;u++){for(var i=[],c=0;c<n.grid.columns;c++){var a=le.getAt(n,u,c).map((function(n){return Un(n.element,e)})).getOrThunk((function(){return Un(t.gap(),!0)}))
i.push(a)}var l=$n(i,n.all[u].section)
r.push(l)}return r},Ic=function(n,t){return D(n,(function(n){var e=function(n){return W(n,(function(n){return rt(n.element).map((function(n){var t=rt(n).isNone()
return Un(n,t)}))})).getOrThunk((function(){return Un(t.row(),!0)}))}(n.details)
return function(n,t,e,r){return{element:n,cells:t,section:e,isNew:r}}(e.element,n.details,n.section,e.isNew)}))},Pc=function(n,t){var e=Bc(n,Bn)
return Ic(e,t)},kc=function(n,t){return W(n.all,(function(n){return I(n.cells,(function(n){return Bn(t,n.element)}))}))},Mc=function(n,t,e,r,o){return function(u,i,c,a,l){var s=le.fromTable(i)
return t(s,c).map((function(t){var e=function(n,t){return Ec(n,t,!1)}(s,a),r=n(e,t,Bn,o(a))
return{grid:Pc(r.grid,a),cursor:r.cursor}})).fold((function(){return f.none()}),(function(n){var t=Dc(i,n.grid),o=f.from(l).getOrThunk((function(){return Qi(i)}))
return e(i,n.grid,o),r(i),fi(u,i),f.some({cursor:n.cursor,newRows:t.newRows,newCells:t.newCells})}))}},Nc=function(n,t){return Qt(t.element).bind((function(t){return kc(n,t)}))},jc=function(n,t){var e=D(t.selection,(function(t){return Qt(t).bind((function(t){return kc(n,t)}))})),r=Sc(e)
return r.length>0?f.some({cells:r,generators:t.generators,clipboard:t.clipboard}):f.none()},_c=function(n,t){var e=D(t.selection,(function(t){return Qt(t).bind((function(t){return kc(n,t)}))})),r=Sc(e)
return r.length>0?f.some(r):f.none()},Wc=function(n,t,e,r){for(var o=xc(n).rows,u=!0,i=0;i<o.length;i++)for(var c=0;c<Cc(o[0]);c++){var a=e(yc(o[i],c),t)
!0===a&&!1===u?vc(o[i],c,Un(r(),!0)):!0===a&&(u=!1)}return n},zc=function(n,t,e,r){var o=xc(n).rows
if(t>0&&t<o.length){var u=function(n,t){return E(n,(function(n,e){return T(n,(function(n){return t(n.element,e.element)}))?n:n.concat([e])}),[])}(o[t-1].cells,e)
O(u,(function(n){for(var u=f.none(),i=function(t){for(var i=function(i){var c=o[t].cells[i]
e(c.element,n.element)&&(u.isNone()&&(u=f.some(r())),u.each((function(n){vc(o[t],i,Un(n,!0))})))},c=0;c<Cc(o[0]);c++)i(c)},c=t;c<o.length;c++)i(c)}))}return n},Fc=function(n){return{is:function(t){return n===t},isValue:i,isError:u,getOr:t(n),getOrThunk:t(n),getOrDie:t(n),or:function(t){return Fc(n)},orThunk:function(t){return Fc(n)},fold:function(t,e){return e(n)},map:function(t){return Fc(t(n))},mapError:function(t){return Fc(n)},each:function(t){t(n)},bind:function(t){return t(n)},exists:function(t){return t(n)},forall:function(t){return t(n)},toOptional:function(){return f.some(n)}}},Lc=function(t){return{is:u,isValue:u,isError:i,getOr:e,getOrThunk:function(n){return n()},getOrDie:function(){return(n=String(t),function(){throw new Error(n)})()
var n},or:function(n){return n},orThunk:function(n){return n()},fold:function(n,e){return n(t)},map:function(n){return Lc(t)},mapError:function(n){return Lc(n(t))},each:n,bind:function(n){return Lc(t)},exists:u,forall:i,toOptional:f.none}},Hc={value:Fc,error:Lc,fromOption:function(n,t){return n.fold((function(){return Lc(t)}),Fc)}},qc=function(n,t){return{rowDelta:0,colDelta:Cc(n[0])-Cc(t[0])}},Vc=function(n,t){return{rowDelta:n.length-t.length,colDelta:0}},Uc=function(n,t,e){var r="colgroup"===t.section?e.col:e.cell
return D(n,(function(){return Un(r(),!0)}))},$c=function(n,t,e){return n.concat(R(t,(function(){var t=n[n.length-1]
return hc(t,Uc(t.cells,t,e))})))},Gc=function(n,t,r){return D(n,(function(n){var o=Uc(R(t,e),n,r)
return hc(n,n.cells.concat(o))}))},Kc=function(n,t,r){var o=t.colDelta<0?Gc:e
return(t.rowDelta<0?$c:e)(o(n,Math.abs(t.colDelta),r),Math.abs(t.rowDelta),r)},Xc=function(n,t,e,o){var u=r(o,wc(n[t],e).element),i=n[t]
return n.length>1&&Cc(i)>1&&(e>0&&u(yc(i,e-1))||e<i.cells.length-1&&u(yc(i,e+1))||t>0&&u(yc(n[t-1],e))||t<n.length-1&&u(yc(n[t+1],e)))},Yc=function(n,t,e,r,o){return function(n,t,e){if(n.row>=t.length||n.column>Cc(t[0]))return Hc.error("invalid start address out of table bounds, row: "+n.row+", column: "+n.column)
var r=t.slice(n.row),o=r[0].cells.slice(n.column),u=Cc(e[0]),i=e.length
return Hc.value({rowDelta:r.length-i,colDelta:o.length-u})}(n,t,e).map((function(u){var i=Kc(t,u,r)
return function(n,t,e,r,o){for(var u=n.row,i=n.column,c=u+e.length,a=i+Cc(e[0]),l=u;l<c;l++)for(var f=i;f<a;f++){Xc(t,l,f,o)&&Wc(t,yc(t[l],f),o,r.cell)
var s=yc(e[l-u],f-i),m=r.replace(s)
vc(t[l],f,Un(m,!0))}return t}(n,i,e,r,o)}))},Jc=function(n,t,e,r,o){(function(n,t,e,r){t>0&&t<n[0].cells.length&&O(n,(function(n){var o=n.cells[t-1],u=n.cells[t]
e(u.element,o.element)&&vc(n,t,Un(r(),!0))}))})(t,n,o,r.cell)
var u=Vc(e,t),i=Kc(e,u,r),c=Vc(t,i),a=Kc(t,c,r)
return D(a,(function(t,e){var r=t.cells.slice(0,n).concat(i[e].cells).concat(t.cells.slice(n,t.cells.length))
return hc(t,r)}))},Qc=function(n,t,e,r,o){zc(t,n,o,r.cell)
var u=qc(e,t),i=Kc(e,u,r),c=qc(t,i),a=Kc(t,c,r),l=xc(a),f=l.cols,s=l.rows
return f.concat(s.slice(0,n)).concat(i).concat(s.slice(n,s.length))},Zc=function(n,t,e,r,o){var u=xc(n),i=u.rows,c=u.cols,a=i.slice(0,t),l=i.slice(t),f=bc(i[e],(function(n,e){return t>0&&t<i.length&&r(yc(i[t-1],e),yc(i[t],e))?wc(i[t],e):Un(o(n.element,r),!0)}))
return c.concat(a).concat([f]).concat(l)},na=function(n,t,e,r,o){return D(n,(function(n){var u=t>0&&t<Cc(n)&&r(yc(n,t-1),yc(n,t)),i=function(n,t,e,r,o,u,i){return"colgroup"!==e&&r?wc(n,t):Un(i(yc(n,o),u),!0)}(n,t,n.section,u,e,r,o)
return function(n,t,e){var r=n.cells,o=r.slice(0,t),u=r.slice(t),i=o.concat([e]).concat(u)
return hc(n,i)}(n,t,i)}))},ta=function(n,t,e,r){return D(n,(function(n){return bc(n,(function(n){return function(n){return T(t,(function(t){return e(n.element,t.element)}))}(n)?Un(r(n.element,e),!0):n}))}))},ea=function(n,t,e,r){return void 0!==yc(n[t],e)&&t>0&&r(yc(n[t-1],e),yc(n[t],e))},ra=function(n,t,e){return t>0&&e(yc(n,t-1),yc(n,t))},oa=function(n,t,e,r){var o=M(n,(function(r,o){return ea(n,o,t,e)||ra(r,t,e)?[]:[wc(r,t)]}))
return ta(n,o,e,r)},ua=function(n,t,e,r){var o=xc(n).rows,u=o[t],i=M(u.cells,(function(n,r){return ea(o,t,r,e)||ra(u,r,e)?[]:[n]}))
return ta(n,i,e,r)},ia=Iu(["cell","row","replace","gap","col","colgroup"]),ca=function(n){return{element:n,colspan:qt(n,"colspan",1),rowspan:qt(n,"rowspan",1)}},aa=function(n,t){void 0===t&&(t=ca),ia(n)
var e=Ki(f.none()),r=function(e){return function(t){switch(Gn(t.element)){case"col":return n.col(t)
default:return n.cell(t)}}(t(e))},o=function(n){var t=r(n)
return e.get().isNone()&&e.set(f.some(t)),u=f.some({item:n,replacement:t}),t},u=f.none()
return{getOrInit:function(n,t){return u.fold((function(){return o(n)}),(function(e){return t(n,e.item)?e.replacement:o(n)}))},cursor:e.get}},la=function(n,t){return function(e){var r=Ki(f.none())
ia(e)
var o=[],u=function(u){var i={scope:n},c=e.replace(u,t,i)
return o.push({item:u,sub:c}),r.get().isNone()&&r.set(f.some(c)),c}
return{replaceOrInit:function(n,t){return function(n,t){return I(o,(function(e){return t(e.item,n)}))}(n,t).fold((function(){return u(n)}),(function(e){return t(n,e.item)?e.sub:u(n)}))},cursor:r.get}}},fa=function(n){ia(n)
var t=Ki(f.none())
return{combine:function(e){return t.get().isNone()&&t.set(f.some(e)),function(){var t=n.cell({element:e,colspan:1,rowspan:1})
return Ht(t,"width"),Ht(e,"width"),t}},cursor:t.get}},sa=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"],ma=Ne(),da=function(n){return function(n,t){var e=n.property().name(t)
return S(sa,e)}(ma,n)},ga=function(n){return function(n,t){var e=n.property().name(t)
return S(["ol","ul"],e)}(ma,n)},pa=function(n){return function(n,t){return S(["br","img","hr","input"],n.property().name(t))}(ma,n)},va=function(n){var t,e=function(n){return"br"===Gn(n)},r=function(n){return ar(n).bind((function(t){var r=it(t).map((function(n){return!!da(n)||!!pa(n)&&"img"!==Gn(n)})).getOr(!1)
return rt(t).map((function(o){return!0===r||function(n){return"li"===Gn(n)||St(n,ga).isSome()}(o)||e(t)||da(o)&&!Bn(n,o)?[]:[Dn.fromTag("br")]}))})).getOr([])},o=0===(t=M(n,(function(n){var t=ct(n)
return function(n){return N(n,(function(n){return e(n)||Qn(n)&&0===Ie(n).trim().length}))}(t)?[]:t.concat(r(n))}))).length?[Dn.fromTag("br")]:t
Oe(n[0]),De(n[0],o)},ha=function(n){0===Zt(n).length&&Ae(n)},ba=function(n,t){return{grid:n,cursor:t}},wa=function(n,t,e){var r=xc(n).rows
return ya(r,t,e).orThunk((function(){return ya(r,0,0)}))},ya=function(n,t,e){return f.from(n[t]).bind((function(n){return f.from(n.cells[e]).bind((function(n){return f.from(n.element)}))}))},Ca=function(n,t,e){var r=xc(n).rows
return ba(n,ya(r,t,e))},xa=function(n){return E(n,(function(n,t){return T(n,(function(n){return n.row===t.row}))?n:n.concat([t])}),[]).sort((function(n,t){return n.row-t.row}))},Sa=function(n){return E(n,(function(n,t){return T(n,(function(n){return n.column===t.column}))?n:n.concat([t])}),[]).sort((function(n,t){return n.column-t.column}))},Ta=function(n,t,e){var r,o,u=(r=n,o=e.section,re(r,(function(){return o}))),i=le.generate(u)
return Ec(i,t,!0)},Ra=function(n,t){var e=A(n,t)
return 0===e.length?f.some("td"):e.length===n.length?f.some("th"):f.none()},Da=function(n,t,e){var r=le.generate(t),o=e.getWidths(r,e)
Zo(r,o,e)},Oa=Mc((function(n,t,e,r){var o=t[0].row,u=t[0].row,i=xa(t),c=E(i,(function(n,t){return Zc(n,u,o,e,r.getOrInit)}),n)
return Ca(c,u,t[0].column)}),_c,n,n,aa),Aa=Mc((function(n,t,e,r){var o=xa(t),u=o[o.length-1].row,i=o[o.length-1].row+o[o.length-1].rowspan,c=E(o,(function(n,t){return Zc(n,i,u,e,r.getOrInit)}),n)
return Ca(c,i,t[0].column)}),_c,n,n,aa),Ba=Mc((function(n,t,e,r){var o=Sa(t),u=o[0].column,i=o[0].column,c=E(o,(function(n,t){return na(n,i,u,e,r.getOrInit)}),n)
return Ca(c,t[0].row,i)}),_c,Da,n,aa),Ea=Mc((function(n,t,e,r){var o=t[t.length-1].column,u=t[t.length-1].column+t[t.length-1].colspan,i=Sa(t),c=E(i,(function(n,t){return na(n,u,o,e,r.getOrInit)}),n)
return Ca(c,t[0].row,u)}),_c,Da,n,aa),Ia=Mc((function(n,t,e,r){var o=Sa(t),u=function(n,t,e){var r=D(n,(function(n){var r=n.cells.slice(0,t).concat(n.cells.slice(e+1))
return $n(r,n.section)}))
return A(r,(function(n){return n.cells.length>0}))}(n,o[0].column,o[o.length-1].column),i=wa(u,t[0].row,t[0].column)
return ba(u,i)}),_c,Da,ha,aa),Pa=Mc((function(n,t,e,r){var o=xa(t),u=function(n,t,e){var r=xc(n),o=r.rows
return r.cols.concat(o.slice(0,t)).concat(o.slice(e+1))}(n,o[0].row,o[o.length-1].row),i=wa(u,t[0].row,t[0].column)
return ba(u,i)}),_c,n,ha,aa),ka=Mc((function(n,t,e,r){var o=oa(n,t.column,e,r.replaceOrInit)
return Ca(o,t.row,t.column)}),Nc,n,n,la("row","th")),Ma=Mc((function(n,t,e,r){var o=oa(n,t.column,e,r.replaceOrInit)
return Ca(o,t.row,t.column)}),Nc,n,n,la(null,"td")),Na=(Mc((function(n,t,e,r){var o=ua(n,t.row,e,r.replaceOrInit)
return Ca(o,t.row,t.column)}),Nc,n,n,la("col","th")),Mc((function(n,t,e,r){var o=ua(n,t.row,e,r.replaceOrInit)
return Ca(o,t.row,t.column)}),Nc,n,n,la(null,"td")),Mc((function(n,e,r,o){var u=e.cells
va(u)
var i=function(n,t,e,r){var o=xc(n).rows
if(0===o.length)return n
for(var u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++)vc(o[u],i,Un(r(),!1))
return n}(n,e.bounds,0,t(u[0]))
return ba(i,f.from(u[0]))}),(function(n,t){return t.mergable}),n,n,fa)),ja=Mc((function(n,t,e,r){var o=B(t,(function(n,t){return Wc(n,t,e,r.combine(t))}),n)
return ba(o,f.from(t[0]))}),(function(n,t){return t.unmergable}),Da,n,fa),_a=Mc((function(n,t,e,r){var o=function(n,t){var e=le.fromTable(n)
return Ec(e,t,!0)}(t.clipboard,t.generators),u=function(n,t){return{row:n,column:t}}(t.row,t.column)
return Yc(u,n,o,t.generators,e).fold((function(){return ba(n,f.some(t.element))}),(function(n){var e=wa(n,t.row,t.column)
return ba(n,e)}))}),(function(n,t){return Qt(t.element).bind((function(e){return kc(n,e).map((function(n){return z(z({},n),{generators:t.generators,clipboard:t.clipboard})}))}))}),Da,n,aa),Wa=Mc((function(n,t,e,r){var o=xc(n).rows,u=t.cells[0].column,i=o[t.cells[0].row],c=Ta(t.clipboard,t.generators,i),a=Jc(u,n,c,t.generators,e),l=wa(a,t.cells[0].row,t.cells[0].column)
return ba(a,l)}),jc,n,n,aa),za=Mc((function(n,t,e,r){var o=xc(n).rows,u=t.cells[t.cells.length-1].column+t.cells[t.cells.length-1].colspan,i=o[t.cells[0].row],c=Ta(t.clipboard,t.generators,i),a=Jc(u,n,c,t.generators,e),l=wa(a,t.cells[0].row,t.cells[0].column)
return ba(a,l)}),jc,n,n,aa),Fa=Mc((function(n,t,e,r){var o=xc(n).rows,u=t.cells[0].row,i=o[u],c=Ta(t.clipboard,t.generators,i),a=Qc(u,n,c,t.generators,e),l=wa(a,t.cells[0].row,t.cells[0].column)
return ba(a,l)}),jc,n,n,aa),La=Mc((function(n,t,e,r){var o=xc(n).rows,u=t.cells[t.cells.length-1].row+t.cells[t.cells.length-1].rowspan,i=o[t.cells[0].row],c=Ta(t.clipboard,t.generators,i),a=Qc(u,n,c,t.generators,e),l=wa(a,t.cells[0].row,t.cells[0].column)
return ba(a,l)}),jc,n,n,aa),Ha=function(n,t){var e=le.fromTable(n)
return _c(e,t).bind((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan,u=k(D(e.all,(function(n){return A(n.cells,(function(n){return n.column>=r&&n.column<o}))})))
return Ra(u,(function(n){return"th"===Gn(n.element)}))})).getOr("")},qa=function(n){return Wi(n.parentNode)},Va=function(n,t){var e="thead"===qa(t),r=!T(t.cells,(function(n){return"th"!==Wi(n)}))
return e||r?f.some({thead:e,ths:r}):f.none()},Ua=function(n,t){return"thead"===(e=Va(0,t).fold((function(){return qa(t)}),(function(n){return"thead"})))?"header":"tfoot"===e?"footer":"body"
var e},$a=function(n,t,e){var r=n.getParent(t,"table"),o=t.parentNode,u=Wi(o)
if(e!==u){var i=n.select(e,r)[0]
if(!i){i=n.create(e)
var c=r.firstChild
"thead"===e?_(yt(Dn.fromDom(r),"caption,colgroup")).fold((function(){return r.insertBefore(i,c)}),(function(t){return n.insertAfter(i,t.dom)})):r.appendChild(i)}"tbody"===e&&"thead"===u&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),o.hasChildNodes()||n.remove(o)}},Ga=function(n,t,e,r){return O(t,(function(t){var o=Wi(t)!==e?n.rename(t,e):t
n.setAttrib(o,"scope",r)}))},Ka=function(n,t,e){var r,o=n.dom
if("header"===e){var u=Mi(n),i="auto"===u?(r=te(Dn.fromDom(t.cells[0])).map((function(n){return ee(n)})).getOr([]),W(r,(function(n){return Va(0,n.dom)})).map((function(n){return n.thead&&n.ths?"sectionCells":n.thead?"section":"cells"})).getOr("section")):u
Ga(o,t.cells,"section"===i?"td":"th","col"),$a(o,t,"cells"===i?"tbody":"thead")}else Ga(o,t.cells,"td",null),$a(o,t,"footer"===e?"tfoot":"tbody")},Xa=function(n){return function(t){var e=Gn(t),r="col"===e||"colgroup"===e?function(n){return te(n).bind((function(n){return Ge(n,Br.firstSelectedSelector)})).fold((function(){return n}),(function(n){return n[0]}))}(t):t
return Ot(r,n)}},Ya=Xa("th,td"),Ja=Xa("th,td,caption"),Qa=function(n,t){return Ya(n).map((function(n){return Sr(t)})).getOr([])},Za=function(n,t){var e,r,o,u=Ya(n),i=u.bind((function(n){return te(n)})).map((function(n){return ee(n)}))
return(e=u,r=i,o=function(n,e){return A(e,(function(e){return T(xr(e.dom.cells),(function(e){return"1"===It(e,t)||Bn(e,n)}))}))},e.isSome()&&r.isSome()?f.some(o(e.getOrDie(),r.getOrDie())):f.none()).getOr([])},nl=function(t,e,r){var o=function(n){return"table"===Gn(zi(n))},u=_i(t),c=function(n,e,r,o){return function(i,c){Vi(i)
var a=o(),l=Dn.fromDom(t.getDoc()),s=yr(r,l,u),m=tc(t,i)
return e(i)?n(a,i,c,s,m).bind((function(n){return O(n.newRows,(function(n){hi(t,n.dom)})),O(n.newCells,(function(n){bi(t,n.dom)})),n.cursor.map((function(n){var e=dc(gc,n),r=t.dom.createRng()
return r.setStart(e.element.dom,e.offset),r.setEnd(e.element.dom,e.offset),r}))})):f.none()}},a=c(Pa,(function(n){return!1===o(t)||Ru(n).rows>1}),n,e),l=c(Ia,(function(n){return!1===o(t)||Ru(n).columns>1}),n,e),s=c(Oa,i,n,e),m=c(Aa,i,n,e),d=c(Ba,i,pc,e),g=c(Ea,i,pc,e),p=c(Na,i,n,e),v=c(ja,i,n,e),h=c(Wa,i,n,e),b=c(za,i,n,e),w=c(Fa,i,n,e),y=c(La,i,n,e),C=c(_a,i,n,e),x=function(n,t){return Fn(n,"type").filter((function(n){return S(t,n)}))}
return{deleteRow:a,deleteColumn:l,insertRowsBefore:s,insertRowsAfter:m,insertColumnsBefore:d,insertColumnsAfter:g,mergeCells:p,unmergeCells:v,pasteColsBefore:h,pasteColsAfter:b,pasteRowsBefore:w,pasteRowsAfter:y,pasteCells:C,setTableCellType:function(n,t){return x(t,["td","th"]).each((function(t){var e=D(Qa(Gi(n),r),(function(n){return n.dom}))
Ga(n.dom,e,t,null)}))},setTableRowType:function(n,t){return x(t,["header","body","footer"]).each((function(t){D(Za(Gi(n),Br.selected),(function(e){return Ka(n,e.dom,t)}))}))},makeColumnHeader:c(ka,i,n,e),unmakeColumnHeader:c(Ma,i,n,e),getTableRowType:function(n){var t=Za(Gi(n),Br.selected)
if(t.length>0){var e=D(t,(function(n){return Ua(0,n.dom)})),r=S(e,"header"),o=S(e,"footer")
if(r||o){var u=S(e,"body")
return!r||u||o?r||u||!o?"":"footer":"header"}return"body"}},getTableCellType:function(n){return Ra(Qa(Gi(n),r),(function(n){return"th"===Gn(n)})).getOr("")},getTableColType:Ha}},tl={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},colGroups:!1},el=function(n){var t=Dn.fromTag("colgroup")
return R(n,(function(){return Se(t,Dn.fromTag("col"))})),t},rl=function(n,t,e,r){return R(n,(function(n){return function(n,t,e,r){for(var o=Dn.fromTag("tr"),u=0;u<n;u++){var i=r<t||u<e?Dn.fromTag("th"):Dn.fromTag("td")
u<e&&Bt(i,"scope","row"),r<t&&Bt(i,"scope","col"),Se(i,Dn.fromTag("br")),Se(o,i)}return o}(t,e,r,n)}))},ol=function(n,t){n.selection.select(t.dom,!0),n.selection.collapse(!0)},ul=function(n,t,e,o,u){var i=Ri(n),c={styles:i,attributes:Ti(n),colGroups:ki(n)},a=function(n,t,e,r,o,u){void 0===u&&(u=tl)
var i=Dn.fromTag("table"),c="cells"!==o
Wt(i,u.styles),Et(i,u.attributes),u.colGroups&&Se(i,el(t))
var a=Math.min(n,e)
if(c&&e>0){var l=Dn.fromTag("thead")
Se(i,l)
var f=rl(e,t,"sectionCells"===o?a:0,r)
De(l,f)}var s=Dn.fromTag("tbody")
Se(i,s)
var m=rl(c?n-a:n,t,c?0:e,r)
return De(s,m),i}(e,t,u,o,Mi(n),c)
Bt(a,"data-mce-id","__mce")
var l=function(n){var t=Dn.fromTag("div"),e=Dn.fromDom(n.dom.cloneNode(!0))
return Se(t,e),function(n){return n.dom.innerHTML}(t)}(a)
return n.insertContent(l),Dt(zi(n),'table[data-mce-id="__mce"]').map((function(t){return Ii(n)?uc(n,t):Pi(n)?ic(t):(Ei(n)||function(n){return d(n)&&-1!==n.indexOf("%")}(i.width))&&oc(n,t),Vi(t),kt(t,"data-mce-id"),function(n,t){O(Ct(t,"tr"),(function(t){hi(n,t.dom),O(Ct(t,"th,td"),(function(t){bi(n,t.dom)}))}))}(n,t),function(n,t){Dt(t,"td,th").each(r(ol,n))}(n,t),t.dom})).getOr(null)},il=function(n,t,e,r,o){void 0===r&&(r={})
var u=function(n){return w(n)&&n>0}
if(u(t)&&u(e)){var i=r.headerRows||0,c=r.headerColumns||0
return ul(n,e,t,c,i)}return console.error(o),null},cl=function(n){return function(){return n().fold((function(){return[]}),(function(n){return D(n,(function(n){return n.dom}))}))}},al=function(n){return function(t){var e=t.length>0?f.some(xr(t)):f.none()
n(e)}},ll=function(n,t,e){var r=qt(n,t,1)
1===e||r<=1?kt(n,t):Bt(n,t,Math.min(e,r))},fl=function(n,t){var e=le.fromTable(n)
return _c(e,t).map((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan
return F(function(n,t,e){if(le.hasColumns(n)){var r=A(le.justColumns(n),(function(n){return n.column>=t&&n.column<e})),o=D(r,(function(n){var r=mr(n.element)
return ll(r,"span",e-t),r})),u=Dn.fromTag("colgroup")
return De(u,o),[u]}return[]}(e,r,o),function(n,t,e){return D(n.all,(function(n){var r=A(n.cells,(function(n){return n.column>=t&&n.column<e})),o=D(r,(function(n){var r=mr(n.element)
return ll(r,"colspan",e-t),r})),u=Dn.fromTag("tr")
return De(u,o),u}))}(e,r,o))}))},sl=function(n,t,e){var r=le.fromTable(n)
return _c(r,t).map((function(n){var t=Ec(r,e,!1),o=xc(t).rows.slice(n[0].row,n[n.length-1].row+n[n.length-1].rowspan)
return function(n){return D(n,(function(n){var t=sr(n.element)
return O(n.cells,(function(n){var e=mr(n.element)
Tc(e,"colspan",n.colspan,1),Tc(e,"rowspan",n.rowspan,1),Se(t,e)})),t}))}(Pc(o,e))}))},ml=tinymce.util.Tools.resolve("tinymce.util.Tools"),dl=function(n,t,e){return function(t,r){for(var o=0;o<r.length;o++){var u=n.getStyle(r[o],e)
if(void 0===t&&(t=u),t!==u)return""}return t}(undefined,n.select("td,th",t))},gl=function(n,t,e){e&&n.formatter.apply("align"+e,{},t)},pl=function(n,t){ml.each("left center right".split(" "),(function(e){n.formatter.remove("align"+e,{},t)}))},vl=function(n){return function(n,t){return Ln(n,t)&&void 0!==n[t]&&null!==n[t]}(n,"menu")},hl=function(n,t){return function(n,t){return t.concat(D(n,(function(n){var t=n.text||n.title
return vl(n)?{text:t,items:hl(n.menu)}:{text:t,value:n.value}})))}(n,t||[])},bl=function(n){return function(t){return Y(t,"rgb")?n.toHex(t):t}},wl=function(n,t){var e=Dn.fromDom(t)
return{borderwidth:Lt(e,"border-width").getOr(""),borderstyle:Lt(e,"border-style").getOr(""),bordercolor:Lt(e,"border-color").map(bl(n)).getOr(""),backgroundcolor:Lt(e,"background-color").map(bl(n)).getOr("")}},yl=function(n){var t=n[0],e=n.slice(1)
return O(e,(function(n){O(kn(t),(function(e){Nn(n,(function(n,r){var o=t[e]
""!==o&&e===r&&o!==n&&(t[e]="")}))}))})),t},Cl=function(n){var t=[{name:"borderstyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]},{name:"bordercolor",type:"colorinput",label:"Border color"},{name:"backgroundcolor",type:"colorinput",label:"Background color"}]
return{title:"Advanced",name:"advanced",items:"cell"===n?[{name:"borderwidth",type:"input",label:"Border width"}].concat(t):t}},xl=function(n,t,e,r){return I(n,(function(n){return e.formatter.matchNode(r,t+n)})).getOr("")},Sl=r(xl,["left","center","right"],"align"),Tl=r(xl,["top","middle","bottom"],"valign"),Rl=[{name:"width",type:"input",label:"Width"},{name:"height",type:"input",label:"Height"},{name:"celltype",type:"listbox",label:"Cell type",items:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{name:"scope",type:"listbox",label:"Scope",items:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{name:"halign",type:"listbox",label:"H Align",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{name:"valign",type:"listbox",label:"V Align",items:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}],Dl=function(n){return Rl.concat(function(n){var t=hl(function(n){return n.getParam("table_cell_class_list",[],"array")}(n))
return t.length>0?f.some({name:"class",type:"listbox",label:"Class",items:t}):f.none()}(n).toArray())},Ol=function(n){return function(t,e){var r=t.dom
return{setAttrib:function(t,o){n&&!o||r.setAttrib(e,t,o)},setStyle:function(t,o){n&&!o||r.setStyle(e,t,o)},setFormat:function(r,o){n&&!o||(""===o?t.formatter.remove(r,{value:null},e,!0):t.formatter.apply(r,{value:o},e))}}}},Al={normal:Ol(!1),ifTruthy:Ol(!0)},Bl=function(n){return te(n[0]).map((function(t){var e=le.fromTable(t),r=le.justCells(e),o=A(r,(function(t){return T(n,(function(n){return Bn(t.element,n)}))}))
return D(o,(function(n){return{element:n.element.dom,column:le.getColumnAt(e,n.column).map((function(n){return n.element.dom}))}}))}))},El=function(n,t,e){var r=n.dom,o=1===t.length
t.length>=1&&Bl(t).each((function(t){return O(t,(function(t){var u=t.element,i=e.celltype&&Wi(u)!==e.celltype?r.rename(u,e.celltype):u,c=o?Al.normal(n,i):Al.ifTruthy(n,i);(function(n,t,e){n.setAttrib("scope",e.scope),n.setAttrib("class",e.class),n.setStyle("height",qi(e.height)),t.setStyle("width",qi(e.width))})(c,t.column.map((function(t){return o?Al.normal(n,t):Al.ifTruthy(n,t)})).getOr(c),e),Di(n)&&function(n,t){n.setFormat("tablecellbackgroundcolor",t.backgroundcolor),n.setFormat("tablecellbordercolor",t.bordercolor),n.setFormat("tablecellborderstyle",t.borderstyle),n.setFormat("tablecellborderwidth",qi(t.borderwidth))}(c,e),o&&(pl(n,i),function(n,t){ml.each("top middle bottom".split(" "),(function(e){n.formatter.remove("valign"+e,{},t)}))}(n,i)),e.halign&&gl(n,i,e.halign),e.valign&&function(n,t,e){e&&n.formatter.apply("valign"+e,{},t)}(n,i,e.valign)}))}))},Il=function(n,t,e){var r=e.getData()
e.close(),n.undoManager.transact((function(){El(n,t,r),n.focus()}))},Pl=function(n,t){var e=Bl(t).map((function(t){return D(t,(function(t){return function(n,t,e,r){var o=n.dom,u=r.getOr(t),i=function(n,t){return o.getStyle(n,t)||o.getAttrib(n,t)}
return z({width:i(u,"width"),height:i(t,"height"),scope:o.getAttrib(t,"scope"),celltype:Wi(t),class:o.getAttrib(t,"class",""),halign:Sl(n,t),valign:Tl(n,t)},e?wl(o,t):{})}(n,t.element,Di(n),t.column)}))}))
return yl(e.getOrDie())},kl=function(n,t){var e=Qa(Gi(n),t)
if(0!==e.length){var o=Pl(n,e),u={type:"tabpanel",tabs:[{title:"General",name:"general",items:Dl(n)},Cl("cell")]},i={type:"panel",items:[{type:"grid",columns:2,items:Dl(n)}]}
n.windowManager.open({title:"Cell Properties",size:"normal",body:Di(n)?u:i,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:o,onSubmit:r(Il,n,e)})}},Ml=[{type:"listbox",name:"type",label:"Row type",items:[{text:"Header",value:"header"},{text:"Body",value:"body"},{text:"Footer",value:"footer"}]},{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height",type:"input"}],Nl=function(n){return Ml.concat(function(n){var t=hl(function(n){return n.getParam("table_row_class_list",[],"array")}(n))
return t.length>0?f.some({name:"class",type:"listbox",label:"Class",items:t}):f.none()}(n).toArray())},jl=function(n,t,e,r){var o=1===t.length
O(t,(function(t){r.type!==Wi(t.parentNode)&&Ka(n,t,r.type)
var u=o?Al.normal(n,t):Al.ifTruthy(n,t);(function(n,t){n.setAttrib("scope",t.scope),n.setAttrib("class",t.class),n.setStyle("height",qi(t.height))})(u,r),Oi(n)&&function(n,t){n.setStyle("background-color",t.backgroundcolor),n.setStyle("border-color",t.bordercolor),n.setStyle("border-style",t.borderstyle)}(u,r),r.align!==e.align&&(pl(n,t),gl(n,t,r.align))}))},_l=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){jl(n,t,e,o),n.focus()}))},Wl=function(n){var t=Za(Gi(n),Br.selected)
if(0!==t.length){var e=D(t,(function(t){return function(n,t,e){var r=n.dom
return z({height:r.getStyle(t,"height")||r.getAttrib(t,"height"),scope:r.getAttrib(t,"scope"),class:r.getAttrib(t,"class",""),type:Ua(0,t),align:Sl(n,t)},e?wl(r,t):{})}(n,t.dom,Oi(n))})),o=yl(e),u={type:"tabpanel",tabs:[{title:"General",name:"general",items:Nl(n)},Cl("row")]},i={type:"panel",items:[{type:"grid",columns:2,items:Nl(n)}]}
n.windowManager.open({title:"Row Properties",size:"normal",body:Oi(n)?u:i,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:o,onSubmit:r(_l,n,D(t,(function(n){return n.dom})),o)})}},zl=tinymce.util.Tools.resolve("tinymce.Env"),Fl=function(n,t,e){var r=e?[{type:"input",name:"cols",label:"Cols",inputMode:"numeric"},{type:"input",name:"rows",label:"Rows",inputMode:"numeric"}]:[],o=function(n){return n.getParam("table_appearance_options",!0,"boolean")}(n)?[{type:"input",name:"cellspacing",label:"Cell spacing",inputMode:"numeric"},{type:"input",name:"cellpadding",label:"Cell padding",inputMode:"numeric"},{type:"input",name:"border",label:"Border width"},{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[],u=t.length>0?[{type:"listbox",name:"class",label:"Class",items:t}]:[]
return r.concat([{type:"input",name:"width",label:"Width"},{type:"input",name:"height",label:"Height"}]).concat(o).concat([{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]}]).concat(u)},Ll=function(n,t,e,r){if("TD"===t.tagName||"TH"===t.tagName)d(e)?n.setStyle(t,e,r):n.setStyle(t,e)
else if(t.children)for(var o=0;o<t.children.length;o++)Ll(n,t.children[o],e,r)},Hl=function(n,t,e){var r,o=n.dom,u=e.getData()
e.close(),""===u.class&&delete u.class,n.undoManager.transact((function(){if(!t){var e=parseInt(u.cols,10)||1,i=parseInt(u.rows,10)||1
t=ul(n,e,i,0,0)}(function(n,t,e){var r,o=n.dom,u={},i={}
if(u.class=e.class,i.height=qi(e.height),o.getAttrib(t,"width")&&!Bi(n)?u.width=(r=e.width)?r.replace(/px$/,""):"":i.width=qi(e.width),Bi(n)?(i["border-width"]=qi(e.border),i["border-spacing"]=qi(e.cellspacing)):(u.border=e.border,u.cellpadding=e.cellpadding,u.cellspacing=e.cellspacing),Bi(n)&&t.children)for(var c=0;c<t.children.length;c++)Ll(o,t.children[c],{"border-width":qi(e.border),padding:qi(e.cellpadding)}),Ai(n)&&Ll(o,t.children[c],{"border-color":e.bordercolor})
Ai(n)&&(i["background-color"]=e.backgroundcolor,i["border-color"]=e.bordercolor,i["border-style"]=e.borderstyle),u.style=o.serializeStyle(z(z({},Ri(n)),i)),o.setAttribs(t,z(z({},Ti(n)),u))})(n,t,u),(r=o.select("caption",t)[0])&&!u.caption&&o.remove(r),!r&&u.caption&&((r=o.create("caption")).innerHTML=zl.ie?" ":'<br data-mce-bogus="1"/>',t.insertBefore(r,t.firstChild)),""===u.align?pl(n,t):gl(n,t,u.align),n.focus(),n.addVisual()}))},ql=function(n,t){var e,o=n.dom,u=function(n,t){var e,r,o,u,i=Ri(n),c=Ti(n),a=t?(e=n.dom,{borderstyle:Fn(i,"border-style").getOr(""),bordercolor:bl(e)(Fn(i,"border-color").getOr("")),backgroundcolor:bl(e)(Fn(i,"background-color").getOr(""))}):{}
return z(z(z(z(z(z({},{height:"",width:"100%",cellspacing:"",cellpadding:"",caption:!1,class:"",align:"",border:""}),i),c),a),(u=i["border-width"],Bi(n)&&u?{border:u}:Fn(c,"border").fold((function(){return{}}),(function(n){return{border:n}})))),(r=Fn(i,"border-spacing").or(Fn(c,"cellspacing")).fold((function(){return{}}),(function(n){return{cellspacing:n}})),o=Fn(i,"border-padding").or(Fn(c,"cellpadding")).fold((function(){return{}}),(function(n){return{cellpadding:n}})),z(z({},r),o)))}(n,Ai(n))
!1===t?(e=o.getParent(n.selection.getStart(),"table"))?u=function(n,t,e){var r=n.dom
return z({width:r.getStyle(t,"width")||r.getAttrib(t,"width"),height:r.getStyle(t,"height")||r.getAttrib(t,"height"),cellspacing:r.getStyle(t,"border-spacing")||r.getAttrib(t,"cellspacing"),cellpadding:r.getAttrib(t,"cellpadding")||dl(n.dom,t,"padding"),border:function(t,e){var r=Lt(Dn.fromDom(e),"border-width")
return Bi(n)&&r.isSome()?r.getOr(""):t.getAttrib(e,"border")||dl(n.dom,e,"border-width")||dl(n.dom,e,"border")}(r,t),caption:!!r.select("caption",t)[0],class:r.getAttrib(t,"class",""),align:Sl(n,t)},e?wl(r,t):{})}(n,e,Ai(n)):Ai(n)&&(u.borderstyle="",u.bordercolor="",u.backgroundcolor=""):(u.cols="1",u.rows="1",Ai(n)&&(u.borderstyle="",u.bordercolor="",u.backgroundcolor=""))
var i=hl(function(n){return n.getParam("table_class_list",[],"array")}(n))
i.length>0&&u.class&&(u.class=u.class.replace(/\s*mce\-item\-table\s*/g,""))
var c={type:"grid",columns:2,items:Fl(n,i,t)},a=Ai(n)?{type:"tabpanel",tabs:[{title:"General",name:"general",items:[c]},Cl("table")]}:{type:"panel",items:[c]}
n.windowManager.open({title:"Table Properties",size:"normal",body:a,onSubmit:r(Hl,n,e),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:u})},Vl=function(n){return Ja(Gi(n))},Ul=function(n){return Ya(Gi(n))},$l=function(t,e,u,i,c){var a=Hi(t),l=function(n){return te(n,a)},s=function(n){return Ul(t).each((function(e){l(e).each((function(r){var o=Ir(i,r,e)
n(r,o).each((function(n){t.selection.setRng(n),t.focus(),u.clear(r),Vi(r)}))}))}))},m=function(){return Ul(t).map((function(e){return l(e).bind((function(r){var o=Ir(i,r,e),u=yr(n,Dn.fromDom(t.getDoc()),f.none())
return sl(r,o,u)}))}))},p=function(){return Ul(t).map((function(n){return l(n).bind((function(t){var e=Ir(i,t,n)
return fl(t,e)}))}))},v=function(n,e){return e().each((function(e){var r=D(e,(function(n){return mr(n)}))
Ul(t).each((function(e){return l(e).each((function(e){var o=Cr(Dn.fromDom(t.getDoc())),c=function(n,t,e,r){return{selection:Sr(n),clipboard:e,generators:r}}(i,0,r,o)
n(e,c).each((function(n){t.selection.setRng(n),t.focus(),u.clear(e)}))}))}))}))}
Nn({mceTableSplitCells:function(){return s(e.unmergeCells)},mceTableMergeCells:function(){return s(e.mergeCells)},mceTableInsertRowBefore:function(){return s(e.insertRowsBefore)},mceTableInsertRowAfter:function(){return s(e.insertRowsAfter)},mceTableInsertColBefore:function(){return s(e.insertColumnsBefore)},mceTableInsertColAfter:function(){return s(e.insertColumnsAfter)},mceTableDeleteCol:function(){return s(e.deleteColumn)},mceTableDeleteRow:function(){return s(e.deleteRow)},mceTableCutCol:function(n){return p().each((function(n){c.setColumns(n),s(e.deleteColumn)}))},mceTableCutRow:function(n){return m().each((function(n){c.setRows(n),s(e.deleteRow)}))},mceTableCopyCol:function(n){return p().each((function(n){return c.setColumns(n)}))},mceTableCopyRow:function(n){return m().each((function(n){return c.setRows(n)}))},mceTablePasteColBefore:function(n){return v(e.pasteColsBefore,c.getColumns)},mceTablePasteColAfter:function(n){return v(e.pasteColsAfter,c.getColumns)},mceTablePasteRowBefore:function(n){return v(e.pasteRowsBefore,c.getRows)},mceTablePasteRowAfter:function(n){return v(e.pasteRowsAfter,c.getRows)},mceTableDelete:function(){return Vl(t).each((function(n){te(n,a).filter(o(a)).each((function(n){var e=Dn.fromText("")
if(Ce(n,e),Ae(n),t.dom.isEmpty(t.getBody()))t.setContent(""),t.selection.setCursorLocation()
else{var r=t.dom.createRng()
r.setStart(e.dom,0),r.setEnd(e.dom,0),t.selection.setRng(r),t.nodeChanged()}}))}))},mceTableSizingMode:function(n,e){return function(n){return Vl(t).each((function(e){Pi(t)||Ii(t)||Ei(t)||te(e,a).each((function(e){"relative"!==n||Cu(e)?"fixed"!==n||xu(e)?"responsive"!==n||Su(e)||ic(e):uc(t,e):oc(t,e),Vi(e)}))}))}(e)}},(function(n,e){return t.addCommand(e,n)})),Nn({mceTableCellType:function(n,r){return e.setTableCellType(t,r)},mceTableRowType:function(n,r){return e.setTableRowType(t,r)}},(function(n,e){return t.addCommand(e,n)})),t.addCommand("mceTableColType",(function(n,t){return Fn(t,"type").each((function(n){return s("th"===n?e.makeColumnHeader:e.unmakeColumnHeader)}))})),Nn({mceTableProps:r(ql,t,!1),mceTableRowProps:r(Wl,t),mceTableCellProps:r(kl,t,i)},(function(n,e){return t.addCommand(e,(function(){return n()}))})),t.addCommand("mceInsertTable",(function(n,e){g(e)&&kn(e).length>0?il(t,e.rows,e.columns,e.options,"Invalid values for mceInsertTable - rows and columns values are required to insert a table."):ql(t,!0)})),t.addCommand("mceTableApplyCellStyle",(function(n,e){if(g(e)){var r=Qa(Gi(t),i)
0!==r.length&&Nn(e,(function(n,e){var o="tablecell"+e.toLowerCase().replace("-","")
t.formatter.has(o)&&d(n)&&O(r,(function(e){Al.normal(t,e.dom).setFormat(o,n)}))}))}}))},Gl=function(n,t,e){var r=Hi(n)
Nn({mceTableRowType:function(){return t.getTableRowType(n)},mceTableCellType:function(){return t.getTableCellType(n)},mceTableColType:function(){return Ya(Gi(n)).bind((function(n){return function(n){return te(n,r)}(n).map((function(r){var o=Ir(e,r,n)
return t.getTableColType(r,o)}))})).getOr("")}},(function(t,e){return n.addQueryValueHandler(e,t)}))},Kl={tablecellbackgroundcolor:{selector:"td,th",styles:{backgroundColor:"%value"},remove_similar:!0},tablecellbordercolor:{selector:"td,th",styles:{borderColor:"%value"},remove_similar:!0},tablecellborderstyle:{selector:"td,th",styles:{borderStyle:"%value"},remove_similar:!0},tablecellborderwidth:{selector:"td,th",styles:{borderWidth:"%value"},remove_similar:!0}},Xl=Xe([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]),Yl=z(z({},Xl),{none:function(n){return void 0===n&&(n=void 0),Xl.none(n)}}),Jl=function(n,t){return te(n,t).bind((function(t){var e=Zt(t)
return P(e,(function(t){return Bn(n,t)})).map((function(n){return{index:n,all:e}}))}))},Ql=function(n,t,e,r){return{start:n,soffset:t,finish:e,foffset:r}},Zl=Xe([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),nf={before:Zl.before,on:Zl.on,after:Zl.after,cata:function(n,t,e,r){return n.fold(t,e,r)},getStart:function(n){return n.fold(e,e,e)}},tf=Xe([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),ef={domRange:tf.domRange,relative:tf.relative,exact:tf.exact,exactFromRange:function(n){return tf.exact(n.start,n.soffset,n.finish,n.foffset)},getWin:function(n){var t,e=function(n){return n.match({domRange:function(n){return Dn.fromDom(n.startContainer)},relative:function(n,t){return nf.getStart(n)},exact:function(n,t,e,r){return n}})}(n)
return t=e,Dn.fromDom(et(t).dom.defaultView)},range:Ql},rf=function(n,t){return n.selectNodeContents(t.dom)},of=function(n,t,e){var r,o=n.document.createRange()
return r=o,t.fold((function(n){r.setStartBefore(n.dom)}),(function(n,t){r.setStart(n.dom,t)}),(function(n){r.setStartAfter(n.dom)})),function(n,t){t.fold((function(t){n.setEndBefore(t.dom)}),(function(t,e){n.setEnd(t.dom,e)}),(function(t){n.setEndAfter(t.dom)}))}(o,e),o},uf=function(n,t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},cf=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom,width:n.width,height:n.height}},af=Xe([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),lf=function(n,t,e){return t(Dn.fromDom(e.startContainer),e.startOffset,Dn.fromDom(e.endContainer),e.endOffset)},ff=function(n,e){return function(n,t){var e=t.ltr()
return e.collapsed?t.rtl().filter((function(n){return!1===n.collapsed})).map((function(n){return af.rtl(Dn.fromDom(n.endContainer),n.endOffset,Dn.fromDom(n.startContainer),n.startOffset)})).getOrThunk((function(){return lf(0,af.ltr,e)})):lf(0,af.ltr,e)}(0,function(n,e){return e.match({domRange:function(n){return{ltr:t(n),rtl:f.none}},relative:function(t,e){return{ltr:L((function(){return of(n,t,e)})),rtl:L((function(){return f.some(of(n,e,t))}))}},exact:function(t,e,r,o){return{ltr:L((function(){return uf(n,t,e,r,o)})),rtl:L((function(){return f.some(uf(n,r,o,t,e))}))}}})}(n,e))},sf=function(n,t){return ff(n,t).match({ltr:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},rtl:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(r.dom,o),u.setEnd(t.dom,e),u}})},mf=(af.ltr,af.rtl,function(n,t,e){return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}),df=function(n,t,e,r,o){var u=function(e){var r=n.dom.createRange()
return r.setStart(t.dom,e),r.collapse(!0),r},i=Ie(t).length,c=function(n,t,e,r,o){if(0===o)return 0
if(t===r)return o-1
for(var u=r,i=1;i<o;i++){var c=n(i),a=Math.abs(t-c.left)
if(e<=c.bottom){if(e<c.top||a>u)return i-1
u=a}}return 0}((function(n){return u(n).getBoundingClientRect()}),e,r,o.right,i)
return u(c)},gf=function(n,t,e,r){return Qn(t)?function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getClientRects()
return W(u,(function(n){return mf(n,e,r)?f.some(n):f.none()})).map((function(o){return df(n,t,e,r,o)}))}(n,t,e,r):function(n,t,e,r){var o=n.dom.createRange(),u=ct(t)
return W(u,(function(t){return o.selectNode(t.dom),mf(o.getBoundingClientRect(),e,r)?gf(n,t,e,r):f.none()}))}(n,t,e,r)},pf=function(n,t){return t-n.left<n.right-t},vf=function(n,t,e){var r=n.dom.createRange()
return r.selectNode(t.dom),r.collapse(e),r},hf=function(n,t,e){var r=n.dom.createRange()
r.selectNode(t.dom)
var o=r.getBoundingClientRect(),u=pf(o,e)
return(true===u?cr:ar)(t).map((function(t){return vf(n,t,u)}))},bf=function(n,t,e){var r=t.dom.getBoundingClientRect(),o=pf(r,e)
return f.some(vf(n,t,o))},wf=function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect()
return function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect(),i=Math.max(u.left,Math.min(u.right,e)),c=Math.max(u.top,Math.min(u.bottom,r))
return gf(n,t,i,c)}(n,t,Math.max(u.left,Math.min(u.right,e)),Math.max(u.top,Math.min(u.bottom,r)))},yf=document.caretPositionFromPoint?function(n,t,e){return f.from(n.dom.caretPositionFromPoint(t,e)).bind((function(t){if(null===t.offsetNode)return f.none()
var e=n.dom.createRange()
return e.setStart(t.offsetNode,t.offset),e.collapse(),f.some(e)}))}:document.caretRangeFromPoint?function(n,t,e){return f.from(n.dom.caretRangeFromPoint(t,e))}:function(n,t,e){return Dn.fromPoint(n,t,e).bind((function(r){var o=function(){return function(n,t,e){return(0===ct(t).length?bf:hf)(n,t,e)}(n,r,t)}
return 0===ct(r).length?o():wf(n,r,t,e).orThunk(o)}))},Cf=function(n,t){var e=Gn(n)
return"input"===e?nf.after(n):S(["br","img"],e)?0===t?nf.before(n):nf.after(n):nf.on(n,t)},xf=function(n,t){var e=n.fold(nf.before,Cf,nf.after),r=t.fold(nf.before,Cf,nf.after)
return ef.relative(e,r)},Sf=function(n,t,e,r){var o=Cf(n,t),u=Cf(e,r)
return ef.relative(o,u)},Tf=function(n,t,e,r){var o=function(n,t,e,r){var o=tt(n).dom.createRange()
return o.setStart(n.dom,t),o.setEnd(e.dom,r),o}(n,t,e,r),u=Bn(n,e)&&t===r
return o.collapsed&&!u},Rf=function(n){return f.from(n.getSelection())},Df=function(n,t){Rf(n).each((function(n){n.removeAllRanges(),n.addRange(t)}))},Of=function(n,t,e,r,o){var u=uf(n,t,e,r,o)
Df(n,u)},Af=function(n,t){return ff(n,t).match({ltr:function(t,e,r,o){Of(n,t,e,r,o)},rtl:function(t,e,r,o){Rf(n).each((function(u){if(u.setBaseAndExtent)u.setBaseAndExtent(t.dom,e,r.dom,o)
else if(u.extend)try{(function(n,t,e,r,o,u){t.collapse(e.dom,r),t.extend(o.dom,u)})(0,u,t,e,r,o)}catch(i){Of(n,r,o,t,e)}else Of(n,r,o,t,e)}))}})},Bf=function(n,t,e,r,o){var u=Sf(t,e,r,o)
Af(n,u)},Ef=function(n,t,e){var r=xf(t,e)
Af(n,r)},If=function(n){var t=ef.getWin(n).dom,e=function(n,e,r,o){return uf(t,n,e,r,o)},r=function(n){return n.match({domRange:function(n){var t=Dn.fromDom(n.startContainer),e=Dn.fromDom(n.endContainer)
return Sf(t,n.startOffset,e,n.endOffset)},relative:xf,exact:Sf})}(n)
return ff(t,r).match({ltr:e,rtl:e})},Pf=function(n){if(n.rangeCount>0){var t=n.getRangeAt(0),e=n.getRangeAt(n.rangeCount-1)
return f.some(Ql(Dn.fromDom(t.startContainer),t.startOffset,Dn.fromDom(e.endContainer),e.endOffset))}return f.none()},kf=function(n){if(null===n.anchorNode||null===n.focusNode)return Pf(n)
var t=Dn.fromDom(n.anchorNode),e=Dn.fromDom(n.focusNode)
return Tf(t,n.anchorOffset,e,n.focusOffset)?f.some(Ql(t,n.anchorOffset,e,n.focusOffset)):Pf(n)},Mf=function(n,t){var e=function(n,t){var e=n.document.createRange()
return rf(e,t),e}(n,t)
Df(n,e)},Nf=function(n){return function(n){return Rf(n).filter((function(n){return n.rangeCount>0})).bind(kf)}(n).map((function(n){return ef.exact(n.start,n.soffset,n.finish,n.foffset)}))},jf=function(n,t){return function(n){var t=n.getClientRects(),e=t.length>0?t[0]:n.getBoundingClientRect()
return e.width>0||e.height>0?f.some(e).map(cf):f.none()}(sf(n,t))},_f=function(n,t,e){return function(n,t,e){var r=Dn.fromDom(n.document)
return yf(r,t,e).map((function(n){return Ql(Dn.fromDom(n.startContainer),n.startOffset,Dn.fromDom(n.endContainer),n.endOffset)}))}(n,t,e)},Wf=tinymce.util.Tools.resolve("tinymce.util.VK"),zf=function(n,t,e,r){return Hf(n,t,function(n,t){return Jl(n,t).fold((function(){return Yl.none(n)}),(function(t){return t.index+1<t.all.length?Yl.middle(n,t.all[t.index+1]):Yl.last(n)}))}(e),r)},Ff=function(n,t,e,r){return Hf(n,t,function(n,t){return Jl(n,t).fold((function(){return Yl.none()}),(function(t){return t.index-1>=0?Yl.middle(n,t.all[t.index-1]):Yl.first(n)}))}(e),r)},Lf=function(n,t){var e=ef.exact(t,0,t,0)
return If(e)},Hf=function(n,t,e,r){return e.fold(f.none,f.none,(function(n,t){return cr(t).map((function(n){return Lf(0,n)}))}),(function(e){return te(e,t).bind((function(t){var o=Er(e)
return n.undoManager.transact((function(){r.insertRowsAfter(t,o)})),function(n,t){var e=Ct(t,"tr")
return _(e).bind((function(n){return Dt(n,"td,th").map((function(n){return Lf(0,n)}))}))}(0,t)}))}))},qf=["table","li","dl"],Vf=function(n,t){return{selection:n,kill:t}},Uf=function(n,t,e,r){return{start:nf.on(n,t),finish:nf.on(e,r)}},$f=function(n,t){var e=sf(n,t)
return Ql(Dn.fromDom(e.startContainer),e.startOffset,Dn.fromDom(e.endContainer),e.endOffset)},Gf=Uf,Kf=function(n,t,e,r,o){return Bn(e,r)?f.none():qe(e,r,t).bind((function(t){var r=t.boxes.getOr([])
return r.length>0?(o(n,r,t.start,t.finish),f.some(Vf(f.some(Gf(e,0,e,or(e))),!0))):f.none()}))},Xf=function(n,t){return{item:n,mode:t}},Yf=function(n,t,e,r){return void 0===r&&(r=Jf),n.property().parent(t).map((function(n){return Xf(n,r)}))},Jf=function(n,t,e,r){return void 0===r&&(r=Qf),e.sibling(n,t).map((function(n){return Xf(n,r)}))},Qf=function(n,t,e,r){void 0===r&&(r=Qf)
var o=n.property().children(t)
return e.first(o).map((function(n){return Xf(n,r)}))},Zf=[{current:Yf,next:Jf,fallback:f.none()},{current:Jf,next:Qf,fallback:f.some(Yf)},{current:Qf,next:Qf,fallback:f.some(Jf)}],ns=function(n,t,e,r,o){return void 0===o&&(o=Zf),I(o,(function(n){return n.current===e})).bind((function(e){return e.current(n,t,r,e.next).orThunk((function(){return e.fallback.bind((function(e){return ns(n,t,e,r)}))}))}))},ts=function(){return{sibling:function(n,t){return n.query().prevSibling(t)},first:function(n){return n.length>0?f.some(n[n.length-1]):f.none()}}},es=function(){return{sibling:function(n,t){return n.query().nextSibling(t)},first:function(n){return n.length>0?f.some(n[0]):f.none()}}},rs=function(n,t,e,r,o,u){return ns(n,t,r,o).bind((function(t){return u(t.item)?f.none():e(t.item)?f.some(t.item):rs(n,t.item,e,t.mode,o,u)}))},os=function(n){return function(t){return 0===n.property().children(t).length}},us=function(n,t,e,r){return rs(n,t,e,Jf,ts(),r)},is=function(n,t,e,r){return rs(n,t,e,Jf,es(),r)},cs=Ne(),as=function(n,t){return function(n,t,e){return us(n,t,os(n),e)}(cs,n,t)},ls=function(n,t){return function(n,t,e){return is(n,t,os(n),e)}(cs,n,t)},fs=Xe([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}]),ss=function(n){return Ot(n,"tr")},ms=z(z({},fs),{verify:function(n,t,e,r,o,u,i){return Ot(r,"td,th",i).bind((function(e){return Ot(t,"td,th",i).map((function(t){return Bn(e,t)?Bn(r,e)&&or(e)===o?u(t):fs.none("in same cell"):Le(ss,[e,t]).fold((function(){return function(n,t,e){var r=n.getRect(t),o=n.getRect(e)
return o.right>r.left&&o.left<r.right}(n,t,e)?fs.success():u(t)}),(function(n){return u(t)}))}))})).getOr(fs.none("default"))},cata:function(n,t,e,r,o){return n.fold(t,e,r,o)}}),ds=function(n,t){return P(n,r(Bn,t))},gs=function(n){return"br"===Gn(n)},ps=function(n,t,e){return t(n,e).bind((function(n){return Qn(n)&&0===Ie(n).trim().length?ps(n,t,e):f.some(n)}))},vs=function(n,t,e,r){return function(n,t){return at(n,t).filter(gs).orThunk((function(){return at(n,t-1).filter(gs)}))}(t,e).bind((function(t){return r.traverse(t).fold((function(){return ps(t,r.gather,n).map(r.relative)}),(function(n){return function(n){return rt(n).bind((function(t){var e=ct(t)
return ds(e,n).map((function(r){return function(n,t,e,r){return{parent:n,children:t,element:e,index:r}}(t,e,n,r)}))}))}(n).map((function(n){return nf.on(n.parent,n.index)}))}))}))},hs=function(n,t,e,r){return(gs(t)?function(n,t,e){return e.traverse(t).orThunk((function(){return ps(t,e.gather,n)})).map(e.relative)}(n,t,r):vs(n,t,e,r)).map((function(n){return{start:n,finish:n}}))},bs=function(n,t){return{left:n.left,top:n.top+t,right:n.right,bottom:n.bottom+t}},ws=function(n,t){return{left:n.left,top:n.top-t,right:n.right,bottom:n.bottom-t}},ys=function(n,t,e){return{left:n.left+t,top:n.top+e,right:n.right+t,bottom:n.bottom+e}},Cs=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},xs=function(n,t){return f.some(n.getRect(t))},Ss=function(n,t,e){return Jn(t)?xs(n,t).map(Cs):Qn(t)?function(n,t,e){return e>=0&&e<or(t)?n.getRangedRect(t,e,t,e+1):e>0?n.getRangedRect(t,e-1,t,e):f.none()}(n,t,e).map(Cs):f.none()},Ts=function(n,t){return Jn(t)?xs(n,t).map(Cs):Qn(t)?n.getRangedRect(t,0,t,or(t)).map(Cs):f.none()},Rs=Xe([{none:[]},{retry:["caret"]}]),Ds=function(n,t,e){return(r=t,o=da,xt((function(n,t){return t(n)}),St,r,o,i)).fold(u,(function(t){return Ts(n,t).exists((function(n){return function(n,t){return n.left<t.left||Math.abs(t.right-n.left)<1||n.left>t.right}(e,n)}))}))
var r,o,i},Os={point:function(n){return n.bottom},adjuster:function(n,t,e,r,o){var u=bs(o,5)
return Math.abs(e.bottom-r.bottom)<1||e.top>o.bottom?Rs.retry(u):e.top===o.bottom?Rs.retry(bs(o,1)):Ds(n,t,o)?Rs.retry(ys(u,5,0)):Rs.none()},move:bs,gather:ls},As=function(n,t,e,r,o){return 0===o?f.some(r):function(n,t,e){return n.elementFromPoint(t,e).filter((function(n){return"table"===Gn(n)})).isSome()}(n,r.left,t.point(r))?function(n,t,e,r,o){return As(n,t,e,t.move(r,5),o)}(n,t,e,r,o-1):n.situsFromPoint(r.left,t.point(r)).bind((function(u){return u.start.fold(f.none,(function(u){return Ts(n,u).bind((function(i){return t.adjuster(n,u,i,e,r).fold(f.none,(function(r){return As(n,t,e,r,o-1)}))})).orThunk((function(){return f.some(r)}))}),f.none)}))},Bs=function(n,t,e){var r=n.move(e,5),o=As(t,n,e,r,100).getOr(r)
return function(n,t,e){return n.point(t)>e.getInnerHeight()?f.some(n.point(t)-e.getInnerHeight()):n.point(t)<0?f.some(-n.point(t)):f.none()}(n,o,t).fold((function(){return t.situsFromPoint(o.left,n.point(o))}),(function(e){return t.scrollBy(0,e),t.situsFromPoint(o.left,n.point(o)-e)}))},Es={tryUp:r(Bs,{point:function(n){return n.top},adjuster:function(n,t,e,r,o){var u=ws(o,5)
return Math.abs(e.top-r.top)<1||e.bottom<o.top?Rs.retry(u):e.bottom===o.top?Rs.retry(ws(o,1)):Ds(n,t,o)?Rs.retry(ys(u,5,0)):Rs.none()},move:ws,gather:as}),tryDown:r(Bs,Os),ieTryUp:function(n,t){return n.situsFromPoint(t.left,t.top-5)},ieTryDown:function(n,t){return n.situsFromPoint(t.left,t.bottom+5)},getJumpSize:t(5)},Is=function(n,t,e){return n.getSelection().bind((function(r){return hs(t,r.finish,r.foffset,e).fold((function(){return f.some(lc(r.finish,r.foffset))}),(function(o){var u=n.fromSitus(o)
return function(n){return ms.cata(n,(function(n){return f.none()}),(function(){return f.none()}),(function(n){return f.some(lc(n,0))}),(function(n){return f.some(lc(n,or(n)))}))}(ms.verify(n,r.finish,r.foffset,u.finish,u.foffset,e.failure,t))}))}))},Ps=function(n,t,e,r,o,u){return 0===u?f.none():Ns(n,t,e,r,o).bind((function(i){var c=n.fromSitus(i),a=ms.verify(n,e,r,c.finish,c.foffset,o.failure,t)
return ms.cata(a,(function(){return f.none()}),(function(){return f.some(i)}),(function(i){return Bn(e,i)&&0===r?ks(n,e,r,ws,o):Ps(n,t,i,0,o,u-1)}),(function(i){return Bn(e,i)&&r===or(i)?ks(n,e,r,bs,o):Ps(n,t,i,or(i),o,u-1)}))}))},ks=function(n,t,e,r,o){return Ss(n,t,e).bind((function(t){return Ms(n,o,r(t,Es.getJumpSize()))}))},Ms=function(n,t,e){var r=Tn().browser
return r.isChrome()||r.isSafari()||r.isFirefox()||r.isEdge()?t.otherRetry(n,e):r.isIE()?t.ieRetry(n,e):f.none()},Ns=function(n,t,e,r,o){return Ss(n,e,r).bind((function(t){return Ms(n,o,t)}))},js=function(n,t){return St(n,(function(n){return rt(n).exists((function(n){return Bn(n,t)}))}),e).isSome()
var e},_s=function(n,t,e,r,o){return Ot(r,"td,th",t).bind((function(r){return Ot(r,"table",t).bind((function(u){return js(o,u)?function(n,t,e){return Is(n,t,e).bind((function(r){return Ps(n,t,r.element,r.offset,e,20).map(n.fromSitus)}))}(n,t,e).bind((function(n){return Ot(n.finish,"td,th",t).map((function(t){return{start:r,finish:t,range:n}}))})):f.none()}))}))},Ws=function(n,t,e,r,o,u){return Tn().browser.isIE()?f.none():u(r,t).orThunk((function(){return _s(n,t,e,r,o).map((function(n){var t=n.range
return Vf(f.some(Gf(t.start,t.soffset,t.finish,t.foffset)),!0)}))}))},zs=function(n,t){return Ot(n,"tr",t).bind((function(n){return Ot(n,"table",t).bind((function(e){var r=Ct(e,"tr")
return Bn(n,r[0])?function(n,t,e){return us(cs,n,t,e)}(e,(function(n){return ar(n).isSome()}),t).map((function(n){var t=or(n)
return Vf(f.some(Gf(n,t,n,t)),!0)})):f.none()}))}))},Fs=function(n,t){return Ot(n,"tr",t).bind((function(n){return Ot(n,"table",t).bind((function(e){var r=Ct(e,"tr")
return Bn(n,r[r.length-1])?function(n,t,e){return is(cs,n,t,e)}(e,(function(n){return cr(n).isSome()}),t).map((function(n){return Vf(f.some(Gf(n,0,n,0)),!0)})):f.none()}))}))},Ls=function(n,t,e,r,o,u,i){return _s(n,e,r,o,u).bind((function(n){return Kf(t,e,n.start,n.finish,i)}))},Hs=function(n,t){return Ot(n,"td,th",t)}
function qs(n,t,e,r){var o,u=(o=Ki(f.none()),{clear:function(){return o.set(f.none())},set:function(n){return o.set(f.some(n))},isSet:function(){return o.get().isSome()},on:function(n){return o.get().each(n)}}),i=u.clear
return{clearstate:i,mousedown:function(n){r.clear(t),Hs(n.target,e).each(u.set)},mouseover:function(o){u.on((function(u){r.clearBeforeUpdate(t),Hs(o.target,e).each((function(o){qe(u,o,e).each((function(e){var i=e.boxes.getOr([]);(i.length>1||1===i.length&&!Bn(u,o))&&(r.selectRange(t,i,e.start,e.finish),n.selectContents(o))}))}))}))},mouseup:function(n){i()}}}var Vs={traverse:it,gather:ls,relative:nf.before,otherRetry:Es.tryDown,ieRetry:Es.ieTryDown,failure:ms.failedDown},Us={traverse:ut,gather:as,relative:nf.before,otherRetry:Es.tryUp,ieRetry:Es.ieTryUp,failure:ms.failedUp},$s=function(n){return function(t){return t===n}},Gs=$s(38),Ks=$s(40),Xs=function(n){return n>=37&&n<=40},Ys={isBackward:$s(37),isForward:$s(39)},Js={isBackward:$s(39),isForward:$s(37)},Qs=function(n){return{elementFromPoint:function(t,e){return Dn.fromPoint(Dn.fromDom(n.document),t,e)},getRect:function(n){return n.dom.getBoundingClientRect()},getRangedRect:function(t,e,r,o){var u=ef.exact(t,e,r,o)
return jf(n,u)},getSelection:function(){return Nf(n).map((function(t){return $f(n,t)}))},fromSitus:function(t){var e=ef.relative(t.start,t.finish)
return $f(n,e)},situsFromPoint:function(t,e){return _f(n,t,e).map((function(n){return Uf(n.start,n.soffset,n.finish,n.foffset)}))},clearSelection:function(){(function(n){Rf(n).each((function(n){return n.removeAllRanges()}))})(n)},collapseSelection:function(t){void 0===t&&(t=!1),Nf(n).each((function(e){return e.fold((function(n){return n.collapse(t)}),(function(e,r){var o=t?e:r
Ef(n,o,o)}),(function(e,r,o,u){var i=t?e:o,c=t?r:u
Bf(n,i,c,i,c)}))}))},setSelection:function(t){Bf(n,t.start,t.soffset,t.finish,t.foffset)},setRelativeSelection:function(t,e){Ef(n,t,e)},selectContents:function(t){Mf(n,t)},getInnerHeight:function(){return n.innerHeight},getScrollY:function(){var t,e,r,o
return(t=Dn.fromDom(n.document),e=void 0!==t?t.dom:document,r=e.body.scrollLeft||e.documentElement.scrollLeft,o=e.body.scrollTop||e.documentElement.scrollTop,Jr(r,o)).top},scrollBy:function(t,e){(function(n,t,e){var r=(void 0!==e?e.dom:document).defaultView
r&&r.scrollBy(n,t)})(t,e,Dn.fromDom(n.document))}}},Zs=function(n,t){return{rows:n,cols:t}},nm=function(n,t,e,o){var u=Qs(n),i=function(){return o.clear(t),f.none()}
return{keydown:function(n,c,a,l,s,m){var d=n.raw,g=d.which,p=!0===d.shiftKey
return Ve(t,o.selectedSelector).fold((function(){return Ks(g)&&p?r(Ls,u,t,e,Vs,l,c,o.selectRange):Gs(g)&&p?r(Ls,u,t,e,Us,l,c,o.selectRange):Ks(g)?r(Ws,u,e,Vs,l,c,Fs):Gs(g)?r(Ws,u,e,Us,l,c,zs):f.none}),(function(n){var e=function(e){return function(){return W(e,(function(e){return function(n,t,e,r,o){return $e(r,n,t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){return o.clearBeforeUpdate(e),o.selectRange(e,n.boxes,n.start,n.finish),n.boxes}))}(e.rows,e.cols,t,n,o)})).fold((function(){return Ue(t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){var e=Ks(g)||m.isForward(g)?nf.after:nf.before
return u.setRelativeSelection(nf.on(n.first,0),e(n.table)),o.clear(t),Vf(f.none(),!0)}))}),(function(n){return f.some(Vf(f.none(),!0))}))}}
return Ks(g)&&p?e([Zs(1,0)]):Gs(g)&&p?e([Zs(-1,0)]):m.isBackward(g)&&p?e([Zs(0,-1),Zs(-1,0)]):m.isForward(g)&&p?e([Zs(0,1),Zs(1,0)]):Xs(g)&&!1===p?i:f.none}))()},keyup:function(n,r,u,i,c){return Ve(t,o.selectedSelector).fold((function(){var a=n.raw,l=a.which
return!1===(!0===a.shiftKey)?f.none():Xs(l)?function(n,t,e,r,o,u,i){return Bn(e,o)&&r===u?f.none():Ot(e,"td,th",t).bind((function(e){return Ot(o,"td,th",t).bind((function(r){return Kf(n,t,e,r,i)}))}))}(t,e,r,u,i,c,o.selectRange):f.none()}),f.none)}}},tm=function(n,t,e){var r=function(t){kt(t,n.selected),kt(t,n.firstSelected),kt(t,n.lastSelected)},o=function(t){Bt(t,n.selected,"1")},u=function(n){i(n),e()},i=function(t){var e=Ct(t,n.selectedSelector)
O(e,r)}
return{clearBeforeUpdate:i,clear:u,selectRange:function(e,r,i,c){u(e),O(r,o),Bt(i,n.firstSelected,"1"),Bt(c,n.lastSelected,"1"),t(r,i,c)},selectedSelector:n.selectedSelector,firstSelectedSelector:n.firstSelectedSelector,lastSelectedSelector:n.lastSelectedSelector}},em=function(n,t,e){var r=le.fromTable(n)
return _c(r,t).map((function(n){var t=Ec(r,e,!1)
return{upOrLeftCells:function(n,t,e){var r=n.slice(0,t[t.length-1].row+1),o=Pc(r,e)
return M(o,(function(n){var e=n.cells.slice(0,t[t.length-1].column+1)
return D(e,(function(n){return n.element}))}))}(t,n,e),downOrRightCells:function(n,t,e){var r=n.slice(t[0].row+t[0].rowspan-1,n.length),o=Pc(r,e)
return M(o,(function(n){var e=n.cells.slice(t[0].column+t[0].colspan-1,n.cells.length)
return D(e,(function(n){return n.element}))}))}(t,n,e)}}))},rm=function(n){return!1===Ku(Dn.fromDom(n.target),"ephox-snooker-resizer-bar")}
function om(t,e,r){var o=tm(Br,(function(e,o,u){r.targets().each((function(r){te(o).each((function(i){var c=_i(t),a=yr(n,Dn.fromDom(t.getDoc()),c),l=em(i,r,a);(function(n,t,e,r,o){n.fire("TableSelectionChange",{cells:t,start:e,finish:r,otherCells:o})})(t,e,o,u,l)}))}))}),(function(){return function(n){n.fire("TableSelectionClear")}(t)}))
return t.on("init",(function(r){var u=t.getWin(),i=zi(t),c=Hi(t),a=function(n,t,e,r){var o=qs(Qs(n),t,e,r)
return{clearstate:o.clearstate,mousedown:o.mousedown,mouseover:o.mouseover,mouseup:o.mouseup}}(u,i,c,o),l=nm(u,i,c,o),f=function(n,t,e,r){var o=Qs(n)
return function(n,u){r.clearBeforeUpdate(t),qe(n,u,e).each((function(n){var e=n.boxes.getOr([])
r.selectRange(t,e,n.start,n.finish),o.selectContents(u),o.collapseSelection()}))}}(u,i,c,o)
t.on("TableSelectorChange",(function(n){return f(n.start,n.finish)}))
var s,m,d=function(n,e){(function(n){return!0===n.raw.shiftKey})(n)&&(e.kill&&n.kill(),e.selection.each((function(n){var e=ef.relative(n.start,n.finish),r=sf(u,e)
t.selection.setRng(r)})))},g=function(n){return 0===n.button},p=(s=Ki(Dn.fromDom(i)),m=Ki(0),{touchEnd:function(n){var t=Dn.fromDom(n.target)
if("td"===Gn(t)||"th"===Gn(t)){var e=s.get(),r=m.get()
Bn(e,t)&&n.timeStamp-r<300&&(n.preventDefault(),f(t,t))}s.set(t),m.set(n.timeStamp)}})
t.on("dragstart",(function(n){a.clearstate()})),t.on("mousedown",(function(n){g(n)&&rm(n)&&a.mousedown(qu(n))})),t.on("mouseover",(function(n){var t;(void 0===(t=n).buttons||zl.browser.isEdge()&&0===t.buttons||0!=(1&t.buttons))&&rm(n)&&a.mouseover(qu(n))})),t.on("mouseup",(function(n){g(n)&&rm(n)&&a.mouseup(qu(n))})),t.on("touchend",p.touchEnd),t.on("keyup",(function(n){var e=qu(n)
if(e.raw.shiftKey&&Xs(e.raw.which)){var r=t.selection.getRng(),o=Dn.fromDom(r.startContainer),u=Dn.fromDom(r.endContainer)
l.keyup(e,o,r.startOffset,u,r.endOffset).each((function(n){d(e,n)}))}})),t.on("keydown",(function(n){var r=qu(n)
e().each((function(n){return n.hideBars()}))
var o=t.selection.getRng(),u=Dn.fromDom(o.startContainer),i=Dn.fromDom(o.endContainer),c=Fr(Ys,Js)(Dn.fromDom(t.selection.getStart()))
l.keydown(r,u,o.startOffset,i,o.endOffset,c).each((function(n){d(r,n)})),e().each((function(n){return n.showBars()}))})),t.on("NodeChange",(function(){var e=t.selection,r=Dn.fromDom(e.getStart()),u=Dn.fromDom(e.getEnd())
Le(te,[r,u]).fold((function(){return o.clear(i)}),n)}))})),{clear:o.clear}}var um=function(n,t){var e=Ki(f.none()),r=Ki([]),o=function(){return Ja(Gi(n)).bind((function(n){var e=te(n)
return e.map((function(e){return"caption"===Gn(n)?Er(n):Ir(t,e,n)}))}))},u=function(){e.set(L(o)()),O(r.get(),(function(n){return n()}))},i=function(n,t){var o=function(){return e.get().fold((function(){n.setDisabled(!0)}),(function(e){n.setDisabled(t(e))}))}
return o(),r.set(r.get().concat([o])),function(){r.set(A(r.get(),(function(n){return n!==o})))}}
return n.on("NodeChange ExecCommand TableSelectorChange",u),{onSetupTable:function(n){return i(n,(function(n){return!1}))},onSetupCellOrRow:function(n){return i(n,(function(n){return"caption"===Gn(n.element)}))},onSetupPasteable:function(n){return function(t){return i(t,(function(t){return"caption"===Gn(t.element)||n().isNone()}))}},onSetupMergeable:function(n){return i(n,(function(n){return n.mergable.isNone()}))},onSetupUnmergeable:function(n){return i(n,(function(n){return n.unmergable.isNone()}))},resetTargets:u,targets:function(){return e.get()}}}
function im(n){var t=function(n,t,e){return{get:function(){return Ge(n(),e).fold((function(){return t().map(nr).getOrThunk(Qe)}),(function(n){return Ze(n)}))}}}((function(){return zi(n)}),(function(){return Ja(Gi(n))}),Br.selectedSelector),e=um(n,t),r=ac(n),o=om(n,r.lazyResize,e),u=nl(n,r.lazyWire,t),i=function(){var n=Ki(f.none()),t=Ki(f.none()),e=function(n){n.set(f.none())}
return{getRows:n.get,setRows:function(r){n.set(r),e(t)},clearRows:function(){return e(n)},getColumns:t.get,setColumns:function(r){t.set(r),e(n)},clearColumns:function(){return e(t)}}}()
return $l(n,u,o,t,i),Gl(n,u,t),Pr(n,t,u,o),function(n,t,e){var r=function(t){return function(){return n.execCommand(t)}},o=function(t){var e=t.numRows,r=t.numColumns
n.undoManager.transact((function(){ul(n,r,e,0,0)})),n.addVisual()},u={text:"Table properties",onSetup:t.onSetupTable,onAction:r("mceTableProps")},i={text:"Delete table",icon:"table-delete-table",onSetup:t.onSetupTable,onAction:r("mceTableDelete")}
n.ui.registry.addMenuItem("tableinsertrowbefore",{text:"Insert row before",icon:"table-insert-row-above",onAction:r("mceTableInsertRowBefore"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertrowafter",{text:"Insert row after",icon:"table-insert-row-after",onAction:r("mceTableInsertRowAfter"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeleterow",{text:"Delete row",icon:"table-delete-row",onAction:r("mceTableDeleteRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablerowprops",{text:"Row properties",icon:"table-row-properties",onAction:r("mceTableRowProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutrow",{text:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopyrow",{text:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepasterowbefore",{text:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tablepasterowafter",{text:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tableinsertcolumnbefore",{text:"Insert column before",icon:"table-insert-column-before",onAction:r("mceTableInsertColBefore"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertcolumnafter",{text:"Insert column after",icon:"table-insert-column-after",onAction:r("mceTableInsertColAfter"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeletecolumn",{text:"Delete column",icon:"table-delete-column",onAction:r("mceTableDeleteCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutcolumn",{text:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopycolumn",{text:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepastecolumnbefore",{text:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addMenuItem("tablepastecolumnafter",{text:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addMenuItem("tablecellprops",{text:"Cell properties",icon:"table-cell-properties",onAction:r("mceTableCellProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablemergecells",{text:"Merge cells",icon:"table-merge-cells",onAction:r("mceTableMergeCells"),onSetup:t.onSetupMergeable}),n.ui.registry.addMenuItem("tablesplitcells",{text:"Split cell",icon:"table-split-cells",onAction:r("mceTableSplitCells"),onSetup:t.onSetupUnmergeable}),!1===function(n){return n.getParam("table_grid",!0,"boolean")}(n)?n.ui.registry.addMenuItem("inserttable",{text:"Table",icon:"table",onAction:r("mceInsertTable")}):n.ui.registry.addNestedMenuItem("inserttable",{text:"Table",icon:"table",getSubmenuItems:function(){return[{type:"fancymenuitem",fancytype:"inserttable",onAction:o}]}}),n.ui.registry.addMenuItem("inserttabledialog",{text:"Insert table",icon:"table",onAction:r("mceInsertTable")}),n.ui.registry.addMenuItem("tableprops",u),n.ui.registry.addMenuItem("deletetable",i),n.ui.registry.addNestedMenuItem("row",{type:"nestedmenuitem",text:"Row",getSubmenuItems:function(){return"tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter"}}),n.ui.registry.addNestedMenuItem("column",{type:"nestedmenuitem",text:"Column",getSubmenuItems:function(){return"tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter"}}),n.ui.registry.addNestedMenuItem("cell",{type:"nestedmenuitem",text:"Cell",getSubmenuItems:function(){return"tablecellprops tablemergecells tablesplitcells"}}),n.ui.registry.addContextMenu("table",{update:function(){return t.resetTargets(),t.targets().fold((function(){return""}),(function(n){return"caption"===Gn(n.element)?"tableprops deletetable":"cell row column | advtablesort | tableprops deletetable"}))}})}(n,e,i),function(n,t,e){n.ui.registry.addMenuButton("table",{tooltip:"Table",icon:"table",fetch:function(n){return n("inserttable | cell row column | advtablesort | tableprops deletetable")}})
var r=function(t){return function(){return n.execCommand(t)}}
n.ui.registry.addButton("tableprops",{tooltip:"Table properties",onAction:r("mceTableProps"),icon:"table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tabledelete",{tooltip:"Delete table",onAction:r("mceTableDelete"),icon:"table-delete-table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tablecellprops",{tooltip:"Cell properties",onAction:r("mceTableCellProps"),icon:"table-cell-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablemergecells",{tooltip:"Merge cells",onAction:r("mceTableMergeCells"),icon:"table-merge-cells",onSetup:t.onSetupMergeable}),n.ui.registry.addButton("tablesplitcells",{tooltip:"Split cell",onAction:r("mceTableSplitCells"),icon:"table-split-cells",onSetup:t.onSetupUnmergeable}),n.ui.registry.addButton("tableinsertrowbefore",{tooltip:"Insert row before",onAction:r("mceTableInsertRowBefore"),icon:"table-insert-row-above",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertrowafter",{tooltip:"Insert row after",onAction:r("mceTableInsertRowAfter"),icon:"table-insert-row-after",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tabledeleterow",{tooltip:"Delete row",onAction:r("mceTableDeleteRow"),icon:"table-delete-row",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablerowprops",{tooltip:"Row properties",onAction:r("mceTableRowProps"),icon:"table-row-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolbefore",{tooltip:"Insert column before",onAction:r("mceTableInsertColBefore"),icon:"table-insert-column-before",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolafter",{tooltip:"Insert column after",onAction:r("mceTableInsertColAfter"),icon:"table-insert-column-after",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tabledeletecol",{tooltip:"Delete column",onAction:r("mceTableDeleteCol"),icon:"table-delete-column",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecutrow",{tooltip:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecopyrow",{tooltip:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablepasterowbefore",{tooltip:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablepasterowafter",{tooltip:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablecutcol",{tooltip:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecopycol",{tooltip:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablepastecolbefore",{tooltip:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addButton("tablepastecolafter",{tooltip:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addButton("tableinsertdialog",{tooltip:"Insert table",onAction:r("mceInsertTable"),icon:"table"})}(n,e,i),function(n){var t=function(n){return n.getParam("table_toolbar","tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol")}(n)
t.length>0&&n.ui.registry.addContextToolbar("table",{predicate:function(t){return n.dom.is(t,"table")&&n.getBody().contains(t)},items:t,scope:"node",position:"node"})}(n),n.on("PreInit",(function(){n.serializer.addTempAttr(Br.firstSelected),n.serializer.addTempAttr(Br.lastSelected),function(n){n.formatter.register(Kl)}(n)})),function(n){return n.getParam("table_tab_navigation",!0,"boolean")}(n)&&n.on("keydown",(function(t){(function(n,t,e){if(n.keyCode===Wf.TAB){var r=zi(t),o=function(n){var t=Gn(n)
return Bn(n,r)||S(qf,t)},u=t.selection.getRng()
if(u.collapsed){var i=Dn.fromDom(u.startContainer)
Qt(i,o).each((function(r){n.preventDefault(),(n.shiftKey?Ff:zf)(t,o,r,e).each((function(n){t.selection.setRng(n)}))}))}}})(t,n,u)})),n.on("remove",(function(){r.destroy()})),function(n,t,e,r){return{insertTable:function(t,e,r){return void 0===r&&(r={}),il(n,e,t,r,"Invalid values for insertTable - rows and columns values are required to insert a table.")},setClipboardRows:al(t.setRows),getClipboardRows:cl(t.getRows),setClipboardCols:al(t.setColumns),getClipboardCols:cl(t.getColumns),resizeHandler:e,selectionTargets:r}}(n,i,r,e)}tr.add("table",im)})()

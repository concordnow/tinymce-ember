!function(){"use strict"
var n=function(){},t=function(n){return function(){return n}},e=function(n){return n}
function r(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e]
return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o=t.concat(e)
return n.apply(null,o)}}var o,u,i,c=function(n){return function(t){return!n(t)}},a=t(!1),l=t(!0),f=function(){return s},s=(o=function(n){return n.isNone()},{fold:function(n,t){return n()},is:a,isSome:a,isNone:l,getOr:i=function(n){return n},getOrThunk:u=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:t(null),getOrUndefined:t(void 0),or:i,orThunk:u,map:f,each:n,bind:f,exists:a,forall:l,filter:f,equals:o,equals_:o,toArray:function(){return[]},toString:t("none()")}),d=function(n){var e=t(n),r=function(){return u},o=function(t){return t(n)},u={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:l,isNone:a,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:r,orThunk:r,map:function(t){return d(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?u:s},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(a,(function(t){return e(n,t)}))}}
return u},m={some:d,none:f,from:function(n){return null==n?s:d(n)}},p=function(n){return function(t){return r=typeof(e=t),(null===e?"null":"object"==r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===n
var e,r}},g=function(n){return function(t){return typeof t===n}},h=p("string"),v=p("object"),b=p("array"),w=g("boolean"),y=function(n){return!(null===(t=n)||void 0===t)
var t},x=g("function"),C=g("number"),S=Array.prototype.slice,T=Array.prototype.indexOf,R=Array.prototype.push,O=function(n,t){return e=n,r=t,-1<T.call(e,r)
var e,r},D=function(n,t){for(var e=0,r=n.length;e<r;e++)if(t(n[e],e))return!0
return!1},A=function(n,t){for(var e=[],r=0;r<n;r++)e.push(t(r))
return e},B=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var u=n[o]
r[o]=t(u,o)}return r},E=function(n,t){for(var e=0,r=n.length;e<r;e++)t(n[e],e)},P=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var u=n[r]
t(u,r)&&e.push(u)}return e},I=function(n,t,e){return function(n,t){for(var e=n.length-1;0<=e;e--)t(n[e])}(n,(function(n){e=t(e,n)})),e},M=function(n,t,e){return E(n,(function(n){e=t(e,n)})),e},k=function(n,t){return function(n,t,e){for(var r=0,o=n.length;r<o;r++){var u=n[r]
if(t(u,r))return m.some(u)
if(e(u,r))break}return m.none()}(n,t,a)},N=function(n,t){for(var e=0,r=n.length;e<r;e++)if(t(n[e],e))return m.some(e)
return m.none()},_=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!b(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n)
R.apply(t,n[e])}return t},z=function(n,t){return _(B(n,t))},W=function(n,t){for(var e=0,r=n.length;e<r;++e)if(!0!==t(n[e],e))return!1
return!0},j=function(n){return[n]},F=function(n,t){return 0<=t&&t<n.length?m.some(n[t]):m.none()},L=function(n){return F(n,n.length-1)},H=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e)
if(r.isSome())return r}return m.none()},q=function(){return(q=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])
return n}).apply(this,arguments)}
function V(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length
var r=Array(n),o=0
for(t=0;t<e;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i]
return r}var U,$=function(n){var t,e=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return e||(e=!0,t=n.apply(null,r)),t}},G=function(){return K(0,0)},K=function(n,t){return{major:n,minor:t}},X=function(n,t){var e=String(t).toLowerCase()
return 0===n.length?G():function(n,t){var e=function(n,t){for(var e=0;e<n.length;e++){var r=n[e]
if(r.test(t))return r}}(n,t)
if(!e)return{major:0,minor:0}
var r=function(n){return Number(t.replace(e,"$"+n))}
return K(r(1),r(2))}(n,e)},Y=G,J=function(n,t){var e=String(t).toLowerCase()
return k(n,(function(n){return n.search(e)}))},Q=function(n,t,e){return""===t||n.length>=t.length&&n.substr(e,e+t.length)===t},Z=function(n,t){return-1!==n.indexOf(t)},nn=function(n,t){return Q(n,t,0)},tn=function(n,t){return Q(n,t,n.length-t.length)},en=(U=/^\s+|\s+$/g,function(n){return n.replace(U,"")}),rn=function(n){return 0<n.length},on=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,un=function(n){return function(t){return Z(t,n)}},cn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return Z(n,"edge/")&&Z(n,"chrome")&&Z(n,"safari")&&Z(n,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,on],search:function(n){return Z(n,"chrome")&&!Z(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return Z(n,"msie")||Z(n,"trident")}},{name:"Opera",versionRegexes:[on,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:un("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:un("firefox")},{name:"Safari",versionRegexes:[on,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(Z(n,"safari")||Z(n,"mobile/"))&&Z(n,"applewebkit")}}],an=[{name:"Windows",search:un("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return Z(n,"iphone")||Z(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:un("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:un("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:un("linux"),versionRegexes:[]},{name:"Solaris",search:un("sunos"),versionRegexes:[]},{name:"FreeBSD",search:un("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:un("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],ln={browsers:t(cn),oses:t(an)},fn="Firefox",sn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isEdge:r("Edge"),isChrome:r("Chrome"),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r(fn),isSafari:r("Safari")}},dn=function(){return sn({current:void 0,version:Y()})},mn=sn,pn=(t("Edge"),t("Chrome"),t("IE"),t("Opera"),t(fn),t("Safari"),"Windows"),gn="Android",hn="Solaris",vn="FreeBSD",bn="ChromeOS",wn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isWindows:r(pn),isiOS:r("iOS"),isAndroid:r(gn),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(hn),isFreeBSD:r(vn),isChromeOS:r(bn)}},yn=function(){return wn({current:void 0,version:Y()})},xn=wn,Cn=(t(pn),t("iOS"),t(gn),t("Linux"),t("OSX"),t(hn),t(vn),t(bn),function(n,e){var r,o,u,i,c,a,l,f,s,d,m,p,g=ln.browsers(),h=ln.oses(),v=function(n,t){return J(n,t).map((function(n){var e=X(n.versionRegexes,t)
return{current:n.name,version:e}}))}(g,n).fold(dn,mn),b=function(n,t){return J(n,t).map((function(n){var e=X(n.versionRegexes,t)
return{current:n.name,version:e}}))}(h,n).fold(yn,xn)
return{browser:v,os:b,deviceType:(o=v,u=n,i=e,c=(r=b).isiOS()&&!0===/ipad/i.test(u),a=r.isiOS()&&!c,l=r.isiOS()||r.isAndroid(),f=l||i("(pointer:coarse)"),s=c||!a&&l&&i("(min-device-width:768px)"),d=a||l&&!s,m=o.isSafari()&&r.isiOS()&&!1===/safari/i.test(u),p=!d&&!s&&!m,{isiPad:t(c),isiPhone:t(a),isTablet:t(s),isPhone:t(d),isTouch:t(f),isAndroid:r.isAndroid,isiOS:r.isiOS,isWebView:t(m),isDesktop:t(p)})}}),Sn=function(n){return window.matchMedia(n).matches},Tn=$((function(){return Cn(navigator.userAgent,Sn)})),Rn=function(){return Tn()},On=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},Dn={fromHtml:function(n,t){var e=(t||document).createElement("div")
if(e.innerHTML=n,!e.hasChildNodes()||1<e.childNodes.length)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return On(e.childNodes[0])},fromTag:function(n,t){var e=(t||document).createElement(n)
return On(e)},fromText:function(n,t){var e=(t||document).createTextNode(n)
return On(e)},fromDom:On,fromPoint:function(n,t,e){return m.from(n.dom.elementFromPoint(t,e)).map(On)}},An=function(n,t){var e=n.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},Bn=function(n){return 1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount},En=function(n,t){return n.dom===t.dom},Pn=function(n,t){return Rn().browser.isIE()?function(n,t){return e=n.dom,r=t.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(e.compareDocumentPosition(r)&o)
var e,r,o}(n,t):(e=t,(r=n.dom)!==(o=e.dom)&&r.contains(o))
var e,r,o},In=An,Mn=Object.keys,kn=Object.hasOwnProperty,Nn=function(n,t){for(var e=Mn(n),r=0,o=e.length;r<o;r++){var u=e[r]
t(n[u],u)}},_n=function(n,t){return zn(n,(function(n,e){return{k:e,v:t(n,e)}}))},zn=function(n,t){var e={}
return Nn(n,(function(n,r){var o=t(n,r)
e[o.k]=o.v})),e},Wn=function(t,e){var r,o,u,i,c={}
return r=e,i=c,o=function(n,t){i[t]=n},u=n,Nn(t,(function(n,t){(r(n,t)?o:u)(n,t)})),c},jn=function(n,t){return Fn(n,t)?m.from(n[t]):m.none()},Fn=function(n,t){return kn.call(n,t)},Ln=["tfoot","thead","tbody","colgroup"],Hn=function(n,t,e){return{element:n,rowspan:t,colspan:e}},qn=function(n,t,e){return{element:n,cells:t,section:e}},Vn=function(n,t){return{element:n,isNew:t}},Un=function(n,t){return{cells:n,section:t}},$n=("undefined"!=typeof window||Function("return this;")(),function(n){return n.dom.nodeName.toLowerCase()}),Gn=function(n){return n.dom.nodeType},Kn=function(n){return function(t){return Gn(t)===n}},Xn=function(n){return 8===Gn(n)||"#comment"===$n(n)},Yn=Kn(1),Jn=Kn(3),Qn=Kn(9),Zn=Kn(11),nt=function(n){return Dn.fromDom(n.dom.ownerDocument)},tt=function(n){return Qn(n)?n:nt(n)},et=function(n){return m.from(n.dom.parentNode).map(Dn.fromDom)},rt=function(n,t){for(var e=x(t)?t:a,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var u=r.parentNode,i=Dn.fromDom(u)
if(o.push(i),!0===e(i))break
r=u}return o},ot=function(n){return m.from(n.dom.previousSibling).map(Dn.fromDom)},ut=function(n){return m.from(n.dom.nextSibling).map(Dn.fromDom)},it=function(n){return B(n.dom.childNodes,Dn.fromDom)},ct=function(n,t){var e=n.dom.childNodes
return m.from(e[t]).map(Dn.fromDom)},at=x(Element.prototype.attachShadow)&&x(Node.prototype.getRootNode),lt=t(at),ft=at?function(n){return Dn.fromDom(n.dom.getRootNode())}:tt,st=function(n){return Dn.fromDom(n.dom.host)},dt=function(n){return y(n.dom.shadowRoot)},mt=function(n){var t=Jn(n)?n.dom.parentNode:n.dom
if(null==t||null===t.ownerDocument)return!1
var e,r,o=t.ownerDocument
return function(n){var t=ft(n)
return Zn(t)?m.some(t):m.none()}(Dn.fromDom(t)).fold((function(){return o.body.contains(t)}),(e=mt,r=st,function(n){return e(r(n))}))},pt=function(n){var t=n.dom.body
if(null==t)throw new Error("Body is not available yet")
return Dn.fromDom(t)},gt=function(n,t){var e=[]
return E(it(n),(function(n){t(n)&&(e=e.concat([n])),e=e.concat(gt(n,t))})),e},ht=function(n,t,e){return r=function(n){return An(n,t)},P(rt(n,e),r)
var r},vt=function(n,t){return e=function(n){return An(n,t)},P(it(n),e)
var e},bt=function(n,t){return e=t,o=void 0===(r=n)?document:r.dom,Bn(o)?[]:B(o.querySelectorAll(e),Dn.fromDom)
var e,r,o}
function wt(n,t,e,r,o){return n(e,r)?m.some(e):x(o)&&o(e)?m.none():t(e,r,o)}var yt,xt,Ct=function(n,t,e){for(var r=n.dom,o=x(e)?e:a;r.parentNode;){r=r.parentNode
var u=Dn.fromDom(r)
if(t(u))return m.some(u)
if(o(u))break}return m.none()},St=function(n,t,e){return Ct(n,(function(n){return An(n,t)}),e)},Tt=function(n,t){return e=function(n){return An(n,t)},k(n.dom.childNodes,(function(n){return e(Dn.fromDom(n))})).map(Dn.fromDom)
var e},Rt=function(n,t){return e=t,o=void 0===(r=n)?document:r.dom,Bn(o)?m.none():m.from(o.querySelector(e)).map(Dn.fromDom)
var e,r,o},Ot=function(n,t,e){return wt(An,St,n,t,e)},Dt=function(n,t,e){if(!(h(e)||w(e)||C(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,e+"")},At=function(n,t,e){Dt(n.dom,t,e)},Bt=function(n,t){var e=n.dom
Nn(t,(function(n,t){Dt(e,t,n)}))},Et=function(n,t){var e=n.dom.getAttribute(t)
return null===e?void 0:e},Pt=function(n,t){return m.from(Et(n,t))},It=function(n,t){n.dom.removeAttribute(t)},Mt=function(n){return M(n.dom.attributes,(function(n,t){return n[t.name]=t.value,n}),{})},kt=function(n){return void 0!==n.style&&x(n.style.getPropertyValue)},Nt=function(n,t,e){if(!h(e))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",e,":: Element ",n),new Error("CSS value must be a string: "+e)
kt(n)&&n.style.setProperty(t,e)},_t=function(n,t,e){var r=n.dom
Nt(r,t,e)},zt=function(n,t){var e=n.dom
Nn(t,(function(n,t){Nt(e,t,n)}))},Wt=function(n,t){var e=n.dom,r=window.getComputedStyle(e).getPropertyValue(t)
return""!==r||mt(n)?r:jt(e,t)},jt=function(n,t){return kt(n)?n.style.getPropertyValue(t):""},Ft=function(n,t){var e=n.dom,r=jt(e,t)
return m.from(r).filter((function(n){return 0<n.length}))},Lt=function(n,t){var e,r,o=n.dom
r=t,kt(e=o)&&e.style.removeProperty(r),Pt(n,"style").map(en).is("")&&It(n,"style")},Ht=function(n,t,e){return void 0===e&&(e=0),Pt(n,t).map((function(n){return parseInt(n,10)})).getOr(e)},qt=function(n,t){return Ht(n,t,1)},Vt=function(n){return 1<qt(n,"colspan")},Ut=function(n){return 1<qt(n,"rowspan")},$t=function(n,t){return parseInt(Wt(n,t),10)},Gt=t(10),Kt=t(10),Xt=function(n,t){return Yt(n,t,l)},Yt=function(n,t,e){return z(it(n),(function(n){return An(n,t)?e(n)?[n]:[]:Yt(n,t,e)}))},Jt=function(n,t){return function(n,t,e){return void 0===e&&(e=a),e(t)?m.none():O(n,$n(t))?m.some(t):St(t,n.join(","),(function(n){return An(n,"table")||e(n)}))}(["td","th"],n,t)},Qt=function(n){return Xt(n,"th,td")},Zt=function(n){return z(ee(n),(function(n){return vt(n,"col")}))},ne=function(n,t){return Ot(n,"table",t)},te=function(n){return Xt(n,"tr")},ee=function(n){return ne(n).fold(t([]),(function(n){return vt(n,"colgroup")}))},re=function(n,t){return B(n,(function(n){if("colgroup"===$n(n)){var e=B(Zt(n),(function(n){var t=Ht(n,"span",1)
return Hn(n,1,t)}))
return qn(n,e,"colgroup")}return e=B(Qt(n),(function(n){var t=Ht(n,"rowspan",1),e=Ht(n,"colspan",1)
return Hn(n,t,e)})),qn(n,e,t(n))}))},oe=function(n){return et(n).map((function(n){var t=$n(n)
return O(Ln,t)?t:"tbody"})).getOr("tbody")},ue=function(n){var t=te(n),e=V(ee(n),t)
return re(e,oe)},ie=function(n,t){return n+","+t},ce=function(n,t){var e=z(n.all,(function(n){return n.cells}))
return P(e,t)},ae=function(n){var t={},e=[],r={},o=0,u=0,i=0
return E(n,(function(n){var c,a,l
"colgroup"===n.section?(a={},l=0,E(n.cells,(function(n){var t=n.colspan
A(t,(function(e){var r=l+e
a[r]={element:n.element,colspan:t,column:r}})),l+=t})),r=a):(c=[],E(n.cells,(function(n){for(var e=0;void 0!==t[ie(i,e)];)e++
for(var r={element:n.element,rowspan:n.rowspan,colspan:n.colspan,row:i,column:e},o=0;o<n.colspan;o++)for(var a=0;a<n.rowspan;a++){var l=e+o,f=ie(i+a,l)
t[f]=r,u=Math.max(u,l+1)}c.push(r)})),o++,e.push(qn(n.element,c,n.section)),i++)})),{grid:{rows:o,columns:u},access:t,all:e,columns:r}},le=function(n){var t=ue(n)
return ae(t)},fe=ae,se=function(n,t,e){var r=n.access[ie(t,e)]
return void 0!==r?m.some(r):m.none()},de=function(n,t,e){var r=ce(n,(function(n){return e(t,n.element)}))
return 0<r.length?m.some(r[0]):m.none()},me=ce,pe=function(n){return z(n.all,(function(n){return n.cells}))},ge=function(n){return function(n){return t=[],Nn(n,(function(n,e){t.push(n)})),t
var t}(n.columns)},he=function(n){return 0<Mn(n.columns).length},ve=function(n,t){return m.from(n.columns[t])},be=function(n,t){var e=t.column,r=t.column+t.colspan-1,o=t.row,u=t.row+t.rowspan-1
return e<=n.finishCol&&r>=n.startCol&&o<=n.finishRow&&u>=n.startRow},we=function(n,t){return t.column>=n.startCol&&t.column+t.colspan-1<=n.finishCol&&t.row>=n.startRow&&t.row+t.rowspan-1<=n.finishRow},ye=function(n,t,e){var r=de(n,t,En),o=de(n,e,En)
return r.bind((function(n){return o.map((function(t){return e=n,r=t,{startRow:Math.min(e.row,r.row),startCol:Math.min(e.column,r.column),finishRow:Math.max(e.row+e.rowspan-1,r.row+r.rowspan-1),finishCol:Math.max(e.column+e.colspan-1,r.column+r.colspan-1)}
var e,r}))}))},xe=function(n,t,e){return ye(n,t,e).map((function(t){var e=me(n,r(be,t))
return B(e,(function(n){return n.element}))}))},Ce=function(n,t){return de(n,t,(function(n,t){return Pn(t,n)})).map((function(n){return n.element}))},Se=function(n,t,e,r,o){var u=Te(n),i=En(n,e)?m.some(t):Ce(u,t),c=En(n,o)?m.some(r):Ce(u,r)
return i.bind((function(n){return c.bind((function(t){return xe(u,n,t)}))}))},Te=le,Re=function(n,t){et(n).each((function(e){e.dom.insertBefore(t.dom,n.dom)}))},Oe=function(n,t){ut(n).fold((function(){et(n).each((function(n){Ae(n,t)}))}),(function(n){Re(n,t)}))},De=function(n,t){ct(n,0).fold((function(){Ae(n,t)}),(function(e){n.dom.insertBefore(t.dom,e.dom)}))},Ae=function(n,t){n.dom.appendChild(t.dom)},Be=function(n,t){Re(n,t),Ae(t,n)},Ee=function(n,t){E(t,(function(e,r){var o=0===r?n:t[r-1]
Oe(o,e)}))},Pe=function(n,t){E(t,(function(t){Ae(n,t)}))},Ie=function(n){n.dom.textContent="",E(it(n),(function(n){Me(n)}))},Me=function(n){var t=n.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},ke=function(n){var t,e=it(n)
0<e.length&&(t=n,E(e,(function(n){Re(t,n)}))),Me(n)},Ne=(yt=Jn,"text",{get:function(n){if(!yt(n))throw new Error("Can only get text value of a text node")
return xt(n).getOr("")},getOption:xt=function(n){return yt(n)?m.from(n.dom.nodeValue):m.none()},set:function(n,t){if(!yt(n))throw new Error("Can only set raw text value of a text node")
n.dom.nodeValue=t}}),_e=function(n){return Ne.get(n)},ze=function(n){return Ne.getOption(n)},We=function(n,t){return Ne.set(n,t)},je=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
function Fe(){return{up:t({selector:St,closest:Ot,predicate:Ct,all:rt}),down:t({selector:bt,predicate:gt}),styles:t({get:Wt,getRaw:Ft,set:_t,remove:Lt}),attrs:t({get:Et,set:At,remove:It,copyTo:function(n,t){var e=Mt(n)
Bt(t,e)}}),insert:t({before:Re,after:Oe,afterAll:Ee,append:Ae,appendAll:Pe,prepend:De,wrap:Be}),remove:t({unwrap:ke,remove:Me}),create:t({nu:Dn.fromTag,clone:function(n){return Dn.fromDom(n.dom.cloneNode(!1))},text:Dn.fromText}),query:t({comparePosition:function(n,t){return n.dom.compareDocumentPosition(t.dom)},prevSibling:ot,nextSibling:ut}),property:t({children:it,name:$n,parent:et,document:function(n){return tt(n).dom},isText:Jn,isComment:Xn,isElement:Yn,getText:_e,setText:We,isBoundary:function(n){return!!Yn(n)&&("body"===$n(n)||O(je,$n(n)))},isEmptyTag:function(n){return!!Yn(n)&&O(["br","img","hr","input"],$n(n))},isNonEditable:function(n){return Yn(n)&&"false"===Et(n,"contenteditable")}}),eq:En,is:In}}var Le=function(n,t,e){return t.bind((function(t){return e.filter(r(n.eq,t))}))},He=function(n,t,e){return 0<e.length?function(n,t,e,r){var o=t(n,e)
return I(r,(function(e,r){var o=t(n,r)
return Le(n,e,o)}),o)}(n,t,(r=e)[0],r.slice(1)):m.none()
var r},qe=function(n,t,e,o){void 0===o&&(o=a)
var u=[t].concat(n.up().all(t)),i=[e].concat(n.up().all(e)),c=function(n){return N(n,o).fold((function(){return n}),(function(t){return n.slice(0,t+1)}))},l=c(u),f=c(i),s=k(l,(function(t){return D(f,(e=t,r(n.eq,e)))
var e}))
return{firstpath:l,secondpath:f,shared:s}},Ve=Fe(),Ue=function(n,t){return He(Ve,(function(t,e){return n(e)}),t)},$e=function(n){return St(n,"table")},Ge=function(n,t,e){var r=function(n){return function(t){return void 0!==e&&e(t)||En(t,n)}}
return En(n,t)?m.some({boxes:m.some([n]),start:n,finish:t}):$e(n).bind((function(o){return $e(t).bind((function(u){if(En(o,u))return m.some({boxes:(l=n,f=t,s=Te(o),xe(s,l,f)),start:n,finish:t})
if(Pn(o,u)){var i=0<(c=ht(t,"td,th",r(o))).length?c[c.length-1]:t
return m.some({boxes:Se(o,n,o,t,u),start:n,finish:i})}if(Pn(u,o)){var c,a=0<(c=ht(n,"td,th",r(u))).length?c[c.length-1]:n
return m.some({boxes:Se(u,n,o,t,u),start:n,finish:a})}return qe(Ve,n,t,undefined).shared.bind((function(i){return Ot(i,"table",e).bind((function(e){var i=ht(t,"td,th",r(e)),c=0<i.length?i[i.length-1]:t,a=ht(n,"td,th",r(e)),l=0<a.length?a[a.length-1]:n
return m.some({boxes:Se(e,n,o,t,u),start:l,finish:c})}))}))
var l,f,s}))}))},Ke=function(n,t){var e=bt(n,t)
return 0<e.length?m.some(e):m.none()},Xe=function(n,t,e){return Rt(n,t).bind((function(t){return Rt(n,e).bind((function(n){return Ue($e,[t,n]).map((function(e){return{first:t,last:n,table:e}}))}))}))},Ye=function(n,t,e,r,o){return u=o,k(n,(function(n){return An(n,u)})).bind((function(n){return function(n,t,e){return ne(n).bind((function(r){var o,u,i,c=Te(r)
return u=t,i=e,de(o=c,n,En).bind((function(n){var t=0<u?n.row+n.rowspan-1:n.row,e=0<i?n.column+n.colspan-1:n.column
return se(o,t+u,e+i).map((function(n){return n.element}))}))}))}(n,t,e).bind((function(n){return e=r,St(t=n,"table").bind((function(n){return Rt(n,e).bind((function(n){return Ge(n,t).bind((function(n){return n.boxes.map((function(t){return{boxes:t,start:n.start,finish:n.finish}}))}))}))}))
var t,e}))}))
var u},Je=Ke,Qe=function(n,t,e){return Xe(n,t,e).bind((function(t){var e=function(t){return En(n,t)},o="thead,tfoot,tbody,table",u=St(t.first,o,e),i=St(t.last,o,e)
return u.bind((function(n){return i.bind((function(e){return En(n,e)?(o=t.table,u=t.first,i=t.last,function(n,t,e){return ye(n,t,e).bind((function(t){return function(n,t){for(var e=!0,o=r(we,t),u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++)e=e&&se(n,u,i).exists(o)
return e?m.some(t):m.none()}(n,t)}))}(Te(o),u,i)):m.none()
var o,u,i}))}))}))},Ze=function(n){if(!b(n))throw new Error("cases must be an array")
if(0===n.length)throw new Error("there must be at least one case")
var t=[],e={}
return E(n,(function(r,o){var u=Mn(r)
if(1!==u.length)throw new Error("one and only one name per case")
var i=u[0],c=r[i]
if(void 0!==e[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!b(c))throw new Error("case arguments must be an array")
t.push(i),e[i]=function(){var e=arguments.length
if(e!==c.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+c.length+" ("+c+"), got "+e)
for(var r=new Array(e),u=0;u<r.length;u++)r[u]=arguments[u]
return{fold:function(){if(arguments.length!==n.length)throw new Error("Wrong number of arguments to fold. Expected "+n.length+", got "+arguments.length)
return arguments[o].apply(null,r)},match:function(n){var e=Mn(n)
if(t.length!==e.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+e.join(","))
if(!W(t,(function(n){return O(e,n)})))throw new Error("Not all branches were specified when using match. Specified: "+e.join(", ")+"\nRequired: "+t.join(", "))
return n[i].apply(null,r)},log:function(n){console.log(n,{constructors:t,constructor:i,params:r})}}}})),e},nr=Ze([{none:[]},{multiple:["elements"]},{single:["element"]}]),tr=function(n,t,e,r){return n.fold(t,e,r)},er=nr.none,rr=nr.multiple,or=nr.single,ur=tinymce.util.Tools.resolve("tinymce.PluginManager"),ir=function(n,t){var e,r,o,u,i,c,a,l,f,s,d=function(n){return An(n.element,t)},m=ue(n),p=fe(m),g=(r=d,o=(e=p).grid.columns,u=e.grid.rows,i=o,a=c=0,Nn(e.access,(function(n){var t,e,o,l
r(n)&&(e=(t=n.row)+n.rowspan-1,l=(o=n.column)+n.colspan-1,t<u?u=t:c<e&&(c=e),o<i?i=o:a<l&&(a=l))})),{minRow:u,minCol:i,maxRow:c,maxCol:a}),h="th:not("+t+"),td:not("+t+")",v=Yt(n,"th,td",(function(n){return An(n,h)}))
return E(v,Me),function(n,t,e,r){for(var o,u,i,c=t.grid.columns,a=t.grid.rows,l=0;l<a;l++)for(var f=!1,s=0;s<c;s++)l<e.minRow||l>e.maxRow||s<e.minCol||s>e.maxCol||(se(t,l,s).filter(r).isNone()?(o=f,u=n[l].element,i=Dn.fromTag("td"),Ae(i,Dn.fromTag("br")),(o?Ae:De)(u,i)):f=!0)}(m,p,g,d),f=g,s=P(Xt(l=n,"tr"),(function(n){return 0===n.dom.childElementCount})),E(s,Me),f.minCol!==f.maxCol&&f.minRow!==f.maxRow||E(Xt(l,"th,td"),(function(n){It(n,"rowspan"),It(n,"colspan")})),It(l,"width"),It(l,"height"),Lt(l,"width"),Lt(l,"height"),n},cr=function(n){return"img"===$n(n)?1:ze(n).fold((function(){return it(n).length}),(function(n){return n.length}))},ar=["img","br"],lr=function(n){return ze(n).filter((function(n){return 0!==n.trim().length||-1<n.indexOf(" ")})).isSome()||O(ar,$n(n))},fr=function(n){return t=lr,(e=function(n){for(var r=0;r<n.childNodes.length;r++){var o=Dn.fromDom(n.childNodes[r])
if(t(o))return m.some(o)
var u=e(n.childNodes[r])
if(u.isSome())return u}return m.none()})(n.dom)
var t,e},sr=function(n){return dr(n,lr)},dr=function(n,t){var e=function(n){for(var r=it(n),o=r.length-1;0<=o;o--){var u=r[o]
if(t(u))return m.some(u)
var i=e(u)
if(i.isSome())return i}return m.none()}
return e(n)},mr=function(n,t){return Dn.fromDom(n.dom.cloneNode(t))},pr=function(n){return mr(n,!1)},gr=function(n){return mr(n,!0)},hr={scope:["row","col"]},vr=function(){var n=Dn.fromTag("td")
return Ae(n,Dn.fromTag("br")),n},br=function(){return Dn.fromTag("col")},wr=function(){return Dn.fromTag("colgroup")},yr=function(n,t,e){var r=function(n,t){var e,r,o,u=(e=n,r=Dn.fromTag(t),o=Mt(e),Bt(r,o),r),i=it(gr(n))
return Pe(u,i),u}(n,t)
return Nn(e,(function(n,t){null===n?It(r,t):At(r,t,n)})),r},xr=function(n){return n},Cr=function(n){return function(){return Dn.fromTag("tr",n.dom)}},Sr=function(n,t,e){var r=function(n,t){var e,r,o
e=t,r=n.element.dom,o=e.dom,kt(r)&&kt(o)&&(o.style.cssText=r.style.cssText),Lt(t,"height"),1!==n.colspan&&Lt(n.element,"width")}
return{col:function(t){var e=nt(t.element),o=Dn.fromTag($n(t.element),e.dom)
return r(t,o),n(t.element,o),o},colgroup:wr,row:Cr(t),cell:function(t){var o,u,i,c,a,l=nt(t.element),f=Dn.fromTag($n(t.element),l.dom),s=e.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"]),d=0<s.length?(o=t.element,u=f,i=s,fr(o).map((function(n){var t=i.join(","),e=ht(n,t,(function(n){return En(n,o)}))
return I(e,(function(n,t){var e=pr(t)
return It(e,"contenteditable"),Ae(n,e),e}),u)})).getOr(u)):f
return Ae(d,Dn.fromTag("br")),r(t,f),c=t.element,a=f,Nn(hr,(function(n,t){return Pt(c,t).filter((function(t){return O(n,t)})).each((function(n){return At(a,t,n)}))})),n(t.element,f),f},replace:yr,gap:vr}},Tr=function(n){return{col:br,colgroup:wr,row:Cr(n),cell:vr,replace:xr,gap:vr}},Rr=function(n){return B(n,Dn.fromDom)},Or=function(n){return tr(n.get(),t([]),e,j)},Dr={selected:"data-mce-selected",selectedSelector:"td[data-mce-selected],th[data-mce-selected]",firstSelected:"data-mce-first-selected",firstSelectedSelector:"td[data-mce-first-selected],th[data-mce-first-selected]",lastSelected:"data-mce-last-selected",lastSelectedSelector:"td[data-mce-last-selected],th[data-mce-last-selected]"},Ar=function(n){return{element:n,mergable:m.none(),unmergable:m.none(),selection:[n]}},Br=function(n,t,e){return{element:e,mergable:(u=t,i=Dr,tr(n.get(),m.none,(function(n){return n.length<=1?m.none():Qe(u,i.firstSelectedSelector,i.lastSelectedSelector).map((function(t){return{bounds:t,cells:n}}))}),m.none)),unmergable:(r=function(n,t){return Pt(n,t).exists((function(n){return 1<parseInt(n,10)}))},0<(o=Or(n)).length&&W(o,(function(n){return r(n,"rowspan")||r(n,"colspan")}))?m.some(o):m.none()),selection:Or(n)}
var r,o,u,i},Er=Ze([{none:[]},{only:["index"]},{left:["index","next"]},{middle:["prev","index","next"]},{right:["prev","index"]}]),Pr=q({},Er),Ir=function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e)
return t}
function Mr(n,t){var e=function(e){var r=t(e)
if(r<=0||null===r){var o=Wt(e,n)
return parseFloat(o)||0}return r},r=function(n,t){return M(t,(function(t,e){var r=Wt(n,e),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,e){if(!C(e)&&!e.match(/^[0-9]+$/))throw new Error(n+".set accepts only positive integer values. Value was "+e)
var r=t.dom
kt(r)&&(r.style[n]=e+"px")},get:e,getOuter:e,aggregate:r,max:function(n,t,e){var o=r(n,e)
return o<t?t-o:0}}}var kr,Nr,_r,zr,Wr=Mr("width",(function(n){return n.dom.offsetWidth})),jr=function(n){return Wr.get(n)},Fr=function(n){return Wr.getOuter(n)},Lr=function(n){var t=n.grid,r=A(t.columns,e),o=A(t.rows,e)
return B(r,(function(t){return Hr((function(){return z(o,(function(e){return se(n,e,t).filter((function(n){return n.column===t})).toArray()}))}),(function(n){return 1===n.colspan}),(function(){return se(n,0,t)}))}))},Hr=function(n,t,e){var r=n()
return k(r,t).orThunk((function(){return m.from(r[0]).orThunk(e)})).map((function(n){return n.element}))},qr=function(n){var r=n.grid,o=A(r.rows,e),u=A(r.columns,e)
return B(o,(function(e){return Hr((function(){return z(u,(function(r){return se(n,e,r).filter((function(n){return n.row===e})).fold(t([]),(function(n){return[n]}))}))}),(function(n){return 1===n.rowspan}),(function(){return se(n,e,0)}))}))},Vr=function(n,t){return function(e){return"rtl"===Ur(e)?t:n}},Ur=function(n){return"rtl"===Wt(n,"direction")?"rtl":"ltr"},$r=Mr("height",(function(n){var t=n.dom
return mt(n)?t.getBoundingClientRect().height:t.offsetHeight})),Gr=function(n){return $r.get(n)},Kr=function(n){return $r.getOuter(n)},Xr=function(n,t){return{left:n,top:t,translate:function(e,r){return Xr(n+e,t+r)}}},Yr=Xr,Jr=function(n,t){return void 0!==n?n:void 0!==t?t:0},Qr=function(n){var t=n.dom.ownerDocument,e=t.body,r=t.defaultView,o=t.documentElement
if(e===n.dom)return Yr(e.offsetLeft,e.offsetTop)
var u=Jr(null==r?void 0:r.pageYOffset,o.scrollTop),i=Jr(null==r?void 0:r.pageXOffset,o.scrollLeft),c=Jr(o.clientTop,e.clientTop),a=Jr(o.clientLeft,e.clientLeft)
return Zr(n).translate(i-a,u-c)},Zr=function(n){var t,e=n.dom,r=e.ownerDocument.body
return r===e?Yr(r.offsetLeft,r.offsetTop):mt(n)?(t=e.getBoundingClientRect(),Yr(t.left,t.top)):Yr(0,0)},no=function(n,t){return{row:n,y:t}},to=function(n,t){return{col:n,x:t}},eo=function(n){return Qr(n).left+Fr(n)},ro=function(n){return Qr(n).left},oo=function(n,t){return to(n,ro(t))},uo=function(n,t){return to(n,eo(t))},io=function(n){return Qr(n).top},co=function(n,t){return no(n,io(t))},ao=function(n,t){return no(n,io(t)+Kr(t))},lo=function(n,t,e){if(0===e.length)return[]
var r=B(e.slice(1),(function(t,e){return t.map((function(t){return n(e,t)}))})),o=e[e.length-1].map((function(n){return t(e.length-1,n)}))
return r.concat([o])},fo={delta:e,positions:function(n){return lo(co,ao,n)},edge:io},so=Vr({delta:e,edge:ro,positions:function(n){return lo(oo,uo,n)}},{delta:function(n){return-n},edge:eo,positions:function(n){return lo(uo,oo,n)}}),mo={delta:function(n,t){return so(t).delta(n,t)},positions:function(n,t){return so(t).positions(n,t)},edge:function(n){return so(n).edge(n)}},po={unsupportedLength:["em","ex","cap","ch","ic","rem","lh","rlh","vw","vh","vi","vb","vmin","vmax","cm","mm","Q","in","pc","pt","px"],fixed:["px","pt"],relative:["%"],empty:[""]},go=(Nr="[eE][+-]?[0-9]+",zr=["Infinity",(kr="[0-9]+")+"\\."+(_r=function(n){return"(?:"+n+")?"})(kr)+_r(Nr),"\\."+kr+_r(Nr),kr+_r(Nr)].join("|"),new RegExp("^([+-]?(?:"+zr+"))(.*)$")),ho=function(){var n=Rn().browser
return n.isIE()||n.isEdge()},vo=function(n,t,e){return r=Wt(n,t),o=e,u=parseFloat(r),isNaN(u)?o:u
var r,o,u},bo=function(n){return ho()?(e=(t=n).dom.getBoundingClientRect().width,"border-box"===Wt(t,"box-sizing")?e:e-vo(t,"padding-left",0)-vo(t,"padding-right",0)-(vo(t,"border-left-width",0)+vo(t,"border-right-width",0))):vo(n,"width",jr(n))
var t,e},wo=/(\d+(\.\d+)?)%/,yo=/(\d+(\.\d+)?)px|em/,xo=function(n,t){_t(n,"width",t+"px")},Co=function(n,t){_t(n,"width",t+"%")},So=function(n,t){_t(n,"height",t+"px")},To=function(n){var t,e=Ft(t=n,"height").getOrThunk((function(){return function(n){return ho()?(e=(t=n).dom.getBoundingClientRect().height,"border-box"===Wt(t,"box-sizing")?e:e-vo(t,"padding-top",0)-vo(t,"padding-bottom",0)-(vo(t,"border-top-width",0)+vo(t,"border-bottom-width",0))):vo(n,"height",Gr(n))
var t,e}(t)+"px"}))
return e?function(n,t,e,r){var o,u,i,c,a,l=parseInt(n,10)
return tn(n,"%")&&"table"!==$n(t)?(u=l,i=e,c=r,a=ne(o=t).map((function(n){var t=i(n)
return Math.floor(u/100*t)})).getOr(u),c(o,a),a):l}(e,n,Gr,So):Gr(n)},Ro=function(n){return Ft(n,"width").fold((function(){return m.from(Et(n,"width"))}),(function(n){return m.some(n)}))},Oo=function(n,t){return n/t.pixelWidth()*100},Do=function(n,t){return Ro(n).fold((function(){var e=jr(n)
return Oo(e,t)}),(function(e){return function(n,t,e){var r=wo.exec(t)
if(null!==r)return parseFloat(r[1])
var o=bo(n)
return Oo(o,e)}(n,e,t)}))},Ao=function(n,t){return Ro(n).fold((function(){return bo(n)}),(function(e){return function(n,t,e){var r=yo.exec(t)
if(null!==r)return parseInt(r[1],10)
var o=wo.exec(t)
return null===o?bo(n):parseFloat(o[1])/100*e.pixelWidth()}(n,e,t)}))},Bo=function(n){return"rowspan",To(t=n)/qt(t,"rowspan")
var t},Eo=function(n,t,e){_t(n,"width",t+e)},Po=function(n){return function(n,t){var e,r=(e=n,m.from(e.dom.offsetParent).map(Dn.fromDom).getOr(pt(nt(n))))
return t(n)/t(r)*100}(n,jr)+"%"},Io=t(wo),Mo=t(yo),ko=("col",function(n){return Yn(n)&&"col"===$n(n)}),No=function(n,t,e){return Ft(n,t).fold((function(){return e(n)+"px"}),(function(n){return n}))},_o=function(n,t){return No(n,"width",(function(n){return ko(n)?jr(n):Ao(n,t)}))},zo=function(n){return No(n,"height",Bo)},Wo=function(n,t,e,r,o,u){return n.filter(r).fold((function(){return u(function(n,t){if(t<0||t>=n.length-1)return m.none()
var e=n[t].fold((function(){var e,r,o=(e=n.slice(0,t),(r=S.call(e,0)).reverse(),r)
return H(o,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return m.some({value:n,delta:0})})),r=n[t+1].fold((function(){var e=n.slice(t+1)
return H(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return m.some({value:n,delta:1})}))
return e.bind((function(n){return r.map((function(t){var e=t.delta+n.delta
return Math.abs(t.value-n.value)/e}))}))}(e,t))}),(function(n){return o(n)}))},jo=function(n,t,r,o,u){var i=Lr(n),a=he(n)?B(ge(n),(function(n){return m.from(n.element)})):i,l=[m.some(mo.edge(t))].concat(B(mo.positions(i,t),(function(n){return n.map((function(n){return n.x}))}))),f=c(Vt)
return B(a,(function(n,t){return Wo(n,t,l,f,(function(n){if(!ko(a=n)||Ft(a,"width").isSome())return r(n,u)
var c,a,s=null!=(c=i[t])?e(c):m.none()
return Wo(s,t,l,f,(function(n){return o(m.some(jr(n)))}),o)}),o)}))},Fo=function(n){return n.map((function(n){return n+"px"})).getOr("")},Lo=function(n,t,e){return jo(n,t,Ao,(function(n){return n.getOrThunk(e.minCellWidth)}),e)},Ho=function(n,t,e,r,o){var u=qr(n),i=[m.some(e.edge(t))].concat(B(e.positions(u,t),(function(n){return n.map((function(n){return n.y}))})))
return B(u,(function(n,t){return Wo(n,t,i,c(Ut),r,o)}))},qo=function(n,t,e){for(var r=0,o=n;o<t;o++)r+=void 0!==e[o]?e[o]:0
return r},Vo=function(n,t,e){var r=function(n,t){return he(n)?(o=t,u=ge(n),B(u,(function(n,t){return{element:n.element,width:o[t],colspan:n.colspan}}))):(e=t,r=pe(n),B(r,(function(n){var t=qo(n.column,n.column+n.colspan,e)
return{element:n.element,width:t,colspan:n.colspan}})))
var e,r,o,u}(n,t)
E(r,(function(n){e.setElementWidth(n.element,n.width)}))},Uo=function(n,e,r,o,u){var i=le(n),c=u.getCellDelta(e),a=u.getWidths(i,u),l=r===i.grid.columns-1,f=o.clampTableDelta(a,r,c,u.minCellWidth(),l),s=function(n,e,r,o,u){var i,c,a=n.slice(0),l=(c=e,0===(i=n).length?Pr.none():1===i.length?Pr.only(0):0===c?Pr.left(0,1):c===i.length-1?Pr.right(c-1,c):0<c&&c<i.length-1?Pr.middle(c-1,c,c+1):Pr.none()),f=t(B(a,t(0)))
return l.fold(f,(function(n){return o.singleColumnWidth(a[n],r)}),(function(n,t){return u.calcLeftEdgeDeltas(a,n,t,r,o.minCellWidth(),o.isRelative)}),(function(n,t,e){return u.calcMiddleDeltas(a,n,t,e,r,o.minCellWidth(),o.isRelative)}),(function(n,t){return u.calcRightEdgeDeltas(a,n,t,r,o.minCellWidth(),o.isRelative)}))}(a,r,f,u,o),d=B(s,(function(n,t){return n+a[t]}))
Vo(i,d,u),o.resizeTable(u.adjustTableWidth,f,l)},$o=function(n){return B(n,t(0))},Go=function(n,t,e,r,o){return o(n.slice(0,t)).concat(r).concat(o(n.slice(e)))},Ko=function(n){return function(t,e,r,o){if(n(r)){var u=Math.max(o,t[e]-Math.abs(r)),i=Math.abs(u-t[e])
return 0<=r?i:-i}return r}},Xo=Ko((function(n){return n<0})),Yo=Ko(l),Jo=function(n,e){var r=m.from(n.dom.documentElement).map(Dn.fromDom).getOr(n)
return{parent:t(r),view:t(n),origin:t(Yr(0,0)),isResizable:e}},Qo=Ze([{invalid:["raw"]},{pixels:["value"]},{percent:["value"]}]),Zo=function(n,t,e){var r=e.substring(0,e.length-n.length),o=parseFloat(r)
return r===o.toString()?t(o):Qo.invalid(e)},nu=q(q({},Qo),{from:function(n){return tn(n,"%")?Zo("%",Qo.percent,n):tn(n,"px")?Zo("px",Qo.pixels,n):Qo.invalid(n)}}),tu=function(n,e,r){var o,u,i,c=nu.from(r),a=W(n,(function(n){return"0px"===n}))?(o=c,u=n.length,i=o.fold((function(){return t("")}),(function(n){return t(n/u+"px")}),(function(){return t(100/u+"%")})),A(u,i)):function(n,t,e){return n.fold((function(){return t}),(function(n){return o=(r=n)/e,B(t,(function(n){return nu.from(n).fold((function(){return n}),(function(n){return n*o+"px"}),(function(n){return n/100*r+"px"}))}))
var r,o}),(function(n){return r=e,B(t,(function(n){return nu.from(n).fold((function(){return n}),(function(n){return n/r*100+"%"}),(function(n){return n+"%"}))}))
var r}))}(c,n,e)
return ru(a)},eu=function(n,r){return 0===n.length?r:I(n,(function(n,r){return nu.from(r).fold(t(0),e,e)+n}),0)},ru=function(n){if(0===n.length)return n
var e,r,o=I(n,(function(n,t){var e=nu.from(t).fold((function(){return{value:t,remainder:0}}),(function(n){return t=n,"px",{value:(e=Math.floor(t))+"px",remainder:t-e}
var t,e}),(function(n){return{value:n+"%",remainder:0}}))
return{output:[e.value].concat(n.output),remainder:n.remainder+e.remainder}}),{output:[],remainder:0}),u=o.output
return u.slice(0,u.length-1).concat([(e=u[u.length-1],r=Math.round(o.remainder),nu.from(e).fold(t(e),(function(n){return n+r+"px"}),(function(n){return n+r+"%"})))])},ou=nu.from,uu=function(n){return ou(n).fold(t("px"),t("px"),t("%"))},iu=function(n,t,e,r){var o=le(n),u=o.all,i=pe(o),c=ge(o)
t.each((function(t){var e,u,a,l,f=uu(t),s=jr(n),d=jo(o,n,_o,Fo,r),m=tu(d,s,t)
he(o)?(a=m,l=f,E(c,(function(n,t){var e=eu([a[t]],Gt())
_t(n.element,"width",e+l)}))):(e=m,u=f,E(i,(function(n){var t=e.slice(n.column,n.colspan+n.column),r=eu(t,Gt())
_t(n.element,"width",r+u)}))),_t(n,"width",t)})),e.each((function(t){var e,r,c,a=uu(t),l=Gr(n),f=Ho(o,n,fo,zo,Fo),s=tu(f,l,t)
e=s,r=u,c=a,E(i,(function(n){var t=e.slice(n.row,n.rowspan+n.row),r=eu(t,Kt())
_t(n.element,"height",r+c)})),E(r,(function(n,t){_t(n.element,"height",e[t])})),_t(n,"height",t)}))},cu=function(n){return Ro(n).exists((function(n){return wo.test(n)}))},au=function(n){return Ro(n).exists((function(n){return yo.test(n)}))},lu=function(n){return Ro(n).isNone()},fu=Po,su=function(n){return le(n).grid},du=function(n){var t=[]
return{bind:function(n){if(void 0===n)throw new Error("Event bind error: undefined handler")
t.push(n)},unbind:function(n){t=P(t,(function(t){return t!==n}))},trigger:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o={}
E(n,(function(n,t){o[n]=e[t]})),E(t,(function(n){n(o)}))}}},mu=function(n){return{registry:_n(n,(function(n){return{bind:n.bind,unbind:n.unbind}})),trigger:_n(n,(function(n){return n.trigger}))}},pu=function(n){return n.slice(0).sort()},gu=function(n,t){var e=P(t,(function(t){return!O(n,t)}))
0<e.length&&function(n){throw new Error("Unsupported keys for object: "+pu(n).join(", "))}(e)},hu=function(n){return function(n,t,e){if(0===t.length)throw new Error("You must specify at least one required field.")
var r
return function(n,t){if(!b(t))throw new Error("The "+n+" fields must be an array. Was: "+t+".")
E(t,(function(t){if(!h(t))throw new Error("The value "+t+" in the "+n+" fields was not a string.")}))}("required",t),r=pu(t),k(r,(function(n,t){return t<r.length-1&&n===r[t+1]})).each((function(n){throw new Error("The field: "+n+" occurs more than once in the combined fields: ["+r.join(", ")+"].")})),function(r){var o=Mn(r)
W(t,(function(n){return O(o,n)}))||function(n,t){throw new Error("All required keys ("+pu(n).join(", ")+") were not specified. Specified keys were: "+pu(t).join(", ")+".")}(t,o),n(t,o)
var u=P(t,(function(n){return!e.validate(r[n],n)}))
return 0<u.length&&function(n,t){throw new Error("All values need to be of type: "+t+". Keys ("+pu(n).join(", ")+") were not.")}(u,e.label),r}}(gu,n,{validate:x,label:"function"})},vu=hu(["compare","extract","mutate","sink"]),bu=hu(["element","start","stop","destroy"]),wu=hu(["forceDrop","drop","move","delayDrop"])
function yu(){var t={onEvent:n,reset:n},e=function(){var n=m.none(),t=mu({move:du(["info"])})
return{onEvent:function(e,r){r.extract(e).each((function(e){var o,u,i;(o=r,u=e,i=n.map((function(n){return o.compare(n,u)})),n=m.some(u),i).each((function(n){t.trigger.move(n)}))}))},reset:function(){n=m.none()},events:t.registry}}(),r=t
return{on:function(){r.reset(),r=e},off:function(){r.reset(),r=t},isOn:function(){return r===e},onEvent:function(n,t){r.onEvent(n,t)},events:e.events}}var xu=function(n){var t,e,r=Dn.fromDom(function(n){if(lt()&&y(n.target)){var t=Dn.fromDom(n.target)
if(Yn(t)&&dt(t)&&n.composed&&n.composedPath){var e=n.composedPath()
if(e)return F(e,0)}}return m.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(t=u,e=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t(e.apply(null,n))})
return{target:r,x:n.clientX,y:n.clientY,stop:o,prevent:u,kill:i,raw:n}},Cu=function(n,t,e,r){n.dom.removeEventListener(t,e,r)},Su=l,Tu=function(n,t,e){return function(n,t,e,o,u){var i,c,a=(i=e,c=o,function(n){i(n)&&c(xu(n))})
return n.dom.addEventListener(t,a,u),{unbind:r(Cu,n,t,a,u)}}(n,t,Su,e,!1)},Ru=xu,Ou=function(n,t){var e=Et(n,t)
return void 0===e||""===e?[]:e.split(" ")},Du=function(n){return void 0!==n.dom.classList},Au=function(n,t){Du(n)?n.dom.classList.add(t):function(n,t){return r=t,o=Ou(e=n,"class").concat([r]),At(e,"class",o.join(" ")),!0
var e,r,o}(n,t)},Bu=function(n,t){return Du(n)&&n.dom.classList.contains(t)},Eu=function(n){var t=n.replace(/\./g,"-")
return{resolve:function(n){return t+"-"+n}}},Pu=Eu("ephox-dragster").resolve,Iu=vu({compare:function(n,t){return Yr(t.left-n.left,t.top-n.top)},extract:function(n){return m.some(Yr(n.x,n.y))},sink:function(n,t){var e=function(n){var t=q({layerClass:Pu("blocker")},n),e=Dn.fromTag("div")
return At(e,"role","presentation"),zt(e,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),Au(e,Pu("blocker")),Au(e,t.layerClass),{element:function(){return e},destroy:function(){Me(e)}}}(t),r=Tu(e.element(),"mousedown",n.forceDrop),o=Tu(e.element(),"mouseup",n.drop),u=Tu(e.element(),"mousemove",n.move),i=Tu(e.element(),"mouseout",n.delayDrop)
return bu({element:e.element,start:function(n){Ae(n,e.element())},stop:function(){Me(e.element())},destroy:function(){e.destroy(),o.unbind(),u.unbind(),i.unbind(),r.unbind()}})},mutate:function(n,t){n.mutate(t.left,t.top)}}),Mu=function(n){return"true"===Et(n,"contenteditable")},ku=Eu("ephox-snooker").resolve,Nu=ku("resizer-bar"),_u=ku("resizer-rows"),zu=ku("resizer-cols"),Wu=function(n){var t=bt(n.parent(),"."+Nu)
E(t,Me)},ju=function(n,t,e){var r=n.origin()
E(t,(function(t){t.each((function(t){var o=e(r,t)
Au(o,Nu),Ae(n.parent(),o)}))}))},Fu=function(n,t,e,r,o){var u,i=Qr(e),c=t.isResizable,a=0<r.length?fo.positions(r,e):[],l=0<a.length?(u=c,z(n.all,(function(n,t){return u(n.element)?[t]:[]}))):[];(function(n,t,e,r){ju(n,t,(function(n,t){var o,u,i,c,a,l=(o=t.row,u=e.left-n.left,i=t.y-n.top,c=r,a=Dn.fromTag("div"),zt(a,{position:"absolute",left:u+"px",top:i-3.5+"px",height:"7px",width:c+"px"}),Bt(a,{"data-row":o,role:"presentation"}),a)
return Au(l,_u),l}))})(t,P(a,(function(n,t){return D(l,(function(n){return t===n}))})),i,Fr(e))
var f,s,d,m=0<o.length?mo.positions(o,e):[],p=0<m.length?(s=c,d=[],A((f=n).grid.columns,(function(n){ve(f,n).map((function(n){return n.element})).forall(s)&&d.push(n)})),P(d,(function(n){var t=me(f,(function(t){return t.column===n}))
return W(t,(function(n){return s(n.element)}))}))):[];(function(n,t,e,r){ju(n,t,(function(n,t){var o,u,i,c,a,l=(o=t.col,u=t.x-n.left,i=e.top-n.top,c=r,a=Dn.fromTag("div"),zt(a,{position:"absolute",left:u-3.5+"px",top:i+"px",height:c+"px",width:"7px"}),Bt(a,{"data-column":o,role:"presentation"}),a)
return Au(l,zu),l}))})(t,P(m,(function(n,t){return D(p,(function(n){return t===n}))})),i,Kr(e))},Lu=function(n,t){var e,r,o
Wu(n),n.isResizable(t)&&(e=le(t),r=qr(e),o=Lr(e),Fu(e,n,t,r,o))},Hu=function(n,t){var e=bt(n.parent(),"."+Nu)
E(e,t)},qu=function(n){Hu(n,(function(n){_t(n,"display","none")}))},Vu=function(n){Hu(n,(function(n){_t(n,"display","block")}))},Uu=ku("resizer-bar-dragging"),$u=function(n){var t=function(){var n,t=mu({drag:du(["xDelta","yDelta","target"])}),e=m.none(),r={mutate:function(t,e){n.trigger.drag(t,e)},events:(n=mu({drag:du(["xDelta","yDelta"])})).registry}
return r.events.drag.bind((function(n){e.each((function(e){t.trigger.drag(n.xDelta,n.yDelta,e)}))})),{assign:function(n){e=m.some(n)},get:function(){return e},mutate:r.mutate,events:t.registry}}(),e=function(n,t){return void 0===t&&(t={}),function(n,t,e){var r,o,u=!1,i=mu({start:du([]),stop:du([])}),c=yu(),a=function(){s.stop(),c.isOn()&&(c.off(),i.trigger.stop())},l=(r=a,o=null,{cancel:function(){null!==o&&(clearTimeout(o),o=null)},throttle:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]
null!==o&&clearTimeout(o),o=setTimeout((function(){r.apply(null,n),o=null}),200)}})
c.events.move.bind((function(e){t.mutate(n,e.info)}))
var f=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
u&&n.apply(null,t)}},s=t.sink(wu({forceDrop:a,drop:f(a),move:f((function(n){l.cancel(),c.onEvent(n,t)})),delayDrop:f(l.throttle)}),e)
return{element:s.element,go:function(n){s.start(n),c.on(),i.trigger.start()},on:function(){u=!0},off:function(){u=!1},destroy:function(){s.destroy()},events:i.registry}}(n,void 0!==t.mode?t.mode:Iu,t)}(t,{}),o=m.none(),u=function(n,t){return m.from(Et(n,t))}
t.events.drag.bind((function(n){u(n.target,"data-row").each((function(t){var e=$t(n.target,"top")
_t(n.target,"top",e+n.yDelta+"px")})),u(n.target,"data-column").each((function(t){var e=$t(n.target,"left")
_t(n.target,"left",e+n.xDelta+"px")}))}))
var i=function(n,t){return $t(n,t)-Ht(n,"data-initial-"+t,0)}
e.events.stop.bind((function(){t.get().each((function(t){o.each((function(e){u(t,"data-row").each((function(n){var r=i(t,"top")
It(t,"data-initial-top"),s.trigger.adjustHeight(e,r,parseInt(n,10))})),u(t,"data-column").each((function(n){var r=i(t,"left")
It(t,"data-initial-left"),s.trigger.adjustWidth(e,r,parseInt(n,10))})),Lu(n,e)}))}))}))
var c=function(r,o){s.trigger.startAdjust(),t.assign(r),At(r,"data-initial-"+o,$t(r,o)),Au(r,Uu),_t(r,"opacity","0.2"),e.go(n.parent())},a=Tu(n.parent(),"mousedown",(function(n){var t,e
t=n.target,Bu(t,_u)&&c(n.target,"top"),e=n.target,Bu(e,zu)&&c(n.target,"left")})),l=function(t){return En(t,n.view())},f=Tu(n.view(),"mouseover",(function(t){(function(n){return Ot(n,"table",l).filter((function(n){return Ot(n,"[contenteditable]",l).exists(Mu)}))})(t.target).fold((function(){mt(t.target)&&Wu(n)}),(function(t){o=m.some(t),Lu(n,t)}))})),s=mu({adjustHeight:du(["table","delta","row"]),adjustWidth:du(["table","delta","column"]),startAdjust:du([])})
return{destroy:function(){a.unbind(),f.unbind(),e.destroy(),Wu(n)},refresh:function(t){Lu(n,t)},on:e.on,off:e.off,hideBars:r(qu,n),showBars:r(Vu,n),events:s.registry}},Gu=function(n,t,e){var r=fo,o=mo,u=$u(n),i=mu({beforeResize:du(["table","type"]),afterResize:du(["table","type"]),startDrag:du([])})
return u.events.adjustHeight.bind((function(n){var t=n.table
i.trigger.beforeResize(t,"row"),function(n,t,e,r){var o,u,i,c=le(n),a=Ho(c,n,r,Bo,(function(n){return n.getOrThunk(Kt)})),l=B(a,(function(n,r){return e===r?Math.max(t+n,Kt()):n})),f=(o=l,u=pe(c),B(u,(function(n){var t=qo(n.row,n.row+n.rowspan,o)
return{element:n.element,height:t,rowspan:n.rowspan}}))),s=(i=l,B(c.all,(function(n,t){return{element:n.element,height:i[t]}})))
E(s,(function(n){So(n.element,n.height)})),E(f,(function(n){So(n.element,n.height)}))
var d=I(l,(function(n,t){return n+t}),0)
So(n,d)}(t,r.delta(n.delta,t),n.row,r),i.trigger.afterResize(t,"row")})),u.events.startAdjust.bind((function(n){i.trigger.startDrag()})),u.events.adjustWidth.bind((function(n){var r=n.table
i.trigger.beforeResize(r,"col")
var u=o.delta(n.delta,r),c=e(r)
Uo(r,u,n.column,t,c),i.trigger.afterResize(r,"col")})),{on:u.on,off:u.off,hideBars:u.hideBars,showBars:u.showBars,destroy:u.destroy,events:i.registry}},Ku=function(n,t){return n.fire("newrow",{node:t})},Xu=function(n,t){return n.fire("newcell",{node:t})},Yu=function(n,t,e){n.fire("TableModified",q(q({},e),{table:t}))},Ju={"border-collapse":"collapse",width:"100%"},Qu={border:"1"},Zu="preservetable",ni=function(n){return n.getParam("table_sizing_mode","auto")},ti=function(n){return n.getParam("table_responsive_width")},ei=function(n){return n.getParam("table_default_attributes",Qu,"object")},ri=function(n){return n.getParam("table_default_styles",function(n){if(li(n)){var t=n.getBody().offsetWidth
return q(q({},Ju),{width:t+"px"})}return fi(n)?Wn(Ju,(function(n,t){return"width"!==t})):Ju}(n),"object")},oi=function(n){return n.getParam("table_cell_advtab",!0,"boolean")},ui=function(n){return n.getParam("table_row_advtab",!0,"boolean")},ii=function(n){return n.getParam("table_advtab",!0,"boolean")},ci=function(n){return n.getParam("table_style_by_css",!1,"boolean")},ai=function(n){return"relative"===ni(n)||!0===ti(n)},li=function(n){return"fixed"===ni(n)||!1===ti(n)},fi=function(n){return"responsive"===ni(n)},si=function(n){var t="section",e=n.getParam("table_header_type",t,"string")
return O(["section","cells","sectionCells","auto"],e)?e:t},di=function(n){var t=n.getParam("table_column_resizing",Zu,"string")
return k(["preservetable","resizetable"],(function(n){return n===t})).getOr(Zu)},mi=function(n){return"preservetable"===di(n)},pi=function(n){var t=n.getParam("table_clone_elements")
return h(t)?m.some(t.split(/[ ,]/)):Array.isArray(t)?m.some(t):m.none()},gi=function(n){return n.nodeName.toLowerCase()},hi=function(n){return Dn.fromDom(n.getBody())},vi=function(n){return n.getBoundingClientRect().width},bi=function(n){return n.getBoundingClientRect().height},wi=function(n){return function(t){return En(t,hi(n))}},yi=function(n){return/^\d+(\.\d+)?$/.test(n)?n+"px":n},xi=function(n){It(n,"data-mce-style")
var t=function(n){return It(n,"data-mce-style")}
E(Qt(n),t),E(Zt(n),t)},Ci=function(n,t){var e=n.dom.getStyle(t,"width")||n.dom.getAttrib(t,"width")
return m.from(e).filter(rn)},Si=function(n){return/^(\d+(\.\d+)?)%$/.test(n)},Ti=function(n){return Dn.fromDom(n.selection.getStart())},Ri=function(n){var t=n
return{get:function(){return t},set:function(n){t=n}}},Oi=function(n,t){var e=Ri(parseFloat(n)),r=Ri(jr(t))
return{width:e.get,pixelWidth:r.get,getWidths:function(n,e){return jo(n,t,Do,(function(n){return n.fold((function(){return r.minCellWidth()}),(function(n){return n/r.pixelWidth()*100}))}),r=e)
var r},getCellDelta:function(n){return n/r.get()*100},singleColumnWidth:function(n,t){return[100-n]},minCellWidth:function(){return Gt()/r.get()*100},setElementWidth:Co,adjustTableWidth:function(n){var o=e.get(),u=o+n/100*o
Co(t,u),e.set(u),r.set(jr(t))},isRelative:!0,label:"percent"}},Di=function(n,t){var r=Ri(n),o=r.get
return{width:o,pixelWidth:o,getWidths:function(n,e){return Lo(n,t,e)},getCellDelta:e,singleColumnWidth:function(n,t){return[Math.max(Gt(),n+t)-n]},minCellWidth:Gt,setElementWidth:xo,adjustTableWidth:function(n){var e=o()+n
xo(t,e),r.set(e)},isRelative:!1,label:"pixel"}},Ai=function(e){return Ro(e).fold((function(){return function(e){var r=function(){return jr(e)},o=t(0)
return{width:r,pixelWidth:r,getWidths:function(n,t){return Lo(n,e,t)},getCellDelta:o,singleColumnWidth:t([0]),minCellWidth:o,setElementWidth:n,adjustTableWidth:n,isRelative:!0,label:"none"}}(e)}),(function(n){return function(n,t){var e=Io().exec(t)
if(null!==e)return Oi(e[1],n)
var r=Mo().exec(t)
if(null!==r){var o=parseInt(r[1],10)
return Di(o,n)}var u=jr(n)
return Di(u,n)}(e,n)}))},Bi=Di,Ei=Oi,Pi=function(n,t){if(ai(n)){var e=Ci(n,t.dom).filter(Si).getOrThunk((function(){return fu(t)}))
return Ei(e,t)}return li(n)?Bi(jr(t),t):Ai(t)},Ii=function(n){It(n,"width")},Mi=function(n,t){var e,r,o
r=Pi(n,t),o=Po(e=t),iu(e,m.some(o),m.none(),r),Ii(e)},ki=function(n,t){(function(n,t){var e=jr(n)+"px"
iu(n,m.some(e),m.none(),t),Ii(n)})(t,Pi(n,t))},Ni=function(n){Lt(n,"width")
var t=Zt(n),e=0<t.length?t:Qt(n)
E(e,(function(n){Lt(n,"width"),Ii(n)})),Ii(n)},_i="bar-",zi=function(n){return"false"!==Et(n,"data-mce-resize")},Wi=function(n){var e,r,o=m.none(),u=m.none(),i=m.none(),c=function(n){return"TABLE"===n.nodeName},a=function(t){return Pi(n,t)},l=function(){return mi(n)?{resizeTable:function(n,t,e){e&&n(t)},clampTableDelta:function(n,t,e,r,o){if(o){if(0<=e)return e
var u=M(n,(function(n,t){return n+t-r}),0)
return Math.max(-u,e)}return Xo(n,t,e,r)},calcLeftEdgeDeltas:e=function(n,t,e,r,o){var u=Yo(n,0<=r?e:t,r,o)
return Go(n,t,e+1,[u,-u],$o)},calcMiddleDeltas:function(n,t,r,o,u,i){return e(n,r,o,u,i)},calcRightEdgeDeltas:function(n,e,r,o,u,i){if(i)return $o(n)
var c=o/n.length
return B(n,t(c))}}:function(){var n=function(n,t,e,r){var o=(100+e)/100,u=Math.max(r,(n[t]+e)/o)
return B(n,(function(n,e){return(e===t?u:n/o)-n}))},t=function(t,e,r,o,u,i){return i?n(t,e,o,u):(l=r,f=Xo(c=t,a=e,o,u),Go(c,a,l+1,[f,0],$o))
var c,a,l,f}
return{resizeTable:function(n,t){return n(t)},clampTableDelta:Xo,calcLeftEdgeDeltas:t,calcMiddleDeltas:function(n,e,r,o,u,i,c){return t(n,r,o,u,i,c)},calcRightEdgeDeltas:function(t,e,r,o,u,i){if(i)return n(t,r,o,u)
var c=Xo(t,r,o,u)
return $o(t.slice(0,r)).concat([c])}}}()
var e}
return n.on("init",(function(){var e,r,c,f,s,d=(r=zi,(e=n).inline?function(n,e,r){return{parent:t(e),view:t(n),origin:t(Yr(0,0)),isResizable:r}}(hi(e),function(){var n=Dn.fromTag("div")
return zt(n,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"}),Ae(pt(Dn.fromDom(document)),n),n}(),r):Jo(Dn.fromDom(e.getDoc()),r))
i=m.some(d),s=n.getParam("object_resizing",!0),(h(s)?"table"===s:s)&&n.getParam("table_resize_bars",!0,"boolean")&&(c=l(),(f=Gu(d,c,a)).on(),f.events.startDrag.bind((function(t){o=m.some(n.selection.getRng())})),f.events.beforeResize.bind((function(t){var e,r,o,u,i,c=t.table.dom
e=n,o=vi(r=c),u=bi(c),i=_i+t.type,e.fire("ObjectResizeStart",{target:r,width:o,height:u,origin:i})})),f.events.afterResize.bind((function(t){var e,r,u,i,c,a=t.table,l=a.dom
xi(a),o.each((function(t){n.selection.setRng(t),n.focus()})),e=n,u=vi(r=l),i=bi(l),c=_i+t.type,e.fire("ObjectResized",{target:r,width:u,height:i,origin:c}),n.undoManager.add()})),u=m.some(f))})),n.on("ObjectResizeStart",(function(t){var o,u=t.target
c(u)&&(o=Dn.fromDom(u),E(n.dom.select(".mce-clonedresizable"),(function(t){n.dom.addClass(t,"mce-"+di(n)+"-columns")})),!au(o)&&li(n)?ki(n,o):!cu(o)&&ai(n)&&Mi(n,o),lu(o)&&nn(t.origin,_i)&&Mi(n,o),e=t.width,r=fi(n)?"":Ci(n,u).getOr(""))})),n.on("ObjectResized",(function(t){var o,u,i=t.target
c(i)&&(o=Dn.fromDom(i),u=t.origin,nn(u,"corner-")&&function(t,o,u){var i,c,f,s,d,m,p=tn(o,"e")
""===r&&Mi(n,t),u!==e&&""!==r?(_t(t,"width",r),i=l(),c=a(t),f=mi(n)||p?su(t).columns-1:0,Uo(t,u-e,f,i,c)):Si(r)&&(s=parseFloat(r.replace("%","")),_t(t,"width",u*s/e+"%")),/^(\d+(\.\d+)?)px$/.test(r)&&(m=le(d=t),he(m)||E(Qt(d),(function(n){var t=Wt(n,"width")
_t(n,"width",t),It(n,"width")})))}(o,u,t.width),xi(o),Yu(n,o.dom))})),n.on("SwitchMode",(function(){u.each((function(t){n.mode.isReadOnly()?t.hideBars():t.showBars()}))})),{lazyResize:function(){return u},lazyWire:function(){return i.getOr(Jo(Dn.fromDom(n.getBody()),zi))},destroy:function(){u.each((function(n){n.destroy()})),i.each((function(t){var e
e=t,n.inline&&Me(e.parent())}))}}},ji=function(n,t){return{element:n,offset:t}},Fi=function(n,t,e){return n.property().isText(t)&&0===n.property().getText(t).trim().length||n.property().isComment(t)?e(t).bind((function(t){return Fi(n,t,e).orThunk((function(){return m.some(t)}))})):m.none()},Li=function(n,t){return n.property().isText(t)?n.property().getText(t).length:n.property().children(t).length},Hi=function(n,t){var e=Fi(n,t,n.query().prevSibling).getOr(t)
if(n.property().isText(e))return ji(e,Li(n,e))
var r=n.property().children(e)
return 0<r.length?Hi(n,r[r.length-1]):ji(e,Li(n,e))},qi=Hi,Vi=Fe(),Ui=function(n,t){Ro(n).bind((function(n){return function(n,t){return m.from(go.exec(n)).bind((function(n){var e,r=Number(n[1]),o=n[2]
return e=o,D(t,(function(n){return D(po[n],(function(n){return e===n}))}))?m.some({value:r,unit:o}):m.none()}))}(n,["fixed","relative","empty"])})).each((function(e){var r=e.value/2
Eo(n,r,e.unit),Eo(t,r,e.unit)}))},$i=function(n,t,e){n.cells[t]=e},Gi=function(n,t){return Un(t,n.section)},Ki=function(n,t){var e=n.cells,r=B(e,t)
return Un(r,n.section)},Xi=function(n,t){return n.cells[t]},Yi=function(n,t){return Xi(n,t).element},Ji=function(n){return n.cells.length},Qi=function(n){var t=function(n,t){for(var e=[],r=[],o=0,u=n.length;o<u;o++){var i=n[o];(t(i)?e:r).push(i)}return{pass:e,fail:r}}(n,(function(n){return"colgroup"===n.section}))
return{rows:t.fail,cols:t.pass}},Zi=function(n,t,e,r){e===r?It(n,t):At(n,t,e)},nc=function(n,t,e){L(vt(n,t)).fold((function(){return De(n,e)}),(function(n){return Oe(n,e)}))},tc=function(n,t){var e=[],r=[],o=function(n){return B(n,(function(n){n.isNew&&e.push(n.element)
var t=n.element
return Ie(t),E(n.cells,(function(n){n.isNew&&r.push(n.element),Zi(n.element,"colspan",n.colspan,1),Zi(n.element,"rowspan",n.rowspan,1),Ae(t,n.element)})),t}))},u=function(n){return z(n,(function(n){return B(n.cells,(function(n){return Zi(n.element,"span",n.colspan,1),n.element}))}))},i=function(t,e){var r,i,c,a=(c=Tt(r=n,i=e).getOrThunk((function(){var n=Dn.fromTag(i,nt(r).dom)
return"thead"===i?nc(r,"caption,colgroup",n):"colgroup"===i?nc(r,"caption",n):Ae(r,n),n})),Ie(c),c),l=("colgroup"===e?u:o)(t)
Pe(a,l)},c=function(t,e){0<t.length?i(t,e):Tt(n,e).each(Me)},a=[],l=[],f=[],s=[]
return E(t,(function(n){switch(n.section){case"thead":a.push(n)
break
case"tbody":l.push(n)
break
case"tfoot":f.push(n)
break
case"colgroup":s.push(n)}})),c(s,"colgroup"),c(a,"thead"),c(l,"tbody"),c(f,"tfoot"),{newRows:e,newCells:r}},ec=function(n,t){if(0===n.length)return 0
var e=n[0]
return N(n,(function(n){return!t(e.element,n.element)})).fold((function(){return n.length}),(function(n){return n}))},rc=function(n,t){var e=B(n,(function(n){return B(n.cells,a)}))
return B(n,(function(r,o){return{details:z(r.cells,(function(r,u){if(!1!==e[o][u])return[]
var i=function(n,t,e,r){var o,u=n[t].cells.slice(e),i=ec(u,r),c=(o=e,B(n,(function(n){return Xi(n,o)})).slice(t))
return{colspan:i,rowspan:ec(c,r)}}(n,o,u,t)
return function(n,t,r,o){for(var u=n;u<n+r;u++)for(var i=t;i<t+o;i++)e[u][i]=!0}(o,u,i.rowspan,i.colspan),[{element:r.element,rowspan:i.rowspan,colspan:i.colspan,isNew:r.isNew}]})),section:r.section}}))},oc=function(n,t,e){var r,o=[]
he(n)&&(r=B(ge(n),(function(n){return Vn(n.element,e)})),o.push(Un(r,"colgroup")))
for(var u=0;u<n.grid.rows;u++){for(var i=[],c=0;c<n.grid.columns;c++){var a=se(n,u,c).map((function(n){return Vn(n.element,e)})).getOrThunk((function(){return Vn(t.gap(),!0)}))
i.push(a)}var l=Un(i,n.all[u].section)
o.push(l)}return o},uc=function(n,t){return function(n,t){return B(n,(function(n){var e,r=(e=n.details,H(e,(function(n){return et(n.element).map((function(n){var t=et(n).isNone()
return Vn(n,t)}))})).getOrThunk((function(){return Vn(t.row(),!0)})))
return{element:r.element,cells:n.details,section:n.section,isNew:r.isNew}}))}(rc(n,En),t)},ic=function(n,t){return H(n.all,(function(n){return k(n.cells,(function(n){return En(t,n.element)}))}))},cc=function(n,t,e,r,o){return function(u,i,c,a,l){var f=le(i)
return t(f,c).map((function(t){var e=oc(f,a,!1),r=n(e,t,En,o(a))
return{grid:uc(r.grid,a),cursor:r.cursor}})).fold((function(){return m.none()}),(function(n){var t=tc(i,n.grid),o=m.from(l).getOrThunk((function(){return Ai(i)}))
return e(i,n.grid,o),r(i),Lu(u,i),m.some({cursor:n.cursor,newRows:t.newRows,newCells:t.newCells})}))}},ac=function(n,t){return Jt(t.element).bind((function(t){return ic(n,t)}))},lc=function(n,t){var e=B(t.selection,(function(t){return Jt(t).bind((function(t){return ic(n,t)}))})),r=Ir(e)
return 0<r.length?m.some({cells:r,generators:t.generators,clipboard:t.clipboard}):m.none()},fc=function(n,t){var e=B(t.selection,(function(t){return Jt(t).bind((function(t){return ic(n,t)}))})),r=Ir(e)
return 0<r.length?m.some(r):m.none()},sc=function(n,t,e,r){for(var o=Qi(n).rows,u=!0,i=0;i<o.length;i++)for(var c=0;c<Ji(o[0]);c++){var a=e(Yi(o[i],c),t)
!0===a&&!1===u?$i(o[i],c,Vn(r(),!0)):!0===a&&(u=!1)}return n},dc=function(n){return{is:function(t){return n===t},isValue:l,isError:a,getOr:t(n),getOrThunk:t(n),getOrDie:t(n),or:function(t){return dc(n)},orThunk:function(t){return dc(n)},fold:function(t,e){return e(n)},map:function(t){return dc(t(n))},mapError:function(t){return dc(n)},each:function(t){t(n)},bind:function(t){return t(n)},exists:function(t){return t(n)},forall:function(t){return t(n)},toOptional:function(){return m.some(n)}}},mc=function(t){return{is:a,isValue:a,isError:l,getOr:e,getOrThunk:function(n){return n()},getOrDie:function(){return n=String(t),function(){throw new Error(n)}()
var n},or:function(n){return n},orThunk:function(n){return n()},fold:function(n,e){return n(t)},map:function(n){return mc(t)},mapError:function(n){return mc(n(t))},each:n,bind:function(n){return mc(t)},exists:a,forall:l,toOptional:m.none}},pc={value:dc,error:mc,fromOption:function(n,t){return n.fold((function(){return mc(t)}),dc)}},gc=function(n,t){return{rowDelta:0,colDelta:Ji(n[0])-Ji(t[0])}},hc=function(n,t){return{rowDelta:n.length-t.length,colDelta:0}},vc=function(n,t,e){var r="colgroup"===t.section?e.col:e.cell
return B(n,(function(){return Vn(r(),!0)}))},bc=function(n,t,e){return n.concat(A(t,(function(){var t=n[n.length-1]
return Gi(t,vc(t.cells,t,e))})))},wc=function(n,t,r){return B(n,(function(n){var o=vc(A(t,e),n,r)
return Gi(n,n.cells.concat(o))}))},yc=function(n,t,r){var o=t.colDelta<0?wc:e
return(t.rowDelta<0?bc:e)(o(n,Math.abs(t.colDelta),r),Math.abs(t.rowDelta),r)},xc=function(n,t,e,o,u){return function(n,t,e){if(n.row>=t.length||n.column>Ji(t[0]))return pc.error("invalid start address out of table bounds, row: "+n.row+", column: "+n.column)
var r=t.slice(n.row),o=r[0].cells.slice(n.column),u=Ji(e[0]),i=e.length
return pc.value({rowDelta:r.length-i,colDelta:o.length-u})}(n,t,e).map((function(i){var c=yc(t,i,o)
return function(n,t,e,o,u){for(var i,c,a,l,f,s=n.row,d=n.column,m=s+e.length,p=d+Ji(e[0]),g=s;g<m;g++)for(var h=d;h<p;h++){a=h,l=void 0,l=r(u,Xi((i=t)[c=g],a).element),f=i[c],1<i.length&&1<Ji(f)&&(0<a&&l(Yi(f,a-1))||a<f.cells.length-1&&l(Yi(f,a+1))||0<c&&l(Yi(i[c-1],a))||c<i.length-1&&l(Yi(i[c+1],a)))&&sc(t,Yi(t[g],h),u,o.cell)
var v=Yi(e[g-s],h-d),b=o.replace(v)
$i(t[g],h,Vn(b,!0))}return t}(n,c,e,o,u)}))},Cc=function(n,t,e,r,o){var u,i,c,a
u=t,i=n,c=o,a=r.cell,0<i&&i<u[0].cells.length&&E(u,(function(n){var t=n.cells[i-1],e=n.cells[i]
c(e.element,t.element)&&$i(n,i,Vn(a(),!0))}))
var l=hc(e,t),f=yc(e,l,r),s=hc(t,f),d=yc(t,s,r)
return B(d,(function(t,e){var r=t.cells.slice(0,n).concat(f[e].cells).concat(t.cells.slice(n,t.cells.length))
return Gi(t,r)}))},Sc=function(n,t,e,r,o){(function(n,t,e,r){var o,u,i,c=Qi(n).rows
0<t&&t<c.length&&(o=c[t-1].cells,i=e,u=M(o,(function(n,t){return D(n,(function(n){return i(n.element,t.element)}))?n:n.concat([t])}),[]),E(u,(function(n){for(var o=m.none(),u=t;u<c.length;u++)!function(t){for(var u=0;u<Ji(c[0]);u++)!function(u){var i=c[t].cells[u]
e(i.element,n.element)&&(o.isNone()&&(o=m.some(r())),o.each((function(n){$i(c[t],u,Vn(n,!0))})))}(u)}(u)})))})(t,n,o,r.cell)
var u=gc(e,t),i=yc(e,u,r),c=gc(t,i),a=yc(t,c,r),l=Qi(a),f=l.cols,s=l.rows
return f.concat(s.slice(0,n)).concat(i).concat(s.slice(n,s.length))},Tc=function(n,t,e,r,o){var u=Qi(n),i=u.rows,c=u.cols,a=i.slice(0,t),l=i.slice(t),f=Ki(i[e],(function(n,e){return 0<t&&t<i.length&&r(Yi(i[t-1],e),Yi(i[t],e))?Xi(i[t],e):Vn(o(n.element,r),!0)}))
return c.concat(a).concat([f]).concat(l)},Rc=function(n,t,e,r,o){return B(n,(function(n){var u,i,c,a,l,f,s,d,m,p,g,h,v,b=0<t&&t<Ji(n)&&r(Yi(n,t-1),Yi(n,t)),w=(i=t,c=(u=n).section,a=e,l=r,f=o,"colgroup"!==c&&b?Xi(u,i):Vn(f(Yi(u,a),l),!0))
return d=t,m=w,g=(p=(s=n).cells).slice(0,d),h=p.slice(d),v=g.concat([m]).concat(h),Gi(s,v)}))},Oc=function(n,t,e,r){return B(n,(function(n){return Ki(n,(function(n){return o=n,D(t,(function(n){return e(o.element,n.element)}))?Vn(r(n.element,e),!0):n
var o}))}))},Dc=function(n,t,e,r){return void 0!==Yi(n[t],e)&&0<t&&r(Yi(n[t-1],e),Yi(n[t],e))},Ac=function(n,t,e){return 0<t&&e(Yi(n,t-1),Yi(n,t))},Bc=function(n,t,e,r){var o=z(n,(function(r,o){return Dc(n,o,t,e)||Ac(r,t,e)?[]:[Xi(r,t)]}))
return Oc(n,o,e,r)},Ec=function(n,t,e,r){var o=Qi(n).rows,u=o[t],i=z(u.cells,(function(n,r){return Dc(o,t,r,e)||Ac(u,r,e)?[]:[n]}))
return Oc(n,i,e,r)},Pc=hu(["cell","row","replace","gap","col","colgroup"]),Ic=function(n){return{element:n,colspan:Ht(n,"colspan",1),rowspan:Ht(n,"rowspan",1)}},Mc=function(n,t){void 0===t&&(t=Ic),Pc(n)
var e=Ri(m.none()),r=function(e){return function(t){switch($n(t.element)){case"col":return n.col(t)
default:return n.cell(t)}}(t(e))},o=function(n){var t=r(n)
return e.get().isNone()&&e.set(m.some(t)),u=m.some({item:n,replacement:t}),t},u=m.none()
return{getOrInit:function(n,t){return u.fold((function(){return o(n)}),(function(e){return t(n,e.item)?e.replacement:o(n)}))},cursor:e.get}},kc=function(n,t){return function(e){var r=Ri(m.none())
Pc(e)
var o=[],u=function(u){var i={scope:n},c=e.replace(u,t,i)
return o.push({item:u,sub:c}),r.get().isNone()&&r.set(m.some(c)),c}
return{replaceOrInit:function(n,t){return e=n,r=t,k(o,(function(n){return r(n.item,e)})).fold((function(){return u(n)}),(function(e){return t(n,e.item)?e.sub:u(n)}))
var e,r},cursor:r.get}}},Nc=function(n){Pc(n)
var t=Ri(m.none())
return{combine:function(e){return t.get().isNone()&&t.set(m.some(e)),function(){var t=n.cell({element:e,colspan:1,rowspan:1})
return Lt(t,"width"),Lt(e,"width"),t}},cursor:t.get}},_c=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"],zc=Fe(),Wc=function(n){return t=n,e=zc.property().name(t),O(_c,e)
var t,e},jc=function(n){return t=n,e=zc.property().name(t),O(["ol","ul"],e)
var t,e},Fc=function(n){var t,e=function(n){return"br"===$n(n)},r=function(n){return sr(n).bind((function(t){var r=ut(t).map((function(n){return!!Wc(n)||!!function(n){return t=n,O(["br","img","hr","input"],zc.property().name(t))
var t}(n)&&"img"!==$n(n)})).getOr(!1)
return et(t).map((function(o){return!0===r||"li"===$n(u=o)||Ct(u,jc).isSome()||e(t)||Wc(o)&&!En(n,o)?[]:[Dn.fromTag("br")]
var u}))})).getOr([])},o=0===(t=z(n,(function(n){var t=it(n)
return W(t,(function(n){return e(n)||Jn(n)&&0===_e(n).trim().length}))?[]:t.concat(r(n))}))).length?[Dn.fromTag("br")]:t
Ie(n[0]),Pe(n[0],o)},Lc=function(n){0===Qt(n).length&&Me(n)},Hc=function(n,t){return{grid:n,cursor:t}},qc=function(n,t,e){var r=Qi(n).rows
return Vc(r,t,e).orThunk((function(){return Vc(r,0,0)}))},Vc=function(n,t,e){return m.from(n[t]).bind((function(n){return m.from(n.cells[e]).bind((function(n){return m.from(n.element)}))}))},Uc=function(n,t,e){var r=Qi(n).rows
return Hc(n,Vc(r,t,e))},$c=function(n){return M(n,(function(n,t){return D(n,(function(n){return n.row===t.row}))?n:n.concat([t])}),[]).sort((function(n,t){return n.row-t.row}))},Gc=function(n){return M(n,(function(n,t){return D(n,(function(n){return n.column===t.column}))?n:n.concat([t])}),[]).sort((function(n,t){return n.column-t.column}))},Kc=function(n,t,e){var r,o,u=(r=n,o=e.section,re(r,(function(){return o}))),i=fe(u)
return oc(i,t,!0)},Xc=function(n,t){var e=P(n,t)
return 0===e.length?m.some("td"):e.length===n.length?m.some("th"):m.none()},Yc=function(n,t,e){var r=fe(t),o=e.getWidths(r,e)
Vo(r,o,e)},Jc=cc((function(n,t,e,r){var o=t[0].row,u=t[0].row,i=$c(t),c=M(i,(function(n,t){return Tc(n,u,o,e,r.getOrInit)}),n)
return Uc(c,u,t[0].column)}),fc,n,n,Mc),Qc=cc((function(n,t,e,r){var o=$c(t),u=o[o.length-1].row,i=o[o.length-1].row+o[o.length-1].rowspan,c=M(o,(function(n,t){return Tc(n,i,u,e,r.getOrInit)}),n)
return Uc(c,i,t[0].column)}),fc,n,n,Mc),Zc=cc((function(n,t,e,r){var o=Gc(t),u=o[0].column,i=o[0].column,c=M(o,(function(n,t){return Rc(n,i,u,e,r.getOrInit)}),n)
return Uc(c,t[0].row,i)}),fc,Yc,n,Mc),na=cc((function(n,t,e,r){var o=t[t.length-1].column,u=t[t.length-1].column+t[t.length-1].colspan,i=Gc(t),c=M(i,(function(n,t){return Rc(n,u,o,e,r.getOrInit)}),n)
return Uc(c,t[0].row,u)}),fc,Yc,n,Mc),ta=cc((function(n,t,e,r){var o,u,i,c,a=Gc(t),l=(o=n,u=a[0].column,i=a[a.length-1].column,c=B(o,(function(n){var t=n.cells.slice(0,u).concat(n.cells.slice(i+1))
return Un(t,n.section)})),P(c,(function(n){return 0<n.cells.length}))),f=qc(l,t[0].row,t[0].column)
return Hc(l,f)}),fc,Yc,Lc,Mc),ea=cc((function(n,t,e,r){var o,u,i,c,a,l=$c(t),f=(o=n,u=l[0].row,i=l[l.length-1].row,a=(c=Qi(o)).rows,c.cols.concat(a.slice(0,u)).concat(a.slice(i+1))),s=qc(f,t[0].row,t[0].column)
return Hc(f,s)}),fc,n,Lc,Mc),ra=(cc((function(n,t,e,r){var o=Bc(n,t.column,e,r.replaceOrInit)
return Uc(o,t.row,t.column)}),ac,n,n,kc("row","th")),cc((function(n,t,e,r){var o=Gc(t),u=M(o,(function(n,t){return Bc(n,t.column,e,r.replaceOrInit)}),n)
return Uc(u,t[0].row,t[0].column)}),fc,n,n,kc("row","th"))),oa=(cc((function(n,t,e,r){var o=Bc(n,t.column,e,r.replaceOrInit)
return Uc(o,t.row,t.column)}),ac,n,n,kc(null,"td")),cc((function(n,t,e,r){var o=Gc(t),u=M(o,(function(n,t){return Bc(n,t.column,e,r.replaceOrInit)}),n)
return Uc(u,t[0].row,t[0].column)}),fc,n,n,kc(null,"td"))),ua=(cc((function(n,t,e,r){var o=Ec(n,t.row,e,r.replaceOrInit)
return Uc(o,t.row,t.column)}),ac,n,n,kc("col","th")),cc((function(n,t,e,r){var o=$c(t),u=M(o,(function(n,t){return Ec(n,t.row,e,r.replaceOrInit)}),n)
return Uc(u,t[0].row,t[0].column)}),fc,n,n,kc("col","th")),cc((function(n,t,e,r){var o=Ec(n,t.row,e,r.replaceOrInit)
return Uc(o,t.row,t.column)}),ac,n,n,kc(null,"td")),cc((function(n,t,e,r){var o=$c(t),u=M(o,(function(n,t){return Ec(n,t.row,e,r.replaceOrInit)}),n)
return Uc(u,t[0].row,t[0].column)}),fc,n,n,kc(null,"td")),cc((function(n,e,r,o){var u=e.cells
Fc(u)
var i=function(n,t,e){var r=Qi(n).rows
if(0===r.length)return n
for(var o=t.startRow;o<=t.finishRow;o++)for(var u=t.startCol;u<=t.finishCol;u++)$i(r[o],u,Vn(e(),!1))
return n}(n,e.bounds,t(u[0]))
return Hc(i,m.from(u[0]))}),(function(n,t){return t.mergable}),n,n,Nc)),ia=cc((function(n,t,e,r){var o=I(t,(function(n,t){return sc(n,t,e,r.combine(t))}),n)
return Hc(o,m.from(t[0]))}),(function(n,t){return t.unmergable}),Yc,n,Nc),ca=cc((function(n,t,e,r){var o,u,i,c=(o=t.clipboard,u=t.generators,i=le(o),oc(i,u,!0)),a={row:t.row,column:t.column}
return xc(a,n,c,t.generators,e).fold((function(){return Hc(n,m.some(t.element))}),(function(n){var e=qc(n,t.row,t.column)
return Hc(n,e)}))}),(function(n,t){return Jt(t.element).bind((function(e){return ic(n,e).map((function(n){return q(q({},n),{generators:t.generators,clipboard:t.clipboard})}))}))}),Yc,n,Mc),aa=cc((function(n,t,e,r){var o=Qi(n).rows,u=t.cells[0].column,i=o[t.cells[0].row],c=Kc(t.clipboard,t.generators,i),a=Cc(u,n,c,t.generators,e),l=qc(a,t.cells[0].row,t.cells[0].column)
return Hc(a,l)}),lc,n,n,Mc),la=cc((function(n,t,e,r){var o=Qi(n).rows,u=t.cells[t.cells.length-1].column+t.cells[t.cells.length-1].colspan,i=o[t.cells[0].row],c=Kc(t.clipboard,t.generators,i),a=Cc(u,n,c,t.generators,e),l=qc(a,t.cells[0].row,t.cells[0].column)
return Hc(a,l)}),lc,n,n,Mc),fa=cc((function(n,t,e,r){var o=Qi(n).rows,u=t.cells[0].row,i=o[u],c=Kc(t.clipboard,t.generators,i),a=Sc(u,n,c,t.generators,e),l=qc(a,t.cells[0].row,t.cells[0].column)
return Hc(a,l)}),lc,n,n,Mc),sa=cc((function(n,t,e,r){var o=Qi(n).rows,u=t.cells[t.cells.length-1].row+t.cells[t.cells.length-1].rowspan,i=o[t.cells[0].row],c=Kc(t.clipboard,t.generators,i),a=Sc(u,n,c,t.generators,e),l=qc(a,t.cells[0].row,t.cells[0].column)
return Hc(a,l)}),lc,n,n,Mc),da=function(n,t){var e=le(n)
return fc(e,t).bind((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan,u=_(B(e.all,(function(n){return P(n.cells,(function(n){return n.column>=r&&n.column<o}))})))
return Xc(u,(function(n){return"th"===$n(n.element)}))})).getOr("")},ma=function(n){return gi(n.parentNode)},pa=function(n,t){var e="thead"===ma(t),r=!D(t.cells,(function(n){return"th"!==gi(n)}))
return e||r?m.some({thead:e,ths:r}):m.none()},ga=function(n,t){return"thead"===(e=pa(0,t).fold((function(){return ma(t)}),(function(n){return"thead"})))?"header":"tfoot"===e?"footer":"body"
var e},ha=function(n,t,e){var r,o,u=n.getParent(t,"table"),i=t.parentNode,c=gi(i)
e!==c&&((r=n.select(e,u)[0])||(r=n.create(e),o=u.firstChild,"thead"===e?L(vt(Dn.fromDom(u),"caption,colgroup")).fold((function(){return u.insertBefore(r,o)}),(function(t){return n.insertAfter(r,t.dom)})):u.appendChild(r)),"tbody"===e&&"thead"===c&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),i.hasChildNodes()||n.remove(i))},va=function(n,t,e,r){return E(t,(function(t){var o=gi(t)!==e?n.rename(t,e):t
n.setAttrib(o,"scope",r)}))},ba=function(n,t,e){var r,o,u,i=n.dom
"header"===e?(o="auto"===(r=si(n))?(u=ne(Dn.fromDom(t.cells[0])).map(te).getOr([]),H(u,(function(n){return pa(0,n.dom)})).map((function(n){return n.thead&&n.ths?"sectionCells":n.thead?"section":"cells"})).getOr("section")):r,va(i,t.cells,"section"===o?"td":"th","col"),ha(i,t,"cells"===o?"tbody":"thead")):(va(i,t.cells,"td",null),ha(i,t,"footer"===e?"tfoot":"tbody"))},wa=function(n){return function(t){var e,r=$n(t),o="col"===r||"colgroup"===r?ne(e=t).bind((function(n){return Je(n,Dr.firstSelectedSelector)})).fold((function(){return e}),(function(n){return n[0]})):t
return Ot(o,n)}},ya=wa("th,td"),xa=wa("th,td,caption"),Ca=function(n,t){return ya(n).map((function(n){return Or(t)})).getOr([])},Sa=function(n,t){var e,r,o,u=ya(n)
return r=u.bind((function(n){return ne(n)})).map(te),o=function(n,e){return P(e,(function(e){return D(Rr(e.dom.cells),(function(e){return"1"===Et(e,t)||En(e,n)}))}))},((e=u).isSome()&&r.isSome()?m.some(o(e.getOrDie(),r.getOrDie())):m.none()).getOr([])},Ta={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},colGroups:!1},Ra=function(n,t,e,r){return A(n,(function(n){return function(n,t,e,r){for(var o=Dn.fromTag("tr"),u=0;u<n;u++){var i=Dn.fromTag(r<t||u<e?"th":"td")
u<e&&At(i,"scope","row"),r<t&&At(i,"scope","col"),Ae(i,Dn.fromTag("br")),Ae(o,i)}return o}(t,e,r,n)}))},Oa=function(n,t){n.selection.select(t.dom,!0),n.selection.collapse(!0)},Da=function(n,t,e,o,u){var i=ri(n),c={styles:i,attributes:ei(n),colGroups:n.getParam("table_use_colgroups",!1,"boolean")}
return n.undoManager.ignore((function(){var r=function(n,t,e,r,o,u){void 0===u&&(u=Ta)
var i=Dn.fromTag("table"),c="cells"!==o
zt(i,u.styles),Bt(i,u.attributes),u.colGroups&&Ae(i,function(n){var t=Dn.fromTag("colgroup")
return A(n,(function(){return Ae(t,Dn.fromTag("col"))})),t}(t))
var a,l,f=Math.min(n,e)
c&&0<e&&(a=Dn.fromTag("thead"),Ae(i,a),l=Ra(e,t,"sectionCells"===o?f:0,r),Pe(a,l))
var s=Dn.fromTag("tbody")
Ae(i,s)
var d=Ra(c?n-f:n,t,c?0:e,r)
return Pe(s,d),i}(e,t,u,o,si(n),c)
At(r,"data-mce-id","__mce")
var i,a,l,f=(i=r,a=Dn.fromTag("div"),l=Dn.fromDom(i.dom.cloneNode(!0)),Ae(a,l),a.dom.innerHTML)
n.insertContent(f),n.addVisual()})),Rt(hi(n),'table[data-mce-id="__mce"]').map((function(t){var e,o,u
return li(n)?ki(n,t):fi(n)?Ni(t):(ai(n)||(e=i.width,h(e)&&-1!==e.indexOf("%")))&&Mi(n,t),xi(t),It(t,"data-mce-id"),o=n,E(bt(t,"tr"),(function(n){Ku(o,n.dom),E(bt(n,"th,td"),(function(n){Xu(o,n.dom)}))})),u=n,Rt(t,"td,th").each(r(Oa,u)),t.dom})).getOr(null)},Aa=function(n,t,e,r,o){void 0===r&&(r={})
var u=function(n){return C(n)&&0<n}
if(u(t)&&u(e)){var i=r.headerRows||0,c=r.headerColumns||0
return Da(n,e,t,c,i)}return console.error(o),null},Ba=function(n){return function(){return n().fold((function(){return[]}),(function(n){return B(n,(function(n){return n.dom}))}))}},Ea=function(n){return function(t){var e=0<t.length?m.some(Rr(t)):m.none()
n(e)}},Pa=function(n,t,e){var r=Ht(n,t,1)
1===e||r<=1?It(n,t):At(n,t,Math.min(e,r))},Ia=tinymce.util.Tools.resolve("tinymce.util.Tools"),Ma=function(n,t,e){return function(t,r){for(var o=0;o<r.length;o++){var u=n.getStyle(r[o],e)
if(void 0===t&&(t=u),t!==u)return""}return t}(void 0,n.select("td,th",t))},ka=function(n,t,e){e&&n.formatter.apply("align"+e,{},t)},Na=function(n,t){Ia.each("left center right".split(" "),(function(e){n.formatter.remove("align"+e,{},t)}))},_a=function(n,t){return(t||[]).concat(B(n,(function(n){var t=n.text||n.title
return function(n){return Fn(t=n,e="menu")&&void 0!==t[e]&&null!==t[e]
var t,e}(n)?{text:t,items:_a(n.menu)}:{text:t,value:n.value}})))},za=function(n){return function(t){return nn(t,"rgb")?n.toHex(t):t}},Wa=function(n,t){var e=Dn.fromDom(t)
return{borderwidth:Ft(e,"border-width").getOr(""),borderstyle:Ft(e,"border-style").getOr(""),bordercolor:Ft(e,"border-color").map(za(n)).getOr(""),backgroundcolor:Ft(e,"background-color").map(za(n)).getOr("")}},ja=function(n){var t=n[0],e=n.slice(1)
return E(e,(function(n){E(Mn(t),(function(e){Nn(n,(function(n,r){var o=t[e]
""!==o&&e===r&&o!==n&&(t[e]="")}))}))})),t},Fa=function(n){var t=[{name:"borderstyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]},{name:"bordercolor",type:"colorinput",label:"Border color"},{name:"backgroundcolor",type:"colorinput",label:"Background color"}]
return{title:"Advanced",name:"advanced",items:"cell"===n?[{name:"borderwidth",type:"input",label:"Border width"}].concat(t):t}},La=function(n,t,e,r){return k(n,(function(n){return e.formatter.matchNode(r,t+n)})).getOr("")},Ha=r(La,["left","center","right"],"align"),qa=r(La,["top","middle","bottom"],"valign"),Va=[{name:"width",type:"input",label:"Width"},{name:"height",type:"input",label:"Height"},{name:"celltype",type:"listbox",label:"Cell type",items:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{name:"scope",type:"listbox",label:"Scope",items:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{name:"halign",type:"listbox",label:"H Align",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{name:"valign",type:"listbox",label:"V Align",items:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}],Ua=function(n){return Va.concat((0<(t=_a(n.getParam("table_cell_class_list",[],"array"))).length?m.some({name:"class",type:"listbox",label:"Class",items:t}):m.none()).toArray())
var t},$a=function(n){return function(t,e){var r=t.dom
return{setAttrib:function(t,o){n&&!o||r.setAttrib(e,t,o)},setStyle:function(t,o){n&&!o||r.setStyle(e,t,o)},setFormat:function(r,o){n&&!o||(""===o?t.formatter.remove(r,{value:null},e,!0):t.formatter.apply(r,{value:o},e))}}}},Ga={normal:$a(!1),ifTruthy:$a(!0)},Ka=function(n){return ne(n[0]).map((function(t){var e=le(t),r=pe(e),o=P(r,(function(t){return D(n,(function(n){return En(t.element,n)}))}))
return B(o,(function(n){return{element:n.element.dom,column:ve(e,n.column).map((function(n){return n.element.dom}))}}))}))},Xa=function(n,t,e){var r=e.getData()
e.close(),n.undoManager.transact((function(){(function(n,t,e){var r,o=n.dom,u=1===t.length
1<=t.length&&(r=ne(t[0]),Ka(t).each((function(t){E(t,(function(t){var r,i,c,a,l,f,s,d,m,p,g=t.element,h=e.celltype&&gi(g)!==e.celltype?o.rename(g,e.celltype):g,v=u?Ga.normal(n,h):Ga.ifTruthy(n,h)
i=t.column.map((function(t){return u?Ga.normal(n,t):Ga.ifTruthy(n,t)})).getOr(v),c=e,(r=v).setAttrib("scope",c.scope),r.setAttrib("class",c.class),r.setStyle("height",yi(c.height)),i.setStyle("width",yi(c.width)),oi(n)&&(l=e,(a=v).setFormat("tablecellbackgroundcolor",l.backgroundcolor),a.setFormat("tablecellbordercolor",l.bordercolor),a.setFormat("tablecellborderstyle",l.borderstyle),a.setFormat("tablecellborderwidth",yi(l.borderwidth))),u&&(Na(n,h),f=n,s=h,Ia.each("top middle bottom".split(" "),(function(n){f.formatter.remove("valign"+n,{},s)}))),e.halign&&ka(n,h,e.halign),e.valign&&(d=n,m=h,(p=e.valign)&&d.formatter.apply("valign"+p,{},m))}))})),r.each((function(t){return Yu(n,t.dom)})))})(n,t,r),n.focus()}))},Ya=function(n,t){var e,o,u,i=Ca(Ti(n),t)
0!==i.length&&(e=function(n,t){var e=Ka(t).map((function(t){return B(t,(function(t){return e=n,r=t.element,o=oi(n),u=t.column,i=e.dom,c=u.getOr(r),q({width:(a=function(n,t){return i.getStyle(n,t)||i.getAttrib(n,t)})(c,"width"),height:a(r,"height"),scope:i.getAttrib(r,"scope"),celltype:gi(r),class:i.getAttrib(r,"class",""),halign:Ha(e,r),valign:qa(e,r)},o?Wa(i,r):{})
var e,r,o,u,i,c,a}))}))
return ja(e.getOrDie())}(n,i),o={type:"tabpanel",tabs:[{title:"General",name:"general",items:Ua(n)},Fa("cell")]},u={type:"panel",items:[{type:"grid",columns:2,items:Ua(n)}]},n.windowManager.open({title:"Cell Properties",size:"normal",body:oi(n)?o:u,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:e,onSubmit:r(Xa,n,i)}))},Ja=[{type:"listbox",name:"type",label:"Row type",items:[{text:"Header",value:"header"},{text:"Body",value:"body"},{text:"Footer",value:"footer"}]},{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height",type:"input"}],Qa=function(n){return Ja.concat((0<(t=_a(n.getParam("table_row_class_list",[],"array"))).length?m.some({name:"class",type:"listbox",label:"Class",items:t}):m.none()).toArray())
var t},Za=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){(function(n,t,e,r){var o=1===t.length
E(t,(function(t){r.type!==gi(t.parentNode)&&ba(n,t,r.type)
var u,i,c,a,l=o?Ga.normal(n,t):Ga.ifTruthy(n,t)
i=r,(u=l).setAttrib("scope",i.scope),u.setAttrib("class",i.class),u.setStyle("height",yi(i.height)),ui(n)&&(a=r,(c=l).setStyle("background-color",a.backgroundcolor),c.setStyle("border-color",a.bordercolor),c.setStyle("border-style",a.borderstyle)),r.align!==e.align&&(Na(n,t),ka(n,t,r.align))})),ne(Dn.fromDom(t[0])).each((function(t){return Yu(n,t.dom)}))})(n,t,e,o),n.focus()}))},nl=function(n){var t,e,o,u,i=Sa(Ti(n),Dr.selected)
0!==i.length&&(t=B(i,(function(t){return e=n,r=t.dom,o=ui(n),u=e.dom,q({height:u.getStyle(r,"height")||u.getAttrib(r,"height"),scope:u.getAttrib(r,"scope"),class:u.getAttrib(r,"class",""),type:ga(0,r),align:Ha(e,r)},o?Wa(u,r):{})
var e,r,o,u})),e=ja(t),o={type:"tabpanel",tabs:[{title:"General",name:"general",items:Qa(n)},Fa("row")]},u={type:"panel",items:[{type:"grid",columns:2,items:Qa(n)}]},n.windowManager.open({title:"Row Properties",size:"normal",body:ui(n)?o:u,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:e,onSubmit:r(Za,n,B(i,(function(n){return n.dom})),e)}))},tl=tinymce.util.Tools.resolve("tinymce.Env"),el=function(n,t,e,r){if("TD"===t.tagName||"TH"===t.tagName)h(e)?n.setStyle(t,e,r):n.setStyle(t,e)
else if(t.children)for(var o=0;o<t.children.length;o++)el(n,t.children[o],e,r)},rl=function(n,t,e){var r,o=n.dom,u=e.getData()
e.close(),""===u.class&&delete u.class,n.undoManager.transact((function(){var e,i
t||(e=parseInt(u.cols,10)||1,i=parseInt(u.rows,10)||1,t=Da(n,e,i,0,0)),function(n,t,e){var r,o=n.dom,u={},i={}
if(u.class=e.class,i.height=yi(e.height),o.getAttrib(t,"width")&&!ci(n)?u.width=(r=e.width)?r.replace(/px$/,""):"":i.width=yi(e.width),ci(n)?(i["border-width"]=yi(e.border),i["border-spacing"]=yi(e.cellspacing)):(u.border=e.border,u.cellpadding=e.cellpadding,u.cellspacing=e.cellspacing),ci(n)&&t.children)for(var c=0;c<t.children.length;c++)el(o,t.children[c],{"border-width":yi(e.border),padding:yi(e.cellpadding)}),ii(n)&&el(o,t.children[c],{"border-color":e.bordercolor})
ii(n)&&(i["background-color"]=e.backgroundcolor,i["border-color"]=e.bordercolor,i["border-style"]=e.borderstyle),u.style=o.serializeStyle(q(q({},ri(n)),i)),o.setAttribs(t,q(q({},ei(n)),u)),Yu(n,t)}(n,t,u),(r=o.select("caption",t)[0])&&!u.caption&&o.remove(r),!r&&u.caption&&((r=o.create("caption")).innerHTML=tl.ie?" ":'<br data-mce-bogus="1"/>',t.insertBefore(r,t.firstChild)),""===u.align?Na(n,t):ka(n,t,u.align),n.focus(),n.addVisual()}))},ol=function(n,t){var e,o,u,i,c,a,l,f,s=n.dom,d=function(n,t){var e,r,o,u,i=ri(n),c=ei(n),a=t?(e=n.dom,{borderstyle:jn(i,"border-style").getOr(""),bordercolor:za(e)(jn(i,"border-color").getOr("")),backgroundcolor:za(e)(jn(i,"background-color").getOr(""))}):{}
return q(q(q(q(q(q({},{height:"",width:"100%",cellspacing:"",cellpadding:"",caption:!1,class:"",align:"",border:""}),i),c),a),(u=i["border-width"],ci(n)&&u?{border:u}:jn(c,"border").fold((function(){return{}}),(function(n){return{border:n}})))),(r=jn(i,"border-spacing").or(jn(c,"cellspacing")).fold((function(){return{}}),(function(n){return{cellspacing:n}})),o=jn(i,"border-padding").or(jn(c,"cellpadding")).fold((function(){return{}}),(function(n){return{cellpadding:n}})),q(q({},r),o)))}(n,ii(n))
!1===t?(e=s.getParent(n.selection.getStart(),"table"))?(u=e,i=ii(o=n),f=o.dom,d=q({width:f.getStyle(u,"width")||f.getAttrib(u,"width"),height:f.getStyle(u,"height")||f.getAttrib(u,"height"),cellspacing:f.getStyle(u,"border-spacing")||f.getAttrib(u,"cellspacing"),cellpadding:f.getAttrib(u,"cellpadding")||Ma(o.dom,u,"padding"),border:(c=f,a=u,l=Ft(Dn.fromDom(a),"border-width"),ci(o)&&l.isSome()?l.getOr(""):c.getAttrib(a,"border")||Ma(o.dom,a,"border-width")||Ma(o.dom,a,"border")),caption:!!f.select("caption",u)[0],class:f.getAttrib(u,"class",""),align:Ha(o,u)},i?Wa(f,u):{})):ii(n)&&(d.borderstyle="",d.bordercolor="",d.backgroundcolor=""):(d.cols="1",d.rows="1",ii(n)&&(d.borderstyle="",d.bordercolor="",d.backgroundcolor=""))
var m=_a(n.getParam("table_class_list",[],"array"))
0<m.length&&d.class&&(d.class=d.class.replace(/\s*mce\-item\-table\s*/g,""))
var p,g,h,v,b={type:"grid",columns:2,items:(p=m,g=t?[{type:"input",name:"cols",label:"Cols",inputMode:"numeric"},{type:"input",name:"rows",label:"Rows",inputMode:"numeric"}]:[],h=n.getParam("table_appearance_options",!0,"boolean")?[{type:"input",name:"cellspacing",label:"Cell spacing",inputMode:"numeric"},{type:"input",name:"cellpadding",label:"Cell padding",inputMode:"numeric"},{type:"input",name:"border",label:"Border width"},{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[],v=0<p.length?[{type:"listbox",name:"class",label:"Class",items:p}]:[],g.concat([{type:"input",name:"width",label:"Width"},{type:"input",name:"height",label:"Height"}]).concat(h).concat([{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]}]).concat(v))},w=ii(n)?{type:"tabpanel",tabs:[{title:"General",name:"general",items:[b]},Fa("table")]}:{type:"panel",items:[b]}
n.windowManager.open({title:"Table Properties",size:"normal",body:w,onSubmit:r(rl,n,e),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:d})},ul=function(n){return xa(Ti(n))},il=function(n){return ya(Ti(n))},cl=function(t,e,o,u,i){var a=wi(t),l=function(n){return ne(n,a)},f=function(n){return function(e){t.selection.setRng(e),t.focus(),o.clear(n),xi(n),Yu(t,n.dom)}},s=function(n){return il(t).each((function(t){l(t).each((function(e){var r=Br(u,e,t)
n(e,r).each(f(e))}))}))},d=function(){return il(t).map((function(e){return l(e).bind((function(r){return function(n,t,e){var r=le(n)
return fc(r,t).map((function(n){var t=oc(r,e,!1),o=Qi(t).rows.slice(n[0].row,n[n.length-1].row+n[n.length-1].rowspan),u=uc(o,e)
return B(u,(function(n){var t=pr(n.element)
return E(n.cells,(function(n){var e=gr(n.element)
Zi(e,"colspan",n.colspan,1),Zi(e,"rowspan",n.rowspan,1),Ae(t,e)})),t}))}))}(r,Br(u,r,e),Sr(n,Dn.fromDom(t.getDoc()),m.none()))}))}))},p=function(){return il(t).map((function(n){return l(n).bind((function(t){return function(n,t){var e=le(n)
return fc(e,t).map((function(n){var t,r,o=n[n.length-1],u=n[0].column,i=o.column+o.colspan
return V(function(n,t,e){if(he(n)){var r=P(ge(n),(function(n){return n.column>=t&&n.column<e})),o=B(r,(function(n){var r=gr(n.element)
return Pa(r,"span",e-t),r})),u=Dn.fromTag("colgroup")
return Pe(u,o),[u]}return[]}(e,u,i),(t=u,r=i,B(e.all,(function(n){var e=P(n.cells,(function(n){return n.column>=t&&n.column<r})),o=B(e,(function(n){var e=gr(n.element)
return Pa(e,"colspan",r-t),e})),u=Dn.fromTag("tr")
return Pe(u,o),u}))))}))}(t,Br(u,t,n))}))}))},g=function(n,e){return e().each((function(e){var r=B(e,gr)
il(t).each((function(e){return l(e).each((function(e){var o,i,c=Tr(Dn.fromDom(t.getDoc())),a=(o=r,i=c,{selection:Or(u),clipboard:o,generators:i})
n(e,a).each(f(e))}))}))}))}
Nn({mceTableSplitCells:function(){return s(e.unmergeCells)},mceTableMergeCells:function(){return s(e.mergeCells)},mceTableInsertRowBefore:function(){return s(e.insertRowsBefore)},mceTableInsertRowAfter:function(){return s(e.insertRowsAfter)},mceTableInsertColBefore:function(){return s(e.insertColumnsBefore)},mceTableInsertColAfter:function(){return s(e.insertColumnsAfter)},mceTableDeleteCol:function(){return s(e.deleteColumn)},mceTableDeleteRow:function(){return s(e.deleteRow)},mceTableCutCol:function(n){return p().each((function(n){i.setColumns(n),s(e.deleteColumn)}))},mceTableCutRow:function(n){return d().each((function(n){i.setRows(n),s(e.deleteRow)}))},mceTableCopyCol:function(n){return p().each((function(n){return i.setColumns(n)}))},mceTableCopyRow:function(n){return d().each((function(n){return i.setRows(n)}))},mceTablePasteColBefore:function(n){return g(e.pasteColsBefore,i.getColumns)},mceTablePasteColAfter:function(n){return g(e.pasteColsAfter,i.getColumns)},mceTablePasteRowBefore:function(n){return g(e.pasteRowsBefore,i.getRows)},mceTablePasteRowAfter:function(n){return g(e.pasteRowsAfter,i.getRows)},mceTableDelete:function(){return ul(t).each((function(n){ne(n,a).filter(c(a)).each((function(n){var e,r=Dn.fromText("")
Oe(n,r),Me(n),t.dom.isEmpty(t.getBody())?(t.setContent(""),t.selection.setCursorLocation()):((e=t.dom.createRng()).setStart(r.dom,0),e.setEnd(r.dom,0),t.selection.setRng(e),t.nodeChanged())}))}))},mceTableSizingMode:function(n,e){return r=e,ul(t).each((function(n){fi(t)||li(t)||ai(t)||ne(n,a).each((function(n){"relative"!==r||cu(n)?"fixed"!==r||au(n)?"responsive"!==r||lu(n)||Ni(n):ki(t,n):Mi(t,n),xi(n),Yu(t,n.dom)}))}))
var r}},(function(n,e){return t.addCommand(e,n)}))
var b=function(n,t){t.each((function(t){Yu(n,t.dom)}))}
Nn({mceTableCellType:function(n,r){var o=ne(Ti(t),a)
e.setTableCellType(t,r),b(t,o)},mceTableRowType:function(n,r){var o=ne(Ti(t),a)
e.setTableRowType(t,r),b(t,o)}},(function(n,e){return t.addCommand(e,n)})),t.addCommand("mceTableColType",(function(n,t){return jn(t,"type").each((function(n){return s("th"===n?e.makeColumnsHeader:e.unmakeColumnsHeader)}))})),Nn({mceTableProps:r(ol,t,!1),mceTableRowProps:r(nl,t),mceTableCellProps:r(Ya,t,u)},(function(n,e){return t.addCommand(e,(function(){return n()}))})),t.addCommand("mceInsertTable",(function(n,e){v(e)&&0<Mn(e).length?Aa(t,e.rows,e.columns,e.options,"Invalid values for mceInsertTable - rows and columns values are required to insert a table."):ol(t,!0)})),t.addCommand("mceTableApplyCellStyle",(function(n,e){var r,o,i=function(n){return"tablecell"+n.toLowerCase().replace("-","")}
!v(e)||0!==(r=Ca(Ti(t),u)).length&&(function(n){for(var t in n)if(kn.call(n,t))return!1
return!0}(o=Wn(e,(function(n,e){return t.formatter.has(i(e))&&h(n)})))||(Nn(o,(function(n,e){E(r,(function(r){Ga.normal(t,r.dom).setFormat(i(e),n)}))})),l(r[0]).each((function(n){return Yu(t,n.dom,{structure:!1,style:!0})}))))}))},al={tablecellbackgroundcolor:{selector:"td,th",styles:{backgroundColor:"%value"},remove_similar:!0},tablecellbordercolor:{selector:"td,th",styles:{borderColor:"%value"},remove_similar:!0},tablecellborderstyle:{selector:"td,th",styles:{borderStyle:"%value"},remove_similar:!0},tablecellborderwidth:{selector:"td,th",styles:{borderWidth:"%value"},remove_similar:!0}},ll=Ze([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]),fl=q(q({},ll),{none:function(n){return void 0===n&&(n=void 0),ll.none(n)}}),sl=function(n,t){return ne(n,t).bind((function(t){var e=Qt(t)
return N(e,(function(t){return En(n,t)})).map((function(n){return{index:n,all:e}}))}))},dl=function(n,t,e,r){return{start:n,soffset:t,finish:e,foffset:r}},ml=Ze([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),pl={before:ml.before,on:ml.on,after:ml.after,cata:function(n,t,e,r){return n.fold(t,e,r)},getStart:function(n){return n.fold(e,e,e)}},gl=Ze([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),hl={domRange:gl.domRange,relative:gl.relative,exact:gl.exact,exactFromRange:function(n){return gl.exact(n.start,n.soffset,n.finish,n.foffset)},getWin:function(n){var t=n.match({domRange:function(n){return Dn.fromDom(n.startContainer)},relative:function(n,t){return pl.getStart(n)},exact:function(n,t,e,r){return n}})
return Dn.fromDom(tt(t).dom.defaultView)},range:dl},vl=function(n,t,e){var r,o,u=n.document.createRange()
return r=u,t.fold((function(n){r.setStartBefore(n.dom)}),(function(n,t){r.setStart(n.dom,t)}),(function(n){r.setStartAfter(n.dom)})),o=u,e.fold((function(n){o.setEndBefore(n.dom)}),(function(n,t){o.setEnd(n.dom,t)}),(function(n){o.setEndAfter(n.dom)})),u},bl=function(n,t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},wl=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom,width:n.width,height:n.height}},yl=Ze([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),xl=function(n,t,e){return t(Dn.fromDom(e.startContainer),e.startOffset,Dn.fromDom(e.endContainer),e.endOffset)},Cl=function(n,e){var r,o,u,i=(r=n,e.match({domRange:function(n){return{ltr:t(n),rtl:m.none}},relative:function(n,t){return{ltr:$((function(){return vl(r,n,t)})),rtl:$((function(){return m.some(vl(r,t,n))}))}},exact:function(n,t,e,o){return{ltr:$((function(){return bl(r,n,t,e,o)})),rtl:$((function(){return m.some(bl(r,e,o,n,t))}))}}}))
return(u=(o=i).ltr()).collapsed?o.rtl().filter((function(n){return!1===n.collapsed})).map((function(n){return yl.rtl(Dn.fromDom(n.endContainer),n.endOffset,Dn.fromDom(n.startContainer),n.startOffset)})).getOrThunk((function(){return xl(0,yl.ltr,u)})):xl(0,yl.ltr,u)},Sl=function(n,t){return Cl(n,t).match({ltr:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},rtl:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(r.dom,o),u.setEnd(t.dom,e),u}})},Tl=(yl.ltr,yl.rtl,function(n,t,e){return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}),Rl=function(n,t,e,r){return Jn(t)?function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getClientRects()
return H(u,(function(n){return Tl(n,e,r)?m.some(n):m.none()})).map((function(o){return function(n,t,e,r,o){var u=function(e){var r=n.dom.createRange()
return r.setStart(t.dom,e),r.collapse(!0),r},i=_e(t).length,c=function(n,t,e,r,o){if(0===o)return 0
if(t===r)return o-1
for(var u=r,i=1;i<o;i++){var c=n(i),a=Math.abs(t-c.left)
if(e<=c.bottom){if(e<c.top||u<a)return i-1
u=a}}return 0}((function(n){return u(n).getBoundingClientRect()}),e,r,o.right,i)
return u(c)}(n,t,e,r,o)}))}(n,t,e,r):(u=t,i=e,c=r,a=(o=n).dom.createRange(),l=it(u),H(l,(function(n){return a.selectNode(n.dom),Tl(a.getBoundingClientRect(),i,c)?Rl(o,n,i,c):m.none()})))
var o,u,i,c,a,l},Ol=function(n,t){return t-n.left<n.right-t},Dl=function(n,t,e){var r=n.dom.createRange()
return r.selectNode(t.dom),r.collapse(e),r},Al=function(n,t,e){var r=n.dom.createRange()
r.selectNode(t.dom)
var o=r.getBoundingClientRect(),u=Ol(o,e)
return(!0===u?fr:sr)(t).map((function(t){return Dl(n,t,u)}))},Bl=function(n,t,e){var r=t.dom.getBoundingClientRect(),o=Ol(r,e)
return m.some(Dl(n,t,o))},El=document.caretPositionFromPoint?function(n,t,e){return m.from(n.dom.caretPositionFromPoint(t,e)).bind((function(t){if(null===t.offsetNode)return m.none()
var e=n.dom.createRange()
return e.setStart(t.offsetNode,t.offset),e.collapse(),m.some(e)}))}:document.caretRangeFromPoint?function(n,t,e){return m.from(n.dom.caretRangeFromPoint(t,e))}:function(n,t,e){return Dn.fromPoint(n,t,e).bind((function(r){var o=function(){return e=n,u=t,(0===it(o=r).length?Bl:Al)(e,o,u)
var e,o,u}
return 0===it(r).length?o():function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect()
return function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect(),i=Math.max(u.left,Math.min(u.right,e)),c=Math.max(u.top,Math.min(u.bottom,r))
return Rl(n,t,i,c)}(n,t,Math.max(u.left,Math.min(u.right,e)),Math.max(u.top,Math.min(u.bottom,r)))}(n,r,t,e).orThunk(o)}))},Pl=function(n,t){var e=$n(n)
return"input"===e?pl.after(n):O(["br","img"],e)?0===t?pl.before(n):pl.after(n):pl.on(n,t)},Il=function(n,t){var e=n.fold(pl.before,Pl,pl.after),r=t.fold(pl.before,Pl,pl.after)
return hl.relative(e,r)},Ml=function(n,t,e,r){var o=Pl(n,t),u=Pl(e,r)
return hl.relative(o,u)},kl=function(n){return m.from(n.getSelection())},Nl=function(n,t){kl(n).each((function(n){n.removeAllRanges(),n.addRange(t)}))},_l=function(n,t,e,r,o){var u=bl(n,t,e,r,o)
Nl(n,u)},zl=function(n,t){return Cl(n,t).match({ltr:function(t,e,r,o){_l(n,t,e,r,o)},rtl:function(t,e,r,o){kl(n).each((function(u){if(u.setBaseAndExtent)u.setBaseAndExtent(t.dom,e,r.dom,o)
else if(u.extend)try{c=t,a=e,l=r,f=o,(i=u).collapse(c.dom,a),i.extend(l.dom,f)}catch(d){_l(n,r,o,t,e)}else _l(n,r,o,t,e)
var i,c,a,l,f}))}})},Wl=function(n,t,e,r,o){var u=Ml(t,e,r,o)
zl(n,u)},jl=function(n,t,e){var r=Il(t,e)
zl(n,r)},Fl=function(n){if(0<n.rangeCount){var t=n.getRangeAt(0),e=n.getRangeAt(n.rangeCount-1)
return m.some(dl(Dn.fromDom(t.startContainer),t.startOffset,Dn.fromDom(e.endContainer),e.endOffset))}return m.none()},Ll=function(n){if(null===n.anchorNode||null===n.focusNode)return Fl(n)
var t=Dn.fromDom(n.anchorNode),e=Dn.fromDom(n.focusNode)
return function(n,t,e,r){var o,u,i,c,a,l=(u=t,i=e,c=r,(a=nt(o=n).dom.createRange()).setStart(o.dom,u),a.setEnd(i.dom,c),a),f=En(n,e)&&t===r
return l.collapsed&&!f}(t,n.anchorOffset,e,n.focusOffset)?m.some(dl(t,n.anchorOffset,e,n.focusOffset)):Fl(n)},Hl=function(n){return kl(n).filter((function(n){return 0<n.rangeCount})).bind(Ll).map((function(n){return hl.exact(n.start,n.soffset,n.finish,n.foffset)}))},ql=tinymce.util.Tools.resolve("tinymce.util.VK"),Vl=function(n,t,e,r){return Gl(n,t,sl(o=e,undefined).fold((function(){return fl.none(o)}),(function(n){return n.index+1<n.all.length?fl.middle(o,n.all[n.index+1]):fl.last(o)})),r)
var o},Ul=function(n,t,e,r){return Gl(n,t,sl(o=e,undefined).fold((function(){return fl.none()}),(function(n){return 0<=n.index-1?fl.middle(o,n.all[n.index-1]):fl.first(o)})),r)
var o},$l=function(n,t){return function(n){var t=hl.getWin(n).dom,e=function(n,e,r,o){return bl(t,n,e,r,o)},r=n.match({domRange:function(n){var t=Dn.fromDom(n.startContainer),e=Dn.fromDom(n.endContainer)
return Ml(t,n.startOffset,e,n.endOffset)},relative:Il,exact:Ml})
return Cl(t,r).match({ltr:e,rtl:e})}(hl.exact(t,0,t,0))},Gl=function(n,t,e,r){return e.fold(m.none,m.none,(function(n,t){return fr(t).map((function(n){return $l(0,n)}))}),(function(e){return ne(e,t).bind((function(t){var o,u=Ar(e)
return n.undoManager.transact((function(){r.insertRowsAfter(t,u)})),o=bt(t,"tr"),L(o).bind((function(n){return Rt(n,"td,th").map((function(n){return $l(0,n)}))}))}))}))},Kl=["table","li","dl"],Xl=function(n,t,e){var r,o,u,i
n.keyCode===ql.TAB&&(r=hi(t),o=function(n){var t=$n(n)
return En(n,r)||O(Kl,t)},(u=t.selection.getRng()).collapsed&&(i=Dn.fromDom(u.startContainer),Jt(i,o).each((function(r){n.preventDefault(),(n.shiftKey?Ul:Vl)(t,o,r,e).each((function(n){t.selection.setRng(n)}))}))))},Yl=function(n,t){return{selection:n,kill:t}},Jl=function(n,t,e,r){return{start:pl.on(n,t),finish:pl.on(e,r)}},Ql=function(n,t){var e=Sl(n,t)
return dl(Dn.fromDom(e.startContainer),e.startOffset,Dn.fromDom(e.endContainer),e.endOffset)},Zl=Jl,nf=function(n,t,e,r,o){return En(e,r)?m.none():Ge(e,r,t).bind((function(t){var r=t.boxes.getOr([])
return 0<r.length?(o(n,r,t.start,t.finish),m.some(Yl(m.some(Zl(e,0,e,cr(e))),!0))):m.none()}))},tf=function(n,t){return{item:n,mode:t}},ef=function(n,t,e,r){return void 0===r&&(r=rf),n.property().parent(t).map((function(n){return tf(n,r)}))},rf=function(n,t,e,r){return void 0===r&&(r=of),e.sibling(n,t).map((function(n){return tf(n,r)}))},of=function(n,t,e,r){void 0===r&&(r=of)
var o=n.property().children(t)
return e.first(o).map((function(n){return tf(n,r)}))},uf=[{current:ef,next:rf,fallback:m.none()},{current:rf,next:of,fallback:m.some(ef)},{current:of,next:of,fallback:m.some(rf)}],cf=function(n,t,e,r,o){return void 0===o&&(o=uf),k(o,(function(n){return n.current===e})).bind((function(e){return e.current(n,t,r,e.next).orThunk((function(){return e.fallback.bind((function(e){return cf(n,t,e,r)}))}))}))},af=function(n,t,e,r,o,u){return cf(n,t,r,o).bind((function(t){return u(t.item)?m.none():e(t.item)?m.some(t.item):af(n,t.item,e,t.mode,o,u)}))},lf=function(n){return function(t){return 0===n.property().children(t).length}},ff=function(n,t,e,r){return af(n,t,e,rf,{sibling:function(n,t){return n.query().prevSibling(t)},first:function(n){return 0<n.length?m.some(n[n.length-1]):m.none()}},r)},sf=function(n,t,e,r){return af(n,t,e,rf,{sibling:function(n,t){return n.query().nextSibling(t)},first:function(n){return 0<n.length?m.some(n[0]):m.none()}},r)},df=Fe(),mf=function(n,t){return ff(e=df,n,lf(e),t)
var e},pf=function(n,t){return sf(e=df,n,lf(e),t)
var e},gf=Ze([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}]),hf=function(n){return Ot(n,"tr")},vf=q(q({},gf),{verify:function(n,t,e,r,o,u,i){return Ot(r,"td,th",i).bind((function(e){return Ot(t,"td,th",i).map((function(t){return En(e,t)?En(r,e)&&cr(e)===o?u(t):gf.none("in same cell"):Ue(hf,[e,t]).fold((function(){return o=t,i=e,c=(r=n).getRect(o),(a=r.getRect(i)).right>c.left&&a.left<c.right?gf.success():u(t)
var r,o,i,c,a}),(function(n){return u(t)}))}))})).getOr(gf.none("default"))},cata:function(n,t,e,r,o){return n.fold(t,e,r,o)}}),bf=function(n){return"br"===$n(n)},wf=function(n,t,e){return t(n,e).bind((function(n){return Jn(n)&&0===_e(n).trim().length?wf(n,t,e):m.some(n)}))},yf=function(n,t,e,o){return ct(u=t,i=e).filter(bf).orThunk((function(){return ct(u,i-1).filter(bf)})).bind((function(t){return o.traverse(t).fold((function(){return wf(t,o.gather,n).map(o.relative)}),(function(n){return et(t=n).bind((function(n){var e=it(n)
return function(n,t){return N(n,r(En,t))}(e,t).map((function(r){return{parent:n,children:e,element:t,index:r}}))})).map((function(n){return pl.on(n.parent,n.index)}))
var t}))}))
var u,i},xf=function(n,t){return{left:n.left,top:n.top+t,right:n.right,bottom:n.bottom+t}},Cf=function(n,t){return{left:n.left,top:n.top-t,right:n.right,bottom:n.bottom-t}},Sf=function(n,t,e){return{left:n.left+t,top:n.top+e,right:n.right+t,bottom:n.bottom+e}},Tf=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},Rf=function(n,t){return m.some(n.getRect(t))},Of=function(n,t,e){return Yn(t)?Rf(n,t).map(Tf):Jn(t)?(r=n,o=t,(0<=(u=e)&&u<cr(o)?r.getRangedRect(o,u,o,u+1):0<u?r.getRangedRect(o,u-1,o,u):m.none()).map(Tf)):m.none()
var r,o,u},Df=function(n,t){return Yn(t)?Rf(n,t).map(Tf):Jn(t)?n.getRangedRect(t,0,t,cr(t)).map(Tf):m.none()},Af=Ze([{none:[]},{retry:["caret"]}]),Bf=function(n,t,e){return wt((function(n,t){return t(n)}),Ct,t,Wc,undefined).fold(a,(function(t){return Df(n,t).exists((function(n){return r=n,(t=e).left<r.left||Math.abs(r.right-t.left)<1||t.left>r.right
var t,r}))}))},Ef={point:function(n){return n.bottom},adjuster:function(n,t,e,r,o){var u=xf(o,5)
return Math.abs(e.bottom-r.bottom)<1||e.top>o.bottom?Af.retry(u):e.top===o.bottom?Af.retry(xf(o,1)):Bf(n,t,o)?Af.retry(Sf(u,5,0)):Af.none()},move:xf,gather:pf},Pf=function(n,t,e,r,o){return 0===o?m.some(r):(a=n,l=r.left,f=t.point(r),a.elementFromPoint(l,f).filter((function(n){return"table"===$n(n)})).isSome()?(i=r,c=o-1,Pf(n,u=t,e,u.move(i,5),c)):n.situsFromPoint(r.left,t.point(r)).bind((function(u){return u.start.fold(m.none,(function(u){return Df(n,u).bind((function(i){return t.adjuster(n,u,i,e,r).fold(m.none,(function(r){return Pf(n,t,e,r,o-1)}))})).orThunk((function(){return m.some(r)}))}),m.none)})))
var u,i,c,a,l,f},If=function(n,t,e){var r,o,u,i=n.move(e,5),c=Pf(t,n,e,i,100).getOr(i)
return o=c,u=t,((r=n).point(o)>u.getInnerHeight()?m.some(r.point(o)-u.getInnerHeight()):r.point(o)<0?m.some(-r.point(o)):m.none()).fold((function(){return t.situsFromPoint(c.left,n.point(c))}),(function(e){return t.scrollBy(0,e),t.situsFromPoint(c.left,n.point(c)-e)}))},Mf={tryUp:r(If,{point:function(n){return n.top},adjuster:function(n,t,e,r,o){var u=Cf(o,5)
return Math.abs(e.top-r.top)<1||e.bottom<o.top?Af.retry(u):e.bottom===o.top?Af.retry(Cf(o,1)):Bf(n,t,o)?Af.retry(Sf(u,5,0)):Af.none()},move:Cf,gather:mf}),tryDown:r(If,Ef),ieTryUp:function(n,t){return n.situsFromPoint(t.left,t.top-5)},ieTryDown:function(n,t){return n.situsFromPoint(t.left,t.bottom+5)},getJumpSize:t(5)},kf=function(n,t,e){return n.getSelection().bind((function(r){return function(n,t,e,r){var o,u,i
return(bf(t)?(o=n,u=t,(i=r).traverse(u).orThunk((function(){return wf(u,i.gather,o)})).map(i.relative)):yf(n,t,e,r)).map((function(n){return{start:n,finish:n}}))}(t,r.finish,r.foffset,e).fold((function(){return m.some(ji(r.finish,r.foffset))}),(function(o){var u,i=n.fromSitus(o)
return u=vf.verify(n,r.finish,r.foffset,i.finish,i.foffset,e.failure,t),vf.cata(u,(function(n){return m.none()}),(function(){return m.none()}),(function(n){return m.some(ji(n,0))}),(function(n){return m.some(ji(n,cr(n)))}))}))}))},Nf=function(n,t,e,r,o,u){return 0===u?m.none():Wf(n,t,e,r,o).bind((function(i){var c=n.fromSitus(i),a=vf.verify(n,e,r,c.finish,c.foffset,o.failure,t)
return vf.cata(a,(function(){return m.none()}),(function(){return m.some(i)}),(function(i){return En(e,i)&&0===r?_f(n,e,r,Cf,o):Nf(n,t,i,0,o,u-1)}),(function(i){return En(e,i)&&r===cr(i)?_f(n,e,r,xf,o):Nf(n,t,i,cr(i),o,u-1)}))}))},_f=function(n,t,e,r,o){return Of(n,t,e).bind((function(t){return zf(n,o,r(t,Mf.getJumpSize()))}))},zf=function(n,t,e){var r=Rn().browser
return r.isChrome()||r.isSafari()||r.isFirefox()||r.isEdge()?t.otherRetry(n,e):r.isIE()?t.ieRetry(n,e):m.none()},Wf=function(n,t,e,r,o){return Of(n,e,r).bind((function(t){return zf(n,o,t)}))},jf=function(n,t,e,r,o){return Ot(r,"td,th",t).bind((function(r){return Ot(r,"table",t).bind((function(u){return function(n,t){return Ct(n,(function(n){return et(n).exists((function(n){return En(n,t)}))}),void 0).isSome()}(o,u)?kf(i=n,c=t,a=e).bind((function(n){return Nf(i,c,n.element,n.offset,a,20).map(i.fromSitus)})).bind((function(n){return Ot(n.finish,"td,th",t).map((function(t){return{start:r,finish:t,range:n}}))})):m.none()
var i,c,a}))}))},Ff=function(n,t,e,r,o,u){return Rn().browser.isIE()?m.none():u(r,t).orThunk((function(){return jf(n,t,e,r,o).map((function(n){var t=n.range
return Yl(m.some(Zl(t.start,t.soffset,t.finish,t.foffset)),!0)}))}))},Lf=function(n,t){return Ot(n,"tr",t).bind((function(n){return Ot(n,"table",t).bind((function(e){var r=bt(e,"tr")
return En(n,r[0])?ff(df,e,(function(n){return sr(n).isSome()}),t).map((function(n){var t=cr(n)
return Yl(m.some(Zl(n,t,n,t)),!0)})):m.none()}))}))},Hf=function(n,t){return Ot(n,"tr",t).bind((function(n){return Ot(n,"table",t).bind((function(e){var r=bt(e,"tr")
return En(n,r[r.length-1])?sf(df,e,(function(n){return fr(n).isSome()}),t).map((function(n){return Yl(m.some(Zl(n,0,n,0)),!0)})):m.none()}))}))},qf=function(n,t,e,r,o,u,i){return jf(n,e,r,o,u).bind((function(n){return nf(t,e,n.start,n.finish,i)}))},Vf=function(n,t){return Ot(n,"td,th",t)}
var Uf={traverse:ut,gather:pf,relative:pl.before,otherRetry:Mf.tryDown,ieRetry:Mf.ieTryDown,failure:vf.failedDown},$f={traverse:ot,gather:mf,relative:pl.before,otherRetry:Mf.tryUp,ieRetry:Mf.ieTryUp,failure:vf.failedUp},Gf=function(n){return function(t){return t===n}},Kf=Gf(38),Xf=Gf(40),Yf=function(n){return 37<=n&&n<=40},Jf={isBackward:Gf(37),isForward:Gf(39)},Qf={isBackward:Gf(39),isForward:Gf(37)},Zf=function(n){return{elementFromPoint:function(t,e){return Dn.fromPoint(Dn.fromDom(n.document),t,e)},getRect:function(n){return n.dom.getBoundingClientRect()},getRangedRect:function(t,e,r,o){var u=hl.exact(t,e,r,o)
return function(n,t){var e,r,o
return 0<(o=0<(r=(e=Sl(n,t)).getClientRects()).length?r[0]:e.getBoundingClientRect()).width||0<o.height?m.some(o).map(wl):m.none()}(n,u)},getSelection:function(){return Hl(n).map((function(t){return Ql(n,t)}))},fromSitus:function(t){var e=hl.relative(t.start,t.finish)
return Ql(n,e)},situsFromPoint:function(t,e){return function(n,t,e){return r=t,o=e,u=Dn.fromDom(n.document),El(u,r,o).map((function(n){return dl(Dn.fromDom(n.startContainer),n.startOffset,Dn.fromDom(n.endContainer),n.endOffset)}))
var r,o,u}(n,t,e).map((function(n){return Jl(n.start,n.soffset,n.finish,n.foffset)}))},clearSelection:function(){kl(n).each((function(n){return n.removeAllRanges()}))},collapseSelection:function(t){void 0===t&&(t=!1),Hl(n).each((function(e){return e.fold((function(n){return n.collapse(t)}),(function(e,r){var o=t?e:r
jl(n,o,o)}),(function(e,r,o,u){var i=t?e:o,c=t?r:u
Wl(n,i,c,i,c)}))}))},setSelection:function(t){Wl(n,t.start,t.soffset,t.finish,t.foffset)},setRelativeSelection:function(t,e){jl(n,t,e)},selectContents:function(t){(function(n,t){var e,r,o=(e=t,function(n,t){n.selectNodeContents(t.dom)}(r=n.document.createRange(),e),r)
Nl(n,o)})(n,t)},getInnerHeight:function(){return n.innerHeight},getScrollY:function(){var t,e,r,o
return(t=Dn.fromDom(n.document),e=void 0!==t?t.dom:document,r=e.body.scrollLeft||e.documentElement.scrollLeft,o=e.body.scrollTop||e.documentElement.scrollTop,Yr(r,o)).top},scrollBy:function(t,e){var r,o,u,i
r=t,o=e,(i=(void 0!==(u=Dn.fromDom(n.document))?u.dom:document).defaultView)&&i.scrollBy(r,o)}}},ns=function(n,t){return{rows:n,cols:t}},ts=function(n,t,e,r){var o=function(n,t,e,r){var o,u=(o=Ri(m.none()),{clear:function(){return o.set(m.none())},set:function(n){return o.set(m.some(n))},isSet:function(){return o.get().isSome()},on:function(n){return o.get().each(n)}}),i=u.clear
return{clearstate:i,mousedown:function(n){r.clear(t),Vf(n.target,e).each(u.set)},mouseover:function(o){u.on((function(u){r.clearBeforeUpdate(t),Vf(o.target,e).each((function(o){Ge(u,o,e).each((function(e){var i=e.boxes.getOr([]);(1<i.length||1===i.length&&!En(u,o))&&(r.selectRange(t,i,e.start,e.finish),n.selectContents(o))}))}))}))},mouseup:function(n){i()}}}(Zf(n),t,e,r)
return{clearstate:o.clearstate,mousedown:o.mousedown,mouseover:o.mouseover,mouseup:o.mouseup}},es=function(n,t,e){var r=function(t){It(t,n.selected),It(t,n.firstSelected),It(t,n.lastSelected)},o=function(t){At(t,n.selected,"1")},u=function(n){i(n),e()},i=function(t){var e=bt(t,n.selectedSelector)
E(e,r)}
return{clearBeforeUpdate:i,clear:u,selectRange:function(e,r,i,c){u(e),E(r,o),At(i,n.firstSelected,"1"),At(c,n.lastSelected,"1"),t(r,i,c)},selectedSelector:n.selectedSelector,firstSelectedSelector:n.firstSelectedSelector,lastSelectedSelector:n.lastSelectedSelector}},rs=function(n){return!1===Bu(Dn.fromDom(n.target),"ephox-snooker-resizer-bar")}
function os(t,e,o){var u=es(Dr,(function(e,r,u){o.targets().each((function(o){ne(r).each((function(i){var c=pi(t),a=Sr(n,Dn.fromDom(t.getDoc()),c),l=function(n,t,e){var r=le(n)
return fc(r,t).map((function(n){var t,o,u,i,c,a,l,f,s,d=oc(r,e,!1)
return{upOrLeftCells:(t=n,o=e,u=d.slice(0,t[t.length-1].row+1),i=uc(u,o),z(i,(function(n){var e=n.cells.slice(0,t[t.length-1].column+1)
return B(e,(function(n){return n.element}))}))),downOrRightCells:(a=n,l=e,f=(c=d).slice(a[0].row+a[0].rowspan-1,c.length),s=uc(f,l),z(s,(function(n){var t=n.cells.slice(a[0].column+a[0].colspan-1,n.cells.length)
return B(t,(function(n){return n.element}))})))}}))}(i,o,a);(function(n,t,e,r,o){n.fire("TableSelectionChange",{cells:t,start:e,finish:r,otherCells:o})})(t,e,r,u,l)}))}))}),(function(){return function(n){n.fire("TableSelectionClear")}(t)}))
return t.on("init",(function(o){var i=t.getWin(),c=hi(t),a=wi(t),l=ts(i,c,a,u),f=function(n,t,e,o){var u=Zf(n),i=function(){return o.clear(t),m.none()}
return{keydown:function(n,c,a,l,f,s){var d=n.raw,p=d.which,g=!0===d.shiftKey
return Ke(t,o.selectedSelector).fold((function(){return Xf(p)&&g?r(qf,u,t,e,Uf,l,c,o.selectRange):Kf(p)&&g?r(qf,u,t,e,$f,l,c,o.selectRange):Xf(p)?r(Ff,u,e,Uf,l,c,Hf):Kf(p)?r(Ff,u,e,$f,l,c,Lf):m.none}),(function(n){var e=function(e){return function(){return H(e,(function(e){return r=e.rows,u=e.cols,i=t,Ye(n,r,u,(c=o).firstSelectedSelector,c.lastSelectedSelector).map((function(n){return c.clearBeforeUpdate(i),c.selectRange(i,n.boxes,n.start,n.finish),n.boxes}))
var r,u,i,c})).fold((function(){return Xe(t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){var e=Xf(p)||s.isForward(p)?pl.after:pl.before
return u.setRelativeSelection(pl.on(n.first,0),e(n.table)),o.clear(t),Yl(m.none(),!0)}))}),(function(n){return m.some(Yl(m.none(),!0))}))}}
return Xf(p)&&g?e([ns(1,0)]):Kf(p)&&g?e([ns(-1,0)]):s.isBackward(p)&&g?e([ns(0,-1),ns(-1,0)]):s.isForward(p)&&g?e([ns(0,1),ns(1,0)]):Yf(p)&&0==g?i:m.none}))()},keyup:function(n,r,u,i,c){return Ke(t,o.selectedSelector).fold((function(){var a,l,f,s,d,p,g,h=n.raw,v=h.which
return 0!=(!0===h.shiftKey)&&Yf(v)?(a=t,l=e,f=r,s=u,d=i,p=c,g=o.selectRange,En(f,d)&&s===p?m.none():Ot(f,"td,th",l).bind((function(n){return Ot(d,"td,th",l).bind((function(t){return nf(a,l,n,t,g)}))}))):m.none()}),m.none)}}}(i,c,a,u),s=function(n,t,e,r){var o=Zf(n)
return function(n,u){r.clearBeforeUpdate(t),Ge(n,u,e).each((function(n){var e=n.boxes.getOr([])
r.selectRange(t,e,n.start,n.finish),o.selectContents(u),o.collapseSelection()}))}}(i,c,a,u)
t.on("TableSelectorChange",(function(n){return s(n.start,n.finish)}))
var d,p,g=function(n,e){!0===n.raw.shiftKey&&(e.kill&&n.kill(),e.selection.each((function(n){var e=hl.relative(n.start,n.finish),r=Sl(i,e)
t.selection.setRng(r)})))},h=function(n){return 0===n.button},v=(d=Ri(Dn.fromDom(c)),p=Ri(0),{touchEnd:function(n){var t,e,r=Dn.fromDom(n.target)
"td"!==$n(r)&&"th"!==$n(r)||(t=d.get(),e=p.get(),En(t,r)&&n.timeStamp-e<300&&(n.preventDefault(),s(r,r))),d.set(r),p.set(n.timeStamp)}})
t.on("dragstart",(function(n){l.clearstate()})),t.on("mousedown",(function(n){h(n)&&rs(n)&&l.mousedown(Ru(n))})),t.on("mouseover",(function(n){var t;(void 0===(t=n).buttons||tl.browser.isEdge()&&0===t.buttons||0!=(1&t.buttons))&&rs(n)&&l.mouseover(Ru(n))})),t.on("mouseup",(function(n){h(n)&&rs(n)&&l.mouseup(Ru(n))})),t.on("touchend",v.touchEnd),t.on("keyup",(function(n){var e,r,o,u=Ru(n)
u.raw.shiftKey&&Yf(u.raw.which)&&(e=t.selection.getRng(),r=Dn.fromDom(e.startContainer),o=Dn.fromDom(e.endContainer),f.keyup(u,r,e.startOffset,o,e.endOffset).each((function(n){g(u,n)})))})),t.on("keydown",(function(n){var r=Ru(n)
e().each((function(n){return n.hideBars()}))
var o=t.selection.getRng(),u=Dn.fromDom(o.startContainer),i=Dn.fromDom(o.endContainer),c=Vr(Jf,Qf)(Dn.fromDom(t.selection.getStart()))
f.keydown(r,u,o.startOffset,i,o.endOffset,c).each((function(n){g(r,n)})),e().each((function(n){return n.showBars()}))})),t.on("NodeChange",(function(){var e=t.selection,r=Dn.fromDom(e.getStart()),o=Dn.fromDom(e.getEnd())
Ue(ne,[r,o]).fold((function(){return u.clear(c)}),n)}))})),{clear:u.clear}}ur.add("table",(function(t){var e=function(n,t,e){return{get:function(){return Je(n(),e).fold((function(){return t().map(or).getOrThunk(er)}),(function(n){return rr(n)}))}}}((function(){return hi(t)}),(function(){return xa(Ti(t))}),Dr.selectedSelector),r=function(n,t){var e=Ri(m.none()),r=Ri([]),o=function(){return xa(Ti(n)).bind((function(n){return ne(n).map((function(e){return"caption"===$n(n)?Ar(n):Br(t,e,n)}))}))},u=function(){e.set($(o)()),E(r.get(),(function(n){return n()}))},i=function(n,t){var o=function(){return e.get().fold((function(){n.setDisabled(!0)}),(function(e){n.setDisabled(t(e))}))}
return o(),r.set(r.get().concat([o])),function(){r.set(P(r.get(),(function(n){return n!==o})))}}
return n.on("NodeChange ExecCommand TableSelectorChange",u),{onSetupTable:function(n){return i(n,(function(n){return!1}))},onSetupCellOrRow:function(n){return i(n,(function(n){return"caption"===$n(n.element)}))},onSetupPasteable:function(n){return function(t){return i(t,(function(t){return"caption"===$n(t.element)||n().isNone()}))}},onSetupMergeable:function(n){return i(n,(function(n){return n.mergable.isNone()}))},onSetupUnmergeable:function(n){return i(n,(function(n){return n.unmergable.isNone()}))},resetTargets:u,targets:function(){return e.get()}}}(t,e),o=Wi(t),u=os(t,o.lazyResize,r),i=function(t,e,r){var o=function(n){return"table"===$n(hi(n))},u=pi(t),i=function(n,e,r,o){return function(i,c){xi(i)
var a=o(),l=Dn.fromDom(t.getDoc()),f=Sr(r,l,u),s=Pi(t,i)
return e(i)?n(a,i,c,f,s).bind((function(n){return E(n.newRows,(function(n){Ku(t,n.dom)})),E(n.newCells,(function(n){Xu(t,n.dom)})),n.cursor.map((function(n){var e=qi(Vi,n),r=t.dom.createRng()
return r.setStart(e.element.dom,e.offset),r.setEnd(e.element.dom,e.offset),r}))})):m.none()}},c=i(ea,(function(n){return!1===o(t)||1<su(n).rows}),n,e),a=i(ta,(function(n){return!1===o(t)||1<su(n).columns}),n,e),f=i(Jc,l,n,e),s=i(Qc,l,n,e),d=i(Zc,l,Ui,e),p=i(na,l,Ui,e),g=i(ua,l,n,e),h=i(ia,l,n,e),v=i(aa,l,n,e),b=i(la,l,n,e),w=i(fa,l,n,e),y=i(sa,l,n,e),x=i(ca,l,n,e),C=function(n,t){return jn(n,"type").filter((function(n){return O(t,n)}))}
return{deleteRow:c,deleteColumn:a,insertRowsBefore:f,insertRowsAfter:s,insertColumnsBefore:d,insertColumnsAfter:p,mergeCells:g,unmergeCells:h,pasteColsBefore:v,pasteColsAfter:b,pasteRowsBefore:w,pasteRowsAfter:y,pasteCells:x,setTableCellType:function(n,t){return C(t,["td","th"]).each((function(t){var e=B(Ca(Ti(n),r),(function(n){return n.dom}))
va(n.dom,e,t,null)}))},setTableRowType:function(n,t){return C(t,["header","body","footer"]).each((function(t){B(Sa(Ti(n),Dr.selected),(function(e){return ba(n,e.dom,t)}))}))},makeColumnsHeader:i(ra,l,n,e),unmakeColumnsHeader:i(oa,l,n,e),getTableRowType:function(n){var t=Sa(Ti(n),Dr.selected)
if(0<t.length){var e=B(t,(function(n){return ga(0,n.dom)})),r=O(e,"header"),o=O(e,"footer")
if(r||o){var u=O(e,"body")
return!r||u||o?r||u||!o?"":"footer":"header"}return"body"}},getTableCellType:function(n){return Xc(Ca(Ti(n),r),(function(n){return"th"===$n(n)})).getOr("")},getTableColType:da}}(t,o.lazyWire,e),c=function(){var n=Ri(m.none()),t=Ri(m.none()),e=function(n){n.set(m.none())}
return{getRows:n.get,setRows:function(r){n.set(r),e(t)},clearRows:function(){return e(n)},getColumns:t.get,setColumns:function(r){t.set(r),e(n)},clearColumns:function(){return e(t)}}}()
return cl(t,i,u,e,c),function(n,t,e){var r=wi(n)
Nn({mceTableRowType:function(){return t.getTableRowType(n)},mceTableCellType:function(){return t.getTableCellType(n)},mceTableColType:function(){return ya(Ti(n)).bind((function(n){return ne(n,r).map((function(r){var o=Br(e,r,n)
return t.getTableColType(r,o)}))})).getOr("")}},(function(t,e){return n.addQueryValueHandler(e,t)}))}(t,i,e),function(t,e,r,o){t.on("BeforeGetContent",(function(r){!0===r.selection&&tr(e.get(),n,(function(n){r.preventDefault(),ne(n[0]).map(gr).map((function(n){return[ir(n,"[data-mce-selected]")]})).each((function(n){var e
r.content="text"===r.format?B(n,(function(n){return n.dom.innerText})).join(""):(e=t,B(n,(function(n){return e.selection.serializer.serialize(n.dom,{})})).join(""))}))}),n)})),t.on("BeforeSetContent",(function(n){!0===n.selection&&!0===n.paste&&m.from(t.dom.getParent(t.selection.getStart(),"th,td")).each((function(e){var u=Dn.fromDom(e)
ne(u).each((function(e){var i,c,a,l,f,s,d=P((i=n.content,(c=document.createElement("div")).innerHTML=i,it(Dn.fromDom(c))),(function(n){return"meta"!==$n(n)}))
1===d.length&&(s=d[0],"table"===$n(s))&&(n.preventDefault(),a=Dn.fromDom(t.getDoc()),l=Tr(a),f={element:u,clipboard:d[0],generators:l},r.pasteCells(e,f).each((function(n){t.selection.setRng(n),t.focus(),o.clear(e)})))}))}))}))}(t,e,i,u),function(n,t,e){var r=function(t){return function(){return n.execCommand(t)}},o=function(t){n.execCommand("mceInsertTable",!1,{rows:t.numRows,columns:t.numColumns})},u={text:"Table properties",onSetup:t.onSetupTable,onAction:r("mceTableProps")},i={text:"Delete table",icon:"table-delete-table",onSetup:t.onSetupTable,onAction:r("mceTableDelete")}
n.ui.registry.addMenuItem("tableinsertrowbefore",{text:"Insert row before",icon:"table-insert-row-above",onAction:r("mceTableInsertRowBefore"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertrowafter",{text:"Insert row after",icon:"table-insert-row-after",onAction:r("mceTableInsertRowAfter"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeleterow",{text:"Delete row",icon:"table-delete-row",onAction:r("mceTableDeleteRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablerowprops",{text:"Row properties",icon:"table-row-properties",onAction:r("mceTableRowProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutrow",{text:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopyrow",{text:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepasterowbefore",{text:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tablepasterowafter",{text:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tableinsertcolumnbefore",{text:"Insert column before",icon:"table-insert-column-before",onAction:r("mceTableInsertColBefore"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertcolumnafter",{text:"Insert column after",icon:"table-insert-column-after",onAction:r("mceTableInsertColAfter"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeletecolumn",{text:"Delete column",icon:"table-delete-column",onAction:r("mceTableDeleteCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutcolumn",{text:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopycolumn",{text:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepastecolumnbefore",{text:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addMenuItem("tablepastecolumnafter",{text:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addMenuItem("tablecellprops",{text:"Cell properties",icon:"table-cell-properties",onAction:r("mceTableCellProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablemergecells",{text:"Merge cells",icon:"table-merge-cells",onAction:r("mceTableMergeCells"),onSetup:t.onSetupMergeable}),n.ui.registry.addMenuItem("tablesplitcells",{text:"Split cell",icon:"table-split-cells",onAction:r("mceTableSplitCells"),onSetup:t.onSetupUnmergeable}),!1===n.getParam("table_grid",!0,"boolean")?n.ui.registry.addMenuItem("inserttable",{text:"Table",icon:"table",onAction:r("mceInsertTable")}):n.ui.registry.addNestedMenuItem("inserttable",{text:"Table",icon:"table",getSubmenuItems:function(){return[{type:"fancymenuitem",fancytype:"inserttable",onAction:o}]}}),n.ui.registry.addMenuItem("inserttabledialog",{text:"Insert table",icon:"table",onAction:r("mceInsertTable")}),n.ui.registry.addMenuItem("tableprops",u),n.ui.registry.addMenuItem("deletetable",i),n.ui.registry.addNestedMenuItem("row",{type:"nestedmenuitem",text:"Row",getSubmenuItems:function(){return"tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter"}}),n.ui.registry.addNestedMenuItem("column",{type:"nestedmenuitem",text:"Column",getSubmenuItems:function(){return"tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter"}}),n.ui.registry.addNestedMenuItem("cell",{type:"nestedmenuitem",text:"Cell",getSubmenuItems:function(){return"tablecellprops tablemergecells tablesplitcells"}}),n.ui.registry.addContextMenu("table",{update:function(){return t.resetTargets(),t.targets().fold((function(){return""}),(function(n){return"caption"===$n(n.element)?"tableprops deletetable":"cell row column | advtablesort | tableprops deletetable"}))}})}(t,r,c),function(n,t,e){n.ui.registry.addMenuButton("table",{tooltip:"Table",icon:"table",fetch:function(n){return n("inserttable | cell row column | advtablesort | tableprops deletetable")}})
var r=function(t){return function(){return n.execCommand(t)}}
n.ui.registry.addButton("tableprops",{tooltip:"Table properties",onAction:r("mceTableProps"),icon:"table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tabledelete",{tooltip:"Delete table",onAction:r("mceTableDelete"),icon:"table-delete-table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tablecellprops",{tooltip:"Cell properties",onAction:r("mceTableCellProps"),icon:"table-cell-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablemergecells",{tooltip:"Merge cells",onAction:r("mceTableMergeCells"),icon:"table-merge-cells",onSetup:t.onSetupMergeable}),n.ui.registry.addButton("tablesplitcells",{tooltip:"Split cell",onAction:r("mceTableSplitCells"),icon:"table-split-cells",onSetup:t.onSetupUnmergeable}),n.ui.registry.addButton("tableinsertrowbefore",{tooltip:"Insert row before",onAction:r("mceTableInsertRowBefore"),icon:"table-insert-row-above",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertrowafter",{tooltip:"Insert row after",onAction:r("mceTableInsertRowAfter"),icon:"table-insert-row-after",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tabledeleterow",{tooltip:"Delete row",onAction:r("mceTableDeleteRow"),icon:"table-delete-row",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablerowprops",{tooltip:"Row properties",onAction:r("mceTableRowProps"),icon:"table-row-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolbefore",{tooltip:"Insert column before",onAction:r("mceTableInsertColBefore"),icon:"table-insert-column-before",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolafter",{tooltip:"Insert column after",onAction:r("mceTableInsertColAfter"),icon:"table-insert-column-after",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tabledeletecol",{tooltip:"Delete column",onAction:r("mceTableDeleteCol"),icon:"table-delete-column",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecutrow",{tooltip:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecopyrow",{tooltip:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablepasterowbefore",{tooltip:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablepasterowafter",{tooltip:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablecutcol",{tooltip:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecopycol",{tooltip:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablepastecolbefore",{tooltip:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addButton("tablepastecolafter",{tooltip:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addButton("tableinsertdialog",{tooltip:"Insert table",onAction:r("mceInsertTable"),icon:"table"})}(t,r,c),function(n){var t=n.getParam("table_toolbar","tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol")
0<t.length&&n.ui.registry.addContextToolbar("table",{predicate:function(t){return n.dom.is(t,"table")&&n.getBody().contains(t)},items:t,scope:"node",position:"node"})}(t),t.on("PreInit",(function(){t.serializer.addTempAttr(Dr.firstSelected),t.serializer.addTempAttr(Dr.lastSelected),function(n){n.formatter.register(al)}(t)})),function(n){return n.getParam("table_tab_navigation",!0,"boolean")}(t)&&t.on("keydown",(function(n){Xl(n,t,i)})),t.on("remove",(function(){o.destroy()})),function(n,t,e,r){return{insertTable:(o=n,function(n,t,e){void 0===e&&(e={})
var r=Aa(o,t,n,e,"Invalid values for insertTable - rows and columns values are required to insert a table.")
return o.undoManager.add(),r}),setClipboardRows:Ea(t.setRows),getClipboardRows:Ba(t.getRows),setClipboardCols:Ea(t.setColumns),getClipboardCols:Ba(t.getColumns),resizeHandler:e,selectionTargets:r}
var o}(t,c,o,r)}))}()

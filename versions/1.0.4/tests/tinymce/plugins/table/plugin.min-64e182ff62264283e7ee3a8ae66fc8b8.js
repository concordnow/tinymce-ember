!function(){"use strict"
var n=function(){},e=function(n){return function(){return n}},t=function(n){return n}
function r(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t]
return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
var o=e.concat(t)
return n.apply(null,o)}}var o,u,i,c=function(n){return function(e){return!n(e)}},a=e(!1),l=e(!0),f=function(){return s},s=(o=function(n){return n.isNone()},{fold:function(n,e){return n()},is:a,isSome:a,isNone:l,getOr:i=function(n){return n},getOrThunk:u=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:e(null),getOrUndefined:e(void 0),or:i,orThunk:u,map:f,each:n,bind:f,exists:a,forall:l,filter:f,equals:o,equals_:o,toArray:function(){return[]},toString:e("none()")}),d=function(n){var t=e(n),r=function(){return u},o=function(e){return e(n)},u={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:l,isNone:a,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:function(e){return d(e(n))},each:function(e){e(n)},bind:o,exists:o,forall:o,filter:function(e){return e(n)?u:s},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(a,(function(e){return t(n,e)}))}}
return u},m={some:d,none:f,from:function(n){return null==n?s:d(n)}},p=function(n){return function(e){return r=typeof(t=e),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===n
var t,r}},g=function(n){return function(e){return typeof e===n}},h=p("string"),v=p("object"),b=p("array"),w=g("boolean"),y=function(n){return!(null===(e=n)||void 0===e)
var e},x=g("function"),C=g("number"),S=Array.prototype.slice,T=Array.prototype.indexOf,R=Array.prototype.push,D=function(n,e){return t=n,r=e,-1<T.call(t,r)
var t,r},O=function(n,e){for(var t=0,r=n.length;t<r;t++)if(e(n[t],t))return!0
return!1},A=function(n,e){for(var t=[],r=0;r<n;r++)t.push(e(r))
return t},B=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var u=n[o]
r[o]=e(u,o)}return r},E=function(n,e){for(var t=0,r=n.length;t<r;t++)e(n[t],t)},P=function(n,e){for(var t=[],r=0,o=n.length;r<o;r++){var u=n[r]
e(u,r)&&t.push(u)}return t},M=function(n,e,t){return function(n,e){for(var t=n.length-1;0<=t;t--)e(n[t])}(n,(function(n){t=e(t,n)})),t},I=function(n,e,t){return E(n,(function(n){t=e(t,n)})),t},k=function(n,e){return function(n,e,t){for(var r=0,o=n.length;r<o;r++){var u=n[r]
if(e(u,r))return m.some(u)
if(t(u,r))break}return m.none()}(n,e,a)},N=function(n,e){for(var t=0,r=n.length;t<r;t++)if(e(n[t],t))return m.some(t)
return m.none()},_=function(n){for(var e=[],t=0,r=n.length;t<r;++t){if(!b(n[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+n)
R.apply(e,n[t])}return e},W=function(n,e){return _(B(n,e))},j=function(n,e){for(var t=0,r=n.length;t<r;++t)if(!0!==e(n[t],t))return!1
return!0},z=function(n){return[n]},F=function(n){return 0===n.length?m.none():m.some(n[n.length-1])},L=function(n,e){for(var t=0;t<n.length;t++){var r=e(n[t],t)
if(r.isSome())return r}return m.none()},H=function(){return(H=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}).apply(this,arguments)}
function q(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length
var r=Array(n),o=0
for(e=0;e<t;e++)for(var u=arguments[e],i=0,c=u.length;i<c;i++,o++)r[o]=u[i]
return r}var V,U=function(n){var e,t=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return t||(t=!0,e=n.apply(null,r)),e}},$=function(){return G(0,0)},G=function(n,e){return{major:n,minor:e}},K=function(n,e){var t=String(e).toLowerCase()
return 0===n.length?$():function(n,e){var t=function(n,e){for(var t=0;t<n.length;t++){var r=n[t]
if(r.test(e))return r}}(n,e)
if(!t)return{major:0,minor:0}
var r=function(n){return Number(e.replace(t,"$"+n))}
return G(r(1),r(2))}(n,t)},X=$,Y=function(n,e){var t=String(e).toLowerCase()
return k(n,(function(n){return n.search(t)}))},J=function(n,e,t){return""===e||n.length>=e.length&&n.substr(t,t+e.length)===e},Q=function(n,e){return-1!==n.indexOf(e)},Z=function(n,e){return J(n,e,0)},nn=function(n,e){return J(n,e,n.length-e.length)},en=(V=/^\s+|\s+$/g,function(n){return n.replace(V,"")}),tn=function(n){return 0<n.length},rn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,on=function(n){return function(e){return Q(e,n)}},un=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return Q(n,"edge/")&&Q(n,"chrome")&&Q(n,"safari")&&Q(n,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,rn],search:function(n){return Q(n,"chrome")&&!Q(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return Q(n,"msie")||Q(n,"trident")}},{name:"Opera",versionRegexes:[rn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:on("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:on("firefox")},{name:"Safari",versionRegexes:[rn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(Q(n,"safari")||Q(n,"mobile/"))&&Q(n,"applewebkit")}}],cn=[{name:"Windows",search:on("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return Q(n,"iphone")||Q(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:on("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:on("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:on("linux"),versionRegexes:[]},{name:"Solaris",search:on("sunos"),versionRegexes:[]},{name:"FreeBSD",search:on("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:on("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],an={browsers:e(un),oses:e(cn)},ln="Firefox",fn=function(n){var e=n.current,t=n.version,r=function(n){return function(){return e===n}}
return{current:e,version:t,isEdge:r("Edge"),isChrome:r("Chrome"),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r(ln),isSafari:r("Safari")}},sn=function(){return fn({current:void 0,version:X()})},dn=fn,mn=(e("Edge"),e("Chrome"),e("IE"),e("Opera"),e(ln),e("Safari"),"Windows"),pn="Android",gn="Solaris",hn="FreeBSD",vn="ChromeOS",bn=function(n){var e=n.current,t=n.version,r=function(n){return function(){return e===n}}
return{current:e,version:t,isWindows:r(mn),isiOS:r("iOS"),isAndroid:r(pn),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(gn),isFreeBSD:r(hn),isChromeOS:r(vn)}},wn=function(){return bn({current:void 0,version:X()})},yn=bn,xn=(e(mn),e("iOS"),e(pn),e("Linux"),e("OSX"),e(gn),e(hn),e(vn),function(n,t){var r,o,u,i,c,a,l,f,s,d,m,p,g=an.browsers(),h=an.oses(),v=function(n,e){return Y(n,e).map((function(n){var t=K(n.versionRegexes,e)
return{current:n.name,version:t}}))}(g,n).fold(sn,dn),b=function(n,e){return Y(n,e).map((function(n){var t=K(n.versionRegexes,e)
return{current:n.name,version:t}}))}(h,n).fold(wn,yn)
return{browser:v,os:b,deviceType:(o=v,u=n,i=t,c=(r=b).isiOS()&&!0===/ipad/i.test(u),a=r.isiOS()&&!c,l=r.isiOS()||r.isAndroid(),f=l||i("(pointer:coarse)"),s=c||!a&&l&&i("(min-device-width:768px)"),d=a||l&&!s,m=o.isSafari()&&r.isiOS()&&!1===/safari/i.test(u),p=!d&&!s&&!m,{isiPad:e(c),isiPhone:e(a),isTablet:e(s),isPhone:e(d),isTouch:e(f),isAndroid:r.isAndroid,isiOS:r.isiOS,isWebView:e(m),isDesktop:e(p)})}}),Cn=function(n){return window.matchMedia(n).matches},Sn=U((function(){return xn(navigator.userAgent,Cn)})),Tn=function(){return Sn()},Rn=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},Dn={fromHtml:function(n,e){var t=(e||document).createElement("div")
if(t.innerHTML=n,!t.hasChildNodes()||1<t.childNodes.length)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return Rn(t.childNodes[0])},fromTag:function(n,e){var t=(e||document).createElement(n)
return Rn(t)},fromText:function(n,e){var t=(e||document).createTextNode(n)
return Rn(t)},fromDom:Rn,fromPoint:function(n,e,t){return m.from(n.dom.elementFromPoint(e,t)).map(Rn)}},On=function(n,e){var t=n.dom
if(1!==t.nodeType)return!1
var r=t
if(void 0!==r.matches)return r.matches(e)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e)
throw new Error("Browser lacks native selectors")},An=function(n){return 1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount},Bn=function(n,e){return n.dom===e.dom},En=function(n,e){return Tn().browser.isIE()?function(n,e){return t=n.dom,r=e.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(t.compareDocumentPosition(r)&o)
var t,r,o}(n,e):(t=e,(r=n.dom)!==(o=t.dom)&&r.contains(o))
var t,r,o},Pn=On,Mn=Object.keys,In=Object.hasOwnProperty,kn=function(n,e){for(var t=Mn(n),r=0,o=t.length;r<o;r++){var u=t[r]
e(n[u],u)}},Nn=function(n,e){return _n(n,(function(n,t){return{k:t,v:e(n,t)}}))},_n=function(n,e){var t={}
return kn(n,(function(n,r){var o=e(n,r)
t[o.k]=o.v})),t},Wn=function(n,e){return jn(n,e)?m.from(n[e]):m.none()},jn=function(n,e){return In.call(n,e)},zn=["tfoot","thead","tbody","colgroup"],Fn=function(n,e,t){return{element:n,rowspan:e,colspan:t}},Ln=function(n,e,t){return{element:n,cells:e,section:t}},Hn=function(n,e){return{element:n,isNew:e}},qn=function(n,e){return{cells:n,section:e}},Vn=("undefined"!=typeof window||Function("return this;")(),function(n){return n.dom.nodeName.toLowerCase()}),Un=function(n){return n.dom.nodeType},$n=function(n){return function(e){return Un(e)===n}},Gn=function(n){return 8===Un(n)||"#comment"===Vn(n)},Kn=$n(1),Xn=$n(3),Yn=$n(9),Jn=$n(11),Qn=function(n){return Dn.fromDom(n.dom.ownerDocument)},Zn=function(n){return Yn(n)?n:Qn(n)},ne=function(n){return m.from(n.dom.parentNode).map(Dn.fromDom)},ee=function(n,e){for(var t=x(e)?e:a,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var u=r.parentNode,i=Dn.fromDom(u)
if(o.push(i),!0===t(i))break
r=u}return o},te=function(n){return m.from(n.dom.previousSibling).map(Dn.fromDom)},re=function(n){return m.from(n.dom.nextSibling).map(Dn.fromDom)},oe=function(n){return B(n.dom.childNodes,Dn.fromDom)},ue=function(n,e){var t=n.dom.childNodes
return m.from(t[e]).map(Dn.fromDom)},ie=x(Element.prototype.attachShadow)&&x(Node.prototype.getRootNode),ce=e(ie),ae=ie?function(n){return Dn.fromDom(n.dom.getRootNode())}:Zn,le=function(n){return Dn.fromDom(n.dom.host)},fe=function(n){return y(n.dom.shadowRoot)},se=function(n){var e=Xn(n)?n.dom.parentNode:n.dom
if(null==e||null===e.ownerDocument)return!1
var t,r,o=e.ownerDocument
return function(n){var e=ae(n)
return Jn(e)?m.some(e):m.none()}(Dn.fromDom(e)).fold((function(){return o.body.contains(e)}),(t=se,r=le,function(n){return t(r(n))}))},de=function(n){var e=n.dom.body
if(null==e)throw new Error("Body is not available yet")
return Dn.fromDom(e)},me=function(n,e){var t=[]
return E(oe(n),(function(n){e(n)&&(t=t.concat([n])),t=t.concat(me(n,e))})),t},pe=function(n,e,t){return r=function(n){return On(n,e)},P(ee(n,t),r)
var r},ge=function(n,e){return t=function(n){return On(n,e)},P(oe(n),t)
var t},he=function(n,e){return t=e,o=void 0===(r=n)?document:r.dom,An(o)?[]:B(o.querySelectorAll(t),Dn.fromDom)
var t,r,o}
function ve(n,e,t,r,o){return n(t,r)?m.some(t):x(o)&&o(t)?m.none():e(t,r,o)}var be,we,ye=function(n,e,t){for(var r=n.dom,o=x(t)?t:a;r.parentNode;){r=r.parentNode
var u=Dn.fromDom(r)
if(e(u))return m.some(u)
if(o(u))break}return m.none()},xe=function(n,e,t){return ye(n,(function(n){return On(n,e)}),t)},Ce=function(n,e){return t=function(n){return On(n,e)},k(n.dom.childNodes,(function(n){return t(Dn.fromDom(n))})).map(Dn.fromDom)
var t},Se=function(n,e){return t=e,o=void 0===(r=n)?document:r.dom,An(o)?m.none():m.from(o.querySelector(t)).map(Dn.fromDom)
var t,r,o},Te=function(n,e,t){return ve(On,xe,n,e,t)},Re=function(n,e,t){if(!(h(t)||w(t)||C(t)))throw console.error("Invalid call to Attribute.set. Key ",e,":: Value ",t,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(e,t+"")},De=function(n,e,t){Re(n.dom,e,t)},Oe=function(n,e){var t=n.dom
kn(e,(function(n,e){Re(t,e,n)}))},Ae=function(n,e){var t=n.dom.getAttribute(e)
return null===t?void 0:t},Be=function(n,e){return m.from(Ae(n,e))},Ee=function(n,e){n.dom.removeAttribute(e)},Pe=function(n){return I(n.dom.attributes,(function(n,e){return n[e.name]=e.value,n}),{})},Me=function(n){return void 0!==n.style&&x(n.style.getPropertyValue)},Ie=function(n,e,t){if(!h(t))throw console.error("Invalid call to CSS.set. Property ",e,":: Value ",t,":: Element ",n),new Error("CSS value must be a string: "+t)
Me(n)&&n.style.setProperty(e,t)},ke=function(n,e,t){var r=n.dom
Ie(r,e,t)},Ne=function(n,e){var t=n.dom
kn(e,(function(n,e){Ie(t,e,n)}))},_e=function(n,e){var t=n.dom,r=window.getComputedStyle(t).getPropertyValue(e)
return""!==r||se(n)?r:We(t,e)},We=function(n,e){return Me(n)?n.style.getPropertyValue(e):""},je=function(n,e){var t=n.dom,r=We(t,e)
return m.from(r).filter((function(n){return 0<n.length}))},ze=function(n,e){var t,r,o=n.dom
r=e,Me(t=o)&&t.style.removeProperty(r),Be(n,"style").map(en).is("")&&Ee(n,"style")},Fe=function(n,e,t){return void 0===t&&(t=0),Be(n,e).map((function(n){return parseInt(n,10)})).getOr(t)},Le=function(n,e){return Fe(n,e,1)},He=function(n){return 1<Le(n,"colspan")},qe=function(n){return 1<Le(n,"rowspan")},Ve=function(n,e){return parseInt(_e(n,e),10)},Ue=e(10),$e=e(10),Ge=function(n,e){return Ke(n,e,l)},Ke=function(n,e,t){return W(oe(n),(function(n){return On(n,e)?t(n)?[n]:[]:Ke(n,e,t)}))},Xe=function(n,e){return function(n,e,t){return void 0===t&&(t=a),t(e)?m.none():D(n,Vn(e))?m.some(e):xe(e,n.join(","),(function(n){return On(n,"table")||t(n)}))}(["td","th"],n,e)},Ye=function(n){return Ge(n,"th,td")},Je=function(n){return Ge(n,"col")},Qe=function(n,e){return Te(n,"table",e)},Ze=function(n){return Ge(n,"tr")},nt=function(n,e){return B(n,(function(n){if("colgroup"===Vn(n)){var t=B(Je(n),(function(n){var e=Fe(n,"span",1)
return Fn(n,1,e)}))
return Ln(n,t,"colgroup")}return t=B(Ye(n),(function(n){var e=Fe(n,"rowspan",1),t=Fe(n,"colspan",1)
return Fn(n,e,t)})),Ln(n,t,e(n))}))},et=function(n){return ne(n).map((function(n){var e=Vn(n)
return D(zn,e)?e:"tbody"})).getOr("tbody")},tt=function(n){var e=Ze(n),t=q(Ge(n,"colgroup"),e)
return nt(t,et)},rt=function(n,e){return n+","+e},ot=function(n,e){var t=W(n.all,(function(n){return n.cells}))
return P(t,e)},ut=function(n){var e={},t=[],r={},o=0,u=0,i=0
return E(n,(function(n){var c,a,l
"colgroup"===n.section?(a={},l=0,E(n.cells,(function(n){var e=n.colspan
A(e,(function(t){var r=l+t
a[r]={element:n.element,colspan:e,column:r}})),l+=e})),r=a):(c=[],E(n.cells,(function(n){for(var t=0;void 0!==e[rt(i,t)];)t++
for(var r={element:n.element,rowspan:n.rowspan,colspan:n.colspan,row:i,column:t},o=0;o<n.colspan;o++)for(var a=0;a<n.rowspan;a++){var l=t+o,f=rt(i+a,l)
e[f]=r,u=Math.max(u,l+1)}c.push(r)})),o++,t.push(Ln(n.element,c,n.section)),i++)})),{grid:{rows:o,columns:u},access:e,all:t,columns:r}},it=function(n){var e=tt(n)
return ut(e)},ct=ut,at=function(n,e,t){var r=n.access[rt(e,t)]
return void 0!==r?m.some(r):m.none()},lt=function(n,e,t){var r=ot(n,(function(n){return t(e,n.element)}))
return 0<r.length?m.some(r[0]):m.none()},ft=ot,st=function(n){return W(n.all,(function(n){return n.cells}))},dt=function(n){return function(n){return e=[],kn(n,(function(n,t){e.push(n)})),e
var e}(n.columns)},mt=function(n){return 0<Mn(n.columns).length},pt=function(n,e){return m.from(n.columns[e])},gt=function(n,e){var t=e.column,r=e.column+e.colspan-1,o=e.row,u=e.row+e.rowspan-1
return t<=n.finishCol&&r>=n.startCol&&o<=n.finishRow&&u>=n.startRow},ht=function(n,e){return e.column>=n.startCol&&e.column+e.colspan-1<=n.finishCol&&e.row>=n.startRow&&e.row+e.rowspan-1<=n.finishRow},vt=function(n,e,t){var r=lt(n,e,Bn),o=lt(n,t,Bn)
return r.bind((function(n){return o.map((function(e){return t=n,r=e,{startRow:Math.min(t.row,r.row),startCol:Math.min(t.column,r.column),finishRow:Math.max(t.row+t.rowspan-1,r.row+r.rowspan-1),finishCol:Math.max(t.column+t.colspan-1,r.column+r.colspan-1)}
var t,r}))}))},bt=function(n,e,t){return vt(n,e,t).map((function(e){var t=ft(n,r(gt,e))
return B(t,(function(n){return n.element}))}))},wt=function(n,e){return lt(n,e,(function(n,e){return En(e,n)})).map((function(n){return n.element}))},yt=function(n,e,t,r,o){var u=xt(n),i=Bn(n,t)?m.some(e):wt(u,e),c=Bn(n,o)?m.some(r):wt(u,r)
return i.bind((function(n){return c.bind((function(e){return bt(u,n,e)}))}))},xt=it,Ct=function(n,e){ne(n).each((function(t){t.dom.insertBefore(e.dom,n.dom)}))},St=function(n,e){re(n).fold((function(){ne(n).each((function(n){Rt(n,e)}))}),(function(n){Ct(n,e)}))},Tt=function(n,e){ue(n,0).fold((function(){Rt(n,e)}),(function(t){n.dom.insertBefore(e.dom,t.dom)}))},Rt=function(n,e){n.dom.appendChild(e.dom)},Dt=function(n,e){Ct(n,e),Rt(e,n)},Ot=function(n,e){E(e,(function(t,r){var o=0===r?n:e[r-1]
St(o,t)}))},At=function(n,e){E(e,(function(e){Rt(n,e)}))},Bt=function(n){n.dom.textContent="",E(oe(n),(function(n){Et(n)}))},Et=function(n){var e=n.dom
null!==e.parentNode&&e.parentNode.removeChild(e)},Pt=function(n){var e,t=oe(n)
0<t.length&&(e=n,E(t,(function(n){Ct(e,n)}))),Et(n)},Mt=(be=Xn,"text",{get:function(n){if(!be(n))throw new Error("Can only get text value of a text node")
return we(n).getOr("")},getOption:we=function(n){return be(n)?m.from(n.dom.nodeValue):m.none()},set:function(n,e){if(!be(n))throw new Error("Can only set raw text value of a text node")
n.dom.nodeValue=e}}),It=function(n){return Mt.get(n)},kt=function(n){return Mt.getOption(n)},Nt=function(n,e){return Mt.set(n,e)},_t=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
function Wt(){return{up:e({selector:xe,closest:Te,predicate:ye,all:ee}),down:e({selector:he,predicate:me}),styles:e({get:_e,getRaw:je,set:ke,remove:ze}),attrs:e({get:Ae,set:De,remove:Ee,copyTo:function(n,e){var t=Pe(n)
Oe(e,t)}}),insert:e({before:Ct,after:St,afterAll:Ot,append:Rt,appendAll:At,prepend:Tt,wrap:Dt}),remove:e({unwrap:Pt,remove:Et}),create:e({nu:Dn.fromTag,clone:function(n){return Dn.fromDom(n.dom.cloneNode(!1))},text:Dn.fromText}),query:e({comparePosition:function(n,e){return n.dom.compareDocumentPosition(e.dom)},prevSibling:te,nextSibling:re}),property:e({children:oe,name:Vn,parent:ne,document:function(n){return Zn(n).dom},isText:Xn,isComment:Gn,isElement:Kn,getText:It,setText:Nt,isBoundary:function(n){return!!Kn(n)&&("body"===Vn(n)||D(_t,Vn(n)))},isEmptyTag:function(n){return!!Kn(n)&&D(["br","img","hr","input"],Vn(n))},isNonEditable:function(n){return Kn(n)&&"false"===Ae(n,"contenteditable")}}),eq:Bn,is:Pn}}var jt=function(n,e,t){return e.bind((function(e){return t.filter(r(n.eq,e))}))},zt=function(n,e,t){return 0<t.length?function(n,e,t,r){var o=e(n,t)
return M(r,(function(t,r){var o=e(n,r)
return jt(n,t,o)}),o)}(n,e,(r=t)[0],r.slice(1)):m.none()
var r},Ft=function(n,e,t,o){void 0===o&&(o=a)
var u=[e].concat(n.up().all(e)),i=[t].concat(n.up().all(t)),c=function(n){return N(n,o).fold((function(){return n}),(function(e){return n.slice(0,e+1)}))},l=c(u),f=c(i),s=k(l,(function(e){return O(f,(t=e,r(n.eq,t)))
var t}))
return{firstpath:l,secondpath:f,shared:s}},Lt=Wt(),Ht=function(n,e){return zt(Lt,(function(e,t){return n(t)}),e)},qt=function(n){return xe(n,"table")},Vt=function(n,e,t){var r=function(n){return function(e){return void 0!==t&&t(e)||Bn(e,n)}}
return Bn(n,e)?m.some({boxes:m.some([n]),start:n,finish:e}):qt(n).bind((function(o){return qt(e).bind((function(u){if(Bn(o,u))return m.some({boxes:(l=n,f=e,s=xt(o),bt(s,l,f)),start:n,finish:e})
if(En(o,u)){var i=0<(c=pe(e,"td,th",r(o))).length?c[c.length-1]:e
return m.some({boxes:yt(o,n,o,e,u),start:n,finish:i})}if(En(u,o)){var c,a=0<(c=pe(n,"td,th",r(u))).length?c[c.length-1]:n
return m.some({boxes:yt(u,n,o,e,u),start:n,finish:a})}return Ft(Lt,n,e,undefined).shared.bind((function(i){return Te(i,"table",t).bind((function(t){var i=pe(e,"td,th",r(t)),c=0<i.length?i[i.length-1]:e,a=pe(n,"td,th",r(t)),l=0<a.length?a[a.length-1]:n
return m.some({boxes:yt(t,n,o,e,u),start:l,finish:c})}))}))
var l,f,s}))}))},Ut=function(n,e){var t=he(n,e)
return 0<t.length?m.some(t):m.none()},$t=function(n,e,t){return Se(n,e).bind((function(e){return Se(n,t).bind((function(n){return Ht(qt,[e,n]).map((function(t){return{first:e,last:n,table:t}}))}))}))},Gt=function(n,e,t,r,o){return u=o,k(n,(function(n){return On(n,u)})).bind((function(n){return function(n,e,t){return Qe(n).bind((function(r){var o,u,i,c=xt(r)
return u=e,i=t,lt(o=c,n,Bn).bind((function(n){var e=0<u?n.row+n.rowspan-1:n.row,t=0<i?n.column+n.colspan-1:n.column
return at(o,e+u,t+i).map((function(n){return n.element}))}))}))}(n,e,t).bind((function(n){return t=r,xe(e=n,"table").bind((function(n){return Se(n,t).bind((function(n){return Vt(n,e).bind((function(n){return n.boxes.map((function(e){return{boxes:e,start:n.start,finish:n.finish}}))}))}))}))
var e,t}))}))
var u},Kt=Ut,Xt=function(n,e,t){return $t(n,e,t).bind((function(e){var t=function(e){return Bn(n,e)},o="thead,tfoot,tbody,table",u=xe(e.first,o,t),i=xe(e.last,o,t)
return u.bind((function(n){return i.bind((function(t){return Bn(n,t)?(o=e.table,u=e.first,i=e.last,function(n,e,t){return vt(n,e,t).bind((function(e){return function(n,e){for(var t=!0,o=r(ht,e),u=e.startRow;u<=e.finishRow;u++)for(var i=e.startCol;i<=e.finishCol;i++)t=t&&at(n,u,i).exists(o)
return t?m.some(e):m.none()}(n,e)}))}(xt(o),u,i)):m.none()
var o,u,i}))}))}))},Yt=function(n){if(!b(n))throw new Error("cases must be an array")
if(0===n.length)throw new Error("there must be at least one case")
var e=[],t={}
return E(n,(function(r,o){var u=Mn(r)
if(1!==u.length)throw new Error("one and only one name per case")
var i=u[0],c=r[i]
if(void 0!==t[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!b(c))throw new Error("case arguments must be an array")
e.push(i),t[i]=function(){var t=arguments.length
if(t!==c.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+c.length+" ("+c+"), got "+t)
for(var r=new Array(t),u=0;u<r.length;u++)r[u]=arguments[u]
return{fold:function(){if(arguments.length!==n.length)throw new Error("Wrong number of arguments to fold. Expected "+n.length+", got "+arguments.length)
return arguments[o].apply(null,r)},match:function(n){var t=Mn(n)
if(e.length!==t.length)throw new Error("Wrong number of arguments to match. Expected: "+e.join(",")+"\nActual: "+t.join(","))
if(!j(e,(function(n){return D(t,n)})))throw new Error("Not all branches were specified when using match. Specified: "+t.join(", ")+"\nRequired: "+e.join(", "))
return n[i].apply(null,r)},log:function(n){console.log(n,{constructors:e,constructor:i,params:r})}}}})),t},Jt=Yt([{none:[]},{multiple:["elements"]},{single:["element"]}]),Qt=function(n,e,t,r){return n.fold(e,t,r)},Zt=Jt.none,nr=Jt.multiple,er=Jt.single,tr=tinymce.util.Tools.resolve("tinymce.PluginManager"),rr=function(n,e){var t,r,o,u,i,c,a,l,f,s,d=function(n){return On(n.element,e)},m=tt(n),p=ct(m),g=(r=d,o=(t=p).grid.columns,u=t.grid.rows,i=o,a=c=0,kn(t.access,(function(n){var e,t,o,l
r(n)&&(t=(e=n.row)+n.rowspan-1,l=(o=n.column)+n.colspan-1,e<u?u=e:c<t&&(c=t),o<i?i=o:a<l&&(a=l))})),{minRow:u,minCol:i,maxRow:c,maxCol:a}),h="th:not("+e+"),td:not("+e+")",v=Ke(n,"th,td",(function(n){return On(n,h)}))
return E(v,Et),function(n,e,t,r){for(var o,u,i,c=e.grid.columns,a=e.grid.rows,l=0;l<a;l++)for(var f=!1,s=0;s<c;s++)l<t.minRow||l>t.maxRow||s<t.minCol||s>t.maxCol||(at(e,l,s).filter(r).isNone()?(o=f,u=n[l].element,i=Dn.fromTag("td"),Rt(i,Dn.fromTag("br")),(o?Rt:Tt)(u,i)):f=!0)}(m,p,g,d),f=g,s=P(Ge(l=n,"tr"),(function(n){return 0===n.dom.childElementCount})),E(s,Et),f.minCol!==f.maxCol&&f.minRow!==f.maxRow||E(Ge(l,"th,td"),(function(n){Ee(n,"rowspan"),Ee(n,"colspan")})),Ee(l,"width"),Ee(l,"height"),ze(l,"width"),ze(l,"height"),n},or=function(n){return"img"===Vn(n)?1:kt(n).fold((function(){return oe(n).length}),(function(n){return n.length}))},ur=["img","br"],ir=function(n){return kt(n).filter((function(n){return 0!==n.trim().length||-1<n.indexOf(" ")})).isSome()||D(ur,Vn(n))},cr=function(n){return e=ir,(t=function(n){for(var r=0;r<n.childNodes.length;r++){var o=Dn.fromDom(n.childNodes[r])
if(e(o))return m.some(o)
var u=t(n.childNodes[r])
if(u.isSome())return u}return m.none()})(n.dom)
var e,t},ar=function(n){return lr(n,ir)},lr=function(n,e){var t=function(n){for(var r=oe(n),o=r.length-1;0<=o;o--){var u=r[o]
if(e(u))return m.some(u)
var i=t(u)
if(i.isSome())return i}return m.none()}
return t(n)},fr=function(n,e){return Dn.fromDom(n.dom.cloneNode(e))},sr=function(n){return fr(n,!1)},dr=function(n){return fr(n,!0)},mr=function(){var n=Dn.fromTag("td")
return Rt(n,Dn.fromTag("br")),n},pr=function(){return Dn.fromTag("col")},gr=function(){return Dn.fromTag("colgroup")},hr=function(n,e,t){var r=function(n,e){var t,r,o,u=(t=n,r=Dn.fromTag(e),o=Pe(t),Oe(r,o),r),i=oe(dr(n))
return At(u,i),u}(n,e)
return kn(t,(function(n,e){null===n?Ee(r,e):De(r,e,n)})),r},vr=function(n){return n},br=function(n){return function(){return Dn.fromTag("tr",n.dom)}},wr=function(n,e,t){var r=function(n,e){var t,r,o
t=e,r=n.element.dom,o=t.dom,Me(r)&&Me(o)&&(o.style.cssText=r.style.cssText),ze(e,"height"),1!==n.colspan&&ze(n.element,"width")}
return{col:function(e){var t=Qn(e.element),o=Dn.fromTag(Vn(e.element),t.dom)
return r(e,o),n(e.element,o),o},colgroup:gr,row:br(e),cell:function(e){var o,u,i,c=Qn(e.element),a=Dn.fromTag(Vn(e.element),c.dom),l=t.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"]),f=0<l.length?(o=e.element,u=a,i=l,cr(o).map((function(n){var e=i.join(","),t=pe(n,e,(function(n){return Bn(n,o)}))
return M(t,(function(n,e){var t=sr(e)
return Ee(t,"contenteditable"),Rt(n,t),t}),u)})).getOr(u)):a
return Rt(f,Dn.fromTag("br")),r(e,a),n(e.element,a),a},replace:hr,gap:mr}},yr=function(n){return{col:pr,colgroup:gr,row:br(n),cell:mr,replace:vr,gap:mr}},xr=function(n){return B(n,Dn.fromDom)},Cr=function(n){return Qt(n.get(),e([]),t,z)},Sr={selected:"data-mce-selected",selectedSelector:"td[data-mce-selected],th[data-mce-selected]",firstSelected:"data-mce-first-selected",firstSelectedSelector:"td[data-mce-first-selected],th[data-mce-first-selected]",lastSelected:"data-mce-last-selected",lastSelectedSelector:"td[data-mce-last-selected],th[data-mce-last-selected]"},Tr=function(n){return{element:n,mergable:m.none(),unmergable:m.none(),selection:[n]}},Rr=function(n,e,t){return{element:t,mergable:(u=e,i=Sr,Qt(n.get(),m.none,(function(n){return n.length<=1?m.none():Xt(u,i.firstSelectedSelector,i.lastSelectedSelector).map((function(e){return{bounds:e,cells:n}}))}),m.none)),unmergable:(r=function(n,e){return Be(n,e).exists((function(n){return 1<parseInt(n,10)}))},0<(o=Cr(n)).length&&j(o,(function(n){return r(n,"rowspan")||r(n,"colspan")}))?m.some(o):m.none()),selection:Cr(n)}
var r,o,u,i},Dr=Yt([{none:[]},{only:["index"]},{left:["index","next"]},{middle:["prev","index","next"]},{right:["prev","index"]}]),Or=H({},Dr),Ar=function(n){var e=n.grid,r=A(e.columns,t),o=A(e.rows,t)
return B(r,(function(e){return Br((function(){return W(o,(function(t){return at(n,t,e).filter((function(n){return n.column===e})).toArray()}))}),(function(n){return 1===n.colspan}),(function(){return at(n,0,e)}))}))},Br=function(n,e,t){var r=n()
return k(r,e).orThunk((function(){return m.from(r[0]).orThunk(t)})).map((function(n){return n.element}))},Er=function(n){var r=n.grid,o=A(r.rows,t),u=A(r.columns,t)
return B(o,(function(t){return Br((function(){return W(u,(function(r){return at(n,t,r).filter((function(n){return n.row===t})).fold(e([]),(function(n){return[n]}))}))}),(function(n){return 1===n.rowspan}),(function(){return at(n,t,0)}))}))},Pr=function(n,e){if(e<0||e>=n.length-1)return m.none()
var t=n[e].fold((function(){var t,r,o=(t=n.slice(0,e),(r=S.call(t,0)).reverse(),r)
return L(o,(function(n,e){return n.map((function(n){return{value:n,delta:e+1}}))}))}),(function(n){return m.some({value:n,delta:0})})),r=n[e+1].fold((function(){var t=n.slice(e+1)
return L(t,(function(n,e){return n.map((function(n){return{value:n,delta:e+1}}))}))}),(function(n){return m.some({value:n,delta:1})}))
return t.bind((function(n){return r.map((function(e){var t=e.delta+n.delta
return Math.abs(e.value-n.value)/t}))}))},Mr=function(n,e){return function(t){return"rtl"===Ir(t)?e:n}},Ir=function(n){return"rtl"===_e(n,"direction")?"rtl":"ltr"}
function kr(n,e){var t=function(t){var r=e(t)
if(r<=0||null===r){var o=_e(t,n)
return parseFloat(o)||0}return r},r=function(n,e){return I(e,(function(e,t){var r=_e(n,t),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?e:e+o}),0)}
return{set:function(e,t){if(!C(t)&&!t.match(/^[0-9]+$/))throw new Error(n+".set accepts only positive integer values. Value was "+t)
var r=e.dom
Me(r)&&(r.style[n]=t+"px")},get:t,getOuter:t,aggregate:r,max:function(n,e,t){var o=r(n,t)
return o<e?e-o:0}}}var Nr,_r,Wr,jr,zr=kr("height",(function(n){var e=n.dom
return se(n)?e.getBoundingClientRect().height:e.offsetHeight})),Fr=function(n){return zr.get(n)},Lr=function(n){return zr.getOuter(n)},Hr=function(n,e){return{left:n,top:e,translate:function(t,r){return Hr(n+t,e+r)}}},qr=Hr,Vr=function(n,e){return void 0!==n?n:void 0!==e?e:0},Ur=function(n){var e=n.dom.ownerDocument,t=e.body,r=e.defaultView,o=e.documentElement
if(t===n.dom)return qr(t.offsetLeft,t.offsetTop)
var u=Vr(null==r?void 0:r.pageYOffset,o.scrollTop),i=Vr(null==r?void 0:r.pageXOffset,o.scrollLeft),c=Vr(o.clientTop,t.clientTop),a=Vr(o.clientLeft,t.clientLeft)
return $r(n).translate(i-a,u-c)},$r=function(n){var e,t=n.dom,r=t.ownerDocument.body
return r===t?qr(r.offsetLeft,r.offsetTop):se(n)?(e=t.getBoundingClientRect(),qr(e.left,e.top)):qr(0,0)},Gr=kr("width",(function(n){return n.dom.offsetWidth})),Kr=function(n){return Gr.get(n)},Xr=function(n){return Gr.getOuter(n)},Yr=function(n,e){return{row:n,y:e}},Jr=function(n,e){return{col:n,x:e}},Qr=function(n){return Ur(n).left+Xr(n)},Zr=function(n){return Ur(n).left},no=function(n,e){return Jr(n,Zr(e))},eo=function(n,e){return Jr(n,Qr(e))},to=function(n){return Ur(n).top},ro=function(n,e){return Yr(n,to(e))},oo=function(n,e){return Yr(n,to(e)+Lr(e))},uo=function(n,e,t){if(0===t.length)return[]
var r=B(t.slice(1),(function(e,t){return e.map((function(e){return n(t,e)}))})),o=t[t.length-1].map((function(n){return e(t.length-1,n)}))
return r.concat([o])},io={delta:t,positions:function(n){return uo(ro,oo,n)},edge:to},co=Mr({delta:t,edge:Zr,positions:function(n){return uo(no,eo,n)}},{delta:function(n){return-n},edge:Qr,positions:function(n){return uo(eo,no,n)}}),ao={delta:function(n,e){return co(e).delta(n,e)},positions:function(n,e){return co(e).positions(n,e)},edge:function(n){return co(n).edge(n)}},lo={unsupportedLength:["em","ex","cap","ch","ic","rem","lh","rlh","vw","vh","vi","vb","vmin","vmax","cm","mm","Q","in","pc","pt","px"],fixed:["px","pt"],relative:["%"],empty:[""]},fo=(_r="[eE][+-]?[0-9]+",jr=["Infinity",(Nr="[0-9]+")+"\\."+(Wr=function(n){return"(?:"+n+")?"})(Nr)+Wr(_r),"\\."+Nr+Wr(_r),Nr+Wr(_r)].join("|"),new RegExp("^([+-]?(?:"+jr+"))(.*)$")),so=function(){var n=Tn().browser
return n.isIE()||n.isEdge()},mo=function(n,e,t){return r=_e(n,e),o=t,u=parseFloat(r),isNaN(u)?o:u
var r,o,u},po=function(n){return so()?(t=(e=n).dom.getBoundingClientRect().width,"border-box"===_e(e,"box-sizing")?t:t-mo(e,"padding-left",0)-mo(e,"padding-right",0)-(mo(e,"border-left-width",0)+mo(e,"border-right-width",0))):mo(n,"width",Kr(n))
var e,t},go=/(\d+(\.\d+)?)%/,ho=/(\d+(\.\d+)?)px|em/,vo=function(n,e){ke(n,"width",e+"px")},bo=function(n,e){ke(n,"width",e+"%")},wo=function(n,e){ke(n,"height",e+"px")},yo=function(n){var e,t=je(e=n,"height").getOrThunk((function(){return function(n){return so()?(t=(e=n).dom.getBoundingClientRect().height,"border-box"===_e(e,"box-sizing")?t:t-mo(e,"padding-top",0)-mo(e,"padding-bottom",0)-(mo(e,"border-top-width",0)+mo(e,"border-bottom-width",0))):mo(n,"height",Fr(n))
var e,t}(e)+"px"}))
return t?function(n,e,t,r){var o,u,i,c,a,l=parseInt(n,10)
return nn(n,"%")&&"table"!==Vn(e)?(u=l,i=t,c=r,a=Qe(o=e).map((function(n){var e=i(n)
return Math.floor(u/100*e)})).getOr(u),c(o,a),a):l}(t,n,Fr,wo):Fr(n)},xo=function(n){return je(n,"width").fold((function(){return m.from(Ae(n,"width"))}),(function(n){return m.some(n)}))},Co=function(n,e){return n/e.pixelWidth()*100},So=function(n,e){return xo(n).fold((function(){var t=Kr(n)
return Co(t,e)}),(function(t){return function(n,e,t){var r=go.exec(e)
if(null!==r)return parseFloat(r[1])
var o=po(n)
return Co(o,t)}(n,t,e)}))},To=function(n,e){return xo(n).fold((function(){return po(n)}),(function(t){return function(n,e,t){var r=ho.exec(e)
if(null!==r)return parseInt(r[1],10)
var o=go.exec(e)
return null===o?po(n):parseFloat(o[1])/100*t.pixelWidth()}(n,t,e)}))},Ro=function(n){return"rowspan",yo(e=n)/Le(e,"rowspan")
var e},Do=function(n,e,t){ke(n,"width",e+t)},Oo=function(n){return function(n,e){var t,r=(t=n,m.from(t.dom.offsetParent).map(Dn.fromDom).getOr(de(Qn(n))))
return e(n)/e(r)*100}(n,Kr)+"%"},Ao=e(go),Bo=e(ho),Eo=function(n,e,t){return je(n,e).fold((function(){return t(n)+"px"}),(function(n){return n}))},Po=function(n,e){return Eo(n,"width",(function(n){return To(n,e)}))},Mo=function(n){return Eo(n,"height",Ro)},Io=function(n,e,t,r){var o=mt(n)?B(dt(n),(function(n){return m.from(n.element)})):Ar(n),u=B(o,(function(n){return n.map(ao.edge)}))
return B(o,(function(n,o){return n.filter(c(He)).fold((function(){var n=Pr(u,o)
return t(n)}),(function(n){return e(n,r)}))}))},ko=function(n){return n.map((function(n){return n+"px"})).getOr("")},No=function(n,e){return Io(n,So,(function(n){return n.fold((function(){return e.minCellWidth()}),(function(n){return n/e.pixelWidth()*100}))}),e)},_o=function(n,e){return Io(n,To,(function(n){return n.getOrThunk(e.minCellWidth)}),e)},Wo=function(n,e,t,r){var o=Er(n),u=B(o,(function(n){return n.map(e.edge)}))
return B(o,(function(n,e){return n.filter(c(qe)).fold((function(){var n=Pr(u,e)
return r(n)}),(function(n){return t(n)}))}))},jo=function(n,e,t){for(var r=0,o=n;o<e;o++)r+=void 0!==t[o]?t[o]:0
return r},zo=function(n,e,t){var r=function(n,e){return mt(n)?(o=e,u=dt(n),B(u,(function(n,e){return{element:n.element,width:o[e],colspan:n.colspan}}))):(t=e,r=st(n),B(r,(function(n){var e=jo(n.column,n.column+n.colspan,t)
return{element:n.element,width:e,colspan:n.colspan}})))
var t,r,o,u}(n,e)
E(r,(function(n){t.setElementWidth(n.element,n.width)}))},Fo=function(n,t,r,o,u){var i=it(n),c=u.getCellDelta(t),a=u.getWidths(i,u),l=r===i.grid.columns-1,f=o.clampTableDelta(a,r,c,u.minCellWidth(),l),s=function(n,t,r,o,u){var i,c,a=n.slice(0),l=(c=t,0===(i=n).length?Or.none():1===i.length?Or.only(0):0===c?Or.left(0,1):c===i.length-1?Or.right(c-1,c):0<c&&c<i.length-1?Or.middle(c-1,c,c+1):Or.none()),f=e(B(a,e(0)))
return l.fold(f,(function(n){return o.singleColumnWidth(a[n],r)}),(function(n,e){return u.calcLeftEdgeDeltas(a,n,e,r,o.minCellWidth(),o.isRelative)}),(function(n,e,t){return u.calcMiddleDeltas(a,n,e,t,r,o.minCellWidth(),o.isRelative)}),(function(n,e){return u.calcRightEdgeDeltas(a,n,e,r,o.minCellWidth(),o.isRelative)}))}(a,r,f,u,o),d=B(s,(function(n,e){return n+a[e]}))
zo(i,d,u),o.resizeTable(u.adjustTableWidth,f,l)},Lo=function(n){return B(n,e(0))},Ho=function(n,e,t,r,o){return o(n.slice(0,e)).concat(r).concat(o(n.slice(t)))},qo=function(n){return function(e,t,r,o){if(n(r)){var u=Math.max(o,e[t]-Math.abs(r)),i=Math.abs(u-e[t])
return 0<=r?i:-i}return r}},Vo=qo((function(n){return n<0})),Uo=qo(l),$o=function(n){var t=m.from(n.dom.documentElement).map(Dn.fromDom).getOr(n)
return{parent:e(t),view:e(n),origin:e(qr(0,0))}},Go=Yt([{invalid:["raw"]},{pixels:["value"]},{percent:["value"]}]),Ko=function(n,e,t){var r=t.substring(0,t.length-n.length),o=parseFloat(r)
return r===o.toString()?e(o):Go.invalid(t)},Xo=H(H({},Go),{from:function(n){return nn(n,"%")?Ko("%",Go.percent,n):nn(n,"px")?Ko("px",Go.pixels,n):Go.invalid(n)}}),Yo=function(n,t,r){var o,u,i,c=Xo.from(r),a=j(n,(function(n){return"0px"===n}))?(o=c,u=n.length,i=o.fold((function(){return e("")}),(function(n){return e(n/u+"px")}),(function(){return e(100/u+"%")})),A(u,i)):function(n,e,t){return n.fold((function(){return e}),(function(n){return o=(r=n)/t,B(e,(function(n){return Xo.from(n).fold((function(){return n}),(function(n){return n*o+"px"}),(function(n){return n/100*r+"px"}))}))
var r,o}),(function(n){return r=t,B(e,(function(n){return Xo.from(n).fold((function(){return n}),(function(n){return n/r*100+"%"}),(function(n){return n+"%"}))}))
var r}))}(c,n,t)
return Qo(a)},Jo=function(n,r){return 0===n.length?r:M(n,(function(n,r){return Xo.from(r).fold(e(0),t,t)+n}),0)},Qo=function(n){if(0===n.length)return n
var t,r,o=M(n,(function(n,e){var t=Xo.from(e).fold((function(){return{value:e,remainder:0}}),(function(n){return e=n,"px",{value:(t=Math.floor(e))+"px",remainder:e-t}
var e,t}),(function(n){return{value:n+"%",remainder:0}}))
return{output:[t.value].concat(n.output),remainder:n.remainder+t.remainder}}),{output:[],remainder:0}),u=o.output
return u.slice(0,u.length-1).concat([(t=u[u.length-1],r=Math.round(o.remainder),Xo.from(t).fold(e(t),(function(n){return n+r+"px"}),(function(n){return n+r+"%"})))])},Zo=Xo.from,nu=function(n){return Zo(n).fold(e("px"),e("px"),e("%"))},eu=function(n,e,t,r){var o=it(n),u=o.all,i=st(o),c=dt(o)
e.each((function(e){var t,u,a,l,f=nu(e),s=Kr(n),d=Io(o,Po,ko,r),m=Yo(d,s,e)
mt(o)?(a=m,l=f,E(c,(function(n,e){var t=Jo([a[e]],Ue())
ke(n.element,"width",t+l)}))):(t=m,u=f,E(i,(function(n){var e=t.slice(n.column,n.colspan+n.column),r=Jo(e,Ue())
ke(n.element,"width",r+u)}))),ke(n,"width",e)})),t.each((function(e){var t,r,c,a=nu(e),l=Fr(n),f=Wo(o,io,Mo,ko),s=Yo(f,l,e)
t=s,r=u,c=a,E(i,(function(n){var e=t.slice(n.row,n.rowspan+n.row),r=Jo(e,$e())
ke(n.element,"height",r+c)})),E(r,(function(n,e){ke(n.element,"height",t[e])})),ke(n,"height",e)}))},tu=function(n){return xo(n).exists((function(n){return go.test(n)}))},ru=function(n){return xo(n).exists((function(n){return ho.test(n)}))},ou=Oo,uu=function(n){return it(n).grid},iu=function(n){var e=[]
return{bind:function(n){if(void 0===n)throw new Error("Event bind error: undefined handler")
e.push(n)},unbind:function(n){e=P(e,(function(e){return e!==n}))},trigger:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
var o={}
E(n,(function(n,e){o[n]=t[e]})),E(e,(function(n){n(o)}))}}},cu=function(n){return{registry:Nn(n,(function(n){return{bind:n.bind,unbind:n.unbind}})),trigger:Nn(n,(function(n){return n.trigger}))}},au=function(n){return n.slice(0).sort()},lu=function(n,e){var t=P(e,(function(e){return!D(n,e)}))
0<t.length&&function(n){throw new Error("Unsupported keys for object: "+au(n).join(", "))}(t)},fu=function(n){return function(n,e,t){if(0===e.length)throw new Error("You must specify at least one required field.")
var r
return function(n,e){if(!b(e))throw new Error("The "+n+" fields must be an array. Was: "+e+".")
E(e,(function(e){if(!h(e))throw new Error("The value "+e+" in the "+n+" fields was not a string.")}))}("required",e),r=au(e),k(r,(function(n,e){return e<r.length-1&&n===r[e+1]})).each((function(n){throw new Error("The field: "+n+" occurs more than once in the combined fields: ["+r.join(", ")+"].")})),function(r){var o=Mn(r)
j(e,(function(n){return D(o,n)}))||function(n,e){throw new Error("All required keys ("+au(n).join(", ")+") were not specified. Specified keys were: "+au(e).join(", ")+".")}(e,o),n(e,o)
var u=P(e,(function(n){return!t.validate(r[n],n)}))
return 0<u.length&&function(n,e){throw new Error("All values need to be of type: "+e+". Keys ("+au(n).join(", ")+") were not.")}(u,t.label),r}}(lu,n,{validate:x,label:"function"})},su=fu(["compare","extract","mutate","sink"]),du=fu(["element","start","stop","destroy"]),mu=fu(["forceDrop","drop","move","delayDrop"])
function pu(){var e={onEvent:n,reset:n},t=function(){var n=m.none(),e=cu({move:iu(["info"])})
return{onEvent:function(t,r){r.extract(t).each((function(t){var o,u,i;(o=r,u=t,i=n.map((function(n){return o.compare(n,u)})),n=m.some(u),i).each((function(n){e.trigger.move(n)}))}))},reset:function(){n=m.none()},events:e.registry}}(),r=e
return{on:function(){r.reset(),r=t},off:function(){r.reset(),r=e},isOn:function(){return r===t},onEvent:function(n,e){r.onEvent(n,e)},events:t.events}}var gu=function(n){var e,t,r=Dn.fromDom(function(n){if(ce()&&y(n.target)){var e=Dn.fromDom(n.target)
if(Kn(e)&&fe(e)&&n.composed&&n.composedPath){var t=n.composedPath()
if(t)return 0===(r=t).length?m.none():m.some(r[0])}}var r
return m.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(e=u,t=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return e(t.apply(null,n))})
return{target:r,x:n.clientX,y:n.clientY,stop:o,prevent:u,kill:i,raw:n}},hu=function(n,e,t,r){n.dom.removeEventListener(e,t,r)},vu=l,bu=function(n,e,t){return function(n,e,t,o,u){var i,c,a=(i=t,c=o,function(n){i(n)&&c(gu(n))})
return n.dom.addEventListener(e,a,u),{unbind:r(hu,n,e,a,u)}}(n,e,vu,t,!1)},wu=gu,yu=function(n,e){var t=Ae(n,e)
return void 0===t||""===t?[]:t.split(" ")},xu=function(n){return void 0!==n.dom.classList},Cu=function(n,e){xu(n)?n.dom.classList.add(e):function(n,e){return r=e,o=yu(t=n,"class").concat([r]),De(t,"class",o.join(" ")),!0
var t,r,o}(n,e)},Su=function(n,e){return xu(n)&&n.dom.classList.contains(e)},Tu=function(n){var e=n.replace(/\./g,"-")
return{resolve:function(n){return e+"-"+n}}},Ru=Tu("ephox-dragster").resolve,Du=su({compare:function(n,e){return qr(e.left-n.left,e.top-n.top)},extract:function(n){return m.some(qr(n.x,n.y))},sink:function(n,e){var t=function(n){var e=H({layerClass:Ru("blocker")},n),t=Dn.fromTag("div")
return De(t,"role","presentation"),Ne(t,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),Cu(t,Ru("blocker")),Cu(t,e.layerClass),{element:function(){return t},destroy:function(){Et(t)}}}(e),r=bu(t.element(),"mousedown",n.forceDrop),o=bu(t.element(),"mouseup",n.drop),u=bu(t.element(),"mousemove",n.move),i=bu(t.element(),"mouseout",n.delayDrop)
return du({element:t.element,start:function(n){Rt(n,t.element())},stop:function(){Et(t.element())},destroy:function(){t.destroy(),o.unbind(),u.unbind(),i.unbind(),r.unbind()}})},mutate:function(n,e){n.mutate(e.left,e.top)}}),Ou=function(n){return"true"===Ae(n,"contenteditable")},Au=Tu("ephox-snooker").resolve,Bu=Au("resizer-bar"),Eu=Au("resizer-rows"),Pu=Au("resizer-cols"),Mu=function(n){var e=he(n.parent(),"."+Bu)
E(e,Et)},Iu=function(n,e,t){var r=n.origin()
E(e,(function(e){e.each((function(e){var o=t(r,e)
Cu(o,Bu),Rt(n.parent(),o)}))}))},ku=function(n,e){Mu(n)
var t=it(e)
!function(n,e,t,r){var o=Ur(e);(function(n,e,t,r){Iu(n,e,(function(n,e){var o,u,i,c,a,l=(o=e.row,u=t.left-n.left,i=e.y-n.top,c=r,a=Dn.fromTag("div"),Ne(a,{position:"absolute",left:u+"px",top:i-3.5+"px",height:"7px",width:c+"px"}),Oe(a,{"data-row":o,role:"presentation"}),a)
return Cu(l,Eu),l}))})(n,0<t.length?io.positions(t,e):[],o,Xr(e)),function(n,e,t,r){Iu(n,e,(function(n,e){var o,u,i,c,a,l=(o=e.col,u=e.x-n.left,i=t.top-n.top,c=r,a=Dn.fromTag("div"),Ne(a,{position:"absolute",left:u-3.5+"px",top:i+"px",height:c+"px",width:"7px"}),Oe(a,{"data-column":o,role:"presentation"}),a)
return Cu(l,Pu),l}))}(n,0<r.length?ao.positions(r,e):[],o,Lr(e))}(n,e,Er(t),Ar(t))},Nu=function(n,e){var t=he(n.parent(),"."+Bu)
E(t,e)},_u=function(n){Nu(n,(function(n){ke(n,"display","none")}))},Wu=function(n){Nu(n,(function(n){ke(n,"display","block")}))},ju=Au("resizer-bar-dragging"),zu=function(n){var e=function(){var n,e=cu({drag:iu(["xDelta","yDelta","target"])}),t=m.none(),r={mutate:function(e,t){n.trigger.drag(e,t)},events:(n=cu({drag:iu(["xDelta","yDelta"])})).registry}
return r.events.drag.bind((function(n){t.each((function(t){e.trigger.drag(n.xDelta,n.yDelta,t)}))})),{assign:function(n){t=m.some(n)},get:function(){return t},mutate:r.mutate,events:e.registry}}(),t=function(n,e){return void 0===e&&(e={}),function(n,e,t){var r,o,u=!1,i=cu({start:iu([]),stop:iu([])}),c=pu(),a=function(){s.stop(),c.isOn()&&(c.off(),i.trigger.stop())},l=(r=a,o=null,{cancel:function(){null!==o&&(clearTimeout(o),o=null)},throttle:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e]
null!==o&&clearTimeout(o),o=setTimeout((function(){r.apply(null,n),o=null}),200)}})
c.events.move.bind((function(t){e.mutate(n,t.info)}))
var f=function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
u&&n.apply(null,e)}},s=e.sink(mu({forceDrop:a,drop:f(a),move:f((function(n){l.cancel(),c.onEvent(n,e)})),delayDrop:f(l.throttle)}),t)
return{element:s.element,go:function(n){s.start(n),c.on(),i.trigger.start()},on:function(){u=!0},off:function(){u=!1},destroy:function(){s.destroy()},events:i.registry}}(n,void 0!==e.mode?e.mode:Du,e)}(e,{}),o=m.none(),u=function(n,e){return m.from(Ae(n,e))}
e.events.drag.bind((function(n){u(n.target,"data-row").each((function(e){var t=Ve(n.target,"top")
ke(n.target,"top",t+n.yDelta+"px")})),u(n.target,"data-column").each((function(e){var t=Ve(n.target,"left")
ke(n.target,"left",t+n.xDelta+"px")}))}))
var i=function(n,e){return Ve(n,e)-Fe(n,"data-initial-"+e,0)}
t.events.stop.bind((function(){e.get().each((function(e){o.each((function(t){u(e,"data-row").each((function(n){var r=i(e,"top")
Ee(e,"data-initial-top"),s.trigger.adjustHeight(t,r,parseInt(n,10))})),u(e,"data-column").each((function(n){var r=i(e,"left")
Ee(e,"data-initial-left"),s.trigger.adjustWidth(t,r,parseInt(n,10))})),ku(n,t)}))}))}))
var c=function(r,o){s.trigger.startAdjust(),e.assign(r),De(r,"data-initial-"+o,Ve(r,o)),Cu(r,ju),ke(r,"opacity","0.2"),t.go(n.parent())},a=bu(n.parent(),"mousedown",(function(n){var e,t
e=n.target,Su(e,Eu)&&c(n.target,"top"),t=n.target,Su(t,Pu)&&c(n.target,"left")})),l=function(e){return Bn(e,n.view())},f=bu(n.view(),"mouseover",(function(e){(function(n){return Te(n,"table",l).filter((function(n){return Te(n,"[contenteditable]",l).exists(Ou)}))})(e.target).fold((function(){se(e.target)&&Mu(n)}),(function(e){o=m.some(e),ku(n,e)}))})),s=cu({adjustHeight:iu(["table","delta","row"]),adjustWidth:iu(["table","delta","column"]),startAdjust:iu([])})
return{destroy:function(){a.unbind(),f.unbind(),t.destroy(),Mu(n)},refresh:function(e){ku(n,e)},on:t.on,off:t.off,hideBars:r(_u,n),showBars:r(Wu,n),events:s.registry}},Fu=function(n,e,t){var r=io,o=ao,u=zu(n),i=cu({beforeResize:iu(["table","type"]),afterResize:iu(["table","type"]),startDrag:iu([])})
return u.events.adjustHeight.bind((function(n){var e=n.table
i.trigger.beforeResize(e,"row"),function(n,e,t,r){var o,u,i,c=it(n),a=Wo(c,r,Ro,(function(n){return n.getOrThunk($e)})),l=B(a,(function(n,r){return t===r?Math.max(e+n,$e()):n})),f=(o=l,u=st(c),B(u,(function(n){var e=jo(n.row,n.row+n.rowspan,o)
return{element:n.element,height:e,rowspan:n.rowspan}}))),s=(i=l,B(c.all,(function(n,e){return{element:n.element,height:i[e]}})))
E(s,(function(n){wo(n.element,n.height)})),E(f,(function(n){wo(n.element,n.height)}))
var d=M(l,(function(n,e){return n+e}),0)
wo(n,d)}(e,r.delta(n.delta,e),n.row,r),i.trigger.afterResize(e,"row")})),u.events.startAdjust.bind((function(n){i.trigger.startDrag()})),u.events.adjustWidth.bind((function(n){var r=n.table
i.trigger.beforeResize(r,"col")
var u=o.delta(n.delta,r),c=t(r)
Fo(r,u,n.column,e,c),i.trigger.afterResize(r,"col")})),{on:u.on,off:u.off,hideBars:u.hideBars,showBars:u.showBars,destroy:u.destroy,events:i.registry}},Lu=function(n,e){return n.fire("newrow",{node:e})},Hu=function(n,e){return n.fire("newcell",{node:e})},qu={"border-collapse":"collapse",width:"100%"},Vu={border:"1"},Uu="preservetable",$u=function(n){return n.getParam("table_sizing_mode","auto")},Gu=function(n){return n.getParam("table_responsive_width")},Ku=function(n){return n.getParam("table_default_attributes",Vu,"object")},Xu=function(e){return e.getParam("table_default_styles",function(e){if(ei(e)){var t=e.getBody().offsetWidth
return H(H({},qu),{width:t+"px"})}return ti(e)?function(e,t){var r,o,u,i,c={}
return r=t,i=c,o=function(n,e){i[e]=n},u=n,kn(e,(function(n,e){(r(n,e)?o:u)(n,e)})),c}(qu,(function(n,e){return"width"!==e})):qu}(e),"object")},Yu=function(n){return n.getParam("table_cell_advtab",!0,"boolean")},Ju=function(n){return n.getParam("table_row_advtab",!0,"boolean")},Qu=function(n){return n.getParam("table_advtab",!0,"boolean")},Zu=function(n){return n.getParam("table_style_by_css",!1,"boolean")},ni=function(n){return"relative"===$u(n)||!0===Gu(n)},ei=function(n){return"fixed"===$u(n)||!1===Gu(n)},ti=function(n){return"responsive"===$u(n)},ri=function(n){var e="section",t=n.getParam("table_header_type",e,"string")
return D(["section","cells","sectionCells","auto"],t)?t:e},oi=function(n){var e=n.getParam("table_column_resizing",Uu,"string")
return k(["preservetable","resizetable"],(function(n){return n===e})).getOr(Uu)},ui=function(n){return"preservetable"===oi(n)},ii=function(n){var e=n.getParam("table_clone_elements")
return h(e)?m.some(e.split(/[ ,]/)):Array.isArray(e)?m.some(e):m.none()},ci=function(n){return n.nodeName.toLowerCase()},ai=function(n){return Dn.fromDom(n.getBody())},li=function(n){return n.getBoundingClientRect().width},fi=function(n){return n.getBoundingClientRect().height},si=function(n){return function(e){return Bn(e,ai(n))}},di=function(n){return/^\d+(\.\d+)?$/.test(n)?n+"px":n},mi=function(n){Ee(n,"data-mce-style")
var e=function(n){return Ee(n,"data-mce-style")}
E(Ye(n),e),E(Je(n),e)},pi=function(n,e){var t=n.dom.getStyle(e,"width")||n.dom.getAttrib(e,"width")
return m.from(t).filter(tn)},gi=function(n){return/^(\d+(\.\d+)?)%$/.test(n)},hi=function(n){return Dn.fromDom(n.selection.getStart())},vi=function(n){var e=n
return{get:function(){return e},set:function(n){e=n}}},bi=function(n,e){var t=vi(parseFloat(n)),r=vi(Kr(e))
return{width:t.get,pixelWidth:r.get,getWidths:No,getCellDelta:function(n){return n/r.get()*100},singleColumnWidth:function(n,e){return[100-n]},minCellWidth:function(){return Ue()/r.get()*100},setElementWidth:bo,adjustTableWidth:function(n){var o=t.get(),u=o+n/100*o
bo(e,u),t.set(u),r.set(Kr(e))},isRelative:!0,label:"percent"}},wi=function(n,e){var r=vi(n),o=r.get
return{width:o,pixelWidth:o,getWidths:_o,getCellDelta:t,singleColumnWidth:function(n,e){return[Math.max(Ue(),n+e)-n]},minCellWidth:Ue,setElementWidth:vo,adjustTableWidth:function(n){var t=o()+n
vo(e,t),r.set(t)},isRelative:!1,label:"pixel"}},yi=function(t){return xo(t).fold((function(){return function(t){var r=function(){return Kr(t)},o=e(0)
return{width:r,pixelWidth:r,getWidths:_o,getCellDelta:o,singleColumnWidth:e([0]),minCellWidth:o,setElementWidth:n,adjustTableWidth:n,isRelative:!0,label:"none"}}(t)}),(function(n){return function(n,e){var t=Ao().exec(e)
if(null!==t)return bi(t[1],n)
var r=Bo().exec(e)
if(null!==r){var o=parseInt(r[1],10)
return wi(o,n)}var u=Kr(n)
return wi(u,n)}(t,n)}))},xi=wi,Ci=bi,Si=function(n,e){if(ni(n)){var t=pi(n,e.dom).filter(gi).getOrThunk((function(){return ou(e)}))
return Ci(t,e)}return ei(n)?xi(Kr(e),e):yi(e)},Ti=function(n){Ee(n,"width")},Ri=function(n,e){var t,r,o
r=Si(n,e),o=Oo(t=e),eu(t,m.some(o),m.none(),r),Ti(t)},Di=function(n,e){(function(n,e){var t=Kr(n)+"px"
eu(n,m.some(t),m.none(),e),Ti(n)})(e,Si(n,e))},Oi=function(n){ze(n,"width")
var e=Je(n),t=0<e.length?e:Ye(n)
E(t,(function(n){ze(n,"width"),Ti(n)})),Ti(n)},Ai=function(n){var t,r,o=m.none(),u=m.none(),i=m.none(),c=function(n){return"TABLE"===n.nodeName},a=function(e){return Si(n,e)},l=function(){return ui(n)?{resizeTable:function(n,e,t){t&&n(e)},clampTableDelta:function(n,e,t,r,o){if(o){if(0<=t)return t
var u=I(n,(function(n,e){return n+e-r}),0)
return Math.max(-u,t)}return Vo(n,e,t,r)},calcLeftEdgeDeltas:t=function(n,e,t,r,o){var u=Uo(n,0<=r?t:e,r,o)
return Ho(n,e,t+1,[u,-u],Lo)},calcMiddleDeltas:function(n,e,r,o,u,i){return t(n,r,o,u,i)},calcRightEdgeDeltas:function(n,t,r,o,u,i){if(i)return Lo(n)
var c=o/n.length
return B(n,e(c))}}:function(){var n=function(n,e,t,r){var o=(100+t)/100,u=Math.max(r,(n[e]+t)/o)
return B(n,(function(n,t){return(t===e?u:n/o)-n}))},e=function(e,t,r,o,u,i){return i?n(e,t,o,u):(l=r,f=Vo(c=e,a=t,o,u),Ho(c,a,l+1,[f,0],Lo))
var c,a,l,f}
return{resizeTable:function(n,e){return n(e)},clampTableDelta:Vo,calcLeftEdgeDeltas:e,calcMiddleDeltas:function(n,t,r,o,u,i,c){return e(n,r,o,u,i,c)},calcRightEdgeDeltas:function(e,t,r,o,u,i){if(i)return n(e,r,o,u)
var c=Vo(e,r,o,u)
return Lo(e.slice(0,r)).concat([c])}}}()
var t}
return n.on("init",(function(){var t,r,c,f,s=(t=n).inline?function(n,t){return{parent:e(t),view:e(n),origin:e(qr(0,0))}}(ai(t),function(){var n=Dn.fromTag("div")
return Ne(n,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"}),Rt(de(Dn.fromDom(document)),n),n}()):$o(Dn.fromDom(t.getDoc()))
i=m.some(s),f=n.getParam("object_resizing",!0),(h(f)?"table"===f:f)&&n.getParam("table_resize_bars",!0,"boolean")&&(r=l(),(c=Fu(s,r,a)).on(),c.events.startDrag.bind((function(e){o=m.some(n.selection.getRng())})),c.events.beforeResize.bind((function(e){var t,r,o,u,i,c=e.table.dom
t=n,o=li(r=c),u=fi(c),i="bar-"+e.type,t.fire("ObjectResizeStart",{target:r,width:o,height:u,origin:i})})),c.events.afterResize.bind((function(e){var t,r,u,i,c,a=e.table,l=a.dom
mi(a),o.each((function(e){n.selection.setRng(e),n.focus()})),t=n,u=li(r=l),i=fi(l),c="bar-"+e.type,t.fire("ObjectResized",{target:r,width:u,height:i,origin:c}),n.undoManager.add()})),u=m.some(c))})),n.on("ObjectResizeStart",(function(e){var o,u=e.target
c(u)&&(o=Dn.fromDom(u),E(n.dom.select(".mce-clonedresizable"),(function(e){n.dom.addClass(e,"mce-"+oi(n)+"-columns")})),!ru(o)&&ei(n)?Di(n,o):!tu(o)&&ni(n)&&Ri(n,o),t=e.width,r=ti(n)?"":pi(n,u).getOr(""))})),n.on("ObjectResized",(function(e){var o,u,i=e.target
c(i)&&(o=Dn.fromDom(i),""===r&&Ri(n,o),u=e.origin,Z(u,"corner-")&&function(e,o,u){var i,c,f,s,d,m,p=nn(o,"e")
u!==t&&""!==r?(ke(e,"width",r),i=l(),c=a(e),f=ui(n)||p?uu(e).columns-1:0,Fo(e,u-t,f,i,c)):gi(r)&&(s=parseFloat(r.replace("%","")),ke(e,"width",u*s/t+"%")),/^(\d+(\.\d+)?)px$/.test(r)&&(m=it(d=e),mt(m)||E(Ye(d),(function(n){var e=_e(n,"width")
ke(n,"width",e),Ee(n,"width")})))}(o,u,e.width),mi(o))})),n.on("SwitchMode",(function(){u.each((function(e){n.mode.isReadOnly()?e.hideBars():e.showBars()}))})),{lazyResize:function(){return u},lazyWire:function(){return i.getOr($o(Dn.fromDom(n.getBody())))},destroy:function(){u.each((function(n){n.destroy()})),i.each((function(e){var t
t=e,n.inline&&Et(t.parent())}))}}},Bi=function(n,e){return{element:n,offset:e}},Ei=function(n,e,t){return n.property().isText(e)&&0===n.property().getText(e).trim().length||n.property().isComment(e)?t(e).bind((function(e){return Ei(n,e,t).orThunk((function(){return m.some(e)}))})):m.none()},Pi=function(n,e){return n.property().isText(e)?n.property().getText(e).length:n.property().children(e).length},Mi=function(n,e){var t=Ei(n,e,n.query().prevSibling).getOr(e)
if(n.property().isText(t))return Bi(t,Pi(n,t))
var r=n.property().children(t)
return 0<r.length?Mi(n,r[r.length-1]):Bi(t,Pi(n,t))},Ii=Mi,ki=Wt(),Ni=function(n,e){xo(n).bind((function(n){return function(n,e){return m.from(fo.exec(n)).bind((function(n){var t,r=Number(n[1]),o=n[2]
return t=o,O(e,(function(n){return O(lo[n],(function(n){return t===n}))}))?m.some({value:r,unit:o}):m.none()}))}(n,["fixed","relative","empty"])})).each((function(t){var r=t.value/2
Do(n,r,t.unit),Do(e,r,t.unit)}))},_i=function(n,e,t){n.cells[e]=t},Wi=function(n,e){return qn(e,n.section)},ji=function(n,e){var t=n.cells,r=B(t,e)
return qn(r,n.section)},zi=function(n,e){return n.cells[e]},Fi=function(n,e){return zi(n,e).element},Li=function(n){return n.cells.length},Hi=function(n){var e=function(n,e){for(var t=[],r=[],o=0,u=n.length;o<u;o++){var i=n[o];(e(i)?t:r).push(i)}return{pass:t,fail:r}}(n,(function(n){return"colgroup"===n.section}))
return{rows:e.fail,cols:e.pass}},qi=function(n){for(var e=[],t=function(n){e.push(n)},r=0;r<n.length;r++)n[r].each(t)
return e},Vi=function(n,e,t,r){t===r?Ee(n,e):De(n,e,t)},Ui=function(n,e,t){F(ge(n,e)).fold((function(){return Tt(n,t)}),(function(n){return St(n,t)}))},$i=function(n,e){var t=[],r=[],o=function(n){return B(n,(function(n){n.isNew&&t.push(n.element)
var e=n.element
return Bt(e),E(n.cells,(function(n){n.isNew&&r.push(n.element),Vi(n.element,"colspan",n.colspan,1),Vi(n.element,"rowspan",n.rowspan,1),Rt(e,n.element)})),e}))},u=function(n){return W(n,(function(n){return B(n.cells,(function(n){return Vi(n.element,"span",n.colspan,1),n.element}))}))},i=function(e,t){var r,i,c,a=(c=Ce(r=n,i=t).getOrThunk((function(){var n=Dn.fromTag(i,Qn(r).dom)
return"thead"===i?Ui(r,"caption,colgroup",n):"colgroup"===i?Ui(r,"caption",n):Rt(r,n),n})),Bt(c),c),l=("colgroup"===t?u:o)(e)
At(a,l)},c=function(e,t){0<e.length?i(e,t):Ce(n,t).each(Et)},a=[],l=[],f=[],s=[]
return E(e,(function(n){switch(n.section){case"thead":a.push(n)
break
case"tbody":l.push(n)
break
case"tfoot":f.push(n)
break
case"colgroup":s.push(n)}})),c(s,"colgroup"),c(a,"thead"),c(l,"tbody"),c(f,"tfoot"),{newRows:t,newCells:r}},Gi=function(n,e){if(0===n.length)return 0
var t=n[0]
return N(n,(function(n){return!e(t.element,n.element)})).fold((function(){return n.length}),(function(n){return n}))},Ki=function(n,e){var t=B(n,(function(n){return B(n.cells,a)}))
return B(n,(function(r,o){return{details:W(r.cells,(function(r,u){if(!1!==t[o][u])return[]
var i=function(n,e,t,r){var o,u=n[e].cells.slice(t),i=Gi(u,r),c=(o=t,B(n,(function(n){return zi(n,o)})).slice(e))
return{colspan:i,rowspan:Gi(c,r)}}(n,o,u,e)
return function(n,e,r,o){for(var u=n;u<n+r;u++)for(var i=e;i<e+o;i++)t[u][i]=!0}(o,u,i.rowspan,i.colspan),[{element:r.element,rowspan:i.rowspan,colspan:i.colspan,isNew:r.isNew}]})),section:r.section}}))},Xi=function(n,e,t){var r,o=[]
mt(n)&&(r=B(dt(n),(function(n){return Hn(n.element,t)})),o.push(qn(r,"colgroup")))
for(var u=0;u<n.grid.rows;u++){for(var i=[],c=0;c<n.grid.columns;c++){var a=at(n,u,c).map((function(n){return Hn(n.element,t)})).getOrThunk((function(){return Hn(e.gap(),!0)}))
i.push(a)}var l=qn(i,n.all[u].section)
o.push(l)}return o},Yi=function(n,e){return function(n,e){return B(n,(function(n){var t,r=(t=n.details,L(t,(function(n){return ne(n.element).map((function(n){var e=ne(n).isNone()
return Hn(n,e)}))})).getOrThunk((function(){return Hn(e.row(),!0)})))
return{element:r.element,cells:n.details,section:n.section,isNew:r.isNew}}))}(Ki(n,Bn),e)},Ji=function(n,e){return L(n.all,(function(n){return k(n.cells,(function(n){return Bn(e,n.element)}))}))},Qi=function(n,e,t,r,o){return function(u,i,c,a,l){var f=it(i)
return e(f,c).map((function(e){var t=Xi(f,a,!1),r=n(t,e,Bn,o(a))
return{grid:Yi(r.grid,a),cursor:r.cursor}})).fold((function(){return m.none()}),(function(n){var e=$i(i,n.grid),o=m.from(l).getOrThunk((function(){return yi(i)}))
return t(i,n.grid,o),r(i),ku(u,i),m.some({cursor:n.cursor,newRows:e.newRows,newCells:e.newCells})}))}},Zi=function(n,e){return Xe(e.element).bind((function(e){return Ji(n,e)}))},nc=function(n,e){var t=B(e.selection,(function(e){return Xe(e).bind((function(e){return Ji(n,e)}))})),r=qi(t)
return 0<r.length?m.some({cells:r,generators:e.generators,clipboard:e.clipboard}):m.none()},ec=function(n,e){var t=B(e.selection,(function(e){return Xe(e).bind((function(e){return Ji(n,e)}))})),r=qi(t)
return 0<r.length?m.some(r):m.none()},tc=function(n,e,t,r){for(var o=Hi(n).rows,u=!0,i=0;i<o.length;i++)for(var c=0;c<Li(o[0]);c++){var a=t(Fi(o[i],c),e)
!0===a&&!1===u?_i(o[i],c,Hn(r(),!0)):!0===a&&(u=!1)}return n},rc=function(n){return{is:function(e){return n===e},isValue:l,isError:a,getOr:e(n),getOrThunk:e(n),getOrDie:e(n),or:function(e){return rc(n)},orThunk:function(e){return rc(n)},fold:function(e,t){return t(n)},map:function(e){return rc(e(n))},mapError:function(e){return rc(n)},each:function(e){e(n)},bind:function(e){return e(n)},exists:function(e){return e(n)},forall:function(e){return e(n)},toOptional:function(){return m.some(n)}}},oc=function(e){return{is:a,isValue:a,isError:l,getOr:t,getOrThunk:function(n){return n()},getOrDie:function(){return n=String(e),function(){throw new Error(n)}()
var n},or:function(n){return n},orThunk:function(n){return n()},fold:function(n,t){return n(e)},map:function(n){return oc(e)},mapError:function(n){return oc(n(e))},each:n,bind:function(n){return oc(e)},exists:a,forall:l,toOptional:m.none}},uc={value:rc,error:oc,fromOption:function(n,e){return n.fold((function(){return oc(e)}),rc)}},ic=function(n,e){return{rowDelta:0,colDelta:Li(n[0])-Li(e[0])}},cc=function(n,e){return{rowDelta:n.length-e.length,colDelta:0}},ac=function(n,e,t){var r="colgroup"===e.section?t.col:t.cell
return B(n,(function(){return Hn(r(),!0)}))},lc=function(n,e,t){return n.concat(A(e,(function(){var e=n[n.length-1]
return Wi(e,ac(e.cells,e,t))})))},fc=function(n,e,r){return B(n,(function(n){var o=ac(A(e,t),n,r)
return Wi(n,n.cells.concat(o))}))},sc=function(n,e,r){var o=e.colDelta<0?fc:t
return(e.rowDelta<0?lc:t)(o(n,Math.abs(e.colDelta),r),Math.abs(e.rowDelta),r)},dc=function(n,e,t,o,u){return function(n,e,t){if(n.row>=e.length||n.column>Li(e[0]))return uc.error("invalid start address out of table bounds, row: "+n.row+", column: "+n.column)
var r=e.slice(n.row),o=r[0].cells.slice(n.column),u=Li(t[0]),i=t.length
return uc.value({rowDelta:r.length-i,colDelta:o.length-u})}(n,e,t).map((function(i){var c=sc(e,i,o)
return function(n,e,t,o,u){for(var i,c,a,l,f,s=n.row,d=n.column,m=s+t.length,p=d+Li(t[0]),g=s;g<m;g++)for(var h=d;h<p;h++){a=h,l=void 0,l=r(u,zi((i=e)[c=g],a).element),f=i[c],1<i.length&&1<Li(f)&&(0<a&&l(Fi(f,a-1))||a<f.cells.length-1&&l(Fi(f,a+1))||0<c&&l(Fi(i[c-1],a))||c<i.length-1&&l(Fi(i[c+1],a)))&&tc(e,Fi(e[g],h),u,o.cell)
var v=Fi(t[g-s],h-d),b=o.replace(v)
_i(e[g],h,Hn(b,!0))}return e}(n,c,t,o,u)}))},mc=function(n,e,t,r,o){var u,i,c,a
u=e,i=n,c=o,a=r.cell,0<i&&i<u[0].cells.length&&E(u,(function(n){var e=n.cells[i-1],t=n.cells[i]
c(t.element,e.element)&&_i(n,i,Hn(a(),!0))}))
var l=cc(t,e),f=sc(t,l,r),s=cc(e,f),d=sc(e,s,r)
return B(d,(function(e,t){var r=e.cells.slice(0,n).concat(f[t].cells).concat(e.cells.slice(n,e.cells.length))
return Wi(e,r)}))},pc=function(n,e,t,r,o){(function(n,e,t,r){var o,u,i,c=Hi(n).rows
0<e&&e<c.length&&(o=c[e-1].cells,i=t,u=I(o,(function(n,e){return O(n,(function(n){return i(n.element,e.element)}))?n:n.concat([e])}),[]),E(u,(function(n){for(var o=m.none(),u=e;u<c.length;u++)!function(e){for(var u=0;u<Li(c[0]);u++)!function(u){var i=c[e].cells[u]
t(i.element,n.element)&&(o.isNone()&&(o=m.some(r())),o.each((function(n){_i(c[e],u,Hn(n,!0))})))}(u)}(u)})))})(e,n,o,r.cell)
var u=ic(t,e),i=sc(t,u,r),c=ic(e,i),a=sc(e,c,r),l=Hi(a),f=l.cols,s=l.rows
return f.concat(s.slice(0,n)).concat(i).concat(s.slice(n,s.length))},gc=function(n,e,t,r,o){var u=Hi(n),i=u.rows,c=u.cols,a=i.slice(0,e),l=i.slice(e),f=ji(i[t],(function(n,t){return 0<e&&e<i.length&&r(Fi(i[e-1],t),Fi(i[e],t))?zi(i[e],t):Hn(o(n.element,r),!0)}))
return c.concat(a).concat([f]).concat(l)},hc=function(n,e,t,r,o){return B(n,(function(n){var u,i,c,a,l,f,s,d,m,p,g,h,v,b=0<e&&e<Li(n)&&r(Fi(n,e-1),Fi(n,e)),w=(i=e,c=(u=n).section,a=t,l=r,f=o,"colgroup"!==c&&b?zi(u,i):Hn(f(Fi(u,a),l),!0))
return d=e,m=w,g=(p=(s=n).cells).slice(0,d),h=p.slice(d),v=g.concat([m]).concat(h),Wi(s,v)}))},vc=function(n,e,t,r){return B(n,(function(n){return ji(n,(function(n){return o=n,O(e,(function(n){return t(o.element,n.element)}))?Hn(r(n.element,t),!0):n
var o}))}))},bc=function(n,e,t,r){return void 0!==Fi(n[e],t)&&0<e&&r(Fi(n[e-1],t),Fi(n[e],t))},wc=function(n,e,t){return 0<e&&t(Fi(n,e-1),Fi(n,e))},yc=function(n,e,t,r){var o=W(n,(function(r,o){return bc(n,o,e,t)||wc(r,e,t)?[]:[zi(r,e)]}))
return vc(n,o,t,r)},xc=function(n,e,t,r){var o=Hi(n).rows,u=o[e],i=W(u.cells,(function(n,r){return bc(o,e,r,t)||wc(u,r,t)?[]:[n]}))
return vc(n,i,t,r)},Cc=fu(["cell","row","replace","gap","col","colgroup"]),Sc=function(n){return{element:n,colspan:Fe(n,"colspan",1),rowspan:Fe(n,"rowspan",1)}},Tc=function(n,e){void 0===e&&(e=Sc),Cc(n)
var t=vi(m.none()),r=function(t){return function(e){switch(Vn(e.element)){case"col":return n.col(e)
default:return n.cell(e)}}(e(t))},o=function(n){var e=r(n)
return t.get().isNone()&&t.set(m.some(e)),u=m.some({item:n,replacement:e}),e},u=m.none()
return{getOrInit:function(n,e){return u.fold((function(){return o(n)}),(function(t){return e(n,t.item)?t.replacement:o(n)}))},cursor:t.get}},Rc=function(n,e){return function(t){var r=vi(m.none())
Cc(t)
var o=[],u=function(u){var i={scope:n},c=t.replace(u,e,i)
return o.push({item:u,sub:c}),r.get().isNone()&&r.set(m.some(c)),c}
return{replaceOrInit:function(n,e){return t=n,r=e,k(o,(function(n){return r(n.item,t)})).fold((function(){return u(n)}),(function(t){return e(n,t.item)?t.sub:u(n)}))
var t,r},cursor:r.get}}},Dc=function(n){Cc(n)
var e=vi(m.none())
return{combine:function(t){return e.get().isNone()&&e.set(m.some(t)),function(){var e=n.cell({element:t,colspan:1,rowspan:1})
return ze(e,"width"),ze(t,"width"),e}},cursor:e.get}},Oc=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"],Ac=Wt(),Bc=function(n){return e=n,t=Ac.property().name(e),D(Oc,t)
var e,t},Ec=function(n){return e=n,t=Ac.property().name(e),D(["ol","ul"],t)
var e,t},Pc=function(n){var e,t=function(n){return"br"===Vn(n)},r=function(n){return ar(n).bind((function(e){var r=re(e).map((function(n){return!!Bc(n)||!!function(n){return e=n,D(["br","img","hr","input"],Ac.property().name(e))
var e}(n)&&"img"!==Vn(n)})).getOr(!1)
return ne(e).map((function(o){return!0===r||"li"===Vn(u=o)||ye(u,Ec).isSome()||t(e)||Bc(o)&&!Bn(n,o)?[]:[Dn.fromTag("br")]
var u}))})).getOr([])},o=0===(e=W(n,(function(n){var e=oe(n)
return j(e,(function(n){return t(n)||Xn(n)&&0===It(n).trim().length}))?[]:e.concat(r(n))}))).length?[Dn.fromTag("br")]:e
Bt(n[0]),At(n[0],o)},Mc=function(n){0===Ye(n).length&&Et(n)},Ic=function(n,e){return{grid:n,cursor:e}},kc=function(n,e,t){var r=Hi(n).rows
return Nc(r,e,t).orThunk((function(){return Nc(r,0,0)}))},Nc=function(n,e,t){return m.from(n[e]).bind((function(n){return m.from(n.cells[t]).bind((function(n){return m.from(n.element)}))}))},_c=function(n,e,t){var r=Hi(n).rows
return Ic(n,Nc(r,e,t))},Wc=function(n){return I(n,(function(n,e){return O(n,(function(n){return n.row===e.row}))?n:n.concat([e])}),[]).sort((function(n,e){return n.row-e.row}))},jc=function(n){return I(n,(function(n,e){return O(n,(function(n){return n.column===e.column}))?n:n.concat([e])}),[]).sort((function(n,e){return n.column-e.column}))},zc=function(n,e,t){var r,o,u=(r=n,o=t.section,nt(r,(function(){return o}))),i=ct(u)
return Xi(i,e,!0)},Fc=function(n,e){var t=P(n,e)
return 0===t.length?m.some("td"):t.length===n.length?m.some("th"):m.none()},Lc=function(n,e,t){var r=ct(e),o=t.getWidths(r,t)
zo(r,o,t)},Hc=Qi((function(n,e,t,r){var o=e[0].row,u=e[0].row,i=Wc(e),c=I(i,(function(n,e){return gc(n,u,o,t,r.getOrInit)}),n)
return _c(c,u,e[0].column)}),ec,n,n,Tc),qc=Qi((function(n,e,t,r){var o=Wc(e),u=o[o.length-1].row,i=o[o.length-1].row+o[o.length-1].rowspan,c=I(o,(function(n,e){return gc(n,i,u,t,r.getOrInit)}),n)
return _c(c,i,e[0].column)}),ec,n,n,Tc),Vc=Qi((function(n,e,t,r){var o=jc(e),u=o[0].column,i=o[0].column,c=I(o,(function(n,e){return hc(n,i,u,t,r.getOrInit)}),n)
return _c(c,e[0].row,i)}),ec,Lc,n,Tc),Uc=Qi((function(n,e,t,r){var o=e[e.length-1].column,u=e[e.length-1].column+e[e.length-1].colspan,i=jc(e),c=I(i,(function(n,e){return hc(n,u,o,t,r.getOrInit)}),n)
return _c(c,e[0].row,u)}),ec,Lc,n,Tc),$c=Qi((function(n,e,t,r){var o,u,i,c,a=jc(e),l=(o=n,u=a[0].column,i=a[a.length-1].column,c=B(o,(function(n){var e=n.cells.slice(0,u).concat(n.cells.slice(i+1))
return qn(e,n.section)})),P(c,(function(n){return 0<n.cells.length}))),f=kc(l,e[0].row,e[0].column)
return Ic(l,f)}),ec,Lc,Mc,Tc),Gc=Qi((function(n,e,t,r){var o,u,i,c,a,l=Wc(e),f=(o=n,u=l[0].row,i=l[l.length-1].row,a=(c=Hi(o)).rows,c.cols.concat(a.slice(0,u)).concat(a.slice(i+1))),s=kc(f,e[0].row,e[0].column)
return Ic(f,s)}),ec,n,Mc,Tc),Kc=Qi((function(n,e,t,r){var o=yc(n,e.column,t,r.replaceOrInit)
return _c(o,e.row,e.column)}),Zi,n,n,Rc("row","th")),Xc=Qi((function(n,e,t,r){var o=yc(n,e.column,t,r.replaceOrInit)
return _c(o,e.row,e.column)}),Zi,n,n,Rc(null,"td")),Yc=(Qi((function(n,e,t,r){var o=xc(n,e.row,t,r.replaceOrInit)
return _c(o,e.row,e.column)}),Zi,n,n,Rc("col","th")),Qi((function(n,e,t,r){var o=xc(n,e.row,t,r.replaceOrInit)
return _c(o,e.row,e.column)}),Zi,n,n,Rc(null,"td")),Qi((function(n,t,r,o){var u=t.cells
Pc(u)
var i=function(n,e,t){var r=Hi(n).rows
if(0===r.length)return n
for(var o=e.startRow;o<=e.finishRow;o++)for(var u=e.startCol;u<=e.finishCol;u++)_i(r[o],u,Hn(t(),!1))
return n}(n,t.bounds,e(u[0]))
return Ic(i,m.from(u[0]))}),(function(n,e){return e.mergable}),n,n,Dc)),Jc=Qi((function(n,e,t,r){var o=M(e,(function(n,e){return tc(n,e,t,r.combine(e))}),n)
return Ic(o,m.from(e[0]))}),(function(n,e){return e.unmergable}),Lc,n,Dc),Qc=Qi((function(n,e,t,r){var o,u,i,c=(o=e.clipboard,u=e.generators,i=it(o),Xi(i,u,!0)),a={row:e.row,column:e.column}
return dc(a,n,c,e.generators,t).fold((function(){return Ic(n,m.some(e.element))}),(function(n){var t=kc(n,e.row,e.column)
return Ic(n,t)}))}),(function(n,e){return Xe(e.element).bind((function(t){return Ji(n,t).map((function(n){return H(H({},n),{generators:e.generators,clipboard:e.clipboard})}))}))}),Lc,n,Tc),Zc=Qi((function(n,e,t,r){var o=Hi(n).rows,u=e.cells[0].column,i=o[e.cells[0].row],c=zc(e.clipboard,e.generators,i),a=mc(u,n,c,e.generators,t),l=kc(a,e.cells[0].row,e.cells[0].column)
return Ic(a,l)}),nc,n,n,Tc),na=Qi((function(n,e,t,r){var o=Hi(n).rows,u=e.cells[e.cells.length-1].column+e.cells[e.cells.length-1].colspan,i=o[e.cells[0].row],c=zc(e.clipboard,e.generators,i),a=mc(u,n,c,e.generators,t),l=kc(a,e.cells[0].row,e.cells[0].column)
return Ic(a,l)}),nc,n,n,Tc),ea=Qi((function(n,e,t,r){var o=Hi(n).rows,u=e.cells[0].row,i=o[u],c=zc(e.clipboard,e.generators,i),a=pc(u,n,c,e.generators,t),l=kc(a,e.cells[0].row,e.cells[0].column)
return Ic(a,l)}),nc,n,n,Tc),ta=Qi((function(n,e,t,r){var o=Hi(n).rows,u=e.cells[e.cells.length-1].row+e.cells[e.cells.length-1].rowspan,i=o[e.cells[0].row],c=zc(e.clipboard,e.generators,i),a=pc(u,n,c,e.generators,t),l=kc(a,e.cells[0].row,e.cells[0].column)
return Ic(a,l)}),nc,n,n,Tc),ra=function(n,e){var t=it(n)
return ec(t,e).bind((function(n){var e=n[n.length-1],r=n[0].column,o=e.column+e.colspan,u=_(B(t.all,(function(n){return P(n.cells,(function(n){return n.column>=r&&n.column<o}))})))
return Fc(u,(function(n){return"th"===Vn(n.element)}))})).getOr("")},oa=function(n){return ci(n.parentNode)},ua=function(n,e){var t="thead"===oa(e),r=!O(e.cells,(function(n){return"th"!==ci(n)}))
return t||r?m.some({thead:t,ths:r}):m.none()},ia=function(n,e){return"thead"===(t=ua(0,e).fold((function(){return oa(e)}),(function(n){return"thead"})))?"header":"tfoot"===t?"footer":"body"
var t},ca=function(n,e,t){var r,o,u=n.getParent(e,"table"),i=e.parentNode,c=ci(i)
t!==c&&((r=n.select(t,u)[0])||(r=n.create(t),o=u.firstChild,"thead"===t?F(ge(Dn.fromDom(u),"caption,colgroup")).fold((function(){return u.insertBefore(r,o)}),(function(e){return n.insertAfter(r,e.dom)})):u.appendChild(r)),"tbody"===t&&"thead"===c&&r.firstChild?r.insertBefore(e,r.firstChild):r.appendChild(e),i.hasChildNodes()||n.remove(i))},aa=function(n,e,t,r){return E(e,(function(e){var o=ci(e)!==t?n.rename(e,t):e
n.setAttrib(o,"scope",r)}))},la=function(n,e,t){var r,o,u,i=n.dom
"header"===t?(o="auto"===(r=ri(n))?(u=Qe(Dn.fromDom(e.cells[0])).map(Ze).getOr([]),L(u,(function(n){return ua(0,n.dom)})).map((function(n){return n.thead&&n.ths?"sectionCells":n.thead?"section":"cells"})).getOr("section")):r,aa(i,e.cells,"section"===o?"td":"th","col"),ca(i,e,"cells"===o?"tbody":"thead")):(aa(i,e.cells,"td",null),ca(i,e,"footer"===t?"tfoot":"tbody"))},fa=function(n){return function(e){var t,r=Vn(e),o="col"===r||"colgroup"===r?Qe(t=e).bind((function(n){return Kt(n,Sr.firstSelectedSelector)})).fold((function(){return t}),(function(n){return n[0]})):e
return Te(o,n)}},sa=fa("th,td"),da=fa("th,td,caption"),ma=function(n,e){return sa(n).map((function(n){return Cr(e)})).getOr([])},pa=function(n,e){var t,r,o,u=sa(n)
return r=u.bind((function(n){return Qe(n)})).map(Ze),o=function(n,t){return P(t,(function(t){return O(xr(t.dom.cells),(function(t){return"1"===Ae(t,e)||Bn(t,n)}))}))},((t=u).isSome()&&r.isSome()?m.some(o(t.getOrDie(),r.getOrDie())):m.none()).getOr([])},ga={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},colGroups:!1},ha=function(n,e,t,r){return A(n,(function(n){return function(n,e,t,r){for(var o=Dn.fromTag("tr"),u=0;u<n;u++){var i=Dn.fromTag(r<e||u<t?"th":"td")
u<t&&De(i,"scope","row"),r<e&&De(i,"scope","col"),Rt(i,Dn.fromTag("br")),Rt(o,i)}return o}(e,t,r,n)}))},va=function(n,e){n.selection.select(e.dom,!0),n.selection.collapse(!0)},ba=function(n,e,t,o,u){var i=Xu(n),c={styles:i,attributes:Ku(n),colGroups:n.getParam("table_use_colgroups",!1,"boolean")},a=function(n,e,t,r,o,u){void 0===u&&(u=ga)
var i=Dn.fromTag("table"),c="cells"!==o
Ne(i,u.styles),Oe(i,u.attributes),u.colGroups&&Rt(i,function(n){var e=Dn.fromTag("colgroup")
return A(n,(function(){return Rt(e,Dn.fromTag("col"))})),e}(e))
var a,l,f=Math.min(n,t)
c&&0<t&&(a=Dn.fromTag("thead"),Rt(i,a),l=ha(t,e,"sectionCells"===o?f:0,r),At(a,l))
var s=Dn.fromTag("tbody")
Rt(i,s)
var d=ha(c?n-f:n,e,c?0:t,r)
return At(s,d),i}(t,e,u,o,ri(n),c)
De(a,"data-mce-id","__mce")
var l,f,s,d=(l=a,f=Dn.fromTag("div"),s=Dn.fromDom(l.dom.cloneNode(!0)),Rt(f,s),f.dom.innerHTML)
return n.insertContent(d),Se(ai(n),'table[data-mce-id="__mce"]').map((function(e){var t,o,u
return ei(n)?Di(n,e):ti(n)?Oi(e):(ni(n)||(t=i.width,h(t)&&-1!==t.indexOf("%")))&&Ri(n,e),mi(e),Ee(e,"data-mce-id"),o=n,E(he(e,"tr"),(function(n){Lu(o,n.dom),E(he(n,"th,td"),(function(n){Hu(o,n.dom)}))})),u=n,Se(e,"td,th").each(r(va,u)),e.dom})).getOr(null)},wa=function(n,e,t,r,o){void 0===r&&(r={})
var u=function(n){return C(n)&&0<n}
if(u(e)&&u(t)){var i=r.headerRows||0,c=r.headerColumns||0
return ba(n,t,e,c,i)}return console.error(o),null},ya=function(n){return function(){return n().fold((function(){return[]}),(function(n){return B(n,(function(n){return n.dom}))}))}},xa=function(n){return function(e){var t=0<e.length?m.some(xr(e)):m.none()
n(t)}},Ca=function(n,e,t){var r=Fe(n,e,1)
1===t||r<=1?Ee(n,e):De(n,e,Math.min(t,r))},Sa=tinymce.util.Tools.resolve("tinymce.util.Tools"),Ta=function(n,e,t){return function(e,r){for(var o=0;o<r.length;o++){var u=n.getStyle(r[o],t)
if(void 0===e&&(e=u),e!==u)return""}return e}(void 0,n.select("td,th",e))},Ra=function(n,e,t){t&&n.formatter.apply("align"+t,{},e)},Da=function(n,e){Sa.each("left center right".split(" "),(function(t){n.formatter.remove("align"+t,{},e)}))},Oa=function(n,e){return(e||[]).concat(B(n,(function(n){var e=n.text||n.title
return function(n){return jn(e=n,t="menu")&&void 0!==e[t]&&null!==e[t]
var e,t}(n)?{text:e,items:Oa(n.menu)}:{text:e,value:n.value}})))},Aa=function(n){return function(e){return Z(e,"rgb")?n.toHex(e):e}},Ba=function(n,e){var t=Dn.fromDom(e)
return{borderwidth:je(t,"border-width").getOr(""),borderstyle:je(t,"border-style").getOr(""),bordercolor:je(t,"border-color").map(Aa(n)).getOr(""),backgroundcolor:je(t,"background-color").map(Aa(n)).getOr("")}},Ea=function(n){var e=n[0],t=n.slice(1)
return E(t,(function(n){E(Mn(e),(function(t){kn(n,(function(n,r){var o=e[t]
""!==o&&t===r&&o!==n&&(e[t]="")}))}))})),e},Pa=function(n){var e=[{name:"borderstyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]},{name:"bordercolor",type:"colorinput",label:"Border color"},{name:"backgroundcolor",type:"colorinput",label:"Background color"}]
return{title:"Advanced",name:"advanced",items:"cell"===n?[{name:"borderwidth",type:"input",label:"Border width"}].concat(e):e}},Ma=function(n,e,t,r){return k(n,(function(n){return t.formatter.matchNode(r,e+n)})).getOr("")},Ia=r(Ma,["left","center","right"],"align"),ka=r(Ma,["top","middle","bottom"],"valign"),Na=[{name:"width",type:"input",label:"Width"},{name:"height",type:"input",label:"Height"},{name:"celltype",type:"listbox",label:"Cell type",items:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{name:"scope",type:"listbox",label:"Scope",items:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{name:"halign",type:"listbox",label:"H Align",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{name:"valign",type:"listbox",label:"V Align",items:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}],_a=function(n){return Na.concat((0<(e=Oa(n.getParam("table_cell_class_list",[],"array"))).length?m.some({name:"class",type:"listbox",label:"Class",items:e}):m.none()).toArray())
var e},Wa=function(n){return function(e,t){var r=e.dom
return{setAttrib:function(e,o){n&&!o||r.setAttrib(t,e,o)},setStyle:function(e,o){n&&!o||r.setStyle(t,e,o)},setFormat:function(r,o){n&&!o||(""===o?e.formatter.remove(r,{value:null},t,!0):e.formatter.apply(r,{value:o},t))}}}},ja={normal:Wa(!1),ifTruthy:Wa(!0)},za=function(n){return Qe(n[0]).map((function(e){var t=it(e),r=st(t),o=P(r,(function(e){return O(n,(function(n){return Bn(e.element,n)}))}))
return B(o,(function(n){return{element:n.element.dom,column:pt(t,n.column).map((function(n){return n.element.dom}))}}))}))},Fa=function(n,e,t){var r=t.getData()
t.close(),n.undoManager.transact((function(){(function(n,e,t){var r=n.dom,o=1===e.length
1<=e.length&&za(e).each((function(e){return E(e,(function(e){var u,i,c,a,l,f,s,d,m,p,g=e.element,h=t.celltype&&ci(g)!==t.celltype?r.rename(g,t.celltype):g,v=o?ja.normal(n,h):ja.ifTruthy(n,h)
i=e.column.map((function(e){return o?ja.normal(n,e):ja.ifTruthy(n,e)})).getOr(v),c=t,(u=v).setAttrib("scope",c.scope),u.setAttrib("class",c.class),u.setStyle("height",di(c.height)),i.setStyle("width",di(c.width)),Yu(n)&&(l=t,(a=v).setFormat("tablecellbackgroundcolor",l.backgroundcolor),a.setFormat("tablecellbordercolor",l.bordercolor),a.setFormat("tablecellborderstyle",l.borderstyle),a.setFormat("tablecellborderwidth",di(l.borderwidth))),o&&(Da(n,h),f=n,s=h,Sa.each("top middle bottom".split(" "),(function(n){f.formatter.remove("valign"+n,{},s)}))),t.halign&&Ra(n,h,t.halign),t.valign&&(d=n,m=h,(p=t.valign)&&d.formatter.apply("valign"+p,{},m))}))}))})(n,e,r),n.focus()}))},La=function(n,e){var t,o,u,i=ma(hi(n),e)
0!==i.length&&(t=function(n,e){var t=za(e).map((function(e){return B(e,(function(e){return t=n,r=e.element,o=Yu(n),u=e.column,i=t.dom,c=u.getOr(r),H({width:(a=function(n,e){return i.getStyle(n,e)||i.getAttrib(n,e)})(c,"width"),height:a(r,"height"),scope:i.getAttrib(r,"scope"),celltype:ci(r),class:i.getAttrib(r,"class",""),halign:Ia(t,r),valign:ka(t,r)},o?Ba(i,r):{})
var t,r,o,u,i,c,a}))}))
return Ea(t.getOrDie())}(n,i),o={type:"tabpanel",tabs:[{title:"General",name:"general",items:_a(n)},Pa("cell")]},u={type:"panel",items:[{type:"grid",columns:2,items:_a(n)}]},n.windowManager.open({title:"Cell Properties",size:"normal",body:Yu(n)?o:u,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:t,onSubmit:r(Fa,n,i)}))},Ha=[{type:"listbox",name:"type",label:"Row type",items:[{text:"Header",value:"header"},{text:"Body",value:"body"},{text:"Footer",value:"footer"}]},{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height",type:"input"}],qa=function(n){return Ha.concat((0<(e=Oa(n.getParam("table_row_class_list",[],"array"))).length?m.some({name:"class",type:"listbox",label:"Class",items:e}):m.none()).toArray())
var e},Va=function(n,e,t,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){(function(n,e,t,r){var o=1===e.length
E(e,(function(e){r.type!==ci(e.parentNode)&&la(n,e,r.type)
var u,i,c,a,l=o?ja.normal(n,e):ja.ifTruthy(n,e)
i=r,(u=l).setAttrib("scope",i.scope),u.setAttrib("class",i.class),u.setStyle("height",di(i.height)),Ju(n)&&(a=r,(c=l).setStyle("background-color",a.backgroundcolor),c.setStyle("border-color",a.bordercolor),c.setStyle("border-style",a.borderstyle)),r.align!==t.align&&(Da(n,e),Ra(n,e,r.align))}))})(n,e,t,o),n.focus()}))},Ua=function(n){var e,t,o,u,i=pa(hi(n),Sr.selected)
0!==i.length&&(e=B(i,(function(e){return t=n,r=e.dom,o=Ju(n),u=t.dom,H({height:u.getStyle(r,"height")||u.getAttrib(r,"height"),scope:u.getAttrib(r,"scope"),class:u.getAttrib(r,"class",""),type:ia(0,r),align:Ia(t,r)},o?Ba(u,r):{})
var t,r,o,u})),t=Ea(e),o={type:"tabpanel",tabs:[{title:"General",name:"general",items:qa(n)},Pa("row")]},u={type:"panel",items:[{type:"grid",columns:2,items:qa(n)}]},n.windowManager.open({title:"Row Properties",size:"normal",body:Ju(n)?o:u,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:t,onSubmit:r(Va,n,B(i,(function(n){return n.dom})),t)}))},$a=tinymce.util.Tools.resolve("tinymce.Env"),Ga=function(n,e,t,r){if("TD"===e.tagName||"TH"===e.tagName)h(t)?n.setStyle(e,t,r):n.setStyle(e,t)
else if(e.children)for(var o=0;o<e.children.length;o++)Ga(n,e.children[o],t,r)},Ka=function(n,e,t){var r,o=n.dom,u=t.getData()
t.close(),""===u.class&&delete u.class,n.undoManager.transact((function(){var t,i
e||(t=parseInt(u.cols,10)||1,i=parseInt(u.rows,10)||1,e=ba(n,t,i,0,0)),function(n,e,t){var r,o=n.dom,u={},i={}
if(u.class=t.class,i.height=di(t.height),o.getAttrib(e,"width")&&!Zu(n)?u.width=(r=t.width)?r.replace(/px$/,""):"":i.width=di(t.width),Zu(n)?(i["border-width"]=di(t.border),i["border-spacing"]=di(t.cellspacing)):(u.border=t.border,u.cellpadding=t.cellpadding,u.cellspacing=t.cellspacing),Zu(n)&&e.children)for(var c=0;c<e.children.length;c++)Ga(o,e.children[c],{"border-width":di(t.border),padding:di(t.cellpadding)}),Qu(n)&&Ga(o,e.children[c],{"border-color":t.bordercolor})
Qu(n)&&(i["background-color"]=t.backgroundcolor,i["border-color"]=t.bordercolor,i["border-style"]=t.borderstyle),u.style=o.serializeStyle(H(H({},Xu(n)),i)),o.setAttribs(e,H(H({},Ku(n)),u))}(n,e,u),(r=o.select("caption",e)[0])&&!u.caption&&o.remove(r),!r&&u.caption&&((r=o.create("caption")).innerHTML=$a.ie?" ":'<br data-mce-bogus="1"/>',e.insertBefore(r,e.firstChild)),""===u.align?Da(n,e):Ra(n,e,u.align),n.focus(),n.addVisual()}))},Xa=function(n,e){var t,o,u,i,c,a,l,f,s=n.dom,d=function(n,e){var t,r,o,u,i=Xu(n),c=Ku(n),a=e?(t=n.dom,{borderstyle:Wn(i,"border-style").getOr(""),bordercolor:Aa(t)(Wn(i,"border-color").getOr("")),backgroundcolor:Aa(t)(Wn(i,"background-color").getOr(""))}):{}
return H(H(H(H(H(H({},{height:"",width:"100%",cellspacing:"",cellpadding:"",caption:!1,class:"",align:"",border:""}),i),c),a),(u=i["border-width"],Zu(n)&&u?{border:u}:Wn(c,"border").fold((function(){return{}}),(function(n){return{border:n}})))),(r=Wn(i,"border-spacing").or(Wn(c,"cellspacing")).fold((function(){return{}}),(function(n){return{cellspacing:n}})),o=Wn(i,"border-padding").or(Wn(c,"cellpadding")).fold((function(){return{}}),(function(n){return{cellpadding:n}})),H(H({},r),o)))}(n,Qu(n))
!1===e?(t=s.getParent(n.selection.getStart(),"table"))?(u=t,i=Qu(o=n),f=o.dom,d=H({width:f.getStyle(u,"width")||f.getAttrib(u,"width"),height:f.getStyle(u,"height")||f.getAttrib(u,"height"),cellspacing:f.getStyle(u,"border-spacing")||f.getAttrib(u,"cellspacing"),cellpadding:f.getAttrib(u,"cellpadding")||Ta(o.dom,u,"padding"),border:(c=f,a=u,l=je(Dn.fromDom(a),"border-width"),Zu(o)&&l.isSome()?l.getOr(""):c.getAttrib(a,"border")||Ta(o.dom,a,"border-width")||Ta(o.dom,a,"border")),caption:!!f.select("caption",u)[0],class:f.getAttrib(u,"class",""),align:Ia(o,u)},i?Ba(f,u):{})):Qu(n)&&(d.borderstyle="",d.bordercolor="",d.backgroundcolor=""):(d.cols="1",d.rows="1",Qu(n)&&(d.borderstyle="",d.bordercolor="",d.backgroundcolor=""))
var m=Oa(n.getParam("table_class_list",[],"array"))
0<m.length&&d.class&&(d.class=d.class.replace(/\s*mce\-item\-table\s*/g,""))
var p,g,h,v,b={type:"grid",columns:2,items:(p=m,g=e?[{type:"input",name:"cols",label:"Cols",inputMode:"numeric"},{type:"input",name:"rows",label:"Rows",inputMode:"numeric"}]:[],h=n.getParam("table_appearance_options",!0,"boolean")?[{type:"input",name:"cellspacing",label:"Cell spacing",inputMode:"numeric"},{type:"input",name:"cellpadding",label:"Cell padding",inputMode:"numeric"},{type:"input",name:"border",label:"Border width"},{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[],v=0<p.length?[{type:"listbox",name:"class",label:"Class",items:p}]:[],g.concat([{type:"input",name:"width",label:"Width"},{type:"input",name:"height",label:"Height"}]).concat(h).concat([{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]}]).concat(v))},w=Qu(n)?{type:"tabpanel",tabs:[{title:"General",name:"general",items:[b]},Pa("table")]}:{type:"panel",items:[b]}
n.windowManager.open({title:"Table Properties",size:"normal",body:w,onSubmit:r(Ka,n,t),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:d})},Ya=function(n){return da(hi(n))},Ja=function(n){return sa(hi(n))},Qa=function(e,t,o,u,i){var a=si(e),l=function(n){return Qe(n,a)},f=function(n){return Ja(e).each((function(t){l(t).each((function(r){var i=Rr(u,r,t)
n(r,i).each((function(n){e.selection.setRng(n),e.focus(),o.clear(r),mi(r)}))}))}))},s=function(){return Ja(e).map((function(t){return l(t).bind((function(r){return function(n,e,t){var r=it(n)
return ec(r,e).map((function(n){var e=Xi(r,t,!1),o=Hi(e).rows.slice(n[0].row,n[n.length-1].row+n[n.length-1].rowspan),u=Yi(o,t)
return B(u,(function(n){var e=sr(n.element)
return E(n.cells,(function(n){var t=dr(n.element)
Vi(t,"colspan",n.colspan,1),Vi(t,"rowspan",n.rowspan,1),Rt(e,t)})),e}))}))}(r,Rr(u,r,t),wr(n,Dn.fromDom(e.getDoc()),m.none()))}))}))},d=function(){return Ja(e).map((function(n){return l(n).bind((function(e){return function(n,e){var t=it(n)
return ec(t,e).map((function(n){var e,r,o=n[n.length-1],u=n[0].column,i=o.column+o.colspan
return q(function(n,e,t){if(mt(n)){var r=P(dt(n),(function(n){return n.column>=e&&n.column<t})),o=B(r,(function(n){var r=dr(n.element)
return Ca(r,"span",t-e),r})),u=Dn.fromTag("colgroup")
return At(u,o),[u]}return[]}(t,u,i),(e=u,r=i,B(t.all,(function(n){var t=P(n.cells,(function(n){return n.column>=e&&n.column<r})),o=B(t,(function(n){var t=dr(n.element)
return Ca(t,"colspan",r-e),t})),u=Dn.fromTag("tr")
return At(u,o),u}))))}))}(e,Rr(u,e,n))}))}))},p=function(n,t){return t().each((function(t){var r=B(t,dr)
Ja(e).each((function(t){return l(t).each((function(t){var i,c,a=yr(Dn.fromDom(e.getDoc())),l=(i=r,c=a,{selection:Cr(u),clipboard:i,generators:c})
n(t,l).each((function(n){e.selection.setRng(n),e.focus(),o.clear(t)}))}))}))}))}
kn({mceTableSplitCells:function(){return f(t.unmergeCells)},mceTableMergeCells:function(){return f(t.mergeCells)},mceTableInsertRowBefore:function(){return f(t.insertRowsBefore)},mceTableInsertRowAfter:function(){return f(t.insertRowsAfter)},mceTableInsertColBefore:function(){return f(t.insertColumnsBefore)},mceTableInsertColAfter:function(){return f(t.insertColumnsAfter)},mceTableDeleteCol:function(){return f(t.deleteColumn)},mceTableDeleteRow:function(){return f(t.deleteRow)},mceTableCutCol:function(n){return d().each((function(n){i.setColumns(n),f(t.deleteColumn)}))},mceTableCutRow:function(n){return s().each((function(n){i.setRows(n),f(t.deleteRow)}))},mceTableCopyCol:function(n){return d().each((function(n){return i.setColumns(n)}))},mceTableCopyRow:function(n){return s().each((function(n){return i.setRows(n)}))},mceTablePasteColBefore:function(n){return p(t.pasteColsBefore,i.getColumns)},mceTablePasteColAfter:function(n){return p(t.pasteColsAfter,i.getColumns)},mceTablePasteRowBefore:function(n){return p(t.pasteRowsBefore,i.getRows)},mceTablePasteRowAfter:function(n){return p(t.pasteRowsAfter,i.getRows)},mceTableDelete:function(){return Ya(e).each((function(n){Qe(n,a).filter(c(a)).each((function(n){var t,r=Dn.fromText("")
St(n,r),Et(n),e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):((t=e.dom.createRng()).setStart(r.dom,0),t.setEnd(r.dom,0),e.selection.setRng(t),e.nodeChanged())}))}))},mceTableSizingMode:function(n,t){return r=t,Ya(e).each((function(n){ti(e)||ei(e)||ni(e)||Qe(n,a).each((function(n){"relative"!==r||tu(n)?"fixed"!==r||ru(n)?"responsive"!==r||function(n){return xo(n).isNone()}(n)||Oi(n):Di(e,n):Ri(e,n),mi(n)}))}))
var r}},(function(n,t){return e.addCommand(t,n)})),kn({mceTableCellType:function(n,r){return t.setTableCellType(e,r)},mceTableRowType:function(n,r){return t.setTableRowType(e,r)}},(function(n,t){return e.addCommand(t,n)})),e.addCommand("mceTableColType",(function(n,e){return Wn(e,"type").each((function(n){return f("th"===n?t.makeColumnHeader:t.unmakeColumnHeader)}))})),kn({mceTableProps:r(Xa,e,!1),mceTableRowProps:r(Ua,e),mceTableCellProps:r(La,e,u)},(function(n,t){return e.addCommand(t,(function(){return n()}))})),e.addCommand("mceInsertTable",(function(n,t){v(t)&&0<Mn(t).length?wa(e,t.rows,t.columns,t.options,"Invalid values for mceInsertTable - rows and columns values are required to insert a table."):Xa(e,!0)})),e.addCommand("mceTableApplyCellStyle",(function(n,t){var r
!v(t)||0!==(r=ma(hi(e),u)).length&&kn(t,(function(n,t){var o="tablecell"+t.toLowerCase().replace("-","")
e.formatter.has(o)&&h(n)&&E(r,(function(t){ja.normal(e,t.dom).setFormat(o,n)}))}))}))},Za={tablecellbackgroundcolor:{selector:"td,th",styles:{backgroundColor:"%value"},remove_similar:!0},tablecellbordercolor:{selector:"td,th",styles:{borderColor:"%value"},remove_similar:!0},tablecellborderstyle:{selector:"td,th",styles:{borderStyle:"%value"},remove_similar:!0},tablecellborderwidth:{selector:"td,th",styles:{borderWidth:"%value"},remove_similar:!0}},nl=Yt([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]),el=H(H({},nl),{none:function(n){return void 0===n&&(n=void 0),nl.none(n)}}),tl=function(n,e){return Qe(n,e).bind((function(e){var t=Ye(e)
return N(t,(function(e){return Bn(n,e)})).map((function(n){return{index:n,all:t}}))}))},rl=function(n,e,t,r){return{start:n,soffset:e,finish:t,foffset:r}},ol=Yt([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),ul={before:ol.before,on:ol.on,after:ol.after,cata:function(n,e,t,r){return n.fold(e,t,r)},getStart:function(n){return n.fold(t,t,t)}},il=Yt([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),cl={domRange:il.domRange,relative:il.relative,exact:il.exact,exactFromRange:function(n){return il.exact(n.start,n.soffset,n.finish,n.foffset)},getWin:function(n){var e=n.match({domRange:function(n){return Dn.fromDom(n.startContainer)},relative:function(n,e){return ul.getStart(n)},exact:function(n,e,t,r){return n}})
return Dn.fromDom(Zn(e).dom.defaultView)},range:rl},al=function(n,e,t){var r,o,u=n.document.createRange()
return r=u,e.fold((function(n){r.setStartBefore(n.dom)}),(function(n,e){r.setStart(n.dom,e)}),(function(n){r.setStartAfter(n.dom)})),o=u,t.fold((function(n){o.setEndBefore(n.dom)}),(function(n,e){o.setEnd(n.dom,e)}),(function(n){o.setEndAfter(n.dom)})),u},ll=function(n,e,t,r,o){var u=n.document.createRange()
return u.setStart(e.dom,t),u.setEnd(r.dom,o),u},fl=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom,width:n.width,height:n.height}},sl=Yt([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),dl=function(n,e,t){return e(Dn.fromDom(t.startContainer),t.startOffset,Dn.fromDom(t.endContainer),t.endOffset)},ml=function(n,t){var r,o,u,i=(r=n,t.match({domRange:function(n){return{ltr:e(n),rtl:m.none}},relative:function(n,e){return{ltr:U((function(){return al(r,n,e)})),rtl:U((function(){return m.some(al(r,e,n))}))}},exact:function(n,e,t,o){return{ltr:U((function(){return ll(r,n,e,t,o)})),rtl:U((function(){return m.some(ll(r,t,o,n,e))}))}}}))
return(u=(o=i).ltr()).collapsed?o.rtl().filter((function(n){return!1===n.collapsed})).map((function(n){return sl.rtl(Dn.fromDom(n.endContainer),n.endOffset,Dn.fromDom(n.startContainer),n.startOffset)})).getOrThunk((function(){return dl(0,sl.ltr,u)})):dl(0,sl.ltr,u)},pl=function(n,e){return ml(n,e).match({ltr:function(e,t,r,o){var u=n.document.createRange()
return u.setStart(e.dom,t),u.setEnd(r.dom,o),u},rtl:function(e,t,r,o){var u=n.document.createRange()
return u.setStart(r.dom,o),u.setEnd(e.dom,t),u}})},gl=(sl.ltr,sl.rtl,function(n,e,t){return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}),hl=function(n,e,t,r){return Xn(e)?function(n,e,t,r){var o=n.dom.createRange()
o.selectNode(e.dom)
var u=o.getClientRects()
return L(u,(function(n){return gl(n,t,r)?m.some(n):m.none()})).map((function(o){return function(n,e,t,r,o){var u=function(t){var r=n.dom.createRange()
return r.setStart(e.dom,t),r.collapse(!0),r},i=It(e).length,c=function(n,e,t,r,o){if(0===o)return 0
if(e===r)return o-1
for(var u=r,i=1;i<o;i++){var c=n(i),a=Math.abs(e-c.left)
if(t<=c.bottom){if(t<c.top||u<a)return i-1
u=a}}return 0}((function(n){return u(n).getBoundingClientRect()}),t,r,o.right,i)
return u(c)}(n,e,t,r,o)}))}(n,e,t,r):(u=e,i=t,c=r,a=(o=n).dom.createRange(),l=oe(u),L(l,(function(n){return a.selectNode(n.dom),gl(a.getBoundingClientRect(),i,c)?hl(o,n,i,c):m.none()})))
var o,u,i,c,a,l},vl=function(n,e){return e-n.left<n.right-e},bl=function(n,e,t){var r=n.dom.createRange()
return r.selectNode(e.dom),r.collapse(t),r},wl=function(n,e,t){var r=n.dom.createRange()
r.selectNode(e.dom)
var o=r.getBoundingClientRect(),u=vl(o,t)
return(!0===u?cr:ar)(e).map((function(e){return bl(n,e,u)}))},yl=function(n,e,t){var r=e.dom.getBoundingClientRect(),o=vl(r,t)
return m.some(bl(n,e,o))},xl=document.caretPositionFromPoint?function(n,e,t){return m.from(n.dom.caretPositionFromPoint(e,t)).bind((function(e){if(null===e.offsetNode)return m.none()
var t=n.dom.createRange()
return t.setStart(e.offsetNode,e.offset),t.collapse(),m.some(t)}))}:document.caretRangeFromPoint?function(n,e,t){return m.from(n.dom.caretRangeFromPoint(e,t))}:function(n,e,t){return Dn.fromPoint(n,e,t).bind((function(r){var o=function(){return t=n,u=e,(0===oe(o=r).length?yl:wl)(t,o,u)
var t,o,u}
return 0===oe(r).length?o():function(n,e,t,r){var o=n.dom.createRange()
o.selectNode(e.dom)
var u=o.getBoundingClientRect()
return function(n,e,t,r){var o=n.dom.createRange()
o.selectNode(e.dom)
var u=o.getBoundingClientRect(),i=Math.max(u.left,Math.min(u.right,t)),c=Math.max(u.top,Math.min(u.bottom,r))
return hl(n,e,i,c)}(n,e,Math.max(u.left,Math.min(u.right,t)),Math.max(u.top,Math.min(u.bottom,r)))}(n,r,e,t).orThunk(o)}))},Cl=function(n,e){var t=Vn(n)
return"input"===t?ul.after(n):D(["br","img"],t)?0===e?ul.before(n):ul.after(n):ul.on(n,e)},Sl=function(n,e){var t=n.fold(ul.before,Cl,ul.after),r=e.fold(ul.before,Cl,ul.after)
return cl.relative(t,r)},Tl=function(n,e,t,r){var o=Cl(n,e),u=Cl(t,r)
return cl.relative(o,u)},Rl=function(n){return m.from(n.getSelection())},Dl=function(n,e){Rl(n).each((function(n){n.removeAllRanges(),n.addRange(e)}))},Ol=function(n,e,t,r,o){var u=ll(n,e,t,r,o)
Dl(n,u)},Al=function(n,e){return ml(n,e).match({ltr:function(e,t,r,o){Ol(n,e,t,r,o)},rtl:function(e,t,r,o){Rl(n).each((function(u){if(u.setBaseAndExtent)u.setBaseAndExtent(e.dom,t,r.dom,o)
else if(u.extend)try{c=e,a=t,l=r,f=o,(i=u).collapse(c.dom,a),i.extend(l.dom,f)}catch(s){Ol(n,r,o,e,t)}else Ol(n,r,o,e,t)
var i,c,a,l,f}))}})},Bl=function(n,e,t,r,o){var u=Tl(e,t,r,o)
Al(n,u)},El=function(n,e,t){var r=Sl(e,t)
Al(n,r)},Pl=function(n){if(0<n.rangeCount){var e=n.getRangeAt(0),t=n.getRangeAt(n.rangeCount-1)
return m.some(rl(Dn.fromDom(e.startContainer),e.startOffset,Dn.fromDom(t.endContainer),t.endOffset))}return m.none()},Ml=function(n){if(null===n.anchorNode||null===n.focusNode)return Pl(n)
var e=Dn.fromDom(n.anchorNode),t=Dn.fromDom(n.focusNode)
return function(n,e,t,r){var o,u,i,c,a,l=(u=e,i=t,c=r,(a=Qn(o=n).dom.createRange()).setStart(o.dom,u),a.setEnd(i.dom,c),a),f=Bn(n,t)&&e===r
return l.collapsed&&!f}(e,n.anchorOffset,t,n.focusOffset)?m.some(rl(e,n.anchorOffset,t,n.focusOffset)):Pl(n)},Il=function(n){return Rl(n).filter((function(n){return 0<n.rangeCount})).bind(Ml).map((function(n){return cl.exact(n.start,n.soffset,n.finish,n.foffset)}))},kl=tinymce.util.Tools.resolve("tinymce.util.VK"),Nl=function(n,e,t,r){return jl(n,e,tl(o=t,undefined).fold((function(){return el.none(o)}),(function(n){return n.index+1<n.all.length?el.middle(o,n.all[n.index+1]):el.last(o)})),r)
var o},_l=function(n,e,t,r){return jl(n,e,tl(o=t,undefined).fold((function(){return el.none()}),(function(n){return 0<=n.index-1?el.middle(o,n.all[n.index-1]):el.first(o)})),r)
var o},Wl=function(n,e){return function(n){var e=cl.getWin(n).dom,t=function(n,t,r,o){return ll(e,n,t,r,o)},r=n.match({domRange:function(n){var e=Dn.fromDom(n.startContainer),t=Dn.fromDom(n.endContainer)
return Tl(e,n.startOffset,t,n.endOffset)},relative:Sl,exact:Tl})
return ml(e,r).match({ltr:t,rtl:t})}(cl.exact(e,0,e,0))},jl=function(n,e,t,r){return t.fold(m.none,m.none,(function(n,e){return cr(e).map((function(n){return Wl(0,n)}))}),(function(t){return Qe(t,e).bind((function(e){var o,u=Tr(t)
return n.undoManager.transact((function(){r.insertRowsAfter(e,u)})),o=he(e,"tr"),F(o).bind((function(n){return Se(n,"td,th").map((function(n){return Wl(0,n)}))}))}))}))},zl=["table","li","dl"],Fl=function(n,e,t){var r,o,u,i
n.keyCode===kl.TAB&&(r=ai(e),o=function(n){var e=Vn(n)
return Bn(n,r)||D(zl,e)},(u=e.selection.getRng()).collapsed&&(i=Dn.fromDom(u.startContainer),Xe(i,o).each((function(r){n.preventDefault(),(n.shiftKey?_l:Nl)(e,o,r,t).each((function(n){e.selection.setRng(n)}))}))))},Ll=function(n,e){return{selection:n,kill:e}},Hl=function(n,e,t,r){return{start:ul.on(n,e),finish:ul.on(t,r)}},ql=function(n,e){var t=pl(n,e)
return rl(Dn.fromDom(t.startContainer),t.startOffset,Dn.fromDom(t.endContainer),t.endOffset)},Vl=Hl,Ul=function(n,e,t,r,o){return Bn(t,r)?m.none():Vt(t,r,e).bind((function(e){var r=e.boxes.getOr([])
return 0<r.length?(o(n,r,e.start,e.finish),m.some(Ll(m.some(Vl(t,0,t,or(t))),!0))):m.none()}))},$l=function(n,e){return{item:n,mode:e}},Gl=function(n,e,t,r){return void 0===r&&(r=Kl),n.property().parent(e).map((function(n){return $l(n,r)}))},Kl=function(n,e,t,r){return void 0===r&&(r=Xl),t.sibling(n,e).map((function(n){return $l(n,r)}))},Xl=function(n,e,t,r){void 0===r&&(r=Xl)
var o=n.property().children(e)
return t.first(o).map((function(n){return $l(n,r)}))},Yl=[{current:Gl,next:Kl,fallback:m.none()},{current:Kl,next:Xl,fallback:m.some(Gl)},{current:Xl,next:Xl,fallback:m.some(Kl)}],Jl=function(n,e,t,r,o){return void 0===o&&(o=Yl),k(o,(function(n){return n.current===t})).bind((function(t){return t.current(n,e,r,t.next).orThunk((function(){return t.fallback.bind((function(t){return Jl(n,e,t,r)}))}))}))},Ql=function(n,e,t,r,o,u){return Jl(n,e,r,o).bind((function(e){return u(e.item)?m.none():t(e.item)?m.some(e.item):Ql(n,e.item,t,e.mode,o,u)}))},Zl=function(n){return function(e){return 0===n.property().children(e).length}},nf=function(n,e,t,r){return Ql(n,e,t,Kl,{sibling:function(n,e){return n.query().prevSibling(e)},first:function(n){return 0<n.length?m.some(n[n.length-1]):m.none()}},r)},ef=function(n,e,t,r){return Ql(n,e,t,Kl,{sibling:function(n,e){return n.query().nextSibling(e)},first:function(n){return 0<n.length?m.some(n[0]):m.none()}},r)},tf=Wt(),rf=function(n,e){return nf(t=tf,n,Zl(t),e)
var t},of=function(n,e){return ef(t=tf,n,Zl(t),e)
var t},uf=Yt([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}]),cf=function(n){return Te(n,"tr")},af=H(H({},uf),{verify:function(n,e,t,r,o,u,i){return Te(r,"td,th",i).bind((function(t){return Te(e,"td,th",i).map((function(e){return Bn(t,e)?Bn(r,t)&&or(t)===o?u(e):uf.none("in same cell"):Ht(cf,[t,e]).fold((function(){return o=e,i=t,c=(r=n).getRect(o),(a=r.getRect(i)).right>c.left&&a.left<c.right?uf.success():u(e)
var r,o,i,c,a}),(function(n){return u(e)}))}))})).getOr(uf.none("default"))},cata:function(n,e,t,r,o){return n.fold(e,t,r,o)}}),lf=function(n){return"br"===Vn(n)},ff=function(n,e,t){return e(n,t).bind((function(n){return Xn(n)&&0===It(n).trim().length?ff(n,e,t):m.some(n)}))},sf=function(n,e,t,o){return ue(u=e,i=t).filter(lf).orThunk((function(){return ue(u,i-1).filter(lf)})).bind((function(e){return o.traverse(e).fold((function(){return ff(e,o.gather,n).map(o.relative)}),(function(n){return ne(e=n).bind((function(n){var t=oe(n)
return function(n,e){return N(n,r(Bn,e))}(t,e).map((function(r){return{parent:n,children:t,element:e,index:r}}))})).map((function(n){return ul.on(n.parent,n.index)}))
var e}))}))
var u,i},df=function(n,e){return{left:n.left,top:n.top+e,right:n.right,bottom:n.bottom+e}},mf=function(n,e){return{left:n.left,top:n.top-e,right:n.right,bottom:n.bottom-e}},pf=function(n,e,t){return{left:n.left+e,top:n.top+t,right:n.right+e,bottom:n.bottom+t}},gf=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},hf=function(n,e){return m.some(n.getRect(e))},vf=function(n,e,t){return Kn(e)?hf(n,e).map(gf):Xn(e)?(r=n,o=e,(0<=(u=t)&&u<or(o)?r.getRangedRect(o,u,o,u+1):0<u?r.getRangedRect(o,u-1,o,u):m.none()).map(gf)):m.none()
var r,o,u},bf=function(n,e){return Kn(e)?hf(n,e).map(gf):Xn(e)?n.getRangedRect(e,0,e,or(e)).map(gf):m.none()},wf=Yt([{none:[]},{retry:["caret"]}]),yf=function(n,e,t){return ve((function(n,e){return e(n)}),ye,e,Bc,undefined).fold(a,(function(e){return bf(n,e).exists((function(n){return r=n,(e=t).left<r.left||Math.abs(r.right-e.left)<1||e.left>r.right
var e,r}))}))},xf={point:function(n){return n.bottom},adjuster:function(n,e,t,r,o){var u=df(o,5)
return Math.abs(t.bottom-r.bottom)<1||t.top>o.bottom?wf.retry(u):t.top===o.bottom?wf.retry(df(o,1)):yf(n,e,o)?wf.retry(pf(u,5,0)):wf.none()},move:df,gather:of},Cf=function(n,e,t,r,o){return 0===o?m.some(r):(a=n,l=r.left,f=e.point(r),a.elementFromPoint(l,f).filter((function(n){return"table"===Vn(n)})).isSome()?(i=r,c=o-1,Cf(n,u=e,t,u.move(i,5),c)):n.situsFromPoint(r.left,e.point(r)).bind((function(u){return u.start.fold(m.none,(function(u){return bf(n,u).bind((function(i){return e.adjuster(n,u,i,t,r).fold(m.none,(function(r){return Cf(n,e,t,r,o-1)}))})).orThunk((function(){return m.some(r)}))}),m.none)})))
var u,i,c,a,l,f},Sf=function(n,e,t){var r,o,u,i=n.move(t,5),c=Cf(e,n,t,i,100).getOr(i)
return o=c,u=e,((r=n).point(o)>u.getInnerHeight()?m.some(r.point(o)-u.getInnerHeight()):r.point(o)<0?m.some(-r.point(o)):m.none()).fold((function(){return e.situsFromPoint(c.left,n.point(c))}),(function(t){return e.scrollBy(0,t),e.situsFromPoint(c.left,n.point(c)-t)}))},Tf={tryUp:r(Sf,{point:function(n){return n.top},adjuster:function(n,e,t,r,o){var u=mf(o,5)
return Math.abs(t.top-r.top)<1||t.bottom<o.top?wf.retry(u):t.bottom===o.top?wf.retry(mf(o,1)):yf(n,e,o)?wf.retry(pf(u,5,0)):wf.none()},move:mf,gather:rf}),tryDown:r(Sf,xf),ieTryUp:function(n,e){return n.situsFromPoint(e.left,e.top-5)},ieTryDown:function(n,e){return n.situsFromPoint(e.left,e.bottom+5)},getJumpSize:e(5)},Rf=function(n,e,t){return n.getSelection().bind((function(r){return function(n,e,t,r){var o,u,i
return(lf(e)?(o=n,u=e,(i=r).traverse(u).orThunk((function(){return ff(u,i.gather,o)})).map(i.relative)):sf(n,e,t,r)).map((function(n){return{start:n,finish:n}}))}(e,r.finish,r.foffset,t).fold((function(){return m.some(Bi(r.finish,r.foffset))}),(function(o){var u,i=n.fromSitus(o)
return u=af.verify(n,r.finish,r.foffset,i.finish,i.foffset,t.failure,e),af.cata(u,(function(n){return m.none()}),(function(){return m.none()}),(function(n){return m.some(Bi(n,0))}),(function(n){return m.some(Bi(n,or(n)))}))}))}))},Df=function(n,e,t,r,o,u){return 0===u?m.none():Bf(n,e,t,r,o).bind((function(i){var c=n.fromSitus(i),a=af.verify(n,t,r,c.finish,c.foffset,o.failure,e)
return af.cata(a,(function(){return m.none()}),(function(){return m.some(i)}),(function(i){return Bn(t,i)&&0===r?Of(n,t,r,mf,o):Df(n,e,i,0,o,u-1)}),(function(i){return Bn(t,i)&&r===or(i)?Of(n,t,r,df,o):Df(n,e,i,or(i),o,u-1)}))}))},Of=function(n,e,t,r,o){return vf(n,e,t).bind((function(e){return Af(n,o,r(e,Tf.getJumpSize()))}))},Af=function(n,e,t){var r=Tn().browser
return r.isChrome()||r.isSafari()||r.isFirefox()||r.isEdge()?e.otherRetry(n,t):r.isIE()?e.ieRetry(n,t):m.none()},Bf=function(n,e,t,r,o){return vf(n,t,r).bind((function(e){return Af(n,o,e)}))},Ef=function(n,e,t,r,o){return Te(r,"td,th",e).bind((function(r){return Te(r,"table",e).bind((function(u){return function(n,e){return ye(n,(function(n){return ne(n).exists((function(n){return Bn(n,e)}))}),void 0).isSome()}(o,u)?Rf(i=n,c=e,a=t).bind((function(n){return Df(i,c,n.element,n.offset,a,20).map(i.fromSitus)})).bind((function(n){return Te(n.finish,"td,th",e).map((function(e){return{start:r,finish:e,range:n}}))})):m.none()
var i,c,a}))}))},Pf=function(n,e,t,r,o,u){return Tn().browser.isIE()?m.none():u(r,e).orThunk((function(){return Ef(n,e,t,r,o).map((function(n){var e=n.range
return Ll(m.some(Vl(e.start,e.soffset,e.finish,e.foffset)),!0)}))}))},Mf=function(n,e){return Te(n,"tr",e).bind((function(n){return Te(n,"table",e).bind((function(t){var r=he(t,"tr")
return Bn(n,r[0])?nf(tf,t,(function(n){return ar(n).isSome()}),e).map((function(n){var e=or(n)
return Ll(m.some(Vl(n,e,n,e)),!0)})):m.none()}))}))},If=function(n,e){return Te(n,"tr",e).bind((function(n){return Te(n,"table",e).bind((function(t){var r=he(t,"tr")
return Bn(n,r[r.length-1])?ef(tf,t,(function(n){return cr(n).isSome()}),e).map((function(n){return Ll(m.some(Vl(n,0,n,0)),!0)})):m.none()}))}))},kf=function(n,e,t,r,o,u,i){return Ef(n,t,r,o,u).bind((function(n){return Ul(e,t,n.start,n.finish,i)}))},Nf=function(n,e){return Te(n,"td,th",e)}
var _f={traverse:re,gather:of,relative:ul.before,otherRetry:Tf.tryDown,ieRetry:Tf.ieTryDown,failure:af.failedDown},Wf={traverse:te,gather:rf,relative:ul.before,otherRetry:Tf.tryUp,ieRetry:Tf.ieTryUp,failure:af.failedUp},jf=function(n){return function(e){return e===n}},zf=jf(38),Ff=jf(40),Lf=function(n){return 37<=n&&n<=40},Hf={isBackward:jf(37),isForward:jf(39)},qf={isBackward:jf(39),isForward:jf(37)},Vf=function(n){return{elementFromPoint:function(e,t){return Dn.fromPoint(Dn.fromDom(n.document),e,t)},getRect:function(n){return n.dom.getBoundingClientRect()},getRangedRect:function(e,t,r,o){var u=cl.exact(e,t,r,o)
return function(n,e){var t,r,o
return 0<(o=0<(r=(t=pl(n,e)).getClientRects()).length?r[0]:t.getBoundingClientRect()).width||0<o.height?m.some(o).map(fl):m.none()}(n,u)},getSelection:function(){return Il(n).map((function(e){return ql(n,e)}))},fromSitus:function(e){var t=cl.relative(e.start,e.finish)
return ql(n,t)},situsFromPoint:function(e,t){return function(n,e,t){return r=e,o=t,u=Dn.fromDom(n.document),xl(u,r,o).map((function(n){return rl(Dn.fromDom(n.startContainer),n.startOffset,Dn.fromDom(n.endContainer),n.endOffset)}))
var r,o,u}(n,e,t).map((function(n){return Hl(n.start,n.soffset,n.finish,n.foffset)}))},clearSelection:function(){Rl(n).each((function(n){return n.removeAllRanges()}))},collapseSelection:function(e){void 0===e&&(e=!1),Il(n).each((function(t){return t.fold((function(n){return n.collapse(e)}),(function(t,r){var o=e?t:r
El(n,o,o)}),(function(t,r,o,u){var i=e?t:o,c=e?r:u
Bl(n,i,c,i,c)}))}))},setSelection:function(e){Bl(n,e.start,e.soffset,e.finish,e.foffset)},setRelativeSelection:function(e,t){El(n,e,t)},selectContents:function(e){(function(n,e){var t,r,o=(t=e,function(n,e){n.selectNodeContents(e.dom)}(r=n.document.createRange(),t),r)
Dl(n,o)})(n,e)},getInnerHeight:function(){return n.innerHeight},getScrollY:function(){var e,t,r,o
return(e=Dn.fromDom(n.document),t=void 0!==e?e.dom:document,r=t.body.scrollLeft||t.documentElement.scrollLeft,o=t.body.scrollTop||t.documentElement.scrollTop,qr(r,o)).top},scrollBy:function(e,t){var r,o,u,i
r=e,o=t,(i=(void 0!==(u=Dn.fromDom(n.document))?u.dom:document).defaultView)&&i.scrollBy(r,o)}}},Uf=function(n,e){return{rows:n,cols:e}},$f=function(n,e,t,r){var o=function(n,e,t,r){var o,u=(o=vi(m.none()),{clear:function(){return o.set(m.none())},set:function(n){return o.set(m.some(n))},isSet:function(){return o.get().isSome()},on:function(n){return o.get().each(n)}}),i=u.clear
return{clearstate:i,mousedown:function(n){r.clear(e),Nf(n.target,t).each(u.set)},mouseover:function(o){u.on((function(u){r.clearBeforeUpdate(e),Nf(o.target,t).each((function(o){Vt(u,o,t).each((function(t){var i=t.boxes.getOr([]);(1<i.length||1===i.length&&!Bn(u,o))&&(r.selectRange(e,i,t.start,t.finish),n.selectContents(o))}))}))}))},mouseup:function(n){i()}}}(Vf(n),e,t,r)
return{clearstate:o.clearstate,mousedown:o.mousedown,mouseover:o.mouseover,mouseup:o.mouseup}},Gf=function(n,e,t){var r=function(e){Ee(e,n.selected),Ee(e,n.firstSelected),Ee(e,n.lastSelected)},o=function(e){De(e,n.selected,"1")},u=function(n){i(n),t()},i=function(e){var t=he(e,n.selectedSelector)
E(t,r)}
return{clearBeforeUpdate:i,clear:u,selectRange:function(t,r,i,c){u(t),E(r,o),De(i,n.firstSelected,"1"),De(c,n.lastSelected,"1"),e(r,i,c)},selectedSelector:n.selectedSelector,firstSelectedSelector:n.firstSelectedSelector,lastSelectedSelector:n.lastSelectedSelector}},Kf=function(n){return!1===Su(Dn.fromDom(n.target),"ephox-snooker-resizer-bar")}
function Xf(e,t,o){var u=Gf(Sr,(function(t,r,u){o.targets().each((function(o){Qe(r).each((function(i){var c=ii(e),a=wr(n,Dn.fromDom(e.getDoc()),c),l=function(n,e,t){var r=it(n)
return ec(r,e).map((function(n){var e,o,u,i,c,a,l,f,s,d=Xi(r,t,!1)
return{upOrLeftCells:(e=n,o=t,u=d.slice(0,e[e.length-1].row+1),i=Yi(u,o),W(i,(function(n){var t=n.cells.slice(0,e[e.length-1].column+1)
return B(t,(function(n){return n.element}))}))),downOrRightCells:(a=n,l=t,f=(c=d).slice(a[0].row+a[0].rowspan-1,c.length),s=Yi(f,l),W(s,(function(n){var e=n.cells.slice(a[0].column+a[0].colspan-1,n.cells.length)
return B(e,(function(n){return n.element}))})))}}))}(i,o,a);(function(n,e,t,r,o){n.fire("TableSelectionChange",{cells:e,start:t,finish:r,otherCells:o})})(e,t,r,u,l)}))}))}),(function(){return function(n){n.fire("TableSelectionClear")}(e)}))
return e.on("init",(function(o){var i=e.getWin(),c=ai(e),a=si(e),l=$f(i,c,a,u),f=function(n,e,t,o){var u=Vf(n),i=function(){return o.clear(e),m.none()}
return{keydown:function(n,c,a,l,f,s){var d=n.raw,p=d.which,g=!0===d.shiftKey
return Ut(e,o.selectedSelector).fold((function(){return Ff(p)&&g?r(kf,u,e,t,_f,l,c,o.selectRange):zf(p)&&g?r(kf,u,e,t,Wf,l,c,o.selectRange):Ff(p)?r(Pf,u,t,_f,l,c,If):zf(p)?r(Pf,u,t,Wf,l,c,Mf):m.none}),(function(n){var t=function(t){return function(){return L(t,(function(t){return r=t.rows,u=t.cols,i=e,Gt(n,r,u,(c=o).firstSelectedSelector,c.lastSelectedSelector).map((function(n){return c.clearBeforeUpdate(i),c.selectRange(i,n.boxes,n.start,n.finish),n.boxes}))
var r,u,i,c})).fold((function(){return $t(e,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){var t=Ff(p)||s.isForward(p)?ul.after:ul.before
return u.setRelativeSelection(ul.on(n.first,0),t(n.table)),o.clear(e),Ll(m.none(),!0)}))}),(function(n){return m.some(Ll(m.none(),!0))}))}}
return Ff(p)&&g?t([Uf(1,0)]):zf(p)&&g?t([Uf(-1,0)]):s.isBackward(p)&&g?t([Uf(0,-1),Uf(-1,0)]):s.isForward(p)&&g?t([Uf(0,1),Uf(1,0)]):Lf(p)&&0==g?i:m.none}))()},keyup:function(n,r,u,i,c){return Ut(e,o.selectedSelector).fold((function(){var a,l,f,s,d,p,g,h=n.raw,v=h.which
return 0!=(!0===h.shiftKey)&&Lf(v)?(a=e,l=t,f=r,s=u,d=i,p=c,g=o.selectRange,Bn(f,d)&&s===p?m.none():Te(f,"td,th",l).bind((function(n){return Te(d,"td,th",l).bind((function(e){return Ul(a,l,n,e,g)}))}))):m.none()}),m.none)}}}(i,c,a,u),s=function(n,e,t,r){var o=Vf(n)
return function(n,u){r.clearBeforeUpdate(e),Vt(n,u,t).each((function(n){var t=n.boxes.getOr([])
r.selectRange(e,t,n.start,n.finish),o.selectContents(u),o.collapseSelection()}))}}(i,c,a,u)
e.on("TableSelectorChange",(function(n){return s(n.start,n.finish)}))
var d,p,g=function(n,t){!0===n.raw.shiftKey&&(t.kill&&n.kill(),t.selection.each((function(n){var t=cl.relative(n.start,n.finish),r=pl(i,t)
e.selection.setRng(r)})))},h=function(n){return 0===n.button},v=(d=vi(Dn.fromDom(c)),p=vi(0),{touchEnd:function(n){var e,t,r=Dn.fromDom(n.target)
"td"!==Vn(r)&&"th"!==Vn(r)||(e=d.get(),t=p.get(),Bn(e,r)&&n.timeStamp-t<300&&(n.preventDefault(),s(r,r))),d.set(r),p.set(n.timeStamp)}})
e.on("dragstart",(function(n){l.clearstate()})),e.on("mousedown",(function(n){h(n)&&Kf(n)&&l.mousedown(wu(n))})),e.on("mouseover",(function(n){var e;(void 0===(e=n).buttons||$a.browser.isEdge()&&0===e.buttons||0!=(1&e.buttons))&&Kf(n)&&l.mouseover(wu(n))})),e.on("mouseup",(function(n){h(n)&&Kf(n)&&l.mouseup(wu(n))})),e.on("touchend",v.touchEnd),e.on("keyup",(function(n){var t,r,o,u=wu(n)
u.raw.shiftKey&&Lf(u.raw.which)&&(t=e.selection.getRng(),r=Dn.fromDom(t.startContainer),o=Dn.fromDom(t.endContainer),f.keyup(u,r,t.startOffset,o,t.endOffset).each((function(n){g(u,n)})))})),e.on("keydown",(function(n){var r=wu(n)
t().each((function(n){return n.hideBars()}))
var o=e.selection.getRng(),u=Dn.fromDom(o.startContainer),i=Dn.fromDom(o.endContainer),c=Mr(Hf,qf)(Dn.fromDom(e.selection.getStart()))
f.keydown(r,u,o.startOffset,i,o.endOffset,c).each((function(n){g(r,n)})),t().each((function(n){return n.showBars()}))})),e.on("NodeChange",(function(){var t=e.selection,r=Dn.fromDom(t.getStart()),o=Dn.fromDom(t.getEnd())
Ht(Qe,[r,o]).fold((function(){return u.clear(c)}),n)}))})),{clear:u.clear}}tr.add("table",(function(e){var t=function(n,e,t){return{get:function(){return Kt(n(),t).fold((function(){return e().map(er).getOrThunk(Zt)}),(function(n){return nr(n)}))}}}((function(){return ai(e)}),(function(){return da(hi(e))}),Sr.selectedSelector),r=function(n,e){var t=vi(m.none()),r=vi([]),o=function(){return da(hi(n)).bind((function(n){return Qe(n).map((function(t){return"caption"===Vn(n)?Tr(n):Rr(e,t,n)}))}))},u=function(){t.set(U(o)()),E(r.get(),(function(n){return n()}))},i=function(n,e){var o=function(){return t.get().fold((function(){n.setDisabled(!0)}),(function(t){n.setDisabled(e(t))}))}
return o(),r.set(r.get().concat([o])),function(){r.set(P(r.get(),(function(n){return n!==o})))}}
return n.on("NodeChange ExecCommand TableSelectorChange",u),{onSetupTable:function(n){return i(n,(function(n){return!1}))},onSetupCellOrRow:function(n){return i(n,(function(n){return"caption"===Vn(n.element)}))},onSetupPasteable:function(n){return function(e){return i(e,(function(e){return"caption"===Vn(e.element)||n().isNone()}))}},onSetupMergeable:function(n){return i(n,(function(n){return n.mergable.isNone()}))},onSetupUnmergeable:function(n){return i(n,(function(n){return n.unmergable.isNone()}))},resetTargets:u,targets:function(){return t.get()}}}(e,t),o=Ai(e),u=Xf(e,o.lazyResize,r),i=function(e,t,r){var o=function(n){return"table"===Vn(ai(n))},u=ii(e),i=function(n,t,r,o){return function(i,c){mi(i)
var a=o(),l=Dn.fromDom(e.getDoc()),f=wr(r,l,u),s=Si(e,i)
return t(i)?n(a,i,c,f,s).bind((function(n){return E(n.newRows,(function(n){Lu(e,n.dom)})),E(n.newCells,(function(n){Hu(e,n.dom)})),n.cursor.map((function(n){var t=Ii(ki,n),r=e.dom.createRng()
return r.setStart(t.element.dom,t.offset),r.setEnd(t.element.dom,t.offset),r}))})):m.none()}},c=i(Gc,(function(n){return!1===o(e)||1<uu(n).rows}),n,t),a=i($c,(function(n){return!1===o(e)||1<uu(n).columns}),n,t),f=i(Hc,l,n,t),s=i(qc,l,n,t),d=i(Vc,l,Ni,t),p=i(Uc,l,Ni,t),g=i(Yc,l,n,t),h=i(Jc,l,n,t),v=i(Zc,l,n,t),b=i(na,l,n,t),w=i(ea,l,n,t),y=i(ta,l,n,t),x=i(Qc,l,n,t),C=function(n,e){return Wn(n,"type").filter((function(n){return D(e,n)}))}
return{deleteRow:c,deleteColumn:a,insertRowsBefore:f,insertRowsAfter:s,insertColumnsBefore:d,insertColumnsAfter:p,mergeCells:g,unmergeCells:h,pasteColsBefore:v,pasteColsAfter:b,pasteRowsBefore:w,pasteRowsAfter:y,pasteCells:x,setTableCellType:function(n,e){return C(e,["td","th"]).each((function(e){var t=B(ma(hi(n),r),(function(n){return n.dom}))
aa(n.dom,t,e,null)}))},setTableRowType:function(n,e){return C(e,["header","body","footer"]).each((function(e){B(pa(hi(n),Sr.selected),(function(t){return la(n,t.dom,e)}))}))},makeColumnHeader:i(Kc,l,n,t),unmakeColumnHeader:i(Xc,l,n,t),getTableRowType:function(n){var e=pa(hi(n),Sr.selected)
if(0<e.length){var t=B(e,(function(n){return ia(0,n.dom)})),r=D(t,"header"),o=D(t,"footer")
if(r||o){var u=D(t,"body")
return!r||u||o?r||u||!o?"":"footer":"header"}return"body"}},getTableCellType:function(n){return Fc(ma(hi(n),r),(function(n){return"th"===Vn(n)})).getOr("")},getTableColType:ra}}(e,o.lazyWire,t),c=function(){var n=vi(m.none()),e=vi(m.none()),t=function(n){n.set(m.none())}
return{getRows:n.get,setRows:function(r){n.set(r),t(e)},clearRows:function(){return t(n)},getColumns:e.get,setColumns:function(r){e.set(r),t(n)},clearColumns:function(){return t(e)}}}()
return Qa(e,i,u,t,c),function(n,e,t){var r=si(n)
kn({mceTableRowType:function(){return e.getTableRowType(n)},mceTableCellType:function(){return e.getTableCellType(n)},mceTableColType:function(){return sa(hi(n)).bind((function(n){return Qe(n,r).map((function(r){var o=Rr(t,r,n)
return e.getTableColType(r,o)}))})).getOr("")}},(function(e,t){return n.addQueryValueHandler(t,e)}))}(e,i,t),function(e,t,r,o){e.on("BeforeGetContent",(function(r){!0===r.selection&&Qt(t.get(),n,(function(n){r.preventDefault(),Qe(n[0]).map(dr).map((function(n){return[rr(n,"[data-mce-selected]")]})).each((function(n){var t
r.content="text"===r.format?B(n,(function(n){return n.dom.innerText})).join(""):(t=e,B(n,(function(n){return t.selection.serializer.serialize(n.dom,{})})).join(""))}))}),n)})),e.on("BeforeSetContent",(function(n){!0===n.selection&&!0===n.paste&&m.from(e.dom.getParent(e.selection.getStart(),"th,td")).each((function(t){var u=Dn.fromDom(t)
Qe(u).each((function(t){var i,c,a,l,f,s,d=P((i=n.content,(c=document.createElement("div")).innerHTML=i,oe(Dn.fromDom(c))),(function(n){return"meta"!==Vn(n)}))
1===d.length&&(s=d[0],"table"===Vn(s))&&(n.preventDefault(),a=Dn.fromDom(e.getDoc()),l=yr(a),f={element:u,clipboard:d[0],generators:l},r.pasteCells(t,f).each((function(n){e.selection.setRng(n),e.focus(),o.clear(t)})))}))}))}))}(e,t,i,u),function(n,e,t){var r=function(e){return function(){return n.execCommand(e)}},o=function(e){var t=e.numRows,r=e.numColumns
n.undoManager.transact((function(){ba(n,r,t,0,0)})),n.addVisual()},u={text:"Table properties",onSetup:e.onSetupTable,onAction:r("mceTableProps")},i={text:"Delete table",icon:"table-delete-table",onSetup:e.onSetupTable,onAction:r("mceTableDelete")}
n.ui.registry.addMenuItem("tableinsertrowbefore",{text:"Insert row before",icon:"table-insert-row-above",onAction:r("mceTableInsertRowBefore"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertrowafter",{text:"Insert row after",icon:"table-insert-row-after",onAction:r("mceTableInsertRowAfter"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeleterow",{text:"Delete row",icon:"table-delete-row",onAction:r("mceTableDeleteRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablerowprops",{text:"Row properties",icon:"table-row-properties",onAction:r("mceTableRowProps"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutrow",{text:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopyrow",{text:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepasterowbefore",{text:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:e.onSetupPasteable(t.getRows)}),n.ui.registry.addMenuItem("tablepasterowafter",{text:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:e.onSetupPasteable(t.getRows)}),n.ui.registry.addMenuItem("tableinsertcolumnbefore",{text:"Insert column before",icon:"table-insert-column-before",onAction:r("mceTableInsertColBefore"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertcolumnafter",{text:"Insert column after",icon:"table-insert-column-after",onAction:r("mceTableInsertColAfter"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeletecolumn",{text:"Delete column",icon:"table-delete-column",onAction:r("mceTableDeleteCol"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutcolumn",{text:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopycolumn",{text:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepastecolumnbefore",{text:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:e.onSetupPasteable(t.getColumns)}),n.ui.registry.addMenuItem("tablepastecolumnafter",{text:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:e.onSetupPasteable(t.getColumns)}),n.ui.registry.addMenuItem("tablecellprops",{text:"Cell properties",icon:"table-cell-properties",onAction:r("mceTableCellProps"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablemergecells",{text:"Merge cells",icon:"table-merge-cells",onAction:r("mceTableMergeCells"),onSetup:e.onSetupMergeable}),n.ui.registry.addMenuItem("tablesplitcells",{text:"Split cell",icon:"table-split-cells",onAction:r("mceTableSplitCells"),onSetup:e.onSetupUnmergeable}),!1===n.getParam("table_grid",!0,"boolean")?n.ui.registry.addMenuItem("inserttable",{text:"Table",icon:"table",onAction:r("mceInsertTable")}):n.ui.registry.addNestedMenuItem("inserttable",{text:"Table",icon:"table",getSubmenuItems:function(){return[{type:"fancymenuitem",fancytype:"inserttable",onAction:o}]}}),n.ui.registry.addMenuItem("inserttabledialog",{text:"Insert table",icon:"table",onAction:r("mceInsertTable")}),n.ui.registry.addMenuItem("tableprops",u),n.ui.registry.addMenuItem("deletetable",i),n.ui.registry.addNestedMenuItem("row",{type:"nestedmenuitem",text:"Row",getSubmenuItems:function(){return"tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter"}}),n.ui.registry.addNestedMenuItem("column",{type:"nestedmenuitem",text:"Column",getSubmenuItems:function(){return"tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter"}}),n.ui.registry.addNestedMenuItem("cell",{type:"nestedmenuitem",text:"Cell",getSubmenuItems:function(){return"tablecellprops tablemergecells tablesplitcells"}}),n.ui.registry.addContextMenu("table",{update:function(){return e.resetTargets(),e.targets().fold((function(){return""}),(function(n){return"caption"===Vn(n.element)?"tableprops deletetable":"cell row column | advtablesort | tableprops deletetable"}))}})}(e,r,c),function(n,e,t){n.ui.registry.addMenuButton("table",{tooltip:"Table",icon:"table",fetch:function(n){return n("inserttable | cell row column | advtablesort | tableprops deletetable")}})
var r=function(e){return function(){return n.execCommand(e)}}
n.ui.registry.addButton("tableprops",{tooltip:"Table properties",onAction:r("mceTableProps"),icon:"table",onSetup:e.onSetupTable}),n.ui.registry.addButton("tabledelete",{tooltip:"Delete table",onAction:r("mceTableDelete"),icon:"table-delete-table",onSetup:e.onSetupTable}),n.ui.registry.addButton("tablecellprops",{tooltip:"Cell properties",onAction:r("mceTableCellProps"),icon:"table-cell-properties",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablemergecells",{tooltip:"Merge cells",onAction:r("mceTableMergeCells"),icon:"table-merge-cells",onSetup:e.onSetupMergeable}),n.ui.registry.addButton("tablesplitcells",{tooltip:"Split cell",onAction:r("mceTableSplitCells"),icon:"table-split-cells",onSetup:e.onSetupUnmergeable}),n.ui.registry.addButton("tableinsertrowbefore",{tooltip:"Insert row before",onAction:r("mceTableInsertRowBefore"),icon:"table-insert-row-above",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertrowafter",{tooltip:"Insert row after",onAction:r("mceTableInsertRowAfter"),icon:"table-insert-row-after",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tabledeleterow",{tooltip:"Delete row",onAction:r("mceTableDeleteRow"),icon:"table-delete-row",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablerowprops",{tooltip:"Row properties",onAction:r("mceTableRowProps"),icon:"table-row-properties",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolbefore",{tooltip:"Insert column before",onAction:r("mceTableInsertColBefore"),icon:"table-insert-column-before",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolafter",{tooltip:"Insert column after",onAction:r("mceTableInsertColAfter"),icon:"table-insert-column-after",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tabledeletecol",{tooltip:"Delete column",onAction:r("mceTableDeleteCol"),icon:"table-delete-column",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablecutrow",{tooltip:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablecopyrow",{tooltip:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablepasterowbefore",{tooltip:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:e.onSetupPasteable(t.getRows)}),n.ui.registry.addButton("tablepasterowafter",{tooltip:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:e.onSetupPasteable(t.getRows)}),n.ui.registry.addButton("tablecutcol",{tooltip:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablecopycol",{tooltip:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablepastecolbefore",{tooltip:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:e.onSetupPasteable(t.getColumns)}),n.ui.registry.addButton("tablepastecolafter",{tooltip:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:e.onSetupPasteable(t.getColumns)}),n.ui.registry.addButton("tableinsertdialog",{tooltip:"Insert table",onAction:r("mceInsertTable"),icon:"table"})}(e,r,c),function(n){var e=n.getParam("table_toolbar","tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol")
0<e.length&&n.ui.registry.addContextToolbar("table",{predicate:function(e){return n.dom.is(e,"table")&&n.getBody().contains(e)},items:e,scope:"node",position:"node"})}(e),e.on("PreInit",(function(){e.serializer.addTempAttr(Sr.firstSelected),e.serializer.addTempAttr(Sr.lastSelected),function(n){n.formatter.register(Za)}(e)})),function(n){return n.getParam("table_tab_navigation",!0,"boolean")}(e)&&e.on("keydown",(function(n){Fl(n,e,i)})),e.on("remove",(function(){o.destroy()})),function(n,e,t,r){return{insertTable:function(e,t,r){return void 0===r&&(r={}),wa(n,t,e,r,"Invalid values for insertTable - rows and columns values are required to insert a table.")},setClipboardRows:xa(e.setRows),getClipboardRows:ya(e.getRows),setClipboardCols:xa(e.setColumns),getClipboardCols:ya(e.getColumns),resizeHandler:t,selectionTargets:r}}(e,c,o,r)}))}()

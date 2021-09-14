!function(){"use strict"
var n=function(){},t=function(n){return function(){return n}},e=function(n){return n}
function r(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e]
return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o=t.concat(e)
return n.apply(null,o)}}var o,u,i,c=function(n){return function(t){return!n(t)}},a=t(!1),l=t(!0),f=function(){return s},s=(o=function(n){return n.isNone()},{fold:function(n,t){return n()},is:a,isSome:a,isNone:l,getOr:i=function(n){return n},getOrThunk:u=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:t(null),getOrUndefined:t(void 0),or:i,orThunk:u,map:f,each:n,bind:f,exists:a,forall:l,filter:f,equals:o,equals_:o,toArray:function(){return[]},toString:t("none()")}),d=function(n){var e=t(n),r=function(){return u},o=function(t){return t(n)},u={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:l,isNone:a,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:r,orThunk:r,map:function(t){return d(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?u:s},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(a,(function(t){return e(n,t)}))}}
return u},m={some:d,none:f,from:function(n){return null==n?s:d(n)}},p=function(n){return function(t){return r=typeof(e=t),(null===e?"null":"object"==r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===n
var e,r}},g=function(n){return function(t){return typeof t===n}},h=p("string"),v=p("object"),b=p("array"),w=g("boolean"),y=(void 0,function(n){return undefined===n}),x=function(n){return!(null===(t=n)||void 0===t)
var t},C=g("function"),S=g("number"),T=Array.prototype.slice,R=Array.prototype.indexOf,D=Array.prototype.push,O=function(n,t){return e=n,r=t,-1<R.call(e,r)
var e,r},A=function(n,t){for(var e=0,r=n.length;e<r;e++)if(t(n[e],e))return!0
return!1},k=function(n,t){for(var e=[],r=0;r<n;r++)e.push(t(r))
return e},B=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var u=n[o]
r[o]=t(u,o)}return r},E=function(n,t){for(var e=0,r=n.length;e<r;e++)t(n[e],e)},P=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var u=n[r]
t(u,r)&&e.push(u)}return e},I=function(n,t,e){return function(n,t){for(var e=n.length-1;0<=e;e--)t(n[e])}(n,(function(n){e=t(e,n)})),e},M=function(n,t,e){return E(n,(function(n){e=t(e,n)})),e},N=function(n,t){return function(n,t,e){for(var r=0,o=n.length;r<o;r++){var u=n[r]
if(t(u,r))return m.some(u)
if(e(u,r))break}return m.none()}(n,t,a)},W=function(n,t){for(var e=0,r=n.length;e<r;e++)if(t(n[e],e))return m.some(e)
return m.none()},L=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!b(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n)
D.apply(t,n[e])}return t},z=function(n,t){return L(B(n,t))},_=function(n,t){for(var e=0,r=n.length;e<r;++e)if(!0!==t(n[e],e))return!1
return!0},j=function(n,t){for(var e={},r=0,o=n.length;r<o;r++){var u=n[r]
e[String(u)]=t(u,r)}return e},F=function(n){return[n]},H=function(n,t){return 0<=t&&t<n.length?m.some(n[t]):m.none()},q=function(n){return H(n,0)},V=function(n){return H(n,n.length-1)},U=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e)
if(r.isSome())return r}return m.none()},$=function(){return($=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])
return n}).apply(this,arguments)}
function G(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length
var r=Array(n),o=0
for(t=0;t<e;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i]
return r}var K,X=function(n){var t,e=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return e||(e=!0,t=n.apply(null,r)),t}},Y=function(){return J(0,0)},J=function(n,t){return{major:n,minor:t}},Q=function(n,t){var e=String(t).toLowerCase()
return 0===n.length?Y():function(n,t){var e=function(n,t){for(var e=0;e<n.length;e++){var r=n[e]
if(r.test(t))return r}}(n,t)
if(!e)return{major:0,minor:0}
var r=function(n){return Number(t.replace(e,"$"+n))}
return J(r(1),r(2))}(n,e)},Z=Y,nn=function(n,t){var e=String(t).toLowerCase()
return N(n,(function(n){return n.search(e)}))},tn=function(n,t,e){return""===t||n.length>=t.length&&n.substr(e,e+t.length)===t},en=function(n,t){return-1!==n.indexOf(t)},rn=function(n,t){return tn(n,t,0)},on=function(n,t){return tn(n,t,n.length-t.length)},un=(K=/^\s+|\s+$/g,function(n){return n.replace(K,"")}),cn=function(n){return 0<n.length},an=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,ln=function(n){return function(t){return en(t,n)}},fn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return en(n,"edge/")&&en(n,"chrome")&&en(n,"safari")&&en(n,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,an],search:function(n){return en(n,"chrome")&&!en(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return en(n,"msie")||en(n,"trident")}},{name:"Opera",versionRegexes:[an,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:ln("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:ln("firefox")},{name:"Safari",versionRegexes:[an,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(en(n,"safari")||en(n,"mobile/"))&&en(n,"applewebkit")}}],sn=[{name:"Windows",search:ln("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return en(n,"iphone")||en(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:ln("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:ln("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:ln("linux"),versionRegexes:[]},{name:"Solaris",search:ln("sunos"),versionRegexes:[]},{name:"FreeBSD",search:ln("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:ln("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],dn={browsers:t(fn),oses:t(sn)},mn="Firefox",pn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isEdge:r("Edge"),isChrome:r("Chrome"),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r(mn),isSafari:r("Safari")}},gn=function(){return pn({current:void 0,version:Z()})},hn=pn,vn=(t("Edge"),t("Chrome"),t("IE"),t("Opera"),t(mn),t("Safari"),"Windows"),bn="Android",wn="Solaris",yn="FreeBSD",xn="ChromeOS",Cn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isWindows:r(vn),isiOS:r("iOS"),isAndroid:r(bn),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(wn),isFreeBSD:r(yn),isChromeOS:r(xn)}},Sn=function(){return Cn({current:void 0,version:Z()})},Tn=Cn,Rn=(t(vn),t("iOS"),t(bn),t("Linux"),t("OSX"),t(wn),t(yn),t(xn),function(n,e){var r,o,u,i,c,a,l,f,s,d,m,p,g=dn.browsers(),h=dn.oses(),v=function(n,t){return nn(n,t).map((function(n){var e=Q(n.versionRegexes,t)
return{current:n.name,version:e}}))}(g,n).fold(gn,hn),b=function(n,t){return nn(n,t).map((function(n){var e=Q(n.versionRegexes,t)
return{current:n.name,version:e}}))}(h,n).fold(Sn,Tn)
return{browser:v,os:b,deviceType:(o=v,u=n,i=e,c=(r=b).isiOS()&&!0===/ipad/i.test(u),a=r.isiOS()&&!c,l=r.isiOS()||r.isAndroid(),f=l||i("(pointer:coarse)"),s=c||!a&&l&&i("(min-device-width:768px)"),d=a||l&&!s,m=o.isSafari()&&r.isiOS()&&!1===/safari/i.test(u),p=!d&&!s&&!m,{isiPad:t(c),isiPhone:t(a),isTablet:t(s),isPhone:t(d),isTouch:t(f),isAndroid:r.isAndroid,isiOS:r.isiOS,isWebView:t(m),isDesktop:t(p)})}}),Dn=function(n){return window.matchMedia(n).matches},On=X((function(){return Rn(navigator.userAgent,Dn)})),An=function(){return On()},kn=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},Bn={fromHtml:function(n,t){var e=(t||document).createElement("div")
if(e.innerHTML=n,!e.hasChildNodes()||1<e.childNodes.length)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return kn(e.childNodes[0])},fromTag:function(n,t){var e=(t||document).createElement(n)
return kn(e)},fromText:function(n,t){var e=(t||document).createTextNode(n)
return kn(e)},fromDom:kn,fromPoint:function(n,t,e){return m.from(n.dom.elementFromPoint(t,e)).map(kn)}},En=function(n,t){var e=n.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},Pn=function(n){return 1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount},In=function(n,t){return n.dom===t.dom},Mn=function(n,t){return An().browser.isIE()?function(n,t){return e=n.dom,r=t.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(e.compareDocumentPosition(r)&o)
var e,r,o}(n,t):(e=t,(r=n.dom)!==(o=e.dom)&&r.contains(o))
var e,r,o},Nn=En,Wn=Object.keys,Ln=Object.hasOwnProperty,zn=function(n,t){for(var e=Wn(n),r=0,o=e.length;r<o;r++){var u=e[r]
t(n[u],u)}},_n=function(n,t){return jn(n,(function(n,e){return{k:e,v:t(n,e)}}))},jn=function(n,t){var e={}
return zn(n,(function(n,r){var o=t(n,r)
e[o.k]=o.v})),e},Fn=function(t,e){var r,o,u,i,c={}
return r=e,i=c,o=function(n,t){i[t]=n},u=n,zn(t,(function(n,t){(r(n,t)?o:u)(n,t)})),c},Hn=function(n,t){var e=[]
return zn(n,(function(n,r){e.push(t(n,r))})),e},qn=function(n){return Wn(n).length},Vn=function(n,t){return Un(n,t)?m.from(n[t]):m.none()},Un=function(n,t){return Ln.call(n,t)},$n=function(n,t){return Un(n,t)&&void 0!==n[t]&&null!==n[t]},Gn=["tfoot","thead","tbody","colgroup"],Kn=function(n,t,e){return{element:n,rowspan:t,colspan:e}},Xn=function(n,t,e){return{element:n,cells:t,section:e}},Yn=function(n,t,e){return{element:n,isNew:t,isLocked:e}},Jn=function(n,t){return{cells:n,section:t}},Qn=("undefined"!=typeof window||Function("return this;")(),function(n){return n.dom.nodeName.toLowerCase()}),Zn=function(n){return n.dom.nodeType},nt=function(n){return function(t){return Zn(t)===n}},tt=function(n){return 8===Zn(n)||"#comment"===Qn(n)},et=nt(1),rt=nt(3),ot=nt(9),ut=nt(11),it=function(n){return function(t){return et(t)&&Qn(t)===n}},ct=function(n){return Bn.fromDom(n.dom.ownerDocument)},at=function(n){return ot(n)?n:ct(n)},lt=function(n){return m.from(n.dom.parentNode).map(Bn.fromDom)},ft=function(n,t){for(var e=C(t)?t:a,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var u=r.parentNode,i=Bn.fromDom(u)
if(o.push(i),!0===e(i))break
r=u}return o},st=function(n){return m.from(n.dom.previousSibling).map(Bn.fromDom)},dt=function(n){return m.from(n.dom.nextSibling).map(Bn.fromDom)},mt=function(n){return B(n.dom.childNodes,Bn.fromDom)},pt=function(n,t){var e=n.dom.childNodes
return m.from(e[t]).map(Bn.fromDom)},gt=C(Element.prototype.attachShadow)&&C(Node.prototype.getRootNode),ht=t(gt),vt=gt?function(n){return Bn.fromDom(n.dom.getRootNode())}:at,bt=function(n){return Bn.fromDom(n.dom.host)},wt=function(n){var t=rt(n)?n.dom.parentNode:n.dom
if(null==t||null===t.ownerDocument)return!1
var e,r,o=t.ownerDocument
return function(n){var t,e=vt(n)
return ut(t=e)&&x(t.dom.host)?m.some(e):m.none()}(Bn.fromDom(t)).fold((function(){return o.body.contains(t)}),(e=wt,r=bt,function(n){return e(r(n))}))},yt=function(n){var t=n.dom.body
if(null==t)throw new Error("Body is not available yet")
return Bn.fromDom(t)},xt=function(n,t){var e=[]
return E(mt(n),(function(n){t(n)&&(e=e.concat([n])),e=e.concat(xt(n,t))})),e},Ct=function(n,t,e){return r=function(n){return En(n,t)},P(ft(n,e),r)
var r},St=function(n,t){return e=function(n){return En(n,t)},P(mt(n),e)
var e},Tt=function(n,t){return e=t,o=void 0===(r=n)?document:r.dom,Pn(o)?[]:B(o.querySelectorAll(e),Bn.fromDom)
var e,r,o}
function Rt(n,t,e,r,o){return n(e,r)?m.some(e):C(o)&&o(e)?m.none():t(e,r,o)}var Dt,Ot,At=function(n,t,e){for(var r=n.dom,o=C(e)?e:a;r.parentNode;){r=r.parentNode
var u=Bn.fromDom(r)
if(t(u))return m.some(u)
if(o(u))break}return m.none()},kt=function(n,t,e){return At(n,(function(n){return En(n,t)}),e)},Bt=function(n,t){return e=function(n){return En(n,t)},N(n.dom.childNodes,(function(n){return e(Bn.fromDom(n))})).map(Bn.fromDom)
var e},Et=function(n,t){return e=t,o=void 0===(r=n)?document:r.dom,Pn(o)?m.none():m.from(o.querySelector(e)).map(Bn.fromDom)
var e,r,o},Pt=function(n,t,e){return Rt(En,kt,n,t,e)},It=function(n,t,e){if(!(h(e)||w(e)||S(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,e+"")},Mt=function(n,t,e){It(n.dom,t,e)},Nt=function(n,t){var e=n.dom
zn(t,(function(n,t){It(e,t,n)}))},Wt=function(n,t){var e=n.dom.getAttribute(t)
return null===e?void 0:e},Lt=function(n,t){return m.from(Wt(n,t))},zt=function(n,t){n.dom.removeAttribute(t)},_t=function(n){return M(n.dom.attributes,(function(n,t){return n[t.name]=t.value,n}),{})},jt=function(n){return void 0!==n.style&&C(n.style.getPropertyValue)},Ft=function(n,t,e){if(!h(e))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",e,":: Element ",n),new Error("CSS value must be a string: "+e)
jt(n)&&n.style.setProperty(t,e)},Ht=function(n,t,e){var r=n.dom
Ft(r,t,e)},qt=function(n,t){var e=n.dom
zn(t,(function(n,t){Ft(e,t,n)}))},Vt=function(n,t){var e=n.dom,r=window.getComputedStyle(e).getPropertyValue(t)
return""!==r||wt(n)?r:Ut(e,t)},Ut=function(n,t){return jt(n)?n.style.getPropertyValue(t):""},$t=function(n,t){var e=n.dom,r=Ut(e,t)
return m.from(r).filter((function(n){return 0<n.length}))},Gt=function(n,t){var e,r,o=n.dom
r=t,jt(e=o)&&e.style.removeProperty(r),Lt(n,"style").map(un).is("")&&zt(n,"style")},Kt=function(n,t,e){return void 0===e&&(e=0),Lt(n,t).map((function(n){return parseInt(n,10)})).getOr(e)},Xt=function(n,t){return Kt(n,t,1)},Yt=function(n){return 1<Xt(n,"colspan")},Jt=function(n){return 1<Xt(n,"rowspan")},Qt=function(n,t){return parseInt(Vt(n,t),10)},Zt=t(10),ne=t(10),te=function(n,t){return ee(n,t,l)},ee=function(n,t,e){return z(mt(n),(function(n){return En(n,t)?e(n)?[n]:[]:ee(n,t,e)}))},re=function(n,t){return function(n,t,e){return void 0===e&&(e=a),e(t)?m.none():O(n,Qn(t))?m.some(t):kt(t,n.join(","),(function(n){return En(n,"table")||e(n)}))}(["td","th"],n,t)},oe=function(n){return te(n,"th,td")},ue=function(n){return En(n,"colgroup")?St(n,"col"):z(ae(n),(function(n){return St(n,"col")}))},ie=function(n,t){return Pt(n,"table",t)},ce=function(n){return te(n,"tr")},ae=function(n){return ie(n).fold(t([]),(function(n){return St(n,"colgroup")}))},le=function(n,t){return B(n,(function(n){if("colgroup"===Qn(n)){var e=B(ue(n),(function(n){var t=Kt(n,"span",1)
return Kn(n,1,t)}))
return Xn(n,e,"colgroup")}return e=B(oe(n),(function(n){var t=Kt(n,"rowspan",1),e=Kt(n,"colspan",1)
return Kn(n,t,e)})),Xn(n,e,t(n))}))},fe=function(n){return lt(n).map((function(n){var t=Qn(n)
return O(Gn,t)?t:"tbody"})).getOr("tbody")},se=function(n){var t=ce(n),e=G(ae(n),t)
return le(e,fe)},de=function(n,t,e){var r=n.cells,o=r.slice(0,t),u=r.slice(t),i=o.concat(e).concat(u)
return ge(n,i)},me=function(n,t,e){return de(n,t,[e])},pe=function(n,t,e){n.cells[t]=e},ge=function(n,t){return Jn(t,n.section)},he=function(n,t){var e=n.cells,r=B(e,t)
return Jn(r,n.section)},ve=function(n,t){return n.cells[t]},be=function(n,t){return ve(n,t).element},we=function(n){return n.cells.length},ye=function(n){var t=function(n,t){for(var e=[],r=[],o=0,u=n.length;o<u;o++){var i=n[o];(t(i)?e:r).push(i)}return{pass:e,fail:r}}(n,(function(n){return"colgroup"===n.section}))
return{rows:t.fail,cols:t.pass}},xe="data-snooker-locked-cols",Ce=function(n){return Lt(n,xe).bind((function(n){return m.from(n.match(/\d+/g))})).map((function(n){return j(n,l)}))},Se=function(n){var t,e,r=M(ye(n).rows,(function(n,t){return E(t.cells,(function(t,e){t.isLocked&&(n[e]=!0)})),n}),{})
return t=Hn(r,(function(n,t){return parseInt(t,10)})),(e=T.call(t,0)).sort(undefined),e},Te=function(n,t){return n+","+t},Re=function(n,t){var e=z(n.all,(function(n){return n.cells}))
return P(e,t)},De=function(n){var t={},e=[],r={},o=q(n).map((function(n){return n.element})).bind(ie).bind(Ce).getOr({}),u=0,i=0,c=0
return E(n,(function(n){var a,l,f
"colgroup"===n.section?(l={},f=0,E(n.cells,(function(n){var t=n.colspan
k(t,(function(e){var r=f+e
l[r]={element:n.element,colspan:t,column:r}})),f+=t})),r=l):(a=[],E(n.cells,(function(n){for(var e=0;void 0!==t[Te(c,e)];)e++
for(var r=$n(o,e.toString()),u={element:n.element,rowspan:n.rowspan,colspan:n.colspan,row:c,column:e,isLocked:r},l=0;l<n.colspan;l++)for(var f=0;f<n.rowspan;f++){var s=e+l,d=Te(c+f,s)
t[d]=u,i=Math.max(i,s+1)}a.push(u)})),u++,e.push(Xn(n.element,a,n.section)),c++)})),{grid:{rows:u,columns:i},access:t,all:e,columns:r}},Oe=function(n){var t=se(n)
return De(t)},Ae=De,ke=function(n,t,e){var r=n.access[Te(t,e)]
return void 0!==r?m.some(r):m.none()},Be=function(n,t,e){var r=Re(n,(function(n){return e(t,n.element)}))
return 0<r.length?m.some(r[0]):m.none()},Ee=Re,Pe=function(n){return z(n.all,(function(n){return n.cells}))},Ie=function(n){return t=n.columns,Hn(t,(function(n){return n}))
var t},Me=function(n){return 0<Wn(n.columns).length},Ne=function(n,t){return m.from(n.columns[t])},We=function(n,t){var e=t.column,r=t.column+t.colspan-1,o=t.row,u=t.row+t.rowspan-1
return e<=n.finishCol&&r>=n.startCol&&o<=n.finishRow&&u>=n.startRow},Le=function(n,t){return t.column>=n.startCol&&t.column+t.colspan-1<=n.finishCol&&t.row>=n.startRow&&t.row+t.rowspan-1<=n.finishRow},ze=function(n,t,e){var r=Be(n,t,In),o=Be(n,e,In)
return r.bind((function(n){return o.map((function(t){return e=n,r=t,{startRow:Math.min(e.row,r.row),startCol:Math.min(e.column,r.column),finishRow:Math.max(e.row+e.rowspan-1,r.row+r.rowspan-1),finishCol:Math.max(e.column+e.colspan-1,r.column+r.colspan-1)}
var e,r}))}))},_e=function(n,t,e){return ze(n,t,e).map((function(t){var e=Ee(n,r(We,t))
return B(e,(function(n){return n.element}))}))},je=function(n,t){return Be(n,t,(function(n,t){return Mn(t,n)})).map((function(n){return n.element}))},Fe=function(n,t,e,r,o){var u=He(n),i=In(n,e)?m.some(t):je(u,t),c=In(n,o)?m.some(r):je(u,r)
return i.bind((function(n){return c.bind((function(t){return _e(u,n,t)}))}))},He=Oe,qe=function(n,t){lt(n).each((function(e){e.dom.insertBefore(t.dom,n.dom)}))},Ve=function(n,t){dt(n).fold((function(){lt(n).each((function(n){$e(n,t)}))}),(function(n){qe(n,t)}))},Ue=function(n,t){pt(n,0).fold((function(){$e(n,t)}),(function(e){n.dom.insertBefore(t.dom,e.dom)}))},$e=function(n,t){n.dom.appendChild(t.dom)},Ge=function(n,t){qe(n,t),$e(t,n)},Ke=function(n,t){E(t,(function(e,r){var o=0===r?n:t[r-1]
Ve(o,e)}))},Xe=function(n,t){E(t,(function(t){$e(n,t)}))},Ye=function(n){n.dom.textContent="",E(mt(n),(function(n){Je(n)}))},Je=function(n){var t=n.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},Qe=function(n){var t,e=mt(n)
0<e.length&&(t=n,E(e,(function(n){qe(t,n)}))),Je(n)},Ze=(Dt=rt,"text",{get:function(n){if(!Dt(n))throw new Error("Can only get text value of a text node")
return Ot(n).getOr("")},getOption:Ot=function(n){return Dt(n)?m.from(n.dom.nodeValue):m.none()},set:function(n,t){if(!Dt(n))throw new Error("Can only set raw text value of a text node")
n.dom.nodeValue=t}}),nr=function(n){return Ze.get(n)},tr=function(n){return Ze.getOption(n)},er=function(n,t){return Ze.set(n,t)},rr=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
function or(){return{up:t({selector:kt,closest:Pt,predicate:At,all:ft}),down:t({selector:Tt,predicate:xt}),styles:t({get:Vt,getRaw:$t,set:Ht,remove:Gt}),attrs:t({get:Wt,set:Mt,remove:zt,copyTo:function(n,t){var e=_t(n)
Nt(t,e)}}),insert:t({before:qe,after:Ve,afterAll:Ke,append:$e,appendAll:Xe,prepend:Ue,wrap:Ge}),remove:t({unwrap:Qe,remove:Je}),create:t({nu:Bn.fromTag,clone:function(n){return Bn.fromDom(n.dom.cloneNode(!1))},text:Bn.fromText}),query:t({comparePosition:function(n,t){return n.dom.compareDocumentPosition(t.dom)},prevSibling:st,nextSibling:dt}),property:t({children:mt,name:Qn,parent:lt,document:function(n){return at(n).dom},isText:rt,isComment:tt,isElement:et,isSpecial:function(n){var t=Qn(n)
return O(["script","noscript","iframe","noframes","noembed","title","style","textarea","xmp"],t)},getText:nr,setText:er,isBoundary:function(n){return!!et(n)&&("body"===Qn(n)||O(rr,Qn(n)))},isEmptyTag:function(n){return!!et(n)&&O(["br","img","hr","input"],Qn(n))},isNonEditable:function(n){return et(n)&&"false"===Wt(n,"contenteditable")}}),eq:In,is:Nn}}var ur,ir,cr,ar,lr=function(n,t,e){return t.bind((function(t){return e.filter(r(n.eq,t))}))},fr=function(n,t,e){return 0<e.length?function(n,t,e,r){var o=t(n,e)
return I(r,(function(e,r){var o=t(n,r)
return lr(n,e,o)}),o)}(n,t,(r=e)[0],r.slice(1)):m.none()
var r},sr=function(n,t,e,o){void 0===o&&(o=a)
var u=[t].concat(n.up().all(t)),i=[e].concat(n.up().all(e)),c=function(n){return W(n,o).fold((function(){return n}),(function(t){return n.slice(0,t+1)}))},l=c(u),f=c(i),s=N(l,(function(t){return A(f,(e=t,r(n.eq,e)))
var e}))
return{firstpath:l,secondpath:f,shared:s}},dr=or(),mr=function(n,t){return fr(dr,(function(t,e){return n(e)}),t)},pr=function(n){return kt(n,"table")},gr=function(n,t,e){var r=function(n){return function(t){return void 0!==e&&e(t)||In(t,n)}}
return In(n,t)?m.some({boxes:m.some([n]),start:n,finish:t}):pr(n).bind((function(o){return pr(t).bind((function(u){if(In(o,u))return m.some({boxes:(l=n,f=t,s=He(o),_e(s,l,f)),start:n,finish:t})
if(Mn(o,u)){var i=0<(c=Ct(t,"td,th",r(o))).length?c[c.length-1]:t
return m.some({boxes:Fe(o,n,o,t,u),start:n,finish:i})}if(Mn(u,o)){var c,a=0<(c=Ct(n,"td,th",r(u))).length?c[c.length-1]:n
return m.some({boxes:Fe(u,n,o,t,u),start:n,finish:a})}return sr(dr,n,t,undefined).shared.bind((function(i){return Pt(i,"table",e).bind((function(e){var i=Ct(t,"td,th",r(e)),c=0<i.length?i[i.length-1]:t,a=Ct(n,"td,th",r(e)),l=0<a.length?a[a.length-1]:n
return m.some({boxes:Fe(e,n,o,t,u),start:l,finish:c})}))}))
var l,f,s}))}))},hr=function(n,t){var e=Tt(n,t)
return 0<e.length?m.some(e):m.none()},vr=function(n,t,e){return Et(n,t).bind((function(t){return Et(n,e).bind((function(n){return mr(pr,[t,n]).map((function(e){return{first:t,last:n,table:e}}))}))}))},br=function(n,t,e,r,o){return u=o,N(n,(function(n){return En(n,u)})).bind((function(n){return function(n,t,e){return ie(n).bind((function(r){var o,u,i,c=He(r)
return u=t,i=e,Be(o=c,n,In).bind((function(n){var t=0<u?n.row+n.rowspan-1:n.row,e=0<i?n.column+n.colspan-1:n.column
return ke(o,t+u,e+i).map((function(n){return n.element}))}))}))}(n,t,e).bind((function(n){return e=r,kt(t=n,"table").bind((function(n){return Et(n,e).bind((function(n){return gr(n,t).bind((function(n){return n.boxes.map((function(t){return{boxes:t,start:n.start,finish:n.finish}}))}))}))}))
var t,e}))}))
var u},wr=hr,yr=function(n,t,e){return vr(n,t,e).bind((function(t){var e=function(t){return In(n,t)},o="thead,tfoot,tbody,table",u=kt(t.first,o,e),i=kt(t.last,o,e)
return u.bind((function(n){return i.bind((function(e){return In(n,e)?(o=t.table,u=t.first,i=t.last,function(n,t,e){return ze(n,t,e).bind((function(t){return function(n,t){for(var e=!0,o=r(Le,t),u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++)e=e&&ke(n,u,i).exists(o)
return e?m.some(t):m.none()}(n,t)}))}(He(o),u,i)):m.none()
var o,u,i}))}))}))},xr=function(n){if(!b(n))throw new Error("cases must be an array")
if(0===n.length)throw new Error("there must be at least one case")
var t=[],e={}
return E(n,(function(r,o){var u=Wn(r)
if(1!==u.length)throw new Error("one and only one name per case")
var i=u[0],c=r[i]
if(void 0!==e[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!b(c))throw new Error("case arguments must be an array")
t.push(i),e[i]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var u=e.length
if(u!==c.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+c.length+" ("+c+"), got "+u)
return{fold:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(t.length!==n.length)throw new Error("Wrong number of arguments to fold. Expected "+n.length+", got "+t.length)
return t[o].apply(null,e)},match:function(n){var r=Wn(n)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
if(!_(t,(function(n){return O(r,n)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return n[i].apply(null,e)},log:function(n){console.log(n,{constructors:t,constructor:i,params:e})}}}})),e},Cr=xr([{none:[]},{multiple:["elements"]},{single:["element"]}]),Sr=function(n,t,e,r){return n.fold(t,e,r)},Tr=Cr.none,Rr=Cr.multiple,Dr=Cr.single,Or=tinymce.util.Tools.resolve("tinymce.PluginManager"),Ar=function(n,t){return Bn.fromDom(n.dom.cloneNode(t))},kr=function(n){return Ar(n,!1)},Br=function(n){return Ar(n,!0)},Er=function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e)
return t},Pr=function(n,t){return n?m.some(t):m.none()},Ir=function(n,t){var e=function(e){var r=t(e)
if(r<=0||null===r){var o=Vt(e,n)
return parseFloat(o)||0}return r},r=function(n,t){return M(t,(function(t,e){var r=Vt(n,e),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,e){if(!S(e)&&!e.match(/^[0-9]+$/))throw new Error(n+".set accepts only positive integer values. Value was "+e)
var r=t.dom
jt(r)&&(r.style[n]=e+"px")},get:e,getOuter:e,aggregate:r,max:function(n,t,e){var o=r(n,e)
return o<t?t-o:0}}},Mr=Ir("width",(function(n){return n.dom.offsetWidth})),Nr=function(n){return Mr.get(n)},Wr=function(n){return Mr.getOuter(n)},Lr=function(n,t){void 0===t&&(t=l)
var r=n.grid,o=k(r.columns,e),u=k(r.rows,e)
return B(o,(function(e){return zr((function(){return z(u,(function(t){return ke(n,t,e).filter((function(n){return n.column===e})).toArray()}))}),(function(n){return 1===n.colspan&&t(n.element)}),(function(){return ke(n,0,e)}))}))},zr=function(n,t,e){var r=n()
return N(r,t).orThunk((function(){return m.from(r[0]).orThunk(e)})).map((function(n){return n.element}))},_r=function(n){var r=n.grid,o=k(r.rows,e),u=k(r.columns,e)
return B(o,(function(e){return zr((function(){return z(u,(function(r){return ke(n,e,r).filter((function(n){return n.row===e})).fold(t([]),(function(n){return[n]}))}))}),(function(n){return 1===n.rowspan}),(function(){return ke(n,e,0)}))}))},jr=function(n,t){return function(e){return"rtl"===Fr(e)?t:n}},Fr=function(n){return"rtl"===Vt(n,"direction")?"rtl":"ltr"},Hr=Ir("height",(function(n){var t=n.dom
return wt(n)?t.getBoundingClientRect().height:t.offsetHeight})),qr=function(n){return Hr.get(n)},Vr=function(n){return Hr.getOuter(n)},Ur=function(n,t){return{left:n,top:t,translate:function(e,r){return Ur(n+e,t+r)}}},$r=Ur,Gr=function(n,t){return void 0!==n?n:void 0!==t?t:0},Kr=function(n){var t=n.dom.ownerDocument,e=t.body,r=t.defaultView,o=t.documentElement
if(e===n.dom)return $r(e.offsetLeft,e.offsetTop)
var u=Gr(null==r?void 0:r.pageYOffset,o.scrollTop),i=Gr(null==r?void 0:r.pageXOffset,o.scrollLeft),c=Gr(o.clientTop,e.clientTop),a=Gr(o.clientLeft,e.clientLeft)
return Xr(n).translate(i-a,u-c)},Xr=function(n){var t,e=n.dom,r=e.ownerDocument.body
return r===e?$r(r.offsetLeft,r.offsetTop):wt(n)?(t=e.getBoundingClientRect(),$r(t.left,t.top)):$r(0,0)},Yr=function(n,t){return{row:n,y:t}},Jr=function(n,t){return{col:n,x:t}},Qr=function(n){return Kr(n).left+Wr(n)},Zr=function(n){return Kr(n).left},no=function(n,t){return Jr(n,Zr(t))},to=function(n,t){return Jr(n,Qr(t))},eo=function(n){return Kr(n).top},ro=function(n,t){return Yr(n,eo(t))},oo=function(n,t){return Yr(n,eo(t)+Vr(t))},uo=function(n,t,e){if(0===e.length)return[]
var r=B(e.slice(1),(function(t,e){return t.map((function(t){return n(e,t)}))})),o=e[e.length-1].map((function(n){return t(e.length-1,n)}))
return r.concat([o])},io={delta:e,positions:function(n){return uo(ro,oo,n)},edge:eo},co=jr({delta:e,edge:Zr,positions:function(n){return uo(no,to,n)}},{delta:function(n){return-n},edge:Qr,positions:function(n){return uo(to,no,n)}}),ao={delta:function(n,t){return co(t).delta(n,t)},positions:function(n,t){return co(t).positions(n,t)},edge:function(n){return co(n).edge(n)}},lo={unsupportedLength:["em","ex","cap","ch","ic","rem","lh","rlh","vw","vh","vi","vb","vmin","vmax","cm","mm","Q","in","pc","pt","px"],fixed:["px","pt"],relative:["%"],empty:[""]},fo=(ir="[eE][+-]?[0-9]+",ar=["Infinity",(ur="[0-9]+")+"\\."+(cr=function(n){return"(?:"+n+")?"})(ur)+cr(ir),"\\."+ur+cr(ir),ur+cr(ir)].join("|"),new RegExp("^([+-]?(?:"+ar+"))(.*)$")),so=function(){var n=An().browser
return n.isIE()||n.isEdge()},mo=function(n,t,e){return r=Vt(n,t),o=e,u=parseFloat(r),isNaN(u)?o:u
var r,o,u},po=function(n){return so()?(e=(t=n).dom.getBoundingClientRect().width,"border-box"===Vt(t,"box-sizing")?e:e-mo(t,"padding-left",0)-mo(t,"padding-right",0)-(mo(t,"border-left-width",0)+mo(t,"border-right-width",0))):mo(n,"width",Nr(n))
var t,e},go=/(\d+(\.\d+)?)%/,ho=/(\d+(\.\d+)?)px|em/,vo=function(n,t){Ht(n,"width",t+"px")},bo=function(n,t){Ht(n,"width",t+"%")},wo=function(n,t){Ht(n,"height",t+"px")},yo=function(n){var t,e=$t(t=n,"height").getOrThunk((function(){return function(n){return so()?(e=(t=n).dom.getBoundingClientRect().height,"border-box"===Vt(t,"box-sizing")?e:e-mo(t,"padding-top",0)-mo(t,"padding-bottom",0)-(mo(t,"border-top-width",0)+mo(t,"border-bottom-width",0))):mo(n,"height",qr(n))
var t,e}(t)+"px"}))
return e?function(n,t,e,r){var o,u,i,c,a,l=parseInt(n,10)
return on(n,"%")&&"table"!==Qn(t)?(u=l,i=e,c=r,a=ie(o=t).map((function(n){var t=i(n)
return Math.floor(u/100*t)})).getOr(u),c(o,a),a):l}(e,n,qr,wo):qr(n)},xo=function(n){return $t(n,"width").fold((function(){return m.from(Wt(n,"width"))}),(function(n){return m.some(n)}))},Co=function(n,t){return n/t.pixelWidth()*100},So=function(n,t){return xo(n).fold((function(){var e=Nr(n)
return Co(e,t)}),(function(e){return function(n,t,e){var r=go.exec(t)
if(null!==r)return parseFloat(r[1])
var o=po(n)
return Co(o,e)}(n,e,t)}))},To=function(n,t){return xo(n).fold((function(){return po(n)}),(function(e){return function(n,t,e){var r=ho.exec(t)
if(null!==r)return parseInt(r[1],10)
var o=go.exec(t)
return null===o?po(n):parseFloat(o[1])/100*e.pixelWidth()}(n,e,t)}))},Ro=function(n){return"rowspan",yo(t=n)/Xt(t,"rowspan")
var t},Do=function(n,t,e){Ht(n,"width",t+e)},Oo=function(n){return function(n,t){var e,r=(e=n,m.from(e.dom.offsetParent).map(Bn.fromDom).getOr(yt(ct(n))))
return t(n)/t(r)*100}(n,Nr)+"%"},Ao=t(go),ko=t(ho),Bo=it("col"),Eo=function(n,t,e){return $t(n,t).fold((function(){return e(n)+"px"}),(function(n){return n}))},Po=function(n,t){return Eo(n,"width",(function(n){return Bo(n)?Nr(n):To(n,t)}))},Io=function(n){return Eo(n,"height",Ro)},Mo=function(n,t){return $t(n,t).isSome()},No=function(n,t,e,r,o,u){return n.filter(r).fold((function(){return u(function(n,t){if(t<0||t>=n.length-1)return m.none()
var e=n[t].fold((function(){var e,r,o=(e=n.slice(0,t),(r=T.call(e,0)).reverse(),r)
return U(o,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return m.some({value:n,delta:0})})),r=n[t+1].fold((function(){var e=n.slice(t+1)
return U(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return m.some({value:n,delta:1})}))
return e.bind((function(n){return r.map((function(t){var e=t.delta+n.delta
return Math.abs(t.value-n.value)/e}))}))}(e,t))}),(function(n){return o(n)}))},Wo=function(n,t,r,o,u){var i=Lr(n,(function(n){return Mo(n,"width")})),a=Me(n)?B(Ie(n),(function(n){return m.from(n.element)})):i,l=[m.some(ao.edge(t))].concat(B(ao.positions(i,t),(function(n){return n.map((function(n){return n.x}))}))),f=c(Yt)
return B(a,(function(n,t){return No(n,t,l,f,(function(n){if(!Bo(a=n)||Mo(a,"width"))return r(n,u)
var c,a,s=null!=(c=i[t])?e(c):m.none()
return No(s,t,l,f,(function(n){return o(m.some(Nr(n)))}),o)}),o)}))},Lo=function(n){return n.map((function(n){return n+"px"})).getOr("")},zo=function(n,t,e){return Wo(n,t,To,(function(n){return n.getOrThunk(e.minCellWidth)}),e)},_o=function(n,t,e,r,o){var u=_r(n),i=[m.some(e.edge(t))].concat(B(e.positions(u,t),(function(n){return n.map((function(n){return n.y}))})))
return B(u,(function(n,t){return No(n,t,i,c(Jt),r,o)}))},jo=function(n){var t=n
return{get:function(){return t},set:function(n){t=n}}},Fo=function(n,t){var e=jo(parseFloat(n)),r=jo(Nr(t))
return{width:e.get,pixelWidth:r.get,getWidths:function(n,e){return Wo(n,t,So,(function(n){return n.fold((function(){return r.minCellWidth()}),(function(n){return n/r.pixelWidth()*100}))}),r=e)
var r},getCellDelta:function(n){return n/r.get()*100},singleColumnWidth:function(n,t){return[100-n]},minCellWidth:function(){return Zt()/r.get()*100},setElementWidth:bo,adjustTableWidth:function(n){var o=e.get(),u=o+n/100*o
bo(t,u),e.set(u),r.set(Nr(t))},isRelative:!0,label:"percent"}},Ho=function(n,t){var r=jo(n),o=r.get
return{width:o,pixelWidth:o,getWidths:function(n,e){return zo(n,t,e)},getCellDelta:e,singleColumnWidth:function(n,t){return[Math.max(Zt(),n+t)-n]},minCellWidth:Zt,setElementWidth:vo,adjustTableWidth:function(n){var e=o()+n
vo(t,e),r.set(e)},isRelative:!1,label:"pixel"}},qo=function(e){return xo(e).fold((function(){return function(e){var r=function(){return Nr(e)},o=t(0)
return{width:r,pixelWidth:r,getWidths:function(n,t){return zo(n,e,t)},getCellDelta:o,singleColumnWidth:t([0]),minCellWidth:o,setElementWidth:n,adjustTableWidth:n,isRelative:!0,label:"none"}}(e)}),(function(n){return function(n,t){var e=Ao().exec(t)
if(null!==e)return Fo(e[1],n)
var r=ko().exec(t)
if(null!==r){var o=parseInt(r[1],10)
return Ho(o,n)}var u=Nr(n)
return Ho(u,n)}(e,n)}))},Vo=Ho,Uo=Fo,$o=function(n,t){var e,r,o,u,i,c,a,l,f,s=function(n){return En(n.element,t)},d=Br(n),m=se(d),p=qo(n),g=Ae(m),h=(r=s,o=(e=g).grid.columns,u=e.grid.rows,i=o,a=c=0,l=[],f=[],zn(e.access,(function(n){var t,e,o,s
l.push(n),r(n)&&(f.push(n),e=(t=n.row)+n.rowspan-1,s=(o=n.column)+n.colspan-1,t<u?u=t:c<e&&(c=e),o<i?i=o:a<s&&(a=s))})),{minRow:u,minCol:i,maxRow:c,maxCol:a,allCells:l,selectedCells:f}),v="th:not("+t+"),td:not("+t+")",b=ee(d,"th,td",(function(n){return En(n,v)}))
return E(b,Je),function(n,t,e,r){for(var o,u,i,c=t.grid.columns,a=t.grid.rows,l=0;l<a;l++)for(var f=!1,s=0;s<c;s++)l<e.minRow||l>e.maxRow||s<e.minCol||s>e.maxCol||(ke(t,l,s).filter(r).isNone()?(o=f,u=n[l].element,i=Bn.fromTag("td"),$e(i,Bn.fromTag("br")),(o?$e:Ue)(u,i)):f=!0)}(m,g,h,s),function(n,t,e,r){zn(e.columns,(function(n){(n.column<t.minCol||n.column>t.maxCol)&&Je(n.element)}))
var o=P(te(n,"tr"),(function(n){return 0===n.dom.childElementCount}))
E(o,Je),t.minCol!==t.maxCol&&t.minRow!==t.maxRow||E(te(n,"th,td"),(function(n){zt(n,"rowspan"),zt(n,"colspan")})),zt(n,xe),zt(n,"data-snooker-col-series"),qo(n).adjustTableWidth(r)}(d,h,g,function(n,t,e,r){if(0===r.minCol&&t.grid.columns===r.maxCol+1)return 0
var o=zo(t,n,e),u=M(o,(function(n,t){return n+t}),0),i=M(o.slice(r.minCol,r.maxCol+1),(function(n,t){return n+t}),0)/u*e.pixelWidth()-e.pixelWidth()
return e.getCellDelta(i)}(n,Oe(n),p,h)),d},Go=function(n){return"img"===Qn(n)?1:tr(n).fold((function(){return mt(n).length}),(function(n){return n.length}))},Ko=["img","br"],Xo=function(n){return tr(n).filter((function(n){return 0!==n.trim().length||-1<n.indexOf(" ")})).isSome()||O(Ko,Qn(n))},Yo=function(n){return t=Xo,(e=function(n){for(var r=0;r<n.childNodes.length;r++){var o=Bn.fromDom(n.childNodes[r])
if(t(o))return m.some(o)
var u=e(n.childNodes[r])
if(u.isSome())return u}return m.none()})(n.dom)
var t,e},Jo=function(n){return Qo(n,Xo)},Qo=function(n,t){var e=function(n){for(var r=mt(n),o=r.length-1;0<=o;o--){var u=r[o]
if(t(u))return m.some(u)
var i=e(u)
if(i.isSome())return i}return m.none()}
return e(n)},Zo={scope:["row","col"]},nu=function(){var n=Bn.fromTag("td")
return $e(n,Bn.fromTag("br")),n},tu=function(){return Bn.fromTag("col")},eu=function(){return Bn.fromTag("colgroup")},ru=function(n,t,e){var r=function(n,t){var e,r,o,u=(e=n,r=Bn.fromTag(t),o=_t(e),Nt(r,o),r),i=mt(Br(n))
return Xe(u,i),u}(n,t)
return zn(e,(function(n,t){null===n?zt(r,t):Mt(r,t,n)})),r},ou=function(n){return n},uu=function(n){return function(){return Bn.fromTag("tr",n.dom)}},iu=function(n,t,e){var r=function(n,t){var e,r,o
e=t,r=n.element.dom,o=e.dom,jt(r)&&jt(o)&&(o.style.cssText=r.style.cssText),Gt(t,"height"),1!==n.colspan&&Gt(t,"width")}
return{col:function(t){var e=ct(t.element),o=Bn.fromTag(Qn(t.element),e.dom)
return r(t,o),n(t.element,o),o},colgroup:eu,row:uu(t),cell:function(t){var o,u,i,c,a,l=ct(t.element),f=Bn.fromTag(Qn(t.element),l.dom),s=e.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"]),d=0<s.length?(o=t.element,u=f,i=s,Yo(o).map((function(n){var t=i.join(","),e=Ct(n,t,(function(n){return In(n,o)}))
return I(e,(function(n,t){var e=kr(t)
return zt(e,"contenteditable"),$e(n,e),e}),u)})).getOr(u)):f
return $e(d,Bn.fromTag("br")),r(t,f),c=t.element,a=f,zn(Zo,(function(n,t){return Lt(c,t).filter((function(t){return O(n,t)})).each((function(n){return Mt(a,t,n)}))})),n(t.element,f),f},replace:ru,gap:nu}},cu=function(n){return{col:tu,colgroup:eu,row:uu(n),cell:nu,replace:ou,gap:nu}},au=function(n){return B(n,Bn.fromDom)},lu=function(n){return n.nodeName.toLowerCase()},fu=function(n){return Bn.fromDom(n.getBody())},su=function(n){return n.getBoundingClientRect().width},du=function(n){return n.getBoundingClientRect().height},mu=function(n){return function(t){return In(t,fu(n))}},pu=function(n){return/^\d+(\.\d+)?$/.test(n)?n+"px":n},gu=function(n){zt(n,"data-mce-style")
var t=function(n){return zt(n,"data-mce-style")}
E(oe(n),t),E(ue(n),t)},hu=function(n,t){var e=n.dom.getStyle(t,"width")||n.dom.getAttrib(t,"width")
return m.from(e).filter(cn)},vu=function(n){return/^(\d+(\.\d+)?)%$/.test(n)},bu=function(n){return Bn.fromDom(n.selection.getStart())},wu=function(n){return Sr(n.get(),t([]),e,F)},yu={selected:"data-mce-selected",selectedSelector:"td[data-mce-selected],th[data-mce-selected]",firstSelected:"data-mce-first-selected",firstSelectedSelector:"td[data-mce-first-selected],th[data-mce-first-selected]",lastSelected:"data-mce-last-selected",lastSelectedSelector:"td[data-mce-last-selected],th[data-mce-last-selected]"},xu=function(n){return{element:n,mergable:m.none(),unmergable:m.none(),selection:[n]}},Cu=function(n,t,e){return{element:e,mergable:(u=t,i=yu,Sr(n.get(),m.none,(function(n){return n.length<=1?m.none():yr(u,i.firstSelectedSelector,i.lastSelectedSelector).map((function(t){return{bounds:t,cells:n}}))}),m.none)),unmergable:(r=function(n,t){return Lt(n,t).exists((function(n){return 1<parseInt(n,10)}))},0<(o=wu(n)).length&&_(o,(function(n){return r(n,"rowspan")||r(n,"colspan")}))?m.some(o):m.none()),selection:wu(n)}
var r,o,u,i},Su=function(t,e,r,o){t.on("BeforeGetContent",(function(r){!0===r.selection&&Sr(e.get(),n,(function(n){r.preventDefault(),ie(n[0]).map((function(n){var t=$o(n,"[data-mce-selected]")
return gu(t),[t]})).each((function(n){var e
r.content="text"===r.format?B(n,(function(n){return n.dom.innerText})).join(""):(e=t,B(n,(function(n){return e.selection.serializer.serialize(n.dom,{})})).join(""))}))}),n)})),t.on("BeforeSetContent",(function(n){!0===n.selection&&!0===n.paste&&m.from(t.dom.getParent(t.selection.getStart(),"th,td")).each((function(e){var u=Bn.fromDom(e)
ie(u).each((function(e){var i,c,a,l,f,s,d=P((i=n.content,(c=document.createElement("div")).innerHTML=i,mt(Bn.fromDom(c))),(function(n){return"meta"!==Qn(n)}))
1===d.length&&(s=d[0],"table"===Qn(s))&&(n.preventDefault(),a=Bn.fromDom(t.getDoc()),l=cu(a),f={element:u,clipboard:d[0],generators:l},r.pasteCells(e,f).each((function(n){t.selection.setRng(n.rng),t.focus(),o.clear(e)})))}))}))}))},Tu=xr([{none:[]},{only:["index"]},{left:["index","next"]},{middle:["prev","index","next"]},{right:["prev","index"]}]),Ru=$({},Tu),Du=function(n,t,e){for(var r=0,o=n;o<t;o++)r+=void 0!==e[o]?e[o]:0
return r},Ou=function(n,t,e){var r=function(n,t){return Me(n)?(o=t,u=Ie(n),B(u,(function(n,t){return{element:n.element,width:o[t],colspan:n.colspan}}))):(e=t,r=Pe(n),B(r,(function(n){var t=Du(n.column,n.column+n.colspan,e)
return{element:n.element,width:t,colspan:n.colspan}})))
var e,r,o,u}(n,t)
E(r,(function(n){e.setElementWidth(n.element,n.width)}))},Au=function(n,e,r,o,u){var i=Oe(n),c=u.getCellDelta(e),a=u.getWidths(i,u),l=r===i.grid.columns-1,f=o.clampTableDelta(a,r,c,u.minCellWidth(),l),s=function(n,e,r,o,u){var i,c,a=n.slice(0),l=(c=e,0===(i=n).length?Ru.none():1===i.length?Ru.only(0):0===c?Ru.left(0,1):c===i.length-1?Ru.right(c-1,c):0<c&&c<i.length-1?Ru.middle(c-1,c,c+1):Ru.none()),f=t(B(a,t(0)))
return l.fold(f,(function(n){return o.singleColumnWidth(a[n],r)}),(function(n,t){return u.calcLeftEdgeDeltas(a,n,t,r,o.minCellWidth(),o.isRelative)}),(function(n,t,e){return u.calcMiddleDeltas(a,n,t,e,r,o.minCellWidth(),o.isRelative)}),(function(n,t){return u.calcRightEdgeDeltas(a,n,t,r,o.minCellWidth(),o.isRelative)}))}(a,r,f,u,o),d=B(s,(function(n,t){return n+a[t]}))
Ou(i,d,u),o.resizeTable(u.adjustTableWidth,f,l)},ku=function(n){return B(n,t(0))},Bu=function(n,t,e,r,o){return o(n.slice(0,t)).concat(r).concat(o(n.slice(e)))},Eu=function(n){return function(t,e,r,o){if(n(r)){var u=Math.max(o,t[e]-Math.abs(r)),i=Math.abs(u-t[e])
return 0<=r?i:-i}return r}},Pu=Eu((function(n){return n<0})),Iu=Eu(l),Mu=function(){var n=function(n,t,e,r){var o=(100+e)/100,u=Math.max(r,(n[t]+e)/o)
return B(n,(function(n,e){return(e===t?u:n/o)-n}))},t=function(t,e,r,o,u,i){return i?n(t,e,o,u):(l=r,f=Pu(c=t,a=e,o,u),Bu(c,a,l+1,[f,0],ku))
var c,a,l,f}
return{resizeTable:function(n,t){return n(t)},clampTableDelta:Pu,calcLeftEdgeDeltas:t,calcMiddleDeltas:function(n,e,r,o,u,i,c){return t(n,r,o,u,i,c)},calcRightEdgeDeltas:function(t,e,r,o,u,i){if(i)return n(t,r,o,u)
var c=Pu(t,r,o,u)
return ku(t.slice(0,r)).concat([c])},calcRedestributedWidths:function(n,t,e,r){if(r){var o=(t+e)/t,u=B(n,(function(n){return n/o}))
return{delta:100*o-100,newSizes:u}}return{delta:e,newSizes:n}}}},Nu=function(){var n=function(n,t,e,r,o){var u=Iu(n,0<=r?e:t,r,o)
return Bu(n,t,e+1,[u,-u],ku)}
return{resizeTable:function(n,t,e){e&&n(t)},clampTableDelta:function(n,t,e,r,o){if(o){if(0<=e)return e
var u=M(n,(function(n,t){return n+t-r}),0)
return Math.max(-u,e)}return Pu(n,t,e,r)},calcLeftEdgeDeltas:n,calcMiddleDeltas:function(t,e,r,o,u,i){return n(t,r,o,u,i)},calcRightEdgeDeltas:function(n,e,r,o,u,i){if(i)return ku(n)
var c=o/n.length
return B(n,t(c))},calcRedestributedWidths:function(n,t,e,r){return{delta:0,newSizes:n}}}},Wu=function(n,e){var r=m.from(n.dom.documentElement).map(Bn.fromDom).getOr(n)
return{parent:t(r),view:t(n),origin:t($r(0,0)),isResizable:e}},Lu=xr([{invalid:["raw"]},{pixels:["value"]},{percent:["value"]}]),zu=function(n,t,e){var r=e.substring(0,e.length-n.length),o=parseFloat(r)
return r===o.toString()?t(o):Lu.invalid(e)},_u=$($({},Lu),{from:function(n){return on(n,"%")?zu("%",Lu.percent,n):on(n,"px")?zu("px",Lu.pixels,n):Lu.invalid(n)}}),ju=function(n,e,r){var o,u,i,c=_u.from(r),a=_(n,(function(n){return"0px"===n}))?(o=c,u=n.length,i=o.fold((function(){return t("")}),(function(n){return t(n/u+"px")}),(function(){return t(100/u+"%")})),k(u,i)):function(n,t,e){return n.fold((function(){return t}),(function(n){return o=(r=n)/e,B(t,(function(n){return _u.from(n).fold((function(){return n}),(function(n){return n*o+"px"}),(function(n){return n/100*r+"px"}))}))
var r,o}),(function(n){return r=e,B(t,(function(n){return _u.from(n).fold((function(){return n}),(function(n){return n/r*100+"%"}),(function(n){return n+"%"}))}))
var r}))}(c,n,e)
return Hu(a)},Fu=function(n,r){return 0===n.length?r:I(n,(function(n,r){return _u.from(r).fold(t(0),e,e)+n}),0)},Hu=function(n){if(0===n.length)return n
var e,r,o=I(n,(function(n,t){var e=_u.from(t).fold((function(){return{value:t,remainder:0}}),(function(n){return t=n,"px",{value:(e=Math.floor(t))+"px",remainder:t-e}
var t,e}),(function(n){return{value:n+"%",remainder:0}}))
return{output:[e.value].concat(n.output),remainder:n.remainder+e.remainder}}),{output:[],remainder:0}),u=o.output
return u.slice(0,u.length-1).concat([(e=u[u.length-1],r=Math.round(o.remainder),_u.from(e).fold(t(e),(function(n){return n+r+"px"}),(function(n){return n+r+"%"})))])},qu=_u.from,Vu=function(n){return qu(n).fold(t("px"),t("px"),t("%"))},Uu=function(n,t,e,r){var o=Oe(n),u=o.all,i=Pe(o),c=Ie(o)
t.each((function(t){var e,u,a,l,f=Vu(t),s=Nr(n),d=Wo(o,n,Po,Lo,r),m=ju(d,s,t)
Me(o)?(a=m,l=f,E(c,(function(n,t){var e=Fu([a[t]],Zt())
Ht(n.element,"width",e+l)}))):(e=m,u=f,E(i,(function(n){var t=e.slice(n.column,n.colspan+n.column),r=Fu(t,Zt())
Ht(n.element,"width",r+u)}))),Ht(n,"width",t)})),e.each((function(t){var e,r,c,a=Vu(t),l=qr(n),f=_o(o,n,io,Io,Lo),s=ju(f,l,t)
e=s,r=u,c=a,E(i,(function(n){var t=e.slice(n.row,n.rowspan+n.row),r=Fu(t,ne())
Ht(n.element,"height",r+c)})),E(r,(function(n,t){Ht(n.element,"height",e[t])})),Ht(n,"height",t)}))},$u=function(n){return xo(n).exists((function(n){return go.test(n)}))},Gu=function(n){return xo(n).exists((function(n){return ho.test(n)}))},Ku=function(n){return xo(n).isNone()},Xu=Oo,Yu=function(n){return Oe(n).grid},Ju=function(n){var t=[]
return{bind:function(n){if(void 0===n)throw new Error("Event bind error: undefined handler")
t.push(n)},unbind:function(n){t=P(t,(function(t){return t!==n}))},trigger:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o={}
E(n,(function(n,t){o[n]=e[t]})),E(t,(function(n){n(o)}))}}},Qu=function(n){return{registry:_n(n,(function(n){return{bind:n.bind,unbind:n.unbind}})),trigger:_n(n,(function(n){return n.trigger}))}},Zu=function(n){return n.slice(0).sort()},ni=function(n,t){var e=P(t,(function(t){return!O(n,t)}))
0<e.length&&function(n){throw new Error("Unsupported keys for object: "+Zu(n).join(", "))}(e)},ti=function(n){return function(n,t,e){if(0===t.length)throw new Error("You must specify at least one required field.")
var r
return function(n,t){if(!b(t))throw new Error("The "+n+" fields must be an array. Was: "+t+".")
E(t,(function(t){if(!h(t))throw new Error("The value "+t+" in the "+n+" fields was not a string.")}))}("required",t),r=Zu(t),N(r,(function(n,t){return t<r.length-1&&n===r[t+1]})).each((function(n){throw new Error("The field: "+n+" occurs more than once in the combined fields: ["+r.join(", ")+"].")})),function(r){var o=Wn(r)
_(t,(function(n){return O(o,n)}))||function(n,t){throw new Error("All required keys ("+Zu(n).join(", ")+") were not specified. Specified keys were: "+Zu(t).join(", ")+".")}(t,o),n(t,o)
var u=P(t,(function(n){return!e.validate(r[n],n)}))
return 0<u.length&&function(n,t){throw new Error("All values need to be of type: "+t+". Keys ("+Zu(n).join(", ")+") were not.")}(u,e.label),r}}(ni,n,{validate:C,label:"function"})},ei=ti(["compare","extract","mutate","sink"]),ri=ti(["element","start","stop","destroy"]),oi=ti(["forceDrop","drop","move","delayDrop"]),ui=function(){var t,e=(t=Qu({move:Ju(["info"])}),{onEvent:n,reset:n,events:t.registry}),r=function(){var n=m.none(),t=Qu({move:Ju(["info"])})
return{onEvent:function(e,r){r.extract(e).each((function(e){var o,u,i;(o=r,u=e,i=n.map((function(n){return o.compare(n,u)})),n=m.some(u),i).each((function(n){t.trigger.move(n)}))}))},reset:function(){n=m.none()},events:t.registry}}(),o=e
return{on:function(){o.reset(),o=r},off:function(){o.reset(),o=e},isOn:function(){return o===r},onEvent:function(n,t){o.onEvent(n,t)},events:r.events}},ii=function(n){var t,e,r=Bn.fromDom(function(n){if(ht()&&x(n.target)){var t=Bn.fromDom(n.target)
if(et(t)&&function(n){return x(n.dom.shadowRoot)}(t)&&n.composed&&n.composedPath){var e=n.composedPath()
if(e)return q(e)}}return m.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(t=u,e=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t(e.apply(null,n))})
return{target:r,x:n.clientX,y:n.clientY,stop:o,prevent:u,kill:i,raw:n}},ci=function(n,t,e,r){n.dom.removeEventListener(t,e,r)},ai=l,li=function(n,t,e){return function(n,t,e,o,u){var i,c,a=(i=e,c=o,function(n){i(n)&&c(ii(n))})
return n.dom.addEventListener(t,a,u),{unbind:r(ci,n,t,a,u)}}(n,t,ai,e,!1)},fi=ii,si=function(n){return void 0!==n.dom.classList},di=function(n,t){return r=t,o=function(n,t){var e=Wt(n,t)
return void 0===e||""===e?[]:e.split(" ")}(e=n,"class").concat([r]),Mt(e,"class",o.join(" ")),!0
var e,r,o},mi=function(n,t){si(n)?n.dom.classList.add(t):di(n,t)},pi=function(n,t){return si(n)&&n.dom.classList.contains(t)},gi=function(n){var t=n.replace(/\./g,"-")
return{resolve:function(n){return t+"-"+n}}},hi=gi("ephox-dragster").resolve,vi=ei({compare:function(n,t){return $r(t.left-n.left,t.top-n.top)},extract:function(n){return m.some($r(n.x,n.y))},sink:function(n,t){var e=function(n){var t=$({layerClass:hi("blocker")},n),e=Bn.fromTag("div")
return Mt(e,"role","presentation"),qt(e,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),mi(e,hi("blocker")),mi(e,t.layerClass),{element:function(){return e},destroy:function(){Je(e)}}}(t),r=li(e.element(),"mousedown",n.forceDrop),o=li(e.element(),"mouseup",n.drop),u=li(e.element(),"mousemove",n.move),i=li(e.element(),"mouseout",n.delayDrop)
return ri({element:e.element,start:function(n){$e(n,e.element())},stop:function(){Je(e.element())},destroy:function(){e.destroy(),o.unbind(),u.unbind(),i.unbind(),r.unbind()}})},mutate:function(n,t){n.mutate(t.left,t.top)}}),bi=function(n){return"true"===Wt(n,"contenteditable")},wi=gi("ephox-snooker").resolve,yi=wi("resizer-bar"),xi=wi("resizer-rows"),Ci=wi("resizer-cols"),Si=function(n){var t=Tt(n.parent(),"."+yi)
E(t,Je)},Ti=function(n,t,e){var r=n.origin()
E(t,(function(t){t.each((function(t){var o=e(r,t)
mi(o,yi),$e(n.parent(),o)}))}))},Ri=function(n,t,e,r,o){var u,i=Kr(e),c=t.isResizable,a=0<r.length?io.positions(r,e):[],l=0<a.length?(u=c,z(n.all,(function(n,t){return u(n.element)?[t]:[]}))):[];(function(n,t,e,r){Ti(n,t,(function(n,t){var o,u,i,c,a,l=(o=t.row,u=e.left-n.left,i=t.y-n.top,c=r,a=Bn.fromTag("div"),qt(a,{position:"absolute",left:u+"px",top:i-3.5+"px",height:"7px",width:c+"px"}),Nt(a,{"data-row":o,role:"presentation"}),a)
return mi(l,xi),l}))})(t,P(a,(function(n,t){return A(l,(function(n){return t===n}))})),i,Wr(e))
var f,s,d,m=0<o.length?ao.positions(o,e):[],p=0<m.length?(s=c,d=[],k((f=n).grid.columns,(function(n){Ne(f,n).map((function(n){return n.element})).forall(s)&&d.push(n)})),P(d,(function(n){var t=Ee(f,(function(t){return t.column===n}))
return _(t,(function(n){return s(n.element)}))}))):[];(function(n,t,e,r){Ti(n,t,(function(n,t){var o,u,i,c,a,l=(o=t.col,u=t.x-n.left,i=e.top-n.top,c=r,a=Bn.fromTag("div"),qt(a,{position:"absolute",left:u-3.5+"px",top:i+"px",height:c+"px",width:"7px"}),Nt(a,{"data-column":o,role:"presentation"}),a)
return mi(l,Ci),l}))})(t,P(m,(function(n,t){return A(p,(function(n){return t===n}))})),i,Vr(e))},Di=function(n,t){var e,r,o
Si(n),n.isResizable(t)&&(e=Oe(t),r=_r(e),o=Lr(e),Ri(e,n,t,r,o))},Oi=function(n,t){var e=Tt(n.parent(),"."+yi)
E(e,t)},Ai=function(n){Oi(n,(function(n){Ht(n,"display","none")}))},ki=function(n){Oi(n,(function(n){Ht(n,"display","block")}))},Bi=wi("resizer-bar-dragging"),Ei=function(n){var t=function(){var n,t=Qu({drag:Ju(["xDelta","yDelta","target"])}),e=m.none(),r={mutate:function(t,e){n.trigger.drag(t,e)},events:(n=Qu({drag:Ju(["xDelta","yDelta"])})).registry}
return r.events.drag.bind((function(n){e.each((function(e){t.trigger.drag(n.xDelta,n.yDelta,e)}))})),{assign:function(n){e=m.some(n)},get:function(){return e},mutate:r.mutate,events:t.registry}}(),e=function(n,t){return void 0===t&&(t={}),function(n,t,e){var r,o,u=!1,i=Qu({start:Ju([]),stop:Ju([])}),c=ui(),a=function(){s.stop(),c.isOn()&&(c.off(),i.trigger.stop())},l=(r=a,o=null,{cancel:function(){null!==o&&(clearTimeout(o),o=null)},throttle:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]
null!==o&&clearTimeout(o),o=setTimeout((function(){r.apply(null,n),o=null}),200)}})
c.events.move.bind((function(e){t.mutate(n,e.info)}))
var f=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
u&&n.apply(null,t)}},s=t.sink(oi({forceDrop:a,drop:f(a),move:f((function(n){l.cancel(),c.onEvent(n,t)})),delayDrop:f(l.throttle)}),e)
return{element:s.element,go:function(n){s.start(n),c.on(),i.trigger.start()},on:function(){u=!0},off:function(){u=!1},destroy:function(){s.destroy()},events:i.registry}}(n,void 0!==t.mode?t.mode:vi,t)}(t,{}),o=m.none(),u=function(n,t){return m.from(Wt(n,t))}
t.events.drag.bind((function(n){u(n.target,"data-row").each((function(t){var e=Qt(n.target,"top")
Ht(n.target,"top",e+n.yDelta+"px")})),u(n.target,"data-column").each((function(t){var e=Qt(n.target,"left")
Ht(n.target,"left",e+n.xDelta+"px")}))}))
var i=function(n,t){return Qt(n,t)-Kt(n,"data-initial-"+t,0)}
e.events.stop.bind((function(){t.get().each((function(t){o.each((function(e){u(t,"data-row").each((function(n){var r=i(t,"top")
zt(t,"data-initial-top"),s.trigger.adjustHeight(e,r,parseInt(n,10))})),u(t,"data-column").each((function(n){var r=i(t,"left")
zt(t,"data-initial-left"),s.trigger.adjustWidth(e,r,parseInt(n,10))})),Di(n,e)}))}))}))
var c=function(r,o){s.trigger.startAdjust(),t.assign(r),Mt(r,"data-initial-"+o,Qt(r,o)),mi(r,Bi),Ht(r,"opacity","0.2"),e.go(n.parent())},a=li(n.parent(),"mousedown",(function(n){var t,e
t=n.target,pi(t,xi)&&c(n.target,"top"),e=n.target,pi(e,Ci)&&c(n.target,"left")})),l=function(t){return In(t,n.view())},f=li(n.view(),"mouseover",(function(t){(function(n){return Pt(n,"table",l).filter((function(n){return Pt(n,"[contenteditable]",l).exists(bi)}))})(t.target).fold((function(){wt(t.target)&&Si(n)}),(function(t){o=m.some(t),Di(n,t)}))})),s=Qu({adjustHeight:Ju(["table","delta","row"]),adjustWidth:Ju(["table","delta","column"]),startAdjust:Ju([])})
return{destroy:function(){a.unbind(),f.unbind(),e.destroy(),Si(n)},refresh:function(t){Di(n,t)},on:e.on,off:e.off,hideBars:r(Ai,n),showBars:r(ki,n),events:s.registry}},Pi=function(n,t,e){var r=io,o=ao,u=Ei(n),i=Qu({beforeResize:Ju(["table","type"]),afterResize:Ju(["table","type"]),startDrag:Ju([])})
return u.events.adjustHeight.bind((function(n){var t=n.table
i.trigger.beforeResize(t,"row"),function(n,t,e,r){var o,u,i,c=Oe(n),a=_o(c,n,r,Ro,(function(n){return n.getOrThunk(ne)})),l=B(a,(function(n,r){return e===r?Math.max(t+n,ne()):n})),f=(o=l,u=Pe(c),B(u,(function(n){var t=Du(n.row,n.row+n.rowspan,o)
return{element:n.element,height:t,rowspan:n.rowspan}}))),s=(i=l,B(c.all,(function(n,t){return{element:n.element,height:i[t]}})))
E(s,(function(n){wo(n.element,n.height)})),E(f,(function(n){wo(n.element,n.height)}))
var d=I(l,(function(n,t){return n+t}),0)
wo(n,d)}(t,r.delta(n.delta,t),n.row,r),i.trigger.afterResize(t,"row")})),u.events.startAdjust.bind((function(n){i.trigger.startDrag()})),u.events.adjustWidth.bind((function(n){var r=n.table
i.trigger.beforeResize(r,"col")
var u=o.delta(n.delta,r),c=e(r)
Au(r,u,n.column,t,c),i.trigger.afterResize(r,"col")})),{on:u.on,off:u.off,hideBars:u.hideBars,showBars:u.showBars,destroy:u.destroy,events:i.registry}},Ii=function(n,t){return n.fire("newrow",{node:t})},Mi=function(n,t){return n.fire("newcell",{node:t})},Ni=function(n,t,e){n.fire("TableModified",$($({},e),{table:t}))},Wi={structure:!1,style:!0},Li={structure:!0,style:!1},zi={"border-collapse":"collapse",width:"100%"},_i={border:"1"},ji="preservetable",Fi=function(n){return n.getParam("table_sizing_mode","auto")},Hi=function(n){return n.getParam("table_responsive_width")},qi=function(n){return n.getParam("table_default_attributes",_i,"object")},Vi=function(n){return n.getParam("table_default_styles",function(n){if(Yi(n)){var t=n.getBody().offsetWidth
return $($({},zi),{width:t+"px"})}return Ji(n)?Fn(zi,(function(n,t){return"width"!==t})):zi}(n),"object")},Ui=function(n){return n.getParam("table_cell_advtab",!0,"boolean")},$i=function(n){return n.getParam("table_row_advtab",!0,"boolean")},Gi=function(n){return n.getParam("table_advtab",!0,"boolean")},Ki=function(n){return n.getParam("table_style_by_css",!1,"boolean")},Xi=function(n){return"relative"===Fi(n)||!0===Hi(n)},Yi=function(n){return"fixed"===Fi(n)||!1===Hi(n)},Ji=function(n){return"responsive"===Fi(n)},Qi=function(n){var t="section",e=n.getParam("table_header_type",t,"string")
return O(["section","cells","sectionCells","auto"],e)?e:t},Zi=function(n){var t=n.getParam("table_column_resizing",ji,"string")
return N(["preservetable","resizetable"],(function(n){return n===t})).getOr(ji)},nc=function(n){return"preservetable"===Zi(n)},tc=function(n){return"resizetable"===Zi(n)},ec=function(n){var t=n.getParam("table_clone_elements")
return h(t)?m.some(t.split(/[ ,]/)):Array.isArray(t)?m.some(t):m.none()},rc=function(n,t){if(Xi(n)){var e=hu(n,t.dom).filter(vu).getOrThunk((function(){return Xu(t)}))
return Uo(e,t)}return Yi(n)?Vo(Nr(t),t):qo(t)},oc=function(n){zt(n,"width")},uc=function(n,t){var e,r,o
r=rc(n,t),o=Oo(e=t),Uu(e,m.some(o),m.none(),r),oc(e)},ic=function(n,t){(function(n,t){var e=Nr(n)+"px"
Uu(n,m.some(e),m.none(),t),oc(n)})(t,rc(n,t))},cc=function(n){Gt(n,"width")
var t=ue(n),e=0<t.length?t:oe(n)
E(e,(function(n){Gt(n,"width"),oc(n)})),oc(n)},ac="bar-",lc=function(n){return"false"!==Wt(n,"data-mce-resize")},fc=function(n){var e,r,o=m.none(),u=m.none(),i=m.none(),c=function(n){return"TABLE"===n.nodeName},a=function(t){return rc(n,t)},l=function(){return(nc(n)?Nu:Mu)()}
return n.on("init",(function(){var e,r,c,f,s,d=(r=lc,(e=n).inline?function(n,e,r){return{parent:t(e),view:t(n),origin:t($r(0,0)),isResizable:r}}(fu(e),function(){var n=Bn.fromTag("div")
return qt(n,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"}),$e(yt(Bn.fromDom(document)),n),n}(),r):Wu(Bn.fromDom(e.getDoc()),r))
i=m.some(d),s=n.getParam("object_resizing",!0),(h(s)?"table"===s:s)&&n.getParam("table_resize_bars",!0,"boolean")&&(c=l(),(f=Pi(d,c,a)).on(),f.events.startDrag.bind((function(t){o=m.some(n.selection.getRng())})),f.events.beforeResize.bind((function(t){var e,r,o,u,i,c=t.table.dom
e=n,o=su(r=c),u=du(c),i=ac+t.type,e.fire("ObjectResizeStart",{target:r,width:o,height:u,origin:i})})),f.events.afterResize.bind((function(t){var e,r,u,i,c,a=t.table,l=a.dom
gu(a),o.each((function(t){n.selection.setRng(t),n.focus()})),e=n,u=su(r=l),i=du(l),c=ac+t.type,e.fire("ObjectResized",{target:r,width:u,height:i,origin:c}),n.undoManager.add()})),u=m.some(f))})),n.on("ObjectResizeStart",(function(t){var o,u=t.target
c(u)&&(o=Bn.fromDom(u),E(n.dom.select(".mce-clonedresizable"),(function(t){n.dom.addClass(t,"mce-"+Zi(n)+"-columns")})),!Gu(o)&&Yi(n)?ic(n,o):!$u(o)&&Xi(n)&&uc(n,o),Ku(o)&&rn(t.origin,ac)&&uc(n,o),e=t.width,r=Ji(n)?"":hu(n,u).getOr(""))})),n.on("ObjectResized",(function(t){var o,u,i=t.target
c(i)&&(o=Bn.fromDom(i),u=t.origin,rn(u,"corner-")&&function(t,o,u){var i,c,f,s,d,m,p=on(o,"e")
""===r&&uc(n,t),u!==e&&""!==r?(Ht(t,"width",r),i=l(),c=a(t),f=nc(n)||p?Yu(t).columns-1:0,Au(t,u-e,f,i,c)):vu(r)&&(s=parseFloat(r.replace("%","")),Ht(t,"width",u*s/e+"%")),/^(\d+(\.\d+)?)px$/.test(r)&&(m=Oe(d=t),Me(m)||E(oe(d),(function(n){var t=Vt(n,"width")
Ht(n,"width",t),zt(n,"width")})))}(o,u,t.width),gu(o),Ni(n,o.dom,Wi))})),n.on("SwitchMode",(function(){u.each((function(t){n.mode.isReadOnly()?t.hideBars():t.showBars()}))})),{lazyResize:function(){return u},lazyWire:function(){return i.getOr(Wu(Bn.fromDom(n.getBody()),lc))},destroy:function(){u.each((function(n){n.destroy()})),i.each((function(t){var e
e=t,n.inline&&Je(e.parent())}))}}},sc=function(n,t){return{element:n,offset:t}},dc=function(n,t,e){return n.property().isText(t)&&0===n.property().getText(t).trim().length||n.property().isComment(t)?e(t).bind((function(t){return dc(n,t,e).orThunk((function(){return m.some(t)}))})):m.none()},mc=function(n,t){return n.property().isText(t)?n.property().getText(t).length:n.property().children(t).length},pc=function(n,t){var e=dc(n,t,n.query().prevSibling).getOr(t)
if(n.property().isText(e))return sc(e,mc(n,e))
var r=n.property().children(e)
return 0<r.length?pc(n,r[r.length-1]):sc(e,mc(n,e))},gc=pc,hc=or(),vc=function(n,t){1===Xt(n,"colspan")&&xo(n).bind((function(n){return function(n,t){return m.from(fo.exec(n)).bind((function(n){var e,r=Number(n[1]),o=n[2]
return e=o,A(t,(function(n){return A(lo[n],(function(n){return e===n}))}))?m.some({value:r,unit:o}):m.none()}))}(n,["fixed","relative","empty"])})).each((function(e){var r=e.value/2
Do(n,r,e.unit),Do(t,r,e.unit)}))},bc=function(n,t,e,r){e===r?zt(n,t):Mt(n,t,e)},wc=function(n,t,e){V(St(n,t)).fold((function(){return Ue(n,e)}),(function(n){return Ve(n,e)}))},yc=function(n,t){var e=[],r=[],o=function(n){return B(n,(function(n){n.isNew&&e.push(n.element)
var t=n.element
return Ye(t),E(n.cells,(function(n){n.isNew&&r.push(n.element),bc(n.element,"colspan",n.colspan,1),bc(n.element,"rowspan",n.rowspan,1),$e(t,n.element)})),t}))},u=function(n){return z(n,(function(n){return B(n.cells,(function(n){return bc(n.element,"span",n.colspan,1),n.element}))}))},i=function(t,e){var r,i,c,a=(c=Bt(r=n,i=e).getOrThunk((function(){var n=Bn.fromTag(i,ct(r).dom)
return"thead"===i?wc(r,"caption,colgroup",n):"colgroup"===i?wc(r,"caption",n):$e(r,n),n})),Ye(c),c),l=("colgroup"===e?u:o)(t)
Xe(a,l)},c=function(t,e){0<t.length?i(t,e):Bt(n,e).each(Je)},a=[],l=[],f=[],s=[]
return E(t,(function(n){switch(n.section){case"thead":a.push(n)
break
case"tbody":l.push(n)
break
case"tfoot":f.push(n)
break
case"colgroup":s.push(n)}})),c(s,"colgroup"),c(a,"thead"),c(l,"tbody"),c(f,"tfoot"),{newRows:e,newCells:r}},xc=function(n,t){if(0===n.length)return 0
var e=n[0]
return W(n,(function(n){return!t(e.element,n.element)})).fold((function(){return n.length}),(function(n){return n}))},Cc=function(n,t){var e=B(n,(function(n){return B(n.cells,a)}))
return B(n,(function(r,o){return{details:z(r.cells,(function(r,u){if(!1!==e[o][u])return[]
var i=function(n,t,e,r){var o,u=n[t].cells.slice(e),i=xc(u,r),c=(o=e,B(n,(function(n){return ve(n,o)})).slice(t))
return{colspan:i,rowspan:xc(c,r)}}(n,o,u,t)
return function(n,t,r,o){for(var u=n;u<n+r;u++)for(var i=t;i<t+o;i++)e[u][i]=!0}(o,u,i.rowspan,i.colspan),[{element:r.element,rowspan:i.rowspan,colspan:i.colspan,isNew:r.isNew}]})),section:r.section}}))},Sc=function(n,t,e){var r,o=[]
Me(n)&&(r=B(Ie(n),(function(n){return Yn(n.element,e,!1)})),o.push(Jn(r,"colgroup")))
for(var u=0;u<n.grid.rows;u++){for(var i=[],c=0;c<n.grid.columns;c++){var a=ke(n,u,c).map((function(n){return Yn(n.element,e,n.isLocked)})).getOrThunk((function(){return Yn(t.gap(),!0,!1)}))
i.push(a)}var l=Jn(i,n.all[u].section)
o.push(l)}return o},Tc=function(n,t){return function(n,t){return B(n,(function(n){var e,r=(e=n.details,U(e,(function(n){return lt(n.element).map((function(n){var t=lt(n).isNone()
return Yn(n,t,!1)}))})).getOrThunk((function(){return Yn(t.row(),!0,!1)})))
return{element:r.element,cells:n.details,section:n.section,isNew:r.isNew}}))}(Cc(n,In),t)},Rc=function(n,t){return U(n.all,(function(n){return N(n.cells,(function(n){return In(t,n.element)}))}))},Dc=function(n,t,e){var r=B(t.selection,(function(t){return re(t).bind((function(t){return Rc(n,t)})).filter(e)})),o=Er(r)
return Pr(0<o.length,o)},Oc=function(n,t,e,r,o){return function(u,i,c,a,l,f){var s=Oe(i)
return t(s,c).map((function(t){var e=Sc(s,a,!1),r=n(e,t,In,o(a)),u=Se(r.grid)
return{info:t,grid:Tc(r.grid,a),cursor:r.cursor,lockedColumns:u}})).bind((function(n){var t=yc(i,n.grid),o=m.from(l).getOrThunk((function(){return qo(i)})),c=m.from(f).getOrThunk(Nu)
return e(i,n.grid,n.info,o,c),r(i),Di(u,i),zt(i,xe),0<n.lockedColumns.length&&Mt(i,xe,n.lockedColumns.join(",")),m.some({cursor:n.cursor,newRows:t.newRows,newCells:t.newCells})}))}},Ac=function(n,t){return re(t.element).bind((function(t){return Rc(n,t)}))},kc=function(n,t){return Dc(n,t,l).map((function(n){return{cells:n,generators:t.generators,clipboard:t.clipboard}}))},Bc=function(n,t){return Dc(n,t,l)},Ec=function(n,t){return Ac(n,t).filter((function(n){return!n.isLocked}))},Pc=function(n,t){return Dc(n,t,(function(n){return!n.isLocked}))},Ic=function(n,t){return _(t,(function(t){return Rc(n,t).exists((function(n){return!n.isLocked}))}))},Mc=function(n,t){return t.mergable.filter((function(t){return Ic(n,t.cells)}))},Nc=function(n,t){return t.unmergable.filter((function(t){return Ic(n,t)}))},Wc=function(n,t,e,r){for(var o=ye(n).rows,u=!0,i=0;i<o.length;i++)for(var c=0;c<we(o[0]);c++){var a=o[i],l=ve(a,c),f=e(l.element,t)
!0===f&&!1===u?pe(a,c,Yn(r(),!0,l.isLocked)):!0===f&&(u=!1)}return n},Lc=function(n){return{is:function(t){return n===t},isValue:l,isError:a,getOr:t(n),getOrThunk:t(n),getOrDie:t(n),or:function(t){return Lc(n)},orThunk:function(t){return Lc(n)},fold:function(t,e){return e(n)},map:function(t){return Lc(t(n))},mapError:function(t){return Lc(n)},each:function(t){t(n)},bind:function(t){return t(n)},exists:function(t){return t(n)},forall:function(t){return t(n)},toOptional:function(){return m.some(n)}}},zc=function(t){return{is:a,isValue:a,isError:l,getOr:e,getOrThunk:function(n){return n()},getOrDie:function(){return n=String(t),function(){throw new Error(n)}()
var n},or:function(n){return n},orThunk:function(n){return n()},fold:function(n,e){return n(t)},map:function(n){return zc(t)},mapError:function(n){return zc(n(t))},each:n,bind:function(n){return zc(t)},exists:a,forall:l,toOptional:m.none}},_c={value:Lc,error:zc,fromOption:function(n,t){return n.fold((function(){return zc(t)}),Lc)}},jc=function(n,t){return{rowDelta:0,colDelta:we(n[0])-we(t[0])}},Fc=function(n,t){return{rowDelta:n.length-t.length,colDelta:0}},Hc=function(n,t,e,r){var o="colgroup"===t.section?e.col:e.cell
return k(n,(function(n){return Yn(o(),!0,r(n))}))},qc=function(n,t,e,r){return n.concat(k(t,(function(){var t=n[n.length-1],o=Hc(t.cells.length,t,e,(function(n){return Un(r,n.toString())}))
return ge(t,o)})))},Vc=function(n,t,e,r){return B(n,(function(n){var o=Hc(t,n,e,a)
return de(n,r,o)}))},Uc=function(n,t,r){var o=t.colDelta<0?Vc:e,u=t.rowDelta<0?qc:e,i=Se(n),c=we(n[0]),a=A(i,(function(n){return n===c-1})),f=o(n,Math.abs(t.colDelta),r,a?c-1:c),s=Se(f)
return u(f,Math.abs(t.rowDelta),r,j(s,l))},$c=function(n,t,e){return P(e,(function(e){return e>=n.column&&e<=we(t[0])+n.column}))},Gc=function(n,t,e,o,u){var i,c,a,f,s,d=Se(t),m=(i=n,c=d,a=we(t[0]),f=k(a-i.column,(function(n){return n+i.column})),s=N(f,(function(n){return _(c,(function(t){return t!==n}))})).getOr(a-1),$($({},i),{column:s})),p=$c(m,e,d)
return function(n,t,e){if(n.row>=t.length||n.column>we(t[0]))return _c.error("invalid start address out of table bounds, row: "+n.row+", column: "+n.column)
var r=t.slice(n.row),o=r[0].cells.slice(n.column),u=we(e[0]),i=e.length
return _c.value({rowDelta:r.length-i,colDelta:o.length-u})}(m,t,e).map((function(n){var i=$($({},n),{colDelta:n.colDelta-p.length}),c=Uc(t,i,o),a=Se(c),f=$c(m,e,a)
return function(n,t,e,o,u,i){for(var c,a,f,s,d,m=n.row,p=n.column,g=m+e.length,h=p+we(e[0])+i.length,v=j(i,l),b=m;b<g;b++)for(var w,y,x,C,S=0,T=p;T<h;T++)v[T]?S++:(f=T,s=void 0,s=r(u,ve((c=t)[a=b],f).element),d=c[a],1<c.length&&1<we(d)&&(0<f&&s(be(d,f-1))||f<d.cells.length-1&&s(be(d,f+1))||0<a&&s(be(c[a-1],f))||a<c.length-1&&s(be(c[a+1],f)))&&Wc(t,be(t[b],T),u,o.cell),w=T-p-S,x=(y=ve(e[b-m],w)).element,C=o.replace(x),pe(t[b],T,Yn(C,!0,y.isLocked)))
return t}(m,c,e,o,u,f)}))},Kc=function(n,t,e,r,o){var u,i,c,a
u=t,i=n,c=o,a=r.cell,0<i&&i<u[0].cells.length&&E(u,(function(n){var t=n.cells[i-1],e=n.cells[i]
c(e.element,t.element)&&pe(n,i,Yn(a(),!0,e.isLocked))}))
var l=Fc(e,t),f=Uc(e,l,r),s=Fc(t,f),d=Uc(t,s,r)
return B(d,(function(t,e){return de(t,n,f[e].cells)}))},Xc=function(n,t,e,r,o){(function(n,t,e,r){var o,u,i,c=ye(n).rows
0<t&&t<c.length&&(o=c[t-1].cells,i=e,u=M(o,(function(n,t){return A(n,(function(n){return i(n.element,t.element)}))?n:n.concat([t])}),[]),E(u,(function(n){for(var o=m.none(),u=t;u<c.length;u++)for(var i=0;i<we(c[0]);i++)!function(t){var i=c[u],a=ve(i,t)
e(a.element,n.element)&&(o.isNone()&&(o=m.some(r())),o.each((function(n){pe(i,t,Yn(n,!0,a.isLocked))})))}(i)})))})(t,n,o,r.cell)
var u,i,c=Se(t),a=jc(t,e),f=$($({},a),{colDelta:a.colDelta-c.length}),s=Uc(t,f,r),d=ye(s),p=d.cols,g=d.rows,h=Se(s),v=jc(e,t),b=$($({},v),{colDelta:v.colDelta+h.length}),w=(u=r,i=h,B(e,(function(n){return M(i,(function(t,e){var r=Hc(1,n,u,l)[0]
return me(t,e,r)}),n)}))),y=Uc(w,b,r)
return p.concat(g.slice(0,n)).concat(y).concat(g.slice(n,g.length))},Yc=function(n,t,e,r,o){var u=ye(n),i=u.rows,c=u.cols,a=i.slice(0,t),l=i.slice(t),f=he(i[e],(function(n,e){return 0<t&&t<i.length&&r(be(i[t-1],e),be(i[t],e))?ve(i[t],e):Yn(o(n.element,r),!0,n.isLocked)}))
return c.concat(a).concat([f]).concat(l)},Jc=function(n,t,e,r,o){return B(n,(function(n){var u=0<t&&t<we(n)&&r(be(n,t-1),be(n,t)),i=function(n,t,e,r,o,u,i){if("colgroup"!==e&&r)return ve(n,t)
var c=ve(n,o)
return Yn(i(c.element,u),!0,!1)}(n,t,n.section,u,e,r,o)
return me(n,t,i)}))},Qc=function(n,t,e,r){return B(n,(function(n){return he(n,(function(n){return o=n,A(t,(function(n){return e(o.element,n.element)}))?Yn(r(n.element,e),!0,n.isLocked):n
var o}))}))},Zc=function(n,t,e,r){return void 0!==be(n[t],e)&&0<t&&r(be(n[t-1],e),be(n[t],e))},na=function(n,t,e){return 0<t&&e(be(n,t-1),be(n,t))},ta=function(n,t,e,r){var o=ye(n).rows,u=z(o,(function(r,o){return Zc(n,o,t,e)||na(r,t,e)?[]:[ve(r,t)]}))
return Qc(n,u,e,r)},ea=function(n,t,e,r){var o=ye(n).rows,u=o[t],i=z(u.cells,(function(n,r){return Zc(o,t,r,e)||na(u,r,e)?[]:[n]}))
return Qc(n,i,e,r)},ra=function(n){return M(n,(function(n,t){return A(n,(function(n){return n.column===t.column}))?n:n.concat([t])}),[]).sort((function(n,t){return n.column-t.column}))},oa=function(n){return{element:n,colspan:Kt(n,"colspan",1),rowspan:Kt(n,"rowspan",1)}},ua=function(n){return Lt(n,"scope").map((function(n){return n.substr(0,3)}))},ia=function(n,t){void 0===t&&(t=oa)
var e=jo(m.none()),r=function(e){return function(t){switch(Qn(t.element)){case"col":return n.col(t)
default:return n.cell(t)}}(t(e))},o=function(n){var t=r(n)
return e.get().isNone()&&e.set(m.some(t)),u=m.some({item:n,replacement:t}),t},u=m.none()
return{getOrInit:function(n,t){return u.fold((function(){return o(n)}),(function(e){return t(n,e.item)?e.replacement:o(n)}))},cursor:e.get}},ca=function(n,t){return function(e){var r=jo(m.none()),o=[],u=function(u){var i={scope:n},c=e.replace(u,t,i)
return o.push({item:u,sub:c}),r.get().isNone()&&r.set(m.some(c)),c}
return{replaceOrInit:function(n,t){return"col"===Qn(n)?n:(e=n,r=t,N(o,(function(n){return r(n.item,e)})).fold((function(){return u(n)}),(function(e){return t(n,e.item)?e.sub:u(n)})))
var e,r},cursor:r.get}}},aa=function(n){var e=jo(m.none())
return{unmerge:function(t){e.get().isNone()&&e.set(m.some(t))
var r=ua(t)
return r.each((function(n){return Mt(t,"scope",n)})),function(){var e=n.cell({element:t,colspan:1,rowspan:1})
return Gt(e,"width"),Gt(t,"width"),r.each((function(n){return Mt(e,"scope",n)})),e}},merge:function(n){return Gt(n[0],"width"),function(){var t=Er(B(n,ua))
if(0===t.length)return m.none()
var e=t[0],r=["row","col"]
return A(t,(function(n){return n!==e&&O(r,n)}))?m.none():m.from(e)}().fold((function(){return zt(n[0],"scope")}),(function(t){return Mt(n[0],"scope",t+"group")})),t(n[0])},cursor:e.get}},la=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"],fa=or(),sa=function(n){return t=n,e=fa.property().name(t),O(la,e)
var t,e},da=function(n){return t=n,e=fa.property().name(t),O(["ol","ul"],e)
var t,e},ma=function(n){var t,e=function(n){return"br"===Qn(n)},r=function(n){return Jo(n).bind((function(t){var r=dt(t).map((function(n){return!!sa(n)||!!function(n){return t=n,O(["br","img","hr","input"],fa.property().name(t))
var t}(n)&&"img"!==Qn(n)})).getOr(!1)
return lt(t).map((function(o){return!0===r||"li"===Qn(u=o)||At(u,da).isSome()||e(t)||sa(o)&&!In(n,o)?[]:[Bn.fromTag("br")]
var u}))})).getOr([])},o=0===(t=z(n,(function(n){var t=mt(n)
return _(t,(function(n){return e(n)||rt(n)&&0===nr(n).trim().length}))?[]:t.concat(r(n))}))).length?[Bn.fromTag("br")]:t
Ye(n[0]),Xe(n[0],o)},pa=function(n){0===oe(n).length&&Je(n)},ga=function(n,t){return{grid:n,cursor:t}},ha=function(n,t,e){var r=ye(n).rows
return va(r,t,e).orThunk((function(){return va(r,0,0)}))},va=function(n,t,e){return m.from(n[t]).bind((function(n){return m.from(n.cells[e]).bind((function(n){return m.from(n.element)}))}))},ba=function(n,t,e){var r=ye(n).rows
return ga(n,va(r,t,e))},wa=function(n){return M(n,(function(n,t){return A(n,(function(n){return n.row===t.row}))?n:n.concat([t])}),[]).sort((function(n,t){return n.row-t.row}))},ya=function(n,t,e){var r,o,u=(r=n,o=e.section,le(r,(function(){return o}))),i=Ae(u)
return Sc(i,t,!0)},xa=function(n,t){var e=P(n,t)
return 0===e.length?m.some("td"):e.length===n.length?m.some("th"):m.none()},Ca=function(n,t,e,r){var o=Ae(t),u=r.getWidths(o,r)
Ou(o,u,r)},Sa=function(n,t,e,r,o){var u=Ae(t),i=r.getWidths(u,r),c=r.pixelWidth(),a=o.calcRedestributedWidths(i,c,e.pixelDelta,r.isRelative),l=a.newSizes,f=a.delta
Ou(u,l,r),r.adjustTableWidth(f)},Ta=function(n,t){return A(t,(function(n){return 0===n.column&&n.isLocked}))},Ra=function(n,t){return A(t,(function(t){return t.column+t.colspan>=n.grid.columns&&t.isLocked}))},Da=function(n,t){var e=Lr(n),r=ra(t)
return M(r,(function(n,t){return n+e[t.column].map(Wr).getOr(0)}),0)},Oa=function(n){return function(t,e){return Bc(t,e).filter((function(e){return!(n?Ta:Ra)(t,e)})).map((function(n){return{details:n,pixelDelta:Da(t,n)}}))}},Aa=function(n){return function(t,e){return kc(t,e).filter((function(e){return!(n?Ta:Ra)(t,e.cells)}))}},ka=Oc((function(n,t,e,r){var o=t[0].row,u=wa(t),i=I(u,(function(n,t){return{grid:Yc(n.grid,o,t.row+n.delta,e,r.getOrInit),delta:n.delta+1}}),{grid:n,delta:0}).grid
return ba(i,o,t[0].column)}),Bc,n,n,ia),Ba=Oc((function(n,t,e,r){var o=wa(t),u=o[o.length-1],i=u.row+u.rowspan,c=I(o,(function(n,t){return Yc(n,i,t.row,e,r.getOrInit)}),n)
return ba(c,i,t[0].column)}),Bc,n,n,ia),Ea=Oc((function(n,t,e,r){var o=t.details,u=ra(o),i=u[0].column,c=I(u,(function(n,t){return{grid:Jc(n.grid,i,t.column+n.delta,e,r.getOrInit),delta:n.delta+1}}),{grid:n,delta:0}).grid
return ba(c,o[0].row,i)}),Oa(!0),Sa,n,ia),Pa=Oc((function(n,t,e,r){var o=t.details,u=o[o.length-1],i=u.column+u.colspan,c=ra(o),a=I(c,(function(n,t){return Jc(n,i,t.column,e,r.getOrInit)}),n)
return ba(a,o[0].row,i)}),Oa(!1),Sa,n,ia),Ia=Oc((function(n,t,e,r){var o,u,i=ra(t.details),c=(o=n,u=B(i,(function(n){return n.column})),z(o,(function(n){var t=n.cells,e=I(u,(function(n,t){return 0<=t&&t<n.length?n.slice(0,t).concat(n.slice(t+1)):n}),t)
return 0<e.length?[Jn(e,n.section)]:[]}))),a=ha(c,i[0].row,i[0].column)
return ga(c,a)}),(function(n,t){return Pc(n,t).map((function(t){return{details:t,pixelDelta:-Da(n,t)}}))}),Sa,pa,ia),Ma=Oc((function(n,t,e,r){var o,u,i,c,a,l=wa(t),f=(o=n,u=l[0].row,i=l[l.length-1].row,a=(c=ye(o)).rows,c.cols.concat(a.slice(0,u)).concat(a.slice(i+1))),s=ha(f,t[0].row,t[0].column)
return ga(f,s)}),Bc,n,pa,ia),Na=(Oc((function(n,t,e,r){var o=ta(n,t.column,e,r.replaceOrInit)
return ba(o,t.row,t.column)}),Ec,n,n,ca("row","th")),Oc((function(n,t,e,r){var o=ra(t),u=M(o,(function(n,t){return ta(n,t.column,e,r.replaceOrInit)}),n)
return ba(u,t[0].row,t[0].column)}),Pc,n,n,ca("row","th"))),Wa=(Oc((function(n,t,e,r){var o=ta(n,t.column,e,r.replaceOrInit)
return ba(o,t.row,t.column)}),Ec,n,n,ca(null,"td")),Oc((function(n,t,e,r){var o=ra(t),u=M(o,(function(n,t){return ta(n,t.column,e,r.replaceOrInit)}),n)
return ba(u,t[0].row,t[0].column)}),Pc,n,n,ca(null,"td"))),La=(Oc((function(n,t,e,r){var o=ea(n,t.row,e,r.replaceOrInit)
return ba(o,t.row,t.column)}),Ac,n,n,ca("col","th")),Oc((function(n,t,e,r){var o=wa(t),u=M(o,(function(n,t){return ea(n,t.row,e,r.replaceOrInit)}),n)
return ba(u,t[0].row,t[0].column)}),Bc,n,n,ca("col","th")),Oc((function(n,t,e,r){var o=ea(n,t.row,e,r.replaceOrInit)
return ba(o,t.row,t.column)}),Ac,n,n,ca(null,"td")),Oc((function(n,t,e,r){var o=wa(t),u=M(o,(function(n,t){return ea(n,t.row,e,r.replaceOrInit)}),n)
return ba(u,t[0].row,t[0].column)}),Bc,n,n,ca(null,"td")),Oc((function(n,t,e,r){var o=t.cells
ma(o)
var u=function(n,t,e){var r=ye(n).rows
if(0===r.length)return n
for(var o=t.startRow;o<=t.finishRow;o++)for(var u=t.startCol;u<=t.finishCol;u++){var i=r[o],c=ve(i,u).isLocked
pe(i,u,Yn(e(),!1,c))}return n}(n,t.bounds,r.merge(o))
return ga(u,m.from(o[0]))}),Mc,Ca,n,aa)),za=Oc((function(n,t,e,r){var o=I(t,(function(n,t){return Wc(n,t,e,r.unmerge(t))}),n)
return ga(o,m.from(t[0]))}),Nc,Ca,n,aa),_a=Oc((function(n,t,e,r){var o,u,i,c=(o=t.clipboard,u=t.generators,i=Oe(o),Sc(i,u,!0)),a={row:t.row,column:t.column}
return Gc(a,n,c,t.generators,e).fold((function(){return ga(n,m.some(t.element))}),(function(n){var e=ha(n,t.row,t.column)
return ga(n,e)}))}),(function(n,t){return re(t.element).bind((function(e){return Rc(n,e).map((function(n){return $($({},n),{generators:t.generators,clipboard:t.clipboard})}))}))}),Ca,n,ia),ja=Oc((function(n,t,e,r){var o=ye(n).rows,u=t.cells[0].column,i=o[t.cells[0].row],c=ya(t.clipboard,t.generators,i),a=Kc(u,n,c,t.generators,e),l=ha(a,t.cells[0].row,t.cells[0].column)
return ga(a,l)}),Aa(!0),n,n,ia),Fa=Oc((function(n,t,e,r){var o=ye(n).rows,u=t.cells[t.cells.length-1].column+t.cells[t.cells.length-1].colspan,i=o[t.cells[0].row],c=ya(t.clipboard,t.generators,i),a=Kc(u,n,c,t.generators,e),l=ha(a,t.cells[0].row,t.cells[0].column)
return ga(a,l)}),Aa(!1),n,n,ia),Ha=Oc((function(n,t,e,r){var o=ye(n).rows,u=t.cells[0].row,i=o[u],c=ya(t.clipboard,t.generators,i),a=Xc(u,n,c,t.generators,e),l=ha(a,t.cells[0].row,t.cells[0].column)
return ga(a,l)}),kc,n,n,ia),qa=Oc((function(n,t,e,r){var o=ye(n).rows,u=t.cells[t.cells.length-1].row+t.cells[t.cells.length-1].rowspan,i=o[t.cells[0].row],c=ya(t.clipboard,t.generators,i),a=Xc(u,n,c,t.generators,e),l=ha(a,t.cells[0].row,t.cells[0].column)
return ga(a,l)}),kc,n,n,ia),Va=function(n,t){var e=Oe(n)
return Bc(e,t).bind((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan,u=L(B(e.all,(function(n){return P(n.cells,(function(n){return n.column>=r&&n.column<o}))})))
return xa(u,(function(n){return"th"===Qn(n.element)}))})).getOr("")},Ua=function(n){return lu(n.parentNode)},$a=function(n,t){var e="thead"===Ua(t),r=!A(t.cells,(function(n){return"th"!==lu(n)}))
return e||r?m.some({thead:e,ths:r}):m.none()},Ga=function(n,t){return"thead"===(e=$a(0,t).fold((function(){return Ua(t)}),(function(n){return"thead"})))?"header":"tfoot"===e?"footer":"body"
var e},Ka=function(n,t,e){var r,o,u=n.getParent(t,"table"),i=t.parentNode,c=lu(i)
e!==c&&((r=n.select(e,u)[0])||(r=n.create(e),o=u.firstChild,"thead"===e?V(St(Bn.fromDom(u),"caption,colgroup")).fold((function(){return u.insertBefore(r,o)}),(function(t){return n.insertAfter(r,t.dom)})):u.appendChild(r)),"tbody"===e&&"thead"===c&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),i.hasChildNodes()||n.remove(i))},Xa=function(n,t,e,r){var o=n.dom,u=function(n,t,e){if(x(e)&&lu(t)!==e){var r=n.dom.rename(t,e)
return Mi(n,r),r}return t}(n,t,e)
return y(r)||o.setAttrib(u,"scope",r),u},Ya=function(n,t,e,r){return E(t,(function(t){return Xa(n,t,e,r)}))},Ja=function(n,t,e){var r,o,u,i=n.dom
"header"===e?(o="auto"===(r=Qi(n))?(u=ie(Bn.fromDom(t.cells[0])).map(ce).getOr([]),U(u,(function(n){return $a(0,n.dom)})).map((function(n){return n.thead&&n.ths?"sectionCells":n.thead?"section":"cells"})).getOr("section")):r,Ya(n,t.cells,"section"===o?"td":"th","col"),Ka(i,t,"cells"===o?"tbody":"thead")):(Ya(n,t.cells,"td",null),Ka(i,t,"footer"===e?"tfoot":"tbody"))},Qa=function(n){return function(t){var e,r=Qn(t),o="col"===r||"colgroup"===r?ie(e=t).bind((function(n){return wr(n,yu.firstSelectedSelector)})).fold((function(){return e}),(function(n){return n[0]})):t
return Pt(o,n)}},Za=Qa("th,td"),nl=Qa("th,td,caption"),tl=function(n,t){return Za(n).map((function(n){return wu(t)})).getOr([])},el=function(n,t){var e,r,o,u=Za(n)
return r=u.bind((function(n){return ie(n)})).map(ce),o=function(n,e){return P(e,(function(e){return A(au(e.dom.cells),(function(e){return"1"===Wt(e,t)||In(e,n)}))}))},((e=u).isSome()&&r.isSome()?m.some(o(e.getOrDie(),r.getOrDie())):m.none()).getOr([])},rl=function(t,e,r){var o=function(n){return"table"===Qn(fu(n))},u=ec(t),i=tc(t)?n:vc,c=function(n,e,r,o,i){return function(c,a){gu(c)
var l=o(),f=Bn.fromDom(t.getDoc()),s=iu(r,f,u),d=rc(t,c),p=(tc(t)?Mu:Nu)()
return e(c)?n(l,c,a,s,d,p).bind((function(n){return E(n.newRows,(function(n){Ii(t,n.dom)})),E(n.newCells,(function(n){Mi(t,n.dom)})),n.cursor.map((function(n){var e=gc(hc,n),r=t.dom.createRng()
return r.setStart(e.element.dom,e.offset),r.setEnd(e.element.dom,e.offset),{rng:r,effect:i}}))})):m.none()}},a=c(Ma,(function(n){return!1===o(t)||1<Yu(n).rows}),n,e,Li),f=c(Ia,(function(n){return!1===o(t)||1<Yu(n).columns}),n,e,Li),s=c(ka,l,n,e,Li),d=c(Ba,l,n,e,Li),p=c(Ea,l,i,e,Li),g=c(Pa,l,i,e,Li),h=c(La,l,n,e,Li),v=c(za,l,n,e,Li),b=c(ja,l,n,e,Li),w=c(Fa,l,n,e,Li),y=c(Ha,l,n,e,Li),x=c(qa,l,n,e,Li),C=c(_a,l,n,e,Li),S=function(n,t){return Vn(n,"type").filter((function(n){return O(t,n)}))}
return{deleteRow:a,deleteColumn:f,insertRowsBefore:s,insertRowsAfter:d,insertColumnsBefore:p,insertColumnsAfter:g,mergeCells:h,unmergeCells:v,pasteColsBefore:b,pasteColsAfter:w,pasteRowsBefore:y,pasteRowsAfter:x,pasteCells:C,setTableCellType:function(n,t){return S(t,["td","th"]).each((function(t){var e=B(tl(bu(n),r),(function(n){return n.dom}))
Ya(n,e,t,null)}))},setTableRowType:function(n,t){return S(t,["header","body","footer"]).each((function(t){B(el(bu(n),yu.selected),(function(e){return Ja(n,e.dom,t)}))}))},makeColumnsHeader:c(Na,l,n,e,Li),unmakeColumnsHeader:c(Wa,l,n,e,Li),getTableRowType:function(n){var t=el(bu(n),yu.selected)
if(0<t.length){var e=B(t,(function(n){return Ga(0,n.dom)})),r=O(e,"header"),o=O(e,"footer")
if(r||o){var u=O(e,"body")
return!r||u||o?r||u||!o?"":"footer":"header"}return"body"}},getTableCellType:function(n){return xa(tl(bu(n),r),(function(n){return"th"===Qn(n)})).getOr("")},getTableColType:Va}},ol={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},colGroups:!1},ul=function(n,t,e,r){return k(n,(function(n){return function(n,t,e,r){for(var o=Bn.fromTag("tr"),u=0;u<n;u++){var i=Bn.fromTag(r<t||u<e?"th":"td")
u<e&&Mt(i,"scope","row"),r<t&&Mt(i,"scope","col"),$e(i,Bn.fromTag("br")),$e(o,i)}return o}(t,e,r,n)}))},il=function(n,t){n.selection.select(t.dom,!0),n.selection.collapse(!0)},cl=function(n,t,e,o,u){var i=Vi(n),c={styles:i,attributes:qi(n),colGroups:n.getParam("table_use_colgroups",!1,"boolean")}
return n.undoManager.ignore((function(){var r=function(n,t,e,r,o,u){void 0===u&&(u=ol)
var i=Bn.fromTag("table"),c="cells"!==o
qt(i,u.styles),Nt(i,u.attributes),u.colGroups&&$e(i,function(n){var t=Bn.fromTag("colgroup")
return k(n,(function(){return $e(t,Bn.fromTag("col"))})),t}(t))
var a,l,f=Math.min(n,e)
c&&0<e&&(a=Bn.fromTag("thead"),$e(i,a),l=ul(e,t,"sectionCells"===o?f:0,r),Xe(a,l))
var s=Bn.fromTag("tbody")
$e(i,s)
var d=ul(c?n-f:n,t,c?0:e,r)
return Xe(s,d),i}(e,t,u,o,Qi(n),c)
Mt(r,"data-mce-id","__mce")
var i,a,l,f=(i=r,a=Bn.fromTag("div"),l=Bn.fromDom(i.dom.cloneNode(!0)),$e(a,l),a.dom.innerHTML)
n.insertContent(f),n.addVisual()})),Et(fu(n),'table[data-mce-id="__mce"]').map((function(t){var e,o,u
return Yi(n)?ic(n,t):Ji(n)?cc(t):(Xi(n)||(e=i.width,h(e)&&-1!==e.indexOf("%")))&&uc(n,t),gu(t),zt(t,"data-mce-id"),o=n,E(Tt(t,"tr"),(function(n){Ii(o,n.dom),E(Tt(n,"th,td"),(function(n){Mi(o,n.dom)}))})),u=n,Et(t,"td,th").each(r(il,u)),t.dom})).getOr(null)},al=function(n,t,e,r,o){void 0===r&&(r={})
var u=function(n){return S(n)&&0<n}
if(u(t)&&u(e)){var i=r.headerRows||0,c=r.headerColumns||0
return cl(n,e,t,c,i)}return console.error(o),null},ll=function(n){return function(){return n().fold((function(){return[]}),(function(n){return B(n,(function(n){return n.dom}))}))}},fl=function(n){return function(t){var e=0<t.length?m.some(au(t)):m.none()
n(e)}},sl=function(n,t,e){var r=Kt(n,t,1)
1===e||r<=1?zt(n,t):Mt(n,t,Math.min(e,r))},dl=tinymce.util.Tools.resolve("tinymce.util.Tools"),ml=function(n,t,e){return function(t,r){for(var o=0;o<r.length;o++){var u=n.getStyle(r[o],e)
if(void 0===t&&(t=u),t!==u)return""}return t}(void 0,n.select("td,th",t))},pl=function(n,t,e){e&&n.formatter.apply("align"+e,{},t)},gl=function(n,t){dl.each("left center right".split(" "),(function(e){n.formatter.remove("align"+e,{},t)}))},hl=function(n,t){return(t||[]).concat(B(n,(function(n){var t=n.text||n.title
return $n(n,"menu")?{text:t,items:hl(n.menu)}:{text:t,value:n.value}})))},vl=function(n){return function(t){return rn(t,"rgb")?n.toHex(t):t}},bl=function(n,t){var e=Bn.fromDom(t)
return{borderwidth:$t(e,"border-width").getOr(""),borderstyle:$t(e,"border-style").getOr(""),bordercolor:$t(e,"border-color").map(vl(n)).getOr(""),backgroundcolor:$t(e,"background-color").map(vl(n)).getOr("")}},wl=function(n){var t=n[0],e=n.slice(1)
return E(e,(function(n){E(Wn(t),(function(e){zn(n,(function(n,r){var o=t[e]
""!==o&&e===r&&o!==n&&(t[e]="")}))}))})),t},yl=function(n){var t=[{name:"borderstyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]},{name:"bordercolor",type:"colorinput",label:"Border color"},{name:"backgroundcolor",type:"colorinput",label:"Background color"}]
return{title:"Advanced",name:"advanced",items:"cell"===n?[{name:"borderwidth",type:"input",label:"Border width"}].concat(t):t}},xl=function(n,t,e,r){return N(n,(function(n){return e.formatter.matchNode(r,t+n)})).getOr("")},Cl=r(xl,["left","center","right"],"align"),Sl=r(xl,["top","middle","bottom"],"valign"),Tl=[{name:"width",type:"input",label:"Width"},{name:"height",type:"input",label:"Height"},{name:"celltype",type:"listbox",label:"Cell type",items:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{name:"scope",type:"listbox",label:"Scope",items:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{name:"halign",type:"listbox",label:"H Align",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{name:"valign",type:"listbox",label:"V Align",items:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}],Rl=function(n){return Tl.concat((0<(t=hl(n.getParam("table_cell_class_list",[],"array"))).length?m.some({name:"class",type:"listbox",label:"Class",items:t}):m.none()).toArray())
var t},Dl=function(n){return function(t,e){var r=t.dom
return{setAttrib:function(t,o){n&&!o||r.setAttrib(e,t,o)},setStyle:function(t,o){n&&!o||r.setStyle(e,t,o)},setFormat:function(r,o){n&&!o||(""===o?t.formatter.remove(r,{value:null},e,!0):t.formatter.apply(r,{value:o},e))}}}},Ol={normal:Dl(!1),ifTruthy:Dl(!0)},Al=function(n){return ie(n[0]).map((function(t){var e=Oe(t),r=Pe(e),o=P(r,(function(t){return A(n,(function(n){return In(t.element,n)}))}))
return B(o,(function(n){return{element:n.element.dom,column:Ne(e,n.column).map((function(n){return n.element.dom}))}}))}))},kl=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){(function(n,t,e,r){var o,u,i=1===t.length,c=Fn(r,(function(n,t){return e[t]!==n}))
0<qn(c)&&1<=t.length&&(o=ie(t[0]),Al(t).each((function(t){E(t,(function(t){var e,o,u,c,a,l,f,s,d,m,p=Xa(n,t.element,r.celltype),g=i?Ol.normal(n,p):Ol.ifTruthy(n,p)
o=t.column.map((function(t){return i?Ol.normal(n,t):Ol.ifTruthy(n,t)})).getOr(g),u=r,(e=g).setAttrib("scope",u.scope),e.setAttrib("class",u.class),e.setStyle("height",pu(u.height)),o.setStyle("width",pu(u.width)),Ui(n)&&(a=r,(c=g).setFormat("tablecellbackgroundcolor",a.backgroundcolor),c.setFormat("tablecellbordercolor",a.bordercolor),c.setFormat("tablecellborderstyle",a.borderstyle),c.setFormat("tablecellborderwidth",pu(a.borderwidth))),i&&(gl(n,p),l=n,f=p,dl.each("top middle bottom".split(" "),(function(n){l.formatter.remove("valign"+n,{},f)}))),r.halign&&pl(n,p,r.halign),r.valign&&(s=n,d=p,(m=r.valign)&&s.formatter.apply("valign"+m,{},d))}))})),u=0<qn(Fn(c,(function(n,t){return"scope"!==t&&"celltype"!==t}))),o.each((function(t){return Ni(n,t.dom,{structure:Un(c,"celltype"),style:u})})))})(n,t,e,o),n.focus()}))},Bl=function(n,t){var e,o,u,i=tl(bu(n),t)
0!==i.length&&(e=function(n,t){var e=Al(t).map((function(t){return B(t,(function(t){return e=n,r=t.element,o=Ui(n),u=t.column,i=e.dom,c=u.getOr(r),$({width:(a=function(n,t){return i.getStyle(n,t)||i.getAttrib(n,t)})(c,"width"),height:a(r,"height"),scope:i.getAttrib(r,"scope"),celltype:lu(r),class:i.getAttrib(r,"class",""),halign:Cl(e,r),valign:Sl(e,r)},o?bl(i,r):{})
var e,r,o,u,i,c,a}))}))
return wl(e.getOrDie())}(n,i),o={type:"tabpanel",tabs:[{title:"General",name:"general",items:Rl(n)},yl("cell")]},u={type:"panel",items:[{type:"grid",columns:2,items:Rl(n)}]},n.windowManager.open({title:"Cell Properties",size:"normal",body:Ui(n)?o:u,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:e,onSubmit:r(kl,n,i,e)}))},El=[{type:"listbox",name:"type",label:"Row type",items:[{text:"Header",value:"header"},{text:"Body",value:"body"},{text:"Footer",value:"footer"}]},{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height",type:"input"}],Pl=function(n){return El.concat((0<(t=hl(n.getParam("table_row_class_list",[],"array"))).length?m.some({name:"class",type:"listbox",label:"Class",items:t}):m.none()).toArray())
var t},Il=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){(function(n,t,e,r){var o,u,i=1===t.length,c=Fn(r,(function(n,t){return e[t]!==n}))
0<qn(c)&&(E(t,(function(t){r.type!==lu(t.parentNode)&&Ja(n,t,r.type)
var o,u,c,a,l=i?Ol.normal(n,t):Ol.ifTruthy(n,t)
u=r,(o=l).setAttrib("class",u.class),o.setStyle("height",pu(u.height)),$i(n)&&(a=r,(c=l).setStyle("background-color",a.backgroundcolor),c.setStyle("border-color",a.bordercolor),c.setStyle("border-style",a.borderstyle)),r.align!==e.align&&(gl(n,t),pl(n,t,r.align))})),o=Un(c,"type"),u=!o||1<qn(c),ie(Bn.fromDom(t[0])).each((function(t){return Ni(n,t.dom,{structure:o,style:u})})))})(n,t,e,o),n.focus()}))},Ml=function(n){var t,e,o,u,i=el(bu(n),yu.selected)
0!==i.length&&(t=B(i,(function(t){return e=n,r=t.dom,o=$i(n),u=e.dom,$({height:u.getStyle(r,"height")||u.getAttrib(r,"height"),class:u.getAttrib(r,"class",""),type:Ga(0,r),align:Cl(e,r)},o?bl(u,r):{})
var e,r,o,u})),e=wl(t),o={type:"tabpanel",tabs:[{title:"General",name:"general",items:Pl(n)},yl("row")]},u={type:"panel",items:[{type:"grid",columns:2,items:Pl(n)}]},n.windowManager.open({title:"Row Properties",size:"normal",body:$i(n)?o:u,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:e,onSubmit:r(Il,n,B(i,(function(n){return n.dom})),e)}))},Nl=tinymce.util.Tools.resolve("tinymce.Env"),Wl=function(n,t,e,r){if("TD"===t.tagName||"TH"===t.tagName)h(e)?n.setStyle(t,e,r):n.setStyle(t,e)
else if(t.children)for(var o=0;o<t.children.length;o++)Wl(n,t.children[o],e,r)},Ll=function(n,t,e,r){var o,u=n.dom,i=r.getData(),c=Fn(i,(function(n,t){return e[t]!==n}))
r.close(),""===i.class&&delete i.class,n.undoManager.transact((function(){var e,r,a,l
t||(e=parseInt(i.cols,10)||1,r=parseInt(i.rows,10)||1,t=cl(n,e,r,0,0)),0<qn(c)&&(function(n,t,e){var r,o=n.dom,u={},i={}
if(u.class=e.class,i.height=pu(e.height),o.getAttrib(t,"width")&&!Ki(n)?u.width=(r=e.width)?r.replace(/px$/,""):"":i.width=pu(e.width),Ki(n)?(i["border-width"]=pu(e.border),i["border-spacing"]=pu(e.cellspacing)):(u.border=e.border,u.cellpadding=e.cellpadding,u.cellspacing=e.cellspacing),Ki(n)&&t.children)for(var c=0;c<t.children.length;c++)Wl(o,t.children[c],{"border-width":pu(e.border),padding:pu(e.cellpadding)}),Gi(n)&&Wl(o,t.children[c],{"border-color":e.bordercolor})
Gi(n)&&(i["background-color"]=e.backgroundcolor,i["border-color"]=e.bordercolor,i["border-style"]=e.borderstyle),u.style=o.serializeStyle($($({},Vi(n)),i)),o.setAttribs(t,$($({},qi(n)),u))}(n,t,i),(o=u.select("caption",t)[0])&&!i.caption&&u.remove(o),!o&&i.caption&&((o=u.create("caption")).innerHTML=Nl.ie?" ":'<br data-mce-bogus="1"/>',t.insertBefore(o,t.firstChild)),""===i.align?gl(n,t):pl(n,t,i.align)),n.focus(),n.addVisual(),0<qn(c)&&(l=!(a=Un(c,"caption"))||1<qn(c),Ni(n,t,{structure:a,style:l}))}))},zl=function(n,t){var e,o,u,i,c,a,l,f,s=n.dom,d=function(n,t){var e,r,o,u,i=Vi(n),c=qi(n),a=t?(e=n.dom,{borderstyle:Vn(i,"border-style").getOr(""),bordercolor:vl(e)(Vn(i,"border-color").getOr("")),backgroundcolor:vl(e)(Vn(i,"background-color").getOr(""))}):{}
return $($($($($($({},{height:"",width:"100%",cellspacing:"",cellpadding:"",caption:!1,class:"",align:"",border:""}),i),c),a),(u=i["border-width"],Ki(n)&&u?{border:u}:Vn(c,"border").fold((function(){return{}}),(function(n){return{border:n}})))),(r=Vn(i,"border-spacing").or(Vn(c,"cellspacing")).fold((function(){return{}}),(function(n){return{cellspacing:n}})),o=Vn(i,"border-padding").or(Vn(c,"cellpadding")).fold((function(){return{}}),(function(n){return{cellpadding:n}})),$($({},r),o)))}(n,Gi(n))
!1===t?(e=s.getParent(n.selection.getStart(),"table"))?(u=e,i=Gi(o=n),f=o.dom,d=$({width:f.getStyle(u,"width")||f.getAttrib(u,"width"),height:f.getStyle(u,"height")||f.getAttrib(u,"height"),cellspacing:f.getStyle(u,"border-spacing")||f.getAttrib(u,"cellspacing"),cellpadding:f.getAttrib(u,"cellpadding")||ml(o.dom,u,"padding"),border:(c=f,a=u,l=$t(Bn.fromDom(a),"border-width"),Ki(o)&&l.isSome()?l.getOr(""):c.getAttrib(a,"border")||ml(o.dom,a,"border-width")||ml(o.dom,a,"border")),caption:!!f.select("caption",u)[0],class:f.getAttrib(u,"class",""),align:Cl(o,u)},i?bl(f,u):{})):Gi(n)&&(d.borderstyle="",d.bordercolor="",d.backgroundcolor=""):(d.cols="1",d.rows="1",Gi(n)&&(d.borderstyle="",d.bordercolor="",d.backgroundcolor=""))
var m=hl(n.getParam("table_class_list",[],"array"))
0<m.length&&d.class&&(d.class=d.class.replace(/\s*mce\-item\-table\s*/g,""))
var p,g,h,v,b={type:"grid",columns:2,items:(p=m,g=t?[{type:"input",name:"cols",label:"Cols",inputMode:"numeric"},{type:"input",name:"rows",label:"Rows",inputMode:"numeric"}]:[],h=n.getParam("table_appearance_options",!0,"boolean")?[{type:"input",name:"cellspacing",label:"Cell spacing",inputMode:"numeric"},{type:"input",name:"cellpadding",label:"Cell padding",inputMode:"numeric"},{type:"input",name:"border",label:"Border width"},{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[],v=0<p.length?[{type:"listbox",name:"class",label:"Class",items:p}]:[],g.concat([{type:"input",name:"width",label:"Width"},{type:"input",name:"height",label:"Height"}]).concat(h).concat([{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]}]).concat(v))},w=Gi(n)?{type:"tabpanel",tabs:[{title:"General",name:"general",items:[b]},yl("table")]}:{type:"panel",items:[b]}
n.windowManager.open({title:"Table Properties",size:"normal",body:w,onSubmit:r(Ll,n,e,d),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:d})},_l=function(n){return nl(bu(n))},jl=function(n){return Za(bu(n))},Fl=function(t,e,o,u,i){var a=mu(t),l=function(n){return ie(n,a)},f=function(n){return function(e){t.selection.setRng(e.rng),t.focus(),o.clear(n),gu(n),Ni(t,n.dom,e.effect)}},s=function(n){return jl(t).each((function(t){l(t).each((function(e){var r=Cu(u,e,t)
n(e,r).each(f(e))}))}))},d=function(){return jl(t).map((function(e){return l(e).bind((function(r){return function(n,t,e){var r=Oe(n)
return Bc(r,t).bind((function(n){var t=Sc(r,e,!1),o=ye(t).rows.slice(n[0].row,n[n.length-1].row+n[n.length-1].rowspan),u=z(o,(function(n){var t=P(n.cells,(function(n){return!n.isLocked}))
return 0<t.length?[$($({},n),{cells:t})]:[]})),i=Tc(u,e)
return Pr(0<i.length,i)})).map((function(n){return B(n,(function(n){var t=kr(n.element)
return E(n.cells,(function(n){var e=Br(n.element)
bc(e,"colspan",n.colspan,1),bc(e,"rowspan",n.rowspan,1),$e(t,e)})),t}))}))}(r,Cu(u,r,e),iu(n,Bn.fromDom(t.getDoc()),m.none()))}))}))},p=function(){return jl(t).map((function(n){return l(n).bind((function(t){return function(n,t){var e=Oe(n)
return Pc(e,t).map((function(n){var t,r,o=n[n.length-1],u=n[0].column,i=o.column+o.colspan
return G(function(n,t,e){if(Me(n)){var r=P(Ie(n),(function(n){return n.column>=t&&n.column<e})),o=B(r,(function(n){var r=Br(n.element)
return sl(r,"span",e-t),r})),u=Bn.fromTag("colgroup")
return Xe(u,o),[u]}return[]}(e,u,i),(t=u,r=i,B(e.all,(function(n){var e=P(n.cells,(function(n){return n.column>=t&&n.column<r})),o=B(e,(function(n){var e=Br(n.element)
return sl(e,"colspan",r-t),e})),u=Bn.fromTag("tr")
return Xe(u,o),u}))))}))}(t,Cu(u,t,n))}))}))},g=function(n,e){return e().each((function(e){var r=B(e,Br)
jl(t).each((function(e){return l(e).each((function(e){var o,i,c=cu(Bn.fromDom(t.getDoc())),a=(o=r,i=c,{selection:wu(u),clipboard:o,generators:i})
n(e,a).each(f(e))}))}))}))}
zn({mceTableSplitCells:function(){return s(e.unmergeCells)},mceTableMergeCells:function(){return s(e.mergeCells)},mceTableInsertRowBefore:function(){return s(e.insertRowsBefore)},mceTableInsertRowAfter:function(){return s(e.insertRowsAfter)},mceTableInsertColBefore:function(){return s(e.insertColumnsBefore)},mceTableInsertColAfter:function(){return s(e.insertColumnsAfter)},mceTableDeleteCol:function(){return s(e.deleteColumn)},mceTableDeleteRow:function(){return s(e.deleteRow)},mceTableCutCol:function(n){return p().each((function(n){i.setColumns(n),s(e.deleteColumn)}))},mceTableCutRow:function(n){return d().each((function(n){i.setRows(n),s(e.deleteRow)}))},mceTableCopyCol:function(n){return p().each((function(n){return i.setColumns(n)}))},mceTableCopyRow:function(n){return d().each((function(n){return i.setRows(n)}))},mceTablePasteColBefore:function(n){return g(e.pasteColsBefore,i.getColumns)},mceTablePasteColAfter:function(n){return g(e.pasteColsAfter,i.getColumns)},mceTablePasteRowBefore:function(n){return g(e.pasteRowsBefore,i.getRows)},mceTablePasteRowAfter:function(n){return g(e.pasteRowsAfter,i.getRows)},mceTableDelete:function(){return _l(t).each((function(n){ie(n,a).filter(c(a)).each((function(n){var e,r=Bn.fromText("")
Ve(n,r),Je(n),t.dom.isEmpty(t.getBody())?(t.setContent(""),t.selection.setCursorLocation()):((e=t.dom.createRng()).setStart(r.dom,0),e.setEnd(r.dom,0),t.selection.setRng(e),t.nodeChanged())}))}))},mceTableSizingMode:function(n,e){return r=e,_l(t).each((function(n){Ji(t)||Yi(t)||Xi(t)||ie(n,a).each((function(n){"relative"!==r||$u(n)?"fixed"!==r||Gu(n)?"responsive"!==r||Ku(n)||cc(n):ic(t,n):uc(t,n),gu(n),Ni(t,n.dom,Li)}))}))
var r}},(function(n,e){return t.addCommand(e,n)}))
var b=function(n,t){t.each((function(t){Ni(n,t.dom,Li)}))}
zn({mceTableCellType:function(n,r){var o=ie(bu(t),a)
e.setTableCellType(t,r),b(t,o)},mceTableRowType:function(n,r){var o=ie(bu(t),a)
e.setTableRowType(t,r),b(t,o)}},(function(n,e){return t.addCommand(e,n)})),t.addCommand("mceTableColType",(function(n,t){return Vn(t,"type").each((function(n){return s("th"===n?e.makeColumnsHeader:e.unmakeColumnsHeader)}))})),zn({mceTableProps:r(zl,t,!1),mceTableRowProps:r(Ml,t),mceTableCellProps:r(Bl,t,u)},(function(n,e){return t.addCommand(e,(function(){return n()}))})),t.addCommand("mceInsertTable",(function(n,e){v(e)&&0<Wn(e).length?al(t,e.rows,e.columns,e.options,"Invalid values for mceInsertTable - rows and columns values are required to insert a table."):zl(t,!0)})),t.addCommand("mceTableApplyCellStyle",(function(n,e){var r,o,i=function(n){return"tablecell"+n.toLowerCase().replace("-","")}
!v(e)||0!==(r=tl(bu(t),u)).length&&(function(n){for(var t in n)if(Ln.call(n,t))return!1
return!0}(o=Fn(e,(function(n,e){return t.formatter.has(i(e))&&h(n)})))||(zn(o,(function(n,e){E(r,(function(r){Ol.normal(t,r.dom).setFormat(i(e),n)}))})),l(r[0]).each((function(n){return Ni(t,n.dom,Wi)}))))}))},Hl={tablecellbackgroundcolor:{selector:"td,th",styles:{backgroundColor:"%value"},remove_similar:!0},tablecellbordercolor:{selector:"td,th",styles:{borderColor:"%value"},remove_similar:!0},tablecellborderstyle:{selector:"td,th",styles:{borderStyle:"%value"},remove_similar:!0},tablecellborderwidth:{selector:"td,th",styles:{borderWidth:"%value"},remove_similar:!0}},ql=xr([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]),Vl=$($({},ql),{none:function(n){return void 0===n&&(n=void 0),ql.none(n)}}),Ul=function(n,t){return ie(n,t).bind((function(t){var e=oe(t)
return W(e,(function(t){return In(n,t)})).map((function(n){return{index:n,all:e}}))}))},$l=function(n,t,e,r){return{start:n,soffset:t,finish:e,foffset:r}},Gl=xr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Kl={before:Gl.before,on:Gl.on,after:Gl.after,cata:function(n,t,e,r){return n.fold(t,e,r)},getStart:function(n){return n.fold(e,e,e)}},Xl=xr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),Yl={domRange:Xl.domRange,relative:Xl.relative,exact:Xl.exact,exactFromRange:function(n){return Xl.exact(n.start,n.soffset,n.finish,n.foffset)},getWin:function(n){var t=n.match({domRange:function(n){return Bn.fromDom(n.startContainer)},relative:function(n,t){return Kl.getStart(n)},exact:function(n,t,e,r){return n}})
return Bn.fromDom(at(t).dom.defaultView)},range:$l},Jl=function(n,t,e){var r,o,u=n.document.createRange()
return r=u,t.fold((function(n){r.setStartBefore(n.dom)}),(function(n,t){r.setStart(n.dom,t)}),(function(n){r.setStartAfter(n.dom)})),o=u,e.fold((function(n){o.setEndBefore(n.dom)}),(function(n,t){o.setEnd(n.dom,t)}),(function(n){o.setEndAfter(n.dom)})),u},Ql=function(n,t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},Zl=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom,width:n.width,height:n.height}},nf=xr([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),tf=function(n,t,e){return t(Bn.fromDom(e.startContainer),e.startOffset,Bn.fromDom(e.endContainer),e.endOffset)},ef=function(n,e){var r,o,u,i=(r=n,e.match({domRange:function(n){return{ltr:t(n),rtl:m.none}},relative:function(n,t){return{ltr:X((function(){return Jl(r,n,t)})),rtl:X((function(){return m.some(Jl(r,t,n))}))}},exact:function(n,t,e,o){return{ltr:X((function(){return Ql(r,n,t,e,o)})),rtl:X((function(){return m.some(Ql(r,e,o,n,t))}))}}}))
return(u=(o=i).ltr()).collapsed?o.rtl().filter((function(n){return!1===n.collapsed})).map((function(n){return nf.rtl(Bn.fromDom(n.endContainer),n.endOffset,Bn.fromDom(n.startContainer),n.startOffset)})).getOrThunk((function(){return tf(0,nf.ltr,u)})):tf(0,nf.ltr,u)},rf=function(n,t){return ef(n,t).match({ltr:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},rtl:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(r.dom,o),u.setEnd(t.dom,e),u}})},of=(nf.ltr,nf.rtl,function(n,t,e){return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}),uf=function(n,t,e,r){return rt(t)?function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getClientRects()
return U(u,(function(n){return of(n,e,r)?m.some(n):m.none()})).map((function(o){return function(n,t,e,r,o){var u=function(e){var r=n.dom.createRange()
return r.setStart(t.dom,e),r.collapse(!0),r},i=nr(t).length,c=function(n,t,e,r,o){if(0===o)return 0
if(t===r)return o-1
for(var u=r,i=1;i<o;i++){var c=n(i),a=Math.abs(t-c.left)
if(e<=c.bottom){if(e<c.top||u<a)return i-1
u=a}}return 0}((function(n){return u(n).getBoundingClientRect()}),e,r,o.right,i)
return u(c)}(n,t,e,r,o)}))}(n,t,e,r):(u=t,i=e,c=r,a=(o=n).dom.createRange(),l=mt(u),U(l,(function(n){return a.selectNode(n.dom),of(a.getBoundingClientRect(),i,c)?uf(o,n,i,c):m.none()})))
var o,u,i,c,a,l},cf=function(n,t){return t-n.left<n.right-t},af=function(n,t,e){var r=n.dom.createRange()
return r.selectNode(t.dom),r.collapse(e),r},lf=function(n,t,e){var r=n.dom.createRange()
r.selectNode(t.dom)
var o=r.getBoundingClientRect(),u=cf(o,e)
return(!0===u?Yo:Jo)(t).map((function(t){return af(n,t,u)}))},ff=function(n,t,e){var r=t.dom.getBoundingClientRect(),o=cf(r,e)
return m.some(af(n,t,o))},sf=document.caretPositionFromPoint?function(n,t,e){return m.from(n.dom.caretPositionFromPoint(t,e)).bind((function(t){if(null===t.offsetNode)return m.none()
var e=n.dom.createRange()
return e.setStart(t.offsetNode,t.offset),e.collapse(),m.some(e)}))}:document.caretRangeFromPoint?function(n,t,e){return m.from(n.dom.caretRangeFromPoint(t,e))}:function(n,t,e){return Bn.fromPoint(n,t,e).bind((function(r){var o=function(){return e=n,u=t,(0===mt(o=r).length?ff:lf)(e,o,u)
var e,o,u}
return 0===mt(r).length?o():function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect()
return function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect(),i=Math.max(u.left,Math.min(u.right,e)),c=Math.max(u.top,Math.min(u.bottom,r))
return uf(n,t,i,c)}(n,t,Math.max(u.left,Math.min(u.right,e)),Math.max(u.top,Math.min(u.bottom,r)))}(n,r,t,e).orThunk(o)}))},df=function(n,t){var e=Qn(n)
return"input"===e?Kl.after(n):O(["br","img"],e)?0===t?Kl.before(n):Kl.after(n):Kl.on(n,t)},mf=function(n,t){var e=n.fold(Kl.before,df,Kl.after),r=t.fold(Kl.before,df,Kl.after)
return Yl.relative(e,r)},pf=function(n,t,e,r){var o=df(n,t),u=df(e,r)
return Yl.relative(o,u)},gf=function(n){return m.from(n.getSelection())},hf=function(n,t){gf(n).each((function(n){n.removeAllRanges(),n.addRange(t)}))},vf=function(n,t,e,r,o){var u=Ql(n,t,e,r,o)
hf(n,u)},bf=function(n,t){return ef(n,t).match({ltr:function(t,e,r,o){vf(n,t,e,r,o)},rtl:function(t,e,r,o){gf(n).each((function(u){if(u.setBaseAndExtent)u.setBaseAndExtent(t.dom,e,r.dom,o)
else if(u.extend)try{c=t,a=e,l=r,f=o,(i=u).collapse(c.dom,a),i.extend(l.dom,f)}catch(d){vf(n,r,o,t,e)}else vf(n,r,o,t,e)
var i,c,a,l,f}))}})},wf=function(n,t,e,r,o){var u=pf(t,e,r,o)
bf(n,u)},yf=function(n,t,e){var r=mf(t,e)
bf(n,r)},xf=function(n){if(0<n.rangeCount){var t=n.getRangeAt(0),e=n.getRangeAt(n.rangeCount-1)
return m.some($l(Bn.fromDom(t.startContainer),t.startOffset,Bn.fromDom(e.endContainer),e.endOffset))}return m.none()},Cf=function(n){if(null===n.anchorNode||null===n.focusNode)return xf(n)
var t=Bn.fromDom(n.anchorNode),e=Bn.fromDom(n.focusNode)
return function(n,t,e,r){var o,u,i,c,a,l=(u=t,i=e,c=r,(a=ct(o=n).dom.createRange()).setStart(o.dom,u),a.setEnd(i.dom,c),a),f=In(n,e)&&t===r
return l.collapsed&&!f}(t,n.anchorOffset,e,n.focusOffset)?m.some($l(t,n.anchorOffset,e,n.focusOffset)):xf(n)},Sf=function(n){return gf(n).filter((function(n){return 0<n.rangeCount})).bind(Cf).map((function(n){return Yl.exact(n.start,n.soffset,n.finish,n.foffset)}))},Tf=tinymce.util.Tools.resolve("tinymce.util.VK"),Rf=function(n,t,e,r){return Af(n,t,Ul(o=e,undefined).fold((function(){return Vl.none(o)}),(function(n){return n.index+1<n.all.length?Vl.middle(o,n.all[n.index+1]):Vl.last(o)})),r)
var o},Df=function(n,t,e,r){return Af(n,t,Ul(o=e,undefined).fold((function(){return Vl.none()}),(function(n){return 0<=n.index-1?Vl.middle(o,n.all[n.index-1]):Vl.first(o)})),r)
var o},Of=function(n,t){return function(n){var t=Yl.getWin(n).dom,e=function(n,e,r,o){return Ql(t,n,e,r,o)},r=n.match({domRange:function(n){var t=Bn.fromDom(n.startContainer),e=Bn.fromDom(n.endContainer)
return pf(t,n.startOffset,e,n.endOffset)},relative:mf,exact:pf})
return ef(t,r).match({ltr:e,rtl:e})}(Yl.exact(t,0,t,0))},Af=function(n,t,e,r){return e.fold(m.none,m.none,(function(n,t){return Yo(t).map((function(n){return Of(0,n)}))}),(function(e){return ie(e,t).bind((function(t){var o,u=xu(e)
return n.undoManager.transact((function(){r.insertRowsAfter(t,u)})),o=Tt(t,"tr"),V(o).bind((function(n){return Et(n,"td,th").map((function(n){return Of(0,n)}))}))}))}))},kf=["table","li","dl"],Bf=function(n,t){return{selection:n,kill:t}},Ef=function(n,t,e,r){return{start:Kl.on(n,t),finish:Kl.on(e,r)}},Pf=function(n,t){var e=rf(n,t)
return $l(Bn.fromDom(e.startContainer),e.startOffset,Bn.fromDom(e.endContainer),e.endOffset)},If=Ef,Mf=function(n,t,e,r,o){return In(e,r)?m.none():gr(e,r,t).bind((function(t){var r=t.boxes.getOr([])
return 0<r.length?(o(n,r,t.start,t.finish),m.some(Bf(m.some(If(e,0,e,Go(e))),!0))):m.none()}))},Nf=function(n,t){return{item:n,mode:t}},Wf=function(n,t,e,r){return void 0===r&&(r=Lf),n.property().parent(t).map((function(n){return Nf(n,r)}))},Lf=function(n,t,e,r){return void 0===r&&(r=zf),e.sibling(n,t).map((function(n){return Nf(n,r)}))},zf=function(n,t,e,r){void 0===r&&(r=zf)
var o=n.property().children(t)
return e.first(o).map((function(n){return Nf(n,r)}))},_f=[{current:Wf,next:Lf,fallback:m.none()},{current:Lf,next:zf,fallback:m.some(Wf)},{current:zf,next:zf,fallback:m.some(Lf)}],jf=function(n,t,e,r,o){return void 0===o&&(o=_f),N(o,(function(n){return n.current===e})).bind((function(e){return e.current(n,t,r,e.next).orThunk((function(){return e.fallback.bind((function(e){return jf(n,t,e,r)}))}))}))},Ff=function(n,t,e,r,o,u){return jf(n,t,r,o).bind((function(t){return u(t.item)?m.none():e(t.item)?m.some(t.item):Ff(n,t.item,e,t.mode,o,u)}))},Hf=function(n){return function(t){return 0===n.property().children(t).length}},qf=function(n,t,e,r){return Ff(n,t,e,Lf,{sibling:function(n,t){return n.query().prevSibling(t)},first:function(n){return 0<n.length?m.some(n[n.length-1]):m.none()}},r)},Vf=function(n,t,e,r){return Ff(n,t,e,Lf,{sibling:function(n,t){return n.query().nextSibling(t)},first:function(n){return 0<n.length?m.some(n[0]):m.none()}},r)},Uf=or(),$f=function(n,t){return qf(e=Uf,n,Hf(e),t)
var e},Gf=function(n,t){return Vf(e=Uf,n,Hf(e),t)
var e},Kf=xr([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}]),Xf=function(n){return Pt(n,"tr")},Yf=$($({},Kf),{verify:function(n,t,e,r,o,u,i){return Pt(r,"td,th",i).bind((function(e){return Pt(t,"td,th",i).map((function(t){return In(e,t)?In(r,e)&&Go(e)===o?u(t):Kf.none("in same cell"):mr(Xf,[e,t]).fold((function(){return o=t,i=e,c=(r=n).getRect(o),(a=r.getRect(i)).right>c.left&&a.left<c.right?Kf.success():u(t)
var r,o,i,c,a}),(function(n){return u(t)}))}))})).getOr(Kf.none("default"))},cata:function(n,t,e,r,o){return n.fold(t,e,r,o)}}),Jf=function(n){return"br"===Qn(n)},Qf=function(n,t,e){return t(n,e).bind((function(n){return rt(n)&&0===nr(n).trim().length?Qf(n,t,e):m.some(n)}))},Zf=function(n,t,e,o){return pt(u=t,i=e).filter(Jf).orThunk((function(){return pt(u,i-1).filter(Jf)})).bind((function(t){return o.traverse(t).fold((function(){return Qf(t,o.gather,n).map(o.relative)}),(function(n){return lt(t=n).bind((function(n){var e=mt(n)
return function(n,t){return W(n,r(In,t))}(e,t).map((function(r){return{parent:n,children:e,element:t,index:r}}))})).map((function(n){return Kl.on(n.parent,n.index)}))
var t}))}))
var u,i},ns=function(n,t){return{left:n.left,top:n.top+t,right:n.right,bottom:n.bottom+t}},ts=function(n,t){return{left:n.left,top:n.top-t,right:n.right,bottom:n.bottom-t}},es=function(n,t,e){return{left:n.left+t,top:n.top+e,right:n.right+t,bottom:n.bottom+e}},rs=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},os=function(n,t){return m.some(n.getRect(t))},us=function(n,t,e){return et(t)?os(n,t).map(rs):rt(t)?(r=n,o=t,(0<=(u=e)&&u<Go(o)?r.getRangedRect(o,u,o,u+1):0<u?r.getRangedRect(o,u-1,o,u):m.none()).map(rs)):m.none()
var r,o,u},is=function(n,t){return et(t)?os(n,t).map(rs):rt(t)?n.getRangedRect(t,0,t,Go(t)).map(rs):m.none()},cs=xr([{none:[]},{retry:["caret"]}]),as=function(n,t,e){return Rt((function(n,t){return t(n)}),At,t,sa,undefined).fold(a,(function(t){return is(n,t).exists((function(n){return r=n,(t=e).left<r.left||Math.abs(r.right-t.left)<1||t.left>r.right
var t,r}))}))},ls={point:function(n){return n.bottom},adjuster:function(n,t,e,r,o){var u=ns(o,5)
return Math.abs(e.bottom-r.bottom)<1||e.top>o.bottom?cs.retry(u):e.top===o.bottom?cs.retry(ns(o,1)):as(n,t,o)?cs.retry(es(u,5,0)):cs.none()},move:ns,gather:Gf},fs=function(n,t,e,r,o){return 0===o?m.some(r):(a=n,l=r.left,f=t.point(r),a.elementFromPoint(l,f).filter((function(n){return"table"===Qn(n)})).isSome()?(i=r,c=o-1,fs(n,u=t,e,u.move(i,5),c)):n.situsFromPoint(r.left,t.point(r)).bind((function(u){return u.start.fold(m.none,(function(u){return is(n,u).bind((function(i){return t.adjuster(n,u,i,e,r).fold(m.none,(function(r){return fs(n,t,e,r,o-1)}))})).orThunk((function(){return m.some(r)}))}),m.none)})))
var u,i,c,a,l,f},ss=function(n,t,e){var r,o,u,i=n.move(e,5),c=fs(t,n,e,i,100).getOr(i)
return o=c,u=t,((r=n).point(o)>u.getInnerHeight()?m.some(r.point(o)-u.getInnerHeight()):r.point(o)<0?m.some(-r.point(o)):m.none()).fold((function(){return t.situsFromPoint(c.left,n.point(c))}),(function(e){return t.scrollBy(0,e),t.situsFromPoint(c.left,n.point(c)-e)}))},ds={tryUp:r(ss,{point:function(n){return n.top},adjuster:function(n,t,e,r,o){var u=ts(o,5)
return Math.abs(e.top-r.top)<1||e.bottom<o.top?cs.retry(u):e.bottom===o.top?cs.retry(ts(o,1)):as(n,t,o)?cs.retry(es(u,5,0)):cs.none()},move:ts,gather:$f}),tryDown:r(ss,ls),ieTryUp:function(n,t){return n.situsFromPoint(t.left,t.top-5)},ieTryDown:function(n,t){return n.situsFromPoint(t.left,t.bottom+5)},getJumpSize:t(5)},ms=function(n,t,e){return n.getSelection().bind((function(r){return function(n,t,e,r){var o,u,i
return(Jf(t)?(o=n,u=t,(i=r).traverse(u).orThunk((function(){return Qf(u,i.gather,o)})).map(i.relative)):Zf(n,t,e,r)).map((function(n){return{start:n,finish:n}}))}(t,r.finish,r.foffset,e).fold((function(){return m.some(sc(r.finish,r.foffset))}),(function(o){var u,i=n.fromSitus(o)
return u=Yf.verify(n,r.finish,r.foffset,i.finish,i.foffset,e.failure,t),Yf.cata(u,(function(n){return m.none()}),(function(){return m.none()}),(function(n){return m.some(sc(n,0))}),(function(n){return m.some(sc(n,Go(n)))}))}))}))},ps=function(n,t,e,r,o,u){return 0===u?m.none():vs(n,t,e,r,o).bind((function(i){var c=n.fromSitus(i),a=Yf.verify(n,e,r,c.finish,c.foffset,o.failure,t)
return Yf.cata(a,(function(){return m.none()}),(function(){return m.some(i)}),(function(i){return In(e,i)&&0===r?gs(n,e,r,ts,o):ps(n,t,i,0,o,u-1)}),(function(i){return In(e,i)&&r===Go(i)?gs(n,e,r,ns,o):ps(n,t,i,Go(i),o,u-1)}))}))},gs=function(n,t,e,r,o){return us(n,t,e).bind((function(t){return hs(n,o,r(t,ds.getJumpSize()))}))},hs=function(n,t,e){var r=An().browser
return r.isChrome()||r.isSafari()||r.isFirefox()||r.isEdge()?t.otherRetry(n,e):r.isIE()?t.ieRetry(n,e):m.none()},vs=function(n,t,e,r,o){return us(n,e,r).bind((function(t){return hs(n,o,t)}))},bs=function(n,t,e,r,o){return Pt(r,"td,th",t).bind((function(r){return Pt(r,"table",t).bind((function(u){return function(n,t){return At(n,(function(n){return lt(n).exists((function(n){return In(n,t)}))}),void 0).isSome()}(o,u)?ms(i=n,c=t,a=e).bind((function(n){return ps(i,c,n.element,n.offset,a,20).map(i.fromSitus)})).bind((function(n){return Pt(n.finish,"td,th",t).map((function(t){return{start:r,finish:t,range:n}}))})):m.none()
var i,c,a}))}))},ws=function(n,t,e,r,o,u){return An().browser.isIE()?m.none():u(r,t).orThunk((function(){return bs(n,t,e,r,o).map((function(n){var t=n.range
return Bf(m.some(If(t.start,t.soffset,t.finish,t.foffset)),!0)}))}))},ys=function(n,t){return Pt(n,"tr",t).bind((function(n){return Pt(n,"table",t).bind((function(e){var r=Tt(e,"tr")
return In(n,r[0])?qf(Uf,e,(function(n){return Jo(n).isSome()}),t).map((function(n){var t=Go(n)
return Bf(m.some(If(n,t,n,t)),!0)})):m.none()}))}))},xs=function(n,t){return Pt(n,"tr",t).bind((function(n){return Pt(n,"table",t).bind((function(e){var r=Tt(e,"tr")
return In(n,r[r.length-1])?Vf(Uf,e,(function(n){return Yo(n).isSome()}),t).map((function(n){return Bf(m.some(If(n,0,n,0)),!0)})):m.none()}))}))},Cs=function(n,t,e,r,o,u,i){return bs(n,e,r,o,u).bind((function(n){return Mf(t,e,n.start,n.finish,i)}))},Ss=function(n,t){return Pt(n,"td,th",t)},Ts=function(n,t,e,r){var o,u=(o=jo(m.none()),{clear:function(){return o.set(m.none())},set:function(n){return o.set(m.some(n))},isSet:function(){return o.get().isSome()},on:function(n){return o.get().each(n)}}),i=u.clear,c=function(o){u.on((function(u){r.clearBeforeUpdate(t),Ss(o.target,e).each((function(o){gr(u,o,e).each((function(e){var i=e.boxes.getOr([]);(1<i.length||1===i.length&&!In(u,o))&&(r.selectRange(t,i,e.start,e.finish),n.selectContents(o))}))}))}))}
return{clearstate:i,mousedown:function(n){r.clear(t),Ss(n.target,e).each(u.set)},mouseover:function(n){c(n)},mouseup:function(n){c(n),i()}}},Rs={traverse:dt,gather:Gf,relative:Kl.before,otherRetry:ds.tryDown,ieRetry:ds.ieTryDown,failure:Yf.failedDown},Ds={traverse:st,gather:$f,relative:Kl.before,otherRetry:ds.tryUp,ieRetry:ds.ieTryUp,failure:Yf.failedUp},Os=function(n){return function(t){return t===n}},As=Os(38),ks=Os(40),Bs=function(n){return 37<=n&&n<=40},Es={isBackward:Os(37),isForward:Os(39)},Ps={isBackward:Os(39),isForward:Os(37)},Is=function(n){return{elementFromPoint:function(t,e){return Bn.fromPoint(Bn.fromDom(n.document),t,e)},getRect:function(n){return n.dom.getBoundingClientRect()},getRangedRect:function(t,e,r,o){var u=Yl.exact(t,e,r,o)
return function(n,t){var e,r,o
return 0<(o=0<(r=(e=rf(n,t)).getClientRects()).length?r[0]:e.getBoundingClientRect()).width||0<o.height?m.some(o).map(Zl):m.none()}(n,u)},getSelection:function(){return Sf(n).map((function(t){return Pf(n,t)}))},fromSitus:function(t){var e=Yl.relative(t.start,t.finish)
return Pf(n,e)},situsFromPoint:function(t,e){return function(n,t,e){return r=t,o=e,u=Bn.fromDom(n.document),sf(u,r,o).map((function(n){return $l(Bn.fromDom(n.startContainer),n.startOffset,Bn.fromDom(n.endContainer),n.endOffset)}))
var r,o,u}(n,t,e).map((function(n){return Ef(n.start,n.soffset,n.finish,n.foffset)}))},clearSelection:function(){gf(n).each((function(n){return n.removeAllRanges()}))},collapseSelection:function(t){void 0===t&&(t=!1),Sf(n).each((function(e){return e.fold((function(n){return n.collapse(t)}),(function(e,r){var o=t?e:r
yf(n,o,o)}),(function(e,r,o,u){var i=t?e:o,c=t?r:u
wf(n,i,c,i,c)}))}))},setSelection:function(t){wf(n,t.start,t.soffset,t.finish,t.foffset)},setRelativeSelection:function(t,e){yf(n,t,e)},selectContents:function(t){(function(n,t){var e,r,o=(e=t,function(n,t){n.selectNodeContents(t.dom)}(r=n.document.createRange(),e),r)
hf(n,o)})(n,t)},getInnerHeight:function(){return n.innerHeight},getScrollY:function(){var t,e,r,o
return(t=Bn.fromDom(n.document),e=void 0!==t?t.dom:document,r=e.body.scrollLeft||e.documentElement.scrollLeft,o=e.body.scrollTop||e.documentElement.scrollTop,$r(r,o)).top},scrollBy:function(t,e){var r,o,u,i
r=t,o=e,(i=(void 0!==(u=Bn.fromDom(n.document))?u.dom:document).defaultView)&&i.scrollBy(r,o)}}},Ms=function(n,t){return{rows:n,cols:t}},Ns=function(n){return!1===pi(Bn.fromDom(n.target),"ephox-snooker-resizer-bar")}
function Ws(t,e,o){var u=function(n,t,e){var r=function(t){zt(t,n.selected),zt(t,n.firstSelected),zt(t,n.lastSelected)},o=function(t){Mt(t,n.selected,"1")},u=function(n){i(n),e()},i=function(t){var e=Tt(t,n.selectedSelector)
E(e,r)}
return{clearBeforeUpdate:i,clear:u,selectRange:function(e,r,i,c){u(e),E(r,o),Mt(i,n.firstSelected,"1"),Mt(c,n.lastSelected,"1"),t(r,i,c)},selectedSelector:n.selectedSelector,firstSelectedSelector:n.firstSelectedSelector,lastSelectedSelector:n.lastSelectedSelector}}(yu,(function(e,r,u){o.targets().each((function(o){ie(r).each((function(i){var c,a,l,f,s=ec(t),d=iu(n,Bn.fromDom(t.getDoc()),s),m=function(n,t,e){var r=Oe(n)
return Bc(r,t).map((function(n){var t,o,u,i,c,a,l,f,s,d=Sc(r,e,!1)
return{upOrLeftCells:(t=n,o=e,u=d.slice(0,t[t.length-1].row+1),i=Tc(u,o),z(i,(function(n){var e=n.cells.slice(0,t[t.length-1].column+1)
return B(e,(function(n){return n.element}))}))),downOrRightCells:(a=n,l=e,f=(c=d).slice(a[0].row+a[0].rowspan-1,c.length),s=Tc(f,l),z(s,(function(n){var t=n.cells.slice(a[0].column+a[0].colspan-1,n.cells.length)
return B(t,(function(n){return n.element}))})))}}))}(i,o,d)
c=e,a=r,l=u,f=m,t.fire("TableSelectionChange",{cells:c,start:a,finish:l,otherCells:f})}))}))}),(function(){t.fire("TableSelectionClear")}))
return t.on("init",(function(o){var i,c,a,l,f,s,d=t.getWin(),p=fu(t),g=mu(t),h=(i=Is(d),{clearstate:(c=Ts(i,p,g,u)).clearstate,mousedown:c.mousedown,mouseover:c.mouseover,mouseup:c.mouseup}),v=function(n,t,e,o){var u=Is(n),i=function(){return o.clear(t),m.none()}
return{keydown:function(n,c,a,l,f,s){var d=n.raw,p=d.which,g=!0===d.shiftKey
return hr(t,o.selectedSelector).fold((function(){return ks(p)&&g?r(Cs,u,t,e,Rs,l,c,o.selectRange):As(p)&&g?r(Cs,u,t,e,Ds,l,c,o.selectRange):ks(p)?r(ws,u,e,Rs,l,c,xs):As(p)?r(ws,u,e,Ds,l,c,ys):m.none}),(function(n){var e=function(e){return function(){return U(e,(function(e){return r=e.rows,u=e.cols,i=t,br(n,r,u,(c=o).firstSelectedSelector,c.lastSelectedSelector).map((function(n){return c.clearBeforeUpdate(i),c.selectRange(i,n.boxes,n.start,n.finish),n.boxes}))
var r,u,i,c})).fold((function(){return vr(t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){var e=ks(p)||s.isForward(p)?Kl.after:Kl.before
return u.setRelativeSelection(Kl.on(n.first,0),e(n.table)),o.clear(t),Bf(m.none(),!0)}))}),(function(n){return m.some(Bf(m.none(),!0))}))}}
return ks(p)&&g?e([Ms(1,0)]):As(p)&&g?e([Ms(-1,0)]):s.isBackward(p)&&g?e([Ms(0,-1),Ms(-1,0)]):s.isForward(p)&&g?e([Ms(0,1),Ms(1,0)]):Bs(p)&&0==g?i:m.none}))()},keyup:function(n,r,u,i,c){return hr(t,o.selectedSelector).fold((function(){var a,l,f,s,d,p,g,h=n.raw,v=h.which
return 0!=(!0===h.shiftKey)&&Bs(v)?(a=t,l=e,f=r,s=u,d=i,p=c,g=o.selectRange,In(f,d)&&s===p?m.none():Pt(f,"td,th",l).bind((function(n){return Pt(d,"td,th",l).bind((function(t){return Mf(a,l,n,t,g)}))}))):m.none()}),m.none)}}}(d,p,g,u),b=(a=p,l=g,f=u,s=Is(d),function(n,t){f.clearBeforeUpdate(a),gr(n,t,l).each((function(n){var e=n.boxes.getOr([])
f.selectRange(a,e,n.start,n.finish),s.selectContents(t),s.collapseSelection()}))})
t.on("TableSelectorChange",(function(n){return b(n.start,n.finish)}))
var w,y,x=function(n,e){!0===n.raw.shiftKey&&(e.kill&&n.kill(),e.selection.each((function(n){var e=Yl.relative(n.start,n.finish),r=rf(d,e)
t.selection.setRng(r)})))},C=function(n){return 0===n.button},S=(w=jo(Bn.fromDom(p)),y=jo(0),{touchEnd:function(n){var t,e,r=Bn.fromDom(n.target)
"td"!==Qn(r)&&"th"!==Qn(r)||(t=w.get(),e=y.get(),In(t,r)&&n.timeStamp-e<300&&(n.preventDefault(),b(r,r))),w.set(r),y.set(n.timeStamp)}})
t.on("dragstart",(function(n){h.clearstate()})),t.on("mousedown",(function(n){C(n)&&Ns(n)&&h.mousedown(fi(n))})),t.on("mouseover",(function(n){var t;(void 0===(t=n).buttons||Nl.browser.isEdge()&&0===t.buttons||0!=(1&t.buttons))&&Ns(n)&&h.mouseover(fi(n))})),t.on("mouseup",(function(n){C(n)&&Ns(n)&&h.mouseup(fi(n))})),t.on("touchend",S.touchEnd),t.on("keyup",(function(n){var e,r,o,u=fi(n)
u.raw.shiftKey&&Bs(u.raw.which)&&(e=t.selection.getRng(),r=Bn.fromDom(e.startContainer),o=Bn.fromDom(e.endContainer),v.keyup(u,r,e.startOffset,o,e.endOffset).each((function(n){x(u,n)})))})),t.on("keydown",(function(n){var r=fi(n)
e().each((function(n){return n.hideBars()}))
var o=t.selection.getRng(),u=Bn.fromDom(o.startContainer),i=Bn.fromDom(o.endContainer),c=jr(Es,Ps)(Bn.fromDom(t.selection.getStart()))
v.keydown(r,u,o.startOffset,i,o.endOffset,c).each((function(n){x(r,n)})),e().each((function(n){return n.showBars()}))})),t.on("NodeChange",(function(){var e=t.selection,r=Bn.fromDom(e.getStart()),o=Bn.fromDom(e.getEnd())
mr(ie,[r,o]).fold((function(){return u.clear(p)}),n)}))})),{clear:u.clear}}Or.add("table",(function(n){var t,e,r,o,u,i,c,a,l,f,s,d,p,g,h,v,b,w,y,x,C=(t=function(){return fu(n)},e=function(){return nl(bu(n))},r=yu.selectedSelector,{get:function(){return wr(t(),r).fold((function(){return e().map(Dr).getOrThunk(Tr)}),(function(n){return Rr(n)}))}}),S=(o=n,u=C,i=jo(m.none()),c=jo([]),a=m.none(),l=it("caption"),f=function(n){return a.forall((function(t){return!t[n]}))},s=function(){return nl(bu(o)).bind((function(n){return ie(n).map((function(t){return l(n)?xu(n):Cu(u,t,n)}))}))},d=function(n){return ie(n.element).map((function(t){var e=Oe(t),r=Bc(e,n).getOr([]),o=M(r,(function(n,t){return t.isLocked&&(n.onAny=!0,0===t.column?n.onFirst=!0:t.column+t.colspan>=e.grid.columns&&(n.onLast=!0)),n}),{onAny:!1,onFirst:!1,onLast:!1})
return{mergeable:Mc(e,n).isSome(),unmergeable:Nc(e,n).isSome(),locked:o}}))},p=function(){i.set(X(s)()),a=i.get().bind(d),E(c.get(),(function(n){return n()}))},g=function(n,t){var e=function(){return i.get().fold((function(){n.setDisabled(!0)}),(function(e){n.setDisabled(t(e))}))}
return e(),c.set(c.get().concat([e])),function(){c.set(P(c.get(),(function(n){return n!==e})))}},h=function(n){return a.exists((function(t){return t.locked[n]}))},o.on("NodeChange ExecCommand TableSelectorChange",p),{onSetupTable:function(n){return g(n,(function(n){return!1}))},onSetupCellOrRow:function(n){return g(n,(function(n){return l(n.element)}))},onSetupColumn:function(n){return function(t){return g(t,(function(t){return l(t.element)||h(n)}))}},onSetupPasteable:function(n){return function(t){return g(t,(function(t){return l(t.element)||n().isNone()}))}},onSetupPasteableColumn:function(n,t){return function(e){return g(e,(function(e){return l(e.element)||n().isNone()||h(t)}))}},onSetupMergeable:function(n){return g(n,(function(n){return f("mergeable")}))},onSetupUnmergeable:function(n){return g(n,(function(n){return f("unmergeable")}))},resetTargets:p,targets:function(){return i.get()}}),T=fc(n),R=Ws(n,T.lazyResize,S),D=rl(n,T.lazyWire,C),A=(v=jo(m.none()),b=jo(m.none()),w=function(n){n.set(m.none())},{getRows:v.get,setRows:function(n){v.set(n),w(b)},clearRows:function(){return w(v)},getColumns:b.get,setColumns:function(n){b.set(n),w(v)},clearColumns:function(){return w(b)}})
return Fl(n,D,R,C,A),function(n,t,e){var r=mu(n)
zn({mceTableRowType:function(){return t.getTableRowType(n)},mceTableCellType:function(){return t.getTableCellType(n)},mceTableColType:function(){return Za(bu(n)).bind((function(n){return ie(n,r).map((function(r){var o=Cu(e,r,n)
return t.getTableColType(r,o)}))})).getOr("")}},(function(t,e){return n.addQueryValueHandler(e,t)}))}(n,D,C),Su(n,C,D,R),function(n,t,e){var r=function(t){return function(){return n.execCommand(t)}},o=function(t){n.execCommand("mceInsertTable",!1,{rows:t.numRows,columns:t.numColumns})},u={text:"Table properties",onSetup:t.onSetupTable,onAction:r("mceTableProps")},i={text:"Delete table",icon:"table-delete-table",onSetup:t.onSetupTable,onAction:r("mceTableDelete")}
n.ui.registry.addMenuItem("tableinsertrowbefore",{text:"Insert row before",icon:"table-insert-row-above",onAction:r("mceTableInsertRowBefore"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertrowafter",{text:"Insert row after",icon:"table-insert-row-after",onAction:r("mceTableInsertRowAfter"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeleterow",{text:"Delete row",icon:"table-delete-row",onAction:r("mceTableDeleteRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablerowprops",{text:"Row properties",icon:"table-row-properties",onAction:r("mceTableRowProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutrow",{text:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopyrow",{text:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepasterowbefore",{text:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tablepasterowafter",{text:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tableinsertcolumnbefore",{text:"Insert column before",icon:"table-insert-column-before",onAction:r("mceTableInsertColBefore"),onSetup:t.onSetupColumn("onFirst")}),n.ui.registry.addMenuItem("tableinsertcolumnafter",{text:"Insert column after",icon:"table-insert-column-after",onAction:r("mceTableInsertColAfter"),onSetup:t.onSetupColumn("onLast")}),n.ui.registry.addMenuItem("tabledeletecolumn",{text:"Delete column",icon:"table-delete-column",onAction:r("mceTableDeleteCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablecutcolumn",{text:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablecopycolumn",{text:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablepastecolumnbefore",{text:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteableColumn(e.getColumns,"onFirst")}),n.ui.registry.addMenuItem("tablepastecolumnafter",{text:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteableColumn(e.getColumns,"onLast")}),n.ui.registry.addMenuItem("tablecellprops",{text:"Cell properties",icon:"table-cell-properties",onAction:r("mceTableCellProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablemergecells",{text:"Merge cells",icon:"table-merge-cells",onAction:r("mceTableMergeCells"),onSetup:t.onSetupMergeable}),n.ui.registry.addMenuItem("tablesplitcells",{text:"Split cell",icon:"table-split-cells",onAction:r("mceTableSplitCells"),onSetup:t.onSetupUnmergeable}),!1===n.getParam("table_grid",!0,"boolean")?n.ui.registry.addMenuItem("inserttable",{text:"Table",icon:"table",onAction:r("mceInsertTable")}):n.ui.registry.addNestedMenuItem("inserttable",{text:"Table",icon:"table",getSubmenuItems:function(){return[{type:"fancymenuitem",fancytype:"inserttable",onAction:o}]}}),n.ui.registry.addMenuItem("inserttabledialog",{text:"Insert table",icon:"table",onAction:r("mceInsertTable")}),n.ui.registry.addMenuItem("tableprops",u),n.ui.registry.addMenuItem("deletetable",i),n.ui.registry.addNestedMenuItem("row",{type:"nestedmenuitem",text:"Row",getSubmenuItems:function(){return"tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter"}}),n.ui.registry.addNestedMenuItem("column",{type:"nestedmenuitem",text:"Column",getSubmenuItems:function(){return"tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter"}}),n.ui.registry.addNestedMenuItem("cell",{type:"nestedmenuitem",text:"Cell",getSubmenuItems:function(){return"tablecellprops tablemergecells tablesplitcells"}}),n.ui.registry.addContextMenu("table",{update:function(){return t.resetTargets(),t.targets().fold((function(){return""}),(function(n){return"caption"===Qn(n.element)?"tableprops deletetable":"cell row column | advtablesort | tableprops deletetable"}))}})}(n,S,A),function(n,t,e){n.ui.registry.addMenuButton("table",{tooltip:"Table",icon:"table",fetch:function(n){return n("inserttable | cell row column | advtablesort | tableprops deletetable")}})
var r=function(t){return function(){return n.execCommand(t)}}
n.ui.registry.addButton("tableprops",{tooltip:"Table properties",onAction:r("mceTableProps"),icon:"table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tabledelete",{tooltip:"Delete table",onAction:r("mceTableDelete"),icon:"table-delete-table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tablecellprops",{tooltip:"Cell properties",onAction:r("mceTableCellProps"),icon:"table-cell-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablemergecells",{tooltip:"Merge cells",onAction:r("mceTableMergeCells"),icon:"table-merge-cells",onSetup:t.onSetupMergeable}),n.ui.registry.addButton("tablesplitcells",{tooltip:"Split cell",onAction:r("mceTableSplitCells"),icon:"table-split-cells",onSetup:t.onSetupUnmergeable}),n.ui.registry.addButton("tableinsertrowbefore",{tooltip:"Insert row before",onAction:r("mceTableInsertRowBefore"),icon:"table-insert-row-above",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertrowafter",{tooltip:"Insert row after",onAction:r("mceTableInsertRowAfter"),icon:"table-insert-row-after",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tabledeleterow",{tooltip:"Delete row",onAction:r("mceTableDeleteRow"),icon:"table-delete-row",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablerowprops",{tooltip:"Row properties",onAction:r("mceTableRowProps"),icon:"table-row-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolbefore",{tooltip:"Insert column before",onAction:r("mceTableInsertColBefore"),icon:"table-insert-column-before",onSetup:t.onSetupColumn("onFirst")}),n.ui.registry.addButton("tableinsertcolafter",{tooltip:"Insert column after",onAction:r("mceTableInsertColAfter"),icon:"table-insert-column-after",onSetup:t.onSetupColumn("onLast")}),n.ui.registry.addButton("tabledeletecol",{tooltip:"Delete column",onAction:r("mceTableDeleteCol"),icon:"table-delete-column",onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addButton("tablecutrow",{tooltip:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecopyrow",{tooltip:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablepasterowbefore",{tooltip:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablepasterowafter",{tooltip:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablecutcol",{tooltip:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addButton("tablecopycol",{tooltip:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addButton("tablepastecolbefore",{tooltip:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteableColumn(e.getColumns,"onFirst")}),n.ui.registry.addButton("tablepastecolafter",{tooltip:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteableColumn(e.getColumns,"onLast")}),n.ui.registry.addButton("tableinsertdialog",{tooltip:"Insert table",onAction:r("mceInsertTable"),icon:"table"})}(n,S,A),0<(x=(y=n).getParam("table_toolbar","tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol")).length&&y.ui.registry.addContextToolbar("table",{predicate:function(n){return y.dom.is(n,"table")&&y.getBody().contains(n)},items:x,scope:"node",position:"node"}),n.on("PreInit",(function(){n.serializer.addTempAttr(yu.firstSelected),n.serializer.addTempAttr(yu.lastSelected),n.formatter.register(Hl)})),n.getParam("table_tab_navigation",!0,"boolean")&&n.on("keydown",(function(t){var e,r,o,u,i,c,a
r=n,o=D,(e=t).keyCode===Tf.TAB&&(u=fu(r),i=function(n){var t=Qn(n)
return In(n,u)||O(kf,t)},(c=r.selection.getRng()).collapsed&&(a=Bn.fromDom(c.startContainer),re(a,i).each((function(n){e.preventDefault(),(e.shiftKey?Df:Rf)(r,i,n,o).each((function(n){r.selection.setRng(n)}))}))))})),n.on("remove",(function(){T.destroy()})),function(n,t,e,r){return{insertTable:(o=n,function(n,t,e){void 0===e&&(e={})
var r=al(o,t,n,e,"Invalid values for insertTable - rows and columns values are required to insert a table.")
return o.undoManager.add(),r}),setClipboardRows:fl(t.setRows),getClipboardRows:ll(t.getRows),setClipboardCols:fl(t.setColumns),getClipboardCols:ll(t.getColumns),resizeHandler:e,selectionTargets:r}
var o}(n,A,T,S)}))}()

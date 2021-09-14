(function(){"use strict"
var n=function(){},t=function(n){return function(){return n}},e=function(n){return n}
function r(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e]
return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o=t.concat(e)
return n.apply(null,o)}}var o,u=function(n){return function(t){return!n(t)}},i=t(!1),c=t(!0),a=function(){return l},l=function(){var e=function(n){return n.isNone()},r=function(n){return n()},o=function(n){return n}
return{fold:function(n,t){return n()},is:i,isSome:i,isNone:c,getOr:o,getOrThunk:r,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:t(null),getOrUndefined:t(void 0),or:o,orThunk:r,map:a,each:n,bind:a,exists:i,forall:c,filter:a,equals:e,equals_:e,toArray:function(){return[]},toString:t("none()")}}(),f=function(n){var e=t(n),r=function(){return u},o=function(t){return t(n)},u={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:c,isNone:i,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:r,orThunk:r,map:function(t){return f(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?u:l},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(i,(function(t){return e(n,t)}))}}
return u},s={some:f,none:a,from:function(n){return null==n?l:f(n)}},m=function(n){return function(t){return r=typeof(e=t),(null===e?"null":"object"===r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===n
var e,r}},d=function(n){return function(t){return typeof t===n}},g=m("string"),p=m("object"),v=m("array"),h=d("boolean"),b=(o=void 0,function(n){return o===n}),w=function(n){return!function(n){return null==n}(n)},y=d("function"),C=d("number"),x=Array.prototype.slice,S=Array.prototype.indexOf,T=Array.prototype.push,R=function(n,t){return function(n,t){return S.call(n,t)}(n,t)>-1},D=function(n,t){for(var e=0,r=n.length;e<r;e++){if(t(n[e],e))return!0}return!1},O=function(n,t){for(var e=[],r=0;r<n;r++)e.push(t(r))
return e},A=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var u=n[o]
r[o]=t(u,o)}return r},k=function(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e)}},I=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var u=n[r]
t(u,r)&&e.push(u)}return e},B=function(n,t,e){return function(n,t){for(var e=n.length-1;e>=0;e--)t(n[e],e)}(n,(function(n){e=t(e,n)})),e},P=function(n,t,e){return k(n,(function(n){e=t(e,n)})),e},E=function(n,t){return function(n,t,e){for(var r=0,o=n.length;r<o;r++){var u=n[r]
if(t(u,r))return s.some(u)
if(e(u,r))break}return s.none()}(n,t,i)},M=function(n,t){for(var e=0,r=n.length;e<r;e++){if(t(n[e],e))return s.some(e)}return s.none()},N=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!v(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n)
T.apply(t,n[e])}return t},j=function(n,t){return N(A(n,t))},W=function(n,t){for(var e=0,r=n.length;e<r;++e){if(!0!==t(n[e],e))return!1}return!0},L=function(n,t){for(var e={},r=0,o=n.length;r<o;r++){var u=n[r]
e[String(u)]=t(u,r)}return e},z=function(n){return[n]},_=function(n,t){return t>=0&&t<n.length?s.some(n[t]):s.none()},F=function(n){return _(n,0)},H=function(n){return _(n,n.length-1)},q=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e)
if(r.isSome())return r}return s.none()},V=function(){return(V=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])
return n}).apply(this,arguments)}
function U(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length
var r=Array(n),o=0
for(t=0;t<e;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i]
return r}var $=function(n){var t,e=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return e||(e=!0,t=n.apply(null,r)),t}},G=function(){return K(0,0)},K=function(n,t){return{major:n,minor:t}},X={nu:K,detect:function(n,t){var e=String(t).toLowerCase()
return 0===n.length?G():function(n,t){var e=function(n,t){for(var e=0;e<n.length;e++){var r=n[e]
if(r.test(t))return r}}(n,t)
if(!e)return{major:0,minor:0}
var r=function(n){return Number(t.replace(e,"$"+n))}
return K(r(1),r(2))}(n,e)},unknown:G},Y=function(n,t){var e=String(t).toLowerCase()
return E(n,(function(n){return n.search(e)}))},J=function(n,t){return Y(n,t).map((function(n){var e=X.detect(n.versionRegexes,t)
return{current:n.name,version:e}}))},Q=function(n,t){return Y(n,t).map((function(n){var e=X.detect(n.versionRegexes,t)
return{current:n.name,version:e}}))},Z=function(n,t,e){return""===t||n.length>=t.length&&n.substr(e,e+t.length)===t},nn=function(n,t){return-1!==n.indexOf(t)},tn=function(n,t){return Z(n,t,0)},en=function(n,t){return Z(n,t,n.length-t.length)},rn=function(n){return function(t){return t.replace(n,"")}}(/^\s+|\s+$/g),on=function(n){return n.length>0},un=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,cn=function(n){return function(t){return nn(t,n)}},an=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return nn(n,"edge/")&&nn(n,"chrome")&&nn(n,"safari")&&nn(n,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,un],search:function(n){return nn(n,"chrome")&&!nn(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return nn(n,"msie")||nn(n,"trident")}},{name:"Opera",versionRegexes:[un,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:cn("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:cn("firefox")},{name:"Safari",versionRegexes:[un,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(nn(n,"safari")||nn(n,"mobile/"))&&nn(n,"applewebkit")}}],ln=[{name:"Windows",search:cn("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return nn(n,"iphone")||nn(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:cn("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:cn("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:cn("linux"),versionRegexes:[]},{name:"Solaris",search:cn("sunos"),versionRegexes:[]},{name:"FreeBSD",search:cn("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:cn("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],fn={browsers:t(an),oses:t(ln)},sn="Edge",mn="Chrome",dn="Opera",gn="Firefox",pn="Safari",vn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isEdge:r(sn),isChrome:r(mn),isIE:r("IE"),isOpera:r(dn),isFirefox:r(gn),isSafari:r(pn)}},hn={unknown:function(){return vn({current:void 0,version:X.unknown()})},nu:vn,edge:t(sn),chrome:t(mn),ie:t("IE"),opera:t(dn),firefox:t(gn),safari:t(pn)},bn="Windows",wn="Android",yn="Linux",Cn="Solaris",xn="FreeBSD",Sn="ChromeOS",Tn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isWindows:r(bn),isiOS:r("iOS"),isAndroid:r(wn),isOSX:r("OSX"),isLinux:r(yn),isSolaris:r(Cn),isFreeBSD:r(xn),isChromeOS:r(Sn)}},Rn={unknown:function(){return Tn({current:void 0,version:X.unknown()})},nu:Tn,windows:t(bn),ios:t("iOS"),android:t(wn),linux:t(yn),osx:t("OSX"),solaris:t(Cn),freebsd:t(xn),chromeos:t(Sn)},Dn=function(n,e){var r=fn.browsers(),o=fn.oses(),u=J(r,n).fold(hn.unknown,hn.nu),i=Q(o,n).fold(Rn.unknown,Rn.nu),c=function(n,e,r,o){var u=n.isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!u,c=n.isiOS()||n.isAndroid(),a=c||o("(pointer:coarse)"),l=u||!i&&c&&o("(min-device-width:768px)"),f=i||c&&!l,s=e.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),m=!f&&!l&&!s
return{isiPad:t(u),isiPhone:t(i),isTablet:t(l),isPhone:t(f),isTouch:t(a),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:t(s),isDesktop:t(m)}}(i,u,n,e)
return{browser:u,os:i,deviceType:c}},On=function(n){return window.matchMedia(n).matches},An=$((function(){return Dn(navigator.userAgent,On)})),kn=function(){return An()},In=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},Bn={fromHtml:function(n,t){var e=(t||document).createElement("div")
if(e.innerHTML=n,!e.hasChildNodes()||e.childNodes.length>1)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return In(e.childNodes[0])},fromTag:function(n,t){var e=(t||document).createElement(n)
return In(e)},fromText:function(n,t){var e=(t||document).createTextNode(n)
return In(e)},fromDom:In,fromPoint:function(n,t,e){return s.from(n.dom.elementFromPoint(t,e)).map(In)}},Pn=function(n,t){var e=n.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},En=function(n){return 1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount},Mn=function(n,t){return n.dom===t.dom},Nn=function(n,t){return e=n.dom,r=t.dom,function(n,t,e){return 0!=(n.compareDocumentPosition(t)&e)}(e,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var e,r},jn=function(n,t){return kn().browser.isIE()?Nn(n,t):function(n,t){var e=n.dom,r=t.dom
return e!==r&&e.contains(r)}(n,t)},Wn=Pn,Ln=Object.keys,zn=Object.hasOwnProperty,_n=function(n,t){for(var e=Ln(n),r=0,o=e.length;r<o;r++){var u=e[r]
t(n[u],u)}},Fn=function(n,t){return Hn(n,(function(n,e){return{k:e,v:t(n,e)}}))},Hn=function(n,t){var e={}
return _n(n,(function(n,r){var o=t(n,r)
e[o.k]=o.v})),e},qn=function(t,e){var r={}
return function(n,t,e,r){_n(n,(function(n,o){(t(n,o)?e:r)(n,o)}))}(t,e,function(n){return function(t,e){n[e]=t}}(r),n),r},Vn=function(n,t){var e=[]
return _n(n,(function(n,r){e.push(t(n,r))})),e},Un=function(n){return Ln(n).length},$n=function(n,t){return Gn(n,t)?s.from(n[t]):s.none()},Gn=function(n,t){return zn.call(n,t)},Kn=function(n,t){return Gn(n,t)&&void 0!==n[t]&&null!==n[t]},Xn=["tfoot","thead","tbody","colgroup"],Yn=function(n,t,e){return{element:n,rowspan:t,colspan:e}},Jn=function(n,t,e){return{element:n,cells:t,section:e}},Qn=function(n,t,e){return{element:n,isNew:t,isLocked:e}},Zn=function(n,t){return{cells:n,section:t}},nt=("undefined"!=typeof window?window:Function("return this;")(),function(n){return n.dom.nodeName.toLowerCase()}),tt=function(n){return n.dom.nodeType},et=function(n){return function(t){return tt(t)===n}},rt=function(n){return 8===tt(n)||"#comment"===nt(n)},ot=et(1),ut=et(3),it=et(9),ct=et(11),at=function(n){return function(t){return ot(t)&&nt(t)===n}},lt=function(n){return Bn.fromDom(n.dom.ownerDocument)},ft=function(n){return it(n)?n:lt(n)},st=function(n){return s.from(n.dom.parentNode).map(Bn.fromDom)},mt=function(n,t){for(var e=y(t)?t:i,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var u=r.parentNode,c=Bn.fromDom(u)
if(o.push(c),!0===e(c))break
r=u}return o},dt=function(n){return s.from(n.dom.previousSibling).map(Bn.fromDom)},gt=function(n){return s.from(n.dom.nextSibling).map(Bn.fromDom)},pt=function(n){return A(n.dom.childNodes,Bn.fromDom)},vt=function(n,t){var e=n.dom.childNodes
return s.from(e[t]).map(Bn.fromDom)},ht=y(Element.prototype.attachShadow)&&y(Node.prototype.getRootNode),bt=t(ht),wt=ht?function(n){return Bn.fromDom(n.dom.getRootNode())}:ft,yt=function(n){var t,e=wt(n)
return ct(t=e)&&w(t.dom.host)?s.some(e):s.none()},Ct=function(n){return Bn.fromDom(n.dom.host)},xt=function(n){return w(n.dom.shadowRoot)},St=function(n){var t=ut(n)?n.dom.parentNode:n.dom
if(null==t||null===t.ownerDocument)return!1
var e,r,o=t.ownerDocument
return yt(Bn.fromDom(t)).fold((function(){return o.body.contains(t)}),(e=St,r=Ct,function(n){return e(r(n))}))},Tt=function(n){var t=n.dom.body
if(null==t)throw new Error("Body is not available yet")
return Bn.fromDom(t)},Rt=function(n,t){var e=[]
return k(pt(n),(function(n){t(n)&&(e=e.concat([n])),e=e.concat(Rt(n,t))})),e},Dt=function(n,t,e){return function(n,t,e){return I(mt(n,e),t)}(n,(function(n){return Pn(n,t)}),e)},Ot=function(n,t){return function(n,t){return I(pt(n),t)}(n,(function(n){return Pn(n,t)}))},At=function(n,t){return function(n,t){var e=void 0===t?document:t.dom
return En(e)?[]:A(e.querySelectorAll(n),Bn.fromDom)}(t,n)}
function kt(n,t,e,r,o){return n(e,r)?s.some(e):y(o)&&o(e)?s.none():t(e,r,o)}var It=function(n,t,e){for(var r=n.dom,o=y(e)?e:i;r.parentNode;){r=r.parentNode
var u=Bn.fromDom(r)
if(t(u))return s.some(u)
if(o(u))break}return s.none()},Bt=function(n,t,e){return It(n,(function(n){return Pn(n,t)}),e)},Pt=function(n,t){return function(n,t){return E(n.dom.childNodes,(function(n){return t(Bn.fromDom(n))})).map(Bn.fromDom)}(n,(function(n){return Pn(n,t)}))},Et=function(n,t){return function(n,t){var e=void 0===t?document:t.dom
return En(e)?s.none():s.from(e.querySelector(n)).map(Bn.fromDom)}(t,n)},Mt=function(n,t,e){return kt((function(n,t){return Pn(n,t)}),Bt,n,t,e)},Nt=function(n,t,e){if(!(g(e)||h(e)||C(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,e+"")},jt=function(n,t,e){Nt(n.dom,t,e)},Wt=function(n,t){var e=n.dom
_n(t,(function(n,t){Nt(e,t,n)}))},Lt=function(n,t){var e=n.dom.getAttribute(t)
return null===e?void 0:e},zt=function(n,t){return s.from(Lt(n,t))},_t=function(n,t){n.dom.removeAttribute(t)},Ft=function(n){return P(n.dom.attributes,(function(n,t){return n[t.name]=t.value,n}),{})},Ht=function(n){return void 0!==n.style&&y(n.style.getPropertyValue)},qt=function(n,t,e){if(!g(e))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",e,":: Element ",n),new Error("CSS value must be a string: "+e)
Ht(n)&&n.style.setProperty(t,e)},Vt=function(n,t,e){var r=n.dom
qt(r,t,e)},Ut=function(n,t){var e=n.dom
_n(t,(function(n,t){qt(e,t,n)}))},$t=function(n,t){var e=n.dom,r=window.getComputedStyle(e).getPropertyValue(t)
return""!==r||St(n)?r:Gt(e,t)},Gt=function(n,t){return Ht(n)?n.style.getPropertyValue(t):""},Kt=function(n,t){var e=n.dom,r=Gt(e,t)
return s.from(r).filter((function(n){return n.length>0}))},Xt=function(n,t){(function(n,t){Ht(n)&&n.style.removeProperty(t)})(n.dom,t),zt(n,"style").map(rn).is("")&&_t(n,"style")},Yt=function(n,t,e){return void 0===e&&(e=0),zt(n,t).map((function(n){return parseInt(n,10)})).getOr(e)},Jt=function(n,t){return Yt(n,t,1)},Qt=function(n){return Jt(n,"colspan")>1},Zt=function(n){return Jt(n,"rowspan")>1},ne=function(n,t){return parseInt($t(n,t),10)},te=t(10),ee=t(10),re=function(n,t){return oe(n,t,c)},oe=function(n,t,e){return j(pt(n),(function(n){return Pn(n,t)?e(n)?[n]:[]:oe(n,t,e)}))},ue=function(n,t){return function(n,t,e){return void 0===e&&(e=i),e(t)?s.none():R(n,nt(t))?s.some(t):Bt(t,n.join(","),(function(n){return Pn(n,"table")||e(n)}))}(["td","th"],n,t)},ie=function(n){return re(n,"th,td")},ce=function(n){return Pn(n,"colgroup")?Ot(n,"col"):j(fe(n),(function(n){return Ot(n,"col")}))},ae=function(n,t){return Mt(n,"table",t)},le=function(n){return re(n,"tr")},fe=function(n){return ae(n).fold(t([]),(function(n){return Ot(n,"colgroup")}))},se=function(n,t){return A(n,(function(n){if("colgroup"===nt(n)){var e=A(ce(n),(function(n){var t=Yt(n,"span",1)
return Yn(n,1,t)}))
return Jn(n,e,"colgroup")}e=A(ie(n),(function(n){var t=Yt(n,"rowspan",1),e=Yt(n,"colspan",1)
return Yn(n,t,e)}))
return Jn(n,e,t(n))}))},me=function(n){return st(n).map((function(n){var t=nt(n)
return function(n){return R(Xn,n)}(t)?t:"tbody"})).getOr("tbody")},de=function(n){var t=le(n),e=U(fe(n),t)
return se(e,me)},ge=function(n,t,e){var r=n.cells,o=r.slice(0,t),u=r.slice(t),i=o.concat(e).concat(u)
return he(n,i)},pe=function(n,t,e){return ge(n,t,[e])},ve=function(n,t,e){n.cells[t]=e},he=function(n,t){return Zn(t,n.section)},be=function(n,t){var e=n.cells,r=A(e,t)
return Zn(r,n.section)},we=function(n,t){return n.cells[t]},ye=function(n,t){return we(n,t).element},Ce=function(n){return n.cells.length},xe=function(n){var t=function(n,t){for(var e=[],r=[],o=0,u=n.length;o<u;o++){var i=n[o];(t(i,o)?e:r).push(i)}return{pass:e,fail:r}}(n,(function(n){return"colgroup"===n.section}))
return{rows:t.fail,cols:t.pass}},Se="data-snooker-locked-cols",Te=function(n){return zt(n,Se).bind((function(n){return s.from(n.match(/\d+/g))})).map((function(n){return L(n,c)}))},Re=function(n){var t=P(xe(n).rows,(function(n,t){return k(t.cells,(function(t,e){t.isLocked&&(n[e]=!0)})),n}),{})
return function(n,t){var e=x.call(n,0)
return e.sort(t),e}(Vn(t,(function(n,t){return parseInt(t,10)})))},De=function(n,t){return n+","+t},Oe=function(n,t){var e=j(n.all,(function(n){return n.cells}))
return I(e,t)},Ae=function(n){var t={},e=[],r={},o=F(n).map((function(n){return n.element})).bind(ae).bind(Te).getOr({}),u=0,i=0,c=0
return k(n,(function(n){if("colgroup"===n.section)r=function(n){var t={},e=0
return k(n.cells,(function(n){var r=n.colspan
O(r,(function(o){var u=e+o
t[u]=function(n,t,e){return{element:n,colspan:t,column:e}}(n.element,r,u)})),e+=r})),t}(n)
else{var a=[]
k(n.cells,(function(n){for(var e=0;void 0!==t[De(c,e)];)e++
for(var r=Kn(o,e.toString()),u=function(n,t,e,r,o,u){return{element:n,rowspan:t,colspan:e,row:r,column:o,isLocked:u}}(n.element,n.rowspan,n.colspan,c,e,r),l=0;l<n.colspan;l++)for(var f=0;f<n.rowspan;f++){var s=e+l,m=De(c+f,s)
t[m]=u,i=Math.max(i,s+1)}a.push(u)})),u++,e.push(Jn(n.element,a,n.section)),c++}})),{grid:function(n,t){return{rows:n,columns:t}}(u,i),access:t,all:e,columns:r}},ke={fromTable:function(n){var t=de(n)
return Ae(t)},generate:Ae,getAt:function(n,t,e){var r=n.access[De(t,e)]
return void 0!==r?s.some(r):s.none()},findItem:function(n,t,e){var r=Oe(n,(function(n){return e(t,n.element)}))
return r.length>0?s.some(r[0]):s.none()},filterItems:Oe,justCells:function(n){return j(n.all,(function(n){return n.cells}))},justColumns:function(n){return t=n.columns,Vn(t,(function(n){return n}))
var t},hasColumns:function(n){return Ln(n.columns).length>0},getColumnAt:function(n,t){return s.from(n.columns[t])}},Ie=function(n,t){var e=t.column,r=t.column+t.colspan-1,o=t.row,u=t.row+t.rowspan-1
return e<=n.finishCol&&r>=n.startCol&&o<=n.finishRow&&u>=n.startRow},Be=function(n,t){return t.column>=n.startCol&&t.column+t.colspan-1<=n.finishCol&&t.row>=n.startRow&&t.row+t.rowspan-1<=n.finishRow},Pe=function(n,t,e){var r=ke.findItem(n,t,Mn),o=ke.findItem(n,e,Mn)
return r.bind((function(n){return o.map((function(t){return e=n,r=t,o=Math.min(e.row,r.row),u=Math.min(e.column,r.column),i=Math.max(e.row+e.rowspan-1,r.row+r.rowspan-1),c=Math.max(e.column+e.colspan-1,r.column+r.colspan-1),{startRow:o,startCol:u,finishRow:i,finishCol:c}
var e,r,o,u,i,c}))}))},Ee=function(n,t,e){return Pe(n,t,e).bind((function(t){return function(n,t){for(var e=!0,o=r(Be,t),u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++)e=e&&ke.getAt(n,u,i).exists(o)
return e?s.some(t):s.none()}(n,t)}))},Me=function(n,t,e){return Pe(n,t,e).map((function(t){var e=ke.filterItems(n,r(Ie,t))
return A(e,(function(n){return n.element}))}))},Ne=function(n,t){return ke.findItem(n,t,(function(n,t){return jn(t,n)})).map((function(n){return n.element}))},je=function(n,t,e){return ae(n).bind((function(r){return function(n,t,e,r){return ke.findItem(n,t,Mn).bind((function(t){var o=e>0?t.row+t.rowspan-1:t.row,u=r>0?t.column+t.colspan-1:t.column
return ke.getAt(n,o+e,u+r).map((function(n){return n.element}))}))}(ze(r),n,t,e)}))},We=function(n,t,e){var r=ze(n)
return Me(r,t,e)},Le=function(n,t,e,r,o){var u=ze(n),i=Mn(n,e)?s.some(t):Ne(u,t),c=Mn(n,o)?s.some(r):Ne(u,r)
return i.bind((function(n){return c.bind((function(t){return Me(u,n,t)}))}))},ze=ke.fromTable,_e=function(n,t){st(n).each((function(e){e.dom.insertBefore(t.dom,n.dom)}))},Fe=function(n,t){gt(n).fold((function(){st(n).each((function(n){qe(n,t)}))}),(function(n){_e(n,t)}))},He=function(n,t){(function(n){return vt(n,0)})(n).fold((function(){qe(n,t)}),(function(e){n.dom.insertBefore(t.dom,e.dom)}))},qe=function(n,t){n.dom.appendChild(t.dom)},Ve=function(n,t){_e(n,t),qe(t,n)},Ue=function(n,t){k(t,(function(e,r){var o=0===r?n:t[r-1]
Fe(o,e)}))},$e=function(n,t){k(t,(function(t){qe(n,t)}))},Ge=function(n){n.dom.textContent="",k(pt(n),(function(n){Ke(n)}))},Ke=function(n){var t=n.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},Xe=function(n){var t,e=pt(n)
e.length>0&&(t=n,k(e,(function(n){_e(t,n)}))),Ke(n)},Ye=function(n,t){var e=function(t){return n(t)?s.from(t.dom.nodeValue):s.none()}
return{get:function(r){if(!n(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return e(r).getOr("")},getOption:e,set:function(e,r){if(!n(e))throw new Error("Can only set raw "+t+" value of a "+t+" node")
e.dom.nodeValue=r}}}(ut,"text"),Je=function(n){return Ye.get(n)},Qe=function(n){return Ye.getOption(n)},Ze=function(n,t){return Ye.set(n,t)},nr=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
function tr(){return{up:t({selector:Bt,closest:Mt,predicate:It,all:mt}),down:t({selector:At,predicate:Rt}),styles:t({get:$t,getRaw:Kt,set:Vt,remove:Xt}),attrs:t({get:Lt,set:jt,remove:_t,copyTo:function(n,t){var e=Ft(n)
Wt(t,e)}}),insert:t({before:_e,after:Fe,afterAll:Ue,append:qe,appendAll:$e,prepend:He,wrap:Ve}),remove:t({unwrap:Xe,remove:Ke}),create:t({nu:Bn.fromTag,clone:function(n){return Bn.fromDom(n.dom.cloneNode(!1))},text:Bn.fromText}),query:t({comparePosition:function(n,t){return n.dom.compareDocumentPosition(t.dom)},prevSibling:dt,nextSibling:gt}),property:t({children:pt,name:nt,parent:st,document:function(n){return ft(n).dom},isText:ut,isComment:rt,isElement:ot,isSpecial:function(n){var t=nt(n)
return R(["script","noscript","iframe","noframes","noembed","title","style","textarea","xmp"],t)},getText:Je,setText:Ze,isBoundary:function(n){return!!ot(n)&&("body"===nt(n)||R(nr,nt(n)))},isEmptyTag:function(n){return!!ot(n)&&R(["br","img","hr","input"],nt(n))},isNonEditable:function(n){return ot(n)&&"false"===Lt(n,"contenteditable")}}),eq:Mn,is:Wn}}var er,rr,or,ur,ir=function(n,t,e,r){var o=t(n,e)
return B(r,(function(e,r){var o=t(n,r)
return cr(n,e,o)}),o)},cr=function(n,t,e){return t.bind((function(t){return e.filter(r(n.eq,t))}))},ar=function(n,t,e){return e.length>0?function(n,t,e,r){return r(n,t,e[0],e.slice(1))}(n,t,e,ir):s.none()},lr=function(n,t,e,o){void 0===o&&(o=i)
var u=[t].concat(n.up().all(t)),c=[e].concat(n.up().all(e)),a=function(n){return M(n,o).fold((function(){return n}),(function(t){return n.slice(0,t+1)}))},l=a(u),f=a(c),s=E(l,(function(t){return D(f,function(n,t){return r(n.eq,t)}(n,t))}))
return{firstpath:l,secondpath:f,shared:s}},fr=tr(),sr=function(n,t){return ar(fr,(function(t,e){return n(e)}),t)},mr=function(n){return Bt(n,"table")},dr=function(n,t,e){var r=function(n){return function(t){return void 0!==e&&e(t)||Mn(t,n)}}
return Mn(n,t)?s.some({boxes:s.some([n]),start:n,finish:t}):mr(n).bind((function(o){return mr(t).bind((function(u){if(Mn(o,u))return s.some({boxes:We(o,n,t),start:n,finish:t})
if(jn(o,u)){var i=(c=Dt(t,"td,th",r(o))).length>0?c[c.length-1]:t
return s.some({boxes:Le(o,n,o,t,u),start:n,finish:i})}if(jn(u,o)){var c,a=(c=Dt(n,"td,th",r(u))).length>0?c[c.length-1]:n
return s.some({boxes:Le(u,n,o,t,u),start:n,finish:a})}return function(n,t,e){return lr(fr,n,t,e)}(n,t).shared.bind((function(i){return Mt(i,"table",e).bind((function(e){var i=Dt(t,"td,th",r(e)),c=i.length>0?i[i.length-1]:t,a=Dt(n,"td,th",r(e)),l=a.length>0?a[a.length-1]:n
return s.some({boxes:Le(e,n,o,t,u),start:l,finish:c})}))}))}))}))},gr=function(n,t){var e=At(n,t)
return e.length>0?s.some(e):s.none()},pr=function(n,t,e){return Et(n,t).bind((function(t){return Et(n,e).bind((function(n){return sr(mr,[t,n]).map((function(e){return{first:t,last:n,table:e}}))}))}))},vr=function(n,t,e,r,o){return function(n,t){return E(n,(function(n){return Pn(n,t)}))}(n,o).bind((function(n){return je(n,t,e).bind((function(n){return function(n,t){return Bt(n,"table").bind((function(e){return Et(e,t).bind((function(t){return dr(t,n).bind((function(n){return n.boxes.map((function(t){return{boxes:t,start:n.start,finish:n.finish}}))}))}))}))}(n,r)}))}))},hr=function(n,t){return gr(n,t)},br=function(n,t,e){return pr(n,t,e).bind((function(t){var e=function(t){return Mn(n,t)},r="thead,tfoot,tbody,table",o=Bt(t.first,r,e),u=Bt(t.last,r,e)
return o.bind((function(n){return u.bind((function(e){return Mn(n,e)?function(n,t,e){var r=ze(n)
return Ee(r,t,e)}(t.table,t.first,t.last):s.none()}))}))}))},wr=function(n){if(!v(n))throw new Error("cases must be an array")
if(0===n.length)throw new Error("there must be at least one case")
var t=[],e={}
return k(n,(function(r,o){var u=Ln(r)
if(1!==u.length)throw new Error("one and only one name per case")
var i=u[0],c=r[i]
if(void 0!==e[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!v(c))throw new Error("case arguments must be an array")
t.push(i),e[i]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var u=e.length
if(u!==c.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+c.length+" ("+c+"), got "+u)
var a=function(n){var r=Ln(n)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
if(!W(t,(function(n){return R(r,n)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return n[i].apply(null,e)}
return{fold:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(t.length!==n.length)throw new Error("Wrong number of arguments to fold. Expected "+n.length+", got "+t.length)
var u=t[o]
return u.apply(null,e)},match:a,log:function(n){console.log(n,{constructors:t,constructor:i,params:e})}}}})),e},yr=wr([{none:[]},{multiple:["elements"]},{single:["element"]}]),Cr=function(n,t,e,r){return n.fold(t,e,r)},xr=yr.none,Sr=yr.multiple,Tr=yr.single,Rr=tinymce.util.Tools.resolve("tinymce.PluginManager"),Dr=function(n,t){return Bn.fromDom(n.dom.cloneNode(t))},Or=function(n){return Dr(n,!1)},Ar=function(n){return Dr(n,!0)},kr=function(n,t){var e=function(n,t){var e=Bn.fromTag(t),r=Ft(n)
return Wt(e,r),e}(n,t),r=pt(Ar(n))
return $e(e,r),e},Ir=function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e)
return t},Br=function(n,t){return n?s.some(t):s.none()},Pr=function(n,t){var e=function(e){var r=t(e)
if(r<=0||null===r){var o=$t(e,n)
return parseFloat(o)||0}return r},r=function(n,t){return P(t,(function(t,e){var r=$t(n,e),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,e){if(!C(e)&&!e.match(/^[0-9]+$/))throw new Error(n+".set accepts only positive integer values. Value was "+e)
var r=t.dom
Ht(r)&&(r.style[n]=e+"px")},get:e,getOuter:e,aggregate:r,max:function(n,t,e){var o=r(n,e)
return t>o?t-o:0}}},Er=Pr("width",(function(n){return n.dom.offsetWidth})),Mr=function(n){return Er.get(n)},Nr=function(n){return Er.getOuter(n)},jr=function(n,t){void 0===t&&(t=c)
var r=n.grid,o=O(r.columns,e),u=O(r.rows,e)
return A(o,(function(e){return Wr((function(){return j(u,(function(t){return ke.getAt(n,t,e).filter((function(n){return n.column===e})).toArray()}))}),(function(n){return 1===n.colspan&&t(n.element)}),(function(){return ke.getAt(n,0,e)}))}))},Wr=function(n,t,e){var r=n()
return E(r,t).orThunk((function(){return s.from(r[0]).orThunk(e)})).map((function(n){return n.element}))},Lr=function(n){var r=n.grid,o=O(r.rows,e),u=O(r.columns,e)
return A(o,(function(e){return Wr((function(){return j(u,(function(r){return ke.getAt(n,e,r).filter((function(n){return n.row===e})).fold(t([]),(function(n){return[n]}))}))}),(function(n){return 1===n.rowspan}),(function(){return ke.getAt(n,e,0)}))}))},zr=function(n,t){if(t<0||t>=n.length-1)return s.none()
var e=n[t].fold((function(){var e=function(n){var t=x.call(n,0)
return t.reverse(),t}(n.slice(0,t))
return q(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return s.some({value:n,delta:0})})),r=n[t+1].fold((function(){var e=n.slice(t+1)
return q(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return s.some({value:n,delta:1})}))
return e.bind((function(n){return r.map((function(t){var e=t.delta+n.delta
return Math.abs(t.value-n.value)/e}))}))},_r=function(n,t){return function(e){return"rtl"===Fr(e)?t:n}},Fr=function(n){return"rtl"===$t(n,"direction")?"rtl":"ltr"},Hr=Pr("height",(function(n){var t=n.dom
return St(n)?t.getBoundingClientRect().height:t.offsetHeight})),qr=function(n){return Hr.get(n)},Vr=function(n){return Hr.getOuter(n)},Ur=function(n,t){return{left:n,top:t,translate:function(e,r){return Ur(n+e,t+r)}}},$r=Ur,Gr=function(n,t){return void 0!==n?n:void 0!==t?t:0},Kr=function(n){var t=n.dom.ownerDocument,e=t.body,r=t.defaultView,o=t.documentElement
if(e===n.dom)return $r(e.offsetLeft,e.offsetTop)
var u=Gr(null==r?void 0:r.pageYOffset,o.scrollTop),i=Gr(null==r?void 0:r.pageXOffset,o.scrollLeft),c=Gr(o.clientTop,e.clientTop),a=Gr(o.clientLeft,e.clientLeft)
return Xr(n).translate(i-a,u-c)},Xr=function(n){var t=n.dom,e=t.ownerDocument.body
return e===t?$r(e.offsetLeft,e.offsetTop):St(n)?function(n){var t=n.getBoundingClientRect()
return $r(t.left,t.top)}(t):$r(0,0)},Yr=function(n,t){return{row:n,y:t}},Jr=function(n,t){return{col:n,x:t}},Qr=function(n){return Kr(n).left+Nr(n)},Zr=function(n){return Kr(n).left},no=function(n,t){return Jr(n,Zr(t))},to=function(n,t){return Jr(n,Qr(t))},eo=function(n){return Kr(n).top},ro=function(n,t){return Yr(n,eo(t))},oo=function(n,t){return Yr(n,eo(t)+Vr(t))},uo=function(n,t,e){if(0===e.length)return[]
var r=A(e.slice(1),(function(t,e){return t.map((function(t){return n(e,t)}))})),o=e[e.length-1].map((function(n){return t(e.length-1,n)}))
return r.concat([o])},io={delta:e,positions:function(n){return uo(ro,oo,n)},edge:eo},co={delta:e,edge:Zr,positions:function(n){return uo(no,to,n)}},ao={delta:function(n){return-n},edge:Qr,positions:function(n){return uo(to,no,n)}},lo=_r(co,ao),fo={delta:function(n,t){return lo(t).delta(n,t)},positions:function(n,t){return lo(t).positions(n,t)},edge:function(n){return lo(n).edge(n)}},so={unsupportedLength:["em","ex","cap","ch","ic","rem","lh","rlh","vw","vh","vi","vb","vmin","vmax","cm","mm","Q","in","pc","pt","px"],fixed:["px","pt"],relative:["%"],empty:[""]},mo=(er="[0-9]+",rr="[eE][+-]?[0-9]+",or=function(n){return"(?:"+n+")?"},ur=["Infinity","[0-9]+\\."+or(er)+or(rr),"\\.[0-9]+"+or(rr),er+or(rr)].join("|"),new RegExp("^([+-]?(?:"+ur+"))(.*)$")),go=function(n,t){return s.from(mo.exec(n)).bind((function(n){var e=Number(n[1]),r=n[2]
return function(n,t){return D(t,(function(t){return D(so[t],(function(t){return n===t}))}))}(r,t)?s.some({value:e,unit:r}):s.none()}))},po=function(){var n=kn().browser
return n.isIE()||n.isEdge()},vo=function(n,t,e){return function(n,t){var e=parseFloat(n)
return isNaN(e)?t:e}($t(n,t),e)},ho=function(n){return po()?function(n){var t=n.dom.getBoundingClientRect().height
return"border-box"===$t(n,"box-sizing")?t:t-vo(n,"padding-top",0)-vo(n,"padding-bottom",0)-(vo(n,"border-top-width",0)+vo(n,"border-bottom-width",0))}(n):vo(n,"height",qr(n))},bo=function(n){return po()?function(n){var t=n.dom.getBoundingClientRect().width
return"border-box"===$t(n,"box-sizing")?t:t-vo(n,"padding-left",0)-vo(n,"padding-right",0)-(vo(n,"border-left-width",0)+vo(n,"border-right-width",0))}(n):vo(n,"width",Mr(n))},wo=/(\d+(\.\d+)?)%/,yo=/(\d+(\.\d+)?)px|em/,Co=function(n,t){var e,r=(e=n,s.from(e.dom.offsetParent).map(Bn.fromDom)).getOr(Tt(lt(n)))
return t(n)/t(r)*100},xo=function(n,t){Vt(n,"width",t+"px")},So=function(n,t){Vt(n,"width",t+"%")},To=function(n,t){Vt(n,"height",t+"px")},Ro=function(n,t,e,r){var o=parseInt(n,10)
return en(n,"%")&&"table"!==nt(t)?function(n,t,e,r){var o=ae(n).map((function(n){var r=e(n)
return Math.floor(t/100*r)})).getOr(t)
return r(n,o),o}(t,o,e,r):o},Do=function(n){var t=function(n){return Kt(n,"height").getOrThunk((function(){return ho(n)+"px"}))}(n)
return t?Ro(t,n,qr,To):qr(n)},Oo=function(n){return Kt(n,"width").fold((function(){return s.from(Lt(n,"width"))}),(function(n){return s.some(n)}))},Ao=function(n,t){return n/t.pixelWidth()*100},ko=function(n,t){return Oo(n).fold((function(){var e=Mr(n)
return Ao(e,t)}),(function(e){return function(n,t,e){var r=wo.exec(t)
if(null!==r)return parseFloat(r[1])
var o=bo(n)
return Ao(o,e)}(n,e,t)}))},Io=function(n,t){return Oo(n).fold((function(){return bo(n)}),(function(e){return function(n,t,e){var r=yo.exec(t)
if(null!==r)return parseInt(r[1],10)
var o=wo.exec(t)
return null!==o?function(n,t){return n/100*t.pixelWidth()}(parseFloat(o[1]),e):bo(n)}(n,e,t)}))},Bo=function(n){return function(n,t,e){return e(n)/Jt(n,t)}(n,"rowspan",Do)},Po=function(n,t,e){Vt(n,"width",t+e)},Eo=function(n){return Co(n,Mr)+"%"},Mo=t(wo),No=t(yo),jo=at("col"),Wo=function(n,t,e){return Kt(n,t).fold((function(){return e(n)+"px"}),(function(n){return n}))},Lo=function(n,t){return Wo(n,"width",(function(n){return jo(n)?Mr(n):Io(n,t)}))},zo=function(n){return Wo(n,"height",Bo)},_o=function(n,t){return Kt(n,t).isSome()},Fo=function(n,t,e,r,o,u){return n.filter(r).fold((function(){return u(zr(e,t))}),(function(n){return o(n)}))},Ho=function(n,t,r,o,i){var c=jr(n,(function(n){return _o(n,"width")})),a=ke.hasColumns(n)?function(n){return A(ke.justColumns(n),(function(n){return s.from(n.element)}))}(n):c,l=[s.some(fo.edge(t))].concat(A(fo.positions(c,t),(function(n){return n.map((function(n){return n.x}))}))),f=u(Qt)
return A(a,(function(n,t){return Fo(n,t,l,f,(function(n){if(function(n){return!jo(n)||_o(n,"width")}(n))return r(n,i)
var u,a,m=(u=c[t],a=e,null!=u?a(u):s.none())
return Fo(m,t,l,f,(function(n){return o(s.some(Mr(n)))}),o)}),o)}))},qo=function(n){return n.map((function(n){return n+"px"})).getOr("")},Vo=function(n,t,e){return Ho(n,t,Io,(function(n){return n.getOrThunk(e.minCellWidth)}),e)},Uo=function(n,t,e,r,o){var i=Lr(n),c=[s.some(e.edge(t))].concat(A(e.positions(i,t),(function(n){return n.map((function(n){return n.y}))})))
return A(i,(function(n,t){return Fo(n,t,c,u(Zt),r,o)}))},$o=function(n){var t=n
return{get:function(){return t},set:function(n){t=n}}},Go=function(e){var r=function(){return Mr(e)},o=t(0)
return{width:r,pixelWidth:r,getWidths:function(n,t){return Vo(n,e,t)},getCellDelta:o,singleColumnWidth:t([0]),minCellWidth:o,setElementWidth:n,adjustTableWidth:n,isRelative:!0,label:"none"}},Ko=function(n,t){var e=$o(parseFloat(n)),r=$o(Mr(t))
return{width:e.get,pixelWidth:r.get,getWidths:function(n,e){return function(n,t,e){return Ho(n,t,ko,(function(n){return n.fold((function(){return e.minCellWidth()}),(function(n){return n/e.pixelWidth()*100}))}),e)}(n,t,e)},getCellDelta:function(n){return n/r.get()*100},singleColumnWidth:function(n,t){return[100-n]},minCellWidth:function(){return te()/r.get()*100},setElementWidth:So,adjustTableWidth:function(n){var o=e.get(),u=o+n/100*o
So(t,u),e.set(u),r.set(Mr(t))},isRelative:!0,label:"percent"}},Xo=function(n,t){var r=$o(n),o=r.get
return{width:o,pixelWidth:o,getWidths:function(n,e){return Vo(n,t,e)},getCellDelta:e,singleColumnWidth:function(n,t){return[Math.max(te(),n+t)-n]},minCellWidth:te,setElementWidth:xo,adjustTableWidth:function(n){var e=o()+n
xo(t,e),r.set(e)},isRelative:!1,label:"pixel"}},Yo=function(n){return Oo(n).fold((function(){return Go(n)}),(function(t){return function(n,t){var e=Mo().exec(t)
if(null!==e)return Ko(e[1],n)
var r=No().exec(t)
if(null!==r){var o=parseInt(r[1],10)
return Xo(o,n)}var u=Mr(n)
return Xo(u,n)}(n,t)}))},Jo=Xo,Qo=Ko,Zo=function(n,t,e){var r=n[e].element,o=Bn.fromTag("td")
qe(o,Bn.fromTag("br")),(t?qe:He)(r,o)},nu=function(n,t){var e=function(n){return Pn(n.element,t)},r=Ar(n),o=de(r),u=Yo(n),i=ke.generate(o),c=function(n,t){var e=n.grid.columns,r=n.grid.rows,o=e,u=0,i=0,c=[],a=[]
return _n(n.access,(function(n){if(c.push(n),t(n)){a.push(n)
var e=n.row,l=e+n.rowspan-1,f=n.column,s=f+n.colspan-1
e<r?r=e:l>u&&(u=l),f<o?o=f:s>i&&(i=s)}})),function(n,t,e,r,o,u){return{minRow:n,minCol:t,maxRow:e,maxCol:r,allCells:o,selectedCells:u}}(r,o,u,i,c,a)}(i,e),a="th:not("+t+"),td:not("+t+")",l=oe(r,"th,td",(function(n){return Pn(n,a)}))
return k(l,Ke),function(n,t,e,r){for(var o=t.grid.columns,u=t.grid.rows,i=0;i<u;i++)for(var c=!1,a=0;a<o;a++)i<e.minRow||i>e.maxRow||a<e.minCol||a>e.maxCol||(ke.getAt(t,i,a).filter(r).isNone()?Zo(n,c,i):c=!0)}(o,i,c,e),function(n,t,e,r){_n(e.columns,(function(n){(n.column<t.minCol||n.column>t.maxCol)&&Ke(n.element)}))
var o=I(re(n,"tr"),(function(n){return 0===n.dom.childElementCount}))
k(o,Ke),t.minCol!==t.maxCol&&t.minRow!==t.maxRow||k(re(n,"th,td"),(function(n){_t(n,"rowspan"),_t(n,"colspan")})),_t(n,Se),_t(n,"data-snooker-col-series"),Yo(n).adjustTableWidth(r)}(r,c,i,function(n,t,e,r){if(0===r.minCol&&t.grid.columns===r.maxCol+1)return 0
var o=Vo(t,n,e),u=P(o,(function(n,t){return n+t}),0),i=P(o.slice(r.minCol,r.maxCol+1),(function(n,t){return n+t}),0)/u*e.pixelWidth()-e.pixelWidth()
return e.getCellDelta(i)}(n,ke.fromTable(n),u,c)),r},tu=function(n){return"img"===nt(n)?1:Qe(n).fold((function(){return pt(n).length}),(function(n){return n.length}))},eu=["img","br"],ru=function(n){return Qe(n).filter((function(n){return 0!==n.trim().length||n.indexOf(" ")>-1})).isSome()||R(eu,nt(n))},ou=function(n){return t=ru,(e=function(n){for(var r=0;r<n.childNodes.length;r++){var o=Bn.fromDom(n.childNodes[r])
if(t(o))return s.some(o)
var u=e(n.childNodes[r])
if(u.isSome())return u}return s.none()})(n.dom)
var t,e},uu=function(n){return iu(n,ru)},iu=function(n,t){var e=function(n){for(var r=pt(n),o=r.length-1;o>=0;o--){var u=r[o]
if(t(u))return s.some(u)
var i=e(u)
if(i.isSome())return i}return s.none()}
return e(n)},cu={scope:["row","col"]},au=function(){var n=Bn.fromTag("td")
return qe(n,Bn.fromTag("br")),n},lu=function(){return Bn.fromTag("col")},fu=function(){return Bn.fromTag("colgroup")},su=function(n,t,e){var r=kr(n,t)
return _n(e,(function(n,t){null===n?_t(r,t):jt(r,t,n)})),r},mu=function(n){return n},du=function(n){return function(){return Bn.fromTag("tr",n.dom)}},gu=function(n,t,e){var r=function(n,t){var e,r,o,u
e=n.element,r=t,o=e.dom,u=r.dom,Ht(o)&&Ht(u)&&(u.style.cssText=o.style.cssText),Xt(t,"height"),1!==n.colspan&&Xt(t,"width")}
return{col:function(t){var e=lt(t.element),o=Bn.fromTag(nt(t.element),e.dom)
return r(t,o),n(t.element,o),o},colgroup:fu,row:du(t),cell:function(t){var o=lt(t.element),u=Bn.fromTag(nt(t.element),o.dom),i=e.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"]),c=i.length>0?function(n,t,e){return ou(n).map((function(r){var o=e.join(","),u=Dt(r,o,(function(t){return Mn(t,n)}))
return B(u,(function(n,t){var e=Or(t)
return _t(e,"contenteditable"),qe(n,e),e}),t)})).getOr(t)}(t.element,u,i):u
return qe(c,Bn.fromTag("br")),r(t,u),function(n,t){_n(cu,(function(e,r){return zt(n,r).filter((function(n){return R(e,n)})).each((function(n){return jt(t,r,n)}))}))}(t.element,u),n(t.element,u),u},replace:su,gap:au}},pu=function(n){return{col:lu,colgroup:fu,row:du(n),cell:au,replace:mu,gap:au}},vu=function(n){return A(n,Bn.fromDom)},hu=function(n){return n.nodeName.toLowerCase()},bu=function(n){return Bn.fromDom(n.getBody())},wu=function(n){return n.getBoundingClientRect().width},yu=function(n){return n.getBoundingClientRect().height},Cu=function(n){return function(t){return Mn(t,bu(n))}},xu=function(n){return/^\d+(\.\d+)?$/.test(n)?n+"px":n},Su=function(n){_t(n,"data-mce-style")
var t=function(n){return _t(n,"data-mce-style")}
k(ie(n),t),k(ce(n),t)},Tu=function(n,t){var e=n.dom.getStyle(t,"width")||n.dom.getAttrib(t,"width")
return s.from(e).filter(on)},Ru=function(n){return/^(\d+(\.\d+)?)%$/.test(n)},Du=function(n){return Bn.fromDom(n.selection.getStart())},Ou=function(n){return Cr(n.get(),t([]),e,z)},Au=function(n){var t=function(n,t){return zt(n,t).exists((function(n){return parseInt(n,10)>1}))},e=Ou(n)
return e.length>0&&W(e,(function(n){return t(n,"rowspan")||t(n,"colspan")}))?s.some(e):s.none()},ku=function(n,t,e){return Cr(t.get(),s.none,(function(t){return t.length<=1?s.none():br(n,e.firstSelectedSelector,e.lastSelectedSelector).map((function(n){return{bounds:n,cells:t}}))}),s.none)},Iu="data-mce-selected",Bu="data-mce-first-selected",Pu="data-mce-last-selected",Eu={selected:Iu,selectedSelector:"td[data-mce-selected],th[data-mce-selected]",firstSelected:Bu,firstSelectedSelector:"td[data-mce-first-selected],th[data-mce-first-selected]",lastSelected:Pu,lastSelectedSelector:"td[data-mce-last-selected],th[data-mce-last-selected]"},Mu=function(n){return{element:n,mergable:s.none(),unmergable:s.none(),selection:[n]}},Nu=function(n,t,e){return{element:e,mergable:ku(t,n,Eu),unmergable:Au(n),selection:Ou(n)}},ju=function(t,e,r,o){t.on("BeforeGetContent",(function(r){!0===r.selection&&Cr(e.get(),n,(function(n){r.preventDefault(),function(n){return ae(n[0]).map((function(n){var t=nu(n,"[data-mce-selected]")
return Su(t),[t]}))}(n).each((function(n){r.content="text"===r.format?function(n){return A(n,(function(n){return n.dom.innerText})).join("")}(n):function(n,t){return A(t,(function(t){return n.selection.serializer.serialize(t.dom,{})})).join("")}(t,n)}))}),n)})),t.on("BeforeSetContent",(function(n){!0===n.selection&&!0===n.paste&&s.from(t.dom.getParent(t.selection.getStart(),"th,td")).each((function(e){var u=Bn.fromDom(e)
ae(u).each((function(e){var i,c,a,l,f=I((i=n.content,(a=(c||document).createElement("div")).innerHTML=i,pt(Bn.fromDom(a))),(function(n){return"meta"!==nt(n)}))
if(1===f.length&&(l=f[0],"table"===nt(l))){n.preventDefault()
var s=Bn.fromDom(t.getDoc()),m=pu(s),d=function(n,t,e){return{element:n,clipboard:t,generators:e}}(u,f[0],m)
r.pasteCells(e,d).each((function(n){t.selection.setRng(n.rng),t.focus(),o.clear(e)}))}}))}))}))},Wu=wr([{none:[]},{only:["index"]},{left:["index","next"]},{middle:["prev","index","next"]},{right:["prev","index"]}]),Lu=V({},Wu),zu=function(n,e,r,o,u){var i=n.slice(0),c=function(n,t){return 0===n.length?Lu.none():1===n.length?Lu.only(0):0===t?Lu.left(0,1):t===n.length-1?Lu.right(t-1,t):t>0&&t<n.length-1?Lu.middle(t-1,t,t+1):Lu.none()}(n,e),a=t(A(i,t(0)))
return c.fold(a,(function(n){return o.singleColumnWidth(i[n],r)}),(function(n,t){return u.calcLeftEdgeDeltas(i,n,t,r,o.minCellWidth(),o.isRelative)}),(function(n,t,e){return u.calcMiddleDeltas(i,n,t,e,r,o.minCellWidth(),o.isRelative)}),(function(n,t){return u.calcRightEdgeDeltas(i,n,t,r,o.minCellWidth(),o.isRelative)}))},_u=function(n,t,e){for(var r=0,o=n;o<t;o++)r+=void 0!==e[o]?e[o]:0
return r},Fu=function(n,t){var e=ke.justCells(n)
return A(e,(function(n){var e=_u(n.row,n.row+n.rowspan,t)
return{element:n.element,height:e,rowspan:n.rowspan}}))},Hu=function(n,t){return ke.hasColumns(n)?function(n,t){var e=ke.justColumns(n)
return A(e,(function(n,e){return{element:n.element,width:t[e],colspan:n.colspan}}))}(n,t):function(n,t){var e=ke.justCells(n)
return A(e,(function(n){var e=_u(n.column,n.column+n.colspan,t)
return{element:n.element,width:e,colspan:n.colspan}}))}(n,t)},qu=function(n,t,e){var r=Hu(n,t)
k(r,(function(n){e.setElementWidth(n.element,n.width)}))},Vu=function(n,t,e,r,o){var u=ke.fromTable(n),i=o.getCellDelta(t),c=o.getWidths(u,o),a=e===u.grid.columns-1,l=r.clampTableDelta(c,e,i,o.minCellWidth(),a),f=zu(c,e,l,o,r),s=A(f,(function(n,t){return n+c[t]}))
qu(u,s,o),r.resizeTable(o.adjustTableWidth,l,a)},Uu=function(n,t,e,r){var o=ke.fromTable(n),u=function(n,t,e){return Uo(n,t,e,Bo,(function(n){return n.getOrThunk(ee)}))}(o,n,r),i=A(u,(function(n,r){return e===r?Math.max(t+n,ee()):n})),c=Fu(o,i),a=function(n,t){return A(n.all,(function(n,e){return{element:n.element,height:t[e]}}))}(o,i)
k(a,(function(n){To(n.element,n.height)})),k(c,(function(n){To(n.element,n.height)}))
var l=B(i,(function(n,t){return n+t}),0)
To(n,l)},$u=function(n){return A(n,t(0))},Gu=function(n,t,e,r,o){return o(n.slice(0,t)).concat(r).concat(o(n.slice(e)))},Ku=function(n){return function(t,e,r,o){if(n(r)){var u=Math.max(o,t[e]-Math.abs(r)),i=Math.abs(u-t[e])
return r>=0?i:-i}return r}},Xu=Ku((function(n){return n<0})),Yu=Ku(c),Ju=function(){var n=function(n,t,e,r){var o=(100+e)/100,u=Math.max(r,(n[t]+e)/o)
return A(n,(function(n,e){return(e===t?u:n/o)-n}))},t=function(t,e,r,o,u,i){return i?n(t,e,o,u):function(n,t,e,r,o){var u=Xu(n,t,r,o)
return Gu(n,t,e+1,[u,0],$u)}(t,e,r,o,u)}
return{resizeTable:function(n,t){return n(t)},clampTableDelta:Xu,calcLeftEdgeDeltas:t,calcMiddleDeltas:function(n,e,r,o,u,i,c){return t(n,r,o,u,i,c)},calcRightEdgeDeltas:function(t,e,r,o,u,i){if(i)return n(t,r,o,u)
var c=Xu(t,r,o,u)
return $u(t.slice(0,r)).concat([c])},calcRedestributedWidths:function(n,t,e,r){if(r){var o=(t+e)/t,u=A(n,(function(n){return n/o}))
return{delta:100*o-100,newSizes:u}}return{delta:e,newSizes:n}}}},Qu=function(){var n=function(n,t,e,r,o){var u=Yu(n,r>=0?e:t,r,o)
return Gu(n,t,e+1,[u,-u],$u)}
return{resizeTable:function(n,t,e){e&&n(t)},clampTableDelta:function(n,t,e,r,o){if(o){if(e>=0)return e
var u=P(n,(function(n,t){return n+t-r}),0)
return Math.max(-u,e)}return Xu(n,t,e,r)},calcLeftEdgeDeltas:n,calcMiddleDeltas:function(t,e,r,o,u,i){return n(t,r,o,u,i)},calcRightEdgeDeltas:function(n,e,r,o,u,i){if(i)return $u(n)
var c=o/n.length
return A(n,t(c))},calcRedestributedWidths:function(n,t,e,r){return{delta:0,newSizes:n}}}},Zu=function(n,e){var r=s.from(n.dom.documentElement).map(Bn.fromDom).getOr(n)
return{parent:t(r),view:t(n),origin:t($r(0,0)),isResizable:e}},ni=function(n,e,r){return{parent:t(e),view:t(n),origin:t($r(0,0)),isResizable:r}},ti=wr([{invalid:["raw"]},{pixels:["value"]},{percent:["value"]}]),ei=function(n,t,e){var r=e.substring(0,e.length-n.length),o=parseFloat(r)
return r===o.toString()?t(o):ti.invalid(e)},ri=V(V({},ti),{from:function(n){return en(n,"%")?ei("%",ti.percent,n):en(n,"px")?ei("px",ti.pixels,n):ti.invalid(n)}}),oi=function(n,t,e){return n.fold((function(){return t}),(function(n){return function(n,t,e){var r=e/t
return A(n,(function(n){return ri.from(n).fold((function(){return n}),(function(n){return n*r+"px"}),(function(n){return n/100*e+"px"}))}))}(t,e,n)}),(function(n){return function(n,t){return A(n,(function(n){return ri.from(n).fold((function(){return n}),(function(n){return n/t*100+"%"}),(function(n){return n+"%"}))}))}(t,e)}))},ui=function(n,e,r){var o=ri.from(r),u=W(n,(function(n){return"0px"===n}))?function(n,e){var r=n.fold((function(){return t("")}),(function(n){return t(n/e+"px")}),(function(){return t(100/e+"%")}))
return O(e,r)}(o,n.length):oi(o,n,e)
return ai(u)},ii=function(n,r){return 0===n.length?r:B(n,(function(n,r){return ri.from(r).fold(t(0),e,e)+n}),0)},ci=function(n,e){return ri.from(n).fold(t(n),(function(n){return n+e+"px"}),(function(n){return n+e+"%"}))},ai=function(n){if(0===n.length)return n
var t=B(n,(function(n,t){var e=ri.from(t).fold((function(){return{value:t,remainder:0}}),(function(n){return function(n,t){var e=Math.floor(n)
return{value:e+t,remainder:n-e}}(n,"px")}),(function(n){return{value:n+"%",remainder:0}}))
return{output:[e.value].concat(n.output),remainder:n.remainder+e.remainder}}),{output:[],remainder:0}),e=t.output
return e.slice(0,e.length-1).concat([ci(e[e.length-1],Math.round(t.remainder))])},li=ri.from,fi=function(n){return li(n).fold(t("px"),t("px"),t("%"))},si=function(n,t,e,r){var o=ke.fromTable(n),u=o.all,i=ke.justCells(o),c=ke.justColumns(o)
t.each((function(t){var e=fi(t),u=Mr(n),a=function(n,t,e){return Ho(n,t,Lo,qo,e)}(o,n,r),l=ui(a,u,t)
ke.hasColumns(o)?function(n,t,e){k(t,(function(t,r){var o=ii([n[r]],te())
Vt(t.element,"width",o+e)}))}(l,c,e):function(n,t,e){k(t,(function(t){var r=n.slice(t.column,t.colspan+t.column),o=ii(r,te())
Vt(t.element,"width",o+e)}))}(l,i,e),Vt(n,"width",t)})),e.each((function(t){var e=fi(t),r=qr(n),c=function(n,t,e){return Uo(n,t,e,zo,qo)}(o,n,io);(function(n,t,e,r){k(e,(function(t){var e=n.slice(t.row,t.rowspan+t.row),o=ii(e,ee())
Vt(t.element,"height",o+r)})),k(t,(function(t,e){Vt(t.element,"height",n[e])}))})(ui(c,r,t),u,i,e),Vt(n,"height",t)}))},mi=function(n){return Oo(n).exists((function(n){return wo.test(n)}))},di=function(n){return Oo(n).exists((function(n){return yo.test(n)}))},gi=function(n){return Oo(n).isNone()},pi=Eo,vi=function(n){return ke.fromTable(n).grid},hi=function(n){var t=[]
return{bind:function(n){if(void 0===n)throw new Error("Event bind error: undefined handler")
t.push(n)},unbind:function(n){t=I(t,(function(t){return t!==n}))},trigger:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o={}
k(n,(function(n,t){o[n]=e[t]})),k(t,(function(n){n(o)}))}}},bi=function(n){return{registry:Fn(n,(function(n){return{bind:n.bind,unbind:n.unbind}})),trigger:Fn(n,(function(n){return n.trigger}))}},wi=function(n){return n.slice(0).sort()},yi=function(n,t,e){if(0===t.length)throw new Error("You must specify at least one required field.")
var r
return function(n,t){if(!v(t))throw new Error("The "+n+" fields must be an array. Was: "+t+".")
k(t,(function(t){if(!g(t))throw new Error("The value "+t+" in the "+n+" fields was not a string.")}))}("required",t),r=wi(t),E(r,(function(n,t){return t<r.length-1&&n===r[t+1]})).each((function(n){throw new Error("The field: "+n+" occurs more than once in the combined fields: ["+r.join(", ")+"].")})),function(r){var o=Ln(r)
W(t,(function(n){return R(o,n)}))||function(n,t){throw new Error("All required keys ("+wi(n).join(", ")+") were not specified. Specified keys were: "+wi(t).join(", ")+".")}(t,o),n(t,o)
var u=I(t,(function(n){return!e.validate(r[n],n)}))
return u.length>0&&function(n,t){throw new Error("All values need to be of type: "+t+". Keys ("+wi(n).join(", ")+") were not.")}(u,e.label),r}},Ci=function(n,t){var e=I(t,(function(t){return!R(n,t)}))
e.length>0&&function(n){throw new Error("Unsupported keys for object: "+wi(n).join(", "))}(e)},xi=function(n){return function(n,t){return yi(n,t,{validate:y,label:"function"})}(Ci,n)},Si=xi(["compare","extract","mutate","sink"]),Ti=xi(["element","start","stop","destroy"]),Ri=xi(["forceDrop","drop","move","delayDrop"]),Di=function(){var n=s.none(),t=bi({move:hi(["info"])})
return{onEvent:function(e,r){r.extract(e).each((function(e){(function(t,e){var r=n.map((function(n){return t.compare(n,e)}))
return n=s.some(e),r})(r,e).each((function(n){t.trigger.move(n)}))}))},reset:function(){n=s.none()},events:t.registry}},Oi=function(){var t,e=(t=bi({move:hi(["info"])}),{onEvent:n,reset:n,events:t.registry}),r=Di(),o=e
return{on:function(){o.reset(),o=r},off:function(){o.reset(),o=e},isOn:function(){return o===r},onEvent:function(n,t){o.onEvent(n,t)},events:r.events}},Ai=function(n,t,e){var r,o,u,i=!1,c=bi({start:hi([]),stop:hi([])}),a=Oi(),l=function(){m.stop(),a.isOn()&&(a.off(),c.trigger.stop())},f=(r=l,o=200,u=null,{cancel:function(){null!==u&&(clearTimeout(u),u=null)},throttle:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]
null!==u&&clearTimeout(u),u=setTimeout((function(){r.apply(null,n),u=null}),o)}})
a.events.move.bind((function(e){t.mutate(n,e.info)}))
var s=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
i&&n.apply(null,t)}},m=t.sink(Ri({forceDrop:l,drop:s(l),move:s((function(n){f.cancel(),a.onEvent(n,t)})),delayDrop:s(f.throttle)}),e)
return{element:m.element,go:function(n){m.start(n),a.on(),c.trigger.start()},on:function(){i=!0},off:function(){i=!1},destroy:function(){m.destroy()},events:c.registry}},ki=function(n){var t,e,r=Bn.fromDom(function(n){if(bt()&&w(n.target)){var t=Bn.fromDom(n.target)
if(ot(t)&&xt(t)&&n.composed&&n.composedPath){var e=n.composedPath()
if(e)return F(e)}}return s.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(t=u,e=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t(e.apply(null,n))})
return function(n,t,e,r,o,u,i){return{target:n,x:t,y:e,stop:r,prevent:o,kill:u,raw:i}}(r,n.clientX,n.clientY,o,u,i,n)},Ii=function(n,t,e,o,u){var i=function(n,t){return function(e){n(e)&&t(ki(e))}}(e,o)
return n.dom.addEventListener(t,i,u),{unbind:r(Bi,n,t,i,u)}},Bi=function(n,t,e,r){n.dom.removeEventListener(t,e,r)},Pi=c,Ei=function(n,t,e){return function(n,t,e,r){return Ii(n,t,e,r,!1)}(n,t,Pi,e)},Mi=ki,Ni=function(n,t){var e=Lt(n,t)
return void 0===e||""===e?[]:e.split(" ")},ji=function(n){return void 0!==n.dom.classList},Wi=function(n,t){return function(n,t,e){var r=Ni(n,t).concat([e])
return jt(n,t,r.join(" ")),!0}(n,"class",t)},Li=function(n,t){ji(n)?n.dom.classList.add(t):Wi(n,t)},zi=function(n,t){return ji(n)&&n.dom.classList.contains(t)},_i=function(n){var t=n.replace(/\./g,"-")
return{resolve:function(n){return t+"-"+n}}},Fi=_i("ephox-dragster"),Hi=Fi.resolve,qi=Si({compare:function(n,t){return $r(t.left-n.left,t.top-n.top)},extract:function(n){return s.some($r(n.x,n.y))},sink:function(n,t){var e=function(n){var t=V({layerClass:Hi("blocker")},n),e=Bn.fromTag("div")
return jt(e,"role","presentation"),Ut(e,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),Li(e,Hi("blocker")),Li(e,t.layerClass),{element:function(){return e},destroy:function(){Ke(e)}}}(t),r=Ei(e.element(),"mousedown",n.forceDrop),o=Ei(e.element(),"mouseup",n.drop),u=Ei(e.element(),"mousemove",n.move),i=Ei(e.element(),"mouseout",n.delayDrop)
return Ti({element:e.element,start:function(n){qe(n,e.element())},stop:function(){Ke(e.element())},destroy:function(){e.destroy(),o.unbind(),u.unbind(),i.unbind(),r.unbind()}})},mutate:function(n,t){n.mutate(t.left,t.top)}}),Vi=function(n){return"true"===Lt(n,"contenteditable")},Ui=_i("ephox-snooker"),$i=Ui.resolve,Gi=function(){var n=bi({drag:hi(["xDelta","yDelta","target"])}),t=s.none(),e=function(){var n=bi({drag:hi(["xDelta","yDelta"])})
return{mutate:function(t,e){n.trigger.drag(t,e)},events:n.registry}}()
e.events.drag.bind((function(e){t.each((function(t){n.trigger.drag(e.xDelta,e.yDelta,t)}))}))
return{assign:function(n){t=s.some(n)},get:function(){return t},mutate:e.mutate,events:n.registry}},Ki=$i("resizer-bar"),Xi=$i("resizer-rows"),Yi=$i("resizer-cols"),Ji=function(n){var t=At(n.parent(),"."+Ki)
k(t,Ke)},Qi=function(n,t,e){var r=n.origin()
k(t,(function(t){t.each((function(t){var o=e(r,t)
Li(o,Ki),qe(n.parent(),o)}))}))},Zi=function(n,t,e,r){Qi(n,t,(function(n,t){var o,u,i,c,a,l,f=(o=t.col,u=t.x-n.left,i=e.top-n.top,c=7,a=r,l=Bn.fromTag("div"),Ut(l,{position:"absolute",left:u-c/2+"px",top:i+"px",height:a+"px",width:c+"px"}),Wt(l,{"data-column":o,role:"presentation"}),l)
return Li(f,Yi),f}))},nc=function(n,t,e,r){Qi(n,t,(function(n,t){var o=function(n,t,e,r,o){var u=Bn.fromTag("div")
return Ut(u,{position:"absolute",left:t+"px",top:e-o/2+"px",height:o+"px",width:r+"px"}),Wt(u,{"data-row":n,role:"presentation"}),u}(t.row,e.left-n.left,t.y-n.top,r,7)
return Li(o,Xi),o}))},tc=function(n,t,e,r,o){var u=Kr(e),i=t.isResizable,c=r.length>0?io.positions(r,e):[],a=c.length>0?function(n,t){return j(n.all,(function(n,e){return t(n.element)?[e]:[]}))}(n,i):[],l=I(c,(function(n,t){return D(a,(function(n){return t===n}))}))
nc(t,l,u,Nr(e))
var f=o.length>0?fo.positions(o,e):[],s=f.length>0?function(n,t){var e=[]
return O(n.grid.columns,(function(r){ke.getColumnAt(n,r).map((function(n){return n.element})).forall(t)&&e.push(r)})),I(e,(function(e){var r=ke.filterItems(n,(function(n){return n.column===e}))
return W(r,(function(n){return t(n.element)}))}))}(n,i):[],m=I(f,(function(n,t){return D(s,(function(n){return t===n}))}))
Zi(t,m,u,Vr(e))},ec=function(n,t){if(Ji(n),n.isResizable(t)){var e=ke.fromTable(t),r=Lr(e),o=jr(e)
tc(e,n,t,r,o)}},rc=function(n,t){var e=At(n.parent(),"."+Ki)
k(e,t)},oc=function(n){rc(n,(function(n){Vt(n,"display","none")}))},uc=function(n){rc(n,(function(n){Vt(n,"display","block")}))},ic=$i("resizer-bar-dragging"),cc=function(n){var t=Gi(),e=function(n,t){void 0===t&&(t={})
var e=void 0!==t.mode?t.mode:qi
return Ai(n,e,t)}(t,{}),o=s.none(),u=function(n,t){return s.from(Lt(n,t))}
t.events.drag.bind((function(n){u(n.target,"data-row").each((function(t){var e=ne(n.target,"top")
Vt(n.target,"top",e+n.yDelta+"px")})),u(n.target,"data-column").each((function(t){var e=ne(n.target,"left")
Vt(n.target,"left",e+n.xDelta+"px")}))}))
var i=function(n,t){return ne(n,t)-Yt(n,"data-initial-"+t,0)}
e.events.stop.bind((function(){t.get().each((function(t){o.each((function(e){u(t,"data-row").each((function(n){var r=i(t,"top")
_t(t,"data-initial-top"),d.trigger.adjustHeight(e,r,parseInt(n,10))})),u(t,"data-column").each((function(n){var r=i(t,"left")
_t(t,"data-initial-left"),d.trigger.adjustWidth(e,r,parseInt(n,10))})),ec(n,e)}))}))}))
var c=function(r,o){d.trigger.startAdjust(),t.assign(r),jt(r,"data-initial-"+o,ne(r,o)),Li(r,ic),Vt(r,"opacity","0.2"),e.go(n.parent())},a=Ei(n.parent(),"mousedown",(function(n){var t
t=n.target,zi(t,Xi)&&c(n.target,"top"),function(n){return zi(n,Yi)}(n.target)&&c(n.target,"left")})),l=function(t){return Mn(t,n.view())},f=function(n){return Mt(n,"table",l).filter((function(n){return function(n,t){return Mt(n,"[contenteditable]",t)}(n,l).exists(Vi)}))},m=Ei(n.view(),"mouseover",(function(t){f(t.target).fold((function(){St(t.target)&&Ji(n)}),(function(t){o=s.some(t),ec(n,t)}))})),d=bi({adjustHeight:hi(["table","delta","row"]),adjustWidth:hi(["table","delta","column"]),startAdjust:hi([])})
return{destroy:function(){a.unbind(),m.unbind(),e.destroy(),Ji(n)},refresh:function(t){ec(n,t)},on:e.on,off:e.off,hideBars:r(oc,n),showBars:r(uc,n),events:d.registry}},ac=function(n,t,e){var r=io,o=fo,u=cc(n),i=bi({beforeResize:hi(["table","type"]),afterResize:hi(["table","type"]),startDrag:hi([])})
return u.events.adjustHeight.bind((function(n){var t=n.table
i.trigger.beforeResize(t,"row")
var e=r.delta(n.delta,t)
Uu(t,e,n.row,r),i.trigger.afterResize(t,"row")})),u.events.startAdjust.bind((function(n){i.trigger.startDrag()})),u.events.adjustWidth.bind((function(n){var r=n.table
i.trigger.beforeResize(r,"col")
var u=o.delta(n.delta,r),c=e(r)
Vu(r,u,n.column,t,c),i.trigger.afterResize(r,"col")})),{on:u.on,off:u.off,hideBars:u.hideBars,showBars:u.showBars,destroy:u.destroy,events:i.registry}},lc=function(n,t){return n.fire("newrow",{node:t})},fc=function(n,t){return n.fire("newcell",{node:t})},sc=function(n,t,e){n.fire("TableModified",V(V({},e),{table:t}))},mc={structure:!1,style:!0},dc={structure:!0,style:!1},gc={"border-collapse":"collapse",width:"100%"},pc={border:"1"},vc="preservetable",hc=function(n){return n.getParam("table_sizing_mode","auto")},bc=function(n){return n.getParam("table_responsive_width")},wc=function(n){return n.getParam("table_default_attributes",pc,"object")},yc=function(n){return n.getParam("table_default_styles",function(n){if(Dc(n)){var t=n.getBody().offsetWidth
return V(V({},gc),{width:t+"px"})}return Oc(n)?qn(gc,(function(n,t){return"width"!==t})):gc}(n),"object")},Cc=function(n){return n.getParam("table_cell_advtab",!0,"boolean")},xc=function(n){return n.getParam("table_row_advtab",!0,"boolean")},Sc=function(n){return n.getParam("table_advtab",!0,"boolean")},Tc=function(n){return n.getParam("table_style_by_css",!1,"boolean")},Rc=function(n){return"relative"===hc(n)||!0===bc(n)},Dc=function(n){return"fixed"===hc(n)||!1===bc(n)},Oc=function(n){return"responsive"===hc(n)},Ac=function(n){return n.getParam("table_use_colgroups",!1,"boolean")},kc=function(n){var t="section",e=n.getParam("table_header_type",t,"string")
return R(["section","cells","sectionCells","auto"],e)?e:t},Ic=function(n){var t=n.getParam("table_column_resizing",vc,"string")
return E(["preservetable","resizetable"],(function(n){return n===t})).getOr(vc)},Bc=function(n){return"preservetable"===Ic(n)},Pc=function(n){return"resizetable"===Ic(n)},Ec=function(n){var t=n.getParam("table_clone_elements")
return g(t)?s.some(t.split(/[ ,]/)):Array.isArray(t)?s.some(t):s.none()},Mc=function(n,t){if(Rc(n)){var e=Tu(n,t.dom).filter(Ru).getOrThunk((function(){return pi(t)}))
return Qo(e,t)}return Dc(n)?Jo(Mr(t),t):Yo(t)},Nc=function(n){_t(n,"width")},jc=function(n,t){var e=function(n){return Mr(n)+"px"}(n)
si(n,s.some(e),s.none(),t),Nc(n)},Wc=function(n,t){(function(n,t){var e=Eo(n)
si(n,s.some(e),s.none(),t),Nc(n)})(t,Mc(n,t))},Lc=function(n,t){var e=Mc(n,t)
jc(t,e)},zc=function(n){Xt(n,"width")
var t=ce(n),e=t.length>0?t:ie(n)
k(e,(function(n){Xt(n,"width"),Nc(n)})),Nc(n)},_c=function(){var n=Bn.fromTag("div")
return Ut(n,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"}),qe(Tt(Bn.fromDom(document)),n),n},Fc="bar-",Hc=function(n){return"false"!==Lt(n,"data-mce-resize")},qc=function(n){var t,e,r=s.none(),o=s.none(),u=s.none(),i=function(n){return"TABLE"===n.nodeName},c=function(){return o},a=function(t){return Mc(n,t)},l=function(){return Bc(n)?Qu():Ju()},f=function(r,o,u){var i=en(o,"e")
if(""===e&&Wc(n,r),u!==t&&""!==e){Vt(r,"width",e)
var c=l(),f=a(r),s=Bc(n)||i?function(n){return vi(n).columns}(r)-1:0
Vu(r,u-t,s,c,f)}else if(Ru(e)){var m=parseFloat(e.replace("%",""))
Vt(r,"width",u*m/t+"%")}(function(n){return/^(\d+(\.\d+)?)px$/.test(n)})(e)&&function(n){var t=ke.fromTable(n)
ke.hasColumns(t)||k(ie(n),(function(n){var t=$t(n,"width")
Vt(n,"width",t),_t(n,"width")}))}(r)}
return n.on("init",(function(){var t=function(n,t){return n.inline?ni(bu(n),_c(),t):Zu(Bn.fromDom(n.getDoc()),t)}(n,Hc)
if(u=s.some(t),function(n){var t=n.getParam("object_resizing",!0)
return g(t)?"table"===t:t}(n)&&function(n){return n.getParam("table_resize_bars",!0,"boolean")}(n)){var e=l(),i=ac(t,e,a)
i.on(),i.events.startDrag.bind((function(t){r=s.some(n.selection.getRng())})),i.events.beforeResize.bind((function(t){var e=t.table.dom;(function(n,t,e,r,o){n.fire("ObjectResizeStart",{target:t,width:e,height:r,origin:o})})(n,e,wu(e),yu(e),Fc+t.type)})),i.events.afterResize.bind((function(t){var e=t.table,o=e.dom
Su(e),r.each((function(t){n.selection.setRng(t),n.focus()})),function(n,t,e,r,o){n.fire("ObjectResized",{target:t,width:e,height:r,origin:o})}(n,o,wu(o),yu(o),Fc+t.type),n.undoManager.add()})),o=s.some(i)}})),n.on("ObjectResizeStart",(function(r){var o=r.target
if(i(o)){var u=Bn.fromDom(o)
k(n.dom.select(".mce-clonedresizable"),(function(t){n.dom.addClass(t,"mce-"+Ic(n)+"-columns")})),!di(u)&&Dc(n)?Lc(n,u):!mi(u)&&Rc(n)&&Wc(n,u),gi(u)&&tn(r.origin,Fc)&&Wc(n,u),t=r.width,e=Oc(n)?"":Tu(n,o).getOr("")}})),n.on("ObjectResized",(function(t){var e=t.target
if(i(e)){var r=Bn.fromDom(e),o=t.origin
tn(o,"corner-")&&f(r,o,t.width),Su(r),sc(n,r.dom,mc)}})),n.on("SwitchMode",(function(){c().each((function(t){n.mode.isReadOnly()?t.hideBars():t.showBars()}))})),{lazyResize:c,lazyWire:function(){return u.getOr(Zu(Bn.fromDom(n.getBody()),Hc))},destroy:function(){o.each((function(n){n.destroy()})),u.each((function(t){(function(n,t){n.inline&&Ke(t.parent())})(n,t)}))}}},Vc=function(n,t){return{element:n,offset:t}},Uc=function(n,t,e){return n.property().isText(t)&&0===n.property().getText(t).trim().length||n.property().isComment(t)?e(t).bind((function(t){return Uc(n,t,e).orThunk((function(){return s.some(t)}))})):s.none()},$c=function(n,t){return n.property().isText(t)?n.property().getText(t).length:n.property().children(t).length},Gc=function(n,t){var e=Uc(n,t,n.query().prevSibling).getOr(t)
if(n.property().isText(e))return Vc(e,$c(n,e))
var r=n.property().children(e)
return r.length>0?Gc(n,r[r.length-1]):Vc(e,$c(n,e))},Kc=Gc,Xc=tr(),Yc=function(n,t){1===Jt(n,"colspan")&&function(n){return Oo(n).bind((function(n){return go(n,["fixed","relative","empty"])}))}(n).each((function(e){var r=e.value/2
Po(n,r,e.unit),Po(t,r,e.unit)}))},Jc=function(n,t,e,r){e===r?_t(n,t):jt(n,t,e)},Qc=function(n,t,e){H(Ot(n,t)).fold((function(){return He(n,e)}),(function(n){return Fe(n,e)}))},Zc=function(n,t){var e=[],r=[],o=function(n){return A(n,(function(n){n.isNew&&e.push(n.element)
var t=n.element
return Ge(t),k(n.cells,(function(n){n.isNew&&r.push(n.element),Jc(n.element,"colspan",n.colspan,1),Jc(n.element,"rowspan",n.rowspan,1),qe(t,n.element)})),t}))},u=function(n){return j(n,(function(n){return A(n.cells,(function(n){return Jc(n.element,"span",n.colspan,1),n.element}))}))},i=function(t,e){var r=function(n,t){var e=Pt(n,t).getOrThunk((function(){var e=Bn.fromTag(t,lt(n).dom)
return"thead"===t?Qc(n,"caption,colgroup",e):"colgroup"===t?Qc(n,"caption",e):qe(n,e),e}))
return Ge(e),e}(n,e),i=("colgroup"===e?u:o)(t)
$e(r,i)},c=function(t,e){t.length>0?i(t,e):function(t){Pt(n,t).each(Ke)}(e)},a=[],l=[],f=[],s=[]
return k(t,(function(n){switch(n.section){case"thead":a.push(n)
break
case"tbody":l.push(n)
break
case"tfoot":f.push(n)
break
case"colgroup":s.push(n)}})),c(s,"colgroup"),c(a,"thead"),c(l,"tbody"),c(f,"tfoot"),{newRows:e,newCells:r}},na=function(n,t){if(0===n.length)return 0
var e=n[0]
return M(n,(function(n){return!t(e.element,n.element)})).fold((function(){return n.length}),(function(n){return n}))},ta=function(n,t,e,r){var o=function(n,t){return n[t]}(n,t).cells.slice(e),u=na(o,r),i=function(n,t){return A(n,(function(n){return we(n,t)}))}(n,e).slice(t)
return{colspan:u,rowspan:na(i,r)}},ea=function(n,t){var e=A(n,(function(n){return A(n.cells,i)}))
return A(n,(function(r,o){return function(n,t){return{details:n,section:t}}(j(r.cells,(function(r,u){if(!1===e[o][u]){var i=ta(n,o,u,t)
return function(n,t,r,o){for(var u=n;u<n+r;u++)for(var i=t;i<t+o;i++)e[u][i]=!0}(o,u,i.rowspan,i.colspan),[(c=r.element,a=i.rowspan,l=i.colspan,f=r.isNew,{element:c,rowspan:a,colspan:l,isNew:f})]}return[]
var c,a,l,f})),r.section)}))},ra=function(n,t,e){var r=[]
if(ke.hasColumns(n)){var o=A(ke.justColumns(n),(function(n){return Qn(n.element,e,!1)}))
r.push(Zn(o,"colgroup"))}for(var u=0;u<n.grid.rows;u++){for(var i=[],c=0;c<n.grid.columns;c++){var a=ke.getAt(n,u,c).map((function(n){return Qn(n.element,e,n.isLocked)})).getOrThunk((function(){return Qn(t.gap(),!0,!1)}))
i.push(a)}var l=Zn(i,n.all[u].section)
r.push(l)}return r},oa=function(n,t){return A(n,(function(n){var e=function(n){return q(n,(function(n){return st(n.element).map((function(n){var t=st(n).isNone()
return Qn(n,t,!1)}))})).getOrThunk((function(){return Qn(t.row(),!0,!1)}))}(n.details)
return function(n,t,e,r){return{element:n,cells:t,section:e,isNew:r}}(e.element,n.details,n.section,e.isNew)}))},ua=function(n,t){var e=ea(n,Mn)
return oa(e,t)},ia=function(n,t){return q(n.all,(function(n){return E(n.cells,(function(n){return Mn(t,n.element)}))}))},ca=function(n,t,e){var r=A(t.selection,(function(t){return ue(t).bind((function(t){return ia(n,t)})).filter(e)})),o=Ir(r)
return Br(o.length>0,o)},aa=function(n,t,e,r,o){return function(u,i,c,a,l,f){var m=ke.fromTable(i)
return t(m,c).map((function(t){var e=function(n,t){return ra(n,t,!1)}(m,a),r=n(e,t,Mn,o(a)),u=Re(r.grid)
return{info:t,grid:ua(r.grid,a),cursor:r.cursor,lockedColumns:u}})).bind((function(n){var t=Zc(i,n.grid),o=s.from(l).getOrThunk((function(){return Yo(i)})),c=s.from(f).getOrThunk(Qu)
return e(i,n.grid,n.info,o,c),r(i),ec(u,i),_t(i,Se),n.lockedColumns.length>0&&jt(i,Se,n.lockedColumns.join(",")),s.some({cursor:n.cursor,newRows:t.newRows,newCells:t.newCells})}))}},la=function(n,t){return ue(t.element).bind((function(t){return ia(n,t)}))},fa=function(n,t){return ca(n,t,c).map((function(n){return{cells:n,generators:t.generators,clipboard:t.clipboard}}))},sa=function(n,t){return ca(n,t,c)},ma=function(n,t){return la(n,t).filter((function(n){return!n.isLocked}))},da=function(n,t){return ca(n,t,(function(n){return!n.isLocked}))},ga=function(n,t){return W(t,(function(t){return function(n,t){return ia(n,t).exists((function(n){return!n.isLocked}))}(n,t)}))},pa=function(n,t){return function(n,t){return t.mergable}(0,t).filter((function(t){return ga(n,t.cells)}))},va=function(n,t){return function(n,t){return t.unmergable}(0,t).filter((function(t){return ga(n,t)}))},ha=function(n,t,e,r){for(var o=xe(n).rows,u=!0,i=0;i<o.length;i++)for(var c=0;c<Ce(o[0]);c++){var a=o[i],l=we(a,c),f=e(l.element,t)
!0===f&&!1===u?ve(a,c,Qn(r(),!0,l.isLocked)):!0===f&&(u=!1)}return n},ba=function(n,t,e,r){var o=xe(n).rows
if(t>0&&t<o.length){var u=function(n,t){return P(n,(function(n,e){return D(n,(function(n){return t(n.element,e.element)}))?n:n.concat([e])}),[])}(o[t-1].cells,e)
k(u,(function(n){for(var u=s.none(),i=t;i<o.length;i++)for(var c=function(t){var c=o[i],a=we(c,t)
e(a.element,n.element)&&(u.isNone()&&(u=s.some(r())),u.each((function(n){ve(c,t,Qn(n,!0,a.isLocked))})))},a=0;a<Ce(o[0]);a++)c(a)}))}return n},wa=function(n){return{is:function(t){return n===t},isValue:c,isError:i,getOr:t(n),getOrThunk:t(n),getOrDie:t(n),or:function(t){return wa(n)},orThunk:function(t){return wa(n)},fold:function(t,e){return e(n)},map:function(t){return wa(t(n))},mapError:function(t){return wa(n)},each:function(t){t(n)},bind:function(t){return t(n)},exists:function(t){return t(n)},forall:function(t){return t(n)},toOptional:function(){return s.some(n)}}},ya=function(t){return{is:i,isValue:i,isError:c,getOr:e,getOrThunk:function(n){return n()},getOrDie:function(){return(n=String(t),function(){throw new Error(n)})()
var n},or:function(n){return n},orThunk:function(n){return n()},fold:function(n,e){return n(t)},map:function(n){return ya(t)},mapError:function(n){return ya(n(t))},each:n,bind:function(n){return ya(t)},exists:i,forall:c,toOptional:s.none}},Ca={value:wa,error:ya,fromOption:function(n,t){return n.fold((function(){return ya(t)}),wa)}},xa=function(n,t){return{rowDelta:0,colDelta:Ce(n[0])-Ce(t[0])}},Sa=function(n,t){return{rowDelta:n.length-t.length,colDelta:0}},Ta=function(n,t,e,r){var o="colgroup"===t.section?e.col:e.cell
return O(n,(function(n){return Qn(o(),!0,r(n))}))},Ra=function(n,t,e,r){return n.concat(O(t,(function(){var t=n[n.length-1],o=Ta(t.cells.length,t,e,(function(n){return Gn(r,n.toString())}))
return he(t,o)})))},Da=function(n,t,e,r){return A(n,(function(n){var o=Ta(t,n,e,i)
return ge(n,r,o)}))},Oa=function(n,t,r){var o=t.colDelta<0?Da:e,u=t.rowDelta<0?Ra:e,i=Re(n),a=Ce(n[0]),l=D(i,(function(n){return n===a-1})),f=o(n,Math.abs(t.colDelta),r,l?a-1:a),s=Re(f)
return u(f,Math.abs(t.rowDelta),r,L(s,c))},Aa=function(n,t,e,o){var u=r(o,we(n[t],e).element),i=n[t]
return n.length>1&&Ce(i)>1&&(e>0&&u(ye(i,e-1))||e<i.cells.length-1&&u(ye(i,e+1))||t>0&&u(ye(n[t-1],e))||t<n.length-1&&u(ye(n[t+1],e)))},ka=function(n,t,e){return I(e,(function(e){return e>=n.column&&e<=Ce(t[0])+n.column}))},Ia=function(n,t,e,r,o){var u=Re(t),i=function(n,t,e){var r=Ce(t[0]),o=O(r-n.column,(function(t){return t+n.column})),u=E(o,(function(n){return W(e,(function(t){return t!==n}))})).getOr(r-1)
return V(V({},n),{column:u})}(n,t,u),a=ka(i,e,u)
return function(n,t,e){if(n.row>=t.length||n.column>Ce(t[0]))return Ca.error("invalid start address out of table bounds, row: "+n.row+", column: "+n.column)
var r=t.slice(n.row),o=r[0].cells.slice(n.column),u=Ce(e[0]),i=e.length
return Ca.value({rowDelta:r.length-i,colDelta:o.length-u})}(i,t,e).map((function(n){var u=V(V({},n),{colDelta:n.colDelta-a.length}),l=Oa(t,u,r),f=Re(l),s=ka(i,e,f)
return function(n,t,e,r,o,u){for(var i=n.row,a=n.column,l=i+e.length,f=a+Ce(e[0])+u.length,s=L(u,c),m=i;m<l;m++)for(var d=0,g=a;g<f;g++)if(s[g])d++
else{Aa(t,m,g,o)&&ha(t,ye(t[m],g),o,r.cell)
var p=g-a-d,v=we(e[m-i],p),h=v.element,b=r.replace(h)
ve(t[m],g,Qn(b,!0,v.isLocked))}return t}(i,l,e,r,o,s)}))},Ba=function(n,t,e,r,o){(function(n,t,e,r){t>0&&t<n[0].cells.length&&k(n,(function(n){var o=n.cells[t-1],u=n.cells[t]
e(u.element,o.element)&&ve(n,t,Qn(r(),!0,u.isLocked))}))})(t,n,o,r.cell)
var u=Sa(e,t),i=Oa(e,u,r),c=Sa(t,i),a=Oa(t,c,r)
return A(a,(function(t,e){return ge(t,n,i[e].cells)}))},Pa=function(n,t,e,r,o){ba(t,n,o,r.cell)
var u=Re(t),i=xa(t,e),a=V(V({},i),{colDelta:i.colDelta-u.length}),l=Oa(t,a,r),f=xe(l),s=f.cols,m=f.rows,d=Re(l),g=xa(e,t),p=V(V({},g),{colDelta:g.colDelta+d.length}),v=function(n,t,e){return A(n,(function(n){return P(e,(function(e,r){var o=Ta(1,n,t,c)[0]
return pe(e,r,o)}),n)}))}(e,r,d),h=Oa(v,p,r)
return s.concat(m.slice(0,n)).concat(h).concat(m.slice(n,m.length))},Ea=function(n,t,e,r,o){var u=xe(n),i=u.rows,c=u.cols,a=i.slice(0,t),l=i.slice(t),f=be(i[e],(function(n,e){return t>0&&t<i.length&&r(ye(i[t-1],e),ye(i[t],e))?we(i[t],e):Qn(o(n.element,r),!0,n.isLocked)}))
return c.concat(a).concat([f]).concat(l)},Ma=function(n,t,e,r,o){return A(n,(function(n){var u=t>0&&t<Ce(n)&&r(ye(n,t-1),ye(n,t)),i=function(n,t,e,r,o,u,i){if("colgroup"!==e&&r)return we(n,t)
var c=we(n,o)
return Qn(i(c.element,u),!0,!1)}(n,t,n.section,u,e,r,o)
return pe(n,t,i)}))},Na=function(n,t,e,r){return A(n,(function(n){return be(n,(function(n){return function(n){return D(t,(function(t){return e(n.element,t.element)}))}(n)?Qn(r(n.element,e),!0,n.isLocked):n}))}))},ja=function(n,t,e,r){return void 0!==ye(n[t],e)&&t>0&&r(ye(n[t-1],e),ye(n[t],e))},Wa=function(n,t,e){return t>0&&e(ye(n,t-1),ye(n,t))},La=function(n,t,e,r){var o=xe(n).rows,u=j(o,(function(r,o){return ja(n,o,t,e)||Wa(r,t,e)?[]:[we(r,t)]}))
return Na(n,u,e,r)},za=function(n,t,e,r){var o=xe(n).rows,u=o[t],i=j(u.cells,(function(n,r){return ja(o,t,r,e)||Wa(u,r,e)?[]:[n]}))
return Na(n,i,e,r)},_a=function(n){return P(n,(function(n,t){return D(n,(function(n){return n.column===t.column}))?n:n.concat([t])}),[]).sort((function(n,t){return n.column-t.column}))},Fa=function(n){return{element:n,colspan:Yt(n,"colspan",1),rowspan:Yt(n,"rowspan",1)}},Ha=function(n){return zt(n,"scope").map((function(n){return n.substr(0,3)}))},qa=function(n,t){void 0===t&&(t=Fa)
var e=$o(s.none()),r=function(e){return function(t){switch(nt(t.element)){case"col":return n.col(t)
default:return n.cell(t)}}(t(e))},o=function(n){var t=r(n)
return e.get().isNone()&&e.set(s.some(t)),u=s.some({item:n,replacement:t}),t},u=s.none()
return{getOrInit:function(n,t){return u.fold((function(){return o(n)}),(function(e){return t(n,e.item)?e.replacement:o(n)}))},cursor:e.get}},Va=function(n,t){return function(e){var r=$o(s.none()),o=[],u=function(u){var i={scope:n},c=e.replace(u,t,i)
return o.push({item:u,sub:c}),r.get().isNone()&&r.set(s.some(c)),c}
return{replaceOrInit:function(n,t){return"col"===nt(n)?n:function(n,t){return E(o,(function(e){return t(e.item,n)}))}(n,t).fold((function(){return u(n)}),(function(e){return t(n,e.item)?e.sub:u(n)}))},cursor:r.get}}},Ua=function(n){var e=$o(s.none())
return{unmerge:function(t){e.get().isNone()&&e.set(s.some(t))
var r=Ha(t)
return r.each((function(n){return jt(t,"scope",n)})),function(){var e=n.cell({element:t,colspan:1,rowspan:1})
return Xt(e,"width"),Xt(t,"width"),r.each((function(n){return jt(e,"scope",n)})),e}},merge:function(n){return Xt(n[0],"width"),function(){var t=Ir(A(n,Ha))
if(0===t.length)return s.none()
var e=t[0],r=["row","col"]
return D(t,(function(n){return n!==e&&R(r,n)}))?s.none():s.from(e)}().fold((function(){return _t(n[0],"scope")}),(function(t){return jt(n[0],"scope",t+"group")})),t(n[0])},cursor:e.get}},$a=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"],Ga=tr(),Ka=function(n){return function(n,t){var e=n.property().name(t)
return R($a,e)}(Ga,n)},Xa=function(n){return function(n,t){var e=n.property().name(t)
return R(["ol","ul"],e)}(Ga,n)},Ya=function(n){return function(n,t){return R(["br","img","hr","input"],n.property().name(t))}(Ga,n)},Ja=function(n){var t,e=function(n){return"br"===nt(n)},r=function(n){return uu(n).bind((function(t){var r=gt(t).map((function(n){return!!Ka(n)||!!Ya(n)&&"img"!==nt(n)})).getOr(!1)
return st(t).map((function(o){return!0===r||function(n){return"li"===nt(n)||It(n,Xa).isSome()}(o)||e(t)||Ka(o)&&!Mn(n,o)?[]:[Bn.fromTag("br")]}))})).getOr([])},o=0===(t=j(n,(function(n){var t=pt(n)
return function(n){return W(n,(function(n){return e(n)||ut(n)&&0===Je(n).trim().length}))}(t)?[]:t.concat(r(n))}))).length?[Bn.fromTag("br")]:t
Ge(n[0]),$e(n[0],o)},Qa=function(n){0===ie(n).length&&Ke(n)},Za=function(n,t){return{grid:n,cursor:t}},nl=function(n,t,e){var r=xe(n).rows
return tl(r,t,e).orThunk((function(){return tl(r,0,0)}))},tl=function(n,t,e){return s.from(n[t]).bind((function(n){return s.from(n.cells[e]).bind((function(n){return s.from(n.element)}))}))},el=function(n,t,e){var r=xe(n).rows
return Za(n,tl(r,t,e))},rl=function(n){return P(n,(function(n,t){return D(n,(function(n){return n.row===t.row}))?n:n.concat([t])}),[]).sort((function(n,t){return n.row-t.row}))},ol=function(n,t,e){var r,o,u=(r=n,o=e.section,se(r,(function(){return o}))),i=ke.generate(u)
return ra(i,t,!0)},ul=function(n,t){var e=I(n,t)
return 0===e.length?s.some("td"):e.length===n.length?s.some("th"):s.none()},il=function(n,t,e,r){var o=ke.generate(t),u=r.getWidths(o,r)
qu(o,u,r)},cl=function(n,t,e,r,o){var u=ke.generate(t),i=r.getWidths(u,r),c=r.pixelWidth(),a=o.calcRedestributedWidths(i,c,e.pixelDelta,r.isRelative),l=a.newSizes,f=a.delta
qu(u,l,r),r.adjustTableWidth(f)},al=function(n,t){return D(t,(function(n){return 0===n.column&&n.isLocked}))},ll=function(n,t){return D(t,(function(t){return t.column+t.colspan>=n.grid.columns&&t.isLocked}))},fl=function(n,t){var e=jr(n),r=_a(t)
return P(r,(function(n,t){return n+e[t.column].map(Nr).getOr(0)}),0)},sl=function(n){return function(t,e){return sa(t,e).filter((function(e){return!(n?al:ll)(t,e)})).map((function(n){return{details:n,pixelDelta:fl(t,n)}}))}},ml=function(n){return function(t,e){return fa(t,e).filter((function(e){return!(n?al:ll)(t,e.cells)}))}},dl=aa((function(n,t,e,r){var o=t[0].row,u=rl(t),i=B(u,(function(n,t){return{grid:Ea(n.grid,o,t.row+n.delta,e,r.getOrInit),delta:n.delta+1}}),{grid:n,delta:0}).grid
return el(i,o,t[0].column)}),sa,n,n,qa),gl=aa((function(n,t,e,r){var o=rl(t),u=o[o.length-1],i=u.row+u.rowspan,c=B(o,(function(n,t){return Ea(n,i,t.row,e,r.getOrInit)}),n)
return el(c,i,t[0].column)}),sa,n,n,qa),pl=aa((function(n,t,e,r){var o=t.details,u=_a(o),i=u[0].column,c=B(u,(function(n,t){return{grid:Ma(n.grid,i,t.column+n.delta,e,r.getOrInit),delta:n.delta+1}}),{grid:n,delta:0}).grid
return el(c,o[0].row,i)}),sl(!0),cl,n,qa),vl=aa((function(n,t,e,r){var o=t.details,u=o[o.length-1],i=u.column+u.colspan,c=_a(o),a=B(c,(function(n,t){return Ma(n,i,t.column,e,r.getOrInit)}),n)
return el(a,o[0].row,i)}),sl(!1),cl,n,qa),hl=aa((function(n,t,e,r){var o=_a(t.details),u=function(n,t){return j(n,(function(n){var e=n.cells,r=B(t,(function(n,t){return t>=0&&t<n.length?n.slice(0,t).concat(n.slice(t+1)):n}),e)
return r.length>0?[Zn(r,n.section)]:[]}))}(n,A(o,(function(n){return n.column}))),i=nl(u,o[0].row,o[0].column)
return Za(u,i)}),(function(n,t){return da(n,t).map((function(t){return{details:t,pixelDelta:-fl(n,t)}}))}),cl,Qa,qa),bl=aa((function(n,t,e,r){var o=rl(t),u=function(n,t,e){var r=xe(n),o=r.rows
return r.cols.concat(o.slice(0,t)).concat(o.slice(e+1))}(n,o[0].row,o[o.length-1].row),i=nl(u,t[0].row,t[0].column)
return Za(u,i)}),sa,n,Qa,qa),wl=(aa((function(n,t,e,r){var o=La(n,t.column,e,r.replaceOrInit)
return el(o,t.row,t.column)}),ma,n,n,Va("row","th")),aa((function(n,t,e,r){var o=_a(t),u=P(o,(function(n,t){return La(n,t.column,e,r.replaceOrInit)}),n)
return el(u,t[0].row,t[0].column)}),da,n,n,Va("row","th"))),yl=(aa((function(n,t,e,r){var o=La(n,t.column,e,r.replaceOrInit)
return el(o,t.row,t.column)}),ma,n,n,Va(null,"td")),aa((function(n,t,e,r){var o=_a(t),u=P(o,(function(n,t){return La(n,t.column,e,r.replaceOrInit)}),n)
return el(u,t[0].row,t[0].column)}),da,n,n,Va(null,"td"))),Cl=(aa((function(n,t,e,r){var o=za(n,t.row,e,r.replaceOrInit)
return el(o,t.row,t.column)}),la,n,n,Va("col","th")),aa((function(n,t,e,r){var o=rl(t),u=P(o,(function(n,t){return za(n,t.row,e,r.replaceOrInit)}),n)
return el(u,t[0].row,t[0].column)}),sa,n,n,Va("col","th")),aa((function(n,t,e,r){var o=za(n,t.row,e,r.replaceOrInit)
return el(o,t.row,t.column)}),la,n,n,Va(null,"td")),aa((function(n,t,e,r){var o=rl(t),u=P(o,(function(n,t){return za(n,t.row,e,r.replaceOrInit)}),n)
return el(u,t[0].row,t[0].column)}),sa,n,n,Va(null,"td")),aa((function(n,t,e,r){var o=t.cells
Ja(o)
var u=function(n,t,e,r){var o=xe(n).rows
if(0===o.length)return n
for(var u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++){var c=o[u],a=we(c,i).isLocked
ve(c,i,Qn(r(),!1,a))}return n}(n,t.bounds,0,r.merge(o))
return Za(u,s.from(o[0]))}),pa,il,n,Ua)),xl=aa((function(n,t,e,r){var o=B(t,(function(n,t){return ha(n,t,e,r.unmerge(t))}),n)
return Za(o,s.from(t[0]))}),va,il,n,Ua),Sl=aa((function(n,t,e,r){var o=function(n,t){var e=ke.fromTable(n)
return ra(e,t,!0)}(t.clipboard,t.generators),u=function(n,t){return{row:n,column:t}}(t.row,t.column)
return Ia(u,n,o,t.generators,e).fold((function(){return Za(n,s.some(t.element))}),(function(n){var e=nl(n,t.row,t.column)
return Za(n,e)}))}),(function(n,t){return ue(t.element).bind((function(e){return ia(n,e).map((function(n){return V(V({},n),{generators:t.generators,clipboard:t.clipboard})}))}))}),il,n,qa),Tl=aa((function(n,t,e,r){var o=xe(n).rows,u=t.cells[0].column,i=o[t.cells[0].row],c=ol(t.clipboard,t.generators,i),a=Ba(u,n,c,t.generators,e),l=nl(a,t.cells[0].row,t.cells[0].column)
return Za(a,l)}),ml(!0),n,n,qa),Rl=aa((function(n,t,e,r){var o=xe(n).rows,u=t.cells[t.cells.length-1].column+t.cells[t.cells.length-1].colspan,i=o[t.cells[0].row],c=ol(t.clipboard,t.generators,i),a=Ba(u,n,c,t.generators,e),l=nl(a,t.cells[0].row,t.cells[0].column)
return Za(a,l)}),ml(!1),n,n,qa),Dl=aa((function(n,t,e,r){var o=xe(n).rows,u=t.cells[0].row,i=o[u],c=ol(t.clipboard,t.generators,i),a=Pa(u,n,c,t.generators,e),l=nl(a,t.cells[0].row,t.cells[0].column)
return Za(a,l)}),fa,n,n,qa),Ol=aa((function(n,t,e,r){var o=xe(n).rows,u=t.cells[t.cells.length-1].row+t.cells[t.cells.length-1].rowspan,i=o[t.cells[0].row],c=ol(t.clipboard,t.generators,i),a=Pa(u,n,c,t.generators,e),l=nl(a,t.cells[0].row,t.cells[0].column)
return Za(a,l)}),fa,n,n,qa),Al=function(n,t){var e=ke.fromTable(n)
return sa(e,t).bind((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan,u=N(A(e.all,(function(n){return I(n.cells,(function(n){return n.column>=r&&n.column<o}))})))
return ul(u,(function(n){return"th"===nt(n.element)}))})).getOr("")},kl=function(n){return hu(n.parentNode)},Il=function(n,t){var e="thead"===kl(t),r=!D(t.cells,(function(n){return"th"!==hu(n)}))
return e||r?s.some({thead:e,ths:r}):s.none()},Bl=function(n,t){return"thead"===(e=Il(0,t).fold((function(){return kl(t)}),(function(n){return"thead"})))?"header":"tfoot"===e?"footer":"body"
var e},Pl=function(n,t,e){var r=n.getParent(t,"table"),o=t.parentNode,u=hu(o)
if(e!==u){var i=n.select(e,r)[0]
if(!i){i=n.create(e)
var c=r.firstChild
"thead"===e?H(Ot(Bn.fromDom(r),"caption,colgroup")).fold((function(){return r.insertBefore(i,c)}),(function(t){return n.insertAfter(i,t.dom)})):r.appendChild(i)}"tbody"===e&&"thead"===u&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),o.hasChildNodes()||n.remove(o)}},El=function(n,t,e,r){var o=n.dom,u=function(n,t,e){if(w(e)&&hu(t)!==e){var r=n.dom.rename(t,e)
return fc(n,r),r}return t}(n,t,e)
return b(r)||o.setAttrib(u,"scope",r),u},Ml=function(n,t,e,r){return k(t,(function(t){return El(n,t,e,r)}))},Nl=function(n,t,e){var r,o=n.dom
if("header"===e){var u=kc(n),i="auto"===u?(r=ae(Bn.fromDom(t.cells[0])).map((function(n){return le(n)})).getOr([]),q(r,(function(n){return Il(0,n.dom)})).map((function(n){return n.thead&&n.ths?"sectionCells":n.thead?"section":"cells"})).getOr("section")):u
Ml(n,t.cells,"section"===i?"td":"th","col"),Pl(o,t,"cells"===i?"tbody":"thead")}else Ml(n,t.cells,"td",null),Pl(o,t,"footer"===e?"tfoot":"tbody")},jl=function(n){return function(t){var e=nt(t),r="col"===e||"colgroup"===e?function(n){return ae(n).bind((function(n){return hr(n,Eu.firstSelectedSelector)})).fold((function(){return n}),(function(n){return n[0]}))}(t):t
return Mt(r,n)}},Wl=jl("th,td"),Ll=jl("th,td,caption"),zl=function(n,t){return Wl(n).map((function(n){return Ou(t)})).getOr([])},_l=function(n,t){var e,r,o,u=Wl(n),i=u.bind((function(n){return ae(n)})).map((function(n){return le(n)}))
return(e=u,r=i,o=function(n,e){return I(e,(function(e){return D(vu(e.dom.cells),(function(e){return"1"===Lt(e,t)||Mn(e,n)}))}))},e.isSome()&&r.isSome()?s.some(o(e.getOrDie(),r.getOrDie())):s.none()).getOr([])},Fl=function(t,e,r){var o=function(n){return"table"===nt(bu(n))},u=Ec(t),i=Pc(t)?n:Yc,a=function(n,e,r,o,i){return function(c,a){Su(c)
var l=o(),f=Bn.fromDom(t.getDoc()),m=gu(r,f,u),d=Mc(t,c),g=Pc(t)?Ju():Qu()
return e(c)?n(l,c,a,m,d,g).bind((function(n){return k(n.newRows,(function(n){lc(t,n.dom)})),k(n.newCells,(function(n){fc(t,n.dom)})),n.cursor.map((function(n){var e=Kc(Xc,n),r=t.dom.createRng()
return r.setStart(e.element.dom,e.offset),r.setEnd(e.element.dom,e.offset),{rng:r,effect:i}}))})):s.none()}},l=a(bl,(function(n){return!1===o(t)||vi(n).rows>1}),n,e,dc),f=a(hl,(function(n){return!1===o(t)||vi(n).columns>1}),n,e,dc),m=a(dl,c,n,e,dc),d=a(gl,c,n,e,dc),g=a(pl,c,i,e,dc),p=a(vl,c,i,e,dc),v=a(Cl,c,n,e,dc),h=a(xl,c,n,e,dc),b=a(Tl,c,n,e,dc),w=a(Rl,c,n,e,dc),y=a(Dl,c,n,e,dc),C=a(Ol,c,n,e,dc),x=a(Sl,c,n,e,dc),S=function(n,t){return $n(n,"type").filter((function(n){return R(t,n)}))}
return{deleteRow:l,deleteColumn:f,insertRowsBefore:m,insertRowsAfter:d,insertColumnsBefore:g,insertColumnsAfter:p,mergeCells:v,unmergeCells:h,pasteColsBefore:b,pasteColsAfter:w,pasteRowsBefore:y,pasteRowsAfter:C,pasteCells:x,setTableCellType:function(n,t){return S(t,["td","th"]).each((function(t){var e=A(zl(Du(n),r),(function(n){return n.dom}))
Ml(n,e,t,null)}))},setTableRowType:function(n,t){return S(t,["header","body","footer"]).each((function(t){A(_l(Du(n),Eu.selected),(function(e){return Nl(n,e.dom,t)}))}))},makeColumnsHeader:a(wl,c,n,e,dc),unmakeColumnsHeader:a(yl,c,n,e,dc),getTableRowType:function(n){var t=_l(Du(n),Eu.selected)
if(t.length>0){var e=A(t,(function(n){return Bl(0,n.dom)})),r=R(e,"header"),o=R(e,"footer")
if(r||o){var u=R(e,"body")
return!r||u||o?r||u||!o?"":"footer":"header"}return"body"}},getTableCellType:function(n){return ul(zl(Du(n),r),(function(n){return"th"===nt(n)})).getOr("")},getTableColType:Al}},Hl={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},colGroups:!1},ql=function(n){var t=Bn.fromTag("colgroup")
return O(n,(function(){return qe(t,Bn.fromTag("col"))})),t},Vl=function(n,t,e,r){return O(n,(function(n){return function(n,t,e,r){for(var o=Bn.fromTag("tr"),u=0;u<n;u++){var i=r<t||u<e?Bn.fromTag("th"):Bn.fromTag("td")
u<e&&jt(i,"scope","row"),r<t&&jt(i,"scope","col"),qe(i,Bn.fromTag("br")),qe(o,i)}return o}(t,e,r,n)}))},Ul=function(n,t){n.selection.select(t.dom,!0),n.selection.collapse(!0)},$l=function(n,t,e,o,u){var i=yc(n),c={styles:i,attributes:wc(n),colGroups:Ac(n)}
return n.undoManager.ignore((function(){var r=function(n,t,e,r,o,u){void 0===u&&(u=Hl)
var i=Bn.fromTag("table"),c="cells"!==o
Ut(i,u.styles),Wt(i,u.attributes),u.colGroups&&qe(i,ql(t))
var a=Math.min(n,e)
if(c&&e>0){var l=Bn.fromTag("thead")
qe(i,l)
var f=Vl(e,t,"sectionCells"===o?a:0,r)
$e(l,f)}var s=Bn.fromTag("tbody")
qe(i,s)
var m=Vl(c?n-a:n,t,c?0:e,r)
return $e(s,m),i}(e,t,u,o,kc(n),c)
jt(r,"data-mce-id","__mce")
var i=function(n){var t=Bn.fromTag("div"),e=Bn.fromDom(n.dom.cloneNode(!0))
return qe(t,e),function(n){return n.dom.innerHTML}(t)}(r)
n.insertContent(i),n.addVisual()})),Et(bu(n),'table[data-mce-id="__mce"]').map((function(t){return Dc(n)?Lc(n,t):Oc(n)?zc(t):(Rc(n)||function(n){return g(n)&&-1!==n.indexOf("%")}(i.width))&&Wc(n,t),Su(t),_t(t,"data-mce-id"),function(n,t){k(At(t,"tr"),(function(t){lc(n,t.dom),k(At(t,"th,td"),(function(t){fc(n,t.dom)}))}))}(n,t),function(n,t){Et(t,"td,th").each(r(Ul,n))}(n,t),t.dom})).getOr(null)},Gl=function(n,t,e,r,o){void 0===r&&(r={})
var u=function(n){return C(n)&&n>0}
if(u(t)&&u(e)){var i=r.headerRows||0,c=r.headerColumns||0
return $l(n,e,t,c,i)}return console.error(o),null},Kl=function(n){return function(){return n().fold((function(){return[]}),(function(n){return A(n,(function(n){return n.dom}))}))}},Xl=function(n){return function(t){var e=t.length>0?s.some(vu(t)):s.none()
n(e)}},Yl=function(n){return function(t,e,r){void 0===r&&(r={})
var o=Gl(n,e,t,r,"Invalid values for insertTable - rows and columns values are required to insert a table.")
return n.undoManager.add(),o}},Jl=function(n,t,e){var r=Yt(n,t,1)
1===e||r<=1?_t(n,t):jt(n,t,Math.min(e,r))},Ql=function(n,t){var e=ke.fromTable(n)
return da(e,t).map((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan
return U(function(n,t,e){if(ke.hasColumns(n)){var r=I(ke.justColumns(n),(function(n){return n.column>=t&&n.column<e})),o=A(r,(function(n){var r=Ar(n.element)
return Jl(r,"span",e-t),r})),u=Bn.fromTag("colgroup")
return $e(u,o),[u]}return[]}(e,r,o),function(n,t,e){return A(n.all,(function(n){var r=I(n.cells,(function(n){return n.column>=t&&n.column<e})),o=A(r,(function(n){var r=Ar(n.element)
return Jl(r,"colspan",e-t),r})),u=Bn.fromTag("tr")
return $e(u,o),u}))}(e,r,o))}))},Zl=function(n,t,e){var r=ke.fromTable(n)
return sa(r,t).bind((function(n){var t=ra(r,e,!1),o=xe(t).rows.slice(n[0].row,n[n.length-1].row+n[n.length-1].rowspan),u=j(o,(function(n){var t=I(n.cells,(function(n){return!n.isLocked}))
return t.length>0?[V(V({},n),{cells:t})]:[]})),i=ua(u,e)
return Br(i.length>0,i)})).map((function(n){return function(n){return A(n,(function(n){var t=Or(n.element)
return k(n.cells,(function(n){var e=Ar(n.element)
Jc(e,"colspan",n.colspan,1),Jc(e,"rowspan",n.rowspan,1),qe(t,e)})),t}))}(n)}))},nf=tinymce.util.Tools.resolve("tinymce.util.Tools"),tf=function(n,t,e){return function(t,r){for(var o=0;o<r.length;o++){var u=n.getStyle(r[o],e)
if(void 0===t&&(t=u),t!==u)return""}return t}(undefined,n.select("td,th",t))},ef=function(n,t,e){e&&n.formatter.apply("align"+e,{},t)},rf=function(n,t){nf.each("left center right".split(" "),(function(e){n.formatter.remove("align"+e,{},t)}))},of=function(n,t){return function(n,t){return t.concat(A(n,(function(n){var t=n.text||n.title
return function(n){return Kn(n,"menu")}(n)?{text:t,items:of(n.menu)}:{text:t,value:n.value}})))}(n,t||[])},uf=function(n){return function(t){return tn(t,"rgb")?n.toHex(t):t}},cf=function(n,t){var e=Bn.fromDom(t)
return{borderwidth:Kt(e,"border-width").getOr(""),borderstyle:Kt(e,"border-style").getOr(""),bordercolor:Kt(e,"border-color").map(uf(n)).getOr(""),backgroundcolor:Kt(e,"background-color").map(uf(n)).getOr("")}},af=function(n){var t=n[0],e=n.slice(1)
return k(e,(function(n){k(Ln(t),(function(e){_n(n,(function(n,r){var o=t[e]
""!==o&&e===r&&o!==n&&(t[e]="")}))}))})),t},lf=function(n){var t=[{name:"borderstyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]},{name:"bordercolor",type:"colorinput",label:"Border color"},{name:"backgroundcolor",type:"colorinput",label:"Background color"}]
return{title:"Advanced",name:"advanced",items:"cell"===n?[{name:"borderwidth",type:"input",label:"Border width"}].concat(t):t}},ff=function(n,t,e,r){return E(n,(function(n){return e.formatter.matchNode(r,t+n)})).getOr("")},sf=r(ff,["left","center","right"],"align"),mf=r(ff,["top","middle","bottom"],"valign"),df=[{name:"width",type:"input",label:"Width"},{name:"height",type:"input",label:"Height"},{name:"celltype",type:"listbox",label:"Cell type",items:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{name:"scope",type:"listbox",label:"Scope",items:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{name:"halign",type:"listbox",label:"H Align",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{name:"valign",type:"listbox",label:"V Align",items:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}],gf=function(n){return df.concat(function(n){var t=of(function(n){return n.getParam("table_cell_class_list",[],"array")}(n))
return t.length>0?s.some({name:"class",type:"listbox",label:"Class",items:t}):s.none()}(n).toArray())},pf=function(n){return function(t,e){var r=t.dom
return{setAttrib:function(t,o){n&&!o||r.setAttrib(e,t,o)},setStyle:function(t,o){n&&!o||r.setStyle(e,t,o)},setFormat:function(r,o){n&&!o||(""===o?t.formatter.remove(r,{value:null},e,!0):t.formatter.apply(r,{value:o},e))}}}},vf={normal:pf(!1),ifTruthy:pf(!0)},hf=function(n){return ae(n[0]).map((function(t){var e=ke.fromTable(t),r=ke.justCells(e),o=I(r,(function(t){return D(n,(function(n){return Mn(t.element,n)}))}))
return A(o,(function(n){return{element:n.element.dom,column:ke.getColumnAt(e,n.column).map((function(n){return n.element.dom}))}}))}))},bf=function(n,t,e,r){var o=1===t.length,u=qn(r,(function(n,t){return e[t]!==n}))
if(Un(u)>0&&t.length>=1){var i=ae(t[0])
hf(t).each((function(t){k(t,(function(t){var e=El(n,t.element,r.celltype),u=o?vf.normal(n,e):vf.ifTruthy(n,e);(function(n,t,e){n.setAttrib("scope",e.scope),n.setAttrib("class",e.class),n.setStyle("height",xu(e.height)),t.setStyle("width",xu(e.width))})(u,t.column.map((function(t){return o?vf.normal(n,t):vf.ifTruthy(n,t)})).getOr(u),r),Cc(n)&&function(n,t){n.setFormat("tablecellbackgroundcolor",t.backgroundcolor),n.setFormat("tablecellbordercolor",t.bordercolor),n.setFormat("tablecellborderstyle",t.borderstyle),n.setFormat("tablecellborderwidth",xu(t.borderwidth))}(u,r),o&&(rf(n,e),function(n,t){nf.each("top middle bottom".split(" "),(function(e){n.formatter.remove("valign"+e,{},t)}))}(n,e)),r.halign&&ef(n,e,r.halign),r.valign&&function(n,t,e){e&&n.formatter.apply("valign"+e,{},t)}(n,e,r.valign)}))}))
var c=Un(qn(u,(function(n,t){return"scope"!==t&&"celltype"!==t})))>0
i.each((function(t){return sc(n,t.dom,{structure:Gn(u,"celltype"),style:c})}))}},wf=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){bf(n,t,e,o),n.focus()}))},yf=function(n,t){var e=hf(t).map((function(t){return A(t,(function(t){return function(n,t,e,r){var o=n.dom,u=r.getOr(t),i=function(n,t){return o.getStyle(n,t)||o.getAttrib(n,t)}
return V({width:i(u,"width"),height:i(t,"height"),scope:o.getAttrib(t,"scope"),celltype:hu(t),class:o.getAttrib(t,"class",""),halign:sf(n,t),valign:mf(n,t)},e?cf(o,t):{})}(n,t.element,Cc(n),t.column)}))}))
return af(e.getOrDie())},Cf=function(n,t){var e=zl(Du(n),t)
if(0!==e.length){var o=yf(n,e),u={type:"tabpanel",tabs:[{title:"General",name:"general",items:gf(n)},lf("cell")]},i={type:"panel",items:[{type:"grid",columns:2,items:gf(n)}]}
n.windowManager.open({title:"Cell Properties",size:"normal",body:Cc(n)?u:i,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:o,onSubmit:r(wf,n,e,o)})}},xf=[{type:"listbox",name:"type",label:"Row type",items:[{text:"Header",value:"header"},{text:"Body",value:"body"},{text:"Footer",value:"footer"}]},{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height",type:"input"}],Sf=function(n){return xf.concat(function(n){var t=of(function(n){return n.getParam("table_row_class_list",[],"array")}(n))
return t.length>0?s.some({name:"class",type:"listbox",label:"Class",items:t}):s.none()}(n).toArray())},Tf=function(n,t,e,r){var o=1===t.length,u=qn(r,(function(n,t){return e[t]!==n}))
if(Un(u)>0){k(t,(function(t){r.type!==hu(t.parentNode)&&Nl(n,t,r.type)
var u=o?vf.normal(n,t):vf.ifTruthy(n,t);(function(n,t){n.setAttrib("class",t.class),n.setStyle("height",xu(t.height))})(u,r),xc(n)&&function(n,t){n.setStyle("background-color",t.backgroundcolor),n.setStyle("border-color",t.bordercolor),n.setStyle("border-style",t.borderstyle)}(u,r),r.align!==e.align&&(rf(n,t),ef(n,t,r.align))}))
var i=Gn(u,"type"),c=!i||Un(u)>1
ae(Bn.fromDom(t[0])).each((function(t){return sc(n,t.dom,{structure:i,style:c})}))}},Rf=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){Tf(n,t,e,o),n.focus()}))},Df=function(n){var t=_l(Du(n),Eu.selected)
if(0!==t.length){var e=A(t,(function(t){return function(n,t,e){var r=n.dom
return V({height:r.getStyle(t,"height")||r.getAttrib(t,"height"),class:r.getAttrib(t,"class",""),type:Bl(0,t),align:sf(n,t)},e?cf(r,t):{})}(n,t.dom,xc(n))})),o=af(e),u={type:"tabpanel",tabs:[{title:"General",name:"general",items:Sf(n)},lf("row")]},i={type:"panel",items:[{type:"grid",columns:2,items:Sf(n)}]}
n.windowManager.open({title:"Row Properties",size:"normal",body:xc(n)?u:i,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:o,onSubmit:r(Rf,n,A(t,(function(n){return n.dom})),o)})}},Of=tinymce.util.Tools.resolve("tinymce.Env"),Af=function(n,t,e){var r=e?[{type:"input",name:"cols",label:"Cols",inputMode:"numeric"},{type:"input",name:"rows",label:"Rows",inputMode:"numeric"}]:[],o=function(n){return n.getParam("table_appearance_options",!0,"boolean")}(n)?[{type:"input",name:"cellspacing",label:"Cell spacing",inputMode:"numeric"},{type:"input",name:"cellpadding",label:"Cell padding",inputMode:"numeric"},{type:"input",name:"border",label:"Border width"},{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[],u=t.length>0?[{type:"listbox",name:"class",label:"Class",items:t}]:[]
return r.concat([{type:"input",name:"width",label:"Width"},{type:"input",name:"height",label:"Height"}]).concat(o).concat([{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]}]).concat(u)},kf=function(n,t,e,r){if("TD"===t.tagName||"TH"===t.tagName)g(e)?n.setStyle(t,e,r):n.setStyle(t,e)
else if(t.children)for(var o=0;o<t.children.length;o++)kf(n,t.children[o],e,r)},If=function(n,t,e,r){var o,u=n.dom,i=r.getData(),c=qn(i,(function(n,t){return e[t]!==n}))
r.close(),""===i.class&&delete i.class,n.undoManager.transact((function(){if(!t){var e=parseInt(i.cols,10)||1,r=parseInt(i.rows,10)||1
t=$l(n,e,r,0,0)}if(Un(c)>0&&(function(n,t,e){var r=n.dom,o={},u={}
if(o.class=e.class,u.height=xu(e.height),r.getAttrib(t,"width")&&!Tc(n)?o.width=function(n){return n?n.replace(/px$/,""):""}(e.width):u.width=xu(e.width),Tc(n)?(u["border-width"]=xu(e.border),u["border-spacing"]=xu(e.cellspacing)):(o.border=e.border,o.cellpadding=e.cellpadding,o.cellspacing=e.cellspacing),Tc(n)&&t.children)for(var i=0;i<t.children.length;i++)kf(r,t.children[i],{"border-width":xu(e.border),padding:xu(e.cellpadding)}),Sc(n)&&kf(r,t.children[i],{"border-color":e.bordercolor})
Sc(n)&&(u["background-color"]=e.backgroundcolor,u["border-color"]=e.bordercolor,u["border-style"]=e.borderstyle),o.style=r.serializeStyle(V(V({},yc(n)),u)),r.setAttribs(t,V(V({},wc(n)),o))}(n,t,i),(o=u.select("caption",t)[0])&&!i.caption&&u.remove(o),!o&&i.caption&&((o=u.create("caption")).innerHTML=Of.ie?" ":'<br data-mce-bogus="1"/>',t.insertBefore(o,t.firstChild)),""===i.align?rf(n,t):ef(n,t,i.align)),n.focus(),n.addVisual(),Un(c)>0){var a=Gn(c,"caption"),l=!a||Un(c)>1
sc(n,t,{structure:a,style:l})}}))},Bf=function(n,t){var e,o=n.dom,u=function(n,t){var e,r,o,u,i=yc(n),c=wc(n),a=t?(e=n.dom,{borderstyle:$n(i,"border-style").getOr(""),bordercolor:uf(e)($n(i,"border-color").getOr("")),backgroundcolor:uf(e)($n(i,"background-color").getOr(""))}):{}
return V(V(V(V(V(V({},{height:"",width:"100%",cellspacing:"",cellpadding:"",caption:!1,class:"",align:"",border:""}),i),c),a),(u=i["border-width"],Tc(n)&&u?{border:u}:$n(c,"border").fold((function(){return{}}),(function(n){return{border:n}})))),(r=$n(i,"border-spacing").or($n(c,"cellspacing")).fold((function(){return{}}),(function(n){return{cellspacing:n}})),o=$n(i,"border-padding").or($n(c,"cellpadding")).fold((function(){return{}}),(function(n){return{cellpadding:n}})),V(V({},r),o)))}(n,Sc(n))
!1===t?(e=o.getParent(n.selection.getStart(),"table"))?u=function(n,t,e){var r=n.dom
return V({width:r.getStyle(t,"width")||r.getAttrib(t,"width"),height:r.getStyle(t,"height")||r.getAttrib(t,"height"),cellspacing:r.getStyle(t,"border-spacing")||r.getAttrib(t,"cellspacing"),cellpadding:r.getAttrib(t,"cellpadding")||tf(n.dom,t,"padding"),border:function(t,e){var r=Kt(Bn.fromDom(e),"border-width")
return Tc(n)&&r.isSome()?r.getOr(""):t.getAttrib(e,"border")||tf(n.dom,e,"border-width")||tf(n.dom,e,"border")}(r,t),caption:!!r.select("caption",t)[0],class:r.getAttrib(t,"class",""),align:sf(n,t)},e?cf(r,t):{})}(n,e,Sc(n)):Sc(n)&&(u.borderstyle="",u.bordercolor="",u.backgroundcolor=""):(u.cols="1",u.rows="1",Sc(n)&&(u.borderstyle="",u.bordercolor="",u.backgroundcolor=""))
var i=of(function(n){return n.getParam("table_class_list",[],"array")}(n))
i.length>0&&u.class&&(u.class=u.class.replace(/\s*mce\-item\-table\s*/g,""))
var c={type:"grid",columns:2,items:Af(n,i,t)},a=Sc(n)?{type:"tabpanel",tabs:[{title:"General",name:"general",items:[c]},lf("table")]}:{type:"panel",items:[c]}
n.windowManager.open({title:"Table Properties",size:"normal",body:a,onSubmit:r(If,n,e,u),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:u})},Pf=function(n){return Ll(Du(n))},Ef=function(n){return Wl(Du(n))},Mf=function(t,e,o,i,c){var a=Cu(t),l=function(n){return ae(n,a)},f=function(n){return function(e){t.selection.setRng(e.rng),t.focus(),o.clear(n),Su(n),sc(t,n.dom,e.effect)}},m=function(n){return Ef(t).each((function(t){l(t).each((function(e){var r=Nu(i,e,t)
n(e,r).each(f(e))}))}))},d=function(){return Ef(t).map((function(e){return l(e).bind((function(r){var o=Nu(i,r,e),u=gu(n,Bn.fromDom(t.getDoc()),s.none())
return Zl(r,o,u)}))}))},v=function(){return Ef(t).map((function(n){return l(n).bind((function(t){var e=Nu(i,t,n)
return Ql(t,e)}))}))},h=function(n,e){return e().each((function(e){var r=A(e,(function(n){return Ar(n)}))
Ef(t).each((function(e){return l(e).each((function(e){var o=pu(Bn.fromDom(t.getDoc())),u=function(n,t,e,r){return{selection:Ou(n),clipboard:e,generators:r}}(i,0,r,o)
n(e,u).each(f(e))}))}))}))}
_n({mceTableSplitCells:function(){return m(e.unmergeCells)},mceTableMergeCells:function(){return m(e.mergeCells)},mceTableInsertRowBefore:function(){return m(e.insertRowsBefore)},mceTableInsertRowAfter:function(){return m(e.insertRowsAfter)},mceTableInsertColBefore:function(){return m(e.insertColumnsBefore)},mceTableInsertColAfter:function(){return m(e.insertColumnsAfter)},mceTableDeleteCol:function(){return m(e.deleteColumn)},mceTableDeleteRow:function(){return m(e.deleteRow)},mceTableCutCol:function(n){return v().each((function(n){c.setColumns(n),m(e.deleteColumn)}))},mceTableCutRow:function(n){return d().each((function(n){c.setRows(n),m(e.deleteRow)}))},mceTableCopyCol:function(n){return v().each((function(n){return c.setColumns(n)}))},mceTableCopyRow:function(n){return d().each((function(n){return c.setRows(n)}))},mceTablePasteColBefore:function(n){return h(e.pasteColsBefore,c.getColumns)},mceTablePasteColAfter:function(n){return h(e.pasteColsAfter,c.getColumns)},mceTablePasteRowBefore:function(n){return h(e.pasteRowsBefore,c.getRows)},mceTablePasteRowAfter:function(n){return h(e.pasteRowsAfter,c.getRows)},mceTableDelete:function(){return Pf(t).each((function(n){ae(n,a).filter(u(a)).each((function(n){var e=Bn.fromText("")
if(Fe(n,e),Ke(n),t.dom.isEmpty(t.getBody()))t.setContent(""),t.selection.setCursorLocation()
else{var r=t.dom.createRng()
r.setStart(e.dom,0),r.setEnd(e.dom,0),t.selection.setRng(r),t.nodeChanged()}}))}))},mceTableSizingMode:function(n,e){return function(n){return Pf(t).each((function(e){Oc(t)||Dc(t)||Rc(t)||ae(e,a).each((function(e){"relative"!==n||mi(e)?"fixed"!==n||di(e)?"responsive"!==n||gi(e)||zc(e):Lc(t,e):Wc(t,e),Su(e),sc(t,e.dom,dc)}))}))}(e)}},(function(n,e){return t.addCommand(e,n)}))
var b=function(n,t){t.each((function(t){sc(n,t.dom,dc)}))}
_n({mceTableCellType:function(n,r){var o=ae(Du(t),a)
e.setTableCellType(t,r),b(t,o)},mceTableRowType:function(n,r){var o=ae(Du(t),a)
e.setTableRowType(t,r),b(t,o)}},(function(n,e){return t.addCommand(e,n)})),t.addCommand("mceTableColType",(function(n,t){return $n(t,"type").each((function(n){return m("th"===n?e.makeColumnsHeader:e.unmakeColumnsHeader)}))})),_n({mceTableProps:r(Bf,t,!1),mceTableRowProps:r(Df,t),mceTableCellProps:r(Cf,t,i)},(function(n,e){return t.addCommand(e,(function(){return n()}))})),t.addCommand("mceInsertTable",(function(n,e){p(e)&&Ln(e).length>0?Gl(t,e.rows,e.columns,e.options,"Invalid values for mceInsertTable - rows and columns values are required to insert a table."):Bf(t,!0)})),t.addCommand("mceTableApplyCellStyle",(function(n,e){var r=function(n){return"tablecell"+n.toLowerCase().replace("-","")}
if(p(e)){var o=zl(Du(t),i)
if(0!==o.length){var u=qn(e,(function(n,e){return t.formatter.has(r(e))&&g(n)}));(function(n){for(var t in n)if(zn.call(n,t))return!1
return!0})(u)||(_n(u,(function(n,e){k(o,(function(o){vf.normal(t,o.dom).setFormat(r(e),n)}))})),l(o[0]).each((function(n){return sc(t,n.dom,mc)})))}}}))},Nf=function(n,t,e){var r=Cu(n)
_n({mceTableRowType:function(){return t.getTableRowType(n)},mceTableCellType:function(){return t.getTableCellType(n)},mceTableColType:function(){return Wl(Du(n)).bind((function(n){return function(n){return ae(n,r)}(n).map((function(r){var o=Nu(e,r,n)
return t.getTableColType(r,o)}))})).getOr("")}},(function(t,e){return n.addQueryValueHandler(e,t)}))},jf={tablecellbackgroundcolor:{selector:"td,th",styles:{backgroundColor:"%value"},remove_similar:!0},tablecellbordercolor:{selector:"td,th",styles:{borderColor:"%value"},remove_similar:!0},tablecellborderstyle:{selector:"td,th",styles:{borderStyle:"%value"},remove_similar:!0},tablecellborderwidth:{selector:"td,th",styles:{borderWidth:"%value"},remove_similar:!0}},Wf=wr([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]),Lf=V(V({},Wf),{none:function(n){return void 0===n&&(n=void 0),Wf.none(n)}}),zf=function(n,t){return ae(n,t).bind((function(t){var e=ie(t)
return M(e,(function(t){return Mn(n,t)})).map((function(n){return{index:n,all:e}}))}))},_f=function(n,t,e,r){return{start:n,soffset:t,finish:e,foffset:r}},Ff=wr([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Hf={before:Ff.before,on:Ff.on,after:Ff.after,cata:function(n,t,e,r){return n.fold(t,e,r)},getStart:function(n){return n.fold(e,e,e)}},qf=wr([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),Vf={domRange:qf.domRange,relative:qf.relative,exact:qf.exact,exactFromRange:function(n){return qf.exact(n.start,n.soffset,n.finish,n.foffset)},getWin:function(n){var t,e=function(n){return n.match({domRange:function(n){return Bn.fromDom(n.startContainer)},relative:function(n,t){return Hf.getStart(n)},exact:function(n,t,e,r){return n}})}(n)
return t=e,Bn.fromDom(ft(t).dom.defaultView)},range:_f},Uf=function(n,t){return n.selectNodeContents(t.dom)},$f=function(n,t,e){var r,o=n.document.createRange()
return r=o,t.fold((function(n){r.setStartBefore(n.dom)}),(function(n,t){r.setStart(n.dom,t)}),(function(n){r.setStartAfter(n.dom)})),function(n,t){t.fold((function(t){n.setEndBefore(t.dom)}),(function(t,e){n.setEnd(t.dom,e)}),(function(t){n.setEndAfter(t.dom)}))}(o,e),o},Gf=function(n,t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},Kf=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom,width:n.width,height:n.height}},Xf=wr([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),Yf=function(n,t,e){return t(Bn.fromDom(e.startContainer),e.startOffset,Bn.fromDom(e.endContainer),e.endOffset)},Jf=function(n,e){return function(n,t){var e=t.ltr()
return e.collapsed?t.rtl().filter((function(n){return!1===n.collapsed})).map((function(n){return Xf.rtl(Bn.fromDom(n.endContainer),n.endOffset,Bn.fromDom(n.startContainer),n.startOffset)})).getOrThunk((function(){return Yf(0,Xf.ltr,e)})):Yf(0,Xf.ltr,e)}(0,function(n,e){return e.match({domRange:function(n){return{ltr:t(n),rtl:s.none}},relative:function(t,e){return{ltr:$((function(){return $f(n,t,e)})),rtl:$((function(){return s.some($f(n,e,t))}))}},exact:function(t,e,r,o){return{ltr:$((function(){return Gf(n,t,e,r,o)})),rtl:$((function(){return s.some(Gf(n,r,o,t,e))}))}}})}(n,e))},Qf=function(n,t){return Jf(n,t).match({ltr:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},rtl:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(r.dom,o),u.setEnd(t.dom,e),u}})},Zf=(Xf.ltr,Xf.rtl,function(n,t,e){return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}),ns=function(n,t,e,r,o){var u=function(e){var r=n.dom.createRange()
return r.setStart(t.dom,e),r.collapse(!0),r},i=Je(t).length,c=function(n,t,e,r,o){if(0===o)return 0
if(t===r)return o-1
for(var u=r,i=1;i<o;i++){var c=n(i),a=Math.abs(t-c.left)
if(e<=c.bottom){if(e<c.top||a>u)return i-1
u=a}}return 0}((function(n){return u(n).getBoundingClientRect()}),e,r,o.right,i)
return u(c)},ts=function(n,t,e,r){return ut(t)?function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getClientRects()
return q(u,(function(n){return Zf(n,e,r)?s.some(n):s.none()})).map((function(o){return ns(n,t,e,r,o)}))}(n,t,e,r):function(n,t,e,r){var o=n.dom.createRange(),u=pt(t)
return q(u,(function(t){return o.selectNode(t.dom),Zf(o.getBoundingClientRect(),e,r)?ts(n,t,e,r):s.none()}))}(n,t,e,r)},es=function(n,t){return t-n.left<n.right-t},rs=function(n,t,e){var r=n.dom.createRange()
return r.selectNode(t.dom),r.collapse(e),r},os=function(n,t,e){var r=n.dom.createRange()
r.selectNode(t.dom)
var o=r.getBoundingClientRect(),u=es(o,e)
return(true===u?ou:uu)(t).map((function(t){return rs(n,t,u)}))},us=function(n,t,e){var r=t.dom.getBoundingClientRect(),o=es(r,e)
return s.some(rs(n,t,o))},is=function(n,t,e){return s.from(n.dom.caretPositionFromPoint(t,e)).bind((function(t){if(null===t.offsetNode)return s.none()
var e=n.dom.createRange()
return e.setStart(t.offsetNode,t.offset),e.collapse(),s.some(e)}))},cs=function(n,t,e){return s.from(n.dom.caretRangeFromPoint(t,e))},as=function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect()
return function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect(),i=Math.max(u.left,Math.min(u.right,e)),c=Math.max(u.top,Math.min(u.bottom,r))
return ts(n,t,i,c)}(n,t,Math.max(u.left,Math.min(u.right,e)),Math.max(u.top,Math.min(u.bottom,r)))},ls=function(n,t,e){return Bn.fromPoint(n,t,e).bind((function(r){var o=function(){return function(n,t,e){return(0===pt(t).length?us:os)(n,t,e)}(n,r,t)}
return 0===pt(r).length?o():as(n,r,t,e).orThunk(o)}))},fs=document.caretPositionFromPoint?is:document.caretRangeFromPoint?cs:ls,ss=function(n,t){var e=nt(n)
return"input"===e?Hf.after(n):R(["br","img"],e)?0===t?Hf.before(n):Hf.after(n):Hf.on(n,t)},ms=function(n,t){var e=n.fold(Hf.before,ss,Hf.after),r=t.fold(Hf.before,ss,Hf.after)
return Vf.relative(e,r)},ds=function(n,t,e,r){var o=ss(n,t),u=ss(e,r)
return Vf.relative(o,u)},gs=function(n,t,e,r){var o=function(n,t,e,r){var o=lt(n).dom.createRange()
return o.setStart(n.dom,t),o.setEnd(e.dom,r),o}(n,t,e,r),u=Mn(n,e)&&t===r
return o.collapsed&&!u},ps=function(n){return s.from(n.getSelection())},vs=function(n,t){ps(n).each((function(n){n.removeAllRanges(),n.addRange(t)}))},hs=function(n,t,e,r,o){var u=Gf(n,t,e,r,o)
vs(n,u)},bs=function(n,t){return Jf(n,t).match({ltr:function(t,e,r,o){hs(n,t,e,r,o)},rtl:function(t,e,r,o){ps(n).each((function(u){if(u.setBaseAndExtent)u.setBaseAndExtent(t.dom,e,r.dom,o)
else if(u.extend)try{(function(n,t,e,r,o,u){t.collapse(e.dom,r),t.extend(o.dom,u)})(0,u,t,e,r,o)}catch(i){hs(n,r,o,t,e)}else hs(n,r,o,t,e)}))}})},ws=function(n,t,e,r,o){var u=ds(t,e,r,o)
bs(n,u)},ys=function(n,t,e){var r=ms(t,e)
bs(n,r)},Cs=function(n){var t=Vf.getWin(n).dom,e=function(n,e,r,o){return Gf(t,n,e,r,o)},r=function(n){return n.match({domRange:function(n){var t=Bn.fromDom(n.startContainer),e=Bn.fromDom(n.endContainer)
return ds(t,n.startOffset,e,n.endOffset)},relative:ms,exact:ds})}(n)
return Jf(t,r).match({ltr:e,rtl:e})},xs=function(n){if(n.rangeCount>0){var t=n.getRangeAt(0),e=n.getRangeAt(n.rangeCount-1)
return s.some(_f(Bn.fromDom(t.startContainer),t.startOffset,Bn.fromDom(e.endContainer),e.endOffset))}return s.none()},Ss=function(n){if(null===n.anchorNode||null===n.focusNode)return xs(n)
var t=Bn.fromDom(n.anchorNode),e=Bn.fromDom(n.focusNode)
return gs(t,n.anchorOffset,e,n.focusOffset)?s.some(_f(t,n.anchorOffset,e,n.focusOffset)):xs(n)},Ts=function(n,t){var e=function(n,t){var e=n.document.createRange()
return Uf(e,t),e}(n,t)
vs(n,e)},Rs=function(n){return function(n){return ps(n).filter((function(n){return n.rangeCount>0})).bind(Ss)}(n).map((function(n){return Vf.exact(n.start,n.soffset,n.finish,n.foffset)}))},Ds=function(n,t){return function(n){var t=n.getClientRects(),e=t.length>0?t[0]:n.getBoundingClientRect()
return e.width>0||e.height>0?s.some(e).map(Kf):s.none()}(Qf(n,t))},Os=function(n,t,e){return function(n,t,e){var r=Bn.fromDom(n.document)
return fs(r,t,e).map((function(n){return _f(Bn.fromDom(n.startContainer),n.startOffset,Bn.fromDom(n.endContainer),n.endOffset)}))}(n,t,e)},As=tinymce.util.Tools.resolve("tinymce.util.VK"),ks=function(n,t,e,r){return Ps(n,t,function(n,t){return zf(n,t).fold((function(){return Lf.none(n)}),(function(t){return t.index+1<t.all.length?Lf.middle(n,t.all[t.index+1]):Lf.last(n)}))}(e),r)},Is=function(n,t,e,r){return Ps(n,t,function(n,t){return zf(n,t).fold((function(){return Lf.none()}),(function(t){return t.index-1>=0?Lf.middle(n,t.all[t.index-1]):Lf.first(n)}))}(e),r)},Bs=function(n,t){var e=Vf.exact(t,0,t,0)
return Cs(e)},Ps=function(n,t,e,r){return e.fold(s.none,s.none,(function(n,t){return ou(t).map((function(n){return Bs(0,n)}))}),(function(e){return ae(e,t).bind((function(t){var o=Mu(e)
return n.undoManager.transact((function(){r.insertRowsAfter(t,o)})),function(n,t){var e=At(t,"tr")
return H(e).bind((function(n){return Et(n,"td,th").map((function(n){return Bs(0,n)}))}))}(0,t)}))}))},Es=["table","li","dl"],Ms=function(n,t){return{selection:n,kill:t}},Ns=function(n,t,e,r){return{start:Hf.on(n,t),finish:Hf.on(e,r)}},js=function(n,t){var e=Qf(n,t)
return _f(Bn.fromDom(e.startContainer),e.startOffset,Bn.fromDom(e.endContainer),e.endOffset)},Ws=Ns,Ls=function(n,t,e,r,o){return Mn(e,r)?s.none():dr(e,r,t).bind((function(t){var r=t.boxes.getOr([])
return r.length>0?(o(n,r,t.start,t.finish),s.some(Ms(s.some(Ws(e,0,e,tu(e))),!0))):s.none()}))},zs=function(n,t){return{item:n,mode:t}},_s=function(n,t,e,r){return void 0===r&&(r=Fs),n.property().parent(t).map((function(n){return zs(n,r)}))},Fs=function(n,t,e,r){return void 0===r&&(r=Hs),e.sibling(n,t).map((function(n){return zs(n,r)}))},Hs=function(n,t,e,r){void 0===r&&(r=Hs)
var o=n.property().children(t)
return e.first(o).map((function(n){return zs(n,r)}))},qs=[{current:_s,next:Fs,fallback:s.none()},{current:Fs,next:Hs,fallback:s.some(_s)},{current:Hs,next:Hs,fallback:s.some(Fs)}],Vs=function(n,t,e,r,o){return void 0===o&&(o=qs),E(o,(function(n){return n.current===e})).bind((function(e){return e.current(n,t,r,e.next).orThunk((function(){return e.fallback.bind((function(e){return Vs(n,t,e,r)}))}))}))},Us=function(){return{sibling:function(n,t){return n.query().prevSibling(t)},first:function(n){return n.length>0?s.some(n[n.length-1]):s.none()}}},$s=function(){return{sibling:function(n,t){return n.query().nextSibling(t)},first:function(n){return n.length>0?s.some(n[0]):s.none()}}},Gs=function(n,t,e,r,o,u){return Vs(n,t,r,o).bind((function(t){return u(t.item)?s.none():e(t.item)?s.some(t.item):Gs(n,t.item,e,t.mode,o,u)}))},Ks=function(n){return function(t){return 0===n.property().children(t).length}},Xs=function(n,t,e,r){return Gs(n,t,e,Fs,Us(),r)},Ys=function(n,t,e,r){return Gs(n,t,e,Fs,$s(),r)},Js=tr(),Qs=function(n,t){return function(n,t,e){return Xs(n,t,Ks(n),e)}(Js,n,t)},Zs=function(n,t){return function(n,t,e){return Ys(n,t,Ks(n),e)}(Js,n,t)},nm=wr([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}]),tm=function(n){return Mt(n,"tr")},em=V(V({},nm),{verify:function(n,t,e,r,o,u,i){return Mt(r,"td,th",i).bind((function(e){return Mt(t,"td,th",i).map((function(t){return Mn(e,t)?Mn(r,e)&&tu(e)===o?u(t):nm.none("in same cell"):sr(tm,[e,t]).fold((function(){return function(n,t,e){var r=n.getRect(t),o=n.getRect(e)
return o.right>r.left&&o.left<r.right}(n,t,e)?nm.success():u(t)}),(function(n){return u(t)}))}))})).getOr(nm.none("default"))},cata:function(n,t,e,r,o){return n.fold(t,e,r,o)}}),rm=function(n,t){return M(n,r(Mn,t))},om=function(n){return"br"===nt(n)},um=function(n,t,e){return t(n,e).bind((function(n){return ut(n)&&0===Je(n).trim().length?um(n,t,e):s.some(n)}))},im=function(n,t,e,r){return function(n,t){return vt(n,t).filter(om).orThunk((function(){return vt(n,t-1).filter(om)}))}(t,e).bind((function(t){return r.traverse(t).fold((function(){return um(t,r.gather,n).map(r.relative)}),(function(n){return function(n){return st(n).bind((function(t){var e=pt(t)
return rm(e,n).map((function(r){return function(n,t,e,r){return{parent:n,children:t,element:e,index:r}}(t,e,n,r)}))}))}(n).map((function(n){return Hf.on(n.parent,n.index)}))}))}))},cm=function(n,t,e,r){return(om(t)?function(n,t,e){return e.traverse(t).orThunk((function(){return um(t,e.gather,n)})).map(e.relative)}(n,t,r):im(n,t,e,r)).map((function(n){return{start:n,finish:n}}))},am=function(n,t){return{left:n.left,top:n.top+t,right:n.right,bottom:n.bottom+t}},lm=function(n,t){return{left:n.left,top:n.top-t,right:n.right,bottom:n.bottom-t}},fm=function(n,t,e){return{left:n.left+t,top:n.top+e,right:n.right+t,bottom:n.bottom+e}},sm=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},mm=function(n,t){return s.some(n.getRect(t))},dm=function(n,t,e){return ot(t)?mm(n,t).map(sm):ut(t)?function(n,t,e){return e>=0&&e<tu(t)?n.getRangedRect(t,e,t,e+1):e>0?n.getRangedRect(t,e-1,t,e):s.none()}(n,t,e).map(sm):s.none()},gm=function(n,t){return ot(t)?mm(n,t).map(sm):ut(t)?n.getRangedRect(t,0,t,tu(t)).map(sm):s.none()},pm=wr([{none:[]},{retry:["caret"]}]),vm=function(n,t,e){return(r=t,o=Ka,kt((function(n,t){return t(n)}),It,r,o,u)).fold(i,(function(t){return gm(n,t).exists((function(n){return function(n,t){return n.left<t.left||Math.abs(t.right-n.left)<1||n.left>t.right}(e,n)}))}))
var r,o,u},hm={point:function(n){return n.bottom},adjuster:function(n,t,e,r,o){var u=am(o,5)
return Math.abs(e.bottom-r.bottom)<1||e.top>o.bottom?pm.retry(u):e.top===o.bottom?pm.retry(am(o,1)):vm(n,t,o)?pm.retry(fm(u,5,0)):pm.none()},move:am,gather:Zs},bm=function(n,t,e,r,o){return 0===o?s.some(r):function(n,t,e){return n.elementFromPoint(t,e).filter((function(n){return"table"===nt(n)})).isSome()}(n,r.left,t.point(r))?function(n,t,e,r,o){return bm(n,t,e,t.move(r,5),o)}(n,t,e,r,o-1):n.situsFromPoint(r.left,t.point(r)).bind((function(u){return u.start.fold(s.none,(function(u){return gm(n,u).bind((function(i){return t.adjuster(n,u,i,e,r).fold(s.none,(function(r){return bm(n,t,e,r,o-1)}))})).orThunk((function(){return s.some(r)}))}),s.none)}))},wm=function(n,t,e){var r=n.move(e,5),o=bm(t,n,e,r,100).getOr(r)
return function(n,t,e){return n.point(t)>e.getInnerHeight()?s.some(n.point(t)-e.getInnerHeight()):n.point(t)<0?s.some(-n.point(t)):s.none()}(n,o,t).fold((function(){return t.situsFromPoint(o.left,n.point(o))}),(function(e){return t.scrollBy(0,e),t.situsFromPoint(o.left,n.point(o)-e)}))},ym={tryUp:r(wm,{point:function(n){return n.top},adjuster:function(n,t,e,r,o){var u=lm(o,5)
return Math.abs(e.top-r.top)<1||e.bottom<o.top?pm.retry(u):e.bottom===o.top?pm.retry(lm(o,1)):vm(n,t,o)?pm.retry(fm(u,5,0)):pm.none()},move:lm,gather:Qs}),tryDown:r(wm,hm),ieTryUp:function(n,t){return n.situsFromPoint(t.left,t.top-5)},ieTryDown:function(n,t){return n.situsFromPoint(t.left,t.bottom+5)},getJumpSize:t(5)},Cm=function(n,t,e){return n.getSelection().bind((function(r){return cm(t,r.finish,r.foffset,e).fold((function(){return s.some(Vc(r.finish,r.foffset))}),(function(o){var u=n.fromSitus(o)
return function(n){return em.cata(n,(function(n){return s.none()}),(function(){return s.none()}),(function(n){return s.some(Vc(n,0))}),(function(n){return s.some(Vc(n,tu(n)))}))}(em.verify(n,r.finish,r.foffset,u.finish,u.foffset,e.failure,t))}))}))},xm=function(n,t,e,r,o,u){return 0===u?s.none():Rm(n,t,e,r,o).bind((function(i){var c=n.fromSitus(i),a=em.verify(n,e,r,c.finish,c.foffset,o.failure,t)
return em.cata(a,(function(){return s.none()}),(function(){return s.some(i)}),(function(i){return Mn(e,i)&&0===r?Sm(n,e,r,lm,o):xm(n,t,i,0,o,u-1)}),(function(i){return Mn(e,i)&&r===tu(i)?Sm(n,e,r,am,o):xm(n,t,i,tu(i),o,u-1)}))}))},Sm=function(n,t,e,r,o){return dm(n,t,e).bind((function(t){return Tm(n,o,r(t,ym.getJumpSize()))}))},Tm=function(n,t,e){var r=kn().browser
return r.isChrome()||r.isSafari()||r.isFirefox()||r.isEdge()?t.otherRetry(n,e):r.isIE()?t.ieRetry(n,e):s.none()},Rm=function(n,t,e,r,o){return dm(n,e,r).bind((function(t){return Tm(n,o,t)}))},Dm=function(n,t){return It(n,(function(n){return st(n).exists((function(n){return Mn(n,t)}))}),e).isSome()
var e},Om=function(n,t,e,r,o){return Mt(r,"td,th",t).bind((function(r){return Mt(r,"table",t).bind((function(u){return Dm(o,u)?function(n,t,e){return Cm(n,t,e).bind((function(r){return xm(n,t,r.element,r.offset,e,20).map(n.fromSitus)}))}(n,t,e).bind((function(n){return Mt(n.finish,"td,th",t).map((function(t){return{start:r,finish:t,range:n}}))})):s.none()}))}))},Am=function(n,t,e,r,o,u){return kn().browser.isIE()?s.none():u(r,t).orThunk((function(){return Om(n,t,e,r,o).map((function(n){var t=n.range
return Ms(s.some(Ws(t.start,t.soffset,t.finish,t.foffset)),!0)}))}))},km=function(n,t){return Mt(n,"tr",t).bind((function(n){return Mt(n,"table",t).bind((function(e){var r=At(e,"tr")
return Mn(n,r[0])?function(n,t,e){return Xs(Js,n,t,e)}(e,(function(n){return uu(n).isSome()}),t).map((function(n){var t=tu(n)
return Ms(s.some(Ws(n,t,n,t)),!0)})):s.none()}))}))},Im=function(n,t){return Mt(n,"tr",t).bind((function(n){return Mt(n,"table",t).bind((function(e){var r=At(e,"tr")
return Mn(n,r[r.length-1])?function(n,t,e){return Ys(Js,n,t,e)}(e,(function(n){return ou(n).isSome()}),t).map((function(n){return Ms(s.some(Ws(n,0,n,0)),!0)})):s.none()}))}))},Bm=function(n,t,e,r,o,u,i){return Om(n,e,r,o,u).bind((function(n){return Ls(t,e,n.start,n.finish,i)}))},Pm=function(n,t){return Mt(n,"td,th",t)},Em=function(n,t,e,r){var o,u=(o=$o(s.none()),{clear:function(){return o.set(s.none())},set:function(n){return o.set(s.some(n))},isSet:function(){return o.get().isSome()},on:function(n){return o.get().each(n)}}),i=u.clear,c=function(o){u.on((function(u){r.clearBeforeUpdate(t),Pm(o.target,e).each((function(o){dr(u,o,e).each((function(e){var i=e.boxes.getOr([]);(i.length>1||1===i.length&&!Mn(u,o))&&(r.selectRange(t,i,e.start,e.finish),n.selectContents(o))}))}))}))}
return{clearstate:i,mousedown:function(n){r.clear(t),Pm(n.target,e).each(u.set)},mouseover:function(n){c(n)},mouseup:function(n){c(n),i()}}},Mm={traverse:gt,gather:Zs,relative:Hf.before,otherRetry:ym.tryDown,ieRetry:ym.ieTryDown,failure:em.failedDown},Nm={traverse:dt,gather:Qs,relative:Hf.before,otherRetry:ym.tryUp,ieRetry:ym.ieTryUp,failure:em.failedUp},jm=function(n){return function(t){return t===n}},Wm=jm(38),Lm=jm(40),zm=function(n){return n>=37&&n<=40},_m={isBackward:jm(37),isForward:jm(39)},Fm={isBackward:jm(39),isForward:jm(37)},Hm=function(n){return{elementFromPoint:function(t,e){return Bn.fromPoint(Bn.fromDom(n.document),t,e)},getRect:function(n){return n.dom.getBoundingClientRect()},getRangedRect:function(t,e,r,o){var u=Vf.exact(t,e,r,o)
return Ds(n,u)},getSelection:function(){return Rs(n).map((function(t){return js(n,t)}))},fromSitus:function(t){var e=Vf.relative(t.start,t.finish)
return js(n,e)},situsFromPoint:function(t,e){return Os(n,t,e).map((function(n){return Ns(n.start,n.soffset,n.finish,n.foffset)}))},clearSelection:function(){(function(n){ps(n).each((function(n){return n.removeAllRanges()}))})(n)},collapseSelection:function(t){void 0===t&&(t=!1),Rs(n).each((function(e){return e.fold((function(n){return n.collapse(t)}),(function(e,r){var o=t?e:r
ys(n,o,o)}),(function(e,r,o,u){var i=t?e:o,c=t?r:u
ws(n,i,c,i,c)}))}))},setSelection:function(t){ws(n,t.start,t.soffset,t.finish,t.foffset)},setRelativeSelection:function(t,e){ys(n,t,e)},selectContents:function(t){Ts(n,t)},getInnerHeight:function(){return n.innerHeight},getScrollY:function(){var t,e,r,o
return(t=Bn.fromDom(n.document),e=void 0!==t?t.dom:document,r=e.body.scrollLeft||e.documentElement.scrollLeft,o=e.body.scrollTop||e.documentElement.scrollTop,$r(r,o)).top},scrollBy:function(t,e){(function(n,t,e){var r=(void 0!==e?e.dom:document).defaultView
r&&r.scrollBy(n,t)})(t,e,Bn.fromDom(n.document))}}},qm=function(n,t){return{rows:n,cols:t}},Vm=function(n,t,e,o){var u=Hm(n),i=function(){return o.clear(t),s.none()}
return{keydown:function(n,c,a,l,f,m){var d=n.raw,g=d.which,p=!0===d.shiftKey
return gr(t,o.selectedSelector).fold((function(){return Lm(g)&&p?r(Bm,u,t,e,Mm,l,c,o.selectRange):Wm(g)&&p?r(Bm,u,t,e,Nm,l,c,o.selectRange):Lm(g)?r(Am,u,e,Mm,l,c,Im):Wm(g)?r(Am,u,e,Nm,l,c,km):s.none}),(function(n){var e=function(e){return function(){return q(e,(function(e){return function(n,t,e,r,o){return vr(r,n,t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){return o.clearBeforeUpdate(e),o.selectRange(e,n.boxes,n.start,n.finish),n.boxes}))}(e.rows,e.cols,t,n,o)})).fold((function(){return pr(t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){var e=Lm(g)||m.isForward(g)?Hf.after:Hf.before
return u.setRelativeSelection(Hf.on(n.first,0),e(n.table)),o.clear(t),Ms(s.none(),!0)}))}),(function(n){return s.some(Ms(s.none(),!0))}))}}
return Lm(g)&&p?e([qm(1,0)]):Wm(g)&&p?e([qm(-1,0)]):m.isBackward(g)&&p?e([qm(0,-1),qm(-1,0)]):m.isForward(g)&&p?e([qm(0,1),qm(1,0)]):zm(g)&&!1===p?i:s.none}))()},keyup:function(n,r,u,i,c){return gr(t,o.selectedSelector).fold((function(){var a=n.raw,l=a.which
return!1===(!0===a.shiftKey)?s.none():zm(l)?function(n,t,e,r,o,u,i){return Mn(e,o)&&r===u?s.none():Mt(e,"td,th",t).bind((function(e){return Mt(o,"td,th",t).bind((function(r){return Ls(n,t,e,r,i)}))}))}(t,e,r,u,i,c,o.selectRange):s.none()}),s.none)}}},Um=function(n,t,e){var r=function(t){_t(t,n.selected),_t(t,n.firstSelected),_t(t,n.lastSelected)},o=function(t){jt(t,n.selected,"1")},u=function(n){i(n),e()},i=function(t){var e=At(t,n.selectedSelector)
k(e,r)}
return{clearBeforeUpdate:i,clear:u,selectRange:function(e,r,i,c){u(e),k(r,o),jt(i,n.firstSelected,"1"),jt(c,n.lastSelected,"1"),t(r,i,c)},selectedSelector:n.selectedSelector,firstSelectedSelector:n.firstSelectedSelector,lastSelectedSelector:n.lastSelectedSelector}},$m=function(n,t,e){var r=ke.fromTable(n)
return sa(r,t).map((function(n){var t=ra(r,e,!1)
return{upOrLeftCells:function(n,t,e){var r=n.slice(0,t[t.length-1].row+1),o=ua(r,e)
return j(o,(function(n){var e=n.cells.slice(0,t[t.length-1].column+1)
return A(e,(function(n){return n.element}))}))}(t,n,e),downOrRightCells:function(n,t,e){var r=n.slice(t[0].row+t[0].rowspan-1,n.length),o=ua(r,e)
return j(o,(function(n){var e=n.cells.slice(t[0].column+t[0].colspan-1,n.cells.length)
return A(e,(function(n){return n.element}))}))}(t,n,e)}}))},Gm=function(n){return!1===zi(Bn.fromDom(n.target),"ephox-snooker-resizer-bar")}
function Km(t,e,r){var o=Um(Eu,(function(e,o,u){r.targets().each((function(r){ae(o).each((function(i){var c=Ec(t),a=gu(n,Bn.fromDom(t.getDoc()),c),l=$m(i,r,a);(function(n,t,e,r,o){n.fire("TableSelectionChange",{cells:t,start:e,finish:r,otherCells:o})})(t,e,o,u,l)}))}))}),(function(){return function(n){n.fire("TableSelectionClear")}(t)}))
return t.on("init",(function(r){var u=t.getWin(),i=bu(t),c=Cu(t),a=function(n,t,e,r){var o=Hm(n),u=Em(o,t,e,r)
return{clearstate:u.clearstate,mousedown:u.mousedown,mouseover:u.mouseover,mouseup:u.mouseup}}(u,i,c,o),l=Vm(u,i,c,o),f=function(n,t,e,r){var o=Hm(n)
return function(n,u){r.clearBeforeUpdate(t),dr(n,u,e).each((function(n){var e=n.boxes.getOr([])
r.selectRange(t,e,n.start,n.finish),o.selectContents(u),o.collapseSelection()}))}}(u,i,c,o)
t.on("TableSelectorChange",(function(n){return f(n.start,n.finish)}))
var s,m,d=function(n,e){(function(n){return!0===n.raw.shiftKey})(n)&&(e.kill&&n.kill(),e.selection.each((function(n){var e=Vf.relative(n.start,n.finish),r=Qf(u,e)
t.selection.setRng(r)})))},g=function(n){return 0===n.button},p=(s=$o(Bn.fromDom(i)),m=$o(0),{touchEnd:function(n){var t=Bn.fromDom(n.target)
if("td"===nt(t)||"th"===nt(t)){var e=s.get(),r=m.get()
Mn(e,t)&&n.timeStamp-r<300&&(n.preventDefault(),f(t,t))}s.set(t),m.set(n.timeStamp)}})
t.on("dragstart",(function(n){a.clearstate()})),t.on("mousedown",(function(n){g(n)&&Gm(n)&&a.mousedown(Mi(n))})),t.on("mouseover",(function(n){var t;(void 0===(t=n).buttons||Of.browser.isEdge()&&0===t.buttons||0!=(1&t.buttons))&&Gm(n)&&a.mouseover(Mi(n))})),t.on("mouseup",(function(n){g(n)&&Gm(n)&&a.mouseup(Mi(n))})),t.on("touchend",p.touchEnd),t.on("keyup",(function(n){var e=Mi(n)
if(e.raw.shiftKey&&zm(e.raw.which)){var r=t.selection.getRng(),o=Bn.fromDom(r.startContainer),u=Bn.fromDom(r.endContainer)
l.keyup(e,o,r.startOffset,u,r.endOffset).each((function(n){d(e,n)}))}})),t.on("keydown",(function(n){var r=Mi(n)
e().each((function(n){return n.hideBars()}))
var o=t.selection.getRng(),u=Bn.fromDom(o.startContainer),i=Bn.fromDom(o.endContainer),c=_r(_m,Fm)(Bn.fromDom(t.selection.getStart()))
l.keydown(r,u,o.startOffset,i,o.endOffset,c).each((function(n){d(r,n)})),e().each((function(n){return n.showBars()}))})),t.on("NodeChange",(function(){var e=t.selection,r=Bn.fromDom(e.getStart()),u=Bn.fromDom(e.getEnd())
sr(ae,[r,u]).fold((function(){return o.clear(i)}),n)}))})),{clear:o.clear}}var Xm=function(n){var t=function(n,t,e){return{get:function(){return hr(n(),e).fold((function(){return t().map(Tr).getOrThunk(xr)}),(function(n){return Sr(n)}))}}}((function(){return bu(n)}),(function(){return Ll(Du(n))}),Eu.selectedSelector),e=function(n,t){var e=$o(s.none()),r=$o([]),o=s.none(),u=at("caption"),i=function(n){return o.forall((function(t){return!t[n]}))},c=function(){return Ll(Du(n)).bind((function(n){return ae(n).map((function(e){return u(n)?Mu(n):Nu(t,e,n)}))}))},a=function(n){return ae(n.element).map((function(t){var e=ke.fromTable(t),r=sa(e,n).getOr([]),o=P(r,(function(n,t){return t.isLocked&&(n.onAny=!0,0===t.column?n.onFirst=!0:t.column+t.colspan>=e.grid.columns&&(n.onLast=!0)),n}),{onAny:!1,onFirst:!1,onLast:!1})
return{mergeable:pa(e,n).isSome(),unmergeable:va(e,n).isSome(),locked:o}}))},l=function(){e.set($(c)()),o=e.get().bind(a),k(r.get(),(function(n){return n()}))},f=function(n,t){var o=function(){return e.get().fold((function(){n.setDisabled(!0)}),(function(e){n.setDisabled(t(e))}))}
return o(),r.set(r.get().concat([o])),function(){r.set(I(r.get(),(function(n){return n!==o})))}},m=function(n){return o.exists((function(t){return t.locked[n]}))}
return n.on("NodeChange ExecCommand TableSelectorChange",l),{onSetupTable:function(n){return f(n,(function(n){return!1}))},onSetupCellOrRow:function(n){return f(n,(function(n){return u(n.element)}))},onSetupColumn:function(n){return function(t){return f(t,(function(t){return u(t.element)||m(n)}))}},onSetupPasteable:function(n){return function(t){return f(t,(function(t){return u(t.element)||n().isNone()}))}},onSetupPasteableColumn:function(n,t){return function(e){return f(e,(function(e){return u(e.element)||n().isNone()||m(t)}))}},onSetupMergeable:function(n){return f(n,(function(n){return i("mergeable")}))},onSetupUnmergeable:function(n){return f(n,(function(n){return i("unmergeable")}))},resetTargets:l,targets:function(){return e.get()}}}(n,t),r=qc(n),o=Km(n,r.lazyResize,e),u=Fl(n,r.lazyWire,t),i=function(){var n=$o(s.none()),t=$o(s.none()),e=function(n){n.set(s.none())}
return{getRows:n.get,setRows:function(r){n.set(r),e(t)},clearRows:function(){return e(n)},getColumns:t.get,setColumns:function(r){t.set(r),e(n)},clearColumns:function(){return e(t)}}}()
return Mf(n,u,o,t,i),Nf(n,u,t),ju(n,t,u,o),function(n,t,e){var r=function(t){return function(){return n.execCommand(t)}},o=function(t){n.execCommand("mceInsertTable",!1,{rows:t.numRows,columns:t.numColumns})},u={text:"Table properties",onSetup:t.onSetupTable,onAction:r("mceTableProps")},i={text:"Delete table",icon:"table-delete-table",onSetup:t.onSetupTable,onAction:r("mceTableDelete")}
n.ui.registry.addMenuItem("tableinsertrowbefore",{text:"Insert row before",icon:"table-insert-row-above",onAction:r("mceTableInsertRowBefore"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertrowafter",{text:"Insert row after",icon:"table-insert-row-after",onAction:r("mceTableInsertRowAfter"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeleterow",{text:"Delete row",icon:"table-delete-row",onAction:r("mceTableDeleteRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablerowprops",{text:"Row properties",icon:"table-row-properties",onAction:r("mceTableRowProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutrow",{text:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopyrow",{text:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepasterowbefore",{text:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tablepasterowafter",{text:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tableinsertcolumnbefore",{text:"Insert column before",icon:"table-insert-column-before",onAction:r("mceTableInsertColBefore"),onSetup:t.onSetupColumn("onFirst")}),n.ui.registry.addMenuItem("tableinsertcolumnafter",{text:"Insert column after",icon:"table-insert-column-after",onAction:r("mceTableInsertColAfter"),onSetup:t.onSetupColumn("onLast")}),n.ui.registry.addMenuItem("tabledeletecolumn",{text:"Delete column",icon:"table-delete-column",onAction:r("mceTableDeleteCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablecutcolumn",{text:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablecopycolumn",{text:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablepastecolumnbefore",{text:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteableColumn(e.getColumns,"onFirst")}),n.ui.registry.addMenuItem("tablepastecolumnafter",{text:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteableColumn(e.getColumns,"onLast")}),n.ui.registry.addMenuItem("tablecellprops",{text:"Cell properties",icon:"table-cell-properties",onAction:r("mceTableCellProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablemergecells",{text:"Merge cells",icon:"table-merge-cells",onAction:r("mceTableMergeCells"),onSetup:t.onSetupMergeable}),n.ui.registry.addMenuItem("tablesplitcells",{text:"Split cell",icon:"table-split-cells",onAction:r("mceTableSplitCells"),onSetup:t.onSetupUnmergeable}),!1===function(n){return n.getParam("table_grid",!0,"boolean")}(n)?n.ui.registry.addMenuItem("inserttable",{text:"Table",icon:"table",onAction:r("mceInsertTable")}):n.ui.registry.addNestedMenuItem("inserttable",{text:"Table",icon:"table",getSubmenuItems:function(){return[{type:"fancymenuitem",fancytype:"inserttable",onAction:o}]}}),n.ui.registry.addMenuItem("inserttabledialog",{text:"Insert table",icon:"table",onAction:r("mceInsertTable")}),n.ui.registry.addMenuItem("tableprops",u),n.ui.registry.addMenuItem("deletetable",i),n.ui.registry.addNestedMenuItem("row",{type:"nestedmenuitem",text:"Row",getSubmenuItems:function(){return"tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter"}}),n.ui.registry.addNestedMenuItem("column",{type:"nestedmenuitem",text:"Column",getSubmenuItems:function(){return"tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter"}}),n.ui.registry.addNestedMenuItem("cell",{type:"nestedmenuitem",text:"Cell",getSubmenuItems:function(){return"tablecellprops tablemergecells tablesplitcells"}}),n.ui.registry.addContextMenu("table",{update:function(){return t.resetTargets(),t.targets().fold((function(){return""}),(function(n){return"caption"===nt(n.element)?"tableprops deletetable":"cell row column | advtablesort | tableprops deletetable"}))}})}(n,e,i),function(n,t,e){n.ui.registry.addMenuButton("table",{tooltip:"Table",icon:"table",fetch:function(n){return n("inserttable | cell row column | advtablesort | tableprops deletetable")}})
var r=function(t){return function(){return n.execCommand(t)}}
n.ui.registry.addButton("tableprops",{tooltip:"Table properties",onAction:r("mceTableProps"),icon:"table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tabledelete",{tooltip:"Delete table",onAction:r("mceTableDelete"),icon:"table-delete-table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tablecellprops",{tooltip:"Cell properties",onAction:r("mceTableCellProps"),icon:"table-cell-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablemergecells",{tooltip:"Merge cells",onAction:r("mceTableMergeCells"),icon:"table-merge-cells",onSetup:t.onSetupMergeable}),n.ui.registry.addButton("tablesplitcells",{tooltip:"Split cell",onAction:r("mceTableSplitCells"),icon:"table-split-cells",onSetup:t.onSetupUnmergeable}),n.ui.registry.addButton("tableinsertrowbefore",{tooltip:"Insert row before",onAction:r("mceTableInsertRowBefore"),icon:"table-insert-row-above",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertrowafter",{tooltip:"Insert row after",onAction:r("mceTableInsertRowAfter"),icon:"table-insert-row-after",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tabledeleterow",{tooltip:"Delete row",onAction:r("mceTableDeleteRow"),icon:"table-delete-row",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablerowprops",{tooltip:"Row properties",onAction:r("mceTableRowProps"),icon:"table-row-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolbefore",{tooltip:"Insert column before",onAction:r("mceTableInsertColBefore"),icon:"table-insert-column-before",onSetup:t.onSetupColumn("onFirst")}),n.ui.registry.addButton("tableinsertcolafter",{tooltip:"Insert column after",onAction:r("mceTableInsertColAfter"),icon:"table-insert-column-after",onSetup:t.onSetupColumn("onLast")}),n.ui.registry.addButton("tabledeletecol",{tooltip:"Delete column",onAction:r("mceTableDeleteCol"),icon:"table-delete-column",onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addButton("tablecutrow",{tooltip:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecopyrow",{tooltip:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablepasterowbefore",{tooltip:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablepasterowafter",{tooltip:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablecutcol",{tooltip:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addButton("tablecopycol",{tooltip:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupColumn("onAny")}),n.ui.registry.addButton("tablepastecolbefore",{tooltip:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteableColumn(e.getColumns,"onFirst")}),n.ui.registry.addButton("tablepastecolafter",{tooltip:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteableColumn(e.getColumns,"onLast")}),n.ui.registry.addButton("tableinsertdialog",{tooltip:"Insert table",onAction:r("mceInsertTable"),icon:"table"})}(n,e,i),function(n){var t=function(n){return n.getParam("table_toolbar","tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol")}(n)
t.length>0&&n.ui.registry.addContextToolbar("table",{predicate:function(t){return n.dom.is(t,"table")&&n.getBody().contains(t)},items:t,scope:"node",position:"node"})}(n),n.on("PreInit",(function(){n.serializer.addTempAttr(Eu.firstSelected),n.serializer.addTempAttr(Eu.lastSelected),function(n){n.formatter.register(jf)}(n)})),function(n){return n.getParam("table_tab_navigation",!0,"boolean")}(n)&&n.on("keydown",(function(t){(function(n,t,e){if(n.keyCode===As.TAB){var r=bu(t),o=function(n){var t=nt(n)
return Mn(n,r)||R(Es,t)},u=t.selection.getRng()
if(u.collapsed){var i=Bn.fromDom(u.startContainer)
ue(i,o).each((function(r){n.preventDefault(),(n.shiftKey?Is:ks)(t,o,r,e).each((function(n){t.selection.setRng(n)}))}))}}})(t,n,u)})),n.on("remove",(function(){r.destroy()})),function(n,t,e,r){return{insertTable:Yl(n),setClipboardRows:Xl(t.setRows),getClipboardRows:Kl(t.getRows),setClipboardCols:Xl(t.setColumns),getClipboardCols:Kl(t.getColumns),resizeHandler:e,selectionTargets:r}}(n,i,r,e)}
Rr.add("table",Xm)})()

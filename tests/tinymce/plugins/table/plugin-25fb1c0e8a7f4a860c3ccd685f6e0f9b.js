(function(){"use strict"
var n=function(n){return function(t){return r=typeof(e=t),(null===e?"null":"object"===r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===n
var e,r}},t=function(n){return function(t){return typeof t===n}},e=function(n){return function(t){return n===t}},r=n("string"),o=n("object"),u=n("array"),i=e(null),c=t("boolean"),a=e(void 0),l=function(n){return!function(n){return null==n}(n)},f=t("function"),s=t("number"),m=function(){},d=function(n){return function(){return n}},g=function(n){return n},p=function(n,t){return n===t}
function v(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e]
return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o=t.concat(e)
return n.apply(null,o)}}var b,h,w=function(n){return function(t){return!n(t)}},y=d(!1),C=d(!0),S=function(){return T},T={fold:function(n,t){return n()},isSome:y,isNone:C,getOr:h=g,getOrThunk:b=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:d(null),getOrUndefined:d(void 0),or:h,orThunk:b,map:S,each:m,bind:S,exists:y,forall:C,filter:function(){return S()},toArray:function(){return[]},toString:d("none()")},x=function(n){var t=d(n),e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},isSome:C,isNone:y,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return x(t(n))},each:function(t){t(n)},bind:r,exists:r,forall:r,filter:function(t){return t(n)?o:T},toArray:function(){return[n]},toString:function(){return"some("+n+")"}}
return o},R={some:x,none:S,from:function(n){return null==n?T:x(n)}},D=Array.prototype.slice,O=Array.prototype.indexOf,A=Array.prototype.push,k=function(n,t){return e=n,r=t,O.call(e,r)>-1
var e,r},I=function(n,t){for(var e=0,r=n.length;e<r;e++){if(t(n[e],e))return!0}return!1},B=function(n,t){for(var e=[],r=0;r<n;r++)e.push(t(r))
return e},M=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var u=n[o]
r[o]=t(u,o)}return r},E=function(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e)}},P=function(n,t){for(var e=[],r=[],o=0,u=n.length;o<u;o++){var i=n[o];(t(i,o)?e:r).push(i)}return{pass:e,fail:r}},N=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var u=n[r]
t(u,r)&&e.push(u)}return e},z=function(n,t,e){return function(n,t){for(var e=n.length-1;e>=0;e--)t(n[e],e)}(n,(function(n,r){e=t(e,n,r)})),e},L=function(n,t,e){return E(n,(function(n,r){e=t(e,n,r)})),e},_=function(n,t){return function(n,t,e){for(var r=0,o=n.length;r<o;r++){var u=n[r]
if(t(u,r))return R.some(u)
if(e(u,r))break}return R.none()}(n,t,y)},W=function(n,t){for(var e=0,r=n.length;e<r;e++){if(t(n[e],e))return R.some(e)}return R.none()},j=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!u(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n)
A.apply(t,n[e])}return t},F=function(n,t){return j(M(n,t))},H=function(n,t){for(var e=0,r=n.length;e<r;++e){if(!0!==t(n[e],e))return!1}return!0},V=function(n,t){for(var e={},r=0,o=n.length;r<o;r++){var u=n[r]
e[String(u)]=t(u,r)}return e},q=function(n){return[n]},U=function(n,t){return t>=0&&t<n.length?R.some(n[t]):R.none()},G=function(n){return U(n,0)},$=function(n){return U(n,n.length-1)},K=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e)
if(r.isSome())return r}return R.none()},X=function(){return(X=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])
return n}).apply(this,arguments)}
function Y(n,t,e){if(e||2===arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o])
return n.concat(r||Array.prototype.slice.call(t))}var J=function(n){var t,e=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return e||(e=!0,t=n.apply(null,r)),t}},Q=function(){return Z(0,0)},Z=function(n,t){return{major:n,minor:t}},nn={nu:Z,detect:function(n,t){var e=String(t).toLowerCase()
return 0===n.length?Q():function(n,t){var e=function(n,t){for(var e=0;e<n.length;e++){var r=n[e]
if(r.test(t))return r}}(n,t)
if(!e)return{major:0,minor:0}
var r=function(n){return Number(t.replace(e,"$"+n))}
return Z(r(1),r(2))}(n,e)},unknown:Q},tn=function(n,t){var e=String(t).toLowerCase()
return _(n,(function(n){return n.search(e)}))},en=function(n,t,e){return""===t||n.length>=t.length&&n.substr(e,e+t.length)===t},rn=function(n,t){return-1!==n.indexOf(t)},on=function(n,t){return en(n,t,0)},un=function(n,t){return en(n,t,n.length-t.length)},cn=function(n){return function(t){return t.replace(n,"")}}(/^\s+|\s+$/g),an=function(n){return n.length>0},ln=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,fn=function(n){return function(t){return rn(t,n)}},sn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return rn(n,"edge/")&&rn(n,"chrome")&&rn(n,"safari")&&rn(n,"applewebkit")}},{name:"Chrome",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,ln],search:function(n){return rn(n,"chrome")&&!rn(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return rn(n,"msie")||rn(n,"trident")}},{name:"Opera",versionRegexes:[ln,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:fn("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:fn("firefox")},{name:"Safari",versionRegexes:[ln,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(rn(n,"safari")||rn(n,"mobile/"))&&rn(n,"applewebkit")}}],mn=[{name:"Windows",search:fn("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return rn(n,"iphone")||rn(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:fn("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:fn("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:fn("linux"),versionRegexes:[]},{name:"Solaris",search:fn("sunos"),versionRegexes:[]},{name:"FreeBSD",search:fn("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:fn("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],dn={browsers:d(sn),oses:d(mn)},gn="Edge",pn="Chrome",vn="Opera",bn="Firefox",hn="Safari",wn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isEdge:r(gn),isChrome:r(pn),isIE:r("IE"),isOpera:r(vn),isFirefox:r(bn),isSafari:r(hn)}},yn={unknown:function(){return wn({current:void 0,version:nn.unknown()})},nu:wn,edge:d(gn),chrome:d(pn),ie:d("IE"),opera:d(vn),firefox:d(bn),safari:d(hn)},Cn="Windows",Sn="Android",Tn="Linux",xn="Solaris",Rn="FreeBSD",Dn="ChromeOS",On=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isWindows:r(Cn),isiOS:r("iOS"),isAndroid:r(Sn),isOSX:r("OSX"),isLinux:r(Tn),isSolaris:r(xn),isFreeBSD:r(Rn),isChromeOS:r(Dn)}},An={unknown:function(){return On({current:void 0,version:nn.unknown()})},nu:On,windows:d(Cn),ios:d("iOS"),android:d(Sn),linux:d(Tn),osx:d("OSX"),solaris:d(xn),freebsd:d(Rn),chromeos:d(Dn)},kn=function(n,t,e){var r=dn.browsers(),o=dn.oses(),u=t.bind((function(n){return function(n,t){return K(t.brands,(function(t){var e=t.brand.toLowerCase()
return _(n,(function(n){var t
return e===(null===(t=n.brand)||void 0===t?void 0:t.toLowerCase())})).map((function(n){return{current:n.name,version:nn.nu(parseInt(t.version,10),0)}}))}))}(r,n)})).orThunk((function(){return function(n,t){return tn(n,t).map((function(n){var e=nn.detect(n.versionRegexes,t)
return{current:n.name,version:e}}))}(r,n)})).fold(yn.unknown,yn.nu),i=function(n,t){return tn(n,t).map((function(n){var e=nn.detect(n.versionRegexes,t)
return{current:n.name,version:e}}))}(o,n).fold(An.unknown,An.nu),c=function(n,t,e,r){var o=n.isiOS()&&!0===/ipad/i.test(e),u=n.isiOS()&&!o,i=n.isiOS()||n.isAndroid(),c=i||r("(pointer:coarse)"),a=o||!u&&i&&r("(min-device-width:768px)"),l=u||i&&!a,f=t.isSafari()&&n.isiOS()&&!1===/safari/i.test(e),s=!l&&!a&&!f
return{isiPad:d(o),isiPhone:d(u),isTablet:d(a),isPhone:d(l),isTouch:d(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:d(f),isDesktop:d(s)}}(i,u,n,e)
return{browser:u,os:i,deviceType:c}},In=function(n){return window.matchMedia(n).matches},Bn=J((function(){return kn(navigator.userAgent,R.from(navigator.userAgentData),In)})),Mn=function(){return Bn()},En=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},Pn={fromHtml:function(n,t){var e=(t||document).createElement("div")
if(e.innerHTML=n,!e.hasChildNodes()||e.childNodes.length>1)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return En(e.childNodes[0])},fromTag:function(n,t){var e=(t||document).createElement(n)
return En(e)},fromText:function(n,t){var e=(t||document).createTextNode(n)
return En(e)},fromDom:En,fromPoint:function(n,t,e){return R.from(n.dom.elementFromPoint(t,e)).map(En)}},Nn=function(n,t){var e=n.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},zn=function(n){return 1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount},Ln=function(n,t){var e=void 0===t?document:t.dom
return zn(e)?R.none():R.from(e.querySelector(n)).map(Pn.fromDom)},_n=function(n,t){return n.dom===t.dom},Wn=function(n,t){return e=n.dom,r=t.dom,function(n,t,e){return 0!=(n.compareDocumentPosition(t)&e)}(e,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var e,r},jn=function(n,t){return Mn().browser.isIE()?Wn(n,t):function(n,t){var e=n.dom,r=t.dom
return e!==r&&e.contains(r)}(n,t)},Fn=Nn,Hn=Object.keys,Vn=Object.hasOwnProperty,qn=function(n,t){for(var e=Hn(n),r=0,o=e.length;r<o;r++){var u=e[r]
t(n[u],u)}},Un=function(n,t){return Gn(n,(function(n,e){return{k:e,v:t(n,e)}}))},Gn=function(n,t){var e={}
return qn(n,(function(n,r){var o=t(n,r)
e[o.k]=o.v})),e},$n=function(n,t){var e={}
return function(n,t,e,r){qn(n,(function(n,o){(t(n,o)?e:r)(n,o)}))}(n,t,function(n){return function(t,e){n[e]=t}}(e),m),e},Kn=function(n,t){var e=[]
return qn(n,(function(n,r){e.push(t(n,r))})),e},Xn=function(n){return Kn(n,g)},Yn=function(n){return Hn(n).length},Jn=function(n,t){return Qn(n,t)?R.from(n[t]):R.none()},Qn=function(n,t){return Vn.call(n,t)},Zn=function(n,t){return Qn(n,t)&&void 0!==n[t]&&null!==n[t]},nt=["tfoot","thead","tbody","colgroup"],tt=function(n,t,e){return{element:n,rowspan:t,colspan:e}},et=function(n,t,e){return{element:n,cells:t,section:e}},rt=function(n,t,e){return{element:n,isNew:t,isLocked:e}},ot=function(n,t,e,r){return{element:n,cells:t,section:e,isNew:r}}
"undefined"!=typeof window?window:Function("return this;")()
var ut=function(n){return n.dom.nodeName.toLowerCase()},it=function(n){return n.dom.nodeType},ct=function(n){return function(t){return it(t)===n}},at=function(n){return 8===it(n)||"#comment"===ut(n)},lt=ct(1),ft=ct(3),st=ct(9),mt=ct(11),dt=function(n){return function(t){return lt(t)&&ut(t)===n}},gt=function(n){return Pn.fromDom(n.dom.ownerDocument)},pt=function(n){return st(n)?n:gt(n)},vt=function(n){return R.from(n.dom.parentNode).map(Pn.fromDom)},bt=function(n,t){for(var e=f(t)?t:y,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var u=r.parentNode,i=Pn.fromDom(u)
if(o.push(i),!0===e(i))break
r=u}return o},ht=function(n){return R.from(n.dom.previousSibling).map(Pn.fromDom)},wt=function(n){return R.from(n.dom.nextSibling).map(Pn.fromDom)},yt=function(n){return M(n.dom.childNodes,Pn.fromDom)},Ct=function(n,t){var e=n.dom.childNodes
return R.from(e[t]).map(Pn.fromDom)},St=f(Element.prototype.attachShadow)&&f(Node.prototype.getRootNode),Tt=d(St),xt=St?function(n){return Pn.fromDom(n.dom.getRootNode())}:pt,Rt=function(n){var t,e=xt(n)
return mt(t=e)&&l(t.dom.host)?R.some(e):R.none()},Dt=function(n){return Pn.fromDom(n.dom.host)},Ot=function(n){return l(n.dom.shadowRoot)},At=function(n){var t=ft(n)?n.dom.parentNode:n.dom
if(null==t||null===t.ownerDocument)return!1
var e,r,o=t.ownerDocument
return Rt(Pn.fromDom(t)).fold((function(){return o.body.contains(t)}),(e=At,r=Dt,function(n){return e(r(n))}))},kt=function(n){var t=n.dom.body
if(null==t)throw new Error("Body is not available yet")
return Pn.fromDom(t)},It=function(n,t){var e=[]
return E(yt(n),(function(n){t(n)&&(e=e.concat([n])),e=e.concat(It(n,t))})),e},Bt=function(n,t,e){return function(n,t,e){return N(bt(n,e),t)}(n,(function(n){return Nn(n,t)}),e)},Mt=function(n,t){return function(n,t){return N(yt(n),t)}(n,(function(n){return Nn(n,t)}))},Et=function(n,t){return function(n,t){var e=void 0===t?document:t.dom
return zn(e)?[]:M(e.querySelectorAll(n),Pn.fromDom)}(t,n)}
function Pt(n,t,e,r,o){return n(e,r)?R.some(e):f(o)&&o(e)?R.none():t(e,r,o)}var Nt=function(n,t,e){for(var r=n.dom,o=f(e)?e:y;r.parentNode;){r=r.parentNode
var u=Pn.fromDom(r)
if(t(u))return R.some(u)
if(o(u))break}return R.none()},zt=function(n,t,e){return Nt(n,(function(n){return Nn(n,t)}),e)},Lt=function(n,t){return function(n,t){return _(n.dom.childNodes,(function(n){return t(Pn.fromDom(n))})).map(Pn.fromDom)}(n,(function(n){return Nn(n,t)}))},_t=function(n,t){return Ln(t,n)},Wt=function(n,t,e){return Pt((function(n,t){return Nn(n,t)}),zt,n,t,e)},jt=function(n,t,e){if(!(r(e)||c(e)||s(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,e+"")},Ft=function(n,t,e){jt(n.dom,t,e)},Ht=function(n,t){var e=n.dom
qn(t,(function(n,t){jt(e,t,n)}))},Vt=function(n,t){var e=n.dom.getAttribute(t)
return null===e?void 0:e},qt=function(n,t){return R.from(Vt(n,t))},Ut=function(n,t){n.dom.removeAttribute(t)},Gt=function(n){return L(n.dom.attributes,(function(n,t){return n[t.name]=t.value,n}),{})},$t=function(n,t,e){return void 0===e&&(e=p),n.exists((function(n){return e(n,t)}))},Kt=function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e)
return t},Xt=function(n,t,e){return n.isSome()&&t.isSome()?R.some(e(n.getOrDie(),t.getOrDie())):R.none()},Yt=function(n,t){return n?R.some(t):R.none()},Jt=function(n){return void 0!==n.style&&f(n.style.getPropertyValue)},Qt=function(n,t,e){if(!r(e))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",e,":: Element ",n),new Error("CSS value must be a string: "+e)
Jt(n)&&n.style.setProperty(t,e)},Zt=function(n,t,e){var r=n.dom
Qt(r,t,e)},ne=function(n,t){var e=n.dom
qn(t,(function(n,t){Qt(e,t,n)}))},te=function(n,t){var e=n.dom,r=window.getComputedStyle(e).getPropertyValue(t)
return""!==r||At(n)?r:ee(e,t)},ee=function(n,t){return Jt(n)?n.style.getPropertyValue(t):""},re=function(n,t){var e=n.dom,r=ee(e,t)
return R.from(r).filter((function(n){return n.length>0}))},oe=function(n,t){(function(n,t){Jt(n)&&n.style.removeProperty(t)})(n.dom,t),$t(qt(n,"style").map(cn),"")&&Ut(n,"style")},ue=function(n,t,e){return void 0===e&&(e=0),qt(n,t).map((function(n){return parseInt(n,10)})).getOr(e)},ie=function(n,t){return ue(n,t,1)},ce=function(n){return dt("col")(n)?ue(n,"span",1)>1:ie(n,"colspan")>1},ae=function(n){return ie(n,"rowspan")>1},le=function(n,t){return parseInt(te(n,t),10)},fe=d(10),se=d(10),me=function(n,t){return de(n,t,C)},de=function(n,t,e){return F(yt(n),(function(n){return Nn(n,t)?e(n)?[n]:[]:de(n,t,e)}))},ge=function(n,t){return function(n,t,e){return void 0===e&&(e=y),e(t)?R.none():k(n,ut(t))?R.some(t):zt(t,n.join(","),(function(n){return Nn(n,"table")||e(n)}))}(["td","th"],n,t)},pe=function(n){return me(n,"th,td")},ve=function(n){return Nn(n,"colgroup")?Mt(n,"col"):F(we(n),(function(n){return Mt(n,"col")}))},be=function(n,t){return Wt(n,"table",t)},he=function(n){return me(n,"tr")},we=function(n){return be(n).fold(d([]),(function(n){return Mt(n,"colgroup")}))},ye=function(n,t){return M(n,(function(n){if("colgroup"===ut(n)){var e=M(ve(n),(function(n){var t=ue(n,"span",1)
return tt(n,1,t)}))
return et(n,e,"colgroup")}e=M(pe(n),(function(n){var t=ue(n,"rowspan",1),e=ue(n,"colspan",1)
return tt(n,t,e)}))
return et(n,e,t(n))}))},Ce=function(n){return vt(n).map((function(n){var t=ut(n)
return function(n){return k(nt,n)}(t)?t:"tbody"})).getOr("tbody")},Se=function(n){var t=he(n),e=Y(Y([],we(n),!0),t,!0)
return ye(e,Ce)},Te=function(n,t,e){var r=n.cells,o=r.slice(0,t),u=r.slice(t),i=o.concat(e).concat(u)
return De(n,i)},xe=function(n,t,e){return Te(n,t,[e])},Re=function(n,t,e){n.cells[t]=e},De=function(n,t){return ot(n.element,t,n.section,n.isNew)},Oe=function(n,t){return n.cells[t]},Ae=function(n,t){return Oe(n,t).element},ke=function(n){return n.cells.length},Ie=function(n){var t=P(n,(function(n){return"colgroup"===n.section}))
return{rows:t.fail,cols:t.pass}},Be=function(n,t,e){var r=M(n.cells,e)
return ot(t(n.element),r,n.section,!0)},Me="data-snooker-locked-cols",Ee=function(n){return qt(n,Me).bind((function(n){return R.from(n.match(/\d+/g))})).map((function(n){return V(n,C)}))},Pe=function(n){var t=L(Ie(n).rows,(function(n,t){return E(t.cells,(function(t,e){t.isLocked&&(n[e]=!0)})),n}),{})
return function(n,t){var e=D.call(n,0)
return e.sort(t),e}(Kn(t,(function(n,t){return parseInt(t,10)})))},Ne=function(n,t){return n+","+t},ze=function(n,t){var e=F(n.all,(function(n){return n.cells}))
return N(e,t)},Le=function(n){var t={},e=[],r=G(n).map((function(n){return n.element})).bind(be).bind(Ee).getOr({}),o=0,u=0,i=0,c=P(n,(function(n){return"colgroup"===n.section})),a=c.pass,l=c.fail
E(l,(function(n){var c=[]
E(n.cells,(function(n){for(var e=0;void 0!==t[Ne(i,e)];)e++
for(var o=Zn(r,e.toString()),a=function(n,t,e,r,o,u){return{element:n,rowspan:t,colspan:e,row:r,column:o,isLocked:u}}(n.element,n.rowspan,n.colspan,i,e,o),l=0;l<n.colspan;l++)for(var f=0;f<n.rowspan;f++){var s=e+l,m=Ne(i+f,s)
t[m]=a,u=Math.max(u,s+1)}c.push(a)})),o++,e.push(et(n.element,c,n.section)),i++}))
var f=$(a).map((function(n){var t=function(n){var t={},e=0
return E(n.cells,(function(n){var r=n.colspan
B(r,(function(o){var u=e+o
t[u]=function(n,t,e){return{element:n,colspan:t,column:e}}(n.element,r,u)})),e+=r})),t}(n)
return{colgroups:[function(n,t){return{element:n,columns:t}}(n.element,Xn(t))],columns:t}})).getOrThunk((function(){return{colgroups:[],columns:{}}})),s=f.columns,m=f.colgroups
return{grid:function(n,t){return{rows:n,columns:t}}(o,u),access:t,all:e,columns:s,colgroups:m}},_e={fromTable:function(n){var t=Se(n)
return Le(t)},generate:Le,getAt:function(n,t,e){return R.from(n.access[Ne(t,e)])},findItem:function(n,t,e){var r=ze(n,(function(n){return e(t,n.element)}))
return r.length>0?R.some(r[0]):R.none()},filterItems:ze,justCells:function(n){return F(n.all,(function(n){return n.cells}))},justColumns:function(n){return Xn(n.columns)},hasColumns:function(n){return Hn(n.columns).length>0},getColumnAt:function(n,t){return R.from(n.columns[t])}},We=function(n,t){var e=t.column,r=t.column+t.colspan-1,o=t.row,u=t.row+t.rowspan-1
return e<=n.finishCol&&r>=n.startCol&&o<=n.finishRow&&u>=n.startRow},je=function(n,t){return t.column>=n.startCol&&t.column+t.colspan-1<=n.finishCol&&t.row>=n.startRow&&t.row+t.rowspan-1<=n.finishRow},Fe=function(n,t,e){var r=_e.findItem(n,t,_n),o=_e.findItem(n,e,_n)
return r.bind((function(n){return o.map((function(t){return e=n,r=t,o=Math.min(e.row,r.row),u=Math.min(e.column,r.column),i=Math.max(e.row+e.rowspan-1,r.row+r.rowspan-1),c=Math.max(e.column+e.colspan-1,r.column+r.colspan-1),{startRow:o,startCol:u,finishRow:i,finishCol:c}
var e,r,o,u,i,c}))}))},He=function(n,t,e){return Fe(n,t,e).bind((function(t){return function(n,t){for(var e=!0,r=v(je,t),o=t.startRow;o<=t.finishRow;o++)for(var u=t.startCol;u<=t.finishCol;u++)e=e&&_e.getAt(n,o,u).exists(r)
return e?R.some(t):R.none()}(n,t)}))},Ve=function(n,t,e){return Fe(n,t,e).map((function(t){var e=_e.filterItems(n,v(We,t))
return M(e,(function(n){return n.element}))}))},qe=function(n,t){return _e.findItem(n,t,(function(n,t){return jn(t,n)})).map((function(n){return n.element}))},Ue=function(n,t,e){return be(n).bind((function(r){return function(n,t,e,r){return _e.findItem(n,t,_n).bind((function(t){var o=e>0?t.row+t.rowspan-1:t.row,u=r>0?t.column+t.colspan-1:t.column
return _e.getAt(n,o+e,u+r).map((function(n){return n.element}))}))}(Ke(r),n,t,e)}))},Ge=function(n,t,e){var r=Ke(n)
return Ve(r,t,e)},$e=function(n,t,e,r,o){var u=Ke(n),i=_n(n,e)?R.some(t):qe(u,t),c=_n(n,o)?R.some(r):qe(u,r)
return i.bind((function(n){return c.bind((function(t){return Ve(u,n,t)}))}))},Ke=_e.fromTable,Xe=function(n,t){vt(n).each((function(e){e.dom.insertBefore(t.dom,n.dom)}))},Ye=function(n,t){wt(n).fold((function(){vt(n).each((function(n){Qe(n,t)}))}),(function(n){Xe(n,t)}))},Je=function(n,t){(function(n){return Ct(n,0)})(n).fold((function(){Qe(n,t)}),(function(e){n.dom.insertBefore(t.dom,e.dom)}))},Qe=function(n,t){n.dom.appendChild(t.dom)},Ze=function(n,t){Xe(n,t),Qe(t,n)},nr=function(n,t){E(t,(function(e,r){var o=0===r?n:t[r-1]
Ye(o,e)}))},tr=function(n,t){E(t,(function(t){Qe(n,t)}))},er=function(n){n.dom.textContent="",E(yt(n),(function(n){rr(n)}))},rr=function(n){var t=n.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},or=function(n){var t,e=yt(n)
e.length>0&&(t=n,E(e,(function(n){Xe(t,n)}))),rr(n)},ur=function(n,t){var e=function(t){return n(t)?R.from(t.dom.nodeValue):R.none()}
return{get:function(r){if(!n(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return e(r).getOr("")},getOption:e,set:function(e,r){if(!n(e))throw new Error("Can only set raw "+t+" value of a "+t+" node")
e.dom.nodeValue=r}}}(ft,"text"),ir=function(n){return ur.get(n)},cr=function(n){return ur.getOption(n)},ar=function(n,t){return ur.set(n,t)},lr=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
function fr(){return{up:d({selector:zt,closest:Wt,predicate:Nt,all:bt}),down:d({selector:Et,predicate:It}),styles:d({get:te,getRaw:re,set:Zt,remove:oe}),attrs:d({get:Vt,set:Ft,remove:Ut,copyTo:function(n,t){var e=Gt(n)
Ht(t,e)}}),insert:d({before:Xe,after:Ye,afterAll:nr,append:Qe,appendAll:tr,prepend:Je,wrap:Ze}),remove:d({unwrap:or,remove:rr}),create:d({nu:Pn.fromTag,clone:function(n){return Pn.fromDom(n.dom.cloneNode(!1))},text:Pn.fromText}),query:d({comparePosition:function(n,t){return n.dom.compareDocumentPosition(t.dom)},prevSibling:ht,nextSibling:wt}),property:d({children:yt,name:ut,parent:vt,document:function(n){return pt(n).dom},isText:ft,isComment:at,isElement:lt,isSpecial:function(n){var t=ut(n)
return k(["script","noscript","iframe","noframes","noembed","title","style","textarea","xmp"],t)},getLanguage:function(n){return lt(n)?qt(n,"lang"):R.none()},getText:ir,setText:ar,isBoundary:function(n){return!!lt(n)&&("body"===ut(n)||k(lr,ut(n)))},isEmptyTag:function(n){return!!lt(n)&&k(["br","img","hr","input"],ut(n))},isNonEditable:function(n){return lt(n)&&"false"===Vt(n,"contenteditable")}}),eq:_n,is:Fn}}var sr,mr,dr,gr,pr=function(n,t,e,r){var o=t(n,e)
return z(r,(function(e,r){var o=t(n,r)
return vr(n,e,o)}),o)},vr=function(n,t,e){return t.bind((function(t){return e.filter(v(n.eq,t))}))},br=function(n,t,e){return e.length>0?function(n,t,e,r){return r(n,t,e[0],e.slice(1))}(n,t,e,pr):R.none()},hr=function(n,t,e,r){void 0===r&&(r=y)
var o=[t].concat(n.up().all(t)),u=[e].concat(n.up().all(e)),i=function(n){return W(n,r).fold((function(){return n}),(function(t){return n.slice(0,t+1)}))},c=i(o),a=i(u),l=_(c,(function(t){return I(a,function(n,t){return v(n.eq,t)}(n,t))}))
return{firstpath:c,secondpath:a,shared:l}},wr=fr(),yr=function(n,t){return br(wr,(function(t,e){return n(e)}),t)},Cr=function(n){return zt(n,"table")},Sr=function(n,t,e){var r=function(n){return function(t){return void 0!==e&&e(t)||_n(t,n)}}
return _n(n,t)?R.some({boxes:R.some([n]),start:n,finish:t}):Cr(n).bind((function(o){return Cr(t).bind((function(u){if(_n(o,u))return R.some({boxes:Ge(o,n,t),start:n,finish:t})
if(jn(o,u)){var i=(c=Bt(t,"td,th",r(o))).length>0?c[c.length-1]:t
return R.some({boxes:$e(o,n,o,t,u),start:n,finish:i})}if(jn(u,o)){var c,a=(c=Bt(n,"td,th",r(u))).length>0?c[c.length-1]:n
return R.some({boxes:$e(u,n,o,t,u),start:n,finish:a})}return function(n,t,e){return hr(wr,n,t,e)}(n,t).shared.bind((function(i){return Wt(i,"table",e).bind((function(e){var i=Bt(t,"td,th",r(e)),c=i.length>0?i[i.length-1]:t,a=Bt(n,"td,th",r(e)),l=a.length>0?a[a.length-1]:n
return R.some({boxes:$e(e,n,o,t,u),start:l,finish:c})}))}))}))}))},Tr=function(n,t){var e=Et(n,t)
return e.length>0?R.some(e):R.none()},xr=function(n,t,e){return _t(n,t).bind((function(t){return _t(n,e).bind((function(n){return yr(Cr,[t,n]).map((function(e){return{first:t,last:n,table:e}}))}))}))},Rr=function(n,t,e,r,o){return function(n,t){return _(n,(function(n){return Nn(n,t)}))}(n,o).bind((function(n){return Ue(n,t,e).bind((function(n){return function(n,t){return zt(n,"table").bind((function(e){return _t(e,t).bind((function(t){return Sr(t,n).bind((function(n){return n.boxes.map((function(t){return{boxes:t,start:n.start,finish:n.finish}}))}))}))}))}(n,r)}))}))},Dr=function(n,t){return Tr(n,t)},Or=function(n,t,e){return xr(n,t,e).bind((function(t){var e=function(t){return _n(n,t)},r="thead,tfoot,tbody,table",o=zt(t.first,r,e),u=zt(t.last,r,e)
return o.bind((function(n){return u.bind((function(e){return _n(n,e)?function(n,t,e){var r=Ke(n)
return He(r,t,e)}(t.table,t.first,t.last):R.none()}))}))}))},Ar=function(n){if(!u(n))throw new Error("cases must be an array")
if(0===n.length)throw new Error("there must be at least one case")
var t=[],e={}
return E(n,(function(r,o){var i=Hn(r)
if(1!==i.length)throw new Error("one and only one name per case")
var c=i[0],a=r[c]
if(void 0!==e[c])throw new Error("duplicate key detected:"+c)
if("cata"===c)throw new Error("cannot have a case named cata (sorry)")
if(!u(a))throw new Error("case arguments must be an array")
t.push(c),e[c]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var u=e.length
if(u!==a.length)throw new Error("Wrong number of arguments to case "+c+". Expected "+a.length+" ("+a+"), got "+u)
var i=function(n){var r=Hn(n)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
if(!H(t,(function(n){return k(r,n)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return n[c].apply(null,e)}
return{fold:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(t.length!==n.length)throw new Error("Wrong number of arguments to fold. Expected "+n.length+", got "+t.length)
var u=t[o]
return u.apply(null,e)},match:i,log:function(n){console.log(n,{constructors:t,constructor:c,params:e})}}}})),e},kr=Ar([{none:[]},{multiple:["elements"]},{single:["element"]}]),Ir=function(n,t,e,r){return n.fold(t,e,r)},Br=kr.none,Mr=kr.multiple,Er=kr.single,Pr=tinymce.util.Tools.resolve("tinymce.PluginManager"),Nr=function(n,t){return Pn.fromDom(n.dom.cloneNode(t))},zr=function(n){return Nr(n,!1)},Lr=function(n){return Nr(n,!0)},_r=function(n,t){var e=Pn.fromTag(t),r=Gt(n)
return Ht(e,r),e},Wr=function(n,t){var e=function(e){var r=t(e)
if(r<=0||null===r){var o=te(e,n)
return parseFloat(o)||0}return r},r=function(n,t){return L(t,(function(t,e){var r=te(n,e),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,e){if(!s(e)&&!e.match(/^[0-9]+$/))throw new Error(n+".set accepts only positive integer values. Value was "+e)
var r=t.dom
Jt(r)&&(r.style[n]=e+"px")},get:e,getOuter:e,aggregate:r,max:function(n,t,e){var o=r(n,e)
return t>o?t-o:0}}},jr=function(){var n=Mn().browser
return n.isIE()||n.isEdge()},Fr=function(n,t){return function(n){var t=parseFloat(n)
return isNaN(t)?R.none():R.some(t)}(n).getOr(t)},Hr=function(n,t,e){return Fr(te(n,t),e)},Vr=function(n){return te(n,"box-sizing")},qr=function(n,t,e,r){return t-Hr(n,"padding-"+e,0)-Hr(n,"padding-"+r,0)-Hr(n,"border-"+e+"-width",0)-Hr(n,"border-"+r+"-width",0)},Ur=function(n,t){var e=n.dom,r=e.getBoundingClientRect().width||e.offsetWidth
return"border-box"===t?r:qr(n,r,"left","right")},Gr=Wr("width",(function(n){return n.dom.offsetWidth})),$r=function(n){return Gr.get(n)},Kr=function(n){return Gr.getOuter(n)},Xr=function(n){return Ur(n,"content-box")},Yr=function(n){return jr()?Ur(n,Vr(n)):Hr(n,"width",n.dom.offsetWidth)},Jr=function(n,t){void 0===t&&(t=C)
var e=n.grid,r=B(e.columns,g),o=B(e.rows,g)
return M(r,(function(e){return Qr((function(){return F(o,(function(t){return _e.getAt(n,t,e).filter((function(n){return n.column===e})).toArray()}))}),(function(n){return 1===n.colspan&&t(n.element)}),(function(){return _e.getAt(n,0,e)}))}))},Qr=function(n,t,e){var r=n()
return _(r,t).orThunk((function(){return R.from(r[0]).orThunk(e)})).map((function(n){return n.element}))},Zr=function(n){var t=n.grid,e=B(t.rows,g),r=B(t.columns,g)
return M(e,(function(t){return Qr((function(){return F(r,(function(e){return _e.getAt(n,t,e).filter((function(n){return n.row===t})).fold(d([]),(function(n){return[n]}))}))}),(function(n){return 1===n.rowspan}),(function(){return _e.getAt(n,t,0)}))}))},no=function(n,t){if(t<0||t>=n.length-1)return R.none()
var e=n[t].fold((function(){var e=function(n){var t=D.call(n,0)
return t.reverse(),t}(n.slice(0,t))
return K(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return R.some({value:n,delta:0})})),r=n[t+1].fold((function(){var e=n.slice(t+1)
return K(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return R.some({value:n,delta:1})}))
return e.bind((function(n){return r.map((function(t){var e=t.delta+n.delta
return Math.abs(t.value-n.value)/e}))}))},to=function(n,t){return function(e){return"rtl"===eo(e)?t:n}},eo=function(n){return"rtl"===te(n,"direction")?"rtl":"ltr"},ro=Wr("height",(function(n){var t=n.dom
return At(n)?t.getBoundingClientRect().height:t.offsetHeight})),oo=function(n){return ro.get(n)},uo=function(n){return ro.getOuter(n)},io=function(n){return jr()?function(n,t){var e=n.dom,r=e.getBoundingClientRect().height||e.offsetHeight
return"border-box"===t?r:qr(n,r,"top","bottom")}(n,Vr(n)):Hr(n,"height",n.dom.offsetHeight)},co=function(n,t){return{left:n,top:t,translate:function(e,r){return co(n+e,t+r)}}},ao=co,lo=function(n,t){return void 0!==n?n:void 0!==t?t:0},fo=function(n){var t=n.dom.ownerDocument,e=t.body,r=t.defaultView,o=t.documentElement
if(e===n.dom)return ao(e.offsetLeft,e.offsetTop)
var u=lo(null==r?void 0:r.pageYOffset,o.scrollTop),i=lo(null==r?void 0:r.pageXOffset,o.scrollLeft),c=lo(o.clientTop,e.clientTop),a=lo(o.clientLeft,e.clientLeft)
return so(n).translate(i-a,u-c)},so=function(n){var t=n.dom,e=t.ownerDocument.body
return e===t?ao(e.offsetLeft,e.offsetTop):At(n)?function(n){var t=n.getBoundingClientRect()
return ao(t.left,t.top)}(t):ao(0,0)},mo=function(n,t){return{row:n,y:t}},go=function(n,t){return{col:n,x:t}},po=function(n){return fo(n).left+Kr(n)},vo=function(n){return fo(n).left},bo=function(n,t){return go(n,vo(t))},ho=function(n,t){return go(n,po(t))},wo=function(n){return fo(n).top},yo=function(n,t){return mo(n,wo(t))},Co=function(n,t){return mo(n,wo(t)+uo(t))},So=function(n,t,e){if(0===e.length)return[]
var r=M(e.slice(1),(function(t,e){return t.map((function(t){return n(e,t)}))})),o=e[e.length-1].map((function(n){return t(e.length-1,n)}))
return r.concat([o])},To={delta:g,positions:function(n){return So(yo,Co,n)},edge:wo},xo={delta:g,edge:vo,positions:function(n){return So(bo,ho,n)}},Ro={delta:function(n){return-n},edge:po,positions:function(n){return So(ho,bo,n)}},Do=to(xo,Ro),Oo={delta:function(n,t){return Do(t).delta(n,t)},positions:function(n,t){return Do(t).positions(n,t)},edge:function(n){return Do(n).edge(n)}},Ao={unsupportedLength:["em","ex","cap","ch","ic","rem","lh","rlh","vw","vh","vi","vb","vmin","vmax","cm","mm","Q","in","pc","pt","px"],fixed:["px","pt"],relative:["%"],empty:[""]},ko=(sr="[0-9]+",mr="[eE][+-]?[0-9]+",dr=function(n){return"(?:"+n+")?"},gr=["Infinity","[0-9]+\\."+dr(sr)+dr(mr),"\\.[0-9]+"+dr(mr),sr+dr(mr)].join("|"),new RegExp("^([+-]?(?:"+gr+"))(.*)$")),Io=function(n,t){return R.from(ko.exec(n)).bind((function(n){var e=Number(n[1]),r=n[2]
return function(n,t){return I(t,(function(t){return I(Ao[t],(function(t){return n===t}))}))}(r,t)?R.some({value:e,unit:r}):R.none()}))},Bo=/(\d+(\.\d+)?)%/,Mo=/(\d+(\.\d+)?)px|em/,Eo=dt("col"),Po=function(n,t,e){var r,o=(r=n,R.from(r.dom.parentElement).map(Pn.fromDom)).getOrThunk((function(){return kt(gt(n))}))
return t(n)/e(o)*100},No=function(n,t){Zt(n,"width",t+"px")},zo=function(n,t){Zt(n,"width",t+"%")},Lo=function(n,t){Zt(n,"height",t+"px")},_o=function(n,t,e,r){var o=parseFloat(n)
return un(n,"%")&&"table"!==ut(t)?function(n,t,e,r){var o=be(n).map((function(n){var r=e(n)
return Math.floor(t/100*r)})).getOr(t)
return r(n,o),o}(t,o,e,r):o},Wo=function(n){var t=function(n){return io(n)+"px"}(n)
return t?_o(t,n,oo,Lo):oo(n)},jo=function(n,t){return re(n,t).orThunk((function(){return qt(n,t).map((function(n){return n+"px"}))}))},Fo=function(n){return jo(n,"width")},Ho=function(n){return Po(n,$r,Xr)},Vo=function(n){return Eo(n)?$r(n):Yr(n)},qo=function(n){return function(n,t,e){return e(n)/ie(n,t)}(n,"rowspan",Wo)},Uo=function(n,t,e){Zt(n,"width",t+e)},Go=function(n){return Po(n,$r,Xr)+"%"},$o=d(Bo),Ko=dt("col"),Xo=function(n){return Fo(n).getOrThunk((function(){return Vo(n)+"px"}))},Yo=function(n){return(t=n,jo(t,"height")).getOrThunk((function(){return qo(n)+"px"}))
var t},Jo=function(n,t,e,r,o,u){return n.filter(r).fold((function(){return u(no(e,t))}),(function(n){return o(n)}))},Qo=function(n,t,e,r){var o=Jr(n),u=_e.hasColumns(n)?function(n){return M(_e.justColumns(n),(function(n){return R.from(n.element)}))}(n):o,i=[R.some(Oo.edge(t))].concat(M(Oo.positions(o,t),(function(n){return n.map((function(n){return n.x}))}))),c=w(ce)
return M(u,(function(n,t){return Jo(n,t,i,c,(function(n){if(function(n){var t=Mn().browser,e=t.isChrome()||t.isFirefox()
return!Ko(n)||e}(n))return e(n)
var u,a,l=(u=o[t],a=g,null!=u?a(u):R.none())
return Jo(l,t,i,c,(function(n){return r(R.some($r(n)))}),r)}),r)}))},Zo=function(n){return n.map((function(n){return n+"px"})).getOr("")},nu=function(n,t,e){return Qo(n,t,Vo,(function(n){return n.getOrThunk(e.minCellWidth)}))},tu=function(n,t,e,r,o){var u=Zr(n),i=[R.some(e.edge(t))].concat(M(e.positions(u,t),(function(n){return n.map((function(n){return n.y}))})))
return M(u,(function(n,t){return Jo(n,t,i,w(ae),r,o)}))},eu=function(n,t){return function(){return At(n)?t(n):parseFloat(re(n,"width").getOr("0"))}},ru=function(n){var t=eu(n,$r),e=d(0)
return{width:t,pixelWidth:t,getWidths:function(t,e){return nu(t,n,e)},getCellDelta:e,singleColumnWidth:d([0]),minCellWidth:e,setElementWidth:m,adjustTableWidth:m,isRelative:!0,label:"none"}},ou=function(n){var t=eu(n,(function(n){return parseFloat(Go(n))})),e=eu(n,$r)
return{width:t,pixelWidth:e,getWidths:function(t,e){return function(n,t,e){return Qo(n,t,Ho,(function(n){return n.fold((function(){return e.minCellWidth()}),(function(n){return n/e.pixelWidth()*100}))}))}(t,n,e)},getCellDelta:function(n){return n/e()*100},singleColumnWidth:function(n,t){return[100-n]},minCellWidth:function(){return fe()/e()*100},setElementWidth:zo,adjustTableWidth:function(e){var r=t()
zo(n,r+e/100*r)},isRelative:!0,label:"percent"}},uu=function(n){var t=eu(n,$r)
return{width:t,pixelWidth:t,getWidths:function(t,e){return nu(t,n,e)},getCellDelta:g,singleColumnWidth:function(n,t){return[Math.max(fe(),n+t)-n]},minCellWidth:fe,setElementWidth:No,adjustTableWidth:function(e){var r=t()+e
No(n,r)},isRelative:!1,label:"pixel"}},iu=function(n){return Fo(n).fold((function(){return ru(n)}),(function(t){return function(n,t){return null!==$o().exec(t)?ou(n):uu(n)}(n,t)}))},cu=uu,au=ou,lu=function(n,t,e){var r=n[e].element,o=Pn.fromTag("td")
Qe(o,Pn.fromTag("br")),(t?Qe:Je)(r,o)},fu=function(n,t){var e=function(n){return Nn(n.element,t)},r=Lr(n),o=Se(r),u=iu(n),i=_e.generate(o),c=function(n,t){var e=n.grid.columns,r=n.grid.rows,o=e,u=0,i=0,c=[],a=[]
return qn(n.access,(function(n){if(c.push(n),t(n)){a.push(n)
var e=n.row,l=e+n.rowspan-1,f=n.column,s=f+n.colspan-1
e<r?r=e:l>u&&(u=l),f<o?o=f:s>i&&(i=s)}})),function(n,t,e,r,o,u){return{minRow:n,minCol:t,maxRow:e,maxCol:r,allCells:o,selectedCells:u}}(r,o,u,i,c,a)}(i,e),a="th:not("+t+"),td:not("+t+")",l=de(r,"th,td",(function(n){return Nn(n,a)}))
return E(l,rr),function(n,t,e,r){for(var o=t.grid.columns,u=t.grid.rows,i=0;i<u;i++)for(var c=!1,a=0;a<o;a++)i<e.minRow||i>e.maxRow||a<e.minCol||a>e.maxCol||(_e.getAt(t,i,a).filter(r).isNone()?lu(n,c,i):c=!0)}(o,i,c,e),function(n,t,e,r){qn(e.columns,(function(n){(n.column<t.minCol||n.column>t.maxCol)&&rr(n.element)}))
var o=N(me(n,"tr"),(function(n){return 0===n.dom.childElementCount}))
E(o,rr),t.minCol!==t.maxCol&&t.minRow!==t.maxRow||E(me(n,"th,td"),(function(n){Ut(n,"rowspan"),Ut(n,"colspan")})),Ut(n,Me),Ut(n,"data-snooker-col-series"),iu(n).adjustTableWidth(r)}(r,c,i,function(n,t,e,r){if(0===r.minCol&&t.grid.columns===r.maxCol+1)return 0
var o=nu(t,n,e),u=L(o,(function(n,t){return n+t}),0),i=L(o.slice(r.minCol,r.maxCol+1),(function(n,t){return n+t}),0)/u*e.pixelWidth()-e.pixelWidth()
return e.getCellDelta(i)}(n,_e.fromTable(n),u,c)),r},su=function(n){return"img"===ut(n)?1:cr(n).fold((function(){return yt(n).length}),(function(n){return n.length}))},mu=["img","br"],du=function(n){return cr(n).filter((function(n){return 0!==n.trim().length||n.indexOf(" ")>-1})).isSome()||k(mu,ut(n))},gu=function(n){return t=du,(e=function(n){for(var r=0;r<n.childNodes.length;r++){var o=Pn.fromDom(n.childNodes[r])
if(t(o))return R.some(o)
var u=e(n.childNodes[r])
if(u.isSome())return u}return R.none()})(n.dom)
var t,e},pu=function(n){return vu(n,du)},vu=function(n,t){var e=function(n){for(var r=yt(n),o=r.length-1;o>=0;o--){var u=r[o]
if(t(u))return R.some(u)
var i=e(u)
if(i.isSome())return i}return R.none()}
return e(n)},bu={scope:["row","col"]},hu=function(n){return function(){var t=Pn.fromTag("td",n.dom)
return Qe(t,Pn.fromTag("br",n.dom)),t}},wu=function(n){return function(){return Pn.fromTag("col",n.dom)}},yu=function(n){return function(){return Pn.fromTag("colgroup",n.dom)}},Cu=function(n){return function(){return Pn.fromTag("tr",n.dom)}},Su=function(n,t,e){var r=function(n,t){var e=_r(n,t),r=yt(Lr(n))
return tr(e,r),e}(n,t)
return qn(e,(function(n,t){null===n?Ut(r,t):Ft(r,t,n)})),r},Tu=function(n){return n},xu=function(n,t,e){var r=function(n,t){var e,r,o,u
e=n.element,r=t,o=e.dom,u=r.dom,Jt(o)&&Jt(u)&&(u.style.cssText=o.style.cssText),oe(t,"height"),1!==n.colspan&&oe(t,"width")}
return{col:function(e){var o=Pn.fromTag(ut(e.element),t.dom)
return r(e,o),n(e.element,o),o},colgroup:yu(t),row:Cu(t),cell:function(o){var u=Pn.fromTag(ut(o.element),t.dom),i=e.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"]),c=i.length>0?function(n,t,e){return gu(n).map((function(r){var o=e.join(","),u=Bt(r,o,(function(t){return _n(t,n)}))
return z(u,(function(n,t){var e=zr(t)
return Ut(e,"contenteditable"),Qe(n,e),e}),t)})).getOr(t)}(o.element,u,i):u
return Qe(c,Pn.fromTag("br")),r(o,u),function(n,t){qn(bu,(function(e,r){return qt(n,r).filter((function(n){return k(e,n)})).each((function(n){return Ft(t,r,n)}))}))}(o.element,u),n(o.element,u),u},replace:Su,colGap:wu(t),gap:hu(t)}},Ru=function(n){return{col:wu(n),colgroup:yu(n),row:Cu(n),cell:hu(n),replace:Tu,colGap:wu(n),gap:hu(n)}},Du=function(n){return M(n,Pn.fromDom)},Ou=function(n){return Pn.fromDom(n.getBody())},Au=function(n){return n.getBoundingClientRect().width},ku=function(n){return n.getBoundingClientRect().height},Iu=function(n){return function(t){return _n(t,Ou(n))}},Bu=function(n){return/^\d+(\.\d+)?$/.test(n)?n+"px":n},Mu=function(n){Ut(n,"data-mce-style")
var t=function(n){return Ut(n,"data-mce-style")}
E(pe(n),t),E(ve(n),t),E(he(n),t)},Eu=function(n){return Pn.fromDom(n.selection.getStart())},Pu=function(n){return Ir(n.get(),d([]),g,q)},Nu=function(n){var t=function(n,t){return qt(n,t).exists((function(n){return parseInt(n,10)>1}))},e=Pu(n)
return e.length>0&&H(e,(function(n){return t(n,"rowspan")||t(n,"colspan")}))?R.some(e):R.none()},zu=function(n,t,e){return Ir(t.get(),R.none,(function(t){return t.length<=1?R.none():Or(n,e.firstSelectedSelector,e.lastSelectedSelector).map((function(n){return{bounds:n,cells:t}}))}),R.none)},Lu="data-mce-selected",_u="data-mce-first-selected",Wu="data-mce-last-selected",ju={selected:Lu,selectedSelector:"td[data-mce-selected],th[data-mce-selected]",firstSelected:_u,firstSelectedSelector:"td[data-mce-first-selected],th[data-mce-first-selected]",lastSelected:Wu,lastSelectedSelector:"td[data-mce-last-selected],th[data-mce-last-selected]"},Fu=function(n,t,e){return{element:e,mergable:zu(t,n,ju),unmergable:Nu(n),selection:Pu(n)}},Hu=function(n){return function(t,e){var r,o=ut(t),u="col"===o||"colgroup"===o?be(r=t).bind((function(n){return Dr(n,ju.firstSelectedSelector)})).fold(d(r),(function(n){return n[0]})):t
return Wt(u,n,e)}},Vu=Hu("th,td,caption"),qu=Hu("th,td"),Uu=function(n){return Pu(n)},Gu=function(n,t,e){n.on("BeforeGetContent",(function(e){!0===e.selection&&Ir(t.get(),m,(function(t){e.preventDefault(),function(n){return be(n[0]).map((function(n){var t=fu(n,"[data-mce-selected]")
return Mu(t),[t]}))}(t).each((function(t){e.content="text"===e.format?function(n){return M(n,(function(n){return n.dom.innerText})).join("")}(t):function(n,t){return M(t,(function(t){return n.selection.serializer.serialize(t.dom,{})})).join("")}(n,t)}))}),m)})),n.on("BeforeSetContent",(function(r){if(!0===r.selection&&!0===r.paste){var o=Uu(t)
G(o).each((function(t){be(t).each((function(o){var u,i,c,a=N((u=r.content,(c=(i||document).createElement("div")).innerHTML=u,yt(Pn.fromDom(c))),(function(n){return"meta"!==ut(n)})),l=dt("table")
if(1===a.length&&l(a[0])){r.preventDefault()
var f=Pn.fromDom(n.getDoc()),s=Ru(f),m=function(n,t,e){return{element:n,clipboard:t,generators:e}}(t,a[0],s)
e.pasteCells(o,m).each((function(){n.focus()}))}}))}))}}))},$u=Ar([{none:[]},{only:["index"]},{left:["index","next"]},{middle:["prev","index","next"]},{right:["prev","index"]}]),Ku=X({},$u),Xu=function(n,t,e,r,o){var u=n.slice(0),i=function(n,t){return 0===n.length?Ku.none():1===n.length?Ku.only(0):0===t?Ku.left(0,1):t===n.length-1?Ku.right(t-1,t):t>0&&t<n.length-1?Ku.middle(t-1,t,t+1):Ku.none()}(n,t),c=d(M(u,d(0)))
return i.fold(c,(function(n){return r.singleColumnWidth(u[n],e)}),(function(n,t){return o.calcLeftEdgeDeltas(u,n,t,e,r.minCellWidth(),r.isRelative)}),(function(n,t,i){return o.calcMiddleDeltas(u,n,t,i,e,r.minCellWidth(),r.isRelative)}),(function(n,t){return o.calcRightEdgeDeltas(u,n,t,e,r.minCellWidth(),r.isRelative)}))},Yu=function(n,t,e){for(var r=0,o=n;o<t;o++)r+=void 0!==e[o]?e[o]:0
return r},Ju=function(n,t){var e=_e.justCells(n)
return M(e,(function(n){var e=Yu(n.row,n.row+n.rowspan,t)
return{element:n.element,height:e,rowspan:n.rowspan}}))},Qu=function(n,t){return _e.hasColumns(n)?function(n,t){var e=_e.justColumns(n)
return M(e,(function(n,e){return{element:n.element,width:t[e],colspan:n.colspan}}))}(n,t):function(n,t){var e=_e.justCells(n)
return M(e,(function(n){var e=Yu(n.column,n.column+n.colspan,t)
return{element:n.element,width:e,colspan:n.colspan}}))}(n,t)},Zu=function(n,t,e){var r=Qu(n,t)
E(r,(function(n){e.setElementWidth(n.element,n.width)}))},ni=function(n,t,e,r,o){var u=_e.fromTable(n),i=o.getCellDelta(t),c=o.getWidths(u,o),a=e===u.grid.columns-1,l=r.clampTableDelta(c,e,i,o.minCellWidth(),a),f=Xu(c,e,l,o,r),s=M(f,(function(n,t){return n+c[t]}))
Zu(u,s,o),r.resizeTable(o.adjustTableWidth,l,a)},ti=function(n,t,e,r){var o=_e.fromTable(n),u=function(n,t,e){return tu(n,t,e,qo,(function(n){return n.getOrThunk(se)}))}(o,n,r),i=M(u,(function(n,r){return e===r?Math.max(t+n,se()):n})),c=Ju(o,i),a=function(n,t){return M(n.all,(function(n,e){return{element:n.element,height:t[e]}}))}(o,i)
E(a,(function(n){Lo(n.element,n.height)})),E(c,(function(n){Lo(n.element,n.height)}))
var l=z(i,(function(n,t){return n+t}),0)
Lo(n,l)},ei=function(n){return M(n,d(0))},ri=function(n,t,e,r,o){return o(n.slice(0,t)).concat(r).concat(o(n.slice(e)))},oi=function(n){return function(t,e,r,o){if(n(r)){var u=Math.max(o,t[e]-Math.abs(r)),i=Math.abs(u-t[e])
return r>=0?i:-i}return r}},ui=oi((function(n){return n<0})),ii=oi(C),ci=function(){var n=function(n,t,e,r){var o=(100+e)/100,u=Math.max(r,(n[t]+e)/o)
return M(n,(function(n,e){return(e===t?u:n/o)-n}))},t=function(t,e,r,o,u,i){return i?n(t,e,o,u):function(n,t,e,r,o){var u=ui(n,t,r,o)
return ri(n,t,e+1,[u,0],ei)}(t,e,r,o,u)}
return{resizeTable:function(n,t){return n(t)},clampTableDelta:ui,calcLeftEdgeDeltas:t,calcMiddleDeltas:function(n,e,r,o,u,i,c){return t(n,r,o,u,i,c)},calcRightEdgeDeltas:function(t,e,r,o,u,i){if(i)return n(t,r,o,u)
var c=ui(t,r,o,u)
return ei(t.slice(0,r)).concat([c])},calcRedestributedWidths:function(n,t,e,r){if(r){var o=(t+e)/t,u=M(n,(function(n){return n/o}))
return{delta:100*o-100,newSizes:u}}return{delta:e,newSizes:n}}}},ai=function(){var n=function(n,t,e,r,o){var u=ii(n,r>=0?e:t,r,o)
return ri(n,t,e+1,[u,-u],ei)}
return{resizeTable:function(n,t,e){e&&n(t)},clampTableDelta:function(n,t,e,r,o){if(o){if(e>=0)return e
var u=L(n,(function(n,t){return n+t-r}),0)
return Math.max(-u,e)}return ui(n,t,e,r)},calcLeftEdgeDeltas:n,calcMiddleDeltas:function(t,e,r,o,u,i){return n(t,r,o,u,i)},calcRightEdgeDeltas:function(n,t,e,r,o,u){if(u)return ei(n)
var i=r/n.length
return M(n,d(i))},calcRedestributedWidths:function(n,t,e,r){return{delta:0,newSizes:n}}}},li=function(n,t){var e=R.from(n.dom.documentElement).map(Pn.fromDom).getOr(n)
return{parent:d(e),view:d(n),origin:d(ao(0,0)),isResizable:t}},fi=function(n,t,e){return{parent:d(t),view:d(n),origin:d(ao(0,0)),isResizable:e}},si=Ar([{invalid:["raw"]},{pixels:["value"]},{percent:["value"]}]),mi=function(n,t,e){var r=e.substring(0,e.length-n.length),o=parseFloat(r)
return r===o.toString()?t(o):si.invalid(e)},di=X(X({},si),{from:function(n){return un(n,"%")?mi("%",si.percent,n):un(n,"px")?mi("px",si.pixels,n):si.invalid(n)}}),gi=function(n,t,e){return n.fold((function(){return t}),(function(n){return function(n,t,e){var r=e/t
return M(n,(function(n){return di.from(n).fold((function(){return n}),(function(n){return n*r+"px"}),(function(n){return n/100*e+"px"}))}))}(t,e,n)}),(function(n){return function(n,t){return M(n,(function(n){return di.from(n).fold((function(){return n}),(function(n){return n/t*100+"%"}),(function(n){return n+"%"}))}))}(t,e)}))},pi=function(n,t,e){var r=di.from(e),o=H(n,(function(n){return"0px"===n}))?function(n,t){var e=n.fold((function(){return d("")}),(function(n){return d(n/t+"px")}),(function(){return d(100/t+"%")}))
return B(t,e)}(r,n.length):gi(r,n,t)
return hi(o)},vi=function(n,t){return 0===n.length?t:z(n,(function(n,t){return di.from(t).fold(d(0),g,g)+n}),0)},bi=function(n,t){return di.from(n).fold(d(n),(function(n){return n+t+"px"}),(function(n){return n+t+"%"}))},hi=function(n){if(0===n.length)return n
var t=z(n,(function(n,t){var e=di.from(t).fold((function(){return{value:t,remainder:0}}),(function(n){return function(n,t){var e=Math.floor(n)
return{value:e+t,remainder:n-e}}(n,"px")}),(function(n){return{value:n+"%",remainder:0}}))
return{output:[e.value].concat(n.output),remainder:n.remainder+e.remainder}}),{output:[],remainder:0}),e=t.output
return e.slice(0,e.length-1).concat([bi(e[e.length-1],Math.round(t.remainder))])},wi=di.from,yi=function(n){return wi(n).fold(d("px"),d("px"),d("%"))},Ci=function(n,t,e){var r=_e.fromTable(n),o=r.all,u=_e.justCells(r),i=_e.justColumns(r)
t.each((function(t){var e=yi(t),o=$r(n),c=function(n,t){return Qo(n,t,Xo,Zo)}(r,n),a=pi(c,o,t)
_e.hasColumns(r)?function(n,t,e){E(t,(function(t,r){var o=vi([n[r]],fe())
Zt(t.element,"width",o+e)}))}(a,i,e):function(n,t,e){E(t,(function(t){var r=n.slice(t.column,t.colspan+t.column),o=vi(r,fe())
Zt(t.element,"width",o+e)}))}(a,u,e),Zt(n,"width",t)})),e.each((function(t){var e=yi(t),i=oo(n),c=function(n,t,e){return tu(n,t,e,Yo,Zo)}(r,n,To);(function(n,t,e,r){E(e,(function(t){var e=n.slice(t.row,t.rowspan+t.row),o=vi(e,se())
Zt(t.element,"height",o+r)})),E(t,(function(t,e){Zt(t.element,"height",n[e])}))})(pi(c,i,t),o,u,e),Zt(n,"height",t)}))},Si=function(n){return Fo(n).exists((function(n){return Bo.test(n)}))},Ti=function(n){return Fo(n).exists((function(n){return Mo.test(n)}))},xi=function(n){return Fo(n).isNone()},Ri=function(n){return _e.fromTable(n).grid},Di=function(n){var t=[]
return{bind:function(n){if(void 0===n)throw new Error("Event bind error: undefined handler")
t.push(n)},unbind:function(n){t=N(t,(function(t){return t!==n}))},trigger:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o={}
E(n,(function(n,t){o[n]=e[t]})),E(t,(function(n){n(o)}))}}},Oi=function(n){return{registry:Un(n,(function(n){return{bind:n.bind,unbind:n.unbind}})),trigger:Un(n,(function(n){return n.trigger}))}},Ai=function(n){return n.slice(0).sort()},ki=function(n,t,e){if(0===t.length)throw new Error("You must specify at least one required field.")
var o
return function(n,t){if(!u(t))throw new Error("The "+n+" fields must be an array. Was: "+t+".")
E(t,(function(t){if(!r(t))throw new Error("The value "+t+" in the "+n+" fields was not a string.")}))}("required",t),o=Ai(t),_(o,(function(n,t){return t<o.length-1&&n===o[t+1]})).each((function(n){throw new Error("The field: "+n+" occurs more than once in the combined fields: ["+o.join(", ")+"].")})),function(r){var o=Hn(r)
H(t,(function(n){return k(o,n)}))||function(n,t){throw new Error("All required keys ("+Ai(n).join(", ")+") were not specified. Specified keys were: "+Ai(t).join(", ")+".")}(t,o),n(t,o)
var u=N(t,(function(n){return!e.validate(r[n],n)}))
return u.length>0&&function(n,t){throw new Error("All values need to be of type: "+t+". Keys ("+Ai(n).join(", ")+") were not.")}(u,e.label),r}},Ii=function(n,t){var e=N(t,(function(t){return!k(n,t)}))
e.length>0&&function(n){throw new Error("Unsupported keys for object: "+Ai(n).join(", "))}(e)},Bi=function(n){return function(n,t){return ki(n,t,{validate:f,label:"function"})}(Ii,n)},Mi=Bi(["compare","extract","mutate","sink"]),Ei=Bi(["element","start","stop","destroy"]),Pi=Bi(["forceDrop","drop","move","delayDrop"]),Ni=function(){var n=R.none(),t=Oi({move:Di(["info"])})
return{onEvent:function(e,r){r.extract(e).each((function(e){(function(t,e){var r=n.map((function(n){return t.compare(n,e)}))
return n=R.some(e),r})(r,e).each((function(n){t.trigger.move(n)}))}))},reset:function(){n=R.none()},events:t.registry}},zi=function(){var n,t=(n=Oi({move:Di(["info"])}),{onEvent:m,reset:m,events:n.registry}),e=Ni(),r=t
return{on:function(){r.reset(),r=e},off:function(){r.reset(),r=t},isOn:function(){return r===e},onEvent:function(n,t){r.onEvent(n,t)},events:e.events}},Li=function(n,t,e){var r,o,u,c,a=!1,l=Oi({start:Di([]),stop:Di([])}),f=zi(),s=function(){g.stop(),f.isOn()&&(f.off(),l.trigger.stop())},m=(r=s,o=200,u=null,{cancel:c=function(){i(u)||(clearTimeout(u),u=null)},throttle:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]
c(),u=setTimeout((function(){u=null,r.apply(null,n)}),o)}})
f.events.move.bind((function(e){t.mutate(n,e.info)}))
var d=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
a&&n.apply(null,t)}},g=t.sink(Pi({forceDrop:s,drop:d(s),move:d((function(n){m.cancel(),f.onEvent(n,t)})),delayDrop:d(m.throttle)}),e)
return{element:g.element,go:function(n){g.start(n),f.on(),l.trigger.start()},on:function(){a=!0},off:function(){a=!1},destroy:function(){g.destroy()},events:l.registry}},_i=function(n){var t,e,r=Pn.fromDom(function(n){if(Tt()&&l(n.target)){var t=Pn.fromDom(n.target)
if(lt(t)&&Ot(t)&&n.composed&&n.composedPath){var e=n.composedPath()
if(e)return G(e)}}return R.from(n.target)}(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(t=u,e=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t(e.apply(null,n))})
return function(n,t,e,r,o,u,i){return{target:n,x:t,y:e,stop:r,prevent:o,kill:u,raw:i}}(r,n.clientX,n.clientY,o,u,i,n)},Wi=function(n,t,e,r,o){var u=function(n,t){return function(e){n(e)&&t(_i(e))}}(e,r)
return n.dom.addEventListener(t,u,o),{unbind:v(ji,n,t,u,o)}},ji=function(n,t,e,r){n.dom.removeEventListener(t,e,r)},Fi=C,Hi=function(n,t,e){return function(n,t,e,r){return Wi(n,t,e,r,!1)}(n,t,Fi,e)},Vi=_i,qi=function(n,t){var e=Vt(n,t)
return void 0===e||""===e?[]:e.split(" ")},Ui=function(n){return void 0!==n.dom.classList},Gi=function(n,t){return function(n,t,e){var r=qi(n,t).concat([e])
return Ft(n,t,r.join(" ")),!0}(n,"class",t)},$i=function(n,t){Ui(n)?n.dom.classList.add(t):Gi(n,t)},Ki=function(n,t){return Ui(n)&&n.dom.classList.contains(t)},Xi=function(n){var t=n.replace(/\./g,"-")
return{resolve:function(n){return t+"-"+n}}},Yi=Xi("ephox-dragster"),Ji=Yi.resolve,Qi=Mi({compare:function(n,t){return ao(t.left-n.left,t.top-n.top)},extract:function(n){return R.some(ao(n.x,n.y))},sink:function(n,t){var e=function(n){var t=X({layerClass:Ji("blocker")},n),e=Pn.fromTag("div")
return Ft(e,"role","presentation"),ne(e,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),$i(e,Ji("blocker")),$i(e,t.layerClass),{element:d(e),destroy:function(){rr(e)}}}(t),r=Hi(e.element(),"mousedown",n.forceDrop),o=Hi(e.element(),"mouseup",n.drop),u=Hi(e.element(),"mousemove",n.move),i=Hi(e.element(),"mouseout",n.delayDrop)
return Ei({element:e.element,start:function(n){Qe(n,e.element())},stop:function(){rr(e.element())},destroy:function(){e.destroy(),o.unbind(),u.unbind(),i.unbind(),r.unbind()}})},mutate:function(n,t){n.mutate(t.left,t.top)}}),Zi=function(n){return Wt(n,"[contenteditable]")},nc=function(n,t){return void 0===t&&(t=!1),!Mn().browser.isIE()&&At(n)?n.dom.isContentEditable:Zi(n).fold(d(t),(function(n){return"true"===tc(n)}))},tc=function(n){return n.dom.contentEditable},ec=Xi("ephox-snooker"),rc=ec.resolve,oc=function(){var n=Oi({drag:Di(["xDelta","yDelta","target"])}),t=R.none(),e=function(){var n=Oi({drag:Di(["xDelta","yDelta"])})
return{mutate:function(t,e){n.trigger.drag(t,e)},events:n.registry}}()
e.events.drag.bind((function(e){t.each((function(t){n.trigger.drag(e.xDelta,e.yDelta,t)}))}))
return{assign:function(n){t=R.some(n)},get:function(){return t},mutate:e.mutate,events:n.registry}},uc=rc("resizer-bar"),ic=rc("resizer-rows"),cc=rc("resizer-cols"),ac=function(n){var t=Et(n.parent(),"."+uc)
E(t,rr)},lc=function(n,t,e){var r=n.origin()
E(t,(function(t){t.each((function(t){var o=e(r,t)
$i(o,uc),Qe(n.parent(),o)}))}))},fc=function(n,t,e,r){lc(n,t,(function(n,t){var o,u,i,c,a,l,f=(o=t.col,u=t.x-n.left,i=e.top-n.top,c=7,a=r,l=Pn.fromTag("div"),ne(l,{position:"absolute",left:u-c/2+"px",top:i+"px",height:a+"px",width:c+"px"}),Ht(l,{"data-column":o,role:"presentation"}),l)
return $i(f,cc),f}))},sc=function(n,t,e,r){lc(n,t,(function(n,t){var o=function(n,t,e,r,o){var u=Pn.fromTag("div")
return ne(u,{position:"absolute",left:t+"px",top:e-o/2+"px",height:o+"px",width:r+"px"}),Ht(u,{"data-row":n,role:"presentation"}),u}(t.row,e.left-n.left,t.y-n.top,r,7)
return $i(o,ic),o}))},mc=function(n,t,e,r,o){var u=fo(e),i=t.isResizable,c=r.length>0?To.positions(r,e):[],a=c.length>0?function(n,t){return F(n.all,(function(n,e){return t(n.element)?[e]:[]}))}(n,i):[],l=N(c,(function(n,t){return I(a,(function(n){return t===n}))}))
sc(t,l,u,Kr(e))
var f=o.length>0?Oo.positions(o,e):[],s=f.length>0?function(n,t){var e=[]
return B(n.grid.columns,(function(r){_e.getColumnAt(n,r).map((function(n){return n.element})).forall(t)&&e.push(r)})),N(e,(function(e){var r=_e.filterItems(n,(function(n){return n.column===e}))
return H(r,(function(n){return t(n.element)}))}))}(n,i):[],m=N(f,(function(n,t){return I(s,(function(n){return t===n}))}))
fc(t,m,u,uo(e))},dc=function(n,t){if(ac(n),n.isResizable(t)){var e=_e.fromTable(t),r=Zr(e),o=Jr(e)
mc(e,n,t,r,o)}},gc=function(n,t){var e=Et(n.parent(),"."+uc)
E(e,t)},pc=function(n){gc(n,(function(n){Zt(n,"display","none")}))},vc=function(n){gc(n,(function(n){Zt(n,"display","block")}))},bc=rc("resizer-bar-dragging"),hc=function(n){var t=oc(),e=function(n,t){void 0===t&&(t={})
var e=void 0!==t.mode?t.mode:Qi
return Li(n,e,t)}(t,{}),r=R.none(),o=function(n,t){return R.from(Vt(n,t))}
t.events.drag.bind((function(n){o(n.target,"data-row").each((function(t){var e=le(n.target,"top")
Zt(n.target,"top",e+n.yDelta+"px")})),o(n.target,"data-column").each((function(t){var e=le(n.target,"left")
Zt(n.target,"left",e+n.xDelta+"px")}))}))
var u=function(n,t){return le(n,t)-ue(n,"data-initial-"+t,0)}
e.events.stop.bind((function(){t.get().each((function(t){r.each((function(e){o(t,"data-row").each((function(n){var r=u(t,"top")
Ut(t,"data-initial-top"),f.trigger.adjustHeight(e,r,parseInt(n,10))})),o(t,"data-column").each((function(n){var r=u(t,"left")
Ut(t,"data-initial-left"),f.trigger.adjustWidth(e,r,parseInt(n,10))})),dc(n,e)}))}))}))
var i=function(r,o){f.trigger.startAdjust(),t.assign(r),Ft(r,"data-initial-"+o,le(r,o)),$i(r,bc),Zt(r,"opacity","0.2"),e.go(n.parent())},c=Hi(n.parent(),"mousedown",(function(n){var t
t=n.target,Ki(t,ic)&&i(n.target,"top"),function(n){return Ki(n,cc)}(n.target)&&i(n.target,"left")})),a=function(t){return _n(t,n.view())},l=Hi(n.view(),"mouseover",(function(t){var e;(e=t.target,Wt(e,"table",a).filter(nc)).fold((function(){At(t.target)&&ac(n)}),(function(t){r=R.some(t),dc(n,t)}))})),f=Oi({adjustHeight:Di(["table","delta","row"]),adjustWidth:Di(["table","delta","column"]),startAdjust:Di([])})
return{destroy:function(){c.unbind(),l.unbind(),e.destroy(),ac(n)},refresh:function(t){dc(n,t)},on:e.on,off:e.off,hideBars:v(pc,n),showBars:v(vc,n),events:f.registry}},wc=function(n,t,e){var r=To,o=Oo,u=hc(n),i=Oi({beforeResize:Di(["table","type"]),afterResize:Di(["table","type"]),startDrag:Di([])})
return u.events.adjustHeight.bind((function(n){var t=n.table
i.trigger.beforeResize(t,"row")
var e=r.delta(n.delta,t)
ti(t,e,n.row,r),i.trigger.afterResize(t,"row")})),u.events.startAdjust.bind((function(n){i.trigger.startDrag()})),u.events.adjustWidth.bind((function(n){var r=n.table
i.trigger.beforeResize(r,"col")
var u=o.delta(n.delta,r),c=e(r)
ni(r,u,n.column,t,c),i.trigger.afterResize(r,"col")})),{on:u.on,off:u.off,hideBars:u.hideBars,showBars:u.showBars,destroy:u.destroy,events:i.registry}},yc=function(n,t){return n.fire("newrow",{node:t})},Cc=function(n,t){return n.fire("newcell",{node:t})},Sc=function(n,t,e){n.fire("TableModified",X(X({},e),{table:t}))},Tc={structure:!1,style:!0},xc={structure:!0,style:!1},Rc={structure:!0,style:!0},Dc={"border-collapse":"collapse",width:"100%"},Oc=B(5,(function(n){var t=n+1+"px"
return{title:t,value:t}})),Ac=M(["Solid","Dotted","Dashed","Double","Groove","Ridge","Inset","Outset","None","Hidden"],(function(n){return{title:n,value:n.toLowerCase()}})),kc={border:"1"},Ic="preservetable",Bc=function(n){return n.getParam("table_sizing_mode","auto")},Mc=function(n){return n.getParam("table_responsive_width")},Ec=function(n){return n.getParam("table_border_widths",Oc,"array")},Pc=function(n){return n.getParam("table_border_styles",Ac,"array")},Nc=function(n){return n.getParam("table_default_attributes",kc,"object")},zc=function(n){return n.getParam("table_default_styles",function(n){var t
if(qc(n)){var e=n.dom,r=null!==(t=e.getParent(n.selection.getStart(),e.isBlock))&&void 0!==t?t:n.getBody(),o=Xr(Pn.fromDom(r))
return X(X({},Dc),{width:o+"px"})}return Uc(n)?$n(Dc,(function(n,t){return"width"!==t})):Dc}(n),"object")},Lc=function(n){return n.getParam("table_cell_advtab",!0,"boolean")},_c=function(n){return n.getParam("table_row_advtab",!0,"boolean")},Wc=function(n){return n.getParam("table_advtab",!0,"boolean")},jc=function(n){return n.getParam("table_style_by_css",!1,"boolean")},Fc=function(n){return n.getParam("table_cell_class_list",[],"array")},Hc=function(n){return n.getParam("table_class_list",[],"array")},Vc=function(n){return"relative"===Bc(n)||!0===Mc(n)},qc=function(n){return"fixed"===Bc(n)||!1===Mc(n)},Uc=function(n){return"responsive"===Bc(n)},Gc=function(n){return n.getParam("table_use_colgroups",!1,"boolean")},$c=function(n){var t="section",e=n.getParam("table_header_type",t,"string")
return k(["section","cells","sectionCells","auto"],e)?e:t},Kc=function(n){var t=n.getParam("table_column_resizing",Ic,"string")
return _(["preservetable","resizetable"],(function(n){return n===t})).getOr(Ic)},Xc=function(n){return"preservetable"===Kc(n)},Yc=function(n){return"resizetable"===Kc(n)},Jc=function(n){var t=n.getParam("table_clone_elements")
return r(t)?R.some(t.split(/[ ,]/)):Array.isArray(t)?R.some(t):R.none()},Qc=function(n){return n.getParam("table_background_color_map",[],"array")},Zc=function(n){return n.getParam("table_border_color_map",[],"array")},na=function(n,t){return Vc(n)?au(t):qc(n)?cu(t):iu(t)},ta=function(n){Ut(n,"width")},ea=function(n){var t=Go(n)
Ci(n,R.some(t),R.none()),ta(n)},ra=function(n){var t=function(n){return $r(n)+"px"}(n)
Ci(n,R.some(t),R.none()),ta(n)},oa=function(n){oe(n,"width")
var t=ve(n),e=t.length>0?t:pe(n)
E(e,(function(n){oe(n,"width"),ta(n)})),ta(n)},ua=function(){var n=Pn.fromTag("div")
return ne(n,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"}),Qe(kt(Pn.fromDom(document)),n),n},ia="bar-",ca=function(n){return"false"!==Vt(n,"data-mce-resize")},aa=function(n){var t,e,o=R.none(),u=R.none(),i=R.none(),c=function(n){return"TABLE"===n.nodeName},a=function(){return u},l=function(t){return na(n,t)},f=function(){return Xc(n)?ai():ci()},s=function(r,o,u){var i=un(o,"e")
if(""===e&&ea(r),u!==t&&""!==e){Zt(r,"width",e)
var c=f(),a=l(r),s=Xc(n)||i?function(n){return Ri(n).columns}(r)-1:0
ni(r,u-t,s,c,a)}else if(function(n){return/^(\d+(\.\d+)?)%$/.test(n)}(e)){var m=parseFloat(e.replace("%",""))
Zt(r,"width",u*m/t+"%")}(function(n){return/^(\d+(\.\d+)?)px$/.test(n)})(e)&&function(n){var t=_e.fromTable(n)
_e.hasColumns(t)||E(pe(n),(function(n){var t=te(n,"width")
Zt(n,"width",t),Ut(n,"width")}))}(r)}
return n.on("init",(function(){var t=function(n,t){return n.inline?fi(Ou(n),ua(),t):li(Pn.fromDom(n.getDoc()),t)}(n,ca)
if(i=R.some(t),function(n){var t=n.getParam("object_resizing",!0)
return r(t)?"table"===t:t}(n)&&function(n){return n.getParam("table_resize_bars",!0,"boolean")}(n)){var e=f(),c=wc(t,e,l)
c.on(),c.events.startDrag.bind((function(t){o=R.some(n.selection.getRng())})),c.events.beforeResize.bind((function(t){var e=t.table.dom;(function(n,t,e,r,o){n.fire("ObjectResizeStart",{target:t,width:e,height:r,origin:o})})(n,e,Au(e),ku(e),ia+t.type)})),c.events.afterResize.bind((function(t){var e=t.table,r=e.dom
Mu(e),o.each((function(t){n.selection.setRng(t),n.focus()})),function(n,t,e,r,o){n.fire("ObjectResized",{target:t,width:e,height:r,origin:o})}(n,r,Au(r),ku(r),ia+t.type),n.undoManager.add()})),u=R.some(c)}})),n.on("ObjectResizeStart",(function(r){var o=r.target
if(c(o)){var u=Pn.fromDom(o)
E(n.dom.select(".mce-clonedresizable"),(function(t){n.dom.addClass(t,"mce-"+Kc(n)+"-columns")})),!Ti(u)&&qc(n)?ra(u):!Si(u)&&Vc(n)&&ea(u),xi(u)&&on(r.origin,ia)&&ea(u),t=r.width,e=Uc(n)?"":function(n,t){var e=n.dom.getStyle(t,"width")||n.dom.getAttrib(t,"width")
return R.from(e).filter(an)}(n,o).getOr("")}})),n.on("ObjectResized",(function(t){var e=t.target
if(c(e)){var r=Pn.fromDom(e),o=t.origin
on(o,"corner-")&&s(r,o,t.width),Mu(r),Sc(n,r.dom,Tc)}})),n.on("SwitchMode",(function(){a().each((function(t){n.mode.isReadOnly()?t.hideBars():t.showBars()}))})),{lazyResize:a,lazyWire:function(){return i.getOr(li(Pn.fromDom(n.getBody()),ca))},destroy:function(){u.each((function(n){n.destroy()})),i.each((function(t){(function(n,t){n.inline&&rr(t.parent())})(n,t)}))}}},la=function(n,t){return{element:n,offset:t}},fa=function(n,t,e){return n.property().isText(t)&&0===n.property().getText(t).trim().length||n.property().isComment(t)?e(t).bind((function(t){return fa(n,t,e).orThunk((function(){return R.some(t)}))})):R.none()},sa=function(n,t){return n.property().isText(t)?n.property().getText(t).length:n.property().children(t).length},ma=function(n,t){var e=fa(n,t,n.query().prevSibling).getOr(t)
if(n.property().isText(e))return la(e,sa(n,e))
var r=n.property().children(e)
return r.length>0?ma(n,r[r.length-1]):la(e,sa(n,e))},da=ma,ga=fr(),pa=function(n,t){1===ie(n,"colspan")&&function(n){return Fo(n).bind((function(n){return Io(n,["fixed","relative","empty"])}))}(n).each((function(e){var r=e.value/2
Uo(n,r,e.unit),Uo(t,r,e.unit)}))},va=dt("th"),ba=function(n){return H(n,(function(n){return va(n.element)}))},ha=function(n,t){return n&&t?"sectionCells":n?"section":"cells"},wa=function(n){var t="thead"===n.section,e=$t(ya(n.cells),"th")
return t||e?{type:"header",subType:ha(t,e)}:"tfoot"===n.section?{type:"footer"}:{type:"body"}},ya=function(n){var t=N(n,(function(n){return va(n.element)}))
return 0===t.length?R.some("td"):t.length===n.length?R.some("th"):R.none()},Ca=function(n,t,e){return rt(e(n.element,t),!0,n.isLocked)},Sa=function(n,t){return n.section!==t?ot(n.element,n.cells,t,n.isNew):n},Ta=function(){return{transformRow:Sa,transformCell:function(n,t,e){var r=e(n.element,t),o="td"!==ut(r)?function(n,t){var e=_r(n,t)
Xe(n,e)
var r=yt(n)
return tr(e,r),rr(n),e}(r,"td"):r
return rt(o,n.isNew,n.isLocked)}}},xa=function(){return{transformRow:Sa,transformCell:Ca}},Ra=function(){return{transformRow:function(n,t){return Sa(n,"thead"===t?"tbody":t)},transformCell:Ca}},Da=function(n,t){switch(function(n){return K(n.all,(function(n){var t=wa(n)
return"header"===t.type?R.from(t.subType):R.none()}))}(_e.fromTable(n)).getOr(t)){case"section":return Ta()
case"sectionCells":return xa()
case"cells":return Ra()}},Oa=Ta,Aa=xa,ka=Ra,Ia=function(){return{transformRow:g,transformCell:Ca}},Ba=function(n,t,e,r){e===r?Ut(n,t):Ft(n,t,e)},Ma=function(n,t,e){$(Mt(n,t)).fold((function(){return Je(n,e)}),(function(n){return Ye(n,e)}))},Ea=function(n,t){var e=[],r=[],o=function(n){return M(n,(function(n){n.isNew&&e.push(n.element)
var t=n.element
return er(t),E(n.cells,(function(n){n.isNew&&r.push(n.element),Ba(n.element,"colspan",n.colspan,1),Ba(n.element,"rowspan",n.rowspan,1),Qe(t,n.element)})),t}))},u=function(n){return F(n,(function(n){return M(n.cells,(function(n){return Ba(n.element,"span",n.colspan,1),n.element}))}))},i=function(t,e){var r=function(n,t){var e=Lt(n,t).getOrThunk((function(){var e=Pn.fromTag(t,gt(n).dom)
return"thead"===t?Ma(n,"caption,colgroup",e):"colgroup"===t?Ma(n,"caption",e):Qe(n,e),e}))
return er(e),e}(n,e),i=("colgroup"===e?u:o)(t)
tr(r,i)},c=function(t,e){t.length>0?i(t,e):function(t){Lt(n,t).each(rr)}(e)},a=[],l=[],f=[],s=[]
return E(t,(function(n){switch(n.section){case"thead":a.push(n)
break
case"tbody":l.push(n)
break
case"tfoot":f.push(n)
break
case"colgroup":s.push(n)}})),c(s,"colgroup"),c(a,"thead"),c(l,"tbody"),c(f,"tfoot"),{newRows:e,newCells:r}},Pa=function(n,t){if(0===n.length)return 0
var e=n[0]
return W(n,(function(n){return!t(e.element,n.element)})).getOr(n.length)},Na=function(n,t,e,r){var o=function(n,t){return n[t]}(n,t),u="colgroup"===o.section
return{colspan:Pa(o.cells.slice(e),r),rowspan:u?1:Pa(function(n,t){return M(n,(function(n){return Oe(n,t)}))}(n.slice(t),e),r)}},za=function(n,t){var e=M(n,(function(n){return M(n.cells,y)}))
return M(n,(function(r,o){var u=F(r.cells,(function(r,u){if(!1===e[o][u]){var i=Na(n,o,u,t)
return function(n,t,r,o){for(var u=n;u<n+r;u++)for(var i=t;i<t+o;i++)e[u][i]=!0}(o,u,i.rowspan,i.colspan),[(c=r.element,a=i.rowspan,l=i.colspan,f=r.isNew,{element:c,rowspan:a,colspan:l,isNew:f})]}return[]
var c,a,l,f}))
return function(n,t,e,r){return{element:n,cells:t,section:e,isNew:r}}(r.element,u,r.section,r.isNew)}))},La=function(n,t,e){var r=[]
E(n.colgroups,(function(o){for(var u=[],i=0;i<n.grid.columns;i++){var c=_e.getColumnAt(n,i).map((function(n){return rt(n.element,e,!1)})).getOrThunk((function(){return rt(t.colGap(),!0,!1)}))
u.push(c)}r.push(ot(o.element,u,"colgroup",e))}))
for(var o=0;o<n.grid.rows;o++){for(var u=[],i=0;i<n.grid.columns;i++){var c=_e.getAt(n,o,i).map((function(n){return rt(n.element,e,n.isLocked)})).getOrThunk((function(){return rt(t.gap(),!0,!1)}))
u.push(c)}var a=n.all[o],l=ot(a.element,u,a.section,e)
r.push(l)}return r},_a=function(n){return za(n,_n)},Wa=function(n,t){return K(n.all,(function(n){return _(n.cells,(function(n){return _n(t,n.element)}))}))},ja=function(n,t,e){var r=M(t.selection,(function(t){return ge(t).bind((function(t){return Wa(n,t)})).filter(e)})),o=Kt(r)
return Yt(o.length>0,o)},Fa=function(n,t,e,r,o){return function(u,i,c,a,l){var f=_e.fromTable(i),s=R.from(null==l?void 0:l.section).getOrThunk(Ia)
return t(f,c).map((function(t){var e=function(n,t){return La(n,t,!1)}(f,a),r=n(e,t,_n,o(a),s),u=Pe(r.grid)
return{info:t,grid:_a(r.grid),cursor:r.cursor,lockedColumns:u}})).bind((function(n){var t=Ea(i,n.grid),o=R.from(null==l?void 0:l.sizing).getOrThunk((function(){return iu(i)})),c=R.from(null==l?void 0:l.resize).getOrThunk(ai)
return e(i,n.grid,n.info,{sizing:o,resize:c,section:s}),r(i),dc(u,i),Ut(i,Me),n.lockedColumns.length>0&&Ft(i,Me,n.lockedColumns.join(",")),R.some({cursor:n.cursor,newRows:t.newRows,newCells:t.newCells})}))}},Ha=function(n,t){return ja(n,t,C).map((function(n){return{cells:n,generators:t.generators,clipboard:t.clipboard}}))},Va=function(n,t){return ja(n,t,C)},qa=function(n,t){return ja(n,t,(function(n){return!n.isLocked}))},Ua=function(n,t){return H(t,(function(t){return function(n,t){return Wa(n,t).exists((function(n){return!n.isLocked}))}(n,t)}))},Ga=function(n,t){return function(n,t){return t.mergable}(0,t).filter((function(t){return Ua(n,t.cells)}))},$a=function(n,t){return function(n,t){return t.unmergable}(0,t).filter((function(t){return Ua(n,t)}))},Ka=function(n,t,e,r){for(var o=Ie(n).rows,u=!0,i=0;i<o.length;i++)for(var c=0;c<ke(o[0]);c++){var a=o[i],l=Oe(a,c),f=e(l.element,t)
!0===f&&!1===u?Re(a,c,rt(r(),!0,l.isLocked)):!0===f&&(u=!1)}return n},Xa=function(n,t,e,r){var o=Ie(n).rows
if(t>0&&t<o.length){var u=function(n,t){return L(n,(function(n,e){return I(n,(function(n){return t(n.element,e.element)}))?n:n.concat([e])}),[])}(o[t-1].cells,e)
E(u,(function(n){for(var u=R.none(),i=t;i<o.length;i++)for(var c=function(t){var c=o[i],a=Oe(c,t)
e(a.element,n.element)&&(u.isNone()&&(u=R.some(r())),u.each((function(n){Re(c,t,rt(n,!0,a.isLocked))})))},a=0;a<ke(o[0]);a++)c(a)}))}return n},Ya=function(n){return{isValue:C,isError:y,getOr:d(n),getOrThunk:d(n),getOrDie:d(n),or:function(t){return Ya(n)},orThunk:function(t){return Ya(n)},fold:function(t,e){return e(n)},map:function(t){return Ya(t(n))},mapError:function(t){return Ya(n)},each:function(t){t(n)},bind:function(t){return t(n)},exists:function(t){return t(n)},forall:function(t){return t(n)},toOptional:function(){return R.some(n)}}},Ja=function(n){return{isValue:y,isError:C,getOr:g,getOrThunk:function(n){return n()},getOrDie:function(){return(t=String(n),function(){throw new Error(t)})()
var t},or:g,orThunk:function(n){return n()},fold:function(t,e){return t(n)},map:function(t){return Ja(n)},mapError:function(t){return Ja(t(n))},each:m,bind:function(t){return Ja(n)},exists:y,forall:C,toOptional:R.none}},Qa={value:Ya,error:Ja,fromOption:function(n,t){return n.fold((function(){return Ja(t)}),Ya)}},Za=function(n,t){return{rowDelta:0,colDelta:ke(n[0])-ke(t[0])}},nl=function(n,t){return{rowDelta:n.length-t.length,colDelta:0}},tl=function(n,t,e,r){var o="colgroup"===t.section?e.col:e.cell
return B(n,(function(n){return rt(o(),!0,r(n))}))},el=function(n,t,e,r){var o=n[n.length-1]
return n.concat(B(t,(function(){var n="colgroup"===o.section?e.colgroup:e.row,t=Be(o,n,g),u=tl(t.cells.length,t,e,(function(n){return Qn(r,n.toString())}))
return De(t,u)})))},rl=function(n,t,e,r){return M(n,(function(n){var o=tl(t,n,e,y)
return Te(n,r,o)}))},ol=function(n,t,e){var r=t.colDelta<0?rl:g,o=t.rowDelta<0?el:g,u=Pe(n),i=ke(n[0]),c=I(u,(function(n){return n===i-1})),a=r(n,Math.abs(t.colDelta),e,c?i-1:i),l=Pe(a)
return o(a,Math.abs(t.rowDelta),e,V(l,C))},ul=function(n,t,e,r){var o=v(r,Oe(n[t],e).element),u=n[t]
return n.length>1&&ke(u)>1&&(e>0&&o(Ae(u,e-1))||e<u.cells.length-1&&o(Ae(u,e+1))||t>0&&o(Ae(n[t-1],e))||t<n.length-1&&o(Ae(n[t+1],e)))},il=function(n,t,e){return N(e,(function(e){return e>=n.column&&e<=ke(t[0])+n.column}))},cl=function(n,t,e,r,o){var u=Pe(t),i=function(n,t,e){var r=ke(t[0]),o=Ie(t).cols.length+n.row,u=B(r-n.column,(function(t){return t+n.column}))
return{row:o,column:_(u,(function(n){return H(e,(function(t){return t!==n}))})).getOr(r-1)}}(n,t,u),c=Ie(e).rows,a=il(i,c,u)
return function(n,t,e){if(n.row>=t.length||n.column>ke(t[0]))return Qa.error("invalid start address out of table bounds, row: "+n.row+", column: "+n.column)
var r=t.slice(n.row),o=r[0].cells.slice(n.column),u=ke(e[0]),i=e.length
return Qa.value({rowDelta:r.length-i,colDelta:o.length-u})}(i,t,c).map((function(n){var e=X(X({},n),{colDelta:n.colDelta-a.length}),u=ol(t,e,r),l=Pe(u),f=il(i,c,l)
return function(n,t,e,r,o,u){for(var i=n.row,c=n.column,a=i+e.length,l=c+ke(e[0])+u.length,f=V(u,C),s=i;s<a;s++)for(var m=0,d=c;d<l;d++)if(f[d])m++
else{ul(t,s,d,o)&&Ka(t,Ae(t[s],d),o,r.cell)
var g=d-c-m,p=Oe(e[s-i],g),v=p.element,b=r.replace(v)
Re(t[s],d,rt(b,!0,p.isLocked))}return t}(i,u,c,r,o,f)}))},al=function(n,t,e,r,o){(function(n,t,e,r){t>0&&t<n[0].cells.length&&E(n,(function(n){var o=n.cells[t-1],u=n.cells[t]
e(u.element,o.element)&&Re(n,t,rt(r(),!0,u.isLocked))}))})(t,n,o,r.cell)
var u=nl(e,t),i=ol(e,u,r),c=nl(t,i),a=ol(t,c,r)
return M(a,(function(t,e){return Te(t,n,i[e].cells)}))},ll=function(n,t,e,r,o){Xa(t,n,o,r.cell)
var u=Pe(t),i=Za(t,e),c=X(X({},i),{colDelta:i.colDelta-u.length}),a=ol(t,c,r),l=Ie(a),f=l.cols,s=l.rows,m=Pe(a),d=Za(e,t),g=X(X({},d),{colDelta:d.colDelta+m.length}),p=function(n,t,e){return M(n,(function(n){return L(e,(function(e,r){var o=tl(1,n,t,C)[0]
return xe(e,r,o)}),n)}))}(e,r,m),v=ol(p,g,r)
return f.concat(s.slice(0,n)).concat(v).concat(s.slice(n,s.length))},fl=function(n,t,e,r,o){var u=Ie(n),i=u.rows,c=u.cols,a=i.slice(0,t),l=i.slice(t),f=function(n,t,e,r){return Be(n,(function(n){return r(n,e)}),t)}(i[e],(function(n,e){return t>0&&t<i.length&&r(Ae(i[t-1],e),Ae(i[t],e))?Oe(i[t],e):rt(o(n.element,r),!0,n.isLocked)}),r,o)
return c.concat(a).concat([f]).concat(l)},sl=function(n,t,e,r,o){return M(n,(function(n){var u=t>0&&t<ke(n)&&r(Ae(n,t-1),Ae(n,t)),i=function(n,t,e,r,o,u,i){if("colgroup"!==e&&r)return Oe(n,t)
var c=Oe(n,o)
return rt(i(c.element,u),!0,!1)}(n,t,n.section,u,e,r,o)
return xe(n,t,i)}))},ml=function(n,t,e,r){return function(n,t,e,r){return void 0!==Ae(n[t],e)&&t>0&&r(Ae(n[t-1],e),Ae(n[t],e))}(n,t,e,r)||function(n,t,e){return t>0&&e(Ae(n,t-1),Ae(n,t))}(n[t],e,r)},dl=function(n,t,e,r){var o=function(n){return function(n){return"row"===n?ae(t):ce(t)}(n)?n+"group":n}
return n?va(t)?o(e):null:r&&va(t)?o("row"===e?"col":"row"):null},gl=function(n,t,e){return rt(e(n.element,t),!0,n.isLocked)},pl=function(n,t,e,r,o,u,i){return M(n,(function(n,c){return function(n,t){var e=n.cells,r=M(e,t)
return ot(n.element,r,n.section,n.isNew)}(n,(function(n,a){if(function(n){return I(t,(function(t){return e(n.element,t.element)}))}(n)){var l=i(n,c,a)?o(n,e,r):n
return u(l,c,a).each((function(n){var t,e
t=l.element,e={scope:R.from(n)},qn(e,(function(n,e){n.fold((function(){Ut(t,e)}),(function(n){jt(t.dom,e,n)}))}))})),l}return n}))}))},vl=function(n,t,e){return F(n,(function(r,o){return ml(n,o,t,e)?[]:[Oe(r,t)]}))},bl=function(n,t,e,r,o){var u=Ie(n).rows,i=F(t,(function(n){return vl(u,n,r)})),c=M(n,(function(n){return ba(n.cells)})),a=function(n,t){return H(t,g)&&ba(n)?C:function(n,e,r){return!("th"===ut(n.element)&&t[e])}}(i,c),l=function(n,t){return function(e,r){return R.some(dl(n,e.element,"row",t[r]))}}(e,c)
return pl(n,i,r,o,gl,l,a)},hl=function(n,t,e,r,o,u,i){var c=Ie(n),a=c.cols,l=c.rows,f=l[t[0]],s=F(t,(function(n){return function(n,t,e){var r=n[t]
return F(r.cells,(function(r,o){return ml(n,t,o,e)?[]:[r]}))}(l,n,o)})),m=M(f.cells,(function(n,t){return ba(vl(l,t,o))})),d=Y([],l,!0)
E(t,(function(n){d[n]=i.transformRow(l[n],e)}))
var p=a.concat(d),v=function(n,t){return H(t,g)&&ba(n.cells)?C:function(n,e,r){return!("th"===ut(n.element)&&t[r])}}(f,m),b=function(n,t){return function(e,r,o){return R.some(dl(n,e.element,"col",t[o]))}}(r,m)
return pl(p,s,o,u,i.transformCell,b,v)},wl=function(n,t,e,r){var o=Ie(n).rows,u=M(t,(function(n){return Oe(o[n.row],n.column)}))
return pl(n,u,e,r,gl,R.none,C)},yl=function(n){return L(n,(function(n,t){return I(n,(function(n){return n.column===t.column}))?n:n.concat([t])}),[]).sort((function(n,t){return n.column-t.column}))},Cl=dt("col"),Sl=dt("colgroup"),Tl=function(n){return"tr"===ut(n)||Sl(n)},xl=function(n){return{element:n,colspan:ue(n,"colspan",1),rowspan:ue(n,"rowspan",1)}},Rl=function(n){return qt(n,"scope").map((function(n){return n.substr(0,3)}))},Dl=function(n,t){void 0===t&&(t=xl)
var e=function(e){if(Tl(e))return Sl((o={element:e}).element)?n.colgroup(o):n.row(o)
var o,u=function(t){return Cl(t.element)?n.col(t):n.cell(t)}(t(e))
return r=R.some({item:e,replacement:u}),u},r=R.none()
return{getOrInit:function(n,t){return r.fold((function(){return e(n)}),(function(r){return t(n,r.item)?r.replacement:e(n)}))}}},Ol=function(n){return function(t){var e=[],r=function(r){var o="td"===n?{scope:null}:{},u=t.replace(r,n,o)
return e.push({item:r,sub:u}),u}
return{replaceOrInit:function(n,t){return Tl(n)||Cl(n)?n:function(n,t){return _(e,(function(e){return t(e.item,n)}))}(n,t).fold((function(){return r(n)}),(function(e){return t(n,e.item)?e.sub:r(n)}))}}}},Al=function(n){return{unmerge:function(t){var e=Rl(t)
return e.each((function(n){return Ft(t,"scope",n)})),function(){var r=n.cell({element:t,colspan:1,rowspan:1})
return oe(r,"width"),oe(t,"width"),e.each((function(n){return Ft(r,"scope",n)})),r}},merge:function(n){return oe(n[0],"width"),function(){var t=Kt(M(n,Rl))
if(0===t.length)return R.none()
var e=t[0],r=["row","col"]
return I(t,(function(n){return n!==e&&k(r,n)}))?R.none():R.from(e)}().fold((function(){return Ut(n[0],"scope")}),(function(t){return Ft(n[0],"scope",t+"group")})),d(n[0])}}},kl=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"],Il=fr(),Bl=function(n){return function(n,t){var e=n.property().name(t)
return k(kl,e)}(Il,n)},Ml=function(n){return function(n,t){var e=n.property().name(t)
return k(["ol","ul"],e)}(Il,n)},El=function(n){return function(n,t){return k(["br","img","hr","input"],n.property().name(t))}(Il,n)},Pl=function(n){var t,e=function(n){return"br"===ut(n)},r=function(n){return pu(n).bind((function(t){var r=wt(t).map((function(n){return!!Bl(n)||!!El(n)&&"img"!==ut(n)})).getOr(!1)
return vt(t).map((function(o){return!0===r||function(n){return"li"===ut(n)||Nt(n,Ml).isSome()}(o)||e(t)||Bl(o)&&!_n(n,o)?[]:[Pn.fromTag("br")]}))})).getOr([])},o=0===(t=F(n,(function(n){var t=yt(n)
return function(n){return H(n,(function(n){return e(n)||ft(n)&&0===ir(n).trim().length}))}(t)?[]:t.concat(r(n))}))).length?[Pn.fromTag("br")]:t
er(n[0]),tr(n[0],o)},Nl=function(n){return nc(n,!0)},zl=function(n){0===pe(n).length&&rr(n)},Ll=function(n,t){return{grid:n,cursor:t}},_l=function(n,t,e){var r,o,u=Ie(n).rows
return R.from(null===(o=null===(r=u[t])||void 0===r?void 0:r.cells[e])||void 0===o?void 0:o.element).filter(Nl).orThunk((function(){return function(n){return K(n,(function(n){return K(n.cells,(function(n){var t=n.element
return Yt(Nl(t),t)}))}))}(u)}))},Wl=function(n,t,e){var r=_l(n,t,e)
return Ll(n,r)},jl=function(n){return L(n,(function(n,t){return I(n,(function(n){return n.row===t.row}))?n:n.concat([t])}),[]).sort((function(n,t){return n.row-t.row}))},Fl=function(n,t){return function(e,r,o,u,i){var c=jl(r),a=M(c,(function(n){return n.row})),l=hl(e,a,n,t,o,u.replaceOrInit,i)
return Wl(l,r[0].row,r[0].column)}},Hl=Fl("thead",!0),Vl=Fl("tbody",!1),ql=Fl("tfoot",!1),Ul=function(n,t,e){var r=function(n,t){return ye(n,(function(){return t}))}(n,e.section),o=_e.generate(r)
return La(o,t,!0)},Gl=function(n,t,e,r){return function(n,t,e,r){var o=_e.generate(t),u=r.getWidths(o,r)
Zu(o,u,r)}(0,t,0,r.sizing)},$l=function(n,t,e,r){return function(n,t,e,r,o){var u=_e.generate(t),i=r.getWidths(u,r),c=r.pixelWidth(),a=o.calcRedestributedWidths(i,c,e.pixelDelta,r.isRelative),l=a.newSizes,f=a.delta
Zu(u,l,r),r.adjustTableWidth(f)}(0,t,e,r.sizing,r.resize)},Kl=function(n,t){return I(t,(function(n){return 0===n.column&&n.isLocked}))},Xl=function(n,t){return I(t,(function(t){return t.column+t.colspan>=n.grid.columns&&t.isLocked}))},Yl=function(n,t){var e=Jr(n),r=yl(t)
return L(r,(function(n,t){return n+e[t.column].map(Kr).getOr(0)}),0)},Jl=function(n){return function(t,e){return Va(t,e).filter((function(e){return!(n?Kl:Xl)(t,e)})).map((function(n){return{details:n,pixelDelta:Yl(t,n)}}))}},Ql=function(n){return function(t,e){return Ha(t,e).filter((function(e){return!(n?Kl:Xl)(t,e.cells)}))}},Zl=Ol("th"),nf=Ol("td"),tf=Fa((function(n,t,e,r){var o=t[0].row,u=jl(t),i=z(u,(function(n,t){return{grid:fl(n.grid,o,t.row+n.delta,e,r.getOrInit),delta:n.delta+1}}),{grid:n,delta:0}).grid
return Wl(i,o,t[0].column)}),Va,m,m,Dl),ef=Fa((function(n,t,e,r){var o=jl(t),u=o[o.length-1],i=u.row+u.rowspan,c=z(o,(function(n,t){return fl(n,i,t.row,e,r.getOrInit)}),n)
return Wl(c,i,t[0].column)}),Va,m,m,Dl),rf=Fa((function(n,t,e,r){var o=t.details,u=yl(o),i=u[0].column,c=z(u,(function(n,t){return{grid:sl(n.grid,i,t.column+n.delta,e,r.getOrInit),delta:n.delta+1}}),{grid:n,delta:0}).grid
return Wl(c,o[0].row,i)}),Jl(!0),$l,m,Dl),of=Fa((function(n,t,e,r){var o=t.details,u=o[o.length-1],i=u.column+u.colspan,c=yl(o),a=z(c,(function(n,t){return sl(n,i,t.column,e,r.getOrInit)}),n)
return Wl(a,o[0].row,i)}),Jl(!1),$l,m,Dl),uf=Fa((function(n,t,e,r){var o=yl(t.details),u=function(n,t){return F(n,(function(n){var e=n.cells,r=z(t,(function(n,t){return t>=0&&t<n.length?n.slice(0,t).concat(n.slice(t+1)):n}),e)
return r.length>0?[ot(n.element,r,n.section,n.isNew)]:[]}))}(n,M(o,(function(n){return n.column}))),i=u.length>0?u[0].cells.length-1:0
return Wl(u,o[0].row,Math.min(o[0].column,i))}),(function(n,t){return qa(n,t).map((function(t){return{details:t,pixelDelta:-Yl(n,t)}}))}),$l,zl,Dl),cf=Fa((function(n,t,e,r){var o=jl(t),u=function(n,t,e){var r=Ie(n),o=r.rows
return r.cols.concat(o.slice(0,t)).concat(o.slice(e+1))}(n,o[0].row,o[o.length-1].row),i=u.length>0?u.length-1:0
return Wl(u,Math.min(t[0].row,i),t[0].column)}),Va,m,zl,Dl),af=Fa((function(n,t,e,r){var o=yl(t),u=M(o,(function(n){return n.column})),i=bl(n,u,!0,e,r.replaceOrInit)
return Wl(i,t[0].row,t[0].column)}),qa,m,m,Zl),lf=Fa((function(n,t,e,r){var o=yl(t),u=M(o,(function(n){return n.column})),i=bl(n,u,!1,e,r.replaceOrInit)
return Wl(i,t[0].row,t[0].column)}),qa,m,m,nf),ff=Fa(Hl,qa,m,m,Zl),sf=Fa(Vl,qa,m,m,nf),mf=Fa(ql,qa,m,m,nf),df=Fa((function(n,t,e,r){var o=wl(n,t,e,r.replaceOrInit)
return Wl(o,t[0].row,t[0].column)}),qa,m,m,Zl),gf=Fa((function(n,t,e,r){var o=wl(n,t,e,r.replaceOrInit)
return Wl(o,t[0].row,t[0].column)}),qa,m,m,nf),pf=Fa((function(n,t,e,r){var o=t.cells
Pl(o)
var u=function(n,t,e,r){var o=Ie(n).rows
if(0===o.length)return n
for(var u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++){var c=o[u],a=Oe(c,i).isLocked
Re(c,i,rt(r(),!1,a))}return n}(n,t.bounds,0,r.merge(o))
return Ll(u,R.from(o[0]))}),Ga,Gl,m,Al),vf=Fa((function(n,t,e,r){var o=z(t,(function(n,t){return Ka(n,t,e,r.unmerge(t))}),n)
return Ll(o,R.from(t[0]))}),$a,Gl,m,Al),bf=Fa((function(n,t,e,r){var o=function(n,t){var e=_e.fromTable(n)
return La(e,t,!0)}(t.clipboard,t.generators),u=function(n,t){return{row:n,column:t}}(t.row,t.column)
return cl(u,n,o,t.generators,e).fold((function(){return Ll(n,R.some(t.element))}),(function(n){return Wl(n,t.row,t.column)}))}),(function(n,t){return ge(t.element).bind((function(e){return Wa(n,e).map((function(n){return X(X({},n),{generators:t.generators,clipboard:t.clipboard})}))}))}),Gl,m,Dl),hf=Fa((function(n,t,e,r){var o=Ie(n).rows,u=t.cells[0].column,i=o[t.cells[0].row],c=Ul(t.clipboard,t.generators,i),a=al(u,n,c,t.generators,e)
return Wl(a,t.cells[0].row,t.cells[0].column)}),Ql(!0),m,m,Dl),wf=Fa((function(n,t,e,r){var o=Ie(n).rows,u=t.cells[t.cells.length-1].column+t.cells[t.cells.length-1].colspan,i=o[t.cells[0].row],c=Ul(t.clipboard,t.generators,i),a=al(u,n,c,t.generators,e)
return Wl(a,t.cells[0].row,t.cells[0].column)}),Ql(!1),m,m,Dl),yf=Fa((function(n,t,e,r){var o=Ie(n).rows,u=t.cells[0].row,i=o[u],c=Ul(t.clipboard,t.generators,i),a=ll(u,n,c,t.generators,e)
return Wl(a,t.cells[0].row,t.cells[0].column)}),Ha,m,m,Dl),Cf=Fa((function(n,t,e,r){var o=Ie(n).rows,u=t.cells[t.cells.length-1].row+t.cells[t.cells.length-1].rowspan,i=o[t.cells[0].row],c=Ul(t.clipboard,t.generators,i),a=ll(u,n,c,t.generators,e)
return Wl(a,t.cells[0].row,t.cells[0].column)}),Ha,m,m,Dl),Sf=function(n,t){var e=_e.fromTable(n)
return Va(e,t).bind((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan,u=j(M(e.all,(function(n){return N(n.cells,(function(n){return n.column>=r&&n.column<o}))})))
return ya(u)})).getOr("")},Tf=function(n,t){var e=_e.fromTable(n)
return Va(e,t).bind(ya).getOr("")},xf=function(n,t){var e=_e.fromTable(n)
return Va(e,t).bind((function(n){var t=n[n.length-1],r=n[0].row,o=t.row+t.rowspan
return function(n){var t=M(n,(function(n){return wa(n).type})),e=k(t,"header"),r=k(t,"footer")
if(e||r){var o=k(t,"body")
return!e||o||r?e||o||!r?R.none():R.some("footer"):R.some("header")}return R.some("body")}(e.all.slice(r,o))})).getOr("")},Rf=function(n,t,e){var r=function(n){return"table"===ut(Ou(n))},o=Jc(n),u=Yc(n)?m:pa,i=function(t){switch($c(n)){case"section":return Oa()
case"sectionCells":return Aa()
case"cells":return ka()
default:return Da(t,"section")}},c=function(e,r){return r.cursor.fold((function(){var r=pe(e)
return G(r).filter(At).map((function(r){t.clear(e)
var o=n.dom.createRng()
return o.selectNode(r.dom),n.selection.setRng(o),Ft(r,"data-mce-selected","1"),o}))}),(function(r){var o=da(ga,r),u=n.dom.createRng()
return u.setStart(o.element.dom,o.offset),u.setEnd(o.element.dom,o.offset),n.selection.setRng(u),t.clear(e),R.some(u)}))},a=function(t,e,r,u,a){return function(l,f,s){void 0===s&&(s=!1),Mu(l)
var m=u(),d=Pn.fromDom(n.getDoc()),g=xu(r,d,o),p={sizing:na(n,l),resize:Yc(n)?ci():ai(),section:i(l)}
return e(l)?t(m,l,f,g,p).bind((function(t){E(t.newRows,(function(t){yc(n,t.dom)})),E(t.newCells,(function(t){Cc(n,t.dom)}))
var e=c(l,t)
return At(l)&&(Mu(l),s||Sc(n,l.dom,a)),e.map((function(n){return{rng:n,effect:a}}))})):R.none()}}
return{deleteRow:a(cf,(function(t){return!1===r(n)||Ri(t).rows>1}),m,e,xc),deleteColumn:a(uf,(function(t){return!1===r(n)||Ri(t).columns>1}),m,e,xc),insertRowsBefore:a(tf,C,m,e,xc),insertRowsAfter:a(ef,C,m,e,xc),insertColumnsBefore:a(rf,C,u,e,xc),insertColumnsAfter:a(of,C,u,e,xc),mergeCells:a(pf,C,m,e,xc),unmergeCells:a(vf,C,m,e,xc),pasteColsBefore:a(hf,C,m,e,xc),pasteColsAfter:a(wf,C,m,e,xc),pasteRowsBefore:a(yf,C,m,e,xc),pasteRowsAfter:a(Cf,C,m,e,xc),pasteCells:a(bf,C,m,e,Rc),makeCellsHeader:a(df,C,m,e,xc),unmakeCellsHeader:a(gf,C,m,e,xc),makeColumnsHeader:a(af,C,m,e,xc),unmakeColumnsHeader:a(lf,C,m,e,xc),makeRowsHeader:a(ff,C,m,e,xc),makeRowsBody:a(sf,C,m,e,xc),makeRowsFooter:a(mf,C,m,e,xc),getTableRowType:xf,getTableCellType:Tf,getTableColType:Sf}},Df={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},colGroups:!1},Of=function(n){var t=Pn.fromTag("colgroup")
return B(n,(function(){return Qe(t,Pn.fromTag("col"))})),t},Af=function(n,t,e,r){return B(n,(function(n){return function(n,t,e,r){for(var o=Pn.fromTag("tr"),u=0;u<n;u++){var i=r<t||u<e?Pn.fromTag("th"):Pn.fromTag("td")
u<e&&Ft(i,"scope","row"),r<t&&Ft(i,"scope","col"),Qe(i,Pn.fromTag("br")),Qe(o,i)}return o}(t,e,r,n)}))},kf=function(n,t){n.selection.select(t.dom,!0),n.selection.collapse(!0)},If=function(n,t,e,o,u){var i=zc(n),c={styles:i,attributes:Nc(n),colGroups:Gc(n)}
return n.undoManager.ignore((function(){var r=function(n,t,e,r,o,u){void 0===u&&(u=Df)
var i=Pn.fromTag("table"),c="cells"!==o
ne(i,u.styles),Ht(i,u.attributes),u.colGroups&&Qe(i,Of(t))
var a=Math.min(n,e)
if(c&&e>0){var l=Pn.fromTag("thead")
Qe(i,l)
var f=Af(e,t,"sectionCells"===o?a:0,r)
tr(l,f)}var s=Pn.fromTag("tbody")
Qe(i,s)
var m=Af(c?n-a:n,t,c?0:e,r)
return tr(s,m),i}(e,t,u,o,$c(n),c)
Ft(r,"data-mce-id","__mce")
var i=function(n){var t=Pn.fromTag("div"),e=Pn.fromDom(n.dom.cloneNode(!0))
return Qe(t,e),function(n){return n.dom.innerHTML}(t)}(r)
n.insertContent(i),n.addVisual()})),_t(Ou(n),'table[data-mce-id="__mce"]').map((function(t){return qc(n)?ra(t):Uc(n)?oa(t):(Vc(n)||function(n){return r(n)&&-1!==n.indexOf("%")}(i.width))&&ea(t),Mu(t),Ut(t,"data-mce-id"),function(n,t){E(Et(t,"tr"),(function(t){yc(n,t.dom),E(Et(t,"th,td"),(function(t){Cc(n,t.dom)}))}))}(n,t),function(n,t){_t(t,"td,th").each(v(kf,n))}(n,t),t.dom})).getOr(null)},Bf=function(n,t,e,r,o){void 0===r&&(r={})
var u=function(n){return s(n)&&n>0}
if(u(t)&&u(e)){var i=r.headerRows||0,c=r.headerColumns||0
return If(n,e,t,c,i)}return console.error(o),null},Mf=function(n){return function(){return n().fold((function(){return[]}),(function(n){return M(n,(function(n){return n.dom}))}))}},Ef=function(n){return function(t){var e=t.length>0?R.some(Du(t)):R.none()
n(e)}},Pf=function(n){return function(t,e,r){void 0===r&&(r={})
var o=Bf(n,e,t,r,"Invalid values for insertTable - rows and columns values are required to insert a table.")
return n.undoManager.add(),o}},Nf=function(n,t,e){var r=ue(n,t,1)
1===e||r<=1?Ut(n,t):Ft(n,t,Math.min(e,r))},zf=function(n,t){var e=_e.fromTable(n)
return qa(e,t).map((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan,u=function(n,t,e){if(_e.hasColumns(n)){var r=N(_e.justColumns(n),(function(n){return n.column>=t&&n.column<e})),o=M(r,(function(n){var r=Lr(n.element)
return Nf(r,"span",e-t),r})),u=Pn.fromTag("colgroup")
return tr(u,o),[u]}return[]}(e,r,o),i=function(n,t,e){return M(n.all,(function(n){var r=N(n.cells,(function(n){return n.column>=t&&n.column<e})),o=M(r,(function(n){var r=Lr(n.element)
return Nf(r,"colspan",e-t),r})),u=Pn.fromTag("tr")
return tr(u,o),u}))}(e,r,o)
return Y(Y([],u,!0),i,!0)}))},Lf=function(n,t,e){var r=_e.fromTable(n)
return Va(r,t).bind((function(n){var t=La(r,e,!1),o=Ie(t).rows.slice(n[0].row,n[n.length-1].row+n[n.length-1].rowspan),u=F(o,(function(n){var t=N(n.cells,(function(n){return!n.isLocked}))
return t.length>0?[X(X({},n),{cells:t})]:[]})),i=_a(u)
return Yt(i.length>0,i)})).map((function(n){return function(n){return M(n,(function(n){var t=zr(n.element)
return E(n.cells,(function(n){var e=Lr(n.element)
Ba(e,"colspan",n.colspan,1),Ba(e,"rowspan",n.rowspan,1),Qe(t,e)})),t}))}(n)}))},_f=tinymce.util.Tools.resolve("tinymce.util.Tools"),Wf=function(n,t,e){return function(t,r){for(var o=0;o<r.length;o++){var u=n.getStyle(r[o],e)
if(void 0===t&&(t=u),t!==u)return""}return t}(undefined,n.select("td,th",t))},jf=function(n,t,e){e&&n.formatter.apply("align"+e,{},t)},Ff=function(n,t){_f.each("left center right".split(" "),(function(e){n.formatter.remove("align"+e,{},t)}))},Hf=[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}],Vf=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,qf=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,Uf=function(n){return(t=n,e="#",on(t,e)?function(n,t){return n.substring(t)}(t,e.length):t).toUpperCase()
var t,e},Gf=function(n){return function(n){return Vf.test(n)||qf.test(n)}(n)?R.some({value:Uf(n)}):R.none()},$f=function(n){var t=n.toString(16)
return(1===t.length?"0"+t:t).toUpperCase()},Kf=function(n){return function(n){return{value:n}}($f(n.red)+$f(n.green)+$f(n.blue))},Xf=/^rgb\((\d+),\s*(\d+),\s*(\d+)\)/,Yf=/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d?(?:\.\d+)?)\)/,Jf=function(n,t,e,r){return{red:n,green:t,blue:e,alpha:r}},Qf=function(n,t,e,r){var o=parseInt(n,10),u=parseInt(t,10),i=parseInt(e,10),c=parseFloat(r)
return Jf(o,u,i,c)},Zf=function(n){return Gf(n).orThunk((function(){return function(n){if("transparent"===n)return R.some(Jf(0,0,0,0))
var t=Xf.exec(n)
if(null!==t)return R.some(Qf(t[1],t[2],t[3],"1"))
var e=Yf.exec(n)
return null!==e?R.some(Qf(e[1],e[2],e[3],e[4])):R.none()}(n).map(Kf)})).getOrThunk((function(){var t=document.createElement("canvas")
t.height=1,t.width=1
var e=t.getContext("2d")
e.clearRect(0,0,t.width,t.height),e.fillStyle="#FFFFFF",e.fillStyle=n,e.fillRect(0,0,1,1)
var r=e.getImageData(0,0,1,1).data,o=r[0],u=r[1],i=r[2],c=r[3]
return Kf(Jf(o,u,i,c))}))},ns=function(n){var t=n
return{get:function(){return t},set:function(n){t=n}}},ts=function(n){var t=ns(R.none()),e=function(){return t.get().each(n)}
return{clear:function(){e(),t.set(R.none())},isSet:function(){return t.get().isSome()},get:function(){return t.get()},set:function(n){e(),t.set(R.some(n))}}},es=function(){var n=ts(m)
return X(X({},n),{on:function(t){return n.get().each(t)}})},rs=function(n,t,e,r){return function(o){var u=ts((function(n){return n.unbind()})),i=!an(r),c=function(){var c=Uu(t),a=function(t){return n.formatter.match(e,{value:r},t.dom,i)}
i?(o.setActive(!I(c,a)),u.set(n.formatter.formatChanged(e,(function(n){return o.setActive(!n)}),!0))):(o.setActive(H(c,a)),u.set(n.formatter.formatChanged(e,o.setActive,!1,{value:r})))}
return n.initialized?c():n.on("init",c),u.clear}},os=function(n){return Zn(n,"menu")},us=function(n){return M(n,(function(n){var t=n.text||n.title
return os(n)?{text:t,items:us(n.menu)}:{text:t,value:n.value}}))},is=function(n,t,e,r,o){return M(e,(function(e){var u=e.text||e.title
return os(e)?{type:"nestedmenuitem",text:u,getSubmenuItems:function(){return is(n,t,e.menu,r,o)}}:{text:u,type:"togglemenuitem",onAction:function(){return o(e.value)},onSetup:rs(n,t,r,e.value)}}))},cs=function(n,t){return function(e){var r
n.execCommand("mceTableApplyCellStyle",!1,((r={})[t]=e,r))}},as=function(n){return F(n,(function(n){return os(n)?[X(X({},n),{menu:as(n.menu)})]:an(n.value)?[n]:[]}))},ls=function(n,t,e,r,o){return function(u){return u(is(n,t,e,r,o))}},fs=function(n,t,e){var r=M(t,(function(n){return{text:n.title,value:"#"+Zf(n.value).value,type:"choiceitem"}}))
return[{type:"fancymenuitem",fancytype:"colorswatch",initData:{colors:r.length>0?r:void 0,allowCustomColors:!1},onAction:function(t){var r,o="remove"===t.value?"":t.value
n.execCommand("mceTableApplyCellStyle",!1,((r={})[e]=o,r))}}]},ss=function(n){return function(){var t="header"===n.queryCommandValue("mceTableRowType")?"body":"header"
n.execCommand("mceTableRowType",!1,{type:t})}},ms=function(n){return function(){var t="th"===n.queryCommandValue("mceTableColType")?"td":"th"
n.execCommand("mceTableColType",!1,{type:t})}},ds=[{name:"width",type:"input",label:"Width"},{name:"height",type:"input",label:"Height"},{name:"celltype",type:"listbox",label:"Cell type",items:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{name:"scope",type:"listbox",label:"Scope",items:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{name:"halign",type:"listbox",label:"Horizontal align",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{name:"valign",type:"listbox",label:"Vertical align",items:Hf}],gs=function(n){return ds.concat(function(n){var t=us(Fc(n))
return t.length>0?R.some({name:"class",type:"listbox",label:"Class",items:t}):R.none()}(n).toArray())},ps=function(n,t){var e=[{name:"borderstyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""}].concat(us(Pc(n)))},{name:"bordercolor",type:"colorinput",label:"Border color"},{name:"backgroundcolor",type:"colorinput",label:"Background color"}]
return{title:"Advanced",name:"advanced",items:"cell"===t?[{name:"borderwidth",type:"input",label:"Border width"}].concat(e):e}},vs=function(n){return function(t,e){var r=t.dom
return{setAttrib:function(t,o){n&&!o||r.setAttrib(e,t,o)},setStyle:function(t,o){n&&!o||r.setStyle(e,t,o)},setFormat:function(r,o){n&&!o||(""===o?t.formatter.remove(r,{value:null},e,!0):t.formatter.apply(r,{value:o},e))}}}},bs={normal:vs(!1),ifTruthy:vs(!0)},hs=function(n){return function(t){return on(t,"rgb")?n.toHex(t):t}},ws=function(n,t){var e=Pn.fromDom(t)
return{borderwidth:re(e,"border-width").getOr(""),borderstyle:re(e,"border-style").getOr(""),bordercolor:re(e,"border-color").map(hs(n)).getOr(""),backgroundcolor:re(e,"background-color").map(hs(n)).getOr("")}},ys=function(n){var t=n[0],e=n.slice(1)
return E(e,(function(n){E(Hn(t),(function(e){qn(n,(function(n,r){var o=t[e]
""!==o&&e===r&&o!==n&&(t[e]="")}))}))})),t},Cs=function(n,t,e,r){return _(n,(function(n){return!a(e.formatter.matchNode(r,t+n))})).getOr("")},Ss=v(Cs,["left","center","right"],"align"),Ts=v(Cs,["top","middle","bottom"],"valign"),xs=function(n){return be(Pn.fromDom(n)).map((function(t){var e={selection:Du(n.cells)}
return xf(t,e)})).getOr("")},Rs=function(n,t){var e=_e.fromTable(n),r=_e.justCells(e),o=N(r,(function(n){return I(t,(function(t){return _n(n.element,t)}))}))
return M(o,(function(n){return{element:n.element.dom,column:_e.getColumnAt(e,n.column).map((function(n){return n.element.dom}))}}))},Ds=function(n,t,e){var r=1===t.length
E(t,(function(t){var o=t.element,u=r?bs.normal(n,o):bs.ifTruthy(n,o);(function(n,t,e){n.setAttrib("scope",e.scope),n.setAttrib("class",e.class),n.setStyle("height",Bu(e.height)),t.setStyle("width",Bu(e.width))})(u,t.column.map((function(t){return r?bs.normal(n,t):bs.ifTruthy(n,t)})).getOr(u),e),Lc(n)&&function(n,t){n.setFormat("tablecellbackgroundcolor",t.backgroundcolor),n.setFormat("tablecellbordercolor",t.bordercolor),n.setFormat("tablecellborderstyle",t.borderstyle),n.setFormat("tablecellborderwidth",Bu(t.borderwidth))}(u,e),r&&(Ff(n,o),function(n,t){_f.each("top middle bottom".split(" "),(function(e){n.formatter.remove("valign"+e,{},t)}))}(n,o)),e.halign&&jf(n,o,e.halign),e.valign&&function(n,t,e){e&&n.formatter.apply("valign"+e,{},t)}(n,o,e.valign)}))},Os=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){(function(n,t,e,r){var o=$n(r,(function(n,t){return e[t]!==n}))
Yn(o)>0&&t.length>=1&&be(t[0]).each((function(e){var u=Rs(e,t),i=Yn($n(o,(function(n,t){return"scope"!==t&&"celltype"!==t})))>0,c=Qn(o,"celltype");(i||Qn(o,"scope"))&&Ds(n,u,r),c&&function(n,t){n.execCommand("mceTableCellType",!1,{type:t.celltype,no_events:!0})}(n,r),Sc(n,e.dom,{structure:c,style:i})}))})(n,t,e,o),n.focus()}))},As=function(n,t){var e=be(t[0]).map((function(e){return M(Rs(e,t),(function(t){return function(n,t,e,r){var o,u=n.dom,i=r.getOr(t),c=function(n,t){return u.getStyle(n,t)||u.getAttrib(n,t)}
return X({width:c(i,"width"),height:c(t,"height"),scope:u.getAttrib(t,"scope"),celltype:(o=t,o.nodeName.toLowerCase()),class:u.getAttrib(t,"class",""),halign:Ss(n,t),valign:Ts(n,t)},e?ws(u,t):{})}(n,t.element,Lc(n),t.column)}))}))
return ys(e.getOrDie())},ks=function(n,t){var e=Uu(t)
if(0!==e.length){var r=As(n,e),o={type:"tabpanel",tabs:[{title:"General",name:"general",items:gs(n)},ps(n,"cell")]},u={type:"panel",items:[{type:"grid",columns:2,items:gs(n)}]}
n.windowManager.open({title:"Cell Properties",size:"normal",body:Lc(n)?o:u,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:r,onSubmit:v(Os,n,e,r)})}},Is=[{type:"listbox",name:"type",label:"Row type",items:[{text:"Header",value:"header"},{text:"Body",value:"body"},{text:"Footer",value:"footer"}]},{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height",type:"input"}],Bs=function(n){return Is.concat(function(n){var t=us(function(n){return n.getParam("table_row_class_list",[],"array")}(n))
return t.length>0?R.some({name:"class",type:"listbox",label:"Class",items:t}):R.none()}(n).toArray())},Ms=function(n,t,e,r){var o=1===t.length
E(t,(function(t){var u=o?bs.normal(n,t):bs.ifTruthy(n,t);(function(n,t){n.setAttrib("class",t.class),n.setStyle("height",Bu(t.height))})(u,e),_c(n)&&function(n,t){n.setStyle("background-color",t.backgroundcolor),n.setStyle("border-color",t.bordercolor),n.setStyle("border-style",t.borderstyle)}(u,e),e.align!==r.align&&(Ff(n,t),jf(n,t,e.align))}))},Es=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){(function(n,t,e,r){var o=$n(r,(function(n,t){return e[t]!==n}))
if(Yn(o)>0){var u=Qn(o,"type"),i=!u||Yn(o)>1
i&&Ms(n,t,r,e),u&&function(n,t){n.execCommand("mceTableRowType",!1,{type:t.type,no_events:!0})}(n,r),be(Pn.fromDom(t[0])).each((function(t){return Sc(n,t.dom,{structure:u,style:i})}))}})(n,t,e,o),n.focus()}))},Ps=function(n){var t,e,r,o,u=(t=Eu(n),e=ju.selected,r=qu(t),o=r.bind((function(n){return be(n)})).map((function(n){return he(n)})),Xt(r,o,(function(n,t){return N(t,(function(t){return I(Du(t.dom.cells),(function(t){return"1"===Vt(t,e)||_n(t,n)}))}))})).getOr([]))
if(0!==u.length){var i=M(u,(function(t){return function(n,t,e){var r=n.dom
return X({height:r.getStyle(t,"height")||r.getAttrib(t,"height"),class:r.getAttrib(t,"class",""),type:xs(t),align:Ss(n,t)},e?ws(r,t):{})}(n,t.dom,_c(n))})),c=ys(i),a={type:"tabpanel",tabs:[{title:"General",name:"general",items:Bs(n)},ps(n,"row")]},l={type:"panel",items:[{type:"grid",columns:2,items:Bs(n)}]}
n.windowManager.open({title:"Row Properties",size:"normal",body:_c(n)?a:l,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:c,onSubmit:v(Es,n,M(u,(function(n){return n.dom})),c)})}},Ns=function(n,t,e){var r=e?[{type:"input",name:"cols",label:"Cols",inputMode:"numeric"},{type:"input",name:"rows",label:"Rows",inputMode:"numeric"}]:[],o=function(n){return n.getParam("table_appearance_options",!0,"boolean")}(n)?[{type:"input",name:"cellspacing",label:"Cell spacing",inputMode:"numeric"},{type:"input",name:"cellpadding",label:"Cell padding",inputMode:"numeric"},{type:"input",name:"border",label:"Border width"},{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[],u=t.length>0?[{type:"listbox",name:"class",label:"Class",items:t}]:[]
return r.concat([{type:"input",name:"width",label:"Width"},{type:"input",name:"height",label:"Height"}]).concat(o).concat([{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]}]).concat(u)},zs=function(n,t,e,o){if("TD"===t.tagName||"TH"===t.tagName)r(e)?n.setStyle(t,e,o):n.setStyle(t,e)
else if(t.children)for(var u=0;u<t.children.length;u++)zs(n,t.children[u],e,o)},Ls=function(n,t,e,r){var o=n.dom,u=r.getData(),i=$n(u,(function(n,t){return e[t]!==n}))
r.close(),""===u.class&&delete u.class,n.undoManager.transact((function(){if(!t){var e=parseInt(u.cols,10)||1,r=parseInt(u.rows,10)||1
t=If(n,e,r,0,0)}if(Yn(i)>0){(function(n,t,e){var r=n.dom,o={},u={}
if(o.class=e.class,u.height=Bu(e.height),r.getAttrib(t,"width")&&!jc(n)?o.width=function(n){return n?n.replace(/px$/,""):""}(e.width):u.width=Bu(e.width),jc(n)?(u["border-width"]=Bu(e.border),u["border-spacing"]=Bu(e.cellspacing)):(o.border=e.border,o.cellpadding=e.cellpadding,o.cellspacing=e.cellspacing),jc(n)&&t.children)for(var i=0;i<t.children.length;i++)zs(r,t.children[i],{"border-width":Bu(e.border),padding:Bu(e.cellpadding)}),Wc(n)&&zs(r,t.children[i],{"border-color":e.bordercolor})
Wc(n)&&(u["background-color"]=e.backgroundcolor,u["border-color"]=e.bordercolor,u["border-style"]=e.borderstyle),o.style=r.serializeStyle(X(X({},zc(n)),u)),r.setAttribs(t,X(X({},Nc(n)),o))})(n,t,u)
var c=o.select("caption",t)[0];(c&&!u.caption||!c&&u.caption)&&n.execCommand("mceTableToggleCaption"),""===u.align?Ff(n,t):jf(n,t,u.align)}if(n.focus(),n.addVisual(),Yn(i)>0){var a=Qn(i,"caption"),l=!a||Yn(i)>1
Sc(n,t,{structure:a,style:l})}}))},_s=function(n,t){var e,r=n.dom,o=function(n,t){var e,r,o,u,i=zc(n),c=Nc(n),a=t?(e=n.dom,{borderstyle:Jn(i,"border-style").getOr(""),bordercolor:hs(e)(Jn(i,"border-color").getOr("")),backgroundcolor:hs(e)(Jn(i,"background-color").getOr(""))}):{}
return X(X(X(X(X(X({},{height:"",width:"100%",cellspacing:"",cellpadding:"",caption:!1,class:"",align:"",border:""}),i),c),a),(u=i["border-width"],jc(n)&&u?{border:u}:Jn(c,"border").fold((function(){return{}}),(function(n){return{border:n}})))),(r=Jn(i,"border-spacing").or(Jn(c,"cellspacing")).fold((function(){return{}}),(function(n){return{cellspacing:n}})),o=Jn(i,"border-padding").or(Jn(c,"cellpadding")).fold((function(){return{}}),(function(n){return{cellpadding:n}})),X(X({},r),o)))}(n,Wc(n))
!1===t?(e=r.getParent(n.selection.getStart(),"table",n.getBody()))?o=function(n,t,e){var r=n.dom,o=jc(n)?r.getStyle(t,"border-spacing")||r.getAttrib(t,"cellspacing"):r.getAttrib(t,"cellspacing")||r.getStyle(t,"border-spacing"),u=jc(n)?Wf(r,t,"padding")||r.getAttrib(t,"cellpadding"):r.getAttrib(t,"cellpadding")||Wf(r,t,"padding")
return X({width:r.getStyle(t,"width")||r.getAttrib(t,"width"),height:r.getStyle(t,"height")||r.getAttrib(t,"height"),cellspacing:o,cellpadding:u,border:function(t,e){var r=re(Pn.fromDom(e),"border-width")
return jc(n)&&r.isSome()?r.getOr(""):t.getAttrib(e,"border")||Wf(n.dom,e,"border-width")||Wf(n.dom,e,"border")}(r,t),caption:!!r.select("caption",t)[0],class:r.getAttrib(t,"class",""),align:Ss(n,t)},e?ws(r,t):{})}(n,e,Wc(n)):Wc(n)&&(o.borderstyle="",o.bordercolor="",o.backgroundcolor=""):(o.cols="1",o.rows="1",Wc(n)&&(o.borderstyle="",o.bordercolor="",o.backgroundcolor=""))
var u=us(Hc(n))
u.length>0&&o.class&&(o.class=o.class.replace(/\s*mce\-item\-table\s*/g,""))
var i={type:"grid",columns:2,items:Ns(n,u,t)},c=Wc(n)?{type:"tabpanel",tabs:[{title:"General",name:"general",items:[i]},ps(n,"table")]}:{type:"panel",items:[i]}
n.windowManager.open({title:"Table Properties",size:"normal",body:c,onSubmit:v(Ls,n,e,o),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:o})},Ws=function(n){return Vu(Eu(n),Iu(n))},js=function(n,t,e,u,i){var c=Iu(n),a=function(n){return be(n,c)},l=function(t){return function(n){return qu(Eu(n),Iu(n))}(n).bind((function(n){return a(n).map((function(e){return t(e,n)}))}))},f=function(t){n.focus()},s=function(n,t){return void 0===t&&(t=!1),l((function(e,r){var o=Fu(u,e,r)
n(e,o,t).each(f)}))},d=function(){return l((function(t,e){var r=Fu(u,t,e),o=xu(m,Pn.fromDom(n.getDoc()),R.none())
return Lf(t,r,o)}))},g=function(){return l((function(n,t){var e=Fu(u,n,t)
return zf(n,e)}))},p=function(t,e){return e().each((function(e){var r=M(e,(function(n){return Lr(n)}))
l((function(e,o){var i=Ru(Pn.fromDom(n.getDoc())),c=function(n,t,e,r){return{selection:Pu(n),clipboard:e,generators:r}}(u,0,r,i)
t(e,c).each(f)}))}))},b=function(n){return function(t,e){return Jn(e,"type").each((function(t){s(n(t),e.no_events)}))}}
qn({mceTableSplitCells:function(){return s(t.unmergeCells)},mceTableMergeCells:function(){return s(t.mergeCells)},mceTableInsertRowBefore:function(){return s(t.insertRowsBefore)},mceTableInsertRowAfter:function(){return s(t.insertRowsAfter)},mceTableInsertColBefore:function(){return s(t.insertColumnsBefore)},mceTableInsertColAfter:function(){return s(t.insertColumnsAfter)},mceTableDeleteCol:function(){return s(t.deleteColumn)},mceTableDeleteRow:function(){return s(t.deleteRow)},mceTableCutCol:function(){return g().each((function(n){i.setColumns(n),s(t.deleteColumn)}))},mceTableCutRow:function(){return d().each((function(n){i.setRows(n),s(t.deleteRow)}))},mceTableCopyCol:function(){return g().each((function(n){return i.setColumns(n)}))},mceTableCopyRow:function(){return d().each((function(n){return i.setRows(n)}))},mceTablePasteColBefore:function(){return p(t.pasteColsBefore,i.getColumns)},mceTablePasteColAfter:function(){return p(t.pasteColsAfter,i.getColumns)},mceTablePasteRowBefore:function(){return p(t.pasteRowsBefore,i.getRows)},mceTablePasteRowAfter:function(){return p(t.pasteRowsAfter,i.getRows)},mceTableDelete:function(){return Ws(n).each((function(t){be(t,c).filter(w(c)).each((function(t){var e=Pn.fromText("")
if(Ye(t,e),rr(t),n.dom.isEmpty(n.getBody()))n.setContent(""),n.selection.setCursorLocation()
else{var r=n.dom.createRng()
r.setStart(e.dom,0),r.setEnd(e.dom,0),n.selection.setRng(r),n.nodeChanged()}}))}))},mceTableCellToggleClass:function(t,e){l((function(t){var r=Uu(u),o=H(r,(function(t){return n.formatter.match("tablecellclass",{value:e},t.dom)}))?n.formatter.remove:n.formatter.apply
E(r,(function(n){return o("tablecellclass",{value:e},n.dom)})),Sc(n,t.dom,Tc)}))},mceTableToggleClass:function(t,e){l((function(t){n.formatter.toggle("tableclass",{value:e},t.dom),Sc(n,t.dom,Tc)}))},mceTableToggleCaption:function(){Ws(n).each((function(t){be(t,c).each((function(e){Lt(e,"caption").fold((function(){var t=Pn.fromTag("caption")
Qe(t,Pn.fromText("Caption")),function(n,t,e){Ct(n,e).fold((function(){Qe(n,t)}),(function(n){Xe(n,t)}))}(e,t,0),n.selection.setCursorLocation(t.dom,0)}),(function(r){dt("caption")(t)&&Ln("td",e).each((function(t){return n.selection.setCursorLocation(t.dom,0)})),rr(r)})),Sc(n,e.dom,xc)}))}))},mceTableSizingMode:function(t,e){return function(t){return Ws(n).each((function(e){Uc(n)||qc(n)||Vc(n)||be(e,c).each((function(e){"relative"!==t||Si(e)?"fixed"!==t||Ti(e)?"responsive"!==t||xi(e)||oa(e):ra(e):ea(e),Mu(e),Sc(n,e.dom,xc)}))}))}(e)},mceTableCellType:b((function(n){return"th"===n?t.makeCellsHeader:t.unmakeCellsHeader})),mceTableColType:b((function(n){return"th"===n?t.makeColumnsHeader:t.unmakeColumnsHeader})),mceTableRowType:b((function(n){switch(n){case"header":return t.makeRowsHeader
case"footer":return t.makeRowsFooter
default:return t.makeRowsBody}}))},(function(t,e){return n.addCommand(e,t)})),qn({mceTableProps:v(_s,n,!1),mceTableRowProps:v(Ps,n),mceTableCellProps:v(ks,n,u)},(function(t,e){return n.addCommand(e,(function(){return t()}))})),n.addCommand("mceInsertTable",(function(t,e){o(e)&&Hn(e).length>0?Bf(n,e.rows,e.columns,e.options,"Invalid values for mceInsertTable - rows and columns values are required to insert a table."):_s(n,!0)})),n.addCommand("mceTableApplyCellStyle",(function(t,e){var i=function(n){return"tablecell"+n.toLowerCase().replace("-","")}
if(o(e)){var c=Uu(u)
if(0!==c.length){var l=$n(e,(function(t,e){return n.formatter.has(i(e))&&r(t)}));(function(n){for(var t in n)if(Vn.call(n,t))return!1
return!0})(l)||(qn(l,(function(t,e){E(c,(function(r){bs.normal(n,r.dom).setFormat(i(e),t)}))})),a(c[0]).each((function(t){return Sc(n,t.dom,Tc)})))}}}))},Fs={remove_similar:!0,inherit:!1},Hs=X({selector:"td,th"},Fs),Vs={tablecellbackgroundcolor:X({styles:{backgroundColor:"%value"}},Hs),tablecellverticalalign:X({styles:{"vertical-align":"%value"}},Hs),tablecellbordercolor:X({styles:{borderColor:"%value"}},Hs),tablecellclass:X({classes:["%value"]},Hs),tableclass:X({selector:"table",classes:["%value"]},Fs),tablecellborderstyle:X({styles:{borderStyle:"%value"}},Hs),tablecellborderwidth:X({styles:{borderWidth:"%value"}},Hs)},qs=Ar([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]),Us=X(X({},qs),{none:function(n){return void 0===n&&(n=void 0),qs.none(n)}}),Gs=function(n,t,e,r,o){void 0===o&&(o=C)
var u=1===r
if(!u&&e<=0)return Us.first(n[0])
if(u&&e>=n.length-1)return Us.last(n[n.length-1])
var i=e+r,c=n[i]
return o(c)?Us.middle(t,c):Gs(n,t,i,r,o)},$s=function(n,t){return be(n,t).bind((function(t){var e=pe(t)
return W(e,(function(t){return _n(n,t)})).map((function(n){return{index:n,all:e}}))}))},Ks=function(n,t,e,r){return{start:n,soffset:t,finish:e,foffset:r}},Xs=Ar([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),Ys={before:Xs.before,on:Xs.on,after:Xs.after,cata:function(n,t,e,r){return n.fold(t,e,r)},getStart:function(n){return n.fold(g,g,g)}},Js=Ar([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),Qs={domRange:Js.domRange,relative:Js.relative,exact:Js.exact,exactFromRange:function(n){return Js.exact(n.start,n.soffset,n.finish,n.foffset)},getWin:function(n){var t,e=function(n){return n.match({domRange:function(n){return Pn.fromDom(n.startContainer)},relative:function(n,t){return Ys.getStart(n)},exact:function(n,t,e,r){return n}})}(n)
return t=e,Pn.fromDom(pt(t).dom.defaultView)},range:Ks},Zs=function(n,t){var e=n.document.createRange()
return e.selectNode(t.dom),e},nm=function(n,t){var e=n.document.createRange()
return tm(e,t),e},tm=function(n,t){return n.selectNodeContents(t.dom)},em=function(n,t,e){var r,o=n.document.createRange()
return r=o,t.fold((function(n){r.setStartBefore(n.dom)}),(function(n,t){r.setStart(n.dom,t)}),(function(n){r.setStartAfter(n.dom)})),function(n,t){t.fold((function(t){n.setEndBefore(t.dom)}),(function(t,e){n.setEnd(t.dom,e)}),(function(t){n.setEndAfter(t.dom)}))}(o,e),o},rm=function(n,t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},om=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom,width:n.width,height:n.height}},um=Ar([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),im=function(n,t,e){return t(Pn.fromDom(e.startContainer),e.startOffset,Pn.fromDom(e.endContainer),e.endOffset)},cm=function(n,t){return function(n,t){var e=t.ltr()
return e.collapsed?t.rtl().filter((function(n){return!1===n.collapsed})).map((function(n){return um.rtl(Pn.fromDom(n.endContainer),n.endOffset,Pn.fromDom(n.startContainer),n.startOffset)})).getOrThunk((function(){return im(0,um.ltr,e)})):im(0,um.ltr,e)}(0,function(n,t){return t.match({domRange:function(n){return{ltr:d(n),rtl:R.none}},relative:function(t,e){return{ltr:J((function(){return em(n,t,e)})),rtl:J((function(){return R.some(em(n,e,t))}))}},exact:function(t,e,r,o){return{ltr:J((function(){return rm(n,t,e,r,o)})),rtl:J((function(){return R.some(rm(n,r,o,t,e))}))}}})}(n,t))},am=function(n,t){return cm(n,t).match({ltr:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},rtl:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(r.dom,o),u.setEnd(t.dom,e),u}})}
um.ltr,um.rtl
var lm=function(n,t,e){return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom},fm=function(n,t,e,r,o){var u=function(e){var r=n.dom.createRange()
return r.setStart(t.dom,e),r.collapse(!0),r},i=ir(t).length,c=function(n,t,e,r,o){if(0===o)return 0
if(t===r)return o-1
for(var u=r,i=1;i<o;i++){var c=n(i),a=Math.abs(t-c.left)
if(e<=c.bottom){if(e<c.top||a>u)return i-1
u=a}}return 0}((function(n){return u(n).getBoundingClientRect()}),e,r,o.right,i)
return u(c)},sm=function(n,t,e,r){return ft(t)?function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getClientRects()
return K(u,(function(n){return lm(n,e,r)?R.some(n):R.none()})).map((function(o){return fm(n,t,e,r,o)}))}(n,t,e,r):function(n,t,e,r){var o=n.dom.createRange(),u=yt(t)
return K(u,(function(t){return o.selectNode(t.dom),lm(o.getBoundingClientRect(),e,r)?sm(n,t,e,r):R.none()}))}(n,t,e,r)},mm=function(n,t){return t-n.left<n.right-t},dm=function(n,t,e){var r=n.dom.createRange()
return r.selectNode(t.dom),r.collapse(e),r},gm=function(n,t,e){var r=n.dom.createRange()
r.selectNode(t.dom)
var o=r.getBoundingClientRect(),u=mm(o,e)
return(true===u?gu:pu)(t).map((function(t){return dm(n,t,u)}))},pm=function(n,t,e){var r=t.dom.getBoundingClientRect(),o=mm(r,e)
return R.some(dm(n,t,o))},vm=function(n,t,e){var r,o
return R.from(null===(o=(r=n.dom).caretPositionFromPoint)||void 0===o?void 0:o.call(r,t,e)).bind((function(t){if(null===t.offsetNode)return R.none()
var e=n.dom.createRange()
return e.setStart(t.offsetNode,t.offset),e.collapse(),R.some(e)}))},bm=function(n,t,e){var r,o
return R.from(null===(o=(r=n.dom).caretRangeFromPoint)||void 0===o?void 0:o.call(r,t,e))},hm=function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect()
return function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect(),i=Math.max(u.left,Math.min(u.right,e)),c=Math.max(u.top,Math.min(u.bottom,r))
return sm(n,t,i,c)}(n,t,Math.max(u.left,Math.min(u.right,e)),Math.max(u.top,Math.min(u.bottom,r)))},wm=function(n,t,e){return Pn.fromPoint(n,t,e).bind((function(r){var o=function(){return function(n,t,e){return(0===yt(t).length?pm:gm)(n,t,e)}(n,r,t)}
return 0===yt(r).length?o():hm(n,r,t,e).orThunk(o)}))},ym=document.caretPositionFromPoint?vm:document.caretRangeFromPoint?bm:wm,Cm=function(n,t){var e=ut(n)
return"input"===e?Ys.after(n):k(["br","img"],e)?0===t?Ys.before(n):Ys.after(n):Ys.on(n,t)},Sm=function(n,t){var e=n.fold(Ys.before,Cm,Ys.after),r=t.fold(Ys.before,Cm,Ys.after)
return Qs.relative(e,r)},Tm=function(n,t,e,r){var o=Cm(n,t),u=Cm(e,r)
return Qs.relative(o,u)},xm=function(n,t,e,r){var o=function(n,t,e,r){var o=gt(n).dom.createRange()
return o.setStart(n.dom,t),o.setEnd(e.dom,r),o}(n,t,e,r),u=_n(n,e)&&t===r
return o.collapsed&&!u},Rm=function(n){return R.from(n.getSelection())},Dm=function(n,t){Rm(n).each((function(n){n.removeAllRanges(),n.addRange(t)}))},Om=function(n,t,e,r,o){var u=rm(n,t,e,r,o)
Dm(n,u)},Am=function(n,t){return cm(n,t).match({ltr:function(t,e,r,o){Om(n,t,e,r,o)},rtl:function(t,e,r,o){Rm(n).each((function(u){if(u.setBaseAndExtent)u.setBaseAndExtent(t.dom,e,r.dom,o)
else if(u.extend)try{(function(n,t,e,r,o,u){t.collapse(e.dom,r),t.extend(o.dom,u)})(0,u,t,e,r,o)}catch(i){Om(n,r,o,t,e)}else Om(n,r,o,t,e)}))}})},km=function(n,t,e,r,o){var u=Tm(t,e,r,o)
Am(n,u)},Im=function(n,t,e){var r=Sm(t,e)
Am(n,r)},Bm=function(n){var t=Qs.getWin(n).dom,e=function(n,e,r,o){return rm(t,n,e,r,o)},r=function(n){return n.match({domRange:function(n){var t=Pn.fromDom(n.startContainer),e=Pn.fromDom(n.endContainer)
return Tm(t,n.startOffset,e,n.endOffset)},relative:Sm,exact:Tm})}(n)
return cm(t,r).match({ltr:e,rtl:e})},Mm=function(n){if(n.rangeCount>0){var t=n.getRangeAt(0),e=n.getRangeAt(n.rangeCount-1)
return R.some(Ks(Pn.fromDom(t.startContainer),t.startOffset,Pn.fromDom(e.endContainer),e.endOffset))}return R.none()},Em=function(n){if(null===n.anchorNode||null===n.focusNode)return Mm(n)
var t=Pn.fromDom(n.anchorNode),e=Pn.fromDom(n.focusNode)
return xm(t,n.anchorOffset,e,n.focusOffset)?R.some(Ks(t,n.anchorOffset,e,n.focusOffset)):Mm(n)},Pm=function(n,t,e){void 0===e&&(e=!0)
var r=(e?nm:Zs)(n,t)
Dm(n,r)},Nm=function(n){return function(n){return Rm(n).filter((function(n){return n.rangeCount>0})).bind(Em)}(n).map((function(n){return Qs.exact(n.start,n.soffset,n.finish,n.foffset)}))},zm=function(n,t){return function(n){var t=n.getClientRects(),e=t.length>0?t[0]:n.getBoundingClientRect()
return e.width>0||e.height>0?R.some(e).map(om):R.none()}(am(n,t))},Lm=function(n,t,e){return function(n,t,e){var r=Pn.fromDom(n.document)
return ym(r,t,e).map((function(n){return Ks(Pn.fromDom(n.startContainer),n.startOffset,Pn.fromDom(n.endContainer),n.endOffset)}))}(n,t,e)},_m=tinymce.util.Tools.resolve("tinymce.util.VK"),Wm=function(n,t,e){return Fm(n,t,function(n,t,e){return $s(n,e).fold((function(){return Us.none(n)}),(function(e){return Gs(e.all,n,e.index,1,t)}))}(e,nc))},jm=function(n,t,e){return Fm(n,t,function(n,t,e){return $s(n,e).fold((function(){return Us.none()}),(function(e){return Gs(e.all,n,e.index,-1,t)}))}(e,nc))},Fm=function(n,t,e){return e.fold(R.none,R.none,(function(n,t){return gu(t).map((function(n){return function(n,t){var e=Qs.exact(t,0,t,0)
return Bm(e)}(0,n)}))}),(function(e){return n.execCommand("mceTableInsertRowAfter"),Wm(n,t,e)}))},Hm=["table","li","dl"],Vm=function(n,t){return{selection:n,kill:t}},qm=function(n,t,e,r){return{start:Ys.on(n,t),finish:Ys.on(e,r)}},Um=function(n,t){var e=am(n,t)
return Ks(Pn.fromDom(e.startContainer),e.startOffset,Pn.fromDom(e.endContainer),e.endOffset)},Gm=qm,$m=function(n,t,e,r,o){return _n(e,r)?R.none():Sr(e,r,t).bind((function(t){var r=t.boxes.getOr([])
return r.length>1?(o(n,r,t.start,t.finish),R.some(Vm(R.some(Gm(e,0,e,su(e))),!0))):R.none()}))},Km=function(n,t){return{item:n,mode:t}},Xm=function(n,t,e,r){return void 0===r&&(r=Ym),n.property().parent(t).map((function(n){return Km(n,r)}))},Ym=function(n,t,e,r){return void 0===r&&(r=Jm),e.sibling(n,t).map((function(n){return Km(n,r)}))},Jm=function(n,t,e,r){void 0===r&&(r=Jm)
var o=n.property().children(t)
return e.first(o).map((function(n){return Km(n,r)}))},Qm=[{current:Xm,next:Ym,fallback:R.none()},{current:Ym,next:Jm,fallback:R.some(Xm)},{current:Jm,next:Jm,fallback:R.some(Ym)}],Zm=function(n,t,e,r,o){return void 0===o&&(o=Qm),_(o,(function(n){return n.current===e})).bind((function(e){return e.current(n,t,r,e.next).orThunk((function(){return e.fallback.bind((function(e){return Zm(n,t,e,r)}))}))}))},nd=function(){return{sibling:function(n,t){return n.query().prevSibling(t)},first:function(n){return n.length>0?R.some(n[n.length-1]):R.none()}}},td=function(){return{sibling:function(n,t){return n.query().nextSibling(t)},first:function(n){return n.length>0?R.some(n[0]):R.none()}}},ed=function(n,t,e,r,o,u){return Zm(n,t,r,o).bind((function(t){return u(t.item)?R.none():e(t.item)?R.some(t.item):ed(n,t.item,e,t.mode,o,u)}))},rd=function(n){return function(t){return 0===n.property().children(t).length}},od=function(n,t,e,r){return ed(n,t,e,Ym,nd(),r)},ud=function(n,t,e,r){return ed(n,t,e,Ym,td(),r)},id=fr(),cd=function(n,t){return function(n,t,e){return od(n,t,rd(n),e)}(id,n,t)},ad=function(n,t){return function(n,t,e){return ud(n,t,rd(n),e)}(id,n,t)},ld=Ar([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}]),fd=function(n){return Wt(n,"tr")},sd=X(X({},ld),{verify:function(n,t,e,r,o,u,i){return Wt(r,"td,th",i).bind((function(e){return Wt(t,"td,th",i).map((function(t){return _n(e,t)?_n(r,e)&&su(e)===o?u(t):ld.none("in same cell"):yr(fd,[e,t]).fold((function(){return function(n,t,e){var r=n.getRect(t),o=n.getRect(e)
return o.right>r.left&&o.left<r.right}(n,t,e)?ld.success():u(t)}),(function(n){return u(t)}))}))})).getOr(ld.none("default"))},cata:function(n,t,e,r,o){return n.fold(t,e,r,o)}}),md=function(n,t){return W(n,v(_n,t))},dd=function(n){return"br"===ut(n)},gd=function(n,t,e){return t(n,e).bind((function(n){return ft(n)&&0===ir(n).trim().length?gd(n,t,e):R.some(n)}))},pd=function(n,t,e,r){return function(n,t){return Ct(n,t).filter(dd).orThunk((function(){return Ct(n,t-1).filter(dd)}))}(t,e).bind((function(t){return r.traverse(t).fold((function(){return gd(t,r.gather,n).map(r.relative)}),(function(n){return function(n){return vt(n).bind((function(t){var e=yt(t)
return md(e,n).map((function(r){return function(n,t,e,r){return{parent:n,children:t,element:e,index:r}}(t,e,n,r)}))}))}(n).map((function(n){return Ys.on(n.parent,n.index)}))}))}))},vd=function(n,t,e,r){return(dd(t)?function(n,t,e){return e.traverse(t).orThunk((function(){return gd(t,e.gather,n)})).map(e.relative)}(n,t,r):pd(n,t,e,r)).map((function(n){return{start:n,finish:n}}))},bd=function(n,t){return{left:n.left,top:n.top+t,right:n.right,bottom:n.bottom+t}},hd=function(n,t){return{left:n.left,top:n.top-t,right:n.right,bottom:n.bottom-t}},wd=function(n,t,e){return{left:n.left+t,top:n.top+e,right:n.right+t,bottom:n.bottom+e}},yd=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},Cd=function(n,t){return R.some(n.getRect(t))},Sd=function(n,t,e){return lt(t)?Cd(n,t).map(yd):ft(t)?function(n,t,e){return e>=0&&e<su(t)?n.getRangedRect(t,e,t,e+1):e>0?n.getRangedRect(t,e-1,t,e):R.none()}(n,t,e).map(yd):R.none()},Td=function(n,t){return lt(t)?Cd(n,t).map(yd):ft(t)?n.getRangedRect(t,0,t,su(t)).map(yd):R.none()},xd=Ar([{none:[]},{retry:["caret"]}]),Rd=function(n,t,e){return(r=t,o=Bl,Pt((function(n,t){return t(n)}),Nt,r,o,u)).fold(y,(function(t){return Td(n,t).exists((function(n){return function(n,t){return n.left<t.left||Math.abs(t.right-n.left)<1||n.left>t.right}(e,n)}))}))
var r,o,u},Dd={point:function(n){return n.bottom},adjuster:function(n,t,e,r,o){var u=bd(o,5)
return Math.abs(e.bottom-r.bottom)<1||e.top>o.bottom?xd.retry(u):e.top===o.bottom?xd.retry(bd(o,1)):Rd(n,t,o)?xd.retry(wd(u,5,0)):xd.none()},move:bd,gather:ad},Od=function(n,t,e,r,o){return 0===o?R.some(r):function(n,t,e){return n.elementFromPoint(t,e).filter((function(n){return"table"===ut(n)})).isSome()}(n,r.left,t.point(r))?function(n,t,e,r,o){return Od(n,t,e,t.move(r,5),o)}(n,t,e,r,o-1):n.situsFromPoint(r.left,t.point(r)).bind((function(u){return u.start.fold(R.none,(function(u){return Td(n,u).bind((function(i){return t.adjuster(n,u,i,e,r).fold(R.none,(function(r){return Od(n,t,e,r,o-1)}))})).orThunk((function(){return R.some(r)}))}),R.none)}))},Ad=function(n,t,e){var r=n.move(e,5),o=Od(t,n,e,r,100).getOr(r)
return function(n,t,e){return n.point(t)>e.getInnerHeight()?R.some(n.point(t)-e.getInnerHeight()):n.point(t)<0?R.some(-n.point(t)):R.none()}(n,o,t).fold((function(){return t.situsFromPoint(o.left,n.point(o))}),(function(e){return t.scrollBy(0,e),t.situsFromPoint(o.left,n.point(o)-e)}))},kd={tryUp:v(Ad,{point:function(n){return n.top},adjuster:function(n,t,e,r,o){var u=hd(o,5)
return Math.abs(e.top-r.top)<1||e.bottom<o.top?xd.retry(u):e.bottom===o.top?xd.retry(hd(o,1)):Rd(n,t,o)?xd.retry(wd(u,5,0)):xd.none()},move:hd,gather:cd}),tryDown:v(Ad,Dd),ieTryUp:function(n,t){return n.situsFromPoint(t.left,t.top-5)},ieTryDown:function(n,t){return n.situsFromPoint(t.left,t.bottom+5)},getJumpSize:d(5)},Id=function(n,t,e){return n.getSelection().bind((function(r){return vd(t,r.finish,r.foffset,e).fold((function(){return R.some(la(r.finish,r.foffset))}),(function(o){var u=n.fromSitus(o)
return function(n){return sd.cata(n,(function(n){return R.none()}),(function(){return R.none()}),(function(n){return R.some(la(n,0))}),(function(n){return R.some(la(n,su(n)))}))}(sd.verify(n,r.finish,r.foffset,u.finish,u.foffset,e.failure,t))}))}))},Bd=function(n,t,e,r,o,u){return 0===u?R.none():Pd(n,t,e,r,o).bind((function(i){var c=n.fromSitus(i),a=sd.verify(n,e,r,c.finish,c.foffset,o.failure,t)
return sd.cata(a,(function(){return R.none()}),(function(){return R.some(i)}),(function(i){return _n(e,i)&&0===r?Md(n,e,r,hd,o):Bd(n,t,i,0,o,u-1)}),(function(i){return _n(e,i)&&r===su(i)?Md(n,e,r,bd,o):Bd(n,t,i,su(i),o,u-1)}))}))},Md=function(n,t,e,r,o){return Sd(n,t,e).bind((function(t){return Ed(n,o,r(t,kd.getJumpSize()))}))},Ed=function(n,t,e){var r=Mn().browser
return r.isChrome()||r.isSafari()||r.isFirefox()||r.isEdge()?t.otherRetry(n,e):r.isIE()?t.ieRetry(n,e):R.none()},Pd=function(n,t,e,r,o){return Sd(n,e,r).bind((function(t){return Ed(n,o,t)}))},Nd=function(n,t){return Nt(n,(function(n){return vt(n).exists((function(n){return _n(n,t)}))}),e).isSome()
var e},zd=function(n,t,e,r,o){return Wt(r,"td,th",t).bind((function(r){return Wt(r,"table",t).bind((function(u){return Nd(o,u)?function(n,t,e){return Id(n,t,e).bind((function(r){return Bd(n,t,r.element,r.offset,e,20).map(n.fromSitus)}))}(n,t,e).bind((function(n){return Wt(n.finish,"td,th",t).map((function(t){return{start:r,finish:t,range:n}}))})):R.none()}))}))},Ld=function(n,t,e,r,o,u){return Mn().browser.isIE()?R.none():u(r,t).orThunk((function(){return zd(n,t,e,r,o).map((function(n){var t=n.range
return Vm(R.some(Gm(t.start,t.soffset,t.finish,t.foffset)),!0)}))}))},_d=function(n,t){return Wt(n,"tr",t).bind((function(n){return Wt(n,"table",t).bind((function(e){var r=Et(e,"tr")
return _n(n,r[0])?function(n,t,e){return od(id,n,t,e)}(e,(function(n){return pu(n).isSome()}),t).map((function(n){var t=su(n)
return Vm(R.some(Gm(n,t,n,t)),!0)})):R.none()}))}))},Wd=function(n,t){return Wt(n,"tr",t).bind((function(n){return Wt(n,"table",t).bind((function(e){var r=Et(e,"tr")
return _n(n,r[r.length-1])?function(n,t,e){return ud(id,n,t,e)}(e,(function(n){return gu(n).isSome()}),t).map((function(n){return Vm(R.some(Gm(n,0,n,0)),!0)})):R.none()}))}))},jd=function(n,t,e,r,o,u,i){return zd(n,e,r,o,u).bind((function(n){return $m(t,e,n.start,n.finish,i)}))},Fd=function(n,t){return Wt(n,"td,th",t)},Hd={traverse:wt,gather:ad,relative:Ys.before,otherRetry:kd.tryDown,ieRetry:kd.ieTryDown,failure:sd.failedDown},Vd={traverse:ht,gather:cd,relative:Ys.before,otherRetry:kd.tryUp,ieRetry:kd.ieTryUp,failure:sd.failedUp},qd=function(n){return function(t){return t===n}},Ud=qd(38),Gd=qd(40),$d=function(n){return n>=37&&n<=40},Kd={isBackward:qd(37),isForward:qd(39)},Xd={isBackward:qd(39),isForward:qd(37)},Yd=function(n){return{elementFromPoint:function(t,e){return Pn.fromPoint(Pn.fromDom(n.document),t,e)},getRect:function(n){return n.dom.getBoundingClientRect()},getRangedRect:function(t,e,r,o){var u=Qs.exact(t,e,r,o)
return zm(n,u)},getSelection:function(){return Nm(n).map((function(t){return Um(n,t)}))},fromSitus:function(t){var e=Qs.relative(t.start,t.finish)
return Um(n,e)},situsFromPoint:function(t,e){return Lm(n,t,e).map((function(n){return qm(n.start,n.soffset,n.finish,n.foffset)}))},clearSelection:function(){(function(n){Rm(n).each((function(n){return n.removeAllRanges()}))})(n)},collapseSelection:function(t){void 0===t&&(t=!1),Nm(n).each((function(e){return e.fold((function(n){return n.collapse(t)}),(function(e,r){var o=t?e:r
Im(n,o,o)}),(function(e,r,o,u){var i=t?e:o,c=t?r:u
km(n,i,c,i,c)}))}))},setSelection:function(t){km(n,t.start,t.soffset,t.finish,t.foffset)},setRelativeSelection:function(t,e){Im(n,t,e)},selectNode:function(t){Pm(n,t,!1)},selectContents:function(t){Pm(n,t)},getInnerHeight:function(){return n.innerHeight},getScrollY:function(){var t,e,r,o
return(t=Pn.fromDom(n.document),e=void 0!==t?t.dom:document,r=e.body.scrollLeft||e.documentElement.scrollLeft,o=e.body.scrollTop||e.documentElement.scrollTop,ao(r,o)).top},scrollBy:function(t,e){(function(n,t,e){var r=(void 0!==e?e.dom:document).defaultView
r&&r.scrollBy(n,t)})(t,e,Pn.fromDom(n.document))}}},Jd=function(n,t){return{rows:n,cols:t}},Qd=function(n,t,e,r){var o=function(n,t,e,r){var o=es(),u=o.clear,i=function(u){o.on((function(o){r.clearBeforeUpdate(t),Fd(u.target,e).each((function(i){Sr(o,i,e).each((function(e){var o=e.boxes.getOr([])
if(1===o.length){var c=o[0],a="false"===tc(c),l=$t(Zi(u.target),c,_n)
a&&l&&(r.selectRange(t,o,c,c),n.selectContents(c))}else o.length>1&&(r.selectRange(t,o,e.start,e.finish),n.selectContents(i))}))}))}))}
return{clearstate:u,mousedown:function(n){r.clear(t),Fd(n.target,e).each(o.set)},mouseover:function(n){i(n)},mouseup:function(n){i(n),u()}}}(Yd(n),t,e,r)
return{clearstate:o.clearstate,mousedown:o.mousedown,mouseover:o.mouseover,mouseup:o.mouseup}},Zd=function(n,t,e,r){var o=Yd(n),u=function(){return r.clear(t),R.none()}
return{keydown:function(n,i,c,a,l,f){var s=n.raw,m=s.which,d=!0===s.shiftKey
return Tr(t,r.selectedSelector).fold((function(){return $d(m)&&!d&&r.clearBeforeUpdate(t),Gd(m)&&d?v(jd,o,t,e,Hd,a,i,r.selectRange):Ud(m)&&d?v(jd,o,t,e,Vd,a,i,r.selectRange):Gd(m)?v(Ld,o,e,Hd,a,i,Wd):Ud(m)?v(Ld,o,e,Vd,a,i,_d):R.none}),(function(n){var e=function(e){return function(){return K(e,(function(e){return function(n,t,e,r,o){return Rr(r,n,t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){return o.clearBeforeUpdate(e),o.selectRange(e,n.boxes,n.start,n.finish),n.boxes}))}(e.rows,e.cols,t,n,r)})).fold((function(){return xr(t,r.firstSelectedSelector,r.lastSelectedSelector).map((function(n){var e=Gd(m)||f.isForward(m)?Ys.after:Ys.before
return o.setRelativeSelection(Ys.on(n.first,0),e(n.table)),r.clear(t),Vm(R.none(),!0)}))}),(function(n){return R.some(Vm(R.none(),!0))}))}}
return Gd(m)&&d?e([Jd(1,0)]):Ud(m)&&d?e([Jd(-1,0)]):f.isBackward(m)&&d?e([Jd(0,-1),Jd(-1,0)]):f.isForward(m)&&d?e([Jd(0,1),Jd(1,0)]):$d(m)&&!d?u:R.none}))()},keyup:function(n,o,u,i,c){return Tr(t,r.selectedSelector).fold((function(){var a=n.raw,l=a.which
return!0===a.shiftKey&&$d(l)?function(n,t,e,r,o,u,i){return _n(e,o)&&r===u?R.none():Wt(e,"td,th",t).bind((function(e){return Wt(o,"td,th",t).bind((function(r){return $m(n,t,e,r,i)}))}))}(t,e,o,u,i,c,r.selectRange):R.none()}),R.none)}}},ng=function(n,t,e){var r=function(t){Ut(t,n.selected),Ut(t,n.firstSelected),Ut(t,n.lastSelected)},o=function(t){Ft(t,n.selected,"1")},u=function(n){i(n),e()},i=function(t){var e=Et(t,n.selectedSelector+","+n.firstSelectedSelector+","+n.lastSelectedSelector)
E(e,r)}
return{clearBeforeUpdate:i,clear:u,selectRange:function(e,r,i,c){u(e),E(r,o),Ft(i,n.firstSelected,"1"),Ft(c,n.lastSelected,"1"),t(r,i,c)},selectedSelector:n.selectedSelector,firstSelectedSelector:n.firstSelectedSelector,lastSelectedSelector:n.lastSelectedSelector}},tg=function(n,t,e){var r=_e.fromTable(n)
return Va(r,t).map((function(n){var t=La(r,e,!1)
return{upOrLeftCells:function(n,t){var e=n.slice(0,t[t.length-1].row+1),r=_a(e)
return F(r,(function(n){var e=n.cells.slice(0,t[t.length-1].column+1)
return M(e,(function(n){return n.element}))}))}(t,n),downOrRightCells:function(n,t){var e=n.slice(t[0].row+t[0].rowspan-1,n.length),r=_a(e)
return F(r,(function(n){var e=n.cells.slice(t[0].column+t[0].colspan-1,n.cells.length)
return M(e,(function(n){return n.element}))}))}(t,n)}}))},eg=tinymce.util.Tools.resolve("tinymce.Env"),rg=function(n){return!1===Ki(Pn.fromDom(n.target),"ephox-snooker-resizer-bar")}
function og(n,t,e){var r=ng(ju,(function(t,r,o){e.targets().each((function(e){be(r).each((function(u){var i=Jc(n),c=xu(m,Pn.fromDom(n.getDoc()),i),a=tg(u,e,c);(function(n,t,e,r,o){n.fire("TableSelectionChange",{cells:t,start:e,finish:r,otherCells:o})})(n,t,r,o,a)}))}))}),(function(){return function(n){n.fire("TableSelectionClear")}(n)}))
return n.on("init",(function(e){var o=n.getWin(),u=Ou(n),i=Iu(n),c=Qd(o,u,i,r),a=Zd(o,u,i,r),l=function(n,t,e,r){var o=Yd(n)
return function(n,u){r.clearBeforeUpdate(t),Sr(n,u,e).each((function(n){var e=n.boxes.getOr([])
r.selectRange(t,e,n.start,n.finish),o.selectContents(u),o.collapseSelection()}))}}(o,u,i,r)
n.on("TableSelectorChange",(function(n){return l(n.start,n.finish)}))
var f,s,d=function(t,e){(function(n){return!0===n.raw.shiftKey})(t)&&(e.kill&&t.kill(),e.selection.each((function(t){var e=Qs.relative(t.start,t.finish),r=am(o,e)
n.selection.setRng(r)})))},g=function(n){return 0===n.button},p=(f=ns(Pn.fromDom(u)),s=ns(0),{touchEnd:function(n){var t=Pn.fromDom(n.target)
if("td"===ut(t)||"th"===ut(t)){var e=f.get(),r=s.get()
_n(e,t)&&n.timeStamp-r<300&&(n.preventDefault(),l(t,t))}f.set(t),s.set(n.timeStamp)}})
n.on("dragstart",(function(n){c.clearstate()})),n.on("mousedown",(function(n){g(n)&&rg(n)&&c.mousedown(Vi(n))})),n.on("mouseover",(function(n){var t;(void 0===(t=n).buttons||eg.browser.isEdge()&&0===t.buttons||0!=(1&t.buttons))&&rg(n)&&c.mouseover(Vi(n))})),n.on("mouseup",(function(n){g(n)&&rg(n)&&c.mouseup(Vi(n))})),n.on("touchend",p.touchEnd),n.on("keyup",(function(t){var e=Vi(t)
if(e.raw.shiftKey&&$d(e.raw.which)){var r=n.selection.getRng(),o=Pn.fromDom(r.startContainer),u=Pn.fromDom(r.endContainer)
a.keyup(e,o,r.startOffset,u,r.endOffset).each((function(n){d(e,n)}))}})),n.on("keydown",(function(e){var r=Vi(e)
t().each((function(n){return n.hideBars()}))
var o=n.selection.getRng(),u=Pn.fromDom(o.startContainer),i=Pn.fromDom(o.endContainer),c=to(Kd,Xd)(Pn.fromDom(n.selection.getStart()))
a.keydown(r,u,o.startOffset,i,o.endOffset,c).each((function(n){d(r,n)})),t().each((function(n){return n.showBars()}))})),n.on("NodeChange",(function(){var t=n.selection,e=Pn.fromDom(t.getStart()),o=Pn.fromDom(t.getEnd())
yr(be,[e,o]).fold((function(){return r.clear(u)}),m)}))})),{clear:r.clear}}var ug=function(n,t){var e=ns(R.none()),r=ns([]),o=R.none(),u=dt("caption"),i=function(n){return o.forall((function(t){return!t[n]}))},c=function(){return Vu(function(n){return Pn.fromDom(n.selection.getEnd())}(n),Iu(n))},a=function(){return Vu(Eu(n),Iu(n)).bind((function(n){return Xt(be(n),c().bind(be),(function(e,r){return _n(e,r)?u(n)?R.some(function(n){return{element:n,mergable:R.none(),unmergable:R.none(),selection:[n]}}(n)):R.some(Fu(t,e,n)):R.none()})).bind(g)}))},l=function(n){return be(n.element).map((function(t){var e=_e.fromTable(t),r=Va(e,n).getOr([]),o=L(r,(function(n,t){return t.isLocked&&(n.onAny=!0,0===t.column?n.onFirst=!0:t.column+t.colspan>=e.grid.columns&&(n.onLast=!0)),n}),{onAny:!1,onFirst:!1,onLast:!1})
return{mergeable:Ga(e,n).isSome(),unmergeable:$a(e,n).isSome(),locked:o}}))},f=function(){e.set(J(a)()),o=e.get().bind(l),E(r.get(),(function(n){return n()}))},s=function(n){return n(),r.set(r.get().concat([n])),function(){r.set(N(r.get(),(function(t){return t!==n})))}},m=function(n,t){return s((function(){return e.get().fold((function(){n.setDisabled(!0)}),(function(e){n.setDisabled(t(e))}))}))},d=function(n,t,r){return s((function(){return e.get().fold((function(){n.setDisabled(!0),n.setActive(!1)}),(function(e){n.setDisabled(t(e)),n.setActive(r(e))}))}))},p=function(n){return o.exists((function(t){return t.locked[n]}))},v=function(t,e){return function(r){return d(r,(function(n){return u(n.element)}),(function(){return n.queryCommandValue(t)===e}))}},b=v("mceTableRowType","header"),h=v("mceTableColType","th")
return n.on("NodeChange ExecCommand TableSelectorChange",f),{onSetupTable:function(n){return m(n,(function(n){return!1}))},onSetupCellOrRow:function(n){return m(n,(function(n){return u(n.element)}))},onSetupColumn:function(n){return function(t){return m(t,(function(t){return u(t.element)||p(n)}))}},onSetupPasteable:function(n){return function(t){return m(t,(function(t){return u(t.element)||n().isNone()}))}},onSetupPasteableColumn:function(n,t){return function(e){return m(e,(function(e){return u(e.element)||n().isNone()||p(t)}))}},onSetupMergeable:function(n){return m(n,(function(n){return i("mergeable")}))},onSetupUnmergeable:function(n){return m(n,(function(n){return i("unmergeable")}))},resetTargets:f,onSetupTableWithCaption:function(t){return d(t,y,(function(t){return be(t.element,Iu(n)).exists((function(n){return Lt(n,"caption").isSome()}))}))},onSetupTableRowHeaders:b,onSetupTableColumnHeaders:h,targets:e.get}},ig=function(n){var t=function(n,t,e){return{get:function(){return Dr(n(),e).fold((function(){return t().fold(Br,Er)}),(function(n){return Mr(n)}))}}}((function(){return Ou(n)}),(function(){return qu(Eu(n),Iu(n))}),ju.selectedSelector),e=ug(n,t),r=aa(n),o=og(n,r.lazyResize,e),u=Rf(n,o,r.lazyWire),i=function(){var n=es(),t=es()
return{getRows:n.get,setRows:function(e){e.fold(n.clear,n.set),t.clear()},clearRows:n.clear,getColumns:t.get,setColumns:function(e){e.fold(t.clear,t.set),n.clear()},clearColumns:t.clear}}()
return js(n,u,0,t,i),function(n,t,e){var r=Iu(n),o=function(t){return qu(Eu(n)).bind((function(n){return be(n,r).map((function(r){var o=Fu(e,r,n)
return t(r,o)}))})).getOr("")}
qn({mceTableRowType:function(){return o(t.getTableRowType)},mceTableCellType:function(){return o(t.getTableCellType)},mceTableColType:function(){return o(t.getTableColType)}},(function(t,e){return n.addQueryValueHandler(e,t)}))}(n,u,t),Gu(n,t,u),function(n,t,e,r){var o=function(t){return function(){return n.execCommand(t)}},u=function(t){n.execCommand("mceInsertTable",!1,{rows:t.numRows,columns:t.numColumns})},i={text:"Table properties",onSetup:e.onSetupTable,onAction:o("mceTableProps")},c={text:"Delete table",icon:"table-delete-table",onSetup:e.onSetupTable,onAction:o("mceTableDelete")}
n.ui.registry.addMenuItem("tableinsertrowbefore",{text:"Insert row before",icon:"table-insert-row-above",onAction:o("mceTableInsertRowBefore"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertrowafter",{text:"Insert row after",icon:"table-insert-row-after",onAction:o("mceTableInsertRowAfter"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeleterow",{text:"Delete row",icon:"table-delete-row",onAction:o("mceTableDeleteRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablerowprops",{text:"Row properties",icon:"table-row-properties",onAction:o("mceTableRowProps"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutrow",{text:"Cut row",icon:"cut-row",onAction:o("mceTableCutRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopyrow",{text:"Copy row",icon:"duplicate-row",onAction:o("mceTableCopyRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepasterowbefore",{text:"Paste row before",icon:"paste-row-before",onAction:o("mceTablePasteRowBefore"),onSetup:e.onSetupPasteable(r.getRows)}),n.ui.registry.addMenuItem("tablepasterowafter",{text:"Paste row after",icon:"paste-row-after",onAction:o("mceTablePasteRowAfter"),onSetup:e.onSetupPasteable(r.getRows)})
var a={type:"nestedmenuitem",text:"Row",getSubmenuItems:d("tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter")}
n.ui.registry.addMenuItem("tableinsertcolumnbefore",{text:"Insert column before",icon:"table-insert-column-before",onAction:o("mceTableInsertColBefore"),onSetup:e.onSetupColumn("onFirst")}),n.ui.registry.addMenuItem("tableinsertcolumnafter",{text:"Insert column after",icon:"table-insert-column-after",onAction:o("mceTableInsertColAfter"),onSetup:e.onSetupColumn("onLast")}),n.ui.registry.addMenuItem("tabledeletecolumn",{text:"Delete column",icon:"table-delete-column",onAction:o("mceTableDeleteCol"),onSetup:e.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablecutcolumn",{text:"Cut column",icon:"cut-column",onAction:o("mceTableCutCol"),onSetup:e.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablecopycolumn",{text:"Copy column",icon:"duplicate-column",onAction:o("mceTableCopyCol"),onSetup:e.onSetupColumn("onAny")}),n.ui.registry.addMenuItem("tablepastecolumnbefore",{text:"Paste column before",icon:"paste-column-before",onAction:o("mceTablePasteColBefore"),onSetup:e.onSetupPasteableColumn(r.getColumns,"onFirst")}),n.ui.registry.addMenuItem("tablepastecolumnafter",{text:"Paste column after",icon:"paste-column-after",onAction:o("mceTablePasteColAfter"),onSetup:e.onSetupPasteableColumn(r.getColumns,"onLast")})
var l={type:"nestedmenuitem",text:"Column",getSubmenuItems:d("tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter")}
n.ui.registry.addMenuItem("tablecellprops",{text:"Cell properties",icon:"table-cell-properties",onAction:o("mceTableCellProps"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablemergecells",{text:"Merge cells",icon:"table-merge-cells",onAction:o("mceTableMergeCells"),onSetup:e.onSetupMergeable}),n.ui.registry.addMenuItem("tablesplitcells",{text:"Split cell",icon:"table-split-cells",onAction:o("mceTableSplitCells"),onSetup:e.onSetupUnmergeable})
var f={type:"nestedmenuitem",text:"Cell",getSubmenuItems:d("tablecellprops tablemergecells tablesplitcells")}
!1===function(n){return n.getParam("table_grid",!0,"boolean")}(n)?n.ui.registry.addMenuItem("inserttable",{text:"Table",icon:"table",onAction:o("mceInsertTable")}):n.ui.registry.addNestedMenuItem("inserttable",{text:"Table",icon:"table",getSubmenuItems:function(){return[{type:"fancymenuitem",fancytype:"inserttable",onAction:u}]}}),n.ui.registry.addMenuItem("inserttabledialog",{text:"Insert table",icon:"table",onAction:o("mceInsertTable")}),n.ui.registry.addMenuItem("tableprops",i),n.ui.registry.addMenuItem("deletetable",c),n.ui.registry.addNestedMenuItem("row",a),n.ui.registry.addNestedMenuItem("column",l),n.ui.registry.addNestedMenuItem("cell",f),n.ui.registry.addContextMenu("table",{update:function(){return e.resetTargets(),e.targets().fold(d(""),(function(n){return"caption"===ut(n.element)?"tableprops deletetable":"cell row column | advtablesort | tableprops deletetable"}))}})
var s=as(Hc(n))
0!==s.length&&n.ui.registry.addNestedMenuItem("tableclass",{icon:"table-classes",text:"Table styles",getSubmenuItems:function(){return is(n,t,s,"tableclass",(function(t){return n.execCommand("mceTableToggleClass",!1,t)}))},onSetup:e.onSetupTable})
var m=as(Fc(n))
0!==m.length&&n.ui.registry.addNestedMenuItem("tablecellclass",{icon:"table-cell-classes",text:"Cell styles",getSubmenuItems:function(){return is(n,t,m,"tablecellclass",(function(t){return n.execCommand("mceTableCellToggleClass",!1,t)}))},onSetup:e.onSetupCellOrRow}),n.ui.registry.addNestedMenuItem("tablecellvalign",{icon:"vertical-align",text:"Vertical align",getSubmenuItems:function(){return is(n,t,Hf,"tablecellverticalalign",cs(n,"vertical-align"))},onSetup:e.onSetupCellOrRow}),n.ui.registry.addNestedMenuItem("tablecellborderwidth",{icon:"border-width",text:"Border width",getSubmenuItems:function(){return is(n,t,Ec(n),"tablecellborderwidth",cs(n,"border-width"))},onSetup:e.onSetupCellOrRow}),n.ui.registry.addNestedMenuItem("tablecellborderstyle",{icon:"border-style",text:"Border style",getSubmenuItems:function(){return is(n,t,Pc(n),"tablecellborderstyle",cs(n,"border-style"))},onSetup:e.onSetupCellOrRow}),n.ui.registry.addToggleMenuItem("tablecaption",{icon:"table-caption",text:"Table caption",onAction:o("mceTableToggleCaption"),onSetup:e.onSetupTableWithCaption}),n.ui.registry.addNestedMenuItem("tablecellbackgroundcolor",{icon:"cell-background-color",text:"Background color",getSubmenuItems:function(){return fs(n,Qc(n),"background-color")},onSetup:e.onSetupCellOrRow}),n.ui.registry.addNestedMenuItem("tablecellbordercolor",{icon:"cell-border-color",text:"Border color",getSubmenuItems:function(){return fs(n,Zc(n),"border-color")},onSetup:e.onSetupCellOrRow}),n.ui.registry.addToggleMenuItem("tablerowheader",{text:"Row header",icon:"table-top-header",onAction:ss(n),onSetup:e.onSetupTableRowHeaders}),n.ui.registry.addToggleMenuItem("tablecolheader",{text:"Column header",icon:"table-left-header",onAction:ms(n),onSetup:e.onSetupTableColumnHeaders})}(n,t,e,i),function(n,t,e,r){n.ui.registry.addMenuButton("table",{tooltip:"Table",icon:"table",fetch:function(n){return n("inserttable | cell row column | advtablesort | tableprops deletetable")}})
var o=function(t){return function(){return n.execCommand(t)}}
n.ui.registry.addButton("tableprops",{tooltip:"Table properties",onAction:o("mceTableProps"),icon:"table",onSetup:e.onSetupTable}),n.ui.registry.addButton("tabledelete",{tooltip:"Delete table",onAction:o("mceTableDelete"),icon:"table-delete-table",onSetup:e.onSetupTable}),n.ui.registry.addButton("tablecellprops",{tooltip:"Cell properties",onAction:o("mceTableCellProps"),icon:"table-cell-properties",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablemergecells",{tooltip:"Merge cells",onAction:o("mceTableMergeCells"),icon:"table-merge-cells",onSetup:e.onSetupMergeable}),n.ui.registry.addButton("tablesplitcells",{tooltip:"Split cell",onAction:o("mceTableSplitCells"),icon:"table-split-cells",onSetup:e.onSetupUnmergeable}),n.ui.registry.addButton("tableinsertrowbefore",{tooltip:"Insert row before",onAction:o("mceTableInsertRowBefore"),icon:"table-insert-row-above",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertrowafter",{tooltip:"Insert row after",onAction:o("mceTableInsertRowAfter"),icon:"table-insert-row-after",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tabledeleterow",{tooltip:"Delete row",onAction:o("mceTableDeleteRow"),icon:"table-delete-row",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablerowprops",{tooltip:"Row properties",onAction:o("mceTableRowProps"),icon:"table-row-properties",onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolbefore",{tooltip:"Insert column before",onAction:o("mceTableInsertColBefore"),icon:"table-insert-column-before",onSetup:e.onSetupColumn("onFirst")}),n.ui.registry.addButton("tableinsertcolafter",{tooltip:"Insert column after",onAction:o("mceTableInsertColAfter"),icon:"table-insert-column-after",onSetup:e.onSetupColumn("onLast")}),n.ui.registry.addButton("tabledeletecol",{tooltip:"Delete column",onAction:o("mceTableDeleteCol"),icon:"table-delete-column",onSetup:e.onSetupColumn("onAny")}),n.ui.registry.addButton("tablecutrow",{tooltip:"Cut row",icon:"cut-row",onAction:o("mceTableCutRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablecopyrow",{tooltip:"Copy row",icon:"duplicate-row",onAction:o("mceTableCopyRow"),onSetup:e.onSetupCellOrRow}),n.ui.registry.addButton("tablepasterowbefore",{tooltip:"Paste row before",icon:"paste-row-before",onAction:o("mceTablePasteRowBefore"),onSetup:e.onSetupPasteable(r.getRows)}),n.ui.registry.addButton("tablepasterowafter",{tooltip:"Paste row after",icon:"paste-row-after",onAction:o("mceTablePasteRowAfter"),onSetup:e.onSetupPasteable(r.getRows)}),n.ui.registry.addButton("tablecutcol",{tooltip:"Cut column",icon:"cut-column",onAction:o("mceTableCutCol"),onSetup:e.onSetupColumn("onAny")}),n.ui.registry.addButton("tablecopycol",{tooltip:"Copy column",icon:"duplicate-column",onAction:o("mceTableCopyCol"),onSetup:e.onSetupColumn("onAny")}),n.ui.registry.addButton("tablepastecolbefore",{tooltip:"Paste column before",icon:"paste-column-before",onAction:o("mceTablePasteColBefore"),onSetup:e.onSetupPasteableColumn(r.getColumns,"onFirst")}),n.ui.registry.addButton("tablepastecolafter",{tooltip:"Paste column after",icon:"paste-column-after",onAction:o("mceTablePasteColAfter"),onSetup:e.onSetupPasteableColumn(r.getColumns,"onLast")}),n.ui.registry.addButton("tableinsertdialog",{tooltip:"Insert table",onAction:o("mceInsertTable"),icon:"table"})
var u=as(Hc(n))
0!==u.length&&n.ui.registry.addMenuButton("tableclass",{icon:"table-classes",tooltip:"Table styles",fetch:ls(n,t,u,"tableclass",(function(t){return n.execCommand("mceTableToggleClass",!1,t)})),onSetup:e.onSetupTable})
var i=as(Fc(n))
0!==i.length&&n.ui.registry.addMenuButton("tablecellclass",{icon:"table-cell-classes",tooltip:"Cell styles",fetch:ls(n,t,i,"tablecellclass",(function(t){return n.execCommand("mceTableCellToggleClass",!1,t)})),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuButton("tablecellvalign",{icon:"vertical-align",tooltip:"Vertical align",fetch:ls(n,t,Hf,"tablecellverticalalign",cs(n,"vertical-align")),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuButton("tablecellborderwidth",{icon:"border-width",tooltip:"Border width",fetch:ls(n,t,Ec(n),"tablecellborderwidth",cs(n,"border-width")),onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuButton("tablecellborderstyle",{icon:"border-style",tooltip:"Border style",fetch:ls(n,t,Pc(n),"tablecellborderstyle",cs(n,"border-style")),onSetup:e.onSetupCellOrRow}),n.ui.registry.addToggleButton("tablecaption",{tooltip:"Table caption",onAction:o("mceTableToggleCaption"),icon:"table-caption",onSetup:e.onSetupTableWithCaption}),n.ui.registry.addMenuButton("tablecellbackgroundcolor",{icon:"cell-background-color",tooltip:"Background color",fetch:function(t){return t(fs(n,Qc(n),"background-color"))},onSetup:e.onSetupCellOrRow}),n.ui.registry.addMenuButton("tablecellbordercolor",{icon:"cell-border-color",tooltip:"Border color",fetch:function(t){return t(fs(n,Zc(n),"border-color"))},onSetup:e.onSetupCellOrRow}),n.ui.registry.addToggleButton("tablerowheader",{tooltip:"Row header",icon:"table-top-header",onAction:ss(n),onSetup:e.onSetupTableRowHeaders}),n.ui.registry.addToggleButton("tablecolheader",{tooltip:"Column header",icon:"table-left-header",onAction:ms(n),onSetup:e.onSetupTableColumnHeaders})}(n,t,e,i),function(n){var t=function(n){return n.getParam("table_toolbar","tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol")}(n)
t.length>0&&n.ui.registry.addContextToolbar("table",{predicate:function(t){return n.dom.is(t,"table")&&n.getBody().contains(t)},items:t,scope:"node",position:"node"})}(n),n.on("PreInit",(function(){n.serializer.addTempAttr(ju.firstSelected),n.serializer.addTempAttr(ju.lastSelected),function(n){n.formatter.register(Vs)}(n)})),function(n){return n.getParam("table_tab_navigation",!0,"boolean")}(n)&&n.on("keydown",(function(t){(function(n,t,e){if(n.keyCode===_m.TAB){var r=Ou(t),o=function(n){var t=ut(n)
return _n(n,r)||k(Hm,t)},u=t.selection.getRng(),i=Pn.fromDom(n.shiftKey?u.startContainer:u.endContainer)
ge(i,o).each((function(r){n.preventDefault(),be(r,o).each(e.clear),t.selection.collapse(n.shiftKey),(n.shiftKey?jm:Wm)(t,o,r).each((function(n){t.selection.setRng(n)}))}))}})(t,n,o)})),n.on("remove",(function(){r.destroy()})),function(n,t,e,r){return{insertTable:Pf(n),setClipboardRows:Ef(t.setRows),getClipboardRows:Mf(t.getRows),setClipboardCols:Ef(t.setColumns),getClipboardCols:Mf(t.getColumns),resizeHandler:e,selectionTargets:r}}(n,i,r,e)}
Pr.add("table",ig)})()

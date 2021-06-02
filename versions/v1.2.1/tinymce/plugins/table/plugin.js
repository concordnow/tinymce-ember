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
return e},O=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var u=n[o]
r[o]=t(u,o)}return r},D=function(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e)}},A=function(n,t){for(var e=[],r=0,o=n.length;r<o;r++){var u=n[r]
t(u,r)&&e.push(u)}return e},I=function(n,t,e){return function(n,t){for(var e=n.length-1;e>=0;e--)t(n[e],e)}(n,(function(n){e=t(e,n)})),e},B=function(n,t,e){return D(n,(function(n){e=t(e,n)})),e},E=function(n,t){return function(n,t,e){for(var r=0,o=n.length;r<o;r++){var u=n[r]
if(t(u,r))return f.some(u)
if(e(u,r))break}return f.none()}(n,t,u)},P=function(n,t){for(var e=0,r=n.length;e<r;e++){if(t(n[e],e))return f.some(e)}return f.none()},k=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!p(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n)
x.apply(t,n[e])}return t},M=function(n,t){return k(O(n,t))},N=function(n,t){for(var e=0,r=n.length;e<r;++e){if(!0!==t(n[e],e))return!1}return!0},j=function(n){return[n]},_=function(n,t){return t>=0&&t<n.length?f.some(n[t]):f.none()},z=function(n){return _(n,n.length-1)},W=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e)
if(r.isSome())return r}return f.none()},F=function(){return(F=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])
return n}).apply(this,arguments)}
function L(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length
var r=Array(n),o=0
for(t=0;t<e;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i]
return r}var H=function(n){var t,e=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return e||(e=!0,t=n.apply(null,r)),t}},q=function(){return V(0,0)},V=function(n,t){return{major:n,minor:t}},U={nu:V,detect:function(n,t){var e=String(t).toLowerCase()
return 0===n.length?q():function(n,t){var e=function(n,t){for(var e=0;e<n.length;e++){var r=n[e]
if(r.test(t))return r}}(n,t)
if(!e)return{major:0,minor:0}
var r=function(n){return Number(t.replace(e,"$"+n))}
return V(r(1),r(2))}(n,e)},unknown:q},$=function(n,t){var e=String(t).toLowerCase()
return E(n,(function(n){return n.search(e)}))},G=function(n,t){return $(n,t).map((function(n){var e=U.detect(n.versionRegexes,t)
return{current:n.name,version:e}}))},K=function(n,t){return $(n,t).map((function(n){var e=U.detect(n.versionRegexes,t)
return{current:n.name,version:e}}))},X=function(n,t,e){return""===t||n.length>=t.length&&n.substr(e,e+t.length)===t},Y=function(n,t){return-1!==n.indexOf(t)},J=function(n,t){return X(n,t,0)},Q=function(n,t){return X(n,t,n.length-t.length)},Z=function(n){return function(t){return t.replace(n,"")}}(/^\s+|\s+$/g),nn=function(n){return n.length>0},tn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,en=function(n){return function(t){return Y(t,n)}},rn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return Y(n,"edge/")&&Y(n,"chrome")&&Y(n,"safari")&&Y(n,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,tn],search:function(n){return Y(n,"chrome")&&!Y(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return Y(n,"msie")||Y(n,"trident")}},{name:"Opera",versionRegexes:[tn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:en("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:en("firefox")},{name:"Safari",versionRegexes:[tn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(Y(n,"safari")||Y(n,"mobile/"))&&Y(n,"applewebkit")}}],on=[{name:"Windows",search:en("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return Y(n,"iphone")||Y(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:en("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:en("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:en("linux"),versionRegexes:[]},{name:"Solaris",search:en("sunos"),versionRegexes:[]},{name:"FreeBSD",search:en("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:en("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],un={browsers:t(rn),oses:t(on)},cn="Edge",an="Chrome",ln="Opera",fn="Firefox",sn="Safari",mn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isEdge:r(cn),isChrome:r(an),isIE:r("IE"),isOpera:r(ln),isFirefox:r(fn),isSafari:r(sn)}},dn={unknown:function(){return mn({current:void 0,version:U.unknown()})},nu:mn,edge:t(cn),chrome:t(an),ie:t("IE"),opera:t(ln),firefox:t(fn),safari:t(sn)},gn="Windows",pn="Android",vn="Linux",hn="Solaris",bn="FreeBSD",wn="ChromeOS",yn=function(n){var t=n.current,e=n.version,r=function(n){return function(){return t===n}}
return{current:t,version:e,isWindows:r(gn),isiOS:r("iOS"),isAndroid:r(pn),isOSX:r("OSX"),isLinux:r(vn),isSolaris:r(hn),isFreeBSD:r(bn),isChromeOS:r(wn)}},Cn={unknown:function(){return yn({current:void 0,version:U.unknown()})},nu:yn,windows:t(gn),ios:t("iOS"),android:t(pn),linux:t(vn),osx:t("OSX"),solaris:t(hn),freebsd:t(bn),chromeos:t(wn)},xn=function(n,e){var r=un.browsers(),o=un.oses(),u=G(r,n).fold(dn.unknown,dn.nu),i=K(o,n).fold(Cn.unknown,Cn.nu),c=function(n,e,r,o){var u=n.isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!u,c=n.isiOS()||n.isAndroid(),a=c||o("(pointer:coarse)"),l=u||!i&&c&&o("(min-device-width:768px)"),f=i||c&&!l,s=e.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),m=!f&&!l&&!s
return{isiPad:t(u),isiPhone:t(i),isTablet:t(l),isPhone:t(f),isTouch:t(a),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:t(s),isDesktop:t(m)}}(i,u,n,e)
return{browser:u,os:i,deviceType:c}},Sn=function(n){return window.matchMedia(n).matches},Tn=H((function(){return xn(navigator.userAgent,Sn)})),Rn=function(){return Tn()},On=function(n){if(null==n)throw new Error("Node cannot be null or undefined")
return{dom:n}},Dn={fromHtml:function(n,t){var e=(t||document).createElement("div")
if(e.innerHTML=n,!e.hasChildNodes()||e.childNodes.length>1)throw console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node")
return On(e.childNodes[0])},fromTag:function(n,t){var e=(t||document).createElement(n)
return On(e)},fromText:function(n,t){var e=(t||document).createTextNode(n)
return On(e)},fromDom:On,fromPoint:function(n,t,e){return f.from(n.dom.elementFromPoint(t,e)).map(On)}},An=function(n,t){var e=n.dom
if(1!==e.nodeType)return!1
var r=e
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},In=function(n){return 1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount},Bn=function(n,t){return n.dom===t.dom},En=function(n,t){return e=n.dom,r=t.dom,function(n,t,e){return 0!=(n.compareDocumentPosition(t)&e)}(e,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var e,r},Pn=function(n,t){return Rn().browser.isIE()?En(n,t):function(n,t){var e=n.dom,r=t.dom
return e!==r&&e.contains(r)}(n,t)},kn=An,Mn=Object.keys,Nn=Object.hasOwnProperty,jn=function(n,t){for(var e=Mn(n),r=0,o=e.length;r<o;r++){var u=e[r]
t(n[u],u)}},_n=function(n,t){return zn(n,(function(n,e){return{k:e,v:t(n,e)}}))},zn=function(n,t){var e={}
return jn(n,(function(n,r){var o=t(n,r)
e[o.k]=o.v})),e},Wn=function(t,e){var r={}
return function(n,t,e,r){jn(n,(function(n,o){(t(n,o)?e:r)(n,o)}))}(t,e,function(n){return function(t,e){n[e]=t}}(r),n),r},Fn=function(n){return function(n,t){var e=[]
return jn(n,(function(n,r){e.push(t(n,r))})),e}(n,(function(n){return n}))},Ln=function(n,t){return Hn(n,t)?f.from(n[t]):f.none()},Hn=function(n,t){return Nn.call(n,t)},qn=["tfoot","thead","tbody","colgroup"],Vn=function(n,t,e){return{element:n,rowspan:t,colspan:e}},Un=function(n,t,e){return{element:n,cells:t,section:e}},$n=function(n,t){return{element:n,isNew:t}},Gn=function(n,t){return{cells:n,section:t}},Kn=("undefined"!=typeof window?window:Function("return this;")(),function(n){return n.dom.nodeName.toLowerCase()}),Xn=function(n){return n.dom.nodeType},Yn=function(n){return function(t){return Xn(t)===n}},Jn=function(n){return 8===Xn(n)||"#comment"===Kn(n)},Qn=Yn(1),Zn=Yn(3),nt=Yn(9),tt=Yn(11),et=function(n){return Dn.fromDom(n.dom.ownerDocument)},rt=function(n){return nt(n)?n:et(n)},ot=function(n){return f.from(n.dom.parentNode).map(Dn.fromDom)},ut=function(n,t){for(var e=b(t)?t:u,r=n.dom,o=[];null!==r.parentNode&&void 0!==r.parentNode;){var i=r.parentNode,c=Dn.fromDom(i)
if(o.push(c),!0===e(c))break
r=i}return o},it=function(n){return f.from(n.dom.previousSibling).map(Dn.fromDom)},ct=function(n){return f.from(n.dom.nextSibling).map(Dn.fromDom)},at=function(n){return O(n.dom.childNodes,Dn.fromDom)},lt=function(n,t){var e=n.dom.childNodes
return f.from(e[t]).map(Dn.fromDom)},ft=b(Element.prototype.attachShadow)&&b(Node.prototype.getRootNode),st=t(ft),mt=ft?function(n){return Dn.fromDom(n.dom.getRootNode())}:rt,dt=function(n){var t=mt(n)
return tt(t)?f.some(t):f.none()},gt=function(n){return Dn.fromDom(n.dom.host)},pt=function(n){if(st()&&h(n.target)){var t=Dn.fromDom(n.target)
if(Qn(t)&&vt(t)&&n.composed&&n.composedPath){var e=n.composedPath()
if(e)return _(e,0)}}return f.from(n.target)},vt=function(n){return h(n.dom.shadowRoot)},ht=function(n){var t=Zn(n)?n.dom.parentNode:n.dom
if(null==t||null===t.ownerDocument)return!1
var e,r,o=t.ownerDocument
return dt(Dn.fromDom(t)).fold((function(){return o.body.contains(t)}),(e=ht,r=gt,function(n){return e(r(n))}))},bt=function(n){var t=n.dom.body
if(null==t)throw new Error("Body is not available yet")
return Dn.fromDom(t)},wt=function(n,t){var e=[]
return D(at(n),(function(n){t(n)&&(e=e.concat([n])),e=e.concat(wt(n,t))})),e},yt=function(n,t,e){return function(n,t,e){return A(ut(n,e),t)}(n,(function(n){return An(n,t)}),e)},Ct=function(n,t){return function(n,t){return A(at(n),t)}(n,(function(n){return An(n,t)}))},xt=function(n,t){return function(n,t){var e=void 0===t?document:t.dom
return In(e)?[]:O(e.querySelectorAll(n),Dn.fromDom)}(t,n)}
function St(n,t,e,r,o){return n(e,r)?f.some(e):b(o)&&o(e)?f.none():t(e,r,o)}var Tt=function(n,t,e){for(var r=n.dom,o=b(e)?e:u;r.parentNode;){r=r.parentNode
var i=Dn.fromDom(r)
if(t(i))return f.some(i)
if(o(i))break}return f.none()},Rt=function(n,t,e){return Tt(n,(function(n){return An(n,t)}),e)},Ot=function(n,t){return function(n,t){return E(n.dom.childNodes,(function(n){return t(Dn.fromDom(n))})).map(Dn.fromDom)}(n,(function(n){return An(n,t)}))},Dt=function(n,t){return function(n,t){var e=void 0===t?document:t.dom
return In(e)?f.none():f.from(e.querySelector(n)).map(Dn.fromDom)}(t,n)},At=function(n,t,e){return St((function(n,t){return An(n,t)}),Rt,n,t,e)},It=function(n,t,e){if(!(d(e)||v(e)||w(e)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",e,":: Element ",n),new Error("Attribute value was not simple")
n.setAttribute(t,e+"")},Bt=function(n,t,e){It(n.dom,t,e)},Et=function(n,t){var e=n.dom
jn(t,(function(n,t){It(e,t,n)}))},Pt=function(n,t){var e=n.dom.getAttribute(t)
return null===e?void 0:e},kt=function(n,t){return f.from(Pt(n,t))},Mt=function(n,t){n.dom.removeAttribute(t)},Nt=function(n){return B(n.dom.attributes,(function(n,t){return n[t.name]=t.value,n}),{})},jt=function(n){return void 0!==n.style&&b(n.style.getPropertyValue)},_t=function(n,t,e){if(!d(e))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",e,":: Element ",n),new Error("CSS value must be a string: "+e)
jt(n)&&n.style.setProperty(t,e)},zt=function(n,t,e){var r=n.dom
_t(r,t,e)},Wt=function(n,t){var e=n.dom
jn(t,(function(n,t){_t(e,t,n)}))},Ft=function(n,t){var e=n.dom,r=window.getComputedStyle(e).getPropertyValue(t)
return""!==r||ht(n)?r:Lt(e,t)},Lt=function(n,t){return jt(n)?n.style.getPropertyValue(t):""},Ht=function(n,t){var e=n.dom,r=Lt(e,t)
return f.from(r).filter((function(n){return n.length>0}))},qt=function(n,t){(function(n,t){jt(n)&&n.style.removeProperty(t)})(n.dom,t),kt(n,"style").map(Z).is("")&&Mt(n,"style")},Vt=function(n,t,e){return void 0===e&&(e=0),kt(n,t).map((function(n){return parseInt(n,10)})).getOr(e)},Ut=function(n,t){return Vt(n,t,1)},$t=function(n){return Ut(n,"colspan")>1},Gt=function(n){return Ut(n,"rowspan")>1},Kt=function(n,t){return parseInt(Ft(n,t),10)},Xt=t(10),Yt=t(10),Jt=function(n,t){return Qt(n,t,i)},Qt=function(n,t,e){return M(at(n),(function(n){return An(n,t)?e(n)?[n]:[]:Qt(n,t,e)}))},Zt=function(n,t){return function(n,t,e){return void 0===e&&(e=u),e(t)?f.none():S(n,Kn(t))?f.some(t):Rt(t,n.join(","),(function(n){return An(n,"table")||e(n)}))}(["td","th"],n,t)},ne=function(n){return Jt(n,"th,td")},te=function(n){return M(oe(n),(function(n){return Ct(n,"col")}))},ee=function(n,t){return At(n,"table",t)},re=function(n){return Jt(n,"tr")},oe=function(n){return ee(n).fold(t([]),(function(n){return Ct(n,"colgroup")}))},ue=function(n,t){return O(n,(function(n){if("colgroup"===Kn(n)){var e=O(te(n),(function(n){var t=Vt(n,"span",1)
return Vn(n,1,t)}))
return Un(n,e,"colgroup")}e=O(ne(n),(function(n){var t=Vt(n,"rowspan",1),e=Vt(n,"colspan",1)
return Vn(n,t,e)}))
return Un(n,e,t(n))}))},ie=function(n){return ot(n).map((function(n){var t=Kn(n)
return function(n){return S(qn,n)}(t)?t:"tbody"})).getOr("tbody")},ce=function(n){var t=re(n),e=L(oe(n),t)
return ue(e,ie)},ae=function(n,t){return n+","+t},le=function(n,t){var e=M(n.all,(function(n){return n.cells}))
return A(e,t)},fe=function(n){var t={},e=[],r={},o=0,u=0,i=0
return D(n,(function(n){if("colgroup"===n.section)r=function(n){var t={},e=0
return D(n.cells,(function(n){var r=n.colspan
R(r,(function(o){var u=e+o
t[u]=function(n,t,e){return{element:n,colspan:t,column:e}}(n.element,r,u)})),e+=r})),t}(n)
else{var c=[]
D(n.cells,(function(n){for(var e=0;void 0!==t[ae(i,e)];)e++
for(var r=function(n,t,e,r,o){return{element:n,rowspan:t,colspan:e,row:r,column:o}}(n.element,n.rowspan,n.colspan,i,e),o=0;o<n.colspan;o++)for(var a=0;a<n.rowspan;a++){var l=e+o,f=ae(i+a,l)
t[f]=r,u=Math.max(u,l+1)}c.push(r)})),o++,e.push(Un(n.element,c,n.section)),i++}})),{grid:function(n,t){return{rows:n,columns:t}}(o,u),access:t,all:e,columns:r}},se={fromTable:function(n){var t=ce(n)
return fe(t)},generate:fe,getAt:function(n,t,e){var r=n.access[ae(t,e)]
return void 0!==r?f.some(r):f.none()},findItem:function(n,t,e){var r=le(n,(function(n){return e(t,n.element)}))
return r.length>0?f.some(r[0]):f.none()},filterItems:le,justCells:function(n){return M(n.all,(function(n){return n.cells}))},justColumns:function(n){return Fn(n.columns)},hasColumns:function(n){return Mn(n.columns).length>0},getColumnAt:function(n,t){return f.from(n.columns[t])}},me=function(n,t){var e=t.column,r=t.column+t.colspan-1,o=t.row,u=t.row+t.rowspan-1
return e<=n.finishCol&&r>=n.startCol&&o<=n.finishRow&&u>=n.startRow},de=function(n,t){return t.column>=n.startCol&&t.column+t.colspan-1<=n.finishCol&&t.row>=n.startRow&&t.row+t.rowspan-1<=n.finishRow},ge=function(n,t,e){var r=se.findItem(n,t,Bn),o=se.findItem(n,e,Bn)
return r.bind((function(n){return o.map((function(t){return e=n,r=t,o=Math.min(e.row,r.row),u=Math.min(e.column,r.column),i=Math.max(e.row+e.rowspan-1,r.row+r.rowspan-1),c=Math.max(e.column+e.colspan-1,r.column+r.colspan-1),{startRow:o,startCol:u,finishRow:i,finishCol:c}
var e,r,o,u,i,c}))}))},pe=function(n,t,e){return ge(n,t,e).bind((function(t){return function(n,t){for(var e=!0,o=r(de,t),u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++)e=e&&se.getAt(n,u,i).exists(o)
return e?f.some(t):f.none()}(n,t)}))},ve=function(n,t,e){return ge(n,t,e).map((function(t){var e=se.filterItems(n,r(me,t))
return O(e,(function(n){return n.element}))}))},he=function(n,t){return se.findItem(n,t,(function(n,t){return Pn(t,n)})).map((function(n){return n.element}))},be=function(n,t,e){return ee(n).bind((function(r){return function(n,t,e,r){return se.findItem(n,t,Bn).bind((function(t){var o=e>0?t.row+t.rowspan-1:t.row,u=r>0?t.column+t.colspan-1:t.column
return se.getAt(n,o+e,u+r).map((function(n){return n.element}))}))}(Ce(r),n,t,e)}))},we=function(n,t,e){var r=Ce(n)
return ve(r,t,e)},ye=function(n,t,e,r,o){var u=Ce(n),i=Bn(n,e)?f.some(t):he(u,t),c=Bn(n,o)?f.some(r):he(u,r)
return i.bind((function(n){return c.bind((function(t){return ve(u,n,t)}))}))},Ce=se.fromTable,xe=function(n,t){ot(n).each((function(e){e.dom.insertBefore(t.dom,n.dom)}))},Se=function(n,t){ct(n).fold((function(){ot(n).each((function(n){Re(n,t)}))}),(function(n){xe(n,t)}))},Te=function(n,t){(function(n){return lt(n,0)})(n).fold((function(){Re(n,t)}),(function(e){n.dom.insertBefore(t.dom,e.dom)}))},Re=function(n,t){n.dom.appendChild(t.dom)},Oe=function(n,t){xe(n,t),Re(t,n)},De=function(n,t){D(t,(function(e,r){var o=0===r?n:t[r-1]
Se(o,e)}))},Ae=function(n,t){D(t,(function(t){Re(n,t)}))},Ie=function(n){n.dom.textContent="",D(at(n),(function(n){Be(n)}))},Be=function(n){var t=n.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},Ee=function(n){var t,e=at(n)
e.length>0&&(t=n,D(e,(function(n){xe(t,n)}))),Be(n)}
var Pe=function(n,t){var e=function(t){return n(t)?f.from(t.dom.nodeValue):f.none()}
return{get:function(r){if(!n(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return e(r).getOr("")},getOption:e,set:function(e,r){if(!n(e))throw new Error("Can only set raw "+t+" value of a "+t+" node")
e.dom.nodeValue=r}}}(Zn,"text"),ke=function(n){return Pe.get(n)},Me=function(n){return Pe.getOption(n)},Ne=function(n,t){return Pe.set(n,t)},je=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
function _e(){return{up:t({selector:Rt,closest:At,predicate:Tt,all:ut}),down:t({selector:xt,predicate:wt}),styles:t({get:Ft,getRaw:Ht,set:zt,remove:qt}),attrs:t({get:Pt,set:Bt,remove:Mt,copyTo:function(n,t){var e=Nt(n)
Et(t,e)}}),insert:t({before:xe,after:Se,afterAll:De,append:Re,appendAll:Ae,prepend:Te,wrap:Oe}),remove:t({unwrap:Ee,remove:Be}),create:t({nu:Dn.fromTag,clone:function(n){return Dn.fromDom(n.dom.cloneNode(!1))},text:Dn.fromText}),query:t({comparePosition:function(n,t){return n.dom.compareDocumentPosition(t.dom)},prevSibling:it,nextSibling:ct}),property:t({children:at,name:Kn,parent:ot,document:function(n){return rt(n).dom},isText:Zn,isComment:Jn,isElement:Qn,getText:ke,setText:Ne,isBoundary:function(n){return!!Qn(n)&&("body"===Kn(n)||S(je,Kn(n)))},isEmptyTag:function(n){return!!Qn(n)&&S(["br","img","hr","input"],Kn(n))},isNonEditable:function(n){return Qn(n)&&"false"===Pt(n,"contenteditable")}}),eq:Bn,is:kn}}var ze=function(n,t,e,r){var o=t(n,e)
return I(r,(function(e,r){var o=t(n,r)
return We(n,e,o)}),o)},We=function(n,t,e){return t.bind((function(t){return e.filter(r(n.eq,t))}))},Fe=function(n,t,e){return e.length>0?function(n,t,e,r){return r(n,t,e[0],e.slice(1))}(n,t,e,ze):f.none()},Le=function(n,t,e,o){void 0===o&&(o=u)
var i=[t].concat(n.up().all(t)),c=[e].concat(n.up().all(e)),a=function(n){return P(n,o).fold((function(){return n}),(function(t){return n.slice(0,t+1)}))},l=a(i),f=a(c),s=E(l,(function(t){return T(f,function(n,t){return r(n.eq,t)}(n,t))}))
return{firstpath:l,secondpath:f,shared:s}},He=_e(),qe=function(n,t){return Fe(He,(function(t,e){return n(e)}),t)},Ve=function(n){return Rt(n,"table")},Ue=function(n,t,e){var r=function(n){return function(t){return void 0!==e&&e(t)||Bn(t,n)}}
return Bn(n,t)?f.some({boxes:f.some([n]),start:n,finish:t}):Ve(n).bind((function(o){return Ve(t).bind((function(u){if(Bn(o,u))return f.some({boxes:we(o,n,t),start:n,finish:t})
if(Pn(o,u)){var i=(c=yt(t,"td,th",r(o))).length>0?c[c.length-1]:t
return f.some({boxes:ye(o,n,o,t,u),start:n,finish:i})}if(Pn(u,o)){var c,a=(c=yt(n,"td,th",r(u))).length>0?c[c.length-1]:n
return f.some({boxes:ye(u,n,o,t,u),start:n,finish:a})}return function(n,t,e){return Le(He,n,t,e)}(n,t).shared.bind((function(i){return At(i,"table",e).bind((function(e){var i=yt(t,"td,th",r(e)),c=i.length>0?i[i.length-1]:t,a=yt(n,"td,th",r(e)),l=a.length>0?a[a.length-1]:n
return f.some({boxes:ye(e,n,o,t,u),start:l,finish:c})}))}))}))}))},$e=function(n,t){var e=xt(n,t)
return e.length>0?f.some(e):f.none()},Ge=function(n,t,e){return Dt(n,t).bind((function(t){return Dt(n,e).bind((function(n){return qe(Ve,[t,n]).map((function(e){return{first:t,last:n,table:e}}))}))}))},Ke=function(n,t,e,r,o){return function(n,t){return E(n,(function(n){return An(n,t)}))}(n,o).bind((function(n){return be(n,t,e).bind((function(n){return function(n,t){return Rt(n,"table").bind((function(e){return Dt(e,t).bind((function(t){return Ue(t,n).bind((function(n){return n.boxes.map((function(t){return{boxes:t,start:n.start,finish:n.finish}}))}))}))}))}(n,r)}))}))},Xe=function(n,t){return $e(n,t)},Ye=function(n,t,e){return Ge(n,t,e).bind((function(t){var e=function(t){return Bn(n,t)},r="thead,tfoot,tbody,table",o=Rt(t.first,r,e),u=Rt(t.last,r,e)
return o.bind((function(n){return u.bind((function(e){return Bn(n,e)?function(n,t,e){var r=Ce(n)
return pe(r,t,e)}(t.table,t.first,t.last):f.none()}))}))}))},Je=function(n){if(!p(n))throw new Error("cases must be an array")
if(0===n.length)throw new Error("there must be at least one case")
var t=[],e={}
return D(n,(function(r,o){var u=Mn(r)
if(1!==u.length)throw new Error("one and only one name per case")
var i=u[0],c=r[i]
if(void 0!==e[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!p(c))throw new Error("case arguments must be an array")
t.push(i),e[i]=function(){var e=arguments.length
if(e!==c.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+c.length+" ("+c+"), got "+e)
for(var r=new Array(e),u=0;u<r.length;u++)r[u]=arguments[u]
var a=function(n){var e=Mn(n)
if(t.length!==e.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+e.join(","))
if(!N(t,(function(n){return S(e,n)})))throw new Error("Not all branches were specified when using match. Specified: "+e.join(", ")+"\nRequired: "+t.join(", "))
return n[i].apply(null,r)}
return{fold:function(){if(arguments.length!==n.length)throw new Error("Wrong number of arguments to fold. Expected "+n.length+", got "+arguments.length)
var t=arguments[o]
return t.apply(null,r)},match:a,log:function(n){console.log(n,{constructors:t,constructor:i,params:r})}}}})),e},Qe=Je([{none:[]},{multiple:["elements"]},{single:["element"]}]),Ze=function(n,t,e,r){return n.fold(t,e,r)},nr=Qe.none,tr=Qe.multiple,er=Qe.single,rr=tinymce.util.Tools.resolve("tinymce.PluginManager"),or=function(n,t,e){var r=n[e].element,o=Dn.fromTag("td")
Re(o,Dn.fromTag("br")),(t?Re:Te)(r,o)},ur=function(n,t){var e=function(n){return An(n.element,t)},r=ce(n),o=se.generate(r),u=function(n,t){var e=n.grid.columns,r=n.grid.rows,o=e,u=0,i=0
return jn(n.access,(function(n){if(t(n)){var e=n.row,c=e+n.rowspan-1,a=n.column,l=a+n.colspan-1
e<r?r=e:c>u&&(u=c),a<o?o=a:l>i&&(i=l)}})),function(n,t,e,r){return{minRow:n,minCol:t,maxRow:e,maxCol:r}}(r,o,u,i)}(o,e),i="th:not("+t+"),td:not("+t+")",c=Qt(n,"th,td",(function(n){return An(n,i)}))
return D(c,Be),function(n,t,e,r){for(var o=t.grid.columns,u=t.grid.rows,i=0;i<u;i++)for(var c=!1,a=0;a<o;a++)i<e.minRow||i>e.maxRow||a<e.minCol||a>e.maxCol||(se.getAt(t,i,a).filter(r).isNone()?or(n,c,i):c=!0)}(r,o,u,e),function(n,t){var e=A(Jt(n,"tr"),(function(n){return 0===n.dom.childElementCount}))
D(e,Be),t.minCol!==t.maxCol&&t.minRow!==t.maxRow||D(Jt(n,"th,td"),(function(n){Mt(n,"rowspan"),Mt(n,"colspan")})),Mt(n,"width"),Mt(n,"height"),qt(n,"width"),qt(n,"height")}(n,u),n},ir=function(n){return"img"===Kn(n)?1:Me(n).fold((function(){return at(n).length}),(function(n){return n.length}))},cr=["img","br"],ar=function(n){return Me(n).filter((function(n){return 0!==n.trim().length||n.indexOf(" ")>-1})).isSome()||S(cr,Kn(n))},lr=function(n){return t=ar,(e=function(n){for(var r=0;r<n.childNodes.length;r++){var o=Dn.fromDom(n.childNodes[r])
if(t(o))return f.some(o)
var u=e(n.childNodes[r])
if(u.isSome())return u}return f.none()})(n.dom)
var t,e},fr=function(n){return sr(n,ar)},sr=function(n,t){var e=function(n){for(var r=at(n),o=r.length-1;o>=0;o--){var u=r[o]
if(t(u))return f.some(u)
var i=e(u)
if(i.isSome())return i}return f.none()}
return e(n)},mr=function(n,t){return Dn.fromDom(n.dom.cloneNode(t))},dr=function(n){return mr(n,!1)},gr=function(n){return mr(n,!0)},pr=function(n,t){var e=function(n,t){var e=Dn.fromTag(t),r=Nt(n)
return Et(e,r),e}(n,t),r=at(gr(n))
return Ae(e,r),e},vr={scope:["row","col"]},hr=function(){var n=Dn.fromTag("td")
return Re(n,Dn.fromTag("br")),n},br=function(){return Dn.fromTag("col")},wr=function(){return Dn.fromTag("colgroup")},yr=function(n,t,e){var r=pr(n,t)
return jn(e,(function(n,t){null===n?Mt(r,t):Bt(r,t,n)})),r},Cr=function(n){return n},xr=function(n){return function(){return Dn.fromTag("tr",n.dom)}},Sr=function(n,t,e){var r=function(n,t){var e,r,o,u
e=n.element,r=t,o=e.dom,u=r.dom,jt(o)&&jt(u)&&(u.style.cssText=o.style.cssText),qt(t,"height"),1!==n.colspan&&qt(n.element,"width")}
return{col:function(t){var e=et(t.element),o=Dn.fromTag(Kn(t.element),e.dom)
return r(t,o),n(t.element,o),o},colgroup:wr,row:xr(t),cell:function(t){var o=et(t.element),u=Dn.fromTag(Kn(t.element),o.dom),i=e.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"]),c=i.length>0?function(n,t,e){return lr(n).map((function(r){var o=e.join(","),u=yt(r,o,(function(t){return Bn(t,n)}))
return I(u,(function(n,t){var e=dr(t)
return Mt(e,"contenteditable"),Re(n,e),e}),t)})).getOr(t)}(t.element,u,i):u
return Re(c,Dn.fromTag("br")),r(t,u),function(n,t){jn(vr,(function(e,r){return kt(n,r).filter((function(n){return S(e,n)})).each((function(n){return Bt(t,r,n)}))}))}(t.element,u),n(t.element,u),u},replace:yr,gap:hr}},Tr=function(n){return{col:br,colgroup:wr,row:xr(n),cell:hr,replace:Cr,gap:hr}},Rr=function(n){return O(n,Dn.fromDom)},Or=function(n){return Ze(n.get(),t([]),e,j)},Dr=function(n){var t=function(n,t){return kt(n,t).exists((function(n){return parseInt(n,10)>1}))},e=Or(n)
return e.length>0&&N(e,(function(n){return t(n,"rowspan")||t(n,"colspan")}))?f.some(e):f.none()},Ar=function(n,t,e){return Ze(t.get(),f.none,(function(t){return t.length<=1?f.none():Ye(n,e.firstSelectedSelector,e.lastSelectedSelector).map((function(n){return{bounds:n,cells:t}}))}),f.none)},Ir="data-mce-selected",Br="data-mce-first-selected",Er="data-mce-last-selected",Pr={selected:Ir,selectedSelector:"td[data-mce-selected],th[data-mce-selected]",firstSelected:Br,firstSelectedSelector:"td[data-mce-first-selected],th[data-mce-first-selected]",lastSelected:Er,lastSelectedSelector:"td[data-mce-last-selected],th[data-mce-last-selected]"},kr=function(n){return{element:n,mergable:f.none(),unmergable:f.none(),selection:[n]}},Mr=function(n,t,e){return{element:e,mergable:Ar(t,n,Pr),unmergable:Dr(n),selection:Or(n)}},Nr=function(t,e,r,o){t.on("BeforeGetContent",(function(r){!0===r.selection&&Ze(e.get(),n,(function(n){r.preventDefault(),function(n){return ee(n[0]).map(gr).map((function(n){return[ur(n,"[data-mce-selected]")]}))}(n).each((function(n){r.content="text"===r.format?function(n){return O(n,(function(n){return n.dom.innerText})).join("")}(n):function(n,t){return O(t,(function(t){return n.selection.serializer.serialize(t.dom,{})})).join("")}(t,n)}))}),n)})),t.on("BeforeSetContent",(function(n){!0===n.selection&&!0===n.paste&&f.from(t.dom.getParent(t.selection.getStart(),"th,td")).each((function(e){var u=Dn.fromDom(e)
ee(u).each((function(e){var i,c,a,l,f=A((i=n.content,(a=(c||document).createElement("div")).innerHTML=i,at(Dn.fromDom(a))),(function(n){return"meta"!==Kn(n)}))
if(1===f.length&&(l=f[0],"table"===Kn(l))){n.preventDefault()
var s=Dn.fromDom(t.getDoc()),m=Tr(s),d=function(n,t,e){return{element:n,clipboard:t,generators:e}}(u,f[0],m)
r.pasteCells(e,d).each((function(n){t.selection.setRng(n),t.focus(),o.clear(e)}))}}))}))}))},jr=Je([{none:[]},{only:["index"]},{left:["index","next"]},{middle:["prev","index","next"]},{right:["prev","index"]}]),_r=F({},jr),zr=function(n,e,r,o,u){var i=n.slice(0),c=function(n,t){return 0===n.length?_r.none():1===n.length?_r.only(0):0===t?_r.left(0,1):t===n.length-1?_r.right(t-1,t):t>0&&t<n.length-1?_r.middle(t-1,t,t+1):_r.none()}(n,e),a=t(O(i,t(0)))
return c.fold(a,(function(n){return o.singleColumnWidth(i[n],r)}),(function(n,t){return u.calcLeftEdgeDeltas(i,n,t,r,o.minCellWidth(),o.isRelative)}),(function(n,t,e){return u.calcMiddleDeltas(i,n,t,e,r,o.minCellWidth(),o.isRelative)}),(function(n,t){return u.calcRightEdgeDeltas(i,n,t,r,o.minCellWidth(),o.isRelative)}))},Wr=function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e)
return t}
function Fr(n,t){var e=function(e){var r=t(e)
if(r<=0||null===r){var o=Ft(e,n)
return parseFloat(o)||0}return r},r=function(n,t){return B(t,(function(t,e){var r=Ft(n,e),o=void 0===r?0:parseInt(r,10)
return isNaN(o)?t:t+o}),0)}
return{set:function(t,e){if(!w(e)&&!e.match(/^[0-9]+$/))throw new Error(n+".set accepts only positive integer values. Value was "+e)
var r=t.dom
jt(r)&&(r.style[n]=e+"px")},get:e,getOuter:e,aggregate:r,max:function(n,t,e){var o=r(n,e)
return t>o?t-o:0}}}var Lr,Hr,qr,Vr,Ur,$r=Fr("width",(function(n){return n.dom.offsetWidth})),Gr=function(n){return $r.get(n)},Kr=function(n){return $r.getOuter(n)},Xr=function(n){var t=n.grid,r=R(t.columns,e),o=R(t.rows,e)
return O(r,(function(t){return Yr((function(){return M(o,(function(e){return se.getAt(n,e,t).filter((function(n){return n.column===t})).toArray()}))}),(function(n){return 1===n.colspan}),(function(){return se.getAt(n,0,t)}))}))},Yr=function(n,t,e){var r=n()
return E(r,t).orThunk((function(){return f.from(r[0]).orThunk(e)})).map((function(n){return n.element}))},Jr=function(n){var r=n.grid,o=R(r.rows,e),u=R(r.columns,e)
return O(o,(function(e){return Yr((function(){return M(u,(function(r){return se.getAt(n,e,r).filter((function(n){return n.row===e})).fold(t([]),(function(n){return[n]}))}))}),(function(n){return 1===n.rowspan}),(function(){return se.getAt(n,e,0)}))}))},Qr=function(n,t){if(t<0||t>=n.length-1)return f.none()
var e=n[t].fold((function(){var e=function(n){var t=y.call(n,0)
return t.reverse(),t}(n.slice(0,t))
return W(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return f.some({value:n,delta:0})})),r=n[t+1].fold((function(){var e=n.slice(t+1)
return W(e,(function(n,t){return n.map((function(n){return{value:n,delta:t+1}}))}))}),(function(n){return f.some({value:n,delta:1})}))
return e.bind((function(n){return r.map((function(t){var e=t.delta+n.delta
return Math.abs(t.value-n.value)/e}))}))},Zr=function(n,t){return function(e){return"rtl"===no(e)?t:n}},no=function(n){return"rtl"===Ft(n,"direction")?"rtl":"ltr"},to=Fr("height",(function(n){var t=n.dom
return ht(n)?t.getBoundingClientRect().height:t.offsetHeight})),eo=function(n){return to.get(n)},ro=function(n){return to.getOuter(n)},oo=function(n,t){return{left:n,top:t,translate:function(e,r){return oo(n+e,t+r)}}},uo=oo,io=function(n,t){return void 0!==n?n:void 0!==t?t:0},co=function(n){var t=n.dom.ownerDocument,e=t.body,r=t.defaultView,o=t.documentElement
if(e===n.dom)return uo(e.offsetLeft,e.offsetTop)
var u=io(null==r?void 0:r.pageYOffset,o.scrollTop),i=io(null==r?void 0:r.pageXOffset,o.scrollLeft),c=io(o.clientTop,e.clientTop),a=io(o.clientLeft,e.clientLeft)
return ao(n).translate(i-a,u-c)},ao=function(n){var t=n.dom,e=t.ownerDocument.body
return e===t?uo(e.offsetLeft,e.offsetTop):ht(n)?function(n){var t=n.getBoundingClientRect()
return uo(t.left,t.top)}(t):uo(0,0)},lo=function(n,t){return{row:n,y:t}},fo=function(n,t){return{col:n,x:t}},so=function(n){return co(n).left+Kr(n)},mo=function(n){return co(n).left},go=function(n,t){return fo(n,mo(t))},po=function(n,t){return fo(n,so(t))},vo=function(n){return co(n).top},ho=function(n,t){return lo(n,vo(t))},bo=function(n,t){return lo(n,vo(t)+ro(t))},wo=function(n,t,e){if(0===e.length)return[]
var r=O(e.slice(1),(function(t,e){return t.map((function(t){return n(e,t)}))})),o=e[e.length-1].map((function(n){return t(e.length-1,n)}))
return r.concat([o])},yo={delta:e,positions:function(n){return wo(ho,bo,n)},edge:vo},Co=Zr({delta:e,edge:mo,positions:function(n){return wo(go,po,n)}},{delta:function(n){return-n},edge:so,positions:function(n){return wo(po,go,n)}}),xo={delta:function(n,t){return Co(t).delta(n,t)},positions:function(n,t){return Co(t).positions(n,t)},edge:function(n){return Co(n).edge(n)}},So={unsupportedLength:["em","ex","cap","ch","ic","rem","lh","rlh","vw","vh","vi","vb","vmin","vmax","cm","mm","Q","in","pc","pt","px"],fixed:["px","pt"],relative:["%"],empty:[""]},To=(Hr="[eE][+-]?[0-9]+",Vr=["Infinity","[0-9]+\\."+(qr=function(n){return"(?:"+n+")?"})(Lr="[0-9]+")+qr(Hr),"\\.[0-9]+"+qr(Hr),Lr+qr(Hr)].join("|"),new RegExp("^([+-]?(?:"+Vr+"))(.*)$")),Ro=function(n,t){return f.from(To.exec(n)).bind((function(n){var e=Number(n[1]),r=n[2]
return function(n,t){return T(t,(function(t){return T(So[t],(function(t){return n===t}))}))}(r,t)?f.some({value:e,unit:r}):f.none()}))},Oo=function(){var n=Rn().browser
return n.isIE()||n.isEdge()},Do=function(n,t,e){return function(n,t){var e=parseFloat(n)
return isNaN(e)?t:e}(Ft(n,t),e)},Ao=function(n){return Oo()?function(n){var t=n.dom.getBoundingClientRect().height
return"border-box"===Ft(n,"box-sizing")?t:t-Do(n,"padding-top",0)-Do(n,"padding-bottom",0)-(Do(n,"border-top-width",0)+Do(n,"border-bottom-width",0))}(n):Do(n,"height",eo(n))},Io=function(n){return Oo()?function(n){var t=n.dom.getBoundingClientRect().width
return"border-box"===Ft(n,"box-sizing")?t:t-Do(n,"padding-left",0)-Do(n,"padding-right",0)-(Do(n,"border-left-width",0)+Do(n,"border-right-width",0))}(n):Do(n,"width",Gr(n))},Bo=/(\d+(\.\d+)?)%/,Eo=/(\d+(\.\d+)?)px|em/,Po=function(n,t){var e,r=(e=n,f.from(e.dom.offsetParent).map(Dn.fromDom)).getOr(bt(et(n)))
return t(n)/t(r)*100},ko=function(n,t){zt(n,"width",t+"px")},Mo=function(n,t){zt(n,"width",t+"%")},No=function(n,t){zt(n,"height",t+"px")},jo=function(n,t,e,r){var o=parseInt(n,10)
return Q(n,"%")&&"table"!==Kn(t)?function(n,t,e,r){var o=ee(n).map((function(n){var r=e(n)
return Math.floor(t/100*r)})).getOr(t)
return r(n,o),o}(t,o,e,r):o},_o=function(n){var t=function(n){return Ht(n,"height").getOrThunk((function(){return Ao(n)+"px"}))}(n)
return t?jo(t,n,eo,No):eo(n)},zo=function(n){return Ht(n,"width").fold((function(){return f.from(Pt(n,"width"))}),(function(n){return f.some(n)}))},Wo=function(n,t){return n/t.pixelWidth()*100},Fo=function(n,t){return zo(n).fold((function(){var e=Gr(n)
return Wo(e,t)}),(function(e){return function(n,t,e){var r=Bo.exec(t)
if(null!==r)return parseFloat(r[1])
var o=Io(n)
return Wo(o,e)}(n,e,t)}))},Lo=function(n,t){return zo(n).fold((function(){return Io(n)}),(function(e){return function(n,t,e){var r=Eo.exec(t)
if(null!==r)return parseInt(r[1],10)
var o=Bo.exec(t)
return null!==o?function(n,t){return n/100*t.pixelWidth()}(parseFloat(o[1]),e):Io(n)}(n,e,t)}))},Ho=function(n){return function(n,t,e){return e(n)/Ut(n,t)}(n,"rowspan",_o)},qo=function(n,t,e){zt(n,"width",t+e)},Vo=function(n){return Po(n,Gr)+"%"},Uo=t(Bo),$o=t(Eo),Go=(Ur="col",function(n){return Qn(n)&&Kn(n)===Ur}),Ko=function(n,t,e){return Ht(n,t).fold((function(){return e(n)+"px"}),(function(n){return n}))},Xo=function(n,t){return Ko(n,"width",(function(n){return Go(n)?Gr(n):Lo(n,t)}))},Yo=function(n){return Ko(n,"height",Ho)},Jo=function(n,t,e,r,o,u){return n.filter(r).fold((function(){return u(Qr(e,t))}),(function(n){return o(n)}))},Qo=function(n,t,r,u,i){var c=Xr(n),a=se.hasColumns(n)?function(n){return O(se.justColumns(n),(function(n){return f.from(n.element)}))}(n):c,l=[f.some(xo.edge(t))].concat(O(xo.positions(c,t),(function(n){return n.map((function(n){return n.x}))}))),s=o($t)
return O(a,(function(n,t){return Jo(n,t,l,s,(function(n){if(function(n){return!Go(n)||Ht(n,"width").isSome()}(n))return r(n,i)
var o,a,m=(o=c[t],a=e,null!=o?a(o):f.none())
return Jo(m,t,l,s,(function(n){return u(f.some(Gr(n)))}),u)}),u)}))},Zo=function(n){return n.map((function(n){return n+"px"})).getOr("")},nu=function(n,t,e){return Qo(n,t,Lo,(function(n){return n.getOrThunk(e.minCellWidth)}),e)},tu=function(n,t,e,r,u){var i=Jr(n),c=[f.some(e.edge(t))].concat(O(e.positions(i,t),(function(n){return n.map((function(n){return n.y}))})))
return O(i,(function(n,t){return Jo(n,t,c,o(Gt),r,u)}))},eu=function(n,t,e){for(var r=0,o=n;o<t;o++)r+=void 0!==e[o]?e[o]:0
return r},ru=function(n,t){var e=se.justCells(n)
return O(e,(function(n){var e=eu(n.row,n.row+n.rowspan,t)
return{element:n.element,height:e,rowspan:n.rowspan}}))},ou=function(n,t){return se.hasColumns(n)?function(n,t){var e=se.justColumns(n)
return O(e,(function(n,e){return{element:n.element,width:t[e],colspan:n.colspan}}))}(n,t):function(n,t){var e=se.justCells(n)
return O(e,(function(n){var e=eu(n.column,n.column+n.colspan,t)
return{element:n.element,width:e,colspan:n.colspan}}))}(n,t)},uu=function(n,t,e){var r=ou(n,t)
D(r,(function(n){e.setElementWidth(n.element,n.width)}))},iu=function(n,t,e,r,o){var u=se.fromTable(n),i=o.getCellDelta(t),c=o.getWidths(u,o),a=e===u.grid.columns-1,l=r.clampTableDelta(c,e,i,o.minCellWidth(),a),f=zr(c,e,l,o,r),s=O(f,(function(n,t){return n+c[t]}))
uu(u,s,o),r.resizeTable(o.adjustTableWidth,l,a)},cu=function(n,t,e,r){var o=se.fromTable(n),u=function(n,t,e){return tu(n,t,e,Ho,(function(n){return n.getOrThunk(Yt)}))}(o,n,r),i=O(u,(function(n,r){return e===r?Math.max(t+n,Yt()):n})),c=ru(o,i),a=function(n,t){return O(n.all,(function(n,e){return{element:n.element,height:t[e]}}))}(o,i)
D(a,(function(n){No(n.element,n.height)})),D(c,(function(n){No(n.element,n.height)}))
var l=I(i,(function(n,t){return n+t}),0)
No(n,l)},au=function(n){return O(n,t(0))},lu=function(n,t,e,r,o){return o(n.slice(0,t)).concat(r).concat(o(n.slice(e)))},fu=function(n){return function(t,e,r,o){if(n(r)){var u=Math.max(o,t[e]-Math.abs(r)),i=Math.abs(u-t[e])
return r>=0?i:-i}return r}},su=fu((function(n){return n<0})),mu=fu(i),du=function(){var n=function(n,t,e,r){var o=(100+e)/100,u=Math.max(r,(n[t]+e)/o)
return O(n,(function(n,e){return(e===t?u:n/o)-n}))},t=function(t,e,r,o,u,i){return i?n(t,e,o,u):function(n,t,e,r,o){var u=su(n,t,r,o)
return lu(n,t,e+1,[u,0],au)}(t,e,r,o,u)}
return{resizeTable:function(n,t){return n(t)},clampTableDelta:su,calcLeftEdgeDeltas:t,calcMiddleDeltas:function(n,e,r,o,u,i,c){return t(n,r,o,u,i,c)},calcRightEdgeDeltas:function(t,e,r,o,u,i){if(i)return n(t,r,o,u)
var c=su(t,r,o,u)
return au(t.slice(0,r)).concat([c])}}},gu=function(n,e){var r=f.from(n.dom.documentElement).map(Dn.fromDom).getOr(n)
return{parent:t(r),view:t(n),origin:t(uo(0,0)),isResizable:e}},pu=function(n,e,r){return{parent:t(e),view:t(n),origin:t(uo(0,0)),isResizable:r}},vu=Je([{invalid:["raw"]},{pixels:["value"]},{percent:["value"]}]),hu=function(n,t,e){var r=e.substring(0,e.length-n.length),o=parseFloat(r)
return r===o.toString()?t(o):vu.invalid(e)},bu=F(F({},vu),{from:function(n){return Q(n,"%")?hu("%",vu.percent,n):Q(n,"px")?hu("px",vu.pixels,n):vu.invalid(n)}}),wu=function(n,t,e){return n.fold((function(){return t}),(function(n){return function(n,t,e){var r=e/t
return O(n,(function(n){return bu.from(n).fold((function(){return n}),(function(n){return n*r+"px"}),(function(n){return n/100*e+"px"}))}))}(t,e,n)}),(function(n){return function(n,t){return O(n,(function(n){return bu.from(n).fold((function(){return n}),(function(n){return n/t*100+"%"}),(function(n){return n+"%"}))}))}(t,e)}))},yu=function(n,e,r){var o=bu.from(r),u=N(n,(function(n){return"0px"===n}))?function(n,e){var r=n.fold((function(){return t("")}),(function(n){return t(n/e+"px")}),(function(){return t(100/e+"%")}))
return R(e,r)}(o,n.length):wu(o,n,e)
return Su(u)},Cu=function(n,r){return 0===n.length?r:I(n,(function(n,r){return bu.from(r).fold(t(0),e,e)+n}),0)},xu=function(n,e){return bu.from(n).fold(t(n),(function(n){return n+e+"px"}),(function(n){return n+e+"%"}))},Su=function(n){if(0===n.length)return n
var t=I(n,(function(n,t){var e=bu.from(t).fold((function(){return{value:t,remainder:0}}),(function(n){return function(n,t){var e=Math.floor(n)
return{value:e+t,remainder:n-e}}(n,"px")}),(function(n){return{value:n+"%",remainder:0}}))
return{output:[e.value].concat(n.output),remainder:n.remainder+e.remainder}}),{output:[],remainder:0}),e=t.output
return e.slice(0,e.length-1).concat([xu(e[e.length-1],Math.round(t.remainder))])},Tu=bu.from,Ru=function(n){return Tu(n).fold(t("px"),t("px"),t("%"))},Ou=function(n,t,e,r){var o=se.fromTable(n),u=o.all,i=se.justCells(o),c=se.justColumns(o)
t.each((function(t){var e=Ru(t),u=Gr(n),a=function(n,t,e){return Qo(n,t,Xo,Zo,e)}(o,n,r),l=yu(a,u,t)
se.hasColumns(o)?function(n,t,e){D(t,(function(t,r){var o=Cu([n[r]],Xt())
zt(t.element,"width",o+e)}))}(l,c,e):function(n,t,e){D(t,(function(t){var r=n.slice(t.column,t.colspan+t.column),o=Cu(r,Xt())
zt(t.element,"width",o+e)}))}(l,i,e),zt(n,"width",t)})),e.each((function(t){var e=Ru(t),r=eo(n),c=function(n,t,e){return tu(n,t,e,Yo,Zo)}(o,n,yo);(function(n,t,e,r){D(e,(function(t){var e=n.slice(t.row,t.rowspan+t.row),o=Cu(e,Yt())
zt(t.element,"height",o+r)})),D(t,(function(t,e){zt(t.element,"height",n[e])}))})(yu(c,r,t),u,i,e),zt(n,"height",t)}))},Du=function(n){return zo(n).exists((function(n){return Bo.test(n)}))},Au=function(n){return zo(n).exists((function(n){return Eo.test(n)}))},Iu=function(n){return zo(n).isNone()},Bu=Vo,Eu=function(n){return se.fromTable(n).grid},Pu=function(n){var t=[]
return{bind:function(n){if(void 0===n)throw new Error("Event bind error: undefined handler")
t.push(n)},unbind:function(n){t=A(t,(function(t){return t!==n}))},trigger:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
var o={}
D(n,(function(n,t){o[n]=e[t]})),D(t,(function(n){n(o)}))}}},ku=function(n){return{registry:_n(n,(function(n){return{bind:n.bind,unbind:n.unbind}})),trigger:_n(n,(function(n){return n.trigger}))}},Mu=function(n){return n.slice(0).sort()},Nu=function(n,t,e){if(0===t.length)throw new Error("You must specify at least one required field.")
var r
return function(n,t){if(!p(t))throw new Error("The "+n+" fields must be an array. Was: "+t+".")
D(t,(function(t){if(!d(t))throw new Error("The value "+t+" in the "+n+" fields was not a string.")}))}("required",t),r=Mu(t),E(r,(function(n,t){return t<r.length-1&&n===r[t+1]})).each((function(n){throw new Error("The field: "+n+" occurs more than once in the combined fields: ["+r.join(", ")+"].")})),function(r){var o=Mn(r)
N(t,(function(n){return S(o,n)}))||function(n,t){throw new Error("All required keys ("+Mu(n).join(", ")+") were not specified. Specified keys were: "+Mu(t).join(", ")+".")}(t,o),n(t,o)
var u=A(t,(function(n){return!e.validate(r[n],n)}))
return u.length>0&&function(n,t){throw new Error("All values need to be of type: "+t+". Keys ("+Mu(n).join(", ")+") were not.")}(u,e.label),r}},ju=function(n,t){var e=A(t,(function(t){return!S(n,t)}))
e.length>0&&function(n){throw new Error("Unsupported keys for object: "+Mu(n).join(", "))}(e)},_u=function(n){return function(n,t){return Nu(n,t,{validate:b,label:"function"})}(ju,n)},zu=_u(["compare","extract","mutate","sink"]),Wu=_u(["element","start","stop","destroy"]),Fu=_u(["forceDrop","drop","move","delayDrop"])
function Lu(){var n=f.none(),t=ku({move:Pu(["info"])})
return{onEvent:function(e,r){r.extract(e).each((function(e){(function(t,e){var r=n.map((function(n){return t.compare(n,e)}))
return n=f.some(e),r})(r,e).each((function(n){t.trigger.move(n)}))}))},reset:function(){n=f.none()},events:t.registry}}function Hu(){var t={onEvent:n,reset:n},e=Lu(),r=t
return{on:function(){r.reset(),r=e},off:function(){r.reset(),r=t},isOn:function(){return r===e},onEvent:function(n,t){r.onEvent(n,t)},events:e.events}}var qu=function(n,t,e){var r,o,u,i=!1,c=ku({start:Pu([]),stop:Pu([])}),a=Hu(),l=function(){m.stop(),a.isOn()&&(a.off(),c.trigger.stop())},f=(r=l,o=200,u=null,{cancel:function(){null!==u&&(clearTimeout(u),u=null)},throttle:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]
null!==u&&clearTimeout(u),u=setTimeout((function(){r.apply(null,n),u=null}),o)}})
a.events.move.bind((function(e){t.mutate(n,e.info)}))
var s=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
i&&n.apply(null,t)}},m=t.sink(Fu({forceDrop:l,drop:s(l),move:s((function(n){f.cancel(),a.onEvent(n,t)})),delayDrop:s(f.throttle)}),e)
return{element:m.element,go:function(n){m.start(n),a.on(),c.trigger.start()},on:function(){i=!0},off:function(){i=!1},destroy:function(){m.destroy()},events:c.registry}},Vu=function(n){var t,e,r=Dn.fromDom(pt(n).getOr(n.target)),o=function(){return n.stopPropagation()},u=function(){return n.preventDefault()},i=(t=u,e=o,function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
return t(e.apply(null,n))})
return function(n,t,e,r,o,u,i){return{target:n,x:t,y:e,stop:r,prevent:o,kill:u,raw:i}}(r,n.clientX,n.clientY,o,u,i,n)},Uu=function(n,t,e,o,u){var i=function(n,t){return function(e){n(e)&&t(Vu(e))}}(e,o)
return n.dom.addEventListener(t,i,u),{unbind:r($u,n,t,i,u)}},$u=function(n,t,e,r){n.dom.removeEventListener(t,e,r)},Gu=i,Ku=function(n,t,e){return function(n,t,e,r){return Uu(n,t,e,r,!1)}(n,t,Gu,e)},Xu=Vu,Yu=function(n,t){var e=Pt(n,t)
return void 0===e||""===e?[]:e.split(" ")},Ju=function(n){return void 0!==n.dom.classList},Qu=function(n,t){return function(n,t,e){var r=Yu(n,t).concat([e])
return Bt(n,t,r.join(" ")),!0}(n,"class",t)},Zu=function(n,t){Ju(n)?n.dom.classList.add(t):Qu(n,t)},ni=function(n,t){return Ju(n)&&n.dom.classList.contains(t)},ti=function(n){var t=n.replace(/\./g,"-")
return{resolve:function(n){return t+"-"+n}}},ei=ti("ephox-dragster"),ri=ei.resolve,oi=zu({compare:function(n,t){return uo(t.left-n.left,t.top-n.top)},extract:function(n){return f.some(uo(n.x,n.y))},sink:function(n,t){var e=function(n){var t=F({layerClass:ri("blocker")},n),e=Dn.fromTag("div")
return Bt(e,"role","presentation"),Wt(e,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),Zu(e,ri("blocker")),Zu(e,t.layerClass),{element:function(){return e},destroy:function(){Be(e)}}}(t),r=Ku(e.element(),"mousedown",n.forceDrop),o=Ku(e.element(),"mouseup",n.drop),u=Ku(e.element(),"mousemove",n.move),i=Ku(e.element(),"mouseout",n.delayDrop)
return Wu({element:e.element,start:function(n){Re(n,e.element())},stop:function(){Be(e.element())},destroy:function(){e.destroy(),o.unbind(),u.unbind(),i.unbind(),r.unbind()}})},mutate:function(n,t){n.mutate(t.left,t.top)}}),ui=function(n){return"true"===Pt(n,"contenteditable")},ii=ti("ephox-snooker"),ci=ii.resolve,ai=function(){var n=ku({drag:Pu(["xDelta","yDelta","target"])}),t=f.none(),e=function(){var n=ku({drag:Pu(["xDelta","yDelta"])})
return{mutate:function(t,e){n.trigger.drag(t,e)},events:n.registry}}()
e.events.drag.bind((function(e){t.each((function(t){n.trigger.drag(e.xDelta,e.yDelta,t)}))}))
return{assign:function(n){t=f.some(n)},get:function(){return t},mutate:e.mutate,events:n.registry}},li=ci("resizer-bar"),fi=ci("resizer-rows"),si=ci("resizer-cols"),mi=function(n){var t=xt(n.parent(),"."+li)
D(t,Be)},di=function(n,t,e){var r=n.origin()
D(t,(function(t){t.each((function(t){var o=e(r,t)
Zu(o,li),Re(n.parent(),o)}))}))},gi=function(n,t,e,r){di(n,t,(function(n,t){var o,u,i,c,a,l,f=(o=t.col,u=t.x-n.left,i=e.top-n.top,c=7,a=r,l=Dn.fromTag("div"),Wt(l,{position:"absolute",left:u-c/2+"px",top:i+"px",height:a+"px",width:c+"px"}),Et(l,{"data-column":o,role:"presentation"}),l)
return Zu(f,si),f}))},pi=function(n,t,e,r){di(n,t,(function(n,t){var o=function(n,t,e,r,o){var u=Dn.fromTag("div")
return Wt(u,{position:"absolute",left:t+"px",top:e-o/2+"px",height:o+"px",width:r+"px"}),Et(u,{"data-row":n,role:"presentation"}),u}(t.row,e.left-n.left,t.y-n.top,r,7)
return Zu(o,fi),o}))},vi=function(n,t,e,r,o){var u=co(e),i=t.isResizable,c=r.length>0?yo.positions(r,e):[],a=c.length>0?function(n,t){return M(n.all,(function(n,e){return t(n.element)?[e]:[]}))}(n,i):[],l=A(c,(function(n,t){return T(a,(function(n){return t===n}))}))
pi(t,l,u,Kr(e))
var f=o.length>0?xo.positions(o,e):[],s=f.length>0?function(n,t){var e=[]
return R(n.grid.columns,(function(r){se.getColumnAt(n,r).map((function(n){return n.element})).forall(t)&&e.push(r)})),A(e,(function(e){var r=se.filterItems(n,(function(n){return n.column===e}))
return N(r,(function(n){return t(n.element)}))}))}(n,i):[],m=A(f,(function(n,t){return T(s,(function(n){return t===n}))}))
gi(t,m,u,ro(e))},hi=function(n,t){if(mi(n),n.isResizable(t)){var e=se.fromTable(t),r=Jr(e),o=Xr(e)
vi(e,n,t,r,o)}},bi=function(n,t){var e=xt(n.parent(),"."+li)
D(e,t)},wi=function(n){bi(n,(function(n){zt(n,"display","none")}))},yi=function(n){bi(n,(function(n){zt(n,"display","block")}))},Ci=ci("resizer-bar-dragging"),xi=function(n){var t=ai(),e=function(n,t){void 0===t&&(t={})
var e=void 0!==t.mode?t.mode:oi
return qu(n,e,t)}(t,{}),o=f.none(),u=function(n,t){return f.from(Pt(n,t))}
t.events.drag.bind((function(n){u(n.target,"data-row").each((function(t){var e=Kt(n.target,"top")
zt(n.target,"top",e+n.yDelta+"px")})),u(n.target,"data-column").each((function(t){var e=Kt(n.target,"left")
zt(n.target,"left",e+n.xDelta+"px")}))}))
var i=function(n,t){return Kt(n,t)-Vt(n,"data-initial-"+t,0)}
e.events.stop.bind((function(){t.get().each((function(t){o.each((function(e){u(t,"data-row").each((function(n){var r=i(t,"top")
Mt(t,"data-initial-top"),d.trigger.adjustHeight(e,r,parseInt(n,10))})),u(t,"data-column").each((function(n){var r=i(t,"left")
Mt(t,"data-initial-left"),d.trigger.adjustWidth(e,r,parseInt(n,10))})),hi(n,e)}))}))}))
var c=function(r,o){d.trigger.startAdjust(),t.assign(r),Bt(r,"data-initial-"+o,Kt(r,o)),Zu(r,Ci),zt(r,"opacity","0.2"),e.go(n.parent())},a=Ku(n.parent(),"mousedown",(function(n){var t
t=n.target,ni(t,fi)&&c(n.target,"top"),function(n){return ni(n,si)}(n.target)&&c(n.target,"left")})),l=function(t){return Bn(t,n.view())},s=function(n){return At(n,"table",l).filter((function(n){return function(n,t){return At(n,"[contenteditable]",t)}(n,l).exists(ui)}))},m=Ku(n.view(),"mouseover",(function(t){s(t.target).fold((function(){ht(t.target)&&mi(n)}),(function(t){o=f.some(t),hi(n,t)}))})),d=ku({adjustHeight:Pu(["table","delta","row"]),adjustWidth:Pu(["table","delta","column"]),startAdjust:Pu([])})
return{destroy:function(){a.unbind(),m.unbind(),e.destroy(),mi(n)},refresh:function(t){hi(n,t)},on:e.on,off:e.off,hideBars:r(wi,n),showBars:r(yi,n),events:d.registry}},Si=function(n,t,e){var r=yo,o=xo,u=xi(n),i=ku({beforeResize:Pu(["table","type"]),afterResize:Pu(["table","type"]),startDrag:Pu([])})
return u.events.adjustHeight.bind((function(n){var t=n.table
i.trigger.beforeResize(t,"row")
var e=r.delta(n.delta,t)
cu(t,e,n.row,r),i.trigger.afterResize(t,"row")})),u.events.startAdjust.bind((function(n){i.trigger.startDrag()})),u.events.adjustWidth.bind((function(n){var r=n.table
i.trigger.beforeResize(r,"col")
var u=o.delta(n.delta,r),c=e(r)
iu(r,u,n.column,t,c),i.trigger.afterResize(r,"col")})),{on:u.on,off:u.off,hideBars:u.hideBars,showBars:u.showBars,destroy:u.destroy,events:i.registry}},Ti=function(n,t){return n.fire("newrow",{node:t})},Ri=function(n,t){return n.fire("newcell",{node:t})},Oi=function(n,t,e){n.fire("TableModified",F(F({},e),{table:t}))},Di={"border-collapse":"collapse",width:"100%"},Ai={border:"1"},Ii="preservetable",Bi=function(n){return n.getParam("table_sizing_mode","auto")},Ei=function(n){return n.getParam("table_responsive_width")},Pi=function(n){return n.getParam("table_default_attributes",Ai,"object")},ki=function(n){return n.getParam("table_default_styles",function(n){if(Wi(n)){var t=n.getBody().offsetWidth
return F(F({},Di),{width:t+"px"})}return Fi(n)?Wn(Di,(function(n,t){return"width"!==t})):Di}(n),"object")},Mi=function(n){return n.getParam("table_cell_advtab",!0,"boolean")},Ni=function(n){return n.getParam("table_row_advtab",!0,"boolean")},ji=function(n){return n.getParam("table_advtab",!0,"boolean")},_i=function(n){return n.getParam("table_style_by_css",!1,"boolean")},zi=function(n){return"relative"===Bi(n)||!0===Ei(n)},Wi=function(n){return"fixed"===Bi(n)||!1===Ei(n)},Fi=function(n){return"responsive"===Bi(n)},Li=function(n){return n.getParam("table_use_colgroups",!1,"boolean")},Hi=function(n){var t="section",e=n.getParam("table_header_type",t,"string")
return S(["section","cells","sectionCells","auto"],e)?e:t},qi=function(n){var t=n.getParam("table_column_resizing",Ii,"string")
return E(["preservetable","resizetable"],(function(n){return n===t})).getOr(Ii)},Vi=function(n){return"preservetable"===qi(n)},Ui=function(n){var t=n.getParam("table_clone_elements")
return d(t)?f.some(t.split(/[ ,]/)):Array.isArray(t)?f.some(t):f.none()},$i=function(n){return n.nodeName.toLowerCase()},Gi=function(n){return Dn.fromDom(n.getBody())},Ki=function(n){return n.getBoundingClientRect().width},Xi=function(n){return n.getBoundingClientRect().height},Yi=function(n){return function(t){return Bn(t,Gi(n))}},Ji=function(n){return/^\d+(\.\d+)?$/.test(n)?n+"px":n},Qi=function(n){Mt(n,"data-mce-style")
var t=function(n){return Mt(n,"data-mce-style")}
D(ne(n),t),D(te(n),t)},Zi=function(n,t){var e=n.dom.getStyle(t,"width")||n.dom.getAttrib(t,"width")
return f.from(e).filter(nn)},nc=function(n){return/^(\d+(\.\d+)?)%$/.test(n)},tc=function(n){return Dn.fromDom(n.selection.getStart())},ec=function(n){var t=n
return{get:function(){return t},set:function(n){t=n}}},rc=function(e){var r=function(){return Gr(e)},o=t(0)
return{width:r,pixelWidth:r,getWidths:function(n,t){return nu(n,e,t)},getCellDelta:o,singleColumnWidth:t([0]),minCellWidth:o,setElementWidth:n,adjustTableWidth:n,isRelative:!0,label:"none"}},oc=function(n,t){var e=ec(parseFloat(n)),r=ec(Gr(t))
return{width:e.get,pixelWidth:r.get,getWidths:function(n,e){return function(n,t,e){return Qo(n,t,Fo,(function(n){return n.fold((function(){return e.minCellWidth()}),(function(n){return n/e.pixelWidth()*100}))}),e)}(n,t,e)},getCellDelta:function(n){return n/r.get()*100},singleColumnWidth:function(n,t){return[100-n]},minCellWidth:function(){return Xt()/r.get()*100},setElementWidth:Mo,adjustTableWidth:function(n){var o=e.get(),u=o+n/100*o
Mo(t,u),e.set(u),r.set(Gr(t))},isRelative:!0,label:"percent"}},uc=function(n,t){var r=ec(n),o=r.get
return{width:o,pixelWidth:o,getWidths:function(n,e){return nu(n,t,e)},getCellDelta:e,singleColumnWidth:function(n,t){return[Math.max(Xt(),n+t)-n]},minCellWidth:Xt,setElementWidth:ko,adjustTableWidth:function(n){var e=o()+n
ko(t,e),r.set(e)},isRelative:!1,label:"pixel"}},ic=function(n){return zo(n).fold((function(){return rc(n)}),(function(t){return function(n,t){var e=Uo().exec(t)
if(null!==e)return oc(e[1],n)
var r=$o().exec(t)
if(null!==r){var o=parseInt(r[1],10)
return uc(o,n)}var u=Gr(n)
return uc(u,n)}(n,t)}))},cc=uc,ac=oc,lc=function(n,t){if(zi(n)){var e=Zi(n,t.dom).filter(nc).getOrThunk((function(){return Bu(t)}))
return ac(e,t)}return Wi(n)?cc(Gr(t),t):ic(t)},fc=function(n){Mt(n,"width")},sc=function(n,t){var e=function(n){return Gr(n)+"px"}(n)
Ou(n,f.some(e),f.none(),t),fc(n)},mc=function(n,t){(function(n,t){var e=Vo(n)
Ou(n,f.some(e),f.none(),t),fc(n)})(t,lc(n,t))},dc=function(n,t){var e=lc(n,t)
sc(t,e)},gc=function(n){qt(n,"width")
var t=te(n),e=t.length>0?t:ne(n)
D(e,(function(n){qt(n,"width"),fc(n)})),fc(n)},pc=function(){var n=Dn.fromTag("div")
return Wt(n,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"}),Re(bt(Dn.fromDom(document)),n),n},vc="bar-",hc=function(n){return"false"!==Pt(n,"data-mce-resize")},bc=function(n){var e,r,o=f.none(),u=f.none(),i=f.none(),c=function(n){return"TABLE"===n.nodeName},a=function(){return u},l=function(t){return lc(n,t)},s=function(){return Vi(n)?{resizeTable:function(n,t,e){e&&n(t)},clampTableDelta:function(n,t,e,r,o){if(o){if(e>=0)return e
var u=B(n,(function(n,t){return n+t-r}),0)
return Math.max(-u,e)}return su(n,t,e,r)},calcLeftEdgeDeltas:e=function(n,t,e,r,o){var u=mu(n,r>=0?e:t,r,o)
return lu(n,t,e+1,[u,-u],au)},calcMiddleDeltas:function(n,t,r,o,u,i){return e(n,r,o,u,i)},calcRightEdgeDeltas:function(n,e,r,o,u,i){if(i)return au(n)
var c=o/n.length
return O(n,t(c))}}:du()
var e},m=function(t,o,u){var i=Q(o,"e")
if(""===r&&mc(n,t),u!==e&&""!==r){zt(t,"width",r)
var c=s(),a=l(t),f=Vi(n)||i?function(n){return Eu(n).columns}(t)-1:0
iu(t,u-e,f,c,a)}else if(nc(r)){var m=parseFloat(r.replace("%",""))
zt(t,"width",u*m/e+"%")}(function(n){return/^(\d+(\.\d+)?)px$/.test(n)})(r)&&function(n){var t=se.fromTable(n)
se.hasColumns(t)||D(ne(n),(function(n){var t=Ft(n,"width")
zt(n,"width",t),Mt(n,"width")}))}(t)}
return n.on("init",(function(){var t=function(n,t){return n.inline?pu(Gi(n),pc(),t):gu(Dn.fromDom(n.getDoc()),t)}(n,hc)
if(i=f.some(t),function(n){var t=n.getParam("object_resizing",!0)
return d(t)?"table"===t:t}(n)&&function(n){return n.getParam("table_resize_bars",!0,"boolean")}(n)){var e=s(),r=Si(t,e,l)
r.on(),r.events.startDrag.bind((function(t){o=f.some(n.selection.getRng())})),r.events.beforeResize.bind((function(t){var e=t.table.dom;(function(n,t,e,r,o){n.fire("ObjectResizeStart",{target:t,width:e,height:r,origin:o})})(n,e,Ki(e),Xi(e),vc+t.type)})),r.events.afterResize.bind((function(t){var e=t.table,r=e.dom
Qi(e),o.each((function(t){n.selection.setRng(t),n.focus()})),function(n,t,e,r,o){n.fire("ObjectResized",{target:t,width:e,height:r,origin:o})}(n,r,Ki(r),Xi(r),vc+t.type),n.undoManager.add()})),u=f.some(r)}})),n.on("ObjectResizeStart",(function(t){var o=t.target
if(c(o)){var u=Dn.fromDom(o)
D(n.dom.select(".mce-clonedresizable"),(function(t){n.dom.addClass(t,"mce-"+qi(n)+"-columns")})),!Au(u)&&Wi(n)?dc(n,u):!Du(u)&&zi(n)&&mc(n,u),Iu(u)&&J(t.origin,vc)&&mc(n,u),e=t.width,r=Fi(n)?"":Zi(n,o).getOr("")}})),n.on("ObjectResized",(function(t){var e=t.target
if(c(e)){var r=Dn.fromDom(e),o=t.origin
J(o,"corner-")&&m(r,o,t.width),Qi(r),Oi(n,r.dom)}})),n.on("SwitchMode",(function(){a().each((function(t){n.mode.isReadOnly()?t.hideBars():t.showBars()}))})),{lazyResize:a,lazyWire:function(){return i.getOr(gu(Dn.fromDom(n.getBody()),hc))},destroy:function(){u.each((function(n){n.destroy()})),i.each((function(t){(function(n,t){n.inline&&Be(t.parent())})(n,t)}))}}},wc=function(n,t){return{element:n,offset:t}},yc=function(n,t,e){return n.property().isText(t)&&0===n.property().getText(t).trim().length||n.property().isComment(t)?e(t).bind((function(t){return yc(n,t,e).orThunk((function(){return f.some(t)}))})):f.none()},Cc=function(n,t){return n.property().isText(t)?n.property().getText(t).length:n.property().children(t).length},xc=function(n,t){var e=yc(n,t,n.query().prevSibling).getOr(t)
if(n.property().isText(e))return wc(e,Cc(n,e))
var r=n.property().children(e)
return r.length>0?xc(n,r[r.length-1]):wc(e,Cc(n,e))},Sc=xc,Tc=_e(),Rc=function(n,t){(function(n){return zo(n).bind((function(n){return Ro(n,["fixed","relative","empty"])}))})(n).each((function(e){var r=e.value/2
qo(n,r,e.unit),qo(t,r,e.unit)}))},Oc=function(n,t,e){n.cells[t]=e},Dc=function(n,t){return Gn(t,n.section)},Ac=function(n,t){var e=n.cells,r=O(e,t)
return Gn(r,n.section)},Ic=function(n,t){return n.cells[t]},Bc=function(n,t){return Ic(n,t).element},Ec=function(n){return n.cells.length},Pc=function(n){var t=function(n,t){for(var e=[],r=[],o=0,u=n.length;o<u;o++){var i=n[o];(t(i,o)?e:r).push(i)}return{pass:e,fail:r}}(n,(function(n){return"colgroup"===n.section}))
return{rows:t.fail,cols:t.pass}},kc=function(n,t,e,r){e===r?Mt(n,t):Bt(n,t,e)},Mc=function(n,t,e){z(Ct(n,t)).fold((function(){return Te(n,e)}),(function(n){return Se(n,e)}))},Nc=function(n,t){var e=[],r=[],o=function(n){return O(n,(function(n){n.isNew&&e.push(n.element)
var t=n.element
return Ie(t),D(n.cells,(function(n){n.isNew&&r.push(n.element),kc(n.element,"colspan",n.colspan,1),kc(n.element,"rowspan",n.rowspan,1),Re(t,n.element)})),t}))},u=function(n){return M(n,(function(n){return O(n.cells,(function(n){return kc(n.element,"span",n.colspan,1),n.element}))}))},i=function(t,e){var r=function(n,t){var e=Ot(n,t).getOrThunk((function(){var e=Dn.fromTag(t,et(n).dom)
return"thead"===t?Mc(n,"caption,colgroup",e):"colgroup"===t?Mc(n,"caption",e):Re(n,e),e}))
return Ie(e),e}(n,e),i=("colgroup"===e?u:o)(t)
Ae(r,i)},c=function(t,e){t.length>0?i(t,e):function(t){Ot(n,t).each(Be)}(e)},a=[],l=[],f=[],s=[]
return D(t,(function(n){switch(n.section){case"thead":a.push(n)
break
case"tbody":l.push(n)
break
case"tfoot":f.push(n)
break
case"colgroup":s.push(n)}})),c(s,"colgroup"),c(a,"thead"),c(l,"tbody"),c(f,"tfoot"),{newRows:e,newCells:r}},jc=function(n,t){if(0===n.length)return 0
var e=n[0]
return P(n,(function(n){return!t(e.element,n.element)})).fold((function(){return n.length}),(function(n){return n}))},_c=function(n,t,e,r){var o=function(n,t){return n[t]}(n,t).cells.slice(e),u=jc(o,r),i=function(n,t){return O(n,(function(n){return Ic(n,t)}))}(n,e).slice(t)
return{colspan:u,rowspan:jc(i,r)}},zc=function(n,t){var e=O(n,(function(n){return O(n.cells,u)}))
return O(n,(function(r,o){return function(n,t){return{details:n,section:t}}(M(r.cells,(function(r,u){if(!1===e[o][u]){var i=_c(n,o,u,t)
return function(n,t,r,o){for(var u=n;u<n+r;u++)for(var i=t;i<t+o;i++)e[u][i]=!0}(o,u,i.rowspan,i.colspan),[(c=r.element,a=i.rowspan,l=i.colspan,f=r.isNew,{element:c,rowspan:a,colspan:l,isNew:f})]}return[]
var c,a,l,f})),r.section)}))},Wc=function(n,t,e){var r=[]
if(se.hasColumns(n)){var o=O(se.justColumns(n),(function(n){return $n(n.element,e)}))
r.push(Gn(o,"colgroup"))}for(var u=0;u<n.grid.rows;u++){for(var i=[],c=0;c<n.grid.columns;c++){var a=se.getAt(n,u,c).map((function(n){return $n(n.element,e)})).getOrThunk((function(){return $n(t.gap(),!0)}))
i.push(a)}var l=Gn(i,n.all[u].section)
r.push(l)}return r},Fc=function(n,t){return O(n,(function(n){var e=function(n){return W(n,(function(n){return ot(n.element).map((function(n){var t=ot(n).isNone()
return $n(n,t)}))})).getOrThunk((function(){return $n(t.row(),!0)}))}(n.details)
return function(n,t,e,r){return{element:n,cells:t,section:e,isNew:r}}(e.element,n.details,n.section,e.isNew)}))},Lc=function(n,t){var e=zc(n,Bn)
return Fc(e,t)},Hc=function(n,t){return W(n.all,(function(n){return E(n.cells,(function(n){return Bn(t,n.element)}))}))},qc=function(n,t,e,r,o){return function(u,i,c,a,l){var s=se.fromTable(i)
return t(s,c).map((function(t){var e=function(n,t){return Wc(n,t,!1)}(s,a),r=n(e,t,Bn,o(a))
return{grid:Lc(r.grid,a),cursor:r.cursor}})).fold((function(){return f.none()}),(function(n){var t=Nc(i,n.grid),o=f.from(l).getOrThunk((function(){return ic(i)}))
return e(i,n.grid,o),r(i),hi(u,i),f.some({cursor:n.cursor,newRows:t.newRows,newCells:t.newCells})}))}},Vc=function(n,t){return Zt(t.element).bind((function(t){return Hc(n,t)}))},Uc=function(n,t){var e=O(t.selection,(function(t){return Zt(t).bind((function(t){return Hc(n,t)}))})),r=Wr(e)
return r.length>0?f.some({cells:r,generators:t.generators,clipboard:t.clipboard}):f.none()},$c=function(n,t){var e=O(t.selection,(function(t){return Zt(t).bind((function(t){return Hc(n,t)}))})),r=Wr(e)
return r.length>0?f.some(r):f.none()},Gc=function(n,t,e,r){for(var o=Pc(n).rows,u=!0,i=0;i<o.length;i++)for(var c=0;c<Ec(o[0]);c++){var a=e(Bc(o[i],c),t)
!0===a&&!1===u?Oc(o[i],c,$n(r(),!0)):!0===a&&(u=!1)}return n},Kc=function(n,t,e,r){var o=Pc(n).rows
if(t>0&&t<o.length){var u=function(n,t){return B(n,(function(n,e){return T(n,(function(n){return t(n.element,e.element)}))?n:n.concat([e])}),[])}(o[t-1].cells,e)
D(u,(function(n){for(var u=f.none(),i=function(t){for(var i=function(i){var c=o[t].cells[i]
e(c.element,n.element)&&(u.isNone()&&(u=f.some(r())),u.each((function(n){Oc(o[t],i,$n(n,!0))})))},c=0;c<Ec(o[0]);c++)i(c)},c=t;c<o.length;c++)i(c)}))}return n},Xc=function(n){return{is:function(t){return n===t},isValue:i,isError:u,getOr:t(n),getOrThunk:t(n),getOrDie:t(n),or:function(t){return Xc(n)},orThunk:function(t){return Xc(n)},fold:function(t,e){return e(n)},map:function(t){return Xc(t(n))},mapError:function(t){return Xc(n)},each:function(t){t(n)},bind:function(t){return t(n)},exists:function(t){return t(n)},forall:function(t){return t(n)},toOptional:function(){return f.some(n)}}},Yc=function(t){return{is:u,isValue:u,isError:i,getOr:e,getOrThunk:function(n){return n()},getOrDie:function(){return(n=String(t),function(){throw new Error(n)})()
var n},or:function(n){return n},orThunk:function(n){return n()},fold:function(n,e){return n(t)},map:function(n){return Yc(t)},mapError:function(n){return Yc(n(t))},each:n,bind:function(n){return Yc(t)},exists:u,forall:i,toOptional:f.none}},Jc={value:Xc,error:Yc,fromOption:function(n,t){return n.fold((function(){return Yc(t)}),Xc)}},Qc=function(n,t){return{rowDelta:0,colDelta:Ec(n[0])-Ec(t[0])}},Zc=function(n,t){return{rowDelta:n.length-t.length,colDelta:0}},na=function(n,t,e){var r="colgroup"===t.section?e.col:e.cell
return O(n,(function(){return $n(r(),!0)}))},ta=function(n,t,e){return n.concat(R(t,(function(){var t=n[n.length-1]
return Dc(t,na(t.cells,t,e))})))},ea=function(n,t,r){return O(n,(function(n){var o=na(R(t,e),n,r)
return Dc(n,n.cells.concat(o))}))},ra=function(n,t,r){var o=t.colDelta<0?ea:e
return(t.rowDelta<0?ta:e)(o(n,Math.abs(t.colDelta),r),Math.abs(t.rowDelta),r)},oa=function(n,t,e,o){var u=r(o,Ic(n[t],e).element),i=n[t]
return n.length>1&&Ec(i)>1&&(e>0&&u(Bc(i,e-1))||e<i.cells.length-1&&u(Bc(i,e+1))||t>0&&u(Bc(n[t-1],e))||t<n.length-1&&u(Bc(n[t+1],e)))},ua=function(n,t,e,r,o){return function(n,t,e){if(n.row>=t.length||n.column>Ec(t[0]))return Jc.error("invalid start address out of table bounds, row: "+n.row+", column: "+n.column)
var r=t.slice(n.row),o=r[0].cells.slice(n.column),u=Ec(e[0]),i=e.length
return Jc.value({rowDelta:r.length-i,colDelta:o.length-u})}(n,t,e).map((function(u){var i=ra(t,u,r)
return function(n,t,e,r,o){for(var u=n.row,i=n.column,c=u+e.length,a=i+Ec(e[0]),l=u;l<c;l++)for(var f=i;f<a;f++){oa(t,l,f,o)&&Gc(t,Bc(t[l],f),o,r.cell)
var s=Bc(e[l-u],f-i),m=r.replace(s)
Oc(t[l],f,$n(m,!0))}return t}(n,i,e,r,o)}))},ia=function(n,t,e,r,o){(function(n,t,e,r){t>0&&t<n[0].cells.length&&D(n,(function(n){var o=n.cells[t-1],u=n.cells[t]
e(u.element,o.element)&&Oc(n,t,$n(r(),!0))}))})(t,n,o,r.cell)
var u=Zc(e,t),i=ra(e,u,r),c=Zc(t,i),a=ra(t,c,r)
return O(a,(function(t,e){var r=t.cells.slice(0,n).concat(i[e].cells).concat(t.cells.slice(n,t.cells.length))
return Dc(t,r)}))},ca=function(n,t,e,r,o){Kc(t,n,o,r.cell)
var u=Qc(e,t),i=ra(e,u,r),c=Qc(t,i),a=ra(t,c,r),l=Pc(a),f=l.cols,s=l.rows
return f.concat(s.slice(0,n)).concat(i).concat(s.slice(n,s.length))},aa=function(n,t,e,r,o){var u=Pc(n),i=u.rows,c=u.cols,a=i.slice(0,t),l=i.slice(t),f=Ac(i[e],(function(n,e){return t>0&&t<i.length&&r(Bc(i[t-1],e),Bc(i[t],e))?Ic(i[t],e):$n(o(n.element,r),!0)}))
return c.concat(a).concat([f]).concat(l)},la=function(n,t,e,r,o){return O(n,(function(n){var u=t>0&&t<Ec(n)&&r(Bc(n,t-1),Bc(n,t)),i=function(n,t,e,r,o,u,i){return"colgroup"!==e&&r?Ic(n,t):$n(i(Bc(n,o),u),!0)}(n,t,n.section,u,e,r,o)
return function(n,t,e){var r=n.cells,o=r.slice(0,t),u=r.slice(t),i=o.concat([e]).concat(u)
return Dc(n,i)}(n,t,i)}))},fa=function(n,t,e,r){return O(n,(function(n){return Ac(n,(function(n){return function(n){return T(t,(function(t){return e(n.element,t.element)}))}(n)?$n(r(n.element,e),!0):n}))}))},sa=function(n,t,e,r){return void 0!==Bc(n[t],e)&&t>0&&r(Bc(n[t-1],e),Bc(n[t],e))},ma=function(n,t,e){return t>0&&e(Bc(n,t-1),Bc(n,t))},da=function(n,t,e,r){var o=M(n,(function(r,o){return sa(n,o,t,e)||ma(r,t,e)?[]:[Ic(r,t)]}))
return fa(n,o,e,r)},ga=function(n,t,e,r){var o=Pc(n).rows,u=o[t],i=M(u.cells,(function(n,r){return sa(o,t,r,e)||ma(u,r,e)?[]:[n]}))
return fa(n,i,e,r)},pa=_u(["cell","row","replace","gap","col","colgroup"]),va=function(n){return{element:n,colspan:Vt(n,"colspan",1),rowspan:Vt(n,"rowspan",1)}},ha=function(n,t){void 0===t&&(t=va),pa(n)
var e=ec(f.none()),r=function(e){return function(t){switch(Kn(t.element)){case"col":return n.col(t)
default:return n.cell(t)}}(t(e))},o=function(n){var t=r(n)
return e.get().isNone()&&e.set(f.some(t)),u=f.some({item:n,replacement:t}),t},u=f.none()
return{getOrInit:function(n,t){return u.fold((function(){return o(n)}),(function(e){return t(n,e.item)?e.replacement:o(n)}))},cursor:e.get}},ba=function(n,t){return function(e){var r=ec(f.none())
pa(e)
var o=[],u=function(u){var i={scope:n},c=e.replace(u,t,i)
return o.push({item:u,sub:c}),r.get().isNone()&&r.set(f.some(c)),c}
return{replaceOrInit:function(n,t){return function(n,t){return E(o,(function(e){return t(e.item,n)}))}(n,t).fold((function(){return u(n)}),(function(e){return t(n,e.item)?e.sub:u(n)}))},cursor:r.get}}},wa=function(n){pa(n)
var t=ec(f.none())
return{combine:function(e){return t.get().isNone()&&t.set(f.some(e)),function(){var t=n.cell({element:e,colspan:1,rowspan:1})
return qt(t,"width"),qt(e,"width"),t}},cursor:t.get}},ya=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"],Ca=_e(),xa=function(n){return function(n,t){var e=n.property().name(t)
return S(ya,e)}(Ca,n)},Sa=function(n){return function(n,t){var e=n.property().name(t)
return S(["ol","ul"],e)}(Ca,n)},Ta=function(n){return function(n,t){return S(["br","img","hr","input"],n.property().name(t))}(Ca,n)},Ra=function(n){var t,e=function(n){return"br"===Kn(n)},r=function(n){return fr(n).bind((function(t){var r=ct(t).map((function(n){return!!xa(n)||!!Ta(n)&&"img"!==Kn(n)})).getOr(!1)
return ot(t).map((function(o){return!0===r||function(n){return"li"===Kn(n)||Tt(n,Sa).isSome()}(o)||e(t)||xa(o)&&!Bn(n,o)?[]:[Dn.fromTag("br")]}))})).getOr([])},o=0===(t=M(n,(function(n){var t=at(n)
return function(n){return N(n,(function(n){return e(n)||Zn(n)&&0===ke(n).trim().length}))}(t)?[]:t.concat(r(n))}))).length?[Dn.fromTag("br")]:t
Ie(n[0]),Ae(n[0],o)},Oa=function(n){0===ne(n).length&&Be(n)},Da=function(n,t){return{grid:n,cursor:t}},Aa=function(n,t,e){var r=Pc(n).rows
return Ia(r,t,e).orThunk((function(){return Ia(r,0,0)}))},Ia=function(n,t,e){return f.from(n[t]).bind((function(n){return f.from(n.cells[e]).bind((function(n){return f.from(n.element)}))}))},Ba=function(n,t,e){var r=Pc(n).rows
return Da(n,Ia(r,t,e))},Ea=function(n){return B(n,(function(n,t){return T(n,(function(n){return n.row===t.row}))?n:n.concat([t])}),[]).sort((function(n,t){return n.row-t.row}))},Pa=function(n){return B(n,(function(n,t){return T(n,(function(n){return n.column===t.column}))?n:n.concat([t])}),[]).sort((function(n,t){return n.column-t.column}))},ka=function(n,t,e){var r,o,u=(r=n,o=e.section,ue(r,(function(){return o}))),i=se.generate(u)
return Wc(i,t,!0)},Ma=function(n,t){var e=A(n,t)
return 0===e.length?f.some("td"):e.length===n.length?f.some("th"):f.none()},Na=function(n,t,e){var r=se.generate(t),o=e.getWidths(r,e)
uu(r,o,e)},ja=qc((function(n,t,e,r){var o=t[0].row,u=t[0].row,i=Ea(t),c=B(i,(function(n,t){return aa(n,u,o,e,r.getOrInit)}),n)
return Ba(c,u,t[0].column)}),$c,n,n,ha),_a=qc((function(n,t,e,r){var o=Ea(t),u=o[o.length-1].row,i=o[o.length-1].row+o[o.length-1].rowspan,c=B(o,(function(n,t){return aa(n,i,u,e,r.getOrInit)}),n)
return Ba(c,i,t[0].column)}),$c,n,n,ha),za=qc((function(n,t,e,r){var o=Pa(t),u=o[0].column,i=o[0].column,c=B(o,(function(n,t){return la(n,i,u,e,r.getOrInit)}),n)
return Ba(c,t[0].row,i)}),$c,Na,n,ha),Wa=qc((function(n,t,e,r){var o=t[t.length-1].column,u=t[t.length-1].column+t[t.length-1].colspan,i=Pa(t),c=B(i,(function(n,t){return la(n,u,o,e,r.getOrInit)}),n)
return Ba(c,t[0].row,u)}),$c,Na,n,ha),Fa=qc((function(n,t,e,r){var o=Pa(t),u=function(n,t,e){var r=O(n,(function(n){var r=n.cells.slice(0,t).concat(n.cells.slice(e+1))
return Gn(r,n.section)}))
return A(r,(function(n){return n.cells.length>0}))}(n,o[0].column,o[o.length-1].column),i=Aa(u,t[0].row,t[0].column)
return Da(u,i)}),$c,Na,Oa,ha),La=qc((function(n,t,e,r){var o=Ea(t),u=function(n,t,e){var r=Pc(n),o=r.rows
return r.cols.concat(o.slice(0,t)).concat(o.slice(e+1))}(n,o[0].row,o[o.length-1].row),i=Aa(u,t[0].row,t[0].column)
return Da(u,i)}),$c,n,Oa,ha),Ha=(qc((function(n,t,e,r){var o=da(n,t.column,e,r.replaceOrInit)
return Ba(o,t.row,t.column)}),Vc,n,n,ba("row","th")),qc((function(n,t,e,r){var o=Pa(t),u=B(o,(function(n,t){return da(n,t.column,e,r.replaceOrInit)}),n)
return Ba(u,t[0].row,t[0].column)}),$c,n,n,ba("row","th"))),qa=(qc((function(n,t,e,r){var o=da(n,t.column,e,r.replaceOrInit)
return Ba(o,t.row,t.column)}),Vc,n,n,ba(null,"td")),qc((function(n,t,e,r){var o=Pa(t),u=B(o,(function(n,t){return da(n,t.column,e,r.replaceOrInit)}),n)
return Ba(u,t[0].row,t[0].column)}),$c,n,n,ba(null,"td"))),Va=(qc((function(n,t,e,r){var o=ga(n,t.row,e,r.replaceOrInit)
return Ba(o,t.row,t.column)}),Vc,n,n,ba("col","th")),qc((function(n,t,e,r){var o=Ea(t),u=B(o,(function(n,t){return ga(n,t.row,e,r.replaceOrInit)}),n)
return Ba(u,t[0].row,t[0].column)}),$c,n,n,ba("col","th")),qc((function(n,t,e,r){var o=ga(n,t.row,e,r.replaceOrInit)
return Ba(o,t.row,t.column)}),Vc,n,n,ba(null,"td")),qc((function(n,t,e,r){var o=Ea(t),u=B(o,(function(n,t){return ga(n,t.row,e,r.replaceOrInit)}),n)
return Ba(u,t[0].row,t[0].column)}),$c,n,n,ba(null,"td")),qc((function(n,e,r,o){var u=e.cells
Ra(u)
var i=function(n,t,e,r){var o=Pc(n).rows
if(0===o.length)return n
for(var u=t.startRow;u<=t.finishRow;u++)for(var i=t.startCol;i<=t.finishCol;i++)Oc(o[u],i,$n(r(),!1))
return n}(n,e.bounds,0,t(u[0]))
return Da(i,f.from(u[0]))}),(function(n,t){return t.mergable}),n,n,wa)),Ua=qc((function(n,t,e,r){var o=I(t,(function(n,t){return Gc(n,t,e,r.combine(t))}),n)
return Da(o,f.from(t[0]))}),(function(n,t){return t.unmergable}),Na,n,wa),$a=qc((function(n,t,e,r){var o=function(n,t){var e=se.fromTable(n)
return Wc(e,t,!0)}(t.clipboard,t.generators),u=function(n,t){return{row:n,column:t}}(t.row,t.column)
return ua(u,n,o,t.generators,e).fold((function(){return Da(n,f.some(t.element))}),(function(n){var e=Aa(n,t.row,t.column)
return Da(n,e)}))}),(function(n,t){return Zt(t.element).bind((function(e){return Hc(n,e).map((function(n){return F(F({},n),{generators:t.generators,clipboard:t.clipboard})}))}))}),Na,n,ha),Ga=qc((function(n,t,e,r){var o=Pc(n).rows,u=t.cells[0].column,i=o[t.cells[0].row],c=ka(t.clipboard,t.generators,i),a=ia(u,n,c,t.generators,e),l=Aa(a,t.cells[0].row,t.cells[0].column)
return Da(a,l)}),Uc,n,n,ha),Ka=qc((function(n,t,e,r){var o=Pc(n).rows,u=t.cells[t.cells.length-1].column+t.cells[t.cells.length-1].colspan,i=o[t.cells[0].row],c=ka(t.clipboard,t.generators,i),a=ia(u,n,c,t.generators,e),l=Aa(a,t.cells[0].row,t.cells[0].column)
return Da(a,l)}),Uc,n,n,ha),Xa=qc((function(n,t,e,r){var o=Pc(n).rows,u=t.cells[0].row,i=o[u],c=ka(t.clipboard,t.generators,i),a=ca(u,n,c,t.generators,e),l=Aa(a,t.cells[0].row,t.cells[0].column)
return Da(a,l)}),Uc,n,n,ha),Ya=qc((function(n,t,e,r){var o=Pc(n).rows,u=t.cells[t.cells.length-1].row+t.cells[t.cells.length-1].rowspan,i=o[t.cells[0].row],c=ka(t.clipboard,t.generators,i),a=ca(u,n,c,t.generators,e),l=Aa(a,t.cells[0].row,t.cells[0].column)
return Da(a,l)}),Uc,n,n,ha),Ja=function(n,t){var e=se.fromTable(n)
return $c(e,t).bind((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan,u=k(O(e.all,(function(n){return A(n.cells,(function(n){return n.column>=r&&n.column<o}))})))
return Ma(u,(function(n){return"th"===Kn(n.element)}))})).getOr("")},Qa=function(n){return $i(n.parentNode)},Za=function(n,t){var e="thead"===Qa(t),r=!T(t.cells,(function(n){return"th"!==$i(n)}))
return e||r?f.some({thead:e,ths:r}):f.none()},nl=function(n,t){return"thead"===(e=Za(0,t).fold((function(){return Qa(t)}),(function(n){return"thead"})))?"header":"tfoot"===e?"footer":"body"
var e},tl=function(n,t,e){var r=n.getParent(t,"table"),o=t.parentNode,u=$i(o)
if(e!==u){var i=n.select(e,r)[0]
if(!i){i=n.create(e)
var c=r.firstChild
"thead"===e?z(Ct(Dn.fromDom(r),"caption,colgroup")).fold((function(){return r.insertBefore(i,c)}),(function(t){return n.insertAfter(i,t.dom)})):r.appendChild(i)}"tbody"===e&&"thead"===u&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),o.hasChildNodes()||n.remove(o)}},el=function(n,t,e,r){return D(t,(function(t){var o=$i(t)!==e?n.rename(t,e):t
n.setAttrib(o,"scope",r)}))},rl=function(n,t,e){var r,o=n.dom
if("header"===e){var u=Hi(n),i="auto"===u?(r=ee(Dn.fromDom(t.cells[0])).map((function(n){return re(n)})).getOr([]),W(r,(function(n){return Za(0,n.dom)})).map((function(n){return n.thead&&n.ths?"sectionCells":n.thead?"section":"cells"})).getOr("section")):u
el(o,t.cells,"section"===i?"td":"th","col"),tl(o,t,"cells"===i?"tbody":"thead")}else el(o,t.cells,"td",null),tl(o,t,"footer"===e?"tfoot":"tbody")},ol=function(n){return function(t){var e=Kn(t),r="col"===e||"colgroup"===e?function(n){return ee(n).bind((function(n){return Xe(n,Pr.firstSelectedSelector)})).fold((function(){return n}),(function(n){return n[0]}))}(t):t
return At(r,n)}},ul=ol("th,td"),il=ol("th,td,caption"),cl=function(n,t){return ul(n).map((function(n){return Or(t)})).getOr([])},al=function(n,t){var e,r,o,u=ul(n),i=u.bind((function(n){return ee(n)})).map((function(n){return re(n)}))
return(e=u,r=i,o=function(n,e){return A(e,(function(e){return T(Rr(e.dom.cells),(function(e){return"1"===Pt(e,t)||Bn(e,n)}))}))},e.isSome()&&r.isSome()?f.some(o(e.getOrDie(),r.getOrDie())):f.none()).getOr([])},ll=function(t,e,r){var o=function(n){return"table"===Kn(Gi(n))},u=Ui(t),c=function(n,e,r,o){return function(i,c){Qi(i)
var a=o(),l=Dn.fromDom(t.getDoc()),s=Sr(r,l,u),m=lc(t,i)
return e(i)?n(a,i,c,s,m).bind((function(n){return D(n.newRows,(function(n){Ti(t,n.dom)})),D(n.newCells,(function(n){Ri(t,n.dom)})),n.cursor.map((function(n){var e=Sc(Tc,n),r=t.dom.createRng()
return r.setStart(e.element.dom,e.offset),r.setEnd(e.element.dom,e.offset),r}))})):f.none()}},a=c(La,(function(n){return!1===o(t)||Eu(n).rows>1}),n,e),l=c(Fa,(function(n){return!1===o(t)||Eu(n).columns>1}),n,e),s=c(ja,i,n,e),m=c(_a,i,n,e),d=c(za,i,Rc,e),g=c(Wa,i,Rc,e),p=c(Va,i,n,e),v=c(Ua,i,n,e),h=c(Ga,i,n,e),b=c(Ka,i,n,e),w=c(Xa,i,n,e),y=c(Ya,i,n,e),C=c($a,i,n,e),x=function(n,t){return Ln(n,"type").filter((function(n){return S(t,n)}))}
return{deleteRow:a,deleteColumn:l,insertRowsBefore:s,insertRowsAfter:m,insertColumnsBefore:d,insertColumnsAfter:g,mergeCells:p,unmergeCells:v,pasteColsBefore:h,pasteColsAfter:b,pasteRowsBefore:w,pasteRowsAfter:y,pasteCells:C,setTableCellType:function(n,t){return x(t,["td","th"]).each((function(t){var e=O(cl(tc(n),r),(function(n){return n.dom}))
el(n.dom,e,t,null)}))},setTableRowType:function(n,t){return x(t,["header","body","footer"]).each((function(t){O(al(tc(n),Pr.selected),(function(e){return rl(n,e.dom,t)}))}))},makeColumnsHeader:c(Ha,i,n,e),unmakeColumnsHeader:c(qa,i,n,e),getTableRowType:function(n){var t=al(tc(n),Pr.selected)
if(t.length>0){var e=O(t,(function(n){return nl(0,n.dom)})),r=S(e,"header"),o=S(e,"footer")
if(r||o){var u=S(e,"body")
return!r||u||o?r||u||!o?"":"footer":"header"}return"body"}},getTableCellType:function(n){return Ma(cl(tc(n),r),(function(n){return"th"===Kn(n)})).getOr("")},getTableColType:Ja}},fl={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},colGroups:!1},sl=function(n){var t=Dn.fromTag("colgroup")
return R(n,(function(){return Re(t,Dn.fromTag("col"))})),t},ml=function(n,t,e,r){return R(n,(function(n){return function(n,t,e,r){for(var o=Dn.fromTag("tr"),u=0;u<n;u++){var i=r<t||u<e?Dn.fromTag("th"):Dn.fromTag("td")
u<e&&Bt(i,"scope","row"),r<t&&Bt(i,"scope","col"),Re(i,Dn.fromTag("br")),Re(o,i)}return o}(t,e,r,n)}))},dl=function(n,t){n.selection.select(t.dom,!0),n.selection.collapse(!0)},gl=function(n,t,e,o,u){var i=ki(n),c={styles:i,attributes:Pi(n),colGroups:Li(n)}
return n.undoManager.ignore((function(){var r=function(n,t,e,r,o,u){void 0===u&&(u=fl)
var i=Dn.fromTag("table"),c="cells"!==o
Wt(i,u.styles),Et(i,u.attributes),u.colGroups&&Re(i,sl(t))
var a=Math.min(n,e)
if(c&&e>0){var l=Dn.fromTag("thead")
Re(i,l)
var f=ml(e,t,"sectionCells"===o?a:0,r)
Ae(l,f)}var s=Dn.fromTag("tbody")
Re(i,s)
var m=ml(c?n-a:n,t,c?0:e,r)
return Ae(s,m),i}(e,t,u,o,Hi(n),c)
Bt(r,"data-mce-id","__mce")
var i=function(n){var t=Dn.fromTag("div"),e=Dn.fromDom(n.dom.cloneNode(!0))
return Re(t,e),function(n){return n.dom.innerHTML}(t)}(r)
n.insertContent(i),n.addVisual()})),Dt(Gi(n),'table[data-mce-id="__mce"]').map((function(t){return Wi(n)?dc(n,t):Fi(n)?gc(t):(zi(n)||function(n){return d(n)&&-1!==n.indexOf("%")}(i.width))&&mc(n,t),Qi(t),Mt(t,"data-mce-id"),function(n,t){D(xt(t,"tr"),(function(t){Ti(n,t.dom),D(xt(t,"th,td"),(function(t){Ri(n,t.dom)}))}))}(n,t),function(n,t){Dt(t,"td,th").each(r(dl,n))}(n,t),t.dom})).getOr(null)},pl=function(n,t,e,r,o){void 0===r&&(r={})
var u=function(n){return w(n)&&n>0}
if(u(t)&&u(e)){var i=r.headerRows||0,c=r.headerColumns||0
return gl(n,e,t,c,i)}return console.error(o),null},vl=function(n){return function(){return n().fold((function(){return[]}),(function(n){return O(n,(function(n){return n.dom}))}))}},hl=function(n){return function(t){var e=t.length>0?f.some(Rr(t)):f.none()
n(e)}},bl=function(n){return function(t,e,r){void 0===r&&(r={})
var o=pl(n,e,t,r,"Invalid values for insertTable - rows and columns values are required to insert a table.")
return n.undoManager.add(),o}},wl=function(n,t,e){var r=Vt(n,t,1)
1===e||r<=1?Mt(n,t):Bt(n,t,Math.min(e,r))},yl=function(n,t){var e=se.fromTable(n)
return $c(e,t).map((function(n){var t=n[n.length-1],r=n[0].column,o=t.column+t.colspan
return L(function(n,t,e){if(se.hasColumns(n)){var r=A(se.justColumns(n),(function(n){return n.column>=t&&n.column<e})),o=O(r,(function(n){var r=gr(n.element)
return wl(r,"span",e-t),r})),u=Dn.fromTag("colgroup")
return Ae(u,o),[u]}return[]}(e,r,o),function(n,t,e){return O(n.all,(function(n){var r=A(n.cells,(function(n){return n.column>=t&&n.column<e})),o=O(r,(function(n){var r=gr(n.element)
return wl(r,"colspan",e-t),r})),u=Dn.fromTag("tr")
return Ae(u,o),u}))}(e,r,o))}))},Cl=function(n,t,e){var r=se.fromTable(n)
return $c(r,t).map((function(n){var t=Wc(r,e,!1),o=Pc(t).rows.slice(n[0].row,n[n.length-1].row+n[n.length-1].rowspan)
return function(n){return O(n,(function(n){var t=dr(n.element)
return D(n.cells,(function(n){var e=gr(n.element)
kc(e,"colspan",n.colspan,1),kc(e,"rowspan",n.rowspan,1),Re(t,e)})),t}))}(Lc(o,e))}))},xl=tinymce.util.Tools.resolve("tinymce.util.Tools"),Sl=function(n,t,e){return function(t,r){for(var o=0;o<r.length;o++){var u=n.getStyle(r[o],e)
if(void 0===t&&(t=u),t!==u)return""}return t}(undefined,n.select("td,th",t))},Tl=function(n,t,e){e&&n.formatter.apply("align"+e,{},t)},Rl=function(n,t){xl.each("left center right".split(" "),(function(e){n.formatter.remove("align"+e,{},t)}))},Ol=function(n){return function(n,t){return Hn(n,t)&&void 0!==n[t]&&null!==n[t]}(n,"menu")},Dl=function(n,t){return function(n,t){return t.concat(O(n,(function(n){var t=n.text||n.title
return Ol(n)?{text:t,items:Dl(n.menu)}:{text:t,value:n.value}})))}(n,t||[])},Al=function(n){return function(t){return J(t,"rgb")?n.toHex(t):t}},Il=function(n,t){var e=Dn.fromDom(t)
return{borderwidth:Ht(e,"border-width").getOr(""),borderstyle:Ht(e,"border-style").getOr(""),bordercolor:Ht(e,"border-color").map(Al(n)).getOr(""),backgroundcolor:Ht(e,"background-color").map(Al(n)).getOr("")}},Bl=function(n){var t=n[0],e=n.slice(1)
return D(e,(function(n){D(Mn(t),(function(e){jn(n,(function(n,r){var o=t[e]
""!==o&&e===r&&o!==n&&(t[e]="")}))}))})),t},El=function(n){var t=[{name:"borderstyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]},{name:"bordercolor",type:"colorinput",label:"Border color"},{name:"backgroundcolor",type:"colorinput",label:"Background color"}]
return{title:"Advanced",name:"advanced",items:"cell"===n?[{name:"borderwidth",type:"input",label:"Border width"}].concat(t):t}},Pl=function(n,t,e,r){return E(n,(function(n){return e.formatter.matchNode(r,t+n)})).getOr("")},kl=r(Pl,["left","center","right"],"align"),Ml=r(Pl,["top","middle","bottom"],"valign"),Nl=[{name:"width",type:"input",label:"Width"},{name:"height",type:"input",label:"Height"},{name:"celltype",type:"listbox",label:"Cell type",items:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{name:"scope",type:"listbox",label:"Scope",items:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{name:"halign",type:"listbox",label:"H Align",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{name:"valign",type:"listbox",label:"V Align",items:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}],jl=function(n){return Nl.concat(function(n){var t=Dl(function(n){return n.getParam("table_cell_class_list",[],"array")}(n))
return t.length>0?f.some({name:"class",type:"listbox",label:"Class",items:t}):f.none()}(n).toArray())},_l=function(n){return function(t,e){var r=t.dom
return{setAttrib:function(t,o){n&&!o||r.setAttrib(e,t,o)},setStyle:function(t,o){n&&!o||r.setStyle(e,t,o)},setFormat:function(r,o){n&&!o||(""===o?t.formatter.remove(r,{value:null},e,!0):t.formatter.apply(r,{value:o},e))}}}},zl={normal:_l(!1),ifTruthy:_l(!0)},Wl=function(n){return ee(n[0]).map((function(t){var e=se.fromTable(t),r=se.justCells(e),o=A(r,(function(t){return T(n,(function(n){return Bn(t.element,n)}))}))
return O(o,(function(n){return{element:n.element.dom,column:se.getColumnAt(e,n.column).map((function(n){return n.element.dom}))}}))}))},Fl=function(n,t,e){var r=n.dom,o=1===t.length
if(t.length>=1){var u=ee(t[0])
Wl(t).each((function(t){D(t,(function(t){var u=t.element,i=e.celltype&&$i(u)!==e.celltype?r.rename(u,e.celltype):u,c=o?zl.normal(n,i):zl.ifTruthy(n,i);(function(n,t,e){n.setAttrib("scope",e.scope),n.setAttrib("class",e.class),n.setStyle("height",Ji(e.height)),t.setStyle("width",Ji(e.width))})(c,t.column.map((function(t){return o?zl.normal(n,t):zl.ifTruthy(n,t)})).getOr(c),e),Mi(n)&&function(n,t){n.setFormat("tablecellbackgroundcolor",t.backgroundcolor),n.setFormat("tablecellbordercolor",t.bordercolor),n.setFormat("tablecellborderstyle",t.borderstyle),n.setFormat("tablecellborderwidth",Ji(t.borderwidth))}(c,e),o&&(Rl(n,i),function(n,t){xl.each("top middle bottom".split(" "),(function(e){n.formatter.remove("valign"+e,{},t)}))}(n,i)),e.halign&&Tl(n,i,e.halign),e.valign&&function(n,t,e){e&&n.formatter.apply("valign"+e,{},t)}(n,i,e.valign)}))})),u.each((function(t){return Oi(n,t.dom)}))}},Ll=function(n,t,e){var r=e.getData()
e.close(),n.undoManager.transact((function(){Fl(n,t,r),n.focus()}))},Hl=function(n,t){var e=Wl(t).map((function(t){return O(t,(function(t){return function(n,t,e,r){var o=n.dom,u=r.getOr(t),i=function(n,t){return o.getStyle(n,t)||o.getAttrib(n,t)}
return F({width:i(u,"width"),height:i(t,"height"),scope:o.getAttrib(t,"scope"),celltype:$i(t),class:o.getAttrib(t,"class",""),halign:kl(n,t),valign:Ml(n,t)},e?Il(o,t):{})}(n,t.element,Mi(n),t.column)}))}))
return Bl(e.getOrDie())},ql=function(n,t){var e=cl(tc(n),t)
if(0!==e.length){var o=Hl(n,e),u={type:"tabpanel",tabs:[{title:"General",name:"general",items:jl(n)},El("cell")]},i={type:"panel",items:[{type:"grid",columns:2,items:jl(n)}]}
n.windowManager.open({title:"Cell Properties",size:"normal",body:Mi(n)?u:i,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:o,onSubmit:r(Ll,n,e)})}},Vl=[{type:"listbox",name:"type",label:"Row type",items:[{text:"Header",value:"header"},{text:"Body",value:"body"},{text:"Footer",value:"footer"}]},{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height",type:"input"}],Ul=function(n){return Vl.concat(function(n){var t=Dl(function(n){return n.getParam("table_row_class_list",[],"array")}(n))
return t.length>0?f.some({name:"class",type:"listbox",label:"Class",items:t}):f.none()}(n).toArray())},$l=function(n,t,e,r){var o=1===t.length
D(t,(function(t){r.type!==$i(t.parentNode)&&rl(n,t,r.type)
var u=o?zl.normal(n,t):zl.ifTruthy(n,t);(function(n,t){n.setAttrib("scope",t.scope),n.setAttrib("class",t.class),n.setStyle("height",Ji(t.height))})(u,r),Ni(n)&&function(n,t){n.setStyle("background-color",t.backgroundcolor),n.setStyle("border-color",t.bordercolor),n.setStyle("border-style",t.borderstyle)}(u,r),r.align!==e.align&&(Rl(n,t),Tl(n,t,r.align))})),ee(Dn.fromDom(t[0])).each((function(t){return Oi(n,t.dom)}))},Gl=function(n,t,e,r){var o=r.getData()
r.close(),n.undoManager.transact((function(){$l(n,t,e,o),n.focus()}))},Kl=function(n){var t=al(tc(n),Pr.selected)
if(0!==t.length){var e=O(t,(function(t){return function(n,t,e){var r=n.dom
return F({height:r.getStyle(t,"height")||r.getAttrib(t,"height"),scope:r.getAttrib(t,"scope"),class:r.getAttrib(t,"class",""),type:nl(0,t),align:kl(n,t)},e?Il(r,t):{})}(n,t.dom,Ni(n))})),o=Bl(e),u={type:"tabpanel",tabs:[{title:"General",name:"general",items:Ul(n)},El("row")]},i={type:"panel",items:[{type:"grid",columns:2,items:Ul(n)}]}
n.windowManager.open({title:"Row Properties",size:"normal",body:Ni(n)?u:i,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:o,onSubmit:r(Gl,n,O(t,(function(n){return n.dom})),o)})}},Xl=tinymce.util.Tools.resolve("tinymce.Env"),Yl=function(n,t,e){var r=e?[{type:"input",name:"cols",label:"Cols",inputMode:"numeric"},{type:"input",name:"rows",label:"Rows",inputMode:"numeric"}]:[],o=function(n){return n.getParam("table_appearance_options",!0,"boolean")}(n)?[{type:"input",name:"cellspacing",label:"Cell spacing",inputMode:"numeric"},{type:"input",name:"cellpadding",label:"Cell padding",inputMode:"numeric"},{type:"input",name:"border",label:"Border width"},{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[],u=t.length>0?[{type:"listbox",name:"class",label:"Class",items:t}]:[]
return r.concat([{type:"input",name:"width",label:"Width"},{type:"input",name:"height",label:"Height"}]).concat(o).concat([{type:"listbox",name:"align",label:"Alignment",items:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]}]).concat(u)},Jl=function(n,t,e,r){if("TD"===t.tagName||"TH"===t.tagName)d(e)?n.setStyle(t,e,r):n.setStyle(t,e)
else if(t.children)for(var o=0;o<t.children.length;o++)Jl(n,t.children[o],e,r)},Ql=function(n,t,e){var r,o=n.dom,u=e.getData()
e.close(),""===u.class&&delete u.class,n.undoManager.transact((function(){if(!t){var e=parseInt(u.cols,10)||1,i=parseInt(u.rows,10)||1
t=gl(n,e,i,0,0)}(function(n,t,e){var r,o=n.dom,u={},i={}
if(u.class=e.class,i.height=Ji(e.height),o.getAttrib(t,"width")&&!_i(n)?u.width=(r=e.width)?r.replace(/px$/,""):"":i.width=Ji(e.width),_i(n)?(i["border-width"]=Ji(e.border),i["border-spacing"]=Ji(e.cellspacing)):(u.border=e.border,u.cellpadding=e.cellpadding,u.cellspacing=e.cellspacing),_i(n)&&t.children)for(var c=0;c<t.children.length;c++)Jl(o,t.children[c],{"border-width":Ji(e.border),padding:Ji(e.cellpadding)}),ji(n)&&Jl(o,t.children[c],{"border-color":e.bordercolor})
ji(n)&&(i["background-color"]=e.backgroundcolor,i["border-color"]=e.bordercolor,i["border-style"]=e.borderstyle),u.style=o.serializeStyle(F(F({},ki(n)),i)),o.setAttribs(t,F(F({},Pi(n)),u)),Oi(n,t)})(n,t,u),(r=o.select("caption",t)[0])&&!u.caption&&o.remove(r),!r&&u.caption&&((r=o.create("caption")).innerHTML=Xl.ie?" ":'<br data-mce-bogus="1"/>',t.insertBefore(r,t.firstChild)),""===u.align?Rl(n,t):Tl(n,t,u.align),n.focus(),n.addVisual()}))},Zl=function(n,t){var e,o=n.dom,u=function(n,t){var e,r,o,u,i=ki(n),c=Pi(n),a=t?(e=n.dom,{borderstyle:Ln(i,"border-style").getOr(""),bordercolor:Al(e)(Ln(i,"border-color").getOr("")),backgroundcolor:Al(e)(Ln(i,"background-color").getOr(""))}):{}
return F(F(F(F(F(F({},{height:"",width:"100%",cellspacing:"",cellpadding:"",caption:!1,class:"",align:"",border:""}),i),c),a),(u=i["border-width"],_i(n)&&u?{border:u}:Ln(c,"border").fold((function(){return{}}),(function(n){return{border:n}})))),(r=Ln(i,"border-spacing").or(Ln(c,"cellspacing")).fold((function(){return{}}),(function(n){return{cellspacing:n}})),o=Ln(i,"border-padding").or(Ln(c,"cellpadding")).fold((function(){return{}}),(function(n){return{cellpadding:n}})),F(F({},r),o)))}(n,ji(n))
!1===t?(e=o.getParent(n.selection.getStart(),"table"))?u=function(n,t,e){var r=n.dom
return F({width:r.getStyle(t,"width")||r.getAttrib(t,"width"),height:r.getStyle(t,"height")||r.getAttrib(t,"height"),cellspacing:r.getStyle(t,"border-spacing")||r.getAttrib(t,"cellspacing"),cellpadding:r.getAttrib(t,"cellpadding")||Sl(n.dom,t,"padding"),border:function(t,e){var r=Ht(Dn.fromDom(e),"border-width")
return _i(n)&&r.isSome()?r.getOr(""):t.getAttrib(e,"border")||Sl(n.dom,e,"border-width")||Sl(n.dom,e,"border")}(r,t),caption:!!r.select("caption",t)[0],class:r.getAttrib(t,"class",""),align:kl(n,t)},e?Il(r,t):{})}(n,e,ji(n)):ji(n)&&(u.borderstyle="",u.bordercolor="",u.backgroundcolor=""):(u.cols="1",u.rows="1",ji(n)&&(u.borderstyle="",u.bordercolor="",u.backgroundcolor=""))
var i=Dl(function(n){return n.getParam("table_class_list",[],"array")}(n))
i.length>0&&u.class&&(u.class=u.class.replace(/\s*mce\-item\-table\s*/g,""))
var c={type:"grid",columns:2,items:Yl(n,i,t)},a=ji(n)?{type:"tabpanel",tabs:[{title:"General",name:"general",items:[c]},El("table")]}:{type:"panel",items:[c]}
n.windowManager.open({title:"Table Properties",size:"normal",body:a,onSubmit:r(Ql,n,e),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:u})},nf=function(n){return il(tc(n))},tf=function(n){return ul(tc(n))},ef=function(t,e,u,i,c){var a=Yi(t),l=function(n){return ee(n,a)},s=function(n){return function(e){t.selection.setRng(e),t.focus(),u.clear(n),Qi(n),Oi(t,n.dom)}},m=function(n){return tf(t).each((function(t){l(t).each((function(e){var r=Mr(i,e,t)
n(e,r).each(s(e))}))}))},p=function(){return tf(t).map((function(e){return l(e).bind((function(r){var o=Mr(i,r,e),u=Sr(n,Dn.fromDom(t.getDoc()),f.none())
return Cl(r,o,u)}))}))},v=function(){return tf(t).map((function(n){return l(n).bind((function(t){var e=Mr(i,t,n)
return yl(t,e)}))}))},h=function(n,e){return e().each((function(e){var r=O(e,(function(n){return gr(n)}))
tf(t).each((function(e){return l(e).each((function(e){var o=Tr(Dn.fromDom(t.getDoc())),u=function(n,t,e,r){return{selection:Or(n),clipboard:e,generators:r}}(i,0,r,o)
n(e,u).each(s(e))}))}))}))}
jn({mceTableSplitCells:function(){return m(e.unmergeCells)},mceTableMergeCells:function(){return m(e.mergeCells)},mceTableInsertRowBefore:function(){return m(e.insertRowsBefore)},mceTableInsertRowAfter:function(){return m(e.insertRowsAfter)},mceTableInsertColBefore:function(){return m(e.insertColumnsBefore)},mceTableInsertColAfter:function(){return m(e.insertColumnsAfter)},mceTableDeleteCol:function(){return m(e.deleteColumn)},mceTableDeleteRow:function(){return m(e.deleteRow)},mceTableCutCol:function(n){return v().each((function(n){c.setColumns(n),m(e.deleteColumn)}))},mceTableCutRow:function(n){return p().each((function(n){c.setRows(n),m(e.deleteRow)}))},mceTableCopyCol:function(n){return v().each((function(n){return c.setColumns(n)}))},mceTableCopyRow:function(n){return p().each((function(n){return c.setRows(n)}))},mceTablePasteColBefore:function(n){return h(e.pasteColsBefore,c.getColumns)},mceTablePasteColAfter:function(n){return h(e.pasteColsAfter,c.getColumns)},mceTablePasteRowBefore:function(n){return h(e.pasteRowsBefore,c.getRows)},mceTablePasteRowAfter:function(n){return h(e.pasteRowsAfter,c.getRows)},mceTableDelete:function(){return nf(t).each((function(n){ee(n,a).filter(o(a)).each((function(n){var e=Dn.fromText("")
if(Se(n,e),Be(n),t.dom.isEmpty(t.getBody()))t.setContent(""),t.selection.setCursorLocation()
else{var r=t.dom.createRng()
r.setStart(e.dom,0),r.setEnd(e.dom,0),t.selection.setRng(r),t.nodeChanged()}}))}))},mceTableSizingMode:function(n,e){return function(n){return nf(t).each((function(e){Fi(t)||Wi(t)||zi(t)||ee(e,a).each((function(e){"relative"!==n||Du(e)?"fixed"!==n||Au(e)?"responsive"!==n||Iu(e)||gc(e):dc(t,e):mc(t,e),Qi(e),Oi(t,e.dom)}))}))}(e)}},(function(n,e){return t.addCommand(e,n)}))
var b=function(n,t){t.each((function(t){Oi(n,t.dom)}))}
jn({mceTableCellType:function(n,r){var o=ee(tc(t),a)
e.setTableCellType(t,r),b(t,o)},mceTableRowType:function(n,r){var o=ee(tc(t),a)
e.setTableRowType(t,r),b(t,o)}},(function(n,e){return t.addCommand(e,n)})),t.addCommand("mceTableColType",(function(n,t){return Ln(t,"type").each((function(n){return m("th"===n?e.makeColumnsHeader:e.unmakeColumnsHeader)}))})),jn({mceTableProps:r(Zl,t,!1),mceTableRowProps:r(Kl,t),mceTableCellProps:r(ql,t,i)},(function(n,e){return t.addCommand(e,(function(){return n()}))})),t.addCommand("mceInsertTable",(function(n,e){g(e)&&Mn(e).length>0?pl(t,e.rows,e.columns,e.options,"Invalid values for mceInsertTable - rows and columns values are required to insert a table."):Zl(t,!0)})),t.addCommand("mceTableApplyCellStyle",(function(n,e){var r=function(n){return"tablecell"+n.toLowerCase().replace("-","")}
if(g(e)){var o=cl(tc(t),i)
if(0!==o.length){var u=Wn(e,(function(n,e){return t.formatter.has(r(e))&&d(n)}));(function(n){for(var t in n)if(Nn.call(n,t))return!1
return!0})(u)||(jn(u,(function(n,e){D(o,(function(o){zl.normal(t,o.dom).setFormat(r(e),n)}))})),l(o[0]).each((function(n){return Oi(t,n.dom,{structure:!1,style:!0})})))}}}))},rf=function(n,t,e){var r=Yi(n)
jn({mceTableRowType:function(){return t.getTableRowType(n)},mceTableCellType:function(){return t.getTableCellType(n)},mceTableColType:function(){return ul(tc(n)).bind((function(n){return function(n){return ee(n,r)}(n).map((function(r){var o=Mr(e,r,n)
return t.getTableColType(r,o)}))})).getOr("")}},(function(t,e){return n.addQueryValueHandler(e,t)}))},of={tablecellbackgroundcolor:{selector:"td,th",styles:{backgroundColor:"%value"},remove_similar:!0},tablecellbordercolor:{selector:"td,th",styles:{borderColor:"%value"},remove_similar:!0},tablecellborderstyle:{selector:"td,th",styles:{borderStyle:"%value"},remove_similar:!0},tablecellborderwidth:{selector:"td,th",styles:{borderWidth:"%value"},remove_similar:!0}},uf=Je([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]),cf=F(F({},uf),{none:function(n){return void 0===n&&(n=void 0),uf.none(n)}}),af=function(n,t){return ee(n,t).bind((function(t){var e=ne(t)
return P(e,(function(t){return Bn(n,t)})).map((function(n){return{index:n,all:e}}))}))},lf=function(n,t,e,r){return{start:n,soffset:t,finish:e,foffset:r}},ff=Je([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),sf={before:ff.before,on:ff.on,after:ff.after,cata:function(n,t,e,r){return n.fold(t,e,r)},getStart:function(n){return n.fold(e,e,e)}},mf=Je([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),df={domRange:mf.domRange,relative:mf.relative,exact:mf.exact,exactFromRange:function(n){return mf.exact(n.start,n.soffset,n.finish,n.foffset)},getWin:function(n){var t,e=function(n){return n.match({domRange:function(n){return Dn.fromDom(n.startContainer)},relative:function(n,t){return sf.getStart(n)},exact:function(n,t,e,r){return n}})}(n)
return t=e,Dn.fromDom(rt(t).dom.defaultView)},range:lf},gf=function(n,t){return n.selectNodeContents(t.dom)},pf=function(n,t,e){var r,o=n.document.createRange()
return r=o,t.fold((function(n){r.setStartBefore(n.dom)}),(function(n,t){r.setStart(n.dom,t)}),(function(n){r.setStartAfter(n.dom)})),function(n,t){t.fold((function(t){n.setEndBefore(t.dom)}),(function(t,e){n.setEnd(t.dom,e)}),(function(t){n.setEndAfter(t.dom)}))}(o,e),o},vf=function(n,t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},hf=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom,width:n.width,height:n.height}},bf=Je([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),wf=function(n,t,e){return t(Dn.fromDom(e.startContainer),e.startOffset,Dn.fromDom(e.endContainer),e.endOffset)},yf=function(n,e){return function(n,t){var e=t.ltr()
return e.collapsed?t.rtl().filter((function(n){return!1===n.collapsed})).map((function(n){return bf.rtl(Dn.fromDom(n.endContainer),n.endOffset,Dn.fromDom(n.startContainer),n.startOffset)})).getOrThunk((function(){return wf(0,bf.ltr,e)})):wf(0,bf.ltr,e)}(0,function(n,e){return e.match({domRange:function(n){return{ltr:t(n),rtl:f.none}},relative:function(t,e){return{ltr:H((function(){return pf(n,t,e)})),rtl:H((function(){return f.some(pf(n,e,t))}))}},exact:function(t,e,r,o){return{ltr:H((function(){return vf(n,t,e,r,o)})),rtl:H((function(){return f.some(vf(n,r,o,t,e))}))}}})}(n,e))},Cf=function(n,t){return yf(n,t).match({ltr:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(t.dom,e),u.setEnd(r.dom,o),u},rtl:function(t,e,r,o){var u=n.document.createRange()
return u.setStart(r.dom,o),u.setEnd(t.dom,e),u}})},xf=(bf.ltr,bf.rtl,function(n,t,e){return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}),Sf=function(n,t,e,r,o){var u=function(e){var r=n.dom.createRange()
return r.setStart(t.dom,e),r.collapse(!0),r},i=ke(t).length,c=function(n,t,e,r,o){if(0===o)return 0
if(t===r)return o-1
for(var u=r,i=1;i<o;i++){var c=n(i),a=Math.abs(t-c.left)
if(e<=c.bottom){if(e<c.top||a>u)return i-1
u=a}}return 0}((function(n){return u(n).getBoundingClientRect()}),e,r,o.right,i)
return u(c)},Tf=function(n,t,e,r){return Zn(t)?function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getClientRects()
return W(u,(function(n){return xf(n,e,r)?f.some(n):f.none()})).map((function(o){return Sf(n,t,e,r,o)}))}(n,t,e,r):function(n,t,e,r){var o=n.dom.createRange(),u=at(t)
return W(u,(function(t){return o.selectNode(t.dom),xf(o.getBoundingClientRect(),e,r)?Tf(n,t,e,r):f.none()}))}(n,t,e,r)},Rf=function(n,t){return t-n.left<n.right-t},Of=function(n,t,e){var r=n.dom.createRange()
return r.selectNode(t.dom),r.collapse(e),r},Df=function(n,t,e){var r=n.dom.createRange()
r.selectNode(t.dom)
var o=r.getBoundingClientRect(),u=Rf(o,e)
return(true===u?lr:fr)(t).map((function(t){return Of(n,t,u)}))},Af=function(n,t,e){var r=t.dom.getBoundingClientRect(),o=Rf(r,e)
return f.some(Of(n,t,o))},If=function(n,t,e){return f.from(n.dom.caretPositionFromPoint(t,e)).bind((function(t){if(null===t.offsetNode)return f.none()
var e=n.dom.createRange()
return e.setStart(t.offsetNode,t.offset),e.collapse(),f.some(e)}))},Bf=function(n,t,e){return f.from(n.dom.caretRangeFromPoint(t,e))},Ef=function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect()
return function(n,t,e,r){var o=n.dom.createRange()
o.selectNode(t.dom)
var u=o.getBoundingClientRect(),i=Math.max(u.left,Math.min(u.right,e)),c=Math.max(u.top,Math.min(u.bottom,r))
return Tf(n,t,i,c)}(n,t,Math.max(u.left,Math.min(u.right,e)),Math.max(u.top,Math.min(u.bottom,r)))},Pf=function(n,t,e){return Dn.fromPoint(n,t,e).bind((function(r){var o=function(){return function(n,t,e){return(0===at(t).length?Af:Df)(n,t,e)}(n,r,t)}
return 0===at(r).length?o():Ef(n,r,t,e).orThunk(o)}))},kf=document.caretPositionFromPoint?If:document.caretRangeFromPoint?Bf:Pf,Mf=function(n,t){var e=Kn(n)
return"input"===e?sf.after(n):S(["br","img"],e)?0===t?sf.before(n):sf.after(n):sf.on(n,t)},Nf=function(n,t){var e=n.fold(sf.before,Mf,sf.after),r=t.fold(sf.before,Mf,sf.after)
return df.relative(e,r)},jf=function(n,t,e,r){var o=Mf(n,t),u=Mf(e,r)
return df.relative(o,u)},_f=function(n,t,e,r){var o=function(n,t,e,r){var o=et(n).dom.createRange()
return o.setStart(n.dom,t),o.setEnd(e.dom,r),o}(n,t,e,r),u=Bn(n,e)&&t===r
return o.collapsed&&!u},zf=function(n){return f.from(n.getSelection())},Wf=function(n,t){zf(n).each((function(n){n.removeAllRanges(),n.addRange(t)}))},Ff=function(n,t,e,r,o){var u=vf(n,t,e,r,o)
Wf(n,u)},Lf=function(n,t){return yf(n,t).match({ltr:function(t,e,r,o){Ff(n,t,e,r,o)},rtl:function(t,e,r,o){zf(n).each((function(u){if(u.setBaseAndExtent)u.setBaseAndExtent(t.dom,e,r.dom,o)
else if(u.extend)try{(function(n,t,e,r,o,u){t.collapse(e.dom,r),t.extend(o.dom,u)})(0,u,t,e,r,o)}catch(i){Ff(n,r,o,t,e)}else Ff(n,r,o,t,e)}))}})},Hf=function(n,t,e,r,o){var u=jf(t,e,r,o)
Lf(n,u)},qf=function(n,t,e){var r=Nf(t,e)
Lf(n,r)},Vf=function(n){var t=df.getWin(n).dom,e=function(n,e,r,o){return vf(t,n,e,r,o)},r=function(n){return n.match({domRange:function(n){var t=Dn.fromDom(n.startContainer),e=Dn.fromDom(n.endContainer)
return jf(t,n.startOffset,e,n.endOffset)},relative:Nf,exact:jf})}(n)
return yf(t,r).match({ltr:e,rtl:e})},Uf=function(n){if(n.rangeCount>0){var t=n.getRangeAt(0),e=n.getRangeAt(n.rangeCount-1)
return f.some(lf(Dn.fromDom(t.startContainer),t.startOffset,Dn.fromDom(e.endContainer),e.endOffset))}return f.none()},$f=function(n){if(null===n.anchorNode||null===n.focusNode)return Uf(n)
var t=Dn.fromDom(n.anchorNode),e=Dn.fromDom(n.focusNode)
return _f(t,n.anchorOffset,e,n.focusOffset)?f.some(lf(t,n.anchorOffset,e,n.focusOffset)):Uf(n)},Gf=function(n,t){var e=function(n,t){var e=n.document.createRange()
return gf(e,t),e}(n,t)
Wf(n,e)},Kf=function(n){return function(n){return zf(n).filter((function(n){return n.rangeCount>0})).bind($f)}(n).map((function(n){return df.exact(n.start,n.soffset,n.finish,n.foffset)}))},Xf=function(n,t){return function(n){var t=n.getClientRects(),e=t.length>0?t[0]:n.getBoundingClientRect()
return e.width>0||e.height>0?f.some(e).map(hf):f.none()}(Cf(n,t))},Yf=function(n,t,e){return function(n,t,e){var r=Dn.fromDom(n.document)
return kf(r,t,e).map((function(n){return lf(Dn.fromDom(n.startContainer),n.startOffset,Dn.fromDom(n.endContainer),n.endOffset)}))}(n,t,e)},Jf=tinymce.util.Tools.resolve("tinymce.util.VK"),Qf=function(n,t,e,r){return ts(n,t,function(n,t){return af(n,t).fold((function(){return cf.none(n)}),(function(t){return t.index+1<t.all.length?cf.middle(n,t.all[t.index+1]):cf.last(n)}))}(e),r)},Zf=function(n,t,e,r){return ts(n,t,function(n,t){return af(n,t).fold((function(){return cf.none()}),(function(t){return t.index-1>=0?cf.middle(n,t.all[t.index-1]):cf.first(n)}))}(e),r)},ns=function(n,t){var e=df.exact(t,0,t,0)
return Vf(e)},ts=function(n,t,e,r){return e.fold(f.none,f.none,(function(n,t){return lr(t).map((function(n){return ns(0,n)}))}),(function(e){return ee(e,t).bind((function(t){var o=kr(e)
return n.undoManager.transact((function(){r.insertRowsAfter(t,o)})),function(n,t){var e=xt(t,"tr")
return z(e).bind((function(n){return Dt(n,"td,th").map((function(n){return ns(0,n)}))}))}(0,t)}))}))},es=["table","li","dl"],rs=function(n,t){return{selection:n,kill:t}},os=function(n,t,e,r){return{start:sf.on(n,t),finish:sf.on(e,r)}},us=function(n,t){var e=Cf(n,t)
return lf(Dn.fromDom(e.startContainer),e.startOffset,Dn.fromDom(e.endContainer),e.endOffset)},is=os,cs=function(n,t,e,r,o){return Bn(e,r)?f.none():Ue(e,r,t).bind((function(t){var r=t.boxes.getOr([])
return r.length>0?(o(n,r,t.start,t.finish),f.some(rs(f.some(is(e,0,e,ir(e))),!0))):f.none()}))},as=function(n,t){return{item:n,mode:t}},ls=function(n,t,e,r){return void 0===r&&(r=fs),n.property().parent(t).map((function(n){return as(n,r)}))},fs=function(n,t,e,r){return void 0===r&&(r=ss),e.sibling(n,t).map((function(n){return as(n,r)}))},ss=function(n,t,e,r){void 0===r&&(r=ss)
var o=n.property().children(t)
return e.first(o).map((function(n){return as(n,r)}))},ms=[{current:ls,next:fs,fallback:f.none()},{current:fs,next:ss,fallback:f.some(ls)},{current:ss,next:ss,fallback:f.some(fs)}],ds=function(n,t,e,r,o){return void 0===o&&(o=ms),E(o,(function(n){return n.current===e})).bind((function(e){return e.current(n,t,r,e.next).orThunk((function(){return e.fallback.bind((function(e){return ds(n,t,e,r)}))}))}))},gs=function(){return{sibling:function(n,t){return n.query().prevSibling(t)},first:function(n){return n.length>0?f.some(n[n.length-1]):f.none()}}},ps=function(){return{sibling:function(n,t){return n.query().nextSibling(t)},first:function(n){return n.length>0?f.some(n[0]):f.none()}}},vs=function(n,t,e,r,o,u){return ds(n,t,r,o).bind((function(t){return u(t.item)?f.none():e(t.item)?f.some(t.item):vs(n,t.item,e,t.mode,o,u)}))},hs=function(n){return function(t){return 0===n.property().children(t).length}},bs=function(n,t,e,r){return vs(n,t,e,fs,gs(),r)},ws=function(n,t,e,r){return vs(n,t,e,fs,ps(),r)},ys=_e(),Cs=function(n,t){return function(n,t,e){return bs(n,t,hs(n),e)}(ys,n,t)},xs=function(n,t){return function(n,t,e){return ws(n,t,hs(n),e)}(ys,n,t)},Ss=Je([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}]),Ts=function(n){return At(n,"tr")},Rs=F(F({},Ss),{verify:function(n,t,e,r,o,u,i){return At(r,"td,th",i).bind((function(e){return At(t,"td,th",i).map((function(t){return Bn(e,t)?Bn(r,e)&&ir(e)===o?u(t):Ss.none("in same cell"):qe(Ts,[e,t]).fold((function(){return function(n,t,e){var r=n.getRect(t),o=n.getRect(e)
return o.right>r.left&&o.left<r.right}(n,t,e)?Ss.success():u(t)}),(function(n){return u(t)}))}))})).getOr(Ss.none("default"))},cata:function(n,t,e,r,o){return n.fold(t,e,r,o)}}),Os=function(n,t){return P(n,r(Bn,t))},Ds=function(n){return"br"===Kn(n)},As=function(n,t,e){return t(n,e).bind((function(n){return Zn(n)&&0===ke(n).trim().length?As(n,t,e):f.some(n)}))},Is=function(n,t,e,r){return function(n,t){return lt(n,t).filter(Ds).orThunk((function(){return lt(n,t-1).filter(Ds)}))}(t,e).bind((function(t){return r.traverse(t).fold((function(){return As(t,r.gather,n).map(r.relative)}),(function(n){return function(n){return ot(n).bind((function(t){var e=at(t)
return Os(e,n).map((function(r){return function(n,t,e,r){return{parent:n,children:t,element:e,index:r}}(t,e,n,r)}))}))}(n).map((function(n){return sf.on(n.parent,n.index)}))}))}))},Bs=function(n,t,e,r){return(Ds(t)?function(n,t,e){return e.traverse(t).orThunk((function(){return As(t,e.gather,n)})).map(e.relative)}(n,t,r):Is(n,t,e,r)).map((function(n){return{start:n,finish:n}}))},Es=function(n,t){return{left:n.left,top:n.top+t,right:n.right,bottom:n.bottom+t}},Ps=function(n,t){return{left:n.left,top:n.top-t,right:n.right,bottom:n.bottom-t}},ks=function(n,t,e){return{left:n.left+t,top:n.top+e,right:n.right+t,bottom:n.bottom+e}},Ms=function(n){return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},Ns=function(n,t){return f.some(n.getRect(t))},js=function(n,t,e){return Qn(t)?Ns(n,t).map(Ms):Zn(t)?function(n,t,e){return e>=0&&e<ir(t)?n.getRangedRect(t,e,t,e+1):e>0?n.getRangedRect(t,e-1,t,e):f.none()}(n,t,e).map(Ms):f.none()},_s=function(n,t){return Qn(t)?Ns(n,t).map(Ms):Zn(t)?n.getRangedRect(t,0,t,ir(t)).map(Ms):f.none()},zs=Je([{none:[]},{retry:["caret"]}]),Ws=function(n,t,e){return(r=t,o=xa,St((function(n,t){return t(n)}),Tt,r,o,i)).fold(u,(function(t){return _s(n,t).exists((function(n){return function(n,t){return n.left<t.left||Math.abs(t.right-n.left)<1||n.left>t.right}(e,n)}))}))
var r,o,i},Fs={point:function(n){return n.bottom},adjuster:function(n,t,e,r,o){var u=Es(o,5)
return Math.abs(e.bottom-r.bottom)<1||e.top>o.bottom?zs.retry(u):e.top===o.bottom?zs.retry(Es(o,1)):Ws(n,t,o)?zs.retry(ks(u,5,0)):zs.none()},move:Es,gather:xs},Ls=function(n,t,e,r,o){return 0===o?f.some(r):function(n,t,e){return n.elementFromPoint(t,e).filter((function(n){return"table"===Kn(n)})).isSome()}(n,r.left,t.point(r))?function(n,t,e,r,o){return Ls(n,t,e,t.move(r,5),o)}(n,t,e,r,o-1):n.situsFromPoint(r.left,t.point(r)).bind((function(u){return u.start.fold(f.none,(function(u){return _s(n,u).bind((function(i){return t.adjuster(n,u,i,e,r).fold(f.none,(function(r){return Ls(n,t,e,r,o-1)}))})).orThunk((function(){return f.some(r)}))}),f.none)}))},Hs=function(n,t,e){var r=n.move(e,5),o=Ls(t,n,e,r,100).getOr(r)
return function(n,t,e){return n.point(t)>e.getInnerHeight()?f.some(n.point(t)-e.getInnerHeight()):n.point(t)<0?f.some(-n.point(t)):f.none()}(n,o,t).fold((function(){return t.situsFromPoint(o.left,n.point(o))}),(function(e){return t.scrollBy(0,e),t.situsFromPoint(o.left,n.point(o)-e)}))},qs={tryUp:r(Hs,{point:function(n){return n.top},adjuster:function(n,t,e,r,o){var u=Ps(o,5)
return Math.abs(e.top-r.top)<1||e.bottom<o.top?zs.retry(u):e.bottom===o.top?zs.retry(Ps(o,1)):Ws(n,t,o)?zs.retry(ks(u,5,0)):zs.none()},move:Ps,gather:Cs}),tryDown:r(Hs,Fs),ieTryUp:function(n,t){return n.situsFromPoint(t.left,t.top-5)},ieTryDown:function(n,t){return n.situsFromPoint(t.left,t.bottom+5)},getJumpSize:t(5)},Vs=function(n,t,e){return n.getSelection().bind((function(r){return Bs(t,r.finish,r.foffset,e).fold((function(){return f.some(wc(r.finish,r.foffset))}),(function(o){var u=n.fromSitus(o)
return function(n){return Rs.cata(n,(function(n){return f.none()}),(function(){return f.none()}),(function(n){return f.some(wc(n,0))}),(function(n){return f.some(wc(n,ir(n)))}))}(Rs.verify(n,r.finish,r.foffset,u.finish,u.foffset,e.failure,t))}))}))},Us=function(n,t,e,r,o,u){return 0===u?f.none():Ks(n,t,e,r,o).bind((function(i){var c=n.fromSitus(i),a=Rs.verify(n,e,r,c.finish,c.foffset,o.failure,t)
return Rs.cata(a,(function(){return f.none()}),(function(){return f.some(i)}),(function(i){return Bn(e,i)&&0===r?$s(n,e,r,Ps,o):Us(n,t,i,0,o,u-1)}),(function(i){return Bn(e,i)&&r===ir(i)?$s(n,e,r,Es,o):Us(n,t,i,ir(i),o,u-1)}))}))},$s=function(n,t,e,r,o){return js(n,t,e).bind((function(t){return Gs(n,o,r(t,qs.getJumpSize()))}))},Gs=function(n,t,e){var r=Rn().browser
return r.isChrome()||r.isSafari()||r.isFirefox()||r.isEdge()?t.otherRetry(n,e):r.isIE()?t.ieRetry(n,e):f.none()},Ks=function(n,t,e,r,o){return js(n,e,r).bind((function(t){return Gs(n,o,t)}))},Xs=function(n,t){return Tt(n,(function(n){return ot(n).exists((function(n){return Bn(n,t)}))}),e).isSome()
var e},Ys=function(n,t,e,r,o){return At(r,"td,th",t).bind((function(r){return At(r,"table",t).bind((function(u){return Xs(o,u)?function(n,t,e){return Vs(n,t,e).bind((function(r){return Us(n,t,r.element,r.offset,e,20).map(n.fromSitus)}))}(n,t,e).bind((function(n){return At(n.finish,"td,th",t).map((function(t){return{start:r,finish:t,range:n}}))})):f.none()}))}))},Js=function(n,t,e,r,o,u){return Rn().browser.isIE()?f.none():u(r,t).orThunk((function(){return Ys(n,t,e,r,o).map((function(n){var t=n.range
return rs(f.some(is(t.start,t.soffset,t.finish,t.foffset)),!0)}))}))},Qs=function(n,t){return At(n,"tr",t).bind((function(n){return At(n,"table",t).bind((function(e){var r=xt(e,"tr")
return Bn(n,r[0])?function(n,t,e){return bs(ys,n,t,e)}(e,(function(n){return fr(n).isSome()}),t).map((function(n){var t=ir(n)
return rs(f.some(is(n,t,n,t)),!0)})):f.none()}))}))},Zs=function(n,t){return At(n,"tr",t).bind((function(n){return At(n,"table",t).bind((function(e){var r=xt(e,"tr")
return Bn(n,r[r.length-1])?function(n,t,e){return ws(ys,n,t,e)}(e,(function(n){return lr(n).isSome()}),t).map((function(n){return rs(f.some(is(n,0,n,0)),!0)})):f.none()}))}))},nm=function(n,t,e,r,o,u,i){return Ys(n,e,r,o,u).bind((function(n){return cs(t,e,n.start,n.finish,i)}))},tm=function(n,t){return At(n,"td,th",t)}
function em(n,t,e,r){var o,u=(o=ec(f.none()),{clear:function(){return o.set(f.none())},set:function(n){return o.set(f.some(n))},isSet:function(){return o.get().isSome()},on:function(n){return o.get().each(n)}}),i=u.clear
return{clearstate:i,mousedown:function(n){r.clear(t),tm(n.target,e).each(u.set)},mouseover:function(o){u.on((function(u){r.clearBeforeUpdate(t),tm(o.target,e).each((function(o){Ue(u,o,e).each((function(e){var i=e.boxes.getOr([]);(i.length>1||1===i.length&&!Bn(u,o))&&(r.selectRange(t,i,e.start,e.finish),n.selectContents(o))}))}))}))},mouseup:function(n){i()}}}var rm={traverse:ct,gather:xs,relative:sf.before,otherRetry:qs.tryDown,ieRetry:qs.ieTryDown,failure:Rs.failedDown},om={traverse:it,gather:Cs,relative:sf.before,otherRetry:qs.tryUp,ieRetry:qs.ieTryUp,failure:Rs.failedUp},um=function(n){return function(t){return t===n}},im=um(38),cm=um(40),am=function(n){return n>=37&&n<=40},lm={isBackward:um(37),isForward:um(39)},fm={isBackward:um(39),isForward:um(37)},sm=function(n){return{elementFromPoint:function(t,e){return Dn.fromPoint(Dn.fromDom(n.document),t,e)},getRect:function(n){return n.dom.getBoundingClientRect()},getRangedRect:function(t,e,r,o){var u=df.exact(t,e,r,o)
return Xf(n,u)},getSelection:function(){return Kf(n).map((function(t){return us(n,t)}))},fromSitus:function(t){var e=df.relative(t.start,t.finish)
return us(n,e)},situsFromPoint:function(t,e){return Yf(n,t,e).map((function(n){return os(n.start,n.soffset,n.finish,n.foffset)}))},clearSelection:function(){(function(n){zf(n).each((function(n){return n.removeAllRanges()}))})(n)},collapseSelection:function(t){void 0===t&&(t=!1),Kf(n).each((function(e){return e.fold((function(n){return n.collapse(t)}),(function(e,r){var o=t?e:r
qf(n,o,o)}),(function(e,r,o,u){var i=t?e:o,c=t?r:u
Hf(n,i,c,i,c)}))}))},setSelection:function(t){Hf(n,t.start,t.soffset,t.finish,t.foffset)},setRelativeSelection:function(t,e){qf(n,t,e)},selectContents:function(t){Gf(n,t)},getInnerHeight:function(){return n.innerHeight},getScrollY:function(){var t,e,r,o
return(t=Dn.fromDom(n.document),e=void 0!==t?t.dom:document,r=e.body.scrollLeft||e.documentElement.scrollLeft,o=e.body.scrollTop||e.documentElement.scrollTop,uo(r,o)).top},scrollBy:function(t,e){(function(n,t,e){var r=(void 0!==e?e.dom:document).defaultView
r&&r.scrollBy(n,t)})(t,e,Dn.fromDom(n.document))}}},mm=function(n,t){return{rows:n,cols:t}},dm=function(n,t,e,o){var u=sm(n),i=function(){return o.clear(t),f.none()}
return{keydown:function(n,c,a,l,s,m){var d=n.raw,g=d.which,p=!0===d.shiftKey
return $e(t,o.selectedSelector).fold((function(){return cm(g)&&p?r(nm,u,t,e,rm,l,c,o.selectRange):im(g)&&p?r(nm,u,t,e,om,l,c,o.selectRange):cm(g)?r(Js,u,e,rm,l,c,Zs):im(g)?r(Js,u,e,om,l,c,Qs):f.none}),(function(n){var e=function(e){return function(){return W(e,(function(e){return function(n,t,e,r,o){return Ke(r,n,t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){return o.clearBeforeUpdate(e),o.selectRange(e,n.boxes,n.start,n.finish),n.boxes}))}(e.rows,e.cols,t,n,o)})).fold((function(){return Ge(t,o.firstSelectedSelector,o.lastSelectedSelector).map((function(n){var e=cm(g)||m.isForward(g)?sf.after:sf.before
return u.setRelativeSelection(sf.on(n.first,0),e(n.table)),o.clear(t),rs(f.none(),!0)}))}),(function(n){return f.some(rs(f.none(),!0))}))}}
return cm(g)&&p?e([mm(1,0)]):im(g)&&p?e([mm(-1,0)]):m.isBackward(g)&&p?e([mm(0,-1),mm(-1,0)]):m.isForward(g)&&p?e([mm(0,1),mm(1,0)]):am(g)&&!1===p?i:f.none}))()},keyup:function(n,r,u,i,c){return $e(t,o.selectedSelector).fold((function(){var a=n.raw,l=a.which
return!1===(!0===a.shiftKey)?f.none():am(l)?function(n,t,e,r,o,u,i){return Bn(e,o)&&r===u?f.none():At(e,"td,th",t).bind((function(e){return At(o,"td,th",t).bind((function(r){return cs(n,t,e,r,i)}))}))}(t,e,r,u,i,c,o.selectRange):f.none()}),f.none)}}},gm=function(n,t,e){var r=function(t){Mt(t,n.selected),Mt(t,n.firstSelected),Mt(t,n.lastSelected)},o=function(t){Bt(t,n.selected,"1")},u=function(n){i(n),e()},i=function(t){var e=xt(t,n.selectedSelector)
D(e,r)}
return{clearBeforeUpdate:i,clear:u,selectRange:function(e,r,i,c){u(e),D(r,o),Bt(i,n.firstSelected,"1"),Bt(c,n.lastSelected,"1"),t(r,i,c)},selectedSelector:n.selectedSelector,firstSelectedSelector:n.firstSelectedSelector,lastSelectedSelector:n.lastSelectedSelector}},pm=function(n,t,e){var r=se.fromTable(n)
return $c(r,t).map((function(n){var t=Wc(r,e,!1)
return{upOrLeftCells:function(n,t,e){var r=n.slice(0,t[t.length-1].row+1),o=Lc(r,e)
return M(o,(function(n){var e=n.cells.slice(0,t[t.length-1].column+1)
return O(e,(function(n){return n.element}))}))}(t,n,e),downOrRightCells:function(n,t,e){var r=n.slice(t[0].row+t[0].rowspan-1,n.length),o=Lc(r,e)
return M(o,(function(n){var e=n.cells.slice(t[0].column+t[0].colspan-1,n.cells.length)
return O(e,(function(n){return n.element}))}))}(t,n,e)}}))},vm=function(n){return!1===ni(Dn.fromDom(n.target),"ephox-snooker-resizer-bar")}
function hm(t,e,r){var o=gm(Pr,(function(e,o,u){r.targets().each((function(r){ee(o).each((function(i){var c=Ui(t),a=Sr(n,Dn.fromDom(t.getDoc()),c),l=pm(i,r,a);(function(n,t,e,r,o){n.fire("TableSelectionChange",{cells:t,start:e,finish:r,otherCells:o})})(t,e,o,u,l)}))}))}),(function(){return function(n){n.fire("TableSelectionClear")}(t)}))
return t.on("init",(function(r){var u=t.getWin(),i=Gi(t),c=Yi(t),a=function(n,t,e,r){var o=em(sm(n),t,e,r)
return{clearstate:o.clearstate,mousedown:o.mousedown,mouseover:o.mouseover,mouseup:o.mouseup}}(u,i,c,o),l=dm(u,i,c,o),f=function(n,t,e,r){var o=sm(n)
return function(n,u){r.clearBeforeUpdate(t),Ue(n,u,e).each((function(n){var e=n.boxes.getOr([])
r.selectRange(t,e,n.start,n.finish),o.selectContents(u),o.collapseSelection()}))}}(u,i,c,o)
t.on("TableSelectorChange",(function(n){return f(n.start,n.finish)}))
var s,m,d=function(n,e){(function(n){return!0===n.raw.shiftKey})(n)&&(e.kill&&n.kill(),e.selection.each((function(n){var e=df.relative(n.start,n.finish),r=Cf(u,e)
t.selection.setRng(r)})))},g=function(n){return 0===n.button},p=(s=ec(Dn.fromDom(i)),m=ec(0),{touchEnd:function(n){var t=Dn.fromDom(n.target)
if("td"===Kn(t)||"th"===Kn(t)){var e=s.get(),r=m.get()
Bn(e,t)&&n.timeStamp-r<300&&(n.preventDefault(),f(t,t))}s.set(t),m.set(n.timeStamp)}})
t.on("dragstart",(function(n){a.clearstate()})),t.on("mousedown",(function(n){g(n)&&vm(n)&&a.mousedown(Xu(n))})),t.on("mouseover",(function(n){var t;(void 0===(t=n).buttons||Xl.browser.isEdge()&&0===t.buttons||0!=(1&t.buttons))&&vm(n)&&a.mouseover(Xu(n))})),t.on("mouseup",(function(n){g(n)&&vm(n)&&a.mouseup(Xu(n))})),t.on("touchend",p.touchEnd),t.on("keyup",(function(n){var e=Xu(n)
if(e.raw.shiftKey&&am(e.raw.which)){var r=t.selection.getRng(),o=Dn.fromDom(r.startContainer),u=Dn.fromDom(r.endContainer)
l.keyup(e,o,r.startOffset,u,r.endOffset).each((function(n){d(e,n)}))}})),t.on("keydown",(function(n){var r=Xu(n)
e().each((function(n){return n.hideBars()}))
var o=t.selection.getRng(),u=Dn.fromDom(o.startContainer),i=Dn.fromDom(o.endContainer),c=Zr(lm,fm)(Dn.fromDom(t.selection.getStart()))
l.keydown(r,u,o.startOffset,i,o.endOffset,c).each((function(n){d(r,n)})),e().each((function(n){return n.showBars()}))})),t.on("NodeChange",(function(){var e=t.selection,r=Dn.fromDom(e.getStart()),u=Dn.fromDom(e.getEnd())
qe(ee,[r,u]).fold((function(){return o.clear(i)}),n)}))})),{clear:o.clear}}var bm=function(n,t){var e=ec(f.none()),r=ec([]),o=function(){return il(tc(n)).bind((function(n){var e=ee(n)
return e.map((function(e){return"caption"===Kn(n)?kr(n):Mr(t,e,n)}))}))},u=function(){e.set(H(o)()),D(r.get(),(function(n){return n()}))},i=function(n,t){var o=function(){return e.get().fold((function(){n.setDisabled(!0)}),(function(e){n.setDisabled(t(e))}))}
return o(),r.set(r.get().concat([o])),function(){r.set(A(r.get(),(function(n){return n!==o})))}}
return n.on("NodeChange ExecCommand TableSelectorChange",u),{onSetupTable:function(n){return i(n,(function(n){return!1}))},onSetupCellOrRow:function(n){return i(n,(function(n){return"caption"===Kn(n.element)}))},onSetupPasteable:function(n){return function(t){return i(t,(function(t){return"caption"===Kn(t.element)||n().isNone()}))}},onSetupMergeable:function(n){return i(n,(function(n){return n.mergable.isNone()}))},onSetupUnmergeable:function(n){return i(n,(function(n){return n.unmergable.isNone()}))},resetTargets:u,targets:function(){return e.get()}}}
function wm(n){var t=function(n,t,e){return{get:function(){return Xe(n(),e).fold((function(){return t().map(er).getOrThunk(nr)}),(function(n){return tr(n)}))}}}((function(){return Gi(n)}),(function(){return il(tc(n))}),Pr.selectedSelector),e=bm(n,t),r=bc(n),o=hm(n,r.lazyResize,e),u=ll(n,r.lazyWire,t),i=function(){var n=ec(f.none()),t=ec(f.none()),e=function(n){n.set(f.none())}
return{getRows:n.get,setRows:function(r){n.set(r),e(t)},clearRows:function(){return e(n)},getColumns:t.get,setColumns:function(r){t.set(r),e(n)},clearColumns:function(){return e(t)}}}()
return ef(n,u,o,t,i),rf(n,u,t),Nr(n,t,u,o),function(n,t,e){var r=function(t){return function(){return n.execCommand(t)}},o=function(t){n.execCommand("mceInsertTable",!1,{rows:t.numRows,columns:t.numColumns})},u={text:"Table properties",onSetup:t.onSetupTable,onAction:r("mceTableProps")},i={text:"Delete table",icon:"table-delete-table",onSetup:t.onSetupTable,onAction:r("mceTableDelete")}
n.ui.registry.addMenuItem("tableinsertrowbefore",{text:"Insert row before",icon:"table-insert-row-above",onAction:r("mceTableInsertRowBefore"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertrowafter",{text:"Insert row after",icon:"table-insert-row-after",onAction:r("mceTableInsertRowAfter"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeleterow",{text:"Delete row",icon:"table-delete-row",onAction:r("mceTableDeleteRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablerowprops",{text:"Row properties",icon:"table-row-properties",onAction:r("mceTableRowProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutrow",{text:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopyrow",{text:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepasterowbefore",{text:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tablepasterowafter",{text:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addMenuItem("tableinsertcolumnbefore",{text:"Insert column before",icon:"table-insert-column-before",onAction:r("mceTableInsertColBefore"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tableinsertcolumnafter",{text:"Insert column after",icon:"table-insert-column-after",onAction:r("mceTableInsertColAfter"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tabledeletecolumn",{text:"Delete column",icon:"table-delete-column",onAction:r("mceTableDeleteCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecutcolumn",{text:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablecopycolumn",{text:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablepastecolumnbefore",{text:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addMenuItem("tablepastecolumnafter",{text:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addMenuItem("tablecellprops",{text:"Cell properties",icon:"table-cell-properties",onAction:r("mceTableCellProps"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addMenuItem("tablemergecells",{text:"Merge cells",icon:"table-merge-cells",onAction:r("mceTableMergeCells"),onSetup:t.onSetupMergeable}),n.ui.registry.addMenuItem("tablesplitcells",{text:"Split cell",icon:"table-split-cells",onAction:r("mceTableSplitCells"),onSetup:t.onSetupUnmergeable}),!1===function(n){return n.getParam("table_grid",!0,"boolean")}(n)?n.ui.registry.addMenuItem("inserttable",{text:"Table",icon:"table",onAction:r("mceInsertTable")}):n.ui.registry.addNestedMenuItem("inserttable",{text:"Table",icon:"table",getSubmenuItems:function(){return[{type:"fancymenuitem",fancytype:"inserttable",onAction:o}]}}),n.ui.registry.addMenuItem("inserttabledialog",{text:"Insert table",icon:"table",onAction:r("mceInsertTable")}),n.ui.registry.addMenuItem("tableprops",u),n.ui.registry.addMenuItem("deletetable",i),n.ui.registry.addNestedMenuItem("row",{type:"nestedmenuitem",text:"Row",getSubmenuItems:function(){return"tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter"}}),n.ui.registry.addNestedMenuItem("column",{type:"nestedmenuitem",text:"Column",getSubmenuItems:function(){return"tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter"}}),n.ui.registry.addNestedMenuItem("cell",{type:"nestedmenuitem",text:"Cell",getSubmenuItems:function(){return"tablecellprops tablemergecells tablesplitcells"}}),n.ui.registry.addContextMenu("table",{update:function(){return t.resetTargets(),t.targets().fold((function(){return""}),(function(n){return"caption"===Kn(n.element)?"tableprops deletetable":"cell row column | advtablesort | tableprops deletetable"}))}})}(n,e,i),function(n,t,e){n.ui.registry.addMenuButton("table",{tooltip:"Table",icon:"table",fetch:function(n){return n("inserttable | cell row column | advtablesort | tableprops deletetable")}})
var r=function(t){return function(){return n.execCommand(t)}}
n.ui.registry.addButton("tableprops",{tooltip:"Table properties",onAction:r("mceTableProps"),icon:"table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tabledelete",{tooltip:"Delete table",onAction:r("mceTableDelete"),icon:"table-delete-table",onSetup:t.onSetupTable}),n.ui.registry.addButton("tablecellprops",{tooltip:"Cell properties",onAction:r("mceTableCellProps"),icon:"table-cell-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablemergecells",{tooltip:"Merge cells",onAction:r("mceTableMergeCells"),icon:"table-merge-cells",onSetup:t.onSetupMergeable}),n.ui.registry.addButton("tablesplitcells",{tooltip:"Split cell",onAction:r("mceTableSplitCells"),icon:"table-split-cells",onSetup:t.onSetupUnmergeable}),n.ui.registry.addButton("tableinsertrowbefore",{tooltip:"Insert row before",onAction:r("mceTableInsertRowBefore"),icon:"table-insert-row-above",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertrowafter",{tooltip:"Insert row after",onAction:r("mceTableInsertRowAfter"),icon:"table-insert-row-after",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tabledeleterow",{tooltip:"Delete row",onAction:r("mceTableDeleteRow"),icon:"table-delete-row",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablerowprops",{tooltip:"Row properties",onAction:r("mceTableRowProps"),icon:"table-row-properties",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolbefore",{tooltip:"Insert column before",onAction:r("mceTableInsertColBefore"),icon:"table-insert-column-before",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tableinsertcolafter",{tooltip:"Insert column after",onAction:r("mceTableInsertColAfter"),icon:"table-insert-column-after",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tabledeletecol",{tooltip:"Delete column",onAction:r("mceTableDeleteCol"),icon:"table-delete-column",onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecutrow",{tooltip:"Cut row",icon:"cut-row",onAction:r("mceTableCutRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecopyrow",{tooltip:"Copy row",icon:"duplicate-row",onAction:r("mceTableCopyRow"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablepasterowbefore",{tooltip:"Paste row before",icon:"paste-row-before",onAction:r("mceTablePasteRowBefore"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablepasterowafter",{tooltip:"Paste row after",icon:"paste-row-after",onAction:r("mceTablePasteRowAfter"),onSetup:t.onSetupPasteable(e.getRows)}),n.ui.registry.addButton("tablecutcol",{tooltip:"Cut column",icon:"cut-column",onAction:r("mceTableCutCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablecopycol",{tooltip:"Copy column",icon:"duplicate-column",onAction:r("mceTableCopyCol"),onSetup:t.onSetupCellOrRow}),n.ui.registry.addButton("tablepastecolbefore",{tooltip:"Paste column before",icon:"paste-column-before",onAction:r("mceTablePasteColBefore"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addButton("tablepastecolafter",{tooltip:"Paste column after",icon:"paste-column-after",onAction:r("mceTablePasteColAfter"),onSetup:t.onSetupPasteable(e.getColumns)}),n.ui.registry.addButton("tableinsertdialog",{tooltip:"Insert table",onAction:r("mceInsertTable"),icon:"table"})}(n,e,i),function(n){var t=function(n){return n.getParam("table_toolbar","tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol")}(n)
t.length>0&&n.ui.registry.addContextToolbar("table",{predicate:function(t){return n.dom.is(t,"table")&&n.getBody().contains(t)},items:t,scope:"node",position:"node"})}(n),n.on("PreInit",(function(){n.serializer.addTempAttr(Pr.firstSelected),n.serializer.addTempAttr(Pr.lastSelected),function(n){n.formatter.register(of)}(n)})),function(n){return n.getParam("table_tab_navigation",!0,"boolean")}(n)&&n.on("keydown",(function(t){(function(n,t,e){if(n.keyCode===Jf.TAB){var r=Gi(t),o=function(n){var t=Kn(n)
return Bn(n,r)||S(es,t)},u=t.selection.getRng()
if(u.collapsed){var i=Dn.fromDom(u.startContainer)
Zt(i,o).each((function(r){n.preventDefault(),(n.shiftKey?Zf:Qf)(t,o,r,e).each((function(n){t.selection.setRng(n)}))}))}}})(t,n,u)})),n.on("remove",(function(){r.destroy()})),function(n,t,e,r){return{insertTable:bl(n),setClipboardRows:hl(t.setRows),getClipboardRows:vl(t.getRows),setClipboardCols:hl(t.setColumns),getClipboardCols:vl(t.getColumns),resizeHandler:e,selectionTargets:r}}(n,i,r,e)}rr.add("table",wm)})()

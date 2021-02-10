(function(){"use strict"
var e,n,t,r,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(){},u=function(e){return function(){return e}},a=function(e){return function(n){return!e(n)}},s=u(!1),c=u(!0),f=function(){return d},d=function(){var e=function(e){return e.isNone()},n=function(e){return e()},t=function(e){return e}
return{fold:function(e,n){return e()},is:s,isSome:s,isNone:c,getOr:t,getOrThunk:n,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(void 0),or:t,orThunk:n,map:f,each:i,bind:f,exists:s,forall:c,filter:f,equals:e,equals_:e,toArray:function(){return[]},toString:u("none()")}}(),l=function(e){var n=u(e),t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:c,isNone:s,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return l(n(e))},each:function(n){n(e)},bind:r,exists:r,forall:r,filter:function(n){return n(e)?o:d},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(s,(function(n){return t(e,n)}))}}
return o},m={some:l,none:f,from:function(e){return null==e?d:l(e)}},p=function(e){return function(n){return r=typeof(t=n),(null===t?"null":"object"===r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===e
var t,r}},g=function(e){return function(n){return typeof n===e}},v=p("string"),h=p("array"),y=g("boolean"),S=g("function"),b=g("number"),C=Array.prototype.slice,O=Array.prototype.push,N=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o]
r[o]=n(i,o)}return r},L=function(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t)}},T=function(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r]
n(i,r)&&t.push(i)}return t},D=function(e,n,t){return L(e,(function(e){t=n(t,e)})),t},w=function(e,n,t){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(n(i,r))return m.some(i)
if(t(i,r))break}return m.none()},k=function(e,n){return w(e,n,s)},x=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!h(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e)
O.apply(n,e[t])}return n}(N(e,n))},A=function(e){var n=C.call(e,0)
return n.reverse(),n},E=function(e){return 0===e.length?m.none():m.some(e[0])},P=function(e){return 0===e.length?m.none():m.some(e[e.length-1])},B=function(){return(B=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])
return e}).apply(this,arguments)},I=function(){return R(0,0)},R=function(e,n){return{major:e,minor:n}},M={nu:R,detect:function(e,n){var t=String(n).toLowerCase()
return 0===e.length?I():function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t]
if(r.test(n))return r}}(e,n)
if(!t)return{major:0,minor:0}
var r=function(e){return Number(n.replace(t,"$"+e))}
return R(r(1),r(2))}(e,t)},unknown:I},U=function(e,n){var t=String(n).toLowerCase()
return k(e,(function(e){return e.search(t)}))},_=function(e,n){return U(e,n).map((function(e){var t=M.detect(e.versionRegexes,n)
return{current:e.name,version:t}}))},F=function(e,n){return U(e,n).map((function(e){var t=M.detect(e.versionRegexes,n)
return{current:e.name,version:t}}))},H=function(e,n){return-1!==e.indexOf(n)},$=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,j=function(e){return function(n){return H(n,e)}},q=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return H(e,"edge/")&&H(e,"chrome")&&H(e,"safari")&&H(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,$],search:function(e){return H(e,"chrome")&&!H(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return H(e,"msie")||H(e,"trident")}},{name:"Opera",versionRegexes:[$,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:j("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:j("firefox")},{name:"Safari",versionRegexes:[$,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(H(e,"safari")||H(e,"mobile/"))&&H(e,"applewebkit")}}],K=[{name:"Windows",search:j("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return H(e,"iphone")||H(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:j("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:j("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:j("linux"),versionRegexes:[]},{name:"Solaris",search:j("sunos"),versionRegexes:[]},{name:"FreeBSD",search:j("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:j("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],V={browsers:u(q),oses:u(K)},W="Edge",Q="Chrome",X="Opera",z="Firefox",Y="Safari",G=function(e){var n=e.current,t=e.version,r=function(e){return function(){return n===e}}
return{current:n,version:t,isEdge:r(W),isChrome:r(Q),isIE:r("IE"),isOpera:r(X),isFirefox:r(z),isSafari:r(Y)}},J={unknown:function(){return G({current:void 0,version:M.unknown()})},nu:G,edge:u(W),chrome:u(Q),ie:u("IE"),opera:u(X),firefox:u(z),safari:u(Y)},Z="Windows",ee="Android",ne="Linux",te="Solaris",re="FreeBSD",oe="ChromeOS",ie=function(e){var n=e.current,t=e.version,r=function(e){return function(){return n===e}}
return{current:n,version:t,isWindows:r(Z),isiOS:r("iOS"),isAndroid:r(ee),isOSX:r("OSX"),isLinux:r(ne),isSolaris:r(te),isFreeBSD:r(re),isChromeOS:r(oe)}},ue={unknown:function(){return ie({current:void 0,version:M.unknown()})},nu:ie,windows:u(Z),ios:u("iOS"),android:u(ee),linux:u(ne),osx:u("OSX"),solaris:u(te),freebsd:u(re),chromeos:u(oe)},ae=function(e,n){var t=V.browsers(),r=V.oses(),o=_(t,e).fold(J.unknown,J.nu),i=F(r,e).fold(ue.unknown,ue.nu),a=function(e,n,t,r){var o=e.isiOS()&&!0===/ipad/i.test(t),i=e.isiOS()&&!o,a=e.isiOS()||e.isAndroid(),s=a||r("(pointer:coarse)"),c=o||!i&&a&&r("(min-device-width:768px)"),f=i||a&&!c,d=n.isSafari()&&e.isiOS()&&!1===/safari/i.test(t),l=!f&&!c&&!d
return{isiPad:u(o),isiPhone:u(i),isTablet:u(c),isPhone:u(f),isTouch:u(s),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:u(d),isDesktop:u(l)}}(i,o,e,n)
return{browser:o,os:i,deviceType:a}},se=function(e){return window.matchMedia(e).matches},ce=(e=function(){return ae(navigator.userAgent,se)},t=!1,function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return t||(t=!0,n=e.apply(null,r)),n}),fe=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},de={fromHtml:function(e,n){var t=(n||document).createElement("div")
if(t.innerHTML=e,!t.hasChildNodes()||t.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return fe(t.childNodes[0])},fromTag:function(e,n){var t=(n||document).createElement(e)
return fe(t)},fromText:function(e,n){var t=(n||document).createTextNode(e)
return fe(t)},fromDom:fe,fromPoint:function(e,n,t){return m.from(e.dom.elementFromPoint(n,t)).map(fe)}},le=function(e,n){return e.dom===n.dom},me=function(e,n){return t=e.dom,r=n.dom,function(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)}(t,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var t,r},pe=function(e,n){return ce().browser.isIE()?me(e,n):function(e,n){var t=e.dom,r=n.dom
return t!==r&&t.contains(r)}(e,n)},ge=function(e,n){var t=e.dom
if(1!==t.nodeType)return!1
var r=t
if(void 0!==r.matches)return r.matches(n)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(n)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(n)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(n)
throw new Error("Browser lacks native selectors")},ve=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),he=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),ye=tinymce.util.Tools.resolve("tinymce.util.VK"),Se=Object.keys,be=function(e,n){for(var t=Se(e),r=0,o=t.length;r<o;r++){var i=t[r]
n(e[i],i)}},Ce=function(e,n){var t={}
return function(e,n,t,r){be(e,(function(e,o){(n(e,o)?t:r)(e,o)}))}(e,n,function(e){return function(n,t){e[t]=n}}(t),i),t},Oe=("undefined"!=typeof window?window:Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Ne=(r=1,function(e){return function(e){return e.dom.nodeType}(e)===r}),Le=function(e,n){var t=e.dom
be(n,(function(e,n){(function(e,n,t){if(!(v(t)||y(t)||b(t)))throw console.error("Invalid call to Attribute.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(n,t+"")})(t,n,e)}))},Te=function(e){return D(e.dom.attributes,(function(e,n){return e[n.name]=n.value,e}),{})},De=function(e){return m.from(e.dom.parentNode).map(de.fromDom)},we=function(e){return N(e.dom.childNodes,de.fromDom)},ke=function(e,n){var t=e.dom.childNodes
return m.from(t[n]).map(de.fromDom)},xe=function(e){return ke(e,0)},Ae=function(e){return ke(e,e.dom.childNodes.length-1)},Ee=function(e,n){De(e).each((function(t){t.dom.insertBefore(n.dom,e.dom)}))},Pe=function(e,n){e.dom.appendChild(n.dom)},Be=function(e,n){L(n,(function(n){Pe(e,n)}))},Ie=function(e){var n=e.dom
null!==n.parentNode&&n.parentNode.removeChild(n)},Re=function(e){return function(e,n){return de.fromDom(e.dom.cloneNode(n))}(e,!0)},Me=function(e,n){var t=function(e,n){var t=de.fromTag(n),r=Te(e)
return Le(t,r),t}(e,n)
Ee(e,t)
var r=we(e)
return Be(t,r),Ie(e),t},Ue=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),_e=tinymce.util.Tools.resolve("tinymce.util.Tools"),Fe=function(e){return function(n){return n&&n.nodeName.toLowerCase()===e}},He=function(e){return function(n){return n&&e.test(n.nodeName)}},$e=function(e){return e&&3===e.nodeType},je=He(/^(OL|UL|DL)$/),qe=He(/^(OL|UL)$/),Ke=Fe("ol"),Ve=He(/^(LI|DT|DD)$/),We=He(/^(DT|DD)$/),Qe=He(/^(TH|TD)$/),Xe=Fe("br"),ze=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},Ye=function(e,n){return e&&e.nodeName in n},Ge=function(e,n,t){var r=e.isEmpty(n)
return!(t&&e.select("span[data-mce-type=bookmark]",n).length>0)&&r},Je=function(e,n){return e.isChildOf(n,e.getRoot())},Ze=function(e,n){var t,r,o,i=e.dom,u=e.schema.getBlockElements(),a=i.createFragment(),s=function(e){var n=e.getParam("forced_root_block","p")
return!1===n?"":!0===n?"p":n}(e)
if(s&&((r=i.create(s)).tagName===s.toUpperCase()&&i.setAttribs(r,function(e){return e.getParam("forced_root_block_attrs",{})}(e)),Ye(n.firstChild,u)||a.appendChild(r)),n)for(;t=n.firstChild;){var c=t.nodeName
o||"SPAN"===c&&"bookmark"===t.getAttribute("data-mce-type")||(o=!0),Ye(t,u)?(a.appendChild(t),r=null):s?(r||(r=i.create(s),a.appendChild(r)),r.appendChild(t)):a.appendChild(t)}return s?o||r.appendChild(i.create("br",{"data-mce-bogus":"1"})):a.appendChild(i.create("br")),a},en=Ue.DOM,nn=function(e,n){ge(n,"dd")?Me(n,"dt"):ge(n,"dt")&&De(n).each((function(t){return function(e,n,t){var r=en.select('span[data-mce-type="bookmark"]',n),o=Ze(e,t),i=en.createRng()
i.setStartAfter(t),i.setEndAfter(n)
for(var u,a=i.extractContents(),s=a.firstChild;s;s=s.firstChild)if("LI"===s.nodeName&&e.dom.isEmpty(s)){en.remove(s)
break}e.dom.isEmpty(a)||en.insertAfter(a,n),en.insertAfter(o,n),Ge(e.dom,t.parentNode)&&(u=t.parentNode,_e.each(r,(function(e){u.parentNode.insertBefore(e,t.parentNode)})),en.remove(u)),en.remove(t),Ge(e.dom,n)&&en.remove(n)}(e,t.dom,n.dom)}))},tn=function(e){ge(e,"dt")&&Me(e,"dd")},rn=function(e,n){if($e(e))return{container:e,offset:n}
var t=ve.getNode(e,n)
return $e(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&$e(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&$e(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}},on=function(e){var n=e.cloneRange(),t=rn(e.startContainer,e.startOffset)
n.setStart(t.container,t.offset)
var r=rn(e.endContainer,e.endOffset)
return n.setEnd(r.container,r.offset),n},un=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),an=function(e,n){var t=n||e.selection.getStart(!0)
return e.dom.getParent(t,"OL,UL,DL",fn(e,t))},sn=function(e){var n=an(e),t=e.selection.getSelectedBlocks()
return function(e,n){return e&&1===n.length&&n[0]===e}(n,t)?function(e){return _e.grep(e.querySelectorAll("ol,ul,dl"),(function(e){return je(e)}))}(n):_e.grep(t,(function(e){return je(e)&&n!==e}))},cn=function(e){var n=e.selection.getSelectedBlocks()
return _e.grep(function(e,n){var t=_e.map(n,(function(n){return e.dom.getParent(n,"li,dd,dt",fn(e,n))||n}))
return un.unique(t)}(e,n),(function(e){return Ve(e)}))},fn=function(e,n){var t=e.dom.getParents(n,"TD,TH")
return t.length>0?t[0]:e.getBody()},dn=function(e,n){var t=e.dom.getParents(n,"ol,ul",fn(e,n))
return P(t)},ln=function(e){var n=function(e){var n=dn(e,e.selection.getStart()),t=T(e.selection.getSelectedBlocks(),qe)
return n.toArray().concat(t)}(e)
return mn(e,n)},mn=function(e,n){var t=N(n,(function(n){return dn(e,n).getOr(n)}))
return un.unique(t)},pn=function(e,n,t){return e.isSome()&&n.isSome()?m.some(t(e.getOrDie(),n.getOrDie())):m.none()},gn=function(e,n,t){return e.fire("ListMutation",{action:n,element:t})},vn=function(e,n,t){if(!v(t))throw console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);(function(e){return void 0!==e.style&&S(e.style.getPropertyValue)})(e)&&e.style.setProperty(n,t)},hn=function(e,n){Pe(e.item,n.list)},yn=function(e,n){var t={list:de.fromTag(n,e),item:de.fromTag("li",e)}
return Pe(t.list,t.item),t},Sn=function(e,n,t){var r=n.slice(0,t.depth)
return P(r).each((function(n){(function(e,n){Pe(e.list,n),e.item=n})(n,function(e,n,t){var r=de.fromTag("li",e)
return Le(r,n),Be(r,t),r}(e,t.itemAttributes,t.content)),function(e,n){Oe(e.list)!==n.listType&&(e.list=Me(e.list,n.listType)),Le(e.list,n.listAttributes)}(n,t)})),r},bn=function(e,n,t){var r,o=function(e,n,t){for(var r=[],o=0;o<t;o++)r.push(yn(e,n.listType))
return r}(e,t,t.depth-n.length)
return function(e){for(var n=1;n<e.length;n++)hn(e[n-1],e[n])}(o),function(e,n){for(var t=0;t<e.length-1;t++)r=e[t].item,o="list-style-type",i="none",u=void 0,u=r.dom,vn(u,o,i)
var r,o,i,u
P(e).each((function(e){Le(e.list,n.listAttributes),Le(e.item,n.itemAttributes),Be(e.item,n.content)}))}(o,t),r=o,pn(P(n),E(r),hn),n.concat(o)},Cn=function(e){return ge(e,"OL,UL")},On=function(e){return xe(e).map(Cn).getOr(!1)},Nn=function(e){return e.depth>0},Ln=function(e){return e.isSelected},Tn=function(e){var n=we(e),t=Ae(e).map(Cn).getOr(!1)?n.slice(0,-1):n
return N(t,Re)},Dn=function(e){return L(e,(function(n,t){(function(e,n){var t=e[n].depth,r=function(e){return e.depth===t&&!e.dirty},o=function(e){return e.depth<t}
return w(A(e.slice(0,n)),r,o).orThunk((function(){return w(e.slice(n+1),r,o)}))})(e,t).fold((function(){n.dirty&&function(e){e.listAttributes=Ce(e.listAttributes,(function(e,n){return"start"!==n}))}(n)}),(function(e){return r=e,(t=n).listType=r.listType,void(t.listAttributes=B({},r.listAttributes))
var t,r}))})),e},wn=function(e,n,t,r){return xe(r).filter(Cn).fold((function(){n.each((function(e){le(e.start,r)&&t.set(!0)}))
var o=function(e,n,t){return De(e).filter(Ne).map((function(r){return{depth:n,dirty:!1,isSelected:t,content:Tn(e),itemAttributes:Te(e),listAttributes:Te(r),listType:Oe(r)}}))}(r,e,t.get())
n.each((function(e){le(e.end,r)&&t.set(!1)}))
var i=Ae(r).filter(Cn).map((function(r){return kn(e,n,t,r)})).getOr([])
return o.toArray().concat(i)}),(function(r){return kn(e,n,t,r)}))},kn=function(e,n,t,r){return x(we(r),(function(r){return(Cn(r)?kn:wn)(e+1,n,t,r)}))},xn=function(e,n){var t=Dn(n)
return N(t,(function(n){var t,r,o,i=(t=n.content,o=(r||document).createDocumentFragment(),L(t,(function(e){o.appendChild(e.dom)})),de.fromDom(o))
return de.fromDom(Ze(e,i.dom))}))},An=function(e,n){var t=Dn(n)
return function(e,n){var t=D(n,(function(n,t){return t.depth>n.length?bn(e,n,t):Sn(e,n,t)}),[])
return E(t).map((function(e){return e.list}))}(e.contentDocument,t).toArray()},En=function(e,n,t){var r=function(e,n){var t,r=(t=!1,{get:function(){return t},set:function(e){t=e}})
return N(e,(function(e){return{sourceList:e,entries:kn(0,n,r,e)}}))}(n,function(e){var n=N(cn(e),de.fromDom)
return pn(k(n,a(On)),k(A(n),a(On)),(function(e,n){return{start:e,end:n}}))}(e))
L(r,(function(n){(function(e,n){L(T(e,Ln),(function(e){return function(e,n){switch(e){case"Indent":n.depth++
break
case"Outdent":n.depth--
break
case"Flatten":n.depth=0}n.dirty=!0}(n,e)}))})(n.entries,t)
var r,o=function(e,n){return x(function(e,n){if(0===e.length)return[]
for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var a=e[i],s=n(a)
s!==t&&(r.push(o),o=[]),t=s,o.push(a)}return 0!==o.length&&r.push(o),r}(n,Nn),(function(n){return E(n).map(Nn).getOr(!1)?An(e,n):xn(e,n)}))}(e,n.entries)
L(o,(function(n){gn(e,"Indent"===t?"IndentList":"OutdentList",n.dom)})),r=n.sourceList,L(o,(function(e){Ee(r,e)})),Ie(n.sourceList)}))},Pn=function(e,n){var t=N(ln(e),de.fromDom),r=N(function(e){return T(cn(e),We)}(e),de.fromDom),o=!1
if(t.length||r.length){var i=e.selection.getBookmark()
En(e,t,n),function(e,n,t){L(t,"Indent"===n?tn:function(n){return nn(e,n)})}(e,n,r),e.selection.moveToBookmark(i),e.selection.setRng(on(e.selection.getRng())),e.nodeChanged(),o=!0}return o},Bn=function(e){return Pn(e,"Indent")},In=function(e){return Pn(e,"Outdent")},Rn=function(e){return Pn(e,"Flatten")},Mn=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),Un=Ue.DOM,_n=function(e){var n={},t=function(t){var r,o,i
o=e[t?"startContainer":"endContainer"],i=e[t?"startOffset":"endOffset"],1===o.nodeType&&(r=Un.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(i=Math.min(i,o.childNodes.length-1),t?o.insertBefore(r,o.childNodes[i]):Un.insertAfter(r,o.childNodes[i])):o.appendChild(r),o=r,i=0),n[t?"startContainer":"endContainer"]=o,n[t?"startOffset":"endOffset"]=i}
return t(!0),e.collapsed||t(),n},Fn=function(e){function n(n){var t,r,o
t=o=e[n?"startContainer":"endContainer"],r=e[n?"startOffset":"endOffset"],t&&(1===t.nodeType&&(r=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t
1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(t),t=t.parentNode,Un.remove(o),!t.hasChildNodes()&&Un.isBlock(t)&&t.appendChild(Un.create("br"))),e[n?"startContainer":"endContainer"]=t,e[n?"startOffset":"endOffset"]=r)}n(!0),n()
var t=Un.createRng()
return t.setStart(e.startContainer,e.startOffset),e.endContainer&&t.setEnd(e.endContainer,e.endOffset),on(t)},Hn=function(e){switch(e){case"UL":return"ToggleUlList"
case"OL":return"ToggleOlList"
case"DL":return"ToggleDLList"}},$n=function(e){return/\btox\-/.test(e.className)},jn=function(e,n,t){var r=function(e){var r=w(e.parents,je,Qe).filter((function(e){return e.nodeName===n&&!$n(e)})).isSome()
t(r)},o=e.dom.getParents(e.selection.getNode())
return r({parents:o}),e.on("NodeChange",r),function(){return e.off("NodeChange",r)}},qn=function(e,n){_e.each(n,(function(n,t){e.setAttribute(t,n)}))},Kn=function(e,n,t){(function(e,n,t){var r=t["list-style-type"]?t["list-style-type"]:null
e.setStyle(n,"list-style-type",r)})(e,n,t),function(e,n,t){qn(n,t["list-attributes"]),_e.each(e.select("li",n),(function(e){qn(e,t["list-item-attributes"])}))}(e,n,t)},Vn=function(e,n,t,r){var o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"]
for(1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&Xe(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(ze(e,o))return o
if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o
o=o.parentNode}return o},Wn=function(e,n,t){void 0===t&&(t={})
var r=e.selection.getRng(),o="LI",i=fn(e,e.selection.getStart(!0)),u=e.dom
if("false"!==u.getContentEditable(e.selection.getNode())){"DL"===(n=n.toUpperCase())&&(o="DT")
var a=_n(r)
_e.each(function(e,n,t){for(var r,o=[],i=e.dom,u=Vn(e,n,!0,t),a=Vn(e,n,!1,t),s=[],c=u;c&&(s.push(c),c!==a);c=c.nextSibling);return _e.each(s,(function(n){if(ze(e,n))return o.push(n),void(r=null)
if(i.isBlock(n)||Xe(n))return Xe(n)&&i.remove(n),void(r=null)
var u=n.nextSibling
Mn.isBookmarkNode(n)&&(ze(e,u)||!u&&n.parentNode===t)?r=null:(r||(r=i.create("p"),n.parentNode.insertBefore(r,n),o.push(r)),r.appendChild(n))})),o}(e,r,i),(function(r){var i,a=r.previousSibling
a&&je(a)&&a.nodeName===n&&function(e,n,t){var r=e.getStyle(n,"list-style-type"),o=t?t["list-style-type"]:""
return r===(null===o?"":o)}(u,a,t)?(i=a,r=u.rename(r,o),a.appendChild(r)):(i=u.create(n),r.parentNode.insertBefore(i,r),i.appendChild(r),r=u.rename(r,o)),function(e,n,t){_e.each(t,(function(t){var r
return e.setStyle(n,((r={})[t]="",r))}))}(u,r,["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"]),Kn(u,i,t),Xn(e.dom,i)})),e.selection.setRng(Fn(a))}},Qn=function(e,n,t){return function(e,n){return e&&n&&je(e)&&e.nodeName===n.nodeName}(n,t)&&function(e,n,t){return e.getStyle(n,"list-style-type",!0)===e.getStyle(t,"list-style-type",!0)}(e,n,t)&&(r=t,n.className===r.className)
var r},Xn=function(e,n){var t,r
if(t=n.nextSibling,Qn(e,n,t)){for(;r=t.firstChild;)n.appendChild(r)
e.remove(t)}if(t=n.previousSibling,Qn(e,n,t)){for(;r=t.lastChild;)n.insertBefore(r,n.firstChild)
e.remove(t)}},zn=function(e,n,t,r,o){if(n.nodeName!==r||Yn(o)){var i=_n(e.selection.getRng(!0))
_e.each([n].concat(t),(function(n){(function(e,n,t,r){if(n.nodeName!==t){var o=e.dom.rename(n,t)
Kn(e.dom,o,r),gn(e,Hn(t),o)}else Kn(e.dom,n,r),gn(e,Hn(t),n)})(e,n,r,o)})),e.selection.setRng(Fn(i))}else Rn(e)},Yn=function(e){return"list-style-type"in e},Gn=function(e,n,t){var r=an(e),o=sn(e)
t=t||{},r&&o.length>0?zn(e,r,o,n,t):function(e,n,t,r){if(n!==e.getBody())if(n)if(n.nodeName!==t||Yn(r)||$n(n)){var o=_n(e.selection.getRng(!0))
Kn(e.dom,n,r)
var i=e.dom.rename(n,t)
Xn(e.dom,i),e.selection.setRng(Fn(o)),gn(e,Hn(t),i)}else Rn(e)
else Wn(e,t,r),gn(e,Hn(t),n)}(e,r,n,t)},Jn=Ue.DOM,Zn=function(e,n){_e.each(_e.grep(e.select("ol,ul",n)),(function(n){(function(e,n){var t,r=n.parentNode
"LI"===r.nodeName&&r.firstChild===n&&((t=r.previousSibling)&&"LI"===t.nodeName?(t.appendChild(n),Ge(e,r)&&Jn.remove(r)):Jn.setStyle(r,"listStyleType","none")),je(r)&&(t=r.previousSibling)&&"LI"===t.nodeName&&t.appendChild(n)})(e,n)}))},et=function(e,n,t,r){var o=n.startContainer,i=n.startOffset
if($e(o)&&(t?i<o.data.length:i>0))return o
var u=e.schema.getNonEmptyElements()
1===o.nodeType&&(o=ve.getNode(o,i))
var a=new he(o,r)
for(t&&function(e,n){return!!Xe(n)&&e.isBlock(n.nextSibling)&&!Xe(n.previousSibling)}(e.dom,o)&&a.next();o=a[t?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o
if(u[o.nodeName])return o
if($e(o)&&o.data.length>0)return o}},nt=function(e,n){var t=n.childNodes
return 1===t.length&&!je(t[0])&&e.isBlock(t[0])},tt=function(e,n,t){var r,o=nt(e,t)?t.firstChild:t
if(function(e,n){nt(e,n)&&e.remove(n.firstChild,!0)}(e,n),!Ge(e,n,!0))for(;r=n.firstChild;)o.appendChild(r)},rt=function(e,n,t){var r,o=n.parentNode
if(Je(e,n)&&Je(e,t)){je(t.lastChild)&&(r=t.lastChild),o===t.lastChild&&Xe(o.previousSibling)&&e.remove(o.previousSibling)
var i=t.lastChild
i&&Xe(i)&&n.hasChildNodes()&&e.remove(i),Ge(e,t,!0)&&e.$(t).empty(),tt(e,n,t),r&&t.appendChild(r)
var u=pe(de.fromDom(t),de.fromDom(n))?e.getParents(n,je,t):[]
e.remove(n),L(u,(function(n){Ge(e,n)&&n!==e.getRoot()&&e.remove(n)}))}},ot=function(e,n,t,r){var o=e.dom
if(o.isEmpty(r))(function(e,n,t){e.dom.$(t).empty(),rt(e.dom,n,t),e.selection.setCursorLocation(t)})(e,t,r)
else{var i=_n(n)
rt(o,t,r),e.selection.setRng(Fn(i))}},it=function(e,n){var t=e.dom,r=e.selection,o=r.getStart(),i=fn(e,o),u=t.getParent(r.getStart(),"LI",i)
if(u){var a=u.parentNode
if(a===e.getBody()&&Ge(t,a))return!0
var s=on(r.getRng()),c=t.getParent(et(e,s,n,i),"LI",i)
if(c&&c!==u)return e.undoManager.transact((function(){var t
n?ot(e,s,c,u):(t=u).parentNode.firstChild===t?In(e):function(e,n,t,r){var o=_n(n)
rt(e.dom,t,r)
var i=Fn(o)
e.selection.setRng(i)}(e,s,u,c)})),!0
if(!c&&!n&&0===s.startOffset&&0===s.endOffset)return e.undoManager.transact((function(){Rn(e)})),!0}return!1},ut=function(e,n){return it(e,n)||function(e,n){var t=e.dom,r=e.selection.getStart(),o=fn(e,r),i=t.getParent(r,t.isBlock,o)
if(i&&t.isEmpty(i)){var u=on(e.selection.getRng()),a=t.getParent(et(e,u,n,o),"LI",o)
if(a)return e.undoManager.transact((function(){(function(e,n,t){var r=e.getParent(n.parentNode,e.isBlock,t)
e.remove(n),r&&e.isEmpty(r)&&e.remove(r)})(t,i,o),Xn(t,a.parentNode),e.selection.select(a,!0),e.selection.collapse(n)})),!0}return!1}(e,n)},at=function(e,n){return e.selection.isCollapsed()?ut(e,n):function(e){var n=e.selection.getStart(),t=fn(e,n)
return!!(e.dom.getParent(n,"LI,DT,DD",t)||cn(e).length>0)&&(e.undoManager.transact((function(){e.execCommand("Delete"),Zn(e.dom,e.getBody())})),!0)}(e)},st=function(e){var n=e.dom,t=an(e)
Ke(t)&&e.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:n.getAttrib(t,"start")||"1"},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(t){var r=t.getData()
e.undoManager.transact((function(){n.setAttrib(an(e),"start","1"===r.start?"":r.start)})),t.close()}})},ct=function(e,n){return function(){var t=e.dom.getParent(e.selection.getStart(),"UL,OL,DL")
return t&&t.nodeName===n}},ft=function(e){(function(e){return e.getParam("lists_indent_on_tab",!0)})(e)&&function(e){e.on("keydown",(function(n){n.keyCode!==ye.TAB||ye.metaKeyPressed(n)||e.undoManager.transact((function(){(n.shiftKey?In(e):Bn(e))&&n.preventDefault()}))}))}(e),function(e){e.on("keydown",(function(n){n.keyCode===ye.BACKSPACE?at(e,!1)&&n.preventDefault():n.keyCode===ye.DELETE&&at(e,!0)&&n.preventDefault()}))}(e)}
o.add("lists",(function(e){return!1===e.hasPlugin("rtc",!0)&&(ft(e),function(e){e.on("BeforeExecCommand",(function(n){var t=n.command.toLowerCase()
"indent"===t?Bn(e):"outdent"===t&&In(e)})),e.addCommand("InsertUnorderedList",(function(n,t){Gn(e,"UL",t)})),e.addCommand("InsertOrderedList",(function(n,t){Gn(e,"OL",t)})),e.addCommand("InsertDefinitionList",(function(n,t){Gn(e,"DL",t)})),e.addCommand("RemoveList",(function(){Rn(e)})),e.addCommand("mceListProps",(function(){st(e)})),e.addQueryStateHandler("InsertUnorderedList",ct(e,"UL")),e.addQueryStateHandler("InsertOrderedList",ct(e,"OL")),e.addQueryStateHandler("InsertDefinitionList",ct(e,"DL"))}(e)),function(e){var n=function(n){return function(){return e.execCommand(n)}}
e.hasPlugin("advlist")||(e.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:n("InsertOrderedList"),onSetup:function(n){return jn(e,"OL",n.setActive)}}),e.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:n("InsertUnorderedList"),onSetup:function(n){return jn(e,"UL",n.setActive)}}))}(e),function(e){var n={text:"List properties...",icon:"ordered-list",onAction:function(){return st(e)},onSetup:function(n){return jn(e,"OL",(function(e){return n.setDisabled(!e)}))}}
e.ui.registry.addMenuItem("listprops",n),e.ui.registry.addContextMenu("lists",{update:function(n){var t=an(e,n)
return Ke(t)?["listprops"]:[]}})}(e),function(e){return{backspaceDelete:function(n){at(e,n)}}}(e)}))})()

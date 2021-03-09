(function(){"use strict"
var e,n,t,r,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(){},u=function(e){return function(){return e}},a=function(e){return function(n){return!e(n)}},s=u(!1),c=u(!0),f=function(){return d},d=function(){var e=function(e){return e.isNone()},n=function(e){return e()},t=function(e){return e}
return{fold:function(e,n){return e()},is:s,isSome:s,isNone:c,getOr:t,getOrThunk:n,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(void 0),or:t,orThunk:n,map:f,each:i,bind:f,exists:s,forall:c,filter:f,equals:e,equals_:e,toArray:function(){return[]},toString:u("none()")}}(),l=function(e){var n=u(e),t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:c,isNone:s,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return l(n(e))},each:function(n){n(e)},bind:r,exists:r,forall:r,filter:function(n){return n(e)?o:d},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(s,(function(n){return t(e,n)}))}}
return o},m={some:l,none:f,from:function(e){return null==e?d:l(e)}},p=function(e){return function(n){return r=typeof(t=n),(null===t?"null":"object"===r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===e
var t,r}},v=function(e){return function(n){return typeof n===e}},g=p("string"),h=p("array"),y=v("boolean"),S=v("function"),b=v("number"),C=Array.prototype.slice,O=Array.prototype.push,N=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o]
r[o]=n(i,o)}return r},L=function(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t)}},T=function(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r]
n(i,r)&&t.push(i)}return t},D=function(e,n,t){return L(e,(function(e){t=n(t,e)})),t},w=function(e,n,t){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(n(i,r))return m.some(i)
if(t(i,r))break}return m.none()},k=function(e,n){return w(e,n,s)},x=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!h(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e)
O.apply(n,e[t])}return n}(N(e,n))},A=function(e){var n=C.call(e,0)
return n.reverse(),n},E=function(e,n){return n>=0&&n<e.length?m.some(e[n]):m.none()},P=function(e){return E(e,0)},B=function(e){return E(e,e.length-1)},I=function(){return(I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])
return e}).apply(this,arguments)},R=function(){return M(0,0)},M=function(e,n){return{major:e,minor:n}},U={nu:M,detect:function(e,n){var t=String(n).toLowerCase()
return 0===e.length?R():function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t]
if(r.test(n))return r}}(e,n)
if(!t)return{major:0,minor:0}
var r=function(e){return Number(n.replace(t,"$"+e))}
return M(r(1),r(2))}(e,t)},unknown:R},_=function(e,n){var t=String(n).toLowerCase()
return k(e,(function(e){return e.search(t)}))},F=function(e,n){return _(e,n).map((function(e){var t=U.detect(e.versionRegexes,n)
return{current:e.name,version:t}}))},H=function(e,n){return _(e,n).map((function(e){var t=U.detect(e.versionRegexes,n)
return{current:e.name,version:t}}))},$=function(e,n){return-1!==e.indexOf(n)},j=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,q=function(e){return function(n){return $(n,e)}},K=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return $(e,"edge/")&&$(e,"chrome")&&$(e,"safari")&&$(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,j],search:function(e){return $(e,"chrome")&&!$(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return $(e,"msie")||$(e,"trident")}},{name:"Opera",versionRegexes:[j,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:q("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:q("firefox")},{name:"Safari",versionRegexes:[j,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return($(e,"safari")||$(e,"mobile/"))&&$(e,"applewebkit")}}],V=[{name:"Windows",search:q("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return $(e,"iphone")||$(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:q("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:q("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:q("linux"),versionRegexes:[]},{name:"Solaris",search:q("sunos"),versionRegexes:[]},{name:"FreeBSD",search:q("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:q("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],W={browsers:u(K),oses:u(V)},Q="Edge",X="Chrome",z="Opera",Y="Firefox",G="Safari",J=function(e){var n=e.current,t=e.version,r=function(e){return function(){return n===e}}
return{current:n,version:t,isEdge:r(Q),isChrome:r(X),isIE:r("IE"),isOpera:r(z),isFirefox:r(Y),isSafari:r(G)}},Z={unknown:function(){return J({current:void 0,version:U.unknown()})},nu:J,edge:u(Q),chrome:u(X),ie:u("IE"),opera:u(z),firefox:u(Y),safari:u(G)},ee="Windows",ne="Android",te="Linux",re="Solaris",oe="FreeBSD",ie="ChromeOS",ue=function(e){var n=e.current,t=e.version,r=function(e){return function(){return n===e}}
return{current:n,version:t,isWindows:r(ee),isiOS:r("iOS"),isAndroid:r(ne),isOSX:r("OSX"),isLinux:r(te),isSolaris:r(re),isFreeBSD:r(oe),isChromeOS:r(ie)}},ae={unknown:function(){return ue({current:void 0,version:U.unknown()})},nu:ue,windows:u(ee),ios:u("iOS"),android:u(ne),linux:u(te),osx:u("OSX"),solaris:u(re),freebsd:u(oe),chromeos:u(ie)},se=function(e,n){var t=W.browsers(),r=W.oses(),o=F(t,e).fold(Z.unknown,Z.nu),i=H(r,e).fold(ae.unknown,ae.nu),a=function(e,n,t,r){var o=e.isiOS()&&!0===/ipad/i.test(t),i=e.isiOS()&&!o,a=e.isiOS()||e.isAndroid(),s=a||r("(pointer:coarse)"),c=o||!i&&a&&r("(min-device-width:768px)"),f=i||a&&!c,d=n.isSafari()&&e.isiOS()&&!1===/safari/i.test(t),l=!f&&!c&&!d
return{isiPad:u(o),isiPhone:u(i),isTablet:u(c),isPhone:u(f),isTouch:u(s),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:u(d),isDesktop:u(l)}}(i,o,e,n)
return{browser:o,os:i,deviceType:a}},ce=function(e){return window.matchMedia(e).matches},fe=(e=function(){return se(navigator.userAgent,ce)},t=!1,function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return t||(t=!0,n=e.apply(null,r)),n}),de=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},le={fromHtml:function(e,n){var t=(n||document).createElement("div")
if(t.innerHTML=e,!t.hasChildNodes()||t.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return de(t.childNodes[0])},fromTag:function(e,n){var t=(n||document).createElement(e)
return de(t)},fromText:function(e,n){var t=(n||document).createTextNode(e)
return de(t)},fromDom:de,fromPoint:function(e,n,t){return m.from(e.dom.elementFromPoint(n,t)).map(de)}},me=function(e,n){return e.dom===n.dom},pe=function(e,n){return t=e.dom,r=n.dom,function(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)}(t,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var t,r},ve=function(e,n){return fe().browser.isIE()?pe(e,n):function(e,n){var t=e.dom,r=n.dom
return t!==r&&t.contains(r)}(e,n)},ge=function(e,n){var t=e.dom
if(1!==t.nodeType)return!1
var r=t
if(void 0!==r.matches)return r.matches(n)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(n)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(n)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(n)
throw new Error("Browser lacks native selectors")},he=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),ye=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),Se=tinymce.util.Tools.resolve("tinymce.util.VK"),be=Object.keys,Ce=function(e,n){for(var t=be(e),r=0,o=t.length;r<o;r++){var i=t[r]
n(e[i],i)}},Oe=function(e,n){var t={}
return function(e,n,t,r){Ce(e,(function(e,o){(n(e,o)?t:r)(e,o)}))}(e,n,function(e){return function(n,t){e[t]=n}}(t),i),t},Ne=("undefined"!=typeof window?window:Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Le=(r=1,function(e){return function(e){return e.dom.nodeType}(e)===r}),Te=function(e,n){var t=e.dom
Ce(n,(function(e,n){(function(e,n,t){if(!(g(t)||y(t)||b(t)))throw console.error("Invalid call to Attribute.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(n,t+"")})(t,n,e)}))},De=function(e){return D(e.dom.attributes,(function(e,n){return e[n.name]=n.value,e}),{})},we=function(e){return m.from(e.dom.parentNode).map(le.fromDom)},ke=function(e){return N(e.dom.childNodes,le.fromDom)},xe=function(e,n){var t=e.dom.childNodes
return m.from(t[n]).map(le.fromDom)},Ae=function(e){return xe(e,0)},Ee=function(e){return xe(e,e.dom.childNodes.length-1)},Pe=function(e,n){we(e).each((function(t){t.dom.insertBefore(n.dom,e.dom)}))},Be=function(e,n){e.dom.appendChild(n.dom)},Ie=function(e,n){L(n,(function(n){Be(e,n)}))},Re=function(e){var n=e.dom
null!==n.parentNode&&n.parentNode.removeChild(n)},Me=function(e){return function(e,n){return le.fromDom(e.dom.cloneNode(n))}(e,!0)},Ue=function(e,n){var t=function(e,n){var t=le.fromTag(n),r=De(e)
return Te(t,r),t}(e,n)
Pe(e,t)
var r=ke(e)
return Ie(t,r),Re(e),t},_e=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Fe=tinymce.util.Tools.resolve("tinymce.util.Tools"),He=function(e){return function(n){return n&&n.nodeName.toLowerCase()===e}},$e=function(e){return function(n){return n&&e.test(n.nodeName)}},je=function(e){return e&&3===e.nodeType},qe=$e(/^(OL|UL|DL)$/),Ke=$e(/^(OL|UL)$/),Ve=He("ol"),We=$e(/^(LI|DT|DD)$/),Qe=$e(/^(DT|DD)$/),Xe=$e(/^(TH|TD)$/),ze=He("br"),Ye=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},Ge=function(e,n){return e&&e.nodeName in n},Je=function(e,n,t){var r=e.isEmpty(n)
return!(t&&e.select("span[data-mce-type=bookmark]",n).length>0)&&r},Ze=function(e,n){return e.isChildOf(n,e.getRoot())},en=function(e,n){var t,r,o,i=e.dom,u=e.schema.getBlockElements(),a=i.createFragment(),s=function(e){var n=e.getParam("forced_root_block","p")
return!1===n?"":!0===n?"p":n}(e)
if(s&&((r=i.create(s)).tagName===s.toUpperCase()&&i.setAttribs(r,function(e){return e.getParam("forced_root_block_attrs",{})}(e)),Ge(n.firstChild,u)||a.appendChild(r)),n)for(;t=n.firstChild;){var c=t.nodeName
o||"SPAN"===c&&"bookmark"===t.getAttribute("data-mce-type")||(o=!0),Ge(t,u)?(a.appendChild(t),r=null):s?(r||(r=i.create(s),a.appendChild(r)),r.appendChild(t)):a.appendChild(t)}return s?o||r.appendChild(i.create("br",{"data-mce-bogus":"1"})):a.appendChild(i.create("br")),a},nn=_e.DOM,tn=function(e,n){ge(n,"dd")?Ue(n,"dt"):ge(n,"dt")&&we(n).each((function(t){return function(e,n,t){var r=nn.select('span[data-mce-type="bookmark"]',n),o=en(e,t),i=nn.createRng()
i.setStartAfter(t),i.setEndAfter(n)
for(var u,a=i.extractContents(),s=a.firstChild;s;s=s.firstChild)if("LI"===s.nodeName&&e.dom.isEmpty(s)){nn.remove(s)
break}e.dom.isEmpty(a)||nn.insertAfter(a,n),nn.insertAfter(o,n),Je(e.dom,t.parentNode)&&(u=t.parentNode,Fe.each(r,(function(e){u.parentNode.insertBefore(e,t.parentNode)})),nn.remove(u)),nn.remove(t),Je(e.dom,n)&&nn.remove(n)}(e,t.dom,n.dom)}))},rn=function(e){ge(e,"dt")&&Ue(e,"dd")},on=function(e,n){if(je(e))return{container:e,offset:n}
var t=he.getNode(e,n)
return je(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&je(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&je(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}},un=function(e){var n=e.cloneRange(),t=on(e.startContainer,e.startOffset)
n.setStart(t.container,t.offset)
var r=on(e.endContainer,e.endOffset)
return n.setEnd(r.container,r.offset),n},an=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),sn=function(e,n){var t=n||e.selection.getStart(!0)
return e.dom.getParent(t,"OL,UL,DL",dn(e,t))},cn=function(e){var n=sn(e),t=e.selection.getSelectedBlocks()
return function(e,n){return e&&1===n.length&&n[0]===e}(n,t)?function(e){return Fe.grep(e.querySelectorAll("ol,ul,dl"),(function(e){return qe(e)}))}(n):Fe.grep(t,(function(e){return qe(e)&&n!==e}))},fn=function(e){var n=e.selection.getSelectedBlocks()
return Fe.grep(function(e,n){var t=Fe.map(n,(function(n){return e.dom.getParent(n,"li,dd,dt",dn(e,n))||n}))
return an.unique(t)}(e,n),(function(e){return We(e)}))},dn=function(e,n){var t=e.dom.getParents(n,"TD,TH")
return t.length>0?t[0]:e.getBody()},ln=function(e,n){var t=e.dom.getParents(n,"ol,ul",dn(e,n))
return B(t)},mn=function(e){var n=function(e){var n=ln(e,e.selection.getStart()),t=T(e.selection.getSelectedBlocks(),Ke)
return n.toArray().concat(t)}(e)
return pn(e,n)},pn=function(e,n){var t=N(n,(function(n){return ln(e,n).getOr(n)}))
return an.unique(t)},vn=function(e,n,t){return e.isSome()&&n.isSome()?m.some(t(e.getOrDie(),n.getOrDie())):m.none()},gn=function(e,n,t){return e.fire("ListMutation",{action:n,element:t})},hn=function(e,n,t){if(!g(t))throw console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);(function(e){return void 0!==e.style&&S(e.style.getPropertyValue)})(e)&&e.style.setProperty(n,t)},yn=function(e,n){Be(e.item,n.list)},Sn=function(e,n){var t={list:le.fromTag(n,e),item:le.fromTag("li",e)}
return Be(t.list,t.item),t},bn=function(e,n,t){var r=n.slice(0,t.depth)
return B(r).each((function(n){(function(e,n){Be(e.list,n),e.item=n})(n,function(e,n,t){var r=le.fromTag("li",e)
return Te(r,n),Ie(r,t),r}(e,t.itemAttributes,t.content)),function(e,n){Ne(e.list)!==n.listType&&(e.list=Ue(e.list,n.listType)),Te(e.list,n.listAttributes)}(n,t)})),r},Cn=function(e,n,t){var r,o=function(e,n,t){for(var r=[],o=0;o<t;o++)r.push(Sn(e,n.listType))
return r}(e,t,t.depth-n.length)
return function(e){for(var n=1;n<e.length;n++)yn(e[n-1],e[n])}(o),function(e,n){for(var t=0;t<e.length-1;t++)r=e[t].item,o="list-style-type",i="none",u=void 0,u=r.dom,hn(u,o,i)
var r,o,i,u
B(e).each((function(e){Te(e.list,n.listAttributes),Te(e.item,n.itemAttributes),Ie(e.item,n.content)}))}(o,t),r=o,vn(B(n),P(r),yn),n.concat(o)},On=function(e){return ge(e,"OL,UL")},Nn=function(e){return Ae(e).map(On).getOr(!1)},Ln=function(e){return e.depth>0},Tn=function(e){return e.isSelected},Dn=function(e){var n=ke(e),t=Ee(e).map(On).getOr(!1)?n.slice(0,-1):n
return N(t,Me)},wn=function(e){return L(e,(function(n,t){(function(e,n){var t=e[n].depth,r=function(e){return e.depth===t&&!e.dirty},o=function(e){return e.depth<t}
return w(A(e.slice(0,n)),r,o).orThunk((function(){return w(e.slice(n+1),r,o)}))})(e,t).fold((function(){n.dirty&&function(e){e.listAttributes=Oe(e.listAttributes,(function(e,n){return"start"!==n}))}(n)}),(function(e){return r=e,(t=n).listType=r.listType,void(t.listAttributes=I({},r.listAttributes))
var t,r}))})),e},kn=function(e,n,t,r){return Ae(r).filter(On).fold((function(){n.each((function(e){me(e.start,r)&&t.set(!0)}))
var o=function(e,n,t){return we(e).filter(Le).map((function(r){return{depth:n,dirty:!1,isSelected:t,content:Dn(e),itemAttributes:De(e),listAttributes:De(r),listType:Ne(r)}}))}(r,e,t.get())
n.each((function(e){me(e.end,r)&&t.set(!1)}))
var i=Ee(r).filter(On).map((function(r){return xn(e,n,t,r)})).getOr([])
return o.toArray().concat(i)}),(function(r){return xn(e,n,t,r)}))},xn=function(e,n,t,r){return x(ke(r),(function(r){return(On(r)?xn:kn)(e+1,n,t,r)}))},An=function(e,n){var t=wn(n)
return N(t,(function(n){var t,r,o,i=(t=n.content,o=(r||document).createDocumentFragment(),L(t,(function(e){o.appendChild(e.dom)})),le.fromDom(o))
return le.fromDom(en(e,i.dom))}))},En=function(e,n){var t=wn(n)
return function(e,n){var t=D(n,(function(n,t){return t.depth>n.length?Cn(e,n,t):bn(e,n,t)}),[])
return P(t).map((function(e){return e.list}))}(e.contentDocument,t).toArray()},Pn=function(e,n,t){var r=function(e,n){var t,r=(t=!1,{get:function(){return t},set:function(e){t=e}})
return N(e,(function(e){return{sourceList:e,entries:xn(0,n,r,e)}}))}(n,function(e){var n=N(fn(e),le.fromDom)
return vn(k(n,a(Nn)),k(A(n),a(Nn)),(function(e,n){return{start:e,end:n}}))}(e))
L(r,(function(n){(function(e,n){L(T(e,Tn),(function(e){return function(e,n){switch(e){case"Indent":n.depth++
break
case"Outdent":n.depth--
break
case"Flatten":n.depth=0}n.dirty=!0}(n,e)}))})(n.entries,t)
var r,o=function(e,n){return x(function(e,n){if(0===e.length)return[]
for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var a=e[i],s=n(a)
s!==t&&(r.push(o),o=[]),t=s,o.push(a)}return 0!==o.length&&r.push(o),r}(n,Ln),(function(n){return P(n).map(Ln).getOr(!1)?En(e,n):An(e,n)}))}(e,n.entries)
L(o,(function(n){gn(e,"Indent"===t?"IndentList":"OutdentList",n.dom)})),r=n.sourceList,L(o,(function(e){Pe(r,e)})),Re(n.sourceList)}))},Bn=function(e,n){var t=N(mn(e),le.fromDom),r=N(function(e){return T(fn(e),Qe)}(e),le.fromDom),o=!1
if(t.length||r.length){var i=e.selection.getBookmark()
Pn(e,t,n),function(e,n,t){L(t,"Indent"===n?rn:function(n){return tn(e,n)})}(e,n,r),e.selection.moveToBookmark(i),e.selection.setRng(un(e.selection.getRng())),e.nodeChanged(),o=!0}return o},In=function(e){return Bn(e,"Indent")},Rn=function(e){return Bn(e,"Outdent")},Mn=function(e){return Bn(e,"Flatten")},Un=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),_n=_e.DOM,Fn=function(e){var n={},t=function(t){var r,o,i
o=e[t?"startContainer":"endContainer"],i=e[t?"startOffset":"endOffset"],1===o.nodeType&&(r=_n.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(i=Math.min(i,o.childNodes.length-1),t?o.insertBefore(r,o.childNodes[i]):_n.insertAfter(r,o.childNodes[i])):o.appendChild(r),o=r,i=0),n[t?"startContainer":"endContainer"]=o,n[t?"startOffset":"endOffset"]=i}
return t(!0),e.collapsed||t(),n},Hn=function(e){function n(n){var t,r,o
t=o=e[n?"startContainer":"endContainer"],r=e[n?"startOffset":"endOffset"],t&&(1===t.nodeType&&(r=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t
1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(t),t=t.parentNode,_n.remove(o),!t.hasChildNodes()&&_n.isBlock(t)&&t.appendChild(_n.create("br"))),e[n?"startContainer":"endContainer"]=t,e[n?"startOffset":"endOffset"]=r)}n(!0),n()
var t=_n.createRng()
return t.setStart(e.startContainer,e.startOffset),e.endContainer&&t.setEnd(e.endContainer,e.endOffset),un(t)},$n=function(e){switch(e){case"UL":return"ToggleUlList"
case"OL":return"ToggleOlList"
case"DL":return"ToggleDLList"}},jn=function(e){return/\btox\-/.test(e.className)},qn=function(e,n,t){var r=function(e){var r=w(e.parents,qe,Xe).filter((function(e){return e.nodeName===n&&!jn(e)})).isSome()
t(r)},o=e.dom.getParents(e.selection.getNode())
return r({parents:o}),e.on("NodeChange",r),function(){return e.off("NodeChange",r)}},Kn=function(e,n){Fe.each(n,(function(n,t){e.setAttribute(t,n)}))},Vn=function(e,n,t){(function(e,n,t){var r=t["list-style-type"]?t["list-style-type"]:null
e.setStyle(n,"list-style-type",r)})(e,n,t),function(e,n,t){Kn(n,t["list-attributes"]),Fe.each(e.select("li",n),(function(e){Kn(e,t["list-item-attributes"])}))}(e,n,t)},Wn=function(e,n,t,r){var o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"]
for(1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&ze(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(Ye(e,o))return o
if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o
o=o.parentNode}return o},Qn=function(e,n,t){void 0===t&&(t={})
var r=e.selection.getRng(),o="LI",i=dn(e,e.selection.getStart(!0)),u=e.dom
if("false"!==u.getContentEditable(e.selection.getNode())){"DL"===(n=n.toUpperCase())&&(o="DT")
var a=Fn(r)
Fe.each(function(e,n,t){for(var r,o=[],i=e.dom,u=Wn(e,n,!0,t),a=Wn(e,n,!1,t),s=[],c=u;c&&(s.push(c),c!==a);c=c.nextSibling);return Fe.each(s,(function(n){if(Ye(e,n))return o.push(n),void(r=null)
if(i.isBlock(n)||ze(n))return ze(n)&&i.remove(n),void(r=null)
var u=n.nextSibling
Un.isBookmarkNode(n)&&(Ye(e,u)||!u&&n.parentNode===t)?r=null:(r||(r=i.create("p"),n.parentNode.insertBefore(r,n),o.push(r)),r.appendChild(n))})),o}(e,r,i),(function(r){var i,a=r.previousSibling
a&&qe(a)&&a.nodeName===n&&function(e,n,t){var r=e.getStyle(n,"list-style-type"),o=t?t["list-style-type"]:""
return r===(null===o?"":o)}(u,a,t)?(i=a,r=u.rename(r,o),a.appendChild(r)):(i=u.create(n),r.parentNode.insertBefore(i,r),i.appendChild(r),r=u.rename(r,o)),function(e,n,t){Fe.each(t,(function(t){var r
return e.setStyle(n,((r={})[t]="",r))}))}(u,r,["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"]),Vn(u,i,t),zn(e.dom,i)})),e.selection.setRng(Hn(a))}},Xn=function(e,n,t){return function(e,n){return e&&n&&qe(e)&&e.nodeName===n.nodeName}(n,t)&&function(e,n,t){return e.getStyle(n,"list-style-type",!0)===e.getStyle(t,"list-style-type",!0)}(e,n,t)&&(r=t,n.className===r.className)
var r},zn=function(e,n){var t,r
if(t=n.nextSibling,Xn(e,n,t)){for(;r=t.firstChild;)n.appendChild(r)
e.remove(t)}if(t=n.previousSibling,Xn(e,n,t)){for(;r=t.lastChild;)n.insertBefore(r,n.firstChild)
e.remove(t)}},Yn=function(e,n,t,r,o){if(n.nodeName!==r||Gn(o)){var i=Fn(e.selection.getRng(!0))
Fe.each([n].concat(t),(function(n){(function(e,n,t,r){if(n.nodeName!==t){var o=e.dom.rename(n,t)
Vn(e.dom,o,r),gn(e,$n(t),o)}else Vn(e.dom,n,r),gn(e,$n(t),n)})(e,n,r,o)})),e.selection.setRng(Hn(i))}else Mn(e)},Gn=function(e){return"list-style-type"in e},Jn=function(e,n,t){var r=sn(e),o=cn(e)
t=t||{},r&&o.length>0?Yn(e,r,o,n,t):function(e,n,t,r){if(n!==e.getBody())if(n)if(n.nodeName!==t||Gn(r)||jn(n)){var o=Fn(e.selection.getRng(!0))
Vn(e.dom,n,r)
var i=e.dom.rename(n,t)
zn(e.dom,i),e.selection.setRng(Hn(o)),gn(e,$n(t),i)}else Mn(e)
else Qn(e,t,r),gn(e,$n(t),n)}(e,r,n,t)},Zn=_e.DOM,et=function(e,n){Fe.each(Fe.grep(e.select("ol,ul",n)),(function(n){(function(e,n){var t,r=n.parentNode
"LI"===r.nodeName&&r.firstChild===n&&((t=r.previousSibling)&&"LI"===t.nodeName?(t.appendChild(n),Je(e,r)&&Zn.remove(r)):Zn.setStyle(r,"listStyleType","none")),qe(r)&&(t=r.previousSibling)&&"LI"===t.nodeName&&t.appendChild(n)})(e,n)}))},nt=function(e,n,t,r){var o=n.startContainer,i=n.startOffset
if(je(o)&&(t?i<o.data.length:i>0))return o
var u=e.schema.getNonEmptyElements()
1===o.nodeType&&(o=he.getNode(o,i))
var a=new ye(o,r)
for(t&&function(e,n){return!!ze(n)&&e.isBlock(n.nextSibling)&&!ze(n.previousSibling)}(e.dom,o)&&a.next();o=a[t?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o
if(u[o.nodeName])return o
if(je(o)&&o.data.length>0)return o}},tt=function(e,n){var t=n.childNodes
return 1===t.length&&!qe(t[0])&&e.isBlock(t[0])},rt=function(e,n,t){var r,o=tt(e,t)?t.firstChild:t
if(function(e,n){tt(e,n)&&e.remove(n.firstChild,!0)}(e,n),!Je(e,n,!0))for(;r=n.firstChild;)o.appendChild(r)},ot=function(e,n,t){var r,o=n.parentNode
if(Ze(e,n)&&Ze(e,t)){qe(t.lastChild)&&(r=t.lastChild),o===t.lastChild&&ze(o.previousSibling)&&e.remove(o.previousSibling)
var i=t.lastChild
i&&ze(i)&&n.hasChildNodes()&&e.remove(i),Je(e,t,!0)&&e.$(t).empty(),rt(e,n,t),r&&t.appendChild(r)
var u=ve(le.fromDom(t),le.fromDom(n))?e.getParents(n,qe,t):[]
e.remove(n),L(u,(function(n){Je(e,n)&&n!==e.getRoot()&&e.remove(n)}))}},it=function(e,n,t,r){var o=e.dom
if(o.isEmpty(r))(function(e,n,t){e.dom.$(t).empty(),ot(e.dom,n,t),e.selection.setCursorLocation(t)})(e,t,r)
else{var i=Fn(n)
ot(o,t,r),e.selection.setRng(Hn(i))}},ut=function(e,n){var t=e.dom,r=e.selection,o=r.getStart(),i=dn(e,o),u=t.getParent(r.getStart(),"LI",i)
if(u){var a=u.parentNode
if(a===e.getBody()&&Je(t,a))return!0
var s=un(r.getRng()),c=t.getParent(nt(e,s,n,i),"LI",i)
if(c&&c!==u)return e.undoManager.transact((function(){var t
n?it(e,s,c,u):(t=u).parentNode.firstChild===t?Rn(e):function(e,n,t,r){var o=Fn(n)
ot(e.dom,t,r)
var i=Hn(o)
e.selection.setRng(i)}(e,s,u,c)})),!0
if(!c&&!n&&0===s.startOffset&&0===s.endOffset)return e.undoManager.transact((function(){Mn(e)})),!0}return!1},at=function(e,n){return ut(e,n)||function(e,n){var t=e.dom,r=e.selection.getStart(),o=dn(e,r),i=t.getParent(r,t.isBlock,o)
if(i&&t.isEmpty(i)){var u=un(e.selection.getRng()),a=t.getParent(nt(e,u,n,o),"LI",o)
if(a)return e.undoManager.transact((function(){(function(e,n,t){var r=e.getParent(n.parentNode,e.isBlock,t)
e.remove(n),r&&e.isEmpty(r)&&e.remove(r)})(t,i,o),zn(t,a.parentNode),e.selection.select(a,!0),e.selection.collapse(n)})),!0}return!1}(e,n)},st=function(e,n){return e.selection.isCollapsed()?at(e,n):function(e){var n=e.selection.getStart(),t=dn(e,n)
return!!(e.dom.getParent(n,"LI,DT,DD",t)||fn(e).length>0)&&(e.undoManager.transact((function(){e.execCommand("Delete"),et(e.dom,e.getBody())})),!0)}(e)},ct=function(e){var n=e.dom,t=sn(e)
Ve(t)&&e.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:n.getAttrib(t,"start")||"1"},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(t){var r=t.getData()
e.undoManager.transact((function(){n.setAttrib(sn(e),"start","1"===r.start?"":r.start)})),t.close()}})},ft=function(e,n){return function(){var t=e.dom.getParent(e.selection.getStart(),"UL,OL,DL")
return t&&t.nodeName===n}},dt=function(e){(function(e){return e.getParam("lists_indent_on_tab",!0)})(e)&&function(e){e.on("keydown",(function(n){n.keyCode!==Se.TAB||Se.metaKeyPressed(n)||e.undoManager.transact((function(){(n.shiftKey?Rn(e):In(e))&&n.preventDefault()}))}))}(e),function(e){e.on("keydown",(function(n){n.keyCode===Se.BACKSPACE?st(e,!1)&&n.preventDefault():n.keyCode===Se.DELETE&&st(e,!0)&&n.preventDefault()}))}(e)}
o.add("lists",(function(e){return!1===e.hasPlugin("rtc",!0)&&(dt(e),function(e){e.on("BeforeExecCommand",(function(n){var t=n.command.toLowerCase()
"indent"===t?In(e):"outdent"===t&&Rn(e)})),e.addCommand("InsertUnorderedList",(function(n,t){Jn(e,"UL",t)})),e.addCommand("InsertOrderedList",(function(n,t){Jn(e,"OL",t)})),e.addCommand("InsertDefinitionList",(function(n,t){Jn(e,"DL",t)})),e.addCommand("RemoveList",(function(){Mn(e)})),e.addCommand("mceListProps",(function(){ct(e)})),e.addQueryStateHandler("InsertUnorderedList",ft(e,"UL")),e.addQueryStateHandler("InsertOrderedList",ft(e,"OL")),e.addQueryStateHandler("InsertDefinitionList",ft(e,"DL"))}(e)),function(e){var n=function(n){return function(){return e.execCommand(n)}}
e.hasPlugin("advlist")||(e.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:n("InsertOrderedList"),onSetup:function(n){return qn(e,"OL",n.setActive)}}),e.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:n("InsertUnorderedList"),onSetup:function(n){return qn(e,"UL",n.setActive)}}))}(e),function(e){var n={text:"List properties...",icon:"ordered-list",onAction:function(){return ct(e)},onSetup:function(n){return qn(e,"OL",(function(e){return n.setDisabled(!e)}))}}
e.ui.registry.addMenuItem("listprops",n),e.ui.registry.addContextMenu("lists",{update:function(n){var t=sn(e,n)
return Ve(t)?["listprops"]:[]}})}(e),function(e){return{backspaceDelete:function(n){st(e,n)}}}(e)}))})()

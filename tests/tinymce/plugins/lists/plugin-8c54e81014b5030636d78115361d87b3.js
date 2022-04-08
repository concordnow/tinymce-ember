(function(){"use strict"
var e,n,t=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=function(e){return function(n){return r=typeof(t=n),(null===t?"null":"object"===r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===e
var t,r}},o=function(e){return function(n){return typeof n===e}},i=r("string"),u=r("object"),a=r("array"),s=o("boolean"),c=o("function"),f=o("number"),l=function(){},d=function(e){return function(){return e}},m=function(e){return e},p=function(e,n){return e===n},v=function(e){return function(n){return!e(n)}},g=d(!1),h=d(!0),y=function(){return S},S={fold:function(e,n){return e()},isSome:g,isNone:h,getOr:n=m,getOrThunk:e=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:d(null),getOrUndefined:d(void 0),or:n,orThunk:e,map:y,each:l,bind:y,exists:g,forall:h,filter:function(){return y()},toArray:function(){return[]},toString:d("none()")},C=function(e){var n=d(e),t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},isSome:h,isNone:g,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return C(n(e))},each:function(n){n(e)},bind:r,exists:r,forall:r,filter:function(n){return n(e)?o:S},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o},b={some:C,none:y,from:function(e){return null==e?S:C(e)}},N=Array.prototype.slice,O=Array.prototype.push,L=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o]
r[o]=n(i,o)}return r},T=function(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t)}},w=function(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r]
n(i,r)&&t.push(i)}return t},x=function(e,n,t){return T(e,(function(e,r){t=n(t,e,r)})),t},D=function(e,n,t){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(n(i,r))return b.some(i)
if(t(i,r))break}return b.none()},k=function(e,n){return D(e,n,g)},A=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!a(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e)
O.apply(n,e[t])}return n}(L(e,n))},E=function(e){var n=N.call(e,0)
return n.reverse(),n},I=function(e,n){return n>=0&&n<e.length?b.some(e[n]):b.none()},P=function(e){return I(e,0)},B=function(e){return I(e,e.length-1)},R=function(){return(R=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])
return e}).apply(this,arguments)}
var M,U=function(){return _(0,0)},_=function(e,n){return{major:e,minor:n}},$={nu:_,detect:function(e,n){var t=String(n).toLowerCase()
return 0===e.length?U():function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t]
if(r.test(n))return r}}(e,n)
if(!t)return{major:0,minor:0}
var r=function(e){return Number(n.replace(t,"$"+e))}
return _(r(1),r(2))}(e,t)},unknown:U},F=function(e,n){return function(e,n){for(var t=0;t<e.length;t++){var r=n(e[t],t)
if(r.isSome())return r}return b.none()}(n.brands,(function(n){var t=n.brand.toLowerCase()
return k(e,(function(e){var n
return t===(null===(n=e.brand)||void 0===n?void 0:n.toLowerCase())})).map((function(e){return{current:e.name,version:$.nu(parseInt(n.version,10),0)}}))}))},H=function(e,n){var t=String(n).toLowerCase()
return k(e,(function(e){return e.search(t)}))},j=function(e,n){return-1!==e.indexOf(n)},K=(M=/^\s+|\s+$/g,function(e){return e.replace(M,"")}),V=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,W=function(e){return function(n){return j(n,e)}},Q=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return j(e,"edge/")&&j(e,"chrome")&&j(e,"safari")&&j(e,"applewebkit")}},{name:"Chrome",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,V],search:function(e){return j(e,"chrome")&&!j(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return j(e,"msie")||j(e,"trident")}},{name:"Opera",versionRegexes:[V,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:W("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:W("firefox")},{name:"Safari",versionRegexes:[V,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(j(e,"safari")||j(e,"mobile/"))&&j(e,"applewebkit")}}],X=[{name:"Windows",search:W("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return j(e,"iphone")||j(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:W("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:W("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:W("linux"),versionRegexes:[]},{name:"Solaris",search:W("sunos"),versionRegexes:[]},{name:"FreeBSD",search:W("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:W("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],q={browsers:d(Q),oses:d(X)},z="Edge",Y="Chrome",Z="Opera",G="Firefox",J="Safari",ee=function(e){var n=e.current,t=e.version,r=function(e){return function(){return n===e}}
return{current:n,version:t,isEdge:r(z),isChrome:r(Y),isIE:r("IE"),isOpera:r(Z),isFirefox:r(G),isSafari:r(J)}},ne={unknown:function(){return ee({current:void 0,version:$.unknown()})},nu:ee,edge:d(z),chrome:d(Y),ie:d("IE"),opera:d(Z),firefox:d(G),safari:d(J)},te="Windows",re="Android",oe="Linux",ie="Solaris",ue="FreeBSD",ae="ChromeOS",se=function(e){var n=e.current,t=e.version,r=function(e){return function(){return n===e}}
return{current:n,version:t,isWindows:r(te),isiOS:r("iOS"),isAndroid:r(re),isOSX:r("OSX"),isLinux:r(oe),isSolaris:r(ie),isFreeBSD:r(ue),isChromeOS:r(ae)}},ce={unknown:function(){return se({current:void 0,version:$.unknown()})},nu:se,windows:d(te),ios:d("iOS"),android:d(re),linux:d(oe),osx:d("OSX"),solaris:d(ie),freebsd:d(ue),chromeos:d(ae)},fe=function(e,n,t){var r=q.browsers(),o=q.oses(),i=n.bind((function(e){return F(r,e)})).orThunk((function(){return function(e,n){return H(e,n).map((function(e){var t=$.detect(e.versionRegexes,n)
return{current:e.name,version:t}}))}(r,e)})).fold(ne.unknown,ne.nu),u=function(e,n){return H(e,n).map((function(e){var t=$.detect(e.versionRegexes,n)
return{current:e.name,version:t}}))}(o,e).fold(ce.unknown,ce.nu),a=function(e,n,t,r){var o=e.isiOS()&&!0===/ipad/i.test(t),i=e.isiOS()&&!o,u=e.isiOS()||e.isAndroid(),a=u||r("(pointer:coarse)"),s=o||!i&&u&&r("(min-device-width:768px)"),c=i||u&&!s,f=n.isSafari()&&e.isiOS()&&!1===/safari/i.test(t),l=!c&&!s&&!f
return{isiPad:d(o),isiPhone:d(i),isTablet:d(s),isPhone:d(c),isTouch:d(a),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:d(f),isDesktop:d(l)}}(u,i,e,t)
return{browser:i,os:u,deviceType:a}},le=function(e){return window.matchMedia(e).matches},de=function(e){var n,t=!1
return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o]
return t||(t=!0,n=e.apply(null,r)),n}}((function(){return fe(navigator.userAgent,b.from(navigator.userAgentData),le)})),me=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},pe={fromHtml:function(e,n){var t=(n||document).createElement("div")
if(t.innerHTML=e,!t.hasChildNodes()||t.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return me(t.childNodes[0])},fromTag:function(e,n){var t=(n||document).createElement(e)
return me(t)},fromText:function(e,n){var t=(n||document).createTextNode(e)
return me(t)},fromDom:me,fromPoint:function(e,n,t){return b.from(e.dom.elementFromPoint(n,t)).map(me)}},ve=function(e,n){return e.dom===n.dom},ge=function(e,n){return t=e.dom,r=n.dom,function(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)}(t,r,Node.DOCUMENT_POSITION_CONTAINED_BY)
var t,r},he=function(e,n){return de().browser.isIE()?ge(e,n):function(e,n){var t=e.dom,r=n.dom
return t!==r&&t.contains(r)}(e,n)},ye=function(e,n){var t=e.dom
if(1!==t.nodeType)return!1
var r=t
if(void 0!==r.matches)return r.matches(n)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(n)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(n)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(n)
throw new Error("Browser lacks native selectors")},Se=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),Ce=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),be=tinymce.util.Tools.resolve("tinymce.util.VK"),Ne=Object.keys,Oe=function(e,n){for(var t=Ne(e),r=0,o=t.length;r<o;r++){var i=t[r]
n(e[i],i)}},Le=function(e,n){var t={}
return function(e,n,t,r){Oe(e,(function(e,o){(n(e,o)?t:r)(e,o)}))}(e,n,function(e){return function(n,t){e[t]=n}}(t),l),t}
"undefined"!=typeof window?window:Function("return this;")()
var Te,we=function(e){return e.dom.nodeName.toLowerCase()},xe=(Te=1,function(e){return function(e){return e.dom.nodeType}(e)===Te}),De=function(e){return function(n){return xe(n)&&we(n)===e}},ke=function(e,n){var t=e.dom
Oe(n,(function(e,n){(function(e,n,t){if(!(i(t)||s(t)||f(t)))throw console.error("Invalid call to Attribute.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(n,t+"")})(t,n,e)}))},Ae=function(e){return x(e.dom.attributes,(function(e,n){return e[n.name]=n.value,e}),{})},Ee=function(e){return b.from(e.dom.parentNode).map(pe.fromDom)},Ie=function(e){return L(e.dom.childNodes,pe.fromDom)},Pe=function(e,n){var t=e.dom.childNodes
return b.from(t[n]).map(pe.fromDom)},Be=function(e){return Pe(e,0)},Re=function(e){return Pe(e,e.dom.childNodes.length-1)},Me=function(e,n){Ee(e).each((function(t){t.dom.insertBefore(n.dom,e.dom)}))},Ue=function(e,n){e.dom.appendChild(n.dom)},_e=function(e,n){T(n,(function(n){Ue(e,n)}))},$e=function(e){var n=e.dom
null!==n.parentNode&&n.parentNode.removeChild(n)},Fe=function(e){return function(e,n){return pe.fromDom(e.dom.cloneNode(n))}(e,!0)},He=function(e,n){var t=function(e,n){var t=pe.fromTag(n),r=Ae(e)
return ke(t,r),t}(e,n)
Me(e,t)
var r=Ie(e)
return _e(t,r),$e(e),t},je=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Ke=tinymce.util.Tools.resolve("tinymce.util.Tools"),Ve=function(e){return function(n){return n&&n.nodeName.toLowerCase()===e}},We=function(e){return function(n){return n&&e.test(n.nodeName)}},Qe=function(e){return e&&3===e.nodeType},Xe=We(/^(OL|UL|DL)$/),qe=We(/^(OL|UL)$/),ze=Ve("ol"),Ye=We(/^(LI|DT|DD)$/),Ze=We(/^(DT|DD)$/),Ge=We(/^(TH|TD)$/),Je=Ve("br"),en=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},nn=function(e,n){return e&&e.nodeName in n},tn=function(e,n,t){var r=e.isEmpty(n)
return!(t&&e.select("span[data-mce-type=bookmark]",n).length>0)&&r},rn=function(e,n){return e.isChildOf(n,e.getRoot())},on=function(e,n){var t,r,o,i=e.dom,u=e.schema.getBlockElements(),a=i.createFragment(),s=function(e){var n=e.getParam("forced_root_block","p")
return!1===n?"":!0===n?"p":n}(e)
if(s&&((r=i.create(s)).tagName===s.toUpperCase()&&i.setAttribs(r,function(e){return e.getParam("forced_root_block_attrs",{})}(e)),nn(n.firstChild,u)||a.appendChild(r)),n)for(;t=n.firstChild;){var c=t.nodeName
o||"SPAN"===c&&"bookmark"===t.getAttribute("data-mce-type")||(o=!0),nn(t,u)?(a.appendChild(t),r=null):s?(r||(r=i.create(s),a.appendChild(r)),r.appendChild(t)):a.appendChild(t)}return s?o||r.appendChild(i.create("br",{"data-mce-bogus":"1"})):a.appendChild(i.create("br")),a},un=je.DOM,an=De("dd"),sn=De("dt"),cn=function(e,n){an(n)?He(n,"dt"):sn(n)&&Ee(n).each((function(t){return function(e,n,t){var r=un.select('span[data-mce-type="bookmark"]',n),o=on(e,t),i=un.createRng()
i.setStartAfter(t),i.setEndAfter(n)
for(var u,a=i.extractContents(),s=a.firstChild;s;s=s.firstChild)if("LI"===s.nodeName&&e.dom.isEmpty(s)){un.remove(s)
break}e.dom.isEmpty(a)||un.insertAfter(a,n),un.insertAfter(o,n),tn(e.dom,t.parentNode)&&(u=t.parentNode,Ke.each(r,(function(e){u.parentNode.insertBefore(e,t.parentNode)})),un.remove(u)),un.remove(t),tn(e.dom,n)&&un.remove(n)}(e,t.dom,n.dom)}))},fn=function(e){sn(e)&&He(e,"dd")},ln=function(e,n){if(Qe(e))return{container:e,offset:n}
var t=Se.getNode(e,n)
return Qe(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&Qe(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&Qe(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}},dn=function(e){var n=e.cloneRange(),t=ln(e.startContainer,e.startOffset)
n.setStart(t.container,t.offset)
var r=ln(e.endContainer,e.endOffset)
return n.setEnd(r.container,r.offset),n},mn=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),pn=function(e,n){var t=n||e.selection.getStart(!0)
return e.dom.getParent(t,"OL,UL,DL",hn(e,t))},vn=function(e){var n=pn(e),t=e.selection.getSelectedBlocks()
return function(e,n){return e&&1===n.length&&n[0]===e}(n,t)?function(e){return w(e.querySelectorAll("ol,ul,dl"),Xe)}(n):w(t,(function(e){return Xe(e)&&n!==e}))},gn=function(e){var n=e.selection.getSelectedBlocks()
return w(function(e,n){var t=Ke.map(n,(function(n){return e.dom.getParent(n,"li,dd,dt",hn(e,n))||n}))
return mn.unique(t)}(e,n),Ye)},hn=function(e,n){var t=e.dom.getParents(n,"TD,TH")
return t.length>0?t[0]:e.getBody()},yn=function(e,n){var t=e.dom.getParents(n,"ol,ul",hn(e,n))
return B(t)},Sn=function(e){var n=function(e){var n=yn(e,e.selection.getStart()),t=w(e.selection.getSelectedBlocks(),qe)
return n.toArray().concat(t)}(e)
return Cn(e,n)},Cn=function(e,n){var t=L(n,(function(n){return yn(e,n).getOr(n)}))
return mn.unique(t)},bn=function(e,n,t){return void 0===t&&(t=p),e.exists((function(e){return t(e,n)}))},Nn=function(e,n,t){return e.isSome()&&n.isSome()?b.some(t(e.getOrDie(),n.getOrDie())):b.none()},On=function(e,n,t){return e.fire("ListMutation",{action:n,element:t})},Ln=function(e,n,t){if(!i(t))throw console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);(function(e){return void 0!==e.style&&c(e.style.getPropertyValue)})(e)&&e.style.setProperty(n,t)},Tn=function(e,n){Ue(e.item,n.list)},wn=function(e,n){var t={list:pe.fromTag(n,e),item:pe.fromTag("li",e)}
return Ue(t.list,t.item),t},xn=function(e,n,t){var r=n.slice(0,t.depth)
return B(r).each((function(n){(function(e,n){Ue(e.list,n),e.item=n})(n,function(e,n,t){var r=pe.fromTag("li",e)
return ke(r,n),_e(r,t),r}(e,t.itemAttributes,t.content)),function(e,n){we(e.list)!==n.listType&&(e.list=He(e.list,n.listType)),ke(e.list,n.listAttributes)}(n,t)})),r},Dn=function(e,n,t){var r,o=function(e,n,t){for(var r=[],o=0;o<t;o++)r.push(wn(e,n.listType))
return r}(e,t,t.depth-n.length)
return function(e){for(var n=1;n<e.length;n++)Tn(e[n-1],e[n])}(o),function(e,n){for(var t=0;t<e.length-1;t++)r=e[t].item,o="list-style-type",i="none",u=void 0,u=r.dom,Ln(u,o,i)
var r,o,i,u
B(e).each((function(e){ke(e.list,n.listAttributes),ke(e.item,n.itemAttributes),_e(e.item,n.content)}))}(o,t),r=o,Nn(B(n),P(r),Tn),n.concat(o)},kn=function(e){return ye(e,"OL,UL")},An=function(e){return Be(e).exists(kn)},En=function(e){return e.depth>0},In=function(e){return e.isSelected},Pn=function(e){var n=Ie(e),t=Re(e).exists(kn)?n.slice(0,-1):n
return L(t,Fe)},Bn=function(e){return T(e,(function(n,t){(function(e,n){var t=e[n].depth,r=function(e){return e.depth===t&&!e.dirty},o=function(e){return e.depth<t}
return D(E(e.slice(0,n)),r,o).orThunk((function(){return D(e.slice(n+1),r,o)}))})(e,t).fold((function(){n.dirty&&function(e){e.listAttributes=Le(e.listAttributes,(function(e,n){return"start"!==n}))}(n)}),(function(e){return r=e,(t=n).listType=r.listType,void(t.listAttributes=R({},r.listAttributes))
var t,r}))})),e},Rn=function(e,n,t,r){return Be(r).filter(kn).fold((function(){n.each((function(e){ve(e.start,r)&&t.set(!0)}))
var o=function(e,n,t){return Ee(e).filter(xe).map((function(r){return{depth:n,dirty:!1,isSelected:t,content:Pn(e),itemAttributes:Ae(e),listAttributes:Ae(r),listType:we(r)}}))}(r,e,t.get())
n.each((function(e){ve(e.end,r)&&t.set(!1)}))
var i=Re(r).filter(kn).map((function(r){return Mn(e,n,t,r)})).getOr([])
return o.toArray().concat(i)}),(function(r){return Mn(e,n,t,r)}))},Mn=function(e,n,t,r){return A(Ie(r),(function(r){return(kn(r)?Mn:Rn)(e+1,n,t,r)}))},Un=function(e,n){var t=Bn(n)
return L(t,(function(n){var t,r,o,i=(t=n.content,o=(r||document).createDocumentFragment(),T(t,(function(e){o.appendChild(e.dom)})),pe.fromDom(o))
return pe.fromDom(on(e,i.dom))}))},_n=function(e,n){var t=Bn(n)
return function(e,n){var t=x(n,(function(n,t){return t.depth>n.length?Dn(e,n,t):xn(e,n,t)}),[])
return P(t).map((function(e){return e.list}))}(e.contentDocument,t).toArray()},$n=function(e,n,t){var r=function(e,n){var t,r=(t=!1,{get:function(){return t},set:function(e){t=e}})
return L(e,(function(e){return{sourceList:e,entries:Mn(0,n,r,e)}}))}(n,function(e){var n=L(gn(e),pe.fromDom)
return Nn(k(n,v(An)),k(E(n),v(An)),(function(e,n){return{start:e,end:n}}))}(e))
T(r,(function(n){(function(e,n){T(w(e,In),(function(e){return function(e,n){switch(e){case"Indent":n.depth++
break
case"Outdent":n.depth--
break
case"Flatten":n.depth=0}n.dirty=!0}(n,e)}))})(n.entries,t)
var r,o=function(e,n){return A(function(e,n){if(0===e.length)return[]
for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var a=e[i],s=n(a)
s!==t&&(r.push(o),o=[]),t=s,o.push(a)}return 0!==o.length&&r.push(o),r}(n,En),(function(n){return P(n).exists(En)?_n(e,n):Un(e,n)}))}(e,n.entries)
T(o,(function(n){On(e,"Indent"===t?"IndentList":"OutdentList",n.dom)})),r=n.sourceList,T(o,(function(e){Me(r,e)})),$e(n.sourceList)}))},Fn=function(e,n){var t=L(Sn(e),pe.fromDom),r=L(function(e){return w(gn(e),Ze)}(e),pe.fromDom),o=!1
if(t.length||r.length){var i=e.selection.getBookmark()
$n(e,t,n),function(e,n,t){T(t,"Indent"===n?fn:function(n){return cn(e,n)})}(e,n,r),e.selection.moveToBookmark(i),e.selection.setRng(dn(e.selection.getRng())),e.nodeChanged(),o=!0}return o},Hn=function(e){return Fn(e,"Indent")},jn=function(e){return Fn(e,"Outdent")},Kn=function(e){return Fn(e,"Flatten")},Vn=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),Wn=je.DOM,Qn=function(e){var n={},t=function(t){var r=e[t?"startContainer":"endContainer"],o=e[t?"startOffset":"endOffset"]
if(1===r.nodeType){var i=Wn.create("span",{"data-mce-type":"bookmark"})
r.hasChildNodes()?(o=Math.min(o,r.childNodes.length-1),t?r.insertBefore(i,r.childNodes[o]):Wn.insertAfter(i,r.childNodes[o])):r.appendChild(i),r=i,o=0}n[t?"startContainer":"endContainer"]=r,n[t?"startOffset":"endOffset"]=o}
return t(!0),e.collapsed||t(),n},Xn=function(e){var n=function(n){var t,r=t=e[n?"startContainer":"endContainer"],o=e[n?"startOffset":"endOffset"]
r&&(1===r.nodeType&&(o=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t
1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(r),r=r.parentNode,Wn.remove(t),!r.hasChildNodes()&&Wn.isBlock(r)&&r.appendChild(Wn.create("br"))),e[n?"startContainer":"endContainer"]=r,e[n?"startOffset":"endOffset"]=o)}
n(!0),n()
var t=Wn.createRng()
return t.setStart(e.startContainer,e.startOffset),e.endContainer&&t.setEnd(e.endContainer,e.endOffset),dn(t)},qn=function(e){switch(e){case"UL":return"ToggleUlList"
case"OL":return"ToggleOlList"
case"DL":return"ToggleDLList"}},zn=function(e){return/\btox\-/.test(e.className)},Yn=function(e,n,t){var r=function(e){var r=D(e.parents,Xe,Ge).filter((function(e){return e.nodeName===n&&!zn(e)})).isSome()
t(r)},o=e.dom.getParents(e.selection.getNode())
return r({parents:o}),e.on("NodeChange",r),function(){return e.off("NodeChange",r)}},Zn=function(e,n){Ke.each(n,(function(n,t){e.setAttribute(t,n)}))},Gn=function(e,n,t){(function(e,n,t){var r=t["list-style-type"]?t["list-style-type"]:null
e.setStyle(n,"list-style-type",r)})(e,n,t),function(e,n,t){Zn(n,t["list-attributes"]),Ke.each(e.select("li",n),(function(e){Zn(e,t["list-item-attributes"])}))}(e,n,t)},Jn=function(e,n,t,r){var o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"]
for(1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&Je(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(en(e,o))return o
if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o
o=o.parentNode}return o},et=function(e,n,t){var r=e.selection.getRng(),o="LI",i=hn(e,e.selection.getStart(!0)),u=e.dom
if("false"!==u.getContentEditable(e.selection.getNode())){"DL"===(n=n.toUpperCase())&&(o="DT")
var a=Qn(r),s=function(e,n,t){for(var r,o=[],i=e.dom,u=Jn(e,n,!0,t),a=Jn(e,n,!1,t),s=[],c=u;c&&(s.push(c),c!==a);c=c.nextSibling);return Ke.each(s,(function(n){if(en(e,n))return o.push(n),void(r=null)
if(i.isBlock(n)||Je(n))return Je(n)&&i.remove(n),void(r=null)
var u=n.nextSibling
Vn.isBookmarkNode(n)&&(Xe(u)||en(e,u)||!u&&n.parentNode===t)?r=null:(r||(r=i.create("p"),n.parentNode.insertBefore(r,n),o.push(r)),r.appendChild(n))})),o}(e,r,i)
Ke.each(s,(function(r){var i,a=r.previousSibling,s=r.parentNode
Ye(s)||(a&&Xe(a)&&a.nodeName===n&&function(e,n,t){var r=e.getStyle(n,"list-style-type"),o=t?t["list-style-type"]:""
return r===(null===o?"":o)}(u,a,t)?(i=a,r=u.rename(r,o),a.appendChild(r)):(i=u.create(n),r.parentNode.insertBefore(i,r),i.appendChild(r),r=u.rename(r,o)),function(e,n,t){Ke.each(t,(function(t){var r
return e.setStyle(n,((r={})[t]="",r))}))}(u,r,["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"]),Gn(u,i,t),tt(e.dom,i))})),e.selection.setRng(Xn(a))}},nt=function(e,n,t){return function(e,n){return e&&n&&Xe(e)&&e.nodeName===n.nodeName}(n,t)&&function(e,n,t){return e.getStyle(n,"list-style-type",!0)===e.getStyle(t,"list-style-type",!0)}(e,n,t)&&(r=t,n.className===r.className)
var r},tt=function(e,n){var t,r
if(t=n.nextSibling,nt(e,n,t)){for(;r=t.firstChild;)n.appendChild(r)
e.remove(t)}if(t=n.previousSibling,nt(e,n,t)){for(;r=t.lastChild;)n.insertBefore(r,n.firstChild)
e.remove(t)}},rt=function(e,n,t,r,o){var i=Xe(n)
if(i&&n.nodeName===r&&!ot(o))Kn(e)
else{et(e,r,o)
var u=Qn(e.selection.getRng()),a=i?function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o])
return e.concat(r||Array.prototype.slice.call(n))}([n],t,!0):t
Ke.each(a,(function(n){(function(e,n,t,r){if(n.nodeName!==t){var o=e.dom.rename(n,t)
Gn(e.dom,o,r),On(e,qn(t),o)}else Gn(e.dom,n,r),On(e,qn(t),n)})(e,n,r,o)})),e.selection.setRng(Xn(u))}},ot=function(e){return"list-style-type"in e},it=function(e,n,t){var r=pn(e),o=vn(e),i=u(t)?t:{}
o.length>0?rt(e,r,o,n,i):function(e,n,t,r){if(n!==e.getBody())if(n)if(n.nodeName!==t||ot(r)||zn(n)){var o=Qn(e.selection.getRng())
Gn(e.dom,n,r)
var i=e.dom.rename(n,t)
tt(e.dom,i),e.selection.setRng(Xn(o)),et(e,t,r),On(e,qn(t),i)}else Kn(e)
else et(e,t,r),On(e,qn(t),n)}(e,r,n,i)},ut=je.DOM,at=function(e,n){var t=Ke.grep(e.select("ol,ul",n))
Ke.each(t,(function(n){(function(e,n){var t,r=n.parentNode
"LI"===r.nodeName&&r.firstChild===n&&((t=r.previousSibling)&&"LI"===t.nodeName?(t.appendChild(n),tn(e,r)&&ut.remove(r)):ut.setStyle(r,"listStyleType","none")),Xe(r)&&(t=r.previousSibling)&&"LI"===t.nodeName&&t.appendChild(n)})(e,n)}))},st=function(e,n,t,r){var o=n.startContainer,i=n.startOffset
if(Qe(o)&&(t?i<o.data.length:i>0))return o
var u=e.schema.getNonEmptyElements()
1===o.nodeType&&(o=Se.getNode(o,i))
var a=new Ce(o,r)
for(t&&function(e,n){return!!Je(n)&&e.isBlock(n.nextSibling)&&!Je(n.previousSibling)}(e.dom,o)&&a.next();o=a[t?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o
if(u[o.nodeName])return o
if(Qe(o)&&o.data.length>0)return o}},ct=function(e,n){var t=n.childNodes
return 1===t.length&&!Xe(t[0])&&e.isBlock(t[0])},ft=function(e,n,t){var r,o=ct(e,t)?t.firstChild:t
if(function(e,n){ct(e,n)&&e.remove(n.firstChild,!0)}(e,n),!tn(e,n,!0))for(;r=n.firstChild;)o.appendChild(r)},lt=function(e,n,t){var r,o=n.parentNode
if(rn(e,n)&&rn(e,t)){Xe(t.lastChild)&&(r=t.lastChild),o===t.lastChild&&Je(o.previousSibling)&&e.remove(o.previousSibling)
var i=t.lastChild
i&&Je(i)&&n.hasChildNodes()&&e.remove(i),tn(e,t,!0)&&e.$(t).empty(),ft(e,n,t),r&&t.appendChild(r)
var u=he(pe.fromDom(t),pe.fromDom(n))?e.getParents(n,Xe,t):[]
e.remove(n),T(u,(function(n){tn(e,n)&&n!==e.getRoot()&&e.remove(n)}))}},dt=function(e,n,t,r){var o=e.dom
if(o.isEmpty(r))(function(e,n,t){e.dom.$(t).empty(),lt(e.dom,n,t),e.selection.setCursorLocation(t,0)})(e,t,r)
else{var i=Qn(n)
lt(o,t,r),e.selection.setRng(Xn(i))}},mt=function(e,n){var t=e.dom,r=e.selection,o=r.getStart(),i=hn(e,o),u=t.getParent(r.getStart(),"LI",i)
if(u){var a=u.parentNode
if(a===e.getBody()&&tn(t,a))return!0
var s=dn(r.getRng()),c=t.getParent(st(e,s,n,i),"LI",i)
if(c&&c!==u)return e.undoManager.transact((function(){var t
n?dt(e,s,c,u):(t=u).parentNode.firstChild===t?jn(e):function(e,n,t,r){var o=Qn(n)
lt(e.dom,t,r)
var i=Xn(o)
e.selection.setRng(i)}(e,s,u,c)})),!0
if(!c&&!n&&0===s.startOffset&&0===s.endOffset)return e.undoManager.transact((function(){Kn(e)})),!0}return!1},pt=function(e,n){return mt(e,n)||function(e,n){var t=e.dom,r=e.selection.getStart(),o=hn(e,r),i=t.getParent(r,t.isBlock,o)
if(i&&t.isEmpty(i)){var u=dn(e.selection.getRng()),a=t.getParent(st(e,u,n,o),"LI",o)
if(a)return e.undoManager.transact((function(){(function(e,n,t){var r=e.getParent(n.parentNode,e.isBlock,t)
e.remove(n),r&&e.isEmpty(r)&&e.remove(r)})(t,i,o),tt(t,a.parentNode),e.selection.select(a,!0),e.selection.collapse(n)})),!0}return!1}(e,n)},vt=function(e,n){return e.selection.isCollapsed()?pt(e,n):function(e){var n=e.selection.getStart(),t=hn(e,n)
return!!(e.dom.getParent(n,"LI,DT,DD",t)||gn(e).length>0)&&(e.undoManager.transact((function(){e.execCommand("Delete"),at(e.dom,e.getBody())})),!0)}(e)},gt=function(e){var n=E(K(e).split("")),t=L(n,(function(e,n){var t=e.toUpperCase().charCodeAt(0)-"A".charCodeAt(0)+1
return Math.pow(26,n)*t}))
return x(t,(function(e,n){return e+n}),0)},ht=function(e){if(--e<0)return""
var n=e%26,t=Math.floor(e/26)
return ht(t)+String.fromCharCode("A".charCodeAt(0)+n)},yt=function(e){var n,t,r=pn(e)
ze(r)&&e.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:(n={start:e.dom.getAttrib(r,"start","1"),listStyleType:b.some(e.dom.getStyle(r,"list-style-type"))},t=parseInt(n.start,10),bn(n.listStyleType,"upper-alpha")?ht(t):bn(n.listStyleType,"lower-alpha")?ht(t).toLowerCase():n.start)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(n){(function(e){switch(function(e){return/^[0-9]+$/.test(e)?2:/^[A-Z]+$/.test(e)?0:function(e){return/^[a-z]+$/.test(e)}(e)?1:e.length>0?4:3}(e)){case 2:return b.some({listStyleType:b.none(),start:e})
case 0:return b.some({listStyleType:b.some("upper-alpha"),start:gt(e).toString()})
case 1:return b.some({listStyleType:b.some("lower-alpha"),start:gt(e).toString()})
case 3:return b.some({listStyleType:b.none(),start:""})
case 4:return b.none()}})(n.getData().start).each((function(n){e.execCommand("mceListUpdate",!1,{attrs:{start:"1"===n.start?"":n.start},styles:{"list-style-type":n.listStyleType.getOr("")}})})),n.close()}})},St=function(e,n){return function(){var t=pn(e)
return t&&t.nodeName===n}},Ct=function(e){e.addCommand("mceListProps",(function(){yt(e)}))},bt=function(e){e.on("BeforeExecCommand",(function(n){var t=n.command.toLowerCase()
"indent"===t?Hn(e):"outdent"===t&&jn(e)})),e.addCommand("InsertUnorderedList",(function(n,t){it(e,"UL",t)})),e.addCommand("InsertOrderedList",(function(n,t){it(e,"OL",t)})),e.addCommand("InsertDefinitionList",(function(n,t){it(e,"DL",t)})),e.addCommand("RemoveList",(function(){Kn(e)})),Ct(e),e.addCommand("mceListUpdate",(function(n,t){u(t)&&function(e,n){var t=pn(e)
e.undoManager.transact((function(){u(n.styles)&&e.dom.setStyles(t,n.styles),u(n.attrs)&&Oe(n.attrs,(function(n,r){return e.dom.setAttrib(t,r,n)}))}))}(e,t)})),e.addQueryStateHandler("InsertUnorderedList",St(e,"UL")),e.addQueryStateHandler("InsertOrderedList",St(e,"OL")),e.addQueryStateHandler("InsertDefinitionList",St(e,"DL"))},Nt=function(e){(function(e){return e.getParam("lists_indent_on_tab",!0)})(e)&&function(e){e.on("keydown",(function(n){n.keyCode!==be.TAB||be.metaKeyPressed(n)||e.undoManager.transact((function(){(n.shiftKey?jn(e):Hn(e))&&n.preventDefault()}))}))}(e),function(e){e.on("keydown",(function(n){n.keyCode===be.BACKSPACE?vt(e,!1)&&n.preventDefault():n.keyCode===be.DELETE&&vt(e,!0)&&n.preventDefault()}))}(e)}
t.add("lists",(function(e){return!1===e.hasPlugin("rtc",!0)?(Nt(e),bt(e)):Ct(e),function(e){var n=function(n){return function(){return e.execCommand(n)}}
e.hasPlugin("advlist")||(e.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:n("InsertOrderedList"),onSetup:function(n){return Yn(e,"OL",n.setActive)}}),e.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:n("InsertUnorderedList"),onSetup:function(n){return Yn(e,"UL",n.setActive)}}))}(e),function(e){var n={text:"List properties...",icon:"ordered-list",onAction:function(){return e.execCommand("mceListProps")},onSetup:function(n){return Yn(e,"OL",(function(e){return n.setDisabled(!e)}))}}
e.ui.registry.addMenuItem("listprops",n),e.ui.registry.addContextMenu("lists",{update:function(n){var t=pn(e,n)
return ze(t)?["listprops"]:[]}})}(e),function(e){return{backspaceDelete:function(n){vt(e,n)}}}(e)}))})()

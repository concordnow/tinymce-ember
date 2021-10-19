!function(){"use strict"
function e(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}}function t(e){return function(t){return typeof t===e}}function n(){}function r(e){return function(){return e}}function o(e){return e}function i(e,t){return e===t}function a(e){return function(t){return!e(t)}}function s(){return v}var u=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=e("string"),f=e("object"),d=e("array"),l=t("boolean"),m=t("function"),p=t("number"),g=r(!1),h=r(!0),v={fold:function(e,t){return e()},isSome:g,isNone:h,getOr:o,getOrThunk:y,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:r(null),getOrUndefined:r(void 0),or:o,orThunk:y,map:s,each:n,bind:s,exists:g,forall:h,filter:function(){return v},toArray:function(){return[]},toString:r("none()")}
function y(e){return e()}function S(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r}function C(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}function b(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n}function N(e,t,n){return C(e,(function(e,r){n=t(n,e,r)})),n}function O(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return E.some(i)
if(n(i,r))break}return E.none()}function L(e,t){return O(e,t,g)}function T(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!d(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
P.apply(t,e[n])}return t}(S(e,t))}function D(e){var t=I.call(e,0)
return t.reverse(),t}function x(e,t){return 0<=t&&t<e.length?E.some(e[t]):E.none()}function A(e){return x(e,0)}function w(e){return x(e,e.length-1)}var k=function(e){function t(){return i}function n(t){return t(e)}var o=r(e),i={fold:function(t,n){return n(e)},isSome:h,isNone:g,getOr:o,getOrThunk:o,getOrDie:o,getOrNull:o,getOrUndefined:o,or:t,orThunk:t,map:function(t){return k(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?i:v},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return i},E={some:k,none:s,from:function(e){return null==e?v:k(e)}},I=Array.prototype.slice,P=Array.prototype.push,B=function(){return(B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function R(e,t){var n=String(t).toLowerCase()
return L(e,(function(e){return e.search(n)}))}function M(e,t){return-1!==e.indexOf(t)}function U(e){return function(t){return M(t,e)}}function _(e){return window.matchMedia(e).matches}function $(e,t){return e.dom===t.dom}function F(e,t){for(var n=ge(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}}function H(){return z(0,0)}function j(e){function t(e){return function(){return n===e}}var n=e.current,r=e.version
return{current:n,version:r,isEdge:t("Edge"),isChrome:t("Chrome"),isIE:t("IE"),isOpera:t("Opera"),isFirefox:t(ee),isSafari:t("Safari")}}function K(e){function t(e){return function(){return n===e}}var n=e.current,r=e.version
return{current:n,version:r,isWindows:t(re),isiOS:t("iOS"),isAndroid:t(oe),isOSX:t("OSX"),isLinux:t("Linux"),isSolaris:t(ie),isFreeBSD:t(ae),isChromeOS:t(se)}}function V(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}}var W,Q,X,q,z=function(e,t){return{major:e,minor:t}},Y={nu:z,detect:function(e,t){var n,r,o=String(t).toLowerCase()
return 0===e.length?H():(r=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,n=o))?z(i(1),i(2)):{major:0,minor:0}
function i(e){return Number(n.replace(r,"$"+e))}},unknown:H},Z=(W=/^\s+|\s+$/g,function(e){return e.replace(W,"")}),G=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,J={browsers:r([{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return M(e,"edge/")&&M(e,"chrome")&&M(e,"safari")&&M(e,"applewebkit")}},{name:"Chrome",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,G],search:function(e){return M(e,"chrome")&&!M(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return M(e,"msie")||M(e,"trident")}},{name:"Opera",versionRegexes:[G,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:U("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:U("firefox")},{name:"Safari",versionRegexes:[G,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(M(e,"safari")||M(e,"mobile/"))&&M(e,"applewebkit")}}]),oses:r([{name:"Windows",search:U("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return M(e,"iphone")||M(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:U("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:U("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:U("linux"),versionRegexes:[]},{name:"Solaris",search:U("sunos"),versionRegexes:[]},{name:"FreeBSD",search:U("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:U("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}])},ee="Firefox",te=function(){return j({current:void 0,version:Y.unknown()})},ne=j,re=(r("Edge"),r("Chrome"),r("IE"),r("Opera"),r(ee),r("Safari"),"Windows"),oe="Android",ie="Solaris",ae="FreeBSD",se="ChromeOS",ue=function(){return K({current:void 0,version:Y.unknown()})},ce=K,fe=(r(re),r("iOS"),r(oe),r("Linux"),r("OSX"),r(ie),r(ae),r(se),q=!(Q=function(){return e=navigator.userAgent,t=E.from(navigator.userAgentData),n=_,h=J.browsers(),v=J.oses(),{browser:y=t.bind((function(e){return function(e,t){return function(t){for(var n=0;n<t.length;n++){var r=function(t){var n=t.brand.toLowerCase()
return L(e,(function(e){var t
return n===(null===(t=e.brand)||void 0===t?void 0:t.toLowerCase())})).map((function(e){return{current:e.name,version:Y.nu(parseInt(t.version,10),0)}}))}(t[n])
if(r.isSome())return r}return E.none()}(t.brands)}(h,e)})).orThunk((function(){return R(h,t=e).map((function(e){var n=Y.detect(e.versionRegexes,t)
return{current:e.name,version:n}}))
var t})).fold(te,ne),os:S=R(v,o=e).map((function(e){var t=Y.detect(e.versionRegexes,o)
return{current:e.name,version:t}})).fold(ue,ce),deviceType:(a=y,s=e,u=n,c=(i=S).isiOS()&&!0===/ipad/i.test(s),f=i.isiOS()&&!c,l=(d=i.isiOS()||i.isAndroid())||u("(pointer:coarse)"),m=c||!f&&d&&u("(min-device-width:768px)"),p=f||d&&!m,g=a.isSafari()&&i.isiOS()&&!1===/safari/i.test(s),{isiPad:r(c),isiPhone:r(f),isTablet:r(m),isPhone:r(p),isTouch:r(l),isAndroid:i.isAndroid,isiOS:i.isiOS,isWebView:r(g),isDesktop:r(!p&&!m&&!g)})}
var e,t,n,o,i,a,s,u,c,f,d,l,m,p,g,h,v,y,S}),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return q||(q=!0,X=Q.apply(null,e)),X}),de={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return V(n.childNodes[0])},fromTag:function(e,t){return V((t||document).createElement(e))},fromText:function(e,t){return V((t||document).createTextNode(e))},fromDom:V,fromPoint:function(e,t,n){return E.from(e.dom.elementFromPoint(t,n)).map(V)}},le=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),me=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),pe=tinymce.util.Tools.resolve("tinymce.util.VK"),ge=Object.keys
function he(e){return e.dom.nodeName.toLowerCase()}function ve(e){return function(t){return xt(t)&&he(t)===e}}function ye(e,t){var n=e.dom
F(t,(function(e,t){!function(e,t,n){if(!(c(n)||l(n)||p(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")}(n,t,e)}))}function Se(e){return N(e.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{})}function Ce(e){return E.from(e.dom.parentNode).map(de.fromDom)}function be(e){return S(e.dom.childNodes,de.fromDom)}function Ne(e,t){var n=e.dom.childNodes
return E.from(n[t]).map(de.fromDom)}function Oe(e){return Ne(e,0)}function Le(e){return Ne(e,e.dom.childNodes.length-1)}function Te(e,t){Ce(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))}function De(e,t){e.dom.appendChild(t.dom)}function xe(e,t){C(t,(function(t){De(e,t)}))}function Ae(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)}function we(e){return de.fromDom(e.dom.cloneNode(!0))}function ke(e,t){var n,r,o=(n=e,ye(r=de.fromTag(t),Se(n)),r)
return Te(e,o),xe(o,be(e)),Ae(e),o}function Ee(e){return function(t){return t&&t.nodeName.toLowerCase()===e}}function Ie(e){return function(t){return t&&e.test(t.nodeName)}}function Pe(e){return e&&3===e.nodeType}function Be(e,t){return t&&e.schema.getTextBlockElements()[t.nodeName]}function Re(e,t){return e&&e.nodeName in t}function Me(e,t,n){var r=e.isEmpty(t)
return!(n&&0<e.select("span[data-mce-type=bookmark]",t).length)&&r}function Ue(e,t){return e.isChildOf(t,e.getRoot())}function _e(e,t){var n,r,o,i,a=e.dom,s=e.schema.getBlockElements(),u=a.createFragment(),c=!1===(n=e.getParam("forced_root_block","p"))?"":!0===n?"p":n
if(c&&((o=a.create(c)).tagName===c.toUpperCase()&&a.setAttribs(o,e.getParam("forced_root_block_attrs",{})),Re(t.firstChild,s)||u.appendChild(o)),t)for(;r=t.firstChild;){var f=r.nodeName
i||"SPAN"===f&&"bookmark"===r.getAttribute("data-mce-type")||(i=!0),Re(r,s)?(u.appendChild(r),o=null):c?(o||(o=a.create(c),u.appendChild(o)),o.appendChild(r)):u.appendChild(r)}return c?i||o.appendChild(a.create("br",{"data-mce-bogus":"1"})):u.appendChild(a.create("br")),u}function $e(e){$t(e)&&ke(e,"dd")}function Fe(e,t){if(Pe(e))return{container:e,offset:t}
var n=le.getNode(e,t)
return Pe(n)?{container:n,offset:t>=e.childNodes.length?n.data.length:0}:n.previousSibling&&Pe(n.previousSibling)?{container:n.previousSibling,offset:n.previousSibling.data.length}:n.nextSibling&&Pe(n.nextSibling)?{container:n.nextSibling,offset:0}:{container:e,offset:t}}function He(e){var t=e.cloneRange(),n=Fe(e.startContainer,e.startOffset)
t.setStart(n.container,n.offset)
var r=Fe(e.endContainer,e.endOffset)
return t.setEnd(r.container,r.offset),t}function je(e,t){var n=t||e.selection.getStart(!0)
return e.dom.getParent(n,"OL,UL,DL",Ht(e,n))}function Ke(e){var t,n,r=e.selection.getSelectedBlocks()
return b((t=e,n=wt.map(r,(function(e){return t.dom.getParent(e,"li,dd,dt",Ht(t,e))||e})),Ft.unique(n)),Pt)}function Ve(e,t){return w(e.dom.getParents(t,"ol,ul",Ht(e,t)))}function We(e,t,n){return void 0===n&&(n=i),e.exists((function(e){return n(e,t)}))}function Qe(e,t,n){return e.isSome()&&t.isSome()?E.some(n(e.getOrDie(),t.getOrDie())):E.none()}function Xe(e,t,n){return e.fire("ListMutation",{action:t,element:n})}function qe(e,t){De(e.item,t.list)}function ze(e,t,n){var r=t.slice(0,n.depth)
return w(r).each((function(t){var r,o,i,a,s,u,c=(r=n.itemAttributes,o=n.content,ye(i=de.fromTag("li",e),r),xe(i,o),i)
De((a=t).list,c),a.item=c,u=n,he((s=t).list)!==u.listType&&(s.list=ke(s.list,u.listType)),ye(s.list,u.listAttributes)})),r}function Ye(e,t,n){var r,o=function(e,t,n){for(var r,o,i,a=[],s=0;s<n;s++)a.push((o=t.listType,De((i={list:de.fromTag(o,r=e),item:de.fromTag("li",r)}).list,i.item),i))
return a}(e,n,n.depth-t.length)
return function(e){for(var t=1;t<e.length;t++)qe(e[t-1],e[t])}(o),function(e,t){for(var n=0;n<e.length-1;n++)(function(e,t,n){if(!c(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
void 0!==e.style&&m(e.style.getPropertyValue)&&e.style.setProperty(t,n)})(e[n].item.dom,"list-style-type","none")
w(e).each((function(e){ye(e.list,t.listAttributes),ye(e.item,t.itemAttributes),xe(e.item,t.content)}))}(o,n),r=o,Qe(w(t),A(r),qe),t.concat(o)}function Ze(e){return function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}(e,"OL,UL")}function Ge(e){return Oe(e).exists(Ze)}function Je(e){return 0<e.depth}function et(e){return e.isSelected}function tt(e){return C(e,(function(t,r){function o(e){return e.depth===u&&!e.dirty}function i(e){return e.depth<u}var a,s,u
u=(a=e)[s=r].depth,O(D(a.slice(0,s)),o,i).orThunk((function(){return O(a.slice(s+1),o,i)})).fold((function(){var e,r,o,i,a,s
t.dirty&&(t.listAttributes=(e=t.listAttributes,o=function(e,t){return"start"!==t},i=r={},a=function(e,t){i[t]=e},s=n,F(e,(function(e,t){(o(0,t)?a:s)(e,t)})),r))}),(function(e){var n=e
t.listType=n.listType,t.listAttributes=B({},n.listAttributes)}))})),e}function nt(e,t,n,r){return Oe(r).filter(Ze).fold((function(){t.each((function(e){$(e.start,r)&&n.set(!0)}))
var o,i,a,s=(o=r,i=e,a=n.get(),Ce(o).filter(xt).map((function(e){return{depth:i,dirty:!1,isSelected:a,content:(n=be(t=o),S(Le(t).exists(Ze)?n.slice(0,-1):n,we)),itemAttributes:Se(o),listAttributes:Se(e),listType:he(e)}
var t,n})))
t.each((function(e){$(e.end,r)&&n.set(!1)}))
var u=Le(r).filter(Ze).map((function(r){return Kt(e,t,n,r)})).getOr([])
return s.toArray().concat(u)}),(function(r){return Kt(e,t,n,r)}))}function rt(e,t){return S(tt(t),(function(t){var n,r,o=(n=t.content,r=document.createDocumentFragment(),C(n,(function(e){r.appendChild(e.dom)})),de.fromDom(r))
return de.fromDom(_e(e,o.dom))}))}function ot(e,t){var n=tt(t),r=e.contentDocument
return A(N(n,(function(e,t){return(t.depth>e.length?Ye:ze)(r,e,t)}),[])).map((function(e){return e.list})).toArray()}function it(e,t){var n,r,o,i,s,u,c,f,d,l,m,p,g,h=S((i=Ve(o=r=e,o.selection.getStart()),s=b(o.selection.getSelectedBlocks(),Et),u=i.toArray().concat(s),jt(r,u)),de.fromDom),v=S(b(Ke(e),Bt),de.fromDom),y=!1
return(h.length||v.length)&&(n=e.selection.getBookmark(),f=t,C((d=h,g=S(Ke(c=e),de.fromDom),l=Qe(L(g,a(Ge)),L(D(g),a(Ge)),(function(e,t){return{start:e,end:t}})),m=!1,p={get:function(){return m},set:function(e){m=e}},S(d,(function(e){return{sourceList:e,entries:Kt(0,l,p,e)}}))),(function(e){(function(e,t){C(b(e,et),(function(e){return function(e){switch(t){case"Indent":e.depth++
break
case"Outdent":e.depth--
break
case"Flatten":e.depth=0}e.dirty=!0}(e),0}))})(e.entries,f)
var t,n,r=(t=c,T(function(e,t){if(0===e.length)return[]
for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var s=e[i],u=t(s)
u!==n&&(r.push(o),o=[]),n=u,o.push(s)}return 0!==o.length&&r.push(o),r}(e.entries,Je),(function(e){return(A(e).exists(Je)?ot:rt)(t,e)})))
C(r,(function(e){Xe(c,"Indent"===f?"IndentList":"OutdentList",e.dom)})),n=e.sourceList,C(r,(function(e){Te(n,e)})),Ae(e.sourceList)})),function(e,t,n){C(n,"Indent"===t?$e:function(t){return n=e,_t(r=t)?ke(r,"dt"):$t(r)&&Ce(r).each((function(e){return function(e,t,n){var r=Ut.select('span[data-mce-type="bookmark"]',t),o=_e(e,n),i=Ut.createRng()
i.setStartAfter(n),i.setEndAfter(t)
for(var a,s=i.extractContents(),u=s.firstChild;u;u=u.firstChild)if("LI"===u.nodeName&&e.dom.isEmpty(u)){Ut.remove(u)
break}e.dom.isEmpty(s)||Ut.insertAfter(s,t),Ut.insertAfter(o,t),Me(e.dom,n.parentNode)&&(a=n.parentNode,wt.each(r,(function(e){a.parentNode.insertBefore(e,n.parentNode)})),Ut.remove(a)),Ut.remove(n),Me(e.dom,t)&&Ut.remove(t)}(n,e.dom,r.dom)})),0
var n,r})}(e,t,v),e.selection.moveToBookmark(n),e.selection.setRng(He(e.selection.getRng())),e.nodeChanged(),y=!0),y}function at(e){return it(e,"Indent")}function st(e){return it(e,"Outdent")}function ut(e){return it(e,"Flatten")}function ct(e){function t(t){var r,o=e[t?"startContainer":"endContainer"],i=e[t?"startOffset":"endOffset"]
1===o.nodeType&&(r=Wt.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(i=Math.min(i,o.childNodes.length-1),t?o.insertBefore(r,o.childNodes[i]):Wt.insertAfter(r,o.childNodes[i])):o.appendChild(r),o=r,i=0),n[t?"startContainer":"endContainer"]=o,n[t?"startOffset":"endOffset"]=i}var n={}
return t(!0),e.collapsed||t(),n}function ft(e){function t(t){var n,r=n=e[t?"startContainer":"endContainer"],o=e[t?"startOffset":"endOffset"]
r&&(1===r.nodeType&&(o=function(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t===e)return n
1===t.nodeType&&"bookmark"===t.getAttribute("data-mce-type")||n++,t=t.nextSibling}return-1}(r),r=r.parentNode,Wt.remove(n),!r.hasChildNodes()&&Wt.isBlock(r)&&r.appendChild(Wt.create("br"))),e[t?"startContainer":"endContainer"]=r,e[t?"startOffset":"endOffset"]=o)}t(!0),t()
var n=Wt.createRng()
return n.setStart(e.startContainer,e.startOffset),e.endContainer&&n.setEnd(e.endContainer,e.endOffset),He(n)}function dt(e){switch(e){case"UL":return"ToggleUlList"
case"OL":return"ToggleOlList"
case"DL":return"ToggleDLList"}}function lt(e){return/\btox\-/.test(e.className)}function mt(e,t,n){function r(e){var r=O(e.parents,kt,Rt).filter((function(e){return e.nodeName===t&&!lt(e)})).isSome()
n(r)}return r({parents:e.dom.getParents(e.selection.getNode())}),e.on("NodeChange",r),function(){return e.off("NodeChange",r)}}function pt(e,t){wt.each(t,(function(t,n){e.setAttribute(n,t)}))}function gt(e,t,n){var r,o,i,a=n["list-style-type"]||null
e.setStyle(t,"list-style-type",a),r=e,pt(o=t,(i=n)["list-attributes"]),wt.each(r.select("li",o),(function(e){pt(e,i["list-item-attributes"])}))}function ht(e,t,n,r){var o=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"]
for(1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!n&&Mt(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(Be(e,o))return o
if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o
o=o.parentNode}return o}function vt(e,t,n){var r,o,i=e.selection.getRng(),a="LI",s=Ht(e,e.selection.getStart(!0)),u=e.dom
"false"!==u.getContentEditable(e.selection.getNode())&&("DL"===(t=t.toUpperCase())&&(a="DT"),r=ct(i),o=function(e,t,n){for(var r,o=[],i=e.dom,a=ht(e,t,!0,n),s=ht(e,t,!1,n),u=[],c=a;c&&(u.push(c),c!==s);c=c.nextSibling);return wt.each(u,(function(t){if(Be(e,t))return o.push(t),void(r=null)
if(i.isBlock(t)||Mt(t))return Mt(t)&&i.remove(t),void(r=null)
var a=t.nextSibling
Vt.isBookmarkNode(t)&&(kt(a)||Be(e,a)||!a&&t.parentNode===n)?r=null:(r||(r=i.create("p"),t.parentNode.insertBefore(r,t),o.push(r)),r.appendChild(t))})),o}(e,i,s),wt.each(o,(function(r){var o,i,s,c,f,d=r.previousSibling,l=r.parentNode
Pt(l)||(d&&kt(d)&&d.nodeName===t&&(c=n,u.getStyle(d,"list-style-type")===(f=null===(f=c?c["list-style-type"]:"")?"":f))?(o=d,r=u.rename(r,a),d.appendChild(r)):(o=u.create(t),r.parentNode.insertBefore(o,r),o.appendChild(r),r=u.rename(r,a)),i=u,s=r,wt.each(["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],(function(e){var t
return i.setStyle(s,((t={})[e]="",t))})),gt(u,o,n),Qt(e.dom,o))})),e.selection.setRng(ft(r)))}function yt(e,t,n){return a=n,(i=t)&&a&&kt(i)&&i.nodeName===a.nodeName&&(o=n,(r=e).getStyle(t,"list-style-type",!0)===r.getStyle(o,"list-style-type",!0))&&t.className===n.className
var r,o,i,a}function St(e,t,n){var r,o,i,a,s,u,c,d,l,m,p,g,h,v,y,S,C,N=je(e),O=(d=je(c=e),l=c.selection.getSelectedBlocks(),d&&1===l.length&&l[0]===d?b(d.querySelectorAll("ol,ul,dl"),kt):b(l,(function(e){return kt(e)&&d!==e}))),L=f(n)?n:{}
0<O.length?(m=e,g=O,h=t,v=L,(C=kt(p=N))&&p.nodeName===h&&!Xt(v)?ut(m):(vt(m,h,v),y=ct(m.selection.getRng()),S=C?function(e,t){for(var n,r=0,o=t.length;r<o;r++)!n&&r in t||((n=n||Array.prototype.slice.call(t,0,r))[r]=t[r])
return e.concat(n||Array.prototype.slice.call(t))}([p],g):g,wt.each(S,(function(e){var t,n,r=m,o=h,i=v;(t=e).nodeName!==o?(n=r.dom.rename(t,o),gt(r.dom,n,i),Xe(r,dt(o),n)):(gt(r.dom,t,i),Xe(r,dt(o),t))})),m.selection.setRng(ft(y)))):(i=t,a=L,(o=N)!==(r=e).getBody()&&(o?o.nodeName!==i||Xt(a)||lt(o)?(s=ct(r.selection.getRng()),gt(r.dom,o,a),u=r.dom.rename(o,i),Qt(r.dom,u),r.selection.setRng(ft(s)),vt(r,i,a),Xe(r,dt(i),u)):ut(r):(vt(r,i,a),Xe(r,dt(i),o))))}function Ct(e,t,n,r){var o=t.startContainer,i=t.startOffset
if(Pe(o)&&(n?i<o.data.length:0<i))return o
var a=e.schema.getNonEmptyElements()
1===o.nodeType&&(o=le.getNode(o,i))
var s,u,c=new me(o,r)
for(n&&(s=e.dom,Mt(u=o)&&s.isBlock(u.nextSibling)&&!Mt(u.previousSibling)&&c.next());o=c[n?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o
if(a[o.nodeName])return o
if(Pe(o)&&0<o.data.length)return o}}function bt(e,t){var n=t.childNodes
return 1===n.length&&!kt(n[0])&&e.isBlock(n[0])}function Nt(e,t,n){var r,o,i,a=t.parentNode
Ue(e,t)&&Ue(e,n)&&(kt(n.lastChild)&&(r=n.lastChild),a===n.lastChild&&Mt(a.previousSibling)&&e.remove(a.previousSibling),(o=n.lastChild)&&Mt(o)&&t.hasChildNodes()&&e.remove(o),Me(e,n,!0)&&e.$(n).empty(),function(e,t,n){var r,o,i,a=bt(e,n)?n.firstChild:n
if(bt(o=e,i=t)&&o.remove(i.firstChild,!0),!Me(e,t,!0))for(;r=t.firstChild;)a.appendChild(r)}(e,t,n),r&&n.appendChild(r),i=function(e,t){return fe().browser.isIE()?(n=e.dom,r=t.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(n.compareDocumentPosition(r)&o)):(i=e.dom)!==(a=t.dom)&&i.contains(a)
var n,r,o,i,a}(de.fromDom(n),de.fromDom(t))?e.getParents(t,kt,n):[],e.remove(t),C(i,(function(t){Me(e,t)&&t!==e.getRoot()&&e.remove(t)})))}function Ot(e,t){return e.selection.isCollapsed()?function(e,t){var n=e.dom,r=e.selection,o=r.getStart(),i=Ht(e,o),a=n.getParent(r.getStart(),"LI",i)
if(a){var s=a.parentNode
if(s===e.getBody()&&Me(n,s))return 1
var u=He(r.getRng()),c=n.getParent(Ct(e,u,t,i),"LI",i)
if(c&&c!==a)return e.undoManager.transact((function(){var n,r,o,i,s,f,d,l,m
t?(r=u,o=c,i=a,(m=(n=e).dom).isEmpty(i)?(d=o,(f=n).dom.$(l=i).empty(),Nt(f.dom,d,l),f.selection.setCursorLocation(l,0)):(s=ct(r),Nt(m,o,i),n.selection.setRng(ft(s)))):a.parentNode.firstChild===a?st(e):function(e,t,n){var r=ct(u)
Nt(e.dom,t,n)
var o=ft(r)
e.selection.setRng(o)}(e,a,c)})),1
if(!c&&!t&&0===u.startOffset&&0===u.endOffset)return e.undoManager.transact((function(){ut(e)})),1}}(i=e,a=t)||function(e,t){var n=e.dom,r=e.selection.getStart(),o=Ht(e,r),i=n.getParent(r,n.isBlock,o)
if(i&&n.isEmpty(i)){var a=He(e.selection.getRng()),s=n.getParent(Ct(e,a,t,o),"LI",o)
if(s)return e.undoManager.transact((function(){var r,a=i,u=(r=n).getParent(a.parentNode,r.isBlock,o)
r.remove(a),u&&r.isEmpty(u)&&r.remove(u),Qt(n,s.parentNode),e.selection.select(s,!0),e.selection.collapse(t)})),1}}(i,a):(r=(n=e).selection.getStart(),o=Ht(n,r),(n.dom.getParent(r,"LI,DT,DD",o)||0<Ke(n).length)&&(n.undoManager.transact((function(){var e,t,r
n.execCommand("Delete"),e=n.dom,t=n.getBody(),r=wt.grep(e.select("ol,ul",t)),wt.each(r,(function(t){var n,r,o,i=e
"LI"===(o=(n=t).parentNode).nodeName&&o.firstChild===n&&((r=o.previousSibling)&&"LI"===r.nodeName?(r.appendChild(n),Me(i,o)&&qt.remove(o)):qt.setStyle(o,"listStyleType","none")),kt(o)&&(r=o.previousSibling)&&"LI"===r.nodeName&&r.appendChild(n)}))})),1))
var n,r,o,i,a}function Lt(e){return N(S(D(Z(e).split("")),(function(e,t){var n=e.toUpperCase().charCodeAt(0)-"A".charCodeAt(0)+1
return Math.pow(26,t)*n})),(function(e,t){return e+t}),0)}function Tt(e,t){return function(){var n=je(e)
return n&&n.nodeName===t}}function Dt(e){e.addCommand("mceListProps",(function(){var t,n,r,o
o=je(t=e),It(o)&&t.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:(n={start:t.dom.getAttrib(o,"start","1"),listStyleType:E.some(t.dom.getStyle(o,"list-style-type"))},r=parseInt(n.start,10),We(n.listStyleType,"upper-alpha")?zt(r):We(n.listStyleType,"lower-alpha")?zt(r).toLowerCase():n.start)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(e){(function(e){switch(/^[0-9]+$/.test(t=e)?2:/^[A-Z]+$/.test(t)?0:/^[a-z]+$/.test(t)?1:0<t.length?4:3){case 2:return E.some({listStyleType:E.none(),start:e})
case 0:return E.some({listStyleType:E.some("upper-alpha"),start:Lt(e).toString()})
case 1:return E.some({listStyleType:E.some("lower-alpha"),start:Lt(e).toString()})
case 3:return E.some({listStyleType:E.none(),start:""})
case 4:return E.none()}var t})(e.getData().start).each((function(e){t.execCommand("mceListUpdate",!1,{attrs:{start:"1"===e.start?"":e.start},styles:{"list-style-type":e.listStyleType.getOr("")}})})),e.close()}})}))}function xt(e){return 1===e.dom.nodeType}"undefined"!=typeof window||Function("return this;")()
var At=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),wt=tinymce.util.Tools.resolve("tinymce.util.Tools"),kt=Ie(/^(OL|UL|DL)$/),Et=Ie(/^(OL|UL)$/),It=Ee("ol"),Pt=Ie(/^(LI|DT|DD)$/),Bt=Ie(/^(DT|DD)$/),Rt=Ie(/^(TH|TD)$/),Mt=Ee("br"),Ut=At.DOM,_t=ve("dd"),$t=ve("dt"),Ft=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),Ht=function(e,t){var n=e.dom.getParents(t,"TD,TH")
return 0<n.length?n[0]:e.getBody()},jt=function(e,t){var n=S(t,(function(t){return Ve(e,t).getOr(t)}))
return Ft.unique(n)},Kt=function(e,t,n,r){return T(be(r),(function(r){return(Ze(r)?Kt:nt)(e+1,t,n,r)}))},Vt=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),Wt=At.DOM,Qt=function(e,t){var n,r=t.nextSibling
if(yt(e,t,r)){for(;n=r.firstChild;)t.appendChild(n)
e.remove(r)}if(yt(e,t,r=t.previousSibling)){for(;n=r.lastChild;)t.insertBefore(n,t.firstChild)
e.remove(r)}},Xt=function(e){return"list-style-type"in e},qt=At.DOM,zt=function(e){if(--e<0)return""
var t=e%26,n=Math.floor(e/26)
return zt(n)+String.fromCharCode("A".charCodeAt(0)+t)}
u.add("lists",(function(e){var t,n,r,o,i,a,s,u
return!1===e.hasPlugin("rtc",!0)?((a=e).getParam("lists_indent_on_tab",!0)&&(s=a).on("keydown",(function(e){e.keyCode!==pe.TAB||pe.metaKeyPressed(e)||s.undoManager.transact((function(){(e.shiftKey?st:at)(s)&&e.preventDefault()}))})),(u=a).on("keydown",(function(e){e.keyCode===pe.BACKSPACE?Ot(u,!1)&&e.preventDefault():e.keyCode===pe.DELETE&&Ot(u,!0)&&e.preventDefault()})),(i=e).on("BeforeExecCommand",(function(e){var t=e.command.toLowerCase()
"indent"===t?at(i):"outdent"===t&&st(i)})),i.addCommand("InsertUnorderedList",(function(e,t){St(i,"UL",t)})),i.addCommand("InsertOrderedList",(function(e,t){St(i,"OL",t)})),i.addCommand("InsertDefinitionList",(function(e,t){St(i,"DL",t)})),i.addCommand("RemoveList",(function(){ut(i)})),Dt(i),i.addCommand("mceListUpdate",(function(e,t){var n,r,o
f(t)&&(r=t,o=je(n=i),n.undoManager.transact((function(){f(r.styles)&&n.dom.setStyles(o,r.styles),f(r.attrs)&&F(r.attrs,(function(e,t){return n.dom.setAttrib(o,t,e)}))})))})),i.addQueryStateHandler("InsertUnorderedList",Tt(i,"UL")),i.addQueryStateHandler("InsertOrderedList",Tt(i,"OL")),i.addQueryStateHandler("InsertDefinitionList",Tt(i,"DL"))):Dt(e),(o=e).hasPlugin("advlist")||(o.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:c("InsertOrderedList"),onSetup:function(e){return mt(o,"OL",e.setActive)}}),o.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:c("InsertUnorderedList"),onSetup:function(e){return mt(o,"UL",e.setActive)}})),n={text:"List properties...",icon:"ordered-list",onAction:function(){return t.execCommand("mceListProps")},onSetup:function(e){return mt(t,"OL",(function(t){return e.setDisabled(!t)}))}},(t=e).ui.registry.addMenuItem("listprops",n),t.ui.registry.addContextMenu("lists",{update:function(e){var n=je(t,e)
return It(n)?["listprops"]:[]}}),r=e,{backspaceDelete:function(e){Ot(r,e)}}
function c(e){return function(){return o.execCommand(e)}}}))}()
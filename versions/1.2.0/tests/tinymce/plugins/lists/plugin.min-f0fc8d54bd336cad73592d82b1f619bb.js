!function(){"use strict"
var e,t,n,r,o,i,a=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){},s=function(e){return function(){return e}},c=function(e){return function(t){return!e(t)}},f=s(!1),d=s(!0),l=function(){return m},m=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:f,isSome:f,isNone:d,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:n,orThunk:t,map:l,each:u,bind:l,exists:f,forall:d,filter:l,equals:e,equals_:e,toArray:function(){return[]},toString:s("none()")}),p=function(e){var t=s(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:d,isNone:f,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return p(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:m},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(f,(function(t){return n(e,t)}))}}
return o},g={some:p,none:l,from:function(e){return null==e?m:p(e)}},v=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},h=function(e){return function(t){return typeof t===e}},y=v("string"),S=v("array"),b=h("boolean"),C=h("function"),O=h("number"),N=Array.prototype.slice,L=Array.prototype.push,T=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},k=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},x=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r]
t(i,r)&&n.push(i)}return n},A=function(e,t,n){return k(e,(function(e){n=t(n,e)})),n},D=function(e,t,n){for(var r=0,o=e.length;r<o;r++){var i=e[r]
if(t(i,r))return g.some(i)
if(n(i,r))break}return g.none()},w=function(e,t){return D(e,t,f)},E=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!S(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
L.apply(t,e[n])}return t}(T(e,t))},B=function(e){var t=N.call(e,0)
return t.reverse(),t},I=function(e,t){return 0<=t&&t<e.length?g.some(e[t]):g.none()},P=function(e){return I(e,0)},R=function(e){return I(e,e.length-1)},M=function(){return(M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},U=function(){return _(0,0)},_=function(e,t){return{major:e,minor:t}},F=function(e,t){var n=String(t).toLowerCase()
return 0===e.length?U():function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(r.test(t))return r}}(e,t)
if(!n)return{major:0,minor:0}
var r=function(e){return Number(t.replace(n,"$"+e))}
return _(r(1),r(2))}(e,n)},$=U,j=function(e,t){var n=String(t).toLowerCase()
return w(e,(function(e){return e.search(n)}))},q=function(e,t){return-1!==e.indexOf(t)},H=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,K=function(e){return function(t){return q(t,e)}},V=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return q(e,"edge/")&&q(e,"chrome")&&q(e,"safari")&&q(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,H],search:function(e){return q(e,"chrome")&&!q(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return q(e,"msie")||q(e,"trident")}},{name:"Opera",versionRegexes:[H,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:K("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:K("firefox")},{name:"Safari",versionRegexes:[H,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(q(e,"safari")||q(e,"mobile/"))&&q(e,"applewebkit")}}],W=[{name:"Windows",search:K("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return q(e,"iphone")||q(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:K("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:K("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:K("linux"),versionRegexes:[]},{name:"Solaris",search:K("sunos"),versionRegexes:[]},{name:"FreeBSD",search:K("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:K("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Q={browsers:s(V),oses:s(W)},X="Edge",z="Firefox",Y=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isEdge:r(X),isChrome:r("Chrome"),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r(z),isSafari:r("Safari")}},G=function(){return Y({current:void 0,version:$()})},J=Y,Z=(s(X),s("Chrome"),s("IE"),s("Opera"),s(z),s("Safari"),"Windows"),ee="Android",te="Solaris",ne="FreeBSD",re="ChromeOS",oe=function(e){var t=e.current,n=e.version,r=function(e){return function(){return t===e}}
return{current:t,version:n,isWindows:r(Z),isiOS:r("iOS"),isAndroid:r(ee),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(te),isFreeBSD:r(ne),isChromeOS:r(re)}},ie=function(){return oe({current:void 0,version:$()})},ae=oe,ue=(s(Z),s("iOS"),s(ee),s("Linux"),s("OSX"),s(te),s(ne),s(re),function(e,t){var n,r,o,i,a,u,c,f,d,l,m,p,g=Q.browsers(),v=Q.oses(),h=function(e,t){return j(e,t).map((function(e){var n=F(e.versionRegexes,t)
return{current:e.name,version:n}}))}(g,e).fold(G,J),y=function(e,t){return j(e,t).map((function(e){var n=F(e.versionRegexes,t)
return{current:e.name,version:n}}))}(v,e).fold(ie,ae)
return{browser:h,os:y,deviceType:(r=h,o=e,i=t,a=(n=y).isiOS()&&!0===/ipad/i.test(o),u=n.isiOS()&&!a,c=n.isiOS()||n.isAndroid(),f=c||i("(pointer:coarse)"),d=a||!u&&c&&i("(min-device-width:768px)"),l=u||c&&!d,m=r.isSafari()&&n.isiOS()&&!1===/safari/i.test(o),p=!l&&!d&&!m,{isiPad:s(a),isiPhone:s(u),isTablet:s(d),isPhone:s(l),isTouch:s(f),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:s(m),isDesktop:s(p)})}}),se=function(e){return window.matchMedia(e).matches},ce=(i=!(r=function(){return ue(navigator.userAgent,se)}),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return i||(i=!0,o=r.apply(null,e)),o}),fe=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},de=function(e,t){var n=(t||document).createElement(e)
return fe(n)},le=fe,me=function(e,t){return e.dom===t.dom},pe=function(e,t){return ce().browser.isIE()?function(e,t){return n=e.dom,r=t.dom,o=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(n.compareDocumentPosition(r)&o)
var n,r,o}(e,t):(n=t,(r=e.dom)!==(o=n.dom)&&r.contains(o))
var n,r,o},ge=function(e,t){var n=e.dom
if(1!==n.nodeType)return!1
var r=n
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")},ve=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),he=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),ye=tinymce.util.Tools.resolve("tinymce.util.VK"),Se=Object.keys,be=function(e,t){for(var n=Se(e),r=0,o=n.length;r<o;r++){var i=n[r]
t(e[i],i)}},Ce=("undefined"!=typeof window||Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Oe=(1,function(e){return 1===e.dom.nodeType}),Ne=function(e,t){var n=e.dom
be(t,(function(e,t){!function(e,t,n){if(!(y(n)||b(n)||O(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")}(n,t,e)}))},Le=function(e){return A(e.dom.attributes,(function(e,t){return e[t.name]=t.value,e}),{})},Te=function(e){return g.from(e.dom.parentNode).map(le)},ke=function(e){return T(e.dom.childNodes,le)},xe=function(e,t){var n=e.dom.childNodes
return g.from(n[t]).map(le)},Ae=function(e){return xe(e,0)},De=function(e){return xe(e,e.dom.childNodes.length-1)},we=function(e,t){Te(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},Ee=function(e,t){e.dom.appendChild(t.dom)},Be=function(e,t){k(t,(function(t){Ee(e,t)}))},Ie=function(e){var t=e.dom
null!==t.parentNode&&t.parentNode.removeChild(t)},Pe=function(e){return!0,le(e.dom.cloneNode(true))},Re=function(e,t){var n,r,o,i=(n=e,r=de(t),o=Le(n),Ne(r,o),r)
we(e,i)
var a=ke(e)
return Be(i,a),Ie(e),i},Me=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Ue=tinymce.util.Tools.resolve("tinymce.util.Tools"),_e=function(e){return function(t){return t&&t.nodeName.toLowerCase()===e}},Fe=function(e){return function(t){return t&&e.test(t.nodeName)}},$e=function(e){return e&&3===e.nodeType},je=Fe(/^(OL|UL|DL)$/),qe=Fe(/^(OL|UL)$/),He=_e("ol"),Ke=Fe(/^(LI|DT|DD)$/),Ve=Fe(/^(DT|DD)$/),We=Fe(/^(TH|TD)$/),Qe=_e("br"),Xe=function(e,t){return t&&!!e.schema.getTextBlockElements()[t.nodeName]},ze=function(e,t){return e&&e.nodeName in t},Ye=function(e,t,n){var r=e.isEmpty(t)
return!(n&&0<e.select("span[data-mce-type=bookmark]",t).length)&&r},Ge=function(e,t){return e.isChildOf(t,e.getRoot())},Je=function(e,t){var n,r,o,i,a=e.dom,u=e.schema.getBlockElements(),s=a.createFragment(),c=!1===(n=e.getParam("forced_root_block","p"))?"":!0===n?"p":n
if(c&&((o=a.create(c)).tagName===c.toUpperCase()&&a.setAttribs(o,e.getParam("forced_root_block_attrs",{})),ze(t.firstChild,u)||s.appendChild(o)),t)for(;r=t.firstChild;){var f=r.nodeName
i||"SPAN"===f&&"bookmark"===r.getAttribute("data-mce-type")||(i=!0),ze(r,u)?(s.appendChild(r),o=null):c?(o||(o=a.create(c),s.appendChild(o)),o.appendChild(r)):s.appendChild(r)}return c?i||o.appendChild(a.create("br",{"data-mce-bogus":"1"})):s.appendChild(a.create("br")),s},Ze=Me.DOM,et=function(e){ge(e,"dt")&&Re(e,"dd")},tt=function(e,t){if($e(e))return{container:e,offset:t}
var n=ve.getNode(e,t)
return $e(n)?{container:n,offset:t>=e.childNodes.length?n.data.length:0}:n.previousSibling&&$e(n.previousSibling)?{container:n.previousSibling,offset:n.previousSibling.data.length}:n.nextSibling&&$e(n.nextSibling)?{container:n.nextSibling,offset:0}:{container:e,offset:t}},nt=function(e){var t=e.cloneRange(),n=tt(e.startContainer,e.startOffset)
t.setStart(n.container,n.offset)
var r=tt(e.endContainer,e.endOffset)
return t.setEnd(r.container,r.offset),t},rt=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),ot=function(e,t){var n=t||e.selection.getStart(!0)
return e.dom.getParent(n,"OL,UL,DL",at(e,n))},it=function(e){var t,n,r,o=e.selection.getSelectedBlocks()
return Ue.grep((t=e,n=o,r=Ue.map(n,(function(e){return t.dom.getParent(e,"li,dd,dt",at(t,e))||e})),rt.unique(r)),(function(e){return Ke(e)}))},at=function(e,t){var n=e.dom.getParents(t,"TD,TH")
return 0<n.length?n[0]:e.getBody()},ut=function(e,t){var n=e.dom.getParents(t,"ol,ul",at(e,t))
return R(n)},st=function(e,t){var n=T(t,(function(t){return ut(e,t).getOr(t)}))
return rt.unique(n)},ct=function(e,t,n){return e.isSome()&&t.isSome()?g.some(n(e.getOrDie(),t.getOrDie())):g.none()},ft=function(e,t,n){return e.fire("ListMutation",{action:t,element:n})},dt=function(e,t,n){if(!y(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n)
var r
void 0!==(r=e).style&&C(r.style.getPropertyValue)&&e.style.setProperty(t,n)},lt=function(e,t){Ee(e.item,t.list)},mt=function(e,t,n){var r=t.slice(0,n.depth)
return R(r).each((function(t){var r,o,i,a,u,s,c,f
s=(r=e,o=n.itemAttributes,i=n.content,a=de("li",r),Ne(a,o),Be(a,i),a),Ee((u=t).list,s),u.item=s,f=n,Ce((c=t).list)!==f.listType&&(c.list=Re(c.list,f.listType)),Ne(c.list,f.listAttributes)})),r},pt=function(e,t,n){var r,o=function(e,t,n){for(var r,o,i,a=[],u=0;u<n;u++)a.push((r=e,o=t.listType,i={list:de(o,r),item:de("li",r)},Ee(i.list,i.item),i))
return a}(e,n,n.depth-t.length)
return function(e){for(var t=1;t<e.length;t++)lt(e[t-1],e[t])}(o),function(e,t){for(var n,r=0;r<e.length-1;r++)n=e[r].item.dom,dt(n,"list-style-type","none")
R(e).each((function(e){Ne(e.list,t.listAttributes),Ne(e.item,t.itemAttributes),Be(e.item,t.content)}))}(o,n),r=o,ct(R(t),P(r),lt),t.concat(o)},gt=function(e){return ge(e,"OL,UL")},vt=function(e){return Ae(e).map(gt).getOr(!1)},ht=function(e){return 0<e.depth},yt=function(e){return e.isSelected},St=function(e){var t=ke(e),n=De(e).map(gt).getOr(!1)?t.slice(0,-1):t
return T(n,Pe)},bt=function(e){return k(e,(function(t,n){var r,o,i,a,s
i=(r=e)[o=n].depth,a=function(e){return e.depth===i&&!e.dirty},s=function(e){return e.depth<i},D(B(r.slice(0,o)),a,s).orThunk((function(){return D(r.slice(o+1),a,s)})).fold((function(){var e
t.dirty&&((e=t).listAttributes=function(e,t){var n,r,o,i,a={}
return n=t,i=a,r=function(e,t){i[t]=e},o=u,be(e,(function(e,t){(n(e,t)?r:o)(e,t)})),a}(e.listAttributes,(function(e,t){return"start"!==t})))}),(function(e){return r=e,(n=t).listType=r.listType,void(n.listAttributes=M({},r.listAttributes))
var n,r}))})),e},Ct=function(e,t,n,r){return Ae(r).filter(gt).fold((function(){t.each((function(e){me(e.start,r)&&n.set(!0)}))
var o,i,a,u=(o=r,i=e,a=n.get(),Te(o).filter(Oe).map((function(e){return{depth:i,dirty:!1,isSelected:a,content:St(o),itemAttributes:Le(o),listAttributes:Le(e),listType:Ce(e)}})))
t.each((function(e){me(e.end,r)&&n.set(!1)}))
var s=De(r).filter(gt).map((function(r){return Ot(e,t,n,r)})).getOr([])
return u.toArray().concat(s)}),(function(r){return Ot(e,t,n,r)}))},Ot=function(e,t,n,r){return E(ke(r),(function(r){return(gt(r)?Ot:Ct)(e+1,t,n,r)}))},Nt=function(e,t){var n=bt(t)
return T(n,(function(t){var n,r,o=(n=t.content,r=document.createDocumentFragment(),k(n,(function(e){r.appendChild(e.dom)})),le(r))
return le(Je(e,o.dom))}))},Lt=function(e,t){var n,r,o=bt(t)
return n=e.contentDocument,r=A(o,(function(e,t){return(t.depth>e.length?pt:mt)(n,e,t)}),[]),P(r).map((function(e){return e.list})).toArray()},Tt=function(e,t,n){var r,o=function(e,t){var n,r=(n=!1,{get:function(){return n},set:function(e){n=e}})
return T(e,(function(e){return{sourceList:e,entries:Ot(0,t,r,e)}}))}(t,(r=T(it(e),le),ct(w(r,c(vt)),w(B(r),c(vt)),(function(e,t){return{start:e,end:t}}))))
k(o,(function(t){var r,o
r=t.entries,o=n,k(x(r,yt),(function(e){return function(e,t){switch(e){case"Indent":t.depth++
break
case"Outdent":t.depth--
break
case"Flatten":t.depth=0}t.dirty=!0}(o,e),0}))
var i,a,u,s=(i=e,a=t.entries,E(function(e,t){if(0===e.length)return[]
for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var u=e[i],s=t(u)
s!==n&&(r.push(o),o=[]),n=s,o.push(u)}return 0!==o.length&&r.push(o),r}(a,ht),(function(e){return(P(e).map(ht).getOr(!1)?Lt:Nt)(i,e)})))
k(s,(function(t){ft(e,"Indent"===n?"IndentList":"OutdentList",t.dom)})),u=t.sourceList,k(s,(function(e){we(u,e)})),Ie(t.sourceList)}))},kt=function(e,t){var n,r,o=T(function(e){var t,n,r,o=(n=ut(t=e,t.selection.getStart()),r=x(t.selection.getSelectedBlocks(),qe),n.toArray().concat(r))
return st(e,o)}(e),le),i=T(x(it(e),Ve),le),a=!1
return(o.length||i.length)&&(n=e.selection.getBookmark(),Tt(e,o,t),r=e,k(i,"Indent"===t?et:function(e){return function(e,t){ge(t,"dd")?Re(t,"dt"):ge(t,"dt")&&Te(t).each((function(n){return function(e,t,n){var r=Ze.select('span[data-mce-type="bookmark"]',t),o=Je(e,n),i=Ze.createRng()
i.setStartAfter(n),i.setEndAfter(t)
for(var a,u=i.extractContents(),s=u.firstChild;s;s=s.firstChild)if("LI"===s.nodeName&&e.dom.isEmpty(s)){Ze.remove(s)
break}e.dom.isEmpty(u)||Ze.insertAfter(u,t),Ze.insertAfter(o,t),Ye(e.dom,n.parentNode)&&(a=n.parentNode,Ue.each(r,(function(e){a.parentNode.insertBefore(e,n.parentNode)})),Ze.remove(a)),Ze.remove(n),Ye(e.dom,t)&&Ze.remove(t)}(e,n.dom,t.dom)}))}(r,e),0}),e.selection.moveToBookmark(n),e.selection.setRng(nt(e.selection.getRng())),e.nodeChanged(),a=!0),a},xt=function(e){return kt(e,"Indent")},At=function(e){return kt(e,"Outdent")},Dt=function(e){return kt(e,"Flatten")},wt=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),Et=Me.DOM,Bt=function(e){var t={},n=function(n){var r,o=e[n?"startContainer":"endContainer"],i=e[n?"startOffset":"endOffset"]
1===o.nodeType&&(r=Et.create("span",{"data-mce-type":"bookmark"}),o.hasChildNodes()?(i=Math.min(i,o.childNodes.length-1),n?o.insertBefore(r,o.childNodes[i]):Et.insertAfter(r,o.childNodes[i])):o.appendChild(r),o=r,i=0),t[n?"startContainer":"endContainer"]=o,t[n?"startOffset":"endOffset"]=i}
return n(!0),e.collapsed||n(),t},It=function(e){function t(t){var n,r=n=e[t?"startContainer":"endContainer"],o=e[t?"startOffset":"endOffset"]
r&&(1===r.nodeType&&(o=function(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t===e)return n
1===t.nodeType&&"bookmark"===t.getAttribute("data-mce-type")||n++,t=t.nextSibling}return-1}(r),r=r.parentNode,Et.remove(n),!r.hasChildNodes()&&Et.isBlock(r)&&r.appendChild(Et.create("br"))),e[t?"startContainer":"endContainer"]=r,e[t?"startOffset":"endOffset"]=o)}t(!0),t()
var n=Et.createRng()
return n.setStart(e.startContainer,e.startOffset),e.endContainer&&n.setEnd(e.endContainer,e.endOffset),nt(n)},Pt=function(e){switch(e){case"UL":return"ToggleUlList"
case"OL":return"ToggleOlList"
case"DL":return"ToggleDLList"}},Rt=function(e){return/\btox\-/.test(e.className)},Mt=function(e,t,n){var r=function(e){var r=D(e.parents,je,We).filter((function(e){return e.nodeName===t&&!Rt(e)})).isSome()
n(r)},o=e.dom.getParents(e.selection.getNode())
return r({parents:o}),e.on("NodeChange",r),function(){return e.off("NodeChange",r)}},Ut=function(e,t){Ue.each(t,(function(t,n){e.setAttribute(n,t)}))},_t=function(e,t,n){var r,o,i,a,u,s,c
r=e,o=t,a=(i=n)["list-style-type"]?i["list-style-type"]:null,r.setStyle(o,"list-style-type",a),u=e,Ut(s=t,(c=n)["list-attributes"]),Ue.each(u.select("li",s),(function(e){Ut(e,c["list-item-attributes"])}))},Ft=function(e,t,n,r){var o=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"]
for(1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!n&&Qe(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(Xe(e,o))return o
if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o
o=o.parentNode}return o},$t=function(e,t,n){return s=n,(u=t)&&s&&je(u)&&u.nodeName===s.nodeName&&(i=t,a=n,(o=e).getStyle(i,"list-style-type",!0)===o.getStyle(a,"list-style-type",!0))&&(r=n,t.className===r.className)
var r,o,i,a,u,s},jt=function(e,t){var n,r=t.nextSibling
if($t(e,t,r)){for(;n=r.firstChild;)t.appendChild(n)
e.remove(r)}if(r=t.previousSibling,$t(e,t,r)){for(;n=r.lastChild;)t.insertBefore(n,t.firstChild)
e.remove(r)}},qt=function(e){return"list-style-type"in e},Ht=function(e,t,n){var r,o,i,a,u,s,c=ot(e),f=function(e){var t,n,r,o=ot(e),i=e.selection.getSelectedBlocks()
return r=i,(n=o)&&1===r.length&&r[0]===n?(t=o,Ue.grep(t.querySelectorAll("ol,ul,dl"),(function(e){return je(e)}))):Ue.grep(i,(function(e){return je(e)&&o!==e}))}(e)
n=n||{},c&&0<f.length?function(e,t,n,r,o){var i
t.nodeName!==r||qt(o)?(i=Bt(e.selection.getRng(!0)),Ue.each([t].concat(n),(function(t){var n,i,a,u,s
n=e,a=r,u=o,(i=t).nodeName!==a?(s=n.dom.rename(i,a),_t(n.dom,s,u),ft(n,Pt(a),s)):(_t(n.dom,i,u),ft(n,Pt(a),i))})),e.selection.setRng(It(i))):Dt(e)}(e,c,f,t,n):(i=t,a=n,(o=c)!==(r=e).getBody()&&(o?o.nodeName!==i||qt(a)||Rt(o)?(u=Bt(r.selection.getRng(!0)),_t(r.dom,o,a),s=r.dom.rename(o,i),jt(r.dom,s),r.selection.setRng(It(u)),ft(r,Pt(i),s)):Dt(r):(function(e,t,n){void 0===n&&(n={})
var r,o=e.selection.getRng(),i="LI",a=at(e,e.selection.getStart(!0)),u=e.dom
"false"!==u.getContentEditable(e.selection.getNode())&&("DL"===(t=t.toUpperCase())&&(i="DT"),r=Bt(o),Ue.each(function(e,t,n){for(var r,o=[],i=e.dom,a=Ft(e,t,!0,n),u=Ft(e,t,!1,n),s=[],c=a;c&&(s.push(c),c!==u);c=c.nextSibling);return Ue.each(s,(function(t){if(Xe(e,t))return o.push(t),void(r=null)
if(i.isBlock(t)||Qe(t))return Qe(t)&&i.remove(t),void(r=null)
var a=t.nextSibling
wt.isBookmarkNode(t)&&(Xe(e,a)||!a&&t.parentNode===n)?r=null:(r||(r=i.create("p"),t.parentNode.insertBefore(r,t),o.push(r)),r.appendChild(t))})),o}(e,o,a),(function(r){var o,a,s,c,f,d,l,m=r.previousSibling
m&&je(m)&&m.nodeName===t&&(a=m,s=n,u.getStyle(a,"list-style-type")===(c=null===(c=s?s["list-style-type"]:"")?"":c))?(o=m,r=u.rename(r,i),m.appendChild(r)):(o=u.create(t),r.parentNode.insertBefore(o,r),o.appendChild(r),r=u.rename(r,i)),f=u,d=r,l=["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],Ue.each(l,(function(e){var t
return f.setStyle(d,((t={})[e]="",t))})),_t(u,o,n),jt(e.dom,o)})),e.selection.setRng(It(r)))}(r,i,a),ft(r,Pt(i),o))))},Kt=Me.DOM,Vt=function(e,t,n,r){var o=t.startContainer,i=t.startOffset
if($e(o)&&(n?i<o.data.length:0<i))return o
var a=e.schema.getNonEmptyElements()
1===o.nodeType&&(o=ve.getNode(o,i))
var u,s,c=new he(o,r)
for(n&&(u=e.dom,Qe(s=o)&&u.isBlock(s.nextSibling)&&!Qe(s.previousSibling)&&c.next());o=c[n?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o
if(a[o.nodeName])return o
if($e(o)&&0<o.data.length)return o}},Wt=function(e,t){var n=t.childNodes
return 1===n.length&&!je(n[0])&&e.isBlock(n[0])},Qt=function(e,t,n){var r,o,i,a=t.parentNode
Ge(e,t)&&Ge(e,n)&&(je(n.lastChild)&&(r=n.lastChild),a===n.lastChild&&Qe(a.previousSibling)&&e.remove(a.previousSibling),(o=n.lastChild)&&Qe(o)&&t.hasChildNodes()&&e.remove(o),Ye(e,n,!0)&&e.$(n).empty(),function(e,t,n){var r,o,i,a=Wt(e,n)?n.firstChild:n
if(Wt(o=e,i=t)&&o.remove(i.firstChild,!0),!Ye(e,t,!0))for(;r=t.firstChild;)a.appendChild(r)}(e,t,n),r&&n.appendChild(r),i=pe(le(n),le(t))?e.getParents(t,je,n):[],e.remove(t),k(i,(function(t){Ye(e,t)&&t!==e.getRoot()&&e.remove(t)})))},Xt=function(e,t){var n=e.dom,r=e.selection,o=r.getStart(),i=at(e,o),a=n.getParent(r.getStart(),"LI",i)
if(a){var u=a.parentNode
if(u===e.getBody()&&Ye(n,u))return!0
var s=nt(r.getRng()),c=n.getParent(Vt(e,s,t,i),"LI",i)
if(c&&c!==a)return e.undoManager.transact((function(){var n
t?function(e,t,n,r){var o,i,a,u,s=e.dom
s.isEmpty(r)?(a=n,u=r,(i=e).dom.$(u).empty(),Qt(i.dom,a,u),i.selection.setCursorLocation(u)):(o=Bt(t),Qt(s,n,r),e.selection.setRng(It(o)))}(e,s,c,a):(n=a).parentNode.firstChild===n?At(e):function(e,t,n,r){var o=Bt(t)
Qt(e.dom,n,r)
var i=It(o)
e.selection.setRng(i)}(e,s,a,c)})),!0
if(!c&&!t&&0===s.startOffset&&0===s.endOffset)return e.undoManager.transact((function(){Dt(e)})),!0}return!1},zt=function(e,t){return e.selection.isCollapsed()?Xt(i=e,a=t)||function(e,t){var n=e.dom,r=e.selection.getStart(),o=at(e,r),i=n.getParent(r,n.isBlock,o)
if(i&&n.isEmpty(i)){var a=nt(e.selection.getRng()),u=n.getParent(Vt(e,a,t,o),"LI",o)
if(u)return e.undoManager.transact((function(){var r,a,s,c
a=i,s=o,c=(r=n).getParent(a.parentNode,r.isBlock,s),r.remove(a),c&&r.isEmpty(c)&&r.remove(c),jt(n,u.parentNode),e.selection.select(u,!0),e.selection.collapse(t)})),!0}return!1}(i,a):(r=(n=e).selection.getStart(),o=at(n,r),!!(n.dom.getParent(r,"LI,DT,DD",o)||0<it(n).length)&&(n.undoManager.transact((function(){n.execCommand("Delete"),function(e,t){Ue.each(Ue.grep(e.select("ol,ul",t)),(function(t){var n,r,o,i
n=e,"LI"===(i=(r=t).parentNode).nodeName&&i.firstChild===r&&((o=i.previousSibling)&&"LI"===o.nodeName?(o.appendChild(r),Ye(n,i)&&Kt.remove(i)):Kt.setStyle(i,"listStyleType","none")),je(i)&&(o=i.previousSibling)&&"LI"===o.nodeName&&o.appendChild(r)}))}(n.dom,n.getBody())})),!0))
var n,r,o,i,a},Yt=function(e){var t=e.dom,n=ot(e)
He(n)&&e.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:t.getAttrib(n,"start")||"1"},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(n){var r=n.getData()
e.undoManager.transact((function(){t.setAttrib(ot(e),"start","1"===r.start?"":r.start)})),n.close()}})},Gt=function(e,t){return function(){var n=e.dom.getParent(e.selection.getStart(),"UL,OL,DL")
return n&&n.nodeName===t}}
a.add("lists",(function(e){var t,n,r,o,i,a
return!1===e.hasPlugin("rtc",!0)&&(function(e){var t,n
e.getParam("lists_indent_on_tab",!0)&&(t=e).on("keydown",(function(e){e.keyCode!==ye.TAB||ye.metaKeyPressed(e)||t.undoManager.transact((function(){(e.shiftKey?At:xt)(t)&&e.preventDefault()}))})),(n=e).on("keydown",(function(e){e.keyCode===ye.BACKSPACE?zt(n,!1)&&e.preventDefault():e.keyCode===ye.DELETE&&zt(n,!0)&&e.preventDefault()}))}(e),(t=e).on("BeforeExecCommand",(function(e){var n=e.command.toLowerCase()
"indent"===n?xt(t):"outdent"===n&&At(t)})),t.addCommand("InsertUnorderedList",(function(e,n){Ht(t,"UL",n)})),t.addCommand("InsertOrderedList",(function(e,n){Ht(t,"OL",n)})),t.addCommand("InsertDefinitionList",(function(e,n){Ht(t,"DL",n)})),t.addCommand("RemoveList",(function(){Dt(t)})),t.addCommand("mceListProps",(function(){Yt(t)})),t.addQueryStateHandler("InsertUnorderedList",Gt(t,"UL")),t.addQueryStateHandler("InsertOrderedList",Gt(t,"OL")),t.addQueryStateHandler("InsertDefinitionList",Gt(t,"DL"))),r=function(e){return function(){return n.execCommand(e)}},(n=e).hasPlugin("advlist")||(n.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:r("InsertOrderedList"),onSetup:function(e){return Mt(n,"OL",e.setActive)}}),n.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:r("InsertUnorderedList"),onSetup:function(e){return Mt(n,"UL",e.setActive)}})),i={text:"List properties...",icon:"ordered-list",onAction:function(){return Yt(o)},onSetup:function(e){return Mt(o,"OL",(function(t){return e.setDisabled(!t)}))}},(o=e).ui.registry.addMenuItem("listprops",i),o.ui.registry.addContextMenu("lists",{update:function(e){var t=ot(o,e)
return He(t)?["listprops"]:[]}}),a=e,{backspaceDelete:function(e){zt(a,e)}}}))}()
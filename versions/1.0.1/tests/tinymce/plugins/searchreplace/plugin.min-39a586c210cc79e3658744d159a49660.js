!function(){"use strict"
var e,t,n,r,o,i=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},a=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},u=function(e){return function(){return e}},l=u(!1),s=u(!0),f=u("[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"),d=function(){return m},m=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:l,isSome:l,isNone:s,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(void 0),or:n,orThunk:t,map:d,each:function(){},bind:d,exists:l,forall:s,filter:d,equals:e,equals_:e,toArray:function(){return[]},toString:u("none()")}),h=function(e){var t=u(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:s,isNone:l,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return h(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:m},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(l,(function(t){return n(e,t)}))}}
return o},g={some:h,none:d,from:function(e){return null==e?m:h(e)}},p=f,v=tinymce.util.Tools.resolve("tinymce.util.Tools"),y=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},x=function(e){return function(t){return typeof t===e}},b=y("string"),w=y("array"),O=x("boolean"),C=x("number"),k=Array.prototype.slice,E=Array.prototype.push,N=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},T=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},S=function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n)},A=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!w(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
E.apply(t,e[n])}return t}(N(e,t))},B=Object.hasOwnProperty,I=function(e,t){return B.call(e,t)},M=("undefined"!=typeof window||Function("return this;")(),3,function(e){return 3===e.dom.nodeType}),F=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},P=F,R=function(e,t){return{element:e,offset:t}},D=function(e,t){var n;(function(e,t){var n;(n=e,g.from(n.dom.parentNode).map(P)).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))})(e,t),n=e,t.dom.appendChild(n.dom)},W=(r=M,"text",{get:function(e){if(!r(e))throw new Error("Can only get text value of a text node")
return o(e).getOr("")},getOption:o=function(e){return r(e)?g.from(e.dom.nodeValue):g.none()},set:function(e,t){if(!r(e))throw new Error("Can only set raw text value of a text node")
e.dom.nodeValue=t}}),j=function(e){return W.get(e)},q=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),V=function(e,t){return e.isBlock(t)||I(e.schema.getShortEndedElements(),t.nodeName)},_=function(e,t){return"false"===e.getContentEditable(t)},U=function(e,t){return!e.isBlock(t)&&I(e.schema.getWhiteSpaceElements(),t.nodeName)},$=function(e,t){return function(e,t){var n=N(e.dom.childNodes,P)
return 0<n.length&&t<n.length?R(n[t],0):R(e,t)}(P(e),t)},z=function(e,t,n,r,o,i){void 0===i&&(i=!0)
for(var a=i?t(!1):n;a;){var c=_(e,a)
if(c||U(e,a)){if(c?r.cef(a):r.boundary(a))break
a=t(!0)}else{if(V(e,a)){if(r.boundary(a))break}else 3===a.nodeType&&r.text(a)
if(a===o)break
a=t(!1)}}},G=function(e,t,n,r,o){var i,a,c,u,l,f,d
V(i=e,a=n)||_(i,a)||U(i,a)||(u=a,"true"===(c=i).getContentEditable(u)&&"false"===c.getContentEditableParent(u.parentNode))||(l=e.getParent(r,e.isBlock),f=new q(n,l),d=o?f.next:f.prev,z(e,d,n,{boundary:s,cef:s,text:function(e){o?t.fOffset+=e.length:t.sOffset+=e.length,t.elements.push(P(e))}}))},K=function(e,t,n,r,o,i){void 0===i&&(i=!0)
var a=new q(n,t),c=[],u={sOffset:0,fOffset:0,elements:[]}
G(e,u,n,t,!1)
var l=function(){return 0<u.elements.length&&(c.push(u),u={sOffset:0,fOffset:0,elements:[]}),!1}
return z(e,a.next,n,{boundary:l,cef:function(e){return l(),o&&c.push.apply(c,o.cef(e)),!1},text:function(e){u.elements.push(P(e)),o&&o.text(e,u)}},r,i),r&&G(e,u,r,t,!0),l(),c},H=function(e,t){var n=$(t.startContainer,t.startOffset),r=n.element.dom,o=$(t.endContainer,t.endOffset),i=o.element.dom
return K(e,t.commonAncestorContainer,r,i,{text:function(e,t){e===i?t.fOffset+=e.length-o.offset:e===r&&(t.sOffset+=n.offset)},cef:function(t){var n,r,o
return n=A(function(e,t){return n=t,1!==(o=i=void 0===(r=e)?document:r.dom).nodeType&&9!==o.nodeType&&11!==o.nodeType||0===o.childElementCount?[]:N(i.querySelectorAll(n),P)
var n,r,o,i}(P(t),"*[contenteditable=true]"),(function(t){var n=t.dom
return K(e,n,n)})),r=function(e,t){return n=e.elements[0].dom,r=t.elements[0].dom,o=Node.DOCUMENT_POSITION_PRECEDING,0!=(n.compareDocumentPosition(r)&o)?1:-1
var n,r,o},(o=k.call(n,0)).sort(r),o}},!1)},J=function(e,t){return t.collapsed?[]:H(e,t)},L=function(e,t){var n=e.createRng()
return n.selectNode(t),J(e,n)},Q=function(e,t){return A(t,(function(t){var n=t.elements,r=N(n,j).join("")
return function(e,t){var n,r
return function(e,t){if(0===e.length)return[]
for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var c=e[i],u=t(c)
u!==n&&(r.push(o),o=[]),n=u,o.push(c)}return 0!==o.length&&r.push(o),r}((n=function(e,n){var r=j(n),o=e.last,i=o+r.length,a=A(t,(function(e,t){return e.start<i&&e.finish>o?[{element:n,start:Math.max(o,e.start)-o,finish:Math.min(i,e.finish)-o,matchId:t}]:[]}))
return{results:e.results.concat(a),last:i}},r={results:[],last:0},T(e,(function(e){r=n(r,e)})),r.results),(function(e){return e.matchId}))}(n,function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length)
var o=t.regex
o.lastIndex=n
for(var i,a=[];i=o.exec(e);){var c=i[t.matchIndex],u=i.index+i[0].indexOf(c),l=u+c.length
if(r<l)break
a.push({start:u,finish:l}),o.lastIndex=l}return a}(r,e,t.sOffset,r.length-t.fOffset))}))},X=function(e,t){S(e,(function(e,n){S(e,(function(e){var r=P(t.cloneNode(!1));(function(e,t,n){!function(e,t,n){if(!(b(n)||O(n)||C(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")}(e.dom,t,n)})(r,"data-mce-index",n)
var o,i=e.element.dom
i.length===e.finish&&0===e.start?D(e.element,r):(i.length!==e.finish&&i.splitText(e.finish),o=i.splitText(e.start),D(P(o),r))}))}))},Y=function(e){var t=e.getAttribute("data-mce-index")
return"number"==typeof t?""+t:t},Z=function(e,t,n,r){var o=e.dom.create("span",{"data-mce-bogus":1})
o.className="mce-match-marker"
var i,a,c,u,l,s=e.getBody()
return le(e,t,!1),r?function(e,t,n,r){var o,i=n.getBookmark(),a=e.select("td[data-mce-selected],th[data-mce-selected]"),c=0<a.length?(o=e,A(a,(function(e){return L(o,e)}))):J(e,n.getRng()),u=Q(t,c)
return X(u,r),n.moveToBookmark(i),u.length}(e.dom,n,e.selection,o):(i=e.dom,a=n,c=o,u=L(i,s),l=Q(a,u),X(l,c),l.length)},ee=function(e){var t=e.parentNode
e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},te=function(e,t){var n=[],r=v.toArray(e.getBody().getElementsByTagName("span"))
if(r.length)for(var o=0;o<r.length;o++){var i=Y(r[o])
null!==i&&i.length&&i===t.toString()&&n.push(r[o])}return n},ne=function(e,t,n){var r=t.get(),o=r.index,i=e.dom;(n=!1!==n)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,i.removeClass(te(e,r.index),"mce-match-marker-selected")
var a=te(e,o)
return a.length?(i.addClass(te(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),o):-1},re=function(e,t){var n=t.parentNode
e.remove(t),e.isEmpty(n)&&e.remove(n)},oe=function(e,t,n,r,o,i){var a,c,u,l=(a=o,c="("+n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n\\uFEFF]")+")",a?"(?:^|\\s|"+p()+")"+c+"(?=$|\\s|"+p()+")":c),s={regex:new RegExp(l,r?"g":"gi"),matchIndex:1},f=Z(e,t,s,i)
return f&&(u=ne(e,t,!0),t.set({index:u,count:f,text:n,matchCase:r,wholeWord:o,inSelection:i})),f},ie=function(e,t){var n=ne(e,t,!0)
t.set(c(c({},t.get()),{index:n}))},ae=function(e,t){var n=ne(e,t,!1)
t.set(c(c({},t.get()),{index:n}))},ce=function(e){var t=Y(e)
return null!==t&&0<t.length},ue=function(e,t,n,r,o){var i,a=t.get(),u=a.index,l=u
r=!1!==r
for(var s=e.getBody(),f=v.grep(v.toArray(s.getElementsByTagName("span")),ce),d=0;d<f.length;d++){var m=Y(f[d]),h=i=parseInt(m,10)
if(o||h===a.index){for(n.length?(f[d].firstChild.nodeValue=n,ee(f[d])):re(e.dom,f[d]);f[++d];){if((h=parseInt(Y(f[d]),10))!==i){d--
break}re(e.dom,f[d])}r&&l--}else u<i&&f[d].setAttribute("data-mce-index",String(i-1))}return t.set(c(c({},a),{count:o?0:a.count-1,index:l})),(r?ie:ae)(e,t),!o&&0<t.get().count},le=function(e,t,n){for(var r,o,i=t.get(),a=v.toArray(e.getBody().getElementsByTagName("span")),u=0;u<a.length;u++){var l=Y(a[u])
null!==l&&l.length&&(l===i.index.toString()&&(r=r||a[u].firstChild,o=a[u].firstChild),ee(a[u]))}if(t.set(c(c({},i),{index:-1,count:0,text:""})),r&&o){var s=e.dom.createRng()
return s.setStart(r,0),s.setEnd(o,o.data.length),!1!==n&&e.selection.setRng(s),s}},se=tinymce.util.Tools.resolve("tinymce.Env"),fe=function(e,t){var n,r=(n=i(g.none()),{clear:function(){return n.set(g.none())},set:function(e){return n.set(g.some(e))},isSet:function(){return n.get().isSome()},on:function(e){return n.get().each(e)}})
e.undoManager.add()
var o=v.trim(e.selection.getContent({format:"text"}))
function a(e){(1<t.get().count?e.enable:e.disable)("next"),(1<t.get().count?e.enable:e.disable)("prev")}var u=function(e,t){var n=t?e.disable:e.enable
T(["replace","replaceall","prev","next"],n)},l=function(e,t){se.browser.isSafari()&&se.deviceType.isTouch()&&("find"===t||"replace"===t||"replaceall"===t)&&e.focus(t)},s=function(n){le(e,t,!1),u(n,!0),a(n)},f=function(n){var r,o,i=n.getData(),c=t.get()
i.findtext.length?(c.text===i.findtext&&c.matchCase===i.matchcase&&c.wholeWord===i.wholewords?ie(e,t):((r=oe(e,t,i.findtext,i.matchcase,i.wholewords,i.inselection))<=0&&(o=n,e.windowManager.alert("Could not find the specified string.",(function(){o.focus("findtext")}))),u(n,0===r)),a(n)):s(n)},d=t.get(),m={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"},{type:"togglemenuitem",name:"inselection",text:"Find in selection"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",disabled:!0}],initialData:{findtext:o,replacetext:"",wholewords:d.wholeWord,matchcase:d.matchCase,inselection:d.inSelection},onChange:function(e,n){"findtext"===n.name&&0<t.get().count&&s(e)},onAction:function(n,r){var o,i,u=n.getData()
switch(r.name){case"find":f(n)
break
case"replace":(ue(e,t,u.replacetext)?a:s)(n)
break
case"replaceall":ue(e,t,u.replacetext,!0,!0),s(n)
break
case"prev":ae(e,t),a(n)
break
case"next":ie(e,t),a(n)
break
case"matchcase":case"wholewords":case"inselection":o=n.getData(),i=t.get(),t.set(c(c({},i),{matchCase:o.matchcase,wholeWord:o.wholewords,inSelection:o.inselection})),s(n)}l(n,r.name)},onSubmit:function(e){f(e),l(e,"find")},onClose:function(){e.focus(),le(e,t),e.undoManager.add()}}
r.set(e.windowManager.open(m,{inline:"toolbar"}))},de=function(e,t){return function(){fe(e,t)}}
a.add("searchreplace",(function(e){var t,n,r,o,a,c,u=i({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1,inSelection:!1})
return n=u,(t=e).addCommand("SearchReplace",(function(){fe(t,n)})),o=u,(r=e).ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:de(r,o),icon:"search"}),r.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:de(r,o),icon:"search"}),r.shortcuts.add("Meta+F","",de(r,o)),a=e,c=u,{done:function(e){return le(a,c,e)},find:function(e,t,n,r){return void 0===r&&(r=!1),oe(a,c,e,t,n,r)},next:function(){return ie(a,c)},prev:function(){return ae(a,c)},replace:function(e,t,n){return ue(a,c,e,t,n)}}}))}()

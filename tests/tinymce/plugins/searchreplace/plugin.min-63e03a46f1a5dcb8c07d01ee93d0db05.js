!function(){"use strict"
function e(e){var t=e
return{get:function(){return t},set:function(e){t=e}}}function t(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}}function n(e){return function(t){return typeof t===e}}function r(){}function o(e){return function(){return e}}function i(e){return e}function a(){return p}var c=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},l=t("string"),s=t("array"),f=n("boolean"),d=n("number"),m=o(!1),h=o(!0),g=o("[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"),p={fold:function(e,t){return e()},isSome:m,isNone:h,getOr:i,getOrThunk:v,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(void 0),or:i,orThunk:v,map:a,each:r,bind:a,exists:m,forall:h,filter:function(){return p},toArray:function(){return[]},toString:o("none()")}
function v(e){return e()}function y(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r}function x(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}function b(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n)}function w(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!s(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
A.apply(t,e[n])}return t}(y(e,t))}function O(e,t){return D.call(e,t)}var C=function(e){function t(){return i}function n(t){return t(e)}var r=o(e),i={fold:function(t,n){return n(e)},isSome:h,isNone:m,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:t,orThunk:t,map:function(t){return C(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?i:p},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return i},T={some:C,none:a,from:function(e){return null==e?p:C(e)}},E=g,N=tinymce.util.Tools.resolve("tinymce.Env"),k=tinymce.util.Tools.resolve("tinymce.util.Tools"),S=Array.prototype.slice,A=Array.prototype.push,D=Object.hasOwnProperty
function M(e,t){return{element:e,offset:t}}function B(e,t){var n,r
n=e,r=t,T.from(n.dom.parentNode).map(ae.fromDom).each((function(e){e.dom.insertBefore(r.dom,n.dom)})),t.dom.appendChild(e.dom)}function F(e){return ce.get(e)}function I(e,t){return e.isBlock(t)||O(e.schema.getShortEndedElements(),t.nodeName)}function P(e,t){return"false"===e.getContentEditable(t)}function R(e,t){return!e.isBlock(t)&&O(e.schema.getWhiteSpaceElements(),t.nodeName)}function W(e,t){return r=t,0<(o=y((n=ae.fromDom(e)).dom.childNodes,ae.fromDom)).length&&r<o.length?M(o[r],0):M(n,r)
var n,r,o}function j(e,t,n,r,o,i){for(var a=(i=void 0===i||i)?t(!1):n;a;){var c=P(e,a)
if(c||R(e,a)){if(c?r.cef(a):r.boundary(a))break
a=t(!0)}else{if(I(e,a)){if(r.boundary(a))break}else 3===a.nodeType&&r.text(a)
if(a===o)break
a=t(!1)}}}function V(e,t,n,r,o){var i,a,c,u,l,s
I(i=e,a=n)||P(i,a)||R(i,a)||"true"===(c=i).getContentEditable(u=a)&&"false"===c.getContentEditableParent(u.parentNode)||(l=e.getParent(r,e.isBlock),s=new ue(n,l),j(e,(o?s.next:s.prev).bind(s),n,{boundary:h,cef:h,text:function(e){o?t.fOffset+=e.length:t.sOffset+=e.length,t.elements.push(ae.fromDom(e))}}))}function H(e,t,n,r,o,i){void 0===i&&(i=!0)
var a=new ue(n,t),c=[],u={sOffset:0,fOffset:0,elements:[]}
function l(){return 0<u.elements.length&&(c.push(u),u={sOffset:0,fOffset:0,elements:[]}),!1}return V(e,u,n,t,!1),j(e,a.next.bind(a),n,{boundary:l,cef:function(e){return l(),o&&c.push.apply(c,o.cef(e)),!1},text:function(e){u.elements.push(ae.fromDom(e)),o&&o.text(e,u)}},r,i),r&&V(e,u,r,t,!0),l(),c}function L(e,t){return t.collapsed?[]:function(e,t){var n=W(t.startContainer,t.startOffset),r=n.element.dom,o=W(t.endContainer,t.endOffset),i=o.element.dom
return H(e,t.commonAncestorContainer,r,i,{text:function(e,t){e===i?t.fOffset+=e.length-o.offset:e===r&&(t.sOffset+=n.offset)},cef:function(t){var n,r,o,i,a=w(1!==(o=i=void 0===(r=ae.fromDom(t))?document:r.dom).nodeType&&9!==o.nodeType&&11!==o.nodeType||0===o.childElementCount?[]:y(i.querySelectorAll("*[contenteditable=true]"),ae.fromDom),(function(t){var n=t.dom
return H(e,n,n)}))
return(n=S.call(a,0)).sort((function(e,t){return n=e.elements[0].dom,r=t.elements[0].dom,o=Node.DOCUMENT_POSITION_PRECEDING,0!=(n.compareDocumentPosition(r)&o)?1:-1
var n,r,o})),n}},!1)}(e,t)}function U(e,t){var n=e.createRng()
return n.selectNode(t),L(e,n)}function $(e,t){return w(t,(function(t){var n,r,o,i=t.elements,a=y(i,F).join(""),c=function(e,t,n,r){void 0===r&&(r=e.length)
var o=t.regex
o.lastIndex=n=void 0===n?0:n
for(var i,a=[];i=o.exec(e);){var c=i[t.matchIndex],u=i.index+i[0].indexOf(c),l=u+c.length
if(r<l)break
a.push({start:u,finish:l}),o.lastIndex=l}return a}(a,e,t.sOffset,a.length-t.fOffset)
return n=c,function(e,t){if(0===e.length)return[]
for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var c=e[i],u=t(c)
u!==n&&(r.push(o),o=[]),n=u,o.push(c)}return 0!==o.length&&r.push(o),r}((r=function(e,t){var r=F(t),o=e.last,i=o+r.length,a=w(n,(function(e,n){return e.start<i&&e.finish>o?[{element:t,start:Math.max(o,e.start)-o,finish:Math.min(i,e.finish)-o,matchId:n}]:[]}))
return{results:e.results.concat(a),last:i}},o={results:[],last:0},x(i,(function(e,t){o=r(o,e)})),o.results),(function(e){return e.matchId}))}))}function _(e,t){b(e,(function(e,n){b(e,(function(e){var r=ae.fromDom(t.cloneNode(!1));(function(e,t,n){!function(e,t,n){if(!(l(n)||f(n)||d(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")}(e.dom,t,n)})(r,"data-mce-index",n)
var o,i=e.element.dom
i.length===e.finish&&0===e.start?B(e.element,r):(i.length!==e.finish&&i.splitText(e.finish),o=i.splitText(e.start),B(ae.fromDom(o),r))}))}))}function z(e){var t=e.getAttribute("data-mce-index")
return"number"==typeof t?""+t:t}function q(e){var t=e.parentNode
e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function G(e,t){var n=[],r=k.toArray(e.getBody().getElementsByTagName("span"))
if(r.length)for(var o=0;o<r.length;o++){var i=z(r[o])
null!==i&&i.length&&i===t.toString()&&n.push(r[o])}return n}function K(e,t,n){var r=t.get(),o=r.index,i=e.dom;(n=!1!==n)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,i.removeClass(G(e,r.index),"mce-match-marker-selected")
var a=G(e,o)
return a.length?(i.addClass(G(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),o):-1}function J(e,t){var n=t.parentNode
e.remove(t),e.isEmpty(n)&&e.remove(n)}function Q(e,t,n,r,o,i){var a,c,u,l=e.selection,s=(a=o,c="("+n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n\\uFEFF]")+")",a?"(?:^|\\s|"+E()+")"+c+"(?=$|\\s|"+E()+")":c),f=l.isForward(),d=function(e,t,n,r){var o=e.dom.create("span",{"data-mce-bogus":1})
o.className="mce-match-marker"
var i,a,c,u,l,s,f,d,m,h,g=e.getBody()
return le(e,t,!1),r?(c=e.dom,u=n,s=o,d=(l=e.selection).getBookmark(),_(h=$(u,0<(m=c.select("td[data-mce-selected],th[data-mce-selected]")).length?(f=c,w(m,(function(e){return U(f,e)}))):L(c,l.getRng())),s),l.moveToBookmark(d),h.length):(i=o,_(a=$(n,U(e.dom,g)),i),a.length)}(e,t,{regex:new RegExp(s,r?"g":"gi"),matchIndex:1},i)
return N.browser.isSafari()&&l.setRng(l.getRng(),f),d&&(u=K(e,t,!0),t.set({index:u,count:d,text:n,matchCase:r,wholeWord:o,inSelection:i})),d}function X(e,t){var n=K(e,t,!0)
t.set(u(u({},t.get()),{index:n}))}function Y(e,t){var n=K(e,t,!1)
t.set(u(u({},t.get()),{index:n}))}function Z(e){var t=z(e)
return null!==t&&0<t.length}function ee(e,t,n,r,o){var i,a=t.get(),c=a.index,l=c
r=!1!==r
for(var s=e.getBody(),f=k.grep(k.toArray(s.getElementsByTagName("span")),Z),d=0;d<f.length;d++){var m=z(f[d]),h=i=parseInt(m,10)
if(o||h===a.index){for(n.length?(f[d].firstChild.nodeValue=n,q(f[d])):J(e.dom,f[d]);f[++d];){if((h=parseInt(z(f[d]),10))!==i){d--
break}J(e.dom,f[d])}r&&l--}else c<i&&f[d].setAttribute("data-mce-index",String(i-1))}return t.set(u(u({},a),{count:o?0:a.count-1,index:l})),(r?X:Y)(e,t),!o&&0<t.get().count}function te(t,n){var o,i,a,c=(o=r,i=e(T.none()),u(u({},a={clear:function(){l(),i.set(T.none())},isSet:function(){return i.get().isSome()},get:function(){return i.get()},set:function(e){l(),i.set(T.some(e))}}),{on:function(e){return a.get().each(e)}}))
function l(){return i.get().each(o)}function s(e){(1<n.get().count?e.enable:e.disable)("next"),(1<n.get().count?e.enable:e.disable)("prev")}function f(e,t){x(["replace","replaceall","prev","next"],t?e.disable:e.enable)}function d(e,t){N.browser.isSafari()&&N.deviceType.isTouch()&&("find"===t||"replace"===t||"replaceall"===t)&&e.focus(t)}function m(e){le(t,n,!1),f(e,!0),s(e)}function h(e){var r,o,i=e.getData(),a=n.get()
i.findtext.length?(a.text===i.findtext&&a.matchCase===i.matchcase&&a.wholeWord===i.wholewords?X(t,n):((r=Q(t,n,i.findtext,i.matchcase,i.wholewords,i.inselection))<=0&&(o=e,t.windowManager.alert("Could not find the specified string.",(function(){o.focus("findtext")}))),f(e,0===r)),s(e)):m(e)}t.undoManager.add()
var g=k.trim(t.selection.getContent({format:"text"})),p=n.get(),v={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"},{type:"togglemenuitem",name:"inselection",text:"Find in selection"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace all",disabled:!0}],initialData:{findtext:g,replacetext:"",wholewords:p.wholeWord,matchcase:p.matchCase,inselection:p.inSelection},onChange:function(e,t){"findtext"===t.name&&0<n.get().count&&m(e)},onAction:function(e,r){var o,i,a=e.getData()
switch(r.name){case"find":h(e)
break
case"replace":(ee(t,n,a.replacetext)?s:m)(e)
break
case"replaceall":ee(t,n,a.replacetext,!0,!0),m(e)
break
case"prev":Y(t,n),s(e)
break
case"next":X(t,n),s(e)
break
case"matchcase":case"wholewords":case"inselection":o=e.getData(),i=n.get(),n.set(u(u({},i),{matchCase:o.matchcase,wholeWord:o.wholewords,inSelection:o.inselection})),m(e)}d(e,r.name)},onSubmit:function(e){h(e),d(e,"find")},onClose:function(){t.focus(),le(t,n),t.undoManager.add()}}
c.set(t.windowManager.open(v,{inline:"toolbar"}))}function ne(e,t){return function(){te(e,t)}}function re(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}}"undefined"!=typeof window||Function("return this;")()
var oe,ie,ae={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return re(n.childNodes[0])},fromTag:function(e,t){return re((t||document).createElement(e))},fromText:function(e,t){return re((t||document).createTextNode(e))},fromDom:re,fromPoint:function(e,t,n){return T.from(e.dom.elementFromPoint(t,n)).map(re)}},ce=(oe=function(e){return 3===e.dom.nodeType},{get:function(e){if(!oe(e))throw new Error("Can only get text value of a text node")
return ie(e).getOr("")},getOption:ie=function(e){return oe(e)?T.from(e.dom.nodeValue):T.none()},set:function(e,t){if(!oe(e))throw new Error("Can only set raw text value of a text node")
e.dom.nodeValue=t}}),ue=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),le=function(e,t,n){for(var r,o,i=t.get(),a=k.toArray(e.getBody().getElementsByTagName("span")),c=0;c<a.length;c++){var l=z(a[c])
null!==l&&l.length&&(l===i.index.toString()&&(r=r||a[c].firstChild,o=a[c].firstChild),q(a[c]))}if(t.set(u(u({},i),{index:-1,count:0,text:""})),r&&o){var s=e.dom.createRng()
return s.setStart(r,0),s.setEnd(o,o.data.length),!1!==n&&e.selection.setRng(s),s}}
c.add("searchreplace",(function(t){var n,r,o,i,a,c=e({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1,inSelection:!1}),u=c
return(n=t).addCommand("SearchReplace",(function(){te(n,u)})),(r=t).ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:ne(r,o=c),icon:"search"}),r.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:ne(r,o),icon:"search"}),r.shortcuts.add("Meta+F","",ne(r,o)),i=t,a=c,{done:function(e){return le(i,a,e)},find:function(e,t,n,r){return Q(i,a,e,t,n,r=void 0!==r&&r)},next:function(){return X(i,a)},prev:function(){return Y(i,a)},replace:function(e,t,n){return ee(i,a,e,t,n)}}}))}()

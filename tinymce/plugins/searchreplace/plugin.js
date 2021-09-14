(function(){"use strict"
var e,n,t,r,o,i,a,u=function(e){var n=e
return{get:function(){return n},set:function(e){n=e}}},c=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=function(){return(f=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])
return e}).apply(this,arguments)},l=function(){},s=function(e){return function(){return e}},d=s(!1),m=s(!0),h=s("[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"),g=function(){return p},p=(e=function(e){return e.isNone()},{fold:function(e,n){return e()},is:d,isSome:d,isNone:m,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:t,orThunk:n,map:g,each:l,bind:g,exists:d,forall:m,filter:g,equals:e,equals_:e,toArray:function(){return[]},toString:s("none()")}),v=function(e){var n=s(e),t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:m,isNone:d,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return v(n(e))},each:function(n){n(e)},bind:r,exists:r,forall:r,filter:function(n){return n(e)?o:p},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(d,(function(n){return t(e,n)}))}}
return o},y={some:v,none:g,from:function(e){return null==e?p:v(e)}},x=h,b=tinymce.util.Tools.resolve("tinymce.util.Tools"),w=function(e){return function(n){return r=typeof(t=n),(null===t?"null":"object"===r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===e
var t,r}},O=function(e){return function(n){return typeof n===e}},C=w("string"),T=w("array"),N=O("boolean"),E=O("number"),k=Array.prototype.slice,S=Array.prototype.push,A=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o]
r[o]=n(i,o)}return r},D=function(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t)}},M=function(e,n){for(var t=e.length-1;t>=0;t--){n(e[t],t)}},B=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!T(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e)
S.apply(n,e[t])}return n}(A(e,n))},F=Object.hasOwnProperty,I=function(e,n){return F.call(e,n)},P=("undefined"!=typeof window?window:Function("return this;")(),r=3,function(e){return function(e){return e.dom.nodeType}(e)===r}),R=function(e,n,t){(function(e,n,t){if(!(C(t)||N(t)||E(t)))throw console.error("Invalid call to Attribute.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(n,t+"")})(e.dom,n,t)},W=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},j={fromHtml:function(e,n){var t=(n||document).createElement("div")
if(t.innerHTML=e,!t.hasChildNodes()||t.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return W(t.childNodes[0])},fromTag:function(e,n){var t=(n||document).createElement(e)
return W(t)},fromText:function(e,n){var t=(n||document).createTextNode(e)
return W(t)},fromDom:W,fromPoint:function(e,n,t){return y.from(e.dom.elementFromPoint(n,t)).map(W)}},q=function(e,n){return{element:e,offset:n}},V=function(e,n){var t=function(e){return A(e.dom.childNodes,j.fromDom)}(e)
return t.length>0&&n<t.length?q(t[n],0):q(e,n)},_=function(e,n){(function(e){return y.from(e.dom.parentNode).map(j.fromDom)})(e).each((function(t){t.dom.insertBefore(n.dom,e.dom)}))},H=function(e,n){_(e,n),function(e,n){e.dom.appendChild(n.dom)}(n,e)},L=(o=P,i="text",{get:function(e){if(!o(e))throw new Error("Can only get "+i+" value of a "+i+" node")
return a(e).getOr("")},getOption:a=function(e){return o(e)?y.from(e.dom.nodeValue):y.none()},set:function(e,n){if(!o(e))throw new Error("Can only set raw "+i+" value of a "+i+" node")
e.dom.nodeValue=n}}),U=function(e){return L.get(e)},$=function(e,n){return function(e,n){var t,r=void 0===n?document:n.dom
return 1!==(t=r).nodeType&&9!==t.nodeType&&11!==t.nodeType||0===t.childElementCount?[]:A(r.querySelectorAll(e),j.fromDom)}(n,e)},z=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),G=function(e,n){return e.isBlock(n)||I(e.schema.getShortEndedElements(),n.nodeName)},K=function(e,n){return"false"===e.getContentEditable(n)},J=function(e,n){return!e.isBlock(n)&&I(e.schema.getWhiteSpaceElements(),n.nodeName)},Q=function(e,n){return V(j.fromDom(e),n)},X=function(e,n,t,r,o,i){void 0===i&&(i=!0)
for(var a=i?n(!1):t;a;){var u=K(e,a)
if(u||J(e,a)){if(u?r.cef(a):r.boundary(a))break
a=n(!0)}else{if(G(e,a)){if(r.boundary(a))break}else 3===a.nodeType&&r.text(a)
if(a===o)break
a=n(!1)}}},Y=function(e,n,t,r,o){if(!function(e,n){return G(e,n)||K(e,n)||J(e,n)||function(e,n){return"true"===e.getContentEditable(n)&&"false"===e.getContentEditableParent(n.parentNode)}(e,n)}(e,t)){var i=e.getParent(r,e.isBlock),a=new z(t,i),u=o?a.next.bind(a):a.prev.bind(a)
X(e,u,t,{boundary:m,cef:m,text:function(e){o?n.fOffset+=e.length:n.sOffset+=e.length,n.elements.push(j.fromDom(e))}})}},Z=function(e,n,t,r,o,i){void 0===i&&(i=!0)
var a=new z(t,n),u=[],c={sOffset:0,fOffset:0,elements:[]}
Y(e,c,t,n,!1)
var f=function(){return c.elements.length>0&&(u.push(c),c={sOffset:0,fOffset:0,elements:[]}),!1}
return X(e,a.next.bind(a),t,{boundary:f,cef:function(e){return f(),o&&u.push.apply(u,o.cef(e)),!1},text:function(e){c.elements.push(j.fromDom(e)),o&&o.text(e,c)}},r,i),r&&Y(e,c,r,n,!0),f(),u},ee=function(e,n){var t=Q(n.startContainer,n.startOffset),r=t.element.dom,o=Q(n.endContainer,n.endOffset),i=o.element.dom
return Z(e,n.commonAncestorContainer,r,i,{text:function(e,n){e===i?n.fOffset+=e.length-o.offset:e===r&&(n.sOffset+=t.offset)},cef:function(n){var t,r,o,i=B($(j.fromDom(n),"*[contenteditable=true]"),(function(n){var t=n.dom
return Z(e,t,t)}))
return t=i,r=function(e,n){return function(e,n){return function(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)}(e,n,Node.DOCUMENT_POSITION_PRECEDING)}(e.elements[0].dom,n.elements[0].dom)?1:-1},(o=k.call(t,0)).sort(r),o}},!1)},ne=function(e,n){return n.collapsed?[]:ee(e,n)},te=function(e,n){var t=e.createRng()
return t.selectNode(n),ne(e,t)},re=function(e,n){var t,r,o
return function(e,n){if(0===e.length)return[]
for(var t=n(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var u=e[i],c=n(u)
c!==t&&(r.push(o),o=[]),t=c,o.push(u)}return 0!==o.length&&r.push(o),r}((t=e,r=function(e,t){var r=U(t),o=e.last,i=o+r.length,a=B(n,(function(e,n){return e.start<i&&e.finish>o?[{element:t,start:Math.max(o,e.start)-o,finish:Math.min(i,e.finish)-o,matchId:n}]:[]}))
return{results:e.results.concat(a),last:i}},o={results:[],last:0},D(t,(function(e){o=r(o,e)})),o).results,(function(e){return e.matchId}))},oe=function(e,n){return B(n,(function(n){var t=n.elements,r=A(t,U).join(""),o=function(e,n,t,r){void 0===t&&(t=0),void 0===r&&(r=e.length)
var o=n.regex
o.lastIndex=t
for(var i,a=[];i=o.exec(e);){var u=i[n.matchIndex],c=i.index+i[0].indexOf(u),f=c+u.length
if(f>r)break
a.push({start:c,finish:f}),o.lastIndex=f}return a}(r,e,n.sOffset,r.length-n.fOffset)
return re(t,o)}))},ie=function(e,n){M(e,(function(e,t){M(e,(function(e){var r=j.fromDom(n.cloneNode(!1))
R(r,"data-mce-index",t)
var o=e.element.dom
if(o.length===e.finish&&0===e.start)H(e.element,r)
else{o.length!==e.finish&&o.splitText(e.finish)
var i=o.splitText(e.start)
H(j.fromDom(i),r)}}))}))},ae=function(e,n,t,r){var o=t.getBookmark(),i=e.select("td[data-mce-selected],th[data-mce-selected]"),a=i.length>0?function(e,n){return B(n,(function(n){return te(e,n)}))}(e,i):ne(e,t.getRng()),u=oe(n,a)
return ie(u,r),t.moveToBookmark(o),u.length},ue=function(e){var n=e.getAttribute("data-mce-index")
return"number"==typeof n?""+n:n},ce=function(e,n,t,r){var o=e.dom.create("span",{"data-mce-bogus":1})
o.className="mce-match-marker"
var i=e.getBody()
return ye(e,n,!1),r?ae(e.dom,t,e.selection,o):function(e,n,t,r){var o=te(e,t),i=oe(n,o)
return ie(i,r),i.length}(e.dom,t,i,o)},fe=function(e){var n=e.parentNode
e.firstChild&&n.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},le=function(e,n){var t=[],r=b.toArray(e.getBody().getElementsByTagName("span"))
if(r.length)for(var o=0;o<r.length;o++){var i=ue(r[o])
null!==i&&i.length&&(i===n.toString()&&t.push(r[o]))}return t},se=function(e,n,t){var r=n.get(),o=r.index,i=e.dom;(t=!1!==t)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,i.removeClass(le(e,r.index),"mce-match-marker-selected")
var a=le(e,o)
return a.length?(i.addClass(le(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),o):-1},de=function(e,n){var t=n.parentNode
e.remove(n),e.isEmpty(t)&&e.remove(t)},me=function(e,n,t,r,o,i){var a=function(e,n){var t="("+e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n\\uFEFF]")+")"
return n?"(?:^|\\s|"+x()+")"+t+"(?=$|\\s|"+x()+")":t}(t,o),u={regex:new RegExp(a,r?"g":"gi"),matchIndex:1},c=ce(e,n,u,i)
if(c){var f=se(e,n,!0)
n.set({index:f,count:c,text:t,matchCase:r,wholeWord:o,inSelection:i})}return c},he=function(e,n){var t=se(e,n,!0)
n.set(f(f({},n.get()),{index:t}))},ge=function(e,n){var t=se(e,n,!1)
n.set(f(f({},n.get()),{index:t}))},pe=function(e){var n=ue(e)
return null!==n&&n.length>0},ve=function(e,n,t,r,o){var i,a=n.get(),u=a.index,c=u
r=!1!==r
for(var l=e.getBody(),s=b.grep(b.toArray(l.getElementsByTagName("span")),pe),d=0;d<s.length;d++){var m=ue(s[d]),h=i=parseInt(m,10)
if(o||h===a.index){for(t.length?(s[d].firstChild.nodeValue=t,fe(s[d])):de(e.dom,s[d]);s[++d];){if((h=parseInt(ue(s[d]),10))!==i){d--
break}de(e.dom,s[d])}r&&c--}else i>u&&s[d].setAttribute("data-mce-index",String(i-1))}return n.set(f(f({},a),{count:o?0:a.count-1,index:c})),r?he(e,n):ge(e,n),!o&&n.get().count>0},ye=function(e,n,t){var r,o,i,a=n.get(),u=b.toArray(e.getBody().getElementsByTagName("span"))
for(r=0;r<u.length;r++){var c=ue(u[r])
null!==c&&c.length&&(c===a.index.toString()&&(o||(o=u[r].firstChild),i=u[r].firstChild),fe(u[r]))}if(n.set(f(f({},a),{index:-1,count:0,text:""})),o&&i){var l=e.dom.createRng()
return l.setStart(o,0),l.setEnd(i,i.data.length),!1!==t&&e.selection.setRng(l),l}},xe=tinymce.util.Tools.resolve("tinymce.Env"),be=function(e,n){var t,r=(t=u(y.none()),{clear:function(){return t.set(y.none())},set:function(e){return t.set(y.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}})
e.undoManager.add()
var o=b.trim(e.selection.getContent({format:"text"})),i=function(e){(function(e,n){return n.get().count>1}(0,n)?e.enable:e.disable)("next"),(function(e,n){return n.get().count>1}(0,n)?e.enable:e.disable)("prev")},a=function(e,n){var t=n?e.disable:e.enable
D(["replace","replaceall","prev","next"],t)},c=function(e,n){xe.browser.isSafari()&&xe.deviceType.isTouch()&&("find"===n||"replace"===n||"replaceall"===n)&&e.focus(n)},l=function(t){ye(e,n,!1),a(t,!0),i(t)},s=function(t){var r=t.getData(),o=n.get()
if(r.findtext.length){if(o.text===r.findtext&&o.matchCase===r.matchcase&&o.wholeWord===r.wholewords)he(e,n)
else{var u=me(e,n,r.findtext,r.matchcase,r.wholewords,r.inselection)
u<=0&&function(n){e.windowManager.alert("Could not find the specified string.",(function(){n.focus("findtext")}))}(t),a(t,0===u)}i(t)}else l(t)},d=n.get(),m={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"},{type:"togglemenuitem",name:"inselection",text:"Find in selection"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",disabled:!0}],initialData:{findtext:o,replacetext:"",wholewords:d.wholeWord,matchcase:d.matchCase,inselection:d.inSelection},onChange:function(e,t){"findtext"===t.name&&n.get().count>0&&l(e)},onAction:function(t,r){var o=t.getData()
switch(r.name){case"find":s(t)
break
case"replace":ve(e,n,o.replacetext)?i(t):l(t)
break
case"replaceall":ve(e,n,o.replacetext,!0,!0),l(t)
break
case"prev":ge(e,n),i(t)
break
case"next":he(e,n),i(t)
break
case"matchcase":case"wholewords":case"inselection":(function(e){var t=e.getData(),r=n.get()
n.set(f(f({},r),{matchCase:t.matchcase,wholeWord:t.wholewords,inSelection:t.inselection}))})(t),l(t)}c(t,r.name)},onSubmit:function(e){s(e),c(e,"find")},onClose:function(){e.focus(),ye(e,n),e.undoManager.add()}}
r.set(e.windowManager.open(m,{inline:"toolbar"}))},we=function(e,n){return function(){be(e,n)}}
c.add("searchreplace",(function(e){var n=u({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1,inSelection:!1})
return function(e,n){e.addCommand("SearchReplace",(function(){be(e,n)}))}(e,n),function(e,n){e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:we(e,n),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:we(e,n),icon:"search"}),e.shortcuts.add("Meta+F","",we(e,n))}(e,n),function(e,n){return{done:function(t){return ye(e,n,t)},find:function(t,r,o,i){return void 0===i&&(i=!1),me(e,n,t,r,o,i)},next:function(){return he(e,n)},prev:function(){return ge(e,n)},replace:function(t,r,o){return ve(e,n,t,r,o)}}}(e,n)}))})()

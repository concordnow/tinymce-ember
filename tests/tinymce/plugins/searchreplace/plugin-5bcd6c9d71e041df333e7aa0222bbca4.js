(function(){"use strict"
var e,t,n=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},r=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},i=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},a=function(e){return function(t){return typeof t===e}},u=i("string"),c=i("array"),f=a("boolean"),l=a("number"),s=function(){},d=function(e){return function(){return e}},m=function(e){return e},h=d(!1),g=d(!0),p=d("[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"),v=function(){return y},y={fold:function(e,t){return e()},isSome:h,isNone:g,getOr:t=m,getOrThunk:e=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:d(null),getOrUndefined:d(void 0),or:t,orThunk:e,map:v,each:s,bind:v,exists:h,forall:g,filter:function(){return v()},toArray:function(){return[]},toString:d("none()")},x=function(e){var t=d(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},isSome:g,isNone:h,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return x(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:y},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o},b={some:x,none:v,from:function(e){return null==e?y:x(e)}},w=p,O=tinymce.util.Tools.resolve("tinymce.util.Tools"),C=Array.prototype.slice,T=Array.prototype.push,E=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},N=function(e,t){for(var n=0,r=e.length;n<r;n++){t(e[n],n)}},k=function(e,t){for(var n=e.length-1;n>=0;n--){t(e[n],n)}},S=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!c(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
T.apply(t,e[n])}return t}(E(e,t))},A=Object.hasOwnProperty,D=function(e,t){return A.call(e,t)}
"undefined"!=typeof window?window:Function("return this;")()
var M,B,F,I,P=(M=3,function(e){return function(e){return e.dom.nodeType}(e)===M}),R=function(e,t,n){(function(e,t,n){if(!(u(n)||f(n)||l(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")})(e.dom,t,n)},W=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},j={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return W(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e)
return W(n)},fromText:function(e,t){var n=(t||document).createTextNode(e)
return W(n)},fromDom:W,fromPoint:function(e,t,n){return b.from(e.dom.elementFromPoint(t,n)).map(W)}},V=function(e,t){return{element:e,offset:t}},H=function(e,t){var n=function(e){return E(e.dom.childNodes,j.fromDom)}(e)
return n.length>0&&t<n.length?V(n[t],0):V(e,t)},L=function(e,t){(function(e){return b.from(e.dom.parentNode).map(j.fromDom)})(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},U=function(e,t){L(e,t),function(e,t){e.dom.appendChild(t.dom)}(t,e)},$=(B=P,F="text",{get:function(e){if(!B(e))throw new Error("Can only get "+F+" value of a "+F+" node")
return I(e).getOr("")},getOption:I=function(e){return B(e)?b.from(e.dom.nodeValue):b.none()},set:function(e,t){if(!B(e))throw new Error("Can only set raw "+F+" value of a "+F+" node")
e.dom.nodeValue=t}}),_=function(e){return $.get(e)},z=function(e,t){return function(e,t){var n,r=void 0===t?document:t.dom
return 1!==(n=r).nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount?[]:E(r.querySelectorAll(e),j.fromDom)}(t,e)},q=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),G=function(e,t){return e.isBlock(t)||D(e.schema.getShortEndedElements(),t.nodeName)},K=function(e,t){return"false"===e.getContentEditable(t)},J=function(e,t){return!e.isBlock(t)&&D(e.schema.getWhiteSpaceElements(),t.nodeName)},Q=function(e,t){return H(j.fromDom(e),t)},X=function(e,t,n,r,o,i){void 0===i&&(i=!0)
for(var a=i?t(!1):n;a;){var u=K(e,a)
if(u||J(e,a)){if(u?r.cef(a):r.boundary(a))break
a=t(!0)}else{if(G(e,a)){if(r.boundary(a))break}else 3===a.nodeType&&r.text(a)
if(a===o)break
a=t(!1)}}},Y=function(e,t,n,r,o){if(!function(e,t){return G(e,t)||K(e,t)||J(e,t)||function(e,t){return"true"===e.getContentEditable(t)&&"false"===e.getContentEditableParent(t.parentNode)}(e,t)}(e,n)){var i=e.getParent(r,e.isBlock),a=new q(n,i),u=o?a.next.bind(a):a.prev.bind(a)
X(e,u,n,{boundary:g,cef:g,text:function(e){o?t.fOffset+=e.length:t.sOffset+=e.length,t.elements.push(j.fromDom(e))}})}},Z=function(e,t,n,r,o,i){void 0===i&&(i=!0)
var a=new q(n,t),u=[],c={sOffset:0,fOffset:0,elements:[]}
Y(e,c,n,t,!1)
var f=function(){return c.elements.length>0&&(u.push(c),c={sOffset:0,fOffset:0,elements:[]}),!1}
return X(e,a.next.bind(a),n,{boundary:f,cef:function(e){return f(),o&&u.push.apply(u,o.cef(e)),!1},text:function(e){c.elements.push(j.fromDom(e)),o&&o.text(e,c)}},r,i),r&&Y(e,c,r,t,!0),f(),u},ee=function(e,t){var n=Q(t.startContainer,t.startOffset),r=n.element.dom,o=Q(t.endContainer,t.endOffset),i=o.element.dom
return Z(e,t.commonAncestorContainer,r,i,{text:function(e,t){e===i?t.fOffset+=e.length-o.offset:e===r&&(t.sOffset+=n.offset)},cef:function(t){var n,r,o,i=S(z(j.fromDom(t),"*[contenteditable=true]"),(function(t){var n=t.dom
return Z(e,n,n)}))
return n=i,r=function(e,t){return function(e,t){return function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)}(e,t,Node.DOCUMENT_POSITION_PRECEDING)}(e.elements[0].dom,t.elements[0].dom)?1:-1},(o=C.call(n,0)).sort(r),o}},!1)},te=function(e,t){return t.collapsed?[]:ee(e,t)},ne=function(e,t){var n=e.createRng()
return n.selectNode(t),te(e,n)},re=function(e,t){var n,r,o
return function(e,t){if(0===e.length)return[]
for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var u=e[i],c=t(u)
c!==n&&(r.push(o),o=[]),n=c,o.push(u)}return 0!==o.length&&r.push(o),r}((n=e,r=function(e,n){var r=_(n),o=e.last,i=o+r.length,a=S(t,(function(e,t){return e.start<i&&e.finish>o?[{element:n,start:Math.max(o,e.start)-o,finish:Math.min(i,e.finish)-o,matchId:t}]:[]}))
return{results:e.results.concat(a),last:i}},o={results:[],last:0},N(n,(function(e,t){o=r(o,e,t)})),o).results,(function(e){return e.matchId}))},oe=function(e,t){return S(t,(function(t){var n=t.elements,r=E(n,_).join(""),o=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length)
var o=t.regex
o.lastIndex=n
for(var i,a=[];i=o.exec(e);){var u=i[t.matchIndex],c=i.index+i[0].indexOf(u),f=c+u.length
if(f>r)break
a.push({start:c,finish:f}),o.lastIndex=f}return a}(r,e,t.sOffset,r.length-t.fOffset)
return re(n,o)}))},ie=function(e,t){k(e,(function(e,n){k(e,(function(e){var r=j.fromDom(t.cloneNode(!1))
R(r,"data-mce-index",n)
var o=e.element.dom
if(o.length===e.finish&&0===e.start)U(e.element,r)
else{o.length!==e.finish&&o.splitText(e.finish)
var i=o.splitText(e.start)
U(j.fromDom(i),r)}}))}))},ae=function(e,t,n,r){var o=n.getBookmark(),i=e.select("td[data-mce-selected],th[data-mce-selected]"),a=i.length>0?function(e,t){return S(t,(function(t){return ne(e,t)}))}(e,i):te(e,n.getRng()),u=oe(t,a)
return ie(u,r),n.moveToBookmark(o),u.length},ue=function(e){var t=e.getAttribute("data-mce-index")
return"number"==typeof t?""+t:t},ce=function(e,t,n,r){var o=e.dom.create("span",{"data-mce-bogus":1})
o.className="mce-match-marker"
var i=e.getBody()
return ye(e,t,!1),r?ae(e.dom,n,e.selection,o):function(e,t,n,r){var o=ne(e,n),i=oe(t,o)
return ie(i,r),i.length}(e.dom,n,i,o)},fe=function(e){var t=e.parentNode
e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},le=function(e,t){var n=[],r=O.toArray(e.getBody().getElementsByTagName("span"))
if(r.length)for(var o=0;o<r.length;o++){var i=ue(r[o])
null!==i&&i.length&&(i===t.toString()&&n.push(r[o]))}return n},se=function(e,t,n){var r=t.get(),o=r.index,i=e.dom;(n=!1!==n)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,i.removeClass(le(e,r.index),"mce-match-marker-selected")
var a=le(e,o)
return a.length?(i.addClass(le(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),o):-1},de=function(e,t){var n=t.parentNode
e.remove(t),e.isEmpty(n)&&e.remove(n)},me=function(e,t,n,r,o,i){var a=function(e,t){var n="("+e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n\\uFEFF]")+")"
return t?"(?:^|\\s|"+w()+")"+n+"(?=$|\\s|"+w()+")":n}(n,o),u={regex:new RegExp(a,r?"g":"gi"),matchIndex:1},c=ce(e,t,u,i)
if(c){var f=se(e,t,!0)
t.set({index:f,count:c,text:n,matchCase:r,wholeWord:o,inSelection:i})}return c},he=function(e,t){var n=se(e,t,!0)
t.set(o(o({},t.get()),{index:n}))},ge=function(e,t){var n=se(e,t,!1)
t.set(o(o({},t.get()),{index:n}))},pe=function(e){var t=ue(e)
return null!==t&&t.length>0},ve=function(e,t,n,r,i){var a,u=t.get(),c=u.index,f=c
r=!1!==r
for(var l=e.getBody(),s=O.grep(O.toArray(l.getElementsByTagName("span")),pe),d=0;d<s.length;d++){var m=ue(s[d]),h=a=parseInt(m,10)
if(i||h===u.index){for(n.length?(s[d].firstChild.nodeValue=n,fe(s[d])):de(e.dom,s[d]);s[++d];){if((h=parseInt(ue(s[d]),10))!==a){d--
break}de(e.dom,s[d])}r&&f--}else a>c&&s[d].setAttribute("data-mce-index",String(a-1))}return t.set(o(o({},u),{count:i?0:u.count-1,index:f})),r?he(e,t):ge(e,t),!i&&t.get().count>0},ye=function(e,t,n){for(var r,i,a=t.get(),u=O.toArray(e.getBody().getElementsByTagName("span")),c=0;c<u.length;c++){var f=ue(u[c])
null!==f&&f.length&&(f===a.index.toString()&&(r||(r=u[c].firstChild),i=u[c].firstChild),fe(u[c]))}if(t.set(o(o({},a),{index:-1,count:0,text:""})),r&&i){var l=e.dom.createRng()
return l.setStart(r,0),l.setEnd(i,i.data.length),!1!==n&&e.selection.setRng(l),l}},xe=function(){var e=function(e){var t=n(b.none()),r=function(){return t.get().each(e)}
return{clear:function(){r(),t.set(b.none())},isSet:function(){return t.get().isSome()},get:function(){return t.get()},set:function(e){r(),t.set(b.some(e))}}}(s)
return o(o({},e),{on:function(t){return e.get().each(t)}})},be=tinymce.util.Tools.resolve("tinymce.Env"),we=function(e,t){var n=xe()
e.undoManager.add()
var r=O.trim(e.selection.getContent({format:"text"})),i=function(e){(function(e,t){return t.get().count>1}(0,t)?e.enable:e.disable)("next"),(function(e,t){return t.get().count>1}(0,t)?e.enable:e.disable)("prev")},a=function(e,t){var n=t?e.disable:e.enable
N(["replace","replaceall","prev","next"],n)},u=function(e,t){be.browser.isSafari()&&be.deviceType.isTouch()&&("find"===t||"replace"===t||"replaceall"===t)&&e.focus(t)},c=function(n){ye(e,t,!1),a(n,!0),i(n)},f=function(n){var r=n.getData(),o=t.get()
if(r.findtext.length){if(o.text===r.findtext&&o.matchCase===r.matchcase&&o.wholeWord===r.wholewords)he(e,t)
else{var u=me(e,t,r.findtext,r.matchcase,r.wholewords,r.inselection)
u<=0&&function(t){e.windowManager.alert("Could not find the specified string.",(function(){t.focus("findtext")}))}(n),a(n,0===u)}i(n)}else c(n)},l=t.get(),s={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"},{type:"togglemenuitem",name:"inselection",text:"Find in selection"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace all",disabled:!0}],initialData:{findtext:r,replacetext:"",wholewords:l.wholeWord,matchcase:l.matchCase,inselection:l.inSelection},onChange:function(e,n){"findtext"===n.name&&t.get().count>0&&c(e)},onAction:function(n,r){var a=n.getData()
switch(r.name){case"find":f(n)
break
case"replace":ve(e,t,a.replacetext)?i(n):c(n)
break
case"replaceall":ve(e,t,a.replacetext,!0,!0),c(n)
break
case"prev":ge(e,t),i(n)
break
case"next":he(e,t),i(n)
break
case"matchcase":case"wholewords":case"inselection":(function(e){var n=e.getData(),r=t.get()
t.set(o(o({},r),{matchCase:n.matchcase,wholeWord:n.wholewords,inSelection:n.inselection}))})(n),c(n)}u(n,r.name)},onSubmit:function(e){f(e),u(e,"find")},onClose:function(){e.focus(),ye(e,t),e.undoManager.add()}}
n.set(e.windowManager.open(s,{inline:"toolbar"}))},Oe=function(e,t){return function(){we(e,t)}}
r.add("searchreplace",(function(e){var t=n({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1,inSelection:!1})
return function(e,t){e.addCommand("SearchReplace",(function(){we(e,t)}))}(e,t),function(e,t){e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:Oe(e,t),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:Oe(e,t),icon:"search"}),e.shortcuts.add("Meta+F","",Oe(e,t))}(e,t),function(e,t){return{done:function(n){return ye(e,t,n)},find:function(n,r,o,i){return void 0===i&&(i=!1),me(e,t,n,r,o,i)},next:function(){return he(e,t)},prev:function(){return ge(e,t)},replace:function(n,r,o){return ve(e,t,n,r,o)}}}(e,t)}))})()

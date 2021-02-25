(function(){"use strict"
var e,t,n,r,o=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},u=function(){},c=function(e){return function(){return e}},f=c(!1),l=c(!0),s=c("[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"),d=function(){return m},m=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:f,isSome:f,isNone:l,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(void 0),or:n,orThunk:t,map:d,each:u,bind:d,exists:f,forall:l,filter:d,equals:e,equals_:e,toArray:function(){return[]},toString:c("none()")}),h=function(e){var t=c(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:l,isNone:f,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return h(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:m},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(f,(function(t){return n(e,t)}))}}
return o},g={some:h,none:d,from:function(e){return null==e?m:h(e)}},p=s,v=tinymce.util.Tools.resolve("tinymce.util.Tools"),y=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},x=function(e){return function(t){return typeof t===e}},b=y("string"),w=y("array"),O=x("boolean"),C=x("number"),T=Array.prototype.slice,N=Array.prototype.push,E=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o]
r[o]=t(i,o)}return r},k=function(e,t){for(var n=0,r=e.length;n<r;n++){t(e[n],n)}},S=function(e,t){for(var n=e.length-1;n>=0;n--){t(e[n],n)}},A=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!w(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
N.apply(t,e[n])}return t}(E(e,t))},D=Object.hasOwnProperty,M=function(e,t){return D.call(e,t)},B=("undefined"!=typeof window?window:Function("return this;")(),r=3,function(e){return function(e){return e.dom.nodeType}(e)===r}),F=function(e,t,n){(function(e,t,n){if(!(b(n)||O(n)||C(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")})(e.dom,t,n)},I=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},P={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return I(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e)
return I(n)},fromText:function(e,t){var n=(t||document).createTextNode(e)
return I(n)},fromDom:I,fromPoint:function(e,t,n){return g.from(e.dom.elementFromPoint(t,n)).map(I)}},R=function(e,t){return{element:e,offset:t}},W=function(e,t){var n=function(e){return E(e.dom.childNodes,P.fromDom)}(e)
return n.length>0&&t<n.length?R(n[t],0):R(e,t)},j=function(e,t){(function(e){return g.from(e.dom.parentNode).map(P.fromDom)})(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))},q=function(e,t){j(e,t),function(e,t){e.dom.appendChild(t.dom)}(t,e)}
var V,_,H,L=(V=B,_="text",{get:function(e){if(!V(e))throw new Error("Can only get "+_+" value of a "+_+" node")
return H(e).getOr("")},getOption:H=function(e){return V(e)?g.from(e.dom.nodeValue):g.none()},set:function(e,t){if(!V(e))throw new Error("Can only set raw "+_+" value of a "+_+" node")
e.dom.nodeValue=t}}),U=function(e){return L.get(e)},$=function(e,t){return function(e,t){var n,r=void 0===t?document:t.dom
return 1!==(n=r).nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount?[]:E(r.querySelectorAll(e),P.fromDom)}(t,e)},z=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),G=function(e,t){return e.isBlock(t)||M(e.schema.getShortEndedElements(),t.nodeName)},K=function(e,t){return"false"===e.getContentEditable(t)},J=function(e,t){return!e.isBlock(t)&&M(e.schema.getWhiteSpaceElements(),t.nodeName)},Q=function(e,t){return W(P.fromDom(e),t)},X=function(e,t,n,r,o,i){void 0===i&&(i=!0)
for(var a=i?t(!1):n;a;){var u=K(e,a)
if(u||J(e,a)){if(u?r.cef(a):r.boundary(a))break
a=t(!0)}else{if(G(e,a)){if(r.boundary(a))break}else 3===a.nodeType&&r.text(a)
if(a===o)break
a=t(!1)}}},Y=function(e,t,n,r,o){if(!function(e,t){return G(e,t)||K(e,t)||J(e,t)||function(e,t){return"true"===e.getContentEditable(t)&&"false"===e.getContentEditableParent(t.parentNode)}(e,t)}(e,n)){var i=e.getParent(r,e.isBlock),a=new z(n,i),u=o?a.next:a.prev
X(e,u,n,{boundary:l,cef:l,text:function(e){o?t.fOffset+=e.length:t.sOffset+=e.length,t.elements.push(P.fromDom(e))}})}},Z=function(e,t,n,r,o,i){void 0===i&&(i=!0)
var a=new z(n,t),u=[],c={sOffset:0,fOffset:0,elements:[]}
Y(e,c,n,t,!1)
var f=function(){return c.elements.length>0&&(u.push(c),c={sOffset:0,fOffset:0,elements:[]}),!1}
return X(e,a.next,n,{boundary:f,cef:function(e){return f(),o&&u.push.apply(u,o.cef(e)),!1},text:function(e){c.elements.push(P.fromDom(e)),o&&o.text(e,c)}},r,i),r&&Y(e,c,r,t,!0),f(),u},ee=function(e,t){var n=Q(t.startContainer,t.startOffset),r=n.element.dom,o=Q(t.endContainer,t.endOffset),i=o.element.dom
return Z(e,t.commonAncestorContainer,r,i,{text:function(e,t){e===i?t.fOffset+=e.length-o.offset:e===r&&(t.sOffset+=n.offset)},cef:function(t){var n,r,o,i=A($(P.fromDom(t),"*[contenteditable=true]"),(function(t){var n=t.dom
return Z(e,n,n)}))
return n=i,r=function(e,t){return function(e,t){return function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)}(e,t,Node.DOCUMENT_POSITION_PRECEDING)}(e.elements[0].dom,t.elements[0].dom)?1:-1},(o=T.call(n,0)).sort(r),o}},!1)},te=function(e,t){return t.collapsed?[]:ee(e,t)},ne=function(e,t){var n=e.createRng()
return n.selectNode(t),te(e,n)},re=function(e,t){var n,r,o
return function(e,t){if(0===e.length)return[]
for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var u=e[i],c=t(u)
c!==n&&(r.push(o),o=[]),n=c,o.push(u)}return 0!==o.length&&r.push(o),r}((n=e,r=function(e,n){var r=U(n),o=e.last,i=o+r.length,a=A(t,(function(e,t){return e.start<i&&e.finish>o?[{element:n,start:Math.max(o,e.start)-o,finish:Math.min(i,e.finish)-o,matchId:t}]:[]}))
return{results:e.results.concat(a),last:i}},o={results:[],last:0},k(n,(function(e){o=r(o,e)})),o).results,(function(e){return e.matchId}))},oe=function(e,t){return A(t,(function(t){var n=t.elements,r=E(n,U).join(""),o=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length)
var o=t.regex
o.lastIndex=n
for(var i,a=[];i=o.exec(e);){var u=i[t.matchIndex],c=i.index+i[0].indexOf(u),f=c+u.length
if(f>r)break
a.push({start:c,finish:f}),o.lastIndex=f}return a}(r,e,t.sOffset,r.length-t.fOffset)
return re(n,o)}))},ie=function(e,t){S(e,(function(e,n){S(e,(function(e){var r=P.fromDom(t.cloneNode(!1))
F(r,"data-mce-index",n)
var o=e.element.dom
if(o.length===e.finish&&0===e.start)q(e.element,r)
else{o.length!==e.finish&&o.splitText(e.finish)
var i=o.splitText(e.start)
q(P.fromDom(i),r)}}))}))},ae=function(e,t,n,r){var o=n.getBookmark(),i=e.select("td[data-mce-selected],th[data-mce-selected]"),a=i.length>0?function(e,t){return A(t,(function(t){return ne(e,t)}))}(e,i):te(e,n.getRng()),u=oe(t,a)
return ie(u,r),n.moveToBookmark(o),u.length},ue=function(e){var t=e.getAttribute("data-mce-index")
return"number"==typeof t?""+t:t},ce=function(e,t,n,r){var o=e.dom.create("span",{"data-mce-bogus":1})
o.className="mce-match-marker"
var i=e.getBody()
return ye(e,t,!1),r?ae(e.dom,n,e.selection,o):function(e,t,n,r){var o=ne(e,n),i=oe(t,o)
return ie(i,r),i.length}(e.dom,n,i,o)},fe=function(e){var t=e.parentNode
e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},le=function(e,t){var n=[],r=v.toArray(e.getBody().getElementsByTagName("span"))
if(r.length)for(var o=0;o<r.length;o++){var i=ue(r[o])
null!==i&&i.length&&(i===t.toString()&&n.push(r[o]))}return n},se=function(e,t,n){var r=t.get(),o=r.index,i=e.dom;(n=!1!==n)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,i.removeClass(le(e,r.index),"mce-match-marker-selected")
var a=le(e,o)
return a.length?(i.addClass(le(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),o):-1},de=function(e,t){var n=t.parentNode
e.remove(t),e.isEmpty(n)&&e.remove(n)},me=function(e,t,n,r,o,i){var a=function(e,t){var n="("+e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n\\uFEFF]")+")"
return t?"(?:^|\\s|"+p()+")"+n+"(?=$|\\s|"+p()+")":n}(n,o),u={regex:new RegExp(a,r?"g":"gi"),matchIndex:1},c=ce(e,t,u,i)
if(c){var f=se(e,t,!0)
t.set({index:f,count:c,text:n,matchCase:r,wholeWord:o,inSelection:i})}return c},he=function(e,t){var n=se(e,t,!0)
t.set(a(a({},t.get()),{index:n}))},ge=function(e,t){var n=se(e,t,!1)
t.set(a(a({},t.get()),{index:n}))},pe=function(e){var t=ue(e)
return null!==t&&t.length>0},ve=function(e,t,n,r,o){var i,u=t.get(),c=u.index,f=c
r=!1!==r
for(var l=e.getBody(),s=v.grep(v.toArray(l.getElementsByTagName("span")),pe),d=0;d<s.length;d++){var m=ue(s[d]),h=i=parseInt(m,10)
if(o||h===u.index){for(n.length?(s[d].firstChild.nodeValue=n,fe(s[d])):de(e.dom,s[d]);s[++d];){if((h=parseInt(ue(s[d]),10))!==i){d--
break}de(e.dom,s[d])}r&&f--}else i>c&&s[d].setAttribute("data-mce-index",String(i-1))}return t.set(a(a({},u),{count:o?0:u.count-1,index:f})),r?he(e,t):ge(e,t),!o&&t.get().count>0},ye=function(e,t,n){var r,o,i,u=t.get(),c=v.toArray(e.getBody().getElementsByTagName("span"))
for(r=0;r<c.length;r++){var f=ue(c[r])
null!==f&&f.length&&(f===u.index.toString()&&(o||(o=c[r].firstChild),i=c[r].firstChild),fe(c[r]))}if(t.set(a(a({},u),{index:-1,count:0,text:""})),o&&i){var l=e.dom.createRng()
return l.setStart(o,0),l.setEnd(i,i.data.length),!1!==n&&e.selection.setRng(l),l}},xe=tinymce.util.Tools.resolve("tinymce.Env"),be=function(e,t){var n,r=(n=o(g.none()),{clear:function(){return n.set(g.none())},set:function(e){return n.set(g.some(e))},isSet:function(){return n.get().isSome()},on:function(e){return n.get().each(e)}})
e.undoManager.add()
var i=v.trim(e.selection.getContent({format:"text"}))
function u(e){(function(e,t){return t.get().count>1}(0,t)?e.enable:e.disable)("next"),(function(e,t){return t.get().count>1}(0,t)?e.enable:e.disable)("prev")}var c=function(e,t){var n=t?e.disable:e.enable
k(["replace","replaceall","prev","next"],n)}
var f=function(e,t){xe.browser.isSafari()&&xe.deviceType.isTouch()&&("find"===t||"replace"===t||"replaceall"===t)&&e.focus(t)},l=function(n){ye(e,t,!1),c(n,!0),u(n)},s=function(n){var r=n.getData(),o=t.get()
if(r.findtext.length){if(o.text===r.findtext&&o.matchCase===r.matchcase&&o.wholeWord===r.wholewords)he(e,t)
else{var i=me(e,t,r.findtext,r.matchcase,r.wholewords,r.inselection)
i<=0&&function(t){e.windowManager.alert("Could not find the specified string.",(function(){t.focus("findtext")}))}(n),c(n,0===i)}u(n)}else l(n)},d=t.get(),m={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"},{type:"togglemenuitem",name:"inselection",text:"Find in selection"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",disabled:!0}],initialData:{findtext:i,replacetext:"",wholewords:d.wholeWord,matchcase:d.matchCase,inselection:d.inSelection},onChange:function(e,n){"findtext"===n.name&&t.get().count>0&&l(e)},onAction:function(n,r){var o=n.getData()
switch(r.name){case"find":s(n)
break
case"replace":ve(e,t,o.replacetext)?u(n):l(n)
break
case"replaceall":ve(e,t,o.replacetext,!0,!0),l(n)
break
case"prev":ge(e,t),u(n)
break
case"next":he(e,t),u(n)
break
case"matchcase":case"wholewords":case"inselection":(function(e){var n=e.getData(),r=t.get()
t.set(a(a({},r),{matchCase:n.matchcase,wholeWord:n.wholewords,inSelection:n.inselection}))})(n),l(n)}f(n,r.name)},onSubmit:function(e){s(e),f(e,"find")},onClose:function(){e.focus(),ye(e,t),e.undoManager.add()}}
r.set(e.windowManager.open(m,{inline:"toolbar"}))},we=function(e,t){return function(){be(e,t)}}
i.add("searchreplace",(function(e){var t=o({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1,inSelection:!1})
return function(e,t){e.addCommand("SearchReplace",(function(){be(e,t)}))}(e,t),function(e,t){e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:we(e,t),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:we(e,t),icon:"search"}),e.shortcuts.add("Meta+F","",we(e,t))}(e,t),function(e,t){return{done:function(n){return ye(e,t,n)},find:function(n,r,o,i){return void 0===i&&(i=!1),me(e,t,n,r,o,i)},next:function(){return he(e,t)},prev:function(){return ge(e,t)},replace:function(n,r,o){return ve(e,t,n,r,o)}}}(e,t)}))})()

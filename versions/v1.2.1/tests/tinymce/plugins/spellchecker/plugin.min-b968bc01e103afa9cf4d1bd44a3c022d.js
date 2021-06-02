!function(){"use strict"
var e=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=Object.hasOwnProperty,r=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=tinymce.util.Tools.resolve("tinymce.util.URI"),a=tinymce.util.Tools.resolve("tinymce.util.XHR"),i=function(e){return e.getParam("spellchecker_rpc_url")},c=function(e){var t=new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`§©«®±¶·¸»¼½¾¿×÷¤”“„    ]+',"g")
return e.getParam("spellchecker_wordchar_pattern",t)}
function s(e){return e&&1===e.nodeType&&"false"===e.contentEditable}var l=function(e,t){var n
return t.get()||(n=function(e,t){var n,r=[],o=t.dom,a=t.schema.getBlockElements(),i=t.schema.getWhiteSpaceElements(),c=t.schema.getShortEndedElements()
function l(t){var n=e.getElementsByTagName("*"),r=[]
t="number"==typeof t?""+t:null
for(var o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-mce-index")
null!==i&&i.length&&-1!==a.className.indexOf("mce-spellchecker-word")&&(i!==t&&null!==t||r.push(a))}return r}function u(e){for(var t=r.length;t--;)if(r[t]===e)return t
return-1}function d(e){for(var t=0,n=r.length;t<n&&!1!==e(r[t],t);t++);return this}function f(e){for(var t=l(e?u(e):null),n=t.length;n--;)!function(e){for(var t=e.parentNode;0<e.childNodes.length;)t.insertBefore(e.childNodes[0],e)
t.removeChild(e)}(t[n])
return this}function h(e){var n=l(u(e)),r=t.dom.createRng()
return r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),r}var g=function e(t){var n
if(3===t.nodeType)return t.data
if(i[t.nodeName]&&!a[t.nodeName])return""
if(s(t))return"\n"
if(n="",(a[t.nodeName]||c[t.nodeName])&&(n+="\n"),t=t.firstChild)for(;n+=e(t),t=t.nextSibling;);return n}(e)
return{text:g,matches:r,each:d,filter:function(e){var t=[]
return d((function(n,r){e(n,r)&&t.push(n)})),r=t,this},reset:function(){return r.splice(0,r.length),f(),this},matchFromElement:function(e){return r[e.getAttribute("data-mce-index")]},elementFromMatch:function(e){return l(u(e))[0]},find:function(e,t){if(g&&e.global)for(;n=e.exec(g);)r.push(function(e,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches")
return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}(n,t))
return this},add:function(e,t,n){return r.push({start:e,end:e+t,text:g.substr(e,t),data:n}),this},wrap:function(t){function n(e,t){var n=r[t]
n.stencil||(n.stencil=l(n))
var a=n.stencil.cloneNode(!1)
return a.setAttribute("data-mce-index",t),e&&a.appendChild(o.doc.createTextNode(e)),a}var l
return r.length&&function(e,t,n){var r,o,l,u,d,f=[],h=0,g=e,p=0;(t=t.slice(0)).sort((function(e,t){return e.start-t.start})),d=t.shift()
e:for(;;){if((a[g.nodeName]||c[g.nodeName]||s(g))&&h++,3===g.nodeType&&(!o&&g.length+h>=d.end?(o=g,u=d.end-h):r&&f.push(g),!r&&g.length+h>d.start&&(r=g,l=d.start-h),h+=g.length),r&&o){if(g=n({startNode:r,startNodeIndex:l,endNode:o,endNodeIndex:u,innerNodes:f,match:d.text,matchIndex:p}),h-=o.length-u,o=r=null,f=[],p++,!(d=t.shift()))break}else if(i[g.nodeName]&&!a[g.nodeName]||!g.firstChild){if(g.nextSibling){g=g.nextSibling
continue}}else if(!s(g)){g=g.firstChild
continue}for(;;){if(g.nextSibling){g=g.nextSibling
break}if(g.parentNode===e)break e
g=g.parentNode}}}(e,r,(l=t,function(e){var t,r,a=e.startNode,i=e.endNode,c=e.matchIndex,s=o.doc
if(a===i){var l=a,u=l.parentNode
0<e.startNodeIndex&&(t=s.createTextNode(l.data.substring(0,e.startNodeIndex)),u.insertBefore(t,l))
var d=n(e.match,c)
return u.insertBefore(d,l),e.endNodeIndex<l.length&&(r=s.createTextNode(l.data.substring(e.endNodeIndex)),u.insertBefore(r,l)),l.parentNode.removeChild(l),d}t=s.createTextNode(a.data.substring(0,e.startNodeIndex)),r=s.createTextNode(i.data.substring(e.endNodeIndex))
for(var f=n(a.data.substring(e.startNodeIndex),c),h=0,g=e.innerNodes.length;h<g;++h){var p=e.innerNodes[h],m=n(p.data,c)
p.parentNode.replaceChild(m,p)}var v=n(i.data.substring(0,e.endNodeIndex),c)
return(u=a.parentNode).insertBefore(t,a),u.insertBefore(f,a),u.removeChild(a),(u=i.parentNode).insertBefore(v,i),u.insertBefore(r,i),u.removeChild(i),v})),this},unwrap:f,replace:function(e,n){var r=h(e)
return r.deleteContents(),0<n.length&&r.insertNode(t.dom.doc.createTextNode(n)),r},rangeFromMatch:h,indexOf:u}}(e.getBody(),e),t.set(n)),t.get()},u=function(e,t,n,c,s,l,u){var d,f,h;(e.getParam("spellchecker_callback")||(d=e,f=t,h=n,function(e,t,n,c){var s={method:e,lang:h.get()},l=""
s["addToDictionary"===e?"word":"text"]=t,r.each(s,(function(e,t){l&&(l+="&"),l+=t+"="+encodeURIComponent(e)})),a.send({url:new o(f).toAbsolute(i(d)),type:"post",content_type:"application/x-www-form-urlencoded",data:l,success:function(e){var t,r=JSON.parse(e)
r?r.error?c(r.error):n(r):(t=d.translate("Server response wasn't proper JSON."),c(t))},error:function(){var e=d.translate("The spelling service was not found: (")+i(d)+d.translate(")")
c(e)}})})).call(e.plugins.spellchecker,c,s,l,u)},d=function(e,t,n,r,o,a){g(e,n,r)||(e.setProgressState(!0),u(e,t,a,"spellcheck",l(e,r).text,(function(t){m(e,n,r,o,t)}),(function(t){e.notificationManager.open({text:t,type:"error"}),e.setProgressState(!1),g(e,n,r)})),e.focus())},f=function(e,t,n){e.dom.select("span.mce-spellchecker-word").length||g(e,t,n)},h=function(e,t,n,o,a,i){e.selection.collapse(),i?r.each(e.dom.select("span.mce-spellchecker-word"),(function(t){t.getAttribute("data-mce-word")===o&&e.dom.remove(t,!0)})):e.dom.remove(a,!0),f(e,t,n)},g=function(e,t,n){var r=e.selection.getBookmark()
if(l(e,n).reset(),e.selection.moveToBookmark(r),n.set(null),t.get())return t.set(!1),e.fire("SpellcheckEnd"),!0},p=function(e){var t=e.getAttribute("data-mce-index")
return"number"==typeof t?""+t:t},m=function(e,t,r,o,a){var i=!!a.dictionary,s=a.words
if(e.setProgressState(!1),function(e){for(var t in e)if(n.call(e,t))return!1
return!0}(s)){var u=e.translate("No misspellings found.")
return e.notificationManager.open({text:u,type:"info"}),void t.set(!1)}o.set({suggestions:s,hasDictionarySupport:i})
var d=e.selection.getBookmark()
l(e,r).find(c(e)).filter((function(e){return!!s[e.text]})).wrap((function(t){return e.dom.create("span",{class:"mce-spellchecker-word","aria-invalid":"spelling","data-mce-bogus":1,"data-mce-word":t.text})})),e.selection.moveToBookmark(d),t.set(!0),e.fire("SpellcheckStart")},v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},x="SpellcheckStart SpellcheckEnd",N=function(e,t,n,o,a,i){var c,s,l,u=(l=e,c=r.map(l.getParam("spellchecker_languages","English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv").split(","),(function(e){var t=e.split("=")
return{name:t[0],value:t[1]}})),s=[],r.each(c,(function(e){s.push({selectable:!0,text:e.name,data:e.value})})),s),f=function(){d(e,t,n,o,i,a)},h={tooltip:"Spellcheck",onAction:f,icon:"spell-check",onSetup:function(t){var r=function(){t.setActive(n.get())}
return e.on(x,r),function(){e.off(x,r)}}},g=v(v({},h),{type:"splitbutton",select:function(e){return e===a.get()},fetch:function(e){e(r.map(u,(function(e){return{type:"choiceitem",value:e.data,text:e.text}})))},onItemAction:function(e,t){a.set(t)}})
1<u.length?e.ui.registry.addSplitButton("spellchecker",g):e.ui.registry.addToggleButton("spellchecker",h),e.ui.registry.addToggleMenuItem("spellchecker",{text:"Spellcheck",icon:"spell-check",onSetup:function(t){t.setActive(n.get())
var r=function(){t.setActive(n.get())}
return e.on(x,r),function(){e.off(x,r)}},onAction:f})},k=function(e,t,n,o,a,i,c,s){var l=[],d=n.get().suggestions[c]
return r.each(d,(function(t){l.push({text:t,onAction:function(){e.insertContent(e.dom.encode(t)),e.dom.remove(s),f(e,o,a)}})})),n.get().hasDictionarySupport&&(l.push({type:"separator"}),l.push({text:"Add to dictionary",onAction:function(){var n,r,l,d,h,g,p
r=t,l=o,d=a,h=i,g=c,p=s,(n=e).setProgressState(!0),u(n,r,h,"addToDictionary",g,(function(){n.setProgressState(!1),n.dom.remove(p,!0),f(n,l,d)}),(function(e){n.notificationManager.open({text:e,type:"error"}),n.setProgressState(!1)}))}})),l.push.apply(l,[{type:"separator"},{text:"Ignore",onAction:function(){h(e,o,a,c,s)}},{text:"Ignore all",onAction:function(){h(e,o,a,c,s,!0)}}]),l},y=function(e,t,n,o,a,i){e.ui.registry.addContextMenu("spellchecker",{update:function(c){var s=c
if("mce-spellchecker-word"!==s.className)return[]
var l=function(e,t){var n=[],o=r.toArray(e.getBody().getElementsByTagName("span"))
if(o.length)for(var a=0;a<o.length;a++){var i=p(o[a])
null!==i&&i.length&&i===t.toString()&&n.push(o[a])}return n}(e,p(s))
if(0<l.length){var u=e.dom.createRng()
return u.setStartBefore(l[0]),u.setEndAfter(l[l.length-1]),e.selection.setRng(u),k(e,t,n,o,a,i,s.getAttribute("data-mce-word"),l)}}})}
t.add("spellchecker",(function(t,n){if(0==(!!t.hasPlugin("tinymcespellchecker",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."),!0))){var r=e(!1),o=e((w=(b=t).getParam("language","en"),b.getParam("spellchecker_language",w))),a=e(null),i=e(null)
return N(t,n,r,a,o,i),y(t,n,i,r,a,o),p=n,v=r,x=a,k=i,S=o,(g=t).addCommand("mceSpellCheck",(function(){d(g,p,v,x,k,S)})),s=t,l=r,u=i,f=a,h=o,{getTextMatcher:function(){return f.get()},getWordCharPattern:function(){return c(s)},markErrors:function(e){m(s,l,f,u,e)},getLanguage:function(){return h.get()}}}var s,l,u,f,h,g,p,v,x,k,S,b,w}))}()

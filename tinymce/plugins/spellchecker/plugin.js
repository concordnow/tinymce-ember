(function(){"use strict"
var e=function(e){var t=e
return{get:function(){return t},set:function(e){t=e}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=Object.hasOwnProperty,r=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=tinymce.util.Tools.resolve("tinymce.util.URI"),i=tinymce.util.Tools.resolve("tinymce.util.XHR"),a=function(e){return e.getParam("spellchecker_rpc_url")},c=function(e){var t=new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`§©«®±¶·¸»¼½¾¿×÷¤”“„    ]+',"g")
return e.getParam("spellchecker_wordchar_pattern",t)},l=function(e){return e&&1===e.nodeType&&"false"===e.contentEditable},s=function(e,t){var n,r=[],o=t.dom,i=t.schema.getBlockElements(),a=t.schema.getWhiteSpaceElements(),c=t.schema.getShortEndedElements(),s=function(e,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches")
return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}},u=function(e){if(3===e.nodeType)return e.data
if(a[e.nodeName]&&!i[e.nodeName])return""
if(l(e))return"\n"
var t=""
if((i[e.nodeName]||c[e.nodeName])&&(t+="\n"),e=e.firstChild)do{t+=u(e)}while(e=e.nextSibling)
return t},d=function(e){for(var t=e.parentNode;e.childNodes.length>0;)t.insertBefore(e.childNodes[0],e)
t.removeChild(e)},f=function(t){var n=e.getElementsByTagName("*"),r=[]
t="number"==typeof t?""+t:null
for(var o=0;o<n.length;o++){var i=n[o],a=i.getAttribute("data-mce-index")
null!==a&&a.length&&-1!==i.className.indexOf("mce-spellchecker-word")&&(a!==t&&null!==t||r.push(i))}return r},h=function(e){for(var t=r.length;t--;)if(r[t]===e)return t
return-1}
function g(e){for(var t=0,n=r.length;t<n&&!1!==e(r[t],t);t++);return this}function p(e){var t,n=f(e?h(e):null)
for(t=n.length;t--;)d(n[t])
return this}var m=function(e){var n=f(h(e)),r=t.dom.createRng()
return r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),r}
var v=u(e)
return{text:v,matches:r,each:g,filter:function(e){var t=[]
return g((function(n,r){e(n,r)&&t.push(n)})),r=t,this},reset:function(){return r.splice(0,r.length),p(),this},matchFromElement:function(e){return r[e.getAttribute("data-mce-index")]},elementFromMatch:function(e){return f(h(e))[0]},find:function(e,t){if(v&&e.global)for(;n=e.exec(v);)r.push(s(n,t))
return this},add:function(e,t,n){return r.push({start:e,end:e+t,text:v.substr(e,t),data:n}),this},wrap:function(t){return r.length&&function(e,t,n){var r,o,s,u,d,f=[],h=0,g=e,p=0;(t=t.slice(0)).sort((function(e,t){return e.start-t.start})),d=t.shift()
e:for(;;){if((i[g.nodeName]||c[g.nodeName]||l(g))&&h++,3===g.nodeType&&(!o&&g.length+h>=d.end?(o=g,u=d.end-h):r&&f.push(g),!r&&g.length+h>d.start&&(r=g,s=d.start-h),h+=g.length),r&&o){if(g=n({startNode:r,startNodeIndex:s,endNode:o,endNodeIndex:u,innerNodes:f,match:d.text,matchIndex:p}),h-=o.length-u,r=null,o=null,f=[],p++,!(d=t.shift()))break}else if(a[g.nodeName]&&!i[g.nodeName]||!g.firstChild){if(g.nextSibling){g=g.nextSibling
continue}}else if(!l(g)){g=g.firstChild
continue}for(;;){if(g.nextSibling){g=g.nextSibling
break}if(g.parentNode===e)break e
g=g.parentNode}}}(e,r,function(e){var t=function(t,n){var i=r[n]
i.stencil||(i.stencil=e(i))
var a=i.stencil.cloneNode(!1)
return a.setAttribute("data-mce-index",""+n),t&&a.appendChild(o.doc.createTextNode(t)),a}
return function(e){var n,r,i,a=e.startNode,c=e.endNode,l=e.matchIndex,s=o.doc
if(a===c){var u=a
i=u.parentNode,e.startNodeIndex>0&&(n=s.createTextNode(u.data.substring(0,e.startNodeIndex)),i.insertBefore(n,u))
var d=t(e.match,l)
return i.insertBefore(d,u),e.endNodeIndex<u.length&&(r=s.createTextNode(u.data.substring(e.endNodeIndex)),i.insertBefore(r,u)),u.parentNode.removeChild(u),d}n=s.createTextNode(a.data.substring(0,e.startNodeIndex)),r=s.createTextNode(c.data.substring(e.endNodeIndex))
for(var f=t(a.data.substring(e.startNodeIndex),l),h=0,g=e.innerNodes.length;h<g;++h){var p=e.innerNodes[h],m=t(p.data,l)
p.parentNode.replaceChild(m,p)}var v=t(c.data.substring(0,e.endNodeIndex),l)
return(i=a.parentNode).insertBefore(n,a),i.insertBefore(f,a),i.removeChild(a),(i=c.parentNode).insertBefore(v,c),i.insertBefore(r,c),i.removeChild(c),v}}(t)),this},unwrap:p,replace:function(e,n){var r=m(e)
return r.deleteContents(),n.length>0&&r.insertNode(t.dom.doc.createTextNode(n)),r},rangeFromMatch:m,indexOf:h}},u=function(e,t){if(!t.get()){var n=s(e.getBody(),e)
t.set(n)}return t.get()},d=function(e,t,n,c,l,s,u){var d=function(e){return e.getParam("spellchecker_callback")}(e);(d||function(e,t,n){return function(c,l,s,u){var d={method:c,lang:n.get()},f=""
d["addToDictionary"===c?"word":"text"]=l,r.each(d,(function(e,t){f&&(f+="&"),f+=t+"="+encodeURIComponent(e)})),i.send({url:new o(t).toAbsolute(a(e)),type:"post",content_type:"application/x-www-form-urlencoded",data:f,success:function(t){var n=JSON.parse(t)
if(n)n.error?u(n.error):s(n)
else{var r=e.translate("Server response wasn't proper JSON.")
u(r)}},error:function(){var t=e.translate("The spelling service was not found: (")+a(e)+e.translate(")")
u(t)}})}}(e,t,n)).call(e.plugins.spellchecker,c,l,s,u)},f=function(e,t,n,r,o,i){if(!p(e,n,r)){e.setProgressState(!0),d(e,t,i,"spellcheck",u(e,r).text,(function(t){v(e,n,r,o,t)}),(function(t){e.notificationManager.open({text:t,type:"error"}),e.setProgressState(!1),p(e,n,r)})),e.focus()}},h=function(e,t,n){e.dom.select("span.mce-spellchecker-word").length||p(e,t,n)},g=function(e,t,n,o,i,a){e.selection.collapse(),a?r.each(e.dom.select("span.mce-spellchecker-word"),(function(t){t.getAttribute("data-mce-word")===o&&e.dom.remove(t,!0)})):e.dom.remove(i,!0),h(e,t,n)},p=function(e,t,n){var r=e.selection.getBookmark()
if(u(e,n).reset(),e.selection.moveToBookmark(r),n.set(null),t.get())return t.set(!1),function(e){e.fire("SpellcheckEnd")}(e),!0},m=function(e){var t=e.getAttribute("data-mce-index")
return"number"==typeof t?""+t:t},v=function(e,t,r,o,i){var a=!!i.dictionary,l=i.words
if(e.setProgressState(!1),function(e){for(var t in e)if(n.call(e,t))return!1
return!0}(l)){var s=e.translate("No misspellings found.")
return e.notificationManager.open({text:s,type:"info"}),void t.set(!1)}o.set({suggestions:l,hasDictionarySupport:a})
var d=e.selection.getBookmark()
u(e,r).find(c(e)).filter((function(e){return!!l[e.text]})).wrap((function(t){return e.dom.create("span",{class:"mce-spellchecker-word","aria-invalid":"spelling","data-mce-bogus":1,"data-mce-word":t.text})})),e.selection.moveToBookmark(d),t.set(!0),function(e){e.fire("SpellcheckStart")}(e)},x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},N="SpellcheckStart SpellcheckEnd",k=function(e,t,n,o,i,a){var c,l,s=(c=function(e){return r.map(function(e){return e.getParam("spellchecker_languages","English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv")}(e).split(","),(function(e){var t=e.split("=")
return{name:t[0],value:t[1]}}))}(e),l=[],r.each(c,(function(e){l.push({selectable:!0,text:e.name,data:e.value})})),l),u=function(){f(e,t,n,o,a,i)},d={tooltip:"Spellcheck",onAction:u,icon:"spell-check",onSetup:function(t){var r=function(){t.setActive(n.get())}
return e.on(N,r),function(){e.off(N,r)}}},h=x(x({},d),{type:"splitbutton",select:function(e){return e===i.get()},fetch:function(e){e(r.map(s,(function(e){return{type:"choiceitem",value:e.data,text:e.text}})))},onItemAction:function(e,t){i.set(t)}})
s.length>1?e.ui.registry.addSplitButton("spellchecker",h):e.ui.registry.addToggleButton("spellchecker",d),e.ui.registry.addToggleMenuItem("spellchecker",{text:"Spellcheck",icon:"spell-check",onSetup:function(t){t.setActive(n.get())
var r=function(){t.setActive(n.get())}
return e.on(N,r),function(){e.off(N,r)}},onAction:u})},y=function(e,t,n,o,i,a,c,l){var s=[],u=n.get().suggestions[c]
return r.each(u,(function(t){s.push({text:t,onAction:function(){e.insertContent(e.dom.encode(t)),e.dom.remove(l),h(e,o,i)}})})),n.get().hasDictionarySupport&&(s.push({type:"separator"}),s.push({text:"Add to dictionary",onAction:function(){(function(e,t,n,r,o,i,a){e.setProgressState(!0),d(e,t,o,"addToDictionary",i,(function(){e.setProgressState(!1),e.dom.remove(a,!0),h(e,n,r)}),(function(t){e.notificationManager.open({text:t,type:"error"}),e.setProgressState(!1)}))})(e,t,o,i,a,c,l)}})),s.push.apply(s,[{type:"separator"},{text:"Ignore",onAction:function(){g(e,o,i,c,l)}},{text:"Ignore all",onAction:function(){g(e,o,i,c,l,true)}}]),s},S=function(e,t,n,o,i,a){e.ui.registry.addContextMenu("spellchecker",{update:function(c){var l=c
if("mce-spellchecker-word"!==l.className)return[]
var s=function(e,t){var n=[],o=r.toArray(e.getBody().getElementsByTagName("span"))
if(o.length)for(var i=0;i<o.length;i++){var a=m(o[i])
null!==a&&a.length&&a===t.toString()&&n.push(o[i])}return n}(e,m(l))
if(s.length>0){var u=e.dom.createRng()
return u.setStartBefore(s[0]),u.setEndAfter(s[s.length-1]),e.selection.setRng(u),y(e,t,n,o,i,a,l.getAttribute("data-mce-word"),s)}}})}
t.add("spellchecker",(function(t,n){if(!1===function(e){return!!e.hasPlugin("tinymcespellchecker",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."),!0)}(t)){var r=e(!1),o=e(function(e){var t=e.getParam("language","en")
return e.getParam("spellchecker_language",t)}(t)),i=e(null),a=e(null)
return k(t,n,r,i,o,a),S(t,n,a,r,i,o),function(e,t,n,r,o,i){e.addCommand("mceSpellCheck",(function(){f(e,t,n,r,o,i)}))}(t,n,r,i,a,o),function(e,t,n,r,o){return{getTextMatcher:r.get,getWordCharPattern:function(){return c(e)},markErrors:function(o){v(e,t,r,n,o)},getLanguage:o.get}}(t,r,a,i,o)}}))})()

!function(){"use strict"
function e(e){var t=e
return{get:function(){return t},set:function(e){t=e}}}function t(e){return e.getParam("spellchecker_rpc_url")}function n(e){var t=new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`§©«®±¶·¸»¼½¾¿×÷¤”“„    ]+',"g")
return e.getParam("spellchecker_wordchar_pattern",t)}function r(e){return e&&1===e.nodeType&&"false"===e.contentEditable}function o(e,t){var n
return t.get()||(n=function(e,t){function n(t){var n=e.getElementsByTagName("*"),r=[]
t="number"==typeof t?""+t:null
for(var o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-mce-index")
null!==i&&i.length&&-1!==a.className.indexOf("mce-spellchecker-word")&&(i!==t&&null!==t||r.push(a))}return r}function o(e){for(var t=i.length;t--;)if(i[t]===e)return t
return-1}var a,i=[],c=t.dom,s=t.schema.getBlockElements(),l=t.schema.getWhiteSpaceElements(),u=t.schema.getShortEndedElements(),d=function(e){if(3===e.nodeType)return e.data
if(l[e.nodeName]&&!s[e.nodeName])return""
if(r(e))return"\n"
var t=""
if((s[e.nodeName]||u[e.nodeName])&&(t+="\n"),e=e.firstChild)for(;t+=d(e),e=e.nextSibling;);return t}
function f(e){for(var t=0,n=i.length;t<n&&!1!==e(i[t],t);t++);return this}function h(e){for(var t=n(e?o(e):null),r=t.length;r--;)!function(e){for(var t=e.parentNode;0<e.childNodes.length;)t.insertBefore(e.childNodes[0],e)
t.removeChild(e)}(t[r])
return this}function g(e){var r=n(o(e)),a=t.dom.createRng()
return a.setStartBefore(r[0]),a.setEndAfter(r[r.length-1]),a}var p=d(e)
return{text:p,matches:i,each:f,filter:function(e){var t=[]
return f((function(n,r){e(n,r)&&t.push(n)})),i=t,this},reset:function(){return i.splice(0,i.length),h(),this},matchFromElement:function(e){return i[e.getAttribute("data-mce-index")]},elementFromMatch:function(e){return n(o(e))[0]},find:function(e,t){if(p&&e.global)for(;a=e.exec(p);)i.push(function(e,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches")
return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}(a,t))
return this},add:function(e,t,n){return i.push({start:e,end:e+t,text:p.substr(e,t),data:n}),this},wrap:function(t){return i.length&&function(e,t,n){var o,a,i,c,d,f=[],h=0,g=e,p=0;(t=t.slice(0)).sort((function(e,t){return e.start-t.start})),d=t.shift()
e:for(;;){if((s[g.nodeName]||u[g.nodeName]||r(g))&&h++,3===g.nodeType&&(!a&&g.length+h>=d.end?(a=g,c=d.end-h):o&&f.push(g),!o&&g.length+h>d.start&&(o=g,i=d.start-h),h+=g.length),o&&a){if(g=n({startNode:o,startNodeIndex:i,endNode:a,endNodeIndex:c,innerNodes:f,match:d.text,matchIndex:p}),h-=a.length-c,a=o=null,f=[],p++,!(d=t.shift()))break}else if(l[g.nodeName]&&!s[g.nodeName]||!g.firstChild){if(g.nextSibling){g=g.nextSibling
continue}}else if(!r(g)){g=g.firstChild
continue}for(;;){if(g.nextSibling){g=g.nextSibling
break}if(g.parentNode===e)break e
g=g.parentNode}}}(e,i,(o=t,function(e){var t=e.startNode,r=e.endNode,o=e.matchIndex,a=c.doc
if(t===r){var i=t,s=i.parentNode
0<e.startNodeIndex&&(u=a.createTextNode(i.data.substring(0,e.startNodeIndex)),s.insertBefore(u,i))
var l=n(e.match,o)
return s.insertBefore(l,i),e.endNodeIndex<i.length&&(d=a.createTextNode(i.data.substring(e.endNodeIndex)),s.insertBefore(d,i)),i.parentNode.removeChild(i),l}for(var u=a.createTextNode(t.data.substring(0,e.startNodeIndex)),d=a.createTextNode(r.data.substring(e.endNodeIndex)),f=n(t.data.substring(e.startNodeIndex),o),h=0,g=e.innerNodes.length;h<g;++h){var p=e.innerNodes[h],m=n(p.data,o)
p.parentNode.replaceChild(m,p)}var v=n(r.data.substring(0,e.endNodeIndex),o)
return(s=t.parentNode).insertBefore(u,t),s.insertBefore(f,t),s.removeChild(t),(s=r.parentNode).insertBefore(v,r),s.insertBefore(d,r),s.removeChild(r),v})),this
function n(e,t){var n=i[t]
n.stencil||(n.stencil=o(n))
var r=n.stencil.cloneNode(!1)
return r.setAttribute("data-mce-index",""+t),e&&r.appendChild(c.doc.createTextNode(e)),r}var o},unwrap:h,replace:function(e,n){var r=g(e)
return r.deleteContents(),0<n.length&&r.insertNode(t.dom.doc.createTextNode(n)),r},rangeFromMatch:g,indexOf:o}}(e.getBody(),e),t.set(n)),t.get()}function a(e,n,r,o,a,i,c){var s,l,u;(e.getParam("spellchecker_callback")||(s=e,l=n,u=r,function(e,n,r,o){var a={method:e,lang:u.get()},i=""
a["addToDictionary"===e?"word":"text"]=n,h.each(a,(function(e,t){i&&(i+="&"),i+=t+"="+encodeURIComponent(e)})),p.send({url:new g(l).toAbsolute(t(s)),type:"post",content_type:"application/x-www-form-urlencoded",data:i,success:function(e){var t,n=JSON.parse(e)
n?n.error?o(n.error):r(n):(t=s.translate("Server response wasn't proper JSON."),o(t))},error:function(){var e=s.translate("The spelling service was not found: (")+t(s)+s.translate(")")
o(e)}})})).call(e.plugins.spellchecker,o,a,i,c)}function i(e,t,n,r,i,c){m(e,n,r)||(e.setProgressState(!0),a(e,t,c,"spellcheck",o(e,r).text,(function(t){v(e,n,r,i,t)}),(function(t){e.notificationManager.open({text:t,type:"error"}),e.setProgressState(!1),m(e,n,r)})),e.focus())}function c(e,t,n){e.dom.select("span.mce-spellchecker-word").length||m(e,t,n)}function s(e,t,n,r,o,a){e.selection.collapse(),a?h.each(e.dom.select("span.mce-spellchecker-word"),(function(t){t.getAttribute("data-mce-word")===r&&e.dom.remove(t,!0)})):e.dom.remove(o,!0),c(e,t,n)}function l(e){var t=e.getAttribute("data-mce-index")
return"number"==typeof t?""+t:t}function u(e,t,n,r,o,i){e.ui.registry.addContextMenu("spellchecker",{update:function(u){var d=u
if("mce-spellchecker-word"!==d.className)return[]
var f,g,p,m,v,x,N,k,y,S,b=function(e,t){var n=[],r=h.toArray(e.getBody().getElementsByTagName("span"))
if(r.length)for(var o=0;o<r.length;o++){var a=l(r[o])
null!==a&&a.length&&a===t.toString()&&n.push(r[o])}return n}(e,l(d))
if(0<b.length){var w=e.dom.createRng()
return w.setStartBefore(b[0]),w.setEndAfter(b[b.length-1]),e.selection.setRng(w),f=e,g=t,p=n,m=r,v=o,x=i,N=d.getAttribute("data-mce-word"),k=b,y=[],S=p.get().suggestions[N],h.each(S,(function(e){y.push({text:e,onAction:function(){f.insertContent(f.dom.encode(e)),f.dom.remove(k),c(f,m,v)}})})),p.get().hasDictionarySupport&&(y.push({type:"separator"}),y.push({text:"Add to dictionary",onAction:function(){var e,t=g,n=m,r=v,o=x,i=N,s=k;(e=f).setProgressState(!0),a(e,t,o,"addToDictionary",i,(function(){e.setProgressState(!1),e.dom.remove(s,!0),c(e,n,r)}),(function(t){e.notificationManager.open({text:t,type:"error"}),e.setProgressState(!1)}))}})),y.push.apply(y,[{type:"separator"},{text:"Ignore",onAction:function(){s(f,m,v,N,k)}},{text:"Ignore all",onAction:function(){s(f,m,v,N,k,!0)}}]),y}}})}var d=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=Object.hasOwnProperty,h=tinymce.util.Tools.resolve("tinymce.util.Tools"),g=tinymce.util.Tools.resolve("tinymce.util.URI"),p=tinymce.util.Tools.resolve("tinymce.util.XHR"),m=function(e,t,n){var r=e.selection.getBookmark()
if(o(e,n).reset(),e.selection.moveToBookmark(r),n.set(null),t.get())return t.set(!1),e.fire("SpellcheckEnd"),!0},v=function(e,t,r,a,i){var c=!!i.dictionary,s=i.words
if(e.setProgressState(!1),function(e){for(var t in e)if(f.call(e,t))return
return 1}(s)){var l=e.translate("No misspellings found.")
return e.notificationManager.open({text:l,type:"info"}),void t.set(!1)}a.set({suggestions:s,hasDictionarySupport:c})
var u=e.selection.getBookmark()
o(e,r).find(n(e)).filter((function(e){return!!s[e.text]})).wrap((function(t){return e.dom.create("span",{class:"mce-spellchecker-word","aria-invalid":"spelling","data-mce-bogus":1,"data-mce-word":t.text})})),e.selection.moveToBookmark(u),t.set(!0),e.fire("SpellcheckStart")},x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},N="SpellcheckStart SpellcheckEnd"
d.add("spellchecker",(function(t,r){if(0==(!!t.hasPlugin("tinymcespellchecker",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."),!0))){var o=e(!1),a=e((F=(D=t).getParam("language","en"),D.getParam("spellchecker_language",F))),c=e(null),s=e(null)
return d=t,f=r,g=o,p=c,m=a,k=s,y=h.map(d.getParam("spellchecker_languages","English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv").split(","),(function(e){var t=e.split("=")
return{name:t[0],value:t[1]}})),S=[],h.each(y,(function(e){S.push({selectable:!0,text:e.name,data:e.value})})),b=S,T=x(x({},w={tooltip:"Spellcheck",onAction:l,icon:"spell-check",onSetup:function(e){function t(){e.setActive(g.get())}return d.on(N,t),function(){d.off(N,t)}}}),{type:"splitbutton",select:function(e){return e===m.get()},fetch:function(e){e(h.map(b,(function(e){return{type:"choiceitem",value:e.data,text:e.text}})))},onItemAction:function(e,t){m.set(t)}}),1<b.length?d.ui.registry.addSplitButton("spellchecker",T):d.ui.registry.addToggleButton("spellchecker",w),d.ui.registry.addToggleMenuItem("spellchecker",{text:"Spellcheck",icon:"spell-check",onSetup:function(e){function t(){e.setActive(g.get())}return e.setActive(g.get()),d.on(N,t),function(){d.off(N,t)}},onAction:l}),u(t,r,s,o,c,a),E=r,R=o,_=c,M=s,O=a,(C=t).addCommand("mceSpellCheck",(function(){i(C,E,R,_,M,O)})),A=t,B=o,P=s,{getTextMatcher:(I=c).get,getWordCharPattern:function(){return n(A)},markErrors:function(e){v(A,B,I,P,e)},getLanguage:a.get}}function l(){i(d,f,g,p,k,m)}var d,f,g,p,m,k,y,S,b,w,T,A,B,P,I,C,E,R,_,M,O,D,F}))}()

!function(){"use strict"
function t(t){return t.getParam("toc_class","mce-toc")}function e(t){var e=t.getParam("toc_header","h2")
return/^h[1-6]$/.test(e)?e:"h2"}function n(t){return function(e){function n(){return e.setDisabled(t.mode.isReadOnly()||!(0<s(t).length))}return n(),t.on("LoadContent SetContent change",n),function(){return t.on("LoadContent SetContent change",n)}}}function o(t){var n,o,r,i="",c=s(t),u=function(t){for(var e=9,n=0;n<t.length;n++)if(1===(e=t[n].level<e?t[n].level:e))return e
return e}(c)-1
if(!c.length)return""
i+=(n=e(t),o=a.translate("Table of Contents"),r="</"+n+">","<"+n+' contenteditable="true">'+l.DOM.encode(o)+r)
for(var d=0;d<c.length;d++){var f=c[d]
f.element.id=f.id
var m=c[d+1]&&c[d+1].level
if(u===f.level)i+="<li>"
else for(var v=u;v<f.level;v++)i+="<ul><li>"
if(i+='<a href="#'+f.id+'">'+f.title+"</a>",m!==f.level&&m)for(v=f.level;m<v;v--)i+="</li></ul><li>"
else i+="</li>",m||(i+="</ul>")
u=f.level}return i}function r(e){var n=t(e),r=e.$("."+n)
r.length&&e.undoManager.transact((function(){r.html(o(e))}))}var i,c=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),a=tinymce.util.Tools.resolve("tinymce.util.I18n"),u=tinymce.util.Tools.resolve("tinymce.util.Tools"),d=(i=0,function(){return"mcetoc_"+(new Date).getTime().toString(32)+(i++).toString(32)}),s=function(n){var o,r=t(n),i=e(n),c=function(t){for(var e=[],n=1;n<=t;n++)e.push("h"+n)
return e.join(",")}(1<=(o=parseInt(n.getParam("toc_depth","3"),10))&&o<=9?o:3),l=n.$(c)
return l.length&&/^h[1-9]$/i.test(i)&&(l=l.filter((function(t,e){return!n.dom.hasClass(e.parentNode,r)}))),u.map(l,(function(t){return{id:t.id||d(),level:parseInt(t.nodeName.replace(/^H/i,""),10),title:n.$.text(t),element:t}}))}
c.add("toc",(function(e){var i,c,l,a,u,d
function s(){return u.execCommand("mceInsertToc")}(i=e).addCommand("mceInsertToc",(function(){var e,n,c,l,a,u
l=t(e=i),a=e.$("."+l),u=e,!a.length||0<u.dom.getParents(a[0],".mce-offscreen-selection").length?e.insertContent((c=o(n=e),'<div class="'+n.dom.encode(t(n))+'" contenteditable="false">'+c+"</div>")):r(e)})),i.addCommand("mceUpdateToc",(function(){r(i)})),(u=e).ui.registry.addButton("toc",{icon:"toc",tooltip:"Table of contents",onAction:s,onSetup:n(u)}),u.ui.registry.addButton("tocupdate",{icon:"reload",tooltip:"Update",onAction:function(){return u.execCommand("mceUpdateToc")}}),u.ui.registry.addMenuItem("toc",{icon:"toc",text:"Table of contents",onAction:s,onSetup:n(u)}),u.ui.registry.addContextToolbar("toc",{items:"tocupdate",predicate:(d=u,function(e){return e&&d.dom.is(e,"."+t(d))&&d.getBody().contains(e)}),scope:"node",position:"node"}),l=(c=e).$,a=t(c),c.on("PreProcess",(function(t){var e=l("."+a,t.node)
e.length&&(e.removeAttr("contentEditable"),e.find("[contenteditable]").removeAttr("contentEditable"))})),c.on("SetContent",(function(){var t=l("."+a)
t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))}))}))}()
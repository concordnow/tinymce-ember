!function(){"use strict"
var t,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),o=tinymce.util.Tools.resolve("tinymce.util.I18n"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),r=function(t){return t.getParam("toc_class","mce-toc")},c=function(t){var e=t.getParam("toc_header","h2")
return/^h[1-6]$/.test(e)?e:"h2"},l=("mcetoc_",t=0,function(){return"mcetoc_"+(new Date).getTime().toString(32)+(t++).toString(32)}),a=function(t){var e,n=r(t),o=c(t),a=function(t){for(var e=[],n=1;n<=t;n++)e.push("h"+n)
return e.join(",")}(1<=(e=parseInt(t.getParam("toc_depth","3"),10))&&e<=9?e:3),u=t.$(a)
return u.length&&/^h[1-9]$/i.test(o)&&(u=u.filter((function(e,o){return!t.dom.hasClass(o.parentNode,n)}))),i.map(u,(function(e){return{id:e.id||l(),level:parseInt(e.nodeName.replace(/^H/i,""),10),title:t.$.text(e),element:e}}))},u=function(t){var e,i,r,l,u,d,s,f="",m=a(t),v=function(t){for(var e=9,n=0;n<t.length;n++)if(t[n].level<e&&(e=t[n].level),1===e)return e
return e}(m)-1
if(!m.length)return""
for(f+=(u=c(t),d=o.translate("Table of Contents"),s="</"+u+">","<"+u+' contenteditable="true">'+n.DOM.encode(d)+s),e=0;e<m.length;e++){if((r=m[e]).element.id=r.id,l=m[e+1]&&m[e+1].level,v===r.level)f+="<li>"
else for(i=v;i<r.level;i++)f+="<ul><li>"
if(f+='<a href="#'+r.id+'">'+r.title+"</a>",l!==r.level&&l)for(i=r.level;l<i;i--)f+="</li></ul><li>"
else f+="</li>",l||(f+="</ul>")
v=r.level}return f},d=function(t){var e=r(t),n=t.$("."+e)
n.length&&t.undoManager.transact((function(){n.html(u(t))}))},s=function(t){return function(e){var n=function(){return e.setDisabled(t.mode.isReadOnly()||!(0<a(t).length))}
return n(),t.on("LoadContent SetContent change",n),function(){return t.on("LoadContent SetContent change",n)}}},f=function(t){var e
t.ui.registry.addButton("toc",{icon:"toc",tooltip:"Table of contents",onAction:function(){return t.execCommand("mceInsertToc")},onSetup:s(t)}),t.ui.registry.addButton("tocupdate",{icon:"reload",tooltip:"Update",onAction:function(){return t.execCommand("mceUpdateToc")}}),t.ui.registry.addMenuItem("toc",{icon:"toc",text:"Table of contents",onAction:function(){return t.execCommand("mceInsertToc")},onSetup:s(t)}),t.ui.registry.addContextToolbar("toc",{items:"tocupdate",predicate:(e=t,function(t){return t&&e.dom.is(t,"."+r(e))&&e.getBody().contains(t)}),scope:"node",position:"node"})}
e.add("toc",(function(t){var e,n,o,i;(e=t).addCommand("mceInsertToc",(function(){(function(t){var e,n,o,i,c=r(t),l=t.$("."+c)
o=t,!(i=l).length||0<o.dom.getParents(i[0],".mce-offscreen-selection").length?t.insertContent((n=u(e=t),'<div class="'+e.dom.encode(r(e))+'" contenteditable="false">'+n+"</div>")):d(t)})(e)})),e.addCommand("mceUpdateToc",(function(){d(e)})),f(t),o=(n=t).$,i=r(n),n.on("PreProcess",(function(t){var e=o("."+i,t.node)
e.length&&(e.removeAttr("contentEditable"),e.find("[contenteditable]").removeAttr("contentEditable"))})),n.on("SetContent",(function(){var t=o("."+i)
t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))}))}))}()

!function(){"use strict"
function e(e){return e.getAttribute("id")||e.getAttribute("name")||""}function t(t){return t&&"a"===t.nodeName.toLowerCase()&&!t.getAttribute("href")&&""!==e(t)}function n(e){return e.dom.getParent(e.selection.getStart(),l)}function o(e){return function(t){for(var n,o=0;o<t.length;o++){var a=t[o],r=void 0
!(r=n=a)||r.attr("href")||!r.attr("id")&&!r.attr("name")||n.firstChild||a.attr("contenteditable",e)}}}var a=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),l="a:not([href])"
a.add("anchor",(function(a){var c,d,u;(c=a).on("PreInit",(function(){c.parser.addNodeFilter("a",o("false")),c.serializer.addNodeFilter("a",o(null))})),(d=a).addCommand("mceAnchor",(function(){var o,a,l
l=(a=n(o=d))?e(a):"",o.windowManager.open({title:"Anchor",size:"normal",body:{type:"panel",items:[{name:"id",type:"input",label:"ID",placeholder:"example"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{id:l},onSubmit:function(e){var a=o,l=e.getData().id;(/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(l)?(function(e,o){var a,l,c,d,u,s=n(e)
s?(c=e,d=o,(u=s).removeAttribute("name"),u.id=d,c.addVisual(),c.undoManager.add()):(l=o,(a=e).undoManager.transact((function(){var e,n
a.getParam("allow_html_in_named_anchor",!1,"boolean")||a.selection.collapse(!0),a.selection.isCollapsed()?a.insertContent(a.dom.createHTML("a",{id:l})):(n=(e=a).dom,r(n).walk(e.selection.getRng(),(function(e){i.each(e,(function(e){var o
t(o=e)&&!o.firstChild&&n.remove(e,!1)}))})),a.formatter.remove("namedAnchor",null,null,!0),a.formatter.apply("namedAnchor",{value:l}),a.addVisual())}))),e.focus()}(a,l),0):(a.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),1))||e.close()}})})),(u=a).ui.registry.addToggleButton("anchor",{icon:"bookmark",tooltip:"Anchor",onAction:function(){return u.execCommand("mceAnchor")},onSetup:function(e){return u.selection.selectorChangedWithUnbind("a:not([href])",e.setActive).unbind}}),u.ui.registry.addMenuItem("anchor",{icon:"bookmark",text:"Anchor...",onAction:function(){return u.execCommand("mceAnchor")}}),a.on("PreInit",(function(){a.formatter.register("namedAnchor",{inline:"a",selector:l,remove:"all",split:!0,deep:!0,attributes:{id:"%value"},onmatch:t})}))}))}()

!function(){"use strict"
function n(n,e){for(var a="",o=0;o<e;o++)a+=n
return a}function e(e,a){var o=e.getParam("nonbreaking_wrap",!0,"boolean")||e.plugins.visualchars?'<span class="'+(e.plugins.visualchars&&e.plugins.visualchars.isEnabled()?"mce-nbsp-wrap mce-nbsp":"mce-nbsp-wrap")+'" contenteditable="false">'+n("&nbsp;",a)+"</span>":n("&nbsp;",a)
e.undoManager.transact((function(){return e.insertContent(o)}))}var a=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.util.VK")
a.add("nonbreaking",(function(n){var a,t,i,r,s
function c(){return t.execCommand("mceNonBreaking")}(a=n).addCommand("mceNonBreaking",(function(){e(a,1)})),(t=n).ui.registry.addButton("nonbreaking",{icon:"non-breaking",tooltip:"Nonbreaking space",onAction:c}),t.ui.registry.addMenuItem("nonbreaking",{icon:"non-breaking",text:"Nonbreaking space",onAction:c}),0<(s="boolean"==typeof(r=(i=n).getParam("nonbreaking_force_tab",0))?!0===r?3:0:r)&&i.on("keydown",(function(n){n.keyCode!==o.TAB||n.isDefaultPrevented()||n.shiftKey||(n.preventDefault(),n.stopImmediatePropagation(),e(i,s))}))}))}()

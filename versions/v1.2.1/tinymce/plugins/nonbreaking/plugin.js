(function(){"use strict"
var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=function(n,e){for(var t="",o=0;o<e;o++)t+=n
return t},t=function(n,t){var o=function(n){return n.getParam("nonbreaking_wrap",!0,"boolean")}(n)||n.plugins.visualchars?'<span class="'+(function(n){return!!n.plugins.visualchars&&n.plugins.visualchars.isEnabled()}(n)?"mce-nbsp-wrap mce-nbsp":"mce-nbsp-wrap")+'" contenteditable="false">'+e("&nbsp;",t)+"</span>":e("&nbsp;",t)
n.undoManager.transact((function(){return n.insertContent(o)}))},o=tinymce.util.Tools.resolve("tinymce.util.VK")
n.add("nonbreaking",(function(n){(function(n){n.addCommand("mceNonBreaking",(function(){t(n,1)}))})(n),function(n){n.ui.registry.addButton("nonbreaking",{icon:"non-breaking",tooltip:"Nonbreaking space",onAction:function(){return n.execCommand("mceNonBreaking")}}),n.ui.registry.addMenuItem("nonbreaking",{icon:"non-breaking",text:"Nonbreaking space",onAction:function(){return n.execCommand("mceNonBreaking")}})}(n),function(n){var e=function(n){var e=n.getParam("nonbreaking_force_tab",0)
return"boolean"==typeof e?!0===e?3:0:e}(n)
e>0&&n.on("keydown",(function(i){if(i.keyCode===o.TAB&&!i.isDefaultPrevented()){if(i.shiftKey)return
i.preventDefault(),i.stopImmediatePropagation(),t(n,e)}}))}(n)}))})()

(function(){"use strict"
var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env")
n.add("print",(function(n){(function(n){n.addCommand("mcePrint",(function(){t.browser.isIE()?n.getDoc().execCommand("print",!1,null):n.getWin().print()}))})(n),function(n){n.ui.registry.addButton("print",{icon:"print",tooltip:"Print",onAction:function(){return n.execCommand("mcePrint")}}),n.ui.registry.addMenuItem("print",{text:"Print...",icon:"print",onAction:function(){return n.execCommand("mcePrint")}})}(n),n.addShortcut("Meta+P","","mcePrint")}))})()

!function(){"use strict"
var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env")
n.add("print",(function(n){var i,e
function r(){return e.execCommand("mcePrint")}(i=n).addCommand("mcePrint",(function(){t.browser.isIE()?i.getDoc().execCommand("print",!1,null):i.getWin().print()})),(e=n).ui.registry.addButton("print",{icon:"print",tooltip:"Print",onAction:r}),e.ui.registry.addMenuItem("print",{text:"Print...",icon:"print",onAction:r}),n.addShortcut("Meta+P","","mcePrint")}))}()
(function(){"use strict"
var n=tinymce.util.Tools.resolve("tinymce.PluginManager")
n.add("hr",(function(n){(function(n){n.addCommand("InsertHorizontalRule",(function(){n.execCommand("mceInsertContent",!1,"<hr />")}))})(n),function(n){var o=function(){return n.execCommand("InsertHorizontalRule")}
n.ui.registry.addButton("hr",{icon:"horizontal-rule",tooltip:"Horizontal line",onAction:o}),n.ui.registry.addMenuItem("hr",{icon:"horizontal-rule",text:"Horizontal line",onAction:o})}(n)}))})()

!function(){"use strict"
tinymce.util.Tools.resolve("tinymce.PluginManager").add("code",(function(e){var t,o
function n(){return o.execCommand("mceCodeEditor")}return(t=e).addCommand("mceCodeEditor",(function(){var e,o
o=(e=t).getContent({source_view:!0}),e.windowManager.open({title:"Source Code",size:"large",body:{type:"panel",items:[{type:"textarea",name:"code"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{code:o},onSubmit:function(t){var o=e,n=t.getData().code
o.focus(),o.undoManager.transact((function(){o.setContent(n)})),o.selection.setCursorLocation(),o.nodeChanged(),t.close()}})})),(o=e).ui.registry.addButton("code",{icon:"sourcecode",tooltip:"Source code",onAction:n}),o.ui.registry.addMenuItem("code",{icon:"sourcecode",text:"Source code",onAction:n}),{}}))}()

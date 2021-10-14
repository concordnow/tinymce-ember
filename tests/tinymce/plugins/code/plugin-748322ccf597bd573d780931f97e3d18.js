(function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
e.add("code",(function(e){return function(e){e.addCommand("mceCodeEditor",(function(){(function(e){var t=function(e){return e.getContent({source_view:!0})}(e)
e.windowManager.open({title:"Source Code",size:"large",body:{type:"panel",items:[{type:"textarea",name:"code"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{code:t},onSubmit:function(t){(function(e,t){e.focus(),e.undoManager.transact((function(){e.setContent(t)})),e.selection.setCursorLocation(),e.nodeChanged()})(e,t.getData().code),t.close()}})})(e)}))}(e),function(e){var t=function(){return e.execCommand("mceCodeEditor")}
e.ui.registry.addButton("code",{icon:"sourcecode",tooltip:"Source code",onAction:t}),e.ui.registry.addMenuItem("code",{icon:"sourcecode",text:"Source code",onAction:t})}(e),{}}))})()

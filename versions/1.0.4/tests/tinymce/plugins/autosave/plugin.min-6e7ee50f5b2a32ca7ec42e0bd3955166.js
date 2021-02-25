!function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=(void 0,function(t){return undefined===t}),r=tinymce.util.Tools.resolve("tinymce.util.Delay"),n=tinymce.util.Tools.resolve("tinymce.util.LocalStorage"),a=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=function(t,e){var r=t||e,n=/^(\d+)([ms]?)$/.exec(""+r)
return(n[2]?{s:1e3,m:6e4}[n[2]]:1)*parseInt(r,10)},i=function(t){var e=document.location
return t.getParam("autosave_prefix","tinymce-autosave-{path}{query}{hash}-{id}-").replace(/{path}/g,e.pathname).replace(/{query}/g,e.search).replace(/{hash}/g,e.hash).replace(/{id}/g,t.id)},u=function(t,r){if(e(r))return t.dom.isEmpty(t.getBody())
var n=a.trim(r)
if(""===n)return!0
var o=(new DOMParser).parseFromString(n,"text/html")
return t.dom.isEmpty(o)},s=function(t){var e=parseInt(n.getItem(i(t)+"time"),10)||0
return!((new Date).getTime()-e>o(t.getParam("autosave_retention"),"20m")&&(f(t,!1),1))},f=function(t,e){var r=i(t)
n.removeItem(r+"draft"),n.removeItem(r+"time"),!1!==e&&t.fire("RemoveDraft")},c=function(t){var e=i(t)
!u(t)&&t.isDirty()&&(n.setItem(e+"draft",t.getContent({format:"raw",no_events:!0})),n.setItem(e+"time",(new Date).getTime().toString()),t.fire("StoreDraft"))},m=function(t){var e=i(t)
s(t)&&(t.setContent(n.getItem(e+"draft"),{format:"raw"}),t.fire("RestoreDraft"))},l=function(t){var e=o(t.getParam("autosave_interval"),"30s")
r.setInterval((function(){t.removed||c(t)}),e)},v=function(t){t.undoManager.transact((function(){m(t),f(t)})),t.focus()},d=tinymce.util.Tools.resolve("tinymce.EditorManager"),g=function(t){return function(e){e.setDisabled(!s(t))
var r=function(){return e.setDisabled(!s(t))}
return t.on("StoreDraft RestoreDraft RemoveDraft",r),function(){return t.off("StoreDraft RestoreDraft RemoveDraft",r)}}}
t.add("autosave",(function(t){var e,r
return t.editorManager.on("BeforeUnload",(function(t){var e
a.each(d.get(),(function(t){t.plugins.autosave&&t.plugins.autosave.storeDraft(),!e&&t.isDirty()&&t.getParam("autosave_ask_before_unload",!0)&&(e=t.translate("You have unsaved changes are you sure you want to navigate away?"))})),e&&(t.preventDefault(),t.returnValue=e)})),l(e=t),e.ui.registry.addButton("restoredraft",{tooltip:"Restore last draft",icon:"restore-draft",onAction:function(){v(e)},onSetup:g(e)}),e.ui.registry.addMenuItem("restoredraft",{text:"Restore last draft",icon:"restore-draft",onAction:function(){v(e)},onSetup:g(e)}),t.on("init",(function(){t.getParam("autosave_restore_when_empty",!1)&&t.dom.isEmpty(t.getBody())&&m(t)})),r=t,{hasDraft:function(){return s(r)},storeDraft:function(){return c(r)},restoreDraft:function(){return m(r)},removeDraft:function(t){return f(r,t)},isEmpty:function(t){return u(r,t)}}}))}()

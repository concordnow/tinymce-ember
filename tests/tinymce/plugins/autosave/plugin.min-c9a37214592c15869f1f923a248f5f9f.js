!function(){"use strict"
function t(t,e){var r=t||e,n=/^(\d+)([ms]?)$/.exec(""+r)
return(n[2]?{s:1e3,m:6e4}[n[2]]:1)*parseInt(r,10)}function e(t){var e=document.location
return t.getParam("autosave_prefix","tinymce-autosave-{path}{query}{hash}-{id}-").replace(/{path}/g,e.pathname).replace(/{query}/g,e.search).replace(/{hash}/g,e.hash).replace(/{id}/g,t.id)}function r(t,e){if(f(e))return t.dom.isEmpty(t.getBody())
var r=l.trim(e)
if(""===r)return!0
var n=(new DOMParser).parseFromString(r,"text/html")
return t.dom.isEmpty(n)}function n(r){var n=parseInt(m.getItem(e(r)+"time"),10)||0
return!((new Date).getTime()-n>t(r.getParam("autosave_retention"),"20m")&&(v(r,!1),1))}function a(t){var n=e(t)
!r(t)&&t.isDirty()&&(m.setItem(n+"draft",t.getContent({format:"raw",no_events:!0})),m.setItem(n+"time",(new Date).getTime().toString()),t.fire("StoreDraft"))}function o(t){var r=e(t)
n(t)&&(t.setContent(m.getItem(r+"draft"),{format:"raw"}),t.fire("RestoreDraft"))}function i(t){t.undoManager.transact((function(){o(t),v(t)})),t.focus()}function u(t){return function(e){function r(){return e.setDisabled(!n(t))}return e.setDisabled(!n(t)),t.on("StoreDraft RestoreDraft RemoveDraft",r),function(){return t.off("StoreDraft RestoreDraft RemoveDraft",r)}}}var s=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=function(t){return void 0===t},c=tinymce.util.Tools.resolve("tinymce.util.Delay"),m=tinymce.util.Tools.resolve("tinymce.util.LocalStorage"),l=tinymce.util.Tools.resolve("tinymce.util.Tools"),v=function(t,r){var n=e(t)
m.removeItem(n+"draft"),m.removeItem(n+"time"),!1!==r&&t.fire("RemoveDraft")},d=tinymce.util.Tools.resolve("tinymce.EditorManager")
s.add("autosave",(function(e){var s,f,m,g
return e.editorManager.on("BeforeUnload",(function(t){var e
l.each(d.get(),(function(t){t.plugins.autosave&&t.plugins.autosave.storeDraft(),!e&&t.isDirty()&&t.getParam("autosave_ask_before_unload",!0)&&(e=t.translate("You have unsaved changes are you sure you want to navigate away?"))})),e&&(t.preventDefault(),t.returnValue=e)})),g=t((m=s=e).getParam("autosave_interval"),"30s"),c.setEditorInterval(m,(function(){a(m)}),g),s.ui.registry.addButton("restoredraft",{tooltip:"Restore last draft",icon:"restore-draft",onAction:function(){i(s)},onSetup:u(s)}),s.ui.registry.addMenuItem("restoredraft",{text:"Restore last draft",icon:"restore-draft",onAction:function(){i(s)},onSetup:u(s)}),e.on("init",(function(){e.getParam("autosave_restore_when_empty",!1)&&e.dom.isEmpty(e.getBody())&&o(e)})),f=e,{hasDraft:function(){return n(f)},storeDraft:function(){return a(f)},restoreDraft:function(){return o(f)},removeDraft:function(t){return v(f,t)},isEmpty:function(t){return r(f,t)}}}))}()
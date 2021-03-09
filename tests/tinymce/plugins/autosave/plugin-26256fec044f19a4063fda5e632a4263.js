(function(){"use strict"
var t,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=(t=void 0,function(e){return t===e}),n=tinymce.util.Tools.resolve("tinymce.util.Delay"),o=tinymce.util.Tools.resolve("tinymce.util.LocalStorage"),a=tinymce.util.Tools.resolve("tinymce.util.Tools"),i=function(t,e){var r=t||e,n=/^(\d+)([ms]?)$/.exec(""+r)
return(n[2]?{s:1e3,m:6e4}[n[2]]:1)*parseInt(r,10)},u=function(t){var e=document.location
return t.getParam("autosave_prefix","tinymce-autosave-{path}{query}{hash}-{id}-").replace(/{path}/g,e.pathname).replace(/{query}/g,e.search).replace(/{hash}/g,e.hash).replace(/{id}/g,t.id)},f=function(t,e){if(r(e))return t.dom.isEmpty(t.getBody())
var n=a.trim(e)
if(""===n)return!0
var o=(new DOMParser).parseFromString(n,"text/html")
return t.dom.isEmpty(o)},s=function(t){var e=parseInt(o.getItem(u(t)+"time"),10)||0
return!((new Date).getTime()-e>function(t){return i(t.getParam("autosave_retention"),"20m")}(t))||(c(t,!1),!1)},c=function(t,e){var r=u(t)
o.removeItem(r+"draft"),o.removeItem(r+"time"),!1!==e&&function(t){t.fire("RemoveDraft")}(t)},m=function(t){var e=u(t)
!f(t)&&t.isDirty()&&(o.setItem(e+"draft",t.getContent({format:"raw",no_events:!0})),o.setItem(e+"time",(new Date).getTime().toString()),function(t){t.fire("StoreDraft")}(t))},l=function(t){var e=u(t)
s(t)&&(t.setContent(o.getItem(e+"draft"),{format:"raw"}),function(t){t.fire("RestoreDraft")}(t))},v=function(t){var e=function(t){return i(t.getParam("autosave_interval"),"30s")}(t)
n.setEditorInterval(t,(function(){m(t)}),e)},d=function(t){t.undoManager.transact((function(){l(t),c(t)})),t.focus()},g=tinymce.util.Tools.resolve("tinymce.EditorManager"),y=function(t){return function(e){e.setDisabled(!s(t))
var r=function(){return e.setDisabled(!s(t))}
return t.on("StoreDraft RestoreDraft RemoveDraft",r),function(){return t.off("StoreDraft RestoreDraft RemoveDraft",r)}}}
e.add("autosave",(function(t){return function(t){t.editorManager.on("BeforeUnload",(function(t){var e
a.each(g.get(),(function(t){t.plugins.autosave&&t.plugins.autosave.storeDraft(),!e&&t.isDirty()&&function(t){return t.getParam("autosave_ask_before_unload",!0)}(t)&&(e=t.translate("You have unsaved changes are you sure you want to navigate away?"))})),e&&(t.preventDefault(),t.returnValue=e)}))}(t),function(t){v(t),t.ui.registry.addButton("restoredraft",{tooltip:"Restore last draft",icon:"restore-draft",onAction:function(){d(t)},onSetup:y(t)}),t.ui.registry.addMenuItem("restoredraft",{text:"Restore last draft",icon:"restore-draft",onAction:function(){d(t)},onSetup:y(t)})}(t),t.on("init",(function(){(function(t){return t.getParam("autosave_restore_when_empty",!1)})(t)&&t.dom.isEmpty(t.getBody())&&l(t)})),function(t){return{hasDraft:function(){return s(t)},storeDraft:function(){return m(t)},restoreDraft:function(){return l(t)},removeDraft:function(e){return c(t,e)},isEmpty:function(e){return f(t,e)}}}(t)}))})()

!function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(t,o,e){var n,i
t.dom.toggleClass(t.getBody(),"mce-visualblocks"),e.set(!e.get()),n=t,i=e.get(),n.fire("VisualBlocks",{state:i})},e=function(t,o){return function(e){e.setActive(o.get())
var n=function(t){return e.setActive(t.state)}
return t.on("VisualBlocks",n),function(){return t.off("VisualBlocks",n)}}}
t.add("visualblocks",(function(t,n){var i,s,c,u,l,a,r,f=(i=!1,{get:function(){return i},set:function(t){i=t}})
c=f,(s=t).addCommand("mceVisualBlocks",(function(){o(s,0,c)})),l=f,(u=t).ui.registry.addToggleButton("visualblocks",{icon:"visualblocks",tooltip:"Show blocks",onAction:function(){return u.execCommand("mceVisualBlocks")},onSetup:e(u,l)}),u.ui.registry.addToggleMenuItem("visualblocks",{text:"Show blocks",icon:"visualblocks",onAction:function(){return u.execCommand("mceVisualBlocks")},onSetup:e(u,l)}),r=f,(a=t).on("PreviewFormats AfterPreviewFormats",(function(t){r.get()&&a.dom.toggleClass(a.getBody(),"mce-visualblocks","afterpreviewformats"===t.type)})),a.on("init",(function(){a.getParam("visualblocks_default_state",!1,"boolean")&&o(a,0,r)}))}))}()
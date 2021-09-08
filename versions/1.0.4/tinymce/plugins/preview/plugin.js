(function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env"),n=tinymce.util.Tools.resolve("tinymce.util.Tools"),i=function(e){var i=function(e){var i="",o=e.dom.encode,r=function(e){return e.getParam("content_style","","string")}(e)
i+='<base href="'+o(e.documentBaseURI.getURI())+'">',r&&(i+='<style type="text/css">'+r+"</style>")
var a=function(e){return e.getParam("content_css_cors",!1,"boolean")}(e)?' crossorigin="anonymous"':""
n.each(e.contentCSS,(function(t){i+='<link type="text/css" rel="stylesheet" href="'+o(e.documentBaseURI.toAbsolute(t))+'"'+a+">"}))
var c=function(e){var t=e.getParam("body_id","tinymce","string")
return-1===t.indexOf("=")?t:function(e){var t=e.getParam("body_id","","hash")
return t[e.id]||t}(e)}(e),s=function(e){var t=e.getParam("body_class","","string")
return-1===t.indexOf("=")?t:function(e){return e.getParam("body_class","","hash")[e.id]||""}(e)}(e),d='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(t.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",m=e.getBody().dir,l=m?' dir="'+o(m)+'"':""
return"<!DOCTYPE html><html><head>"+i+'</head><body id="'+o(c)+'" class="mce-content-body '+o(s)+'"'+l+">"+e.getContent()+d+"</body></html>"}(e)
e.windowManager.open({title:"Preview",size:"large",body:{type:"panel",items:[{name:"preview",type:"iframe",sandboxed:!0}]},buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{preview:i}}).focus("close")}
e.add("preview",(function(e){(function(e){e.addCommand("mcePreview",(function(){i(e)}))})(e),function(e){e.ui.registry.addButton("preview",{icon:"preview",tooltip:"Preview",onAction:function(){return e.execCommand("mcePreview")}}),e.ui.registry.addMenuItem("preview",{icon:"preview",text:"Preview",onAction:function(){return e.execCommand("mcePreview")}})}(e)}))})()
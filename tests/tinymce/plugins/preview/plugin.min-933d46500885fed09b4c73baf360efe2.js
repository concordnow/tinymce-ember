!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env"),n=tinymce.util.Tools.resolve("tinymce.util.Tools")
e.add("preview",(function(e){var i,o
function a(){return o.execCommand("mcePreview")}(i=e).addCommand("mcePreview",(function(){var e,o
o=function(e){var i="",o=e.dom.encode,a=e.getParam("content_style","","string")
i+='<base href="'+o(e.documentBaseURI.getURI())+'">'
var r=e.getParam("content_css_cors",!1,"boolean")?' crossorigin="anonymous"':""
n.each(e.contentCSS,(function(t){i+='<link type="text/css" rel="stylesheet" href="'+o(e.documentBaseURI.toAbsolute(t))+'"'+r+">"})),a&&(i+='<style type="text/css">'+a+"</style>")
var s,c,d,l,m,y,u,v=-1===(l=(s=e).getParam("body_id","tinymce","string")).indexOf("=")?l:(d=(c=s).getParam("body_id","","hash"))[c.id]||d,g=-1===(u=(m=e).getParam("body_class","","string")).indexOf("=")?u:(y=m).getParam("body_class","","hash")[y.id]||"",p='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(t.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",f=e.getBody().dir,w=f?' dir="'+o(f)+'"':""
return"<!DOCTYPE html><html><head>"+i+'</head><body id="'+o(v)+'" class="mce-content-body '+o(g)+'"'+w+">"+e.getContent()+p+"</body></html>"}(e=i),e.windowManager.open({title:"Preview",size:"large",body:{type:"panel",items:[{name:"preview",type:"iframe",sandboxed:!0}]},buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{preview:o}}).focus("close")})),(o=e).ui.registry.addButton("preview",{icon:"preview",tooltip:"Preview",onAction:a}),o.ui.registry.addMenuItem("preview",{icon:"preview",text:"Preview",onAction:a})}))}()

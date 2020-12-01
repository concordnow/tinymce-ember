!function(){var e,t,n,i=[],r="undefined"!=typeof global?global:window,a=r.jQuery,c=function(){return r.tinymce}
a.fn.tinymce=function(e){var l,u,s,f=this,p=""
if(!f.length)return f
if(!e)return c()?c().get(f[0].id):null
f.css("visibility","hidden")
var d,v=function(){var t=[],i=0
n||(o(),n=!0),f.each((function(n,r){var a,o=r.id,l=e.oninit
o||(r.id=o=c().DOM.uniqueId()),c().get(o)||(a=c().createEditor(o,e),t.push(a),a.on("init",(function(){var e,n=l
f.css("visibility",""),l&&++i==t.length&&("string"==typeof n&&(e=-1===n.indexOf(".")?null:c().resolve(n.replace(/\.\w+$/,"")),n=c().resolve(n)),n.apply(e||c(),t))})))})),a.each(t,(function(e,t){t.render()}))}
return r.tinymce||t||!(l=e.script_url)?1===t?i.push(v):v():(t=1,u=l.substring(0,l.lastIndexOf("/")),-1!=l.indexOf(".min")&&(p=".min"),r.tinymce=r.tinyMCEPreInit||{base:u,suffix:p},-1!=l.indexOf("gzip")&&(s=e.language||"en",l=l+(/\?/.test(l)?"&":"?")+"js=true&core=true&suffix="+escape(p)+"&themes="+escape(e.theme||"modern")+"&plugins="+escape(e.plugins||"")+"&languages="+(s||""),r.tinyMCE_GZ||(r.tinyMCE_GZ={start:function(){var t=function(e){c().ScriptLoader.markDone(c().baseURI.toAbsolute(e))}
t("langs/"+s+".js"),t("themes/"+e.theme+"/theme"+p+".js"),t("themes/"+e.theme+"/langs/"+s+".js"),a.each(e.plugins.split(","),(function(e,n){n&&(t("plugins/"+n+"/plugin"+p+".js"),t("plugins/"+n+"/langs/"+s+".js"))}))},end:function(){}})),(d=document.createElement("script")).type="text/javascript",d.onload=d.onreadystatechange=function(n){n=n||window.event,2===t||"load"!=n.type&&!/complete|loaded/.test(d.readyState)||(c().dom.Event.domLoaded=1,t=2,e.script_loaded&&e.script_loaded(),v(),a.each(i,(function(e,t){t()})))},d.src=l,document.body.appendChild(d)),f},a.extend(a.expr[":"],{tinymce:function(e){var t
return!!(e.id&&"tinymce"in r&&(t=c().get(e.id))&&t.editorManager===c())}})
var o=function(){var t=function(e){"remove"===e&&this.each((function(e,t){var n=i(t)
n&&n.remove()})),this.find("span.mceEditor,div.mceEditor").each((function(e,t){var n=c().get(t.id.replace(/_parent$/,""))
n&&n.remove()}))},n=function(e){var n,i=this
if(null!=e)t.call(i),i.each((function(t,n){var i;(i=c().get(n.id))&&i.setContent(e)}))
else if(0<i.length&&(n=c().get(i[0].id)))return n.getContent()},i=function(e){var t=null
return e&&e.id&&r.tinymce&&(t=c().get(e.id)),t},o=function(e){return!!(e&&e.length&&r.tinymce&&e.is(":tinymce"))},l={}
a.each(["text","html","val"],(function(t,r){var c=l[r]=a.fn[r],u="text"===r
a.fn[r]=function(t){var r=this
if(!o(r))return c.apply(r,arguments)
if(t!==e)return n.call(r.filter(":tinymce"),t),c.apply(r.not(":tinymce"),arguments),r
var l="",s=arguments
return(u?r:r.eq(0)).each((function(e,t){var n=i(t)
l+=n?u?n.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):n.getContent({save:!0}):c.apply(a(t),s)})),l}})),a.each(["append","prepend"],(function(t,n){var r=l[n]=a.fn[n],c="prepend"===n
a.fn[n]=function(t){var n=this
return o(n)?t!==e?("string"==typeof t&&n.filter(":tinymce").each((function(e,n){var r=i(n)
r&&r.setContent(c?t+r.getContent():r.getContent()+t)})),r.apply(n.not(":tinymce"),arguments),n):void 0:r.apply(n,arguments)}})),a.each(["remove","replaceWith","replaceAll","empty"],(function(e,n){var i=l[n]=a.fn[n]
a.fn[n]=function(){return t.call(this,n),i.apply(this,arguments)}})),l.attr=a.fn.attr,a.fn.attr=function(t,r){var c=this,u=arguments
if(!t||"value"!==t||!o(c))return l.attr.apply(c,u)
if(r!==e)return n.call(c.filter(":tinymce"),r),l.attr.apply(c.not(":tinymce"),u),c
var s=c[0],f=i(s)
return f?f.getContent({save:!0}):l.attr.apply(a(s),u)}}}()

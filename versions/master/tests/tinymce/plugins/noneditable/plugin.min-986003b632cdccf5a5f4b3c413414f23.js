!function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=tinymce.util.Tools.resolve("tinymce.util.Tools"),n=function(t){return t.getParam("noneditable_noneditable_class","mceNonEditable")},r=function(t){return function(e){return-1!==(" "+e.attr("class")+" ").indexOf(t)}}
t.add("noneditable",(function(t){(function(t){var a,i="contenteditable",o=" "+e.trim(t.getParam("noneditable_editable_class","mceEditable"))+" ",c=" "+e.trim(n(t))+" ",l=r(o),u=r(c),f=(a=t.getParam("noneditable_regexp",[]))&&a.constructor===RegExp?[a]:a
t.on("PreInit",(function(){0<f.length&&t.on("BeforeSetContent",(function(e){!function(t,e,r){var a=e.length,i=r.content
if("raw"!==r.format){for(;a--;)i=i.replace(e[a],function(t,e,n){return function(r){var a=arguments,i=a[a.length-2],o=0<i?e.charAt(i-1):""
if('"'===o)return r
if(">"===o){var c=e.lastIndexOf("<",i)
if(-1!==c&&-1!==e.substring(c,i).indexOf('contenteditable="false"'))return r}return'<span class="'+n+'" data-mce-content="'+t.dom.encode(a[0])+'">'+t.dom.encode("string"==typeof a[1]?a[1]:a[0])+"</span>"}}(t,i,n(t)))
r.content=i}}(t,f,e)})),t.parser.addAttributeFilter("class",(function(t){for(var e,n=t.length;n--;)e=t[n],l(e)?e.attr(i,"true"):u(e)&&e.attr(i,"false")})),t.serializer.addAttributeFilter(i,(function(t){for(var e,n=t.length;n--;)e=t[n],(l(e)||u(e))&&(0<f.length&&e.attr("data-mce-content")?(e.name="#text",e.type=3,e.raw=!0,e.value=e.attr("data-mce-content")):e.attr(i,null))}))}))})(t)}))}()

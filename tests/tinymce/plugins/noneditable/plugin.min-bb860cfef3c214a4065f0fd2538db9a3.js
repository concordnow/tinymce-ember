!function(){"use strict"
function t(t){return t.getParam("noneditable_noneditable_class","mceNonEditable")}function e(t){return function(e){return-1!==(" "+e.attr("class")+" ").indexOf(t)}}var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=tinymce.util.Tools.resolve("tinymce.util.Tools")
n.add("noneditable",(function(n){(function(n){var a,i="contenteditable",o=" "+r.trim(n.getParam("noneditable_editable_class","mceEditable"))+" ",c=" "+r.trim(t(n))+" ",l=e(o),u=e(c),f=(a=n.getParam("noneditable_regexp",[]))&&a.constructor===RegExp?[a]:a
n.on("PreInit",(function(){0<f.length&&n.on("BeforeSetContent",(function(e){!function(e,n,r){var a=n.length,i=r.content
if("raw"!==r.format){for(;a--;)i=i.replace(n[a],function(t,e,n){return function(r){var a=arguments,i=a[a.length-2],o=0<i?e.charAt(i-1):""
if('"'===o)return r
if(">"===o){var c=e.lastIndexOf("<",i)
if(-1!==c&&-1!==e.substring(c,i).indexOf('contenteditable="false"'))return r}return'<span class="'+n+'" data-mce-content="'+t.dom.encode(a[0])+'">'+t.dom.encode("string"==typeof a[1]?a[1]:a[0])+"</span>"}}(e,i,t(e)))
r.content=i}}(n,f,e)})),n.parser.addAttributeFilter("class",(function(t){for(var e,n=t.length;n--;)e=t[n],l(e)?e.attr(i,"true"):u(e)&&e.attr(i,"false")})),n.serializer.addAttributeFilter(i,(function(t){for(var e,n=t.length;n--;)e=t[n],(l(e)||u(e))&&(0<f.length&&e.attr("data-mce-content")?(e.name="#text",e.type=3,e.raw=!0,e.value=e.attr("data-mce-content")):e.attr(i,null))}))}))})(n)}))}()

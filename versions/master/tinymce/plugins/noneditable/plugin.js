(function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.util.Tools"),e=function(t){return t.getParam("noneditable_noneditable_class","mceNonEditable")},r=function(t){return function(n){return-1!==(" "+n.attr("class")+" ").indexOf(t)}},a=function(t,n,e){return function(r){var a=arguments,i=a[a.length-2],o=i>0?n.charAt(i-1):""
if('"'===o)return r
if(">"===o){var c=n.lastIndexOf("<",i)
if(-1!==c){var l=n.substring(c,i)
if(-1!==l.indexOf('contenteditable="false"'))return r}}return'<span class="'+e+'" data-mce-content="'+t.dom.encode(a[0])+'">'+t.dom.encode("string"==typeof a[1]?a[1]:a[0])+"</span>"}},i=function(t){var i="contenteditable",o=" "+n.trim(function(t){return t.getParam("noneditable_editable_class","mceEditable")}(t))+" ",c=" "+n.trim(e(t))+" ",l=r(o),u=r(c),f=function(t){var n=t.getParam("noneditable_regexp",[])
return n&&n.constructor===RegExp?[n]:n}(t)
t.on("PreInit",(function(){f.length>0&&t.on("BeforeSetContent",(function(n){(function(t,n,r){var i=n.length,o=r.content
if("raw"!==r.format){for(;i--;)o=o.replace(n[i],a(t,o,e(t)))
r.content=o}})(t,f,n)})),t.parser.addAttributeFilter("class",(function(t){for(var n,e=t.length;e--;)n=t[e],l(n)?n.attr(i,"true"):u(n)&&n.attr(i,"false")})),t.serializer.addAttributeFilter(i,(function(t){for(var n,e=t.length;e--;)n=t[e],(l(n)||u(n))&&(f.length>0&&n.attr("data-mce-content")?(n.name="#text",n.type=3,n.raw=!0,n.value=n.attr("data-mce-content")):n.attr(i,null))}))}))}
t.add("noneditable",(function(t){i(t)}))})()

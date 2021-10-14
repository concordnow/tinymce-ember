!function(){"use strict"
function t(t){return function(e){return n=typeof(r=e),(null===r?"null":"object"==n&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":n)===t
var r,n}}function e(t){return t.getParam("importcss_selector_converter")}function r(t){return c(t)?function(e){return-1!==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:t}function n(t,e){var r,n=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e)
if(n){var o=n[1],i=n[2].substr(1).split(".").join(" "),c=f.makeMap("a,img")
return n[1]?(r={title:e},t.schema.getTextBlockElements()[o]?r.block=o:t.schema.getBlockElements()[o]||c[o.toLowerCase()]?r.selector=o:r.inline=o):n[2]&&(r={inline:"span",title:e.substr(1),classes:i}),!1!==t.getParam("importcss_merge_classes")?r.classes=i:r.attributes={class:i},r}}function o(t,e){return null===e||!1!==t.getParam("importcss_exclusive")}var i=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=t("string"),s=t("array"),a=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),u=tinymce.util.Tools.resolve("tinymce.EditorManager"),l=tinymce.util.Tools.resolve("tinymce.Env"),f=tinymce.util.Tools.resolve("tinymce.util.Tools"),m=Array.prototype.push
i.add("importcss",(function(t){return(i=t).on("init",(function(){function t(t,r){if(y=t,_=d,!(o(i,h=r)?y in _:y in h.selectors)){p=t,v=d,o(i,g=r)?v[p]=!0:g.selectors[p]=!0
var c=(l=(u=i).plugins.importcss,f=t,((m=r)&&m.selector_converter?m.selector_converter:e(u)?e(u):function(){return n(u,f)}).call(l,f,m))
if(c){var s=c.name||a.DOM.uniqueId()
return i.formatter.register(s,c),{title:c.title,format:s}}}var u,l,f,m,p,g,v,y,h,_
return null}var p,g,v,y,h=(p=[],g=[],v={},{addItemToGroup:function(t,e){v[t]?v[t].push(e):(g.push(t),v[t]=[e])},addItem:function(t){p.push(t)},toFormats:function(){return function(t){for(var e=[],r=0,n=t.length;r<n;++r){if(!s(t[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+t)
m.apply(e,t[r])}return e}(function(t,e){for(var r=t.length,n=new Array(r),o=0;o<r;o++){var i=t[o]
n[o]=e(i)}return n}(g,(function(t){var e=v[t]
return 0===e.length?[]:[{title:t,items:e}]}))).concat(p)}}),d={},_=r(i.getParam("importcss_selector_filter")),x=(y=i.getParam("importcss_groups"),f.map(y,(function(t){return f.extend({},t,{original:t,selectors:{},filter:r(t.filter)})})))
f.each(function(t,e,r){var n=[],o={},i=function(e,o){var s,a,m=e.href,p=l.cacheSuffix
if((a=m=c(m)?m.replace("?"+p,"").replace("&"+p,""):m)&&r(a,o)&&!function(t,e){var r,n=!1!==(r=t.getParam("skin"))&&(r||"oxide")
if(n){var o=t.getParam("skin_url"),i=o?t.documentBaseURI.toAbsolute(o):u.baseURL+"/skins/ui/"+n,c=u.baseURL+"/skins/content/"
return e===i+"/content"+(t.inline?".inline":"")+".min.css"||-1!==e.indexOf(c)}}(t,a)){f.each(e.imports,(function(t){i(t,!0)}))
try{s=e.cssRules||e.rules}catch(e){}f.each(s,(function(t){t.styleSheet?i(t.styleSheet,!0):t.selectorText&&f.each(t.selectorText.split(","),(function(t){n.push(f.trim(t))}))}))}}
f.each(t.contentCSS,(function(t){o[t]=!0})),r=r||function(t,e){return e||o[t]}
try{f.each(e.styleSheets,(function(t){i(t)}))}catch(e){}return n}(i,i.getDoc(),r(i.getParam("importcss_file_filter"))),(function(e){var r,n,o;-1===e.indexOf(".mce-")&&(_&&!_(e)||(o=e,0<(r=f.grep(x,(function(t){return!t.filter||t.filter(o)}))).length?f.each(r,(function(r){var n=t(e,r)
n&&h.addItemToGroup(r.title,n)})):(n=t(e,null))&&h.addItem(n)))}))
var P=h.toFormats()
i.fire("addStyleModifications",{items:P,replace:!i.getParam("importcss_append")})})),p=t,{convertSelectorToFormat:function(t){return n(p,t)}}
var i,p}))}()

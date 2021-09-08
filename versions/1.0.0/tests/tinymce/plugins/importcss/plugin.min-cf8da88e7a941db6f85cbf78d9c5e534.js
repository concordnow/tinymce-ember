!function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),r=tinymce.util.Tools.resolve("tinymce.EditorManager"),n=tinymce.util.Tools.resolve("tinymce.Env"),o=tinymce.util.Tools.resolve("tinymce.util.Tools"),i=function(t){return t.getParam("importcss_selector_converter")},c=("array",function(t){return r=typeof(e=t),"array"===(null===e?"null":"object"==r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)
var e,r}),s=Array.prototype.push,a=function(t,e){return function(t){for(var e=[],r=0,n=t.length;r<n;++r){if(!c(t[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+t)
s.apply(e,t[r])}return e}(function(t,e){for(var r=t.length,n=new Array(r),o=0;o<r;o++){var i=t[o]
n[o]=e(i,o)}return n}(t,e))},u=function(t){return"string"==typeof t?function(e){return-1!==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:t},l=function(t,e,i){var c=[],s={}
function a(e,s){var u,l,f,m=e.href
if(l=m,f=n.cacheSuffix,"string"==typeof l&&(l=l.replace("?"+f,"").replace("&"+f,"")),(m=l)&&i(m,s)&&!function(t,e){var n,o=!1!==(n=t.getParam("skin"))&&(n||"oxide")
if(o){var i=t.getParam("skin_url"),c=i?t.documentBaseURI.toAbsolute(i):r.baseURL+"/skins/ui/"+o,s=r.baseURL+"/skins/content/"
return e===c+"/content"+(t.inline?".inline":"")+".min.css"||-1!==e.indexOf(s)}return!1}(t,m)){o.each(e.imports,(function(t){a(t,!0)}))
try{u=e.cssRules||e.rules}catch(p){}o.each(u,(function(t){t.styleSheet?a(t.styleSheet,!0):t.selectorText&&o.each(t.selectorText.split(","),(function(t){c.push(o.trim(t))}))}))}}o.each(t.contentCSS,(function(t){s[t]=!0})),i=i||function(t,e){return e||s[t]}
try{o.each(e.styleSheets,(function(t){a(t)}))}catch(u){}return c},f=function(t,e){var r,n=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e)
if(n){var i=n[1],c=n[2].substr(1).split(".").join(" "),s=o.makeMap("a,img")
return n[1]?(r={title:e},t.schema.getTextBlockElements()[i]?r.block=i:t.schema.getBlockElements()[i]||s[i.toLowerCase()]?r.selector=i:r.inline=i):n[2]&&(r={inline:"span",title:e.substr(1),classes:c}),!1!==t.getParam("importcss_merge_classes")?r.classes=c:r.attributes={class:c},r}},m=function(t,e){return null===e||!1!==t.getParam("importcss_exclusive")}
t.add("importcss",(function(t){return(r=t).on("init",(function(t){var n,c,s,p,y=(n=[],c=[],s={},{addItemToGroup:function(t,e){s[t]?s[t].push(e):(c.push(t),s[t]=[e])},addItem:function(t){n.push(t)},toFormats:function(){return a(c,(function(t){var e=s[t]
return 0===e.length?[]:[{title:t,items:e}]})).concat(n)}}),g={},v=u(r.getParam("importcss_selector_filter")),h=(p=r.getParam("importcss_groups"),o.map(p,(function(t){return o.extend({},t,{original:t,selectors:{},filter:u(t.filter),item:{text:t.title,menu:[]}})}))),d=function(t,n){if(d=t,x=g,!(m(r,_=n)?d in x:d in _.selectors)){y=t,h=g,m(r,v=n)?h[y]=!0:v.selectors[y]=!0
var c=(u=(a=r).plugins.importcss,l=t,((p=n)&&p.selector_converter?p.selector_converter:i(a)?i(a):function(){return f(a,l)}).call(u,l,p))
if(c){var s=c.name||e.DOM.uniqueId()
return r.formatter.register(s,c),o.extend({},{title:c.title,format:s})}}var a,u,l,p,y,v,h,d,_,x
return null}
o.each(l(r,r.getDoc(),u(r.getParam("importcss_file_filter"))),(function(t){var e,r,n,i;-1===t.indexOf(".mce-")&&(v&&!v(t)||(n=h,i=t,0<(e=o.grep(n,(function(t){return!t.filter||t.filter(i)}))).length?o.each(e,(function(e){var r=d(t,e)
r&&y.addItemToGroup(e.title,r)})):(r=d(t,null))&&y.addItem(r)))}))
var _=y.toFormats()
r.fire("addStyleModifications",{items:_,replace:!r.getParam("importcss_append")})})),n=t,{convertSelectorToFormat:function(t){return f(n,t)}}
var r,n}))}()
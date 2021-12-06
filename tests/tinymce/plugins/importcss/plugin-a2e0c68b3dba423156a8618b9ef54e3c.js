(function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=function(t){return function(e){return r=typeof(n=e),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===t
var n,r}},n=e("string"),r=e("array"),o=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),i=tinymce.util.Tools.resolve("tinymce.EditorManager"),c=tinymce.util.Tools.resolve("tinymce.Env"),u=tinymce.util.Tools.resolve("tinymce.util.Tools"),s=function(t){return t.getParam("importcss_selector_converter")},a=function(t){return t.getParam("importcss_append")},l=Array.prototype.push,f=function(t,e){return function(t){for(var e=[],n=0,o=t.length;n<o;++n){if(!r(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t)
l.apply(e,t[n])}return e}(function(t,e){for(var n=t.length,r=new Array(n),o=0;o<n;o++){var i=t[o]
r[o]=e(i,o)}return r}(t,e))},m=/^\.(?:ephox|tiny-pageembed|mce)(?:[.-]+\w+)+$/,p=function(t){return n(t)?function(e){return-1!==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:t},g=function(t,e,r){var o=[],s={},a=function(e,s){var l,f,m,p=e.href
if(f=p,m=c.cacheSuffix,n(f)&&(f=f.replace("?"+m,"").replace("&"+m,"")),(p=f)&&r(p,s)&&!function(t,e){var n=function(t){var e=t.getParam("skin")
return!1!==e&&(e||"oxide")}(t)
if(n){var r=function(t){return t.getParam("skin_url")}(t),o=r?t.documentBaseURI.toAbsolute(r):i.baseURL+"/skins/ui/"+n,c=i.baseURL+"/skins/content/"
return e===o+"/content"+(t.inline?".inline":"")+".min.css"||-1!==e.indexOf(c)}return!1}(t,p)){u.each(e.imports,(function(t){a(t,!0)}))
try{l=e.cssRules||e.rules}catch(g){}u.each(l,(function(t){t.styleSheet?a(t.styleSheet,!0):function(t){return t.selectorText}(t)&&u.each(t.selectorText.split(","),(function(t){o.push(u.trim(t))}))}))}}
u.each(t.contentCSS,(function(t){s[t]=!0})),r||(r=function(t,e){return e||s[t]})
try{u.each(e.styleSheets,(function(t){a(t)}))}catch(l){}return o},v=function(t,e){var n,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e)
if(r){var o=r[1],i=r[2].substr(1).split(".").join(" "),c=u.makeMap("a,img")
return r[1]?(n={title:e},t.schema.getTextBlockElements()[o]?n.block=o:t.schema.getBlockElements()[o]||c[o.toLowerCase()]?n.selector=o:n.inline=o):r[2]&&(n={inline:"span",title:e.substr(1),classes:i}),!1!==function(t){return t.getParam("importcss_merge_classes")}(t)?n.classes=i:n.attributes={class:i},n}},y=function(t,e){return null===e||!1!==function(t){return t.getParam("importcss_exclusive")}(t)},h=function(t){t.on("init",(function(){var e=function(){var t=[],e=[],n={}
return{addItemToGroup:function(t,r){n[t]?n[t].push(r):(e.push(t),n[t]=[r])},addItem:function(e){t.push(e)},toFormats:function(){return f(e,(function(t){var e=n[t]
return 0===e.length?[]:[{title:t,items:e}]})).concat(t)}}}(),n={},r=p(function(t){return t.getParam("importcss_selector_filter")}(t)),i=function(t){return u.map(t,(function(t){return u.extend({},t,{original:t,selectors:{},filter:p(t.filter)})}))}(function(t){return t.getParam("importcss_groups")}(t)),c=function(e,r){if(function(t,e,n,r){return!(y(t,n)?e in r:e in n.selectors)}(t,e,r,n)){(function(t,e,n,r){y(t,n)?r[e]=!0:n.selectors[e]=!0})(t,e,r,n)
var i=function(t,e,n,r){return(r&&r.selector_converter?r.selector_converter:s(t)?s(t):function(){return v(t,n)}).call(e,n,r)}(t,t.plugins.importcss,e,r)
if(i){var c=i.name||o.DOM.uniqueId()
return t.formatter.register(c,i),{title:i.title,format:c}}}return null}
u.each(g(t,t.getDoc(),p(function(t){return t.getParam("importcss_file_filter")}(t))),(function(t){if(!m.test(t)&&(!r||r(t))){var n=function(t,e){return u.grep(t,(function(t){return!t.filter||t.filter(e)}))}(i,t)
if(n.length>0)u.each(n,(function(n){var r=c(t,n)
r&&e.addItemToGroup(n.title,r)}))
else{var o=c(t,null)
o&&e.addItem(o)}}}))
var l=e.toFormats()
t.fire("addStyleModifications",{items:l,replace:!a(t)})}))}
t.add("importcss",(function(t){return h(t),function(t){return{convertSelectorToFormat:function(e){return v(t,e)}}}(t)}))})()

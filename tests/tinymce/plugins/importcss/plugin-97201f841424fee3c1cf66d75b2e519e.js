(function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(t){return function(n){return r=typeof(e=n),(null===e?"null":"object"===r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===t
var e,r}},e=n("string"),r=n("array"),o=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),i=tinymce.util.Tools.resolve("tinymce.EditorManager"),c=tinymce.util.Tools.resolve("tinymce.Env"),u=tinymce.util.Tools.resolve("tinymce.util.Tools"),s=function(t){return t.getParam("importcss_selector_converter")},a=function(t){return t.getParam("importcss_append")},l=Array.prototype.push,f=function(t,n){return function(t){for(var n=[],e=0,o=t.length;e<o;++e){if(!r(t[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+t)
l.apply(n,t[e])}return n}(function(t,n){for(var e=t.length,r=new Array(e),o=0;o<e;o++){var i=t[o]
r[o]=n(i,o)}return r}(t,n))},m=function(t){return e(t)?function(n){return-1!==n.indexOf(t)}:t instanceof RegExp?function(n){return t.test(n)}:t},p=function(t,n,r){var o=[],s={},a=function(n,s){var l,f,m,p=n.href
if(f=p,m=c.cacheSuffix,e(f)&&(f=f.replace("?"+m,"").replace("&"+m,"")),(p=f)&&r(p,s)&&!function(t,n){var e=function(t){var n=t.getParam("skin")
return!1!==n&&(n||"oxide")}(t)
if(e){var r=function(t){return t.getParam("skin_url")}(t),o=r?t.documentBaseURI.toAbsolute(r):i.baseURL+"/skins/ui/"+e,c=i.baseURL+"/skins/content/"
return n===o+"/content"+(t.inline?".inline":"")+".min.css"||-1!==n.indexOf(c)}return!1}(t,p)){u.each(n.imports,(function(t){a(t,!0)}))
try{l=n.cssRules||n.rules}catch(v){}u.each(l,(function(t){t.styleSheet?a(t.styleSheet,!0):function(t){return t.selectorText}(t)&&u.each(t.selectorText.split(","),(function(t){o.push(u.trim(t))}))}))}}
u.each(t.contentCSS,(function(t){s[t]=!0})),r||(r=function(t,n){return n||s[t]})
try{u.each(n.styleSheets,(function(t){a(t)}))}catch(l){}return o},v=function(t,n){var e,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(n)
if(r){var o=r[1],i=r[2].substr(1).split(".").join(" "),c=u.makeMap("a,img")
return r[1]?(e={title:n},t.schema.getTextBlockElements()[o]?e.block=o:t.schema.getBlockElements()[o]||c[o.toLowerCase()]?e.selector=o:e.inline=o):r[2]&&(e={inline:"span",title:n.substr(1),classes:i}),!1!==function(t){return t.getParam("importcss_merge_classes")}(t)?e.classes=i:e.attributes={class:i},e}},g=function(t,n){return null===n||!1!==function(t){return t.getParam("importcss_exclusive")}(t)},y=function(t){t.on("init",(function(){var n=function(){var t=[],n=[],e={}
return{addItemToGroup:function(t,r){e[t]?e[t].push(r):(n.push(t),e[t]=[r])},addItem:function(n){t.push(n)},toFormats:function(){return f(n,(function(t){var n=e[t]
return 0===n.length?[]:[{title:t,items:n}]})).concat(t)}}}(),e={},r=m(function(t){return t.getParam("importcss_selector_filter")}(t)),i=function(t){return u.map(t,(function(t){return u.extend({},t,{original:t,selectors:{},filter:m(t.filter)})}))}(function(t){return t.getParam("importcss_groups")}(t)),c=function(n,r){if(function(t,n,e,r){return!(g(t,e)?n in r:n in e.selectors)}(t,n,r,e)){(function(t,n,e,r){g(t,e)?r[n]=!0:e.selectors[n]=!0})(t,n,r,e)
var i=function(t,n,e,r){return(r&&r.selector_converter?r.selector_converter:s(t)?s(t):function(){return v(t,e)}).call(n,e,r)}(t,t.plugins.importcss,n,r)
if(i){var c=i.name||o.DOM.uniqueId()
return t.formatter.register(c,i),{title:i.title,format:c}}}return null}
u.each(p(t,t.getDoc(),m(function(t){return t.getParam("importcss_file_filter")}(t))),(function(t){if(-1===t.indexOf(".mce-")&&(!r||r(t))){var e=function(t,n){return u.grep(t,(function(t){return!t.filter||t.filter(n)}))}(i,t)
if(e.length>0)u.each(e,(function(e){var r=c(t,e)
r&&n.addItemToGroup(e.title,r)}))
else{var o=c(t,null)
o&&n.addItem(o)}}}))
var l=n.toFormats()
t.fire("addStyleModifications",{items:l,replace:!a(t)})}))}
t.add("importcss",(function(t){return y(t),function(t){return{convertSelectorToFormat:function(n){return v(t,n)}}}(t)}))})()
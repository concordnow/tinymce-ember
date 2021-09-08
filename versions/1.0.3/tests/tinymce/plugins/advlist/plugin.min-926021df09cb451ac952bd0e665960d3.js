!function(){"use strict"
var n,t,e,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(n,t,e){var r="UL"===t?"InsertUnorderedList":"InsertOrderedList"
n.execCommand(r,!1,!1===e?null:{"list-style-type":e})},i=tinymce.util.Tools.resolve("tinymce.util.Tools"),u=function(n){return function(){return n}},l=u(!1),c=u(!0),s=function(){return a},a=(n=function(n){return n.isNone()},{fold:function(n,t){return n()},is:l,isSome:l,isNone:c,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(void 0),or:e,orThunk:t,map:s,each:function(){},bind:s,exists:l,forall:c,filter:s,equals:n,equals_:n,toArray:function(){return[]},toString:u("none()")}),f=function(n){var t=u(n),e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:c,isNone:l,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return f(t(n))},each:function(t){t(n)},bind:r,exists:r,forall:r,filter:function(t){return t(n)?o:a},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(l,(function(t){return e(n,t)}))}}
return o},d=function(n){return n&&/^(TH|TD)$/.test(n.nodeName)},g=function(n,t,e){var r=function(n,t){for(var e=0;e<n.length;e++)if(t(n[e]))return e
return-1}(t.parents,d),o=-1!==r?t.parents.slice(0,r):t.parents,u=i.grep(o,function(n){return function(t){return t&&/^(OL|UL|DL)$/.test(t.nodeName)&&(r=t,(e=n).$.contains(e.getBody(),r))
var e,r}}(n))
return 0<u.length&&u[0].nodeName===e},m=function(n,t,e,r,u,l){n.ui.registry.addSplitButton(t,{tooltip:e,icon:"OL"===u?"ordered-list":"unordered-list",presets:"listpreview",columns:3,fetch:function(n){n(i.map(l,(function(n){return{type:"choiceitem",value:"default"===n?"":n,icon:"list-"+("OL"===u?"num":"bull")+"-"+("disc"===n||"decimal"===n?"default":n),text:n.replace(/\-/g," ").replace(/\b\w/g,(function(n){return n.toUpperCase()}))}})))},onAction:function(){return n.execCommand(r)},onItemAction:function(t,e){o(n,u,e)},select:function(t){var e,r,o
return(r=(e=n).dom.getParent(e.selection.getNode(),"ol,ul"),o=e.dom.getStyle(r,"listStyleType"),function(n){return null==n?a:f(n)}(o)).map((function(n){return t===n})).getOr(!1)},onSetup:function(t){var e=function(e){t.setActive(g(n,e,u))}
return n.on("NodeChange",e),function(){return n.off("NodeChange",e)}}})},p=function(n,t,e,r,o,i){var u,l,c,s,a
1<i.length?m(n,t,e,r,o,i):(l=t,c=e,s=r,a=o,(u=n).ui.registry.addToggleButton(l,{active:!1,tooltip:c,icon:"OL"===a?"ordered-list":"unordered-list",onSetup:function(n){var t=function(t){n.setActive(g(u,t,a))}
return u.on("NodeChange",t),function(){return u.off("NodeChange",t)}},onAction:function(){return u.execCommand(s)}}))}
r.add("advlist",(function(n){var t,e,r,i
n.hasPlugin("lists")&&(p(e=n,"numlist","Numbered list","InsertOrderedList","OL",(r=e.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman"))?r.split(/[ ,]/):[]),p(e,"bullist","Bullet list","InsertUnorderedList","UL",(i=e.getParam("advlist_bullet_styles","default,circle,square"))?i.split(/[ ,]/):[]),(t=n).addCommand("ApplyUnorderedListStyle",(function(n,e){o(t,"UL",e["list-style-type"])})),t.addCommand("ApplyOrderedListStyle",(function(n,e){o(t,"OL",e["list-style-type"])})))}))}()
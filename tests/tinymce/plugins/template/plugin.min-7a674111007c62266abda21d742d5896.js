!function(){"use strict"
function e(e){return function(){return e}}function t(e){return e}var n,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(e){return typeof e===n}
function o(e){return e.getParam("template_mdate_classes","mdate")}function c(e){return e.getParam("template_replace_values")}function l(e){return e.getParam("template_mdate_format",e.translate("%Y-%m-%d"))}function i(e,t){if((e=""+e).length<t)for(var n=0;n<t-e.length;n++)e="0"+e
return e}function u(e,t,n){void 0===n&&(n=new Date)
var r="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),a="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),o="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),c="January February March April May June July August September October November December".split(" ")
return(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%D","%m/%d/%Y")).replace("%r","%I:%M:%S %p")).replace("%Y",""+n.getFullYear())).replace("%y",""+n.getYear())).replace("%m",i(n.getMonth()+1,2))).replace("%d",i(n.getDate(),2))).replace("%H",""+i(n.getHours(),2))).replace("%M",""+i(n.getMinutes(),2))).replace("%S",""+i(n.getSeconds(),2))).replace("%I",""+((n.getHours()+11)%12+1))).replace("%p",n.getHours()<12?"AM":"PM")).replace("%B",""+e.translate(c[n.getMonth()]))).replace("%b",""+e.translate(o[n.getMonth()]))).replace("%A",""+e.translate(a[n.getDay()]))).replace("%a",""+e.translate(r[n.getDay()]))).replace("%%","%")}function s(e,t){return v.each(t,(function(t,n){a(t)&&(t=t(n)),e=e.replace(new RegExp("\\{\\$"+n+"\\}","g"),t)})),e}function m(e,t){var n=e.dom,r=c(e)
v.each(n.select("*",t),(function(e){v.each(r,(function(t,r){n.hasClass(e,r)&&a(t)&&t(e)}))}))}function f(e,t){return new RegExp("\\b"+t+"\\b","g").test(e.className)}function p(e,t,n){var r=e.dom,a=e.selection.getContent()
n=s(n,c(e))
var i=r.create("div",null,n),p=r.select(".mceTmpl",i)
p&&0<p.length&&(i=r.create("div",null)).appendChild(p[0].cloneNode(!0)),v.each(r.select("*",i),(function(t){f(t,e.getParam("template_cdate_classes","cdate").replace(/\s+/g,"|"))&&(t.innerHTML=u(e,e.getParam("template_cdate_format",e.translate("%Y-%m-%d")))),f(t,o(e).replace(/\s+/g,"|"))&&(t.innerHTML=u(e,l(e))),f(t,e.getParam("template_selected_content_classes","selcontent").replace(/\s+/g,"|"))&&(t.innerHTML=a)})),m(e,i),e.execCommand("mceInsertContent",!1,i.innerHTML),e.addVisual()}function d(){return b}var g=e(!(n="function")),y=e(!0),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),h=tinymce.util.Tools.resolve("tinymce.util.XHR"),b={fold:function(e,t){return e()},isSome:g,isNone:y,getOr:t,getOrThunk:T,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:e(null),getOrUndefined:e(void 0),or:t,orThunk:T,map:d,each:function(){},bind:d,exists:g,forall:y,filter:function(){return b},toArray:function(){return[]},toString:e("none()")}
function T(e){return e()}function M(e,t){function n(e,t){return function(e,t,n){for(var r=0,a=e.length;r<a;r++){var o=e[r]
if(t(o))return O.some(o)
if(n(o,r))break}return O.none()}(e,(function(e){return e.text===t}),g)}function r(t){e.windowManager.alert("Could not load the specified template.",(function(){return t.focus("template")}))}function a(e){return new S((function(t,n){e.value.url.fold((function(){return t(e.value.content.getOr(""))}),(function(e){return h.send({url:e,success:function(e){t(e)},error:function(e){n(e)}})}))}))}(function(){if(t&&0!==t.length)return O.from(v.map(t,(function(e,t){function n(e){return void 0!==e.url}return{selected:0===t,text:e.title,value:{url:n(e)?O.from(e.url):O.none(),content:n(e)?O.none():O.from(e.content),description:e.description}}})))
var n=e.translate("No templates defined.")
return e.notificationManager.open({text:n,type:"info"}),O.none()})().each((function(t){function o(o,c){return{title:"Insert Template",size:"large",body:{type:"panel",items:o},initialData:c,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(t){var o=t.getData()
n(s,o.template).each((function(n){a(n).then((function(n){e.execCommand("mceInsertTemplate",!1,n),t.close()})).catch((function(){t.disable("save"),r(t)}))}))},onChange:(i=s=t,u=l,function(e,t){var o
"template"===t.name&&(o=e.getData().template,n(i,o).each((function(t){e.block("Loading..."),a(t).then((function(n){u(e,t,n)})).catch((function(){u(e,t,""),e.disable("save"),r(e)}))})))})}
var i,u,s}var c=function(e){for(var t=e.length,n=new Array(t),r=0;r<t;r++){var a=e[r]
n[r]={text:a.text,value:a.text}}return n}(t),l=function(t,n,r){var a,l,i,u,m,f,p,d,g,y,h,b,T,M=(a=e,-1===(l=r).indexOf("<html>")&&(i="",u=a.getParam("content_style","","string"),m=a.getParam("content_css_cors",!1,"boolean")?' crossorigin="anonymous"':"",v.each(a.contentCSS,(function(e){i+='<link type="text/css" rel="stylesheet" href="'+a.documentBaseURI.toAbsolute(e)+'"'+m+">"})),u&&(i+='<style type="text/css">'+u+"</style>"),f=-1===(T=(h=a).getParam("body_class","","string")).indexOf("=")?T:(b=h).getParam("body_class","","hash")[b.id]||"",p=a.dom.encode,d='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(P.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",y=(g=a.getBody().dir)?' dir="'+p(g)+'"':"",l='<!DOCTYPE html><html><head><base href="'+p(a.documentBaseURI.getURI())+'">'+i+d+'</head><body class="'+p(f)+'"'+y+">"+l+"</body></html>"),s(l,a.getParam("template_preview_replace_values"))),x=[{type:"selectbox",name:"template",label:"Templates",items:c},{type:"htmlpanel",html:'<p aria-live="polite">'+n.value.description.replace(/["'<>&]/g,(function(e){return(w(t=C,n=e)?O.from(t[n]):O.none()).getOr(e)
var t,n}))+"</p>"},{label:"Preview",type:"iframe",name:"preview",sandboxed:!1}],S={template:n.text,preview:M}
t.unblock(),t.redial(o(x,S)),t.focus("template")},i=e.windowManager.open(o([],{template:"",preview:""}))
i.block("Loading..."),a(t[0]).then((function(e){l(i,t[0],e)})).catch((function(){l(i,t[0],""),i.disable("save"),r(i)}))}))}var x=function(t){function n(){return o}function r(e){return e(t)}var a=e(t),o={fold:function(e,n){return n(t)},isSome:y,isNone:g,getOr:a,getOrThunk:a,getOrDie:a,getOrNull:a,getOrUndefined:a,or:n,orThunk:n,map:function(e){return x(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:b},toArray:function(){return[t]},toString:function(){return"some("+t+")"}}
return o},O={some:x,none:d,from:function(e){return null==e?b:x(e)}},P=tinymce.util.Tools.resolve("tinymce.Env"),S=tinymce.util.Tools.resolve("tinymce.util.Promise"),_=Object.hasOwnProperty,w=function(e,t){return _.call(e,t)},C={'"':"&quot;","<":"&lt;",">":"&gt;","&":"&amp;","'":"&#039;"}
r.add("template",(function(e){function t(){return n.execCommand("mceTemplate")}var n,r,c,i,s,f;(n=e).ui.registry.addButton("template",{icon:"template",tooltip:"Insert template",onAction:t}),n.ui.registry.addMenuItem("template",{icon:"template",text:"Insert template...",onAction:t}),(c=e).addCommand("mceInsertTemplate",function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r]
var a=t.concat(n)
return e.apply(null,a)}}(p,c)),c.addCommand("mceTemplate",(f=i=c,s=function(e){M(f,e)},function(){var e=i.getParam("templates")
a(e)?e(s):function(e){return n=typeof(t=e),"string"==(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n)
var t,n}(e)?h.send({url:e,success:function(e){s(JSON.parse(e))}}):s(e)})),(r=e).on("PreProcess",(function(e){var t=r.dom,n=l(r)
v.each(t.select("div",e.node),(function(e){t.hasClass(e,"mceTmpl")&&(v.each(t.select("*",e),(function(e){t.hasClass(e,o(r).replace(/\s+/g,"|"))&&(e.innerHTML=u(r,n))})),m(r,e))}))}))}))}()
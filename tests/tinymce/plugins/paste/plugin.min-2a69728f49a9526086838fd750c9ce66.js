!function(){"use strict"
function e(e){var t=e
return{get:function(){return t},set:function(e){t=e}}}function t(e){return!(null==e)}function n(){}function r(e){return function(){return e}}function o(e){return e}function a(){return c}var i=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=function(e){return n=typeof(t=e),"array"==(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n)
var t,n},l=r(!"function"),u=r(!0),c={fold:function(e,t){return e()},isSome:l,isNone:u,getOr:o,getOrThunk:f,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:r(null),getOrUndefined:r(void 0),or:o,orThunk:f,map:a,each:n,bind:a,exists:l,forall:u,filter:function(){return c},toArray:function(){return[]},toString:r("none()")}
function f(e){return e()}function d(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0
return!1}function p(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var a=e[o]
r[o]=t(a,o)}return r}function m(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}function g(){var t,r,o=(t=n,r=e(oe.none()),{clear:function(){a(),r.set(oe.none())},isSet:function(){return r.get().isSome()},get:function(){return r.get()},set:function(e){a(),r.set(oe.some(e))}})
function a(){return r.get().each(t)}return le(le({},o),{on:function(e){return o.get().each(e)}})}function v(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t}function h(e,t){return e.fire("PastePlainTextToggle",{state:t})}function y(e){return e.getParam("paste_data_images",!1)}function b(e){return e.getParam("paste_retain_style_properties")}function x(e){return e.getParam("validate")}function P(e){return e.getParam("paste_data_images",!1,"boolean")}function w(e){return pe.explode(e.getParam("images_file_types","jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp","string"))}function _(e){return-1!==e.indexOf(ge)}function C(e,t){return pe.each(t,(function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])})),e}function T(e){return C(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(e,t,n){return t||n?" ":" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function D(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}function k(e,t){var n,r=b(e)
r&&(n=pe.makeMap(r.split(/[, ]/))),t=C(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi," "],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return 0<t.length?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join(" "):""}]])
var o=e.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody"),a=we({valid_elements:o,valid_children:"-li[p]"})
pe.each(a.elements,(function(e){e.attributes.class||(e.attributes.class={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))}))
var i=be({},a)
i.addAttributeFilter("style",(function(t){for(var r,o=t.length;o--;)(r=t[o]).attr("style",function(e,t,n,r){var o={},a=e.dom.parseStyle(r)
return pe.each(a,(function(a,i){switch(i){case"mso-list":var s=/\w+ \w+([0-9]+)/i.exec(r)
s&&(n._listLevel=parseInt(s[1],10)),/Ignore/i.test(a)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0)
break
case"horiz-align":i="text-align"
break
case"vert-align":i="vertical-align"
break
case"font-color":case"mso-foreground":i="color"
break
case"mso-background":case"mso-highlight":i="background"
break
case"font-weight":case"font-style":return void("normal"!==a&&(o[i]=a))
case"mso-element":if(/^(comment|comment-list)$/i.test(a))return void n.remove()}0!==i.indexOf("mso-comment")?0!==i.indexOf("mso-")&&("all"===b(e)||t&&t[i])&&(o[i]=a):n.remove()})),/(bold)/i.test(o["font-weight"])&&(delete o["font-weight"],n.wrap(new Pe("b",1))),/(italic)/i.test(o["font-style"])&&(delete o["font-style"],n.wrap(new Pe("i",1))),e.dom.serializeStyle(o,n.name)||null}(e,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),i.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)n=(t=e[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)})),i.addNodeFilter("del",(function(e){for(var t=e.length;t--;)e[t].remove()})),i.addNodeFilter("a",(function(e){for(var t,n,r,o=e.length;o--;)n=(t=e[o]).attr("href"),r=t.attr("name"),n&&-1!==n.indexOf("#_msocom_")?t.remove():!(n=n&&0===n.indexOf("file://")?(n=n.split("#")[1])&&"#"+n:n)&&!r||r&&!/^_?(?:toc|edn|ftn)/i.test(r)?t.unwrap():t.attr({href:n,name:r})}))
var s=i.parse(t)
return e.getParam("paste_convert_word_fake_lists",!0)&&function(e){for(var t,n,r=1,o=function(e){var t=""
if(3===e.type)return e.value
if(e=e.firstChild)for(;t+=o(e),e=e.next;);return t},a=function(e,t){if(3===e.type&&t.test(e.value))return e.value=e.value.replace(t,""),!1
if(e=e.firstChild)do{if(!a(e,t))return!1}while(e=e.next)
return!0},i=function(e){if(e._listIgnore)e.remove()
else if(e=e.firstChild)for(;i(e),e=e.next;);},s=function(e,o,s){var l=e._listLevel||r;(t=l!==r?l<r?t&&t.parent.parent:(n=t,null):t)&&t.name===o?t.append(e):(n=n||t,t=new Pe(o,1),1<s&&t.attr("start",""+s),e.wrap(t)),e.name="li",r<l&&n&&n.lastChild.append(t),r=l,i(e),a(e,/^\u00a0+/),a(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),a(e,/^\u00a0+/)},l=[],u=e.firstChild;null!=u;)if(l.push(u),null!==(u=u.walk()))for(;void 0!==u&&u.parent!==e;)u=u.walk()
for(var c,f,d,p=0;p<l.length;p++)"p"===(e=l[p]).name&&e.firstChild?(c=o(e),/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(c)?s(e,"ul"):function(e){var t=!1
return e=c.replace(/^[\u00a0 ]+/,""),pe.each([/^[IVXLMCD]+\.[ \u00a0]/,/^[ivxlmcd]+\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(e))return!(t=!0)})),t}(c)?(d=1,s(e,"ol",d=(f=/([0-9]+)\./.exec(c))?parseInt(f[1],10):d)):e._listLevel?s(e,"ul",1):t=null):(n=t,t=null)}(s),xe({validate:x(e)},a).serialize(s)}function S(e,t){return{content:e,cancelled:t}}function O(e,t){return e.insertContent(t,{merge:e.getParam("paste_merge_formats",!0),paste:!0}),!0}function j(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)}function A(e,t,n){return!(!1!==e.selection.isCollapsed()||!j(t)||(o=t,a=n,(r=e).undoManager.extra((function(){a(r,o)}),(function(){r.execCommand("mceInsertLink",!1,o)})),0))
var r,o,a}function R(e,t,n){return r=e,!(!j(o=t)||!d(w(r),(function(e){return v(t=o.toLowerCase(),n="."+e.toLowerCase(),t.length-n.length)
var t,n}))||(i=t,s=n,(a=e).undoManager.extra((function(){s(a,i)}),(function(){a.insertContent('<img src="'+i+'">')})),0))
var r,o,a,i,s}function I(e){return"\n"===e||"\r"===e}function E(e,t,n,r){var o,a,i,s,l=function(e,t,n){var r,o,a,i,s,l,u,c,f,d,p,m,g=D(t),v=g?(o=t,(r=e).getParam("paste_enable_default_filters",!0)?k(r,o):o):t
return i=n,s=g,p=(a=e).fire("PastePreProcess",{content:v,internal:i,wordContent:s}),m=function(e,t){var n=be({},e.schema)
n.addNodeFilter("meta",(function(e){pe.each(e,(function(e){e.remove()}))}))
var r=n.parse(t,{forced_root_block:!1,isRootContent:!0})
return xe({validate:x(e)},e.schema).serialize(r)}(a,p.content),a.hasEventListeners("PastePostProcess")&&!p.isDefaultPrevented()?(u=i,c=s,f=(l=a).dom.create("div",{style:"display:none"},m),S((d=l.fire("PastePostProcess",{node:f,internal:u,wordContent:c})).node.innerHTML,d.isDefaultPrevented())):S(m,p.isDefaultPrevented())}(e,t,n)
!1===l.cancelled&&(o=e,a=l.content,r||!1===o.getParam("smart_paste",!0)?O(o,a):(i=o,s=a,pe.each([A,R,O],(function(e){return!0!==e(i,s,O)}))))}function F(e,t,n){var r=n||_(t)
E(e,t.replace(ge,""),r,!1)}function M(e,t){var n,r,o,a,i,s,l=function(e,t,n){return t?(r=!0===t?"p":t,o=n,a=e.split(/\n\n/),i=function(e,t){var n,r=[],o="<"+e
if("object"==typeof t){for(var a in t)n=a,he.call(t,n)&&r.push(a+'="'+ye.encodeAllRaw(t[a])+'"')
r.length&&(o+=" "+r.join(" "))}return o+">"}(r,o),s="</"+r+">",1===(l=pe.map(a,(function(e){return e.split(/\n/).join("<br />")}))).length?l[0]:pe.map(l,(function(e){return i+e+s})).join("")):e.replace(/\r?\n/g,"<br>")
var r,o,a,i,s,l}((n=e.dom.encode(t).replace(/\r\n/g,"\n"),a=(r=e.getParam("paste_tab_spaces",4,"number"))<=0?"":new Array(r+1).join(" "),i=n.replace(/\t/g,a),s={pcIsSpace:!(o=function(e,t){return-1!==" \f\t\v".indexOf(t)||" "===t?e.pcIsSpace||""===e.str||e.str.length===i.length-1||(n=e.str.length+1)<i.length&&0<=n&&I(i[n])?{pcIsSpace:!1,str:e.str+" "}:{pcIsSpace:!0,str:e.str+" "}:{pcIsSpace:I(t),str:e.str+t}
var n}),str:""},m(i,(function(e,t){s=o(s,e)})),s.str),e.getParam("forced_root_block"),e.getParam("forced_root_block_attrs"))
E(e,l,!1,!0)}function B(e){var t,n={}
if(e&&(!e.getData||(t=e.getData("Text"))&&0<t.length&&-1===t.indexOf("data:text/mce-internal,")&&(n["text/plain"]=t),e.types))for(var r=0;r<e.types.length;r++){var o=e.types[r]
try{n[o]=e.getData(o)}catch(e){n[o]=""}}return n}function N(e,t){return t in e&&0<e[t].length}function L(e){return N(e,"text/html")||N(e,"text/plain")}function H(e,n,r){var o,a,i,l,u,c="paste"===n.type?n.clipboardData:n.dataTransfer
if(P(e)&&c){var f=(o=e,i=(a=c).items?function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!s(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
ie.apply(t,e[n])}return t}(p(se(a.items),(function(e){return"file"===e.kind?[e.getAsFile()]:[]}))):[],l=a.files?se(a.files):[],function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var a=e[r]
t(a,r)&&n.push(a)}return n}(0<i.length?i:l,(u=w(o),function(e){return v(e.type,"image/",0)&&d(u,(function(t){return n=t.toLowerCase(),(pe.hasOwn(r={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"},n)?"image/"+r[n]:"image/"+n)===e.type
var n,r}))})))
if(0<f.length)return n.preventDefault(),fe.all(p(f,(function(e){return new fe((function(n){var r=t(e.getAsFile)?e.getAsFile():e,o=new window.FileReader
o.onload=function(){n({blob:r,uri:o.result})},o.readAsDataURL(r)}))}))).then((function(n){r&&e.selection.setRng(r),m(n,(function(n){var r,o,a,i,s,l,u,c,f,d,p,m,g,v,h,y,b,x,P,w
r=e,a=(o=n).uri,y=(h=(i=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(a))?{type:i[1],data:decodeURIComponent(i[2])}:{type:null,data:null}).data,b=h.type,x=_e(),P=o.blob,(w=new Image).src=o.uri,g=w,!(v=r.getParam("images_dataimg_filter"))||v(g)?(d=void 0,(l=(s=r.editorUpload.blobCache).getByData(y,b))?d=l:(c=(u=r.getParam("images_reuse_filename")&&t(P.name))?(p=r,t(m=P.name.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i))?p.dom.encode(m[1]):null):x,f=u?P.name:void 0,d=s.create(x,P,y,c,f),s.add(d)),F(r,'<img src="'+d.blobUri()+'">',!1)):F(r,'<img src="'+o.uri+'">',!1)}))})),!0}return!1}function $(e){return de.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode}function z(e,t,n){var r,o,a,i,s,l,u
function c(e,t,n,r,o){var i
N(t,"text/html")?i=t["text/html"]:(i=a.getHtml(),o=o||_(i),a.isDefaultContent(i)&&(r=!0)),i=T(i),a.remove()
var s,l,u,c,f,d,p,m,g=!1===o&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(i),v=j(i);((r=!i.length||g&&!v||r)||v)&&(i=N(t,"text/plain")&&g?t["text/plain"]:(s=i,l=we(),u=be({},l),c="",f=l.getShortEndedElements(),d=pe.makeMap("script noscript style textarea video audio iframe object"," "),p=l.getBlockElements(),m=function(e){var t=e.name,n=e
if("br"!==t){if("wbr"!==t)if(f[t]&&(c+=" "),d[t])c+=" "
else{if(3===e.type&&(c+=e.value),!e.shortEnded&&(e=e.firstChild))for(;m(e),e=e.next;);p[t]&&n.next&&(c+="\n","p"===t&&(c+="\n"))}}else c+="\n"},s=C(s,[/<!\[[^\]]+\]>/g]),m(u.parse(s)),c)),a.isDefaultContent(i)?n||e.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):r?M(e,i):F(e,i,o)}o=e,a=t,i=n,l=g(),u=g(),o.on("keyup",u.clear),o.on("keydown",(function(e){function t(e){$(e)&&!e.isDefaultPrevented()&&a.remove()}if($(e)&&!e.isDefaultPrevented()&&(!(s=e.shiftKey&&86===e.keyCode)||!ue.webkit||-1===navigator.userAgent.indexOf("Version/"))){if(e.stopImmediatePropagation(),l.set(e),u.set(!0),ue.ie&&s)return e.preventDefault(),void o.fire("paste",{ieFake:!0})
a.remove(),a.create(),o.once("keyup",t),o.once("paste",(function(){o.off("keyup",t)}))}})),o.on("paste",(function(e){var t=l.isSet()||u.isSet()
t&&l.clear()
var n,r=B(e.clipboardData||o.getDoc().dataTransfer),f="text"===i.get()||s,d=N(r,ve())
s=!1,e.isDefaultPrevented()||(n=e.clipboardData,-1!==navigator.userAgent.indexOf("Android")&&n&&n.items&&0===n.items.length)||!L(r)&&H(o,e,a.getLastRng()||o.selection.getRng())?a.remove():(t||e.preventDefault(),!ue.ie||t&&!e.ieFake||N(r,"text/html")||(a.create(),o.dom.bind(a.getEl(),"paste",(function(e){e.stopPropagation()})),o.getDoc().execCommand("Paste",!1,null),r["text/html"]=a.getHtml()),N(r,"text/html")?(e.preventDefault(),d=d||_(r["text/html"]),c(o,r,t,f,d)):ce.setEditorTimeout(o,(function(){c(o,r,t,f,d)}),0))})),e.parser.addNodeFilter("img",(function(t,n,o){var a
if(!P(e)&&o.data&&!0===o.data.paste)for(var i=t.length;i--;)(r=t[i].attr("src"))&&(0!==r.indexOf("webkit-fake-url")&&(e.getParam("allow_html_data_urls",!1,"boolean")||0!==r.indexOf("data:"))||(a=t[i]).attr("data-mce-object")||r===ue.transparentSrc||a.remove())}))}function U(e){return ue.ie&&e.inline?document.body:e.getBody()}function V(e,t,n,r){!function(e,t,n){if(!1===ue.iOS&&"function"==typeof(null==e?void 0:e.setData))try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",n),e.setData(ve(),t),1}catch(e){return}}(e.clipboardData,t.html,t.text)?n(t.html,r):(e.preventDefault(),r())}function K(e){return function(t,n){var r=ge+t,o=e.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),a=e.dom.create("div",{contenteditable:"true"},r)
e.dom.setStyles(o,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),o.appendChild(a),e.dom.add(e.getBody(),o)
var i=e.selection.getRng()
a.focus()
var s=e.dom.createRng()
s.selectNodeContents(a),e.selection.setRng(s),ce.setTimeout((function(){e.selection.setRng(i),o.parentNode.removeChild(o),n()}),0)}}function X(e){return{html:e.selection.getContent({contextual:!0}),text:e.selection.getContent({format:"text"})}}function W(e){return!e.selection.isCollapsed()||(t=e).dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())
var t}function Y(e,t){return Te.getCaretRangeFromPoint(t.clientX,t.clientY,e.getDoc())}function Z(e,t){e.focus(),e.selection.setRng(t)}function q(e,t){e.on("PastePreProcess",(function(n){n.content=t(e,n.content,n.internal,n.wordContent)}))}function G(e,t){if(!D(t))return t
var n=[]
return pe.each(e.schema.getBlockElements(),(function(e,t){n.push(t)})),t=C(t,[[new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g"),"$1"]]),C(t,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function J(e,t,n,r){if(r||n)return t
var o,a,i,s=e.getParam("paste_webkit_styles")
return!1===e.getParam("paste_remove_styles_if_webkit",!0)||"all"===s?t:(t=(o=s?s.split(/[, ]/):o)?(a=e.dom,i=e.selection.getNode(),t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(e,t,n,r){var s=a.parseStyle(a.decode(n)),l={}
if("none"===o)return t+r
for(var u=0;u<o.length;u++){var c=s[o[u]],f=a.getStyle(i,o[u],!0);/color/.test(o[u])&&(c=a.toHex(c),f=a.toHex(f)),f!==c&&(l[o[u]]=c)}var d=a.serializeStyle(l,"span")
return d?t+' style="'+d+'"'+r:t+r}))):t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3")).replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(e,t,n,r){return t+' style="'+n+'"'+r}))}function Q(e,t){e.$("a",t).find("font,u").each((function(t,n){e.dom.remove(n,!0)}))}function ee(e,t){return function(n){function r(e){return n.setActive(e.state)}return n.setActive("text"===t.pasteFormat.get()),e.on("PastePlainTextToggle",r),function(){return e.off("PastePlainTextToggle",r)}}}function te(e){return e.dom.get("mcepastebin")}var ne,re=function(e){function t(){return a}function n(t){return t(e)}var o=r(e),a={fold:function(t,n){return n(e)},isSome:u,isNone:l,getOr:o,getOrThunk:o,getOrDie:o,getOrNull:o,getOrUndefined:o,or:t,orThunk:t,map:function(t){return re(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?a:c},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return a},oe={some:re,none:a,from:function(e){return null==e?c:re(e)}},ae=Array.prototype.slice,ie=Array.prototype.push,se="function"==typeof Array.from?Array.from:function(e){return ae.call(e)},le=function(){return(le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)},ue=tinymce.util.Tools.resolve("tinymce.Env"),ce=tinymce.util.Tools.resolve("tinymce.util.Delay"),fe=tinymce.util.Tools.resolve("tinymce.util.Promise"),de=tinymce.util.Tools.resolve("tinymce.util.VK"),pe=tinymce.util.Tools.resolve("tinymce.util.Tools"),me="x-tinymce/html",ge="\x3c!-- "+me+" --\x3e",ve=r(me),he=Object.hasOwnProperty,ye=tinymce.util.Tools.resolve("tinymce.html.Entities"),be=tinymce.util.Tools.resolve("tinymce.html.DomParser"),xe=tinymce.util.Tools.resolve("tinymce.html.Serializer"),Pe=tinymce.util.Tools.resolve("tinymce.html.Node"),we=tinymce.util.Tools.resolve("tinymce.html.Schema"),_e=(ne=0,function(){return"mceclip"+ne++}),Ce=function(e,t){var n=te(e)
return n&&"mcepastebin"===n.id&&n.innerHTML===t},Te=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils")
i.add("paste",(function(t){if(0==(!!t.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0))){var r=e(!1),o=e(t.getParam("paste_as_text",!1)?"text":"html"),a=(w=o,_=function(t){var n=e(null),r="%MCEPASTEBIN%"
return{create:function(){return function(e,t,n){var r=e.dom,o=e.getBody()
t.set(e.selection.getRng())
var a,i,s,l=e.dom.add(U(e),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(ue.ie||ue.gecko)&&r.setStyle(l,"left","rtl"===r.getStyle(o,"direction",!0)?65535:-65535),r.bind(l,"beforedeactivate focusin focusout",(function(e){e.stopPropagation()})),i=l,U(s=a=e)!==s.getBody()&&a.dom.bind(i,"paste keyup",(function(e){Ce(a,"%MCEPASTEBIN%")||a.fire("paste")})),l.focus(),e.selection.select(l,!0)}(t,n,r)},remove:function(){return function(e,t){if(te(e)){for(var n,r=t.get();n=e.dom.get("mcepastebin");)e.dom.remove(n),e.dom.unbind(n)
r&&e.selection.setRng(r)}t.set(null)}(t,n)},getEl:function(){return te(t)},getHtml:function(){return function(e){function t(t,n){t.appendChild(n),e.dom.remove(n,!0)}var n=pe.grep(U(e).childNodes,(function(e){return"mcepastebin"===e.id})),r=n.shift()
pe.each(n,(function(e){t(r,e)}))
for(var o=e.dom.select("div[id=mcepastebin]",r),a=o.length-1;0<=a;a--){var i=e.dom.create("div")
r.insertBefore(i,o[a]),t(i,o[a])}return r?r.innerHTML:""}(t)},getLastRng:n.get,isDefault:function(){return Ce(t,r)},isDefaultContent:function(e){return e===r}}}(P=t),P.on("PreInit",(function(){return z(P,_,w)})),{pasteFormat:w,pasteHtml:function(e,t){return F(P,e,t)},pasteText:function(e){return M(P,e)},pasteImageData:function(e,t){return H(P,e,t)},getDataTransferItems:B,hasHtmlOrText:L,hasContentType:N}),i=t
return ue.webkit&&q(i,J),ue.ie&&(q(i,G),x=Q,(b=i).on("PastePostProcess",(function(e){x(b,e.node)}))),(g=t).ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:C,onSetup:ee(g,v=a)}),g.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:C,onSetup:ee(g,v)}),m=a,(p=t).addCommand("mceTogglePlainTextPaste",(function(){var e,t=p
"text"===(e=m).pasteFormat.get()?(e.pasteFormat.set("html"),h(t,!1)):(e.pasteFormat.set("text"),h(t,!0)),t.focus()})),p.addCommand("mceInsertClipboardContent",(function(e,t){t.content&&m.pasteHtml(t.content,t.internal),t.text&&m.pasteText(t.text)})),function(e){var t=e.plugins.paste,n=e.getParam("paste_preprocess")
n&&e.on("PastePreProcess",(function(e){n.call(t,t,e)}))
var r=e.getParam("paste_postprocess")
r&&e.on("PastePostProcess",(function(e){r.call(t,t,e)}))}(t),(c=t).on("cut",(f=c,function(e){W(f)&&V(e,X(f),K(f),(function(){var e
ue.browser.isChrome()||ue.browser.isFirefox()?(e=f.selection.getRng(),ce.setEditorTimeout(f,(function(){f.selection.setRng(e),f.execCommand("Delete")}),0)):f.execCommand("Delete")}))})),c.on("copy",(d=c,function(e){W(d)&&V(e,X(d),K(d),n)})),l=a,u=r,(s=t).getParam("paste_block_drop",!1)&&s.on("dragend dragover draggesture dragdrop drop drag",(function(e){e.preventDefault(),e.stopPropagation()})),y(s)||s.on("drop",(function(e){var t=e.dataTransfer
t&&t.files&&0<t.files.length&&e.preventDefault()})),s.on("drop",(function(e){var t,n,r,o,a=Y(s,e)
e.isDefaultPrevented()||u.get()||(t=l.getDataTransferItems(e.dataTransfer),n=l.hasContentType(t,ve()),(!l.hasHtmlOrText(t)||(r=t["text/plain"])&&0===r.indexOf("file://"))&&l.pasteImageData(e,a)||!a||!s.getParam("paste_filter_drop",!0)||(o=t["mce-internal"]||t["text/html"]||t["text/plain"])&&(e.preventDefault(),ce.setEditorTimeout(s,(function(){s.undoManager.transact((function(){t["mce-internal"]&&s.execCommand("Delete"),Z(s,a),o=T(o),t["text/html"]?l.pasteHtml(o,n):l.pasteText(o)}))}))))})),s.on("dragstart",(function(e){u.set(!0)})),s.on("dragover dragend",(function(e){y(s)&&!1===u.get()&&(e.preventDefault(),Z(s,Y(s,e))),"dragend"===e.type&&u.set(!1)})),{clipboard:a}}var s,l,u,c,f,d,p,m,g,v,b,x,P,w,_
function C(){return g.execCommand("mceTogglePlainTextPaste")}}))}()
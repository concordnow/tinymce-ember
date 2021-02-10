(function(){"use strict"
var t,e,n,r,o=function(t){var e=t
return{get:function(){return e},set:function(t){e=t}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(){},u=function(t){return function(){return t}},s=u(!1),c=u(!0),l=function(){return f},f=(t=function(t){return t.isNone()},{fold:function(t,e){return t()},is:s,isSome:s,isNone:c,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(void 0),or:n,orThunk:e,map:l,each:a,bind:l,exists:s,forall:c,filter:l,equals:t,equals_:t,toArray:function(){return[]},toString:u("none()")}),d=function(t){var e=u(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:c,isNone:s,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return d(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:f},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(s,(function(e){return n(t,e)}))}}
return o},m={some:d,none:l,from:function(t){return null==t?f:d(t)}},p=(r="function",function(t){return typeof t===r}),g=Array.prototype.slice,v=function(t,e){for(var n=t.length,r=new Array(n),o=0;o<n;o++){var i=t[o]
r[o]=e(i,o)}return r},h=function(t,e){for(var n=0,r=t.length;n<r;n++){e(t[n],n)}},y=p(Array.from)?Array.from:function(t){return g.call(t)},b=tinymce.util.Tools.resolve("tinymce.Env"),x=tinymce.util.Tools.resolve("tinymce.util.Delay"),P=tinymce.util.Tools.resolve("tinymce.util.Promise"),w=tinymce.util.Tools.resolve("tinymce.util.VK"),_=function(t,e){return t.fire("PastePlainTextToggle",{state:e})},T=function(t){return t.getParam("paste_data_images",!1)},C=function(t){return t.getParam("paste_merge_formats",!0)},D=function(t){return t.getParam("paste_retain_style_properties")},k=function(t){return t.getParam("validate")},S=function(t){return t.getParam("allow_html_data_urls",!1,"boolean")},O=function(t){return t.getParam("paste_data_images",!1,"boolean")},R="x-tinymce/html",A="\x3c!-- x-tinymce/html --\x3e",I=function(t){return-1!==t.indexOf(A)},F=function(){return R},E=tinymce.util.Tools.resolve("tinymce.html.Entities"),M=tinymce.util.Tools.resolve("tinymce.util.Tools"),N=function(t,e,n){var r=t.split(/\n\n/),o=function(t,e){var n,r=[],o="<"+t
if("object"==typeof e){for(n in e)e.hasOwnProperty(n)&&r.push(n+'="'+E.encodeAllRaw(e[n])+'"')
r.length&&(o+=" "+r.join(" "))}return o+">"}(e,n),i="</"+e+">",a=M.map(r,(function(t){return t.split(/\n/).join("<br />")}))
return 1===a.length?a[0]:M.map(a,(function(t){return o+t+i})).join("")},B=tinymce.util.Tools.resolve("tinymce.html.DomParser"),j=tinymce.util.Tools.resolve("tinymce.html.Serializer"),H=" ",$=tinymce.util.Tools.resolve("tinymce.html.Node"),L=tinymce.util.Tools.resolve("tinymce.html.Schema")
function z(t,e){return M.each(e,(function(e){t=e.constructor===RegExp?t.replace(e,""):t.replace(e[0],e[1])})),t}function U(t){return t=z(t,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(t,e,n){return e||n?H:" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function q(t){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(t)||/class="OutlineElement/.test(t)||/id="?docs\-internal\-guid\-/.test(t)}function V(t){var e
return t=t.replace(/^[\u00a0 ]+/,""),M.each([/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(t))return e=!0,!1})),e}function K(t){var e,n,r=1
function o(t){var e=""
if(3===t.type)return t.value
if(t=t.firstChild)do{e+=o(t)}while(t=t.next)
return e}function i(t,e){if(3===t.type&&e.test(t.value))return t.value=t.value.replace(e,""),!1
if(t=t.firstChild)do{if(!i(t,e))return!1}while(t=t.next)
return!0}function a(t){if(t._listIgnore)t.remove()
else if(t=t.firstChild)do{a(t)}while(t=t.next)}function u(t,o,u){var s=t._listLevel||r
s!==r&&(s<r?e&&(e=e.parent.parent):(n=e,e=null)),e&&e.name===o?e.append(t):(n=n||e,e=new $(o,1),u>1&&e.attr("start",""+u),t.wrap(e)),t.name="li",s>r&&n&&n.lastChild.append(e),r=s,a(t),i(t,/^\u00a0+/),i(t,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),i(t,/^\u00a0+/)}for(var s=[],c=t.firstChild;null!=c;)if(s.push(c),null!==(c=c.walk()))for(;void 0!==c&&c.parent!==t;)c=c.walk()
for(var l=0;l<s.length;l++)if("p"===(t=s[l]).name&&t.firstChild){var f=o(t)
if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(f)){u(t,"ul")
continue}if(V(f)){var d=/([0-9]+)\./.exec(f),m=1
d&&(m=parseInt(d[1],10)),u(t,"ol",m)
continue}if(t._listLevel){u(t,"ul",1)
continue}e=null}else n=e,e=null}function X(t,e,n,r){var o,i={},a=t.dom.parseStyle(r)
return M.each(a,(function(a,u){switch(u){case"mso-list":(o=/\w+ \w+([0-9]+)/i.exec(r))&&(n._listLevel=parseInt(o[1],10)),/Ignore/i.test(a)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0)
break
case"horiz-align":u="text-align"
break
case"vert-align":u="vertical-align"
break
case"font-color":case"mso-foreground":u="color"
break
case"mso-background":case"mso-highlight":u="background"
break
case"font-weight":case"font-style":return void("normal"!==a&&(i[u]=a))
case"mso-element":if(/^(comment|comment-list)$/i.test(a))return void n.remove()}0!==u.indexOf("mso-comment")?0!==u.indexOf("mso-")&&("all"===D(t)||e&&e[u])&&(i[u]=a):n.remove()})),/(bold)/i.test(i["font-weight"])&&(delete i["font-weight"],n.wrap(new $("b",1))),/(italic)/i.test(i["font-style"])&&(delete i["font-style"],n.wrap(new $("i",1))),(i=t.dom.serializeStyle(i,n.name))||null}var W,Y,Z=function(t,e){return function(t){return t.getParam("paste_enable_default_filters",!0)}(t)?function(t,e){var n,r=D(t)
r&&(n=M.makeMap(r.split(/[, ]/))),e=z(e,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,H],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(t,e){return e.length>0?e.replace(/./," ").slice(Math.floor(e.length/2)).split("").join(H):""}]])
var o=function(t){return t.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")}(t),i=L({valid_elements:o,valid_children:"-li[p]"})
M.each(i.elements,(function(t){t.attributes.class||(t.attributes.class={},t.attributesOrder.push("class")),t.attributes.style||(t.attributes.style={},t.attributesOrder.push("style"))}))
var a=B({},i)
a.addAttributeFilter("style",(function(e){for(var r,o=e.length;o--;)(r=e[o]).attr("style",X(t,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),a.addAttributeFilter("class",(function(t){for(var e,n,r=t.length;r--;)n=(e=t[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&e.remove(),e.attr("class",null)})),a.addNodeFilter("del",(function(t){for(var e=t.length;e--;)t[e].remove()})),a.addNodeFilter("a",(function(t){for(var e,n,r,o=t.length;o--;)if(n=(e=t[o]).attr("href"),r=e.attr("name"),n&&-1!==n.indexOf("#_msocom_"))e.remove()
else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){e.unwrap()
continue}e.attr({href:n,name:r})}else e.unwrap()}))
var u=a.parse(e)
return function(t){return t.getParam("paste_convert_word_fake_lists",!0)}(t)&&K(u),j({validate:k(t)},i).serialize(u)}(t,e):e},G=function(t,e){return{content:t,cancelled:e}},J=function(t,e,n,r){var o=function(t,e,n,r){return t.fire("PastePreProcess",{content:e,internal:n,wordContent:r})}(t,e,n,r),i=function(t,e){var n=B({},t.schema)
n.addNodeFilter("meta",(function(t){M.each(t,(function(t){t.remove()}))}))
var r=n.parse(e,{forced_root_block:!1,isRootContent:!0})
return j({validate:k(t)},t.schema).serialize(r)}(t,o.content)
return t.hasEventListeners("PastePostProcess")&&!o.isDefaultPrevented()?function(t,e,n,r){var o=t.dom.create("div",{style:"display:none"},e),i=function(t,e,n,r){return t.fire("PastePostProcess",{node:e,internal:n,wordContent:r})}(t,o,n,r)
return G(i.node.innerHTML,i.isDefaultPrevented())}(t,i,n,r):G(i,o.isDefaultPrevented())},Q=function(t,e){return t.insertContent(e,{merge:C(t),paste:!0}),!0},tt=function(t){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(t)},et=function(t){return tt(t)&&/.(gif|jpe?g|png)$/.test(t)},nt=function(t,e,n){return!(!1!==t.selection.isCollapsed()||!tt(e))&&function(t,e,n){return t.undoManager.extra((function(){n(t,e)}),(function(){t.execCommand("mceInsertLink",!1,e)})),!0}(t,e,n)},rt=function(t,e,n){return!!et(e)&&function(t,e,n){return t.undoManager.extra((function(){n(t,e)}),(function(){t.insertContent('<img src="'+e+'">')})),!0}(t,e,n)},ot=function(t,e,n){n||!1===function(t){return t.getParam("smart_paste",!0)}(t)?Q(t,e):function(t,e){M.each([nt,rt,Q],(function(n){return!0!==n(t,e,Q)}))}(t,e)},it=function(t){return"\n"===t||"\r"===t},at=function(t,e){var n,r,o,i,a=(n=" ",(r=function(t){return t.getParam("paste_tab_spaces",4,"number")}(t))<=0?"":new Array(r+1).join(n)),u=e.replace(/\t/g,a)
return(o=function(t,e){return function(t){return-1!==" \f\t\v".indexOf(t)}(e)||e===H?t.pcIsSpace||""===t.str||t.str.length===u.length-1||function(t,e){return e<t.length&&e>=0&&it(t[e])}(u,t.str.length+1)?{pcIsSpace:!1,str:t.str+H}:{pcIsSpace:!0,str:t.str+" "}:{pcIsSpace:it(e),str:t.str+e}},i={pcIsSpace:!1,str:""},h(u,(function(t){i=o(i,t)})),i).str},ut=function(t,e,n,r){var o=function(t,e,n){var r=q(e),o=r?Z(t,e):e
return J(t,o,n,r)}(t,e,n)
!1===o.cancelled&&ot(t,o.content,r)},st=function(t,e,n){var r=n||I(e)
ut(t,function(t){return t.replace(A,"")}(e),r,!1)},ct=function(t,e){var n=t.dom.encode(e).replace(/\r\n/g,"\n"),r=function(t,e,n){return e?N(t,!0===e?"p":e,n):function(t){return t.replace(/\r?\n/g,"<br>")}(t)}(at(t,n),function(t){return t.getParam("forced_root_block")}(t),function(t){return t.getParam("forced_root_block_attrs")}(t))
ut(t,r,!1,!0)},lt=function(t){var e={}
if(t){if(t.getData){var n=t.getData("Text")
n&&n.length>0&&-1===n.indexOf("data:text/mce-internal,")&&(e["text/plain"]=n)}if(t.types)for(var r=0;r<t.types.length;r++){var o=t.types[r]
try{e[o]=t.getData(o)}catch(i){e[o]=""}}}return e},ft=function(t,e){return e in t&&t[e].length>0},dt=function(t){return ft(t,"text/html")||ft(t,"text/plain")},mt=(W="mceclip",Y=0,function(){return W+Y++}),pt=function(t,e){var n,r,o=(n=e.uri,(r=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(n))?{type:r[1],data:decodeURIComponent(r[2])}:{type:null,data:null}),i=o.data,a=o.type,u=mt(),s=function(t){return t.getParam("images_reuse_filename")}(t)&&e.blob.name?function(t,e){var n=e.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i)
return n?t.dom.encode(n[1]):null}(t,e.blob.name):u,c=new Image
if(c.src=e.uri,function(t,e){var n=function(t){return t.getParam("images_dataimg_filter")}(t)
return!n||n(e)}(t,c)){var l=t.editorUpload.blobCache,f=void 0,d=l.getByData(i,a)
d?f=d:(f=l.create(u,e.blob,i,s),l.add(f)),st(t,'<img src="'+f.blobUri()+'">',!1)}else st(t,'<img src="'+e.uri+'">',!1)},gt=function(t,e,n){var r,o="paste"===e.type?e.clipboardData:e.dataTransfer
if(O(t)&&o){var i=function(t){var e=t.items?v(y(t.items),(function(t){return t.getAsFile()})):[],n=t.files?y(t.files):[]
return function(t,e){for(var n=[],r=0,o=t.length;r<o;r++){var i=t[r]
e(i,r)&&n.push(i)}return n}(e.length>0?e:n,(function(t){return/^image\/(jpeg|png|gif|bmp)$/.test(t.type)}))}(o)
if(i.length>0)return e.preventDefault(),(r=i,P.all(v(r,(function(t){return new P((function(e){var n=t.getAsFile?t.getAsFile():t,r=new window.FileReader
r.onload=function(){e({blob:n,uri:r.result})},r.readAsDataURL(n)}))})))).then((function(e){n&&t.selection.setRng(n),h(e,(function(e){pt(t,e)}))})),!0}return!1},vt=function(t){return w.metaKeyPressed(t)&&86===t.keyCode||t.shiftKey&&45===t.keyCode},ht=function(t,e,n){var r,i,a=(r=o(m.none()),{clear:function(){return r.set(m.none())},set:function(t){return r.set(m.some(t))},isSet:function(){return r.get().isSome()},on:function(t){return r.get().each(t)}})
function u(n,r,o,i){var a
ft(n,"text/html")?a=n["text/html"]:(a=e.getHtml(),i=i||I(a),e.isDefaultContent(a)&&(o=!0)),a=U(a),e.remove()
var u=!1===i&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(a),s=et(a);(!a.length||u&&!s)&&(o=!0),(o||s)&&(a=ft(n,"text/plain")&&u?n["text/plain"]:function(t){var e=L(),n=B({},e),r="",o=e.getShortEndedElements(),i=M.makeMap("script noscript style textarea video audio iframe object"," "),a=e.getBlockElements()
return t=z(t,[/<!\[[^\]]+\]>/g]),function t(e){var n=e.name,u=e
if("br"!==n){if("wbr"!==n)if(o[n]&&(r+=" "),i[n])r+=" "
else{if(3===e.type&&(r+=e.value),!e.shortEnded&&(e=e.firstChild))do{t(e)}while(e=e.next)
a[n]&&u.next&&(r+="\n","p"===n&&(r+="\n"))}}else r+="\n"}(n.parse(t)),r}(a)),e.isDefaultContent(a)?r||t.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):o?ct(t,a):st(t,a,i)}t.on("keydown",(function(n){function r(t){vt(t)&&!t.isDefaultPrevented()&&e.remove()}if(vt(n)&&!n.isDefaultPrevented()){if((i=n.shiftKey&&86===n.keyCode)&&b.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return
if(n.stopImmediatePropagation(),a.set(n),window.setTimeout((function(){a.clear()}),100),b.ie&&i)return n.preventDefault(),void function(t,e){t.fire("paste",{ieFake:e})}(t,!0)
e.remove(),e.create(),t.once("keyup",r),t.once("paste",(function(){t.off("keyup",r)}))}}))
t.on("paste",(function(r){var o=a.isSet(),s=function(t,e){return lt(e.clipboardData||t.getDoc().dataTransfer)}(t,r),c="text"===n.get()||i,l=ft(s,F())
i=!1,r.isDefaultPrevented()||function(t){var e=t.clipboardData
return-1!==navigator.userAgent.indexOf("Android")&&e&&e.items&&0===e.items.length}(r)?e.remove():dt(s)||!gt(t,r,e.getLastRng()||t.selection.getRng())?(o||r.preventDefault(),!b.ie||o&&!r.ieFake||ft(s,"text/html")||(e.create(),t.dom.bind(e.getEl(),"paste",(function(t){t.stopPropagation()})),t.getDoc().execCommand("Paste",!1,null),s["text/html"]=e.getHtml()),ft(s,"text/html")?(r.preventDefault(),l||(l=I(s["text/html"])),u(s,o,c,l)):x.setEditorTimeout(t,(function(){u(s,o,c,l)}),0)):e.remove()}))},yt=function(t){return b.ie&&t.inline?document.body:t.getBody()},bt=function(t,e,n){(function(t){return yt(t)!==t.getBody()})(t)&&t.dom.bind(e,"paste keyup",(function(e){wt(t,n)||t.fire("paste")}))},xt=function(t){return t.dom.get("mcepastebin")},Pt=function(t,e){return e===t},wt=function(t,e){var n,r=xt(t)
return(n=r)&&"mcepastebin"===n.id&&Pt(e,r.innerHTML)},_t=function(t){var e=o(null),n="%MCEPASTEBIN%"
return{create:function(){return function(t,e,n){var r=t.dom,o=t.getBody()
e.set(t.selection.getRng())
var i=t.dom.add(yt(t),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(b.ie||b.gecko)&&r.setStyle(i,"left","rtl"===r.getStyle(o,"direction",!0)?65535:-65535),r.bind(i,"beforedeactivate focusin focusout",(function(t){t.stopPropagation()})),bt(t,i,n),i.focus(),t.selection.select(i,!0)}(t,e,n)},remove:function(){return function(t,e){if(xt(t)){for(var n=void 0,r=e.get();n=t.dom.get("mcepastebin");)t.dom.remove(n),t.dom.unbind(n)
r&&t.selection.setRng(r)}e.set(null)}(t,e)},getEl:function(){return xt(t)},getHtml:function(){return function(t){var e=function(e,n){e.appendChild(n),t.dom.remove(n,!0)},n=M.grep(yt(t).childNodes,(function(t){return"mcepastebin"===t.id})),r=n.shift()
M.each(n,(function(t){e(r,t)}))
for(var o=t.dom.select("div[id=mcepastebin]",r),i=o.length-1;i>=0;i--){var a=t.dom.create("div")
r.insertBefore(a,o[i]),e(a,o[i])}return r?r.innerHTML:""}(t)},getLastRng:function(){return function(t){return t.get()}(e)},isDefault:function(){return wt(t,n)},isDefaultContent:function(t){return Pt(n,t)}}},Tt=function(t,e){var n=_t(t)
return t.on("PreInit",(function(){return function(t,e,n){var r
ht(t,e,n),t.parser.addNodeFilter("img",(function(e,n,o){var i=function(t){t.attr("data-mce-object")||r===b.transparentSrc||t.remove()},a=function(t){return 0===t.indexOf("webkit-fake-url")},u=function(t){return 0===t.indexOf("data:")}
if(!O(t)&&function(t){return t.data&&!0===t.data.paste}(o))for(var s=e.length;s--;)(r=e[s].attr("src"))&&(a(r)||!S(t)&&u(r))&&i(e[s])}))}(t,n,e)})),{pasteFormat:e,pasteHtml:function(e,n){return st(t,e,n)},pasteText:function(e){return ct(t,e)},pasteImageData:function(e,n){return gt(t,e,n)},getDataTransferItems:lt,hasHtmlOrText:dt,hasContentType:ft}},Ct=function(t,e){t.addCommand("mceTogglePlainTextPaste",(function(){(function(t,e){"text"===e.pasteFormat.get()?(e.pasteFormat.set("html"),_(t,!1)):(e.pasteFormat.set("text"),_(t,!0)),t.focus()})(t,e)})),t.addCommand("mceInsertClipboardContent",(function(t,n){n.content&&e.pasteHtml(n.content,n.internal),n.text&&e.pasteText(n.text)}))},Dt=function(t,e,n){if(!function(t){return!1===b.iOS&&"function"==typeof(null==t?void 0:t.setData)}(t))return!1
try{return t.clearData(),t.setData("text/html",e),t.setData("text/plain",n),t.setData(F(),e),!0}catch(r){return!1}},kt=function(t,e,n,r){Dt(t.clipboardData,e.html,e.text)?(t.preventDefault(),r()):n(e.html,r)},St=function(t){return function(e,n){var r=function(t){return A+t}(e),o=t.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),i=t.dom.create("div",{contenteditable:"true"},r)
t.dom.setStyles(o,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),o.appendChild(i),t.dom.add(t.getBody(),o)
var a=t.selection.getRng()
i.focus()
var u=t.dom.createRng()
u.selectNodeContents(i),t.selection.setRng(u),x.setTimeout((function(){t.selection.setRng(a),o.parentNode.removeChild(o),n()}),0)}},Ot=function(t){return{html:t.selection.getContent({contextual:!0}),text:t.selection.getContent({format:"text"})}},Rt=function(t){return!t.selection.isCollapsed()||function(t){return!!t.dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())}(t)},At=function(t){t.on("cut",function(t){return function(e){Rt(t)&&kt(e,Ot(t),St(t),(function(){if(b.browser.isChrome()){var e=t.selection.getRng()
x.setEditorTimeout(t,(function(){t.selection.setRng(e),t.execCommand("Delete")}),0)}else t.execCommand("Delete")}))}}(t)),t.on("copy",function(t){return function(e){Rt(t)&&kt(e,Ot(t),St(t),(function(){}))}}(t))},It=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),Ft=function(t,e){return It.getCaretRangeFromPoint(e.clientX,e.clientY,t.getDoc())},Et=function(t,e){t.focus(),t.selection.setRng(e)}
function Mt(t,e){t.on("PastePreProcess",(function(n){n.content=e(t,n.content,n.internal,n.wordContent)}))}function Nt(t,e){if(!q(e))return e
var n=[]
return M.each(t.schema.getBlockElements(),(function(t,e){n.push(e)})),e=z(e,[[new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g"),"$1"]]),e=z(e,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function Bt(t,e,n,r){if(r||n)return e
var o,i=function(t){return t.getParam("paste_webkit_styles")}(t)
if(!1===function(t){return t.getParam("paste_remove_styles_if_webkit",!0)}(t)||"all"===i)return e
if(i&&(o=i.split(/[, ]/)),o){var a=t.dom,u=t.selection.getNode()
e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(t,e,n,r){var i=a.parseStyle(a.decode(n)),s={}
if("none"===o)return e+r
for(var c=0;c<o.length;c++){var l=i[o[c]],f=a.getStyle(u,o[c],!0);/color/.test(o[c])&&(l=a.toHex(l),f=a.toHex(f)),f!==l&&(s[o[c]]=l)}return(s=a.serializeStyle(s,"span"))?e+' style="'+s+'"'+r:e+r}))}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3")
return e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(t,e,n,r){return e+' style="'+n+'"'+r}))}function jt(t,e){t.$("a",e).find("font,u").each((function(e,n){t.dom.remove(n,!0)}))}var Ht=function(t,e){return function(n){n.setActive("text"===e.pasteFormat.get())
var r=function(t){return n.setActive(t.state)}
return t.on("PastePlainTextToggle",r),function(){return t.off("PastePlainTextToggle",r)}}}
i.add("paste",(function(t){if(!1===function(t){return!!t.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0)}(t)){var e=o(!1),n=o(function(t){return t.getParam("paste_as_text",!1)}(t)?"text":"html"),r=Tt(t,n),i=function(t){b.webkit&&Mt(t,Bt),b.ie&&(Mt(t,Nt),function(t,e){t.on("PastePostProcess",(function(n){e(t,n.node)}))}(t,jt))}(t)
return function(t,e){t.ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:function(){return t.execCommand("mceTogglePlainTextPaste")},onSetup:Ht(t,e)}),t.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:function(){return t.execCommand("mceTogglePlainTextPaste")},onSetup:Ht(t,e)})}(t,r),Ct(t,r),function(t){var e=t.plugins.paste,n=function(t){return t.getParam("paste_preprocess")}(t)
n&&t.on("PastePreProcess",(function(t){n.call(e,e,t)}))
var r=function(t){return t.getParam("paste_postprocess")}(t)
r&&t.on("PastePostProcess",(function(t){r.call(e,e,t)}))}(t),At(t),function(t,e,n){(function(t){return t.getParam("paste_block_drop",!1)})(t)&&t.on("dragend dragover draggesture dragdrop drop drag",(function(t){t.preventDefault(),t.stopPropagation()})),T(t)||t.on("drop",(function(t){var e=t.dataTransfer
e&&e.files&&e.files.length>0&&t.preventDefault()})),t.on("drop",(function(r){var o=Ft(t,r)
if(!r.isDefaultPrevented()&&!n.get()){var i,a=e.getDataTransferItems(r.dataTransfer),u=e.hasContentType(a,F())
if((e.hasHtmlOrText(a)&&(!(i=a["text/plain"])||0!==i.indexOf("file://"))||!e.pasteImageData(r,o))&&o&&function(t){return t.getParam("paste_filter_drop",!0)}(t)){var s=a["mce-internal"]||a["text/html"]||a["text/plain"]
s&&(r.preventDefault(),x.setEditorTimeout(t,(function(){t.undoManager.transact((function(){a["mce-internal"]&&t.execCommand("Delete"),Et(t,o),s=U(s),a["text/html"]?e.pasteHtml(s,u):e.pasteText(s)}))})))}}})),t.on("dragstart",(function(t){n.set(!0)})),t.on("dragover dragend",(function(e){T(t)&&!1===n.get()&&(e.preventDefault(),Et(t,Ft(t,e))),"dragend"===e.type&&n.set(!1)}))}(t,r,e),function(t,e){return{clipboard:t,quirks:e}}(r,i)}}))})()

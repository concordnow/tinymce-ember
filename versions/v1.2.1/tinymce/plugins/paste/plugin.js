(function(){"use strict"
var t,e,n,r,o=function(t){var e=t
return{get:function(){return e},set:function(t){e=t}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=function(){},u=function(t){return function(){return t}},s=u(!1),c=u(!0),l=function(){return f},f=(t=function(t){return t.isNone()},{fold:function(t,e){return t()},is:s,isSome:s,isNone:c,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(void 0),or:n,orThunk:e,map:l,each:a,bind:l,exists:s,forall:c,filter:l,equals:t,equals_:t,toArray:function(){return[]},toString:u("none()")}),d=function(t){var e=u(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:c,isNone:s,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return d(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:f},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(s,(function(e){return n(t,e)}))}}
return o},m={some:d,none:l,from:function(t){return null==t?f:d(t)}},p=function(t){return!function(t){return null==t}(t)},g=(r="function",function(t){return typeof t===r}),v=Array.prototype.slice,h=function(t,e){for(var n=0,r=t.length;n<r;n++){if(e(t[n],n))return!0}return!1},y=function(t,e){for(var n=t.length,r=new Array(n),o=0;o<n;o++){var i=t[o]
r[o]=e(i,o)}return r},b=function(t,e){for(var n=0,r=t.length;n<r;n++){e(t[n],n)}},x=g(Array.from)?Array.from:function(t){return v.call(t)},P=function(){var t=o(m.none())
return{clear:function(){return t.set(m.none())},set:function(e){return t.set(m.some(e))},isSet:function(){return t.get().isSome()},on:function(e){return t.get().each(e)}}},w=function(t,e,n){return""===e||t.length>=e.length&&t.substr(n,n+e.length)===e},_=tinymce.util.Tools.resolve("tinymce.Env"),T=tinymce.util.Tools.resolve("tinymce.util.Delay"),C=tinymce.util.Tools.resolve("tinymce.util.Promise"),D=tinymce.util.Tools.resolve("tinymce.util.VK"),k=function(t,e){return t.fire("PastePlainTextToggle",{state:e})},S=tinymce.util.Tools.resolve("tinymce.util.Tools"),O=function(t){return t.getParam("paste_data_images",!1)},j=function(t){return t.getParam("paste_merge_formats",!0)},R=function(t){return t.getParam("paste_retain_style_properties")},A=function(t){return t.getParam("validate")},I=function(t){return t.getParam("allow_html_data_urls",!1,"boolean")},F=function(t){return t.getParam("paste_data_images",!1,"boolean")},E=function(t){return S.explode(t.getParam("images_file_types","jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp","string"))},M="x-tinymce/html",N="\x3c!-- x-tinymce/html --\x3e",B=function(t){return-1!==t.indexOf(N)},H=function(){return M},L=tinymce.util.Tools.resolve("tinymce.html.Entities"),$=function(t,e,n){var r=t.split(/\n\n/),o=function(t,e){var n,r=[],o="<"+t
if("object"==typeof e){for(n in e)e.hasOwnProperty(n)&&r.push(n+'="'+L.encodeAllRaw(e[n])+'"')
r.length&&(o+=" "+r.join(" "))}return o+">"}(e,n),i="</"+e+">",a=S.map(r,(function(t){return t.split(/\n/).join("<br />")}))
return 1===a.length?a[0]:S.map(a,(function(t){return o+t+i})).join("")},z=tinymce.util.Tools.resolve("tinymce.html.DomParser"),U=tinymce.util.Tools.resolve("tinymce.html.Serializer"),q=" ",V=tinymce.util.Tools.resolve("tinymce.html.Node"),K=tinymce.util.Tools.resolve("tinymce.html.Schema")
function X(t,e){return S.each(e,(function(e){t=e.constructor===RegExp?t.replace(e,""):t.replace(e[0],e[1])})),t}function W(t){return t=X(t,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(t,e,n){return e||n?q:" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function Y(t){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(t)||/class="OutlineElement/.test(t)||/id="?docs\-internal\-guid\-/.test(t)}function Z(t){var e
return t=t.replace(/^[\u00a0 ]+/,""),S.each([/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(t))return e=!0,!1})),e}function G(t){var e,n,r=1
function o(t){var e=""
if(3===t.type)return t.value
if(t=t.firstChild)do{e+=o(t)}while(t=t.next)
return e}function i(t,e){if(3===t.type&&e.test(t.value))return t.value=t.value.replace(e,""),!1
if(t=t.firstChild)do{if(!i(t,e))return!1}while(t=t.next)
return!0}function a(t){if(t._listIgnore)t.remove()
else if(t=t.firstChild)do{a(t)}while(t=t.next)}function u(t,o,u){var s=t._listLevel||r
s!==r&&(s<r?e&&(e=e.parent.parent):(n=e,e=null)),e&&e.name===o?e.append(t):(n=n||e,e=new V(o,1),u>1&&e.attr("start",""+u),t.wrap(e)),t.name="li",s>r&&n&&n.lastChild.append(e),r=s,a(t),i(t,/^\u00a0+/),i(t,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),i(t,/^\u00a0+/)}for(var s=[],c=t.firstChild;null!=c;)if(s.push(c),null!==(c=c.walk()))for(;void 0!==c&&c.parent!==t;)c=c.walk()
for(var l=0;l<s.length;l++)if("p"===(t=s[l]).name&&t.firstChild){var f=o(t)
if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(f)){u(t,"ul")
continue}if(Z(f)){var d=/([0-9]+)\./.exec(f),m=1
d&&(m=parseInt(d[1],10)),u(t,"ol",m)
continue}if(t._listLevel){u(t,"ul",1)
continue}e=null}else n=e,e=null}function J(t,e,n,r){var o,i={},a=t.dom.parseStyle(r)
return S.each(a,(function(a,u){switch(u){case"mso-list":(o=/\w+ \w+([0-9]+)/i.exec(r))&&(n._listLevel=parseInt(o[1],10)),/Ignore/i.test(a)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0)
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
case"mso-element":if(/^(comment|comment-list)$/i.test(a))return void n.remove()}0!==u.indexOf("mso-comment")?0!==u.indexOf("mso-")&&("all"===R(t)||e&&e[u])&&(i[u]=a):n.remove()})),/(bold)/i.test(i["font-weight"])&&(delete i["font-weight"],n.wrap(new V("b",1))),/(italic)/i.test(i["font-style"])&&(delete i["font-style"],n.wrap(new V("i",1))),(i=t.dom.serializeStyle(i,n.name))||null}var Q,tt,et=function(t,e){return function(t){return t.getParam("paste_enable_default_filters",!0)}(t)?function(t,e){var n,r=R(t)
r&&(n=S.makeMap(r.split(/[, ]/))),e=X(e,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,q],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(t,e){return e.length>0?e.replace(/./," ").slice(Math.floor(e.length/2)).split("").join(q):""}]])
var o=function(t){return t.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")}(t),i=K({valid_elements:o,valid_children:"-li[p]"})
S.each(i.elements,(function(t){t.attributes.class||(t.attributes.class={},t.attributesOrder.push("class")),t.attributes.style||(t.attributes.style={},t.attributesOrder.push("style"))}))
var a=z({},i)
a.addAttributeFilter("style",(function(e){for(var r,o=e.length;o--;)(r=e[o]).attr("style",J(t,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),a.addAttributeFilter("class",(function(t){for(var e,n,r=t.length;r--;)n=(e=t[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&e.remove(),e.attr("class",null)})),a.addNodeFilter("del",(function(t){for(var e=t.length;e--;)t[e].remove()})),a.addNodeFilter("a",(function(t){for(var e,n,r,o=t.length;o--;)if(n=(e=t[o]).attr("href"),r=e.attr("name"),n&&-1!==n.indexOf("#_msocom_"))e.remove()
else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){e.unwrap()
continue}e.attr({href:n,name:r})}else e.unwrap()}))
var u=a.parse(e)
return function(t){return t.getParam("paste_convert_word_fake_lists",!0)}(t)&&G(u),U({validate:A(t)},i).serialize(u)}(t,e):e},nt=function(t,e){return{content:t,cancelled:e}},rt=function(t,e,n,r){var o=function(t,e,n,r){return t.fire("PastePreProcess",{content:e,internal:n,wordContent:r})}(t,e,n,r),i=function(t,e){var n=z({},t.schema)
n.addNodeFilter("meta",(function(t){S.each(t,(function(t){t.remove()}))}))
var r=n.parse(e,{forced_root_block:!1,isRootContent:!0})
return U({validate:A(t)},t.schema).serialize(r)}(t,o.content)
return t.hasEventListeners("PastePostProcess")&&!o.isDefaultPrevented()?function(t,e,n,r){var o=t.dom.create("div",{style:"display:none"},e),i=function(t,e,n,r){return t.fire("PastePostProcess",{node:e,internal:n,wordContent:r})}(t,o,n,r)
return nt(i.node.innerHTML,i.isDefaultPrevented())}(t,i,n,r):nt(i,o.isDefaultPrevented())},ot=function(t,e){return t.insertContent(e,{merge:j(t),paste:!0}),!0},it=function(t){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(t)},at=function(t,e){return it(e)&&h(E(t),(function(t){return w(n=e,r="."+t,n.length-r.length)
var n,r}))},ut=function(t,e,n){return!(!1!==t.selection.isCollapsed()||!it(e))&&function(t,e,n){return t.undoManager.extra((function(){n(t,e)}),(function(){t.execCommand("mceInsertLink",!1,e)})),!0}(t,e,n)},st=function(t,e,n){return!!at(t,e)&&function(t,e,n){return t.undoManager.extra((function(){n(t,e)}),(function(){t.insertContent('<img src="'+e+'">')})),!0}(t,e,n)},ct=function(t,e,n){n||!1===function(t){return t.getParam("smart_paste",!0)}(t)?ot(t,e):function(t,e){S.each([ut,st,ot],(function(n){return!0!==n(t,e,ot)}))}(t,e)},lt=function(t){return"\n"===t||"\r"===t},ft=function(t,e){var n,r,o,i,a=(n=" ",(r=function(t){return t.getParam("paste_tab_spaces",4,"number")}(t))<=0?"":new Array(r+1).join(n)),u=e.replace(/\t/g,a)
return(o=function(t,e){return function(t){return-1!==" \f\t\v".indexOf(t)}(e)||e===q?t.pcIsSpace||""===t.str||t.str.length===u.length-1||function(t,e){return e<t.length&&e>=0&&lt(t[e])}(u,t.str.length+1)?{pcIsSpace:!1,str:t.str+q}:{pcIsSpace:!0,str:t.str+" "}:{pcIsSpace:lt(e),str:t.str+e}},i={pcIsSpace:!1,str:""},b(u,(function(t){i=o(i,t)})),i).str},dt=function(t,e,n,r){var o=function(t,e,n){var r=Y(e),o=r?et(t,e):e
return rt(t,o,n,r)}(t,e,n)
!1===o.cancelled&&ct(t,o.content,r)},mt=function(t,e,n){var r=n||B(e)
dt(t,function(t){return t.replace(N,"")}(e),r,!1)},pt=function(t,e){var n=t.dom.encode(e).replace(/\r\n/g,"\n"),r=function(t,e,n){return e?$(t,!0===e?"p":e,n):function(t){return t.replace(/\r?\n/g,"<br>")}(t)}(ft(t,n),function(t){return t.getParam("forced_root_block")}(t),function(t){return t.getParam("forced_root_block_attrs")}(t))
dt(t,r,!1,!0)},gt=function(t){var e={}
if(t){if(t.getData){var n=t.getData("Text")
n&&n.length>0&&-1===n.indexOf("data:text/mce-internal,")&&(e["text/plain"]=n)}if(t.types)for(var r=0;r<t.types.length;r++){var o=t.types[r]
try{e[o]=t.getData(o)}catch(i){e[o]=""}}}return e},vt=function(t,e){return e in t&&t[e].length>0},ht=function(t){return vt(t,"text/html")||vt(t,"text/plain")},yt=(Q="mceclip",tt=0,function(){return Q+tt++}),bt=function(t,e){var n,r,o=(n=e.uri,(r=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(n))?{type:r[1],data:decodeURIComponent(r[2])}:{type:null,data:null}),i=o.data,a=o.type,u=yt(),s=e.blob,c=new Image
if(c.src=e.uri,function(t,e){var n=function(t){return t.getParam("images_dataimg_filter")}(t)
return!n||n(e)}(t,c)){var l=t.editorUpload.blobCache,f=void 0,d=l.getByData(i,a)
if(d)f=d
else{var m=function(t){return t.getParam("images_reuse_filename")}(t)&&p(s.name),g=m?function(t,e){var n=e.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i)
return p(n)?t.dom.encode(n[1]):null}(t,s.name):u,v=m?s.name:void 0
f=l.create(u,s,i,g,v),l.add(f)}mt(t,'<img src="'+f.blobUri()+'">',!1)}else mt(t,'<img src="'+e.uri+'">',!1)},xt=function(t){return C.all(y(t,(function(t){return new C((function(e){var n=function(t){return p(t.getAsFile)}(t)?t.getAsFile():t,r=new window.FileReader
r.onload=function(){e({blob:n,uri:r.result})},r.readAsDataURL(n)}))})))},Pt=function(t){var e=E(t)
return function(t){return function(t,e){return w(t,e,0)}(t.type,"image/")&&h(e,(function(e){return n=e,r={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"},(S.hasOwn(r,n)?"image/"+r[n]:"image/"+n)===t.type
var n,r}))}},wt=function(t,e,n){var r="paste"===e.type?e.clipboardData:e.dataTransfer
if(F(t)&&r){var o=function(t,e){var n=e.items?y(x(e.items),(function(t){return t.getAsFile()})):[],r=e.files?x(e.files):[]
return function(t,e){for(var n=[],r=0,o=t.length;r<o;r++){var i=t[r]
e(i,r)&&n.push(i)}return n}(n.length>0?n:r,Pt(t))}(t,r)
if(o.length>0)return e.preventDefault(),xt(o).then((function(e){n&&t.selection.setRng(n),b(e,(function(e){bt(t,e)}))})),!0}return!1},_t=function(t){return D.metaKeyPressed(t)&&86===t.keyCode||t.shiftKey&&45===t.keyCode},Tt=function(t,e,n){var r,o=P(),i=P()
function a(t,n,r,o,i){var a
vt(n,"text/html")?a=n["text/html"]:(a=e.getHtml(),i=i||B(a),e.isDefaultContent(a)&&(o=!0)),a=W(a),e.remove()
var u=!1===i&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(a),s=at(t,a);(!a.length||u&&!s)&&(o=!0),(o||s)&&(a=vt(n,"text/plain")&&u?n["text/plain"]:function(t){var e=K(),n=z({},e),r="",o=e.getShortEndedElements(),i=S.makeMap("script noscript style textarea video audio iframe object"," "),a=e.getBlockElements()
return t=X(t,[/<!\[[^\]]+\]>/g]),function t(e){var n=e.name,u=e
if("br"!==n){if("wbr"!==n)if(o[n]&&(r+=" "),i[n])r+=" "
else{if(3===e.type&&(r+=e.value),!e.shortEnded&&(e=e.firstChild))do{t(e)}while(e=e.next)
a[n]&&u.next&&(r+="\n","p"===n&&(r+="\n"))}}else r+="\n"}(n.parse(t)),r}(a)),e.isDefaultContent(a)?r||t.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):o?pt(t,a):mt(t,a,i)}t.on("keyup",i.clear),t.on("keydown",(function(n){var a=function(t){_t(t)&&!t.isDefaultPrevented()&&e.remove()}
if(_t(n)&&!n.isDefaultPrevented()){if((r=n.shiftKey&&86===n.keyCode)&&_.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return
if(n.stopImmediatePropagation(),o.set(n),i.set(!0),_.ie&&r)return n.preventDefault(),void function(t,e){t.fire("paste",{ieFake:e})}(t,!0)
e.remove(),e.create(),t.once("keyup",a),t.once("paste",(function(){t.off("keyup",a)}))}}))
t.on("paste",(function(u){var s=o.isSet()||i.isSet()
s&&o.clear()
var c=function(t,e){return gt(e.clipboardData||t.getDoc().dataTransfer)}(t,u),l="text"===n.get()||r,f=vt(c,H())
r=!1,u.isDefaultPrevented()||function(t){var e=t.clipboardData
return-1!==navigator.userAgent.indexOf("Android")&&e&&e.items&&0===e.items.length}(u)?e.remove():ht(c)||!wt(t,u,e.getLastRng()||t.selection.getRng())?(s||u.preventDefault(),!_.ie||s&&!u.ieFake||vt(c,"text/html")||(e.create(),t.dom.bind(e.getEl(),"paste",(function(t){t.stopPropagation()})),t.getDoc().execCommand("Paste",!1,null),c["text/html"]=e.getHtml()),vt(c,"text/html")?(u.preventDefault(),f||(f=B(c["text/html"])),a(t,c,s,l,f)):T.setEditorTimeout(t,(function(){a(t,c,s,l,f)}),0)):e.remove()}))},Ct=function(t){return _.ie&&t.inline?document.body:t.getBody()},Dt=function(t,e,n){(function(t){return Ct(t)!==t.getBody()})(t)&&t.dom.bind(e,"paste keyup",(function(e){Ot(t,n)||t.fire("paste")}))},kt=function(t){return t.dom.get("mcepastebin")},St=function(t,e){return e===t},Ot=function(t,e){var n,r=kt(t)
return(n=r)&&"mcepastebin"===n.id&&St(e,r.innerHTML)},jt=function(t){var e=o(null),n="%MCEPASTEBIN%"
return{create:function(){return function(t,e,n){var r=t.dom,o=t.getBody()
e.set(t.selection.getRng())
var i=t.dom.add(Ct(t),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(_.ie||_.gecko)&&r.setStyle(i,"left","rtl"===r.getStyle(o,"direction",!0)?65535:-65535),r.bind(i,"beforedeactivate focusin focusout",(function(t){t.stopPropagation()})),Dt(t,i,n),i.focus(),t.selection.select(i,!0)}(t,e,n)},remove:function(){return function(t,e){if(kt(t)){for(var n=void 0,r=e.get();n=t.dom.get("mcepastebin");)t.dom.remove(n),t.dom.unbind(n)
r&&t.selection.setRng(r)}e.set(null)}(t,e)},getEl:function(){return kt(t)},getHtml:function(){return function(t){var e=function(e,n){e.appendChild(n),t.dom.remove(n,!0)},n=S.grep(Ct(t).childNodes,(function(t){return"mcepastebin"===t.id})),r=n.shift()
S.each(n,(function(t){e(r,t)}))
for(var o=t.dom.select("div[id=mcepastebin]",r),i=o.length-1;i>=0;i--){var a=t.dom.create("div")
r.insertBefore(a,o[i]),e(a,o[i])}return r?r.innerHTML:""}(t)},getLastRng:function(){return function(t){return t.get()}(e)},isDefault:function(){return Ot(t,n)},isDefaultContent:function(t){return St(n,t)}}},Rt=function(t,e){var n=jt(t)
return t.on("PreInit",(function(){return function(t,e,n){var r
Tt(t,e,n),t.parser.addNodeFilter("img",(function(e,n,o){var i=function(t){t.attr("data-mce-object")||r===_.transparentSrc||t.remove()},a=function(t){return 0===t.indexOf("webkit-fake-url")},u=function(t){return 0===t.indexOf("data:")}
if(!F(t)&&function(t){return t.data&&!0===t.data.paste}(o))for(var s=e.length;s--;)(r=e[s].attr("src"))&&(a(r)||!I(t)&&u(r))&&i(e[s])}))}(t,n,e)})),{pasteFormat:e,pasteHtml:function(e,n){return mt(t,e,n)},pasteText:function(e){return pt(t,e)},pasteImageData:function(e,n){return wt(t,e,n)},getDataTransferItems:gt,hasHtmlOrText:ht,hasContentType:vt}},At=function(t,e){t.addCommand("mceTogglePlainTextPaste",(function(){(function(t,e){"text"===e.pasteFormat.get()?(e.pasteFormat.set("html"),k(t,!1)):(e.pasteFormat.set("text"),k(t,!0)),t.focus()})(t,e)})),t.addCommand("mceInsertClipboardContent",(function(t,n){n.content&&e.pasteHtml(n.content,n.internal),n.text&&e.pasteText(n.text)}))},It=function(t,e,n){if(!function(t){return!1===_.iOS&&"function"==typeof(null==t?void 0:t.setData)}(t))return!1
try{return t.clearData(),t.setData("text/html",e),t.setData("text/plain",n),t.setData(H(),e),!0}catch(r){return!1}},Ft=function(t,e,n,r){It(t.clipboardData,e.html,e.text)?(t.preventDefault(),r()):n(e.html,r)},Et=function(t){return function(e,n){var r=function(t){return N+t}(e),o=t.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),i=t.dom.create("div",{contenteditable:"true"},r)
t.dom.setStyles(o,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),o.appendChild(i),t.dom.add(t.getBody(),o)
var a=t.selection.getRng()
i.focus()
var u=t.dom.createRng()
u.selectNodeContents(i),t.selection.setRng(u),T.setTimeout((function(){t.selection.setRng(a),o.parentNode.removeChild(o),n()}),0)}},Mt=function(t){return{html:t.selection.getContent({contextual:!0}),text:t.selection.getContent({format:"text"})}},Nt=function(t){return!t.selection.isCollapsed()||function(t){return!!t.dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())}(t)},Bt=function(t){t.on("cut",function(t){return function(e){Nt(t)&&Ft(e,Mt(t),Et(t),(function(){if(_.browser.isChrome()||_.browser.isFirefox()){var e=t.selection.getRng()
T.setEditorTimeout(t,(function(){t.selection.setRng(e),t.execCommand("Delete")}),0)}else t.execCommand("Delete")}))}}(t)),t.on("copy",function(t){return function(e){Nt(t)&&Ft(e,Mt(t),Et(t),(function(){}))}}(t))},Ht=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),Lt=function(t,e){return Ht.getCaretRangeFromPoint(e.clientX,e.clientY,t.getDoc())},$t=function(t,e){t.focus(),t.selection.setRng(e)}
function zt(t,e){t.on("PastePreProcess",(function(n){n.content=e(t,n.content,n.internal,n.wordContent)}))}function Ut(t,e){if(!Y(e))return e
var n=[]
return S.each(t.schema.getBlockElements(),(function(t,e){n.push(e)})),e=X(e,[[new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g"),"$1"]]),e=X(e,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function qt(t,e,n,r){if(r||n)return e
var o,i=function(t){return t.getParam("paste_webkit_styles")}(t)
if(!1===function(t){return t.getParam("paste_remove_styles_if_webkit",!0)}(t)||"all"===i)return e
if(i&&(o=i.split(/[, ]/)),o){var a=t.dom,u=t.selection.getNode()
e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(t,e,n,r){var i=a.parseStyle(a.decode(n)),s={}
if("none"===o)return e+r
for(var c=0;c<o.length;c++){var l=i[o[c]],f=a.getStyle(u,o[c],!0);/color/.test(o[c])&&(l=a.toHex(l),f=a.toHex(f)),f!==l&&(s[o[c]]=l)}return(s=a.serializeStyle(s,"span"))?e+' style="'+s+'"'+r:e+r}))}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3")
return e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(t,e,n,r){return e+' style="'+n+'"'+r}))}function Vt(t,e){t.$("a",e).find("font,u").each((function(e,n){t.dom.remove(n,!0)}))}var Kt=function(t,e){return function(n){n.setActive("text"===e.pasteFormat.get())
var r=function(t){return n.setActive(t.state)}
return t.on("PastePlainTextToggle",r),function(){return t.off("PastePlainTextToggle",r)}}}
i.add("paste",(function(t){if(!1===function(t){return!!t.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0)}(t)){var e=o(!1),n=o(function(t){return t.getParam("paste_as_text",!1)}(t)?"text":"html"),r=Rt(t,n),i=function(t){_.webkit&&zt(t,qt),_.ie&&(zt(t,Ut),function(t,e){t.on("PastePostProcess",(function(n){e(t,n.node)}))}(t,Vt))}(t)
return function(t,e){t.ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:function(){return t.execCommand("mceTogglePlainTextPaste")},onSetup:Kt(t,e)}),t.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:function(){return t.execCommand("mceTogglePlainTextPaste")},onSetup:Kt(t,e)})}(t,r),At(t,r),function(t){var e=t.plugins.paste,n=function(t){return t.getParam("paste_preprocess")}(t)
n&&t.on("PastePreProcess",(function(t){n.call(e,e,t)}))
var r=function(t){return t.getParam("paste_postprocess")}(t)
r&&t.on("PastePostProcess",(function(t){r.call(e,e,t)}))}(t),Bt(t),function(t,e,n){(function(t){return t.getParam("paste_block_drop",!1)})(t)&&t.on("dragend dragover draggesture dragdrop drop drag",(function(t){t.preventDefault(),t.stopPropagation()})),O(t)||t.on("drop",(function(t){var e=t.dataTransfer
e&&e.files&&e.files.length>0&&t.preventDefault()})),t.on("drop",(function(r){var o=Lt(t,r)
if(!r.isDefaultPrevented()&&!n.get()){var i,a=e.getDataTransferItems(r.dataTransfer),u=e.hasContentType(a,H())
if((e.hasHtmlOrText(a)&&(!(i=a["text/plain"])||0!==i.indexOf("file://"))||!e.pasteImageData(r,o))&&o&&function(t){return t.getParam("paste_filter_drop",!0)}(t)){var s=a["mce-internal"]||a["text/html"]||a["text/plain"]
s&&(r.preventDefault(),T.setEditorTimeout(t,(function(){t.undoManager.transact((function(){a["mce-internal"]&&t.execCommand("Delete"),$t(t,o),s=W(s),a["text/html"]?e.pasteHtml(s,u):e.pasteText(s)}))})))}}})),t.on("dragstart",(function(t){n.set(!0)})),t.on("dragover dragend",(function(e){O(t)&&!1===n.get()&&(e.preventDefault(),$t(t,Lt(t,e))),"dragend"===e.type&&n.set(!1)}))}(t,r,e),function(t,e){return{clipboard:t,quirks:e}}(r,i)}}))})()

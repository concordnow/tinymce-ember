(function(){"use strict"
var t,e,n,r,o,i=function(t){var e=t
return{get:function(){return e},set:function(t){e=t}}},a=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=(t="array",function(e){return r=typeof(n=e),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===t
var n,r}),s=function(t){return!function(t){return null==t}(t)},c=function(t){return function(e){return typeof e===t}}("function"),l=function(){},f=function(t){return function(){return t}},d=function(t){return t},p=f(!1),m=f(!0),g=function(){return v},v={fold:function(t,e){return t()},isSome:p,isNone:m,getOr:n=d,getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:f(null),getOrUndefined:f(void 0),or:n,orThunk:e,map:g,each:l,bind:g,exists:p,forall:m,filter:function(){return g()},toArray:function(){return[]},toString:f("none()")},h=function(t){var e=f(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},isSome:m,isNone:p,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return h(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:v},toArray:function(){return[t]},toString:function(){return"some("+t+")"}}
return o},y={some:h,none:g,from:function(t){return null==t?v:h(t)}},b=Array.prototype.slice,x=Array.prototype.push,w=function(t,e){for(var n=0,r=t.length;n<r;n++){if(e(t[n],n))return!0}return!1},P=function(t,e){for(var n=t.length,r=new Array(n),o=0;o<n;o++){var i=t[o]
r[o]=e(i,o)}return r},_=function(t,e){for(var n=0,r=t.length;n<r;n++){e(t[n],n)}},C=function(t,e){return function(t){for(var e=[],n=0,r=t.length;n<r;++n){if(!u(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t)
x.apply(e,t[n])}return e}(P(t,e))},T=c(Array.from)?Array.from:function(t){return b.call(t)},D=function(){return(D=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])
return t}).apply(this,arguments)},k=function(){var t=function(t){var e=i(y.none()),n=function(){return e.get().each(t)}
return{clear:function(){n(),e.set(y.none())},isSet:function(){return e.get().isSome()},get:function(){return e.get()},set:function(t){n(),e.set(y.some(t))}}}(l)
return D(D({},t),{on:function(e){return t.get().each(e)}})},O=function(t,e,n){return""===e||t.length>=e.length&&t.substr(n,n+e.length)===e},S=tinymce.util.Tools.resolve("tinymce.Env"),j=tinymce.util.Tools.resolve("tinymce.util.Delay"),A=tinymce.util.Tools.resolve("tinymce.util.Promise"),R=tinymce.util.Tools.resolve("tinymce.util.VK"),I=function(t,e){return t.fire("PastePlainTextToggle",{state:e})},F=tinymce.util.Tools.resolve("tinymce.util.Tools"),E=function(t){return t.getParam("paste_data_images",!1)},M=function(t){return t.getParam("paste_merge_formats",!0)},B=function(t){return t.getParam("paste_retain_style_properties")},L=function(t){return t.getParam("validate")},N=function(t){return t.getParam("allow_html_data_urls",!1,"boolean")},H=function(t){return t.getParam("paste_data_images",!1,"boolean")},$=function(t){return F.explode(t.getParam("images_file_types","jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp","string"))},z="x-tinymce/html",U="\x3c!-- x-tinymce/html --\x3e",V=function(t){return-1!==t.indexOf(U)},K=f(z),X=Object.hasOwnProperty,W=function(t,e){return X.call(t,e)},Y=tinymce.util.Tools.resolve("tinymce.html.Entities"),Z=function(t,e,n){var r=t.split(/\n\n/),o=function(t,e){var n=[],r="<"+t
if("object"==typeof e){for(var o in e)W(e,o)&&n.push(o+'="'+Y.encodeAllRaw(e[o])+'"')
n.length&&(r+=" "+n.join(" "))}return r+">"}(e,n),i="</"+e+">",a=F.map(r,(function(t){return t.split(/\n/).join("<br />")}))
return 1===a.length?a[0]:F.map(a,(function(t){return o+t+i})).join("")},q=tinymce.util.Tools.resolve("tinymce.html.DomParser"),G=tinymce.util.Tools.resolve("tinymce.html.Serializer"),J=" ",Q=tinymce.util.Tools.resolve("tinymce.html.Node"),tt=tinymce.util.Tools.resolve("tinymce.html.Schema"),et=function(t,e){return F.each(e,(function(e){t=e.constructor===RegExp?t.replace(e,""):t.replace(e[0],e[1])})),t},nt=function(t){return t=et(t,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(t,e,n){return e||n?J:" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])},rt=function(t){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(t)||/class="OutlineElement/.test(t)||/id="?docs\-internal\-guid\-/.test(t)},ot=function(t){var e=!1
return t=t.replace(/^[\u00a0 ]+/,""),F.each([/^[IVXLMCD]+\.[ \u00a0]/,/^[ivxlmcd]+\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(t))return e=!0,!1})),e},it=function(t,e,n,r){var o={},i=t.dom.parseStyle(r)
F.each(i,(function(i,a){switch(a){case"mso-list":var u=/\w+ \w+([0-9]+)/i.exec(r)
u&&(n._listLevel=parseInt(u[1],10)),/Ignore/i.test(i)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0)
break
case"horiz-align":a="text-align"
break
case"vert-align":a="vertical-align"
break
case"font-color":case"mso-foreground":a="color"
break
case"mso-background":case"mso-highlight":a="background"
break
case"font-weight":case"font-style":return void("normal"!==i&&(o[a]=i))
case"mso-element":if(/^(comment|comment-list)$/i.test(i))return void n.remove()}0!==a.indexOf("mso-comment")?0!==a.indexOf("mso-")&&("all"===B(t)||e&&e[a])&&(o[a]=i):n.remove()})),/(bold)/i.test(o["font-weight"])&&(delete o["font-weight"],n.wrap(new Q("b",1))),/(italic)/i.test(o["font-style"])&&(delete o["font-style"],n.wrap(new Q("i",1)))
var a=t.dom.serializeStyle(o,n.name)
return a||null},at=function(t,e){var n,r=B(t)
r&&(n=F.makeMap(r.split(/[, ]/))),e=et(e,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,J],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(t,e){return e.length>0?e.replace(/./," ").slice(Math.floor(e.length/2)).split("").join(J):""}]])
var o=function(t){return t.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")}(t),i=tt({valid_elements:o,valid_children:"-li[p]"})
F.each(i.elements,(function(t){t.attributes.class||(t.attributes.class={},t.attributesOrder.push("class")),t.attributes.style||(t.attributes.style={},t.attributesOrder.push("style"))}))
var a=q({},i)
a.addAttributeFilter("style",(function(e){for(var r,o=e.length;o--;)(r=e[o]).attr("style",it(t,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),a.addAttributeFilter("class",(function(t){for(var e,n,r=t.length;r--;)n=(e=t[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&e.remove(),e.attr("class",null)})),a.addNodeFilter("del",(function(t){for(var e=t.length;e--;)t[e].remove()})),a.addNodeFilter("a",(function(t){for(var e,n,r,o=t.length;o--;)if(n=(e=t[o]).attr("href"),r=e.attr("name"),n&&-1!==n.indexOf("#_msocom_"))e.remove()
else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){e.unwrap()
continue}e.attr({href:n,name:r})}else e.unwrap()}))
var u=a.parse(e)
return function(t){return t.getParam("paste_convert_word_fake_lists",!0)}(t)&&function(t){for(var e,n,r=1,o=function(t){var e=""
if(3===t.type)return t.value
if(t=t.firstChild)do{e+=o(t)}while(t=t.next)
return e},i=function(t,e){if(3===t.type&&e.test(t.value))return t.value=t.value.replace(e,""),!1
if(t=t.firstChild)do{if(!i(t,e))return!1}while(t=t.next)
return!0},a=function(t){if(t._listIgnore)t.remove()
else if(t=t.firstChild)do{a(t)}while(t=t.next)},u=function(t,o,u){var s=t._listLevel||r
s!==r&&(s<r?e&&(e=e.parent.parent):(n=e,e=null)),e&&e.name===o?e.append(t):(n=n||e,e=new Q(o,1),u>1&&e.attr("start",""+u),t.wrap(e)),t.name="li",s>r&&n&&n.lastChild.append(e),r=s,a(t),i(t,/^\u00a0+/),i(t,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),i(t,/^\u00a0+/)},s=[],c=t.firstChild;null!=c;)if(s.push(c),null!==(c=c.walk()))for(;void 0!==c&&c.parent!==t;)c=c.walk()
for(var l=0;l<s.length;l++)if("p"===(t=s[l]).name&&t.firstChild){var f=o(t)
if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(f)){u(t,"ul")
continue}if(ot(f)){var d=/([0-9]+)\./.exec(f),p=1
d&&(p=parseInt(d[1],10)),u(t,"ol",p)
continue}if(t._listLevel){u(t,"ul",1)
continue}e=null}else n=e,e=null}(u),e=G({validate:L(t)},i).serialize(u)},ut=function(t,e){return{content:t,cancelled:e}},st=function(t,e,n,r){var o=function(t,e,n,r){return t.fire("PastePreProcess",{content:e,internal:n,wordContent:r})}(t,e,n,r),i=function(t,e){var n=q({},t.schema)
n.addNodeFilter("meta",(function(t){F.each(t,(function(t){t.remove()}))}))
var r=n.parse(e,{forced_root_block:!1,isRootContent:!0})
return G({validate:L(t)},t.schema).serialize(r)}(t,o.content)
return t.hasEventListeners("PastePostProcess")&&!o.isDefaultPrevented()?function(t,e,n,r){var o=t.dom.create("div",{style:"display:none"},e),i=function(t,e,n,r){return t.fire("PastePostProcess",{node:e,internal:n,wordContent:r})}(t,o,n,r)
return ut(i.node.innerHTML,i.isDefaultPrevented())}(t,i,n,r):ut(i,o.isDefaultPrevented())},ct=function(t,e,n){var r=rt(e),o=r?function(t,e){return function(t){return t.getParam("paste_enable_default_filters",!0)}(t)?at(t,e):e}(t,e):e
return st(t,o,n,r)},lt=function(t,e){return t.insertContent(e,{merge:M(t),paste:!0}),!0},ft=function(t){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(t)},dt=function(t,e){return ft(e)&&w($(t),(function(t){return n=e.toLowerCase(),r="."+t.toLowerCase(),O(n,r,n.length-r.length)
var n,r}))},pt=function(t,e,n){return!(!1!==t.selection.isCollapsed()||!ft(e))&&function(t,e,n){return t.undoManager.extra((function(){n(t,e)}),(function(){t.execCommand("mceInsertLink",!1,e)})),!0}(t,e,n)},mt=function(t,e,n){return!!dt(t,e)&&function(t,e,n){return t.undoManager.extra((function(){n(t,e)}),(function(){t.insertContent('<img src="'+e+'">')})),!0}(t,e,n)},gt=function(t,e,n){n||!1===function(t){return t.getParam("smart_paste",!0)}(t)?lt(t,e):function(t,e){F.each([pt,mt,lt],(function(n){return!0!==n(t,e,lt)}))}(t,e)},vt=function(t){return"\n"===t||"\r"===t},ht=function(t,e){var n,r,o,i,a=(n=" ",(r=function(t){return t.getParam("paste_tab_spaces",4,"number")}(t))<=0?"":new Array(r+1).join(n)),u=e.replace(/\t/g,a)
return(o=function(t,e){return function(t){return-1!==" \f\t\v".indexOf(t)}(e)||e===J?t.pcIsSpace||""===t.str||t.str.length===u.length-1||function(t,e){return e<t.length&&e>=0&&vt(t[e])}(u,t.str.length+1)?{pcIsSpace:!1,str:t.str+J}:{pcIsSpace:!0,str:t.str+" "}:{pcIsSpace:vt(e),str:t.str+e}},i={pcIsSpace:!1,str:""},_(u,(function(t,e){i=o(i,t,e)})),i).str},yt=function(t,e,n,r){var o=ct(t,e,n)
!1===o.cancelled&&gt(t,o.content,r)},bt=function(t,e,n){var r=n||V(e)
yt(t,function(t){return t.replace(U,"")}(e),r,!1)},xt=function(t,e){var n=t.dom.encode(e).replace(/\r\n/g,"\n"),r=function(t,e,n){return e?Z(t,!0===e?"p":e,n):function(t){return t.replace(/\r?\n/g,"<br>")}(t)}(ht(t,n),function(t){return t.getParam("forced_root_block")}(t),function(t){return t.getParam("forced_root_block_attrs")}(t))
yt(t,r,!1,!0)},wt=function(t){var e={}
if(t){if(t.getData){var n=t.getData("Text")
n&&n.length>0&&-1===n.indexOf("data:text/mce-internal,")&&(e["text/plain"]=n)}if(t.types)for(var r=0;r<t.types.length;r++){var o=t.types[r]
try{e[o]=t.getData(o)}catch(i){e[o]=""}}}return e},Pt=function(t,e){return e in t&&t[e].length>0},_t=function(t){return Pt(t,"text/html")||Pt(t,"text/plain")},Ct=(r="mceclip",o=0,function(){return r+o++}),Tt=function(t,e){var n,r,o=(n=e.uri,(r=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(n))?{type:r[1],data:decodeURIComponent(r[2])}:{type:null,data:null}),i=o.data,a=o.type,u=Ct(),c=e.blob,l=new Image
if(l.src=e.uri,function(t,e){var n=function(t){return t.getParam("images_dataimg_filter")}(t)
return!n||n(e)}(t,l)){var f=t.editorUpload.blobCache,d=void 0,p=f.getByData(i,a)
if(p)d=p
else{var m=function(t){return t.getParam("images_reuse_filename")}(t)&&s(c.name),g=m?function(t,e){var n=e.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i)
return s(n)?t.dom.encode(n[1]):null}(t,c.name):u,v=m?c.name:void 0
d=f.create(u,c,i,g,v),f.add(d)}bt(t,'<img src="'+d.blobUri()+'">',!1)}else bt(t,'<img src="'+e.uri+'">',!1)},Dt=function(t){return A.all(P(t,(function(t){return new A((function(e){var n=function(t){return s(t.getAsFile)}(t)?t.getAsFile():t,r=new window.FileReader
r.onload=function(){e({blob:n,uri:r.result})},r.readAsDataURL(n)}))})))},kt=function(t){var e=$(t)
return function(t){return function(t,e){return O(t,e,0)}(t.type,"image/")&&w(e,(function(e){return n=e.toLowerCase(),r={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"},(F.hasOwn(r,n)?"image/"+r[n]:"image/"+n)===t.type
var n,r}))}},Ot=function(t,e,n){var r="paste"===e.type?e.clipboardData:e.dataTransfer
if(H(t)&&r){var o=function(t,e){var n=e.items?C(T(e.items),(function(t){return"file"===t.kind?[t.getAsFile()]:[]})):[],r=e.files?T(e.files):[]
return function(t,e){for(var n=[],r=0,o=t.length;r<o;r++){var i=t[r]
e(i,r)&&n.push(i)}return n}(n.length>0?n:r,kt(t))}(t,r)
if(o.length>0)return e.preventDefault(),Dt(o).then((function(e){n&&t.selection.setRng(n),_(e,(function(e){Tt(t,e)}))})),!0}return!1},St=function(t){return R.metaKeyPressed(t)&&86===t.keyCode||t.shiftKey&&45===t.keyCode},jt=function(t,e,n){var r,o=k(),i=k()
t.on("keyup",i.clear),t.on("keydown",(function(n){var a=function(t){St(t)&&!t.isDefaultPrevented()&&e.remove()}
if(St(n)&&!n.isDefaultPrevented()){if((r=n.shiftKey&&86===n.keyCode)&&S.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return
if(n.stopImmediatePropagation(),o.set(n),i.set(!0),S.ie&&r)return n.preventDefault(),void function(t,e){t.fire("paste",{ieFake:e})}(t,!0)
e.remove(),e.create(),t.once("keyup",a),t.once("paste",(function(){t.off("keyup",a)}))}}))
var a=function(t,n,r,o,i){var a
Pt(n,"text/html")?a=n["text/html"]:(a=e.getHtml(),i=i||V(a),e.isDefaultContent(a)&&(o=!0)),a=nt(a),e.remove()
var u=!1===i&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(a),s=ft(a);(!a.length||u&&!s)&&(o=!0),(o||s)&&(a=Pt(n,"text/plain")&&u?n["text/plain"]:function(t){var e=tt(),n=q({},e),r="",o=e.getShortEndedElements(),i=F.makeMap("script noscript style textarea video audio iframe object"," "),a=e.getBlockElements(),u=function(t){var e=t.name,n=t
if("br"!==e){if("wbr"!==e)if(o[e]&&(r+=" "),i[e])r+=" "
else{if(3===t.type&&(r+=t.value),!t.shortEnded&&(t=t.firstChild))do{u(t)}while(t=t.next)
a[e]&&n.next&&(r+="\n","p"===e&&(r+="\n"))}}else r+="\n"}
return t=et(t,[/<!\[[^\]]+\]>/g]),u(n.parse(t)),r}(a)),e.isDefaultContent(a)?r||t.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):o?xt(t,a):bt(t,a,i)}
t.on("paste",(function(u){var s=o.isSet()||i.isSet()
s&&o.clear()
var c=function(t,e){return wt(e.clipboardData||t.getDoc().dataTransfer)}(t,u),l="text"===n.get()||r,f=Pt(c,K())
r=!1,u.isDefaultPrevented()||function(t){var e=t.clipboardData
return-1!==navigator.userAgent.indexOf("Android")&&e&&e.items&&0===e.items.length}(u)?e.remove():_t(c)||!Ot(t,u,e.getLastRng()||t.selection.getRng())?(s||u.preventDefault(),!S.ie||s&&!u.ieFake||Pt(c,"text/html")||(e.create(),t.dom.bind(e.getEl(),"paste",(function(t){t.stopPropagation()})),t.getDoc().execCommand("Paste",!1,null),c["text/html"]=e.getHtml()),Pt(c,"text/html")?(u.preventDefault(),f||(f=V(c["text/html"])),a(t,c,s,l,f)):j.setEditorTimeout(t,(function(){a(t,c,s,l,f)}),0)):e.remove()}))},At=function(t){return S.ie&&t.inline?document.body:t.getBody()},Rt=function(t,e,n){(function(t){return At(t)!==t.getBody()})(t)&&t.dom.bind(e,"paste keyup",(function(e){Et(t,n)||t.fire("paste")}))},It=function(t){return t.dom.get("mcepastebin")},Ft=function(t,e){return e===t},Et=function(t,e){var n,r=It(t)
return(n=r)&&"mcepastebin"===n.id&&Ft(e,r.innerHTML)},Mt=function(t){var e=i(null),n="%MCEPASTEBIN%"
return{create:function(){return function(t,e,n){var r=t.dom,o=t.getBody()
e.set(t.selection.getRng())
var i=t.dom.add(At(t),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(S.ie||S.gecko)&&r.setStyle(i,"left","rtl"===r.getStyle(o,"direction",!0)?65535:-65535),r.bind(i,"beforedeactivate focusin focusout",(function(t){t.stopPropagation()})),Rt(t,i,n),i.focus(),t.selection.select(i,!0)}(t,e,n)},remove:function(){return function(t,e){if(It(t)){for(var n=void 0,r=e.get();n=t.dom.get("mcepastebin");)t.dom.remove(n),t.dom.unbind(n)
r&&t.selection.setRng(r)}e.set(null)}(t,e)},getEl:function(){return It(t)},getHtml:function(){return function(t){var e=function(e,n){e.appendChild(n),t.dom.remove(n,!0)},n=F.grep(At(t).childNodes,(function(t){return"mcepastebin"===t.id})),r=n.shift()
F.each(n,(function(t){e(r,t)}))
for(var o=t.dom.select("div[id=mcepastebin]",r),i=o.length-1;i>=0;i--){var a=t.dom.create("div")
r.insertBefore(a,o[i]),e(a,o[i])}return r?r.innerHTML:""}(t)},getLastRng:e.get,isDefault:function(){return Et(t,n)},isDefaultContent:function(t){return Ft(n,t)}}},Bt=function(t,e){var n=Mt(t)
return t.on("PreInit",(function(){return function(t,e,n){var r
jt(t,e,n),t.parser.addNodeFilter("img",(function(e,n,o){var i=function(t){t.attr("data-mce-object")||r===S.transparentSrc||t.remove()},a=function(t){return 0===t.indexOf("webkit-fake-url")},u=function(t){return 0===t.indexOf("data:")}
if(!H(t)&&function(t){return t.data&&!0===t.data.paste}(o))for(var s=e.length;s--;)(r=e[s].attr("src"))&&(a(r)||!N(t)&&u(r))&&i(e[s])}))}(t,n,e)})),{pasteFormat:e,pasteHtml:function(e,n){return bt(t,e,n)},pasteText:function(e){return xt(t,e)},pasteImageData:function(e,n){return Ot(t,e,n)},getDataTransferItems:wt,hasHtmlOrText:_t,hasContentType:Pt}},Lt=function(t,e){t.addCommand("mceTogglePlainTextPaste",(function(){(function(t,e){"text"===e.pasteFormat.get()?(e.pasteFormat.set("html"),I(t,!1)):(e.pasteFormat.set("text"),I(t,!0)),t.focus()})(t,e)})),t.addCommand("mceInsertClipboardContent",(function(t,n){n.content&&e.pasteHtml(n.content,n.internal),n.text&&e.pasteText(n.text)}))},Nt=function(t,e,n){if(!function(t){return!1===S.iOS&&"function"==typeof(null==t?void 0:t.setData)}(t))return!1
try{return t.clearData(),t.setData("text/html",e),t.setData("text/plain",n),t.setData(K(),e),!0}catch(r){return!1}},Ht=function(t,e,n,r){Nt(t.clipboardData,e.html,e.text)?(t.preventDefault(),r()):n(e.html,r)},$t=function(t){return function(e,n){var r=function(t){return U+t}(e),o=t.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),i=t.dom.create("div",{contenteditable:"true"},r)
t.dom.setStyles(o,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),o.appendChild(i),t.dom.add(t.getBody(),o)
var a=t.selection.getRng()
i.focus()
var u=t.dom.createRng()
u.selectNodeContents(i),t.selection.setRng(u),j.setTimeout((function(){t.selection.setRng(a),o.parentNode.removeChild(o),n()}),0)}},zt=function(t){return{html:t.selection.getContent({contextual:!0}),text:t.selection.getContent({format:"text"})}},Ut=function(t){return!t.selection.isCollapsed()||function(t){return!!t.dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())}(t)},Vt=function(t){t.on("cut",function(t){return function(e){Ut(t)&&Ht(e,zt(t),$t(t),(function(){if(S.browser.isChrome()||S.browser.isFirefox()){var e=t.selection.getRng()
j.setEditorTimeout(t,(function(){t.selection.setRng(e),t.execCommand("Delete")}),0)}else t.execCommand("Delete")}))}}(t)),t.on("copy",function(t){return function(e){Ut(t)&&Ht(e,zt(t),$t(t),l)}}(t))},Kt=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),Xt=function(t,e){return Kt.getCaretRangeFromPoint(e.clientX,e.clientY,t.getDoc())},Wt=function(t,e){t.focus(),t.selection.setRng(e)},Yt=function(t,e){t.on("PastePreProcess",(function(n){n.content=e(t,n.content,n.internal,n.wordContent)}))},Zt=function(t,e){if(!rt(e))return e
var n=[]
F.each(t.schema.getBlockElements(),(function(t,e){n.push(e)}))
var r=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g")
return e=et(e,[[r,"$1"]]),e=et(e,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])},qt=function(t,e,n,r){if(r||n)return e
var o,i=function(t){return t.getParam("paste_webkit_styles")}(t)
if(!1===function(t){return t.getParam("paste_remove_styles_if_webkit",!0)}(t)||"all"===i)return e
if(i&&(o=i.split(/[, ]/)),o){var a=t.dom,u=t.selection.getNode()
e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(t,e,n,r){var i=a.parseStyle(a.decode(n)),s={}
if("none"===o)return e+r
for(var c=0;c<o.length;c++){var l=i[o[c]],f=a.getStyle(u,o[c],!0);/color/.test(o[c])&&(l=a.toHex(l),f=a.toHex(f)),f!==l&&(s[o[c]]=l)}var d=a.serializeStyle(s,"span")
return d?e+' style="'+d+'"'+r:e+r}))}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3")
return e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(t,e,n,r){return e+' style="'+n+'"'+r}))},Gt=function(t,e){t.$("a",e).find("font,u").each((function(e,n){t.dom.remove(n,!0)}))},Jt=function(t,e){return function(n){n.setActive("text"===e.pasteFormat.get())
var r=function(t){return n.setActive(t.state)}
return t.on("PastePlainTextToggle",r),function(){return t.off("PastePlainTextToggle",r)}}}
a.add("paste",(function(t){if(!1===function(t){return!!t.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0)}(t)){var e=i(!1),n=i(function(t){return t.getParam("paste_as_text",!1)}(t)?"text":"html"),r=Bt(t,n)
return function(t){S.webkit&&Yt(t,qt),S.ie&&(Yt(t,Zt),function(t,e){t.on("PastePostProcess",(function(n){e(t,n.node)}))}(t,Gt))}(t),function(t,e){var n=function(){return t.execCommand("mceTogglePlainTextPaste")}
t.ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:n,onSetup:Jt(t,e)}),t.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:n,onSetup:Jt(t,e)})}(t,r),Lt(t,r),function(t){var e=t.plugins.paste,n=function(t){return t.getParam("paste_preprocess")}(t)
n&&t.on("PastePreProcess",(function(t){n.call(e,e,t)}))
var r=function(t){return t.getParam("paste_postprocess")}(t)
r&&t.on("PastePostProcess",(function(t){r.call(e,e,t)}))}(t),Vt(t),function(t,e,n){(function(t){return t.getParam("paste_block_drop",!1)})(t)&&t.on("dragend dragover draggesture dragdrop drop drag",(function(t){t.preventDefault(),t.stopPropagation()})),E(t)||t.on("drop",(function(t){var e=t.dataTransfer
e&&e.files&&e.files.length>0&&t.preventDefault()})),t.on("drop",(function(r){var o=Xt(t,r)
if(!r.isDefaultPrevented()&&!n.get()){var i,a=e.getDataTransferItems(r.dataTransfer),u=e.hasContentType(a,K())
if((e.hasHtmlOrText(a)&&(!(i=a["text/plain"])||0!==i.indexOf("file://"))||!e.pasteImageData(r,o))&&o&&function(t){return t.getParam("paste_filter_drop",!0)}(t)){var s=a["mce-internal"]||a["text/html"]||a["text/plain"]
s&&(r.preventDefault(),j.setEditorTimeout(t,(function(){t.undoManager.transact((function(){a["mce-internal"]&&t.execCommand("Delete"),Wt(t,o),s=nt(s),a["text/html"]?e.pasteHtml(s,u):e.pasteText(s)}))})))}}})),t.on("dragstart",(function(t){n.set(!0)})),t.on("dragover dragend",(function(e){E(t)&&!1===n.get()&&(e.preventDefault(),Wt(t,Xt(t,e))),"dragend"===e.type&&n.set(!1)}))}(t,r,e),function(t){return{clipboard:t}}(r)}}))})()

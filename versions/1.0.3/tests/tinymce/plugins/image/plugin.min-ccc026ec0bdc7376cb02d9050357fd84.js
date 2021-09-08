!function(){"use strict"
var e,t,n,r,a,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e}).apply(this,arguments)},l=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"==r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},s=function(e){return function(t){return typeof t===e}},c=l("string"),u=l("object"),m=l("array"),d=function(t){return e===t},g=s("boolean"),p=s("number"),f=function(){},h=function(e){return function(){return e}},b=h(!1),v=h(!(e=null)),y=function(){return A},A=(t=function(e){return e.isNone()},{fold:function(e,t){return e()},is:b,isSome:b,isNone:v,getOr:r=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:h(null),getOrUndefined:h(void 0),or:r,orThunk:n,map:y,each:f,bind:y,exists:b,forall:v,filter:y,equals:t,equals_:t,toArray:function(){return[]},toString:h("none()")}),w=function(e){var t=h(e),n=function(){return a},r=function(t){return t(e)},a={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:v,isNone:b,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return w(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?a:A},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(b,(function(t){return n(e,t)}))}}
return a},D={some:w,none:y,from:function(e){return null==e?A:w(e)}},S=Array.prototype.push,x=function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!m(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
S.apply(t,e[n])}return t},U=("undefined"!=typeof window||Function("return this;")(),function(e,t,n){!function(e,t,n){if(!(c(n)||g(n)||p(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")}(e.dom,t,n)}),C=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},O=C,I=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),T=tinymce.util.Tools.resolve("tinymce.util.Promise"),N=tinymce.util.Tools.resolve("tinymce.util.XHR"),P=function(e){return e.getParam("image_dimensions",!0,"boolean")},_=function(e){return e.getParam("images_upload_url","","string")},L=function(e){return e.getParam("images_upload_handler",void 0,"function")},E=function(e,t){return Math.max(parseInt(e,10),parseInt(t,10))},R=function(e){return e&&e.replace(/px$/,"")},M=function(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e},z=function(e){if(e.margin){var t=String(e.margin).split(" ")
switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0]
break
case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1]
break
case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1]
break
case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e},k=function(e){return"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder"))},j=I.DOM,B=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?R(e.style.marginLeft):""},H=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?R(e.style.marginTop):""},F=function(e){return e.style.borderWidth?R(e.style.borderWidth):""},G=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):""},W=function(e,t){return e.style[t]?e.style[t]:""},q=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},$=function(e,t,n){""===n?e.removeAttribute(t):e.setAttribute(t,n)},J=function(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"")
0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},X=function(e,t){return function(e,n,r){e.style[n]?(e.style[n]=M(r),J(e,t)):$(e,n,r)}},V=function(e,t){return e.style[t]?R(e.style[t]):G(e,t)},K=function(e,t){var n=M(t)
e.style.marginLeft=n,e.style.marginRight=n},Z=function(e,t){var n=M(t)
e.style.marginTop=n,e.style.marginBottom=n},Q=function(e,t){var n=M(t)
e.style.borderWidth=n},Y=function(e,t){e.style.borderStyle=t},ee=function(e){return"FIGURE"===e.nodeName},te=function(e){return 0===j.getAttrib(e,"alt").length&&"presentation"===j.getAttrib(e,"role")},ne=function(e,t){return{src:G(t,"src"),alt:te(n=t)?"":G(n,"alt"),title:G(t,"title"),width:V(t,"width"),height:V(t,"height"),class:G(t,"class"),style:e(G(t,"style")),caption:q(t),hspace:B(t),vspace:H(t),border:F(t),borderStyle:W(t,"borderStyle"),isDecorative:te(t)}
var n},re=function(e,t,n,r,a){n[r]!==t[r]&&a(e,r,n[r])},ae=function(e,t,n){var r
n?(j.setAttrib(e,"role","presentation"),r=O(e),U(r,"alt","")):(d(t)?("alt",(r=O(e)).dom.removeAttribute("alt")):(r=O(e),U(r,"alt",t)),"presentation"===j.getAttrib(e,"role")&&j.setAttrib(e,"role",""))},ie=function(e,t){return function(n,r,a){e(n,a),J(n,t)}},oe=function(e,t,n){var r,a,i,o=ne(e,n)
re(n,o,t,"caption",(function(e,t,n){return function(e){var t,n,r,a
q(e)?(a=(r=e).parentNode,j.insertAfter(r,a),j.remove(a)):(t=e,n=j.create("figure",{class:"image"}),j.insertAfter(n,t),n.appendChild(t),n.appendChild(j.create("figcaption",{contentEditable:"true"},"Caption")),n.contentEditable="false")}(e),0})),re(n,o,t,"src",$),re(n,o,t,"title",$),re(n,o,t,"width",X(0,e)),re(n,o,t,"height",X(0,e)),re(n,o,t,"class",$),re(n,o,t,"style",ie((function(e,t){return $(e,"style",t),0}),e)),re(n,o,t,"hspace",ie(K,e)),re(n,o,t,"vspace",ie(Z,e)),re(n,o,t,"border",ie(Q,e)),re(n,o,t,"borderStyle",ie(Y,e)),r=n,a=o,(i=t).alt===a.alt&&i.isDecorative===a.isDecorative||ae(r,i.alt,i.isDecorative)},le=function(e,t){var n=e.dom.styles.parse(t),r=z(n),a=e.dom.styles.parse(e.dom.styles.serialize(r))
return e.dom.styles.serialize(a)},se=function(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image")
return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||k(t))?null:t},ce=function(e,t){var n=e.dom,r=n.getParent(t.parentNode,(function(t){return!!e.schema.getTextBlockElements()[t.nodeName]}),e.getBody())
return r?n.split(r,t):t},ue=Object.prototype.hasOwnProperty,me=(a=function(e,t){return u(e)&&u(t)?me(e,t):t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var n={},r=0;r<e.length;r++){var i=e[r]
for(var o in i)ue.call(i,o)&&(n[o]=a(n[o],i[o]))}return n}),de=tinymce.util.Tools.resolve("tinymce.util.Tools"),ge=function(e){return c(e.value)?e.value:""},pe=function(e,t){var n=[]
return de.each(e,(function(e){var r,a,i=c(e.text)?e.text:c(e.title)?e.title:""
void 0!==e.menu?(r=pe(e.menu,t),n.push({text:i,items:r})):(a=t(e),n.push({text:i,value:a}))})),n},fe=function(e){return void 0===e&&(e=ge),function(t){return t?D.from(t).map((function(t){return pe(t,e)})):D.none()}},he=function(e,t){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n])
if(r.isSome())return r}return D.none()}(e,(function(e){return n=e,Object.prototype.hasOwnProperty.call(n,"items")?he(e.items,t):e.value===t?D.some(e):D.none()
var n}))},be=fe,ve=function(e,t){return e.bind((function(e){return he(e,t)}))}
var ye=function(e){var t,n,r=be((function(t){return e.convertURL(t.value||t.url,"src")})),a=new T((function(t){var n,a
n=function(e){t(r(e).map((function(e){return x([[{text:"None",value:""}],e])})))},"string"==typeof(a=e.getParam("image_list",!1))?N.send({url:a,success:function(e){n(JSON.parse(e))}}):"function"==typeof a?a(n):n(a)})),i=function(e){return fe(ge)(e)}(e.getParam("image_class_list")),o=e.getParam("image_advtab",!1,"boolean"),l=e.getParam("image_uploadtab",!0,"boolean"),s=!!_(e),u=!!L(e),m=(n=se(t=e))?ne((function(e){return le(t,e)}),n):{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1},d=e.getParam("image_description",!0,"boolean"),g=e.getParam("image_title",!1,"boolean"),p=P(e),f=e.getParam("image_caption",!1,"boolean"),h=e.getParam("a11y_advanced_options",!1,"boolean"),b=_(e),v=e.getParam("images_upload_base_path",void 0,"string"),y=e.getParam("images_upload_credentials",!1,"boolean"),A=L(e),w=e.getParam("automatic_uploads",!0,"boolean"),S=D.some(e.getParam("image_prepend_url","","string")).filter((function(e){return c(e)&&0<e.length}))
return a.then((function(e){return{image:m,imageList:e,classList:i,hasAdvTab:o,hasUploadTab:l,hasUploadUrl:s,hasUploadHandler:u,hasDescription:d,hasImageTitle:g,hasDimensions:p,hasImageCaption:f,url:b,basePath:v,credentials:y,handler:A,prependURL:S,hasAccessibilityOptions:h,automaticUploads:w}}))},Ae=function(e){var t=e.imageList.map((function(e){return{name:"images",type:"listbox",label:"Image list",items:e}})),n={name:"alt",type:"input",label:"Alternative description",disabled:e.hasAccessibilityOptions&&e.image.isDecorative},r=e.classList.map((function(e){return{name:"classes",type:"listbox",label:"Class",items:e}}))
return x([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],t.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],e.hasDescription?[n]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:x([r.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])},we=function(e){return{title:"General",name:"general",items:Ae(e)}},De=Ae,Se=function(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e.class,caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}},xe=function(e,t){return{src:e.src.value,alt:0===e.alt.length&&t?null:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,class:e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}},Ue=function(e,t){var n,r,a,i,o=t.getData(),l=o.src.meta
void 0!==l&&(n=me({},o),a=n,i=l,(r=e).hasDescription&&c(i.alt)&&(a.alt=i.alt),r.hasAccessibilityOptions&&(a.isDecorative=i.isDecorative||a.isDecorative||!1),r.hasImageTitle&&c(i.title)&&(a.title=i.title),r.hasDimensions&&(c(i.width)&&(a.dimensions.width=i.width),c(i.height)&&(a.dimensions.height=i.height)),c(i.class)&&ve(r.classList,i.class).each((function(e){a.classes=e.value})),r.hasImageCaption&&g(i.caption)&&(a.caption=i.caption),r.hasAdvTab&&(c(i.style)&&(a.style=i.style),c(i.vspace)&&(a.vspace=i.vspace),c(i.border)&&(a.border=i.border),c(i.hspace)&&(a.hspace=i.hspace),c(i.borderstyle)&&(a.borderstyle=i.borderstyle)),t.setData(n))},Ce=function(e,t,n,r){var a,i,o,l,s,c,u,m,d,g,p,f;(function(e,t){var n,r,a=t.getData()
n=e,r=a.src.value,(/^(?:[a-zA-Z]+:)?\/\//.test(r)?D.none():n.prependURL.bind((function(e){return r.substring(0,e.length)!==e?D.some(e+r):D.none()}))).each((function(e){t.setData({src:{value:e,meta:a.src.meta}})}))})(t,r),Ue(t,r),a=e,i=t,o=n,c=(s=(l=r).getData()).src.value,(u=s.src.meta||{}).width||u.height||!i.hasDimensions||a.imageSize(c).then((function(e){o.open&&l.setData({dimensions:e})})),m=t,d=n,p=(g=r).getData(),f=ve(m.imageList,p.src.value),d.prevImage=f,g.setData({images:f.map((function(e){return e.value})).getOr("")})},Oe=function(e,t,n,r){var a,i=r.getData()
r.block("Uploading image"),(0===(a=i.fileinput).length?D.none():D.some(a[0])).fold((function(){r.unblock()}),(function(a){var i,o=URL.createObjectURL(a),l=function(e){var t=function(t,n,r,a){var i=new XMLHttpRequest
i.open("POST",e.url),i.withCredentials=e.credentials,i.upload.onprogress=function(e){a(e.loaded/e.total*100)},i.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var t,a,o
i.status<200||300<=i.status?r("HTTP Error: "+i.status):(t=JSON.parse(i.responseText))&&"string"==typeof t.location?n((a=e.basePath,o=t.location,a?a.replace(/\/$/,"")+"/"+o.replace(/^\//,""):o)):r("Invalid JSON: "+i.responseText)}
var o=new FormData
o.append("file",t.blob(),t.filename()),i.send(o)}
return e=de.extend({credentials:!1,handler:t},e),{upload:function(n){return e.url||e.handler!==t?(r=n,i=e.handler,new T((function(e,t){try{i(r,e,t,f)}catch(a){t(a.message)}}))):T.reject("Upload url missing from the settings.")
var r,i}}}({url:t.url,basePath:t.basePath,credentials:t.credentials,handler:t.handler}),s=function(){r.unblock(),URL.revokeObjectURL(o)},c=function(a){r.setData({src:{value:a,meta:{}}}),r.showTab("general"),Ce(e,t,n,r)}
i=a,new T((function(e,t){var n=new FileReader
n.onload=function(){e(n.result)},n.onerror=function(){t(n.error.message)},n.readAsDataURL(i)})).then((function(n){var i=e.createBlobCache(a,o,n)
t.automaticUploads?l.upload(i).then((function(e){c(e),s()})).catch((function(t){s(),e.alertErr(t)})):(e.addToBlobCache(i),c(i.blobUri()),r.unblock())}))}))},Ie=function(e,t,n){return function(r,a){var i,o,l,s,c,u,m,d,g,p,f,h,b,v
"src"===a.name?Ce(e,t,n,r):"images"===a.name?(g=e,p=t,f=n,b=(h=r).getData(),(v=ve(p.imageList,b.images)).each((function(e){""===b.alt||f.prevImage.map((function(e){return e.text===b.alt})).getOr(!1)?""===e.value?h.setData({src:e,alt:f.prevAlt}):h.setData({src:e,alt:e.text}):h.setData({src:e})})),f.prevImage=v,Ce(g,p,f,h)):"alt"===a.name?n.prevAlt=r.getData().alt:"style"===a.name?(c=e,m=(u=r).getData(),d=function(e,t,n){var r,a,i,o,l,s=z(e(n.style)),c=me({},n)
return c.vspace=(r=s)["margin-top"]&&r["margin-bottom"]&&r["margin-top"]===r["margin-bottom"]?R(String(r["margin-top"])):"",c.hspace=(a=s)["margin-right"]&&a["margin-left"]&&a["margin-right"]===a["margin-left"]?R(String(a["margin-right"])):"",c.border=(i=s)["border-width"]?R(String(i["border-width"])):"",c.borderstyle=(o=s)["border-style"]?String(o["border-style"]):"",c.style=(l=t)(e(l(s))),c}(c.parseStyle,c.serializeStyle,m),u.setData(d)):"vspace"===a.name||"hspace"===a.name||"border"===a.name||"borderstyle"===a.name?(i=e,o=r,l=me(Se(t.image),o.getData()),s=function(e,t){var n=document.createElement("img")
return $(n,"style",t.style),!B(n)&&""===t.hspace||K(n,t.hspace),!H(n)&&""===t.vspace||Z(n,t.vspace),!F(n)&&""===t.border||Q(n,t.border),!W(n,"borderStyle")&&""===t.borderStyle||Y(n,t.borderStyle),e(n.getAttribute("style"))}(i.normalizeCss,xe(l,!1)),o.setData({style:s})):"fileinput"===a.name?Oe(e,t,n,r):"isDecorative"===a.name&&(r.getData().isDecorative?r.disable("alt"):r.enable("alt"))}},Te=function(e){return function(t){return n=e.documentBaseURI.toAbsolute(t),new T((function(e){var t=document.createElement("img"),r=function(n){t.parentNode&&t.parentNode.removeChild(t),e(n)}
t.onload=function(){var e={width:E(t.width,t.clientWidth),height:E(t.height,t.clientHeight)}
r(T.resolve(e))},t.onerror=function(){r(T.reject("Failed to get image dimensions for: "+n))}
var a=t.style
a.visibility="hidden",a.position="fixed",a.bottom=a.left="0px",a.width=a.height="auto",document.body.appendChild(t),t.src=n})).then((function(e){return{width:String(e.width),height:String(e.height)}}))
var n}},Ne=function(e){var t,n,r,a,i,o,l,s={onSubmit:function(e){return function(t){var n=me(Se(e.image),t.getData())
l.execCommand("mceUpdateImage",!1,xe(n,e.hasAccessibilityOptions)),l.editorUpload.uploadImagesAuto(),t.close()}},imageSize:Te(l=e),addToBlobCache:function(e){o.editorUpload.blobCache.add(e)},createBlobCache:function(e,t,n){return i.editorUpload.blobCache.create({blob:e,blobUri:t,name:e.name?e.name.replace(/\.[^\.]+$/,""):null,base64:n.split(",")[1]})},alertErr:function(e){a.windowManager.alert(e)},normalizeCss:function(e){return le(r,e)},parseStyle:function(e){return n.dom.parseStyle(e)},serializeStyle:(t=n=r=a=i=o=e,function(e,n){return t.dom.serializeStyle(e,n)})}
return{open:function(){ye(e).then(function(e){return function(t){var n,r,a,i={prevImage:ve((n=t).imageList,n.image.src),prevAlt:n.image.alt,open:!0}
return{title:"Insert/Edit Image",size:"normal",body:(a=t).hasAdvTab||a.hasUploadUrl||a.hasUploadHandler?{type:"tabpanel",tabs:x([[we(a)],a.hasAdvTab?[{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}]:[],a.hasUploadTab&&(a.hasUploadUrl||a.hasUploadHandler)?[{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}]:[]])}:{type:"panel",items:De(a)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:Se(t.image),onSubmit:e.onSubmit(t),onChange:Ie(e,t,i),onClose:(r=i,function(){r.open=!1})}}}(s)).then(e.windowManager.open)}}},Pe=function(e){e.addCommand("mceImage",Ne(e).open),e.addCommand("mceUpdateImage",(function(t,n){e.undoManager.transact((function(){return r=n,void((u=se(t=e))?(a=ne((function(e){return le(t,e)}),u),(i=o(o({},a),r)).src?function(e,t){var n,r,a,i,o,l,s=se(e)
oe((function(t){return le(e,t)}),t,s),n=s,e.dom.setAttrib(n,"src",n.getAttribute("src")),ee(s.parentNode)?(r=s.parentNode,ce(e,r),e.selection.select(s.parentNode)):(e.selection.select(s),a=e,i=t,l=function(){o.onload=o.onerror=null,a.selection&&(a.selection.select(o),a.nodeChanged())},(o=s).onload=function(){i.width||i.height||!P(a)||a.dom.setAttribs(o,{width:String(o.clientWidth),height:String(o.clientHeight)}),l()},o.onerror=l)}(t,i):(l=t,(s=u)&&(c=l.dom.is(s.parentNode,"figure.image")?s.parentNode:s,l.dom.remove(c),l.focus(),l.nodeChanged(),l.dom.isEmpty(l.getBody())&&(l.setContent(""),l.selection.setCursorLocation())))):r.src&&function(e,t){var n=function(e,t){var n=document.createElement("img")
if(oe(e,o(o({},t),{caption:!1}),n),ae(n,t.alt,t.isDecorative),t.caption){var r=j.create("figure",{class:"image"})
return r.appendChild(n),r.appendChild(j.create("figcaption",{contentEditable:"true"},"Caption")),r.contentEditable="false",r}return n}((function(t){return le(e,t)}),t)
e.dom.setAttrib(n,"data-mce-id","__mcenew"),e.focus(),e.selection.setContent(n.outerHTML)
var r,a=e.dom.select('*[data-mce-id="__mcenew"]')[0]
e.dom.setAttrib(a,"data-mce-id",null),ee(a)?(r=ce(e,a),e.selection.select(r)):e.selection.select(a)}(t,o(o({},{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}),r)))
var t,r,a,i,l,s,c,u}))}))},_e=function(e){return function(t){for(var n,r=t.length,a=function(t){t.attr("contenteditable",e?"true":null)};r--;){var i=t[r];(n=i.attr("class"))&&/\bimage\b/.test(n)&&(i.attr("contenteditable",e?"false":null),de.each(i.getAll("figcaption"),a))}}}
i.add("image",(function(e){var t,n;(t=e).on("PreInit",(function(){t.parser.addNodeFilter("figure",_e(!0)),t.serializer.addNodeFilter("figure",_e(!1))})),(n=e).ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:Ne(n).open,onSetup:function(e){return n.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",e.setActive).unbind}}),n.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:Ne(n).open}),n.ui.registry.addContextMenu("image",{update:function(e){return ee(e)||"IMG"===e.nodeName&&!k(e)?["image"]:[]}}),Pe(e)}))}()
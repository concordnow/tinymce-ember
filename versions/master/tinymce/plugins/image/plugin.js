(function(){"use strict"
var e,t,n=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},i=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e
var n,r}},a=function(e){return function(t){return typeof t===e}},o=i("string"),u=i("object"),l=i("array"),s=(e=null,function(t){return e===t}),c=a("boolean"),m=a("number"),d=function(){},f=function(e){return function(){return e}},g=f(!1),p=f(!0),h=function(){return b},b=function(){var e=function(e){return e.isNone()},t=function(e){return e()},n=function(e){return e}
return{fold:function(e,t){return e()},is:g,isSome:g,isNone:p,getOr:n,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:f(null),getOrUndefined:f(void 0),or:n,orThunk:t,map:h,each:d,bind:h,exists:g,forall:p,filter:h,equals:e,equals_:e,toArray:function(){return[]},toString:f("none()")}}(),v=function(e){var t=f(e),n=function(){return i},r=function(t){return t(e)},i={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:p,isNone:g,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return v(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?i:b},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(g,(function(t){return n(e,t)}))}}
return i},y={some:v,none:h,from:function(e){return null==e?b:v(e)}},w=Array.prototype.push,D=function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!l(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e)
w.apply(t,e[n])}return t},A=("undefined"!=typeof window?window:Function("return this;")(),function(e,t,n){(function(e,t,n){if(!(o(n)||c(n)||m(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple")
e.setAttribute(t,n+"")})(e.dom,t,n)}),S=function(e){if(null==e)throw new Error("Node cannot be null or undefined")
return{dom:e}},x={fromHtml:function(e,t){var n=(t||document).createElement("div")
if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node")
return S(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e)
return S(n)},fromText:function(e,t){var n=(t||document).createTextNode(e)
return S(n)},fromDom:S,fromPoint:function(e,t,n){return y.from(e.dom.elementFromPoint(t,n)).map(S)}},T=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),C=tinymce.util.Tools.resolve("tinymce.util.Promise"),U=tinymce.util.Tools.resolve("tinymce.util.XHR"),O=function(e){return e.getParam("image_dimensions",!0,"boolean")},I=function(e){return e.getParam("images_upload_url","","string")},N=function(e){return e.getParam("images_upload_handler",void 0,"function")},P=function(e,t){return Math.max(parseInt(e,10),parseInt(t,10))},_=function(e){return e&&(e=e.replace(/px$/,"")),e},L=function(e){return e.length>0&&/^[0-9]+$/.test(e)&&(e+="px"),e},E=function(e){if(e.margin){var t=String(e.margin).split(" ")
switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0]
break
case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1]
break
case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1]
break
case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e},M=function(e){return"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder"))},R=T.DOM,z=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?_(e.style.marginLeft):""},H=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?_(e.style.marginTop):""},k=function(e){return e.style.borderWidth?_(e.style.borderWidth):""},j=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):""},B=function(e,t){return e.style[t]?e.style[t]:""},F=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},G=function(e,t,n){""===n?e.removeAttribute(t):e.setAttribute(t,n)},W=function(e){F(e)?function(e){var t=e.parentNode
R.insertAfter(e,t),R.remove(t)}(e):function(e){var t=R.create("figure",{class:"image"})
R.insertAfter(t,e),t.appendChild(e),t.appendChild(R.create("figcaption",{contentEditable:"true"},"Caption")),t.contentEditable="false"}(e)},q=function(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"")
r.length>0?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},$=function(e,t){return function(e,n,r){e.style[n]?(e.style[n]=L(r),q(e,t)):G(e,n,r)}},J=function(e,t){return e.style[t]?_(e.style[t]):j(e,t)},X=function(e,t){var n=L(t)
e.style.marginLeft=n,e.style.marginRight=n},V=function(e,t){var n=L(t)
e.style.marginTop=n,e.style.marginBottom=n},K=function(e,t){var n=L(t)
e.style.borderWidth=n},Z=function(e,t){e.style.borderStyle=t},Q=function(e){return"FIGURE"===e.nodeName},Y=function(e){return 0===R.getAttrib(e,"alt").length&&"presentation"===R.getAttrib(e,"role")},ee=function(e){return Y(e)?"":j(e,"alt")},te=function(e,t){var n=document.createElement("img")
return G(n,"style",t.style),(z(n)||""!==t.hspace)&&X(n,t.hspace),(H(n)||""!==t.vspace)&&V(n,t.vspace),(k(n)||""!==t.border)&&K(n,t.border),(function(e){return B(e,"borderStyle")}(n)||""!==t.borderStyle)&&Z(n,t.borderStyle),e(n.getAttribute("style"))},ne=function(e,t){return{src:j(t,"src"),alt:ee(t),title:j(t,"title"),width:J(t,"width"),height:J(t,"height"),class:j(t,"class"),style:e(j(t,"style")),caption:F(t),hspace:z(t),vspace:H(t),border:k(t),borderStyle:B(t,"borderStyle"),isDecorative:Y(t)}},re=function(e,t,n,r,i){n[r]!==t[r]&&i(e,r,n[r])},ie=function(e,t,n){if(n){R.setAttrib(e,"role","presentation")
var r=x.fromDom(e)
A(r,"alt","")}else{if(s(t)){r=x.fromDom(e)
i="alt",r.dom.removeAttribute(i)}else{r=x.fromDom(e)
A(r,"alt",t)}"presentation"===R.getAttrib(e,"role")&&R.setAttrib(e,"role","")}var i},ae=function(e,t){return function(n,r,i){e(n,i),q(n,t)}},oe=function(e,t,n){var r=ne(e,n)
re(n,r,t,"caption",(function(e,t,n){return W(e)})),re(n,r,t,"src",G),re(n,r,t,"title",G),re(n,r,t,"width",$(0,e)),re(n,r,t,"height",$(0,e)),re(n,r,t,"class",G),re(n,r,t,"style",ae((function(e,t){return G(e,"style",t)}),e)),re(n,r,t,"hspace",ae(X,e)),re(n,r,t,"vspace",ae(V,e)),re(n,r,t,"border",ae(K,e)),re(n,r,t,"borderStyle",ae(Z,e)),function(e,t,n){n.alt===t.alt&&n.isDecorative===t.isDecorative||ie(e,n.alt,n.isDecorative)}(n,r,t)},ue=function(e,t){var n=e.dom.styles.parse(t),r=E(n),i=e.dom.styles.parse(e.dom.styles.serialize(r))
return e.dom.styles.serialize(i)},le=function(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image")
return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||M(t))?null:t},se=function(e,t){var n=e.dom,r=n.getParent(t.parentNode,(function(t){return!!e.schema.getTextBlockElements()[t.nodeName]}),e.getBody())
return r?n.split(r,t):t},ce=function(e,t){var n=function(e,t){var n=document.createElement("img")
if(oe(e,r(r({},t),{caption:!1}),n),ie(n,t.alt,t.isDecorative),t.caption){var i=R.create("figure",{class:"image"})
return i.appendChild(n),i.appendChild(R.create("figcaption",{contentEditable:"true"},"Caption")),i.contentEditable="false",i}return n}((function(t){return ue(e,t)}),t)
e.dom.setAttrib(n,"data-mce-id","__mcenew"),e.focus(),e.selection.setContent(n.outerHTML)
var i=e.dom.select('*[data-mce-id="__mcenew"]')[0]
if(e.dom.setAttrib(i,"data-mce-id",null),Q(i)){var a=se(e,i)
e.selection.select(a)}else e.selection.select(i)},me=function(e,t){var n=le(e)
if(oe((function(t){return ue(e,t)}),t,n),function(e,t){e.dom.setAttrib(t,"src",t.getAttribute("src"))}(e,n),Q(n.parentNode)){var r=n.parentNode
se(e,r),e.selection.select(n.parentNode)}else e.selection.select(n),function(e,t,n){var r=function(){n.onload=n.onerror=null,e.selection&&(e.selection.select(n),e.nodeChanged())}
n.onload=function(){t.width||t.height||!O(e)||e.dom.setAttribs(n,{width:String(n.clientWidth),height:String(n.clientHeight)}),r()},n.onerror=r}(e,t,n)},de=Object.prototype.hasOwnProperty,fe=(t=function(e,t){return u(e)&&u(t)?fe(e,t):t},function(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n]
if(0===e.length)throw new Error("Can't merge zero objects")
for(var r={},i=0;i<e.length;i++){var a=e[i]
for(var o in a)de.call(a,o)&&(r[o]=t(r[o],a[o]))}return r}),ge=tinymce.util.Tools.resolve("tinymce.util.Tools"),pe=function(e){return o(e.value)?e.value:""},he=function(e,t){var n=[]
return ge.each(e,(function(e){var r=o(e.text)?e.text:o(e.title)?e.title:""
if(void 0!==e.menu){var i=he(e.menu,t)
n.push({text:r,items:i})}else{var a=t(e)
n.push({text:r,value:a})}})),n},be=function(e){return void 0===e&&(e=pe),function(t){return t?y.from(t).map((function(t){return he(t,e)})):y.none()}},ve=function(e,t){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n)
if(r.isSome())return r}return y.none()}(e,(function(e){return function(e){return Object.prototype.hasOwnProperty.call(e,"items")}(e)?ve(e.items,t):e.value===t?y.some(e):y.none()}))},ye=be,we=function(e){return be(pe)(e)},De=function(e,t){return e.bind((function(e){return ve(e,t)}))}
function Ae(e){var t=function(t,n,r,i){var a=new XMLHttpRequest
a.open("POST",e.url),a.withCredentials=e.credentials,a.upload.onprogress=function(e){i(e.loaded/e.total*100)},a.onerror=function(){r("Image upload failed due to a XHR Transport error. Code: "+a.status)},a.onload=function(){if(a.status<200||a.status>=300)r("HTTP Error: "+a.status)
else{var t,i,o=JSON.parse(a.responseText)
if(o&&"string"==typeof o.location)n((t=e.basePath,i=o.location,t?t.replace(/\/$/,"")+"/"+i.replace(/^\//,""):i))
else r("Invalid JSON: "+a.responseText)}}
var o=new FormData
o.append("file",t.blob(),t.filename()),a.send(o)}
return e=ge.extend({credentials:!1,handler:t},e),{upload:function(n){return e.url||e.handler!==t?function(e,t){return new C((function(n,r){try{t(e,n,r,d)}catch(i){r(i.message)}}))}(n,e.handler):C.reject("Upload url missing from the settings.")}}}var Se=function(e){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},xe=function(e){var t=ye((function(t){return e.convertURL(t.value||t.url,"src")})),n=new C((function(n){(function(e,t){var n=function(e){return e.getParam("image_list",!1)}(e)
"string"==typeof n?U.send({url:n,success:function(e){t(JSON.parse(e))}}):"function"==typeof n?n(t):t(n)})(e,(function(e){n(t(e).map((function(e){return D([[{text:"None",value:""}],e])})))}))})),r=we(function(e){return e.getParam("image_class_list")}(e)),i=function(e){return e.getParam("image_advtab",!1,"boolean")}(e),a=function(e){return e.getParam("image_uploadtab",!0,"boolean")}(e),u=function(e){return!!I(e)}(e),l=function(e){return!!N(e)}(e),s=function(e){var t=le(e)
return t?ne((function(t){return ue(e,t)}),t):{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}}(e),c=function(e){return e.getParam("image_description",!0,"boolean")}(e),m=function(e){return e.getParam("image_title",!1,"boolean")}(e),d=O(e),f=function(e){return e.getParam("image_caption",!1,"boolean")}(e),g=function(e){return e.getParam("a11y_advanced_options",!1,"boolean")}(e),p=I(e),h=function(e){return e.getParam("images_upload_base_path",void 0,"string")}(e),b=function(e){return e.getParam("images_upload_credentials",!1,"boolean")}(e),v=N(e),w=function(e){return e.getParam("automatic_uploads",!0,"boolean")}(e),A=y.some(function(e){return e.getParam("image_prepend_url","","string")}(e)).filter((function(e){return o(e)&&e.length>0}))
return n.then((function(e){return{image:s,imageList:e,classList:r,hasAdvTab:i,hasUploadTab:a,hasUploadUrl:u,hasUploadHandler:l,hasDescription:c,hasImageTitle:m,hasDimensions:d,hasImageCaption:f,url:p,basePath:h,credentials:b,handler:v,prependURL:A,hasAccessibilityOptions:g,automaticUploads:w}}))},Te=function(e){var t=e.imageList.map((function(e){return{name:"images",type:"listbox",label:"Image list",items:e}})),n={name:"alt",type:"input",label:"Alternative description",disabled:e.hasAccessibilityOptions&&e.image.isDecorative},r=e.classList.map((function(e){return{name:"classes",type:"listbox",label:"Class",items:e}}))
return D([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],t.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],e.hasDescription?[n]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:D([r.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])},Ce=function(e){return{title:"General",name:"general",items:Te(e)}},Ue=Te,Oe=function(e){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}},Ie=function(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e.class,caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}},Ne=function(e,t){return{src:e.src.value,alt:0===e.alt.length&&t?null:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,class:e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}},Pe=function(e,t){var n=t.getData();(function(e,t){return/^(?:[a-zA-Z]+:)?\/\//.test(t)?y.none():e.prependURL.bind((function(e){return t.substring(0,e.length)!==e?y.some(e+t):y.none()}))})(e,n.src.value).each((function(e){t.setData({src:{value:e,meta:n.src.meta}})}))},_e=function(e,t){var n=t.getData(),r=n.src.meta
if(void 0!==r){var i=fe({},n);(function(e,t,n){e.hasDescription&&o(n.alt)&&(t.alt=n.alt),e.hasAccessibilityOptions&&(t.isDecorative=n.isDecorative||t.isDecorative||!1),e.hasImageTitle&&o(n.title)&&(t.title=n.title),e.hasDimensions&&(o(n.width)&&(t.dimensions.width=n.width),o(n.height)&&(t.dimensions.height=n.height)),o(n.class)&&De(e.classList,n.class).each((function(e){t.classes=e.value})),e.hasImageCaption&&c(n.caption)&&(t.caption=n.caption),e.hasAdvTab&&(o(n.style)&&(t.style=n.style),o(n.vspace)&&(t.vspace=n.vspace),o(n.border)&&(t.border=n.border),o(n.hspace)&&(t.hspace=n.hspace),o(n.borderstyle)&&(t.borderstyle=n.borderstyle))})(e,i,r),t.setData(i)}},Le=function(e,t,n,r){Pe(t,r),_e(t,r),function(e,t,n,r){var i=r.getData(),a=i.src.value,o=i.src.meta||{}
o.width||o.height||!t.hasDimensions||e.imageSize(a).then((function(e){n.open&&r.setData({dimensions:e})}))}(e,t,n,r),function(e,t,n){var r=n.getData(),i=De(e.imageList,r.src.value)
t.prevImage=i,n.setData({images:i.map((function(e){return e.value})).getOr("")})}(t,n,r)},Ee=function(e,t,n){var r=E(e(n.style)),i=fe({},n)
return i.vspace=function(e){return e["margin-top"]&&e["margin-bottom"]&&e["margin-top"]===e["margin-bottom"]?_(String(e["margin-top"])):""}(r),i.hspace=function(e){return e["margin-right"]&&e["margin-left"]&&e["margin-right"]===e["margin-left"]?_(String(e["margin-right"])):""}(r),i.border=function(e){return e["border-width"]?_(String(e["border-width"])):""}(r),i.borderstyle=function(e){return e["border-style"]?String(e["border-style"]):""}(r),i.style=function(e,t,n){return t(e(t(n)))}(e,t,r),i},Me=function(e,t,n,r){var i,a=r.getData()
r.block("Uploading image"),(i=a.fileinput,0===i.length?y.none():y.some(i[0])).fold((function(){r.unblock()}),(function(i){var a,o=URL.createObjectURL(i),u=Ae({url:t.url,basePath:t.basePath,credentials:t.credentials,handler:t.handler}),l=function(){r.unblock(),URL.revokeObjectURL(o)},s=function(i){r.setData({src:{value:i,meta:{}}}),r.showTab("general"),Le(e,t,n,r)};(a=i,new C((function(e,t){var n=new FileReader
n.onload=function(){e(n.result)},n.onerror=function(){t(n.error.message)},n.readAsDataURL(a)}))).then((function(n){var a=e.createBlobCache(i,o,n)
t.automaticUploads?u.upload(a).then((function(e){s(e),l()})).catch((function(t){l(),e.alertErr(t)})):(e.addToBlobCache(a),s(a.blobUri()),r.unblock())}))}))},Re=function(e,t,n){return function(r,i){"src"===i.name?Le(e,t,n,r):"images"===i.name?function(e,t,n,r){var i=r.getData(),a=De(t.imageList,i.images)
a.each((function(e){""===i.alt||n.prevImage.map((function(e){return e.text===i.alt})).getOr(!1)?""===e.value?r.setData({src:e,alt:n.prevAlt}):r.setData({src:e,alt:e.text}):r.setData({src:e})})),n.prevImage=a,Le(e,t,n,r)}(e,t,n,r):"alt"===i.name?n.prevAlt=r.getData().alt:"style"===i.name?function(e,t){var n=t.getData(),r=Ee(e.parseStyle,e.serializeStyle,n)
t.setData(r)}(e,r):"vspace"===i.name||"hspace"===i.name||"border"===i.name||"borderstyle"===i.name?function(e,t,n){var r=fe(Ie(t.image),n.getData()),i=te(e.normalizeCss,Ne(r,!1))
n.setData({style:i})}(e,t,r):"fileinput"===i.name?Me(e,t,n,r):"isDecorative"===i.name&&(r.getData().isDecorative?r.disable("alt"):r.enable("alt"))}},ze=function(e){return function(){e.open=!1}},He=function(e){return e.hasAdvTab||e.hasUploadUrl||e.hasUploadHandler?{type:"tabpanel",tabs:D([[Ce(e)],e.hasAdvTab?[Se(e)]:[],e.hasUploadTab&&(e.hasUploadUrl||e.hasUploadHandler)?[Oe(e)]:[]])}:{type:"panel",items:Ue(e)}},ke=function(e){return function(t){var n=function(e){return{prevImage:De(e.imageList,e.image.src),prevAlt:e.image.alt,open:!0}}(t)
return{title:"Insert/Edit Image",size:"normal",body:He(t),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:Ie(t.image),onSubmit:e.onSubmit(t),onChange:Re(e,t,n),onClose:ze(n)}}},je=function(e){return function(t){return function(n){var r=fe(Ie(t.image),n.getData())
e.execCommand("mceUpdateImage",!1,Ne(r,t.hasAccessibilityOptions)),e.editorUpload.uploadImagesAuto(),n.close()}}},Be=function(e){return function(t){return function(e){return new C((function(t){var n=document.createElement("img"),r=function(e){n.parentNode&&n.parentNode.removeChild(n),t(e)}
n.onload=function(){var e={width:P(n.width,n.clientWidth),height:P(n.height,n.clientHeight)}
r(C.resolve(e))},n.onerror=function(){r(C.reject("Failed to get image dimensions for: "+e))}
var i=n.style
i.visibility="hidden",i.position="fixed",i.bottom=i.left="0px",i.width=i.height="auto",document.body.appendChild(n),n.src=e}))}(e.documentBaseURI.toAbsolute(t)).then((function(e){return{width:String(e.width),height:String(e.height)}}))}},Fe=function(e){return function(t,n,r){return e.editorUpload.blobCache.create({blob:t,blobUri:n,name:t.name?t.name.replace(/\.[^\.]+$/,""):null,base64:r.split(",")[1]})}},Ge=function(e){return function(t){e.editorUpload.blobCache.add(t)}},We=function(e){return function(t){e.windowManager.alert(t)}},qe=function(e){return function(t){return ue(e,t)}},$e=function(e){return function(t){return e.dom.parseStyle(t)}},Je=function(e){return function(t,n){return e.dom.serializeStyle(t,n)}},Xe=function(e){var t={onSubmit:je(e),imageSize:Be(e),addToBlobCache:Ge(e),createBlobCache:Fe(e),alertErr:We(e),normalizeCss:qe(e),parseStyle:$e(e),serializeStyle:Je(e)}
return{open:function(){xe(e).then(ke(t)).then(e.windowManager.open)}}},Ve=function(e){e.addCommand("mceImage",Xe(e).open),e.addCommand("mceUpdateImage",(function(t,n){e.undoManager.transact((function(){return function(e,t){var n=le(e)
if(n){var i=ne((function(t){return ue(e,t)}),n),a=r(r({},i),t)
a.src?me(e,a):function(e,t){if(t){var n=e.dom.is(t.parentNode,"figure.image")?t.parentNode:t
e.dom.remove(n),e.focus(),e.nodeChanged(),e.dom.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}}(e,n)}else t.src&&ce(e,r(r({},{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}),t))}(e,n)}))}))},Ke=function(e){var t=e.attr("class")
return t&&/\bimage\b/.test(t)},Ze=function(e){return function(t){for(var n=t.length,r=function(t){t.attr("contenteditable",e?"true":null)};n--;){var i=t[n]
Ke(i)&&(i.attr("contenteditable",e?"false":null),ge.each(i.getAll("figcaption"),r))}}}
n.add("image",(function(e){(function(e){e.on("PreInit",(function(){e.parser.addNodeFilter("figure",Ze(!0)),e.serializer.addNodeFilter("figure",Ze(!1))}))})(e),function(e){e.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:Xe(e).open,onSetup:function(t){return e.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",t.setActive).unbind}}),e.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:Xe(e).open}),e.ui.registry.addContextMenu("image",{update:function(e){return Q(e)||"IMG"===e.nodeName&&!M(e)?["image"]:[]}})}(e),Ve(e)}))})()

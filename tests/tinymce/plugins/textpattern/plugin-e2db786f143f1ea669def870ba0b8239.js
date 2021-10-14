(function(){"use strict"
var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(){return(n=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])
return t}).apply(this,arguments)}
function r(t,n,r){if(r||2===arguments.length)for(var e,o=0,a=n.length;o<a;o++)!e&&o in n||(e||(e=Array.prototype.slice.call(n,0,o)),e[o]=n[o])
return t.concat(e||Array.prototype.slice.call(n))}var e,o,a=function(t){return function(n){return e=typeof(r=n),(null===r?"null":"object"===e&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"===e&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":e)===t
var r,e}},i=a("string"),u=a("object"),f=a("array"),c=function(){},s=function(t){return function(){return t}},l=function(t){return t},d=s(!1),m=s(!0),g=function(){return p},p={fold:function(t,n){return t()},isSome:d,isNone:m,getOr:o=l,getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:s(null),getOrUndefined:s(void 0),or:o,orThunk:e,map:g,each:c,bind:g,exists:d,forall:m,filter:function(){return g()},toArray:function(){return[]},toString:s("none()")},h=function(t){var n=s(t),r=function(){return o},e=function(n){return n(t)},o={fold:function(n,r){return r(t)},isSome:m,isNone:d,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:r,orThunk:r,map:function(n){return h(n(t))},each:function(n){n(t)},bind:e,exists:e,forall:e,filter:function(n){return n(t)?o:p},toArray:function(){return[t]},toString:function(){return"some("+t+")"}}
return o},v={some:h,none:g,from:function(t){return null==t?p:h(t)}},y=Array.prototype.slice,b=Array.prototype.indexOf,k=function(t,n){return r=t,e=n,b.call(r,e)>-1
var r,e},O=function(t,n){for(var r=t.length,e=new Array(r),o=0;o<r;o++){var a=t[o]
e[o]=n(a,o)}return e},w=function(t,n){for(var r=0,e=t.length;r<e;r++){n(t[r],r)}},C=function(t,n){for(var r=[],e=0,o=t.length;e<o;e++){var a=t[e]
n(a,e)&&r.push(a)}return r},E=function(t,n,r){return function(t,n){for(var r=t.length-1;r>=0;r--)n(t[r],r)}(t,(function(t,e){r=n(r,t,e)})),r},x=function(t,n){return function(t,n,r){for(var e=0,o=t.length;e<o;e++){var a=t[e]
if(n(a,e))return v.some(a)
if(r(a,e))break}return v.none()}(t,n,d)},R=function(t,n){for(var r=0,e=t.length;r<e;++r){if(!0!==n(t[r],r))return!1}return!0},T=function(t){return function(t,n){return n>=0&&n<t.length?v.some(t[n]):v.none()}(t,0)},P=Object.keys,N=Object.hasOwnProperty;(function(t){if(!f(t))throw new Error("cases must be an array")
if(0===t.length)throw new Error("there must be at least one case")
var n=[],r={}
w(t,(function(e,o){var a=P(e)
if(1!==a.length)throw new Error("one and only one name per case")
var i=a[0],u=e[i]
if(void 0!==r[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!f(u))throw new Error("case arguments must be an array")
n.push(i),r[i]=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e]
var a=r.length
if(a!==u.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+u.length+" ("+u+"), got "+a)
var f=function(t){var e=P(t)
if(n.length!==e.length)throw new Error("Wrong number of arguments to match. Expected: "+n.join(",")+"\nActual: "+e.join(","))
if(!R(n,(function(t){return k(e,t)})))throw new Error("Not all branches were specified when using match. Specified: "+e.join(", ")+"\nRequired: "+n.join(", "))
return t[i].apply(null,r)}
return{fold:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e]
if(n.length!==t.length)throw new Error("Wrong number of arguments to fold. Expected "+t.length+", got "+n.length)
var a=n[o]
return a.apply(null,r)},match:f,log:function(t){console.log(t,{constructors:n,constructor:i,params:r})}}}}))})([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}])
var S=function(t){var n=[],r=[]
return w(t,(function(t){t.fold((function(t){n.push(t)}),(function(t){r.push(t)}))})),{errors:n,values:r}},M=function(t){return{isValue:m,isError:d,getOr:s(t),getOrThunk:s(t),getOrDie:s(t),or:function(n){return M(t)},orThunk:function(n){return M(t)},fold:function(n,r){return r(t)},map:function(n){return M(n(t))},mapError:function(n){return M(t)},each:function(n){n(t)},bind:function(n){return n(t)},exists:function(n){return n(t)},forall:function(n){return n(t)},toOptional:function(){return v.some(t)}}},A=function(t){return{isValue:d,isError:m,getOr:l,getOrThunk:function(t){return t()},getOrDie:function(){return(n=String(t),function(){throw new Error(n)})()
var n},or:l,orThunk:function(t){return t()},fold:function(n,r){return n(t)},map:function(n){return A(t)},mapError:function(n){return A(n(t))},each:c,bind:function(n){return A(t)},exists:d,forall:m,toOptional:v.none}},B={value:M,error:A,fromOption:function(t,n){return t.fold((function(){return A(n)}),M)}},D=function(t){return"inline-command"===t.type||"inline-format"===t.type},I=function(t){return"block-command"===t.type||"block-format"===t.type},j=function(t){return n=t,r=function(t,n){return t.start.length===n.start.length?0:t.start.length>n.start.length?-1:1},(e=y.call(n,0)).sort(r),e
var n,r,e},_=function(t){var n=function(n){return B.error({message:n,pattern:t})},r=function(r,e,o){if(void 0!==t.format){var a=void 0
if(f(t.format)){if(!R(t.format,i))return n(r+" pattern has non-string items in the `format` array")
a=t.format}else{if(!i(t.format))return n(r+" pattern has non-string `format` parameter")
a=[t.format]}return B.value(e(a))}return void 0!==t.cmd?i(t.cmd)?B.value(o(t.cmd,t.value)):n(r+" pattern has non-string `cmd` parameter"):n(r+" pattern is missing both `format` and `cmd` parameters")}
if(!u(t))return n("Raw pattern is not an object")
if(!i(t.start))return n("Raw pattern is missing `start` parameter")
if(void 0!==t.end){if(!i(t.end))return n("Inline pattern has non-string `end` parameter")
if(0===t.start.length&&0===t.end.length)return n("Inline pattern has empty `start` and `end` parameters")
var e=t.start,o=t.end
return 0===o.length&&(o=e,e=""),r("Inline",(function(t){return{type:"inline-format",start:e,end:o,format:t}}),(function(t,n){return{type:"inline-command",start:e,end:o,cmd:t,value:n}}))}return void 0!==t.replacement?i(t.replacement)?0===t.start.length?n("Replacement pattern has empty `start` parameter"):B.value({type:"inline-command",start:"",end:t.start,cmd:"mceInsertContent",value:t.replacement}):n("Replacement pattern has non-string `replacement` parameter"):0===t.start.length?n("Block pattern has empty `start` parameter"):r("Block",(function(n){return{type:"block-format",start:t.start,format:n[0]}}),(function(n,r){return{type:"block-command",start:t.start,cmd:n,value:r}}))},U=function(t){return"block-command"===t.type?{start:t.start,cmd:t.cmd,value:t.value}:"block-format"===t.type?{start:t.start,format:t.format}:"inline-command"===t.type?"mceInsertContent"===t.cmd&&""===t.start?{start:t.end,replacement:t.value}:{start:t.start,end:t.end,cmd:t.cmd,value:t.value}:"inline-format"===t.type?{start:t.start,end:t.end,format:1===t.format.length?t.format[0]:t.format}:void 0},L=function(t){return{inlinePatterns:C(t,D),blockPatterns:j(C(t,I))}},V="undefined"!=typeof window?window:Function("return this;")(),W=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r=V.console
r&&(r.error?r.error.apply(r,t):r.log.apply(r,t))},q=[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],F=function(t){var n=t.getParam("forced_root_block","p")
return!1===n?"":!0===n?"p":n},G=tinymce.util.Tools.resolve("tinymce.util.Delay"),H=tinymce.util.Tools.resolve("tinymce.util.VK"),J=tinymce.util.Tools.resolve("tinymce.util.Tools"),K=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),X=tinymce.util.Tools.resolve("tinymce.dom.TextSeeker"),z=function(t,n){return{container:t,offset:n}},Q=function(t){return t.nodeType===Node.TEXT_NODE},Y=function(t,n,r){if(n&&t.isEmpty(n)&&!r(n)){var e=n.parentNode
t.remove(n),Y(t,e,r)}},Z=function(t,n,r,e){void 0===e&&(e=!0)
var o=n.startContainer.parentNode,a=n.endContainer.parentNode
n.deleteContents(),e&&!r(n.startContainer)&&(Q(n.startContainer)&&0===n.startContainer.data.length&&t.remove(n.startContainer),Q(n.endContainer)&&0===n.endContainer.data.length&&t.remove(n.endContainer),Y(t,o,r),o!==a&&Y(t,a,r))},$=function(t,n){var r=n.get(t)
return f(r)&&T(r).exists((function(t){return n=t,r="block",N.call(n,r)
var n,r}))},tt=function(t){return 0===t.start.length},nt=function(t,n){var r=v.from(t.dom.getParent(n.startContainer,t.dom.isBlock))
return""===F(t)?r.orThunk((function(){return v.some(t.getBody())})):r},rt=K.DOM,et=function(t){return function(n){return t===n?-1:0}},ot=function(t,n,r){if(Q(t)&&n>=0)return v.some(z(t,n))
var e=X(rt)
return v.from(e.backwards(t,n,et(t),r)).map((function(t){return z(t.container,t.container.data.length)}))},at=function(t,n,r){if(!Q(t))return v.none()
var e=t.textContent
if(n>=0&&n<=e.length)return v.some(z(t,n))
var o=X(rt)
return v.from(o.backwards(t,n,et(t),r)).bind((function(t){var e=t.container.data
return at(t.container,n+e.length,r)}))},it=function(t,n,r){if(!Q(t))return v.none()
var e=t.textContent
if(n<=e.length)return v.some(z(t,n))
var o=X(rt)
return v.from(o.forwards(t,n,et(t),r)).bind((function(t){return it(t.container,n-e.length,r)}))},ut=function(t,n,r,e,o){var a=X(t,function(t){return function(n){return t.isBlock(n)||k(["BR","IMG","HR","INPUT"],n.nodeName)||"false"===t.getContentEditable(n)}}(t))
return v.from(a.backwards(n,r,e,o))},ft=function(t,n,r){if(Q(n)&&(r<0||r>n.data.length))return[]
for(var e=[r],o=n;o!==t&&o.parentNode;){for(var a=o.parentNode,i=0;i<a.childNodes.length;i++)if(a.childNodes[i]===o){e.push(i)
break}o=a}return o===t?e.reverse():[]},ct=function(t,n,r,e,o){return{start:ft(t,n,r),end:ft(t,e,o)}},st=function(t,n){var r,e,o,a=n.slice(),i=a.pop()
return(r=a,e=function(t,n){return t.bind((function(t){return v.from(t.childNodes[n])}))},o=v.some(t),w(r,(function(t,n){o=e(o,t,n)})),o).bind((function(t){return Q(t)&&(i<0||i>t.data.length)?v.none():v.some({node:t,offset:i})}))},lt=function(t,n){return st(t,n.start).bind((function(r){var e=r.node,o=r.offset
return st(t,n.end).map((function(t){var n=t.node,r=t.offset,a=document.createRange()
return a.setStart(e,o),a.setEnd(n,r),a}))}))},dt=function(t,n,r){(function(t,n,r){if(Q(t)&&n>=t.length)return v.some(z(t,n))
var e=X(rt)
return v.from(e.forwards(t,n,et(t),r)).map((function(t){return z(t.container,0)}))})(n,0,n).each((function(e){var o=e.container
it(o,r.start.length,n).each((function(r){var e=t.createRng()
e.setStart(o,0),e.setEnd(r.container,r.offset),Z(t,e,(function(t){return t===n}))}))}))},mt=function(t,n){var r=t.dom,e=t.selection.getRng()
return nt(t,e).filter((function(n){var e=F(t),o=""===e&&r.is(n,"body")||r.is(n,e)
return null!==n&&o})).bind((function(t){var e=t.textContent
return function(t,n){var r=n.replace(" "," ")
return x(t,(function(t){return 0===n.indexOf(t.start)||0===r.indexOf(t.start)}))}(n,e).map((function(n){return J.trim(e).length===n.start.length?[]:[{pattern:n,range:ct(r.getRoot(),t,0,t,0)}]}))})).getOr([])},gt=function(t,n){if(0!==n.length){var r=t.selection.getBookmark()
w(n,(function(n){return function(t,n){var r=t.dom,e=n.pattern,o=lt(r.getRoot(),n.range).getOrDie("Unable to resolve path range")
return nt(t,o).each((function(n){"block-format"===e.type?$(e.format,t.formatter)&&t.undoManager.transact((function(){dt(t.dom,n,e),t.formatter.apply(e.format)})):"block-command"===e.type&&t.undoManager.transact((function(){dt(t.dom,n,e),t.execCommand(e.cmd,!1,e.value)}))})),!0}(t,n)})),t.selection.moveToBookmark(r)}},pt=0,ht=function(t,n){return t.create("span",{"data-mce-type":"bookmark",id:n})},vt=function(t,n){var r=t.createRng()
return r.setStartAfter(n.start),r.setEndBefore(n.end),r},yt=function(t,n,r){var e=lt(t.getRoot(),r).getOrDie("Unable to resolve path range"),o=e.startContainer,a=e.endContainer,i=0===e.endOffset?a:a.splitText(e.endOffset),u=0===e.startOffset?o:o.splitText(e.startOffset)
return{prefix:n,end:i.parentNode.insertBefore(ht(t,n+"-end"),i),start:u.parentNode.insertBefore(ht(t,n+"-start"),u)}},bt=function(t,n,r){Y(t,t.get(n.prefix+"-end"),r),Y(t,t.get(n.prefix+"-start"),r)},kt=function(t,n,r,e){var o,a=n.start
return ut(t,e.container,e.offset,(o=a,function(t,n){var r=t.data.substring(0,n),e=r.lastIndexOf(o.charAt(o.length-1)),a=r.lastIndexOf(o)
return-1!==a?a+o.length:-1!==e?e+1:-1}),r).bind((function(e){if(e.offset>=a.length){var o=t.createRng()
return o.setStart(e.container,e.offset-a.length),o.setEnd(e.container,e.offset),v.some(o)}var i=e.offset-a.length
return at(e.container,i,r).map((function(n){var r=t.createRng()
return r.setStart(n.container,n.offset),r.setEnd(e.container,e.offset),r})).filter((function(t){return t.toString()===a})).orThunk((function(){return kt(t,n,r,z(e.container,0))}))}))},Ot=function(t,n,r){var e=t.dom,o=e.getRoot(),a=r.pattern,i=r.position.container,u=r.position.offset
return at(i,u-r.pattern.end.length,n).bind((function(f){var c=ct(o,f.container,f.offset,i,u)
if(tt(a))return v.some({matches:[{pattern:a,startRng:c,endRng:c}],position:f})
var s=wt(t,r.remainingPatterns,f.container,f.offset,n),l=s.getOr({matches:[],position:f}),d=l.position
return function(t,n,r,e,o,a){if(void 0===a&&(a=!1),0===n.start.length&&!a){var i=t.createRng()
return i.setStart(r,e),i.setEnd(r,e),v.some(i)}return ot(r,e,o).bind((function(r){return kt(t,n,o,r).bind((function(t){if(a){if(t.endContainer===r.container&&t.endOffset===r.offset)return v.none()
if(0===r.offset&&t.endContainer.textContent.length===t.endOffset)return v.none()}return v.some(t)}))}))}(e,a,d.container,d.offset,n,s.isNone()).map((function(t){var n=function(t,n){return ct(t,n.startContainer,n.startOffset,n.endContainer,n.endOffset)}(o,t)
return{matches:l.matches.concat([{pattern:a,startRng:n,endRng:c}]),position:z(t.startContainer,t.startOffset)}}))}))},wt=function(t,n,r,e,o){var a=t.dom
return ot(r,e,a.getRoot()).bind((function(i){var u=a.createRng()
u.setStart(o,0),u.setEnd(r,e)
for(var f,c,s=u.toString(),l=0;l<n.length;l++){var d=n[l]
if(f=s,c=d.end,function(t,n,r){return""===n||t.length>=n.length&&t.substr(r,r+n.length)===n}(f,c,f.length-c.length)){var m=n.slice()
m.splice(l,1)
var g=Ot(t,o,{pattern:d,remainingPatterns:m,position:i})
if(g.isSome())return g}}return v.none()}))},Ct=function(t,n,r){t.selection.setRng(r),"inline-format"===n.type?w(n.format,(function(n){t.formatter.apply(n)})):t.execCommand(n.cmd,!1,n.value)},Et=function(t,r){var e,o,a=(e="mce_textpattern",o=(new Date).getTime(),e+"_"+Math.floor(1e9*Math.random())+ ++pt+String(o)),i=E(r,(function(r,e){var o=yt(t,a+"_end"+r.length,e.endRng)
return r.concat([n(n({},e),{endMarker:o})])}),[])
return E(i,(function(r,e){var o=i.length-r.length-1,u=tt(e.pattern)?e.endMarker:yt(t,a+"_start"+o,e.startRng)
return r.concat([n(n({},e),{startMarker:u})])}),[])},xt=function(t,n,r){var e=t.selection.getRng()
return!1===e.collapsed?[]:nt(t,e).bind((function(o){var a=e.startOffset-(r?1:0)
return wt(t,n,e.startContainer,a,o)})).fold((function(){return[]}),(function(t){return t.matches}))},Rt=function(t,n){if(0!==n.length){var r=t.dom,e=t.selection.getBookmark(),o=Et(r,n)
w(o,(function(n){var e=r.getParent(n.startMarker.start,r.isBlock),o=function(t){return t===e}
tt(n.pattern)?function(t,n,r,e){var o=vt(t.dom,r)
Z(t.dom,o,e),Ct(t,n,o)}(t,n.pattern,n.endMarker,o):function(t,n,r,e,o){var a=t.dom,i=vt(a,e),u=vt(a,r)
Z(a,u,o),Z(a,i,o)
var f={prefix:r.prefix,start:r.end,end:e.start},c=vt(a,f)
Ct(t,n,c)}(t,n.pattern,n.startMarker,n.endMarker,o),bt(r,n.endMarker,o),bt(r,n.startMarker,o)})),t.selection.moveToBookmark(e)}},Tt=function(t,n){var r=xt(t,n.inlinePatterns,!0)
r.length>0&&t.undoManager.transact((function(){Rt(t,r)}))},Pt=function(t,n,r){for(var e=0;e<t.length;e++)if(r(t[e],n))return!0
return!1},Nt=function(t,n){var r=[",",".",";",":","!","?"],e=[32]
t.on("keydown",(function(r){13!==r.keyCode||H.modifierPressed(r)||function(t,n){if(!t.selection.isCollapsed())return!1
var r=xt(t,n.inlinePatterns,!1),e=mt(t,n.blockPatterns)
return(e.length>0||r.length>0)&&(t.undoManager.add(),t.undoManager.extra((function(){t.execCommand("mceInsertNewLine")}),(function(){t.insertContent("\ufeff"),Rt(t,r),gt(t,e)
var n=t.selection.getRng(),o=ot(n.startContainer,n.startOffset,t.dom.getRoot())
t.execCommand("mceInsertNewLine"),o.each((function(n){var r=n.container
"\ufeff"===r.data.charAt(n.offset-1)&&(r.deleteData(n.offset-1,1),Y(t.dom,r.parentNode,(function(n){return n===t.dom.getRoot()})))}))})),!0)}(t,n.get())&&r.preventDefault()}),!0),t.on("keyup",(function(r){Pt(e,r,(function(t,n){return t===n.keyCode&&!1===H.modifierPressed(n)}))&&Tt(t,n.get())})),t.on("keypress",(function(e){Pt(r,e,(function(t,n){return t.charCodeAt(0)===n.charCode}))&&G.setEditorTimeout(t,(function(){Tt(t,n.get())}))}))}
t.add("textpattern",(function(t){var n=function(t){var n=t
return{get:function(){return n},set:function(t){n=t}}}(function(t){var n=t.getParam("textpattern_patterns",q,"array")
if(!f(n))return W("The setting textpattern_patterns should be an array"),{inlinePatterns:[],blockPatterns:[]}
var r=S(O(n,_))
return w(r.errors,(function(t){return W(t.message,t.pattern)})),L(r.values)}(t))
return Nt(t,n),function(t){return{setPatterns:function(n){var r=S(O(n,_))
if(r.errors.length>0){var e=r.errors[0]
throw new Error(e.message+":\n"+JSON.stringify(e.pattern,null,2))}t.set(L(r.values))},getPatterns:function(){return r(r([],O(t.get().inlinePatterns,U),!0),O(t.get().blockPatterns,U),!0)}}}(n)}))})()

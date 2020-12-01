!function(){"use strict"
var t,n,r,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(){return(o=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])
return t}).apply(this,arguments)},a=function(){},i=function(t){return function(){return t}},u=function(t){return t},f=i(!1),c=i(!0),s=function(){return l},l=(t=function(t){return t.isNone()},{fold:function(t,n){return t()},is:f,isSome:f,isNone:c,getOr:r=function(t){return t},getOrThunk:n=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:r,orThunk:n,map:s,each:a,bind:s,exists:f,forall:c,filter:s,equals:t,equals_:t,toArray:function(){return[]},toString:i("none()")}),d=function(t){var n=i(t),r=function(){return o},e=function(n){return n(t)},o={fold:function(n,r){return r(t)},is:function(n){return t===n},isSome:c,isNone:f,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:r,orThunk:r,map:function(n){return d(n(t))},each:function(n){n(t)},bind:e,exists:e,forall:e,filter:function(n){return n(t)?o:l},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(n){return n.is(t)},equals_:function(n,r){return n.fold(f,(function(n){return r(t,n)}))}}
return o},m={some:d,none:s,from:function(t){return null==t?l:d(t)}},g=function(t){return function(n){return e=typeof(r=n),(null===r?"null":"object"==e&&(Array.prototype.isPrototypeOf(r)||r.constructor&&"Array"===r.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(r)||r.constructor&&"String"===r.constructor.name)?"string":e)===t
var r,e}},p=g("string"),h=g("object"),v=g("array"),y=Array.prototype.slice,b=Array.prototype.indexOf,k=function(t,n){return r=t,e=n,-1<b.call(r,e)
var r,e},O=function(t,n){for(var r=t.length,e=new Array(r),o=0;o<r;o++){var a=t[o]
e[o]=n(a,o)}return e},w=function(t,n){for(var r=0,e=t.length;r<e;r++)n(t[r],r)},C=function(t,n){for(var r=[],e=0,o=t.length;e<o;e++){var a=t[e]
n(a,e)&&r.push(a)}return r},E=function(t,n,r){return function(t,n){for(var r=t.length-1;0<=r;r--)n(t[r])}(t,(function(t){r=n(r,t)})),r},x=function(t,n){for(var r=0,e=t.length;r<e;++r)if(!0!==n(t[r],r))return!1
return!0},R=Object.keys,T=Object.hasOwnProperty,N=(function(t){if(!v(t))throw new Error("cases must be an array")
if(0===t.length)throw new Error("there must be at least one case")
var n=[],r={}
w(t,(function(e,o){var a=R(e)
if(1!==a.length)throw new Error("one and only one name per case")
var i=a[0],u=e[i]
if(void 0!==r[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!v(u))throw new Error("case arguments must be an array")
n.push(i),r[i]=function(){var r=arguments.length
if(r!==u.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+u.length+" ("+u+"), got "+r)
for(var e=new Array(r),a=0;a<e.length;a++)e[a]=arguments[a]
return{fold:function(){if(arguments.length!==t.length)throw new Error("Wrong number of arguments to fold. Expected "+t.length+", got "+arguments.length)
return arguments[o].apply(null,e)},match:function(t){var r=R(t)
if(n.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+n.join(",")+"\nActual: "+r.join(","))
if(!x(n,(function(t){return k(r,t)})))throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+n.join(", "))
return t[i].apply(null,e)},log:function(t){console.log(t,{constructors:n,constructor:i,params:e})}}}}))}([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]),function(t){var n=[],r=[]
return w(t,(function(t){t.fold((function(t){n.push(t)}),(function(t){r.push(t)}))})),{errors:n,values:r}}),P=function(t){return{is:function(n){return t===n},isValue:c,isError:f,getOr:i(t),getOrThunk:i(t),getOrDie:i(t),or:function(n){return P(t)},orThunk:function(n){return P(t)},fold:function(n,r){return r(t)},map:function(n){return P(n(t))},mapError:function(n){return P(t)},each:function(n){n(t)},bind:function(n){return n(t)},exists:function(n){return n(t)},forall:function(n){return n(t)},toOptional:function(){return m.some(t)}}},S=function(t){return{is:f,isValue:f,isError:c,getOr:u,getOrThunk:function(t){return t()},getOrDie:function(){return n=String(t),function(){throw new Error(n)}()
var n},or:function(t){return t},orThunk:function(t){return t()},fold:function(n,r){return n(t)},map:function(n){return S(t)},mapError:function(n){return S(n(t))},each:a,bind:function(n){return S(t)},exists:f,forall:c,toOptional:m.none}},M={value:P,error:S,fromOption:function(t,n){return t.fold((function(){return S(n)}),P)}},A=function(t){return"inline-command"===t.type||"inline-format"===t.type},B=function(t){return"block-command"===t.type||"block-format"===t.type},D=function(t){return n=t,r=function(t,n){return t.start.length===n.start.length?0:t.start.length>n.start.length?-1:1},(e=y.call(n,0)).sort(r),e
var n,r,e},I=function(t){var n=function(n){return M.error({message:n,pattern:t})},r=function(r,e,o){if(void 0===t.format)return void 0!==t.cmd?p(t.cmd)?M.value(o(t.cmd,t.value)):n(r+" pattern has non-string `cmd` parameter"):n(r+" pattern is missing both `format` and `cmd` parameters")
var a=void 0
if(v(t.format)){if(!x(t.format,p))return n(r+" pattern has non-string items in the `format` array")
a=t.format}else{if(!p(t.format))return n(r+" pattern has non-string `format` parameter")
a=[t.format]}return M.value(e(a))}
if(!h(t))return n("Raw pattern is not an object")
if(!p(t.start))return n("Raw pattern is missing `start` parameter")
if(void 0===t.end)return void 0!==t.replacement?p(t.replacement)?0===t.start.length?n("Replacement pattern has empty `start` parameter"):M.value({type:"inline-command",start:"",end:t.start,cmd:"mceInsertContent",value:t.replacement}):n("Replacement pattern has non-string `replacement` parameter"):0===t.start.length?n("Block pattern has empty `start` parameter"):r("Block",(function(n){return{type:"block-format",start:t.start,format:n[0]}}),(function(n,r){return{type:"block-command",start:t.start,cmd:n,value:r}}))
if(!p(t.end))return n("Inline pattern has non-string `end` parameter")
if(0===t.start.length&&0===t.end.length)return n("Inline pattern has empty `start` and `end` parameters")
var e=t.start,o=t.end
return 0===o.length&&(o=e,e=""),r("Inline",(function(t){return{type:"inline-format",start:e,end:o,format:t}}),(function(t,n){return{type:"inline-command",start:e,end:o,cmd:t,value:n}}))},j=function(t){return"block-command"===t.type?{start:t.start,cmd:t.cmd,value:t.value}:"block-format"===t.type?{start:t.start,format:t.format}:"inline-command"===t.type?"mceInsertContent"===t.cmd&&""===t.start?{start:t.end,replacement:t.value}:{start:t.start,end:t.end,cmd:t.cmd,value:t.value}:"inline-format"===t.type?{start:t.start,end:t.end,format:1===t.format.length?t.format[0]:t.format}:void 0},_=function(t){return{inlinePatterns:C(t,A),blockPatterns:D(C(t,B))}},U="undefined"!=typeof window?window:Function("return this;")(),q=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
var r=U.console
r&&(r.error?r.error.apply(r,t):r.log.apply(r,t))},L=[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],V=function(t){var n=t.getParam("forced_root_block","p")
return!1===n?"":!0===n?"p":n},W=tinymce.util.Tools.resolve("tinymce.util.Delay"),F=tinymce.util.Tools.resolve("tinymce.util.VK"),G=tinymce.util.Tools.resolve("tinymce.util.Tools"),H=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),J=tinymce.util.Tools.resolve("tinymce.dom.TextSeeker"),K=function(t,n){return{container:t,offset:n}},X=function(t){return t.nodeType===Node.TEXT_NODE},z=function(t,n,r){var e
n&&t.isEmpty(n)&&!r(n)&&(e=n.parentNode,t.remove(n),z(t,e,r))},Q=function(t,n,r,e){void 0===e&&(e=!0)
var o=n.startContainer.parentNode,a=n.endContainer.parentNode
n.deleteContents(),e&&!r(n.startContainer)&&(X(n.startContainer)&&0===n.startContainer.data.length&&t.remove(n.startContainer),X(n.endContainer)&&0===n.endContainer.data.length&&t.remove(n.endContainer),z(t,o,r),o!==a&&z(t,a,r))},Y=function(t){return 0===t.start.length},Z=function(t,n){var r=m.from(t.dom.getParent(n.startContainer,t.dom.isBlock))
return""===V(t)?r.orThunk((function(){return m.some(t.getBody())})):r},$=H.DOM,tt=function(t){return function(n){return t===n?-1:0}},nt=function(t,n,r){if(X(t)&&0<=n)return m.some(K(t,n))
var e=J($)
return m.from(e.backwards(t,n,tt(t),r)).map((function(t){return K(t.container,t.container.data.length)}))},rt=function(t,n,r){if(!X(t))return m.none()
var e=t.textContent
if(0<=n&&n<=e.length)return m.some(K(t,n))
var o=J($)
return m.from(o.backwards(t,n,tt(t),r)).bind((function(t){var e=t.container.data
return rt(t.container,n+e.length,r)}))},et=function(t,n,r){if(!X(t))return m.none()
var e=t.textContent
if(n<=e.length)return m.some(K(t,n))
var o=J($)
return m.from(o.forwards(t,n,tt(t),r)).bind((function(t){return et(t.container,n-e.length,r)}))},ot=function(t,n,r){if(X(n)&&(r<0||r>n.data.length))return[]
for(var e=[r],o=n;o!==t&&o.parentNode;){for(var a=o.parentNode,i=0;i<a.childNodes.length;i++)if(a.childNodes[i]===o){e.push(i)
break}o=a}return o===t?e.reverse():[]},at=function(t,n,r,e,o){return{start:ot(t,n,r),end:ot(t,e,o)}},it=function(t,n){var r,e,o,a=n.slice(),i=a.pop()
return(r=a,e=function(t,n){return t.bind((function(t){return m.from(t.childNodes[n])}))},o=m.some(t),w(r,(function(t){o=e(o,t)})),o).bind((function(t){return X(t)&&(i<0||i>t.data.length)?m.none():m.some({node:t,offset:i})}))},ut=function(t,n){return it(t,n.start).bind((function(r){var e=r.node,o=r.offset
return it(t,n.end).map((function(t){var n=t.node,r=t.offset,a=document.createRange()
return a.setStart(e,o),a.setEnd(n,r),a}))}))},ft=function(t,n,r){(function(t,n,r){if(X(t)&&0>=t.length)return m.some(K(t,0))
var e=J($)
return m.from(e.forwards(t,0,tt(t),r)).map((function(t){return K(t.container,0)}))})(n,0,n).each((function(e){var o=e.container
et(o,r.start.length,n).each((function(r){var e=t.createRng()
e.setStart(o,0),e.setEnd(r.container,r.offset),Q(t,e,(function(t){return t===n}))}))}))},ct=function(t,n){var r=t.dom,e=t.selection.getRng()
return Z(t,e).filter((function(n){var e=V(t),o=""===e&&r.is(n,"body")||r.is(n,e)
return null!==n&&o})).bind((function(t){var e,o,a,i=t.textContent
return(e=n,a=(o=i).replace(" "," "),function(t,n){return function(t,n,r){for(var e=0,o=t.length;e<o;e++){var a=t[e]
if(n(a,e))return m.some(a)
if(r(a,e))break}return m.none()}(t,n,f)}(e,(function(t){return 0===o.indexOf(t.start)||0===a.indexOf(t.start)}))).map((function(n){return G.trim(i).length===n.start.length?[]:[{pattern:n,range:at(r.getRoot(),t,0,t,0)}]}))})).getOr([])},st=function(t,n){var r
0!==n.length&&(r=t.selection.getBookmark(),w(n,(function(n){return e=n,o=(r=t).dom,a=e.pattern,i=ut(o.getRoot(),e.range).getOrDie("Unable to resolve path range"),Z(r,i).each((function(t){"block-format"===a.type?function(t,n){var r,e=n.get(t)
return v(e)&&(0===(r=e).length?m.none():m.some(r[0])).exists((function(t){return n=t,T.call(n,"block")
var n}))}(a.format,r.formatter)&&r.undoManager.transact((function(){ft(r.dom,t,a),r.formatter.apply(a.format)})):"block-command"===a.type&&r.undoManager.transact((function(){ft(r.dom,t,a),r.execCommand(a.cmd,!1,a.value)}))})),1
var r,e,o,a,i})),t.selection.moveToBookmark(r))},lt=0,dt=function(t,n){return t.create("span",{"data-mce-type":"bookmark",id:n})},mt=function(t,n){var r=t.createRng()
return r.setStartAfter(n.start),r.setEndBefore(n.end),r},gt=function(t,n,r){var e=ut(t.getRoot(),r).getOrDie("Unable to resolve path range"),o=e.startContainer,a=e.endContainer,i=0===e.endOffset?a:a.splitText(e.endOffset),u=0===e.startOffset?o:o.splitText(e.startOffset)
return{prefix:n,end:i.parentNode.insertBefore(dt(t,n+"-end"),i),start:u.parentNode.insertBefore(dt(t,n+"-start"),u)}},pt=function(t,n,r){z(t,t.get(n.prefix+"-end"),r),z(t,t.get(n.prefix+"-start"),r)},ht=function(t,n,r,e){var o,a=n.start
return function(t,n,r,e,o){var a,i=J(t,(a=t,function(t){return a.isBlock(t)||k(["BR","IMG","HR","INPUT"],t.nodeName)||"false"===a.getContentEditable(t)}))
return m.from(i.backwards(n,r,e,o))}(t,e.container,e.offset,(o=a,function(t,n){var r=t.data.substring(0,n),e=r.lastIndexOf(o.charAt(o.length-1)),a=r.lastIndexOf(o)
return-1!==a?a+o.length:-1!==e?e+1:-1}),r).bind((function(e){if(e.offset>=a.length){var o=t.createRng()
return o.setStart(e.container,e.offset-a.length),o.setEnd(e.container,e.offset),m.some(o)}var i=e.offset-a.length
return rt(e.container,i,r).map((function(n){var r=t.createRng()
return r.setStart(n.container,n.offset),r.setEnd(e.container,e.offset),r})).filter((function(t){return t.toString()===a})).orThunk((function(){return ht(t,n,r,K(e.container,0))}))}))},vt=function(t,n,r){var e=t.dom,o=e.getRoot(),a=r.pattern,i=r.position.container,u=r.position.offset
return rt(i,u-r.pattern.end.length,n).bind((function(f){var c=at(o,f.container,f.offset,i,u)
if(Y(a))return m.some({matches:[{pattern:a,startRng:c,endRng:c}],position:f})
var s=yt(t,r.remainingPatterns,f.container,f.offset,n),l=s.getOr({matches:[],position:f}),d=l.position
return function(t,n,r,e,o,a){if(void 0===a&&(a=!1),0!==n.start.length||a)return nt(r,e,o).bind((function(r){return ht(t,n,o,r).bind((function(t){if(a){if(t.endContainer===r.container&&t.endOffset===r.offset)return m.none()
if(0===r.offset&&t.endContainer.textContent.length===t.endOffset)return m.none()}return m.some(t)}))}))
var i=t.createRng()
return i.setStart(r,e),i.setEnd(r,e),m.some(i)}(e,a,d.container,d.offset,n,s.isNone()).map((function(t){var n,r=at(o,(n=t).startContainer,n.startOffset,n.endContainer,n.endOffset)
return{matches:l.matches.concat([{pattern:a,startRng:r,endRng:c}]),position:K(t.startContainer,t.startOffset)}}))}))},yt=function(t,n,r,e,o){var a=t.dom
return nt(r,e,a.getRoot()).bind((function(i){var u=a.createRng()
u.setStart(o,0),u.setEnd(r,e)
for(var f,c,s,l,d,g=u.toString(),p=0;p<n.length;p++){var h=n[p]
if(f=g,s=void 0,l=c=h.end,d=(s=f).length-c.length,""===l||s.length>=l.length&&s.substr(d,d+l.length)===l){var v=n.slice()
v.splice(p,1)
var y=vt(t,o,{pattern:h,remainingPatterns:v,position:i})
if(y.isSome())return y}}return m.none()}))},bt=function(t,n,r){t.selection.setRng(r),"inline-format"===n.type?w(n.format,(function(n){t.formatter.apply(n)})):t.execCommand(n.cmd,!1,n.value)},kt=function(t,n,r){var e=t.selection.getRng()
return!1===e.collapsed?[]:Z(t,e).bind((function(o){var a=e.startOffset-(r?1:0)
return yt(t,n,e.startContainer,a,o)})).fold((function(){return[]}),(function(t){return t.matches}))},Ot=function(t,n){var r,e,a
0!==n.length&&(r=t.dom,e=t.selection.getBookmark(),a=function(t,n){var r,e=(r=(new Date).getTime(),"mce_textpattern_"+Math.floor(1e9*Math.random())+ ++lt+String(r)),a=E(n,(function(n,r){var a=gt(t,e+"_end"+n.length,r.endRng)
return n.concat([o(o({},r),{endMarker:a})])}),[])
return E(a,(function(n,r){var i=a.length-n.length-1,u=Y(r.pattern)?r.endMarker:gt(t,e+"_start"+i,r.startRng)
return n.concat([o(o({},r),{startMarker:u})])}),[])}(r,n),w(a,(function(n){var e,o,a,i,u,f=r.getParent(n.startMarker.start,r.isBlock),c=function(t){return t===f}
Y(n.pattern)?(e=t,o=n.pattern,a=n.endMarker,i=c,u=mt(e.dom,a),Q(e.dom,u,i),bt(e,o,u)):function(t,n,r,e,o){var a=t.dom,i=mt(a,e),u=mt(a,r)
Q(a,u,o),Q(a,i,o)
var f={prefix:r.prefix,start:r.end,end:e.start},c=mt(a,f)
bt(t,n,c)}(t,n.pattern,n.startMarker,n.endMarker,c),pt(r,n.endMarker,c),pt(r,n.startMarker,c)})),t.selection.moveToBookmark(e))},wt=function(t,n){var r=kt(t,n.inlinePatterns,!0)
0<r.length&&t.undoManager.transact((function(){Ot(t,r)}))},Ct=function(t,n,r){for(var e=0;e<t.length;e++)if(r(t[e],n))return!0}
e.add("textpattern",(function(t){var n,r,e=(n=function(t){var n=t.getParam("textpattern_patterns",L,"array")
if(!v(n))return q("The setting textpattern_patterns should be an array"),{inlinePatterns:[],blockPatterns:[]}
var r=N(O(n,I))
return w(r.errors,(function(t){return q(t.message,t.pattern),0})),_(r.values)}(t),r=n,{get:function(){return r},set:function(t){r=t}})
return function(t,n){var r=[",",".",";",":","!","?"],e=[32]
t.on("keydown",(function(r){13!==r.keyCode||F.modifierPressed(r)||!function(t,n){if(!t.selection.isCollapsed())return!1
var r=kt(t,n.inlinePatterns,!1),e=ct(t,n.blockPatterns)
return(0<e.length||0<r.length)&&(t.undoManager.add(),t.undoManager.extra((function(){t.execCommand("mceInsertNewLine")}),(function(){t.insertContent("\ufeff"),Ot(t,r),st(t,e)
var n=t.selection.getRng(),o=nt(n.startContainer,n.startOffset,t.dom.getRoot())
t.execCommand("mceInsertNewLine"),o.each((function(n){var r=n.container
"\ufeff"===r.data.charAt(n.offset-1)&&(r.deleteData(n.offset-1,1),z(t.dom,r.parentNode,(function(n){return n===t.dom.getRoot()})))}))})),!0)}(t,n.get())||r.preventDefault()}),!0),t.on("keyup",(function(r){Ct(e,r,(function(t,n){return t===n.keyCode&&!1===F.modifierPressed(n)}))&&wt(t,n.get())})),t.on("keypress",(function(e){Ct(r,e,(function(t,n){return t.charCodeAt(0)===n.charCode}))&&W.setEditorTimeout(t,(function(){wt(t,n.get())}))}))}(t,e),function(t){return{setPatterns:function(n){var r=N(O(n,I))
if(0<r.errors.length){var e=r.errors[0]
throw new Error(e.message+":\n"+JSON.stringify(e.pattern,null,2))}t.set(_(r.values))},getPatterns:function(){return function(){for(var t=0,n=0,r=arguments.length;n<r;n++)t+=arguments[n].length
var e=Array(t),o=0
for(n=0;n<r;n++)for(var a=arguments[n],i=0,u=a.length;i<u;i++,o++)e[o]=a[i]
return e}(O(t.get().inlinePatterns,j),O(t.get().blockPatterns,j))}}}(e)}))}()

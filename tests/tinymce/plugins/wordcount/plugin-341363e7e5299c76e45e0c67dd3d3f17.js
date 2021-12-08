(function(){"use strict"
var t,n=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=function(t){return t},r=function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])
return t}).apply(this,arguments)},o="[-'\\.‘’․﹒＇．]",u="[:··״‧︓﹕：]",c="[±+*/,;;։،؍٬߸⁄︐︔﹐﹔，；]",i="[0-9٠-٩٫۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹]",a="\\r",s="\\n",f="[\v\f\u2028\u2029]",g="[̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ऀ-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఁ-ఃా-ౄె-ైొ-్ౕౖౢౣಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣംഃാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳា-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈᧉᨗ-ᨛᩕ-ᩞ᩠-᩿᩼ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-᯦᮪-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ᷀-ᷦ᷼-᷿‌‍⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲꙼꙽꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-꣄꣠-꣱ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꨩ-ꨶꩃꩌꩍꩻꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︦ﾞﾟ]",l="[­؀-؃۝܏឴឵‎‏‪-‮⁠-⁤⁪-⁯\ufeff￹-￻]",d="[〱-〵゛゜゠-ヺー-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ﾝ]",p="[=_‿⁀⁔︳︴﹍-﹏＿∀-⋿<>]",h="[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]",C=0,v=1,y=2,w=3,m=4,W=5,E=6,x=7,R=8,b=9,S=10,F=11,j=12,A=13,B=[new RegExp("[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-׳ؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆༀཀ-ཇཉ-ཬྈ-ྌႠ-Ⴥა-ჺჼᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᯀ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〻〼ㄅ-ㄭㄱ-ㆎㆠ-ㆺꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐꞑꞠ-ꞩꟺ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),new RegExp(o),new RegExp(u),new RegExp(c),new RegExp(i),new RegExp(a),new RegExp(s),new RegExp(f),new RegExp(g),new RegExp(l),new RegExp(d),new RegExp(p),new RegExp("@")],D=new RegExp("^"+h+"$"),T=B,k=A,P=function(t){for(var n=k,e=T.length,r=0;r<e;++r){var o=T[r]
if(o&&o.test(t)){n=r
break}}return n},U=function(t){var n,e
return function(t,n){for(var e=t.length,r=new Array(e),o=0;o<e;o++){var u=t[o]
r[o]=n(u,o)}return r}(t,(n=P,e={},function(t){if(e[t])return e[t]
var r=n(t)
return e[t]=r,r}))},M=function(t,n){var e=t[n],r=t[n+1]
if(n<0||n>t.length-1&&0!==n)return!1
if(e===C&&r===C)return!1
var o=t[n+2]
if(e===C&&(r===y||r===v||r===j)&&o===C)return!1
var u=t[n-1]
return(e!==y&&e!==v&&r!==j||r!==C||u!==C)&&((e!==m&&e!==C||r!==m&&r!==C)&&((e!==w&&e!==v||r!==m||u!==m)&&((e!==m||r!==w&&r!==v||o!==m)&&(e!==R&&e!==b&&u!==R&&u!==b&&r!==R&&r!==b&&((e!==W||r!==E)&&(e===x||e===W||e===E||(r===x||r===W||r===E||(e!==S||r!==S)&&((r!==F||e!==C&&e!==m&&e!==S&&e!==F)&&((e!==F||r!==C&&r!==m&&r!==S)&&e!==j)))))))))},O=/^\s+$/,_=D,N=function(t){return"http"===t||"https"===t},$=function(t,n){var e=function(t,n){var e
for(e=n;e<t.length&&!O.test(t[e]);e++);return e}(t,n+1)
return"://"===t.slice(n+1,e).join("").substr(0,3)?e:n},z=function(t,n,e){e=r(r({},{includeWhitespace:!1,includePunctuation:!1}),e)
for(var o=[],u=[],c=0;c<t.length;c++){var i=n(t[c])
"\ufeff"!==i&&(o.push(t[c]),u.push(i))}return function(t,n,e,r){for(var o=[],u=[],c=0;c<e.length;++c)if(u.push(t[c]),M(e,c)){var i=n[c]
if((r.includeWhitespace||!O.test(i))&&(r.includePunctuation||!_.test(i))){var a=c-u.length+1,s=c+1,f=n.slice(a,s).join("")
if(N(f)){var g=$(n,c),l=t.slice(s,g)
Array.prototype.push.apply(u,l),c=g}o.push(u)}u=[]}return o}(o,u,U(u),e)},I=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),V=function(t,n){for(var e=n.getBlockElements(),r=n.getShortEndedElements(),o=function(t){return e[t.nodeName]||r[t.nodeName]},u=[],c="",i=new I(t,t);t=i.next();)3===t.nodeType?c+=t.data.replace(/\uFEFF/g,""):o(t)&&c.length&&(u.push(c),c="")
return c.length&&u.push(c),u},Z=function(t){return t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length},q=function(t,n){var r=function(t){return t.replace(/\u200B/g,"")}(V(t,n).join("\n"))
return z(r.split(""),e).length},G=function(t,n){var e=V(t,n).join("")
return Z(e)},H=function(t,n){var e=V(t,n).join("").replace(/\s/g,"")
return Z(e)},J=function(t,n){return function(){return n(t.getBody(),t.schema)}},K=function(t,n){return function(){return n(t.selection.getRng().cloneContents(),t.schema)}},L=function(t){return J(t,q)},Q=function(t,n){t.addCommand("mceWordCount",(function(){return function(t,n){t.windowManager.open({title:"Word Count",body:{type:"panel",items:[{type:"table",header:["Count","Document","Selection"],cells:[["Words",String(n.body.getWordCount()),String(n.selection.getWordCount())],["Characters (no spaces)",String(n.body.getCharacterCountWithoutSpaces()),String(n.selection.getCharacterCountWithoutSpaces())],["Characters",String(n.body.getCharacterCount()),String(n.selection.getCharacterCount())]]}]},buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}]})}(t,n)}))},X=tinymce.util.Tools.resolve("tinymce.util.Delay"),Y=function(t,n){(function(t,n){t.fire("wordCountUpdate",{wordCount:{words:n.body.getWordCount(),characters:n.body.getCharacterCount(),charactersWithoutSpaces:n.body.getCharacterCountWithoutSpaces()}})})(t,n)}
void 0===t&&(t=300),n.add("wordcount",(function(n){var e=function(t){return{body:{getWordCount:L(t),getCharacterCount:J(t,G),getCharacterCountWithoutSpaces:J(t,H)},selection:{getWordCount:K(t,q),getCharacterCount:K(t,G),getCharacterCountWithoutSpaces:K(t,H)},getCount:L(t)}}(n)
return Q(n,e),function(t){var n=function(){return t.execCommand("mceWordCount")}
t.ui.registry.addButton("wordcount",{tooltip:"Word count",icon:"character-count",onAction:n}),t.ui.registry.addMenuItem("wordcount",{text:"Word count",icon:"character-count",onAction:n})}(n),function(t,n,e){var r=X.debounce((function(){return Y(t,n)}),e)
t.on("init",(function(){Y(t,n),X.setEditorTimeout(t,(function(){t.on("SetContent BeforeAddUndo Undo Redo ViewUpdate keyup",r)}),0)}))}(n,e,t),e}))})()
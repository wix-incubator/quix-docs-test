(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return w});var r=n(0),i=n.n(r),a=n(209),o=n.n(a),s=(n(168),n(169),n(170)),l=n.n(s),c=n(211),d=n.n(c),u=n(171),f=n.n(u),p=n(172),h=n.n(p),m=n(173),g=n.n(m),y=n(159),b=n.n(y),v=n(160);t.default=function(e){var t=e.data,n=(t.footerLinks.html,t.hero.html),r=(t.copyright.html,t.logo.childImageSharp.fluid),a=b.a.headerTitle,s=b.a.headerSubTitle,c=b.a.siteUrl,u=b.a.siteTitle,p=b.a.siteDescription,m=b.a.siteLanguage;b.a.gitUrl,b.a.twitterUrl;return i.a.createElement(f.a,null,i.a.createElement(l.a,null,i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:"/logo.png",alt:a+" -- "+s,height:"70pt"})),i.a.createElement(h.a,{items:v.a})),i.a.createElement(d.a,null,i.a.createElement(o.a,{fluid:r,className:"image"}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),i.a.createElement(g.a,{url:c,language:m,title:u,description:p}))};var w="888080097"},159:function(e,t){var n="Gatsby Starter Kit",r={siteTitle:n+" - a series of GatsbyJS starters",siteTitlePostfix:" - "+n,siteDescription:n+" is a series starters: Minimal, Equipped, Themed, Website, Blog.",siteImage:"preview.jpg",siteLanguage:"en",headerTitle:""+n,headerSubTitle:"a series of starters for GatsbyJS",siteUrl:"https://github.com/greglobinski/gatsby-starter-kit",gitUrl:"http://github.com/"+"svitlanako",twitterUrl:"http://twitter.com/"+"svetlana_apr",pathPrefix:"/oss-gatsby-v2-documentation-portal-draft"};e.exports=r},160:function(e,t,n){"use strict";var r=n(161),i=n.n(r),a=n(174),o=n.n(a),s=n(166),l=n.n(s),c=n(167),d=n.n(c),u=[{label:"",to:"/welcome",icon:i.a},{label:"",to:"/content",icon:o.a},{label:"",to:"github.com",icon:d.a},{label:"",to:"twitter.com",icon:l.a}];t.a=u},209:function(e,t,n){"use strict";var r=n(19);t.__esModule=!0,t.default=void 0;var i,a=r(n(7)),o=r(n(43)),s=r(n(210)),l=r(n(86)),c=r(n(0)),d=r(n(2)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return!!f[n]||(f[n]=!0,!1)},h=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=null,y=function(){if(null!==g)return g;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return g=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<img "+o+s+t+n+a+i+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},v=function(e){var t=e.style,n=e.onLoad,r=(0,s.default)(e,["style","onLoad"]);return c.default.createElement("img",(0,l.default)({},r,{onLoad:n,style:(0,l.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};v.propTypes={style:d.default.object,onLoad:d.default.func};var w=function(e){function t(t){var n;n=e.call(this,t)||this;var r=!0,i=!0,a=!1;return!p(t)&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,a=!0),"undefined"==typeof window&&(r=!1,i=!1),n.state={isVisible:r,imgLoaded:i,IOSupported:a},n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},n.render=function(){var e,t=this,n=u(this.props),r=n.title,i=n.alt,a=n.className,o=n.outerWrapperClassName,s=n.style,d=void 0===s?{}:s,f=n.imgStyle,p=void 0===f?{}:f,h=n.placeholderStyle,m=void 0===h?{}:h,g=n.fluid,w=n.fixed,x=n.backgroundColor,S=n.Tag;e="boolean"==typeof x?"lightgray":x;var k=(0,l.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,m),_=(0,l.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(g){var E=g;return E.srcWebp&&E.srcSetWebp&&y()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),c.default.createElement(S,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===d.position?"initial":"relative"}},c.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},d),ref:this.handleRef},c.default.createElement(S,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&c.default.createElement(v,{alt:i,title:r,src:E.base64,style:k}),E.tracedSVG&&c.default.createElement(v,{alt:i,title:r,src:E.tracedSVG,style:k}),e&&c.default.createElement(S,{title:r,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement(v,{alt:i,title:r,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:_,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:i,title:r},E))}})))}if(w){var T=w,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},d);return"inherit"===d.display&&delete L.display,T.srcWebp&&T.srcSetWebp&&y()&&(T.src=T.srcWebp,T.srcSet=T.srcSetWebp),c.default.createElement(S,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===d.position?"initial":"relative"}},c.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef},T.base64&&c.default.createElement(v,{alt:i,title:r,src:T.base64,style:k}),T.tracedSVG&&c.default.createElement(v,{alt:i,title:r,src:T.tracedSVG,style:k}),e&&c.default.createElement(S,{title:r,style:{backgroundColor:e,width:T.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:T.height}}),this.state.isVisible&&c.default.createElement(v,{alt:i,title:r,width:T.width,height:T.height,srcSet:T.srcSet,src:T.src,style:_,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:i,title:r,width:T.width,height:T.height},T))}})))}return null},t}(c.default.Component);w.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var x=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});w.propTypes={resolutions:x,sizes:S,fixed:x,fluid:S,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),outerWrapperClassName:d.default.oneOfType([d.default.string,d.default.object]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,position:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,Tag:d.default.string};var k=w;t.default=k},210:function(e,t,n){var r=n(85);e.exports=function(e,t){if(null==e)return{};var n,i,a=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),i=s(n(2)),a=n(84),o=s(n(212));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.html,n=e.children,i=e.themeStyle,s=void 0===i?o.default:i,l=e.customStyle,c=void 0===l?"":l;return r.default.createElement(r.default.Fragment,null,t?r.default.createElement("section",{className:(0,a.cx)(s,c),dangerouslySetInnerHTML:{__html:t}}):r.default.createElement("section",{className:"".concat(s)},n))};l.propTypes={children:i.default.node,html:i.default.string,themeStyle:i.default.string,customStyle:i.default.string};var c=l;t.default=c},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(84),a=(r=n(158))&&r.__esModule?r:{default:r},o=n(213);function s(){var e=c(["\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: strech;\n  padding: 0 10%;\n  text-align: center;\n\n  ",";\n\n  & .image {\n    max-width: 500px;\n    margin: 0 auto 20px;\n  }\n\n  h1 {\n    line-height: 1;\n    text-align: center;\n    font-size: 2.2em;\n    margin-bottom: 0.5em;\n    letter-spacing: -0.03em;\n    border-radius: 5px;\n\n    ",";\n  }\n\n  a {\n    align-items: center;\n    border-radius: 3px;\n    color: var(--firstActiveColor);\n    font-size: 1em;\n    display: inline-block;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 1em 2em;\n    background: #f9f9f9;\n    margin: 40px 0 0;\n    animation: "," 2s ease infinite;\n  }\n\n  @media (hover: hover) {\n    a:hover {\n      animation: none;\n      background: var(--firstActiveColor);\n      color: #fff;\n    }\n  }\n"]);return s=function(){return e},e}function l(){var e=c(["\n  from {\n    box-shadow: 0 0 0 2px white, 0 0 0 3px rgba(221,0,0, .5);\n  }\n  70% {\n    box-shadow: 0 0 0 6px white, 0 0 0 8px rgba(221, 0, 0, 0);\n  }\n  to {\n    box-shadow: none;\n  }\n"]);return l=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=(0,a.default)([768,1024].map(function(e){return"@media (min-width: ".concat(e,"px)")})),u=(0,o.keyframes)(l()),f=(0,i.css)(s(),d({minHeight:["calc(100vh - 300px)","calc(100vh - 280px)","calc(100vh - 260px)"]}),d({fontSize:["2.2em","2.6em","3em"]}),u);t.default=f},213:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(84),o=n(2),s=n.n(o),l=n(76),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,d=Object(l.a)(c.test.bind(c));var u,f="__EMOTION_THEMING__",p=((u={})[f]=s.a.object,u);var h=d,m=function(e){return"theme"!==e&&"innerRef"!==e},g=function(){return!0},y=function(e,t){for(var n=2,r=arguments.length;n<r;n++){var i=arguments[n],a=void 0;for(a in i)e(a)&&(t[a]=i[a])}return t};var b=function(e,t){var n=function(r,i){var a,o,s,l;void 0!==i&&(a=i.e,o=i.label,s=i.target,l=r.__emotion_forwardProp&&i.shouldForwardProp?function(e){return r.__emotion_forwardProp(e)&&i.shouldForwardProp(e)}:i.shouldForwardProp);var c=r.__emotion_real===r,d=void 0===a&&c&&r.__emotion_base||r;return"function"!=typeof l&&(l="string"==typeof d&&d.charAt(0)===d.charAt(0).toLowerCase()?h:m),function(){var u=arguments,h=c&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==o&&h.push("label:"+o+";"),void 0===a)if(null==u[0]||void 0===u[0].raw)h.push.apply(h,u);else{h.push(u[0][0]);for(var m=u.length,b=1;b<m;b++)h.push(u[b],u[0][b])}var v=function(n){var r,i;function o(){return n.apply(this,arguments)||this}i=n,(r=o).prototype=Object.create(i.prototype),r.prototype.constructor=r,r.__proto__=i;var c=o.prototype;return c.componentWillMount=function(){void 0!==this.context[f]&&(this.unsubscribe=this.context[f].subscribe(function(e){this.setState({theme:e})}.bind(this)))},c.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[f].unsubscribe(this.unsubscribe)},c.render=function(){var n=this.props,r=this.state;this.mergedProps=y(g,{},n,{theme:null!==r&&r.theme||n.theme||{}});var i="",o=[];return n.className&&(i+=void 0===a?e.getRegisteredStyles(o,n.className):n.className+" "),i+=void 0===a?e.css.apply(this,h.concat(o)):a,void 0!==s&&(i+=" "+s),t.createElement(d,y(l,{},n,{className:i,ref:n.innerRef}))},o}(t.Component);return v.displayName=void 0!==o?o:"Styled("+("string"==typeof d?d:d.displayName||d.name||"Component")+")",void 0!==r.defaultProps&&(v.defaultProps=r.defaultProps),v.contextTypes=p,v.__emotion_styles=h,v.__emotion_base=d,v.__emotion_real=v,v.__emotion_forwardProp=l,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(e,t){return n(e,void 0!==t?y(g,{},i,t):i).apply(void 0,h)},v}};return n};n.d(t,"flush",function(){return a.flush}),n.d(t,"hydrate",function(){return a.hydrate}),n.d(t,"cx",function(){return a.cx}),n.d(t,"merge",function(){return a.merge}),n.d(t,"getRegisteredStyles",function(){return a.getRegisteredStyles}),n.d(t,"injectGlobal",function(){return a.injectGlobal}),n.d(t,"keyframes",function(){return a.keyframes}),n.d(t,"css",function(){return a.css}),n.d(t,"sheet",function(){return a.sheet}),n.d(t,"caches",function(){return a.caches});var v=b(a,i.a);t.default=v}}]);
//# sourceMappingURL=component---src-pages-index-js-47626bac3c53c262a2cc.js.map
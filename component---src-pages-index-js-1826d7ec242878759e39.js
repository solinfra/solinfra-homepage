(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{210:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(215),s=a.n(n),o=a(204),l=a(76),d=a(79),c=a.n(d);function u(){return i.a.createElement("footer",{className:"bg-black small text-center text-white-50"},i.a.createElement("div",{className:"container"},"© 2019 - ",c.a.companyName))}function f(){return i.a.createElement("section",{className:"contact-section bg-black"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 mb-3 mb-md-0"},i.a.createElement("div",{className:"card py-4 h-100"},i.a.createElement("div",{className:"card-body text-center"},i.a.createElement("i",{className:"fas fa-map-marked-alt text-primary mb-2"}),i.a.createElement("h4",{className:"text-uppercase m-0"},"Address"),i.a.createElement("hr",{className:"my-4"}),i.a.createElement("div",{className:"small text-white"},c.a.address)))),i.a.createElement("div",{className:"col-md-6 mb-3 mb-md-0"},i.a.createElement("div",{className:"card py-4 h-100"},i.a.createElement("div",{className:"card-body text-center"},i.a.createElement("i",{className:"fas fa-envelope text-primary mb-2"}),i.a.createElement("h4",{className:"text-uppercase m-0"},"Email"),i.a.createElement("hr",{className:"my-4"}),i.a.createElement("div",{className:"small text-white"},i.a.createElement("a",{href:"mailto:"+c.a.email},c.a.email)))))),i.a.createElement("div",{className:"social d-flex justify-content-center"},c.a.socialLinks.map(function(e){var t=e.icon,a=e.url;return i.a.createElement("a",{key:a,href:a,className:"mx-2","aria-label":"link to "+a},i.a.createElement("i",{className:"fab "+t}))}))))}a(18);var m=a(224),g=a(205),p=a(225),h=a.n(p);var A=function(e){var t,a;function r(t,a){var r;return(r=e.call(this,t)||this).handleWidth=function(){var e=r.state.smallClass,t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t<992&&"shadow"!==e)e="shadow";else{if(!(t>=992&&"shadow-lg"!==e))return;e="shadow-lg"}return r.setState({smallClass:e})},r.state={smallClass:"shadow"},r}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.handleWidth),this.handleWidth()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWidth)},n.render=function(){var e=this.state.smallClass,t=this.props.data;return i.a.createElement("section",{id:"projects",className:"projects-section bg-light"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},i.a.createElement("div",{className:"col-xl-7 col-lg-7"},i.a.createElement(h.a,{className:"img-fluid mb-3 mb-lg-0",fadeIn:!0,fluid:t.dock.childImageSharp.fluid})),i.a.createElement("div",{className:"col-xl-5 col-lg-5"},i.a.createElement("div",{className:"featured-text text-center text-lg-left"},i.a.createElement("h4",null,c.a.projects[0].title),i.a.createElement("p",{className:"text-black-50 mb-0"},c.a.projects[0].body)))),c.a.projects.slice(1).map(function(t,a){return i.a.createElement("div",{key:t.title,className:"row justify-content-center no-gutters mb-5 mb-lg-0 project-checkers "+e},i.a.createElement("div",{className:"col-lg-6 text-center my-auto"},i.a.createElement("h2",{className:"text-black"},t.title)),i.a.createElement("div",{className:"col-lg-6 "+(a%2==1?"order-lg-first":"")},i.a.createElement("div",{className:"bg-black text-center h-100 project"},i.a.createElement("div",{className:"d-flex h-100"},i.a.createElement("div",{className:"project-text w-100 my-auto text-center "+(a%2==1?"text-lg-right":"text-lg-left")},i.a.createElement("p",{className:"mb-0 text-white-50"},t.body),i.a.createElement("hr",{className:"d-md-none d-lg-block mb-0 "+(a%2==1?"mr-0":"ml-0")}))))))})))},r}(r.Component),y=function(e){return i.a.createElement(g.b,{query:"201965502",render:function(t){return i.a.createElement(A,Object.assign({data:t},e))},data:m})},b=a(206);a.d(t,"query",function(){return v});var v="2325430485";t.default=function(e){var t=e.data;return i.a.createElement(o.a,null,i.a.createElement(b.a,null),i.a.createElement(s.a,{preserveStackingContext:!0,fluid:["linear-gradient(180deg,rgba(22,22,22,.3) 0,rgba(22,22,22,.7) 75%,#161616)",t.imgMasthead.childImageSharp.fluid]},i.a.createElement("header",{className:"masthead"},i.a.createElement("div",{className:"container d-flex h-100 align-items-center"},i.a.createElement("div",{className:"mx-auto text-center logo-title"},i.a.createElement("h1",{className:"mx-auto my-0 logo-font"},c.a.heading),i.a.createElement("h2",{className:"text-white-50 mx-auto mt-2 mb-5"},c.a.subHeading),i.a.createElement(l.a,{type:"id",element:"about"},i.a.createElement("a",{href:"#about",className:"btn btn-primary"},"About")))))),i.a.createElement("section",{id:"about",className:"about-section text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-8 mx-auto"},i.a.createElement("h2",{className:"text-white mb-4"},c.a.about.title),i.a.createElement("p",{className:"text-white-50"},c.a.about.body))))),i.a.createElement(y,null),i.a.createElement(s.a,{preserveStackingContext:!0,fluid:["linear-gradient(180deg,rgba(22,22,22,.1) 0,rgba(22,22,22,.5) 75%,rgba(22,22,22,1))",t.imgFooter.childImageSharp.fluid]},i.a.createElement("section",{id:"contact",className:"signup-section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-10 col-lg-8 mx-auto text-center"},i.a.createElement("i",{className:"far fa-envelope fa-2x mb-2 text-white"}),i.a.createElement("h2",{className:"text-white mb-5"},"Contact us!")))))),i.a.createElement(f,null),i.a.createElement(u,null))}},211:function(e,t,a){"use strict";a(216)("fixed",function(e){return function(){return e(this,"tt","","")}})},212:function(e,t,a){"use strict";a(36),a(146),a(147),a(17),a(211),a(58),a(8);var r=a(20);t.__esModule=!0,t.combineArray=t.filteredJoin=t.hashString=t.stringToArray=t.toKebabCase=t.toCamelCase=t.hasImageArray=t.convertProps=t.stripRemainingProps=t.isString=void 0;var i=r(a(142)),n=["resolutions","sizes","fixed","fluid","fadeIn","durationFadeIn","className","critical","crossOrigin","style","backgroundColor","onLoad","onError","onStartLoad","Tag","classId","preserveStackingContext"],s=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=s;t.stripRemainingProps=function(e){var t=(0,i.default)({},e);return n.forEach(function(e){Object.prototype.hasOwnProperty.call(t,e)&&delete t[e]}),t};t.convertProps=function(e){var t=(0,i.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t};t.hasImageArray=function(e){return e.fluid&&Array.isArray(e.fluid)||e.fixed&&Array.isArray(e.fixed)};t.toCamelCase=function(e){return s(e)&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()}).replace(/\s|\W+/g,"")};t.toKebabCase=function(e){return s(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!s(e)&&(e.includes(t)?e.split(t):[e])};t.hashString=function(e){return s(e)&&[].reduce.call(e,function(e,t){return 0|(e=(e<<5)-e+t.charCodeAt(0))},0)};t.filteredJoin=function(e){return e.filter(function(e){return""!==e}).join()};t.combineArray=function(e,t){return e.map(function(e,a){return e||t[a]})}},213:function(e,t,a){"use strict";a(220),a(211);var r=a(20);t.__esModule=!0,t.imageLoaded=t.imageReferenceCompleted=t.createDummyImageArray=t.initialBgImage=t.imageArrayPropsChanged=t.imagePropsChanged=t.getUrlString=t.getCurrentFromData=t.switchImageSettings=t.activateMultiplePictureRefs=t.activatePictureRef=t.createMultiplePictureRefs=t.createPictureRef=t.hasPictureElement=t.resetImageCache=t.activateCacheForMultipleImages=t.activateCacheForImage=t.allInImageCache=t.inImageCache=void 0;var i=r(a(142)),n=a(212),s=Object.create({}),o=function(e){var t=(0,n.convertProps)(e);if((0,n.hasImageArray)(t))return l(e);var a=t.fluid?t.fluid.src:t.fixed?t.fixed.src:null;return s[a]||!1};t.inImageCache=o;var l=function(e){var t=(0,n.convertProps)(e);return(t.fluid||t.fixed).every(function(e){return t.fluid?o({fluid:e}):o({fixed:e})})};t.allInImageCache=l;var d=function(e,t){var a=(0,n.convertProps)(e);if((0,n.hasImageArray)(a))return c(e);var r=a.fluid?a.fluid.src:a.fixed?a.fixed.src:null;r&&(s[r]=!0)};t.activateCacheForImage=d;var c=function(e){var t=(0,n.convertProps)(e);(t.fluid||t.fixed).forEach(function(e){t.fluid?d({fluid:e}):d({fixed:e})})};t.activateCacheForMultipleImages=c;t.resetImageCache=function(){for(var e in s)delete s[e]};var u=function(){return"undefined"!=typeof HTMLPictureElement||"undefined"==typeof window};t.hasPictureElement=u;var f=function(e,t){var a=(0,n.convertProps)(e);if("undefined"!=typeof window&&(void 0!==a.fluid||void 0!==a.fixed)){if((0,n.hasImageArray)(a))return m(e,t);var r=new Image;return r.onload=function(){return t()},r.complete||"function"!=typeof a.onLoad||r.addEventListener("load",a.onLoad),"function"==typeof a.onError&&r.addEventListener("error",a.onError),a.crossOrigin&&(r.crossOrigin=a.crossOrigin),a.critical||a.isVisible?g(r,a):r}return null};t.createPictureRef=f;var m=function(e,t){var a=(0,n.convertProps)(e);return(a.fluid||a.fixed).map(function(e){return a.fluid?f((0,i.default)({},a,{fluid:e}),t):f((0,i.default)({},a,{fixed:e}),t)})};t.createMultiplePictureRefs=m;var g=function(e,t,a){void 0===a&&(a=null);var r=(0,n.convertProps)(t);if("undefined"!=typeof window&&(void 0!==r.fluid||void 0!==r.fixed)){if((0,n.hasImageArray)(r))return p(e,t,a);var i=r.fluid?r.fluid:r.fixed;if(u()){var s=document.createElement("picture");if(a&&(s.width=e.width=a.offsetWidth,s.height=e.height=a.offsetHeight),i.srcSetWebp){var o=document.createElement("source");o.type="image/webp",o.srcset=i.srcSetWebp,o.sizes=i.sizes,s.appendChild(o)}s.appendChild(e),s}else a&&(e.width=a.offsetWidth,e.height=a.offsetHeight),e;return e.srcset=i.srcSet?i.srcSet:"",e.src=i.src?i.src:"",e}return null};t.activatePictureRef=g;var p=function(e,t,a){var r=(0,n.convertProps)(t);return e.map(function(e,t){return r.fluid?g(e,(0,i.default)({},r,{fluid:r.fluid[t]}),a):g(e,(0,i.default)({},r,{fixed:r.fixed[t]}),a)})};t.activateMultiplePictureRefs=p;t.switchImageSettings=function(e){var t,a,r=e.image,i=e.bgImage,s=e.imageRef,o=e.state,l=h({data:s,propName:"currentSrc"}),d=Array.isArray(r),c=Array.isArray(i)?(0,n.filteredJoin)(i):i;if(d){t=h({data:r,propName:"tracedSVG",returnArray:d}),t=(0,n.combineArray)(h({data:r,propName:"base64",returnArray:d}),t),t=(0,n.combineArray)(h({data:r,propName:"CSS_STRING",addUrl:!1,returnArray:d}),t),o.imgLoaded&&o.isVisible&&(t=l?(0,n.combineArray)(h({data:s,propName:"currentSrc",returnArray:d}),t):(0,n.combineArray)(h({data:s,propName:"src",returnArray:d}),t)),t=(0,n.combineArray)(t,i);var u=b(r.length);a=t=(0,n.combineArray)(t,u),t=(0,n.filteredJoin)(t)}else t="",r.tracedSVG&&(t=h({data:r,propName:"tracedSVG"})),r.base64&&!r.tracedSVG&&(t=h({data:r,propName:"base64"})),o.imgLoaded&&o.isVisible&&(t=l);var f=o.imageState%2;!d&&""===t&&o.imgLoaded&&o.isVisible&&s&&!s.currentSrc&&(t=h({data:s,propName:"src",checkLoaded:!1})),t||(t=c);var m={lastImage:c,nextImage:t,afterOpacity:f};return a&&(m.nextImageArray=a),m};var h=function(e){var t=e.data,a=e.propName,r=e.addUrl,i=void 0===r||r,s=e.returnArray,o=void 0!==s&&s,l=e.checkLoaded,d=void 0===l||l;if(!t||!a)return"";var c="tracedSVG"===a;if(Array.isArray(t)){var u=t.map(function(e){return"currentSrc"===a||"src"===a?d?v(e)&&e[a]||"":e[a]:"CSS_STRING"===a&&(0,n.isString)(e)?e:e[a]||""});return A({imageString:u,tracedSVG:c,addUrl:i,returnArray:o})}return("currentSrc"===a||"src"===a)&&a in t?A({imageString:d?v(t)&&t[a]||"":t[a],addUrl:i}):a in t?A({imageString:t[a],tracedSVG:c,addUrl:i}):""};t.getCurrentFromData=h;var A=function(e){var t=e.imageString,a=e.tracedSVG,r=void 0!==a&&a,i=e.addUrl,s=void 0===i||i,o=e.returnArray,l=void 0!==o&&o,d=e.hasImageUrls,c=void 0!==d&&d;if(Array.isArray(t)){var u=t.map(function(e){if(e){var t=-1!==e.indexOf("base64"),a=c||"http"===e.substr(0,4),i=e&&r?'"'+e+'"':e&&!t&&!r&&a?"'"+e+"'":e;return s&&e?"url("+i+")":i}return e});return l?u:(0,n.filteredJoin)(u)}var f=-1!==t.indexOf("base64"),m=c||"http"===t.substr(0,4),g=t&&r?'"'+t+'"':t&&!f&&!r&&m?"'"+t+"'":t;return t?s?"url("+g+")":g:""};t.getUrlString=A;t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||y(e,t)||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src};var y=function(e,t){var a=Array.isArray(e.fluid),r=Array.isArray(t.fluid),i=Array.isArray(e.fixed),n=Array.isArray(t.fixed);return!!(a&&!r||i&&!n||!a&&r||!i&&n)||(a&&r?e.fluid.length!==t.fluid.length||e.fluid.every(function(e,a){return e.src!==t.fluid[a].src}):i&&n?e.fixed.length!==t.fixed.length||e.fixed.every(function(e,a){return e.src!==t.fixed[a].src}):void 0)};t.imageArrayPropsChanged=y;t.initialBgImage=function(e,t){void 0===t&&(t=!0);var a=(0,n.convertProps)(e),r=a.fluid||a.fixed;if(!r)return"";var i,s=(0,n.hasImageArray)(a);if(s){if(i=h({data:r,propName:"tracedSVG",returnArray:s}),i=(0,n.combineArray)(h({data:r,propName:"base64",returnArray:s}),i),i=(0,n.combineArray)(h({data:r,propName:"CSS_STRING",addUrl:!1,returnArray:s}),i),t){var o=b(r.length);i=(0,n.combineArray)(i,o)}}else i="",r.tracedSVG&&(i=h({data:r,propName:"tracedSVG"})),r.base64&&!r.tracedSVG&&(i=h({data:r,propName:"base64"}));return i};var b=function(e){var t=A({imageString:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});return Array(e).fill(t)};t.createDummyImageArray=b;t.imageReferenceCompleted=function(e){return!!e&&(Array.isArray(e)?e.every(function(e){return v(e)}):v(e))};var v=function(e){return!!e&&(e.complete&&0!==e.naturalWidth&&0!==e.naturalHeight)};t.imageLoaded=v},215:function(e,t,a){"use strict";a(58),a(8),a(17),a(211);var r=a(20);t.__esModule=!0,t.default=void 0;var i=r(a(143)),n=r(a(142)),s=r(a(78)),o=r(a(77)),l=r(a(82)),d=r(a(0)),c=r(a(45)),u=r(a(217)),f=a(212),m=a(213),g=a(222),p=a(223),h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,l.default)((0,s.default)(a),"cleanUpListeners",void 0),(0,l.default)((0,s.default)(a),"intersectionListener",function(){var e=(0,m.inImageCache)(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.imageRef=(0,m.activatePictureRef)(a.imageRef,a.props,a.selfRef),a.setState({isVisible:!0,imageState:a.state.imageState+1},function(){a.setState({imgLoaded:e,imgCached:!!a.imageRef.currentSrc,imageState:a.state.imageState+1})})});var r=!0,i=!1,o=t.fadeIn,d=(0,m.inImageCache)(t);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var c=!(t.critical&&!o),f=(0,g.fixClassName)(t),p=f[0],h=f[1];return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:o,hasNoScript:c,seenBefore:d,imageState:0,currentClassNames:p,addedClassName:h},a.backgroundStyles=(0,g.presetBackgroundStyles)((0,u.default)(t.className)),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a.imageRef=(0,m.createPictureRef)((0,n.default)({},t,{isVisible:r}),a.handleImageLoaded),a.bgImage=(0,m.initialBgImage)(t),a.selfRef=null,a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.backgroundStyles=(0,g.presetBackgroundStyles)((0,u.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,m.inImageCache)(this.props)}),this.props.critical&&(0,m.imageReferenceCompleted)(this.imageRef)&&this.handleImageLoaded();var e=(0,g.fixClassName)(this.props),t=e[0],a=e[1];this.setState({currentClassNames:t,addedClassName:a})},a.componentDidUpdate=function(e){var t=this;if((0,m.imagePropsChanged)(this.props,e)){var a=(0,m.inImageCache)(this.props),r=(0,g.fixClassName)(this.props),i=r[0],s=r[1];this.setState({isVisible:a||this.props.critical,imgLoaded:a,currentClassNames:i,addedClassName:s},function(){t.bgImage=(0,m.getCurrentFromData)({data:t.imageRef,propName:"currentSrc",returnArray:!0})||(0,m.getCurrentFromData)({data:t.imageRef,propName:"src",returnArray:!0}),t.imageRef=(0,m.createPictureRef)((0,n.default)({},t.props,{isVisible:t.state.isVisible}),t.handleImageLoaded)})}},a.componentWillUnmount=function(){this.imageRef&&(Array.isArray(this.imageRef)?this.imageRef.forEach(function(e){return e.onload=null}):this.imageRef.onload=null),this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){this.selfRef=e,this.state.IOSupported&&e&&(this.cleanUpListeners=(0,p.listenToIntersections)(e,this.intersectionListener))},a.handleImageLoaded=function(){(0,m.activateCacheForImage)(this.props),this.setState({imgLoaded:!0,imageState:this.state.imageState+1}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e,t,a=(0,g.fixOpacity)((0,f.convertProps)(this.props),this.props.preserveStackingContext),r=a.className,s=a.style,o=void 0===s?{}:s,l=a.fluid,c=a.fixed,u=a.backgroundColor,p=a.durationFadeIn,h=a.Tag,A=a.children,y=a.classId,b=void 0===y?r?"":Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7)+"_depr":y,v=(0,i.default)(a,["className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children","classId"]),S=(0,f.stripRemainingProps)(v),E="boolean"==typeof u?"lightgray":void 0!==u?u:"",C=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,I=this.state.imgLoaded?p+"ms":"0.25s",x=(0,n.default)({position:"relative"},o);if(!this.props.preserveStackingContext&&(x.opacity=.99),l)e=l,t=Array.isArray(l)?l[0]:l;else{if(!c)return null;e=c,x.width=e.width,x.height=e.height,x.display="inline-block","inherit"===o.display&&delete x.display,t=Array.isArray(c)?c[0]:c}var w=(0,m.switchImageSettings)({image:e,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=w.nextImageArray||w.nextImage||this.bgImage;var N=(0,g.createPseudoStyles)((0,n.default)({classId:b,className:this.state.currentClassNames,transitionDelay:I,bgColor:E,backgroundStyles:this.backgroundStyles,style:o,fadeIn:C},w)),R=(0,g.createNoScriptStyles)({image:e,bgColor:E,classId:b,className:this.state.currentClassNames,backgroundStyles:this.backgroundStyles,style:o}),k=""+(l&&"fluid")+(c&&"fixed")+"-"+JSON.stringify(t.srcSet);return d.default.createElement(h,(0,n.default)({className:""+(this.state.currentClassNames||"")+(b&&" gatsby-background-image-"+b)+" gatsby-image-wrapper",style:(0,n.default)({},x,{},this.backgroundStyles),ref:this.handleRef,key:k},S),d.default.createElement("style",{dangerouslySetInnerHTML:{__html:N}}),this.state.hasNoScript&&d.default.createElement("noscript",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:R}})),A)},t}(d.default.Component);h.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,Tag:"div",preserveStackingContext:!1};var A=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),y=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});h.propTypes={resolutions:c.default.oneOfType([A,c.default.arrayOf(c.default.oneOfType([A,c.default.string]))]),sizes:c.default.oneOfType([y,c.default.arrayOf(c.default.oneOfType([y,c.default.string]))]),fixed:c.default.oneOfType([A,c.default.arrayOf(c.default.oneOfType([A,c.default.string]))]),fluid:c.default.oneOfType([y,c.default.arrayOf(c.default.oneOfType([y,c.default.string]))]),fadeIn:c.default.oneOfType([c.default.string,c.default.bool]),durationFadeIn:c.default.number,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.oneOfType([c.default.object,c.default.array]),backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,classId:c.default.string,preserveStackingContext:c.default.bool};var b=h;t.default=b},216:function(e,t,a){var r=a(1),i=a(10),n=a(38),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},217:function(e,t,a){"use strict";a(18),a(19),a(12),a(13),a(218),a(58),a(8),a(46),t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.rulesForCssText=t.getStyle=void 0;var r=a(212),i=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],a=0;a<t.length;a++){var r=void 0;try{r=void 0!==t[a].rules?t[a].rules:void 0!==t[a].cssRules?t[a].cssRules:""}catch(s){}if(r){var i=Array.prototype.slice.call(r).reduce(function(t,a){return a.selectorText===e&&""===t?a:t},"");if(i){var n=i.cssText?i.cssText:i.style.cssText;return-1===n.indexOf(i.selectorText)?i.selectorText+"{"+n+"}":n}}}};t.getStyle=i;var n=function(e){if("undefined"!=typeof document&&e){var t=document.implementation.createHTMLDocument(""),a=document.createElement("style");return a.textContent=e,t.body.appendChild(a),a.sheet.cssRules}return{}};t.rulesForCssText=n;var s=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name||e[0].style.constructor.toString()){case"CSS2Properties":case"[object MSStyleCSSProperties]":Object.values(e[0].style).forEach(function(a){t[(0,r.toCamelCase)(a)]=e[0].style[a]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=s;var o=function(e){if((0,r.isString)(e)){var t=i("."+e),a=n(t);if(a.length>0&&void 0!==a[0].style)return Object.keys(s(a)).filter(function(e){return 0===e.indexOf("background")&&""!==a[0].style[e]}).reduce(function(e,t){return e[t]=a[0].style[t],e},{})}return{}};t.getBackgroundStylesForSingleClass=o;var l=function(e){if("undefined"!=typeof window){var t=(0,r.stringToArray)(e);if(t instanceof Array){var a=[];return t.forEach(function(e){return a.push(o(e))}),Object.assign.apply(Object,a)}return o(e)}return{}};t.default=l},218:function(e,t,a){var r=a(1),i=a(219)(!1);r(r.S,"Object",{values:function(e){return i(e)}})},219:function(e,t,a){var r=a(9),i=a(39),n=a(40),s=a(59).f;e.exports=function(e){return function(t){for(var a,o=n(t),l=i(o),d=l.length,c=0,u=[];d>c;)a=l[c++],r&&!s.call(o,a)||u.push(e?[a,o[a]]:o[a]);return u}}},220:function(e,t,a){var r=a(1);r(r.P,"Array",{fill:a(221)}),a(105)("fill")},221:function(e,t,a){"use strict";var r=a(22),i=a(145),n=a(21);e.exports=function(e){for(var t=r(this),a=n(t.length),s=arguments.length,o=i(s>1?arguments[1]:void 0,a),l=s>2?arguments[2]:void 0,d=void 0===l?a:i(l,a);d>o;)t[o++]=e;return t}},222:function(e,t,a){"use strict";a(12),a(13),a(8),a(19),a(17),a(106),a(211);var r=a(20);t.__esModule=!0,t.createNoScriptStyles=t.createPseudoStyles=t.presetBackgroundStyles=t.fixOpacity=t.setTransitionStyles=t.kebabifyBackgroundStyles=t.escapeClassNames=t.fixClassName=t.createPseudoElement=t.resetComponentClassCache=t.activateCacheForComponentClass=t.inComponentClassCache=void 0;var i=r(a(142)),n=r(a(143)),s=a(212),o=a(213),l=Object.create({}),d=function(e){return l[e]||!1};t.inComponentClassCache=d;var c=function(e){e&&(l[e]=!0)};t.activateCacheForComponentClass=c;t.resetComponentClassCache=function(){for(var e in l)delete l[e]};var u=function(e,t,a){void 0===t&&(t=""),void 0===a&&(a=":before");var r=f(e),i=(0,s.stringToArray)(r),n="";return i instanceof Array&&i.length>0&&""!==i[0]&&(n="."+i.join(".")+a),""!==t&&(n+=(n&&",\n")+".gatsby-background-image-"+t+a),n};t.createPseudoElement=u;t.fixClassName=function(e){var t=e.className,a=e.addedClassName,r=void 0===a?"":a,i=(0,n.default)(e,["className","addedClassName"]),o=(0,s.convertProps)(i),l=d(t),u=o.fluid?Array.isArray(o.fluid)?o.fluid[0]:o.fluid:Array.isArray(o.fixed)?o.fixed[0]:o.fixed,f=r||Math.round(42*Math.random()),m=" gbi-"+(0,s.hashString)(u&&u.srcSet||t)+"-"+f,g=l?m:"",p=(""+(t||"")+(g||"")).trim();return!l&&c(t),[p,g]};var f=function(e){if(e){var t="undefined"!=typeof window&&window._gbiSpecialChars?window._gbiSpecialChars:"undefined"!=typeof __GBI_SPECIAL_CHARS__?__GBI_SPECIAL_CHARS__:":/",a=new RegExp("["+t+"]","g");return e.replace(a,"\\$&")}return e};t.escapeClassNames=f;var m=function(e){return(0,s.isString)(e)?e:e instanceof Object?Object.keys(e).filter(function(t){return 0===t.indexOf("background")&&""!==e[t]}).reduce(function(t,a){return""+t+(0,s.toKebabCase)(a)+": "+e[a]+";\n"},""):""};t.kebabifyBackgroundStyles=m;var g=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition: opacity 0.5s ease "+e+";":"transition: none;"};t.setTransitionStyles=g;t.fixOpacity=function(e){var t=(0,i.default)({},e);if(!t.preserveStackingContext)try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(a){}return t};t.presetBackgroundStyles=function(e){return(0,i.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},{},e)};t.createPseudoStyles=function(e){var t=e.classId,a=e.className,r=e.transitionDelay,n=e.lastImage,s=e.nextImage,o=e.afterOpacity,l=e.bgColor,d=e.fadeIn,c=e.backgroundStyles,f=e.style,p=u(a,t),h=u(a,t,":after");return"\n          "+p+",\n          "+h+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+(l&&"background-color: "+l+";")+"\n            "+g(r,d)+"\n            "+m((0,i.default)({},c,{},f))+"\n          }\n          "+p+" {\n            z-index: -100;\n            "+(o&&s?"background-image: "+s+";":"")+"\n            "+(!o&&n?"background-image: "+n+";":"")+"\n            opacity: "+o+"; \n          }\n          "+h+" {\n            z-index: -101;\n            "+(!o&&s?"background-image: "+s+";":"")+"\n            "+(o&&n?"background-image: "+n+";":"")+"\n          }\n        "};t.createNoScriptStyles=function(e){var t=e.classId,a=e.className,r=e.image;if(r){var i=Array.isArray(r),n=(0,o.getCurrentFromData)({data:r,propName:"src",checkLoaded:!1,addUrl:!1,returnArray:i}),l=(0,o.getUrlString)({imageString:n,hasImageUrls:!0,returnArray:i}),d="";if(i){var c=(0,o.getCurrentFromData)({data:r,propName:"CSS_STRING",addUrl:!1,returnArray:i});d=(0,s.filteredJoin)((0,s.combineArray)(l,c))}return"\n          "+u(a,t)+" {\n            opacity: 1;\n            background-image: "+(d||l)+";\n          }"}return""}},223:function(e,t,a){"use strict";var r;a(12),a(13),a(8),a(102),a(144),t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var i=new WeakMap,n=function(e){e.forEach(function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),i.delete(e.target),t())}})};t.callbackIO=n;var s=function(){return void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(n,{rootMargin:"200px"})),r};t.getIO=s;t.listenToIntersections=function(e,t){var a=s();return a?(a.observe(e),i.set(e,t),function(){a.unobserve(e),i.delete(e)}):function(){}}},224:function(e){e.exports=JSON.parse('{"data":{"dock":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDAAwICQoJBwwKCQoNDAwOER0TERAQESMZGxUdKiUsKyklKCguNEI4LjE/MigoOk46P0RHSktKLTdRV1FIVkJJSkf/2wBDAQwNDREPESITEyJHMCgwR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAZHyaRljQ//EABoQAAIDAQEAAAAAAAAAAAAAAAECAxESACH/2gAIAQEAAQUCRVoxmvejNjLFHly3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECERIhMWH/2gAIAQEABj8CLxtHKOJPY6m9lYxftH//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUFhkf/aAAgBAQABPyFipxXUgabB7FStPEqUQ2IIQbI5Pktm3q2n/9oADAMBAAIAAwAAABCzD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB8QAQABBAEFAAAAAAAAAAAAAAERACExQVFhcYGh8P/aAAgBAQABPxCJQEiFv7DV3E4vATM8R15omS3KLesUQ+4iWITTTk0AF2THhy0h3VQLlzGu1f/Z","aspectRatio":1.5,"src":"/static/cb4dc044f51a877bdb8a74d0bfa79b67/5fb3e/pr-dock.jpg","srcSet":"/static/cb4dc044f51a877bdb8a74d0bfa79b67/b95d3/pr-dock.jpg 342w,\\n/static/cb4dc044f51a877bdb8a74d0bfa79b67/f63f4/pr-dock.jpg 684w,\\n/static/cb4dc044f51a877bdb8a74d0bfa79b67/5fb3e/pr-dock.jpg 1368w","sizes":"(max-width: 1368px) 100vw, 1368px"}}}}}')},225:function(e,t,a){"use strict";a(12),a(13),a(8),a(102),a(144),a(211);var r=a(20);t.__esModule=!0,t.default=void 0;var i,n=r(a(78)),s=r(a(77)),o=r(a(143)),l=r(a(142)),d=r(a(0)),c=r(a(45)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,A=h&&window.IntersectionObserver,y=new WeakMap;function b(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)}).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(N,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},N=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&A&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,A=e.durationFadeIn,y=e.Tag,v=e.itemProp,C=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:R?1:0,transition:k?"opacity "+A+"ms":"none"},o),O="boolean"==typeof h?"lightgray":h,P={transitionDelay:A+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&P,{},o,{},f),B={title:t,alt:this.state.isVisible?"":a,style:T,className:m};if(g){var V=g,j=V[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),O&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&P)}),j.base64&&d.default.createElement(w,{src:j.base64,spreadProps:B,imageVariants:V,generateSources:E}),j.tracedSVG&&d.default.createElement(w,{src:j.tracedSVG,spreadProps:B,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,b(V),d.default.createElement(N,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:C,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:C},j,{imageVariants:V}))}}))}if(p){var _=p,M=_[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},O&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:O,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},k&&P)}),M.base64&&d.default.createElement(w,{src:M.base64,spreadProps:B,imageVariants:_,generateSources:E}),M.tracedSVG&&d.default.createElement(w,{src:M.tracedSVG,spreadProps:B,imageVariants:_,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,b(_),d.default.createElement(N,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:C,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:C},M,{imageVariants:_}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:k,sizes:L,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var O=R;t.default=O}}]);
//# sourceMappingURL=component---src-pages-index-js-1826d7ec242878759e39.js.map
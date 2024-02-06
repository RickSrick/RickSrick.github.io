"use strict";(self.webpackChunkrick_srick=self.webpackChunkrick_srick||[]).push([[197],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return f},M:function(){return L},P:function(){return k},S:function(){return H},_:function(){return l},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return g},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function g(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,y);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(w,i({},e)),r.createElement("noscript",null,r.createElement(w,i({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=w.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],x=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:N},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],O=new Set;let _,R;const q=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:u,class:g,onStartLoad:p,onLoad:m,onError:f}=e,h=l(e,T);const{width:y,height:b,layout:w}=n,v=d(y,b,w),{style:E,className:k}=v,L=l(v,j),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(u=g);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(C);if(R&&O.has(C))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;S.current&&(S.current.innerHTML=a(i({isLoading:!0,isLoaded:O.has(C),image:n},h)),O.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=l(S.current,C,O,s,p,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{O.has(C)&&R&&(S.current.innerHTML=R(i({isLoading:O.has(C),isLoaded:O.has(C),image:n},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},L,{style:i({},E,s,{backgroundColor:c}),className:k+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));A.propTypes=I,A.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,z);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const M=P((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:c="lazy",imgClassName:p,imgStyle:m,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=l(e,S);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),m=i({objectFit:y,objectPosition:b,backgroundColor:h},m);const{width:v,height:E,layout:N,images:I,placeholder:T,backgroundColor:j}=o,O=d(v,E,N),{style:_,className:R}=O,q=l(O,C),A={fallback:void 0,sources:[]};return I.fallback&&(A.fallback=i({},I.fallback,{srcSet:I.fallback.srcSet?x(I.fallback.srcSet):void 0})),I.sources&&(A.sources=I.sources.map((e=>i({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,i({},q,{style:i({},_,s,{backgroundColor:h}),className:R+(a?" "+a:"")}),r.createElement(f,{layout:N,width:v,height:E},r.createElement(k,i({},g(T,!1,N,v,E,j,y,b))),r.createElement(L,i({"data-gatsby-image-ssr":"",className:p},w,u("eager"===c,!1,A,c,m)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),D={src:s().string.isRequired,alt:N,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=D;const H=P(A);H.displayName="StaticImage",H.propTypes=D},8678:function(e,t,a){var r=a(7294),n=a(1883),s=a(8032);const i=[{url:"/",label:"Home"},{url:"/about",label:"About"},{url:"/blog",label:"Blog"}];t.Z=e=>{let{pageTitle:t,children:l}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:"nbar"},r.createElement("div",{className:"d-flex justify-content-center",style:{marginBottom:"0.5rem"}},r.createElement(n.Link,{to:"/"},r.createElement(s.S,{alt:"logo",src:"../images/icon.png",width:38,height:38,__imageData:a(8595)}))),r.createElement("ul",{className:"nav justify-content-center"},i.map((e=>r.createElement("li",{className:"nav-item"},r.createElement(n.Link,{activeClassName:"active",to:e.url,className:"nav-link"},e.label)))))),r.createElement("div",{className:"my-container"},r.createElement("main",null,l)))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,n.useStaticQuery)("3159585216");return r.createElement("title",null,t," | ",a.site.siteMetadata.title)}},8595:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#683898","images":{"fallback":{"src":"/static/53aa06cf17e4239d0dba6ffd09854e02/f2a56/icon.png","srcSet":"/static/53aa06cf17e4239d0dba6ffd09854e02/ebf64/icon.png 10w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/546b2/icon.png 19w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/f2a56/icon.png 38w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/67bac/icon.png 76w","sizes":"(min-width: 38px) 38px, 100vw"},"sources":[{"srcSet":"/static/53aa06cf17e4239d0dba6ffd09854e02/bd5c1/icon.webp 10w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/89d20/icon.webp 19w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/0852d/icon.webp 38w,\\n/static/53aa06cf17e4239d0dba6ffd09854e02/984aa/icon.webp 76w","type":"image/webp","sizes":"(min-width: 38px) 38px, 100vw"}]},"width":38,"height":38}')}}]);
//# sourceMappingURL=68d272213b899b8d29809b12e725b50561e24b00-980d46e262eea3cfdae3.js.map
(self.webpackChunkwik_ig=self.webpackChunkwik_ig||[]).push([[514,608],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5750:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Pe}});var r=n(7294),a=n(3905),o=n(6291),l=n(3938),i=n(6010),c=n(3773),s=n(3783),u=n(5537),d=n(7462),m=function(e){return r.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(4973),h=n(3366),f=n(6742),y=n(3919),v=n(8617),g="menuLinkText_1J2g",b=["items"],k=["item"],E=["item","onItemClick","activePath","level"],N=["item","onItemClick","activePath","level"],T=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},Z=(0,r.memo)((function(e){var t=e.items,n=(0,h.Z)(e,b);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(C,(0,d.Z)({key:t,item:e},n))})))}));function C(e){var t=e.item,n=(0,h.Z)(e,k);return"category"===t.type?0===t.items.length?null:r.createElement(_,(0,d.Z)({item:t},n)):r.createElement(S,(0,d.Z)({item:t},n))}function _(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=e.level,s=(0,h.Z)(e,E),u=n.items,m=n.label,p=n.collapsible,f=n.className,y=T(n,o),v=(0,c.uR)({initialState:function(){return!!p&&(!y&&n.collapsed)}}),b=v.collapsed,k=v.setCollapsed,N=v.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,c.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:y,collapsed:b,setCollapsed:k}),r.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":b},f)},r.createElement("a",(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&y},t[g]=!p,t)),onClick:p?function(e){e.preventDefault(),N()}:void 0,href:p?"#":void 0},s),m),r.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},r.createElement(Z,{items:u,tabIndex:b?-1:0,onItemClick:a,activePath:o,level:l+1})))}function S(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(0,h.Z)(e,N),s=t.href,u=t.label,m=t.className,p=T(t,a);return r.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},r.createElement(f.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,y.Z)(s)&&{onClick:n},l),(0,y.Z)(s)?u:r.createElement("span",null,u,r.createElement(v.Z,null))))}var j="sidebar_15mo",x="sidebarWithHideableNavbar_267A",O="sidebarHidden_2kNb",P="sidebarLogo_3h0W",w="menu_Bmed",I="menuWithAnnouncementBar_2WvA",L="collapseSidebarButton_1CGd",B="collapseSidebarButtonIcon_3E-R";function A(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",L),onClick:t},r.createElement(m,{className:B}))}function M(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return r.createElement("div",{className:(0,i.Z)(j,(t={},t[x]=p,t[O]=s,t))},p&&r.createElement(u.Z,{tabIndex:-1,className:P}),r.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",w,(n={},n[I]=d,n))},r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(Z,{items:o,activePath:a,level:1}))),h&&r.createElement(A,{onClick:l}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(Z,{items:n,activePath:a,onItemClick:function(){return t()},level:1}))};function F(e){return r.createElement(c.Cv,{component:D,props:e})}var R=r.memo(M),W=r.memo(F);function H(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(R,e),a&&r.createElement(W,e))}var z=n(9105),U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},V={Prism:n(7410).default,theme:U};function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}var J=/\r\n|\r|\n/,K=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},G=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},X=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=$({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=$({},n,{backgroundColor:null}),a};function q(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var Q=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),Y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?X(e.theme,e.language):void 0;return t.themeDict=n})),Y(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=$({},q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?$({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),Y(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),Y(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=$({},q(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?$({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),Y(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=G(u,d.type),d.alias&&(u=G(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(J),p=m.length;i.push({types:u,content:m[0]});for(var h=1;h<p;h++)K(i),c.push(i=[]),i.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return K(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),ee=Q;var te=n(7594),ne=n.n(te),re={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(5350),oe=function(){var e=(0,c.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||re,r=e.darkTheme||n;return t?r:n},le="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",ce="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="copyButton_Ue-o",de="codeBlockLines_39YC",me=/{([\d,-]+)}/,pe=["js","jsBlock","jsx","python","html"],he={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},fe=["highlight-next-line","highlight-start","highlight-end"],ye=function(e){void 0===e&&(e=pe);var t=e.map((function(e){var t=he[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+fe.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function ve(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,c.LU)().prism,s=(0,r.useState)(!1),u=s[0],m=s[1],h=(0,r.useState)(!1),f=h[0],y=h[1];(0,r.useEffect)((function(){y(!0)}),[]);var v=(0,c.bc)(a)||o,g=(0,r.useRef)(null),b=[],k=oe(),E=Array.isArray(t)?t.join(""):t;if(a&&me.test(a)){var N=a.match(me)[1];b=ne()(N).filter((function(e){return e>0}))}var T=null==n?void 0:n.split(" ").find((function(e){return e.startsWith("language-")})),Z=null==T?void 0:T.replace(/language-/,"");!Z&&l.defaultLanguage&&(Z=l.defaultLanguage);var C=E.replace(/\n$/,"");if(0===b.length&&void 0!==Z){for(var _,S="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ye(["js","jsBlock"]);case"jsx":case"tsx":return ye(["js","jsBlock","jsx"]);case"html":return ye(["js","jsBlock","html"]);case"python":case"py":return ye(["python"]);default:return ye()}}(Z),x=E.replace(/\n$/,"").split("\n"),O=0;O<x.length;){var P=O+1,w=x[O].match(j);if(null!==w){switch(w.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=P+",";break;case"highlight-start":_=P;break;case"highlight-end":S+=_+"-"+(P-1)+","}x.splice(O,1)}else O+=1}b=ne()(S),C=x.join("\n")}var I=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(C),m(!0),setTimeout((function(){return m(!1)}),2e3)};return r.createElement(ee,(0,d.Z)({},V,{key:String(f),theme:k,code:C,language:Z}),(function(e){var t=e.className,a=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.createElement("div",{className:(0,i.Z)(le,null==n?void 0:n.replace(/language-[^ ]+/,""))},v&&r.createElement("div",{style:a,className:ce},v),r.createElement("div",{className:(0,i.Z)(ie,Z)},r.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,se,"thin-scrollbar"),style:a},r.createElement("code",{className:de},o.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=l({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,d.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,d.Z)({key:t},c({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{ref:g,type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(ue,"clean-btn"),onClick:I},u?r.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var ge=n(6159),be="details_1VDD";function ke(e){var t=Object.assign({},e);return r.createElement(c.PO,(0,d.Z)({},t,{className:(0,i.Z)("alert alert--info",be,t.className)}))}var Ee=["mdxType","originalType"];var Ne={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,h.Z)(a,Ee));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(z.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(ve,e):r.createElement("code",e)},a:function(e){return r.createElement(f.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(ve,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ke,(0,d.Z)({},e,{summary:n}),a)},h1:(0,ge.Z)("h1"),h2:(0,ge.Z)("h2"),h3:(0,ge.Z)("h3"),h4:(0,ge.Z)("h4"),h5:(0,ge.Z)("h5"),h6:(0,ge.Z)("h6")},Te=n(4608),Ze="backToTopButton_35hR",Ce="backToTopButtonShow_18ls";function _e(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Se=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=_e(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var l=n<r;if(l||u(),n<300)a(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&a(!0)}else a(!1)}})),(0,c.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,Ze,(e={},e[Ce]=n,e)),type:"button",onClick:function(){return s()}})},je=n(5977),xe={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Oe(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,h=u.pluginId,f=u.version,y=s.sidebar,v=y?u.docsSidebars[y]:void 0,g=(0,r.useState)(!1),b=g[0],k=g[1],E=(0,r.useState)(!1),N=E[0],T=E[1],Z=(0,r.useCallback)((function(){N&&T(!1),k((function(e){return!e}))}),[N]);return r.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,c.os)(h,f)}},r.createElement("div",{className:xe.docPage},r.createElement(Se,null),v&&r.createElement("aside",{className:(0,i.Z)(xe.docSidebarContainer,(t={},t[xe.docSidebarContainerHidden]=b,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(xe.docSidebarContainer)&&b&&T(!0)}},r.createElement(H,{key:y,sidebar:v,path:s.path,onCollapse:Z,isHidden:N}),N&&r.createElement("div",{className:xe.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},r.createElement(m,{className:xe.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,i.Z)(xe.docMainContainer,(n={},n[xe.docMainContainerEnhanced]=b||!v,n))},r.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",xe.docItemWrapper,(o={},o[xe.docItemWrapperEnhanced]=b,o))},r.createElement(a.Zo,{components:Ne},d)))))}var Pe=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return(0,je.LX)(a.pathname,e)}));return l?r.createElement(r.Fragment,null,r.createElement(z.Z,null,r.createElement("html",{className:n.className})),r.createElement(Oe,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):r.createElement(Te.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(3366),a=n(7462),o=n(7294),l=n(6010),i=n(4973),c=n(3773),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,r.Z)(e,d),h=(0,c.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[u]=h,n[s]=!h,n)),id:m}),p.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(3938),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);
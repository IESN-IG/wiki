(self.webpackChunkwik_ig=self.webpackChunkwik_ig||[]).push([[758],{4724:function(e,t,n){var i={"./discord-action-row_20.cjs.entry.js":6824};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=4724},2311:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(7294),r=n(5944),o="centeredImage_tWp1";function s(e){var t=e.alt,n=e.src,s=e.className;return s||(s=o),n.startsWith("/")||(n="/"+n),n.startsWith("/wiki")||(n="/wiki"+n),i.createElement(r.Z,{className:s,img:n,alt:t})}},8944:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return h},default:function(){return D},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return b}});var i=n(7462),r=n(3366),o=n(7294),s=n(4137),a="grid_Gsa9";function c(e){var t=e.children;return o.createElement("section",{className:a},t)}var d=n(248);function u(){return o.createElement("div",null,"Loading...")}var l=function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))},m=function(e){return e.json()},p=function(e){return fetch("https://discordapp.com/api/v9/invites/"+e+"?with_counts=true").then(l).then(m)};function f(e){var t=e.inviteCode,n=e.title,r=void 0===n?void 0:n,s=e.verified,a=void 0!==s&&s,c=e.partnered,l=void 0!==c&&c;if(!t)throw new Error("No invite code provided");var m=(0,o.useState)(!0),f=m[0],v=m[1],k=(0,o.useState)({name:"",icon:"",url:"",members:0,online:0}),h=k[0],g=k[1];return(0,o.useEffect)((function(){p(t).then((function(e){g({name:e.guild.name,icon:"https://cdn.discordapp.com/icons/"+e.guild.id+"/"+e.guild.icon+".png",members:e.approximate_member_count,online:e.approximate_presence_count,url:"https://discordapp.com/invite/"+t}),v(!1)})).catch(console.warn)}),[]),f?o.createElement(u,null):o.createElement(d.Z$,(0,i.Z)({},h,{joinBtn:"Rejoindre",inviteTitle:r,verified:a,partnered:l}))}n(2311);var v=["components"],k={sidebar_position:1,title:"Introduction"},h=void 0,g={unversionedId:"discord/intro",id:"discord/intro",title:"Introduction",description:"Discord est un moyen de communication important au sein de la section Informatique de Gestion, et nous osons l'imaginer \xe9galement dans d'autres groupes \xe9tudiants.",source:"@site/docs/discord/intro.mdx",sourceDirName:"discord",slug:"/discord/intro",permalink:"/wiki/docs/discord/intro",editUrl:"https://github.com/section-ig/wiki/edit/main/docs/discord/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/wiki/docs/to-remove/tutorial-extras/translate-your-site"},next:{title:"Se connecter et se d\xe9connecter",permalink:"/wiki/docs/discord/bases/se-connecter-et-d\xe9connecter"}},b=[{value:"L&#39;int\xe9r\xeat de cette cat\xe9gorie",id:"lint\xe9r\xeat-de-cette-cat\xe9gorie",children:[],level:2},{value:"\xc9tudiant\xb7e \xe0 l&#39;IESN?",id:"\xe9tudiante-\xe0-liesn",children:[],level:2}],w={toc:b};function D(e){var t=e.components,n=(0,r.Z)(e,v);return(0,s.kt)("wrapper",(0,i.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Discord est un moyen de communication important au sein de la section Informatique de Gestion, et nous osons l'imaginer \xe9galement dans d'autres groupes \xe9tudiants."),(0,s.kt)("p",null,"Bien qu'actuellement non-officiel, le serveur de la section IG est peupl\xe9 d'\xe9tudiants de tous les blocs, mais \xe9galement de professeurs et d'alumni (les anciens)."),(0,s.kt)("h2",{id:"lint\xe9r\xeat-de-cette-cat\xe9gorie"},"L'int\xe9r\xeat de cette cat\xe9gorie"),(0,s.kt)("p",null,"Tu retrouveras plus loin dans ces articles de nombreuses anecdotes, conseils et informations qui, nous esp\xe9rons, t'aideront \xe0 mieux comprendre l'outil."),(0,s.kt)("p",null,"Cependant, si tu souhaites avoir des informations plus pr\xe9cises, nous te conseillons de te rendre sur ces diff\xe9rents sites:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://discord.com/developers"},"Discord Developer Portal"),", le portail d\xe9veloppeur officiel de Discord"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://blog.discord.com"},"Discord Blog"),", le blog officiel de Discord"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://support.discord.com/hc/fr"},"Discord Support"),", le centre d'aide officiel de Discord")),(0,s.kt)("h2",{id:"\xe9tudiante-\xe0-liesn"},"\xc9tudiant\xb7e \xe0 l'IESN?"),(0,s.kt)("p",null,"Tu es un\xb7e \xe9tudiant\xb7e \xe0 l'IESN et l'une des sections ci-dessous te semble famili\xe8re ?\nRejoins tes pairs, r\xe9clame ton r\xf4le et fais-toi une place au sein de la communaut\xe9!"),(0,s.kt)(c,{mdxType:"Grid"},(0,s.kt)(f,{inviteCode:"N8k7sgBdnn",title:"Serveur cr\xe9\xe9 en Septembre 2017",mdxType:"DiscordCard"}),(0,s.kt)(f,{inviteCode:"TtqWDvp",title:"Serveur cr\xe9\xe9 en Mars 2020",mdxType:"DiscordCard"})))}D.isMDXComponent=!0}}]);
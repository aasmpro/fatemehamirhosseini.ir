(this.webpackJsonpfatemehamirhosseini=this.webpackJsonpfatemehamirhosseini||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"name":"fatemehamirhosseini","version":"1.0.2","private":true,"dependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","query-string":"^7.0.1","react":"^17.0.2","react-dom":"^17.0.2","react-router-dom":"^5.2.0","react-scripts":"4.0.3"},"scripts":{"start":"react-scripts start","build:css":"NODE_ENV=production TAILWIND_MODE=build postcss src/assets/styles/main.css -o src/assets/styles/main.min.css --verbose","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","css":"TAILWIND_MODE=watch postcss src/assets/styles/main.css -o src/assets/styles/main.min.css --watch --verbose","deploy":"yarn run build:css && yarn run build && gh-pages -d build","gh-pages":"gh-pages -d build"},"eslintConfig":{"extends":["react-app"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"autoprefixer":"^10.3.1","cssnano":"^5.0.7","gh-pages":"^3.2.3","postcss":"^8.3.6","postcss-cli":"^8.3.1","precss":"^4.0.0","tailwindcss":"^3.0.0"}}')},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(21),o=c.n(s),l=c(9),i=c(4),r=c(2),a=c(17),d=a.name,x=(a.version,c(22)),u=function(){var e,t,c,n=localStorage.getItem("".concat(d));return"token ".concat(null===(e=JSON.parse(n))||void 0===e||null===(t=e.Store)||void 0===t||null===(c=t.user)||void 0===c?void 0:c.token)},j=function(e,t){return Object(x.stringifyUrl)({url:e,query:t},{skipNull:!0,skipEmptyString:!0})},m=function(e,t){return{method:e,timeout:5e4,headers:{Accept:"application/json",Authorization:u(),"Content-Type":"application/json"},body:"get"===e?null:JSON.stringify(t)}},h=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(s,o){fetch(j(t,n),m(e,c)).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){o(e)}))}))},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h("get",e,null,t)},f=function(e){return"".concat("https://fatemehamirhosseini.pythonanywhere.com").concat(e)},v={cover_letter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return b(f("/api/v1/content/cover-letter/"),{type:e})},languages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return b(f("/api/v1/content/languages/"),{type:e})},links:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return b(f("/api/v1/content/links/"),{type:e})},profile_image:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return b(f("/api/v1/content/profile-image/"),{type:e})},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return b(f("/api/v1/content/profile/"),{type:e})},resume_file:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return b(f("/api/v1/content/resume-file/"),{type:e})},sections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return b(f("/api/v1/content/sections/"),{type:e})},site_setting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return b(f("/api/v1/content/site-setting/"),{type:e})}},p=Object(n.createContext)(),O=function(e){return e.replace(/\s/g,"").toLowerCase()},g=c(0),N=function(){var e=Object(n.useContext)(p);return Object(g.jsx)("a",{href:window.location.origin,className:"cursor-pointer select-none",children:Object(g.jsx)("div",{className:"group w-[35px] h-[35px] max-w-[35px] max-h-[35px] min-w-[35px] min-h-[35px] bg-".concat(e.theme_color,"-300 rounded-full transition duration-300 hover:ring-2 hover:ring-").concat(e.theme_color,"-300 hover:bg-white"),children:Object(g.jsxs)("div",{className:"relative",children:[Object(g.jsx)("div",{className:"absolute font-extrabold text-3xl left-[4px] text-white transition duration-300 group-hover:text-".concat(e.theme_color,"-900"),children:"F"}),Object(g.jsx)("div",{className:"absolute font-extrabold text-3xl left-[13px] text-".concat(e.theme_color,"-900 transition duration-300 group-hover:text-").concat(e.theme_color,"-300"),children:"A"})]})})})},_=function(e){var t=e.items,c=Object(n.useContext)(p),s=Object(n.useState)({}),o=Object(i.a)(s,2),l=o[0],r=o[1];return Object(n.useEffect)((function(){v.resume_file().then((function(e){e.success?r(e.data):console.log(e.message)})).catch((function(e){console.log(e)}))}),[]),Object(g.jsxs)("div",{className:"flex flex-row py-6 justify-between items-center text-lg",children:[Object(g.jsx)(N,{}),t&&t.length<5?Object(g.jsx)("div",{className:"sm:flex sm:flex-row sm:space-x-2 md:space-x-8 hidden",children:null===t||void 0===t?void 0:t.map((function(e){return Object(g.jsx)("div",{className:"px-2 transition rounded-full duration-300 hover:ring-2 hover:ring-".concat(c.theme_color,"-300"),children:Object(g.jsx)("a",{href:"#".concat(O(e.title)),children:e.title})})}))}):null,Object(g.jsx)("div",{className:"bg-".concat(c.theme_color,"-300 cursor-pointer pl-1.5 pr-3 rounded-full transition duration-300 hover:ring-2 hover:ring-").concat(c.theme_color,"-300 hover:bg-white text-").concat(c.theme_color,"-900 whitespace-nowrap select-none"),children:null!==l&&void 0!==l&&l.url?Object(g.jsxs)("a",{href:f(l.url),target:"_blank",rel:"noreferrer",children:[Object(g.jsx)("i",{class:"fas fa-arrow-circle-down mr-2 text-".concat(c.theme_color,"-900")}),Object(g.jsx)("span",{className:"font-bold text-".concat(c.theme_color,"-900"),children:"Resume"})]}):Object(g.jsxs)("div",{onClick:function(){return window.print()},children:[Object(g.jsx)("i",{class:"fas fa-arrow-circle-down mr-2 text-".concat(c.theme_color,"-900")}),Object(g.jsx)("span",{className:"font-bold text-".concat(c.theme_color,"-900"),children:"Resume"})]})})]})},w=c(25),y=function(e){var t=e.children,c=Object(n.useContext)(p);return Object(g.jsx)(g.Fragment,{children:t?Object(w.a)(t).map((function(e){return Object(g.jsx)("span",{className:"transition duration-500 hover:text-".concat(c.theme_color,"-300 select-none"),children:e})})):null})},S=function(e){var t=e.image,c=e.first_name,s=e.last_name,o=e.title,l=e.links,i=Object(n.useContext)(p);return Object(g.jsxs)("div",{id:"Hero",className:"flex flex-row flex-wrap items-center justify-center pt-3",children:[Object(g.jsx)("div",{className:"w-[250px] h-[250px] min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] bg-".concat(i.theme_color,"-300 border-4 border-").concat(i.theme_color,"-300 rounded-full overflow-hidden mx-5 mb-10 flex flex-col justify-center"),children:Object(g.jsx)("img",{className:"w-[250px] h-[250px] min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] object-cover",alt:" ",src:f(t)})}),Object(g.jsxs)("div",{className:"font-extrabold mx-5 mb-10",children:[Object(g.jsx)("div",{className:"sm:text-7xl sm:-mb-6 sm:-mt-2 text-5xl -mb-3",children:Object(g.jsx)(y,{children:c})}),Object(g.jsx)("div",{className:"sm:text-7xl text-4xl",children:Object(g.jsx)(y,{children:s})}),Object(g.jsx)("div",{className:"sm:text-3xl text-xl",children:Object(g.jsx)(y,{children:o})}),Object(g.jsx)("div",{className:"font-bold flex flex-row flex-wrap",children:null===l||void 0===l?void 0:l.map((function(e){return Object(g.jsxs)("div",{className:"mt-2 bg-".concat(i.theme_color,"-300 cursor-pointer px-3 pt-0.5 sm:pt-0 rounded-full transition duration-300 hover:ring-2 hover:ring-").concat(i.theme_color,"-300 hover:bg-white text-").concat(i.theme_color,"-900 mr-1.5 whitespace-nowrap select-none"),children:[Object(g.jsx)("i",{className:"".concat(e.icon," mr-2 text-").concat(i.theme_color,"-900")}),Object(g.jsx)("a",{href:e.url,children:e.title})]})}))})]})]})},k=c(13),C=function(e){var t=e.title,c=e.association,s=e.location,o=e.from_date,l=e.to_date,i=e.description,r=e.bullets,a=Object(n.useContext)(p);return Object(g.jsxs)("div",{className:"py-2",children:[Object(g.jsxs)("div",{className:"flex sm:flex-row flex-col justify-between items-start",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"text-2xl font-bold text-".concat(a.theme_color,"-700"),children:t}),Object(g.jsx)("div",{className:"sm:text-xl text-lg font-semibold",children:c})]}),Object(g.jsxs)("div",{className:"sm:text-right text-sm -space-y-0.5",children:[Object(g.jsx)("div",{className:"text-".concat(a.theme_color,"-600"),children:o}),Object(g.jsx)("div",{className:"text-".concat(a.theme_color,"-600"),children:l}),Object(g.jsx)("div",{className:"text-".concat(a.theme_color,"-600"),children:s})]})]}),Object(g.jsxs)("div",{children:[i?Object(g.jsx)("div",{className:"pt-2",children:i.map((function(e){return Object(g.jsx)("p",{children:e})}))}):null,r?Object(g.jsx)("ul",{className:"list-disc pl-5 pt-2",children:r.map((function(e){return Object(g.jsx)("li",{children:e})}))}):null]})]})},E=function(e){var t=e.id,c=e.title,s=e.icon,o=e.items,l=Object(n.useContext)(p);return Object(g.jsxs)("div",{id:t,className:"sm:py-8 py-5",children:[Object(g.jsxs)("div",{className:"text-3xl font-extrabold pb-3",children:[Object(g.jsx)("i",{className:"".concat(s," mr-3 text-[28px] transition duration-500 hover:text-").concat(l.theme_color,"-300 select-none")}),Object(g.jsx)(y,{children:c})]}),Object(g.jsx)("div",{children:null===o||void 0===o?void 0:o.map((function(e){return Object(g.jsx)(C,Object(k.a)({},e))}))})]})},I=function(e){var t=e.children;return Object(g.jsx)("div",{className:"pt-5 pb-10 flex flex-col justify-center items-center",children:Object(g.jsx)("div",{className:"text-xs",children:t})})},D=function(e){var t=e.title,c=e.association,s=e.location,o=e.from_date,l=e.to_date,i=e.description,r=e.bullets,a=Object(n.useContext)(p);return Object(g.jsxs)("div",{className:"py-1.5",children:[Object(g.jsxs)("div",{className:"flex flex-row justify-between items-start",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"text-lg font-extrabold text-".concat(a.resume_color,"-700"),children:t}),Object(g.jsx)("div",{className:"text-md font-extrabold",children:c})]}),Object(g.jsxs)("div",{className:"text-right text-xs -space-y-0.5",children:[Object(g.jsx)("div",{className:"text-".concat(a.resume_color,"-700"),children:o}),Object(g.jsx)("div",{className:"text-".concat(a.resume_color,"-700"),children:l}),Object(g.jsx)("div",{className:"text-".concat(a.resume_color,"-700"),children:s})]})]}),Object(g.jsxs)("div",{children:[i?Object(g.jsx)("div",{className:"pt-1",children:i.map((function(e){return Object(g.jsx)("p",{children:e})}))}):null,r?Object(g.jsx)("ul",{className:"list-disc pl-5 pt-1",children:r.map((function(e){return Object(g.jsx)("li",{children:e})}))}):null]})]})},A=function(e){var t=e.title,c=e.icon,n=e.items;return Object(g.jsxs)("div",{className:"py-3",children:[Object(g.jsxs)("div",{className:"text-2xl font-extrabold pb-2",children:[Object(g.jsx)("i",{className:"".concat(c," mr-3 text-[22px] select-none")}),t]}),Object(g.jsx)("div",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(g.jsx)(D,Object(k.a)({},e))}))})]})},J=function(){var e=Object(n.useContext)(p),t=Object(n.useState)({}),c=Object(i.a)(t,2),s=c[0],o=c[1],l=Object(n.useState)({}),r=Object(i.a)(l,2),a=r[0],d=r[1],x=Object(n.useState)({}),u=Object(i.a)(x,2),j=u[0],m=u[1],h=Object(n.useState)([]),b=Object(i.a)(h,2),O=b[0],N=b[1],_=Object(n.useState)([]),w=Object(i.a)(_,2),y=w[0],S=w[1],k=Object(n.useState)([]),C=Object(i.a)(k,2),E=C[0],I=C[1];return Object(n.useEffect)((function(){v.profile_image("resume").then((function(e){e.success?o(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.profile("resume").then((function(e){e.success?d(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.cover_letter("resume").then((function(e){e.success?m(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.links("resume").then((function(e){e.success?N(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.sections("resume").then((function(e){e.success?S(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.languages("resume").then((function(e){e.success?I(e.data):console.log(e.message)})).catch((function(e){console.log(e)}))}),[]),Object(g.jsxs)("div",{className:"hidden print:block",children:[Object(g.jsxs)("div",{className:"flex flex-row flex-wrap items-start justify-between",children:[Object(g.jsxs)("div",{className:"flex flex-row flex-wrap items-start justify-start",children:[Object(g.jsx)("div",{className:"w-[140px] h-[140px] min-w-[140px] min-h-[140px] max-w-[140px] max-h-[140px] bg-".concat(e.resume_color,"-500 border-4 border-").concat(e.resume_color,"-500 rounded-full overflow-hidden flex flex-col justify-center"),children:Object(g.jsx)("img",{className:"w-[140px] h-[140px] min-w-[140px] min-h-[140px] max-w-[140px] max-h-[140px] object-cover",alt:" ",src:f(null===s||void 0===s?void 0:s.url)})}),Object(g.jsxs)("div",{className:"ml-6 mt-3",children:[Object(g.jsx)("div",{className:"text-3xl font-extrabold",children:null===a||void 0===a?void 0:a.first_name}),Object(g.jsx)("div",{className:"text-3xl font-extrabold",children:null===a||void 0===a?void 0:a.last_name}),Object(g.jsx)("div",{className:"text-xl font-bold mt-1",children:null===j||void 0===j?void 0:j.title})]})]}),Object(g.jsxs)("div",{className:"text-right text-sm mt-3",children:[null===O||void 0===O?void 0:O.map((function(t){return Object(g.jsxs)("div",{children:[Object(g.jsx)("a",{className:"text-".concat(e.resume_color,"-700 font-bold"),href:t.url,children:t.title}),Object(g.jsx)("i",{className:"".concat(t.icon," ml-2 text-").concat(e.resume_color,"-700")})]})})),null!==a&&void 0!==a&&a.birthday?Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"text-".concat(e.resume_color,"-700 font-bold"),children:null===a||void 0===a?void 0:a.birthday}),Object(g.jsx)("i",{className:"fas fa-calendar ml-2 text-".concat(e.resume_color,"-700")})]}):null,null!==a&&void 0!==a&&a.nationality?Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"text-".concat(e.resume_color,"-700 font-bold"),children:null===a||void 0===a?void 0:a.nationality}),Object(g.jsx)("i",{className:"fas fa-flag ml-2 text-".concat(e.resume_color,"-700")})]}):null]})]}),Object(g.jsx)("div",{className:"border-b-2 my-5 border-black"}),null===y||void 0===y?void 0:y.map((function(e){return Object(g.jsx)(A,{title:e.title,icon:e.icon,items:e.items})})),Object(g.jsxs)("div",{className:"py-3",children:[Object(g.jsxs)("div",{className:"text-2xl font-extrabold pb-2",children:[Object(g.jsx)("i",{className:"fas fa-language mr-3 text-[22px] select-none"}),"Languages"]}),Object(g.jsx)("div",{className:"flex flex-row",children:null===E||void 0===E?void 0:E.map((function(t){return Object(g.jsxs)("div",{className:"mr-16",children:[Object(g.jsx)("div",{className:"text-lg font-extrabold text-".concat(e.resume_color,"-700"),children:t.title}),Object(g.jsx)("div",{children:t.level})]})}))})]})]})},L=function(){var e=Object(n.useContext)(p),t=Object(n.useState)({}),c=Object(i.a)(t,2),s=c[0],o=c[1],l=Object(n.useState)({}),r=Object(i.a)(l,2),a=r[0],d=r[1],x=Object(n.useState)({}),u=Object(i.a)(x,2),j=u[0],m=u[1],h=Object(n.useState)([]),b=Object(i.a)(h,2),f=b[0],N=b[1],w=Object(n.useState)([]),y=Object(i.a)(w,2),k=y[0],C=y[1];return Object(n.useEffect)((function(){v.profile_image().then((function(e){e.success?o(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.profile().then((function(e){e.success?d(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.cover_letter().then((function(e){e.success?m(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.links().then((function(e){e.success?N(e.data):console.log(e.message)})).catch((function(e){console.log(e)})),v.sections().then((function(e){e.success?C(e.data):console.log(e.message)})).catch((function(e){console.log(e)}))}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"min-h-screen md:w-8/12 m-auto md:px-0 px-5 print:hidden",children:[Object(g.jsx)(_,{items:k}),Object(g.jsxs)("div",{className:"py-10",children:[Object(g.jsx)(S,{image:null===s||void 0===s?void 0:s.url,first_name:null===a||void 0===a?void 0:a.first_name,last_name:null===a||void 0===a?void 0:a.last_name,title:null===j||void 0===j?void 0:j.title,links:f}),null===k||void 0===k?void 0:k.map((function(e){return Object(g.jsx)(E,{id:O(e.title),title:e.title,icon:e.icon,items:e.items})}))]}),Object(g.jsx)(I,{children:null===e||void 0===e?void 0:e.footer})]}),Object(g.jsx)(J,{})]})},F=function(){var e=Object(n.useContext)(p);return Object(g.jsxs)("div",{className:"h-screen overflow-hidden flex flex-col justify-center items-center",children:[Object(g.jsxs)("div",{className:"flex-col justify-center items-center text-center w-[270px]",children:[Object(g.jsx)("div",{className:"text-9xl font-extrabold",children:"404"}),Object(g.jsx)("div",{className:"text-xl font-bold",children:"Nothing found and I have no idea what are you looking for!"})]}),Object(g.jsx)(l.b,{to:"/",className:"text-xl font-bold bg-".concat(e.theme_color,"-300 cursor-pointer px-3 mt-3 rounded-full transition duration-300 hover:ring-2 hover:ring-").concat(e.theme_color,"-300 hover:bg-white text-").concat(e.theme_color,"-900"),children:"Let's get back Home!"})]})},T=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){v.site_setting().then((function(e){e.success?(s(e.data),document.title=e.data.title):console.log(e.message)})).catch((function(e){console.log(e)}))}),[]),Object(g.jsx)(p.Provider,{value:c,children:Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{path:"/",exact:!0,component:L}),Object(g.jsx)(r.a,{path:"/*",component:F})]})})};c(50),c(51);o.a.render(Object(g.jsx)(l.a,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d2d63180.chunk.js.map
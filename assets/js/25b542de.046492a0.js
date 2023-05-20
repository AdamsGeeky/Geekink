"use strict";(self.webpackChunkGeek_ink=self.webpackChunkGeek_ink||[]).push([[242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||n;return a?i.createElement(m,o(o({ref:t},u),{},{components:a})):i.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const n={sidebar_position:3},o="Github",l={unversionedId:"basic/github",id:"basic/github",title:"Github",description:"Introduction to Github",source:"@site/docs/basic/github.mdx",sourceDirName:"basic",slug:"/basic/github",permalink:"/docs/basic/github",draft:!1,editUrl:"https://github.com/AdamsGeeky/docs/basic/github.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/docs/basic/git"},next:{title:"Programming basic",permalink:"/docs/basic/programming"}},s={},c=[{value:"Introduction to Github",id:"introduction-to-github",level:2},{value:"Git vs Github",id:"git-vs-github",level:2},{value:"1. git clone",id:"1-git-clone",level:2},{value:"2. git branch",id:"2-git-branch",level:2},{value:"3. git checkout",id:"3-git-checkout",level:2},{value:"4. git add",id:"4-git-add",level:2},{value:"5. git commit",id:"5-git-commit",level:2},{value:"6. git push",id:"6-git-push",level:2},{value:"7. git pull",id:"7-git-pull",level:2},{value:"8. git merge",id:"8-git-merge",level:2},{value:"9. git rebase",id:"9-git-rebase",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github"},"Github"),(0,r.kt)("h2",{id:"introduction-to-github"},"Introduction to Github"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GitHub is a web-based Git repository hosting service. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features."))),(0,r.kt)("h2",{id:"git-vs-github"},"Git vs Github"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Git is a version control system that lets you manage and keep track of your source code history.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GitHub is a cloud-based hosting service that lets you manage Git repositories.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you have open-source projects that use Git, then GitHub is designed to help you better manage them.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to work on a project with multiple people, GitHub makes it easy to collaborate with others.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project."))),(0,r.kt)("h2",{id:"1-git-clone"},"1. git clone"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone \n")),(0,r.kt)("h2",{id:"2-git-branch"},"2. git branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git branch\n")),(0,r.kt)("h2",{id:"3-git-checkout"},"3. git checkout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout\n")),(0,r.kt)("h2",{id:"4-git-add"},"4. git add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git add\n")),(0,r.kt)("h2",{id:"5-git-commit"},"5. git commit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git commit\n")),(0,r.kt)("h2",{id:"6-git-push"},"6. git push"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push\n")),(0,r.kt)("h2",{id:"7-git-pull"},"7. git pull"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git pull\n")),(0,r.kt)("h2",{id:"8-git-merge"},"8. git merge"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git merge\n")),(0,r.kt)("h2",{id:"9-git-rebase"},"9. git rebase"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase\n")))}g.isMDXComponent=!0}}]);
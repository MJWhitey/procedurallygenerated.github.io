(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3824)}])},3824:function(e,t,n){"use strict";let r,i,o,s,a;n.r(t),n.d(t,{default:function(){return er}});var l=n(5893),c=n(7294),d=n(9477);class h{constructor(e,t=" .:-=+*#%@",n={}){let r,i,o,s,a;let l=n.resolution||.1,c=n.scale||1,d=n.color||!1,h=n.alpha||!1,u=n.block||!1,m=n.invert||!1,p=n.strResolution||"low",g=document.createElement("div");g.style.cursor="default";let f=document.createElement("table");g.appendChild(f),this.setSize=function(t,n){r=t,i=n,e.setSize(t,n),function(){o=Math.floor(r*l),s=Math.floor(i*l),w.width=o,w.height=s,(a=e.domElement).style.backgroundColor&&(f.rows[0].cells[0].style.backgroundColor=a.style.backgroundColor,f.rows[0].cells[0].style.color=a.style.color),f.cellSpacing=0,f.cellPadding=0;let t=f.style;t.whiteSpace="pre",t.margin="0px",t.padding="0px",t.letterSpacing=C+"px",t.fontFamily=_,t.fontSize=y+"px",t.lineHeight=k+"px",t.textAlign="left",t.textDecoration="none"}()},this.render=function(t,n){e.render(t,n),function(e){x.clearRect(0,0,o,s),x.drawImage(j,0,0,o,s);let t=x.getImageData(0,0,o,s).data,n="";for(let e=0;e<s;e+=2){for(let r=0;r<o;r++){let i,s;let a=(e*o+r)*4,l=t[a],c=t[a+1],p=t[a+2],g=t[a+3];s=(.3*l+.59*c+.11*p)/255,0==g&&(s=1),i=Math.floor((1-s)*(v.length-1)),m&&(i=v.length-i-1);let f=v[i];(void 0===f||" "==f)&&(f="&nbsp;"),d?n+="<span style='color:rgb("+l+","+c+","+p+");"+(u?"background-color:rgb("+l+","+c+","+p+");":"")+(h?"opacity:"+g/255+";":"")+"'>"+f+"</span>":n+=f}n+="<br/>"}e.innerHTML='<tr><td style="display:block;width:'.concat(r,"px;height:").concat(i,'px;overflow:hidden">').concat(n,"</td></tr>")}(f)},this.domElement=g;let _="courier new, monospace",j=e.domElement,w=document.createElement("canvas");if(!w.getContext)return;let x=w.getContext("2d");if(!x.getImageData)return;let v=d?" CGO08@".split(""):" .,:;i1tfLCG08@".split("");t&&(v=t);let y=2/l*c,k=2/l*c,C=0;if("low"==p)switch(c){case 1:C=-1;break;case 2:case 3:C=-2.1;break;case 4:C=-3.1;break;case 5:C=-4.15}if("medium"==p)switch(c){case 1:C=0;break;case 2:C=-1;break;case 3:C=-1.04;break;case 4:case 5:C=-2.1}if("high"==p)switch(c){case 1:case 2:C=0;break;case 3:case 4:case 5:C=-1}}}var u=n(9106),m=n(3563),p=n.n(m),g=n(6486),f=n.n(g),_=n(6505),j=n.n(_),w={data:[{title:"Ready Attention Go",technology:["C#","Unity","Spine","iOS","Android"],thumbnail:"tint_blue_rago.png",body:"Tali Digital are a thereputic device company developing products that assess, \n      monitor and enhance cognitive function. Ready attention go is an attention assessment\n      and training / remediation application. The product takes the form of a fully narrated \n      collection of carefully targetted mini games, each designed to measure and incrementally\n      train cognitive capability in a range of attention skills.",agency:"TALi Digital",team:["Matthew Rose - Cheif Technology Officer","Jonothan Yuen - Creative Director, Lead Artist","Matthew White - Game Development Lead","Stewart Trezise - Senior Developer","Matthew Bowen - Senior Developer"],languages:"C#, Python, Javascript",frameworks:"Unity, AltUnityTest, DJango",software:"Spine, Adobe CC, VS Code",carousel:["/images/projects/rag/ready_attn_go_1.jpg","/images/projects/rag/ready_attn_go_2.jpg","/images/projects/rag/ready_attn_go_3.png","/images/projects/rag/ready_attn_go_4.png","/images/projects/rag/ready_attn_go_5.png","/images/projects/rag/ready_attn_go_6.jpg","/video/projects/rag/rago_elf_spine.mp4","/video/projects/rag/ready_attn_go_reel.mp4","/video/projects/rag/tali_auto_test.mp4"]},{title:"Full Tilt VR",technology:["C#","Unity","VR"],thumbnail:"tint_blue_fulltilt.png",body:"Swann Insurance approached CHE Proximity with a unique brief: To\n      create an event activation piece that would capture attention and\n      media and give them a platform from which to build brand affinity\n      and generate leads at their sponsored event, the Phillip Island\n      Moto GP. In response, we developed a bespoke VR experience that\n      put users right on the Phillip Island track for a hot lap.",agency:"CHE Proximity",team:["Tom McCubbin - Creative Director","Johan Hotaling - Producer","Matt White - Developer","Matt Rose - Solution Architect","Bob Watts - Solution Architect"],languages:"C#",frameworks:"Unity, SteamVR",software:"Visual Studio, Adobe CC",carousel:["/images/projects/fulltilt/fulltilt_1.jpg","/images/projects/fulltilt/fulltilt_2.jpg","/images/projects/fulltilt/fulltilt_3.jpg","/images/projects/fulltilt/fulltilt_4.jpg","/video/projects/fulltilt/full_tilt.mp4"]},{title:"JCBot Jacobsen",technology:["NodeJS","DialogFlow","Serverless","Facebook SDK"],thumbnail:"tint_blue_carlsberg.png",body:"In collaboration with Traffik Melbourne, CHE Proximity was tasked\n      with creating a promotional Chatbot for Carlsberg's 170 year\n      anniversary. The Facebook bot needed to be integrated with both\n      online and on-premises promotional content and persistent codes\n      that allowed customers access to particular prizes at specific\n      times on certain days, for the duration of the campaign. Users\n      could redeem prizes via the chatbot or at venues around Australia.",agency:"CHE Proximity",team:["Matt Rose - Python Developer / Solution Architect","Matt White - Python Developer / Solution Architect","Andrews Giamfi - Frontend Developer","David Cooper - Producer"],languages:"Javascript, Python",frameworks:"Dialogflow, Serverless, Facebook SDK",software:"VS Code, Adobe CC",carousel:["/images/projects/carlsberg/carlsberg_1.jpg","/images/projects/carlsberg/carlsberg_2.png","/video/projects/carlsberg/carlsberg.mp4"]},{title:"Black Mirror",technology:["NodeJS","Express","React","C#","Xamarin"],thumbnail:"tint_blue_blackmirror.png",body:"As an advertsing agency CHE Proximity have a keen appreciation for\n      good quality market research, product feedback and customer data.\n      To this end they desired a platform that would help them secure\n      this data that benefited both the customer and their clients.\n      Black Mirror was the result of a hackathon designed to provide a\n      solution to this problem. BlackMirror is a crowd sourced market\n      research application that lets users give feedback wherever they\n      are and get paid for their responses",agency:"CHE Proximity",team:["Leigh Rubin - Designer","Alex Best - Backend Developer, Solution Architect","Matt Rose - iOS Developer","Matt White - Android Developer"],languages:"C#, Javascript",frameworks:"NodeJS, Express, React, Xamarin",software:"Visual Studio, XCode, Android Studio, VS Code",carousel:["/images/projects/blackmirror/blackmirror_1.gif","/images/projects/blackmirror/blackmirror_2.png","/images/projects/blackmirror/blackmirror_3.png"]},{title:"Queue Jumper",technology:["NodeJS","ImpactJS","React"],thumbnail:"tint_blue_queuejumper.png",body:"The Bank of Melbourne 'Queue Jumper Game' was a promotional piece\n      created to engage users during the Melbourne Food and Wine\n      Festival. We used Impact JS and Node to create a skill based\n      generative infinite running game. Users could play the game on\n      Desktop or Mobile and high scores would put them in the draw for\n      prizes. We also built an outdoor interactive version using\n      gyroscopes and vests to coincide with the launch of the campaign.",agency:"DT Digital",team:["Sam Luke - Designer","Nick Crawford - Designer","Lee Spencer - Creative Direction","Andrew Grinter - Creative Direction","Emily Deacon - Producer","Daniel Mehin - Developer","Luke Deylen - Developer","Leigh Nguyen - Senior Developer","Matthew White - Senior Developer"],languages:"Javascript",frameworks:"NodeJS, ImpactJS, React",software:"VS Code, Adobe CC, Animate",carousel:["/images/projects/queuejumper/queue_jumper_1.png","/images/projects/queuejumper/queue_jumper_2.png","/images/projects/queuejumper/queue_jumper_3.png","/images/projects/queuejumper/queue_jumper_4.png"]},{title:"Vivid Festival",technology:["C#","Unity"],thumbnail:"tint_blue_vivid.png",body:"IBM approached DT to produce a data visualisation art piece to\n      coincide with the 2014 Sydney Vivid Festival. As part of a small\n      team we produced a reflected projection that displayed a\n      quantitative and flow representation of wifi and mobile data\n      activity within the festival. We utilised Unity 3d to render our\n      data visualisation within a 3d representation of Sydney.",agency:"DT Digital",team:["Callan Rowe - Designer","Tim Devine - Creative Technologist","Matthew White - Senior Developer"],languages:"C#",frameworks:"Unity",software:"Cinema 4d",carousel:["/images/projects/vivid/vivid_1.jpg"]},{title:"Westfield Generative Art",technology:["C#","Unity"],thumbnail:"tint_blue_westfield.png",body:"As part of a new shopping center fitout DT was tasked with\n      concepting and executing a connected series of procedurally\n      generated art screens throughout the center. During the following\n      weeks I was part of a team who concepted several iterations of a\n      proceduarally generated forest scene. The artwork pulled heavily\n      from fashion textiles and seasonal colours to build the scene. The\n      colour of the skies and the topology of the terrain would change\n      to reflect the time of year and therebby change throughout the\n      season.",agency:"DT Digital",team:["Callan Rowe - Designer","Tim Devine - Creative Technologist","Matthew White - Senior Developer"],languages:"C#",frameworks:"Unity",software:"Cinema 4d, Adobe CC",carousel:["/video/projects/westfield/westfield.mp4","/images/projects/westfield/westfield_1.jpg","/images/projects/westfield/westfield_2.jpg","/images/projects/westfield/westfield_3.jpg"]},{title:"Mazda Soft Top Gift Drop",technology:["NodeJS","ImpactJS","React"],thumbnail:"tint_blue_mazda.png",body:"As part of a Mazda Christmas campaign. CHE Proximity aimed to\n      create a simple mobile kids game designed to amuze your restless\n      christmas passengers during a long voyage. The game was sent out\n      to around 20k customers as part of a christmas promotion\n      successfully surpassed the clietns goals for uptake and\n      engagement. Being that the project was on a very tight deadline\n      and budget it was essential that we worked effectively from\n      concept to visual style and implementation.",agency:"CHE Proximity",team:["Matthew White - Lead Developer","Andrew Stewert - Animator / Developer","Patrik Fagard - Developer","Adam Hughes - Designer"],languages:"C#",frameworks:"Unity",software:"Cinema 4d, Adobe CC",carousel:["/images/projects/mazda/mazda_1.png","/images/projects/mazda/mazda_2.png","/images/projects/mazda/mazda_3.png","/video/projects/mazda/mazda.mp4"]},{title:"Wonderwall",technology:["Flash","Actionscript","Telentice"],thumbnail:"tint_blue_wonderwall.png",body:"The Wonderwall was built as an in-store reactive touch screen\n      interface and display advertising system. Users and staff could\n      browse local business and banking information and email themselves\n      for later reference. The system itself was built to be deployed\n      across a wide network of locations and make it easy to make agile\n      changes to display messaging.",agency:"DT Digital",team:["Joe Crupi - Senior Designer","Tim Devine - Creative Technologist","Nicole Helmer - Producer","Matthew White - Developer","Jarrod Cope - Senior Developer"],languages:"Actionscript",frameworks:"Robotlegs MVC",software:"Adobe Flash, Adobe AIR, Telentice",carousel:["/images/projects/wonderwall/wonderwall_1.jpg","/images/projects/wonderwall/wonderwall_2.jpg","/images/projects/wonderwall/wonderwall_3.jpg"]}]},x=n(5518),v=n(990),y=n(4715),k=n(7079),C=n.n(k);let b="https://procedurallygenerated.net",S=b+"/images/";function N(e){let{data:t,onClick:n}=e,r=(0,c.useRef)(),i=(0,c.useRef)(),o=(0,c.useRef)(null),{contextSafe:s}=(0,y.V)({scope:r}),a=s(()=>{o.current&&o.current.kill();let e=v.ZP.timeline(),n=r.current&&r.current.getElementsByTagName("span");if(e.to(r.current,{yPercent:-100,duration:.2}),e.fromTo(i.current,{alpha:0},{alpha:1,duration:.2}),null==t?void 0:t.technology){if(e.fromTo("hr",{scaleX:0},{scaleX:1,duration:.2}),n&&(null==n?void 0:n.length)>0)for(let t of n)e.fromTo(t,{alpha:0,x:-10},{alpha:1,x:0,duration:.2},"-=0.1");o.current=e}}),d=s(()=>{o.current&&o.current.kill();let e=v.ZP.timeline(),t=r.current&&r.current.getElementsByTagName("span");if(e.to(r.current,{yPercent:0,duration:.4}),e.set("hr",{scaleX:0}),t&&(null==t?void 0:t.length)>0)for(let n of t)e.set(n,{alpha:0,x:-10});o.current=e});return(0,l.jsxs)("div",{className:C().workItem,style:{backgroundImage:"url(".concat(S+t.thumbnail,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},onMouseOver:()=>{a()},onMouseLeave:()=>{d()},onMouseDown:()=>{n&&n(t)},children:[(0,l.jsx)("div",{className:C().workItemTitle,children:(0,l.jsx)("h2",{children:t.title})}),(0,l.jsx)("div",{ref:r,className:C().workItemOverlay,children:(0,l.jsxs)("div",{className:C().workItemOverlayContainer,children:[(0,l.jsx)("h2",{ref:i,children:t.title}),(e=>{if(!e.technology)return;let t=[],n=0;for(let r=0;r<e.technology.length;r+=3){n++;let i=e.technology.slice(r,r+3);t.push(function(e,t){if(!e)return;let n=[],r=0;return e&&e.forEach(t=>{r++,n.push((0,l.jsx)("span",{className:C().workItemTech,children:t},"data_"+r)),r%3==0||r===e.length?n.push((0,l.jsx)("br",{},"break_"+r)):n.push((0,l.jsx)("span",{className:C().workItemTech,children:"-"},"dash_"+r))}),(0,l.jsx)("div",{className:C().workItemSpanContainer,children:n},t)}(i,n))}return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("hr",{className:C().workItemHr}),t]})})(t)]})})]})}var T=n(974),I=n.n(T),P=n(6066);n(9002),n(8798);var D=e=>{let{height:t=0,selected:n=null,onClose:r={},onChange:i=null}=e,o=(0,c.useRef)(null),s=(0,c.useRef)(null),a=(0,c.useRef)(null),d=(0,c.useRef)(null),[h,u]=(0,c.useState)({currentSlide:0}),[m,p]=(0,c.useState)(null),{contextSafe:g}=(0,y.V)({scope:o});(0,c.useEffect)(()=>{g(()=>{let e=v.ZP.timeline();e.set(o.current,{yPercent:100})})()},[]),(0,c.useEffect)(()=>{f().isFunction(i)&&_(),console.log("selected-project - selected : ",n),null!==n&&"none"!==n&&n!=m?(p(n),j()):null===n&&n!=m&&w()},[n]);let _=async()=>{var e,t;await new Promise(e=>setTimeout(e,800)),s.current&&(null===(e=s.current)||void 0===e?void 0:e.offsetHeight)>0&&i((null===(t=s.current)||void 0===t?void 0:t.offsetHeight)+60)},j=()=>{g(()=>{d.current&&d.current.kill();let e=v.ZP.timeline();e.set(o.current,{yPercent:100}),e.to(o.current,{yPercent:0,duration:.8,ease:"expo.Out"}),d.current=e})()},w=()=>{g(()=>{d.current&&d.current.kill();let e=v.ZP.timeline();e.set(o.current,{yPercent:0}),e.to(o.current,{yPercent:100,duration:.8,ease:"expo.inOut"}),e.call(()=>{u(e=>({...e,currentSlide:0})),p(null),f().isFunction(r)&&r()}),d.current=e})()};function x(e,t){if(!t||t.length<=0||void 0===t[0])return(0,l.jsx)(l.Fragment,{});let n=t.map(e=>(0,l.jsx)("li",{children:e},e));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"".concat(e,":")}),(0,l.jsx)("ul",{children:n})]})}return(0,l.jsx)("div",{style:{display:"block",height:t,overflow:"hidden",position:"absolute",width:"100%",pointerEvents:"none",zIndex:1},children:(0,l.jsx)("div",{ref:o,className:I().selectedProjectContainer,style:{height:t,pointerEvents:"auto"},children:(0,l.jsx)("div",{ref:s,className:I().selectedProjectComponent,children:m&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:I().selectedHeader,children:[(0,l.jsx)("button",{style:{flex:1},onClick:()=>{w()},children:(0,l.jsx)("img",{src:"".concat(b,"/images/close.png")})}),(0,l.jsx)("h1",{style:{flex:8},children:m.title}),(0,l.jsx)("div",{style:{flex:1}})]}),m.carousel&&m.carousel.length>=1&&(0,l.jsx)("div",{className:I().selectedCarouselContainer,onClick:()=>{a.current&&a.current.slickNext()},children:(0,l.jsx)(P.Z,{ref:a,dots:!0,arrows:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,beforeChange:(e,t)=>{u(e=>({...e,currentSlide:t}))},customPaging:e=>(0,l.jsx)("div",{className:e===h.currentSlide?I().selectedDotsSelected:I().selectedDots}),children:function(e){let t=[];return e.forEach(e=>{let n=e.match("^.*.(mov|xvid|mp4)$"),r=n&&n.length>=1;r?t.push((0,l.jsx)("div",{className:I().selectedCarousel,children:(0,l.jsxs)("video",{width:"auto",height:"100%",controls:!0,children:[(0,l.jsx)("source",{src:b+e}),"Your browser does not support HTML5 video."]})})):t.push((0,l.jsx)("div",{className:I().selectedCarousel,children:(0,l.jsx)("img",{src:"".concat(b).concat(e)})}))}),t}(m.carousel)})}),(0,l.jsx)("div",{className:I().selectedBody,children:(0,l.jsx)("p",{children:m.body})}),(0,l.jsxs)("div",{className:I().selectedDetails,children:[(0,l.jsxs)("div",{style:{flex:1},children:[x("Agency",[m.agency]),x("Team",m.team)]}),(0,l.jsxs)("div",{style:{flex:1},children:[x("Languages",[m.languages]),x("Frameworks",[m.frameworks]),x("Software",[m.software])]})]})]})})})})},E=n(3977),A=n(8887);class L{static get Instance(){return this._instance||(this._instance=new this)}Initialize(){(0,E.C6)().length||(0,E.ZF)({apiKey:"AIzaSyBkALx7_p6SgIgksmnrnFi-Uslc1iTGTUQ",authDomain:"procedurallygenerated-343c9.firebaseapp.com",projectId:"procedurallygenerated-343c9",storageBucket:"procedurallygenerated-343c9.appspot.com",messagingSenderId:"86287940207",appId:"1:86287940207:web:13dbb8f70e917a7cc5ab9a",measurementId:"G-9Z3M4XEV7G",debugMode:!0}),this.analytics=(0,A.IH)()}LogEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("LogEvent %s %s",e,t),(0,A.Kz)(this.analytics,e,t)}constructor(){}}function M(e){let{onItemClicked:t}=e,n=(e,n)=>{let r=[],i=0;if(e.forEach(e=>{i++;let n=(0,l.jsx)(N,{data:e,onClick:t},i);r.push(n)}),r.length<3)for(let e=0;e<3-r.length;e++)i++,r.push((0,l.jsx)("div",{className:j().spacerItem},i));return(0,l.jsx)("div",{className:j().gridRow,children:r},n)},r=(e=>{let t=[],r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];r.push(s),((o+1)%3==0||o===e.length-1)&&(i++,t.push(n(r,i)),r=[])}return(0,l.jsx)("div",{className:j().workGridContainer,children:t})})(w.data);return(0,l.jsx)("div",{className:j().gridContainer,children:r})}let R=(0,c.forwardRef)((e,t)=>{let n=(0,c.useRef)(0),r=(0,c.useRef)(null),[i,{entry:o}]=(0,u.S)(),s=o&&o.isIntersecting,[a,d]=(0,c.useState)({selected:null,workHeight:0}),h=()=>{var e;n.current=(null==r?void 0:null===(e=r.current)||void 0===e?void 0:e.offsetHeight)||0,d(e=>({...e,workHeight:n.current}))};(0,c.useEffect)(()=>{h(),x.tq||window.addEventListener("resize",h)},[]),(0,c.useEffect)(()=>{console.log("work - selected : ",e.showSelectedProject,a.selected),!1===e.showSelectedProject&&null!==a.selected&&(d(e=>({...e,selected:null})),f().isFunction(e.onClose)&&e.onClose())},[e.showSelectedProject]);let m=async t=>{if(L.Instance.LogEvent("work_item_clicked",{title:t.title}),x.tq&&await new Promise(e=>setTimeout(e,1200)),!s){let e=document.querySelector('a[href^="work"]');console.log("targetScroll : ",e),e&&e.scrollIntoView({behavior:"smooth"}),await new Promise(e=>setTimeout(e,500))}d(e=>({...e,selected:t})),f().isFunction(e.onChange)&&e.onChange()},p=async e=>{console.log("onSelectedProjectChanged - height : ",e),d(t=>({...t,workHeight:x.tq?e:e+60}))};return(0,l.jsxs)("div",{style:{overflow:"hidden"},children:[(0,l.jsx)("a",{ref:i,href:"work"}),(0,l.jsx)(D,{height:a.workHeight,selected:a.selected,onClose:()=>{d(e=>({...e,selected:null,workHeight:n.current})),f().isFunction(e.onClose)&&e.onClose()},onChange:p}),(0,l.jsx)("div",{style:{height:a.workHeight>0?a.workHeight:"auto",overflow:"hidden"},children:(0,l.jsx)("div",{ref:r,className:j().workContainer,children:(0,l.jsxs)("div",{className:j().componentContainer,children:[(0,l.jsx)("h1",{className:j().workContainerHr,children:"Work"}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{ref:t}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"Below you’ll find a few personal milestone projects I've been a part\n            of, showcasing some of the technologies and clients I've worked with\n            and the problems that were solved. This is a short list of examples,\n            so if you'd like more information feel free to get in touch at the\n            links below. All imagery and branding is the property of their\n            respective owners."})}),(0,l.jsx)(M,{onItemClicked:m})]})})})]})});R.displayName="Work";var H=n(3450),B=n.n(H);let z=(0,c.forwardRef)((e,t)=>{function n(e){L.Instance.LogEvent("menu_item_pressed",{title:e});let t=document.querySelector('a[href^="'+e+'"]');console.log("targetScroll : ",e,t),t&&t.scrollIntoView({behavior:"smooth"})}return(0,l.jsx)("div",{ref:t,id:"header",className:B().headerContainer,children:(0,l.jsxs)("div",{className:p().contentContainer,style:{width:e.width,height:e.height-30},children:[(0,l.jsx)("div",{style:{flex:1},children:(0,l.jsxs)("h2",{className:B().header,children:["Building technology",(0,l.jsx)("br",{})," products that deliver",(0,l.jsx)("br",{}),(0,l.jsx)("strong",{children:"meaningful"})," outcomes",(0,l.jsx)("br",{}),"for businesses and",(0,l.jsx)("br",{}),"their customers."]})}),(0,l.jsxs)("div",{className:B().headerMenu,children:[(0,l.jsxs)("div",{className:B().titleContainer,children:[(0,l.jsx)("h2",{className:B().headerTitle,children:"Matthew White"}),(0,l.jsx)("h3",{className:B().headerTitle,children:"Engineering Lead & Software Developer"})]}),(0,l.jsxs)("div",{className:B().menuContainer,children:[(0,l.jsx)("button",{onClick:()=>{n("work")},children:"work"}),(0,l.jsx)("button",{onClick:()=>{n("about")},children:"about"}),(0,l.jsx)("button",{onClick:()=>{n("contact")},children:"contact"})]})]})]})})});z.displayName="Header";var W=n(6414),J=n.n(W),F=()=>(0,l.jsxs)("div",{className:J().aboutContainer,children:[(0,l.jsx)("a",{href:"about"}),(0,l.jsxs)("div",{className:J().componentContainer,children:[(0,l.jsx)("h1",{children:"About"}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:J().aboutContent,children:[(0,l.jsx)("img",{className:J().profilePic,src:"".concat(b,"/images/profile_pic.png")}),(0,l.jsxs)("div",{className:J().aboutText,children:[(0,l.jsxs)("h2",{children:["Hi, I'm ",(0,l.jsx)("strong",{children:"Matt"}),". ",(0,l.jsx)("br",{}),"I like making digital stuff."]}),(0,l.jsx)("p",{children:"I’m passionate about making outstanding digital products, about exceptional design and nurturing the creative spirit."}),(0,l.jsx)("p",{children:"I have a strong foundation and comprehensive experience in front-end technologies, cloud backend systems and a background in animation for video, games and web."}),(0,l.jsxs)("p",{children:[" I believe in measuring success by developing thoughtful and achievable goals, developing strong processes and workflows, ","and in building capable, motivated and complimentary teams that can take on seemingly insurmountable challenges one problem at a time."]})]})]})]})]}),V=n(1297),U=n.n(V),q=e=>{let{children:t,shaded:n=!1}=e;return(0,l.jsxs)("div",{className:n?U().shadedCellWrapper:U().cellWrapper,children:[(0,l.jsx)("div",{className:U().cellSpacer}),(0,l.jsx)("ul",{children:t}),(0,l.jsx)("div",{className:U().cellSpacer})]})},G=()=>(0,l.jsx)("div",{className:U().skillsContainer,children:(0,l.jsxs)("div",{className:U().skillsComponent,children:[(0,l.jsx)("h1",{children:"Technical Skills"}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:U().skillsContent,children:[(0,l.jsxs)("div",{className:U().skillsContentContainer,children:[(0,l.jsxs)("div",{className:U().skillsPrimary,children:[(0,l.jsx)("h1",{children:"Expert"}),(0,l.jsx)(q,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"C#"}),(0,l.jsx)("li",{children:"Javascript"}),(0,l.jsx)("li",{children:"(Vanilla & Typescript)"})]})}),(0,l.jsx)(q,{shaded:!0,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Xamarin"}),(0,l.jsx)("li",{children:"NodeJs (Express) "}),(0,l.jsx)("li",{children:"Spine (2d Animation)"}),(0,l.jsx)("li",{children:"Unity Engine"})]})}),(0,l.jsx)(q,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Visual Studio"}),(0,l.jsx)("li",{children:"VS Code"}),(0,l.jsx)("li",{children:"Web Storm (IntelliJ) "}),(0,l.jsx)("li",{children:"Illustrator"}),(0,l.jsx)("li",{children:"Photoshop"}),(0,l.jsx)("li",{children:"Animate"})]})})]}),(0,l.jsxs)("div",{className:U().skillsSecondary,children:[(0,l.jsx)("h1",{children:"Advanced"}),(0,l.jsx)(q,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Python"}),(0,l.jsx)("li",{children:"PHP"}),(0,l.jsx)("li",{children:"HTML / CSS"}),(0,l.jsx)("li",{children:"SQL, CouchDB, Mongo"})]})}),(0,l.jsx)(q,{shaded:!0,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"React & React Native "}),(0,l.jsx)("li",{children:"AWS Lambda / Cognito / S3"}),(0,l.jsx)("li",{children:"Serverless & NextJS "}),(0,l.jsx)("li",{children:"GraphQL / Swagger"}),(0,l.jsx)("li",{children:"Grunt / Yarn / Webpack "})]})}),(0,l.jsx)(q,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Git / Source Tree "}),(0,l.jsx)("li",{children:"XCode / Android Studio"}),(0,l.jsx)("li",{children:"Docker / Containerization"})]})})]}),(0,l.jsxs)("div",{className:U().skillsTertiary,children:[(0,l.jsx)("h1",{children:"Proficient"}),(0,l.jsx)(q,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Swift"}),(0,l.jsx)("li",{children:"Java"}),(0,l.jsx)("li",{children:"Kotlin"}),(0,l.jsx)("li",{children:"C++"})]})}),(0,l.jsx)(q,{shaded:!0,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"GCP Compute & Functions"}),(0,l.jsx)("li",{children:"Drupal, Joomla, & Magento"}),(0,l.jsx)("li",{children:"Codeigniter / Wordpress"}),(0,l.jsx)("li",{children:"Unreal Engine"}),(0,l.jsx)("li",{children:"Flask, Django"})]})}),(0,l.jsx)(q,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Blender / Maya / Cinema 4d"}),(0,l.jsx)("li",{children:"Adobe Audition"}),(0,l.jsx)("li",{children:"Audacity"}),(0,l.jsx)("li",{children:"Media Encoder"})]})})]})]}),(0,l.jsx)("div",{className:U().skillsContentContainerSml,children:(0,l.jsxs)("div",{className:U().skillsSecondary,children:[(0,l.jsxs)(q,{children:[(0,l.jsx)("h1",{children:"Expert"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"C#, Unity"}),(0,l.jsx)("li",{children:"Javascript, NodeJS"}),(0,l.jsx)("li",{children:"(Vanilla & Typescript)"}),(0,l.jsx)("li",{children:"Xamarin, Visual Studio"})]})]}),(0,l.jsxs)(q,{shaded:!0,children:[(0,l.jsx)("h1",{children:"Advanced"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"PHP, Python"}),(0,l.jsx)("li",{children:"React, React Native"}),(0,l.jsx)("li",{children:"AWS Lambda / Cognito / S3"}),(0,l.jsx)("li",{children:"XCode, Android Studio"}),(0,l.jsx)("li",{children:"Docker / Containerization"})]})]}),(0,l.jsxs)(q,{children:[(0,l.jsx)("h1",{children:"Proficient"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Kotlin, Swift, Java"}),(0,l.jsx)("li",{children:"C++, Unreal Engine"}),(0,l.jsx)("li",{children:"GCP Compute & Functions"}),(0,l.jsx)("li",{children:"Flask, Django"})]})]})]})})]})]})}),Z=n(9155),O=n.n(Z),Q=()=>{let e=e=>{L.Instance.LogEvent("contact_button_pressed",{title:e})};return(0,l.jsxs)("div",{className:O().contactContainer,children:[(0,l.jsx)("a",{href:"contact"}),(0,l.jsxs)("div",{className:O().contactComponent,children:[(0,l.jsx)("h1",{children:"Contact"}),(0,l.jsx)("hr",{}),(0,l.jsxs)("ul",{className:O().contactUnorderedList,children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"mailto:mjwhitey1@gmail.com",target:"_blank",rel:"noreferrer",onClick:()=>{e("gmail")},children:"mjwhitey1@gmail.com"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://linkedin.com/in/mattywhite",target:"_blank",rel:"noreferrer",onClick:()=>{e("linkedin")},children:"linkedin.com/in/mattywhite"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://github.com/mjwhitey",target:"_blank",rel:"noreferrer",onClick:()=>{e("github")},children:"github.com/mjwhitey"})})]})]})]})},X=n(7382),K=n.n(X),Y=e=>{let{visible:t=!1,onPress:n=null}=e,r=(0,c.useRef)(null),{contextSafe:i}=(0,y.V)({scope:r}),o=(0,c.useRef)(null),[s,a]=(0,c.useState)({visible:!1});(0,c.useEffect)(()=>{s.visible!=t&&(t?d():h())},[t]);let d=i(()=>{o.current&&o.current.kill();let e=v.ZP.timeline();e.call(()=>{a(e=>({...e,visible:t}))}),e.fromTo(r.current,{y:20,alpha:0},{y:0,alpha:1,duration:.8,ease:"elastic.out"})}),h=i(()=>{o.current&&o.current.kill();let e=v.ZP.timeline();e.fromTo(r.current,{y:0,alpha:1},{y:20,alpha:0,duration:.4,ease:"expo.in"}),e.call(()=>{a(e=>({...e,visible:t}))})});return(0,l.jsx)("div",{ref:r,className:K().stickyContainer,style:s.visible?{}:{display:"none"},onMouseDown:()=>{n&&n()},children:(0,l.jsx)("div",{className:K().innerStickyContainer,children:(0,l.jsx)("div",{className:K().stickyButton,children:(0,l.jsx)("svg",{className:K().stickSvg,fill:"#dddee6",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"})})})})})},$=n(7014),ee=n.n($);let et=["".concat(b,"/images/profile_pic.png"),"".concat(b,"/images/tint_blue_rago.png"),"".concat(b,"/images/tint_blue_fulltilt.png"),"".concat(b,"/images/tint_blue_carlsberg.png"),"".concat(b,"/images/tint_blue_blackmirror.png"),"".concat(b,"/images/tint_blue_queuejumper.png"),"".concat(b,"/images/tint_blue_vivid.png"),"".concat(b,"/images/tint_blue_westfield.png"),"".concat(b,"/images/tint_blue_mazda.png"),"".concat(b,"/images/tint_blue_wonderwall.png"),"".concat(b,"/images/projects/rag/ready_attn_go_1.jpg"),"".concat(b,"/images/projects/fulltilt/fulltilt_1.jpg"),"".concat(b,"/images/projects/carlsberg/carlsberg_1.jpg"),"".concat(b,"/images/projects/blackmirror/blackmirror_1.gif"),"".concat(b,"/images/projects/queuejumper/queue_jumper_1.png"),"".concat(b,"/images/projects/vivid/vivid_1.jpg"),"".concat(b,"/images/projects/mazda/mazda_1.png"),"".concat(b,"/images/projects/wonderwall/wonderwall_1.jpg")];var en=e=>{let{visible:t=!1,onLoaderComplete:n=()=>{},windowHeight:r}=e,i=(0,c.useRef)(null),o=(0,c.useRef)(null),s=(0,c.useRef)(null),a=(0,c.useRef)(null),d=(0,c.useRef)(null),{contextSafe:h}=(0,y.V)({scope:i}),u=(0,c.useRef)(null),[m,p]=(0,c.useState)({visible:!0}),{imagesPreloaded:g,imagesPercentLoaded:f}=function(e){let[t,n]=(0,c.useState)(!1),[r,i]=(0,c.useState)(0),o=(0,c.useRef)(0);return(0,c.useEffect)(()=>{let t=!1;return async function(){if(console.log("PRELOAD"),t)return;let r=[];for(let t=0;t<e.length;t++)r.push(function(t,n){let r=e[t];return new Promise((e,t)=>{let s=new Image;s.onload=function(){o.current++,i(Math.ceil(o.current/n*100)),console.log("preloadImage : ".concat(o.current," of ").concat(n)),e(s)},s.onerror=s.onabort=function(){t(r)},s.src=r})}(t,e.length));await Promise.all(r),t||n(!0)}(),()=>{t=!0}},[e]),{imagesPreloaded:t,imagesPercentLoaded:r}}(et);(0,c.useEffect)(()=>{console.log("AssetLoader ",t,g,f),j(Math.min(f,100)),g&&!0===m.visible&&_()},[t,g,f]);let _=h(()=>{console.log("animateOut"),u.current&&u.current.kill();let e=v.ZP.timeline();e.call(()=>{p(e=>({...e,visible:t}))}),e.to(a.current,{alpha:0,y:10,duration:.2}),e.to(d.current,{alpha:0,y:10,duration:.2,delay:-.1}),e.to(s.current,{alpha:0,y:10,duration:.2}),e.delay(1.2),e.fromTo(i.current,{y:0,alpha:1},{y:"-100%",alpha:1,duration:1.2,ease:"expo.inOut"}),e.call(()=>{n()})}),j=h(e=>{console.log("updateIndicator - percent : ",e),u.current&&u.current.kill();let t=v.ZP.timeline();t.to(o.current,{width:"".concat(f,"%"),alpha:1,duration:.8,ease:"expo.out"})});return(0,l.jsxs)("div",{ref:i,className:ee().assetLoader,style:{height:r||"100vh"},children:[(0,l.jsxs)("div",{className:ee().assetLoaderContainer,children:[(0,l.jsx)("div",{ref:a,children:(0,l.jsxs)("h1",{children:["Perfection is achieved, not when",(0,l.jsx)("br",{})," there is nothing left to add, but when there is nothing left to take away."]})}),(0,l.jsx)("div",{ref:d,children:(0,l.jsx)("h2",{children:"Antoine de Saint-Exup\xe9ry"})})]}),(0,l.jsx)("div",{ref:s,className:ee().assetLoaderIndicatorContainer,children:(0,l.jsx)("div",{ref:o,className:ee().assetLoaderIndicator})})]})};function er(){let e=c.useRef(),t=c.useRef(),[n,{entry:m}]=(0,u.S)(),g=m&&m.isIntersecting,[f,{entry:_}]=(0,u.S)(),j=_&&_.isIntersecting,[w,v]=(0,c.useState)({screen:{width:956,height:400},showScrollToTopBtn:!1,showSelectedProject:!0,assetsLoaded:!1,componentLoaded:!1,videoBuffered:!1});function y(){return e.current&&!!(e.current.currentTime>0&&!e.current.paused&&!e.current.ended&&e.current.readyState>2)}function k(){let{width:e,height:t}=ei();r.aspect=e/t,r.updateProjectionMatrix(),o.setSize(e,t),s.setSize(e,t),v(e=>({...e,screen:{width:window.innerWidth,height:window.innerHeight}}))}return(0,c.useEffect)(()=>{L.Instance.Initialize(),function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r=new d.iKG(-1,1,1,-1,0,1),(i=new d.xsS).background=new d.Ilk(0,0,0);let{width:n,height:l}=ei(),c=document.getElementById("video"),u=new d.fO1(c);u.colorSpace=d.KI_,a=new d.Kj0(new d._12(2,2),new d.vBJ({map:u})),i.add(a),(o=new d.CP7).setSize(n,l),e?((s=new h(o," .:-+*=%@#",{invert:!1,resolution:t?.16:.1})).setSize(n,l),s.domElement.style.color="#585a66",s.domElement.style.backgroundColor="#1f212a",s.domElement.id="asciivideo",null==document.getElementById("asciivideo")&&document.body.appendChild(s.domElement)):document.body.appendChild(o.domElement)}(!0,x.tq),function e(){requestAnimationFrame(e),g||(s?s.render(i,r):o.render(i,r))}(),e.current&&e.current.muted&&!y()&&e.current.play(),v(e=>({...e,componentLoaded:!0,screen:{width:window.innerWidth,height:window.innerHeight}})),window.addEventListener("resize",k)},[]),(0,c.useEffect)(()=>{console.log("VISIBILITY : ",g,j),e.current&&e.current.muted&&(!g&&y()&&e.current.pause(),g&&!y()&&e.current.play()),!1===j&&!1===g&&v(e=>({...e,showScrollToTopBtn:!0})),(j||g)&&w.showScrollToTopBtn&&v(e=>({...e,showScrollToTopBtn:!1}))},[g,j]),w.componentLoaded&&(w.assetsLoaded?document.getElementsByTagName("body")[0].style.cssText="overflow-y: scroll;":document.getElementsByTagName("body")[0].style.cssText="overflow-y: hidden;"),(0,l.jsxs)("div",{children:[(0,l.jsx)("video",{id:"video",ref:e,playsInline:!0,autoPlay:!0,muted:!0,loop:!0,crossOrigin:"anonymous",style:{width:"500px",height:"500px"},className:p().hidden,onPlay:()=>{v(e=>({...e,videoBuffered:!0}))},children:(0,l.jsx)("source",{src:"".concat(b,"/video/supercut_1.mp4")})}),(0,l.jsx)("canvas",{className:p().hidden,ref:t,width:"500",height:"500"}),(0,l.jsxs)("div",{id:"root",className:p().rootContainer,children:[(0,l.jsx)(z,{ref:n,width:w.screen.width,height:w.screen.height}),(0,l.jsx)(R,{ref:f,showSelectedProject:w.showSelectedProject,onClose:()=>{console.log("onWorkClosed"),v(e=>({...e,showSelectedProject:!0}))},onChange:()=>{console.log("onWorkChanged"),v(e=>({...e,showSelectedProject:!0}))}}),(0,l.jsx)(F,{}),(0,l.jsx)(G,{}),(0,l.jsx)(Q,{}),(0,l.jsx)(Y,{visible:w.showScrollToTopBtn,onPress:()=>{L.Instance.LogEvent("sticky_button_pressed");let e=document.querySelector('a[href^="work"]');e&&e.scrollIntoView({behavior:"smooth"}),console.log("onStickyButtonPress : ",w.showSelectedProject),v(e=>({...e,showSelectedProject:!1}))}})]}),!w.assetsLoaded&&(0,l.jsx)(en,{visible:!w.videoBuffered,onLoaderComplete:()=>{console.log("onLoaderComplete"),v(e=>({...e,assetsLoaded:!0}))},windowHeight:w.screen.height})]})}function ei(){let e=window.innerWidth,t=window.innerHeight+40;return{width:e,height:t}}},6414:function(e){e.exports={componentContainer:"about_componentContainer__u9Ypl",aboutContainer:"about_aboutContainer__r0fQZ",aboutContent:"about_aboutContent__UZ8oU",aboutText:"about_aboutText__7A0Fe",profilePic:"about_profilePic__VGQz2"}},7014:function(e){e.exports={assetLoader:"assetloader_assetLoader__F0LNe",assetLoaderContainer:"assetloader_assetLoaderContainer__k2Zip",assetLoaderIndicatorContainer:"assetloader_assetLoaderIndicatorContainer__BY1cg",assetLoaderIndicator:"assetloader_assetLoaderIndicator__et6ym"}},9155:function(e){e.exports={contactContainer:"contact_contactContainer__qX8Ly",contactComponent:"contact_contactComponent__2UsFM globals_componentContainer__S8VQx"}},3450:function(e){e.exports={headerContainer:"header_headerContainer__jiAKD",headerMenu:"header_headerMenu__3bryd",menuContainer:"header_menuContainer__RUkMo",titleContainer:"header_titleContainer__SZqPm",header:"header_header__zJOD0",headerTitle:"header_headerTitle__Fw_jb"}},3563:function(e){e.exports={hidden:"components_hidden__ynoFi",rootContainer:"components_rootContainer__n5v_2",contentContainer:"components_contentContainer__l7B1p"}},974:function(e){e.exports={selectedProjectContainer:"selected-project_selectedProjectContainer__sgYZv",selectedProjectComponent:"selected-project_selectedProjectComponent__Bbtb3 globals_componentContainer__S8VQx",selectedHeader:"selected-project_selectedHeader__xaa0J",selectedDetails:"selected-project_selectedDetails__hiPXO",selectedCarouselContainer:"selected-project_selectedCarouselContainer__ySj1c",selectedBody:"selected-project_selectedBody__dbF8V",selectedCarousel:"selected-project_selectedCarousel__7ze36",selectedDots:"selected-project_selectedDots__TLtka",selectedDotsSelected:"selected-project_selectedDotsSelected__qlod2 selected-project_selectedDots__TLtka"}},1297:function(e){e.exports={skillsContainer:"skills_skillsContainer__SW1te about_aboutContainer__r0fQZ",skillsComponent:"skills_skillsComponent__oeQcq globals_componentContainer__S8VQx",skillsContent:"skills_skillsContent__ZDxUo about_aboutContent__UZ8oU",skillsContentContainer:"skills_skillsContentContainer__9AI_V",skillsContentContainerSml:"skills_skillsContentContainerSml___fnnf",skillsColumn:"skills_skillsColumn__fQyCz",cellSpacer:"skills_cellSpacer__GpP9B",cellWrapper:"skills_cellWrapper__HGJS8",skillsPrimary:"skills_skillsPrimary__UBqhM skills_skillsColumn__fQyCz",skillsSecondary:"skills_skillsSecondary__lBbZm skills_skillsColumn__fQyCz",skillsTertiary:"skills_skillsTertiary__7Mo3j skills_skillsColumn__fQyCz",shadedCellWrapper:"skills_shadedCellWrapper__VGRs3 skills_cellWrapper__HGJS8",shaded:"skills_shaded__kyj8V"}},7382:function(e){e.exports={stickyContainer:"sticky-button_stickyContainer__diNP2",innerStickyContainer:"sticky-button_innerStickyContainer__wzYrC",stickyButton:"sticky-button_stickyButton__2_ICE",stickSvg:"sticky-button_stickSvg__71ntE"}},7079:function(e){e.exports={workItemOverlay:"work-item_workItemOverlay__ZE0n4",workItemOverlayContainer:"work-item_workItemOverlayContainer__WCGHs",workItemTitle:"work-item_workItemTitle__6p4tU",workItemTech:"work-item_workItemTech__AMvPr",workItem:"work-item_workItem__Y2q3g",workItemHr:"work-item_workItemHr__uRQWA",workItemSpanContainer:"work-item_workItemSpanContainer__8yQQQ"}},6505:function(e){e.exports={componentContainer:"work_componentContainer__RLJWn",workContainer:"work_workContainer__JSN1A",workGridContainer:"work_workGridContainer__m3x3Z",workContainerHr:"work_workContainerHr__dXCy6",gridRow:"work_gridRow__VsNE6",spacerItem:"work_spacerItem__H4nl8"}}},function(e){e.O(0,[737,662,802,490,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
(this["webpackJsonpintellihack-2k21"]=this["webpackJsonpintellihack-2k21"]||[]).push([[0],{103:function(e,t,i){},123:function(e,t,i){},141:function(e,t,i){},142:function(e,t,i){},143:function(e,t,i){},145:function(e,t,i){},174:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i.n(c),a=i(20),n=i.n(a),l=(i(92),i(15)),r=(i(93),i.p,i(94),i(2)),o=i(3),d=i(4),j=i(5),m=i(65),b=(i(95),i(1)),h=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var c;return Object(r.a)(this,i),(c=t.call(this,e))._tickRef=s.a.createRef(),c}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this._tickInstance=m.a.DOM.create(this._tickRef.current,{value:this.props.value})}},{key:"componentDidUpdate",value:function(){this._tickInstance&&(this._tickInstance.value=this.props.value)}},{key:"componentWillUnmount",value:function(){this._tickInstance&&m.a.DOM.destroy(this._tickRef.current)}},{key:"render",value:function(){return Object(b.jsx)("div",{ref:this._tickRef,className:"tick",children:Object(b.jsx)("div",{"data-repeat":"true","aria-hidden":"true",children:Object(b.jsx)("span",{"data-view":"flip",children:"Tick"})})})}}]),i}(s.a.Component);var p=function(){var e=new Date("Nov 20, 2021 00:00:00").getTime(),t=Object(c.useState)(60),i=Object(l.a)(t,2),a=i[0],n=i[1],r=Object(c.useState)(0),o=Object(l.a)(r,2),d=(o[0],o[1],Object(c.useState)(0)),j=Object(l.a)(d,2),m=j[0],p=j[1],O=Object(c.useState)(0),v=Object(l.a)(O,2),u=v[0],g=v[1],x=Object(c.useState)(0),f=Object(l.a)(x,2),A=f[0],w=f[1];return setInterval((function(){var t=(new Date).getTime(),i=e-t,c=Math.floor(i/864e5),s=Math.floor(i/36e5%24),a=Math.floor(i/1e3/60%60),l=Math.floor(i%6e4/1e3);w(c),g(s),p(a),n(l)}),1e3),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"clock-container",children:[Object(b.jsxs)("div",{className:"clock-box-cnt",children:[A<10?Object(b.jsx)("div",{children:Object(b.jsx)(h,{value:0})}):Object(b.jsx)(s.a.Fragment,{}),Object(b.jsx)(h,{value:A})]}),Object(b.jsxs)("div",{className:"clock-box-cnt",children:[u<10?Object(b.jsx)("div",{children:Object(b.jsx)(h,{value:0})}):Object(b.jsx)(s.a.Fragment,{}),Object(b.jsx)(h,{value:u})]}),Object(b.jsxs)("div",{className:"clock-box-cnt",children:[m<10?Object(b.jsx)("div",{children:Object(b.jsx)(h,{value:0})}):Object(b.jsx)(s.a.Fragment,{}),Object(b.jsx)(h,{value:m})]}),Object(b.jsxs)("div",{className:"clock-box-cnt",children:[a<10?Object(b.jsx)("div",{children:Object(b.jsx)(h,{value:0})}):Object(b.jsx)(s.a.Fragment,{}),Object(b.jsx)(h,{value:a})]})]})})},O=(i(97),i.p+"static/media/logobg.bc0eeec0.png"),v=i(74),u=i(75);var g=function(e){var t=Object(c.useState)(!1),i=Object(l.a)(t,2),s=i[0],a=i[1];return Object(b.jsxs)("div",{className:e.display?"navbar-cnt navbar-display":"navbar-cnt",children:[Object(b.jsxs)("div",{className:"mobile-menu-row",children:[Object(b.jsx)("div",{onClick:e.mainSectionClick,className:"navbar-img-cnt",children:Object(b.jsx)("img",{src:O,alt:"",className:"navbar-img"})}),Object(b.jsx)("div",{onClick:function(){a(!s)},className:"navbar-menu",children:Object(b.jsx)(v.a,{style:{fontSize:25},icon:u.a})})]}),Object(b.jsxs)("div",{className:s&&e.display?"mobile-menu-item-cnt-display":"mobile-menu-item-cnt",children:[Object(b.jsx)("div",{onClick:e.timelineClick,className:"mobile-row",children:"Timeline"}),Object(b.jsx)("div",{onClick:e.whyintelliHackClick,className:"mobile-row",children:"IntelliHack?"}),Object(b.jsx)("div",{onClick:e.timelineClick,className:"mobile-row",children:"Timeline"}),Object(b.jsx)("div",{onClick:e.praposalSubmissionClick,className:"mobile-row",children:"Submissions"}),Object(b.jsx)("div",{onClick:e.pricesClick,className:"mobile-row",children:"Prices"}),Object(b.jsx)("div",{onClick:e.sponsersClick,className:"mobile-row",children:"Sponsors"}),Object(b.jsx)("div",{onClick:e.whatTheySayClick,className:"mobile-row",children:"What They Say"}),Object(b.jsx)("div",{className:"mobile-row",children:"About Us"})]}),Object(b.jsxs)("div",{className:"navbar-items",children:[Object(b.jsxs)("div",{className:"navbar-item-cnt",children:[Object(b.jsx)("div",{onClick:e.whyintelliHackClick,children:"IntelliHack?"}),Object(b.jsx)("div",{className:"navbar-not-clicked"})]}),Object(b.jsxs)("div",{className:"navbar-item-cnt",children:[Object(b.jsx)("div",{onClick:e.timelineClick,children:"Timeline"}),Object(b.jsx)("div",{className:"navbar-not-clicked"})]}),Object(b.jsxs)("div",{className:"navbar-item-cnt",children:[Object(b.jsx)("div",{onClick:e.praposalSubmissionClick,children:"Submissions"}),Object(b.jsx)("div",{className:"navbar-not-clicked"})]}),Object(b.jsxs)("div",{className:"navbar-item-cnt",children:[Object(b.jsx)("div",{onClick:e.pricesClick,children:"Prices"}),Object(b.jsx)("div",{className:"navbar-not-clicked"})]}),Object(b.jsxs)("div",{className:"navbar-item-cnt",children:[Object(b.jsx)("div",{onClick:e.sponsersClick,children:"Sponsors"}),Object(b.jsx)("div",{className:"navbar-not-clicked"})]}),Object(b.jsxs)("div",{className:"navbar-item-cnt",children:[Object(b.jsx)("div",{onClick:e.whatTheySayClick,children:"What They Say"}),Object(b.jsx)("div",{className:"navbar-not-clicked"})]}),Object(b.jsxs)("div",{className:"navbar-item-cnt",children:[Object(b.jsx)("div",{children:"About"}),Object(b.jsx)("div",{className:"navbar-not-clicked"})]})]})]})},x=(i(102),i.p+"static/media/logoWhite.7a0ede4d.png");var f,A=function(e){var t=e.reference,i=e.mainSectionClick,s=e.whyintelliHackClick,a=e.timelineClick,n=e.praposalSubmissionClick,r=e.whatTheySayClick,o=e.sponsersClick,d=e.pricesClick,j=Object(c.useState)(!1),m=Object(l.a)(j,2),h=m[0],O=m[1];return window.addEventListener("scroll",(function(){window.scrollY>0?O(!0):window.scrollY<=0&&O(!1)})),Object(b.jsx)("div",{ref:t,children:Object(b.jsxs)("div",{className:"main-section-cnt",children:[Object(b.jsx)(g,{mainSectionClick:i,whyintelliHackClick:s,timelineClick:a,praposalSubmissionClick:n,whatTheySayClick:r,sponsersClick:o,pricesClick:d,display:h}),Object(b.jsxs)("div",{className:"main-section-content",children:[Object(b.jsx)("img",{className:"white-logo",src:x,alt:""}),Object(b.jsxs)("div",{className:"clock-cnt",children:[Object(b.jsx)("div",{className:"clock-text",children:"Proposal submission ends in"}),Object(b.jsx)(p,{})]})]})]})})},w=(i(103),["title","titleId"]);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var i,c,s=function(e,t){if(null==e)return{};var i,c,s={},a=Object.keys(e);for(c=0;c<a.length;c++)i=a[c],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)i=a[c],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}function y(e,t){var i=e.title,s=e.titleId,a=N(e,w);return c.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",ref:t,"aria-labelledby":s},a),i?c.createElement("title",{id:s},i):null,f||(f=c.createElement("g",{fill:"#61DAFB"},c.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),c.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),c.createElement("path",{d:"M520.5 78.1z"}))))}var C=c.forwardRef(y),D=(i.p,[{id:1,title:"Sample title 1",description:"Sample Description",date:"20-09-2021"},{id:2,title:"Sample title 2",description:"Sample Description",date:"20-09-2021"},{id:3,title:"Sample title 3",description:"Sample Description",date:"20-09-2021"},{id:4,title:"Sample title 4",description:"Sample Description",date:"20-09-2021"},{id:5,title:"Sample title 5",description:"Sample Description",date:"20-09-2021"}]),T=i(61);i(107);var I=function(e){var t=e.reference,i={background:"black"},s=Object(c.useState)(!1),a=Object(l.a)(s,2),n=a[0],r=a[1];function o(){window.innerWidth<1350?r(!1):r(!0)}return Object(c.useEffect)((function(){o()}),[]),window.addEventListener("resize",o),Object(b.jsxs)("div",{className:"timeline-main-cnt",ref:t,children:[Object(b.jsx)("h2",{className:"title",children:"How It Works"}),Object(b.jsx)(T.VerticalTimeline,{animate:n,children:D.map((function(e){return Object(b.jsxs)(T.VerticalTimelineElement,{dateClassName:"date",date:e.date,iconStyle:i,icon:Object(b.jsx)(C,{}),children:[Object(b.jsx)("h3",{className:"vertical-timeline-element-title",children:e.title}),Object(b.jsx)("p",{id:"description",children:e.description})]},e.id)}))})]})},S=(i(68),i(18)),M=i(76),z=i.n(M),E=(i(123),[{image:i.p+"static/media/photo1.58e55693.jpg"},{image:i.p+"static/media/photo2.f0556e37.jpg"},{image:i.p+"static/media/photo6.d3476d3e.jpg"},{image:i.p+"static/media/photo4.f559a1eb.jpg"}]);window.addEventListener("resize",(function(){window.innerWidth<1150&&console.log(document.querySelector(".why-intellihack-box").style.height)}));var F=function(e){var t=e.reference;return Object(b.jsx)("div",{ref:t,className:"why-intelliHack-section",children:Object(b.jsxs)("div",{className:"slide-cnt",children:[Object(b.jsx)("div",{className:"why-intellihack-cnt",children:Object(b.jsxs)("div",{className:"why-intellihack-box",children:[Object(b.jsx)("div",{className:"why-intellihack-topic",children:"Why IntelliHack ?"}),Object(b.jsx)("div",{className:"why-intellihack-text",children:"IntelliHack is the first ever Machine Learning hackathon in Sri Lanka. This is one of the year\u2019s most anticipated, exciting, and electrifying events that innovative minds look forward to. The contestants get the privilege to network with some of the topmost experts in the industry and expose themselves to this attractive technology that would benefit them immensely in their future activities.IntelliHack is a great platform for those curious minds interested in machine-based learning to meet and collaborate with each other. It also encourages the youth to participate and be a part of this revolutionary technology and sciences which are the upcoming breakthroughs in the computer world. And among many more benefits, IntelliHack aims to raise awareness among the society about these machine-based learning and artificial intelligence."})]})}),Object(b.jsx)(z.a,{timeout:300,interval:3e3,className:"carousel",indicators:!1,animation:"slide",stopAutoPlayOnHover:!1,children:E.map((function(e,t){return Object(b.jsx)(P,{item:e},t)}))})]})})};function P(e){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"carousel-img",src:e.item.image,alt:""})})}var B=i(62),W=i(78),G=i.n(W),Q=(i(139),i(140),i(141),[{Image:"https://firebasestorage.googleapis.com/v0/b/schoolymob.appspot.com/o/IntelliHack%2Fdhanu.png?alt=media&token=f3ff8fce-fb1e-43d7-b3cb-6ab578540e63",Name:"Dhanushka",Disc:"Memories fade but experience holds our hand forever.",Disc2:"Finalist - IntelliHack 2019",Disc3:"4th year Undergraduate at UCSC"},{Image:"https://firebasestorage.googleapis.com/v0/b/schoolymob.appspot.com/o/IntelliHack%2Framith.png?alt=media&token=34ba92df-14e7-4828-a628-fc58f6aae5a7",Name:"Ramith",Disc:"Every moment past is a learning experience to grow on.",Disc2:"Winning team - IntelliHack 2019",Disc3:"4th year Undergraduate at UOM (ENTC)"},{Image:"https://firebasestorage.googleapis.com/v0/b/schoolymob.appspot.com/o/IntelliHack%2Fshashika.png?alt=media&token=c6d0f208-e136-49dc-98d3-916a008b3564",Name:"Shashika",Disc:"The moments we share are the moments we keep forever.",Disc2:"Finalist - IntelliHack 2019",Disc3:"Software engineer - Different Technologies"},{Image:"https://firebasestorage.googleapis.com/v0/b/schoolymob.appspot.com/o/IntelliHack%2Fsula.png?alt=media&token=e275d7db-da43-41ad-b520-965f697e8589",Name:"Sulakshana",Disc:"A tour to the past, to capture the best moments that last.",Disc2:"Finalist - IntelliHack 2019",Disc3:"Software engineer - Persistent Systems"}]),R=i(196),L=i(197),X=i(203),U=i(198),Z=i(199),V=i(200),H=i(201),Y=function(e){console.log(e);var t=e.className,i=e.onClick;return Object(b.jsx)("div",{className:t,onClick:i,children:Object(b.jsx)(R.a,{style:{color:"blue",fontSize:"30px"}})})},J=function(e){var t=e.className,i=e.onClick;return Object(b.jsx)("div",{className:t,onClick:i,children:Object(b.jsx)(L.a,{style:{color:"blue",fontSize:"30px"}})})},K={prevArrow:Object(b.jsx)(Y,{}),nextArrow:Object(b.jsx)(J,{}),slidesToShow:3,centerMode:!0,centerPadding:"170px",responsive:[{breakpoint:500,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:850,settings:{slidesToShow:2,centerMode:!1}},{breakpoint:1370,settings:{slidesToShow:3,centerMode:!1,slidesToScroll:3}}]},q=function(e){var t=e.reference;return Object(b.jsxs)("div",{ref:t,style:{backgroundColor:"#f3f4f6"},className:"slide",children:[Object(b.jsx)("div",{className:"whatTheySay-topic",children:"What they say"}),Object(b.jsx)(G.a,Object(B.a)(Object(B.a)({},K),{},{children:Q.map((function(e){return Object(b.jsx)("div",{style:{padding:4},className:"card-crs",children:Object(b.jsx)(X.a,{sx:{maxWidth:345},style:{margin:20,backgroundColor:"#041149"},children:Object(b.jsxs)(U.a,{children:[Object(b.jsx)(Z.a,{component:"img",height:"320",image:e.Image}),Object(b.jsxs)(V.a,{class:"card-content",children:[Object(b.jsx)(H.a,{style:{color:"white",fontFamily:"Poppins, sans-serif"},gutterBottom:!0,variant:"h5",component:"div",children:e.Name}),Object(b.jsx)(H.a,{style:{color:"white",fontFamily:"Poppins, sans-serif"},variant:"body2",color:"text.secondary",children:e.Disc}),Object(b.jsx)(H.a,{style:{fontSize:12,marginTop:15,color:"white",fontFamily:"Poppins, sans-serif"},color:"text.secondary",children:e.Disc2}),Object(b.jsx)(H.a,{style:{fontSize:12,marginTop:5,color:"white",fontFamily:"Poppins, sans-serif"},color:"text.secondary",children:e.Disc3})]})]})})})}))}))]})};i(142);var _=function(e){var t=e.reference;return Object(b.jsxs)("div",{ref:t,className:"ps-main",children:[Object(b.jsx)("div",{className:"ps-title",children:"Praposals Submissions are open now!"}),Object(b.jsx)("div",{className:"ps-sub-title",children:"Make sure to apply before 2021-08-06"}),Object(b.jsxs)("div",{className:"ps-btn-cnt",children:[Object(b.jsx)("div",{className:"ps-btn",children:"Rules & Regulations"}),Object(b.jsx)("div",{className:"ps-btn",children:"Registration"})]})]})},$=(i(143),i.p+"static/media/PickMe.33f664c2.png"),ee=i.p+"static/media/lseg_logo.05bc91bc.png",te=i.p+"static/media/GDG_Logo.e8474af4.png",ie=i(26),ce=i.n(ie);var se=function(e){var t=e.reference;return Object(b.jsxs)("div",{ref:t,className:"spn-main",children:[Object(b.jsx)("div",{className:"ps-sponser-title",children:"Sponsors"}),Object(b.jsx)(ce.a,{left:!0,children:Object(b.jsxs)("div",{className:"ps-main-sponser",children:[Object(b.jsx)("div",{className:"sponser-title",children:"Official platinum partner"}),Object(b.jsx)("img",{className:"sponser-img",src:$,alt:""})]})}),Object(b.jsx)(ce.a,{left:!0,children:Object(b.jsxs)("div",{className:"ps-main-sponser",children:[Object(b.jsx)("div",{className:"sponser-title",children:"Official platinum partner"}),Object(b.jsx)("img",{className:"sponser-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAYAAADktbcKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDctMzFUMTM6Mzg6NDkrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA3LTMxVDEzOjM5OjE4KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTMxVDEzOjM5OjE4KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2ZTQ5MTc0LTZh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",alt:""})]})}),Object(b.jsxs)("div",{className:"spn-other-sponsers",children:[Object(b.jsx)(ce.a,{left:!0,children:Object(b.jsxs)("div",{className:"ps-main-sponser",children:[Object(b.jsx)("div",{className:"sponser-title",children:"Official platinum partner"}),Object(b.jsx)("img",{className:"sponser-img",src:te,alt:""})]})}),Object(b.jsx)(ce.a,{left:!0,children:Object(b.jsxs)("div",{className:"ps-main-sponser",children:[Object(b.jsx)("div",{className:"sponser-title",children:"Official platinum partner"}),Object(b.jsx)("img",{className:"sponser-img",src:$,alt:""})]})}),Object(b.jsx)(ce.a,{left:!0,children:Object(b.jsxs)("div",{className:"ps-main-sponser",children:[Object(b.jsx)("div",{className:"sponser-title",children:"Official platinum partner"}),Object(b.jsx)("img",{className:"sponser-img",src:ee,alt:""})]})})]})]})},ae=i.p+"static/media/first_place.0b6aca4c.png",ne=i.p+"static/media/second_place.d264f812.png",le=i.p+"static/media/third_place.59b6f70a.png",re=i.p+"static/media/title2.1ace67b4.png",oe=(i(145),i(146),i(63)),de=i.n(oe),je=function(e){var t=e.reference;return Object(b.jsxs)("div",{ref:t,className:"prizes-row",children:[Object(b.jsx)("div",{className:"header-name",children:Object(b.jsx)("div",{children:"Prices"})}),Object(b.jsxs)("div",{className:"winners-row",children:[Object(b.jsx)(ce.a,{right:!0,children:Object(b.jsxs)("div",{className:"third-place",children:[Object(b.jsx)("h1",{children:"Third Place"}),Object(b.jsx)("div",{className:"third_card",children:Object(b.jsx)("img",{className:"third-card-img-top",id:"image1",src:le,alt:"third_place"})}),Object(b.jsx)("div",{className:"third_card-detail",children:"Rs. 25000"})]})}),Object(b.jsx)(ce.a,{left:!0,children:Object(b.jsxs)("div",{className:"first-place",children:[Object(b.jsx)("h1",{children:"First Place"}),Object(b.jsx)("div",{className:"third_card",children:Object(b.jsx)("img",{className:"third-card-img-top",src:ae,alt:"first_place"})}),Object(b.jsx)("div",{className:"second_card-detail",children:"Rs. 75000"})]})}),Object(b.jsx)(ce.a,{right:!0,children:Object(b.jsxs)("div",{className:"second-place",children:[Object(b.jsx)("h1",{children:"Second Place"}),Object(b.jsx)("div",{className:"third_card",children:Object(b.jsx)("img",{className:"third-card-img-top",src:ne,alt:"second_place"})}),Object(b.jsx)("div",{className:"first_card-detail",children:"Rs. 50000"})]})})]}),Object(b.jsx)("div",{className:"header-name2"}),Object(b.jsxs)("div",{className:"titles-row-master",children:[Object(b.jsx)(de.a,{left:!0,children:Object(b.jsxs)("div",{className:"intellihack-master-image",children:[Object(b.jsx)("img",{className:"title-card-img-top1",src:re,alt:"intellihack-master"}),Object(b.jsx)("div",{class:"title-card-img-top1-text",children:Object(b.jsxs)("div",{children:["INTELLIHACK'21",Object(b.jsx)("br",{}),"MASTER"]})})]})}),Object(b.jsx)("div",{className:"intellihack-master-text",children:Object(b.jsx)("div",{className:"intellihack-master",children:"Machine Learning related tasks will be posted on our social media platforms on a weekly basis, which is an open event for any registered contestant. A leaderboard will be maintained throughout the competing period and winners will be awarded with the title of \u201cIntelliHack Master\u201d and valuable prizes."})})]}),Object(b.jsxs)("div",{className:"titles-row-most-popular",children:[Object(b.jsx)(de.a,{right:!0,children:Object(b.jsxs)("div",{className:"most-popular-team-image",children:[Object(b.jsx)("img",{className:"title-card-img-top1",src:re,alt:"intellihack-master"}),Object(b.jsx)("div",{class:"title-card-img-top2-text",children:Object(b.jsxs)("div",{children:["MOST POPULAR",Object(b.jsx)("br",{}),"TEAM"]})})]})}),Object(b.jsx)("div",{className:"intellihack-most-popular-text",children:Object(b.jsx)("div",{className:"most-popular-team",children:'The top ten finalists will present their applications in the form of a short video or a creative post, which will be shared on our social media platforms. The team that receives the highest score based on social media analytics (Reacts, Shares), will be selected as the "Most Popular Team" and prizes will be awarded.'})})]})]})};var me=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2);t[0],t[1],Object(c.useEffect)((function(){for(var e=document.querySelector("canvas.webgl"),t=new S.i,i=new S.j(1,.2,16,100),c=new S.b,s=new Float32Array(300),a=0;a<300;a++)s[a]=5*(Math.random()-.5);c.setAttribute("position",new S.a(s,3));var n=new S.h({size:.005}),l=new S.h({size:.005});n.color=new S.d(9539985);var r=new S.g(i,n),o=new S.g(c,l);t.add(r,o);var d=new S.f(16777215,.1);d.position.x=3,d.position.y=3,d.position.z=4,t.add(d);var j={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(function(){j.width=window.innerWidth,j.height=window.innerHeight,m.aspect=j.width/j.height,m.updateProjectionMatrix(),b.setSize(j.width,j.height),b.setPixelRatio(Math.min(window.devicePixelRatio,2))}));var m=new S.e(75,j.width/j.height,.1,100);m.position.x=0,m.position.y=0,m.position.z=2,t.add(m);var b=new S.k({canvas:e});b.setSize(j.width,j.height),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.addEventListener("mousemove",(function(e){e.clientY,e.clientX}));var h=new S.c;console.log(h.getElapsedTime());!function e(){var i=h.getElapsedTime();r.rotation.y=.5*i,o.rotation.y=-.1*i,b.render(t,m),window.requestAnimationFrame(e)}()}),[]);var i=function(e){return window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})},s=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),o=Object(c.useRef)(),d=Object(c.useRef)(),j=Object(c.useRef)();return Object(c.useRef)(),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("canvas",{class:"webgl"}),Object(b.jsx)(A,{reference:s,mainSectionClick:function(){return i(s)},whyintelliHackClick:function(){return i(a)},timelineClick:function(){return i(n)},praposalSubmissionClick:function(){return i(r)},whatTheySayClick:function(){return i(o)},sponsersClick:function(){return i(d)},pricesClick:function(){return i(j)}}),Object(b.jsx)(F,{reference:a}),Object(b.jsx)(I,{reference:n}),Object(b.jsx)(_,{reference:r}),Object(b.jsx)(je,{reference:j}),Object(b.jsx)(se,{reference:d}),Object(b.jsx)(q,{reference:o})]})})},be=i(79);var he=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),i=t[0],s=t[1];return Object(c.useEffect)((function(){s(!0),setTimeout((function(){s(!1)}),5e3)}),[]),Object(b.jsx)("div",{children:i?Object(b.jsx)("div",{style:{width:"100%",height:"100vh",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(b.jsx)(be.HashLoader,{color:"blue",loading:i,size:150})}):Object(b.jsx)(me,{})})},pe=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,205)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;i(e),c(e),s(e),a(e),n(e)}))};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(he,{})}),document.getElementById("root")),pe()},68:function(e,t,i){},92:function(e,t,i){},93:function(e,t,i){},94:function(e,t,i){},97:function(e,t,i){}},[[174,1,2]]]);
//# sourceMappingURL=main.125be41e.chunk.js.map
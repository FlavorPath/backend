import{j as n,c as i,u as r,O as l}from"./index-8zlRE-qI.js";import{a as m,H as p}from"./index-DqL8lkA2.js";import{c as h}from"./react-BldeI6aZ.js";const d=({iconName:e,label:o,isActive:a,onClick:s})=>{const t=a?m[e]:p[e];return t?n.jsxs("div",{className:i({flex:1,display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",color:"primary.main","& span":{fontSize:"10px",marginTop:"2",fontWeight:"bold"}}),onClick:s,children:[n.jsx(t,{width:30,height:30}),n.jsx("span",{children:o})]}):(console.error(`Icon "${e}" not found.`),null)},u=h(e=>({activeTab:"HomeIcon",setActiveTab:o=>e({activeTab:o})})),b=()=>{const e=r(),{activeTab:o,setActiveTab:a}=u();return{activeTab:o,onTabChange:(t,c)=>{a(t),e(c)}}},g=[{iconName:"HomeIcon",label:"홈",path:"/"},{iconName:"HandThumbUpIcon",label:"추천",path:"/recommendations"},{iconName:"BookmarkIcon",label:"스크랩",path:"/bookmarks"},{iconName:"UserIcon",label:"내 정보",path:"/profile"}],x=()=>{const{activeTab:e,onTabChange:o}=b();return n.jsx("nav",{className:i({display:"flex",justifyContent:"space-around",alignItems:"center",padding:"10px 0",backgroundColor:"white",position:"fixed",bottom:0,width:"100%",height:"60px",zIndex:900,left:0}),children:g.map(a=>n.jsx(d,{iconName:a.iconName,label:a.label,isActive:e===a.iconName,onClick:()=>o(a.iconName,a.path)},a.iconName))})},I=()=>n.jsxs("div",{className:i({position:"relative",height:"100%",width:"100%"}),children:[n.jsx(l,{}),n.jsx(x,{})]});export{I as default};

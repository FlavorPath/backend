import{u as o,e as c,r,j as t,O as u,c as e}from"./index-8zlRE-qI.js";import{u as h}from"./auth.store-C-PIHe4R.js";import"./react-BldeI6aZ.js";const g=()=>{const i=o(),a=c(),s=h.getState().accessToken;return r.useEffect(()=>{!s&&!["/auth/login","/auth/signup"].includes(a.pathname)&&i("/auth/login")},[s,a.pathname]),t.jsx("div",{className:n.container,children:t.jsx("main",{className:n.inner,children:t.jsx(u,{})})})},n={container:e({width:"100dvw",minHeight:"100dvh",fontFamily:"Gmarket Sans"}),inner:e({margin:"0 auto",width:"375px",height:"100%"})};export{g as default};

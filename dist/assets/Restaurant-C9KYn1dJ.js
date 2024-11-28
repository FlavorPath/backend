import{j as e,c as s,u as k,d as b,e as w,r as d,f as j}from"./index-8zlRE-qI.js";import{u as S}from"./useSelectedRestaurant.hook-CNadJqmH.js";import{I}from"./Icon-DN8LPNFT.js";import{B as C}from"./Button-B76DXv8C.js";import{c as D}from"./float-GDraHBfA.js";const R=({labelItems:o})=>e.jsx("div",{className:s({display:"flex",gap:"10px"}),children:o.map((a,r)=>e.jsx(C,{variant:"filled",className:s({width:"fit-content",padding:"10px",height:"24px",borderRadius:12,fontWeight:"medium"}),children:a},r))}),X=[{Name:"홈",path:""},{Name:"메뉴",path:"menu"},{Name:"리뷰",path:"review"}],M=()=>{const o=k(),{id:a}=b(),r=w(),l=i=>{r.pathname.includes("restaurant")&&o(`/restaurant/${a}/${i.path}`)};return e.jsx("div",{className:N.Wrapper,children:X.map(i=>e.jsx("div",{className:N.Item,onClick:()=>l(i),style:{cursor:r.pathname.includes("restaurant")?"pointer":"not-allowed",opacity:r.pathname.includes("restaurant")?1:.5},children:i.Name},i.Name))})},N={Wrapper:s({backgroundColor:"primary.main",display:"flex",alignItems:"center",justifyContent:"space-around",width:"100%",height:"50px",margin:"0",position:"absolute",left:0,marginTop:290,padding:"0px 20px 0px 20px"}),Item:s({fontWeight:"bold",color:"white"})};function B({images:o}){const[a,r]=d.useState(0),[l,i]=d.useState(!1),[p,x]=d.useState(0),[c,g]=d.useState(0),y=d.useRef(null),f=t=>{i(!0),x(t)},v=t=>{if(!l)return;const n=t-p;g(n)},h=()=>{if(!l)return;const t=50;c>t&&a>0?r(n=>n-1):c<-t&&a<o.length-1&&r(n=>n+1),i(!1),g(0)};return e.jsxs("div",{className:m.sliderContainer,ref:y,onMouseDown:t=>f(t.clientX),onMouseMove:t=>v(t.clientX),onMouseUp:h,onMouseLeave:h,onTouchStart:t=>f(t.touches[0].clientX),onTouchMove:t=>v(t.touches[0].clientX),onTouchEnd:h,children:[e.jsx("div",{className:m.sliderWrapper,style:{transform:`translateX(calc(${-a*100}% + ${c}px))`,transition:l?"none":"transform 0.3s ease-in-out"},children:o.map((t,n)=>e.jsx("img",{src:t,alt:`Slide ${n}`,className:m.slideImage},n))}),e.jsx("div",{className:m.navigationDots,children:o.map((t,n)=>e.jsx("div",{className:s({width:"10px",height:"10px",borderRadius:"50%",cursor:"pointer",backgroundColor:a===n?"primary.main":"gray"}),onClick:()=>r(n)},n))})]})}const m={sliderContainer:s({position:"relative",width:"335px",height:"210px",margin:"0 auto",overflow:"hidden",borderRadius:"10px",backgroundColor:"primary.main",userSelect:"none"}),sliderWrapper:s({display:"flex",transition:"transform 0.3s ease-in-out"}),slideImage:s({width:"100%",height:"100%",flexShrink:0,objectFit:"cover"}),navigationDots:s({position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px"}),dot:s({width:"10px",height:"10px",borderRadius:"50%",cursor:"pointer"})},F=({restarauntId:o})=>{const{restaurantDetail:a,mutate:r,isMutating:l}=S(o),[i,p]=d.useState(!1);d.useEffect(()=>{a&&p(a.isScraped)},[a]);const x=()=>{a&&r(a.restaurantId,{onSuccess:()=>{p(c=>!c)},onError:c=>{console.error("Bookmark update failed:",c)}})};return e.jsx(e.Fragment,{children:a?e.jsxs("div",{className:u.container,children:[e.jsxs("div",{className:u.header,children:[e.jsx("h1",{className:s({textStyle:"heading1"}),children:a?a.name:e.jsx(j,{})}),e.jsx(I,{iconName:"BookmarkIcon",library:"hero-solid",onClick:x,className:s({fill:i?"primary.main":"white",stroke:"primary.main",strokeWidth:"2px",cursor:l?"not-allowed":"pointer",transition:"stroke 0.2s"})})]}),e.jsx("div",{className:u.main,children:a&&e.jsxs(e.Fragment,{children:[e.jsx(R,{labelItems:a.labels}),e.jsx(B,{images:a.images})]})}),e.jsx(M,{})]}):e.jsx("div",{className:u.loading_box,children:e.jsx(j,{})})})},u={container:s({width:"375px",margin:"0 auto",height:"350px",paddingTop:"10px",display:"flex",flexDirection:"column",gap:"7px"}),header:s({display:"flex",justifyContent:"space-between",padding:"10px 20px 0px 20px"}),main:s({padding:"0px 20px 0px 20px",display:"flex",flexDirection:"column",gap:"7px"}),loading_box:D({width:"375px",height:"350px"})};export{F as R};

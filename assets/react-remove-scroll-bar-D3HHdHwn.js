import{r as u}from"./react-CwtnApNd.js";import{s as p}from"./react-style-singleton-B8r6-wYL.js";var d="right-scroll-bar-position",g="width-before-scroll-bar",v="with-scroll-bars-hidden",h="--removed-body-scroll-bar-size",m={left:0,top:0,right:0,gap:0},l=function(n){return parseInt(n||"",10)||0},b=function(n){var r=window.getComputedStyle(document.body),e=r[n==="padding"?"paddingLeft":"marginLeft"],t=r[n==="padding"?"paddingTop":"marginTop"],o=r[n==="padding"?"paddingRight":"marginRight"];return[l(e),l(t),l(o)]},y=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return m;var r=b(n),e=document.documentElement.clientWidth,t=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,t-e+r[2]-r[0])}},w=p(),c="data-scroll-locked",x=function(n,r,e,t){var o=n.left,i=n.top,f=n.right,a=n.gap;return e===void 0&&(e="margin"),`
  .`.concat(v,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(a,"px ").concat(t,`;
  }
  body[`).concat(c,`] {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(t,";"),e==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(t,`;
    `),e==="padding"&&"padding-right: ".concat(a,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(d,` {
    right: `).concat(a,"px ").concat(t,`;
  }
  
  .`).concat(g,` {
    margin-right: `).concat(a,"px ").concat(t,`;
  }
  
  .`).concat(d," .").concat(d,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(g," .").concat(g,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body[`).concat(c,`] {
    `).concat(h,": ").concat(a,`px;
  }
`)},s=function(){var n=parseInt(document.body.getAttribute(c)||"0",10);return isFinite(n)?n:0},S=function(){u.useEffect(function(){return document.body.setAttribute(c,(s()+1).toString()),function(){var n=s()-1;n<=0?document.body.removeAttribute(c):document.body.setAttribute(c,n.toString())}},[])},A=function(n){var r=n.noRelative,e=n.noImportant,t=n.gapMode,o=t===void 0?"margin":t;S();var i=u.useMemo(function(){return y(o)},[o]);return u.createElement(w,{styles:x(i,!r,o,e?"":"!important")})};export{A as R,g as f,d as z};

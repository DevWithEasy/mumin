var S=function(r){if(typeof document>"u")return null;var u=Array.isArray(r)?r[0]:r;return u.ownerDocument.body},f=new WeakMap,v=new WeakMap,p={},h=0,W=function(r){return r&&(r.host||W(r.parentNode))},D=function(r,u){return u.map(function(t){if(r.contains(t))return t;var n=W(t);return n&&r.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",r,". Doing nothing"),null)}).filter(function(t){return!!t})},E=function(r,u,t,n){var i=D(u,Array.isArray(r)?r:[r]);p[t]||(p[t]=new WeakMap);var s=p[t],l=[],o=new Set,b=new Set(i),y=function(e){!e||o.has(e)||(o.add(e),y(e.parentNode))};i.forEach(y);var A=function(e){!e||b.has(e)||Array.prototype.forEach.call(e.children,function(a){if(o.has(a))A(a);else try{var c=a.getAttribute(n),w=c!==null&&c!=="false",d=(f.get(a)||0)+1,M=(s.get(a)||0)+1;f.set(a,d),s.set(a,M),l.push(a),d===1&&w&&v.set(a,!0),M===1&&a.setAttribute(t,"true"),w||a.setAttribute(n,"true")}catch(k){console.error("aria-hidden: cannot operate on ",a,k)}})};return A(u),o.clear(),h++,function(){l.forEach(function(e){var a=f.get(e)-1,c=s.get(e)-1;f.set(e,a),s.set(e,c),a||(v.has(e)||e.removeAttribute(n),v.delete(e)),c||e.removeAttribute(t)}),h--,h||(f=new WeakMap,f=new WeakMap,v=new WeakMap,p={})}},C=function(r,u,t){t===void 0&&(t="data-aria-hidden");var n=Array.from(Array.isArray(r)?r:[r]),i=S(r);return i?(n.push.apply(n,Array.from(i.querySelectorAll("[aria-live]"))),E(n,i,t,"aria-hidden")):function(){return null}};export{C as h};
var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,a;function u(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){a=t}const p=[],$=[];let g=[];const v=[],y=Promise.resolve();let b=!1;function _(t){g.push(t)}const x=new Set;let E=0;function k(){if(0!==E)return;const t=a;do{try{for(;E<p.length;){const t=p[E];E++,m(t),w(t.$$)}}catch(t){throw p.length=0,E=0,t}for(m(null),p.length=0,E=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];x.has(e)||(x.add(e),e())}g.length=0}while(p.length);for(;v.length;)v.pop()();b=!1,x.clear(),m(t)}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const L=new Set;function N(t,e){t&&t.i&&(L.delete(t),t.i(e))}function A(t,n,c,s){const{fragment:a,after_update:u}=t.$$;a&&a.m(n,c),s||_((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(_)}function C(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];g.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),g=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,y.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,r,c,s,u,i,d,f=[-1]){const h=a;m(e);const p=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||h.$$.root};d&&d(p.root);let $=!1;if(p.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&O(e,t)),n})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&N(e.$$.fragment),A(e,r.target,r.anchor,r.customElement),k()}m(h)}class B{$destroy(){C(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,o,r,c,a,m,p,$,g,v;return{c(){var t,e;n=d("div"),o=d("div"),o.innerHTML='<h1 class="svelte-1ay2mnd"><span class="black">Car<span class="orange">Hub</span></span></h1> \n        <h2 class="svelte-1ay2mnd">Let&#39;s accelerate the development of autonomous vehicles</h2>',r=f(),c=d("video"),m=f(),p=d("div"),$=d("button"),$.textContent="Book Now",h(o,"class","title svelte-1ay2mnd"),h(c,"id","myVideo"),h(c,"class","hide svelte-1ay2mnd"),t=c.src,e=a="../images/video.mp4",s||(s=document.createElement("a")),s.href=e,t!==s.href&&h(c,"src","../images/video.mp4"),c.controls="true",h($,"class","svelte-1ay2mnd"),h(p,"class","action"),h(n,"class","header svelte-1ay2mnd")},m(t,e){var s,a,l,d;i(t,n,e),u(n,o),u(n,r),u(n,c),u(n,m),u(n,p),u(p,$),g||(a="click",l=H,(s=$).addEventListener(a,l,d),v=()=>s.removeEventListener(a,l,d),g=!0)},p:t,i:t,o:t,d(t){t&&l(n),g=!1,v()}}}function H(){let t=document.getElementById("myVideo");t.classList.remove("hide"),t.play()}class M extends B{constructor(t){super(),j(this,t,null,q,c,{})}}function S(e){let n,o,r,c;return r=new M({}),{c(){var t;n=d("div"),o=d("div"),(t=r.$$.fragment)&&t.c(),h(o,"id","header"),h(o,"class","header svelte-1qr15u")},m(t,e){i(t,n,e),u(n,o),A(r,o,null),c=!0},p:t,i(t){c||(N(r.$$.fragment,t),c=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),(void 0).c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}(r.$$.fragment,t),c=!1},d(t){t&&l(n),C(r)}}}return new class extends B{constructor(t){super(),j(this,t,null,S,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

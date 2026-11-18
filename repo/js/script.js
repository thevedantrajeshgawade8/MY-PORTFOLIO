// name letters
var n=document.getElementById('name');"VEDANT".split('').forEach(function(c){var s=document.createElement('span');s.textContent=c;n.appendChild(s)});
// marquee
var items=["Google Summer of Code","Open Source","Python","Generative AI","Prompt Engineering","AI APIs","n8n Automation","Git & GitHub","REST APIs"];
var m="";for(var r=0;r<2;r++)items.forEach(function(t){m+="<span>"+t+"</span><span><b>✦</b></span>"});
document.getElementById('mq').innerHTML=m+m;
// skills
var sk=["Python","Generative AI","Prompt Engineering","AI APIs","n8n Automation","Git & GitHub","HTML / CSS","Supabase","REST APIs","VS Code","Linux Basics"];
document.getElementById('skills').innerHTML=sk.map(function(s){return '<span class="pill">'+s.replace('&','&amp;')+'</span>'}).join('');
// path
var steps=["Python","Git/GitHub","APIs","Backend Development","GenAI","AI Agents","Cloud Deployment"],p=document.getElementById('path');
steps.forEach(function(s,i){var d=document.createElement('div');d.className='node'+(i<2?' on':i==2?' now':'');d.textContent=(i<2?'✓ ':i==2?'🔥 ':'')+s;p.appendChild(d);if(i<steps.length-1){var l=document.createElement('div');l.className='link';p.appendChild(l)}});
// cursor blob
var b=document.getElementById('blob');b.style.transform='translate(30vw,20vh)';
addEventListener('pointermove',function(e){b.style.transform='translate('+e.clientX+'px,'+e.clientY+'px) translate(-50%,-50%)'});
// tilt
document.querySelectorAll('.proj').forEach(function(c){
c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateY('+x*10+'deg) rotateX('+-y*10+'deg) translateY(-4px)'});
c.addEventListener('pointerleave',function(){c.style.transform=''})});
// draggable stickers
document.querySelectorAll('.stk').forEach(function(s){
var ox,oy,drag=false;
s.addEventListener('pointerdown',function(e){drag=true;s.setPointerCapture(e.pointerId);var r=s.getBoundingClientRect(),h=s.parentNode.getBoundingClientRect();ox=e.clientX-r.left;oy=e.clientY-r.top;s.style.right='auto';s.style.left=(r.left-h.left)+'px';s.style.top=(r.top-h.top)+'px'});
s.addEventListener('pointermove',function(e){if(!drag)return;var h=s.parentNode.getBoundingClientRect();s.style.left=(e.clientX-h.left-ox)+'px';s.style.top=(e.clientY-h.top-oy)+'px'});
s.addEventListener('pointerup',function(){drag=false})});
// progress + reveal
var bar=document.getElementById('bar');addEventListener('scroll',function(){var h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
document.querySelectorAll('section,.ach .box').forEach(function(e){e.classList.add('rv')});
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
// theme
var root=document.documentElement;
try{var t=localStorage.getItem('v-theme');if(t)root.setAttribute('data-theme',t)}catch(e){}
document.getElementById('theme').onclick=function(){
var cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');
var nx=cur=='dark'?'light':'dark';root.setAttribute('data-theme',nx);try{localStorage.setItem('v-theme',nx)}catch(e){}};
// email: opens Gmail compose in a new tab and copies the address as a fallback
document.getElementById('mail').addEventListener('click',function(){
var a='vedantgawade1304@gmail.com';
try{navigator.clipboard.writeText(a)}catch(e){}
var t=document.createElement('div');t.textContent='Email copied: '+a;
t.style.cssText='position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:#ffe45c;color:#14102e;font-weight:600;padding:12px 20px;border-radius:99px;z-index:99;border:2px solid #14102e';
document.body.appendChild(t);setTimeout(function(){t.remove()},2600)});

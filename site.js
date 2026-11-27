(function(){
var BP=768;
var html=document.documentElement;
var burger=document.getElementById('burger'),drawer=document.getElementById('drawer'),scrim=document.getElementById('scrim'),closeBtn=document.getElementById('drawer-close');
function setOpen(open){
if(!drawer)return;
drawer.classList.toggle('open',open);scrim.classList.toggle('open',open);
html.classList.toggle('menu-open',open);
burger.setAttribute('aria-expanded',open?'true':'false');
}
if(burger){
burger.addEventListener('click',function(){setOpen(!drawer.classList.contains('open'));});
closeBtn.addEventListener('click',function(){setOpen(false);});
scrim.addEventListener('click',function(){setOpen(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
drawer.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false);});
var mq=window.matchMedia('(min-width: '+(BP+1)+'px)');
var onChange=function(m){if(m.matches)setOpen(false);};
if(mq.addEventListener)mq.addEventListener('change',onChange);else if(mq.addListener)mq.addListener(onChange);
}
var drops=document.querySelectorAll('.has-drop > .navbtn');
for(var i=0;i<drops.length;i++){drops[i].addEventListener('click',function(e){var li=e.currentTarget.parentNode;var open=li.classList.toggle('is-open');e.currentTarget.setAttribute('aria-expanded',open?'true':'false');});}
})();

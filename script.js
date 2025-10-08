// script.js — small interactions
document.addEventListener('DOMContentLoaded',function(){
  const toggleBtns = Array.from(document.querySelectorAll('#menuToggle, #menuToggle2, #menuToggle3, #menuToggle4, #menuToggle5'));
  const nav = document.querySelector('.nav');
  toggleBtns.forEach(btn=>btn && btn.addEventListener('click',()=>{
    if(nav) nav.classList.toggle('open');
  }));
});
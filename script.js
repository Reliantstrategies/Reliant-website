const revealItems=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show')}})},{threshold:.12});
revealItems.forEach(item=>observer.observe(item));
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const body=`Name: ${data.get('name')}%0D%0AEmail: ${data.get('email')}%0D%0ABusiness: ${data.get('business')}%0D%0APhone: ${data.get('phone')}%0D%0AMessage: ${data.get('message')}`;window.location.href=`mailto:reliantstrategies@yahoo.com?subject=New Reliant Strategies Inquiry&body=${body}`;});}

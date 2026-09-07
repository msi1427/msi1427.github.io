const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.addEventListener('click', e => { if(e.target.closest('a')) { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); } });
document.addEventListener('keydown', e => {if(e.key === 'Escape' && nav.classList.contains('open')) { menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus(); }});
const aliases = {bio:'about', contacts:'contact', projects:'work', news:'publications'};
if(aliases[location.hash.slice(1)]) { location.replace('#'+aliases[location.hash.slice(1)]); }

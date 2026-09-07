const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.addEventListener('click', e => { if(e.target.closest('a')) { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); } });
document.addEventListener('keydown', e => {if(e.key === 'Escape' && nav.classList.contains('open')) { menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus(); }});
const aliases = {bio:'about', contacts:'contact', projects:'work'};
if(aliases[location.hash.slice(1)]) { location.replace('#'+aliases[location.hash.slice(1)]); }

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = themeButton.querySelector('.theme-icon');
const themeLabel = themeButton.querySelector('.theme-label');

function renderTheme(theme) {
  const dark = theme === 'dark';
  root.dataset.theme = theme;
  themeIcon.textContent = dark ? '☀' : '☾';
  themeLabel.textContent = dark ? 'Light' : 'Dark';
  themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#0b1014' : '#ffffff');
}

renderTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  renderTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});


var burger = document.querySelector('.burger');
var menu = document.getElementById('menu');
function setMenu(open) {
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.textContent = open ? '✕' : '☰';
}
burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });


var SITE_CONFIG = {
  email: 'subarnakandel21@gmail.com',      
  facebook: 'https://www.facebook.com/profile.php?id=61590707052301',   
  instagram: 'https://www.instagram.com/subarna.kdl/', 
  linkedin: ''   
};

var shown = 0;
document.querySelectorAll('[data-link]').forEach(function (a) {
  var key = a.dataset.link;
  var value = SITE_CONFIG[key];
  if (!value) { a.parentElement.remove(); return; }
  a.href = key === 'email' ? 'mailto:' + value : value;
  shown++;
});
if (shown === 0) {
  document.getElementById('links').outerHTML = '<p>My contact links will be added soon.</p>';
}
document.getElementById('year').textContent = new Date().getFullYear();

// back-to-top button
var toTop = document.getElementById('to-top');
window.addEventListener('scroll', function () {
  toTop.style.display = window.scrollY > 500 ? 'block' : 'none';
});
toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

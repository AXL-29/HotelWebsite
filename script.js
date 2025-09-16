const toggle = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

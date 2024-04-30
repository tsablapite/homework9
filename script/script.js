let btn = document.querySelector('.burger-menu');
let menu = document.querySelector('.navigation');
let arrow = document.querySelector('.arrow');
let head = document.querySelector('h1');
btn.addEventListener('click', function () {
  if (menu.style.display === (menu.style.display = 'none')) {
    menu.style.display = 'flex';
    arrow.style.display = 'none';
    head.style.display = 'none';
  } else {
    menu.style.display = 'none';
    arrow.style.display = 'flex';
    head.style.display = 'flex';
  }
});

const toggle = document.querySelector('.toggle_icon1');
const menu = document.querySelector('.menu1');
const main = document.querySelector('.main-content1');
const events = document.querySelector('.events');
const partners = document.querySelector('.partners1');

toggle.addEventListener('click', () => {
  if (!toggle.classList.contains('open')) {
    toggle.classList.toggle('open');
    main.style.display = 'none';
    menu.style.display = 'block';
    events.style.display = 'none';
    partners.style.display = 'none';
  } else {
    toggle.classList.remove('open');
    menu.style.display = 'none';
    main.style.display = 'flex';
    events.style.display = 'flex';
    partners.style.display = 'flex';
  }
});

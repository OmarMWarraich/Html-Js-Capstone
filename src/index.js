const toggle = document.querySelector('.nav_icon'); 
const menu = document.querySelector('.menu');
const main = document.querySelector('.main-content');
let i = 0;

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    main.style.display = 'none';
    menu.style.display = 'block';
    i += 1;
    if (i % 2 === 0) {
        menu.style.display = 'none';
        main.style.display = 'flex';
    }
});






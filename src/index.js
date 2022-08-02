const toggle = document.querySelector('.toggle_icon'); 
const menu = document.querySelector('.menu');
const main = document.querySelector('.main-content');
const program = document.querySelector('.program');

let i = 0;

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    main.style.display = 'none';
    menu.style.display = 'block';
    program.style.display = 'none';
    i += 1;
    if (i % 2 === 0) {
        menu.style.display = 'none';
        main.style.display = 'flex';
        program.style.display = 'flex';
    }
});








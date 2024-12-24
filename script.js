const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cross = document.getElementById('cross');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.remove('close'); 
        nav.classList.add('active');  
    });
}

if (cross) {
    cross.addEventListener('click', () => {
        nav.classList.remove('active'); 
        nav.classList.add('close');    
    });
}

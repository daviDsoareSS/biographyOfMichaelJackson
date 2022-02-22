const menuMobile = document.getElementById('menuMobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
menuMobile.addEventListener('click', toggleMenu);
menuMobile.addEventListener('touchstart', toggleMenu);


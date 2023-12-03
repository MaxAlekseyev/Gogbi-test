const breakPoint = 960;
const mediaQuery = `(max-width: ${breakPoint}px)`;
const mediaQueryList = window.matchMedia(mediaQuery);
const body = document.body;
const menu = document.querySelector('[data-role="menu"]');
const overlay = document.querySelector('#overlay');
const closeMenu = document.querySelector('#toogle_menu');

const statuses = {
    inactive: 'Inactive',
    active: 'Active'
}

const desktop = () => {
    body.classList.add('desktop')
    body.classList.remove('mobile')
    body.classList.remove('menu-on')
}

const mobile = () => {
    body.classList.add('mobile')
    body.classList.remove('desktop')
}

const query = e => e.matches ? mobile() : desktop();
window.innerWidth > breakPoint ? desktop() : mobile();

mediaQueryList.addEventListener('change', e => query(e))

const statusButtons = document.querySelectorAll('.status-button');

statusButtons.forEach(item => item.addEventListener('click', e => {
    const target = e.target;
    target.classList.toggle('inactive')
    target.classList.contains('inactive') ? target.textContent = statuses.inactive : target.textContent = statuses.active;
}));

const toogleMenu = () => body.classList.toggle('menu-on');

menu.addEventListener('click', toogleMenu);
overlay.addEventListener('click', toogleMenu);
closeMenu.addEventListener('click', toogleMenu);



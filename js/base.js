const breakPoint = 768;
const mediaQuery = `(max-width: ${breakPoint}px)`;
const mediaQueryList = window.matchMedia(mediaQuery);
const body = document.body;

const desktop = () => {
    body.classList.add('desktop')
    body.classList.remove('mobile')

}
const mobile = () => {
    body.classList.add('mobile')
    body.classList.remove('desktop')
}

const query = e =>  e.matches ? mobile() : desktop() ;
window.innerWidth > breakPoint ? desktop() : mobile();

mediaQueryList.addEventListener('change', e => query(e))



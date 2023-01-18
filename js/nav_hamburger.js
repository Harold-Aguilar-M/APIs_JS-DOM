export default function navHamburger(btnNav, nav, navLink){
    const d = document;

    d.addEventListener('click', e => {
        if(e.target.matches(btnNav) || e.target.matches(`${btnNav} *`)){
            d.querySelector(nav).classList.toggle("is-active")
        }
        if(e.target.matches(navLink)){
            d.querySelector(nav).classList.remove("is-active")
        }
    })
}
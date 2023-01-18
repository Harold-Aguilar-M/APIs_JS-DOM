const d = document;

export function scrollTop(btn){

    const $btnScrollTop = d.querySelector(btn)

    window.addEventListener('scroll', (e) => {
        if(window.pageYOffset >= window.innerHeight){
            $btnScrollTop.classList.add("is-active");
        }
        if(window.pageYOffset <= window.innerHeight){
            $btnScrollTop.classList.remove("is-active");
        }
    })

    d.addEventListener('click', (e) => {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            window.scrollTo(0,0);
            $btnScrollTop.classList.remove("is-active");
        }
    })
}
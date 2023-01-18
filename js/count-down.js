const d = document;

let dateNext = new Date(2022, 0);

export function countDown(count, mss) {
    const $count = d.querySelector(count),
        $mss = d.querySelector(mss);

    let countDown;

    countDown = setInterval(() => {
        let timeMs = dateNext.getTime() - new Date().getTime();
        let years = Math.floor(timeMs / (1000 * 60 * 60 * 24 * 365));
        let months = Math.floor(timeMs / (1000 * 60 * 60 * 24 * 31));
        let days = Math.floor(timeMs / (1000 * 60 * 60 * 24));
        let hours = Math.floor(timeMs / (1000 * 60 * 60));
        let minutes = Math.floor(timeMs / (1000 * 60));
        let seconds = Math.floor((timeMs % (1000 * 60)) / 1000);

        if (seconds < 0) {
            $count.classList.toggle("no-show-count");
            $mss.classList.remove("no-show-mss");
            clearInterval(countDown);
        } else {
            $count.innerHTML = `<span class="number"> ${years} </span> Years 
                            <span class="number"> ${months} </span> Months 
                            <span class="number"> ${days} </span> Days 
                            <span class="number"> ${hours} </span> Hours 
                            <span class="number"> ${minutes} </span> Minutes 
                            <span class="number"> ${seconds} </span> Seconds`;
        }
    }, 1000);
}
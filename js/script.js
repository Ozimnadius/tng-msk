window.addEventListener('DOMContentLoaded', function () {
    init();
})

function init() {
    setCSSVariables();

    initSliders();
}

function setCSSVariables() {
    let header = document.querySelector('.header');
    document.body.style.setProperty('--headerHeight', `${header.offsetHeight}px`);
}

function initSliders() {
    const interiorSlider = document.querySelector('.index-interior__slider');
    if (interiorSlider) {
        const interiorSwiper = new Swiper(interiorSlider.querySelector('.swiper'), {
            speed: 800,
            grabCursor: true,
            navigation: {
                nextEl: interiorSlider.querySelector('.index-interior__next'),
                prevEl: interiorSlider.querySelector('.index-interior__prev'),
            }
        });
    }


    const specialsSlider = document.querySelector('.index-specials__slider');
    if (specialsSlider) {
        const specialsSwiper = new Swiper(specialsSlider.querySelector('.swiper'), {
            slidesPerView: 2,
            spaceBetween: 20,
            speed: 800,
            grabCursor: true,
            navigation: {
                nextEl: specialsSlider.querySelector('.index-specials__next'),
                prevEl: specialsSlider.querySelector('.index-specials__prev'),
            }
        });
    }

    const teamSlider = document.querySelector('.index-team__slider');
    if (teamSlider) {
        const specialsSwiper = new Swiper(teamSlider.querySelector('.swiper'), {
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 800,
            grabCursor: true,
            navigation: {
                nextEl: teamSlider.querySelector('.index-team__next'),
                prevEl: teamSlider.querySelector('.index-team__prev'),
            }
        });
    }




}

class Events {
    constructor() {

        this.events = new Set();

        document.querySelectorAll(`[data-event]`).forEach(i => {
            i.dataset.event.split(',').forEach((event) => {
                let [eventType, eventName] = event.split('.');

                if (!this[eventName]) return;

                this.events.add(eventType);
            });
        });


        document.addEventListener("DOMContentLoaded", () => {
            this.init();
        });
    }

    init() {

        const body = document.querySelector("body");

        this.events.forEach((type) => {

            body.addEventListener(type, (e) => {
                const target = e.target.closest(`[data-event]`);
                if (!target) return;

                target.dataset.event.split(',').forEach((event) => {
                    let [eventType, eventName] = event.split('.');

                    if (type !== eventType || !this[eventName]) return;

                    this[eventName].call(this, e, target);
                });
            });
        });

    }

    openMenu(e, elem) {
        e.preventDefault();
        console.log('Open menu');
        // console.log(this);
        // console.log(e);
        // console.log(elem);
    }

    openForm(e, elem) {
        e.preventDefault();
        console.log('Open Form');
        // console.log(this);
        // console.log(e);
        // console.log(elem);
    }

    sendForm(e, elem) {
        e.preventDefault();
        console.log('Send form');
        // console.log(this);
        console.log(e);
        // console.log(elem);
    }

    inputChange(e, elem) {
        e.preventDefault();
        console.log('Change input');
        // console.log(this);
        console.log(e);
        // console.log(elem);
    }


}

new Events();

//# sourceMappingURL=script.js.map
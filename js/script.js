window.addEventListener('DOMContentLoaded', function () {
    init();
})

function init() {
    setCSSVariables();
    initSliders();
    initMap();
}

function setCSSVariables() {
    let header = document.querySelector('.header');
    document.body.style.setProperty('--headerHeight', `${header.offsetHeight}px`);
}

function initSliders() {

    const indexSliders = document.querySelectorAll('.index-slider');
    indexSliders.forEach(i => {
        new Swiper(i.querySelector('.swiper'), {
            speed: 800,
            spaceBetween: 20,
            grabCursor: true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.index-slider__pag',
                type: 'fraction',
            },
            navigation: {
                nextEl: i.querySelector('.index-slider__next'),
                prevEl: i.querySelector('.index-slider__prev'),
            }
        });
    });

    const interiorSliders = document.querySelectorAll('.index-interior__slider');
    interiorSliders.forEach(i => {
        new Swiper(i.querySelector('.swiper'), {
            speed: 800,
            spaceBetween: 20,
            grabCursor: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: i.querySelector('.index-interior__next'),
                prevEl: i.querySelector('.index-interior__prev'),
            }
        });
    });

    const specialsSlider = document.querySelector('.index-specials__slider');
    if (specialsSlider) {
        const specialsSwiper = new Swiper(specialsSlider.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800,
            grabCursor: true,
            navigation: {
                nextEl: specialsSlider.querySelector('.index-specials__next'),
                prevEl: specialsSlider.querySelector('.index-specials__prev'),
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    }

    const teamSlider = document.querySelector('.index-team__slider');
    if (teamSlider) {
        const specialsSwiper = new Swiper(teamSlider.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 40,
            speed: 800,
            grabCursor: true,
            navigation: {
                nextEl: teamSlider.querySelector('.index-team__next'),
                prevEl: teamSlider.querySelector('.index-team__prev'),
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    }
}

function initMap() {
    if (document.querySelector('#map')) {
        ymaps.ready(function () {
            let map = new ymaps.Map('map', {
                    center: [55.761071568960546, 37.64862699999996],
                    zoom: 15,
                    controls: [],
                    // behaviors: []
                }
            );
            map.behaviors.disable('scrollZoom');


            // Создание метки со сложной фигурой активной области.
            let squareLayout = ymaps.templateLayoutFactory.createClass(`<div class="placemark-container">
                                                                        <div class="placemark">
                                                                            <svg width="166" height="182" viewBox="0 0 166 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g filter="url(#filter0_b_231_1962)">
                                                                            <path d="M165.89 82.9448C165.89 125.807 133.378 161.077 91.6691 165.436L82.5367 181.025C82.5367 181.025 74.9907 167.304 73.6168 165.371C32.1987 160.736 0 125.6 0 82.9448C0 37.1357 37.1357 0 82.9448 0C128.754 0 165.89 37.1357 165.89 82.9448Z" fill="#D9D9D9" fill-opacity="0.06"/>
                                                                            <path d="M91.6171 164.939L91.3656 164.965L91.2377 165.184L82.5499 180.013C82.3491 179.649 82.0848 179.171 81.7736 178.609C81.0444 177.292 80.0578 175.515 79.0281 173.679C76.9792 170.023 74.7313 166.076 74.0244 165.081L73.8948 164.899L73.6724 164.874C32.5046 160.267 0.5 125.343 0.5 82.9448C0.5 37.4118 37.4118 0.5 82.9448 0.5C128.478 0.5 165.39 37.4118 165.39 82.9448C165.39 125.549 133.074 160.606 91.6171 164.939Z" stroke="#454545"/>
                                                                            </g>
                                                                            <defs>
                                                                            <filter id="filter0_b_231_1962" x="-9" y="-9" width="183.89" height="199.025" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.5"/>
                                                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_231_1962"/>
                                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_231_1962" result="shape"/>
                                                                            </filter>
                                                                            </defs>
                                                                            </svg>
                                                                            <div class="placemark__txt">
                                                                             ул. Покровка <br>
                                                                            д. 31 стр. 4
                                                                            </div>
                                                                        </div>
                                                                    </div>`);
            let squarePlacemark = new ymaps.Placemark(
                [55.761071568960546, 37.64862699999996], {
                    hintContent: 'ул. Покровка д. 31 стр. 4'
                }, {
                    iconLayout: squareLayout,
                    // Описываем фигуру активной области "Прямоугольник".
                    iconShape: {
                        type: 'Rectangle',
                        // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                        coordinates: [
                            [0, 0], [0, 0]
                        ]
                    }
                }
            );
            map.geoObjects.add(squarePlacemark);
        });
    }
}

function disableScroll() {
    document.body.classList.add('ovh');
}

function enableScroll() {
    document.body.classList.remove('ovh');
}

class Templates {
    constructor() {
        this.content = document.querySelector('#templates').content;
    }

    html(name) {
        return this.content.querySelector(`#${name}`).innerHTML;
    }

    close() {
        $.fancybox.close();
    }

    open(name, opt = {}) {
        $.fancybox.open(this.html(name), opt);
    }

    get current() {
        return $.fancybox.getInstance().current.$content;
    }
}

const templates = new Templates();

class Events {
    constructor() {

        this.events = new Set();
        this.$menu = document.querySelector('.menu');
        this.$popup = document.querySelector('.popup');
        this.templates = new Templates();
        this.$menuCatalog = document.querySelector('.menu-catalog');

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
        this.$menu.classList.add('active');
        disableScroll();
    }

    closeMenu(e, elem) {
        e.preventDefault();
        this.$menu.classList.remove('active');
        enableScroll();
    }

    popupOpen(e, elem) {
        e.preventDefault();
        let html = elem.querySelector('template').content.cloneNode(true);
        let $content = this.$popup.querySelector('.popup__content');
        $content.innerHTML = '';
        $content.append(html);
        this.$popup.classList.add('active');
        disableScroll();
    }

    popupClose(e, elem) {
        e.preventDefault();
        this.$popup.classList.remove('active');
        enableScroll();
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

    toggleCatalogSubmenu(e, elem) {
        e.preventDefault();
        let parent = elem.closest('.catalog-menu__item');
        let submenu = parent.querySelector('.catalog-menu__submenu');
        parent.classList.toggle('open');
        $(submenu).slideToggle(400);
    }

    detailOpen(e, elem) {
        e.preventDefault();
        let html = elem.querySelector('template').content.cloneNode(true);
        $.fancybox.open(html);
    }

    detailClose(e, elem) {
        e.preventDefault();
        $.fancybox.close();
    }

    templateOpen(e, elem) {
        e.preventDefault();
        let html = this.templates.html(elem.dataset.name);
        let $content = this.$popup.querySelector('.popup__content');
        $content.innerHTML = html;
        this.$popup.classList.add('active');
        disableScroll();
    }

    openMenuCatalog(e, elem) {

        if (window.matchMedia('(max-width: 767.98px)').matches) {
            e.preventDefault();
            this.$menuCatalog.classList.add('active');
            disableScroll();
        } else{

            this.closeMenu(e, elem);
            window.location = elem.href;
        }
    }

    closeMenuCatalog(e, elem) {
        e.preventDefault();
        this.$menuCatalog.classList.remove('active');
        enableScroll();
    }

    nextMenuCatalog(e, elem) {
        let submenu = elem.closest('.menu-catalog__item').querySelector('.menu-catalog__submenu');
        submenu.classList.add('active');
    }

    backMenuCatalog(e, elem) {
        let submenu = elem.closest('.menu-catalog__submenu');
        submenu.classList.remove('active');
    }

    restoplaceBtn(e, elem) {
        e.preventDefault();
        document.querySelector('#restoplace-btn').click()
    }

}

new Events();



//# sourceMappingURL=script.js.map
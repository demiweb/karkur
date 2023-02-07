
var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');

// var backdrop = document.querySelector('.backdrop');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                // backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

//chars hovering

//sliders


let productSlider = [...document.querySelectorAll('.product-photos')];

function startProductSlider() {
    if (!productSlider.length) {

    } else {
        let charsSingle = [...document.querySelectorAll('.single-char')];
        let colorsSingle = [...document.querySelectorAll('.single-color')];

        productSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.product-photos__cont');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                autoplay: {
                    delay: 3500,
                },
                spaceBetween: 40,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'single-dot',
                    bulletActiveClass: 'active',
                }


            });

            if (charsSingle.length) {
                let dotPhotoSlider = [...document.querySelectorAll('.product-photos .single-dot')][0];
                charsSingle.forEach((btn) => {
                    btn.addEventListener('mouseover', () => {
                        dotPhotoSlider.click();
                        swiper2.autoplay.stop();
                    });
                    btn.addEventListener('mouseout', () => {
                        swiper2.autoplay.start();
                    })
                });

                colorsSingle.forEach((btn) => {
                    btn.addEventListener('mouseover', () => {
                        dotPhotoSlider.click();
                        swiper2.autoplay.stop();
                    });
                    btn.addEventListener('mouseout', () => {
                        swiper2.autoplay.start();
                    })
                })
            }
        })

    }
}

//chars hovering

startProductSlider();


//sliders

//search focus

let searchIcon = document.querySelector('.search-icon');

function openSeach() {
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchIcon.closest('.search-block').classList.toggle('active');
        })
    }
}

openSeach();

//search focus


//modal windows

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();

                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');
                        if (mod.querySelector('.main-title')) {
                            setTimeout(() => {
                                mod.querySelector('.main-title').classList.add('done');

                            }, 500);
                        }
                        if (mod.classList.contains('modal-video')) {
                            mod.querySelector('iframe').src = btn.dataset.link;
                        }
                    }
                })
            })
        });
        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').querySelector('.main-title')) {

                    btn.closest('.modal-window').querySelector('.main-title').classList.remove('done');


                }
                if (btn.closest('.modal-window').classList.contains('modal-video')) {
                    btn.closest('.modal-window').querySelector('iframe').src = '';
                }
            })
        });
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').querySelector('.main-title')) {

                    btn.closest('.modal-window').querySelector('.main-title').classList.remove('done');


                }
                if (btn.closest('.modal-window').classList.contains('modal-video')) {
                    btn.closest('.modal-window').querySelector('iframe').src = '';
                }
            })
        });
        if (clsSecModal.length) {
            clsSecModal.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.modal-window').classList.remove('visible');
                    document.body.classList.remove('no-scroll');

                })
            });
        }
    }
}

controlModal();

//modal windows

//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//tabs



//menu subMenu
let submenuItems = [...document.querySelectorAll('.modal-menu__cont .header-center__menu .has-submenu > a')];

function controlSubMenu() {
    if (submenuItems.length) {
        submenuItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.has-submenu').classList.toggle('open');
            })
        })
    }
}

controlSubMenu();

//menu subMenu

//faq
let faqItems = [...document.querySelectorAll('.single-faq .faq-head')];

function controlFaq() {
    if (faqItems.length) {
        faqItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}

controlFaq();

//faq



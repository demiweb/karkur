
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

$(window).scroll(function (e) {
    $el = $('.course-line');
    $el.toggleClass('vis', $(this).scrollTop() > 400);

});


var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // downscroll code
        $('.filter-line').removeClass('vis');
    } else {
        // upscroll code
        $('.filter-line').addClass('vis');
    }
    lastScrollTop = st;
});

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


let topCourses = [...document.querySelectorAll('.top-courses')];

function startCoursesSLider() {
    if (!topCourses.length) {

    } else {


        topCourses.forEach((sld) => {
            let sldCont = sld.querySelector('.top-courses-slider');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop:false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 600,
                initialSlide: 2,
                centeredSlides: true,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 10,
                breakpoints: {
                    768: {
                        spaceBetween: 20,
                    }
                }


            });


        })

    }
}
startCoursesSLider();
//chars hovering


let homePLans = [...document.querySelectorAll('.our-plan')];

function startHomePlansSLider() {
    if (!homePLans.length) {

    } else {

        if (window.innerWidth < 769) {
            homePLans.forEach((sld) => {
                let sldCont = sld.querySelector('.swiper');
                let sldNext = sld.querySelector('.slider-btn--next');
                let sldPrev = sld.querySelector('.slider-btn--prev');

                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop:false,
                    slidesPerView: 'auto',
                    slidesPerGroup: 1,
                    speed: 600,
                    centeredSlides: false,
                    navigation: {
                        nextEl: sldNext,
                        prevEl: sldPrev,
                    },
                    autoplay: false,
                    spaceBetween: 10,

                });


            })
        }



    }
}
startHomePlansSLider();



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
//control menu desk

let menuOpeners = [...document.querySelectorAll('.menu-opener')];
let closerMenu = document.querySelector('.menu-closer');
let menuLinks = [...document.querySelectorAll('.header-menu .menu-item-has-children')];

function controlMenuLinks() {
    if (menuOpeners.length) {
        menuLinks.forEach((btn, k) => {
            let dataNumber = btn.dataset.menu;

            btn.addEventListener('click', (e) => {
                searchBlock.classList.remove('visible');
                searchBack.classList.remove('visible');
                closerMenu.classList.remove('visible');
                e.preventDefault();
                e.stopPropagation();
                if (btn.classList.contains('active')) {
                    document.querySelector(`.menu-opener[data-number="${Number(dataNumber)}"]`).classList.remove('visible');
                    btn.classList.remove('active');
                    closerMenu.classList.remove('visible');
                } else {
                    menuLinks.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    menuOpeners.forEach((men) => {
                        men.classList.remove('visible');
                    });

                    document.querySelector(`.menu-opener[data-number="${Number(dataNumber)}"]`).classList.add('visible');
                    btn.classList.add('active');
                    closerMenu.classList.add('visible');
                }



            })
        });
        menuOpeners.forEach((men) => {
            let menuTabsBtns = [...men.querySelectorAll('.menu-tabs-btns > a')];
            if (menuTabsBtns.length) {
                let menTabs = [...men.querySelectorAll('.menu-tabs .menu-full')];

                menuTabsBtns.forEach((btn, k) => {
                    btn.addEventListener('click',  (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        menuTabsBtns.forEach((btn2) => {
                            btn2.classList.remove('active');
                        });
                        menTabs.forEach((btn2) => {
                            btn2.classList.remove('active');
                        });
                        btn.classList.add('active');
                        menTabs[k].classList.add('active');
                    })
                })
            }
        });
        closerMenu.addEventListener('click', () => {
            closerMenu.classList.remove('visible');
            menuOpeners.forEach((men) => {
                men.classList.remove('visible');
            });
            menuLinks.forEach((men) => {
                men.classList.remove('active');
            })
        })
    }
}
controlMenuLinks();


//control menu desk

//control search desk

let openSearch = [...document.querySelectorAll('.header-search')];
let searchBlock = document.querySelector('.search-header');
let searchBack = document.querySelector('.search-backdrop');

function searchControl() {
    if (openSearch.length) {
        openSearch.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                searchBlock.classList.toggle('visible');
                searchBack.classList.toggle('visible');

                menuLinks.forEach((btn2) => {
                    btn2.classList.remove('active');
                });
                menuOpeners.forEach((men) => {
                    men.classList.remove('visible');
                });
                closerMenu.classList.remove('visible');
            })
        });
        searchBlock.querySelector('.search-closer').addEventListener('click', () => {
            searchBlock.classList.remove('visible');
            searchBack.classList.remove('visible');
        });
        searchBack.addEventListener('click', () => {
            searchBlock.classList.remove('visible');
            searchBack.classList.remove('visible');
        })
    }
}
searchControl();


//?????????????????? ?????????????? ?????? ????????????, ???????????? ???? ??????????????

let searchField = [...document.querySelectorAll('.search-field > button')];
let clearSearch = [...document.querySelectorAll('.clear-search')];
let mobileButtonToSearch = [...document.querySelectorAll('.mobile-search button')];

function controlingVisibleSearch() {
    if (searchField.length) {
        searchField.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                searchBlock.classList.add('show-results');
            })
        });
        clearSearch.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                searchBlock.classList.remove('show-results');
                document.querySelector('.search-field input').value = '';
            })
        });
        mobileButtonToSearch.forEach((btn) => {
            btn.addEventListener('click', (e) => {

                e.stopPropagation();
                e.preventDefault();
                burger[0].click();
                searchBlock.classList.add('visible');
                searchBlock.classList.add('show-results');

            })
        });
    }
}

controlingVisibleSearch();

//?????????????????? ?????????????? ?????? ????????????, ???????????? ???? ??????????????


//control search desk

//video plays

let playVideo = [...document.querySelectorAll('.video')];

function controlVideo() {
    if (playVideo.length) {
        playVideo.forEach((btn) => {
            let pl = btn.querySelector('.play');

            pl.addEventListener('click', () => {
                btn.classList.add('vis');
            })
        })
    }
}

// controlVideo();


//tp video

//play video
let irP = 0;
var player = [];

function createVideo(videoBlockId, videoId, irP) {
    player[irP] = new YT.Player(videoBlockId, {
        videoId: videoId,
        playerVars: {
            // 'autoplay':1,
            'autohide': 1,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playsinline': 1,
            'fs': 1,
            'allowsInlineMediaPlayback': true
        },
        events: {
            'onReady': function (e) {
                // e.target.mute();
                // if ($(window).width() > 991) {

                e.target.playVideo();

                // }
            },
            'onStateChange': function (e) {

            },
        }
    });
}


//play video

let botSlides = [...document.querySelectorAll('.video .play')];

function videoControlSlides() {
    if (botSlides.length) {
        botSlides.forEach((btn) => {
            let type = btn.dataset.videoType;
            let id = btn.dataset.videoId;
            let videoCont = btn.closest('.video').querySelector('.img');
            // console.log(id);
            btn.addEventListener('click', () => {
                videoCont.dataset.videoType = type;
                videoCont.dataset.videoId = id;
                // videoCont.querySelector('iframe').id = id;

                btn.closest('.video').classList.add('vis');

                let videoId = id;


                //    new 22.11.22

                if (type === 'video') {
                    let videoBl = document.createElement('video');
                    videoBl.src = id;
                    videoBl.playsinline = true;
                    videoBl.controls = true;
                    videoCont.classList.add('playing');
                    if (videoCont.querySelector('.video-frame')) {
                        document.querySelector('.video-iframe video').pause();
                    } else {
                        $(videoCont).append('<div class="video-iframe" id="' + videoId + '"></div>');
                        videoCont.querySelector('.video-iframe').append(videoBl);
                        document.querySelector('.video-iframe video').play();
                    }



                } else {

                    if (type === 'vimeo') {

                        if (videoCont.classList.contains('playing')) {
                            var player2 = new Vimeo.Player(videoCont.querySelector('iframe'));
                            if (videoCont.classList.contains('pause')) {
                                player2.play();
                                videoCont.classList.remove('pause');
                            } else {
                                player2.pause();
                                videoCont.classList.add('pause');
                            }

                        } else {
                            let videoBl = document.createElement('iframe');
                            videoBl.src = id;
                            videoBl.playsinline = true;
                            videoBl.controls = true;
                            videoBl.autoplay = true;
                            videoBl.setAttribute('allow', 'autoplay');
                            videoBl.setAttribute('frameborder', '0');
                            videoCont.classList.add('playing');
                            videoCont.append(videoBl);


                            var player2 = new Vimeo.Player(videoCont.querySelector('iframe'));

                            player2.play();
                        }




                    } else {
                        if (videoCont.classList.contains('playing')) {

                            if (videoCont.classList.contains('pause')) {
                                player[Number(videoCont.dataset.pl)].playVideo();
                                videoCont.classList.remove('pause')
                            } else {
                                player[Number(videoCont.dataset.pl)].pauseVideo();
                                videoCont.classList.add('pause')
                            }
                        } else {
                            videoCont.classList.add('playing');
                            $(videoCont).append('<div class="video-iframe" id="' + videoId + '"></div>');
                            createVideo(videoId, videoId, irP);
                            videoCont.dataset.pl = irP;
                            irP++;
                        }

                    }
                }
                //    new 22.11.22


            })
        })
    }
}

videoControlSlides();



//tp video
//video plays

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

                    }
                })
            })
        });
        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

            })
        });
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

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




let progressBtns = [...document.querySelectorAll('.course-line__cont > ul li a')];

function goToSectionProg() {
    if (progressBtns.length) {
        progressBtns.forEach((btn) => {
            let numb = btn.dataset.prog;
            if (numb) {
                let el = document.querySelector(`.page-section[data-sec="${numb}"]`);
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    $([document.documentElement, document.body]).animate({
                            scrollTop: $(el).offset().top - 81
                    }, 500);


                })
            }

        })
    }
}

goToSectionProg();

const sections = document.querySelectorAll(".page-section");

// Add an event listener listening for scroll

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - (sectionHeight / 2.5);
        sectionId = current.dataset.sec;

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            // console.log(sectionId);

            [...document.querySelectorAll(".course-line__cont > ul li a")].forEach((bts, k) => {
                if (k === (sectionId - 1)) {
                    bts.classList.add('active');
                } else {
                    bts.classList.remove('active');
                }
            })
        }
    });
}


window.onscroll = function () {
    navHighlighter();

};





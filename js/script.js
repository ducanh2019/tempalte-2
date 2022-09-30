const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.querySelector('.overlay');


const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
    overlayMenu.classList.toggle('active');
};


const collapseSubMenu = () => {
    navbarMenu.querySelector('.menu-dropdown.active .submenu').removeAttribute('style');
    navbarMenu.querySelector('.menu-dropdown.active').classList.remove('active');
};


const toggleSubMenu = (e) => {
    if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
        e.preventDefault();
        const menuDropdown = e.target.parentElement;


        if (menuDropdown.classList.contains('active')) {
            collapseSubMenu();
        } else {

            if (navbarMenu.querySelector('.menu-dropdown.active')) {
                collapseSubMenu();
            }

            menuDropdown.classList.add('active');
            const subMenu = menuDropdown.querySelector('.submenu');
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
    }
};

const resizeWindow = () => {
    if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains('active')) {
            toggleMenu();
        }
        if (navbarMenu.querySelector('.menu-dropdown.active')) {
            collapseSubMenu();
        }
    }
};

burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
navbarMenu.addEventListener('click', toggleSubMenu);
window.addEventListener('resize', resizeWindow);

// tabs
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
    var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic

    tabContent.forEach(function (el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + electronic).classList.add("active");

    btn.classList.add("active");
}

// accordion
const accItem = document.getElementsByClassName('accordionItem');
const accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}



// var SLIDER = {

//     slideMaterial: function () {
//         if (typeof Tech.$('.fSwiper') === 'undefined') return;
//         const swiperBanner = new Swiper('.fSwiper', {
//             slidesPerView: 1.5,
//             disableOnInteraction: true,
//             speed: 600,
//             freeMode: true,
//             spaceBetween: 10,
//             navigation: {
//                 nextEl: '.material-next',
//                 prevEl: '.material-prev'
//             },
//             breakpoints: {
//                 768: {
//                     slidesPerView: 2.5,
//                     spaceBetween: 16,
//                     freeMode: false,
//                 },
//                 992: {
//                     slidesPerView: 2.5,
//                     spaceBetween: 16
//                 }
//             }
//         });
//         var width_ = window.innerWidth;
//         var itemSlide = Tech.$('.fSwiper .swiper-slide');
//         var buttonSlide = Tech.$('.button-slide__material');
//         var count = itemSlide._element.length;
//         if (width_ > 991 && typeof buttonSlide !== 'undefined' && buttonSlide !== null) {
//             if (count > 2.5) {
//                 buttonSlide.removeClass('hidden');
//             }
//         }
//     },
//     init: function () {
//         SLIDER.slideMaterial();
//     },
// }
// Tech.Query.ready(function () {
//     setTimeout(function () {
//         SLIDER.init();
//     }, 100);
// });

var swiper = new Swiper(".fSwiper", {
    slidesPerView: 1,
    disableOnInteraction: true,
    speed: 600,
    freeMode: true,
    spaceBetween: 30,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button",
    },
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 16,
            freeMode: false,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    }

});
var swiper = new Swiper(".tabsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    paginationClickable: true,
    pagination: {
        el: ".swiper-pagination", clickable: true,
    },
    loop: true

});
var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
var swiper = new Swiper(".TeamSwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
});


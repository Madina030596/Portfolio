particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

//при перезагрузке страницы поднимаем скролл вверх
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
})

//фиксируем меню
const menu = document.querySelector('.header');
let menuTop = menu.getBoundingClientRect().top;
const menuHeight = menu.offsetHeight;

window.onscroll = function() {scrollFunction()}; 

function scrollFunction() {
    if(window.pageYOffset > menuTop + menuHeight || document.documentElement.scrollTop > menuTop + menuHeight) {
        menu.classList.add('fixed');
    }

    if(window.pageYOffset < menuTop || document.documentElement.scrollTop < menuTop) {
        menu.classList.remove('fixed');
    }
}

//меню-бургер
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const links = document.querySelectorAll('.header__link');

headerBurger.addEventListener("click", ()=> {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.querySelector("body").classList.toggle("lock"); 
})

links.forEach(function() {
    document.querySelector('body').addEventListener('click', e => {
    if (e.target.closest('.header__link')) {
            headerBurger.classList.remove("active");
            headerMenu.classList.remove("active");
            document.querySelector("body").classList.remove("lock");
        }
    })
})

//плавный скролл
const anchors= document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors){
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(''+ blockID).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}

//очистка формы
const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=> {
    window.addEventListener("unload", ()=> {
        resetForm();
    })
    
})

function resetForm() {
    document.querySelector(".form-container__form").reset();
}

//кнопка наверх
const upBtn = document.querySelector("#upBtn");
upBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})

AOS.init({
    delay:400,
    duration:1000,
    once: true
});

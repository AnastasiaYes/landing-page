import './../css/main.css'
import './../css/media.css'
import * as $ from 'jquery'
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'


const burgerHeader = document.querySelector('.burger_header');
const navigationContainer = document.querySelector('.navigation_container')
burgerHeader.addEventListener('click', function () {
    burgerHeader.classList.toggle('is-active');
    navigationContainer.classList.toggle('nav_active')
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 3
        },
        576: {
            items: 6
        }
    }
})

function startCount() {
    let els = document.querySelectorAll('.indicator_number');
    const time = 2000; //ms
    const step = 1;

    function outNum(num, elem) { // бегущие цифры
        let n = 0;

        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
            n = n + step;
            if (n >= num) {
                clearInterval(interval)
                n = num;
            }
            elem.innerHTML = n;
        }, t)
    }


    for (let i = 0; i < els.length; i++) {
        let elements = els[i];
        outNum(elements.innerHTML, elements)
    }
}

startCount();


const dropDownList = document.querySelectorAll('.drop-down_list');

for (let i = 0; i < dropDownList.length; i++) {
    dropDownList[i].addEventListener('click', function () {
            dropDownList[i].classList.toggle('active');
            if (dropDownList[i].classList.contains('active')) {
                const imgDropDownList = document.querySelectorAll('.drop-down_list img')
                for (let i = 0; i < imgDropDownList.length; i++) {
                    imgDropDownList[i].style.transform = 'rotate(180deg)'
                }
            }
        }
    )
}
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

        }
    )
}

const btnStandart = document.querySelector('.btn_standart');
const btnPremium = document.querySelector('.btn_premium');
const btnMonthly = document.querySelector('.btn_monthly');
const btnYearly = document.querySelector('.btn_yearly');

btnYearly.addEventListener('click', function() {
    if (btnMonthly.classList.contains('btn-active')) {
        btnMonthly.classList.remove('btn-active');
        btnYearly.classList.add('btn-active')
        btnStandart.innerText = '39';
        btnPremium.innerText = '80';
    }
})

btnMonthly.addEventListener('click', function() {
    if (btnYearly.classList.contains('btn-active')) {
        btnYearly.classList.remove('btn-active');
        btnMonthly.classList.add('btn-active')
        btnStandart.innerText = '49';
        btnPremium.innerText = '99';
    }
})

const input = document.querySelectorAll()


// const regexp = /bg/;
// const result = элемент в кот найти.match(regexp);
//
const phone = /^\+?\d{7,11}$/;
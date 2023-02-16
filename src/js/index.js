import './../css/main.css'
import './../css/media.css'
import * as $ from 'jquery'
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import '../videotube/videotube.min.css'
import '../videotube/videotube.min.js'


const burgerHeader = document.querySelector('.burger_header');
const navigationContainer = document.querySelector('.navigation_container')
burgerHeader.addEventListener('click', function () {
    burgerHeader.classList.toggle('is-active');
    navigationContainer.classList.toggle('nav_active')
})


document.addEventListener("DOMContentLoaded", function(){

    const oneLine = document.querySelector('.first_block_one_line_container');
    const twoLine = document.querySelector('.first_block_two_line_container');
    const threeLine = document.querySelector('.first_block_three_line_container');

    setTimeout(function () {
        oneLine.classList.add('line_one_active');
    }, 1000);
    setTimeout(function () {
        twoLine.classList.add('line_two_active');
    }, 2000);
    setTimeout(function () {
        threeLine.classList.add('line_three_active');
    }, 3000);
});



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
    let els = document.querySelectorAll('[data-num]');
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
        outNum(elements.dataset.num, elements)
    }
}

(function () {
    let start = false;
    window.addEventListener('scroll', function() {

        let scroll = window.scrollY;
        let scrollBlockIndicatorsContainer = document.querySelector('.block_of_indicators_container').offsetTop;

        if (scroll >= scrollBlockIndicatorsContainer-700 && !start) {
            start = true;
            startCount();
        }

    });

}());

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






window.addEventListener('scroll', function() {

    let scroll = window.scrollY;
    let scrollHowWorks = document.querySelector('#how_it_works').offsetTop;
    const topLineHowWorks = document.querySelector('.img_how_work_wrapper .top_line');
    const leftLineHowWorks = document.querySelector('.img_how_work_wrapper .left_line');
    const bottomLineHowWorks = document.querySelector('.img_how_work_wrapper .bottom_line');
    const rightLineHowWorks = document.querySelector('.img_how_work_wrapper .right_line');


    if (scroll >= scrollHowWorks-100) {
        topLineHowWorks.classList.add('top_line_animation');
        setTimeout(function () {
            leftLineHowWorks.classList.add('left_line_animation');
        }, 1000);
        setTimeout(function () {
            bottomLineHowWorks.classList.add('bottom_line_animation');
        }, 2000);
        setTimeout(function () {
            rightLineHowWorks.classList.add('right_line_animation');
        }, 3000);

    }


});

window.addEventListener('scroll', function() {
    let blockWithTextContainer = document.querySelector('.block_with_text_container').offsetTop;
    const elTagCloud = document.querySelectorAll('.tag_cloud div');
    let scroll = window.scrollY;

    if (scroll >= blockWithTextContainer) {
        for (let i = 0; i < elTagCloud.length; i++) {
            elTagCloud[i].classList.remove('tag_inactive');
            elTagCloud[i].classList.add('tag_active');
        }
    }
})




const inputs = document.querySelectorAll('footer input')
const textarea = document.querySelector('textarea')

const patterns = {
    phone_number: /^\+?\d{7,11}$/,
    name: /^[а-яёА-ЯЁ\-]{2,30}|[a-zA-Z\-]{2,30}$/,
    last_name: /^[а-яёА-ЯЁ\-]{2,30}|[a-zA-Z\-]{2,30}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    message: /(.+){20,}/
}

function validate (field, regex) {
    if(regex.test(field.value)) {
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', function (e) {
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})
    textarea.addEventListener('keyup', function (e) {
    validate(e.target, patterns[e.target.attributes.name.value]);
    console.log(e.target.attributes.name.value)
})

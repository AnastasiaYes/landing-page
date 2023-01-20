import './../css/main.css'
import './../css/media.css'
import * as $ from 'jquery'
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
// });
//
// console.log(1)

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        567:{
            items:6
        }
    }
})
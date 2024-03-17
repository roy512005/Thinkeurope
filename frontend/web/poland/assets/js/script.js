var path = window.location.pathname;
var page = path.split("/").pop();

if ("contact" == page) {
    let e = document.querySelector(".contact-us .con-row").lastElementChild;
    e.classList.replace("col-lg-4", "col-lg-8"), e.classList.add("order-lg-2", "order-1");
}

if ("book-appointment" == page) {
    let e = document.querySelector(".book-appointment > div");
    e.classList.replace("col-lg-4", "col-lg-12");
}

let x=document.querySelector('.side-form')
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.side-form').addClass('sticky-f')
    } else{
        $('.side-form').removeClass('sticky-f')
    }
});
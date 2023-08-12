
const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.getElementById("openMenu");

menuBtn.addEventListener("click" , ()=>{
    mobileNav.classList.toggle("active");
})


// image slider by JavaScript

let imgItems = ["./img/carousel-1.jpg","./img/carousel-2.jpg","./img/carousel-3.jpg"]
let img = document.querySelector("img");

count = 0;
function next(){
    count++;
    if(count >= imgItems.length){
        count = 0;
       
    }else{
        img.src = imgItems[count];
    }
  
}
function pre(){
    count--
    if(count < 0){
        count = imgItems.length - 1;
        img.src = imgItems[count];
    }else{
        img.src = imgItems[count];
    }
}

// hero section swipper js
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
// swipper js in testimonial 
// <!-- Initialize Swiper -->

// <!-- Initialize Swiper -->
 var swiper = new Swiper(".swipper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

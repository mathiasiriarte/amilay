const carouselSlide = document.getElementById("carouselContent");
const carouselImgs = document.querySelectorAll(".carousel-content img");

//BUTTONS

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//COUNTER

let sliderStart = 0;
const size = carouselImgs[0].clientWidth;

carouselSlide.style.transform = 'translateX('+(-size * sliderStart) + 'px';

//BUTTON LISTENERS

nextBtn.addEventListener('click', () => {
    if (sliderStart >= carouselImgs.length -1) return;
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    sliderStart++;
    carouselSlide.style.transform = 'translateX('+(-size * sliderStart) + 'px';
});

prevBtn.addEventListener('click', () => {
    if (sliderStart <= 0) return;
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    sliderStart--;
    carouselSlide.style.transform = 'translateX(' +(-size * sliderStart) + 'px';
})

carouselSlide.addEventListener('transitionend', () =>{
    if (carouselImgs[sliderStart].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        sliderStart = carouselImgs.length -2;
        carouselSlide.style.transform = 'translateX(' +(-size * sliderStart) + 'px';
    }
    if (carouselImgs[sliderStart].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        sliderStart = carouselImgs.length - sliderStart;
        carouselSlide.style.transform = 'translateX(' +(-size * sliderStart) + 'px';
    }
})
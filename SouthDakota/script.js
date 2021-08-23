
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
const slideHeight = slides[0].getBoundingClientRect().height;

// arange the slides next to one another

slides.style.position = fixed;

slides[2].style.bottom = slideWidth * 2 + 'px';
slides[3].style.bottom = slideWidth * 3 + 'px';
slides[4].style.bottom = slideWidth * 4 + 'px';
slides[5].style.bottom = slideWidth * 5 + 'px';
slides[6].style.bottom = slideWidth * 6 + 'px';
slides[7].style.bottom = slideWidth * 7 + 'px';
slides[8].style.bottom = slideWidth * 8 + 'px';
const setSlidePosition = (slide, index) => {
    slide.style = slideHeight * index + 'px';
};

slides.forEach(setSlidePosition);








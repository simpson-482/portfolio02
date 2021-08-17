var carouselImages = document.querySelector('carousel__images');
var carouselButtons = document.querySelector('.carousel__button');
var numberOfImages = document.querySelectorAll('carousel__images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.id === 'previous') {
            if (imageIndex !== 1) {
                imageIndex--;
                translate += 300;
            }
        } else {
            if(imageIndex !== numberOfImages){
                imageIndex++;
                translateX -= 300;
            }
        }
        carouselImages.getElementsByClassName.transform = 'translateX(${translateX}px)'
    });
});
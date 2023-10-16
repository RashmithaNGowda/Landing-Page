const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

showSlide(slideIndex);

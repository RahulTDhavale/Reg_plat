console.log("Hii");
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 550; // Adjust slide width as needed
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentIndex);
//     setInterval(nextSlide, 3000); // Change image every 3 seconds
// });

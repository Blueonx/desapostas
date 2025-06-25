// Carrossel automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Muda slide a cada 5 segundos
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
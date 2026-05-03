const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 2; // Başlangıçta ortadaki (3. fotoğraf) aktif olsun

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    // Kaydırma mesafesini hesapla (320px = genişlik + gap)
    const offset = -(currentIndex * 320) + (slider.parentElement.offsetWidth / 2) - 150;
    slider.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// İlk yüklemede slaytı konumlandır
window.onload = updateSlider;

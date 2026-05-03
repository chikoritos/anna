const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});
let currentIndex = 2;

/* AKTİF GÜNCELLE */
function updateSlider() {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === currentIndex) img.classList.add('active');
  });

  const offset =
    images[currentIndex].offsetLeft -
    slider.clientWidth / 2 +
    images[currentIndex].clientWidth / 2;

  slider.style.transform = `translateX(-${offset}px)`;
}

/* CLICK */
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

/* MOUSE */
window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
  } else {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
  }
  updateSlider();
});

/* 📱 MOBİL SWIPE */
let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  e.preventDefault();
  endX = e.touches[0].clientX;
}, { passive: false });

slider.addEventListener('touchend', () => {
  let diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      currentIndex++;
      if (currentIndex >= images.length) currentIndex = 0;
    } else {
      currentIndex--;
      if (currentIndex < 0) currentIndex = images.length - 1;
    }
    updateSlider();
  }
});

updateSlider();

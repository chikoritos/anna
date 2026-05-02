const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');

let currentIndex = 2;

function updateSlider() {
  images.forEach((img, index) => {
    img.classList.remove('active');
    if (index === currentIndex) {
      img.classList.add('active');
    }
  });

  const offset = (images[currentIndex].offsetLeft - slider.clientWidth / 2 + images[currentIndex].clientWidth / 2);
  slider.style.transform = `translateX(-${offset}px)`;
}

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, images.length - 1);
  } else {
    currentIndex = Math.max(currentIndex - 1, 0);
  }
  updateSlider();
});

updateSlider();

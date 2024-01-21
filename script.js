
const banner = document.getElementById('banner-container');
const images = document.querySelectorAll('.banner-image');
const dotsContainer = document.getElementById('dots-container');

for (let i = 0; i < images.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
  dot.addEventListener('click', () => showImage(i));
}

let currentIndex = 0;
images[currentIndex].style.opacity = 1;
dotsContainer.children[currentIndex].classList.add('active');

function showImage(index) {
  images[currentIndex].style.opacity = 0;
  dotsContainer.children[currentIndex].classList.remove('active');

  currentIndex = index;

  images[currentIndex].style.opacity = 1;
  dotsContainer.children[currentIndex].classList.add('active');
}

function autoChangeImage() {
  showImage((currentIndex + 1) % images.length);
}

setInterval(autoChangeImage, 3000);
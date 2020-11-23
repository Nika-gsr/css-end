const images = [
    'img/health.png',
    'img/myth.png',
    'img/health.png',
];
let currentIdx = 0;
function slide() {
    currentIdx = ++currentIdx > images.length - 1 ? 0 : currentIdx;
    showSlide(currentIdx);
}
setInterval(slide, 3000);
function back() {
    currentIdx = --currentIdx < 0 ? images.length - 1 : currentIdx;
    showSlide(currentIdx);
}
function showSlide(idx) {
    document.querySelector('.carousel img').src = images[idx];
}
const images = [
    innerHTML = <img src="img/health.png" class="d-block" alt="health">
   
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
    document.querySelector('.carousel').img = images[idx];
}

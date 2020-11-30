const images = [
    `<div class="carousel-item active">
    <img src="img/blog/blog-wind.png" class="d-block" alt="health">
    <div class="carousel-caption">
      <a href="blog.html##health-article">
        <h5>Чи шкідливий кондиціонер для здоров’я?</h5>
        <p>Значну частину нашого життя ми проводимо в замкнутому просторі: офісі, супермаркетах, квартирі або котеджі.</p>
      </a>
    </div>
  </div>`,
    `<div class="carousel-item active">
    <img src="img/blog/blog-grey.png" class="d-block" alt="...">
    <div class="carousel-caption">
      <a href="blog.html#sick-article">
        <h5>Поради, як не захворіти від кондиціонера</h5>
        <p>Незважаючи на шалену популярність кондиціонерів, їх і досі бояться постійно вмикати, щоб не захворіти. </p>
      </a>
    </div>
  </div>`,
    `<div class="carousel-item active">
    <img src="img/blog/blog-sofa.png" class="d-block" alt="...">
    <div class="carousel-caption">
      <a href="blog.html#myth-article">
        <h5>Міфи про кондиціонери</h5>
        <p>Серед усієї побутової техніки кондиціонери чи не найбільше обросли величезною кількістю міфів.
        </p>
      </a>
    </div>
  </div>`,
  ];
  
  let currentIndex = 0;
  const interval = setInterval(slide, 3000);
  
  function slide() {
    currentIndex = ++currentIndex > images.length - 1 ? 0 : currentIndex;
    showSlide(currentIndex);
  }
  
  function showSlide(currentIndex) {
    document.querySelector(".carousel").innerHTML = images[currentIndex];
  }
  
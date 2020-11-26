const images = [
`<a href="blog.html#defect">
<div class="carousel-item active">
<img src="img/blog-wind.png" class="d-block" alt="health">
<div class="carousel-caption">
    
        <h5>Чи шкідливий кондиціонер для здоров’я?</h5>
        <p>Значну частину нашого життя ми проводимо в замкнутому просторі:
            офісі, супермаркетах,
            квартирі
            або котеджі.</p>
   
</div>
</div>
</a>`,

`<a href="blog.html#sick">
<div class="carousel-item active">
<img src="img/blog-grey.png" class="d-block" alt="...">
<div class="carousel-caption">

											<h5>Поради, як не захворіти від кондиціонера</h5>
											<p>Незважаючи на шалену популярність кондиціонерів, їх і досі
												бояться постійно вмикати, щоб
												не захворіти. </p>
										
									</div>
                                </div>
                                </a>`,
                                
                                ` <a href="blog.html#false">
                                <div class="carousel-item active">
                                <img src="img/blog-sofa.png" class="d-block" alt="...">
                                <div class="carousel-caption">
                                   
                                        <h5>Міфи про кондиціонери</h5>
                                        <p>Серед усієї побутової техніки кондиціонери чи не найбільше
                                            обросли величезною кількістю
                                            міфів.</p>
                                  
                                </div>
                            </div>
                            </a>`
    
]


let currentIndex = 0; 
const interval = setInterval(slide, 3000);

function slide() {
    currentIndex =  ++currentIndex > images.length - 1 ? 0 : currentIndex;
    showSlide(currentIndex);
    
}


function showSlide(currentIndex) {
    document.querySelector('.carousel').innerHTML = images[currentIndex];
    
}
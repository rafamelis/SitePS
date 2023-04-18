var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

const elementH1 = document.querySelector ('section h1');
const container = document.querySelector ('.container');
elementH1.addEventListener('click', () =>{

    container.classList.toggle('active')

})
// Passo 1: Obter os elementos do DOM
const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');
const carouselDom = document.querySelector('.carousel');
const sliderDom = carouselDom.querySelector('.list');
const thumbnailBorderDom = carouselDom.querySelector('.thumbnail');
const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
const timeDom = carouselDom.querySelector('.time');

// Definir os tempos de transição
const timeRunning = 3000;
const timeAutoNext = 7000;

let runTimeOut;
let runNextAuto;

// Função para mostrar o próximo ou o anterior slide
function showSlider(type) {
    const sliderItems = sliderDom.querySelectorAll('.item');

    if (type === 'next') {
        sliderDom.appendChild(sliderItems[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        sliderDom.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

// Ação de clique no botão "Próximo"
nextDom.addEventListener('click', () => {
    showSlider('next');
});

// Ação de clique no botão "Anterior"
prevDom.addEventListener('click', () => {
    showSlider('prev');
});

// Iniciar automaticamente o carrossel
function startCarousel() {
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

// Chamar a função para iniciar o carrossel
startCarousel();

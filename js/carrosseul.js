let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Função para mover slides
function moveSlide(direction) {
    currentSlide += direction;

    // Limitar o slide ao primeiro e último
    if (currentSlide >= totalSlides) {
        currentSlide = totalSlides - 1;
    }
    if (currentSlide < 0) {
        currentSlide = 0;
    }

    // Mover o contêiner para o slide correto e centralizá-lo
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Atualizar o estado dos botões
    updateButtons();
}

// Função para atualizar o estado dos botões
function updateButtons() {
    // Desativar o botão "prev" se estivermos no primeiro slide
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === totalSlides - 1;
}

// Função para mudar o slide automaticamente a cada 3.5 segundos
function autoSlide() {
    setInterval(function() {
        if (currentSlide < totalSlides - 1) {
            moveSlide(1);
        } else {
            currentSlide = -1; // Reiniciar ao chegar ao último slide
        }
    }, 3500);
}

// Inicializar o estado dos botões e transição automática dos slides
updateButtons();
autoSlide();

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
    if (currentSlide === 0) {
        prevButton.disabled = true;
        prevButton.title = "Você está no primeiro slide"; // Adiciona título ao botão desativado
    } else {
        prevButton.disabled = false;
        prevButton.title = ""; // Remove o título quando o botão é reativado
    }

    // Desativar o botão "next" se estivermos no último slide
    if (currentSlide === totalSlides - 1) {
        nextButton.disabled = true;
        nextButton.title = "Você está no último slide"; // Adiciona título ao botão desativado
    } else {
        nextButton.disabled = false;
        nextButton.title = ""; // Remove o título quando o botão é reativado
    }
}

// Função para mudar o slide automaticamente a cada 2 segundos
function autoSlide() {
    setInterval(function() {
        if (currentSlide < totalSlides - 1) {
            moveSlide(1); // Avança para o próximo slide
        } else {
            currentSlide = -1; // Reinicia o ciclo ao chegar no último slide
        }
    }, 3500); // Intervalo de 2 segundos
}

// Inicializar o estado dos botões
updateButtons();

// Iniciar a transição automática dos slides
autoSlide();

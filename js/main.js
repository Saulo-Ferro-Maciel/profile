async function init() {
    await atualizarSaudacao();
    const phrase = document.querySelector('.saudacao');
    typeWrite(phrase);

    const outroElemento = document.querySelector('.headline');
    typeWrite(outroElemento);

    // Animações da Página
    animationScroll('logo', 'animate__backInLeft', [0], 30);
    animationScroll('slider-container', 'animate__backInRight', [0, 0.5], 30);
    animationScroll('photo', 'animate__backInDown', [0.5], 10);
}



init();

// Animações da Página
animationScroll('logo', 'animate__backInLeft', [0], 100, 500);
animationScroll('slider-container', 'animate__backInRight', [0, 0.5], 100, 500);
animationScroll('content', 'animate__backInUp', [0], 10, 2000);
animationScroll('photo', 'animate__backInDown', [0.5], 10, 2000);
animationScroll('table', 'animate__bounceInLeft', [1], 1060, 500);
animationScroll('table2', 'animate__flash', [1], 1060, 500);
animationScroll('set','animate__bounceInUp',[0, 0.5], 30, 500);

setInterval(() => {init(); }, 18000);


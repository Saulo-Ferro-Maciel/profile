function animationScroll(elemento, animacao, tamanho, delay) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Função para remover classes após a animação terminar
                function handleAnimationEnd() {
                    target.classList.remove('animate__animated', animacao);
                    target.removeEventListener('animationend', handleAnimationEnd);
                }

                // Verifica se a animação já foi aplicada
                if (!target.classList.contains('animate__animated')) {
                    // Inicia o temporizador
                    setTimeout(() => {
                        // Adiciona a classe de animação após o delay
                        target.classList.add('animate__animated', animacao);

                        // Adiciona o listener de evento 'animationend'
                        target.addEventListener('animationend', handleAnimationEnd);
                    }, delay);
                }
            }
        });
    }, {
        threshold: tamanho,
        rootMargin: '0px 0px -50% 0px' // Adiciona margem negativa para evitar rolagem para o início
    });

    // Use querySelectorAll para observar múltiplos elementos
    document.querySelectorAll(`.${elemento}`).forEach(el => observer.observe(el));
}

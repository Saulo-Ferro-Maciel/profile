function animationScroll(elemento, animacao, tamanho, delay, lockTime) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Função para remover classes após a animação terminar
                function handleAnimationEnd() {
                    target.classList.remove('animate__animated', animacao);
                    target.removeEventListener('animationend', handleAnimationEnd);

                    // Inicia o bloqueio após a animação terminar
                    lockAnimation(target);
                }

                // Verifica se a animação já foi aplicada ou está em bloqueio
                if (!target.classList.contains('animate__animated') && !isLocked(target)) {
                    // Adiciona a classe de animação após o delay
                    setTimeout(() => {
                        target.classList.add('animate__animated', animacao);
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

    // Mapa para armazenar o estado de bloqueio dos elementos
    const lockedElements = new Map();

    // Função para bloquear a animação de um elemento
    function lockAnimation(element) {
        lockedElements.set(element, true);
        setTimeout(() => {
            lockedElements.delete(element);
        }, lockTime);
    }

    // Função para verificar se um elemento está bloqueado
    function isLocked(element) {
        return lockedElements.has(element);
    }
}

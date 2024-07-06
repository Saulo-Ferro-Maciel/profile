function typeWrite(element) {
    const textoCompleto = element.textContent;
    element.textContent = '';

    let index = 0;
    const typingInterval = setInterval(function() {
        element.textContent += textoCompleto[index];
        index++;
        
        if (index >= textoCompleto.length) {
            clearInterval(typingInterval);
        }
    }, 108);
}
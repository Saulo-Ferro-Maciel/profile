function toggleContent(contentId, button) {
    const contentBox = document.getElementById(contentId);

    contentBox.classList.toggle('show');
    if (contentBox.classList.contains('show')) {
        button.textContent = 'Veja Menos';

        if (contentId === 'content-box'){
            contentBox.style.marginBottom = '98px';
        }
    } else {
        button.textContent = 'Veja Mais';

        if (contentId === 'content-box'){
            contentBox.style.marginBottom = '10px';
        }
    }
}
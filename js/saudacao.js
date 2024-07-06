async function atualizarSaudacao() {
    const elemento = document.querySelector('.saudacao');
    const element2 = document.querySelector('.apresentacao');

    const agora = new Date();
    const horas = agora.getHours();
    let saudacao;

    if (horas >= 6 && horas < 12) {
        saudacao = 'Olá, bom dia!';
    } else if (horas >= 12 && horas < 18) {
        saudacao = 'Olá, boa tarde!';
    } else {
        saudacao = 'Olá, boa noite!';
    }

    const apresetacao = 'Me chamo Saulo Ferro';
    
    elemento.innerHTML = saudacao;
    element2.innerHTML = apresetacao;
}
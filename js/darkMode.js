const setDayMode = () => {
    document.body.style.background = 'linear-gradient(to right, cornflowerblue, #0ba6ff)';

    document.querySelector('.body').style.background = 'white'
    document.querySelector('.body').style.color = 'black';

    document.querySelector('.ts1').style.display = 'block';
    document.querySelector('.ts2').style.display = 'none';

    document.querySelector('.c-sharp1').style.display = 'block';
    document.querySelector('.c-sharp2').style.display = 'none';

    let sol = document.querySelector('.sun')
    sol.style.opacity = '1';

    let lua = document.querySelector('.moon')
    lua.style.opacity = '.5';
  };
  
  const setNightMode = () => {
    document.body.style.background = 'linear-gradient(to right, #5e6064, #1b1e23)';
    
    document.querySelector('.body').style.background = '#666666'
    document.querySelector('.body').style.color = 'white';

    document.querySelector('.ts1').style.display = 'none';
    document.querySelector('.ts2').style.display = 'block';

    document.querySelector('.c-sharp1').style.display = 'none';
    document.querySelector('.c-sharp2').style.display = 'block';
    
    let sol = document.querySelector('.sun')
    sol.style.opacity = '.5';

    let lua = document.querySelector('.moon')
    lua.style.opacity = '1';
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    const toggle = document.getElementById('toggle');
  
    // Inicializa a aparência da página conforme a hora do dia
    if (hour >= 1 && hour < 18) {
      setDayMode();
    } else {
      setNightMode();
    }
  });
  
const navContainer = document.querySelectorAll('.header');

navContainer.forEach(container => {
  const navMobile = container.querySelector('.nav-mobile');
  const logo = container.querySelector('.logo');
  const burger = container.querySelector('.menuburger');
  
  burger.addEventListener('click', () => {
    if (navMobile.style.display === 'flex') {
      navMobile.style.display = 'none';
      logo.style.display = 'block';
    } else {
      navMobile.style.display = 'flex';
      logo.style.display = 'none';
    }
  });
});

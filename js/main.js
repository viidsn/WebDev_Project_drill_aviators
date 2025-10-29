// Change header style on scroll
(function() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Инициализация (выполнить один раз на загрузке)
  onScroll();
  window.addEventListener('scroll', onScroll);
})();
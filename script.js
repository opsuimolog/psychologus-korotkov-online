document.addEventListener('DOMContentLoaded', () => {
  // Динамический год в футере
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Мобильное меню
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Закрывать меню при клике по ссылке
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // FAQ Аккордеон
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Закрываем остальные
      faqItems.forEach(el => el.classList.remove('active'));

      // Переключаем текущий
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Обработка формы контактов
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо за заявку! Ваше сообщение отправлено.');
      contactForm.reset();
    });
  }
});
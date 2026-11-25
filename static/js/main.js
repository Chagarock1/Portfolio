console.log('Project started');

document.addEventListener('DOMContentLoaded', function () {
  // 1. Мобільне меню (бургер)
  const burger = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (burger && navMenu) {
    burger.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });
  }

  // 2. Фільтрація карток за категорією
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card[data-category]');

  if (filterBtns.length > 0 && cards.length > 0) {
    filterBtns.forEach(function (button) {
      button.addEventListener('click', function () {
        filterBtns.forEach(function (btn) {
          btn.classList.remove('active');
        });
        button.classList.add('active');

        const category = button.getAttribute('data-filter');

        cards.forEach(function (card) {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Модальне вікно для деталей байка
  const modal = document.getElementById('details-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const modalClose = document.getElementById('modal-close');
  const detailButtons = document.querySelectorAll('.btn-details');

  if (modal && modalClose) {
    detailButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const title = btn.getAttribute('data-title');
        const specs = btn.getAttribute('data-specs');

        modalTitle.textContent = title;
        modalText.textContent = specs;
        modal.classList.add('show');
      });
    });

    modalClose.addEventListener('click', function () {
      modal.classList.remove('show');
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }

  // 4. Валідація та обробка форми контактів
  const contactForm = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-message');

  if (contactForm && successMsg) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const nameField = document.getElementById('user-name');
      const emailField = document.getElementById('user-email');
      const textField = document.getElementById('user-message');

      if (!nameField.value.trim() || !emailField.value.trim() || !textField.value.trim()) {
        alert('Будь ласка, заповніть усі поля!');
        return;
      }

      successMsg.textContent = 'Дякуємо, ' + nameField.value + '! Ваше повідомлення надіслано.';
      successMsg.style.display = 'block';

      contactForm.reset();

      setTimeout(function () {
        successMsg.style.display = 'none';
      }, 4000);
    });
  }
});

function modal() {
  const postData = async (server, data) => {
    const promise = await fetch(server, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });

    return await promise.json();
  };

  const modalTrigggers = document.querySelectorAll('[data-modal]');
  const modalWindow = document.querySelector('.modal');
  const body = document.body;

  const closeModal = () => {
    modalWindow.classList.remove('show', 'fadeModal');
    modalWindow.classList.add('hide', 'fadeModal');
    body.classList.remove('overflow');
  };
  const openModal = () => {
    modalWindow.classList.remove('hide', 'fadeModal');
    modalWindow.classList.add('show', 'fadeModal');
    body.classList.add('overflow');

    clearInterval(timerModal);
  };

  modalTrigggers.forEach((trigger) => {
    trigger.addEventListener('click', openModal);
  });

  modalWindow.addEventListener('click', (e) => {
    if (
      e.target === modalWindow ||
      e.target.getAttribute('data-close') === ''
    ) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModal();
    }
  });

  const timerModal = setTimeout(openModal, 10000);

  const showModalByScroll = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  };

  window.addEventListener('scroll', showModalByScroll);

  // Validate Forms

  const forms = document.querySelectorAll('form');

  forms.forEach((formElement) => bindPostData(formElement));

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо за обратную связь!<br />Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так',
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display:block;
                margin: 0 auto
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        .then((response) => {
          console.log(response);
          showThinksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThinksModal(message.failure);
        })
        .finally(() => form.reset());
    });
  }

  function showThinksModal(message) {
    const previousModalDialog = document.querySelector('.modal__dialog');
    previousModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        </div>`;

    document.querySelector('.modal').append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      previousModalDialog.classList.remove('hide');
      previousModalDialog.classList.add('show');
      closeModal();
    }, 4000);
  }
}

module.exports = modal;

import { postData } from '../services/ajax';
import { closeModal, openModal } from './modal';

function forms(formElements, timerModal) {
  const forms = document.querySelectorAll(formElements);

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
    openModal('.modal', timerModal);

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
      closeModal('.modal');
    }, 4000);
  }
}

export default forms;

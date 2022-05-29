export const closeModal = (modalSelector) => {
  const modalWindow = document.querySelector(modalSelector);
  const body = document.body;

  modalWindow.classList.remove('show', 'fadeModal');
  modalWindow.classList.add('hide', 'fadeModal');
  body.classList.remove('overflow');
};
export const openModal = (modalSelector, timerModal) => {
  const modalWindow = document.querySelector(modalSelector);
  const body = document.body;

  modalWindow.classList.remove('hide', 'fadeModal');
  modalWindow.classList.add('show', 'fadeModal');
  body.classList.add('overflow');

  clearInterval(timerModal);
};

export function modal(triggerSelector, modalSelector, timerModal) {
  const modalTriggers = document.querySelectorAll(triggerSelector);
  const modalWindow = document.querySelector(modalSelector);

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () =>
      openModal(modalSelector, timerModal)
    );
  });

  modalWindow.addEventListener('click', (e) => {
    if (
      e.target === modalWindow ||
      e.target.getAttribute('data-close') === ''
    ) {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  const showModalByScroll = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSelector, timerModal);
      window.removeEventListener('scroll', showModalByScroll);
    }
  };

  window.addEventListener('scroll', showModalByScroll);
}

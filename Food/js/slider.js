export const simpleSlider = () => {
  const slides = document.querySelectorAll('.offer__slide'),
    btnNext = document.querySelector('.offer__slider-next'),
    btnPrev = document.querySelector('.offer__slider-prev'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total');

  let slideIndex = 1;

  slides.length < 10
    ? (total.textContent = `0${slides.length}`)
    : (total.textContent = slides.length);

  const showSlide = (slide) => {
    if (slide > slides.length) {
      slideIndex = 1;
    }

    if (slide < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => slide.classList.add('hide'));
    slides[slideIndex - 1].classList.remove('hide');
    slides[slideIndex - 1].classList.add('show');

    slideIndex < 10
      ? (current.textContent = `0${slideIndex}`)
      : (current.textContent = slideIndex);
  };

  const handleSlides = (n) => showSlide((slideIndex += n));

  btnNext.addEventListener('click', () => handleSlides(1));
  btnPrev.addEventListener('click', () => handleSlides(-1));

  showSlide(slideIndex);
};

const simpleSlider = () => {
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

export const carousel = () => {
  const slides = document.querySelectorAll('.offer__slide'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    btnNext = document.querySelector('.offer__slider-next'),
    btnPrev = document.querySelector('.offer__slider-prev'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    widthWrapper = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesWrapper.style.overflow = 'hidden';

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = 'all 0.5s ease';

  slides.forEach((slide) => {
    slide.style.width = widthWrapper;
  });

  btnNext.addEventListener('click', () => {
    if (offset === parseFloat(widthWrapper) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += parseFloat(widthWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    slideIndex < 10
      ? (current.textContent = `0${slideIndex}`)
      : (current.textContent = slideIndex);
  });

  btnPrev.addEventListener('click', () => {
    if (offset === 0) {
      offset = parseFloat(widthWrapper) * (slides.length - 1);
    } else {
      offset -= parseFloat(widthWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    slideIndex < 10
      ? (current.textContent = `0${slideIndex}`)
      : (current.textContent = slideIndex);
  });
};

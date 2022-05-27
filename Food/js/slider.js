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
  const slider = document.querySelector('.offer__slider'),
    slides = document.querySelectorAll('.offer__slide'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    btnNext = document.querySelector('.offer__slider-next'),
    btnPrev = document.querySelector('.offer__slider-prev'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    widthWrapper = window.getComputedStyle(slidesWrapper).width,
    dotsWrapper = document.querySelector('.carousel-indicators');

  let dots = [];
  let slideIndex = 1;
  let offset = 0;

  checkSlide(slides, current, total, slideIndex);

  slider.style.position = 'relative';
  createDots(dotsWrapper, slides.length);

  slidesWrapper.style.overflow = 'hidden';

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = 'all 0.5s ease';

  slides.forEach((slide) => {
    slide.style.width = widthWrapper;
  });

  btnNext.addEventListener('click', () => {
    if (offset === deleteNotDigits(widthWrapper) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(widthWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex >= slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    slideIndex < 10
      ? (current.textContent = `0${slideIndex}`)
      : (current.textContent = slideIndex);

    activeDot(dots, slideIndex);
  });

  btnPrev.addEventListener('click', () => {
    if (offset === 0) {
      offset = deleteNotDigits(widthWrapper) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(widthWrapper);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex <= 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    slideIndex < 10
      ? (current.textContent = `0${slideIndex}`)
      : (current.textContent = slideIndex);

    activeDot(dots, slideIndex);
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = deleteNotDigits(widthWrapper) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      checkSlide(slides, current, total, slideIndex);

      activeDot(dots, slideIndex);
    });
  });

  function createDots(wrapper, length) {
    for (let i = 1; i <= length; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.setAttribute('data-slide-to', i);

      if (i === 1) {
        dot.style.opacity = 1;
      }

      wrapper.append(dot);
      dots.push(dot);
    }
  }

  activeDot(dots, slideIndex);

  function activeDot(arr, index) {
    arr.forEach((dot) => (dot.style.opacity = '.5'));
    arr[index - 1].style.opacity = 1;
  }

  function checkSlide(slides, currentSlide, totalSlides, index) {
    if (slides.length < 10) {
      totalSlides.textContent = `0${slides.length}`;
      currentSlide.textContent = `0${index}`;
    } else {
      totalSlides.textContent = slides.length;
      currentSlide.textContent = index;
    }
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }
};

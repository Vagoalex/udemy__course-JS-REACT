'use strict';

const btnPhone = document.querySelector('#iphone'),
  btnMacbook = document.querySelector('#macbook'),
  images = document.querySelectorAll('img');

let phoneAnimation;
let btnMacbookAnimation;

btnPhone.addEventListener('click', () => {
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate(
      [
        { transform: 'translateY(0) rotate(0deg)', filter: 'opacity(100%)' },
        {
          transform: 'translateY(100px) rotate(180deg)',
          filter: 'opacity(50%)',
        },
        {
          transform: 'translateY(-100px) rotate(270deg)',
          filter: 'opacity(750%)',
        },
        { transform: 'translateY(0) rotate(360deg)', filter: 'opacity(100%)' },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (phoneAnimation.playState === 'paused') {
    phoneAnimation.play();
  } else {
    phoneAnimation.pause();
  }
});

btnMacbook.addEventListener('click', () => {
  if (!btnMacbookAnimation) {
    btnMacbookAnimation = images[1].animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)  translateX(20px)' },
        { transform: 'scale(1.5) translateX(40px)' },
        { transform: 'scale(1.2)  translateX(20px)' },
        { transform: 'scale(1)' },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (btnMacbookAnimation.playState === 'paused') {
    btnMacbookAnimation.play();
  } else {
    btnMacbookAnimation.pause();
  }
});

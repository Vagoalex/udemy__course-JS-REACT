const btn = document.querySelector('.btn'),
  elem = document.querySelector('.box');

function myAnimation() {
  let pos = 0;

  const interval = setInterval(frame, 10);

  function frame() {
    if (pos === 300) {
      clearInterval(interval);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

let pos = 0;

function myAnimationNew() {
  pos++;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';

  if (pos < 300) {
    requestAnimationFrame(myAnimationNew);
  }
}

function myAnimationNewReverse() {
  pos--;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';

  if (pos > 0) {
    requestAnimationFrame(myAnimationNewReverse);
  }
}

btn.addEventListener('click', () => {
  if (pos === 0) {
    requestAnimationFrame(myAnimationNew);
  } else if (pos === 300) {
    requestAnimationFrame(myAnimationNewReverse);
  }
});

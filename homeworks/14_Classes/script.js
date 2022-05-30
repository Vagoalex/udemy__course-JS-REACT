'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  square() {
    if (typeof this.height !== 'number' && this.height !== 'number') {
      const height = parseFloat(this.height);
      const width = parseFloat(this.width);
      return `Площадь: ${height * width}`;
    } else {
      return `Площадь: ${this.height * this.width}`;
    }
  }

  sum() {
    if (typeof this.height !== 'number' && this.height !== 'number') {
      const height = parseFloat(this.height);
      const width = parseFloat(this.width);
      return `Сумма: ${(height + width).toFixed(2)}`;
    } else {
      return `Сумма: ${(this.height + this.width).toFixed(2)}`;
    }
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, bgColor, text) {
    super(height, width);
    this.bgColor = bgColor;
    this.text = text;
  }

  showMyProps() {
    if (typeof this.height !== 'number' && this.height !== 'number') {
      const height = parseFloat(this.height);
      const width = parseFloat(this.width);
      return `Высота: ${height}\nШирина: ${width}\nЦвет: ${this.bgColor}\nТекст: ${this.text}\n`;
    } else {
      return `Высота: ${this.height}\nШирина: ${this.width}\nЦвет: ${this.bgColor}\nТекст: ${this.text}\n`;
    }
  }

  showText() {
    return `Вы ввели: "${this.text}"`;
  }

  showBgColor() {
    const lowerColor = this.bgColor.toLowerCase();

    return `Цвет фона: ${
      lowerColor.slice(0, 1).toUpperCase() + lowerColor.slice(1)
    }`;
  }
}

const rectangle = new Rectangle('10см', '23.23 мм');

console.log(rectangle.sum());
console.log(rectangle.square());

const coloredTextedRectangle = new ColoredRectangleWithText(
  '15см',
  '25.25',
  'white',
  'This is my Rectangle'
);

console.log(coloredTextedRectangle.sum());
console.log(coloredTextedRectangle.square());
console.log(coloredTextedRectangle.showText());
console.log(coloredTextedRectangle.showBgColor());

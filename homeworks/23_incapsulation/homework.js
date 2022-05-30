'use strict';

class Hero {
  constructor(health, strength, stamina) {
    this._health = health;
    this._strength = strength;
    this._stamina = stamina;
  }

  #game = 'Allods';
  #platform = 'playstation 5';

  logStats = () => {
    console.log(
      `Stats of this Hero:\n=> GAME: ${this.#game}\n=> PLATFORM: ${
        this.#platform
      }\n- Health: ${this._health}\n- Strength: ${this._strength}\n- Stamina: ${
        this._stamina
      }`
    );
  };

  get heroHealth() {
    return this._health;
  }
  set heroHealth(num) {
    this._health = num;
  }
}

const defaultHero = new Hero(100, 100, 100);
defaultHero.logStats();
console.log(defaultHero.heroHealth);
defaultHero.heroHealth = 120;

defaultHero.logStats();

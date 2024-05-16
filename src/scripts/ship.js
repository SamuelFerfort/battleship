export default class Ship {
  constructor(hp) {
    this.hp = hp;
  }

  hit() {
    this.hp--;
  }
  isSunk() {
    return this.hp === 0;
  }
}

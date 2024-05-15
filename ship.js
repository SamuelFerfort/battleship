export default class Ship {
  constructor(hp) {
    this.hp = 10;
  }

  hit() {
    this.hp--;
  }
  isSunk() {
    return this.hp === 0;
  }
}

class Wall {
  constructor(bottles) {
    this.bottles = bottles;
  }
  fall = (n) => this.bottles -= n
}

export default Wall;

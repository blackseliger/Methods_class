// TODO: write your code here

class Character {
  constructor(level, attack, defence, health) {
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
  }

  levelup() {
    try {
      if (this.health <= 0) throw new Error();
      this.level += 1;
      this.attack += ((this.attack / 100) * 20);
      this.defence += ((this.defence / 100) * 20);
      this.health = 100;
    } catch (e) {
      throw new Error('Character has dead :(');
    }
  }
}

export default Character;
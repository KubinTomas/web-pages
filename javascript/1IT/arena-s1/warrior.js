class Warrior {
    name;

    hp;
    damage;
    defense;

    constructor(name, hp, damage, defense) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
        this.defense = defense;
    }

    isAlive() {
        return this.hp > 0;
    }

    attack(enemy) {
        enemy.def(this.damage);
    }

    def(dmg) {
        if (dmg > this.defense) {
            this.hp = this.hp - dmg + this.defense;
        }
    }

    status() {
        return `${this.name}, HP: ${this.hp}`;
    }
}   
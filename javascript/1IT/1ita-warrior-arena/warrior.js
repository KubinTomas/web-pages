class Warrior {
    name;
    hp;
    dmg;
    def;

    constructor(name, hp, dmg, def) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.def = def;
    }

    defense(dmg) {
        this.hp -= dmg;
    }

    attack(enemy) {
        enemy.defense(dmg);
    }

    isAlive() {
        return hp > 0;
    }
}
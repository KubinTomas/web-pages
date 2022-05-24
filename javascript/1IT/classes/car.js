class Car {
    fuel;
    maxFuelCapacity;
    traveledDistance;
    consumption;

    constructor() {
        maxFuelCapacity = 30;
        fuel = maxFuelCapacity / 2;
        traveledDistance = 0;
        consumption = 7.5;
    }

    hasEnoughtFuel() {
        return fuel >= consumption;
    }

    drive() {
        if (hasEnoughtFuel()) {
            fuel -= consumption;
            traveledDistance += 100;
        } else {
            console.log('Need gas!');
        }
    }

    refillFuel() {
        fuel = this.maxFuelCapacity;
    }
}
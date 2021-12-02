function onCalculatePowerClick() {
    const number = document.getElementById("number").value;
    const power = document.getElementById("power").value;

    const result = calculatePower(number, power);

    const resultElement = document.getElementById("result");

    resultElement.innerHTML = `Result is: ${result}`;
}

function calculatePower(number, power) {
    let result = number;

    for (let i = 1; i < power; i++) {
        result *= number;
    }

    return result;
}
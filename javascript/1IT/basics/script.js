// Udelejte funkci, ktera prijme pole cisel a najde minimum
// Udelejte funkci, ktera prijme pole cisel a najde maximum
// Udelejte funkci, ktera prijme pole cisel a vrati prumer
// Udelejte dve funkce isOdd, isEven
// Udelejte funkci, ktera prijme pole cisel a secta jen suda cisla
// Udelejte funkci, ktera prijme pole cisel a secta jen licha cisla
// Udelejte funkci, ktera prijme userName, userAge, title a vypise do konzole.. Ahoj: {userName}, je vam {userAge} a asi jste {title}.




let numbers = [3, 2, 4, 10, 2, 4, 1];
min([1, 2, 3, 4, 5]);
min([1, 2]);
min(numbers);

min([1, 2, 3]);
min([7, 8, 9]);
function min(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];

        if (element < min) {
            min = element;
        }
    }

    return min;
    // return Math.min(...numbers);
}

function max(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element > max) {
            max = element;
        }
    }

    return max;
    // return Math.max(...numbers);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function sum(numbers) {
    let sum = 0;

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];

        sum += element;
    }

    return sum;
}

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return !isEven(number);
}

function sumEven(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (isEven(element)) {
            sum += element;
        }

    }

    return sum;
}

function sumOdd(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (isOdd(element)) {
            sum += element;
        }

    }

    return sum;
}

function outputUserInfo(userName, userAge, title) {
    // Ahoj: {userName}, je vam {userAge} a asi jste {title}
    const msg = "Ahoj: " + userName + ", je vam " + userAge + " a asi jste " + title;
    const msg2 = `Ahoj: ${userName}, je vam ${userAge} a asi jste ${title}`;

    console.log(msg2);
}


function onTitleClick(name) {
    const titleElement = document.getElementById('title');
    titleElement.innerHTML = name;
    titleElement.style.color = 'red'; // => style="color: red"
}
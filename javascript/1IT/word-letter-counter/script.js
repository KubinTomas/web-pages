const counterElement = document.getElementById('counter');

function updateWordLetterCounter(input) {
    const letterCount = input.value.length;
    const wordCount = input.value.split(' ').filter(c => c.length != 0).length;

    console.log(input.value.split(' ').filter(c => c.length != 0))
    console.log(input.value.split(' '))

    counterElement.innerHTML = `Slov: ${wordCount}, znaky: ${letterCount}`;
}
const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Characters = (string) => string.substring(0, 6);
const reverse = (string) =>
    string
        .split('')
        .reverse()
        .join('');


getName({ name: 'Buckethead' });
uppercase('Buckethead');

pipe(
    getName,
    uppercase,
    get6Characters,
    reverse
)({ name: 'Buckethead' });
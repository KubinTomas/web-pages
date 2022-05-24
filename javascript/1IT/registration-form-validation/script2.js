const user = {
    firstName: 'John',
    secondName: 'Doe',
    age: 21,
    city: {
        name: 'San Francisco',
        id: 'San',
        isNice: true
    },
    favoriteBooks: [
        'Sam', 'A', 'B'
    ],
    favoriteFoods: [
        {
            name: 'Pizzu',
            ingredients: [
                {

                }
            ]
        }
    ],
    hello: function (x) {
        console.log('Nazdar', this.firstName, x);
    }
};

user.hello(223);

console.log(user.age);
console.log(user.city.name);
console.log(user.favoriteBooks[0]);
user.favoriteFoods.forEach(food => {
    console.log(food.name);
});

const books = [
    { id: 2, name: 'Alenka', categoryName: 'Scifi' },
    { id: 2, name: 'Alenka', categoryName: 'Scifi' },
    { id: 2, name: 'Alenka', categoryName: 'Scifi' },
    { id: 2, name: 'Alenka', categoryName: 'Scifi' },
]
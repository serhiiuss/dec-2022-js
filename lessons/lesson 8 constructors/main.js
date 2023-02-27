// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let userList = [
    new User(1, 'name1', 'surname6', 'qweasdzxc1@gmail.com', +38012312312),
    new User(12, 'name12', 'surname66', 'qweasdzxc2@gmail.com', +38012312312),
    new User(10, 'name4', 'surname6666', 'qweasdzx3c@gmail.com', +38012312312),
    new User(8, 'name11', 'surname777', 'qweasdzxc4@gmail.com', +38012312312),
    new User(6, 'name111', 'surname888', 'qweasdzxc5@gmail.com', +38012312312),
    new User(4, 'name11d', 'surname999', 'qweasdzxc6@gmail.com', +38012312312),
    new User(3, 'name117', 'surname000', 'qweasdzxc7@gmail.com', +38012312312),
    new User(5, 'name18', 'surname00', 'qweasdzxc8@gmail.com', +38012312312),
    new User(2, 'name12', 'surname1111', 'qweasdzx9c@gmail.com', +38012312312),
    new User(7, 'name13', 'surname5555', 'qweasdzxc10@gmail.com', +38012312312),
    ];
console.log(userList);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = userList.filter((user) => {
    return user.id % 2 === 0;
});
console.log(filteredUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = userList.sort((a, b) => {
    return a.id - b.id
});
console.log(sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class client {
    constructor(name, surname , email, phone, order) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients =  [
    new client(1, 'name1', 'surname6', 'qweasdzxc1@gmail.com', ['product20', 'product21', 'product22']),
    new client(12, 'name12', 'surname66', 'qweasdzxc2@gmail.com', ['product18', 'product19']),
    new client(10, 'name4', 'surname6666', 'qweasdzx3c@gmail.com', ['product17']),
    new client(8, 'name11', 'surname777', 'qweasdzxc4@gmail.com', ['product15', 'product16']),
    new client(6, 'name111', 'surname888', 'qweasdzxc5@gmail.com', ['product10', 'product11', 'product13', 'product14']),
    new client(4, 'name11d', 'surname999', 'qweasdzxc6@gmail.com', ['product9']),
    new client(3, 'name117', 'surname000', 'qweasdzxc7@gmail.com', ['product6', 'product7', 'product8']),
    new client(5, 'name18', 'surname00', 'qweasdzxc8@gmail.com', ['product4', 'product5']),
    new client(2, 'name12', 'surname1111', 'qweasdzx9c@gmail.com', ['product3']),
    new client(7, 'name13', 'surname5555', 'qweasdzxc10@gmail.com', ['product1', 'product2']),
];
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortik = clients.sort ((clientA, clientB) => clientA.order.length - clientB.order.length);
    console.log(sortik);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function car (model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску:${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    class cars {
        constructor(model, manufacturer, year, maxSpeed, engineVolume) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineVolume = engineVolume;
            this.drive = function () {
                console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
            }

            this.info = function () {
                console.log(`Модель: ${this.model}`);
                console.log(`Виробник: ${this.manufacturer}`);
                console.log(`Рік випуску: ${this.year}`);
                console.log(`Максимальна швидкість: ${this.maxSpeed}`);
                console.log(`Об'єм двигуна: ${this.engineVolume}`);
            }

            this.increaseMaxSpeed = function (newSpeed) {
                this.maxSpeed += newSpeed;
            }

            this.changeYear = function (newValue) {
                this.year = newValue;
            }

            this.addDriver = function (driver) {
                this.driver = driver;
            }
        }
    }
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cindrella{
        constructor(name, age, shoesize) {
        this.name = name;
        this.age = age;
        this.shoesize = shoesize;
        }
}
    let cinderellaArray = [
        { name: "Tatiana", age: 18, shoesize: 39 },
        { name: "Belle", age: 20, shoesize: 37 },
        { name: "Aurora", age: 16, shoesize: 38 },
        { name: "Jasmine", age: 19, shoesize: 40 },
        { name: "Rapunzel", age: 18, shoesize: 36 },
        { name: "Tiana", age: 21, shoesize: 35 },
        { name: "Snow White", age: 14, shoesize: 41 },
        { name: "Merida", age: 16, shoesize: 42 },
        { name: "Pocahontas", age: 18, shoesize: 35 },
        { name: "Mulan", age: 18, shoesize: 35 }
    ];
class Prince {
    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }
}};
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let massive
massive = [1,2,3,4,5,6,7,8,9,10];
console.log(massive)

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let person = {
    title: 'Naruto',
    pageCount: '365',
    genre: 'anime',
}
console.log(person)

let person1 = {
    title: 'TheBoys',
    pageCount: '25',
    genre: 'fantasy',
}
console.log(person1)

let person2 = {
    title: 'Flash',
    pageCount: '150',
    genre:'serial',
}
console.log(person2)
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let person3 = [
    {authors: [{name:'123', age:'asd'}], title:'Spider man', genre:'fantasy', pageCount: '656'},
    {authors: [{name:'123', age:'asd'}], title:'Spider man', genre:'fantasy', pageCount: '656'},
    {authors: [{name:'123', age:'asd'}], title:'Spider man', genre:'fantasy', pageCount: '656'}
     ]
console.log(person3);

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'},
    {user:name='petya', username:'petro2001', password:'petyatop1'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// let x = 1;
// let x = 0;
let x = -3;
x !==0 ? console.log(true) : console.log(false);
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('введіть число');

if (time >= 0 && time <= 14) {
    console.log('В першу частину години');
}
if (time >= 15 && time <= 30) {
    console.log('В другу частину години.');
}
if (time >= 31 && time <= 45) {
    console.log('В третю частину години.');
}
if (time >= 46 && time <= 59) {
    console.log('В четверту частину години.');
}
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('введіть число');

if (day >= 1 && day <= 11) {
    console.log('В першу частину декаду');
}
if (day >= 12 && day <= 22) {
    console.log('В другу частину декаду.');
}
if (day >= 23 && day <= 31) {
    console.log('В третю частину декаду.');
}
//Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let asd =prompt('enter number')
switch(asd) {
    case'1':
        console.log('Monday');
    break;
    case'2':
        console.log('Tuesday');
        break;
    case'3':
        console.log('Wednesday');
        break;
    case'4':
        console.log('Thursday');
        break;
    case'5':
        console.log('Friday');
        break;
    case'6':
        console.log('Saturday');
        break;
    case'7':
        console.log('Sunday');
        break;
}
// Користувач вводить або має два числа.
    // Потрібно знайти та вивести максимальне число з тих двох .
    // Також потрібно врахувати коли введені рівні числа.
let a = 1
let b = 2
if (a === b){
    console.log(a, 'i', b, 'числа рівні');

}else if (a > b) {
    console.log(a, 'більше за', b);
} else if (a < b){
    console.log(a, 'менше за', b);
}
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let c;
if (c === 0 || c === false || c === '' || c === `` || c === "" || c === undefined || c === -0 || c === NaN || c === null) {
    c = c || 'default';
}
console.log(c);
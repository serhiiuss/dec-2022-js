// 1 Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
const str = 'hello world'
console.log(str.slice.length);
const str1 = 'lorem ipsum'
console.log(str.slice.length);
'javascript is cool'
console.log(str.slice.length);

// 2 Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
const strr = 'hello world'
console.log('hello world'.toLocaleUpperCase());
const strr1 = 'lorem ipsum'
console.log('lorem ipsum'.toLocaleUpperCase());
const strr2 = 'javascript is cool'
console.log('javascript is cool'.toLocaleUpperCase());

// 3 Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const strrr = 'hello world'
console.log('hello world'.toLocaleLowerCase());
const strrr1 = 'lorem ipsum'
console.log('lorem ipsum'.toLowerCase());
const strrr2 = 'javascript is cool'
console.log('javascript is cool'.toLocaleLowerCase());

// 4 Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let stri = ' dirty string   '
console.log(str.replace(/ /g,''));

// 5 Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів
var strq = 'Ревуть воли як ясла повні';
function stringToarray(str){
    return str.split(" ");
}
var arr = stringToarray(strq);
document.write(arr);

// 6  є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
var arr1 = [10,8,-7,55,987,-1011,0,1050,0]
var mas=arr.map( function(e) {
    return e.split(' ');} );
console.log(arr1)

// 7 створити функцію sortNums(direction),
// яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
var nums = [11,21,3];
nums.sort(function (a,b){
    return a - b;
});
console.log(nums);
var numss = [11,21,3];
numss.sort(function (b,a){
    return a - b;
});
console.log(numss);

// 8 є массив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// let filteredarray = coursesAndDurationArray.sort((a,b) =>{
//     if (a.monthDuration > b.monthDuration){
//         return 1;
//     }
//     if (a.monthDuration < b.monthDuration){
//         return -1
//     }
//     if  (a.monthDuration === b.monthDuration){
//         return 0
//     }
// });
// console.log(filteredarray);
//let filtered = coursesAndDurationArray.filter((function (value) {
//    return value.monthDuration > 5;
// }))
// console.log(filtered);

//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти

// - всі буби
// - всі трефи від 9 та більше
let card = [
    {
        cardSuit: 'spades',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'spades',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'spades',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'spades',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'spades',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'spades',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'spades',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'spades',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'spades',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'diamonds',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'diamonds',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'diamonds',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'diamonds',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'diamonds',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'diamonds',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'diamonds',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'diamonds',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'diamonds',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: '6',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: '7',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: '8',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: '9',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: '10',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'hearts',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black',
    },

]

// - знайти піковий туз
card.forEach(item => {
    if (item.cardSuit === 'spades' && item.value === 'ace') {
        console.log(item)
    }
})
// - всі шістки
card.forEach(item => {
    if (item.value === '6') {
        console.log(item)
    }
})
// - всі червоні карти
card.forEach(item => {
    if (item.color === 'red') {
        console.log(item)
    }
})
// - всі буби
card.forEach(item => {
    if (item.cardSuit === 'diamonds') {
        console.log(item)
    }
})
// - всі трефи від 9 та більше
card.forEach(item => {
    if (item.cardSuit === 'clubs' && item.value > '8') {
        console.log(item)
    }
})
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

console.log(card.reduce((accumulator, value) => {
    if (value.cardSuit === 'spades') {
        accumulator.spades.push(value);
    } else if (value.cardSuit === 'diamonds') {
        accumulator.diamonds.push(value);
    } else if (value.cardSuit === 'hearts') {
        accumulator.hearts.push(value);
    } else if (value.cardSuit === 'clubs')
        accumulator.clubs.push(value);
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let dockermod = coursesArray.filter(search => search.modules.includes('docker'));
console.log(dockermod)
let sassmod = coursesArray.filter(search => search.modules.includes('sass'));
console.log(sassmod)


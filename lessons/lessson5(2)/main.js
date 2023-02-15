// 1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calculator = (a, b,) => a * b;
console.log(calculator(10,20));


// 2 створити функцію яка обчислює та повертає площу кола з радіусом r
let calc = (a,b,c) => 3.14 * r * r;

// 3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calc1 = (a,b,c,d,e) => 2 * pi * r1 * h + 2 * pi * r1 * r1;

// 4 створити функцію яка приймає масив та виводить кожен його елемент
let foo1 = (a,b,c) => '' + '' + '';
console.log('asd','qwe','zxc')

// 5 створити функцію яка створює параграф з текстом. Текст задати через аргумент
let foo2 =(text) => `<p>${text}</p>`;
console.log('adsddasdas');

// 6 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let qwe = (li) => {
    document.write(`
    <div>
    <ul>
    <li>${li}</li>
    <li>${li}</li>
    <li>${li}</li>
</ul>
</div>
    `)
}

qwe('text');

// 7створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let fooz = (text,num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<div>${text}</div>`)
    }
    document.write(`</ul>`)
}
fooz('qwe', 1);

// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
const array = [1,2,'hello',true,false[1,2,3]];
let  fooq = arr =>{
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
fooq(array);

// 9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: false}
];

let bl = (object) => {
    for (const Element of object) {
        document.write(`<div>${Element.id} ${Element.name} ${Element.age}</div>`)
    }

}

bl(users);
// 10 створити функцію яка повертає найменьше число з масиву
let  number = (arr) =>{
    let min = number[0];
    for (const number of numbers) {
        if (min > number);{
            min = number
        }
    }
    return min;
}
console.log(number([11,12,33]));

// 11 створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let num = [1,3,6]
let sum = (arr) => {
    let key = 0;
    for (const Element of arr) {
        key += Element
    }
    return key
}

console.log(sum(num))


// 12  створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let p = [11,22,33,44]
    let swap = (arr, index1, index2) =>{
        let v1 = arr[index1];
        let v2 = arr[index2];
        arr[index1] = v2;
        arr[index2] = v1;
        return arr
    }
    console.log(swap([11,22,33,44,],0,1));

// 13 Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const Element of currencyValues) {
        if (Element.currency === exchangeCurrency) {
            return sumUAH / Element.value;
        }
    }
}

exchange(
    10000,
    [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42},
        {currency: 'GBP', value: 43}
    ],
    'USD'
)
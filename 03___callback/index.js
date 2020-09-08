

// замыкания - это функция внутри другой функции
function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

// calc - это функция которую вернула функция createCalcFunction
const calc = createCalcFunction(42)
calc()

// calc вызывается без параметров, но результат: 42000
// число 42 было запомнено, замкнуто
// поэтому называют замыканием

// =====================================

function createIncrementor(n) {
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

// addOne замкнуло в себе значение 1
// и постоянно прибавляет 1 к переданному параметру

console.log(addOne(10))
console.log(addOne(15))

console.log(addTen(10))
console.log(addTen(15))


// ===========================
function urlGenerator(domain) {
    return function (url) {
        console.log(`https://${url}.${domain}`)
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(comUrl('google'))


// =============================

/*
Написать свою функцию bind

Пример работы:


function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Mikle', age: 22, job: 'frontend'}
const person2 = {name: 'Elena', age: 19, job: 'smm'}

bind(person1, logPerson)
bind(person2, logPerson)
*/

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Mikle', age: 22, job: 'frontend'}
const person2 = {name: 'Elena', age: 19, job: 'smm'}


function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

bind(person1, logPerson)
bind(person2, logPerson)


function hello() {
    console.log('hello', this)
}

const person = {
    name: 'Maxim',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(Window),
    logInfo(job, phone) {
        console.group(`${this.name} info: `)
        console.log(`Name is ${this.name}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23,

}
// const fnLenaInfoLog = person.logInfo.bind(lena,'frontend', '8-999-888-77-66')
// fnLenaInfoLog()

// bind - привязывает контекст, и возвращает новую функцию
// требует вызова
person.logInfo.bind(lena, 'frontend', '8-999-888-77-66')()

// call - привязывает контекст и сразу вызывает
person.logInfo.call(lena, 'frontend', '8-999-888-77-66')

// apply - привязывает контекст и сразу вызывает
// принимает всегда 2 параметра
person.logInfo.apply(lena, ['frontend', '8-999-888-77-66'])


// ==============================

// написать функцию которая умножит каждое значение массива на число
// которое будем передавать
const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }
//
// console.log(multBy(array, 5))

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}
console.log(array.multBy(2));

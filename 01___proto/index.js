// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet(){
//         console.log('Greet')
//     }
// }

const person = new Object({
    name: 'Maxim',
    age: 25,
    greet(){
        console.log('Greet')
    }
})

Object.prototype.sayHello = function () {
    console.log('hello')
    return true
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')




// enumerable - включить/отключить возможность итерации по свойству объекта
// по умолчанию false

// writable - возможность изменения значения полей
// по умолчанию false

// configurable - возможность удалять ключ из объекта
// по умолчанию false

const person = Object.create(
    {
        calculateAge(){
            console.log('Age: ', new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Jack',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1994,
            enumerable: true,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(v) {
                console.log(v)
            }
        }
    })

console.log(person);
console.log(person.age)

// person.name = 'Maxim'

for (let key in person) {
    if (!person.hasOwnProperty(key)) continue
    console.log('Key: ', key, person[key])
}




















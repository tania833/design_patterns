function User(name) {
    this.name = name

    this.say = function () {
        console.log(`I am a user, my name is ${this.name}`)
    }
}

function DecoratedUser(user, country, street) {
    this.name = user.name
    this.country = country
    this.street = street

    this.say = function () {
        console.log(`I am a decorated user, my name is ${this.name}, i live in ${this.country}, ${this.street}`)
    }
}

const user = new User('Tetiana')
user.say()

const decoratedUser = new DecoratedUser(user, 'Ukraine', 'Kyiv')
decoratedUser.say()
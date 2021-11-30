const Factory = function () {
    this.say = function () {
        console.log(`I am ${this.type} and my hourly rate is ${this.hourly}`)
    }
    this.create = function (type) {
        if (!this[type]) {
            throw new Error('such type doesn`t exist')
        }


        if (typeof this[type].prototype.say !== "function") {
            this[type].prototype = new Factory();
        }

        const newEmployee = new this[type]()
        newEmployee.type = type

        return newEmployee
    }

    this.FullTime = function () {
        this.hourly = '12$'
    }
    this.PartTime = function () {
        this.hourly = '11$'
    }
    this.Temporary = function () {
        this.hourly = '10$'
    }
    this.Contractor = function () {
        this.hourly = '15$'
    }
}

class FactoryClass {
    constructor() { }
    create(type) {
        // if (typeof this[type].prototype.say != 'function') {
        //     this[type].prototype = new FactoryClass()
        // }

        const newEmployee = new this[type]()
        newEmployee.type = type
        newEmployee.say = function () {
            console.log(`I am ${this.type} and my hourly rate is ${this.hourly}`)
        }

        return newEmployee
    }

    // say() {
    //     console.log(`I am ${this.type} and my hourly rate is ${this.hourly}`)
    // }
    FullTime = function () {
        this.hourly = '12$'
    }
    PartTime = function () {
        this.hourly = '11$'
    }
    Temporary = function () {
        this.hourly = '10$'
    }
    Contractor = function () {
        this.hourly = '15$'
    }
}

// const factory = new Factory()
const factory = new FactoryClass()

const fulltime = factory.create('FullTime')
const parttime = factory.create('PartTime')
const temporary = factory.create('Temporary')
const contractor = factory.create('Contractor')
// const hello = factory.create('hello')

fulltime.say()
parttime.say()
temporary.say()
contractor.say()
// hello.say()

const Shipping = function () {
    this.setStrategy = function (company) {
        this.company = company
    }

    this.calculate = function (package) {
        return this.company.calculate(package)
    }
}

const UPS = function () {
    this.calculate = function (package) { return package * 2 }
}

const USPS = function () {
    this.calculate = function (package) { return package * 4 }
}

const Fedex = function () {
    this.calculate = function (package) {
        return package * 6
    }

}

const ups = new UPS()
const usps = new USPS()
const fedex = new Fedex()

const shipping = new Shipping()

// shipping.setStrategy(ups)
// console.log("UPS Strategy: " + shipping.calculate(2))

// shipping.setStrategy(usps)
// console.log("USPS Strategy: " + shipping.calculate(2))

// shipping.setStrategy(fedex)
// console.log("Fedex Strategy: " + shipping.calculate(2))


const formData = {
    first_name: 'Hanna',
    second_name: 'hhhj',
    age: 'hh'
}

const validation = {
    types: {
        hasLength: {
            validate: function (value) {
                return value.length != 0
            }
        },
        isNumber: {
            validate: function (value) {
                return !isNaN(value)
            }
        }
    },
    config: {
        first_name: 'hasLength',
        age: 'isNumber'
    },
    validate: function (data) {
        this.messages = []
        for (let property in data) {
            if (data.hasOwnProperty(property)) {

                const type = this.config[property]
                if (!type) {
                    continue
                }

                const checker = this.types[type]
                if (!checker) {
                    throw {
                        name: "ValidationError",
                        message: "No handler to validate type " + type
                    };
                }

                const result_ok = checker.validate(property)
                if (!result_ok) {
                    this.messages.push(`Not valid ${property}`)
                }
            }
        }
        return this.hasErrors()
    },
    hasErrors: function () {
        console.log(this.messages)
        return this.messages.length === 0;
    }
}

console.log(validation.validate(formData))
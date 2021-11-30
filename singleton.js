const Singleton = (function () {
    let instance

    const createInstance = () => {
        return new Object()
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})()

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log("Same instance? " + (instance1 === instance2));
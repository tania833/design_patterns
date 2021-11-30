const Iterator = (function () {
    let index = 0
    const items = ["one", 2, "circle", true, "Applepie"]

    return {
        hasNext: function () {
            return index < items.length
        },

        next: function () {
            if (this.hasNext()) {
                const el = items[index]
                index++
                return el
            }
            return 'no items left, please, run first()'
        },

        reset: function () {
            index = 0
        },

        first: function () {
            this.reset()
            return this.next()
        }
    }
})()

const iter = Iterator
// console.log(iter.next(), iter.next(), iter.next(), iter.next(), iter.next(), iter.next(), iter.first(), iter.next())

// while (iter.hasNext()) {
//     console.log(iter.next());
// }

const random = require('./random')

const predict_numbers = [
    48,
    230,
    5290,
    7984,
    3744,
    4018
]

describe("Predict random number", () => {
    for(let index in predict_numbers) {
        it(`predict ${index}: `, () => {
            expect(random()).toBe(predict_numbers[index])
        })
    }
})
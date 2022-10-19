// const arrayPascal = require('./pascal') 
// test('test arrayPascal', function() {
//     expect(arrayPascal(5)).toEqual([1, 5, 10, 10, 5, 1]) ;
// })
const arrayPascal = require('./pascal') 

const array = [
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1]
]

test('test arrayPascal', function() {
    const length = array.length
    for(var i = 0; i < length; i++) {
        expect(arrayPascal(i+1)).toEqual(array[i]);
    }
})
const arrayPascal = require('./pascal') 
test('test arrayPascal', function() {
    expect(arrayPascal(5)).toEqual([1, 5, 10, 10, 5, 1]) ;
})
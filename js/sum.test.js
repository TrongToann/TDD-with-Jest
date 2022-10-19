const sum = require('./sum') 
test('test sum', function() {
    expect(sum(1, 3)).toBe(3) ;
})
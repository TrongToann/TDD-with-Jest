const array = require('./arrayClone') 
test('test array', function() {
    const testArray = [1,2,3] ;
    expect(array(testArray)).toEqual(testArray) ;  
})
const arrayPascal = require('./pascal') 

describe("Test ArrayPascal", () => {
    it("Test Function with right ", () => {
        expect(arrayPascal(5)).toEqual([1, 5, 10, 10, 5, 1]) ;
    })
    it("Test Function with wrong", () => {
        expect(() => {arrayPascal(6) } ).toThrowError("Invalid Number!") ; 
    })
});




const arrayPascal = require('./pascal') 

describe("Test ArrayPascal", () => {
    it("Test Function with right ", () => {
        expect(arrayPascal(3)).toEqual([1, 3, 3, 1]) ;
    })
    it("Test Function with wrong", () => {
        expect(() => { arrayPascal(6) }).toThrowError("Invalid Number") ; 
    })
});




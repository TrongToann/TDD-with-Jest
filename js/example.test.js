const findInsideArray = require('./example') ;
test('Play with true or false', () => {
    const n = "aaaa" ; 
    expect(findInsideArray('ahihi')).toBeTruthy() ;
})
//toBeFalsy()
//toBeTruthy()
test('Play with Number', () => {
    const a = 0.2 ; 
    const b = 0.3 ; 
    expect(a + b).toBeGreaterThan(0.4) ; 
    expect(a + b).toBeLessThan(0.6) ;
    expect(a + b).toBeGreaterThanOrEqual(0.5) ;
    expect(a + b).toBeLessThanOrEqual(0.5) ;
})
test("Regex With Email", () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
    expect("nguyentrongtoan9a1nbk@gmail.com").toMatch(regex) 
})
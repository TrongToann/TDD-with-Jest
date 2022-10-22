const findInsideArray = require('./example') ; 
test('Play with true or false', () => {
    expect(findInsideArray('GiaBao')).toBeFalsy()
})
//toBeFalsy()
//toBeTruthy()
//toMatch
test("Regex With Email", () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
    expect("nguyentrongtoan9a1nbk@gmail.com").toMatch(regex) 
})


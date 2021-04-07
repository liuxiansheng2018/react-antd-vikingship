test('test common matcher', ()=> {
    expect(2+2).toBe(4)
    expect(2+2).not.toBe(5)
})

test('test to be true or false', () => {
    expect(1).toBeTruthy() // 1 为 true
    expect(0).toBeFalsy() // 0 为 false
})

test('test number', () => { //4 比 3大
    expect(2).toBeLessThan(3)   // 2 比 3 小
})

test('test object', ()=> {
    expect({name: 'viking'}).toEqual({name: 'viking'}) // toEqual 完全相同
})
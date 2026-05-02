const { default: expect } = require('expect');
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test ('3.5 euros es igual a 3.75 dolares', ()=>{
    let total = fromEuroToDollar (3.5)
    expect(total).toBe("3.75");
});

test('100 dolar es igual a 14,626.17 yen', ()=>{
    let total = fromDollarToYen (100);
    expect(total).toBe("14626.17")
})

test('100 yens es igual a .56 pound', ()=>{
    let total = fromYenToPound(100);
    expect(total).toBe("0.56");
});
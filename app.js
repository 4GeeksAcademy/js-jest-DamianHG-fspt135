let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (eur) =>{
    return ((eur * oneEuroIs.USD).toFixed(2));
};

const fromDollarToYen = (usd) =>{
    let euro = usd / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return yen.toFixed(2);}



const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    return pound.toFixed(2);
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(100));
console.log(fromYenToPound(100));
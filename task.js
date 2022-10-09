// 3.1

const menupulate = (first) => first / 5;
const total = menupulate(100);
console.log(total);

// =============================================================
// 3.2

let a = function (x, y) {
    const cap = x + y + 2
    return cap*2
}
const p = a(20, 10);
console.log(p);

// =============================================================

// 3.3
let therePeramiter = function (one, two, three) {
    return one * two * three;
}
const threeTotal = therePeramiter(12, 72, 34);
console.log(threeTotal);

// =========================================================
// 5
const fiveTimes = [7, 6, 19, 51, 31, 11, 12].map(x => x * 5);
console.log(...fiveTimes);

// =============================================================

// 6 
const oddNumbers = [21, 16, 61, 52, 76, 22, 72, 64, 77, 98, 55, 33, 93, 65, 99];
const odd = oddNumbers.filter(x => {
    return x % 2 !== 0;
})
console.log(odd);

// ===========================================================

// 7

const foodPrice = [
    { item: 'fizza', price: 999 },
    { item: 'burger', price: 100 },
    { item: 'sandwich', price: 300},
    { item: 'pasta', price: 1000 },
    { item: 'nuduls', price: 898 },
    { item: 'puchka', price: 526 },
    { item: 'doi pushcka', price: 527 },
    
]
const finedThere = foodPrice.find(x => x.price>999);
console.log(finedThere);

// =============================================================
//  8 
const foodMenu = ['red','blue','purple','orrange','yellow','green']
const [second,thired,] = foodMenu;
console.log(second, thired);

// ==============================================================

// 9

const myDetails = ['Mustafij', 21, 'Maratial Status', 'Relegions', 'Hons', 'Reading Book', 'Accounting'];
let name = myDetails[0];
let age = myDetails[1];
let status = myDetails[2];
let Relegions = myDetails[3];
let studies = myDetails[4];
let hobbies = myDetails[5];
let subject = myDetails[6];

console.log(Relegions);

// ============================================================

// 10
const addedSum = (firstNumber, secondNumber, thiredNumber = 7) =>{
    return firstNumber + secondNumber + thiredNumber;
}
let totalSum = addedSum(20 , 30);
console.log(totalSum);
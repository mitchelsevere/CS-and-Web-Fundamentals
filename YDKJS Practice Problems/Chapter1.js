const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 66.99;
let bankBalance = Number(prompt('Enter your bank account balance...'));
let spendingThreshold = bankBalance;
let totalAmt = PHONE_PRICE + ACCESSORY_PRICE;
let purchaseAmt = 0;

while (spendingThreshold >= totalAmt) {
  spendingThreshold = spendingThreshold - totalAmt;
  purchaseAmt = purchaseAmt + totalAmt;
}

function calcTax(amt) {
  amt = amt + (amt * TAX_RATE);
  
  function formatMoney() {
    console.log('$' + amt.toFixed(2));
  }
  
  formatMoney();

  return amt;
}

let finalPrice = calcTax(purchaseAmt);

if (bankBalance >= finalPrice && finalPrice !== 0) {
  console.log('Nice, you can afford it.');
} else {
  console.log('Sorry. You need more money,');
}
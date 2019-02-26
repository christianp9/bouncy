'use strict'

//Christianp99

let proportion = 0;
let boun = 0;
let limite = 99;
let num = 1;

while (true) {
  if (numBouncy(num)) {
    boun++;
  }
  let proportion = (boun / num) * 100;
  if (proportion == limite) {
    console.log(`El número mínimo para el cual la proporción\nde números bouncy es exactamente el ${limite}% es el ${num}`);
    break;
  }
  num++;
}

function numBouncy(num) {
  return !(Increasing(num) || Decreasing(num));
}

function Increasing(num) {
  let digits = str_split(num);

  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i - 1]) {
      return false;
    }
  }
  return true;
}

function Decreasing(num) {
  let digits = str_split(num);

  for (let i = 1; i < digits.length; i++) {
    if (digits[i] > digits[i - 1]) {
      return false;
    }
  }

  return true;
}

function str_split(num) {
  let output = [];
  let snum = num.toString();

  for (var i = 0, len = snum.length; i < len; i += 1) {
    output.push(+snum.charAt(i));
  }
  return output;
}
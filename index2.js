first = false; //add 2% of the stamp duty if is it false
second = false; //add 3% of the stamp duty if is it false
third = false; //add 2% of the stamp duty if is it false
fourth = false; //add 1% of the stamp duty if is it false

var percentage = [];
var newpercentage = [];
var finalper = 0;
var tot;

firstCase();

function firstCase() {
  if (first == false) {
    percentage.push(0.02);
    secondCase();
  } else if (first == true) {
    secondCase();
  }
}

function secondCase() {
  if (second == false) {
    percentage.push(0.03);
    thirdCase();
  } else if (second == true) {
    thirdCase();
  }
}

function thirdCase() {
  if (third == false) {
    percentage.push(0.03);
    fourthCase();
  } else if (third == true) {
    fourthCase();
  }
}

function fourthCase() {
  if (fourth == false) {
    percentage.push(0.04);
    //console.log(percentage);
    value();
  } else if (fourth == true) {
    value();
  }
}

function value() {
  let inivalue = 0;
  const totPercentage = percentage.reduce(
    (preValue, curValue) => preValue + curValue,
    inivalue
  );
  tot = totPercentage;
}

lbtt(147000);

function lbtt(cost) {
  if (cost <= 145000) {
    console.log(`You have to pay ${cost} on LBTT`);
  } else if (cost >= 145001 && cost <= 250000) {
    console.log(`You have to pay ${((0.02 + tot) * cost).toFixed(2)} on LBTT`);
  } else if (cost >= 250001 && cost <= 325000) {
    console.log(`You have to pay ${((0.05 + tot) * cost).toFixed(2)} on LBTT2`);
  } else if (cost >= 325001 && cost <= 750000) {
    console.log(`You have to pay ${((0.1 + tot) * cost).toFixed(2)} on LBTT`);
  } else if (cost >= 751000) {
    console.log(`You have to pay ${((0.12 + tot) * cost).toFixed(2)} on LBTT`);
  }
}

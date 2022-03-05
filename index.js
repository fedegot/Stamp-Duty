// We need you to write a piece of code which given the price of a house will calculate the LBBT due to be paid.
// A key part of any technical project is gaining understanding in unfamiliar business domains,
// for this reason we do not include how to calculate
// LBTT as part of this specification.
// LBTT can be complex to calculate as it varies according to the circumstances of the buyer so for simplicity you may assume:

//     • The buyer of the house currently owns a property and lives in it as their main residence
//     • The buyer does not conduct any kind of business activity from their house i.e. it is purely for personal use
//     • The buyer does not own any other properties
//     • At the end of the purchase the buyer will still only own one house i.e.
//       they intent to sell their current home at the same date they buy the new one

// Note: Across the UK changes to how this tax is calculated have been made recently, or in the case of Scotland
// are being changed this week.
// We are happy for you to use the old or the new calculation but advise you use as the older one as it is simpler to
// understand and information more readily available.
// You will not be penalised in any way for whichever version you implement.

// function lbtt(cost) {
//   if (cost <= 145000) {
//     console.log(`You have to pay ${cost} on LBTT`);
//   } else if (cost >= 145001 && cost <= 250000) {
//     console.log(`You have to pay ${0.02 * cost} on LBTT`);
//   } else if (cost >= 250001 && cost <= 325000) {
//     console.log(`You have to pay ${0.05 * cost} on LBTT2`);
//   } else if (cost >= 325001 && cost <= 750000) {
//     console.log(`You have to pay ${0.1 * cost} on LBTT`);
//   } else console.log(`You have to pay ${0.12 * cost} on LBTT`);
// }

function lbtt(cost) {
  if (cost <= 145000) {
    return cost;
  } else if (cost >= 145001 && cost <= 250000) {
    return 0.02 * cost;
  } else if (cost >= 250001 && cost <= 325000) {
    return 0.05 * cost;
  } else if (cost >= 325001 && cost <= 750000) {
    return 0.01 * cost;
  } else return 0.12 * cost;
}

lbtt(751000);

module.exports = lbtt;

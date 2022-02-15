function plusMinus(arr) {
  // Write your code here
  const n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive += 1;
    }
    if (arr[i] < 0) {
      negative += 1;
    }
    if (arr[i] === 0) {
      zero += 1;
    }
  }

  positive = positive / n;
  negative = negative / n;
  zero = zero / n;
  console.log(positive);
  console.log(negative);
  console.log(zero);
}

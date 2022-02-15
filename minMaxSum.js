function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i <= 3; i++) {
    sum1 += arr[i];
  }

  for (let i = 1; i <= 4; i++) {
    sum2 += arr[i];
  }

  return { sum1: sum1, sum2: sum2 };
  console.log(miniMaxSum());
}

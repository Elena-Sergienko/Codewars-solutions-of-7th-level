// 7 kyu
// Halving Sum
// Task
// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
    let sum = 0;
    let i = 0;
    while (n >= 1) {
        sum += n;
        n = Math.trunc(n / 2);
    }
    return sum;
}
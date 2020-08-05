// 7 kyu
// The Skiponacci Sequence
// Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:
// "1 skip 2 skip 5 skip 13 skip 34"
// Return the result as a string
// You can presume that n is always a positive integer between (and including) 1 and 64.

function skiponacci(n) {
    let arr = [1, 1];
    let num = 0;
    for (let i = 2; i < n; i++) {
        num = arr[i - 1] + arr[i - 2];
        arr.push(num)
    }
    let res = arr.filter((el, i) => i % 2 === 0);

    return n % 2 !== 0 ? res.join(' skip ') : res.join(' skip ') + ' skip'
}
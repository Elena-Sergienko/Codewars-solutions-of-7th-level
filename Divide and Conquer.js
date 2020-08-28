// 7 kyu
// Divide and Conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
// Return as a number.

function divCon(x) {
    let str = x.filter(el => typeof (el) === 'string');
    let sum = 0
    for (let el of str) {
        sum += +el;
    }


    let num = x.filter(el => typeof (el) === 'number');
    let sumN = 0;
    for (let el of num) {
        sumN += el;
    }

    return sumN - sum;
}
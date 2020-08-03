//7 kyu
// Show multiples of 2 numbers within a range
// Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.
// Python, Javascript, Java versions: return results in a list/array
// NOTICE:
// Do NOT worry about checking zeros or negative values.
// To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation


function multiples(s1, s2, s3) {
    let arr = [];
    let num = 0;
    for (let i = 1; i < s3; i++) {
        num = i * s2
        if (num < s3 && num % s1 === 0 && num % s2 === 0) arr.push(num);

    }
    return arr;
}
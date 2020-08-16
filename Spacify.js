// 7 kyu
// Spacify
// https://www.codewars.com/kata/57f8ee485cae443c4d000127
// Modify the spacify function so that it returns the given string with spaces inserted between each character.
// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
    let res = '';
    for (let i = 0; i < str.length - 1; i++) {
        res += str[i] + ' ';
    }
    return res + str[str.length - 1];
}
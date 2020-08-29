// 7 kyu
// Love vs friendship
// https://www.codewars.com/kata/59706036f6e5d1e22d000016/solutions/javascript
// If　a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice stronger than love :-)
// The input will always be in lowercase and never be empty.

function wordsToMarks(string) {
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let res = 0;
    for (let i = 0; i < string.length; i++) {
        res += alph.indexOf(string[i]) + 1;
    }
    return res;
}

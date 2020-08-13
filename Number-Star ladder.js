// 7 kyu
// Number-Star ladder
// https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript
// Task
// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
// Note: There is no newline in the end (after the pattern ends)
// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:
// 1
// 1*2
// 1**3
// pattern(10): should return the following:
// 1
// 1*2
// 1**3
// 1***4
// 1****5
// 1*****6
// 1******7
// 1*******8
// 1********9
// 1*********10

function pattern(n) {
    let output = "";
    let s = '*';
    for (let i = 1; i < n; i++) {
        output += i + '\n' + 1
        for (let j = 1; j <= i; j++) {
            output += s;
        }
    }

    return output + n;
}
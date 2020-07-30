// 7 kyu Max diff - easy
// You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.
//
//     The list(lst) contains integers, that means it may contain some negative numbers.
//
//     If the list is empty or contains a single element, return 0.
//
// The list(lst) is not sorted.
//
// maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) == 7


function maxDiff(list) {
    if (list.length === 0) {
        return 0;
    }
    let max = list[0];
    let min = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
        if (list[i] < min) {
            min = list[i];
        }
    }
    return max - min;
}


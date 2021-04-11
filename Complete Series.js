// 7 kyu
// Complete Series
// You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.
// If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:
// inputs        outputs
//     [2,1]     ->  [0,1,2]
//     [1,4,4,6] ->  [0]
// Notes: all numbers are positive integers.
// This is set of example outputs based on the input sequence.
//     inputs        outputs
//     [0,1]   ->    [0,1]
//     [1,4,6] ->    [0,1,2,3,4,5,6]
//     [3,4,5] ->    [0,1,2,3,4,5]
//     [0,1,0] ->    [0]


function completeSeries(arr) {
    let dublicate = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el))
    let res = [0];
    if (dublicate.length === 0) {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        for (let i = 0; i < max; i++) {
            res.push(res[i] + 1)
        }

    }
    return res;
}

// -------------------------------------------------------------------------------

function completeSeries(arr) {
    let res = [];
    let s = arr.sort((a, b) => a - b);

    for(let i = 0; i <= s[s.length-1]; i++){
        res.push(i)
    }

    arr.forEach((el, i) => {
        if(el === s[i+1]) {
            res = [0];
        }
    })

    return res;
}
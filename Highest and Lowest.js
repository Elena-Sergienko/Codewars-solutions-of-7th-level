// 7 kyu
// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

// ------------------------------------
// 1 solution
// ------------------------------------

function highAndLow(numbers){
    console.log(numbers)
    let arr = numbers.split(' ');
    let min = +arr[0];
    let max = +arr[0];
    console.log(arr)
    for (let i = 1; i < arr.length; i++){
        if (+arr[i] > max) max = +arr[i];
        if (+arr[i] < min) min = +arr[i];
    }
    return '' + max + ' ' + min;
}

// ------------------------------------
// 2 solution
// ------------------------------------

function highAndLow(numbers){
    let arr = numbers.split(" ");

    let swap = true;
    while (swap) {
        swap = false;
        for (let i = 0; i < arr.length - 1; i++){
            arr[i] = +arr[i];
            if (arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swap = true;
            }
        }

    }
    console.log(numbers);
    console.log(arr);

    return arr[arr.length-1] + ' ' + arr[0];
}
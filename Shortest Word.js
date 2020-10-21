// 7 kyu
// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s){
    let arr = s.split(' ');
    let len = [];
    let min = 0;
    for (let i = 0; i < arr.length; i++){
        len.push(arr[i].length);

    }


    return Math.min(...len);
}
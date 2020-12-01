// 7 kyu
// Dominant array elements
// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:
// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]
// Notice that the last element is always included.
// More examples in the test cases.

function solve(arr){
    let arr2 = [...arr]
    let res = [];
    for (let i = 0; i < arr2.length-1; i++){
        if (arr2[i] === Math.max(...arr2.slice(i))){
            res.push(arr2[i])
        }
    }
    res.push(arr[arr.length-1])
    let resNew = res.filter((el, i) =>  i === res.indexOf(el))
    return resNew;
}
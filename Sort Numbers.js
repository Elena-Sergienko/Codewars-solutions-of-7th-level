// 7 kyu
// Sort Numbers

function solution(nums){
    return nums === null ? [] : nums.sort((a, b) => a - b);
}
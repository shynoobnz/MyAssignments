/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

*/

let arr;
function moveZeroToEnd(arr){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++; 
        }
    }
    console.log(arr)

}
let n = [0,1,0,3,12];
moveZeroToEnd(n);

/*

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/

let num1 = [4, 9, 5];
let num2 = [9, 4, 9, 8, 4];
let ans = [];
for (let i = 0; i < num1.length;i++) {
    for (let j = 0; j < num2.length;j++) {
        if (num1[i] == num2[j] && !ans.includes(num1[i])) {
            ans.push(num1[i]);

        }
    }
}
console.log(ans)

/*

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

*/

let nums = [34, 7, 21, 89, 54, 10, 91, 67];
let min=nums[0];
let minIndex;
let maxIndex;
let max=nums[0];
for(let i=1;i<nums.length;i++){
    if(nums[i]<min) {
        min=nums[i];
        minIndex=i;
    }
    if(nums[i]>max) {
        max=nums[i];
        maxIndex=i
    }
}
console.log(`miniun element ${min}, index ${minIndex}`);
console.log(`maximum element ${max}, index ${maxIndex}`);

/*


4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
let  inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
let ansD=[];
for(let i=0;i<inputArray.length-1;i++){
        if(!ansD.includes(inputArray[i])){
          ansD.push(inputArray[i]);
        }
    }

console.log(ansD);



/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count
*/

let num=[2,4,5,2,1,2];
const k=2;
let count=0;;
for(let i=0;i<num.length;i++){
    if(num[i]===k){
        count++;
    }
}
console.log(`Occurance of ${k} in given array is ${count}`);

/*
2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

const numArr = [2,4,7,8,11,14];
const target = 18;
console.log("The indices that has matching target "+target)
for(let i=0;i<numArr.length-1;i++){
    for(let j=i+1;j<numArr.length;j++){
        if(numArr[i]+numArr[j]==18){

            console.log(`(${i},${j})`);
            break;
        }
    }
}
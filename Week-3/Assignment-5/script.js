// Assume the array is sorted from small to big
function twoSum(nums, target) {
    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+1; j < nums.length; j++){
            if (nums[i]+nums[j] === target){
                const answer = [i, j];
                return answer;
            }
        }
    }
}
/*
 For example:
 twoSum([2, 7, 11, 15], 9);
 Should returns:
 [0, 1]
 Because:
 nums[0]+nums[1] is 9
*/
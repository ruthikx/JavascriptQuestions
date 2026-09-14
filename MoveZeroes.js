nums = [0, 1, 0, 3, 12]

const moveZero = function(nums){

    j=0

    for(let i =0 ;i<nums.length;i++){

        if(nums[i]!==0){

            [nums[i],nums[j]]=[nums[j],nums[i]];

            j++;

        }

    }

    return nums

}

console.log(moveZero(nums))
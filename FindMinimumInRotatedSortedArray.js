let nums = [3,4,5,1,2]

const minSorted = function(nums){
    let n = nums.length;
    let l=0;
    let r=n-1
    

    while(l<r){
        let m=Math.floor((l+r)/2)
        if(nums[m]>nums[r]){
            l=m+1
        }else{
            r=m
        }
    }

    return nums[l]
}

console.log(minSorted(nums))
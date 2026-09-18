nums = [-2,1,-3,4,-1,2,1,-5,4]

const subarray = function(nums){
    let current=0;
    let maximum = -Infinity
    for(let num of nums){
        current += num
        maximum = Math.max(current, maximum)
        if(current<0){
            current=0
        }
    }
    return maximum
    
}

console.log(subarray(nums))

const nums = [1, 2, 3, 4]

const sum = function(nums){
    let n = nums.length;
    let answer = new Array(n);

    let prefix = 1;
    for(let i  = 0 ; i<n;i++){
        answer[i]=prefix
        prefix*=nums[i]
    }

    let suffix =1
    for(let i=n-1;i>=0;i-- ){
        answer[i]*=suffix
        suffix*=nums[i]
    }

    return answer
}

console.log(sum(nums))

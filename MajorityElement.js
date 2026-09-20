let nums = [2,2,1,1,1,2,2]

const majorityEle =  function(nums){
    let count=0;
    let candidate=0;
    for(let num of nums){
        if(count===0){
            candidate=num
        }
        count+= candidate===num ? 1 : -1;
    }

    return candidate

}

console.log(majorityEle(nums))

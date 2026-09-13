nums = [10, 5, 88, 10, 3, 3];

const secondLargest = function(nums){

    let uniquenums = [...new Set(nums)]

    if(uniquenums.length < 2){

        return -1

    }

    let first = -Infinity;
    let second = -Infinity;

    for(nums of uniquenums){

        if(nums > first){

            second = first;
            first = nums;

        }else if(nums > second){

            second = nums
        }
    }

    return second

}

console.log(secondLargest(nums))

let numbers = [2, 3, 6, 11, 15]
let target = 9

const twoSum = function(numbers, target) {
    let left=0;
    let right=numbers.length-1;

    while(left<right){
        let currentSum = numbers[left]+numbers[right]

        if(currentSum===target){
            return [left+1,right+1]
        }else if(currentSum<target){
            left++
        }else{
            right--
        }
    }
    return []
}

console.log(twoSum(numbers,target))

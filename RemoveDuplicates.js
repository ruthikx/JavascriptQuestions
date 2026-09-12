nums=[11, 2, 2, 3, 1, 44]
function removeDuplicates(nums){

    return nums.filter((value,index)=> nums.indexOf(value)===index)
}
console.log(removeDuplicates(nums))
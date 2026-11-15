let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]
let target = 3

const searchMatrix = function(matrix,target){
    let m = matrix.length;
    let n = matrix[0].length;
    let l = 0;
    let r = m*n -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        let row = Math.floor(mid/n);
        let column = mid%n
        let midValue = matrix[row][column]

        if(midValue===target){
            return true
        }else if(midValue < target){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }

    return false
}

console.log(searchMatrix(matrix,target))
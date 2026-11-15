let piles = [3,6,7,11]
let h = 8

const bananaSpeed = (piles,h) => {

    let l=1;
    let r=Math.max(...piles);

    while(l<r){
        let mid = Math.floor((l+r)/2);
        let hour = 0
        for(let pile of piles){
            hour += Math.ceil(pile/mid)
        }

        if(hour <= h){
            r = mid
        }else{
            l = mid+1
        }
    }
    return l;

}

console.log(bananaSpeed(piles,h))
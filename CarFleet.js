let target = 12
let position = [10, 8, 0, 5, 3]
let speed = [2, 4, 1, 1, 3]

const fleet = function(target,position,speed){
    let n =  position.length;
    if(n===0) return 0;

    const cars = position
        .map((pos,ind)=>{
            return{
                pos,
                time: (target-pos)/speed[ind]
            }
        })
        .sort((a,b)=>b.pos-a.pos)

    let fleet = 0
    let maxTime = 0

    for(let car of cars){
        if(car.time>maxTime){
            fleet++
            maxTime=car.time
        }
    }

    return fleet
} 

console.log(fleet(target,position,speed))
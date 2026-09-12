function firstUniqueChar(s){
    let map = new Map();
    for(let char of s){
        map.set(char,(map.get(char)||0)+1)
    }
    for(let char of s){
        if(map.get(char)===1){
            return char
        }
    }
}

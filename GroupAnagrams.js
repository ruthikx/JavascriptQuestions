var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        const count = new Array(26).fill(0);
        
        for (let i = 0; i < str.length; i++) {
            const index = str.charCodeAt(i) - 97; // 97 is the ASCII value for 'a'
            count[index]++;
        }

      
        const key = count.toString();

     
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};
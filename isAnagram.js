const s = "anagram";
const t = "nagaram";

const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram(s, t));

s = "A man, a plan, a canal: Panama"
const pallindrome = function(s){
    let str = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

    return str===str.split('').reverse().join('')
}

console.log(pallindrome(s))

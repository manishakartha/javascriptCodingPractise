//palindrome 
function palindrome(num){
let palindrome= +String(num).split('').reverse().join('');
if(num===palindrome){
    return true
}else{
    return false
}
}
console.log(palindrome(121));
console.log(palindrome(123));

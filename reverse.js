function reverse(str){
    let reverseVar = str.split('').reverse().join('')
    return reverseVar
}
console.log(reverse('hello'))
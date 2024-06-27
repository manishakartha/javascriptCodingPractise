function countWords(str){
const sArr= str.split(' ');
console.log(sArr)
let filteredWordsArray = sArr.filter(word => word.trim() !== '');
return filteredWordsArray.length
}
console.log(countWords("hello world welcome everyone"))
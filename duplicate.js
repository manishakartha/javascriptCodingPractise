//find duplicates
function duplicateFind(arr){
    let dup=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
          if(arr[i] === arr[j]){
                dup.push(arr[j]);
                
            }
        }
        }
     return dup
}
console.log(duplicateFind([1,3,3,4,5,6,6,7]));

//remove duplicates

function removeDuplicates(arr){
    let newArr=[]
    newArr=arr.filter((el,index)=>{
        return arr.indexOf(el) === index;
    }
)
return newArr  ;
}
console.log(removeDuplicates([1,3,3,4,5,6,6,7]));

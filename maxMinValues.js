//find the max min values in a given array
function maxMinValue(arr){
    let max=arr[0];
    let min=arr[0];
for(let i=0;i<arr.length;i++){
    
        if(arr[i]<min){
            min=arr[i]
        }
         if(arr[i]>max){
            max=arr[i]
        }   
}
    return{min,max}
}
console.log(maxMinValue([2,3,5,6,7,10,80]))
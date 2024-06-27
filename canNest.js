/*
Check if One Array can be Nested in Another
Create a function that returns true if the first array can be nested inside the second 
and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.

Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false
*/ 

function canNest(arr1,arr2){
    max1=arr1[0];
    min1 =arr1[0];
    max2=arr2[0];
    min2=arr2[0];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>max1){
            max1=arr1[i]
        }
        if(arr1[i]<min1){
            min1=arr1[i]
        }
    }
    for(let j=0;j<arr1.length;j++){
        if(arr2[j]>max2){
            max2=arr2[j]
        }
        if(arr2[j]<min2){
            min2=arr2[j]
        }
    }
    if(min1>min2&&max1<max2){
        return true
    }else return false
}
console.log(canNest([1, 2, 3, 4], [0, 6]) )
console.log(canNest([3, 1], [4, 0]) ) 
console.log(canNest([9, 9, 8], [8, 9]) )
console.log(canNest([1, 2, 3, 4], [2, 3]) )
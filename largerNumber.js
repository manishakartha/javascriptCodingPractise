/*
Your function will be passed two functions, f and g, that don't take any parameters. 
Your function has to call them, and return a string which indicates which function returned
 the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
Examples
whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f"
*/ 

function whichIsLarger(f,g){
    
    if(f()>g()){
        return 'f'
    }else if(f()===g()){
        return 'neither'
    }else return 'g'
}
console.log(whichIsLarger(() => 5, () => 10))
console.log(whichIsLarger(() => 25,  () => 25))
console.log(whichIsLarger(() => 505050, () => 5050))

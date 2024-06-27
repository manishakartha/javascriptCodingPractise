function binary(num) {
    if (num === 0) return "0";
    let result = "";
    while (num > 0) {
      result = (num % 2) + result;
      num = Math.floor(num / 2);
    }
    return result;
  }
  
  // Test cases
  console.log(binary(1));  // "1"
  console.log(binary(5));  // "101"
  console.log(binary(10));

  //using built-in function
  function binary(num) {
    return num.toString(2);
  }
  
  // Test cases
  console.log(binary(1));  // "1"
  console.log(binary(5));  // "101"
  console.log(binary(10)); //

  //binary to number
  function binaryToNumber(binaryStr) {
    return parseInt(binaryStr, 2);
  }
  
  // Test cases
  console.log(binaryToNumber("10000000000")); // 1024
  console.log(binaryToNumber("1"));          // 1
  console.log(binaryToNumber("101"));        // 5
  console.log(binaryToNumber("1010"));       // 10
  
// 1st task 


function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
    return reversedString;
  }
  
  
  const inputStr = "Hello, World";
  const reversedStr = reverseString(inputStr);
  console.log(reversedStr); 
  
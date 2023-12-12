// const arr = [1,2,3,4,5]
// const rev = arr.reverse();
// console.log(rev)

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Compare the cleaned string with its reverse
//     const reversedStr = cleanStr.split('').reverse().join('');
    
//     return cleanStr === reversedStr;
//   }
  
//   // Example usage
//   const testString = "A man, a plan, a canal, Panama!";
//   const result = isPalindrome(testString);
  
//   console.log(result); // Output: true
  function isPalindrome(str){
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const revStr = cleanStr.split('').reverse().join('');
    return cleanStr === revStr;
  }
  
   const checkString = 'madam';
   const res = isPalindrome(checkString);
  
   console.log(res)

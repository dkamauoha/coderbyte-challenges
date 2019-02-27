// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterCapitalize(str) { 
  return str.split(' ').map(e => e.charAt(0).toUpperCase() + e.substr(1)).join(' ');
}
   
// keep this function call here 
LetterCapitalize(readline());
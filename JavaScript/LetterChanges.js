// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterChanges(str) { 
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let arr = []
  str.toLowerCase().split('').map(e => {
    let i = alphabet.indexOf(e)
    if (e.match(/[a-z]/g)) {
      if (e === 'z') {
        arr.push('a')  
      }
      arr.push(alphabet[i+1])
    } else {
      arr.push(e)
    }
    // arr.push(alphabet[i+1])
  }); 
  return arr.map(e => e.match(/[aeiou]/g) ? e.toUpperCase() : e).join('');
}
   
// keep this function call here 
LetterChanges(readline());
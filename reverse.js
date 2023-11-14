const reverse = function(string){
  let output = ''
  for (i = 1 ; i <= string.length ; i++){
    if (string[string.length - i] != ' '){
      output += string[string.length - i]
    } if (string[string.length - i] === ' '){
      output += '\n'
    } 
  } return output;
}
console.log(reverse('whats this? whats that?'))
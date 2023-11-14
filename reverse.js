const reverse = function(string){
  let output = ''
  for (i = 1 ; i < string.length ; i++){
    if (string[string.length - i] != ' '){
      output += string[string.length - i]
    } if (string[string.length - i] === ' '){
      console.log(output);
      output = ''
    } if (i === string.length-1){
      return
    }
  }
}
console.log(reverse('where is my mind'))
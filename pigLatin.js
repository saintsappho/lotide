const latinify = function(input){
  //let count = 1
  let output = ''
  for (i = 0; i < input.length; i++){
  //console.log(count)
  //count += 1 
    for (k = 0; k < input[i].length; k++){
      if (k >= 1){
        output += input[i][k]
      } 
      if (output.length === input[i].length - 1){
        output += input[i][0]
        output += 'ay '
      }
    }
  } return output;
}

console.log(latinify(process.argv.slice(2)))
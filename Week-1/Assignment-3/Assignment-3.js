function countAandB(input) {
  var numA = 0;
  var numB = 0;
  for(var i = 0; i < input.length; i++){
    if (input[i] === 'a'){
      numA += 1;
    } else if (input[i] === 'b'){
        numB += 1;
    }
  }
  return (numA+numB !== 0)? (numA+numB) + ' (' + numA + ' \'a\' ' + ((numA === 1)? 'letter':'letters') + ' and ' + numB + ' \'b\' '+((numB === 1)? 'letter':'letters')+')' : '0';
}

function toNumber(input) {
  var number = []
  for(var i = 0; i < input.length; i++){
    switch (input[i]) {
      case 'a':
        number.push(1);
        break;
      case 'b':
        number.push(2);
        break;
      case 'c':
        number.push(3);
        break;
      case 'd':
        number.push(4);
        break;
      default:
        number.push(5);
    }
  }
  return number;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1));
console.log(toNumber(input1));
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));
console.log(toNumber(input2));

const Operation = rl.prompt('Select the operation you will carry out: (1=add, 2=subtract 3=multiply, 4=divide, 5=modulus)');

const num1 = parseFloat(prompt('Num 1 = '));
const num2 = parseFloat(prompt('Num 2 = '));

let result;

switch(operation){
	case 1:
		result = num1 + num2;
	break;
	case 2:
		result = num1 - num2;
	break;
	case 3:
		result = num1 * num2;
	break;
	case 4:
		result = num1/num2;
	break;
	case 5:
		result = num1%num2;
	break;	
	default:
		result = 0;
}

console.log(`Your operation gives ${result}`);
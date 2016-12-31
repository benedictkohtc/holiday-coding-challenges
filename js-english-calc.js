var rosettaStone;

function englishCalc (input) {
	rosettaStone = {
		'one': '1',
		'two': '2',
		'three': '3',
		'four': '4',
		'five': '5',
		'six': '6',
		'seven': '7',
		'eight': '8',
		'nine': '9',
		'ten': '10',
		'eleven': '11',
		'twelve': '12',
		'thirteen': '13',
		'fourteen': '14',
		'fifteen': '15',
		'sixteen': '16',
		'seventeen': '17',
		'eighteen': '18',
		'nineteen': '19',
		'twenty': '20',
		'plus': '+',
		'minus': '-',
		'times': '*'
	};

	var inverseRosettaStone = {};
	for (element in rosettaStone) {
		inverseRosettaStone[rosettaStone[element]] = element;
	}

	var buffer = input.split(' ');
	var result = '';
	buffer.forEach(function (element) {
		result += rosettaStone[element];
	});
	result = eval(result).toString();
	if (inverseRosettaStone[result]) {
		return inverseRosettaStone[result];
	}
	console.log('Sorry! We use digits for results above twenty! We \u2665 digits!');
	return result;
}

var input = 'seven times two';
console.log(input, 'is', englishCalc(input));
input = 'seven times three';
console.log(input, 'is', englishCalc(input));
input = 'eleven times three';
console.log(input, 'is', englishCalc(input));

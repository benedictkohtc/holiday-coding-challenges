function sumString (input) {
	var negativeSwitch;
	return input.split(['']).reduce(function (accumulator, currentValue) {
		accumulator = Number(accumulator);
		if (currentValue === '-') {
			negativeSwitch = true;
			return accumulator;
		}
		currentValue = Number(currentValue);
		if (negativeSwitch === true) {
			negativeSwitch = false;
			return accumulator - currentValue;
		}
		return accumulator + currentValue;
	}, [0]);
}
console.log(sumString('1234'), 'expecting 10');
console.log(sumString('55-2-2'), 'expecting 6');

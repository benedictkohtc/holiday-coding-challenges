function kitchenSink (input) {
	if (typeof input === 'string') {
		console.log(input);
	} else if (typeof input === 'number') {
		console.log(input * input);
	} else if (typeof input === 'boolean') {
		if (input === true) console.log('yes');
		else if (input === false) console.log('no');
	} else if (typeof input === 'function') {
		input();
	} else {
		console.log('invalid data');
	}
}

var input = kitchenSink(input);
kitchenSink(input);

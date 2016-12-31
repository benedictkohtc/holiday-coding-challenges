var testArray = [1, 2, 3];
var buffer;

function custom_forEach (array, callback) {
	for (var x = 0; x < array.length; x++) {
		callback(array[x], x, array);
	}
}

console.log('Q1');
custom_forEach(testArray, function (element, index, array) {
	console.log('element is', element);
	console.log('index is', index);
	console.log('array is', array);
});

function custom_map (array, callback) {
	var newArray = [];
	for (var x = 0; x < array.length; x++) {
		newArray.push(callback(array[x], x, array));
	}
	return newArray;
}

console.log('Q2');
buffer = custom_map(testArray, function (element, index, array) {
	return element * element;
});
console.log(buffer);

function custom_reduce (array, callback, sum) {
	for (var x = 0; x < array.length; x++) {
		if (sum === undefined) {
			sum = array[0];
			x++;
		}
		sum = callback(sum, array[x]);
	}
	return sum;
}

console.log('Q3');
buffer = custom_reduce(testArray, function (a, b) {
	return a + b;
});
console.log(buffer);

function custom_filter (array, callback) {
	var newArray = [];
	for (var x = 0; x < array.length; x++) {
		if (callback(array[x], x, array) === true) {
			newArray.push(array[x]);
		}
	}
	return newArray;
}
console.log('Q4');
buffer = custom_filter(testArray, function (element, index, array) {
	if (element > 2) {
		return true;
	}
});
console.log(buffer);

function custom_every (array, callback) {
	var falseCounter = 0;
	for (var x = 0; x < array.length; x++) {
		if (callback(array[x], x, array) === false) falseCounter++;
	}
	if (falseCounter === 0) return true;
	else return false;
}

console.log('Q5');
buffer = custom_every(testArray, function (element, index, array) {
	if (typeof element === 'number') return true;
	else return false;
});
console.log(buffer);

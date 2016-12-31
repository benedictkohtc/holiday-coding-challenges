// importing our helper method, helper.test()
var helper = require('./test-helper-functions');

// Write your own tests and then write code to pass the tests!
// helper.test(myFunc(intput), expectedOutput)

function removeElement (inputArr, target) {
	var targetIndex = inputArr.indexOf(target);
	inputArr.splice(targetIndex, 1);
	return inputArr;
}

console.log('Q1');
helper.test(removeElement([1, 2, 3, 4, 5], 3), [1, 2, 4, 5]);
helper.test(removeElement([2, 5, 9, 6], 5), [2, 9, 6]);

function getLargestElement (input, target) {
	input.sort(function (a, b) {
		return b - a;
	});
	return input[target - 1];
}

console.log('Q2');
helper.test(getLargestElement([ 43, 56, 23, 89, 88, 90, 99, 652], 4), 89);
helper.test(getLargestElement([ 43, 56, 23, 89, 88, 90, 99, 652], 2), 99);

function getRandom (input) {
	var randomIndex = Math.floor(Math.random() * (input.length));
	return input[randomIndex];
}
console.log('Q3');
console.log(getRandom(['hello', 'hi', 'bye']));

function generateArray (start, length, step) {
	var result = [];
	result.push(start);

	while (result.length < length) {
		result.push(result[result.length - 1] + step);
	}
	return result;
}
console.log('Q4');
helper.test(generateArray(1, 4, 1), [1, 2, 3, 4]);
helper.test(generateArray(-6, 5, 2), [-6, -4, -2, 0, 2]);

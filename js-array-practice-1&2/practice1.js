// importing our helper method, helper.test()
var helper = require('./test-helper-functions');

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

function dash (numString) {
	var result = [];
	numString.split('').reduce(function (accumulator, element) {
		if ((accumulator % 2 === 0) && (element % 2 === 0)) {
			result.push('-', element);
			return element;
		} else {
			result.push(element);
			return element;
		}
	}, undefined);
	return result.join('');
}
console.log('Q1');
helper.test(dash('025486'), '0-254-8-6'); // check that your function works as expected
helper.test(dash('3700074722'), '370-0-07472-2');

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem (input) {
	var counter = {};
	var highestCount = 0;
	var highestValue = null;
	input.forEach(function (element) {
		counter[element] = counter[element] + 1 || 1;
		if (counter[element] > highestCount) {
			highestCount = counter[element];
			highestValue = element;
		}
	});
	return highestValue + ' (' + counter[highestValue] + ' times)';
}

// uncomment the following test to run it
console.log('Q2');
helper.test(mostFrequentItem([3, 'b', 'b', 'b', 2, 3, 'b', 3, 'b', 2, 4, 9, 3]), 'b (5 times)');
helper.test(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]), 'a (5 times)');

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems (input) {
	var result = [];
	input.forEach(function (element) {
		if ((typeof element === 'string') && (element.match(/[a-z]/i))) {
			element = element.toLowerCase();
		}
		if (result.indexOf(element) === -1) {
			result.push(element);
		}
	});
	return result;
}

console.log('Q3');
helper.test(removeDuplicateItems([1, 'a', 'A', 'b', 2, 2, 1, 2, 'a', 'B']), [1, 'a', 'b', 2]);
helper.test(removeDuplicateItems([1, 'a', 'A', 'b', 2, 2]), [1, 'a', 'b', 2]);

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union (input1, input2) {
	input2.forEach(function (element) {
		if (input1.indexOf(element) === -1) {
			input1.push(element);
		}
	});
	return input1.sort(function compareNumbers (a, b) {
		return a - b;
	});
}

console.log('Q4');
helper.test(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100]);

/* ---------------------- EXERCISE 5 ---------------------- */
// Write a JavaScript function to merge two arrays and removes all duplicates elements.
// (Sample input: mergeArray([1, 2, 3], [2, 30, 1]), expected output: [3, 2, 30, 1])
function mergeArray (input1, input2) {
	input2.forEach(function (element) {
		if (input1.indexOf(element) === -1) {
			input1.push(element);
		}
	});
	return input1.sort(function compareNumbers (a, b) {
		return a - b;
	});
}

console.log('Q5');
helper.test(mergeArray([1, 2, 3], [2, 30, 1]), [1, 2, 3, 30]);

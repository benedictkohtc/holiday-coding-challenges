function scrabble (tilesInput, word) {
	var tilesInput = tilesInput.split('');
	var wordBuffer = word.split('');

	var wildcardCollector = tilesInput.filter(function (element) {
		if (element === '?') {
			return true;
		}
	});

	var result = tilesInput.filter(function (element) {
		if (wordBuffer.indexOf(element) !== -1) {
			wordBuffer.splice(wordBuffer.indexOf(element), 1);
			return true;
		}
	});

	if (word.length <= (result.length + wildcardCollector.length)) {
		return true;
	}
	else return false;
}

console.log('function returns', scrabble('ladilmy', 'daily'), 'expected true');
console.log('function returns', scrabble('eerriin', 'eerie'), 'expected false');
console.log('function returns', scrabble('orrpgma', 'program'), 'expected true');
console.log('function returns', scrabble('orppgma', 'program'), 'expected false');
console.log('function returns', scrabble('pizza??', 'pizzazz'), 'expected true');
console.log('function returns', scrabble('piizza?', 'pizzazz'), 'expected false');
console.log('function returns', scrabble('a??????', 'program'), 'expected true');
console.log('function returns', scrabble('b??????', 'program'), 'expected false');

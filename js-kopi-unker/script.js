function kopiRecipe (order) {
	var recipe = {coffee: 0, water: 0, 'condensed milk': 0, 'evaporated milk': 0, sugar: 0, ice: 'no'};

	if (/kopi/i.test(order)) {
		recipe['coffee'] = recipe['coffee'] + 2;
		recipe['water'] = recipe['water'] + 2;
		recipe['condensed milk'] = recipe['condensed milk'] + 1;
		recipe['sugar'] = recipe['sugar'] + 2;
	} else {
		return ['invalid', 'YOU BODOH LA! This one not kopi how to make? ¯	&#92_(&#12484)_/¯'];
	}

	if (/\bo\b/i.test(order) || /\bsi\b/i.test(order)) {
		recipe['condensed milk'] = recipe['condensed milk'] - 1;
	}

	if (/gau/i.test(order)) {
		recipe['water'] = recipe['water'] - 1;
		recipe['coffee'] = recipe['coffee'] + 1;
	}

	if (/\bpo\b/i.test(order)) {
		recipe['coffee'] = recipe['coffee'] - 1;
		recipe['water'] = recipe['water'] + 1;
	}

	if (/gah dai/i.test(order)) {
		recipe['water'] = recipe['water'] - 1;
		recipe['coffee'] = recipe['coffee'] + 1;
		recipe['condensed milk'] = recipe['condensed milk'] + 1;
	}

	if (/\bsi\b/i.test(order)) {
		recipe['evaporated milk'] = recipe['evaporated milk'] + 1;
	}

	if (/peng/i.test(order)) {
		recipe['ice'] = '';
	}

	if (/kosong/i.test(order)) {
		recipe['sugar'] = recipe['sugar'] - 2;
	}
	if (/siew dai/i.test(order)) {
		recipe['sugar'] = recipe['sugar'] - 1;
	}

	var buffer = '';
	for (prop in recipe) {
		buffer += 'add ';
		if (recipe[prop] === 0) {
			buffer += 'no';
		} else {
			buffer += recipe[prop];
		}
		buffer += ' ' + prop + '<br>';
	}

	return ['ok for "' + order + '"<br><br> you ', buffer, '<br> got more kopi you wan learn?'];
}

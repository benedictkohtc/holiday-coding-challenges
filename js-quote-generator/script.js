var randomQuotes = {
	quote1: 'Each decision we make, each action we take, is born out of an intention. Sharon Salzberg, O Magazine, The Power of Intention, January 2004',
	quote2: 'The trouble about trying to make yourself stupider than you really are is that you very often succeed. C. S. Lewis (1898 - 1963)',
	quote3: 'It is no profit to have learned well, if you neglect to do well.  Publilius Syrus (~100 BC)',
	quote4: 'An idea is salvation by imagination. Frank Lloyd Wright (1869 - 1959)',
	quote5: 'Let us make a special effort to stop communicating with each other, so we can have some conversation. Judith Martin, (Miss Manners)'
};

$('#generate').click(function () {
	var buffer = Math.floor(Math.random() * 5) + 1;
	console.log(buffer);
	buffer = 'quote' + buffer;
	$('#target').text(randomQuotes[buffer]);
});

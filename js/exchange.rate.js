
function getExchangeRate(from, to) {
	$.ajax({
		url: '//query.yahooapis.com/v1/public/yql?q=' +
			encodeURIComponent('select * from yahoo.finance.xchange where pair in (\"' + from + to + '\")') +
			'&format=json&callback=parseExchangeRate&env=' + encodeURIComponent('http://datatables.org/alltables.env'),
		dataType: 'jsonp',
		jsonp: 'callback',
		jsonpCallback: 'parseExchangeRate',
	});
}

function parseExchangeRate(data) {
	window.exchangeRate = parseFloat(data.query.results.rate.Rate, 10);
	$('#currency_select').show();
}

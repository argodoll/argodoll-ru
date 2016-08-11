
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

// var language = navigator.language || navigator.userLanguage;
// if ((language.toLowerCase().indexOf('ru') == 0) &&
//     (window.location.href.toLowerCase().indexOf('cart') > -1)) {
//
//     getExchangeRate('USD', 'RUB');
//
//     simpleCart.bind('beforeCheckout', function(data) {
//         var currency = $('#currency_select option:selected').text();
//         if ((currency === 'RUB') && window.exchangeRate) {
//             var exchangeRate = window.exchangeRate;
//             data.currency_code = 'RUB';
//             data.tax_cart = (data.tax_cart * exchangeRate).toFixed(2);
//             data.handling_cart = (data.handling_cart * exchangeRate).toFixed(2);
//             for (var i = 1; i <= 10; ++i) {
//                 var amount = 'amount_' + i;
//                 if (amount in data)
//                     data[amount] = (data[amount] * exchangeRate).toFixed(2);
//                 else break;
//             }
//         }
//     });
// }

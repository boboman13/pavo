/* main file for pavo */

// check for jQuery
if (typeof jQuery === 'undefined') {
	console.error('pavo fatal: jQuery not found')
// Mustache
} else if (typeof Mustache === 'undefined') {
	console.error('pavo fatal: Mustache.js not found')
}

var pavo = function() {
	return new Application()
}
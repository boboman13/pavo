function Page(content) {
	this.content = content
}

// Listening
Page.prototype.on = function(name, fn) {
	fn()
}
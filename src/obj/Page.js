function Page(content) {
	this.content = content
}

// Event Listeners
Page.prototype.listeners = {
	draw: []
}

// Display
Page.prototype._display = function() {
	$('.pavo-view').html(this.content)

	// Launch events
	this._launch('draw')
}

// Launch Events
Page.prototype._launch = function(name) {
	for (var i = 0; i < this.listeners[name].length; i++) {
		this.listeners[name][i]()
	}
}

// Listening
Page.prototype.on = function(name, fn) {
	this.listeners[name].push(fn)
}
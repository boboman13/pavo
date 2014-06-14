function Application() {

}

// Modules
Application.prototype.modules = {}

// RegisterModule
Application.prototype.registerModule = function(route, module) {
	if (this.modules[route]) {
		console.error('pavo: already registered module for route')
		return
	}

	this.modules[route] = module

	console.log(this.modules)
}

// GetModule
Application.prototype.getModule = function(route) {
	if (!this.modules[route]) {
		// don't error, return null
		return null
	}

	return this.modules[route]
}

// Start
Application.prototype.start = function() {

}
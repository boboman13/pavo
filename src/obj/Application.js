function Application() {

}

// Active Module
Application.prototype.activeModule = null

// Modules
Application.prototype.modules = {}

// RegisterModule
Application.prototype.registerModule = function(route, module) {
	if (this.modules[route]) {
		console.error('pavo: already registered module for route')
		return
	}

	this.modules[route] = module
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
	// default route: /
	this.activeModule = this.getModule('/')

	this.activeModule._display()
}
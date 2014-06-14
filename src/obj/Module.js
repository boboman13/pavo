function Module() {

}

Module.prototype.on = function(event, fn) {
	fn()
}
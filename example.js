// pavo and jquery are already loaded
var content = '<h1>Hello, {{name}}.</h1><a href="#/page2">Go to page 2</a>'

// setup
var app = pavo()
app.registerModule('/', new Page(content))

// extra configuration
app.getModule('/').on('draw', function() {
	$('h1').append('<h2>This is appended afterwards</h2>')
})

app.start()
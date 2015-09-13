var React = require('react');
var WendaApp = require('./wenda/wendaApp.js');

var mainCom = React.render(
	<WendaApp />,
	document.getElementById('app')
)
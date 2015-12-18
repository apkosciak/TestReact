var React = require("react");

var NameDisplay = React.createClass({

	render: function(){
		return (
			<div>
				<h1> My name is {this.props.name} </h1>
			</div>
		);
	}

});

module.exports = NameDisplay;
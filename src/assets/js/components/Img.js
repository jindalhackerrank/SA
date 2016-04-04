
var React = require('react');

var Img = React.createClass({
  render: function(){
    return (
     	<div className="img-responsive">
     		<img src={this.props.image} />
     	</div>
    );
  }

});

module.exports = Img;
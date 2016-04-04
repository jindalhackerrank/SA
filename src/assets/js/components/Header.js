
var React = require('react');

var Header = React.createClass({
  render: function(data){
    return (
      <div className="row header">
        <div className="col-md-12 col-lg-12 col-sm-8 col-xs-8">
          {"YOUR SHOPPING BAG"}
        </div>
        <div className="hidden-md hidden-lg col-sm-4 col-xs-4">
          {this.props.productCount + " Items"}
        </div>
      </div> 
     
    );
  }

});

module.exports = Header;
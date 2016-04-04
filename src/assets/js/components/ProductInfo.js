
var React = require('react');

var ProductInfo = React.createClass({
  render: function(){
    return (
    <div>
      <div className="col-md-12 col-lg-12 dark-font large-font caps">
        {this.props.prodName}
      </div> 
      <div className="col-md-12 col-lg-12 light-font">
        {this.props.prodStyle}
      </div> 
      <div className="col-md-12 col-lg-12 light-font caps">
        {this.props.prodColor}
      </div> 
     </div>
    );
  }

});

module.exports = ProductInfo;
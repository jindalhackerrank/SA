
var React = require('react');

var ItemsHeader = React.createClass({
  render: function(data){
    return (
      <div className="row cart-items-header hidden-sm hidden-xs">
        <div className="col-md-7 col-lg-7 hidden-sm hidden-xs ex-large-font dark-font">
          {this.props.productCount + " Items"}
        </div>
        <div className="col-md-5 col-lg-5 hidden-sm hidden-xs">
          <div className="col-md-3 col-lg-3 hidden-sm hidden-xs ex-large-font dark-font">
            {"SIZE"}
          </div>
          <div className="col-md-3 col-lg-3 hidden-sm hidden-xs ex-large-font dark-font">
            {"QTY"}
          </div>
          <div className="col-md-3 col-lg-3 hidden-sm hidden-xs ex-large-font dark-font">
            {"PRICE"}
          </div>
          <div className="col-md-3 col-lg-3 hidden-sm hidden-xs ex-large-font dark-font">
            {"TOTAL"}
          </div>
        </div>
      </div> 
     
    );
  }

});

module.exports = ItemsHeader;

var React = require('react');

var Support = React.createClass({
  render: function(){
    return (
      <div className="col-md-3 col-lg-3 hidden-sm hidden-xs support">
      	<div className="row ex-large-font dark-font">
        {"Need help "}
        </div>
        <div className="row ex-large-font light-font">
        {"Call me at 9582223889 "}
        </div>
      </div> 
     
    );
  }

});

module.exports = Support;
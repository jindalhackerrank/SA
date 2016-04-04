
var React = require('react');
var CartActions = require('../actions/cartActions');

var Coupon = React.createClass({
  _applyCouponCode:function(){
    CartActions.applyCouponCode(this.refs.couponCode.value);
  },
  render: function(){
    return (
      <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12 coupon">
        <div className="col-md-5 col-lg-5 col-xs-12 col-sm-12 heading">
        	{"Enter Promotional Code or Gift Code"}
      	</div> 
      	<div className="col-md-4 col-lg-4 col-xs-8 col-sm-8">
        	<input type="text" ref="couponCode" />
      	</div> 
     	  <div className="col-md-3 col-lg-3 col-xs-4 col-sm-4">
        	<a onClick={this._applyCouponCode}> Apply </a>
      	</div> 
        <div className="col-md-5 col-lg-5 col-xs-12 col-sm-12 heading">
          {this.props.couponInfo["message"]}
        </div> 
      </div> 
     
    );
  }

});

module.exports = Coupon;
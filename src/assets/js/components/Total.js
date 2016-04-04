
var React = require('react');

var Total = React.createClass({
  render: function(){
    var discount = '';
    var shipping = '';
    var coupon = '';
  if(this.props.couponInfo["amount"] == 0)
    coupon = '';
  else
    coupon = (<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 total-item">
        <div className="col-md-9 col-lg-9 col-sm-9 col-xs-9 dark-font large-font caps">
          {"Coupon " + this.props.couponInfo["code"] + " applied" }
        </div> 
        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3 dark-font ex-large-font caps">
          {"-"+this.props.couponInfo["amount"]+"$"}
        </div> 
      </div>);
  if(this.props.shippingCost == 0 )
    shipping = "FREE";
  else
    shipping = this.props.shippingCost + "$";
  if(this.props.discount["amount"]==0)
    discount = '';
  else
    discount = (<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 total-item">
        <div className="col-md-9 col-lg-9 col-sm-9 col-xs-9 dark-font large-font caps">
          {"Discount of " + this.props.discount["percentage"] + "% applied" }
        </div> 
        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3 dark-font ex-large-font caps">
          {"-"+this.props.discount["amount"]+"$"}
        </div> 
      </div>);
    return (
    <div className="total">
      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 total-item">
       	<div className="col-md-9 col-lg-9 col-sm-9 col-xs-9 dark-font large-font caps">
        	{"Sub Total"}
      	</div> 
      	<div className="col-md-3 col-lg-3 col-sm-3 col-xs-3 dark-font ex-large-font">
        	{this.props.subTotal + "$"}
      	</div> 
      </div> 
      {discount}
      {coupon}
      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 total-item">
       	<div className="col-md-9 col-lg-9 col-sm-9 col-xs-9 dark-font large-font caps">
        	{"Estimated Shipping ( Above 50$ free )"}
      	</div> 
      	<div className="col-md-3 col-lg-3 col-sm-3 col-xs-3 dark-font ex-large-font caps">
        	{shipping}
      	</div> 
      </div> 
      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 total-item border-top ">
       	<div className="col-md-9 col-lg-9 col-sm-9 col-xs-9 dark-font ex-large-font caps">
        	{"Estimated Total"}
      	</div> 
      	<div className="col-md-3 col-lg-3 col-sm-3 col-xs-3 dark-font ex-ex-large-font caps">
        	{this.props.finalPrice+"$"}
      	</div> 
      </div> 
      </div>
    );
  }

});

module.exports = Total;
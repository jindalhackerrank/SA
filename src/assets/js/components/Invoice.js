
var React = require('react');
var Support = require('./Support');
var Coupon = require('./Coupon');
var Total = require('./Total');
var Checkout = require('./Checkout');


var Invoice = React.createClass({
  render: function(data){
    return (
      <div className="row invoice">
          <Support />
        <div className = "col-md-9 col-lg-9 col-sm-12 col-xs-12">
          <div className = "row coupon">
            <Coupon couponInfo = {this.props.couponInfo}/>
          </div>
          <div className = "row">
            <Total couponInfo = {this.props.couponInfo} shippingCost={this.props.shippingCost} subTotal={this.props.subTotal} discount = {this.props.discount} finalPrice={this.props.finalPrice}/>
          </div>
        </div>
      </div> 
     
    );
  }

});

module.exports = Invoice;
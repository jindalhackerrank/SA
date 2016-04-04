
var React = require('react');
var cartStore = require('../stores/cartStore');
var Header = require('./Header');
var ItemsHeader = require('./ItemsHeader');
var ItemsList = require('./ItemsList');
var Invoice = require('./Invoice');
var Modal = require('./Modal');


function getCartData(){
     return cartStore.getCartData();
};

var Cart = React.createClass({
  getInitialState: function(){
    return getCartData();
  },
  componentWillMount: function(){
    cartStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    cartStore.removeChangeListener(this.onChange);
  },
  onChange: function(){ 
    this.setState(getCartData());
    this.forceUpdate();
  },
  render: function(data){
    console.log(this.state.productsInCart);
    return (
      <div className="main">
        <Modal />
        <Header productCount={this.state.productCount} />
        <ItemsHeader productCount={this.state.productCount}/>
        <ItemsList ItemsData={this.state.productsInCart} />
        <Invoice couponInfo= {this.state.couponInfo} shippingCost={this.state.shippingCost} subTotal={this.state.subTotal} discount = {this.state.discount} finalPrice={this.state.finalPrice} />
      </div> 
     
    );
  }

});

module.exports = Cart;

var React = require('react');
var CartActions = require('../actions/cartActions');

var ItemAction = React.createClass({
  _removeProductFromCart:function(){
    CartActions.removeProductFromCart(this.props.itemId);
  },
  _showModal:function(){
    CartActions.loadProduct(this.props.itemId);
    $(".modal").modal('show');
  },
  render: function(){
    return (
      <div className="item-action">
      	<div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
        	<a onClick={this._showModal}>Edit</a>
      	</div>   
      	<div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
        	<a onClick={this._removeProductFromCart}>Remove</a>
      	</div> 
      </div> 
     
    );
  }

});

module.exports = ItemAction;
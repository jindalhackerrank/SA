
var React = require('react');
var CartActions = require('../actions/cartActions');


var ItemSpec = React.createClass({
  getInitialState:function(){
    return {
      qty:this.props.qty
    }
  },
  _updateQuantity:function(event){
    this.setState({qty:event.target.value});
    var data = {};
    data["id"] = this.props.id;
    data["qty"] = event.target.value;
    CartActions.updateQuantity(data);
  },
  render: function(){
    var originalPrice;
    this.state.qty = this.props.qty;
    if(this.props.originalPrice == this.props.actualPrice)
      originalPrice = '';
    else
      originalPrice = (<span className="strike-thru light-font">
        {this.props.originalPrice + "$"}
       </span>);
    return (
    <div className="item-spec">
       <div className="col-md-3 col-lg-3 hidden-sm hidden-xs caps ex-large-font dark-font">
        {this.props.size}
       </div> 
       <div className="col-md-3 col-lg-3 hidden-sm hidden-xs">
        <input type = "text" value={this.state.qty} onChange={this._updateQuantity} />
       </div> 
       <div className="col-md-3 col-lg-3 hidden-sm hidden-xs ex-large-font dark-font">
        {originalPrice}
        {" " + this.props.actualPrice + "$"}
       </div> 
       <div className="col-md-3 col-lg-3 hidden-sm hidden-xs ex-large-font dark-font">
        {" " + this.props.actualPrice*this.state.qty + "$"}
       </div> 
       <div className="col-sm-12 col-xs-12 hidden-md hidden-lg padding caps">
        {"Size : " + this.props.size}
       </div> 
       <div className="col-sm-12 col-xs-12 hidden-md hidden-lg padding">
        Qty :  <input type = "text" value={this.state.qty} onChange={this._updateQuantity} />
       </div> 
       <div className="col-sm-12 col-xs-12 hidden-md hidden-lg dark-font ex-ex-large-font">
        {originalPrice}
        {" " + this.props.actualPrice + "$"}
       </div> 
       <div className="col-sm-12 col-xs-12 hidden-md hidden-lg padding dark-font">
        Total : {" " + this.props.actualPrice*this.state.qty + "$"}  
       </div> 
     </div>
    );
  }

});

module.exports = ItemSpec;
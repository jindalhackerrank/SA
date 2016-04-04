
var React = require('react');
var Img = require('./Img');
var ProductInfo = require('./ProductInfo');
var ItemAction = require('./ItemAction');
var ItemSpec = require('./ItemSpec');

var Item = React.createClass({
  render: function(){
    return (
      <div>
      <div className="row item">
        <div className="col-md-2 col-lg-2 col-sm-5 col-xs-5">
        	<Img image={this.props.info["img"]} />
        </div>
        <div className="col-md-5 col-lg-5 col-sm-7 col-xs-7">
        	<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        		<ProductInfo prodName={this.props.info["p_variation"] + " " + this.props.info["p_name"]} prodStyle = { "Style" + " : " + this.props.info["p_style"]} prodColor = {"Color" + " : " + this.props.info["p_selected_color"]["name"]}/>	
        	</div>
        	<div className="row hidden-sm hidden-xs center-align">
        		<ItemAction itemId={this.props.info["p_id"]} />	
        	</div>
        	<div className="col-sm-12 col-xs-12 hidden-md hidden-lg">
        		<ItemSpec size={this.props.info["p_selected_size"]["code"]} qty={this.props.info["p_quantity"]} originalPrice={this.props.info["p_originalprice"]} id={this.props.info["p_id"]} actualPrice={this.props.info["p_price"]} currency={this.props.info["c_currency"]} />	
        	</div>
        </div>
        <div className="col-md-5 col-lg-5 hidden-sm hidden-xs">
            <ItemSpec size={this.props.info["p_selected_size"]["code"]} qty={this.props.info["p_quantity"]} originalPrice={this.props.info["p_originalprice"]} id={this.props.info["p_id"]} actualPrice={this.props.info["p_price"]} currency={this.props.info["c_currency"]} /> 	
        </div>
        <div className="hidden-md hidden-lg col-sm-12 col-xs-12 mobile-action center-align">
          <ItemAction itemId={this.props.info["p_id"]}/>
        </div>
      
      </div> 
      </div>
     
    );
  }

});

module.exports = Item;
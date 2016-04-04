var React = require('react');
var cartStore = require('../stores/cartStore');
var cartAction = require('../actions/cartActions');
var bootstrap = require('bootstrap');
var Img = require('./Img');
function getModalData(){
  console.log(cartStore.getProductInfo());
 return  cartStore.getProductInfo();
}

var Modal = React.createClass({
  virtualKeyBoard1 : '',
  getInitialState: function(){
    return getModalData();
  },
  componentWillMount: function(){
    cartStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    cartStore.removeChangeListener(this.onChange);
  },
  onChange: function(){
    this.setState(getModalData());
  },
  changeQty:function(event){
    this.setState({p_quantity:event.target.value});
  },
  changeSize:function(){
    this.state["p_selected_size"]["code"] = this.refs.size.value;
    this.state["p_selected_size"]["name"] = this.refs.size.name;
    this.setState();
  },
  updateData:function(){
    console.log(this.state);
    cartAction.updateData(this.state);
    $(".modal").modal("hide");
  },
  _closeModal:function(){
    $(".modal").modal("hide");
  },
  render: function () {      
    var size = [];
    var color = [];
    var comp = '';
    var self = this;
    var i ;
    if(this.state["p_id"]!=undefined){
      this.state.p_available_options["sizes"].map(function(value,index){
      size.push((<option value={value.code}>{value.code}</option>));
      });
      comp = (<div className="modal-body row prod-info">
              <span className="close" onClick={this._closeModal}>X</span>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 space">
                <Img image={this.state.img} />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="row dark-font ex-ex-large-font space">
                    {this.state.p_name}
                  </div>
                  <div className="row dark-font ex-ex-large-font space">
                    {this.state.p_price + "$"}
                  </div>
                  <div className="row light-font ex-large-font space">
                  <select value={this.state.p_selected_size.code} name={this.state.p_selected_size.name} ref="size" onChange={this.changeSize}>
                    {size}
                  </select>
                  </div>
                  <div className="row space">
                    <input type="text" value={this.state.p_quantity} ref="qty" onChange={this.changeQty} />
                  </div>
                  <div className="row space">
                    <a onClick={this.updateData}>Edit</a>
                  </div>
              </div>
            </div>
          );
    }else{
      comp = '';
    }
    return (<div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            {comp} 
          </div>
        </div>
      </div>)
  }
});

module.exports = Modal;

var React = require('react');
var Item = require('./Item');


var ItemsList = React.createClass({
  render: function(){
    var ItemsList = [];
    this.props.ItemsData.map(function(value,index){
      ItemsList.push((<Item info={value} />));
    })
    return (
      <div className="row item-list">
        {ItemsList}
      </div> 
     
    );
  }

});

module.exports = ItemsList;
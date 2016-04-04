global.jQuery = global.$ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');
var Cart = require('./components/Cart'); 

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Cart />
      </div>
    );
  }
});


ReactDOM.render(
    <App />,
    document.getElementById('app')
)

var AppDispatcher = require('../dispatchers/AppDispatcher');
var appConstants = require('../constants/appConstants');

var cartActions = {
  updateQuantity: function(data){
    AppDispatcher.handleAction({
      actionType: appConstants.UPDATE_QUANTITY, 
      data: data
    });
  },
  removeProductFromCart:function(itemId){
  	AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_PRODUCT, 
      itemId: itemId
    });
  },
  applyCouponCode:function(code){
  	AppDispatcher.handleAction({
      actionType: appConstants.APPLY_COUPON_CODE, 
      code: code
    });
  },
  loadProduct:function(id){
    AppDispatcher.handleAction({
      actionType: appConstants.LOAD_PRODUCT, 
      itemId: id
    });
  },

  updateData:function(data){
    AppDispatcher.handleAction({
      actionType: appConstants.UPDATE_PRODUCT, 
      data: data
    });
  }

};

module.exports = cartActions;
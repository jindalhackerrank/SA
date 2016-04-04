var AppDispatcher = require('../dispatchers/AppDispatcher');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var cartActions = require('../actions/cartActions');
var cartData = require('../Data/cart.js');
var appConstants = require('../constants/appConstants');


var CHANGE_EVENT = 'change';
var data = cartData;
var couponCodes = ["JF10","JF15"];
var couponCodeApplied = false;

var cartStore = objectAssign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    couponInfo:{
        amount:0,
        code:'',
        error:false,
        message:'',
        applied:false
    },
    productInfo:{"info":""},
    getCartData:function(){
      return {
        productsInCart:data["productsInCart"],
        productCount:this.getProductCount(),
        subTotal:this.getTotalAmount(),
        discount:this.getDiscount(),
        finalPrice:this.getFinalPrice(),
        shippingCost:this.getShippingAmount(),
        couponInfo:this.getCouponInfo()
      };
    },
    setProductInfo:function(id){
        var self = this;
        data["productsInCart"].map(function(value,index){
            if(value.p_id == id)
                self.productInfo = value;
        })
    },
    getProductInfo:function(){
        return this.productInfo;
    },
    getProductCount:function(){
        var count = 0 ;
        data["productsInCart"].map(function(value,index){
            count = count + parseInt(value.p_quantity);
        });
        return count;
    },
    getCouponInfo:function(){
        return this.couponInfo;
    },
    applyCouponCode:function(code){
            if(couponCodes.indexOf(code.trim().toUpperCase())!=-1){
                 this.couponInfo["message"] ="Coupon applied";
                 this.couponInfo["code"] = code.trim().toUpperCase();
                 this.couponInfo["applied"] = true;
                if(code.trim().toUpperCase() == "JF10")
                    this.couponInfo["amount"] = Math.round(this.getTotalAmount()*0.1*100)/100;
                else if(code.trim().toUpperCase() == "JF15")
                    this.couponInfo["amount"] = Math.round(this.getTotalAmount()*0.15*100)/100;
            }else{
                this.couponInfo["error"] =true;
                if(code.trim() == "")
                    this.couponInfo["message"] ="Coupon Code cannot be blank";
                else
                    this.couponInfo["message"] ="Invalid Coupon Code";

                this.couponInfo["applied"] = false;
                this.couponInfo.code = '';
                this.couponInfo.amount = 0;
                console.log(this.couponInfo.amount);
            }
    },
    updateQuantity:function(d){
        if(d.qty=='')
            d.qty = 0;
        data["productsInCart"].map(function(value,index){
            if(d.id == value.p_id)
                value.p_quantity = parseInt(d.qty);
        });
        if(this.couponInfo["applied"] == true)
            this.applyCouponCode(this.couponInfo["code"]);
    },
    getTotalAmount:function(){
        var total = 0;
        data["productsInCart"].map(function(value,index){
            total = total + value.p_price*value.p_quantity;
        });  
        return total;
    },
    getDiscount:function(){
        var prodCount = this.getProductCount();
        var subTotal = this.getTotalAmount();
        var discount = {};
        if(prodCount < 3){
            discount["percentage"] = 0 ;
            discount["amount"] = 0;
        }
        else if(prodCount==3){
            discount["percentage"] = 5 ;
            discount["amount"] = Math.round(subTotal*0.05*100)/100;
        }
        else if(prodCount>3 && prodCount<=10){
            discount["percentage"] = 10 ;
            discount["amount"] = Math.round(subTotal*0.1*100)/100;
        }
        else if(prodCount>10){
            discount["percentage"] = 25 ;
            discount["amount"] = Math.round(subTotal*0.25*100)/100;
        }
        return discount;
    },
    getShippingAmount:function(){
        if((this.getTotalAmount())>50)
            return 0;
        else
            return 5;
    },
    getFinalPrice:function(){
        return Math.round((this.getTotalAmount() - this.getDiscount()["amount"] + this.getShippingAmount() - this.couponInfo["amount"])*100)/100;
    },
    updateProduct:function(d){
        console.log(d);
        data["productsInCart"].map(function(value,index){
            if(value.p_id==d.p_id)
                data["productsInCart"][index] = d;
        });
        this.setProductInfo(d.p_id);
        console.log(data["productsInCart"]);
        if(this.couponInfo["applied"] == true)
            this.applyCouponCode(this.couponInfo["code"]);
    },
    removeProductFromCart:function(itemId){
        data["productsInCart"].map(function(value,index){
            if(value.p_id == itemId){
                data["productsInCart"].splice(index,1);
                return;
            }
        })
    }

});


AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case appConstants.UPDATE_QUANTITY:
            cartStore.updateQuantity(action.data);
            cartStore.emitChange();
            break;
        case appConstants.REMOVE_PRODUCT:
            cartStore.removeProductFromCart(action.itemId);
            cartStore.emitChange();
            break;
        case appConstants.APPLY_COUPON_CODE:
            cartStore.applyCouponCode(action.code);
            cartStore.emitChange();
            break;
        case appConstants.LOAD_PRODUCT:
            cartStore.setProductInfo(action.itemId);
            cartStore.emitChange();
            break;
        case appConstants.UPDATE_PRODUCT:
            cartStore.updateProduct(action.data);
            cartStore.emitChange();
            break;
        default:
            return true;
    }
});

module.exports = cartStore;
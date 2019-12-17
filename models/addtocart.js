const express = require("express");
const conn = require("../database/connect");
const config = require("../config/config")
const request = require("request-promise")

module.exports.addtocart = async function (data) {
    let con = await conn();
    let product_option = { "product_color": data.product_color, "product_size": data.product_size, "product_weight": data.product_weight, "product_height": data.product_height }
    return await con.query("INSERT INTO `cart_master` (user_id,productId,product_option,original_price,discounted_price,currency_code,cart_qty,cart_total_price,status_code) VALUES ('" + data.user_id + "', '" + data.productId + "', '" + JSON.stringify(product_option) + "' ,'" + data.original_price + "','"+ data.discounted_price +"','" + data.currency_code + "','" + data.cart_qty + "','" + data.cart_total_price + "','" + '1' + "')");
}

module.exports.getCartDetails = async function (data) {
    let con = await conn();
    let productprop;
    let element;
    let arr1 = [];
    let arrFinal = [];
    let arrFinal2=[]
    let obj;
    let result;
    let resData;
    let details = await con.query("SELECT * FROM cart_master WHERE user_id =" + data.user_id);
    for (let index = 0; index < details.length; index++) {
        element = details[index];
        productprop = element.product_option;
        let productId = element.productId;
        delete element.product_option;
        let arrayDetail = JSON.parse(JSON.stringify(element));
        const options={
           url: config.GET_PRODUCT_DETAIL + productId,
            method:'GET',
            headers:{
                'Accept':'application/json',
            },
            json: true
        };
        await request(options,function(error,res){
            result = res.body.data;
            for (let i = 0; i < result.length; i++) {
                 resData = result[i];  
            }
            
            arrFinal.push({ ...obj, ...arrayDetail ,...resData})
        });
    }
    const element2=[];
    let curr;
    for (let index = 0; index < arrFinal.length; index++) {
        let hey = arrFinal[index].discounted_price*arrFinal[index].cart_qty;
        element2.push(hey);
    }
    let element3 = element2.reduce((a,b)=>a+b,0)
    arrFinal2.push({"Total Amount":element3});
    return {arrFinal,arrFinal2};
}

module.exports.deleteCartDetails = async function(data){
    let con = await conn();
    return await con.query("DELETE from cart_master WHERE user_id ='"+data.user_id+"' AND productId='"+data.productId+"' ");
}
module.exports.updateCartDetails = async function(data){
    let con = await conn();
    await con.query("UPDATE cart_master SET cart_qty='"+ data.cart_qty +"' WHERE user_id='"+data.user_id +"' AND productId='"+data.productId+"'");
}
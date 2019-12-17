const express = require("express");
const conn = require("../database/connect");

module.exports.addGoodsListing = async function(data){
    let con = await conn();
    await con.query('INSERT INTO goodslisting(GoodsImageUrl,GoodsProductName,GoodsPrice,GoodsDisountedPrice,GoodsDiscountedPercentage,GoodsRating,GoodsBought)VALUES("'+data.GoodsImageUrl+'","'+data.GoodsProductName+'","'+data.GoodsPrice+'","'+data.GoodsDisountedPrice+'","'+data.GoodsDiscountedPercentage+'","'+data.GoodsRating+'","'+data.GoodsBought+'")');
}
module.exports.getGoodsListing = async function(){
    let con =  await conn();
    return await con.query('SELECT * FROM goodslisting');
}
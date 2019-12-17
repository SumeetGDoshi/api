const express = require("express");
const conn = require("../database/connect");
const request = require("request-promise");
const config = require("../config/config")

module.exports.addStreamProducts = async function (data) {
  let con = await conn();
  await  con.query('INSERT INTO  streamproduct (ProductID,StreamID,ProductName,Brand,Category,SubCategory,Location,Description,Price,DiscountPrice,KeyWords,DeleteStatus,Weight,Quantity,Length,Width,Height,ActiveStatus,CreatedTime,SchedualStreamId) VALUES ("'+ data.ProductID +'", "'+ data.StreamID +'", "'+ data.ProductName +'", "'+ data.Brand +'","'+ data.Category +'","'+ data.SubCategory +'","'+ data.Location +'","'+ data.Description +'","'+ data.Price +'","'+ data.DiscountPrice +'","'+ data.KeyWords +'","'+ data.DeleteStatus +'","'+ data.Weight +'","'+ data.Quantity +'","'+ data.Length +'","'+ data.Width +'","'+ data.ActiveStatus +'","'+ data.CreatedTime +'","'+ data.Height +'","'+ data.SchedualStreamId +'")');                             
}


module.exports.getstreamproducts = async function () {
  let con = await conn();
  return await con.query('SELECT * FROM streamproduct');           
}

module.exports.getProductDetails = async function(data){
  let Finalarr=[];
  console.log(data.ParentId)
  const options = {
    url: config.GET_CATEGORY_MAPPING + data.ParentId,
    method: 'GET',
    headers:{
      'Accept': 'application/json',
    },
    json:true
  };
  await request (options,async function(err,res,body){
    if(err){
      console.log(err);
      throw err;
    }else{
      let productdata = await body.data;
      for (let i = 0; i < productdata.length; i++) {
        const resData = productdata[i];
        Finalarr.push(resData)
    }
    }
  })
  console.log(Finalarr);
  return Finalarr;
}
module.exports.getCategoryDetails = async function(data){
  let Finalarr2=[];
  console.log(data.ParentId);
  const options={
    url: config.GET_CATEGORY_LIST + data.ParentId,
    method: 'GET',
    headers:{

      'Accept':'application/json',
    },
    json:true
  };

  await request(options,async function(err,res,body){
    if(err){
      console.log(err)
      throw  err;
    }else{
      let productdata2 = await body.data;
      
      for (let i = 0; i < productdata2.length; i++) {
        const resData = productdata2[i];
        Finalarr2.push(resData)
      }
    }
  })
  console.log(Finalarr2);
  return Finalarr2;
}
const goodsListingObj = require('../models/goodsdetails');

module.exports.addListing= async function(req,res){
    try{
        let result= await goodsListingObj.addGoodsListing(req.body);
        return res.status(200).json({"status":"Success","data":result});
    }
    catch(err){
        return  res.status(400).json({"status":"Bad Request","error":err});
    }
}

module.exports.getListing = async function(req,res){
    try{
        let result = await goodsListingObj.getGoodsListing(req.body);
        return res.status(200).json({"status":"success","data":result})
    }
    catch(err){
        return res.status(400).json({"status":"Bad Request","error":err})
    }
}
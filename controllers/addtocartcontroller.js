const addtocartmodelObj = require('../models/addtocart');

module.exports.addtocart = async function (req, res) {
    try {
        let result = await addtocartmodelObj.addtocart(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result,"Message":"Added to cart" });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getCartDetails = async function(req,res){
    try{
        let result = await addtocartmodelObj.getCartDetails(req.query);
        return res.status(200).json({"status":"Success","data":result,"message": "Your Cart Details"});
    }catch(err){
        console.log(err);
        return res.status(400).json({"err":err});
    }
}

module.exports.deleteCartDetails = async function(req,res){
    try{
        let result = await addtocartmodelObj.deleteCartDetails(req.query);
        return res.status(200).json({"status":"Success","data":result,"message": "Your Cart Deleted"});
    }catch(err){
        console.log(err);
        return res.status(400).json({"err":err});
    }
}
module.exports.updateCartDetails = async function(req,res){
    try{
        let result = await addtocartmodelObj.updateCartDetails(req.query);
        return res.status(200).json({"status":"Success","data":result,"Message": "Your Cart Updated"});
    }catch(err){
        console.log(err);
        return res.status(400).json({"err":err});
    }
}
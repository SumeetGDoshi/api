const productdetailmodelObj = require('../models/productdetails');


module.exports.addStreamProducts = async function (req, res) {
    try {
        let result = await productdetailmodelObj.addStreamProducts(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getstreamproducts = async function (req, res) {
    try {
        let result = await productdetailmodelObj.getstreamproducts(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}
module.exports.getProductDetails =  async function(req,res){
    try{
        let result = await productdetailmodelObj.getProductDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ 'err': err });
    }
}
module.exports.getCategoryDetails =  async function(req,res){
    try{
        let result = await productdetailmodelObj.getCategoryDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    }
    catch(err){
        console.log(err);
        return res.status(400).json({ 'err': err });
    }
}
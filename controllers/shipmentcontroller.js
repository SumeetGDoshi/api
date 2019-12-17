const shipmentmodelObj = require('../models/shipmentdetails');

module.exports.shipAddressDetails = async function (req, res) {
    try {
        let result = await shipmentmodelObj.shipAddressDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getShipAddressDetailsById = async function (req, res) {
    try {
        let result = await shipmentmodelObj.getShipAddressDetailsById(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.deleteShipAddressDetails = async function (req, res) {
    try {
        let result = await shipmentmodelObj.deleteShipAddressDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getCountries = async function(req,res){
    try{
        let result = await shipmentmodelObj.getCountries(req.body);
        return res.status(200).json({"status":"success","data": result});

    }catch(err){
        console.log(err);
        return res.status(400).json({"error":err});
    }
}


module.exports.getState = async function(req,res){
    try{
        let result = await shipmentmodelObj.getState(req.query);
        return res.status(200).json({"status":"success","data": result});

    }catch(err){
        console.log(err);
        return res.status(400).json({"error":err});
    }
}

module.exports.getCities = async function(req,res){
    try{
        let result = await shipmentmodelObj.getCities(req.query);
        return res.status(200).json({"status":"success","data": result});

    }catch(err){
        console.log(err);
        return res.status(400).json({"error":err});
    }
}

module.exports.shipmentFinalDetails = async function(req,res){
    try{
        console.log(req.body,"szdfvdsgvdfhbf")
        let result = await shipmentmodelObj.shipmentFinalDetails(req.body);
        return res.status(200).json({"status":"success","data": result});

    }catch(err){
        console.log(err);
        return res.status(400).json({"error":err});
    }
}

module.exports.finalCheckOut = async function(req,res){
    try{
        let result = await shipmentmodelObj.finalCheckOut(req.body);
        return res.status(200).json({"status":"success","data": result,"message": "Data Inserted Successfully"});

    }catch(err){
        console.log(err);
        return res.status(400).json({"error":err});
    }
}

module.exports.UpdateCheckOut = async function(req,res){
    try{
        let result = await shipmentmodelObj.UpdateCheckOut(req.body);
        return res.status(200).json({"status":"success","data": result,"message": "Data Update Successfully"});

    }catch(err){
        console.log(err);
        return res.status(400).json({"error":err});
    }
}

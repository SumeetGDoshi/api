const profileDetailsObj = require('../models/profiledetails');

module.exports.updateDetails = async function(req,res){
    try{
        let result= await profileDetailsObj.updateDetails(req.body);
        return res.status(200).json({"status":"Success","data":result,"message":"Details are Updated"});
    }
    catch(err){
        return  res.status(400).json({"status":"Bad Request","error":err});
    }
}
const addcarddetailsmodelObj = require('../models/gatewaydetails');

module.exports.addCardDetails = async function(req, res) {
    try {
        let result = await addcarddetailsmodelObj.addCardDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result, "Message": "Card Added" });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getCardDetails = async function(req, res) {
    try {
        let result = await addcarddetailsmodelObj.getCardDetails(req.query);
        return res.status(200).json({ "status": "Success", "data": result });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ "err": err });
    }
}

module.exports.deleteCardDetails = async function(req, res) {
    try {
        let result = await addcarddetailsmodelObj.deleteCardDetails(req.query);
        return res.status(200).json({ "status": "Success", "data": result });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ "err": err });
    }
}
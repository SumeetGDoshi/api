const countrydetailmodelObj = require('../models/countrydetails');

module.exports.addCountryDetails = async function (req, res) {
    try {
        let result = await countrydetailmodelObj.addCountryDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getAllDetails = async function (req, res) {
    try {
        let result = await countrydetailmodelObj.getAllDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

const invoicedetailmodelObj = require('../models/invoicedetails');

module.exports.invoiceDetail = async function (req, res) {
    try {
        let result = await invoicedetailmodelObj.invoiceDetail(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}



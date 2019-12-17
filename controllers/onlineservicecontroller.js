const onlineservicedetailmodelObj = require('../models/onlineservice');



module.exports.addOnlineServiceBooking = async function (req, res) {
    try {
        let result = await onlineservicedetailmodelObj.addOnlineServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getAllOnlineServiceBooking = async function (req, res) {
    try {
        let result = await onlineservicedetailmodelObj.getAllOnlineServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getOnlineServiceBookingSchedule = async function (req, res) {
    try {
        let result = await onlineservicedetailmodelObj.getOnlineServiceBookingSchedule(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getOnlineServiceDetails = async function (req, res) {
    try {
        let result = await onlineservicedetailmodelObj.getOnlineServiceDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getOnlineServiceDetailsById = async function (req, res) {
    try {
        let result = await onlineservicedetailmodelObj.getOnlineServiceDetailsById(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getServiceCategoryList = async function (req, res) {
    try {
        let result = await onlineservicedetailmodelObj.getServiceCategoryList(req.query);
        console.log(result);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

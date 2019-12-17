const liveservicedetailmodelObj = require('../models/liveservices');



module.exports.addLiveServiceBooking = async function (req, res) {
    try {
        let result = await liveservicedetailmodelObj.addLiveServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getAllLiveServiceBooking = async function (req, res) {
    try {
        let result = await liveservicedetailmodelObj.getAllLiveServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getLiveServiceBookingSchedule = async function (req, res) {
    try {
        let result = await liveservicedetailmodelObj.getLiveServiceBookingSchedule(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getLiveServiceDetails = async function (req, res) {
    try {
        let result = await liveservicedetailmodelObj.getLiveServiceDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getLiveServiceDetailsById = async function (req, res) {
    try {
        let result = await liveservicedetailmodelObj.getLiveServiceDetailsById(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getServiceCategoryList = async function (req, res) {
    try {
        let result = await liveservicedetailmodelObj.getServiceCategoryList(req.query);
        console.log(result);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}
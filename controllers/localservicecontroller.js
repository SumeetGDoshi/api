const localservicedetailmodelObj = require('../models/localservice');



module.exports.addLocalServiceBooking = async function (req, res) {
    try {
        let result = await localservicedetailmodelObj.addLocalServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getAllLocalServiceBooking = async function (req, res) {
    try {
        let result = await localservicedetailmodelObj.getAllLocalServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getLocalServiceBookingSchedule = async function (req, res) {
    try {
        let result = await localservicedetailmodelObj.getLocalServiceBookingSchedule(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getLocalServiceDetails = async function (req, res) {
    try {
        let result = await localservicedetailmodelObj.getLocalServiceDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getLocalServiceDetailsById = async function (req, res) {
    try {
        let result = await localservicedetailmodelObj.getLocalServiceDetailsById(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getLocalServiceDetailsByPincode = async function (req, res) {
    try {
        let result = await localservicedetailmodelObj.getLocalServiceDetailsByPincode(req.query);
        console.log(result);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getServiceCategoryList = async function (req, res) {
    try {
        let result = await localservicedetailmodelObj.getServiceCategoryList(req.query);
        console.log(result);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}
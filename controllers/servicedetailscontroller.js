const servicedetailmodelObj = require('../models/servicedetails');



module.exports.addLocalServiceDetails = async function (req, res) {
    console.log("hhiiii1111");
    try {
        let result = await servicedetailmodelObj.addLocalServiceDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getLocalServiceDetails = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.getLocalServiceDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}




module.exports.addLiveServiceDetails = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.addLocalServiceDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getLiveServiceDetails = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.getLiveServiceDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getLiveServiceDetailsById = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.getLiveServiceDetailsById(req.query);
        console.log(result);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.addLiveServiceBooking = async function (req, res) {
    console.log("hii service");

    try {
        let result = await servicedetailmodelObj.addLiveServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getAllLiveServiceBooking = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.getAllLiveServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}




module.exports.addOnlineServiceDetails = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.addLocalServiceDetails(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getOnlineServiceDetails = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.getOnlineServiceDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.getOnlineServiceDetailsById = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.getOnlineServiceDetailsById(req.query);
        console.log(result);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.addOnlineServiceBooking = async function (req, res) {
    console.log("hii service");

    try {
        let result = await servicedetailmodelObj.addOnlineServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getAllOnlineServiceBooking = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.getAllOnlineServiceBooking(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}


module.exports.getAllDetails = async function (req, res) {
    try {
        let result = await servicedetailmodelObj.getAllDetails(req.query);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}
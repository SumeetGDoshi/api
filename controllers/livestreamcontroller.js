const livestreamobj = require('../models/livestream');

module.exports.createLiveStream = async function (req, res) {
    try {
        let result = await livestreamobj.createLiveStream(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}

module.exports.updateLiveStream = async function (req, res) {
    try {
        let result = await livestreamobj.updateLiveStream(req.body);
        return res.status(200).json({ "status": "Sucess", "data": result });
    } catch (e) {
        console.log(e)
        return res.status(400).json({ 'err': e });
    }
}










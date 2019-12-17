const stripecontrollerObj = require('../models/stripe');

module.exports.stripedetail= async function(req,res){
    try{
        let result = await stripecontrollerObj.stripedetail(req);
        return res.status(200).json({'status':'success','data':result});
    }
    catch(err){
        console.log(err)
        return res.status(400).json({'status':'error','error':err});
    }
}
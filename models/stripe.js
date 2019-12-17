const app = require("express")();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");


module.exports.stripedetail = async function(req,res){
  let amount = req.body.amount;
  let currency = req.body.currency_code;
  let token = req.body.token;
  let email = req.body.email

  const customer = await stripe.customers.create({
    source: token, 
    email: email
  });

  let charge = await stripe.charges.create({
    amount: amount,
    currency:currency,
    description: "Test Charge",
    customer: customer.id
  });

  return charge;

}




















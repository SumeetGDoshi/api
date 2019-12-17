const express = require("express");
const request = require("request-promise")
const convertCurrency = require('nodejs-currency-converter');
const conn = require("../database/connect");
const accountSid = 'AC0898007cad13e9378d23d2f13ca1875f'
const authToken = 'ab39a972cad39504eab495d6937e0494';
const client = require('twilio')(accountSid, authToken);

module.exports.shipAddressDetails = async function (data) {
    let con = await conn();
    let primary_address = data.primary_address;
    let user_id = data.user_id;
    if (primary_address == 1) {
        await con.query("UPDATE customer_address SET primary_address = '2' WHERE user_id =" + user_id);
        await con.query('INSERT INTO customer_address (user_id,address_name,street_name,postcode,phone_number,email,country_id,state_id,city_id, primary_address) VALUES ("' + data.user_id + '", "' + data.address_name + '", "' + data.street_name + '","' + data.postcode + '","' + data.phone_number + '","' + data.email + '","' + data.country_id + '","' + data.state_id + '","' + data.city_id + '", "1")');
    }
    if (primary_address == 2) {
        await con.query('INSERT INTO customer_address (user_id,address_name,street_name,postcode,phone_number,email,country_id,state_id,city_id, primary_address) VALUES ("' + data.user_id + '", "' + data.address_name + '", "' + data.street_name + '","' + data.postcode + '","' + data.phone_number + '","' + data.email + '","' + data.country_id + '","' + data.state_id + '","' + data.city_id + '", "2")');
    }
}

module.exports.getShipAddressDetailsById = async function (data) {
    let con = await conn();
    let result1 = await con.query('SELECT * FROM customer_address JOIN countries ON customer_address.country_id = countries.country_id JOIN states ON customer_address.state_id = states.state_id JOIN cities ON customer_address.city_id = cities.city_id WHERE customer_address.user_id = ' + data.user_id);
    return result1;
}


module.exports.deleteShipAddressDetails = async function (data) {
    let con = await conn();
    await con.query('DELETE FROM customer_address WHERE user_id = "' + data.user_id + '" ');
}

module.exports.getCountries = async function () {
    let con = await conn();
    return await con.query("SELECT * FROM countries ");
}

module.exports.getState = async function (data) {
    let con = await conn();
    return await con.query("SELECT * from states WHERE country_id=" + data.country_id);
}

module.exports.getCities = async function (data) {
    let con = await conn()
    return await con.query("SELECT * FROM cities WHERE state_id=" + data.state_id);
}

module.exports.shipmentFinalDetails = async function (data) {
    let arrFinal = [];
    let finalObj = {};
    let mainObj;
    let finalObjVal;
    let sum = 0;

    for (let ab = 0; ab < data.productoption.length; ab++) {
        const shipOpt = data.productoption[ab];
        let shipmentDetails = {
            "productId": shipOpt.productId,
            "country": data.country,
            "sendGoodsCountry": "CN",
            "currency": data.currency_code,
            "quantity": shipOpt.quantity
        }
        var url = 'https://api.aliseeks.com/v1/products/shipping'
        var options = {
            method: 'post',
            body: shipmentDetails,
            json: true,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'X-API-CLIENT-ID': 'BWGKXLCVMOJOSHKT'
            }
        }


        await request(options, async function (err, res, body) {
            if (err) {
                console.error('error posting json: ', err)
                throw err
            }
            else {
                finalObj = body
                let userObj = await finalObj.options[0];
                let updatedShippingPrice = await parseFloat(userObj.amount.value) + parseFloat(2.09)
                sum += updatedShippingPrice

                delete userObj.amount;
                let amount = { "currency": 'USD', "value": updatedShippingPrice };
                let productId = { "productId": shipOpt.productId }
                finalObjVal = { ...productId, ...userObj, amount }
                arrFinal.push(finalObjVal)
            }
        });

    }
    let totalamount = { "totalAmount": sum }
    arrFinal.push(totalamount);
    return await arrFinal
}



module.exports.finalCheckOut = async function (data) {
    let finalArr = [];
    let customer_id = data.user_id;
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let getTime = d.getTime();
    let con = await conn();
    let result1 = await con.query('INSERT INTO product_order_details (invoice_no,invoice_prefix,customer_id,customer_address_id,payment_provider_id,product_cnt, payment_method, shipping_carrier_company, shipping_amt, shipping_currency, commit_days, shipping_code, order_total_price, order_status_id, currency_code, payment_transaction_id, payment_type, payment_status) VALUES ("00' + getTime + '","inv/' + year + month + date + getTime + '","' + customer_id + '","' + data.customer_address_id + '","' + data.payment_provider_id + '","' + data.product_cnt + '", "' + data.payment_method + '","' + data.shipping_carrier_company + '","' + data.shipping_amt + '","' + data.shipping_currency + '","' + data.commit_days + '","' + data.shipping_code + '","' + data.order_total_price + '","1","' + data.currency_code + '","' + data.payment_transaction_id + '","' + data.payment_type + '","1")');


    for (let i = 0; i < data.cart_product_details.length; i++) {
        const element = data.cart_product_details[i];
        console.log(element, "sdgbdfxgh")
        let product_option = { "product_color": element.product_color, "product_size": element.product_size, "product_weight": element.product_weight, "product_height": element.product_height }

        let result2 = await con.query("INSERT INTO order_product_list (order_id,cart_id,product_id,product_opt_id,original_price,currency_code,discounted_price,total,tax,shipped_qty,shippment_status_id) VALUES ('" + result1.insertId + "','" + element.cart_id + "','" + element.product_id + "','" + JSON.stringify(product_option) + "','" + element.original_price + "','" + element.currency_code + "','" + element.discounted_price + "','" + element.total + "','" + element.tax + "','" + element.quantity + "','1')");

    }

    content3 = await con.query("SELECT sms_content FROM sms_content_details WHERE sms_alias ='ORD-CONFIRM'");
    
    let orderid= await con.query("SELECT order_id FROM product_order_details ORDER BY order_id DESC LIMIT 1" )
    console.log(orderid[0].order_id,'orederr');
    console.log(result1, "fcghnfgvbjnfgcbjn")
    let order =  orderid[0].order_id
    let order_id = { "order_id": result1.insertId }
   if(order_id){
        for(let i = 0;i<content3.length;i++){
            let element = content3[i].sms_content
            console.log(element,'sms')
            smsToSEND = element.replace("{#v1#}",order).replace("{#v2#}",data.product_cnt ).replace("{#v3#}",data.order_total_price);
        }
        client.messages
        .create({
            body: smsToSEND,
            from: '+12078057568',
            to: `${data.country_code}${data.phone_number}`
        })
        .then(message => console.log(message));
   }
    return order_id;

}


module.exports.UpdateCheckOut = async function (data) {
    let con = await conn();
    let result = await con.query("UPDATE product_order_details SET payment_transaction_id='" + data.payment_transaction_id + "', payment_type='" + data.payment_type + "', payment_status='" + data.payment_status + "', payment_method='" + data.payment_method + "' WHERE order_id=" + data.order_id)
    let result2 = await con.query("UPDATE order_product_list SET shippment_status_id='" + data.shippment_status_id + "' WHERE order_id=" + data.order_id)

    if (data.payment_status == 1) {
        await con.query("DELETE from cart_master WHERE user_id =" + data.user_id);
    }


}

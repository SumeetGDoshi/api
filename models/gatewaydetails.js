const express = require("express");
const conn = require("../database/connect");

module.exports.addCardDetails = async function(data) {
    let con = await conn();
    let is_primary;

    if (is_primary == 1) {
        let noOfRows = await con.query('SELECT user_id FROM customer_payment_preferences WHERE is_primary = "2"');
        if (noOfRows >= 1) {
            while (i < noOfRows) {
                await con.query("UPDATE customer_payment_preferences SET is_primary = '1'");
            }
            await con.query('INSERT INTO customer_payment_preferences (user_id,card_type,name_on_card,card_number,expiry_month,expiry_year,is_credit_debit,is_primary) VALUES ("' + data.user_id + '", "' + data.card_type + '", "' + data.name_on_card + '","' + data.card_number + '","' + data.expiry_month + '","' + data.expiry_year + '","'+data.is_credit_debit +'","1")');
        }
    } else {
        await con.query('INSERT INTO customer_payment_preferences (user_id,card_type,name_on_card,card_number,expiry_month,expiry_year,is_credit_debit,is_primary) VALUES ("' + data.user_id + '", "' + data.card_type + '", "' + data.name_on_card + '","' + data.card_number + '","' + data.expiry_month + '","' + data.expiry_year + '","'+data.is_credit_debit +'","2")');
    }
}

module.exports.getCardDetails = async function(data) {
    let con = await conn();
    return await con.query('SELECT * FROM customer_payment_preferences WHERE user_id = "' + data.user_id + '"  AND status_code = "1" ');
}

module.exports.deleteCardDetails = async function(data) {
    let con = await conn();
    await con.query('DELETE FROM customer_payment_preferences WHERE cust_pay_pref_id = "' + data.cust_pay_pref_id + '" ');
}
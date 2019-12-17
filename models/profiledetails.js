const express = require("express");
const conn = require("../database/connect");

module.exports.updateDetails = async function (data) {
    let con = await conn();
    await con.query("UPDATE registerdetails SET fullname = '"+ data.fullname +"', password = '"+ data.password +"' WHERE user_id ="+ data.user_id +";");                             
}

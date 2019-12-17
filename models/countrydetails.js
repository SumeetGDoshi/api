const express = require("express");
const conn = require("../database/connect");

module.exports.addCountryDetails = async function (data) {
    let con = await conn();
    await  con.query('INSERT INTO  country_countries_id (sortname,name,phonecode) VALUES ("'+ data.sortname +'", "'+ data.name +'", "'+ data.phonecode +'")');                             
}

module.exports.getAllDetails = async function () {
    let con = await conn();
    return await con.query('SELECT * FROM country_countries_id');           
  }
  
const express = require("express");
const conn = require("../database/connect");


//#### Local Services ####

module.exports.addLocalServiceDetails = async function (data) {
    console.log("hii2222");
    let con = await conn();
    await con.query('INSERT INTO services_detail(service_id,provider_id,category_id,service_name,address,latitude,longitude,pincode,cover_imagepath,description,availability_days,available_starttime,available_endtime,duration,currency_code, stream_rate_permin, status_code, created_date,created_by) VALUES("' + data.service_id + '","' + data.provider_id + '","' + data.category_id + '","' + data.service_name + '","' + data.address + '","' + data.latitude + '","' + data.longitude + '","' + data.pincode + '","' + data.cover_imagepath + '","' + data.description + '","' + data.availability_days + '","' + data.available_starttime + '","' + data.available_endtime + '","' + data.duration + '","' + data.currency_code + '","' + data.stream_rate_permin + '","' + data.status_code + '","' + data.created_date + '","' + data.created_by + '")');
}

module.exports.getLocalServiceDetails = async function () {
    let con = await conn();
    return await con.query('SELECT * FROM services_detail');
}


//#####  Live Services  #####

module.exports.addLiveServiceDetails = async function (data) {
    let con = await conn();
    await con.query('INSERT INTO services_detail(service_id,provider_id,category_id,service_name,address,latitude,longitude,pincode,cover_imagepath,description,availability_days,available_starttime,available_endtime,duration,currency_code, stream_rate_permin, status_code, created_date,created_by) VALUES("' + data.service_id + '","' + data.provider_id + '","' + data.category_id + '","' + data.service_name + '","' + data.address + '","' + data.latitude + '","' + data.longitude + '","' + data.pincode + '","' + data.cover_imagepath + '","' + data.description + '","' + data.availablity_days + '","' + data.available_starttime + '","' + data.available_endtime + '","' + data.duration + '","' + data.currency_code + '","' + data.stream_rate_permin + '","' + data.status_code + '","' + data.created_date + '","' + data.created_by + '")');
}

module.exports.getLiveServiceDetails = async function () {
    let con = await conn();
    return await con.query('SELECT * FROM services_detail');
}

module.exports.getLiveServiceDetailsById = async function (data) {
    let con = await conn();
    return await con.query("SELECT * FROM services_detail WHERE service_id = '" + data.service_id + "'  AND category_id= '" + data.category_id + "' ");
}


module.exports.addLiveServiceBooking = async function (data) {
    let con = await conn();
    await con.query('INSERT INTO  servicebooking (CreatedTime,DeleteStatus,ActiveStatus,PickServiceDate,PickServiceTime,Location,Latitude,Longitude,ServiceCharge,ServiceID,CLientID,Rating ) VALUES ("' + data.CreatedTime + '", "' + data.DeleteStatus + '","' + data.ActiveStatus + '","' + data.PickServiceDate + '", "' + data.PickServiceTime + '","' + data.Location + '","' + data.Latitude + '", "' + data.Longitude + '","' + data.ServiceCharge + '","' + data.ServiceID + '", "' + data.CLientID + '","' + data.Rating + '")');
}

module.exports.getAllLiveServiceBooking = async function () {
    let con = await conn();
    return await con.query('SELECT * FROM servicebooking WHERE ServiceID = "2"');
}



//#### Online Services #####


module.exports.addOnlineServiceDetails = async function (data) {
    let con = await conn();
    await con.query('INSERT INTO services_detail(service_id,provider_id,category_id,service_name,address,latitude,longitude,pincode,cover_imagepath,description,availability_days,available_starttime,available_endtime,duration,currency_code, stream_rate_permin, status_code, created_date,created_by) VALUES("' + data.service_id + '","' + data.provider_id + '","' + data.category_id + '","' + data.service_name + '","' + data.address + '","' + data.latitude + '","' + data.longitude + '","' + data.pincode + '","' + data.cover_imagepath + '","' + data.description + '","' + data.availablity_days + '","' + data.available_starttime + '","' + data.available_endtime + '","' + data.duration + '","' + data.currency_code + '","' + data.stream_rate_permin + '","' + data.status_code + '","' + data.created_date + '","' + data.created_by + '")');
}

module.exports.getOnlineServiceDetails = async function () {
    let con = await conn();
    return await con.query('SELECT * FROM services_detail');
}

module.exports.getOnlineServiceDetailsById = async function (data) {
    let con = await conn();
    return await con.query("SELECT * FROM services_detail WHERE service_id = '" + data.service_id + "'  AND category_id= '" + data.category_id + "' ");
}


module.exports.addOnlineServiceBooking = async function (data) {
    console.log("hii2222");
    let con = await conn();
    await con.query('INSERT INTO  servicebooking (CreatedTime,DeleteStatus,ActiveStatus,PickServiceDate,PickServiceTime,Location,Latitude,Longitude,ServiceCharge,ServiceID,CLientID,Rating ) VALUES ("' + data.CreatedTime + '", "' + data.DeleteStatus + '","' + data.ActiveStatus + '","' + data.PickServiceDate + '", "' + data.PickServiceTime + '","' + data.Location + '","' + data.Latitude + '", "' + data.Longitude + '","' + data.ServiceCharge + '","' + data.ServiceID + '", "' + data.CLientID + '","' + data.Rating + '")');
}

module.exports.getAllOnlineServiceBooking = async function () {
    let con = await conn();
    return await con.query('SELECT * FROM servicebooking WHERE ServiceID = "3"');
}


module.exports.getAllDetails = async function (data) {
    let con = await conn();
    let servicedetails = await con.query("SELECT sm.serviceId,sm.serviceName,cm.CategoryId,cm.ProviderCategoryId,cm.ServiceId,cm.Categoryname,cm.status FROM servicemaster AS sm JOIN skl_categorymaster AS cm ON sm.serviceId = cm.ServiceId WHERE sm.Status='1' AND cm.status='1' AND cm.ParentId='0' ORDER BY sm.serviceId,sm.SortOrder,cm.SortOrder");
    if (data.ServiceId) {
        return await con.query("SELECT sm.serviceId,sm.serviceName,cm.ParentId,cm.CategoryId,cm.ProviderCategoryId,cm.ServiceId,cm.Categoryname,cm.status FROM servicemaster AS sm JOIN skl_categorymaster AS cm ON sm.serviceId = cm.ServiceId WHERE sm.Status='1' AND cm.status ='1' AND cm.ParentId='" + data.ParentId + "' AND cm.ServiceId = '" + data.ServiceId + "' ORDER BY sm.serviceId,sm.SortOrder,cm.SortOrder");
    } else {
        return servicedetails;
    }
}

module.exports.addServiceList = async function () {
    let con = await conn();
    await con.query('INSERT INTO servicebooking')
}
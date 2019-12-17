const express = require("express");
const conn = require("../database/connect");


//#### Local Services ####


module.exports.getLocalServiceDetails = async function () {
    let con = await conn();
    return await con.query('SELECT sl.*,vm.vendor_name as `seller_name`,vm.vendor_logo as `seller_profile_pic` FROM `services_listing` sl left join vendor_master vm on sl.provider_id = vm.vendor_id WHERE sl.category_id IN (SELECT provider_category_id FROM category_master WHERE service_id="3" ORDER BY provider_category_id)');

}

module.exports.getLocalServiceDetailsById = async function (data) {
    let con = await conn();
        return await con.query("SELECT sl.*,vm.vendor_name as 'seller_name',vm.vendor_logo as 'seller_profile_pic' FROM `services_listing` sl left join vendor_master vm on sl.provider_id = vm.vendor_id WHERE sl.service_list_id = '" + data.service_list_id + "'");
}

module.exports.getLocalServiceDetailsByPincode = async function (data) {
    let con = await conn();
    return await con.query("SELECT * FROM services_listing WHERE serving_areas_pincode like '%" + data.serving_areas_pincode + "%' ");
}


module.exports.getServiceCategoryList = async function (data) {
    let con = await conn();
    return await con.query("SELECT service_id,category_name FROM `category_master` WHERE service_id='3' AND parent_id='0'");
}

module.exports.addLocalServiceBooking = async function (data) {
    let con = await conn();
    await con.query('INSERT INTO  service_booking_details (service_det_id , buyer_id , invoice_no, invoice_prefix , customer_address_id, service_total_price, currency_code,tax_rate,tax_rate_type,payment_provider_id, payment_method, payment_transaction_id, payment_type, payment_status , package_id, service_status, completion_status , requested_date , requested_day, requested_start_time ,  created_date, modified_date ) VALUES ("' + data.service_det_id + '", "' + data.buyer_id + '","' + data.invoice_no + '","' + data.invoice_prefix + '", "' + data.customer_address_id + '","' + data.service_total_price + '","' + data.currency_code + '","' + data.tax_rate + '","' + data.tax_rate_type + '", "' + data.payment_provider_id + '","' + data.payment_method + '","' + data.payment_transaction_id + '", "' + data.payment_type + '","' + data.payment_status + '","' + data.package_id + '", "' + data.service_status + '","' + data.completion_status + '","' + data.requested_date + '", "' + data.requested_day + '","' + data.requested_start_time + '","' + data.created_date + '","' + data.modified_date + '")');
}

module.exports.getAllLocalServiceBooking = async function () {
    let con = await conn();
    return await con.query('SELECT * FROM service_booking_details WHERE service_det_id = "3"');
}

module.exports.getLocalServiceBookingSchedule = async function (data) {
    let con = await conn();
    return await con.query("SELECT * FROM service_booking_details WHERE requested_start_time = '" + data.requested_start_time + "' AND service_det_id = '" + data.service_det_id + "'AND requested_date= '" + data.requested_date + "'");
}


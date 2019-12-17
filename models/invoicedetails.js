const express = require("express");
const request = require("request-promise")
const conn = require("../database/connect");
const config = require("../config/config");
const dateFormat = require('dateformat');
module.exports.invoiceDetail = async function (data,error) {
    let productId;
    let resData;
    let productFinalData;
    let FinalArr = [];
    let FinalArr2=[];
    let prodImage;
    let prodTitle;
    let element;
    let con = await conn();
    if(error){
        console.log('error',error);
        res.json({"error":error})
    }else{
        let result1 = await con.query('SELECT DATE_ADD(product_order_details.date_added,INTERVAL product_order_details.commit_days DAY) AS scheduled_Delivery_Date,product_order_details.invoice_no,product_order_details.invoice_prefix,order_product_list.product_id,order_product_list.shippment_status_id, order_product_list.total, product_order_details.payment_transaction_id, order_product_list.currency_code, order_product_list.shipped_qty, order_product_list.product_opt_id AS Products_Attributes,product_order_details.date_added AS Purchase_Date FROM product_order_details JOIN order_product_list ON product_order_details.order_id = order_product_list.order_id WHERE product_order_details.customer_id=' + data.user_id);
    
    for (let i = 0; i < result1.length; i++) {
        const invoiceData = result1[i];
        console.log(invoiceData.product_id, "asvcsdvsdv")
        productId = invoiceData.product_id;
        let myDate =  dateFormat(invoiceData.scheduled_Delivery_Date,'yyyy-mm-dd');
        let currentDate = dateFormat(invoiceData.Purchase_Date,'yyyy-mm-dd');
        let option_prod=JSON.parse(invoiceData.Products_Attributes)
        const options = {
            url: config.GET_PRODUCT_DETAIL + productId,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
            json: true
        };
        await request(options, async function (err, res, body) {
            if (err) {
                console.error('error posting json: ', err)
                throw err
            } else {
                finalObj = await body.data
                for (let ab = 0; ab < finalObj.length; ab++) {
                    resData = await finalObj[ab];
                    productFinalData = { 
                        "productImages": resData.productImages,
                        "title": resData.title,
                        "Products_Attributes":option_prod,
                        "scheduled_Delivery_Date": myDate,
                        "Purchase_Date": currentDate
                    }  
                    productImage = productFinalData.productImages;
                    productTitle = productFinalData.title;
                }            
                FinalArr.push({productFinalData});
            }
        });

    }
  
    let helloData;
         let hello = result1;
        for(let j=0;j<hello.length;j++){
            helloData = await hello[j];
            FinalArr2.push(Object.assign(helloData,FinalArr[j].productFinalData));
        }
       
        console.log('mojo jojo',FinalArr2);
    return await FinalArr2;
    }

}    
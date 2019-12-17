const express = require("express");
const conn = require("../database/connect");

function channelId(len, an){
    an = an&&an.toLowerCase();
    var str="", i=0, min=an=="a"?10:0, max=an=="n"?10:62;
    for(;i++<len;){
      var r = Math.random()*(max-min)+min <<0;
      str += String.fromCharCode(r+=r>9?r<36?55:61:48);
    }
    return str;
}


module.exports.createLiveStream = async function (data) {

 let channel_id = channelId(20);
    console.log("channel_id", channel_id);

    let con = await conn();
    let stream_as = data.stream_as;
    let store_id = data.store_id;
    let result; 

 

    if (stream_as == 1) {
        result = await con.query('INSERT INTO live_stream_details (stream_title,location,stream_description,cover_image_path,stream_as,status_code,channel_id,created_date,created_by) VALUES ("' + data.stream_title + '", "' + data.location + '", "' + data.stream_description + '","' + data.cover_image_path + '","' + data.stream_as + '","' + data.status_code + '","' + channel_id + '","' + data.created_date + '","' + data.created_by + '")');
    } else if (stream_as == 2 && store_id != "") {
       result = await con.query('INSERT INTO live_stream_details (stream_title,location,stream_description,cover_image_path,stream_as,store_id,status_code,channel_id,created_date,created_by) VALUES ("' + data.stream_title + '", "' + data.location + '", "' + data.stream_description + '","' + data.cover_image_path + '","' + data.stream_as + '","' + data.store_id + '","' + channel_id + '","' + data.status_code + '","' + data.created_date + '","' + data.created_by + '")');
    }
    console.log(result.insertId);
}


module.exports.updateLiveStream = async function (data) {
    let channel_id = channelId(20);
    console.log("channel_id", channel_id);

    let con = await conn();
    let flag = data.flag;
    let liveStreamId = data.liveStreamId;
    let result;

    if (flag == 1 && liveStreamId != "") {
        result = await con.query('UPDATE live_stream_details SET status_code = "1" , stream_start_date = NOW() WHERE channel_id= "' + channel_id + '" AND  live_stream_id = "' + liveStreamId + '"');

    } else if (flag == 2 && liveStreamId != "") {
        result = await con.query('UPDATE live_stream_details SET status_code = "2" , stream_end_date = NOW() WHERE channel_id= "' + channel_id + '" AND live_stream_id = "'+liveStreamId+'"');
    }
    console.log(result);
}


const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const constants = require('../constants/constants')
const config = require('../config/config')
const request = require('request')



module.exports.VerifyToken = (req, res, next) => {

    // //  get the token from the request
    let Bearer = null
    if (req.headers['authorization']) Bearer = req.headers['authorization'].split(' ')[1]
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || Bearer
    resultDetails = req.body
    // //  check token from session and the one provided
    // //  if token exists, verify the same
    // //  console.log(req.headers)
    let _sessionTokenValid = true
    if (token) {
        //     // check if token is in the db
        //     // call a service from pnc-security

        let headers = {
            'Origin': 'http://localhost:3000',
            'x-access-token': token,
        }
        request.post({ headers: headers, url: "http://ec2-13-57-231-82.us-west-1.compute.amazonaws.com:3011/secureuser/signin" }, function done(err, httpResponse, body) {
            //       console.log(httpResponse, 'httpResponse');

            if (err) {
                //  console.error('failed:', err)
                // return handleError(err, req, res, next)
                return res.status(constants.HTTP_401).json({ 'error': true, 'message': constants.INVALID_SESSION })
            }
            if (httpResponse.statusCode != 200) {
                return res.status(constants.HTTP_401).json({ 'error': true, 'message': constants.INVALID_SESSION })
            }
            if (req.session) {
                token != req.session.token ? _sessionTokenValid = true : _sessionTokenValid = true
            }
            if (!_sessionTokenValid) {
                return res.status(constants.HTTP_401).json({ 'error': true, 'message': constants.INVALID_SESSION })
            }
            let buff = new Buffer('SuperSecRetKey')
            let base64data = buff.toString('base64')
            jwt.verify(token, 'SuperSecRetKey', function (err, authData) {
                if (err) {
                    return res.status(constants.HTTP_401).json({ 'error': true, 'message': constants.INVALID_SESSION })
                }
                //    req.decoded = decoded
                //  set session
                //     req.session.user = decoded.id
                //  set the request as authenticated
                req.isAuthenticated = true
                // go to the next middleware
                next()
            })
        });
    } else {
        return res.status(constants.HTTP_403).json({ 'error': true, 'message': constants.MISSING_TOKEN })
    }

}

// module.exports.cacheBuster = (req, res, next) => {
//     res.setHeader('Last-Modified', (new Date()).toUTCString())
//     req.session.hits++
//     next()
// }
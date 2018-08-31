const {City} = require("../models/city");
const jwt = require("jsonwebtoken");
const { dispatchError } = require("./errors");
const { User } = require("../models/user");
const { secretKey } = require("../secretKey");
const { LOGIN } = require("../constants/errors");
const axios = require('axios');

function createAndSendToken(req,res,next){
    jwt.sign({ data: req.admin }, secretKey,{ expiresIn: "30 days" }, (err, token) => {
        res.json({
            token,
            user: { username: req.admin.username }
        })
    })
}

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader){
        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, secretKey, (err, authData) => {
            if(err) {
                dispatchError(res,next,LOGIN.UNAUTHORIZED, 403);
            } else {
                let { data: {  _id }} = authData;
                User.findById(_id, (err, res) =>  {
                    req.user = res;
                    next();
                });

            }
        })
    } else {
        dispatchError(res,next,LOGIN.UNAUTHORIZED, 403);
    }
}


function verifyTokenLDAP(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader) {
        const token = bearerHeader.split(' ')[1];
        axios.post("http://localhost:3002/api/account/verifyToken",{token})
            .then((res) => {
                User.findOne({username: res.data.username})
                    .populate({
                        path: "city",
                        select: "name"
                    })
                    .lean()
                    .then((resUser) => {
                        if(resUser) req.user = resUser;
                        else req.user = res.data;
                        next();
                    });
            })
            .catch(() => {
                dispatchError(res,next,LOGIN.UNAUTHORIZED, 401);
            });
    } else {
        dispatchError(res,next,LOGIN.UNAUTHORIZED, 401);
    }
}


function checkUserInDB(req, res, next){
    User.findOne({username: req.user.username}, (err, result) =>  {
        if(!result){
            let { username, firstname, lastname, location } = req.user;
            City.findOne({name: location})
                .lean()
                .then((resCity) => {
                    User.createUser({ username, lastname, firstname, city: resCity._id })
                        .then(() => {
                            res.sendStatus(200);
                        })
                        .catch(() => {
                            dispatchError(res,next,LOGIN.INCORRECT_DATA_FOR_LOGIN, 403);
                        });
                });
        }else{
            res.sendStatus(200);
        }
    });
}

module.exports.createAndSendToken = createAndSendToken;
module.exports.verifyToken = verifyToken;
module.exports.verifyTokenLDAP = verifyTokenLDAP;
module.exports.checkUserInDB = checkUserInDB;
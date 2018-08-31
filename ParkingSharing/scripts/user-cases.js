const { ENUM_USER_PLACE_STATES } = require("../constants/db");
const { checkArrayOnFalse } = require("./utils");
const { Place }  = require("../models/place");

const { dispatchError } = require("./errors");
const { FreeDate } = require("../models/free-date");
const { User } = require("../models/user");
const { UserPlace } = require("../models/user-place");
const { COMMON } = require("../constants/errors");


function getMyPlace(req, res, next){
    res.data = req.user;
    User.findOne({username: req.user.username})
        .then((resUser) => {
            UserPlace.findOne({idUser: resUser._id, relation: ENUM_USER_PLACE_STATES.TAKEN })
                .populate({
                    path: "idPlace",
                    populate: { path: 'location', select: "name" }
                })
                .lean()
                .then((resPlace) => {
                    res.place = resPlace.idPlace;
                    res.data = resPlace.idPlace;
                    next();
                })
                .catch(() => {dispatchError(res,next,COMMON.INCORRECT_DATA, 403);});
        })
        .catch(() => {dispatchError(res,next,COMMON.INCORRECT_DATA, 403);});

}


function getFreeDays(req, res, next) {
    let place = res.place;
    Promise.all([
        FreeDate.find({id_place: place._id, owner: null}),
        FreeDate.find({id_place: place._id, owner: { $ne: null } })
    ])
        .then((results) => {
            let free = results[0].map(value => value.date);
            let borrow = results[1].map(value => value.date);
            res.data.free = free;
            res.data.borrow = borrow;
            next();
        })
        .catch((err) => {
            console.log(err);
        })
}

function requestHandlerForTakePlace(req, res, next){
    let { username, idPlace } = req.body;
    Promise.all([
        User.findOne({username}).lean(),
        Place.findById(idPlace).lean()
    ])
        .then((results) => {
            if(!checkArrayOnFalse(results)) return;
            let user = results[0];
            let place = results[1];

            UserPlace.createUserPlace({
                    idUser: user._id,
                    idPlace: place._id,
                    relation: ENUM_USER_PLACE_STATES.REQUESTING
                })
                .then(() => {
                    req.statusCode = 200;
                    next();
                })
                .catch(() => {
                    dispatchError(res,next, COMMON.INCORRECT_DATA, 403);
                });

        })
        .catch((err) => {console.log(err)});
}


function requestHandlerForRejectPlace(req, res, next){
    let { username, idPlace } = req.body;
    Promise.all([
        User.findOne({username}).lean(),
        Place.findById(idPlace).lean()
    ])
        .then((results) => {
            if(!checkArrayOnFalse(results)) return;
            let user = results[0];
            let place = results[1];

            UserPlace.findOne({
                idUser: user._id,
                idPlace: place._id,
                relation: ENUM_USER_PLACE_STATES.REQUESTING
            })
                .then((resUserPlace) => {
                    resUserPlace.remove();
                    req.statusCode = 200;
                    next();
                })
                .catch((err) => {
                    console.log(err);
                    dispatchError(res,next, COMMON.INCORRECT_DATA, 403);
                });

        })
        .catch((err) => {console.log(err)});
}


function requestHandlerForLeavePlace(req, res, next){
    let { username, idPlace } = req.body;
    Promise.all([
        User.findOne({username}).lean(),
        Place.findById(idPlace).lean()
    ])
        .then((results) => {
            if(!checkArrayOnFalse(results)) return;
            let user = results[0];
            let place = results[1];

            UserPlace.findOne({
                idUser: user._id,
                idPlace: place._id,
                relation: ENUM_USER_PLACE_STATES.TAKEN
            })
                .then((resUserPlace) => {
                    resUserPlace.relation = ENUM_USER_PLACE_STATES.CANCELING
                    resUserPlace.save();
                    req.statusCode = 200;
                    next();
                })
                .catch(() => {
                    dispatchError(res,next, COMMON.INCORRECT_DATA, 403);
                });

        })
        .catch((err) => {console.log(err)});
}


function requestHandlerForCancelLeavePlace(req, res, next){
    let { username, idPlace } = req.body;
    Promise.all([
        User.findOne({username}).lean(),
        Place.findById(idPlace).lean()
    ])
        .then((results) => {
            if(!checkArrayOnFalse(results)) return;
            let user = results[0];
            let place = results[1];

            UserPlace.findOne({
                idUser: user._id,
                idPlace: place._id,
                relation: ENUM_USER_PLACE_STATES.CANCELING
            })
                .then((resUserPlace) => {
                    resUserPlace.relation = ENUM_USER_PLACE_STATES.TAKEN;
                    resUserPlace.save();
                    req.statusCode = 200;
                    next();
                })
                .catch((err) => {
                    console.log(err);
                    dispatchError(res,next, COMMON.INCORRECT_DATA, 403);
                });

        })
        .catch((err) => {console.log(err)});
}

module.exports.getFreeDays = getFreeDays;
module.exports.getMyPlace = getMyPlace;
module.exports.requestHandlerForTakePlace = requestHandlerForTakePlace;
module.exports.requestHandlerForRejectPlace = requestHandlerForRejectPlace;
module.exports.requestHandlerForCancelLeavePlace = requestHandlerForCancelLeavePlace;
module.exports.requestHandlerForLeavePlace = requestHandlerForLeavePlace;
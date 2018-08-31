const {ENUM_USER_PLACE_STATES} = require("../../constants/db");
const {MODEL_NAMES} = require("../../constants/db");
const {dispatchError} = require("../errors");
const { COMMON } = require("../../constants/errors");
const { UserPlace } = require("../../models/user-place");

function isAdmin(req, res, next) {
    if (req.user.isAdmin) next();
    else dispatchError(res,next,COMMON.NO_ACCESS_ALLOW, 403);
}

function takeRequestByRelation(relation, res) {
    UserPlace.find({relation: relation})
        .populate({
            path: "idUser",
            select: "firstname lastname username"
        })
        .populate({
            path: "idPlace",
            select: "number location",
            populate: {
                path: 'location'
            }
        })
        .lean()
        .then((result) => {
            res.send(result.map((request) => {
                return {
                    location: request.idPlace.location,
                    _id: request._id,
                    firstname: request.idUser.firstname,
                    lastname: request.idUser.lastname,
                    username: request.idUser.username,
                    number: request.idPlace.number
                }
            }))
        });
}


function getRequestsForTaking(req, res, next) {
    takeRequestByRelation("requesting", res);
}

function getRequestsForLeaving(req, res, next) {
    takeRequestByRelation("canceling", res);
}


function acceptRequestForTaking(req, res, next) {
    UserPlace.findById(req.body.id)
        .then((result) => {
            result.relation = ENUM_USER_PLACE_STATES.TAKEN;
            result.save();
            res.sendStatus(200);
        })
        .catch((err) => {console.log(err); res.sendStatus(403)});
}

function rejectRequestForTaking(req, res, next) {
    UserPlace.findById(req.body.id)
        .then((result) => {
            result.remove();
            res.sendStatus(200);
        })
        .catch((err) => {console.log(err); res.sendStatus(403)});
}




module.exports.acceptRequestForTaking = acceptRequestForTaking;
module.exports.getRequestsForTaking = getRequestsForTaking;
module.exports.rejectRequestForTaking = rejectRequestForTaking;

module.exports.acceptRequestForLeaving = rejectRequestForTaking;
module.exports.getRequestsForLeaving = getRequestsForLeaving;
module.exports.rejectRequestForLeaving = acceptRequestForTaking;

module.exports.isAdmin = isAdmin;
const { finishSendStatus } = require("./common");
const { consoleLogErrorHandler } = require("../errors");
const { COMMON } = require("../../constants/errors");
const { dispatchError } = require("../errors");
const { arrayMax } = require("../utils");
const { City } = require("../../models/city");
const { Location } = require("../../models/location");
const { Place } = require("../../models/place");
const { User } = require("../../models/user");
const { UserPlace } = require("../../models/user-place");
const mongoose = require("mongoose");
const {mergeUserPlacesAndPlaces} = require("../utils");

function addPlace(req, res, next){

    let { idLocation } = req.body;

    Place.find({location: idLocation})
        .then((allPlaces) => {

            Location.findById(idLocation)
                .then((resLoc) => {

                    Place.createPlace({
                        idLocation: resLoc._id,
                        number: arrayMax(allPlaces)

                    }).then(() => {
                        res.statusCode = 200;
                        next();
                    }).catch((err) => {
                        consoleLogErrorHandler(err);
                        dispatchError(res,next,COMMON.DB_SAVE_ERROR, 403);
                    })

                })
                .catch((err)=>{
                    consoleLogErrorHandler(err);
                    dispatchError(res,next,COMMON.INCORRECT_DATA, 403);
                })

        })
        .catch((err)=>{
            consoleLogErrorHandler(err);
            dispatchError(res,next,COMMON.INCORRECT_DATA, 403);
        })

}


function addLocation(req, res, next){
    let { city, name } = req.body;
    City.findOne({name: city})
        .then((resCity) => {
            Location.createLocation({
                name,
                cityId: resCity._id
            }).then(() => {
                res.statusCode = 200;
                next();
            }).catch((err) => {
                consoleLogErrorHandler(err);
                dispatchError(res,next,COMMON.DB_SAVE_ERROR, 403);
            })
        })
        .catch((err)=>{
            consoleLogErrorHandler(err);
            dispatchError(res,next,COMMON.INCORRECT_DATA, 403);
        })

}



function addCity(req, res, next){
    let { name } = req.body;
    City.createCity({name})
        .then(()=>{
            res.statusCode = 200;
            next();
        })
        .catch((err)=>{
            consoleLogErrorHandler(err);
            dispatchError(res,next,COMMON.INCORRECT_DATA, 403);
        })

}

function getPlaces(req, res, next){
    let {idLocation} = req.query;
    Promise.all([
        Location.findById(idLocation).lean(),
        Place.find({location:idLocation}, "number owner location")
            .lean()
    ])
    .then((results) => {
        let places = results[1];
        UserPlace.find({
            'idPlace': { $in: places.map((value) => {return value._id}) }
        })
        .populate({
            path: "idUser",
            select: "firstname lastname username"
        })
        .lean()
        .then((userPlaces) => {
            let changedPlaces = mergeUserPlacesAndPlaces(userPlaces,places, req.user);
            let result = results[0];
            result.places = changedPlaces;
            res.data = result;
            //console.log(res.data.places);
            next();
        });
    })
    .catch((err)=>{
        consoleLogErrorHandler(err);
        dispatchError(res,next,COMMON.INCORRECT_DATA, 403);
    })
}


function getLocations(req,res,next){
    City.findOne({name: req.query.city})
        .lean()
        .then((resCity) => {
            Location.find({
                city: resCity._id
            }, "name")
            .lean()
            .then((resLocations) => {
                res.data = resCity;
                res.data.locations = resLocations;
                next();
            })
            .catch((err)=>{
                consoleLogErrorHandler(err);
                dispatchError(res,next,COMMON.INCORRECT_DATA, 403);
            })
    })

}


function getCities(req,res,next) {
    City.find({}, "name")
        .then((result)=>{
            res.data = result;
            next();
        })
        .catch((err)=>{
            consoleLogErrorHandler(err);
            dispatchError(res,next,COMMON.INCORRECT_DATA, 403);
        })

}

module.exports = {
    addPlace,
    addLocation,
    addCity,
    getPlaces,
    getLocations,
    getCities
}
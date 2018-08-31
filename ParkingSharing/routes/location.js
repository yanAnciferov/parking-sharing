const express = require('express');
const {verifyUser} = require("../scripts/login");
const {verifyTokenLDAP, checkUserInDB} = require("../scripts/token");
const {API_METHOD_PATHS} = require("../constants/apiUrl");
const {finishSend} = require("../scripts/middlewares/common");
const {finishSendStatus} = require("../scripts/middlewares/common");
const {getCities} = require("../scripts/middlewares/location");
const {getLocations} = require("../scripts/middlewares/location");
const {getPlaces} = require("../scripts/middlewares/location");
const {addCity} = require("../scripts/middlewares/location");
const {addLocation} = require("../scripts/middlewares/location");
const {addPlace} = require("../scripts/middlewares/location");
const {simpleErrorHandler} = require("../scripts/errors");
const router = express.Router();

router.get(API_METHOD_PATHS.GET_CITIES, [verifyTokenLDAP, getCities, finishSend])
    .use(simpleErrorHandler);

router.get(API_METHOD_PATHS.GET_LOCATIONS, [verifyTokenLDAP, getLocations,finishSend])
    .use(simpleErrorHandler);

router.get(API_METHOD_PATHS.GET_PLACES, [verifyTokenLDAP, getPlaces, finishSend])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.ADD_CITY, [verifyTokenLDAP,addCity, finishSendStatus])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.ADD_LOCATION, [verifyTokenLDAP,addLocation, finishSendStatus])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.ADD_PLACE, [verifyTokenLDAP,addPlace, finishSendStatus])
    .use(simpleErrorHandler);

module.exports = router;

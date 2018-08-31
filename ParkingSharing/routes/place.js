const express = require('express');
const {getMyPlace, getFreeDays} = require("../scripts/user-cases");
const {requestHandlerForTakePlace, requestHandlerForRejectPlace, requestHandlerForCancelLeavePlace, requestHandlerForLeavePlace} = require("../scripts/user-cases");
const {verifyTokenLDAP} = require("../scripts/token");
const {API_METHOD_PATHS} = require("../constants/apiUrl");
const {finishSendStatus, finishSend} = require("../scripts/middlewares/common");
const {addPlace} = require("../scripts/middlewares/location");
const {simpleErrorHandler} = require("../scripts/errors");
const router = express.Router();

router.post(API_METHOD_PATHS.ADD_PLACE, [verifyTokenLDAP,addPlace, finishSendStatus])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.REQUEST_FOR_TAKING_PLACE, [verifyTokenLDAP, requestHandlerForTakePlace, finishSendStatus])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.REQUEST_FOR_REJECT_PLACE, [verifyTokenLDAP, requestHandlerForRejectPlace, finishSendStatus])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.REQUEST_FOR_LEAVE_PLACE, [verifyTokenLDAP, requestHandlerForLeavePlace, finishSendStatus])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.REQUEST_FOR_CANCEL_LEAVE_PLACE, [verifyTokenLDAP, requestHandlerForCancelLeavePlace, finishSendStatus])
    .use(simpleErrorHandler);

router.get(API_METHOD_PATHS.GET_MY_PLACE, [verifyTokenLDAP, getMyPlace, getFreeDays, finishSend])
    .use(simpleErrorHandler);

module.exports = router;

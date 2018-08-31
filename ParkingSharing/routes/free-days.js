const {addFreeDate, rejectFreeDate, groupDays} = require("../scripts/middlewares/free-days");
const express = require('express');
const {verifyTokenLDAP} = require("../scripts/token");
const {API_METHOD_PATHS} = require("../constants/apiUrl");
const {finishSendStatus, finishSend} = require("../scripts/middlewares/common");
const {simpleErrorHandler} = require("../scripts/errors");
const router = express.Router();

router.post(API_METHOD_PATHS.ADD, [verifyTokenLDAP, groupDays, addFreeDate, finishSend])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.REJECT, [verifyTokenLDAP, groupDays, rejectFreeDate, finishSend])
    .use(simpleErrorHandler);


module.exports = router;

const express = require('express');
const {checkUserInDB} = require("../scripts/token");
const {verifyTokenLDAP} = require("../scripts/token");
const { finishSend } = require("../scripts/middlewares/common");
const {API_METHOD_PATHS} = require("../constants/apiUrl");
const simpleErrorHandler = require("../scripts/errors").simpleErrorHandler;
const router = express.Router();
const { getAuthUserData } = require("../scripts/login");
const { getMyPlace,} = require("../scripts/user-cases");


router.post(API_METHOD_PATHS.LOGIN, [verifyTokenLDAP, checkUserInDB])
    .use(simpleErrorHandler);

router.get(API_METHOD_PATHS.GET_AUTH_USER_DATA, [verifyTokenLDAP, getAuthUserData, finishSend])
    .use(simpleErrorHandler);

module.exports = router;

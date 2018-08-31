const {
    getRequestsForTaking,
    isAdmin,
    acceptRequestForTaking,
    rejectRequestForTaking,
    getRequestsForLeaving,
    acceptRequestForLeaving,
    rejectRequestForLeaving
} = require("../scripts/middlewares/admin");
const express = require('express');
const {verifyTokenLDAP} = require("../scripts/token");
const {API_METHOD_PATHS} = require("../constants/apiUrl");
const simpleErrorHandler = require("../scripts/errors").simpleErrorHandler;
const router = express.Router();


router.get(API_METHOD_PATHS.GET_REQUEST_FOR_TAKING, [verifyTokenLDAP, isAdmin, getRequestsForTaking])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.ACCEPT_REQUESTS_FOR_TAKING, [verifyTokenLDAP, isAdmin, acceptRequestForTaking])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.REJECT_REQUESTS_FOR_TAKING, [verifyTokenLDAP, isAdmin, rejectRequestForTaking])
    .use(simpleErrorHandler);



router.get(API_METHOD_PATHS.GET_REQUEST_FOR_LEAVING, [verifyTokenLDAP, isAdmin, getRequestsForLeaving])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.ACCEPT_REQUESTS_FOR_LEAVING, [verifyTokenLDAP, isAdmin, acceptRequestForLeaving])
    .use(simpleErrorHandler);

router.post(API_METHOD_PATHS.REJECT_REQUESTS_FOR_LEAVING, [verifyTokenLDAP, isAdmin, rejectRequestForLeaving])
    .use(simpleErrorHandler);

module.exports = router;

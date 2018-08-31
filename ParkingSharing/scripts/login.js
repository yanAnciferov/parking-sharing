

function getAuthUserData(req,res,next) {
    res.data = req.user;
    next();
}

function verifyUser(req, res, next) {
    if(req.user.username === req.body.username) next();
    else {
        req.sendStatus(401);
    }
}

module.exports.getAuthUserData = getAuthUserData;
module.exports.verifyUser = verifyUser;
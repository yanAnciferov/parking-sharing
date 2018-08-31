function finishSend(req,res,next){
    res.send(res.data);
}

function finishSendStatus(req,res,next){
    res.sendStatus(res.statusCode);
}

module.exports.finishSend = finishSend;
module.exports.finishSendStatus = finishSendStatus;
const {FreeDate} = require("../../models/free-date");

function addFreeDate(req,res,next) {
    let idPlace = req.body.idPlace;
    FreeDate.createMany(res.days.simple,idPlace)
        .then(()=>{
            res.days.free = res.days.simple;
            res.days.simple = [];
            console.log(res.days);
            res.send(res.days);
        })
        .catch((err)=>{console.log(err)});
}

function rejectFreeDate(req,res,next) {

}

function groupDays(req,res,next){
    let dates = toDateWithOutTime(req.body.date);
    let idPlace = req.body.idPlace;
    FreeDate.find({id_place: idPlace, date: { $in: dates }})
        .then((result)=>{
            let free = [];
            let borrow = [];

            result.forEach((freeDate) => {
                if(freeDate.id_occupant !== null){
                    borrow.push(freeDate.date);
                }else free.push(freeDate.date);
                dates.splice(dates.findIndex((date)=>{return date === freeDate.date;}),1);
            });
            res.days = {
                free,
                borrow,
                simple: dates
            };
            next();

        });
}

function toDateWithOutTime(date){
    return date.map((value) => {
        let date = new Date(value);
        date.setHours(0,0,0,0);
        return date;
    });
}

module.exports.groupDays = groupDays;
module.exports.addFreeDate = addFreeDate;
module.exports.rejectFreeDate = rejectFreeDate;
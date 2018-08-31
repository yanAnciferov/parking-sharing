const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MODEL_NAMES } = require('../constants/db.js');

const  freeDateScheme = new Schema({
    date: { type: Date, required: true },
    id_place: { type: mongoose.Schema.ObjectId, required: true, ref: MODEL_NAMES.PLACE },
    id_occupant: { type:  mongoose.Schema.ObjectId, required: false, default: null, ref: MODEL_NAMES.USER }
});


freeDateScheme.statics = {
    createFreeDate(freeDate){
        let FreeDate = this;
        let forNewFreeDate = {
            date: freeDate.date,
            id_place: freeDate.id_place
        };
        let newFreeDate = new FreeDate(forNewFreeDate);

        return newFreeDate.save();
    },

    createMany(dates, id_place) {
        let FreeDate = this;
        return FreeDate.insertMany(dates.map((date)=>{
            return {
                date,
                id_place
            }
        }));
    }
};

freeDateScheme.index({date: 1, id_place: 1}, {unique: true});

exports.FreeDate = mongoose.model(MODEL_NAMES.FREE_DATE, freeDateScheme);
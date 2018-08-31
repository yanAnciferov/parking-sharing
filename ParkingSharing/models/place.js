const mongoose = require('mongoose');
const {ENUM_PLACE_TYPES} = require("../constants/db");
const Schema = mongoose.Schema;
const { MODEL_NAMES } = require('../constants/db.js');

const  placeScheme = new Schema({
    number: { type: Number, required: true },
    location: { type: Schema.Types.ObjectId, required: true, ref: MODEL_NAMES.LOCATION },
    type: {
        type: String,
        required: true,
        enum : Object.values(ENUM_PLACE_TYPES)
    }
});




placeScheme.statics = {
    createPlace(place){
        let Place = this;
        let forNewPlace = {
            number: place.number,
            location: place.idLocation
        };
        let newPlace = new Place(forNewPlace);

        return newPlace.save();
    }
};


exports.Place = mongoose.model(MODEL_NAMES.PLACE, placeScheme);
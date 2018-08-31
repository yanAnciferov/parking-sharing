const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MODEL_NAMES } = require('../constants/db.js')

const requestScheme = new Schema({
    idPlace:  { type: Schema.ObjectId, required: true, ref: MODEL_NAMES.PLACE },
    idUser:  { type: Schema.ObjectId, required: true, ref: MODEL_NAMES.USER }
});

requestScheme.statics = {
    createRequest(request){
        let PlaceRequest = this;
        console.log(request);
        let forNewPlaceRequest = {
            idPlace: request.idPlace,
            idUser: request.idUser
        };
        let newPlaceRequest = new PlaceRequest(forNewPlaceRequest);

        return newPlaceRequest.save();
    }
};

exports.PlaceRequest = mongoose.model(MODEL_NAMES.PLACE_REQUEST, requestScheme);
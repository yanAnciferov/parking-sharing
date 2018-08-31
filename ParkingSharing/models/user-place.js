const mongoose = require('mongoose');
const {ENUM_USER_PLACE_STATES} = require("../constants/db");
const Schema = mongoose.Schema;
const { MODEL_NAMES } = require('../constants/db.js')

const userPlaceScheme = new Schema({
    idUser: { type: Schema.Types.ObjectId, required: true, ref: MODEL_NAMES.USER},
    idPlace: { type: Schema.Types.ObjectId, required: true, ref: MODEL_NAMES.PLACE},
    relation: {
        type: String,
        required: true,
        enum : Object.values(ENUM_USER_PLACE_STATES)
    }

});

userPlaceScheme.statics = {
    createUserPlace(user_place){
        let UserPlace = this;
        let forNewUserPlace = {
            idUser: user_place.idUser,
            idPlace: user_place.idPlace,
            relation: user_place.relation
        };
        let newUserPlace = new UserPlace(forNewUserPlace);

        return newUserPlace.save();
    }
};

userPlaceScheme.index({idUser: 1, idPlace: 1}, {unique: true});

exports.UserPlace = mongoose.model(MODEL_NAMES.USER_PLACE, userPlaceScheme);
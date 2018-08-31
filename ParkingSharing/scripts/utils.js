const {ENUM_USER_PLACE_STATES} = require("../constants/db");

module.exports.arrayMax = function(arr) {
    if (arr.length === 0){
        return 1;
    } else if(arr.length === 1) {
        return arr[0].number + 1;
    } else {
        return 1 + arr.reduce(function (p, v) {
            return ( p.number > v.number ? p.number : v.number );
        });
    }

};

module.exports.checkArrayOnFalse = function (arr) {
    return -1 !== arr.findIndex((value) => { return !!value;});
};


module.exports.mergeUserPlacesAndPlaces = function(userPlaces, places, currentUser){
    return places.map((place) => {

        userPlacesFiltered = userPlaces.filter((userPlace) => {
            return userPlace.idPlace.equals(place._id);
        });

        if(!userPlacesFiltered.length) {
            place.state = ENUM_USER_PLACE_STATES.FREE;
            return place;
        }
        let ownerIndex = userPlacesFiltered.findIndex((userPlace) => {
            return userPlace.relation === ENUM_USER_PLACE_STATES.TAKEN;
        });
        let owner = userPlacesFiltered[ownerIndex];
        if(owner){
            place.owner = owner.idUser;
            place.state = currentUser._id.equals(owner.idUser._id) ? ENUM_USER_PLACE_STATES.TAKEN : ENUM_USER_PLACE_STATES.BUSY;
            return place;
        }
        place.owner = null;
        place.state = ENUM_USER_PLACE_STATES.FREE;
        userPlacesFiltered.forEach((userPlace)=>{
            if(currentUser._id.equals(userPlace.idUser._id)){
                place.state = userPlace.relation;
            }
        });

        return place;

    });
};

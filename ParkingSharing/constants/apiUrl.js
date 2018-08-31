const API = "/api";
const ACCOUNT = API + "/account";
const PLACE = API + "/place";
const LOCATION = API + "/location";
const ADMIN = API + "/admin";
const FREE_DATE = API + "/free-date";

const LOGIN = "/login" ;
const GET_AUTH_USER_DATA = "/getAuthUserData" ;
const GET_CITIES = "/getCities" ;
const GET_LOCATIONS = "/getLocations" ;
const GET_PLACES = "/getPlaces" ;
const ADD_CITY = "/addCity";
const ADD_PLACE = "/addPlace";
const ADD_LOCATION = "/addLocation";
const GET_MY_PLACE = "/getMyPlace";
const REQUEST_FOR_TAKING_PLACE = "/take";
const REQUEST_FOR_REJECT_PLACE = "/reject";
const REQUEST_FOR_LEAVE_PLACE = "/leave";
const REQUEST_FOR_CANCEL_LEAVE_PLACE = "/cancelLeaving";
const GET_REQUEST_FOR_TAKING = "/getRequestsForTaking";
const ACCEPT_REQUESTS_FOR_TAKING = "/acceptRequestsForTaking";
const REJECT_REQUESTS_FOR_TAKING = "/rejectRequestsForTaking";
const GET_REQUEST_FOR_LEAVING = "/getRequestsForLeaving";
const ACCEPT_REQUESTS_FOR_LEAVING = "/acceptRequestsForLeaving";
const REJECT_REQUESTS_FOR_LEAVING = "/rejectRequestsForLeaving";

const ADD = "/add";
const REJECT = "/reject";
const TAKE = "/take";
const CANCEL = "/cancel";

module.exports.API_ROUTERS_PATHS = {
    ACCOUNT,
    LOCATION,
    PLACE,
    ADMIN,
    FREE_DATE
};



module.exports.API_METHOD_PATHS = {
    GET_AUTH_USER_DATA,
    LOGIN,
    GET_CITIES,
    GET_LOCATIONS,
    GET_PLACES,
    ADD_CITY,
    ADD_LOCATION,
    ADD_PLACE,
    GET_MY_PLACE,
    REQUEST_FOR_TAKING_PLACE,
    REQUEST_FOR_REJECT_PLACE,
    REQUEST_FOR_LEAVE_PLACE,
    REQUEST_FOR_CANCEL_LEAVE_PLACE,
    GET_REQUEST_FOR_TAKING,
    ACCEPT_REQUESTS_FOR_TAKING,
    REJECT_REQUESTS_FOR_TAKING,
    GET_REQUEST_FOR_LEAVING,
    ACCEPT_REQUESTS_FOR_LEAVING,
    REJECT_REQUESTS_FOR_LEAVING,
    ADD,
    REJECT,
    TAKE,
    CANCEL
};
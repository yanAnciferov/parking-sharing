import {CALENDAR_ACTION} from "../../constants/actions";
import {toggle, calendarSetDays, calendarSetBorrow, calendarSetFree} from "./calendarHandlers";


function getInitialState(){
    return {
        free: [],
        borrow: [],
        selected: [],
        multiSelectMode: false
    }
}

export default function (state = getInitialState(), action) {
    switch (action.type) {
        case CALENDAR_ACTION.CALENDAR_TOGGLE: return toggle(state, action);
        case CALENDAR_ACTION.CALENDAR_SET_DAYS: return calendarSetDays(state, action);
        case CALENDAR_ACTION.CALENDAR_SET_BORROW: return calendarSetBorrow(state, action);
        case CALENDAR_ACTION.CALENDAR_SET_FREE: return calendarSetFree(state, action);
        default: return state;
    }
}
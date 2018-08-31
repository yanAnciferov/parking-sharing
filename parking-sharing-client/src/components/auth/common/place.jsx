import React from 'react';
import {connect} from "react-redux";
import 'react-day-picker/lib/style.css';
import {Alert, Button} from "reactstrap";
import PlaceCalendar from "./place-calendar";
import 'react-toggle/style.css';
import Toggle from "../../common/toggle";
import {CALENDAR_ACTION_CREATORS} from "../../../action-creators/calendar";
import {IMAGE_BY_PLACE_TYPE} from "../../../content/place";
import {addFreeDate, rejectFreeDate} from "../../../action/free-date";
import {getButtonStateByArray, getStateForDay, getToday, getTomorrow } from "../../../scripts/place-view-utils";
import {STATE_FOR_DAY} from "../../../constants/modelFields";

class Place extends React.Component {

    getButton = () => {
        let { borrow, free } = this.props.calendar;
        let days = this.props.calendar.selected;
        if(!days.length)
        {
            return null;
        }
        return getButtonStateByArray(borrow, free, days);
    };

    render() {
        let { place, setSelectedDays, releaseDate, rejectDate, toggle, calendar , calendar: { free, borrow, selected, multiSelectMode } } = this.props;
        return (
            <div className="place-wrapper">
                <div className="place-header">
                    <div className="location-name">
                        {place.location.name} #{place.number}
                    </div>
                </div>
                <div className="place-content justify-content-between flex-wrap">
                    <div className="left-side d-flex">
                        <PlaceType type={place.type} />
                        <PlaceControlsSide {...calendar} place={place} releaseDate={releaseDate} rejectDate={rejectDate}  />
                    </div>
                    <div className="right-side d-flex justify-content-between flex-wrap">
                       <div className="releaseForLongTime">
                           <div className="calendar-wrapper">
                               <PlaceCalendar setSelectedDays={setSelectedDays} selectMode={multiSelectMode} selected={selected} modifiers={{free, borrow}} />
                           </div>
                           <div className="place-buttons">
                               <Toggle checked={multiSelectMode} onToggle={toggle}>Multi select</Toggle>
                               {this.getButton()}
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}


class PlaceType extends React.Component {
    render() {
        let { type } = this.props;
        return (
            <div className="placeType-wrapper">
                <div className="placeType">
                    <img src={IMAGE_BY_PLACE_TYPE[type]} alt="car"/>
                </div>
            </div>
        );
    }
}


class PlaceControlsSide extends React.Component {



    today = {
        release: <Button onClick={() => {
            this.props.releaseDate(this.props.place._id, [getToday()])
        }} color="success">Release for today</Button>,
        cancel: <Button>Cancel release for today</Button>,
        busy: <Alert color="warning">Your place is busy today</Alert>,
    };


    tomorrow = {
        release: <Button
            onClick={() => {
                this.props.releaseDate(this.props.place._id, [getTomorrow()])
            }}
            color="success">Release for tomorrow</Button>,
        cancel: <Button>Cancel release for tomorrow</Button>,
        busy: <Alert color="warning">Your place is busy tomorrow</Alert>,
    };


    render() {
        let { borrow, free } = this.props;
        return (
            <div className="place-buttons ml-3">
                <ButtonSwitcherByState {...this.today} state={getStateForDay(borrow, free, getToday())} />
                <ButtonSwitcherByState {...this.tomorrow} state={getStateForDay(borrow, free, getTomorrow())} />
            </div>
        );
    }
}




class ButtonSwitcherByState extends React.Component {
    render() {
        let { state, release, cancel, busy } = this.props;
        let forRender;
        if(state === STATE_FOR_DAY.RELEASE) forRender = cancel;
        else if(state === STATE_FOR_DAY.BORROW) forRender = busy;
        else forRender = release;
        return (
            <div>
                {forRender}
            </div>
        );
    }
}

export default connect(
    state => ({
        location: state.location,
        calendar: state.calendar
    }),
    dispatch => ({
        toggle: () => {
            dispatch(CALENDAR_ACTION_CREATORS.toggle());
        },
        setSelectedDays: (days) => {
            dispatch(CALENDAR_ACTION_CREATORS.setSelectedDays(days));
        },
        releaseDate: (idPlace, date) => {
            dispatch(addFreeDate(idPlace, date));
        },
        rejectDate: (idPlace, date) => {
            dispatch(rejectFreeDate(idPlace, date));
        }
    })
)(Place);
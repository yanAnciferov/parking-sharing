import React from "react";
import {DateUtils} from "react-day-picker";
import "../../../calendar.css"
import DayPicker from "react-day-picker";

class PlaceCalendar extends React.Component  {


    render() {
        let { selectMode } = this.props;

        return (
            <div>

                { selectMode ? <DayPickerSelectMode {...this.props}/> : <DayPickerViewMode {...this.props}/> }
            </div>
        );
    }
}

class DayPickerSelectMode extends React.Component {

    handleDayClick = (day, { selected }) => {
        let selectedDays = this.props.selected;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        this.props.setSelectedDays(selectedDays);
    };

    render() {
        return (
            <DayPicker
                showOutsideDays={true}
                enableOutsideDaysClick={false}
                todayButton="Go to Today"
                fromMonth={new Date(Date.now())}
                selectedDays={this.props.selected}
                onDayClick={this.handleDayClick}
                modifiers={this.props.modifiers}
                disabledDays={
                    {
                        before: new Date(Date.now())
                    }
                }
            />
        );
    }
}

class DayPickerViewMode extends React.Component {



    handleDayClick = (day, { selected }) => {
        let selectedDay = selected ? undefined : day;
        this.props.setSelectedDays(selectedDay ? [selectedDay] : []);
    };

    render() {
        return (
            <DayPicker
                showOutsideDays={true}
                enableOutsideDaysClick={false}
                todayButton="Go to Today"
                fromMonth={new Date(Date.now())}
                modifiers={this.props.modifiers}
                selectedDays={this.props.selected}
                onDayClick={this.handleDayClick}
                disabledDays={
                    {
                        before: new Date(Date.now())
                    }
                }
            />
        );
    }
}


export default PlaceCalendar;
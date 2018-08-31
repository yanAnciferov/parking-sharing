import RToggle from "react-toggle";
import React from "react";

class Toggle extends React.Component{
    render() {
        return (
            <div className="d-flex">
                <RToggle checked={this.props.checked} onChange={this.props.onToggle} icons={false}/>
                <span className="ml-1">{this.props.children}</span>
            </div>
        );
    }
}

export default Toggle;
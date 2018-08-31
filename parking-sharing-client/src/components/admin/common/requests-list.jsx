import React from "react";
import {Button, Table} from "reactstrap";

export class ListRequests extends React.Component{
    render() {
        let {list} = this.props;
        return !list ? null : (
            <Table bordered>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Location</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index) => {
                    return <Request key={index} item={item} {...this.props} />
                })}
                </tbody>
            </Table>

        )
    }
}

class Request extends React.Component {

    loading = (state, toDelete) => {
        this.setState({isLoading: state});
        if(toDelete) this.props.deleteRequest(this.props.item._id);
    };

    state = {
        isLoading: false
    };

    render(){
        let { item, acceptRequest, rejectRequest } = this.props;
        let { loading } = this;
        let { isLoading } = this.state;
        return (
            <tr >
                <th scope="row">{item.firstname} {item.lastname}</th>
                <td className="align-items-center">{item.number}</td>
                <td>{item.location.name}</td>
                <td>
                    <Button disabled={isLoading} onClick={()=>{acceptRequest(item._id, loading)}} className="m-r-1" color="success">
                        Accept
                    </Button>

                    <Button disabled={isLoading} onClick={()=>{rejectRequest(item._id, loading)}}>
                        Reject
                    </Button>
                </td>
            </tr>
        )
    }
}


export class NoRequests extends React.Component {
    render() {
        return(
            <div className="message-wrapper">
                <div className="message-container">
                    <div className="body-message">
                        No requests found
                    </div>
                </div>
            </div>
        );
    }
}

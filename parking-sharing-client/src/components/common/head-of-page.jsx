import React from 'react';

class PageHeader extends React.Component {
    render() {
        return(
            <div className="headOfPage">
                <h3 className="page-header">{this.props.children}</h3>
                <div className="logo-wrapper"><img src="/logo.png" alt="logo"/></div>
            </div>
        );
    }
}


export default PageHeader
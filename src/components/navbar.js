import React, {Component} from 'react';
import {connect} from "react-redux";
import {dashboardNavigate, loginUpdate} from "../store/Actions";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    logOut = (event) => {
        localStorage.clear();
        this.props.loginUpdate(false);
    };

    dashboardHandler = () => {
        this.props.dashboardNavigate(true)
    };

    itemListHandler = () => {
        this.props.dashboardNavigate(false)
    };


    render() {
        return (
            <div>
                <button onClick={this.dashboardHandler}>Dashboard</button>
                <button onClick={this.itemListHandler}>ItemList</button>
                <button onClick={this.logOut}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps, {loginUpdate, dashboardNavigate})(Navbar);

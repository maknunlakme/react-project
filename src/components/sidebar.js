import React, {Component} from 'react';
import {connect} from "react-redux";
import {salesNavigate} from "../store/Actions";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    };

    salesHandler = () => {
        console.log('saleseeee');
        this.props.salesNavigate(true);
    };

    customerHandler = () => {
        console.log('blaaah');
        this.props.salesNavigate(false);
    };

    render() {
        return (
            <div>
                <h1>Sidebar</h1>
                <button onClick={this.salesHandler}>Sales</button>
                <button onClick={this.customerHandler}>Customer</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {salesNavigate})(Sidebar);

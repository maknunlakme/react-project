import React, {Component} from 'react';
import {connect} from "react-redux";
import Sales from "./sales";
import Customer from "./customer";

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            this.props.sales ? <Sales/> : <Customer/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sales: state.navData.sales
    }
};

export default connect(mapStateToProps)(MainLayout);

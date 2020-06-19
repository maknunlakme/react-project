import React, {Component} from 'react';
import {connect} from "react-redux";

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        console.log('this sales: ', this.props.sales);
        return (
            this.props.sales ? <h2>Sales</h2> : <h2>Customer</h2>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sales: state.navData.sales
    }
};

export default connect(mapStateToProps)(MainLayout);

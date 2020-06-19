import React, {Component} from 'react';
import {connect} from "react-redux";
import Dashboard from "./dashboard";
import ItemList from "./itemList";

class HomeLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            this.props.dashboard ? <Dashboard/> : <ItemList/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dashboard: state.navData.dashboard
    }
};

export default connect(mapStateToProps)(HomeLayout);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import ItemList from './ItemList';

class HomeLayout extends Component {
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

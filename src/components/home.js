import React, {Component} from 'react';
import NavbarComponent from './NavbarComponent';
import HomeLayout from './HomeLayout';
import Loader from './Loader';
import {connect} from 'react-redux';
import {getSalesData} from '../store/Actions';

class Home extends Component {
    componentDidMount() {
        this.props.getSalesData();
    }

    render() {
        return (
            this.props.sales.length !== 0 ?
                <div>
                    <NavbarComponent/>
                    <HomeLayout/>
                </div> :
                <Loader/>
        )
    }
}

const mapStateToProps = state => ({
    sales: state.salesData.sales
});

export default connect(mapStateToProps, {getSalesData})(Home);

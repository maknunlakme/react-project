import React, {Component} from 'react';
import {connect} from 'react-redux';
import SalesBar from './SalesBar';
import SalesPie from './SalesPie';
import CustomerBar from './CustomerBar';
import CustomerPie from './CustomerPie';

class MainLayout extends Component {
    render() {
        return (
            this.props.sales ?
                <div>
                    <SalesBar/>
                    <SalesPie/>
                </div> :
                <div>
                    <CustomerBar/>
                    <CustomerPie/>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sales: state.navData.sales
    }
};

export default connect(mapStateToProps)(MainLayout);

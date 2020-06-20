import React, {Component} from 'react';
import MaterialTable from 'material-table';
import {connect} from "react-redux";
import {getSalesData} from "../store/Actions";

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {title: 'Name', field: 'customer_name'},
                {title: 'Product', field: 'product'},
                {title: 'District', field: 'district'},
                {title: 'Working Area', field: 'customer_work_area'},
                {title: 'Order Quantity', field: 'order_quantity', type: 'numeric'},
                {title: 'Order Date', field: 'date'},
            ]
        }
    }


    render() {
        return (
            <div className='item-list-background'>
            <MaterialTable
                title="Item List"
                columns={this.state.columns}
                data={this.props.sales}
            />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sales: state.salesData.sales,
    }
};

export default connect(mapStateToProps)(ItemList)

import React, {Component} from 'react';
import SalesBar from "./salesBar";
import SalesPie from "./salesPie";

class Sales extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div>
                <SalesBar/>
                <SalesPie/>
            </div>
        )
    }
}

export default Sales

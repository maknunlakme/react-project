import React, {Component} from 'react';
import CustomerBar from "./customerBar";
import CustomerPie from "./customerPie";

class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <CustomerBar/>
                <CustomerPie/>
            </>
        )
    }
}

export default Customer

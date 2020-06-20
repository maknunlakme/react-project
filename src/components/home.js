import React, {Component} from 'react';
import NavbarComponent from './navbarComponent';
import HomeLayout from "./homeLayout";
import Loader from "./loader";
import {connect} from "react-redux";
import {getSalesData} from "../store/Actions";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

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

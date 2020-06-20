import React, {Component} from 'react';
import {connect} from 'react-redux';
import {salesNavigate} from '../store/Actions';
import {Navbar, Nav} from 'react-bootstrap';

class Sidebar extends Component {
    salesHandler = () => {
        this.props.salesNavigate(true);
    };

    customerHandler = () => {
        this.props.salesNavigate(false);
    };

    render() {
        return (
            <Navbar bg="light" variant="light">
            <Nav className="flex-column">
               <Nav.Link onClick={this.salesHandler}>Sales</Nav.Link>
                <Nav.Link onClick={this.customerHandler}>Customer</Nav.Link>
            </Nav>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {salesNavigate})(Sidebar);

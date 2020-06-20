import React, {Component} from 'react';
import {connect} from "react-redux";
import {dashboardNavigate, loginUpdate} from "../store/Actions";
import {Navbar, Nav, Image} from 'react-bootstrap';


class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    logOut = (event) => {
        localStorage.clear();
        this.props.loginUpdate(false);
    };

    dashboardHandler = () => {
        this.props.dashboardNavigate(true)
    };

    itemListHandler = () => {
        this.props.dashboardNavigate(false)
    };


    render() {
        return (
            <Navbar bg="light" variant="light" fixed='top'>
                <Navbar.Brand>
                    <Image src={require('./../assets/earth .gif')} alt='logo' width='50px'/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={this.dashboardHandler}>Dashboard</Nav.Link>
                    <Nav.Link onClick={this.itemListHandler}>ItemList</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link onClick={this.logOut}>Logout</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {loginUpdate, dashboardNavigate})(NavbarComponent);

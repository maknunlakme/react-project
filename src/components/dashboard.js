import React, {Component} from 'react';
import Sidebar from "./sidebar";
import MainLayout from "./mainLayout";
import {Container, Row, Col} from "react-bootstrap";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs='12' sm='4' md='3' className='sidebar-background'>
                        <Sidebar/>
                    </Col>
                    <Col xs='12' sm='8' md='9' className='main-layout-background'>
                        <MainLayout/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard

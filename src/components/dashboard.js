import React, {Component} from 'react';
import Sidebar from './Sidebar';
import MainLayout from './MainLayout';
import {Container, Row, Col} from 'react-bootstrap';

class Dashboard extends Component {
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

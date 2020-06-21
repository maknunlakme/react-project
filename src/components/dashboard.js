import React, {Component} from 'react';
import Sidebar from './Sidebar';
import MainLayout from './MainLayout';
import {Container, Row, Col} from 'react-bootstrap';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className='split left'>
                    <Sidebar/>
                </div>
                <div className='split right'>
                    <MainLayout/>
                </div>
            </div>
        )
    }
}

export default Dashboard

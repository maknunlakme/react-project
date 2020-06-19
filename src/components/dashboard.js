import React, {Component} from 'react';
import Sidebar from "./sidebar";
import MainLayout from "./mainLayout";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Sidebar/>
                <MainLayout/>
            </div>
        )
    }
}

export default Dashboard

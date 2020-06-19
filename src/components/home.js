import React, {Component} from 'react';
import Navbar from '../components/navbar';
import {connect} from "react-redux";
import Dashboard from "./dashboard";
import ItemList from "./itemList";
import HomeLayout from "./homeLayout";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
                <Navbar/>
                <HomeLayout/>
            </div>
        )
    }
}

export default Home;

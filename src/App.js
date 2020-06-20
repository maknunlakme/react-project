import React, {Component} from 'react';
import Login from './components/login';
import './App.css';
import Home from './components/home';
import {connect} from 'react-redux';
import {getSalesData} from "./store/Actions";
import Loader from "./components/loader";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.login ? <Home/> : <Login/>
        );
    }
}

const mapStateToProps = state => ({
    login: state.LoginData.isLoggedIn,
});

export default connect(mapStateToProps)(App);

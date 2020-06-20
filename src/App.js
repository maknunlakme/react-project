import React, {Component} from 'react';
import Login from './components/Login';
import Home from './components/Home';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
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

import React, {Component} from 'react';
import Login from './components/login';
import './App.css';
import Home from './components/home';
import {connect} from 'react-redux';
import {getSalesData} from "./store/Actions";

class App extends Component {

  constructor(props) {
    super(props);
    this.props.getSalesData();
  }

  render() {
    return (
        this.props.login ? <Home/> : <Login/>
    );
  }
}

const mapStateToProps = state => ({
  login: state.LoginData.isLoggedIn
});

export default connect(mapStateToProps, {getSalesData})(App);

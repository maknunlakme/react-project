import React, {Component} from 'react';
import Login from './components/login';
import './App.css';
import Home from './components/home';
import {connect} from 'react-redux';

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
  login: state.LoginData.isLoggedIn
});

export default connect(mapStateToProps)(App);

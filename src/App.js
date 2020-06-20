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

  componentDidMount() {
    this.props.getSalesData();
  }

  render() {
    return (
        this.props.sales.length !== 0 ?
            (this.props.login ? <Home/> : <Login/>) : <Loader/>
    );
  }
}

const mapStateToProps = state => ({
  login: state.LoginData.isLoggedIn,
  sales: state.salesData.sales
});

export default connect(mapStateToProps, {getSalesData})(App);

import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {loginUpdate} from "../store/Actions";
import {Form, Button, Image} from "react-bootstrap";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit handler: ', this.state);
        axios.post('http://frontend.interview.dingi.work/user/login/', this.state)
            .then(res => {
                console.log('login response: ', res);
                localStorage.setItem('jwt_token', res.data.jwt_token);
                localStorage.setItem('user_details', JSON.stringify(res.data.user_details));
                this.props.loginUpdate(true);
            })
            .catch(err => {
                //this.props.login;
                console.log('login error: ', err);
            });
    };

    render() {
        return (
            <div className='login-page'>
                <Image src={require('./../assets/earth .gif')} alt='logo' fluid width='500px' className='login-logo'/>
                <br/>
                <Form.Group>
                    <Form.Control type="text" placeholder='username' value={this.state.username}
                                  onChange={this.handleUsernameChange}/>
                    <br/>
                    <Form.Control type="password" placeholder='password' value={this.state.password}
                                  onChange={this.handlePasswordChange}/>
                    <br/>
                    <Button variant="secondary" type="submit" onClick={this.handleSubmit} block>Submit</Button>
                </Form.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {loginUpdate})(Login);




import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUpdate} from '../store/Actions';
import {Form, Button, Image} from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            valid: false
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

    handleValidation = () => {
        let valid = true;
        if (!this.state.username) valid = false;
        if (!this.state.password) valid = false;
        this.setState({valid: valid});
        return valid;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.handleValidation()) {
            axios.post('http://frontend.interview.dingi.work/user/login/', this.state)
                .then(res => {
                    console.log('login successful');
                    localStorage.setItem('jwt_token', res.data.jwt_token);
                    this.props.loginUpdate(true);
                })
                .catch(err => {
                    alert('username or password is not valid');
                    console.log('login error: ', err);
                });
        } else {
            alert('form has errors');
        }
    };

    render() {
        return (
            <div className='login-page'>
                <Image src={require('./../assets/earth .gif')} alt='logo' fluid width='500px' className='login-logo'/>
                <br/>
                <Form onSubmit={this.handleSubmit} validated={this.state.valid}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder='username'
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            username cannot be empty
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Control
                            type="password"
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            required/>
                        <Form.Control.Feedback type="invalid">
                            password cannot be empty
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br/>
                    <Button variant="secondary" type="submit" block>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {loginUpdate})(Login);




import React, {Component} from 'react';
import {Image} from "react-bootstrap";

class Loader extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
                <Image src={require('./../assets/earth .gif')} alt='loader' fluid className='centered'/>
        )
    }
}

export default Loader

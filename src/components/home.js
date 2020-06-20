import React, {Component} from 'react';
import NavbarComponent from './navbarComponent';
import HomeLayout from "./homeLayout";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <NavbarComponent/>
                <HomeLayout/>
            </div>
        )
    }
}

export default Home;

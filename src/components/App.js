import React, {Component} from 'react';
import Nav from './common/Header/Nav';

import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/vendor/simple-line-icons/css/simple-line-icons.css';
import '../styles/vendor/fontawesome-free/css/all.min.css';
import '../styles/vendor/css/landing-page.min.css';

import MastHead from "./common/Header/MastHead";
import Grid from "./common/Body/Grid";
import ImageShowCase from "./common/Body/ImageShowCase";
import People from './common/Footer/People'


class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <MastHead/>
                <Grid/>
                <ImageShowCase/>
                <People/>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import Nav from './header/Nav';

import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../vendor/simple-line-icons/css/simple-line-icons.css';
import '../vendor/fontawesome-free/css/all.min.css';
import '../vendor/css/landing-page.min.css';

import MastHead from "./header/MastHead";
import Grid from "./body/Grid";
import ImageShowCase from "./body/ImageShowCase";
import People from './footer/People'


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

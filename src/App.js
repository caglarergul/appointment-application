import React, {Component} from 'react';
import Aux from './components/hoc/Auxiliary';
import {BrowserRouter} from 'react-router-dom';
import Layout from "./components/UI/Layout";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Aux>
                    <Layout/>
                </Aux>
            </BrowserRouter>
        );
    }
}

export default App;

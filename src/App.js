import React, {Component} from 'react';
import Aux from './components/hoc/Auxiliary';
import Layout from "./components/UI/Layout";
import 'bootstrap';

class App extends Component {
    render() {
        return (

                <Aux>
                    <Layout/>
                </Aux>
        );
    }
}

export default App;

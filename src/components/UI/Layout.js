/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import Aux from '../hoc/Auxiliary';
import Header from "./Header";


class Layout extends Component {
    render() {
        return (
            <Aux>

                <header className="container">
                    <Header/>
                </header>
                <main className="container"></main>
            </Aux>
        );
    }
}



export default Layout;

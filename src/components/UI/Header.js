/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import Aux from "../hoc/Auxiliary";

class Header extends Component {
    render() {
        return (
            <Aux>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Appointments</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Homepage <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/show-appointments">Show Appointments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add-appointment">Add an appointment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/show-payments">Show Payments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/show-customers">Show Customers</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Login</a>
                        </li>


                    </ul>

                </div>
            </nav>
            </Aux>
        );
    }
}


export default Header;

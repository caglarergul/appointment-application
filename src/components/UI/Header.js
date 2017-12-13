/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import Aux from "../hoc/Auxiliary";

class Header extends Component {
    render() {
        return (
            <Aux>
                <div className="bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark container no-padding">
                <a className="navbar-brand" href="#">Appointments</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"><i className="fa fa-home">&nbsp;</i><br />Homepage <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/show-appointments"><i className="fa fa-list">&nbsp;</i><br />Show Appointments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add-appointment"><i className="fa fa-map-marker">&nbsp;</i><br />Add an appointment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add-payment"><i className="fa fa-plus">&nbsp;</i><br />Add Payment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/show-payments"><i className="fa fa-money">&nbsp;</i><br />Show Payments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/show-customers"><i className="fa fa-users">&nbsp;</i><br />Show Customers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add-customer"><i className="fa fa-user-plus">&nbsp;</i><br />Add a new customer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="fa fa-sign-in">&nbsp;</i><br />Login</a>
                        </li>

                    </ul>


                </div>
            </nav>
                </div>
            </Aux>
        );
    }
}


export default Header;

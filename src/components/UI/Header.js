/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import Aux from "../hoc/Auxiliary";
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Aux>

                <div className="bg-dark">
                    <nav className="navbar navbar-expand-lg navbar-dark container">
                        <a className="navbar-brand" href="/">Appointments</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">&nbsp;</span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">

                                    <NavLink to="/" exact className="nav-link" activclassname="active"><i
                                        className="fa fa-home">&nbsp;</i><br/>Homepage </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/show-appointments" exact className="nav-link" activclassname="active"><i
                                        className="fa fa-list">&nbsp;</i><br/>Show Appointments</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/add-appointment" exact className="nav-link" activclassname="active"><i
                                        className="fa fa-map-marker">&nbsp;</i><br/>Add an appointment</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/add-payment" exact className="nav-link" activclassname="active"><i
                                        className="fa fa-plus">&nbsp;</i><br/>Add Payment</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/show-payments" exact className="nav-link" activclassname="active"><i
                                        className="fa fa-money">&nbsp;</i><br/>Show Payments</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/show-customers" exact className="nav-link" activclassname="active"><i
                                        className="fa fa-users">&nbsp;</i><br/>Show Customers</NavLink>

                                </li>


                                <li className="nav-item">
                                    <NavLink to="/add-customer" exact className="nav-link" activclassname="active"><i
                                        className="fa fa-user-plus">&nbsp;</i><br/>Add a new customer</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" exact className="nav-link" activclassname="active"><i
                                        className="fa fa-sign-in">&nbsp;</i><br/>Login</NavLink>
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

/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import Aux from '../hoc/Auxiliary';
import Header from "./Header";
import {BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ShowCustomers from '../Pages/ShowCustomers';
import AddCustomer from '../Pages/AddCustomer';
import ShowPayments from '../Pages/ShowPayments';
import ShowAppointments from '../Pages/ShowAppointments';
import AddAppointment from '../Pages/AddAppointment';
import AddPayment from '../Pages/AddPayment';
import PropTypes from 'prop-types';

class Layout extends Component {

    componentDidMount () {
       // console.log(this.props);
    }
    render() {


        return (
            <BrowserRouter>
                <Aux>

                        <header className="container-fluid no-padding">
                            <Header/>
                        </header>
                        <main className="container m-top-40">
                            <Route path="/" component={HomePage} exact/>
                            <Route path="/show-customers" component={ShowCustomers}/>
                            <Route path="/add-customer" component={AddCustomer}/>
                            <Route path="/add-payment" component={AddPayment}/>
                            <Route path="/add-appointment" component={AddAppointment}/>
                            <Route path="/show-appointments" component={ShowAppointments}/>
                            <Route path="/show-payments" component={ShowPayments}/>
                        </main>

                </Aux>
            </BrowserRouter>
        );
    }
}



export default Layout;

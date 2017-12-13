/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import Aux from '../hoc/Auxiliary';
import Header from "./Header";
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from '../HomePage';
import ShowCustomers from '../ShowCustomers';
import AddCustomer from '../AddCustomer';
import ShowPayments from '../ShowPayments';
import ShowAppointments from '../ShowAppointments';
import AddAppointment from '../AddAppointment';
import AddPayment from '../AddPayment';
class Layout extends Component {
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

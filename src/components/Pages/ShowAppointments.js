/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import Aux from "../hoc/Auxiliary";
import firebase from 'firebase';
import AppPartial from './Partial/AppointmentPartial';
import moment from 'moment';
import 'moment/locale/tr';

class ShowAppointments extends Component {

    state = {
        appointmentList: [],
        customerList: [],
        resultList: []
    };

    componentDidMount() {
        moment().format();
        this.showAppointments();
    }

    showAppointments = () => {
        const rows = firebase.database().ref('appointment');
        rows.on('value', (snapshot) => {
            let items = snapshot.val();
            let newStateCustomer = [];
            for (let item in items) {
                newStateCustomer.push({
                    __app_uid: item,
                    id: items[item].id,
                    isFirst: items[item].isFirst,
                    isOnline: items[item].isOnline,
                    date: moment(items[item].date).format('d MMMM YYYY - h:mm a')
                });
            }

            this.getCustomerNameHandler(newStateCustomer);

        });


    };

    getCustomerNameHandler = (appObject) => {

        let newStateCustomer = [];


        const rows = firebase.database().ref('customer');
        rows.on('value', (snapshot) => {
            let items = snapshot.val();
            for (let item in items) {
                newStateCustomer.push({
                    __customer_uid: item,
                    id: items[item].id,
                    firstName: items[item].firstName,
                    surname: items[item].surname
                });
                // calling username and surname.

            }
            this.setState({appointmentList: appObject});
            this.setState({customerList: newStateCustomer});
            //console.log(this.state);
            let newList = [];
            this.state.appointmentList.map(app => {


                this.state.customerList.map(cus => {
                    if (app.id === cus.__customer_uid) {
                        console.log("eşleşti!" + cus.firstName);

                        newList.push({
                            app_id: app.__app_uid,
                            id: app.id,
                            customer_id: cus.id,
                            firstname: cus.firstName,
                            surname: cus.surname,
                            date: app.date,
                            isFirst: app.isFirst,
                            isOnline: app.isOnline
                        });

                        return this.setState({resultList: newList});
                    } else {
                        return this.setState({resultList: newList});
                    }
                });
                return this.setState({resultList: newList});
            });

        });


    };


    render() {
        console.log(this.state);
        const appointments = Object.values(this.state.resultList).map((data, igKey) =>
            <AppPartial key={igKey} refid={data.app_id} id={data.customer_id} nameSurname={data.firstname + " " + data.surname} date={data.date}
                        isOnline={data.isOnline} isFirst={data.isFirst}/>
        );

        return (
            <Aux>
                <h2>Awaiting Appointments</h2>
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name Surname</th>
                        <th>Surname</th>
                        <th>First Appointment?</th>

                        <th>Online Appointment?</th>
                        <th style={{width: "60px"}}>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointments}
                    </tbody>
                </table>
            </Aux>
        );
    }
}


export default ShowAppointments;

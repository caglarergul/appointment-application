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
        customerList: []
    };

    componentDidMount () {
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
                    app_id: item,
                    user_id: items[item].id,
                    isFirst: items[item].isFirst,
                    namesurname : "",
                    isOnline: items[item].isOnline,
                    date: moment(items[item].date).format('d MMMM YYYY - h:mm a')
                });
            }
            this.setState({
                appointmentList: newStateCustomer
            });

            console.log(this.state.appointmentList);

        });
    };

    getCustomerNameHandler = () => {
        const rows = firebase.database().ref('customer');
        rows.on('value', (snapshot) => {
            let items = snapshot.val();
            let newStateCustomer = [];
            for (let item in items) {
                newStateCustomer.push({
                    user_id: item,
                    uid: items[item].id,
                    firstName: items[item].firstName,
                    surname: items[item].surname,
                });

                return
            }



        });
    };



    render() {

        const appointments = Object.values(this.state.appointmentList).map((data) =>
            <AppPartial key={data.app_id} refid={data.app_id} id={data.user_id} namesurname={data.namesurname} date={data.date} isOnline={data.isOnline} isFirst={data.isFirst} />
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
                        <th>Gender</th>

                        <th>Phone</th>
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

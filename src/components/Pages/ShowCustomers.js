/**
 * Created by caglarergul on 13.12.2017.
 */
import React, {Component} from 'react';
import firebase from '../../DAL/firebase';
import Aux from "../hoc/Auxiliary";
import CustomerPartial from './Partial/CustomerPartial';

class ShowCustomers extends Component {
    state = {showCustomerList: []};

    getCustomer = () => {
        const rows = firebase.database().ref('customer');
        rows.on('value', (snapshot) => {
            let items = snapshot.val();
            let newStateCustomer = [];
            for (let item in items) {
                newStateCustomer.push({
                    id: item,
                    uid: items[item].id,
                    refid: item,
                    firstName: items[item].firstName,
                    surname: items[item].surname,
                    age: items[item].age,
                    gender: items[item].gender,
                    phone: items[item].phone,
                    weight: items[item].weight,
                    height: items[item].height,
                    targetWeight: items[item].targetWeight,
                    disease: items[item].disease,
                    address: items[item].address
                });
            }
            this.setState({
                showCustomerList: newStateCustomer
            });


        });
    };

    componentDidMount() { // getting people from rest api w/ axios
        this.getCustomer();
    }

    render() {
        const customers = Object.values(this.state.showCustomerList).map((data) =>
            <CustomerPartial key={data.id} refid={data.refid} id={data.uid} firstName={data.firstName}
                             surname={data.surname} gender={data.gender} phone={data.phone} />
        );

        return (
            <Aux>
                <h2>All Customers</h2>
                <br/>
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Surname</th>
                        <th>Gender</th>

                        <th>Phone</th>
                        <th style={{width: "60px"}}>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers}
                    </tbody>
                </table>
            </Aux>
        );
    }
}


export default ShowCustomers;
